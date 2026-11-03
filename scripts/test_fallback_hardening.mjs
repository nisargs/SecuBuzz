/**
 * SecuBuzz Extractive Fallback Hardening & Regression Test Suite
 *
 * Verifies the 5 targeted areas:
 * 1. Security-event detection: Generic legal/crime terms (arrest, sentenced, prison, indicted)
 *    do not allow unrelated crime/legal news to pass.
 * 2. Entity validation: Identifiable cyber vendor, product, platform, organization, or CVE identifier.
 *    Generic capitalized words alone do not pass. Legitimate CVE advisories without vendor names pass.
 * 3. KEV vs Severity classification: KEV membership alone does not force CRITICAL.
 *    CRITICAL requires explicit critical indicators (CVSS >= 9.0, unauthenticated RCE, critical perimeter zero-day).
 *    KEV items without critical indicators are classified as HIGH or MEDIUM.
 * 4. Sentence selection: Informational density scoring (flaw, entity, impact, remediation).
 *    Strict preservation of original document order.
 * 5. Incomplete sentence handling: stripCtaTail never synthesizes punctuation onto incomplete clauses.
 *    Incomplete clauses are discarded cleanly, and brief rejects with REJECTED_BROKEN_SENTENCE if no valid sentences remain.
 *
 * Covers the 10 mandatory regression tests.
 */

import {
  cleanHtml,
  buildFallbackArticle,
  extractFallbackBrief,
  validateExtractiveBrief,
  classifyThreat,
  scoreSentence,
  stripCtaTail,
  isTabularData,
  normalizeTimestamp,
  hasIdentifiableEntity,
  SECURITY_EVENT_REGEX,
} from './extractive_fallback.mjs';

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ [FAIL] ${message}`);
    throw new Error(`Assertion failed: ${message}`);
  }
  console.log(`✅ [PASS] ${message}`);
}

async function runHardeningSuite() {
  console.log('========================================================================');
  console.log('🧪 SECUBUZZ EXTRACTIVE FALLBACK HARDENING REGRESSION TEST SUITE');
  console.log('========================================================================\n');

  let passed = 0;
  let failed = 0;

  // ---------------------------------------------------------------------------
  // TEST 1: Legitimate cybersecurity incident accepted
  // ---------------------------------------------------------------------------
  console.log('--- TEST 1: Legitimate Cybersecurity Incident Accepted ---');
  {
    const title = 'Cisco Fixes High-Severity IOS-XE Vulnerability';
    const desc = 'Cisco has released security patches addressing a high-severity flaw in IOS-XE software. The vulnerability allows authenticated attackers to execute arbitrary commands with administrative privileges. Administrators are urged to apply the updates immediately to secure their network devices.';
    const result = extractFallbackBrief(title, desc, 'https://example.com/cisco-advisory');

    assert(result.status === 'ACCEPTED', 'Test 1: Legitimate cybersecurity incident is accepted');
    assert(result.wordCount >= 28, `Test 1: Word count meets minimum floor (${result.wordCount} words)`);
    assert(result.category === 'Vulnerability' || result.category === 'General', `Test 1: Category classified (${result.category})`);
    assert(result.severity === 'HIGH', `Test 1: Severity correctly classified as HIGH (${result.severity})`);
    passed++;
  }

  // ---------------------------------------------------------------------------
  // TEST 2: Unrelated crime / arrest / court story rejected
  // ---------------------------------------------------------------------------
  console.log('\n--- TEST 2: Unrelated Crime / Arrest / Court Story Rejected ---');
  {
    const title = 'Former City Council Member Sentenced to Prison Following Indictment';
    const desc = 'A federal judge has sentenced a former city official to four years in federal prison following an indictment and arrest for wire fraud and bribery. Prosecutors stated the defendant misused municipal campaign funds over several years. Defense attorneys requested a reduced sentence citing health issues.';
    
    // Check security event regex directly
    const hasSecurityEvent = SECURITY_EVENT_REGEX.test(`${title} ${desc}`);
    assert(!hasSecurityEvent, 'Test 2: Generic legal/crime terms (arrest, sentenced, prison, indicted) do not trigger SECURITY_EVENT_REGEX');

    // Run through full extractive fallback
    const result = extractFallbackBrief(title, desc, 'https://example.com/court-news');
    assert(result.status === 'REJECTED', 'Test 2: Unrelated crime/court story is rejected by fallback');
    assert(
      result.reason.includes('REJECTED_NO_SECURITY_EVENT') || result.reason.includes('REJECTED_NO_AFFECTED_ENTITY'),
      `Test 2: Rejection reason clearly states lack of security event or affected cyber entity (${result.reason})`
    );
    passed++;
  }

  // ---------------------------------------------------------------------------
  // TEST 3: Generic capitalized words alone do not pass entity validation
  // ---------------------------------------------------------------------------
  console.log('\n--- TEST 3: Generic Capitalized Words Alone Do Not Pass Entity Validation ---');
  {
    const title = 'Today In A Recent Report Officials Warned Citizens';
    const brief = 'Yesterday Morning Several Officials Warned Citizens Regarding A Potential Vulnerability In Modern Network Deployments Across The Country. Meanwhile Regional Leaders Gathered In Capital Offices To Review Potential Responses.';
    
    const entityResult = hasIdentifiableEntity(title, brief);
    assert(!entityResult, 'Test 3: Generic capitalized words (Today, Recent, Report, Officials, Citizens) do NOT pass entity validation');

    const gate = validateExtractiveBrief(title, brief, [brief], brief);
    assert(!gate.isValid, 'Test 3: Quality gate rejects text with generic capitalized words');
    assert(gate.reason.includes('REJECTED_NO_AFFECTED_ENTITY'), `Test 3: Rejected specifically for missing entity (${gate.reason})`);
    passed++;
  }

  // ---------------------------------------------------------------------------
  // TEST 4: Legitimate CVE advisory without vendor name accepted
  // ---------------------------------------------------------------------------
  console.log('\n--- TEST 4: Legitimate CVE Advisory Without Vendor Name Accepted ---');
  {
    const title = 'Security Flaw CVE-2026-118527 Allows Denial of Service';
    const desc = 'A security vulnerability tracked as CVE-2026-118527 has been identified in open source network tooling. The flaw allows remote unauthenticated attackers to cause an unexpected crash and denial of service. Downstream maintainers have made security patches available to resolve the issue.';
    
    const entityResult = hasIdentifiableEntity(title, desc);
    assert(entityResult, 'Test 4: Standalone CVE identifier (CVE-2026-118527) recognized as valid entity');

    const result = extractFallbackBrief(title, desc, 'https://example.com/cve-advisory');
    assert(result.status === 'ACCEPTED', 'Test 4: Legitimate CVE advisory without vendor name is accepted');
    assert(result.category === 'CVE', `Test 4: Correctly categorized as CVE (${result.category})`);
    passed++;
  }

  // ---------------------------------------------------------------------------
  // TEST 5: KEV-listed vulnerability without critical severity is HIGH or MEDIUM (not CRITICAL)
  // ---------------------------------------------------------------------------
  console.log('\n--- TEST 5: KEV-Listed Flaw Without Critical Indicators Classified HIGH/MEDIUM ---');
  {
    // Case 5A: Standard KEV addition with privilege escalation (no CVSS 9+, no unauth RCE) -> HIGH
    const title5A = 'CISA Adds Flaw to Known Exploited Vulnerabilities Catalog';
    const desc5A = 'The Cybersecurity and Infrastructure Security Agency CISA has added CVE-2024-21887 to its KEV catalog based on evidence of active exploitation. The vulnerability allows authenticated local users to elevate privileges on affected systems. Federal civilian executive branch agencies are required to remediate by the specified due date.';
    const threat5A = classifyThreat(title5A, desc5A);
    assert(threat5A.severity === 'HIGH', `Test 5A: KEV flaw without critical indicators is classified HIGH, not CRITICAL (${threat5A.severity})`);

    // Case 5B: KEV addition of a medium-severity flaw with explicit CVSS 5.4 -> MEDIUM
    const title5B = 'CISA Adds Medium Severity Vulnerability to KEV Catalog';
    const desc5B = 'CISA has added CVE-2024-3456 to its Known Exploited Vulnerabilities catalog. The medium severity vulnerability carries a CVSS score of 5.4 and requires user interaction to exploit. Security teams should patch accordingly.';
    const threat5B = classifyThreat(title5B, desc5B);
    assert(threat5B.severity === 'MEDIUM', `Test 5B: KEV flaw with lower severity context (CVSS 5.4) is classified MEDIUM (${threat5B.severity})`);
    passed++;
  }

  // ---------------------------------------------------------------------------
  // TEST 6: Explicit CVSS 9.8 vulnerability classified as CRITICAL
  // ---------------------------------------------------------------------------
  console.log('\n--- TEST 6: Explicit CVSS 9.8 Flaw Classified as CRITICAL ---');
  {
    const title = 'Critical Flaw with CVSS 9.8 Discovered in Enterprise Servers';
    const desc = 'Security researchers have disclosed a critical remote code execution flaw carrying a CVSS score of 9.8. The vulnerability allows unauthenticated remote attackers to execute arbitrary code with root privileges. System administrators should apply emergency security patches immediately.';
    const threat = classifyThreat(title, desc);
    assert(threat.severity === 'CRITICAL', `Test 6: Explicit CVSS 9.8 vulnerability is classified as CRITICAL (${threat.severity})`);

    const result = extractFallbackBrief(title, desc, 'https://example.com/critical-advisory');
    assert(result.status === 'ACCEPTED', 'Test 6: Critical advisory accepted by fallback');
    assert(result.severity === 'CRITICAL', `Test 6: Assembled article severity is CRITICAL (${result.severity})`);
    passed++;
  }

  // ---------------------------------------------------------------------------
  // TEST 7: Raw CVE table rejected by isTabularData
  // ---------------------------------------------------------------------------
  console.log('\n--- TEST 7: Raw CVE Table Rejected by isTabularData ---');
  {
    const rawTableDesc = 'CVE-2026-1111 (High) affects 7.0.x. CVE-2026-2222 (Critical) affects 7.2.x. CVE-2026-3333 affects 7.4.x. CVE-2026-4444 (Medium) affects 8.0.x.';
    const isTab = isTabularData(rawTableDesc);
    assert(isTab, 'Test 7: isTabularData flags raw CVE table dump');

    const result = extractFallbackBrief('Vendor Monthly Advisory Summary', rawTableDesc, 'https://example.com/raw-cves');
    assert(result.status === 'REJECTED', 'Test 7: Raw tabular data rejected by extractFallbackBrief');
    assert(result.reason.includes('REJECTED_TABULAR_DATA'), `Test 7: Rejection reason states tabular data (${result.reason})`);
    passed++;
  }

  // ---------------------------------------------------------------------------
  // TEST 8: Incomplete sentence / clause rejected
  // ---------------------------------------------------------------------------
  console.log('\n--- TEST 8: Incomplete Sentence / Clause Rejected Without Synthesizing Period ---');
  {
    // Test 8A: stripCtaTail on incomplete clause ending in comma/CTA
    const incompleteClause = 'The security team investigated the incident and noted that, for more information visit our website.';
    const cleaned = stripCtaTail(incompleteClause);
    assert(cleaned === '', `Test 8A: stripCtaTail discards incomplete clause without appending period (returned: "${cleaned}")`);

    // Test 8B: Fallback on description where only incomplete clauses remain
    const brokenArticleDesc = 'The vendor has investigated the vulnerability and, for more information visit our community.';
    const result = extractFallbackBrief('Security Advisory Notice', brokenArticleDesc, 'https://example.com/broken');
    assert(result.status === 'REJECTED', 'Test 8B: Article with only incomplete clauses rejected by fallback');
    assert(
      result.reason.includes('REJECTED_BROKEN_SENTENCE') || result.reason.includes('REJECTED_TOO_SHORT'),
      `Test 8B: Rejection reason flags broken sentence or insufficient word count (${result.reason})`
    );
    passed++;
  }

  // ---------------------------------------------------------------------------
  // TEST 9: Useful article with short but complete summary (>= 28 words) accepted
  // ---------------------------------------------------------------------------
  console.log('\n--- TEST 9: Useful Article With Short Complete Summary (>= 28 Words) Accepted ---');
  {
    const title = 'GitLab Releases Security Updates for Critical Vulnerability';
    const desc = 'GitLab has released security versions 17.5.1 and 17.4.3 for GitLab Community Edition. The updates fix a critical vulnerability tracked as CVE-2024-9164 that allows arbitrary pipeline execution. Users are advised to upgrade immediately.';
    const wordCount = desc.split(/\s+/).filter(Boolean).length;
    assert(wordCount >= 28 && wordCount <= 45, `Test 9: Short concise text has ${wordCount} words (within 28-45 range)`);

    const result = extractFallbackBrief(title, desc, 'https://example.com/gitlab-release');
    assert(result.status === 'ACCEPTED', 'Test 9: Short complete advisory (>= 28 words) is accepted');
    assert(result.wordCount >= 28, `Test 9: Extracted word count is ${result.wordCount}`);
    assert(result.sentenceCount <= 3, `Test 9: Sentence count is ${result.sentenceCount} (<= 3)`);
    passed++;
  }

  // ---------------------------------------------------------------------------
  // TEST 10: Timestamp and future-date tests continue passing
  // ---------------------------------------------------------------------------
  console.log('\n--- TEST 10: Timestamp and Future-Date Integrity Continues Passing ---');
  {
    const now = Date.now();

    // Past date (2h ago)
    const pastIso = new Date(now - 2 * 3600 * 1000).toISOString();
    const pastRes = normalizeTimestamp(pastIso);
    assert(pastRes.publishedAt === pastIso, 'Test 10: Valid past date preserved');
    assert(pastRes.isPublishedTimeUnknown === false, 'Test 10: Past date is NOT marked unknown');
    assert(typeof pastRes.ingestedAt === 'string', 'Test 10: IngestedAt recorded separately');

    // Missing date
    const nullRes = normalizeTimestamp(null);
    assert(nullRes.publishedAt === null, 'Test 10: Missing timestamp yields publishedAt === null');
    assert(nullRes.isPublishedTimeUnknown === true, 'Test 10: Missing timestamp marked isPublishedTimeUnknown === true');

    // Future date beyond 10m tolerance (+2h)
    const futureIso = new Date(now + 2 * 3600 * 1000).toISOString();
    const futureRes = normalizeTimestamp(futureIso);
    assert(futureRes.publishedAt === null, 'Test 10: Future timestamp (+2h) rejected (publishedAt === null)');
    assert(futureRes.isFutureSkew === true, 'Test 10: Future timestamp flagged as isFutureSkew: true');

    // Push check eligibility logic
    const ageMsPast = now - Date.parse(pastRes.publishedAt);
    const ageMsFuture = futureRes.publishedAt ? now - Date.parse(futureRes.publishedAt) : -1;
    assert(ageMsPast >= 0 && ageMsPast <= 24 * 3600 * 1000, 'Test 10: Past date eligible for push (ageMs >= 0)');
    assert(ageMsFuture < 0, 'Test 10: Future date disqualified from push');
    passed++;
  }

  // ---------------------------------------------------------------------------
  // TEST 11: Prompt/Meta-Tag Leakage & Continuation Bracket Sanitization
  // ---------------------------------------------------------------------------
  console.log('\n--- TEST 11: Prompt/Meta-Tag Leakage & Continuation Bracket Sanitization ---');
  {
    const rawIvantiDesc = 'Ivanti released security updates to patch two more Connect Secure (ICS) remote access gateway flaws that have been chained in zero-day attacks since at least October 1. [...] (Corroborated Threat Intelligence: Associated CVE is CVE-2026-111357).';
    const cleaned = cleanHtml(rawIvantiDesc);

    assert(!cleaned.includes('[...]'), 'Continuation bracket [...] completely removed');
    assert(!cleaned.includes('Corroborated Threat Intelligence'), 'Internal corroboration tag removed from prose');
    assert(cleaned.includes('The vulnerability is tracked as CVE-2026-111357.'), 'Corroboration converted into natural English prose');

    // Test full extraction and article build
    const candTitle = 'Ivanti patches two more Connect Secure zero-days chained in attacks';
    const res = extractFallbackBrief(candTitle, rawIvantiDesc, 'https://example.com/ivanti');
    assert(res.status === 'ACCEPTED', 'Ivanti fallback brief accepted');
    assert(res.wordCount >= 28, `Word count meets floor: ${res.wordCount} words`);
    assert(res.summary.includes('The vulnerability is tracked as CVE-2026-111357.'), 'Clean prose preserved in final summary');

    const article = buildFallbackArticle(
      { url: 'https://example.com/ivanti', title: candTitle, description: rawIvantiDesc, publishedAt: '2026-11-02T09:33:43.000Z', sourceName: 'BleepingComputer' },
      res,
      u => u,
      text => [...new Set((text.match(/CVE-\d{4}-\d+/gi) || []).map(c => c.toUpperCase()))]
    );
    assert(article.cves.includes('CVE-2026-111357'), 'Corroborated CVE retained in article.cves');

    // Plural test
    const pluralDesc = 'Flaws in Cisco routers allow arbitrary code execution. [...] (Corroborated Threat Intelligence: Associated CVEs are CVE-2026-1001, CVE-2026-1002).';
    const cleanPlural = cleanHtml(pluralDesc);
    assert(cleanPlural.includes('The vulnerabilities are tracked as CVE-2026-1001, CVE-2026-1002.'), 'Plural corroboration converted into natural prose');

    passed++;
  }

  // ---------------------------------------------------------------------------
  // BONUS VERIFICATION: Sentence Density Scoring & Order Preservation
  // ---------------------------------------------------------------------------
  console.log('\n--- BONUS VERIFICATION: Sentence Density Scoring & Document Order ---');
  {
    const sFlaw = 'Google has released security updates to patch an actively exploited zero-day vulnerability in Chrome.';
    const sDetail = 'The application also includes several miscellaneous cosmetic font and palette revisions.';
    const sPatch = 'Administrators are advised to deploy the patches immediately to protect endpoints.';

    const scoreFlaw = scoreSentence(sFlaw, 0);
    const scoreDetail = scoreSentence(sDetail, 1);
    const scorePatch = scoreSentence(sPatch, 2);

    assert(scoreFlaw > scoreDetail, `Flaw sentence score (${scoreFlaw}) > UI detail score (${scoreDetail})`);
    assert(scorePatch > scoreDetail, `Patch sentence score (${scorePatch}) > UI detail score (${scoreDetail})`);

    // Verify document order preservation when higher scoring sentences are non-adjacent
    const multiSentenceDesc = `${sFlaw} ${sDetail} ${sPatch}`;
    const result = extractFallbackBrief('Google Chrome Zero-Day Patch', multiSentenceDesc, 'https://example.com/chrome-patch');
    assert(result.status === 'ACCEPTED', 'Multi-sentence article accepted');
    
    // Check that sentences appear in original document order
    const posFlaw = result.summary.indexOf('actively exploited zero-day');
    const posPatch = result.summary.indexOf('Administrators are advised');
    assert(posFlaw !== -1 && posPatch !== -1, 'High-scoring sentences present in summary');
    assert(posFlaw < posPatch, 'Original document order strictly preserved (flaw before patch)');
  }

  console.log('\n========================================================================');
  console.log(`📊 HARDENING TEST RESULTS: ${passed}/11 MANDATORY REGRESSIONS PASSED`);
  console.log('========================================================================\n');
}

runHardeningSuite().catch(err => {
  console.error('\n❌ TEST RUN FAILED:', err);
  process.exit(1);
});
