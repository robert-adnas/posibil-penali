import assert from 'node:assert/strict';
import test from 'node:test';
import { matchesCountySlug } from './geography.js';

test('matches county slugs regardless of missing diacritics in data', () => {
  assert.equal(matchesCountySlug({ geography: { county: 'Ialomita' } }, 'ialomita'), true);
  assert.equal(matchesCountySlug({ geography: { county: 'Ialomița' } }, 'ialomita'), true);
});
