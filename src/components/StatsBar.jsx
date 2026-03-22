export function StatsBar({ stats }) {
  return (
    <div className="stats-bar">
      <Stat value={stats.total} label="politicieni" />
      <Stat value={stats.convicted} label="condamnați" accent />
      <Stat value={stats.totalPrisonYears} label="ani de pușcărie" />
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
