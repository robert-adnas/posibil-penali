import assert from 'node:assert/strict';
import test from 'node:test';
import { BUY_ME_A_COFFEE_URL, SUPPORT_LINK_LABEL } from './support.js';

test('support link points to the Buy Me a Coffee profile', () => {
  assert.equal(BUY_ME_A_COFFEE_URL, 'https://www.buymeacoffee.com/robertadn');
});

test('support link label is short and project-focused', () => {
  assert.equal(SUPPORT_LINK_LABEL, 'Susține proiectul');
});
