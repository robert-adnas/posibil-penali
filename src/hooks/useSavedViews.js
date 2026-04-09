import { useEffect, useState } from 'react';

function normalizeSearch(search = '') {
  const params = new URLSearchParams(search);
  params.sort();
  const normalized = params.toString();
  return normalized ? `?${normalized}` : '';
}

function readSavedViews(storageKey) {
  if (typeof window === 'undefined') return [];

  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter((view) => view && view.id && view.name && view.pathname)
      .map((view) => ({
        ...view,
        search: normalizeSearch(view.search),
      }));
  } catch {
    return [];
  }
}

function createId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function useSavedViews(storageKey) {
  const [views, setViews] = useState(() => readSavedViews(storageKey));

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(storageKey, JSON.stringify(views));
  }, [storageKey, views]);

  function saveView(view) {
    const normalizedSearch = normalizeSearch(view.search);

    setViews((previous) => {
      const deduped = previous.filter(
        (entry) => !(entry.pathname === view.pathname && entry.search === normalizedSearch)
      );

      const nextView = {
        id: createId(),
        name: view.name.trim(),
        pathname: view.pathname,
        search: normalizedSearch,
        createdAt: new Date().toISOString(),
      };

      return [nextView, ...deduped].slice(0, 12);
    });
  }

  function removeView(id) {
    setViews((previous) => previous.filter((entry) => entry.id !== id));
  }

  return {
    views,
    saveView,
    removeView,
  };
}
