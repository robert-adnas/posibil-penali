import assert from 'node:assert/strict';
import test from 'node:test';
import { applyScopeToSearchParams } from './filterParams.js';

test('adds extended archive scope while preserving existing search params', () => {
  const params = applyScopeToSearchParams(new URLSearchParams('status=convicted'), true);

  assert.equal(params.toString(), 'scope=all&status=convicted');
});

test('removes extended archive scope while preserving unrelated search params', () => {
  const params = applyScopeToSearchParams(new URLSearchParams('scope=all&status=convicted'), false);

  assert.equal(params.toString(), 'status=convicted');
});
