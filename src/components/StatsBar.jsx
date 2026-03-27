import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrejudiciu } from '../utils/parsePrejudiciu.js';

export function StatsBar({ stats }) {
  return (
    <div className="stats-bar">
      <Stat value={stats.total} label="politicieni" />
      <Stat value={stats.convicted} label="condamnați" accent />
      <Stat value={stats.totalPrisonYears} label="ani de pușcărie" />
    </div>
  );
}

export function PrejudiciuBanner({ stats }) {
  const [open, setOpen] = useState(false);

  if (!stats.totalPrejudiciu || stats.totalPrejudiciu <= 0) return null;

  return (
    <div className="prejudiciu-banner">
      <div className="prejudiciu-banner-inner">
        <span className="prejudiciu-label">Prejudiciu total documentat</span>
        <span className="prejudiciu-value">{formatPrejudiciu(stats.totalPrejudiciu)}</span>
        <button
          className="prejudiciu-info-btn"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Cum se calculează prejudiciul total"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <circle cx="8" cy="8" r="6.5" />
            <path d="M8 5v.5M8 7.5v4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="prejudiciu-details" data-open={open ? 'true' : 'false'}>
        <div className="prejudiciu-details-inner">
          <p>
            Sumă orientativă, calculată automat din dosarele documentate.
            Sumele în euro sunt convertite la cursul aproximativ de 5 lei/€.
            Nu toate dosarele conțin valori cuantificabile — cifrele provin
            din actele de acuzare sau din hotărârile instanțelor, acolo unde
            acestea sunt publice.
          </p>
          <Link to="/metodologie#prejudiciu" className="prejudiciu-details-link">
            Metodologia completă →
          </Link>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label, accent }) {
  return (
    <div className="stat-item">
      <span className={`stat-value${accent ? ' stat-value--accent' : ''}`}>{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
