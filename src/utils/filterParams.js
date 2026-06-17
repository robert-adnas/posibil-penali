import { POSITION_LABELS, STATUS_LABELS } from './constants.js';
import { DATA_SCOPE, DEFAULT_DATA_SCOPE, normalizeDataScope } from './politicalScope.js';

const FILTER_PARAM_KEYS = {
  party: 'party',
  positionType: 'position',
  status: 'status',
  scope: 'scope',
};

function normalizeValue(value) {
  return value ? value : null;
}

export function createDefaultFilters() {
  return {
    party: null,
    positionType: null,
    status: null,
    scope: DEFAULT_DATA_SCOPE,
    yearRange: [null, null],
  };
}

export function normalizeFilters(filters = {}) {
  const safeFilters = filters || {};

  return {
    ...createDefaultFilters(),
    ...safeFilters,
    scope: normalizeDataScope(safeFilters.scope),
    yearRange: safeFilters.yearRange || [null, null],
  };
}

export function readScopeFromSearchParams(searchParams) {
  return normalizeDataScope(searchParams.get(FILTER_PARAM_KEYS.scope));
}

export function readFiltersFromSearchParams(searchParams) {
  return {
    ...createDefaultFilters(),
    party: normalizeValue(searchParams.get(FILTER_PARAM_KEYS.party)),
    positionType: normalizeValue(searchParams.get(FILTER_PARAM_KEYS.positionType)),
    status: normalizeValue(searchParams.get(FILTER_PARAM_KEYS.status)),
    scope: readScopeFromSearchParams(searchParams),
  };
}

export function applyFiltersToSearchParams(baseSearchParams, filters) {
  const next = new URLSearchParams(baseSearchParams);

  Object.values(FILTER_PARAM_KEYS).forEach((key) => next.delete(key));

  if (filters.party) next.set(FILTER_PARAM_KEYS.party, filters.party);
  if (filters.positionType) next.set(FILTER_PARAM_KEYS.positionType, filters.positionType);
  if (filters.status) next.set(FILTER_PARAM_KEYS.status, filters.status);
  if (normalizeDataScope(filters.scope) === DATA_SCOPE.ALL) {
    next.set(FILTER_PARAM_KEYS.scope, DATA_SCOPE.ALL);
  }

  next.sort();
  return next;
}

export function applyScopeToSearchParams(baseSearchParams, includeExtendedArchive) {
  const next = new URLSearchParams(baseSearchParams);

  if (includeExtendedArchive) {
    next.set(FILTER_PARAM_KEYS.scope, DATA_SCOPE.ALL);
  } else {
    next.delete(FILTER_PARAM_KEYS.scope);
  }

  next.sort();
  return next;
}

export function hasActiveFilters(filters) {
  return Boolean(
    filters.party
    || filters.positionType
    || filters.status
    || normalizeDataScope(filters.scope) === DATA_SCOPE.ALL
  );
}

export function getScopeSearch(filtersOrScope) {
  const scope = typeof filtersOrScope === 'string' ? filtersOrScope : filtersOrScope?.scope;
  if (normalizeDataScope(scope) !== DATA_SCOPE.ALL) return '';

  const params = new URLSearchParams();
  params.set(FILTER_PARAM_KEYS.scope, DATA_SCOPE.ALL);
  return `?${params.toString()}`;
}

export function getHomeFilterViewName(filters) {
  const parts = [];

  if (normalizeDataScope(filters.scope) === DATA_SCOPE.ALL) {
    parts.push('Arhiva extinsă');
  }
  if (filters.party) parts.push(filters.party);
  if (filters.status) parts.push(STATUS_LABELS[filters.status] || filters.status);
  if (filters.positionType) {
    parts.push(POSITION_LABELS[filters.positionType] || filters.positionType);
  }

  return parts.join(' · ') || 'Arhiva completă';
}
