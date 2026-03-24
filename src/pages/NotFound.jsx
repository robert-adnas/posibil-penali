import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export function NotFound() {
  useSEO({
    title: 'Pagina nu a fost găsită | Politicieni Corupți',
    description: 'Pagina pe care o cauți nu există.',
    noindex: true,
  });

  return (
    <div className="app-shell">
      <div className="app-section" style={{ flex: 1 }}>
        <div className="app-inner" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
          <p className="app-kicker" style={{ marginBottom: '1rem' }}>404</p>
          <h1 className="app-title" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '1rem' }}>
            Pagina nu există
          </h1>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '420px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Adresa pe care ai accesat-o nu corespunde niciunei pagini din arhivă.
            Poate că linkul e greșit sau pagina a fost mutată.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/" className="app-intro-link">← Pagina principală</Link>
            <Link to="/lista" className="app-intro-link">Toți politicienii →</Link>
          </div>
        </div>
      </div>

      <footer className="app-section app-footer">
        <div className="app-inner">
          <div className="app-footer-rule" />
          <nav className="app-footer-nav">
            <Link to="/" className="app-footer-nav-link">Arhivă</Link>
            <Link to="/lista" className="app-footer-nav-link">Lista politicienilor</Link>
            <Link to="/glosar" className="app-footer-nav-link">Glosar juridic</Link>
            <Link to="/contact" className="app-footer-nav-link">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
