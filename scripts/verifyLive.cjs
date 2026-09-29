async function verify() {
  const urls = [
    'https://secubuzz.com/',
    'https://secubuzz.com/news',
    'https://secubuzz.com/advisories',
    'https://secubuzz.com/download',
    'https://secubuzz.com/publishers',
    'https://secubuzz.com/privacy',
    'https://secubuzz.com/terms',
    'https://secubuzz.com/account-deletion',
    'https://secubuzz.com/api/advisories',
    'https://secubuzz.com/api/news',
    'https://secubuzz.com/icon.png',
    'https://secubuzz.com/favicon.png'
  ];

  for (const u of urls) {
    try {
      const res = await fetch(u);
      const ct = res.headers.get('content-type');
      console.log(`[${res.status}] ${u} -> ${ct}`);
    } catch(e) {
      console.error('Failed', u, e.message);
    }
  }

  const home = await fetch('https://secubuzz.com/').then(r => r.text());
  console.log('Home contains SecuBuzz title:', home.includes('SecuBuzz'));
  console.log('Home script mounted:', home.includes('/assets/index-'));
  console.log('Favicon link with ?v=2:', home.includes('/favicon.png?v=2'));
}

verify();
