import fs from 'node:fs/promises';

const FEEDS = [
  'https://feeds.feedburner.com/TheHackersNews',
  'https://www.bleepingcomputer.com/feed/',
  'https://www.cisa.gov/cybersecurity-advisories/all.xml',
  'https://www.securityweek.com/feed/',
  'https://www.darkreading.com/rss.xml',
  'https://www.helpnetsecurity.com/feed/',
  'https://therecord.media/feed/',
];

const FEED_PATH = './feed.json';
const SEEN_URLS_PATH = './seen-urls.json';

const OPENROUTER_ENDPOINT =
  'https://openrouter.ai/api/v1/chat/completions';

const AI_MODEL =
  'nvidia/nemotron-3-super-120b-a12b:free';

const ARTICLES_PER_AI_BATCH = 4;

const MAX_FEED_SIZE = 100;
const MAX_SEEN_URLS = 2000;
const MAX_RSS_ITEMS_PER_FEED = 10;
const MAX_CONTENT_LENGTH = 5000;

const VALID_CATEGORIES = new Set([
  'BREACH',
  'RANSOMWARE',
  'CVE',
  'VULNERABILITY',
  'NATION_STATE',
  'GENERAL',
]);

const VALID_SEVERITIES = new Set([
  'LOW',
  'MEDIUM',
  'HIGH',
  'CRITICAL',
]);

function log(message) {
  console.log(message);
}

function cleanText(value) {
  if (typeof value !== 'string') {
    return '';
  }

  return value
    .replace(/\s+/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .trim();
}

function stripHtml(value) {
  return cleanText(
    value
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&amp;/gi, '&')
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>')
  );
}

function truncateText(value, maxLength) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength)}...`;
}

function normalizeCategory(value) {
  const category = cleanText(value).toUpperCase();

  if (VALID_CATEGORIES.has(category)) {
    return category;
  }

  return 'GENERAL';
}

function normalizeSeverity(value) {
  const severity = cleanText(value).toUpperCase();

  if (VALID_SEVERITIES.has(severity)) {
    return severity;
  }

  return 'MEDIUM';
}

function normalizeDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString();
  }

  return date.toISOString();
}

function getSourceName(feedUrl, item) {
  const explicitSource =
    cleanText(item.sourceName) ||
    cleanText(item.source) ||
    cleanText(item.publisher);

  if (explicitSource) {
    return explicitSource;
  }

  try {
    return new URL(feedUrl).hostname.replace(/^www\./, '');
  } catch {
    return 'Unknown Source';
  }
}

function parseXmlItems(xml) {
  const items = [];

  const rssMatches =
    xml.match(/<item\b[\s\S]*?<\/item>/gi) || [];

  for (const block of rssMatches) {
    const title =
      block.match(
        /<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i
      )?.[1] || '';

    const link =
      block.match(
        /<link(?:\s[^>]*)?>([\s\S]*?)<\/link>/i
      )?.[1] || '';

    const description =
      block.match(
        /<description(?:\s[^>]*)?>([\s\S]*?)<\/description>/i
      )?.[1] || '';

    const pubDate =
      block.match(
        /<pubDate(?:\s[^>]*)?>([\s\S]*?)<\/pubDate>/i
      )?.[1] || '';

    const source =
      block.match(
        /<source(?:\s[^>]*)?>([\s\S]*?)<\/source>/i
      )?.[1] || '';

    items.push({
      title: stripHtml(title),
      link: cleanText(link),
      description: stripHtml(description),
      pubDate: cleanText(pubDate),
      source: stripHtml(source),
    });
  }

  if (items.length > 0) {
    return items;
  }

  const atomEntries =
    xml.match(/<entry\b[\s\S]*?<\/entry>/gi) || [];

  for (const block of atomEntries) {
    const title =
      block.match(
        /<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i
      )?.[1] || '';

    const description =
      block.match(
        /<(?:summary|content)(?:\s[^>]*)?>([\s\S]*?)<\/(?:summary|content)>/i
      )?.[1] || '';

    const published =
      block.match(
        /<(?:published|updated)(?:\s[^>]*)?>([\s\S]*?)<\/(?:published|updated)>/i
      )?.[1] || '';

    const href =
      block.match(
        /<link[^>]+href=["']([^"']+)["'][^>]*\/?>/i
      )?.[1] || '';

    items.push({
      title: stripHtml(title),
      link: cleanText(href),
      description: stripHtml(description),
      pubDate: cleanText(published),
      source: '',
    });
  }

  return items;
}

async function fetchFeed(feedUrl) {
  const response = await fetch(feedUrl, {
    headers: {
      'User-Agent': 'SecuBuzz/1.0 RSS Reader',
      Accept:
        'application/rss+xml, application/atom+xml, application/xml, text/xml',
    },
  });

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status} ${response.statusText}`
    );
  }

  return response.text();
}

async function loadJson(path, fallback) {
  try {
    const raw = await fs.readFile(path, 'utf8');

    if (!raw.trim()) {
      return fallback;
    }

    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

async function saveJson(path, value) {
  await fs.writeFile(
    path,
    `${JSON.stringify(value, null, 2)}\n`,
    'utf8'
  );
}

function normalizeExistingArticle(article) {
  if (!article || typeof article !== 'object') {
    return null;
  }

  const id = cleanText(article.id);
  const headline = cleanText(article.headline);
  const summary = cleanText(article.summary);
  const sourceName = cleanText(article.sourceName);
  const sourceUrl = cleanText(article.sourceUrl);

  if (
    !id ||
    !headline ||
    !summary ||
    !sourceName ||
    !sourceUrl
  ) {
    return null;
  }

  return {
    id,
    headline,
    summary,
    sourceName,
    sourceUrl,
    category: normalizeCategory(article.category),
    publishedAt: normalizeDate(article.publishedAt),
    severity: normalizeSeverity(article.severity),
  };
}

function normalizeExistingFeed(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  const normalized = [];

  for (const item of value) {
    const article = normalizeExistingArticle(item);

    if (article) {
      normalized.push(article);
    }
  }

  return normalized;
}

function extractJsonObject(text) {
  const start = text.indexOf('{');

  if (start === -1) {
    return null;
  }

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = start; i < text.length; i += 1) {
    const char = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }

      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === '{') {
      depth += 1;
    } else if (char === '}') {
      depth -= 1;

      if (depth === 0) {
        return text.slice(start, i + 1);
      }
    }
  }

  return null;
}

function extractCompleteArticleObjects(text) {
  const results = [];

  const articlesStart = text.indexOf('"articles"');

  if (articlesStart === -1) {
    return results;
  }

  const arrayStart = text.indexOf('[', articlesStart);

  if (arrayStart === -1) {
    return results;
  }

  let objectStart = -1;
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (
    let i = arrayStart + 1;
    i < text.length;
    i += 1
  ) {
    const char = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }

      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === '{') {
      if (depth === 0) {
        objectStart = i;
      }

      depth += 1;
      continue;
    }

    if (char === '}') {
      depth -= 1;

      if (depth === 0 && objectStart !== -1) {
        const rawObject =
          text.slice(objectStart, i + 1);

        try {
          const parsed = JSON.parse(rawObject);
          results.push(parsed);
        } catch {
          // Ignore malformed objects.
        }

        objectStart = -1;
      }
    }

    if (char === ']' && depth === 0) {
      break;
    }
  }

  return results;
}

function extractArticleResults(content) {
  if (
    typeof content !== 'string' ||
    !content.trim()
  ) {
    return [];
  }

  const cleaned = content
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();

  try {
    const parsed = JSON.parse(cleaned);

    if (Array.isArray(parsed)) {
      return parsed;
    }

    if (Array.isArray(parsed.articles)) {
      return parsed.articles;
    }
  } catch {
    // Continue with recovery.
  }

  const object = extractJsonObject(cleaned);

  if (object) {
    try {
      const parsed = JSON.parse(object);

      if (Array.isArray(parsed)) {
        return parsed;
      }

      if (Array.isArray(parsed.articles)) {
        return parsed.articles;
      }
    } catch {
      // Continue with individual object recovery.
    }
  }

  return extractCompleteArticleObjects(cleaned);
}

function getResponseText(responseJson) {
  const choice = responseJson?.choices?.[0];

  if (!choice) {
    return '';
  }

  const content = choice.message?.content;

  if (typeof content === 'string') {
    return content;
  }

  if (Array.isArray(content)) {
    return content
      .map((part) => {
        if (typeof part === 'string') {
          return part;
        }

        return part?.text || '';
      })
      .join('');
  }

  return '';
}

function getFinishReason(responseJson) {
  return (
    responseJson?.choices?.[0]?.finish_reason ||
    'unknown'
  );
}

function buildBatchPrompt(candidates) {
  const candidateText = candidates
    .map(
      (candidate, index) => `
ARTICLE ${index + 1}

Title:
${candidate.title}

Source:
${candidate.sourceName}

Published:
${candidate.publishedAt}

Content:
${candidate.content}
`
    )
    .join('\n');

  return `
You are the editorial engine for SecuBuzz.

There are exactly ${candidates.length} articles below.

You MUST return exactly ${candidates.length} results.

Return exactly one result for every article:
- ARTICLE 1 -> index 1
- ARTICLE 2 -> index 2
- ARTICLE 3 -> index 3
- ARTICLE 4 -> index 4

Never omit an article.
Never merge articles.
Never invent an article.

Process every article independently.

RULES:
- Use only information supplied in the article.
- Do not invent facts.
- Keep the original meaning accurate.
- Write an approximately 40-60 word cybersecurity news summary.
- Do not shorten the summary with "...".
- Write a concise, accurate headline.
- Do not mention AI.
- Do not explain your work.
- Do not show reasoning.
- Do not use markdown.
- Do not include URLs.
- Return ONLY valid JSON.

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

Required structure:

{
  "articles": [
    {
      "index": 1,
      "headline": "Short accurate headline",
      "summary": "Approximately 40-60 words.",
      "category": "GENERAL",
      "severity": "MEDIUM"
    },
    {
      "index": 2,
      "headline": "Short accurate headline",
      "summary": "Approximately 40-60 words.",
      "category": "GENERAL",
      "severity": "MEDIUM"
    },
    {
      "index": 3,
      "headline": "Short accurate headline",
      "summary": "Approximately 40-60 words.",
      "category": "GENERAL",
      "severity": "MEDIUM"
    },
    {
      "index": 4,
      "headline": "Short accurate headline",
      "summary": "Approximately 40-60 words.",
      "category": "GENERAL",
      "severity": "MEDIUM"
    }
  ]
}

Before responding, verify:
- Exactly ${candidates.length} objects exist.
- Every index from 1 through ${candidates.length} appears exactly once.
- Every object has headline, summary, category, and severity.

${candidateText}
`;
}

async function requestOpenRouter(prompt) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    throw new Error(
      'OPENROUTER_API_KEY is not configured.'
    );
  }

  const requestBody = {
    model: AI_MODEL,
    temperature: 0.1,
    max_tokens: 5000,
    messages: [
      {
        role: 'system',
        content:
          'You are a cybersecurity news editor. You must process every supplied article and return exactly one JSON result for each article. Never omit an article. Return only valid JSON.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    response_format: {
      type: 'json_object',
    },
  };

  const response = await fetch(
    OPENROUTER_ENDPOINT,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer':
          'https://secubuzz.app',
        'X-Title': 'SecuBuzz',
      },
      body: JSON.stringify(requestBody),
    }
  );

  const responseText = await response.text();

  log(
    `OpenRouter HTTP status: ${response.status} ${response.statusText}`
  );

  if (!responseText.trim()) {
    log(
      'OpenRouter returned an empty HTTP response body.'
    );

    throw new Error(
      `OpenRouter returned an empty response body (HTTP ${response.status}).`
    );
  }

  let responseJson;

  try {
    responseJson = JSON.parse(responseText);
  } catch {
    log(
      `OpenRouter returned non-JSON response body:`
    );
    log(responseText.slice(0, 2000));

    throw new Error(
      'OpenRouter returned a non-JSON response.'
    );
  }

  if (!response.ok) {
    log(
      'OpenRouter error response:'
    );

    log(
      JSON.stringify(
        responseJson,
        null,
        2
      ).slice(0, 3000)
    );

    const message =
      responseJson?.error?.message ||
      responseJson?.error ||
      `HTTP ${response.status}`;

    throw new Error(
      `OpenRouter request failed: ${message}`
    );
  }

  log(
    `OpenRouter response top-level keys: ${Object.keys(
      responseJson
    ).join(', ')}`
  );

  if (!Array.isArray(responseJson?.choices)) {
    log(
      'OpenRouter response does not contain a choices array.'
    );

    log(
      'OpenRouter response structure:'
    );

    log(
      JSON.stringify(
        responseJson,
        null,
        2
      ).slice(0, 4000)
    );
  }

  return responseJson;
}

function buildArticleFromResult(
  result,
  candidate
) {
  if (!result || typeof result !== 'object') {
    return null;
  }

  const headline = cleanText(result.headline);
  const summary = cleanText(result.summary);

  if (!headline || !summary) {
    return null;
  }

  if (!candidate.sourceUrl) {
    return null;
  }

  const articleId = Buffer.from(
    candidate.sourceUrl
  )
    .toString('base64url')
    .slice(0, 24);

  return {
    id: articleId,
    headline,
    summary,
    sourceName: candidate.sourceName,
    sourceUrl: candidate.sourceUrl,
    category: normalizeCategory(
      result.category
    ),
    publishedAt: candidate.publishedAt,
    severity: normalizeSeverity(
      result.severity
    ),
  };
}

async function main() {
  log('Starting SecuBuzz feed ingestion...');
  log(`AI model: ${AI_MODEL}`);
  log(
    `AI batch size: ${ARTICLES_PER_AI_BATCH}`
  );
  log('');

  const existingFeedRaw =
    await loadJson(FEED_PATH, []);

  const existingFeed =
    normalizeExistingFeed(
      existingFeedRaw
    );

  const seenUrlsRaw =
    await loadJson(
      SEEN_URLS_PATH,
      []
    );

  const seenUrls = new Set(
    Array.isArray(seenUrlsRaw)
      ? seenUrlsRaw.filter(
          (url) =>
            typeof url === 'string' &&
            url.trim()
        )
      : []
  );

  const candidates = [];

  for (const feedUrl of FEEDS) {
    try {
      log(`Fetching: ${feedUrl}`);

      const xml =
        await fetchFeed(feedUrl);

      const items =
        parseXmlItems(xml).slice(
          0,
          MAX_RSS_ITEMS_PER_FEED
        );

      log(
        `Found ${items.length} RSS items.`
      );

      for (const item of items) {
        const sourceUrl =
          cleanText(item.link);

        if (
          !sourceUrl ||
          seenUrls.has(sourceUrl)
        ) {
          continue;
        }

        const title =
          cleanText(item.title);

        if (!title) {
          continue;
        }

        const content =
          truncateText(
            cleanText(
              item.description ||
                item.content ||
                ''
            ),
            MAX_CONTENT_LENGTH
          );

        candidates.push({
          title,
          content,
          sourceName:
            getSourceName(
              feedUrl,
              item
            ),
          sourceUrl,
          publishedAt:
            normalizeDate(
              item.pubDate
            ),
        });
      }
    } catch (error) {
      log(
        `Feed failed: ${feedUrl} — ${
          error instanceof Error
            ? error.message
            : String(error)
        }`
      );
    }
  }

  log('');
  log(
    `Found ${candidates.length} new RSS candidates.`
  );

  if (candidates.length === 0) {
    log(
      'No new candidates. Existing feed will be preserved.'
    );
    log(
      `Feed now has ${existingFeed.length} articles.`
    );
    log(
      `Seen URL history contains ${seenUrls.size} URLs.`
    );
    return;
  }

  candidates.sort(
    (a, b) =>
      new Date(
        b.publishedAt
      ).getTime() -
      new Date(
        a.publishedAt
      ).getTime()
  );

  const selectedCandidates =
    candidates.slice(
      0,
      ARTICLES_PER_AI_BATCH
    );

  log(
    `Selected ${selectedCandidates.length} candidates for this run.`
  );

  log('');
  log(
    'Sending selected candidates in ONE OpenRouter request...'
  );

  const prompt =
    buildBatchPrompt(
      selectedCandidates
    );

  let responseJson;

  try {
    responseJson =
      await requestOpenRouter(
        prompt
      );
  } catch (error) {
    log(
      `OpenRouter failed: ${
        error instanceof Error
          ? error.message
          : String(error)
      }`
    );

    log(
      'No new articles were generated.'
    );
    log(
      'Existing feed will be preserved.'
    );
    log(
      `Feed now has ${existingFeed.length} articles.`
    );
    log(
      `Seen URL history contains ${seenUrls.size} URLs.`
    );
    return;
  }

  const finishReason =
    getFinishReason(
      responseJson
    );

  const content =
    getResponseText(
      responseJson
    );

  log(
    `OpenRouter finish reason: ${finishReason}`
  );

  log(
    `OpenRouter response content length: ${content.length} characters.`
  );

  const results =
    extractArticleResults(
      content
    );

  log(
    `Recovered ${results.length} article results from OpenRouter.`
  );

  if (results.length === 0) {
    log(
      'No usable article results were recovered.'
    );

    if (content) {
      log(
        `Response preview:\n${content.slice(
          0,
          2000
        )}`
      );
    }

    log(
      'No new articles were added.'
    );
    log(
      `Feed now has ${existingFeed.length} articles.`
    );
    log(
      `Seen URL history contains ${seenUrls.size} URLs.`
    );
    return;
  }

  const newArticles = [];
  const successfullyProcessedUrls =
    new Set();

  for (const result of results) {
    const index =
      Number(result?.index);

    if (
      !Number.isInteger(index) ||
      index < 1 ||
      index >
        selectedCandidates.length
    ) {
      continue;
    }

    const candidate =
      selectedCandidates[
        index - 1
      ];

    const article =
      buildArticleFromResult(
        result,
        candidate
      );

    if (!article) {
      continue;
    }

    newArticles.push(article);

    successfullyProcessedUrls.add(
      candidate.sourceUrl
    );
  }

  log(
    `Successfully built ${newArticles.length} new articles.`
  );

  if (newArticles.length === 0) {
    log(
      'No valid articles survived validation.'
    );
    log(
      'Existing feed will be preserved.'
    );
    log(
      `Feed now has ${existingFeed.length} articles.`
    );
    log(
      `Seen URL history contains ${seenUrls.size} URLs.`
    );
    return;
  }

  for (const url of successfullyProcessedUrls) {
    seenUrls.add(url);
  }

  const merged = [
    ...newArticles,
    ...existingFeed,
  ];

  const deduplicated = [];
  const ids = new Set();
  const urls = new Set();

  for (const article of merged) {
    if (
      ids.has(article.id) ||
      urls.has(article.sourceUrl)
    ) {
      continue;
    }

    ids.add(article.id);
    urls.add(article.sourceUrl);
    deduplicated.push(article);
  }

  deduplicated.sort(
    (a, b) =>
      new Date(
        b.publishedAt
      ).getTime() -
      new Date(
        a.publishedAt
      ).getTime()
  );

  const finalFeed =
    deduplicated.slice(
      0,
      MAX_FEED_SIZE
    );

  const finalSeenUrls =
    Array.from(seenUrls).slice(
      -MAX_SEEN_URLS
    );

  await saveJson(
    FEED_PATH,
    finalFeed
  );

  await saveJson(
    SEEN_URLS_PATH,
    finalSeenUrls
  );

  log('');
  log(
    `Added ${newArticles.length} new articles.`
  );
  log(
    `Feed now has ${finalFeed.length} articles.`
  );
  log(
    `Seen URL history contains ${finalSeenUrls.length} URLs.`
  );
}

main().catch((error) => {
  console.error(
    'Ingestion failed:',
    error instanceof Error
      ? error.stack ||
        error.message
      : error
  );

  process.exit(1);
});