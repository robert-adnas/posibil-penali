import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useData } from '../hooks/useData';
import { getPartyToken } from '../utils/partyColors';
import { POSITION_LABELS, STATUS_LABELS } from '../utils/constants';

const BASE_URL = 'https://politicieni-corupti.ro';

const SOURCE_KIND_LABELS = {
  official: 'Oficial',
  profile: 'Profil',
  press: 'Presă',
};

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

function Section({ label, children }) {
  return (
    <div className="pol-page-section">
      <div className="pol-page-section-label">{label}</div>
      {children}
    </div>
  );
}

export function PoliticianPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { findBySlug } = useData();
  const politician = findBySlug(slug);

  const title = politician
    ? `${politician.name} — ${STATUS_LABELS[politician.status] || politician.status} | Politicieni Corupți`
    : 'Politician negăsit | Politicieni Corupți';

  const description = politician
    ? `${politician.name}, ${politician.party}, ${politician.position || ''}. ${politician.crime || ''}. Status: ${STATUS_LABELS[politician.status] || politician.status}.`
    : 'Pagina acestui politician nu a fost găsită.';

  const pageUrl = politician ? `${BASE_URL}/politician/${slug}` : BASE_URL;
  const ogImage = politician
    ? `${BASE_URL}/og/${slug}.png`
    : `${BASE_URL}/og-image.png`;

  useSEO({ title, description, url: pageUrl, image: ogImage });

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
  const formattedVerifiedAt = politician.verified_at
    ? new Intl.DateTimeFormat('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' }).format(
        new Date(politician.verified_at)
      )
    : null;

  return (
    <div className="app-shell">
      <header className="app-section app-header">
        <div className="app-inner">
          <div className="app-kicker-row">
            <Link to="/" className="app-kicker" style={{ textDecoration: 'none' }}>
              ← Politicieni Corupți
            </Link>
            <span className="app-kicker-separator">—</span>
            <span className="app-kicker-meta">Profil public</span>
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
            <span className="pol-page-party">
              <span className="detail-panel-party-dot" />
              {politician.party}
            </span>
            <span className="detail-panel-separator">·</span>
            <span>{POSITION_LABELS[politician.position_type] || politician.position_type}</span>
          </div>
        </div>
      </header>

      <main className="app-section app-main">
        <div className="app-inner">
          <div className="pol-page-grid">
            <div className="pol-page-card">
              <Section label="Status juridic">
                <span
                  className="detail-panel-status"
                  data-status={politician.status}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span className="detail-panel-status-dot" />
                  {STATUS_LABELS[politician.status] || politician.status}
                </span>
              </Section>

              {formattedVerifiedAt && (
                <Section label="Ultima verificare">
                  <p className="detail-panel-copy detail-panel-copy--muted">{formattedVerifiedAt}</p>
                </Section>
              )}

              <Section label="Faptă">
                <p className="detail-panel-copy detail-panel-copy--crime">{politician.crime}</p>
              </Section>

              {(politician.sentence || politician.conviction_year) && (
                <div className="detail-panel-keyfacts">
                  {politician.sentence && (
                    <div>
                      <div className="detail-panel-section-label">Pedeapsă</div>
                      <p className="detail-panel-keyfact-value detail-panel-keyfact-value--accent">
                        {politician.sentence}
                      </p>
                    </div>
                  )}
                  {politician.conviction_year && (
                    <div>
                      <div className="detail-panel-section-label">Anul condamnării</div>
                      <p className="detail-panel-keyfact-value detail-panel-keyfact-value--tabular">
                        {politician.conviction_year}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {politician.position && (
                <Section label="Funcția deținută">
                  <p className="detail-panel-copy detail-panel-copy--muted">{politician.position}</p>
                </Section>
              )}

              {politician.details && (
                <Section label="Detalii">
                  <p className="detail-panel-copy detail-panel-copy--details">{politician.details}</p>
                </Section>
              )}

              {sources.length > 0 && (
                <Section label={sources.length === 1 ? 'Sursă' : 'Surse'}>
                  <div className="detail-panel-source-list">
                    {sources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-panel-source-link"
                      >
                        <span className="detail-panel-source-label">{source.label}</span>
                        <span className="detail-panel-source-kind">
                          {SOURCE_KIND_LABELS[source.kind] || 'Extern'}
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
                Verifică întotdeauna sursele originale și data ultimei verificări.{' '}
                <Link to="/metodologie" className="app-intro-link">Metodologie →</Link>
              </p>
            </div>
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
