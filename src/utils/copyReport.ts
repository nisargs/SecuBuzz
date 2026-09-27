import { Clipboard } from 'react-native';
import type { Article } from '../models/article';
import type { CveAdvisory } from '../models/cve';

/**
 * Formats a CVE advisory into a clean, markdown-formatted incident report
 * ready to paste into Slack, Microsoft Teams, Jira, or Discord.
 */
export function formatAdvisoryMarkdown(advisory: CveAdvisory): string {
  const title = advisory.vulnerabilityName || advisory.product || 'Threat Advisory';
  const lines: string[] = [
    `*${advisory.cveID}: ${title}*`,
    `- Severity: ${(advisory.severity || 'HIGH').toUpperCase()}`,
  ];

  if (advisory.vendorProject || advisory.product) {
    const affected = [advisory.vendorProject, advisory.product].filter(Boolean).join(' · ');
    lines.push(`- Affected: ${affected}`);
  }

  if (advisory.dueDate) {
    lines.push(`- Remediation Deadline: ${advisory.dueDate}`);
  }

  if (advisory.patchedVersion) {
    lines.push(`- Fix Available: ${advisory.patchedVersion}`);
  }

  if (advisory.vulnerableVersionRange) {
    lines.push(`- Vulnerable Versions: ${advisory.vulnerableVersionRange}`);
  }

  if (advisory.requiredAction) {
    const cleanAction = advisory.requiredAction.replace(/\s*\(see URL in Notes\)/gi, '').trim();
    lines.push(`- Action: ${cleanAction}`);
  }

  const cleanDesc = (advisory.shortDescription || '')
    .replace(/^#+\s*.*$/gm, '')
    .replace(/#+\s*(?:Summary|Details|Impact|Workarounds|PoC)\b:?/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (cleanDesc) {
    lines.push('', cleanDesc);
  }

  const sourceUrl = advisory.url || `https://nvd.nist.gov/vuln/detail/${advisory.cveID}`;
  lines.push('', `- Source: ${advisory.source || 'CISA KEV'} (${sourceUrl})`, '', 'Shared via SecuBuzz');

  return lines.join('\n');
}

/**
 * Formats a news brief into a markdown incident report.
 */
export function formatArticleMarkdown(article: Article): string {
  const lines: string[] = [
    `*${article.headline}*`,
    `- Category: ${article.category}`,
    `- Severity: ${article.severity}`,
  ];

  if (article.vendorProject || article.product) {
    const affected = [article.vendorProject, article.product].filter(Boolean).join(' · ');
    lines.push(`- Affected: ${affected}`);
  }

  if (article.dueDate) {
    lines.push(`- Remediation Deadline: ${article.dueDate}`);
  }

  if (article.patchedVersion) {
    lines.push(`- Fix Available: ${article.patchedVersion}`);
  }

  if (article.requiredAction) {
    lines.push(`- Action: ${article.requiredAction}`);
  }

  const cleanSummary = (article.summary || '')
    .replace(/^#+\s*.*$/gm, '')
    .replace(/#+\s*(?:Summary|Details|Impact|Workarounds|PoC)\b:?/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (cleanSummary) {
    lines.push('', cleanSummary);
  }

  lines.push('', `- Source: ${article.sourceName} (${article.sourceUrl})`, '', 'Shared via SecuBuzz');

  return lines.join('\n');
}

/**
 * Copies a CVE advisory report to clipboard.
 */
export function copyAdvisoryToClipboard(advisory: CveAdvisory): boolean {
  try {
    const markdown = formatAdvisoryMarkdown(advisory);
    Clipboard.setString(markdown);
    return true;
  } catch (err) {
    console.warn('SecuBuzz: Failed to copy advisory to clipboard:', err);
    return false;
  }
}

/**
 * Copies a news brief report to clipboard.
 */
export function copyArticleToClipboard(article: Article): boolean {
  try {
    const markdown = formatArticleMarkdown(article);
    Clipboard.setString(markdown);
    return true;
  } catch (err) {
    console.warn('SecuBuzz: Failed to copy article to clipboard:', err);
    return false;
  }
}
