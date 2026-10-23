import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY_LAST_READ_ARTICLE = '@secubuzz_last_read_article_url';
const STORAGE_KEY_LAST_READ_ADVISORY = '@secubuzz_last_read_advisory_id';

const DEFAULT_FIRST_TIME_TARGET = 10;

/**
 * Get the last read article URL from previous sessions.
 */
export async function getLastReadArticleUrl(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(STORAGE_KEY_LAST_READ_ARTICLE);
  } catch {
    return null;
  }
}

/**
 * Record the newest read article URL.
 */
export async function setLastReadArticleUrl(url: string): Promise<void> {
  if (!url) return;
  try {
    await AsyncStorage.setItem(STORAGE_KEY_LAST_READ_ARTICLE, url);
  } catch {
    // Ignore storage errors
  }
}

/**
 * Get the last read advisory ID from previous sessions.
 */
export async function getLastReadAdvisoryId(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(STORAGE_KEY_LAST_READ_ADVISORY);
  } catch {
    return null;
  }
}

/**
 * Record the newest read advisory ID.
 */
export async function setLastReadAdvisoryId(id: string): Promise<void> {
  if (!id) return;
  try {
    await AsyncStorage.setItem(STORAGE_KEY_LAST_READ_ADVISORY, id);
  } catch {
    // Ignore storage errors
  }
}

/**
 * Calculates the unread reading progress percentage (0 - 100).
 * - If unreadTarget === 0: User is fully caught up (100%).
 * - If currentIndex < unreadTarget: Proportional progress (e.g. 4/8 = 50%).
 * - If currentIndex >= unreadTarget: 100% (completed unread target).
 */
export function calculateUnreadProgress(
  currentIndex: number,
  unreadTarget: number,
): number {
  if (unreadTarget <= 0) {
    return 100;
  }
  const currentNum = Math.max(0, currentIndex) + 1;
  const pct = Math.round((currentNum / unreadTarget) * 100);
  return Math.min(100, Math.max(0, pct));
}

/**
 * Resolves the session unread target count based on the last read identifier.
 */
export function resolveUnreadTarget<T>(
  items: T[],
  lastReadId: string | null,
  getId: (item: T) => string,
): number {
  if (!items || items.length === 0) {
    return 0;
  }

  if (!lastReadId) {
    // First time user or reset: set target to freshest slice
    return Math.min(items.length, DEFAULT_FIRST_TIME_TARGET);
  }

  const idx = items.findIndex((item) => getId(item) === lastReadId);
  if (idx === -1) {
    // Item fell off the rolling feed (user has been away for >10 days):
    return Math.min(items.length, DEFAULT_FIRST_TIME_TARGET);
  }

  // If idx === 0, the very newest item was already read previously -> 0 unread (caught up)
  // If idx > 0, there are `idx` new items published ahead of the last read item
  return idx;
}
