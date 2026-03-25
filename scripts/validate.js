#!/usr/bin/env node

import process from 'node:process';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { buildDataset } from '../data/buildDataset.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = join(__dirname, '..', 'data', 'politicians.json');

const VALID_STATUSES = ['convicted', 'first_instance', 'indicted', 'investigated', 'prescribed', 'acquitted'];
const VALID_POSITION_TYPES = ['prime_minister', 'minister', 'senator', 'deputy', 'mayor', 'county_council_president', 'member_european_parliament', 'secretary_of_state', 'local_official', 'other'];
const KNOWN_PARTIES = ['PSD', 'PNL', 'PDL', 'PC', 'PD', 'UDMR', 'AUR', 'PP-DD', 'PMP', 'PNȚCD', 'PRM', 'USR', 'SOS Romania', 'SOS', 'ADN', 'PLAN', 'ANC', 'PSDI', 'PNCR', 'PUSL', 'Independent', 'România Socialistă'];
const REQUIRED_FIELDS = ['name', 'party', 'position', 'position_type', 'crime', 'status'];
const STATUSES_REQUIRING_SENTENCE = ['convicted', 'first_instance', 'prescribed'];
const YEAR_RANGE = { min: 2010, max: 2026 };

let errors = 0;
let warnings = 0;

function error(message) {
  errors += 1;
  console.error(`  ERROR: ${message}`);
}

function warn(message) {
  warnings += 1;
  console.warn(`  WARN:  ${message}`);
}

try {
  const raw = readFileSync(dataPath, 'utf-8');
  const data = buildDataset(JSON.parse(raw));
  const politicians = data.politicians;

  console.log(`\nValidating ${politicians.length} entries...\n`);

  const names = new Map();
  politicians.forEach((politician, index) => {
    if (names.has(politician.name)) {
      error(`Duplicate name: "${politician.name}" (entries ${names.get(politician.name)} and ${index})`);
    }
    names.set(politician.name, index);
  });

  politicians.forEach((politician, index) => {
    const prefix = `[${index}] ${politician.name || 'UNNAMED'}:`;

    REQUIRED_FIELDS.forEach((field) => {
      if (!politician[field]) error(`${prefix} missing required field "${field}"`);
    });

    if (politician.status && !VALID_STATUSES.includes(politician.status)) {
      error(`${prefix} invalid status "${politician.status}"`);
    }

    if (politician.position_type && !VALID_POSITION_TYPES.includes(politician.position_type)) {
      error(`${prefix} invalid position_type "${politician.position_type}"`);
    }

    if (politician.party && !KNOWN_PARTIES.includes(politician.party)) {
      warn(`${prefix} unknown party "${politician.party}" (add to KNOWN_PARTIES if valid)`);
    }

    if (STATUSES_REQUIRING_SENTENCE.includes(politician.status)) {
      if (!politician.sentence) warn(`${prefix} ${politician.status} but missing sentence`);
      if (!politician.conviction_year) warn(`${prefix} ${politician.status} but missing conviction_year`);
      if (politician.sentence_years === null || politician.sentence_years === undefined) {
        warn(`${prefix} ${politician.status} but missing sentence_years`);
      }
    }

    if (
      politician.sentence_years !== null
      && politician.sentence_years !== undefined
      && typeof politician.sentence_years !== 'number'
    ) {
      error(`${prefix} sentence_years should be a number, got ${typeof politician.sentence_years}`);
    }

    if (!Array.isArray(politician.sources) || politician.sources.length === 0) {
      warn(`${prefix} missing sources array`);
    } else {
      politician.sources.forEach((source, sourceIndex) => {
        if (!source.url) error(`${prefix} source[${sourceIndex}] missing url`);
        try {
          new URL(source.url);
        } catch {
          error(`${prefix} source[${sourceIndex}] has invalid url "${source.url}"`);
        }
      });
    }

    if (
      politician.conviction_year
      && (politician.conviction_year < YEAR_RANGE.min || politician.conviction_year > YEAR_RANGE.max)
    ) {
      error(
        `${prefix} conviction_year ${politician.conviction_year} is outside the supported range ${YEAR_RANGE.min}-${YEAR_RANGE.max}`
      );
    }
  });

  console.log('\n--- Summary ---');
  console.log(`Total entries: ${politicians.length}`);
  console.log(`Errors: ${errors}`);
  console.log(`Warnings: ${warnings}`);

  const byStatus = {};
  politicians.forEach((politician) => {
    byStatus[politician.status] = (byStatus[politician.status] || 0) + 1;
  });
  console.log('\nBy status:', byStatus);

  const byParty = {};
  politicians.forEach((politician) => {
    byParty[politician.party] = (byParty[politician.party] || 0) + 1;
  });
  console.log('By party:', byParty);

  const byPosition = {};
  politicians.forEach((politician) => {
    byPosition[politician.position_type] = (byPosition[politician.position_type] || 0) + 1;
  });
  console.log('By position:', byPosition);

  if (errors > 0) {
    console.log('\nValidation FAILED.');
    process.exit(1);
  }

  console.log('\nValidation PASSED.');
} catch (errorObject) {
  console.error('Failed to read/parse data file:', errorObject.message);
  process.exit(1);
}
