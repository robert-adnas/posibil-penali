import { nameToSlug } from './slug.js';

// Only recognized affiliation names may be split into a name and a note.
// Historical parties, alliances and unaffiliated people keep separate identities.
const PARTY_NAMES = [
  'ACT', 'ADN', 'ADU', 'ALDE', 'ANC', 'AUR', 'FCM', 'FD', 'FSN',
  'PC', 'PD', 'PDL', 'PDM', 'PDSR', 'PER', 'PMP', 'PNCR', 'PND', 'PNG',
  'PNG-CD', 'PNL', 'PNRR', 'PNȚCD', 'PP-DD', 'PPMPRR', 'PPR', 'PPU-SL',
  'PRM', 'PRU', 'PSD', 'PSDI', 'PUSL', 'REPER', 'UDMR', 'UDTTMR', 'UNPR',
  'USL', 'USR', 'Independent', 'Neafiliat', 'PLAN',
  'Alianța Tinerilor Democrați', 'Blocul Suveranist Român', 'București 2020',
  'Comunitatea Rușilor Lipoveni din România', 'Forța Democrată', 'Forța Dreptei',
  'Partid al minorităților naționale', 'Partida Romilor Pro-Europa',
  'Partidul Alianța Socialistă', 'Partidul Patrioților', 'Partidul Pentru Patrie',
  'Partidul România în Acțiune', 'Partidul Socialist Român', 'Partidul Verde',
  'Partidul pentru Odorheiu Secuiesc', 'Pro România', 'România Socialistă',
  'S.O.S. România', 'Uniunea Croaților din România',
  'Uniunea Culturală a Rutenilor din România', 'Viitorul Țării Făgărașului',
];

const PARTY_ALIASES = new Map(PARTY_NAMES.map((name) => [nameToSlug(name), name]));
PARTY_ALIASES.set('sos-romania', 'S.O.S. România');
PARTY_ALIASES.set('sos', 'S.O.S. România');
PARTY_ALIASES.set('pd-l', 'PDL');

export function splitPartyAffiliation(value) {
  const label = String(value || '').trim();
  const match = label.match(/^(.+?)\s+\((.+)\)$/);
  const candidate = match ? match[1].trim() : label;
  const party = PARTY_ALIASES.get(nameToSlug(candidate));

  if (!party) return { party: label, context: null };
  return { party, context: match ? match[2].trim() : null };
}

export function getPartyName(value) {
  return splitPartyAffiliation(value).party;
}

export function normalizePartyAffiliation(person) {
  const label = person.party_label ?? person.party;
  const { party, context } = splitPartyAffiliation(label);
  return {
    ...person,
    party,
    party_label: label,
    party_context: person.party_context ?? context,
  };
}

export function getPartySlugAliases(person) {
  const names = [person.party, person.party_label];
  for (const [alias, party] of PARTY_ALIASES) {
    if (party === person.party) names.push(alias);
  }
  return [...new Set(names.filter(Boolean).map(nameToSlug))];
}

export function resolvePartySlug(slug, people) {
  return people.find((person) => getPartySlugAliases(person).includes(slug))?.party ?? null;
}
