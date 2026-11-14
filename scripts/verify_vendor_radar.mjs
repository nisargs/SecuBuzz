import fs from 'fs';
import path from 'path';

console.log('=== SecuBuzz Vendor Radar Telemetry & Baseline Gate ===\n');

// 1. Audit website/src/data/vendorHealth.ts
const webHealthPath = path.resolve('website', 'src', 'data', 'vendorHealth.ts');
if (!fs.existsSync(webHealthPath)) {
  console.error(`FAIL: Missing ${webHealthPath}`);
  process.exit(1);
}
const webHealthContent = fs.readFileSync(webHealthPath, 'utf8');
const webMatch = webHealthContent.match(/export const VENDOR_STATUS_REGISTRY: Record<string, VendorHealth> = \{([\s\S]*?)\n\};/);
if (!webMatch) {
  console.error('FAIL: Could not locate VENDOR_STATUS_REGISTRY in vendorHealth.ts');
  process.exit(1);
}

const webEntries = [...webMatch[1].matchAll(/([a-zA-Z0-9_\- '"]+):\s*\{[\s\S]*?status:\s*['"]([^'"]+)['"]/g)].map(m => ({
  vendor: m[1].trim().replace(/^['"]|['"]$/g, ''),
  status: m[2]
}));

console.log(`Audited ${webEntries.length} vendors in website/src/data/vendorHealth.ts:`);
const webViolations = webEntries.filter(v => v.status !== 'OPERATIONAL');
if (webViolations.length > 0) {
  console.error('FAIL: Found non-OPERATIONAL baseline entries in website registry:');
  for (const v of webViolations) {
    console.error(`  - ${v.vendor}: ${v.status} (MUST BE OPERATIONAL)`);
  }
  process.exit(1);
} else {
  console.log('  ✓ 100% of website baseline vendors are strictly OPERATIONAL.');
}

// 2. Audit worker/src/index.ts BASELINE_VENDOR_REGISTRY
const workerPath = path.resolve('worker', 'src', 'index.ts');
if (!fs.existsSync(workerPath)) {
  console.error(`FAIL: Missing ${workerPath}`);
  process.exit(1);
}
const workerContent = fs.readFileSync(workerPath, 'utf8');
const workerMatch = workerContent.match(/const BASELINE_VENDOR_REGISTRY: Record<string, VendorHealthTelemetry> = \{([\s\S]*?)\n\};/);
if (!workerMatch) {
  console.error('FAIL: Could not locate BASELINE_VENDOR_REGISTRY in worker/src/index.ts');
  process.exit(1);
}

const workerEntries = [...workerMatch[1].matchAll(/([a-zA-Z0-9_\- '"]+):\s*\{[\s\S]*?status:\s*['"]([^'"]+)['"]/g)].map(m => ({
  vendor: m[1].trim().replace(/^['"]|['"]$/g, ''),
  status: m[2]
}));

console.log(`\nAudited ${workerEntries.length} vendors in worker BASELINE_VENDOR_REGISTRY:`);
const workerViolations = workerEntries.filter(v => v.status !== 'OPERATIONAL');
if (workerViolations.length > 0) {
  console.error('FAIL: Found non-OPERATIONAL baseline entries in worker registry:');
  for (const v of workerViolations) {
    console.error(`  - ${v.vendor}: ${v.status} (MUST BE OPERATIONAL)`);
  }
  process.exit(1);
} else {
  console.log('  ✓ 100% of worker baseline vendors are strictly OPERATIONAL.');
}

// 3. Audit LIVE_STATUS_SOURCES
const liveMatch = workerContent.match(/const LIVE_STATUS_SOURCES = \[([\s\S]*?)\];/);
if (!liveMatch) {
  console.error('FAIL: Could not locate LIVE_STATUS_SOURCES in worker/src/index.ts');
  process.exit(1);
}

const liveSources = [...liveMatch[1].matchAll(/vendor:\s*['"]([^'"]+)['"],\s*type:\s*['"]([^'"]+)['"],\s*url:\s*['"]([^'"]+)['"]/g)].map(m => ({
  vendor: m[1],
  type: m[2],
  url: m[3]
}));

console.log(`\nAudited ${liveSources.length} live status sources in worker:`);
const validTypes = new Set(['rss', 'microsoft_mac', 'google_cloud', 'slack', 'statuspage', 'statushub']);
for (const s of liveSources) {
  if (!validTypes.has(s.type)) {
    console.error(`FAIL: Invalid source type '${s.type}' for vendor '${s.vendor}'`);
    process.exit(1);
  }
  if (!s.url.startsWith('https://')) {
    console.error(`FAIL: Insecure or invalid URL for vendor '${s.vendor}': ${s.url}`);
    process.exit(1);
  }
  console.log(`  ✓ ${s.vendor.padEnd(20)} [${s.type.padEnd(14)}] ${s.url}`);
}

console.log('\n[PASS] All vendor health registries comply with the Zero Ghost Outages Invariant.\n');
