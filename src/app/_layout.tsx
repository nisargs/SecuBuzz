import type * as NotificationsType from 'expo-notifications';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { getArticleRepository } from '../data/getArticleRepository';
import { SavedArticlesProvider } from '../context/SavedArticlesContext';
import { isExpoGo, registerForPushNotificationsAsync } from '../services/notificationService';
import { exoFonts } from '../theme/fonts';

SplashScreen.preventAutoHideAsync();

function RootNavigator() {
  const { colors, isDark } = useTheme();

  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="article/[...id]" />

        <Stack.Screen name="appearance" />
        <Stack.Screen name="notifications" />
        <Stack.Screen name="about-support" />
        <Stack.Screen name="legal" />

        <Stack.Screen name="privacy" />
        <Stack.Screen name="terms" />
        <Stack.Screen name="data-privacy" />
        <Stack.Screen name="about" />
        <Stack.Screen name="licenses" />
        <Stack.Screen name="contact" />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  const router = useRouter();

  const [loaded, error] = useFonts({
    Exo_400Regular: exoFonts.regular,
    Exo_500Medium: exoFonts.medium,
    Exo_600SemiBold: exoFonts.semiBold,
    Exo_700Bold: exoFonts.bold,
    Exo_800ExtraBold: exoFonts.extraBold,
  });

  useEffect(() => {
    if (loaded || error) {
      void SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Proactive Over-The-Air (OTA) update check on launch
  // Fetches fresh OTA bundle silently in the background; will apply seamlessly on next natural restart
  // without abruptly aborting notification launches with an in-flight reloadAsync().
  useEffect(() => {
    if (__DEV__ || isExpoGo) return;
    let isMounted = true;
    async function checkOta() {
      try {
        const Updates = require('expo-updates');
        if (Updates?.isEnabled) {
          const update = await Updates.checkForUpdateAsync();
          if (update.isAvailable) {
            await Updates.fetchUpdateAsync();
            // Intentionally omit Updates.reloadAsync() on cold launch to avoid interrupting
            // user notification taps or cold-start interactions. The update will apply on next restart.
          }
        }
      } catch (e) {
        // Fail gracefully without interrupting app experience
      }
    }
    void checkOta();
    return () => {
      isMounted = false;
    };
  }, []);

  // Notification response observer for cold-start and background taps
  // MUST wait until loaded is true so the root Stack navigator is fully mounted
  useEffect(() => {
    if (!loaded || isExpoGo) {
      return;
    }

    let Notifications: typeof NotificationsType | null = null;
    try {
      Notifications = require('expo-notifications');
    } catch (e) {
      console.warn('SecuBuzz: Failed to load expo-notifications in layout:', e);
      return;
    }

    if (!Notifications) {
      return;
    }

    function handleNotificationResponse(
      response: NotificationsType.NotificationResponse
    ) {
      try {
        const data = response?.notification?.request?.content?.data;
        const articleId =
          typeof data?.articleId === 'string'
            ? data.articleId
            : typeof data?.articleUrl === 'string'
              ? data.articleUrl
              : typeof data?.cveID === 'string'
                ? data.cveID
                : null;

        if (articleId) {
          // Micro-task delay ensures RootNavigator has fully mounted its navigation container
          setTimeout(() => {
            try {
              const safeSegment = encodeURIComponent(articleId);
              router.push({
                pathname: '/article/[...id]',
                params: {
                  id: [safeSegment],
                  url: articleId,
                  headline: typeof data?.headline === 'string' ? data.headline : undefined,
                  summary: typeof data?.summary === 'string' ? data.summary : undefined,
                  category: typeof data?.category === 'string' ? data.category : undefined,
                  severity: typeof data?.severity === 'string' ? data.severity : undefined,
                  source: typeof data?.source === 'string' ? data.source : undefined,
                  publishedAt:
                    typeof data?.publishedAt === 'string'
                      ? data.publishedAt
                      : undefined,
                },
              });
            } catch (navErr) {
              console.warn('SecuBuzz: Deferred notification router.push failed:', navErr);
            }
          }, 150);
        }
      } catch (err) {
        console.warn('SecuBuzz: Notification tap handling error:', err);
      }
    }

    let responseSubscription: NotificationsType.Subscription | undefined;
    let receivedSubscription: NotificationsType.Subscription | undefined;

    try {
      // Handle launch from notification when app was completely closed
      Notifications.getLastNotificationResponseAsync()
        .then((response) => {
          if (response) {
            handleNotificationResponse(response);
          }
        })
        .catch((err) => {
          console.warn('SecuBuzz: getLastNotificationResponseAsync error:', err);
        });

      // Handle tap from background or foreground
      responseSubscription =
        Notifications.addNotificationResponseReceivedListener(
          handleNotificationResponse
        );

      // When a notification arrives while app is open, pre-fetch latest feed
      receivedSubscription =
        Notifications.addNotificationReceivedListener(() => {
          void getArticleRepository().getArticles();
        });
    } catch (err) {
      console.warn('SecuBuzz: Failed to attach notification listeners:', err);
    }

    return () => {
      responseSubscription?.remove();
      receivedSubscription?.remove();
    };
  }, [loaded, router]);

  // Request notification permission once at first-use flow after app loads
  useEffect(() => {
    if (loaded && !isExpoGo) {
      void registerForPushNotificationsAsync();
    }
  }, [loaded]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <SavedArticlesProvider>
        <RootNavigator />
      </SavedArticlesProvider>
    </ThemeProvider>
  );
}