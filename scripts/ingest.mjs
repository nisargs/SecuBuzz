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

const PUSH_TOKEN_API_URL =
  process.env.PUSH_TOKEN_API_URL ||
  "https://secubuzz-push.secubuzz.workers.dev/api/push-tokens";

const PUSH_ADMIN_SECRET = process.env.PUSH_ADMIN_SECRET;

const GROQ_API_URL =
  "https://api.groq.com/openai/v1/chat/completions";

const GROQ_API_KEY = process.env.GROQ_API_KEY;

const AI_MODEL = "openai/gpt-oss-20b";

/*
 * ---------------------------------------------------------------------------
 * INGESTION CONFIGURATION
 * ---------------------------------------------------------------------------
 *
 * We deliberately keep this conservative because the current Groq limit
 * for this model is 8,000 tokens per minute on the free plan.
 */

const ARTICLES_PER_AI_BATCH = 2;

const MAX_NEW_CANDIDATES = 8;

const ITEMS_PER_FEED = 10;

const MAX_FEED_ARTICLES = 100;

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
    name: "The Record",
    url: "https://therecord.media/feed/",
  },
  {
    name: "CyberNews AI",
    url: "https://www.cybernewsai.com/feed.xml",
  },
];

// -----------------------------------------------------------------------------
// VALIDATION
// -----------------------------------------------------------------------------

if (!GROQ_API_KEY) {
  throw new Error(
    "Missing GROQ_API_KEY environment variable.",
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

function normaliseSeverity(severity) {
  const allowed = new Set([
    "LOW",
    "MEDIUM",
    "HIGH",
    "CRITICAL",
  ]);

  const normalized = String(severity || "")
    .trim()
    .toUpperCase();

  return allowed.has(normalized)
    ? normalized
    : "MEDIUM";
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
   * We ask for approximately 40-60 words.
   *
   * Allow 20-90 to avoid throwing away otherwise
   * useful content if the model is slightly outside
   * the target range.
   */
  if (words < 20 || words > 90) {
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
    category: normaliseCategory(
      article.category,
    ),
    severity: normaliseSeverity(
      article.severity,
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
2. Create a concise 40-60 word summary.
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
- If there is not enough information for a reliable summary, omit that article.
- The "index" must exactly match the supplied article index.

Allowed categories:

BREACH
RANSOMWARE
CVE
VULNERABILITY
NATION_STATE
GENERAL

Allowed severities:

LOW
MEDIUM
HIGH
CRITICAL

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
            model: AI_MODEL,

            messages: [
              {
                role: "system",

                content:
                  "You are a precise cybersecurity news editor. Follow the supplied JSON schema exactly. Do not provide explanations or reasoning.",
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

console.log(
  `AI model: ${AI_MODEL}`,
);

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
// SELECT CANDIDATES
// -----------------------------------------------------------------------------

const selectedCandidates =
  newCandidates.slice(
    0,
    MAX_NEW_CANDIDATES,
  );

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
      await requestGroq(
        indexedBatch,
      );
  } catch (error) {
    console.error(
      "Groq batch failed:",
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

const mergedFeed = [
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
].slice(
  0,
  MAX_FEED_ARTICLES,
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
// PUSH NOTIFICATIONS BROADCAST
// -----------------------------------------------------------------------------

async function sendPushNotificationsForNewArticles(newArticles) {
  if (!newArticles || newArticles.length === 0) {
    return;
  }

  const existingNotified = await readJsonFile(NOTIFIED_ARTICLES_FILE, []);
  const notifiedSet = new Set(Array.isArray(existingNotified) ? existingNotified : []);

  const articlesToNotify = newArticles.filter(
    (article) => !notifiedSet.has(normaliseUrl(article.sourceUrl)),
  );

  if (articlesToNotify.length === 0) {
    console.log("No unnotified new articles to broadcast.");
    return;
  }

  console.log(
    `\nPreparing push notifications for ${articlesToNotify.length} new articles...`,
  );

  let tokens = [];
  try {
    const headers = { "Content-Type": "application/json" };
    if (PUSH_ADMIN_SECRET) {
      headers["x-admin-key"] = PUSH_ADMIN_SECRET;
      headers["Authorization"] = `Bearer ${PUSH_ADMIN_SECRET}`;
    }

    const tokenRes = await fetch(PUSH_TOKEN_API_URL, { headers });
    if (tokenRes.ok) {
      const data = await tokenRes.json();
      if (Array.isArray(data.tokens)) {
        tokens = data.tokens;
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

  if (tokens.length === 0) {
    console.log(
      "No registered push tokens found. Updating notification history.",
    );
    for (const article of articlesToNotify) {
      notifiedSet.add(normaliseUrl(article.sourceUrl));
    }
    await writeJsonFile(NOTIFIED_ARTICLES_FILE, Array.from(notifiedSet));
    return;
  }

  console.log(`Broadcasting to ${tokens.length} registered device(s)...`);

  const invalidTokens = new Set();

  for (const article of articlesToNotify) {
    console.log(`\nSending push notification for: "${article.headline}"`);

    // Payload: Title="SecuBuzz", Body=<ARTICLE HEADLINE> (ONLY headline)
    const messages = tokens.map((token) => ({
      to: token,
      sound: "default",
      title: "SecuBuzz",
      body: article.headline,
      channelId: "secubuzz-news",
      data: {
        type: "article",
        articleId: article.sourceUrl,
        articleUrl: article.sourceUrl,
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
          if (Array.isArray(result?.data)) {
            result.data.forEach((ticket, idx) => {
              if (
                ticket.status === "error" &&
                ticket.details?.error === "DeviceNotRegistered"
              ) {
                invalidTokens.add(chunk[idx].to);
              }
            });
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
          recipientCount: tokens.length,
        }),
      });
    } catch {
      // Ignore
    }
  }

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

if (uniqueGeneratedArticles.length > 0) {
  await sendPushNotificationsForNewArticles(uniqueGeneratedArticles);
}

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