import { useMemo, useState } from 'react';
import rawData from '../../data/politicians.json';
import { buildDataset } from '../../data/buildDataset.js';
import { nameToSlug } from '../utils/slug.js';
import { parsePrejudiciuEur } from '../utils/parsePrejudiciu.js';

const dataset = buildDataset(rawData);
const allData = dataset.politicians;
const metadata = dataset.metadata;

function matchesFilters(politician, filters, excludeKey = null) {
  if (excludeKey !== 'party' && filters.party && politician.party !== filters.party) return false;
  if (excludeKey !== 'positionType' && filters.positionType && politician.position_type !== filters.positionType) return false;
  if (excludeKey !== 'status' && filters.status && politician.status !== filters.status) return false;
  if (excludeKey !== 'yearRange' && filters.yearRange[0] && politician.conviction_year && politician.conviction_year < filters.yearRange[0]) return false;
  if (excludeKey !== 'yearRange' && filters.yearRange[1] && politician.conviction_year && politician.conviction_year > filters.yearRange[1]) return false;
  return true;
}

function toSortedCounts(data, key) {
  const counts = {};
  data.forEach((politician) => {
    counts[politician[key]] = (counts[politician[key]] || 0) + 1;
  });

  return Object.entries(counts)
    .sort((a, b) => {
      // Push "Independent" to the end
      if (a[0] === 'Independent') return 1;
      if (b[0] === 'Independent') return -1;
      return b[1] - a[1];
    })
    .map(([value, count]) => ({ value, count }));
}

export function useData() {
  const [filters, setFilters] = useState({
    party: null,
    positionType: null,
    status: null,
    yearRange: [null, null],
  });

  const parties = useMemo(() => {
    return toSortedCounts(
      allData.filter((politician) => matchesFilters(politician, filters, 'party')),
      'party'
    ).map(({ value, count }) => ({ party: value, count }));
  }, [filters]);

  const positionTypes = useMemo(() => {
    return toSortedCounts(
      allData.filter((politician) => matchesFilters(politician, filters, 'positionType')),
      'position_type'
    ).map(({ value, count }) => ({ type: value, count }));
  }, [filters]);

  const statuses = useMemo(() => {
    return toSortedCounts(
      allData.filter((politician) => matchesFilters(politician, filters, 'status')),
      'status'
    ).map(({ value, count }) => ({ status: value, count }));
  }, [filters]);

  const filteredData = useMemo(() => {
    return allData.filter((politician) => matchesFilters(politician, filters));
  }, [filters]);

  const stats = useMemo(() => {
    const convicted = filteredData.filter((politician) => politician.status === 'convicted');
    const totalYears = convicted.reduce((sum, politician) => sum + (politician.sentence_years || 0), 0);
    const totalPrejudiciu = filteredData.reduce((sum, politician) => sum + parsePrejudiciuEur(politician), 0);
    return {
      total: filteredData.length,
      convicted: convicted.length,
      totalPrisonYears: Math.round(totalYears),
      totalPrejudiciu,
    };
  }, [filteredData]);

  const findBySlug = useMemo(() => {
    const index = Object.fromEntries(allData.map((p) => [nameToSlug(p.name), p]));
    return (slug) => index[slug] || null;
  }, []);

  return {
    metadata,
    allData,
    filteredData,
    filters,
    setFilters,
    parties,
    positionTypes,
    statuses,
    stats,
    findBySlug,
  };
}
