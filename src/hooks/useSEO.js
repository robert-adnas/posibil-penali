import { useEffect } from 'react';

const DEFAULT_TITLE = 'Politicieni Corupți | Arhivă independentă despre corupție și integritate';
const DEFAULT_DESCRIPTION =
  'Bază de date cu politicieni români condamnați, trimiși în judecată sau cercetați penal pentru corupție. Date verificate, surse oficiale, actualizate permanent.';

export function useSEO({ title, description } = {}) {
  useEffect(() => {
    const resolvedTitle = title || DEFAULT_TITLE;
    const resolvedDescription = description || DEFAULT_DESCRIPTION;

    document.title = resolvedTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', resolvedDescription);

    return () => {
      document.title = DEFAULT_TITLE;
      if (metaDesc) metaDesc.setAttribute('content', DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
