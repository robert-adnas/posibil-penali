import { useState, useCallback, useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { HemicycleChart } from '../components/HemicycleChart';
import { Filters } from '../components/Filters';
import { StatsBar, PrejudiciuBanner } from '../components/StatsBar';
import { DetailPanel } from '../components/DetailPanel';
import { PartyRanking } from '../components/PartyRanking';
import { CountyRanking } from '../components/CountyRanking';
import { StatusLegend } from '../components/StatusLegend';
import { ChangeLogList } from '../components/ChangeLogList';
import { ThemeToggle } from '../components/ThemeToggle';
import { useAnalytics } from '../hooks/useAnalytics';
import { useData } from '../hooks/useData';
import { useSEO } from '../hooks/useSEO';
import { downloadJSON, downloadCSV } from '../utils/download';
import {
  applyFiltersToSearchParams,
  readFiltersFromSearchParams,
} from '../utils/filterParams';

export function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useMemo(() => readFiltersFromSearchParams(searchParams), [searchParams]);
  const setFilters = useCallback((updater) => {
    const nextFilters = typeof updater === 'function' ? updater(filters) : updater;
    const nextParams = applyFiltersToSearchParams(searchParams, nextFilters);
    setSearchParams(nextParams, { replace: true });
  }, [filters, searchParams, setSearchParams]);

  const {
    metadata,
    changeLog,
    filteredData,
    allData,
    parties,
    positionTypes,
    statuses,
    stats,
  } = useData({ filters, setFilters });

  const [selectedPolitician, setSelectedPolitician] = useState(null);
  const [homeQuery, setHomeQuery] = useState('');
  const [disclaimerDismissed, setDisclaimerDismissed] = useState(
    () => localStorage.getItem('disclaimer-dismissed') === '1'
  );

  const dismissDisclaimer = useCallback(() => {
    setDisclaimerDismissed(true);
    localStorage.setItem('disclaimer-dismissed', '1');
  }, []);

  const navigate = useNavigate();
  const { track } = useAnalytics();

  useSEO();

  function handleHomeSearch(event) {
    event.preventDefault();
    const query = homeQuery.trim();
    if (query) track('Homepage Search', { query });
    navigate(query ? `/lista?q=${encodeURIComponent(query)}` : '/lista');
  }

  const convictionYears = allData
    .map((politician) => politician.conviction_year)
    .filter((year) => Number.isFinite(year));

  const coverageStartYear = convictionYears.length
    ? Math.min(...convictionYears)
    : new Date().getFullYear();
  const coverageEndYear = metadata?.last_updated
    ? new Date(metadata.last_updated).getFullYear()
    : new Date().getFullYear();
  const formattedLastUpdated = metadata?.last_updated
    ? new Intl.DateTimeFormat('ro-RO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(metadata.last_updated))
    : 'necunoscut';
  const recentChanges = useMemo(() => changeLog.slice(0, 4), [changeLog]);

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-nav">
        Sari la continut
      </a>

      <header className="app-section app-header">
        <div className="app-inner">
          <div className="app-kicker-row">
            <span className="app-kicker">Arhiva independenta</span>
            <span className="app-kicker-separator">-</span>
            <span className="app-kicker-meta">Romania, {coverageStartYear}-{coverageEndYear}</span>
            <ThemeToggle />
          </div>

          <h1 className="app-title">Politicieni Corupti</h1>
          <p className="app-subtitle">Condamnati, cercetati, judecati si achitati</p>
          <div className="app-rule" />

          {!disclaimerDismissed && (
            <div className="app-disclaimer">
              <svg className="app-disclaimer-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" />
                <path d="M8 5v3.5M8 10.5v.5" strokeLinecap="round" />
              </svg>
              <p>
                <strong>Nu toti politicienii inclusi sunt condamnati.</strong>{' '}
                Titlul are caracter descriptiv. Fiecare persoana are un status juridic explicit
                (condamnat, trimis in judecata, cercetat, achitat). Prezumtia de nevinovatie se
                aplica tuturor persoanelor fara condamnare definitiva.{' '}
                <Link to="/glosar" className="app-intro-link">Ce inseamna fiecare status {'->'}</Link>
              </p>
              <button
                className="app-disclaimer-close"
                onClick={dismissDisclaimer}
                aria-label="Inchide notificarea"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3l8 8M11 3l-8 8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          )}

          <div className="app-intro-row">
            <p className="app-intro">
              Baza de date independenta cu politicieni romani implicati in dosare penale -
              de la condamnari definitive la cercetari in curs.{' '}
              <Link to="/metodologie" className="app-intro-link" style={{ whiteSpace: 'nowrap' }}>
                Cum functioneaza {'->'}
              </Link>
            </p>
            <StatsBar stats={stats} />
          </div>

          <PrejudiciuBanner stats={stats} />

          <form className="home-search-form" onSubmit={handleHomeSearch}>
            <div className="home-search-wrap">
              <svg className="home-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="6.5" cy="6.5" r="4.5" />
                <path d="M10 10l3.5 3.5" strokeLinecap="round" />
              </svg>
              <input
                className="home-search-input"
                type="search"
                placeholder={`Cauta dintre cei ${allData.length} politicieni...`}
                value={homeQuery}
                onChange={(event) => setHomeQuery(event.target.value)}
                autoComplete="off"
                spellCheck={false}
              />
              <button type="submit" className="home-search-btn">
                Cauta
              </button>
            </div>
            <Link to="/lista" className="home-search-browse">
              sau rasfoieste lista completa {'->'}
            </Link>
          </form>
        </div>
      </header>

      <StatusLegend />

      <div className="app-section app-controls">
        <div className="app-inner">
          <Filters
            filters={filters}
            setFilters={setFilters}
            parties={parties}
            positionTypes={positionTypes}
            statuses={statuses}
            total={filteredData.length}
          />
        </div>
      </div>

      <main id="main-content" className="app-section app-main">
        <div className="app-inner">
          <div className="main-grid">
            <div className="main-grid-chart">
              <HemicycleChart data={filteredData} onSelect={setSelectedPolitician} />
            </div>

            <aside className="main-grid-sidebar">
              <PartyRanking data={filteredData} />
              <CountyRanking data={filteredData} />
            </aside>
          </div>
        </div>
      </main>

      <section className="app-section updates-preview-section">
        <div className="app-inner">
          <div className="updates-preview-header">
            <div>
              <span className="app-kicker">Ce s-a schimbat recent</span>
              <h2 className="updates-preview-title">Ultimele modificari din arhiva</h2>
            </div>
            <Link to="/actualizari" className="app-intro-link">
              Vezi toate modificarile {'->'}
            </Link>
          </div>
          <ChangeLogList items={recentChanges} from="/" fromLabel="Arhiva" />
        </div>
      </section>

      <footer className="app-section app-footer">
        <div className="app-inner">
          <div className="app-footer-rule" />

          <div className="app-footer-grid">
            <div className="app-footer-copy">
              <p>Fiecare persoana inclusa are cel putin o sursa oficiala, completata unde este util cu presa de referinta.</p>
              <p>Proiect non-profit, open-source. Lista nu este exhaustiva. Verifica intotdeauna sursele originale si data ultimei verificari.</p>
              <div className="app-footer-data">
                <span className="app-footer-data-label">Open data</span>
                <div className="app-footer-downloads">
                  <button onClick={downloadJSON} className="app-footer-download">
                    Descarca JSON
                  </button>
                  <button onClick={downloadCSV} className="app-footer-download">
                    Descarca CSV
                  </button>
                </div>
              </div>
            </div>

            <nav className="app-footer-nav">
              <Link to="/lista" className="app-footer-nav-link">Toti politicienii ({allData.length})</Link>
              <Link to="/actualizari" className="app-footer-nav-link">Modificarile recente</Link>
              <Link to="/glosar" className="app-footer-nav-link">Glosar juridic</Link>
              <Link to="/metodologie" className="app-footer-nav-link">Metodologie</Link>
              <Link to="/aviz-legal" className="app-footer-nav-link">Aviz legal</Link>
              <Link to="/contact" className="app-footer-nav-link">Contact & Corectii</Link>
              <Link to="/confidentialitate" className="app-footer-nav-link">Confidentialitate</Link>
            </nav>
          </div>

          <p className="app-footer-updated">Actualizat: {formattedLastUpdated}</p>
        </div>
      </footer>

      {selectedPolitician && (
        <DetailPanel politician={selectedPolitician} onClose={() => setSelectedPolitician(null)} />
      )}
    </div>
  );
}
