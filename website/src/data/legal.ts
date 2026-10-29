import { THREAT_FEEDS_COUNT } from './sources';

export interface LegalLinkAction {
  label: string;
  to: string;
}

export interface LegalSection {
  id: string;
  heading: string;
  body: string[];
  linkAction?: LegalLinkAction;
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
      'Push Notification Token & Device Identifier: If you opt in to receive news alerts and zero-day threat advisories, an anonymous push token (Expo/FCM), operating system, app version, and your chosen notification filters (news briefs, threat advisories, severity threshold) are registered with our secure Cloudflare Worker backend. This data is processed strictly for: (a) App Functionality, delivering broadcast notifications matching your selected severity filters; and (b) Analytics & Fleet Health, measuring active notification delivery reach, subscriber counts, and app version distribution to ensure alert infrastructure reliability. This token is never linked to your personal identity, name, email, or advertising IDs, and can be revoked at any time by disabling notifications in the app or system settings.',
      'On-Device Bookmarks & Reading State: All bookmarked briefs, reading history, and theme settings are stored 100% locally on your device in standard local application storage. They are never transmitted to, collected by, or stored on our servers.',
      'Application Diagnostics: Anonymized crash logs and app version statistics are used strictly to diagnose bugs, maintain uptime, and retire obsolete API contracts.',
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
      'SecuBuzz provides factual, 60-word summaries of public cybersecurity disclosures and authoritative security advisories sourced from the CISA Known Exploited Vulnerabilities (KEV) catalog and the GitHub Security Advisory Database, enriched with FIRST.org EPSS exploit telemetry. SecuBuzz is developed and operated by MiSo Labs. SecuBuzz and MiSo Labs are independent of and not affiliated with, sponsored by, or endorsed by CISA, the Department of Homeland Security, GitHub, or external news publishers.'
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
      `SecuBuzz indexes public cybersecurity reporting, official bulletins, and threat research from ${THREAT_FEEDS_COUNT} independent newsrooms, vendor PSIRTs, government CERT advisories, and threat research organizations for its 60-word news briefs. In addition, SecuBuzz ingests authoritative security advisories directly from the CISA Known Exploited Vulnerabilities (KEV) catalog (cisa.gov) and the GitHub Security Advisory Database (github.com/advisories), with exploit likelihood percentiles powered by FIRST.org EPSS. For the full, categorized catalog of monitored sources, vendor bulletins, and advisory databases with direct outbound links, see our dedicated Sources Directory.`
    ],
    linkAction: {
      label: `View all ${THREAT_FEEDS_COUNT} monitored sources and vendor PSIRTs →`,
      to: '/sources'
    }
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: ['Questions about these terms can be directed to support@secubuzz.com.']
  }
];
