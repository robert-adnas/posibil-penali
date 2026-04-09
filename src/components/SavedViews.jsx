import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSavedViews } from '../hooks/useSavedViews';

function copyText(value) {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }

  return new Promise((resolve, reject) => {
    try {
      const field = document.createElement('textarea');
      field.value = value;
      field.setAttribute('readonly', 'true');
      field.style.position = 'absolute';
      field.style.left = '-9999px';
      document.body.appendChild(field);
      field.select();
      document.execCommand('copy');
      document.body.removeChild(field);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

export function SavedViews({
  storageKey,
  currentPathname,
  currentSearch = '',
  defaultName,
  saveLabel = 'Salvează filtrul',
  heading = 'Filtre salvate',
  emptyHint = 'Salvează combinațiile pe care vrei să le revii rapid.',
}) {
  const { views, saveView, removeView } = useSavedViews(storageKey);
  const [isSaving, setIsSaving] = useState(false);
  const [draftName, setDraftName] = useState(defaultName);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (!feedback) return undefined;
    const timer = window.setTimeout(() => setFeedback(''), 1800);
    return () => window.clearTimeout(timer);
  }, [feedback]);

  const normalizedSearch = useMemo(() => {
    const params = new URLSearchParams(currentSearch);
    params.sort();
    const normalized = params.toString();
    return normalized ? `?${normalized}` : '';
  }, [currentSearch]);

  const hasCurrentViewSaved = views.some(
    (view) => view.pathname === currentPathname && view.search === normalizedSearch
  );

  async function handleCopyLink() {
    if (typeof window === 'undefined') return;

    const href = `${window.location.origin}${currentPathname}${normalizedSearch}`;

    try {
      await copyText(href);
      setFeedback('Link copiat');
    } catch {
      setFeedback('Nu am putut copia linkul');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = draftName.trim() || defaultName;

    saveView({
      name,
      pathname: currentPathname,
      search: normalizedSearch,
    });

    setDraftName(defaultName);
    setIsSaving(false);
    setFeedback('Filtru salvat');
  }

  return (
    <div className="saved-views-shell">
      <div className="saved-views-toolbar">
        <div className="saved-views-actions">
          <button type="button" className="saved-views-action" onClick={handleCopyLink}>
            Copiază link
          </button>
          <button
            type="button"
            className="saved-views-action"
            onClick={() => {
              if (!isSaving) setDraftName(defaultName);
              setIsSaving(!isSaving);
            }}
          >
            {isSaving ? 'Renunță' : saveLabel}
          </button>
        </div>

        <div className="saved-views-feedback" aria-live="polite">
          {feedback || (hasCurrentViewSaved ? 'Filtrul curent este deja salvat' : emptyHint)}
        </div>
      </div>

      {isSaving && (
        <form className="saved-views-form" onSubmit={handleSubmit}>
          <input
            className="saved-views-input"
            type="text"
            maxLength={60}
            value={draftName}
            onChange={(event) => setDraftName(event.target.value)}
            placeholder={defaultName}
            autoFocus
          />
          <button type="submit" className="saved-views-submit">
            Salvează
          </button>
        </form>
      )}

      {views.length > 0 && (
        <div className="saved-views-list">
          <span className="saved-views-label">{heading}</span>
          <div className="saved-views-chips">
            {views.map((view) => {
              const isCurrent =
                view.pathname === currentPathname && view.search === normalizedSearch;

              return (
                <div key={view.id} className="saved-view-chip-shell">
                  <Link
                    to={`${view.pathname}${view.search}`}
                    className={`saved-view-chip${isCurrent ? ' saved-view-chip--current' : ''}`}
                  >
                    {view.name}
                  </Link>
                  <button
                    type="button"
                    className="saved-view-chip-remove"
                    onClick={() => removeView(view.id)}
                    aria-label={`Șterge filtrul salvat ${view.name}`}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      aria-hidden="true"
                    >
                      <path d="M2 2l6 6M8 2L2 8" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
