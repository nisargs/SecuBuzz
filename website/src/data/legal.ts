export interface LegalSourceItem {
  name: string;
  domain: string;
  url: string;
}

export interface LegalSection {
  id: string;
  heading: string;
  body: string[];
  sourcesList?: LegalSourceItem[];
}

export const privacySections: LegalSection[] = [
  {
    id: 'overview',
    heading: '1. Overview & Developer Details',
    body: [
      'SecuBuzz by MiSo Labs ("we", "us", or "our") develops and operates the SecuBuzz mobile application and the secubuzz.com website. This Privacy Policy details our data practices and privacy guarantees.',
      'We believe privacy is an absolute baseline in cybersecurity. SecuBuzz is engineered so that defense teams, analysts, and engineers can read threat intelligence without surveillance, account creation, or personal telemetry harvesting.'
    ]
  },
  {
    id: 'what-we-collect',
    heading: '2. Information We Handle',
    body: [
      'Device and Application Telemetry: Anonymized crash logs and app version statistics used strictly to diagnose bugs and maintain uptime.',
      'Push Notification Token: If you opt in to receive periodic CISA KEV zero-day alerts, an anonymous Expo/Firebase Cloud Messaging (FCM) token is registered to deliver broadcast notifications. This token is never linked to your personal identity, name, or phone number, and can be revoked at any time.',
      'On-Device Bookmarks & Preferences: All bookmarks, filter preferences, and theme choices in the mobile app are stored 100% on your local device. They are never sent to or stored on our servers.',
      'Website Analytics & Conversion Attribution: The secubuzz.com website uses privacy-first, cookie-less Cloudflare Web Analytics to measure aggregate visitor counts and performance without cross-site tracking. When you click the Google Play download button on secubuzz.com, a minimal, anonymous first-party functional cookie (sb_vid) storing a randomized identifier may be set strictly to measure unique versus repeat install button clicks. We never collect personal identifying information (PII), track users across other websites, or build advertising profiles. Geographic metrics are recorded solely at the aggregate country level via standard server headers without storing individual IP addresses.'
    ]
  },
  {
    id: 'what-we-dont',
    heading: '3. What We Never Collect',
    body: [
      'We do not collect names, passwords, phone numbers, contact books, GPS location data, advertising IDs (GAID/IDFA), or browsed brief history.',
      'We do not sell personal data, license user profiles, or transmit information to data brokers or third-party marketing networks.'
    ]
  },
  {
    id: 'sharing',
    heading: '4. Service Providers & Third Parties',
    body: [
      'We utilize Cloudflare Workers for secure edge delivery and privacy-first web performance analytics (without cookies or user tracking), and Google Firebase/Expo for anonymous push notification delivery.',
      'News source links redirect directly to external publisher websites. Third-party publisher websites operate under their own independent privacy notices.'
    ]
  },
  {
    id: 'retention',
    heading: '5. Data Retention & Deletion',
    body: [
      'Anonymous push tokens are retained only while active and purged automatically when notifications are disabled or the app is uninstalled.',
      'You may request complete verification of any server token removal by contacting support@secubuzz.com.'
    ]
  },
  {
    id: 'contact',
    heading: '6. Privacy Contact',
    body: [
      'For questions or privacy inquiries regarding SecuBuzz or MiSo Labs, contact us at support@secubuzz.com.'
    ]
  }
];

export const accountDeletionSections: LegalSection[] = [
  {
    id: 'account-free',
    heading: '1. Account-Free Architecture',
    body: [
      'SecuBuzz by MiSo Labs does not require user registration, email sign-ups, or account creation to access full cybersecurity intelligence and CVE alerts.',
      'Because we do not maintain user accounts or persistent user profiles, there is no online user account to delete or disable.'
    ]
  },
  {
    id: 'local-data',
    heading: '2. Deleting On-Device Data',
    body: [
      'All user data (such as bookmarked briefs, filter preferences, and theme choices) is stored entirely in local device storage.',
      'To immediately purge all local data, tap "Clear All Data" in the SecuBuzz in-app Settings screen, or select "Clear Storage / Cache" in your Android system application settings.'
    ]
  },
  {
    id: 'push-token-revocation',
    heading: '3. Push Notification Token Deletion',
    body: [
      'If you enabled push notifications, an anonymous delivery token was registered to receive KEV alerts. You can immediately revoke this token by turning off notifications in SecuBuzz settings or uninstalling the app.'
    ]
  },
  {
    id: 'manual-request',
    heading: '4. Data Deletion Inquiries',
    body: [
      'If you have contacted our support team via email or wish to request confirmation of data deletion, send an email to support@secubuzz.com with the subject line "Data Deletion Request". All verified inquiries are processed within 2 to 3 business days.'
    ]
  }
];

export const termsSections: LegalSection[] = [
  {
    id: 'acceptance',
    heading: 'Acceptance of Terms',
    body: [
      'By installing the SecuBuzz application or accessing secubuzz.com, you agree to these Terms. SecuBuzz is developed and operated by MiSo Labs.'
    ]
  },
  {
    id: 'service',
    heading: 'The Service',
    body: [
      'SecuBuzz provides factual, 60-word summaries of public cybersecurity disclosures and CISA Known Exploited Vulnerabilities catalog updates. SecuBuzz is developed and operated by MiSo Labs. SecuBuzz and MiSo Labs are independent of and not affiliated with, sponsored by, or endorsed by CISA, the Department of Homeland Security, or external news publishers.'
    ]
  },
  {
    id: 'no-advice',
    heading: 'Security Advisory Disclaimer',
    body: [
      'SecuBuzz briefs are informational summaries intended for initial triage and situational awareness. Always inspect authoritative vendor security bulletins, NVD CVSS vectors, and your organization’s vulnerability governance before taking remediation actions.'
    ]
  },
  {
    id: 'sources',
    heading: 'Monitored Sources & Feeds',
    body: [
      'SecuBuzz indexes public cybersecurity reporting, official bulletins, and threat research from the following 27 independent newsrooms, government CERT advisories, and threat research organizations:'
    ],
    sourcesList: [
      { name: 'The Hacker News', domain: 'thehackernews.com', url: 'https://thehackernews.com' },
      { name: 'BleepingComputer', domain: 'www.bleepingcomputer.com', url: 'https://www.bleepingcomputer.com' },
      { name: 'CISA', domain: 'www.cisa.gov', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories' },
      { name: 'Krebs on Security', domain: 'krebsonsecurity.com', url: 'https://krebsonsecurity.com' },
      { name: 'SANS Internet Storm Center', domain: 'isc.sans.edu', url: 'https://isc.sans.edu' },
      { name: 'Unit 42', domain: 'unit42.paloaltonetworks.com', url: 'https://unit42.paloaltonetworks.com' },
      { name: 'Zero Day Initiative', domain: 'www.zerodayinitiative.com', url: 'https://www.zerodayinitiative.com' },
      { name: 'The Record', domain: 'therecord.media', url: 'https://therecord.media' },
      { name: 'SecurityWeek', domain: 'www.securityweek.com', url: 'https://www.securityweek.com' },
      { name: 'Dark Reading', domain: 'www.darkreading.com', url: 'https://www.darkreading.com' },
      { name: 'Help Net Security', domain: 'www.helpnetsecurity.com', url: 'https://www.helpnetsecurity.com' },
      { name: 'CyberNews AI', domain: 'www.cybernewsai.com', url: 'https://www.cybernewsai.com' },
      { name: 'Microsoft Security', domain: 'www.microsoft.com/security/blog', url: 'https://www.microsoft.com/security/blog/' },
      { name: 'Google Security', domain: 'security.googleblog.com', url: 'https://security.googleblog.com' },
      { name: 'Sophos Threat Research', domain: 'news.sophos.com', url: 'https://news.sophos.com/en-us/category/threat-research/' },
      { name: 'Check Point Research', domain: 'research.checkpoint.com', url: 'https://research.checkpoint.com' },
      { name: 'CrowdStrike', domain: 'www.crowdstrike.com/blog', url: 'https://www.crowdstrike.com/blog/' },
      { name: 'The DFIR Report', domain: 'thedfirreport.com', url: 'https://thedfirreport.com' },
      { name: 'Wiz Research', domain: 'www.wiz.io/blog', url: 'https://www.wiz.io/blog' },
      { name: 'Cloudflare Security', domain: 'blog.cloudflare.com', url: 'https://blog.cloudflare.com' },
      { name: 'Cisco Talos', domain: 'blog.talosintelligence.com', url: 'https://blog.talosintelligence.com' },
      { name: 'Trend Micro Research', domain: 'www.trendmicro.com/research', url: 'https://www.trendmicro.com/research' },
      { name: 'SentinelOne', domain: 'www.sentinelone.com/blog', url: 'https://www.sentinelone.com/blog/' },
      { name: 'Schneier on Security', domain: 'www.schneier.com', url: 'https://www.schneier.com' },
      { name: 'Malwarebytes Labs', domain: 'www.malwarebytes.com/blog', url: 'https://www.malwarebytes.com/blog' },
      { name: 'ESET WeLiveSecurity', domain: 'www.welivesecurity.com', url: 'https://www.welivesecurity.com' },
      { name: 'Cyber Security News', domain: 'cybersecuritynews.com', url: 'https://cybersecuritynews.com' },
    ]
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: ['Questions about these terms can be directed to support@secubuzz.com.']
  }
];