import { useId } from 'react';

export function ArchiveScopeToggle({
  checked,
  onChange,
  allTotal,
  politicalTotal,
  className = '',
}) {
  const countId = useId();
  const scopeSummary = checked
    ? `Acum afișăm arhiva completă (${allTotal})`
    : `Acum afișăm lista principală (${politicalTotal})`;

  return (
    <label className={`archive-scope-toggle${className ? ` ${className}` : ''}`}>
      <input
        type="checkbox"
        className="archive-scope-input"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        aria-describedby={countId}
      />
      <span className="archive-scope-switch" aria-hidden="true" />
      <span className="archive-scope-copy">
        <span className="archive-scope-label">
          Include funcționari și alte persoane din dosare
        </span>
        <span id={countId} className="archive-scope-count">
          {scopeSummary}
        </span>
      </span>
    </label>
  );
}
