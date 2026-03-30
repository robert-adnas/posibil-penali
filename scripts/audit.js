#!/usr/bin/env node

import process from 'node:process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { buildDataset } from '../data/buildDataset.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = join(__dirname, '..', 'data', 'politicians.json');
const ACTIVE_STATUSES = new Set(['investigated', 'indicted', 'first_instance']);

function normalizeName(value) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z\s-]/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function nameTokens(value) {
  return normalizeName(value).split(' ').filter(Boolean);
}

function hasOfficialSource(politician) {
  return (politician.sources || []).some((source) => source.kind === 'official');
}

function findLikelyDuplicates(politicians) {
  const duplicates = [];

  for (let index = 0; index < politicians.length; index += 1) {
    for (let compareIndex = index + 1; compareIndex < politicians.length; compareIndex += 1) {
      const left = politicians[index];
      const right = politicians[compareIndex];

      if (left.position_type !== right.position_type) continue;

      const leftTokens = nameTokens(left.name);
      const rightTokens = new Set(nameTokens(right.name));
      const overlap = leftTokens.filter((token) => rightTokens.has(token)).length;

      if (overlap >= 2) {
        duplicates.push({
          left: left.name,
          right: right.name,
          position_type: left.position_type,
          overlap,
        });
      }
    }
  }

  return duplicates;
}

try {
  const raw = JSON.parse(readFileSync(dataPath, 'utf8'));
  const politicians = buildDataset(raw).politicians;

  const noOfficial = politicians.filter((politician) => !hasOfficialSource(politician));
  const singleSource = politicians.filter((politician) => (politician.sources || []).length === 1);
  const active = politicians
    .filter((politician) => ACTIVE_STATUSES.has(politician.status))
    .sort((left, right) => (left.verified_at || '').localeCompare(right.verified_at || ''));
  const likelyDuplicates = findLikelyDuplicates(politicians);

  console.log(`Audit for ${politicians.length} merged entries\n`);
  console.log(`No official sources: ${noOfficial.length}`);
  console.log(`Single-source entries: ${singleSource.length}`);
  console.log(`Active-status entries: ${active.length}`);
  console.log(`Likely duplicate people: ${likelyDuplicates.length}`);

  if (noOfficial.length > 0) {
    console.log('\nEntries without official sources:');
    noOfficial.forEach((politician) => {
      console.log(`- ${politician.name} | ${politician.status}`);
    });
  }

  if (likelyDuplicates.length > 0) {
    console.log('\nLikely duplicate people:');
    likelyDuplicates.forEach((duplicate) => {
      console.log(`- ${duplicate.left} <-> ${duplicate.right} | ${duplicate.position_type} | overlap=${duplicate.overlap}`);
    });
  }

  console.log('\nOldest active-status verifications:');
  active.slice(0, 15).forEach((politician) => {
    console.log(`- ${politician.name} | ${politician.status} | verified_at=${politician.verified_at || 'none'}`);
  });

  if (noOfficial.length > 0 || likelyDuplicates.length > 0) {
    console.log('\nAudit FAILED.');
    process.exit(1);
  }

  console.log('\nAudit PASSED.');
} catch (error) {
  console.error('Audit failed to run:', error.message);
  process.exit(1);
}
