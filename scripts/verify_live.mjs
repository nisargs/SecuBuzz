async function verify() {
  console.log('--- VERIFYING LIVE SECUBUZZ.COM ---');

  // 1. /download
  const resDl = await fetch('https://secubuzz.com/download');
  const htmlDl = await resDl.text();
  const hasPlay = htmlDl.includes('Get it on Google Play') || htmlDl.includes('Google Play');
  const hasClosedTest = htmlDl.toLowerCase().includes('closed testing');
  console.log('1. /download: Google Play present =', hasPlay, '| Closed testing absent =', !hasClosedTest);

  // 2. /feed.json
  const resFeed = await fetch('https://secubuzz.com/feed.json');
  const feed = await resFeed.json();
  const citrixCount = feed.filter(f => (f.headline || '').toLowerCase().includes('citrix') || (f.summary || '').toLowerCase().includes('citrix')).length;
  const bitgetCount = feed.filter(f => (f.headline || '').toLowerCase().includes('bitget') || (f.summary || '').toLowerCase().includes('bitget')).length;
  const kiteworksCount = feed.filter(f => (f.headline || '').toLowerCase().includes('kiteworks') || (f.summary || '').toLowerCase().includes('kiteworks')).length;
  const hasSources = feed.some(f => f.additionalSources && f.additionalSources.length > 0);
  console.log('2. /feed.json: total =', feed.length, '| Citrix =', citrixCount, '| Bitget =', bitgetCount, '| Kiteworks =', kiteworksCount, '| Has additionalSources =', hasSources);

  // 3. /rss.xml
  const resRss = await fetch('https://secubuzz.com/rss.xml');
  const rssXml = await resRss.text();
  console.log('3. /rss.xml: status =', resRss.status, '| Valid RSS =', rssXml.includes('<rss') && rssXml.includes('</rss>'));

  // 4. /api/advisories
  const resAdv = await fetch('https://secubuzz.com/api/advisories');
  const adv = await resAdv.json();
  const advCount = adv.count || (Array.isArray(adv) ? adv.length : (adv.advisories || []).length);
  console.log('4. /api/advisories: total KEV catalog =', advCount);

  // 5. /api/epss?cve=CVE-2023-49105
  const resEpss = await fetch('https://secubuzz.com/api/epss?cve=CVE-2023-49105');
  const epssData = await resEpss.json();
  console.log('5. /api/epss?cve=CVE-2023-49105:', epssData);

  // 6. /api/cve-metrics?cve=CVE-2023-49105
  const resMetrics = await fetch('https://secubuzz.com/api/cve-metrics?cve=CVE-2023-49105');
  const metricsData = await resMetrics.json();
  console.log('6. /api/cve-metrics?cve=CVE-2023-49105:', metricsData);

  // 7. /terms canonical & meta
  const resTerms = await fetch('https://secubuzz.com/terms');
  const htmlTerms = await resTerms.text();
  const canonicalTerms = htmlTerms.includes('rel="canonical" href="https://secubuzz.com/terms"');
  console.log('7. /terms canonical =', canonicalTerms);

  // 8. /advisories/cve-2023-49105 detail page check
  const resDetail = await fetch('https://secubuzz.com/advisories/cve-2023-49105');
  const htmlDetail = await resDetail.text();
  const hasCweClean = !htmlDetail.includes('Weakness: CWE: CWE-');
  console.log('8. /advisories/cve-2023-49105 detail page: no double CWE prefix =', hasCweClean);

  // 9. Check bundle for countdown grammar
  // Fetch production JS asset from index.html
  const jsMatch = htmlDl.match(/src="(\/assets\/index-[^"]+\.js)"/);
  if (jsMatch) {
    const jsUrl = 'https://secubuzz.com' + jsMatch[1];
    const resJs = await fetch(jsUrl);
    const jsText = await resJs.text();
    const hasSingularRemaining = jsText.includes('1 day remaining');
    const hasSingularOverdue = jsText.includes('1 day overdue');
    const hasCweFix = jsText.includes('CWE-') && jsText.includes('Weakness');
    console.log('9. Production JS bundle:', jsUrl, '| 1 day remaining =', hasSingularRemaining, '| 1 day overdue =', hasSingularOverdue, '| CWE clean logic =', hasCweFix);
  }
}
verify();
