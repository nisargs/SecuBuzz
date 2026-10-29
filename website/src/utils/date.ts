import { differenceInCalendarDays, format, parseISO } from 'date-fns';

export function isValidDate(iso?: string | null): boolean {
  if (!iso || typeof iso !== 'string') return false;
  // Must match date pattern (e.g. YYYY-MM-DD or ISO 8601)
  if (!/^\d{4}-\d{2}-\d{2}/.test(iso)) return false;
  try {
    const then = parseISO(iso);
    return !Number.isNaN(then.getTime());
  } catch {
    return false;
  }
}

export function timeAgo(iso: string): string {
  try {
    if (!isValidDate(iso)) return '';
    const then = parseISO(iso);
    const now = new Date();
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

    return format(then, 'MMM d, yyyy');
  } catch {
    return '';
  }
}

export function shortDate(iso?: string | null): string {
  if (!iso || !isValidDate(iso)) {
    return '—';
  }
  try {
    return format(parseISO(iso), 'MMM d, yyyy');
  } catch {
    return '—';
  }
}

export function shortDateUTC(iso?: string | null): string {
  if (!iso || !isValidDate(iso)) return '—';
  try {
    const d = new Date(iso);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
  } catch {
    return '—';
  }
}

export function clockTime(iso: string): string {
  try {
    if (!isValidDate(iso)) return '';
    return format(parseISO(iso), 'HH:mm');
  } catch {
    return '';
  }
}

export function clockTimeUTC(iso: string): string {
  try {
    if (!isValidDate(iso)) return '';
    const d = new Date(iso);
    const hours = String(d.getUTCHours()).padStart(2, '0');
    const minutes = String(d.getUTCMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  } catch {
    return '';
  }
}

export function daysUntil(iso?: string | null): number {
  if (!iso || !isValidDate(iso)) {
    return NaN;
  }
  try {
    return differenceInCalendarDays(parseISO(iso), new Date());
  } catch {
    return NaN;
  }
}

export function daysSince(iso?: string | null): number {
  if (!iso || !isValidDate(iso)) {
    return NaN;
  }
  try {
    return differenceInCalendarDays(new Date(), parseISO(iso));
  } catch {
    return NaN;
  }
}