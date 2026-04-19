import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getCounty, getCountySlug } from '../utils/geography';

export function CountyRanking({ data }) {
  const counties = useMemo(() => {
    const counts = {};
    data.forEach((p) => {
      const county = getCounty(p);
      if (county) {
        counts[county] = (counts[county] || 0) + 1;
      }
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [data]);

  if (counties.length === 0) return null;

  return (
    <div className="county-ranking">
      <h2 className="party-ranking-title">Distribuție pe județe</h2>
      <div className="county-ranking-grid">
        {counties.map(([name, count]) => (
          <Link
            key={name}
            to={`/judet/${getCountySlug({ county: name })}`}
            className="county-ranking-link"
          >
            <span className="county-ranking-name">{name}</span>
            <span className="county-ranking-count">{count}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
