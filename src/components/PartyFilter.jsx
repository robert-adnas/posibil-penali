import { useId, useRef, useState } from 'react';
import { getPartyToken } from '../utils/partyColors';

const VISIBLE_PARTIES = 8;
const countFormatter = new Intl.NumberFormat('ro-RO');

function searchableText(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[.]/g, '');
}

export function PartyFilter({ parties, selectedParty, onChange }) {
  const dialogRef = useRef(null);
  const searchRef = useRef(null);
  const id = useId();
  const [query, setQuery] = useState('');
  const options = selectedParty && !parties.some(({ party }) => party === selectedParty)
    ? [...parties, { party: selectedParty, count: 0 }]
    : parties;
  const visibleParties = options.slice(0, VISIBLE_PARTIES);
  const selectedOption = options.find(({ party }) => party === selectedParty);
  if (selectedOption && !visibleParties.includes(selectedOption)) visibleParties.push(selectedOption);

  const search = searchableText(query.trim());
  const results = options.filter(({ party }) => searchableText(party).includes(search));
  const total = parties.reduce((sum, { count }) => sum + count, 0);

  function selectParty(party) {
    onChange(party);
    dialogRef.current.close();
  }

  function openPicker() {
    dialogRef.current.showModal();
    // Focus search on desktop; opening the picker on a phone keeps the keyboard closed.
    if (window.matchMedia('(min-width: 640px)').matches) searchRef.current.focus();
  }

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialogRef.current.close();
    }
  }

  return (
    <div className="filter-row" data-filter-row="party">
      <span className="filter-section-label filter-section-label--mobile-hidden">Partid</span>
      <div className="filter-row-body">
        <div className="filter-chips">
          {visibleParties.map(({ party, count }) => (
            <button
              key={party}
              type="button"
              onClick={() => onChange(party)}
              className={`filter-chip filter-chip--party${selectedParty === party ? ' is-active' : ''}`}
              data-party-token={getPartyToken(party)}
              aria-pressed={selectedParty === party}
              aria-label={`${party}: ${countFormatter.format(count)} persoane`}
            >
              <span className="filter-chip-dot" aria-hidden="true" />
              <span className="filter-chip-label">{party}</span>
              <span className="filter-chip-count">{countFormatter.format(count)}</span>
            </button>
          ))}
          {options.length > VISIBLE_PARTIES && (
            <button
              type="button"
              className="filter-chip filter-chip--more"
              onClick={openPicker}
              aria-haspopup="dialog"
              aria-controls={`${id}-dialog`}
            >
              Toate partidele
              <span className="filter-chip-count">{countFormatter.format(options.length)}</span>
            </button>
          )}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        id={`${id}-dialog`}
        className="party-picker-dialog"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
        onClose={() => setQuery('')}
        onClick={closeOnBackdrop}
      >
        <div className="party-picker-header">
          <h2 id={`${id}-title`}>Alege un partid</h2>
          <button type="button" className="party-picker-close" onClick={() => dialogRef.current.close()}>
            Închide
          </button>
        </div>
        <p id={`${id}-description`} className="party-picker-description">
          Afilierea documentată în profil. Numerele țin cont de celelalte filtre active.
        </p>
        <label className="party-picker-search-label" htmlFor={`${id}-search`}>Caută un partid</label>
        <input
          ref={searchRef}
          id={`${id}-search`}
          type="search"
          name="party-search"
          autoComplete="off"
          spellCheck={false}
          placeholder="De exemplu, PNL sau Pro România…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="party-picker-search"
        />
        <p className="party-picker-result-count" role="status">
          {results.length} {results.length === 1 ? 'opțiune' : 'opțiuni'}
        </p>
        <div className="party-picker-list">
          <button
            type="button"
            className="party-picker-option party-picker-option--all"
            aria-pressed={!selectedParty}
            onClick={() => selectParty(null)}
          >
            <span>Toate afilierile</span>
            <span className="party-picker-count">{countFormatter.format(total)}</span>
          </button>
          {results.map(({ party, count }) => (
            <button
              key={party}
              type="button"
              className="party-picker-option"
              data-party-token={getPartyToken(party)}
              aria-pressed={selectedParty === party}
              onClick={() => selectParty(party)}
            >
              <span className="filter-chip-dot" aria-hidden="true" />
              <span className="party-picker-name">{party}</span>
              {selectedParty === party && <span className="party-picker-selected">Selectat</span>}
              <span className="party-picker-count">{countFormatter.format(count)}</span>
            </button>
          ))}
          {results.length === 0 && (
            <p className="party-picker-empty">Nu am găsit această afiliere. Încearcă alt nume sau o abreviere.</p>
          )}
        </div>
      </dialog>
    </div>
  );
}
