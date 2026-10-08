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

const MAX_STALE_HOURS = 14; // Alert threshold: feed must have at least one story within 14h
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

  const latest = articles[0];
  const headline = latest?.headline || latest?.title || 'Unknown Headline';
  const pubDateStr = latest?.publishedAt || latest?.pubDate;

  if (!pubDateStr) {
    console.error('[FATAL] Latest article is missing a publishedAt date field.');
    process.exit(1);
  }

  const pubTime = Date.parse(pubDateStr);
  if (isNaN(pubTime)) {
    console.error(`[FATAL] Invalid date format for latest article: "${pubDateStr}"`);
    process.exit(1);
  }

  const now = Date.now();
  const ageMs = now - pubTime;
  const ageHours = ageMs / (1000 * 60 * 60);

  console.log(`Feed count: ${articles.length} articles`);
  console.log(`Latest story: "${headline}"`);
  console.log(`Published at: ${new Date(pubTime).toISOString()} (${ageHours.toFixed(1)} hours ago)`);

  if (ageHours > MAX_STALE_HOURS) {
    console.error(`[FATAL] Feed is stale! Latest article is ${ageHours.toFixed(1)} hours old (threshold is ${MAX_STALE_HOURS}h).`);
    console.error('Ingestion pipeline failed to produce recent news!');
    process.exit(1);
  }

  console.log(`[PASS] Feed integrity and freshness verified successfully (age: ${ageHours.toFixed(1)}h <= ${MAX_STALE_HOURS}h).`);
  process.exit(0);
}

runCheck();
