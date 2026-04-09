import { useMemo } from 'react';
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
    : 'necunoscuta';

  useSEO({
    title: 'Modificari recente | Politicieni Corupti',
    description:
      'Vezi separat modificarile consemnate in arhiva si fisele doar reverificate editorial.',
    url: `${BASE_URL}/actualizari`,
  });

  return (
    <PageLayout title="Modificari recente" kicker="Istoric editorial">
      <p className="page-intro-note">
        Ultima actualizare globala a arhivei: {formattedLastUpdated}
      </p>

      <Section title="Cum se citeste aceasta pagina">
        <p>
          Aici vezi doua tipuri de actualizari, separate clar.
        </p>
        <p>
          <strong>Modificarile consemnate</strong> inseamna ca ceva s-a schimbat efectiv in arhiva:
          a fost adaugata o fisa noua, s-a schimbat statusul afisat sau au fost completate
          detalii importante ori surse oficiale.
        </p>
        <p>
          <strong>Fisele reverificate</strong> sunt profiluri pe care le-am verificat din nou,
          fara o schimbare editoriala majora afisata in jurnal.
        </p>
      </Section>

      <Section>
        <div className="updates-groups">
          {groupedChanges.map((group) => (
            <section key={group.date} className="updates-group">
              <div className="updates-group-heading">
                <h3 className="updates-group-title">{formatUpdateDate(group.date)}</h3>
                <span className="updates-group-count">
                  {group.entries.length} {group.entries.length === 1 ? 'modificare' : 'modificari'}
                </span>
              </div>

              <ChangeLogList
                items={group.entries}
                from="/actualizari"
                fromLabel="Modificari recente"
              />
            </section>
          ))}
        </div>
      </Section>

      <Section title="Fise reverificate fara alte schimbari majore">
        <div className="updates-groups">
          {groupedVerifications.map((group) => (
            <section key={group.date} className="updates-group">
              <div className="updates-group-heading">
                <h3 className="updates-group-title">{formatUpdateDate(group.date)}</h3>
                <span className="updates-group-count">
                  {group.politicians.length} {group.politicians.length === 1 ? 'fisa' : 'fise'}
                </span>
              </div>

              <RecentUpdatesList
                items={group.politicians}
                from="/actualizari"
                fromLabel="Modificari recente"
                showDate={false}
                emptyText="Nu exista reverificari suplimentare in aceasta perioada."
              />
            </section>
          ))}
        </div>
      </Section>

      <div className="method-footer-links">
        <Link to="/lista" className="method-footer-link">Lista completa {'->'}</Link>
        <Link to="/contact" className="method-footer-link">Semnaleaza o corectie {'->'}</Link>
      </div>
    </PageLayout>
  );
}

function Section({ title, children }) {
  return (
    <section className="page-section">
      <h2 className="page-section-title">{title}</h2>
      <div className="page-section-body">{children}</div>
    </section>
  );
}
