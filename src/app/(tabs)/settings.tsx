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

import { useTheme } from '../../context/ThemeContext';
import {
  getNotificationPermissionStatusAsync,
  isExpoGo,
} from '../../services/notificationService';
import { accentPresets, type AccentPresetKey, spacing } from '../../theme/theme';

type ParentOptionProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  badge?: string;
  onPress: () => void;
  accentColor: string;
  colors: ReturnType<typeof useTheme>['colors'];
};

function ParentOptionRow({
  icon,
  title,
  subtitle,
  badge,
  onPress,
  accentColor,
  colors,
}: ParentOptionProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        pressed && styles.rowPressed,
      ]}
    >
      <View
        style={[
          styles.iconWrap,
          {
            backgroundColor: `${accentColor}15`,
          },
        ]}
      >
        <Ionicons
          name={icon}
          size={22}
          color={accentColor}
        />
      </View>

      <View style={styles.rowContent}>
        <View style={styles.titleRow}>
          <Text style={[styles.rowTitle, { color: colors.textPrimary }]}>
            {title}
          </Text>
          {badge ? (
            <View
              style={[
                styles.badge,
                {
                  backgroundColor: `${accentColor}20`,
                },
              ]}
            >
              <Text style={[styles.badgeText, { color: accentColor }]}>
                {badge}
              </Text>
            </View>
          ) : null}
        </View>

        <Text style={[styles.rowSubtitle, { color: colors.textMuted }]}>
          {subtitle}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color={colors.textMuted}
      />
    </Pressable>
  );
}

const ACCENT_LABELS: Record<AccentPresetKey, string> = {
  cyan: 'Classic Cyan',
  teal: 'Modern Teal',
  cobalt: 'Cobalt Blue',
  green: 'Matrix Emerald',
  amber: 'Radar Amber',
  slate: 'Titanium Slate',
};

export default function SettingsScreen() {
  const {
    themeMode,
    isDark,
    accentKey,
    accentColor,
    colors,
  } = useTheme();

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

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

  const themeDisplay =
    themeMode === 'system'
      ? `System (${isDark ? 'Dark' : 'Light'})`
      : isDark
      ? 'Dark Mode'
      : 'Light Mode';

  const accentDisplay = ACCENT_LABELS[accentKey] ?? 'Cyan';

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.background }]}
      edges={['top']}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.textPrimary }]}>
            Settings
          </Text>

          <Text style={[styles.subtitle, { color: accentColor }]}>
            PREFERENCES & CONFIGURATION
          </Text>
        </View>

        {/* PARENT OPTIONS GROUP */}
        <View
          style={[
            styles.parentCard,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          {/* 1. APPEARANCE */}
          <ParentOptionRow
            icon="color-palette-outline"
            title="Appearance & Theme"
            subtitle={`${themeDisplay} · ${accentDisplay}`}
            onPress={() => router.push('/appearance')}
            accentColor={accentColor}
            colors={colors}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          {/* 2. NOTIFICATIONS */}
          <ParentOptionRow
            icon="notifications-outline"
            title="Notifications"
            subtitle={
              isExpoGo
                ? 'Preview / APK Only'
                : notificationsEnabled
                ? 'Active · Push Alerts Enabled'
                : 'Disabled · Tap to Configure'
            }
            badge={notificationsEnabled ? 'ACTIVE' : undefined}
            onPress={() => router.push('/notifications')}
            accentColor={accentColor}
            colors={colors}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          {/* 3. ABOUT & SUPPORT */}
          <ParentOptionRow
            icon="information-circle-outline"
            title="About & Support"
            subtitle="Feedback, version 1.0.1 & licenses"
            onPress={() => router.push('/about-support')}
            accentColor={accentColor}
            colors={colors}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          {/* 4. LEGAL & PRIVACY */}
          <ParentOptionRow
            icon="shield-checkmark-outline"
            title="Legal & Privacy"
            subtitle="Privacy Policy, terms & data rights"
            onPress={() => router.push('/legal')}
            accentColor={accentColor}
            colors={colors}
          />
        </View>

        {/* BOTTOM ATTRIBUTION */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: colors.textMuted }]}>
            SecuBuzz Intelligence · Version 1.0.1
          </Text>
          <Text style={[styles.footerSubtext, { color: colors.textMuted }]}>
            Crafted by MiSo Labs
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: 48,
  },

  header: {
    paddingTop: spacing.sm,
    paddingBottom: 24,
  },

  title: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '800',
  },

  subtitle: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 2,
    marginTop: 6,
  },

  parentCard: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 18,
    gap: 14,
  },

  rowPressed: {
    opacity: 0.7,
  },

  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowContent: {
    flex: 1,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },

  rowTitle: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 15,
  },

  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },

  badgeText: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 9.5,
    letterSpacing: 0.8,
  },

  rowSubtitle: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12.5,
    lineHeight: 17,
  },

  divider: {
    height: 1,
    marginLeft: 70,
  },

  footer: {
    alignItems: 'center',
    marginTop: 36,
    gap: 4,
  },

  footerText: {
    fontFamily: 'Exo_500Medium',
    fontSize: 12,
  },

  footerSubtext: {
    fontFamily: 'Exo_400Regular',
    fontSize: 11,
  },
});