import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const NAV_LINKS = [
  { to: '/actualizari', label: 'Modificari recente' },
  { to: '/metodologie', label: 'Metodologie' },
  { to: '/aviz-legal', label: 'Aviz legal' },
  { to: '/contact', label: 'Contact & Corecții' },
  { to: '/confidentialitate', label: 'Confidențialitate' },
];

export function PageLayout({ children, title, kicker }) {
  return (
    <div className="app-shell">
      <header className="app-section page-header">
        <div className="app-inner">
          <div className="page-topbar">
            <Link to="/" className="page-back-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 3L5 7l4 4" />
              </svg>
              Înapoi
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Link to="/" className="page-site-name">Politicieni Corupți</Link>
              <ThemeToggle />
            </div>
          </div>

          <div className="app-kicker-row" style={{ marginTop: '1.5rem' }}>
            <span className="app-kicker">{kicker || 'Arhivă independentă'}</span>
          </div>

          <h1 className="page-title">{title}</h1>
          <div className="app-rule" />
        </div>
      </header>

      <main className="app-section page-main">
        <div className="app-inner page-content">
          {children}
        </div>
      </main>

      <footer className="app-section app-footer">
        <div className="app-inner">
          <div className="app-footer-rule" />

          <div className="app-footer-grid">
            <div className="app-footer-copy">
              <p>Fiecare persoană inclusă are cel puțin o sursă oficială. Lista nu este exhaustivă. Verificați întotdeauna sursele originale.</p>
            </div>

            <nav className="app-footer-nav">
              {NAV_LINKS.map((link) => (
                <Link key={link.to} to={link.to} className="app-footer-nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
