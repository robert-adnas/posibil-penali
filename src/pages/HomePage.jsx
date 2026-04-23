import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { HemicycleChart } from '../components/HemicycleChart';
import { RomaniaCountyMap } from '../components/RomaniaCountyMap';
import { Filters } from '../components/Filters';
import { StatsDateline } from '../components/StatsBar';
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
  const [primaryView, setPrimaryView] = useState(
    () => localStorage.getItem('home-primary-view') || 'hemicycle'
  );
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

  useEffect(() => {
    localStorage.setItem('home-primary-view', primaryView);
  }, [primaryView]);

  function handleHomeSearch(event) {
    event.preventDefault();
    const query = homeQuery.trim();
    if (query) track('Homepage Search', { query });
    navigate(query ? `/lista?q=${encodeURIComponent(query)}` : '/lista');
  }

  function handlePrimaryViewChange(nextView) {
    if (nextView === primaryView) return;
    setPrimaryView(nextView);
    track('Homepage Primary View Changed', { view: nextView });
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
        Sari la conținut
      </a>

      <header className="app-section app-header">
        <div className="app-inner">
          <div className="app-kicker-row">
            <span className="app-kicker">Arhivă independentă</span>
            <span className="app-kicker-separator">—</span>
            <span className="app-kicker-meta">România, {coverageStartYear}–{coverageEndYear}</span>
            <ThemeToggle />
          </div>

          <h1 className="app-title animate-fade-up">Politicieni Corupți</h1>
          <p className="app-subtitle animate-fade-up" style={{ animationDelay: '50ms' }}>Condamnați, cercetați, judecați și achitați</p>
          <div className="app-rule animate-fade-up" style={{ animationDelay: '80ms' }} />

          <div className="animate-fade-up" style={{ animationDelay: '130ms' }}>
            <StatsDateline stats={stats} />
          </div>

          {!disclaimerDismissed && (
            <div className="app-disclaimer animate-fade-up" style={{ animationDelay: '180ms' }} role="note">
              <svg className="app-disclaimer-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" />
                <path d="M8 5v3.5M8 10.5v.5" strokeLinecap="round" />
              </svg>
              <span>
                <strong>Nu toți sunt condamnați definitiv</strong>{' — '}
                prezumția de nevinovăție se aplică.{' '}
                <Link to="/glosar" className="app-intro-link">Glosar →</Link>
              </span>
              <button
                className="app-disclaimer-close"
                onClick={dismissDisclaimer}
                aria-label="Închide notificarea"
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3l8 8M11 3l-8 8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          )}

          <form className="home-search-form animate-fade-up" style={{ animationDelay: '220ms' }} onSubmit={handleHomeSearch}>
            <div className="home-search-wrap">
              <svg className="home-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="6.5" cy="6.5" r="4.5" />
                <path d="M10 10l3.5 3.5" strokeLinecap="round" />
              </svg>
              <input
                className="home-search-input"
                type="search"
                placeholder={`Caută dintre cei ${allData.length} politicieni...`}
                value={homeQuery}
                onChange={(event) => setHomeQuery(event.target.value)}
                autoComplete="off"
                spellCheck={false}
              />
              <button type="submit" className="home-search-btn">
                Caută
              </button>
            </div>
            <Link to="/lista" className="home-search-browse">
              sau răsfoiește lista completă →
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
              <section className="visualization-panel" aria-label="Vizualizare principala a arhivei">
                <div className="visualization-panel-header">
                  <div>
                    <span className="app-kicker">Vizualizare principala</span>
                    <h2 className="visualization-panel-title">
                      {primaryView === 'map' ? 'Harta cazurilor pe judete' : 'Hemiciclul cazurilor'}
                    </h2>
                  </div>

                  <div className="visualization-toggle" aria-label="Tip de vizualizare">
                    <button
                      type="button"
                      aria-pressed={primaryView === 'hemicycle'}
                      className={`visualization-toggle-btn${
                        primaryView === 'hemicycle' ? ' visualization-toggle-btn--active' : ''
                      }`}
                      onClick={() => handlePrimaryViewChange('hemicycle')}
                    >
                      Hemiciclu
                    </button>
                    <button
                      type="button"
                      aria-pressed={primaryView === 'map'}
                      className={`visualization-toggle-btn${
                        primaryView === 'map' ? ' visualization-toggle-btn--active' : ''
                      }`}
                      onClick={() => handlePrimaryViewChange('map')}
                    >
                      Harta
                    </button>
                  </div>
                </div>

                {primaryView === 'map' ? (
                  <RomaniaCountyMap data={filteredData} allData={allData} />
                ) : (
                  <HemicycleChart data={filteredData} onSelect={setSelectedPolitician} />
                )}
              </section>
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
              <h2 className="updates-preview-title">Ultimele modificări din arhivă</h2>
            </div>
            <Link to="/actualizari" className="app-intro-link">
              Vezi toate modificările →
            </Link>
          </div>
          <ChangeLogList items={recentChanges} from="/" fromLabel="Arhivă" />
        </div>
      </section>

      <footer className="app-section app-footer">
        <div className="app-inner">
          <div className="app-footer-rule" />

          <div className="app-footer-grid">
            <div className="app-footer-copy">
              <p>Fiecare persoană inclusă are cel puțin o sursă oficială, completată unde este util cu presa de referință.</p>
              <p>Proiect non-profit, open-source. Lista nu este exhaustivă. Verifică întotdeauna sursele originale și data ultimei verificări.</p>
              <div className="app-footer-data">
                <span className="app-footer-data-label">Open data</span>
                <div className="app-footer-downloads">
                  <button onClick={downloadJSON} className="app-footer-download">
                    Descarcă JSON
                  </button>
                  <button onClick={downloadCSV} className="app-footer-download">
                    Descarcă CSV
                  </button>
                </div>
              </div>
            </div>

            <nav className="app-footer-nav">
              <Link to="/lista" className="app-footer-nav-link">Toți politicienii ({allData.length})</Link>
              <Link to="/actualizari" className="app-footer-nav-link">Modificările recente</Link>
              <Link to="/glosar" className="app-footer-nav-link">Glosar juridic</Link>
              <Link to="/metodologie" className="app-footer-nav-link">Metodologie</Link>
              <Link to="/aviz-legal" className="app-footer-nav-link">Aviz legal</Link>
              <Link to="/contact" className="app-footer-nav-link">Contact & Corecții</Link>
              <Link to="/confidentialitate" className="app-footer-nav-link">Confidențialitate</Link>
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
