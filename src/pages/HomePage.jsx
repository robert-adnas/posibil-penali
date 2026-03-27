import { useState, useCallback } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../hooks/useData';
import { HemicycleChart } from '../components/HemicycleChart';
import { Filters } from '../components/Filters';
import { StatsBar, PrejudiciuBanner } from '../components/StatsBar';
import { DetailPanel } from '../components/DetailPanel';
import { PartyRanking } from '../components/PartyRanking';
import { StatusLegend } from '../components/StatusLegend';
import { downloadJSON, downloadCSV } from '../utils/download';
import { useAnalytics } from '../hooks/useAnalytics';
import { ThemeToggle } from '../components/ThemeToggle';

export function HomePage() {
  const { metadata, filteredData, allData, filters, setFilters, parties, positionTypes, statuses, stats } = useData();
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

  function handleHomeSearch(e) {
    e.preventDefault();
    const q = homeQuery.trim();
    if (q) track('Homepage Search', { query: q });
    navigate(q ? `/lista?q=${encodeURIComponent(q)}` : '/lista');
  }

  const convictionYears = allData
    .map((politician) => politician.conviction_year)
    .filter((year) => Number.isFinite(year));
  const coverageStartYear = convictionYears.length ? Math.min(...convictionYears) : new Date().getFullYear();
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

          <h1 className="app-title">Politicieni Corupți</h1>
          <p className="app-subtitle">Condamnați, cercetați, judecați și achitați</p>
          <div className="app-rule" />

          {!disclaimerDismissed && (
            <div className="app-disclaimer">
              <svg className="app-disclaimer-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" />
                <path d="M8 5v3.5M8 10.5v.5" strokeLinecap="round" />
              </svg>
              <p>
                <strong>Nu toți politicienii incluși sunt condamnați.</strong>{' '}
                Titlul are caracter descriptiv. Fiecare persoană are un status juridic explicit
                (condamnat, trimis în judecată, cercetat, achitat). Prezumția de nevinovăție se
                aplică tuturor persoanelor fără condamnare definitivă.{' '}
                <Link to="/glosar" className="app-intro-link">Ce înseamnă fiecare status →</Link>
              </p>
              <button
                className="app-disclaimer-close"
                onClick={dismissDisclaimer}
                aria-label="Închide notificarea"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3l8 8M11 3l-8 8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          )}

          <div className="app-intro-row">
            <p className="app-intro">
              Bază de date independentă cu politicieni români implicați în dosare penale —
              de la condamnări definitive la cercetări în curs.{' '}
              <Link to="/metodologie" className="app-intro-link" style={{ whiteSpace: 'nowrap' }}>Cum funcționează →</Link>
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
                placeholder={`Caută dintre cei ${allData.length} politicieni…`}
                value={homeQuery}
                onChange={(e) => setHomeQuery(e.target.value)}
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
              <HemicycleChart data={filteredData} onSelect={setSelectedPolitician} />
            </div>

            <aside className="main-grid-sidebar">
              <PartyRanking data={filteredData} />
            </aside>
          </div>
        </div>
      </main>

      <footer className="app-section app-footer">
        <div className="app-inner">
          <div className="app-footer-rule" />

          <div className="app-footer-grid">
            <div className="app-footer-copy">
              <p>Fiecare persoană inclusă are cel puțin o sursă oficială, completată unde este util cu presă de referință.</p>
              <p>Proiect non-profit, open-source. Lista nu este exhaustivă. Verificați întotdeauna sursele originale și data ultimei verificări.</p>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                <button onClick={downloadJSON} className="app-footer-nav-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                  ↓ Date JSON
                </button>
                <button onClick={downloadCSV} className="app-footer-nav-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                  ↓ Date CSV
                </button>
              </div>
            </div>

            <nav className="app-footer-nav">
              <Link to="/lista" className="app-footer-nav-link">Toți politicienii ({allData.length})</Link>
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
