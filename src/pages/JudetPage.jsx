import { useCallback, useMemo } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useData } from '../hooks/useData';
import { nameToSlug } from '../utils/slug';
import { POSITION_LABELS, STATUS_LABELS, formatYears } from '../utils/constants';
import {
  applyScopeToSearchParams,
  createDefaultFilters,
  getScopeSearch,
  readScopeFromSearchParams,
} from '../utils/filterParams';
import { countDataScopes, DATA_SCOPE } from '../utils/politicalScope';
import { getCounty, getCountySlug, matchesCountySlug } from '../utils/geography';
import { getRomaniaCountyNameBySlug } from '../utils/romaniaCountyMap';
import { ThemeToggle } from '../components/ThemeToggle';
import { ArchiveScopeToggle } from '../components/ArchiveScopeToggle';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const scope = readScopeFromSearchParams(searchParams);
  const filters = useMemo(() => ({
    ...createDefaultFilters(),
    scope,
  }), [scope]);
  const { allData, scopeData } = useData({ filters });
  const scopeSearch = useMemo(() => getScopeSearch(scope), [scope]);
  const peopleLabel = scope === DATA_SCOPE.ALL ? 'persoane' : 'politicieni';
  const isExtendedScope = scope === DATA_SCOPE.ALL;
  const fallbackCounty = getRomaniaCountyNameBySlug(slug);
  const contextScopeTotals = useMemo(
    () => countDataScopes(allData, (politician) => matchesCountySlug(politician, slug)),
    [allData, slug]
  );

  const setScope = useCallback((includeExtendedArchive) => {
    const next = applyScopeToSearchParams(searchParams, includeExtendedArchive);
    setSearchParams(next, { replace: true });
  }, [searchParams, setSearchParams]);

  const { county, politicians } = useMemo(() => {
    const match = scopeData.find((politician) => matchesCountySlug(politician, slug));

    if (!match) {
      return fallbackCounty
        ? { county: fallbackCounty, politicians: [] }
        : { county: null, politicians: [] };
    }

    const countyName = fallbackCounty || getCounty(match);
    const list = scopeData
      .filter((politician) => matchesCountySlug(politician, slug))
      .sort((left, right) => {
        const rankA = STATUS_RANK[left.status] ?? 99;
        const rankB = STATUS_RANK[right.status] ?? 99;
        if (rankA !== rankB) return rankA - rankB;
        return left.name.localeCompare(right.name, 'ro');
      });

    return { county: countyName, politicians: list };
  }, [scopeData, fallbackCounty, slug]);

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
      ? `Momentan nu avem ${peopleLabel} asociați în arhivă cu ${locationNoun} ${county}. Pagina rămâne disponibilă pentru completări viitoare.`
      : `${politicians.length} ${peopleLabel} cu dosare penale din ${locationNoun} ${county}: ${stats.convicted} condamnați definitiv, ${formatYears(stats.totalYears)} de închisoare.`
    : 'Județul nu a fost găsit în baza de date.';

  const allCounties = useMemo(() => {
    const counts = {};

    scopeData.forEach((politician) => {
      const countyName = getCounty(politician);
      const countySlug = getCountySlug(politician);
      if (countyName && countySlug && countySlug !== slug) {
        const displayName = getRomaniaCountyNameBySlug(countySlug) || countyName;
        counts[displayName] = (counts[displayName] || 0) + 1;
      }
    });

    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [scopeData, slug]);

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
            <Link to={`/${scopeSearch}`} className="app-intro-link">← Înapoi la arhivă</Link>
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
            <Link to={`/${scopeSearch}`} className="app-kicker" style={{ textDecoration: 'none' }}>
              ← Politicieni Corupți
            </Link>
            <span className="app-kicker-separator">—</span>
            <span className="app-kicker-meta">{locationType}</span>
            <ThemeToggle />
          </div>

          <h1 className="app-title">{locationPrefix} {county}</h1>
          <p className="app-subtitle">
            {isEmptyCounty
              ? `Momentan fără ${peopleLabel} asociați în arhivă`
              : `${politicians.length} ${peopleLabel} cu dosare penale`}
          </p>
          <div className="app-rule" />
        </div>
      </header>

      <main className="app-section app-main">
        <div className="app-inner">
          <div className="aggregate-scope-row">
            <ArchiveScopeToggle
              checked={isExtendedScope}
              onChange={setScope}
              allTotal={contextScopeTotals[DATA_SCOPE.ALL]}
              politicalTotal={contextScopeTotals[DATA_SCOPE.POLITICAL]}
            />
          </div>

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
                      to={`/partid/${nameToSlug(partyName)}${scopeSearch}`}
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
                      state={{ from: `/judet/${slug}${scopeSearch}`, fromLabel: `${locationPrefix} ${county}` }}
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
                <Link to={`/lista${scopeSearch}`} className="app-intro-link">Vezi toată arhiva →</Link>
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
                    to={`/judet/${nameToSlug(name)}${scopeSearch}`}
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
            <Link to={`/${scopeSearch}`} className="app-footer-nav-link">Arhivă</Link>
            <Link to={`/lista${scopeSearch}`} className="app-footer-nav-link">Lista completă</Link>
            <Link to="/metodologie" className="app-footer-nav-link">Metodologie</Link>
            <Link to="/glosar" className="app-footer-nav-link">Glosar juridic</Link>
            <Link to="/contact" className="app-footer-nav-link">Contact & Corecții</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
