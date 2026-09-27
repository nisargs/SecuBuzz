import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme, type ThemeMode } from '../context/ThemeContext';
import { accentPresets, type AccentPresetKey, spacing } from '../theme/theme';

const ACCENT_OPTIONS: { key: AccentPresetKey; label: string; color: string }[] = [
  { key: 'cyan', label: 'Classic Cyan', color: accentPresets.cyan },
  { key: 'teal', label: 'Modern Teal', color: accentPresets.teal },
  { key: 'cobalt', label: 'Cobalt Blue', color: accentPresets.cobalt },
  { key: 'green', label: 'Matrix Emerald', color: accentPresets.green },
  { key: 'amber', label: 'Radar Amber', color: accentPresets.amber },
  { key: 'slate', label: 'Titanium Slate', color: accentPresets.slate },
];

const THEME_OPTIONS: { mode: ThemeMode; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { mode: 'system', label: 'System', icon: 'phone-portrait-outline' },
  { mode: 'dark', label: 'Dark Mode', icon: 'moon-outline' },
  { mode: 'light', label: 'Light Mode', icon: 'sunny-outline' },
];

export default function AppearanceScreen() {
  const {
    themeMode,
    setThemeMode,
    isDark,
    accentKey,
    setAccentKey,
    accentColor,
    colors,
  } = useTheme();

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
          Appearance
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={[styles.sectionEyebrow, { color: accentColor }]}>
          VISUAL ARCHITECTURE
        </Text>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Theme & Display
        </Text>
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          Customize how SecuBuzz renders on your screen. Choose between a high-contrast dark room interface or a clean daylight architectural slate.
        </Text>

        {/* THEME MODE CARD */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <View style={styles.cardHeader}>
            <Ionicons
              name="contrast-outline"
              size={20}
              color={accentColor}
            />
            <Text style={[styles.cardTitle, { color: colors.textPrimary }]}>
              Color Mode
            </Text>
          </View>

          <View
            style={[
              styles.modeSelectorWrap,
              {
                backgroundColor: colors.surfaceRaised,
                borderColor: colors.border,
              },
            ]}
          >
            {THEME_OPTIONS.map((opt) => {
              const isActive = themeMode === opt.mode;
              return (
                <Pressable
                  key={opt.mode}
                  onPress={() => void setThemeMode(opt.mode)}
                  style={[
                    styles.modeOption,
                    isActive && {
                      backgroundColor: colors.surface,
                      borderColor: accentColor,
                      borderWidth: 1,
                    },
                  ]}
                >
                  <Ionicons
                    name={opt.icon}
                    size={16}
                    color={isActive ? accentColor : colors.textMuted}
                  />
                  <Text
                    style={[
                      styles.modeOptionText,
                      { color: isActive ? colors.textPrimary : colors.textMuted },
                      isActive && { fontWeight: '700' },
                    ]}
                  >
                    {opt.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* ACCENT PALETTE CARD */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
              marginTop: 18,
            },
          ]}
        >
          <View style={styles.cardHeader}>
            <Ionicons
              name="color-palette-outline"
              size={20}
              color={accentColor}
            />
            <Text style={[styles.cardTitle, { color: colors.textPrimary }]}>
              Cyber Accent Color
            </Text>
          </View>

          <Text style={[styles.body, { color: colors.textSecondary, marginBottom: 14 }]}>
            Sets the primary brand tint across navigation headers, active tab indicators, and telemetry accents.
          </Text>

          <View style={styles.accentGrid}>
            {ACCENT_OPTIONS.map((item) => {
              const isSelected = accentKey === item.key;
              return (
                <Pressable
                  key={item.key}
                  accessibilityRole="button"
                  accessibilityLabel={`Select ${item.label}`}
                  onPress={() => void setAccentKey(item.key)}
                  style={[
                    styles.accentChip,
                    {
                      backgroundColor: isDark
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(0, 0, 0, 0.02)',
                      borderColor: isSelected ? item.color : colors.border,
                      borderWidth: isSelected ? 1.5 : 1,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.accentDot,
                      { backgroundColor: item.color },
                    ]}
                  >
                    {isSelected ? (
                      <Ionicons name="checkmark" size={11} color="#FFFFFF" />
                    ) : null}
                  </View>
                  <Text
                    style={[
                      styles.accentChipLabel,
                      { color: isSelected ? colors.textPrimary : colors.textSecondary },
                      isSelected && { fontWeight: '700' },
                    ]}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* LIVE PREVIEW CARD */}
        <Text style={[styles.previewSectionLabel, { color: colors.textMuted }]}>
          THEME TELEMETRY PREVIEW
        </Text>
        <View
          style={[
            styles.previewCard,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <View style={styles.previewTop}>
            <Text style={[styles.previewCategory, { color: accentColor }]}>
              CVE-2026-4401 · VULNERABILITY
            </Text>
            <View
              style={[
                styles.previewTag,
                {
                  backgroundColor: isDark
                    ? 'rgba(255, 255, 255, 0.06)'
                    : 'rgba(0, 0, 0, 0.05)',
                },
              ]}
            >
              <View
                style={[
                  styles.previewDot,
                  { backgroundColor: accentColor },
                ]}
              />
              <Text style={[styles.previewTagText, { color: accentColor }]}>
                TELEMETRY
              </Text>
            </View>
          </View>

          <Text style={[styles.previewHeadline, { color: colors.textPrimary }]}>
            Zero-Day Exploit Intelligence Feed
          </Text>

          <View style={[styles.previewBar, { backgroundColor: accentColor }]} />

          <Text style={[styles.previewSummary, { color: colors.textSecondary }]}>
            This preview illustrates your chosen color mode and accent tint as they render across cards and telemetry bars in real time.
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
    gap: 8,
    marginBottom: 12,
  },

  cardTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 15,
  },

  body: {
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
    lineHeight: 19,
  },

  modeSelectorWrap: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    padding: 4,
    gap: 4,
  },

  modeOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    borderRadius: 8,
  },

  modeOptionText: {
    fontFamily: 'Exo_500Medium',
    fontSize: 12,
  },

  accentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  accentChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    width: '48%',
  },

  accentDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  accentChipLabel: {
    fontFamily: 'Exo_500Medium',
    fontSize: 12,
    flex: 1,
  },

  previewSectionLabel: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.4,
    marginTop: 26,
    marginBottom: 10,
  },

  previewCard: {
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
  },

  previewTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  previewCategory: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.4,
  },

  previewTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 4,
  },

  previewDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },

  previewTagText: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 9.5,
    letterSpacing: 1,
  },

  previewHeadline: {
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 12,
  },

  previewBar: {
    width: 40,
    height: 2.5,
    borderRadius: 1.5,
    marginBottom: 12,
  },

  previewSummary: {
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
    lineHeight: 19,
  },
});
