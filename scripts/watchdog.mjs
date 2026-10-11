#!/usr/bin/env node
/**
 * SecuBuzz Live Feed Watchdog & Dead-Man's Switch
 *
 * Checks production feed freshness on https://secubuzz.com.
 * If the newest article exceeds the freshness threshold (default 6 hours),
 * it alerts and automatically attempts to trigger an emergency ingestion run.
 */

import process from 'node:process';

const TARGET_URL = process.env.SECUBUZZ_FEED_URL || 'https://secubuzz.com/feed.json';
const TRIGGER_URL = process.env.SECUBUZZ_TRIGGER_URL || 'https://secubuzz.com/api/trigger-ingest';
const PUSH_ADMIN_SECRET = process.env.PUSH_ADMIN_SECRET;
function getFreshnessThreshold() {
  if (process.env.MAX_STALE_HOURS) {
    return parseFloat(process.env.MAX_STALE_HOURS);
  }
  const now = new Date();
  const day = now.getUTCDay();
  const hour = now.getUTCHours();
  const isWeekend = day === 0 || day === 6 || (day === 1 && hour < 16);
  return isWeekend ? 28.0 : 12.0;
}

const MAX_STALE_HOURS = getFreshnessThreshold();

async function triggerEmergencyIngest() {
  console.log('[WATCHDOG RECOVERY] Initiating emergency out-of-band ingestion...');

  // Option A: Trigger via Worker /api/trigger-ingest endpoint
  if (PUSH_ADMIN_SECRET) {
    try {
      console.log(`[WATCHDOG RECOVERY] Sending dispatch to ${TRIGGER_URL}...`);
      const res = await fetch(TRIGGER_URL, {
        method: 'POST',
        headers: {
          'x-admin-key': PUSH_ADMIN_SECRET,
          'Authorization': `Bearer ${PUSH_ADMIN_SECRET}`,
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        console.log('[WATCHDOG RECOVERY] Ingestion dispatch accepted by Cloudflare Worker (204/200).');
        return true;
      }
      console.warn(`[WATCHDOG RECOVERY] Worker dispatch responded with HTTP ${res.status}`);
    } catch (err) {
      console.warn('[WATCHDOG RECOVERY] Worker dispatch failed:', err.message);
    }
  }

  // Option B: Trigger directly via GitHub Actions API if token available
  if (GITHUB_PAT) {
    try {
      console.log('[WATCHDOG RECOVERY] Dispatching directly via GitHub Actions REST API...');
      const ghRes = await fetch(
        'https://api.github.com/repos/nisargs/SecuBuzz/actions/workflows/ingest.yml/dispatches',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GITHUB_PAT}`,
            'Accept': 'application/vnd.github+json',
            'User-Agent': 'SecuBuzz-Watchdog-Script',
          },
          body: JSON.stringify({ ref: 'main' }),
        }
      );

      if (ghRes.status === 204) {
        console.log('[WATCHDOG RECOVERY] GitHub Actions workflow_dispatch triggered successfully (204 No Content).');
        return true;
      }
      console.warn(`[WATCHDOG RECOVERY] GitHub dispatch responded with HTTP ${ghRes.status}`);
    } catch (err) {
      console.warn('[WATCHDOG RECOVERY] GitHub dispatch failed:', err.message);
    }
  }

  console.warn('[WATCHDOG RECOVERY] No credentials configured locally to auto-dispatch. Manual dispatch needed via GitHub Actions tab.');
  return false;
}

async function checkLiveFeed() {
  console.log('========================================================');
  console.log('📡 SECUBUZZ FEED WATCHDOG AUDIT');
  console.log(`Checking live feed: ${TARGET_URL}`);
  console.log(`Freshness threshold: ${MAX_STALE_HOURS} hours`);
  console.log('========================================================');

  try {
    const res = await fetch(`${TARGET_URL}?_t=${Date.now()}`, {
      headers: { 'User-Agent': 'SecuBuzz-Watchdog/1.0' },
    });

    if (!res.ok) {
      console.error(`[WATCHDOG CRITICAL] HTTP error ${res.status} when querying live feed.`);
      await triggerEmergencyIngest();
      process.exit(1);
    }

    const feed = await res.json();
    if (!Array.isArray(feed) || feed.length === 0) {
      console.error('[WATCHDOG CRITICAL] Live feed is empty or invalid.');
      await triggerEmergencyIngest();
      process.exit(1);
    }

    const latest = feed[0];
    const headline = latest?.headline || latest?.title || 'Unknown Headline';
    const pubDateStr = latest?.publishedAt || latest?.pubDate;
    const pubTime = Date.parse(pubDateStr);

    if (!pubDateStr || isNaN(pubTime)) {
      console.error('[WATCHDOG CRITICAL] Top article has invalid timestamp.');
      await triggerEmergencyIngest();
      process.exit(1);
    }

    const now = Date.now();
    const ageHours = (now - pubTime) / (1000 * 60 * 60);

    console.log(`Live articles count: ${feed.length}`);
    console.log(`Latest story: "${headline}"`);
    console.log(`Published: ${new Date(pubTime).toISOString()} (${ageHours.toFixed(1)} hours ago)`);

    if (ageHours > MAX_STALE_HOURS) {
      console.error('--------------------------------------------------------');
      console.error(`🚨 ALERT: Feed is STALE (${ageHours.toFixed(1)}h old > threshold ${MAX_STALE_HOURS}h)!`);
      console.error('--------------------------------------------------------');
      const triggered = await triggerEmergencyIngest();
      if (triggered) {
        console.log('[WATCHDOG] Automated recovery pipeline triggered.');
      }
      process.exit(1);
    }

    console.log(`✅ [HEALTHY] Live news feed is fresh (${ageHours.toFixed(1)}h old <= ${MAX_STALE_HOURS}h).`);
    process.exit(0);
  } catch (err) {
    console.error('[WATCHDOG CRITICAL] Network failure connecting to feed:', err.message);
    process.exit(1);
  }
}

checkLiveFeed();
