import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const rawData = JSON.parse(readFileSync(join(root, 'data/politicians.json'), 'utf8'));
const { buildDataset } = await import(pathToFileURL(join(root, 'data/buildDataset.js')).href);
const { politicians, metadata } = buildDataset(rawData);

function nameToSlug(name) {
  return name
    .toLowerCase()
    .replace(/[ăÄ]/g, 'a')
    .replace(/[âÂ]/g, 'a')
    .replace(/[îÎ]/g, 'i')
    .replace(/[șȘşŞ]/g, 's')
    .replace(/[țȚţŢ]/g, 't')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const BASE_URL = 'https://politicieni-corupti.ro';
const lastMod = metadata.last_updated || new Date().toISOString().slice(0, 10);

const staticPages = [
  { path: '/',                  changefreq: 'weekly',  priority: '1.0' },
  { path: '/lista',             changefreq: 'weekly',  priority: '0.9' },
  { path: '/glosar',            changefreq: 'monthly', priority: '0.8' },
  { path: '/metodologie',       changefreq: 'monthly', priority: '0.6' },
  { path: '/contact',           changefreq: 'yearly',  priority: '0.4' },
  { path: '/aviz-legal',        changefreq: 'yearly',  priority: '0.3' },
  { path: '/confidentialitate', changefreq: 'yearly',  priority: '0.3' },
];

function urlEntry({ loc, lastmod, changefreq, priority }) {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

const entries = [
  ...staticPages.map((p) =>
    urlEntry({ loc: `${BASE_URL}${p.path}`, lastmod: lastMod, changefreq: p.changefreq, priority: p.priority })
  ),
  ...politicians.map((p) => {
    const slug = nameToSlug(p.name);
    const politicianLastMod = p.verified_at || lastMod;
    return urlEntry({
      loc: `${BASE_URL}/politician/${slug}`,
      lastmod: politicianLastMod,
      changefreq: 'monthly',
      priority: p.status === 'convicted' ? '0.8' : '0.7',
    });
  }),
];

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries,
  '</urlset>',
].join('\n');

const outPath = join(root, 'public/sitemap.xml');
writeFileSync(outPath, xml, 'utf8');

const total = staticPages.length + politicians.length;
console.log(`✓ sitemap.xml generated — ${total} URLs (${staticPages.length} static + ${politicians.length} politicians)`);
