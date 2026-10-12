import assert from 'node:assert/strict';
import test from 'node:test';
import rawData from '../../data/politicians.json' with { type: 'json' };
import { buildDataset } from '../../data/buildDataset.js';
import { isPoliticalActor } from './politicalScope.js';
import { nameToSlug } from './slug.js';
import { getPartyColor, getPartyToken } from './partyColors.js';
import { getPartyName, normalizePartyAffiliation, resolvePartySlug, splitPartyAffiliation } from './parties.js';

test('separates the documented context without inferring a different affiliation', () => {
  for (const [label, party, context] of [
    ['PNL (la data faptelor; ulterior ALDE)', 'PNL', 'la data faptelor; ulterior ALDE'],
    ['PSD (în 2024; anterior PNL)', 'PSD', 'în 2024; anterior PNL'],
    ['Independent (din 2024; ales pe lista PNL)', 'Independent', 'din 2024; ales pe lista PNL'],
    ['Neafiliat (ales AUR)', 'Neafiliat', 'ales AUR'],
  ]) {
    const result = normalizePartyAffiliation({ name: 'Exemplu', party: label });
    assert.equal(result.party, party);
    assert.equal(result.party_context, context);
    assert.equal(result.party_label, label);
    assert.deepEqual(normalizePartyAffiliation(result), result);
  }
});

test('unifies spelling aliases and colors while keeping historical parties and alliances distinct', () => {
  assert.equal(getPartyName('Pro Romania'), 'Pro România');
  assert.equal(getPartyName('SOS Romania'), 'S.O.S. România');
  assert.equal(getPartyName('S.O.S. România'), 'S.O.S. România');
  assert.equal(getPartyColor('PSD (în 2016)'), getPartyColor('PSD'));
  assert.equal(getPartyToken('SOS Romania'), getPartyToken('S.O.S. România'));
  for (const name of ['PD', 'PDL', 'PDSR', 'PSD', 'PNG', 'PNG-CD', 'PC', 'ALDE', 'USL', 'FD', 'Forța Democrată']) {
    assert.equal(getPartyName(name), name);
  }
  assert.deepEqual(splitPartyAffiliation('Formațiune necunoscută (aripa locală)'), {
    party: 'Formațiune necunoscută (aripa locală)', context: null,
  });
});

test('published and held records retain their complete label and one grouping per person', () => {
  for (const includeUnpublished of [false, true]) {
    const { politicians, changeLog } = buildDataset(rawData, { includeUnpublished });
    assert.equal(new Set(politicians.map(({ name }) => name)).size, politicians.length);
    const counts = new Map();
    for (const person of politicians) {
      assert.equal(person.party, getPartyName(person.party_label));
      assert.ok(!person.party.includes('('), `Unsplit affiliation: ${person.party}`);
      if (person.party_label.includes('(')) assert.ok(person.party_context);
      counts.set(person.party, (counts.get(person.party) || 0) + 1);
      assert.equal(resolvePartySlug(nameToSlug(person.party_label), politicians), person.party);
    }
    assert.equal([...counts.values()].reduce((a, b) => a + b, 0), politicians.length);
    assert.ok(changeLog.every(({ politician }) => politicians.includes(politician)));
    assert.ok(politicians.some((p) => isPoliticalActor(p) && p.party_context));
  }
});

test('legacy party routes resolve to the complete canonical party group', () => {
  const { politicians } = buildDataset(rawData);
  assert.equal(resolvePartySlug('pnl-in-2024-anterior-psd', politicians), 'PNL');
  assert.equal(resolvePartySlug('sos-romania', politicians), 'S.O.S. România');
  assert.equal(resolvePartySlug('pro-romania', politicians), 'Pro România');
  assert.equal(resolvePartySlug('partid-inexistent', politicians), null);
});
