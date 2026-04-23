import { useState } from 'react';

const STATUSES = [
  {
    key: 'convicted',
    label: 'Condamnat definitiv',
    description:
      'Condamnat prin hotărâre definitivă, după epuizarea tuturor căilor de atac.',
  },
  {
    key: 'first_instance',
    label: 'Condamnat în primă instanță',
    description:
      'Condamnat de prima instanță, dar sentința poate fi modificată în apel — procesul continuă.',
  },
  {
    key: 'indicted',
    label: 'Trimis în judecată',
    description:
      'Procurorul a finalizat urmărirea penală și a trimis dosarul spre judecată. Procesul nu a început.',
  },
  {
    key: 'investigated',
    label: 'Cercetat penal',
    description:
      'Urmărit penal de procurori. Dosarul nu a ajuns încă în instanță.',
  },
  {
    key: 'prescribed',
    label: 'Prescris',
    description:
      'Termenul de urmărire penală a expirat. Nu mai poate fi judecat pentru această faptă.',
  },
  {
    key: 'closed',
    label: 'Clasat',
    description:
      'Dosarul a fost închis de parchet fără trimitere în instanță.',
  },
  {
    key: 'acquitted',
    label: 'Achitat',
    description:
      'Instanța l-a achitat. Nu s-a stabilit nicio vinovăție.',
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
            {STATUSES.map((status) => (
              <span key={status.key} className="status-legend-dot" data-status={status.key} />
            ))}
          </span>
          <span className="status-legend-toggle-label">Ce înseamnă fiecare status?</span>
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

        <div className="status-legend-panel" data-open={open ? 'true' : 'false'}>
          <div className="status-legend-panel-inner">
            <div className="status-legend-grid">
              {STATUSES.map((status) => (
                <div key={status.key} className="status-legend-item" data-status={status.key}>
                  <div className="status-legend-item-header">
                    <span className="status-legend-item-dot" />
                    <span className="status-legend-item-label">{status.label}</span>
                  </div>
                  <p className="status-legend-item-desc">{status.description}</p>
                </div>
              ))}
              <p className="status-legend-notice">
                Prezumția de nevinovăție (Art. 23 Constituție, Art. 48 Carta UE) se aplică tuturor
                persoanelor fără condamnare definitivă. Includerea în această bază de date nu
                echivalează cu stabilirea vinovăției.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
