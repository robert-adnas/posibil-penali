import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useData } from '../hooks/useData';
import { nameToSlug } from '../utils/slug';
import { POSITION_LABELS, STATUS_LABELS, formatYears } from '../utils/constants';
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

  const { county, politicians } = useMemo(() => {
    const match = allData.find((p) => p.county && nameToSlug(p.county) === slug);
    if (!match) return { county: null, politicians: [] };
    const countyName = match.county;
    const list = allData
      .filter((p) => p.county === countyName)
      .sort((a, b) => {
        const rankA = STATUS_RANK[a.status] ?? 99;
        const rankB = STATUS_RANK[b.status] ?? 99;
        if (rankA !== rankB) return rankA - rankB;
        return a.name.localeCompare(b.name, 'ro');
      });
    return { county: countyName, politicians: list };
  }, [allData, slug]);

  const stats = useMemo(() => {
    const convicted = politicians.filter((p) => p.status === 'convicted');
    const totalYears = convicted.reduce((sum, p) => sum + (p.sentence_years || 0), 0);
    const partyCounts = {};
    politicians.forEach((p) => {
      partyCounts[p.party] = (partyCounts[p.party] || 0) + 1;
    });
    const topParties = Object.entries(partyCounts).sort((a, b) => b[1] - a[1]);
    return { convicted: convicted.length, totalYears, topParties };
  }, [politicians]);

  const title = county
    ? `Politicieni cu dosare penale din ${county} | Politicieni Corupți`
    : 'Județ negăsit | Politicieni Corupți';
  const description = county
    ? `${politicians.length} politicieni cu dosare penale din județul ${county}: ${stats.convicted} condamnați definitiv, ${formatYears(stats.totalYears)} de închisoare.`
    : 'Județul nu a fost găsit în baza de date.';

  const allCounties = useMemo(() => {
    const counts = {};
    allData.forEach((p) => {
      if (p.county && p.county !== county) {
        counts[p.county] = (counts[p.county] || 0) + 1;
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
            <span className="app-kicker-meta">Județ</span>
            <ThemeToggle />
          </div>

          <h1 className="app-title">Județul {county}</h1>
          <p className="app-subtitle">
            {politicians.length} politicieni cu dosare penale
          </p>
          <div className="app-rule" />
        </div>
      </header>

      <main className="app-section app-main">
        <div className="app-inner">
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
            {politicians.map((p) => (
              <li key={p.name} className="lista-item" data-status={p.status}>
                <Link
                  to={`/politician/${nameToSlug(p.name)}`}
                  state={{ from: `/judet/${slug}`, fromLabel: `Județul ${county}` }}
                  className="lista-item-link"
                >
                  <span className="lista-item-dot" />
                  <span className="lista-item-name">{p.name}</span>
                  <span className="lista-item-party">{p.party}</span>
                  <span className="lista-item-position">
                    {POSITION_LABELS[p.position_type] || p.position_type}
                  </span>
                  <span className="lista-item-status">
                    {STATUS_LABELS[p.status] || p.status}
                    {p.sentence_years > 0 && (
                      <span className="lista-item-sentence">{formatYears(p.sentence_years)}</span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {allCounties.length > 0 && (
            <div className="partid-other-parties">
              <h2 className="partid-other-title">Alte județe</h2>
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
