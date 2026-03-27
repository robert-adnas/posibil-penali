import { useEffect } from 'react';

const BASE_URL = 'https://politicieni-corupti.ro';
const DEFAULT_TITLE = 'Politicieni Corupți | Arhivă independentă despre corupție și integritate';
const DEFAULT_DESCRIPTION =
  'Bază de date cu politicieni români condamnați, trimiși în judecată sau cercetați penal pentru corupție. Date verificate, surse oficiale, actualizate permanent.';
const DEFAULT_URL = BASE_URL + '/';
const DEFAULT_IMAGE = BASE_URL + '/og-image.png';

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

export function useSEO({ title, description, url, image, noindex = false } = {}) {
  useEffect(() => {
    const resolvedTitle = title || DEFAULT_TITLE;
    const resolvedDescription = description || DEFAULT_DESCRIPTION;
    const resolvedUrl = url || DEFAULT_URL;
    const resolvedImage = image || DEFAULT_IMAGE;

    document.title = resolvedTitle;
    setMeta('meta[name="description"]', 'content', resolvedDescription);
    setCanonical(resolvedUrl);

    let robotsEl = document.querySelector('meta[name="robots"]');
    if (!robotsEl) {
      robotsEl = document.createElement('meta');
      robotsEl.setAttribute('name', 'robots');
      document.head.appendChild(robotsEl);
    }
    robotsEl.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');

    setMeta('meta[property="og:title"]', 'content', resolvedTitle);
    setMeta('meta[property="og:description"]', 'content', resolvedDescription);
    setMeta('meta[property="og:url"]', 'content', resolvedUrl);
    setMeta('meta[property="og:image"]', 'content', resolvedImage);

    setMeta('meta[name="twitter:title"]', 'content', resolvedTitle);
    setMeta('meta[name="twitter:description"]', 'content', resolvedDescription);
    setMeta('meta[name="twitter:image"]', 'content', resolvedImage);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]', 'content', DEFAULT_DESCRIPTION);
      setCanonical(DEFAULT_URL);
      document.querySelector('meta[name="robots"]')?.setAttribute('content', 'index, follow');
      setMeta('meta[property="og:title"]', 'content', DEFAULT_TITLE);
      setMeta('meta[property="og:description"]', 'content', DEFAULT_DESCRIPTION);
      setMeta('meta[property="og:url"]', 'content', DEFAULT_URL);
      setMeta('meta[property="og:image"]', 'content', DEFAULT_IMAGE);
      setMeta('meta[name="twitter:title"]', 'content', DEFAULT_TITLE);
      setMeta('meta[name="twitter:description"]', 'content', DEFAULT_DESCRIPTION);
      setMeta('meta[name="twitter:image"]', 'content', DEFAULT_IMAGE);
    };
  }, [title, description, url, image]);
}
