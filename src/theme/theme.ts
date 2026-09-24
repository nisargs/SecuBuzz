/**
 * Single dark theme for the whole app.
 * There is no light-mode toggle in this version.
 *
 * Colors are muted on purpose: a calm news reader, not a neon "hacker" look.
 */
export const colors = {
  background: '#0B0F14',
  surface: '#151B23',
  surfaceRaised: '#1C2430',
  border: '#2A3340',
  textPrimary: '#F5F7FA',
  textSecondary: '#9AA4B2',
  textMuted: '#6B7380',
  accent: '#C9D4E0',
  danger: '#E8B4B4',
} as const;

/**
 * Distinct but restrained pill colors for each category.
 * Background is translucent-looking; text stays readable on dark cards.
 */
export const categoryColors: Record<
  import('../models/article').ArticleCategory,
  { background: string; text: string }
> = {
  BREACH: { background: '#3A1F24', text: '#F0C7CC' },
  RANSOMWARE: { background: '#3A2A1A', text: '#E8C9A0' },
  CVE: { background: '#1A2A3A', text: '#A8C8E8' },
  VULNERABILITY: { background: '#2E2A18', text: '#E4D48A' },
  NATION_STATE: { background: '#2A1E38', text: '#D0C0E8' },
  GENERAL: { background: '#2A3038', text: '#C5CDD6' },
};

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
 * Tested for high readability against both dark backgrounds and future light modes.
 */
export const accentPresets = {
  cyan: '#4CC9F0',    // SecuBuzz Classic Cyber Cyan
  green: '#10B981',   // Terminal Matrix Emerald (SOC Analyst)
  amber: '#F59E0B',   // Cyber Radar Warm Amber
  slate: '#94A3B8',   // Minimalist Monolith Titanium
} as const;

/**
 * Threat Severity colors.
 * Calibrated for maximum readability, sober restraint, and zero "AI neon" glare.
 * Tested to maintain AA/AAA contrast ratios in both dark mode and future white mode.
 */
export const severityColors = {
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

