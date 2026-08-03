#!/usr/bin/env node

import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { buildDataset } from '../data/buildDataset.js';
import { isPoliticalActor } from '../src/utils/politicalScope.js';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(SCRIPT_DIR, '..');
const DATA_PATH = join(ROOT_DIR, 'data', 'politicians.json');
const REVIEW_DIR = join(ROOT_DIR, 'data', 'reverification');
const MANIFEST_PATH = join(REVIEW_DIR, 'manifest.json');
const REVIEWS_PATH = join(REVIEW_DIR, 'reviews.json');
const PUBLICATION_PATH = join(REVIEW_DIR, 'publication.json');
const SCHEMA_VERSION = 1;
const ACTIVE_STATUSES = new Set(['investigated', 'indicted', 'first_instance']);
const SENTENCED_STATUSES = new Set(['convicted', 'first_instance', 'prescribed']);
const VALID_DECISIONS = new Set(['confirmed', 'corrected', 'removed']);
const VALID_IDENTITY_RESULTS = new Set(['confirmed', 'corrected', 'collision_resolved']);
const VALID_LEGAL_RESULTS = new Set(['confirmed', 'corrected', 'not_applicable']);
const VALID_SCOPE_RESULTS = new Set(['political', 'extended', 'exclude']);
const SAFETY_HOLD_FLAGS = new Set([
  'possible_name_collision',
  'no_official_source',
  'active_legal_status',
  'single_source',
]);

function today() {
  return new Date().toISOString().slice(0, 10);
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function loadPoliticians() {
  return buildDataset(readJson(DATA_PATH), { includeUnpublished: true }).politicians;
}

function loadPublicationReview() {
  if (!existsSync(PUBLICATION_PATH)) {
    return { schema_version: SCHEMA_VERSION, updated_at: null, holds: {} };
  }
  return readJson(PUBLICATION_PATH);
}

function loadManifest() {
  if (!existsSync(MANIFEST_PATH)) {
    throw new Error('Registrul nu exista. Ruleaza mai intai: npm run reverify -- init');
  }
  return readJson(MANIFEST_PATH);
}

function loadReviews() {
  if (!existsSync(REVIEWS_PATH)) {
    return { schema_version: SCHEMA_VERSION, updated_at: null, reviews: [] };
  }
  return readJson(REVIEWS_PATH);
}

function stableValue(value) {
  if (Array.isArray(value)) return value.map(stableValue);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, stableValue(value[key])])
    );
  }
  return value;
}

function profileHash(profile) {
  return createHash('sha256')
    .update(JSON.stringify(stableValue(profile)))
    .digest('hex');
}

function normalizeName(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function nameTokens(value) {
  return normalizeName(value).split(' ').filter(Boolean);
}

function nameSignature(value) {
  return [...new Set(nameTokens(value))].sort().join('|');
}

function buildSimilarNameIndex(politicians) {
  const similar = new Map(politicians.map((politician) => [politician.name, new Set()]));
  const exactSignatures = new Map();

  politicians.forEach((politician) => {
    const signature = nameSignature(politician.name);
    const matches = exactSignatures.get(signature) || [];
    matches.forEach((match) => {
      similar.get(politician.name).add(match.name);
      similar.get(match.name).add(politician.name);
    });
    matches.push(politician);
    exactSignatures.set(signature, matches);
  });

  for (let leftIndex = 0; leftIndex < politicians.length; leftIndex += 1) {
    const left = politicians[leftIndex];
    const leftTokens = new Set(nameTokens(left.name));
    if (leftTokens.size < 2) continue;

    for (let rightIndex = leftIndex + 1; rightIndex < politicians.length; rightIndex += 1) {
      const right = politicians[rightIndex];
      const rightTokens = new Set(nameTokens(right.name));
      if (rightTokens.size < 2) continue;

      const overlap = [...leftTokens].filter((token) => rightTokens.has(token)).length;
      const smallerSize = Math.min(leftTokens.size, rightTokens.size);
      const largerSize = Math.max(leftTokens.size, rightTokens.size);
      const isNearMatch = overlap >= 2 && overlap === smallerSize && overlap / largerSize >= 0.66;
      if (!isNearMatch) continue;

      similar.get(left.name).add(right.name);
      similar.get(right.name).add(left.name);
    }
  }

  return similar;
}

function buildRiskProfile(politician, context) {
  const flags = [];
  let score = 0;
  const sources = politician.sources || [];
  const similarNames = [...(context.similarNames.get(politician.name) || [])].sort((a, b) =>
    a.localeCompare(b, 'ro')
  );

  if (similarNames.length > 0) {
    flags.push('possible_name_collision');
    score += 100;
  }
  if (!sources.some((source) => source.kind === 'official')) {
    flags.push('no_official_source');
    score += 80;
  }
  if (ACTIVE_STATUSES.has(politician.status)) {
    flags.push('active_legal_status');
    score += 60;
  }
  if (!isPoliticalActor(politician)) {
    flags.push('extended_scope_inclusion');
    score += 40;
  }
  if (sources.length === 1) {
    flags.push('single_source');
    score += 25;
  }
  if (politician.party === 'Independent') {
    flags.push('independent_affiliation');
    score += 20;
  }
  if ((context.verificationDates.get(politician.verified_at) || 0) >= 25) {
    flags.push('bulk_verification_date');
    score += 10;
  }
  if (!politician.geography) {
    flags.push('missing_geography');
    score += 10;
  }
  if (SENTENCED_STATUSES.has(politician.status) && !politician.sentence) {
    flags.push('sentenced_status_without_sentence');
    score += 15;
  }

  return { risk_score: score, risk_flags: flags, similar_names: similarNames };
}

function buildManifest(politicians) {
  const verificationDates = new Map();
  politicians.forEach((politician) => {
    verificationDates.set(
      politician.verified_at,
      (verificationDates.get(politician.verified_at) || 0) + 1
    );
  });
  const context = {
    verificationDates,
    similarNames: buildSimilarNameIndex(politicians),
  };

  return {
    schema_version: SCHEMA_VERSION,
    created_at: today(),
    baseline_count: politicians.length,
    profiles: politicians.map((politician, index) => ({
      id: `RV-${String(index + 1).padStart(4, '0')}`,
      baseline_index: index,
      name: politician.name,
      party: politician.party,
      position: politician.position,
      position_type: politician.position_type,
      legal_status: politician.status,
      verified_at: politician.verified_at || null,
      source_urls: (politician.sources || []).map((source) => source.url),
      baseline_snapshot_hash: profileHash(politician),
      ...buildRiskProfile(politician, context),
    })),
  };
}

function parseArguments(values) {
  const [command = 'status', ...rest] = values;
  const options = { evidence: [] };

  for (let index = 0; index < rest.length; index += 1) {
    const token = rest[index];
    if (!token.startsWith('--')) throw new Error(`Argument neasteptat: ${token}`);
    const key = token.slice(2);
    const value = rest[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`Lipseste valoarea pentru --${key}`);
    index += 1;
    if (key === 'evidence') options.evidence.push(value);
    else options[key.replaceAll('-', '_')] = value;
  }

  return { command, options };
}

function findManifestProfile(manifest, options) {
  const profile = options.id
    ? manifest.profiles.find((candidate) => candidate.id === options.id)
    : manifest.profiles.find(
      (candidate) => normalizeName(candidate.name) === normalizeName(options.name)
    );
  if (!profile) throw new Error('Profilul nu a fost gasit in registru. Foloseste --id sau --name.');
  return profile;
}

function findCurrentProfile(politicians, manifestProfile, review, currentName) {
  const lookupName = currentName || review?.current_name || manifestProfile.name;
  return politicians.find(
    (politician) => normalizeName(politician.name) === normalizeName(lookupName)
  );
}

function printProfile(manifestProfile, currentProfile, review) {
  console.log(JSON.stringify({
    registry: manifestProfile,
    current_profile: currentProfile || null,
    review: review || null,
  }, null, 2));
}

function initRegistry() {
  if (existsSync(MANIFEST_PATH) || existsSync(REVIEWS_PATH)) {
    throw new Error('Registrul exista deja; initializarea nu il suprascrie.');
  }
  const politicians = loadPoliticians();
  mkdirSync(REVIEW_DIR, { recursive: true });
  const manifest = buildManifest(politicians);
  writeJson(MANIFEST_PATH, manifest);
  writeJson(REVIEWS_PATH, {
    schema_version: SCHEMA_VERSION,
    updated_at: today(),
    reviews: [],
  });
  console.log(`Registru initializat pentru ${politicians.length} profiluri.`);
}

function statusRegistry() {
  const manifest = loadManifest();
  const reviewsDocument = loadReviews();
  const reviewsById = new Map(reviewsDocument.reviews.map((review) => [review.profile_id, review]));
  const publicationReview = loadPublicationReview();
  const pending = manifest.profiles.filter((profile) => !reviewsById.has(profile.id));
  const decisionCounts = {};
  reviewsDocument.reviews.forEach((review) => {
    decisionCounts[review.decision] = (decisionCounts[review.decision] || 0) + 1;
  });
  const flagCounts = {};
  pending.forEach((profile) => profile.risk_flags.forEach((flag) => {
    flagCounts[flag] = (flagCounts[flag] || 0) + 1;
  }));

  console.log(JSON.stringify({
    total: manifest.profiles.length,
    completed: reviewsDocument.reviews.length,
    pending: pending.length,
    publication_holds: Object.keys(publicationReview.holds).length,
    progress_percent: Number(((reviewsDocument.reviews.length / manifest.profiles.length) * 100).toFixed(2)),
    decisions: decisionCounts,
    pending_risk_flags: Object.fromEntries(
      Object.entries(flagCounts).sort((left, right) => right[1] - left[1])
    ),
  }, null, 2));
}

function showProfile(options) {
  const manifest = loadManifest();
  const reviewsDocument = loadReviews();
  const politicians = loadPoliticians();
  const manifestProfile = findManifestProfile(manifest, options);
  const review = reviewsDocument.reviews.find((candidate) => candidate.profile_id === manifestProfile.id);
  const currentProfile = findCurrentProfile(politicians, manifestProfile, review, options.current_name);
  printProfile(manifestProfile, currentProfile, review);
}

function nextProfile(options) {
  const manifest = loadManifest();
  const reviewsDocument = loadReviews();
  const politicians = loadPoliticians();
  const reviewedIds = new Set(reviewsDocument.reviews.map((review) => review.profile_id));
  const pending = manifest.profiles.filter((profile) => !reviewedIds.has(profile.id));
  if (options.order !== 'dataset') {
    pending.sort((left, right) => right.risk_score - left.risk_score || left.id.localeCompare(right.id));
  }
  const manifestProfile = pending[0];
  if (!manifestProfile) {
    console.log('Toate profilurile din registru sunt reverificate.');
    return;
  }
  const currentProfile = findCurrentProfile(politicians, manifestProfile);
  printProfile(manifestProfile, currentProfile, null);
}

function assertChoice(value, validValues, optionName) {
  if (!validValues.has(value)) {
    throw new Error(`Valoare invalida pentru --${optionName}: ${value || '(lipsa)'}`);
  }
}

function completeProfile(options) {
  const manifest = loadManifest();
  const reviewsDocument = loadReviews();
  const politicians = loadPoliticians();
  const manifestProfile = findManifestProfile(manifest, options);
  if (reviewsDocument.reviews.some((review) => review.profile_id === manifestProfile.id)) {
    throw new Error(`${manifestProfile.id} este deja reverificat; registrul nu suprascrie auditul.`);
  }

  assertChoice(options.decision, VALID_DECISIONS, 'decision');
  assertChoice(options.identity, VALID_IDENTITY_RESULTS, 'identity');
  assertChoice(options.legal_status, VALID_LEGAL_RESULTS, 'legal-status');
  assertChoice(options.scope, VALID_SCOPE_RESULTS, 'scope');
  if (!options.reviewer) throw new Error('Lipseste --reviewer.');
  if (options.evidence.length === 0) throw new Error('Este necesara cel putin o sursa --evidence.');
  options.evidence.forEach((url) => {
    const parsed = new URL(url);
    if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error(`URL invalid: ${url}`);
  });
  if (options.decision !== 'confirmed' && !options.note) {
    throw new Error('Corectarea sau eliminarea necesita --note.');
  }

  const currentProfile = findCurrentProfile(
    politicians,
    manifestProfile,
    null,
    options.current_name
  );
  if (options.decision !== 'removed' && !currentProfile) {
    throw new Error('Profilul curent nu a fost gasit; pentru un nume corectat foloseste --current-name.');
  }
  if (options.decision === 'removed' && currentProfile) {
    throw new Error('Profilul exista inca in setul de date; elimina-l inainte de a inregistra decizia removed.');
  }

  const review = {
    profile_id: manifestProfile.id,
    original_name: manifestProfile.name,
    current_name: currentProfile?.name || null,
    decision: options.decision,
    identity: options.identity,
    legal_status: options.legal_status,
    scope: options.scope,
    reviewed_at: options.date || today(),
    reviewer: options.reviewer,
    evidence: options.evidence,
    note: options.note || null,
    reviewed_snapshot_hash: currentProfile ? profileHash(currentProfile) : null,
  };

  reviewsDocument.updated_at = review.reviewed_at;
  reviewsDocument.reviews.push(review);
  writeJson(REVIEWS_PATH, reviewsDocument);
  const publicationReview = loadPublicationReview();
  delete publicationReview.holds[manifestProfile.name];
  if (currentProfile) delete publicationReview.holds[currentProfile.name];
  publicationReview.updated_at = review.reviewed_at;
  writeJson(PUBLICATION_PATH, publicationReview);
  console.log(`Reverificare inregistrata: ${manifestProfile.id} - ${manifestProfile.name} (${options.decision}).`);
}

function applySafetyHolds() {
  const manifest = loadManifest();
  const reviewsDocument = loadReviews();
  const politicians = loadPoliticians();
  const currentNames = new Set(politicians.map((politician) => politician.name));
  const reviewedIds = new Set(reviewsDocument.reviews.map((review) => review.profile_id));
  const publicationReview = loadPublicationReview();
  let added = 0;

  manifest.profiles.forEach((profile) => {
    if (reviewedIds.has(profile.id) || !currentNames.has(profile.name)) return;
    const reasons = profile.risk_flags.filter((flag) => SAFETY_HOLD_FLAGS.has(flag));
    if (reasons.length === 0) return;

    if (!publicationReview.holds[profile.name]) added += 1;
    publicationReview.holds[profile.name] = {
      held_at: today(),
      reasons,
      profile_id: profile.id,
    };
  });

  publicationReview.updated_at = today();
  writeJson(PUBLICATION_PATH, publicationReview);
  console.log(
    `Hold-uri adaugate: ${added}; total ascunse editorial: ${Object.keys(publicationReview.holds).length}.`
  );
}

function holdProfile(options) {
  const manifest = loadManifest();
  const manifestProfile = findManifestProfile(manifest, options);
  if (!options.reason) throw new Error('Lipseste --reason.');
  const publicationReview = loadPublicationReview();
  publicationReview.holds[manifestProfile.name] = {
    held_at: today(),
    reasons: [options.reason],
    profile_id: manifestProfile.id,
  };
  publicationReview.updated_at = today();
  writeJson(PUBLICATION_PATH, publicationReview);
  console.log(`Profil ascuns editorial: ${manifestProfile.id} - ${manifestProfile.name}.`);
}

function checkRegistry() {
  const manifest = loadManifest();
  const reviewsDocument = loadReviews();
  const politicians = loadPoliticians();
  const manifestIds = new Set(manifest.profiles.map((profile) => profile.id));
  const reviewIds = new Set();
  const trackedCurrentNames = new Set();
  const errors = [];
  const publicationReview = loadPublicationReview();

  reviewsDocument.reviews.forEach((review) => {
    if (!manifestIds.has(review.profile_id)) errors.push(`Review fara profil in manifest: ${review.profile_id}`);
    if (reviewIds.has(review.profile_id)) errors.push(`Review duplicat: ${review.profile_id}`);
    reviewIds.add(review.profile_id);

    const manifestProfile = manifest.profiles.find((profile) => profile.id === review.profile_id);
    if (!manifestProfile) return;
    const currentProfile = findCurrentProfile(politicians, manifestProfile, review);
    if (review.decision === 'removed') {
      if (currentProfile) errors.push(`${review.profile_id} este marcat removed, dar profilul exista.`);
      return;
    }
    if (!currentProfile) {
      errors.push(`${review.profile_id} nu mai exista sub numele reverificat ${review.current_name}.`);
      return;
    }
    trackedCurrentNames.add(normalizeName(currentProfile.name));
    if (publicationReview.holds[currentProfile.name]) {
      errors.push(`${review.profile_id} este reverificat, dar a ramas ascuns editorial.`);
    }
    if (profileHash(currentProfile) !== review.reviewed_snapshot_hash) {
      errors.push(`${review.profile_id} s-a modificat dupa reverificare: ${currentProfile.name}.`);
    }
  });

  manifest.profiles
    .filter((profile) => !reviewIds.has(profile.id))
    .forEach((profile) => trackedCurrentNames.add(normalizeName(profile.name)));

  politicians.forEach((politician) => {
    if (!trackedCurrentNames.has(normalizeName(politician.name))) {
      errors.push(`Profil curent neinregistrat in manifest: ${politician.name}.`);
    }
  });

  Object.keys(publicationReview.holds).forEach((name) => {
    if (!politicians.some((politician) => politician.name === name)) {
      errors.push(`Hold editorial fara profil curent: ${name}.`);
    }
  });

  console.log(`Manifest: ${manifest.profiles.length}; date curente: ${politicians.length}; reviews: ${reviewsDocument.reviews.length}.`);
  if (errors.length > 0) {
    errors.forEach((error) => console.error(`ERROR: ${error}`));
    process.exitCode = 1;
    return;
  }
  console.log('Registrul de reverificare este coerent.');
}

function printHelp() {
  console.log(`Comenzi:
  npm run reverify -- init
  npm run reverify -- status
  npm run reverify -- next [--order dataset]
  npm run reverify -- show --id RV-0001
  npm run reverify -- hold --id RV-0001 --reason "motiv"
  npm run reverify -- apply-safety-holds
  npm run reverify -- complete --id RV-0001 --decision corrected \\
    --identity confirmed --legal-status confirmed --scope political \\
    --reviewer "Nume" --evidence https://... [--evidence https://...] --note "..."
  npm run reverify -- check`);
}

try {
  const { command, options } = parseArguments(process.argv.slice(2));
  if (command === 'init') initRegistry();
  else if (command === 'status') statusRegistry();
  else if (command === 'next') nextProfile(options);
  else if (command === 'show') showProfile(options);
  else if (command === 'hold') holdProfile(options);
  else if (command === 'apply-safety-holds') applySafetyHolds();
  else if (command === 'complete') completeProfile(options);
  else if (command === 'check') checkRegistry();
  else if (command === 'help' || command === '--help') printHelp();
  else throw new Error(`Comanda necunoscuta: ${command}`);
} catch (error) {
  console.error(`Reverificarea a esuat: ${error.message}`);
  process.exitCode = 1;
}
