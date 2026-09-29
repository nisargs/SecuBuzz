import { differenceInCalendarDays, format, formatDistanceStrict, parseISO } from 'date-fns';

// Fixed reference point so the prototype's relative times and deadlines stay consistent.
export const NOW = new Date('2026-09-28T16:00:00Z');

export function timeAgo(iso: string): string {
  return formatDistanceStrict(parseISO(iso), NOW, { addSuffix: true });
}

export function shortDate(iso: string): string {
  return format(parseISO(iso), 'MMM d, yyyy');
}

export function clockTime(iso: string): string {
  return format(parseISO(iso), 'HH:mm');
}

export function daysUntil(iso: string): number {
  return differenceInCalendarDays(parseISO(iso), NOW);
}

export function daysSince(iso: string): number {
  return differenceInCalendarDays(NOW, parseISO(iso));
}