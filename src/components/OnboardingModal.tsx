import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Modal,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '../context/ThemeContext';
import { spacing } from '../theme/theme';

export const WALKTHROUGH_STORAGE_KEY = '@secubuzz_walkthrough_v1_0_2';

interface OnboardingSlide {
  step: string;
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  highlights: string[];
}

const SLIDES: OnboardingSlide[] = [
  {
    step: 'STEP 1 OF 4 · NEWS & MORNING TRIAGE',
    title: '60-Word Security Briefs',
    subtitle:
      'Stay ahead of breaking cyber threats during morning triage. Complex multi-page disclosures, zero-days, and breach investigations are condensed into verified, 60-word technical briefs linked to original reporting.',
    icon: 'newspaper-outline',
    highlights: [
      'Refreshed every 4 hours via automated edge pipeline',
      'Multi-source coverage deduplicated into single stories',
      'Authoritative source links with full offline reading cache',
    ],
  },
  {
    step: 'STEP 2 OF 4 · ZERO-DAY INTELLIGENCE',
    title: 'CISA KEV & EPSS Scores',
    subtitle:
      'Monitor active in-the-wild zero-days cataloged by CISA with federal remediation deadlines. Prioritize your patching with daily FIRST.org EPSS exploit probability scores and threat percentiles.',
    icon: 'pulse-outline',
    highlights: [
      'Official CISA KEV catalog sync with countdown timers',
      'Daily FIRST.org EPSS exploit probability metrics',
      'Authoritative CVSS 3.1 & 4.0 vector telemetry',
    ],
  },
  {
    step: 'STEP 3 OF 4 · DISCOVERY & FILTERS',
    title: 'Live Search & Smart Filters',
    subtitle:
      'Find exactly what affects your stack in seconds. Search by vendor, product, or CVE ID, and filter intelligence across specialized categories and severity levels.',
    icon: 'search-outline',
    highlights: [
      'Search any CVE, vendor, software product, or keyword',
      'Filter by category: Ransomware, Breaches, Malware, Cloud',
      'Filter by threat severity: Critical, High, Medium, Low',
    ],
  },
  {
    step: 'STEP 4 OF 4 · WORKFLOW & CUSTOMIZATION',
    title: 'Themes, Alerts & Bookmarks',
    subtitle:
      'Tailor SecuBuzz to your workflow. Customize appearance with dark/light modes and cyber accent themes, configure zero-day push alerts, and save critical intelligence to your Bookmarks.',
    icon: 'color-palette-outline',
    highlights: [
      'Custom themes with Dark/Light modes & 6 accent presets',
      'Configurable push notifications for urgent CISA KEV zero-days',
      'Dedicated Bookmarks tab & 1-tap Slack/Teams incident copy',
    ],
  },
];

interface OnboardingModalProps {
  visible: boolean;
  onClose: () => void;
}

export function OnboardingModal({ visible, onClose }: OnboardingModalProps) {
  const { colors, isDark, accentColor } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const screenWidth = Dimensions.get('window').width;

  async function handleComplete() {
    try {
      await AsyncStorage.setItem(WALKTHROUGH_STORAGE_KEY, 'true');
    } catch {
      // ignore storage failure
    }
    onClose();
  }

  function handleNext() {
    if (activeIndex < SLIDES.length - 1) {
      const next = activeIndex + 1;
      setActiveIndex(next);
      scrollRef.current?.scrollTo({ x: next * screenWidth, animated: true });
    } else {
      void handleComplete();
    }
  }

  function handleMomentumScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenWidth);
    if (index >= 0 && index < SLIDES.length) {
      setActiveIndex(index);
    }
  }

  useEffect(() => {
    if (visible) {
      setActiveIndex(0);
      scrollRef.current?.scrollTo({ x: 0, animated: false });
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      statusBarTranslucent
      onRequestClose={handleComplete}
    >
      <View
        style={[
          styles.overlay,
          { backgroundColor: isDark ? 'rgba(5, 8, 12, 0.94)' : 'rgba(15, 23, 42, 0.85)' },
        ]}
      >
        <SafeAreaView style={styles.safeContainer} edges={['top', 'bottom']}>
          {/* HEADER BAR */}
          <View style={styles.topBar}>
            <View style={styles.brandRow}>
              <Text style={[styles.brandText, { color: colors.textPrimary }]}>
                Secu<Text style={{ color: accentColor }}>Buzz</Text>
              </Text>
              <View
                style={[
                  styles.quickBadge,
                  { backgroundColor: `${accentColor}18`, borderColor: `${accentColor}40` },
                ]}
              >
                <Text style={[styles.quickBadgeText, { color: accentColor }]}>
                  QUICK START
                </Text>
              </View>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Skip walkthrough"
              hitSlop={12}
              onPress={handleComplete}
              style={styles.skipButton}
            >
              <Text style={[styles.skipText, { color: colors.textMuted }]}>
                Skip
              </Text>
              <Ionicons name="close" size={18} color={colors.textMuted} />
            </Pressable>
          </View>

          {/* SWIPEABLE SLIDES */}
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleMomentumScrollEnd}
            style={styles.scrollArea}
          >
            {SLIDES.map((slide, idx) => (
              <View
                key={slide.step}
                style={[styles.slideContainer, { width: screenWidth }]}
              >
                <View
                  style={[
                    styles.card,
                    {
                      backgroundColor: colors.surface,
                      borderColor: colors.border,
                    },
                  ]}
                >
                  {/* ICON EMBLEM */}
                  <View
                    style={[
                      styles.iconCircle,
                      {
                        backgroundColor: `${accentColor}14`,
                        borderColor: `${accentColor}33`,
                      },
                    ]}
                  >
                    <Ionicons name={slide.icon} size={36} color={accentColor} />
                  </View>

                  {/* STEP INDICATOR */}
                  <Text style={[styles.stepEyebrow, { color: accentColor }]}>
                    {slide.step}
                  </Text>

                  {/* TITLE */}
                  <Text style={[styles.slideTitle, { color: colors.textPrimary }]}>
                    {slide.title}
                  </Text>

                  {/* DESCRIPTION */}
                  <Text style={[styles.slideSubtitle, { color: colors.textSecondary }]}>
                    {slide.subtitle}
                  </Text>

                  {/* HIGHLIGHT BULLETS */}
                  <View style={[styles.highlightBox, { borderColor: colors.border }]}>
                    {slide.highlights.map((point) => (
                      <View key={point} style={styles.highlightRow}>
                        <Ionicons
                          name="checkmark-circle-outline"
                          size={16}
                          color={accentColor}
                          style={styles.bulletIcon}
                        />
                        <Text style={[styles.highlightText, { color: colors.textPrimary }]}>
                          {point}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* BOTTOM CONTROLS */}
          <View style={styles.footer}>
            {/* PAGINATION DOTS */}
            <View style={styles.paginationDots}>
              {SLIDES.map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.dot,
                    {
                      backgroundColor: i === activeIndex ? accentColor : colors.border,
                      width: i === activeIndex ? 22 : 7,
                    },
                  ]}
                />
              ))}
            </View>

            {/* ACTION BUTTON */}
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={activeIndex === SLIDES.length - 1 ? 'Get Started' : 'Next slide'}
              onPress={handleNext}
              style={[
                styles.actionBtn,
                {
                  backgroundColor: accentColor,
                },
              ]}
            >
              <Text style={styles.actionBtnText}>
                {activeIndex === SLIDES.length - 1 ? 'Get Started' : 'Next'}
              </Text>
              <Ionicons
                name={activeIndex === SLIDES.length - 1 ? 'checkmark' : 'arrow-forward'}
                size={18}
                color="#0B0F14"
              />
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  safeContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandText: {
    fontFamily: 'Exo_700Bold',
    fontSize: 22,
    letterSpacing: -0.5,
  },
  quickBadge: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  quickBadgeText: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 10,
    letterSpacing: 0.5,
  },
  skipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  skipText: {
    fontSize: 14,
    fontFamily: 'Exo_500Medium',
  },
  scrollArea: {
    flex: 1,
  },
  slideContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    borderWidth: 1,
    borderRadius: 4,
    padding: spacing.xl,
  },
  iconCircle: {
    width: 68,
    height: 68,
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  stepEyebrow: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1,
    marginBottom: 6,
  },
  slideTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -0.4,
    marginBottom: spacing.sm,
  },
  slideSubtitle: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: spacing.lg,
  },
  highlightBox: {
    borderTopWidth: 1,
    paddingTop: spacing.md,
    gap: 10,
  },
  highlightRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  bulletIcon: {
    marginTop: 2,
  },
  highlightText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    fontFamily: 'Exo_500Medium',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  paginationDots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    height: 7,
    borderRadius: 4,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 4,
  },
  actionBtnText: {
    color: '#0B0F14',
    fontFamily: 'Exo_700Bold',
    fontSize: 15,
  },
});
