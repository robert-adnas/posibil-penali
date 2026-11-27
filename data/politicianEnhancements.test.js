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

test('archive date advances after a public verification and preserves a newer publication date', () => {
  const politicians = [
    { name: 'Public verification fixture', verified_at: '2090-02-01' },
    { name: 'Invalid verification fixture', verified_at: '2091-02-29' },
  ];

  assert.equal(buildDataset({
    metadata: { last_updated: '2090-01-01' },
    politicians,
  }).metadata.last_updated, '2090-02-01');

  assert.equal(buildDataset({
    metadata: { last_updated: '2090-03-01' },
    politicians,
  }).metadata.last_updated, '2090-03-01');
});
