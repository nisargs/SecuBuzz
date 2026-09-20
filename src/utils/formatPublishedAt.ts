import type { Article } from '../models/article';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatClock(
  hours: number,
  minutes: number,
): string {
  const suffix = hours >= 12 ? 'pm' : 'am';
  const hour12 = hours % 12 || 12;

  return `${hour12}:${String(minutes).padStart(2, '0')} ${suffix}`;
}

function formatDate(
  year: number,
  month: number,
  day: number,
): string {
  return `${day} ${MONTHS[month] ?? ''}`;
}

/**
 * Returns the short name or code of the device's local time zone (e.g. "IST", "EDT").
 */
export function getLocalTimeZoneShort(date = new Date()): string {
  try {
    const parts = new Intl.DateTimeFormat(undefined, {
      timeZoneName: 'short',
    }).formatToParts(date);

    return parts.find((part) => part.type === 'timeZoneName')?.value ?? '';
  } catch {
    return '';
  }
}

/**
 * Formats an article's publication timestamp using
 * the timezone configured on the user's device.
 *
 * The feed stores publishedAt as an absolute timestamp,
 * in ISO UTC (e.g. 2026-09-18T14:29:00.000Z).
 *
 * new Date(...) converts that instant to the device's
 * local timezone.
 */
export function formatPublishedAt(
  article: Article,
): string {
  const raw = article.publishedAt?.trim() ?? '';

  if (!raw) {
    return 'Unknown date';
  }

  const date = new Date(raw);

  if (Number.isNaN(date.getTime())) {
    return 'Unknown date';
  }

  const timeStr = formatClock(date.getHours(), date.getMinutes());
  const dateStr = formatDate(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );

  return `${timeStr} · ${dateStr}`;
}