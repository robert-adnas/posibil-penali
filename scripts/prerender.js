/**
 * Post-build pre-rendering script.
 *
 * For every route (static pages + politician pages), generates a dedicated
 * index.html in dist/ so GitHub Pages serves 200 instead of falling through
 * to 404.html.  Each file gets customised <title>, <meta>, <link rel=canonical>,
 * Open Graph tags, and JSON-LD structured data.
 *
 * The React app boots on top of this HTML and takes over — nothing changes
 * for the user.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

// ---------------------------------------------------------------------------
// Load data
// ---------------------------------------------------------------------------
const rawData = JSON.parse(readFileSync(join(root, 'data/politicians.json'), 'utf8'));
const { buildDataset } = await import(pathToFileURL(join(root, 'data/buildDataset.js')).href);
const { politicians } = buildDataset(rawData);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const BASE_URL = 'https://politicieni-corupti.ro';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

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

const POSITION_LABELS = {
  prime_minister: 'Prim-ministru',
  minister: 'Ministru',
  senator: 'Senator',
  deputy: 'Deputat',
  mayor: 'Primar',
  county_council_president: 'Președinte CJ',
  member_european_parliament: 'Europarlamentar',
  secretary_of_state: 'Secretar de stat',
  local_official: 'Ales local',
  other: 'Altele',
};

const STATUS_LABELS = {
  convicted: 'Condamnat definitiv',
  first_instance: 'Condamnat (primă instanță)',
  indicted: 'Trimis în judecată',
  investigated: 'Cercetat',
  prescribed: 'Prescris',
  closed: 'Clasat',
  acquitted: 'Achitat',
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ---------------------------------------------------------------------------
// Read the built index.html as template
// ---------------------------------------------------------------------------
const template = readFileSync(join(distDir, 'index.html'), 'utf8');

function renderPage({ path, title, description, canonical, ogImage, jsonLd, noscriptContent }) {
  let html = template;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(title)}</title>`
  );

  // Replace meta description
  html = html.replace(
    /(<meta\s+name="description"\s+content=")([^"]*)(")/,
    `$1${escapeHtml(description)}$3`
  );

  // Replace canonical
  html = html.replace(
    /(<link\s+rel="canonical"\s+href=")([^"]*)(")/,
    `$1${escapeHtml(canonical)}$3`
  );

  // Replace OG tags
  html = html.replace(
    /(<meta\s+property="og:title"\s+content=")([^"]*)(")/,
    `$1${escapeHtml(title)}$3`
  );
  html = html.replace(
    /(<meta\s+property="og:description"\s+content=")([^"]*)(")/,
    `$1${escapeHtml(description)}$3`
  );
  html = html.replace(
    /(<meta\s+property="og:url"\s+content=")([^"]*)(")/,
    `$1${escapeHtml(canonical)}$3`
  );
  html = html.replace(
    /(<meta\s+property="og:image"\s+content=")([^"]*)(")/,
    `$1${escapeHtml(ogImage || DEFAULT_IMAGE)}$3`
  );

  // Replace Twitter tags
  html = html.replace(
    /(<meta\s+name="twitter:title"\s+content=")([^"]*)(")/,
    `$1${escapeHtml(title)}$3`
  );
  html = html.replace(
    /(<meta\s+name="twitter:description"\s+content=")([^"]*)(")/,
    `$1${escapeHtml(description)}$3`
  );
  html = html.replace(
    /(<meta\s+name="twitter:image"\s+content=")([^"]*)(")/,
    `$1${escapeHtml(ogImage || DEFAULT_IMAGE)}$3`
  );

  // Inject JSON-LD before closing </head> (after the existing one)
  if (jsonLd) {
    const jsonLdTag = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
    html = html.replace('</head>', `${jsonLdTag}\n  </head>`);
  }

  // Inject noscript content inside <div id="root"> so crawlers that don't
  // execute JS still see meaningful text. React will replace it on hydration.
  if (noscriptContent) {
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root"><noscript>${noscriptContent}</noscript></div>`
    );
  }

  // Write file
  const outDir = join(distDir, path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf8');
}

// ---------------------------------------------------------------------------
// Static pages
// ---------------------------------------------------------------------------
const staticPages = [
  {
    path: 'lista',
    title: 'Lista completă | Politicieni Corupți',
    description: `Toți cei ${politicians.length} politicieni români cu dosare penale — condamnați, trimiși în judecată, cercetați, clasați sau achitați. Caută și filtrează după nume, partid sau status.`,
  },
  {
    path: 'glosar',
    title: 'Glosar juridic | Politicieni Corupți',
    description: 'Ce înseamnă fiecare status juridic: condamnat definitiv, trimis în judecată, cercetat, prescris, clasat, achitat. Ghid simplu pentru înțelegerea termenilor legali.',
  },
  {
    path: 'metodologie',
    title: 'Metodologie | Politicieni Corupți',
    description: 'Cum funcționează baza de date: criterii de includere, surse folosite, proces de verificare și clasificare a statusurilor juridice.',
  },
  {
    path: 'aviz-legal',
    title: 'Aviz legal | Politicieni Corupți',
    description: 'Informații juridice privind baza de date: temeiuri legale, prezumția de nevinovăție, drepturile persoanelor vizate și limitarea responsabilității.',
  },
  {
    path: 'contact',
    title: 'Contact & Corecții | Politicieni Corupți',
    description: 'Trimite corecții, actualizări sau sesizări. Fiecare raportare este verificată înainte de publicare.',
  },
  {
    path: 'confidentialitate',
    title: 'Politica de confidențialitate | Politicieni Corupți',
    description: 'Informații despre datele colectate de site, cookie-uri, analitice și drepturile utilizatorilor conform GDPR.',
  },
];

let count = 0;

for (const page of staticPages) {
  renderPage({
    path: page.path,
    title: page.title,
    description: page.description,
    canonical: `${BASE_URL}/${page.path}`,
  });
  count++;
}

// ---------------------------------------------------------------------------
// Politician pages
// ---------------------------------------------------------------------------
for (const p of politicians) {
  const slug = nameToSlug(p.name);
  const statusLabel = STATUS_LABELS[p.status] || p.status;
  const positionLabel = POSITION_LABELS[p.position_type] || p.position_type;
  const pageUrl = `${BASE_URL}/politician/${slug}`;

  const title = `${p.name} — ${statusLabel} | Politicieni Corupți`;
  const description = `${p.name} (${p.party}, ${positionLabel}): ${p.crime}. Status juridic: ${statusLabel}.`;

  // Check for politician-specific OG image
  const ogImage = `${BASE_URL}/og/politician/${slug}.png`;

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name,
    description: `${positionLabel}, ${p.party}. ${statusLabel}.`,
    url: pageUrl,
    memberOf: {
      '@type': 'Organization',
      name: p.party,
    },
  };

  // Noscript content for crawlers
  const noscriptContent = [
    `<h1>${escapeHtml(p.name)}</h1>`,
    `<p>${escapeHtml(p.party)} · ${escapeHtml(positionLabel)}</p>`,
    `<p>Status juridic: ${escapeHtml(statusLabel)}</p>`,
    `<p>${escapeHtml(p.crime)}</p>`,
    p.sentence ? `<p>Pedeapsă: ${escapeHtml(p.sentence)}</p>` : '',
    p.details ? `<p>${escapeHtml(p.details)}</p>` : '',
  ].filter(Boolean).join('');

  renderPage({
    path: `politician/${slug}`,
    title,
    description,
    canonical: pageUrl,
    ogImage,
    jsonLd,
    noscriptContent,
  });
  count++;
}

console.log(`✓ Pre-rendered ${count} pages (${staticPages.length} static + ${politicians.length} politicians)`);
