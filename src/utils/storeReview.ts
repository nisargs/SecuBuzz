import { requireOptionalNativeModule } from 'expo-modules-core';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.secubuzz.app';

const KEY_LAST_REVIEW_PROMPT = 'secubuzz_last_review_prompt_time';
const KEY_STORIES_READ_COUNT = 'secubuzz_stories_read_count';
const MIN_READS_BEFORE_AUTO_PROMPT = 10;
const PROMPT_INTERVAL_DAYS = 60;

interface NativeStoreReviewModule {
  isAvailableAsync?: () => Promise<boolean>;
  requestReview?: () => Promise<void>;
}

function getNativeStoreReview(): NativeStoreReviewModule | null {
  try {
    return requireOptionalNativeModule<NativeStoreReviewModule>('ExpoStoreReview');
  } catch {
    return null;
  }
}

/**
 * Safely checks if native in-app review is supported by the binary.
 * If the native module is not compiled into the current binary (e.g. production v1.0.3 OTA),
 * this returns false without throwing an error or crashing the app.
 */
export async function isStoreReviewAvailable(): Promise<boolean> {
  const nativeModule = getNativeStoreReview();
  if (!nativeModule?.isAvailableAsync) {
    return false;
  }
  try {
    return await nativeModule.isAvailableAsync();
  } catch {
    return false;
  }
}

/**
 * Triggers native in-app review if available in the compiled binary.
 * If native review is not in the binary (or Google Play quota suppresses it),
 * gracefully opens the Google Play Store listing so the user action is never dead.
 */
export async function requestStoreReview(options: { forceStoreFallbackIfPrompted?: boolean } = {}): Promise<void> {
  const { forceStoreFallbackIfPrompted = false } = options;

  const nativeModule = getNativeStoreReview();

  if (nativeModule?.requestReview) {
    try {
      const isAvailable = nativeModule.isAvailableAsync
        ? await nativeModule.isAvailableAsync()
        : true;

      if (isAvailable) {
        if (forceStoreFallbackIfPrompted) {
          const lastPromptStr = await AsyncStorage.getItem(KEY_LAST_REVIEW_PROMPT);
          if (lastPromptStr) {
            const lastPrompt = parseInt(lastPromptStr, 10);
            const daysSince = (Date.now() - lastPrompt) / (1000 * 60 * 60 * 24);
            if (daysSince < PROMPT_INTERVAL_DAYS) {
              await openStoreListing();
              return;
            }
          }
        }

        await nativeModule.requestReview();
        await AsyncStorage.setItem(KEY_LAST_REVIEW_PROMPT, Date.now().toString());
        return;
      }
    } catch (err) {
      console.warn('[SecuBuzz] Native store review failed, falling back to store:', err);
    }
  }

  // Safe fallback: opens Google Play Store directly. Never crashes.
  await openStoreListing();
}

/**
 * Directly opens the Google Play Store page.
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
 * and organically requests native in-app review if supported.
 */
export async function recordStoryReadAndCheckReviewMilestone(): Promise<void> {
  try {
    const nativeModule = getNativeStoreReview();
    if (!nativeModule?.requestReview) return;

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

    const isAvailable = nativeModule.isAvailableAsync
      ? await nativeModule.isAvailableAsync()
      : true;

    if (isAvailable) {
      await nativeModule.requestReview();
      await AsyncStorage.setItem(KEY_LAST_REVIEW_PROMPT, Date.now().toString());
    }
  } catch (err) {
    console.warn('[SecuBuzz] Auto-review milestone check error:', err);
  }
}
