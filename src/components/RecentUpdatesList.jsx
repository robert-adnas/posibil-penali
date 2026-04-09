import { Link } from 'react-router-dom';
import { POSITION_LABELS, STATUS_LABELS } from '../utils/constants';
import { nameToSlug } from '../utils/slug';
import { formatUpdateDate } from '../utils/recentUpdates';

export function RecentUpdatesList({
  items,
  from,
  fromLabel,
  showDate = true,
  emptyText = 'Nu există încă actualizări editoriale afișabile.',
}) {
  if (!items.length) {
    return <p className="updates-empty">{emptyText}</p>;
  }

  return (
    <ul className="updates-list">
      {items.map((politician) => (
        <li key={`${politician.name}:${politician.verified_at}`} className="updates-item">
          <Link
            to={`/politician/${nameToSlug(politician.name)}`}
            state={from ? { from, fromLabel } : undefined}
            className="updates-item-link"
            data-status={politician.status}
          >
            <div className="updates-item-main">
              <span className="updates-item-name">{politician.name}</span>
              <span className="updates-item-meta">
                {politician.party} · {POSITION_LABELS[politician.position_type] || politician.position_type}
              </span>
            </div>

            <div className="updates-item-side">
              <span className="detail-panel-status updates-item-status" data-status={politician.status}>
                <span className="detail-panel-status-dot" />
                {STATUS_LABELS[politician.status] || politician.status}
              </span>
              {showDate && (
                <span className="updates-item-date">
                  Verificat la {formatUpdateDate(politician.verified_at, { compact: true })}
                </span>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
