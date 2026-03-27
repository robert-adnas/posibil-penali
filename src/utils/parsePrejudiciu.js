const RON_TO_EUR = 0.2;

export function parsePrejudiciuEur(politician) {
  const crimeAmount = extractAmounts(politician.crime || '');
  if (crimeAmount > 0) return crimeAmount;
  return extractAmounts(politician.details || '');
}

function extractAmounts(text) {
  let total = 0;

  for (const m of text.matchAll(/€([\d,.]+)\s*(M|K)?/gi)) {
    total += parseEurAmount(m[1], m[2]);
  }

  for (const m of text.matchAll(/([\d,.]+)\s*(milioane?|miliard[ae]?)\s*(?:de\s+)?euro/gi)) {
    total += parseEurAmount(m[1], m[2]);
  }

  if (total === 0) {
    for (const m of text.matchAll(/(?<!€)([\d,.]+)\s*euro/gi)) {
      total += parseEurAmount(m[1], null);
    }
  }

  for (const m of text.matchAll(/([\d,.]+)\s*(milioane?|miliard[ae]?|M|K)?\s*lei/gi)) {
    total += parseEurAmount(m[1], m[2]) * RON_TO_EUR;
  }

  return total;
}

function parseEurAmount(numStr, suffix) {
  let cleaned = numStr.replace(/,/g, '');
  let num = parseFloat(cleaned);
  if (isNaN(num)) return 0;

  const s = (suffix || '').toLowerCase();
  if (s === 'm' || s.startsWith('milion')) num *= 1_000_000;
  else if (s === 'k') num *= 1_000;
  else if (s.startsWith('miliar')) num *= 1_000_000_000;

  return num;
}

const EUR_TO_RON = 5;

export function formatPrejudiciu(amount) {
  const ron = Math.round(amount * EUR_TO_RON);
  const formatted = new Intl.NumberFormat('ro-RO').format(ron);
  return `${formatted} lei`;
}
