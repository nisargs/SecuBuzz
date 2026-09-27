import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  AppState,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '../context/ThemeContext';
import {
  DEFAULT_NOTIFICATION_PREFERENCES,
  getNotificationPermissionStatusAsync,
  getNotificationPreferencesAsync,
  isExpoGo,
  registerForPushNotificationsAsync,
  saveNotificationPreferencesAsync,
  type NotificationPreferences,
  type SeverityThreshold,
} from '../services/notificationService';
import { spacing } from '../theme/theme';

export default function NotificationsScreen() {
  const { colors, isDark, accentColor, severityColors } = useTheme();

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [requesting, setRequesting] = useState(false);
  const [preferences, setPreferences] = useState<NotificationPreferences>(
    DEFAULT_NOTIFICATION_PREFERENCES,
  );

  useEffect(() => {
    let isMounted = true;
    async function checkStatus() {
      const status = await getNotificationPermissionStatusAsync();
      const prefs = await getNotificationPreferencesAsync();
      if (isMounted) {
        setNotificationsEnabled(status === 'granted');
        setPreferences(prefs);
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

  async function handleUpdatePreference<K extends keyof NotificationPreferences>(
    key: K,
    value: NotificationPreferences[K],
  ) {
    const next = await saveNotificationPreferencesAsync({ [key]: value });
    setPreferences(next);
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

        {/* ALERT CHANNELS */}
        <Text style={[styles.sectionSubtitle, { color: colors.textMuted }]}>
          ALERT CHANNELS
        </Text>

        <View
          style={[
            styles.channelsCard,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          {/* News Briefs Toggle */}
          <View style={styles.channelRow}>
            <View
              style={[
                styles.channelIconWrap,
                { backgroundColor: `${accentColor}18` },
              ]}
            >
              <Ionicons
                name="newspaper-outline"
                size={20}
                color={accentColor}
              />
            </View>
            <View style={styles.channelTextWrap}>
              <Text style={[styles.channelTitle, { color: colors.textPrimary }]}>
                News Briefs Dispatches
              </Text>
              <Text style={[styles.channelDesc, { color: colors.textSecondary }]}>
                Daily cybersecurity intelligence, data breaches, and incident analysis.
              </Text>
            </View>
            <Switch
              value={preferences.newsBriefs}
              onValueChange={(val) => handleUpdatePreference('newsBriefs', val)}
              trackColor={{
                false: isDark ? '#334155' : '#cbd5e1',
                true: `${accentColor}88`,
              }}
              thumbColor={preferences.newsBriefs ? accentColor : '#94a3b8'}
            />
          </View>

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          {/* Threat Advisories Toggle */}
          <View style={styles.channelRow}>
            <View
              style={[
                styles.channelIconWrap,
                { backgroundColor: `${severityColors.CRITICAL.primary}18` },
              ]}
            >
              <Ionicons
                name="shield-checkmark-outline"
                size={20}
                color={severityColors.CRITICAL.primary}
              />
            </View>
            <View style={styles.channelTextWrap}>
              <Text style={[styles.channelTitle, { color: colors.textPrimary }]}>
                Threat Advisories & Zero-Days
              </Text>
              <Text style={[styles.channelDesc, { color: colors.textSecondary }]}>
                CISA KEV emergency directives, active in-the-wild zero-days, and CVEs.
              </Text>
            </View>
            <Switch
              value={preferences.threatAdvisories}
              onValueChange={(val) =>
                handleUpdatePreference('threatAdvisories', val)
              }
              trackColor={{
                false: isDark ? '#334155' : '#cbd5e1',
                true: `${accentColor}88`,
              }}
              thumbColor={preferences.threatAdvisories ? accentColor : '#94a3b8'}
            />
          </View>
        </View>

        {/* SEVERITY THRESHOLD SELECTOR */}
        <Text style={[styles.sectionSubtitle, { color: colors.textMuted }]}>
          SEVERITY THRESHOLD
        </Text>
        <Text style={[styles.thresholdSubtitle, { color: colors.textSecondary }]}>
          Only dispatch alerts that meet or exceed this threat severity.
        </Text>

        <View style={styles.thresholdList}>
          {/* Critical Only */}
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Select Critical Only threshold"
            onPress={() =>
              handleUpdatePreference('severityThreshold', 'CRITICAL_ONLY')
            }
            style={[
              styles.thresholdCard,
              {
                backgroundColor: colors.surface,
                borderColor:
                  preferences.severityThreshold === 'CRITICAL_ONLY'
                    ? severityColors.CRITICAL.primary
                    : colors.border,
              },
              preferences.severityThreshold === 'CRITICAL_ONLY' &&
                styles.thresholdCardActive,
            ]}
          >
            <View style={styles.thresholdHeader}>
              <View style={styles.thresholdTitleRow}>
                <View
                  style={[
                    styles.severityDot,
                    { backgroundColor: severityColors.CRITICAL.primary },
                  ]}
                />
                <Text
                  style={[styles.thresholdTitle, { color: colors.textPrimary }]}
                >
                  Critical Threats Only
                </Text>
              </View>
              <Ionicons
                name={
                  preferences.severityThreshold === 'CRITICAL_ONLY'
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                size={19}
                color={
                  preferences.severityThreshold === 'CRITICAL_ONLY'
                    ? severityColors.CRITICAL.primary
                    : colors.textMuted
                }
              />
            </View>
            <Text style={[styles.thresholdDesc, { color: colors.textSecondary }]}>
              Active in-the-wild zero-days, CISA Emergency Directives, and unauthenticated RCE on enterprise infrastructure (CVSS 9.0–10.0).
            </Text>
          </Pressable>

          {/* High & Critical (Recommended) */}
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Select High and Critical threshold"
            onPress={() =>
              handleUpdatePreference('severityThreshold', 'HIGH_CRITICAL')
            }
            style={[
              styles.thresholdCard,
              {
                backgroundColor: colors.surface,
                borderColor:
                  preferences.severityThreshold === 'HIGH_CRITICAL'
                    ? accentColor
                    : colors.border,
              },
              preferences.severityThreshold === 'HIGH_CRITICAL' &&
                styles.thresholdCardActive,
            ]}
          >
            <View style={styles.thresholdHeader}>
              <View style={styles.thresholdTitleRow}>
                <View
                  style={[
                    styles.severityDot,
                    { backgroundColor: accentColor },
                  ]}
                />
                <Text
                  style={[styles.thresholdTitle, { color: colors.textPrimary }]}
                >
                  High & Critical (Recommended)
                </Text>
                <View
                  style={[
                    styles.recBadge,
                    { backgroundColor: `${accentColor}22` },
                  ]}
                >
                  <Text
                    style={[styles.recBadgeText, { color: accentColor }]}
                  >
                    BEST
                  </Text>
                </View>
              </View>
              <Ionicons
                name={
                  preferences.severityThreshold === 'HIGH_CRITICAL'
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                size={19}
                color={
                  preferences.severityThreshold === 'HIGH_CRITICAL'
                    ? accentColor
                    : colors.textMuted
                }
              />
            </View>
            <Text style={[styles.thresholdDesc, { color: colors.textSecondary }]}>
              Confirmed major data breaches, CVSS 7.0–8.9 with public PoC, active ransomware campaigns, and nation-state APT bulletins.
            </Text>
          </Pressable>

          {/* All Updates */}
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Select All Updates threshold"
            onPress={() => handleUpdatePreference('severityThreshold', 'ALL')}
            style={[
              styles.thresholdCard,
              {
                backgroundColor: colors.surface,
                borderColor:
                  preferences.severityThreshold === 'ALL'
                    ? colors.textSecondary
                    : colors.border,
              },
              preferences.severityThreshold === 'ALL' &&
                styles.thresholdCardActive,
            ]}
          >
            <View style={styles.thresholdHeader}>
              <View style={styles.thresholdTitleRow}>
                <View
                  style={[
                    styles.severityDot,
                    { backgroundColor: severityColors.LOW.primary },
                  ]}
                />
                <Text
                  style={[styles.thresholdTitle, { color: colors.textPrimary }]}
                >
                  All Security Dispatches
                </Text>
              </View>
              <Ionicons
                name={
                  preferences.severityThreshold === 'ALL'
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                size={19}
                color={
                  preferences.severityThreshold === 'ALL'
                    ? accentColor
                    : colors.textMuted
                }
              />
            </View>
            <Text style={[styles.thresholdDesc, { color: colors.textSecondary }]}>
              Includes routine vulnerability disclosures requiring user interaction (XSS, CSRF), scheduled patches (Patch Tuesday), and surveys.
            </Text>
          </Pressable>
        </View>

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

  channelsCard: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
  },

  channelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },

  channelIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  channelTextWrap: {
    flex: 1,
  },

  channelTitle: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 14,
    marginBottom: 2,
  },

  channelDesc: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    lineHeight: 17,
  },

  thresholdSubtitle: {
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },

  thresholdList: {
    gap: 10,
  },

  thresholdCard: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
  },

  thresholdCardActive: {
    borderWidth: 1.5,
  },

  thresholdHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  thresholdTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },

  thresholdTitle: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 14,
  },

  thresholdDesc: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    lineHeight: 17,
    paddingLeft: 16,
  },

  recBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },

  recBadgeText: {
    fontFamily: 'Exo_700Bold',
    fontSize: 9.5,
    letterSpacing: 0.5,
  },
});
