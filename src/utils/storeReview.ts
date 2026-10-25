import * as StoreReview from 'expo-store-review';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.secubuzz.app';

const KEY_LAST_REVIEW_PROMPT = 'secubuzz_last_review_prompt_time';
const KEY_STORIES_READ_COUNT = 'secubuzz_stories_read_count';
const MIN_READS_BEFORE_AUTO_PROMPT = 10;
const PROMPT_INTERVAL_DAYS = 60;

/**
 * Triggers native in-app review dialog directly inside the app.
 * If user has already reviewed or triggered it recently (where Google Play's quota blocks it),
 * falling back to direct store listing ensures the user-initiated action never results in a dead button.
 */
export async function requestStoreReview(options: { forceStoreFallbackIfPrompted?: boolean } = {}): Promise<void> {
  const { forceStoreFallbackIfPrompted = false } = options;

  try {
    const isAvailable = await StoreReview.isAvailableAsync();

    if (isAvailable) {
      if (forceStoreFallbackIfPrompted) {
        const lastPromptStr = await AsyncStorage.getItem(KEY_LAST_REVIEW_PROMPT);
        if (lastPromptStr) {
          const lastPrompt = parseInt(lastPromptStr, 10);
          const daysSince = (Date.now() - lastPrompt) / (1000 * 60 * 60 * 24);
          // If prompted recently (within 60 days), Google's quota will block the in-app popup.
          // Open store listing directly so the user can rate/update review without a dead button.
          if (daysSince < PROMPT_INTERVAL_DAYS) {
            await openStoreListing();
            return;
          }
        }
      }

      await StoreReview.requestReview();
      await AsyncStorage.setItem(KEY_LAST_REVIEW_PROMPT, Date.now().toString());
      return;
    }
  } catch (err) {
    console.warn('[SecuBuzz] Native store review failed:', err);
  }

  // Fallback ONLY if native review is completely unsupported by the OS (e.g. desktop web)
  await openStoreListing();
}

/**
 * Directly opens the Google Play Store page (only used on platforms with zero native review support).
 */
export async function openStoreListing(): Promise<void> {
  try {
    await Linking.openURL(PLAY_STORE_URL);
  } catch (err) {
    console.warn('[SecuBuzz] Could not open Play Store URL:', err);
  }
}

/**
 * Checks milestone conditions (e.g. user has read 10+ stories and hasn't been prompted in 60 days)
 * and organically requests native in-app review.
 * Google Play will silently respect its internal quota if prompted recently.
 */
export async function recordStoryReadAndCheckReviewMilestone(): Promise<void> {
  try {
    const readCountStr = await AsyncStorage.getItem(KEY_STORIES_READ_COUNT);
    const count = (parseInt(readCountStr || '0', 10) || 0) + 1;
    await AsyncStorage.setItem(KEY_STORIES_READ_COUNT, count.toString());

    if (count < MIN_READS_BEFORE_AUTO_PROMPT) return;

    const lastPromptStr = await AsyncStorage.getItem(KEY_LAST_REVIEW_PROMPT);
    if (lastPromptStr) {
      const lastPrompt = parseInt(lastPromptStr, 10);
      const daysSince = (Date.now() - lastPrompt) / (1000 * 60 * 60 * 24);
      if (daysSince < PROMPT_INTERVAL_DAYS) return;
    }

    const isAvailable = await StoreReview.isAvailableAsync();
    if (isAvailable) {
      await StoreReview.requestReview();
      await AsyncStorage.setItem(KEY_LAST_REVIEW_PROMPT, Date.now().toString());
    }
  } catch (err) {
    console.warn('[SecuBuzz] Auto-review milestone check error:', err);
  }
}
