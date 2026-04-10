import { STATUS_LABELS } from './constants';
import { nameToSlug } from './slug';

export const CHANGE_KIND_LABELS = {
  entry_added: 'Fi\u0219\u0103 nou\u0103',
  status_change: 'Status schimbat',
  details_update: 'Detalii completate',
  sources_update: 'Surse completate',
};

export function groupChangeLogByDate(items) {
  const groups = new Map();

  items.forEach((entry) => {
    if (!groups.has(entry.date)) {
      groups.set(entry.date, []);
    }

    groups.get(entry.date).push(entry);
  });

  return [...groups.entries()].map(([date, entries]) => ({
    date,
    entries,
  }));
}

export function buildChangeSummary(entry) {
  if (entry.summary) return entry.summary;

  if (entry.kind === 'status_change') {
    const fromLabel = STATUS_LABELS[entry.status_from] || entry.status_from;
    const toLabel = STATUS_LABELS[entry.status_to] || entry.status_to;
    return `Statusul afi\u0219at \u00een arhiv\u0103 a fost actualizat din "${fromLabel}" \u00een "${toLabel}".`;
  }

  if (entry.kind === 'entry_added') {
    return '';
  }

  return '';
}

export function getChangeEntryKey(entry) {
  return `${nameToSlug(entry.politician.name)}:${entry.date}`;
}
