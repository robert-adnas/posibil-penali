import { useState } from 'react';

const STATUSES = [
  {
    key: 'convicted',
    label: 'Condamnat definitiv',
    description: 'Hotărâre judecătorească definitivă și irevocabilă. Vinovăția a fost stabilită prin toate căile de atac.',
  },
  {
    key: 'first_instance',
    label: 'Condamnat în primă instanță',
    description: 'Condamnat de tribunal, dar sentința nu este definitivă. Poate face apel. Prezumția de nevinovăție se aplică parțial.',
  },
  {
    key: 'indicted',
    label: 'Trimis în judecată',
    description: 'Rechizitoriu emis de procuror. Urmează procesul în instanță. Vinovăția nu a fost stabilită.',
  },
  {
    key: 'investigated',
    label: 'Cercetat penal',
    description: 'Sub urmărire penală, dar netrimit încă în judecată. Prezumția de nevinovăție se aplică deplin.',
  },
  {
    key: 'prescribed',
    label: 'Prescris',
    description: 'Termenul legal pentru urmărire penală a expirat. Nu mai poate fi judecat pentru această faptă.',
  },
  {
    key: 'acquitted',
    label: 'Achitat',
    description: 'Instanța a pronunțat achitarea. Nu există vinovăție stabilită de nicio instanță.',
  },
];

export function StatusLegend() {
  const [open, setOpen] = useState(false);

  return (
    <div className="status-legend-bar app-section">
      <div className="app-inner">
        <button
          className="status-legend-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <span className="status-legend-toggle-dots" aria-hidden="true">
            {STATUSES.map((s) => (
              <span key={s.key} className="status-legend-dot" data-status={s.key} />
            ))}
          </span>
          <span className="status-legend-toggle-label">Ghid statusuri juridice</span>
          <svg
            className={`status-legend-chevron${open ? ' is-open' : ''}`}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M3 4.5l3 3 3-3" />
          </svg>
        </button>

        {open && (
          <div className="status-legend-grid">
            {STATUSES.map((s) => (
              <div key={s.key} className="status-legend-item" data-status={s.key}>
                <div className="status-legend-item-header">
                  <span className="status-legend-item-dot" />
                  <span className="status-legend-item-label">{s.label}</span>
                </div>
                <p className="status-legend-item-desc">{s.description}</p>
              </div>
            ))}
            <p className="status-legend-notice">
              Prezumția de nevinovăție (Art. 23 Constituție, Art. 48 Carta UE) se aplică tuturor
              persoanelor fără condamnare definitivă. Includerea în această bază de date nu
              echivalează cu stabilirea vinovăției.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
