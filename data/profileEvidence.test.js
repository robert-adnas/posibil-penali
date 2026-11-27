import assert from 'node:assert/strict';
import test from 'node:test';
import rawData from './politicians.json' with { type: 'json' };
import { buildDataset } from './buildDataset.js';
import evidenceIndex from './profileEvidenceIndex.json' with { type: 'json' };
import { getProfileEvidence } from '../src/utils/profileEvidence.js';

const { politicians } = buildDataset(rawData);
const byName = new Map(politicians.map(profile => [profile.name, profile]));

test('the evidence index points only to public profiles and produces ordered, sourced milestones', () => {
  for (const name of Object.keys(evidenceIndex)) {
    const profile = byName.get(name);
    assert.ok(profile, name);
    const { chronologies } = getProfileEvidence(profile);
    assert.ok(chronologies.length, name);

    for (const { title, events } of chronologies) {
      assert.ok(title && events.length, name);
      const dates = events.map(event => event.date);
      assert.deepEqual(dates, [...dates].sort(), name);
      for (const event of events) {
        assert.ok(event.label && event.source.label, name);
        assert.equal(new URL(event.source.url).protocol, 'https:', name);
      }
    }
  }
});

test('an indexed status source expires when the reviewed profile date or status changes', () => {
  const profile = byName.get('Ioan Hoban');
  const evidence = getProfileEvidence(profile);
  assert.equal(evidence.currentStatusSource.url, 'https://www.dna.ro/comunicat.xhtml?id=6347');
  assert.equal(evidence.statusVerifiedAt, '2026-11-25');
  assert.deepEqual(evidence.chronologies[0].events.map(event => event.date), ['2008-08-21', '2015-05-27']);
  assert.equal(getProfileEvidence({ ...profile, status: 'acquitted' }).currentStatusSource, null);
  assert.equal(getProfileEvidence({ ...profile, verified_at: '2026-11-26' }).currentStatusSource, null);
});

test('curated chronologies preserve distinct cases without inferring one status source', () => {
  const evidence = getProfileEvidence(byName.get('Adrian Năstase'));
  assert.equal(evidence.chronologies.length, 2);
  const [firstCase, secondCase] = evidence.chronologies;
  assert.notEqual(firstCase.events.at(-1).source.url, secondCase.events.at(-1).source.url);
  assert.equal(evidence.currentStatusSource, null);
});
