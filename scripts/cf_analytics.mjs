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

import { execSync } from 'child_process';

function refreshOauthToken() {
  try {
    execSync('npx wrangler whoami', { stdio: 'ignore' });
    return getOauthToken();
  } catch {
    return null;
  }
}

async function queryGraphQL(token, query, variables = {}, retry = true) {
  let res = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  });
  if ((res.status === 401 || res.status === 403) && retry) {
    const freshToken = refreshOauthToken();
    if (freshToken) {
      return queryGraphQL(freshToken, query, variables, false);
    }
  }
  return await res.json();
}

async function queryD1(token, accountTag, databaseId, sql, retry = true) {
  try {
    let res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountTag}/d1/database/${databaseId}/query`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sql })
    });
    if ((res.status === 401 || res.status === 403) && retry) {
      const freshToken = refreshOauthToken();
      if (freshToken) {
        return queryD1(freshToken, accountTag, databaseId, sql, false);
      }
    }
    if (!res.ok) return null;
    const data = await res.json();
    return data.result || null;
  } catch {
    return null;
  }
}

export async function fetchCloudflareAnalytics({ zoneTag = '65259b39c7fd2648a898415fb780bcf7', accountTag = '36eb47dcba495d7d872a2647755f6bde', siteTag = '1b2689c6e1e149fa88ee6ed4206893be' } = {}) {
  const token = getOauthToken();
  const now = new Date();
  const nowIso = now.toISOString();
  const since24h = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
  const since7d = new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString();

  const dateLeq = now.toISOString().slice(0, 10);
  const dateGeq = new Date(Date.now() - 14 * 24 * 3600 * 1000).toISOString().slice(0, 10);

  const zoneQuery = `
  query ZoneReport($zoneTag: String!, $dateGeq: String!, $dateLeq: String!, $since7d: String!, $since24h: String!, $until: String!) {
    viewer {
      zones(filter: { zoneTag: $zoneTag }) {
        dailyTimeline: httpRequests1dGroups(
          limit: 14
          filter: { date_geq: $dateGeq, date_leq: $dateLeq }
          orderBy: [date_DESC]
        ) {
          dimensions { date }
          sum { requests bytes cachedRequests cachedBytes threats pageViews }
          uniq { uniques }
        }
        topPaths7d: httpRequestsAdaptiveGroups(
          limit: 25
          filter: { datetime_geq: $since7d, datetime_leq: $until }
          orderBy: [count_DESC]
        ) {
          count
          sum { edgeResponseBytes visits }
          dimensions { clientRequestPath clientRequestHTTPMethodName }
        }
        statusCodes7d: httpRequestsAdaptiveGroups(
          limit: 12
          filter: { datetime_geq: $since7d, datetime_leq: $until }
          orderBy: [count_DESC]
        ) {
          count
          dimensions { edgeResponseStatus }
        }
        devices7d: httpRequestsAdaptiveGroups(
          limit: 5
          filter: { datetime_geq: $since7d, datetime_leq: $until }
          orderBy: [count_DESC]
        ) {
          count
          dimensions { clientDeviceType }
        }
        countries7d: httpRequestsAdaptiveGroups(
          limit: 20
          filter: { datetime_geq: $since7d, datetime_leq: $until }
          orderBy: [count_DESC]
        ) {
          count
          sum { edgeResponseBytes visits }
          dimensions { clientCountryName }
        }
        countries24h: httpRequestsAdaptiveGroups(
          limit: 15
          filter: { datetime_geq: $since24h, datetime_leq: $until }
          orderBy: [count_DESC]
        ) {
          count
          sum { edgeResponseBytes visits }
          dimensions { clientCountryName }
        }
      }
    }
  }
  `;

  const rumQuery = `
  query RumReport($accountTag: String!, $siteTag: String!, $since7d: String!, $until: String!) {
    viewer {
      accounts(filter: { accountTag: $accountTag }) {
        rumBrowsers7d: rumPageloadEventsAdaptiveGroups(
          limit: 10
          filter: { siteTag: $siteTag, datetime_geq: $since7d, datetime_leq: $until }
          orderBy: [count_DESC]
        ) {
          count
          sum { visits }
          dimensions { userAgentBrowser }
        }
        rumOS7d: rumPageloadEventsAdaptiveGroups(
          limit: 10
          filter: { siteTag: $siteTag, datetime_geq: $since7d, datetime_leq: $until }
          orderBy: [count_DESC]
        ) {
          count
          sum { visits }
          dimensions { userAgentOS }
        }
        rumReferrers7d: rumPageloadEventsAdaptiveGroups(
          limit: 10
          filter: { siteTag: $siteTag, datetime_geq: $since7d, datetime_leq: $until }
          orderBy: [count_DESC]
        ) {
          count
          sum { visits }
          dimensions { refererHost }
        }
        rumPages7d: rumPageloadEventsAdaptiveGroups(
          limit: 15
          filter: { siteTag: $siteTag, datetime_geq: $since7d, datetime_leq: $until }
          orderBy: [count_DESC]
        ) {
          count
          sum { visits }
          dimensions { requestPath }
        }
        rumCountries7d: rumPageloadEventsAdaptiveGroups(
          limit: 10
          filter: { siteTag: $siteTag, datetime_geq: $since7d, datetime_leq: $until }
          orderBy: [count_DESC]
        ) {
          count
          sum { visits }
          dimensions { countryName }
        }
        workers7d: workersInvocationsAdaptive(
          limit: 5
          filter: { datetime_geq: $since7d, datetime_leq: $until }
        ) {
          dimensions { scriptName status }
          sum { requests subrequests errors }
          quantiles { cpuTimeP50 cpuTimeP99 }
        }
      }
    }
  }
  `;

  const [zoneRes, rumRes] = await Promise.all([
    queryGraphQL(token, zoneQuery, { zoneTag, dateGeq, dateLeq, since7d, since24h, until: nowIso }),
    queryGraphQL(token, rumQuery, { accountTag, siteTag, since7d, until: nowIso })
  ]);

  let installClicks = null;
  let supportClicks = null;
  let deviceTokens = null;
  try {
    const statsRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', 'SELECT COUNT(*) as totalClicks, COUNT(DISTINCT visitor_id) as uniqueClickers, SUM(is_repeat) as repeatClicks FROM install_clicks');
    const breakdownRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', 'SELECT source, COUNT(*) as count, COUNT(DISTINCT visitor_id) as unique_clickers, SUM(is_repeat) as repeats FROM install_clicks GROUP BY source ORDER BY count DESC');
    const countriesRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', 'SELECT country, COUNT(*) as count FROM install_clicks GROUP BY country ORDER BY count DESC LIMIT 10');
    const recentRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', 'SELECT source, is_repeat, country, referer, clicked_at FROM install_clicks ORDER BY clicked_at DESC LIMIT 25');

    const stats = statsRes?.[0]?.results?.[0] || {};
    installClicks = {
      totalClicks: Number(stats.totalClicks || 0),
      uniqueClickers: Number(stats.uniqueClickers || 0),
      repeatClicks: Number(stats.repeatClicks || 0),
      breakdown: breakdownRes?.[0]?.results || [],
      countries: countriesRes?.[0]?.results || [],
      recent: recentRes?.[0]?.results || []
    };

    try {
      const supportStatsRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', 'SELECT COUNT(*) as totalClicks, COUNT(DISTINCT visitor_id) as uniqueClickers, SUM(is_repeat) as repeatClicks FROM support_clicks');
      const supportBreakdownRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', 'SELECT source, COUNT(*) as count, COUNT(DISTINCT visitor_id) as unique_clickers, SUM(is_repeat) as repeats FROM support_clicks GROUP BY source ORDER BY count DESC');
      const supportCountriesRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', 'SELECT country, COUNT(*) as count FROM support_clicks GROUP BY country ORDER BY count DESC LIMIT 10');
      const supportRecentRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', 'SELECT source, is_repeat, country, referer, clicked_at FROM support_clicks ORDER BY clicked_at DESC LIMIT 25');

      const sStats = supportStatsRes?.[0]?.results?.[0] || {};
      supportClicks = {
        totalClicks: Number(sStats.totalClicks || 0),
        uniqueClickers: Number(sStats.uniqueClickers || 0),
        repeatClicks: Number(sStats.repeatClicks || 0),
        breakdown: supportBreakdownRes?.[0]?.results || [],
        countries: supportCountriesRes?.[0]?.results || [],
        recent: supportRecentRes?.[0]?.results || []
      };
    } catch {
      // Non-fatal
    }

    const tokenSummaryRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', `
      SELECT 
        COUNT(*) as totalTokens,
        SUM(CASE WHEN is_active = 1 THEN 1 ELSE 0 END) as activeDevices,
        SUM(CASE WHEN is_active = 0 THEN 1 ELSE 0 END) as uninstalledDevices,
        SUM(CASE WHEN is_active = 1 AND last_seen_at >= datetime('now', '-7 days') THEN 1 ELSE 0 END) as weeklyActiveInstallBase,
        SUM(CASE WHEN is_active = 1 AND last_seen_at >= datetime('now', '-3 days') THEN 1 ELSE 0 END) as dailyActiveDevices
      FROM push_tokens
    `);
    const tokenStatsRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', 'SELECT COUNT(*) as total, platform FROM push_tokens WHERE is_active = 1 GROUP BY platform');
    const tokenVersionsRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', 'SELECT app_version, COUNT(*) as count FROM push_tokens WHERE is_active = 1 GROUP BY app_version ORDER BY app_version DESC');
    const dailyInstallsRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', 'SELECT date(created_at) as day, COUNT(*) as count, SUM(CASE WHEN is_active = 1 THEN 1 ELSE 0 END) as retained FROM push_tokens GROUP BY date(created_at) ORDER BY day DESC LIMIT 14');
    const notificationsSentRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', 'SELECT COUNT(*) as totalSent FROM sent_notifications');

    let notificationOpens = null;
    try {
      const opensRes = await queryD1(token, accountTag, '13e7169f-7237-46a3-97fd-d0e4762b94e2', `
        SELECT 
          (SELECT COUNT(*) FROM notification_opens) as totalOpens,
          (SELECT COUNT(DISTINCT article_id) FROM notification_opens) as uniqueArticlesOpened;
        SELECT article_id, category, severity, COUNT(*) as count FROM notification_opens GROUP BY article_id ORDER BY count DESC LIMIT 5;
        SELECT article_id, category, severity, opened_at FROM notification_opens ORDER BY opened_at DESC LIMIT 5;
      `);
      if (opensRes && opensRes.length >= 3) {
        notificationOpens = {
          totalOpens: Number(opensRes[0]?.results?.[0]?.totalOpens || 0),
          uniqueArticles: Number(opensRes[0]?.results?.[0]?.uniqueArticlesOpened || 0),
          topArticles: opensRes[1]?.results || [],
          recent: opensRes[2]?.results || []
        };
      }
    } catch {
      // Non-fatal
    }

    const summary = tokenSummaryRes?.[0]?.results?.[0] || {};
    deviceTokens = {
      summary: {
        totalTokens: Number(summary.totalTokens || 0),
        activeDevices: Number(summary.activeDevices || 0),
        uninstalledDevices: Number(summary.uninstalledDevices || 0),
        weeklyActiveInstallBase: Number(summary.weeklyActiveInstallBase || 0),
        dailyActiveDevices: Number(summary.dailyActiveDevices || 0)
      },
      platforms: tokenStatsRes?.[0]?.results || [],
      versions: tokenVersionsRes?.[0]?.results || [],
      dailyInstalls: dailyInstallsRes?.[0]?.results || [],
      totalSent: Number(notificationsSentRes?.[0]?.results?.[0]?.totalSent || 0),
      opens: notificationOpens
    };
  } catch (err) {
    // Non-fatal if offline
  }

  return {
    timestamp: nowIso,
    zone: zoneRes.data?.viewer?.zones?.[0] || {},
    rum: rumRes.data?.viewer?.accounts?.[0] || {},
    installClicks,
    supportClicks,
    deviceTokens
  };
}

if (process.argv[1]?.endsWith('cf_analytics.mjs')) {
  fetchCloudflareAnalytics().then(data => {
    console.log(`\n=== Cloudflare Analytics Telemetry (${data.timestamp}) ===`);
    const z = data.zone;
    const r = data.rum;
    const clicks = data.installClicks;
    const supportClicks = data.supportClicks;
    const tokens = data.deviceTokens;
    const today = z.dailyTimeline?.[0];
    const mb = today?.sum?.bytes ? (today.sum.bytes / (1024 * 1024)).toFixed(2) : '0';
    const installsMap = Object.fromEntries((tokens?.dailyInstalls || []).map(r => [r.day, r]));
    const todayInstalls = installsMap[today?.dimensions?.date]?.count || 0;
    console.log(`Today (${today?.dimensions?.date || 'Today'}): ${today?.sum?.requests || 0} Requests | ${today?.uniq?.uniques || 0} Unique Visitors | ${today?.sum?.pageViews || 0} Page Views | ${todayInstalls} New Installs | ${mb} MB Bandwidth | ${today?.sum?.threats || 0} Threats Blocked`);

    if (tokens && tokens.summary) {
      console.log('\n--- Push Notification Fleet Reach (Subscribed Device Tokens) ---');
      console.log(`  Active Subscribed Devices: ${tokens.summary.activeDevices} (Seen in last 7d: ${tokens.summary.weeklyActiveInstallBase} | Seen in last 3d: ${tokens.summary.dailyActiveDevices})`);
      console.log(`  Uninstalled / Pruned Tokens: ${tokens.summary.uninstalledDevices}`);
      if (tokens.versions && tokens.versions.length > 0) {
        console.log(`  Fleet Version Distribution: ${tokens.versions.map(v => `v${v.app_version}: ${v.count}`).join(' | ')}`);
      }
      console.log(`  Total Push Alerts Delivered: ${tokens.totalSent}`);
      if (tokens.dailyInstalls && tokens.dailyInstalls.length > 0) {
        console.log('  Recent Daily Registrations: ' + tokens.dailyInstalls.slice(0, 7).map(d => `${d.day}: +${d.count}`).join(' | '));
      }
      if (tokens.opens) {
        console.log(`  Notification Opens Tracked: ${tokens.opens.totalOpens} across ${tokens.opens.uniqueArticles} dispatches`);
        if (tokens.opens.topArticles && tokens.opens.topArticles.length > 0) {
          console.log('  Top Opened Dispatches:');
          for (const a of tokens.opens.topArticles) {
            console.log(`    - ${a.article_id.slice(0, 48)}: ${a.count} opens [${a.severity || 'HIGH'}]`);
          }
        }
      }
    }

    if (clicks) {
      console.log('\n--- Google Play Install Clicks (/go/play Telemetry) ---');
      console.log(`  Total Clicks: ${clicks.totalClicks || 0} | Unique Clickers: ${clicks.uniqueClickers || 0} | Repeat Clicks: ${clicks.repeatClicks || 0}`);
      
      if (clicks.breakdown && clicks.breakdown.length > 0) {
        console.log('  Breakdown by Campaign Source:');
        for (const b of clicks.breakdown) {
          console.log(`    - ${b.source.padEnd(16)}: ${b.count.toString().padStart(3)} clicks (${b.unique_clickers || b.count} uniques, ${b.repeats || 0} repeats)`);
        }
      }

      if (clicks.countries && clicks.countries.length > 0) {
        console.log('  Top Countries:');
        console.log(`    ${clicks.countries.map(c => `${c.country}: ${c.count}`).join(' | ')}`);
      }

      if (clicks.recent && clicks.recent.length > 0) {
        console.log('  Recent Referrals:');
        for (const rc of clicks.recent.slice(0, 5)) {
          const repeatTag = rc.is_repeat ? '[Repeat]' : '[New]';
          const ref = rc.referer ? ` via ${rc.referer}` : '';
          console.log(`    ${rc.clicked_at.slice(0, 19)} | ${rc.country} | ${rc.source} ${repeatTag}${ref}`);
        }
      }
    }

    if (supportClicks) {
      console.log('\n--- Ko-fi Support Link Clicks (/support Telemetry) ---');
      console.log(`  Total Clicks: ${supportClicks.totalClicks || 0} | Unique Clickers: ${supportClicks.uniqueClickers || 0} | Repeat Clicks: ${supportClicks.repeatClicks || 0}`);
      
      if (supportClicks.breakdown && supportClicks.breakdown.length > 0) {
        console.log('  Breakdown by Placement Source:');
        for (const b of supportClicks.breakdown) {
          console.log(`    - ${b.source.padEnd(16)}: ${b.count.toString().padStart(3)} clicks (${b.unique_clickers || b.count} uniques, ${b.repeats || 0} repeats)`);
        }
      }

      if (supportClicks.countries && supportClicks.countries.length > 0) {
        console.log('  Top Countries:');
        console.log(`    ${supportClicks.countries.map(c => `${c.country}: ${c.count}`).join(' | ')}`);
      }

      if (supportClicks.recent && supportClicks.recent.length > 0) {
        console.log('  Recent Referrals:');
        for (const rc of supportClicks.recent.slice(0, 5)) {
          const repeatTag = rc.is_repeat ? '[Repeat]' : '[New]';
          const ref = rc.referer ? ` via ${rc.referer}` : '';
          console.log(`    ${rc.clicked_at.slice(0, 19)} | ${rc.country} | ${rc.source} ${repeatTag}${ref}`);
        }
      }
    }

    if (z.dailyTimeline && z.dailyTimeline.length > 1) {
      console.log('\n--- Recent Daily History ---');
      for (const d of z.dailyTimeline.slice(1, 8)) {
        const dMb = (d.sum.bytes / (1024 * 1024)).toFixed(2);
        const dayInstalls = installsMap[d.dimensions.date]?.count || 0;
        console.log(`  ${d.dimensions.date}: ${d.sum.requests.toString().padStart(5)} reqs | ${d.uniq.uniques.toString().padStart(4)} uniques | ${d.sum.pageViews.toString().padStart(4)} views | ${dayInstalls.toString().padStart(2)} new installs | ${dMb} MB`);
      }
    }

    if (z.topPaths7d && z.topPaths7d.length > 0) {
      console.log('\n--- Top Requested Paths (7d) ---');
      for (const p of z.topPaths7d.slice(0, 8)) {
        console.log(`  ${p.count.toString().padStart(5)} | ${p.dimensions.clientRequestHTTPMethodName} ${p.dimensions.clientRequestPath}`);
      }
    }

    if (r.rumReferrers7d && r.rumReferrers7d.length > 0) {
      console.log('\n--- Real User Referrers (7d) ---');
      for (const ref of r.rumReferrers7d.slice(0, 6)) {
        console.log(`  ${ref.count.toString().padStart(4)} loads -> ${ref.dimensions.refererHost || '(Direct / Bookmark / PWA)'}`);
      }
    }
  }).catch(err => {
    console.error('Failed to fetch analytics:', err);
    process.exit(1);
  });
}
