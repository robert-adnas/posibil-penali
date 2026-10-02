#!/usr/bin/env node

import process from 'node:process';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDataset } from '../data/buildDataset.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = join(__dirname, '..', 'data', 'politicians.json');
const REQUEST_TIMEOUT_MS = 30000;
const CONCURRENCY = 6;
const SOFT_FAILURE_STATUSES = new Set([401, 403, 408, 425, 429, 500, 502, 503, 504, 521, 522, 523, 524, 525]);

function sourceKey(source) {
  return source.url;
}

function collectSources(politicians) {
  const byUrl = new Map();

  politicians.forEach((politician) => {
    (politician.sources || []).forEach((source) => {
      if (!source?.url) return;

      const key = sourceKey(source);
      const existing = byUrl.get(key) || {
        ...source,
        politicians: [],
      };

      existing.politicians.push(politician.name);
      byUrl.set(key, existing);
    });
  });

  return [...byUrl.values()].sort((left, right) => left.url.localeCompare(right.url));
}

async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'user-agent': 'Mozilla/5.0 dataset source verification',
      },
    });

    return {
      finalUrl: response.url,
      status: response.status,
      ok: response.status >= 200 && response.status < 400,
      softFailure: SOFT_FAILURE_STATUSES.has(response.status),
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function runPool(items, worker) {
  const results = new Array(items.length);
  let cursor = 0;

  async function runWorker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, runWorker));
  return results;
}

function printResult(result) {
  const people = result.source.politicians.slice(0, 4).join(', ');
  const suffix = result.source.politicians.length > 4
    ? ` +${result.source.politicians.length - 4} more`
    : '';

  if (result.error) {
    const status = result.softFailure ? 'WARN' : 'FAIL';
    console.log(`${status}\tERR\t${result.source.url}\t${people}${suffix}\t${result.error}`);
    return;
  }

  const status = result.ok ? 'OK' : result.softFailure ? 'WARN' : 'FAIL';
  console.log(
    `${status}\t${result.status}\t${result.source.url}\t${people}${suffix}\t${result.finalUrl}`
  );
}

try {
  const raw = JSON.parse(readFileSync(dataPath, 'utf8'));
  const politicians = buildDataset(raw).politicians;
  const sources = collectSources(politicians);

  console.log(`Checking ${sources.length} unique source URLs for ${politicians.length} politicians...`);

  const results = await runPool(sources, async (source, index) => {
    process.stdout.write(`\r${index + 1}/${sources.length}`);

    try {
      return {
        source,
        ...(await fetchWithTimeout(source.url)),
      };
    } catch (error) {
      return {
        source,
        // A transport error or timeout cannot prove that the source disappeared;
        // treat it like bot protection and reserve hard failures for definitive HTTP responses.
        softFailure: true,
        error: `${error.name}: ${error.message}`,
      };
    }
  });

  process.stdout.write('\n\n');

  const hardFailures = results.filter((result) => !result.softFailure && (result.error || !result.ok));
  const softFailures = results.filter((result) => result.softFailure);
  const resultsByPolitician = new Map();

  results.forEach((result) => {
    result.source.politicians.forEach((name) => {
      const profileResults = resultsByPolitician.get(name) || [];
      profileResults.push(result);
      resultsByPolitician.set(name, profileResults);
    });
  });

  const profilesWithoutUsableSources = politicians.filter((politician) => {
    const profileResults = resultsByPolitician.get(politician.name) || [];
    return profileResults.length === 0
      || profileResults.every((result) => !result.ok && !result.softFailure);
  });

  if (hardFailures.length > 0) {
    console.log('Hard failures:');
    hardFailures.forEach(printResult);
    console.log('');
  }

  if (softFailures.length > 0) {
    console.log('Soft failures, usually bot protection or rate limits:');
    softFailures.forEach(printResult);
    console.log('');
  }

  console.log('--- Summary ---');
  console.log(`Sources checked: ${sources.length}`);
  console.log(`Hard failures: ${hardFailures.length}`);
  console.log(`Soft failures: ${softFailures.length}`);
  console.log(`Profiles without a usable source: ${profilesWithoutUsableSources.length}`);

  if (profilesWithoutUsableSources.length > 0) {
    console.log('\nProfiles without a usable source:');
    profilesWithoutUsableSources.forEach((politician) => console.log(`- ${politician.name}`));
    process.exit(1);
  }

  process.exit(0);
} catch (error) {
  console.error('Source link check failed to run:', error.message);
  process.exit(1);
}
