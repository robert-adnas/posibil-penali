import { POSITION_LABELS, STATUS_LABELS } from './constants';

const FILTER_PARAM_KEYS = {
  party: 'party',
  positionType: 'position',
  status: 'status',
};

function normalizeValue(value) {
  return value ? value : null;
}

export function createDefaultFilters() {
  return {
    party: null,
    positionType: null,
    status: null,
    yearRange: [null, null],
  };
}

export function readFiltersFromSearchParams(searchParams) {
  return {
    ...createDefaultFilters(),
    party: normalizeValue(searchParams.get(FILTER_PARAM_KEYS.party)),
    positionType: normalizeValue(searchParams.get(FILTER_PARAM_KEYS.positionType)),
    status: normalizeValue(searchParams.get(FILTER_PARAM_KEYS.status)),
  };
}

export function applyFiltersToSearchParams(baseSearchParams, filters) {
  const next = new URLSearchParams(baseSearchParams);

  Object.values(FILTER_PARAM_KEYS).forEach((key) => next.delete(key));

  if (filters.party) next.set(FILTER_PARAM_KEYS.party, filters.party);
  if (filters.positionType) next.set(FILTER_PARAM_KEYS.positionType, filters.positionType);
  if (filters.status) next.set(FILTER_PARAM_KEYS.status, filters.status);

  next.sort();
  return next;
}

export function hasActiveFilters(filters) {
  return Boolean(filters.party || filters.positionType || filters.status);
}

export function getHomeFilterViewName(filters) {
  const parts = [];

  if (filters.party) parts.push(filters.party);
  if (filters.status) parts.push(STATUS_LABELS[filters.status] || filters.status);
  if (filters.positionType) {
    parts.push(POSITION_LABELS[filters.positionType] || filters.positionType);
  }

  return parts.join(' · ') || 'Arhiva completă';
}
