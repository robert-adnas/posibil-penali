import assert from 'node:assert/strict';
import test from 'node:test';
import { applyFiltersToSearchParams, applyScopeToSearchParams, normalizeFilters, readFiltersFromSearchParams } from './filterParams.js';

test('adds extended archive scope while preserving existing search params', () => {
  const params = applyScopeToSearchParams(new URLSearchParams('status=convicted'), true);

  assert.equal(params.toString(), 'scope=all&status=convicted');
});

test('removes extended archive scope while preserving unrelated search params', () => {
  const params = applyScopeToSearchParams(new URLSearchParams('scope=all&status=convicted'), false);

  assert.equal(params.toString(), 'status=convicted');
});

test('saved filters with affiliation notes select the canonical party and retain other filters', () => {
  const filters = readFiltersFromSearchParams(new URLSearchParams({
    party: 'PNL (în 2024; anterior PSD)', status: 'convicted', scope: 'all',
  }));
  assert.equal(filters.party, 'PNL');
  assert.equal(filters.status, 'convicted');
  assert.equal(filters.scope, 'all');
  assert.equal(normalizeFilters({ party: 'SOS Romania' }).party, 'S.O.S. România');
  assert.equal(applyFiltersToSearchParams(new URLSearchParams('q=exemplu'), {
    ...filters, party: 'PSD (în 2016)',
  }).toString(), 'party=PSD&q=exemplu&scope=all&status=convicted');
});
