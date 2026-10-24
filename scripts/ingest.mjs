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

const GROQ_API_KEY = process.env.GROQ_API_KEY;

const GROQ_MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-20b";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

const OPENROUTER_API_URL =
  "https://openrouter.ai/api/v1/chat/completions";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || "openrouter/free";

/*
 * ---------------------------------------------------------------------------
 * INGESTION CONFIGURATION
 * ---------------------------------------------------------------------------
 *
 * Interleaved multi-engine pipeline (Groq + Gemini + OpenRouter).
 * All 3 run on 100% free tier allowances with automated failover.
 */

const ARTICLES_PER_AI_BATCH = 2;

const MAX_NEW_CANDIDATES = 24;

const ITEMS_PER_FEED = 10;

const MAX_FEED_ARTICLES = 350;

const DESCRIPTION_MAX_LENGTH = 900;

const MAX_COMPLETION_TOKENS = 1200;

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
      extractTag(item, "content:encoded");

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
        extractTag(entry, "content");

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
  if (words < 48 || words > 65) {
    return null;
  }

  const sourceUrl = normaliseUrl(
    candidate.url,
  );

  return {
    id: sourceUrl,
    sourceUrl,
    title: headline,
    headline,
    summary,
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

1. Create a clear factual headline.
2. Create an authoritative 50 to 60 word technical intelligence brief.
3. Assign exactly one category.
4. Assign exactly one severity.

IMPORTANT RULES:

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
  * Every summary MUST be between 50 and 60 words in length. Do NOT write under 50 words. Do NOT write over 65 words. Briefs under 50 words will fail validation.
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
  * Active zero-day exploitation confirmed in the wild.
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

Return ONLY the JSON structure required by the schema.

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

  const waitMilliseconds =
    Math.ceil(
      resetSeconds * 1000,
    ) +
    RATE_LIMIT_RESET_BUFFER_MS;

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
  const prompt =
    buildBatchPrompt(
      candidates,
    );

  console.log(
    "Sending selected candidates in ONE Groq request...",
  );

  for (
    let attempt = 0;
    attempt <= MAX_RATE_LIMIT_RETRIES;
    attempt++
  ) {
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
            model: GROQ_MODEL,

            messages: [
              {
                role: "system",

                content:
                  "You are an authoritative cybersecurity intelligence editor. Summarize each news item into an exact 50-60 word technical brief using 3 high-density sentences. Follow the supplied JSON schema exactly. Do not provide explanations or reasoning.",
              },

              {
                role: "user",

                content: prompt,
              },
            ],

            /*
             * Strict JSON Schema.
             *
             * GPT-OSS 20B supports Groq Structured Outputs.
             */
            response_format: {
              type: "json_schema",

              json_schema: {
                name:
                  "secubuzz_articles",

                strict: true,

                schema:
                  GROQ_RESPONSE_SCHEMA,
              },
            },

            /*
             * Keep model reasoning low because
             * we only need a simple editorial transformation.
             */
            reasoning_effort: "low",

            temperature: 0.2,

            max_completion_tokens:
              MAX_COMPLETION_TOKENS,

            stream: false,
          }),
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
      `Groq request duration: ${duration} ms`,
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
        const retrySeconds =
          parseSeconds(
            retryAfter,
          );

        console.log(
          `Groq requested retry after approximately ${retrySeconds.toFixed(
            2,
          )}s.`,
        );

        await sleep(
          Math.ceil(
            retrySeconds * 1000,
          ) +
            RATE_LIMIT_RESET_BUFFER_MS,
        );
      } else if (resetTokens) {
        await waitForRateLimitReset(
          response,
        );
      } else {
        /*
         * Exponential backoff fallback.
         */
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

  const response = await fetch(GEMINI_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GEMINI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: GEMINI_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are an authoritative cybersecurity intelligence editor. Summarize each news item into an exact 50-60 word technical brief using 3 high-density sentences. Follow the requested JSON format exactly. Do not provide markdown code blocks, explanations, or reasoning.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.2,
      max_completion_tokens: MAX_COMPLETION_TOKENS,
    }),
  });

  const responseText = await response.text();
  let payload = null;

  try {
    payload = JSON.parse(responseText);
  } catch {
    throw new Error(
      `Gemini returned non-JSON HTTP response: ${truncateText(responseText, 500)}`,
    );
  }

  if (!response.ok) {
    throw new Error(
      payload?.error?.message ||
        `Gemini request failed with HTTP ${response.status}`,
    );
  }

  const choice = payload?.choices?.[0];
  const content = choice?.message?.content || "";
  if (!content.trim()) {
    console.log("Gemini returned an empty content response.");
    return [];
  }

  const parsed = safeJsonParse(content);
  if (!parsed) {
    throw new Error("Could not parse Gemini content as JSON.");
  }

  const articles = extractArticleArray(parsed);
  console.log(`Gemini returned ${articles.length} article results.`);

  await sleep(1500);
  return articles;
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
    throw new Error(
      payload?.error?.message ||
        `OpenRouter request failed with HTTP ${response.status}`,
    );
  }

  const choice = payload?.choices?.[0];
  const content = choice?.message?.content || "";
  if (!content.trim()) {
    console.log("OpenRouter returned an empty content response.");
    return [];
  }

  const parsed = safeJsonParse(content);
  if (!parsed) {
    throw new Error("Could not parse OpenRouter content as JSON.");
  }

  const articles = extractArticleArray(parsed);
  console.log(`OpenRouter returned ${articles.length} article results.`);

  await sleep(1500);
  return articles;
}

// -----------------------------------------------------------------------------
// INTERLEAVED ROTATING MULTI-ENGINE DISPATCHER
// -----------------------------------------------------------------------------

function getRotatedEngines() {
  const pool = [];
  if (GROQ_API_KEY) {
    pool.push({ name: `Groq (${GROQ_MODEL})`, run: requestGroq });
  }
  if (GEMINI_API_KEY) {
    pool.push({ name: `Gemini (${GEMINI_MODEL})`, run: requestGemini });
  }
  if (OPENROUTER_API_KEY) {
    pool.push({ name: `OpenRouter (${OPENROUTER_MODEL})`, run: requestOpenRouter });
  }

  if (pool.length === 0) return [];

  // Interleave the lead engine based on current UTC hour
  const currentHour = new Date().getUTCHours();
  const leadIndex = currentHour % pool.length;
  return [...pool.slice(leadIndex), ...pool.slice(0, leadIndex)];
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
      return await engine.run(candidates);
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

// Standalone unique platforms, products, tools, and named threats where a matching mention within 3 days is 100% the same incident:
const UNIQUE_PRODUCTS_OR_THREATS = [
  'velocloud', 'fortimanager', 'fortigate', 'globalprotect', 'sharepoint',
  'php2shell', 'node2shell', 'coregraphics', 'wireshark', 'elementor',
  'connectwise', 'litellm', 'netscaler', 'pwnescape', 'ghostaction',
  'avisloader', 'blackx', 'stealc', 'shinyhunters', 'whispergate'
];

// Specific companies and victim organizations where a breach/incident mention within 3 days is the same event:
const SPECIFIC_ORGANIZATIONS = [
  'capcom', 'emudhra', 'snowflake', 'bitget', 'kiteworks', 'danfoss', 'canonical',
  'quest diagnostics', 'yandex', 'ahold delhaize', 'change healthcare', 'ticketmaster'
];

// Vendor + specific product pairs (both MUST match to prevent broad vendor collisions like Cisco Expressway vs Cisco Duo):
const VENDOR_PRODUCT_PAIRS = [
  { vendor: 'cisco', products: ['expressway', 'duo', 'asa', 'ftd', 'ios-xe', 'nexus', 'catalyst'] },
  { vendor: 'arista', products: ['vco', 'eos'] },
  { vendor: 'hpe', products: ['aruba', 'aos', 'proliant', 'ilo'] },
  { vendor: 'apache', products: ['struts', 'airflow', 'superset', 'kafka', 'tomcat', 'httpd'] },
  { vendor: 'okta', products: ['gateway', 'verify', 'oag', 'asa'] },
  { vendor: 'fortinet', products: ['fortios', 'fortianalyzer', 'forticlient'] },
  { vendor: 'palo alto', products: ['pan-os', 'prisma', 'cortex'] },
  { vendor: 'ivanti', products: ['connect secure', 'epmm', 'policy secure', 'standalone sentry', 'csa'] },
  { vendor: 'microsoft', products: ['exchange', 'teams', 'entra', 'rdp', 'outlook'] },
  { vendor: 'ruby', products: ['onigmo', 'rails', 'rubygems'] },
  { vendor: 'apple', products: ['webkit', 'safari', 'imageio'] }
];

// Comprehensive stop words list filtering out ALL generic cybersecurity and English jargon:
const STOP_WORDS = new Set([
  // Grammar, prepositions & articles
  'the', 'a', 'an', 'in', 'on', 'for', 'to', 'of', 'and', 'is', 'are', 'was', 'were',
  'with', 'after', 'from', 'by', 'as', 'at', 'about', 'over', 'into', 'amid', 'amidst',
  'via', 'under', 'through', 'across', 'against', 'during', 'before', 'behind', 'between',
  'more', 'than', 'also', 'both', 'each', 'other', 'some', 'any', 'could', 'would', 'will',
  // Generic action verbs
  'targets', 'target', 'targeting', 'targeted',
  'fixes', 'fix', 'fixing', 'fixed',
  'warns', 'warn', 'warning', 'warned',
  'patches', 'patch', 'patching', 'patched',
  'updates', 'update', 'updating', 'updated',
  'addresses', 'address', 'addressing', 'addressed',
  'releases', 'release', 'releasing', 'released',
  'exploits', 'exploit', 'exploiting', 'exploited',
  'attacks', 'attack', 'attacking', 'attacked',
  'hackers', 'hacker', 'hacking', 'hacked',
  'compromises', 'compromise', 'compromising', 'compromised',
  'exposes', 'expose', 'exposing', 'exposed',
  'leaks', 'leak', 'leaking', 'leaked',
  'steals', 'steal', 'stealing', 'stolen',
  'claims', 'claim', 'claiming', 'claimed',
  'urges', 'urge', 'urging', 'urged',
  'spotted', 'detected', 'found', 'uncovers', 'uncovered',
  'allows', 'allow', 'allowing', 'allowed',
  'lets', 'let', 'enables', 'enable', 'enabling', 'enabled',
  'causes', 'cause', 'causing', 'caused',
  'affects', 'affect', 'affecting', 'affected',
  'impacts', 'impact', 'impacting', 'impacted',
  // Generic security / tech nouns
  'flaw', 'flaws', 'vulnerability', 'vulnerabilities', 'bug', 'bugs',
  'security', 'cyber', 'cybersecurity', 'infosec',
  'zero-day', 'zero-days', 'zeroday', '0-day', '0-days',
  'rce', 'remote', 'code', 'execution', 'injection', 'bypass', 'privilege', 'escalation',
  'breach', 'breaches', 'incident', 'incidents', 'outage', 'outages',
  'data', 'records', 'credentials', 'passwords', 'password', 'tokens', 'token',
  'accounts', 'account', 'users', 'user', 'customers', 'customer', 'clients', 'client',
  'admin', 'administrator', 'administrators', 'root', 'superuser', 'authentication', 'auth',
  'system', 'systems', 'network', 'networks', 'server', 'servers', 'device', 'devices',
  'firmware', 'software', 'hardware', 'app', 'apps', 'application', 'applications',
  'service', 'services', 'platform', 'platforms', 'tool', 'tools',
  'firm', 'firms', 'company', 'companies', 'vendor', 'vendors', 'organization', 'organizations',
  'report', 'reports', 'advisory', 'advisories', 'bulletin', 'bulletins', 'guidance',
  'alert', 'alerts', 'notice', 'notices',
  'malware', 'ransomware', 'trojan', 'backdoor', 'spyware', 'infostealer',
  'million', 'millions', 'billion', 'billions', 'thousand', 'thousands',
  'critical', 'high', 'medium', 'low', 'severe', 'severity',
  'new', 'recent', 'latest', 'active', 'actively', 'widespread', 'major'
]);

function getTitleKeywords(title) {
  return (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
}

function extractCvesFromText(text) {
  const matches = (text || '').match(/CVE-\d{4}-\d{4,7}/gi);
  return matches ? Array.from(new Set(matches.map(c => c.toUpperCase()))) : [];
}

function isSameIncident(fullA, titleA, fullB, titleB, timeDiffDays) {
  if (timeDiffDays > 7) return false;

  // 1. Shared CVE (Gold Standard)
  const cvesA = extractCvesFromText(fullA);
  const cvesB = extractCvesFromText(fullB);
  if (cvesA.length > 0 && cvesB.some(c => cvesA.includes(c))) {
    return true;
  }

  if (timeDiffDays <= 3) {
    // 2. Unique Standalone Product or Named Threat
    for (const item of UNIQUE_PRODUCTS_OR_THREATS) {
      if (fullA.includes(item) && fullB.includes(item)) {
        return true;
      }
    }

    // 3. Specific Organization / Victim
    for (const org of SPECIFIC_ORGANIZATIONS) {
      if (fullA.includes(org) && fullB.includes(org)) {
        return true;
      }
    }

    // 4. Vendor + Specific Product Pair
    for (const vp of VENDOR_PRODUCT_PAIRS) {
      if (fullA.includes(vp.vendor) && fullB.includes(vp.vendor)) {
        for (const prod of vp.products) {
          if (fullA.includes(prod) && fullB.includes(prod)) {
            return true;
          }
        }
      }
    }

    // 5. Specific Non-Generic Title Keywords Overlap (requires >= 3 specific words)
    const kwA = new Set(getTitleKeywords(titleA));
    const kwB = getTitleKeywords(titleB);
    const overlap = kwB.filter(k => kwA.has(k));
    if (overlap.length >= 3) {
      return true;
    }
  }

  return false;
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
 * Sort chronologically: newest articles first.
 */
filteredCandidates.sort((a, b) => {
  const timeA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
  const timeB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
  return (Number.isFinite(timeB) ? timeB : 0) - (Number.isFinite(timeA) ? timeA : 0);
});

/*
 * Ensure multi-source diversity: cap at 2 articles per source in first pass,
 * then fill remaining capacity up to MAX_NEW_CANDIDATES.
 */
const sourceCounts = new Map();
const diversifiedCandidates = [];
const remainingPool = [];

for (const candidate of filteredCandidates) {
  const currentCount = sourceCounts.get(candidate.source) || 0;
  if (currentCount < 2) {
    diversifiedCandidates.push(candidate);
    sourceCounts.set(candidate.source, currentCount + 1);
  } else {
    remainingPool.push(candidate);
  }
}

const candidatePool = [...diversifiedCandidates, ...remainingPool];
const selectedCandidates = candidatePool.slice(0, MAX_NEW_CANDIDATES);

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

    const matched = isSameIncident(
      currentText,
      cand.title || '',
      entry.text,
      entry.title,
      timeDiffDays,
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
     * They can therefore be retried during
     * the next six-hour ingestion run.
     */
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
// MERGE WITH EXISTING FEED
// -----------------------------------------------------------------------------

const existingByUrl =
  new Map();

for (const article of feedArticles) {
  const url =
    normaliseUrl(
      article?.sourceUrl ||
        article?.url ||
        "",
    );

  if (!url) {
    continue;
  }

  existingByUrl.set(
    url,
    article,
  );
}

for (
  const article of
  uniqueGeneratedArticles
) {
  existingByUrl.set(
    normaliseUrl(
      article.sourceUrl,
    ),
    article,
  );
}

const newUrls =
  new Set(
    uniqueGeneratedArticles.map(
      (article) =>
        normaliseUrl(
          article.sourceUrl,
        ),
    ),
  );

function deduplicateAndTrimFeed(articles) {
  const cutoffTime = Date.now() - THIRTY_DAYS_MS;

  // 1. Filter out articles older than 30 days & sort newest first
  const recentArticles = articles
    .filter(art => {
      const t = Date.parse(art.publishedAt || art.pubDate || 0) || 0;
      return t >= cutoffTime;
    })
    .sort((a, b) => {
      const timeA = Date.parse(a.publishedAt || a.pubDate || 0) || 0;
      const timeB = Date.parse(b.publishedAt || b.pubDate || 0) || 0;
      return timeB - timeA;
    });

  const deduped = [];

  for (const art of recentArticles) {
    const title = (art.title || art.headline || '').trim();
    if (!title) continue;

    const summary = (art.summary || '').trim();
    const source = (art.source || art.sourceName || 'SecuBuzz').trim();
    const sourceUrl = (art.sourceUrl || art.url || art.id || '').trim();
    const publishedAt = art.publishedAt || new Date().toISOString();
    const fullText = (title + ' ' + summary).toLowerCase();
    const cves = extractCvesFromText(title + ' ' + summary);
    const keywords = getTitleKeywords(title);
    const time = Date.parse(publishedAt) || 0;

    let duplicateOf = null;
    for (const existing of deduped) {
      const existingTime = Date.parse(existing.publishedAt) || 0;
      const timeDiffDays = Math.abs(time - existingTime) / (1000 * 3600 * 24);
      if (timeDiffDays > 7) continue;

      const existingTitle = existing.title || existing.headline || '';
      const existingFull = (existingTitle + ' ' + (existing.summary || '')).toLowerCase();

      if (isSameIncident(fullText, title, existingFull, existingTitle, timeDiffDays)) {
        duplicateOf = existing;
        break;
      }
    }

    if (duplicateOf) {
      if (!duplicateOf.additionalSources) duplicateOf.additionalSources = [];
      if (!duplicateOf.additionalSources.some(s => s.sourceUrl === sourceUrl || s.source === source)) {
        duplicateOf.additionalSources.push({ source, sourceUrl });
      }

      // FUTURE-PROOF CVE INTELLIGENCE BACKFILL:
      // If a secondary or sister reporting source includes a CVE identifier that the primary article missed
      // (e.g. initial publisher truncated RSS snippet or omitted the CVE), enrich the primary article!
      if (cves.length > 0) {
        if (!Array.isArray(duplicateOf.cves)) {
          duplicateOf.cves = extractCvesFromText((duplicateOf.title || '') + ' ' + (duplicateOf.summary || ''));
        }
        let enriched = false;
        for (const cve of cves) {
          if (!duplicateOf.cves.includes(cve)) {
            duplicateOf.cves.push(cve);
            enriched = true;
          }
        }
        if (enriched) {
          const primaryCve = duplicateOf.cves[0];
          // Guardrail: Only append CVE to title if duplicateOf is classified as a vulnerability or CVE (never general tech survey or vendor blog)
          if (duplicateOf.category !== 'GENERAL' && primaryCve && !duplicateOf.title.toUpperCase().includes(primaryCve)) {
            duplicateOf.title = `${duplicateOf.title.replace(/\s*\([^)]*CVE[^)]*\)$/i, '')} (${primaryCve})`;
            if (duplicateOf.headline) {
              duplicateOf.headline = `${duplicateOf.headline.replace(/\s*\([^)]*CVE[^)]*\)$/i, '')} (${primaryCve})`;
            }
          }
          if (duplicateOf.category === 'VULNERABILITY') {
            duplicateOf.category = 'CVE';
          }
        }
      }
      continue;
    }

    deduped.push({
      ...art,
      additionalSources: Array.isArray(art.additionalSources) ? art.additionalSources : []
    });
  }

  return deduped.slice(0, MAX_FEED_ARTICLES);
}

const rawFeed = [
  ...uniqueGeneratedArticles,

  ...Array.from(
    existingByUrl.values(),
  ).filter(
    (article) =>
      !newUrls.has(
        normaliseUrl(
          article?.sourceUrl ||
            article?.url ||
            "",
        ),
      ),
  ),
];

const mergedFeed = deduplicateAndTrimFeed(rawFeed);

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

    const tokenRes = await fetch(PUSH_TOKEN_API_URL, { headers });
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
      const tokenRes = await fetch(PUSH_TOKEN_API_URL, { headers });
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