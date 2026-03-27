import puppeteer from 'puppeteer';
import { readFileSync, mkdirSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const rawData = JSON.parse(readFileSync(join(root, 'data/politicians.json'), 'utf8'));
const { buildDataset } = await import(pathToFileURL(join(root, 'data/buildDataset.js')).href);
const { politicians } = buildDataset(rawData);

function nameToSlug(name) {
  return name
    .toLowerCase()
    .replace(/[ăÄ]/g, 'a').replace(/[âÂ]/g, 'a').replace(/[îÎ]/g, 'i')
    .replace(/[șȘşŞ]/g, 's').replace(/[țȚţŢ]/g, 't')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const outDir = join(root, 'public/og');
mkdirSync(outDir, { recursive: true });

const templatePath = join(__dirname, 'og-politician.html');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.goto(`file://${templatePath}`, { waitUntil: 'networkidle0' });

await new Promise((r) => setTimeout(r, 800));

let count = 0;
for (const politician of politicians) {
  const slug = nameToSlug(politician.name);
  const outPath = join(outDir, `${slug}.png`);

  await page.evaluate((p) => window.__renderPolitician(p), {
    name: politician.name,
    party: politician.party,
    position_type: politician.position_type,
    status: politician.status,
    sentence: politician.sentence || null,
  });

  await new Promise((r) => setTimeout(r, 60));

  const el = await page.$('#og');
  await el.screenshot({ path: outPath });
  count++;
  process.stdout.write(`\r  ${count}/${politicians.length} — ${politician.name}`);
}

await browser.close();
console.log(`\n✓ ${count} og:images generated → public/og/`);
