import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const FEED_PATH = path.join(ROOT_DIR, 'feed.json');

if (!fs.existsSync(FEED_PATH)) {
  console.error('feed.json not found!');
  process.exit(1);
}

const articles = JSON.parse(fs.readFileSync(FEED_PATH, 'utf8'));
console.log(`Loaded ${articles.length} articles from feed.json`);

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

// Clear table first to ensure clean canonical slugs
execSync(
  `npx --prefix worker wrangler d1 execute secubuzz-push-db --remote --command "DELETE FROM articles;" --config worker/wrangler.jsonc`,
  { stdio: 'inherit', cwd: ROOT_DIR }
);

const BATCH_SIZE = 50;
let inserted = 0;

for (let i = 0; i < articles.length; i += BATCH_SIZE) {
  const batch = articles.slice(i, i + BATCH_SIZE);
  const statements = batch.map((a) => {
    const title = a.title || a.headline || '';
    const id = a.id || a.sourceUrl || a.url || title;
    const slug = a.slug || createSlug(title, id);
    const summary = a.summary || '';
    const category = a.category || 'GENERAL';
    const severity = a.severity || 'LOW';
    const source = a.source || a.sourceName || '';
    const sourceUrl = a.sourceUrl || a.url || '';
    const publishedAt = a.publishedAt || (a.pubDate ? new Date(a.pubDate).toISOString() : new Date().toISOString());
    const cvesJson = JSON.stringify(a.cves || []);
    const additionalSourcesJson = JSON.stringify(a.additionalSources || []);
    const aliasesJson = JSON.stringify(a.aliases || []);

    return `INSERT OR REPLACE INTO articles (slug, title, summary, category, severity, source, source_url, published_at, cves_json, additional_sources_json, aliases_json) VALUES (${escapeSql(slug)}, ${escapeSql(title)}, ${escapeSql(summary)}, ${escapeSql(category)}, ${escapeSql(severity)}, ${escapeSql(source)}, ${escapeSql(sourceUrl)}, ${escapeSql(publishedAt)}, ${escapeSql(cvesJson)}, ${escapeSql(additionalSourcesJson)}, ${escapeSql(aliasesJson)});`;
  });

  const sqlFile = path.join(ROOT_DIR, 'worker', '.temp_seed.sql');
  fs.writeFileSync(sqlFile, statements.join('\n'), 'utf8');

  try {
    execSync(
      `npx --prefix worker wrangler d1 execute secubuzz-push-db --remote --file worker/.temp_seed.sql --config worker/wrangler.jsonc`,
      { stdio: 'inherit', cwd: ROOT_DIR }
    );
    inserted += batch.length;
    console.log(`Seeded batch ${i / BATCH_SIZE + 1} (${inserted}/${articles.length} articles)`);
  } catch (err) {
    console.error(`Failed at batch ${i}:`, err.message);
    if (fs.existsSync(sqlFile)) fs.unlinkSync(sqlFile);
    process.exit(1);
  }

  if (fs.existsSync(sqlFile)) fs.unlinkSync(sqlFile);
}

console.log(`SUCCESS: Seeded all ${inserted} articles into Cloudflare D1 with canonical slugs!`);
