import fs from 'fs';
import path from 'path';

/**
 * Custom Broadcast Push Notification Tool for SecuBuzz
 * Usage:
 *   node scripts/send_custom_push.mjs --title "Title" --body "Message" [--dry-run]
 *   node scripts/send_custom_push.mjs --title "Title" --body "Message" --send
 */

function getOauthToken() {
  const p = path.join(process.env.APPDATA, 'xdg.config', '.wrangler', 'config', 'default.toml');
  if (!fs.existsSync(p)) return null;
  const content = fs.readFileSync(p, 'utf8');
  const match = content.match(/oauth_token\s*=\s*["']([^"']+)["']/);
  return match ? match[1] : null;
}

async function queryD1(token, accountTag, databaseId, sql) {
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountTag}/d1/database/${databaseId}/query`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ sql })
  });
  const data = await res.json();
  return data.result;
}

async function main() {
  const args = process.argv.slice(2);
  const isSend = args.includes('--send');
  
  const titleIdx = args.indexOf('--title');
  const bodyIdx = args.indexOf('--body');
  const urlIdx = args.indexOf('--url');

  const title = titleIdx !== -1 && args[titleIdx + 1] ? args[titleIdx + 1] : 'SecuBuzz Community Update';
  const body = bodyIdx !== -1 && args[bodyIdx + 1] ? args[bodyIdx + 1] : 'Finding SecuBuzz helpful? Share a quick rating & review on Google Play to help independent threat intelligence grow!';
  const linkUrl = urlIdx !== -1 && args[urlIdx + 1] ? args[urlIdx + 1] : 'https://play.google.com/store/apps/details?id=com.secubuzz.app';

  console.log('\n========================================================');
  console.log('📣 SECUBUZZ CUSTOM PUSH BROADCAST CONTROLLER');
  console.log('========================================================\n');

  console.log(`Notification Payload:`);
  console.log(`  Title:   "${title}"`);
  console.log(`  Body:    "${body}"`);
  console.log(`  Link:    ${linkUrl}`);
  console.log(`  Mode:    ${isSend ? '🚨 LIVE BROADCAST (Will buzz devices)' : '🛡️ DRY-RUN PREVIEW (No devices messaged)'}\n`);

  const token = getOauthToken();
  if (!token) {
    console.error('Error: Cloudflare OAuth token not found.');
    process.exit(1);
  }

  const accountTag = '36eb47dcba495d7d872a2647755f6bde';
  const d1Id = '13e7169f-7237-46a3-97fd-d0e4762b94e2';

  const d1Res = await queryD1(token, accountTag, d1Id, `SELECT token, app_version, platform FROM push_tokens WHERE is_active = 1;`);
  const activeTokens = d1Res?.[0]?.results || [];

  console.log(`Active Device Fleet: ${activeTokens.length} devices ready to receive.`);

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

  const messages = activeTokens.map(d => ({
    to: d.token,
    sound: 'default',
    title,
    body,
    channelId: 'secubuzz-briefs',
    priority: 'high',
    data: {
      type: 'custom_broadcast',
      articleUrl: linkUrl,
      headline: title,
      summary: body,
      category: 'COMMUNITY',
      severity: 'MEDIUM'
    }
  }));

  // Chunk in batches of 100
  const CHUNK_SIZE = 100;
  let sentCount = 0;
  for (let i = 0; i < messages.length; i += CHUNK_SIZE) {
    const chunk = messages.slice(i, i + CHUNK_SIZE);
    const pushRes = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(chunk)
    });
    const result = await pushRes.json();
    sentCount += chunk.length;
    console.log(`Batch ${Math.floor(i / CHUNK_SIZE) + 1}: Sent ${chunk.length} messages. Status: ${pushRes.status}`);
  }

  console.log(`\n✅ Broadcast complete! Delivered to ${sentCount} devices.`);
}

main().catch(console.error);
