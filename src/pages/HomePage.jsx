import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../hooks/useData';
import { HemicycleChart } from '../components/HemicycleChart';
import { Filters } from '../components/Filters';
import { StatsBar } from '../components/StatsBar';
import { DetailPanel } from '../components/DetailPanel';
import { PartyRanking } from '../components/PartyRanking';
import { StatusLegend } from '../components/StatusLegend';

export function HomePage() {
  const { metadata, filteredData, allData, filters, setFilters, parties, positionTypes, statuses, stats } = useData();
  const [selectedPolitician, setSelectedPolitician] = useState(null);

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
      <header className="app-section app-header">
        <div className="app-inner">
          <div className="app-kicker-row">
            <span className="app-kicker">Arhivă independentă</span>
            <span className="app-kicker-separator">—</span>
            <span className="app-kicker-meta">România, {coverageStartYear}–{coverageEndYear}</span>
          </div>

          <h1 className="app-title">Politicieni Corupți</h1>
          <p className="app-subtitle">Condamnați, judecați și cercetați penal</p>
          <div className="app-rule" />

          <div className="app-intro-row">
            <p className="app-intro">
              Bază de date independentă cu politicieni români implicați în dosare penale —
              de la condamnări definitive la cercetări în curs. Statusul juridic al fiecărei
              persoane este indicat explicit. Prezumția de nevinovăție se aplică tuturor
              persoanelor fără condamnare definitivă.{' '}
              <Link to="/metodologie" className="app-intro-link">Cum funcționează →</Link>
            </p>
            <StatsBar stats={stats} />
          </div>
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

      <main className="app-section app-main">
        <div className="app-inner">
          <div className="main-grid">
            <div className="main-grid-chart">
              <HemicycleChart data={filteredData} onSelect={setSelectedPolitician} />
            </div>

            <aside className="main-grid-sidebar">
              <PartyRanking allData={allData} filteredData={filteredData} />
            </aside>
          </div>
        </div>
      </main>

      <footer className="app-section app-footer">
        <div className="app-inner">
          <div className="app-footer-rule" />

          <div className="app-footer-grid">
            <div className="app-footer-copy">
              <p>Surse per fișă: oficiale când sunt disponibile, completate cu Wikipedia, Digi24, G4Media, HotNews și AGERPRES.</p>
              <p>Proiect non-profit, open-source. Lista nu este exhaustivă. Verificați întotdeauna sursele originale.</p>
            </div>

            <nav className="app-footer-nav">
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
