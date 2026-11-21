import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

/**
 * Custom Broadcast Push Notification Tool for SecuBuzz
 * Usage:
 *   node scripts/send_custom_push.mjs --title "Title" --body "Message" [--dry-run]
 *   node scripts/send_custom_push.mjs --title "Title" --body "Message" --send
 */

function getActiveTokens() {
  try {
    const raw = execSync(
      `npx --prefix worker wrangler d1 execute secubuzz-push-db --remote --command "SELECT token, app_version, platform FROM push_tokens WHERE is_active = 1;" --json`,
      { cwd: ROOT_DIR, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    );
    const parsed = JSON.parse(raw);
    return parsed?.[0]?.results || [];
  } catch (err) {
    console.error('Failed to query active push tokens via Wrangler D1:', err.message);
    return [];
  }
}

async function main() {
  const args = process.argv.slice(2);
  const isSend = args.includes('--send');

  const titleIdx = args.indexOf('--title');
  const bodyIdx = args.indexOf('--body');
  const urlIdx = args.indexOf('--url');
  const tokenIdx = args.indexOf('--token');

  const title = titleIdx !== -1 && args[titleIdx + 1] ? args[titleIdx + 1] : 'Note from Developer';
  const body = bodyIdx !== -1 && args[bodyIdx + 1] ? args[bodyIdx + 1] : 'If you are finding SecuBuzz helpful, please drop a quick review and rating on Google Play to help us grow';
  const linkUrl = urlIdx !== -1 && args[urlIdx + 1] ? args[urlIdx + 1] : 'https://play.google.com/store/apps/details?id=com.secubuzz.app';
  const targetToken = tokenIdx !== -1 && args[tokenIdx + 1] ? args[tokenIdx + 1] : null;

  console.log('\n========================================================');
  console.log('📣 SECUBUZZ CUSTOM PUSH BROADCAST CONTROLLER');
  console.log('========================================================\n');

  console.log(`Notification Payload:`);
  console.log(`  Title:   "${title}"`);
  console.log(`  Body:    "${body}"`);
  console.log(`  Link:    ${linkUrl || '(Opens directly to News briefs tab)'}`);
  console.log(`  Target:  ${targetToken ? 'Single Test Device: ' + targetToken : 'All Active Subscriber Devices'}`);
  console.log(`  Mode:    ${isSend ? '🚨 LIVE SEND (Will buzz device)' : '🛡️ DRY-RUN PREVIEW (No devices messaged)'}\n`);

  const activeTokens = targetToken
    ? [{ token: targetToken, app_version: '1.1.0', platform: 'android' }]
    : getActiveTokens();
  console.log(`Target Fleet: ${activeTokens.length} device(s) selected.`);

  if (!isSend) {
    console.log('\n💡 To broadcast this notification to all active devices, run:');
    console.log(`   node scripts/send_custom_push.mjs --title "${title}" --body "${body}" --send\n`);
    return;
  }

  if (activeTokens.length === 0) {
    console.log('No active devices to broadcast to.');
    return;
  }

  console.log(`\nBroadcasting to ${activeTokens.length} devices via Expo Push Service...`);

  const dataPayload = {
    type: 'announcement',
    headline: title,
    summary: body,
    category: 'COMMUNITY',
    source: 'Google Play Store',
    severity: 'HIGH',
  };

  if (linkUrl) {
    dataPayload.articleId = 'developer-update';
    dataPayload.articleUrl = linkUrl;
  }

  const messages = activeTokens.map((item) => ({
    to: item.token,
    sound: 'default',
    title: title,
    body: body,
    data: dataPayload,
    priority: 'high',
    channelId: 'threat-alerts',
  }));

  // Chunk into 100 per Expo request
  const CHUNK_SIZE = 100;
  let sentCount = 0;
  let errorCount = 0;

  for (let i = 0; i < messages.length; i += CHUNK_SIZE) {
    const chunk = messages.slice(i, i + CHUNK_SIZE);
    try {
      const response = await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Accept-Encoding': 'gzip, deflate',
        },
        body: JSON.stringify(chunk),
      });

      if (!response.ok) {
        console.error(`HTTP error from Expo: ${response.status} ${response.statusText}`);
        errorCount += chunk.length;
        continue;
      }

      const result = await response.json();
      const tickets = result.data || [];

      for (const t of tickets) {
        if (t.status === 'ok') {
          sentCount++;
        } else {
          errorCount++;
          if (t.details?.error) {
            console.warn(`  Device error: ${t.details.error}`);
          }
        }
      }
    } catch (e) {
      console.error(`Network error sending batch: ${e.message}`);
      errorCount += chunk.length;
    }
  }

  console.log('\n========================================================');
  console.log('📊 BROADCAST SUMMARY');
  console.log('========================================================');
  console.log(`  Total Active Devices:  ${activeTokens.length}`);
  console.log(`  Successfully Sent:     ${sentCount}`);
  console.log(`  Failed / Errors:       ${errorCount}`);
  console.log('========================================================\n');
}

main().catch(console.error);
