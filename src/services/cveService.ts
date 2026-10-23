import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AdvisorySeverity, CveAdvisory } from '../models/cve';

const CISA_KEV_URL =
  'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json';

const GITHUB_ADVISORIES_URL =
  'https://api.github.com/advisories?per_page=50';

const STORAGE_KEY_ADVISORIES = '@secubuzz_advisories_v3';
const STORAGE_KEY_ADVISORIES_FALLBACK = '@secubuzz_advisories_v2';
const STORAGE_KEY_LAST_FETCH = '@secubuzz_advisories_last_fetch';

interface GitHubVulnerability {
  package?: {
    ecosystem?: string;
    name?: string;
  };
  vulnerable_version_range?: string;
  first_patched_version?: string;
}

interface GitHubAdvisoryRaw {
  ghsa_id: string;
  cve_id: string | null;
  summary: string;
  description: string;
  severity: string;
  published_at: string;
  html_url: string;
  vulnerabilities?: GitHubVulnerability[];
  cvss_severities?: {
    cvss_v3?: { score?: number };
    cvss_v4?: { score?: number };
  };
  cwes?: Array<{ cwe_id?: string; name?: string }>;
}

/**
 * Fetch and map CISA Known Exploited Vulnerabilities catalog.
 */
async function fetchCisaKev(): Promise<CveAdvisory[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    const response = await fetch(CISA_KEV_URL, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    const rawList = Array.isArray(data?.vulnerabilities)
      ? data.vulnerabilities
      : [];

    return rawList.map((item: any): CveAdvisory => {
      const isRansomware =
        item.knownRansomwareCampaignUse?.toLowerCase() === 'known';

      const noteUrlMatch = item.notes?.match(/https:\/\/[^\s;]+/);
      const url =
        noteUrlMatch?.[0] ||
        `https://nvd.nist.gov/vuln/detail/${item.cveID}`;

      const rawAction =
        item.requiredAction || 'Apply vendor patches immediately.';
      const cleanAction = rawAction
        .replace(/\s*\(see URL in Notes\)/gi, '')
        .replace(/\s{2,}/g, ' ')
        .trim();

      return {
        id: item.cveID,
        cveID: item.cveID,
        source: 'CISA KEV',
        vendorProject: item.vendorProject || 'Enterprise Vendor',
        product: item.product || 'Software System',
        vulnerabilityName: item.vulnerabilityName || item.cveID,
        dateAdded: item.dateAdded || '',
        severity: isRansomware ? 'CRITICAL' : 'HIGH',
        shortDescription: item.shortDescription || '',
        requiredAction: cleanAction,
        dueDate: item.dueDate || undefined,
        knownRansomwareCampaignUse: item.knownRansomwareCampaignUse || 'Unknown',
        url,
        cwes: (item.cwes || []).map((c: any) =>
          String(c).replace(/^CWE:\s*/i, '').trim(),
        ).filter(Boolean),
      };
    });
  } catch (err) {
    console.warn('SecuBuzz: Failed to fetch CISA KEV feed:', err);
    return [];
  }
}

function formatEcosystem(ecosystem?: string): string {
  if (!ecosystem) return 'Open Source';
  const lower = ecosystem.toLowerCase();
  if (lower === 'go') return 'Go';
  if (lower === 'npm') return 'npm';
  if (lower === 'pypi') return 'Python (PyPI)';
  if (lower === 'maven') return 'Java (Maven)';
  if (lower === 'rubygems') return 'RubyGems';
  if (lower === 'nuget') return '.NET (NuGet)';
  if (lower === 'rust' || lower === 'cargo') return 'Rust (Cargo)';
  if (lower === 'packagist') return 'PHP (Packagist)';
  return ecosystem.charAt(0).toUpperCase() + ecosystem.slice(1);
}

function formatProductName(product?: string): string {
  if (!product) return 'Software System';
  // If product is a Go or GitHub repository path like github.com/owner/repo or github.com/owner/repo/v8
  if (product.startsWith('github.com/') || product.startsWith('gitlab.com/')) {
    const parts = product.split('/');
    if (parts.length >= 3) {
      const owner = parts[1];
      const repo = parts[2];
      const version = parts[3] ? ` (${parts[3]})` : '';
      return `${repo}${version} · ${owner}`;
    }
  }
  return product;
}

/**
 * Clean markdown formatting and section headers from GitHub advisory descriptions.
 * Preserves complete sentences and prevents mid-word truncation.
 */
function cleanAdvisoryDescription(
  rawDesc?: string,
  fallbackSummary?: string,
): string {
  let text = (rawDesc || fallbackSummary || '').trim();
  if (!text) return '';

  // 1. Remove markdown code blocks
  text = text.replace(/```[\s\S]*?```/g, '');

  // 2. If an explicit Summary section exists, isolate it
  const summaryMatch = text.match(
    /(?:^|\n)#+\s*Summary\s*\n+([\s\S]*?)(?=\n#+|$)/i,
  );
  if (summaryMatch && summaryMatch[1].trim().length > 30) {
    text = summaryMatch[1];
  }

  // 3. Strip all markdown headings (# Title, ## Summary, ### Details, etc.)
  text = text.replace(/^#+\s+.*$/gm, '');
  text = text.replace(
    /#+\s*(?:Summary|Details|Impact|Patches|Workarounds|References|PoC|Proof of Concept)\b:?/gi,
    '',
  );

  // 4. Clean markdown links [text](url) -> text, and raw URLs
  text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
  text = text.replace(/https?:\/\/\S+/g, '');

  // 5. Clean markdown formatting tokens (bold, italics, code)
  text = text.replace(/`([^`]+)`/g, '$1');
  text = text.replace(/\*\*([^*]+)\*\*/g, '$1');
  text = text.replace(/\*([^*]+)\*/g, '$1');
  text = text.replace(/__([^_]+)__/g, '$1');
  text = text.replace(/_([^_]+)_/g, '$1');

  // 6. Clean HTML markup tags (preserving non-tag tokens like <host>, <port>, <user>)
  text = text.replace(/<\/?(?:p|div|span|a|br|h[1-6]|ul|ol|li|code|pre|b|i|strong|em|table|tr|td|th|tbody|thead|blockquote|hr|img|section|article)\b[^>]*>/gi, ' ');
  // Unescape standard HTML entities
  text = text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
  text = text.replace(/\r\n|\n|\r/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();

  // If text became too short after stripping, use the fallback summary
  if (text.length < 20 && fallbackSummary) {
    text = fallbackSummary.trim();
  }

  // 7. Ensure clean truncation at a sentence period, never mid-word
  if (text.length > 400) {
    const periodIdx = text.slice(0, 400).lastIndexOf('. ');
    if (periodIdx > 120) {
      text = text.slice(0, periodIdx + 1);
    } else {
      const spaceIdx = text.slice(0, 400).lastIndexOf(' ');
      if (spaceIdx > 80) {
        text = `${text.slice(0, spaceIdx)}...`;
      } else {
        text = `${text.slice(0, 400)}...`;
      }
    }
  }

  return text;
}

/**
 * Fetch and map GitHub Global Security Advisories catalog.
 */
async function fetchGitHubAdvisories(): Promise<CveAdvisory[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    const response = await fetch(GITHUB_ADVISORIES_URL, {
      signal: controller.signal,
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'SecuBuzz-Mobile-App',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return [];
    }

    const rawList: GitHubAdvisoryRaw[] = await response.json();
    if (!Array.isArray(rawList)) {
      return [];
    }

    return rawList.map((item): CveAdvisory => {
      const firstVuln = item.vulnerabilities?.[0];
      const rawPkgName = firstVuln?.package?.name || 'Open Source Package';
      const formattedPkg = formatProductName(rawPkgName);
      const ecosystem = formatEcosystem(firstVuln?.package?.ecosystem);
      const firstPatched = firstVuln?.first_patched_version;
      const vulnRange = firstVuln?.vulnerable_version_range;

      const rawSeverity = item.severity?.toUpperCase();
      const severity: AdvisorySeverity =
        rawSeverity === 'CRITICAL'
          ? 'CRITICAL'
          : rawSeverity === 'HIGH'
          ? 'HIGH'
          : rawSeverity === 'LOW'
          ? 'LOW'
          : 'MEDIUM';

      const cleanDesc = cleanAdvisoryDescription(item.description, item.summary);

      const cvss =
        item.cvss_severities?.cvss_v4?.score ||
        item.cvss_severities?.cvss_v3?.score;

      return {
        id: item.ghsa_id,
        cveID: item.cve_id || item.ghsa_id,
        source: 'GITHUB',
        vendorProject: ecosystem,
        product: formattedPkg,
        vulnerabilityName: item.summary,
        dateAdded: item.published_at ? item.published_at.split('T')[0] : '',
        severity,
        shortDescription: cleanDesc,
        requiredAction: firstPatched
          ? `Upgrade ${formattedPkg} to version ${firstPatched} or later.`
          : 'No patched release available yet. Check advisory mitigations and workarounds.',
        dueDate: undefined,
        knownRansomwareCampaignUse: 'Unknown',
        url: item.html_url,
        cwes: item.cwes
          ?.map((c) =>
            (c.cwe_id || c.name || '').replace(/^CWE:\s*/i, '').trim(),
          )
          .filter(Boolean),
        cvssScore: cvss,
        patchedVersion: firstPatched,
        vulnerableVersionRange: vulnRange,
      };
    });
  } catch (err) {
    console.warn('SecuBuzz: Failed to fetch GitHub Advisories:', err);
    return [];
  }
}

/**
 * Fetches combined CISA KEV and GitHub Global Security Advisories.
 * Merges, sorts, deduplicates, and caches in AsyncStorage for instant offline access.
 */
export async function getCveAdvisories(): Promise<CveAdvisory[]> {
  try {
    const [cisaList, githubList] = await Promise.all([
      fetchCisaKev(),
      fetchGitHubAdvisories(),
    ]);

    if (cisaList.length > 0 || githubList.length > 0) {
      // Map of existing CISA CVEs for deduplication
      const cisaCveSet = new Set(
        cisaList.map((c) => c.cveID.toUpperCase()).filter(Boolean),
      );

      // Filter out GitHub items if already present in CISA KEV
      const uniqueGithub = githubList.filter((gh) => {
        if (!gh.cveID) return true;
        return !cisaCveSet.has(gh.cveID.toUpperCase());
      });

      const combined = [...cisaList, ...uniqueGithub];

      // Sort newest -> oldest
      combined.sort((a, b) => {
        const timeA = Date.parse(a.dateAdded) || 0;
        const timeB = Date.parse(b.dateAdded) || 0;
        return timeB - timeA;
      });

      // Cache up to top 250 in AsyncStorage for instant offline access
      const toCache = combined.slice(0, 250);
      try {
        await AsyncStorage.setItem(
          STORAGE_KEY_ADVISORIES,
          JSON.stringify(toCache),
        );
        await AsyncStorage.setItem(
          STORAGE_KEY_LAST_FETCH,
          String(Date.now()),
        );
      } catch (cacheErr) {
        console.warn('SecuBuzz: Could not cache advisories:', cacheErr);
      }

      return combined;
    }
  } catch (error) {
    console.warn(
      'SecuBuzz: Network fetch for advisories failed, falling back to cache:',
      error,
    );
  }

  // Fallback to cached data if network request failed or returned empty
  try {
    let cached = await AsyncStorage.getItem(STORAGE_KEY_ADVISORIES);
    if (!cached) {
      cached = await AsyncStorage.getItem(STORAGE_KEY_ADVISORIES_FALLBACK);
    }
    if (cached) {
      return JSON.parse(cached) as CveAdvisory[];
    }
  } catch (err) {
    console.warn('SecuBuzz: Could not read cached advisories:', err);
  }

  return [];
}
