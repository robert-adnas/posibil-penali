import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChangeLogList } from '../components/ChangeLogList';
import { PageLayout } from '../components/PageLayout';
import { RecentUpdatesList } from '../components/RecentUpdatesList';
import { useData } from '../hooks/useData';
import { useSEO } from '../hooks/useSEO';
import { getChangeEntryKey, groupChangeLogByDate } from '../utils/changeLog';
import {
  formatUpdateDate,
  getRecentUpdates,
  groupRecentUpdatesByDate,
} from '../utils/recentUpdates';
import { nameToSlug } from '../utils/slug';

const BASE_URL = 'https://politicieni-corupti.ro';
const INITIAL_VISIBLE_GROUPS = 5;
const LOAD_MORE_STEP = 5;

export function RecentUpdates() {
  const { allData, changeLog, metadata } = useData();

  const groupedChanges = useMemo(
    () => groupChangeLogByDate(changeLog),
    [changeLog]
  );

  const recentVerifications = useMemo(() => {
    const explicitChanges = new Set(changeLog.map((entry) => getChangeEntryKey(entry)));

    return getRecentUpdates(allData).filter((politician) => (
      !explicitChanges.has(`${nameToSlug(politician.name)}:${politician.verified_at}`)
    ));
  }, [allData, changeLog]);

  const groupedVerifications = useMemo(
    () => groupRecentUpdatesByDate(recentVerifications),
    [recentVerifications]
  );

  const formattedLastUpdated = metadata?.last_updated
    ? formatUpdateDate(metadata.last_updated)
    : 'necunoscută';

  useSEO({
    title: 'Modificări recente | Politicieni Corupți',
    description:
      'Vezi separat schimbările din arhivă și profilurile doar reverificate editorial.',
    url: `${BASE_URL}/actualizari`,
  });

  return (
    <PageLayout title="Modificări recente" kicker="Istoric editorial">
      <p className="page-intro-note">
        Ultima actualizare globală a arhivei: {formattedLastUpdated}
      </p>

      <div className="updates-page-note" role="note">
        <strong className="updates-page-note-title">Cum se citește</strong>
        <ul className="updates-page-note-list">
          <li>
            <strong>Schimbările din arhivă</strong> arată schimbările efective din arhivă:
            profiluri adăugate, statusuri actualizate, detalii sau surse completate.
          </li>
          <li>
            <strong>Profilurile reverificate</strong> sunt profiluri verificate din nou, fără o
            schimbare editorială majoră afișată în jurnal.
          </li>
        </ul>
      </div>

      <ProgressiveUpdatesSection
        title="Schimbări din arhivă"
        groups={groupedChanges}
        emptyText="Nu există schimbări în această perioadă."
        renderGroup={(group) => (
          <ChangeLogList
            items={group.entries}
            from="/actualizari"
            fromLabel="Modificări recente"
          />
        )}
      />

      <ProgressiveUpdatesSection
        title="Profiluri reverificate fără alte schimbări majore"
        groups={groupedVerifications}
        emptyText="Nu există reverificări suplimentare în această perioadă."
        renderGroup={(group) => (
          <RecentUpdatesList
            items={group.politicians}
            from="/actualizari"
            fromLabel="Modificări recente"
            showDate={false}
            emptyText="Nu există reverificări suplimentare în această perioadă."
          />
        )}
      />

      <div className="method-footer-links">
        <Link to="/lista" className="method-footer-link">Lista completă →</Link>
        <Link to="/contact" className="method-footer-link">Semnalează o corecție →</Link>
      </div>
    </PageLayout>
  );
}

function ProgressiveUpdatesSection({ title, groups, emptyText, renderGroup }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_GROUPS);
  const sentinelRef = useRef(null);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_GROUPS);
  }, [groups]);

  const visibleGroups = groups.slice(0, visibleCount);
  const hasMore = visibleCount < groups.length;

  useEffect(() => {
    if (!hasMore) return undefined;

    const node = sentinelRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setVisibleCount((previous) => Math.min(previous + LOAD_MORE_STEP, groups.length));
      },
      { rootMargin: '240px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [groups.length, hasMore]);

  const remainingGroups = Math.max(0, groups.length - visibleCount);

  return (
    <section className="page-section updates-section">
      <h2 className="page-section-title">{title}</h2>
      <div className="page-section-body">
        {visibleGroups.length ? (
          <div className="updates-groups">
            {visibleGroups.map((group) => (
              <section key={group.date} className="updates-group">
                <div className="updates-group-heading">
                  <h3 className="updates-group-title">{formatUpdateDate(group.date)}</h3>
                  <span className="updates-group-count">
                    {getGroupCountLabel(group)}
                  </span>
                </div>

                {renderGroup(group)}
              </section>
            ))}
          </div>
        ) : (
          <p className="updates-empty">{emptyText}</p>
        )}

        {hasMore && (
          <div className="updates-load-more">
            <button
              type="button"
              className="updates-load-more-btn"
              onClick={() => {
                setVisibleCount((previous) => Math.min(previous + LOAD_MORE_STEP, groups.length));
              }}
            >
              Afișează mai multe
            </button>
            <span className="updates-load-more-meta">
              Încă {remainingGroups} {remainingGroups === 1 ? 'grup de zi' : 'grupuri de zile'}
            </span>
            <div ref={sentinelRef} className="updates-load-sentinel" aria-hidden="true" />
          </div>
        )}
      </div>
    </section>
  );
}

function getGroupCountLabel(group) {
  if ('entries' in group) {
    return `${group.entries.length} ${group.entries.length === 1 ? 'modificare' : 'modificări'}`;
  }

  return `${group.politicians.length} ${group.politicians.length === 1 ? 'fișă' : 'fișe'}`;
}
