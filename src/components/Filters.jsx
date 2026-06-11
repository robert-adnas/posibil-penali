import { useMemo, useState } from 'react';
import { getPartyToken } from '../utils/partyColors';
import { POSITION_LABELS, STATUS_LABELS } from '../utils/constants';
import { DATA_SCOPE } from '../utils/politicalScope';
import { ArchiveScopeToggle } from './ArchiveScopeToggle';

const VISIBLE_FILTER_COUNTS = {
  party: 8,
  positionType: 6,
  status: 5,
};

function getVisibleItems(items, visibleCount, isActive) {
  if (items.length <= visibleCount) return items;

  const visibleItems = items.slice(0, visibleCount);
  const activeIndex = items.findIndex(isActive);

  if (activeIndex >= visibleCount) {
    return [...visibleItems, items[activeIndex]];
  }

  return visibleItems;
}

function FilterChipRow({
  rowKey,
  label,
  items,
  visibleCount,
  expanded,
  onToggle,
  isActive,
  renderChip,
  mobileHiddenLabel = false,
  toolbarEnd = null,
}) {
  const visibleItems = expanded ? items : getVisibleItems(items, visibleCount, isActive);
  const hiddenCount = Math.max(items.length - visibleItems.length, 0);
  const canCollapse = items.length > visibleCount;
  const showToggle = expanded ? canCollapse : hiddenCount > 0;
  const chipsId = `filter-chips-${rowKey}`;

  return (
    <div className="filter-row" data-filter-row={rowKey} data-expanded={expanded}>
      <span className={`filter-section-label${mobileHiddenLabel ? ' filter-section-label--mobile-hidden' : ''}`}>
        {label}
      </span>

      <div className="filter-row-body">
        <div id={chipsId} className="filter-chips">
          {visibleItems.map(renderChip)}

          {showToggle && (
            <button
              type="button"
              className="filter-chip filter-chip--more"
              onClick={onToggle}
              aria-controls={chipsId}
              aria-expanded={expanded}
              aria-label={
                expanded
                  ? `Restrange filtrele pentru ${label}`
                  : `Afiseaza ${hiddenCount} filtre in plus pentru ${label}`
              }
            >
              {expanded ? 'Mai putine' : `... ${hiddenCount}`}
            </button>
          )}
        </div>
      </div>

      {toolbarEnd}
    </div>
  );
}

export function Filters({ filters, setFilters, parties, positionTypes, statuses, total, scopeTotals }) {
  const [expanded, setExpanded] = useState(false);
  const [expandedRows, setExpandedRows] = useState({});
  const isExtendedScope = filters.scope === DATA_SCOPE.ALL;

  const activeFilters = useMemo(() => {
    const items = [];

    if (filters.party) {
      items.push({ key: 'party', label: filters.party });
    }

    if (filters.positionType) {
      items.push({
        key: 'positionType',
        label: POSITION_LABELS[filters.positionType] || filters.positionType,
      });
    }

    if (filters.status) {
      items.push({
        key: 'status',
        label: STATUS_LABELS[filters.status] || filters.status,
      });
    }

    return items;
  }, [filters.party, filters.positionType, filters.status]);

  const hasFieldFilters = activeFilters.length > 0;
  const hasFilters = hasFieldFilters || isExtendedScope;

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
  };

  const clearFilter = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: null,
    }));
  };

  const clearAll = () => {
    setExpandedRows({});
    setFilters({
      party: null,
      positionType: null,
      status: null,
      scope: DATA_SCOPE.POLITICAL,
      yearRange: [null, null],
    });
  };

  const updateScope = (includeExtendedArchive) => {
    setFilters((prev) => ({
      ...prev,
      scope: includeExtendedArchive ? DATA_SCOPE.ALL : DATA_SCOPE.POLITICAL,
    }));
  };

  const toggleRow = (rowKey) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowKey]: !prev[rowKey],
    }));
  };

  return (
    <div className="filters-shell">
      <div className="filters-mobile-row">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="filter-mobile-toggle"
          aria-expanded={expanded}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={`filter-mobile-icon${expanded ? ' is-expanded' : ''}`}
          >
            <path d="M5 3l4 4-4 4" />
          </svg>
          Filtre
          {hasFilters && <span className="filter-mobile-dot" />}
        </button>

        <span className="filter-mobile-total">{total} rezultate</span>
      </div>

      <div className="filter-scope-strip">
        <ArchiveScopeToggle
          checked={isExtendedScope}
          onChange={updateScope}
          allTotal={scopeTotals?.[DATA_SCOPE.ALL] || 0}
          politicalTotal={scopeTotals?.[DATA_SCOPE.POLITICAL] || 0}
        />
      </div>

      {hasFieldFilters && (
        <div className="filter-mobile-active" aria-label="Filtre active">
          {activeFilters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className="filter-active-chip"
              onClick={() => clearFilter(filter.key)}
            >
              <span>{filter.label}</span>
              <span className="filter-active-chip-remove" aria-hidden="true">×</span>
            </button>
          ))}

          <button type="button" onClick={clearAll} className="filter-active-clear">
            Resetează
          </button>
        </div>
      )}

      <div className="filter-content" data-expanded={expanded}>
        <div className="filter-groups">
          <FilterChipRow
            rowKey="party"
            label="Partid"
            items={parties}
            visibleCount={VISIBLE_FILTER_COUNTS.party}
            expanded={Boolean(expandedRows.party)}
            onToggle={() => toggleRow('party')}
            isActive={({ party }) => filters.party === party}
            mobileHiddenLabel
            renderChip={({ party, count }) => {
              const isActive = filters.party === party;
              const isDimmed = Boolean(filters.party && !isActive);

              return (
                <button
                  key={party}
                  type="button"
                  onClick={() => updateFilter('party', party)}
                  className={`filter-chip filter-chip--party${isActive ? ' is-active' : ''}`}
                  data-party-token={getPartyToken(party)}
                  data-dimmed={isDimmed}
                >
                  <span className="filter-chip-dot" />
                  <span className="filter-chip-label">{party}</span>
                  <span className="filter-chip-count">{count}</span>
                </button>
              );
            }}
          />

          <FilterChipRow
            rowKey="positionType"
            label="Funcție"
            items={positionTypes}
            visibleCount={VISIBLE_FILTER_COUNTS.positionType}
            expanded={Boolean(expandedRows.positionType)}
            onToggle={() => toggleRow('positionType')}
            isActive={({ type }) => filters.positionType === type}
            renderChip={({ type, count }) => {
              const isActive = filters.positionType === type;

              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => updateFilter('positionType', type)}
                  className={`filter-chip filter-chip--neutral${isActive ? ' is-active' : ''}`}
                >
                  <span className="filter-chip-label">{POSITION_LABELS[type] || type}</span>
                  <span className="filter-chip-count">{count}</span>
                </button>
              );
            }}
          />

          <FilterChipRow
            rowKey="status"
            label="Status"
            items={statuses}
            visibleCount={VISIBLE_FILTER_COUNTS.status}
            expanded={Boolean(expandedRows.status)}
            onToggle={() => toggleRow('status')}
            isActive={({ status }) => filters.status === status}
            renderChip={({ status, count }) => {
              const isActive = filters.status === status;

              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => updateFilter('status', status)}
                  className={`filter-chip filter-chip--neutral${isActive ? ' is-active' : ''}`}
                >
                  <span className="filter-chip-label">{STATUS_LABELS[status] || status}</span>
                  <span className="filter-chip-count">{count}</span>
                </button>
              );
            }}
            toolbarEnd={(
              <div className="filter-toolbar-end">
                {hasFilters && (
                  <button type="button" onClick={clearAll} className="filter-reset">
                    Resetează
                  </button>
                )}

                <span className="filter-count-desktop">{total} rezultate</span>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}
