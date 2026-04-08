import { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useData } from '../hooks/useData';
import { useAnalytics } from '../hooks/useAnalytics';
import { getPartyToken } from '../utils/partyColors';
import { POSITION_LABELS, STATUS_LABELS, formatYears } from '../utils/constants';
import { ThemeToggle } from '../components/ThemeToggle';
import { nameToSlug } from '../utils/slug';
import { parsePrejudiciuEur } from '../utils/parsePrejudiciu';

const BASE_URL = 'https://politicieni-corupti.ro';

const SOURCE_KIND_LABELS = {
  official: 'Oficial',
  profile: 'Profil',
  press: 'Presă',
};

const STATUS_PRIORITY = {
  convicted: 0,
  first_instance: 1,
  indicted: 2,
  investigated: 3,
  prescribed: 4,
  acquitted: 5,
  closed: 6,
};

const INSTITUTION_HOST_LABELS = {
  'ani.ro': 'ANI',
  'diicot.ro': 'DIICOT',
  'dna.ro': 'DNA',
  'integritate.eu': 'ANI',
  'just.ro': 'Ministerul Justiției',
  'mai.gov.ro': 'MAI',
  'mpublic.ro': 'Ministerul Public',
  'old.integritate.eu': 'ANI',
  'pna.ro': 'DNA',
  'politiaromana.ro': 'Poliția Română',
  'portal.just.ro': 'Instanță',
  'scj.ro': 'ÎCCJ',
};

const INSTITUTION_LABEL_PATTERNS = [
  { pattern: /\bDNA\b/, name: 'DNA' },
  { pattern: /\bANI\b/, name: 'ANI' },
  { pattern: /\bDIICOT\b/, name: 'DIICOT' },
  { pattern: /\bÎCCJ\b/, name: 'ÎCCJ' },
  { pattern: /\bICCJ\b/, name: 'ÎCCJ' },
  { pattern: /senatul/i, name: 'Senatul României' },
  { pattern: /camera deputa/i, name: 'Camera Deputaților' },
  { pattern: /ministerul public/i, name: 'Ministerul Public' },
  { pattern: /înalta curte/i, name: 'ÎCCJ' },
];

function buildJsonLd(politician, slug) {
  const pageUrl = `${BASE_URL}/politician/${slug}`;

  const person = {
    '@type': 'Person',
    '@id': pageUrl,
    name: politician.name,
    jobTitle: politician.position || undefined,
    memberOf: politician.party ? { '@type': 'Organization', name: politician.party } : undefined,
    description: politician.details || politician.crime || undefined,
    url: pageUrl,
  };

  const graph = [person];

  if (politician.status === 'convicted' && politician.conviction_year) {
    graph.push({
      '@type': 'Event',
      name: `Condamnare definitivă — ${politician.name}`,
      startDate: String(politician.conviction_year),
      description: politician.crime || undefined,
      about: { '@id': pageUrl },
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

function getHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}

function inferSourceDescriptor(source) {
  if (source?.description) return source.description;
  if (source?.source_type) return source.source_type;

  const host = getHost(source?.url);
  if (!host) return 'Sursă externă';

  if (host.endsWith('dna.ro')) return 'Comunicat DNA';
  if (host.endsWith('integritate.eu') || host.endsWith('ani.ro')) return 'Comunicat ANI';
  if (host.endsWith('portal.just.ro') || host.endsWith('scj.ro')) return 'Instanță / hotărâre';
  if (host.endsWith('mpublic.ro') || host.endsWith('just.ro') || host.endsWith('pna.ro')) {
    return 'Instituție publică';
  }
  if (host.endsWith('cdep.ro') || host.endsWith('senat.ro') || host.endsWith('gov.ro')) {
    return 'Profil oficial';
  }
  if (host.endsWith('wikipedia.org')) return 'Profil enciclopedic';
  if (source?.kind === 'official') return 'Sursă oficială';
  if (source?.kind === 'profile') return 'Profil public';
  return 'Presă de context';
}

function formatApproxEuro(amount) {
  return `~€${new Intl.NumberFormat('ro-RO', { maximumFractionDigits: 0 }).format(amount)}`;
}

function normalizeInstitutionEntry(entry) {
  if (!entry) return null;
  if (typeof entry === 'string') {
    return { name: entry, role: null, official: true };
  }

  if (!entry.name) return null;
  return {
    name: entry.name,
    role: entry.role || entry.note || null,
    official: entry.official ?? true,
  };
}

function inferInstitutionFromSource(source) {
  const host = getHost(source?.url);
  const institutionName = host ? INSTITUTION_HOST_LABELS[host] : null;
  const labelMatch = INSTITUTION_LABEL_PATTERNS.find((entry) => entry.pattern.test(source?.label || ''));
  const inferredName = institutionName || labelMatch?.name;
  if (!inferredName) return null;

  return {
    name: inferredName,
    role: inferSourceDescriptor(source),
    official: source?.kind === 'official',
  };
}

function inferInstitutionsFromDetails(politician) {
  const details = `${politician.details || ''} ${politician.crime || ''}`;
  const inferred = [];

  if (/(?:\bDNA\b|Direcția Națională Anticorupție)/i.test(details)) {
    inferred.push({ name: 'DNA', role: 'Menționată în descrierea publică a cauzei', official: true });
  }
  if (/(?:\bANI\b|Agenția Națională de Integritate)/i.test(details)) {
    inferred.push({ name: 'ANI', role: 'Menționată în descrierea publică a cauzei', official: true });
  }
  if (/(?:\bDIICOT\b|Direcția de Investigare a Infracțiunilor de Criminalitate Organizată și Terorism)/i.test(details)) {
    inferred.push({ name: 'DIICOT', role: 'Menționată în descrierea publică a cauzei', official: true });
  }
  if (/(?:\bÎCCJ\b|\bICCJ\b|Înalta Curte de Casație și Justiție)/i.test(details)) {
    inferred.push({ name: 'ÎCCJ', role: 'Instanță menționată în descrierea publică a cauzei', official: true });
  }
  if (/senatul/i.test(details)) {
    inferred.push({ name: 'Senatul României', role: 'Instituție menționată în sursele publice', official: true });
  }
  if (/camera de apel bucurești|curtea de apel bucurești/i.test(details)) {
    inferred.push({ name: 'Curtea de Apel București', role: 'Instanță menționată în sursele publice', official: true });
  }

  return inferred;
}

function getCaseName(politician) {
  if (politician.case_name) return politician.case_name;

  const details = `${politician.details || ''} ${politician.crime || ''}`;
  const patterns = [
    /\b(dosarul)\s+[„"'`]?([^"'`.,;()]{2,80}?)(?=\s+(?:pentru|privind|după|în care|cu)\b|[.,;)]|$)/i,
    /\b(scandalul)\s+[„"'`]?([^"'`.,;()]{2,80}?)(?=\s+(?:pentru|privind|după|în care|cu)\b|[.,;)]|$)/i,
  ];

  for (const pattern of patterns) {
    const match = details.match(pattern);
    if (!match) continue;

    const prefix = match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase();
    const subject = match[2].trim().replace(/[”"'`]+$/g, '');
    if (!subject) continue;

    return `${prefix} ${subject}`;
  }

  return null;
}

function getInstitutions(politician, sources) {
  const items = [
    ...(Array.isArray(politician.institutions) ? politician.institutions.map(normalizeInstitutionEntry) : []),
    ...sources.map(inferInstitutionFromSource),
    ...inferInstitutionsFromDetails(politician),
  ].filter(Boolean);

  const byName = new Map();
  for (const item of items) {
    const key = item.name.trim();
    if (!byName.has(key)) {
      byName.set(key, { ...item });
      continue;
    }

    const existing = byName.get(key);
    if (!existing.role && item.role) existing.role = item.role;
  }

  return [...byName.values()].filter((item) => item.official);
}

function getOutcomeLabel(politician) {
  if (politician.outcome_label) return politician.outcome_label;
  if (politician.sentence) return politician.sentence;

  switch (politician.status) {
    case 'first_instance':
      return 'Condamnare în primă instanță';
    case 'indicted':
      return 'Proces în curs';
    case 'investigated':
      return 'Cercetare / urmărire în curs';
    case 'prescribed':
      return 'Proces închis prin prescripție';
    case 'acquitted':
      return 'Achitare';
    case 'closed':
      return 'Cauză clasată';
    default:
      return 'Nespecificat public';
  }
}

function getExecutionType(politician) {
  if (politician.execution_type) return politician.execution_type;

  if (politician.status === 'acquitted') return 'Achitare';
  if (politician.status === 'prescribed') return 'Prescripție';

  const haystack = `${politician.sentence || ''} ${politician.details || ''}`.toLowerCase();

  if (haystack.includes('suspend')) return 'Cu suspendare';
  if (haystack.includes('cu executare') || haystack.includes('executare')) return 'Cu executare';

  return null;
}

function getSummaryRows(politician) {
  const caseName = getCaseName(politician);
  const publicRole =
    politician.public_role ||
    politician.role_at_time ||
    politician.position ||
    POSITION_LABELS[politician.position_type] ||
    politician.position_type;

  const caseSummary = caseName ? `${politician.crime} · ${caseName}` : politician.crime;

  return [
    { label: 'Rol public', value: publicRole },
    { label: 'Speță', value: caseSummary },
    { label: 'Stadiu actual', value: STATUS_LABELS[politician.status] || politician.status },
    { label: 'Rezultat', value: getOutcomeLabel(politician), accent: Boolean(politician.sentence) },
  ];
}

function getRoleFacts(politician) {
  const facts = [
    politician.role_at_time
      ? { label: 'Rol la data faptelor', value: politician.role_at_time }
      : null,
    politician.position ? { label: 'Funcția relevantă', value: politician.position } : null,
    politician.party ? { label: 'Partid', value: politician.party } : null,
    politician.county ? { label: 'Județ', value: politician.county } : null,
    {
      label: 'Categorie de funcție',
      value: POSITION_LABELS[politician.position_type] || politician.position_type,
    },
  ];

  return facts.filter(Boolean);
}

function getImpactFacts(politician) {
  const facts = [];
  const explicitPrejudiceText = politician.prejudiciu_text || politician.estimated_damage_text;
  const explicitPrejudiceAmount =
    Number.isFinite(Number(politician.prejudiciu_eur)) && Number(politician.prejudiciu_eur) > 0
      ? Number(politician.prejudiciu_eur)
      : null;
  const parsedPrejudice = explicitPrejudiceAmount || parsePrejudiciuEur(politician);
  const executionType = getExecutionType(politician);

  if (explicitPrejudiceText) {
    facts.push({ label: 'Prejudiciu estimat', value: explicitPrejudiceText });
  } else if (parsedPrejudice > 0) {
    facts.push({ label: 'Prejudiciu estimat', value: formatApproxEuro(parsedPrejudice) });
  }

  if (politician.sentence_years) {
    facts.push({ label: 'Durata pedepsei', value: formatYears(politician.sentence_years) });
  }

  if (executionType) {
    facts.push({ label: 'Regim indicat', value: executionType });
  }

  if (politician.disqualifications) {
    facts.push({ label: 'Interdicții', value: politician.disqualifications });
  }

  if (politician.conviction_year) {
    facts.push({
      label: politician.status === 'convicted' ? 'Anul condamnării' : 'An reper',
      value: String(politician.conviction_year),
      tabular: true,
    });
  }

  return facts;
}

function formatCount(count, singular, plural) {
  return `${count} ${count === 1 ? singular : plural}`;
}

function getSourceSummary(sources) {
  const counts = sources.reduce(
    (accumulator, source) => {
      if (source.kind === 'official') accumulator.official += 1;
      else if (source.kind === 'profile') accumulator.profile += 1;
      else accumulator.press += 1;
      return accumulator;
    },
    { official: 0, profile: 0, press: 0 }
  );

  const summary = [];

  if (counts.official) {
    summary.push(formatCount(counts.official, 'sursă oficială', 'surse oficiale'));
  }
  if (counts.profile) {
    summary.push(formatCount(counts.profile, 'profil', 'profiluri'));
  }
  if (counts.press) {
    summary.push(formatCount(counts.press, 'sursă de context', 'surse de context'));
  }

  return summary.join(' · ');
}

function sortRelatedPoliticians(a, b) {
  const statusDelta = (STATUS_PRIORITY[a.status] ?? 99) - (STATUS_PRIORITY[b.status] ?? 99);
  if (statusDelta !== 0) return statusDelta;

  const yearDelta = (b.conviction_year || 0) - (a.conviction_year || 0);
  if (yearDelta !== 0) return yearDelta;

  return a.name.localeCompare(b.name, 'ro');
}

function Section({ label, children }) {
  return (
    <div className="pol-page-section">
      <div className="pol-page-section-label">{label}</div>
      {children}
    </div>
  );
}

function DetailList({ items }) {
  return (
    <dl className="pol-page-detail-list">
      {items.map((item) => (
        <div key={`${item.label}:${item.value}`} className="pol-page-detail-row">
          <dt className="pol-page-detail-label">{item.label}</dt>
          <dd
            className={`pol-page-detail-value${item.tabular ? ' pol-page-detail-value--tabular' : ''}${
              item.accent ? ' pol-page-detail-value--accent' : ''
            }`}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function RelatedGroup({ title, items, moreHref, moreLabel }) {
  if (!items.length) return null;

  return (
    <div className="pol-page-sidebar-section">
      <div className="pol-page-sidebar-subheading">{title}</div>
      <ul className="pol-page-sidebar-list">
        {items.map((politician) => (
          <li key={politician.name}>
            <Link
              to={`/politician/${nameToSlug(politician.name)}`}
              state={{ from: '/lista', fromLabel: 'Lista politicienilor' }}
              className="pol-page-sidebar-link"
              data-status={politician.status}
            >
              <span className="pol-page-sidebar-dot" />
              <span className="pol-page-sidebar-name">{politician.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {moreHref && moreLabel && (
        <Link to={moreHref} className="pol-page-sidebar-more">
          {moreLabel}
        </Link>
      )}
    </div>
  );
}

export function PoliticianPage() {
  const { slug } = useParams();
  const location = useLocation();
  const { findBySlug, allData } = useData();
  const { track } = useAnalytics();
  const politician = findBySlug(slug);

  const backHref = location.state?.from || '/lista';
  const backLabel = location.state?.fromLabel || 'Lista politicienilor';

  const [copied, setCopied] = useState(false);

  function handleShare() {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      const el = document.createElement('textarea');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const title = politician
    ? `${politician.name} — ${STATUS_LABELS[politician.status] || politician.status} | Politicieni Corupți`
    : 'Politician negăsit | Politicieni Corupți';

  const description = politician
    ? `${politician.name}, ${politician.party}, ${politician.position || ''}. ${politician.crime || ''}. Status: ${
        STATUS_LABELS[politician.status] || politician.status
      }.`
    : 'Pagina acestui politician nu a fost găsită.';

  const pageUrl = politician ? `${BASE_URL}/politician/${slug}` : BASE_URL;
  const ogImage = `${BASE_URL}/og-image.png`;

  useSEO({ title, description, url: pageUrl, image: ogImage });

  useEffect(() => {
    if (politician) {
      track('Politician View', {
        name: politician.name,
        status: politician.status,
        party: politician.party,
      });
    }
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!politician) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'politician-jsonld';
    script.textContent = JSON.stringify(buildJsonLd(politician, slug));
    document.head.appendChild(script);
    return () => {
      document.getElementById('politician-jsonld')?.remove();
    };
  }, [politician, slug]);

  const samePartyMatches = useMemo(() => {
    if (!politician) return [];
    return allData
      .filter((entry) => entry.party === politician.party && entry.name !== politician.name)
      .sort(sortRelatedPoliticians);
  }, [politician, allData]);

  const sameCountyMatches = useMemo(() => {
    if (!politician?.county) return [];
    return allData
      .filter((entry) => entry.county === politician.county && entry.name !== politician.name)
      .sort(sortRelatedPoliticians);
  }, [politician, allData]);

  const sameRoleMatches = useMemo(() => {
    if (!politician?.position_type) return [];
    return allData
      .filter(
        (entry) =>
          entry.position_type === politician.position_type && entry.name !== politician.name
      )
      .sort(sortRelatedPoliticians);
  }, [politician, allData]);

  const summaryRows = useMemo(() => (politician ? getSummaryRows(politician) : []), [politician]);
  const roleFacts = useMemo(() => (politician ? getRoleFacts(politician) : []), [politician]);
  const impactFacts = useMemo(() => (politician ? getImpactFacts(politician) : []), [politician]);

  if (!politician) {
    return (
      <div className="app-shell">
        <div className="app-section">
          <div className="app-inner" style={{ padding: '4rem 0', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>
              Politician negăsit
            </h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Nu am găsit nicio persoană cu acest identificator în baza de date.
            </p>
            <Link to="/" className="app-intro-link">← Înapoi la arhivă</Link>
          </div>
        </div>
      </div>
    );
  }

  const sources = Array.isArray(politician.sources) ? politician.sources : [];
  const sourceSummary = getSourceSummary(sources);
  const caseName = getCaseName(politician);
  const institutions = getInstitutions(politician, sources);
  const sameParty = samePartyMatches.slice(0, 6);
  const sameCounty = sameCountyMatches.slice(0, 6);
  const sameRole = sameRoleMatches.slice(0, 6);

  return (
    <div className="app-shell pol-page-shell">
      <header className="app-section app-header">
        <div className="app-inner">
          <div className="app-kicker-row">
            <Link to={backHref} className="app-kicker" style={{ textDecoration: 'none' }}>
              ← {backLabel}
            </Link>
            <span className="app-kicker-separator">—</span>
            <span className="app-kicker-meta">Profil public</span>
            <button
              className={`pol-page-share-btn${copied ? ' pol-page-share-btn--copied' : ''}`}
              onClick={handleShare}
              aria-label="Copiază linkul paginii"
            >
              {copied ? (
                <>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Copiat!
                </>
              ) : (
                <>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="4" width="7" height="7" rx="1" />
                    <path d="M8 4V2a1 1 0 00-1-1H2a1 1 0 00-1 1v5a1 1 0 001 1h2" />
                  </svg>
                  Copiază link
                </>
              )}
            </button>
            <ThemeToggle />
          </div>

          <div
            className="pol-page-name-row"
            data-party-token={getPartyToken(politician.party)}
            data-status={politician.status}
          >
            <div className="pol-page-accent" />
            <h1 className="pol-page-name">{politician.name}</h1>
          </div>

          <div className="pol-page-meta">
            <Link to={`/partid/${nameToSlug(politician.party)}`} className="pol-page-party pol-page-meta-link">
              <span className="detail-panel-party-dot" />
              {politician.party}
            </Link>
            <span className="detail-panel-separator">·</span>
            <span>{POSITION_LABELS[politician.position_type] || politician.position_type}</span>
            {politician.county && (
              <>
                <span className="detail-panel-separator">·</span>
                <Link to={`/judet/${nameToSlug(politician.county)}`} className="pol-page-meta-link">
                  {politician.county}
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="app-section app-main">
        <div className="app-inner">
          <div className="pol-page-grid">
            <div className="pol-page-card">
              <div className="pol-page-card-topbar">
                <span
                  className="detail-panel-status"
                  data-status={politician.status}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span className="detail-panel-status-dot" />
                  {STATUS_LABELS[politician.status] || politician.status}
                </span>
              </div>

              <Section label="Dosar pe scurt">
                <DetailList items={summaryRows} />
              </Section>

              {institutions.length > 0 && (
                <Section label="Surse oficiale relevante">
                  <p className="detail-panel-copy detail-panel-copy--muted">
                    {institutions.map((institution) => institution.name).join(' · ')}
                  </p>
                </Section>
              )}

              {impactFacts.length > 0 && (
                <Section label="Impact">
                  <DetailList items={impactFacts} />
                </Section>
              )}

              {roleFacts.length > 0 && (
                <Section label="Rol public">
                  <DetailList items={roleFacts} />
                </Section>
              )}

              {politician.details && (
                <Section label="Detalii">
                  <p className="detail-panel-copy detail-panel-copy--details">{politician.details}</p>
                </Section>
              )}

              {sources.length > 0 && (
                <Section label={sources.length === 1 ? 'Sursă explicată' : 'Surse explicate'}>
                  {sourceSummary && <p className="pol-page-source-summary">{sourceSummary}</p>}
                  <div className="detail-panel-source-list">
                    {sources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-panel-source-link pol-page-source-link"
                      >
                        <span className="detail-panel-source-label">{source.label}</span>
                        <span className="pol-page-source-meta">
                          <span className="pol-page-source-descriptor">{inferSourceDescriptor(source)}</span>
                          <span className="detail-panel-source-kind">
                            {SOURCE_KIND_LABELS[source.kind] || 'Extern'}
                          </span>
                        </span>
                        <svg
                          className="detail-panel-link-icon"
                          width="11"
                          height="11"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M4 1h7v7M11 1L5 7" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </Section>
              )}

              <div className="detail-panel-footer-divider" />
              <p className="detail-panel-footer-note">
                Informațiile provin din surse publice și sunt prezentate rezumativ.
                Verifică întotdeauna sursele originale și metodologia.{' '}
                <Link to="/metodologie" className="app-intro-link">Metodologie →</Link>
              </p>
            </div>

            {(sameParty.length > 0 || sameCounty.length > 0 || sameRole.length > 0) && (
              <aside className="pol-page-sidebar">
                <div className="pol-page-sidebar-heading">Conexiuni</div>

                <RelatedGroup
                  title={`Același partid · ${politician.party}`}
                  items={sameParty}
                  moreHref={
                    samePartyMatches.length > sameParty.length
                      ? `/partid/${nameToSlug(politician.party)}`
                      : null
                  }
                  moreLabel={
                    samePartyMatches.length > sameParty.length
                      ? `Toți din ${politician.party} →`
                      : null
                  }
                />

                <RelatedGroup
                  title={politician.county ? `Același județ · ${politician.county}` : 'Același județ'}
                  items={sameCounty}
                  moreHref={
                    politician.county && sameCountyMatches.length > sameCounty.length
                      ? `/judet/${nameToSlug(politician.county)}`
                      : null
                  }
                  moreLabel={
                    politician.county && sameCountyMatches.length > sameCounty.length
                      ? `Toți din ${politician.county} →`
                      : null
                  }
                />

                <RelatedGroup
                  title={`Aceeași categorie · ${
                    POSITION_LABELS[politician.position_type] || politician.position_type
                  }`}
                  items={sameRole}
                />
              </aside>
            )}
          </div>
        </div>
      </main>

      <footer className="app-section app-footer">
        <div className="app-inner">
          <div className="app-footer-rule" />
          <nav className="app-footer-nav">
            <Link to="/" className="app-footer-nav-link">Arhivă</Link>
            <Link to="/metodologie" className="app-footer-nav-link">Metodologie</Link>
            <Link to="/aviz-legal" className="app-footer-nav-link">Aviz legal</Link>
            <Link to="/contact" className="app-footer-nav-link">Contact & Corecții</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
