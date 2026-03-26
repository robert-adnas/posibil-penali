import { useMemo } from 'react';
import { getPartyToken } from '../utils/partyColors';
import { formatYears } from '../utils/constants';

export function PartyRanking({ data }) {
  const rankings = useMemo(() => {
    const partyStats = {};

    data.forEach((politician) => {
      if (!partyStats[politician.party]) {
        partyStats[politician.party] = { total: 0, convicted: 0, years: 0 };
      }

      partyStats[politician.party].total += 1;

      if (politician.status === 'convicted') {
        partyStats[politician.party].convicted += 1;
        partyStats[politician.party].years += politician.sentence_years || 0;
      }
    });

    return Object.entries(partyStats)
      .sort((a, b) => b[1].total - a[1].total)
      .map(([party, stats]) => ({ party, ...stats }));
  }, [data]);

  const maxTotal = Math.max(...rankings.map((ranking) => ranking.total), 1);
  const hasMixedStatuses = data.some((politician) => politician.status !== 'convicted');

  return (
    <div className="party-ranking">
      <h2 className="party-ranking-title">Distribuție pe partide</h2>

      {hasMixedStatuses && (
        <p className="party-ranking-note">
          Numărul principal reprezintă persoane din selecția curentă, nu doar condamnări definitive.
        </p>
      )}

      <div className="party-ranking-list">
        {rankings.map((ranking, index) => {
          const width = (ranking.total / maxTotal) * 100;
          const showConvictedSubstat = hasMixedStatuses && ranking.convicted > 0;

          return (
            <div
              key={ranking.party}
              className="party-ranking-item"
              data-party-token={getPartyToken(ranking.party)}
            >
              <div className="party-ranking-header">
                <div className="party-ranking-name-group">
                  <span className="party-ranking-index">{index + 1}.</span>
                  <span className="party-ranking-dot" />
                  <span className="party-ranking-name">{ranking.party}</span>
                </div>

                <span className="party-ranking-total">{ranking.total}</span>
              </div>

              <div className="party-ranking-bar-wrap">
                <svg className="party-ranking-bar" viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden="true">
                  <rect className="party-ranking-bar-track" x="0" y="0" width="100" height="4" />
                  <rect className="party-ranking-bar-fill" x="0" y="0" width={width} height="4" />
                </svg>

                {(showConvictedSubstat || ranking.years > 0) && (
                  <div className="party-ranking-substats">
                    {showConvictedSubstat && (
                      <span className="party-ranking-substat">{ranking.convicted} condamnări definitive</span>
                    )}

                    {ranking.years > 0 && (
                      <span className="party-ranking-substat party-ranking-substat--tabular">
                        {formatYears(ranking.years)}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
