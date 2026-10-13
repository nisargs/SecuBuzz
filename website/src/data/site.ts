export const PLAY_STORE_URL = '/go/play';
export const PLAY_STORE_EXTERNAL_URL = 'https://play.google.com/store/apps/details?id=com.secubuzz.app';
export const PLAY_STORE_TESTING_URL = 'https://play.google.com/apps/testing/com.secubuzz.app';

export const mainNav = [
{ label: 'News', to: '/news' },
{ label: 'CISA Advisories', to: '/advisories' },
{ label: 'For Publishers', to: '/publishers' },
{ label: 'About', to: '/about' }];


export const footerNav = [
  {
    heading: 'Product',
    links: [
      { label: 'News briefs', to: '/news' },
      { label: 'CISA advisories', to: '/advisories' },
      { label: 'Download the app', to: '/download' },
      { label: 'RSS Feed', to: '/rss.xml', external: true },
    ]
  },
{
  heading: 'Company',
  links: [
  { label: 'About', to: '/about' },
  { label: 'For Publishers', to: '/publishers' },
  { label: 'Contact', to: '/contact' }]

},
{
  heading: 'Legal',
  links: [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Account Deletion', to: '/account-deletion' }]

}];


export const homeReasons = [
{
  title: 'Read the whole feed before stand-up',
  body: 'Every brief is capped at 60 words. A full day of coverage takes about five minutes, not fifty open tabs.'
},
{
  title: 'Every claim traces back to a source',
  body: 'Briefs link to the original reporting and vendor advisories, so you can verify before you escalate.'
},
{
  title: 'KEV alerts that carry the deadline',
  body: 'When CISA adds a CVE to the Known Exploited Vulnerabilities catalog, you get a push with the vendor, product and remediation due date.'
}];


export const appFeatures = [
  { title: '60-word briefs', body: 'Swipe through the day’s security news in concise cards you can finish in under 15 seconds.' },
  { title: 'KEV push alerts', body: 'Timely notifications when CISA lists a new exploited vulnerability, with remediation deadlines attached.' },
  { title: 'On-device bookmarks', body: 'Save critical briefs and advisories for later with a single tap. Bookmarks stay 100% on your device with no account or cloud sync.' },
  { title: '1-tap incident reports', body: 'Copy formatted markdown threat intelligence to clipboard for pasting directly into Slack, Microsoft Teams, or Jira tickets.' },
  { title: 'Offline reading', body: 'Up to 250 briefs and advisories are cached locally. Read full intelligence without network connectivity.' },
  { title: 'No account required', body: 'Install from Google Play to start reading immediately. 100% on-device preferences, no tracking, and anonymous crash reports only.' },
];

export const appRequirements = [
  { label: 'Platform', value: 'Android 8.0 and later' },
  { label: 'Developer', value: 'MiSo Labs' },
  { label: 'Release track', value: 'Production (Google Play)' },
  { label: 'Price', value: 'Free · Zero tracking' },
];

export const downloadFaq = [
  {
    q: 'Which platforms are supported?',
    a: 'SecuBuzz is built exclusively for Android (version 8.0 and higher) and is available globally on Google Play.',
  },
  {
    q: 'Where does the KEV data come from?',
    a: 'Directly from CISA’s public Known Exploited Vulnerabilities catalog, updated hourly via an automated threat intelligence pipeline. SecuBuzz is an independent tool developed by MiSo Labs and is not affiliated with or endorsed by CISA.',
  },
  {
    q: 'Does the app track me?',
    a: 'No. SecuBuzz is engineered with privacy by architecture. No user accounts required, no location tracking, and no advertising IDs. We collect only anonymous crash logs and version diagnostics to ensure stability. See our Privacy Policy for full details.',
  },
  {
    q: 'How do I install the app?',
    a: 'SecuBuzz is available directly on Google Play. Tap the "Get it on Google Play" button to open the store listing and download the app on any Android device.',
  },
];

export const publisherSteps = [
  {
    title: 'Submit your feed',
    body: 'Share an RSS or Atom feed. We review editorial standards and topical fit within five business days.',
  },
  {
    title: 'We write the brief',
    body: 'AI-assisted briefs reviewed for accuracy in 60 words, crediting your publication by name on every card.',
  },
  {
    title: 'Readers click through',
    body: 'Each brief carries a prominent “Read original reporting” link to your article. We never republish full text.',
  },
  {
    title: 'Direct practitioner traffic',
    body: 'Every brief directs readers straight to your canonical domain to read your full reporting, driving verified security practitioner readership.',
  },
];

export const publisherStats = [
  { value: '60', label: 'words max per curated brief' },
  { value: '100%', label: 'direct link referral to source' },
  { value: '1 hr', label: 'threat intelligence refresh cycle' },
];

export interface CuratedSource {
  name: string;
  category: 'Newsrooms & Journalism' | 'Government & CERTs' | 'Threat Research & Labs';
  url: string;
  description: string;
}

export const curatedSources: CuratedSource[] = [
  {
    name: 'The Hacker News',
    category: 'Newsrooms & Journalism',
    url: 'https://thehackersnews.com',
    description: 'Breaking global cybersecurity news, zero-day vulnerabilities, malware analysis, and data breaches.'
  },
  {
    name: 'BleepingComputer',
    category: 'Newsrooms & Journalism',
    url: 'https://www.bleepingcomputer.com',
    description: 'Premier cybersecurity newsroom covering active ransomware, enterprise security alerts, and threat actors.'
  },
  {
    name: 'CISA Cybersecurity Advisories',
    category: 'Government & CERTs',
    url: 'https://www.cisa.gov/cybersecurity-advisories',
    description: 'Authoritative bulletins and binding operational directives from the U.S. Cybersecurity and Infrastructure Security Agency.'
  },
  {
    name: 'Krebs on Security',
    category: 'Newsrooms & Journalism',
    url: 'https://krebsonsecurity.com',
    description: 'Investigative cybersecurity journalism by Brian Krebs, exposing cybercrime syndicates and infrastructure flaws.'
  },
  {
    name: 'SANS Internet Storm Center',
    category: 'Government & CERTs',
    url: 'https://isc.sans.edu',
    description: 'Global early warning system and daily handler analysis on emerging network attacks and protocol exploits.'
  },
  {
    name: 'Unit 42 (Palo Alto Networks)',
    category: 'Threat Research & Labs',
    url: 'https://unit42.paloaltonetworks.com',
    description: 'Elite threat intelligence, adversary playbooks, advanced threat actor tracking, and incident response research.'
  },
  {
    name: 'Zero Day Initiative (ZDI)',
    category: 'Threat Research & Labs',
    url: 'https://www.zerodayinitiative.com',
    description: 'World’s largest vendor-agnostic bug bounty program providing direct zero-day vulnerability disclosures.'
  },
  {
    name: 'The Record by Recorded Future',
    category: 'Newsrooms & Journalism',
    url: 'https://therecord.media',
    description: 'In-depth reporting on nation-state cyber espionage, critical infrastructure attacks, and cyber law.'
  },
  {
    name: 'SecurityWeek',
    category: 'Newsrooms & Journalism',
    url: 'https://www.securityweek.com',
    description: 'Enterprise information security reporting, executive insights, and threat analysis for security leadership.'
  },
  {
    name: 'Dark Reading',
    category: 'Newsrooms & Journalism',
    url: 'https://www.darkreading.com',
    description: 'Comprehensive cybersecurity community portal covering enterprise risk management, cloud defense, and vulnerabilities.'
  },
  {
    name: 'Help Net Security',
    category: 'Newsrooms & Journalism',
    url: 'https://www.helpnetsecurity.com',
    description: 'Independent information security news focusing on technical advisories, defensive tooling, and compliance.'
  },
  {
    name: 'CyberNews AI',
    category: 'Newsrooms & Journalism',
    url: 'https://www.cybernewsai.com',
    description: 'Research-backed coverage on emerging artificial intelligence security risks, data leaks, and digital safety.'
  },
  {
    name: 'Microsoft Security Blog',
    category: 'Threat Research & Labs',
    url: 'https://www.microsoft.com/security/blog/',
    description: 'Threat intelligence, nation-state actor profiling, and cloud defense telemetry from the Microsoft Security team.'
  },
  {
    name: 'Google Security Blog',
    category: 'Threat Research & Labs',
    url: 'https://security.googleblog.com',
    description: 'Original research on browser security, memory safety, cryptography, and open-source supply chain security.'
  },
  {
    name: 'Sophos Threat Research',
    category: 'Threat Research & Labs',
    url: 'https://news.sophos.com/en-us/category/threat-research/',
    description: 'Technical dissections of active ransomware campaigns, malware payloads, and living-off-the-land techniques.'
  },
  {
    name: 'Check Point Research',
    category: 'Threat Research & Labs',
    url: 'https://research.checkpoint.com',
    description: 'Global threat intelligence, vulnerability discovery, and technical analysis of emerging malware strains.'
  },
  {
    name: 'CrowdStrike Blog',
    category: 'Threat Research & Labs',
    url: 'https://www.crowdstrike.com/blog/',
    description: 'Adversary tracking, endpoint attack telemetry, and tactical intelligence on tracked eCrime and nation-state groups.'
  },
  {
    name: 'The DFIR Report',
    category: 'Threat Research & Labs',
    url: 'https://thedfirreport.com',
    description: 'Detailed, end-to-end digital forensics and incident response walkthroughs of real-world intrusion operations.'
  },
  {
    name: 'Wiz Research',
    category: 'Threat Research & Labs',
    url: 'https://www.wiz.io/blog',
    description: 'Leading cloud security research covering multi-cloud tenant isolation, IAM misconfigurations, and cloud zero-days.'
  },
  {
    name: 'Cloudflare Security',
    category: 'Threat Research & Labs',
    url: 'https://blog.cloudflare.com',
    description: 'Internet-scale DDoS mitigation insights, bot traffic analysis, and edge application security telemetry.'
  },
  {
    name: 'Cisco Talos',
    category: 'Threat Research & Labs',
    url: 'https://blog.talosintelligence.com',
    description: 'Commercial threat intelligence provider tracking emerging exploit techniques, botnets, and zero-day vulnerabilities.'
  },
  {
    name: 'Trend Micro Research',
    category: 'Threat Research & Labs',
    url: 'https://www.trendmicro.com/research',
    description: 'Global security intelligence across industrial systems, IoT attacks, malware families, and cloud infrastructures.'
  },
  {
    name: 'SentinelOne Research',
    category: 'Threat Research & Labs',
    url: 'https://www.sentinelone.com/blog/',
    description: 'Autonomous endpoint defense analysis, APT reverse engineering, and behavioral threat detection insights.'
  },
  {
    name: 'Schneier on Security',
    category: 'Newsrooms & Journalism',
    url: 'https://www.schneier.com',
    description: 'Authoritative analysis and commentary on security technology, surveillance, and cryptography by Bruce Schneier.'
  },
  {
    name: 'Malwarebytes Labs',
    category: 'Threat Research & Labs',
    url: 'https://www.malwarebytes.com/blog',
    description: 'Practical threat alerts, phishing tactics, adware distribution vectors, and consumer cybersecurity defense.'
  },
  {
    name: 'ESET WeLiveSecurity',
    category: 'Threat Research & Labs',
    url: 'https://www.welivesecurity.com',
    description: 'In-depth research on state-sponsored APT campaigns, rootkits, and global malware telemetry from ESET researchers.'
  },
  {
    name: 'Cyber Security News',
    category: 'Newsrooms & Journalism',
    url: 'https://cybersecuritynews.com',
    description: 'Fast-paced cybersecurity reporting covering software flaws, patch releases, and corporate security disclosures.'
  }
];

export const aboutPrinciples = [
  {
    title: 'Zero fluff & noise',
    body: 'Defenders don’t have time for 2,000-word blog posts and sensational headlines. Every brief is distilled to 60 words: what happened, who is affected, and what action is required.',
  },
  {
    title: 'Strict attribution',
    body: 'We respect original research and security journalism. Every brief prominently credits and links directly to the primary vendor bulletin or reporting outlet. We never republish full text.',
  },
  {
    title: 'Deadlines over panic',
    body: 'Our threat telemetry prioritizes verified in-the-wild exploitation via the CISA KEV catalog, leading with affected components and binding federal remediation due dates.',
  },
  {
    title: 'Privacy by architecture',
    body: 'No user accounts, no analytics tracking, no advertising identifiers, and zero personal data collection. Your saved bookmarks and reading preferences stay 100% on your device.',
  },
];


export const contactTopics = [
'General question',
'Press inquiry',
'Bug report',
'Publisher partnership',
'Corrections'] as
const;

export const publisherFocusAreas = [
'Threat intelligence',
'Vulnerability research',
'Industry news',
'Policy & compliance',
'Vendor advisories'] as
const;