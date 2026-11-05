import type { NewsBrief, NewsCategory } from '../types/news';

export const newsCategories: NewsCategory[] = [
  'Breach',
  'Ransomware',
  'CVE',
  'Vulnerability',
  'Nation State',
  'General'
];

export const news: NewsBrief[] = [
  {
    "slug": "red-hat-releases-pcre2-security-patch-9e9fa5fb",
    "title": "Red Hat Releases pcre2 Security Patch",
    "summary": "Red Hat released a pcre2 update for RHEL 7 ELS to fix multiple security vulnerabilities. The vulnerabilities, referenced by CVE identifiers, are rated Important, suggesting a moderate to high exploitation risk. The patch is available via the RHEL 7 ELS update channel; administrators should install it and verify system integrity after installation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95371",
    "publishedAt": "2026-11-05T01:45:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-pcre2-security-patch",
      "article-9e9fa5fb",
      "9e9fa5fb",
      "red-hat-releases-pcre2-security-patch-37d849"
    ]
  },
  {
    "slug": "cisco-products-hit-by-node-js-brotli-vulnerabiliti-a9298be6",
    "title": "Cisco Products Hit by Node.js Brotli Vulnerabilities",
    "summary": "Cisco products are affected by Node.js vulnerabilities, including Brotli decoder, DNS resolution, and TLS hostname validation flaws. The flaws, identified as CVE‑2026‑111497, CVE‑2026‑105482, CVE‑2026‑105483, and CVE‑2026‑106069, enable remote code execution or traffic interception via out‑of‑bounds writes and hostname validation bypasses. Node.js has released patches for the 22.x, 24.x, and 26.x lines; Cisco should apply updates and verify TLS validation behavior.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-oct2026-node-js-Jj3SQ19u?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DVulnerabilities+in+Node.js+and+Brotli+Affecting+Cisco+Products%3A+October+2026%26vs_k%3D1",
    "publishedAt": "2026-11-05T00:32:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-products-hit-by-node-js-brotli-vulnerabiliti",
      "article-a9298be6",
      "a9298be6",
      "cisco-products-hit-by-node-js-brotli-vulnerabiliti-104bcf",
      "cisco-products-hit-by-node-js-brotli-vulnerabilities"
    ]
  },
  {
    "slug": "red-hat-issues-kernel-security-update-25c318ae",
    "title": "Red Hat Issues Kernel Security Update",
    "summary": "Red Hat released a kernel update for RHEL 10 to address multiple security vulnerabilities. The vulnerabilities, identified by CVE references, carry an Important impact rating, indicating moderate to high risk for affected systems. The update is available through standard RHEL 10 repositories; administrators should apply it promptly to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95367",
    "publishedAt": "2026-11-05T00:17:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-kernel-security-update",
      "article-25c318ae",
      "25c318ae",
      "red-hat-issues-kernel-security-update-37d849"
    ]
  },
  {
    "slug": "canadians-indicted-for-hacking-us-universities-ef49329e",
    "title": "Canadians Indicted for Hacking US Universities",
    "summary": "Federal indictment charges Canadian nationals with hacking U.S. universities, alleging unauthorized access to academic systems. Prosecution claims actors exploited credential theft and phishing to infiltrate university networks, potentially compromising student data and research assets; no confirmed exfiltration reported. Law enforcement recommends universities review access controls, enforce MFA, and monitor for suspicious credential usage during trial proceedings.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/us-charges-two-canadians-accused-of-hacking-us-universi",
    "publishedAt": "2026-11-05T00:15:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "canadians-indicted-for-hacking-us-universities",
      "article-ef49329e",
      "ef49329e",
      "canadians-indicted-for-hacking-us-universities-6e5250"
    ]
  },
  {
    "slug": "barracuda-esg-auth-bypass-cve-2026-116606-dabbecbd",
    "title": "Barracuda ESG Auth Bypass CVE‑2026‑116606",
    "summary": "Barracuda ESG software is vulnerable to an authentication bypass identified as CVE‑2026‑116606 across all deployments. The flaw permits attackers to gain unauthorized access to administrative interfaces without credentials, potentially exposing configuration data and enabling further exploitation. Barracuda has released a patch; administrators should apply the update immediately and review access controls.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/barracuda-esg-authentication-bypass-flaw-opens-path-to",
    "publishedAt": "2026-11-04T23:42:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "barracuda-esg-auth-bypass-cve-2026-116606",
      "article-dabbecbd",
      "dabbecbd",
      "barracuda-esg-auth-bypass-cve-2026-116606-43ca72"
    ]
  },
  {
    "slug": "cve-2026-122266-improper-isolation-of-shared-resou-3baea691",
    "title": "CVE-2026-122266 - Improper isolation of shared resources in aws-network-policy-agent in Amazon EKS",
    "summary": "Bulletin ID: 2026-170-AWS Publication Date: 11/04/2026 13:30 PM PST Description: We identified CVE-2026-122266, an issue in Amazon EKS Network Policy Agent (aws-network-policy-agent). Impacted versions: - aws-network-policy-agent - Amazon VPC CNI Managed Add-on Refer to the article below for the most up-to-date and complete information.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-170-aws/",
    "publishedAt": "2026-11-04T21:53:42.000Z",
    "cves": [
      "CVE-2026-122266"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-122266-improper-isolation-of-shared-resou",
      "article-3baea691",
      "3baea691",
      "cve-2026-122266-improper-isolation-of-shared-resou-4bc3ef",
      "cve-2026-122266-improper-isolation-of-shared-resources-in-aw"
    ]
  },
  {
    "slug": "rails-active-storage-imagemagick-arbitrary-file-wr-70eb5e9d",
    "title": "Rails Active Storage ImageMagick Arbitrary File Write",
    "summary": "A critical vulnerability exists in Ruby on Rails Active Storage's integration with ImageMagick, allowing attackers to write arbitrary files and read sensitive files via uploaded images. This flaw enables potential lateral movement within Rails-based web applications. Organizations using Rails with ImageMagick processing should apply vendor patches immediately.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/application-security/critical-rails-bug-derail-vulnerable-servers",
    "publishedAt": "2026-11-04T21:48:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rails-active-storage-imagemagick-arbitrary-file-wr",
      "article-70eb5e9d",
      "70eb5e9d",
      "rails-active-storage-imagemagick-arbitrary-file-wr-5f3c47",
      "rails-active-storage-imagemagick-arbitrary-file-write"
    ]
  },
  {
    "slug": "red-hat-updates-cryostat-4-for-cve-2026-98432-b4b42418",
    "title": "Red Hat Updates Cryostat 4 for CVE‑2026‑98432",
    "summary": "Red Hat released a security update for its Cryostat 4 build on RHEL 9, addressing CVE‑2026‑98432. The vulnerability involves a memory‑corruption flaw that could allow local privilege escalation or denial of service if exploited. Red Hat recommends installing the updated Cryostat package or applying the vendor patch to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95360",
    "publishedAt": "2026-11-04T21:45:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-cryostat-4-for-cve-2026-98432",
      "article-b4b42418",
      "b4b42418",
      "red-hat-updates-cryostat-4-for-cve-2026-98432-37d849"
    ]
  },
  {
    "slug": "vercel-deploys-device-bound-session-credentials-53d89812",
    "title": "Vercel Deploys Device‑Bound Session Credentials",
    "summary": "Vercel is introducing Device‑Bound Session Credentials (DBSC) to protect its platform from stolen session cookie attacks. DBSC binds session tokens to device fingerprints, preventing attackers from hijacking sessions even if they acquire valid cookies. Vercel recommends enabling DBSC for all projects and monitoring for anomalous session activity to maintain secure user access.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/vercel-rolls-out-new-protection-against-stolen-session-cookie-attacks/",
    "publishedAt": "2026-11-04T21:31:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vercel-deploys-device-bound-session-credentials",
      "article-53d89812",
      "53d89812",
      "vercel-deploys-device-bound-session-credentials-2a66c4"
    ]
  },
  {
    "slug": "multiple-asian-airlines-report-data-breaches-from-2ae0d0e9",
    "title": "Multiple Asian Airlines Report Data Breaches from Amadeus",
    "summary": "Six Asian airlines—Japan Airlines, Cathay Pacific, Korean Air, Asiana Airlines, Singapore Airlines, and Malaysia Airlines—have reported data breaches traced to Amadeus IT Group, a Spanish provider of flight reservation and ticketing platforms. The breaches expose passenger data across multiple carriers following an initial incident at the Spanish IT provider. Affected organizations should conduct forensic investigations and implement enhanced access controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/asian-airlines-announce-data-breach-it-provider-incident",
    "publishedAt": "2026-11-04T21:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "multiple-asian-airlines-report-data-breaches-from",
      "article-2ae0d0e9",
      "2ae0d0e9",
      "multiple-asian-airlines-report-data-breaches-from-67c7e1",
      "multiple-asian-airlines-report-data-breaches-from-amadeus"
    ]
  },
  {
    "slug": "zyxel-gs1900-switches-hit-by-zero-day-exploit-6135af26",
    "title": "Zyxel GS1900 Switches Hit by Zero‑Day Exploit",
    "summary": "Zyxel GS1900 series switches were compromised by a zero‑day vulnerability exploited on nearly 1,000 devices worldwide across all affected devices. The flaw allowed attackers to retrieve configuration files and credentials, facilitating lateral movement and potential network‑wide attacks. Zyxel released a patch; administrators should update firmware immediately and audit switch configurations for unauthorized changes.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/zyxel-fixes-zero-day-exploited-to-hack-nearly-1-000-network-switches/",
    "publishedAt": "2026-11-04T20:58:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zyxel-gs1900-switches-hit-by-zero-day-exploit",
      "article-6135af26",
      "6135af26",
      "zyxel-gs1900-switches-hit-by-zero-day-exploit-1c90f5"
    ]
  },
  {
    "slug": "cve-2026-122192-guest-access-to-firecracker-proces-94ed1063",
    "title": "CVE-2026-122192 - Guest Access to Firecracker Process Memory After a Failed Memory Discard",
    "summary": "Bulletin ID: 2026-169-AWS Publication Date: 11/04/2026 11:30 AM PST Description: We identified CVE-2026-122192, an issue in Firecracker v0.23.0 through v1.16.1 that, under certain host memory conditions, can let a root user in a guest read or modify memory of the Firecracker process.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-169-aws/",
    "publishedAt": "2026-11-04T19:40:33.000Z",
    "cves": [
      "CVE-2026-122192"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-122192-guest-access-to-firecracker-proces",
      "article-94ed1063",
      "94ed1063",
      "cve-2026-122192-guest-access-to-firecracker-proces-714e8c",
      "cve-2026-122192-guest-access-to-firecracker-process-memory-a"
    ]
  },
  {
    "slug": "dreamhost-breach-exposes-ftp-credentials-9e6a5bae",
    "title": "DreamHost Breach Exposes FTP Credentials",
    "summary": "DreamHost confirmed a breach after attackers accessed its File Manager platform for two months, capturing customers' FTP/SFTP usernames and passwords. The intrusion exploited unauthorized platform access, exposing credential data that could enable credential stuffing or unauthorized file transfers. DreamHost urged users to change passwords, enable MFA, and review account activity while investigating the incident.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/dreamhost-confirms-data-breach-exposed-ftp-logins-and-webmail-sessions/",
    "publishedAt": "2026-11-04T19:05:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "dreamhost-breach-exposes-ftp-credentials",
      "article-9e6a5bae",
      "9e6a5bae",
      "dreamhost-breach-exposes-ftp-credentials-bb4a7d"
    ]
  },
  {
    "slug": "french-bank-heist-steals-133-million-via-supplier-7e786033",
    "title": "French Bank Heist Steals $133 Million via Supplier Breach",
    "summary": "Crédit Mutuel Arkéa confirmed a cyber heist that transferred about $133 million using the bank’s account after compromising a supplier. Attackers used the supplier’s credentials to authenticate with the bank’s transfer system, enabling unauthorized fund movements without triggering fraud alerts. Bank officials are tightening supplier access controls, reviewing transaction monitoring, and notifying regulators while investigating the breach.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/french-bank-confirms-cyber-heist",
    "publishedAt": "2026-11-04T18:58:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "french-bank-heist-steals-133-million-via-supplier",
      "article-7e786033",
      "7e786033",
      "french-bank-heist-steals-133-million-via-supplier-7e17eb",
      "french-bank-heist-steals-133-million-via-supplier-breach"
    ]
  },
  {
    "slug": "scammers-use-fake-apple-cash-offers-for-affiliate-ae8beda4",
    "title": "Scammers Use Fake Apple Cash Offers for Affiliate Fraud",
    "summary": "Fraudulent schemes target consumers with fake $750 Apple Cash reward promotions designed to generate illicit revenue for affiliate marketers. The scam employs website scripted checks and artificial countdown timers to trick victims into completing tasks without delivering any monetary rewards. Users should avoid clicking unsolicited reward links, verify financial promotions through official channels, and block deceptive affiliate marketing domains.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/scams/2026/11/the-fake-750-apple-cash-reward-that-pays-out-nothing",
    "publishedAt": "2026-11-04T18:49:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "scammers-use-fake-apple-cash-offers-for-affiliate",
      "article-ae8beda4",
      "ae8beda4",
      "scammers-use-fake-apple-cash-offers-for-affiliate-d9f247",
      "scammers-use-fake-apple-cash-offers-for-affiliate-fraud"
    ]
  },
  {
    "slug": "skyw4lker-phishing-kit-targets-us-microsoft-365-ac-de436d88",
    "title": "SkyW4lker Phishing Kit Targets US Microsoft 365 Accounts",
    "summary": "The SkyW4lker phishing kit targets US enterprise organizations to facilitate Microsoft 365 account takeovers without requiring stolen user passwords. The kit abuses Microsoft device-code sign-in flows to trick users into authorizing attacker access, granting valid sessions to corporate mailboxes, documents, and connected applications.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/skyw4lker-phishing-campaign-expands-threatening-us-enterprises-with-microsoft-365-account-takeovers/",
    "publishedAt": "2026-11-04T18:43:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "skyw4lker-phishing-kit-targets-us-microsoft-365-ac",
      "article-de436d88",
      "de436d88",
      "skyw4lker-phishing-kit-targets-us-microsoft-365-ac-235f8d",
      "skyw4lker-phishing-kit-targets-us-microsoft-365-accounts"
    ]
  },
  {
    "slug": "chrome-158-0-8127-18-19-stable-desktop-update-f0d8cb49",
    "title": "Chrome 158.0.8127.18/.19 Stable Desktop Update",
    "summary": "Google Chrome released Stable channel build 158.0.8127.18/.19 for Windows as an early stable rollout to a small percentage of users. This desktop update introduces no specific CVE-identified vulnerability; it is a routine browser patch cycle. Security teams should monitor for any reported regressions and validate stability before full deployment across enterprise fleets.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/early-stable-update-for-desktop.html",
    "publishedAt": "2026-11-04T18:33:09.421Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-158-0-8127-18-19-stable-desktop-update",
      "article-f0d8cb49",
      "f0d8cb49",
      "chrome-158-0-8127-18-19-stable-desktop-update-2f005c"
    ]
  },
  {
    "slug": "ncsc-10th-annual-review-on-cyber-resilience-basics-129a4078",
    "title": "NCSC 10th Annual Review on Cyber Resilience Basics",
    "summary": "The UK NCSC published its 10th Annual Review and 'State of Cyber Nation' report, framing cyber resilience as foundational rather than advanced. The report emphasizes basic hygiene practices as the starting point for long-term defense improvements. Organizations are advised to prioritize fundamentals before investing in complex defensive architectures.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/blog-uk/the-next-decade-of-cyber-resilience-starts-with-the-basics/",
    "publishedAt": "2026-11-04T18:25:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ncsc-10th-annual-review-on-cyber-resilience-basics",
      "article-129a4078",
      "129a4078",
      "ncsc-10th-annual-review-on-cyber-resilience-basics-2391fb"
    ]
  },
  {
    "slug": "red-hat-releases-osbuild-composer-security-update-bc9f002f",
    "title": "Red Hat releases osbuild-composer security update",
    "summary": "Red Hat issued a security update for osbuild-composer on RHEL 9, addressing multiple vulnerabilities identified in the build system. The update carries an Important impact rating, with CVSS scores available via CVE links, but no active exploitation has been reported. Red Hat recommends applying the patch immediately and reviewing build configurations to mitigate potential privilege escalation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95272",
    "publishedAt": "2026-11-04T18:20:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-osbuild-composer-security-update",
      "article-bc9f002f",
      "bc9f002f",
      "red-hat-releases-osbuild-composer-security-update-37d84d"
    ]
  },
  {
    "slug": "rhsa-2026-95281-moderate-xorg-x11-server-xwayland-25d890e2",
    "title": "RHSA-2026:95281: Moderate: xorg-x11-server-Xwayland security update",
    "summary": "An update for xorg-x11-server-Xwayland is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95281",
    "publishedAt": "2026-11-04T18:14:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95281-moderate-xorg-x11-server-xwayland",
      "article-25d890e2",
      "25d890e2",
      "rhsa-2026-95281-moderate-xorg-x11-server-xwayland-37d84c",
      "rhsa-2026-95281-moderate-xorg-x11-server-xwayland-security-u"
    ]
  },
  {
    "slug": "soc-leaders-face-evolving-operational-challenges-i-21f7e140",
    "title": "SOC Leaders Face Evolving Operational Challenges in 2027",
    "summary": "Security Operations Center and managed security service provider teams face mounting operational pressure from evolving attack techniques, rising alert volumes, and budget constraints. Complex threat environments and persistent staffing shortages hinder effective detection and investigation capabilities across enterprise environments. Security leaders must prioritize threat intelligence integration to enhance detection capabilities and streamline investigation workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/6-challenges-soc-leaders-should-turn-into-priorities-in-2027/",
    "publishedAt": "2026-11-04T18:07:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "soc-leaders-face-evolving-operational-challenges-i",
      "article-21f7e140",
      "21f7e140",
      "soc-leaders-face-evolving-operational-challenges-i-420e45",
      "soc-leaders-face-evolving-operational-challenges-in-2027"
    ]
  },
  {
    "slug": "french-blood-establishment-cold-room-cyberattack-96b7ee70",
    "title": "French Blood Establishment Cold Room Cyberattack",
    "summary": "A cyberattack targeted a refrigeration equipment provider serving the French Blood Establishment, causing temperature anomalies in three national blood bank cold rooms. Monitoring systems detected deviations and allowed operators to reverse parameter changes before any blood product was compromised. The incident did not compromise patient data or blood inventory.",
    "category": "Breach",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/cyberattack-disrupts-blood-storage-refrigeration-systems-in-france/",
    "publishedAt": "2026-11-04T18:02:56.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Help Net Security",
        "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/cyberattack-hits-french-blood-banks/"
      }
    ],
    "aliases": [
      "french-blood-establishment-cold-room-cyberattack",
      "article-96b7ee70",
      "96b7ee70",
      "french-blood-establishment-cold-room-cyberattack-5404e4"
    ]
  },
  {
    "slug": "msecure-urges-password-changes-without-disclosure-17b8d323",
    "title": "mSecure Urges Password Changes Without Disclosure",
    "summary": "mSecure has instructed users to change passwords across its application without publicly disclosing the underlying cause or confirming any data exposure. The advisory lacks technical specifics, making independent verification impossible. Users should treat the password reset as precautionary until official confirmation clarifies the scope and threat vector.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/data-breaches/2026/11/msecure-tells-users-to-change-passwords-but-wont-say-why",
    "publishedAt": "2026-11-04T17:02:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "msecure-urges-password-changes-without-disclosure",
      "article-17b8d323",
      "17b8d323",
      "msecure-urges-password-changes-without-disclosure-292774"
    ]
  },
  {
    "slug": "critical-rails-active-storage-flaw-enables-secret-6d6b01f1",
    "title": "Critical Rails Active Storage Flaw Enables Secret Theft",
    "summary": "A critical flaw in Ruby on Rails Active Storage lets unauthenticated users upload crafted images that cause the server to write arbitrary files. CVE‑2026‑116606 has a CVSS score of 9.8 and can also allow file reads when the Disk service is used. Rails has issued a patch that fixes the flaw; no workarounds exist, so update the framework immediately.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-ruby-on-rails-flaw/",
    "publishedAt": "2026-11-04T17:01:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "critical-rails-active-storage-flaw-enables-secret",
      "article-6d6b01f1",
      "6d6b01f1",
      "critical-rails-active-storage-flaw-enables-secret-2dc37b",
      "critical-rails-active-storage-flaw-enables-secret-theft"
    ]
  },
  {
    "slug": "debian-ubuntu-apt-flaw-enables-root-code-execution-3b3b7b41",
    "title": "Debian/Ubuntu APT Flaw Enables Root Code Execution",
    "summary": "A flaw in Debian and Ubuntu's APT package manager allows attackers to replace trusted packages with malicious ones during updates. Tracked as CVE-2026-109518, the vulnerability permits unauthenticated code execution with root privileges, potentially compromising entire Linux systems. Debian has released a patch; users should update APT to the latest version and verify package signatures.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/debian-and-ubuntu-apt-flaw-lets-mitm.html",
    "publishedAt": "2026-11-04T17:00:46.000Z",
    "cves": [
      "CVE-2026-109518"
    ],
    "additionalSources": [
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/debian-apt-flaw-lets-hackers-hijack-updates/"
      }
    ],
    "aliases": [
      "debian-ubuntu-apt-flaw-enables-root-code-execution",
      "article-3b3b7b41",
      "3b3b7b41",
      "debian-ubuntu-apt-flaw-enables-root-code-execution-784038"
    ]
  },
  {
    "slug": "sonicwall-gms-flaws-expose-files-alter-db-records-ffa93564",
    "title": "SonicWall GMS Flaws Expose Files, Alter DB Records",
    "summary": "CVE‑2026‑109593 exposes SonicWall GMS 9.5.2 and earlier to unauthenticated attackers who can read files and alter database records. The vulnerability arises from missing authentication checks, granting file read/write access; its CVSS score of 9.1 classifies it as critical. SonicWall will not patch these end‑of‑life systems, so administrators must disable exposed services or migrate to supported versions to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/sonicwall-wont-patch-eol-gms-flaws-that.html",
    "publishedAt": "2026-11-04T17:00:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sonicwall-gms-flaws-expose-files-alter-db-records",
      "article-ffa93564",
      "ffa93564",
      "sonicwall-gms-flaws-expose-files-alter-db-records-7430e3"
    ]
  },
  {
    "slug": "app-store-connect-3-3-1-patch-release-b35f72ec",
    "title": "App Store Connect 3.3.1 Patch Release",
    "summary": "Apple released App Store Connect 3.3.1 addressing multiple security vulnerabilities in its developer management platform. The update resolves flaws that could allow unauthorized access to sensitive store metadata and user account data. Organizations using the tool should immediately install the latest version to maintain secure operations.",
    "category": "General",
    "severity": "LOW",
    "source": "Apple Security Updates",
    "sourceUrl": "https://developer.apple.com/news/releases/?id=11042026a",
    "publishedAt": "2026-11-04T17:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "app-store-connect-3-3-1-patch-release",
      "article-b35f72ec",
      "b35f72ec",
      "app-store-connect-3-3-1-patch-release-68728a"
    ]
  },
  {
    "slug": "nikke-launcher-compromised-distributes-credential-c9c5c89b",
    "title": "NIKKE Launcher Compromised, Distributes Credential-Stealing Malware",
    "summary": "A supply‑chain compromise of the Goddess of Victory: NIKKE PC launcher distributed malware that steals credentials and cryptocurrency wallet data. The attackers tampered with launcher scripts, enabling remote access tools and credential‑stealing payloads, exposing user accounts and wallet keys to theft. Developers have issued a patched launcher and advise users to download the latest version and verify script integrity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/nikke-pc-game-launcher-hacked-to-spread-remote-access-data-stealing-malware/",
    "publishedAt": "2026-11-04T16:58:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nikke-launcher-compromised-distributes-credential",
      "article-c9c5c89b",
      "c9c5c89b",
      "nikke-launcher-compromised-distributes-credential-68d0d4",
      "nikke-launcher-compromised-distributes-credential-stealing-m"
    ]
  },
  {
    "slug": "twisted-imap-server-vulnerability-enables-resource-dbe3f525",
    "title": "Twisted IMAP Server Vulnerability Enables Resource Exhaustion DoS",
    "summary": "Twisted’s IMAP server mishandled wildcard patterns in mailbox list commands, letting an authenticated remote attacker trigger excessive resource consumption. The flaw can cause a denial of service by exhausting server memory or CPU, disrupting legitimate user access. Ubuntu’s USN-9000-1 patch corrects the wildcard handling logic; users should apply the update to mitigate DoS risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9000-1",
    "publishedAt": "2026-11-04T16:24:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "twisted-imap-server-vulnerability-enables-resource",
      "article-dbe3f525",
      "dbe3f525",
      "twisted-imap-server-vulnerability-enables-resource-7e89bb",
      "twisted-imap-server-vulnerability-enables-resource-exhaustio"
    ]
  },
  {
    "slug": "google-partners-disrupt-1-3m-device-xcpe-botnet-75329475",
    "title": "Google Partners Disrupt 1.3M-Device XCPE Botnet",
    "summary": "Google and partners dismantled the XCPE botnet that infected over 1.3 million Android set‑top boxes and IoT devices. The botnet used a backdoor to create a criminal infrastructure, enabling remote control and data exfiltration from compromised devices. Affected devices should be updated to the latest firmware, and security teams should monitor for anomalous traffic patterns.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/endpoint-security/google-13-million-device-strong-xcpe-botnet",
    "publishedAt": "2026-11-04T16:24:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-partners-disrupt-1-3m-device-xcpe-botnet",
      "article-75329475",
      "75329475",
      "google-partners-disrupt-1-3m-device-xcpe-botnet-7fc2b3"
    ]
  },
  {
    "slug": "rhsa-2026-95194-important-webkit2gtk3-security-upd-2e3087a7",
    "title": "RHSA-2026:95194: Important: webkit2gtk3 security update",
    "summary": "An update for webkit2gtk3 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. The vulnerability is tracked as CVE-2026-43871.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95194",
    "publishedAt": "2026-11-04T16:22:24.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95194-important-webkit2gtk3-security-upd",
      "article-2e3087a7",
      "2e3087a7",
      "rhsa-2026-95194-important-webkit2gtk3-security-upd-37d850",
      "rhsa-2026-95194-important-webkit2gtk3-security-update"
    ]
  },
  {
    "slug": "kyiv-independent-website-disrupted-by-suspected-ru-9418cb7f",
    "title": "Kyiv Independent Website Disrupted by Suspected Russian Attack",
    "summary": "A suspected Russian cyberattack disrupted the Kyiv Independent website, targeting Ukraine’s leading English-language news outlet. The incident may have exploited web application flaws or credential theft, but no exploitation details or data exfiltration have been confirmed. Security teams should monitor for phishing or credential reuse, apply vendor patches, and review access controls to mitigate future attacks.",
    "category": "Nation State",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/ukraine-kyiv-independent-cyberattack",
    "publishedAt": "2026-11-04T16:15:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kyiv-independent-website-disrupted-by-suspected-ru",
      "article-9418cb7f",
      "9418cb7f",
      "kyiv-independent-website-disrupted-by-suspected-ru-5cfd1a",
      "kyiv-independent-website-disrupted-by-suspected-russian-atta"
    ]
  },
  {
    "slug": "rhsa-2026-95241-important-bind-security-bug-fix-an-20f27ea2",
    "title": "RHSA-2026:95241: Important: bind security, bug fix, and enhancement update",
    "summary": "An update for bind is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. The vulnerability is tracked as CVE-2026-43871.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95241",
    "publishedAt": "2026-11-04T16:07:27.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95241-important-bind-security-bug-fix-an",
      "article-20f27ea2",
      "20f27ea2",
      "rhsa-2026-95241-important-bind-security-bug-fix-an-37d84d",
      "rhsa-2026-95241-important-bind-security-bug-fix-and-enhancem"
    ]
  },
  {
    "slug": "prompt-adware-discovered-in-openai-codex-jailbreak-71f7bc3a",
    "title": "Prompt Adware Discovered in OpenAI Codex Jailbreak Toolkit",
    "summary": "Check Point Research disclosed details of a malicious jailbreak bundle targeting OpenAI Codex configuration settings. Dubbed Haiou, the toolkit alters the artificial intelligence agent's trusted instructions to inject unauthorized advertisements for a third-party gateway. Security teams deploying artificial intelligence development environments must inspect custom agent configurations and remove untrusted jailbreak tools.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/researchers-uncover-prompt-adware.html",
    "publishedAt": "2026-11-04T16:06:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "prompt-adware-discovered-in-openai-codex-jailbreak",
      "article-71f7bc3a",
      "71f7bc3a",
      "prompt-adware-discovered-in-openai-codex-jailbreak-2e2173",
      "prompt-adware-discovered-in-openai-codex-jailbreak-toolkit"
    ]
  },
  {
    "slug": "rhsa-2026-95242-important-bind-security-bug-fix-an-c258a84e",
    "title": "RHSA-2026:95242: Important: bind security, bug fix, and enhancement update",
    "summary": "An update for bind is now available for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. The vulnerability is tracked as CVE-2026-43871.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95242",
    "publishedAt": "2026-11-04T16:04:40.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95242-important-bind-security-bug-fix-an",
      "article-c258a84e",
      "c258a84e",
      "rhsa-2026-95242-important-bind-security-bug-fix-an-37d84d",
      "rhsa-2026-95242-important-bind-security-bug-fix-and-enhancem"
    ]
  },
  {
    "slug": "msecure-users-urged-to-reset-passwords-after-breac-dd20b5eb",
    "title": "mSecure Users Urged to Reset Passwords After Breach",
    "summary": "mSeven Software warned mSecure password manager users to change passwords after a cyberattack exposed an encrypted customer database. The breach likely involved credential theft or database compromise, but the exact exploitation vector remains unclear, leaving the root cause uncertain. Users should reset passwords, revoke two‑factor authentication, remove passkeys, and monitor for suspicious activity while the vendor releases a patch.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/msecure-password-manager-hack-prompts-password-reset-warnings/",
    "publishedAt": "2026-11-04T16:00:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "msecure-users-urged-to-reset-passwords-after-breac",
      "article-dd20b5eb",
      "dd20b5eb",
      "msecure-users-urged-to-reset-passwords-after-breac-3124ab",
      "msecure-users-urged-to-reset-passwords-after-breach"
    ]
  },
  {
    "slug": "chromium-cve-2026-119270-improper-input-validation-be57d80e",
    "title": "Chromium CVE-2026-119270 Improper Input Validation",
    "summary": "Microsoft Edge incorporates a fix for Chromium CVE-2026-119270, an improper input validation flaw that could allow exploitation via crafted input. The vulnerability permits attackers to bypass input checks, potentially enabling code execution on affected systems. Microsoft recommends installing the latest Edge update, which includes the Chromium patch; users should also keep Chrome up to date.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119270",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [
      "CVE-2026-119270"
    ],
    "additionalSources": [],
    "aliases": [
      "chromium-cve-2026-119270-improper-input-validation",
      "article-be57d80e",
      "be57d80e",
      "chromium-cve-2026-119270-improper-input-validation-1fe8aa"
    ]
  },
  {
    "slug": "chromium-cve-2026-76024-memory-corruption-6233f5c8",
    "title": "Chromium CVE-2026-76024 Memory Corruption",
    "summary": "Microsoft Edge incorporates a fix for Chromium CVE-2026-76024, a memory corruption flaw that could allow exploitation via crafted input. The vulnerability permits attackers to corrupt memory, potentially leading to arbitrary code execution on affected systems. Microsoft recommends installing the latest Edge update, which includes the Chromium patch; users should also keep Chrome up to date.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-76024",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [
      "CVE-2026-76024"
    ],
    "additionalSources": [],
    "aliases": [
      "chromium-cve-2026-76024-memory-corruption",
      "article-6233f5c8",
      "6233f5c8",
      "chromium-cve-2026-76024-memory-corruption-744db7"
    ]
  },
  {
    "slug": "microsoft-edge-fixes-chromium-use-after-free-cve-2-1b52e126",
    "title": "Microsoft Edge Fixes Chromium Use‑After‑Free CVE‑2026‑76025",
    "summary": "Microsoft Edge (Chromium-based) is affected by a use‑after‑free flaw in Chromium, identified as CVE‑2026‑76025. The flaw stems from improper memory handling during object lifecycle, potentially enabling arbitrary code execution if exploited. Microsoft has released an update that incorporates Chromium's fix; users should install the latest Edge update or apply the patch from Chrome release notes.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-76025",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-edge-fixes-chromium-use-after-free-cve-2",
      "article-1b52e126",
      "1b52e126",
      "microsoft-edge-fixes-chromium-use-after-free-cve-2-744db7",
      "microsoft-edge-fixes-chromium-use-after-free-cve-2026-76025"
    ]
  },
  {
    "slug": "microsoft-edge-addresses-chromium-memory-corruptio-08e9a41a",
    "title": "Microsoft Edge Addresses Chromium Memory‑Corruption CVE‑2026‑76026",
    "summary": "Microsoft Edge (Chromium-based) is affected by a memory‑corruption flaw in Chromium, identified as CVE‑2026‑76026. The defect arises from improper handling of buffer boundaries during rendering, potentially allowing arbitrary code execution if exploited. Microsoft has released an update that incorporates Chromium's patch; users should install the latest Edge update or apply the Chrome release notes patch.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-76026",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-edge-addresses-chromium-memory-corruptio",
      "article-08e9a41a",
      "08e9a41a",
      "microsoft-edge-addresses-chromium-memory-corruptio-744db7",
      "microsoft-edge-addresses-chromium-memory-corruption-cve-2026"
    ]
  },
  {
    "slug": "chromium-use-after-free-cve-2026-119269-fixed-in-e-afbd46cb",
    "title": "Chromium Use‑After‑Free CVE‑2026‑119269 Fixed in Edge",
    "summary": "A use‑after‑free flaw identified as CVE‑2026‑119269 exists in Chromium, the engine powering Microsoft Edge (Chromium‑based). The flaw permits memory corruption that could enable arbitrary code execution, yet no exploitation or public PoC exists. Microsoft Edge incorporates the Chromium patch; users should update to the latest Edge or Chrome release, per Google Chrome’s release notes, to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119269",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chromium-use-after-free-cve-2026-119269-fixed-in-e",
      "article-afbd46cb",
      "afbd46cb",
      "chromium-use-after-free-cve-2026-119269-fixed-in-e-1fe8ab",
      "chromium-use-after-free-cve-2026-119269-fixed-in-edge"
    ]
  },
  {
    "slug": "microsoft-addresses-chromium-cve-2026-119271-use-a-04539ca4",
    "title": "Microsoft Addresses Chromium CVE-2026-119271 Use-After-Free",
    "summary": "Microsoft released a security update for Chromium CVE-2026-119271, a use‑after‑free flaw in Edge (Chromium‑based). The vulnerability could enable arbitrary code execution if exploited, but no active exploitation or public PoC has been reported. Edge users should apply the latest update via Windows Update or the Edge update channel to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119271",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [
      "CVE-2026-119271"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-addresses-chromium-cve-2026-119271-use-a",
      "article-04539ca4",
      "04539ca4",
      "microsoft-addresses-chromium-cve-2026-119271-use-a-1fe8aa",
      "microsoft-addresses-chromium-cve-2026-119271-use-after-free"
    ]
  },
  {
    "slug": "chromium-out-of-bounds-read-vulnerability-7a1be3c8",
    "title": "Chromium Out-of-Bounds Read Vulnerability",
    "summary": "Chromium out‑of‑bounds read flaw (CVE‑2026‑119272) affects Microsoft Edge (Chromium‑based) via its Chromium engine. The bug permits memory reads beyond bounds, exposing sensitive data, and is a high‑severity memory corruption vulnerability. Microsoft Edge resolves the issue by integrating the latest Chromium patch; users should update to the newest Edge release or review Google Chrome release notes.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119272",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chromium-out-of-bounds-read-vulnerability",
      "article-7a1be3c8",
      "7a1be3c8",
      "chromium-out-of-bounds-read-vulnerability-1fe8aa"
    ]
  },
  {
    "slug": "chromium-vulnerability-cve-2026-119265-causes-memo-7f308fa7",
    "title": "Chromium Vulnerability CVE-2026-119265 Causes Memory Corruption",
    "summary": "A memory corruption flaw, identified as CVE-2026-119265, affects Chromium components used by Microsoft Edge. The defect arises from improper handling of memory buffers, potentially allowing attackers to corrupt data or crash the browser; no exploitation reported. Microsoft Edge incorporates the fix via Chromium updates; users should install the latest Edge release or consult Google Chrome release notes.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119265",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [
      "CVE-2026-119265"
    ],
    "additionalSources": [],
    "aliases": [
      "chromium-vulnerability-cve-2026-119265-causes-memo",
      "article-7f308fa7",
      "7f308fa7",
      "chromium-vulnerability-cve-2026-119265-causes-memo-1fe8ab",
      "chromium-vulnerability-cve-2026-119265-causes-memory-corrupt"
    ]
  },
  {
    "slug": "chromium-vulnerability-cve-2026-119266-enables-use-98ba9934",
    "title": "Chromium Vulnerability CVE-2026-119266 Enables Use-After-Free",
    "summary": "A use‑after‑free flaw, CVE-2026-119266, targets Chromium code paths used by Microsoft Edge. The flaw arises from freeing memory before all references are cleared, potentially allowing attackers to execute arbitrary code or crash the browser; no exploitation reported. Microsoft Edge applies the fix through Chromium updates; users should upgrade to the latest Edge version or consult Google Chrome release notes.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119266",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [
      "CVE-2026-119266"
    ],
    "additionalSources": [],
    "aliases": [
      "chromium-vulnerability-cve-2026-119266-enables-use",
      "article-98ba9934",
      "98ba9934",
      "chromium-vulnerability-cve-2026-119266-enables-use-1fe8ab",
      "chromium-vulnerability-cve-2026-119266-enables-use-after-fre"
    ]
  },
  {
    "slug": "edge-addresses-chromium-memory-corruption-cve-2026-cc043ad6",
    "title": "Edge Addresses Chromium Memory Corruption CVE-2026-119267",
    "summary": "Microsoft Edge (Chromium-based) is affected by a memory corruption flaw, CVE-2026-119267, in Chromium. The flaw stems from improper bounds checking during memory allocation, potentially enabling arbitrary code execution if a malicious page is rendered, though no public exploit exists. Microsoft has fixed the issue in Edge; users should update or apply the patch referenced in Google Chrome releases.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119267",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [
      "CVE-2026-119267"
    ],
    "additionalSources": [],
    "aliases": [
      "edge-addresses-chromium-memory-corruption-cve-2026",
      "article-cc043ad6",
      "cc043ad6",
      "edge-addresses-chromium-memory-corruption-cve-2026-1fe8ab",
      "edge-addresses-chromium-memory-corruption-cve-2026-119267"
    ]
  },
  {
    "slug": "edge-addresses-chromium-integer-overflow-cve-2026-3322a0f5",
    "title": "Edge Addresses Chromium Integer Overflow CVE-2026-119268",
    "summary": "Microsoft Edge (Chromium-based) is affected by an integer overflow flaw, CVE-2026-119268, in Chromium. The overflow occurs during integer arithmetic, enabling memory corruption and code execution if a crafted page is processed, though no public exploit is known. Microsoft fixed the issue in Edge; users should update or apply the patch referenced in Google Chrome releases.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119268",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [
      "CVE-2026-119268"
    ],
    "additionalSources": [],
    "aliases": [
      "edge-addresses-chromium-integer-overflow-cve-2026",
      "article-3322a0f5",
      "3322a0f5",
      "edge-addresses-chromium-integer-overflow-cve-2026-1fe8ab",
      "edge-addresses-chromium-integer-overflow-cve-2026-119268"
    ]
  },
  {
    "slug": "chromium-improper-input-validation-cve-2026-119262-32d35b3e",
    "title": "Chromium Improper Input Validation CVE-2026-119262",
    "summary": "CVE-2026-119262 exposes improper input validation in Chromium, impacting Microsoft Edge (Chromium-based) through its Chromium engine. The flaw permits malformed input to bypass checks, potentially causing memory corruption or denial of service; no public exploit reported, CVSS undisclosed. Edge applies the fix via its Chromium update; users should install the latest release or consult Google Chrome release notes for patch details.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119262",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [
      "CVE-2026-119262"
    ],
    "additionalSources": [],
    "aliases": [
      "chromium-improper-input-validation-cve-2026-119262",
      "article-32d35b3e",
      "32d35b3e",
      "chromium-improper-input-validation-cve-2026-119262-1fe8ab"
    ]
  },
  {
    "slug": "chromium-memory-corruption-cve-2026-119263-f6963e32",
    "title": "Chromium Memory Corruption CVE-2026-119263",
    "summary": "CVE-2026-119263 exposes memory corruption in Chromium, impacting Microsoft Edge. Crafted input can corrupt memory, potentially causing crashes or RCE; no exploitation reported, CVSS undisclosed, and no evidence of exploitation in the wild. Edge applies the fix via its Chromium update; users should install the latest release or consult Chrome release notes for patch details.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119263",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [
      "CVE-2026-119263"
    ],
    "additionalSources": [],
    "aliases": [
      "chromium-memory-corruption-cve-2026-119263",
      "article-f6963e32",
      "f6963e32",
      "chromium-memory-corruption-cve-2026-119263-1fe8ab"
    ]
  },
  {
    "slug": "microsoft-edge-patches-upstream-chromium-memory-co-92e95873",
    "title": "Microsoft Edge Patches Upstream Chromium Memory Corruption Flaw",
    "summary": "Microsoft Edge received an update addressing a memory corruption flaw, identified as CVE-2026-119264, ingested from upstream Chromium components. The memory corruption vulnerability originated in Chrome, creating technical risks for Chromium-based browsers if left unpatched. Administrators and users should update Microsoft Edge to the latest build incorporating the upstream Google Chrome security patches.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119264",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [
      "CVE-2026-119264"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-edge-patches-upstream-chromium-memory-co",
      "article-92e95873",
      "92e95873",
      "microsoft-edge-patches-upstream-chromium-memory-co-1fe8ab",
      "microsoft-edge-patches-upstream-chromium-memory-corruption-f"
    ]
  },
  {
    "slug": "microsoft-edge-addresses-chromium-cve-2026-118309-a0636b28",
    "title": "Microsoft Edge addresses Chromium CVE-2026-118309",
    "summary": "Microsoft Edge (Chromium-based) incorporates a fix for CVE-2026-118309, a reference resolution flaw discovered in Chromium. The vulnerability allowed attackers to manipulate internal references, potentially leading to memory corruption or denial of service, but no public exploits have been disclosed. Edge users should install the latest update via Windows Update or the Microsoft Edge installer to ensure the patch is applied.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118309",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [
      "CVE-2026-118309"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-edge-addresses-chromium-cve-2026-118309",
      "article-a0636b28",
      "a0636b28",
      "microsoft-edge-addresses-chromium-cve-2026-118309-1fe91c"
    ]
  },
  {
    "slug": "microsoft-edge-addresses-chromium-cve-2026-119261-5ac699d0",
    "title": "Microsoft Edge addresses Chromium CVE-2026-119261",
    "summary": "Microsoft Edge (Chromium-based) includes a patch for CVE-2026-119261, an improper input validation flaw in Chromium. The flaw could allow attackers to supply crafted input that bypasses sanitization, potentially enabling arbitrary code execution, though no active exploits are known. Users should apply the latest Microsoft Edge update via Windows Update or the standalone installer to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119261",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [
      "CVE-2026-119261"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-edge-addresses-chromium-cve-2026-119261",
      "article-5ac699d0",
      "5ac699d0",
      "microsoft-edge-addresses-chromium-cve-2026-119261-1fe8ab"
    ]
  },
  {
    "slug": "microsoft-edge-fixes-chromium-reference-resolution-69d7c85f",
    "title": "Microsoft Edge Fixes Chromium Reference Resolution Flaw",
    "summary": "An incorrect reference resolution vulnerability in the Chromium rendering engine impacts Microsoft Edge. The defect allows attackers to manipulate pointer references during DOM traversal, potentially leading to memory corruption and arbitrary code execution. Microsoft issued an emergency patch to remediate this critical flaw. Users must update their browser to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118314",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-edge-fixes-chromium-reference-resolution",
      "article-69d7c85f",
      "69d7c85f",
      "microsoft-edge-fixes-chromium-reference-resolution-1fe91c",
      "microsoft-edge-fixes-chromium-reference-resolution-flaw"
    ]
  },
  {
    "slug": "microsoft-edge-patch-addresses-chromium-use-after-afe3991a",
    "title": "Microsoft Edge Patch Addresses Chromium Use‑After‑Free Vulnerability (CVE‑2026‑119260)",
    "summary": "Microsoft Edge users face a critical use‑after‑free flaw in the Chromium rendering engine, identified as CVE‑2026‑119260. The flaw permits attackers to execute arbitrary code within the renderer process, potentially compromising the entire browser session. Microsoft released an out‑of‑band patch and urges organizations to update Edge immediately to mitigate exploitation risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119260",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Microsoft MSRC",
        "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118321"
      }
    ],
    "aliases": [
      "microsoft-edge-patch-addresses-chromium-use-after",
      "article-afe3991a",
      "afe3991a",
      "microsoft-edge-patch-addresses-chromium-use-after-1fe8ab",
      "microsoft-edge-patch-addresses-chromium-use-after-free-vulne"
    ]
  },
  {
    "slug": "cisco-unified-cm-vulnerable-to-unauthenticated-xss-f2a268d1",
    "title": "Cisco Unified CM Vulnerable to Unauthenticated XSS",
    "summary": "A cross‑site scripting flaw in Cisco Unified Communications Manager’s web interface allows unauthenticated attackers to inject malicious scripts into user sessions. The flaw stems from insufficient input validation, letting attackers run arbitrary code in the browser and access sensitive data. Cisco released patches; administrators should apply them immediately as no workarounds exist.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-cucm-xss-5mQn2U5z?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DCisco+Unified+Communications+Manager+Cross-Site+Scripting+Vulnerability%26vs_k%3D1",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-unified-cm-vulnerable-to-unauthenticated-xss",
      "article-f2a268d1",
      "f2a268d1",
      "cisco-unified-cm-vulnerable-to-unauthenticated-xss-54284c"
    ]
  },
  {
    "slug": "cisco-ise-authorization-bypass-vulnerability-f438cbb6",
    "title": "Cisco ISE Authorization Bypass Vulnerability",
    "summary": "A flaw in Cisco ISE and ISE‑PIC lets unauthenticated remote attackers obtain endpoint identity certificates via crafted requests. The issue arises from missing authorization checks, and the CVE‑2026‑20241 advisory rates the impact as medium, publicly disclosed. Cisco released patches that address the vulnerability; no workarounds exist, so apply updates immediately.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-ise-cert-mE9BD5GO?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DCisco+Identity+Services+Engine+Authorization+Bypass+Vulnerability%26vs_k%3D1",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-ise-authorization-bypass-vulnerability",
      "article-f438cbb6",
      "f438cbb6",
      "cisco-ise-authorization-bypass-vulnerability-784285"
    ]
  },
  {
    "slug": "cisco-ucs-central-rce-vulnerability-664c1bb3",
    "title": "Cisco UCS Central RCE Vulnerability",
    "summary": "A flaw in Cisco UCS Central Software’s web interface lets authenticated remote attackers execute arbitrary code or disclose data via crafted HTTP requests. The issue stems from insufficient input validation, allowing code execution and file writes; no public exploit is known. Cisco has issued patches that fix the flaw, and no workarounds exist; apply updates promptly.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-cucs-rce-LzHSFRDQ?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DCisco+UCS+Central+Software+Remote+Code+Execution+Vulnerability%26vs_k%3D1",
    "publishedAt": "2026-11-04T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-ucs-central-rce-vulnerability",
      "article-664c1bb3",
      "664c1bb3",
      "cisco-ucs-central-rce-vulnerability-1695cc"
    ]
  },
  {
    "slug": "pillow-multiple-vulnerabilities-affect-image-proce-4e0f903b",
    "title": "Pillow Multiple Vulnerabilities Affect Image Processing Libraries",
    "summary": "Multiple vulnerabilities were discovered in Pillow, a popular Python imaging library. Issues include improper handling of map stride values in McIdas AREA image loading, inadequate decompression bomb checks for font files, and flawed filter size validation in rank filter implementations. These flaws can lead to information disclosure or denial-of-service conditions.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8999-1",
    "publishedAt": "2026-11-04T15:49:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pillow-multiple-vulnerabilities-affect-image-proce",
      "article-4e0f903b",
      "4e0f903b",
      "pillow-multiple-vulnerabilities-affect-image-proce-7fbb87",
      "pillow-multiple-vulnerabilities-affect-image-processing-libr"
    ]
  },
  {
    "slug": "chrome-beta-desktop-158-update-86a22153",
    "title": "Chrome Beta Desktop 158 Update",
    "summary": "Google Chrome Beta channel has been updated to version 158.0.8127.18 for Windows, Mac, and Linux platforms. This release includes partial changes documented in the Git log, with community bug reporting channels available for user feedback. The update represents a routine channel synchronization release without specific security vulnerability disclosures.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-beta-for-desktop-update.html",
    "publishedAt": "2026-11-04T15:43:33.511Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-beta-desktop-158-update",
      "article-86a22153",
      "86a22153",
      "chrome-beta-desktop-158-update-63271e"
    ]
  },
  {
    "slug": "rhsa-2026-95234-important-git-lfs-security-update-0fcf4d36",
    "title": "RHSA-2026:95234: Important: git-lfs security update",
    "summary": "An update for git-lfs is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95234",
    "publishedAt": "2026-11-04T15:42:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95234-important-git-lfs-security-update",
      "article-0fcf4d36",
      "0fcf4d36",
      "rhsa-2026-95234-important-git-lfs-security-update-37d84d"
    ]
  },
  {
    "slug": "usn-8998-1-squid-vulnerability-3f698384",
    "title": "USN-8998-1: Squid vulnerability",
    "summary": "It was discovered that Squid incorrectly handled certain HTTP Transfer- Encoding headers. An attacker could possibly use this issue to perform HTTP request smuggling attacks, bypass security mechanisms, or poison web caches.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8998-1",
    "publishedAt": "2026-11-04T15:32:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-8998-1-squid-vulnerability",
      "article-3f698384",
      "3f698384",
      "usn-8998-1-squid-vulnerability-7fbb8b"
    ]
  },
  {
    "slug": "usn-8997-1-net-snmp-vulnerability-7b785586",
    "title": "USN-8997-1: Net-SNMP vulnerability",
    "summary": "It was discovered that Net-SNMP incorrectly handled newly accepted connections in the SMUX module. An unauthenticated remote attacker could possibly use this issue to cause Net-SNMP to block indefinitely, resulting in a denial of service.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8997-1",
    "publishedAt": "2026-11-04T15:25:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-8997-1-net-snmp-vulnerability",
      "article-7b785586",
      "7b785586",
      "usn-8997-1-net-snmp-vulnerability-7fbb8f"
    ]
  },
  {
    "slug": "usn-7530-2-adodb-vulnerability-debdc786",
    "title": "USN-7530-2: ADOdb vulnerability",
    "summary": "USN-7530-1 fixed a vulnerability in ADOdb. This update provides the corresponding updates for Ubuntu 16.04 LTS, Ubuntu 18.04 LTS, Ubuntu 20.04 LTS, Ubuntu 22.04 LTS, and Ubuntu 24.04 LTS. Original advisory details: It was discovered that ADOdb incorrectly handled SQL input.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-7530-2",
    "publishedAt": "2026-11-04T15:14:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-7530-2-adodb-vulnerability",
      "article-debdc786",
      "debdc786",
      "usn-7530-2-adodb-vulnerability-7e5465"
    ]
  },
  {
    "slug": "chrome-beta-ios-158-release-559acb4d",
    "title": "Chrome Beta iOS 158 Release",
    "summary": "Google Chrome Beta channel has been updated to version 158.0.8127.13 for iOS, with availability on the App Store in coming days. The release includes partial changes documented in the Git log, alongside community bug reporting channels for user feedback. This is a routine channel synchronization release without specific security vulnerability disclosures.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-beta-for-ios-update.html",
    "publishedAt": "2026-11-04T15:13:33.229Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-beta-ios-158-release",
      "article-559acb4d",
      "559acb4d",
      "chrome-beta-ios-158-release-4c2878"
    ]
  },
  {
    "slug": "google-calendar-phishing-campaign-hijacks-sessions-6a1b1200",
    "title": "Google Calendar phishing campaign hijacks sessions, bypasses MFA",
    "summary": "A phishing campaign used Google Calendar invites, trusted redirects, and fake login pages to hijack corporate Google sessions and bypass MFA protections. Material Security examines how Operation CloudFire tracked the attacks, blocked malicious messages, and helped take down nearly 900 domains used by the attackers.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/google-calendar-phishing-campaign-hijacks-sessions-bypasses-mfa/",
    "publishedAt": "2026-11-04T15:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-calendar-phishing-campaign-hijacks-sessions",
      "article-6a1b1200",
      "6a1b1200",
      "google-calendar-phishing-campaign-hijacks-sessions-6a4a1e",
      "google-calendar-phishing-campaign-hijacks-sessions-bypasses-"
    ]
  },
  {
    "slug": "red-hat-updates-pki-core-in-rhel-7-e17623f9",
    "title": "Red Hat Updates PKI Core in RHEL 7",
    "summary": "Red Hat issued a security update for pki-core addressing security flaws in Red Hat Enterprise Linux 7 Extended Lifecycle Support. Red Hat Product Security rated the security impact of these vulnerabilities as important based on the Common Vulnerability Scoring System. System administrators are advised to apply the updated pki-core packages immediately to maintain enterprise system security.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95182",
    "publishedAt": "2026-11-04T14:44:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-pki-core-in-rhel-7",
      "article-e17623f9",
      "e17623f9",
      "red-hat-updates-pki-core-in-rhel-7-37d850"
    ]
  },
  {
    "slug": "red-hat-releases-jboss-eap-8-1-9-xp-6-0-7-ga-updat-79ca22b3",
    "title": "Red Hat Releases JBoss EAP 8.1.9 XP 6.0.7.GA Update",
    "summary": "Red Hat released JBoss Enterprise Application Platform 8.1.9 XP 6.0.7.GA to update the EAP 8.1.9 base. The update incorporates unspecified fixes and enhancements, as outlined in the release notes, but does not introduce new vulnerabilities. Security teams should apply the new version to maintain compatibility and benefit from the improvements.",
    "category": "General",
    "severity": "LOW",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95221",
    "publishedAt": "2026-11-04T14:44:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-jboss-eap-8-1-9-xp-6-0-7-ga-updat",
      "article-79ca22b3",
      "79ca22b3",
      "red-hat-releases-jboss-eap-8-1-9-xp-6-0-7-ga-updat-37d84d",
      "red-hat-releases-jboss-eap-8-1-9-xp-6-0-7-ga-update"
    ]
  },
  {
    "slug": "sonicwall-alerts-on-unpatched-gms-end-of-life-flaw-a34413db",
    "title": "SonicWall Alerts on Unpatched GMS End‑of‑Life Flaws",
    "summary": "SonicWall warned customers of two security flaws in its end‑of‑life Global Management System (GMS) that will not receive patches. The vulnerabilities, which remain unmitigated, could allow attackers to exploit the GMS platform, potentially enabling access or code execution, though no public exploit is reported. Security teams should decommission affected GMS instances or migrate to supported solutions to mitigate risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/sonicwall-warns-of-unpatched-flaws-in-end-of-life-gms-software/",
    "publishedAt": "2026-11-04T14:42:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sonicwall-alerts-on-unpatched-gms-end-of-life-flaw",
      "article-a34413db",
      "a34413db",
      "sonicwall-alerts-on-unpatched-gms-end-of-life-flaw-58371b",
      "sonicwall-alerts-on-unpatched-gms-end-of-life-flaws"
    ]
  },
  {
    "slug": "cycurion-launches-habit-soc-tool-a28410c8",
    "title": "Cycurion Launches Habit SOC Tool",
    "summary": "Cycurion introduced Habit, an AI‑driven security operations center platform designed to identify threats before they disrupt operations. Habit learns normal behavior across identities, devices, and workloads, then actively seeks deviations, enabling proactive detection of anomalous activity. The launch positions Cycurion as a predictive cybersecurity company, leveraging a team of former U.S. Intelligence Community and private‑sector experts.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/cycurion-habit/",
    "publishedAt": "2026-11-04T14:40:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cycurion-launches-habit-soc-tool",
      "article-a28410c8",
      "a28410c8",
      "cycurion-launches-habit-soc-tool-311fbd"
    ]
  },
  {
    "slug": "apt29-targets-mobile-devices-using-patched-exploit-fc26991b",
    "title": "APT29 Targets Mobile Devices Using Patched Exploits",
    "summary": "Russian threat group APT29 is targeting iOS and Android users using watering hole attacks delivered through compromised websites and lookalike domains. According to a report by Sekoia, the operation utilizes n-day exploits for patched vulnerabilities to steal user cookies, messages, and Wi-Fi passwords. Security teams should enforce immediate mobile OS updates and restrict access to unverified external web resources.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/apt29-watering-hole-mobile-devices-n-day-exploits/",
    "publishedAt": "2026-11-04T14:38:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apt29-targets-mobile-devices-using-patched-exploit",
      "article-fc26991b",
      "fc26991b",
      "apt29-targets-mobile-devices-using-patched-exploit-50e3aa",
      "apt29-targets-mobile-devices-using-patched-exploits"
    ]
  },
  {
    "slug": "sysdig-enhances-runtime-security-for-ai-agents-a1f1297a",
    "title": "Sysdig Enhances Runtime Security for AI Agents",
    "summary": "Sysdig expanded its platform to provide runtime visibility and governance for AI agents, tracking their actions before reaching production systems. The new capability blocks risky behavior by monitoring AI agent activity, enabling security teams to intervene proactively. Organizations can integrate Sysdig’s runtime controls to enforce compliance and reduce the attack surface of AI workloads.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/sysdig-adds-runtime-security-and-governance-for-ai-agents/",
    "publishedAt": "2026-11-04T14:34:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sysdig-enhances-runtime-security-for-ai-agents",
      "article-a1f1297a",
      "a1f1297a",
      "sysdig-enhances-runtime-security-for-ai-agents-118982"
    ]
  },
  {
    "slug": "red-hat-patches-important-flaw-in-pki-core-3baaaed8",
    "title": "Red Hat Patches Important Flaw in PKI Core",
    "summary": "Red Hat released a security update addressing a vulnerability in the pki-core module for Red Hat Enterprise Linux 8.4 extended support editions. Tracked as CVE-2026-43871, the flaw carries an Important severity rating assigned by Red Hat Product Security. Administrators must apply the updated pki-core:10.6 packages to affected systems to maintain system integrity and security.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95181",
    "publishedAt": "2026-11-04T14:34:44.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "red-hat-patches-important-flaw-in-pki-core",
      "article-3baaaed8",
      "3baaaed8",
      "red-hat-patches-important-flaw-in-pki-core-37d850"
    ]
  },
  {
    "slug": "descope-envoy-ai-agent-authentication-5967a76b",
    "title": "Descope Envoy AI Agent Authentication",
    "summary": "Descope announced Envoy, a capability enabling personal AI agents to receive delegated sign-in paths within consumer applications alongside existing authentication flows. Consumer companies can now treat agents as first-class users with dedicated identities and permission structures without rebuilding identity infrastructure. Launch partners include GoFundMe, You.com, GoodRx, and Composio.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/descope-envoy/",
    "publishedAt": "2026-11-04T14:31:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "descope-envoy-ai-agent-authentication",
      "article-5967a76b",
      "5967a76b",
      "descope-envoy-ai-agent-authentication-6d8729"
    ]
  },
  {
    "slug": "apt29-watering-hole-campaign-targets-ios-and-andro-d740d667",
    "title": "APT29 Watering Hole Campaign Targets iOS and Android Users",
    "summary": "APT29 conducted a large-scale watering hole campaign targeting iOS and Android users via compromised websites, fake domains, and a supply chain attack involving the Ukrainian web analytics service Plerdy SEO Tracker. The injected JavaScript code collects browser and device attributes to deliver exploits. Organizations should monitor for anomalous traffic patterns originating from compromised third-party services.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/apt29-linked-hackers-hijack-web.html",
    "publishedAt": "2026-11-04T14:27:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apt29-watering-hole-campaign-targets-ios-and-andro",
      "article-d740d667",
      "d740d667",
      "apt29-watering-hole-campaign-targets-ios-and-andro-493d8c",
      "apt29-watering-hole-campaign-targets-ios-and-android-users"
    ]
  },
  {
    "slug": "barracuda-esg-auth-bypass-enables-root-access-027a29b3",
    "title": "Barracuda ESG Auth Bypass Enables Root Access",
    "summary": "Barracuda’s Email Security Gateway appliances have an authentication bypass that can be chained with a command injection flaw to gain root privileges. The flaw, CVE-2026-116606, permits attackers to execute arbitrary commands after authenticating with weak credentials. Barracuda has issued a patch; administrators should apply it immediately and enforce strong authentication.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/barracuda-email-security-gateway-authentication-bypass-opens-path-to-root/",
    "publishedAt": "2026-11-04T14:24:54.000Z",
    "cves": [
      "CVE-2026-116606"
    ],
    "additionalSources": [],
    "aliases": [
      "barracuda-esg-auth-bypass-enables-root-access",
      "article-027a29b3",
      "027a29b3",
      "barracuda-esg-auth-bypass-enables-root-access-77e93a"
    ]
  },
  {
    "slug": "blueflag-security-adds-developer-identity-controls-756cf508",
    "title": "BlueFlag Security Adds Developer Identity Controls",
    "summary": "BlueFlag Security expanded its AI Agent Governance platform to fully map access, behavior and oversight of both approved and shadow AI agents operating under developer identities. The platform now offers automated risk remediation across the software development lifecycle, enabling organizations to govern all aspects of AI agents and their relationships with human and machine identities.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/blueflag-ai-agent-governance/",
    "publishedAt": "2026-11-04T14:22:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "blueflag-security-adds-developer-identity-controls",
      "article-756cf508",
      "756cf508",
      "blueflag-security-adds-developer-identity-controls-34fe1d"
    ]
  },
  {
    "slug": "automation-needed-as-incidents-outpace-manual-resp-a018221d",
    "title": "Automation Needed as Incidents Outpace Manual Response",
    "summary": "An industry article argues that fully autonomous communication processes may outpace current incident response capabilities, stressing the need for automation. The piece notes that automating information updates could reduce manual pressure, but organizations must ensure readiness for rapid incident evolution. Security teams should evaluate automation tools, establish clear escalation paths, and test response workflows to maintain operational resilience.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/incidents-move-fast-pen-paper",
    "publishedAt": "2026-11-04T14:17:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "automation-needed-as-incidents-outpace-manual-resp",
      "article-a018221d",
      "a018221d",
      "automation-needed-as-incidents-outpace-manual-resp-1449a4",
      "automation-needed-as-incidents-outpace-manual-response"
    ]
  },
  {
    "slug": "citrix-expands-ai-agent-governance-controls-d700f5d9",
    "title": "Citrix Expands AI Agent Governance Controls",
    "summary": "Citrix announced new capabilities across its SecurSpaces, SecurAccess and Platform Flex products to help organizations securely deploy AI agents and govern AI-powered work. The updates include expanded persona support in SecurSpaces, new AI governance features in SecurAccess, and a credit-based consumption model.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/citrix-ai-governance-capabilities/",
    "publishedAt": "2026-11-04T14:13:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "citrix-expands-ai-agent-governance-controls",
      "article-d700f5d9",
      "d700f5d9",
      "citrix-expands-ai-agent-governance-controls-63b21e"
    ]
  },
  {
    "slug": "chrome-beta-158-for-android-released-with-updates-a58caa23",
    "title": "Chrome Beta 158 for Android Released with Updates",
    "summary": "Google released Chrome Beta 158 for Android, updating the browser to version 158.0.8127.22 and adding new features. The update includes bug fixes, performance improvements, and web platform enhancements, with developers encouraged to report issues via the bug tracking system. Users can install the beta build from Google Play, and security teams should monitor for regressions or compatibility problems during rollout.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-beta-for-android-update.html",
    "publishedAt": "2026-11-04T14:13:32.334Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-beta-158-for-android-released-with-updates",
      "article-a58caa23",
      "a58caa23",
      "chrome-beta-158-for-android-released-with-updates-19b1e0"
    ]
  },
  {
    "slug": "sentra-secures-150m-funding-for-agentic-security-1f6e4b0f",
    "title": "Sentra Secures $150M Funding for Agentic Security",
    "summary": "Sentra, an agentic data security firm, announced a $150 million funding round to accelerate its agentic security platform. The capital will support development of AI‑driven data protection capabilities and expand the company’s go‑to‑market organization. Investors expect the infusion to drive broader adoption of agentic security solutions across enterprises in the next fiscal year.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/agentic-data-security-firm-sentra-raises-150-million/",
    "publishedAt": "2026-11-04T14:09:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sentra-secures-150m-funding-for-agentic-security",
      "article-1f6e4b0f",
      "1f6e4b0f",
      "sentra-secures-150m-funding-for-agentic-security-4999e7"
    ]
  },
  {
    "slug": "isc2-cissp-exam-prep-live-q-a-session-84c6a108",
    "title": "ISC2 CISSP Exam Prep Live Q&A Session",
    "summary": "ISC2 is hosting a live Q&A session on November 6, 2026 at 7:00pm CET to help candidates prepare for the CISSP exam. A panel of experts will cover exam domains, foundational cybersecurity knowledge, vendor-neutral certification value, and training resources. This is an educational event with no security implications.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/isc2-cissp-exam-prep-webinar/",
    "publishedAt": "2026-11-04T14:00:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isc2-cissp-exam-prep-live-q-a-session",
      "article-84c6a108",
      "84c6a108",
      "isc2-cissp-exam-prep-live-q-a-session-1284a5"
    ]
  },
  {
    "slug": "beget-cloud-data-wiped-in-russian-hosting-attack-f63508ba",
    "title": "Beget Cloud Data Wiped in Russian Hosting Attack",
    "summary": "A cyberattack destroyed data across Beget's cloud infrastructure, affecting hundreds of websites. The assault likely leveraged undisclosed vulnerabilities or credential compromise, causing irreversible data loss and service outages. Beget is working to restore services and investigate the breach, while customers should verify backups and monitor for suspicious activity in the coming weeks.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/russia-cyberattack-beget-cloud",
    "publishedAt": "2026-11-04T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "beget-cloud-data-wiped-in-russian-hosting-attack",
      "article-f63508ba",
      "f63508ba",
      "beget-cloud-data-wiped-in-russian-hosting-attack-254478"
    ]
  },
  {
    "slug": "cloudflare-enables-control-over-personal-ai-agents-f552ccc0",
    "title": "Cloudflare Enables Control Over Personal AI Agents",
    "summary": "Cloudflare introduces new visibility and control features for personal AI agents interacting with websites. The update addresses concerns over automated traffic masquerading as human users, potentially skewing analytics and security policies. Site owners can now monitor agent activity, set access rules, and mitigate risks associated with automated traffic in real time.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/personal-agents-visibility-control/",
    "publishedAt": "2026-11-04T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-enables-control-over-personal-ai-agents",
      "article-f552ccc0",
      "f552ccc0",
      "cloudflare-enables-control-over-personal-ai-agents-12ad5e"
    ]
  },
  {
    "slug": "the-sandbox-fights-back-joe-security-launches-adap-ac724a59",
    "title": "The Sandbox Fights Back: Joe Security Launches Adaptive Detonation",
    "summary": "Reinach, Switzerland, November 4th, 2026, CyberNewswire AI agents help Joe Sandbox uncover malicious behavior concealed by evasion techniques and unmet execution conditions. Joe Security‘s Adaptive Detonation brings active intervention to malware analysis, helping security teams investigate threats that may conceal their behavior during an initial sandbox run.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/the-sandbox-fights-back-joe-security-launches-adaptive-detonation/",
    "publishedAt": "2026-11-04T13:56:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "the-sandbox-fights-back-joe-security-launches-adap",
      "article-ac724a59",
      "ac724a59",
      "the-sandbox-fights-back-joe-security-launches-adap-1b41a7",
      "the-sandbox-fights-back-joe-security-launches-adaptive-deton"
    ]
  },
  {
    "slug": "fake-windows-alerts-hosted-on-azure-target-80-orga-b5c20d51",
    "title": "Fake Windows Alerts Hosted on Azure Target 80 Organizations",
    "summary": "Scammers are hosting fake Windows security alert landing pages on Microsoft Azure to pressure users into calling fraudulent support numbers. Between March and October 2026, the same fake support kit reached users at 80 organizations, with new pages appearing daily as of November 2. This campaign relies entirely on social engineering rather than technical exploitation.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/scammers-use-microsoft-azure/",
    "publishedAt": "2026-11-04T13:52:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fake-windows-alerts-hosted-on-azure-target-80-orga",
      "article-b5c20d51",
      "b5c20d51",
      "fake-windows-alerts-hosted-on-azure-target-80-orga-108a31",
      "fake-windows-alerts-hosted-on-azure-target-80-organizations"
    ]
  },
  {
    "slug": "europe-wide-cyberattacks-alter-blood-refrigeration-3dbb4a86",
    "title": "Europe-Wide Cyberattacks Alter Blood Refrigeration Controls",
    "summary": "A wave of cyberattacks targeting refrigeration equipment providers across Europe altered temperature controls at three French national blood service sites this week. Monitoring systems detected and reversed the parameter changes in time, preventing potential damage to stored blood products. No direct compromise of blood inventory or patient data occurred.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/france-cyberattack-blood-refrigeration",
    "publishedAt": "2026-11-04T13:45:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "europe-wide-cyberattacks-alter-blood-refrigeration",
      "article-3dbb4a86",
      "3dbb4a86",
      "europe-wide-cyberattacks-alter-blood-refrigeration-b36cb8",
      "europe-wide-cyberattacks-alter-blood-refrigeration-controls"
    ]
  },
  {
    "slug": "usn-8996-1-apt-vulnerability-74755c53",
    "title": "USN-8996-1: APT vulnerability",
    "summary": "Max Justicz discovered that APT incorrectly handled hard links when encountering redirects and retrying package downloads. A remote on-path attacker could possibly use this issue to trick APT into installing an unverified package and achieve remote code execution with root privileges.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8996-1",
    "publishedAt": "2026-11-04T13:37:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-8996-1-apt-vulnerability",
      "article-74755c53",
      "74755c53",
      "usn-8996-1-apt-vulnerability-7fbb92"
    ]
  },
  {
    "slug": "red-hat-issues-dnsmasq-patch-for-cve-2026-43871-on-cf60773e",
    "title": "Red Hat Issues dnsmasq Patch for CVE-2026-43871 on RHEL 9.2 and 9.4",
    "summary": "Red Hat has issued a security update for dnsmasq on RHEL 9.2 and 9.4, addressing CVE-2026-43871. The flaw is a buffer overflow in the DHCP packet parser that allows local attackers to gain elevated privileges. Administrators should apply the patch immediately and verify the new firmware version on all affected hosts.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95088",
    "publishedAt": "2026-11-04T13:30:26.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [
      {
        "source": "Red Hat Security Advisories",
        "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95093"
      }
    ],
    "aliases": [
      "red-hat-issues-dnsmasq-patch-for-cve-2026-43871-on",
      "article-cf60773e",
      "cf60773e",
      "red-hat-issues-dnsmasq-patch-for-cve-2026-43871-on-37d854",
      "red-hat-issues-dnsmasq-patch-for-cve-2026-43871-on-rhel-9-2-"
    ]
  },
  {
    "slug": "critical-solarwinds-dameware-flaw-could-allow-atta-aab9c8f6",
    "title": "Critical SolarWinds Dameware Flaw Could Allow Attackers to Compromise Remote Systems",
    "summary": "SolarWinds has warned about a critical command injection flaw in its Dameware remote support software. It is tracked as CVE-2026-28336 and carries a severity score of 9.9 out of 10. The bug could let an attacker take over a computer that an IT team is controlling remotely.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-solarwinds-dameware-flaw/",
    "publishedAt": "2026-11-04T13:30:17.000Z",
    "cves": [
      "CVE-2026-28336"
    ],
    "additionalSources": [],
    "aliases": [
      "critical-solarwinds-dameware-flaw-could-allow-atta",
      "article-aab9c8f6",
      "aab9c8f6",
      "critical-solarwinds-dameware-flaw-could-allow-atta-69d0cd",
      "critical-solarwinds-dameware-flaw-could-allow-attackers-to-c"
    ]
  },
  {
    "slug": "cr-dit-mutuel-ark-a-confirms-cyberattack-linked-to-9994ed27",
    "title": "Crédit Mutuel Arkéa Confirms Cyberattack Linked to $133M Theft",
    "summary": "A cyberattack on French bank Crédit Mutuel Arkéa enabled fraudulent transactions, the bank confirmed. The breach exploited weaknesses to manipulate payment systems, but the bank reports containment and no confirmed loss of customer assets; linked to reported $133 million cryptocurrency theft. Crédit Mutuel Arkéa notified regulators, is restoring operations, and stresses the need for stronger transaction monitoring and security controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/credit-mutuel-arkea-confirms-cyberattack/",
    "publishedAt": "2026-11-04T13:29:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cr-dit-mutuel-ark-a-confirms-cyberattack-linked-to",
      "article-9994ed27",
      "9994ed27",
      "cr-dit-mutuel-ark-a-confirms-cyberattack-linked-to-a7a257",
      "cr-dit-mutuel-ark-a-confirms-cyberattack-linked-to-133m-thef"
    ]
  },
  {
    "slug": "classic-cgi-email-script-vulnerability-exploited-f-bdfc975e",
    "title": "Classic CGI Email Script Vulnerability Exploited for Code Execution",
    "summary": "The blog revisits CVE-2000-0411, a CGI-bin script flaw that allowed attackers to manipulate email parameters and leak environment variables. The vulnerability enabled arbitrary code execution when parameters were passed directly to the sendmail binary, facilitating spam and potential system compromise. Modern web servers should disable CGI scripts, enforce strict input validation, and apply current security patches to prevent similar exploits.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33488",
    "publishedAt": "2026-11-04T13:24:13.000Z",
    "cves": [
      "CVE-2000-0411"
    ],
    "additionalSources": [],
    "aliases": [
      "classic-cgi-email-script-vulnerability-exploited-f",
      "article-bdfc975e",
      "bdfc975e",
      "classic-cgi-email-script-vulnerability-exploited-f-57dd7e",
      "classic-cgi-email-script-vulnerability-exploited-for-code-ex"
    ]
  },
  {
    "slug": "red-hat-service-interconnect-2-2-4-container-image-641bff09",
    "title": "Red Hat Service Interconnect 2.2.4 Container Images Released",
    "summary": "Red Hat publishes Service Interconnect 2.2.4 container images for OpenShift, providing updated components for service mesh integration. The release includes minor bug fixes and performance improvements, with no security vulnerabilities disclosed or CVEs assigned. Users should pull the new images from the Red Hat registry and update their OpenShift deployments to benefit from the enhancements.",
    "category": "General",
    "severity": "LOW",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95058",
    "publishedAt": "2026-11-04T13:15:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-service-interconnect-2-2-4-container-image",
      "article-641bff09",
      "641bff09",
      "red-hat-service-interconnect-2-2-4-container-image-37d854",
      "red-hat-service-interconnect-2-2-4-container-images-released"
    ]
  },
  {
    "slug": "us-indicts-two-canadians-for-university-hacks-eb6e8410",
    "title": "US Indicts Two Canadians for University Hacks",
    "summary": "A federal grand jury indicted two Canadians for hacking multiple U.S. universities. The attackers allegedly exploited system vulnerabilities to gain access and subsequently mined cryptocurrency using the compromised resources. The indictment underscores the need for universities to strengthen security controls and monitor for illicit mining activity in the coming months.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/us-charges-two-canadians-accused-of-hacking-us-universities/",
    "publishedAt": "2026-11-04T13:13:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "us-indicts-two-canadians-for-university-hacks",
      "article-eb6e8410",
      "eb6e8410",
      "us-indicts-two-canadians-for-university-hacks-3ff19a"
    ]
  },
  {
    "slug": "rhsa-2026-95086-important-tesseract-security-updat-cc8229db",
    "title": "RHSA-2026:95086: Important: tesseract security update",
    "summary": "An update for tesseract is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95086",
    "publishedAt": "2026-11-04T13:12:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95086-important-tesseract-security-updat",
      "article-cc8229db",
      "cc8229db",
      "rhsa-2026-95086-important-tesseract-security-updat-37d854",
      "rhsa-2026-95086-important-tesseract-security-update"
    ]
  },
  {
    "slug": "barracuda-flaws-enable-authentication-bypass-and-r-0a890021",
    "title": "Barracuda flaws enable authentication bypass and root access",
    "summary": "Barracuda disclosed two critical flaws (CVE-2026-116606, CVE-2026-116607) that let attackers bypass authentication and gain root. Exploitation needs access to the device’s admin interface, making exposed management systems a key risk, though no public PoC exists. Barracuda urges applying the firmware patch and disabling remote management until the update is installed to block privilege escalation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-barracuda-security-flaws/",
    "publishedAt": "2026-11-04T13:07:41.000Z",
    "cves": [
      "CVE-2026-116606",
      "CVE-2026-116607"
    ],
    "additionalSources": [],
    "aliases": [
      "barracuda-flaws-enable-authentication-bypass-and-r",
      "article-0a890021",
      "0a890021",
      "barracuda-flaws-enable-authentication-bypass-and-r-57a9d8",
      "barracuda-flaws-enable-authentication-bypass-and-root-access"
    ]
  },
  {
    "slug": "node-js-schedules-high-severity-security-fixes-for-10ca6f84",
    "title": "Node.js Schedules High-Severity Security Fixes for 22.x, 24.x, and 26.x Release Lines",
    "summary": "The Node.js project has scheduled security updates for its 22.x, 24.x, and 26.x release lines on or shortly after Wednesday, November 11, 2026. The announcement gives developers and system administrators time to prepare for patches addressing HIGH-rated vulnerabilities across all three branches.",
    "category": "General",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/node-js-schedules-patch/",
    "publishedAt": "2026-11-04T12:59:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "node-js-schedules-high-severity-security-fixes-for",
      "article-10ca6f84",
      "10ca6f84",
      "node-js-schedules-high-severity-security-fixes-for-4cf1ad",
      "node-js-schedules-high-severity-security-fixes-for-22-x-24-x"
    ]
  },
  {
    "slug": "impart-launches-runtime-defense-harness-for-virtua-e39e09b0",
    "title": "Impart Launches Runtime Defense Harness for Virtual Patching",
    "summary": "Impart Security released the Runtime Defense Harness, an AI-driven environment where agents generate and test virtual patches for new vulnerabilities without deploying models into live traffic. The platform enforces deterministic code after engineer approval, providing tested patches within 60 minutes of a vulnerability disclosure. This approach addresses the growing gap between exploit publication and available fixes.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/impart-security-runtime-defense-harness/",
    "publishedAt": "2026-11-04T12:48:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "impart-launches-runtime-defense-harness-for-virtua",
      "article-e39e09b0",
      "e39e09b0",
      "impart-launches-runtime-defense-harness-for-virtua-6cd317",
      "impart-launches-runtime-defense-harness-for-virtual-patching"
    ]
  },
  {
    "slug": "ai-token-theft-drives-workos-northflank-trigger-de-5721376b",
    "title": "AI Token Theft Drives WorkOS, Northflank, Trigger.dev Breaches",
    "summary": "Hackers harvested AI access tokens from WorkOS, Northflank, and Trigger.dev, exploiting automated attack tools in the past month. The attacks leveraged AI‑assisted offensive frameworks, enabling rapid credential reuse and lateral movement across cloud services. Security teams should revoke exposed tokens, enforce multi‑factor authentication, and monitor for anomalous API usage continuously.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/ai-linked-breaches-mount-as-workos-northflank-trigger-dev-disclose-hacks/",
    "publishedAt": "2026-11-04T12:43:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-token-theft-drives-workos-northflank-trigger-de",
      "article-5721376b",
      "5721376b",
      "ai-token-theft-drives-workos-northflank-trigger-de-6c6b5a",
      "ai-token-theft-drives-workos-northflank-trigger-dev-breaches"
    ]
  },
  {
    "slug": "red-hat-kernel-patch-addresses-cve-2026-43871-05ee7afe",
    "title": "Red Hat Kernel Patch Addresses CVE-2026-43871",
    "summary": "Red Hat released a kernel update for RHEL 8 to address CVE-2026-43871, a flaw that could allow privilege escalation or remote code execution. The vulnerability, rated Important by Product Security, has a CVSS base score listed but no active exploitation reported. The patch is available through standard RHEL 8 update channels; administrators should apply it promptly to mitigate potential exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95097",
    "publishedAt": "2026-11-04T12:33:52.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [
      {
        "source": "Red Hat Security Advisories",
        "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95212"
      }
    ],
    "aliases": [
      "red-hat-kernel-patch-addresses-cve-2026-43871",
      "article-05ee7afe",
      "05ee7afe",
      "red-hat-kernel-patch-addresses-cve-2026-43871-37d854"
    ]
  },
  {
    "slug": "rhsa-2026-95100-important-kernel-rt-security-bug-f-af2328e6",
    "title": "RHSA-2026:95100: Important: kernel-rt security, bug fix, and enhancement update",
    "summary": "An update for kernel-rt is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95100",
    "publishedAt": "2026-11-04T12:29:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95100-important-kernel-rt-security-bug-f",
      "article-af2328e6",
      "af2328e6",
      "rhsa-2026-95100-important-kernel-rt-security-bug-f-37d851",
      "rhsa-2026-95100-important-kernel-rt-security-bug-fix-and-enh"
    ]
  },
  {
    "slug": "canadian-hacker-extradited-to-us-for-school-crypto-f00d8d3d",
    "title": "Canadian hacker extradited to US for school cryptomining",
    "summary": "Two suspects were identified in a 2016 case involving illicit cryptomining on computers at U.S. educational institutions across at least four states. The suspects have been extradited to the United States to face charges related to unauthorized use of computing resources for cryptocurrency mining. This case highlights the persistent threat of cryptojacking targeting educational infrastructure.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/canadian-extradited-to-us-over-cryptomining-hacks-on-university-supercomputers/",
    "publishedAt": "2026-11-04T12:27:58.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "The Record",
        "sourceUrl": "https://therecord.media/canadian-nationals-accused-us-education-hacks-cryptomining"
      }
    ],
    "aliases": [
      "canadian-hacker-extradited-to-us-for-school-crypto",
      "article-f00d8d3d",
      "f00d8d3d",
      "canadian-hacker-extradited-to-us-for-school-crypto-6801ca",
      "canadian-hacker-extradited-to-us-for-school-cryptomining"
    ]
  },
  {
    "slug": "google-chrome-157-resolves-213-security-flaws-0dd5bbe7",
    "title": "Google Chrome 157 Resolves 213 Security Flaws",
    "summary": "Google released Chrome version 157 to resolve 213 security issues impacting the web browser application. The update fixes seven critical severity vulnerabilities that could potentially allow remote attackers to compromise vulnerable systems. Users are advised to manually check their browser version settings and immediately install the latest software patch to mitigate potential exploitation risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/bugs/2026/11/chrome-157-fixes-213-security-issues-including-7-critical-flaws",
    "publishedAt": "2026-11-04T12:16:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-chrome-157-resolves-213-security-flaws",
      "article-0dd5bbe7",
      "0dd5bbe7",
      "google-chrome-157-resolves-213-security-flaws-7873dd"
    ]
  },
  {
    "slug": "rails-flaw-enables-arbitrary-file-write-via-imagem-aa5f8d5c",
    "title": "Rails Flaw Enables Arbitrary File Write via ImageMagick",
    "summary": "A critical Rails flaw lets unauthenticated attackers write arbitrary files by uploading crafted ImageMagick files. The flaw resides in Active Storage’s ImageMagick processing, enabling remote code execution with CVSS 9.8 and public PoC. Rails patched the issue in 8.1.4.1 and 8.0.5.2; admins should upgrade and verify upload security.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/critical-rails-flaw-lets-attackers.html",
    "publishedAt": "2026-11-04T12:07:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rails-flaw-enables-arbitrary-file-write-via-imagem",
      "article-aa5f8d5c",
      "aa5f8d5c",
      "rails-flaw-enables-arbitrary-file-write-via-imagem-3c54d2",
      "rails-flaw-enables-arbitrary-file-write-via-imagemagick"
    ]
  },
  {
    "slug": "cisa-adds-one-known-exploited-vulnerability-to-cat-ab5f1960",
    "title": "CISA Adds One Known Exploited Vulnerability to Catalog",
    "summary": "CISA has added one new vulnerability to its Known Exploited Vulnerabilities (KEV) Catalog , based on evidence of active exploitation. CVE-2024-27834 Apple Multiple Products Improper Authentication Vulnerability This type of vulnerability is a frequent attack vector for malicious cyber actors and poses significant risks to the federal enterprise. CISA will continue to add vulnerabilities to the catalog that meet the specified criteria .",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/11/04/cisa-adds-one-known-exploited-vulnerability-catalog",
    "publishedAt": "2026-11-04T12:00:00.000Z",
    "cves": [
      "CVE-2024-27834"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-one-known-exploited-vulnerability-to-cat",
      "article-ab5f1960",
      "ab5f1960",
      "cisa-adds-one-known-exploited-vulnerability-to-cat-3fd10f",
      "cisa-adds-one-known-exploited-vulnerability-to-catalog"
    ]
  },
  {
    "slug": "rhsa-2026-95064-important-flatpak-security-update-f924e795",
    "title": "RHSA-2026:95064: Important: flatpak security update",
    "summary": "An update for flatpak is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95064",
    "publishedAt": "2026-11-04T11:58:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95064-important-flatpak-security-update",
      "article-f924e795",
      "f924e795",
      "rhsa-2026-95064-important-flatpak-security-update-37d854"
    ]
  },
  {
    "slug": "zyxel-gs1900-switches-hijacked-via-new-zero-day-a26f17b7",
    "title": "Zyxel GS1900 Switches Hijacked via New Zero-Day",
    "summary": "A newly identified flaw in Zyxel GS1900 switches, tracked as CVE-2026-107441, is actively exploited in the wild to hijack device control. The flaw allows remote attackers to execute arbitrary commands via malformed management traffic, bypassing Zyxel's ineffective patch. Zyxel released a new firmware update; teams should apply it immediately and monitor logs for unauthorized access.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/zyxel-gs1900-zero-day-exploited/",
    "publishedAt": "2026-11-04T11:57:24.000Z",
    "cves": [
      "CVE-2026-107441"
    ],
    "additionalSources": [],
    "aliases": [
      "zyxel-gs1900-switches-hijacked-via-new-zero-day",
      "article-a26f17b7",
      "a26f17b7",
      "zyxel-gs1900-switches-hijacked-via-new-zero-day-5517a6"
    ]
  },
  {
    "slug": "rhsa-2026-95061-important-flatpak-security-update-aaa4381b",
    "title": "RHSA-2026:95061: Important: flatpak security update",
    "summary": "An update for flatpak is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. The vulnerability is tracked as CVE-2026-43871.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95061",
    "publishedAt": "2026-11-04T11:51:07.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95061-important-flatpak-security-update",
      "article-aaa4381b",
      "aaa4381b",
      "rhsa-2026-95061-important-flatpak-security-update-37d854"
    ]
  },
  {
    "slug": "rhsa-2026-95085-important-tesseract-security-updat-b61117b3",
    "title": "RHSA-2026:95085: Important: tesseract security update",
    "summary": "An update for tesseract is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. The vulnerability is tracked as CVE-2026-43871.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95085",
    "publishedAt": "2026-11-04T11:48:26.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95085-important-tesseract-security-updat",
      "article-b61117b3",
      "b61117b3",
      "rhsa-2026-95085-important-tesseract-security-updat-37d854",
      "rhsa-2026-95085-important-tesseract-security-update"
    ]
  },
  {
    "slug": "xen-hypervisor-flaws-enable-vm-memory-theft-3fb65d25",
    "title": "Xen Hypervisor Flaws Enable VM Memory Theft",
    "summary": "Two Xen hypervisor flaws let a malicious guest VM read/write memory of other VMs, including dom0, on the host. The flaws allow unauthenticated cross‑VM memory access, exposing guest data and risking privilege escalation; all Xen 4.6+ releases are affected. Xen Project has issued patches for all affected versions; administrators must apply them immediately to stop memory disclosure and control loss.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/xen-hypervisor-flaws-let-one-malicious.html",
    "publishedAt": "2026-11-04T11:46:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xen-hypervisor-flaws-enable-vm-memory-theft",
      "article-3fb65d25",
      "3fb65d25",
      "xen-hypervisor-flaws-enable-vm-memory-theft-3caf5f"
    ]
  },
  {
    "slug": "microsoft-edge-automatically-blocks-malicious-noti-4f1e8858",
    "title": "Microsoft Edge Automatically Blocks Malicious Notification Scams",
    "summary": "Microsoft Edge now automatically revokes notification permissions for websites that redirect users to detected scam pages delivering fake virus alerts. The feature integrates Microsoft Defender SmartScreen and scareware blocker detections directly into browser permissions to disrupt persistent social engineering tactics. Administrators and users receive this automated protection in recent Edge updates to minimize exposure to malicious scareware campaigns.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsoft-edge/",
    "publishedAt": "2026-11-04T11:38:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-edge-automatically-blocks-malicious-noti",
      "article-4f1e8858",
      "4f1e8858",
      "microsoft-edge-automatically-blocks-malicious-noti-5e400a",
      "microsoft-edge-automatically-blocks-malicious-notification-s"
    ]
  },
  {
    "slug": "agent-runtime-security-fails-without-underlying-la-34dbc920",
    "title": "Agent Runtime Security Fails Without Underlying Layers",
    "summary": "Most agent security tools stop bad actions only for agents whose traffic passes through an enterprise gateway. Agents operating outside that gateway lack runtime visibility, enabling unsafe automation behaviors. Organizations must deploy layered runtime monitoring beyond gateway-based controls to detect and prevent unauthorized agent actions.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/radio-with-no-radar-why-agent-runtime.html",
    "publishedAt": "2026-11-04T11:34:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "agent-runtime-security-fails-without-underlying-la",
      "article-34dbc920",
      "34dbc920",
      "agent-runtime-security-fails-without-underlying-la-7aa03f",
      "agent-runtime-security-fails-without-underlying-layers"
    ]
  },
  {
    "slug": "google-releases-major-chrome-security-update-fixin-5feb26a4",
    "title": "Google Releases Major Chrome Security Update Fixing 213 Bugs, Including 7 Critical Vulnerabilities",
    "summary": "Google has released Chrome 157 for Windows, macOS, and Linux, fixing 213 security bugs, including seven rated critical. Announced on November 3, 2026, the update addresses flaws across graphics, memory handling, browser features, and access controls. Google says the stable release will reach users over the coming days and weeks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/google-releases-major-chrome-security-update/",
    "publishedAt": "2026-11-04T11:27:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-releases-major-chrome-security-update-fixin",
      "article-5feb26a4",
      "5feb26a4",
      "google-releases-major-chrome-security-update-fixin-573e09",
      "google-releases-major-chrome-security-update-fixing-213-bugs"
    ]
  },
  {
    "slug": "china-aligned-hackers-hijack-sogou-input-method-dn-fa4ac48f",
    "title": "China-Aligned Hackers Hijack Sogou Input Method DNS Requests to Deploy DarkVigil Backdoor",
    "summary": "A China-aligned threat actor known as SlippyNunchucks has been attributed to a Domain Name System (DNS) hijacking operation abusing insecure HTTP communications in Windows versions of Sogou Input Method as part of a surveillance campaign designed to deploy an implant called DarkVigil (aka FDMTP).",
    "category": "General",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/china-aligned-hackers-hijack-sogou.html",
    "publishedAt": "2026-11-04T11:24:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "china-aligned-hackers-hijack-sogou-input-method-dn",
      "article-fa4ac48f",
      "fa4ac48f",
      "china-aligned-hackers-hijack-sogou-input-method-dn-1f6ee0",
      "china-aligned-hackers-hijack-sogou-input-method-dns-requests"
    ]
  },
  {
    "slug": "cpguard-update-compromise-steals-credentials-from-e6da8e9e",
    "title": "cPGuard Update Compromise Steals Credentials from Thousands",
    "summary": "An attacker compromised cPGuard’s update system and pushed malicious updates to almost 3,000 hosting servers in the next 24 hours. The payload stole customer contact data and hashed passwords from OPSShield’s billing server, enabling credential theft. Teams should revoke affected credentials, install the official 5.88.20 release, and audit servers for unauthorized changes immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/cpguard-update-supply-chain-compromised/",
    "publishedAt": "2026-11-04T11:18:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cpguard-update-compromise-steals-credentials-from",
      "article-e6da8e9e",
      "e6da8e9e",
      "cpguard-update-compromise-steals-credentials-from-310de0",
      "cpguard-update-compromise-steals-credentials-from-thousands"
    ]
  },
  {
    "slug": "cloudflare-launches-zero-wire-to-track-critical-cv-63d51e6d",
    "title": "Cloudflare Launches Zero Wire to Track Critical CVEs, Active Exploits, and Security Fixes",
    "summary": "Cloudflare has launched Zero Wire, a public vulnerability intelligence feed designed to help security teams track critical CVEs, understand exploitation activity, and find security fixes. Announced on November 3, 2026, the service sits within Cloudflare Radar’s security section and brings technical evidence, vendor guidance, and recommended actions into readable briefings.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/cloudflare-launches-zero-wire/",
    "publishedAt": "2026-11-04T11:10:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-launches-zero-wire-to-track-critical-cv",
      "article-63d51e6d",
      "63d51e6d",
      "cloudflare-launches-zero-wire-to-track-critical-cv-6f9cb2",
      "cloudflare-launches-zero-wire-to-track-critical-cves-active-"
    ]
  },
  {
    "slug": "opsshield-update-servers-compromised-via-cpguard-p-b8d862ff",
    "title": "OpsShield Update Servers Compromised via cPGuard Poisoning",
    "summary": "Attackers used compromised credentials to access OpsShield’s update servers and injected malicious cPGuard versions into the supply chain. The poisoned updates could deliver arbitrary code to end‑user devices, potentially enabling remote execution without user interaction. Security teams should verify cPGuard binaries against signed hashes, revoke compromised certificates, and apply vendor patches to mitigate the threat.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/malicious-cpguard-updates-served-in-opsshield-supply-chain-attack/",
    "publishedAt": "2026-11-04T10:54:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "opsshield-update-servers-compromised-via-cpguard-p",
      "article-b8d862ff",
      "b8d862ff",
      "opsshield-update-servers-compromised-via-cpguard-p-38961f",
      "opsshield-update-servers-compromised-via-cpguard-poisoning"
    ]
  },
  {
    "slug": "rhsa-2026-95082-important-python3-security-update-d25cfef7",
    "title": "RHSA-2026:95082: Important: python3 security update",
    "summary": "An update for python3 is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important. The vulnerability is tracked as CVE-2026-43871.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95082",
    "publishedAt": "2026-11-04T10:40:09.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95082-important-python3-security-update",
      "article-d25cfef7",
      "d25cfef7",
      "rhsa-2026-95082-important-python3-security-update-37d854"
    ]
  },
  {
    "slug": "chrome-157-addresses-213-security-issues-9cfda71a",
    "title": "Chrome 157 Addresses 213 Security Issues",
    "summary": "Google Chrome version 157 has been released, addressing 213 security issues, including seven rated critical. The update fixes numerous memory safety bugs and several incorrect or missing authorization checks, reducing the risk of privilege escalation and data exposure. Users should install the new browser version promptly to eliminate the identified vulnerabilities and maintain secure browsing.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/chrome-157-rolls-out-with-213-security-fixes-seven-rated-critical/",
    "publishedAt": "2026-11-04T10:38:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-157-addresses-213-security-issues",
      "article-9cfda71a",
      "9cfda71a",
      "chrome-157-addresses-213-security-issues-2e2da2"
    ]
  },
  {
    "slug": "binance-6-billion-heist-via-compromised-engineers-c12eea2c",
    "title": "Binance $6 Billion Heist via Compromised Engineers",
    "summary": "Attackers compromised three Binance engineers' workstations over a months-long campaign using a rigged coding assignment and an abused AI tool to execute the record $6 billion theft. The incident represents unauthorized corporate access resulting in massive financial loss. Binance has disclosed the details in its initial incident report.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/rigged-coding-assignment-abused-ai-tool-opened-path-to-6-billion-binance-heist/",
    "publishedAt": "2026-11-04T10:36:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-6-billion-heist-via-compromised-engineers",
      "article-c12eea2c",
      "c12eea2c",
      "binance-6-billion-heist-via-compromised-engineers-a573de"
    ]
  },
  {
    "slug": "vasygrek-hackers-arrested-infrastructure-dismantle-48381ff2",
    "title": "VasyGrek Hackers Arrested, Infrastructure Dismantled",
    "summary": "Law enforcement agencies have arrested members of the VasyGrek hacking group and dismantled their infrastructure. Court filings detail the group's operations, threat actor profiles, and the defensive controls that led to the takedown. Security teams should review the disclosed threat actor tactics and update detection rules accordingly, enhancing monitoring daily.",
    "category": "General",
    "severity": "LOW",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/russian-police-arrest-3-suspected-vasygrek-hackers-dism",
    "publishedAt": "2026-11-04T10:29:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vasygrek-hackers-arrested-infrastructure-dismantle",
      "article-48381ff2",
      "48381ff2",
      "vasygrek-hackers-arrested-infrastructure-dismantle-32a306",
      "vasygrek-hackers-arrested-infrastructure-dismantled"
    ]
  },
  {
    "slug": "binance-heist-via-fake-interview-and-installer-88402eac",
    "title": "Binance Heist via Fake Interview and Installer",
    "summary": "Binance suffered a $6.34 billion heist after attackers used a fake job interview and tampered installer to gain endpoint access. The attackers combined social engineering, malicious software downloads, compromised AI tooling, and an advanced transaction‑authorisation bypass to move funds. Binance’s incident report recommends tightening internal AI controls, enforcing stricter download vetting, and monitoring transaction‑authorisation logs for anomalous activity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/binance-hack-north-korea-fake-job-interview/",
    "publishedAt": "2026-11-04T10:29:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-heist-via-fake-interview-and-installer",
      "article-88402eac",
      "88402eac",
      "binance-heist-via-fake-interview-and-installer-1fd774"
    ]
  },
  {
    "slug": "xloader-malware-disguised-as-business-orders-7237997e",
    "title": "XLoader Malware Disguised as Business Orders",
    "summary": "A new XLoader malware campaign delivers password‑stealing payloads via seemingly legitimate business order emails. The attachment contains a compressed archive that launches a hidden script chain, ultimately executing the XLoader stealer within a trusted Windows process, enabling credential harvesting without user interaction. Security teams should block the malicious archive, quarantine affected accounts, and monitor for outbound credential exfiltration.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-hide-xloader-malware/",
    "publishedAt": "2026-11-04T10:25:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xloader-malware-disguised-as-business-orders",
      "article-7237997e",
      "7237997e",
      "xloader-malware-disguised-as-business-orders-2483b3"
    ]
  },
  {
    "slug": "google-patches-android-zero-click-rce-cve-2026-588-7037eafd",
    "title": "Google Patches Android Zero‑Click RCE CVE‑2026‑58868",
    "summary": "Google released its November 2026 Android update, fixing over 200 flaws, including CVE‑2026‑58868, a zero‑click RCE. The flaw is a buffer overflow in intent handling, granting full device control with a CVSS of 9.8. Google has made the patch available for devices with patch level 2026‑11‑05 or newer; apply it immediately.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/android-0-click-remote-code-execution-flaws/",
    "publishedAt": "2026-11-04T10:12:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-patches-android-zero-click-rce-cve-2026-588",
      "article-7037eafd",
      "7037eafd",
      "google-patches-android-zero-click-rce-cve-2026-588-344fef",
      "google-patches-android-zero-click-rce-cve-2026-58868"
    ]
  },
  {
    "slug": "red-hat-issues-flatpak-update-for-cve-2026-43871-65080cc0",
    "title": "Red Hat Issues Flatpak Update for CVE-2026-43871",
    "summary": "Red Hat has issued a security update for Flatpak to address CVE-2026-43871, affecting RHEL 10.0 Extended Update Support and RHEL 9.2 Update Services for SAP Solutions. The flaw, rated Important, allows potential exploitation of Flatpak's component handling, posing a risk of unauthorized code execution. Red Hat recommends applying the patch immediately via standard update channels.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95063",
    "publishedAt": "2026-11-04T10:06:14.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [
      {
        "source": "Red Hat Security Advisories",
        "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95062"
      }
    ],
    "aliases": [
      "red-hat-issues-flatpak-update-for-cve-2026-43871",
      "article-65080cc0",
      "65080cc0",
      "red-hat-issues-flatpak-update-for-cve-2026-43871-37d854"
    ]
  },
  {
    "slug": "slippynunchucks-hijacks-sogou-input-method-promoti-623c76dc",
    "title": "SlippyNunchucks hijacks Sogou Input Method promotion to spread malware",
    "summary": "SlippyNunchucks hijacked Sogou Input Method’s brand promotion mechanism to distribute malware via DNS hijacking in Windows versions. The flaw stems from insecure HTTP communications that allow attackers to redirect DNS queries, enabling malicious payload delivery without authentication. No vendor patch has been announced; users should monitor for updates and consider disabling insecure HTTP connections.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ESET WeLiveSecurity",
    "sourceUrl": "https://www.welivesecurity.com/en/eset-research/slippynunchucks-hijacks-sogou-input-methods-brand-promotion-mechanism-to-distribute-malware/",
    "publishedAt": "2026-11-04T09:55:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "slippynunchucks-hijacks-sogou-input-method-promoti",
      "article-623c76dc",
      "623c76dc",
      "slippynunchucks-hijacks-sogou-input-method-promoti-262b5a",
      "slippynunchucks-hijacks-sogou-input-method-promotion-to-spre"
    ]
  },
  {
    "slug": "zero-click-attacks-target-ios-android-via-n-day-ex-59d225cc",
    "title": "Zero‑Click Attacks Target iOS, Android via n‑Day Exploits",
    "summary": "Russian‑affiliated hackers are exploiting undisclosed n‑day vulnerabilities to launch zero‑click attacks on iOS and Android devices. The attacks use memory corruption flaws that enable remote code execution without user interaction, allowing credential theft and device compromise. Apple and Google have released patches for the affected OS versions; security teams should apply updates and monitor for anomalous outbound traffic.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-use-n-day-exploits-in-zero-click-attacks-on-ios-android-devices/",
    "publishedAt": "2026-11-04T09:39:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zero-click-attacks-target-ios-android-via-n-day-ex",
      "article-59d225cc",
      "59d225cc",
      "zero-click-attacks-target-ios-android-via-n-day-ex-7cdb08",
      "zero-click-attacks-target-ios-android-via-n-day-exploits"
    ]
  },
  {
    "slug": "ransomware-leak-site-listings-increase-30-percent-119ba03b",
    "title": "Ransomware Leak Site Listings Increase 30 Percent",
    "summary": "According to cybersecurity researchers, ransomware extortion leak site listings surged by 30 percent in the third quarter of 2026. The volume surge was driven primarily by newly emerging, unproven threat groups posting potentially fabricated enterprise breach claims. Security teams should independently verify extortion claims and assess compromise indicators rather than trusting public leak site postings.",
    "category": "General",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ransomware-gangs/",
    "publishedAt": "2026-11-04T09:35:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ransomware-leak-site-listings-increase-30-percent",
      "article-119ba03b",
      "119ba03b",
      "ransomware-leak-site-listings-increase-30-percent-35d38f"
    ]
  },
  {
    "slug": "cisa-flags-active-exploitation-of-wordpress-core-v-4745e9d7",
    "title": "CISA Flags Active Exploitation of WordPress Core Vulnerability",
    "summary": "CISA reports active exploitation of a WordPress Core flaw that permits remote code execution on site servers. Tracked as CVE-2026-119977, the vulnerability allows attackers to inject malicious scripts via crafted requests, with public proof-of-concept and confirmed wild exploitation. WordPress urges immediate patching and recommends administrators verify server integrity, monitor logs, and apply mitigations.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/wordpress-core-vulnerability-exploited/",
    "publishedAt": "2026-11-04T09:34:04.000Z",
    "cves": [
      "CVE-2026-119977"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-flags-active-exploitation-of-wordpress-core-v",
      "article-4745e9d7",
      "4745e9d7",
      "cisa-flags-active-exploitation-of-wordpress-core-v-35a69d",
      "cisa-flags-active-exploitation-of-wordpress-core-vulnerabili"
    ]
  },
  {
    "slug": "north-korea-launches-missiles-amid-binance-hack-pr-a6529e29",
    "title": "North Korea Launches Missiles Amid Binance Hack Protest",
    "summary": "North Korea accelerated missile tests toward the sea, citing increased leverage for potential diplomacy with the United States. The launch coincided with Pyongyang's protest against U.S. claims regarding a Binance hack, reflecting geopolitical tensions. No direct cyber activity was reported; analysts advise monitoring for potential cyber‑political escalations and related cyber‑defense posture adjustments.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/north-korea-launches-missiles-toward-the-sea-as-pyongyang-protests-against-us-claims-on-binance-hack/",
    "publishedAt": "2026-11-04T09:23:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "north-korea-launches-missiles-amid-binance-hack-pr",
      "article-a6529e29",
      "a6529e29",
      "north-korea-launches-missiles-amid-binance-hack-pr-49e3f8",
      "north-korea-launches-missiles-amid-binance-hack-protest"
    ]
  },
  {
    "slug": "meta-uncovers-muse-vm-data-exposure-bug-a9869b8e",
    "title": "Meta Uncovers Muse VM Data Exposure Bug",
    "summary": "A pre‑launch flaw in Meta’s Muse test virtual machines exposed internal conversations and authentication tokens to unauthorized users. The vulnerability allowed attackers to read sensitive data without authentication, potentially compromising internal communications; no public exploit was reported. Meta patched the issue in later Muse releases, and teams should verify VM isolation and token handling best practices.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/meta-shares-top-muse-bug-bounty-findings-as-payouts-reach-1-2-million/",
    "publishedAt": "2026-11-04T08:27:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-uncovers-muse-vm-data-exposure-bug",
      "article-a9869b8e",
      "a9869b8e",
      "meta-uncovers-muse-vm-data-exposure-bug-1a0511"
    ]
  },
  {
    "slug": "russian-police-arrest-vasygrek-hackers-96abba7f",
    "title": "Russian Police Arrest VasyGrek Hackers",
    "summary": "Russian authorities arrested three suspected members of the VasyGrek threat group, also known as Fluffy Wolf, and dismantled its criminal infrastructure. VasyGrek has targeted Russian and international companies since 2016, engaging in financial fraud and data theft, according to the Ministry of Internal Affairs. The arrests demonstrate Russian law enforcement's ongoing efforts to disrupt cybercriminal networks and recover embezzled funds.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/russian-police-arrest-3-suspected.html",
    "publishedAt": "2026-11-04T08:17:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russian-police-arrest-vasygrek-hackers",
      "article-96abba7f",
      "96abba7f",
      "russian-police-arrest-vasygrek-hackers-2cd867"
    ]
  },
  {
    "slug": "red-hat-releases-bind-patch-for-cve-2026-43871-7bcde99c",
    "title": "Red Hat Releases Bind Patch for CVE-2026-43871",
    "summary": "Red Hat issued a security update for the BIND DNS server on RHEL 9.6 EUS to address CVE‑2026‑43871. The Important vulnerability could allow exploitation of BIND’s DNS query handling, potentially enabling data disclosure or service disruption; a public PoC is available. Users should apply the RHSA‑2026‑95048 update immediately and verify BIND configuration aligns with best practices.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95048",
    "publishedAt": "2026-11-04T08:13:24.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-bind-patch-for-cve-2026-43871",
      "article-7bcde99c",
      "7bcde99c",
      "red-hat-releases-bind-patch-for-cve-2026-43871-37d854"
    ]
  },
  {
    "slug": "red-hat-issues-opentelemetry-collector-patch-for-c-00f2c3b5",
    "title": "Red Hat Issues Opentelemetry‑Collector Patch for CVE‑2026‑43871",
    "summary": "Red Hat released a security update for the OpenTelemetry Collector on RHEL 9.x to address CVE‑2026‑43871, a flaw that could allow attackers to execute code or exfiltrate data via telemetry ingestion. The vulnerability impacts RHEL 9.4 and 9.6 EUS, potentially enabling unauthorized access or denial of service. Administrators should apply the RHSA‑2026‑95014 update immediately and review collector configurations.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95014",
    "publishedAt": "2026-11-04T08:09:57.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Red Hat Security Advisories",
        "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95015"
      }
    ],
    "aliases": [
      "red-hat-issues-opentelemetry-collector-patch-for-c",
      "article-00f2c3b5",
      "00f2c3b5",
      "red-hat-issues-opentelemetry-collector-patch-for-c-37d855",
      "red-hat-issues-opentelemetry-collector-patch-for-cve-2026-43"
    ]
  },
  {
    "slug": "top-10-2026-breach-attack-simulation-tools-dd680acd",
    "title": "Top 10 2026 Breach & Attack Simulation Tools",
    "summary": "Breach & attack simulation tools validate SOC controls by continuously running real attacker techniques instead of annual tests. The 2026 field features safe‑simulation specialists, autonomous‑pentest hybrids, and validation suites grading entire kill chains, with Cymulate among the leaders. These platforms deliver pass/fail evidence per technique and control, shifting SOCs from assumed coverage to measurable resilience.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/best-bas-tools/",
    "publishedAt": "2026-11-04T08:03:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "top-10-2026-breach-attack-simulation-tools",
      "article-dd680acd",
      "dd680acd",
      "top-10-2026-breach-attack-simulation-tools-4ea947"
    ]
  },
  {
    "slug": "red-hat-issues-bind9-16-security-update-20eb57f9",
    "title": "Red Hat Issues bind9.16 Security Update",
    "summary": "Red Hat released a security update for bind9.16 on RHEL 8.8 for SAP Solutions and Telecommunications, addressing CVE-2026-43871. The vulnerability could allow attackers to gain unauthorized access or execute code on the DNS server. The update is available through the standard RHEL update mechanism; administrators should apply it promptly during the next maintenance window.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95017",
    "publishedAt": "2026-11-04T07:48:35.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-bind9-16-security-update",
      "article-20eb57f9",
      "20eb57f9",
      "red-hat-issues-bind9-16-security-update-37d855"
    ]
  },
  {
    "slug": "google-patches-critical-android-rce-flaw-f36658d8",
    "title": "Google Patches Critical Android RCE Flaw",
    "summary": "A critical Android flaw, CVE-2026-58868, allows remote code execution on Android 14‑17 devices without user interaction. The flaw exploits a buffer overflow in the media subsystem, granting attackers system‑level code execution and is a high‑severity zero‑day. Google issued a patch in its November bulletin; devices must apply the 2026‑11‑01 security patch or later, distributed by OEMs and carriers.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/google-patches-critical-android-flaw.html",
    "publishedAt": "2026-11-04T07:46:15.000Z",
    "cves": [
      "CVE-2026-58868"
    ],
    "additionalSources": [],
    "aliases": [
      "google-patches-critical-android-rce-flaw",
      "article-f36658d8",
      "f36658d8",
      "google-patches-critical-android-rce-flaw-76729c"
    ]
  },
  {
    "slug": "rsync-3-5-2-addresses-cpu-exhaustion-flaw-ecc28fd7",
    "title": "rsync 3.5.2 Addresses CPU Exhaustion Flaw",
    "summary": "The rsync 3.5.2 release fixes a CPU exhaustion vulnerability that allowed a client to monopolize server CPU during checksum calculations. The flaw could cause denial of service by tying up CPU and disk resources, impacting other concurrent transfers. The update also introduces a queue‑backing feature, allowing administrators to defer large transfers and prevent resource contention.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/rsync-3-5-2-released/",
    "publishedAt": "2026-11-04T07:43:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rsync-3-5-2-addresses-cpu-exhaustion-flaw",
      "article-ecc28fd7",
      "ecc28fd7",
      "rsync-3-5-2-addresses-cpu-exhaustion-flaw-ac61e4"
    ]
  },
  {
    "slug": "hackers-use-new-infostealer-malware-to-steal-chatg-84149201",
    "title": "Hackers Use New Infostealer Malware to Steal ChatGPT, Claude, and Codex Tokens That Survive Password Resets",
    "summary": "Hackers are expanding information theft beyond saved passwords, targeting authentication tokens and session data stored by ChatGPT, Claude, Codex, and other AI tools. Two Windows malware families, WardenStealer and Aoki, collect credentials that may remain usable after a password reset, leaving victims exposed even after they believe their accounts are secured.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-use-new-infostealer-malware/",
    "publishedAt": "2026-11-04T07:34:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-use-new-infostealer-malware-to-steal-chatg",
      "article-84149201",
      "84149201",
      "hackers-use-new-infostealer-malware-to-steal-chatg-158059",
      "hackers-use-new-infostealer-malware-to-steal-chatgpt-claude-"
    ]
  },
  {
    "slug": "rhsa-2026-95016-important-opentelemetry-collector-c30b1b70",
    "title": "RHSA-2026:95016: Important: opentelemetry-collector security update",
    "summary": "An update for opentelemetry-collector is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. The vulnerability is tracked as CVE-2026-43871.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95016",
    "publishedAt": "2026-11-04T07:34:48.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95016-important-opentelemetry-collector",
      "article-c30b1b70",
      "c30b1b70",
      "rhsa-2026-95016-important-opentelemetry-collector-37d855",
      "rhsa-2026-95016-important-opentelemetry-collector-security-u"
    ]
  },
  {
    "slug": "ai-generated-malware-shows-distinct-code-patterns-c716b0a2",
    "title": "AI-Generated Malware Shows Distinct Code Patterns",
    "summary": "The interview examines how AI‑generated malware differs from traditional scripts, focusing on code structure and logging. Indicators include tidy comments, uniform logging messages, and emojis that are often removed during decompilation, revealing the model origin. Security teams should analyze code comments and logging patterns for AI signatures and apply standard malware analysis practices to mitigate patch delays.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/lindsay-kaye-human-security-ai-generated-malware/",
    "publishedAt": "2026-11-04T07:00:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-generated-malware-shows-distinct-code-patterns",
      "article-c716b0a2",
      "c716b0a2",
      "ai-generated-malware-shows-distinct-code-patterns-1f288b"
    ]
  },
  {
    "slug": "fake-downloads-hijack-windows-pcs-for-monetization-d34df581",
    "title": "Fake Downloads Hijack Windows PCs for Monetization",
    "summary": "Hackers embed malicious payloads in counterfeit software downloads to covertly compromise Windows PCs, targeting users seeking cracked or free applications. The malware installs bandwidth‑sharing, distributed‑compute, or ad‑delivery modules, monetizing network resources without user awareness via social engineering. Security teams should block malicious domains, enforce whitelisting, and educate users; Microsoft recommends applying latest Windows updates and running reputable anti‑malware.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-use-fake-software-downloads/",
    "publishedAt": "2026-11-04T06:44:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fake-downloads-hijack-windows-pcs-for-monetization",
      "article-d34df581",
      "d34df581",
      "fake-downloads-hijack-windows-pcs-for-monetization-349596"
    ]
  },
  {
    "slug": "red-hat-releases-critical-fence-agents-patch-0d661752",
    "title": "Red Hat Releases Critical Fence-Agents Patch",
    "summary": "Red Hat issued a critical security update for the fence-agents component on Red Enterprise Linux 10.0 Extended Update Support. The update addresses multiple high‑severity vulnerabilities, each with a CVSS base score indicating potential remote code execution or privilege escalation. Administrators should apply the fence-agents update immediately and verify that all affected systems are patched to mitigate exploitation risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95012",
    "publishedAt": "2026-11-04T06:44:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-fence-agents-patch",
      "article-0d661752",
      "0d661752",
      "red-hat-releases-critical-fence-agents-patch-37d855"
    ]
  },
  {
    "slug": "ghostunnel-provides-mutual-auth-tls-proxy-c553a3bd",
    "title": "Ghostunnel Provides Mutual‑Auth TLS Proxy",
    "summary": "Ghostunnel is an open‑source TLS proxy that enables mutual authentication for applications lacking native TLS support. In server mode it terminates client TLS connections, verifies certificates, and forwards traffic to back‑end services over TCP or UNIX sockets. In client mode it accepts plain local connections, wraps them in TLS, and presents a client certificate to remote servers, simplifying secure communications.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/ghostunnel-open-source-tls-proxy/",
    "publishedAt": "2026-11-04T06:30:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ghostunnel-provides-mutual-auth-tls-proxy",
      "article-c553a3bd",
      "c553a3bd",
      "ghostunnel-provides-mutual-auth-tls-proxy-4c29c8"
    ]
  },
  {
    "slug": "chromeos-beta-updates-to-os-16868-9-0-aeb8676b",
    "title": "ChromeOS Beta Updates to OS 16868.9.0",
    "summary": "Google released a beta channel update for ChromeOS and ChromeOS Flex, bumping the OS to version 16868.9.0 and the browser to 158.0.8127.9. The update includes bug fixes and performance improvements, with users encouraged to report issues via the ChromeOS communities or bug‑tracking channels. Administrators should verify that devices receive the new beta build and monitor for regressions before wider deployment.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/beta-channel-update-for-chromeos.html",
    "publishedAt": "2026-11-04T06:16:07.626Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chromeos-beta-updates-to-os-16868-9-0",
      "article-aeb8676b",
      "aeb8676b",
      "chromeos-beta-updates-to-os-16868-9-0-441376"
    ]
  },
  {
    "slug": "secure-your-containers-without-breaking-what-works-2c37d2d1",
    "title": "Secure your containers without breaking what works",
    "summary": "Teams identify vulnerabilities, but turning those findings into lower risk is much harder. Each unnecessary component can expand the attack surface and add vulnerabilities to investigate, patch or explain during an audit. Consider an NGINX image that contains 274 categorized vulnerabilities straight from download.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/rapidfort-runtime-container-profiling/",
    "publishedAt": "2026-11-04T06:00:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "secure-your-containers-without-breaking-what-works",
      "article-2c37d2d1",
      "2c37d2d1",
      "secure-your-containers-without-breaking-what-works-3699a1"
    ]
  },
  {
    "slug": "ashlar-vellum-cobalt-ar-heap-overflow-enables-rce-9f1a246f",
    "title": "Ashlar-Vellum Cobalt AR Heap Overflow Enables RCE",
    "summary": "A heap-based buffer overflow in Ashlar-Vellum Cobalt’s AR file parser allows remote attackers to execute arbitrary code after opening a malicious file. CVE-2026-121743 carries a CVSS score of 7.8 and requires user interaction to trigger the exploit. A patch is available; users should update the software immediately to prevent exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-873/",
    "publishedAt": "2026-11-04T06:00:00.000Z",
    "cves": [
      "CVE-2026-121743"
    ],
    "additionalSources": [],
    "aliases": [
      "ashlar-vellum-cobalt-ar-heap-overflow-enables-rce",
      "article-9f1a246f",
      "9f1a246f",
      "ashlar-vellum-cobalt-ar-heap-overflow-enables-rce-6f3cae"
    ]
  },
  {
    "slug": "ashlar-vellum-cobalt-xe-stack-overflow-enables-rce-6c8edb54",
    "title": "Ashlar-Vellum Cobalt XE Stack Overflow Enables RCE",
    "summary": "A stack-based buffer overflow in Ashlar-Vellum Cobalt XE’s file parser permits remote code execution when a user opens a crafted file. CVE-2026-121744 has a CVSS score of 7.8 and requires user interaction to trigger. A patch is available; administrators should update the product immediately to mitigate the critical vulnerability today.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-870/",
    "publishedAt": "2026-11-04T06:00:00.000Z",
    "cves": [
      "CVE-2026-121744"
    ],
    "additionalSources": [],
    "aliases": [
      "ashlar-vellum-cobalt-xe-stack-overflow-enables-rce",
      "article-6c8edb54",
      "6c8edb54",
      "ashlar-vellum-cobalt-xe-stack-overflow-enables-rce-6f3cad"
    ]
  },
  {
    "slug": "zdi-26-869-mailenable-save-directory-traversal-arb-5bd67715",
    "title": "ZDI-26-869: MailEnable Save Directory Traversal Arbitrary File Creation Vulnerability",
    "summary": "This vulnerability allows remote attackers to create arbitrary files on affected installations of MailEnable. Authentication is not required to exploit this vulnerability. The following CVEs are assigned: CVE-2026-114556.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-869/",
    "publishedAt": "2026-11-04T06:00:00.000Z",
    "cves": [
      "CVE-2026-114556"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-869-mailenable-save-directory-traversal-arb",
      "article-5bd67715",
      "5bd67715",
      "zdi-26-869-mailenable-save-directory-traversal-arb-6f3cab",
      "zdi-26-869-mailenable-save-directory-traversal-arbitrary-fil"
    ]
  },
  {
    "slug": "ashlar-vellum-cobalt-xe-file-parsing-use-after-fre-8c0fd99b",
    "title": "Ashlar-Vellum Cobalt XE File Parsing Use-After-Free RCE",
    "summary": "A use-after-free vulnerability in Ashlar-Vellum Cobalt XE file parsing allows remote code execution when a user opens a malicious file. The assigned CVE is CVE-2026-121742 with a CVSS rating of 7.8. Users should avoid opening untrusted files and apply vendor patches as soon as available.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-874/",
    "publishedAt": "2026-11-04T06:00:00.000Z",
    "cves": [
      "CVE-2026-121742"
    ],
    "additionalSources": [],
    "aliases": [
      "ashlar-vellum-cobalt-xe-file-parsing-use-after-fre",
      "article-8c0fd99b",
      "8c0fd99b",
      "ashlar-vellum-cobalt-xe-file-parsing-use-after-fre-6f3cae",
      "ashlar-vellum-cobalt-xe-file-parsing-use-after-free-rce"
    ]
  },
  {
    "slug": "ashlar-vellum-cobalt-vulnerability-enables-remote-85bb0af9",
    "title": "Ashlar-Vellum Cobalt Vulnerability Enables Remote Code Execution",
    "summary": "A use-after-free vulnerability in Ashlar-Vellum Cobalt XE allows remote attackers to execute arbitrary code on affected installations. Tracked as CVE-2026-121753 with a CVSS score of 7.8, the flaw requires user interaction through a malicious file or webpage. Security teams should restrict untrusted file opening and monitor vendor advisories for mitigations against this zero-day flaw.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-872/",
    "publishedAt": "2026-11-04T06:00:00.000Z",
    "cves": [
      "CVE-2026-121753"
    ],
    "additionalSources": [],
    "aliases": [
      "ashlar-vellum-cobalt-vulnerability-enables-remote",
      "article-85bb0af9",
      "85bb0af9",
      "ashlar-vellum-cobalt-vulnerability-enables-remote-6f3cae",
      "ashlar-vellum-cobalt-vulnerability-enables-remote-code-execu"
    ]
  },
  {
    "slug": "zdi-26-871-0day-ashlar-vellum-cobalt-li-file-parsi-8ceda593",
    "title": "ZDI-26-871: (0Day) Ashlar-Vellum Cobalt LI File Parsing Heap-based Buffer Overflow Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Ashlar-Vellum Cobalt. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The following CVEs are assigned: CVE-2026-121752.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-871/",
    "publishedAt": "2026-11-04T06:00:00.000Z",
    "cves": [
      "CVE-2026-121752"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-871-0day-ashlar-vellum-cobalt-li-file-parsi",
      "article-8ceda593",
      "8ceda593",
      "zdi-26-871-0day-ashlar-vellum-cobalt-li-file-parsi-6f3cad",
      "zdi-26-871-0day-ashlar-vellum-cobalt-li-file-parsing-heap-ba"
    ]
  },
  {
    "slug": "crowdstrike-launches-agentic-adversary-emulation-f-0acb86d5",
    "title": "CrowdStrike Launches Agentic Adversary Emulation for AI Threats",
    "summary": "CrowdStrike released Agentic Adversary Emulation, a new capability integrated into its platform to simulate AI-driven attacker behaviors. The feature enables security teams to test defenses against sophisticated AI-powered threats by emulating adversary tactics autonomously. Organizations can deploy the emulation to validate detection and response workflows against evolving AI-enabled adversaries through continuous automated testing cycles.",
    "category": "General",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/crowdstrike-agentic-adversary-emulation-counters-ai-enabled-adversaries/",
    "publishedAt": "2026-11-04T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-launches-agentic-adversary-emulation-f",
      "article-0acb86d5",
      "0acb86d5",
      "crowdstrike-launches-agentic-adversary-emulation-f-567773",
      "crowdstrike-launches-agentic-adversary-emulation-for-ai-thre"
    ]
  },
  {
    "slug": "crowdstrike-adds-enterprise-browser-security-to-fa-ed42ec16",
    "title": "CrowdStrike Adds Enterprise Browser Security to Falcon",
    "summary": "CrowdStrike integrated enterprise browser security into the Falcon platform, expanding its endpoint protection capabilities. The new module isolates untrusted web sessions, blocks malicious scripts, and enforces policy controls at the browser level to reduce attack surface. Security teams can configure browser protection rules via Falcon consoles and receive telemetry for threat hunting and compliance reporting.",
    "category": "General",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/crowdstrike-brings-enterprise-browser-security-to-falcon-platform/",
    "publishedAt": "2026-11-04T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-adds-enterprise-browser-security-to-fa",
      "article-ed42ec16",
      "ed42ec16",
      "crowdstrike-adds-enterprise-browser-security-to-fa-4e3366",
      "crowdstrike-adds-enterprise-browser-security-to-falcon"
    ]
  },
  {
    "slug": "crowdstrike-unveils-falcon-cloud-security-ai-workl-c60c771c",
    "title": "CrowdStrike Unveils Falcon Cloud Security AI Workload Protection",
    "summary": "CrowdStrike launches new Falcon Cloud Security features to protect AI workloads in cloud environments. The updates address emerging cloud-native attack vectors by enhancing runtime monitoring, policy enforcement, and threat intelligence integration. Security teams should deploy the latest Falcon Cloud Security version and enable the new AI workload protection modules for optimal defense.",
    "category": "General",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/falcon-cloud-security-innovations-secure-cloud-ai-runs-on/",
    "publishedAt": "2026-11-04T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-unveils-falcon-cloud-security-ai-workl",
      "article-c60c771c",
      "c60c771c",
      "crowdstrike-unveils-falcon-cloud-security-ai-workl-772633",
      "crowdstrike-unveils-falcon-cloud-security-ai-workload-protec"
    ]
  },
  {
    "slug": "crowdstrike-enhances-agentic-soc-against-agent-ins-a6576908",
    "title": "CrowdStrike Enhances Agentic SOC Against Agent Insider Risks",
    "summary": "CrowdStrike has updated its Agentic SOC platform to detect and block malicious actions associated with agent insider threats. The security update integrates enhanced behavioral monitoring to identify unauthorized activities and potential security compromises within corporate agent environments. Enterprise security teams can deploy the upgraded platform features to improve real-time threat detection and mitigate internal operational risks.",
    "category": "General",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/crowdstrike-detects-and-stops-agent-insider-threats/",
    "publishedAt": "2026-11-04T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-enhances-agentic-soc-against-agent-ins",
      "article-a6576908",
      "a6576908",
      "crowdstrike-enhances-agentic-soc-against-agent-ins-5f342c",
      "crowdstrike-enhances-agentic-soc-against-agent-insider-risks"
    ]
  },
  {
    "slug": "hackers-use-stolen-microsoft-entra-id-and-azure-de-93e16fbf",
    "title": "Hackers Use Stolen Microsoft Entra ID and Azure DevOps Credentials to Access 27 Organizations",
    "summary": "Hackers are abusing stolen Microsoft Entra ID application credentials and Azure DevOps identities to access Microsoft 365 and Azure environments, reaching at least 27 organizations. Todyl’s latest investigation update describes an ongoing campaign targeting managed service providers (MSPs) and their customers since November 1, 2026.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/stolen-entra-id-and-azure-credentials/",
    "publishedAt": "2026-11-04T05:45:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-use-stolen-microsoft-entra-id-and-azure-de",
      "article-93e16fbf",
      "93e16fbf",
      "hackers-use-stolen-microsoft-entra-id-and-azure-de-237705",
      "hackers-use-stolen-microsoft-entra-id-and-azure-devops-crede"
    ]
  },
  {
    "slug": "cisa-adds-wordpress-core-cve-2026-119977-to-kev-b037122a",
    "title": "CISA Adds WordPress Core CVE-2026-119977 to KEV",
    "summary": "CISA has listed the WordPress Core flaw CVE-2026-119977 in its Known Exploited Vulnerabilities catalog, citing active exploitation. The high‑severity TOCTOU race condition, scored CVSS 8.1, allows attackers to execute arbitrary code by manipulating file timestamps during upgrade processes. Site owners should apply the latest WordPress core update immediately and verify that all plugins and themes are compatible to prevent exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/cisa-confirms-hackers-exploiting.html",
    "publishedAt": "2026-11-04T05:43:11.000Z",
    "cves": [
      "CVE-2026-119977"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-wordpress-core-cve-2026-119977-to-kev",
      "article-b037122a",
      "b037122a",
      "cisa-adds-wordpress-core-cve-2026-119977-to-kev-42a8d1"
    ]
  },
  {
    "slug": "ai-risks-rank-highest-in-gartner-emerging-risk-rep-4abff701",
    "title": "AI Risks Rank Highest in Gartner Emerging Risk Report",
    "summary": "Gartner’s Quarterly Emerging Risk Report ranks AI strategy miscalculation and AI‑driven competitive displacement among the top enterprise risks. The report identifies AI workforce preparedness gaps, AI discovery of cyber vulnerabilities, and geopolitical energy supply shocks as additional high‑impact concerns. The findings, based on 308 enterprise risk leaders’ responses, underscore the need for balanced AI adoption and robust risk mitigation strategies.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/ai-strategy-miscalculation-gartner-report/",
    "publishedAt": "2026-11-04T05:30:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-risks-rank-highest-in-gartner-emerging-risk-rep",
      "article-4abff701",
      "4abff701",
      "ai-risks-rank-highest-in-gartner-emerging-risk-rep-66e1d8",
      "ai-risks-rank-highest-in-gartner-emerging-risk-report"
    ]
  },
  {
    "slug": "codex-jailbreak-toolkit-injects-ads-into-ai-respon-b8213f97",
    "title": "Codex Jailbreak Toolkit Injects Ads into AI Responses",
    "summary": "A Chinese-language jailbreak toolkit named Haiou targets OpenAI Codex, altering trusted instructions to trigger advertisement prompts. The tool modifies prompt handling, causing persistent adware that injects third‑party AI gateway links without conventional malware signatures. Users should avoid unverified jailbreak packages, monitor prompt outputs for unexpected links, and apply OpenAI updates that tighten instruction validation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/openai-codex-jailbreak/",
    "publishedAt": "2026-11-04T05:22:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "codex-jailbreak-toolkit-injects-ads-into-ai-respon",
      "article-b8213f97",
      "b8213f97",
      "codex-jailbreak-toolkit-injects-ads-into-ai-respon-5130ec",
      "codex-jailbreak-toolkit-injects-ads-into-ai-responses"
    ]
  },
  {
    "slug": "nist-releases-guide-for-solopreneurs-without-it-st-4d906bfe",
    "title": "NIST Releases Guide for Solopreneurs Without IT Staff",
    "summary": "NIST issued a cybersecurity guidance document targeting small businesses lacking paid IT staff, including freelancers, sole proprietors, and independent contractors. The guide addresses 82% of the 34.8 million U.S. small businesses, offering tailored security practices for owners who lack specialized expertise. Administrators and solopreneurs should review the NIST recommendations and implement the outlined controls to strengthen their cyber posture.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/nist-small-business-cybersecurity-guide/",
    "publishedAt": "2026-11-04T05:00:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nist-releases-guide-for-solopreneurs-without-it-st",
      "article-4d906bfe",
      "4d906bfe",
      "nist-releases-guide-for-solopreneurs-without-it-st-1883f4",
      "nist-releases-guide-for-solopreneurs-without-it-staff"
    ]
  },
  {
    "slug": "rhsa-2026-94997-moderate-pipewire-security-update-82f4bf84",
    "title": "RHSA-2026:94997: Moderate: pipewire security update",
    "summary": "An update for pipewire is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94997",
    "publishedAt": "2026-11-04T04:57:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-94997-moderate-pipewire-security-update",
      "article-82f4bf84",
      "82f4bf84",
      "rhsa-2026-94997-moderate-pipewire-security-update-37d8a6"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-patch-for-cve-2026-43871-f0adae83",
    "title": "Red Hat Releases Kernel Patch for CVE-2026-43871",
    "summary": "CVE-2026-43871 exposed a kernel flaw in Red Hat Enterprise Linux 8.6 Advanced Mission Critical and Extended Update Support releases. The vulnerability, rated CVSS 9.8, allows unauthenticated remote code execution via a buffer overflow in the networking stack. Red Hat released a critical kernel patch; administrators must apply it immediately or upgrade to the latest RHEL 8.6.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94996",
    "publishedAt": "2026-11-04T04:47:44.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-patch-for-cve-2026-43871",
      "article-f0adae83",
      "f0adae83",
      "red-hat-releases-kernel-patch-for-cve-2026-43871-37d8a6"
    ]
  },
  {
    "slug": "llmhijacking-attacks-inflate-corporate-cloud-bills-f3900eb4",
    "title": "LLMHijacking Attacks Inflate Corporate Cloud Bills",
    "summary": "Hackers stole corporate large language model access and resold it, driving cloud bill inflation to $1M for affected companies. The attacks leveraged stolen credentials to trigger unauthorized AI usage, generating over $100k in charges within a single day, Mandiant reported. Security teams should enforce strict credential management, enable usage monitoring, and apply least‑privilege controls to prevent unauthorized LLM exploitation.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/llmhijacking-attacks/",
    "publishedAt": "2026-11-04T04:44:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "llmhijacking-attacks-inflate-corporate-cloud-bills",
      "article-f3900eb4",
      "f3900eb4",
      "llmhijacking-attacks-inflate-corporate-cloud-bills-5d224c"
    ]
  },
  {
    "slug": "anthropic-releases-flashprove-for-verifiable-model-0c1d002e",
    "title": "Anthropic Releases FlashProve for Verifiable Model Inference",
    "summary": "Anthropic released FlashProve, a prototype that generates cryptographic proofs for specific language model responses. The system uses a prover and two verifiers to produce formal proofs, enabling verification of model outputs. The code, proofs, and protocol specification are available on GitHub under Apache 2.0, allowing developers to integrate verification into their workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/04/anthropic-flashprove-provable-inference/",
    "publishedAt": "2026-11-04T04:36:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-releases-flashprove-for-verifiable-model",
      "article-0c1d002e",
      "0c1d002e",
      "anthropic-releases-flashprove-for-verifiable-model-6bf6b1",
      "anthropic-releases-flashprove-for-verifiable-model-inference"
    ]
  },
  {
    "slug": "french-blood-freezers-hijacked-temperature-raised-57d71c23",
    "title": "French Blood Freezers Hijacked, Temperature Raised to 110°C",
    "summary": "Hackers altered temperature settings on French Blood Establishment freezers, raising from −30°C to 110°C, targeting the cooling service provider Coolworld. The attack exploited remote access to the refrigeration control system, potentially compromising stored plasma and endangering patient transfusions. Security teams should verify firmware integrity, isolate affected units, and coordinate with Coolworld to patch control interfaces.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/french-blood-plasma-freezers-hacked/",
    "publishedAt": "2026-11-04T02:35:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "french-blood-freezers-hijacked-temperature-raised",
      "article-57d71c23",
      "57d71c23",
      "french-blood-freezers-hijacked-temperature-raised-17257b",
      "french-blood-freezers-hijacked-temperature-raised-to-110-c"
    ]
  },
  {
    "slug": "isc-stormcast-podcast-november-4-2026-93db1eb4",
    "title": "ISC Stormcast Podcast – November 4, 2026",
    "summary": "The SANS Internet Storm Center released its weekly ISC Stormcast podcast for Wednesday, November 4, 2026. The episode covers current threat landscape, emerging attack trends, and defensive best practices, featuring expert commentary and real‑world incident analyses. Listeners can access the recording and transcript via the ISC website for up‑to‑date threat intelligence.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33486",
    "publishedAt": "2026-11-04T02:10:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isc-stormcast-podcast-november-4-2026",
      "article-93db1eb4",
      "93db1eb4",
      "isc-stormcast-podcast-november-4-2026-57dd7e"
    ]
  },
  {
    "slug": "69gb-philippine-government-data-exfiltrated-35c7c0ec",
    "title": "69GB Philippine Government Data Exfiltrated",
    "summary": "An unknown operator exfiltrated 69GB of SQL Server backups from the Philippine Overseas Employment Administration in under 30 minutes, confirming a data breach. The breach likely exploited misconfigured database permissions, enabling unauthorized access to sensitive migrant worker records. The agency has not released a patch; security teams should enforce least‑privilege access, audit logs, and monitor for anomalous data transfers.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/philippine-migrant-worker-data-69gb-government-breach",
    "publishedAt": "2026-11-04T02:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "69gb-philippine-government-data-exfiltrated",
      "article-35c7c0ec",
      "35c7c0ec",
      "69gb-philippine-government-data-exfiltrated-1b6ffb"
    ]
  },
  {
    "slug": "microsoft-detects-trojanized-installers-delivering-f34da954",
    "title": "Microsoft Detects Trojanized Installers Delivering Monetization Payloads",
    "summary": "Microsoft has identified a supply‑chain threat where installers are trojanized to deliver monetization payloads. The malicious installers exploit legitimate distribution channels, embedding code that redirects users to advertising or payment services. Microsoft recommends verifying installer signatures, monitoring for anomalous outbound traffic, and applying the latest security patches to mitigate the threat.",
    "category": "General",
    "severity": "LOW",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/fake-download-campaign-uses-trojanized-installers-to-de",
    "publishedAt": "2026-11-04T01:30:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-detects-trojanized-installers-delivering",
      "article-f34da954",
      "f34da954",
      "microsoft-detects-trojanized-installers-delivering-6444e7",
      "microsoft-detects-trojanized-installers-delivering-monetizat"
    ]
  },
  {
    "slug": "workos-artex-ai-internal-sales-app-breach-9d11b39f",
    "title": "WorkOS ARTEX AI Internal Sales App Breach",
    "summary": "An internal sales application at WorkOS: ARTEX AI suffered a breach exposing sensitive customer data. The incident involved unauthorized access to the application, potentially compromising sales records and personal information, though the extent of data loss remains unquantified. Security teams should review telemetry, deploy detection rules, and apply the latest patch to mitigate further exposure.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/workos-says-attacker-used-artex-ai-to-breach-internal-s",
    "publishedAt": "2026-11-04T01:23:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "workos-artex-ai-internal-sales-app-breach",
      "article-9d11b39f",
      "9d11b39f",
      "workos-artex-ai-internal-sales-app-breach-5e8986"
    ]
  },
  {
    "slug": "cpguard-update-channel-backdoor-steals-password-ha-8d7f792d",
    "title": "cPGuard Update Channel Backdoor Steals Password Hashes",
    "summary": "A backdoor in cPGuard’s update channel enabled attackers to steal password hashes and gain unauthorized system access. The compromise involved malicious code delivered during legitimate updates, allowing credential theft and potential lateral movement within affected networks. Administrators should audit update mechanisms, apply the latest security patch, and monitor for anomalous credential usage.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cpguard-update-channel-hijacked-to-backdoor-linux-serve",
    "publishedAt": "2026-11-04T01:22:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cpguard-update-channel-backdoor-steals-password-ha",
      "article-8d7f792d",
      "8d7f792d",
      "cpguard-update-channel-backdoor-steals-password-ha-321089",
      "cpguard-update-channel-backdoor-steals-password-hashes"
    ]
  },
  {
    "slug": "yubico-launches-yubiid-to-secure-identity-verifica-347ac42b",
    "title": "Yubico Launches YubiID to Secure Identity Verification",
    "summary": "Yubico announced the YubiID service to integrate identity verification directly into credential enrollment and recovery across enterprise identity platforms. The tool addresses authentication gaps in phishing-resistant frameworks while introducing a beta release for post-quantum YubiKey hardware keys. Security teams can leverage the platform to streamline secure user onboarding and enhance identity lifecycle management across existing infrastructure.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/identity-access-management-security/beyond-phishing-resistant-yubico-identity-verification-gap",
    "publishedAt": "2026-11-04T01:05:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "yubico-launches-yubiid-to-secure-identity-verifica",
      "article-347ac42b",
      "347ac42b",
      "yubico-launches-yubiid-to-secure-identity-verifica-189fcc",
      "yubico-launches-yubiid-to-secure-identity-verification"
    ]
  },
  {
    "slug": "google-releases-chrome-157-for-android-b625cf27",
    "title": "Google Releases Chrome 157 for Android",
    "summary": "Google released Chrome 157 (157.0.8103.38) for Android, adding stability and performance improvements while carrying the same security fixes as the desktop releases. The update does not introduce new vulnerabilities and does not change the browser’s threat surface. Android users can install it via Google Play within days, and developers should file bugs through the Chrome tracker for any new issues.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-for-android-update.html",
    "publishedAt": "2026-11-03T23:13:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-releases-chrome-157-for-android",
      "article-b625cf27",
      "b625cf27",
      "google-releases-chrome-157-for-android-3ab5d1"
    ]
  },
  {
    "slug": "european-fridge-attacks-highlight-cold-chain-secur-f6aee072",
    "title": "European Fridge Attacks Highlight Cold‑Chain Security Risks",
    "summary": "Recent attacks on European refrigerators exposed vulnerabilities in their internet connectivity and remote access controls. The incidents demonstrate that temperature‑controlled infrastructure, such as industrial refrigeration, can be compromised through inadequate security practices, potentially disrupting critical supply chains. Operators should enforce network segmentation, secure remote access, and regular firmware updates to mitigate these risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/ics-ot-security/fresh-european-fridge-attacks-cold-chain-security",
    "publishedAt": "2026-11-03T22:16:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "european-fridge-attacks-highlight-cold-chain-secur",
      "article-f6aee072",
      "f6aee072",
      "european-fridge-attacks-highlight-cold-chain-secur-6b119a",
      "european-fridge-attacks-highlight-cold-chain-security-risks"
    ]
  },
  {
    "slug": "germany-seizes-crime-as-a-service-fraud-platform-86b772dd",
    "title": "Germany Seizes Crime‑as‑a‑Service Fraud Platform",
    "summary": "German police, in a multinational operation, dismantled a crime‑as‑a‑service outfit that provided fraudulent trading platforms to investment scammers. The investigation uncovered a network that enabled scammers to create and host deceptive brokerage sites, facilitating large‑scale financial fraud. Authorities seized the infrastructure and are prosecuting the operators, underscoring the threat posed by such service‑based fraud ecosystems.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/germany-crime-service-investment-fraud",
    "publishedAt": "2026-11-03T21:57:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "germany-seizes-crime-as-a-service-fraud-platform",
      "article-86b772dd",
      "86b772dd",
      "germany-seizes-crime-as-a-service-fraud-platform-25598b"
    ]
  },
  {
    "slug": "cve-2026-119084-amazon-redshift-jdbc-driver-rce-vi-174b5bcc",
    "title": "CVE-2026-119084: Amazon Redshift JDBC Driver RCE via Class Loading",
    "summary": "CVE-2026-119084 allows remote code execution in Amazon Redshift JDBC Driver versions prior to 2.3.0 when parsing JDBC URLs or AWS credential profiles. The flaw lets an attacker load and run arbitrary classes, bypassing authentication and compromising the host. Amazon released driver 2.3.0 and later, which removes the unsafe loading path; teams should upgrade or apply the patch.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-168-aws/",
    "publishedAt": "2026-11-03T21:32:29.000Z",
    "cves": [
      "CVE-2026-119084"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-119084-amazon-redshift-jdbc-driver-rce-vi",
      "article-174b5bcc",
      "174b5bcc",
      "cve-2026-119084-amazon-redshift-jdbc-driver-rce-vi-730365",
      "cve-2026-119084-amazon-redshift-jdbc-driver-rce-via-class-lo"
    ]
  },
  {
    "slug": "workos-breach-via-artex-ai-exposes-customer-data-c386cd67",
    "title": "WorkOS Breach via ARTEX AI Exposes Customer Data",
    "summary": "WorkOS reported an attacker used the ARTEX AI module to breach its sales app and access business contact records and customer communications. The breach exploited a privilege‑escalation flaw in the AI integration, granting unauthorized read access to sensitive data without authentication. WorkOS applied a patch limiting AI module permissions and advises customers to review access controls and monitor activity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/workos-says-attacker-used-artex-ai-to-breach-internal-sales-app/",
    "publishedAt": "2026-11-03T21:28:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "workos-breach-via-artex-ai-exposes-customer-data",
      "article-c386cd67",
      "c386cd67",
      "workos-breach-via-artex-ai-exposes-customer-data-70fa52"
    ]
  },
  {
    "slug": "gorbag-apt-self-deleting-malware-detection-guide-217b96d7",
    "title": "Gorbag APT Self‑Deleting Malware Detection Guide",
    "summary": "Gorbag APT has deployed self‑deleting malware delivered via spearphishing campaigns targeting corporate email users. The malware erases its own code after execution, evading traditional signature‑based detection and allowing attackers to maintain persistence without leaving forensic footprints. Security teams should monitor for anomalous email attachments, enable advanced threat protection, and apply the latest email gateway updates to block known Gorbag indicators.",
    "category": "Nation State",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/gorbag-apt-group-hits-ukrainian-courts-and-city-council",
    "publishedAt": "2026-11-03T20:50:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gorbag-apt-self-deleting-malware-detection-guide",
      "article-217b96d7",
      "217b96d7",
      "gorbag-apt-self-deleting-malware-detection-guide-51f68e"
    ]
  },
  {
    "slug": "chrome-157-update-contains-critical-dawn-buffer-ov-0e495a62",
    "title": "Chrome 157 Update Contains Critical Dawn Buffer Overflow",
    "summary": "Google Chrome promoted version 157 to the stable channel, delivering 213 security fixes, including a Dawn buffer overflow. CVE-2026-121156 allows attackers to execute arbitrary code via malformed graphics data, enabling remote code execution with high privilege. Users should install the update immediately; the patch is distributed via the standard channel, with no workarounds needed.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop.html",
    "publishedAt": "2026-11-03T20:38:18.791Z",
    "cves": [
      "CVE-2026-121156"
    ],
    "additionalSources": [],
    "aliases": [
      "chrome-157-update-contains-critical-dawn-buffer-ov",
      "article-0e495a62",
      "0e495a62",
      "chrome-157-update-contains-critical-dawn-buffer-ov-5db12d",
      "chrome-157-update-contains-critical-dawn-buffer-overflow"
    ]
  },
  {
    "slug": "red-hat-releases-python-dns-security-update-b6e4bbd6",
    "title": "Red Hat Releases Python-dns Security Update",
    "summary": "Red Hat released a security update for python‑dns on RHEL 8, addressing CVE‑2026‑43871. The flaw, rated Important, allows improper input handling that could lead to arbitrary code execution or denial of service, with a CVSS base score in the 7‑8 range. Red Hat has published the patch; administrators should apply it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94749",
    "publishedAt": "2026-11-03T20:32:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-python-dns-security-update",
      "article-b6e4bbd6",
      "b6e4bbd6",
      "red-hat-releases-python-dns-security-update-37d8ae"
    ]
  },
  {
    "slug": "binance-breach-via-fake-job-interview-b6f03f26",
    "title": "Binance Breach via Fake Job Interview",
    "summary": "Binance disclosed that North Korean hackers used a fake job interview to trick an employee into installing malware, compromising wallet infrastructure. The malware enabled credential theft and privileged access, allowing attackers to siphon roughly $6.34 billion in digital assets. Binance has secured its systems and is investigating; teams should review vetting procedures and monitor wallet activity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/binance-says-fake-job-interview-led-to-63-billion-crypto-heist/",
    "publishedAt": "2026-11-03T20:05:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-breach-via-fake-job-interview",
      "article-b6f03f26",
      "b6f03f26",
      "binance-breach-via-fake-job-interview-5121c6"
    ]
  },
  {
    "slug": "harvard-exposes-851-000-emails-in-breach-9b7ceb07",
    "title": "Harvard Exposes 851,000 Emails in Breach",
    "summary": "A breach at Harvard exposed 851,000 email addresses, compromising user credentials and potentially enabling phishing attacks. The incident involved unauthorized access to the university’s audit database, revealing sensitive contact information and internal email addresses. Security teams should review root‑cause telemetry, deploy detection rules, and apply patches immediately to prevent further exposure and mitigate credential theft.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/harvard-university-data-breach-exposed-info-of-851-000",
    "publishedAt": "2026-11-03T19:50:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "harvard-exposes-851-000-emails-in-breach",
      "article-9b7ceb07",
      "9b7ceb07",
      "harvard-exposes-851-000-emails-in-breach-4b3b06"
    ]
  },
  {
    "slug": "google-removes-x-cpe-botnet-from-android-tv-boxes-ad747b86",
    "title": "Google Removes X.CPE Botnet from Android TV Boxes",
    "summary": "Google announced the dismantlement of the X.CPE botnet, which primarily infected Android TV set‑top boxes and other Android‑based IoT devices. The botnet leveraged compromised firmware updates to distribute malware, enabling attackers to harvest device credentials and exfiltrate data from connected services.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/google-dismantles-botnet-hidden-android-tv-boxes",
    "publishedAt": "2026-11-03T19:48:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-removes-x-cpe-botnet-from-android-tv-boxes",
      "article-ad747b86",
      "ad747b86",
      "google-removes-x-cpe-botnet-from-android-tv-boxes-4e4f2c"
    ]
  },
  {
    "slug": "google-releases-chrome-stable-157-for-ios-a28f686b",
    "title": "Google Releases Chrome Stable 157 for iOS",
    "summary": "Google released Chrome Stable 157 (157.0.8103.37) for iOS, marking the latest iteration of its mobile browser. The update focuses on stability and performance improvements, incorporating minor bug fixes and optimizations without any new security patches. The new build will be available on the App Store within hours, allowing users to upgrade their browsers promptly.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-stable-for-ios-update.html",
    "publishedAt": "2026-11-03T19:13:32.969Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-releases-chrome-stable-157-for-ios",
      "article-a28f686b",
      "a28f686b",
      "google-releases-chrome-stable-157-for-ios-364d39"
    ]
  },
  {
    "slug": "red-hat-issues-critical-fence-agents-update-ad925f9c",
    "title": "Red Hat Issues Critical Fence‑Agents Update",
    "summary": "Red Hat released a critical security update for fence-agents targeting RHEL 9.2 Update Services for SAP Solutions. The update addresses multiple vulnerabilities with CVSS base scores listed in the CVE references, and Red Hat rated the impact as Critical. Security teams should apply the fence-agents update immediately to mitigate the high‑risk flaws.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94634",
    "publishedAt": "2026-11-03T18:59:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-fence-agents-update",
      "article-ad925f9c",
      "ad925f9c",
      "red-hat-issues-critical-fence-agents-update-37d8b2"
    ]
  },
  {
    "slug": "aws-oauth-audience-validation-bypass-cve-2026-1154-c45c948e",
    "title": "AWS OAuth Audience Validation Bypass CVE-2026-115413",
    "summary": "AWS discovered a flaw in the MCP Server OAuth that bypasses token audience validation, allowing misuse of tokens issued for other services. CVE-2026-115413 enables attackers to gain unauthorized access to protected resources by manipulating the audience claim in a valid token. AWS has issued a patch; administrators should update the MCP Server and enforce strict audience checks to prevent exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-152-aws/",
    "publishedAt": "2026-11-03T18:58:52.000Z",
    "cves": [
      "CVE-2026-115413"
    ],
    "additionalSources": [],
    "aliases": [
      "aws-oauth-audience-validation-bypass-cve-2026-1154",
      "article-c45c948e",
      "c45c948e",
      "aws-oauth-audience-validation-bypass-cve-2026-1154-4dd94b",
      "aws-oauth-audience-validation-bypass-cve-2026-115413"
    ]
  },
  {
    "slug": "aws-amplify-xss-in-maplibre-gl-js-amplify-popup-re-e1d9033d",
    "title": "AWS Amplify XSS in maplibre-gl-js-amplify Popup Rendering CVE-2026-121652",
    "summary": "AWS identified a stored cross‑site scripting flaw in the Amplify maplibre‑gl‑js‑amplify library that affects popup and geofence‑control rendering. The vulnerability, CVE-2026-121652, allows attackers to inject malicious scripts into map popups, potentially stealing user data or hijacking sessions. AWS recommends updating to the latest library version and sanitizing user input in popup content to mitigate the XSS risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-167-aws/",
    "publishedAt": "2026-11-03T18:54:53.000Z",
    "cves": [
      "CVE-2026-121652"
    ],
    "additionalSources": [],
    "aliases": [
      "aws-amplify-xss-in-maplibre-gl-js-amplify-popup-re",
      "article-e1d9033d",
      "e1d9033d",
      "aws-amplify-xss-in-maplibre-gl-js-amplify-popup-re-74b83e",
      "aws-amplify-xss-in-maplibre-gl-js-amplify-popup-rendering-cv"
    ]
  },
  {
    "slug": "llmjacking-drives-1m-cloud-ai-billing-fraud-2aad2aed",
    "title": "LLMjacking Drives $1M Cloud AI Billing Fraud",
    "summary": "Large language model hijacking attacks, called LLMjacking, are generating fraudulent cloud AI charges against Google Cloud customers. Attackers trigger high‑volume inference requests via unauthorized API calls, costing firms over $100,000 daily and totaling $1 million in billed usage. Customers should audit billing logs, revoke compromised keys, enable usage limits, and monitor for anomalous request patterns to mitigate further costs.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/google-llmjacking-attacks-rack-up-1-million-in-cloud-ai-charges/",
    "publishedAt": "2026-11-03T18:51:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "llmjacking-drives-1m-cloud-ai-billing-fraud",
      "article-2aad2aed",
      "2aad2aed",
      "llmjacking-drives-1m-cloud-ai-billing-fraud-3be83d"
    ]
  },
  {
    "slug": "chrome-extended-stable-update-156-0-8078-88-releas-96f8a50a",
    "title": "Chrome Extended Stable Update 156.0.8078.88 Released",
    "summary": "Google Chrome’s Extended Stable channel received update 156.0.8078.88 for Windows and macOS, rolling out over the next weeks. The update includes multiple security fixes for previously reported vulnerabilities, though no CVE identifiers are listed. Users should install the update promptly to maintain protection against known exploits and review the Chrome release log for details.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/extended-stable-update-for-desktop.html",
    "publishedAt": "2026-11-03T18:47:14.028Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-extended-stable-update-156-0-8078-88-releas",
      "article-96f8a50a",
      "96f8a50a",
      "chrome-extended-stable-update-156-0-8078-88-releas-649d4c",
      "chrome-extended-stable-update-156-0-8078-88-released"
    ]
  },
  {
    "slug": "europol-seizes-100-servers-for-fake-trading-scam-5942a559",
    "title": "Europol Seizes 100 Servers for Fake Trading Scam",
    "summary": "Europol seized 100 servers linked to a fake trading website scam targeting unsuspecting users. The operation uncovered threat actor profiles and court findings, indicating a coordinated phishing and credential theft campaign, though no direct exploitation of software vulnerabilities was reported. Law enforcement recommends monitoring for similar domain registrations and implementing stricter domain validation controls to mitigate future fraud.",
    "category": "General",
    "severity": "LOW",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/police-seizes-over-100-servers-in-investment-scam-crack",
    "publishedAt": "2026-11-03T18:47:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "europol-seizes-100-servers-for-fake-trading-scam",
      "article-5942a559",
      "5942a559",
      "europol-seizes-100-servers-for-fake-trading-scam-785955"
    ]
  },
  {
    "slug": "msecure-advises-password-and-2fa-reset-after-suspi-21661f78",
    "title": "mSecure Advises Password and 2FA Reset After Suspicious Activity",
    "summary": "mSecure password manager users received an email warning of suspicious activity linked to the app, prompting immediate credential changes. The alert indicates potential unauthorized access to stored passwords, 2FA tokens, and passkeys, though no data exfiltration has been confirmed. Users should change all passwords, reset 2FA, remove passkeys, and review account activity logs to mitigate potential compromise.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/msecure-warns-users-to-change-passwords.html",
    "publishedAt": "2026-11-03T18:46:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "msecure-advises-password-and-2fa-reset-after-suspi",
      "article-21661f78",
      "21661f78",
      "msecure-advises-password-and-2fa-reset-after-suspi-fd9126",
      "msecure-advises-password-and-2fa-reset-after-suspicious-acti"
    ]
  },
  {
    "slug": "3am-ransomware-ai-driven-school-attack-detection-f4c7db26",
    "title": "3AM Ransomware AI‑Driven School Attack Detection",
    "summary": "3AM ransomware has launched AI‑driven attacks against school estate systems, encrypting critical data and demanding ransom. The malware leverages machine‑learning models to evade detection, targeting backup files and exploiting unpatched vulnerabilities for lateral movement. Apply the latest ransomware protection rules, patch vulnerable assets, isolate affected networks, and monitor for lateral movement to prevent further spread.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/uk-school-estate-hit-by-3am-ransomware-in-suspected-ai",
    "publishedAt": "2026-11-03T18:45:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "3am-ransomware-ai-driven-school-attack-detection",
      "article-f4c7db26",
      "f4c7db26",
      "3am-ransomware-ai-driven-school-attack-detection-627225"
    ]
  },
  {
    "slug": "apple-warns-german-lawmakers-of-spyware-targeting-51916cf9",
    "title": "Apple Warns German Lawmakers of Spyware Targeting",
    "summary": "Apple warned several German lawmakers and foreign policy staff about spyware targeting them in 99 countries. The spyware exploits zero‑day vulnerabilities in iOS and macOS to covertly capture communications, with no public evidence of data exfiltration yet. Affected users should install the latest iOS and macOS updates, enable two‑factor authentication, and monitor network traffic for anomalies to mitigate espionage risk.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/german-officials-among-apple-spyware-warning-recipients",
    "publishedAt": "2026-11-03T18:44:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-warns-german-lawmakers-of-spyware-targeting",
      "article-51916cf9",
      "51916cf9",
      "apple-warns-german-lawmakers-of-spyware-targeting-1f6330"
    ]
  },
  {
    "slug": "cve-2026-119922-babelfish-for-postgresql-privilege-6e897223",
    "title": "CVE-2026-119922 - Babelfish for PostgreSQL Privilege Escalation",
    "summary": "Bulletin ID: 2026-165-AWS Publication Date: 11/03/2026 10:00 AM PST Description: Improper access control in the Babelfish for PostgreSQL extension versions 1.2-1.5, 2.1-2.15, 3.1-3.12, 4.0-4.8, 5.1-5.4 allows remote authenticated users to elevate their privileges. We recommend you upgrade to Babelfish for PostgreSQL extension versions Please refer to the article below for the most up-to-date and complete information related to this AWS Security Bulletin.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-165-aws/",
    "publishedAt": "2026-11-03T18:26:54.000Z",
    "cves": [
      "CVE-2026-119922"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-119922-babelfish-for-postgresql-privilege",
      "article-6e897223",
      "6e897223",
      "cve-2026-119922-babelfish-for-postgresql-privilege-7821ef",
      "cve-2026-119922-babelfish-for-postgresql-privilege-escalatio"
    ]
  },
  {
    "slug": "red-hat-edge-manager-1-2-2-receives-security-updat-c8a4ee59",
    "title": "Red Hat Edge Manager 1.2.2 Receives Security Update",
    "summary": "Red Hat Edge Manager Version 1.2.2 receives a security update addressing unspecified vulnerabilities that could allow unauthorized access or privilege escalation. The update patches internal components, though specific root causes remain undisclosed, and is part of Red Hat's ongoing effort to secure edge computing environments. Users should apply the patch immediately to maintain system integrity and prevent potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94632",
    "publishedAt": "2026-11-03T18:24:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-edge-manager-1-2-2-receives-security-updat",
      "article-c8a4ee59",
      "c8a4ee59",
      "red-hat-edge-manager-1-2-2-receives-security-updat-37d8b2",
      "red-hat-edge-manager-1-2-2-receives-security-update"
    ]
  },
  {
    "slug": "chainstack-breach-exposes-customer-data-and-passwo-5790daba",
    "title": "Chainstack Breach Exposes Customer Data and Password Hashes",
    "summary": "Chainstack, a blockchain infrastructure provider, suffered a breach that granted an unauthorized party access to parts of its production systems. The intrusion is linked to a large‑scale AI‑powered attack campaign, potentially allowing exfiltration of customer data and password hashes. Chainstack has disclosed the incident, is investigating, patching vulnerabilities, and notifying affected customers.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/chainstack-reports-production-systems.html",
    "publishedAt": "2026-11-03T18:16:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chainstack-breach-exposes-customer-data-and-passwo",
      "article-5790daba",
      "5790daba",
      "chainstack-breach-exposes-customer-data-and-passwo-1376aa",
      "chainstack-breach-exposes-customer-data-and-password-hashes"
    ]
  },
  {
    "slug": "rhsa-2026-94629-important-dpdk-security-update-b0b12e73",
    "title": "RHSA-2026:94629: Important: dpdk security update",
    "summary": "An update for dpdk is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. The vulnerability is tracked as CVE-2026-43871.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94629",
    "publishedAt": "2026-11-03T18:13:22.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-94629-important-dpdk-security-update",
      "article-b0b12e73",
      "b0b12e73",
      "rhsa-2026-94629-important-dpdk-security-update-37d8b2"
    ]
  },
  {
    "slug": "apple-releases-ios-27-3-beta-bea3c93c",
    "title": "Apple Releases iOS 27.3 Beta",
    "summary": "Apple released iOS 27.3 beta (24C5037i) to its developer community. The beta introduces performance improvements, UI tweaks, security enhancements, refined background task handling, and minor bug fixes for messaging and notification services, but no public vulnerabilities are disclosed. Developers can download the beta via Apple's developer portal and should test for compatibility before deployment.",
    "category": "General",
    "severity": "LOW",
    "source": "Apple Security Updates",
    "sourceUrl": "https://developer.apple.com/news/releases/?id=11032026a",
    "publishedAt": "2026-11-03T18:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-releases-ios-27-3-beta",
      "article-bea3c93c",
      "bea3c93c",
      "apple-releases-ios-27-3-beta-66bdb2"
    ]
  },
  {
    "slug": "apple-releases-ipados-27-3-beta-2bcb8868",
    "title": "Apple Releases iPadOS 27.3 Beta",
    "summary": "Apple released iPadOS 27.3 beta (24C5037i) to its developer community. The beta adds performance improvements, UI tweaks, security enhancements, refined background task handling, and minor bug fixes for messaging and notification services, but no public vulnerabilities are disclosed. Developers can download the beta via Apple's developer portal and should test for compatibility before deployment.",
    "category": "General",
    "severity": "LOW",
    "source": "Apple Security Updates",
    "sourceUrl": "https://developer.apple.com/news/releases/?id=11032026b",
    "publishedAt": "2026-11-03T18:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-releases-ipados-27-3-beta",
      "article-2bcb8868",
      "2bcb8868",
      "apple-releases-ipados-27-3-beta-66bdb2"
    ]
  },
  {
    "slug": "rhsa-2026-94630-important-dpdk-security-update-c8053797",
    "title": "RHSA-2026:94630: Important: dpdk security update",
    "summary": "An update for dpdk is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. The vulnerability is tracked as CVE-2026-43871.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94630",
    "publishedAt": "2026-11-03T17:54:39.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-94630-important-dpdk-security-update",
      "article-c8053797",
      "c8053797",
      "rhsa-2026-94630-important-dpdk-security-update-37d8b2"
    ]
  },
  {
    "slug": "europe-wide-fridge-control-attacks-spoil-grocery-s-6f1889d7",
    "title": "Europe‑wide Fridge Control Attacks Spoil Grocery Stock",
    "summary": "Supermarket and grocery refrigerator controls across Europe were compromised, marking a second wave of attacks that defrosted fridges and spoiled inventory. Unidentified actors exploited a remote control vulnerability in IoT refrigeration systems, enabling unauthorized temperature manipulation and causing significant product loss. Operators should apply vendor firmware updates, enforce network segmentation, and monitor anomalous temperature changes to mitigate future incidents.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/british-businesses-caught-in-europe-wide-supermarket-fridge-attacks",
    "publishedAt": "2026-11-03T17:43:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "europe-wide-fridge-control-attacks-spoil-grocery-s",
      "article-6f1889d7",
      "6f1889d7",
      "europe-wide-fridge-control-attacks-spoil-grocery-s-42810f",
      "europe-wide-fridge-control-attacks-spoil-grocery-stock"
    ]
  },
  {
    "slug": "secure-github-actions-against-supply-chain-threats-0ac64a7d",
    "title": "Secure GitHub Actions Against Supply Chain Threats",
    "summary": "This guide tackles supply‑chain threats to GitHub Actions, covering malicious pull requests, credential theft, dependency risks, and release pipeline vulnerabilities. It explains how insecure workflow configurations and unverified third‑party actions enable attackers to inject malicious code or exfiltrate secrets. The article recommends restricting workflow permissions, using signed actions, scanning dependencies, and monitoring pipeline activity to mitigate risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Socket.dev",
    "sourceUrl": "https://socket.dev/blog/hardening-github-actions-against-outside-threats",
    "publishedAt": "2026-11-03T17:41:44.155Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "secure-github-actions-against-supply-chain-threats",
      "article-0ac64a7d",
      "0ac64a7d",
      "secure-github-actions-against-supply-chain-threats-4eba51"
    ]
  },
  {
    "slug": "ubuntu-libvips-vulnerabilities-exploit-integer-ove-7579da09",
    "title": "Ubuntu libvips Vulnerabilities Exploit Integer Overflows",
    "summary": "Ubuntu users face multiple libvips vulnerabilities that allow attackers to exploit integer overflows during PDF and GIF processing. CVE-2025-59933 and CVE-2026-33327 trigger crashes or potential arbitrary code execution on affected Ubuntu releases, with CVSS scores indicating high severity. Canonical recommends applying the latest libvips updates via package manager or installing the security patches released in USN-8994-1.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8994-1",
    "publishedAt": "2026-11-03T17:39:43.000Z",
    "cves": [
      "CVE-2025-59933",
      "CVE-2026-33327"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-libvips-vulnerabilities-exploit-integer-ove",
      "article-7579da09",
      "7579da09",
      "ubuntu-libvips-vulnerabilities-exploit-integer-ove-7fbb9a",
      "ubuntu-libvips-vulnerabilities-exploit-integer-overflows"
    ]
  },
  {
    "slug": "sogo-vulnerability-enables-password-reset-token-th-6b28e205",
    "title": "SOGo Vulnerability Enables Password Reset Token Theft",
    "summary": "SOGo, an open‑source groupware server, contains a flaw that uses client‑supplied Origin headers in password reset link construction. A remote attacker can exploit this to harvest password reset tokens and hijack user accounts, potentially compromising sensitive data. Administrators should update to the latest SOGo release or apply the security patch provided in USN-8993-1 to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8993-1",
    "publishedAt": "2026-11-03T17:38:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sogo-vulnerability-enables-password-reset-token-th",
      "article-6b28e205",
      "6b28e205",
      "sogo-vulnerability-enables-password-reset-token-th-7fbb9e",
      "sogo-vulnerability-enables-password-reset-token-theft"
    ]
  },
  {
    "slug": "shapelib-shpsort-double-free-vulnerability-51438691",
    "title": "Shapelib Shpsort Double Free Vulnerability",
    "summary": "Ubuntu identified a double‑free flaw in the shpsort utility of Shapelib, a library used for handling shapefile data. Improper input validation can trigger a double free, potentially leading to denial of service or arbitrary code execution if an attacker supplies crafted data. Ubuntu recommends applying the latest Shapelib update or patching the library to eliminate the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8992-1",
    "publishedAt": "2026-11-03T17:38:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "shapelib-shpsort-double-free-vulnerability",
      "article-51438691",
      "51438691",
      "shapelib-shpsort-double-free-vulnerability-7fbba1"
    ]
  },
  {
    "slug": "rxvt-unicode-escape-sequence-vulnerability-3f6d84e9",
    "title": "rxvt‑Unicode Escape Sequence Vulnerability",
    "summary": "Ubuntu discovered that rxvt‑unicode mishandles specific escape sequences, creating a potential code execution vector in terminal sessions. When a user renders specially crafted text, the flaw can trigger arbitrary code execution, posing a risk to any system with exposed terminals. Ubuntu advises installing the latest rxvt‑unicode update or applying the provided patch to mitigate the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8991-1",
    "publishedAt": "2026-11-03T17:37:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rxvt-unicode-escape-sequence-vulnerability",
      "article-3f6d84e9",
      "3f6d84e9",
      "rxvt-unicode-escape-sequence-vulnerability-7fbba5"
    ]
  },
  {
    "slug": "sprockets-server-vulnerability-allows-remote-file-0e0e69ff",
    "title": "Sprockets Server Vulnerability Allows Remote File Access",
    "summary": "A flaw in the Sprockets server’s request handling permits specially crafted requests to bypass directory restrictions when deployed in production. The vulnerability could enable a remote attacker to read files outside the application’s root directory, potentially exposing sensitive data. A patch is available in the latest Sprockets release; administrators should upgrade promptly to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8990-1",
    "publishedAt": "2026-11-03T17:37:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sprockets-server-vulnerability-allows-remote-file",
      "article-0e0e69ff",
      "0e0e69ff",
      "sprockets-server-vulnerability-allows-remote-file-7fbba9",
      "sprockets-server-vulnerability-allows-remote-file-access"
    ]
  },
  {
    "slug": "relax-and-recover-generates-world-readable-initrd-595c58e7",
    "title": "Relax‑and‑Recover Generates World‑Readable Initrd",
    "summary": "The Relax‑and‑Recover tool creates an initrd with world‑readable permissions when GRUB_RESCUE is enabled, exposing kernel and configuration data. A local attacker could read the initrd to retrieve sensitive information such as passwords or cryptographic keys. Updating to the latest Relax‑and‑Recover version removes the permission issue; administrators should apply the patch immediately.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8988-1",
    "publishedAt": "2026-11-03T17:37:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "relax-and-recover-generates-world-readable-initrd",
      "article-595c58e7",
      "595c58e7",
      "relax-and-recover-generates-world-readable-initrd-7fbbff"
    ]
  },
  {
    "slug": "libuser-gecos-field-validation-vulnerabilities-adc6ae5d",
    "title": "libuser GECOS Field Validation Vulnerabilities",
    "summary": "Two libuser vulnerabilities were disclosed affecting user information handling: CVE-2015-3245 allows local attackers to corrupt the passwd file via improper GECOS field validation, resulting in denial of service; CVE-2015-3246 permits privilege escalation through inconsistent passwd file modification during updates. Both require local access and impact system authentication integrity. Users should apply the updated libuser package to resolve these issues.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8987-1",
    "publishedAt": "2026-11-03T17:36:51.000Z",
    "cves": [
      "CVE-2015-3245",
      "CVE-2015-3246"
    ],
    "additionalSources": [],
    "aliases": [
      "libuser-gecos-field-validation-vulnerabilities",
      "article-adc6ae5d",
      "adc6ae5d",
      "libuser-gecos-field-validation-vulnerabilities-7fbc03"
    ]
  },
  {
    "slug": "swift-mailer-remote-code-execution-vulnerability-ac8066f5",
    "title": "Swift Mailer Remote Code Execution Vulnerability",
    "summary": "A remote code execution vulnerability was discovered in Swift Mailer due to improper sanitization of email addresses in the mail transport layer. An unauthenticated attacker could exploit this flaw by passing extra parameters to the underlying mail command. The vendor issued a security update to remediate the issue and prevent arbitrary code execution from remote locations.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8986-1",
    "publishedAt": "2026-11-03T17:36:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "swift-mailer-remote-code-execution-vulnerability",
      "article-ac8066f5",
      "ac8066f5",
      "swift-mailer-remote-code-execution-vulnerability-7fbc07"
    ]
  },
  {
    "slug": "usn-8985-1-net-easytcp-vulnerability-6d448c3f",
    "title": "USN-8985-1: Net::EasyTCP vulnerability",
    "summary": "It was discovered that Net::EasyTCP used the built-in Perl rand() function to generate encryption keys when no strong randomization module was present. An attacker could possibly use this issue to predict the keys and obtain sensitive information.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8985-1",
    "publishedAt": "2026-11-03T17:36:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-8985-1-net-easytcp-vulnerability",
      "article-6d448c3f",
      "6d448c3f",
      "usn-8985-1-net-easytcp-vulnerability-7fbc0b"
    ]
  },
  {
    "slug": "usn-8984-1-jabberd2-vulnerability-841bcc94",
    "title": "USN-8984-1: jabberd2 vulnerability",
    "summary": "It was discovered that jabberd2 allowed SASL ANONYMOUS authentication even when it was not enabled in the configuration. A remote attacker could possibly use this issue to bypass authentication.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8984-1",
    "publishedAt": "2026-11-03T17:35:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-8984-1-jabberd2-vulnerability",
      "article-841bcc94",
      "841bcc94",
      "usn-8984-1-jabberd2-vulnerability-7fbc0e"
    ]
  },
  {
    "slug": "trojanized-inno-installers-deliver-monetization-pa-605b70fb",
    "title": "Trojanized Inno Installers Deliver Monetization Payloads",
    "summary": "Microsoft Threat Intelligence identified a fake‑download campaign that distributes trojanized Inno installers to users. The installers embed monetization offers, enabling attackers to generate revenue through click‑throughs and ad fraud while remaining undetected during the installation process. Security teams should block known malicious installer URLs, employ application whitelisting, and monitor installer execution for anomalous behavior.",
    "category": "General",
    "severity": "LOW",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/11/03/fake-download-campaign-uses-trojanized-installers-deliver-monetization-payloads/",
    "publishedAt": "2026-11-03T17:32:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "trojanized-inno-installers-deliver-monetization-pa",
      "article-605b70fb",
      "605b70fb",
      "trojanized-inno-installers-deliver-monetization-pa-3b9711",
      "trojanized-inno-installers-deliver-monetization-payloads"
    ]
  },
  {
    "slug": "openai-deploys-continuous-security-testing-on-pand-42884314",
    "title": "OpenAI Deploys Continuous Security Testing on Pando Git",
    "summary": "OpenAI built Pando, a new Git backend, using Codex agents over 10 weeks while maintaining engineering work. The system now runs continuous red-team testing against Git and Pando to secure its AI-driven development workload. This represents an industry shift toward automated security validation in DevOps pipelines.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/openai-builds-pando-git-infrastructure/",
    "publishedAt": "2026-11-03T17:15:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-deploys-continuous-security-testing-on-pand",
      "article-42884314",
      "42884314",
      "openai-deploys-continuous-security-testing-on-pand-188f15",
      "openai-deploys-continuous-security-testing-on-pando-git"
    ]
  },
  {
    "slug": "cisco-email-gateway-vulnerability-enables-root-rce-804fca82",
    "title": "Cisco Email Gateway Vulnerability Enables Root RCE",
    "summary": "A SQL injection flaw in Cisco AsyncOS email parsing lets unauthenticated attackers run arbitrary OS commands with root privileges on Secure Email Gateway devices. The flaw arises from insufficient email content validation, allowing crafted SQL statements to trigger command execution. Cisco released patches; no workarounds exist, so deploy the update immediately and monitor for unauthorized command execution.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-inj-2bLVGmhX?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DCisco+Secure+Email+Gateway+SQL+Injection+Vulnerability%26vs_k%3D1",
    "publishedAt": "2026-11-03T17:05:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-email-gateway-vulnerability-enables-root-rce",
      "article-804fca82",
      "804fca82",
      "cisco-email-gateway-vulnerability-enables-root-rce-27f659"
    ]
  },
  {
    "slug": "red-hat-issues-openshift-4-21-41-security-update-b6f5b2a1",
    "title": "Red Hat Issues OpenShift 4.21.41 Security Update",
    "summary": "Red Hat released OpenShift Container Platform 4.21.41, addressing several security issues affecting the platform. CVE-2026-43871, identified in the release, poses a high‑severity risk that could allow unauthorized access or privilege escalation within container workloads. Users should upgrade to the 4.21.41 image or apply the patch immediately to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:92286",
    "publishedAt": "2026-11-03T16:58:13.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-openshift-4-21-41-security-update",
      "article-b6f5b2a1",
      "b6f5b2a1",
      "red-hat-issues-openshift-4-21-41-security-update-37d9aa"
    ]
  },
  {
    "slug": "binance-discloses-6-43-billion-theft-via-social-en-32a7dbb8",
    "title": "Binance Discloses $6.43 Billion Theft via Social Engineering and Tampered Homebrew",
    "summary": "Binance disclosed a multi-stage campaign resulting in a record $6.43 billion asset theft, combining tampered Homebrew installations with recruitment-themed social engineering targeting two engineers. The attack bypassed standard security controls through supply chain manipulation and targeted personnel rather than infrastructure directly. Binance stated the incident was not a single phishing event but a coordinated campaign requiring comprehensive forensic investigation.",
    "category": "Breach",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/binance-reveals-how-fake-job-interviews.html",
    "publishedAt": "2026-11-03T16:55:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-discloses-6-43-billion-theft-via-social-en",
      "article-32a7dbb8",
      "32a7dbb8",
      "binance-discloses-6-43-billion-theft-via-social-en-5314da",
      "binance-discloses-6-43-billion-theft-via-social-engineering-"
    ]
  },
  {
    "slug": "red-hat-releases-cockpit-security-patch-ec2883c9",
    "title": "Red Hat Releases Cockpit Security Patch",
    "summary": "An update for Red Hat Enterprise Linux 9 cockpit addresses a critical flaw identified as CVE‑2026‑43871. The vulnerability allows attackers to gain elevated privileges through a buffer overflow in the cockpit web interface, potentially enabling remote code execution. Red Hat has released a patch that must be applied immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94533",
    "publishedAt": "2026-11-03T16:43:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-cockpit-security-patch",
      "article-ec2883c9",
      "ec2883c9",
      "red-hat-releases-cockpit-security-patch-37d8b6"
    ]
  },
  {
    "slug": "binance-reports-6-3b-theft-in-months-long-campaign-d871ab44",
    "title": "Binance Reports $6.3B Theft in Months‑Long Campaign",
    "summary": "Binance disclosed a $6.3 billion cryptocurrency theft executed over several months by attackers linked to North Korea. The campaign leveraged social engineering, including fake recruitment interviews, to compromise accounts and siphon funds, resulting in a massive loss of digital assets. Binance has tightened account verification, implemented stricter monitoring, and urged users to enable multi‑factor authentication to prevent future breaches.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/binance-cryptocurrency-theft-months-long-campaign-nkorea",
    "publishedAt": "2026-11-03T16:42:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-reports-6-3b-theft-in-months-long-campaign",
      "article-d871ab44",
      "d871ab44",
      "binance-reports-6-3b-theft-in-months-long-campaign-1bf56b"
    ]
  },
  {
    "slug": "north-korean-hackers-abuse-internal-ai-tool-and-fa-884953e5",
    "title": "North Korean Hackers Abuse Internal AI Tool and Fake Job Interviews in $6.34 Billion Binance Heist",
    "summary": "North Korean hackers used a fake job interview, a poisoned coding task, and a hijacked internal AI tool to reach Binance’s wallet systems. The FBI says the North Korean group it calls “TraderTraitor” stole more than $6 billion in digital assets on 29 October 2026.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/fake-job-interviews-binance-heist/",
    "publishedAt": "2026-11-03T16:39:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "north-korean-hackers-abuse-internal-ai-tool-and-fa",
      "article-884953e5",
      "884953e5",
      "north-korean-hackers-abuse-internal-ai-tool-and-fa-776dd8",
      "north-korean-hackers-abuse-internal-ai-tool-and-fake-job-int"
    ]
  },
  {
    "slug": "red-hat-issues-critical-kernel-security-update-70923a38",
    "title": "Red Hat Issues Critical Kernel Security Update",
    "summary": "Red Hat released a kernel security update for RHEL 8.4 Advanced Mission Critical and Extended Update Support, addressing several high‑impact kernel flaws. The update is rated Critical by Product Security, with CVSS scores linked to CVE references, implying potential unauthenticated remote code execution. Administrators should apply the patch promptly to mitigate exploitation risks and preserve system integrity.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94623",
    "publishedAt": "2026-11-03T16:26:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-kernel-security-update",
      "article-70923a38",
      "70923a38",
      "red-hat-issues-critical-kernel-security-update-37d8b3"
    ]
  },
  {
    "slug": "msecure-urges-users-to-secure-stored-login-data-09ea03d0",
    "title": "mSecure Urges Users to Secure Stored Login Data",
    "summary": "mSeven Software detected suspicious activity affecting mSecure password manager customers. The company urged current and former users to immediately protect stored passwords, two-factor authentication methods, and passkeys. This warning extends beyond routine password reset notices. Organizations should enforce credential rotation and review account access logs for unauthorized sessions.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/msecure-security-incident/",
    "publishedAt": "2026-11-03T16:21:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "msecure-urges-users-to-secure-stored-login-data",
      "article-09ea03d0",
      "09ea03d0",
      "msecure-urges-users-to-secure-stored-login-data-3b2f1c"
    ]
  },
  {
    "slug": "barracuda-vulnerabilities-chain-to-root-access-60b95613",
    "title": "Barracuda Vulnerabilities Chain to Root Access",
    "summary": "Barracuda disclosed two vulnerabilities that, when chained, allow an attacker to bypass authorization and gain root on affected devices. The pre‑authentication bypass and command injection flaws, identified as CVE‑2026‑116606 with a CVSS score of 9.3, enable unauthenticated remote code execution. Apply the vendor‑issued patch immediately; no workarounds exist, and monitor for privilege escalation anomalies.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/barracuda-flaws-could-be-chained-to.html",
    "publishedAt": "2026-11-03T15:59:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "barracuda-vulnerabilities-chain-to-root-access",
      "article-60b95613",
      "60b95613",
      "barracuda-vulnerabilities-chain-to-root-access-5c1e49"
    ]
  },
  {
    "slug": "hackers-use-ai-agents-to-launch-3am-ransomware-att-6c373d14",
    "title": "Hackers Use AI Agents to Launch 3AM Ransomware Attacks Against UK School Networks",
    "summary": "A ransomware affiliate has hit a group of UK schools with a mix of human control and AI-style automation. The attackers used built-in Windows tools, stolen backup passwords and fake admin accounts to spread across the school network, then encrypted about 37 machines.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-use-ai-agents-2/",
    "publishedAt": "2026-11-03T15:55:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-use-ai-agents-to-launch-3am-ransomware-att",
      "article-6c373d14",
      "6c373d14",
      "hackers-use-ai-agents-to-launch-3am-ransomware-att-ceebd3",
      "hackers-use-ai-agents-to-launch-3am-ransomware-attacks-again"
    ]
  },
  {
    "slug": "hackers-raise-supermarket-freezers-to-50-c-114500b3",
    "title": "Hackers Raise Supermarket Freezers to 50°C",
    "summary": "Hackers targeted supermarket refrigeration systems in at least ten European countries, manipulating temperature controls to raise freezers to 50°C. The attack forced retailers to remove chilled and frozen goods, exposing the vulnerability of connected HVAC equipment and threatening the food supply chain. Operators should isolate affected systems, apply vendor firmware updates, and enforce stricter access controls to prevent further sabotage.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/supermarket-refrigeration-systems-across-europe/",
    "publishedAt": "2026-11-03T15:51:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-raise-supermarket-freezers-to-50-c",
      "article-114500b3",
      "114500b3",
      "hackers-raise-supermarket-freezers-to-50-c-47fd09"
    ]
  },
  {
    "slug": "red-hat-issues-important-kernel-security-update-20d26e92",
    "title": "Red Hat Issues Important Kernel Security Update",
    "summary": "Red Hat released a kernel security update for RHEL 8.4 Advanced Mission Critical and Extended Update Support, addressing CVE-2026-64832. The vulnerability is rated Important by Product Security, with a CVSS score linked to the CVE reference, indicating potential kernel exploitation. Administrators should apply the patch promptly to mitigate the risk and maintain kernel integrity.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94596",
    "publishedAt": "2026-11-03T15:43:54.000Z",
    "cves": [
      "CVE-2026-64832"
    ],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-kernel-security-update",
      "article-20d26e92",
      "20d26e92",
      "red-hat-issues-important-kernel-security-update-37d8b5"
    ]
  },
  {
    "slug": "google-warns-of-llmjacking-costing-enterprises-1m-ee7f0014",
    "title": "Google Warns of LLMjacking Costing Enterprises $1M",
    "summary": "Google warned that threat actors hijack enterprise LLM access via phishing, code leaks, misconfigurations, or exposed client-side code. LLMjacking exploits stolen API keys to consume expensive compute resources, generating up to $1 million in unauthorized cloud charges. Google recommends rotating API keys, enforcing strict key‑management policies, and monitoring usage anomalies to mitigate LLMjacking.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/google-warns-llmjacking-attacks-are.html",
    "publishedAt": "2026-11-03T15:41:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-warns-of-llmjacking-costing-enterprises-1m",
      "article-ee7f0014",
      "ee7f0014",
      "google-warns-of-llmjacking-costing-enterprises-1m-76467c"
    ]
  },
  {
    "slug": "practical-cyber-awareness-tips-for-modern-threats-da182336",
    "title": "Practical Cyber Awareness Tips for Modern Threats",
    "summary": "The article outlines nine practical cyber awareness practices designed to align with the current threat landscape. Techniques include safer search habits, stronger login security, enhanced executive protection, and other habits that reduce enterprise risk. Security teams should adopt these measures to strengthen user behavior and mitigate evolving ongoing attack vectors.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/9-cyber-awareness-tips-todays-maze-threats",
    "publishedAt": "2026-11-03T15:38:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "practical-cyber-awareness-tips-for-modern-threats",
      "article-da182336",
      "da182336",
      "practical-cyber-awareness-tips-for-modern-threats-65034f"
    ]
  },
  {
    "slug": "llmjacking-thrives-as-cybercriminal-cloud-resale-29360372",
    "title": "LLMjacking Thrives as Cybercriminal Cloud Resale",
    "summary": "The article reports that cybercriminals resell cloud access to large language models, with some victims paying up to $1 million before access was revoked. Attackers exploit stolen or misconfigured API keys to inflate cloud usage, causing significant financial damage. Organizations should enforce strict key‑management controls, monitor usage anomalies, and rotate credentials regularly to counter LLMjacking.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cloud-security/llmjacking-thriving-cybercriminal-enterprise",
    "publishedAt": "2026-11-03T15:35:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "llmjacking-thrives-as-cybercriminal-cloud-resale",
      "article-29360372",
      "29360372",
      "llmjacking-thrives-as-cybercriminal-cloud-resale-1a4ef1"
    ]
  },
  {
    "slug": "hackers-hijack-emergency-alert-apps-in-ukraine-and-63a53231",
    "title": "Hackers Hijack Emergency Alert Apps in Ukraine and Russia for Fake Nuclear Warnings",
    "summary": "Attackers compromised emergency alert applications in Ukraine and Russia to distribute false nuclear strike warnings during wartime operations on November 1-2. The incidents disrupted trusted public safety channels by injecting fabricated radiation and chemical threat alerts. Officials confirmed the breaches did not disable broader warning systems but represented a significant interference with critical communication infrastructure.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-hijack-emergency-alert-apps/",
    "publishedAt": "2026-11-03T15:34:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-hijack-emergency-alert-apps-in-ukraine-and",
      "article-63a53231",
      "63a53231",
      "hackers-hijack-emergency-alert-apps-in-ukraine-and-5eecf7",
      "hackers-hijack-emergency-alert-apps-in-ukraine-and-russia-fo"
    ]
  },
  {
    "slug": "cpguard-update-hijacked-to-deploy-backdoor-and-ste-01e72a96",
    "title": "cPGuard Update Hijacked to Deploy Backdoor and Steal Data",
    "summary": "Attackers hijacked the cPGuard web security suite autoupdate mechanism to push a malicious backdoor and data‑stealing script to customers. The compromise exploited the update infrastructure’s lack of integrity verification, enabling remote code execution and credential exfiltration without user interaction. cPGuard has released a patched update signing process and recommends customers validate update signatures and apply the new firmware immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/cpguard-update-channel-hijacked-to.html",
    "publishedAt": "2026-11-03T15:16:32.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-hijack-cpguard-autoupdate-to-deploy-backdoor-steal-data/"
      }
    ],
    "aliases": [
      "cpguard-update-hijacked-to-deploy-backdoor-and-ste",
      "article-01e72a96",
      "01e72a96",
      "cpguard-update-hijacked-to-deploy-backdoor-and-ste-715c30",
      "cpguard-update-hijacked-to-deploy-backdoor-and-steal-data"
    ]
  },
  {
    "slug": "barracuda-issues-root-privilege-vulnerability-aler-e7b80cea",
    "title": "Barracuda Issues Root‑Privilege Vulnerability Alerts",
    "summary": "Barracuda Networks warned that two undisclosed vulnerabilities in its device firmware can grant attackers root‑level command execution. The flaws allow local or remote attackers to bypass authentication and run arbitrary code with full system privileges. Barracuda released firmware patches for affected devices; administrators should apply the updates and enforce strict access controls.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/barracuda-warns-of-critical-flaws-allowing-root-access-to-devices/",
    "publishedAt": "2026-11-03T15:06:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "barracuda-issues-root-privilege-vulnerability-aler",
      "article-e7b80cea",
      "e7b80cea",
      "barracuda-issues-root-privilege-vulnerability-aler-305835",
      "barracuda-issues-root-privilege-vulnerability-alerts"
    ]
  },
  {
    "slug": "gartner-forecasts-soc-engineers-outnumber-analysts-f0d63030",
    "title": "Gartner Forecasts SOC Engineers Outnumber Analysts by 2028",
    "summary": "Gartner predicts that security operations centers will employ 50% more engineers than analysts by 2028 as AI agents automate routine alert handling. The report examines how AI reshapes SOC roles, shifting responsibilities from analysts to detection engineering, threat hunting, and exposure management. Security teams should plan for increased engineering capacity and invest in AI‑driven tooling to support evolving SOC workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/gartner-predicts-socs-will-have-50-percent-more-engineers-than-analysts-by-2028/",
    "publishedAt": "2026-11-03T15:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gartner-forecasts-soc-engineers-outnumber-analysts",
      "article-f0d63030",
      "f0d63030",
      "gartner-forecasts-soc-engineers-outnumber-analysts-7325b6",
      "gartner-forecasts-soc-engineers-outnumber-analysts-by-2028"
    ]
  },
  {
    "slug": "hudu-adds-huntress-integration-for-security-contex-ac864972",
    "title": "Hudu Adds Huntress Integration for Security Context",
    "summary": "Hudu launched a Huntress integration that imports organizations, agents, memberships, and identities into its IT documentation platform. The connector uses the Huntress API to sync security context data, keeping teams’ threat visibility current within Hudu. Admins set up the integration via Hudu’s settings panel and view imported data in the new security context section.",
    "category": "General",
    "severity": "LOW",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/hudu-huntress-integration",
    "publishedAt": "2026-11-03T15:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hudu-adds-huntress-integration-for-security-contex",
      "article-ac864972",
      "ac864972",
      "hudu-adds-huntress-integration-for-security-contex-313b4b",
      "hudu-adds-huntress-integration-for-security-context"
    ]
  },
  {
    "slug": "rhsa-2026-94567-important-libxtst-security-update-a67dab1c",
    "title": "RHSA-2026:94567: Important: libXtst security update",
    "summary": "An update for libXtst is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Important. The vulnerability is tracked as CVE-2026-43871.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94567",
    "publishedAt": "2026-11-03T14:53:47.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-94567-important-libxtst-security-update",
      "article-a67dab1c",
      "a67dab1c",
      "rhsa-2026-94567-important-libxtst-security-update-37d8b6"
    ]
  },
  {
    "slug": "red-hat-releases-raptor2-update-for-cve-2026-43871-66f6a31c",
    "title": "Red Hat Releases raptor2 Update for CVE-2026-43871",
    "summary": "Red Hat issued a security update for the raptor2 component on Red Enterprise Linux 8, addressing a vulnerability identified as CVE‑2026‑43871. The flaw allows unauthenticated attackers to exploit a buffer overflow in raptor2, potentially achieving remote code execution with a CVSS score of 8.5. Red Hat recommends applying the latest raptor2 patch immediately; no work‑arounds are available.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94519",
    "publishedAt": "2026-11-03T14:43:47.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-raptor2-update-for-cve-2026-43871",
      "article-66f6a31c",
      "66f6a31c",
      "red-hat-releases-raptor2-update-for-cve-2026-43871-37d8b6"
    ]
  },
  {
    "slug": "usn-8973-1-libmspack-vulnerability-5f9e846e",
    "title": "USN-8973-1: libmspack vulnerability",
    "summary": "It was discovered that libmspack did not properly initialize pointers when handling errors while reading KWAJ archive headers. An attacker could possibly use this issue to cause libmspack to crash, resulting in a denial of service, or execute arbitrary code.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8973-1",
    "publishedAt": "2026-11-03T14:42:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-8973-1-libmspack-vulnerability",
      "article-5f9e846e",
      "5f9e846e",
      "usn-8973-1-libmspack-vulnerability-7fbc86"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-rt-critical-update-dd99d353",
    "title": "Red Hat Releases Kernel‑rt Critical Update",
    "summary": "Red Hat issued a critical kernel‑rt update for Enterprise Linux 9.2 SAP, addressing vulnerabilities that could allow privilege escalation. The update mitigates CVE‑2026‑43871, a flaw with a CVSS score that Red Hat rates as critical, though no active exploitation is reported. Deploy the patch immediately; no workarounds are available, and monitor for kernel‑level anomalies.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94558",
    "publishedAt": "2026-11-03T14:34:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-rt-critical-update",
      "article-dd99d353",
      "dd99d353",
      "red-hat-releases-kernel-rt-critical-update-37d8b6"
    ]
  },
  {
    "slug": "freerdp-update-addresses-cve-2026-43871-bb30d75f",
    "title": "Freerdp Update Addresses CVE-2026-43871",
    "summary": "Red Hat released a security update for freerdp on RHEL 8, addressing a flaw identified as CVE-2026-43871. The vulnerability, rated Important by Red Hat Product Security, could allow remote code execution or privilege escalation via malformed RDP packets. Administrators should apply the freerdp update immediately; no additional workarounds are required.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94510",
    "publishedAt": "2026-11-03T14:34:41.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "freerdp-update-addresses-cve-2026-43871",
      "article-bb30d75f",
      "bb30d75f",
      "freerdp-update-addresses-cve-2026-43871-37d8b6"
    ]
  },
  {
    "slug": "haproxy-vulnerabilities-allow-denial-of-service-vi-416fa8af",
    "title": "HAProxy Vulnerabilities Allow Denial of Service via HTTP/2 and HTTP/1.1",
    "summary": "Two CVEs affecting HAProxy were disclosed: CVE-2026-110353 and CVE-2026-110354, both involving incorrect handling of truncated HTTP/2 PING frames and certain HTTP/1.1 chunked requests respectively. A remote attacker could trigger excessive CPU consumption leading to denial of service without authentication. The vulnerabilities require no exploitation confirmation beyond the advisory description.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8972-1",
    "publishedAt": "2026-11-03T14:33:21.000Z",
    "cves": [
      "CVE-2026-110353",
      "CVE-2026-110354"
    ],
    "additionalSources": [],
    "aliases": [
      "haproxy-vulnerabilities-allow-denial-of-service-vi",
      "article-416fa8af",
      "416fa8af",
      "haproxy-vulnerabilities-allow-denial-of-service-vi-7fbc8a",
      "haproxy-vulnerabilities-allow-denial-of-service-via-http-2-a"
    ]
  },
  {
    "slug": "frontline-education-breach-exposes-1-3-million-rec-4bdd1929",
    "title": "Frontline Education Breach Exposes 1.3 Million Records",
    "summary": "Hackers exploited a flaw in third‑party software used by Frontline Education, compromising personal data of staff and students. The vulnerability enabled unauthorized extraction of names, addresses, and academic details, affecting more than 1.3 million individuals. Frontline Education has notified affected parties, coordinated with the vendor to patch the flaw, and urged MFA enforcement.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/frontline-education-data-breach-impacts-over-1-3-million/",
    "publishedAt": "2026-11-03T14:32:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "frontline-education-breach-exposes-1-3-million-rec",
      "article-4bdd1929",
      "4bdd1929",
      "frontline-education-breach-exposes-1-3-million-rec-5bc8ce",
      "frontline-education-breach-exposes-1-3-million-records"
    ]
  },
  {
    "slug": "gnome-shell-vulnerability-allows-dos-and-informati-f13ad83a",
    "title": "GNOME Shell Vulnerability Allows DoS and Information Disclosure from Remote Icons",
    "summary": "A vulnerability was discovered in GNOME Shell where improper validation of icon dimensions from remote search providers could cause crashes or expose sensitive memory information. The flaw requires no authentication and affects desktop environments processing untrusted icon data. The advisory describes a denial of service vector combined with potential information disclosure from improperly validated remote icon sources.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8971-1",
    "publishedAt": "2026-11-03T14:13:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gnome-shell-vulnerability-allows-dos-and-informati",
      "article-f13ad83a",
      "f13ad83a",
      "gnome-shell-vulnerability-allows-dos-and-informati-7fbc8e",
      "gnome-shell-vulnerability-allows-dos-and-information-disclos"
    ]
  },
  {
    "slug": "crowdstrike-buys-ai-firms-fiddler-dreadnode-d817239b",
    "title": "CrowdStrike Buys AI Firms Fiddler, Dreadnode",
    "summary": "CrowdStrike announced a $495 million purchase of AI firms Fiddler and Dreadnode to boost Falcon with AI agent observability and automated testing. The acquisition will merge Fiddler’s monitoring tools and Dreadnode’s testing framework into CrowdStrike’s threat detection stack. Customers should watch for feature updates and integration milestones that may affect Falcon deployments.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/crowdstrike-reportedly-paying-495-million-for-ai-security-firms-fiddler-dreadnode/",
    "publishedAt": "2026-11-03T14:12:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-buys-ai-firms-fiddler-dreadnode",
      "article-d817239b",
      "d817239b",
      "crowdstrike-buys-ai-firms-fiddler-dreadnode-19333c"
    ]
  },
  {
    "slug": "videostrong-deploys-backdoor-in-1-3-million-androi-04cc5652",
    "title": "Videostrong Deploys Backdoor in 1.3 Million Android TV Boxes",
    "summary": "Videostrong embedded a hidden backdoor in more than 1.3 million Android set‑top boxes, creating a covert botnet. The flaw allowed remote command execution without authentication, enabling attackers to issue arbitrary instructions and exfiltrate data from compromised devices. Affected manufacturers should release firmware updates to remove the backdoor, and security teams must monitor device traffic for anomalous outbound connections.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/mobile/2026/11/a-hidden-backdoor-put-1-3-million-tv-boxes-to-work-for-criminals",
    "publishedAt": "2026-11-03T14:11:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "videostrong-deploys-backdoor-in-1-3-million-androi",
      "article-04cc5652",
      "04cc5652",
      "videostrong-deploys-backdoor-in-1-3-million-androi-5a95a9",
      "videostrong-deploys-backdoor-in-1-3-million-android-tv-boxes"
    ]
  },
  {
    "slug": "usn-8970-1-gvfs-vulnerabilities-1242a7ca",
    "title": "USN-8970-1: GVfs vulnerabilities",
    "summary": "A remote attacker could possibly use this issue to obtain sensitive information. (CVE-2026-84267) It was discovered that GVfs did not properly validate the size of replies from an AFP server. A remote attacker could possibly use this issue to cause a denial of service. (CVE-2026-84269) It was discovered that GVfs did not properly validate the size of data returned by an MTP device.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8970-1",
    "publishedAt": "2026-11-03T14:06:15.000Z",
    "cves": [
      "CVE-2026-84267",
      "CVE-2026-84269"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-8970-1-gvfs-vulnerabilities",
      "article-1242a7ca",
      "1242a7ca",
      "usn-8970-1-gvfs-vulnerabilities-7fbc92"
    ]
  },
  {
    "slug": "novee-puts-forgotten-internet-facing-assets-throug-a6d4771e",
    "title": "Novee puts forgotten internet-facing assets through penetration testing",
    "summary": "Novee’s External Surface Testing is a new capability in its AI penetration testing platform that helps security teams discover internet-facing assets and validate exploitable vulnerabilities. It tests newly disclosed CVEs and findings imported from third-party external attack surface management (EASM) tools. “Attackers don’t limit themselves to the applications you’re already testing.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/03/novee-external-surface-testing/",
    "publishedAt": "2026-11-03T14:00:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "novee-puts-forgotten-internet-facing-assets-throug",
      "article-a6d4771e",
      "a6d4771e",
      "novee-puts-forgotten-internet-facing-assets-throug-744519",
      "novee-puts-forgotten-internet-facing-assets-through-penetrat"
    ]
  },
  {
    "slug": "cloudflare-launches-zero-wire-for-vulnerability-tr-51d37c94",
    "title": "Cloudflare Launches Zero Wire for Vulnerability Triage",
    "summary": "Cloudflare introduced Zero Wire, a platform that aggregates plain‑language briefings with real‑time attack telemetry to aid security teams. Zero Wire enables faster triage of critical CVEs by providing remediation steps and contextual threat data alongside Cloudflare Radar insights. Security teams can integrate Zero Wire into their workflow to prioritize patches and adjust defenses based on up‑to‑date telemetry.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/zero-wire/",
    "publishedAt": "2026-11-03T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-launches-zero-wire-for-vulnerability-tr",
      "article-51d37c94",
      "51d37c94",
      "cloudflare-launches-zero-wire-for-vulnerability-tr-294392",
      "cloudflare-launches-zero-wire-for-vulnerability-triage"
    ]
  },
  {
    "slug": "3am-ransomware-hits-uk-school-estate-8aa1b577",
    "title": "3AM Ransomware Hits UK School Estate",
    "summary": "A 3AM ransomware affiliate targeted a UK school estate, encrypting about 37 of nearly 50 machines accessed from an unmanaged host. The attack leveraged an unpatched remote execution flaw in the host’s management software, enabling credential theft and lateral movement across the network. Administrators should apply the vendor’s latest patch, enforce least‑privilege access, and isolate backups to prevent further spread.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/uk-school-estate-hit-by-3am-ransomware-in-suspected-ai-assisted-attack/",
    "publishedAt": "2026-11-03T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "3am-ransomware-hits-uk-school-estate",
      "article-8aa1b577",
      "8aa1b577",
      "3am-ransomware-hits-uk-school-estate-634a83"
    ]
  },
  {
    "slug": "3am-affiliate-uses-ai-like-loops-in-school-attack-0bf1865c",
    "title": "3AM Affiliate Uses AI‑Like Loops in School Attack",
    "summary": "Investigators found a 3AM ransomware affiliate used an AI‑like model to generate and refine attack commands during a breach of a European school network. The model’s iterative loops enabled real‑time payload adaptation, yet researchers found no evidence of full automation. Teams should monitor command logs, enforce privilege limits, and apply current ransomware defenses.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/data-privacy/3am-affiliate-ai-loops-european-school-attack",
    "publishedAt": "2026-11-03T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "3am-affiliate-uses-ai-like-loops-in-school-attack",
      "article-0bf1865c",
      "0bf1865c",
      "3am-affiliate-uses-ai-like-loops-in-school-attack-464267"
    ]
  },
  {
    "slug": "assured-launches-cleanroom-scan-for-backup-hygiene-74bace0e",
    "title": "Assured Launches CleanRoom SCAN for Backup Hygiene",
    "summary": "Assured Data Protection introduced CleanRoom SCAN, a managed service that independently scans isolated backup copies using multiple security engines. The service detects malware and indicators of compromise before restoration, reducing the risk of reinfecting production environments during recovery. Organizations should adopt CleanRoom SCAN to validate backup integrity and apply remediation before deploying recovered data.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/03/assured-data-protection-cleanroom-scan/",
    "publishedAt": "2026-11-03T13:59:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "assured-launches-cleanroom-scan-for-backup-hygiene",
      "article-74bace0e",
      "74bace0e",
      "assured-launches-cleanroom-scan-for-backup-hygiene-370f22"
    ]
  },
  {
    "slug": "artex-ai-automates-enterprise-attacks-at-machine-s-839c89b6",
    "title": "ARTEX AI Automates Enterprise Attacks at Machine Speed",
    "summary": "Attackers employ the ARTEX AI framework to accelerate credential‑based attacks, enabling rapid cloud privilege escalation, lateral movement, and data exfiltration. Recent campaigns demonstrate the framework’s ability to automate complex intrusion stages in minutes, raising concerns for organizations relying on traditional detection methods. Defenders should adopt AI‑aware monitoring, enforce strict credential hygiene, and update detection rules to counter ARTEX‑driven attacks.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/artex-ai-automate-enterprise-attacks/",
    "publishedAt": "2026-11-03T13:58:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "artex-ai-automates-enterprise-attacks-at-machine-s",
      "article-839c89b6",
      "839c89b6",
      "artex-ai-automates-enterprise-attacks-at-machine-s-39a79b",
      "artex-ai-automates-enterprise-attacks-at-machine-speed"
    ]
  },
  {
    "slug": "cobalt-strike-server-compromises-chinese-users-pcs-1067ef84",
    "title": "Cobalt Strike Server Compromises Chinese Users' PCs",
    "summary": "A misconfigured webserver operated by a threat actor running Cobalt Strike exposed an open server that logged compromises of private computers belonging to Chinese-speaking users. The insecure configuration allowed attackers to execute arbitrary code, exfiltrate credentials, and access sensitive files. Teams should secure the server, enforce strict access controls, and monitor logs for anomalous activity.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/free-the-model-sell-the-gateway-prompt-adware-hidden-in-jailbreak-bundles/",
    "publishedAt": "2026-11-03T13:57:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cobalt-strike-server-compromises-chinese-users-pcs",
      "article-1067ef84",
      "1067ef84",
      "cobalt-strike-server-compromises-chinese-users-pcs-335f41"
    ]
  },
  {
    "slug": "red-hat-releases-jboss-7-0-3-update-to-fix-critica-db939fdd",
    "title": "Red Hat Releases JBoss 7.0.3 Update to Fix Critical CVE‑2026‑98432 Remote Code Execution Vulnerability",
    "summary": "Red Hat released a JBoss Web Server 7.0.3 update for RHEL 8, 9, 10, and Windows Server to fix the critical CVE‑2026‑98432 remote code execution flaw. The flaw let unauthenticated attackers parse malicious HTTP requests and run arbitrary code with system privileges, risking full server compromise. Admins should apply the patch immediately, confirm mitigation, and monitor for anomalous activity.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93618",
    "publishedAt": "2026-11-03T13:52:32.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Red Hat Security Advisories",
        "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93622"
      }
    ],
    "aliases": [
      "red-hat-releases-jboss-7-0-3-update-to-fix-critica",
      "article-db939fdd",
      "db939fdd",
      "red-hat-releases-jboss-7-0-3-update-to-fix-critica-37d927",
      "red-hat-releases-jboss-7-0-3-update-to-fix-critical-cve-2026"
    ]
  },
  {
    "slug": "russia-disrupts-vasygrek-cybercrime-group-205abde7",
    "title": "Russia Disrupts VasyGrek Cybercrime Group",
    "summary": "Russia's Interior Ministry dismantled the infrastructure of the VasyGrek cybercrime group following a joint investigation with cybersecurity firm Kaspersky. Three suspects were detained as part of the operation targeting the organized criminal network. The enforcement action represents a significant disruption to the group's operational capacity and financial infrastructure.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/russia-dismantles-vasygrek-infrastructure-detains-three",
    "publishedAt": "2026-11-03T13:50:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russia-disrupts-vasygrek-cybercrime-group",
      "article-205abde7",
      "205abde7",
      "russia-disrupts-vasygrek-cybercrime-group-28c6e2"
    ]
  },
  {
    "slug": "bind-dns-multiple-denial-of-service-vulnerabilitie-bb884879",
    "title": "Bind DNS Multiple Denial-of-Service Vulnerabilities Patched",
    "summary": "It was discovered that Bind incorrectly handled certain DNS messages with repeated singleton records such as SOA, CNAME, or DNAME records. A remote attacker could possibly use this issue to cause Bind to use excessive memory, leading to a denial of service. This issue only affected Ubuntu 26.10. (CVE-2026-75029). It was discovered that Bind incorrectly handled cached DNSSEC proofs.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8969-1",
    "publishedAt": "2026-11-03T13:45:46.000Z",
    "cves": [
      "CVE-2026-75029"
    ],
    "additionalSources": [],
    "aliases": [
      "bind-dns-multiple-denial-of-service-vulnerabilitie",
      "article-bb884879",
      "bb884879",
      "bind-dns-multiple-denial-of-service-vulnerabilitie-7fbce4",
      "bind-dns-multiple-denial-of-service-vulnerabilities-patched"
    ]
  },
  {
    "slug": "fence-agents-critical-security-update-a1b77c45",
    "title": "Fence-Agents Critical Security Update",
    "summary": "Red Hat released a critical security update for the fence-agents component on RHEL 9.6 Extended Update Support, addressing a high‑impact vulnerability. The update mitigates an unauthenticated remote code execution flaw that could allow attackers to gain system control, though no CVE ID is publicly disclosed. Administrators should apply the fence-agents patch immediately to prevent exploitation of the vulnerability.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94523",
    "publishedAt": "2026-11-03T13:40:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fence-agents-critical-security-update",
      "article-a1b77c45",
      "a1b77c45",
      "fence-agents-critical-security-update-37d8b6"
    ]
  },
  {
    "slug": "russia-linked-spies-target-ukrainian-war-crimes-da-4e03054c",
    "title": "Russia-Linked Spies Target Ukrainian War Crimes Data",
    "summary": "Russian‑linked actors deployed simple malware to exfiltrate sensitive documents and login credentials from Ukrainian war‑crimes investigators and military aid entities. The attacks relied on credential theft rather than a zero‑day flaw, limiting impact to compromised accounts and confidential records. Teams should enforce MFA, monitor anomalous logins, and apply vendor patches to prevent further exfiltration.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/russia-linked-cyber-spies-target-ukraine-war-support",
    "publishedAt": "2026-11-03T13:39:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russia-linked-spies-target-ukrainian-war-crimes-da",
      "article-4e03054c",
      "4e03054c",
      "russia-linked-spies-target-ukrainian-war-crimes-da-25e6be",
      "russia-linked-spies-target-ukrainian-war-crimes-data"
    ]
  },
  {
    "slug": "police-seize-100-servers-in-european-investment-fr-e35b024b",
    "title": "Police Seize 100+ Servers in European Investment Fraud Crackdown",
    "summary": "Police seized over 100 servers used by a European investment fraud network targeting online trading platform users. The operation disrupted the scheme, preventing victims from withdrawing profits and exposing sensitive financial data, with losses exceeding four million euros. Seven suspects were arrested, the infrastructure dismantled, and authorities urged affected users to monitor accounts and update security practices.",
    "category": "General",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/police-seizes-over-100-servers-in-investment-scam-crackdown/",
    "publishedAt": "2026-11-03T13:33:49.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Help Net Security",
        "sourceUrl": "https://www.helpnetsecurity.com/2026/11/03/investment-fraud-network-servers-seized/"
      },
      {
        "source": "CyberNews AI",
        "sourceUrl": "https://cybernewsai.com/blog/germany-busts-crime-as-a-service-investment-fraud-outfi"
      }
    ],
    "aliases": [
      "police-seize-100-servers-in-european-investment-fr",
      "article-e35b024b",
      "e35b024b",
      "police-seize-100-servers-in-european-investment-fr-1658c5",
      "police-seize-100-servers-in-european-investment-fraud-crackd"
    ]
  },
  {
    "slug": "renault-car-s-15-year-old-linux-navigation-softwar-4b21261a",
    "title": "Renault Car’s 15-Year-Old Linux Navigation Software Hacked to Execute Arbitrary Root Commands",
    "summary": "A security researcher has found a way to run any command with root rights on the navigation unit in a 2014 Renault Latitude. The unit is a TomTom Carminat LIVE head unit that runs a custom system built on Linux 2.6.28.10.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/renault-cars/",
    "publishedAt": "2026-11-03T13:10:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "renault-car-s-15-year-old-linux-navigation-softwar",
      "article-4b21261a",
      "4b21261a",
      "renault-car-s-15-year-old-linux-navigation-softwar-44ed41",
      "renault-car-s-15-year-old-linux-navigation-software-hacked-t"
    ]
  },
  {
    "slug": "red-hat-releases-freerdp-patch-for-cve-2026-43871-e753d104",
    "title": "Red Hat Releases freerdp Patch for CVE-2026-43871",
    "summary": "A CVE-2026-43871 flaw in Red Hat Enterprise Linux 10.2 freerdp allows remote attackers to exploit a security vulnerability. Red Hat rates it as Important, with a CVSS base score indicating moderate to high risk, yet no active exploitation has been seen. Red Hat has issued a freerdp update; administrators should apply it promptly to mitigate the flaw.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94514",
    "publishedAt": "2026-11-03T13:05:30.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-freerdp-patch-for-cve-2026-43871",
      "article-e753d104",
      "e753d104",
      "red-hat-releases-freerdp-patch-for-cve-2026-43871-37d8b6"
    ]
  },
  {
    "slug": "wiz-green-agent-speeds-critical-risk-resolution-82ba4250",
    "title": "Wiz Green Agent Speeds Critical Risk Resolution",
    "summary": "Wiz Green Agent, an agentic remediation tool, deployed by Fireblocks, Rogo, and project44 to address cross-team blockers in critical risk resolution. The platform automates remediation workflows, reducing manual coordination overhead and accelerating mean-time-to-remediate for high-severity findings. Organizations can adopt similar agentic approaches to streamline vulnerability management and eliminate operational bottlenecks.",
    "category": "General",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/green-agent-agentic-remediation",
    "publishedAt": "2026-11-03T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wiz-green-agent-speeds-critical-risk-resolution",
      "article-82ba4250",
      "82ba4250",
      "wiz-green-agent-speeds-critical-risk-resolution-69c0e9"
    ]
  },
  {
    "slug": "rhsa-2026-94500-critical-fence-agents-security-upd-074f3073",
    "title": "RHSA-2026:94500: Critical: fence-agents security update",
    "summary": "An update for fence-agents is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94500",
    "publishedAt": "2026-11-03T12:47:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-94500-critical-fence-agents-security-upd",
      "article-074f3073",
      "074f3073",
      "rhsa-2026-94500-critical-fence-agents-security-upd-37d8b7",
      "rhsa-2026-94500-critical-fence-agents-security-update"
    ]
  },
  {
    "slug": "red-hat-releases-critical-kernel-patch-for-cve-202-7e418930",
    "title": "Red Hat Releases Critical Kernel Patch for CVE‑2026‑64832",
    "summary": "Red Hat issued a kernel update for RHEL 10.0 Extended Update Support to address CVE‑2026‑64832, a critical security flaw. The vulnerability is a kernel‑level bug that could allow unauthenticated attackers to gain elevated privileges, with a CVSS base score indicating critical impact. Red Hat has released the patch; administrators should apply the update immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94508",
    "publishedAt": "2026-11-03T12:39:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-kernel-patch-for-cve-202",
      "article-7e418930",
      "7e418930",
      "red-hat-releases-critical-kernel-patch-for-cve-202-37d8b6",
      "red-hat-releases-critical-kernel-patch-for-cve-2026-64832"
    ]
  },
  {
    "slug": "ai-agents-accelerate-china-linked-espionage-attack-575023df",
    "title": "AI Agents Accelerate China‑Linked Espionage Attacks",
    "summary": "A China‑linked espionage group deployed AI agents to compromise over 200 organizations in 11 days, according to CrowdStrike. The attackers leveraged large language models to autonomously select commands, enabling rapid, low‑interaction phishing and credential‑stealing campaigns across diverse sectors. Security teams should enforce multi‑factor authentication, monitor for anomalous credential usage, and deploy AI‑driven threat detection to mitigate automated attack vectors.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/03/ai-powered-cyberattacks-artex-cyberstrikeai/",
    "publishedAt": "2026-11-03T12:31:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agents-accelerate-china-linked-espionage-attack",
      "article-575023df",
      "575023df",
      "ai-agents-accelerate-china-linked-espionage-attack-25ab9b",
      "ai-agents-accelerate-china-linked-espionage-attacks"
    ]
  },
  {
    "slug": "microsoft-study-links-78-of-exploits-to-system-tak-5fb80576",
    "title": "Microsoft Study Links 78% of Exploits to System Takeover",
    "summary": "Microsoft’s research identifies that 78% of real-world exploits target vulnerabilities enabling system takeover or privilege escalation. The study references CVE-2026-112816, a flaw that permits remote code execution without authentication, underscoring the prevalence of high‑impact weaknesses in widely deployed software. Security teams should review patch status for CVE-2026-112816 and prioritize updates to mitigate similar privilege‑escalation vectors.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsoft-reveals-78-of-exploited-vulnerabilities/",
    "publishedAt": "2026-11-03T12:31:55.000Z",
    "cves": [
      "CVE-2026-112816"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-study-links-78-of-exploits-to-system-tak",
      "article-5fb80576",
      "5fb80576",
      "microsoft-study-links-78-of-exploits-to-system-tak-7a8ee3",
      "microsoft-study-links-78-of-exploits-to-system-takeover"
    ]
  },
  {
    "slug": "rhsa-2026-94485-moderate-cockpit-security-bug-fix-08586ae9",
    "title": "RHSA-2026:94485: Moderate: cockpit security, bug fix, and enhancement update",
    "summary": "An update for cockpit is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Moderate. The vulnerability is tracked as CVE-2026-43871.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94485",
    "publishedAt": "2026-11-03T12:31:40.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-94485-moderate-cockpit-security-bug-fix",
      "article-08586ae9",
      "08586ae9",
      "rhsa-2026-94485-moderate-cockpit-security-bug-fix-37d8b9",
      "rhsa-2026-94485-moderate-cockpit-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-critical-update-e05ca4e6",
    "title": "Red Hat Releases Kernel Critical Update",
    "summary": "Red Hat released a critical kernel update for Enterprise Linux 9.2 SAP, fixing vulnerabilities that could enable privilege escalation. The patch addresses CVE‑2026‑43871, a flaw rated critical by Red Hat, with no known active exploitation. Apply the update immediately; no workarounds exist, and monitor kernel activity for anomalies in all environments.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94477",
    "publishedAt": "2026-11-03T12:29:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-critical-update",
      "article-e05ca4e6",
      "e05ca4e6",
      "red-hat-releases-kernel-critical-update-37d8b9"
    ]
  },
  {
    "slug": "android-november-2026-update-fixes-200-vulnerabili-92d171cf",
    "title": "Android November 2026 Update Fixes 200+ Vulnerabilities",
    "summary": "Android’s November 2026 update patches over 200 flaws, including a critical framework bug that allows remote code execution without user interaction. The bug exploits unchecked permission handling, giving attackers system‑level code execution, a high‑severity vulnerability that can compromise device integrity. Install the update immediately and verify framework component patching to block exploitation.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/androids-november-2026-updates-patch-over-200-vulnerabilities/",
    "publishedAt": "2026-11-03T12:21:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "android-november-2026-update-fixes-200-vulnerabili",
      "article-92d171cf",
      "92d171cf",
      "android-november-2026-update-fixes-200-vulnerabili-294b08",
      "android-november-2026-update-fixes-200-vulnerabilities"
    ]
  },
  {
    "slug": "node-red-authentication-flaw-cve-2026-58115-used-t-5a30be60",
    "title": "Node-RED Authentication Flaw (CVE-2026-58115) Used to Deploy Linux Bots and Backdoors",
    "summary": "Attackers exploited Node‑RED’s authentication flaw (CVE‑2026‑58115) to gain remote code execution on unprotected industrial control servers. The flaw allowed attackers to deploy Linux bots and webshells, enabling arbitrary command execution and persistent backdoors. Node‑RED released a patch; users must update immediately and restrict flow editor access to mitigate the threat.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/critical-node-red-flaw-exploited-in-attacks/",
    "publishedAt": "2026-11-03T12:10:19.000Z",
    "cves": [
      "CVE-2026-58115"
    ],
    "additionalSources": [
      {
        "source": "Help Net Security",
        "sourceUrl": "https://www.helpnetsecurity.com/2026/11/03/node-red-cve-2026-58115-exploitation/"
      }
    ],
    "aliases": [
      "node-red-authentication-flaw-cve-2026-58115-used-t",
      "article-5a30be60",
      "5a30be60",
      "node-red-authentication-flaw-cve-2026-58115-used-t-589a87",
      "node-red-authentication-flaw-cve-2026-58115-used-to-deploy-l"
    ]
  },
  {
    "slug": "leakers-hijack-billboard-software-to-display-porn-869233ee",
    "title": "Leakers$ Hijack Billboard Software to Display Porn",
    "summary": "The hacking group Leakers$ gained unauthorized access to remote management software controlling public billboards and used it to display pornographic content. The compromise exploited weak authentication and exposed the billboard control interface, allowing attackers to modify display payloads without detection. Security teams should enforce multi-factor authentication, update firmware, and monitor control traffic to prevent similar incidents.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/bugs/2026/11/hackers-put-porn-on-public-billboards-and-claim-it-was-far-too-easy",
    "publishedAt": "2026-11-03T12:01:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "leakers-hijack-billboard-software-to-display-porn",
      "article-869233ee",
      "869233ee",
      "leakers-hijack-billboard-software-to-display-porn-431bbe"
    ]
  },
  {
    "slug": "ai-discovers-vulnerabilities-in-legal-systems-d9484d0b",
    "title": "AI Discovers Vulnerabilities in Legal Systems",
    "summary": "The article argues that advanced AI can identify logical flaws in legal texts, treating statutes as code susceptible to exploitation. These vulnerabilities arise from ambiguous language or inconsistent provisions, allowing AI‑driven analysis to surface potential loopholes that courts may overlook. The piece calls for legal scholars to adopt formal verification techniques and for lawmakers to review statutes for machine‑readable consistency.",
    "category": "General",
    "severity": "LOW",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/11/ais-hacking-the-law.html",
    "publishedAt": "2026-11-03T12:01:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-discovers-vulnerabilities-in-legal-systems",
      "article-d9484d0b",
      "d9484d0b",
      "ai-discovers-vulnerabilities-in-legal-systems-7af64a"
    ]
  },
  {
    "slug": "cisa-adds-cve-2026-119977-to-kev-catalog-c755a8fd",
    "title": "CISA Adds CVE-2026-119977 to KEV Catalog",
    "summary": "CISA added CVE-2026-119977, a WordPress Core time‑of‑check/time‑of‑use race condition, to its Known Exploited Vulnerabilities catalog after confirming active exploitation. The flaw lets attackers manipulate file timestamps to trigger arbitrary code execution on exposed WordPress sites, granting full control. Federal agencies must apply the latest WordPress patch or disable remote file editing per BOD 26‑04.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/11/03/cisa-adds-one-known-exploited-vulnerability-catalog",
    "publishedAt": "2026-11-03T12:00:00.000Z",
    "cves": [
      "CVE-2026-119977"
    ],
    "additionalSources": [
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/security/cisa-flags-wordpress-rce-flaw-as-actively-exploited-in-attacks/"
      }
    ],
    "aliases": [
      "cisa-adds-cve-2026-119977-to-kev-catalog",
      "article-c755a8fd",
      "c755a8fd",
      "cisa-adds-cve-2026-119977-to-kev-catalog-4d69a1"
    ]
  },
  {
    "slug": "subnet-solutions-powersystem-center-dc5c2e21",
    "title": "Subnet Solutions PowerSYSTEM Center",
    "summary": "The following versions of Subnet Solutions PowerSYSTEM Center are affected: PowerSYSTEM Center 2020 PowerSYSTEM Center 2024 >=6.0.x| PowerSYSTEM Center 2026 >=7.0.x| CVSS Vendor Equipment v3 9 Subnet Solutions PowerSYSTEM Center 2 Vulnerabilities Incorrect Authorization, Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') Background Critical Infrastructure Sectors: Critical Manufacturing, Energy Countries/Areas Deployed: Worldwide Company Headquarters Location: Canada Vulnerabilities Expand All + CVE-2026-63017 Incorrect authorization in PowerSYSTEM Center allows a low-privileged, authenticated user to access resources normally limited to administrators.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-307-01",
    "publishedAt": "2026-11-03T12:00:00.000Z",
    "cves": [
      "CVE-2026-63017"
    ],
    "additionalSources": [],
    "aliases": [
      "subnet-solutions-powersystem-center",
      "article-dc5c2e21",
      "dc5c2e21",
      "subnet-solutions-powersystem-center-41c85b"
    ]
  },
  {
    "slug": "rhsa-2026-94501-critical-fence-agents-security-upd-baaa948f",
    "title": "RHSA-2026:94501: Critical: fence-agents security update",
    "summary": "An update for fence-agents is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94501",
    "publishedAt": "2026-11-03T11:57:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-94501-critical-fence-agents-security-upd",
      "article-baaa948f",
      "baaa948f",
      "rhsa-2026-94501-critical-fence-agents-security-upd-37d8b7",
      "rhsa-2026-94501-critical-fence-agents-security-update"
    ]
  },
  {
    "slug": "rhel-ai-3-4-rpm-runtime-cve-fixes-630247ed",
    "title": "RHEL AI 3.4 RPM Runtime CVE Fixes",
    "summary": "Red Hat released an important security update addressing two RPM runtime vulnerabilities in RHEL AI 3.4, identified as CVE-2026-43871 and CVE-2026-55969. These flaws impact the RPM runtime component of the RHEL AI platform, requiring immediate patching to prevent exploitation. Administrators should apply the updated RPM packages to mitigate the disclosed vulnerabilities.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94503",
    "publishedAt": "2026-11-03T11:52:45.000Z",
    "cves": [
      "CVE-2026-43871",
      "CVE-2026-55969"
    ],
    "additionalSources": [],
    "aliases": [
      "rhel-ai-3-4-rpm-runtime-cve-fixes",
      "article-630247ed",
      "630247ed",
      "rhel-ai-3-4-rpm-runtime-cve-fixes-37d8b7"
    ]
  },
  {
    "slug": "libxtst-security-update-for-rhel-03338511",
    "title": "libXtst Security Update for RHEL",
    "summary": "Red Hat issued an important security update for libXtst affecting RHEL 8.4 Advanced Mission Critical and Extended Update Support. The associated CVE-2026-43871 requires local access to exploit, with a CVSS base score available from the referenced CVE link. System administrators should apply the patch promptly.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94482",
    "publishedAt": "2026-11-03T11:44:40.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "libxtst-security-update-for-rhel",
      "article-03338511",
      "03338511",
      "libxtst-security-update-for-rhel-37d8b9"
    ]
  },
  {
    "slug": "revolve-card-data-stolen-1-5-million-affected-37f2effe",
    "title": "Revolve Card Data Stolen, 1.5 Million Affected",
    "summary": "Revolve reported that attackers accessed and exfiltrated stored card details from its payment platform, potentially compromising up to 1.5 million users. The breach involved credential theft and data‑stealing malware, but no evidence of active exploitation of a zero‑day vulnerability was disclosed. Users should monitor statements, change passwords, and enable two‑factor authentication, while Revolve has issued a patch and security advisory.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/data-breaches/2026/11/revolve-card-breach-1-5-million-people-may-be-affected",
    "publishedAt": "2026-11-03T11:26:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "revolve-card-data-stolen-1-5-million-affected",
      "article-37f2effe",
      "37f2effe",
      "revolve-card-data-stolen-1-5-million-affected-743409"
    ]
  },
  {
    "slug": "red-hat-patches-kernel-tcp-rce-cve-2026-98432-99de3560",
    "title": "Red Hat Patches Kernel TCP RCE CVE‑2026‑98432",
    "summary": "Red Hat released kernel patches for RHEL 8, 9, and 10 to fix CVE‑2026‑98432, a use‑after‑free flaw in the IPv4 TCP code. The flaw enables remote, unauthenticated attackers to execute arbitrary code with a CVSS score of 9.8, posing a critical threat. Administrators should apply the update immediately; Ubuntu’s fixes remain in the testing channel pending a stable release.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/red-hat-patches-98-rated-linux-tcp-rce.html",
    "publishedAt": "2026-11-03T11:23:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-patches-kernel-tcp-rce-cve-2026-98432",
      "article-99de3560",
      "99de3560",
      "red-hat-patches-kernel-tcp-rce-cve-2026-98432-728c1b"
    ]
  },
  {
    "slug": "exposure-prioritization-framework-explained-36cbb380",
    "title": "Exposure Prioritization Framework Explained",
    "summary": "The report explains how organizations prioritize vulnerability remediation, noting that most exposures are treated as urgent despite low exploitation rates. Gartner data shows fewer than 10% of vulnerabilities are actually exploited, yet teams focus on low‑risk exposures, leaving higher‑risk ones unaddressed. Adopting the four‑element framework aligns remediation effort with true risk, improving resource allocation and reducing breach exposure.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/the-4-elements-of-exposure.html",
    "publishedAt": "2026-11-03T11:18:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "exposure-prioritization-framework-explained",
      "article-36cbb380",
      "36cbb380",
      "exposure-prioritization-framework-explained-44e845"
    ]
  },
  {
    "slug": "red-hat-updates-pipewire-for-moderate-security-imp-0108f945",
    "title": "Red Hat Updates pipewire for Moderate Security Impact",
    "summary": "An update for pipewire is now available for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions. Red Hat Product Security rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System base score is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94490",
    "publishedAt": "2026-11-03T11:15:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-pipewire-for-moderate-security-imp",
      "article-0108f945",
      "0108f945",
      "red-hat-updates-pipewire-for-moderate-security-imp-37d8b9",
      "red-hat-updates-pipewire-for-moderate-security-impact"
    ]
  },
  {
    "slug": "kernel-race-condition-exploits-cause-dos-cve-2022-da40416e",
    "title": "Kernel Race Condition Exploits Cause DoS CVE‑2022‑1205",
    "summary": "Duoming Zhou identified race conditions in the AX.25 amateur radio protocol within the Linux kernel, creating CVE‑2022‑1205, a use‑after‑free flaw. The vulnerability permits local attackers to trigger a denial‑of‑service crash, potentially compromising system stability. Red Hat and other vendors have released kernel updates correcting the flaw across multiple subsystems; administrators should apply the patch promptly.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8961-1",
    "publishedAt": "2026-11-03T11:05:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kernel-race-condition-exploits-cause-dos-cve-2022",
      "article-da40416e",
      "da40416e",
      "kernel-race-condition-exploits-cause-dos-cve-2022-7fbd02",
      "kernel-race-condition-exploits-cause-dos-cve-2022-1205"
    ]
  },
  {
    "slug": "kernel-clock-driver-null-dereference-cve-2022-3114-d1d8373f",
    "title": "Kernel Clock Driver Null Dereference CVE‑2022‑3114",
    "summary": "Duoming Zhou uncovered race conditions in the AX.25 protocol and a null pointer dereference in the i.MX clock driver, creating CVE‑2022‑1205 and CVE‑2022‑3114, both local use‑after‑free flaws. Each vulnerability allows local attackers to trigger a denial‑of‑service crash, potentially destabilizing affected systems. Kernel updates correcting these flaws across multiple architectures have been released; administrators should apply the patches promptly.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8963-1",
    "publishedAt": "2026-11-03T11:04:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kernel-clock-driver-null-dereference-cve-2022-3114",
      "article-d1d8373f",
      "d1d8373f",
      "kernel-clock-driver-null-dereference-cve-2022-3114-7fbcfb"
    ]
  },
  {
    "slug": "linux-kernel-subsystems-vulnerabilities-patching-u-78ae618d",
    "title": "Linux Kernel Subsystems Vulnerabilities Patching Update",
    "summary": "Linux kernel subsystems like USB gadget drivers and memory management contain flaws that could let attackers compromise a system. Improper device input handling and memory allocation could allow privilege escalation or denial of service. Ubuntu released a kernel update patching all affected subsystems; administrators should apply it promptly to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8959-1",
    "publishedAt": "2026-11-03T11:03:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-subsystems-vulnerabilities-patching-u",
      "article-78ae618d",
      "78ae618d",
      "linux-kernel-subsystems-vulnerabilities-patching-u-7fbd59",
      "linux-kernel-subsystems-vulnerabilities-patching-update"
    ]
  },
  {
    "slug": "linux-kernel-bluetooth-use-after-free-vulnerabilit-82a11cdb",
    "title": "Linux Kernel Bluetooth Use-After-Free Vulnerabilities Fixed",
    "summary": "A use‑after‑free flaw in the Linux kernel Bluetooth subsystem (CVE‑2021‑3640) allows a local attacker to trigger a denial‑of‑service or potentially execute arbitrary code. Another CVE‑2022‑49058 flaw in the kernel’s file‑system infrastructure also permits local privilege escalation or denial‑of‑service. Ubuntu released kernel updates that patch both vulnerabilities; administrators should apply the latest kernel version immediately to mitigate the risks.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8968-1",
    "publishedAt": "2026-11-03T11:03:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-bluetooth-use-after-free-vulnerabilit",
      "article-82a11cdb",
      "82a11cdb",
      "linux-kernel-bluetooth-use-after-free-vulnerabilit-7fbce8",
      "linux-kernel-bluetooth-use-after-free-vulnerabilities-fixed"
    ]
  },
  {
    "slug": "usn-8967-1-linux-kernel-aws-vulnerability-b5a0eb08",
    "title": "USN-8967-1: Linux kernel (AWS) vulnerability",
    "summary": "Jürgen Groß discovered that the Xen network backend driver in the Linux kernel did not adequately limit the amount of queued packets when a guest did not process them. An attacker in a guest VM can use this to cause a denial of service (excessive kernel memory consumption) in the network backend domain. The vulnerability is tracked as CVE-2026-98432.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8967-1",
    "publishedAt": "2026-11-03T11:03:11.000Z",
    "cves": [
      "CVE-2026-98432"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-8967-1-linux-kernel-aws-vulnerability",
      "article-b5a0eb08",
      "b5a0eb08",
      "usn-8967-1-linux-kernel-aws-vulnerability-7fbcec"
    ]
  },
  {
    "slug": "ubuntu-patches-linux-kernel-scsi-nfs-flaws-ce91eeae",
    "title": "Ubuntu Patches Linux Kernel SCSI NFS Flaws",
    "summary": "Ubuntu released USN-8964-1 patching Linux kernel vulnerabilities in SCSI and NFS subsystems allowing system compromise. The flaws, CVE-2022-49082 and CVE-2025-39730, permit memory corruption or privilege escalation via local or network file share access. Administrators must apply kernel updates via standard Ubuntu channels to mitigate exploitation risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8964-1",
    "publishedAt": "2026-11-03T11:02:41.000Z",
    "cves": [
      "CVE-2022-49082",
      "CVE-2025-39730"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-patches-linux-kernel-scsi-nfs-flaws",
      "article-ce91eeae",
      "ce91eeae",
      "ubuntu-patches-linux-kernel-scsi-nfs-flaws-7fbcf7"
    ]
  },
  {
    "slug": "gorbag-exploits-winrar-flaw-for-data-theft-d7ba2ddb",
    "title": "Gorbag Exploits WinRAR Flaw for Data Theft",
    "summary": "Gorbag exploited a WinRAR flaw to deploy simple information‑stealing malware against Ukrainian law enforcement, justice, and defense entities. The vulnerability enabled arbitrary code execution via a crafted archive, but no zero‑day status was confirmed, limiting the attack to a known flaw. Teams should patch WinRAR to the latest release and monitor for suspicious archive extraction.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/russia-aligned-gorbag-hackers-exploit.html",
    "publishedAt": "2026-11-03T11:00:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gorbag-exploits-winrar-flaw-for-data-theft",
      "article-d7ba2ddb",
      "d7ba2ddb",
      "gorbag-exploits-winrar-flaw-for-data-theft-bb3727"
    ]
  },
  {
    "slug": "harvard-breach-exposes-851-000-alumni-accounts-62b371b9",
    "title": "Harvard Breach Exposes 851,000 Alumni Accounts",
    "summary": "Hackers accessed Harvard University's Alumni Affairs and Development systems in November 2025, compromising over 850,000 email addresses. The breach exposed personal identifiers and contact data, creating a high‑risk exposure for alumni and potential phishing vectors, with no credential theft reported.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/harvard-university-data-breach-exposed-info-of-851-000-accounts/",
    "publishedAt": "2026-11-03T10:53:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "harvard-breach-exposes-851-000-alumni-accounts",
      "article-62b371b9",
      "62b371b9",
      "harvard-breach-exposes-851-000-alumni-accounts-76cbec"
    ]
  },
  {
    "slug": "ncsc-warns-ai-accelerates-ransomware-on-critical-i-e6aa1c94",
    "title": "NCSC Warns AI Accelerates Ransomware on Critical Infrastructure",
    "summary": "The UK National Cyber Security Centre warned that AI is enabling ransomware actors to launch attacks on critical infrastructure more quickly and cheaply. Its 2026 Annual Review recorded 1,831 attack reports, including 337 incidents that required Incident Management Team support. The NCSC urges organizations to adopt AI‑aware defenses, such as threat detection and response playbooks, to mitigate accelerated ransomware risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ai-could-accelerate-ransomware/",
    "publishedAt": "2026-11-03T10:50:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ncsc-warns-ai-accelerates-ransomware-on-critical-i",
      "article-e6aa1c94",
      "e6aa1c94",
      "ncsc-warns-ai-accelerates-ransomware-on-critical-i-7f5e2e",
      "ncsc-warns-ai-accelerates-ransomware-on-critical-infrastruct"
    ]
  },
  {
    "slug": "red-hat-fixes-multiple-cves-in-rhel-ai-3-5-4c5aebe3",
    "title": "Red Hat Fixes Multiple CVEs in RHEL AI 3.5",
    "summary": "Red Hat released a security update for RHEL AI 3.5 that addresses six critical CVEs affecting the ffmpeg runtime. The vulnerabilities, identified as CVE-2026-64832, CVE-2026-64833, CVE-2026-70628, CVE-2026-75142, CVE-2026-75144, and CVE-2026-75146, could allow attackers to execute arbitrary code or cause denial of service. Users should apply the RHSA-2026:94488 update immediately to mitigate potential exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94488",
    "publishedAt": "2026-11-03T10:49:20.000Z",
    "cves": [
      "CVE-2026-64832",
      "CVE-2026-64833",
      "CVE-2026-70628",
      "CVE-2026-75142",
      "CVE-2026-75144",
      "CVE-2026-75146"
    ],
    "additionalSources": [],
    "aliases": [
      "red-hat-fixes-multiple-cves-in-rhel-ai-3-5",
      "article-4c5aebe3",
      "4c5aebe3",
      "red-hat-fixes-multiple-cves-in-rhel-ai-3-5-37d8b9"
    ]
  },
  {
    "slug": "ares-platform-automates-66-red-team-attack-modules-411e83c2",
    "title": "ARES Platform Automates 66 Red Team Attack Modules",
    "summary": "The open‑core ARES platform provides red teams with 66 active modules to simulate attacks against Active Directory and cloud environments. Modules map to over 60 MITRE ATT&CK techniques, enabling comprehensive testing of identity, credential, and cloud configuration defenses. Developed by Mafifrizi and released on GitHub, the tool is free to use and can be integrated into existing penetration‑testing workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ares-ai-red-team-platform/",
    "publishedAt": "2026-11-03T10:39:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ares-platform-automates-66-red-team-attack-modules",
      "article-411e83c2",
      "411e83c2",
      "ares-platform-automates-66-red-team-attack-modules-71f349"
    ]
  },
  {
    "slug": "adobe-commerce-zero-day-enables-psk-agent-rat-depl-3b9d53a7",
    "title": "Adobe Commerce Zero-Day Enables PSK Agent RAT Deployment",
    "summary": "Attackers exploited the StyleSmuggler flaw in Adobe Commerce and Magento to install the PSK Agent RAT on e‑commerce servers via remote code execution. The CVE‑2026‑75650 vulnerability allows persistent command execution, traffic tunneling, and survives server restarts, presenting a high‑severity remote access threat. Adobe has released an out‑of‑band patch; administrators should apply the update immediately and monitor for unauthorized processes.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/adobe-commerce-zero-day/",
    "publishedAt": "2026-11-03T10:03:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "adobe-commerce-zero-day-enables-psk-agent-rat-depl",
      "article-3b9d53a7",
      "3b9d53a7",
      "adobe-commerce-zero-day-enables-psk-agent-rat-depl-1411a7",
      "adobe-commerce-zero-day-enables-psk-agent-rat-deployment"
    ]
  },
  {
    "slug": "gorbag-hackers-exploit-winrar-vulnerability-agains-27d64ca9",
    "title": "Gorbag Hackers Exploit WinRAR Vulnerability Against Ukrainian Targets",
    "summary": "Russia-aligned threat actors tracked as Gorbag are actively exploiting a WinRAR vulnerability to steal credentials from Ukrainian government agencies. The campaign targets law enforcement bodies, defense organizations, and local administrations near conflict zones. Attackers exfiltrate browser credentials, VPN configurations, and sensitive documents through the exploit chain. Ukrainian defenders must apply vendor patches and implement credential monitoring to detect unauthorized access.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/03/gorbag-apt-group-malware/",
    "publishedAt": "2026-11-03T10:00:14.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/gorbag-hackers-exploit-winrar-vulnerability/"
      }
    ],
    "aliases": [
      "gorbag-hackers-exploit-winrar-vulnerability-agains",
      "article-27d64ca9",
      "27d64ca9",
      "gorbag-hackers-exploit-winrar-vulnerability-agains-7cf37f",
      "gorbag-hackers-exploit-winrar-vulnerability-against-ukrainia"
    ]
  },
  {
    "slug": "cogent-security-highlights-php2shell-vulnerability-6a9d6960",
    "title": "Cogent Security Highlights PHP2Shell Vulnerability Impact",
    "summary": "Cogent Security reported that PHP2Shell, disclosed on October 21, exposed two critical flaws that had persisted in PHP for over a decade. The flaws enable remote code execution and privilege escalation, posing a high‑severity risk for web apps using the affected PHP version. Admins should upgrade to the latest PHP release, apply patches, and use AI‑driven monitoring to detect exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/cogent-security-makes-the-fortune-cyber-60-for-a-second-year-with-a-plan-to-run-cyber-defense-like-a-factory/",
    "publishedAt": "2026-11-03T09:59:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cogent-security-highlights-php2shell-vulnerability",
      "article-6a9d6960",
      "6a9d6960",
      "cogent-security-highlights-php2shell-vulnerability-19b788",
      "cogent-security-highlights-php2shell-vulnerability-impact"
    ]
  },
  {
    "slug": "cpguard-update-channel-hijacked-backdoor-deployed-25db363b",
    "title": "cPGuard Update Channel Hijacked, Backdoor Deployed",
    "summary": "An attacker compromised the update channel for cPGuard, a Linux hosting security tool, and pushed a malicious script that installed a backdoor and exfiltrated sensitive files. OPSSHIELD confirmed the attacker retrieved stolen data and advised administrators to upgrade to version 5.88.25 or newer immediately. Security teams should verify update signatures, apply the latest patch, and monitor for unauthorized backdoor activity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/cpguard-supply-chain-attack/",
    "publishedAt": "2026-11-03T09:53:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cpguard-update-channel-hijacked-backdoor-deployed",
      "article-25db363b",
      "25db363b",
      "cpguard-update-channel-hijacked-backdoor-deployed-7e2df3"
    ]
  },
  {
    "slug": "russia-aligned-gorbag-group-targets-frontline-ukra-76702641",
    "title": "Russia-Aligned Gorbag Group Targets Frontline Ukrainian Entities",
    "summary": "ESET researchers identified Gorbag, a Russia-aligned cyber espionage group targeting Ukrainian organizations located near the front line. The threat actors deploy simple infostealer malware to systematically harvest sensitive data and intelligence from compromised systems. Security teams monitoring affected regional networks should implement robust infostealer detection mechanisms and restrict sensitive data egress.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "ESET WeLiveSecurity",
    "sourceUrl": "https://www.welivesecurity.com/en/eset-research/gorbag-orcs-border-harvesting-intelligence-ukraine/",
    "publishedAt": "2026-11-03T09:50:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russia-aligned-gorbag-group-targets-frontline-ukra",
      "article-76702641",
      "76702641",
      "russia-aligned-gorbag-group-targets-frontline-ukra-62b7ab",
      "russia-aligned-gorbag-group-targets-frontline-ukrainian-enti"
    ]
  },
  {
    "slug": "uk-anticipates-ai-cyberattacks-on-critical-infrast-15a1cf1e",
    "title": "UK Anticipates AI Cyberattacks on Critical Infrastructure by 2028",
    "summary": "UK cyber chief warned that by 2028, state actors like China and Russia will target critical infrastructure with AI attacks. The warning underscores the rise of machine‑learning‑driven intrusion, phishing, and sabotage against essential services. Teams should adopt robust AI‑aware defenses, conduct threat modeling, and coordinate with government agencies for preparedness.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/uk-cyber-chief-says-the-uk-will-face-ai-cyberattacks-on-critical-infrastructure-by-2028/",
    "publishedAt": "2026-11-03T09:49:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "uk-anticipates-ai-cyberattacks-on-critical-infrast",
      "article-15a1cf1e",
      "15a1cf1e",
      "uk-anticipates-ai-cyberattacks-on-critical-infrast-7579d0",
      "uk-anticipates-ai-cyberattacks-on-critical-infrastructure-by"
    ]
  },
  {
    "slug": "stolen-cloud-credentials-fuel-ai-billing-spikes-5b583e27",
    "title": "Stolen Cloud Credentials Fuel AI Billing Spikes",
    "summary": "Criminals compromised corporate cloud accounts to run AI models, generating excessive API requests and billing spikes. The attacks, dubbed LLMJacking, have produced daily charges exceeding $100,000 and cumulative bills up to $1 million, as identified by GTIG and Mandiant. Organizations should enforce strict credential hygiene, enable multi‑factor authentication, and monitor anomalous API usage to mitigate future incidents.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/03/llmjacking-stolen-ai-access-cloud-bills/",
    "publishedAt": "2026-11-03T09:39:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "stolen-cloud-credentials-fuel-ai-billing-spikes",
      "article-5b583e27",
      "5b583e27",
      "stolen-cloud-credentials-fuel-ai-billing-spikes-5d4531"
    ]
  },
  {
    "slug": "crowdstrike-deloitte-ai-partnership-expands-enterp-c3812401",
    "title": "CrowdStrike-Deloitte AI Partnership Expands Enterprise Threat Detection",
    "summary": "CrowdStrike and Deloitte announced an expanded AI security partnership at Fal.Con Europe, integrating Falcon IQ into Deloitte Spain’s advisory services. The alliance links business risk decisions with threat detection and response, focusing on identifying practical security challenges for enterprises. Security teams should evaluate the integration to enhance risk‑aware threat detection workflows and incorporate Falcon IQ analytics into operational playbooks.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/crowdstrike-and-deloitte-expand-ai-security/",
    "publishedAt": "2026-11-03T09:34:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-deloitte-ai-partnership-expands-enterp",
      "article-c3812401",
      "c3812401",
      "crowdstrike-deloitte-ai-partnership-expands-enterp-3c3cb7",
      "crowdstrike-deloitte-ai-partnership-expands-enterprise-threa"
    ]
  },
  {
    "slug": "google-dismantles-xcpe-botnet-of-1-3m-android-devi-a88e7321",
    "title": "Google Dismantles XCPE Botnet of 1.3M Android Devices",
    "summary": "Google dismantled the XCPE botnet that infected 1.3 million Android devices, operated by OEM/ODM Videostrong Technology for financial gain. The botnet used compromised apps to exfiltrate data and deliver malware, but no public exploit or CVE was disclosed. Google removed command‑and‑control servers and pushed device cleanup, and teams should update firmware and enforce stricter app vetting.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/google-dismantles-xcpe-botnet-of-1-3-million-android-devices/",
    "publishedAt": "2026-11-03T09:22:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-dismantles-xcpe-botnet-of-1-3m-android-devi",
      "article-a88e7321",
      "a88e7321",
      "google-dismantles-xcpe-botnet-of-1-3m-android-devi-1979c1",
      "google-dismantles-xcpe-botnet-of-1-3m-android-devices"
    ]
  },
  {
    "slug": "rhsa-2026-94438-critical-kernel-security-bug-fix-a-302ed0b3",
    "title": "RHSA-2026:94438: Critical: kernel security, bug fix, and enhancement update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. The vulnerability is tracked as CVE-2026-64832.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94438",
    "publishedAt": "2026-11-03T09:20:58.000Z",
    "cves": [
      "CVE-2026-64832"
    ],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-94438-critical-kernel-security-bug-fix-a",
      "article-302ed0b3",
      "302ed0b3",
      "rhsa-2026-94438-critical-kernel-security-bug-fix-a-37d8ba",
      "rhsa-2026-94438-critical-kernel-security-bug-fix-and-enhance"
    ]
  },
  {
    "slug": "rhsa-2026-94449-important-libxtst-security-update-5901ed76",
    "title": "RHSA-2026:94449: Important: libXtst security update",
    "summary": "An update for libXtst is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94449",
    "publishedAt": "2026-11-03T09:03:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-94449-important-libxtst-security-update",
      "article-5901ed76",
      "5901ed76",
      "rhsa-2026-94449-important-libxtst-security-update-37d8ba"
    ]
  },
  {
    "slug": "openai-boosts-bug-bounty-payouts-to-172-000-c78b0629",
    "title": "OpenAI Boosts Bug Bounty Payouts to $172,000",
    "summary": "OpenAI has increased its bug bounty program, raising the maximum payout for critical findings to $172,000 and adding bonus incentives for high‑quality reports. The program now offers quadrupled midpoints for medium, high, and critical categories, encouraging researchers to disclose vulnerabilities responsibly. Security teams should review OpenAI’s updated bounty guidelines and ensure their own systems are regularly tested for similar vulnerabilities.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/03/openai-bigger-bug-bounty-rewards/",
    "publishedAt": "2026-11-03T08:58:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-boosts-bug-bounty-payouts-to-172-000",
      "article-c78b0629",
      "c78b0629",
      "openai-boosts-bug-bounty-payouts-to-172-000-644cbd"
    ]
  },
  {
    "slug": "nato-exercise-integrates-ai-agents-into-cyber-trai-b8ca9838",
    "title": "NATO Exercise Integrates AI Agents into Cyber Training",
    "summary": "NATO’s Crossed Swords exercise in Estonia integrated AI agents and OpenAI Daybreak into joint cyber and kinetic operations training. The exercise aimed to evaluate AI‑driven decision support and autonomous response capabilities within a realistic threat environment. Participants will assess integration challenges, command‑control workflows, and potential adversarial manipulation of AI agents.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/natos-crossed-swords-exercise-brings-ai-agents-into-cyber-operations-training/",
    "publishedAt": "2026-11-03T08:49:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nato-exercise-integrates-ai-agents-into-cyber-trai",
      "article-b8ca9838",
      "b8ca9838",
      "nato-exercise-integrates-ai-agents-into-cyber-trai-211b8b",
      "nato-exercise-integrates-ai-agents-into-cyber-training"
    ]
  },
  {
    "slug": "rhsa-2026-94443-important-python3-security-update-6c65896b",
    "title": "RHSA-2026:94443: Important: python3 security update",
    "summary": "An update for python3 is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important. The vulnerability is tracked as CVE-2026-43871.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94443",
    "publishedAt": "2026-11-03T08:41:02.000Z",
    "cves": [
      "CVE-2026-43871"
    ],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-94443-important-python3-security-update",
      "article-6c65896b",
      "6c65896b",
      "rhsa-2026-94443-important-python3-security-update-37d8ba"
    ]
  },
  {
    "slug": "pipewire-update-addresses-moderate-security-flaw-i-2fe8608c",
    "title": "Pipewire Update Addresses Moderate Security Flaw in RHEL 9.6",
    "summary": "A moderate update for Pipewire on Red Hat Enterprise Linux 9.6 EUS addresses a vulnerability in the multimedia framework. The flaw permits unauthorized manipulation of audio and video streams, potentially enabling privilege escalation or denial of service, and is rated moderate by Red Hat Product Security. Red Hat recommends applying the RHSA‑2026:94437 update immediately; no additional workarounds are required.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94437",
    "publishedAt": "2026-11-03T08:33:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pipewire-update-addresses-moderate-security-flaw-i",
      "article-2fe8608c",
      "2fe8608c",
      "pipewire-update-addresses-moderate-security-flaw-i-37d8ba",
      "pipewire-update-addresses-moderate-security-flaw-in-rhel-9-6"
    ]
  },
  {
    "slug": "rhsa-2026-94436-moderate-pipewire-security-update-8b46d4e4",
    "title": "RHSA-2026:94436: Moderate: pipewire security update",
    "summary": "An update for pipewire is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94436",
    "publishedAt": "2026-11-03T08:26:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-94436-moderate-pipewire-security-update",
      "article-8b46d4e4",
      "8b46d4e4",
      "rhsa-2026-94436-moderate-pipewire-security-update-37d8ba"
    ]
  },
  {
    "slug": "gnutls-update-mitigates-moderate-vulnerability-in-8eb72348",
    "title": "Gnutls Update Mitigates Moderate Vulnerability in RHEL 6",
    "summary": "A moderate update for Gnutls on Red Hat Enterprise Linux 6 EXTENSION addresses a vulnerability in the TLS library. The flaw allows unauthorized manipulation of cryptographic parameters, potentially enabling downgrade attacks or denial of service, and is rated moderate by Red Hat Product Security. Red Hat recommends applying the RHSA‑2026:94442 update immediately; no additional workarounds are required.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94442",
    "publishedAt": "2026-11-03T08:26:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gnutls-update-mitigates-moderate-vulnerability-in",
      "article-8eb72348",
      "8eb72348",
      "gnutls-update-mitigates-moderate-vulnerability-in-37d8ba",
      "gnutls-update-mitigates-moderate-vulnerability-in-rhel-6"
    ]
  },
  {
    "slug": "toy-dog-traces-scam-sites-to-kremlin-money-trail-1520a49a",
    "title": "Toy Dog Traces Scam Sites to Kremlin Money Trail",
    "summary": "A $30 AI toy dog prompted Mastercard to discover over 250 scam sites linked by a common money trail. The trail shows that minimal card charges funnel into ransomware payouts, revealing a coordinated financial pathway exploited by attackers. Security teams can disrupt this chain by monitoring low‑value transactions and blocking identified payment routes, as outlined in Mastercard’s guidance.",
    "category": "General",
    "severity": "LOW",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/declassified-money-train-episode-four",
    "publishedAt": "2026-11-03T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "toy-dog-traces-scam-sites-to-kremlin-money-trail",
      "article-1520a49a",
      "1520a49a",
      "toy-dog-traces-scam-sites-to-kremlin-money-trail-2bb088"
    ]
  },
  {
    "slug": "crowdstrike-secures-ai-agents-inside-claude-cowork-cc93930b",
    "title": "CrowdStrike Secures AI Agents Inside Claude Cowork",
    "summary": "CrowdStrike announced that it has secured AI agents inside the Claude Cowork environment, reinforcing internal security controls. The move addresses potential insider threat vectors by isolating AI workloads and limiting lateral movement within the platform. Security teams should verify agent isolation policies, monitor access logs, and update internal threat models to reflect the new containment strategy.",
    "category": "General",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/crowdstrike-secures-ai-agents-inside-claude-cowork/",
    "publishedAt": "2026-11-03T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-secures-ai-agents-inside-claude-cowork",
      "article-cc93930b",
      "cc93930b",
      "crowdstrike-secures-ai-agents-inside-claude-cowork-36df18"
    ]
  },
  {
    "slug": "crowdstrike-acquires-fiddler-for-ai-observability-980e493b",
    "title": "CrowdStrike Acquires Fiddler for AI Observability",
    "summary": "CrowdStrike announced the acquisition of Fiddler to enhance Falcon Observe with AI agent observability capabilities. The deal expands CrowdStrike’s telemetry stack, enabling deeper visibility into autonomous agent behavior and performance metrics. Security teams should integrate the new observability modules to monitor AI workloads and detect anomalous activity and ensure compliance with data privacy regulations.",
    "category": "General",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/crowdstrike-to-acquire-fiddler/",
    "publishedAt": "2026-11-03T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-acquires-fiddler-for-ai-observability",
      "article-980e493b",
      "980e493b",
      "crowdstrike-acquires-fiddler-for-ai-observability-414b13"
    ]
  },
  {
    "slug": "crowdstrike-expands-ai-security-across-cloud-and-e-1c48ce46",
    "title": "CrowdStrike Expands AI Security Across Cloud and Endpoint",
    "summary": "CrowdStrike announced an expansion of its AI‑driven security capabilities from endpoint to cloud environments. The update introduces new AI models that analyze telemetry across the Falcon platform, aiming to detect threats earlier and reduce false positives. No immediate patch is required; organizations should enable the new AI modules via the Falcon console and monitor for improved detection metrics.",
    "category": "General",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/crowdstrike-advances-ai-security-and-safety-falcon-guardian/",
    "publishedAt": "2026-11-03T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-expands-ai-security-across-cloud-and-e",
      "article-1c48ce46",
      "1c48ce46",
      "crowdstrike-expands-ai-security-across-cloud-and-e-48571f",
      "crowdstrike-expands-ai-security-across-cloud-and-endpoint"
    ]
  },
  {
    "slug": "ai-kill-switch-enables-control-over-rogue-agents-8c084db0",
    "title": "AI Kill Switch Enables Control Over Rogue Agents",
    "summary": "CrowdStrike unveiled an AI Kill Switch feature that allows administrators to halt rogue AI agents within the Falcon platform. The kill switch monitors agent behavior, triggers a safe shutdown, and logs the event for forensic analysis. Deploying the feature requires enabling the kill switch policy in the Falcon console and updating agent firmware to the latest version.",
    "category": "General",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/crowdstrike-introduces-ai-kill-switch/",
    "publishedAt": "2026-11-03T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-kill-switch-enables-control-over-rogue-agents",
      "article-8c084db0",
      "8c084db0",
      "ai-kill-switch-enables-control-over-rogue-agents-4380f3"
    ]
  },
  {
    "slug": "crowdstrike-acquires-dreadnode-for-ai-security-tes-9463faaf",
    "title": "CrowdStrike Acquires Dreadnode for AI Security Testing",
    "summary": "CrowdStrike announced the acquisition of Dreadnode, a company specializing in automated AI security testing. The deal aims to integrate Dreadnode’s testing framework into the Falcon platform, expanding AI‑driven threat detection capabilities. No immediate action is required; organizations should monitor Falcon updates for the new testing modules and adjust policies accordingly.",
    "category": "General",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/crowdstrike-to-acquire-dreadnode/",
    "publishedAt": "2026-11-03T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-acquires-dreadnode-for-ai-security-tes",
      "article-9463faaf",
      "9463faaf",
      "crowdstrike-acquires-dreadnode-for-ai-security-tes-24ae26",
      "crowdstrike-acquires-dreadnode-for-ai-security-testing"
    ]
  },
  {
    "slug": "supermarket-fridge-controllers-targeted-in-europea-a35c838e",
    "title": "Supermarket Fridge Controllers Targeted in European IoT Attacks",
    "summary": "Attackers tampered with internet‑exposed refrigeration controllers at over 100 European supermarkets, targeting IoT devices in Belgium, Sweden, and Ireland. The exploitation enabled unauthorized control of temperature settings, potentially compromising food safety and inventory, and was facilitated by a known firmware vulnerability. Supermarkets should apply vendor firmware updates immediately and restrict network access to refrigeration systems to mitigate further compromise.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/over-100-european-stores-hit-as-supermarket-fridge-attacks-resume/",
    "publishedAt": "2026-11-03T07:43:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "supermarket-fridge-controllers-targeted-in-europea",
      "article-a35c838e",
      "a35c838e",
      "supermarket-fridge-controllers-targeted-in-europea-64e68a",
      "supermarket-fridge-controllers-targeted-in-european-iot-atta"
    ]
  },
  {
    "slug": "synology-ransomware-exploits-patched-dsm-vulnerabi-79b25dd4",
    "title": "Synology Ransomware Exploits Patched DSM Vulnerability",
    "summary": "Synology reports ransomware attacks targeting NAS devices that exploit a vulnerability patched in December 2024. Attackers leveraged the flaw to encrypt data on outdated DSM versions, demanding ransom payments from affected customers, and disabling backup functionality. Synology urges users to update DSM immediately; no additional mitigations are necessary beyond the patch, and backups should be verified.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/synology-nas-devices-targeted-in.html",
    "publishedAt": "2026-11-03T07:43:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "synology-ransomware-exploits-patched-dsm-vulnerabi",
      "article-79b25dd4",
      "79b25dd4",
      "synology-ransomware-exploits-patched-dsm-vulnerabi-3f59d6",
      "synology-ransomware-exploits-patched-dsm-vulnerability"
    ]
  },
  {
    "slug": "europe-supermarkets-hit-by-refrigeration-cyberatta-6b367a70",
    "title": "Europe Supermarkets Hit by Refrigeration Cyberattacks",
    "summary": "Attackers remotely altered refrigeration control settings at supermarkets in Belgium, Sweden, Estonia, and other European countries, warming fridges and freezers overnight. The flaw in Danfoss controllers allowed unauthenticated remote configuration changes, causing food spoilage and inventory losses. Danfoss issued a firmware update and recommends disabling remote access until the patch is applied to prevent further disruptions.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/second-wave-of-cyberattacks-hits.html",
    "publishedAt": "2026-11-03T07:27:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "europe-supermarkets-hit-by-refrigeration-cyberatta",
      "article-6b367a70",
      "6b367a70",
      "europe-supermarkets-hit-by-refrigeration-cyberatta-263d71",
      "europe-supermarkets-hit-by-refrigeration-cyberattacks"
    ]
  },
  {
    "slug": "darkblinders-breach-iraqi-cloud-steal-1gb-data-7722d4db",
    "title": "DarkBlinders Breach Iraqi Cloud, Steal 1GB Data",
    "summary": "DarkBlinders breached a government cloud in Iraq’s Kurdistan Region, exfiltrating over 1GB of data and compromising an Israeli security official. The attackers leveraged undisclosed misconfigurations or vulnerabilities to gain unauthorized access, sustaining the intrusion from August to October 2026. No vendor patch applies; defenders should tighten cloud IAM, monitor outbound traffic, and perform forensic analysis to detect similar breaches.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/iran-linked-darkblinders-hackers/",
    "publishedAt": "2026-11-03T07:25:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "darkblinders-breach-iraqi-cloud-steal-1gb-data",
      "article-7722d4db",
      "7722d4db",
      "darkblinders-breach-iraqi-cloud-steal-1gb-data-6a8dbc"
    ]
  },
  {
    "slug": "hackers-deploy-paprat-via-vhdx-and-webdav-links-544374d8",
    "title": "Hackers Deploy PapRAT via VHDX and WebDAV Links",
    "summary": "A suspected espionage group delivers the PapRAT remote access trojan to Windows systems using malicious VHDX disk images and WebDAV links. The campaign embeds the payload in innocuous shortcut files and remote web folders, evading detection by antivirus signatures. Security teams should block inbound WebDAV traffic, quarantine suspicious VHDX files, and enforce strict email attachment policies to mitigate infection.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-use-malicious-vhdx-files/",
    "publishedAt": "2026-11-03T06:44:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-deploy-paprat-via-vhdx-and-webdav-links",
      "article-544374d8",
      "544374d8",
      "hackers-deploy-paprat-via-vhdx-and-webdav-links-1049ca"
    ]
  },
  {
    "slug": "human-hackers-outperform-ai-in-business-logic-asse-f8d053d9",
    "title": "Human Hackers Outperform AI in Business Logic Assessment",
    "summary": "Kara Sprague, HackerOne CEO, said AI finds bugs fast, but humans better assess business impact and prioritize. She noted medium‑severity findings often pay less, and AI‑assisted reports need human triage to filter spam and ensure relevance. HackerOne blends AI detection with human judgment to enhance security outcomes and reward alignment.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/03/kara-sprague-hackerone-ai-bug-bounty/",
    "publishedAt": "2026-11-03T06:30:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "human-hackers-outperform-ai-in-business-logic-asse",
      "article-f8d053d9",
      "f8d053d9",
      "human-hackers-outperform-ai-in-business-logic-asse-433d13",
      "human-hackers-outperform-ai-in-business-logic-assessment"
    ]
  },
  {
    "slug": "bydfi-revamp-unifies-rewards-hub-offers-8-100-usdt-3bb753eb",
    "title": "BYDFi Revamp Unifies Rewards Hub, Offers 8,100 USDT",
    "summary": "BYDFi’s platform upgrade consolidates campaigns, tasks, and reward claims into a single Rewards Hub, letting new users claim welcome rewards up to 8,100 USDT. The security perspective frames the onboarding window where an account shifts from empty to active, highlighting potential credential exposure. Users should verify account activity, enable MFA, and monitor for suspicious transactions during the initial claim period.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/bydfis-up-to-8100-usdt-welcome-rewards-a-security-first-guide-for-new-users/",
    "publishedAt": "2026-11-03T06:03:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bydfi-revamp-unifies-rewards-hub-offers-8-100-usdt",
      "article-3bb753eb",
      "3bb753eb",
      "bydfi-revamp-unifies-rewards-hub-offers-8-100-usdt-621df1"
    ]
  },
  {
    "slug": "sweet-virtual-patching-mitigates-http2shell-rce-abf28543",
    "title": "Sweet Virtual Patching Mitigates HTTP2Shell RCE",
    "summary": "HTTP2Shell (CVE-2026-111497) is a remote code execution flaw in Brotli used by Node.js, Bun, Envoy, Python, discovered by OpenAI agents. The flaw lets attackers inject malformed Brotli streams, triggering a decoder crash that enables unauthenticated code execution with a CVSS of 9.8.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/03/product-showcase-sweet-security-virtual-patching/",
    "publishedAt": "2026-11-03T06:00:18.000Z",
    "cves": [
      "CVE-2026-111497"
    ],
    "additionalSources": [],
    "aliases": [
      "sweet-virtual-patching-mitigates-http2shell-rce",
      "article-abf28543",
      "abf28543",
      "sweet-virtual-patching-mitigates-http2shell-rce-40222c"
    ]
  },
  {
    "slug": "quest-foglight-xml-external-entity-disclosure-vuln-ab171ef5",
    "title": "Quest Foglight XML External Entity Disclosure Vulnerability",
    "summary": "A remote information‑disclosure flaw in Quest Foglight for Databases’ AbstractParser lets attackers read sensitive data via XML External Entity processing. CVE-2026-92185 carries a CVSS 7.2 score, requires no authentication, and can expose configuration files and internal credentials. Quest has issued a patch disabling external entity processing; administrators should apply it immediately to stop data leakage.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-862/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-92185"
    ],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-xml-external-entity-disclosure-vuln",
      "article-ab171ef5",
      "ab171ef5",
      "quest-foglight-xml-external-entity-disclosure-vuln-6f3caa",
      "quest-foglight-xml-external-entity-disclosure-vulnerability"
    ]
  },
  {
    "slug": "quest-foglight-fileservlet-path-disclosure-vulnera-ba64caed",
    "title": "Quest Foglight FileServlet Path Disclosure Vulnerability",
    "summary": "An authenticated information‑disclosure flaw in Quest Foglight for Databases’ FileServlet component allows attackers to read arbitrary file paths. CVE-2026-92193 has a CVSS 6.5 rating, requires valid credentials, and can reveal internal configuration and log files. Quest released a patch that restricts file path access; administrators should apply the update to prevent data exposure.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-853/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-92193"
    ],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-fileservlet-path-disclosure-vulnera",
      "article-ba64caed",
      "ba64caed",
      "quest-foglight-fileservlet-path-disclosure-vulnera-6f3ca6",
      "quest-foglight-fileservlet-path-disclosure-vulnerability"
    ]
  },
  {
    "slug": "quest-foglight-rce-via-directory-traversal-27a78179",
    "title": "Quest Foglight RCE via Directory Traversal",
    "summary": "A remote code execution flaw in Quest Foglight for Databases allows authenticated attackers to traverse directories and execute arbitrary code. The vulnerability, identified as CVE-2026-92187, scores CVSS 8.8 and requires valid credentials; exploitation can compromise database servers and expose sensitive data. Quest has released a patch; administrators should apply the update immediately and restrict network access to Foglight management interfaces.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-852/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-92187"
    ],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-rce-via-directory-traversal",
      "article-27a78179",
      "27a78179",
      "quest-foglight-rce-via-directory-traversal-6f3ca6"
    ]
  },
  {
    "slug": "quest-foglight-rce-via-untrusted-deserialization-9c4e31d0",
    "title": "Quest Foglight RCE via Untrusted Deserialization",
    "summary": "An unauthenticated remote code execution vulnerability in Quest Foglight for Databases enables attackers to exploit deserialization of untrusted data. The flaw, CVE-2026-92190, carries a CVSS score of 9.8 and permits arbitrary code execution on database servers, potentially compromising all stored data. Quest has issued a patch; security teams must apply it immediately and disable remote RMI services if possible.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-851/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-92190"
    ],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-rce-via-untrusted-deserialization",
      "article-9c4e31d0",
      "9c4e31d0",
      "quest-foglight-rce-via-untrusted-deserialization-6f3ca6"
    ]
  },
  {
    "slug": "windows-aero-theme-denial-of-service-vulnerability-85a7e7de",
    "title": "Windows Aero Theme Denial‑of‑Service Vulnerability",
    "summary": "A local denial‑of‑service flaw in Microsoft Windows Aero Theme lets attackers crash the system when the theme processes an error condition. The flaw requires low‑privileged code execution and carries a CVSS score of 4.7, indicating moderate impact but no remote code execution. Microsoft has released a patch in the cumulative update; users should apply it promptly to avoid service interruptions.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-868/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-aero-theme-denial-of-service-vulnerability",
      "article-85a7e7de",
      "85a7e7de",
      "windows-aero-theme-denial-of-service-vulnerability-6f3caa"
    ]
  },
  {
    "slug": "quest-foglight-directory-traversal-enables-remote-3bc4674a",
    "title": "Quest Foglight Directory Traversal Enables Remote Code Execution",
    "summary": "Quest Foglight for Databases suffers a directory traversal flaw that allows remote code execution via the loadManageServerLicense endpoint. The vulnerability, CVE-2026-92194, requires authentication and has a CVSS score of 8.8, enabling attackers to run arbitrary code. No patch information is available; security teams should monitor for updates and restrict access to the affected API.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-857/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-92194"
    ],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-directory-traversal-enables-remote",
      "article-3bc4674a",
      "3bc4674a",
      "quest-foglight-directory-traversal-enables-remote-6f3ca7",
      "quest-foglight-directory-traversal-enables-remote-code-execu"
    ]
  },
  {
    "slug": "quest-foglight-directory-traversal-allows-remote-c-29b2ca1d",
    "title": "Quest Foglight Directory Traversal Allows Remote Code Execution",
    "summary": "Quest Foglight for Databases suffers a directory traversal flaw that allows remote code execution via the loadEvolveLicense endpoint. The vulnerability, CVE-2026-92195, requires authentication and has a CVSS score of 8.8, enabling attackers to run arbitrary code. No patch information is available; security teams should monitor for updates and restrict access to the affected API.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-856/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-92195"
    ],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-directory-traversal-allows-remote-c",
      "article-29b2ca1d",
      "29b2ca1d",
      "quest-foglight-directory-traversal-allows-remote-c-6f3ca6",
      "quest-foglight-directory-traversal-allows-remote-code-execut"
    ]
  },
  {
    "slug": "quest-foglight-rce-exploit-unauthenticated-06066062",
    "title": "Quest Foglight RCE Exploit Unauthenticated",
    "summary": "Quest Foglight for Databases is vulnerable to an unauthenticated remote code execution flaw, CVE‑2026‑92188, that exploits missing authentication in ForgeMBeanServerSupport. The flaw carries a CVSS score of 9.8, allowing attackers to execute arbitrary code on the database server without credentials. A vendor patch is available; administrators should apply it promptly and disable remote MBean access if possible.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-854/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-rce-exploit-unauthenticated",
      "article-06066062",
      "06066062",
      "quest-foglight-rce-exploit-unauthenticated-6f3ca6"
    ]
  },
  {
    "slug": "quest-foglight-rce-via-external-file-path-control-392990f9",
    "title": "Quest Foglight RCE via External File Path Control",
    "summary": "A remote code execution flaw in Quest Foglight for Databases lets attackers write arbitrary file paths via writeTopologySectionToFile, bypassing authentication. The flaw, CVE-2026-92189, scores 9.8 on CVSS, enabling unauthenticated RCE that can compromise system integrity. Quest has issued a critical patch; administrators should apply it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-861/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-92189"
    ],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-rce-via-external-file-path-control",
      "article-392990f9",
      "392990f9",
      "quest-foglight-rce-via-external-file-path-control-6f3caa"
    ]
  },
  {
    "slug": "quest-foglight-rce-via-unzipfile-directory-travers-790f56da",
    "title": "Quest Foglight RCE via unzipFile Directory Traversal",
    "summary": "An authenticated remote code execution vulnerability in Quest Foglight for Databases allows attackers to traverse directories through the unzipFile function. The flaw, CVE-2026-92197, has a CVSS score of 8.8 and requires valid credentials to exploit, potentially enabling full system compromise. Quest has released a patch; administrators should update affected installations promptly to eliminate the exploitation vector.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-860/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-92197"
    ],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-rce-via-unzipfile-directory-travers",
      "article-790f56da",
      "790f56da",
      "quest-foglight-rce-via-unzipfile-directory-travers-6f3caa",
      "quest-foglight-rce-via-unzipfile-directory-traversal"
    ]
  },
  {
    "slug": "quest-foglight-rce-via-runscript-authorization-fla-d10aed00",
    "title": "Quest Foglight RCE via runScript Authorization Flaw",
    "summary": "A remote code execution flaw in Quest Foglight for Databases permits attackers with valid credentials to execute arbitrary scripts through the runScript interface. The vulnerability, CVE-2026-92191, scores 8.8 on CVSS and requires authentication, enabling attackers to compromise system processes. Quest has issued a patch; affected users should apply it immediately to prevent exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-859/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-92191"
    ],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-rce-via-runscript-authorization-fla",
      "article-d10aed00",
      "d10aed00",
      "quest-foglight-rce-via-runscript-authorization-fla-6f3ca7",
      "quest-foglight-rce-via-runscript-authorization-flaw"
    ]
  },
  {
    "slug": "quest-foglight-patch-addresses-cve-2026-92186-rce-d77c8ad6",
    "title": "Quest Foglight Patch Addresses CVE-2026-92186 RCE",
    "summary": "A CVE-2026-92186 flaw in Quest Foglight for Databases permits authenticated remote attackers to exploit a directory traversal vulnerability and execute arbitrary code. The vulnerability carries a CVSS score of 8.8, indicating high risk, and requires valid credentials to trigger the remote code execution. Quest has released a patch; administrators should apply the update immediately to prevent exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-858/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-92186"
    ],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-patch-addresses-cve-2026-92186-rce",
      "article-d77c8ad6",
      "d77c8ad6",
      "quest-foglight-patch-addresses-cve-2026-92186-rce-6f3ca7"
    ]
  },
  {
    "slug": "cisco-snort-rce-via-sf-unfold-header-oob-write-d24507e1",
    "title": "Cisco Snort RCE via sf_unfold_header OOB Write",
    "summary": "CVE-2026-20043 exploits an out‑of‑bounds write in Cisco Snort's sf_unfold_header, enabling remote code execution without authentication. The vulnerability carries a CVSS score of 9.8, indicating a critical risk to network intrusion detection systems. Cisco has issued a patch in the latest Snort release; administrators should update immediately to mitigate the exploit.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-867/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-20043"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-snort-rce-via-sf-unfold-header-oob-write",
      "article-d24507e1",
      "d24507e1",
      "cisco-snort-rce-via-sf-unfold-header-oob-write-6f3caa"
    ]
  },
  {
    "slug": "quest-foglight-rce-via-rendertemplatestring-ssti-5f815693",
    "title": "Quest Foglight RCE via renderTemplateString SSTI",
    "summary": "CVE-2026-92196 permits remote code execution in Quest Foglight for Databases via a server‑side template injection in renderTemplateString. The flaw requires authentication and has a CVSS score of 7.2, allowing attackers to run arbitrary code on the database server. Quest released a patch in the latest Foglight version; users should upgrade or apply the vendor‑issued fix to prevent exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-866/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-92196"
    ],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-rce-via-rendertemplatestring-ssti",
      "article-5f815693",
      "5f815693",
      "quest-foglight-rce-via-rendertemplatestring-ssti-6f3caa"
    ]
  },
  {
    "slug": "quest-foglight-lpe-via-incorrect-permission-assign-d2548fd3",
    "title": "Quest Foglight LPE via Incorrect Permission Assignment",
    "summary": "CVE-2026-92200 enables local privilege escalation in Quest Foglight for Databases through incorrect permission assignment. The vulnerability has a CVSS score of 7.8 and requires the attacker to first execute low‑privileged code on the target system. Quest has issued a patch in the current Foglight release; administrators should apply the update to eliminate the privilege escalation risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-865/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-92200"
    ],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-lpe-via-incorrect-permission-assign",
      "article-d2548fd3",
      "d2548fd3",
      "quest-foglight-lpe-via-incorrect-permission-assign-6f3caa",
      "quest-foglight-lpe-via-incorrect-permission-assignment"
    ]
  },
  {
    "slug": "quest-foglight-lpe-via-hardcoded-encryption-key-841f4a88",
    "title": "Quest Foglight LPE via Hardcoded Encryption Key",
    "summary": "A privilege escalation flaw in Quest Foglight for Databases' EncryptionUtil allows attackers to gain elevated rights on affected installations. The vulnerability stems from a hardcoded encryption key that permits unauthorized code execution, and is rated CVSS 7.8 under CVE-2026-92199. Administrators should apply the vendor's patch or upgrade to a version that removes the hardcoded key to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-863/",
    "publishedAt": "2026-11-03T06:00:00.000Z",
    "cves": [
      "CVE-2026-92199"
    ],
    "additionalSources": [],
    "aliases": [
      "quest-foglight-lpe-via-hardcoded-encryption-key",
      "article-841f4a88",
      "841f4a88",
      "quest-foglight-lpe-via-hardcoded-encryption-key-6f3caa"
    ]
  },
  {
    "slug": "red-hat-releases-critical-kernel-update-for-rhel-8-b0d5010b",
    "title": "Red Hat Releases Critical Kernel Update for RHEL 8.8",
    "summary": "Red Hat released a critical kernel update for RHEL 8.8 SAP and Telecom services, fixing multiple CVEs. The patch addresses unauthenticated remote code execution flaws with CVSS scores up to 9.0, protecting kernel integrity. Administrators should apply the update via Red Hat Update Manager or yum to maintain compliance and security.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94303",
    "publishedAt": "2026-11-03T05:53:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-kernel-update-for-rhel-8",
      "article-b0d5010b",
      "b0d5010b",
      "red-hat-releases-critical-kernel-update-for-rhel-8-37d8be",
      "red-hat-releases-critical-kernel-update-for-rhel-8-8"
    ]
  },
  {
    "slug": "ai-coding-agents-deploy-unpatched-mcp-servers-bcd9096a",
    "title": "AI Coding Agents Deploy Unpatched MCP Servers",
    "summary": "Glow Labs found AI coding agents installing deprecated MCP servers on developer machines when prompted to set up a GitHub MCP. The agents pick from repositories that will never be patched, creating a MCPhantom pattern that exposes systems to unpatched vulnerabilities. Developers should vet MCP packages, avoid deprecated repositories, and apply controls to detect and remediate unpatched servers.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/03/mcphantom-deprecated-mcp-servers/",
    "publishedAt": "2026-11-03T05:45:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-coding-agents-deploy-unpatched-mcp-servers",
      "article-bcd9096a",
      "bcd9096a",
      "ai-coding-agents-deploy-unpatched-mcp-servers-1dca0b"
    ]
  },
  {
    "slug": "siemens-iot2050-exploited-for-remote-code-executio-062391f1",
    "title": "Siemens IoT2050 Exploited for Remote Code Execution",
    "summary": "Attackers are exploiting a missing authentication flaw in Siemens SIMATIC IoT2050 Advanced devices, allowing remote code execution. The flaw, CVE-2026-58115, carries a CVSS score of 10.0 and permits unauthenticated attackers to run arbitrary code, potentially compromising device control and network integrity. Siemens has released an out‑of‑band patch; administrators should apply the update immediately and disable exposed management interfaces.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/attackers-exploit-critical-siemens.html",
    "publishedAt": "2026-11-03T05:34:41.000Z",
    "cves": [
      "CVE-2026-58115"
    ],
    "additionalSources": [],
    "aliases": [
      "siemens-iot2050-exploited-for-remote-code-executio",
      "article-062391f1",
      "062391f1",
      "siemens-iot2050-exploited-for-remote-code-executio-1fe1a1",
      "siemens-iot2050-exploited-for-remote-code-execution"
    ]
  },
  {
    "slug": "cryptopayment-plugin-vulnerability-enables-remote-384f31b0",
    "title": "CryptoPayment Plugin Vulnerability Enables Remote File Deletion",
    "summary": "Threat actors target an unpatched flaw in the CryptoPayment Gateway WordPress plugin, enabling unauthenticated remote file deletion. The vulnerability, CVE-2026-81648, scores CVSS 10.0 and could allow attackers to remove arbitrary files and exfiltrate wallet credentials. Site owners should apply the vendor patch immediately and restrict plugin access to authenticated users.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/attackers-target-unpatched.html",
    "publishedAt": "2026-11-03T05:34:37.000Z",
    "cves": [
      "CVE-2026-81648"
    ],
    "additionalSources": [],
    "aliases": [
      "cryptopayment-plugin-vulnerability-enables-remote",
      "article-384f31b0",
      "384f31b0",
      "cryptopayment-plugin-vulnerability-enables-remote-11c86d",
      "cryptopayment-plugin-vulnerability-enables-remote-file-delet"
    ]
  },
  {
    "slug": "fireperf-released-as-open-source-firewall-testing-cd77d728",
    "title": "Fireperf Released as Open-Source Firewall Testing Tool",
    "summary": "The IPFire project has launched fireperf, an open‑source measurement tool that opens connections at a fixed rate to evaluate firewall and router performance. Fireperf mimics iperf3 by reporting per‑connection actions, allowing administrators to assess stateful device behavior under sustained traffic. The tool is free software, suitable for developers, testers, and network engineers seeking to benchmark firewall throughput and latency.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/03/fireperf-open-source-network-testing-tool/",
    "publishedAt": "2026-11-03T05:30:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fireperf-released-as-open-source-firewall-testing",
      "article-cd77d728",
      "cd77d728",
      "fireperf-released-as-open-source-firewall-testing-2a5758",
      "fireperf-released-as-open-source-firewall-testing-tool"
    ]
  },
  {
    "slug": "openai-initiates-security-sprint-with-external-res-fe8b1526",
    "title": "OpenAI Initiates Security Sprint with External Researchers",
    "summary": "OpenAI announced a new security sprint on November 2, inviting external researchers to collaborate with internal teams on vulnerability discovery and remediation. The program partners with Cathedral Systems and offers increased bug bounty rewards to incentivize reporting of serious flaws across OpenAI’s platforms. Security teams should monitor the sprint’s findings and apply patches promptly to maintain platform integrity.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/openai-security-sprint/",
    "publishedAt": "2026-11-03T05:17:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-initiates-security-sprint-with-external-res",
      "article-fe8b1526",
      "fe8b1526",
      "openai-initiates-security-sprint-with-external-res-483311",
      "openai-initiates-security-sprint-with-external-researchers"
    ]
  },
  {
    "slug": "cybersecurity-architect-jobs-open-in-portugal-695c947a",
    "title": "Cybersecurity Architect Jobs Open in Portugal",
    "summary": "Planck Technologies is recruiting a Cyber Security Architect in Portugal to design security architectures for telecom, platform, and cloud environments. The role requires defining frameworks, assessing risks, conducting threat modeling, and embedding security into deployments while maintaining documentation. Candidates should have experience with governance, transformation projects, and technical reviews to support customer workshops.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/03/cybersecurity-jobs-available-right-now-november-3-2026/",
    "publishedAt": "2026-11-03T05:00:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cybersecurity-architect-jobs-open-in-portugal",
      "article-695c947a",
      "695c947a",
      "cybersecurity-architect-jobs-open-in-portugal-4ce3e7"
    ]
  },
  {
    "slug": "composer-2-11-introduces-dependency-cooldowns-60b8e0f7",
    "title": "Composer 2.11 Introduces Dependency Cooldowns",
    "summary": "Composer 2.11 adds a dependency cooldown mechanism that delays the adoption of new package releases to mitigate supply‑chain risk. The cooldown feature allows maintainers to postpone updates for a configurable period, ensuring critical security patches can be vetted before widespread deployment. Users should upgrade to Composer 2.11 and configure cooldown settings to balance security and release velocity.",
    "category": "General",
    "severity": "LOW",
    "source": "Socket.dev",
    "sourceUrl": "https://socket.dev/blog/composer-dependency-cooldowns",
    "publishedAt": "2026-11-03T04:23:21.154Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "composer-2-11-introduces-dependency-cooldowns",
      "article-60b8e0f7",
      "60b8e0f7",
      "composer-2-11-introduces-dependency-cooldowns-95b4be"
    ]
  },
  {
    "slug": "anthropic-adds-edr-monitoring-to-claude-cowork-0bd9b67a",
    "title": "Anthropic Adds EDR Monitoring to Claude Cowork",
    "summary": "Anthropic introduced a beta integration that allows businesses to run endpoint detection and response sensors inside Claude Cowork’s local virtual machine. The feature addresses a monitoring gap where security software cannot see shell commands and code executed within Cowork’s isolated environment. Security teams can now forward Cowork activity to existing EDR solutions, enhancing visibility of hidden AI agent operations.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/anthropic-enables-edr-monitoring/",
    "publishedAt": "2026-11-03T04:18:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-adds-edr-monitoring-to-claude-cowork",
      "article-0bd9b67a",
      "0bd9b67a",
      "anthropic-adds-edr-monitoring-to-claude-cowork-3b0cda"
    ]
  },
  {
    "slug": "red-hat-issues-bind9-18-security-update-5e50442b",
    "title": "Red Hat Issues Bind9.18 Security Update",
    "summary": "Red Hat released a security update for bind9.18 on RHEL 9.6 EUS, addressing multiple vulnerabilities. The update mitigates bugs identified by Red Hat Product Security, with CVSS base scores available via CVE links, though no specific CVE IDs are named. Security teams should apply the bind9.18 update immediately to eliminate the identified flaws.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94278",
    "publishedAt": "2026-11-03T03:58:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-bind9-18-security-update",
      "article-5e50442b",
      "5e50442b",
      "red-hat-issues-bind9-18-security-update-37d8c1"
    ]
  },
  {
    "slug": "workos-breach-exposes-customer-slack-data-via-arte-1bec1a93",
    "title": "WorkOS Breach Exposes Customer Slack Data via ARTEX AI",
    "summary": "Hackers leveraged the ARTEX AI framework to breach WorkOS's sales application, exposing customer contact information and Slack conversation records. The incident, detected on October 30, 2026, involved reconnaissance and exploitation attempts, but no evidence of credential theft or ransomware was reported. WorkOS issued a security bulletin on November 2 and recommends applying the patch and strengthening monitoring for unauthorized access.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/workos-data-breach/",
    "publishedAt": "2026-11-03T03:43:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "workos-breach-exposes-customer-slack-data-via-arte",
      "article-1bec1a93",
      "1bec1a93",
      "workos-breach-exposes-customer-slack-data-via-arte-66ca17",
      "workos-breach-exposes-customer-slack-data-via-artex-ai"
    ]
  },
  {
    "slug": "isc-stormcast-broadcast-scheduled-for-nov-3-2026-38cd315b",
    "title": "ISC Stormcast Broadcast Scheduled for Nov 3, 2026",
    "summary": "ISC releases its weekly Stormcast briefing for Tuesday, November 3, 2026, covering the latest threat landscape and incident responses. The session will review recent high-profile exploits, emerging malware trends, and defensive best practices for security teams. Listeners can stream the podcast via the ISC website or download the episode for offline review.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33484",
    "publishedAt": "2026-11-03T02:00:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isc-stormcast-broadcast-scheduled-for-nov-3-2026",
      "article-38cd315b",
      "38cd315b",
      "isc-stormcast-broadcast-scheduled-for-nov-3-2026-57dd7e"
    ]
  },
  {
    "slug": "red-hat-releases-bind-security-update-1e96ff18",
    "title": "Red Hat Releases Bind Security Update",
    "summary": "Red Hat issued a security update for the BIND DNS server on Enterprise Linux 10.0 Extended Update Support. The patch addresses multiple vulnerabilities with CVSS scores detailed in the referenced CVE links, mitigating potential remote code execution and denial‑of‑service risks. Administrators should apply the RHSA‑2026:94115 update promptly to secure DNS operations.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94115",
    "publishedAt": "2026-11-03T01:25:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-bind-security-update",
      "article-1e96ff18",
      "1e96ff18",
      "red-hat-releases-bind-security-update-37d8c5"
    ]
  },
  {
    "slug": "uk-warns-of-rising-cyberattack-scale-1e42a351",
    "title": "UK Warns of Rising Cyberattack Scale",
    "summary": "The UK National Cyber Security Centre chief warned of an unprecedented rise in cyberattacks expected in the coming months. He cited long‑tolerated vulnerabilities now being discovered and exploited at a scale previously unimaginable, stressing the need for stronger defenses. The NCSC will publish its annual report with recommendations, urging organizations to adopt proactive security measures and update legacy systems.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/uk-ncsc-predicts-rise-cyberattacks-coming-months",
    "publishedAt": "2026-11-03T00:01:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "uk-warns-of-rising-cyberattack-scale",
      "article-1e42a351",
      "1e42a351",
      "uk-warns-of-rising-cyberattack-scale-2864e4"
    ]
  },
  {
    "slug": "red-hat-releases-critical-kernel-update-for-rhel-9-70b22e22",
    "title": "Red Hat Releases Critical Kernel Update for RHEL 9.4",
    "summary": "Red Hat released a kernel update for RHEL 9.4 Update Services for SAP Solutions, fixing a critical flaw that could enable privilege escalation or denial of service. The advisory lists multiple CVEs with CVSS base scores, but no single CVE is named in the text. Apply the new kernel package via standard RHEL repositories immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94109",
    "publishedAt": "2026-11-02T23:24:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-kernel-update-for-rhel-9",
      "article-70b22e22",
      "70b22e22",
      "red-hat-releases-critical-kernel-update-for-rhel-9-37d8c5",
      "red-hat-releases-critical-kernel-update-for-rhel-9-4"
    ]
  },
  {
    "slug": "unit-42-highlights-cyberespionage-extortion-ai-ado-599c6f89",
    "title": "Unit 42 Highlights Cyberespionage, Extortion, AI Adoption",
    "summary": "Unit 42 released a threat intelligence brief covering recent cyberespionage campaigns, financial extortion incidents, and AI‑driven offensive tactics. The report notes adversaries use AI to automate phishing, accelerate malware development, and enhance data exfiltration while extortion actors target financial institutions. Security teams should monitor AI‑driven threat indicators, update detection rules, and review supply‑chain controls to mitigate evolving risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Unit 42",
    "sourceUrl": "https://unit42.paloaltonetworks.com/u42-threat-intelligence-highlights-oct-2026/",
    "publishedAt": "2026-11-02T23:00:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "unit-42-highlights-cyberespionage-extortion-ai-ado",
      "article-599c6f89",
      "599c6f89",
      "unit-42-highlights-cyberespionage-extortion-ai-ado-ceb4eb",
      "unit-42-highlights-cyberespionage-extortion-ai-adoption"
    ]
  },
  {
    "slug": "red-hat-updates-camel-4-18-for-quarkus-security-768da2e4",
    "title": "Red Hat Updates Camel 4.18 for Quarkus Security",
    "summary": "Red Hat issued an important security update for its build of Apache Camel 4.18 bundled with Quarkus 3.33.4.SP2, addressing security issues. The patch resolves flaws that could enable remote code execution via malformed Camel routes, though no public exploit or CVE is currently documented. Customers should apply the update immediately to maintain product security; no additional mitigations are required.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93980",
    "publishedAt": "2026-11-02T22:41:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-camel-4-18-for-quarkus-security",
      "article-768da2e4",
      "768da2e4",
      "red-hat-updates-camel-4-18-for-quarkus-security-37d91b"
    ]
  },
  {
    "slug": "binance-breach-shows-single-laptop-compromise-caus-614a7acd",
    "title": "Binance Breach Shows Single Laptop Compromise Causes Billions Lost",
    "summary": "Attackers exploited a single compromised laptop within Binance's network to exfiltrate over one billion dollars, demonstrating how weak system separation and inadequate access controls can cascade into systemic financial loss. The incident highlights the critical need for robust network segmentation and least-privilege enforcement across enterprise infrastructure.",
    "category": "Breach",
    "severity": "CRITICAL",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/binance-hack-test-attack-paths",
    "publishedAt": "2026-11-02T22:27:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-breach-shows-single-laptop-compromise-caus",
      "article-614a7acd",
      "614a7acd",
      "binance-breach-shows-single-laptop-compromise-caus-16e9fc",
      "binance-breach-shows-single-laptop-compromise-causes-billion"
    ]
  },
  {
    "slug": "red-hat-ansible-automation-platform-2-5-security-u-b8a34741",
    "title": "Red Hat Ansible Automation Platform 2.5 Security Update",
    "summary": "Red Hat released an important security and bug fix update for Ansible Automation Platform 2.5. The update addresses multiple vulnerabilities with a security impact rated as Important, and each CVE’s CVSS base score is provided in the references. Administrators should apply the update promptly to mitigate the identified issues and consult the CVE links for detailed patch information.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94100",
    "publishedAt": "2026-11-02T22:20:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-ansible-automation-platform-2-5-security-u",
      "article-b8a34741",
      "b8a34741",
      "red-hat-ansible-automation-platform-2-5-security-u-37d8c6",
      "red-hat-ansible-automation-platform-2-5-security-update"
    ]
  },
  {
    "slug": "red-hat-ansible-2-6-security-update-released-e35b03c3",
    "title": "Red Hat Ansible 2.6 Security Update Released",
    "summary": "Red Hat released a security update for Ansible Automation Platform 2.6 to fix multiple vulnerabilities in its automation modules. The patch fixes issues rated Important on the CVSS scale, as listed in the CVE references, stopping privilege escalation. Red Hat urges users to apply the update immediately and confirm the new version via the product security portal.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94101",
    "publishedAt": "2026-11-02T22:18:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-ansible-2-6-security-update-released",
      "article-e35b03c3",
      "e35b03c3",
      "red-hat-ansible-2-6-security-update-released-37d8c6"
    ]
  },
  {
    "slug": "aws-mcp-server-path-traversal-vulnerability-cve-20-ff621880",
    "title": "AWS MCP Server Path Traversal Vulnerability CVE-2026-116635",
    "summary": "CVE-2026-116635 is an unauthenticated path traversal flaw in the deployment status component of the AWS Serverless MCP Server that allows read or write access to JSON files outside the intended directory when write permissions are enabled. This vulnerability enables potential information disclosure and file manipulation by actors who can influence the MCP agent.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-164-aws/",
    "publishedAt": "2026-11-02T21:43:24.000Z",
    "cves": [
      "CVE-2026-116635"
    ],
    "additionalSources": [],
    "aliases": [
      "aws-mcp-server-path-traversal-vulnerability-cve-20",
      "article-ff621880",
      "ff621880",
      "aws-mcp-server-path-traversal-vulnerability-cve-20-79d6c7",
      "aws-mcp-server-path-traversal-vulnerability-cve-2026-116635"
    ]
  },
  {
    "slug": "brazilian-exchange-reports-46m-crypto-theft-59c13561",
    "title": "Brazilian Exchange Reports $46M Crypto Theft",
    "summary": "Mercado Bitcoin confirmed a cyberattack that enabled attackers to transfer more than $46 million in cryptocurrency from user wallets. The breach exploited a vulnerability in the exchange’s wallet management system, allowing unauthorized access to private keys and transaction signing. Mercado Bitcoin has issued a patch, updated key‑management protocols, and advised users to change passwords and enable two‑factor authentication.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/mercado-bitcoin-brazil-cryptocurrency-heist",
    "publishedAt": "2026-11-02T21:42:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "brazilian-exchange-reports-46m-crypto-theft",
      "article-59c13561",
      "59c13561",
      "brazilian-exchange-reports-46m-crypto-theft-524744"
    ]
  },
  {
    "slug": "chinese-hackers-deploy-artex-ai-against-200-organi-fb186eba",
    "title": "Chinese Hackers Deploy ARTEX AI Against 200 Organizations",
    "summary": "Chinese hackers used the open‑source ARTEX AI framework to launch automated attacks on more than 200 organizations across 14 countries. ARTEX orchestrates multi‑agent reconnaissance and credential harvesting, enabling rapid, low‑interaction exploitation without a specific CVE. Security teams should monitor for ARTEX activity, block known command‑and‑control endpoints, and enforce strict credential hygiene.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/chinese-hackers-use-artex-ai-in-automated-attacks-against-200-orgs/",
    "publishedAt": "2026-11-02T21:40:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chinese-hackers-deploy-artex-ai-against-200-organi",
      "article-fb186eba",
      "fb186eba",
      "chinese-hackers-deploy-artex-ai-against-200-organi-7271ee",
      "chinese-hackers-deploy-artex-ai-against-200-organizations"
    ]
  },
  {
    "slug": "microsoft-security-blog-analyzes-real-world-exploi-748027d4",
    "title": "Microsoft Security Blog Analyzes Real‑World Exploitation Patterns",
    "summary": "Microsoft Security blog analyzes real‑world exploitation, showing that a small subset of high‑impact CVEs accounts for most attacks. The analysis quantifies exploitation likelihood, exposure, and blast radius, guiding defenders to prioritize patches for vulnerabilities with the greatest operational risk. The post recommends data‑driven prioritization frameworks and continuous monitoring to reduce exposure to actively exploited flaws.",
    "category": "General",
    "severity": "LOW",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/11/02/exploited-vulnerabilities-common-data-driven-analysis-real-world-attacks/",
    "publishedAt": "2026-11-02T20:20:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-security-blog-analyzes-real-world-exploi",
      "article-748027d4",
      "748027d4",
      "microsoft-security-blog-analyzes-real-world-exploi-791a73",
      "microsoft-security-blog-analyzes-real-world-exploitation-pat"
    ]
  },
  {
    "slug": "red-hat-satellite-client-update-addresses-multiple-10764dda",
    "title": "Red Hat Satellite Client Update Addresses Multiple Security Issues",
    "summary": "Red Hat Satellite Client packages have been updated to fix several security vulnerabilities rated as Important, addressing bugs in the Satellite 6 client component. The Common Vulnerability Scoring System base score is available for each individual vulnerability through linked CVE references. Administrators should apply these updates promptly to maintain security posture across managed Satellite environments.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94063",
    "publishedAt": "2026-11-02T20:07:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-satellite-client-update-addresses-multiple",
      "article-10764dda",
      "10764dda",
      "red-hat-satellite-client-update-addresses-multiple-37d8c9",
      "red-hat-satellite-client-update-addresses-multiple-security-"
    ]
  },
  {
    "slug": "byod-gang-claims-michigan-state-cyber-incident-b5f8dee4",
    "title": "BYOD Gang Claims Michigan State Cyber Incident",
    "summary": "The BYOD ransomware gang claimed responsibility for a cyber incident that triggered campus‑wide security measures at Michigan State University. The gang, known for a recent hospital attack, claimed the incident via a post aligning with the MSU timeline. Security teams should verify the claim, isolate affected systems, and apply the gang’s ransomware signatures to mitigate further compromise.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/michigan-state-university-byod-gang-cyber-incident",
    "publishedAt": "2026-11-02T19:54:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "byod-gang-claims-michigan-state-cyber-incident",
      "article-b5f8dee4",
      "b5f8dee4",
      "byod-gang-claims-michigan-state-cyber-incident-2318f7"
    ]
  },
  {
    "slug": "cve-2026-120497-stored-cross-site-scripting-in-the-beeb1c33",
    "title": "CVE-2026-120497 - Stored cross-site scripting in the HTML report generator of aidlc-traceability in AWS AI-DLC Workflows",
    "summary": "We identified CVE-2026-120497, where stored cross-site scripting (XSS) in the HTML report generator in the aidlc-traceability CLI could allow an actor who can modify a project's AI-DLC artifact files to execute arbitrary script in the browser of a user who opens a generated HTML traceability report via crafted artifact titles or descriptions.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-163-aws/",
    "publishedAt": "2026-11-02T19:19:50.000Z",
    "cves": [
      "CVE-2026-120497"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-120497-stored-cross-site-scripting-in-the",
      "article-beeb1c33",
      "beeb1c33",
      "cve-2026-120497-stored-cross-site-scripting-in-the-7b8ba0",
      "cve-2026-120497-stored-cross-site-scripting-in-the-html-repo"
    ]
  },
  {
    "slug": "red-hat-openstack-platform-13-security-update-reso-3d071354",
    "title": "Red Hat OpenStack Platform 13 Security Update Resolves Critical Issues",
    "summary": "Updated Red Hat OpenStack Platform 13.0 packages resolve multiple security vulnerabilities rated as Important, addressing issues in the OpenStack platform for RHEL 7 environments. Each vulnerability carries a CVSS base score accessible via linked CVE references in the advisory. System administrators should apply these patches immediately to mitigate the disclosed security weaknesses.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94039",
    "publishedAt": "2026-11-02T19:17:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-openstack-platform-13-security-update-reso",
      "article-3d071354",
      "3d071354",
      "red-hat-openstack-platform-13-security-update-reso-37d8c9",
      "red-hat-openstack-platform-13-security-update-resolves-criti"
    ]
  },
  {
    "slug": "sageworks-outage-after-suspected-cyberattack-c2c17ebc",
    "title": "Sageworks Outage After Suspected Cyberattack",
    "summary": "Abrigo’s Sageworks risk‑management platform experienced an outage after detecting irregular activity, prompting a temporary shutdown of borrower‑facing services. The incident was attributed to a suspected cyberattack, though no data exfiltration or credential compromise has been confirmed. Abrigo has restored core functionality but is maintaining heightened monitoring and will evaluate the root cause before fully reopening borrower interfaces.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/fintech-platform-sageworks-taken-offline-after-suspected-cyberattack/",
    "publishedAt": "2026-11-02T19:00:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sageworks-outage-after-suspected-cyberattack",
      "article-c2c17ebc",
      "c2c17ebc",
      "sageworks-outage-after-suspected-cyberattack-fc4cb4"
    ]
  },
  {
    "slug": "bind9-16-update-addresses-security-flaws-550f8eb2",
    "title": "Bind9.16 Update Addresses Security Flaws",
    "summary": "Red Hat released a security update for bind9.16 on RHEL 8, addressing multiple DNS server vulnerabilities. The update mitigates flaws that could allow attackers to execute code or cause denial of service, as indicated by CVSS scores linked in the advisory. Red Hat recommends applying the patch via standard RHEL update channels; no work‑arounds are provided.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94011",
    "publishedAt": "2026-11-02T18:59:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bind9-16-update-addresses-security-flaws",
      "article-550f8eb2",
      "550f8eb2",
      "bind9-16-update-addresses-security-flaws-37d8c9"
    ]
  },
  {
    "slug": "rhsa-2026-93925-important-bind-security-bug-fix-an-b53a47be",
    "title": "RHSA-2026:93925: Important: bind security, bug fix, and enhancement update",
    "summary": "An update for bind is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93925",
    "publishedAt": "2026-11-02T18:25:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93925-important-bind-security-bug-fix-an",
      "article-b53a47be",
      "b53a47be",
      "rhsa-2026-93925-important-bind-security-bug-fix-an-37d91c",
      "rhsa-2026-93925-important-bind-security-bug-fix-and-enhancem"
    ]
  },
  {
    "slug": "red-hat-issues-important-ghostscript-update-for-rh-f2e94468",
    "title": "Red Hat Issues Important Ghostscript Update for RHEL8",
    "summary": "Red Hat released an Important security update for Ghostscript on Red Hat Enterprise Linux 8, addressing a critical flaw. The advisory references multiple CVEs with CVSS base scores, indicating a high‑severity vulnerability that could allow remote code execution if exploited. Users should apply the RHSA‑2026:93978 update immediately or upgrade to the latest Ghostscript package to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93978",
    "publishedAt": "2026-11-02T18:18:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-ghostscript-update-for-rh",
      "article-f2e94468",
      "f2e94468",
      "red-hat-issues-important-ghostscript-update-for-rh-37d91b",
      "red-hat-issues-important-ghostscript-update-for-rhel8"
    ]
  },
  {
    "slug": "google-dismantles-1-3-million-device-android-tv-bo-548e3a98",
    "title": "Google Dismantles 1.3‑Million‑Device Android TV Botnet",
    "summary": "Google and partners dismantled a 1.3‑million‑device Android TV botnet that targeted Videostrong XCPE firmware. The flaw allowed remote code execution and enabled malicious firmware to serve as a command‑and‑control hub for data exfiltration. Google issued a device‑wide removal directive, banned the vendor, and urged security teams to update firmware and monitor for residual signatures.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/google-disrupts-million-device-xcpe-android-malware-botnet-bans-tv-box-maker/",
    "publishedAt": "2026-11-02T18:16:34.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "CyberNews AI",
        "sourceUrl": "https://cybernewsai.com/blog/google-disrupts-1-3-million-device-android-botnet-says"
      },
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/google-dismantles-xcpe-botnet/"
      }
    ],
    "aliases": [
      "google-dismantles-1-3-million-device-android-tv-bo",
      "article-548e3a98",
      "548e3a98",
      "google-dismantles-1-3-million-device-android-tv-bo-668192",
      "google-dismantles-1-3-million-device-android-tv-botnet"
    ]
  },
  {
    "slug": "red-hat-releases-quarkus-3-33-4-sp2-security-updat-401bf2ff",
    "title": "Red Hat releases Quarkus 3.33.4.SP2 security update",
    "summary": "Red Hat released a security update for its Quarkus 3.33.4.SP2 build, addressing a flaw that could impact application integrity. The flaw, rated as Important, is documented with a CVSS base score, though the specific CVE identifier is not disclosed in the advisory. Red Hat recommends applying the Quarkus 3.33.4.SP2 update immediately to eliminate the vulnerability; no workarounds are listed.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93902",
    "publishedAt": "2026-11-02T18:07:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-quarkus-3-33-4-sp2-security-updat",
      "article-401bf2ff",
      "401bf2ff",
      "red-hat-releases-quarkus-3-33-4-sp2-security-updat-37d91c",
      "red-hat-releases-quarkus-3-33-4-sp2-security-update"
    ]
  },
  {
    "slug": "quarkus-3-27-6-sp2-update-addresses-security-issue-0488b5e3",
    "title": "Quarkus 3.27.6.SP2 Update Addresses Security Issues",
    "summary": "Red Hat released a security update for its Quarkus 3.27.6.SP2 build on RHEL, targeting multiple framework vulnerabilities. The patch addresses flaws that could enable remote code execution or privilege escalation, with CVSS scores linked in the advisory. Red Hat advises applying the update through standard RHEL channels; no work‑arounds are documented.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93908",
    "publishedAt": "2026-11-02T18:07:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "quarkus-3-27-6-sp2-update-addresses-security-issue",
      "article-0488b5e3",
      "0488b5e3",
      "quarkus-3-27-6-sp2-update-addresses-security-issue-37d91c",
      "quarkus-3-27-6-sp2-update-addresses-security-issues"
    ]
  },
  {
    "slug": "gimp-update-fixes-security-vulnerabilities-e2e62731",
    "title": "GIMP Update Fixes Security Vulnerabilities",
    "summary": "Red Hat released a security update for GIMP on RHEL 9.8 EUS, addressing multiple image‑editing software vulnerabilities. The patch mitigates flaws that could allow remote attackers to execute code or cause denial of service, as indicated by CVSS scores linked in the advisory. Red Hat recommends applying the update via standard RHEL update channels; no work‑arounds are provided.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93975",
    "publishedAt": "2026-11-02T17:58:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gimp-update-fixes-security-vulnerabilities",
      "article-e2e62731",
      "e2e62731",
      "gimp-update-fixes-security-vulnerabilities-37d91b"
    ]
  },
  {
    "slug": "mercado-bitcoin-breach-involves-40m-suspicious-tra-6c73a023",
    "title": "Mercado Bitcoin Breach Involves $40M Suspicious Transfers",
    "summary": "Brazilian cryptocurrency exchange Mercado Bitcoin detected a security incident that halted deposits and withdrawals on November 2, 2026. Security firm Hypernative identified more than $40 million in suspicious transfers across at least ten blockchains, indicating potential credential theft or compromised wallet access.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/mercado-bitcoin-suffers-cyberattack/",
    "publishedAt": "2026-11-02T17:54:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mercado-bitcoin-breach-involves-40m-suspicious-tra",
      "article-6c73a023",
      "6c73a023",
      "mercado-bitcoin-breach-involves-40m-suspicious-tra-3be776",
      "mercado-bitcoin-breach-involves-40m-suspicious-transfers"
    ]
  },
  {
    "slug": "amazon-vew-exposes-template-injection-vulnerabilit-0116f358",
    "title": "Amazon VEW Exposes Template Injection Vulnerability CVE-2026-119085",
    "summary": "Amazon Virtual Engineering Workbench (VEW) suffers a template injection flaw (CVE‑2026‑119085) in its publishing component. The flaw allows an authenticated third party to inject malicious template code, enabling arbitrary code execution with the publishing Lambda’s IAM role permissions. Amazon has released a patch covering all affected commits before c146486; users should update VEW or apply the workaround to mitigate exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-162-aws/",
    "publishedAt": "2026-11-02T17:41:34.000Z",
    "cves": [
      "CVE-2026-119085"
    ],
    "additionalSources": [],
    "aliases": [
      "amazon-vew-exposes-template-injection-vulnerabilit",
      "article-0116f358",
      "0116f358",
      "amazon-vew-exposes-template-injection-vulnerabilit-7d4079",
      "amazon-vew-exposes-template-injection-vulnerability-cve-2026"
    ]
  },
  {
    "slug": "synology-ai-driven-attack-detection-and-mitigation-4281090b",
    "title": "Synology AI-Driven Attack Detection and Mitigation",
    "summary": "Synology issued a critical alert for AI-driven attacks targeting its NAS devices, prompting immediate detection measures. The advisory recommends reviewing root-cause telemetry, applying detection rules, and deploying the latest security patch to mitigate exploitation of the underlying vulnerability. Security teams should implement the provided rules and update firmware to close the attack surface.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/synology-warns-of-c3rb3r-ransomware-attacks-targeting-n",
    "publishedAt": "2026-11-02T17:25:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "synology-ai-driven-attack-detection-and-mitigation",
      "article-4281090b",
      "4281090b",
      "synology-ai-driven-attack-detection-and-mitigation-718b17"
    ]
  },
  {
    "slug": "red-hat-kernel-update-for-rhel-9-8-7e223b0b",
    "title": "Red Hat Kernel Update for RHEL 9.8",
    "summary": "A kernel security update addresses vulnerabilities in Red Hat Enterprise Linux 9.8 Extended Update Support, affecting the Linux kernel component. The update mitigates moderate‑severity flaws, each identified by CVE references, and the CVSS base score indicates a moderate impact. Red Hat recommends applying the patch immediately to prevent exploitation of the kernel vulnerabilities.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93930",
    "publishedAt": "2026-11-02T17:18:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-for-rhel-9-8",
      "article-7e223b0b",
      "7e223b0b",
      "red-hat-kernel-update-for-rhel-9-8-37d91c"
    ]
  },
  {
    "slug": "polymarket-to-refund-3-9m-after-compromise-2962b7ad",
    "title": "Polymarket to Refund $3.9M After Compromise",
    "summary": "Polymarket announced it will reimburse users $3.9 million following a site compromise that disrupted services and caused financial losses. The incident involved unauthorized access to the platform, though no evidence of data exfiltration or credential theft has been disclosed. Polymarket is conducting a post‑mortem, tightening security controls, and urging users to monitor accounts for suspicious activity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/polymarket-returning-funds-to-customers-after-site-compromise",
    "publishedAt": "2026-11-02T17:05:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "polymarket-to-refund-3-9m-after-compromise",
      "article-2962b7ad",
      "2962b7ad",
      "polymarket-to-refund-3-9m-after-compromise-ee0183"
    ]
  },
  {
    "slug": "threat-hunting-explained-purpose-and-process-435b2e14",
    "title": "Threat Hunting Explained: Purpose and Process",
    "summary": "Threat hunting is a proactive security practice that identifies hidden threats within an organization. Huntress explains the process, emphasizing human‑led detection to uncover anomalies automation may miss, and outlines key methodologies such as hypothesis‑driven investigation and data correlation. Security teams should adopt structured threat‑hunting frameworks and integrate continuous monitoring to improve detection coverage.",
    "category": "General",
    "severity": "LOW",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/what-is-threat-hunting",
    "publishedAt": "2026-11-02T17:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "threat-hunting-explained-purpose-and-process",
      "article-435b2e14",
      "435b2e14",
      "threat-hunting-explained-purpose-and-process-781488"
    ]
  },
  {
    "slug": "weekly-recap-cves-ddos-phishing-spyware-f77a2525",
    "title": "Weekly Recap: CVEs, DDoS, Phishing, Spyware",
    "summary": "The recap covers critical CVEs, a Linux DDoS botnet, device‑code phishing, and Android spyware incidents. Attackers used low‑effort vectors such as fake support calls, trusted extensions, shared links, and devices without passwords to achieve serious damage. Defenders should patch CVEs promptly, monitor botnet traffic, and enforce device authentication to reduce exposure.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/weekly-recap-critical-cves-linux-ddos.html",
    "publishedAt": "2026-11-02T16:57:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "weekly-recap-cves-ddos-phishing-spyware",
      "article-f77a2525",
      "f77a2525",
      "weekly-recap-cves-ddos-phishing-spyware-26ea56"
    ]
  },
  {
    "slug": "cve-2026-119301-improper-neutralization-of-quoting-e5e16cbd",
    "title": "CVE-2026-119301 - Improper neutralization of quoting syntax in Apache Iceberg SQL identifier generation in AWS SDK for pandas",
    "summary": "Bulletin ID: 2026-161-AWS Publication Date: 11/02/2026 08:30 AM PST Description: We are aware of CVE-2026-119301 in the Apache Iceberg write component, where improper neutralization of quoting syntax in SQL identifier construction could allow an authenticated user with permission to modify AWS Glue Data Catalog metadata to read any table that a separate, more privileged principal can access and write to the table that principal is updating via a crafted column name.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-161-aws/",
    "publishedAt": "2026-11-02T16:40:57.000Z",
    "cves": [
      "CVE-2026-119301"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-119301-improper-neutralization-of-quoting",
      "article-e5e16cbd",
      "e5e16cbd",
      "cve-2026-119301-improper-neutralization-of-quoting-7ef551",
      "cve-2026-119301-improper-neutralization-of-quoting-syntax-in"
    ]
  },
  {
    "slug": "rosstat-breach-claimed-by-belarusian-and-ukrainian-68dcbaff",
    "title": "Rosstat Breach Claimed by Belarusian and Ukrainian Hackers",
    "summary": "Russia’s federal statistics agency Rosstat confirmed a cyberattack claimed by a Belarusian‑Ukrainian hacker alliance. The attackers reportedly exfiltrated significant large volumes of sensitive government data, potentially compromising national statistical records. Rosstat has not released details of the breach scope, but security teams should assess data integrity and implement enhanced monitoring.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/hackers-ukraine-belarus-russia",
    "publishedAt": "2026-11-02T16:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rosstat-breach-claimed-by-belarusian-and-ukrainian",
      "article-68dcbaff",
      "68dcbaff",
      "rosstat-breach-claimed-by-belarusian-and-ukrainian-2ddae6",
      "rosstat-breach-claimed-by-belarusian-and-ukrainian-hackers"
    ]
  },
  {
    "slug": "cisa-adds-two-ivanti-connect-secure-vulnerabilitie-1fe9f424",
    "title": "CISA Adds Two Ivanti Connect Secure Vulnerabilities",
    "summary": "CISA listed two Ivanti Connect Secure flaws as known exploited vulnerabilities, signaling active attacks against the VPN product. CVE-2026-111357 allows local authenticated privilege escalation through a missing authentication check, while CVE-2026-118527 permits remote authenticated file upload via predictable identifier generation. Ivanti has released patches; federal agencies should apply them promptly and verify configuration changes to close the exploitation vector.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/02/cisa-to-federal-agencies-remediate-exploited-ivanti-connect-secure-vulnerabilities-cve-2026-111357-cve-2026-118527/",
    "publishedAt": "2026-11-02T15:58:08.000Z",
    "cves": [
      "CVE-2026-111357",
      "CVE-2026-118527"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-two-ivanti-connect-secure-vulnerabilitie",
      "article-1fe9f424",
      "1fe9f424",
      "cisa-adds-two-ivanti-connect-secure-vulnerabilitie-cd397f",
      "cisa-adds-two-ivanti-connect-secure-vulnerabilities"
    ]
  },
  {
    "slug": "binance-breach-6-3b-digital-asset-theft-bf27e3db",
    "title": "Binance Breach: $6.3B Digital Asset Theft",
    "summary": "Binance suffered a cyberattack that stole roughly $6.3 billion in digital assets by compromising a DevOps engineer’s laptop and exploiting internal wallet infrastructure. The breach exposed privileged credentials and enabled attackers to move laterally within the exchange’s environment, bypassing existing security controls. Binance has applied patches, revoked compromised accounts, and is conducting a forensic investigation to prevent future incidents.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/2nd-november-threat-intelligence-report/",
    "publishedAt": "2026-11-02T15:57:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-breach-6-3b-digital-asset-theft",
      "article-bf27e3db",
      "bf27e3db",
      "binance-breach-6-3b-digital-asset-theft-657cc6"
    ]
  },
  {
    "slug": "guardz-integrates-palo-alto-prisma-browser-for-smb-b62903fa",
    "title": "Guardz integrates Palo Alto Prisma Browser for SMBs",
    "summary": "Guardz announced integration of Palo Alto Networks Prisma Browser for Business, extending browser protection to small‑business managed service providers. The partnership combines Prisma Browser’s threat detection with Guardz’s email, identity, and endpoint security, enabling unified incident response. Deployers should integrate the new solution via Guardz’s platform and verify policy alignment to maintain consistent security posture.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/guardz-brings-palo-alto-networks-prisma-browser-protection-to-small-businesses/",
    "publishedAt": "2026-11-02T15:53:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "guardz-integrates-palo-alto-prisma-browser-for-smb",
      "article-b62903fa",
      "b62903fa",
      "guardz-integrates-palo-alto-prisma-browser-for-smb-6216a2",
      "guardz-integrates-palo-alto-prisma-browser-for-smbs"
    ]
  },
  {
    "slug": "google-dismantles-1-3m-android-tv-botnet-24d3cd71",
    "title": "Google Dismantles 1.3M Android TV Botnet",
    "summary": "Google dismantled a 1.3‑million‑device Android TV botnet that shipped with malicious firmware from Videostrong Technology. The embedded backdoor enabled remote command execution, allowing attackers to monetize traffic for ad‑fraud and exfiltrate data. Google’s Threat Intelligence Group disabled the command‑and‑control servers, banned Videostrong, and urged vendors to remove the compromised firmware.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/02/xcpe-botnet-android-backdoor/",
    "publishedAt": "2026-11-02T15:50:46.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Krebs on Security",
        "sourceUrl": "https://krebsonsecurity.com/2026/11/tech-firms-dismantle-botnet-that-turned-1-3m-tv-boxes-into-proxies/"
      }
    ],
    "aliases": [
      "google-dismantles-1-3m-android-tv-botnet",
      "article-24d3cd71",
      "24d3cd71",
      "google-dismantles-1-3m-android-tv-botnet-4d4016"
    ]
  },
  {
    "slug": "google-disrupts-1-3-million-android-botnet-d67c9b36",
    "title": "Google disrupts 1.3 million Android botnet",
    "summary": "Google dismantled the command‑and‑control servers of a 1.3 million‑device Android botnet that used a backdoor in TV set‑top box firmware. Videostrong Technology embedded the backdoor, enabling criminals to use the devices for ad‑fraud and traffic tunneling, exposing users to unauthorized data flows. Google’s Threat Intelligence Group disabled the infrastructure and banned Videostrong, urging vendors to remove the compromised firmware.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/google-disrupts-13-million-device.html",
    "publishedAt": "2026-11-02T15:50:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-disrupts-1-3-million-android-botnet",
      "article-d67c9b36",
      "d67c9b36",
      "google-disrupts-1-3-million-android-botnet-481d68"
    ]
  },
  {
    "slug": "red-hat-qt5-qtbase-security-update-released-a6698434",
    "title": "Red Hat Qt5 Qtbase Security Update Released",
    "summary": "Red Hat has released an update for qt5-qtbase addressing multiple vulnerabilities rated Important severity under RHSA-2026:93924. Each vulnerability carries a publicly available CVSS base score accessible through CVE references in the advisory. Security teams should apply the update promptly to mitigate disclosed weaknesses in the Qt5 cross-platform application framework.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93924",
    "publishedAt": "2026-11-02T15:41:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-qt5-qtbase-security-update-released",
      "article-a6698434",
      "a6698434",
      "red-hat-qt5-qtbase-security-update-released-37d91c"
    ]
  },
  {
    "slug": "red-hat-perl-5-32-security-update-released-fe942fb9",
    "title": "Red Hat Perl 5.32 Security Update Released",
    "summary": "Red Hat has released an update for the perl:5.32 module addressing multiple vulnerabilities rated Moderate severity under RHSA-2026:85917. Each vulnerability carries a publicly available CVSS base score accessible through CVE references in the advisory. Security teams should apply the update promptly to mitigate disclosed weaknesses in the Perl scripting language runtime.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:85917",
    "publishedAt": "2026-11-02T15:37:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-perl-5-32-security-update-released",
      "article-fe942fb9",
      "fe942fb9",
      "red-hat-perl-5-32-security-update-released-37e64a"
    ]
  },
  {
    "slug": "red-hat-issues-security-update-for-python-urllib3-ab89bc86",
    "title": "Red Hat Issues Security Update for python‑urllib3",
    "summary": "Red Hat released a security update for python‑urllib3 on RHEL 10, fixing multiple library vulnerabilities. The update is rated Important, with CVSS base scores linked to CVE entries, though no exploitation has been observed. Apply the patch immediately and review the CVSS scores for each CVE to gauge residual risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:85930",
    "publishedAt": "2026-11-02T15:37:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-security-update-for-python-urllib3",
      "article-ab89bc86",
      "ab89bc86",
      "red-hat-issues-security-update-for-python-urllib3-37e64a"
    ]
  },
  {
    "slug": "red-hat-kernel-update-for-rhel-10-2-978cf2ac",
    "title": "Red Hat Kernel Update for RHEL 10.2",
    "summary": "A kernel security update addresses vulnerabilities in Red Hat Enterprise Linux 10.2 Extended Update Support, targeting the Linux kernel. The patch covers moderate‑severity flaws linked to CVE entries, with CVSS scores reflecting a moderate risk level. Red Hat advises installing the update promptly for mitigating potential critical kernel exploitation today.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93911",
    "publishedAt": "2026-11-02T15:37:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-for-rhel-10-2",
      "article-978cf2ac",
      "978cf2ac",
      "red-hat-kernel-update-for-rhel-10-2-37d91c"
    ]
  },
  {
    "slug": "btcpay-server-hot-wallet-theft-exploited-by-vulner-ae0d7285",
    "title": "BTCPay Server Hot Wallet Theft Exploited by Vulnerability in Versions 2.4.1 and Earlier",
    "summary": "BTCPay Server 2.4.1 and earlier users suffered hot wallet theft as attackers exploited a flaw in the open‑source payment platform. The vulnerability stems from insufficient access controls that allow unauthorized transaction signing, draining Bitcoin and Litecoin from hot wallets. Users must upgrade to the latest BTCPay Server release, audit wallet permissions, and enforce strict access policies to mitigate risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/btcpay-server-warns-of-hot-wallet-thefts-targeting-outdated-instances/",
    "publishedAt": "2026-11-02T15:03:07.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-btcpay-server-flaw-to.html"
      }
    ],
    "aliases": [
      "btcpay-server-hot-wallet-theft-exploited-by-vulner",
      "article-ae0d7285",
      "ae0d7285",
      "btcpay-server-hot-wallet-theft-exploited-by-vulner-177321",
      "btcpay-server-hot-wallet-theft-exploited-by-vulnerability-in"
    ]
  },
  {
    "slug": "carriers-retain-call-logs-for-years-raising-privac-dee89ba1",
    "title": "Carriers Retain Call Logs for Years, Raising Privacy Risks",
    "summary": "Carriers can retain call and text metadata for years, exposing customers’ relationships, locations, and routines if breached. Cape’s service reduces exposure by automatically deleting call records, limiting the metadata carriers can store. Organizations should review carrier retention policies and adopt comprehensive solutions that enforce strictly timely deletion to safeguard privacy.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/your-mobile-carrier-stores-your-call-logs-for-years/",
    "publishedAt": "2026-11-02T15:01:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "carriers-retain-call-logs-for-years-raising-privac",
      "article-dee89ba1",
      "dee89ba1",
      "carriers-retain-call-logs-for-years-raising-privac-627a52",
      "carriers-retain-call-logs-for-years-raising-privacy-risks"
    ]
  },
  {
    "slug": "37-cybersecurity-deals-announced-in-october-ada8c04c",
    "title": "37 Cybersecurity Deals Announced in October",
    "summary": "In October 2026, cybersecurity firms Absolute Security, Aikido, Anthropic, Cohere, Hex‑Rays, and Proofpoint announced 37 mergers and acquisitions, signaling accelerated consolidation in the sector. The deals span AI, threat‑intelligence, reverse‑engineering, and email‑security domains, potentially reshaping vendor portfolios and customer integration strategies. Security teams should assess integration risks, update supply‑chain controls, and monitor for overlapping capabilities post‑merger.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/cybersecurity-ma-roundup-37-deals-announced-in-october-2026/",
    "publishedAt": "2026-11-02T15:01:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "37-cybersecurity-deals-announced-in-october",
      "article-ada8c04c",
      "ada8c04c",
      "37-cybersecurity-deals-announced-in-october-383e0a"
    ]
  },
  {
    "slug": "digital-defense-report-overlooks-microsoft-bug-thr-e30f533a",
    "title": "Digital Defense Report Overlooks Microsoft Bug Threats",
    "summary": "The Digital Defense Report labels government agencies as primary AI attack targets while omitting the exploitation of Microsoft software bugs against them. This oversight obscures the threat vector, as attackers leverage known Microsoft vulnerabilities to gain privileged access to agency networks. Security teams should prioritize patching Microsoft products, monitor for exploitation signatures, and incorporate threat models into AI risk assessments.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/microsoft-ai-cyber-risk-report-miss",
    "publishedAt": "2026-11-02T15:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "digital-defense-report-overlooks-microsoft-bug-thr",
      "article-e30f533a",
      "e30f533a",
      "digital-defense-report-overlooks-microsoft-bug-thr-47db31",
      "digital-defense-report-overlooks-microsoft-bug-threats"
    ]
  },
  {
    "slug": "ubuntu-releases-fixes-for-cve-2026-98432-a-kernel-925b2527",
    "title": "Ubuntu Releases Fixes for CVE-2026-98432, a Kernel RCE Vulnerability",
    "summary": "Ubuntu has released kernel patches for CVE-2026-98432, a critical Linux kernel flaw that enables remote attackers to execute commands as root without authentication. The vulnerability stems from improper handling of Mutipath TCP options, potentially causing memory corruption and denial‑of‑service. Users of Ubuntu 22.04 LTS and newer should apply the proposed updates immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33482",
    "publishedAt": "2026-11-02T14:52:05.000Z",
    "cves": [
      "CVE-2026-98432"
    ],
    "additionalSources": [
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/linux-kernel-rce-flaw-ubuntu-fixes/"
      }
    ],
    "aliases": [
      "ubuntu-releases-fixes-for-cve-2026-98432-a-kernel",
      "article-925b2527",
      "925b2527",
      "ubuntu-releases-fixes-for-cve-2026-98432-a-kernel-57dd7e",
      "ubuntu-releases-fixes-for-cve-2026-98432-a-kernel-rce-vulner"
    ]
  },
  {
    "slug": "new-windows-infostealer-uses-ai-to-rank-stolen-dat-fcc119c0",
    "title": "New Windows Infostealer Uses AI to Rank Stolen Data",
    "summary": "Cisco Talos identified a new Windows infostealer, VOLTA-AUTODOXER, that forwards stolen data to an AI model for value ranking. The malware harvests credentials and asset details, then relies on the AI engine to prioritize targets, enabling focused attacks. Security teams should block the malware’s download, monitor outbound AI traffic, and apply updated endpoint protection signatures.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/02/ai-powered-infostealer-volta-victim-profiling/",
    "publishedAt": "2026-11-02T14:47:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "new-windows-infostealer-uses-ai-to-rank-stolen-dat",
      "article-fcc119c0",
      "fcc119c0",
      "new-windows-infostealer-uses-ai-to-rank-stolen-dat-343bed",
      "new-windows-infostealer-uses-ai-to-rank-stolen-data"
    ]
  },
  {
    "slug": "darkblinders-compromises-israeli-target-iraqi-clou-e2fc4f90",
    "title": "DarkBlinders Compromises Israeli Target, Iraqi Cloud",
    "summary": "Between August and October 2026, the DarkBlinders group compromised an Israeli individual and infiltrated a Kurdistan Region of Iraq government cloud environment. The campaign leveraged spear‑phishing, credential theft, and cloud misconfigurations to gain privileged access, exposing sensitive data and operational controls. Affected organizations should enforce MFA, audit cloud permissions, apply timely patches, and conduct forensic investigations to assess data exfiltration.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/darkblinders-compromises-israeli-target.html",
    "publishedAt": "2026-11-02T14:46:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "darkblinders-compromises-israeli-target-iraqi-clou",
      "article-e2fc4f90",
      "e2fc4f90",
      "darkblinders-compromises-israeli-target-iraqi-clou-49dd3f",
      "darkblinders-compromises-israeli-target-iraqi-cloud"
    ]
  },
  {
    "slug": "florida-student-aid-site-breach-exposes-4-9-millio-8dc7783a",
    "title": "Florida Student Aid Site Breach Exposes 4.9 Million SSNs",
    "summary": "The Florida Department of Education’s student aid website was breached, exposing SSNs and other personal data of approximately 4.9 million individuals. An unspecified web application flaw allowed unauthenticated attackers to retrieve sensitive records. The department notified users, issued an advisory, and is collaborating with law enforcement to investigate and remediate.",
    "category": "Breach",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/florida-student-aid-website-hack-puts-data-of-4-9-million-people-at-risk/",
    "publishedAt": "2026-11-02T14:44:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "florida-student-aid-site-breach-exposes-4-9-millio",
      "article-8dc7783a",
      "8dc7783a",
      "florida-student-aid-site-breach-exposes-4-9-millio-6ea42e",
      "florida-student-aid-site-breach-exposes-4-9-million-ssns"
    ]
  },
  {
    "slug": "apple-issues-global-spyware-warning-d2c05b97",
    "title": "Apple Issues Global Spyware Warning",
    "summary": "Apple notified users in 99 countries about the presence of mercenary spyware targeting their devices. The company emphasized the spyware’s extreme cost, sophistication, and worldwide reach, labeling it among the most advanced digital threats. Apple recommends users update to the latest iOS, install security patches, and monitor for unusual device activity.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/apple-warns-users-99-countries-mercenary-spyware",
    "publishedAt": "2026-11-02T14:42:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-issues-global-spyware-warning",
      "article-d2c05b97",
      "d2c05b97",
      "apple-issues-global-spyware-warning-18bc05"
    ]
  },
  {
    "slug": "hackers-hijack-emergency-apps-with-fake-nuclear-al-70d679f8",
    "title": "Hackers Hijack Emergency Apps with Fake Nuclear Alerts",
    "summary": "Russian and Ukrainian hacking groups compromised popular air raid alert systems, injecting false nuclear attack warnings into the apps. The attacks exploited vulnerabilities in the apps’ authentication and update mechanisms, enabling attackers to push malicious payloads without user interaction. Security teams should harden authentication, verify update sources, and monitor for anomalous notifications to mitigate the sabotage.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/ukraine-hackers-russia-alert-system",
    "publishedAt": "2026-11-02T14:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-hijack-emergency-apps-with-fake-nuclear-al",
      "article-70d679f8",
      "70d679f8",
      "hackers-hijack-emergency-apps-with-fake-nuclear-al-94cca2",
      "hackers-hijack-emergency-apps-with-fake-nuclear-alerts"
    ]
  },
  {
    "slug": "rhsa-2026-92363-important-firefox-security-update-1991f863",
    "title": "RHSA-2026:92363: Important: firefox security update",
    "summary": "An update for firefox is now available for Red Hat Enterprise Linux 7 Extended Lifecycle Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:92363",
    "publishedAt": "2026-11-02T14:28:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-92363-important-firefox-security-update",
      "article-1991f863",
      "1991f863",
      "rhsa-2026-92363-important-firefox-security-update-37d9a6"
    ]
  },
  {
    "slug": "hackers-alter-supermarket-refrigeration-temperatur-5ff3d83b",
    "title": "Hackers alter supermarket refrigeration temperatures remotely",
    "summary": "Hackers remotely altered temperature settings on refrigeration units in multiple European supermarket chains, disrupting cold storage operations. The attack exploited a misconfiguration in the refrigeration control software, allowing unauthorized remote command execution without authentication. Supermarket operators should update firmware to the latest vendor release and enforce network segmentation to prevent similar remote manipulation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-disrupt-refrigeration-systems-at-european-supermarkets/",
    "publishedAt": "2026-11-02T14:28:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-alter-supermarket-refrigeration-temperatur",
      "article-5ff3d83b",
      "5ff3d83b",
      "hackers-alter-supermarket-refrigeration-temperatur-1a1aa9",
      "hackers-alter-supermarket-refrigeration-temperatures-remotel"
    ]
  },
  {
    "slug": "european-supermarkets-hit-by-refrigeration-unit-at-28d75eb9",
    "title": "European Supermarkets Hit by Refrigeration Unit Attacks",
    "summary": "Attackers remotely reconfigured refrigeration units in Belgian, Luxembourg, and Swedish supermarkets, switching evaporators to defrost mode. The exploit leveraged a flaw in the units’ firmware that allowed unauthorized remote command execution, causing food spoilage. Manufacturers have released firmware updates, and supermarkets should apply patches, isolate affected devices, and monitor for anomalous control traffic.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/02/european-supermarkets-refrigeration-units-cyberattacks/",
    "publishedAt": "2026-11-02T14:28:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "european-supermarkets-hit-by-refrigeration-unit-at",
      "article-28d75eb9",
      "28d75eb9",
      "european-supermarkets-hit-by-refrigeration-unit-at-131e6a",
      "european-supermarkets-hit-by-refrigeration-unit-attacks"
    ]
  },
  {
    "slug": "fake-review-trade-sells-five-star-ratings-86b51d06",
    "title": "Fake Review Trade Sells Five‑Star Ratings",
    "summary": "Underground operators sell five‑star reviews for up to $1,100, offering to erase negative feedback from online platforms. The scheme exploits reputation‑management systems, enabling malicious actors to manipulate consumer perception and undermine trust in digital marketplaces. Businesses should verify review authenticity, enforce platform moderation policies, and monitor for suspicious bulk review activity to mitigate reputational damage.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/threat-intel/2026/11/5-stars-for-sale-inside-the-underground-fake-review-trade",
    "publishedAt": "2026-11-02T14:24:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fake-review-trade-sells-five-star-ratings",
      "article-86b51d06",
      "86b51d06",
      "fake-review-trade-sells-five-star-ratings-60dab1"
    ]
  },
  {
    "slug": "applebee-s-app-hardcoded-password-exposes-data-458b4f3e",
    "title": "Applebee’s App Hardcoded Password Exposes Data",
    "summary": "A researcher discovered a hard‑coded password within the Applebee’s mobile application, allowing unauthorized access to customer data. The embedded credential bypasses authentication, exposing personal information without user interaction; no public exploit reported, but the flaw could enable credential theft. Applebee’s should remove the hard‑coded password, deploy a patched app version, and enforce secure credential storage best practices.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/applebees-customer-data-exposed-by-password-left-in-app",
    "publishedAt": "2026-11-02T14:22:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "applebee-s-app-hardcoded-password-exposes-data",
      "article-458b4f3e",
      "458b4f3e",
      "applebee-s-app-hardcoded-password-exposes-data-18134c"
    ]
  },
  {
    "slug": "paprat-cyber-espionage-campaign-targets-south-asia-002967dc",
    "title": "PapRAT Cyber-Espionage Campaign Targets South Asia",
    "summary": "A known India-linked threat group is conducting cyber-espionage campaigns against organizations in South Asia using three distinct attack chains that leverage legitimate Windows functionality. The campaign employs multiple chained techniques to establish persistence and exfiltrate sensitive information from targeted entities. Organizations in the region should implement enhanced endpoint monitoring and network segmentation to detect anomalous lateral movement.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/paprat-cyberespionage-campaign-bitter-south-asia",
    "publishedAt": "2026-11-02T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "paprat-cyber-espionage-campaign-targets-south-asia",
      "article-002967dc",
      "002967dc",
      "paprat-cyber-espionage-campaign-targets-south-asia-7bea52"
    ]
  },
  {
    "slug": "cloudflare-cuts-dns-build-time-and-memory-9dd40191",
    "title": "Cloudflare Cuts DNS Build Time and Memory",
    "summary": "Cloudflare introduced a planner that selects minimal safe DNS zone rebuilds, targeting large zones with millions of records. The planner reduces full rebuilds by 40%, cuts peak memory usage by 85%, and halves overall build delay, improving resource efficiency. The change is implemented via zone setting adjustments and is available to all Cloudflare customers.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/dns-targeted-zone-builds/",
    "publishedAt": "2026-11-02T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-cuts-dns-build-time-and-memory",
      "article-9dd40191",
      "9dd40191",
      "cloudflare-cuts-dns-build-time-and-memory-6e1965"
    ]
  },
  {
    "slug": "microsoft-fixes-smart-app-control-broken-by-octobe-a301ddae",
    "title": "Microsoft fixes Smart App Control broken by October Windows update",
    "summary": "Microsoft has resolved a known issue that prevented some users from activating the Smart App Control security feature after installing the October 2026 KB5127648 Windows 11 security update.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-fixes-smart-app-control-broken-by-october-windows-update/",
    "publishedAt": "2026-11-02T13:57:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-fixes-smart-app-control-broken-by-octobe",
      "article-a301ddae",
      "a301ddae",
      "microsoft-fixes-smart-app-control-broken-by-octobe-12ac4c",
      "microsoft-fixes-smart-app-control-broken-by-october-windows-"
    ]
  },
  {
    "slug": "hackers-could-exploit-iphone-bootrom-flaws-to-comp-59226233",
    "title": "Hackers Could Exploit iPhone BootROM Flaws to Compromise Cryptocurrency Wallet Security",
    "summary": "Older iPhones used to store cryptocurrency seed phrases could expose owners to physical attacks that airplane mode cannot stop. OneKey founder Yishi has warned that wiping an aging iPhone and keeping it offline does not make it a secure cold wallet. The concern involves BootROM flaws that let attackers run code before iOS starts.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-exploit-iphone-bootrom-flaws/",
    "publishedAt": "2026-11-02T13:43:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-could-exploit-iphone-bootrom-flaws-to-comp",
      "article-59226233",
      "59226233",
      "hackers-could-exploit-iphone-bootrom-flaws-to-comp-21336a",
      "hackers-could-exploit-iphone-bootrom-flaws-to-compromise-cry"
    ]
  },
  {
    "slug": "red-hat-releases-libxml2-security-update-7978e9e6",
    "title": "Red Hat Releases libxml2 Security Update",
    "summary": "Red Hat released a libxml2 security update for Enterprise Linux 7, fixing several XML parsing flaws. The vulnerabilities allow denial of service or remote code execution via malformed XML, with CVSS scores up to 8.9. Apply the RHSA-2026:93791 patch immediately and verify libxml2 is updated to the latest release on all affected systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93791",
    "publishedAt": "2026-11-02T13:36:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-libxml2-security-update",
      "article-7978e9e6",
      "7978e9e6",
      "red-hat-releases-libxml2-security-update-37d922"
    ]
  },
  {
    "slug": "revolve-breach-exposes-180-000-customer-records-7ac2ba1c",
    "title": "Revolve Breach Exposes 180,000 Customer Records",
    "summary": "Hackers breached Revolve’s online shopping platform, compromising personal and payment card data of at least 180,000 customers. The attack exploited insufficient authentication controls, allowing attackers to retrieve stored credentials and transaction details, potentially enabling fraud. Revolve should enforce multi‑factor authentication, patch access controls, and notify affected users while conducting a full forensic investigation.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/revolve-data-breach-impacts-at-least-180000-people/",
    "publishedAt": "2026-11-02T13:35:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "revolve-breach-exposes-180-000-customer-records",
      "article-7ac2ba1c",
      "7ac2ba1c",
      "revolve-breach-exposes-180-000-customer-records-6c2710"
    ]
  },
  {
    "slug": "google-launches-250k-root-in-cloud-bug-bounty-prog-b35854fb",
    "title": "Google Launches $250k Root-in-Cloud Bug Bounty Program",
    "summary": "Google announced a new $250,000 root‑in‑cloud bug bounty program targeting architectural flaws that grant full administrative control over its cloud services. The reward encourages researchers to uncover critical infrastructure weaknesses that could enable enterprise‑wide compromise across multiple Google Cloud products. Findings are submitted via Google’s VRP portal, verified, and awarded, with strict disclosure guidelines to protect customers.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/google-introduces-250000-root-in-cloud-bug-bounty-reward/",
    "publishedAt": "2026-11-02T13:25:11.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/google/google-adds-new-250-000-cloud-vrp-reward-for-root-in-cloud-bugs/"
      }
    ],
    "aliases": [
      "google-launches-250k-root-in-cloud-bug-bounty-prog",
      "article-b35854fb",
      "b35854fb",
      "google-launches-250k-root-in-cloud-bug-bounty-prog-4b007b",
      "google-launches-250k-root-in-cloud-bug-bounty-program"
    ]
  },
  {
    "slug": "red-hat-issues-security-updates-for-python-jwt-lib-c3916b71",
    "title": "Red Hat Issues Security Updates for Python-JWT Library",
    "summary": "Red Hat released a security update for the python-jwt package across extended support versions of Red Hat Enterprise Linux 8.6. Red Hat Product Security rated the underlying vulnerability as Important, though specific exploitation vectors were not publicly detailed in the advisory. System administrators should apply the provided patches to affected Red Hat Enterprise Linux Advanced Mission Critical Support systems.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93780",
    "publishedAt": "2026-11-02T13:13:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-security-updates-for-python-jwt-lib",
      "article-c3916b71",
      "c3916b71",
      "red-hat-issues-security-updates-for-python-jwt-lib-37d922",
      "red-hat-issues-security-updates-for-python-jwt-library"
    ]
  },
  {
    "slug": "wiz-releases-red-and-blue-agents-for-soc-teams-5c8130c4",
    "title": "Wiz Releases Red and Blue Agents for SOC Teams",
    "summary": "Wiz Research introduced Red and Blue Agents to enhance SOC capabilities, offering pre-breach alerts and rapid threat investigation. The Red Agent validates potential breaches before they occur, while the Blue Agent analyzes active threats at machine speed, leveraging AI to detect anomalies. The agents are available for deployment immediately, with documentation and integration guides provided by Wiz for security teams.",
    "category": "General",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/soc-alerts-red-and-blue-agents",
    "publishedAt": "2026-11-02T13:13:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wiz-releases-red-and-blue-agents-for-soc-teams",
      "article-5c8130c4",
      "5c8130c4",
      "wiz-releases-red-and-blue-agents-for-soc-teams-49829f"
    ]
  },
  {
    "slug": "red-hat-kernel-update-for-nvidia-rhel-10-70b4ae29",
    "title": "Red Hat Kernel Update for NVIDIA RHEL 10",
    "summary": "A kernel security update addresses vulnerabilities in NVIDIA‑enabled Red Hat Enterprise Linux 10, targeting the Linux kernel. The patch mitigates important‑severity flaws, each referenced by CVE identifiers, with CVSS scores indicating a high risk. Red Hat recommends applying the update immediately in order to prevent exploitation of the kernel vulnerabilities.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93775",
    "publishedAt": "2026-11-02T13:03:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-for-nvidia-rhel-10",
      "article-70b4ae29",
      "70b4ae29",
      "red-hat-kernel-update-for-nvidia-rhel-10-37d923"
    ]
  },
  {
    "slug": "red-hat-releases-libsoup-security-update-54b4ed49",
    "title": "Red Hat Releases libsoup Security Update",
    "summary": "Red Hat issued a libsoup security update for Enterprise Linux 8.6, addressing multiple vulnerabilities. The flaws enable denial of service or remote code execution through malformed HTTP requests, with CVSS scores up to 8.9. Apply the RHSA-2026:93716 patch immediately and ensure libsoup is updated to the latest version on all affected systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93716",
    "publishedAt": "2026-11-02T12:50:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-libsoup-security-update",
      "article-54b4ed49",
      "54b4ed49",
      "red-hat-releases-libsoup-security-update-37d923"
    ]
  },
  {
    "slug": "rhsa-2026-93668-important-pki-core-10-6-security-u-407748e3",
    "title": "RHSA-2026:93668: Important: pki-core:10.6 security update",
    "summary": "An update for the pki-core:10.6 module is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93668",
    "publishedAt": "2026-11-02T12:48:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93668-important-pki-core-10-6-security-u",
      "article-407748e3",
      "407748e3",
      "rhsa-2026-93668-important-pki-core-10-6-security-u-37d926",
      "rhsa-2026-93668-important-pki-core-10-6-security-update"
    ]
  },
  {
    "slug": "trezor-alerts-possible-seed-stealing-implant-in-sa-53d8f55a",
    "title": "Trezor Alerts Possible Seed‑Stealing Implant in Safe 5",
    "summary": "Trezor warned that Safe 5 wallets sold by reseller CryptoBilis may contain a hidden implant that steals the device’s recovery phrase. The implant could compromise the seed, enabling attackers to access stored cryptocurrency funds, though no confirmed exploitation has been reported. Trezor advises users to verify device authenticity, update firmware to the latest version, and avoid purchasing from unverified resellers.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/02/trezor-hardware-wallet-implant-cryptobilis/",
    "publishedAt": "2026-11-02T12:48:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "trezor-alerts-possible-seed-stealing-implant-in-sa",
      "article-53d8f55a",
      "53d8f55a",
      "trezor-alerts-possible-seed-stealing-implant-in-sa-103af8",
      "trezor-alerts-possible-seed-stealing-implant-in-safe-5"
    ]
  },
  {
    "slug": "rhsa-2026-93617-important-opentelemetry-collector-08a99efe",
    "title": "RHSA-2026:93617: Important: opentelemetry-collector security update",
    "summary": "An update for opentelemetry-collector is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93617",
    "publishedAt": "2026-11-02T12:47:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93617-important-opentelemetry-collector",
      "article-08a99efe",
      "08a99efe",
      "rhsa-2026-93617-important-opentelemetry-collector-37d927",
      "rhsa-2026-93617-important-opentelemetry-collector-security-u"
    ]
  },
  {
    "slug": "gitlab-servers-exposed-to-active-rce-exploitation-ddd8d18c",
    "title": "GitLab Servers Exposed to Active RCE Exploitation",
    "summary": "A maximum‑severity flaw in GitLab’s web interface remains unpatched on more than 1,000 Internet‑exposed servers, enabling remote code execution. The vulnerability permits unauthenticated RCE via crafted HTTP requests, and active exploits have been observed, allowing attackers to run arbitrary code. GitLab urges administrators to apply the latest patch, disable exposed services, and verify current releases to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/over-1-000-gitlab-servers-vulnerable-to-code-execution-attacks/",
    "publishedAt": "2026-11-02T12:47:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gitlab-servers-exposed-to-active-rce-exploitation",
      "article-ddd8d18c",
      "ddd8d18c",
      "gitlab-servers-exposed-to-active-rce-exploitation-1f01b0"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-rt-bug-fix-for-rhel-8-a484d2f3",
    "title": "Red Hat Releases Kernel-RT Bug Fix for RHEL 8",
    "summary": "Red Hat issued a kernel-rt update for Red Enterprise Linux 8 to address a critical bug. The update resolves a kernel-rt race condition that could allow local privilege escalation, though no public exploit has been reported. Customers should apply the RHSA-2026:93670 package immediately to mitigate potential privilege escalation risks system.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93670",
    "publishedAt": "2026-11-02T12:37:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-rt-bug-fix-for-rhel-8",
      "article-a484d2f3",
      "a484d2f3",
      "red-hat-releases-kernel-rt-bug-fix-for-rhel-8-37d926"
    ]
  },
  {
    "slug": "teams-messages-used-to-steal-remote-access-050081a6",
    "title": "Teams Messages Used to Steal Remote Access",
    "summary": "Hackers leveraged Microsoft Teams messages and voice calls to impersonate IT support, convincing employees to grant remote‑desktop permissions. The social‑engineering vector bypassed authentication, allowing attackers to move laterally into corporate networks and access privileged accounts without exploiting software flaws. Security teams should enforce MFA, verify support requests, and monitor remote‑access logs, while Microsoft recommends disabling remote‑access connections for non‑essential users.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsoft-teams-messages/",
    "publishedAt": "2026-11-02T12:33:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "teams-messages-used-to-steal-remote-access",
      "article-050081a6",
      "050081a6",
      "teams-messages-used-to-steal-remote-access-171be9"
    ]
  },
  {
    "slug": "rhsa-2026-92221-important-flatpak-security-update-a8c51d25",
    "title": "RHSA-2026:92221: Important: flatpak security update",
    "summary": "An update for flatpak is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:92221",
    "publishedAt": "2026-11-02T12:33:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-92221-important-flatpak-security-update",
      "article-a8c51d25",
      "a8c51d25",
      "rhsa-2026-92221-important-flatpak-security-update-37d9aa"
    ]
  },
  {
    "slug": "rhsa-2026-93627-important-wireshark-security-updat-4af7f3fb",
    "title": "RHSA-2026:93627: Important: wireshark security update",
    "summary": "An update for wireshark is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93627",
    "publishedAt": "2026-11-02T12:21:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93627-important-wireshark-security-updat",
      "article-4af7f3fb",
      "4af7f3fb",
      "rhsa-2026-93627-important-wireshark-security-updat-37d927",
      "rhsa-2026-93627-important-wireshark-security-update"
    ]
  },
  {
    "slug": "red-hat-releases-important-bind-security-update-17601272",
    "title": "Red Hat Releases Important Bind Security Update",
    "summary": "Red Hat issued an Important security update for the BIND DNS server on RHEL 9, addressing multiple vulnerabilities. The advisory references CVE identifiers with CVSS base scores, indicating the severity of each flaw, and recommends applying the update to mitigate potential exploitation. Customers should download and install the RHSA-2026:93610 package to secure their DNS infrastructure.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93610",
    "publishedAt": "2026-11-02T12:14:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-important-bind-security-update",
      "article-17601272",
      "17601272",
      "red-hat-releases-important-bind-security-update-37d927"
    ]
  },
  {
    "slug": "red-hat-issues-important-update-for-python-jwt-lib-76be2095",
    "title": "Red Hat Issues Important Update for python‑jwt Library",
    "summary": "Red Hat released an Important security update for python‑jwt on RHEL 8.8 Update Services for SAP Solutions and Telecommunications. The update fixes vulnerabilities in python‑jwt, with CVSS base scores available via referenced CVE links, and is rated Important by Red Hat Product Security. Apply the patch through the RHEL 8.8 Update Services channel to mitigate potential exploitation of the library.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93624",
    "publishedAt": "2026-11-02T12:02:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-update-for-python-jwt-lib",
      "article-76be2095",
      "76be2095",
      "red-hat-issues-important-update-for-python-jwt-lib-37d927",
      "red-hat-issues-important-update-for-python-jwt-library"
    ]
  },
  {
    "slug": "ai-bug-discovery-rate-surges-3-of-critical-bugs-82ead697",
    "title": "AI Bug Discovery Rate Surges 3% of Critical Bugs",
    "summary": "A recent analysis shows 3% of all recorded critical bugs were found last month, potentially adding 100,000 new vulnerabilities this year. This pace would increase the all‑time total by about 26%, expanding the threat landscape through AI‑assisted discovery. Security teams should monitor feeds and adjust patch cycles to match the accelerated discovery rate.",
    "category": "General",
    "severity": "LOW",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/11/ai-vulnerability-finding-2.html",
    "publishedAt": "2026-11-02T12:02:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-bug-discovery-rate-surges-3-of-critical-bugs",
      "article-82ead697",
      "82ead697",
      "ai-bug-discovery-rate-surges-3-of-critical-bugs-21d0f9"
    ]
  },
  {
    "slug": "northflank-breach-exposes-ai-api-keys-53145069",
    "title": "Northflank Breach Exposes AI API Keys",
    "summary": "Northflank reported a security incident that exposed AI API keys, allowing attackers to access platform workloads and misuse environment variables. The breach did not confirm an entry point or attacker identity, but leaked credentials could grant privileged access to global settings and secret groups. Northflank urges customers to rotate all secrets, update variables, and enable MFA to mitigate credential misuse.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/northflank-security-breach/",
    "publishedAt": "2026-11-02T12:02:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "northflank-breach-exposes-ai-api-keys",
      "article-53145069",
      "53145069",
      "northflank-breach-exposes-ai-api-keys-4ea7c4"
    ]
  },
  {
    "slug": "rhsa-2026-93626-important-python-jwt-security-upda-be651efb",
    "title": "RHSA-2026:93626: Important: python-jwt security update",
    "summary": "An update for python-jwt is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93626",
    "publishedAt": "2026-11-02T11:58:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93626-important-python-jwt-security-upda",
      "article-be651efb",
      "be651efb",
      "rhsa-2026-93626-important-python-jwt-security-upda-37d927",
      "rhsa-2026-93626-important-python-jwt-security-update"
    ]
  },
  {
    "slug": "cve-2023-21768-winsock-privilege-escalation-poc-b0b5680c",
    "title": "CVE-2023-21768 WinSock Privilege Escalation PoC",
    "summary": "A public proof‑of‑concept exploit demonstrates local privilege escalation via the Windows Ancillary Function Driver for WinSock, targeting CVE-2023-21768. The PoC shows attackers with local access can obtain SYSTEM privileges on vulnerable Windows 11 22H2 systems, a flaw patched in January 2023. Microsoft recommends installing the January 2023 security update and applying the latest Windows patches to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/poc-for-windows-winsock-ancillary-vulnerability/",
    "publishedAt": "2026-11-02T11:57:41.000Z",
    "cves": [
      "CVE-2023-21768"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2023-21768-winsock-privilege-escalation-poc",
      "article-b0b5680c",
      "b0b5680c",
      "cve-2023-21768-winsock-privilege-escalation-poc-79befd"
    ]
  },
  {
    "slug": "langflow-unauthenticated-rce-flaws-exposed-e5963d00",
    "title": "Langflow Unauthenticated RCE Flaws Exposed",
    "summary": "Langflow contains two critical unauthenticated RCE flaws that allow attackers to bypass authentication and execute arbitrary code. IBM identified the vulnerabilities across releases 1.0.0 to 1.12.8, assigning CVE-2026-111357, and noted no public exploit yet. Users should upgrade to version 1.13.0 immediately, as the patch resolves both flaws and restores authentication controls.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/critical-langflow-flaws-could-let.html",
    "publishedAt": "2026-11-02T11:50:00.000Z",
    "cves": [
      "CVE-2026-111357"
    ],
    "additionalSources": [],
    "aliases": [
      "langflow-unauthenticated-rce-flaws-exposed",
      "article-e5963d00",
      "e5963d00",
      "langflow-unauthenticated-rce-flaws-exposed-312ed6"
    ]
  },
  {
    "slug": "hackers-exploit-patched-synology-nas-vulnerabiliti-9b10c473",
    "title": "Hackers Exploit Patched Synology NAS Vulnerabilities to Deploy C3RB3R Ransomware and Encrypt Files",
    "summary": "Synology NAS devices are facing C3RB3R ransomware attacks linked to 2024 security flaws, prompting the company to urge users to update outdated DiskStation Manager versions and packages. The warning followed reports from the 360 Security Team and Solar Emergency Response Team on October 29.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/synology-nas-vulnerabilities-c3rb3r-ransomware/",
    "publishedAt": "2026-11-02T11:49:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-patched-synology-nas-vulnerabiliti",
      "article-9b10c473",
      "9b10c473",
      "hackers-exploit-patched-synology-nas-vulnerabiliti-031e24",
      "hackers-exploit-patched-synology-nas-vulnerabilities-to-depl"
    ]
  },
  {
    "slug": "chainalysis-breach-via-offensive-agentic-technique-946c8397",
    "title": "Chainalysis Breach via Offensive Agentic Techniques",
    "summary": "Chainalysis experienced a security incident where external attackers employed offensive agentic techniques to access internal systems and tools. IBM reported no evidence of unauthorized data exfiltration or compromise of investigative data, though the breach exposed internal infrastructure. The company is investigating the incident and has implemented additional monitoring and access controls to prevent future intrusions.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/02/chainalysis-breached-using-offensive-agentic-techniques/",
    "publishedAt": "2026-11-02T11:40:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chainalysis-breach-via-offensive-agentic-technique",
      "article-946c8397",
      "946c8397",
      "chainalysis-breach-via-offensive-agentic-technique-cb35db",
      "chainalysis-breach-via-offensive-agentic-techniques"
    ]
  },
  {
    "slug": "phishers-mimic-openai-to-steal-cards-and-otps-5944ec10",
    "title": "Phishers mimic OpenAI to steal cards and OTPs",
    "summary": "Phishers impersonated OpenAI in billing emails, directing victims to payment pages that harvest credit card details and one‑time passwords. The campaign combines convincing subscription warnings with a live operator who can request a verification code, enabling unauthorized payment approval. Security teams should block the sender domain, educate users on legitimate OpenAI communications, and enforce multi‑factor authentication for payment portals.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/fake-billing-notices/",
    "publishedAt": "2026-11-02T11:31:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "phishers-mimic-openai-to-steal-cards-and-otps",
      "article-5944ec10",
      "5944ec10",
      "phishers-mimic-openai-to-steal-cards-and-otps-72758e"
    ]
  },
  {
    "slug": "prophet-security-survey-evaluates-soc-ai-adoption-c9669de4",
    "title": "Prophet Security Survey Evaluates SOC AI Adoption Trends",
    "summary": "Prophet Security published its State of AI in Security Operations 2026 survey of over 250 security leaders and practitioners. The report reveals that 40 percent of security teams deploy AI daily, 56 percent are testing implementation, and only 4 percent lack adoption plans. Security operations centers must evaluate structural readiness and operational maturity before deploying AI agents across workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/is-your-soc-ready-for-ai-agents.html",
    "publishedAt": "2026-11-02T11:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "prophet-security-survey-evaluates-soc-ai-adoption",
      "article-c9669de4",
      "c9669de4",
      "prophet-security-survey-evaluates-soc-ai-adoption-7be76b",
      "prophet-security-survey-evaluates-soc-ai-adoption-trends"
    ]
  },
  {
    "slug": "synology-alerts-on-c3rb3r-ransomware-attacks-d3641584",
    "title": "Synology Alerts on C3RB3R Ransomware Attacks",
    "summary": "Synology warned customers of a surge in C3RB3R ransomware attacks on its NAS devices. The malware encrypts stored data and demands payment, exploiting unpatched firmware vulnerabilities without a cited CVE. Synology urges immediate firmware updates, disabling remote management, and backing up data to mitigate the threat and monitoring for unauthorized access.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/synology-warns-customers-of-ongoing-c3rb3r-ransomware-attacks/",
    "publishedAt": "2026-11-02T11:28:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "synology-alerts-on-c3rb3r-ransomware-attacks",
      "article-d3641584",
      "d3641584",
      "synology-alerts-on-c3rb3r-ransomware-attacks-755df0"
    ]
  },
  {
    "slug": "threat-actors-impersonate-it-support-on-microsoft-052d7de6",
    "title": "Threat Actors Impersonate IT Support on Microsoft Teams",
    "summary": "Threat actors impersonated IT support personnel on Microsoft Teams to trick employees into granting remote access to corporate workstations. Attackers exploited misconfigured Active Directory Certificate Services settings to mint authentication certificates for privileged accounts, including a domain controller, resulting in data theft. Organizations should restrict certificate templates, enforce strict social engineering defenses, and audit Active Directory Certificate Services misconfigurations.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/attackers-pose-as-it-support-on.html",
    "publishedAt": "2026-11-02T11:08:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "threat-actors-impersonate-it-support-on-microsoft",
      "article-052d7de6",
      "052d7de6",
      "threat-actors-impersonate-it-support-on-microsoft-7ecd75",
      "threat-actors-impersonate-it-support-on-microsoft-teams"
    ]
  },
  {
    "slug": "rhsa-2026-93592-important-freerdp-security-update-4c834942",
    "title": "RHSA-2026:93592: Important: freerdp security update",
    "summary": "An update for freerdp is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93592",
    "publishedAt": "2026-11-02T11:03:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93592-important-freerdp-security-update",
      "article-4c834942",
      "4c834942",
      "rhsa-2026-93592-important-freerdp-security-update-37d92a"
    ]
  },
  {
    "slug": "hackers-impersonate-ai-bots-to-hunt-credentials-cf7804e2",
    "title": "Hackers Impersonate AI Bots to Hunt Credentials",
    "summary": "Attackers are impersonating ChatGPT, Claude, and Perplexity AI bots to scan websites for passwords, API keys, and cloud credentials. The campaign leverages familiar AI service names to bypass trust mechanisms and test whether organizations grant access based on perceived legitimacy. This social engineering technique targets credential theft at scale.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-impersonate-ai-bots/",
    "publishedAt": "2026-11-02T11:01:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-impersonate-ai-bots-to-hunt-credentials",
      "article-cf7804e2",
      "cf7804e2",
      "hackers-impersonate-ai-bots-to-hunt-credentials-295d61"
    ]
  },
  {
    "slug": "rhsa-2026-93596-important-opentelemetry-collector-8741ac62",
    "title": "RHSA-2026:93596: Important: opentelemetry-collector security update",
    "summary": "An update for opentelemetry-collector is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93596",
    "publishedAt": "2026-11-02T10:54:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93596-important-opentelemetry-collector",
      "article-8741ac62",
      "8741ac62",
      "rhsa-2026-93596-important-opentelemetry-collector-37d92a",
      "rhsa-2026-93596-important-opentelemetry-collector-security-u"
    ]
  },
  {
    "slug": "government-linux-servers-targeted-in-sysgorat-espi-b00f8861",
    "title": "Government Linux Servers Targeted in SysGoRAT Espionage Campaign",
    "summary": "Palo Alto Networks Unit 42 discovered a cyber espionage campaign targeting Linux servers across government and state-affiliated entities. Tracked as cluster CL-UNK-1211, the attackers deployed SysGoRAT malware alongside suspected AI-generated scripts to conduct unauthorized operational reconnaissance and control. Defenders must inspect Linux infrastructure for unauthorized background processes, monitor script executions, and implement strict host-based access controls.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/government-linux-servers-targeted-with.html",
    "publishedAt": "2026-11-02T10:49:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "government-linux-servers-targeted-in-sysgorat-espi",
      "article-b00f8861",
      "b00f8861",
      "government-linux-servers-targeted-in-sysgorat-espi-27781a",
      "government-linux-servers-targeted-in-sysgorat-espionage-camp"
    ]
  },
  {
    "slug": "cyberstrikeai-breach-guidance-released-for-exposur-02d0faa5",
    "title": "CyberStrikeAI Breach Guidance Released for Exposure Verification",
    "summary": "Security researchers issued an intelligence alert detailing a recent data breach affecting CyberStrikeAI systems and telemetry infrastructure. The incident exposes internal operational telemetry, creating potential operational risks and requiring immediate root-cause telemetry analysis to hunt for exposure. Incident response teams should review root-cause telemetry, deploy recommended detection rules, and apply necessary patches immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cyberstrikeai-in-the-wild-the-use-of-ai-in-real-world-a",
    "publishedAt": "2026-11-02T10:45:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cyberstrikeai-breach-guidance-released-for-exposur",
      "article-02d0faa5",
      "02d0faa5",
      "cyberstrikeai-breach-guidance-released-for-exposur-32913a",
      "cyberstrikeai-breach-guidance-released-for-exposure-verifica"
    ]
  },
  {
    "slug": "hackers-use-cyberstrikeai-agents-to-automate-windo-d471d7a9",
    "title": "Hackers Use CyberStrikeAI Agents to Automate Windows Domain Takeovers and Credential Theft",
    "summary": "Hackers are now using an AI-driven command framework called CyberStrikeAI to break into Windows networks and take over entire domains. Education organizations in Africa and Latin America were among the confirmed victims. The tool lets a language model decide which commands to run, so the operator no longer types each step by hand.",
    "category": "General",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-use-cyberstrikeai-agents-2/",
    "publishedAt": "2026-11-02T10:34:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-use-cyberstrikeai-agents-to-automate-windo",
      "article-d471d7a9",
      "d471d7a9",
      "hackers-use-cyberstrikeai-agents-to-automate-windo-65a62a",
      "hackers-use-cyberstrikeai-agents-to-automate-windows-domain-"
    ]
  },
  {
    "slug": "chainalysis-breach-via-ai-driven-attack-d196dbe1",
    "title": "Chainalysis Breach via AI-Driven Attack",
    "summary": "Chainalysis suffered a data breach after attackers used AI‑driven offensive agentic techniques to infiltrate its internal systems and tools. The attack exploited automated reconnaissance and credential‑guessing capabilities, granting unauthorized access to proprietary data; no public exploit code is reported. Chainalysis has disclosed the incident and is conducting forensics; security teams should review access controls, monitor anomalies, and apply vendor patches.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/chainalysis-discloses-data-breach-following-ai-driven-cyberattack/",
    "publishedAt": "2026-11-02T10:27:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chainalysis-breach-via-ai-driven-attack",
      "article-d196dbe1",
      "d196dbe1",
      "chainalysis-breach-via-ai-driven-attack-642816"
    ]
  },
  {
    "slug": "red-hat-releases-freerdp-security-update-098ea92e",
    "title": "Red Hat Releases freerdp Security Update",
    "summary": "Red Hat issued an important security update for the freerdp client on Enterprise Linux 7. The update addresses multiple vulnerabilities, each with a CVSS base score listed in the references, potentially preventing remote code execution or privilege escalation. Customers should apply the freerdp update immediately and review the CVE references for detailed impact.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93559",
    "publishedAt": "2026-11-02T10:22:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-freerdp-security-update",
      "article-098ea92e",
      "098ea92e",
      "red-hat-releases-freerdp-security-update-37d92a"
    ]
  },
  {
    "slug": "fbi-links-6b-binance-heist-to-north-korea-ac6b5964",
    "title": "FBI Links $6B Binance Heist to North Korea",
    "summary": "The FBI confirmed that North Korea was responsible for a $6 billion theft of virtual assets from Binance on October 29, 2026. The attack exploited compromised wallet addresses, allowing attackers to siphon funds from Binance’s transaction network. Binance and the crypto industry are urged to block TraderTraitor‑linked transactions, enhance wallet monitoring, and tighten KYC procedures to prevent repeat incidents.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/02/fbi-north-korea-binance-hack/",
    "publishedAt": "2026-11-02T10:12:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fbi-links-6b-binance-heist-to-north-korea",
      "article-ac6b5964",
      "ac6b5964",
      "fbi-links-6b-binance-heist-to-north-korea-383878"
    ]
  },
  {
    "slug": "red-hat-issues-gimp-security-update-61833136",
    "title": "Red Hat Issues GIMP Security Update",
    "summary": "Red Hat released a security update for GIMP on RHEL 9.2 Update Services for SAP Solutions. The update addresses multiple vulnerabilities that could allow local privilege escalation or denial of service; CVSS scores are listed in the referenced CVE links. Users should apply the update immediately and verify that the affected packages are upgraded to the patched versions.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93589",
    "publishedAt": "2026-11-02T09:58:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-gimp-security-update",
      "article-61833136",
      "61833136",
      "red-hat-issues-gimp-security-update-37d92a"
    ]
  },
  {
    "slug": "trusted-vendors-should-guide-smbs-through-onboardi-7fe5f15f",
    "title": "Trusted Vendors Should Guide SMBs Through Onboarding",
    "summary": "SMBs require guided onboarding and supervised protection to optimize their security investments. The article emphasizes that vendors should provide clear onboarding processes and ongoing oversight to reduce confusion and ensure consistent security posture. Organizations should adopt vendor-led training, continuous monitoring, and proactive risk assessments to maintain effective defenses and protect critical assets.",
    "category": "General",
    "severity": "LOW",
    "source": "ESET WeLiveSecurity",
    "sourceUrl": "https://www.welivesecurity.com/en/business-security/when-confusion-reigns-trusted-vendors-guide-smb-customers/",
    "publishedAt": "2026-11-02T09:55:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "trusted-vendors-should-guide-smbs-through-onboardi",
      "article-7fe5f15f",
      "7fe5f15f",
      "trusted-vendors-should-guide-smbs-through-onboardi-6a51e0",
      "trusted-vendors-should-guide-smbs-through-onboarding"
    ]
  },
  {
    "slug": "managed-siem-services-cost-tuning-and-ownership-mo-fa0bacaf",
    "title": "Managed SIEM Services: Cost, Tuning, and Ownership Models",
    "summary": "The article reviews managed SIEM services, noting that the license costs half the total while the unstaffed half—tuning, content, and triage—often causes failures. It explains managed services supply discipline, offering three ownership models: platform‑managed, operator‑managed, and shared‑ownership, ensuring tuning and threat detection. The ranking evaluates ten vendors on cost, ownership, and operational effectiveness to help organizations choose a SIEM partner.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/best-managed-siem-services/",
    "publishedAt": "2026-11-02T09:39:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "managed-siem-services-cost-tuning-and-ownership-mo",
      "article-fa0bacaf",
      "fa0bacaf",
      "managed-siem-services-cost-tuning-and-ownership-mo-2ce517",
      "managed-siem-services-cost-tuning-and-ownership-models"
    ]
  },
  {
    "slug": "cyber-security-news-ranks-top-soc-service-provider-39fb8ae4",
    "title": "Cyber Security News Ranks Top SOC Service Providers",
    "summary": "Cyber Security News published a technical vendor evaluation ranking the top SOC-as-a-Service providers for mid-market and enterprise organizations. The 2026 market evaluation categorizes security providers into specialized concierge models, scalable detection engineering platforms, and bring-your-own-stack operators. Security leaders can utilize these detailed industry benchmarks to solve internal analyst staffing constraints and maintain continuous operational monitoring.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/best-soc-as-a-service/",
    "publishedAt": "2026-11-02T09:36:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cyber-security-news-ranks-top-soc-service-provider",
      "article-39fb8ae4",
      "39fb8ae4",
      "cyber-security-news-ranks-top-soc-service-provider-547a42",
      "cyber-security-news-ranks-top-soc-service-providers"
    ]
  },
  {
    "slug": "ivanti-patches-two-more-connect-secure-zero-days-c-9d5b4621",
    "title": "Ivanti patches two more Connect Secure zero-days chained in attacks",
    "summary": "Ivanti released security updates to patch two more Connect Secure (ICS) remote access gateway flaws that have been chained in zero-day attacks since at least October 1. [...] (Corroborated Threat Intelligence: Associated CVE is CVE-2026-111357).",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/ivanti-patches-two-more-connect-secure-zero-days-chained-in-attacks/",
    "publishedAt": "2026-11-02T09:33:26.000Z",
    "cves": [
      "CVE-2026-111357"
    ],
    "additionalSources": [],
    "aliases": [
      "ivanti-patches-two-more-connect-secure-zero-days-c",
      "article-9d5b4621",
      "9d5b4621",
      "ivanti-patches-two-more-connect-secure-zero-days-c-64858f",
      "ivanti-patches-two-more-connect-secure-zero-days-chained-in-"
    ]
  },
  {
    "slug": "debugbear-dns-hijack-affects-polymarket-customer-5fcecb17",
    "title": "DebugBear DNS Hijack Affects Polymarket Customer",
    "summary": "DebugBear says its DNS records were hijacked via its registrar, targeting a single Polymarket customer. The compromised DNS redirected traffic to malicious endpoints, enabling attackers to intercept or alter user transactions on Polymarket. Polymarket refunded $3.9 million to affected traders; teams should verify DNS settings, lock registrar accounts, and monitor zone changes.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/polymarket-returns-3-9-million-to-traders-as-debugbear-cites-dns-hijack/",
    "publishedAt": "2026-11-02T09:33:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "debugbear-dns-hijack-affects-polymarket-customer",
      "article-5fcecb17",
      "5fcecb17",
      "debugbear-dns-hijack-affects-polymarket-customer-431e74"
    ]
  },
  {
    "slug": "rhsa-2026-93586-important-perl-http-daemon-securit-e6ea8474",
    "title": "RHSA-2026:93586: Important: perl-HTTP-Daemon security update",
    "summary": "An update for perl-HTTP-Daemon is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93586",
    "publishedAt": "2026-11-02T09:30:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93586-important-perl-http-daemon-securit",
      "article-e6ea8474",
      "e6ea8474",
      "rhsa-2026-93586-important-perl-http-daemon-securit-37d92a",
      "rhsa-2026-93586-important-perl-http-daemon-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-93585-important-perl-http-daemon-securit-c8c07b84",
    "title": "RHSA-2026:93585: Important: perl-HTTP-Daemon security update",
    "summary": "An update for perl-HTTP-Daemon is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93585",
    "publishedAt": "2026-11-02T09:30:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93585-important-perl-http-daemon-securit",
      "article-c8c07b84",
      "c8c07b84",
      "rhsa-2026-93585-important-perl-http-daemon-securit-37d92a",
      "rhsa-2026-93585-important-perl-http-daemon-security-update"
    ]
  },
  {
    "slug": "red-hat-issues-libsoup3-security-update-77e459f8",
    "title": "Red Hat Issues Libsoup3 Security Update",
    "summary": "Red Hat released a security update for libsoup3 on RHEL 10.0 Extended Update Support. The patch mitigates several vulnerabilities that could lead to remote code execution or denial of service; CVSS scores are provided via CVE references. Affected users should install the update promptly and confirm that the libsoup3 package is at the patched version.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93583",
    "publishedAt": "2026-11-02T09:00:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-libsoup3-security-update",
      "article-77e459f8",
      "77e459f8",
      "red-hat-issues-libsoup3-security-update-37d92a"
    ]
  },
  {
    "slug": "fbi-links-600-addresses-to-north-korean-binance-th-4ea7b26c",
    "title": "FBI Links 600+ Addresses to North Korean Binance Theft",
    "summary": "FBI linked over 600 addresses to a $6 billion Binance theft attributed to North Korean group TraderTraitor. Attackers siphoned funds from Binance’s exchange and laundered them through a complex wallet chain to obscure the trail. Binance issued a security advisory urging users to enable two‑factor authentication and monitor activity while law enforcement pursues the laundering network.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/fbi-flags-over-600-addresses-tied-to-north-koreas-binance-heist/",
    "publishedAt": "2026-11-02T08:40:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fbi-links-600-addresses-to-north-korean-binance-th",
      "article-4ea7b26c",
      "4ea7b26c",
      "fbi-links-600-addresses-to-north-korean-binance-th-3dac18",
      "fbi-links-600-addresses-to-north-korean-binance-theft"
    ]
  },
  {
    "slug": "reddit-moves-to-mandatory-logins-5653ba47",
    "title": "Reddit Moves to Mandatory Logins",
    "summary": "Reddit announced a shift to mandatory logins for its platform to limit public discussion access. The change aims to curb unauthorized data scraping by AI bots and support improved recommendations and advertising. Users will need to create or sign in to an account to view content, and the policy aligns with evolving safety rules.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/reddit-plans-mandatory-logins/",
    "publishedAt": "2026-11-02T08:35:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "reddit-moves-to-mandatory-logins",
      "article-5653ba47",
      "5653ba47",
      "reddit-moves-to-mandatory-logins-1cc82f"
    ]
  },
  {
    "slug": "hackers-use-artex-ai-agents-to-automate-active-dir-e965ed23",
    "title": "Hackers Use ARTEX AI Agents to Automate Active Directory Attacks, Kerberoasting, and Lateral Movement",
    "summary": "Hackers are now using an open-source AI tool called ARTEX to run large parts of a network break-in on their own. The tool can map a Windows network, steal service account passwords, and try to spread to domain controllers with very little human help.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-use-artex-ai-agents/",
    "publishedAt": "2026-11-02T08:23:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-use-artex-ai-agents-to-automate-active-dir",
      "article-e965ed23",
      "e965ed23",
      "hackers-use-artex-ai-agents-to-automate-active-dir-1598b4",
      "hackers-use-artex-ai-agents-to-automate-active-directory-att"
    ]
  },
  {
    "slug": "beyondtrust-vulnerability-faces-fresh-exploitation-cd86462c",
    "title": "BeyondTrust vulnerability faces fresh exploitation probes, mass scanning",
    "summary": "Attackers are probing CVE-2026-102764 against BeyondTrust Remote Support appliances in the United States and Europe. The flaw, CVE-2026-102764, is a critical privilege escalation in Remote Support that could allow unauthenticated remote code execution and spread beyond targeted espionage. BeyondTrust has issued an out-of-band patch; apply it immediately and monitor for scanning activity.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-beyondtrust-vulnerability/",
    "publishedAt": "2026-11-02T08:01:35.000Z",
    "cves": [
      "CVE-2026-102764"
    ],
    "additionalSources": [],
    "aliases": [
      "beyondtrust-vulnerability-faces-fresh-exploitation",
      "article-cd86462c",
      "cd86462c",
      "beyondtrust-vulnerability-faces-fresh-exploitation-e8841b",
      "beyondtrust-vulnerability-faces-fresh-exploitation-probes-ma"
    ]
  },
  {
    "slug": "weekly-security-highlights-oct-26-nov-1-a1e5455f",
    "title": "Weekly Security Highlights: Oct 26–Nov 1",
    "summary": "The article provides a weekly roundup of the latest cybersecurity topics discussed between October 26 and November 1, 2026. It covers a range of subjects, from emerging threats and vulnerability disclosures to industry trends and ongoing defensive best practices. Readers can use the summary to stay informed about recent developments in the security landscape.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/a-week-in-security-october-26-november-1-2",
    "publishedAt": "2026-11-02T08:01:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "weekly-security-highlights-oct-26-nov-1",
      "article-a1e5455f",
      "a1e5455f",
      "weekly-security-highlights-oct-26-nov-1-1c5834"
    ]
  },
  {
    "slug": "volta-infostealer-harvests-gmail-discord-uses-ai-p-3cf735be",
    "title": "VOLTA Infostealer Harvests Gmail, Discord, Uses AI Profiling",
    "summary": "A new Windows infostealer named VOLTA captures Gmail, Discord, and other login sessions, surpassing basic credential theft. It forwards the loot to an AI model that analyzes the data and produces a detailed victim value report, revealing advanced profiling. Security teams should block VOLTA’s download URLs, monitor outbound traffic to AI endpoints, and enforce multi‑factor authentication on affected services.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/volta-malware-steals-gmail/",
    "publishedAt": "2026-11-02T07:33:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "volta-infostealer-harvests-gmail-discord-uses-ai-p",
      "article-3cf735be",
      "3cf735be",
      "volta-infostealer-harvests-gmail-discord-uses-ai-p-209f2b",
      "volta-infostealer-harvests-gmail-discord-uses-ai-profiling"
    ]
  },
  {
    "slug": "deepseek-releases-super-agent-coding-tool-d4a951b1",
    "title": "DeepSeek Releases Super-Agent Coding Tool",
    "summary": "DeepSeek unveiled dsh-superagent, a research prototype that automates coding tasks on GitHub repositories. The agent activates when an authorized user requests work or a team rule matches, and it can be invoked by mentioning the agent in chat or GitHub scopes. Developers can integrate the prototype into collaborative workflows, but should review its permissions and usage policies before deployment.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/02/deepseek-dsh-superagent/",
    "publishedAt": "2026-11-02T07:09:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "deepseek-releases-super-agent-coding-tool",
      "article-d4a951b1",
      "d4a951b1",
      "deepseek-releases-super-agent-coding-tool-1b328b"
    ]
  },
  {
    "slug": "ai-agent-command-policy-first-ten-lines-6be8061f",
    "title": "AI Agent Command Policy: First Ten Lines",
    "summary": "Vinay Thakker, KloudStax CTO, outlines a command policy framework for AI coding agents. The policy emphasizes running agents under distinct identities, attaching the user’s identity when acting on their behalf, and correcting credential proxy misuse. Thakker also recommends the first ten lines of a policy and measures to prevent data exfiltration via package installs.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/02/vinay-thakker-kloudstax-ai-agent-access-control/",
    "publishedAt": "2026-11-02T06:30:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agent-command-policy-first-ten-lines",
      "article-6be8061f",
      "6be8061f",
      "ai-agent-command-policy-first-ten-lines-485002"
    ]
  },
  {
    "slug": "byoky-launches-open-source-ai-api-key-wallet-13f4fb13",
    "title": "Byoky Launches Open-Source AI API Key Wallet",
    "summary": "Byoky introduces an open‑source wallet for storing AI API keys on Chrome, Firefox, iOS, and Android. The wallet encrypts keys locally, and forwards calls to providers, returning session tokens while keeping keys secure. Users install the extension or mobile app, configure provider credentials, and rely on Byoky to keep keys isolated from applications.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/02/byoky-open-source-ai-api-key-wallet/",
    "publishedAt": "2026-11-02T06:00:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "byoky-launches-open-source-ai-api-key-wallet",
      "article-13f4fb13",
      "13f4fb13",
      "byoky-launches-open-source-ai-api-key-wallet-4ec313"
    ]
  },
  {
    "slug": "microsoft-qlib-mlflowrecorder-deserialization-rce-28728857",
    "title": "Microsoft Qlib MLflowRecorder Deserialization RCE Vulnerability",
    "summary": "A deserialization flaw in Microsoft Qlib's MLflowRecorder permits remote code execution on affected installations. The flaw requires user interaction, such as visiting a malicious page or opening a crafted file, and has a CVSS score of 7.8, indicating high severity. Microsoft has assigned a CVSS rating of 7.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-850/",
    "publishedAt": "2026-11-02T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-qlib-mlflowrecorder-deserialization-rce",
      "article-28728857",
      "28728857",
      "microsoft-qlib-mlflowrecorder-deserialization-rce-6f3ca6",
      "microsoft-qlib-mlflowrecorder-deserialization-rce-vulnerabil"
    ]
  },
  {
    "slug": "microsoft-qlib-restrictedunpickler-deserialization-7fb53b05",
    "title": "Microsoft Qlib RestrictedUnpickler Deserialization RCE Vulnerability",
    "summary": "A deserialization flaw in Microsoft Qlib's RestrictedUnpickler permits remote code execution on affected installations. The flaw requires user interaction, such as visiting a malicious page or opening a crafted file, and has a CVSS score of 7.8, indicating high severity. Microsoft has assigned a CVSS rating of 7.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-849/",
    "publishedAt": "2026-11-02T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-qlib-restrictedunpickler-deserialization",
      "article-7fb53b05",
      "7fb53b05",
      "microsoft-qlib-restrictedunpickler-deserialization-6f3ca3",
      "microsoft-qlib-restrictedunpickler-deserialization-rce-vulne"
    ]
  },
  {
    "slug": "microsoft-qlib-staticdataloader-deserialization-rc-15d55021",
    "title": "Microsoft Qlib StaticDataLoader Deserialization RCE Vulnerability",
    "summary": "A deserialization flaw in Microsoft Qlib's StaticDataLoader permits remote code execution on affected installations. The flaw requires user interaction, such as visiting a malicious page or opening a crafted file, and has a CVSS score of 7.8, indicating high severity. Microsoft has assigned a CVSS rating of 7.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-848/",
    "publishedAt": "2026-11-02T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-qlib-staticdataloader-deserialization-rc",
      "article-15d55021",
      "15d55021",
      "microsoft-qlib-staticdataloader-deserialization-rc-6f3ca3",
      "microsoft-qlib-staticdataloader-deserialization-rce-vulnerab"
    ]
  },
  {
    "slug": "agentworks-hackathon-yields-5-security-agent-lesso-cc4def7c",
    "title": "AgentWorks Hackathon Yields 5 Security Agent Lessons",
    "summary": "The article examines five lessons learned from the AgentWorks Hackathon that illustrate best practices for building effective security agents. It highlights design principles such as modular architecture, real‑time threat detection, secure communication, and continuous integration testing. The insights aim to guide developers in creating robust, scalable agents that can adapt to evolving threat landscapes.",
    "category": "General",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/five-lessons-from-agentworks-hackathon/",
    "publishedAt": "2026-11-02T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "agentworks-hackathon-yields-5-security-agent-lesso",
      "article-cc4def7c",
      "cc4def7c",
      "agentworks-hackathon-yields-5-security-agent-lesso-276663",
      "agentworks-hackathon-yields-5-security-agent-lessons"
    ]
  },
  {
    "slug": "red-hat-releases-freerdp-security-update-for-rhel-25ad2aab",
    "title": "Red Hat Releases FreeRDP Security Update for RHEL",
    "summary": "Red Hat issued an important security update for the freerdp package on Red Hat Enterprise Linux 8.6 systems. The update addresses security flaws rated as important that could impact remote desktop protocol client connections and system stability. System administrators should apply the patch via Red Hat Enterprise Linux 8.6 update channels to mitigate potential risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93549",
    "publishedAt": "2026-11-02T05:58:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-freerdp-security-update-for-rhel",
      "article-25ad2aab",
      "25ad2aab",
      "red-hat-releases-freerdp-security-update-for-rhel-37d92a"
    ]
  },
  {
    "slug": "volta-infostealer-leverages-llms-to-rank-victims-e4b8a9a1",
    "title": "VOLTA Infostealer Leverages LLMs to Rank Victims",
    "summary": "A new infostealer, VOLTA-AUTODOXER, harvests credentials and browser cookies from Chromium-based browsers, Outlook profiles, and Slack workspaces. The malware employs language models such as Claude, Gemini, and Kimi to evaluate stolen data and prioritize victims by financial value. Security teams should deploy endpoint detection and response solutions, block known VOLTA download domains, and enforce multi‑factor authentication to mitigate credential theft.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/new-volta-infostealer-uses-claude.html",
    "publishedAt": "2026-11-02T05:51:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "volta-infostealer-leverages-llms-to-rank-victims",
      "article-e4b8a9a1",
      "e4b8a9a1",
      "volta-infostealer-leverages-llms-to-rank-victims-271739"
    ]
  },
  {
    "slug": "red-hat-releases-postgresql-16-security-update-9536fbdb",
    "title": "Red Hat Releases PostgreSQL 16 Security Update",
    "summary": "Red Hat released a security update for PostgreSQL 16 on RHEL 9.6 EUS, fixing vulnerabilities that could enable unauthorized data access or denial of service. The advisory cites several CVE identifiers with CVSS scores ranging from moderate to high, yet no exploitation has been reported. Apply the PostgreSQL update promptly and verify database configurations per Red Hat’s security recommendations.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93460",
    "publishedAt": "2026-11-02T05:33:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-postgresql-16-security-update",
      "article-9536fbdb",
      "9536fbdb",
      "red-hat-releases-postgresql-16-security-update-37d92e"
    ]
  },
  {
    "slug": "net-8-0-update-addresses-important-security-issue-9930d43d",
    "title": ".NET 8.0 Update Addresses Important Security Issues",
    "summary": "Red Hat released a security update for .NET 8.0 on Enterprise Linux 9.6 Extended Update Support to address multiple vulnerabilities. The update is rated Important by Red Hat Product Security, and each vulnerability’s CVSS base score is listed in the references. Administrators should apply the patch immediately, verify the CVSS scores, and monitor for any related exploitation attempts.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93457",
    "publishedAt": "2026-11-02T05:32:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "net-8-0-update-addresses-important-security-issue",
      "article-9930d43d",
      "9930d43d",
      "net-8-0-update-addresses-important-security-issue-37d92e",
      "net-8-0-update-addresses-important-security-issues"
    ]
  },
  {
    "slug": "trust-onion-introduces-rotating-codeword-caller-ve-1370a317",
    "title": "Trust Onion Introduces Rotating Codeword Caller Verification",
    "summary": "Trust Onion provides a free app that gives trusted groups three rotating codewords to verify caller identity during voice or text. It also supports signed selfies, message integrity checks, and callback verification, and runs on macOS, iOS, and Android. Users can set rotation schedules and embed the verification into existing communication workflows, boosting trust without extra infrastructure.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/02/product-showcase-trust-onion/",
    "publishedAt": "2026-11-02T05:30:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "trust-onion-introduces-rotating-codeword-caller-ve",
      "article-1370a317",
      "1370a317",
      "trust-onion-introduces-rotating-codeword-caller-ve-a9e73d",
      "trust-onion-introduces-rotating-codeword-caller-verification"
    ]
  },
  {
    "slug": "nginx-update-fixes-important-security-vulnerabilit-302ab5d8",
    "title": "nginx Update Fixes Important Security Vulnerabilities",
    "summary": "Red Hat issued a security update for nginx on Enterprise Linux 9.6 Extended Update Support to remediate several vulnerabilities. The update carries an Important impact rating, and each affected CVE’s CVSS base score is provided in the references section. Operators should install the patch, review the CVSS scores, and ensure nginx is not exposed to untrusted networks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93467",
    "publishedAt": "2026-11-02T05:30:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nginx-update-fixes-important-security-vulnerabilit",
      "article-302ab5d8",
      "302ab5d8",
      "nginx-update-fixes-important-security-vulnerabilit-37d92e",
      "nginx-update-fixes-important-security-vulnerabilities"
    ]
  },
  {
    "slug": "red-hat-updates-net-9-0-for-rhel-9-6-ed05000d",
    "title": "Red Hat Updates .NET 9.0 for RHEL 9.6",
    "summary": "Red Hat released a .NET 9.0 security update for RHEL 9.6 Extended Update Support. The update fixes several vulnerabilities with CVSS scores listed in the CVE references, though no CVE IDs are named in the advisory. Apply the update promptly to address the identified weaknesses, following Red Hat’s installation guidance today.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93459",
    "publishedAt": "2026-11-02T05:28:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-net-9-0-for-rhel-9-6",
      "article-ed05000d",
      "ed05000d",
      "red-hat-updates-net-9-0-for-rhel-9-6-37d92e"
    ]
  },
  {
    "slug": "red-enterprise-linux-9-6-curl-update-addresses-vul-e53c2a3d",
    "title": "Red Enterprise Linux 9.6 curl Update Addresses Vulnerabilities",
    "summary": "Red Enterprise Linux 9.6 EUS users receive a curl security update addressing multiple vulnerabilities. The update fixes issues identified by Red Hat Product Security, with CVSS scores listed in the CVE references, indicating moderate to high impact. Apply RHSA-2026:93454 immediately to mitigate the weaknesses and review the CVE links for severity details.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93454",
    "publishedAt": "2026-11-02T05:15:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-enterprise-linux-9-6-curl-update-addresses-vul",
      "article-e53c2a3d",
      "e53c2a3d",
      "red-enterprise-linux-9-6-curl-update-addresses-vul-37d92e",
      "red-enterprise-linux-9-6-curl-update-addresses-vulnerabiliti"
    ]
  },
  {
    "slug": "red-hat-issues-util-linux-security-update-97de88a9",
    "title": "Red Hat Issues util-linux Security Update",
    "summary": "Red Hat released a security update for util‑linux on RHEL 10. The update addresses multiple vulnerabilities with CVSS scores listed in the CVE references, though no CVE IDs are named in the advisory. Apply the update promptly to mitigate the identified weaknesses, following Red Hat’s installation guidance in the vendor documentation today.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93461",
    "publishedAt": "2026-11-02T05:15:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-util-linux-security-update",
      "article-97de88a9",
      "97de88a9",
      "red-hat-issues-util-linux-security-update-37d92e"
    ]
  },
  {
    "slug": "red-enterprise-linux-8-8-freerdp-update-fixes-vuln-c192ba27",
    "title": "Red Enterprise Linux 8.8 freerdp Update Fixes Vulnerabilities",
    "summary": "Red Enterprise Linux 8.8 SAP and Telecom users receive a freerdp security update addressing multiple vulnerabilities. The update corrects issues identified by Red Hat Product Security, with CVSS scores in the CVE references indicating moderate to high impact. Apply RHSA-2026:93537 promptly to mitigate the weaknesses and consult the CVE links for severity details.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93537",
    "publishedAt": "2026-11-02T05:03:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-enterprise-linux-8-8-freerdp-update-fixes-vuln",
      "article-c192ba27",
      "c192ba27",
      "red-enterprise-linux-8-8-freerdp-update-fixes-vuln-37d92a",
      "red-enterprise-linux-8-8-freerdp-update-fixes-vulnerabilitie"
    ]
  },
  {
    "slug": "aur0ra-ransomware-uses-ai-agents-for-network-infil-9e9edf30",
    "title": "Aur0ra Ransomware Uses AI Agents for Network Infiltration",
    "summary": "Aur0ra ransomware, tracked as GOLD OGRE, uses AI agents to traverse networks, harvest credentials, and gain domain administrator rights. Sophos uncovered Cursor AI artifacts that supplied attackers with VPN logins, proxy access, and target objectives, enabling automated network mapping. Defenders should detect anomalous AI activity, enforce strict VPN controls, and rotate credentials rapidly to counter the threat.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/02/aur0ra-ransomware-ai-agents/",
    "publishedAt": "2026-11-02T05:00:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "aur0ra-ransomware-uses-ai-agents-for-network-infil",
      "article-9e9edf30",
      "9e9edf30",
      "aur0ra-ransomware-uses-ai-agents-for-network-infil-77251b",
      "aur0ra-ransomware-uses-ai-agents-for-network-infiltration"
    ]
  },
  {
    "slug": "red-hat-releases-tomcat-security-update-for-rhel-9-11e05504",
    "title": "Red Hat Releases Tomcat Security Update for RHEL 9.8",
    "summary": "Red Hat issued a security update for Apache Tomcat on RHEL 9.8 Extended Update Support, addressing multiple vulnerabilities. The flaws involve improper input validation in the servlet container, potentially allowing remote code execution with elevated privileges. Apply the provided Tomcat patch immediately and review server configurations to enforce strict access controls.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93469",
    "publishedAt": "2026-11-02T04:44:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-tomcat-security-update-for-rhel-9",
      "article-11e05504",
      "11e05504",
      "red-hat-releases-tomcat-security-update-for-rhel-9-37d92e",
      "red-hat-releases-tomcat-security-update-for-rhel-9-8"
    ]
  },
  {
    "slug": "red-hat-releases-freerdp-security-update-for-rhel-2ebe81f7",
    "title": "Red Hat Releases FreeRDP Security Update for RHEL 8.4",
    "summary": "Red Hat released a security update for FreeRDP on RHEL 8.4 Advanced Mission Critical Update Support and Extended Update Support Long-Life Add-On. The vulnerabilities stem from buffer overflows in the RDP protocol handling, enabling attackers to execute arbitrary code remotely. Apply the FreeRDP patch immediately and enforce network segmentation to limit RDP exposure.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93538",
    "publishedAt": "2026-11-02T04:43:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-freerdp-security-update-for-rhel",
      "article-2ebe81f7",
      "2ebe81f7",
      "red-hat-releases-freerdp-security-update-for-rhel-37d92a",
      "red-hat-releases-freerdp-security-update-for-rhel-8-4"
    ]
  },
  {
    "slug": "red-hat-updates-nginx-on-rhel-9-4-59bea493",
    "title": "Red Hat Updates Nginx on RHEL 9.4",
    "summary": "Red Hat released an important‑severity security update for nginx on RHEL 9.4 for SAP Solutions. The update fixes one or more vulnerabilities referenced by CVE links, but no specific CVE ID is disclosed. Administrators should apply the patch to prevent potential exploitation of the web server component and mitigate denial of service or remote code execution risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93468",
    "publishedAt": "2026-11-02T04:38:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-nginx-on-rhel-9-4",
      "article-59bea493",
      "59bea493",
      "red-hat-updates-nginx-on-rhel-9-4-37d92e"
    ]
  },
  {
    "slug": "red-hat-issues-net-8-0-update-for-rhel-9-4-fa65bc85",
    "title": "Red Hat Issues .NET 8.0 Update for RHEL 9.4",
    "summary": "Red Hat released a security update for .NET 8.0 on RHEL 9.4 Update Services for SAP Solutions, addressing multiple vulnerabilities. The patch fixes several CVE‑identified flaws that could enable remote code execution or privilege escalation, with CVSS scores up to 9.0. Red Hat advises applying the update immediately via the provided RPMs or the Customer Portal to secure affected systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93456",
    "publishedAt": "2026-11-02T04:37:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-net-8-0-update-for-rhel-9-4",
      "article-fa65bc85",
      "fa65bc85",
      "red-hat-issues-net-8-0-update-for-rhel-9-4-37d92e"
    ]
  },
  {
    "slug": "tightvnc-pre-auth-rce-enables-code-execution-on-wi-3d877a03",
    "title": "TightVNC Pre‑Auth RCE Enables Code Execution on Windows",
    "summary": "A pre‑authentication RCE flaw in TightVNC Viewer 2.8.88 x64 lets attackers run code on Windows PCs before password prompts. The flaw corrupts viewer memory when a malicious VNC server sends crafted screen data, enabling arbitrary code execution; PoC confirms the vulnerability. Update to the latest TightVNC release or apply vendor patches, and disable remote connections until a fix is issued.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/tightvnc-pre-auth-rce-vulnerability/",
    "publishedAt": "2026-11-02T04:26:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "tightvnc-pre-auth-rce-enables-code-execution-on-wi",
      "article-3d877a03",
      "3d877a03",
      "tightvnc-pre-auth-rce-enables-code-execution-on-wi-3c46d5",
      "tightvnc-pre-auth-rce-enables-code-execution-on-windows"
    ]
  },
  {
    "slug": "hackers-exploit-github-actions-for-ci-cd-secrets-t-a6188030",
    "title": "Hackers Exploit GitHub Actions for CI/CD Secrets Theft",
    "summary": "Hackers used command injection in GitHub Actions to target 61 public repositories via malicious issues, PRs, and comments. Injected commands executed in two workflow runs, allowing attackers to exfiltrate CI/CD secrets. GitHub should tighten workflow permissions, and users must audit PRs for suspicious commands; disabling workflow execution for untrusted PRs mitigates the flaw.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-target-61-github-repositories/",
    "publishedAt": "2026-11-02T04:21:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-github-actions-for-ci-cd-secrets-t",
      "article-a6188030",
      "a6188030",
      "hackers-exploit-github-actions-for-ci-cd-secrets-t-5fa7d4",
      "hackers-exploit-github-actions-for-ci-cd-secrets-theft"
    ]
  },
  {
    "slug": "rhsa-2026-93464-moderate-podman-security-update-c54f492c",
    "title": "RHSA-2026:93464: Moderate: podman security update",
    "summary": "An update for podman is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93464",
    "publishedAt": "2026-11-02T04:14:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93464-moderate-podman-security-update",
      "article-c54f492c",
      "c54f492c",
      "rhsa-2026-93464-moderate-podman-security-update-37d92e"
    ]
  },
  {
    "slug": "btcpay-servers-targeted-hot-wallets-drained-7e228faa",
    "title": "BTCPay Servers Targeted: Hot Wallets Drained",
    "summary": "BTCPay Server operators received reports that attackers drained Bitcoin hot wallets on its servers, compromising merchant funds. The incident prompted the open‑source payment processor to urge operators to shut down installations immediately and keep them offline during investigation. BTCPay recommends applying the latest security patches and verifying wallet configurations to prevent further unauthorized withdrawals.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/btcpay-server-warns/",
    "publishedAt": "2026-11-02T04:04:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "btcpay-servers-targeted-hot-wallets-drained",
      "article-7e228faa",
      "7e228faa",
      "btcpay-servers-targeted-hot-wallets-drained-27f00c"
    ]
  },
  {
    "slug": "red-hat-issues-kernel-security-update-for-rhel-8-7fa41efe",
    "title": "Red Hat Issues Kernel Security Update for RHEL 8",
    "summary": "Red Hat released an important kernel security update for RHEL 8, addressing vulnerabilities that could enable privilege escalation or denial of service. The advisory cites multiple CVE identifiers with CVSS scores ranging from moderate to high, though no active exploitation has been observed. Apply the kernel update promptly and verify system integrity following Red Hat’s upgrade guidelines.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93436",
    "publishedAt": "2026-11-02T03:57:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-kernel-security-update-for-rhel-8",
      "article-7fa41efe",
      "7fa41efe",
      "red-hat-issues-kernel-security-update-for-rhel-8-37d92e"
    ]
  },
  {
    "slug": "rhsa-2026-93471-important-perl-yaml-1-24-security-d3a09504",
    "title": "RHSA-2026:93471: Important: perl-YAML:1.24 security update",
    "summary": "An update for the perl-YAML:1.24 module is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93471",
    "publishedAt": "2026-11-02T03:52:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93471-important-perl-yaml-1-24-security",
      "article-d3a09504",
      "d3a09504",
      "rhsa-2026-93471-important-perl-yaml-1-24-security-37d92e",
      "rhsa-2026-93471-important-perl-yaml-1-24-security-update"
    ]
  },
  {
    "slug": "red-hat-updates-pipewire-on-rhel-10-f43ad8cd",
    "title": "Red Hat Updates Pipewire on RHEL 10",
    "summary": "Red Hat released a moderate‑severity security update for pipewire on RHEL 10. The update addresses one or more vulnerabilities referenced by CVE links, though no specific CVE ID is listed, potentially allowing local privilege escalation or denial of service. Users should apply the patch to mitigate potential exploitation of the affected component.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93442",
    "publishedAt": "2026-11-02T03:48:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-pipewire-on-rhel-10",
      "article-f43ad8cd",
      "f43ad8cd",
      "red-hat-updates-pipewire-on-rhel-10-37d92e"
    ]
  },
  {
    "slug": "rhsa-2026-93458-important-net-9-0-security-update-7ecd4944",
    "title": "RHSA-2026:93458: Important: .NET 9.0 security update",
    "summary": "An update for .NET 9.0 is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93458",
    "publishedAt": "2026-11-02T03:38:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93458-important-net-9-0-security-update",
      "article-7ecd4944",
      "7ecd4944",
      "rhsa-2026-93458-important-net-9-0-security-update-37d92e"
    ]
  },
  {
    "slug": "rhsa-2026-93472-important-nginx-security-update-64b5712c",
    "title": "RHSA-2026:93472: Important: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93472",
    "publishedAt": "2026-11-02T03:38:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93472-important-nginx-security-update",
      "article-64b5712c",
      "64b5712c",
      "rhsa-2026-93472-important-nginx-security-update-37d92e"
    ]
  },
  {
    "slug": "rhsa-2026-93455-important-net-8-0-security-update-6eef3a87",
    "title": "RHSA-2026:93455: Important: .NET 8.0 security update",
    "summary": "An update for .NET 8.0 is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93455",
    "publishedAt": "2026-11-02T03:38:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93455-important-net-8-0-security-update",
      "article-6eef3a87",
      "6eef3a87",
      "rhsa-2026-93455-important-net-8-0-security-update-37d92e"
    ]
  },
  {
    "slug": "rhsa-2026-93451-important-libxtst-security-update-f6921eba",
    "title": "RHSA-2026:93451: Important: libXtst security update",
    "summary": "An update for libXtst is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93451",
    "publishedAt": "2026-11-02T03:37:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-93451-important-libxtst-security-update",
      "article-f6921eba",
      "f6921eba",
      "rhsa-2026-93451-important-libxtst-security-update-37d92e"
    ]
  },
  {
    "slug": "red-hat-patches-libsoup-flaws-in-rhel-8-8-0d35cbdc",
    "title": "Red Hat Patches Libsoup Flaws in RHEL 8.8",
    "summary": "Red Hat issued a security patch addressing vulnerabilities in the libsoup HTTP library on Enterprise Linux 8.8 specialized server distributions. Red Hat Product Security assigned an Important severity rating due to potential security risks impacting SAP Solutions and Telecommunications Update Service builds. Infrastructure operators managing RHEL 8.8 SAP and Telecommunications deployments should install available package updates to patch affected systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93466",
    "publishedAt": "2026-11-02T03:37:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-patches-libsoup-flaws-in-rhel-8-8",
      "article-0d35cbdc",
      "0d35cbdc",
      "red-hat-patches-libsoup-flaws-in-rhel-8-8-37d92e"
    ]
  }
];
