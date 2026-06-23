import assert from 'node:assert/strict';
import test from 'node:test';
import * as politicalScope from './politicalScope.js';

test('counts political and extended records only inside the selected context', () => {
  assert.equal(typeof politicalScope.countDataScopes, 'function');

  const records = [
    { party: 'AUR', position_type: 'deputy' },
    { party: 'AUR', position_type: 'other', position: 'Funcționar public' },
    { party: 'PSD', position_type: 'senator' },
  ];

  assert.deepEqual(
    politicalScope.countDataScopes(records, (record) => record.party === 'AUR'),
    {
      political: 1,
      all: 2,
      excluded: 1,
    }
  );
});
