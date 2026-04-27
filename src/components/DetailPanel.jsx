import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getPartyToken } from '../utils/partyColors';
import { POSITION_LABELS, STATUS_LABELS } from '../utils/constants';
import { nameToSlug } from '../utils/slug';

const SOURCE_KIND_LABELS = {
  official: 'Oficial',
  profile: 'Profil',
  press: 'Presă',
};

export function DetailPanel({ politician, onClose }) {
  const panelRef = useRef(null);
  const sources = Array.isArray(politician.sources) ? politician.sources : [];
  const formattedVerifiedAt = politician.verified_at
    ? new Intl.DateTimeFormat('ro-RO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(politician.verified_at))
    : null;

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    // Focus trap: keep Tab cycling inside the panel
    const panel = panelRef.current;
    if (panel) {
      const previouslyFocused = document.activeElement;
      const closeBtn = panel.querySelector('.detail-panel-close');
      if (closeBtn) closeBtn.focus();

      const trapFocus = (e) => {
        if (e.key !== 'Tab') return;
        const focusable = panel.querySelectorAll(
          'a[href], button, [tabindex]:not([tabindex="-1"]), input, textarea, select'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      };
      document.addEventListener('keydown', trapFocus);

      return () => {
        document.removeEventListener('keydown', handleKey);
        document.removeEventListener('keydown', trapFocus);
        document.body.style.overflow = '';
        if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
          previouslyFocused.focus();
        }
      };
    }

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="detail-panel-shell" role="dialog" aria-modal="true" aria-label={`Detalii despre ${politician.name}`}>
      <div className="detail-panel-backdrop backdrop-fade" onClick={onClose} aria-hidden="true" />

      <div
        ref={panelRef}
        className="detail-panel panel-slide"
        data-party-token={getPartyToken(politician.party)}
        data-status={politician.status}
      >
        <div className="detail-panel-topbar">
          <button onClick={onClose} className="detail-panel-close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 3L5 7l4 4" />
            </svg>
            Înapoi
          </button>

          <Link
            to={`/politician/${nameToSlug(politician.name)}`}
            className="detail-panel-toplabel"
            style={{ textDecoration: 'none' }}
          >
            Pagina completă →
          </Link>
        </div>

        <div className="detail-panel-content">
          <div className="detail-panel-accent" />

          <h2 className="detail-panel-name">{politician.name}</h2>

          <div className="detail-panel-meta">
            <span className="detail-panel-party">
              <span className="detail-panel-party-dot" />
              {politician.party}
            </span>

            <span className="detail-panel-separator">·</span>

            <span className="detail-panel-type">
              {POSITION_LABELS[politician.position_type] || politician.position_type}
            </span>
          </div>

          <div className="detail-panel-divider" />

          <Section label="Status juridic">
            <span className="detail-panel-status">
              <span className="detail-panel-status-dot" />
              {STATUS_LABELS[politician.status] || politician.status}
            </span>
          </Section>

          {formattedVerifiedAt && (
            <Section label="Ultima verificare">
              <p className="detail-panel-copy detail-panel-copy--muted">{formattedVerifiedAt}</p>
            </Section>
          )}

          <Section label="Faptă">
            <p className="detail-panel-copy detail-panel-copy--crime">{politician.crime}</p>
          </Section>

          {(politician.sentence || politician.conviction_year) && (
            <div className="detail-panel-keyfacts">
              {politician.sentence && (
                <div>
                  <SectionLabel>Pedeapsă</SectionLabel>
                  <p className="detail-panel-keyfact-value detail-panel-keyfact-value--accent">{politician.sentence}</p>
                </div>
              )}

              {politician.conviction_year && (
                <div>
                  <SectionLabel>{politician.status === 'convicted' ? 'Anul condamnării' : 'An reper'}</SectionLabel>
                  <p className="detail-panel-keyfact-value detail-panel-keyfact-value--tabular">{politician.conviction_year}</p>
                </div>
              )}
            </div>
          )}

          {politician.position && (
            <Section label="Funcția deținută">
              <p className="detail-panel-copy detail-panel-copy--muted">{politician.position}</p>
            </Section>
          )}

          {politician.details && (
            <Section label="Detalii">
              <p className="detail-panel-copy detail-panel-copy--details">{politician.details}</p>
            </Section>
          )}

          {sources.length > 0 && (
            <Section label={sources.length === 1 ? 'Sursă' : 'Surse'}>
              <div className="detail-panel-source-list">
                {sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-panel-source-link"
                  >
                    <span className="detail-panel-source-label">{source.label}</span>
                    <span className="detail-panel-source-kind">{SOURCE_KIND_LABELS[source.kind] || 'Extern'}</span>
                    <svg className="detail-panel-link-icon" width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 1h7v7M11 1L5 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </Section>
          )}

          <div className="detail-panel-footer-divider" />

          <p className="detail-panel-footer-note">
            Informațiile provin din surse publice și sunt prezentate rezumativ. Verifică întotdeauna sursele originale și data ultimei verificări.
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return <div className="detail-panel-section-label">{children}</div>;
}

function Section({ label, children }) {
  return (
    <div className="detail-panel-section">
      <SectionLabel>{label}</SectionLabel>
      {children}
    </div>
  );
}
