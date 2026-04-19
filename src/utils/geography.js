import { nameToSlug } from './slug.js';

export const GEOGRAPHY_BASES = [
  'office',
  'constituency',
  'political_base',
  'case_location',
  'hometown',
  'unknown',
];

export const GEOGRAPHY_BASIS_LABELS = {
  office: 'Functie publica relevanta',
  constituency: 'Circumscriptie reprezentata',
  political_base: 'Baza politica locala',
  case_location: 'Loc relevant al spetei',
  hometown: 'Origine / domiciliu public',
  unknown: 'Nespecificat public',
};

const POSITION_TYPE_TO_BASIS = {
  mayor: 'office',
  county_council_president: 'office',
  local_official: 'office',
  deputy: 'constituency',
  senator: 'constituency',
  minister: 'political_base',
  prime_minister: 'political_base',
  secretary_of_state: 'political_base',
  member_european_parliament: 'political_base',
  other: 'unknown',
};

function pickFirstString(...values) {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) return value.trim();
  }

  return null;
}

export function getCounty(politician) {
  return pickFirstString(politician?.geography?.county, politician?.county);
}

export function getCountySlug(politician) {
  const county = getCounty(politician);
  return county ? nameToSlug(county) : null;
}

export function getGeographyBasis(politician) {
  return politician?.geography?.basis || null;
}

export function getGeographyBasisLabel(basis) {
  return GEOGRAPHY_BASIS_LABELS[basis] || GEOGRAPHY_BASIS_LABELS.unknown;
}

export function inferGeographyBasis(politician) {
  const explicitBasis = politician?.geography?.basis;
  if (explicitBasis && GEOGRAPHY_BASES.includes(explicitBasis)) return explicitBasis;

  return POSITION_TYPE_TO_BASIS[politician?.position_type] || 'unknown';
}

export function normalizeGeography(politician, fallbackCounty = null) {
  const explicitGeography =
    politician?.geography && typeof politician.geography === 'object'
      ? politician.geography
      : null;

  const county = pickFirstString(
    explicitGeography?.county,
    politician?.county,
    fallbackCounty
  );

  if (!county) return null;

  const basis =
    explicitGeography?.basis && GEOGRAPHY_BASES.includes(explicitGeography.basis)
      ? explicitGeography.basis
      : inferGeographyBasis(politician);

  return {
    county,
    basis,
    locality: pickFirstString(explicitGeography?.locality),
    note: pickFirstString(explicitGeography?.note),
  };
}
