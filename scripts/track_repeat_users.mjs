import fs from 'fs';
import path from 'path';

function getOauthToken() {
  const p = path.join(process.env.APPDATA, 'xdg.config', '.wrangler', 'config', 'default.toml');
  if (!fs.existsSync(p)) {
    throw new Error(`Wrangler OAuth configuration not found at ${p}. Run 'npx wrangler login' first.`);
  }
  const content = fs.readFileSync(p, 'utf8');
  const match = content.match(/oauth_token\s*=\s*["']([^"']+)["']/);
  if (!match) throw new Error('Could not find oauth_token in default.toml');
  return match[1];
}

async function queryGraphQL(token, query, variables = {}) {
  const res = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  });
  return await res.json();
}

async function queryD1(token, accountTag, databaseId, sql) {
  try {
    const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountTag}/d1/database/${databaseId}/query`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sql })
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.result || null;
  } catch {
    return null;
  }
}

export async function checkRepeatVisitors({
  accountTag = '36eb47dcba495d7d872a2647755f6bde',
  siteTag = '1b2689c6e1e149fa88ee6ed4206893be',
  zoneTag = '65259b39c7fd2648a898415fb780bcf7'
} = {}) {
  const token = getOauthToken();
  const now = new Date();
  const nowIso = now.toISOString();
  const todayStr = nowIso.slice(0, 10);
  const since48h = new Date(Date.now() - 48 * 3600 * 1000).toISOString();

  const query = `
  query RepeatVisitorsReport($accountTag: string!, $siteTag: string!, $zoneTag: string!, $since: string!, $until: string!) {
    viewer {
      accounts(filter: { accountTag: $accountTag }) {
        rumCohorts: rumPageloadEventsAdaptiveGroups(
          limit: 100
          filter: {
            siteTag: $siteTag
            datetime_geq: $since
            datetime_leq: $until
          }
          orderBy: [count_DESC]
        ) {
          count
          sum { visits }
          dimensions {
            date
            requestPath
            refererHost
            refererPath
            userAgentBrowser
            userAgentOS
            deviceType
            countryName
          }
        }
      }
      zones(filter: { zoneTag: $zoneTag }) {
        ukRequests: httpRequestsAdaptiveGroups(
          limit: 50
          filter: {
            datetime_geq: $since
            datetime_leq: $until
            clientCountryName: "GB"
            clientDeviceType: "mobile"
          }
          orderBy: [datetime_DESC]
        ) {
          count
          dimensions {
            datetime
            clientRequestPath
            clientRequestHTTPMethodName
            edgeResponseStatus
          }
        }
      }
    }
  }
  `;

  const res = await queryGraphQL(token, query, {
    accountTag,
    siteTag,
    zoneTag,
    since: since48h,
    until: nowIso
  });

  const cohorts = res.data?.viewer?.accounts?.[0]?.rumCohorts || [];
  const ukRequests = res.data?.viewer?.zones?.[0]?.ukRequests || [];

  return {
    timestamp: nowIso,
    token,
    accountTag,
    cohorts,
    ukRequests
  };
}

if (process.argv[1]?.endsWith('track_repeat_users.mjs')) {
  checkRepeatVisitors().then(async ({ timestamp, token, accountTag, cohorts, ukRequests }) => {
    console.log(`\n========================================================`);
    console.log(`🔍 SECUBUZZ REPEAT VISITOR AUDIT (${timestamp})`);
    console.log(`========================================================`);

    // 1. UK Visitor Tracker
    console.log(`\n🇬🇧 [1] UK MOBILE READER STATUS:`);
    if (ukRequests.length === 0) {
      console.log(`  No UK mobile requests detected in the last 48 hours.`);
    } else {
      console.log(`  Total requests recorded: ${ukRequests.length}`);
      const latest = ukRequests[0];
      console.log(`  Latest active request: ${latest.dimensions.datetime} -> ${latest.dimensions.clientRequestHTTPMethodName} ${latest.dimensions.clientRequestPath}`);
      console.log(`  Recent timeline:`);
      for (const r of ukRequests.slice(0, 8)) {
        console.log(`    - ${r.dimensions.datetime} | ${r.dimensions.clientRequestHTTPMethodName} ${r.dimensions.clientRequestPath}`);
      }
    }

    // 2. Reddit Traffic Tracker
    const redditCohorts = cohorts.filter(c => {
      const h = (c.dimensions.refererHost || '').toLowerCase();
      return h.includes('reddit');
    });

    console.log(`\n🔴 [2] REDDIT INBOUND TRAFFIC COHORT:`);
    if (redditCohorts.length === 0) {
      console.log(`  No Reddit referrers recorded in the period.`);
    } else {
      for (const r of redditCohorts) {
        console.log(`  - [${r.dimensions.date}] ${r.dimensions.countryName} | ${r.dimensions.deviceType} (${r.dimensions.userAgentOS}) | ${r.dimensions.requestPath} | ${r.count} loads, ${r.sum.visits} visits (via ${r.dimensions.refererHost})`);
      }
    }

    // 3. Direct & Returning Readers
    const directCohorts = cohorts.filter(c => !c.dimensions.refererHost || c.dimensions.refererHost === 'secubuzz.com');
    console.log(`\n🔖 [3] RETURNING DIRECT / BOOKMARK / PWA READERS:`);
    let directCount = 0;
    let directVisits = 0;
    for (const d of directCohorts) {
      directCount += d.count;
      directVisits += d.sum.visits;
    }
    console.log(`  Total Direct Page Loads: ${directCount} across ${directVisits} sessions.`);

    // 4. Google Play Install Clicks & Conversions
    try {
      const d1Sql = `SELECT 
              (SELECT COUNT(*) FROM install_clicks) as totalClicks,
              (SELECT COUNT(DISTINCT visitor_id) FROM install_clicks) as uniqueClickers,
              (SELECT SUM(is_repeat) FROM install_clicks) as repeatClicks;
            SELECT source, COUNT(*) as count, COUNT(DISTINCT visitor_id) as unique_clickers, SUM(is_repeat) as repeats 
            FROM install_clicks GROUP BY source ORDER BY count DESC;
            SELECT country, COUNT(*) as count FROM install_clicks GROUP BY country ORDER BY count DESC LIMIT 10;
            SELECT source, is_repeat, country, referer, clicked_at FROM install_clicks ORDER BY clicked_at DESC LIMIT 25;`;
      const d1Results = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', d1Sql);
      if (d1Results && d1Results.length >= 4) {
        const stats = d1Results[0]?.results?.[0] || {};
        const clicks = {
          totalClicks: Number(stats.totalClicks || 0),
          uniqueClickers: Number(stats.uniqueClickers || 0),
          repeatClicks: Number(stats.repeatClicks || 0),
          breakdown: d1Results[1]?.results || [],
          countries: d1Results[2]?.results || [],
          recent: d1Results[3]?.results || []
        };
        console.log(`\n📲 [4] GOOGLE PLAY INSTALL CLICKS & CONVERSIONS:`);
        console.log(`  Total Clicks: ${clicks.totalClicks || 0} | Unique Clickers: ${clicks.uniqueClickers || 0} | Repeat Clickers: ${clicks.repeatClicks || 0}`);
        if (clicks.breakdown && clicks.breakdown.length > 0) {
          console.log(`  Source Breakdown:`);
          for (const b of clicks.breakdown) {
            console.log(`    - ${b.source.padEnd(16)}: ${b.count} clicks (${b.unique_clickers || b.count} uniques, ${b.repeats || 0} repeats)`);
          }
        }
        if (clicks.recent && clicks.recent.length > 0) {
          console.log(`  Recent Click Timeline:`);
          for (const rc of clicks.recent.slice(0, 5)) {
            const repeatTag = rc.is_repeat ? '[Repeat]' : '[New]';
            console.log(`    - ${rc.clicked_at.slice(0, 19)} | ${rc.country} | ${rc.source} ${repeatTag}`);
          }
        }
      }

      // 5. Active Mobile Fleet Telemetry
      const fleetSql = `SELECT 
        SUM(CASE WHEN is_active = 1 THEN 1 ELSE 0 END) as activeDevices,
        SUM(CASE WHEN is_active = 0 THEN 1 ELSE 0 END) as uninstalledDevices,
        SUM(CASE WHEN is_active = 1 AND last_seen_at >= datetime('now', '-7 days') THEN 1 ELSE 0 END) as weeklyActiveInstallBase,
        SUM(CASE WHEN is_active = 1 AND last_seen_at >= datetime('now', '-3 days') THEN 1 ELSE 0 END) as dailyActiveDevices
      FROM push_tokens;`;
      const fleetRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', fleetSql);
      const fleet = fleetRes?.[0]?.results?.[0];
      if (fleet) {
        console.log(`\n📱 [5] LIVE ACTIVE DEVICES (CLEAN PRODUCTION INSTALL BASE):`);
        console.log(`  Live Installed Devices: ${fleet.activeDevices} (Weekly Active Install Base: ${fleet.weeklyActiveInstallBase} | Daily Active: ${fleet.dailyActiveDevices})`);
        console.log(`  Uninstalled / Pruned Devices: ${fleet.uninstalledDevices}`);
      }
    } catch {
      // Ignore if offline
    }

    console.log(`\n========================================================\n`);
  }).catch(err => {
    console.error('Error tracking repeat visitors:', err);
    process.exit(1);
  });
}
