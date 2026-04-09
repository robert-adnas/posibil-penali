const STATUS_RANK = {
  convicted: 0,
  first_instance: 1,
  indicted: 2,
  investigated: 3,
  prescribed: 4,
  closed: 5,
  acquitted: 6,
};

function verifiedTimestamp(value) {
  const time = new Date(value).getTime();
  return Number.isFinite(time) ? time : 0;
}

export function formatUpdateDate(value, options = {}) {
  return new Intl.DateTimeFormat(
    'ro-RO',
    options.compact
      ? { day: 'numeric', month: 'short', year: 'numeric' }
      : { day: 'numeric', month: 'long', year: 'numeric' }
  ).format(new Date(value));
}

export function getRecentUpdates(politicians) {
  return [...politicians]
    .filter((politician) => politician.verified_at)
    .sort((left, right) => {
      const dateDelta = verifiedTimestamp(right.verified_at) - verifiedTimestamp(left.verified_at);
      if (dateDelta !== 0) return dateDelta;

      const statusDelta = (STATUS_RANK[left.status] ?? 99) - (STATUS_RANK[right.status] ?? 99);
      if (statusDelta !== 0) return statusDelta;

      return left.name.localeCompare(right.name, 'ro');
    });
}

export function groupRecentUpdatesByDate(items) {
  const grouped = new Map();

  items.forEach((item) => {
    const key = item.verified_at;
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }

    grouped.get(key).push(item);
  });

  return [...grouped.entries()].map(([date, politicians]) => ({
    date,
    politicians,
  }));
}
