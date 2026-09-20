import type * as NotificationsType from 'expo-notifications';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { getArticleRepository } from '../data/getArticleRepository';
import { SavedArticlesProvider } from '../context/SavedArticlesContext';
import { isExpoGo, registerForPushNotificationsAsync } from '../services/notificationService';
import { exoFonts } from '../theme/fonts';
import { colors } from '../theme/theme';

SplashScreen.preventAutoHideAsync();

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

  // Notification response observer for cold-start and background taps
  useEffect(() => {
    if (isExpoGo) {
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
        if (data?.type === 'article' && typeof data.articleId === 'string') {
          router.push({
            pathname: '/article/[id]',
            params: { id: data.articleId },
          });
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
  }, [router]);

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
    <SavedArticlesProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="article/[id]" />

        <Stack.Screen name="privacy" />
        <Stack.Screen name="terms" />
        <Stack.Screen name="data-privacy" />
        <Stack.Screen name="about" />
        <Stack.Screen name="licenses" />
        <Stack.Screen name="contact" />
      </Stack>
    </SavedArticlesProvider>
  );
}