import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useData } from '../hooks/useData';
import { nameToSlug } from '../utils/slug';
import { POSITION_LABELS, STATUS_LABELS, formatYears } from '../utils/constants';
import { getCounty } from '../utils/geography';
import { getRomaniaCountyNameBySlug } from '../utils/romaniaCountyMap';
import { ThemeToggle } from '../components/ThemeToggle';

const BASE_URL = 'https://politicieni-corupti.ro';

const STATUS_RANK = {
  convicted: 0,
  first_instance: 1,
  indicted: 2,
  investigated: 3,
  prescribed: 4,
  closed: 5,
  acquitted: 6,
};

export function JudetPage() {
  const { slug } = useParams();
  const { allData } = useData();
  const fallbackCounty = getRomaniaCountyNameBySlug(slug);

  const { county, politicians } = useMemo(() => {
    const match = allData.find((politician) => {
      const countyName = getCounty(politician);
      return countyName && nameToSlug(countyName) === slug;
    });

    if (!match) {
      return fallbackCounty
        ? { county: fallbackCounty, politicians: [] }
        : { county: null, politicians: [] };
    }

    const countyName = getCounty(match);
    const list = allData
      .filter((politician) => getCounty(politician) === countyName)
      .sort((left, right) => {
        const rankA = STATUS_RANK[left.status] ?? 99;
        const rankB = STATUS_RANK[right.status] ?? 99;
        if (rankA !== rankB) return rankA - rankB;
        return left.name.localeCompare(right.name, 'ro');
      });

    return { county: countyName, politicians: list };
  }, [allData, fallbackCounty, slug]);

  const isKnownCounty = Boolean(county);
  const isEmptyCounty = isKnownCounty && politicians.length === 0;
  const locationPrefix = county === 'București' ? 'Municipiul' : 'Județul';
  const locationType = county === 'București' ? 'Municipiu' : 'Județ';
  const locationNoun = county === 'București' ? 'municipiul' : 'județul';

  const stats = useMemo(() => {
    const convicted = politicians.filter((politician) => politician.status === 'convicted');
    const totalYears = convicted.reduce((sum, politician) => sum + (politician.sentence_years || 0), 0);
    const partyCounts = {};

    politicians.forEach((politician) => {
      partyCounts[politician.party] = (partyCounts[politician.party] || 0) + 1;
    });

    const topParties = Object.entries(partyCounts).sort((a, b) => b[1] - a[1]);
    return { convicted: convicted.length, totalYears, topParties };
  }, [politicians]);

  const title = county
    ? isEmptyCounty
      ? `Momentan fără politicieni asociați din ${county} | Politicieni Corupți`
      : `Politicieni cu dosare penale din ${county} | Politicieni Corupți`
    : 'Județ negăsit | Politicieni Corupți';

  const description = county
    ? isEmptyCounty
      ? `Momentan nu avem politicieni asociați în arhivă cu ${locationNoun} ${county}. Pagina rămâne disponibilă pentru completări viitoare.`
      : `${politicians.length} politicieni cu dosare penale din ${locationNoun} ${county}: ${stats.convicted} condamnați definitiv, ${formatYears(stats.totalYears)} de închisoare.`
    : 'Județul nu a fost găsit în baza de date.';

  const allCounties = useMemo(() => {
    const counts = {};

    allData.forEach((politician) => {
      const countyName = getCounty(politician);
      if (countyName && countyName !== county) {
        counts[countyName] = (counts[countyName] || 0) + 1;
      }
    });

    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [allData, county]);

  useSEO({ title, description, url: `${BASE_URL}/judet/${slug}` });

  if (!county) {
    return (
      <div className="app-shell">
        <div className="app-section">
          <div className="app-inner" style={{ padding: '4rem 0', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>
              Județ negăsit
            </h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Nu am găsit niciun județ cu acest identificator în baza de date.
            </p>
            <Link to="/" className="app-intro-link">← Înapoi la arhivă</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="app-section app-header">
        <div className="app-inner">
          <div className="app-kicker-row">
            <Link to="/" className="app-kicker" style={{ textDecoration: 'none' }}>
              ← Politicieni Corupți
            </Link>
            <span className="app-kicker-separator">—</span>
            <span className="app-kicker-meta">{locationType}</span>
            <ThemeToggle />
          </div>

          <h1 className="app-title">{locationPrefix} {county}</h1>
          <p className="app-subtitle">
            {isEmptyCounty
              ? 'Momentan fără politicieni asociați în arhivă'
              : `${politicians.length} politicieni cu dosare penale`}
          </p>
          <div className="app-rule" />
        </div>
      </header>

      <main className="app-section app-main">
        <div className="app-inner">
          {!isEmptyCounty ? (
            <>
              <div className="partid-stats">
                <div className="partid-stat">
                  <span className="partid-stat-value">{politicians.length}</span>
                  <span className="partid-stat-label">total cazuri</span>
                </div>
                <div className="partid-stat">
                  <span className="partid-stat-value partid-stat-value--accent">{stats.convicted}</span>
                  <span className="partid-stat-label">condamnați definitiv</span>
                </div>
                {stats.totalYears > 0 && (
                  <div className="partid-stat">
                    <span className="partid-stat-value partid-stat-value--tabular">{formatYears(stats.totalYears)}</span>
                    <span className="partid-stat-label">ani de închisoare</span>
                  </div>
                )}
              </div>

              {stats.topParties.length > 1 && (
                <div className="partid-status-breakdown">
                  {stats.topParties.map(([partyName, count]) => (
                    <Link
                      key={partyName}
                      to={`/partid/${nameToSlug(partyName)}`}
                      className="partid-status-tag"
                    >
                      {partyName}: {count}
                    </Link>
                  ))}
                </div>
              )}

              <ul className="lista-list">
                {politicians.map((politician) => (
                  <li key={politician.name} className="lista-item" data-status={politician.status}>
                    <Link
                      to={`/politician/${nameToSlug(politician.name)}`}
                      state={{ from: `/judet/${slug}`, fromLabel: `${locationPrefix} ${county}` }}
                      className="lista-item-link"
                    >
                      <span className="lista-item-dot" />
                      <span className="lista-item-name">{politician.name}</span>
                      <span className="lista-item-party">{politician.party}</span>
                      <span className="lista-item-position">
                        {POSITION_LABELS[politician.position_type] || politician.position_type}
                      </span>
                      <span className="lista-item-status">
                        {STATUS_LABELS[politician.status] || politician.status}
                        {politician.sentence_years > 0 && (
                          <span className="lista-item-sentence">{formatYears(politician.sentence_years)}</span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div
              style={{
                maxWidth: '46rem',
                padding: '1.25rem 0 1.75rem',
                borderTop: '1px solid var(--color-rule)',
              }}
            >
              <p style={{ margin: 0, color: 'var(--color-text)', lineHeight: 1.7 }}>
                Momentan nu avem niciun politician asociat public cu {locationNoun} <strong>{county}</strong> în arhivă.
              </p>
              <p style={{ margin: '0.85rem 0 0', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Pagina rămâne disponibilă pentru completări viitoare. Adăugăm un județ doar când există o legătură
                publică și verificabilă, cum ar fi funcția exercitată acolo, circumscripția reprezentată sau o altă
                asociere geografică relevantă.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
                <Link to="/metodologie" className="app-intro-link">Cum atribuim județele →</Link>
                <Link to="/lista" className="app-intro-link">Vezi toată arhiva →</Link>
              </div>
            </div>
          )}

          {allCounties.length > 0 && (
            <div className="partid-other-parties">
              <h2 className="partid-other-title">
                {isEmptyCounty ? 'Județe deja populate în arhivă' : 'Alte județe'}
              </h2>
              <div className="partid-other-list">
                {allCounties.map(([name, count]) => (
                  <Link
                    key={name}
                    to={`/judet/${nameToSlug(name)}`}
                    className="partid-other-link"
                  >
                    {name} ({count})
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="app-section app-footer">
        <div className="app-inner">
          <div className="app-footer-rule" />
          <nav className="app-footer-nav">
            <Link to="/" className="app-footer-nav-link">Arhivă</Link>
            <Link to="/lista" className="app-footer-nav-link">Lista completă</Link>
            <Link to="/metodologie" className="app-footer-nav-link">Metodologie</Link>
            <Link to="/glosar" className="app-footer-nav-link">Glosar juridic</Link>
            <Link to="/contact" className="app-footer-nav-link">Contact & Corecții</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
