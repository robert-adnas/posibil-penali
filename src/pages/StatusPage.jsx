import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useData } from '../hooks/useData';
import { nameToSlug } from '../utils/slug';
import { POSITION_LABELS, STATUS_LABELS, formatYears } from '../utils/constants';
import { ThemeToggle } from '../components/ThemeToggle';

const BASE_URL = 'https://politicieni-corupti.ro';

const STATUS_DESCRIPTIONS = {
  convicted: 'Politicieni cu condamnare definitivă — sentința a trecut prin toate instanțele de apel și este executorie.',
  first_instance: 'Politicieni condamnați în primă instanță — sentința nu este definitivă și poate fi contestată prin apel.',
  indicted: 'Politicieni trimiși în judecată de procuratură — procesul penal este în curs.',
  investigated: 'Politicieni cercetați penal — ancheta este în curs, fără trimitere în judecată.',
  prescribed: 'Cazuri în care instanța a constatat prescripția faptelor — procesul s-a închis fără o sentință pe fond.',
  closed: 'Cazuri clasate sau închise fără trimitere în judecată.',
  acquitted: 'Politicieni achitați — instanța a decis că fapta nu există, nu a fost comisă de inculpat, sau nu este infracțiune.',
};

export function StatusPage() {
  const { statusKey } = useParams();
  const { allData } = useData();

  const statusLabel = STATUS_LABELS[statusKey];

  const politicians = useMemo(() => {
    if (!statusLabel) return [];
    return allData
      .filter((p) => p.status === statusKey)
      .sort((a, b) => a.name.localeCompare(b.name, 'ro'));
  }, [allData, statusKey, statusLabel]);

  const stats = useMemo(() => {
    const totalYears = politicians.reduce((sum, p) => sum + (p.sentence_years || 0), 0);
    const partyCounts = {};
    politicians.forEach((p) => {
      partyCounts[p.party] = (partyCounts[p.party] || 0) + 1;
    });
    const topParties = Object.entries(partyCounts).sort((a, b) => b[1] - a[1]);
    return { totalYears, topParties };
  }, [politicians]);

  const title = statusLabel
    ? `${statusLabel} — Politicieni | Politicieni Corupți`
    : 'Status negăsit | Politicieni Corupți';
  const description = statusLabel
    ? `${politicians.length} politicieni români cu status „${statusLabel.toLowerCase()}". ${STATUS_DESCRIPTIONS[statusKey] || ''}`
    : 'Statusul nu a fost găsit în baza de date.';

  useSEO({ title, description, url: `${BASE_URL}/status/${statusKey}` });

  if (!statusLabel) {
    return (
      <div className="app-shell">
        <div className="app-section">
          <div className="app-inner" style={{ padding: '4rem 0', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>
              Status negăsit
            </h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Nu am găsit acest status juridic în baza de date.
            </p>
            <Link to="/" className="app-intro-link">← Înapoi la arhivă</Link>
          </div>
        </div>
      </div>
    );
  }

  const otherStatuses = Object.entries(STATUS_LABELS).filter(([key]) => key !== statusKey);

  return (
    <div className="app-shell">
      <header className="app-section app-header">
        <div className="app-inner">
          <div className="app-kicker-row">
            <Link to="/" className="app-kicker" style={{ textDecoration: 'none' }}>
              ← Politicieni Corupți
            </Link>
            <span className="app-kicker-separator">—</span>
            <span className="app-kicker-meta">Status juridic</span>
            <ThemeToggle />
          </div>

          <h1 className="app-title">{statusLabel}</h1>
          <p className="app-subtitle">
            {politicians.length} politicieni
          </p>
          <div className="app-rule" />

          {STATUS_DESCRIPTIONS[statusKey] && (
            <p className="app-intro" style={{ marginTop: '1rem' }}>
              {STATUS_DESCRIPTIONS[statusKey]}
            </p>
          )}
        </div>
      </header>

      <main className="app-section app-main">
        <div className="app-inner">
          <div className="partid-stats">
            <div className="partid-stat">
              <span className="partid-stat-value">{politicians.length}</span>
              <span className="partid-stat-label">politicieni</span>
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
                  state={{ from: `/status/${statusKey}`, fromLabel: statusLabel }}
                  className="lista-item-link"
                >
                  <span className="lista-item-dot" />
                  <span className="lista-item-name">{p.name}</span>
                  <span className="lista-item-party">{p.party}</span>
                  <span className="lista-item-position">
                    {POSITION_LABELS[p.position_type] || p.position_type}
                  </span>
                  <span className="lista-item-status">
                    {p.sentence_years > 0 && (
                      <span className="lista-item-sentence">{formatYears(p.sentence_years)}</span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="partid-other-parties">
            <h2 className="partid-other-title">Alte statusuri juridice</h2>
            <div className="partid-other-list">
              {otherStatuses.map(([key, label]) => {
                const count = allData.filter((p) => p.status === key).length;
                if (count === 0) return null;
                return (
                  <Link key={key} to={`/status/${key}`} className="partid-other-link">
                    {label} ({count})
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <footer className="app-section app-footer">
        <div className="app-inner">
          <div className="app-footer-rule" />
          <nav className="app-footer-nav">
            <Link to="/" className="app-footer-nav-link">Arhivă</Link>
            <Link to="/lista" className="app-footer-nav-link">Lista completă</Link>
            <Link to="/glosar" className="app-footer-nav-link">Glosar juridic</Link>
            <Link to="/contact" className="app-footer-nav-link">Contact & Corecții</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
