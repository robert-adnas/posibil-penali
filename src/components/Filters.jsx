import { useState } from 'react';
import { getPartyToken } from '../utils/partyColors';
import { POSITION_LABELS, STATUS_LABELS } from '../utils/constants';

export function Filters({ filters, setFilters, parties, positionTypes, statuses, total }) {
  const [expanded, setExpanded] = useState(false);
  const hasFilters = Boolean(filters.party || filters.positionType || filters.status);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
  };

  const clearAll = () => {
    setFilters({ party: null, positionType: null, status: null, yearRange: [null, null] });
  };

  return (
    <div className="filters-shell">
      <div className="filters-mobile-row">
        <button onClick={() => setExpanded(!expanded)} className="filter-mobile-toggle">
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

      <div className="filter-content" data-expanded={expanded}>
        <div className="filter-groups">
          <div className="filter-row">
            <span className="filter-section-label filter-section-label--mobile-hidden">Partid</span>

            <div className="filter-chips">
              {parties.map(({ party, count }) => {
                const isActive = filters.party === party;
                const isDimmed = Boolean(filters.party && !isActive);

                return (
                  <button
                    key={party}
                    onClick={() => updateFilter('party', party)}
                    className={`filter-chip filter-chip--party${isActive ? ' is-active' : ''}`}
                    data-party-token={getPartyToken(party)}
                    data-dimmed={isDimmed}
                  >
                    <span className="filter-chip-dot" />
                    <span>{party}</span>
                    <span className="filter-chip-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="filter-row">
            <span className="filter-section-label">Funcție</span>

            <div className="filter-chips">
              {positionTypes.map(({ type, count }) => {
                const isActive = filters.positionType === type;

                return (
                  <button
                    key={type}
                    onClick={() => updateFilter('positionType', type)}
                    className={`filter-chip filter-chip--neutral${isActive ? ' is-active' : ''}`}
                  >
                    <span>{POSITION_LABELS[type] || type}</span>
                    <span className="filter-chip-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="filter-row">
            <span className="filter-section-label">Status</span>

            <div className="filter-chips">
              {statuses.map(({ status, count }) => {
                const isActive = filters.status === status;

                return (
                  <button
                    key={status}
                    onClick={() => updateFilter('status', status)}
                    className={`filter-chip filter-chip--neutral${isActive ? ' is-active' : ''}`}
                  >
                    <span>{STATUS_LABELS[status] || status}</span>
                    <span className="filter-chip-count">{count}</span>
                  </button>
                );
              })}
            </div>

            <div className="filter-toolbar-end">
              {hasFilters && (
                <button onClick={clearAll} className="filter-reset">
                  Resetează
                </button>
              )}

              <span className="filter-count-desktop">{total} rezultate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
