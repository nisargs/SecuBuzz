import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const FEED_PATH = path.join(ROOT_DIR, 'feed.json');

const map = new Map();

// 1. Load current feed
if (fs.existsSync(FEED_PATH)) {
  const current = JSON.parse(fs.readFileSync(FEED_PATH, 'utf8'));
  for (const a of current) {
    const key = a.id || a.sourceUrl || a.url || a.headline;
    if (key && !map.has(key)) {
      map.set(key, a);
    }
  }
}
console.log(`Loaded ${map.size} articles from current feed.json`);

// 2. Extract from past git commits
try {
  const commits = execSync('git log --format=%H -n 150 -- feed.json', { cwd: ROOT_DIR })
    .toString()
    .trim()
    .split('\n')
    .map((x) => x.trim())
    .filter(Boolean);

  console.log(`Scanning ${commits.length} past git commits for historical intelligence...`);
  for (const c of commits) {
    try {
      const raw = execSync(`git show ${c}:feed.json`, { cwd: ROOT_DIR, maxBuffer: 10 * 1024 * 1024 }).toString();
      const list = JSON.parse(raw);
      for (const a of list) {
        const key = a.id || a.sourceUrl || a.url || a.headline;
        if (key && !map.has(key)) {
          map.set(key, a);
        }
      }
    } catch {}
  }
} catch (e) {
  console.warn('Git log extraction warning:', e.message);
}

const allArticles = Array.from(map.values()).sort((a, b) => {
  const tA = Date.parse(a.publishedAt || a.pubDate || 0) || 0;
  const tB = Date.parse(b.publishedAt || b.pubDate || 0) || 0;
  return tB - tA;
});

console.log(`Total unique historical articles assembled: ${allArticles.length}`);
const dates = allArticles.map((a) => a.publishedAt).filter(Boolean);
console.log(`Oldest: ${dates[dates.length - 1]}`);
console.log(`Newest: ${dates[0]}`);

function createSlug(headline = '', id = '') {
  const base = (headline || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .slice(0, 50)
    .replace(/^-+|-+$/g, '');

  const idStr = (id || headline || '').trim();
  const entropy = `${base}|${idStr}`;

  let hash = 0x811c9dc5;
  for (let i = 0; i < entropy.length; i++) {
    hash ^= entropy.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  const hex = (hash >>> 0).toString(16).padStart(8, '0');
  return base ? `${base}-${hex}` : `article-${hex}`;
}

function escapeSql(str) {
  if (str === null || str === undefined) return 'NULL';
  return `'${String(str).replace(/'/g, "''")}'`;
}

function extractCves(text = '') {
  const matches = text.match(/CVE-\d{4}-\d{4,7}/gi);
  return matches ? Array.from(new Set(matches.map((c) => c.toUpperCase()))) : [];
}

const BATCH_SIZE = 50;
let inserted = 0;

for (let i = 0; i < allArticles.length; i += BATCH_SIZE) {
  const batch = allArticles.slice(i, i + BATCH_SIZE);
  const statements = batch.map((a) => {
    const title = a.title || a.headline || '';
    const id = a.id || a.sourceUrl || a.url || title;
    const slug = a.slug || createSlug(title, id);
    const summary = a.summary || '';
    const category = (a.category || 'GENERAL').toUpperCase();
    const severity = (a.severity || 'LOW').toUpperCase();
    const source = a.source || a.sourceName || 'SecuBuzz';
    const sourceUrl = a.sourceUrl || a.url || a.id || '';
    const publishedAt = a.publishedAt || (a.pubDate ? new Date(a.pubDate).toISOString() : new Date().toISOString());
    const cves = a.cves && a.cves.length > 0 ? a.cves : extractCves(`${title} ${summary}`);
    const cvesJson = JSON.stringify(cves);
    const additionalSourcesJson = JSON.stringify(a.additionalSources || []);
    const aliasesJson = JSON.stringify(a.aliases || []);

    return `INSERT OR REPLACE INTO articles (slug, title, summary, category, severity, source, source_url, published_at, cves_json, additional_sources_json, aliases_json) VALUES (${escapeSql(slug)}, ${escapeSql(title)}, ${escapeSql(summary)}, ${escapeSql(category)}, ${escapeSql(severity)}, ${escapeSql(source)}, ${escapeSql(sourceUrl)}, ${escapeSql(publishedAt)}, ${escapeSql(cvesJson)}, ${escapeSql(additionalSourcesJson)}, ${escapeSql(aliasesJson)});`;
  });

  const sqlFile = path.join(ROOT_DIR, 'worker', `.temp_seed_${i}.sql`);
  fs.writeFileSync(sqlFile, statements.join('\n'), 'utf8');

  try {
    execSync(
      `npx --prefix worker wrangler d1 execute secubuzz-push-db --remote --file worker/.temp_seed_${i}.sql --config worker/wrangler.jsonc`,
      { stdio: 'pipe', cwd: ROOT_DIR }
    );
    inserted += batch.length;
    console.log(`Seeded batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(allArticles.length / BATCH_SIZE)} (${inserted}/${allArticles.length} articles)`);
  } catch (err) {
    console.error(`Failed at batch ${i}:`, err.message);
  } finally {
    if (fs.existsSync(sqlFile)) fs.unlinkSync(sqlFile);
  }
}

console.log(`SUCCESS: Seeded all ${inserted} historical articles into Cloudflare D1!`);

