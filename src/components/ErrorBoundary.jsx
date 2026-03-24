import { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="app-shell">
          <div className="app-section" style={{ flex: 1 }}>
            <div
              className="app-inner"
              style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
            >
              <p className="app-kicker" style={{ marginBottom: '1rem' }}>Eroare</p>
              <h1
                className="app-title"
                style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '1rem' }}
              >
                Ceva nu a mers bine
              </h1>
              <p
                style={{
                  color: 'var(--color-ink-muted)',
                  maxWidth: '420px',
                  lineHeight: 1.6,
                  marginBottom: '2.5rem',
                }}
              >
                A apărut o eroare neașteptată. Încearcă să reîncarci pagina.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="app-intro-link"
                style={{ fontSize: '0.9rem' }}
              >
                ↺ Reîncarcă pagina
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
