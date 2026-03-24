import { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useData } from '../hooks/useData';
import { nameToSlug } from '../utils/slug';
import { POSITION_LABELS, STATUS_LABELS } from '../utils/constants';

const BASE_URL = 'https://politicieni-corupti.ro';

const STATUS_FILTERS = [
  { key: null, label: 'Toți' },
  { key: 'convicted', label: 'Condamnați definitiv' },
  { key: 'first_instance', label: 'Primă instanță' },
  { key: 'indicted', label: 'Trimiși în judecată' },
  { key: 'investigated', label: 'Cercetați' },
  { key: 'prescribed', label: 'Prescriși' },
  { key: 'acquitted', label: 'Achitați' },
];

function highlight(text, query) {
  if (!query || !text) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="lista-highlight">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export function ListaPage() {
  const { allData } = useData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQueryState] = useState(() => searchParams.get('q') || '');
  const [activeStatus, setActiveStatus] = useState(null);
  const searchRef = useRef(null);

  // Keep URL in sync with the search query
  function setQuery(value) {
    setQueryState(value);
    setSearchParams(value ? { q: value } : {}, { replace: true });
  }

  const queryFiltered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allData;
    return allData.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.party.toLowerCase().includes(q) ||
      (p.position || '').toLowerCase().includes(q)
    );
  }, [allData, query]);

  const countByStatus = useMemo(() => {
    const counts = {};
    queryFiltered.forEach((p) => {
      counts[p.status] = (counts[p.status] || 0) + 1;
    });
    return counts;
  }, [queryFiltered]);

  const results = useMemo(() => {
    if (!activeStatus) return queryFiltered;
    return queryFiltered.filter((p) => p.status === activeStatus);
  }, [queryFiltered, activeStatus]);

  // Statuses that have at least 1 result given the current query
  const visibleStatuses = useMemo(
    () => new Set(Object.keys(countByStatus)),
    [countByStatus]
  );

  // If the active tab becomes empty due to a query change, clear it
  useEffect(() => {
    if (activeStatus && !visibleStatuses.has(activeStatus)) {
      setActiveStatus(null);
    }
  }, [activeStatus, visibleStatuses]);

  // Press "/" anywhere on the page to focus the search input
  useEffect(() => {
    function handleKey(e) {
      if (e.key !== '/') return;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
      e.preventDefault();
      searchRef.current?.focus();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  useSEO({
    title: 'Lista politicienilor — Arhivă completă | Politicieni Corupți',
    description: `Toți cei ${allData.length} politicieni din arhivă: condamnați, trimiși în judecată sau cercetați penal. Caută după nume sau partid.`,
    url: `${BASE_URL}/lista`,
  });

  const q = query.trim();

  return (
    <div className="app-shell">
      <header className="app-section app-header">
        <div className="app-inner">
          <div className="app-kicker-row">
            <Link to="/" className="app-kicker" style={{ textDecoration: 'none' }}>
              ← Politicieni Corupți
            </Link>
            <span className="app-kicker-separator">—</span>
            <span className="app-kicker-meta">Arhivă completă</span>
          </div>
          <h1 className="app-title">Lista politicienilor</h1>
          <div className="app-rule" />
        </div>
      </header>

      <div className="app-section lista-controls-section">
        <div className="app-inner">
          {/* Search */}
          <div className="lista-search-wrap">
            <svg className="lista-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="6.5" cy="6.5" r="4.5" />
              <path d="M10 10l3.5 3.5" strokeLinecap="round" />
            </svg>
            <input
              ref={searchRef}
              className="lista-search"
              type="search"
              placeholder="Caută după nume, partid sau funcție…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
              spellCheck={false}
            />
            {query && (
              <button className="lista-search-clear" onClick={() => setQuery('')} aria-label="Șterge căutarea">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 2l8 8M10 2l-8 8" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {/* Status tabs — only show tabs with at least 1 result */}
          <div className="lista-tabs">
            {STATUS_FILTERS.filter((f) => !f.key || visibleStatuses.has(f.key)).map((f) => (
              <button
                key={String(f.key)}
                className={`lista-tab${activeStatus === f.key ? ' lista-tab--active' : ''}`}
                data-status={f.key || undefined}
                onClick={() => setActiveStatus(f.key)}
              >
                {f.key && <span className="lista-tab-dot" />}
                {f.label}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="lista-count">
            {results.length === allData.length
              ? `${allData.length} politicieni`
              : results.length === 0
              ? 'Niciun rezultat'
              : `${results.length} din ${allData.length}`}
            {q && results.length > 0 && (
              <span className="lista-count-query"> pentru „{q}"</span>
            )}
          </p>
        </div>
      </div>

      <main className="app-section lista-main">
        <div className="app-inner">
          {results.length === 0 ? (
            <div className="lista-empty">
              <p className="lista-empty-title">Niciun politician găsit</p>
              <p className="lista-empty-sub">
                Încearcă un alt termen sau{' '}
                <button className="lista-empty-reset" onClick={() => { setQuery(''); setActiveStatus(null); }}>
                  resetează filtrele
                </button>
              </p>
            </div>
          ) : (
            <ul className="lista-list">
              {results.map((p) => (
                <li key={p.name} className="lista-item" data-status={p.status}>
                  <Link to={`/politician/${nameToSlug(p.name)}`} className="lista-item-link">
                    <span className="lista-item-dot" />
                    <span className="lista-item-name">{highlight(p.name, q)}</span>
                    <span className="lista-item-party">{highlight(p.party, q)}</span>
                    <span className="lista-item-position">
                      {POSITION_LABELS[p.position_type] || p.position_type}
                    </span>
                    <span className="lista-item-status">
                      {STATUS_LABELS[p.status] || p.status}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <footer className="app-section app-footer">
        <div className="app-inner">
          <div className="app-footer-rule" />
          <nav className="app-footer-nav">
            <Link to="/" className="app-footer-nav-link">Arhivă</Link>
            <Link to="/glosar" className="app-footer-nav-link">Glosar juridic</Link>
            <Link to="/metodologie" className="app-footer-nav-link">Metodologie</Link>
            <Link to="/contact" className="app-footer-nav-link">Contact & Corecții</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
