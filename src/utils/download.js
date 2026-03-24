import rawData from '../../data/politicians.json';
import { buildDataset } from '../../data/buildDataset.js';
import { nameToSlug } from './slug.js';

const BASE_URL = 'https://politicieni-corupti.ro';

function triggerDownload(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function downloadJSON() {
  const { politicians, metadata } = buildDataset(rawData);
  const payload = {
    metadata: {
      ...metadata,
      license: 'CC BY 4.0',
      source: BASE_URL,
    },
    politicians: politicians.map((p) => ({
      ...p,
      url: `${BASE_URL}/politician/${nameToSlug(p.name)}`,
    })),
  };
  triggerDownload(JSON.stringify(payload, null, 2), 'politicieni-corupti.json', 'application/json');
}

export function downloadCSV() {
  const { politicians } = buildDataset(rawData);
  const columns = ['name', 'party', 'position_type', 'position', 'status', 'crime', 'sentence', 'conviction_year', 'url'];
  const header = columns.join(',');
  const rows = politicians.map((p) => {
    const values = columns.map((col) => {
      if (col === 'url') return `"${BASE_URL}/politician/${nameToSlug(p.name)}"`;
      const val = p[col] ?? '';
      return `"${String(val).replace(/"/g, '""')}"`;
    });
    return values.join(',');
  });
  triggerDownload([header, ...rows].join('\n'), 'politicieni-corupti.csv', 'text/csv;charset=utf-8;');
}
