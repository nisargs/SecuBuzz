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
const MAX_FEED_ARTICLES = 100;

const seen = existsSync(SEEN_PATH)
  ? JSON.parse(
      readFileSync(SEEN_PATH, "utf8"),
    )
  : [];

const existingFeed = existsSync(FEED_PATH)
  ? JSON.parse(
      readFileSync(FEED_PATH, "utf8"),
    )
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

async function summarize(
  title,
  content,
  link,
) {
  const prompt = `You are summarizing a cybersecurity news article for a mobile
news app. Use ONLY facts present in the text below. Do not invent facts, CVEs,
affected products, organizations, attackers, dates, or numbers that are not
explicitly stated.

Title: ${title}
Content: ${content}
Source: ${link}

Write a factual summary between 40 and 70 words, plain language, no
sensationalism, no clickbait. Classify it into exactly one category and
assign a severity.`;

  const response =
    await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

  return JSON.parse(response.text);
}

const newArticles = [];

for (const feedUrl of FEEDS) {
  try {
    const feed =
      await parser.parseURL(feedUrl);

    for (const item of feed.items.slice(
      0,
      10,
    )) {
      const url = item.link;

      if (!url || seen.includes(url)) {
        continue;
      }

      const content =
        item.contentSnippet ||
        item.content ||
        item.title;

      const result = await summarize(
        item.title,
        content,
        url,
      );

      /*
       * IMPORTANT:
       *
       *
       * We also intentionally do not inspect or copy
       * RSS enclosure fields into the article.
       */
      newArticles.push({
        id: url,
        headline: result.headline,
        summary: result.summary,
        sourceName:
          feed.title || "Unknown",
        sourceUrl: url,
        category: result.category,
        severity: result.severity,
        publishedAt:
          item.isoDate ||
          new Date().toISOString(),
      });

      seen.push(url);
    }
  } catch (err) {
    console.error(
      `Failed to process ${feedUrl}:`,
      err.message,
    );
  }
}

/*
 * Keep only the newest 100 articles in the live feed.
 *
 * IMPORTANT:
 *
 * This limit applies ONLY to feed.json.
 *
 * It does NOT affect articles that a user has already
 * bookmarked because Saved articles are persisted
 * separately in AsyncStorage.
 */
const merged = [
  ...newArticles,
  ...existingFeed,
].slice(0, MAX_FEED_ARTICLES);

writeFileSync(
  FEED_PATH,
  JSON.stringify(merged, null, 2),
);

writeFileSync(
  SEEN_PATH,
  JSON.stringify(
    seen.slice(-2000),
    null,
    2,
  ),
);

console.log(
  `Added ${newArticles.length} new articles. Feed now has ${merged.length}.`,
);