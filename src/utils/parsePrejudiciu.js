const RON_TO_EUR = 0.2; // approximate conversion

/**
 * Extract total prejudiciu (damages) in EUR from a politician's data.
 * Parses from crime field first; falls back to details if nothing found.
 * Returns 0 if no amount is found.
 */
export function parsePrejudiciuEur(politician) {
  const crimeAmount = extractAmounts(politician.crime || '');
  if (crimeAmount > 0) return crimeAmount;
  return extractAmounts(politician.details || '');
}

function extractAmounts(text) {
  let total = 0;

  // Match €-prefixed amounts: €60M, €900K, €1.2M, €300,000, €2.196M
  for (const m of text.matchAll(/€([\d,.]+)\s*(M|K)?/gi)) {
    total += parseEurAmount(m[1], m[2]);
  }

  // Match "X milioane/miliarde euro" (no € symbol)
  for (const m of text.matchAll(/([\d,.]+)\s*(milioane?|miliard[ae]?)\s*(?:de\s+)?euro/gi)) {
    total += parseEurAmount(m[1], m[2]);
  }

  // Match simple "X euro" (without milioane/miliarde, and without € prefix)
  // Only if no € amounts found to avoid double-counting
  if (total === 0) {
    for (const m of text.matchAll(/(?<!€)([\d,.]+)\s*euro/gi)) {
      total += parseEurAmount(m[1], null);
    }
  }

  // Match RON amounts: "30M lei", "X milioane lei"
  for (const m of text.matchAll(/([\d,.]+)\s*(milioane?|miliard[ae]?|M|K)?\s*lei/gi)) {
    total += parseEurAmount(m[1], m[2]) * RON_TO_EUR;
  }

  return total;
}

function parseEurAmount(numStr, suffix) {
  // Handle both "300,000" (EN) and "1.500" (may be RO thousands) formats
  // If has commas, treat as EN-style thousands separator
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

/**
 * Format an EUR amount as RON for display using Romanian locale: "5.950.000.000 lei"
 */
export function formatPrejudiciu(amount) {
  const ron = Math.round(amount * EUR_TO_RON);
  const formatted = new Intl.NumberFormat('ro-RO').format(ron);
  return `${formatted} lei`;
}
