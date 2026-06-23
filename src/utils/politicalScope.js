export const DATA_SCOPE = Object.freeze({
  POLITICAL: 'political',
  ALL: 'all',
});

export const DEFAULT_DATA_SCOPE = DATA_SCOPE.POLITICAL;

const POLITICAL_POSITION_TYPES = new Set([
  'prime_minister',
  'minister',
  'senator',
  'deputy',
  'member_european_parliament',
  'county_council_president',
  'mayor',
  'secretary_of_state',
]);

const PARTY_AFFILIATION_PATTERN = [
  'pnl',
  'psd',
  'pdl',
  'pd',
  'usr',
  'aur',
  'udmr',
  'png',
  'alde',
  'pmp',
  'prm',
  'unpr',
  'pc',
  'pntcd',
  'pp-dd',
  'sos',
  'partid',
].join('|');

const LOCAL_POLITICAL_PATTERNS = [
  /\bprimar\b/,
  /\bviceprimar\b/,
  /\bconsilier(?:\w*)\s+(?:local|judetean)\b/,
  /\bconsilier\s+in\s+consiliul\s+(?:local|judetean)\b/,
  /\bpresedinte\s+(?:al\s+)?consiliului\s+judetean\b/,
  /\bvicepresedinte\s+(?:al\s+)?consiliului\s+judetean\b/,
];

const PARTY_ROLE_PATTERNS = [
  new RegExp(`\\bpresedinte(?:\\s+interimar)?(?:\\s+al)?\\s+(?:filialei|filiala|organizatiei).*\\b(?:${PARTY_AFFILIATION_PATTERN})\\b`),
  /\bpresedinte\s+filiala\s+partid\b/,
  new RegExp(`\\b(?:prim[-\\s])?vicepresedinte\\b.*\\b(?:filiala|${PARTY_AFFILIATION_PATTERN})\\b`),
  new RegExp(`\\bsecretar\\s+general\\b.*\\b(?:filiala|${PARTY_AFFILIATION_PATTERN})\\b`),
  /\bcandidat\b.*\b(primaria|primar|consiliul|consiliu|judetean|deputat|senat|parlament)\b/,
  /\blider\b.*\bpartid\b/,
  new RegExp(`\\bpurtator\\s+de\\s+cuvant\\b.*\\b(?:${PARTY_AFFILIATION_PATTERN})\\b`),
];

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function getSearchableRoleText(person) {
  return normalizeText([person.position, person.role, person.notes].filter(Boolean).join(' '));
}

export function normalizeDataScope(scope) {
  return scope === DATA_SCOPE.ALL ? DATA_SCOPE.ALL : DEFAULT_DATA_SCOPE;
}

export function isExtendedDataScope(scope) {
  return normalizeDataScope(scope) === DATA_SCOPE.ALL;
}

export function isPoliticalActor(person) {
  if (!person) return false;
  if (POLITICAL_POSITION_TYPES.has(person.position_type)) return true;

  const roleText = getSearchableRoleText(person);

  if (person.position_type === 'local_official') {
    return LOCAL_POLITICAL_PATTERNS.some((pattern) => pattern.test(roleText));
  }

  if (/\bsubprefect\b|\bprefect\b/.test(roleText)) return true;

  return PARTY_ROLE_PATTERNS.some((pattern) => pattern.test(roleText));
}

export function countDataScopes(data, predicate = () => true) {
  let all = 0;
  let political = 0;

  data.forEach((person) => {
    if (!predicate(person)) return;

    all += 1;
    if (isPoliticalActor(person)) political += 1;
  });

  return {
    [DATA_SCOPE.POLITICAL]: political,
    [DATA_SCOPE.ALL]: all,
    excluded: all - political,
  };
}

export function matchesDataScope(person, scope) {
  return isExtendedDataScope(scope) || isPoliticalActor(person);
}
