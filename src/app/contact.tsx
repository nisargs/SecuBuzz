import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Clipboard,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '../context/ThemeContext';
import { spacing } from '../theme/theme';
import { haptics } from '../utils/haptics';

const SUPPORT_EMAIL = 'support@secubuzz.com';
const SECURITY_EMAIL = 'security@secubuzz.com';
const PUBLISHERS_EMAIL = 'publishers@secubuzz.com';

interface Channel {
  id: string;
  title: string;
  email: string;
  description: string;
  sla: string;
  icon: keyof typeof Ionicons.glyphMap;
  defaultSubject: string;
  defaultBody: string;
}

const CHANNELS: Channel[] = [
  {
    id: 'support',
    title: 'Technical Support & Feedback',
    email: SUPPORT_EMAIL,
    description: 'App issues, notification preferences, feature ideas, or general questions.',
    sla: 'Typical reply within 1 business day',
    icon: 'chatbubble-ellipses-outline',
    defaultSubject: '[SecuBuzz Support] App Inquiry',
    defaultBody: 'Hello SecuBuzz team,\n\nI have a question or feedback regarding the mobile app:\n\n',
  },
  {
    id: 'security',
    title: 'Vulnerability Disclosure (CVD)',
    email: SECURITY_EMAIL,
    description: 'Security findings, coordinated disclosure, or infrastructure vulnerability reports.',
    sla: '48-hour SLA under RFC 9116 CVD',
    icon: 'shield-checkmark-outline',
    defaultSubject: '[SecuBuzz Security Disclosure] Vulnerability Report',
    defaultBody: 'SecuBuzz Security Team,\n\nI am reporting a potential vulnerability under your Coordinated Vulnerability Disclosure policy.\n\nComponent Affected:\nSeverity Assessment:\nSteps to Reproduce:\n\n',
  },
  {
    id: 'publishers',
    title: 'Publishers & Content Removal',
    email: PUBLISHERS_EMAIL,
    description: 'RSS feed inclusion proposals, correction notices, or content opt-out.',
    sla: 'Opt-out requests honored within 48h',
    icon: 'newspaper-outline',
    defaultSubject: '[SecuBuzz Publisher Request] Content & Attribution',
    defaultBody: 'SecuBuzz Editorial Desk,\n\nPublication Name:\nArticle or Feed URL:\nRequest Details (Attribution / Correction / Opt-Out):\n\n',
  },
];

interface Template {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  targetEmail: string;
  subject: string;
  getBody: (appVersion: string, systemInfo: string) => string;
}

const TEMPLATES: Template[] = [
  {
    id: 'bug',
    label: 'Bug Report',
    icon: 'bug-outline',
    targetEmail: SUPPORT_EMAIL,
    subject: '[SecuBuzz Bug Report] Issue in Android App',
    getBody: (appVersion, systemInfo) =>
      `SecuBuzz Diagnostics:\n• App Version: ${appVersion}\n• Platform: ${systemInfo}\n\nDescription of Issue:\n[What happened?]\n\nSteps to Reproduce:\n1. \n2. \n\nExpected Behavior:\n[What should happen?]`,
  },
  {
    id: 'feature',
    label: 'Feature Idea',
    icon: 'sparkles-outline',
    targetEmail: SUPPORT_EMAIL,
    subject: '[SecuBuzz Feature Suggestion] User Idea',
    getBody: (appVersion, systemInfo) =>
      `Feature Proposal:\n[Brief summary of what you'd like to see]\n\nProblem It Solves:\n[How would this assist your security workflow?]\n\nPlatform: ${systemInfo}`,
  },
  {
    id: 'publisher',
    label: 'Feed Suggestion',
    icon: 'document-text-outline',
    targetEmail: PUBLISHERS_EMAIL,
    subject: '[SecuBuzz Publisher Desk] Feed Request',
    getBody: () =>
      `Publication / Blog Name:\nWebsite URL:\nRSS / Atom Feed URL:\n\nPrimary Coverage Focus:`,
  },
  {
    id: 'privacy',
    label: 'Data Deletion',
    icon: 'trash-outline',
    targetEmail: SUPPORT_EMAIL,
    subject: '[SecuBuzz Privacy] Data Deletion Request',
    getBody: (appVersion, systemInfo) =>
      `Hello MiSo Labs Privacy Team,\n\nI request the verification and purge of any push token or server telemetry associated with my device.\n\nPlatform: ${systemInfo}\nApp Version: ${appVersion}\nDate: ${new Date().toISOString().slice(0, 10)}`,
  },
];

export default function ContactScreen() {
  const { colors, isDark, accentColor } = useTheme();

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(TEMPLATES[0]);

  const appVersion = Constants.expoConfig?.version ?? '1.0.2';
  const systemInfo = `${Platform.OS.toUpperCase()} (SDK ${Platform.Version})`;

  const handleCopy = (text: string, key: string) => {
    Clipboard.setString(text);
    void haptics.notificationSuccess();
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleOpenEmail = (email: string, subject: string, body: string) => {
    void haptics.selection();
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    void Linking.openURL(mailto);
  };

  const currentTemplateBody = selectedTemplate.getBody(appVersion, systemInfo);

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
      edges={['top', 'bottom']}
    >
      {/* HEADER */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go back"
          hitSlop={12}
          onPress={() => {
            void haptics.selection();
            router.back();
          }}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </Pressable>

        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Contact & Inquiries
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* INTRO HERO */}
        <View style={styles.heroSection}>
          <Text style={[styles.eyebrow, { color: accentColor }]}>
            DIRECT COMMUNICATION
          </Text>

          <Text style={[styles.title, { color: colors.textPrimary }]}>
            Verified Inboxes
          </Text>

          <Text style={[styles.description, { color: colors.textSecondary }]}>
            SecuBuzz communicates strictly through direct email protocols. Messages route directly to an engineer's verified inbox with zero intermediary database storage.
          </Text>
        </View>

        {/* 3 VERIFIED CHANNEL CARDS */}
        <View style={styles.channelList}>
          {CHANNELS.map((ch) => {
            const isCopied = copiedKey === ch.id;

            return (
              <View
                key={ch.id}
                style={[
                  styles.channelCard,
                  {
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                  },
                ]}
              >
                <View style={styles.channelHeader}>
                  <View
                    style={[
                      styles.iconCircle,
                      {
                        backgroundColor: isDark
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(0, 0, 0, 0.03)',
                        borderColor: colors.border,
                      },
                    ]}
                  >
                    <Ionicons name={ch.icon} size={20} color={accentColor} />
                  </View>

                  <View style={styles.channelTitleWrap}>
                    <Text style={[styles.channelTitle, { color: colors.textPrimary }]}>
                      {ch.title}
                    </Text>
                    <Text style={[styles.channelEmail, { color: colors.textMuted }]}>
                      {ch.email}
                    </Text>
                  </View>
                </View>

                <Text style={[styles.channelDesc, { color: colors.textSecondary }]}>
                  {ch.description}
                </Text>

                <Text style={[styles.channelSla, { color: colors.textMuted }]}>
                  {ch.sla}
                </Text>

                <View style={styles.channelActions}>
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={`Open email to ${ch.email}`}
                    onPress={() =>
                      handleOpenEmail(ch.email, ch.defaultSubject, ch.defaultBody)
                    }
                    style={[styles.primaryActionBtn, { backgroundColor: accentColor }]}
                  >
                    <Ionicons name="mail" size={15} color="#FFFFFF" />
                    <Text style={styles.primaryActionText}>EMAIL</Text>
                  </Pressable>

                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={`Copy address ${ch.email}`}
                    onPress={() => handleCopy(ch.email, ch.id)}
                    style={[
                      styles.secondaryActionBtn,
                      {
                        backgroundColor: colors.background,
                        borderColor: colors.border,
                      },
                    ]}
                  >
                    <Ionicons
                      name={isCopied ? 'checkmark' : 'copy-outline'}
                      size={14}
                      color={isCopied ? accentColor : colors.textSecondary}
                    />
                    <Text
                      style={[
                        styles.secondaryActionText,
                        { color: isCopied ? accentColor : colors.textPrimary },
                      ]}
                    >
                      {isCopied ? 'COPIED' : 'COPY'}
                    </Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>

        {/* STRUCTURED DIAGNOSTIC TEMPLATES */}
        <View
          style={[
            styles.templateCard,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <Text style={[styles.eyebrow, { color: accentColor }]}>
            DIAGNOSTIC TEMPLATES
          </Text>

          <Text style={[styles.subheading, { color: colors.textPrimary }]}>
            Ready-Made Diagnostic Drafts
          </Text>

          <Text style={[styles.templateDesc, { color: colors.textSecondary }]}>
            Pick a structured topic below to pre-populate device telemetry and standard diagnostic fields.
          </Text>

          {/* Template Selector Chips */}
          <View style={styles.chipRow}>
            {TEMPLATES.map((tpl) => {
              const isSelected = selectedTemplate.id === tpl.id;

              return (
                <Pressable
                  key={tpl.id}
                  onPress={() => {
                    void haptics.selection();
                    setSelectedTemplate(tpl);
                  }}
                  style={[
                    styles.chip,
                    {
                      backgroundColor: isSelected
                        ? isDark
                          ? 'rgba(255, 255, 255, 0.10)'
                          : 'rgba(0, 0, 0, 0.06)'
                        : colors.background,
                      borderColor: isSelected ? accentColor : colors.border,
                    },
                  ]}
                >
                  <Ionicons
                    name={tpl.icon}
                    size={14}
                    color={isSelected ? accentColor : colors.textMuted}
                  />
                  <Text
                    style={[
                      styles.chipText,
                      {
                        color: isSelected
                          ? colors.textPrimary
                          : colors.textSecondary,
                        fontWeight: isSelected ? '700' : '500',
                      },
                    ]}
                  >
                    {tpl.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* Template Preview Box */}
          <View
            style={[
              styles.previewBox,
              {
                backgroundColor: colors.background,
                borderColor: colors.border,
              },
            ]}
          >
            <View style={[styles.previewHeader, { borderBottomColor: colors.border }]}>
              <Text style={[styles.previewMeta, { color: colors.textMuted }]}>
                To: <Text style={{ color: colors.textPrimary }}>{selectedTemplate.targetEmail}</Text>
              </Text>
              <Text
                numberOfLines={1}
                style={[styles.previewMeta, { color: accentColor }]}
              >
                {selectedTemplate.subject}
              </Text>
            </View>

            <Text style={[styles.previewText, { color: colors.textSecondary }]}>
              {currentTemplateBody}
            </Text>
          </View>

          {/* Template Actions */}
          <View style={styles.templateActionRow}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Copy full template to clipboard"
              onPress={() => {
                const fullText = `To: ${selectedTemplate.targetEmail}\nSubject: ${selectedTemplate.subject}\n\n${currentTemplateBody}`;
                handleCopy(fullText, 'template_body');
              }}
              style={[
                styles.templateSecondaryBtn,
                {
                  backgroundColor: colors.background,
                  borderColor: colors.border,
                },
              ]}
            >
              <Ionicons
                name={copiedKey === 'template_body' ? 'checkmark' : 'copy-outline'}
                size={15}
                color={copiedKey === 'template_body' ? accentColor : colors.textSecondary}
              />
              <Text
                style={[
                  styles.templateSecondaryText,
                  {
                    color:
                      copiedKey === 'template_body'
                        ? accentColor
                        : colors.textPrimary,
                  },
                ]}
              >
                {copiedKey === 'template_body' ? 'TEMPLATE COPIED' : 'COPY TEMPLATE'}
              </Text>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Open email client with this template"
              onPress={() =>
                handleOpenEmail(
                  selectedTemplate.targetEmail,
                  selectedTemplate.subject,
                  currentTemplateBody
                )
              }
              style={[styles.templatePrimaryBtn, { backgroundColor: accentColor }]}
            >
              <Ionicons name="open-outline" size={15} color="#FFFFFF" />
              <Text style={styles.templatePrimaryText}>LAUNCH EMAIL</Text>
            </Pressable>
          </View>
        </View>

        {/* SECURITY & PRIVACY FOOTNOTE */}
        <View style={[styles.securityFooter, { borderTopColor: colors.border }]}>
          <Ionicons name="shield-checkmark" size={18} color={accentColor} />
          <Text style={[styles.securityText, { color: colors.textMuted }]}>
            SecuBuzz is developed by MiSo Labs. To eliminate web database attack vectors and ensure immediate alerts, inquiries bypass intermediary databases and route directly to verified team devices.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
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
    padding: 6,
  },

  headerTitle: {
    flex: 1,
    fontFamily: 'Exo_700Bold',
    fontSize: 17,
    textAlign: 'center',
  },

  headerSpacer: {
    width: 32,
  },

  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: 20,
    paddingBottom: 48,
  },

  heroSection: {
    marginBottom: 20,
  },

  eyebrow: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.8,
    marginBottom: 4,
  },

  title: {
    fontFamily: 'Exo_700Bold',
    fontSize: 22,
    lineHeight: 28,
    marginBottom: 8,
  },

  description: {
    fontFamily: 'Exo_400Regular',
    fontSize: 13.5,
    lineHeight: 20,
  },

  channelList: {
    gap: 12,
    marginBottom: 24,
  },

  channelCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
  },

  channelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },

  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  channelTitleWrap: {
    flex: 1,
  },

  channelTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 15,
  },

  channelEmail: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    marginTop: 1,
  },

  channelDesc: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12.5,
    lineHeight: 18,
    marginBottom: 8,
  },

  channelSla: {
    fontFamily: 'Exo_500Medium',
    fontSize: 11,
    marginBottom: 14,
  },

  channelActions: {
    flexDirection: 'row',
    gap: 10,
  },

  primaryActionBtn: {
    flex: 1,
    height: 38,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  primaryActionText: {
    color: '#FFFFFF',
    fontFamily: 'Exo_700Bold',
    fontSize: 12,
    letterSpacing: 0.8,
  },

  secondaryActionBtn: {
    flex: 1,
    height: 38,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  secondaryActionText: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 12,
    letterSpacing: 0.8,
  },

  templateCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    marginBottom: 24,
  },

  subheading: {
    fontFamily: 'Exo_700Bold',
    fontSize: 17,
    marginTop: 2,
    marginBottom: 6,
  },

  templateDesc: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12.5,
    lineHeight: 18,
    marginBottom: 14,
  },

  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 14,
  },

  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 8,
    borderWidth: 1,
  },

  chipText: {
    fontFamily: 'Exo_500Medium',
    fontSize: 12,
  },

  previewBox: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    marginBottom: 14,
  },

  previewHeader: {
    paddingBottom: 8,
    borderBottomWidth: 1,
    marginBottom: 8,
    gap: 2,
  },

  previewMeta: {
    fontFamily: 'Exo_500Medium',
    fontSize: 11,
  },

  previewText: {
    fontFamily: 'Exo_400Regular',
    fontSize: 11.5,
    lineHeight: 17,
  },

  templateActionRow: {
    flexDirection: 'row',
    gap: 10,
  },

  templatePrimaryBtn: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  templatePrimaryText: {
    color: '#FFFFFF',
    fontFamily: 'Exo_700Bold',
    fontSize: 12,
    letterSpacing: 0.8,
  },

  templateSecondaryBtn: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  templateSecondaryText: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 12,
    letterSpacing: 0.8,
  },

  securityFooter: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    paddingTop: 16,
    borderTopWidth: 1,
  },

  securityText: {
    flex: 1,
    fontFamily: 'Exo_400Regular',
    fontSize: 11.5,
    lineHeight: 17,
  },
});