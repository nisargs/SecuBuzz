import { Clipboard } from 'react-native';
import type { Article } from '../models/article';
import type { CveAdvisory } from '../models/cve';
import { haptics } from './haptics';

/**
 * Deterministic URL slug generator matching secubuzz.com/news/[slug].
 */
function createSlug(headline: string = '', id: string = ''): string {
  const base = (headline || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .slice(0, 50)
    .replace(/^-+|-+$/g, '');

  let hash = 0;
  const idStr = id || headline || '';
  for (let i = 0; i < idStr.length; i++) {
    hash = (hash << 5) - hash + idStr.charCodeAt(i);
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(6, '0').slice(0, 6);
  return base ? `${base}-${hex}` : `article-${hex}`;
}

/**
 * Formats a CVE advisory into a clean, markdown-formatted incident report
 * ready to paste into Slack, Microsoft Teams, Jira, or Discord.
 */
export function formatAdvisoryMarkdown(advisory: CveAdvisory): string {
  const title = advisory.vulnerabilityName || advisory.product || 'Threat Advisory';
  const lines: string[] = [
    `*[CISA KEV Dispatch] ${advisory.cveID}: ${title}*`,
    `- Severity: ${(advisory.severity || 'HIGH').toUpperCase()}`,
  ];

  if (advisory.cvssScore !== undefined) {
    lines.push(`- CVSS Base Score: ${advisory.cvssScore}`);
  }

  if (advisory.epssScore !== undefined) {
    const pct = (advisory.epssScore * 100).toFixed(1);
    const pctl = advisory.epssPercentile !== undefined ? ` (${(advisory.epssPercentile * 100).toFixed(0)}th percentile)` : '';
    lines.push(`- EPSS Exploit Probability: ${pct}%${pctl}`);
  }

  if (advisory.knownRansomwareCampaignUse === 'Known') {
    lines.push(`- Ransomware Campaign Use: Confirmed in wild`);
  }

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

  const webUrl = `https://secubuzz.com/advisories/${advisory.cveID.toLowerCase()}`;
  const sourceUrl = advisory.url || `https://nvd.nist.gov/vuln/detail/${advisory.cveID}`;
  lines.push('', `- Advisory Radar: ${webUrl}`);
  lines.push(
    `- Primary Source: ${advisory.source || 'CISA KEV'} (${sourceUrl})`,
    '',
    'Shared via SecuBuzz · Quick 60-Word Cybersecurity News',
    'Google Play: https://play.google.com/store/apps/details?id=com.secubuzz.app',
    'Web: https://secubuzz.com'
  );

  return lines.join('\n');
}

/**
 * Formats a news brief into a markdown incident report.
 */
export function formatArticleMarkdown(article: Article): string {
  const slug = (article as any).slug || createSlug(article.headline, article.id);
  const webUrl = `https://secubuzz.com/news/${slug}`;

  const lines: string[] = [
    `*[Threat Brief] ${article.headline}*`,
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

  lines.push('', `- Read 60-word brief: ${webUrl}`);
  lines.push(
    `- Source: ${article.sourceName} (${article.sourceUrl})`,
    '',
    'Shared via SecuBuzz · Quick 60-Word Cybersecurity News',
    'Google Play: https://play.google.com/store/apps/details?id=com.secubuzz.app',
    'Web: https://secubuzz.com'
  );

  return lines.join('\n');
}

/**
 * Copies a CVE advisory report to clipboard.
 */
export function copyAdvisoryToClipboard(advisory: CveAdvisory): boolean {
  try {
    const markdown = formatAdvisoryMarkdown(advisory);
    Clipboard.setString(markdown);
    void haptics.notificationSuccess();
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
    void haptics.notificationSuccess();
    return true;
  } catch (err) {
    console.warn('SecuBuzz: Failed to copy article to clipboard:', err);
    return false;
  }
}
