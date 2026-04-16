import { Link } from 'react-router-dom';
import { POSITION_LABELS, STATUS_LABELS } from '../utils/constants';
import { nameToSlug } from '../utils/slug';
import { buildChangeSummary, CHANGE_KIND_LABELS } from '../utils/changeLog';

export function ChangeLogList({
  items,
  from,
  fromLabel,
  emptyText = 'Nu există încă modificări consemnate în jurnalul editorial.',
}) {
  if (!items.length) {
    return <p className="updates-empty">{emptyText}</p>;
  }

  return (
    <ul className="change-log-list">
      {items.map((entry) => {
        const summary = buildChangeSummary(entry);

        return (
          <li key={entry.id} className="change-log-item" data-kind={entry.kind}>
            <Link
              to={`/politician/${nameToSlug(entry.politician.name)}`}
              state={from ? { from, fromLabel } : undefined}
              className="change-log-item-link"
              data-status={entry.politician.status}
            >
              <div className="change-log-main">
                <div className="change-log-topline">
                  <span className="change-log-kind">
                    {CHANGE_KIND_LABELS[entry.kind] || 'Modificare'}
                  </span>
                  <span
                    className="detail-panel-status change-log-status"
                    data-status={entry.politician.status}
                  >
                    <span className="detail-panel-status-dot" />
                    {STATUS_LABELS[entry.politician.status] || entry.politician.status}
                  </span>
                </div>

                <span className="change-log-name">{entry.politician.name}</span>
                <span className="change-log-meta">
                  {entry.politician.party}{' · '}
                  {POSITION_LABELS[entry.politician.position_type] || entry.politician.position_type}
                </span>
                <span className="change-log-title">{entry.title}</span>
                {summary ? <span className="change-log-summary">{summary}</span> : null}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
