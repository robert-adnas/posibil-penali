import { useMemo, useEffect, useRef, useCallback, useState } from 'react';
import { flushSync } from 'react-dom';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useData } from '../hooks/useData';
import { useAnalytics } from '../hooks/useAnalytics';
import { nameToSlug } from '../utils/slug';
import { POSITION_LABELS, STATUS_LABELS, formatYears } from '../utils/constants';
import { ThemeToggle } from '../components/ThemeToggle';
import { SavedViews } from '../components/SavedViews';

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

const STATUS_FILTERS = [
  { key: null, label: 'Toți' },
  { key: 'convicted', label: 'Condamnați definitiv' },
  { key: 'first_instance', label: 'Primă instanță' },
  { key: 'indicted', label: 'Trimiși în judecată' },
  { key: 'investigated', label: 'Cercetați' },
  { key: 'prescribed', label: 'Prescriși' },
  { key: 'closed', label: 'Clasați' },
  { key: 'acquitted', label: 'Achitați' },
];

const SORT_OPTIONS = [
  { key: 'name', label: 'Nume A–Z' },
  { key: 'position', label: 'Funcție' },
  { key: 'sentence', label: 'Pedeapsă' },
];

function normalizeParam(value) {
  return value ? value : null;
}

function stripDiacritics(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function highlight(text, query) {
  if (!query || !text) return text;
  const idx = stripDiacritics(text.toLowerCase()).indexOf(stripDiacritics(query.toLowerCase()));
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="lista-highlight">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

function buildSavedViewName(query, activeStatus, sortBy) {
  const parts = [];

  if (query) parts.push(`Căutare: ${query}`);
  if (activeStatus) {
    parts.push(STATUS_FILTERS.find((entry) => entry.key === activeStatus)?.label || activeStatus);
  }
  if (sortBy) {
    parts.push(SORT_OPTIONS.find((entry) => entry.key === sortBy)?.label || sortBy);
  }

  return parts.join(' · ') || 'Lista completă';
}

export function ListaPage() {
  const { allData } = useData();
  const { track } = useAnalytics();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [vtSlug, setVtSlug] = useState(null);
  const searchRef = useRef(null);
  const query = searchParams.get('q') || '';
  const rawActiveStatus = normalizeParam(searchParams.get('status'));
  const rawSortBy = normalizeParam(searchParams.get('sort'));
  const sortBy = SORT_OPTIONS.some((entry) => entry.key === rawSortBy) ? rawSortBy : null;

  const updateSearchParams = useCallback((updates) => {
    const next = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value) next.set(key, value);
      else next.delete(key);
    });

    next.sort();
    setSearchParams(next, { replace: true });
  }, [searchParams, setSearchParams]);

  const setQuery = useCallback((value) => {
    updateSearchParams({ q: value || null });
  }, [updateSearchParams]);

  const queryFiltered = useMemo(() => {
    const q = stripDiacritics(query.trim().toLowerCase());
    if (!q) return allData;
    return allData.filter((politician) =>
      stripDiacritics(politician.name.toLowerCase()).includes(q) ||
      stripDiacritics(politician.party.toLowerCase()).includes(q) ||
      stripDiacritics((politician.position || '').toLowerCase()).includes(q) ||
      stripDiacritics((politician.crime || '').toLowerCase()).includes(q)
    );
  }, [allData, query]);

  const countByStatus = useMemo(() => {
    const counts = {};
    queryFiltered.forEach((politician) => {
      counts[politician.status] = (counts[politician.status] || 0) + 1;
    });
    return counts;
  }, [queryFiltered]);

  const visibleStatuses = useMemo(
    () => new Set(Object.keys(countByStatus)),
    [countByStatus]
  );

  const activeStatus = rawActiveStatus && visibleStatuses.has(rawActiveStatus)
    ? rawActiveStatus
    : null;

  const results = useMemo(() => {
    const filtered = activeStatus
      ? queryFiltered.filter((politician) => politician.status === activeStatus)
      : queryFiltered;

    if (sortBy === 'name') {
      return [...filtered].sort((left, right) => left.name.localeCompare(right.name, 'ro'));
    }

    if (sortBy === 'position') {
      const positionRank = {
        prime_minister: 0,
        minister: 1,
        senator: 2,
        deputy: 3,
        county_council_president: 4,
        member_european_parliament: 5,
        mayor: 6,
        secretary_of_state: 7,
        local_official: 8,
        other: 9,
      };

      return [...filtered].sort((left, right) => {
        const rankLeft = positionRank[left.position_type] ?? 99;
        const rankRight = positionRank[right.position_type] ?? 99;
        if (rankLeft !== rankRight) return rankLeft - rankRight;
        return left.name.localeCompare(right.name, 'ro');
      });
    }

    if (sortBy === 'sentence') {
      return [...filtered].sort((left, right) => {
        const leftYears = left.sentence_years ?? 0;
        const rightYears = right.sentence_years ?? 0;
        if (leftYears > 0 && rightYears > 0) return rightYears - leftYears;
        if (leftYears > 0) return -1;
        if (rightYears > 0) return 1;
        return left.name.localeCompare(right.name, 'ro');
      });
    }

    return [...filtered].sort((left, right) => {
      const rankLeft = STATUS_RANK[left.status] ?? 99;
      const rankRight = STATUS_RANK[right.status] ?? 99;
      if (rankLeft !== rankRight) return rankLeft - rankRight;
      return left.name.localeCompare(right.name, 'ro');
    });
  }, [activeStatus, queryFiltered, sortBy]);

  useEffect(() => {
    const trimmedQuery = query.trim();
    if (trimmedQuery.length < 3) return undefined;

    const timer = setTimeout(() => track('Search', { query: trimmedQuery }), 1000);
    return () => clearTimeout(timer);
  }, [query, track]);

  useEffect(() => {
    function handleKey(event) {
      if (event.key !== '/') return;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)) return;
      event.preventDefault();
      searchRef.current?.focus();
    }

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const activeFilterLabel = STATUS_FILTERS.find((entry) => entry.key === activeStatus)?.label;
  const currentSearch = useMemo(() => {
    const next = new URLSearchParams(searchParams);
    next.sort();
    const value = next.toString();
    return value ? `?${value}` : '';
  }, [searchParams]);
  const savedViewName = useMemo(
    () => buildSavedViewName(query.trim(), activeStatus, sortBy),
    [query, activeStatus, sortBy]
  );

  useSEO({
    title: activeStatus
      ? `${activeFilterLabel} (${results.length}) — Lista politicienilor | Politicieni Corupți`
      : 'Lista politicienilor — Arhivă completă | Politicieni Corupți',
    description: `Toți cei ${allData.length} politicieni din arhivă: condamnați, trimiși în judecată sau cercetați penal. Caută după nume, partid sau faptă.`,
    url: `${BASE_URL}/lista`,
  });

  const trimmedQuery = query.trim();

  function handleNavigate(e, slug) {
    if (e.ctrlKey || e.metaKey || e.shiftKey) return;
    e.preventDefault();
    const to = `/politician/${slug}`;
    const state = { from: `/lista${currentSearch}`, fromLabel: 'Lista politicienilor' };
    if (!document.startViewTransition) {
      navigate(to, { state });
      return;
    }
    flushSync(() => setVtSlug(slug));
    document.startViewTransition(() => {
      flushSync(() => navigate(to, { state }));
    });
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
            <span className="app-kicker-meta">Arhivă completă</span>
            <ThemeToggle />
          </div>
          <h1 className="app-title">Lista politicienilor</h1>
          <div className="app-rule" />
        </div>
      </header>

      <div className="app-section lista-controls-section">
        <div className="app-inner">
          <div className="lista-search-wrap">
            <svg className="lista-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="6.5" cy="6.5" r="4.5" />
              <path d="M10 10l3.5 3.5" strokeLinecap="round" />
            </svg>
            <input
              ref={searchRef}
              className="lista-search"
              type="search"
              placeholder="Caută după nume, partid, funcție sau faptă…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoComplete="off"
              spellCheck={false}
            />
            {query ? (
              <button className="lista-search-clear" onClick={() => setQuery('')} aria-label="Șterge căutarea">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 2l8 8M10 2l-8 8" strokeLinecap="round" />
                </svg>
              </button>
            ) : (
              <kbd className="lista-search-kbd">/</kbd>
            )}
          </div>

          <div className="lista-tabs-wrap">
            <div className="lista-tabs">
              {STATUS_FILTERS.filter((entry) => !entry.key || visibleStatuses.has(entry.key)).map((entry) => (
                <button
                  key={String(entry.key)}
                  className={`lista-tab${activeStatus === entry.key ? ' lista-tab--active' : ''}`}
                  data-status={entry.key || undefined}
                  onClick={() => updateSearchParams({ status: entry.key })}
                >
                  {entry.key && <span className="lista-tab-dot" />}
                  {entry.label}
                  {entry.key && countByStatus[entry.key] && (
                    <span className="lista-tab-count">{countByStatus[entry.key]}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="lista-toolbar">
            <p className="lista-count">
              {results.length === allData.length
                ? `${allData.length} politicieni`
                : results.length === 0
                ? 'Niciun rezultat'
                : `${results.length} din ${allData.length}`}
              {trimmedQuery && results.length > 0 && (
                <span className="lista-count-query"> pentru „{trimmedQuery}”</span>
              )}
            </p>
            {results.length > 1 && (
              <div className="lista-sort">
                <span className="lista-sort-label">Sortează</span>
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option.key}
                    className={`lista-sort-btn${sortBy === option.key ? ' lista-sort-btn--active' : ''}`}
                    onClick={() => updateSearchParams({ sort: sortBy === option.key ? null : option.key })}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <SavedViews
            storageKey="saved-list-views"
            currentPathname="/lista"
            currentSearch={currentSearch}
            defaultName={savedViewName}
            saveLabel="Salvează căutarea"
            heading="Căutări salvate"
            emptyHint="Copiază sau salvează combinațiile de căutare pe care le folosești des."
          />
        </div>
      </div>

      <main className="app-section lista-main">
        <div className="app-inner">
          {results.length === 0 ? (
            <div className="lista-empty">
              <p className="lista-empty-title">Niciun politician găsit</p>
              <p className="lista-empty-sub">
                Încearcă un alt termen sau{' '}
                <button
                  className="lista-empty-reset"
                  onClick={() => setSearchParams({}, { replace: true })}
                >
                  resetează filtrele
                </button>
              </p>
            </div>
          ) : (
            <ul className="lista-list">
              {results.map((politician) => {
                const slug = nameToSlug(politician.name);
                return (
                <li
                  key={politician.name}
                  className="lista-item"
                  data-status={politician.status}
                >
                  <Link
                    to={`/politician/${slug}`}
                    state={{ from: `/lista${currentSearch}`, fromLabel: 'Lista politicienilor' }}
                    className="lista-item-link"
                    onClick={(e) => handleNavigate(e, slug)}
                  >
                    <span className="lista-item-dot" />
                    <span
                      className="lista-item-name"
                      style={vtSlug === slug ? { viewTransitionName: 'pol-name' } : undefined}
                    >{highlight(politician.name, trimmedQuery)}</span>
                    <span className="lista-item-party">{highlight(politician.party, trimmedQuery)}</span>
                    <span className="lista-item-position">
                      {POSITION_LABELS[politician.position_type] || politician.position_type}
                    </span>
                    <span className="lista-item-status">
                      {STATUS_LABELS[politician.status] || politician.status}
                      {politician.sentence_years > 0 && (
                        <span className="lista-item-sentence">{formatYears(politician.sentence_years)}</span>
                      )}
                    </span>
                  </Link>
                </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>

      <footer className="app-section app-footer">
        <div className="app-inner">
          <div className="app-footer-rule" />
          <nav className="app-footer-nav">
            <Link to="/" className="app-footer-nav-link">Arhivă</Link>
            <Link to="/actualizari" className="app-footer-nav-link">Modificări recente</Link>
            <Link to="/glosar" className="app-footer-nav-link">Glosar juridic</Link>
            <Link to="/metodologie" className="app-footer-nav-link">Metodologie</Link>
            <Link to="/contact" className="app-footer-nav-link">Contact & Corecții</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
