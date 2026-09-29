import { differenceInCalendarDays, format, parseISO } from 'date-fns';

export function timeAgo(iso: string): string {
  try {
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

export function shortDate(iso: string): string {
  try {
    return format(parseISO(iso), 'MMM d, yyyy');
  } catch {
    return '';
  }
}

export function clockTime(iso: string): string {
  try {
    return format(parseISO(iso), 'HH:mm');
  } catch {
    return '';
  }
}

export function daysUntil(iso: string): number {
  try {
    return differenceInCalendarDays(parseISO(iso), new Date());
  } catch {
    return 0;
  }
}

export function daysSince(iso: string): number {
  try {
    return differenceInCalendarDays(new Date(), parseISO(iso));
  } catch {
    return 0;
  }
}