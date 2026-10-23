import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme, type ThemeMode } from '../context/ThemeContext';
import { accentPresets, type AccentPresetKey, spacing } from '../theme/theme';
import { wordCount } from '../utils/wordCount';

const ACCENT_OPTIONS: { key: AccentPresetKey; label: string; color: string }[] = [
  { key: 'cyan', label: 'Classic Cyan', color: accentPresets.cyan },
  { key: 'teal', label: 'Modern Teal', color: accentPresets.teal },
  { key: 'cobalt', label: 'Cobalt Blue', color: accentPresets.cobalt },
  { key: 'green', label: 'Matrix Emerald', color: accentPresets.green },
  { key: 'amber', label: 'Radar Amber', color: accentPresets.amber },
  { key: 'slate', label: 'Titanium Slate', color: accentPresets.slate },
];

const THEME_OPTIONS: {
  mode: ThemeMode;
  label: string;
  sublabel: string;
  badge?: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  {
    mode: 'system',
    label: 'System Default',
    sublabel: 'Follows operating system appearance',
    icon: 'phone-portrait-outline',
  },
  {
    mode: 'dark',
    label: 'Dark Mode (Obsidian)',
    sublabel: 'Signature #0B0F14 SOC analyst palette',
    icon: 'moon-outline',
  },
  {
    mode: 'amoled',
    label: 'AMOLED Black',
    sublabel: 'Pure #000000 · 0-nit display with pixels off',
    badge: 'OLED',
    icon: 'contrast-outline',
  },
  {
    mode: 'light',
    label: 'Light Mode',
    sublabel: 'Clean architectural daylight slate (#F8FAFC)',
    icon: 'sunny-outline',
  },
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
    fontSizeScale,
    setFontSizeScale,
    fontScaleMultiplier,
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
          APPEARANCE
        </Text>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Theme & Display
        </Text>
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          Customize how SecuBuzz renders on your screen. Choose between high-contrast dark themes or a clean daylight slate.
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

          <View style={styles.themeList}>
            {THEME_OPTIONS.map((opt, idx) => {
              const isActive = themeMode === opt.mode;
              const isLast = idx === THEME_OPTIONS.length - 1;
              return (
                <Pressable
                  key={opt.mode}
                  accessibilityRole="button"
                  accessibilityLabel={`Select ${opt.label}`}
                  onPress={() => void setThemeMode(opt.mode)}
                  style={({ pressed }) => [
                    styles.themeRow,
                    {
                      backgroundColor: isActive
                        ? `${accentColor}12`
                        : colors.surfaceRaised,
                      borderColor: isActive ? accentColor : colors.border,
                    },
                    pressed && { opacity: 0.8 },
                    !isLast && { marginBottom: 8 },
                  ]}
                >
                  <View
                    style={[
                      styles.themeIconWrap,
                      {
                        backgroundColor: isActive
                          ? `${accentColor}25`
                          : colors.surface,
                      },
                    ]}
                  >
                    <Ionicons
                      name={opt.icon}
                      size={18}
                      color={isActive ? accentColor : colors.textMuted}
                    />
                  </View>

                  <View style={styles.themeRowTextWrap}>
                    <View style={styles.themeRowTitleLine}>
                      <Text
                        style={[
                          styles.themeRowTitle,
                          { color: isActive ? colors.textPrimary : colors.textSecondary },
                          isActive && { fontWeight: '700' },
                        ]}
                      >
                        {opt.label}
                      </Text>
                      {opt.badge ? (
                        <View
                          style={[
                            styles.badge,
                            { backgroundColor: `${accentColor}22` },
                          ]}
                        >
                          <Text
                            style={[styles.badgeText, { color: accentColor }]}
                          >
                            {opt.badge}
                          </Text>
                        </View>
                      ) : null}
                    </View>
                    <Text
                      style={[styles.themeRowSub, { color: colors.textMuted }]}
                    >
                      {opt.sublabel}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.radioCircle,
                      { borderColor: isActive ? accentColor : colors.border },
                    ]}
                  >
                    {isActive ? (
                      <View
                        style={[
                          styles.radioInner,
                          { backgroundColor: accentColor },
                        ]}
                      />
                    ) : null}
                  </View>
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
              Accent Color
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

        {/* TYPOGRAPHY DENSITY CARD */}
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
              name="text-outline"
              size={20}
              color={accentColor}
            />
            <Text style={[styles.cardTitle, { color: colors.textPrimary }]}>
              Reading Text Size
            </Text>
          </View>

          <Text style={[styles.body, { color: colors.textSecondary, marginBottom: 12 }]}>
            Adjust typography density for news briefs and threat advisories. Ideal for low-light SOC reading.
          </Text>

          <View style={styles.densityRow}>
            {(
              [
                { scale: 'compact', label: 'Compact', sub: '90%' },
                { scale: 'standard', label: 'Standard', sub: '100%' },
                { scale: 'comfortable', label: 'Comfortable', sub: '115%' },
              ] as const
            ).map((item) => {
              const isSelected = fontSizeScale === item.scale;
              return (
                <Pressable
                  key={item.scale}
                  accessibilityRole="button"
                  accessibilityLabel={`Set ${item.label} text size`}
                  onPress={() => void setFontSizeScale(item.scale)}
                  style={({ pressed }) => [
                    styles.densityChip,
                    {
                      backgroundColor: isSelected
                        ? `${accentColor}15`
                        : colors.surfaceRaised,
                      borderColor: isSelected ? accentColor : colors.border,
                    },
                    pressed && { opacity: 0.8 },
                  ]}
                >
                  <Text
                    style={[
                      styles.densityChipLabel,
                      { color: isSelected ? colors.textPrimary : colors.textSecondary },
                      isSelected && { fontWeight: '700' },
                    ]}
                  >
                    {item.label}
                  </Text>
                  <Text
                    style={[
                      styles.densityChipSub,
                      { color: isSelected ? accentColor : colors.textMuted },
                    ]}
                  >
                    {item.sub}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* LIVE PREVIEW CARD */}
        <Text style={[styles.previewSectionLabel, { color: colors.textMuted }]}>
          THEME PREVIEW
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
              CVE-0000-00000 · VULNERABILITY
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

          <Text
            style={[
              styles.previewHeadline,
              {
                color: colors.textPrimary,
                fontSize: Math.round(18 * fontScaleMultiplier),
                lineHeight: Math.round(25 * fontScaleMultiplier),
              },
            ]}
          >
            Zero-Day Exploit Intelligence Feed
          </Text>

          <View style={[styles.previewBar, { backgroundColor: accentColor }]} />

          <Text
            style={[
              styles.previewSummary,
              {
                color: colors.textSecondary,
                fontSize: Math.round(13 * fontScaleMultiplier),
                lineHeight: Math.round(19 * fontScaleMultiplier),
              },
            ]}
          >
            This preview illustrates your chosen color mode, accent tint, and typography size as they render across cards and telemetry bars in real time.
          </Text>

          <Text
            style={[
              styles.previewWordCount,
              {
                color: colors.textMuted,
                fontSize: Math.round(10.5 * fontScaleMultiplier),
              },
            ]}
          >
            {wordCount(
              'This preview illustrates your chosen color mode, accent tint, and typography size as they render across cards and telemetry bars in real time.'
            )}{' '}
            words
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

  themeList: {
    marginTop: 4,
  },

  themeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
  },

  themeIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  themeRowTextWrap: {
    flex: 1,
  },

  themeRowTitleLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  themeRowTitle: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 13.5,
  },

  themeRowSub: {
    fontFamily: 'Exo_400Regular',
    fontSize: 11.5,
    marginTop: 2,
  },

  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },

  badgeText: {
    fontFamily: 'Exo_700Bold',
    fontSize: 9.5,
    letterSpacing: 0.8,
  },

  accentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  densityRow: {
    flexDirection: 'row',
    gap: 8,
  },

  densityChip: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  densityChipLabel: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 12.5,
  },

  densityChipSub: {
    fontFamily: 'Exo_400Regular',
    fontSize: 10.5,
    marginTop: 2,
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

  previewWordCount: {
    fontFamily: Platform.select({ ios: 'Menlo', default: 'monospace' }),
    fontSize: 10.5,
    marginTop: 8,
    letterSpacing: 0.3,
  },
});
