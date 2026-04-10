import assert from 'node:assert/strict';
import test from 'node:test';
import { parsePrejudiciuEur } from './parsePrejudiciu.js';

test('counts explicit prejudice amounts from the crime field', () => {
  assert.equal(
    parsePrejudiciuEur({
      crime: 'Fraudă la privatizare (ICA - prejudiciu €60M)',
      details: '',
    }),
    60_000_000
  );

  assert.equal(
    parsePrejudiciuEur({
      crime: 'Abuz în serviciu; grup infracțional organizat; luare de mită (retrocedări ilegale de terenuri, prejudiciu €114M)',
      details: '',
    }),
    114_000_000
  );
});

test('ignores bribe amounts and falls back to prejudice in details', () => {
  assert.equal(
    parsePrejudiciuEur({
      crime: 'Luare de mită (€900K)',
      details: 'Dosarul indică un prejudiciu de €1.2M.',
    }),
    1_200_000
  );

  assert.equal(
    parsePrejudiciuEur({
      crime: 'Luare de mită',
      details: 'Condamnat definitiv pentru trafic de influență. A primit 92.500 euro pentru intervenții pe lângă membrii Guvernului.',
    }),
    0
  );
});

test('counts illegal payments or allocations that describe public loss', () => {
  assert.equal(
    parsePrejudiciuEur({
      crime: 'Abuz în serviciu',
      details: 'Condamnat pentru plata nelegală a aproape 936.000 lei către un executant.',
    }),
    187_200
  );

  assert.equal(
    parsePrejudiciuEur({
      crime: 'Abuz în serviciu',
      details: 'DNA l-a trimis în judecată pentru alocarea nelegală a 7,5 milioane lei din bugetul local.',
    }),
    1_500_000
  );
});

test('counts only the prejudice amount when the same text also mentions bribes', () => {
  assert.equal(
    parsePrejudiciuEur({
      crime: 'Fraudă fonduri PHARE/UE; luare de mită (€900K + prejudiciu €1.2M)',
      details: '',
    }),
    1_200_000
  );

  assert.equal(
    parsePrejudiciuEur({
      crime: 'Luare de mită; trafic de influență',
      details: 'După trimiterea în judecată, procurorii susțin că ar fi primit peste 1,15 milioane lei și 74.000 euro în legătură cu acte de urbanism.',
    }),
    0
  );
});

test('parses singular millions and large lei prejudices', () => {
  assert.equal(
    parsePrejudiciuEur({
      crime: '',
      details: 'Municipiul ar fi fost prejudiciat cu peste 1 milion de lei.',
    }),
    200_000
  );

  assert.equal(
    parsePrejudiciuEur({
      crime: '',
      details: 'Prejudiciu estimat la peste 1 miliard euro.',
    }),
    1_000_000_000
  );
});

test('prefers explicit audited amounts over parsed text', () => {
  assert.equal(
    parsePrejudiciuEur({
      prejudiciu_eur: 60_482_615,
      crime: 'FraudÄƒ la privatizare (ICA - prejudiciu â‚¬60M)',
      details: '',
    }),
    60_482_615
  );

  assert.equal(
    parsePrejudiciuEur({
      prejudiciu_eur: 0,
      crime: '',
      details: 'Dosarul vizeazÄƒ despÄƒgubiri de aproximativ 3.000.000 euro.',
    }),
    0
  );
});
