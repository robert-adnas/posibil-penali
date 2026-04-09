/**
 * Post-build pre-rendering script.
 *
 * Each important route gets a dedicated HTML file in dist/ with route-specific
 * metadata plus crawlable HTML content inside #root. React replaces this
 * content on boot, but search engines and no-JS visitors can still access the
 * page copy and internal links immediately.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');
const publicDir = join(root, 'public');

const rawData = JSON.parse(readFileSync(join(root, 'data/politicians.json'), 'utf8'));
const { buildDataset } = await import(pathToFileURL(join(root, 'data/buildDataset.js')).href);
const { politicians, metadata, changeLog } = buildDataset(rawData);
const template = readFileSync(join(distDir, 'index.html'), 'utf8');

const BASE_URL = 'https://politicieni-corupti.ro';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const STATUS_ORDER = [
  'convicted',
  'first_instance',
  'indicted',
  'investigated',
  'prescribed',
  'closed',
  'acquitted',
];
const ACTIVE_STATUSES = new Set(['first_instance', 'indicted', 'investigated']);

const POSITION_LABELS = {
  prime_minister: 'Prim-ministru',
  minister: 'Ministru',
  senator: 'Senator',
  deputy: 'Deputat',
  mayor: 'Primar',
  county_council_president: 'Pre\u0219edinte CJ',
  member_european_parliament: 'Europarlamentar',
  secretary_of_state: 'Secretar de stat',
  local_official: 'Ales local',
  other: 'Altele',
};

const STATUS_LABELS = {
  convicted: 'Condamnat definitiv',
  first_instance: 'Condamnat (prim\u0103 instan\u021b\u0103)',
  indicted: 'Trimis \u00een judecat\u0103',
  investigated: 'Cercetat',
  prescribed: 'Prescris',
  closed: 'Clasat',
  acquitted: 'Achitat',
};

const SITE_LINKS = [
  { href: '/', label: 'Arhiv\u0103' },
  { href: '/actualizari', label: 'Modific\u0103ri recente' },
  { href: '/lista', label: 'Lista complet\u0103' },
  { href: '/glosar', label: 'Glosar juridic' },
  { href: '/metodologie', label: 'Metodologie' },
  { href: '/contact', label: 'Contact' },
];

function nameToSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatDateRo(value) {
  if (!value) return null;

  try {
    return new Intl.DateTimeFormat('ro-RO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function sortPoliticians(items) {
  return [...items].sort((left, right) => left.name.localeCompare(right.name, 'ro'));
}

function byStatusThenName(items) {
  return [...items].sort((left, right) => {
    const leftRank = STATUS_ORDER.indexOf(left.status);
    const rightRank = STATUS_ORDER.indexOf(right.status);

    if (leftRank !== rightRank) return leftRank - rightRank;
    return left.name.localeCompare(right.name, 'ro');
  });
}

function byRecentVerification(items) {
  return [...items].sort((left, right) => {
    const leftTime = new Date(left.verified_at || 0).getTime();
    const rightTime = new Date(right.verified_at || 0).getTime();

    if (leftTime !== rightTime) return rightTime - leftTime;
    return left.name.localeCompare(right.name, 'ro');
  });
}

function renderSiteNav(currentHref = '') {
  return `
    <nav aria-label="Navigare principal\u0103" style="display:flex;gap:0.85rem;flex-wrap:wrap;margin:1.5rem 0 0;">
      ${SITE_LINKS.map((link) => (
        `<a href="${link.href}"${link.href === currentHref ? ' aria-current="page"' : ''}>${escapeHtml(link.label)}</a>`
      )).join('')}
    </nav>
  `;
}

function renderSection(title, body) {
  return `
    <section style="margin-top:2rem;">
      <h2 style="font-family:var(--font-serif);font-size:1.5rem;line-height:1.2;margin:0 0 0.75rem;">${escapeHtml(title)}</h2>
      ${body}
    </section>
  `;
}

function renderBulletList(items) {
  return `<ul style="margin:0;padding-left:1.2rem;display:grid;gap:0.65rem;">${items.join('')}</ul>`;
}

function renderPoliticianListItem(politician, options = {}) {
  const { includeCrime = false } = options;
  const slug = nameToSlug(politician.name);
  const statusLabel = STATUS_LABELS[politician.status] || politician.status;
  const positionLabel = POSITION_LABELS[politician.position_type] || politician.position_type || '';
  const crime = politician.crime ? `, ${escapeHtml(politician.crime)}` : '';

  return `
    <li>
      <a href="/politician/${slug}">${escapeHtml(politician.name)}</a>
      <span> - ${escapeHtml(statusLabel)}, ${escapeHtml(politician.party)}, ${escapeHtml(positionLabel)}${includeCrime ? crime : ''}</span>
    </li>
  `;
}

function renderSourceList(politician) {
  const sources = Array.isArray(politician.sources) ? politician.sources : [];
  if (sources.length === 0) return '';

  return renderBulletList(
    sources.map((source) => {
      const sourceLabel = source.label || source.url;
      const kindLabel = source.kind === 'official'
        ? 'Surs\u0103 oficial\u0103'
        : source.kind === 'profile'
        ? 'Profil'
        : 'Pres\u0103';

      return `
        <li>
          <a href="${escapeHtml(source.url)}" rel="noopener noreferrer">${escapeHtml(sourceLabel)}</a>
          <span> - ${kindLabel}</span>
        </li>
      `;
    })
  );
}

function renderPage({ path, title, description, canonical, ogImage, jsonLd, rootContent }) {
  let html = template;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(
    /(<meta\s+name="description"\s+content=")([^"]*)(")/,
    `$1${escapeHtml(description)}$3`
  );
  html = html.replace(
    /(<link\s+rel="canonical"\s+href=")([^"]*)(")/,
    `$1${escapeHtml(canonical)}$3`
  );
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

  const jsonLdEntries = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  if (jsonLdEntries.length > 0) {
    const jsonLdMarkup = jsonLdEntries
      .map((entry) => `<script type="application/ld+json">${JSON.stringify(entry)}</script>`)
      .join('\n  ');

    html = html.replace('</head>', `  ${jsonLdMarkup}\n</head>`);
  }

  if (rootContent) {
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root" data-prerendered="true">${rootContent}</div>`
    );
  }

  const outDir = path ? join(distDir, path) : distDir;
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf8');
}

const lastUpdatedText = formatDateRo(metadata.last_updated) || metadata.last_updated || 'necunoscut';
const convictedCount = politicians.filter((politician) => politician.status === 'convicted').length;
const activeCount = politicians.filter((politician) => ACTIVE_STATUSES.has(politician.status)).length;
const topParties = Object.entries(
  politicians.reduce((acc, politician) => {
    acc[politician.party] = (acc[politician.party] || 0) + 1;
    return acc;
  }, {})
)
  .sort((left, right) => right[1] - left[1])
  .slice(0, 8);

const featuredPoliticians = byStatusThenName(
  politicians.filter((politician) => politician.status !== 'acquitted')
).slice(0, 18);
const recentChanges = changeLog.slice(0, 12);
const changedKeys = new Set(
  changeLog.map((entry) => `${nameToSlug(entry.politician.name)}:${entry.date}`)
);
const recentlyVerified = byRecentVerification(
  politicians.filter((politician) => politician.verified_at)
    .filter((politician) => !changedKeys.has(`${nameToSlug(politician.name)}:${politician.verified_at}`))
).slice(0, 24);

const homeRootContent = `
  <div class="app-shell">
    <main class="app-section">
      <div class="app-inner" style="padding-top:4rem;padding-bottom:4rem;">
        <p class="app-kicker">Arhiv\u0103 independent\u0103 despre corup\u021bie \u0219i integritate</p>
        <h1 class="app-title">Politicieni Corup\u021bi</h1>
        <p class="app-intro">
          Baza de date documenteaz\u0103 politicieni rom\u00e2ni condamna\u021bi, trimi\u0219i \u00een judecat\u0103,
          cerceta\u021bi penal, prescri\u0219i, clasa\u021bi sau achita\u021bi \u00een cauze de corup\u021bie \u0219i abuz.
        </p>
        <p style="max-width:64rem;line-height:1.7;margin:1rem 0 0;color:var(--color-text-muted);">
          Actualizat la ${escapeHtml(lastUpdatedText)}. Arhiva include ${politicians.length} profiluri publice,
          ${convictedCount} condamn\u0103ri definitive \u0219i ${activeCount} cazuri active aflate \u00een anchet\u0103
          sau judecat\u0103.
        </p>
        ${renderSiteNav('/')}
        ${renderSection(
          'Acces rapid',
          renderBulletList([
            `<li><a href="/lista">Vezi lista complet\u0103 a celor ${politicians.length} politicieni din arhiv\u0103</a></li>`,
            '<li><a href="/glosar">\u00cen\u021belege diferen\u021ba dintre condamnat, trimis \u00een judecat\u0103, cercetat sau achitat</a></li>',
            '<li><a href="/metodologie">Vezi criteriile editoriale, sursele \u0219i procesul de verificare</a></li>',
          ])
        )}
        ${renderSection(
          'Partide cu cele mai multe cazuri documentate',
          renderBulletList(
            topParties.map(([party, count]) => `<li>${escapeHtml(party)} - ${count} profiluri</li>`)
          )
        )}
        ${renderSection(
          'Profiluri importante din arhiv\u0103',
          `
            ${renderBulletList(
              featuredPoliticians.map((politician) =>
                renderPoliticianListItem(politician, { includeCrime: true })
              )
            )}
            <p style="margin-top:1rem;"><a href="/lista">Continu\u0103 cu lista complet\u0103 \u2192</a></p>
          `
        )}
        ${renderSection(
          'Ce s-a schimbat recent',
          `
            ${renderBulletList(
              recentChanges.slice(0, 6).map((entry) => `
                <li>
                  <a href="/politician/${nameToSlug(entry.politician.name)}">${escapeHtml(entry.politician.name)}</a>
                  <span> - ${escapeHtml(entry.title)}</span>
                </li>
              `)
            )}
            <p style="margin-top:1rem;"><a href="/actualizari">Vezi toate modificarile \u2192</a></p>
          `
        )}
      </div>
    </main>
  </div>
`;

const listRootContent = `
  <div class="app-shell">
    <main class="app-section">
      <div class="app-inner" style="padding-top:4rem;padding-bottom:4rem;">
        <p class="app-kicker">Arhiv\u0103 complet\u0103</p>
        <h1 class="app-title">Lista politicienilor documenta\u021bi</h1>
        <p class="app-intro">
          To\u021bi politicienii inclu\u0219i \u00een baza de date Politicieni Corup\u021bi, grupa\u021bi dup\u0103 status
          juridic \u0219i lega\u021bi c\u0103tre profilurile individuale.
        </p>
        <p style="max-width:64rem;line-height:1.7;margin:1rem 0 0;color:var(--color-text-muted);">
          Pagina aceasta func\u021bioneaz\u0103 \u0219i ca hub SEO: fiecare profil are link intern direct, astfel \u00eenc\u00e2t
          motoarele de c\u0103utare pot descoperi rapid toate fi\u0219ele din arhiv\u0103.
        </p>
        ${renderSiteNav('/lista')}
        ${STATUS_ORDER.map((status) => {
          const items = sortPoliticians(politicians.filter((politician) => politician.status === status));
          if (items.length === 0) return '';

          return renderSection(
            `${STATUS_LABELS[status]} (${items.length})`,
            renderBulletList(items.map((politician) => renderPoliticianListItem(politician)))
          );
        }).join('')}
      </div>
    </main>
  </div>
`;

const listJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Lista politicienilor documentati',
  url: `${BASE_URL}/lista`,
  description:
    'Lista complet\u0103 cu politicieni rom\u00e2ni condamna\u021bi, trimi\u0219i \u00een judecat\u0103 sau cerceta\u021bi pentru corup\u021bie.',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: politicians.length,
    itemListElement: byStatusThenName(politicians).slice(0, 30).map((politician, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${BASE_URL}/politician/${nameToSlug(politician.name)}`,
      name: politician.name,
    })),
  },
};

const updatesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Modificari recente',
  url: `${BASE_URL}/actualizari`,
  description:
    'Modificari consemnate si fise reverificate recent in arhiva Politicieni Corupti.',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: recentChanges.length,
    itemListElement: recentChanges.slice(0, 20).map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${BASE_URL}/politician/${nameToSlug(entry.politician.name)}`,
      name: entry.politician.name,
    })),
  },
};

const staticPages = [
  {
    path: 'glosar',
    title: 'Glosar juridic | Politicieni Corup\u021bi',
    heading: 'Glosar juridic',
    description:
      'Explica\u021bii simple pentru statusurile juridice folosite \u00een arhiv\u0103: condamnat definitiv, trimis \u00een judecat\u0103, cercetat, prescris, clasat sau achitat.',
    highlights: [
      'Diferen\u021ba dintre condamnare definitiv\u0103, prim\u0103 instan\u021b\u0103 \u0219i anchet\u0103.',
      'Cum trebuie citite formul\u0103rile juridice din fiecare profil public.',
    ],
  },
  {
    path: 'metodologie',
    title: 'Metodologie | Politicieni Corup\u021bi',
    heading: 'Metodologie',
    description:
      'Criteriile editoriale, sursele folosite, modul de actualizare a datelor \u0219i limitele proiectului.',
    highlights: [
      'Cine intr\u0103 \u00een baz\u0103, cum sunt verificate sursele \u0219i cum sunt actualizate cazurile.',
      'De ce fiecare profil are status juridic explicit \u0219i surse verificabile.',
    ],
  },
  {
    path: 'aviz-legal',
    title: 'Aviz legal | Politicieni Corup\u021bi',
    heading: 'Aviz legal',
    description:
      'Context juridic pentru publicarea informa\u021biilor, prezum\u021bia de nevinov\u0103\u021bie \u0219i limitele responsabilit\u0103\u021bii editoriale.',
    highlights: [
      'Cum este respectat interesul public \u0219i dreptul la informare.',
      'Cum este formulat fiecare profil atunci c\u00e2nd nu exist\u0103 o condamnare definitiv\u0103.',
    ],
  },
  {
    path: 'contact',
    title: 'Contact & Corec\u021bii | Politicieni Corup\u021bi',
    heading: 'Contact \u0219i corec\u021bii',
    description:
      'Trimite actualiz\u0103ri, rectific\u0103ri sau surse suplimentare. Fiecare raportare este verificat\u0103 \u00eenainte de publicare.',
    highlights: [
      'Folose\u0219te pagina pentru a semnala erori, complet\u0103ri sau schimb\u0103ri de status.',
      'Sugestiile trebuie sus\u021binute de documente sau surse publice verificabile.',
    ],
  },
  {
    path: 'confidentialitate',
    title: 'Politica de confiden\u021bialitate | Politicieni Corup\u021bi',
    heading: 'Politica de confiden\u021bialitate',
    description:
      'Informa\u021bii despre datele colectate de site, analiticele folosite \u0219i drepturile utilizatorilor.',
    highlights: [
      'Ce date tehnice pot fi colectate \u00een timpul navig\u0103rii.',
      'Cum sunt folosite analiticele \u0219i ce drepturi au utilizatorii.',
    ],
  },
];

let count = 0;

renderPage({
  path: '',
  title: 'Politicieni Corup\u021bi | Arhiv\u0103 independent\u0103 despre corup\u021bie \u0219i integritate',
  description:
    'Baz\u0103 de date cu politicieni rom\u00e2ni condamna\u021bi, trimi\u0219i \u00een judecat\u0103 sau cerceta\u021bi penal pentru corup\u021bie. Date verificate, surse oficiale, actualizate permanent.',
  canonical: `${BASE_URL}/`,
  rootContent: homeRootContent,
});
count += 1;

renderPage({
  path: 'lista',
  title: 'Lista complet\u0103 | Politicieni Corup\u021bi',
  description:
    `To\u021bi cei ${politicians.length} politicieni rom\u00e2ni cu dosare penale - condamna\u021bi, trimi\u0219i \u00een judecat\u0103, cerceta\u021bi, clasa\u021bi sau achita\u021bi.`,
  canonical: `${BASE_URL}/lista`,
  jsonLd: listJsonLd,
  rootContent: listRootContent,
});
count += 1;

renderPage({
  path: 'actualizari',
  title: 'Modificari recente | Politicieni Corup\u021bi',
  description:
    'Vezi separat modificarile consemnate in arhiva si fisele doar reverificate editorial.',
  canonical: `${BASE_URL}/actualizari`,
  jsonLd: updatesJsonLd,
  rootContent: `
    <div class="app-shell">
      <main class="app-section">
        <div class="app-inner" style="padding-top:4rem;padding-bottom:4rem;">
          <p class="app-kicker">Verific\u0103ri editoriale</p>
          <h1 class="app-title">Modificari recente</h1>
          <p class="app-intro">
            Aici vezi separat modificarile consemnate in arhiva si fisele doar reverificate editorial.
          </p>
          <p style="max-width:64rem;line-height:1.7;margin:1rem 0 0;color:var(--color-text-muted);">
            Ultima actualizare global\u0103 a arhivei: ${escapeHtml(lastUpdatedText)}.
          </p>
          ${renderSiteNav('/actualizari')}
          ${renderSection(
            renderBulletList(
              recentChanges.map((entry) => `
                <li>
                  <a href="/politician/${nameToSlug(entry.politician.name)}">${escapeHtml(entry.politician.name)}</a>
                  <span> - ${escapeHtml(entry.title)}</span>
                </li>
              `)
            )
          )}
          ${renderSection(
            'Fise reverificate fara alte schimbari majore',
            renderBulletList(
              recentlyVerified.map((politician) => `
                <li>
                  <a href="/politician/${nameToSlug(politician.name)}">${escapeHtml(politician.name)}</a>
                  <span> - verificat la ${escapeHtml(formatDateRo(politician.verified_at))}</span>
                </li>
              `)
            )
          )}
        </div>
      </main>
    </div>
  `,
});
count += 1;

for (const page of staticPages) {
  renderPage({
    path: page.path,
    title: page.title,
    description: page.description,
    canonical: `${BASE_URL}/${page.path}`,
    rootContent: `
      <div class="app-shell">
        <main class="app-section">
          <div class="app-inner" style="padding-top:4rem;padding-bottom:4rem;">
            <p class="app-kicker">Resurs\u0103 contextual\u0103</p>
            <h1 class="app-title">${escapeHtml(page.heading)}</h1>
            <p class="app-intro">${escapeHtml(page.description)}</p>
            ${renderSiteNav(`/${page.path}`)}
            ${renderSection(
              'Ce g\u0103se\u0219ti pe aceast\u0103 pagin\u0103',
              renderBulletList(page.highlights.map((item) => `<li>${escapeHtml(item)}</li>`))
            )}
            ${renderSection(
              'Continu\u0103 explorarea',
              renderBulletList([
                `<li><a href="/lista">R\u0103sfoie\u0219te lista complet\u0103 a celor ${politicians.length} profiluri</a></li>`,
                '<li><a href="/">Revino la pagina principal\u0103 a arhivei</a></li>',
                '<li><a href="/metodologie">Vezi criteriile editoriale \u0219i sursele folosite</a></li>',
              ])
            )}
          </div>
        </main>
      </div>
    `,
  });
  count += 1;
}

// ── Party pages ─────────────────────────────────────────
const partyGroups = {};
politicians.forEach((politician) => {
  if (!partyGroups[politician.party]) partyGroups[politician.party] = [];
  partyGroups[politician.party].push(politician);
});

const STATUS_DESCRIPTIONS = {
  convicted: 'Politicieni cu condamnare definitiv\u0103 \u2014 sentin\u021ba a trecut prin toate instan\u021bele de apel \u0219i este executorie.',
  first_instance: 'Politicieni condamna\u021bi \u00een prim\u0103 instan\u021b\u0103 \u2014 sentin\u021ba nu este definitiv\u0103 \u0219i poate fi contestat\u0103 prin apel.',
  indicted: 'Politicieni trimi\u0219i \u00een judecat\u0103 de procuratur\u0103 \u2014 procesul penal este \u00een curs.',
  investigated: 'Politicieni cerceta\u021bi penal \u2014 ancheta este \u00een curs, f\u0103r\u0103 trimitere \u00een judecat\u0103.',
  prescribed: 'Cazuri \u00een care instan\u021ba a constatat prescrip\u021bia faptelor \u2014 procesul s-a \u00eenchis f\u0103r\u0103 o sentin\u021b\u0103 pe fond.',
  closed: 'Cazuri clasate sau \u00eenchise f\u0103r\u0103 trimitere \u00een judecat\u0103.',
  acquitted: 'Politicieni achita\u021bi \u2014 instan\u021ba a decis c\u0103 fapta nu exist\u0103, nu a fost comis\u0103 de inculpat, sau nu este infrac\u021biune.',
};

for (const [party, members] of Object.entries(partyGroups)) {
  const partySlug = nameToSlug(party);
  const sorted = byStatusThenName(members);
  const convictedMembers = members.filter((p) => p.status === 'convicted');
  const totalYears = convictedMembers.reduce((s, p) => s + (p.sentence_years || 0), 0);
  const otherParties = Object.entries(partyGroups)
    .filter(([name]) => name !== party)
    .sort((a, b) => b[1].length - a[1].length);

  const partyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${party} \u2014 Politicieni cu dosare penale`,
    url: `${BASE_URL}/partid/${partySlug}`,
    description: `${members.length} politicieni ${party} cu dosare penale: ${convictedMembers.length} condamna\u021bi definitiv.`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: members.length,
      itemListElement: sorted.slice(0, 20).map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE_URL}/politician/${nameToSlug(p.name)}`,
        name: p.name,
      })),
    },
  };

  renderPage({
    path: `partid/${partySlug}`,
    title: `${escapeHtml(party)} \u2014 Politicieni cu dosare penale | Politicieni Corup\u021bi`,
    description: `${members.length} politicieni ${party} cu dosare penale: ${convictedMembers.length} condamna\u021bi definitiv, ${Math.round(totalYears)} ani de \u00eenchisoare.`,
    canonical: `${BASE_URL}/partid/${partySlug}`,
    jsonLd: partyJsonLd,
    rootContent: `
      <div class="app-shell">
        <main class="app-section">
          <div class="app-inner" style="padding-top:4rem;padding-bottom:4rem;">
            <nav aria-label="Breadcrumb" style="display:flex;gap:0.85rem;flex-wrap:wrap;margin-bottom:1rem;">
              <a href="/">Arhiv\u0103</a>
              <a href="/lista">Lista complet\u0103</a>
              <span aria-current="page">${escapeHtml(party)}</span>
            </nav>
            <p class="app-kicker">Partid</p>
            <h1 class="app-title">${escapeHtml(party)}</h1>
            <p class="app-intro">${members.length} politicieni cu dosare penale: ${convictedMembers.length} condamna\u021bi definitiv, ${Math.round(totalYears)} ani de \u00eenchisoare.</p>
            ${renderSiteNav()}
            ${renderSection(
              `Politicieni ${escapeHtml(party)} documenta\u021bi (${members.length})`,
              renderBulletList(sorted.map((p) => renderPoliticianListItem(p, { includeCrime: true })))
            )}
            ${otherParties.length > 0 ? renderSection(
              'Alte partide',
              renderBulletList(otherParties.map(([name, list]) =>
                `<li><a href="/partid/${nameToSlug(name)}">${escapeHtml(name)} (${list.length})</a></li>`
              ))
            ) : ''}
          </div>
        </main>
      </div>
    `,
  });
  count += 1;
}

// ── Status pages ────────────────────────────────────────
for (const status of STATUS_ORDER) {
  const statusMembers = byStatusThenName(politicians.filter((p) => p.status === status));
  if (statusMembers.length === 0) continue;

  const statusSlug = status;
  const label = STATUS_LABELS[status] || status;
  const totalYears = statusMembers.reduce((s, p) => s + (p.sentence_years || 0), 0);
  const statusDescription = STATUS_DESCRIPTIONS[status] || '';

  const statusPartyCounts = {};
  statusMembers.forEach((p) => {
    statusPartyCounts[p.party] = (statusPartyCounts[p.party] || 0) + 1;
  });
  const statusParties = Object.entries(statusPartyCounts).sort((a, b) => b[1] - a[1]);

  const statusJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${label} \u2014 Politicieni`,
    url: `${BASE_URL}/status/${statusSlug}`,
    description: `${statusMembers.length} politicieni rom\u00e2ni cu status \u201e${label.toLowerCase()}\u201d. ${statusDescription}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: statusMembers.length,
      itemListElement: statusMembers.slice(0, 20).map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE_URL}/politician/${nameToSlug(p.name)}`,
        name: p.name,
      })),
    },
  };

  const otherStatuses = STATUS_ORDER.filter((s) => s !== status && politicians.some((p) => p.status === s));

  renderPage({
    path: `status/${statusSlug}`,
    title: `${label} \u2014 Politicieni | Politicieni Corup\u021bi`,
    description: `${statusMembers.length} politicieni rom\u00e2ni cu status \u201e${label.toLowerCase()}\u201d. ${statusDescription}`,
    canonical: `${BASE_URL}/status/${statusSlug}`,
    jsonLd: statusJsonLd,
    rootContent: `
      <div class="app-shell">
        <main class="app-section">
          <div class="app-inner" style="padding-top:4rem;padding-bottom:4rem;">
            <nav aria-label="Breadcrumb" style="display:flex;gap:0.85rem;flex-wrap:wrap;margin-bottom:1rem;">
              <a href="/">Arhiv\u0103</a>
              <a href="/lista">Lista complet\u0103</a>
              <span aria-current="page">${escapeHtml(label)}</span>
            </nav>
            <p class="app-kicker">Status juridic</p>
            <h1 class="app-title">${escapeHtml(label)}</h1>
            <p class="app-intro">
              ${statusMembers.length} politicieni. ${escapeHtml(statusDescription)}
              ${totalYears > 0 ? ` Total: ${Math.round(totalYears)} ani de \u00eenchisoare.` : ''}
            </p>
            ${renderSiteNav()}
            ${statusParties.length > 1 ? renderSection(
              'Distribu\u021bie pe partide',
              renderBulletList(statusParties.map(([name, cnt]) =>
                `<li><a href="/partid/${nameToSlug(name)}">${escapeHtml(name)}</a> \u2014 ${cnt}</li>`
              ))
            ) : ''}
            ${renderSection(
              `${escapeHtml(label)} (${statusMembers.length})`,
              renderBulletList(statusMembers.map((p) => renderPoliticianListItem(p, { includeCrime: true })))
            )}
            ${otherStatuses.length > 0 ? renderSection(
              'Alte statusuri juridice',
              renderBulletList(otherStatuses.map((s) => {
                const cnt = politicians.filter((p) => p.status === s).length;
                return `<li><a href="/status/${s}">${escapeHtml(STATUS_LABELS[s] || s)} (${cnt})</a></li>`;
              }))
            ) : ''}
          </div>
        </main>
      </div>
    `,
  });
  count += 1;
}

// ── County pages ────────────────────────────────────────
const countyGroups = {};
politicians.forEach((politician) => {
  if (!politician.county) return;
  if (!countyGroups[politician.county]) countyGroups[politician.county] = [];
  countyGroups[politician.county].push(politician);
});

for (const [county, members] of Object.entries(countyGroups).sort((a, b) => a[0].localeCompare(b[0], 'ro'))) {
  const countySlug = nameToSlug(county);
  const sorted = byStatusThenName(members);
  const convictedMembers = members.filter((p) => p.status === 'convicted');
  const totalYears = convictedMembers.reduce((s, p) => s + (p.sentence_years || 0), 0);

  const countyPartyCounts = {};
  members.forEach((p) => {
    countyPartyCounts[p.party] = (countyPartyCounts[p.party] || 0) + 1;
  });
  const countyParties = Object.entries(countyPartyCounts).sort((a, b) => b[1] - a[1]);

  const otherCounties = Object.entries(countyGroups)
    .filter(([name]) => name !== county)
    .sort((a, b) => b[1].length - a[1].length);

  const countyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Politicieni cu dosare penale din ${county}`,
    url: `${BASE_URL}/judet/${countySlug}`,
    description: `${members.length} politicieni cu dosare penale din jude\u021bul ${county}: ${convictedMembers.length} condamna\u021bi definitiv.`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: members.length,
      itemListElement: sorted.slice(0, 20).map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE_URL}/politician/${nameToSlug(p.name)}`,
        name: p.name,
      })),
    },
  };

  renderPage({
    path: `judet/${countySlug}`,
    title: `Politicieni cu dosare penale din ${escapeHtml(county)} | Politicieni Corup\u021bi`,
    description: `${members.length} politicieni cu dosare penale din jude\u021bul ${county}: ${convictedMembers.length} condamna\u021bi definitiv, ${Math.round(totalYears)} ani de \u00eenchisoare.`,
    canonical: `${BASE_URL}/judet/${countySlug}`,
    jsonLd: countyJsonLd,
    rootContent: `
      <div class="app-shell">
        <main class="app-section">
          <div class="app-inner" style="padding-top:4rem;padding-bottom:4rem;">
            <nav aria-label="Breadcrumb" style="display:flex;gap:0.85rem;flex-wrap:wrap;margin-bottom:1rem;">
              <a href="/">Arhiv\u0103</a>
              <a href="/lista">Lista complet\u0103</a>
              <span aria-current="page">Jude\u021bul ${escapeHtml(county)}</span>
            </nav>
            <p class="app-kicker">Jude\u021b</p>
            <h1 class="app-title">Jude\u021bul ${escapeHtml(county)}</h1>
            <p class="app-intro">${members.length} politicieni cu dosare penale: ${convictedMembers.length} condamna\u021bi definitiv, ${Math.round(totalYears)} ani de \u00eenchisoare.</p>
            ${renderSiteNav()}
            ${countyParties.length > 1 ? renderSection(
              'Distribu\u021bie pe partide',
              renderBulletList(countyParties.map(([name, cnt]) =>
                `<li><a href="/partid/${nameToSlug(name)}">${escapeHtml(name)}</a> \u2014 ${cnt}</li>`
              ))
            ) : ''}
            ${renderSection(
              `Politicieni din ${escapeHtml(county)} (${members.length})`,
              renderBulletList(sorted.map((p) => renderPoliticianListItem(p, { includeCrime: true })))
            )}
            ${otherCounties.length > 0 ? renderSection(
              'Alte jude\u021be',
              renderBulletList(otherCounties.slice(0, 15).map(([name, list]) =>
                `<li><a href="/judet/${nameToSlug(name)}">${escapeHtml(name)} (${list.length})</a></li>`
              ))
            ) : ''}
          </div>
        </main>
      </div>
    `,
  });
  count += 1;
}

// ── Politician pages ────────────────────────────────────
for (const politician of politicians) {
  const slug = nameToSlug(politician.name);
  const statusLabel = STATUS_LABELS[politician.status] || politician.status;
  const positionLabel = POSITION_LABELS[politician.position_type] || politician.position_type;
  const pageUrl = `${BASE_URL}/politician/${slug}`;
  const title = `${politician.name} - ${statusLabel} | Politicieni Corup\u021bi`;
  const description = `${politician.name} (${politician.party}, ${positionLabel}): ${politician.crime}. Status juridic: ${statusLabel}.`;
  const candidateOgImagePath = join(publicDir, 'og', `${slug}.png`);
  const ogImage = existsSync(candidateOgImagePath) ? `${BASE_URL}/og/${slug}.png` : DEFAULT_IMAGE;
  const relatedPoliticians = sortPoliticians(
    politicians.filter(
      (candidate) => candidate.party === politician.party && candidate.name !== politician.name
    )
  ).slice(0, 8);
  const facts = [];
  const sourceList = renderSourceList(politician);

  if (politician.sentence) facts.push(`<li>Pedeaps\u0103: ${escapeHtml(politician.sentence)}</li>`);
  if (politician.conviction_year) facts.push(`<li>An relevant: ${escapeHtml(politician.conviction_year)}</li>`);
  if (politician.verified_at) facts.push(`<li>Ultima verificare: ${escapeHtml(formatDateRo(politician.verified_at))}</li>`);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: politician.name,
    url: pageUrl,
    mainEntity: {
      '@type': 'Person',
      '@id': `${pageUrl}#person`,
      name: politician.name,
      description: politician.details || politician.crime || undefined,
      jobTitle: politician.position || undefined,
      memberOf: politician.party ? { '@type': 'Organization', name: politician.party } : undefined,
      url: pageUrl,
    },
  };

  renderPage({
    path: `politician/${slug}`,
    title,
    description,
    canonical: pageUrl,
    ogImage,
    jsonLd,
    rootContent: `
      <div class="app-shell">
        <main class="app-section">
          <div class="app-inner" style="padding-top:4rem;padding-bottom:4rem;">
            <nav aria-label="Breadcrumb" style="display:flex;gap:0.85rem;flex-wrap:wrap;margin-bottom:1rem;">
              <a href="/">Arhiv\u0103</a>
              <a href="/lista">Lista complet\u0103</a>
              <span aria-current="page">${escapeHtml(politician.name)}</span>
            </nav>
            <p class="app-kicker">${escapeHtml(statusLabel)}</p>
            <h1 class="app-title">${escapeHtml(politician.name)}</h1>
            <p class="app-intro">${escapeHtml(politician.party)} - ${escapeHtml(positionLabel)}</p>
            ${facts.length > 0 ? renderSection('Repere rapide', renderBulletList(facts)) : ''}
            ${renderSection('Fapta documentat\u0103', `<p style="margin:0;line-height:1.7;">${escapeHtml(politician.crime)}</p>`)}
            ${politician.details ? renderSection('Detalii', `<p style="margin:0;line-height:1.7;">${escapeHtml(politician.details)}</p>`) : ''}
            ${sourceList ? renderSection(
              Array.isArray(politician.sources) && politician.sources.length === 1 ? 'Surs\u0103' : 'Surse',
              sourceList
            ) : ''}
            ${relatedPoliticians.length > 0 ? renderSection(
              `Al\u021bi politicieni ${escapeHtml(politician.party)}`,
              renderBulletList(relatedPoliticians.map((candidate) => renderPoliticianListItem(candidate)))
            ) : ''}
            ${renderSection(
              'Continu\u0103 explorarea',
              renderBulletList([
                '<li><a href="/lista">R\u0103sfoie\u0219te arhiva complet\u0103</a></li>',
                '<li><a href="/glosar">Verific\u0103 sensul statusurilor juridice</a></li>',
                '<li><a href="/metodologie">Vezi sursele \u0219i metodologia proiectului</a></li>',
              ])
            )}
          </div>
        </main>
      </div>
    `,
  });
  count += 1;
}

console.log(`Pre-rendered ${count} pages with crawlable HTML content.`);
