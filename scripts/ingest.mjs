import Parser from "rss-parser";
import { GoogleGenAI } from "@google/genai";
import { readFileSync, writeFileSync, existsSync } from "fs";

const GEMINI_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_KEY) {
  throw new Error("Missing GEMINI_API_KEY env var");
}

const ai = new GoogleGenAI({
  apiKey: GEMINI_KEY,
});

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

const FEED_PATH = "feed.json";
const SEEN_PATH = "seen-urls.json";

const seen = existsSync(SEEN_PATH)
  ? JSON.parse(readFileSync(SEEN_PATH, "utf8"))
  : [];

const existingFeed = existsSync(FEED_PATH)
  ? JSON.parse(readFileSync(FEED_PATH, "utf8"))
  : [];

const schema = {
  type: "object",
  properties: {
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
        "low",
        "medium",
        "high",
        "critical",
      ],
    },
  },

  required: [
    "headline",
    "summary",
    "category",
    "severity",
  ],
};

async function summarize(title, content, link) {
  const prompt = `You are summarizing a cybersecurity news article for a mobile
news app.

Use ONLY facts present in the text below.

Do not invent facts, CVEs, affected products, organizations,
attackers, dates, or numbers that are not explicitly stated.

Title: ${title}

Content: ${content}

Source: ${link}

Write a factual summary between 40 and 70 words.

Use plain language.

No sensationalism.

No clickbait.

IMPORTANT NUMBER FORMAT RULE:
- Always use numerals for numbers.
- Never spell out numbers.
- For example, write "6 to 12 months", NOT "six to 12 months".
- Write "3 vulnerabilities", NOT "three vulnerabilities".
- Write "1 year", NOT "one year".
- Preserve technical identifiers exactly, including CVE numbers, version numbers, dates, percentages, and CVSS scores.

Classify the article into exactly one category:

- BREACH
- RANSOMWARE
- CVE
- VULNERABILITY
- NATION_STATE
- GENERAL

Assign one severity:

- low
- medium
- high
- critical
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.8-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  return JSON.parse(response.text);
}

function normalizeSeverity(severity) {
  const value = String(severity || "").toUpperCase();

  if (
    value === "LOW" ||
    value === "MEDIUM" ||
    value === "HIGH" ||
    value === "CRITICAL"
  ) {
    return value;
  }

  return "LOW";
}

function getPublishedAt(item) {
  const raw = item.isoDate || item.pubDate;

  if (!raw) {
    return null;
  }

  const parsed = new Date(raw);

  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed.toISOString();
}

const newArticles = [];

for (const feedUrl of FEEDS) {
  try {
    console.log(`Reading ${feedUrl}`);

    const feed = await parser.parseURL(feedUrl);

    for (const item of feed.items.slice(0, 10)) {
      const url = item.link;

      if (!url || seen.includes(url)) {
        continue;
      }

      const publishedAt = getPublishedAt(item);

      if (!publishedAt) {
        console.warn(
          `Skipping article with no valid publication date: ${item.title}`
        );
        continue;
      }

      const content =
        item.contentSnippet ||
        item.content ||
        item.title ||
        "";

      const result = await summarize(
        item.title || "Untitled article",
        content,
        url
      );

      newArticles.push({
        id: url,

        headline: result.headline,

        summary: result.summary,

        sourceName: feed.title || "Unknown",

        sourceUrl: url,

        category: result.category,

        severity: normalizeSeverity(result.severity),

        /**
         * Normalized timestamp used for reliable chronological sorting.
         */
        publishedAt,

        /**
         * Original RSS publication string.
         *
         * This is important because it may contain:
         * - exact source time
         * - date
         * - timezone
         */
        publishedAtRaw:
          item.pubDate ||
          item.isoDate ||
          null,

        imageUrl:
          item.enclosure?.url ||
          null,
      });

      seen.push(url);
    }
  } catch (err) {
    console.error(
      `Failed to process ${feedUrl}:`,
      err.message
    );
  }
}

/**
 * Combine old + new articles.
 *
 * Deduplicate by article ID.
 */
const articleMap = new Map();

for (const article of [
  ...existingFeed,
  ...newArticles,
]) {
  if (!article?.id) {
    continue;
  }

  articleMap.set(article.id, article);
}

/**
 * Sort newest publication date first.
 *
 * Articles without a valid date are pushed to the bottom.
 */
const merged = Array.from(articleMap.values())
  .sort((a, b) => {
    const aTime = Date.parse(a.publishedAt || "");
    const bTime = Date.parse(b.publishedAt || "");

    const safeA = Number.isNaN(aTime) ? 0 : aTime;
    const safeB = Number.isNaN(bTime) ? 0 : bTime;

    return safeB - safeA;
  })
  .slice(0, 100);

writeFileSync(
  FEED_PATH,
  JSON.stringify(merged, null, 2)
);

writeFileSync(
  SEEN_PATH,
  JSON.stringify(seen.slice(-2000), null, 2)
);

console.log(
  `Added ${newArticles.length} new articles. Feed now has ${merged.length}.`
);