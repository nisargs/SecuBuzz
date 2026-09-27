import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  AppState,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '../context/ThemeContext';
import {
  getNotificationPermissionStatusAsync,
  isExpoGo,
  registerForPushNotificationsAsync,
} from '../services/notificationService';
import { spacing } from '../theme/theme';

export default function NotificationsScreen() {
  const { colors, accentColor, severityColors } = useTheme();

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [requesting, setRequesting] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function checkStatus() {
      const status = await getNotificationPermissionStatusAsync();
      if (isMounted) {
        setNotificationsEnabled(status === 'granted');
      }
    }

    void checkStatus();

    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        void checkStatus();
      }
    });

    return () => {
      isMounted = false;
      subscription.remove();
    };
  }, []);

  async function handleToggleNotifications() {
    if (isExpoGo || requesting) {
      return;
    }

    setRequesting(true);
    try {
      if (!notificationsEnabled) {
        await registerForPushNotificationsAsync(true);
        const status = await getNotificationPermissionStatusAsync();
        setNotificationsEnabled(status === 'granted');
      }
    } finally {
      setRequesting(false);
    }
  }

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.background }]}
      edges={['top', 'bottom']}
    >
      {/* HEADER */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go back"
          hitSlop={12}
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={colors.textPrimary}
          />
        </Pressable>

        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Notifications
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={[styles.sectionEyebrow, { color: accentColor }]}>
          SECURITY DISPATCH
        </Text>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Alert Preferences
        </Text>
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          Configure how and when SecuBuzz alerts your device to urgent cybersecurity developments.
        </Text>

        {/* PRIMARY TOGGLE CARD */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Push notifications toggle"
          onPress={() => void handleToggleNotifications()}
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <View style={styles.cardHeader}>
            <View
              style={[
                styles.iconWrap,
                {
                  backgroundColor: isExpoGo
                    ? `${colors.textMuted}20`
                    : notificationsEnabled
                    ? `${accentColor}20`
                    : `${colors.textMuted}20`,
                },
              ]}
            >
              <Ionicons
                name={
                  isExpoGo
                    ? 'notifications-off-outline'
                    : notificationsEnabled
                    ? 'notifications-outline'
                    : 'notifications-off-outline'
                }
                size={22}
                color={
                  isExpoGo
                    ? colors.textMuted
                    : notificationsEnabled
                    ? accentColor
                    : colors.textMuted
                }
              />
            </View>

            <View style={styles.cardTitleWrap}>
              <Text style={[styles.cardTitle, { color: colors.textPrimary }]}>
                Cybersecurity News Alerts
              </Text>
              <Text
                style={[
                  styles.cardStatus,
                  {
                    color: isExpoGo
                      ? colors.textMuted
                      : notificationsEnabled
                      ? accentColor
                      : colors.textMuted,
                  },
                ]}
              >
                {isExpoGo
                  ? 'Disabled in Expo Go'
                  : notificationsEnabled
                  ? 'Active · Push Enabled'
                  : 'Disabled · Tap to Enable'}
              </Text>
            </View>
          </View>

          <Text style={[styles.cardBody, { color: colors.textSecondary }]}>
            {isExpoGo
              ? 'Push notifications require a preview APK or production build. Notifications are automatically simulated or silenced in Expo Go.'
              : notificationsEnabled
              ? 'Your device is registered to receive timely pushes whenever critical zero-day advisories, major breaches, or enterprise security bulletins are published.'
              : 'Tap to grant permission. Once enabled, you will receive timely notifications when major security incidents occur.'}
          </Text>
        </Pressable>

        {/* SEVERITY POLICY INFO */}
        <Text style={[styles.sectionSubtitle, { color: colors.textMuted }]}>
          DISPATCH POLICIES
        </Text>

        <View
          style={[
            styles.policyCard,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <View style={styles.policyRow}>
            <View
              style={[
                styles.severityDot,
                { backgroundColor: severityColors.CRITICAL.primary },
              ]}
            />
            <View style={styles.policyTextWrap}>
              <Text style={[styles.policyName, { color: colors.textPrimary }]}>
                Critical Threat Telemetry
              </Text>
              <Text style={[styles.policyDesc, { color: colors.textSecondary }]}>
                High-priority immediate push dispatches for active in-the-wild zero-day exploits, CISA Emergency Directives, and unauthenticated RCE on enterprise infrastructure.
              </Text>
            </View>
          </View>

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <View style={styles.policyRow}>
            <View
              style={[
                styles.severityDot,
                { backgroundColor: severityColors.HIGH.primary },
              ]}
            />
            <View style={styles.policyTextWrap}>
              <Text style={[styles.policyName, { color: colors.textPrimary }]}>
                Routine Bulletins & Patches
              </Text>
              <Text style={[styles.policyDesc, { color: colors.textSecondary }]}>
                Standard digests scheduled across your local working day to avoid alert fatigue.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  header: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
  },

  backButton: {
    padding: 4,
  },

  headerTitle: {
    flex: 1,
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    textAlign: 'center',
  },

  headerSpacer: {
    width: 32,
  },

  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: 24,
    paddingBottom: 48,
  },

  sectionEyebrow: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 2,
    marginBottom: 6,
  },

  title: {
    fontFamily: 'Exo_700Bold',
    fontSize: 22,
    lineHeight: 28,
    marginBottom: 8,
  },

  description: {
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
  },

  card: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },

  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardTitleWrap: {
    flex: 1,
  },

  cardTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 15,
  },

  cardStatus: {
    fontFamily: 'Exo_500Medium',
    fontSize: 12,
    marginTop: 2,
  },

  cardBody: {
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
    lineHeight: 19,
  },

  sectionSubtitle: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.4,
    marginTop: 28,
    marginBottom: 10,
  },

  policyCard: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
  },

  policyRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    gap: 12,
  },

  severityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 5,
  },

  policyTextWrap: {
    flex: 1,
  },

  policyName: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 14,
    marginBottom: 4,
  },

  policyDesc: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12.5,
    lineHeight: 18,
  },

  divider: {
    height: 1,
  },
});
