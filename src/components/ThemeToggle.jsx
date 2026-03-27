import { useState, useEffect } from 'react';

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const isDark = theme === 'dark';

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Activează modul luminos' : 'Activează modul întunecat'}
      title={isDark ? 'Mod luminos' : 'Mod întunecat'}
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8" cy="8" r="3.5" />
          <path d="M8 1.5v1M8 13.5v1M1.5 8h1M13.5 8h1M3.4 3.4l.7.7M11.9 11.9l.7.7M3.4 12.6l.7-.7M11.9 4.1l.7-.7" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13.2 10.5A5.5 5.5 0 015.5 2.8a5.5 5.5 0 107.7 7.7z" />
        </svg>
      )}
    </button>
  );
}
