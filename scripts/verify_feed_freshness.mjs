#!/usr/bin/env node
/**
 * SecuBuzz Feed Freshness & Integrity Gate
 * 
 * Verifies that feed.json is non-empty, structurally valid,
 * and that the newest article is not older than the allowed freshness threshold.
 * Exits with code 1 if the feed is stale or corrupted, causing CI to fail loudly.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const FEED_FILE = path.join(ROOT_DIR, 'feed.json');

// Determine weekend news lull window (Saturday 00:00 UTC through Monday 16:00 UTC)
function getMaxStaleHours() {
  const now = new Date();
  const day = now.getUTCDay(); // 0 = Sunday, 6 = Saturday, 1 = Monday
  const hour = now.getUTCHours();
  const isWeekendWindow = day === 0 || day === 6 || (day === 1 && hour < 16);
  // 32 hours on weekends accounts for typical industry lull; 18 hours on business weekdays
  return isWeekendWindow ? 32 : 18;
}

const MIN_ARTICLE_COUNT = 50;

function runCheck() {
  console.log('--- SecuBuzz Feed Integrity Gate ---');

  if (!fs.existsSync(FEED_FILE)) {
    console.error(`[FATAL] feed.json does not exist at ${FEED_FILE}`);
    process.exit(1);
  }

  let articles;
  try {
    const raw = fs.readFileSync(FEED_FILE, 'utf8');
    articles = JSON.parse(raw);
  } catch (err) {
    console.error(`[FATAL] feed.json contains invalid JSON: ${err.message}`);
    process.exit(1);
  }

  if (!Array.isArray(articles) || articles.length < MIN_ARTICLE_COUNT) {
    console.error(`[FATAL] feed.json has only ${articles?.length || 0} articles (expected at least ${MIN_ARTICLE_COUNT})`);
    process.exit(1);
  }

  // Find the newest article timestamp across the top 15 items
  const candidates = articles.slice(0, 15).map((art) => {
    const pubDateStr = art?.publishedAt || art?.pubDate;
    const pubTime = pubDateStr ? Date.parse(pubDateStr) : NaN;
    return {
      headline: art?.headline || art?.title || 'Unknown Headline',
      pubTime,
      pubDateStr,
    };
  }).filter((c) => !isNaN(c.pubTime));

  if (candidates.length === 0) {
    console.error('[FATAL] No valid publishedAt dates found in top feed articles.');
    process.exit(1);
  }

  candidates.sort((a, b) => b.pubTime - a.pubTime);
  const newest = candidates[0];

  const now = Date.now();
  const ageMs = now - newest.pubTime;
  const ageHours = ageMs / (1000 * 60 * 60);
  const maxStaleHours = getMaxStaleHours();

  console.log(`Feed count: ${articles.length} articles`);
  console.log(`Latest story: "${newest.headline}"`);
  console.log(`Published at: ${new Date(newest.pubTime).toISOString()} (${ageHours.toFixed(1)} hours ago)`);
  console.log(`Allowed freshness threshold: ${maxStaleHours} hours`);

  if (ageHours > maxStaleHours) {
    console.error(`[FATAL] Feed is stale! Latest article is ${ageHours.toFixed(1)} hours old (threshold is ${maxStaleHours}h).`);
    console.error('Ingestion pipeline failed to produce recent news!');
    process.exit(1);
  }

  console.log(`[PASS] Feed integrity and freshness verified successfully (age: ${ageHours.toFixed(1)}h <= ${maxStaleHours}h).`);
  process.exit(0);
}

runCheck();
