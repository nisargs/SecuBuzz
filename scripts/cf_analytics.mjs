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

export async function fetchCloudflareAnalytics({ zoneTag = '65259b39c7fd2648a898415fb780bcf7', accountTag = '36eb47dcba495d7d872a2647755f6bde', siteTag = '1b2689c6e1e149fa88ee6ed4206893be' } = {}) {
  const token = getOauthToken();
  const now = new Date();
  const nowIso = now.toISOString();
  const since24h = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
  const since7d = new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString();

  const zoneQuery = `
  query ZoneReport($zoneTag: string!, $since7d: string!, $since24h: string!, $until: string!) {
    viewer {
      zones(filter: { zoneTag: $zoneTag }) {
        dailyTimeline: httpRequests1dGroups(
          limit: 14
          filter: { date_geq: "2026-09-20", date_leq: "2026-10-04" }
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
  query RumReport($accountTag: string!, $siteTag: string!, $since7d: string!, $until: string!) {
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
    queryGraphQL(token, zoneQuery, { zoneTag, since7d, since24h, until: nowIso }),
    queryGraphQL(token, rumQuery, { accountTag, siteTag, since7d, until: nowIso })
  ]);

  return {
    timestamp: nowIso,
    zone: zoneRes.data?.viewer?.zones?.[0] || {},
    rum: rumRes.data?.viewer?.accounts?.[0] || {}
  };
}

if (process.argv[1]?.endsWith('cf_analytics.mjs')) {
  fetchCloudflareAnalytics().then(data => {
    console.log(`Cloudflare Analytics Telemetry fetched at ${data.timestamp}`);
    const z = data.zone;
    const r = data.rum;
    const today = z.dailyTimeline?.[0];
    console.log(`Today's Requests: ${today?.sum?.requests || 0} | Page Views: ${today?.sum?.pageViews || 0} | Uniques: ${today?.uniq?.uniques || 0}`);
  }).catch(err => {
    console.error('Failed to fetch analytics:', err);
    process.exit(1);
  });
}
