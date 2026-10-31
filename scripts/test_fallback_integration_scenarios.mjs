/**
 * SecuBuzz Fallback Integration Test Suite
 *
 * Simulates and verifies the 7 critical production scenarios:
 * 1. All AI Down (Thrown exception)
 * 2. AI returns 200 with Empty Content (No throw)
 * 3. Only Groq Down (Primary failover to Gemini succeeds, fallback untouched)
 * 4. Mixed Accept and Reject in one batch (Selective rescue + selective retry)
 * 5. All Rejected in a batch (Clean exit, zero corruption, zero unseen loss)
 * 6. Previously processed articles re-encountered (Dedup prevents double-publish)
 * 7. AI recovers on next run (Safely retries previously rejected articles)
 */

import {
  extractFallbackBrief,
  buildFallbackArticle,
  normalizeTimestamp
} from './extractive_fallback.mjs';

function normaliseUrl(url) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    return `${parsed.protocol}//${parsed.hostname}${parsed.pathname}`.toLowerCase().replace(/\/+$/, '');
  } catch {
    return String(url).trim().toLowerCase().replace(/\/+$/, '');
  }
}

function extractCves(text) {
  const matches = (text || '').match(/CVE-\d{4}-\d{4,7}/gi);
  return matches ? Array.from(new Set(matches.map(c => c.toUpperCase()))) : [];
}

/**
 * Simulated batch processor matching the exact proposed integration block in ingest.mjs
 */
async function processBatch(batch, aiRunner, seenUrls, generatedArticles) {
  const validArticles = [];
  let aiResults = null;
  let aiThrew = false;

  // Step 1: Attempt Primary AI tier
  try {
    aiResults = await aiRunner(batch);
  } catch (err) {
    aiThrew = true;
  }

  // Check if AI succeeded in generating valid articles
  if (!aiThrew && Array.isArray(aiResults) && aiResults.length > 0) {
    for (const r of aiResults) {
      if (r && r.summary && r.summary.length >= 45) {
        validArticles.push(r);
      }
    }
  }

  // Step 2: Trigger Tier 2 Extractive Fallback if AI threw OR returned 0 valid articles
  if (aiThrew || validArticles.length === 0) {
    const fallbackArticles = [];

    for (const candidate of batch) {
      // Skip if already seen
      if (seenUrls.has(normaliseUrl(candidate.url))) continue;

      const fallback = extractFallbackBrief(
        candidate.title,
        candidate.description || '',
        candidate.url || '',
        candidate.contentEncoded || ''
      );

      if (fallback.status === 'ACCEPTED') {
        const article = buildFallbackArticle(candidate, fallback, normaliseUrl, extractCves);
        fallbackArticles.push(article);
      }
    }

    if (fallbackArticles.length > 0) {
      validArticles.push(...fallbackArticles);
      for (const a of fallbackArticles) {
        seenUrls.add(normaliseUrl(a.sourceUrl));
      }
      generatedArticles.push(...fallbackArticles);
    }
  } else {
    // Primary AI succeeded
    for (const a of validArticles) {
      seenUrls.add(normaliseUrl(a.sourceUrl));
    }
    generatedArticles.push(...validArticles);
  }

  return validArticles;
}

// -----------------------------------------------------------------------------
// TEST RUNNER
// -----------------------------------------------------------------------------

async function runTests() {
  console.log('========================================================================');
  console.log('🧪 RUNNING SECUBUZZ FALLBACK PRE-INTEGRATION TEST SUITE (7 SCENARIOS)');
  console.log('========================================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition, testName, details = '') {
    if (condition) {
      console.log(`✅ [PASS] ${testName}`);
      passed++;
    } else {
      console.error(`❌ [FAIL] ${testName}: ${details}`);
      failed++;
    }
  }

  // ---------------------------------------------------------------------------
  // Test 1: All AI Down (Thrown Exception)
  // ---------------------------------------------------------------------------
  {
    const seenUrls = new Set();
    const generatedArticles = [];
    const batch = [
      {
        url: 'https://thehackernews.com/2026/10/chainalysis-breach.html',
        title: 'Chainalysis Confirms Intrusion Into Internal Tools',
        description: 'American blockchain analysis firm Chainalysis said it was the target of a cybersecurity incident in which an external actor accessed non-sensitive customer data. However, the company noted that the breach did not result in unauthorized access to credentials.',
        source: 'The Hacker News',
        publishedAt: '2026-10-31T12:00:00Z'
      }
    ];

    const aiRunner = async () => { throw new Error('HTTP 503 / Groq, Gemini & OpenRouter all down'); };
    const result = await processBatch(batch, aiRunner, seenUrls, generatedArticles);

    assert(result.length === 1, 'Test 1: Fallback activates on thrown AI exception');
    assert(result[0].isFallback === true, 'Test 1: Article flagged as isFallback: true');
    assert(result[0].publishedAt === '2026-10-31T12:00:00.000Z', 'Test 1: Original publishedAt preserved');
    assert(seenUrls.has(normaliseUrl(batch[0].url)), 'Test 1: Rescued article added to seenUrls');
  }

  // ---------------------------------------------------------------------------
  // Test 2: AI Returns 200 with Empty Content (No throw)
  // ---------------------------------------------------------------------------
  {
    const seenUrls = new Set();
    const generatedArticles = [];
    const batch = [
      {
        url: 'https://krebsonsecurity.com/2026/10/php-flaw.html',
        title: 'Widespread PHP Flaw May Cause Site Outages',
        description: 'Expect to see quite a few websites serving 404 or Page Not Found errors today: Nearly 70 percent of websites need to update their core software to fix a pair of vulnerabilities that allow an attacker to seize full control over affected servers.',
        source: 'Krebs on Security',
        publishedAt: '2026-10-31T14:00:00Z'
      }
    ];

    // Simulates an AI provider returning HTTP 200 with 0 articles or malformed output
    const aiRunner = async () => [];
    const result = await processBatch(batch, aiRunner, seenUrls, generatedArticles);

    assert(result.length === 1, 'Test 2: Fallback triggers when AI returns empty results (no throw)');
    assert(result[0].isFallback === true, 'Test 2: Rescued cleanly via extractive fallback');
    assert(seenUrls.has(normaliseUrl(batch[0].url)), 'Test 2: URL marked seen after rescue');
  }

  // ---------------------------------------------------------------------------
  // Test 3: Only Groq Down (Primary AI failover succeeds, Fallback NOT used)
  // ---------------------------------------------------------------------------
  {
    const seenUrls = new Set();
    const generatedArticles = [];
    const batch = [
      {
        url: 'https://bleepingcomputer.com/news/security/northflank.html',
        title: 'Northflank Breach Exposes Customers AI Keys',
        description: 'Cloud hosting platform Northflank warned customers of a breach.',
        source: 'BleepingComputer',
        publishedAt: '2026-10-31T16:00:00Z'
      }
    ];

    // Simulates Groq failing but Gemini succeeding
    const aiRunner = async () => [
      {
        id: normaliseUrl(batch[0].url),
        sourceUrl: batch[0].url,
        headline: 'Northflank Breach Exposes AI Keys',
        summary: 'Cloud application hosting platform Northflank has disclosed a security breach where unauthorized attackers accessed customer accounts. Attackers abused stored credentials to execute arbitrary API requests against third-party AI services. Northflank has urged all users to revoke existing secrets immediately.',
        category: 'Breach',
        severity: 'HIGH',
        source: 'BleepingComputer',
        publishedAt: batch[0].publishedAt,
        isFallback: false
      }
    ];

    const result = await processBatch(batch, aiRunner, seenUrls, generatedArticles);

    assert(result.length === 1, 'Test 3: AI primary tier successfully processed article');
    assert(result[0].isFallback === false, 'Test 3: Fallback was NOT triggered because AI succeeded');
    assert(seenUrls.has(normaliseUrl(batch[0].url)), 'Test 3: Processed URL marked seen');
  }

  // ---------------------------------------------------------------------------
  // Test 4: Mixed Accept and Reject in One Batch
  // ---------------------------------------------------------------------------
  {
    const seenUrls = new Set();
    const generatedArticles = [];
    const batch = [
      {
        url: 'https://thehackernews.com/story-a.html',
        title: 'Chainalysis Intrusion Report',
        description: 'American blockchain analysis firm Chainalysis said it was the target of a cybersecurity incident in which an external actor accessed non-sensitive customer data. However, the company noted that the breach did not result in unauthorized access.',
        source: 'The Hacker News',
        publishedAt: '2026-10-31T10:00:00Z'
      },
      {
        url: 'https://fortiguard.fortinet.com/ir.xml#cve-dump',
        title: 'Node2Shell CVEs',
        description: 'CVSSv3 Score: 9.8 CVE-2026-105482 - (high)This vulnerability affects Node.js 26.x.CVE-2026-105483 - (high)...',
        source: 'Fortinet FortiGuard PSIRT',
        publishedAt: '2026-10-31T10:00:00Z'
      },
      {
        url: 'https://darkreading.com/teaser.html',
        title: 'Devs Hit by Extension',
        description: 'Two serious security issues hit Cursor on the same day...',
        source: 'Dark Reading',
        publishedAt: '2026-10-31T10:00:00Z'
      }
    ];

    const aiRunner = async () => { throw new Error('AI Down'); };
    const result = await processBatch(batch, aiRunner, seenUrls, generatedArticles);

    assert(result.length === 1, 'Test 4: Exactly 1 acceptable article rescued from mixed batch');
    assert(seenUrls.has(normaliseUrl(batch[0].url)), 'Test 4: Acceptable article added to seenUrls');
    assert(!seenUrls.has(normaliseUrl(batch[1].url)), 'Test 4: Tabular dump Fortinet NOT added to seenUrls');
    assert(!seenUrls.has(normaliseUrl(batch[2].url)), 'Test 4: Teaser Dark Reading NOT added to seenUrls');
  }

  // ---------------------------------------------------------------------------
  // Test 5: All Rejected in a Batch (Clean Exit, Zero Corruption)
  // ---------------------------------------------------------------------------
  {
    const seenUrls = new Set();
    const generatedArticles = [];
    const batch = [
      {
        url: 'https://msrc.microsoft.com/update-guide',
        title: 'CVE Information Published',
        description: 'Information published.',
        source: 'Microsoft MSRC',
        publishedAt: '2026-10-31T08:00:00Z'
      },
      {
        url: 'https://news.sophos.com/tags-only',
        title: 'Advisory Notice',
        description: 'Categories: Threat Research Tags: advisory, Cursor',
        source: 'Sophos Threat Research',
        publishedAt: '2026-10-31T08:00:00Z'
      }
    ];

    const aiRunner = async () => { throw new Error('AI Down'); };
    const result = await processBatch(batch, aiRunner, seenUrls, generatedArticles);

    assert(result.length === 0, 'Test 5: Batch with 100% low-density items yields 0 articles');
    assert(generatedArticles.length === 0, 'Test 5: No corruption or stubs added to generatedArticles');
    assert(seenUrls.size === 0, 'Test 5: Zero rejected URLs added to seenUrls (all preserved for retry)');
  }

  // ---------------------------------------------------------------------------
  // Test 6: Previously Processed Articles Re-Encountered (Dedup Guard)
  // ---------------------------------------------------------------------------
  {
    const seenUrls = new Set();
    const generatedArticles = [];
    const candidate = {
      url: 'https://thehackernews.com/already-processed.html',
      title: 'Previously Processed Story',
      description: 'American blockchain analysis firm Chainalysis said it was the target of a cybersecurity incident in which an external actor accessed non-sensitive customer data.',
      source: 'The Hacker News',
      publishedAt: '2026-10-31T05:00:00Z'
    };

    // Pre-populate seenUrls
    seenUrls.add(normaliseUrl(candidate.url));

    const aiRunner = async () => { throw new Error('AI Down'); };
    const result = await processBatch([candidate], aiRunner, seenUrls, generatedArticles);

    assert(result.length === 0, 'Test 6: Pre-seen candidate is ignored by fallback');
    assert(generatedArticles.length === 0, 'Test 6: No duplicate article published');
  }

  // ---------------------------------------------------------------------------
  // Test 7: AI Recovers on Next Run and Previously Rejected Articles Retry
  // ---------------------------------------------------------------------------
  {
    const seenUrls = new Set();
    const generatedArticles = [];
    const candidate = {
      url: 'https://darkreading.com/retried-story.html',
      title: 'Devs Hit by Trojanized Extension for Cursor',
      description: 'Two serious security issues hit Cursor on the same day...',
      source: 'Dark Reading',
      publishedAt: '2026-10-31T09:00:00Z'
    };

    // Run 1: AI is down. Fallback rejects because description is a 19-word stub.
    const aiDownRunner = async () => { throw new Error('AI Down'); };
    const run1Result = await processBatch([candidate], aiDownRunner, seenUrls, generatedArticles);

    assert(run1Result.length === 0, 'Test 7 (Run 1): Dark Reading rejected by fallback');
    assert(!seenUrls.has(normaliseUrl(candidate.url)), 'Test 7 (Run 1): Candidate NOT in seenUrls');

    // Run 2: AI recovers next hour! Candidate is re-evaluated.
    const aiRecoveredRunner = async (batch) => [
      {
        id: normaliseUrl(batch[0].url),
        sourceUrl: batch[0].url,
        headline: 'Devs Hit by Trojanized Extension for Cursor',
        summary: 'Security researchers have uncovered two serious vulnerabilities affecting the Cursor AI development environment. Attackers successfully uploaded a trojanized version of the Claude Code extension to the marketplace, deploying remote access backdoors. Cursor has since removed the offending packages.',
        category: 'Vulnerability',
        severity: 'HIGH',
        source: 'Dark Reading',
        publishedAt: batch[0].publishedAt,
        isFallback: false
      }
    ];

    const run2Result = await processBatch([candidate], aiRecoveredRunner, seenUrls, generatedArticles);

    assert(run2Result.length === 1, 'Test 7 (Run 2): Previously rejected candidate is picked up on AI recovery');
    assert(run2Result[0].isFallback === false, 'Test 7 (Run 2): Published via recovered AI engine');
    assert(seenUrls.has(normaliseUrl(candidate.url)), 'Test 7 (Run 2): Now marked seen in seenUrls');
  }

  // ---------------------------------------------------------------------------
  // Bonus Verification: Timestamp Integrity
  // ---------------------------------------------------------------------------
  {
    const valid = normalizeTimestamp('2026-10-25T14:30:00Z');
    assert(valid.publishedAt === '2026-10-25T14:30:00.000Z', 'Timestamp: Valid date preserved');
    assert(valid.isPublishedTimeUnknown === false, 'Timestamp: isPublishedTimeUnknown is false');

    const missing = normalizeTimestamp(null);
    assert(missing.publishedAt === null, 'Timestamp: Missing date yields publishedAt === null');
    assert(missing.isPublishedTimeUnknown === true, 'Timestamp: isPublishedTimeUnknown is true');
    assert(typeof missing.ingestedAt === 'string', 'Timestamp: ingestedAt tracks ingestion moment');
  }

  console.log('\n========================================================================');
  console.log(`📊 INTEGRATION SUITE RESULTS: ${passed} PASSED | ${failed} FAILED`);
  console.log('========================================================================\n');
}

runTests();

