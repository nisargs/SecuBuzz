#!/usr/bin/env node
/**
 * SecuBuzz Android Security Bulletin (ASB) Monthly Ingestion Pipeline
 *
 * Runs monthly to parse Google's official Android Security Bulletins,
 * extract Critical and High severity CVEs across Framework, System, and Kernel,
 * and generate concise, 60-word technical briefs via Groq/Gemini.
 *
 * Cadence: Monthly (1st Monday / 5th of each month)
 * Source: https://source.android.com/docs/security/bulletin
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const FEED_PATH = path.join(ROOT_DIR, 'feed.json');
const SEEN_URLS_PATH = path.join(ROOT_DIR, 'seen-urls.json');

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = process.env.GROQ_MODEL || 'openai/gpt-oss-20b';
const GROQ_API_KEY = process.env.GROQ_API_KEY;

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/chat/completions';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const MAX_FEED_ARTICLES = 350;

// Command line args
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const customBulletinArg = args.find((a) => a.startsWith('--bulletin='))?.split('=')[1];

function getTargetBulletinDate() {
  if (customBulletinArg) {
    return customBulletinArg;
  }
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  return `${year}-${month}-01`;
}

function getPreviousMonthBulletinDate(dateStr) {
  const [yearStr, monthStr] = dateStr.split('-');
  let year = parseInt(yearStr, 10);
  let month = parseInt(monthStr, 10) - 1;
  if (month === 0) {
    month = 12;
    year -= 1;
  }
  return `${year}-${String(month).padStart(2, '0')}-01`;
}

async function fetchBulletinHtml(bulletinDate) {
  const [year] = bulletinDate.split('-');
  const primaryUrl = `https://source.android.com/docs/security/bulletin/${year}/${bulletinDate}?hl=en`;
  console.log(`[ASB] Fetching bulletin: ${primaryUrl}`);

  const res = await fetch(primaryUrl, {
    headers: {
      'User-Agent': 'SecuBuzz/1.0 Android Security Bulletin Ingest',
      'Accept-Language': 'en-US,en;q=0.9',
    },
    signal: AbortSignal.timeout(15000),
  });

  if (!res.ok) {
    if (res.status === 404) {
      console.warn(`[ASB] Bulletin for ${bulletinDate} not found (HTTP 404). Checking previous month...`);
      const prevDate = getPreviousMonthBulletinDate(bulletinDate);
      const [prevYear] = prevDate.split('-');
      const fallbackUrl = `https://source.android.com/docs/security/bulletin/${prevYear}/${prevDate}?hl=en`;
      console.log(`[ASB] Fetching fallback bulletin: ${fallbackUrl}`);
      const fallbackRes = await fetch(fallbackUrl, {
        headers: {
          'User-Agent': 'SecuBuzz/1.0 Android Security Bulletin Ingest',
          'Accept-Language': 'en-US,en;q=0.9',
        },
        signal: AbortSignal.timeout(15000),
      });
      if (fallbackRes.ok) {
        return {
          url: fallbackUrl.replace('?hl=en', ''),
          date: prevDate,
          html: await fallbackRes.text(),
        };
      }
    }
    throw new Error(`Failed to fetch bulletin: HTTP ${res.status} ${res.statusText}`);
  }

  return {
    url: primaryUrl.replace('?hl=en', ''),
    date: bulletinDate,
    html: await res.text(),
  };
}

function parseBulletin(html, bulletinDate) {
  // Strip script/style
  const cleanHtml = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');

  const trs = cleanHtml.match(/<tr[\s\S]*?<\/tr>/gi) || [];
  const vulnerabilities = [];

  for (const tr of trs) {
    const cveMatch = tr.match(/CVE-\d{4}-\d+/i);
    if (!cveMatch) continue;
    const cve = cveMatch[0].toUpperCase();

    const tds = [...tr.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((m) =>
      m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
    );

    if (tds.length >= 4) {
      // Typical ASB table: [CVE, References, Type, Severity, Updated AOSP versions]
      const reference = tds[1] || '';
      const type = tds[2] || 'Vulnerability';
      const severityLower = (tds[3] || 'high').toLowerCase();
      let severity = 'HIGH';
      if (severityLower.includes('critical')) {
        severity = 'CRITICAL';
      } else if (severityLower.includes('moderate') || severityLower.includes('medium')) {
        severity = 'MEDIUM';
      } else if (severityLower.includes('low')) {
        severity = 'LOW';
      }
      const versions = tds[4] || '';

      vulnerabilities.push({
        cve,
        reference,
        type,
        severity,
        versions,
      });
    }
  }

  // Deduplicate by CVE
  const uniqueVulns = [];
  const seenCves = new Set();
  for (const v of vulnerabilities) {
    if (!seenCves.has(v.cve)) {
      seenCves.add(v.cve);
      uniqueVulns.push(v);
    }
  }

  const criticals = uniqueVulns.filter((v) => v.severity === 'CRITICAL');
  const highs = uniqueVulns.filter((v) => v.severity === 'HIGH');
  const moderates = uniqueVulns.filter((v) => v.severity === 'MEDIUM');

  console.log(`[ASB] Parsed bulletin ${bulletinDate}:`);
  console.log(`      Total unique CVEs: ${uniqueVulns.length}`);
  console.log(`      Critical severity: ${criticals.length}`);
  console.log(`      High severity:     ${highs.length}`);
  console.log(`      Moderate severity: ${moderates.length}`);

  return {
    bulletinDate,
    totalCves: uniqueVulns.length,
    criticals,
    highs,
    moderates,
    allVulns: uniqueVulns,
  };
}

function buildPromptForBulletin(parsed, bulletinUrl) {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const [year, month] = parsed.bulletinDate.split('-');
  const monthName = monthNames[parseInt(month, 10) - 1] || 'Current';

  const criticalCveList = parsed.criticals.map((c) => `${c.cve} (${c.type})`).slice(0, 5).join(', ') || 'None';
  const highCveList = parsed.highs.map((c) => `${c.cve} (${c.type})`).slice(0, 5).join(', ') || 'None';
  const moderateCveList = parsed.moderates.map((c) => `${c.cve} (${c.type})`).slice(0, 5).join(', ') || 'None';

  return `
You are the content editor for SecuBuzz, a concise cybersecurity news app.

Create an authoritative intelligence brief summarizing the official Android Security Bulletin for ${monthName} ${year}.

DATA:
- Month/Year: ${monthName} ${year}
- Total Vulnerabilities Addressed: ${parsed.totalCves}
- Critical Severity Flaws: ${parsed.criticals.length} (Key CVEs: ${criticalCveList})
- High Severity Flaws: ${parsed.highs.length} (Key CVEs: ${highCveList})
- Moderate Severity Flaws: ${parsed.moderates.length} (Key CVEs: ${moderateCveList})
- Source: Android Open Source Project (Google)

STRICT REQUIREMENTS:
1. HEADLINE: Strictly under 10 words. Concise, authoritative.
   Example: "Google Fixes ${parsed.totalCves} Android Flaws in ${monthName} ${year} Bulletin"
2. SUMMARY: Strictly between 50 and 60 words. Exactly 3 informative sentences:
   - Sentence 1 (Incident & Scope): State Google's release of the ${monthName} ${year} Android Security Bulletin resolving ${parsed.totalCves} vulnerabilities across core Android Framework, System, and vendor components.
   - Sentence 2 (Technical Flaw & Severity): Detail the ${parsed.criticals.length} Critical flaws (identifying key CVEs like ${parsed.criticals[0]?.cve || 'key system flaws'}) and potential for remote code execution or elevation of privilege.
   - Sentence 3 (Action & Patch Level): Specify that devices require the ${parsed.bulletinDate.substring(0, 7)}-05 security patch level or vendor firmware updates to fully remediate the disclosed flaws.
3. ANTI-AI SLOP: No conversational filler ("delve", "pivotal", "in today's landscape", "crucial", "testament").
4. No markdown, no bullet points, no ellipses.

Return pure JSON with this exact schema:
{
  "headline": "concise headline",
  "summary": "exact 3-sentence 50-60 word brief",
  "category": "CVE",
  "severity": "${parsed.criticals.length > 0 ? 'CRITICAL' : 'HIGH'}"
}
`;
}

async function callGroqOrGemini(prompt) {
  if (GROQ_API_KEY) {
    try {
      console.log(`[ASB] Requesting brief from Groq (${GROQ_MODEL})...`);
      const res = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.1,
          response_format: { type: 'json_object' },
        }),
        signal: AbortSignal.timeout(30000),
      });

      if (res.ok) {
        const data = await res.json();
        const content = data?.choices?.[0]?.message?.content;
        return JSON.parse(content);
      }
      console.warn(`[ASB] Groq failed with HTTP ${res.status}, falling back to Gemini...`);
    } catch (err) {
      console.warn(`[ASB] Groq request error: ${err.message}, falling back to Gemini...`);
    }
  }

  if (GEMINI_API_KEY) {
    console.log(`[ASB] Requesting brief from Gemini (${GEMINI_MODEL})...`);
    const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: GEMINI_MODEL,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.1,
        response_format: { type: 'json_object' },
      }),
      signal: AbortSignal.timeout(30000),
    });

    if (res.ok) {
      const data = await res.json();
      const content = data?.choices?.[0]?.message?.content;
      return JSON.parse(content);
    }
    throw new Error(`Gemini failed with HTTP ${res.status}`);
  }

  throw new Error('No AI API key available for ASB summarization.');
}

async function main() {
  console.log('=== SecuBuzz Android Security Bulletin (ASB) Ingestion ===');

  const targetDate = getTargetBulletinDate();
  const { url: bulletinUrl, date: bulletinDate, html } = await fetchBulletinHtml(targetDate);
  const parsed = parseBulletin(html, bulletinDate);

  if (parsed.totalCves === 0) {
    console.warn('[ASB] No CVEs found in bulletin. Exiting.');
    return;
  }

  // Load feed.json to check if bulletin is already covered
  let feed = [];
  try {
    const rawFeed = await fs.readFile(FEED_PATH, 'utf8');
    feed = JSON.parse(rawFeed);
  } catch (err) {
    console.warn(`[ASB] Could not read feed.json: ${err.message}`);
  }

  // Check if bulletin URL or primary CVE is already in feed.json
  const bulletinIdentifier = `source.android.com/docs/security/bulletin/${bulletinDate.split('-')[0]}/${bulletinDate}`;
  const alreadyIngested = feed.some(
    (item) => (item.url && item.url.includes(bulletinIdentifier)) || (item.sourceUrl && item.sourceUrl.includes(bulletinIdentifier))
  );

  if (alreadyIngested && !isDryRun) {
    console.log(`[ASB] Bulletin for ${bulletinDate} is already indexed in feed.json. Nothing to do.`);
    return;
  }

  const prompt = buildPromptForBulletin(parsed, bulletinUrl);

  if (isDryRun) {
    console.log('\n[ASB DRY RUN] Generated Prompt:\n', prompt);
    console.log('\n[ASB DRY RUN] Sample CVEs:', parsed.allVulns.slice(0, 5));
    console.log('[ASB DRY RUN] Completed dry run without AI calls or disk writes.');
    return;
  }

  const brief = await callGroqOrGemini(prompt);
  console.log('[ASB] Generated Brief:');
  console.log(`      Headline: "${brief.headline}"`);
  console.log(`      Summary:  "${brief.summary}"`);
  console.log(`      Category: ${brief.category} | Severity: ${brief.severity}`);

  // Construct SecuBuzz article object
  const articleId = `asb-${bulletinDate}`;
  const topCves = parsed.criticals.length > 0 ? parsed.criticals.map((c) => c.cve) : parsed.highs.slice(0, 5).map((c) => c.cve);

  const newArticle = {
    id: articleId,
    title: brief.headline,
    headline: brief.headline,
    summary: brief.summary,
    url: bulletinUrl,
    source: 'Android Security Bulletin',
    category: 'CVE',
    severity: brief.severity || 'CRITICAL',
    cves: topCves,
    publishedAt: new Date().toISOString(),
    timeAgo: 'Just now',
  };

  // Prepend to feed
  const updatedFeed = [newArticle, ...feed.filter((item) => item.id !== articleId)].slice(0, MAX_FEED_ARTICLES);
  await fs.writeFile(FEED_PATH, `${JSON.stringify(updatedFeed, null, 2)}\n`, 'utf8');
  console.log(`[ASB] Successfully prepended Android Security Bulletin brief to feed.json (Total: ${updatedFeed.length}).`);

  // Update seen-urls
  try {
    const rawSeen = await fs.readFile(SEEN_URLS_PATH, 'utf8');
    const seenUrls = new Set(JSON.parse(rawSeen));
    seenUrls.add(bulletinUrl);
    await fs.writeFile(SEEN_URLS_PATH, `${JSON.stringify([...seenUrls], null, 2)}\n`, 'utf8');
    console.log('[ASB] Updated seen-urls.json');
  } catch (err) {
    console.warn(`[ASB] Could not update seen-urls.json: ${err.message}`);
  }

  console.log('=== ASB Ingestion Complete ===');
}

main().catch((err) => {
  console.error('[FATAL ASB ERROR]:', err);
  process.exit(1);
});

