import fs from 'fs';
import path from 'path';

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
  console.log('\n========================================================');
  console.log('📊 SECUBUZZ BROADCAST CLICK & OPEN TELEMETRY');
  console.log('========================================================\n');

  const token = getOauthToken();
  if (!token) {
    console.error('Error: Cloudflare OAuth token not found.');
    process.exit(1);
  }

  const accountTag = '36eb47dcba495d7d872a2647755f6bde';
  const d1Id = '13e7169f-7237-46a3-97fd-d0e4762b94e2';

  const d1Res = await queryD1(
    token,
    accountTag,
    d1Id,
    `
    SELECT COUNT(*) as activeCount FROM push_tokens WHERE is_active = 1;
    SELECT * FROM notification_opens WHERE article_id LIKE '%play.google.com%' OR article_id LIKE '%community%' ORDER BY opened_at DESC;
    SELECT COUNT(*) as totalAllOpens FROM notification_opens;
    `
  );

  const activeCount = d1Res?.[0]?.results?.[0]?.activeCount || 0;
  const broadcastOpens = d1Res?.[1]?.results || [];
  const totalAllOpens = d1Res?.[2]?.results?.[0]?.totalAllOpens || 0;

  console.log(`Active Device Fleet:       ${activeCount} devices`);
  console.log(`Broadcast Opens / Clicks:   ${broadcastOpens.length} (${activeCount > 0 ? ((broadcastOpens.length / activeCount) * 100).toFixed(1) : 0}% Click-Through Rate)`);
  console.log(`Total System Opens (All):  ${totalAllOpens}\n`);

  if (broadcastOpens.length === 0) {
    console.log('No clicks recorded yet on this broadcast. Waiting for recipients to tap...');
  } else {
    console.log('Recent Clicks / Opens on this Broadcast:');
    broadcastOpens.forEach((row, i) => {
      console.log(`  [#${i + 1}] ${row.opened_at} | Version: v${row.app_version} | Platform: ${row.platform}`);
    });
  }
  console.log('\n💡 Re-run this check anytime: node scripts/track_broadcast_clicks.mjs\n');
}

main().catch(console.error);
