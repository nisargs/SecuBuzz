import { daysUntil } from './date';
import type { Advisory, Severity } from '../types/advisory';

export type DueTone = 'overdue' | 'urgent' | 'upcoming';

export function dueStatus(dueDate: string): { label: string; tone: DueTone; days: number } {
  const days = daysUntil(dueDate);
  if (days < 0) {
    const n = Math.abs(days);
    return { label: `Overdue ${n}d`, tone: 'overdue', days };
  }
  if (days === 0) return { label: 'Due today', tone: 'urgent', days };
  if (days <= 7) return { label: `${days}d left`, tone: 'urgent', days };
  return { label: `${days}d left`, tone: 'upcoming', days };
}

/**
 * Authoritative overrides for CVEs where CVSS base score differs from default catalog fallback.
 * CVE-2025-52691: SmarterTools SmarterMail unrestricted file upload is base score 10.0 per NVD CVSS v3.1 vector.
 */
export const CVE_SCORE_OVERRIDES: Record<string, number> = {
  'CVE-2025-52691': 10.0,
};

/**
 * Single source of truth for severity mapping:
 * - Critical: CVSS 9.0–10.0
 * - High: CVSS 7.0–8.9
 * - Medium: CVSS 4.0–6.9
 * - Low: CVSS < 4.0
 */
export function getCvssSeverity(score?: number, fallback: Severity = 'High'): Severity {
  if (score === undefined || score === null || isNaN(score)) return fallback;
  if (score >= 9.0) return 'Critical';
  if (score >= 7.0) return 'High';
  if (score >= 4.0) return 'Medium';
  return 'Low';
}

export interface ParsedCvssMetrics {
  vectorString?: string;
  attackVector?: string;
  attackComplexity?: string;
  privilegesRequired?: string;
  userInteraction?: string;
  scope?: string;
  confidentialityImpact?: string;
  integrityImpact?: string;
  availabilityImpact?: string;
}

/**
 * Parses all 8 CVSS metrics from a CVSS v3.1 or v4.0 vector string.
 */
export function parseCvssVector(vector?: string): ParsedCvssMetrics {
  if (!vector) return {};
  const parts = vector.split('/');
  const map: Record<string, string> = {};
  for (const part of parts) {
    const [k, v] = part.split(':');
    if (k && v) map[k.toUpperCase()] = v.toUpperCase();
  }

  const avMap: Record<string, string> = { N: 'Network', A: 'Adjacent', L: 'Local', P: 'Physical' };
  const acMap: Record<string, string> = { L: 'Low', H: 'High' };
  const prMap: Record<string, string> = { N: 'None', L: 'Low', H: 'High' };
  const uiMap: Record<string, string> = { N: 'None', R: 'Required', P: 'Passive', A: 'Active' };
  const sMap: Record<string, string> = { U: 'Unchanged', C: 'Changed' };
  const ciaMap: Record<string, string> = { N: 'None', L: 'Low', H: 'High' };

  return {
    vectorString: vector,
    attackVector: avMap[map['AV']] || map['AV'],
    attackComplexity: acMap[map['AC']] || map['AC'],
    privilegesRequired: prMap[map['PR']] || map['PR'],
    userInteraction: uiMap[map['UI']] || map['UI'],
    scope: sMap[map['S']] || map['S'],
    confidentialityImpact: ciaMap[map['C'] || map['VC']] || map['C'] || map['VC'],
    integrityImpact: ciaMap[map['I'] || map['VI']] || map['I'] || map['VI'],
    availabilityImpact: ciaMap[map['A'] || map['VA']] || map['A'] || map['VA'],
  };
}

/**
 * Generates a clean markdown incident report ready for Slack, Microsoft Teams, or Jira.
 */
export function formatAdvisorySnippet(advisory: Advisory, cvssScore?: number, epssPercentile?: number): string {
  const score = cvssScore ?? advisory.cvss;
  const severity = getCvssSeverity(score, advisory.severity).toUpperCase();
  const title = advisory.name || `${advisory.vendor} ${advisory.product} Vulnerability`;
  const cvssPart = score !== undefined ? ` (CVSS ${score.toFixed(1)})` : '';

  const lines: string[] = [
    `*${advisory.cve}: ${title}*`,
    `- Severity: ${severity}${cvssPart}`,
    `- Vendor/Product: ${advisory.vendor} · ${advisory.product}`,
    `- Remediation Due: ${advisory.dueDate}`,
  ];

  if (advisory.ransomware) {
    lines.push(`- Ransomware Threat: KNOWN active campaign exploitation`);
  }

  if (epssPercentile !== undefined) {
    lines.push(`- EPSS Score: ${(epssPercentile * 100).toFixed(1)}th percentile (FIRST.org)`);
  }

  if (advisory.requiredAction) {
    lines.push(`- Action: ${advisory.requiredAction}`);
  }

  if (advisory.description) {
    lines.push('', advisory.description.trim());
  }

  lines.push(
    '',
    `- Reference: https://secubuzz.com/advisories/${advisory.slug}`,
    '',
    'Shared via SecuBuzz · Quick 60-Word Cybersecurity News',
    '📱 Google Play: https://play.google.com/store/apps/details?id=com.secubuzz.app',
    '🌐 Web: https://secubuzz.com'
  );
  return lines.join('\n');
}