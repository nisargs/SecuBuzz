import type { ArticleCategory } from '../models/article';

export type ThemeColors = {
  background: string;
  surface: string;
  surfaceRaised: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  danger: string;
};

/**
 * Dark theme tokens.
 * Muted, high-readability cybersecurity SOC analyst palette.
 */
export const darkColors: ThemeColors = {
  background: '#0B0F14',
  surface: '#151B23',
  surfaceRaised: '#1C2430',
  border: '#2A3340',
  textPrimary: '#F5F7FA',
  textSecondary: '#9AA4B2',
  textMuted: '#6B7380',
  accent: '#4CC9F0',
  danger: '#E8B4B4',
};

/**
 * AMOLED Pure Black theme tokens.
 * Pitch-black 0-nit canvas (#000000) where OLED/AMOLED pixels turn completely off.
 * Maximizes hardware battery life and provides zero-glare contrast in dark SOC command rooms.
 */
export const amoledColors: ThemeColors = {
  background: '#000000',
  surface: '#090B0E',
  surfaceRaised: '#12151C',
  border: '#1B202A',
  textPrimary: '#FFFFFF',
  textSecondary: '#9AA4B2',
  textMuted: '#64748B',
  accent: '#4CC9F0',
  danger: '#EF4444',
};

/**
 * Light theme tokens (Clean Architectural Slate).
 * Pure white card surface on a crisp slate canvas.
 * Tested for WCAG AAA contrast ratio (14:1) for primary text.
 */
export const lightColors: ThemeColors = {
  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceRaised: '#F1F5F9',
  border: '#E2E8F0',
  textPrimary: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#94A3B8',
  accent: '#0284C7',
  danger: '#DC2626',
};

/**
 * Default fallback colors export for backward-compatibility.
 */
export const colors = darkColors;

/**
 * Distinct but restrained pill colors for each category in Dark Mode.
 */
export const categoryColorsDark: Record<
  ArticleCategory,
  { background: string; text: string }
> = {
  BREACH: { background: '#3A1F24', text: '#F0C7CC' },
  RANSOMWARE: { background: '#3A2A1A', text: '#E8C9A0' },
  CVE: { background: '#1A2A3A', text: '#A8C8E8' },
  VULNERABILITY: { background: '#2E2A18', text: '#E4D48A' },
  NATION_STATE: { background: '#2A1E38', text: '#D0C0E8' },
  GENERAL: { background: '#2A3038', text: '#C5CDD6' },
};

/**
 * Distinct, crisp pill colors for each category in Light Mode.
 * High-contrast pastel surfaces with deep readable text.
 */
export const categoryColorsLight: Record<
  ArticleCategory,
  { background: string; text: string }
> = {
  BREACH: { background: '#FEE2E2', text: '#991B1B' },
  RANSOMWARE: { background: '#FEF3C7', text: '#92400E' },
  CVE: { background: '#E0F2FE', text: '#0369A1' },
  VULNERABILITY: { background: '#FEF9C3', text: '#854D0E' },
  NATION_STATE: { background: '#F3E8FF', text: '#6B21A8' },
  GENERAL: { background: '#F1F5F9', text: '#475569' },
};

export const categoryColors = categoryColorsDark;

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const;

/**
 * Curated brand accents for present and future theme customization.
 * Tested for high readability against both dark backgrounds and light modes.
 *
 * Includes:
 * - Cyan: SecuBuzz classic
 * - Teal: Modern Cyber Teal (inspired by user Instagram Coral x Teal reference)
 * - Cobalt: High-tech deep digital blue (inspired by user Instagram Cobalt x Lime reference)
 * - Emerald: Terminal Matrix Emerald (SOC Analyst)
 * - Amber: Cyber Radar Warm Amber
 * - Slate: Minimalist Monolith Titanium
 */
export const accentPresets = {
  cyan: '#4CC9F0',    // SecuBuzz Classic Cyber Cyan
  teal: '#14B8A6',    // Modern Cyber Teal
  cobalt: '#2563EB',  // Authoritative Cobalt Blue
  green: '#10B981',   // Terminal Matrix Emerald (SOC Analyst)
  amber: '#F59E0B',   // Cyber Radar Warm Amber
  slate: '#94A3B8',   // Minimalist Monolith Titanium
} as const;

export type AccentPresetKey = keyof typeof accentPresets;

/**
 * Threat Severity colors for Dark Mode.
 * Calibrated for maximum readability, sober restraint, and zero "AI neon" glare.
 */
export const severityColorsDark = {
  CRITICAL: {
    primary: '#EF4444',       // Crimson red - reserved strictly for zero-days & active exploitation
    surface: 'rgba(239, 68, 68, 0.12)',
    border: 'rgba(239, 68, 68, 0.3)',
  },
  HIGH: {
    primary: '#F59E0B',       // Warm industrial amber - for major data breaches & high-CVSS flaws
    surface: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.3)',
  },
  MEDIUM: {
    primary: '#38BDF8',       // Technical slate cyan - scheduled patches & user-interaction bugs
    surface: 'rgba(56, 189, 248, 0.10)',
    border: 'rgba(56, 189, 248, 0.25)',
  },
  LOW: {
    primary: '#94A3B8',       // Muted graphite - research papers, trends & advisory reports
    surface: 'rgba(148, 163, 184, 0.10)',
    border: 'rgba(148, 163, 184, 0.2)',
  },
} as const;

/**
 * Threat Severity colors for Light Mode.
 */
export const severityColorsLight = {
  CRITICAL: {
    primary: '#DC2626',
    surface: '#FEE2E2',
    border: '#FCA5A5',
  },
  HIGH: {
    primary: '#D97706',
    surface: '#FEF3C7',
    border: '#FCD34D',
  },
  MEDIUM: {
    primary: '#0284C7',
    surface: '#E0F2FE',
    border: '#BAE6FD',
  },
  LOW: {
    primary: '#64748B',
    surface: '#F1F5F9',
    border: '#CBD5E1',
  },
} as const;

export const severityColors = severityColorsDark;
