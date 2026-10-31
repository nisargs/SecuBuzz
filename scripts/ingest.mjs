import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const FEED_FILE = path.join(ROOT_DIR, "feed.json");
const SEEN_URLS_FILE = path.join(ROOT_DIR, "seen-urls.json");
const NOTIFIED_ARTICLES_FILE = path.join(ROOT_DIR, "notified-articles.json");
const NOTIFIED_CVES_FILE = path.join(ROOT_DIR, "notified-cves.json");

const CISA_KEV_FEED_URL =
  "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json";

const PUSH_TOKEN_API_URL =
  process.env.PUSH_TOKEN_API_URL ||
  "https://secubuzz-push.secubuzz.workers.dev/api/push-tokens";

const PUSH_ADMIN_SECRET = process.env.PUSH_ADMIN_SECRET;

const GROQ_API_URL =
  "https://api.groq.com/openai/v1/chat/completions";

const GROQ_API_KEY = (process.env.GROQ_API_KEY || "").trim().replace(/^["']|["']$/g, "");

const GROQ_MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-20b";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions";

const GEMINI_API_KEY = (process.env.GEMINI_API_KEY || "").trim().replace(/^["']|["']$/g, "");

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.8-flash";

const OPENROUTER_API_URL =
  "https://openrouter.ai/api/v1/chat/completions";

const OPENROUTER_API_KEY = (process.env.OPENROUTER_API_KEY || "").trim().replace(/^["']|["']$/g, "");

const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || "openrouter/free";

let openRouterPermanentlyFailed = false;

/*
 * ---------------------------------------------------------------------------
 * INGESTION CONFIGURATION
 * ---------------------------------------------------------------------------
 *
 * Interleaved multi-engine pipeline (Groq + Gemini + OpenRouter).
 * All 3 run on 100% free tier allowances with automated failover.
 */

const ARTICLES_PER_AI_BATCH = 4;

const MAX_NEW_CANDIDATES = 40;

const ITEMS_PER_FEED = 50;

const MAX_FEED_ARTICLES = 350;

const DESCRIPTION_MAX_LENGTH = 900;

const MAX_COMPLETION_TOKENS = 2500;

/*
 * Minimum delay between successful AI requests.
 *
 * The real protection comes from the Groq rate-limit headers below.
 * This delay simply prevents us from firing requests back-to-back.
 */
const MIN_DELAY_BETWEEN_REQUESTS_MS = 5000;

/*
 * When remaining TPM falls below this amount, wait for the rate-limit
 * window to reset before making another request.
 */
const MIN_REMAINING_TOKENS_BEFORE_WAIT = 2500;

/*
 * Number of times a 429 request can be retried.
 */
const MAX_RATE_LIMIT_RETRIES = 3;

/*
 * Extra safety buffer after the server says the token window will reset.
 */
const RATE_LIMIT_RESET_BUFFER_MS = 1500;

// -----------------------------------------------------------------------------
// RSS SOURCES
// -----------------------------------------------------------------------------

const FEEDS = [
  {
    name: "The Hacker News",
    url: "https://feeds.feedburner.com/TheHackersNews",
  },
  {
    name: "BleepingComputer",
    url: "https://www.bleepingcomputer.com/feed/",
  },
  {
    name: "CISA",
    url: "https://www.cisa.gov/cybersecurity-advisories/all.xml",
  },
  {
    name: "Krebs on Security",
    url: "https://krebsonsecurity.com/feed/",
  },
  {
    name: "SANS Internet Storm Center",
    url: "https://isc.sans.edu/rssfeed_full.xml",
  },
  {
    name: "Unit 42",
    url: "https://unit42.paloaltonetworks.com/feed/",
  },
  {
    name: "Zero Day Initiative",
    url: "https://www.zerodayinitiative.com/blog?format=rss",
  },
  {
    name: "The Record",
    url: "https://therecord.media/feed/",
  },
  {
    name: "SecurityWeek",
    url: "https://www.securityweek.com/feed/",
  },
  {
    name: "Dark Reading",
    url: "https://www.darkreading.com/rss.xml",
  },
  {
    name: "Help Net Security",
    url: "https://www.helpnetsecurity.com/feed/",
  },
  {
    name: "CyberNews AI",
    url: "https://www.cybernewsai.com/feed.xml",
  },
  {
    name: "Microsoft Security",
    url: "https://www.microsoft.com/security/blog/feed/",
  },
  {
    name: "Google Security",
    url: "https://security.googleblog.com/feeds/posts/default",
  },
  {
    name: "Sophos Threat Research",
    url: "https://news.sophos.com/en-us/category/threat-research/feed/",
  },
  {
    name: "Check Point Research",
    url: "https://research.checkpoint.com/feed/",
  },
  {
    name: "CrowdStrike",
    url: "https://www.crowdstrike.com/blog/feed/",
  },
  {
    name: "The DFIR Report",
    url: "https://thedfirreport.com/feed/",
  },
  {
    name: "Wiz Research",
    url: "https://www.wiz.io/blog/rss.xml",
  },
  {
    name: "Cloudflare Security",
    url: "https://blog.cloudflare.com/rss/",
  },
  {
    name: "Cisco Talos",
    url: "https://blog.talosintelligence.com/rss/",
  },
  {
    name: "Trend Micro Research",
    url: "https://feeds.feedburner.com/TrendMicroResearch",
  },
  {
    name: "SentinelOne",
    url: "https://www.sentinelone.com/blog/feed/",
  },
  {
    name: "Schneier on Security",
    url: "https://www.schneier.com/feed/atom/",
  },
  {
    name: "Malwarebytes Labs",
    url: "https://www.malwarebytes.com/blog/feed/index.xml",
  },
  {
    name: "ESET WeLiveSecurity",
    url: "https://www.welivesecurity.com/en/rss/feed/",
  },
  {
    name: "Cyber Security News",
    url: "https://feeds.feedburner.com/cyber-security-news",
  },
  {
    name: "Google Project Zero",
    url: "https://projectzero.google/feed.xml",
  },
  {
    name: "GreyNoise Labs",
    url: "https://www.greynoise.io/blog/rss.xml",
  },
  {
    name: "Socket.dev",
    url: "https://socket.dev/api/blog/feed.atom",
  },
  {
    name: "Huntress",
    url: "https://www.huntress.com/blog/rss.xml",
  },
  {
    name: "Arctic Wolf",
    url: "https://arcticwolf.com/feed/",
  },
  // Official Vendor PSIRT & Security Release Feeds (Primary Ecosystem Radar):
  {
    name: "Palo Alto Networks PSIRT",
    url: "https://security.paloaltonetworks.com/rss.xml",
  },
  {
    name: "Fortinet FortiGuard PSIRT",
    url: "https://fortiguard.fortinet.com/rss/ir.xml",
  },
  {
    name: "Cisco PSIRT",
    url: "https://tools.cisco.com/security/center/psirtrss20/CiscoSecurityAdvisory.xml",
  },
  {
    name: "Ivanti Security Advisories",
    url: "https://www.ivanti.com/blog/topics/security-advisory/rss",
  },
  {
    name: "Microsoft MSRC",
    url: "https://api.msrc.microsoft.com/update-guide/rss",
  },
  {
    name: "Red Hat Security Advisories",
    url: "https://access.redhat.com/security/data/metrics/rhsa.rss",
  },
  {
    name: "Google Chrome Releases",
    url: "https://feeds.feedburner.com/GoogleChromeReleases",
  },
  {
    name: "AWS Security Bulletins",
    url: "https://aws.amazon.com/security/security-bulletins/feed/",
  },
  {
    name: "GitLab Security Releases",
    url: "https://docs.gitlab.com/releases/patch-releases.xml",
  },
  {
    name: "Ubuntu Security Notices",
    url: "https://usn.ubuntu.com/rss.xml",
  },
  {
    name: "Apple Security Updates",
    url: "https://developer.apple.com/news/releases/rss/releases.rss",
  },
  {
    name: "GitHub Security Blog",
    url: "https://github.blog/security/feed/",
  },
  {
    name: "ZDI Advisories",
    url: "https://www.zerodayinitiative.com/rss/published/",
  },
  {
    name: "CERT-EU Security Advisories",
    url: "https://cert.europa.eu/publications/security-advisories-rss",
  },
  {
    name: "Oracle Security Alerts",
    url: "https://www.oracle.com/ocom/groups/public/@otn/documents/webcontent/rss-otn-sec.xml",
  },
];

// -----------------------------------------------------------------------------
// VALIDATION
// -----------------------------------------------------------------------------

if (!GROQ_API_KEY && !GEMINI_API_KEY && !OPENROUTER_API_KEY) {
  throw new Error(
    "Missing AI API key: Please set GROQ_API_KEY, GEMINI_API_KEY, or OPENROUTER_API_KEY in the environment.",
  );
}

// -----------------------------------------------------------------------------
// GENERIC HELPERS
// -----------------------------------------------------------------------------

function sleep(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function cleanText(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replace(/<!\[CDATA\[(.*?)\]\]>/gis, "$1")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeXml(value) {
  if (!value) {
    return "";
  }

  return String(value)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) =>
      String.fromCharCode(Number(code)),
    )
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCharCode(parseInt(code, 16)),
    );
}

function extractTag(block, tagName) {
  const regex = new RegExp(
    `<${tagName}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tagName}>`,
    "i",
  );



  const match = block.match(regex);

  if (!match) {
    return "";
  }

  return cleanText(decodeXml(match[1]));
}

function extractAtomLink(block) {
  // 1. Prioritize rel="alternate" (clean post permalink in Blogger/Atom)
  const altMatch = block.match(/<link\s+[^>]*rel=["']alternate["'][^>]*>/i);
  if (altMatch) {
    const hrefMatch = altMatch[0].match(/href=["']([^"']+)["']/i);
    if (hrefMatch) return decodeXml(hrefMatch[1]).trim().replace(/^http:\/\//i, "https://");
  }

  // 2. Prioritize type="text/html"
  const htmlMatch = block.match(/<link\s+[^>]*type=["']text\/html["'][^>]*>/i);
  if (htmlMatch) {
    const hrefMatch = htmlMatch[0].match(/href=["']([^"']+)["']/i);
    if (hrefMatch) return decodeXml(hrefMatch[1]).trim().replace(/^http:\/\//i, "https://");
  }

  // 3. Fallback: Any link that is NOT replies or self
  const links = block.matchAll(/<link\s+[^>]*href=["']([^"']+)["'][^>]*>/gi);
  for (const l of links) {
    const tag = l[0];
    if (!tag.includes('rel="replies"') && !tag.includes("rel='replies'") &&
        !tag.includes('rel="self"') && !tag.includes("rel='self'")) {
      return decodeXml(l[1]).trim().replace(/^http:\/\//i, "https://");
    }
  }

  const match = block.match(
    /<link[^>]+href=["']([^"']+)["'][^>]*>/i,
  );

  return match ? decodeXml(match[1]).trim() : "";
}

function extractRssItems(xml) {
  const items = [];

  const itemMatches =
    xml.match(
      /<item(?:\s[^>]*)?>[\s\S]*?<\/item>/gi,
    ) || [];

  for (const item of itemMatches) {
    const title = extractTag(item, "title");

    const link =
      extractTag(item, "link") ||
      extractTag(item, "guid");

    const description =
      extractTag(item, "description") ||
      extractTag(item, "content:encoded") ||
      title;

    const pubDate =
      extractTag(item, "pubDate") ||
      extractTag(item, "published") ||
      extractTag(item, "dc:date");

    if (!title || !link) {
      continue;
    }

    items.push({
      title,
      url: link,
      description,
      publishedAt: pubDate,
    });
  }

  /*
   * Atom fallback.
   */
  if (items.length === 0) {
    const entryMatches =
      xml.match(
        /<entry(?:\s[^>]*)?>[\s\S]*?<\/entry>/gi,
      ) || [];

    for (const entry of entryMatches) {
      const title = extractTag(entry, "title");

      const link =
        extractAtomLink(entry) ||
        extractTag(entry, "id");

      const description =
        extractTag(entry, "summary") ||
        extractTag(entry, "content") ||
        title;

      const publishedAt =
        extractTag(entry, "published") ||
        extractTag(entry, "updated");

      if (!title || !link) {
        continue;
      }

      items.push({
        title,
        url: link,
        description,
        publishedAt,
      });
    }
  }

  return items;
}

function normaliseUrl(url) {
  try {
    const cleaned = String(url || "").replace(/\s+/g, "").trim();
    const parsed = new URL(cleaned);

    parsed.hash = "";

    const trackingParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "fbclid",
      "gclid",
    ];

    for (const parameter of trackingParams) {
      parsed.searchParams.delete(parameter);
    }

    return parsed.toString();
  } catch {
    return String(url || "").replace(/\s+/g, "").trim();
  }
}

function isValidHttpUrl(value) {
  try {
    const cleaned = String(value || "").replace(/\s+/g, "").trim();
    const url = new URL(cleaned);

    return (
      url.protocol === "http:" ||
      url.protocol === "https:"
    );
  } catch {
    return false;
  }
}

function uniqueByUrl(items) {
  const seen = new Set();
  const result = [];

  for (const item of items) {
    const normalized = normaliseUrl(item.url);

    if (!normalized || seen.has(normalized)) {
      continue;
    }

    seen.add(normalized);

    result.push({
      ...item,
      url: normalized,
    });
  }

  return result;
}

function truncateText(text, maxLength) {
  if (!text) {
    return "";
  }

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength)}...`;
}

function safeJsonParse(text) {
  if (!text || typeof text !== "string") {
    return null;
  }

  const trimmed = text.trim();

  try {
    return JSON.parse(trimmed);
  } catch {
    // Continue.
  }

  const withoutFence = trimmed
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  try {
    return JSON.parse(withoutFence);
  } catch {
    // Continue.
  }

  const firstBrace = withoutFence.indexOf("{");
  const lastBrace = withoutFence.lastIndexOf("}");

  if (
    firstBrace >= 0 &&
    lastBrace > firstBrace
  ) {
    const candidate = withoutFence.slice(
      firstBrace,
      lastBrace + 1,
    );

    try {
      return JSON.parse(candidate);
    } catch {
      return null;
    }
  }

  return null;
}

function extractArticleArray(value) {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  if (
    typeof value === "object" &&
    Array.isArray(value.articles)
  ) {
    return value.articles;
  }

  if (
    typeof value === "object" &&
    value.output &&
    typeof value.output === "object" &&
    Array.isArray(value.output.articles)
  ) {
    return value.output.articles;
  }

  return [];
}

function normaliseCategory(category) {
  const allowed = new Set([
    "BREACH",
    "RANSOMWARE",
    "CVE",
    "VULNERABILITY",
    "NATION_STATE",
    "GENERAL",
  ]);

  const normalized = String(category || "")
    .trim()
    .toUpperCase()
    .replace(/[\s-]+/g, "_");

  return allowed.has(normalized)
    ? normalized
    : "GENERAL";
}

function normaliseSeverity(severity, contextText = "") {
  const allowed = new Set([
    "LOW",
    "MEDIUM",
    "HIGH",
    "CRITICAL",
  ]);

  const normalized = String(severity || "")
    .trim()
    .toUpperCase();

  let assigned = allowed.has(normalized)
    ? normalized
    : "MEDIUM";

  const lower = String(contextText || "").toLowerCase();
  if (!lower) return assigned;

  // 1. Check for explicit CVSS scores (e.g. CVSS 10.0, CVSS: 9.8, CVSS score of 9.2)
  const cvssMatch = lower.match(/cvss(?:\s*(?:v?3\.[01]|v?4\.0))?\s*(?:score)?\s*(?:of|:)?\s*([0-9](?:\.[0-9])?|10(?:\.0)?)/i);
  if (cvssMatch) {
    const score = parseFloat(cvssMatch[1]);
    if (score >= 9.0) return "CRITICAL";
    if (score >= 7.0 && assigned !== "CRITICAL") return "HIGH";
  }

  // 2. Deterministic CRITICAL criteria: Active zero-day, unauthenticated RCE, maximum-severity
  const isCriticalSignal =
    lower.includes("cvss 10") ||
    lower.includes("cvss 9.") ||
    lower.includes("cvss: 10") ||
    lower.includes("cvss: 9.") ||
    lower.includes("cvss score of 10") ||
    lower.includes("cvss score of 9.") ||
    (lower.includes("unauthenticated") && (lower.includes("rce") || lower.includes("remote code execution"))) ||
    lower.includes("active in-the-wild zero-day") ||
    lower.includes("actively exploited zero-day") ||
    (lower.includes("maximum-severity") && (lower.includes("code execution") || lower.includes("rce")));

  if (isCriticalSignal) {
    return "CRITICAL";
  }

  // 3. Deterministic HIGH criteria floor
  const isHighFloor =
    lower.includes("cvss 8.") ||
    lower.includes("cvss 7.") ||
    lower.includes("cvss: 8.") ||
    lower.includes("cvss: 7.") ||
    lower.includes("public proof-of-concept") ||
    lower.includes("public poc") ||
    lower.includes("ransomware extortion") ||
    lower.includes("active ransomware");

  if (isHighFloor && assigned !== "CRITICAL") {
    return "HIGH";
  }

  // Anti-miscalibration overrides
  if (assigned === "CRITICAL") {
    const isDosOnly = (lower.includes("denial of service") || lower.includes("denial-of-service") || lower.includes(" dos ")) &&
                      !lower.includes("remote code execution") && !lower.includes("rce") && !lower.includes("arbitrary code") && !lower.includes("memory corruption");
    const isCertOnly = lower.includes("ca-certificates") || lower.includes("certificate bundle") || lower.includes("cert-bundle");
    const isFailedAttempt = lower.includes("no success yet") || lower.includes("failed exploitation") || lower.includes("attempts targeted, no success");
    if (isDosOnly) assigned = "HIGH";
    if (isCertOnly || isFailedAttempt) assigned = "MEDIUM";
  }

  const isActiveMalware = lower.includes("malware chain") || lower.includes("clickfix") || lower.includes("stealer surge") || lower.includes("deploying malware");
  if (isActiveMalware && assigned === "LOW") {
    assigned = "HIGH";
  }

  const isActivelyExploitedZeroDay = (lower.includes("zero-day") || lower.includes("0-day")) &&
    (lower.includes("actively exploited") || lower.includes("in-the-wild") || lower.includes("in the wild") || lower.includes("under active exploitation"));
  if (isActivelyExploitedZeroDay) {
    return "CRITICAL";
  }

  return assigned;
}

function wordCount(text) {
  return String(text || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .length;
}

// -----------------------------------------------------------------------------
// AI RESULT VALIDATION
// -----------------------------------------------------------------------------

function validateAiArticle(
  article,
  candidateMap,
) {
  if (!article || typeof article !== "object") {
    return null;
  }

  const index = Number(article.index);

  if (
    !Number.isInteger(index) ||
    !candidateMap.has(index)
  ) {
    return null;
  }

  const candidate = candidateMap.get(index);

  const headline = cleanText(
    article.headline,
  );

  const summary = cleanText(
    article.summary,
  );

  if (!headline || !summary) {
    return null;
  }

  const words = wordCount(summary);

  /*
   * Strict 50-60 word brand standard.
   *
   * Enforce a tight gate (48 to 65 words) to guarantee substantive
   * technical depth, eliminating sub-45-word summaries while allowing
   * slight variance for hyphenated CVEs and technical terms.
   */
  if (words < 45) {
    return null;
  }

  let finalSummary = summary;
  if (words > 60) {
    const wordList = summary.split(/\s+/);
    const candidateStr = wordList.slice(0, 60).join(" ");
    const lastPeriodIdx = candidateStr.lastIndexOf(".");
    if (lastPeriodIdx > 120) {
      finalSummary = candidateStr.slice(0, lastPeriodIdx + 1).trim();
    } else {
      finalSummary = candidateStr.replace(/[,;:\s]+$/, "") + ".";
    }
  }
  if (wordCount(finalSummary) > 60) {
    finalSummary = finalSummary.split(/\s+/).slice(0, 60).join(" ").replace(/[,;:\s]+$/, "") + ".";
  }

  const sourceUrl = normaliseUrl(
    candidate.url,
  );

  return {
    id: sourceUrl,
    sourceUrl,
    title: headline,
    headline,
    summary: finalSummary,
    category: (() => {
      const cat = normaliseCategory(article.category);
      if (cat === "CVE") {
        const hasCveMention = /CVE[\u2010-\u2015-]\d{4}[\u2010-\u2015-]\d{4,7}/i.test(
          `${headline} ${summary}`,
        );
        return hasCveMention ? "CVE" : "VULNERABILITY";
      }
      return cat;
    })(),
    severity: normaliseSeverity(
      article.severity,
      `${headline} ${summary} ${candidate.title || ""} ${candidate.content || candidate.description || ""}`,
    ),
    source: candidate.source,
    publishedAt: candidate.publishedAt
      ? (() => {
          const parsed = new Date(candidate.publishedAt);
          return Number.isNaN(parsed.getTime())
            ? new Date().toISOString()
            : parsed.toISOString();
        })()
      : new Date().toISOString(),
    url: sourceUrl,
  };
}

// -----------------------------------------------------------------------------
// FILE HANDLING
// -----------------------------------------------------------------------------

async function readJsonFile(
  filePath,
  fallback,
) {
  try {
    const raw = await fs.readFile(
      filePath,
      "utf8",
    );

    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

async function writeJsonFile(
  filePath,
  value,
) {
  await fs.writeFile(
    filePath,
    `${JSON.stringify(value, null, 2)}\n`,
    "utf8",
  );
}

// -----------------------------------------------------------------------------
// FETCH RSS
// -----------------------------------------------------------------------------

async function fetchFeed(feed) {
  console.log(
    `Fetching: ${feed.url}`,
  );

  const response = await fetch(
    feed.url,
    {
      headers: {
        "User-Agent":
          "SecuBuzz/1.0 RSS Reader",
        Accept:
          "application/rss+xml, application/xml, text/xml, */*",
      },
      signal: AbortSignal.timeout(12000),
    },
  );

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status} ${response.statusText}`,
    );
  }

  const xml = await response.text();

  const items = extractRssItems(xml)
    .slice(0, ITEMS_PER_FEED)
    .map((item) => ({
      ...item,
      source: feed.name,
      url: normaliseUrl(item.url),
    }))
    .filter((item) =>
      isValidHttpUrl(item.url),
    );

  console.log(
    `Found ${items.length} RSS items.`,
  );

  return items;
}

// -----------------------------------------------------------------------------
// AI PROMPT
// -----------------------------------------------------------------------------

function buildBatchPrompt(
  candidates,
) {
  const articles = candidates.map(
    (candidate, index) => ({
      index,
      source: candidate.source,
      title: candidate.title,
      description: truncateText(
        candidate.description,
        DESCRIPTION_MAX_LENGTH,
      ),
      publishedAt:
        candidate.publishedAt || "",
    }),
  );

  return `
You are the content editor for SecuBuzz, a concise cybersecurity news app.

Process each supplied cybersecurity news article independently.

For each article:

1. Create an ORIGINAL, concise SecuBuzz headline (strictly under 10 words). NEVER copy or replicate the publisher's headline verbatim.
2. Create an authoritative 50 to 60 word technical intelligence brief.
3. Assign exactly one category.
4. Assign exactly one severity.

IMPORTANT RULES:

- HEADLINE REQUIREMENT & FIDELITY (STRICT INVARIANT):
  * Every headline MUST preserve 100% of the original factual meaning and technical scope. NEVER divert, distort, exaggerate, or change what actually happened.
  * Rephrase for syntactic originality and concise delivery (strictly under 10 words). NEVER copy the publisher's headline verbatim.
  * Do NOT sensationalize or reclassify events (e.g. do not call a vulnerability or key revocation a "breach", do not call an "attempt" a "compromise", do not claim malware succeeded if it failed).
  * Accurately reflect the exact subject, vendor, action, and outcome described in the source.
  * Examples of faithful rephrasing:
    - Original: "Microsoft releases Windows OOB updates to distrust eMudhra certificates"
      -> Rephrased: "Microsoft Distrusts eMudhra Certificates in Out-of-Band Update"
    - Original: "F5 Releases Out-of-Band Patches for Critical NGINX Vulnerabilities"
      -> Rephrased: "F5 Issues Emergency Patches for Critical NGINX Vulnerabilities"
    - Original: "PHP2Shell: Exploitation Attempts and Remediation Trends"
      -> Rephrased: "PHP2Shell Exploitation Attempts Fail in Observed Attacks"
- Use ONLY information present in the supplied title and description.
- Do not invent facts.
- Do not combine information between articles.
- Do not invent people, organizations, dates, numbers, vulnerabilities, attackers, victims, malware names, or technical details.
- Do not use information from your own knowledge.
- The summary must make sense without opening the source.
- Do not use Markdown.
- Do not use bullet points inside summaries.
- Do not use ellipses.
- LENGTH & STRUCTURE REQUIREMENT (STRICT):
  * Every summary MUST be strictly between 50 and 60 words in length (hard ceiling of 60 words). Never write under 50 words and NEVER exceed 60 words. Briefs over 60 words will be rejected.
  * Structure the brief as exactly 3 dense, informative sentences:
    - Sentence 1 (Incident & Target): State the vulnerability, active threat, or breach incident, identifying the affected vendor, software/hardware product, and attack vector.
    - Sentence 2 (Technical Flaw & Impact): Detail the root cause mechanism, CVE identifier or severity score (if mentioned), exploitability status (active zero-day, public PoC, or credential theft), and operational impact.
    - Sentence 3 (Action & Remediation): Specify the vendor patch availability, recommended firmware upgrade, workaround, or defensive mitigations required for security teams.
- ANTI-AI SLOP & TECHNICAL TONE (STRICT): Write like a senior cybersecurity intelligence analyst. NEVER use AI cliches or filler words ("delve", "tapestry", "in today's digital landscape", "in an era where", "serves as a stark reminder", "it is critical to note", "underscores the importance", "beacon", "testament", "crucial", "pivotal", "paramount"). Avoid generic closing platitudes ("organizations must remain vigilant", "highlighting the need for proactive security"). Require explicit attribution for studies or survey claims (e.g. "According to a report by..."). Avoid sensationalist or overclaiming verbs like "escaped" or "masterminded" — state technical facts and root causes directly. Avoid dramatic throat-clearing; lead directly with the technical subject (e.g. "Attackers are exploiting...", "A newly disclosed flaw in...", "Microsoft released a patch for...").
- If there is not enough information for a reliable summary, omit that article.
- The "index" must exactly match the supplied article index.

CATEGORY RULES (STRICT):
- "CVE": ONLY assign "CVE" if an official CVE ID (format "CVE-YYYY-XXXXX", e.g. CVE-2024-38063) is explicitly named in the title or text, AND you must mention that CVE ID in the summary. If NO specific CVE identifier is stated, DO NOT use CVE — use VULNERABILITY instead.
- "VULNERABILITY": Security flaws, zero-days, exploit chains, buffer overflows, or logic bugs that do NOT cite an official CVE ID.
- "BREACH": Unauthorized access, data leaks, credential thefts, or compromised corporate/user accounts.
- "RANSOMWARE": Ransomware infections, encryptors, extortion groups, or ransom payments.
- "NATION_STATE": State-sponsored espionage, APT hacking groups (e.g. APT28, Lazarus, Volt Typhoon), or cyber warfare.
- "GENERAL": Industry cybersecurity trends, advisories, defensive tools, regulations, policy announcements, vendor surveys/market research, or law enforcement actions (including arrests, indictments, extraditions, and prosecutions — NEVER classify prosecutions or legal sentencing as BREACH). Vendor security surveys, threat indices, and statistics must always be classified as GENERAL with LOW severity (never VULNERABILITY).

SEVERITY RULES (OBJECTIVE THREAT CRITERIA):
- "CRITICAL":
  * Active zero-day exploitation confirmed in the wild (including actively exploited Apple, Google, or Microsoft zero-days).
  * Unauthenticated Remote Code Execution (RCE) with CVSS 9.0-10.0 affecting enterprise infrastructure, firewalls, VPNs, hypervisors, or operating system kernels.
  * Mass infrastructure collapse or emergency CISA Binding Operational Directives.
  * NEGATIVE RULE: NEVER assign CRITICAL to Denial-of-Service (DoS) flaws, routine certificate refreshes, or CA-bundle updates regardless of vendor title. DoS without code execution is HIGH at most; CA refreshes are LOW/MEDIUM.
  * NEGATIVE RULE: NEVER assign CRITICAL to failed exploitation attempts where attackers were unsuccessful.
  * Unauthenticated Remote Code Execution (RCE) with CVSS 9.0-10.0 affecting enterprise infrastructure, firewalls, VPNs, hypervisors, or operating system kernels.
  * Mass infrastructure collapse or emergency CISA Binding Operational Directives.
- "HIGH":
  * Confirmed major corporate or government data breaches compromising credentials, financial records, or millions of users.
  * High-severity flaws (CVSS 7.0-8.9), critical vulnerabilities with public proof-of-concept (PoC) exploits, or authenticated RCE.
  * Active ransomware extortion attacks against prominent institutions, or targeted espionage campaigns by tracked nation-state APT groups.
- "MEDIUM":
  * Vulnerabilities requiring user interaction (phishing, social engineering, CSRF, reflected/stored XSS) or local/adjacent network access.
  * Routine scheduled security patches (Patch Tuesday) without active in-the-wild exploitation.
  * Phishing kit discoveries, credential stuffing, rogue browser extensions, or botnet disruptions.
- "LOW":
  * General cybersecurity trends, quarterly threat reports, security surveys, webinars, or academic research papers.
  * Low-severity minor bugs (CVSS < 4.0) requiring physical or high-privilege access.
  * Defensive tool releases, industry compliance updates, or legal/policy announcements.

Allowed categories:
BREACH, RANSOMWARE, CVE, VULNERABILITY, NATION_STATE, GENERAL

Allowed severities:
LOW, MEDIUM, HIGH, CRITICAL

OUTPUT FORMAT (STRICT):
You must return a valid JSON object containing an "articles" array matching this exact schema:
{
  "articles": [
    {
      "index": 0,
      "headline": "Concise Original Headline Under 10 Words",
      "summary": "Exact 50 to 60 word technical intelligence brief written as 3 dense sentences detailing incident, root cause, and mitigation.",
      "category": "BREACH | RANSOMWARE | CVE | VULNERABILITY | NATION_STATE | GENERAL",
      "severity": "LOW | MEDIUM | HIGH | CRITICAL"
    }
  ]
}
Return ONLY the raw JSON object. Do not include markdown code fences or conversational text.

Input articles:

${JSON.stringify(
  articles,
  null,
  2,
)}
`.trim();
}

// -----------------------------------------------------------------------------
// RATE LIMIT HELPERS
// -----------------------------------------------------------------------------

function parseSeconds(value) {
  if (!value) {
    return 0;
  }

  const text = String(value).trim();

  /*
   * Examples:
   * 7.66s
   * 2m59.56s
   * 12.0825s
   */

  let totalSeconds = 0;

  const minutesMatch =
    text.match(/([\d.]+)\s*m/i);

  const secondsMatch =
    text.match(/([\d.]+)\s*s/i);

  if (minutesMatch) {
    totalSeconds +=
      Number(minutesMatch[1]) * 60;
  }

  if (secondsMatch) {
    totalSeconds +=
      Number(secondsMatch[1]);
  }

  if (totalSeconds === 0) {
    const numeric = Number(text);

    if (Number.isFinite(numeric)) {
      totalSeconds = numeric;
    }
  }

  return Number.isFinite(totalSeconds)
    ? totalSeconds
    : 0;
}

function getHeader(
  headers,
  name,
) {
  return headers.get(name);
}

async function waitForRateLimitReset(
  response,
) {
  const resetValue = getHeader(
    response.headers,
    "x-ratelimit-reset-tokens",
  );

  const resetSeconds =
    parseSeconds(resetValue);

  if (resetSeconds <= 0) {
    console.log(
      "No token reset time was supplied. Waiting 15 seconds as a safety fallback...",
    );

    await sleep(15000);

    return;
  }

  // Cap wait at 60s: if reset window exceeds 60s, fail over immediately to next engine
  if (resetSeconds > 60) {
    throw new Error(
      `Groq token limit reached (reset in ${resetSeconds.toFixed(2)}s) - failing over to next engine`,
    );
  }

  const waitMilliseconds = Math.min(
    Math.ceil(
      resetSeconds * 1000,
    ) +
    RATE_LIMIT_RESET_BUFFER_MS,
    60000
  );

  console.log(
    `Groq token window resets in approximately ${resetSeconds.toFixed(
      2,
    )}s.`,
  );

  console.log(
    `Waiting ${Math.ceil(
      waitMilliseconds / 1000,
    )}s before the next request...`,
  );

  await sleep(
    waitMilliseconds,
  );
}

async function waitBetweenRequests(
  response,
) {
  const remainingTokensHeader =
    getHeader(
      response.headers,
      "x-ratelimit-remaining-tokens",
    );

  const resetTokensHeader =
    getHeader(
      response.headers,
      "x-ratelimit-reset-tokens",
    );

  const remainingTokens = Number(
    remainingTokensHeader,
  );

  console.log(
    `Groq remaining token allowance: ${
      Number.isFinite(remainingTokens)
        ? remainingTokens
        : "unknown"
    }`,
  );

  if (resetTokensHeader) {
    console.log(
      `Groq token reset: ${resetTokensHeader}`,
    );
  }

  const remainingRequestsHeader = getHeader(
    response.headers,
    "x-ratelimit-remaining-requests",
  );
  const limitRequestsHeader = getHeader(
    response.headers,
    "x-ratelimit-limit-requests",
  );
  if (remainingRequestsHeader) {
    console.log(
      `Groq remaining requests for today: ${remainingRequestsHeader}${
        limitRequestsHeader ? ` / ${limitRequestsHeader}` : ""
      }`,
    );
  }

  /*
   * If the remaining allowance is getting low,
   * wait for the actual Groq token window reset.
   */
  if (
    Number.isFinite(remainingTokens) &&
    remainingTokens <
      MIN_REMAINING_TOKENS_BEFORE_WAIT
  ) {
    console.log(
      `Remaining TPM is below ${MIN_REMAINING_TOKENS_BEFORE_WAIT}.`,
    );

    const resetSec = parseSeconds(resetTokensHeader);
    if (resetSec > 60) {
      throw new Error(
        `Groq token allowance low and reset in ${resetSec.toFixed(2)}s - failing over to next engine`,
      );
    }

    await waitForRateLimitReset(
      response,
    );

    return;
  }

  /*
   * Otherwise use a small spacing delay.
   */
  console.log(
    `Waiting ${
      MIN_DELAY_BETWEEN_REQUESTS_MS / 1000
    }s before the next Groq request...`,
  );

  await sleep(
    MIN_DELAY_BETWEEN_REQUESTS_MS,
  );
}

// -----------------------------------------------------------------------------
// STRICT JSON SCHEMA
// -----------------------------------------------------------------------------

const GROQ_RESPONSE_SCHEMA = {
  type: "object",

  properties: {
    articles: {
      type: "array",

      items: {
        type: "object",

        properties: {
          index: {
            type: "integer",
          },

          headline: {
            type: "string",
          },

          summary: {
            type: "string",
          },

          category: {
            type: "string",
            enum: [
              "BREACH",
              "RANSOMWARE",
              "CVE",
              "VULNERABILITY",
              "NATION_STATE",
              "GENERAL",
            ],
          },

          severity: {
            type: "string",
            enum: [
              "LOW",
              "MEDIUM",
              "HIGH",
              "CRITICAL",
            ],
          },
        },

        required: [
          "index",
          "headline",
          "summary",
          "category",
          "severity",
        ],

        additionalProperties: false,
      },
    },
  },

  required: [
    "articles",
  ],

  additionalProperties: false,
};

// -----------------------------------------------------------------------------
// GROQ REQUEST
// -----------------------------------------------------------------------------

async function requestGroq(
  candidates,
) {
  if (!GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is not configured.");
  }

  const prompt =
    buildBatchPrompt(
      candidates,
    );

  console.log(
    "Sending selected candidates in ONE Groq request...",
  );

  const candidateModels = [GROQ_MODEL, "llama-3.1-8b-instant"].filter(
    (m, idx, arr) => arr.indexOf(m) === idx,
  );

  for (
    let attempt = 0;
    attempt <= MAX_RATE_LIMIT_RETRIES;
    attempt++
  ) {
    const currentModel = candidateModels[Math.min(attempt, candidateModels.length - 1)];
    const requestStart =
      Date.now();

    let response;

    try {
      response = await fetch(
        GROQ_API_URL,
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${GROQ_API_KEY}`,

            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            model: currentModel,

            messages: [
              {
                role: "system",

                content:
                  "You are an authoritative cybersecurity intelligence editor. Summarize each news item into an exact 50-60 word technical brief using 3 high-density sentences. Return a valid JSON object matching the requested schema with an 'articles' array. Do not output markdown code blocks or reasoning.",
              },

              {
                role: "user",

                content: prompt,
              },
            ],

            response_format: {
              type: "json_object",
            },

            reasoning_format: "hidden",

            temperature: 0.2,

            max_completion_tokens:
              MAX_COMPLETION_TOKENS,

            stream: false,
          }),
          signal: AbortSignal.timeout(45000),
        },
      );
    } catch (error) {
      throw new Error(
        `Network error while calling Groq: ${
          error instanceof Error
            ? error.message
            : error
        }`,
      );
    }

    const duration =
      Date.now() - requestStart;

    console.log(
      `Groq request duration: ${duration} ms (model: ${currentModel})`,
    );

    console.log(
      `Groq HTTP status: ${response.status} ${response.statusText}`,
    );

    /*
     * 429 = rate limit.
     */
    if (response.status === 429) {
      const retryAfter =
        response.headers.get(
          "retry-after",
        );

      const resetTokens =
        response.headers.get(
          "x-ratelimit-reset-tokens",
        );

      console.log(
        `Groq rate limit reached.`,
      );

      if (retryAfter) {
        const retrySeconds = parseSeconds(retryAfter);
        if (retrySeconds > 60) {
          throw new Error(`Groq rate-limited (retry-after ${retrySeconds}s) - failing over to next engine`);
        }
        await sleep(Math.ceil(retrySeconds * 1000) + RATE_LIMIT_RESET_BUFFER_MS);
      } else if (resetTokens) {
        const resetSec = parseSeconds(resetTokens);
        if (resetSec > 60) {
          throw new Error(`Groq token limit reached (reset in ${resetSec}s) - failing over to next engine`);
        }
        await waitForRateLimitReset(response);
      } else {
        const fallbackSeconds =
          Math.min(
            5 * 2 ** attempt,
            30,
          );

        console.log(
          `No retry timing supplied. Waiting ${fallbackSeconds}s...`,
        );

        await sleep(
          fallbackSeconds * 1000,
        );
      }

      if (
        attempt <
        MAX_RATE_LIMIT_RETRIES
      ) {
        console.log(
          `Retrying Groq request (${attempt + 1}/${MAX_RATE_LIMIT_RETRIES})...`,
        );

        continue;
      }

      throw new Error(
        "Groq rate limit remained active after all retries.",
      );
    }

    const responseText =
      await response.text();

    let payload = null;

    try {
      payload =
        JSON.parse(
          responseText,
        );
    } catch {
      throw new Error(
        `Groq returned non-JSON HTTP response: ${truncateText(
          responseText,
          1000,
        )}`,
      );
    }

    if (!response.ok) {
      const message =
        payload?.error?.message ||
        `Groq request failed with HTTP ${response.status}.`;

      if (response.status === 400 && currentModel !== "llama-3.1-8b-instant" && attempt < MAX_RATE_LIMIT_RETRIES) {
        console.warn(`[Groq] ${currentModel} returned 400 (${message}). Retrying with llama-3.1-8b-instant...`);
        continue;
      }

      throw new Error(
        message,
      );
    }

    if (payload?.error) {
      throw new Error(
        payload.error.message ||
          "Groq returned an API error.",
      );
    }

    if (
      !Array.isArray(
        payload?.choices,
      ) ||
      payload.choices.length === 0
    ) {
      console.log(
        "Groq response does not contain a choices array.",
      );

      console.log(
        "Groq response structure:",
      );

      console.log(
        JSON.stringify(
          payload,
          null,
          2,
        ).slice(0, 4000),
      );

      return [];
    }

    const choice =
      payload.choices[0];

    const content =
      choice?.message?.content ||
      "";

    console.log(
      `Groq finish reason: ${
        choice?.finish_reason ||
        "unknown"
      }`,
    );

    console.log(
      `Groq response content length: ${content.length} characters.`,
    );

    if (!content.trim()) {
      console.log(
        "Groq returned an empty content response.",
      );

      return [];
    }

    console.log(
      "Parsing Groq JSON response...",
    );

    const parsed =
      safeJsonParse(
        content,
      );

    if (!parsed) {
      console.log(
        "Could not parse Groq content as JSON.",
      );

      console.log(
        "Response preview:",
      );

      console.log(
        content.slice(
          0,
          4000,
        ),
      );

      return [];
    }

    const articles =
      extractArticleArray(
        parsed,
      );

    console.log(
      `Groq returned ${articles.length} article results.`,
    );

    /*
     * Print rate information.
     */
    const remainingTokens =
      response.headers.get(
        "x-ratelimit-remaining-tokens",
      );

    const resetTokens =
      response.headers.get(
        "x-ratelimit-reset-tokens",
      );

    if (remainingTokens) {
      console.log(
        `Groq remaining token allowance: ${remainingTokens}`,
      );
    }

    if (resetTokens) {
      console.log(
        `Groq token reset: ${resetTokens}`,
      );
    }

    /*
     * IMPORTANT:
     *
     * Wait BEFORE returning so the next batch
     * cannot immediately hit the TPM ceiling.
     */
    await waitBetweenRequests(
      response,
    );

    return articles;
  }

  return [];
}

// -----------------------------------------------------------------------------
// GEMINI REQUEST (Resilient $0.00 Backup Engine)
// -----------------------------------------------------------------------------

async function requestGemini(candidates) {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const prompt = buildBatchPrompt(candidates);
  console.log(`Sending batch to Gemini AI fallback (${GEMINI_MODEL})...`);

  const modelsToTry = [GEMINI_MODEL, "gemini-3.8-flash", "gemini-3.5-flash", "gemini-3.0-flash"].filter(
    (m, idx, arr) => arr.indexOf(m) === idx,
  );

  let lastError = null;

  for (const model of modelsToTry) {
    try {
      const nativeUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`;
      const response = await fetch(nativeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text:
                    "You are an authoritative cybersecurity intelligence editor. Summarize each news item into an exact 50-60 word technical brief using 3 high-density sentences. Return ONLY valid JSON adhering to the requested schema. Do not provide markdown code blocks, explanations, or reasoning.\n\n" +
                    prompt,
                },
              ],
            },
          ],
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.2,
            maxOutputTokens: MAX_COMPLETION_TOKENS,
          },
        }),
        signal: AbortSignal.timeout(45000),
      });

      if (!response.ok) {
        const errText = await response.text();
        console.warn(`[Gemini Native] ${model} HTTP ${response.status}: ${truncateText(errText, 300)}`);
        lastError = new Error(`Gemini ${model} failed with HTTP ${response.status}: ${truncateText(errText, 150)}`);
        continue;
      }

      const payload = await response.json();
      const content = payload?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      if (!content.trim()) {
        console.warn(`[Gemini Native] ${model} returned an empty content response.`);
        continue;
      }

      const parsed = safeJsonParse(content);
      if (!parsed) {
        console.warn(`[Gemini Native] Could not parse ${model} content as JSON: ${truncateText(content, 200)}`);
        continue;
      }

      const articles = extractArticleArray(parsed);
      console.log(`Gemini (${model}) returned ${articles.length} article results.`);
      if (!articles || articles.length === 0) {
        console.warn(`[Gemini Native] ${model} returned 0 valid article objects.`);
        continue;
      }

      // 6.0s delay guarantees instantaneous rate stays <= 7.5 RPM, well below Gemini 10 RPM ceiling
      await sleep(6000);
      return articles;
    } catch (err) {
      console.warn(`[Gemini Native] ${model} error: ${err.message}`);
      lastError = err;
    }
  }

  throw lastError || new Error("All Gemini models failed to generate content.");
}

// -----------------------------------------------------------------------------
// OPENROUTER REQUEST (Interleaved AI Partner)
// -----------------------------------------------------------------------------

async function requestOpenRouter(candidates) {
  if (!OPENROUTER_API_KEY) {
    throw new Error("OPENROUTER_API_KEY is not configured.");
  }

  const prompt = buildBatchPrompt(candidates);
  console.log(`Sending batch to OpenRouter (${OPENROUTER_MODEL})...`);

  const response = await fetch(OPENROUTER_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "HTTP-Referer": "https://secubuzz.com",
      "X-Title": "SecuBuzz News Ingestion",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are an authoritative cybersecurity intelligence editor. Summarize each news item into an exact 50-60 word technical brief using 3 high-density sentences. Return ONLY valid JSON adhering to the requested schema. Do not provide explanations or markdown tags.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.2,
      max_tokens: MAX_COMPLETION_TOKENS,
    }),
    signal: AbortSignal.timeout(45000),
  });

  const responseText = await response.text();
  let payload = null;

  try {
    payload = JSON.parse(responseText);
  } catch {
    throw new Error(
      `OpenRouter returned non-JSON HTTP response: ${truncateText(responseText, 500)}`,
    );
  }

  if (!response.ok) {
    if (response.status === 401 || payload?.error?.message?.includes("User not found")) {
      openRouterPermanentlyFailed = true;
      console.warn("[OpenRouter] Invalid credentials (HTTP 401 / User not found). Deactivating OpenRouter for this run.");
    }
    throw new Error(
      payload?.error?.message ||
        `OpenRouter request failed with HTTP ${response.status}`,
    );
  }

  const choice = payload?.choices?.[0];
  const content = choice?.message?.content || "";
  if (!content.trim()) {
    throw new Error("OpenRouter returned an empty content response.");
  }

  const parsed = safeJsonParse(content);
  if (!parsed) {
    throw new Error("Could not parse OpenRouter content as JSON.");
  }

  const articles = extractArticleArray(parsed);
  console.log(`OpenRouter returned ${articles.length} article results.`);
  if (!articles || articles.length === 0) {
    throw new Error("OpenRouter returned 0 valid article objects.");
  }

  await sleep(1500);
  return articles;
}

// -----------------------------------------------------------------------------
// INTERLEAVED ROTATING MULTI-ENGINE DISPATCHER
// -----------------------------------------------------------------------------

function getRotatedEngines() {
  const primaryPool = [];
  if (GROQ_API_KEY) {
    primaryPool.push({ name: `Groq (${GROQ_MODEL})`, run: requestGroq });
  }
  if (GEMINI_API_KEY) {
    primaryPool.push({ name: `Gemini (${GEMINI_MODEL})`, run: requestGemini });
  }

  if (primaryPool.length === 0 && (!OPENROUTER_API_KEY || openRouterPermanentlyFailed)) return [];

  // Alternates hourly lead 50/50 between Groq and Gemini (12 hours each per day)
  let rotated = [];
  if (primaryPool.length > 0) {
    const currentHour = new Date().getUTCHours();
    const leadIndex = currentHour % primaryPool.length;
    rotated = [...primaryPool.slice(leadIndex), ...primaryPool.slice(0, leadIndex)];
  }

  // OpenRouter is kept strictly as the last-resort failover engine
  // to protect its unfunded 50 req/day free tier from being tripped by routine lead hours
  if (OPENROUTER_API_KEY && !openRouterPermanentlyFailed) {
    rotated.push({ name: `OpenRouter (${OPENROUTER_MODEL})`, run: requestOpenRouter });
  }

  return rotated;
}

async function requestAi(candidates) {
  const engines = getRotatedEngines();
  if (engines.length === 0) {
    throw new Error(
      "No AI API key found (neither GROQ_API_KEY, GEMINI_API_KEY, nor OPENROUTER_API_KEY).",
    );
  }

  let lastError = null;
  for (let i = 0; i < engines.length; i++) {
    const engine = engines[i];
    try {
      console.log(
        `[AI Dispatcher] Using engine ${i === 0 ? "LEAD (Hourly Rotation)" : "FAILOVER"}: ${engine.name}`,
      );
      const results = await engine.run(candidates);
      if (!Array.isArray(results) || results.length === 0) {
        throw new Error(`${engine.name} returned 0 valid article results.`);
      }
      return results;
    } catch (err) {
      console.warn(`[AI Dispatcher] ${engine.name} attempt failed: ${err.message}`);
      lastError = err;
      if (i < engines.length - 1) {
        console.log(
          `[AI Dispatcher] Seamlessly switching to next engine: ${engines[i + 1].name}...`,
        );
      }
    }
  }

  throw lastError || new Error("All configured AI engines failed for this batch.");
}

// -----------------------------------------------------------------------------
// LOAD EXISTING DATA
// -----------------------------------------------------------------------------

const existingFeed =
  await readJsonFile(
    FEED_FILE,
    [],
  );

const existingSeenUrls =
  await readJsonFile(
    SEEN_URLS_FILE,
    [],
  );

const feedArticles =
  Array.isArray(existingFeed)
    ? existingFeed
    : Array.isArray(
        existingFeed?.articles,
      )
      ? existingFeed.articles
      : [];

const seenUrls =
  new Set(
    Array.isArray(
      existingSeenUrls,
    )
      ? existingSeenUrls.map(
          normaliseUrl,
        )
      : [],
  );

// -----------------------------------------------------------------------------
// START
// -----------------------------------------------------------------------------

console.log(
  "Starting SecuBuzz feed ingestion...",
);

const activeRotation = getRotatedEngines();
console.log(
  `Active AI engines: ${activeRotation.map((e) => e.name).join(" -> ")}`,
);
if (activeRotation.length > 0) {
  console.log(`This hour's lead engine: ${activeRotation[0].name}`);
}

console.log(
  `AI batch size: ${ARTICLES_PER_AI_BATCH}`,
);

console.log(
  `Maximum candidates per run: ${MAX_NEW_CANDIDATES}`,
);

console.log(
  `AI description limit: ${DESCRIPTION_MAX_LENGTH} characters`,
);

console.log(
  `Maximum completion tokens: ${MAX_COMPLETION_TOKENS}`,
);

console.log(
  `Minimum request spacing: ${
    MIN_DELAY_BETWEEN_REQUESTS_MS / 1000
  } seconds`,
);

console.log(
  `TPM safety threshold: ${MIN_REMAINING_TOKENS_BEFORE_WAIT} tokens`,
);

console.log(
  `Using feed file: ${FEED_FILE}`,
);

console.log(
  `Using seen URL file: ${SEEN_URLS_FILE}`,
);

console.log(
  `Existing feed contains ${feedArticles.length} articles.`,
);

console.log(
  `Existing seen URL history contains ${seenUrls.size} URLs.`,
);

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

// -----------------------------------------------------------------------------
// SEMANTIC CONTEXT COMPARISON & DEDUPLICATION (STRICT CONTEXT COMPARISON)
// -----------------------------------------------------------------------------

function extractCvesFromText(text) {
  const matches = (text || '').match(/CVE-\d{4}-\d{4,7}/gi);
  return matches ? Array.from(new Set(matches.map(c => c.toUpperCase()))) : [];
}

const COMMON_HEADLINE_WORDS = new Set([
  'the', 'and', 'for', 'with', 'from', 'after', 'into', 'over', 'under', 'amid',
  'security', 'cyber', 'cybersecurity', 'infosec', 'threat', 'threats', 'attacks', 'attack',
  'hackers', 'hacker', 'hacking', 'hacked', 'flaw', 'flaws', 'vulnerability', 'vulnerabilities',
  'patch', 'patches', 'update', 'updates', 'report', 'reports', 'warning', 'warns', 'alert', 'alerts',
  'breach', 'breaches', 'data', 'ransomware', 'malware', 'zero-day', 'exploit', 'exploits',
  'unpatched', 'released', 'releases', 'fixes', 'fixed', 'incident', 'incidents', 'service', 'services',
  'system', 'systems', 'platform', 'platforms', 'tool', 'tools', 'device', 'devices', 'software',
  'firmware', 'hardware', 'critical', 'high', 'medium', 'low', 'new', 'recent', 'latest', 'active',
  'actively', 'widespread', 'major', 'first', 'second', 'third', 'four', 'five', 'week', 'today',
  'news', 'blog', 'post', 'article', 'says', 'finds', 'shows', 'leaves', 'exposes'
]);

function extractSubjectAnchors(title, summary) {
  const text = ((title || '') + ' ' + (summary || '')).toLowerCase();
  const cves = extractCvesFromText(text);

  const properNouns = (title || '')
    .replace(/[^a-zA-Z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2)
    .map(w => w.toLowerCase())
    .filter(w => !COMMON_HEADLINE_WORDS.has(w));

  return Array.from(new Set([...cves.map(c => c.toLowerCase()), ...properNouns]));
}

async function requestGroqContextComparison(storyA, storyB, prompt) {
  if (!GROQ_API_KEY) throw new Error("GROQ_API_KEY not configured");

  const candidateModels = [GROQ_MODEL, "llama-3.1-8b-instant"].filter(
    (m, idx, arr) => arr.indexOf(m) === idx,
  );

  let lastError = null;
  for (const model of candidateModels) {
    try {
      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model,
          messages: [
            {
              role: 'system',
              content: 'You are an authoritative cybersecurity intelligence editor. Return valid JSON adhering strictly to the requested schema.'
            },
            { role: 'user', content: prompt }
          ],
          response_format: { type: 'json_object' },
          reasoning_format: 'hidden',
          temperature: 0.1,
          max_completion_tokens: 1200
        }),
        signal: AbortSignal.timeout(30000)
      });

      const text = await response.text();
      let payload = null;
      try {
        payload = JSON.parse(text);
      } catch {
        lastError = new Error(`Groq returned non-JSON: ${truncateText(text, 200)}`);
        continue;
      }

      if (!response.ok) {
        lastError = new Error(payload?.error?.message || `Groq HTTP ${response.status}`);
        continue;
      }

      const content = payload?.choices?.[0]?.message?.content || '';
      const parsed = safeJsonParse(content);
      if (!parsed) {
        lastError = new Error("Could not parse Groq context comparison response as JSON");
        continue;
      }

      await sleep(2500);
      return parsed;
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError || new Error("All Groq models failed for context comparison.");
}

async function requestGeminiContextComparison(storyA, storyB, prompt) {
  if (!GEMINI_API_KEY) throw new Error("GEMINI_API_KEY not configured");

  const candidateModels = [GEMINI_MODEL, "gemini-3.8-flash", "gemini-3.5-flash", "gemini-3.0-flash"].filter(
    (m, idx, arr) => arr.indexOf(m) === idx,
  );

  let lastError = null;
  for (const model of candidateModels) {
    try {
      const nativeUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`;
      const response = await fetch(nativeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.1,
            maxOutputTokens: 1200,
          },
        }),
        signal: AbortSignal.timeout(30000),
      });

      if (!response.ok) {
        const errText = await response.text();
        lastError = new Error(`Gemini ${model} comparison HTTP ${response.status}: ${truncateText(errText, 150)}`);
        continue;
      }

      const payload = await response.json();
      const content = payload?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      const parsed = safeJsonParse(content);
      if (!parsed) {
        lastError = new Error(`Could not parse Gemini ${model} comparison response as JSON`);
        continue;
      }

      await sleep(6000);
      return parsed;
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError || new Error("All Gemini models failed for context comparison.");
}

async function requestOpenRouterContextComparison(storyA, storyB, prompt) {
  if (!OPENROUTER_API_KEY) throw new Error("OPENROUTER_API_KEY not configured");

  const response = await fetch(OPENROUTER_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      'HTTP-Referer': 'https://secubuzz.com',
      'X-Title': 'SecuBuzz Context Comparison',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages: [
        {
          role: 'system',
          content: 'You are an authoritative cybersecurity intelligence editor. Return valid JSON adhering strictly to the requested schema.'
        },
        { role: 'user', content: prompt }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.1,
      max_tokens: 1200
    })
  });

  const text = await response.text();
  let payload = null;
  try {
    payload = JSON.parse(text);
  } catch {
    throw new Error(`OpenRouter returned non-JSON: ${truncateText(text, 200)}`);
  }

  if (!response.ok) {
    throw new Error(payload?.error?.message || `OpenRouter HTTP ${response.status}`);
  }

  const content = payload?.choices?.[0]?.message?.content || '';
  const parsed = safeJsonParse(content);
  if (!parsed) throw new Error("Could not parse OpenRouter context comparison response as JSON");

  return parsed;
}

let totalAiComparisonsThisRun = 0;
const MAX_AI_COMPARISONS_PER_RUN = 10;

async function compareStoryContext(storyA, storyB) {
  // Tier 1: Deterministic Fast-Paths (Zero AI latency/token cost)

  // 1a. Identical or normalized source URL
  const urlA = normaliseUrl(storyA.sourceUrl || storyA.url || '');
  const urlB = normaliseUrl(storyB.sourceUrl || storyB.url || '');
  if (urlA && urlB && urlA === urlB) {
    return { isSameIncident: true, reason: 'Identical source URL' };
  }

  // 1b. Disjoint CVE Identifiers:
  // If BOTH stories explicitly cite CVE IDs and their CVE sets have zero overlap,
  // they are mathematically reporting on different vulnerabilities. Context is DIFFERENT.
  const cvesA = extractCvesFromText((storyA.title || '') + ' ' + (storyA.summary || ''));
  const cvesB = extractCvesFromText((storyB.title || '') + ' ' + (storyB.summary || ''));
  if (cvesA.length > 0 && cvesB.length > 0) {
    const hasSharedCve = cvesA.some(c => cvesB.includes(c));
    if (!hasSharedCve) {
      return {
        isSameIncident: false,
        reason: `Different CVE identifiers: ${cvesA.join(', ')} vs ${cvesB.join(', ')}`
      };
    }
  }

  // 1c. Publication time gap > 5 days (unless identical CVE)
  const timeA = Date.parse(storyA.publishedAt || storyA.pubDate || 0) || 0;
  const timeB = Date.parse(storyB.publishedAt || storyB.pubDate || 0) || 0;
  const timeDiffDays = Math.abs(timeA - timeB) / (1000 * 3600 * 24);
  const sharedCve = cvesA.length > 0 && cvesB.some(c => cvesA.includes(c));
  if (timeDiffDays > 5 && !sharedCve) {
    return { isSameIncident: false, reason: 'Stories published more than 5 days apart' };
  }

  // 1d. Anchor subject / entity check:
  // If Story A and Story B do not share at least ONE common subject or entity anchor,
  // they cannot possibly be about the same incident.
  const anchorsA = extractSubjectAnchors(storyA.title || '', storyA.summary || '');
  const anchorsB = extractSubjectAnchors(storyB.title || '', storyB.summary || '');
  const sharedAnchors = anchorsA.filter(a => anchorsB.includes(a));

  const wordsA = new Set((storyA.title || '').toLowerCase().split(/\s+/).filter(w => w.length > 3 && !COMMON_HEADLINE_WORDS.has(w)));
  const wordsB = new Set((storyB.title || '').toLowerCase().split(/\s+/).filter(w => w.length > 3 && !COMMON_HEADLINE_WORDS.has(w)));
  const titleOverlap = [...wordsA].filter(w => wordsB.has(w)).length;

  const isCandidate = sharedCve || sharedAnchors.length >= 2 || titleOverlap >= 2;
  if (!isCandidate) {
    return { isSameIncident: false, reason: 'Insufficient subject/title overlap' };
  }

  if (totalAiComparisonsThisRun >= MAX_AI_COMPARISONS_PER_RUN) {
    return { isSameIncident: false, reason: 'AI comparison budget reached - failing open to keep news' };
  }
  totalAiComparisonsThisRun++;

  // Tier 2: Semantic AI Context Comparison
  // When stories share a vendor/product or topic within 5 days, compare their actual real-world context!
  // If context is DIFFERENT (even if keywords match): INGEST IT AND SHOW IT!
  // If context is SAME: MERGE AND PRESENT THE BEST LOOKING BRIEF UNDER 60 WORDS!
  const prompt = `You are an authoritative cybersecurity intelligence editor for SecuBuzz.
Compare the following two cybersecurity news stories and determine if they describe the EXACT SAME real-world incident, vulnerability, breach, or action.

STORY A:
Source: ${storyA.source || 'Source A'}
Title: ${storyA.title || storyA.headline || ''}
Summary: ${storyA.summary || storyA.description || ''}

STORY B:
Source: ${storyB.source || 'Source B'}
Title: ${storyB.title || storyB.headline || ''}
Summary: ${storyB.summary || storyB.description || ''}

RULES FOR CONTEXT COMPARISON:
1. If the context is DIFFERENT (even if keywords, products, or company names match):
   - Examples of DIFFERENT context:
     * One is a product feature, tool release, or general survey; the other is a breach or vulnerability.
     * Two different vulnerabilities, bugs, or CVEs affecting the same vendor or product.
     * Two different legal actions, reports, or research topics.
     * Different attack campaigns, threat actors, or victims.
   - When context is DIFFERENT: set "isSameIncident": false.

2. If the context is the SAME:
   - Both stories are reporting on the EXACT SAME underlying real-world event (e.g. multiple outlets reporting on the same breach at the same company, the same vulnerability/patch release, or the same law enforcement action).
   - Set "isSameIncident": true.
   - Present the BEST LOOKING, highest-density brief strictly between 50 and 60 words (under 60 words):
     * Exactly 3 dense sentences: (1) Incident & Target, (2) Technical Flaw & Impact, (3) Action & Remediation.
     * Word count MUST be between 50 and 60 words.
     * Zero AI filler or slop ("delve", "tapestry", "in today's digital landscape", "vital reminder").
     * Choose the most accurate headline, category (BREACH, RANSOMWARE, CVE, VULNERABILITY, NATION_STATE, GENERAL), and severity (LOW, MEDIUM, HIGH, CRITICAL).

Return ONLY valid JSON matching this exact structure:
{
  "isSameIncident": boolean,
  "reason": "short explanation of context comparison",
  "bestHeadline": "string (clear factual headline, required if isSameIncident is true)",
  "bestSummary": "string (50-60 word brief, required if isSameIncident is true)",
  "category": "BREACH" | "RANSOMWARE" | "CVE" | "VULNERABILITY" | "NATION_STATE" | "GENERAL",
  "severity": "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
}`.trim();

  const engines = getRotatedEngines();
  let result = null;

  for (let i = 0; i < engines.length; i++) {
    const engine = engines[i];
    try {
      if (engine.name.includes("Groq")) {
        result = await requestGroqContextComparison(storyA, storyB, prompt);
      } else if (engine.name.includes("Gemini")) {
        result = await requestGeminiContextComparison(storyA, storyB, prompt);
      } else if (engine.name.includes("OpenRouter")) {
        result = await requestOpenRouterContextComparison(storyA, storyB, prompt);
      }
      if (result && typeof result.isSameIncident === "boolean") {
        break;
      }
    } catch (err) {
      console.warn(`[Context Comparison] ${engine.name} check failed: ${err.message}`);
    }
  }

  // Conservative Fail-Open Safety:
  // If all AI engines fail or response is invalid, NEVER drop news! Default to DIFFERENT context!
  if (!result || typeof result.isSameIncident !== "boolean") {
    console.warn(`[Context Comparison] AI comparison unavailable. Defaulting to DIFFERENT context to preserve news.`);
    return { isSameIncident: false, reason: "AI comparison unavailable - failing open to keep news" };
  }

  // Word count and quality guardrail on merged brief
  if (result.isSameIncident) {
    const words = wordCount(result.bestSummary);
    let finalSummary = cleanText(result.bestSummary || '');
    let finalHeadline = cleanText(result.bestHeadline || '') || storyA.title;

    if (words < 48 || words > 65) {
      const wordsA = wordCount(storyA.summary);
      const wordsB = wordCount(storyB.summary);
      if (wordsA >= 48 && wordsA <= 65) {
        finalSummary = storyA.summary;
        finalHeadline = storyA.title;
      } else if (wordsB >= 48 && wordsB <= 65) {
        finalSummary = storyB.summary;
        finalHeadline = storyB.title;
      }
    }

    return {
      isSameIncident: true,
      reason: result.reason || 'Verified identical real-world event',
      bestHeadline: finalHeadline,
      bestSummary: finalSummary,
      category: result.category || storyA.category || 'GENERAL',
      severity: result.severity || storyA.severity || 'MEDIUM'
    };
  }

  return {
    isSameIncident: false,
    reason: result.reason || 'Different context'
  };
}

function isSameVulnCandidate(candText, candTitle, entryText, entryTitle) {
  const anchorsA = extractSubjectAnchors(candTitle, candText);
  const anchorsB = extractSubjectAnchors(entryTitle, entryText);
  const shared = anchorsA.filter(a => anchorsB.includes(a));
  return shared.length >= 2;
}


// -----------------------------------------------------------------------------
// FETCH ALL RSS SOURCES
// -----------------------------------------------------------------------------

const allCandidates = [];

for (const feed of FEEDS) {
  try {
    const items =
      await fetchFeed(
        feed,
      );

    allCandidates.push(
      ...items,
    );
  } catch (error) {
    console.error(
      `Failed to fetch ${feed.name}:`,
      error instanceof Error
        ? error.message
        : error,
    );
  }
}

// -----------------------------------------------------------------------------
// REMOVE DUPLICATES
// -----------------------------------------------------------------------------

const uniqueCandidates =
  uniqueByUrl(
    allCandidates,
  );

const newCandidates =
  uniqueCandidates.filter(
    (candidate) =>
      !seenUrls.has(
        normaliseUrl(
          candidate.url,
        ),
      ),
  );

console.log(
  `Found ${newCandidates.length} new RSS candidates.`,
);

// -----------------------------------------------------------------------------
// FILTER & DIVERSIFY CANDIDATES
// -----------------------------------------------------------------------------

/*
 * Filter out promotional/marketing noise, off-topic posts, future-dated events,
 * and stale backlog items (> 4 days / 96 hours old).
 */
const now = Date.now();
const MAX_CANDIDATE_AGE_MS = 4 * 24 * 60 * 60 * 1000; // 4 days (96 hours) maximum candidate age

const filteredCandidates = [];

for (const candidate of newCandidates) {
  const url = normaliseUrl(candidate.url);
  const titleLower = String(candidate.title || "").toLowerCase();

  // 1. Promotional, marketing, and off-topic noise filtering
  if (
    titleLower.includes("named a leader") ||
    titleLower.includes("financial results") ||
    titleLower.includes("earnings release") ||
    titleLower.includes("webinar") ||
    titleLower.includes("virtual event") ||
    titleLower.includes("squid blogging")
  ) {
    seenUrls.add(url);
    continue;
  }

  // 2. Publication date bounds (Reject future > 24h, and reject stale > 4 days)
  if (candidate.publishedAt) {
    const publishedTime = new Date(candidate.publishedAt).getTime();
    if (Number.isFinite(publishedTime)) {
      if (publishedTime > now + 86400000) {
        seenUrls.add(url);
        continue;
      }
      if (publishedTime < now - MAX_CANDIDATE_AGE_MS) {
        seenUrls.add(url);
        continue;
      }
    }
  }

  filteredCandidates.push(candidate);
}

/*
 * THREAT-AWARE PRIORITY SCORING & ANTI-STARVATION SELECTION
 */
function calculateCandidatePriority(candidate) {
  const title = (candidate.title || '').toLowerCase();
  const desc = (candidate.description || '').toLowerCase();
  const text = `${title} ${desc}`;

  let score = 10; // Baseline score for valid cybersecurity stories

  // Tier 1 (+50): Active in-the-wild zero-days, RCE, kernel, auth bypass, CVSS 9/10, hardware implants
  if (
    /actively exploit|in the wild|under attack|zero-?day|0-?day|kernel|remote code execution|\brce\b|auth(?:orization|entication)? bypass|privilege escalation|cvss (?:9|10)|supply chain|hardware implant/i.test(text)
  ) {
    score += 50;
  }

  // Tier 2 (+25): Known CVEs, critical/high flaws, ransomware, breaches, backdoors, malware
  if (
    /cve-202\d-\d+|\bflaw\b|\bvulnerabilit(?:y|ies)\b|\bbreach\b|\bransomware\b|\bbackdoor\b|\bmalware\b|\bexploit\b|\bhackers?\b/i.test(text)
  ) {
    score += 25;
  }

  // Demote opinion pieces, advice, surveys, or podcasts that bypass initial filter
  if (
    /survey|report reveals|webinar|how to|why urgent|opinions?|predictions?|podcast/i.test(title)
  ) {
    score -= 15;
  }

  return score;
}

for (const candidate of filteredCandidates) {
  candidate.priorityScore = calculateCandidatePriority(candidate);
}

/*
 * Sort primarily by Threat Priority Score (descending),
 * then chronologically by publication time (newest first).
 */
filteredCandidates.sort((a, b) => {
  if (b.priorityScore !== a.priorityScore) {
    return b.priorityScore - a.priorityScore;
  }
  const timeA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
  const timeB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
  return (Number.isFinite(timeB) ? timeB : 0) - (Number.isFinite(timeA) ? timeA : 0);
});

/*
 * Multi-Source Diversity with Anti-Starvation Backlog Drain:
 * - Pass 1: Allocate up to 30 candidates from high-priority & breaking items (newest first),
 *   allowing up to 5 for high-volume newsrooms on critical days, 2-3 for others.
 * - Pass 2: Fill the remaining slots up to MAX_NEW_CANDIDATES (up to 10 slots) with the OLDEST
 *   unseen valid candidates (FIFO backlog drain) so older stories never starve.
 */
const sourceCounts = new Map();
const selectedCandidates = [];
const deferredPool = [];

for (const candidate of filteredCandidates) {
  const currentCount = sourceCounts.get(candidate.source) || 0;
  const isHighVolumeSource = candidate.source === 'The Hacker News' || candidate.source === 'BleepingComputer';
  const isHighThreat = candidate.priorityScore >= 60;
  const maxPerSource = isHighThreat ? (isHighVolumeSource ? 5 : 3) : (isHighVolumeSource ? 4 : 2);

  if (currentCount < maxPerSource && selectedCandidates.length < 30) {
    selectedCandidates.push(candidate);
    sourceCounts.set(candidate.source, currentCount + 1);
  } else {
    deferredPool.push(candidate);
  }
}

// Pass 2 (Anti-Starvation Drain): Sort deferred pool OLDEST UNSEEN FIRST
deferredPool.sort((a, b) => {
  if (b.priorityScore >= 60 && a.priorityScore < 60) return 1;
  if (a.priorityScore >= 60 && b.priorityScore < 60) return -1;
  const timeA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
  const timeB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
  return (Number.isFinite(timeA) ? timeA : 0) - (Number.isFinite(timeB) ? timeB : 0);
});

for (const candidate of deferredPool) {
  if (selectedCandidates.length >= MAX_NEW_CANDIDATES) break;
  const currentCount = sourceCounts.get(candidate.source) || 0;
  const isHighVolumeSource = candidate.source === 'The Hacker News' || candidate.source === 'BleepingComputer';
  const maxBacklogPerSource = isHighVolumeSource ? 7 : 4;

  if (currentCount < maxBacklogPerSource) {
    selectedCandidates.push(candidate);
    sourceCounts.set(candidate.source, currentCount + 1);
  }
}

console.log(
  `Selected ${selectedCandidates.length} candidates for processing.`,
);

if (
  selectedCandidates.length > 0
) {
  console.log(
    "Selected articles:",
  );

  selectedCandidates.forEach(
    (candidate, index) => {
      console.log(
        `  ${index + 1}. [${candidate.source}] ${candidate.title}`,
      );
    },
  );
}

// -----------------------------------------------------------------------------
// CROSS-FEED CVE CORROBORATION (FUTURE-PROOF CVE INTELLIGENCE)
// -----------------------------------------------------------------------------
/*
 * If an RSS publisher (like BleepingComputer) truncates their RSS description with [...]
 * or omits the CVE identifier, cross-reference across all gathered candidates from other
 * feeds (e.g. SANS ISC, SecurityWeek, The Hacker News) and recent feed items.
 * If a sister feed covers the same vulnerability/vendor within 72h and contains a verified CVE,
 * inject that corroborated CVE into the candidate's description so the AI model includes it!
 */
const cveKnowledgeBase = [];

for (const cand of allCandidates) {
  const text = (cand.title || '') + ' ' + (cand.description || '');
  const cves = extractCvesFromText(text);
  if (cves.length > 0) {
    cveKnowledgeBase.push({
      cves,
      title: cand.title || '',
      text,
      time: cand.publishedAt ? new Date(cand.publishedAt).getTime() : Date.now(),
      source: cand.source
    });
  }
}

for (const cand of selectedCandidates) {
  const currentText = (cand.title || '') + ' ' + (cand.description || '');
  const currentCves = extractCvesFromText(currentText);
  if (currentCves.length > 0) continue;

  const titleLower = (cand.title || '').toLowerCase();
  const descLower = (cand.description || '').toLowerCase();
  const isVulnTopic =
    titleLower.includes('vulnerability') ||
    titleLower.includes('flaw') ||
    titleLower.includes('rce') ||
    titleLower.includes('zero-day') ||
    titleLower.includes('exploit') ||
    titleLower.includes('patch') ||
    titleLower.includes('mitigation') ||
    titleLower.includes('bypass') ||
    descLower.includes('remote code execution') ||
    descLower.includes('security flaw') ||
    descLower.includes('vulnerability');

  if (!isVulnTopic) continue;

  const candTime = cand.publishedAt ? new Date(cand.publishedAt).getTime() : Date.now();

  for (const entry of cveKnowledgeBase) {
    const timeDiffDays = Math.abs(candTime - entry.time) / 86400000;
    if (timeDiffDays > 3) continue;

    const matched = isSameVulnCandidate(
      currentText,
      cand.title || '',
      entry.text,
      entry.title,
    );

    if (matched) {
      const primaryCve = entry.cves[0];
      console.log(`[CVE Corroboration] Linked ${primaryCve} from ${entry.source} to candidate: "${cand.title}"`);
      cand.description = `${cand.description || ''} (Corroborated Threat Intelligence: Associated CVE is ${primaryCve}).`;
      break;
    }
  }
}

// -----------------------------------------------------------------------------
// PROCESS IN BATCHES
// -----------------------------------------------------------------------------

const generatedArticles = [];

const totalBatches =
  Math.ceil(
    selectedCandidates.length /
      ARTICLES_PER_AI_BATCH,
  );

for (
  let start = 0;
  start <
  selectedCandidates.length;
  start +=
    ARTICLES_PER_AI_BATCH
) {
  const batch =
    selectedCandidates.slice(
      start,
      start +
        ARTICLES_PER_AI_BATCH,
    );

  const batchNumber =
    Math.floor(
      start /
        ARTICLES_PER_AI_BATCH,
    ) + 1;

  console.log("");

  console.log(
    `Processing batch ${batchNumber}/${totalBatches}...`,
  );

  console.log(
    `Batch contains ${batch.length} articles.`,
  );

  /*
   * Give every candidate a batch-local integer index.
   *
   * This is deliberately smaller than asking the AI
   * to reproduce long source URLs.
   */
  const indexedBatch =
    batch.map(
      (candidate, index) => ({
        ...candidate,
        aiIndex: index,
      }),
    );

  const candidateMap =
    new Map(
      indexedBatch.map(
        (candidate) => [
          candidate.aiIndex,
          candidate,
        ],
      ),
    );

  let rawResults = [];

  try {
    rawResults =
      await requestAi(
        indexedBatch,
      );
  } catch (error) {
    console.error(
      "AI summarization batch failed:",
      error instanceof Error
        ? error.message
        : error,
    );

    /*
     * IMPORTANT:
     *
     * Failed articles are NOT added to seenUrls.
     *
     * Sleep 6s to avoid hammering APIs if rate-limited.
     */
    await sleep(6000);
    continue;
  }

  const validArticles = [];

  for (const rawArticle of rawResults) {
    const article =
      validateAiArticle(
        rawArticle,
        candidateMap,
      );

    if (!article) {
      console.log(
        "Ignoring invalid AI article result.",
      );

      continue;
    }

    validArticles.push(
      article,
    );
  }

  console.log(
    `Recovered ${validArticles.length} valid articles from this batch.`,
  );

  generatedArticles.push(
    ...validArticles,
  );

  /*
   * ONLY successfully generated articles
   * become "seen".
   */
  for (const article of validArticles) {
    seenUrls.add(
      normaliseUrl(
        article.sourceUrl,
      ),
    );
  }
}

// -----------------------------------------------------------------------------
// REMOVE DUPLICATES FROM AI OUTPUT
// -----------------------------------------------------------------------------

const generatedByUrl =
  new Map();

for (const article of generatedArticles) {
  generatedByUrl.set(
    normaliseUrl(
      article.sourceUrl,
    ),
    article,
  );
}

const uniqueGeneratedArticles =
  Array.from(
    generatedByUrl.values(),
  );

// -----------------------------------------------------------------------------
// MERGE WITH EXISTING FEED (SEMANTIC CONTEXT COMPARISON & DEDUPLICATION)
// -----------------------------------------------------------------------------

async function deduplicateAndTrimFeed(newArticles, existingArticles) {
  const cutoffTime = Date.now() - THIRTY_DAYS_MS;

  // 1. Filter out existing articles older than 30 days & sort newest first
  const activeExisting = (existingArticles || [])
    .filter(art => {
      const t = Date.parse(art.publishedAt || art.pubDate || 0) || 0;
      return t >= cutoffTime;
    })
    .sort((a, b) => {
      const timeA = Date.parse(a.publishedAt || a.pubDate || 0) || 0;
      const timeB = Date.parse(b.publishedAt || b.pubDate || 0) || 0;
      return timeB - timeA;
    });

  const mergedNewArticles = [];

  // 2. Compare new articles among each other (e.g. if 2 RSS feeds in current run cover the same incident)
  for (const newArt of (newArticles || [])) {
    let merged = false;

    for (const keptNew of mergedNewArticles) {
      const comparison = await compareStoryContext(newArt, keptNew);

      if (comparison.isSameIncident) {
        console.log(`[Context Merge] Merged sister candidates: "${newArt.title}" -> "${keptNew.title}" (${comparison.reason})`);

        // Present the best looking information under 60 words
        if (comparison.bestHeadline) {
          keptNew.title = comparison.bestHeadline;
          if (keptNew.headline) keptNew.headline = comparison.bestHeadline;
        }
        if (comparison.bestSummary) keptNew.summary = comparison.bestSummary;
        if (comparison.category) keptNew.category = comparison.category;
        if (comparison.severity) keptNew.severity = comparison.severity;

        if (!keptNew.additionalSources) keptNew.additionalSources = [];
        const source = (newArt.source || newArt.sourceName || 'SecuBuzz').trim();
        const sourceUrl = (newArt.sourceUrl || newArt.url || '').trim();
        if (sourceUrl && !keptNew.additionalSources.some(s => s.sourceUrl === sourceUrl)) {
          keptNew.additionalSources.push({ source, sourceUrl });
        }

        // Combine CVEs
        const newCves = extractCvesFromText((newArt.title || '') + ' ' + (newArt.summary || ''));
        if (newCves.length > 0) {
          if (!Array.isArray(keptNew.cves)) keptNew.cves = [];
          for (const c of newCves) {
            if (!keptNew.cves.includes(c)) keptNew.cves.push(c);
          }
        }

        merged = true;
        break;
      }
    }

    if (!merged) {
      mergedNewArticles.push({
        ...newArt,
        additionalSources: Array.isArray(newArt.additionalSources) ? newArt.additionalSources : []
      });
    }
  }

  // 3. Compare each remaining unmerged new article against recent existing feed articles (last 5 days)
  const finalNewArticles = [];

  for (const newArt of mergedNewArticles) {
    let mergedIntoExisting = false;

    for (const existing of activeExisting) {
      const existingTime = Date.parse(existing.publishedAt || existing.pubDate || 0) || 0;
      const timeDiffDays = Math.abs((Date.parse(newArt.publishedAt || 0) || Date.now()) - existingTime) / (1000 * 3600 * 24);
      if (timeDiffDays > 5) continue;

      const comparison = await compareStoryContext(newArt, existing);

      if (comparison.isSameIncident) {
        console.log(`[Context Merge] Merged new article into existing story: "${newArt.title}" -> "${existing.title}" (${comparison.reason})`);

        // Present the best looking information under 60 words
        if (comparison.bestHeadline) {
          existing.title = comparison.bestHeadline;
          if (existing.headline) existing.headline = comparison.bestHeadline;
        }
        if (comparison.bestSummary) existing.summary = comparison.bestSummary;
        if (comparison.category) existing.category = comparison.category;
        if (comparison.severity) existing.severity = comparison.severity;

        if (!existing.additionalSources) existing.additionalSources = [];
        const source = (newArt.source || newArt.sourceName || 'SecuBuzz').trim();
        const sourceUrl = (newArt.sourceUrl || newArt.url || '').trim();
        if (sourceUrl && !existing.additionalSources.some(s => s.sourceUrl === sourceUrl)) {
          existing.additionalSources.push({ source, sourceUrl });
        }

        // Combine CVEs
        const newCves = extractCvesFromText((newArt.title || '') + ' ' + (newArt.summary || ''));
        if (newCves.length > 0) {
          if (!Array.isArray(existing.cves)) existing.cves = [];
          for (const c of newCves) {
            if (!existing.cves.includes(c)) existing.cves.push(c);
          }
        }

        mergedIntoExisting = true;
        break;
      }
    }

    if (!mergedIntoExisting) {
      // Context is DIFFERENT even if keywords match: INGEST IT AND SHOW ON OUR NEWS!
      finalNewArticles.push(newArt);
    }
  }

  // 4. Combine unmerged new articles + existing feed, deduplicate by canonical URL, sort chronologically, and trim
  const combined = [...finalNewArticles, ...activeExisting];
  combined.sort((a, b) => {
    const timeA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const timeB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return (Number.isFinite(timeB) ? timeB : 0) - (Number.isFinite(timeA) ? timeA : 0);
  });
  const seenFinalUrls = new Set();
  const dedupedFeed = [];

  for (const art of combined) {
    const url = normaliseUrl(art.sourceUrl || art.url || art.id || '');
    if (!url || seenFinalUrls.has(url)) continue;
    seenFinalUrls.add(url);
    dedupedFeed.push(art);
  }

  return dedupedFeed.slice(0, MAX_FEED_ARTICLES);
}

const mergedFeed = await deduplicateAndTrimFeed(
  uniqueGeneratedArticles,
  feedArticles,
);

// -----------------------------------------------------------------------------
// SAVE
// -----------------------------------------------------------------------------

await writeJsonFile(
  FEED_FILE,
  mergedFeed,
);

await writeJsonFile(
  SEEN_URLS_FILE,
  Array.from(
    seenUrls,
  ),
);

// -----------------------------------------------------------------------------
// PUSH NOTIFICATIONS BROADCAST & USER PREFERENCE FILTERING
// -----------------------------------------------------------------------------

function shouldDeliverNotification(device, channelType, severity) {
  if (!device || !device.token) return false;

  // If device is missing explicit boolean flags (legacy shape), fallback to HIGH/CRITICAL default
  if (typeof device.newsBriefs === "undefined") {
    return severity === "CRITICAL" || severity === "HIGH";
  }

  // 1. Channel qualification: user must have enabled the alert channel
  if (channelType === "brief" && !device.newsBriefs) {
    return false;
  }
  if (channelType === "advisory" && !device.threatAdvisories) {
    return false;
  }

  // 2. Severity floor: user's chosen threshold
  const threshold = (device.severityThreshold || "HIGH_CRITICAL").toUpperCase();
  if (threshold === "CRITICAL_ONLY") {
    return severity === "CRITICAL";
  }
  if (threshold === "HIGH_CRITICAL") {
    return severity === "CRITICAL" || severity === "HIGH";
  }
  // "ALL"
  return true;
}

async function sendPushNotificationsForNewArticles(newArticles, activeFeed) {
  if (!newArticles || newArticles.length === 0) {
    return;
  }

  const existingNotified = await readJsonFile(NOTIFIED_ARTICLES_FILE, []);
  const notifiedSet = new Set(Array.isArray(existingNotified) ? existingNotified : []);

  // 1. Invariant: Record ALL newly generated articles into notifiedSet,
  // guaranteeing non-qualifying articles (low severity, > 24h old, or trimmed)
  // NEVER linger in an unnotified backlog.
  for (const article of newArticles) {
    notifiedSet.add(normaliseUrl(article.sourceUrl));
  }

  // 2. Active feed invariant: Article MUST actually exist in the live saved feed.
  // If an article was pruned by deduplication or trimmed out, NEVER send a push.
  const activeFeedUrls = new Set(
    (activeFeed || []).map((art) => normaliseUrl(art.sourceUrl || art.url || art.id || "")),
  );

  // 3. Strict Push Qualification Gate:
  // - Must not have been previously notified prior to this run
  // - Must actually exist in the active merged feed
  // - Must have been published within the last 24 hours (strictly zero stale pushes)
  // - All severities (CRITICAL, HIGH, MEDIUM, LOW) eligible, prioritized by severity weight
  const now = Date.now();
  const MAX_PUSH_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours maximum push age

  const eligibleForPush = newArticles.filter((article) => {
    const url = normaliseUrl(article.sourceUrl);

    // Prevent duplicate broadcasts if already notified in prior runs
    if (existingNotified.includes(url)) {
      return false;
    }

    // Must be in active feed (if pruned or dropped by deduplication, never push)
    if (!activeFeedUrls.has(url)) {
      console.log(`[Push Filter] Skipping "${article.headline}": Not in active feed.`);
      return false;
    }

    // Must be fresh (published within last 24 hours)
    const pubTime = Date.parse(article.publishedAt);
    if (!pubTime || isNaN(pubTime)) {
      console.log(`[Push Filter] Skipping "${article.headline}": Missing or invalid publishedAt.`);
      return false;
    }
    const ageMs = now - pubTime;
    if (ageMs > MAX_PUSH_AGE_MS || ageMs < -3600000) {
      console.log(
        `[Push Filter] Skipping "${article.headline}": Published ${(ageMs / (1000 * 3600)).toFixed(1)}h ago (strictly exceeds 24h push threshold).`,
      );
      return false;
    }

    return true;
  });

  if (eligibleForPush.length === 0) {
    console.log("No fresh (<= 24h) articles to broadcast.");
    await writeJsonFile(NOTIFIED_ARTICLES_FILE, Array.from(notifiedSet));
    return;
  }

  // Prioritize by severity (CRITICAL > HIGH) then freshness
  const severityWeight = { CRITICAL: 4, HIGH: 3, MEDIUM: 2, LOW: 1 };
  eligibleForPush.sort((a, b) => {
    const sDiff = (severityWeight[b.severity] || 0) - (severityWeight[a.severity] || 0);
    if (sDiff !== 0) return sDiff;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  // Limit to at most 2 notifications per cycle to avoid notification spam
  const MAX_NOTIFICATIONS_PER_CYCLE = 2;
  const articlesToNotify = eligibleForPush.slice(0, MAX_NOTIFICATIONS_PER_CYCLE);

  console.log(
    `\nPreparing push notifications for ${articlesToNotify.length} articles (capped from ${eligibleForPush.length} eligible candidates)...`,
  );

  let devices = [];
  try {
    const headers = { "Content-Type": "application/json" };
    if (PUSH_ADMIN_SECRET) {
      headers["x-admin-key"] = PUSH_ADMIN_SECRET;
      headers["Authorization"] = `Bearer ${PUSH_ADMIN_SECRET}`;
    }

    const tokenRes = await fetch(PUSH_TOKEN_API_URL, { headers, signal: AbortSignal.timeout(10000) });
    if (tokenRes.ok) {
      const data = await tokenRes.json();
      if (Array.isArray(data.devices)) {
        devices = data.devices;
      } else if (Array.isArray(data.tokens)) {
        devices = data.tokens.map((tok) => ({
          token: tok,
          newsBriefs: true,
          threatAdvisories: true,
          severityThreshold: "HIGH_CRITICAL",
        }));
      }
    } else {
      console.warn(
        `Could not fetch push tokens: HTTP ${tokenRes.status} ${tokenRes.statusText}`,
      );
    }
  } catch (error) {
    console.warn(
      "Could not connect to push token service:",
      error instanceof Error ? error.message : error,
    );
  }

  if (devices.length === 0) {
    console.log(
      "No registered push tokens found. Updating notification history.",
    );
    await writeJsonFile(NOTIFIED_ARTICLES_FILE, Array.from(notifiedSet));
    return;
  }

  console.log(`Loaded ${devices.length} registered device(s) from push registry.`);

  const invalidTokens = new Set();

  for (const article of articlesToNotify) {
    console.log(`\nEvaluating push notification for: "${article.headline}"`);

    const severity = (article.severity || "HIGH").toUpperCase();
    const targetedDevices = devices.filter((d) =>
      shouldDeliverNotification(d, "brief", severity),
    );

    if (targetedDevices.length === 0) {
      console.log(
        `[Push Targeting] 0 / ${devices.length} devices match user preferences for brief [${severity}]. Skipping dispatch.`,
      );
      notifiedSet.add(normaliseUrl(article.sourceUrl));
      continue;
    }

    console.log(
      `[Push Targeting] Delivering brief [${severity}] to ${targetedDevices.length} / ${devices.length} devices matching user alert preferences.`,
    );

    const channelId = severity === "CRITICAL" ? "secubuzz-critical" : "secubuzz-briefs";
    const title = `SecuBuzz · BRIEF [${severity}]`;

    const messages = targetedDevices.map((d) => ({
      to: d.token,
      sound: "default",
      title,
      body: article.headline,
      channelId,
      data: {
        type: "brief",
        articleId: article.sourceUrl,
        articleUrl: article.sourceUrl,
        headline: article.headline,
        summary: article.summary,
        category: article.category,
        severity,
        source: article.source || article.sourceName,
        publishedAt: article.publishedAt,
      },
    }));

    const chunkSize = 100;
    for (let i = 0; i < messages.length; i += chunkSize) {
      const chunk = messages.slice(i, i + chunkSize);

      try {
        const response = await fetch("https://exp.host/--/api/v2/push/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Encoding": "gzip, deflate",
          },
          body: JSON.stringify(chunk),
        });

        if (response.ok) {
          const result = await response.json();
          const ticketIds = [];
          const ticketIdToToken = {};
          if (Array.isArray(result?.data)) {
            result.data.forEach((ticket, idx) => {
              const toToken = chunk[idx]?.to;
              if (
                ticket.status === "error" &&
                ticket.details?.error === "DeviceNotRegistered"
              ) {
                invalidTokens.add(toToken);
              } else if (ticket.id && toToken) {
                ticketIdToToken[ticket.id] = toToken;
                ticketIds.push(ticket.id);
              }
            });
          }

          // Asynchronously verify FCM receipts to detect uninstalled apps
          if (ticketIds.length > 0) {
            await sleep(4000);
            try {
              const receiptRes = await fetch(
                "https://exp.host/--/api/v2/push/getReceipts",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Accept-Encoding": "gzip, deflate",
                  },
                  body: JSON.stringify({ ids: ticketIds }),
                },
              );
              if (receiptRes.ok) {
                const receiptData = await receiptRes.json();
                const receipts = receiptData?.data || {};
                for (const [id, r] of Object.entries(receipts)) {
                  if (
                    r?.status === "error" &&
                    r.details?.error === "DeviceNotRegistered"
                  ) {
                    const deadTok = ticketIdToToken[id];
                    if (deadTok) invalidTokens.add(deadTok);
                  }
                }
              }
            } catch {
              // Receipt poll error is non-fatal
            }
          }

          console.log(
            `Sent batch of ${chunk.length} notifications successfully.`,
          );
        } else {
          console.error(
            `Expo Push API error: HTTP ${response.status} ${response.statusText}`,
          );
        }
      } catch (err) {
        console.error(
          "Failed to send notification batch to Expo:",
          err instanceof Error ? err.message : err,
        );
      }
    }

    notifiedSet.add(normaliseUrl(article.sourceUrl));

    try {
      const headers = { "Content-Type": "application/json" };
      if (PUSH_ADMIN_SECRET) {
        headers["x-admin-key"] = PUSH_ADMIN_SECRET;
      }
      const recordUrl = PUSH_TOKEN_API_URL.replace(
        /\/push-tokens\/?$/,
        "/notifications/sent",
      );
      await fetch(recordUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
          articleId: article.sourceUrl,
          headline: article.headline,
          recipientCount: targetedDevices.length,
        }),
      });
    } catch {
      // Ignore
    }

    // Space out notifications to avoid a simultaneous notification barrage
    if (articlesToNotify.indexOf(article) < articlesToNotify.length - 1) {
      console.log("Spacing notifications (waiting 15s)...");
      await sleep(15000);
    }
  }

  // Persist updated notification history
  await writeJsonFile(NOTIFIED_ARTICLES_FILE, Array.from(notifiedSet));

  if (invalidTokens.size > 0) {
    try {
      const headers = { "Content-Type": "application/json" };
      if (PUSH_ADMIN_SECRET) {
        headers["x-admin-key"] = PUSH_ADMIN_SECRET;
      }
      const deactivateUrl = PUSH_TOKEN_API_URL.replace(
        /\/push-tokens\/?$/,
        "/push-tokens/deactivate",
      );
      await fetch(deactivateUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({ tokens: Array.from(invalidTokens) }),
      });
      console.log(`Deactivated ${invalidTokens.size} expired tokens.`);
    } catch {
      // Ignore
    }
  }
}

// -----------------------------------------------------------------------------
// CISA KEV ZERO-DAY BROADCAST (100% Free - Zero Groq Tokens)
// -----------------------------------------------------------------------------

async function checkAndBroadcastCisaKevZeroDays() {
  try {
    console.log("\nChecking CISA KEV catalog for new in-the-wild zero-days...");
    const res = await fetch(CISA_KEV_FEED_URL, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) {
      console.warn(`CISA KEV fetch failed: HTTP ${res.status}`);
      return;
    }

    const data = await res.json();
    const vulnerabilities = Array.isArray(data?.vulnerabilities)
      ? data.vulnerabilities
      : [];

    const existingNotifiedCves = await readJsonFile(NOTIFIED_CVES_FILE, []);
    const notifiedCveSet = new Set(
      Array.isArray(existingNotifiedCves) ? existingNotifiedCves : [],
    );

    // Look for unnotified CVEs added in the last 72 hours (strictly zero stale KEV alerts)
    const MAX_KEV_AGE_MS = 72 * 60 * 60 * 1000;
    const candidates = vulnerabilities.filter((v) => {
      if (!v?.cveID || notifiedCveSet.has(v.cveID)) return false;
      const addedTime = Date.parse(v.dateAdded) || 0;
      return (Date.now() - addedTime) <= MAX_KEV_AGE_MS;
    });

    // Mark ALL catalog vulnerabilities as recorded so old backlog items never trigger alerts
    for (const v of vulnerabilities) {
      if (v?.cveID) {
        notifiedCveSet.add(v.cveID);
      }
    }

    if (candidates.length === 0) {
      console.log("No new unnotified CISA KEV zero-days found within 72h.");
      await writeJsonFile(NOTIFIED_CVES_FILE, Array.from(notifiedCveSet));
      return;
    }

    // Fetch registered device tokens with user preferences
    let devices = [];
    try {
      const headers = { "Content-Type": "application/json" };
      if (PUSH_ADMIN_SECRET) {
        headers["x-admin-key"] = PUSH_ADMIN_SECRET;
        headers["Authorization"] = `Bearer ${PUSH_ADMIN_SECRET}`;
      }
      const tokenRes = await fetch(PUSH_TOKEN_API_URL, { headers, signal: AbortSignal.timeout(10000) });
      if (tokenRes.ok) {
        const tokenData = await tokenRes.json();
        if (Array.isArray(tokenData.devices)) {
          devices = tokenData.devices;
        } else if (Array.isArray(tokenData.tokens)) {
          devices = tokenData.tokens.map((tok) => ({
            token: tok,
            newsBriefs: true,
            threatAdvisories: true,
            severityThreshold: "HIGH_CRITICAL",
          }));
        }
      }
    } catch (err) {
      console.warn("Could not fetch tokens for CISA KEV alert:", err);
    }

    if (devices.length === 0) {
      console.log(
        "No registered push tokens found. Marking CISA KEV zero-days as seen.",
      );
      await writeJsonFile(NOTIFIED_CVES_FILE, Array.from(notifiedCveSet));
      return;
    }

    // Limit to at most 2 zero-day notifications per cycle to avoid notification spam
    const toNotify = candidates.slice(0, 2);
    console.log(
      `Broadcasting up to ${toNotify.length} CISA KEV zero-day alert(s)...`,
    );

    for (const cve of toNotify) {
      const isRansomware =
        cve.knownRansomwareCampaignUse?.toLowerCase() === "known";
      const severity = isRansomware ? "CRITICAL" : "HIGH";

      const targetedDevices = devices.filter((d) =>
        shouldDeliverNotification(d, "advisory", severity),
      );

      if (targetedDevices.length === 0) {
        console.log(
          `[Push Targeting] 0 / ${devices.length} devices match user preferences for CISA KEV alert ${cve.cveID} [${severity}]. Skipping dispatch.`,
        );
        notifiedCveSet.add(cve.cveID);
        continue;
      }

      console.log(
        `[Push Targeting] Delivering CISA KEV alert ${cve.cveID} [${severity}] to ${targetedDevices.length} / ${devices.length} devices matching preferences.`,
      );

      const channelId = severity === "CRITICAL" ? "secubuzz-critical" : "secubuzz-advisories";
      const title = isRansomware
        ? "SecuBuzz · ADVISORY [CRITICAL - RANSOMWARE]"
        : `SecuBuzz · ADVISORY [${severity}]`;
      const body = `${cve.cveID} (${cve.vendorProject} · ${cve.product}): ${cve.vulnerabilityName}`;

      console.log(`Sending CISA alert: "${body}"`);

      const messages = targetedDevices.map((d) => ({
        to: d.token,
        sound: "default",
        title,
        body,
        channelId,
        data: {
          type: "advisory",
          cveID: cve.cveID,
          articleId: cve.cveID,
          articleUrl: `https://nvd.nist.gov/vuln/detail/${cve.cveID}`,
          headline: `${cve.cveID} (${cve.vendorProject} · ${cve.product}): ${cve.vulnerabilityName}`,
          summary: cve.shortDescription || `${cve.vendorProject} ${cve.product} vulnerability added to CISA Known Exploited Vulnerabilities catalog. Action: ${cve.requiredAction || 'Apply vendor patches immediately.'}`,
          category: "CVE",
          vendorProject: cve.vendorProject,
          product: cve.product,
          dueDate: cve.dueDate,
          severity,
          source: "CISA KEV",
        },
      }));

      const chunkSize = 100;
      const cisaInvalidTokens = new Set();
      for (let i = 0; i < messages.length; i += chunkSize) {
        const chunk = messages.slice(i, i + chunkSize);
        try {
          const pushRes = await fetch("https://exp.host/--/api/v2/push/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(chunk),
          });
          if (pushRes.ok) {
            const pushData = await pushRes.json();
            const ticketIds = [];
            const ticketIdToToken = {};
            if (Array.isArray(pushData?.data)) {
              pushData.data.forEach((ticket, idx) => {
                const toTok = chunk[idx]?.to;
                if (ticket.status === "error" && ticket.details?.error === "DeviceNotRegistered") {
                  cisaInvalidTokens.add(toTok);
                } else if (ticket.id && toTok) {
                  ticketIdToToken[ticket.id] = toTok;
                  ticketIds.push(ticket.id);
                }
              });
            }

            if (ticketIds.length > 0) {
              await sleep(4000);
              try {
                const receiptRes = await fetch("https://exp.host/--/api/v2/push/getReceipts", {
                  method: "POST",
                  headers: { "Content-Type": "application/json", Accept: "application/json" },
                  body: JSON.stringify({ ids: ticketIds }),
                });
                if (receiptRes.ok) {
                  const rData = await receiptRes.json();
                  const receipts = rData?.data || {};
                  for (const [id, r] of Object.entries(receipts)) {
                    if (r?.status === "error" && r.details?.error === "DeviceNotRegistered") {
                      const deadTok = ticketIdToToken[id];
                      if (deadTok) cisaInvalidTokens.add(deadTok);
                    }
                  }
                }
              } catch {
                // Non-fatal
              }
            }
          }
        } catch (pushErr) {
          console.warn("Error sending CISA push chunk:", pushErr);
        }
      }

      if (cisaInvalidTokens.size > 0) {
        try {
          const headers = { "Content-Type": "application/json" };
          if (PUSH_ADMIN_SECRET) {
            headers["x-admin-key"] = PUSH_ADMIN_SECRET;
          }
          const deactivateUrl = PUSH_TOKEN_API_URL.replace(
            /\/push-tokens\/?$/,
            "/push-tokens/deactivate",
          );
          await fetch(deactivateUrl, {
            method: "POST",
            headers,
            body: JSON.stringify({ tokens: Array.from(cisaInvalidTokens) }),
          });
          console.log(`Deactivated ${cisaInvalidTokens.size} expired tokens from CISA alert.`);
        } catch {
          // Ignore
        }
      }

      notifiedCveSet.add(cve.cveID);
      await sleep(10000);
    }

    // Persist all recorded CVEs
    await writeJsonFile(NOTIFIED_CVES_FILE, Array.from(notifiedCveSet));
  } catch (err) {
    console.warn("Could not check CISA KEV zero-days:", err);
  }
}

if (uniqueGeneratedArticles.length > 0) {
  await sendPushNotificationsForNewArticles(uniqueGeneratedArticles, mergedFeed);
}

// Check and broadcast newly added CISA KEV zero-days
await checkAndBroadcastCisaKevZeroDays();

// -----------------------------------------------------------------------------
// FINAL OUTPUT
// -----------------------------------------------------------------------------

console.log("");

console.log(
  `Added ${uniqueGeneratedArticles.length} new articles.`,
);

console.log(
  `Feed now has ${mergedFeed.length} articles.`,
);

console.log(
  `Seen URL history contains ${seenUrls.size} URLs.`,
);

console.log("");

console.log(
  "SecuBuzz feed ingestion completed.",
);