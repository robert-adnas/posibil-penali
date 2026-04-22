import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrejudiciu } from '../utils/parsePrejudiciu.js';

export function StatsDateline({ stats }) {
  const [open, setOpen] = useState(false);
  const hasPrejudiciu = stats.totalPrejudiciu && stats.totalPrejudiciu > 0;

  return (
    <div className="stats-dateline">
      <ul className="stats-dateline-list">
        <Stat value={stats.total} label="politicieni" />
        <Stat value={stats.convicted} label="condamnați" accent />
        <Stat value={stats.totalPrisonYears} label="ani de pușcărie" />
        {hasPrejudiciu && (
          <li className="stats-dateline-item stats-dateline-item--prejudiciu">
            <span className="stats-dateline-value stats-dateline-value--accent">
              {formatPrejudiciu(stats.totalPrejudiciu)}
            </span>
            <span className="stats-dateline-label">prejudiciu</span>
            <button
              type="button"
              className="stats-dateline-info"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Cum se calculează prejudiciul total"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" />
                <path d="M8 5v.5M8 7.5v4" strokeLinecap="round" />
              </svg>
            </button>
          </li>
        )}
      </ul>
      {hasPrejudiciu && (
        <div className="stats-dateline-details" data-open={open ? 'true' : 'false'}>
          <div className="stats-dateline-details-inner">
            <p>
              Sumă orientativă, calculată automat doar din valorile descrise
              explicit ca prejudiciu, pagubă sau plăți/alocări nelegale de
              fonduri. Sumele în euro sunt convertite la cursul aproximativ de
              5 lei/€. Mita, cadourile sau alte sume care nu sunt legate clar de
              un prejudiciu nu intră în total.
            </p>
            <Link to="/metodologie#prejudiciu" className="stats-dateline-details-link">
              Metodologia completă →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ value, label, accent }) {
  return (
    <li className="stats-dateline-item">
      <span className={`stats-dateline-value${accent ? ' stats-dateline-value--accent' : ''}`}>
        {value}
      </span>
      <span className="stats-dateline-label">{label}</span>
    </li>
  );
}
