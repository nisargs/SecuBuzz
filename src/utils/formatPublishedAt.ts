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
 * Formats an article's publication timestamp using
 * the timezone configured on the user's device.
 *
 * The feed stores publishedAt as an absolute timestamp,
 * normally in UTC, for example:
 *
 * 2026-09-13T21:36:00.000Z
 *
 * new Date(...) converts that instant to the device's
 * local timezone. We then use the normal local Date
 * getters instead of manually applying the source
 * article's timezone.
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

  return `${formatClock(
    date.getHours(),
    date.getMinutes(),
  )} · ${formatDate(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  )}`;
}