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
 * the user's device clock (e.g. "4:00 pm · 28 Oct").
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
