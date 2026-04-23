export const POSITION_LABELS = {
  prime_minister: 'Prim-ministru',
  minister: 'Ministru',
  senator: 'Senator',
  deputy: 'Deputat',
  mayor: 'Primar',
  county_council_president: 'Președinte CJ',
  member_european_parliament: 'Europarlamentar',
  secretary_of_state: 'Secretar de stat',
  local_official: 'Ales local',
  other: 'Altele',
};

export const STATUS_LABELS = {
  convicted: 'Condamnat definitiv',
  first_instance: 'Condamnat (primă instanță)',
  indicted: 'Trimis în judecată',
  investigated: 'Cercetat penal',
  prescribed: 'Prescris',
  closed: 'Clasat',
  acquitted: 'Achitat',
};

export function formatYears(years) {
  if (!years) return '';
  const wholeYears = Math.floor(years);
  const months = Math.round((years - wholeYears) * 12);
  if (months === 0) return `${wholeYears} ani`;
  if (wholeYears === 0) return `${months} luni`;
  return `${wholeYears} ani, ${months} luni`;
}
