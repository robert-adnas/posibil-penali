import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildDataset } from './buildDataset.js';

const rawData = JSON.parse(
  readFileSync(new URL('./politicians.json', import.meta.url), 'utf8')
);

test('does not link the Parava candidate Ichim Ion to DNA record 4487 by name alone', () => {
  const disputedMatches = buildDataset(rawData).politicians.filter((politician) => (
    politician.name === 'Ichim Ion'
    && politician.position?.includes('Parava')
    && politician.sources?.some((source) => source.url.includes('id=4487'))
  ));

  assert.deepEqual(disputedMatches, []);
});
