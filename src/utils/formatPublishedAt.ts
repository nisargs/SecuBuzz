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

const KNOWN_TIMEZONES: Record<string, number> = {
  UTC: 0,
  GMT: 0,
  EST: -300,
  EDT: -240,
  CST: -360,
  CDT: -300,
  MST: -420,
  MDT: -360,
  PST: -480,
  PDT: -420,
};

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
  const currentYear = new Date().getFullYear();

  if (year !== currentYear) {
    return `${day} ${MONTHS[month]} ${year}`;
  }

  return `${day} ${MONTHS[month]}`;
}

function timezoneOffsetMinutes(
  raw: string,
): number | null {
  const numericMatch = raw.match(
    /(?:^|\s)(Z|[+-]\d{2}:?\d{2})(?:\s|$)/i,
  );

  if (numericMatch) {
    const value = numericMatch[1].toUpperCase();

    if (value === 'Z') {
      return 0;
    }

    const normalized = value.replace(':', '');

    const sign =
      normalized[0] === '-' ? -1 : 1;

    const hours = Number(
      normalized.slice(1, 3),
    );

    const minutes = Number(
      normalized.slice(3, 5),
    );

    return sign * (hours * 60 + minutes);
  }

  const abbreviationMatch = raw.match(
    /\b(UTC|GMT|EST|EDT|CST|CDT|MST|MDT|PST|PDT)\b/i,
  );

  if (abbreviationMatch) {
    return (
      KNOWN_TIMEZONES[
        abbreviationMatch[1].toUpperCase()
      ] ?? null
    );
  }

  return null;
}

function formatFromDate(
  iso: string,
  offsetMinutes: number | null,
): string | null {
  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  /*
   * If the source explicitly provided a timezone,
   * shift the UTC instant into that source timezone
   * and then read the UTC components.
   *
   * The timezone itself is intentionally NOT displayed.
   */
  if (offsetMinutes !== null) {
    const shifted = new Date(
      date.getTime() +
        offsetMinutes * 60 * 1000,
    );

    const year = shifted.getUTCFullYear();
    const month = shifted.getUTCMonth();
    const day = shifted.getUTCDate();
    const hours = shifted.getUTCHours();
    const minutes = shifted.getUTCMinutes();

    return `${formatClock(hours, minutes)} · ${formatDate(
      year,
      month,
      day,
    )}`;
  }

  /*
   * No explicit timezone was supplied.
   * Use the device-local representation of the timestamp.
   */
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${formatClock(hours, minutes)} · ${formatDate(
    year,
    month,
    day,
  )}`;
}

export function formatPublishedAt(
  article: Article,
): string {
  const raw =
    article.publishedAtRaw?.trim() || '';

  if (raw) {
    const offsetMinutes =
      timezoneOffsetMinutes(raw);

    /*
     * Parse the original RSS value.
     */
    const parsed = new Date(raw);

    if (!Number.isNaN(parsed.getTime())) {
      const base = formatFromDate(
        article.publishedAt,
        offsetMinutes,
      );

      if (base) {
        /*
         * Keep the article's original publication
         * time, but do not display GMT/UTC offsets.
         */
        return base;
      }
    }

    /*
     * Some feeds give a date without a usable time.
     * Fall back to extracting the date from the raw value.
     */
    const dateMatch = raw.match(
      /(\d{4})-(\d{2})-(\d{2})/,
    );

    if (dateMatch) {
      const year = Number(dateMatch[1]);
      const month =
        Number(dateMatch[2]) - 1;
      const day = Number(dateMatch[3]);

      return formatDate(
        year,
        month,
        day,
      );
    }
  }

  /*
   * Final fallback to normalized publishedAt.
   */
  const fallback = new Date(
    article.publishedAt,
  );

  if (Number.isNaN(fallback.getTime())) {
    return 'Date unavailable';
  }

  return (
    formatFromDate(
      article.publishedAt,
      null,
    ) || 'Date unavailable'
  );
}