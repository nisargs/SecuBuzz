/**
 * Turns an ISO date into a short relative label such as "2h ago".
 */
export function formatRelativeTime(isoDate: string, now: Date = new Date()): string {
  const then = new Date(isoDate);
  const diffMs = now.getTime() - then.getTime();

  if (Number.isNaN(then.getTime())) {
    return '';
  }

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diffMs < minute) {
    return 'just now';
  }
  if (diffMs < hour) {
    const minutes = Math.floor(diffMs / minute);
    return `${minutes}m ago`;
  }
  if (diffMs < day) {
    const hours = Math.floor(diffMs / hour);
    return `${hours}h ago`;
  }

  const days = Math.floor(diffMs / day);
  if (days < 7) {
    return `${days}d ago`;
  }

  return then.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}
