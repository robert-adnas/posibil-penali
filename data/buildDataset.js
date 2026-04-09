import {
  metadataOverrides,
  politicianAdditions,
  politicianOverrides,
  countyOverrides,
} from './politicianEnhancements.js';
import { manualChangeEntries } from './changeLog.js';

const HOST_LABELS = {
  'agerpres.ro': 'AGERPRES',
  'cdep.ro': 'Camera Deputaților',
  'digi24.ro': 'Digi24',
  'dna.ro': 'DNA',
  'en.wikipedia.org': 'Wikipedia',
  'g4media.ro': 'G4Media',
  'hotnews.ro': 'HotNews',
  'integritate.eu': 'ANI',
  'mediafax.ro': 'Mediafax',
  'mpublic.ro': 'Ministerul Public',
  'old.integritate.eu': 'ANI',
  'portal.just.ro': 'portal.just',
  'politiaromana.ro': 'Poliția Română',
  'ro.wikipedia.org': 'Wikipedia',
  'romanialibera.ro': 'România Liberă',
  'romaniacurata.ro': 'România Curată',
  'senat.ro': 'Senatul României',
  'wikipedia.org': 'Wikipedia',
};

const OFFICIAL_HOSTS = [
  'ani.ro',
  'cdep.ro',
  'dna.ro',
  'gov.ro',
  'integritate.eu',
  'just.ro',
  'mai.gov.ro',
  'mpublic.ro',
  'old.integritate.eu',
  'politiaromana.ro',
  'pna.ro',
  'portal.just.ro',
  'scj.ro',
  'senat.ro',
];

const KIND_PRIORITY = {
  official: 0,
  profile: 1,
  press: 2,
};

function inferSourceKind(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    if (host.endsWith('wikipedia.org')) return 'profile';
    if (OFFICIAL_HOSTS.some((candidate) => host === candidate || host.endsWith(`.${candidate}`))) {
      return 'official';
    }
  } catch {
    return 'press';
  }

  return 'press';
}

function inferSourceLabel(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    if (HOST_LABELS[host]) return HOST_LABELS[host];
    if (host.endsWith('wikipedia.org')) return 'Wikipedia';
    return host;
  } catch {
    return 'Sursă';
  }
}

function normalizeSource(source) {
  if (!source) return null;

  const raw = typeof source === 'string' ? { url: source } : source;
  if (!raw.url) return null;

  return {
    label: raw.label || inferSourceLabel(raw.url),
    kind: raw.kind || inferSourceKind(raw.url),
    url: raw.url,
    description: raw.description,
    source_type: raw.source_type,
    published_at: raw.published_at,
  };
}

function mergeSources(...sourceCollections) {
  const seen = new Set();
  const merged = [];

  sourceCollections
    .flatMap((collection) => {
      if (!collection) return [];
      return Array.isArray(collection) ? collection : [collection];
    })
    .map(normalizeSource)
    .filter(Boolean)
    .forEach((source) => {
      if (seen.has(source.url)) return;
      seen.add(source.url);
      merged.push(source);
    });

  return merged.sort((a, b) => {
    const kindDelta = (KIND_PRIORITY[a.kind] ?? 99) - (KIND_PRIORITY[b.kind] ?? 99);
    if (kindDelta !== 0) return kindDelta;
    return a.label.localeCompare(b.label, 'ro');
  });
}

function mergePolitician(basePolitician, override = {}) {
  const { replace_sources: replaceSources, ...safeOverride } = override;
  const merged = { ...basePolitician, ...safeOverride };
  if (replaceSources) {
    delete merged.source_url;
    delete merged.sources;
  }
  const sources = replaceSources
    ? mergeSources(safeOverride.source_url, safeOverride.sources)
    : mergeSources(basePolitician?.source_url, basePolitician?.sources, safeOverride.source_url, safeOverride.sources);

  if (sources.length > 0) {
    merged.sources = sources;
    merged.source_url = sources[0].url;
  }

  return merged;
}

function applyCounty(politician) {
  if (politician.county) return politician;
  const county = countyOverrides[politician.name];
  if (county) return { ...politician, county };
  return politician;
}

function buildChangeLog(baseData, politicians) {
  const baseByName = new Map(baseData.politicians.map((politician) => [politician.name, politician]));

  const derivedEntries = politicians.flatMap((politician) => {
    if (!politician.verified_at) return [];

    const before = baseByName.get(politician.name);

    if (!before) {
      return [{
        date: politician.verified_at,
        politician: politician.name,
        kind: 'entry_added',
      }];
    }

    if (before.status !== politician.status) {
      return [{
        date: politician.verified_at,
        politician: politician.name,
        kind: 'status_change',
        status_from: before.status,
        status_to: politician.status,
        title: 'Statusul afișat în arhivă a fost actualizat',
      }];
    }

    return [];
  });

  return [...derivedEntries, ...manualChangeEntries]
    .map((entry, index) => {
      const politician = politicians.find((candidate) => candidate.name === entry.politician);
      if (!politician) return null;

      return {
        id: entry.id || `${entry.date}:${entry.kind}:${politician.name}:${index}`,
        ...entry,
        source_url: entry.source_url || politician?.sources?.[0]?.url || politician?.source_url || null,
        politician,
      };
    })
    .filter(Boolean)
    .sort((left, right) => {
      const dateDelta = new Date(right.date).getTime() - new Date(left.date).getTime();
      if (dateDelta !== 0) return dateDelta;
      return left.politician.name.localeCompare(right.politician.name, 'ro');
    });
}

export function buildDataset(baseData) {
  const basePoliticians = baseData.politicians
    .map((politician) => mergePolitician(politician, politicianOverrides[politician.name] || {}))
    .map(applyCounty);

  const existingNames = new Set(basePoliticians.map((politician) => politician.name));
  const additions = politicianAdditions
    .filter((politician) => !existingNames.has(politician.name))
    .map((politician) => mergePolitician(politician, politicianOverrides[politician.name] || {}))
    .map(applyCounty);

  const politicians = [...basePoliticians, ...additions];

  return {
    metadata: {
      ...baseData.metadata,
      ...metadataOverrides,
    },
    politicians,
    changeLog: buildChangeLog(baseData, politicians),
  };
}
