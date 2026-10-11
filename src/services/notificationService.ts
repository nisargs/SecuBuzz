import AsyncStorage from '@react-native-async-storage/async-storage';
import { isRunningInExpoGo } from 'expo';
import Constants, { ExecutionEnvironment } from 'expo-constants';
import * as Device from 'expo-device';
import type * as NotificationsType from 'expo-notifications';
import { Platform } from 'react-native';

export const isExpoGo =
  isRunningInExpoGo() ||
  Constants.appOwnership === 'expo' ||
  Constants.executionEnvironment === ExecutionEnvironment.StoreClient ||
  (Constants.executionEnvironment as string) === 'storeClient';

/**
 * Lazily loads expo-notifications only in standalone/development builds.
 * In Expo Go on Android (SDK 53+), importing expo-notifications at top level throws
 * an uncaught error because remote push notifications were removed from Expo Go.
 */
function getNotifications(): typeof NotificationsType | null {
  if (isExpoGo) {
    return null;
  }
  try {
    return require('expo-notifications');
  } catch (err) {
    console.warn('SecuBuzz: Could not load expo-notifications module:', err);
    return null;
  }
}

const STORAGE_KEY_TOKEN = '@secubuzz_push_token';
const STORAGE_KEY_PERMISSION_REQUESTED = '@secubuzz_push_permission_requested';
const STORAGE_KEY_LAST_REGISTERED = '@secubuzz_push_token_last_registered';
const STORAGE_KEY_PREFERENCES = '@secubuzz_notification_preferences';

export type SeverityThreshold = 'ALL' | 'HIGH_CRITICAL' | 'CRITICAL_ONLY';

export interface NotificationPreferences {
  newsBriefs: boolean;
  threatAdvisories: boolean;
  severityThreshold: SeverityThreshold;
}

export const DEFAULT_NOTIFICATION_PREFERENCES: NotificationPreferences = {
  newsBriefs: true,
  threatAdvisories: true,
  severityThreshold: 'HIGH_CRITICAL',
};

export async function getNotificationPreferencesAsync(): Promise<NotificationPreferences> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY_PREFERENCES);
    if (!raw) return DEFAULT_NOTIFICATION_PREFERENCES;
    const parsed = JSON.parse(raw);
    return {
      newsBriefs: parsed.newsBriefs ?? DEFAULT_NOTIFICATION_PREFERENCES.newsBriefs,
      threatAdvisories:
        parsed.threatAdvisories ?? DEFAULT_NOTIFICATION_PREFERENCES.threatAdvisories,
      severityThreshold:
        parsed.severityThreshold ?? DEFAULT_NOTIFICATION_PREFERENCES.severityThreshold,
    };
  } catch {
    return DEFAULT_NOTIFICATION_PREFERENCES;
  }
}

export async function saveNotificationPreferencesAsync(
  updates: Partial<NotificationPreferences>,
): Promise<NotificationPreferences> {
  try {
    const current = await getNotificationPreferencesAsync();
    const next: NotificationPreferences = { ...current, ...updates };
    await AsyncStorage.setItem(STORAGE_KEY_PREFERENCES, JSON.stringify(next));

    // Proactively sync updated user alert preferences to Cloudflare D1 backend immediately
    void syncTokenWithBackendAsync(null, true, next);

    return next;
  } catch (err) {
    console.warn('SecuBuzz: Could not save notification preferences:', err);
    return DEFAULT_NOTIFICATION_PREFERENCES;
  }
}

export const ANDROID_CHANNEL_BRIEFS = 'secubuzz-briefs';
export const ANDROID_CHANNEL_ADVISORIES = 'secubuzz-advisories';
export const ANDROID_CHANNEL_CRITICAL = 'secubuzz-critical';
export const ANDROID_CHANNEL_ID = 'secubuzz-news';

// Fallback to configured Cloudflare Worker URL or app.json extra
const DEFAULT_API_URL =
  Constants.expoConfig?.extra?.pushTokenApiUrl ??
  'https://secubuzz-push.secubuzz.workers.dev/api/push-tokens';

/**
 * Configure foreground notification presentation with respect to user preferences.
 * Shows a banner and list entry only if enabled by user filters.
 * Note: Notifications are disabled in Expo Go on Android (SDK 53+).
 */
if (!isExpoGo) {
  const Notifications = getNotifications();
  if (Notifications) {
    try {
      Notifications.setNotificationHandler({
        handleNotification: async (notification) => {
          try {
            const data: any = notification.request.content.data;
            const prefs = await getNotificationPreferencesAsync();

            const notifType = String(data?.type || '').toLowerCase();
            const notifSeverity = String(data?.severity || '').toUpperCase();

            // Check content type filters
            if (notifType === 'brief' && !prefs.newsBriefs) {
              return {
                shouldPlaySound: false,
                shouldSetBadge: false,
                shouldShowBanner: false,
                shouldShowList: false,
              };
            }

            if (
              (notifType === 'advisory' || notifType === 'cve') &&
              !prefs.threatAdvisories
            ) {
              return {
                shouldPlaySound: false,
                shouldSetBadge: false,
                shouldShowBanner: false,
                shouldShowList: false,
              };
            }

            // Check severity threshold filter
            if (
              prefs.severityThreshold === 'CRITICAL_ONLY' &&
              notifSeverity !== 'CRITICAL'
            ) {
              return {
                shouldPlaySound: false,
                shouldSetBadge: false,
                shouldShowBanner: false,
                shouldShowList: false,
              };
            }

            if (
              prefs.severityThreshold === 'HIGH_CRITICAL' &&
              notifSeverity !== 'CRITICAL' &&
              notifSeverity !== 'HIGH'
            ) {
              return {
                shouldPlaySound: false,
                shouldSetBadge: false,
                shouldShowBanner: false,
                shouldShowList: false,
              };
            }

            return {
              shouldPlaySound: false,
              shouldSetBadge: false,
              shouldShowBanner: true,
              shouldShowList: true,
            };
          } catch {
            return {
              shouldPlaySound: false,
              shouldSetBadge: false,
              shouldShowBanner: true,
              shouldShowList: true,
            };
          }
        },
      });
    } catch (err) {
      console.warn('SecuBuzz: Notification handler setup error:', err);
    }
  }
}

/**
 * Ensures all Android notification channels exist with distinct categories.
 * Required on Android 8.0+ and particularly Android 13+ before permissions/tokens.
 */
export async function setupNotificationChannelAsync(): Promise<void> {
  if (Platform.OS !== 'android' || isExpoGo) {
    return;
  }

  const Notifications = getNotifications();
  if (!Notifications) {
    return;
  }

  try {
    // 1. News Briefs Channel
    await Notifications.setNotificationChannelAsync(ANDROID_CHANNEL_BRIEFS, {
      name: 'News Briefs',
      description: 'Instant alerts when new 60-word cybersecurity briefs are published',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#4CC9F0',
      enableLights: true,
      enableVibrate: true,
      showBadge: false,
    });

    // 2. Threat Advisories Channel
    await Notifications.setNotificationChannelAsync(ANDROID_CHANNEL_ADVISORIES, {
      name: 'Threat Advisories & Zero-Days',
      description: 'CISA KEV catalog updates and active CVE security advisories',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#F59E0B',
      enableLights: true,
      enableVibrate: true,
      showBadge: false,
    });

    // 3. Critical Threats Channel (Max Importance)
    await Notifications.setNotificationChannelAsync(ANDROID_CHANNEL_CRITICAL, {
      name: 'Critical & Zero-Day Alerts',
      description: 'Urgent alerts for active zero-day exploits and ransomware campaigns',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 500, 250, 500],
      lightColor: '#EF4444',
      enableLights: true,
      enableVibrate: true,
      showBadge: true,
    });

    // 4. Legacy fallback channel
    await Notifications.setNotificationChannelAsync(ANDROID_CHANNEL_ID, {
      name: 'SecuBuzz General',
      description: 'General cybersecurity alerts and application dispatches',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#4CC9F0',
      enableLights: true,
      enableVibrate: true,
      showBadge: false,
    });
  } catch (error) {
    console.warn('SecuBuzz: Failed to configure notification channels:', error);
  }
}

/**
 * Checks current notification permission status.
 */
export async function getNotificationPermissionStatusAsync(): Promise<NotificationsType.PermissionStatus> {
  if (isExpoGo) {
    return 'undetermined' as NotificationsType.PermissionStatus;
  }

  const Notifications = getNotifications();
  if (!Notifications) {
    return 'undetermined' as NotificationsType.PermissionStatus;
  }

  try {
    const { status } = await Notifications.getPermissionsAsync();
    return status;
  } catch (error) {
    console.warn('SecuBuzz: Could not read notification permissions:', error);
    return 'undetermined' as NotificationsType.PermissionStatus;
  }
}

/**
 * Safely registers push notifications without repeated prompts or annoying loops.
 * @param forceRequest - If true, requests permission even if previously prompted (e.g. from Settings).
 */
export async function registerForPushNotificationsAsync(
  forceRequest = false
): Promise<string | null> {
  if (isExpoGo) {
    console.log(
      'SecuBuzz: Push notifications are disabled in Expo Go. Use a development build or preview/production APK.'
    );
    return null;
  }

  // Push tokens are only valid on real physical devices
  if (!Device.isDevice) {
    console.log('SecuBuzz: Push notifications require a physical device.');
    return null;
  }

  const Notifications = getNotifications();
  if (!Notifications) {
    return null;
  }

  try {
    // 1. Ensure notification channel is ready on Android
    await setupNotificationChannelAsync();

    // 2. Check existing permission status
    let { status } = await Notifications.getPermissionsAsync();

    if (status !== 'granted') {
      const hasPrompted = await AsyncStorage.getItem(STORAGE_KEY_PERMISSION_REQUESTED);

      // If already prompted once and denied, do not ask again unless explicitly triggered
      if (hasPrompted === 'true' && !forceRequest) {
        return null;
      }

      // Mark that we have now requested permission
      await AsyncStorage.setItem(STORAGE_KEY_PERMISSION_REQUESTED, 'true');

      const requested = await Notifications.requestPermissionsAsync();
      status = requested.status;
    }

    if (status !== 'granted') {
      return null;
    }

    // 3. Resolve Project ID from EAS config
    const projectId =
      Constants.expoConfig?.extra?.eas?.projectId ??
      Constants.easConfig?.projectId ??
      '51de636f-84a1-4295-9b85-02c3c406d964';

    if (!projectId) {
      console.warn('SecuBuzz: Missing EAS Project ID for push token registration.');
      return null;
    }

    // 4. Retrieve Expo push token
    const tokenResult = await Notifications.getExpoPushTokenAsync({
      projectId,
    });
    const token = tokenResult.data;

    if (
      !token ||
      (!token.startsWith('ExponentPushToken[') && !token.startsWith('ExpoPushToken['))
    ) {
      console.warn('SecuBuzz: Invalid token returned from Expo:', token);
      return null;
    }

    // Save token locally
    await AsyncStorage.setItem(STORAGE_KEY_TOKEN, token);

    // 5. Register with backend (Cloudflare Worker) including user preferences
    void syncTokenWithBackendAsync(token, true);

    return token;
  } catch (error) {
    console.warn('SecuBuzz: Failed to register push token:', error);
    return null;
  }
}

/**
 * Sends token and user preferences to the backend endpoint idempotently.
 * @param token - Expo push token (optional, will read from AsyncStorage if omitted)
 * @param force - If true, ignores 24-hour rate limit to sync immediately (e.g. on preference change)
 * @param prefsOverride - Pre-resolved preferences to avoid an extra storage read
 */
export async function syncTokenWithBackendAsync(
  token?: string | null,
  force = false,
  prefsOverride?: NotificationPreferences,
): Promise<boolean> {
  try {
    const resolvedToken = token || (await AsyncStorage.getItem(STORAGE_KEY_TOKEN));
    if (!resolvedToken) {
      return false;
    }

    const lastSyncStr = await AsyncStorage.getItem(STORAGE_KEY_LAST_REGISTERED);
    const now = Date.now();

    // Avoid excessive re-registrations if synced within the last 24 hours (unless explicitly forced)
    if (!force && lastSyncStr) {
      const lastSync = Number(lastSyncStr);
      if (now - lastSync < 24 * 60 * 60 * 1000) {
        return true;
      }
    }

    const appVersion = Constants.expoConfig?.version ?? '1.0.0';
    const prefs = prefsOverride || (await getNotificationPreferencesAsync());

    const response = await fetch(DEFAULT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: resolvedToken,
        platform: Platform.OS,
        appVersion,
        newsBriefs: prefs.newsBriefs,
        threatAdvisories: prefs.threatAdvisories,
        severityThreshold: prefs.severityThreshold,
      }),
    });

    if (response.ok) {
      await AsyncStorage.setItem(STORAGE_KEY_LAST_REGISTERED, String(now));
      return true;
    } else {
      console.warn(
        'SecuBuzz: Backend rejected push token registration:',
        response.status,
        await response.text(),
      );
      return false;
    }
  } catch (error) {
    // Network failure or backend temporarily unavailable: app must continue functioning normally
    console.warn('SecuBuzz: Could not contact push token backend (will retry later):', error);
    return false;
  }
}

