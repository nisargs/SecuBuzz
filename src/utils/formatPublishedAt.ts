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
 * Reads an explicit timezone offset from an ISO date string.
 *
 * Examples:
 *   2026-09-13T15:41:00Z        -> 0
 *   2026-09-13T15:41:00+00:00  -> 0
 *   2026-09-13T15:41:00+05:30  -> 330
 *   2026-09-13T15:41:00-04:00  -> -240
 *
 * Returns null when the timestamp does not contain an explicit
 * timezone.
 */
function timezoneOffsetMinutes(
  raw: string,
): number | null {
  const value = raw.trim();

  if (value.endsWith('Z')) {
    return 0;
  }

  const match = value.match(
    /([+-])(\d{2}):?(\d{2})$/,
  );

  if (!match) {
    return null;
  }

  const sign = match[1] === '+' ? 1 : -1;
  const hours = Number(match[2]);
  const minutes = Number(match[3]);

  if (
    Number.isNaN(hours) ||
    Number.isNaN(minutes)
  ) {
    return null;
  }

  return (
    sign * (hours * 60 + minutes)
  );
}

/**
 * Formats an ISO timestamp while preserving an explicit
 * timezone contained in publishedAt.
 *
 * The timezone itself is intentionally NOT displayed.
 *
 * Example:
 *   2026-09-13T15:41:00+05:30
 *
 * becomes:
 *   3:41 pm · 13 Sep
 */
function formatFromDate(
  date: Date,
  offsetMinutes: number | null,
): string {
  if (offsetMinutes === null) {
    /*
     * No timezone was supplied.
     * Use the device's local timezone.
     */
    return `${formatClock(
      date.getHours(),
      date.getMinutes(),
    )} · ${formatDate(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    )}`;
  }

  /*
   * Date.getTime() is the actual UTC instant.
   *
   * Shift that instant into the timezone represented by
   * the timestamp so that we preserve the publication
   * time from the source.
   */
  const shifted = new Date(
    date.getTime() +
      offsetMinutes * 60 * 1000,
  );

  return `${formatClock(
    shifted.getUTCHours(),
    shifted.getUTCMinutes(),
  )} · ${formatDate(
    shifted.getUTCFullYear(),
    shifted.getUTCMonth(),
    shifted.getUTCDate(),
  )}`;
}

export function formatPublishedAt(
  article: Article,
): string {
  const raw = article.publishedAt?.trim() ?? '';

  if (!raw) {
    return 'Unknown date';
  }

  const parsed = new Date(raw);

  if (Number.isNaN(parsed.getTime())) {
    return 'Unknown date';
  }

  const offsetMinutes =
    timezoneOffsetMinutes(raw);

  return formatFromDate(
    parsed,
    offsetMinutes,
  );
}