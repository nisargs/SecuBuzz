import Parser from "rss-parser";
import {
  readFileSync,
  writeFileSync,
  existsSync,
} from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const SCRIPT_DIR = dirname(
  fileURLToPath(import.meta.url),
);

const ROOT_DIR = resolve(
  SCRIPT_DIR,
  "..",
);

const FEED_PATH = resolve(
  ROOT_DIR,
  "feed.json",
);

const SEEN_PATH = resolve(
  ROOT_DIR,
  "seen-urls.json",
);

const OPENROUTER_KEY =
  process.env.OPENROUTER_API_KEY;

if (!OPENROUTER_KEY) {
  throw new Error(
    "Missing OPENROUTER_API_KEY environment variable.",
  );
}

const parser = new Parser();

const FEEDS = [
  "https://feeds.feedburner.com/TheHackersNews",
  "https://www.bleepingcomputer.com/feed/",
  "https://krebsonsecurity.com/feed/",
  "https://therecord.media/feed",
  "https://www.darkreading.com/rss.xml",
  "https://www.securityweek.com/feed/",
  "https://www.cisa.gov/cybersecurity-advisories/all.xml",
];

const MAX_AI_CALLS_PER_RUN = 4;
const MAX_FEED_SIZE = 100;
const MAX_RSS_ITEMS_PER_FEED = 10;
const MAX_CONTENT_LENGTH = 12000;

const AI_MODEL = "openrouter/free";

const CATEGORY_VALUES = [
  "BREACH",
  "RANSOMWARE",
  "CVE",
  "VULNERABILITY",
  "NATION_STATE",
  "GENERAL",
];

const SEVERITY_VALUES = [
  "low",
  "medium",
  "high",
  "critical",
];

function cleanText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function loadJsonFile(filePath, fallback) {
  if (!existsSync(filePath)) {
    return fallback;
  }

  const text =
    readFileSync(filePath, "utf8").replace(
      /^\uFEFF/,
      "",
    );

  if (!text.trim()) {
    return fallback;
  }

  return JSON.parse(text);
}

const seen = loadJsonFile(
  SEEN_PATH,
  [],
);

const existingFeed = loadJsonFile(
  FEED_PATH,
  [],
);

if (!Array.isArray(seen)) {
  throw new Error(
    "Invalid seen-urls.json format.",
  );
}

if (!Array.isArray(existingFeed)) {
  throw new Error(
    "Invalid feed.json format.",
  );
}

console.log(
  `Using feed file: ${FEED_PATH}`,
);

console.log(
  `Using seen URL file: ${SEEN_PATH}`,
);

console.log(
  `Existing feed contains ${existingFeed.length} articles.`,
);

console.log(
  `Existing seen URL history contains ${seen.length} URLs.`,
);

const seenSet = new Set(
  seen.filter(
    (value) =>
      typeof value === "string",
  ),
);

function getPublishedTimestamp(item) {
  const value =
    item.isoDate ||
    item.pubDate ||
    item.published ||
    item.date;

  if (!value) {
    return 0;
  }

  const timestamp =
    Date.parse(value);

  return Number.isNaN(timestamp)
    ? 0
    : timestamp;
}

function getPublishedAt(item) {
  const timestamp =
    getPublishedTimestamp(item);

  if (timestamp > 0) {
    return new Date(
      timestamp,
    ).toISOString();
  }

  return new Date().toISOString();
}

function getArticleContent(item) {
  const content =
    item.contentSnippet ||
    item.content ||
    item["content:encoded"] ||
    item.summary ||
    item.title ||
    "";

  return cleanText(content).slice(
    0,
    MAX_CONTENT_LENGTH,
  );
}

function isValidResult(value) {
  if (
    typeof value !== "object" ||
    value === null
  ) {
    return false;
  }

  const result = value;

  return (
    typeof result.headline === "string" &&
    result.headline.trim().length > 0 &&
    typeof result.summary === "string" &&
    result.summary.trim().length > 0 &&
    typeof result.category === "string" &&
    CATEGORY_VALUES.includes(
      result.category,
    ) &&
    typeof result.severity === "string" &&
    SEVERITY_VALUES.includes(
      result.severity.toLowerCase(),
    )
  );
}

function extractJsonObject(text) {
  const cleaned =
    String(text ?? "")
      .trim()
      .replace(
        /^```json\s*/i,
        "",
      )
      .replace(
        /^```\s*/i,
        "",
      )
      .replace(
        /\s*```$/i,
        "",
      )
      .trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    // Continue with object extraction.
  }

  const start =
    cleaned.indexOf("{");

  const end =
    cleaned.lastIndexOf("}");

  if (
    start === -1 ||
    end === -1 ||
    end <= start
  ) {
    return null;
  }

  const possibleJson =
    cleaned.slice(
      start,
      end + 1,
    );

  try {
    return JSON.parse(
      possibleJson,
    );
  } catch {
    return null;
  }
}

async function sleep(ms) {
  await new Promise(
    (resolvePromise) =>
      setTimeout(
        resolvePromise,
        ms,
      ),
  );
}

async function requestOpenRouter(
  prompt,
) {
  const response =
    await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization:
            `Bearer ${OPENROUTER_KEY}`,
          "Content-Type":
            "application/json",
          "HTTP-Referer":
            "https://github.com/nisargs/SecuBuzz",
          "X-Title":
            "SecuBuzz",
        },
        body: JSON.stringify({
          model: AI_MODEL,
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.1,
          max_tokens: 500,
          response_format: {
            type: "json_object",
          },
        }),
      },
    );

  const responseText =
    await response.text();

  let data;

  try {
    data =
      JSON.parse(
        responseText,
      );
  } catch {
    const error =
      new Error(
        `OpenRouter returned invalid HTTP JSON: ${responseText.slice(0, 500)}`,
      );

    error.status =
      response.status;

    throw error;
  }

  if (!response.ok) {
    const message =
      data?.error?.message ||
      `HTTP ${response.status}`;

    const error =
      new Error(
        `OpenRouter request failed: ${message}`,
      );

    error.status =
      response.status;

    throw error;
  }

  const contentText =
    data?.choices?.[0]?.message?.content;

  if (
    typeof contentText !==
      "string" ||
    !contentText.trim()
  ) {
    const error =
      new Error(
        "OpenRouter returned an empty model response.",
      );

    error.status =
      response.status;

    throw error;
  }

  return contentText;
}

async function summarize(
  title,
  content,
  link,
) {
  const prompt = `
You are the cybersecurity news editor for SecuBuzz.

Read the supplied article information and return EXACTLY ONE JSON object.

Use ONLY facts explicitly present in the supplied article information.

Do not invent:
- facts
- CVE numbers
- affected products
- organizations
- attackers
- dates
- numbers
- technical details

Requirements:

headline:
A clear factual headline.

summary:
A factual summary between 40 and 70 words.

category:
Choose exactly one:
BREACH
RANSOMWARE
CVE
VULNERABILITY
NATION_STATE
GENERAL

severity:
Choose exactly one:
low
medium
high
critical

Do not include markdown.
Do not include explanations.
Do not include "Here is the JSON".
Return ONLY the JSON object.

ARTICLE TITLE:
${cleanText(title)}

ARTICLE CONTENT:
${content}

ARTICLE URL:
${link}
`;

  let lastError = null;

  for (
    let attempt = 1;
    attempt <= 2;
    attempt += 1
  ) {
    try {
      const contentText =
        await requestOpenRouter(
          prompt,
        );

      const result =
        extractJsonObject(
          contentText,
        );

      if (!isValidResult(result)) {
        throw new Error(
          `Model returned invalid SecuBuzz JSON: ${contentText.slice(0, 700)}`,
        );
      }

      return {
        headline:
          cleanText(
            result.headline,
          ),
        summary:
          cleanText(
            result.summary,
          ),
        category:
          result.category,
        severity:
          result.severity.toLowerCase(),
      };
    } catch (error) {
      lastError = error;

      const status =
        error?.status;

      if (
        status === 401 ||
        status === 403
      ) {
        throw error;
      }

      if (
        status === 429
      ) {
        throw error;
      }

      if (
        attempt === 2
      ) {
        throw error;
      }

      console.log(
        "OpenRouter provider failed. Waiting 3 seconds before one retry...",
      );

      await sleep(3000);
    }
  }

  throw lastError;
}

function normalizeExistingArticle(
  article,
) {
  if (
    typeof article !== "object" ||
    article === null
  ) {
    return null;
  }

  if (
    typeof article.id !== "string" ||
    typeof article.headline !==
      "string" ||
    typeof article.summary !==
      "string" ||
    typeof article.sourceName !==
      "string" ||
    typeof article.sourceUrl !==
      "string" ||
    typeof article.category !==
      "string" ||
    typeof article.publishedAt !==
      "string"
  ) {
    return null;
  }

  const severity =
    String(
      article.severity ??
        "low",
    ).toLowerCase();

  return {
    id: article.id,
    headline:
      article.headline,
    summary:
      article.summary,
    sourceName:
      article.sourceName,
    sourceUrl:
      article.sourceUrl,
    category:
      CATEGORY_VALUES.includes(
        article.category,
      )
        ? article.category
        : "GENERAL",
    severity:
      SEVERITY_VALUES.includes(
        severity,
      )
        ? severity
        : "low",
    publishedAt:
      article.publishedAt,
  };
}

const normalizedExistingFeed =
  existingFeed
    .map(
      normalizeExistingArticle,
    )
    .filter(
      (article) =>
        article !== null,
    );

const existingIds =
  new Set(
    normalizedExistingFeed.map(
      (article) =>
        article.id,
    ),
  );

const candidates = [];

for (const feedUrl of FEEDS) {
  try {
    console.log(
      `Reading RSS: ${feedUrl}`,
    );

    const feed =
      await parser.parseURL(
        feedUrl,
      );

    const items =
      feed.items.slice(
        0,
        MAX_RSS_ITEMS_PER_FEED,
      );

    for (const item of items) {
      const url =
        typeof item.link ===
        "string"
          ? item.link.trim()
          : "";

      if (!url) {
        continue;
      }

      if (seenSet.has(url)) {
        continue;
      }

      if (existingIds.has(url)) {
        continue;
      }

      const title =
        cleanText(
          item.title,
        );

      if (!title) {
        continue;
      }

      const content =
        getArticleContent(
          item,
        );

      if (!content) {
        continue;
      }

      candidates.push({
        url,
        title,
        content,
        sourceName:
          cleanText(
            feed.title,
          ) || "Unknown",
        publishedAt:
          getPublishedAt(
            item,
          ),
        publishedTimestamp:
          getPublishedTimestamp(
            item,
          ),
      });
    }
  } catch (error) {
    console.error(
      `Failed to read RSS feed ${feedUrl}:`,
      error instanceof Error
        ? error.message
        : String(error),
    );
  }
}

candidates.sort(
  (a, b) =>
    b.publishedTimestamp -
    a.publishedTimestamp,
);

console.log(
  `Found ${candidates.length} new RSS candidates.`,
);

console.log(
  `AI processing limit for this run: ${MAX_AI_CALLS_PER_RUN}.`,
);

console.log(
  `AI model: ${AI_MODEL}`,
);

const selectedCandidates =
  candidates.slice(
    0,
    MAX_AI_CALLS_PER_RUN,
  );

const newArticles = [];

let aiCalls = 0;

for (
  const candidate of selectedCandidates
) {
  if (
    aiCalls >=
    MAX_AI_CALLS_PER_RUN
  ) {
    break;
  }

  console.log(
    `Processing ${aiCalls + 1}/${MAX_AI_CALLS_PER_RUN}: ${candidate.title}`,
  );

  try {
    aiCalls += 1;

    const result =
      await summarize(
        candidate.title,
        candidate.content,
        candidate.url,
      );

    const article = {
      id: candidate.url,
      headline:
        result.headline,
      summary:
        result.summary,
      sourceName:
        candidate.sourceName,
      sourceUrl:
        candidate.url,
      category:
        result.category,
      severity:
        result.severity,
      publishedAt:
        candidate.publishedAt,
    };

    newArticles.push(
      article,
    );

    seenSet.add(
      candidate.url,
    );

    console.log(
      `Added: ${article.headline}`,
    );
  } catch (error) {
    const status =
      error?.status;

    console.error(
      `Failed to process ${candidate.url}:`,
      error instanceof Error
        ? error.message
        : String(error),
    );

    if (
      status === 401 ||
      status === 403
    ) {
      console.error(
        "Stopping because the OpenRouter API key was rejected.",
      );

      break;
    }

    if (
      status === 429
    ) {
      console.error(
        "Stopping because OpenRouter rate-limited the request.",
      );

      break;
    }

    if (
      typeof status ===
        "number" &&
      status >= 500
    ) {
      console.error(
        "Stopping because the OpenRouter provider/server returned a server error.",
      );

      break;
    }
  }
}

if (
  normalizedExistingFeed.length >
    0 &&
  newArticles.length === 0
) {
  console.log(
    "No new articles were successfully generated. Existing feed will be preserved.",
  );
}

const merged = [
  ...newArticles,
  ...normalizedExistingFeed,
].slice(
  0,
  MAX_FEED_SIZE,
);

const finalSeen =
  Array.from(
    seenSet,
  ).slice(-2000);

writeFileSync(
  FEED_PATH,
  JSON.stringify(
    merged,
    null,
    2,
  ),
  "utf8",
);

writeFileSync(
  SEEN_PATH,
  JSON.stringify(
    finalSeen,
    null,
    2,
  ),
  "utf8",
);

console.log(
  `Added ${newArticles.length} new articles.`,
);

console.log(
  `Feed now has ${merged.length} articles.`,
);

console.log(
  `Seen URL history contains ${finalSeen.length} URLs.`,
);