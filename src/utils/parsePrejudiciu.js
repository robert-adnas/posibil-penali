const RON_TO_EUR = 0.2;
const EUR_TO_RON = 5;

const CONTEXT_PREFIXES = [
  String.raw`prejudici[a-z]*`,
  String.raw`pagub[a-z]*`,
  String.raw`plata\s+nelegal[a-z]*`,
  String.raw`plati\s+nelegale`,
  String.raw`alocarea\s+nelegal[a-z]*`,
  String.raw`incasand\s+nelegal[a-z]*`,
  String.raw`incasat[a-z]*\s+nelegal[a-z]*`,
  String.raw`determinand\s+plata\s+nelegal[a-z]*`,
  String.raw`obtin(?:and|ut[a-z]*)\s+(?:in\s+mod\s+)?nelegal[a-z]*`,
];

const CONTEXT_WINDOW_SOURCE = String.raw`[^.!?;\n]{0,120}?`;
const MONEY_NUMBER_SOURCE = String.raw`(?<amount>[\d](?:[\d.,\s]*\d)?)`;
const LEADING_EURO_SOURCE = String.raw`\u20AC\s*${MONEY_NUMBER_SOURCE}\s*(?<suffix>M|K)?`;
const TRAILING_EURO_SOURCE = String.raw`${MONEY_NUMBER_SOURCE}\s*(?<suffix>milion|milioane|miliard|miliarde|M|K)?\s*(?:de\s+)?euro`;
const LEI_SOURCE = String.raw`${MONEY_NUMBER_SOURCE}\s*(?<suffix>milion|milioane|miliard|miliarde|M|K)?\s*(?:de\s+)?(?:lei|ron)`;

const PREJUDICIU_PATTERNS = [
  { regex: buildContextPattern(LEADING_EURO_SOURCE), currency: 'eur' },
  { regex: buildContextPattern(TRAILING_EURO_SOURCE), currency: 'eur' },
  { regex: buildContextPattern(LEI_SOURCE), currency: 'lei' },
];

const DIACRITIC_MAP = {
  Ă: 'A',
  Â: 'A',
  Î: 'I',
  Ș: 'S',
  Ş: 'S',
  Ț: 'T',
  Ţ: 'T',
  ă: 'a',
  â: 'a',
  î: 'i',
  ș: 's',
  ş: 's',
  ț: 't',
  ţ: 't',
};

export function parsePrejudiciuEur(politician) {
  const crimeAmount = extractPrejudiciuAmounts(politician.crime || '');
  if (crimeAmount > 0) return crimeAmount;
  return extractPrejudiciuAmounts(politician.details || '');
}

function extractPrejudiciuAmounts(text) {
  const normalized = normalizeForMatching(text);
  const seen = new Set();
  let total = 0;

  for (const { regex, currency } of PREJUDICIU_PATTERNS) {
    for (const match of normalized.matchAll(regex)) {
      const amount = parseAmount(match.groups.amount, match.groups.suffix);
      if (!Number.isFinite(amount) || amount <= 0) continue;

      const key = `${currency}:${match.index}:${match[0]}`;
      if (seen.has(key)) continue;
      seen.add(key);

      total += currency === 'lei' ? amount * RON_TO_EUR : amount;
    }
  }

  return total;
}

function buildContextPattern(moneySource) {
  return new RegExp(
    String.raw`(?:${CONTEXT_PREFIXES.join('|')})${CONTEXT_WINDOW_SOURCE}${moneySource}`,
    'gi'
  );
}

function parseAmount(numStr, suffix) {
  const s = (suffix || '').toLowerCase();
  let num = parseLocalizedNumber(numStr, { scaled: Boolean(s) });
  if (!Number.isFinite(num)) return 0;

  if (s === 'm' || s.startsWith('milion') || s.startsWith('milioan')) num *= 1_000_000;
  else if (s === 'k') num *= 1_000;
  else if (s.startsWith('miliard')) num *= 1_000_000_000;

  return num;
}

function parseLocalizedNumber(numStr, { scaled = false } = {}) {
  const value = numStr
    .replace(/\s+/g, '')
    .replace(/^[^\d]+|[^\d]+$/g, '');

  if (!value) return 0;

  const hasDot = value.includes('.');
  const hasComma = value.includes(',');

  if (!hasDot && !hasComma) return Number(value);

  if (hasDot && hasComma) {
    const lastDot = value.lastIndexOf('.');
    const lastComma = value.lastIndexOf(',');
    const decimalSep = lastDot > lastComma ? '.' : ',';
    const thousandsSep = decimalSep === '.' ? ',' : '.';
    return Number(value.split(thousandsSep).join('').replace(decimalSep, '.'));
  }

  const separator = hasDot ? '.' : ',';
  const parts = value.split(separator);

  if (scaled && parts.length === 2) {
    return Number(`${parts[0]}.${parts[1]}`);
  }

  if (parts.length > 1 && parts.slice(1).every((part) => part.length === 3)) {
    return Number(parts.join(''));
  }

  return Number(`${parts[0]}.${parts.slice(1).join('')}`);
}

function normalizeForMatching(text) {
  return text.replace(/[ĂÂÎȘŞȚŢăâîșşțţ]/g, (char) => DIACRITIC_MAP[char] || char);
}

export function formatPrejudiciu(amount) {
  const ron = Math.round(amount * EUR_TO_RON);
  const formatted = new Intl.NumberFormat('ro-RO').format(ron);
  return `${formatted} lei`;
}
