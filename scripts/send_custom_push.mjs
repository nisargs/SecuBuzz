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
  const linkUrl = urlIdx !== -1 && args[urlIdx + 1] ? args[urlIdx + 1] : null;

  console.log('\n========================================================');
  console.log('📣 SECUBUZZ CUSTOM PUSH BROADCAST CONTROLLER');
  console.log('========================================================\n');

  console.log(`Notification Payload:`);
  console.log(`  Title:   "${title}"`);
  console.log(`  Body:    "${body}"`);
  console.log(`  Link:    ${linkUrl || '(Opens directly to News briefs tab)'}`);
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

  const dataPayload = {
    type: 'announcement',
    headline: title,
    summary: body,
    category: 'CVE',
    severity: 'HIGH'
  };

  if (linkUrl) {
    dataPayload.articleId = linkUrl;
    dataPayload.articleUrl = linkUrl;
  }

  const messages = activeTokens.map(d => ({
    to: d.token,
    sound: 'default',
    title,
    body,
    channelId: 'secubuzz-briefs',
    priority: 'high',
    data: dataPayload
  }));

  // Chunk in batches of 100
  const CHUNK_SIZE = 100;
  let sentCount = 0;
  let successCount = 0;
  let errorCount = 0;
  const invalidTokens = [];

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

    if (Array.isArray(result?.data)) {
      result.data.forEach((ticket, idx) => {
        if (ticket.status === 'ok') {
          successCount++;
        } else {
          errorCount++;
          if (ticket.details?.error === 'DeviceNotRegistered') {
            invalidTokens.push(chunk[idx].to);
          }
          console.warn(`Device ${chunk[idx].to} push error:`, ticket.message || ticket.details);
        }
      });
    }

    console.log(`Batch ${Math.floor(i / CHUNK_SIZE) + 1}: Sent ${chunk.length} messages. Status: ${pushRes.status}`);
  }

  console.log(`\n✅ Broadcast complete!`);
  console.log(`   Total devices targeted: ${sentCount}`);
  console.log(`   Tickets OK:             ${successCount}`);
  if (errorCount > 0) {
    console.log(`   Tickets Error:          ${errorCount}`);
  }

  if (invalidTokens.length > 0) {
    console.log(`\nDeactivating ${invalidTokens.length} unregistered device tokens in Cloudflare D1...`);
    const placeholders = invalidTokens.map(() => '?').join(', ');
    await queryD1(
      token,
      accountTag,
      d1Id,
      `UPDATE push_tokens SET is_active = 0 WHERE token IN (${placeholders});`
    );
    console.log(`Deactivated ${invalidTokens.length} dead tokens.`);
  }
}

main().catch(console.error);
