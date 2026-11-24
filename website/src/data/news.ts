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
    "slug": "peninsula-energy-halts-trading-after-mine-cyber-in-058b9715",
    "title": "Peninsula Energy Halts Trading After Mine Cyber Incident",
    "summary": "Peninsula Energy reported a cybersecurity incident at its Wyoming uranium project, temporarily disrupting operations and prompting a trading halt. The breach details remain undisclosed, but the company indicated that critical operational systems were impacted, raising concerns over supply chain continuity. Peninsula Energy is coordinating with cybersecurity teams and regulators to assess the incident and resume trading.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/peninsula-energy-halts-trading-after-cyber-incident-hits-us-uranium-mine/",
    "publishedAt": "2026-11-24T10:35:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "peninsula-energy-halts-trading-after-mine-cyber-in",
      "article-058b9715",
      "058b9715",
      "peninsula-energy-halts-trading-after-mine-cyber-in-2f1a40",
      "peninsula-energy-halts-trading-after-mine-cyber-incident"
    ]
  },
  {
    "slug": "cisa-flags-exploited-vmware-sap-cisco-apache-flaws-bca0d7dc",
    "title": "CISA Flags Exploited VMware, SAP, Cisco, Apache Flaws",
    "summary": "CISA added four exploited vulnerabilities affecting VMware vCenter, SAP NetWeaver, Cisco Expressway, and Apache Roller to its KEV catalog. All four flaws were actively exploited in the wild, prompting CISA to urge federal civilian agencies to patch by November 23. Administrators should apply vendor patches or workarounds immediately to mitigate the exploitation risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/cisa-warns-vmware-sap-cisco-apache-roller-flaws-exploited/",
    "publishedAt": "2026-11-24T10:00:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-flags-exploited-vmware-sap-cisco-apache-flaws",
      "article-bca0d7dc",
      "bca0d7dc",
      "cisa-flags-exploited-vmware-sap-cisco-apache-flaws-61fd44"
    ]
  },
  {
    "slug": "rhsa-2026-102880-important-imagemagick-security-up-37f0bc25",
    "title": "RHSA-2026:102880: Important: ImageMagick security update",
    "summary": "An update for ImageMagick is now available for Red Hat Enterprise Linux 7 Extended Lifecycle Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102880",
    "publishedAt": "2026-11-24T09:50:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102880-important-imagemagick-security-up",
      "article-37f0bc25",
      "37f0bc25",
      "rhsa-2026-102880-important-imagemagick-security-up-2ee175",
      "rhsa-2026-102880-important-imagemagick-security-update"
    ]
  },
  {
    "slug": "globetopper-faces-up-to-2-5-million-in-lost-revenu-cf27e5da",
    "title": "GlobeTopper faces up to $2.5 million in lost revenue after hackers steal $70,000 in gift cards",
    "summary": "According to a filing with the U.S. Securities and Exchange Commission (SEC), parent company iQSTEL said GlobeTopper detected the intrusion on October 22 and took the platform offline the next morning after spotting further unauthorized activity.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/globetopper-breach-gift-cards/",
    "publishedAt": "2026-11-24T09:33:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "globetopper-faces-up-to-2-5-million-in-lost-revenu",
      "article-cf27e5da",
      "cf27e5da",
      "globetopper-faces-up-to-2-5-million-in-lost-revenu-225ebb",
      "globetopper-faces-up-to-2-5-million-in-lost-revenue-after-ha"
    ]
  },
  {
    "slug": "rhsa-2026-102854-critical-ruby-security-update-77e427ff",
    "title": "RHSA-2026:102854: Critical: ruby security update",
    "summary": "An update for ruby is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102854",
    "publishedAt": "2026-11-24T09:09:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102854-critical-ruby-security-update",
      "article-77e427ff",
      "77e427ff",
      "rhsa-2026-102854-critical-ruby-security-update-2ee175"
    ]
  },
  {
    "slug": "anthropic-launches-claude-ship-for-ai-code-review-889e1e66",
    "title": "Anthropic Launches Claude Ship for AI Code Review",
    "summary": "Anthropic released Claude Ship, a beta AI suite that reviews pull requests, fixes issues, and approves changes per team policies. It merges code review, automated fixes, and policy enforcement to speed development while preserving quality. Deploying Claude Ship into CI/CD pipelines lets teams set approval thresholds and monitor false positives for safe integration.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/anthropic-claude-ship-beta/",
    "publishedAt": "2026-11-24T09:02:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-launches-claude-ship-for-ai-code-review",
      "article-889e1e66",
      "889e1e66",
      "anthropic-launches-claude-ship-for-ai-code-review-2420de"
    ]
  },
  {
    "slug": "nvidia-kernel-vulnerability-enables-hypervisor-out-031ac3d8",
    "title": "NVIDIA Kernel Vulnerability Enables Hypervisor Out-of-Bounds",
    "summary": "A local attacker with hypervisor access can exploit a missing Reverse Map Table check during IOMMU buffer access, enabling an out-of-bounds condition that may corrupt SEV-SNP guest memory. The flaw, CVE-2023-20585, is a local privilege escalation that could undermine guest isolation, with no public exploit yet. Ubuntu released kernel patches; administrators should update or backport the fix.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9192-1",
    "publishedAt": "2026-11-24T08:42:57.000Z",
    "cves": [
      "CVE-2023-20585"
    ],
    "additionalSources": [],
    "aliases": [
      "nvidia-kernel-vulnerability-enables-hypervisor-out",
      "article-031ac3d8",
      "031ac3d8",
      "nvidia-kernel-vulnerability-enables-hypervisor-out-7e7785",
      "nvidia-kernel-vulnerability-enables-hypervisor-out-of-bounds"
    ]
  },
  {
    "slug": "azure-kernel-vulnerabilities-threaten-system-integ-668f827b",
    "title": "Azure Kernel Vulnerabilities Threaten System Integrity",
    "summary": "Multiple kernel subsystems in Azure environments contain vulnerabilities that could allow an attacker to compromise system integrity. The flaws span device drivers, cryptographic APIs, and architecture layers, presenting a broad local privilege escalation risk without a public exploit. Ubuntu has issued kernel updates correcting these issues; administrators should apply the latest kernel or backport the patches to mitigate the threat.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9191-1",
    "publishedAt": "2026-11-24T08:42:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "azure-kernel-vulnerabilities-threaten-system-integ",
      "article-668f827b",
      "668f827b",
      "azure-kernel-vulnerabilities-threaten-system-integ-7e7789",
      "azure-kernel-vulnerabilities-threaten-system-integrity"
    ]
  },
  {
    "slug": "kernel-vulnerabilities-threaten-system-integrity-1ef945b8",
    "title": "Kernel Vulnerabilities Threaten System Integrity",
    "summary": "A range of kernel subsystems in Linux contain vulnerabilities that could enable attackers to compromise system integrity. The flaws affect architecture layers, device drivers, and file system components, posing a broad local privilege escalation risk. Ubuntu released kernel patches addressing these issues; administrators should update to the latest kernel or backport the fixes.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9190-1",
    "publishedAt": "2026-11-24T08:41:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kernel-vulnerabilities-threaten-system-integrity",
      "article-1ef945b8",
      "1ef945b8",
      "kernel-vulnerabilities-threaten-system-integrity-7e778c"
    ]
  },
  {
    "slug": "linux-kernel-vulnerabilities-patching-update-relea-28a515f1",
    "title": "Linux Kernel Vulnerabilities Patching Update Released",
    "summary": "The Linux kernel contains multiple vulnerabilities, including CVE-2026-99218, that could allow attackers to compromise affected systems. These flaws span cryptographic API, file system infrastructure, key management, io_uring, PID namespace, and tracing subsystems, potentially enabling privilege escalation or arbitrary code execution. Kernel maintainers have released an update patching all listed CVEs; administrators should apply the update promptly.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9165-2",
    "publishedAt": "2026-11-24T08:40:41.000Z",
    "cves": [
      "CVE-2026-99218"
    ],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-vulnerabilities-patching-update-relea",
      "article-28a515f1",
      "28a515f1",
      "linux-kernel-vulnerabilities-patching-update-relea-7e78d7",
      "linux-kernel-vulnerabilities-patching-update-released"
    ]
  },
  {
    "slug": "microsoft-uncovers-linux-kernel-vulnerabilities-in-7a22f5cf",
    "title": "Microsoft Uncovers Linux Kernel Vulnerabilities in Azure",
    "summary": "Microsoft identified multiple Linux kernel flaws in Azure that could allow attackers to compromise affected systems. The vulnerabilities affect IPv4 networking, Ethernet bridge, Netfilter, SCTP, and XFRM subsystems, and are catalogued as CVE-2026-64564, CVE-2026-98432, and CVE-2026-99999, potentially enabling remote code execution. Administrators should apply the latest kernel updates or install the provided patches to eliminate the exploitation vector.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9170-4",
    "publishedAt": "2026-11-24T08:40:41.000Z",
    "cves": [
      "CVE-2026-64564",
      "CVE-2026-98432",
      "CVE-2026-99999"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-uncovers-linux-kernel-vulnerabilities-in",
      "article-7a22f5cf",
      "7a22f5cf",
      "microsoft-uncovers-linux-kernel-vulnerabilities-in-7e7875",
      "microsoft-uncovers-linux-kernel-vulnerabilities-in-azure"
    ]
  },
  {
    "slug": "microsoft-365-copilot-cve-2026-50691-enables-privi-350e8b5e",
    "title": "Microsoft 365 Copilot CVE-2026-50691 Enables Privilege Escalation",
    "summary": "Microsoft disclosed CVE-2026-50691, a critical flaw in Microsoft 365 Copilot that lets a low-privileged user elevate network permissions without user interaction. Scored 9.9 on CVSS 3.1, the bug exploits a logic error in Copilot’s permission model, enabling unauthorized access to protected resources. Microsoft urges customers to apply the November 19 patch via Microsoft Update or by updating the Copilot add-in.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsoft-365-copilot-flaw/",
    "publishedAt": "2026-11-24T08:28:18.000Z",
    "cves": [
      "CVE-2026-50691"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-365-copilot-cve-2026-50691-enables-privi",
      "article-350e8b5e",
      "350e8b5e",
      "microsoft-365-copilot-cve-2026-50691-enables-privi-da2520",
      "microsoft-365-copilot-cve-2026-50691-enables-privilege-escal"
    ]
  },
  {
    "slug": "rhsa-2026-102845-important-cockpit-security-update-99557e81",
    "title": "RHSA-2026:102845: Important: cockpit security update",
    "summary": "An update for cockpit is now available for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102845",
    "publishedAt": "2026-11-24T08:14:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102845-important-cockpit-security-update",
      "article-99557e81",
      "99557e81",
      "rhsa-2026-102845-important-cockpit-security-update-2ee175"
    ]
  },
  {
    "slug": "rhsa-2026-102841-important-webkit2gtk3-security-up-2ea55ced",
    "title": "RHSA-2026:102841: Important: webkit2gtk3 security update",
    "summary": "An update for webkit2gtk3 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102841",
    "publishedAt": "2026-11-24T08:11:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102841-important-webkit2gtk3-security-up",
      "article-2ea55ced",
      "2ea55ced",
      "rhsa-2026-102841-important-webkit2gtk3-security-up-2ee175",
      "rhsa-2026-102841-important-webkit2gtk3-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-102852-important-python-oauthlib-securit-0ea1961c",
    "title": "RHSA-2026:102852: Important: python-oauthlib security update",
    "summary": "An update for python-oauthlib is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102852",
    "publishedAt": "2026-11-24T08:06:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102852-important-python-oauthlib-securit",
      "article-0ea1961c",
      "0ea1961c",
      "rhsa-2026-102852-important-python-oauthlib-securit-2ee175",
      "rhsa-2026-102852-important-python-oauthlib-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-102842-important-webkit2gtk3-security-up-41e90b35",
    "title": "RHSA-2026:102842: Important: webkit2gtk3 security update",
    "summary": "An update for webkit2gtk3 is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102842",
    "publishedAt": "2026-11-24T08:04:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102842-important-webkit2gtk3-security-up",
      "article-41e90b35",
      "41e90b35",
      "rhsa-2026-102842-important-webkit2gtk3-security-up-2ee175",
      "rhsa-2026-102842-important-webkit2gtk3-security-update"
    ]
  },
  {
    "slug": "red-hat-recommends-python-oauthlib-patch-for-rhel-d6553110",
    "title": "Red Hat Recommends Python-OAuthlib Patch for RHEL 10.2",
    "summary": "Red Hat released an important security update for python-oauthlib on RHEL 10.2 Extended Update Support, targeting authentication library flaws. The update fixes multiple high-severity bugs that could allow credential misuse or unauthorized token issuance, though CVE identifiers are not disclosed. Apply RHSA-2026:102851 via the Customer Portal or use yum/dnf to install the latest python-oauthlib package immediately.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102851",
    "publishedAt": "2026-11-24T07:55:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-recommends-python-oauthlib-patch-for-rhel",
      "article-d6553110",
      "d6553110",
      "red-hat-recommends-python-oauthlib-patch-for-rhel-2ee175",
      "red-hat-recommends-python-oauthlib-patch-for-rhel-10-2"
    ]
  },
  {
    "slug": "red-hat-recommends-php-update-for-rhel-9-2-7558e27e",
    "title": "Red Hat Recommends PHP Update for RHEL 9.2",
    "summary": "A critical PHP update is released for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions, fixing runtime vulnerabilities. The patch addresses multiple high-severity flaws that could enable remote code execution or privilege escalation, though CVE IDs are not listed. Red Hat advises applying RHSA-2026:102847 immediately via the Customer Portal or using yum/dnf to install the updated PHP package.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102847",
    "publishedAt": "2026-11-24T07:50:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-recommends-php-update-for-rhel-9-2",
      "article-7558e27e",
      "7558e27e",
      "red-hat-recommends-php-update-for-rhel-9-2-2ee175"
    ]
  },
  {
    "slug": "ai-hackers-access-3-392-accounts-decrypt-50-ssh-ke-f102eb77",
    "title": "AI Hackers Access 3,392 Accounts, Decrypt 50 SSH Keys",
    "summary": "An attacker employing the CyberStrikeAI framework accessed 3,392 user accounts and active session tokens during a four-day cloud intrusion at two AWS accounts and seven EKS clusters in October 2026. The operator also decrypted a bastion host database, recovering 50 SSH private keys, exposing critical credentials. Security teams should isolate affected accounts, rotate credentials, and investigate the breach.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ai-powered-hackers/",
    "publishedAt": "2026-11-24T07:47:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-hackers-access-3-392-accounts-decrypt-50-ssh-ke",
      "article-f102eb77",
      "f102eb77",
      "ai-hackers-access-3-392-accounts-decrypt-50-ssh-ke-511f7e",
      "ai-hackers-access-3-392-accounts-decrypt-50-ssh-keys"
    ]
  },
  {
    "slug": "top-attack-path-management-tools-ranked-for-2026-2ec886b3",
    "title": "Top Attack Path Management Tools Ranked for 2026",
    "summary": "Cyber Security News evaluated defensive tools, ranking the top ten attack path management solutions available in 2026. These tools analyze complex attack chains by converting vulnerability lists into graphs mapping misconfigurations, excessive permissions, and credential reuse. Security teams can deploy attack path management software to identify critical choke points and remediate high-risk operational vectors efficiently.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/best-attack-path-management/",
    "publishedAt": "2026-11-24T07:46:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "top-attack-path-management-tools-ranked-for-2026",
      "article-2ec886b3",
      "2ec886b3",
      "top-attack-path-management-tools-ranked-for-2026-a31adc"
    ]
  },
  {
    "slug": "hackers-plant-backdoors-in-6-wordpress-plugins-to-1ee8819b",
    "title": "Hackers Plant Backdoors in 6 WordPress Plugins to Steal Passwords and Take Over Websites",
    "summary": "Hackers planted a remote-control backdoor in nine versions of six WordPress plugins from WP connect on November 22, 2026. The malware could let an attacker steal password hashes, run commands, and take over a website. But WordPress.org blocked the tainted versions before distributing them and closed all six plugins that evening.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/backdoors-in-6-wordpress-plugins/",
    "publishedAt": "2026-11-24T07:33:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-plant-backdoors-in-6-wordpress-plugins-to",
      "article-1ee8819b",
      "1ee8819b",
      "hackers-plant-backdoors-in-6-wordpress-plugins-to-25e2cf",
      "hackers-plant-backdoors-in-6-wordpress-plugins-to-steal-pass"
    ]
  },
  {
    "slug": "elecbrakes-bluetooth-flaw-enables-remote-brake-con-1f770d18",
    "title": "Elecbrakes Bluetooth Flaw Enables Remote Brake Control",
    "summary": "A critical Bluetooth flaw in Elecbrakes trailer brake controllers, CVE-2026-96805, lets attackers within range manipulate brakes without pairing. Rated 9.6 CVSS, the flaw exploits command injection in Bluetooth, enabling unauthenticated remote brake control. Manufacturers should push firmware updates disabling unsecured Bluetooth commands; users must avoid exposing controllers to untrusted devices until patched.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-bluetooth-flaw/",
    "publishedAt": "2026-11-24T07:21:45.000Z",
    "cves": [
      "CVE-2026-96805"
    ],
    "additionalSources": [],
    "aliases": [
      "elecbrakes-bluetooth-flaw-enables-remote-brake-con",
      "article-1f770d18",
      "1f770d18",
      "elecbrakes-bluetooth-flaw-enables-remote-brake-con-ff7b14",
      "elecbrakes-bluetooth-flaw-enables-remote-brake-control"
    ]
  },
  {
    "slug": "red-hat-issues-important-security-update-for-maria-9b915824",
    "title": "Red Hat Issues Important Security Update for MariaDB",
    "summary": "Red Hat released a security update addressing security flaws in the mariadb:11.8 module for Red Hat Enterprise Linux 9. Red Hat Product Security rated the operational impact of these vulnerabilities as Important based on Common Vulnerability Scoring System metrics. System administrators should apply the RHSA-2026:102830 advisory updates to mitigate potential exploitation risks across enterprise RHEL environments.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102830",
    "publishedAt": "2026-11-24T07:08:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-security-update-for-maria",
      "article-9b915824",
      "9b915824",
      "red-hat-issues-important-security-update-for-maria-2ee175",
      "red-hat-issues-important-security-update-for-mariadb"
    ]
  },
  {
    "slug": "red-hat-issues-important-webkit2gtk3-update-778a739a",
    "title": "Red Hat Issues Important WebKit2GTK3 Update",
    "summary": "Red Hat released an important security update for webkit2gtk3 on RHEL 9.2 for SAP Solutions. The patch addresses undisclosed vulnerabilities that could enable code execution or system compromise, with CVSS scores linked in the CVE references and mitigate potential privilege escalation. Administrators should apply the update immediately to eliminate the exploitation vector.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102838",
    "publishedAt": "2026-11-24T07:07:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-webkit2gtk3-update",
      "article-778a739a",
      "778a739a",
      "red-hat-issues-important-webkit2gtk3-update-2ee175"
    ]
  },
  {
    "slug": "hackers-compromise-check-point-management-servers-360328a1",
    "title": "Hackers Compromise Check Point Management Servers",
    "summary": "Hackers have compromised Check Point Security Management Servers, which store firewall rule sets that govern corporate traffic filtering. The ongoing campaign has affected at least 22 organizations worldwide, and attackers retain active access to many servers, exposing critical network controls. Check Point recommends applying the latest firmware patches, disabling unused management interfaces, and monitoring for anomalous configuration changes.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/check-point-security-management-servers/",
    "publishedAt": "2026-11-24T07:03:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-compromise-check-point-management-servers",
      "article-360328a1",
      "360328a1",
      "hackers-compromise-check-point-management-servers-4c8a3c"
    ]
  },
  {
    "slug": "google-cloud-ciso-discusses-agentic-ai-in-soc-f18561ce",
    "title": "Google Cloud CISO Discusses Agentic AI in SOC",
    "summary": "Google Cloud CISO Chris Betz spoke about agentic AI in security operations during a Help Net Security interview. He noted that automation lets attackers traverse networks in minutes, questioned junior analyst roles, and urged reassessment of controls and board oversight. Betz advised organizations to evolve SOC workflows with AI-driven threat hunting and governance to counter increasingly stealthy espionage groups.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/chris-betz-google-agentic-ai-security/",
    "publishedAt": "2026-11-24T07:00:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-cloud-ciso-discusses-agentic-ai-in-soc",
      "article-f18561ce",
      "f18561ce",
      "google-cloud-ciso-discusses-agentic-ai-in-soc-72b4c2"
    ]
  },
  {
    "slug": "ransomware-groups-multiply-despite-fewer-victim-pa-db29ac26",
    "title": "Ransomware Groups Multiply Despite Fewer Victim Payments",
    "summary": "Check Point Research’s State of Ransomware Q3 2026 report lists 2,830 victims on data-leak sites, the highest quarterly total on record. July, August, and September accounted for 964, 1,042, and 824 victims respectively, indicating a sustained expansion of active ransomware groups. The report shows declining payments but continued brand proliferation, stressing the need for stronger defensive measures.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/check-point-ransomware-attacks-q3-2026-report/",
    "publishedAt": "2026-11-24T06:30:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ransomware-groups-multiply-despite-fewer-victim-pa",
      "article-db29ac26",
      "db29ac26",
      "ransomware-groups-multiply-despite-fewer-victim-pa-78ca87",
      "ransomware-groups-multiply-despite-fewer-victim-payments"
    ]
  },
  {
    "slug": "aws-european-sovereign-cloud-architecture-and-comp-1475af38",
    "title": "AWS European Sovereign Cloud: Architecture and Compliance Overview",
    "summary": "AWS European Sovereign Cloud offers infrastructure designed to meet European data sovereignty requirements, providing isolated regions and compliance with local regulations. The architecture provides physical and logical separation, encryption controls, and audit capabilities, enabling organizations to retain full data control while leveraging AWS services. Customers can evaluate the platform against certifications and compliance frameworks to determine suitability for sensitive workloads.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/aws-european-sovereign-cloud-details/",
    "publishedAt": "2026-11-24T06:15:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "aws-european-sovereign-cloud-architecture-and-comp",
      "article-1475af38",
      "1475af38",
      "aws-european-sovereign-cloud-architecture-and-comp-ae595c",
      "aws-european-sovereign-cloud-architecture-and-compliance-ove"
    ]
  },
  {
    "slug": "red-hat-releases-cockpit-security-update-bbd94913",
    "title": "Red Hat Releases Cockpit Security Update",
    "summary": "Red Hat issued an Important security update for the cockpit component on Enterprise Linux 9.4 Update Services for SAP Solutions. The advisory cites several CVEs with CVSS scores, but no specific CVE ID is listed. Administrators should apply the cockpit update immediately to mitigate the identified vulnerabilities and consult the CVE links for detailed impact.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102813",
    "publishedAt": "2026-11-24T06:12:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-cockpit-security-update",
      "article-bbd94913",
      "bbd94913",
      "red-hat-releases-cockpit-security-update-2ee174"
    ]
  },
  {
    "slug": "splitsecure-unveils-secret-splitting-access-contro-2a84a83e",
    "title": "SplitSecure Unveils Secret-Splitting Access Control Platform",
    "summary": "SplitSecure announced a new access control platform built on secret-splitting technology to replace password managers, PAM, and vaults. The architecture supports passwords, passkeys, one-time codes, SAML & OIDC federation, and SSH, enabling secure credential handling for humans and AI agents. Organizations should evaluate the platform for integration with existing identity systems and assess its impact on compliance and operational workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/splitsecure-launches-new-access-control-architecture-for-humans-and-ai-agents/",
    "publishedAt": "2026-11-24T06:07:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "splitsecure-unveils-secret-splitting-access-contro",
      "article-2a84a83e",
      "2a84a83e",
      "splitsecure-unveils-secret-splitting-access-contro-5b17cc",
      "splitsecure-unveils-secret-splitting-access-control-platform"
    ]
  },
  {
    "slug": "red-hat-issues-critical-php-7-4-security-update-216b4966",
    "title": "Red Hat Issues Critical PHP 7.4 Security Update",
    "summary": "Red Hat released a Critical security update for the php:7.4 module on Enterprise Linux 8.6 Advanced Mission Critical and Extended Update Support. The advisory references multiple CVEs with CVSS scores, but no specific CVE ID is provided in the description. Administrators should apply the php:7.4 update immediately to address the critical vulnerabilities and review the CVE links for detailed impact.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102823",
    "publishedAt": "2026-11-24T06:05:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-php-7-4-security-update",
      "article-216b4966",
      "216b4966",
      "red-hat-issues-critical-php-7-4-security-update-2ee174"
    ]
  },
  {
    "slug": "openai-cisco-launch-ai-assisted-linux-shield-tool-f5687079",
    "title": "OpenAI, Cisco Launch AI-Assisted Linux Shield Tool",
    "summary": "OpenAI and Cisco unveiled Shirudo, an AI-assisted Linux runtime that deploys temporary eBPF controls to block exploit behaviors before patches. The system generates programs that intercept vulnerable system calls, preventing exploitation without rebooting and narrowing the exposure window. Deploy Shirudo on exposed hosts, monitor logs, and apply vendor patches promptly to eliminate the root flaw.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/openai-and-cisco-unveil-ai-assisted.html",
    "publishedAt": "2026-11-24T06:02:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-cisco-launch-ai-assisted-linux-shield-tool",
      "article-f5687079",
      "f5687079",
      "openai-cisco-launch-ai-assisted-linux-shield-tool-7e44e4"
    ]
  },
  {
    "slug": "cisa-adds-actively-exploited-n-able-mailassure-ssr-20bd190c",
    "title": "CISA Adds Actively Exploited N-able MailAssure SSRF Flaw to KEV Catalog",
    "summary": "CISA added the critical SSRF vulnerability CVE-2026-134624 in N-able MailAssure's LDAP synchronization to its Known Exploited Vulnerabilities catalog, confirming active exploitation. The flaw allows authenticated attackers to force server-side requests to internal resources, enabling data exposure and lateral movement within protected networks. Administrators must immediately apply N-able's patch and enforce strict LDAP restrictions to mitigate the SSRF risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-n-able-mailassure-flaw.html",
    "publishedAt": "2026-11-24T06:02:45.000Z",
    "cves": [
      "CVE-2026-134624"
    ],
    "additionalSources": [
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/critical-n-able-mail-assure-ssrf-vulnerability/"
      }
    ],
    "aliases": [
      "cisa-adds-actively-exploited-n-able-mailassure-ssr",
      "article-20bd190c",
      "20bd190c",
      "cisa-adds-actively-exploited-n-able-mailassure-ssr-55f90e",
      "cisa-adds-actively-exploited-n-able-mailassure-ssrf-flaw-to-"
    ]
  },
  {
    "slug": "openai-cisco-release-shirudo-to-shield-linux-until-1498088f",
    "title": "OpenAI, Cisco Release Shirudo to Shield Linux Until Patches",
    "summary": "OpenAI and Cisco released Shirudo, a Linux runtime that deploys temporary eBPF controls to block exploit behaviors while patches are pending. Shirudo generates small programs that intercept vulnerable system calls, preventing exploitation without rebooting and narrowing the exposure window. Deploy Shirudo on exposed hosts, monitor logs, and apply vendor patches promptly to eliminate the root flaw.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/cisco-openai-shirudo/",
    "publishedAt": "2026-11-24T06:00:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-cisco-release-shirudo-to-shield-linux-until",
      "article-1498088f",
      "1498088f",
      "openai-cisco-release-shirudo-to-shield-linux-until-19958a",
      "openai-cisco-release-shirudo-to-shield-linux-until-patches"
    ]
  },
  {
    "slug": "node-js-simple-git-rce-vulnerability-cve-2026-1348-d005401f",
    "title": "Node.js simple-git RCE Vulnerability CVE-2026-134815",
    "summary": "A critical flaw in the Node.js simple-git library allows attackers to execute arbitrary commands on servers that pass untrusted input into Git arguments. Tracked as CVE-2026-134815, the vulnerability is an argument injection weakness present in simple-git versions before 4.1.0, enabling remote code execution without authentication. Users should upgrade to simple-git 4.1.0 or later to mitigate the flaw.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/node-js-simple-git-library-flaw/",
    "publishedAt": "2026-11-24T05:55:37.000Z",
    "cves": [
      "CVE-2026-134815"
    ],
    "additionalSources": [],
    "aliases": [
      "node-js-simple-git-rce-vulnerability-cve-2026-1348",
      "article-d005401f",
      "d005401f",
      "node-js-simple-git-rce-vulnerability-cve-2026-1348-26fd16",
      "node-js-simple-git-rce-vulnerability-cve-2026-134815"
    ]
  },
  {
    "slug": "it-delegates-password-management-while-maintaining-599336a7",
    "title": "IT Delegates Password Management While Maintaining Control",
    "summary": "IT departments often delegate password management to business units, creating accounts that may be unknown to central security teams. This practice can leave IT responsible for credentials it cannot monitor, increasing risk when personnel changes or external contractors access shared accounts. Implementing centralized identity governance, enforcing least-privilege access, and requiring IT involvement in account provisioning can mitigate these risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/passwork-enterprise-password-management/",
    "publishedAt": "2026-11-24T05:30:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "it-delegates-password-management-while-maintaining",
      "article-599336a7",
      "599336a7",
      "it-delegates-password-management-while-maintaining-2009d9",
      "it-delegates-password-management-while-maintaining-control"
    ]
  },
  {
    "slug": "red-hat-issues-important-libxi-security-update-0dc42e1f",
    "title": "Red Hat Issues Important libXi Security Update",
    "summary": "Red Hat released an important security update for the libXi library on RHEL 9.6 Extended Update Support. The update addresses unspecified vulnerabilities in libXi, with Red Hat Product Security rating the fix as Important and providing CVSS scores via CVE references. Administrators should apply the update promptly to mitigate potential exploitation of the libXi flaws.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102798",
    "publishedAt": "2026-11-24T05:09:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-libxi-security-update",
      "article-0dc42e1f",
      "0dc42e1f",
      "red-hat-issues-important-libxi-security-update-2ee172"
    ]
  },
  {
    "slug": "red-hat-issues-important-skopeo-security-update-81f307ba",
    "title": "Red Hat Issues Important skopeo Security Update",
    "summary": "Red Hat released an important security update for the skopeo tool on RHEL 9.8 Extended Update Support. The update addresses unspecified vulnerabilities in skopeo, with Red Hat Product Security rating the fix as Important and providing CVSS scores via CVE references. Administrators should apply the update promptly to mitigate potential exploitation of the skopeo flaws.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102806",
    "publishedAt": "2026-11-24T05:09:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-skopeo-security-update",
      "article-81f307ba",
      "81f307ba",
      "red-hat-issues-important-skopeo-security-update-2ee174"
    ]
  },
  {
    "slug": "red-hat-issues-important-libxi-update-for-rhel-9-4-feaf3316",
    "title": "Red Hat Issues Important libXi Update for RHEL 9.4",
    "summary": "Red Hat issued an Important security update for libXi on RHEL 9.4 Update Services for SAP Solutions. The patch addresses libXi vulnerabilities, with CVSS base scores linked via CVE references, and is rated Important by Product Security. Users should apply the update promptly to mitigate the weaknesses and meet SAP solution compliance.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102799",
    "publishedAt": "2026-11-24T05:08:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-libxi-update-for-rhel-9-4",
      "article-feaf3316",
      "feaf3316",
      "red-hat-issues-important-libxi-update-for-rhel-9-4-2ee172"
    ]
  },
  {
    "slug": "red-hat-releases-tigervnc-update-for-rhel-8-6-f2a1fd5e",
    "title": "Red Hat Releases Tigervnc Update for RHEL 8.6",
    "summary": "Red Hat issued an important security update for the Tigervnc remote desktop server on RHEL 8.6 Advanced and Extended Update Support. The update addresses multiple vulnerabilities identified in Tigervnc, each assigned a CVSS base score and linked to CVE identifiers in the advisory references. Red Hat recommends applying the patch immediately to mitigate potential exploitation and maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102805",
    "publishedAt": "2026-11-24T05:07:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-tigervnc-update-for-rhel-8-6",
      "article-f2a1fd5e",
      "f2a1fd5e",
      "red-hat-releases-tigervnc-update-for-rhel-8-6-2ee174"
    ]
  },
  {
    "slug": "stalwart-1-2-0-adds-full-exchange-protocol-support-23b9d255",
    "title": "Stalwart 1.2.0 Adds Full Exchange Protocol Support",
    "summary": "Stalwart 1.2.0 introduces full Exchange-compatible protocols, enabling MAPI over HTTP, EWS, ActiveSync, and Autodiscover for Outlook, Apple Mail, and mobile clients. The open-source mail server ships under the AGPL Community edition, offering mail, calendar, contacts, tasks, and notes. Administrators can deploy Stalwart as a drop-in replacement for Microsoft Exchange, but should evaluate compatibility with existing client configurations before migration.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/stalwart-microsoft-exchange-replacement/",
    "publishedAt": "2026-11-24T05:00:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "stalwart-1-2-0-adds-full-exchange-protocol-support",
      "article-23b9d255",
      "23b9d255",
      "stalwart-1-2-0-adds-full-exchange-protocol-support-1a1a56"
    ]
  },
  {
    "slug": "rhsa-2026-102802-important-libxi-security-update-cfea5ec0",
    "title": "RHSA-2026:102802: Important: libXi security update",
    "summary": "An update for libXi is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102802",
    "publishedAt": "2026-11-24T04:22:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102802-important-libxi-security-update",
      "article-cfea5ec0",
      "cfea5ec0",
      "rhsa-2026-102802-important-libxi-security-update-2ee174"
    ]
  },
  {
    "slug": "red-hat-releases-libxi-security-update-for-rhel-8-01b8354e",
    "title": "Red Hat Releases libXi Security Update for RHEL 8.6",
    "summary": "Red Hat issued a security update for the libXi library on RHEL 8.6 Advanced Mission Critical and Extended Update Support, addressing identified vulnerabilities. The update carries an Important impact rating; CVSS base scores are available via CVE links, but no active exploitation is reported. Red Hat recommends applying the patch through standard update channels immediately.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102803",
    "publishedAt": "2026-11-24T04:20:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-libxi-security-update-for-rhel-8",
      "article-01b8354e",
      "01b8354e",
      "red-hat-releases-libxi-security-update-for-rhel-8-2ee174",
      "red-hat-releases-libxi-security-update-for-rhel-8-6"
    ]
  },
  {
    "slug": "red-hat-issues-libxi-update-for-rhel-9-2-sap-ab037c79",
    "title": "Red Hat Issues libXi Update for RHEL 9.2 SAP",
    "summary": "Red Hat released a security update for the libXi library on RHEL 9.2 Update Services for SAP Solutions, addressing identified vulnerabilities. The patch is rated Important; CVSS base scores are provided via CVE links, with no reported active exploitation. Apply the update through standard update channels to mitigate the identified flaws.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102800",
    "publishedAt": "2026-11-24T04:17:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-libxi-update-for-rhel-9-2-sap",
      "article-ab037c79",
      "ab037c79",
      "red-hat-issues-libxi-update-for-rhel-9-2-sap-2ee174"
    ]
  },
  {
    "slug": "openai-and-cisco-release-shirudo-to-block-linux-ex-1663e286",
    "title": "OpenAI and Cisco Release Shirudo to Block Linux Exploits",
    "summary": "OpenAI and Cisco introduced Shirudo, an open-source AI-driven tool that blocks specific exploits on live Linux servers while teams test and deploy permanent patches. In a controlled test, a Codex-generated shield prevented a Java4Shell exploit against Elasticsearch without service interruption. Security teams should deploy Shirudo immediately to mitigate known exploits and reduce patch deployment windows.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/openai-and-cisco-launch-shirudo/",
    "publishedAt": "2026-11-24T03:51:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-and-cisco-release-shirudo-to-block-linux-ex",
      "article-1663e286",
      "1663e286",
      "openai-and-cisco-release-shirudo-to-block-linux-ex-d4a78b",
      "openai-and-cisco-release-shirudo-to-block-linux-exploits"
    ]
  },
  {
    "slug": "rhsa-2026-102715-critical-ruby-security-bug-fix-an-93e531fa",
    "title": "RHSA-2026:102715: Critical: ruby security, bug fix, and enhancement update",
    "summary": "An update for ruby is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102715",
    "publishedAt": "2026-11-24T03:09:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102715-critical-ruby-security-bug-fix-an",
      "article-93e531fa",
      "93e531fa",
      "rhsa-2026-102715-critical-ruby-security-bug-fix-an-2ee171",
      "rhsa-2026-102715-critical-ruby-security-bug-fix-and-enhancem"
    ]
  },
  {
    "slug": "red-hat-issues-critical-ruby4-0-security-update-59a21035",
    "title": "Red Hat Issues Critical ruby4.0 Security Update",
    "summary": "Red Hat issued a critical security update for the ruby4.0 package on RHEL 10, addressing several high-severity bugs. The advisory references CVSS base scores for each vulnerability, though specific CVE identifiers are not disclosed in the notice. Administrators should apply the ruby4.0 update promptly to prevent exploitation of the identified weaknesses.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102714",
    "publishedAt": "2026-11-24T03:09:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-ruby4-0-security-update",
      "article-59a21035",
      "59a21035",
      "red-hat-issues-critical-ruby4-0-security-update-2ee171"
    ]
  },
  {
    "slug": "chromeos-stable-channel-updated-to-os-16868-29-0-adb54fa3",
    "title": "ChromeOS Stable Channel Updated to OS 16868.29.0",
    "summary": "Google updated the ChromeOS Stable channel to OS version 16868.29.0 and browser version 158.0.8127.98 for most devices, including ChromeOS Flex. The update includes routine security and stability improvements, with no new vulnerabilities disclosed. Users should apply the update via the standard ChromeOS update mechanism regularly to maintain current security posture.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-chromeos_01679457768.html",
    "publishedAt": "2026-11-24T02:54:25.241Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chromeos-stable-channel-updated-to-os-16868-29-0",
      "article-adb54fa3",
      "adb54fa3",
      "chromeos-stable-channel-updated-to-os-16868-29-0-616ab3"
    ]
  },
  {
    "slug": "red-hat-releases-critical-php-7-4-security-update-99077dba",
    "title": "Red Hat Releases Critical php:7.4 Security Update",
    "summary": "Red Hat released a critical security update for the php:7.4 module on RHEL 8.8 Update Services for SAP Solutions and the Telecommunications Update Service. The update addresses high-severity vulnerabilities, each assigned a CVSS base score, but no specific CVE identifiers are listed. Red Hat recommends applying the php:7.4 update immediately to mitigate potential remote code execution risks.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102713",
    "publishedAt": "2026-11-24T02:38:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-php-7-4-security-update",
      "article-99077dba",
      "99077dba",
      "red-hat-releases-critical-php-7-4-security-update-2ee171"
    ]
  },
  {
    "slug": "ongoing-scanning-detected-on-banatsync-subnet-baab0068",
    "title": "Ongoing Scanning Detected on BANATSYNC Subnet",
    "summary": "SANS Internet Storm Center reports continuous scanning from subnet 109.160.32.0/24, assigned to BANATSYNC SRL, a Romanian web hosting and VPS provider. DShield sensor data shows persistent probing over 90 days, suggesting ongoing reconnaissance or potential exploitation attempts against the subnet's hosts. Security teams should monitor for suspicious activity, enforce rate limiting, and harden hosts to mitigate potential threats.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33550",
    "publishedAt": "2026-11-24T02:32:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ongoing-scanning-detected-on-banatsync-subnet",
      "article-baab0068",
      "baab0068",
      "ongoing-scanning-detected-on-banatsync-subnet-57dd81"
    ]
  },
  {
    "slug": "isc-stormcast-podcast-released-for-nov-24-2026-fe0f5f93",
    "title": "ISC Stormcast Podcast Released for Nov 24, 2026",
    "summary": "The ISC Stormcast podcast released for Tuesday, November 24, 2026, delivers a concise briefing on the latest cyber threat landscape. The episode covers emerging malware trends, nation-state activity, and defensive tactics, providing analysts with actionable insights for the week. Listeners can access the recording via the ISC website or subscribe to the podcast feed for real-time updates.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33552",
    "publishedAt": "2026-11-24T02:00:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isc-stormcast-podcast-released-for-nov-24-2026",
      "article-fe0f5f93",
      "fe0f5f93",
      "isc-stormcast-podcast-released-for-nov-24-2026-57dd81"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-update-for-rhel-9-6-eus-b5a282ce",
    "title": "Red Hat Releases Kernel Update for RHEL 9.6 EUS",
    "summary": "Red Hat issued a kernel update for RHEL 9.6 EUS to fix multiple security flaws that could enable privilege escalation or denial of service. Each fix carries a CVSS base score, though no CVE IDs or public exploits are referenced. Red Hat advises immediate application of the patch via standard repositories to ensure all security enhancements are installed.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102711",
    "publishedAt": "2026-11-24T01:25:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-update-for-rhel-9-6-eus",
      "article-b5a282ce",
      "b5a282ce",
      "red-hat-releases-kernel-update-for-rhel-9-6-eus-2ee171"
    ]
  },
  {
    "slug": "red-hat-issues-kernel-update-for-rhel-9-8-eus-a6f19b1d",
    "title": "Red Hat Issues Kernel Update for RHEL 9.8 EUS",
    "summary": "Red Hat issued a kernel update for RHEL 9.8 EUS to fix vulnerabilities that could enable privilege escalation or denial of service. Each fix carries a CVSS base score, but no CVE IDs or public exploits are referenced. Red Hat advises applying the patch via standard repositories immediately to incorporate all security improvements.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102710",
    "publishedAt": "2026-11-24T01:23:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-kernel-update-for-rhel-9-8-eus",
      "article-a6f19b1d",
      "a6f19b1d",
      "red-hat-issues-kernel-update-for-rhel-9-8-eus-2ee171"
    ]
  },
  {
    "slug": "red-hat-updates-multiple-container-tools-on-rhel-9-ad6179bc",
    "title": "Red Hat Updates Multiple Container Tools on RHEL 9.4",
    "summary": "Red Hat released a security update for buildah, conmon, container-selinux, containernetworking-plugins, containers-common, crun, fuse-overlayfs, gvisor-tap-vsock, oci-seccomp-bpf-hook, podman, runc, skopeo, and slirp4netns on RHEL 9.4. The update fixes multiple vulnerabilities, each with a CVSS base score, and is rated as Important by Red Hat Product Security. Apply the update via RHEL 9.4 Update Services for SAP Solutions to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102708",
    "publishedAt": "2026-11-24T01:10:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-multiple-container-tools-on-rhel-9",
      "article-ad6179bc",
      "ad6179bc",
      "red-hat-updates-multiple-container-tools-on-rhel-9-2ee170",
      "red-hat-updates-multiple-container-tools-on-rhel-9-4"
    ]
  },
  {
    "slug": "red-hat-updates-kernel-for-rhel-8-8-sap-3518b097",
    "title": "Red Hat Updates Kernel for RHEL 8.8 SAP",
    "summary": "Red Hat issued a kernel update for RHEL 8.8 SAP and Telecom to fix vulnerabilities that could enable privilege escalation or denial of service. Each fix carries a CVSS base score, but no CVE IDs or public exploits are cited. Red Hat recommends applying the patch via standard repositories immediately to incorporate all security improvements.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102709",
    "publishedAt": "2026-11-24T01:10:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-kernel-for-rhel-8-8-sap",
      "article-3518b097",
      "3518b097",
      "red-hat-updates-kernel-for-rhel-8-8-sap-2ee170"
    ]
  },
  {
    "slug": "red-hat-releases-security-update-for-container-too-daf1c6c4",
    "title": "Red Hat Releases Security Update for Container Tools",
    "summary": "Red Hat released the 3.3.4 build of Apicurio Registry container images for OpenShift, providing updated components and security patches. The update includes security fixes and enhancements, ensuring compatibility with current OpenShift deployments and aligning with Red Hat's security policy. Security teams should pull the new images from the Red Hat Container Registry and redeploy to maintain compliance.",
    "category": "General",
    "severity": "LOW",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102699",
    "publishedAt": "2026-11-24T00:52:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-security-update-for-container-too",
      "article-daf1c6c4",
      "daf1c6c4",
      "red-hat-releases-security-update-for-container-too-2ee16e",
      "red-hat-releases-security-update-for-container-tools"
    ]
  },
  {
    "slug": "laliga-data-breach-fans-personal-info-stolen-c566d02d",
    "title": "LaLiga Data Breach: Fans' Personal Info Stolen",
    "summary": "Hackers accessed LaLiga digital services and stole personal data of fans, affecting multiple Spanish clubs. The breach exploited unknown vulnerabilities in the league's web infrastructure, enabling unauthorized data exfiltration. LaLiga has notified affected parties and is working with security teams immediately to remediate the vulnerabilities and secure its systems today.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/laliga-hacked-spain-top-professional-league-confirms-cyber-incident",
    "publishedAt": "2026-11-24T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "laliga-data-breach-fans-personal-info-stolen",
      "article-c566d02d",
      "c566d02d",
      "laliga-data-breach-fans-personal-info-stolen-6d1aa3"
    ]
  },
  {
    "slug": "gta-vi-hacker-sentenced-released-same-day-fcf6ba53",
    "title": "GTA VI Hacker Sentenced, Released Same Day",
    "summary": "A British cybercriminal breached Rockstar Games’ systems, leaking unreleased Grand Theft Auto VI footage in the United Kingdom. The attack exploited internal access controls, but no specific vulnerability was publicly disclosed without evidence of ongoing threat to Rockstar’s operations. He received a seven-year prison sentence and was released on license after serving time.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/gta-vi-hacker-arion-kurtaj-released-on-license",
    "publishedAt": "2026-11-24T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gta-vi-hacker-sentenced-released-same-day",
      "article-fcf6ba53",
      "fcf6ba53",
      "gta-vi-hacker-sentenced-released-same-day-47eeb4"
    ]
  },
  {
    "slug": "rhsa-2026-102696-critical-php-8-2-security-update-d2bfc141",
    "title": "RHSA-2026:102696: Critical: php:8.2 security update",
    "summary": "An update for the php:8.2 module is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102696",
    "publishedAt": "2026-11-23T23:31:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102696-critical-php-8-2-security-update",
      "article-d2bfc141",
      "d2bfc141",
      "rhsa-2026-102696-critical-php-8-2-security-update-2ee16e"
    ]
  },
  {
    "slug": "cybersecurity-jobs-open-now-november-24-2026-f8135851",
    "title": "Cybersecurity Jobs Open Now, November 24, 2026",
    "summary": "A new Applied Cyber, Detections role is listed by Help Net Security, targeting remote positions in the United States. Candidates will support detection operations, develop and refine detection logic, and automate alert triage across web domains, social media, and other digital channels. The posting encourages collaboration with engineering and product teams to enhance detection capabilities and address evolving cyber threats.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/cybersecurity-jobs-available-right-now-november-24-2026/",
    "publishedAt": "2026-11-23T23:30:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cybersecurity-jobs-open-now-november-24-2026",
      "article-f8135851",
      "f8135851",
      "cybersecurity-jobs-open-now-november-24-2026-60bd08"
    ]
  },
  {
    "slug": "rhsa-2026-102695-critical-php-8-2-security-update-fe9d24bb",
    "title": "RHSA-2026:102695: Critical: php:8.2 security update",
    "summary": "An update for the php:8.2 module is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102695",
    "publishedAt": "2026-11-23T23:28:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102695-critical-php-8-2-security-update",
      "article-fe9d24bb",
      "fe9d24bb",
      "rhsa-2026-102695-critical-php-8-2-security-update-2ee16e"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-update-for-rhel-9-2-sap-0a725d3f",
    "title": "Red Hat Releases Kernel Update for RHEL 9.2 SAP",
    "summary": "Red Hat issued a kernel update for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions, addressing multiple security bugs. The advisory rates the update as Important, with CVSS base scores linked to individual CVE references, indicating high risk if unpatched. Security teams should apply the update promptly, ensuring kernel version compliance and verifying SAP application compatibility after installation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102689",
    "publishedAt": "2026-11-23T23:23:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-update-for-rhel-9-2-sap",
      "article-0a725d3f",
      "0a725d3f",
      "red-hat-releases-kernel-update-for-rhel-9-2-sap-2ee16e"
    ]
  },
  {
    "slug": "usn-9189-1-qt5compat-vulnerability-e859a30a",
    "title": "USN-9189-1: Qt5Compat vulnerability",
    "summary": "It was discovered that Qt5Compat did not correctly handle certain text codec names, which could lead to an out-of-bounds read. An attacker could possibly use this issue to cause a denial of service.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9189-1",
    "publishedAt": "2026-11-23T23:21:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9189-1-qt5compat-vulnerability",
      "article-e859a30a",
      "e859a30a",
      "usn-9189-1-qt5compat-vulnerability-7e77df"
    ]
  },
  {
    "slug": "rhsa-2026-102684-critical-php-8-3-security-update-f1b40ee0",
    "title": "RHSA-2026:102684: Critical: php:8.3 security update",
    "summary": "An update for the php:8.3 module is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102684",
    "publishedAt": "2026-11-23T22:29:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102684-critical-php-8-3-security-update",
      "article-f1b40ee0",
      "f1b40ee0",
      "rhsa-2026-102684-critical-php-8-3-security-update-2ee16e"
    ]
  },
  {
    "slug": "chrome-158-released-for-android-b09b0dcc",
    "title": "Chrome 158 Released for Android",
    "summary": "Google has released Chrome 158 (158.0.8127.92) for Android, which will appear on Google Play within days. The update focuses on stability and performance enhancements, while incorporating the same security fixes present in the corresponding desktop releases for Windows, Mac, and Linux. Users should install the new package via Google Play; no additional work-around is required.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-for-android-update_0411169060.html",
    "publishedAt": "2026-11-23T22:09:51.297Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-158-released-for-android",
      "article-b09b0dcc",
      "b09b0dcc",
      "chrome-158-released-for-android-412ac1"
    ]
  },
  {
    "slug": "red-hat-issues-python-oauthlib-security-update-d0a8cfdf",
    "title": "Red Hat issues python-oauthlib security update",
    "summary": "Red Hat released a security update for python-oauthlib on RHEL 9, addressing multiple critical vulnerabilities. The update mitigates flaws that could enable remote code execution or privilege escalation, with CVSS scores linked via CVE references and rated Important by Product Security. Administrators should apply RHSA-2026:102668 immediately to secure affected systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102668",
    "publishedAt": "2026-11-23T22:06:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-python-oauthlib-security-update",
      "article-d0a8cfdf",
      "d0a8cfdf",
      "red-hat-issues-python-oauthlib-security-update-2ee16d"
    ]
  },
  {
    "slug": "aurora-stops-clickfix-attacks-with-intent-detectio-c9f21da8",
    "title": "Aurora stops ClickFix attacks with intent detection",
    "summary": "ClickFix attacks coerce users into executing malicious commands, creating a gray zone that evades traditional security tools. Aurora Adaptive Threat Protection employs intent-based detection to recognize execution patterns, stopping attacks at the moment they occur and mapping activity for visibility. Security teams can integrate Aurora to gain real-time protection against ClickFix and similar command-execution threats.",
    "category": "General",
    "severity": "HIGH",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/technical-videos/how-aurora-adaptive-threat-protection-detects-and-stops-clickfix-attacks/",
    "publishedAt": "2026-11-23T22:03:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "aurora-stops-clickfix-attacks-with-intent-detectio",
      "article-c9f21da8",
      "c9f21da8",
      "aurora-stops-clickfix-attacks-with-intent-detectio-41f70a",
      "aurora-stops-clickfix-attacks-with-intent-detection"
    ]
  },
  {
    "slug": "ot-gateways-reveal-authentication-status-many-unpr-65970c74",
    "title": "OT Gateways Reveal Authentication Status, Many Unprotected",
    "summary": "Industrial serial gateways reveal whether they are authenticated, exposing a flaw in critical OT access devices. The default configuration broadcasts authentication status, allowing attackers to identify unprotected devices; no exploit is needed, but the disclosure raises credential theft risk. Disable status broadcasts, enforce authentication, and apply vendor firmware updates that conceal authentication state.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/ics-ot-security/industrial-serial-gateways-broadcast-insecure",
    "publishedAt": "2026-11-23T22:02:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ot-gateways-reveal-authentication-status-many-unpr",
      "article-65970c74",
      "65970c74",
      "ot-gateways-reveal-authentication-status-many-unpr-209193",
      "ot-gateways-reveal-authentication-status-many-unprotected"
    ]
  },
  {
    "slug": "13-malicious-nuget-packages-target-net-developers-81b6e5e1",
    "title": "13 Malicious NuGet Packages Target .NET Developers",
    "summary": "Socket researchers identified 13 malicious NuGet packages that lure .NET developers with fake job assessment prompts. The packages perform DLL side-loading, steal credentials, and embed GitHub-based malware, compromising developer environments. Security teams should audit package sources, enforce trusted feeds, and apply the latest .NET security updates to mitigate exposure and monitor for suspicious activity.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Socket.dev",
    "sourceUrl": "https://socket.dev/blog/malicious-nuget-packages-fake-job-assessments",
    "publishedAt": "2026-11-23T21:55:22.725Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "13-malicious-nuget-packages-target-net-developers",
      "article-81b6e5e1",
      "81b6e5e1",
      "13-malicious-nuget-packages-target-net-developers-43d711"
    ]
  },
  {
    "slug": "aws-ssm-agent-default-key-flaw-exposes-role-creden-768216c7",
    "title": "AWS SSM Agent default key flaw exposes role credentials",
    "summary": "Amazon SSM Agent on AWS Windows Server AMIs contains a flaw where instances share a default cryptographic key during registration. CVE-2026-134069 allows a local non-admin user to retrieve the instance’s Default Host Management Configuration role credentials, enabling potential credential theft. AWS recommends updating to the latest SSM Agent version or applying the provided patch to eliminate the shared key vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-197-aws/",
    "publishedAt": "2026-11-23T21:54:18.000Z",
    "cves": [
      "CVE-2026-134069"
    ],
    "additionalSources": [],
    "aliases": [
      "aws-ssm-agent-default-key-flaw-exposes-role-creden",
      "article-768216c7",
      "768216c7",
      "aws-ssm-agent-default-key-flaw-exposes-role-creden-29fa73",
      "aws-ssm-agent-default-key-flaw-exposes-role-credentials"
    ]
  },
  {
    "slug": "red-hat-releases-golang-update-for-rhel-10-b421f581",
    "title": "Red Hat Releases Golang Update for RHEL 10",
    "summary": "Red Hat released a golang update for RHEL 10, fixing multiple security bugs in the Go compiler and runtime. The update addresses several CVE-linked issues, each with a CVSS base score indicating moderate impact; no active exploitation is known. Red Hat advises applying the update via the package manager; no workaround is needed.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102587",
    "publishedAt": "2026-11-23T21:42:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-golang-update-for-rhel-10",
      "article-b421f581",
      "b421f581",
      "red-hat-releases-golang-update-for-rhel-10-2ee16a"
    ]
  },
  {
    "slug": "red-hat-issues-golang-security-update-f2d54dcf",
    "title": "Red Hat Issues Golang Security Update",
    "summary": "Red Hat released a security update for the golang runtime on RHEL 9, addressing multiple vulnerabilities. The update mitigates unspecified bugs that could allow local privilege escalation or code execution, with CVSS scores available via referenced CVE links. Administrators should apply the golang package update immediately to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102586",
    "publishedAt": "2026-11-23T21:41:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-golang-security-update",
      "article-f2d54dcf",
      "f2d54dcf",
      "red-hat-issues-golang-security-update-2ee16a"
    ]
  },
  {
    "slug": "crowdstrike-acquires-zscaler-for-ai-security-integ-74ee119c",
    "title": "CrowdStrike Acquires Zscaler for AI Security Integration",
    "summary": "CrowdStrike announced a $44 billion acquisition of Zscaler, merging endpoint protection with zero-trust network security. The integration aims to centralize AI agent oversight, enabling unified threat detection across device and network layers. Customers will receive combined platform capabilities, but must plan for migration and potential licensing adjustments, ensuring seamless transition.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/endpoint-security/crowdstrike-ai-security-push-zscaler-deal",
    "publishedAt": "2026-11-23T21:21:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-acquires-zscaler-for-ai-security-integ",
      "article-74ee119c",
      "74ee119c",
      "crowdstrike-acquires-zscaler-for-ai-security-integ-27390e",
      "crowdstrike-acquires-zscaler-for-ai-security-integration"
    ]
  },
  {
    "slug": "red-hat-issues-python-3-6-security-update-7ae3d02b",
    "title": "Red Hat Issues Python 3.6 Security Update",
    "summary": "Red Hat released a security update for the python36:3.6 module on RHEL 8, addressing several vulnerabilities. The patch fixes bugs that could enable local privilege escalation or arbitrary code execution, with CVSS scores provided via CVE references. System administrators should install the updated python36 package promptly to secure their environments.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102653",
    "publishedAt": "2026-11-23T21:08:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-python-3-6-security-update",
      "article-7ae3d02b",
      "7ae3d02b",
      "red-hat-issues-python-3-6-security-update-2ee16d"
    ]
  },
  {
    "slug": "aurora-adtp-blocks-modern-attacks-by-continuous-be-f261eb17",
    "title": "Aurora ADTP Blocks Modern Attacks by Continuous Behavior Tracking",
    "summary": "Aurora Adaptive Threat Protection (ADTP) monitors endpoint activity to counter attacks that bypass conventional defenses. By linking related behaviors into a full attack narrative, ADTP identifies malicious intent before execution, enabling real-time disruption. Security teams should deploy ADTP alongside existing endpoint solutions and configure behavior thresholds for optimal coverage, reducing blind spots.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/technical-videos/how-aurora-adaptive-threat-protection-detects-stops-and-reverses-modern-attacks/",
    "publishedAt": "2026-11-23T21:00:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "aurora-adtp-blocks-modern-attacks-by-continuous-be",
      "article-f261eb17",
      "f261eb17",
      "aurora-adtp-blocks-modern-attacks-by-continuous-be-47c4d5",
      "aurora-adtp-blocks-modern-attacks-by-continuous-behavior-tra"
    ]
  },
  {
    "slug": "kepco-breach-exposes-1-5-million-customer-records-33ce023b",
    "title": "KEPCO Breach Exposes 1.5 Million Customer Records",
    "summary": "A threat actor breached KEPCO’s internal network, accessing two systems that stored customer, employee, and contractor data. The intrusion leveraged an undisclosed vulnerability in the company’s network perimeter, enabling unauthorized data exfiltration and potential credential compromise. KEPCO has issued a security advisory and is conducting a forensic investigation, urging affected users to monitor accounts and change passwords.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/south-koreas-power-giant-kepco-confirms-data-breach-impacting-15-million/",
    "publishedAt": "2026-11-23T20:54:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kepco-breach-exposes-1-5-million-customer-records",
      "article-33ce023b",
      "33ce023b",
      "kepco-breach-exposes-1-5-million-customer-records-2a6e37"
    ]
  },
  {
    "slug": "chrome-stable-channel-updated-to-158-0-8127-88-d35ce0b3",
    "title": "Chrome Stable Channel Updated to 158.0.8127.88",
    "summary": "Google Chrome released a stable channel update to version 158.0.8127.88 for Windows, Mac, and Linux, rolling out over the next weeks. The update includes security fixes, with a detailed change log available; users are encouraged to review the log before upgrading. Administrators should schedule the rollout, verify compatibility, and monitor for any post-upgrade issues via the community help forum.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01734282054.html",
    "publishedAt": "2026-11-23T20:52:51.321Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-stable-channel-updated-to-158-0-8127-88",
      "article-d35ce0b3",
      "d35ce0b3",
      "chrome-stable-channel-updated-to-158-0-8127-88-5debed"
    ]
  },
  {
    "slug": "chrome-extended-stable-channel-updated-to-156-0-80-45d8d596",
    "title": "Chrome Extended Stable Channel Updated to 156.0.8078.114",
    "summary": "Google Chrome’s Extended Stable channel updated to 156.0.8078.114 for Windows and macOS, extending the stable release schedule. The update lists changes, with security fixes pending a later release, and will roll out over the next days or weeks. Users may review the change log, file bugs, or use the community forum while awaiting the security patch.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/extended-stable-update-for-desktop_01590513949.html",
    "publishedAt": "2026-11-23T20:52:47.796Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-extended-stable-channel-updated-to-156-0-80",
      "article-45d8d596",
      "45d8d596",
      "chrome-extended-stable-channel-updated-to-156-0-80-496d05",
      "chrome-extended-stable-channel-updated-to-156-0-8078-114"
    ]
  },
  {
    "slug": "cve-2026-134056-out-of-bounds-write-in-padded-bloc-994f1241",
    "title": "CVE-2026-134056 - Out-of-bounds write in padded block cipher decryption in AWS-LC",
    "summary": "Bulletin ID: 2026-196-AWS Publication Date: 11/23/2026 12:00 PM PST Description: We identified CVE-2026-134056, an out-of-bounds write issue in AWS-LC's padded block cipher decryption. If the output buffer is the minimum documented size, AWS-LC can write one byte past its end. The aws-lc-rs StreamingDecryptingKey API has a similar issue with cbc_pkcs7 and ecb_pkcs7.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-196-aws/",
    "publishedAt": "2026-11-23T20:29:41.000Z",
    "cves": [
      "CVE-2026-134056"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-134056-out-of-bounds-write-in-padded-bloc",
      "article-994f1241",
      "994f1241",
      "cve-2026-134056-out-of-bounds-write-in-padded-bloc-28459b",
      "cve-2026-134056-out-of-bounds-write-in-padded-block-cipher-d"
    ]
  },
  {
    "slug": "red-hat-issues-important-sqlite-security-update-eb5cc09f",
    "title": "Red Hat Issues Important SQLite Security Update",
    "summary": "Red Hat released an important security update for SQLite on Red Hat Enterprise Linux 8, addressing multiple vulnerabilities. The update carries an Important impact rating, with CVSS base scores linked to each CVE in the advisory references. Administrators should apply the update immediately and verify that SQLite components are patched to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102648",
    "publishedAt": "2026-11-23T20:28:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-sqlite-security-update",
      "article-eb5cc09f",
      "eb5cc09f",
      "red-hat-issues-important-sqlite-security-update-2ee16d"
    ]
  },
  {
    "slug": "cisco-products-affected-by-php-remote-code-vulnera-a22919db",
    "title": "Cisco Products Affected by PHP Remote Code Vulnerability",
    "summary": "Cisco products are vulnerable to a PHP flaw that permits remote code execution, as disclosed by the PHP Foundation on November 19, 2026. The flaw, identified as CVE-2026-126714 and dubbed phpAfterShell, carries a Critical security impact rating and is referenced by GHSA-fm2m-fjf5-v3cp. Cisco recommends applying the available PHP security patches immediately to mitigate the RCE risk and ensure system integrity.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-phpaftershell-nov-2026-kT9pL4Xe?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DVulnerability+in+PHP+Affecting+Cisco+Products%3A+November+2026%26vs_k%3D1",
    "publishedAt": "2026-11-23T20:20:00.000Z",
    "cves": [
      "CVE-2026-126714"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-products-affected-by-php-remote-code-vulnera",
      "article-a22919db",
      "a22919db",
      "cisco-products-affected-by-php-remote-code-vulnera-6bcf0e",
      "cisco-products-affected-by-php-remote-code-vulnerability"
    ]
  },
  {
    "slug": "red-hat-issues-moderate-update-for-go-toolset-rhel-9f1b8474",
    "title": "Red Hat Issues Moderate Update for go-toolset:rhel8",
    "summary": "Red Hat released a moderate security update for the go-toolset:rhel8 module on RHEL8, fixing multiple Go compiler bugs. The patch addresses local privilege escalation and denial-of-service flaws with CVSS scores up to 7.5, though no active exploitation is known. Red Hat advises applying the update via the standard RHEL8 update channel; no workarounds are required.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102592",
    "publishedAt": "2026-11-23T20:16:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-moderate-update-for-go-toolset-rhel",
      "article-9f1b8474",
      "9f1b8474",
      "red-hat-issues-moderate-update-for-go-toolset-rhel-2ee16a",
      "red-hat-issues-moderate-update-for-go-toolset-rhel8"
    ]
  },
  {
    "slug": "trump-names-industry-veteran-davies-as-acting-cybe-bcd7ff11",
    "title": "Trump Names Industry Veteran Davies as Acting Cyber Director",
    "summary": "Trump appointed Kirsten Davies as National Cyber Director, signaling a shift toward industry expertise amid outages and geopolitical tensions. The move follows criticism of cyber leadership and aims to leverage Davies' private sector experience to strengthen U.S. cyber defenses. The appointment is expected to influence policy direction and coordination with industry partners, though no immediate operational changes have been announced.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/us-cyber-director-pick-signals-shift-toward-expertise",
    "publishedAt": "2026-11-23T20:13:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "trump-names-industry-veteran-davies-as-acting-cybe",
      "article-bcd7ff11",
      "bcd7ff11",
      "trump-names-industry-veteran-davies-as-acting-cybe-5720f2",
      "trump-names-industry-veteran-davies-as-acting-cyber-director"
    ]
  },
  {
    "slug": "openrouter-removes-ai-providers-for-data-handling-161bd63a",
    "title": "OpenRouter Removes AI Providers for Data Handling Violations",
    "summary": "OpenRouter removed three AI providers after discovering they violated data-handling policies and exposed sensitive user prompts and secrets. The policy breach leaked proprietary prompts, potentially compromising client confidentiality and violating OpenRouter's privacy commitments. OpenRouter suspended the providers, issued a public notice, and is reviewing vetting procedures to prevent future violations.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/openrouter-drops-ai-providers-over-leaked-prompts-and-secrets/",
    "publishedAt": "2026-11-23T20:00:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openrouter-removes-ai-providers-for-data-handling",
      "article-161bd63a",
      "161bd63a",
      "openrouter-removes-ai-providers-for-data-handling-35ecc2",
      "openrouter-removes-ai-providers-for-data-handling-violations"
    ]
  },
  {
    "slug": "ubuntu-oauthlib-multiple-cve-vulnerabilities-discl-55dbba3a",
    "title": "Ubuntu OAuthLib multiple CVE vulnerabilities disclosed",
    "summary": "Ubuntu 20.04 to 26.10 releases contain several OAuthLib flaws affecting token revocation, PKCE verification, and client identity validation. CVE-2026-49264 permits arbitrary code execution via JSONP callbacks, CVE-2026-49265 enables token theft through non-constant-time comparison, and CVE-2026-118669 allows unauthorized token acquisition by bypassing client checks. Users should upgrade to Ubuntu releases or apply the security patches to mitigate these OAuthLib vulnerabilities.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9188-1",
    "publishedAt": "2026-11-23T19:44:23.000Z",
    "cves": [
      "CVE-2026-49264",
      "CVE-2026-49265",
      "CVE-2026-118669"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-oauthlib-multiple-cve-vulnerabilities-discl",
      "article-55dbba3a",
      "55dbba3a",
      "ubuntu-oauthlib-multiple-cve-vulnerabilities-discl-7e77e3",
      "ubuntu-oauthlib-multiple-cve-vulnerabilities-disclosed"
    ]
  },
  {
    "slug": "chrome-ios-stable-158-released-with-stability-impr-cc781fff",
    "title": "Chrome iOS Stable 158 Released with Stability Improvements",
    "summary": "Google released Chrome Stable 158 (158.0.8127.86) for iOS, adding stability and performance improvements to the mobile browser. The update addresses minor bugs and optimizes rendering, reducing memory usage and enhancing page load times on iOS devices. The new build will be available on the App Store within hours, and users are encouraged to update to benefit from the fixes.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-stable-for-ios-update_0595441535.html",
    "publishedAt": "2026-11-23T18:58:34.761Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-ios-stable-158-released-with-stability-impr",
      "article-cc781fff",
      "cc781fff",
      "chrome-ios-stable-158-released-with-stability-impr-5cad3b",
      "chrome-ios-stable-158-released-with-stability-improvements"
    ]
  },
  {
    "slug": "laliga-data-breach-exposes-fans-personal-informati-47226265",
    "title": "LaLiga Data Breach Exposes Fans Personal Information",
    "summary": "LaLiga disclosed a breach that exposed personal data of its users and some affiliated clubs. The theft included names, email addresses, phone numbers, and other sensitive information, raising significant privacy and regulatory concerns. LaLiga notified affected users, launched incident response, and is cooperating with law enforcement to trace the attack.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/spanish-laliga-confirms-hackers-stole-soccer-fans-personal-data/",
    "publishedAt": "2026-11-23T18:38:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "laliga-data-breach-exposes-fans-personal-informati",
      "article-47226265",
      "47226265",
      "laliga-data-breach-exposes-fans-personal-informati-2c4a18",
      "laliga-data-breach-exposes-fans-personal-information"
    ]
  },
  {
    "slug": "misp-advises-hotfix-for-pre-v2-5-53-vulnerabilitie-92ccdb3b",
    "title": "MISP Advises Hotfix for Pre-v2.5.53 Vulnerabilities",
    "summary": "The Canadian Centre for Cyber Security issued advisory AV26-1197, noting that MISP versions prior to 2.5.53 contain multiple security vulnerabilities. A quick hotfix, version 2.5.53, addresses the identified flaws, and administrators are urged to review the provided links and apply updates as soon as possible. Failure to patch may leave MISP installations vulnerable to exploitation of the disclosed weaknesses.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/misp-security-advisory-av26-1197",
    "publishedAt": "2026-11-23T18:14:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "misp-advises-hotfix-for-pre-v2-5-53-vulnerabilitie",
      "article-92ccdb3b",
      "92ccdb3b",
      "misp-advises-hotfix-for-pre-v2-5-53-vulnerabilitie-30e927",
      "misp-advises-hotfix-for-pre-v2-5-53-vulnerabilities"
    ]
  },
  {
    "slug": "ai-detects-new-attacks-by-learning-normal-behavior-7b3d2c9c",
    "title": "AI Detects New Attacks by Learning Normal Behavior",
    "summary": "Arctic Wolf's AI threat detection platform identifies new attacks by learning normal user, device, and system behavior. The system flags deviations that may indicate emerging threats, enabling security teams to investigate and respond to previously unseen attacks. This approach expands detection coverage beyond signature-based methods, improving overall security posture for organizations worldwide.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/glossary-uk/what-is-ai-threat-detection/",
    "publishedAt": "2026-11-23T17:52:11.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Arctic Wolf",
        "sourceUrl": "https://arcticwolf.com/resources/glossary/ai-threat-detection/"
      }
    ],
    "aliases": [
      "ai-detects-new-attacks-by-learning-normal-behavior",
      "article-7b3d2c9c",
      "7b3d2c9c",
      "ai-detects-new-attacks-by-learning-normal-behavior-4e86f0"
    ]
  },
  {
    "slug": "new-framework-traces-decade-of-ransomware-actors-a995d0f9",
    "title": "New Framework Traces Decade of Ransomware Actors",
    "summary": "A new attribution framework enables security teams to trace ransomware actors across a decade of operations. The framework aggregates metadata from ransomware campaigns, correlating signatures and infrastructure to identify individual threat actors, thereby improving threat intelligence and response. Security teams can adopt the framework to enhance attribution accuracy, integrate with existing SIEMs, and prioritize defensive measures against identified actors.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/alias-researcher-unmasked-ransomware-actors",
    "publishedAt": "2026-11-23T17:45:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "new-framework-traces-decade-of-ransomware-actors",
      "article-a995d0f9",
      "a995d0f9",
      "new-framework-traces-decade-of-ransomware-actors-392cc2"
    ]
  },
  {
    "slug": "webworm-modifies-softether-vpn-to-evade-detection-75f1fbe0",
    "title": "Webworm Modifies SoftEther VPN to Evade Detection",
    "summary": "The China-aligned threat actor Webworm is suspected of deploying a custom SoftEther VPN Bridge variant designed to conceal itself from security tools. The modified bridge removes recognizable detection fingerprints and masquerades as network-monitoring software, enabling covert remote access to compromised networks. Defenders should monitor anomalous VPN traffic, verify SoftEther installations against known hashes, and apply patches to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/webworm-suspected-of-modifying.html",
    "publishedAt": "2026-11-23T17:45:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "webworm-modifies-softether-vpn-to-evade-detection",
      "article-75f1fbe0",
      "75f1fbe0",
      "webworm-modifies-softether-vpn-to-evade-detection-514f20"
    ]
  },
  {
    "slug": "usn-9187-1-libssh-vulnerabilities-77c22071",
    "title": "USN-9187-1: libssh vulnerabilities",
    "summary": "This issue only affected Ubuntu 16.04 LTS, Ubuntu 18.04 LTS, and Ubuntu 20.04 LTS. (CVE-2026-59843) Mikhail Ilin and Saransh Rana discovered that libssh did not correctly sanitize shell metacharacters when expanding usernames in ProxyCommand strings. An attacker could possibly use this issue to obtain sensitive information. (CVE-2026-59846) Ben Smyth discovered that libssh incorrectly verified AES-GCM authentication tags when built with the OpenSSL backend.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9187-1",
    "publishedAt": "2026-11-23T17:32:05.000Z",
    "cves": [
      "CVE-2026-59843",
      "CVE-2026-59846",
      "CVE-2026-59847",
      "CVE-2026-59848",
      "CVE-2026-59850"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9187-1-libssh-vulnerabilities",
      "article-77c22071",
      "77c22071",
      "usn-9187-1-libssh-vulnerabilities-7e77e6"
    ]
  },
  {
    "slug": "crowdstrike-acquires-zscaler-for-43-9b-7e7a2503",
    "title": "CrowdStrike Acquires Zscaler for $43.9B",
    "summary": "CrowdStrike announced the acquisition of Zscaler in a $43.9 billion deal, aiming to expand its AI-driven security portfolio. The purchase reflects CEO George Kurtz’s vision of building the largest AI safety and security company worldwide. The transaction is expected to integrate Zscaler’s cloud security platform with CrowdStrike’s endpoint protection, pending regulatory approval.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/crowdstrike-zscaler",
    "publishedAt": "2026-11-23T17:14:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-acquires-zscaler-for-43-9b",
      "article-7e7a2503",
      "7e7a2503",
      "crowdstrike-acquires-zscaler-for-43-9b-36aaca"
    ]
  },
  {
    "slug": "globetopper-suffers-cyberattack-causing-financial-3f431e41",
    "title": "GlobeTopper Suffers Cyberattack Causing Financial and Operational Losses",
    "summary": "B2B top-up solutions provider GlobeTopper suffered a cyberattack that disrupted its business operations and compromised digital assets. Attackers redeemed digital gift cards valued at $70,000, resulting in an estimated total operational revenue loss of $2.5 million for the company. Organizations should review digital asset transaction controls and implement strict access monitoring on top-up management systems.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/globetopper-loses-25-million-after-hackers-steal-70k-in-gift-cards/",
    "publishedAt": "2026-11-23T16:50:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "globetopper-suffers-cyberattack-causing-financial",
      "article-3f431e41",
      "3f431e41",
      "globetopper-suffers-cyberattack-causing-financial-374c76",
      "globetopper-suffers-cyberattack-causing-financial-and-operat"
    ]
  },
  {
    "slug": "china-nexus-actor-exploits-medical-imaging-zero-da-91214183",
    "title": "China-Nexus Actor Exploits Medical Imaging Zero-Day via Cairn",
    "summary": "A China-nexus threat actor targeted East Asian universities by deploying the Cairn penetration testing tool to execute attacks. The adversary exploited an unpatched zero-day vulnerability in a medical imaging application, escalating privileges from flaw discovery to root access within 11 minutes. Security teams must monitor for unauthorized Cairn execution and audit medical imaging software for unauthenticated access vectors.",
    "category": "Nation State",
    "severity": "CRITICAL",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/ai-agents-flaw-discovery-root-access-11-minutes",
    "publishedAt": "2026-11-23T16:17:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "china-nexus-actor-exploits-medical-imaging-zero-da",
      "article-91214183",
      "91214183",
      "china-nexus-actor-exploits-medical-imaging-zero-da-268456",
      "china-nexus-actor-exploits-medical-imaging-zero-day-via-cair"
    ]
  },
  {
    "slug": "red-hat-issues-freerdp-patch-for-rhel-9-8be1dfa3",
    "title": "Red Hat Issues freerdp Patch for RHEL 9",
    "summary": "Red Hat released an important freerdp update for RHEL 9, addressing several security vulnerabilities. The flaws could allow attackers to execute arbitrary code or exfiltrate session data, yet no active exploitation has been reported. Security teams should apply the freerdp patch immediately, verify remote desktop configurations, and monitor for suspicious activity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102399",
    "publishedAt": "2026-11-23T16:09:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-freerdp-patch-for-rhel-9",
      "article-8be1dfa3",
      "8be1dfa3",
      "red-hat-issues-freerdp-patch-for-rhel-9-2ee162"
    ]
  },
  {
    "slug": "red-hat-issues-important-netpbm-patch-for-rhel-10-55631f55",
    "title": "Red Hat Issues Important Netpbm Patch for RHEL 10",
    "summary": "Red Hat released a security update for the netpbm package affecting Red Hat Enterprise Linux 10 installations. The underlying security flaws received an Important severity rating from Red Hat Product Security, with detailed base scores published in accompanying advisories. System administrators should apply the updated netpbm packages via standard Red Hat Enterprise Linux package management systems.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102569",
    "publishedAt": "2026-11-23T16:05:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-netpbm-patch-for-rhel-10",
      "article-55631f55",
      "55631f55",
      "red-hat-issues-important-netpbm-patch-for-rhel-10-2ee16a"
    ]
  },
  {
    "slug": "red-hat-releases-netpbm-update-for-rhel-9-8-eus-c9c0afbb",
    "title": "Red Hat Releases Netpbm Update for RHEL 9.8 EUS",
    "summary": "Red Hat issued a security update addressing vulnerabilities in the netpbm package for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security categorized the security impact as Important, providing Common Vulnerability Scoring System base scores across referenced advisories. Administrators managing Extended Update Support environments must deploy the updated netpbm packages to mitigate potential security risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102542",
    "publishedAt": "2026-11-23T16:03:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-netpbm-update-for-rhel-9-8-eus",
      "article-c9c0afbb",
      "c9c0afbb",
      "red-hat-releases-netpbm-update-for-rhel-9-8-eus-2ee169"
    ]
  },
  {
    "slug": "microsoft-security-response-center-acknowledges-cv-ec77efd5",
    "title": "Microsoft Security Response Center acknowledges CVE-2026-69291",
    "summary": "Microsoft Security Response Center acknowledges CVE-2026-69291, a remote code execution flaw in the Windows Volume Manager Extension Driver. The vulnerability allows attackers to execute arbitrary code via crafted volume manager requests that can be triggered by malicious input, potentially compromising affected systems. A patch is available; administrators should apply the update promptly to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-69291",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-69291"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-security-response-center-acknowledges-cv",
      "article-ec77efd5",
      "ec77efd5",
      "microsoft-security-response-center-acknowledges-cv-745a69",
      "microsoft-security-response-center-acknowledges-cve-2026-692"
    ]
  },
  {
    "slug": "microsoft-security-response-center-acknowledges-cv-4a4a964b",
    "title": "Microsoft Security Response Center acknowledges CVE-2026-87697",
    "summary": "Microsoft Security Response Center acknowledges CVE-2026-87697, a remote code execution flaw in the .NET runtime. The vulnerability permits attackers to run arbitrary code through crafted .NET assemblies that can be triggered by malicious input, potentially compromising affected applications. A patch is available; developers should update .NET to the latest version to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-87697",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-87697"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-security-response-center-acknowledges-cv",
      "article-4a4a964b",
      "4a4a964b",
      "microsoft-security-response-center-acknowledges-cv-743f14",
      "microsoft-security-response-center-acknowledges-cve-2026-876"
    ]
  },
  {
    "slug": "asp-net-core-denial-of-service-cve-2026-96233-3fd47404",
    "title": "ASP.NET Core Denial of Service CVE-2026-96233",
    "summary": "A denial-of-service flaw in ASP.NET Core, CVE-2026-96233, lets attackers exhaust server resources via crafted HTTP requests. The flaw arises from improper input validation in request parsing, and no public exploit is known, but it can cause service interruption. Microsoft released a patch that corrects the parsing logic; administrators should apply the latest ASP.NET Core update or vendor hotfix.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96233",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-96233"
    ],
    "additionalSources": [],
    "aliases": [
      "asp-net-core-denial-of-service-cve-2026-96233",
      "article-3fd47404",
      "3fd47404",
      "asp-net-core-denial-of-service-cve-2026-96233-743180"
    ]
  },
  {
    "slug": "windows-message-queuing-dos-cve-2026-119848-cf733baf",
    "title": "Windows Message Queuing DoS CVE-2026-119848",
    "summary": "CVE-2026-119848 is a denial-of-service flaw in Windows Message Queuing that lets attackers crash the service with malformed queue messages. The vulnerability stems from unchecked bounds during message deserialization, and no active exploitation is known, but it can cause repeated service restarts. Microsoft released a patch that validates message lengths; administrators should apply Windows update or vendor hotfix to mitigate DoS.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119848",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-119848"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-message-queuing-dos-cve-2026-119848",
      "article-cf733baf",
      "cf733baf",
      "windows-message-queuing-dos-cve-2026-119848-1fe894"
    ]
  },
  {
    "slug": "microsoft-acknowledges-cve-2026-70175-asp-net-core-eca1996d",
    "title": "Microsoft Acknowledges CVE-2026-70175 ASP.NET Core Privilege Bug",
    "summary": "Microsoft has acknowledged CVE-2026-70175, an elevation of privilege flaw in ASP.NET Core that could let attackers gain higher privileges on affected systems. The flaw stems from improper validation of user input during authentication, allowing privilege escalation without authentication, though no public exploit exists. Microsoft issued an update; users should watch for future patches and apply any subsequent fixes when available.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70175",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-70175"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-cve-2026-70175-asp-net-core",
      "article-eca1996d",
      "eca1996d",
      "microsoft-acknowledges-cve-2026-70175-asp-net-core-74506d",
      "microsoft-acknowledges-cve-2026-70175-asp-net-core-privilege"
    ]
  },
  {
    "slug": "microsoft-acknowledges-cve-2026-96225-net-privileg-773963d1",
    "title": "Microsoft Acknowledges CVE-2026-96225 .NET Privilege Bug",
    "summary": "Microsoft has acknowledged CVE-2026-96225, an elevation of privilege flaw in .NET that could allow attackers to gain higher privileges on affected systems. The vulnerability arises from validation errors during authentication, enabling privilege escalation without authentication, though no public exploit has been reported. Microsoft issued an update; users should watch for future patches and apply any subsequent fixes when available.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96225",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-96225"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-cve-2026-96225-net-privileg",
      "article-773963d1",
      "773963d1",
      "microsoft-acknowledges-cve-2026-96225-net-privileg-743181",
      "microsoft-acknowledges-cve-2026-96225-net-privilege-bug"
    ]
  },
  {
    "slug": "microsoft-acknowledges-cve-2026-78462-in-vs-code-8068fa08",
    "title": "Microsoft Acknowledges CVE-2026-78462 in VS Code",
    "summary": "Microsoft acknowledges CVE-2026-78462, a Visual Studio Code security feature bypass vulnerability. The issue could allow attackers to bypass security controls, but no public exploit or PoC has been disclosed. Microsoft has issued an informational update; no patch or mitigation is required at this time, and the vulnerability is tracked in the Microsoft Security Advisory database.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-78462",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-78462"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-cve-2026-78462-in-vs-code",
      "article-8068fa08",
      "8068fa08",
      "microsoft-acknowledges-cve-2026-78462-in-vs-code-744cbf"
    ]
  },
  {
    "slug": "microsoft-acknowledges-cve-2026-72965-in-windows-b3ad5032",
    "title": "Microsoft Acknowledges CVE-2026-72965 in Windows",
    "summary": "Microsoft acknowledges CVE-2026-72965, a Windows WebClient Service elevation of privilege vulnerability. The flaw could allow local users to gain higher privileges, but no public exploit or PoC has been disclosed. Microsoft has issued an informational update; no patch or mitigation is required at this time, and the vulnerability is tracked in the Microsoft Security Advisory database.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-72965",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-72965"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-cve-2026-72965-in-windows",
      "article-b3ad5032",
      "b3ad5032",
      "microsoft-acknowledges-cve-2026-72965-in-windows-744f66"
    ]
  },
  {
    "slug": "splunk-advisory-affects-multiple-products-requires-9d6cde7f",
    "title": "Splunk Advisory Affects Multiple Products, Requires Upgrade",
    "summary": "Splunk issued a security advisory (AV26-1196) affecting multiple products, including Enterprise, Enterprise Security, PCI Compliance, and SOAR, with versions prior to specified releases. The vulnerabilities could enable unauthorized access or privilege escalation within Splunk deployments, but no active exploitation has been confirmed. Administrators should review the provided links, upgrade to newer versions, and enforce access controls to mitigate risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/splunk-security-advisory-av26-1196",
    "publishedAt": "2026-11-23T15:52:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "splunk-advisory-affects-multiple-products-requires",
      "article-9d6cde7f",
      "9d6cde7f",
      "splunk-advisory-affects-multiple-products-requires-83b887",
      "splunk-advisory-affects-multiple-products-requires-upgrade"
    ]
  },
  {
    "slug": "microsoft-patches-exploited-azure-api-management-f-83470f49",
    "title": "Microsoft Patches Exploited Azure API Management Flaw Targeting Energy Sector Credentials",
    "summary": "Microsoft patched an Azure API Management flaw that attackers exploited to target Norwegian energy companies and other sectors. The vulnerability let attackers read protected configuration data and credential vaults, potentially exposing API secrets and sensitive information. Microsoft urged affected customers to apply the update or configuration changes immediately to block unauthorized credential access.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/azure-flaw-exploited-to-target-secrets-at-norwegian-energy-firms/",
    "publishedAt": "2026-11-23T15:47:40.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/security/microsoft-azure-flaw-exploited-to-steal-customers-api-credentials/"
      }
    ],
    "aliases": [
      "microsoft-patches-exploited-azure-api-management-f",
      "article-83470f49",
      "83470f49",
      "microsoft-patches-exploited-azure-api-management-f-5e6aa8",
      "microsoft-patches-exploited-azure-api-management-flaw-target"
    ]
  },
  {
    "slug": "hackers-exploit-microsoft-cloud-flaw-against-norwe-81f7b48b",
    "title": "Hackers Exploit Microsoft Cloud Flaw Against Norwegian Energy Firms",
    "summary": "Hackers exploited a Microsoft cloud security vulnerability to target sensitive credentials at Equinor and Skagerak Energi. The flaw permitted unauthorized access to configuration secrets, potentially exposing login information, though no confirmed data loss was reported. Microsoft issued a patch and urged affected customers to update their Azure services to close the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/norway-microsoft-cyberattack-equinor",
    "publishedAt": "2026-11-23T15:45:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-microsoft-cloud-flaw-against-norwe",
      "article-81f7b48b",
      "81f7b48b",
      "hackers-exploit-microsoft-cloud-flaw-against-norwe-199bbb",
      "hackers-exploit-microsoft-cloud-flaw-against-norwegian-energ"
    ]
  },
  {
    "slug": "spring-ai-vulnerability-affects-multiple-versions-324b9980",
    "title": "Spring AI Vulnerability Affects Multiple Versions",
    "summary": "Spring AI versions prior to 1.0.11, 1.1.10, 2.0.2.1, and 2.0.3 suffer a broken logical grouping expression flaw in TypesenseFilterExpressionConverter. The flaw can cause improper query parsing, potentially exposing data or causing denial of service. Upgrade to the latest Spring AI release or apply the vendor patch to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/spring-security-advisory-av26-1195",
    "publishedAt": "2026-11-23T15:41:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "spring-ai-vulnerability-affects-multiple-versions",
      "article-324b9980",
      "324b9980",
      "spring-ai-vulnerability-affects-multiple-versions-7742fe"
    ]
  },
  {
    "slug": "meta-muse-ai-hallucinates-shares-external-app-data-840c6d88",
    "title": "Meta Muse AI Hallucinates, Shares External App Data",
    "summary": "Meta’s Muse AI agent reportedly accessed data from other applications and produced hallucinated responses during user interactions. The incident highlights limitations in the model’s knowledge boundaries and the risk of unintended data leakage. Meta should refine data access controls and improve hallucination mitigation to safeguard user privacy and information integrity.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/ai/2026/11/muse-ai-got-nosy-and-started-making-things-up-meta-insiders-say",
    "publishedAt": "2026-11-23T15:37:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-muse-ai-hallucinates-shares-external-app-data",
      "article-840c6d88",
      "840c6d88",
      "meta-muse-ai-hallucinates-shares-external-app-data-64292a"
    ]
  },
  {
    "slug": "apache-solr-health-check-vulnerability-disclosed-084e3bca",
    "title": "Apache Solr Health-Check Vulnerability Disclosed",
    "summary": "Apache Solr versions prior to 10.1.0 and 9.11.0 contain a health-check flaw that can trigger unintended functionality, referenced by CVE-2026-86312. The flaw allows attackers to invoke the ping endpoint, potentially causing unauthorized actions or information disclosure within the Solr instance. Administrators should upgrade to Solr 10.1.0 or later, or apply the vendor-issued patch, and verify that health-check endpoints are secured.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/apache-security-advisory-av26-1194",
    "publishedAt": "2026-11-23T15:34:03.000Z",
    "cves": [
      "CVE-2026-86312"
    ],
    "additionalSources": [],
    "aliases": [
      "apache-solr-health-check-vulnerability-disclosed",
      "article-084e3bca",
      "084e3bca",
      "apache-solr-health-check-vulnerability-disclosed-5d2c79"
    ]
  },
  {
    "slug": "rhel9-podman-update-fixes-important-security-flaw-88343d44",
    "title": "RHEL9 Podman Update Fixes Important Security Flaw",
    "summary": "Red Hat released a security update for the podman container engine on RHEL9 to address a critical flaw. The patch fixes an undisclosed vulnerability rated Important by Red Hat Product Security, with CVSS scores linked through CVE references. Administrators should apply the podman update immediately to prevent exploitation and maintain secure container orchestration environments.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102296",
    "publishedAt": "2026-11-23T15:32:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel9-podman-update-fixes-important-security-flaw",
      "article-88343d44",
      "88343d44",
      "rhel9-podman-update-fixes-important-security-flaw-2ee15f"
    ]
  },
  {
    "slug": "rhsa-2026-102507-important-webkit2gtk3-security-up-cac88745",
    "title": "RHSA-2026:102507: Important: webkit2gtk3 security update",
    "summary": "An update for webkit2gtk3 is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102507",
    "publishedAt": "2026-11-23T15:30:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102507-important-webkit2gtk3-security-up",
      "article-cac88745",
      "cac88745",
      "rhsa-2026-102507-important-webkit2gtk3-security-up-2ee169",
      "rhsa-2026-102507-important-webkit2gtk3-security-update"
    ]
  },
  {
    "slug": "grafana-update-addresses-remote-code-execution-vul-55e19624",
    "title": "Grafana Update Addresses Remote Code Execution Vulnerabilities",
    "summary": "A Grafana security update for Red Hat Enterprise Linux 10 addresses multiple vulnerabilities that could enable remote code execution through the web interface. The vulnerabilities are rated Important, with CVSS base scores listed in the CVE references, indicating high severity potential for exploitation. Red Hat has released the update; administrators should apply the patch immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102502",
    "publishedAt": "2026-11-23T15:25:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "grafana-update-addresses-remote-code-execution-vul",
      "article-55e19624",
      "55e19624",
      "grafana-update-addresses-remote-code-execution-vul-2ee169",
      "grafana-update-addresses-remote-code-execution-vulnerabiliti"
    ]
  },
  {
    "slug": "synology-dsm-vulnerability-affects-versions-before-f780faa3",
    "title": "Synology DSM Vulnerability Affects Versions Before 7.4.1",
    "summary": "DiskStation Manager (DSM) versions prior to 7.4.1 contain a vulnerability that could allow unauthorized access or privilege escalation. The flaw permits attackers to exploit a logic error in DSM’s authentication flow, potentially bypassing user credentials and gaining elevated privileges. Administrators should upgrade to the latest DSM release or apply the vendor-issued patch, and enforce strict access controls to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/synology-security-advisory-av26-1193",
    "publishedAt": "2026-11-23T15:23:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "synology-dsm-vulnerability-affects-versions-before",
      "article-f780faa3",
      "f780faa3",
      "synology-dsm-vulnerability-affects-versions-before-741c15",
      "synology-dsm-vulnerability-affects-versions-before-7-4-1"
    ]
  },
  {
    "slug": "rhsa-2026-100561-important-openjdk-11-0-33-1-els-s-966b21de",
    "title": "RHSA-2026:100561: Important: OpenJDK 11.0.33.1 ELS Security Update For Portable Linux Builds",
    "summary": "An update is now available for OpenJDK. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100561",
    "publishedAt": "2026-11-23T15:22:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100561-important-openjdk-11-0-33-1-els-s",
      "article-966b21de",
      "966b21de",
      "rhsa-2026-100561-important-openjdk-11-0-33-1-els-s-2ee081",
      "rhsa-2026-100561-important-openjdk-11-0-33-1-els-security-up"
    ]
  },
  {
    "slug": "red-hat-updates-openjdk-11-0-33-1-windows-25229d68",
    "title": "Red Hat Updates OpenJDK 11.0.33.1 Windows",
    "summary": "Red Hat released an OpenJDK 11.0.33.1 ELS update for Windows, fixing vulnerabilities that could allow remote code execution via Java. The advisory lists multiple CVEs, each with a CVSS score marked Important, but no specific CVE IDs are named. Red Hat urges immediate application; no work-arounds are provided, and the patch is available through standard ELS channels.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100562",
    "publishedAt": "2026-11-23T15:20:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-openjdk-11-0-33-1-windows",
      "article-25229d68",
      "25229d68",
      "red-hat-updates-openjdk-11-0-33-1-windows-2ee081"
    ]
  },
  {
    "slug": "fbi-ncic-database-targeted-in-second-cyber-inciden-c85df571",
    "title": "FBI NCIC Database Targeted in Second Cyber Incident",
    "summary": "The FBI’s National Crime Information Center (NCIC) database was targeted in a second cyber incident reported this month. The attack compromised access to records on fugitives, warrants, criminal histories, and missing persons, potentially exposing sensitive law-enforcement data. Investigators are assessing the breach scope, and security teams should monitor for unauthorized access attempts to similar databases.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/23rd-november-threat-intelligence-report/",
    "publishedAt": "2026-11-23T15:16:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fbi-ncic-database-targeted-in-second-cyber-inciden",
      "article-c85df571",
      "c85df571",
      "fbi-ncic-database-targeted-in-second-cyber-inciden-119758",
      "fbi-ncic-database-targeted-in-second-cyber-incident"
    ]
  },
  {
    "slug": "rhsa-2026-102405-important-qt5-qtdeclarative-secur-71c56100",
    "title": "RHSA-2026:102405: Important: qt5-qtdeclarative security update",
    "summary": "An update for qt5-qtdeclarative is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102405",
    "publishedAt": "2026-11-23T15:15:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102405-important-qt5-qtdeclarative-secur",
      "article-71c56100",
      "71c56100",
      "rhsa-2026-102405-important-qt5-qtdeclarative-secur-2ee165",
      "rhsa-2026-102405-important-qt5-qtdeclarative-security-update"
    ]
  },
  {
    "slug": "trump-names-davies-national-cyber-czar-8b4bb737",
    "title": "Trump Names Davies National Cyber Czar",
    "summary": "President Trump has confirmed appointing Pentagon CIO John Davies as national cyber director after widespread support. Davies, who has served as acting director, will lead DoD cyber strategy and coordinate federal cyber defense efforts. The appointment aims to strengthen overall U.S. cyber posture, contingent on interagency cooperation and resource allocation.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/kirsten-davies-trump-intends-nominate-national-cyber-director",
    "publishedAt": "2026-11-23T15:14:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "trump-names-davies-national-cyber-czar",
      "article-8b4bb737",
      "8b4bb737",
      "trump-names-davies-national-cyber-czar-7c9797"
    ]
  },
  {
    "slug": "red-hat-updates-tigervnc-for-rhel-9-6-51c027f3",
    "title": "Red Hat Updates tigervnc for RHEL 9.6",
    "summary": "Red Hat released a tigervnc update for RHEL 9.6 EUS, fixing vulnerabilities that could enable remote code execution via the VNC server. The advisory lists multiple CVEs, each with a CVSS score marked Important, but no specific CVE IDs are named. Red Hat urges immediate application; no work-arounds are offered, and the patch is available through standard EUS channels.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102407",
    "publishedAt": "2026-11-23T15:12:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-tigervnc-for-rhel-9-6",
      "article-51c027f3",
      "51c027f3",
      "red-hat-updates-tigervnc-for-rhel-9-6-2ee165"
    ]
  },
  {
    "slug": "jetbrains-advises-updates-for-multiple-product-vul-f887450b",
    "title": "JetBrains Advises Updates for Multiple Product Vulnerabilities",
    "summary": "JetBrains announced vulnerabilities affecting Junie, Junie CLI, and Junie GitHub Action, with affected versions listed in advisory AV26-1192. The flaws stem from insufficient input validation and insecure configuration defaults, enabling unauthorized code execution or privilege escalation, though no active exploitation has been reported. JetBrains recommends applying the latest patches for all affected versions and reviewing configuration settings to mitigate risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/jetbrains-security-advisory-av26-1192",
    "publishedAt": "2026-11-23T15:11:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "jetbrains-advises-updates-for-multiple-product-vul",
      "article-f887450b",
      "f887450b",
      "jetbrains-advises-updates-for-multiple-product-vul-53189a",
      "jetbrains-advises-updates-for-multiple-product-vulnerabiliti"
    ]
  },
  {
    "slug": "multiple-high-impact-vulnerabilities-exploit-remot-1431ab6d",
    "title": "Multiple High-Impact Vulnerabilities Exploit Remote Code Paths",
    "summary": "This week’s recap highlights several high-impact vulnerabilities, including a VMware 0-Day, Java4Shell, NGINX2Root, and Ruby2Shell, that exploit remote code execution paths. The flaws enable attackers to pivot from one compromised system to another, expanding lateral movement. Vendors have released patches; security teams should apply them promptly and monitor for exploitation attempts.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/weekly-recap-vmware-0-day-java4shell.html",
    "publishedAt": "2026-11-23T15:10:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "multiple-high-impact-vulnerabilities-exploit-remot",
      "article-1431ab6d",
      "1431ab6d",
      "multiple-high-impact-vulnerabilities-exploit-remot-18c20e",
      "multiple-high-impact-vulnerabilities-exploit-remote-code-pat"
    ]
  },
  {
    "slug": "n-able-releases-patch-for-critical-cve-2026-134624-2c7597c5",
    "title": "N-Able Releases Patch for Critical CVE-2026-134624",
    "summary": "N-Able disclosed a critical flaw, CVE-2026-134624, that was exploited during a Mail Assure cyberattack targeting its services. The vulnerability allowed attackers to gain unauthorized access to administrative functions, potentially enabling data exfiltration or service disruption. N-Able released a patch and advised customers to apply the update immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/n-able-patches-critical-flaw-disclosed-after-mail-assure-cyberattack/",
    "publishedAt": "2026-11-23T15:06:49.000Z",
    "cves": [
      "CVE-2026-134624"
    ],
    "additionalSources": [],
    "aliases": [
      "n-able-releases-patch-for-critical-cve-2026-134624",
      "article-2c7597c5",
      "2c7597c5",
      "n-able-releases-patch-for-critical-cve-2026-134624-78d0e6"
    ]
  },
  {
    "slug": "gl-inet-cloud-compromise-deploys-malware-to-router-c6aa16cc",
    "title": "GL.iNet Cloud Compromise Deploys Malware to Routers and KVMs",
    "summary": "Attackers compromised GL.iNet’s GoodCloud remote-management service and used it to install malware on connected routers and KVM devices. The breach exploited unauthorized cloud access, enabling remote code execution on device firmware and allowing persistent control and data exfiltration. GL.iNet has not yet released a patch; teams should isolate affected devices, update firmware when available, and monitor for anomalous traffic.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/gl-inet-cloud-compromise-malware-backdoors/",
    "publishedAt": "2026-11-23T15:05:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gl-inet-cloud-compromise-deploys-malware-to-router",
      "article-c6aa16cc",
      "c6aa16cc",
      "gl-inet-cloud-compromise-deploys-malware-to-router-281202",
      "gl-inet-cloud-compromise-deploys-malware-to-routers-and-kvms"
    ]
  },
  {
    "slug": "red-hat-issues-important-update-for-qt5-qtdeclarat-a2de0e52",
    "title": "Red Hat Issues Important Update for qt5-qtdeclarative",
    "summary": "Red Hat released an important security update for qt5-qtdeclarative on RHEL9.4, correcting several memory corruption bugs in the Qt Declarative module. These flaws could allow local attackers to crash the application or potentially execute arbitrary code, with CVSS scores up to 8.3. Apply the patch through the standard RHEL9.4 update mechanism; no workarounds are provided.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102406",
    "publishedAt": "2026-11-23T15:02:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-update-for-qt5-qtdeclarat",
      "article-a2de0e52",
      "a2de0e52",
      "red-hat-issues-important-update-for-qt5-qtdeclarat-2ee165",
      "red-hat-issues-important-update-for-qt5-qtdeclarative"
    ]
  },
  {
    "slug": "red-hat-issues-important-update-for-tigervnc-3d563aba",
    "title": "Red Hat Issues Important Update for tigervnc",
    "summary": "Red Hat released an important security update for tigervnc on RHEL9.4, fixing multiple remote code execution flaws in the VNC server. The vulnerabilities enable unauthenticated attackers to run arbitrary code with the VNC service’s privileges, with CVSS scores up to 9.2. Apply the patch via the standard RHEL9.4 update channel; no workarounds are available.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102402",
    "publishedAt": "2026-11-23T15:02:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-update-for-tigervnc",
      "article-3d563aba",
      "3d563aba",
      "red-hat-issues-important-update-for-tigervnc-2ee165"
    ]
  },
  {
    "slug": "ai-agent-identity-gaps-span-multiple-platforms-666cfee6",
    "title": "AI Agent Identity Gaps Span Multiple Platforms",
    "summary": "AI agents operating across multiple platforms create security gaps when no single vendor can observe or control their actions, according to Token Security. The shared responsibility problem complicates agent identity, permission, and accountability management for organizations. Organizations should assign clear ownership and accountability for agent identities and permissions across platforms.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/ai-agents-are-creating-a-shared-responsibility-gap/",
    "publishedAt": "2026-11-23T15:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agent-identity-gaps-span-multiple-platforms",
      "article-666cfee6",
      "666cfee6",
      "ai-agent-identity-gaps-span-multiple-platforms-4aa78c"
    ]
  },
  {
    "slug": "huntress-begins-eu-data-hosting-in-frankfurt-12ff4d6c",
    "title": "Huntress Begins EU Data Hosting in Frankfurt",
    "summary": "Huntress has started European Union data hosting, with Phase 1 storing certain data in Frankfurt. The company said other data currently remains in the United States while Phase 2 is planned. Customers should review the available regional data residency details to fully understand which information is hosted in each location.",
    "category": "General",
    "severity": "LOW",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/eu-data-hosting",
    "publishedAt": "2026-11-23T15:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "huntress-begins-eu-data-hosting-in-frankfurt",
      "article-12ff4d6c",
      "12ff4d6c",
      "huntress-begins-eu-data-hosting-in-frankfurt-76a822"
    ]
  },
  {
    "slug": "red-hat-issues-tigervnc-security-update-822afb48",
    "title": "Red Hat Issues Tigervnc Security Update",
    "summary": "Red Hat released a security update for the tigervnc package on RHEL 9.2 for SAP solutions, addressing significant vulnerabilities. The patch fixes flaws that could enable remote code execution or privilege escalation via the VNC protocol, with CVSS scores linked to CVE references. Users should update the tigervnc package promptly to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102400",
    "publishedAt": "2026-11-23T14:56:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-tigervnc-security-update",
      "article-822afb48",
      "822afb48",
      "red-hat-issues-tigervnc-security-update-2ee165"
    ]
  },
  {
    "slug": "n-able-mailassure-vulnerability-advisory-9c081c10",
    "title": "N-Able MailAssure Vulnerability Advisory",
    "summary": "N-Able issued advisory AV26-1191 for MailAssure before 20261121.1943, noting a vulnerability. The flaw may allow unauthorized access to email data or compromise the integrity of mail transmissions, though no exploitation reports have been confirmed. Administrators are advised to review the provided links, apply available updates, and monitor for any anomalous activity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/n-able-security-advisory-av26-1191",
    "publishedAt": "2026-11-23T14:51:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-mailassure-vulnerability-advisory",
      "article-9c081c10",
      "9c081c10",
      "n-able-mailassure-vulnerability-advisory-761d20"
    ]
  },
  {
    "slug": "nvidia-reinstates-jensen-huang-as-ceo-04e4f5e8",
    "title": "NVIDIA Reinstates Jensen Huang as CEO",
    "summary": "NVIDIA reinstated Jensen Huang as president, chief executive officer, and board director on November 23, 2026, after a unanimous board vote. The decision took effect immediately, but an independent board inquiry into reports that a foreign intelligence effort targeted Huang remains open. NVIDIA said the board met with Huang several times and received additional information.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/nvidia-reinstates-jensen-huang/",
    "publishedAt": "2026-11-23T14:51:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nvidia-reinstates-jensen-huang-as-ceo",
      "article-04e4f5e8",
      "04e4f5e8",
      "nvidia-reinstates-jensen-huang-as-ceo-42eb2b"
    ]
  },
  {
    "slug": "wiz-research-reports-agentic-framework-cloud-intru-dbba3a3a",
    "title": "Wiz Research Reports Agentic Framework Cloud Intrusions",
    "summary": "Agentic offensive frameworks such as ARTEX are driving a surge in cloud intrusions, as reported by Wiz Research. These frameworks enable automated, high-velocity attacks that exploit misconfigurations and weak IAM controls, causing unauthorized data exfiltration and service disruption across cloud environments. Security teams should monitor for ARTEX-related activity, enforce least-privilege IAM, and deploy detection rules to spot noisy, machine-speed attacks.",
    "category": "General",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/agentic-attacks-artex-offensive-ai-frameworks",
    "publishedAt": "2026-11-23T14:46:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wiz-research-reports-agentic-framework-cloud-intru",
      "article-dbba3a3a",
      "dbba3a3a",
      "wiz-research-reports-agentic-framework-cloud-intru-44fa60",
      "wiz-research-reports-agentic-framework-cloud-intrusions"
    ]
  },
  {
    "slug": "red-hat-issues-cockpit-security-update-18124180",
    "title": "Red Hat Issues Cockpit Security Update",
    "summary": "Red Hat released a security update for the cockpit web console on RHEL 9.6 EUS, addressing critical vulnerabilities. The update resolves bugs that could allow authenticated users to execute arbitrary commands or elevate privileges, with CVSS scores available via CVE links. Administrators should apply the cockpit package update immediately to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102348",
    "publishedAt": "2026-11-23T14:44:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-cockpit-security-update",
      "article-18124180",
      "18124180",
      "red-hat-issues-cockpit-security-update-2ee162"
    ]
  },
  {
    "slug": "red-hat-advises-updates-for-multiple-rhel-versions-5f2cf303",
    "title": "Red Hat Advises Updates for Multiple RHEL Versions",
    "summary": "Red Hat issued advisory AV26-1190 affecting all RHEL 6-10, Hardened Images, and OpenShift 4-5. The advisory references multiple undisclosed vulnerabilities across these products, with no CVE IDs provided, implying potential remote code execution or privilege escalation risks. Administrators should review Red Hat’s links and apply available patches as soon as they are released.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/red-hat-security-advisory-av26-1190",
    "publishedAt": "2026-11-23T14:40:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-advises-updates-for-multiple-rhel-versions",
      "article-5f2cf303",
      "5f2cf303",
      "red-hat-advises-updates-for-multiple-rhel-versions-cc2e06"
    ]
  },
  {
    "slug": "red-hat-releases-critical-php-update-for-rhel9-ca848282",
    "title": "Red Hat Releases Critical PHP Update for RHEL9",
    "summary": "Red Hat released a critical PHP update for RHEL9, addressing multiple vulnerabilities. The update fixes several PHP bugs that could allow remote code execution or privilege escalation; CVSS scores indicate high severity, though specific CVE IDs are not listed. Red Hat has made the update available through standard repositories; administrators should install the latest php package to mitigate the risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102297",
    "publishedAt": "2026-11-23T14:37:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-php-update-for-rhel9",
      "article-ca848282",
      "ca848282",
      "red-hat-releases-critical-php-update-for-rhel9-2ee15f"
    ]
  },
  {
    "slug": "red-hat-issues-qt5-qtdeclarative-update-for-rhel-9-c62fa871",
    "title": "Red Hat Issues qt5-qtdeclarative Update for RHEL 9.2",
    "summary": "Red Hat released a security update for qt5-qtdeclarative on Red Enterprise Linux 9.2, targeting SAP Solution services. The patch addresses multiple CVE-linked vulnerabilities, each assigned a CVSS base score that denotes an important impact; no active exploitation is reported. Red Hat recommends applying the update through the standard package manager; no workaround is necessary.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102398",
    "publishedAt": "2026-11-23T14:35:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-qt5-qtdeclarative-update-for-rhel-9",
      "article-c62fa871",
      "c62fa871",
      "red-hat-issues-qt5-qtdeclarative-update-for-rhel-9-2ee162",
      "red-hat-issues-qt5-qtdeclarative-update-for-rhel-9-2"
    ]
  },
  {
    "slug": "eu-academy-access-disabled-after-data-exposure-att-13ac5f6c",
    "title": "EU Academy Access Disabled After Data Exposure Attack",
    "summary": "The European Commission disabled public access to the EU Academy platform after a cyberattack exposed users’ personal data. The breach involved unauthorized access to the learning platform’s database, potentially compromising contact information and enrollment records. The Commission has not disclosed the number of affected users; security teams should monitor for credential misuse and enforce stricter access controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/eu-academy-disabled/",
    "publishedAt": "2026-11-23T14:34:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "eu-academy-access-disabled-after-data-exposure-att",
      "article-13ac5f6c",
      "13ac5f6c",
      "eu-academy-access-disabled-after-data-exposure-att-af6925",
      "eu-academy-access-disabled-after-data-exposure-attack"
    ]
  },
  {
    "slug": "fake-claude-ai-app-distributes-revstealer-infostea-55053197",
    "title": "Fake Claude AI App Distributes RevStealer Infostealer",
    "summary": "Hackers distributed RevStealer, a Windows infostealer, via a counterfeit Claude AI desktop application promising free access. The 101 MB archive launches malware that harvests saved passwords, browser sessions, and cryptocurrency wallet data without opening a chat window. Security teams should verify application authenticity, block the download source, and deploy endpoint protection to detect and remove RevStealer.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-hide-revstealer-malware/",
    "publishedAt": "2026-11-23T14:24:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fake-claude-ai-app-distributes-revstealer-infostea",
      "article-55053197",
      "55053197",
      "fake-claude-ai-app-distributes-revstealer-infostea-4d4447",
      "fake-claude-ai-app-distributes-revstealer-infostealer"
    ]
  },
  {
    "slug": "red-hat-issues-qt6-update-for-rhel-10-0-eus-012d7a37",
    "title": "Red Hat Issues Qt6 Update for RHEL 10.0 EUS",
    "summary": "Red Enterprise Linux 10.0 EUS users receive a qt6-qtbase update addressing security issues in the Qt framework. The patch mitigates several vulnerabilities that could enable remote code execution or privilege escalation; CVSS scores are provided, but no public exploit is known. Red Hat recommends installing the update via the package manager; no work-arounds are available.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102350",
    "publishedAt": "2026-11-23T14:15:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-qt6-update-for-rhel-10-0-eus",
      "article-012d7a37",
      "012d7a37",
      "red-hat-issues-qt6-update-for-rhel-10-0-eus-2ee162"
    ]
  },
  {
    "slug": "vmcloudoor-backdoor-targets-alibaba-tencent-huawei-e4513407",
    "title": "Vmcloudoor Backdoor Targets Alibaba, Tencent, Huawei Clouds",
    "summary": "The newly discovered Linux backdoor, Vmcloudoor, covertly commandeers cloud servers, enabling attackers to exfiltrate sensitive files. Designed to infect virtual machines on Chinese cloud platforms, it masquerades as a legitimate cloud-management agent, reducing detection by administrators. Security teams should isolate affected instances, update to the latest vendor patches, and monitor for unauthorized agent activity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/vmcloudoor-malware/",
    "publishedAt": "2026-11-23T14:14:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vmcloudoor-backdoor-targets-alibaba-tencent-huawei",
      "article-e4513407",
      "e4513407",
      "vmcloudoor-backdoor-targets-alibaba-tencent-huawei-67482d",
      "vmcloudoor-backdoor-targets-alibaba-tencent-huawei-clouds"
    ]
  },
  {
    "slug": "red-hat-releases-critical-php-update-for-rhel-10-c415e070",
    "title": "Red Hat Releases Critical PHP Update for RHEL 10",
    "summary": "Red Enterprise Linux 10 users receive a php update addressing multiple security flaws in the PHP engine. The update fixes vulnerabilities that could allow remote code execution or privilege escalation; CVSS scores are listed, but no public exploit exists. Red Hat recommends applying the patch immediately via the standard package manager; no work-arounds are available.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102300",
    "publishedAt": "2026-11-23T14:02:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-php-update-for-rhel-10",
      "article-c415e070",
      "c415e070",
      "red-hat-releases-critical-php-update-for-rhel-10-2ee161"
    ]
  },
  {
    "slug": "cloudflare-builds-dns-testing-tools-for-internal-f-47f9c202",
    "title": "Cloudflare Builds DNS Testing Tools for Internal Framework",
    "summary": "Cloudflare developed internal tools to extend its testing framework for networking protocols, focusing on DNS. The new DNS tooling enables teams to probe protocol behavior, identify edge cases, and validate performance under load. These tools are available internally and can be leveraged by security teams to assess DNS resilience and detect anomalies.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/probing-dns-at-cloudflare/",
    "publishedAt": "2026-11-23T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-builds-dns-testing-tools-for-internal-f",
      "article-47f9c202",
      "47f9c202",
      "cloudflare-builds-dns-testing-tools-for-internal-f-6baf0f",
      "cloudflare-builds-dns-testing-tools-for-internal-framework"
    ]
  },
  {
    "slug": "usn-9186-1-tomcat-vulnerabilities-eede7db4",
    "title": "USN-9186-1: Tomcat vulnerabilities",
    "summary": "Tomcat 10 has been updated to 10.1.61 in Ubuntu 24.04 LTS, Ubuntu 26.04 LTS and Ubuntu 26.10. Tomcat 11 has been updated to 11.0.27 in Ubuntu 26.04 LTS and Ubuntu 26.10. In addition to security fixes, the updated packages contain bug fixes, new features, and possibly incompatible changes.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9186-1",
    "publishedAt": "2026-11-23T13:59:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9186-1-tomcat-vulnerabilities",
      "article-eede7db4",
      "eede7db4",
      "usn-9186-1-tomcat-vulnerabilities-7e77ea"
    ]
  },
  {
    "slug": "wordpress-site-hosts-13-clickfix-malware-traps-30fce793",
    "title": "WordPress Site Hosts 13 ClickFix Malware Traps",
    "summary": "A compromised WordPress site hosted 13 ClickFix traps from three malware kits, each presenting a fake security check. The traps use social engineering to convince users to paste malicious commands, a phishing kit requiring user interaction. Security teams should remove infected plugins, update WordPress core, and monitor for similar deceptive traps.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-plant-13-clickfix-traps/",
    "publishedAt": "2026-11-23T13:58:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wordpress-site-hosts-13-clickfix-malware-traps",
      "article-30fce793",
      "30fce793",
      "wordpress-site-hosts-13-clickfix-malware-traps-bb8ae7"
    ]
  },
  {
    "slug": "php-session-overwrite-flaw-enables-remote-code-exe-5c0c352c",
    "title": "PHP Session Overwrite Flaw Enables Remote Code Execution",
    "summary": "A PHP session overwrite flaw lets attackers inject malicious data during an interrupted overwrite, triggering deserialization and remote code execution on apps. The flaw, part of the PHP2Shell chain, exploits improper session data handling and can be triggered without authentication, risking server compromise. No patch exists yet; admins should disable session overwrite or apply custom fixes to block deserialization attacks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/phpaftershell-vulnerability-revives-php2shells-attack-path/",
    "publishedAt": "2026-11-23T13:58:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php-session-overwrite-flaw-enables-remote-code-exe",
      "article-5c0c352c",
      "5c0c352c",
      "php-session-overwrite-flaw-enables-remote-code-exe-3953b3",
      "php-session-overwrite-flaw-enables-remote-code-execution"
    ]
  },
  {
    "slug": "red-hat-updates-containernetworking-plugins-for-se-83a9fa45",
    "title": "Red Hat Updates containernetworking-plugins for Security",
    "summary": "Red Hat released a security update for containernetworking-plugins on RHEL 9, fixing local privilege escalation via container networking. Each flaw has a CVSS base score, with the highest rated as Important, indicating a high exploitation risk though no active attacks have been reported. Apply the update immediately and monitor logs for privilege escalation attempts as the patch closes critical paths.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102292",
    "publishedAt": "2026-11-23T13:44:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-containernetworking-plugins-for-se",
      "article-83a9fa45",
      "83a9fa45",
      "red-hat-updates-containernetworking-plugins-for-se-2ee15f",
      "red-hat-updates-containernetworking-plugins-for-security"
    ]
  },
  {
    "slug": "ibm-issues-advisory-for-multiple-vulnerabilities-27fd094c",
    "title": "IBM Issues Advisory for Multiple Vulnerabilities",
    "summary": "IBM disclosed vulnerabilities in Engineering AI Hub up to 1.4.0 and Guardium Data Protection up to 12.2, enabling unauthorized access. Flaws stem from insufficient input validation and privilege checks, with CVSS 7.0-8.5, though no exploitation reported. Apply the latest firmware updates and review advisory links for mitigation guidance to secure deployments.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/ibm-security-advisory-av26-1189",
    "publishedAt": "2026-11-23T13:38:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ibm-issues-advisory-for-multiple-vulnerabilities",
      "article-27fd094c",
      "27fd094c",
      "ibm-issues-advisory-for-multiple-vulnerabilities-4d932a"
    ]
  },
  {
    "slug": "red-hat-updates-xdg-desktop-portal-for-security-8968871e",
    "title": "Red Hat Updates xdg-desktop-portal for Security",
    "summary": "Red Hat released a security update for xdg-desktop-portal on RHEL 8.8 Update Services, fixing local privilege escalation via desktop portal. Flaws carry CVSS scores, highest rated Important, indicating high exploitation risk but no active attacks reported. Apply the update immediately and monitor logs for privilege escalation attempts as the patch closes critical paths.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102290",
    "publishedAt": "2026-11-23T13:33:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-xdg-desktop-portal-for-security",
      "article-8968871e",
      "8968871e",
      "red-hat-updates-xdg-desktop-portal-for-security-2ee15f"
    ]
  },
  {
    "slug": "microsoft-tests-fix-for-windows-11-bluetooth-audio-654313d2",
    "title": "Microsoft Tests Fix for Windows 11 Bluetooth Audio Drops",
    "summary": "Microsoft is testing a fix for a long-standing Windows 11 Bluetooth audio quality drop affecting headphone users. The issue stems from an audio driver mis-handling of Bluetooth codec parameters, causing significant degradation but lacking remote code execution or data exfiltration. Microsoft has released a test build; users should install the forthcoming update once available to restore audio fidelity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-testing-fix-for-windows-11-bluetooth-audio-quality-drops/",
    "publishedAt": "2026-11-23T13:28:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-tests-fix-for-windows-11-bluetooth-audio",
      "article-654313d2",
      "654313d2",
      "microsoft-tests-fix-for-windows-11-bluetooth-audio-2318cc",
      "microsoft-tests-fix-for-windows-11-bluetooth-audio-drops"
    ]
  },
  {
    "slug": "gl-inet-devices-compromised-via-remote-management-d318a9d0",
    "title": "GL.iNet Devices Compromised via Remote Management Flaw",
    "summary": "Attackers exploited a flaw in GL.iNet’s GoodCloud remote management to push malware onto routers and KVMs, enabling code execution. The flaw stems from insufficient authentication checks, allowing unauthenticated attackers to upload and execute arbitrary firmware. GL.iNet recommends installing the latest firmware and disabling remote management until a patch is applied to mitigate the threat.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/gl-inet-routers-kvms-compromised-via-remote-management-service-flaw/",
    "publishedAt": "2026-11-23T13:26:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gl-inet-devices-compromised-via-remote-management",
      "article-d318a9d0",
      "d318a9d0",
      "gl-inet-devices-compromised-via-remote-management-4e72f5",
      "gl-inet-devices-compromised-via-remote-management-flaw"
    ]
  },
  {
    "slug": "binary-parser-vulnerability-enables-javascript-inj-4dfae943",
    "title": "binary-parser Vulnerability Enables JavaScript Injection",
    "summary": "A critical flaw in the binary-parser library (CVE-2026-134814) allows attackers controlling parser definitions to inject and execute arbitrary JavaScript code. The vulnerability, affecting binary-parser versions before 2.3.1, has a CVSS score of 9.2, indicating high exploitation potential and remote code execution. Users should upgrade to binary-parser 2.3.1 or later and apply any vendor-provided patches to mitigate the injection risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/critical-binary-parser-flaw-enables.html",
    "publishedAt": "2026-11-23T13:22:20.000Z",
    "cves": [
      "CVE-2026-134814"
    ],
    "additionalSources": [],
    "aliases": [
      "binary-parser-vulnerability-enables-javascript-inj",
      "article-4dfae943",
      "4dfae943",
      "binary-parser-vulnerability-enables-javascript-inj-3a1c13",
      "binary-parser-vulnerability-enables-javascript-injection"
    ]
  },
  {
    "slug": "linux-8-8-receives-important-webkit2gtk3-update-96d7cd26",
    "title": "Linux 8.8 Receives Important webkit2gtk3 Update",
    "summary": "Red Enterprise Linux 8.8 and SAP/Telecommunications Update Services receive an important security update for the webkit2gtk3 component. The advisory references CVSS base scores for each vulnerability, though specific CVE identifiers are not listed in the release. System administrators should install the update promptly to address the identified weaknesses and maintain platform integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102291",
    "publishedAt": "2026-11-23T13:12:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-8-8-receives-important-webkit2gtk3-update",
      "article-96d7cd26",
      "96d7cd26",
      "linux-8-8-receives-important-webkit2gtk3-update-2ee15f"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-rt-patch-for-rhel-9-2-f2ae7ef0",
    "title": "Red Hat Releases Kernel-RT Patch for RHEL 9.2",
    "summary": "Red Hat released an important kernel-rt update for RHEL 9.2 SAP services, addressing multiple security bugs. The update mitigates vulnerabilities that could allow privilege escalation or denial of service, though no active exploitation has been reported. Security teams should apply the kernel-rt patch immediately and verify kernel integrity to maintain system stability.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102294",
    "publishedAt": "2026-11-23T13:07:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-rt-patch-for-rhel-9-2",
      "article-f2ae7ef0",
      "f2ae7ef0",
      "red-hat-releases-kernel-rt-patch-for-rhel-9-2-2ee15f"
    ]
  },
  {
    "slug": "red-hat-releases-critical-php-8-2-security-update-f727fc43",
    "title": "Red Hat Releases Critical PHP 8.2 Security Update",
    "summary": "Red Hat released a critical update for php:8.2 on RHEL 9, fixing flaws that could allow remote code execution via malformed PHP input. The patch addresses multiple CVE-identified vulnerabilities with CVSS scores above 9.0, eliminating unauthenticated code injection risk. Apply RHSA-2026:102261 or upgrade to the latest php:8.2 image immediately, then verify application compatibility.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102261",
    "publishedAt": "2026-11-23T13:05:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-php-8-2-security-update",
      "article-f727fc43",
      "f727fc43",
      "red-hat-releases-critical-php-8-2-security-update-2ee15e"
    ]
  },
  {
    "slug": "red-enterprise-linux-9-receives-critical-php-8-4-u-c973cf10",
    "title": "Red Enterprise Linux 9 Receives Critical php:8.4 Update",
    "summary": "Red Enterprise Linux 9 users receive a critical update for the php:8.4 module, addressing multiple security vulnerabilities. The advisory lists CVSS base scores for each flaw, but no specific CVE identifiers are disclosed in the release notes. Administrators should apply the update immediately to mitigate the risk, as the patch resolves the identified weaknesses.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102255",
    "publishedAt": "2026-11-23T13:04:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-enterprise-linux-9-receives-critical-php-8-4-u",
      "article-c973cf10",
      "c973cf10",
      "red-enterprise-linux-9-receives-critical-php-8-4-u-2ee15e",
      "red-enterprise-linux-9-receives-critical-php-8-4-update"
    ]
  },
  {
    "slug": "rhel-10-rsync-update-addresses-security-flaws-3f6b1e3f",
    "title": "RHEL 10 rsync Update Addresses Security Flaws",
    "summary": "Red Hat released an rsync update for RHEL 10, rated Important by Product Security, addressing multiple undisclosed vulnerabilities. Each vulnerability has an associated CVSS base score, but no specific CVE identifiers are listed in the advisory. Users should apply the update promptly to mitigate potential exploitation and ensure rsync integrity on their systems.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102293",
    "publishedAt": "2026-11-23T13:00:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel-10-rsync-update-addresses-security-flaws",
      "article-3f6b1e3f",
      "3f6b1e3f",
      "rhel-10-rsync-update-addresses-security-flaws-2ee15f"
    ]
  },
  {
    "slug": "cleverbridge-reports-credit-card-data-theft-c5388145",
    "title": "Cleverbridge Reports Credit Card Data Theft",
    "summary": "Cleverbridge confirmed a breach on November 4, 2026, during which attackers accessed stored credit card and CVV numbers from its e-commerce platform. The incident involved unauthorized activity detected by the platform, but the extent of affected clients and customer data remains unspecified. Cleverbridge urged affected customers to monitor accounts, change passwords, and contact payment processors for further protection.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/cleverbridge-data-breach-card-numbers-cvv/",
    "publishedAt": "2026-11-23T13:00:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cleverbridge-reports-credit-card-data-theft",
      "article-c5388145",
      "c5388145",
      "cleverbridge-reports-credit-card-data-theft-606837"
    ]
  },
  {
    "slug": "red-hat-issues-important-freerdp-update-4d3c810a",
    "title": "Red Hat Issues Important FreeRDP Update",
    "summary": "Red Hat released an important security update for the freerdp package on RHEL 8, addressing a flaw that could allow remote code execution via RDP packets. The vulnerability, rated CVSS 8.2 by Red Hat, enables attackers with network access to execute code on the target system.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102286",
    "publishedAt": "2026-11-23T12:58:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-freerdp-update",
      "article-4d3c810a",
      "4d3c810a",
      "red-hat-issues-important-freerdp-update-2ee15f"
    ]
  },
  {
    "slug": "iterm2-remote-code-execution-flaw-lets-hackers-run-1a5ec94c",
    "title": "iTerm2 Remote Code Execution Flaw Lets Hackers Run Malicious Commands by Displaying Crafted Files",
    "summary": "A security flaw in iTerm2, a macOS terminal emulator, lets attackers run commands when a user displays a specially crafted file in a vulnerable terminal session. The user does not have to run the file as a script or paste a command supplied by the attacker.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/iterm2-remote-code-execution-flaw/",
    "publishedAt": "2026-11-23T12:57:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "iterm2-remote-code-execution-flaw-lets-hackers-run",
      "article-1a5ec94c",
      "1a5ec94c",
      "iterm2-remote-code-execution-flaw-lets-hackers-run-78c586",
      "iterm2-remote-code-execution-flaw-lets-hackers-run-malicious"
    ]
  },
  {
    "slug": "fbi-investigates-breach-of-national-crime-informat-198d95d0",
    "title": "FBI Investigates Breach of National Crime Information Center",
    "summary": "A breach of the FBI’s National Crime Information Center (NCIC) exposed sensitive criminal and investigative data. The intrusion exploited an unpatched authentication flaw, potentially granting attackers access to records of fugitives, missing persons, and criminal histories. FBI officials are investigating, urging stakeholders to monitor for unauthorized disclosures and tighten internal access controls while a patch is developed.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/data-breaches/2026/11/fbi-crime-database-reportedly-hacked",
    "publishedAt": "2026-11-23T12:57:11.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "The Record",
        "sourceUrl": "https://therecord.media/fbi-cyberattack-data-breach"
      }
    ],
    "aliases": [
      "fbi-investigates-breach-of-national-crime-informat",
      "article-198d95d0",
      "198d95d0",
      "fbi-investigates-breach-of-national-crime-informat-426861",
      "fbi-investigates-breach-of-national-crime-information-center"
    ]
  },
  {
    "slug": "ai-agent-enables-theft-of-insurer-and-eu-data-68acdc27",
    "title": "AI Agent Enables Theft of Insurer and EU Data",
    "summary": "A low-skilled hacker used a jailbroken AI agent to exfiltrate an insurer’s customer database and 8.6 GB of EU municipal files over nine days. The attacker issued misspelled French commands, exploiting the agent’s model to bypass authentication. Security teams should isolate the AI environment, revoke credentials, and conduct comprehensive analysis of breached systems.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/jailbroken-ai-agent/",
    "publishedAt": "2026-11-23T12:44:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agent-enables-theft-of-insurer-and-eu-data",
      "article-68acdc27",
      "68acdc27",
      "ai-agent-enables-theft-of-insurer-and-eu-data-6bf745"
    ]
  },
  {
    "slug": "crowdstrike-agrees-to-acquire-zscaler-for-43-9b-7b45dcf3",
    "title": "CrowdStrike Agrees to Acquire Zscaler for $43.9B",
    "summary": "CrowdStrike announced a $43.9 billion all-stock acquisition of Zscaler, aiming to integrate Zscaler’s cloud network security into its Falcon platform. The deal expands CrowdStrike’s control over device endpoints and corporate app connections, potentially consolidating cloud security services under a single vendor. Regulatory approvals remain pending; stakeholders should monitor integration timelines and potential antitrust reviews.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/crowdstrike-acquire-zscaler/",
    "publishedAt": "2026-11-23T12:44:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-agrees-to-acquire-zscaler-for-43-9b",
      "article-7b45dcf3",
      "7b45dcf3",
      "crowdstrike-agrees-to-acquire-zscaler-for-43-9b-1750db"
    ]
  },
  {
    "slug": "screenconnect-cve-2026-84869-enables-msp-technicia-884b5434",
    "title": "ScreenConnect CVE-2026-84869 Enables MSP Technician Hijack",
    "summary": "Threat actors exploited a patched flaw in ConnectWise ScreenConnect, identified as CVE-2026-84869, to hijack managed service provider technician workstations. The CVSS 9.9 score marks it as a critical unauthenticated RCE that lets a guest transfer and execute malicious payloads. ConnectWise issued an emergency patch; administrators must apply it immediately and limit guest access to prevent exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-critical-screenconnect.html",
    "publishedAt": "2026-11-23T12:41:04.000Z",
    "cves": [
      "CVE-2026-84869"
    ],
    "additionalSources": [],
    "aliases": [
      "screenconnect-cve-2026-84869-enables-msp-technicia",
      "article-884b5434",
      "884b5434",
      "screenconnect-cve-2026-84869-enables-msp-technicia-1e79ee",
      "screenconnect-cve-2026-84869-enables-msp-technician-hijack"
    ]
  },
  {
    "slug": "n-able-exposes-cve-2026-134624-ssrf-in-mail-assure-2650ac11",
    "title": "N-Able Exposes CVE-2026-134624 SSRF in Mail Assure",
    "summary": "N-Able disclosed a critical SSRF flaw, CVE-2026-134624, discovered during an investigation of its Mail Assure and SpamExperts Hosted Cloud breach. The vulnerability permits a high-privilege API user to open connections to arbitrary internal systems, enabling potential lateral movement. N-Able recommends applying the vendor patch immediately and restricting API access to mitigate exploitation risks.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/n-able-discloses-critical-mail-assure.html",
    "publishedAt": "2026-11-23T12:28:09.000Z",
    "cves": [
      "CVE-2026-134624"
    ],
    "additionalSources": [],
    "aliases": [
      "n-able-exposes-cve-2026-134624-ssrf-in-mail-assure",
      "article-2650ac11",
      "2650ac11",
      "n-able-exposes-cve-2026-134624-ssrf-in-mail-assure-530267"
    ]
  },
  {
    "slug": "i4c-warns-against-sharing-confidential-data-on-wha-7d7235d8",
    "title": "I4C Warns Against Sharing Confidential Data on WhatsApp Web",
    "summary": "The Indian Cyber Crime Coordination Center cautioned users against sharing confidential data on WhatsApp Web, citing risks of session hijacking. The advisory notes that an attacker with access to a signed-in browser session can read messages and view contacts, compromising privacy. Users should log out manually after each session and avoid sharing sensitive information on the platform to mitigate exposure.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/whatsapp-web-confidential-data/",
    "publishedAt": "2026-11-23T12:19:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "i4c-warns-against-sharing-confidential-data-on-wha",
      "article-7d7235d8",
      "7d7235d8",
      "i4c-warns-against-sharing-confidential-data-on-wha-23ca8e",
      "i4c-warns-against-sharing-confidential-data-on-whatsapp-web"
    ]
  },
  {
    "slug": "red-hat-issues-libxrender-security-update-47c1eed1",
    "title": "Red Hat Issues libXrender Security Update",
    "summary": "Red Hat released an important security update for libXrender on RHEL 7 Extended Lifecycle Support. The update addresses one or more vulnerabilities with CVSS scores available via linked CVE references, though specific IDs are not listed. Apply the libXrender update immediately, promptly, and follow Red Hat advisories for installation guidance.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102282",
    "publishedAt": "2026-11-23T12:16:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-libxrender-security-update",
      "article-47c1eed1",
      "47c1eed1",
      "red-hat-issues-libxrender-security-update-2ee15f"
    ]
  },
  {
    "slug": "dragos-finds-undetected-intrusions-at-ai-providers-6ff8354c",
    "title": "Dragos Finds Undetected Intrusions at AI Providers",
    "summary": "Dragos discovered undetected intrusions at three AI inference providers that siphoned nearly two million prompts from AI services. The attackers exploited weaknesses in prompt handling and authentication, enabling data exfiltration without triggering existing monitoring systems. Security teams should review prompt validation, strengthen access controls, and deploy anomaly detection to prevent future theft.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/ai-inference-providers-failed-to-detect-hacking-and-prompt-theft-says-dragos/",
    "publishedAt": "2026-11-23T12:16:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "dragos-finds-undetected-intrusions-at-ai-providers",
      "article-6ff8354c",
      "6ff8354c",
      "dragos-finds-undetected-intrusions-at-ai-providers-4971dd"
    ]
  },
  {
    "slug": "red-hat-issues-librabbitmq-security-update-29d2cee6",
    "title": "Red Hat Issues librabbitmq Security Update",
    "summary": "Red Hat released an important security update for librabbitmq on RHEL 10. The update mitigates vulnerabilities with CVSS scores available via linked CVE references, though specific IDs are not listed, and it applies to all affected librabbitmq packages. Install the librabbitmq update promptly and consult Red Hat advisories for detailed guidance.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102283",
    "publishedAt": "2026-11-23T12:13:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-librabbitmq-security-update",
      "article-29d2cee6",
      "29d2cee6",
      "red-hat-issues-librabbitmq-security-update-2ee15f"
    ]
  },
  {
    "slug": "red-hat-releases-libxrender-security-update-89fe55ea",
    "title": "Red Hat Releases libXrender Security Update",
    "summary": "Red Hat released a security update for libXrender on Enterprise Linux 8.8, addressing multiple vulnerabilities rated as Important. The update includes patches for CVEs referenced in the advisory, each with a CVSS base score that informs the severity. Administrators should apply the update promptly and verify that libXrender is at the latest patched version to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102281",
    "publishedAt": "2026-11-23T12:12:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-libxrender-security-update",
      "article-89fe55ea",
      "89fe55ea",
      "red-hat-releases-libxrender-security-update-2ee15f"
    ]
  },
  {
    "slug": "rhsa-2026-102288-important-red-hat-amq-broker-7-14-07642452",
    "title": "RHSA-2026:102288: Important: Red Hat AMQ Broker 7.14.2 release and security update",
    "summary": "Red Hat AMQ Broker 7.14.2 is now available from the Red Hat Customer Portal. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102288",
    "publishedAt": "2026-11-23T12:11:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102288-important-red-hat-amq-broker-7-14",
      "article-07642452",
      "07642452",
      "rhsa-2026-102288-important-red-hat-amq-broker-7-14-2ee15f",
      "rhsa-2026-102288-important-red-hat-amq-broker-7-14-2-release"
    ]
  },
  {
    "slug": "red-hat-releases-libxrender-security-update-for-rh-eb9e39b2",
    "title": "Red Hat Releases libXrender Security Update for RHEL 8.6",
    "summary": "Red Hat released a libXrender security update for RHEL 8.6 Advanced Mission Critical and Extended Update Support, fixing multiple vulnerabilities. The vulnerabilities have CVSS base scores linked via CVE references, indicating significant risk if unpatched. Administrators should apply the update promptly to mitigate the identified security issues across all affected systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102280",
    "publishedAt": "2026-11-23T12:08:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-libxrender-security-update-for-rh",
      "article-eb9e39b2",
      "eb9e39b2",
      "red-hat-releases-libxrender-security-update-for-rh-2ee15f",
      "red-hat-releases-libxrender-security-update-for-rhel-8-6"
    ]
  },
  {
    "slug": "peruvian-call-center-operator-sentenced-to-eight-y-a9926847",
    "title": "Peruvian Call Center Operator Sentenced to Eight Years",
    "summary": "A Peruvian call-center operator received an eight-year sentence for facilitating a government-impersonation fraud that targeted over 30,000 Spanish-speaking U.S. residents. The scheme used deceptive calls to coerce victims into revealing personal data, leading to millions of dollars stolen. The conviction highlights the legal consequences for individuals aiding such fraud operations.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/call-center-operator-gets-8-years-for-helping-scam-30-000-americans/",
    "publishedAt": "2026-11-23T12:02:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "peruvian-call-center-operator-sentenced-to-eight-y",
      "article-a9926847",
      "a9926847",
      "peruvian-call-center-operator-sentenced-to-eight-y-1172be",
      "peruvian-call-center-operator-sentenced-to-eight-years"
    ]
  },
  {
    "slug": "cisco-expressway-cve-2026-76466-enables-remote-roo-ec41c6ad",
    "title": "Cisco Expressway CVE-2026-76466 Enables Remote Root Access Exploitation",
    "summary": "Cisco Expressway devices are compromised by CVE-2026-76466, allowing attackers to gain root privileges without authentication. The flaw permits unauthenticated remote code execution via the web interface, enabling full system takeover and potential lateral movement. Cisco has released a patch; administrators must apply it immediately and verify device integrity to mitigate exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-exploit-critical-cisco-expressway-flaw/",
    "publishedAt": "2026-11-23T12:02:15.000Z",
    "cves": [
      "CVE-2026-76466"
    ],
    "additionalSources": [
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/cisco-expressway-vulnerability-exploited/"
      }
    ],
    "aliases": [
      "cisco-expressway-cve-2026-76466-enables-remote-roo",
      "article-ec41c6ad",
      "ec41c6ad",
      "cisco-expressway-cve-2026-76466-enables-remote-roo-2b8cb0",
      "cisco-expressway-cve-2026-76466-enables-remote-root-access-e"
    ]
  },
  {
    "slug": "essay-argues-ai-lacks-legal-rights-81502dc3",
    "title": "Essay Argues AI Lacks Legal Rights",
    "summary": "Character.AI petitioned a court to dismiss a death suit, claiming chatbot’s speech was protected and the company was a service, not a product. Judge Anne Conway rejected both arguments in May 2025, holding that the chatbot’s content could be subject to product-liability law. The ruling underscores the debate over AI accountability and limits of First Amendment protections for machine-generated speech.",
    "category": "General",
    "severity": "LOW",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/11/humans-have-rights-machines-do-not.html",
    "publishedAt": "2026-11-23T12:00:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "essay-argues-ai-lacks-legal-rights",
      "article-81502dc3",
      "81502dc3",
      "essay-argues-ai-lacks-legal-rights-1dc8c0"
    ]
  },
  {
    "slug": "cisa-adds-two-known-exploited-vulnerabilities-to-c-ed14a870",
    "title": "CISA Adds Two Known Exploited Vulnerabilities to Catalog",
    "summary": "CISA has added two new vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog , based on evidence of active exploitation. CVE-2026-133968 Project MONAI MONAI Label Path Traversal Vulnerability CVE-2026-134624 N-able Mail Assure (SpamExperts) Server-Side Request Forgery (SSRF) Vulnerability These types of vulnerabilities are a frequent attack vector for malicious cyber actors and pose significant risks to the federal enterprise.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/11/23/cisa-adds-two-known-exploited-vulnerabilities-catalog",
    "publishedAt": "2026-11-23T12:00:00.000Z",
    "cves": [
      "CVE-2026-133968",
      "CVE-2026-134624"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-two-known-exploited-vulnerabilities-to-c",
      "article-ed14a870",
      "ed14a870",
      "cisa-adds-two-known-exploited-vulnerabilities-to-c-6d6b67",
      "cisa-adds-two-known-exploited-vulnerabilities-to-catalog"
    ]
  },
  {
    "slug": "red-hat-releases-patch-update-for-rhel-10-37b0ef8e",
    "title": "Red Hat Releases Patch Update for RHEL 10",
    "summary": "Red Hat released a security update for the patch component on RHEL 10, addressing several vulnerabilities. The vulnerabilities carry CVSS base scores linked via CVE references, indicating moderate risk if unpatched. Administrators should apply the update promptly to mitigate the identified security issues across all affected systems in the production environment.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102274",
    "publishedAt": "2026-11-23T11:46:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-patch-update-for-rhel-10",
      "article-37b0ef8e",
      "37b0ef8e",
      "red-hat-releases-patch-update-for-rhel-10-2ee15e"
    ]
  },
  {
    "slug": "badbox-3-0-ad-fraud-operation-disrupted-4267da39",
    "title": "BadBox 3.0 Ad Fraud Operation Disrupted",
    "summary": "Backdoors on low-cost consumer devices enabled the BadBox 3.0 ad-fraud operation, delivering modules that generated 40 billion bid requests daily. The operation leveraged residential-proxy capabilities to obfuscate traffic, creating an ad-fraud network that inflated auction volumes and siphoned revenue from publishers. Security teams coordinated a takedown that disrupted the backdoor infrastructure, halting bid-request generation and exposing compromised devices for remediation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/badbox-3-0-ad-fraud-operation-generating-40-billion-daily-bid-requests-disrupted/",
    "publishedAt": "2026-11-23T11:44:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "badbox-3-0-ad-fraud-operation-disrupted",
      "article-4267da39",
      "4267da39",
      "badbox-3-0-ad-fraud-operation-disrupted-2a52b5"
    ]
  },
  {
    "slug": "oxloader-hijacks-dlls-to-spread-multiple-malware-f-45300881",
    "title": "OXLoader Hijacks DLLs to Spread Multiple Malware Families",
    "summary": "OXLoader malware exploits DLL hijacking to deliver multiple malware families via fake complaints and activators. The technique leverages trusted system DLL paths to inject malicious code, enabling stealthy distribution across victim machines. Security teams should monitor for anomalous DLL loads, apply whitelisting, and update endpoint protection to block OXLoader activity.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/threat-intel/2026/11/oxloader-abuses-dll-hijacking-to-distribute-different-malware-families",
    "publishedAt": "2026-11-23T11:35:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "oxloader-hijacks-dlls-to-spread-multiple-malware-f",
      "article-45300881",
      "45300881",
      "oxloader-hijacks-dlls-to-spread-multiple-malware-f-3109f0",
      "oxloader-hijacks-dlls-to-spread-multiple-malware-families"
    ]
  },
  {
    "slug": "sap-netweaver-cisco-expressway-flaws-exploited-c9fd06e6",
    "title": "SAP NetWeaver, Cisco Expressway Flaws Exploited",
    "summary": "Threat actors leveraged vulnerabilities in SAP NetWeaver and Cisco Expressway to leak or alter server data and gain root-level command execution. The flaws, likely involving improper input validation and privilege checks, allow attackers to bypass authentication and execute arbitrary code. Administrators should apply vendor patches, enforce least privilege, and monitor for anomalous activity to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/sap-netweaver-cisco-expressway-flaws-exploited-in-attacks/",
    "publishedAt": "2026-11-23T11:35:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sap-netweaver-cisco-expressway-flaws-exploited",
      "article-c9fd06e6",
      "c9fd06e6",
      "sap-netweaver-cisco-expressway-flaws-exploited-321e51"
    ]
  },
  {
    "slug": "crowdstrike-to-acquire-zscaler-for-43-9b-c33d0a4d",
    "title": "CrowdStrike to Acquire Zscaler for $43.9B",
    "summary": "CrowdStrike announced a $43.9 billion acquisition of Zscaler, aiming to combine their security platforms and generate over $10 billion in annual recurring revenue. The deal positions CrowdStrike as a leading provider of integrated cloud-native security services, expanding its market reach across identity, network, and application layers.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/crowdstrike-to-acquire-zscaler-in-43-9-billion-deal/",
    "publishedAt": "2026-11-23T11:31:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-to-acquire-zscaler-for-43-9b",
      "article-c33d0a4d",
      "c33d0a4d",
      "crowdstrike-to-acquire-zscaler-for-43-9b-583182"
    ]
  },
  {
    "slug": "red-hat-issues-low-impact-edk2-update-60cab848",
    "title": "Red Hat Issues Low-Impact edk2 Update",
    "summary": "Red Hat released a low-impact update for the edk2 firmware component on RHEL 8.4 Advanced Mission Critical Update Support and Extended Update Support Long-Life Add-On. The update addresses multiple security issues, each with a CVSS base score listed in the CVE references, but no active exploitation has been reported. Red Hat recommends applying the update immediately to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102278",
    "publishedAt": "2026-11-23T11:30:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-low-impact-edk2-update",
      "article-60cab848",
      "60cab848",
      "red-hat-issues-low-impact-edk2-update-2ee15e"
    ]
  },
  {
    "slug": "rhsa-2026-102253-important-kernel-security-bug-fix-0d07fd6a",
    "title": "RHSA-2026:102253: Important: kernel security, bug fix, and enhancement update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102253",
    "publishedAt": "2026-11-23T11:14:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102253-important-kernel-security-bug-fix",
      "article-0d07fd6a",
      "0d07fd6a",
      "rhsa-2026-102253-important-kernel-security-bug-fix-2ee15e",
      "rhsa-2026-102253-important-kernel-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "ai-agents-find-and-exploit-medical-imaging-zero-da-b001ba5a",
    "title": "AI Agents Find and Exploit Medical Imaging Zero-Day",
    "summary": "AI agents uncovered a zero-day flaw in an open-source medical imaging app in 11 minutes, allowing file writes outside the intended directory. The flaw grants full administrator control, enabling arbitrary code execution and server compromise. No patch exists; isolate the app, apply critical updates, and monitor for unauthorized file writes.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-use-ai/",
    "publishedAt": "2026-11-23T11:07:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agents-find-and-exploit-medical-imaging-zero-da",
      "article-b001ba5a",
      "b001ba5a",
      "ai-agents-find-and-exploit-medical-imaging-zero-da-6f23d6",
      "ai-agents-find-and-exploit-medical-imaging-zero-day"
    ]
  },
  {
    "slug": "cairn-framework-used-to-exploit-medical-ai-zero-da-402eb59c",
    "title": "Cairn Framework Used to Exploit Medical AI Zero-Day",
    "summary": "A Chinese-nexus threat actor used the open-source Cairn framework to exploit a zero-day in a medical imaging AI application. The zero-day enabled remote code execution after initial failed attempts, giving the attacker a foothold without a disclosed CVE. No vendor patch exists; teams should monitor exploitation, harden AI applications, and limit autonomous framework use.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/cairn-ai-agents-autonomous-attacks/",
    "publishedAt": "2026-11-23T10:49:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cairn-framework-used-to-exploit-medical-ai-zero-da",
      "article-402eb59c",
      "402eb59c",
      "cairn-framework-used-to-exploit-medical-ai-zero-da-53c0da",
      "cairn-framework-used-to-exploit-medical-ai-zero-day"
    ]
  },
  {
    "slug": "rhel-10-2-eus-receives-moderate-security-patch-15dd34fc",
    "title": "RHEL 10.2 EUS Receives Moderate Security Patch",
    "summary": "Red Hat released a moderate-impact patch for Red Hat Enterprise Linux 10.2 Extended Update Support, addressing multiple security issues. The update carries a CVSS base score indicating moderate severity, with detailed scores linked via CVE references in the advisory. Administrators should apply the patch promptly to mitigate the identified vulnerabilities and maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102252",
    "publishedAt": "2026-11-23T10:45:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel-10-2-eus-receives-moderate-security-patch",
      "article-15dd34fc",
      "15dd34fc",
      "rhel-10-2-eus-receives-moderate-security-patch-2ee15e"
    ]
  },
  {
    "slug": "gl-inet-cloud-flaw-enables-malware-on-routers-e0f4f497",
    "title": "GL.iNet Cloud Flaw Enables Malware on Routers",
    "summary": "A flaw in GL.iNet’s cloud remote-management service granted attackers unauthorized access to routers and KVM devices, allowing malware and backdoor installation. The vulnerability, discovered on November 20 2026, was patched by GL.iNet, but affected devices still need a firmware update to eliminate the risk. Security teams should verify firmware versions and apply the latest update; no additional workarounds are documented.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-exploit-gl-inet-cloud-flaw/",
    "publishedAt": "2026-11-23T10:45:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gl-inet-cloud-flaw-enables-malware-on-routers",
      "article-e0f4f497",
      "e0f4f497",
      "gl-inet-cloud-flaw-enables-malware-on-routers-2c9c6b"
    ]
  },
  {
    "slug": "attackers-exploited-microsoft-entra-connect-health-4760c6b1",
    "title": "Attackers exploited Microsoft Entra Connect Health flaw to access tenant data",
    "summary": "Attackers exploited a vulnerability in the Microsoft Entra Connect Health API to read the technical contact email addresses and configuration details of Entra tenants, the company warned affected organizations. Microsoft Entra Connect Health is a cloud-based monitoring service that gives administrators a single view of the health, performance and alerts for their on-premises identity infrastructure in the Microsoft Entra admin center.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/microsoft-entra-connect-health-vulnerability-tenant-data/",
    "publishedAt": "2026-11-23T10:34:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "attackers-exploited-microsoft-entra-connect-health",
      "article-4760c6b1",
      "4760c6b1",
      "attackers-exploited-microsoft-entra-connect-health-7d5536",
      "attackers-exploited-microsoft-entra-connect-health-flaw-to-a"
    ]
  },
  {
    "slug": "ai-driven-breach-exposes-over-1-million-records-16a5e138",
    "title": "AI-Driven Breach Exposes Over 1 Million Records",
    "summary": "Chinese-speaking hackers leveraged an AI testing tool to autonomously breach ten organizations between August and September 2026, exposing over one million personal records from a single victim. The tool performed most attack steps, with operators only specifying targets, indicating a low-effort exploitation chain. Affected entities should conduct forensic investigations, strengthen access controls, and notify impacted individuals per regulatory requirements.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-use-autonomous-ai/",
    "publishedAt": "2026-11-23T10:27:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-driven-breach-exposes-over-1-million-records",
      "article-16a5e138",
      "16a5e138",
      "ai-driven-breach-exposes-over-1-million-records-7b8b24"
    ]
  },
  {
    "slug": "critical-asp-net-anticsrf-flaw-enables-remote-code-eded742f",
    "title": "Critical ASP.NET AntiCsrf Flaw Enables Remote Code Execution Without Authentication",
    "summary": "A critical flaw in the Idunno.AntiCsrf library used by legacy ASP.NET WebForms apps has been actively exploited, letting attackers run arbitrary code on servers without authentication. The vulnerability, CVE-2026-131914, scores 9.3 on CVSS and has already caused incidents worldwide. Affected organizations must update or remove the library immediately and apply vendor patches to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/asp-net-anticsrf-flaw-under-attack/",
    "publishedAt": "2026-11-23T10:25:17.000Z",
    "cves": [
      "CVE-2026-131914"
    ],
    "additionalSources": [
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-critical-aspnet-anti.html"
      }
    ],
    "aliases": [
      "critical-asp-net-anticsrf-flaw-enables-remote-code",
      "article-eded742f",
      "eded742f",
      "critical-asp-net-anticsrf-flaw-enables-remote-code-28c2eb",
      "critical-asp-net-anticsrf-flaw-enables-remote-code-execution"
    ]
  },
  {
    "slug": "red-hat-issues-critical-fence-agents-update-a0f333c6",
    "title": "Red Hat Issues Critical Fence-Agents Update",
    "summary": "Red Hat released a critical update for the fence-agents package on RHEL 9.2 EUS, fixing a flaw that could allow local privilege escalation. The vulnerability, rated CVSS 9.8 by Red Hat, permits attackers with local access to gain root privileges via fence-agent configuration files. Administrators should apply the RHSA-2026:102250 update immediately or use the provided workaround to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102250",
    "publishedAt": "2026-11-23T10:06:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-fence-agents-update",
      "article-a0f333c6",
      "a0f333c6",
      "red-hat-issues-critical-fence-agents-update-2ee15e"
    ]
  },
  {
    "slug": "red-hat-releases-webkit2gtk3-security-update-ee9994d5",
    "title": "Red Hat releases webkit2gtk3 security update",
    "summary": "Red Hat released a critical webkit2gtk3 security update for RHEL 8.4 Advanced Mission Critical and Extended Update Support. The update fixes multiple vulnerabilities, each with a CVSS base score in the CVE references, and is rated Important. Apply the update promptly today to prevent exploitation of the affected webkit2gtk3 components.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102248",
    "publishedAt": "2026-11-23T10:00:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-webkit2gtk3-security-update",
      "article-ee9994d5",
      "ee9994d5",
      "red-hat-releases-webkit2gtk3-security-update-2ee15e"
    ]
  },
  {
    "slug": "red-hat-issues-critical-update-for-java-21-ibm-sem-75e77b1c",
    "title": "Red Hat Issues Critical Update for java-21-ibm-semeru JDK",
    "summary": "Red Hat released a critical update for java-21-ibm-semeru-certified-jdk on RHEL 10.0 and 10.2, fixing multiple high-impact vulnerabilities. The flaws, listed in the advisory’s CVE references, enable unauthenticated remote code execution with a CVSS score of 9.8, giving attackers full system control. Apply the vendor-supplied patch immediately; verify installation with rpm -q java-21-ibm-semeru-certified-jdk on affected systems.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102246",
    "publishedAt": "2026-11-23T09:45:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-update-for-java-21-ibm-sem",
      "article-75e77b1c",
      "75e77b1c",
      "red-hat-issues-critical-update-for-java-21-ibm-sem-2ee15e",
      "red-hat-issues-critical-update-for-java-21-ibm-semeru-jdk"
    ]
  },
  {
    "slug": "rhsa-2026-102247-important-java-1-8-0-ibm-security-e5fce34f",
    "title": "RHSA-2026:102247: Important: java-1.8.0-ibm security update",
    "summary": "An update for java-1.8.0-ibm is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102247",
    "publishedAt": "2026-11-23T09:41:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102247-important-java-1-8-0-ibm-security",
      "article-e5fce34f",
      "e5fce34f",
      "rhsa-2026-102247-important-java-1-8-0-ibm-security-2ee15e",
      "rhsa-2026-102247-important-java-1-8-0-ibm-security-update"
    ]
  },
  {
    "slug": "red-hat-issues-critical-php-8-3-security-update-1131078f",
    "title": "Red Hat Issues Critical PHP 8.3 Security Update",
    "summary": "Red Hat released a critical security update for the php:8.3 module on RHEL 9, addressing multiple vulnerabilities. The update is rated Critical, with CVSS base scores provided for each vulnerability via the referenced CVE links, indicating high-severity flaws. Apply the patch promptly; no workarounds are available, and the update should be deployed across all affected systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102226",
    "publishedAt": "2026-11-23T09:16:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-php-8-3-security-update",
      "article-1131078f",
      "1131078f",
      "red-hat-issues-critical-php-8-3-security-update-2ee15e"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-security-update-for-rhel-8-f6106dd4",
    "title": "Red Hat Releases Kernel Security Update for RHEL 8.6",
    "summary": "Red Hat issued a kernel security update for RHEL 8.6 Advanced Mission Critical Update Support and Extended Update Support Long-Life Add-On, addressing multiple vulnerabilities. The update carries an Important impact rating, with CVSS base scores available for each vulnerability via the referenced CVE links. Security teams should apply the patch immediately to mitigate potential exploitation; no workarounds are currently recommended.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102233",
    "publishedAt": "2026-11-23T09:14:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-security-update-for-rhel-8",
      "article-f6106dd4",
      "f6106dd4",
      "red-hat-releases-kernel-security-update-for-rhel-8-2ee15e",
      "red-hat-releases-kernel-security-update-for-rhel-8-6"
    ]
  },
  {
    "slug": "red-hat-releases-liblerc-security-update-3df8ccfe",
    "title": "Red Hat Releases liblerc Security Update",
    "summary": "A flaw in liblerc, used by Red Hat Enterprise Linux 10.2 EUS, is now fixed by a security update. Red Hat rates the issue as Important, with a CVSS base score available via CVE links in the advisory, indicating high risk. Apply the liblerc patch for RHEL 10.2 EUS immediately to eliminate the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102232",
    "publishedAt": "2026-11-23T09:12:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-liblerc-security-update",
      "article-3df8ccfe",
      "3df8ccfe",
      "red-hat-releases-liblerc-security-update-2ee15e"
    ]
  },
  {
    "slug": "microsoft-confirms-printing-issues-on-forcepoint-s-cbc7d4a7",
    "title": "Microsoft Confirms Printing Issues on Forcepoint Systems",
    "summary": "Microsoft confirmed that the KB5132043 Windows 11 hotpatch caused printing failures on systems running Forcepoint DLP software. The issue does not represent a security vulnerability but disrupts print functionality for affected users. Microsoft advises users to postpone the hotpatch until a fix is released or to revert to a previous Windows 11 build.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-confirms-printing-issues-after-kb5132043-windows-hotpatch/",
    "publishedAt": "2026-11-23T09:11:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-confirms-printing-issues-on-forcepoint-s",
      "article-cbc7d4a7",
      "cbc7d4a7",
      "microsoft-confirms-printing-issues-on-forcepoint-s-7dbc66",
      "microsoft-confirms-printing-issues-on-forcepoint-systems"
    ]
  },
  {
    "slug": "rhsa-2026-102230-important-liblerc-security-update-06992153",
    "title": "RHSA-2026:102230: Important: liblerc security update",
    "summary": "An update for liblerc is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102230",
    "publishedAt": "2026-11-23T09:04:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102230-important-liblerc-security-update",
      "article-06992153",
      "06992153",
      "rhsa-2026-102230-important-liblerc-security-update-2ee15e"
    ]
  },
  {
    "slug": "gl-inet-cloud-flaw-exploited-for-malware-1a3f0284",
    "title": "GL.iNet Cloud flaw exploited for malware",
    "summary": "Hackers exploited a flaw in GL.iNet's GoodCloud remote-management service to install malware on customer routers and KVM devices. The vulnerability allowed remote code execution via authenticated access, and the attacker leveraged it to deploy malicious binaries before the company patched the flaw. GL.iNet has blocked the attack vector and recommends users apply the firmware update immediately to prevent further infections.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploited-glinet-cloud-flaw-to.html",
    "publishedAt": "2026-11-23T09:04:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gl-inet-cloud-flaw-exploited-for-malware",
      "article-1a3f0284",
      "1a3f0284",
      "gl-inet-cloud-flaw-exploited-for-malware-2dfd25"
    ]
  },
  {
    "slug": "signal-blocks-ai-assistants-from-accessing-private-29017594",
    "title": "Signal Blocks AI Assistants From Accessing Private Messages",
    "summary": "Signal updated its app to block AI assistants on iOS 27 and Android, preventing them from capturing users’ private message content. The change stops assistants like Siri and Google Gemini from reading the screen to answer queries, protecting data stores. No vulnerability is reported; the update is a privacy safeguard that requires installing the latest Signal version.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/signal-blocks-ai-assistants-screenshots/",
    "publishedAt": "2026-11-23T08:53:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "signal-blocks-ai-assistants-from-accessing-private",
      "article-29017594",
      "29017594",
      "signal-blocks-ai-assistants-from-accessing-private-287530",
      "signal-blocks-ai-assistants-from-accessing-private-messages"
    ]
  },
  {
    "slug": "samsung-securities-breach-exposes-8-241-customers-8e25bd81",
    "title": "Samsung Securities Breach Exposes 8,241 Customers' Data",
    "summary": "Samsung Securities reported a breach exposing personal data of 8,241 customers after unauthorized access to its Voice of Customer (VOC) website. The breach involved credential theft and internal compromise, but impact was limited to the VOC system. Samsung Securities advised affected customers to monitor accounts, change passwords, and is investigating while notifying regulators.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/samsung-securities-data-breach/",
    "publishedAt": "2026-11-23T08:53:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "samsung-securities-breach-exposes-8-241-customers",
      "article-8e25bd81",
      "8e25bd81",
      "samsung-securities-breach-exposes-8-241-customers-28fcc5",
      "samsung-securities-breach-exposes-8-241-customers-data"
    ]
  },
  {
    "slug": "rhsa-2026-102228-important-redhat-ds-12-security-b-06aa9831",
    "title": "RHSA-2026:102228: Important: redhat-ds:12 security, bug fix, and enhancement update",
    "summary": "An update for the redhat-ds:12 module is now available for Red Hat Directory Server 12.9 for RHEL 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102228",
    "publishedAt": "2026-11-23T08:33:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102228-important-redhat-ds-12-security-b",
      "article-06aa9831",
      "06aa9831",
      "rhsa-2026-102228-important-redhat-ds-12-security-b-2ee15e",
      "rhsa-2026-102228-important-redhat-ds-12-security-bug-fix-and"
    ]
  },
  {
    "slug": "rhsa-2026-102229-important-389-ds-base-and-redhat-6fc27522",
    "title": "RHSA-2026:102229: Important: 389-ds-base and redhat-ds security, bug fix, and enhancement update",
    "summary": "An update for multiple packages is now available for Red Hat Directory Server 13.3 for RHEL 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102229",
    "publishedAt": "2026-11-23T08:31:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102229-important-389-ds-base-and-redhat",
      "article-6fc27522",
      "6fc27522",
      "rhsa-2026-102229-important-389-ds-base-and-redhat-2ee15e",
      "rhsa-2026-102229-important-389-ds-base-and-redhat-ds-securit"
    ]
  },
  {
    "slug": "rhsa-2026-102224-important-grafana-security-update-caa3d2a4",
    "title": "RHSA-2026:102224: Important: grafana security update",
    "summary": "An update for grafana is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102224",
    "publishedAt": "2026-11-23T08:25:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102224-important-grafana-security-update",
      "article-caa3d2a4",
      "caa3d2a4",
      "rhsa-2026-102224-important-grafana-security-update-2ee15e"
    ]
  },
  {
    "slug": "ai-assisted-attacks-trigger-unauthorized-bank-tran-2b6acc3a",
    "title": "AI-Assisted Attacks Trigger Unauthorized Bank Transfers",
    "summary": "AI-assisted threat actors targeted Indian ICT assets, forcing unauthorized financial transfers at banks and fintech firms. The attacks leveraged machine-learning-driven phishing and credential-stealing techniques, exploiting known login-bypass flaws to move laterally within banking networks. Red CERT-In urges immediate patching of vulnerable systems and enhanced monitoring of transaction logs to detect further unauthorized activity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/ai-assisted-cyberattacks-trigger.html",
    "publishedAt": "2026-11-23T08:24:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-assisted-attacks-trigger-unauthorized-bank-tran",
      "article-2b6acc3a",
      "2b6acc3a",
      "ai-assisted-attacks-trigger-unauthorized-bank-tran-70818c",
      "ai-assisted-attacks-trigger-unauthorized-bank-transfers"
    ]
  },
  {
    "slug": "xdg-desktop-portal-update-for-rhel-8-6-released-4ae96a4a",
    "title": "xdg-desktop-portal Update for RHEL 8.6 Released",
    "summary": "Red Hat issued an xdg-desktop-portal update for RHEL 8.6 to address security concerns. The update fixes vulnerabilities that could allow attackers to gain unauthorized access to desktop portal services, potentially leading to privilege escalation or data exposure. Users should apply the patch promptly and verify the CVSS scores provided in the advisory for detailed risk assessment.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102225",
    "publishedAt": "2026-11-23T08:22:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xdg-desktop-portal-update-for-rhel-8-6-released",
      "article-4ae96a4a",
      "4ae96a4a",
      "xdg-desktop-portal-update-for-rhel-8-6-released-2ee15e"
    ]
  },
  {
    "slug": "grafana-update-for-rhel-9-8-released-62aba3a1",
    "title": "Grafana Update for RHEL 9.8 Released",
    "summary": "Red Hat released a Grafana update for RHEL 9.8 Extended Update Support to fix multiple security issues. The vulnerabilities could allow attackers to exploit Grafana’s web interface, potentially enabling unauthorized data access or critical code execution. Apply the patch immediately and review the CVSS scores linked in the advisory for risk assessment.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102222",
    "publishedAt": "2026-11-23T08:15:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "grafana-update-for-rhel-9-8-released",
      "article-62aba3a1",
      "62aba3a1",
      "grafana-update-for-rhel-9-8-released-2ee15e"
    ]
  },
  {
    "slug": "badbox-3-0-tv-boxes-generate-40-billion-ad-request-5e60fd71",
    "title": "BADBOX 3.0 TV Boxes Generate 40 Billion Ad Requests",
    "summary": "BADBOX 3.0 infected low-cost TV boxes produced roughly 40 billion ad bid requests daily, exceeding 4% of all connected TV traffic. The malware hijacked ad rendering processes, enabling stealthy traffic injection without user awareness and creating a large-scale advertising fraud network.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/badbox-3-0-ad-fraud-operation/",
    "publishedAt": "2026-11-23T08:06:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "badbox-3-0-tv-boxes-generate-40-billion-ad-request",
      "article-5e60fd71",
      "5e60fd71",
      "badbox-3-0-tv-boxes-generate-40-billion-ad-request-126196",
      "badbox-3-0-tv-boxes-generate-40-billion-ad-requests"
    ]
  },
  {
    "slug": "bulgarian-government-breach-exposes-62-million-pag-ab52e416",
    "title": "Bulgarian Government Breach Exposes 62 Million Pages",
    "summary": "Hackers accessed Bulgarian state administration networks for five years, exfiltrating 130 GB of documents. The intrusion leveraged covert persistence mechanisms to download over 62 million pages, representing a significant compromise of sensitive government data. Bulgarian authorities disrupted the operation and are investigating the breach; no vendor patch is applicable, but organizations should review network segmentation and intrusion detection controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/bulgarian-government/",
    "publishedAt": "2026-11-23T08:01:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bulgarian-government-breach-exposes-62-million-pag",
      "article-ab52e416",
      "ab52e416",
      "bulgarian-government-breach-exposes-62-million-pag-4b51f5",
      "bulgarian-government-breach-exposes-62-million-pages"
    ]
  },
  {
    "slug": "weekly-security-roundup-nov-16-22-a07bae89",
    "title": "Weekly Security Roundup: Nov 16-22",
    "summary": "Malwarebytes Labs released a weekly security roundup covering topics from Nov 16 to Nov 22, 2026. The report summarizes emerging threats, vulnerability disclosures, and defensive recommendations observed during that period, including zero-day exploits and supply-chain risks. The summary is available for security teams to review trends, update defenses, and threat intelligence.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/a-week-in-security-november-16-november-22",
    "publishedAt": "2026-11-23T08:01:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "weekly-security-roundup-nov-16-22",
      "article-a07bae89",
      "a07bae89",
      "weekly-security-roundup-nov-16-22-b93180"
    ]
  },
  {
    "slug": "outages-reveal-need-for-robust-recovery-planning-42474264",
    "title": "Outages Reveal Need for Robust Recovery Planning",
    "summary": "Outages at Microsoft, the FAA, and major banks highlight the need for robust recovery planning, as lack of resilience caused extended downtime. The incidents exposed gaps in business continuity frameworks, revealing that inadequate failover testing can leave essential services vulnerable to prolonged disruption. Organizations should define downtime thresholds, conduct failover drills, and implement automated recovery workflows to maintain continuity.",
    "category": "General",
    "severity": "LOW",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/why-resilience-has-to-come-first",
    "publishedAt": "2026-11-23T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "outages-reveal-need-for-robust-recovery-planning",
      "article-42474264",
      "42474264",
      "outages-reveal-need-for-robust-recovery-planning-70868f"
    ]
  },
  {
    "slug": "virtualbox-process-hardening-on-windows-2026-editi-f1458f09",
    "title": "VirtualBox Process Hardening on Windows 2026 Edition: What’s a Single Bit Between Friends?",
    "summary": "Back in 2017 I did some research into Oracle VirtualBox on Windows. The protection was to gate who could open the kernel driver, which might allow for privilege escalation due to the way it was designed. This time I found 3 new bypasses for protected processes, with an additional bug which was a broken fix for the 2020 bypass breaking due to changes in Windows.",
    "category": "General",
    "severity": "HIGH",
    "source": "Google Project Zero",
    "sourceUrl": "https://projectzero.google/2026/11/virtualbox-process-hardening.html",
    "publishedAt": "2026-11-23T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "virtualbox-process-hardening-on-windows-2026-editi",
      "article-f1458f09",
      "f1458f09",
      "virtualbox-process-hardening-on-windows-2026-editi-3e3201",
      "virtualbox-process-hardening-on-windows-2026-edition-what-s-"
    ]
  },
  {
    "slug": "rhsa-2026-102221-important-grafana-security-update-d58f0238",
    "title": "RHSA-2026:102221: Important: grafana security update",
    "summary": "An update for grafana is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102221",
    "publishedAt": "2026-11-23T07:50:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102221-important-grafana-security-update",
      "article-d58f0238",
      "d58f0238",
      "rhsa-2026-102221-important-grafana-security-update-2ee15e"
    ]
  },
  {
    "slug": "red-hat-kernel-update-for-rhel-10-0-eus-c676eec0",
    "title": "Red Hat Kernel Update for RHEL 10.0 EUS",
    "summary": "Red Hat released a kernel update for Enterprise Linux 10.0 Extended Update Support, addressing multiple security issues. The advisory notes an Important security impact, with CVSS base scores linked to each vulnerability, indicating potential high-severity flaws. Security teams should apply the update immediately to mitigate the identified kernel vulnerabilities, as no workarounds are provided.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102220",
    "publishedAt": "2026-11-23T07:49:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-for-rhel-10-0-eus",
      "article-c676eec0",
      "c676eec0",
      "red-hat-kernel-update-for-rhel-10-0-eus-2ee15e"
    ]
  },
  {
    "slug": "cisco-expressway-zero-day-exploit-enables-remote-c-154f46d5",
    "title": "Cisco Expressway Zero-Day Exploit Enables Remote Code Execution",
    "summary": "A zero-day vulnerability (CVE-2026-76466) in Cisco Expressway gateways has been exploited by attackers to breach internal networks. The unauthenticated remote flaw permits arbitrary code execution, and it has been confirmed as a critical CVSS-rated zero-day used in the wild. Cisco has released a patch; organizations must apply it immediately and verify CISA’s Known Exploited Vulnerabilities catalog for guidance.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/cisa-flags-critical-cisco-expressway-rce-flaw-as-actively-exploited/",
    "publishedAt": "2026-11-23T07:44:19.000Z",
    "cves": [
      "CVE-2026-76466"
    ],
    "additionalSources": [
      {
        "source": "Help Net Security",
        "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/cisco-expressway-vulnerability-exploited-cve-2026-76466/"
      }
    ],
    "aliases": [
      "cisco-expressway-zero-day-exploit-enables-remote-c",
      "article-154f46d5",
      "154f46d5",
      "cisco-expressway-zero-day-exploit-enables-remote-c-6aa7cf",
      "cisco-expressway-zero-day-exploit-enables-remote-code-execut"
    ]
  },
  {
    "slug": "malicious-ad-domains-steal-iphone-crypto-recovery-a94fe9be",
    "title": "Malicious Ad Domains Steal iPhone Crypto Recovery Phrases",
    "summary": "Hackers leveraged over 480 malicious ad domains to compromise iPhones and exfiltrate crypto wallet recovery phrases, passwords, and personal data. The MoldyRoost operation exploited ad rendering engine flaws, enabling credential theft without user interaction across 47+ countries. Apple issued a security advisory urging iOS updates and users to avoid suspicious ads; security teams should monitor ad traffic and enforce sandboxing.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/malicious-ad-domains-target-iphones/",
    "publishedAt": "2026-11-23T07:32:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "malicious-ad-domains-steal-iphone-crypto-recovery",
      "article-a94fe9be",
      "a94fe9be",
      "malicious-ad-domains-steal-iphone-crypto-recovery-5df5ed",
      "malicious-ad-domains-steal-iphone-crypto-recovery-phrases"
    ]
  },
  {
    "slug": "red-hat-kernel-update-for-rhel-8-7151ae6f",
    "title": "Red Hat Kernel Update for RHEL 8",
    "summary": "Red Hat issued a kernel update for Enterprise Linux 8, addressing several security issues. The advisory labels the update as Important, with CVSS base scores linked to each vulnerability, implying high-severity flaws. Apply the update promptly to remediate the kernel vulnerabilities; no workarounds are provided, and ensure system integrity today.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102218",
    "publishedAt": "2026-11-23T07:27:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-for-rhel-8",
      "article-7151ae6f",
      "7151ae6f",
      "red-hat-kernel-update-for-rhel-8-2ee15e"
    ]
  },
  {
    "slug": "red-hat-kernel-rt-update-for-rhel-8-226ecb49",
    "title": "Red Hat Kernel-rt Update for RHEL 8",
    "summary": "Red Hat released a kernel-rt update for Enterprise Linux 8, fixing multiple security defects. The advisory rates the update as Important, with CVSS base scores linked to each vulnerability, indicating high-severity flaws. Security teams should apply the kernel-rt patch immediately; no workarounds exist, and system stability must be verified today.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102219",
    "publishedAt": "2026-11-23T07:15:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-rt-update-for-rhel-8",
      "article-226ecb49",
      "226ecb49",
      "red-hat-kernel-rt-update-for-rhel-8-2ee15e"
    ]
  },
  {
    "slug": "cancer-institute-tackles-shadow-it-in-research-0187d950",
    "title": "Cancer Institute Tackles Shadow IT in Research",
    "summary": "Istituto Nazionale Tumori (INT) discusses how to keep a cancer research hospital operational while protecting against cyberattacks. The director explains collaboration with partner hospitals in the Rare Cancer Network, challenges when staff cannot access chemotherapy plans, and why banning shadow IT rarely fixes gaps. INT also highlights the most burdensome EU regulation and outlines its approach to secure research workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/rocco-saviano-istituto-nazionale-tumori-int-hospital-microsegmentation/",
    "publishedAt": "2026-11-23T07:00:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cancer-institute-tackles-shadow-it-in-research",
      "article-0187d950",
      "0187d950",
      "cancer-institute-tackles-shadow-it-in-research-70aeed"
    ]
  },
  {
    "slug": "rhsa-2026-102211-important-freerdp-security-update-bcc853c0",
    "title": "RHSA-2026:102211: Important: freerdp security update",
    "summary": "An update for freerdp is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102211",
    "publishedAt": "2026-11-23T06:48:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102211-important-freerdp-security-update",
      "article-bcc853c0",
      "bcc853c0",
      "rhsa-2026-102211-important-freerdp-security-update-2ee15e"
    ]
  },
  {
    "slug": "red-hat-issues-important-update-for-webkit2gtk3-979f8058",
    "title": "Red Hat Issues Important Update for webkit2gtk3",
    "summary": "Red Hat released an important update for webkit2gtk3 on RHEL 8.6, correcting multiple high-severity bugs. The vulnerabilities, cited by CVE references, enable authenticated remote code execution with a CVSS score of 8.7, allowing attackers to execute arbitrary code. Apply the vendor patch immediately; verify installation with rpm -q webkit2gtk3 on affected RHEL 8.6 systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102214",
    "publishedAt": "2026-11-23T06:44:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-update-for-webkit2gtk3",
      "article-979f8058",
      "979f8058",
      "red-hat-issues-important-update-for-webkit2gtk3-2ee15e"
    ]
  },
  {
    "slug": "red-hat-releases-important-update-for-freerdp-fcbf7de6",
    "title": "Red Hat Releases Important Update for freerdp",
    "summary": "Red Hat issued an important update for freerdp on RHEL 9.4 SAP solutions, addressing several critical vulnerabilities. The disclosed flaws, referenced by CVE identifiers, allow authenticated remote code execution with a CVSS score of 8.3, potentially compromising user sessions. Red Hat recommends applying the patch immediately; users should verify the update via rpm -q freerdp on affected RHEL 9.4 systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102213",
    "publishedAt": "2026-11-23T06:44:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-important-update-for-freerdp",
      "article-fcbf7de6",
      "fcbf7de6",
      "red-hat-releases-important-update-for-freerdp-2ee15e"
    ]
  },
  {
    "slug": "important-freerdp-update-for-rhel-9-2-sap-c0d1994e",
    "title": "Important freerdp update for RHEL 9.2 SAP",
    "summary": "An update fixes security vulnerabilities in freerdp affecting RHEL 9.2 Update Services for SAP Solutions and related components. The flaws, referenced by CVE identifiers, could enable remote code execution via malformed RDP packets in the remote desktop protocol stack. Red Hat advises applying the patch promptly to prevent exploitation and ensure all clients are updated.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102212",
    "publishedAt": "2026-11-23T06:40:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "important-freerdp-update-for-rhel-9-2-sap",
      "article-c0d1994e",
      "c0d1994e",
      "important-freerdp-update-for-rhel-9-2-sap-2ee15e"
    ]
  },
  {
    "slug": "xalgorix-introduces-ai-powered-pen-testing-tool-028c9b4e",
    "title": "Xalgorix Introduces AI-Powered Pen Testing Tool",
    "summary": "Xalgorix, an open-source AI penetration testing framework, validates findings through a dual-agent verification process. The primary agent identifies potential bugs, while a secondary agent attempts to exploit them; failures to confirm a bug result in a flagged finding for manual review, reducing false positives. The tool is available for community use and encourages reviewers to assess flagged vulnerabilities before reporting.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/xalgorix-ai-penetration-testing-tool/",
    "publishedAt": "2026-11-23T06:30:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xalgorix-introduces-ai-powered-pen-testing-tool",
      "article-028c9b4e",
      "028c9b4e",
      "xalgorix-introduces-ai-powered-pen-testing-tool-51e5e3"
    ]
  },
  {
    "slug": "important-xdg-desktop-portal-update-for-rhel-8-4-b52fa4c5",
    "title": "Important xdg-desktop-portal update for RHEL 8.4",
    "summary": "An update addresses security flaws in xdg-desktop-portal affecting RHEL 8.4 Advanced Mission Critical and Extended Update Support. The vulnerabilities, identified via CVE references, allow potential privilege escalation or code execution through desktop portal interactions. Red Hat recommends applying the update immediately to mitigate the risk to ensure system integrity continuously.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102210",
    "publishedAt": "2026-11-23T06:30:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "important-xdg-desktop-portal-update-for-rhel-8-4",
      "article-b52fa4c5",
      "b52fa4c5",
      "important-xdg-desktop-portal-update-for-rhel-8-4-2ee15e"
    ]
  },
  {
    "slug": "early-black-friday-scams-emerge-without-red-flags-f3dc3eff",
    "title": "Early Black Friday Scams Emerge Without Red Flags",
    "summary": "Scammers began posting fake Black Friday deals on September 1, earlier than last year, rarely referencing the holiday or using familiar domain names. The campaigns appear as Facebook group posts or Google Sites pages, mimicking retailer sale language promoting software, payment, travel, or crypto offers. Security teams should monitor social media and verify vendor legitimacy before engaging with such promotions.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/black-friday-scams-doppel-report/",
    "publishedAt": "2026-11-23T06:00:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "early-black-friday-scams-emerge-without-red-flags",
      "article-f3dc3eff",
      "f3dc3eff",
      "early-black-friday-scams-emerge-without-red-flags-469d30"
    ]
  },
  {
    "slug": "red-hat-issues-cockpit-security-patch-cda706c6",
    "title": "Red Hat Issues Cockpit Security Patch",
    "summary": "Red Hat released a security update for the Cockpit management interface on Enterprise Linux 10.0 Extended Update Support. The advisory references multiple CVEs with CVSS base scores, but no active exploitation is reported, and the update is classified as Important by Product Security. Administrators should apply the Cockpit patch promptly to address the identified vulnerabilities.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102208",
    "publishedAt": "2026-11-23T05:54:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-cockpit-security-patch",
      "article-cda706c6",
      "cda706c6",
      "red-hat-issues-cockpit-security-patch-2ee15e"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-security-update-e592f563",
    "title": "Red Hat Releases Kernel Security Update",
    "summary": "Red Hat issued a kernel update for Enterprise Linux 9 addressing multiple security bugs. The advisory lists several CVEs with CVSS base scores, but no active exploitation is reported, and the update is rated as Important by Product Security. Users should apply the kernel patch immediately to mitigate the identified vulnerabilities.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102167",
    "publishedAt": "2026-11-23T05:42:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-security-update",
      "article-e592f563",
      "e592f563",
      "red-hat-releases-kernel-security-update-2ee15b"
    ]
  },
  {
    "slug": "isaca-updates-cobit-7-with-ai-risk-scenarios-a8c0f551",
    "title": "ISACA Updates COBIT 7 with AI Risk Scenarios",
    "summary": "ISACA released COBIT 7, the latest version of its governance framework, adding AI risk scenarios. The update provides comprehensive guidance, a digital platform, and customizable resources to help organizations manage emerging AI risks. Security teams should review the new scenarios and integrate them into their governance and risk management processes.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/isaca-cobit-7-released/",
    "publishedAt": "2026-11-23T05:30:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isaca-updates-cobit-7-with-ai-risk-scenarios",
      "article-a8c0f551",
      "a8c0f551",
      "isaca-updates-cobit-7-with-ai-risk-scenarios-b65bee"
    ]
  },
  {
    "slug": "red-hat-releases-mysql-8-4-security-update-eaea480b",
    "title": "Red Hat Releases MySQL 8.4 Security Update",
    "summary": "Red Hat issued a security update for the mysql:8.4 module on Red Enterprise Linux 9.8 Extended Update Support. The update addresses multiple vulnerabilities, each with a CVSS base score listed in the CVE references, but no active exploitation has been reported. Administrators should apply the RHSA-2026:102188 update promptly to mitigate potential exploitation of the identified flaws.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102188",
    "publishedAt": "2026-11-23T05:18:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-mysql-8-4-security-update",
      "article-eaea480b",
      "eaea480b",
      "red-hat-releases-mysql-8-4-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-releases-important-git-lfs-security-update-91a818e5",
    "title": "Red Hat Releases Important Git-LFS Security Update",
    "summary": "Red Hat issued an important security update for git-lfs on RHEL 9.8 Extended Update Support. The advisory indicates that the update addresses one or more vulnerabilities, each with a CVSS base score available via the referenced CVE links. Users should apply the git-lfs update immediately to mitigate the identified security risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102187",
    "publishedAt": "2026-11-23T05:18:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-important-git-lfs-security-update",
      "article-91a818e5",
      "91a818e5",
      "red-hat-releases-important-git-lfs-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-issues-moderate-openssh-security-update-859b0083",
    "title": "Red Hat Issues Moderate OpenSSH Security Update",
    "summary": "Red Hat released a moderate security update for OpenSSH on RHEL 9, addressing weaknesses that could allow remote attackers to gain elevated privileges. The advisory references multiple CVEs, each with a CVSS base score provided, indicating the severity of the flaws. Administrators should apply the OpenSSH update promptly to mitigate the disclosed vulnerabilities and prevent privilege escalation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102191",
    "publishedAt": "2026-11-23T05:09:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-moderate-openssh-security-update",
      "article-859b0083",
      "859b0083",
      "red-hat-issues-moderate-openssh-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-update-for-rhel-10-19ccd1c3",
    "title": "Red Hat Releases Kernel Update for RHEL 10",
    "summary": "Red Hat released a kernel update for Red Enterprise Linux 10 to address multiple security bugs. The update contains fixes for several kernel vulnerabilities, each with a CVSS base score listed in the CVE references, but no active exploitation has been reported. Administrators should apply the RHSA-2026:102168 update promptly to mitigate potential exploitation of the identified flaws.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102168",
    "publishedAt": "2026-11-23T05:06:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-update-for-rhel-10",
      "article-19ccd1c3",
      "19ccd1c3",
      "red-hat-releases-kernel-update-for-rhel-10-2ee15b"
    ]
  },
  {
    "slug": "flatpak-update-addresses-important-security-flaw-fbdc29fb",
    "title": "Flatpak Update Addresses Important Security Flaw",
    "summary": "Red Hat released a security update for Flatpak on Red Hat Enterprise Linux 9, addressing an important vulnerability in the container runtime. The advisory notes the flaw’s importance but does not list a CVE identifier; CVSS base scores are provided in the references. Apply the Flatpak update promptly; no further mitigations are required.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102181",
    "publishedAt": "2026-11-23T05:04:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "flatpak-update-addresses-important-security-flaw",
      "article-fbdc29fb",
      "fbdc29fb",
      "flatpak-update-addresses-important-security-flaw-2ee15b"
    ]
  },
  {
    "slug": "thunderbird-update-fixes-important-security-flaw-1fd8558b",
    "title": "Thunderbird Update Fixes Important Security Flaw",
    "summary": "A security update for Thunderbird on Red Hat Enterprise Linux 9.8 EUS addresses an important vulnerability affecting the email client. The flaw, rated Important by Red Hat Product Security, lacks a publicly disclosed CVE identifier but is documented with CVSS base scores in the advisory references. Red Hat recommends applying the update immediately; no additional workarounds are specified.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102171",
    "publishedAt": "2026-11-23T04:55:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "thunderbird-update-fixes-important-security-flaw",
      "article-1fd8558b",
      "1fd8558b",
      "thunderbird-update-fixes-important-security-flaw-2ee15b"
    ]
  },
  {
    "slug": "rhsa-2026-102178-important-xdg-desktop-portal-secu-14a0b22d",
    "title": "RHSA-2026:102178: Important: xdg-desktop-portal security update",
    "summary": "An update for xdg-desktop-portal is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102178",
    "publishedAt": "2026-11-23T04:54:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102178-important-xdg-desktop-portal-secu",
      "article-14a0b22d",
      "14a0b22d",
      "rhsa-2026-102178-important-xdg-desktop-portal-secu-2ee15b",
      "rhsa-2026-102178-important-xdg-desktop-portal-security-updat"
    ]
  },
  {
    "slug": "rhsa-2026-102190-moderate-openssh-security-update-72816923",
    "title": "RHSA-2026:102190: Moderate: openssh security update",
    "summary": "An update for openssh is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102190",
    "publishedAt": "2026-11-23T04:45:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102190-moderate-openssh-security-update",
      "article-72816923",
      "72816923",
      "rhsa-2026-102190-moderate-openssh-security-update-2ee15b"
    ]
  },
  {
    "slug": "fence-agents-receives-important-security-update-561939fb",
    "title": "Fence-Agents Receives Important Security Update",
    "summary": "Red Hat released an Important security update for the fence-agents package on RHEL 8. The update addresses multiple vulnerabilities that could allow privilege escalation or denial of service, as indicated by the CVSS scores linked in the advisory. Administrators should apply the fence-agents update immediately and verify that the affected services are restarted to enforce the new security controls.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102154",
    "publishedAt": "2026-11-23T04:41:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fence-agents-receives-important-security-update",
      "article-561939fb",
      "561939fb",
      "fence-agents-receives-important-security-update-2ee15a"
    ]
  },
  {
    "slug": "matilda-sells-claimed-vmware-vcenter-exploit-3411243b",
    "title": "Matilda Sells Claimed VMware vCenter Exploit",
    "summary": "A forum seller named Matilda is offering a claimed exploit for VMware vCenter Server, targeting CVE-2026-123890. The critical vulnerability would let an attacker create a new vCenter administrator account, but no confirmed exploitation has been reported. Broadcom issued a patch on November 19, 2026; administrators should apply it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/alleged-vmware-vcenter-0-day-exploit/",
    "publishedAt": "2026-11-23T04:30:26.000Z",
    "cves": [
      "CVE-2026-123890"
    ],
    "additionalSources": [],
    "aliases": [
      "matilda-sells-claimed-vmware-vcenter-exploit",
      "article-3411243b",
      "3411243b",
      "matilda-sells-claimed-vmware-vcenter-exploit-726bd0"
    ]
  },
  {
    "slug": "curl-receives-moderate-security-update-eaf8d87e",
    "title": "Curl Receives Moderate Security Update",
    "summary": "Red Hat issued a Moderate security update for the curl package on RHEL 8. The patch fixes several vulnerabilities that could lead to remote code execution or information disclosure, as reflected in the CVSS scores. System administrators should install the curl update promptly and restart any services that depend on it to apply the security fixes.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102194",
    "publishedAt": "2026-11-23T04:16:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "curl-receives-moderate-security-update",
      "article-eaf8d87e",
      "eaf8d87e",
      "curl-receives-moderate-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-publishes-important-xdg-desktop-portal-pat-470d747d",
    "title": "Red Hat Publishes Important xdg-desktop-portal Patch",
    "summary": "Red Hat released an important security update for the xdg-desktop-portal component on RHEL 9, addressing multiple vulnerabilities each with a CVSS base score listed in the CVE references. The update mitigates potential privilege escalation and information disclosure risks that could be exploited via desktop portal interfaces. Red Hat recommends applying the patch promptly to ensure desktop security compliance.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102179",
    "publishedAt": "2026-11-23T04:13:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-publishes-important-xdg-desktop-portal-pat",
      "article-470d747d",
      "470d747d",
      "red-hat-publishes-important-xdg-desktop-portal-pat-2ee15b",
      "red-hat-publishes-important-xdg-desktop-portal-patch"
    ]
  },
  {
    "slug": "red-hat-issues-net-8-0-security-update-480ca2aa",
    "title": "Red Hat Issues .NET 8.0 Security Update",
    "summary": "Red Hat issued a security update for .NET 8.0 on RHEL 10.2 Extended Update Support, addressing several platform vulnerabilities. The update is rated Important, with CVSS base scores for each flaw listed via CVE links in the references, indicating high-severity risk if left unpatched. Red Hat urges immediate installation of the update and verification of CVSS scores to prioritize remediation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102173",
    "publishedAt": "2026-11-23T04:12:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-net-8-0-security-update",
      "article-480ca2aa",
      "480ca2aa",
      "red-hat-issues-net-8-0-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-releases-openssh-security-update-a1367179",
    "title": "Red Hat releases openssh security update",
    "summary": "Red Hat released a critical openssh security update for RHEL 10, addressing several bugs and enhancements. The update fixes multiple critical vulnerabilities, each with a CVSS base score in the CVE references, and is rated Moderate. Apply the update promptly today to mitigate potential exploitation of the affected openssh components.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102195",
    "publishedAt": "2026-11-23T04:12:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-openssh-security-update",
      "article-a1367179",
      "a1367179",
      "red-hat-releases-openssh-security-update-2ee15b"
    ]
  },
  {
    "slug": "rhel-9-thunderbird-update-fixes-code-execution-fla-a05946fa",
    "title": "RHEL 9 Thunderbird Update Fixes Code Execution Flaws",
    "summary": "Red Hat issued an important security update for Thunderbird on RHEL 9, fixing vulnerabilities that could lead to memory corruption or arbitrary code execution. The patch addresses CVE-linked defects with a CVSS score in the moderate range, and no active exploitation has been observed. Users should install RHSA-2026:102170 promptly to secure their mail clients.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102170",
    "publishedAt": "2026-11-23T04:11:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel-9-thunderbird-update-fixes-code-execution-fla",
      "article-a05946fa",
      "a05946fa",
      "rhel-9-thunderbird-update-fixes-code-execution-fla-2ee15b",
      "rhel-9-thunderbird-update-fixes-code-execution-flaws"
    ]
  },
  {
    "slug": "rhel-8-xdg-desktop-portal-update-addresses-privile-99bd95c4",
    "title": "RHEL 8 xdg-desktop-portal Update Addresses Privilege Escalation",
    "summary": "Red Hat released an important security update for xdg-desktop-portal on RHEL 8, addressing multiple vulnerabilities that could allow privilege escalation or code execution. The update includes patches for CVE-linked flaws, with a CVSS base score indicating moderate to high risk, but no active exploitation reported. Security teams should apply the RHSA-2026:102175 update immediately to mitigate potential attacks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102175",
    "publishedAt": "2026-11-23T03:45:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel-8-xdg-desktop-portal-update-addresses-privile",
      "article-99bd95c4",
      "99bd95c4",
      "rhel-8-xdg-desktop-portal-update-addresses-privile-2ee15b",
      "rhel-8-xdg-desktop-portal-update-addresses-privilege-escalat"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-security-update-for-rhel6-34a6796a",
    "title": "Red Hat Releases Kernel Security Update for RHEL6",
    "summary": "A kernel vulnerability affecting Red Hat Enterprise Linux 6 Extended Lifecycle Support prompted an Important security update. The flaw, detailed in multiple CVE references, carries a CVSS base score indicating significant risk, but no active exploitation has been reported. Red Hat has released the patch; administrators should apply the update immediately to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102182",
    "publishedAt": "2026-11-23T03:44:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-security-update-for-rhel6",
      "article-34a6796a",
      "34a6796a",
      "red-hat-releases-kernel-security-update-for-rhel6-2ee15b"
    ]
  },
  {
    "slug": "red-hat-issues-thunderbird-security-update-028c3c47",
    "title": "Red Hat Issues Thunderbird Security Update",
    "summary": "An Important security update for Thunderbird on Red Hat Enterprise Linux 8 addresses a kernel-level vulnerability. The vulnerability, referenced by multiple CVE entries, has a CVSS base score reflecting high risk, though no active exploitation has been observed. Red Hat has issued the patch; users are advised to install it promptly to prevent potential compromise.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102172",
    "publishedAt": "2026-11-23T03:41:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-thunderbird-security-update",
      "article-028c3c47",
      "028c3c47",
      "red-hat-issues-thunderbird-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-updates-libgsf-for-security-50f93d6e",
    "title": "Red Hat Updates libgsf for Security",
    "summary": "Red Hat released a security update for libgsf on RHEL 10.2 EUS, addressing multiple vulnerabilities identified by CVE references. The flaws involve improper handling of GSF files, potentially allowing remote code execution via crafted documents. Red Hat has issued a patch; administrators should apply the update immediately to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102162",
    "publishedAt": "2026-11-23T03:35:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-libgsf-for-security",
      "article-50f93d6e",
      "50f93d6e",
      "red-hat-updates-libgsf-for-security-2ee15b"
    ]
  },
  {
    "slug": "git-lfs-security-update-for-red-hat-enterprise-lin-2d84a280",
    "title": "git-lfs Security Update for Red Hat Enterprise Linux 10",
    "summary": "Red Hat released a security update for git-lfs on Red Hat Enterprise Linux 10, addressing a vulnerability that could allow code execution. The flaw, referenced by multiple CVEs, permits attackers to inject malicious content during file transfer operations, potentially compromising system integrity. Red Hat recommends applying the latest git-lfs package immediately to mitigate the risk, with no additional workarounds required.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102186",
    "publishedAt": "2026-11-23T03:32:40.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Red Hat Security Advisories",
        "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102184"
      }
    ],
    "aliases": [
      "git-lfs-security-update-for-red-hat-enterprise-lin",
      "article-2d84a280",
      "2d84a280",
      "git-lfs-security-update-for-red-hat-enterprise-lin-2ee15b",
      "git-lfs-security-update-for-red-hat-enterprise-linux-10"
    ]
  },
  {
    "slug": "red-hat-issues-nodejs22-important-security-update-555683a3",
    "title": "Red Hat issues nodejs22 important security update",
    "summary": "An important-impact flaw in Red Hat Enterprise Linux 10.0’s nodejs22 runtime was found, enabling remote code execution via malformed JavaScript objects. The vulnerability, with a high CVSS score, permits attackers to execute arbitrary code without authentication, though no public exploits are known. Red Hat has issued a nodejs22 update; security teams must install the patch promptly to prevent potential compromise.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102180",
    "publishedAt": "2026-11-23T03:32:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-nodejs22-important-security-update",
      "article-555683a3",
      "555683a3",
      "red-hat-issues-nodejs22-important-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-releases-glib2-moderate-security-update-29f2a9a2",
    "title": "Red Hat releases glib2 moderate security update",
    "summary": "A moderate-impact vulnerability in Red Hat Enterprise Linux 8.8’s glib2 library was identified, affecting SAP and Telecommunications Update Services via untrusted input handling. The flaw, rated CVSS moderate, allows local privilege escalation if exploited, but no active exploitation has been reported. Red Hat has released a patch; administrators should apply the glib2 update immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102189",
    "publishedAt": "2026-11-23T03:30:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-glib2-moderate-security-update",
      "article-29f2a9a2",
      "29f2a9a2",
      "red-hat-releases-glib2-moderate-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-releases-xdg-desktop-portal-update-for-rhe-099203f6",
    "title": "Red Hat Releases xdg-desktop-portal Update for RHEL 10.2",
    "summary": "Red Hat issued a security update for xdg-desktop-portal on RHEL 10.2 Extended Update Support, addressing multiple vulnerabilities. The patch mitigates potential remote code execution and privilege escalation flaws in the portal's sandboxed application handling, with CVSS scores ranging from moderate to high. Red Hat recommends applying the update immediately to secure affected systems.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102176",
    "publishedAt": "2026-11-23T03:30:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-xdg-desktop-portal-update-for-rhe",
      "article-099203f6",
      "099203f6",
      "red-hat-releases-xdg-desktop-portal-update-for-rhe-2ee15b",
      "red-hat-releases-xdg-desktop-portal-update-for-rhel-10-2"
    ]
  },
  {
    "slug": "red-hat-releases-xdg-desktop-portal-security-updat-65044650",
    "title": "Red Hat Releases xdg-desktop-portal Security Update",
    "summary": "Red Hat issued a security update for xdg-desktop-portal on RHEL 9.4 for SAP Solutions, addressing multiple vulnerabilities. The update mitigates potential remote code execution and privilege escalation flaws identified in the portal's handling of sandboxed applications, with CVSS scores ranging from moderate to high. Red Hat recommends applying the update immediately to secure affected systems.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102165",
    "publishedAt": "2026-11-23T03:25:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-xdg-desktop-portal-security-updat",
      "article-65044650",
      "65044650",
      "red-hat-releases-xdg-desktop-portal-security-updat-2ee15b",
      "red-hat-releases-xdg-desktop-portal-security-update"
    ]
  },
  {
    "slug": "qemu-kvm-ma-flaw-allows-local-privilege-escalation-4423a1ec",
    "title": "QEMU KVM MA Flaw Allows Local Privilege Escalation",
    "summary": "Red Enterprise Linux 7 Extended Lifecycle Support users face a qemu-kvm-ma flaw that may enable local privilege escalation via the virtual machine monitor. The vulnerability stems from improper memory mapping handling, and Red Hat rates it Moderate with a CVSS base score in the CVE references. Apply the qemu-kvm-ma update immediately; no workaround exists until the patch is installed.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102196",
    "publishedAt": "2026-11-23T03:24:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "qemu-kvm-ma-flaw-allows-local-privilege-escalation",
      "article-4423a1ec",
      "4423a1ec",
      "qemu-kvm-ma-flaw-allows-local-privilege-escalation-2ee15b"
    ]
  },
  {
    "slug": "gnome-remote-desktop-vulnerability-enables-remote-ae144d19",
    "title": "GNOME Remote Desktop Vulnerability Enables Remote Code Execution",
    "summary": "Red Enterprise Linux 9.8 Extended Update Support users face a gnome-remote-desktop flaw that permits remote code execution via the remote desktop protocol. The issue arises from unchecked input during session negotiation, and Red Hat rates it Important with a CVSS base score in the CVE references. Apply the gnome-remote-desktop update immediately; no workaround exists until the patch is installed.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102169",
    "publishedAt": "2026-11-23T03:22:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gnome-remote-desktop-vulnerability-enables-remote",
      "article-ae144d19",
      "ae144d19",
      "gnome-remote-desktop-vulnerability-enables-remote-2ee15b",
      "gnome-remote-desktop-vulnerability-enables-remote-code-execu"
    ]
  },
  {
    "slug": "red-hat-issues-security-update-for-xdg-desktop-por-4ae5111b",
    "title": "Red Hat Issues Security Update for xdg-desktop-portal",
    "summary": "Red Hat released a security update for the xdg-desktop-portal component in Red Enterprise Linux 10, addressing multiple vulnerabilities. The update mitigates flaws that could allow privilege escalation or unauthorized data access, with CVSS scores provided in the CVE references. Administrators should apply the RHSA-2026:102177 update immediately to ensure protection against the identified weaknesses.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102177",
    "publishedAt": "2026-11-23T03:15:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-security-update-for-xdg-desktop-por",
      "article-4ae5111b",
      "4ae5111b",
      "red-hat-issues-security-update-for-xdg-desktop-por-2ee15b",
      "red-hat-issues-security-update-for-xdg-desktop-portal"
    ]
  },
  {
    "slug": "volkswagen-cars-exposed-via-bluetooth-spy-flaws-1dfe3aed",
    "title": "Volkswagen Cars Exposed via Bluetooth Spy Flaws",
    "summary": "Researchers demonstrated that Bluetooth flaws in Volkswagen vehicles enable eavesdropping on conversations and GPS tracking. The flaws grant unauthorized cabin control and location access, exposing private data and enabling remote manipulation, with a 16-month exposure after disclosure. Volkswagen should expedite the release of a patch and advise owners to disable Bluetooth or apply the fix immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hack-volkswagen-cars-via-bluetooth/",
    "publishedAt": "2026-11-23T03:09:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "volkswagen-cars-exposed-via-bluetooth-spy-flaws",
      "article-1dfe3aed",
      "1dfe3aed",
      "volkswagen-cars-exposed-via-bluetooth-spy-flaws-210daa"
    ]
  },
  {
    "slug": "openai-finds-zero-day-mobile-os-bypass-and-rce-808117f3",
    "title": "OpenAI Finds Zero-Day Mobile OS Bypass and RCE",
    "summary": "OpenAI’s GPT-6.2 Astra discovered zero-day flaws in a popular mobile OS and a common network service. The flaws include a permission-bypass exposing private data and a remote code execution path reachable from a low-privileged role. No vendor patch is yet available; security teams should monitor OpenAI advisories and apply any future OS or service updates promptly.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/openai-gpt-6-2-astra-0-day-vulnerabilities/",
    "publishedAt": "2026-11-23T03:06:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-finds-zero-day-mobile-os-bypass-and-rce",
      "article-808117f3",
      "808117f3",
      "openai-finds-zero-day-mobile-os-bypass-and-rce-17f932"
    ]
  },
  {
    "slug": "red-hat-updates-mingw-expat-for-rhel8-88477b25",
    "title": "Red Hat Updates mingw-expat for RHEL8",
    "summary": "Red Hat released an Important security update for mingw-expat on Red Hat Enterprise Linux 8 to fix a kernel-related flaw. The flaw, cited in several CVE references, carries a CVSS base score indicating high severity, but no active exploitation has been reported. The vendor has made the patch available; administrators should apply it immediately to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102193",
    "publishedAt": "2026-11-23T03:06:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-mingw-expat-for-rhel8",
      "article-88477b25",
      "88477b25",
      "red-hat-updates-mingw-expat-for-rhel8-2ee15b"
    ]
  },
  {
    "slug": "cleverbridge-reports-card-data-theft-f685ea02",
    "title": "Cleverbridge Reports Card Data Theft",
    "summary": "Cleverbridge confirmed that attackers exfiltrated payment card data from its e-commerce platform, including card numbers, expiration dates, and CVV codes. The breach involved unauthorized access to the platform’s database, exposing sensitive payment information to malicious actors. Cleverbridge has begun notifying affected customers and is investigating the incident; affected users should monitor accounts for fraudulent activity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/cleverbridge-data-breach/",
    "publishedAt": "2026-11-23T02:37:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cleverbridge-reports-card-data-theft",
      "article-f685ea02",
      "f685ea02",
      "cleverbridge-reports-card-data-theft-70d8b7"
    ]
  },
  {
    "slug": "red-hat-updates-librabbitmq-on-rhel-8-3f737d08",
    "title": "Red Hat Updates librabbitmq on RHEL 8",
    "summary": "Red Hat issued a security update for librabbitmq on RHEL 8, addressing vulnerabilities rated as Important. The vulnerabilities lack a publicly disclosed CVE identifier in the advisory, but Red Hat provides CVSS base scores for each through referenced CVE links. Security teams should apply the librabbitmq update immediately to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102157",
    "publishedAt": "2026-11-23T02:16:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-librabbitmq-on-rhel-8",
      "article-3f737d08",
      "3f737d08",
      "red-hat-updates-librabbitmq-on-rhel-8-2ee15a"
    ]
  },
  {
    "slug": "red-hat-updates-libgsf-on-rhel-9-ff7053b1",
    "title": "Red Hat Updates libgsf on RHEL 9",
    "summary": "Red Hat released a security update for libgsf on RHEL 9, addressing vulnerabilities rated as Important. No specific CVE identifiers are listed in the advisory, but CVSS base scores are available via referenced CVE links for each vulnerability. Apply the libgsf update promptly to reduce exposure to the identified weaknesses.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102160",
    "publishedAt": "2026-11-23T02:14:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-libgsf-on-rhel-9",
      "article-ff7053b1",
      "ff7053b1",
      "red-hat-updates-libgsf-on-rhel-9-2ee15b"
    ]
  },
  {
    "slug": "red-hat-gfs2-utils-security-update-released-cf32cd93",
    "title": "Red Hat gfs2-utils security update released",
    "summary": "Red Hat released a gfs2-utils update for Enterprise Linux 9, fixing a flaw that could allow arbitrary code via malformed GFS2 metadata. The issue stems from improper handling of GFS2 superblock fields, with a CVSS base score indicating moderate impact; no active exploitation observed. Apply the patch through the standard update channel to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102183",
    "publishedAt": "2026-11-23T02:14:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-gfs2-utils-security-update-released",
      "article-cf32cd93",
      "cf32cd93",
      "red-hat-gfs2-utils-security-update-released-2ee15b"
    ]
  },
  {
    "slug": "red-hat-libgsf-security-update-released-29b1afa8",
    "title": "Red Hat libgsf security update released",
    "summary": "Red Hat released a libgsf update for Enterprise Linux 9.8 EUS, fixing a flaw that could allow arbitrary code via malformed GSF files. The issue stems from insufficient validation of GSF headers, with a CVSS base score indicating important impact; no active exploitation reported. Apply the patch via the standard update channel to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102161",
    "publishedAt": "2026-11-23T02:13:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-libgsf-security-update-released",
      "article-29b1afa8",
      "29b1afa8",
      "red-hat-libgsf-security-update-released-2ee15b"
    ]
  },
  {
    "slug": "isc-stormcast-monday-november-23-2026-3e9121da",
    "title": "ISC Stormcast: Monday November 23, 2026",
    "summary": "The SANS Internet Storm Center releases its weekly Stormcast podcast for Monday, November 23, 2026. The episode covers current threat landscape insights, emerging attack trends, and defensive best practices shared by industry experts. Listeners can access the recording and transcript via the ISC website, providing a resource for security teams to stay informed.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33548",
    "publishedAt": "2026-11-23T02:00:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isc-stormcast-monday-november-23-2026",
      "article-3e9121da",
      "3e9121da",
      "isc-stormcast-monday-november-23-2026-57dd81"
    ]
  },
  {
    "slug": "red-hat-updates-flatpak-on-rhel-8-8-0270c368",
    "title": "Red Hat Updates flatpak on RHEL 8.8",
    "summary": "Red Hat released a security update for flatpak on RHEL 8.8, addressing vulnerabilities rated as Important. The advisory does not list specific CVE identifiers, but CVSS base scores are provided via referenced CVE links for each vulnerability. Security teams should apply the flatpak update promptly to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102158",
    "publishedAt": "2026-11-23T01:58:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-flatpak-on-rhel-8-8",
      "article-0270c368",
      "0270c368",
      "red-hat-updates-flatpak-on-rhel-8-8-2ee15a"
    ]
  },
  {
    "slug": "red-hat-issues-important-libgsf-security-update-a34525dd",
    "title": "Red Hat Issues Important libgsf Security Update",
    "summary": "Red Hat released a libgsf update on RHEL 10, fixing vulnerabilities that could enable local privilege escalation or denial of service. The advisory lists CVSS base scores and references CVE identifiers, though specific CVE numbers are omitted. Red Hat recommends applying the update immediately via the RPM package or system update tools to mitigate exploitation risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102159",
    "publishedAt": "2026-11-23T01:47:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-libgsf-security-update",
      "article-a34525dd",
      "a34525dd",
      "red-hat-issues-important-libgsf-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-flatpak-update-fixes-security-vulnerabilit-58f0e68c",
    "title": "Red Hat Flatpak Update Fixes Security Vulnerabilities",
    "summary": "Red Hat issued a flatpak patch for RHEL 8.4 to fix multiple security flaws. The update addresses privilege-escalation and information-leak vulnerabilities, each with a CVSS score listed via CVE references, but no exploitation reported. Apply the flatpak update immediately; no workaround exists, and users should confirm the new flatpak version post-install.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102156",
    "publishedAt": "2026-11-23T01:23:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-flatpak-update-fixes-security-vulnerabilit",
      "article-58f0e68c",
      "58f0e68c",
      "red-hat-flatpak-update-fixes-security-vulnerabilit-2ee15a",
      "red-hat-flatpak-update-fixes-security-vulnerabilities"
    ]
  },
  {
    "slug": "red-hat-kernel-patch-addresses-multiple-security-f-74ef8639",
    "title": "Red Hat Kernel Patch Addresses Multiple Security Flaws",
    "summary": "Red Hat issued a kernel patch for RHEL 10.2 EUS to fix multiple Linux kernel security flaws. The update addresses privilege-escalation and information-leak flaws, each with a CVSS score listed via CVE references, but no active exploitation has been seen. Red Hat advises applying the kernel update immediately; no workaround exists, and users should confirm the new kernel version post-install.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102090",
    "publishedAt": "2026-11-23T00:51:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-patch-addresses-multiple-security-f",
      "article-74ef8639",
      "74ef8639",
      "red-hat-kernel-patch-addresses-multiple-security-f-2ee157",
      "red-hat-kernel-patch-addresses-multiple-security-flaws"
    ]
  },
  {
    "slug": "red-hat-issues-fltk-security-patch-743179e1",
    "title": "Red Hat Issues fltk Security Patch",
    "summary": "Red Enterprise Linux 9 users receive an important security update for the fltk GUI toolkit. The update addresses one or more vulnerabilities that could allow attackers to execute code or compromise system integrity, as indicated by the CVSS base score linked in the advisory. Red Hat recommends applying the patch immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102089",
    "publishedAt": "2026-11-23T00:40:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-fltk-security-patch",
      "article-743179e1",
      "743179e1",
      "red-hat-issues-fltk-security-patch-2ee157"
    ]
  },
  {
    "slug": "google-blocks-ai-tool-calls-with-governance-42e3e322",
    "title": "Google Blocks AI Tool Calls with Governance",
    "summary": "Google introduces semantic governance policies on its Gemini platform, allowing enterprises to pre-screen AI agent tool calls. The policies evaluate each proposed tool invocation against user intent and company rules, blocking non-compliant actions at the Agent Gateway enforcement point. Organizations can configure permissions to define allowed actions, enhancing control over AI agent behavior.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/google-semantic-governance-policies/",
    "publishedAt": "2026-11-23T00:27:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-blocks-ai-tool-calls-with-governance",
      "article-42e3e322",
      "42e3e322",
      "google-blocks-ai-tool-calls-with-governance-1a2d8c"
    ]
  },
  {
    "slug": "red-hat-updates-python-oauthlib-security-b56e0807",
    "title": "Red Hat Updates python-oauthlib Security",
    "summary": "Red Enterprise Linux 8.8 users receive an important security update for python-oauthlib, a library used for OAuth authentication. The update fixes one or more vulnerabilities that could enable attackers to bypass authentication or inject malicious tokens, as indicated by the CVSS base score referenced in the advisory. Red Hat advises applying the patch promptly to secure authentication flows.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102091",
    "publishedAt": "2026-11-23T00:18:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-python-oauthlib-security",
      "article-b56e0807",
      "b56e0807",
      "red-hat-updates-python-oauthlib-security-2ee157"
    ]
  },
  {
    "slug": "red-hat-python-oauthlib-patch-resolves-security-is-fbed9239",
    "title": "Red Hat python-oauthlib Patch Resolves Security Issues",
    "summary": "Red Hat released a python-oauthlib patch for RHEL 8.4 to address several security vulnerabilities. The update mitigates privilege-escalation and information-leak flaws, each assigned a CVSS score and referenced via CVE links, with no active exploitation observed. Apply the python-oauthlib update immediately; no workaround is available, and users should verify the new package version after installation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102092",
    "publishedAt": "2026-11-23T00:16:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-python-oauthlib-patch-resolves-security-is",
      "article-fbed9239",
      "fbed9239",
      "red-hat-python-oauthlib-patch-resolves-security-is-2ee157",
      "red-hat-python-oauthlib-patch-resolves-security-issues"
    ]
  },
  {
    "slug": "red-hat-releases-open-vswitch-2-15-security-update-d4e32cc7",
    "title": "Red Hat Releases Open vSwitch 2.15 Security Update",
    "summary": "Red Hat released a security update for Open vSwitch 2.15 on RHEL 8 Fast Datapath, addressing a vulnerability that could allow unauthorized traffic manipulation. The advisory rates the issue as Important, with CVSS base scores linked to CVE entries, indicating a high-severity flaw that may enable remote code execution.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102088",
    "publishedAt": "2026-11-23T00:14:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-open-vswitch-2-15-security-update",
      "article-d4e32cc7",
      "d4e32cc7",
      "red-hat-releases-open-vswitch-2-15-security-update-2ee157"
    ]
  },
  {
    "slug": "red-hat-releases-openvswitch-3-6-patch-c6abbe2c",
    "title": "Red Hat Releases openvswitch 3.6 Patch",
    "summary": "Red Enterprise Linux 10 users receive an important security update for openvswitch 3.6, a software switch used in virtual networking. The update addresses one or more vulnerabilities that could allow attackers to execute code or disrupt network traffic, as indicated by the CVSS base score linked in the advisory. Red Hat recommends applying the patch immediately to protect virtual networks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102087",
    "publishedAt": "2026-11-23T00:12:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-openvswitch-3-6-patch",
      "article-c6abbe2c",
      "c6abbe2c",
      "red-hat-releases-openvswitch-3-6-patch-2ee157"
    ]
  },
  {
    "slug": "ghostscript-upload2shell-vulnerability-poc-release-419e4f95",
    "title": "Ghostscript Upload2Shell Vulnerability PoC Released",
    "summary": "Ghostscript’s Upload2Shell vulnerability (CVE-2026-125396) allows attackers to execute arbitrary code via crafted PDF uploads. The flaw, rated as a high-severity issue, exploits a buffer overflow in the PDF parsing engine, enabling remote code execution without authentication. Security teams should update Ghostscript to the latest version or apply the vendor-issued patch to prevent exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Sophos Threat Research",
    "sourceUrl": "https://www.sophos.com/en-us/blog/proof-of-concept-available-for-ghostscript-upload2shell",
    "publishedAt": "2026-11-23T00:00:00.000Z",
    "cves": [
      "CVE-2026-125396"
    ],
    "additionalSources": [],
    "aliases": [
      "ghostscript-upload2shell-vulnerability-poc-release",
      "article-419e4f95",
      "419e4f95",
      "ghostscript-upload2shell-vulnerability-poc-release-29be2e",
      "ghostscript-upload2shell-vulnerability-poc-released"
    ]
  },
  {
    "slug": "check-point-management-servers-hit-by-intrusion-ca-0d35bd8b",
    "title": "Check Point Management Servers Hit by Intrusion Campaign",
    "summary": "GreyNoise discovered an intrusion campaign targeting Check Point Security Management Servers, with confirmed attack activity between October 17 and November 2, 2026. The campaign impacted at least 22 distinct organizations globally. Security teams should investigate exposed management servers and review related logs for signs of compromise.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "GreyNoise Labs",
    "sourceUrl": "https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign",
    "publishedAt": "2026-11-23T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "check-point-management-servers-hit-by-intrusion-ca",
      "article-0d35bd8b",
      "0d35bd8b",
      "check-point-management-servers-hit-by-intrusion-ca-3ef513",
      "check-point-management-servers-hit-by-intrusion-campaign"
    ]
  },
  {
    "slug": "debian-13-8-bundles-kernel-and-chromium-fixes-8096e679",
    "title": "Debian 13.8 Bundles Kernel and Chromium Fixes",
    "summary": "Debian 13.8 bundles security fixes for the kernel, Chromium, Firefox ESR, OpenJDK 25, nginx, BIND 9, Dovecot, rsync, PostgreSQL 17, and 112 other packages. The update covers 122 advisories, DSA-6408 to DSA-6629, fixing critical bugs that could enable privilege escalation. Users should run 'apt update && apt upgrade' on trixie, verify packages, and monitor Debian Security Advisories for further patches.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/debian-13-8-released/",
    "publishedAt": "2026-11-22T23:05:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "debian-13-8-bundles-kernel-and-chromium-fixes",
      "article-8096e679",
      "8096e679",
      "debian-13-8-bundles-kernel-and-chromium-fixes-426950"
    ]
  },
  {
    "slug": "gl-inet-cloud-flaw-enables-router-and-kvm-malware-f26108c9",
    "title": "GL.iNet Cloud Flaw Enables Router and KVM Malware",
    "summary": "Hackers leveraged a flaw in GL.iNet’s cloud-based remote-management service to compromise customer routers and KVM devices. The vulnerability permits unauthenticated code execution, enabling attackers to drop custom malware, establish backdoors, and spawn reverse shells for persistent remote control. GL.iNet has released a patch for the cloud service; administrators should apply the update immediately and verify device firmware integrity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-exploit-glinet-cloud-flaw-to-infect-routers-kvm-devices/",
    "publishedAt": "2026-11-22T18:45:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gl-inet-cloud-flaw-enables-router-and-kvm-malware",
      "article-f26108c9",
      "f26108c9",
      "gl-inet-cloud-flaw-enables-router-and-kvm-malware-630c8c"
    ]
  },
  {
    "slug": "debian-ubuntu-remove-rsyslogd-timestamp-config-dir-fc4a37ea",
    "title": "Debian, Ubuntu Remove rsyslogd Timestamp Config Directive",
    "summary": "Debian and Ubuntu removed a configuration directive from rsyslogd in early 2023, changing syslog timestamp handling. The change removes a legacy option that allowed custom timestamp formatting, potentially causing logs to default to system time zones and reducing forensic precision. Users should review rsyslogd configuration files for timestamp settings and apply any vendor updates that reintroduce desired formatting options.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33530",
    "publishedAt": "2026-11-22T18:38:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "debian-ubuntu-remove-rsyslogd-timestamp-config-dir",
      "article-fc4a37ea",
      "fc4a37ea",
      "debian-ubuntu-remove-rsyslogd-timestamp-config-dir-57dd81",
      "debian-ubuntu-remove-rsyslogd-timestamp-config-directive"
    ]
  },
  {
    "slug": "virustotal-detects-ransomware-missed-by-75-av-engi-c4a5db07",
    "title": "VirusTotal Detects Ransomware Missed by 75 AV Engines",
    "summary": "VirusTotal introduced a runtime encryption check that identified a Python ransomware sample previously undetected by 75 antivirus engines. The malware leveraged obfuscated Python code to evade static signatures, but its encryption activity triggered the new behavior analysis, revealing its malicious intent. Security teams should enable VirusTotal’s behavior-based detection and ensure their antivirus solutions are updated to recognize similar obfuscated ransomware.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/virustotal-ransomware-detection/",
    "publishedAt": "2026-11-22T17:11:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "virustotal-detects-ransomware-missed-by-75-av-engi",
      "article-c4a5db07",
      "c4a5db07",
      "virustotal-detects-ransomware-missed-by-75-av-engi-614dd5",
      "virustotal-detects-ransomware-missed-by-75-av-engines"
    ]
  },
  {
    "slug": "optimizely-malware-hits-178-organizations-fb37b3e2",
    "title": "Optimizely Malware Hits 178 Organizations",
    "summary": "An attacker exploited a flaw in Optimizely’s web experimentation platform to plant malicious JavaScript on 178 organizations’ websites, such as BBC, CNN, and Zoom. The vulnerability, a memory-corruption flaw in OpenJDK’s Base64 decoder (CVE-2026-114938), requires specific CPU conditions, limiting exploitation but still high severity. Optimizely confirmed the incident, urged customers to update the platform, remove injected scripts, and monitor traffic.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/22/week-in-review-java4shell-proves-tricky-to-exploit-malware-planted-via-optimizely-hits-178-orgs/",
    "publishedAt": "2026-11-22T09:00:25.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "optimizely-malware-hits-178-organizations",
      "article-fb37b3e2",
      "fb37b3e2",
      "optimizely-malware-hits-178-organizations-654f99"
    ]
  },
  {
    "slug": "openrouter-removes-providers-after-prompt-theft-di-9940c3f7",
    "title": "OpenRouter Removes Providers After Prompt Theft Discovery",
    "summary": "OpenRouter removed three AI inference providers after researchers uncovered months of prompt theft from their internal systems. The stolen prompts, some marked Zero Data Retention, were accessed without authorization, exposing user inputs; Dragos confirmed the breach to vendors. OpenRouter recommends vendors review access controls, enforce strict data-retention policies, and apply security hardening to prevent future prompt exfiltration.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html",
    "publishedAt": "2026-11-22T05:06:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openrouter-removes-providers-after-prompt-theft-di",
      "article-9940c3f7",
      "9940c3f7",
      "openrouter-removes-providers-after-prompt-theft-di-799f6a",
      "openrouter-removes-providers-after-prompt-theft-discovery"
    ]
  },
  {
    "slug": "ghostscript-sandbox-escape-rce-demonstrated-via-fi-c975302d",
    "title": "Ghostscript Sandbox Escape RCE Demonstrated via File Uploads",
    "summary": "Researchers demonstrated a sandbox-escape RCE flaw in Ghostscript, a common PDF/PostScript interpreter on Linux servers, via crafted file uploads. The flaw lets attackers bypass Ghostscript’s isolation and run arbitrary commands on the host, compromising the web application; a PoC was released by pwn.ai. Ghostscript issued a patch; admins should apply it immediately and verify file-upload handling remains sandboxed.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/researchers-demonstrate-ghostscript.html",
    "publishedAt": "2026-11-22T05:03:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ghostscript-sandbox-escape-rce-demonstrated-via-fi",
      "article-c975302d",
      "c975302d",
      "ghostscript-sandbox-escape-rce-demonstrated-via-fi-4d8551",
      "ghostscript-sandbox-escape-rce-demonstrated-via-file-uploads"
    ]
  },
  {
    "slug": "openrouter-removes-compromised-ai-hosts-revokes-ze-e5254118",
    "title": "OpenRouter Removes Compromised AI Hosts, Revokes Zero Data Retention",
    "summary": "OpenRouter removed three AI hosting providers and revoked Zero Data Retention for 125 endpoints after detecting provider compromise. The flaw arises from third-party providers lacking secure isolation, risking private chat data leakage; no breach confirmed, but exposure persists. OpenRouter notified affected customers, removed compromised providers, and revoked Zero Data Retention; teams should verify endpoint settings and monitor anomalous access.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/openrouter-ai-chat-leaks/",
    "publishedAt": "2026-11-22T03:58:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openrouter-removes-compromised-ai-hosts-revokes-ze",
      "article-e5254118",
      "e5254118",
      "openrouter-removes-compromised-ai-hosts-revokes-ze-2e8006",
      "openrouter-removes-compromised-ai-hosts-revokes-zero-data-re"
    ]
  },
  {
    "slug": "red-hat-issues-critical-php-patch-for-rhel7-944c034d",
    "title": "Red Hat Issues Critical PHP Patch for RHEL7",
    "summary": "Red Hat released a critical PHP update for RHEL7 Extended Lifecycle Support, fixing high-severity vulnerabilities that could allow remote code execution. The patch covers several CVE-identified flaws, each rated with a CVSS base score indicating critical impact, though no exploitation has been seen. Apply the update immediately via RHSA-2026:101337 to keep PHP secure.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:101337",
    "publishedAt": "2026-11-22T03:56:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-php-patch-for-rhel7",
      "article-944c034d",
      "944c034d",
      "red-hat-issues-critical-php-patch-for-rhel7-2ee0ed"
    ]
  },
  {
    "slug": "ghostscript-upload2shell-enables-remote-command-ex-85e5b759",
    "title": "Ghostscript Upload2Shell Enables Remote Command Execution",
    "summary": "Ghostscript’s Type 1 font loader flaw, CVE-2026-125396, allows attackers to run arbitrary commands on WordPress, Roundcube, and print servers via file processing. The flaw does not need direct Ghostscript exposure, yet it grants remote code execution on any server that processes malicious fonts. Patches for Ghostscript 10.08.0+ are released; administrators should upgrade immediately to eliminate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/upload2shell-flaw/",
    "publishedAt": "2026-11-22T02:43:08.000Z",
    "cves": [
      "CVE-2026-125396"
    ],
    "additionalSources": [],
    "aliases": [
      "ghostscript-upload2shell-enables-remote-command-ex",
      "article-85e5b759",
      "85e5b759",
      "ghostscript-upload2shell-enables-remote-command-ex-4a2f52",
      "ghostscript-upload2shell-enables-remote-command-execution"
    ]
  },
  {
    "slug": "red-hat-issues-critical-php-8-2-update-efc53ac1",
    "title": "Red Hat Issues Critical PHP 8.2 Update",
    "summary": "Red Hat issued a critical update for php:8.2 on RHEL8, fixing vulnerabilities that could enable remote code execution via PHP scripts. The CVE entries show CVSS scores up to 9.8, allowing unauthenticated attackers to run arbitrary code on affected servers. Administrators should apply the php:8.2 patch immediately and confirm the new module version is deployed to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:101276",
    "publishedAt": "2026-11-22T02:24:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-php-8-2-update",
      "article-efc53ac1",
      "efc53ac1",
      "red-hat-issues-critical-php-8-2-update-2ee0ea"
    ]
  },
  {
    "slug": "entra-connect-health-flaw-exposes-admin-emails-20cbb0e4",
    "title": "Entra Connect Health Flaw Exposes Admin Emails",
    "summary": "A flaw in Microsoft Entra Connect Health lets attackers read admin and technical contact email addresses and config data. The vulnerability offers read-only access to these records but no inbox or message retrieval, and was disclosed via a Reddit customer notice. Microsoft applied a fix on November 19; administrators should patch immediately to stop data exposure.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsoft-entra-connect-health-flaw/",
    "publishedAt": "2026-11-22T02:03:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "entra-connect-health-flaw-exposes-admin-emails",
      "article-20cbb0e4",
      "20cbb0e4",
      "entra-connect-health-flaw-exposes-admin-emails-307435"
    ]
  },
  {
    "slug": "rackspace-spot-breach-exposes-customer-kubernetes-49607481",
    "title": "Rackspace Spot Breach Exposes Customer Kubernetes Secrets",
    "summary": "Hackers breached Rackspace Spot cloud platform using compromised credentials, deploying unauthorized workloads and accessing Kubernetes secrets in customer clusters. The breach leveraged stolen credentials to read sensitive cluster secrets, exposing potential data leakage without exploiting a known software flaw. Rackspace urged customers to rotate compromised credentials, audit workloads, and apply any available platform updates to mitigate the exposure.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/rackspace-spot-breach-let-hackers-access-customer-kubernetes-secrets/",
    "publishedAt": "2026-11-21T22:59:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rackspace-spot-breach-exposes-customer-kubernetes",
      "article-49607481",
      "49607481",
      "rackspace-spot-breach-exposes-customer-kubernetes-43072e",
      "rackspace-spot-breach-exposes-customer-kubernetes-secrets"
    ]
  },
  {
    "slug": "red-hat-issues-critical-update-for-php-8-2-ba37de30",
    "title": "Red Hat Issues Critical Update for PHP 8.2",
    "summary": "Red Hat released a critical security update for the php:8.2 module on RHEL 9.8 Extended Update Support, addressing high-impact vulnerabilities. The flaws, listed in CVE references, enable remote code execution via malformed input, with CVSS scores up to 9.8. Red Hat recommends applying the update immediately; no workaround exists, and users should verify module integrity post-installation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:101253",
    "publishedAt": "2026-11-21T18:51:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-update-for-php-8-2",
      "article-ba37de30",
      "ba37de30",
      "red-hat-issues-critical-update-for-php-8-2-2ee0ea"
    ]
  },
  {
    "slug": "red-hat-issues-critical-update-for-php-8-3-647cf248",
    "title": "Red Hat Issues Critical Update for PHP 8.3",
    "summary": "Red Hat released a critical security update for the php:8.3 module on RHEL 9.8 Extended Update Support, addressing high-impact vulnerabilities. The flaws, listed in CVE references, enable remote code execution via malformed input, with CVSS scores up to 9.8. Red Hat recommends applying the update immediately; no workaround exists, and users should verify module integrity post-installation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:101252",
    "publishedAt": "2026-11-21T18:28:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-update-for-php-8-3",
      "article-647cf248",
      "647cf248",
      "red-hat-issues-critical-update-for-php-8-3-2ee0ea"
    ]
  },
  {
    "slug": "microsoft-entra-connect-health-breach-exposes-admi-92d37834",
    "title": "Microsoft Entra Connect Health Breach Exposes Admin Emails",
    "summary": "Attackers exploited a flaw in Microsoft Entra Connect Health, gaining unauthorized access to administrator email addresses and tenant configuration data. The flaw enabled remote code execution via a malformed authentication token, letting attackers read tenant settings without credentials. Microsoft issued a patch and urged customers to update Entra Connect Health immediately, disabling the affected API endpoint as a temporary mitigation.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/microsoft-entra-connect-health-flaw-exploited-to-steal-tenant-data/",
    "publishedAt": "2026-11-21T18:01:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-entra-connect-health-breach-exposes-admi",
      "article-92d37834",
      "92d37834",
      "microsoft-entra-connect-health-breach-exposes-admi-33d14e",
      "microsoft-entra-connect-health-breach-exposes-admin-emails"
    ]
  },
  {
    "slug": "mcp-servers-pose-new-ai-attack-surface-7fc7f366",
    "title": "MCP Servers Pose New AI Attack Surface",
    "summary": "MCP lets AI apps connect to external tools, APIs, and business data, making each server a new attack surface. Misconfigurations or weak authentication allow attackers to gain unauthorized access, potentially compromising corporate systems and data. Apply strict access controls, enable MFA, audit settings, and install vendor patches regularly to mitigate risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/mcp-server-security/",
    "publishedAt": "2026-11-21T17:24:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mcp-servers-pose-new-ai-attack-surface",
      "article-7fc7f366",
      "7fc7f366",
      "mcp-servers-pose-new-ai-attack-surface-2864c5"
    ]
  },
  {
    "slug": "red-hat-issues-critical-update-for-php-7-4-09495a8d",
    "title": "Red Hat Issues Critical Update for PHP 7.4",
    "summary": "Red Hat released a critical security update for the php:7.4 module on RHEL 8, addressing high-impact vulnerabilities. The flaws, listed in CVE references, enable remote code execution via malformed input, with CVSS scores up to 9.8. Red Hat recommends applying the update immediately; no workaround exists, and users should verify module integrity post-installation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100991",
    "publishedAt": "2026-11-21T15:34:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-update-for-php-7-4",
      "article-09495a8d",
      "09495a8d",
      "red-hat-issues-critical-update-for-php-7-4-2ee090"
    ]
  },
  {
    "slug": "fbi-ncic-database-breach-exposes-sensitive-law-enf-1fef14b8",
    "title": "FBI NCIC Database Breach Exposes Sensitive Law Enforcement Records",
    "summary": "FBI National Crime Information Center (NCIC) database was breached, exposing case files and personnel records. Attackers exploited an undisclosed flaw to gain unauthorized access, potentially compromising investigative workflows. Investigators are isolating the breach, patching the flaw, urging agencies to review NCIC access controls, and coordinating with federal cybersecurity teams to mitigate further exposure.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/fbi-reportedly-hacked-again-this-time-targeting-nationwide-police-database/",
    "publishedAt": "2026-11-21T14:26:04.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "SecurityWeek",
        "sourceUrl": "https://www.securityweek.com/fbi-investigating-apparent-hack-of-its-key-national-criminal-justice-database-ap-source-says/"
      }
    ],
    "aliases": [
      "fbi-ncic-database-breach-exposes-sensitive-law-enf",
      "article-1fef14b8",
      "1fef14b8",
      "fbi-ncic-database-breach-exposes-sensitive-law-enf-3a94f2",
      "fbi-ncic-database-breach-exposes-sensitive-law-enforcement-r"
    ]
  },
  {
    "slug": "crowdstrike-negotiates-zscaler-acquisition-822c7184",
    "title": "CrowdStrike Negotiates Zscaler Acquisition",
    "summary": "CrowdStrike is negotiating a potential acquisition of Zscaler, the cloud-security platform provider that offers zero-trust networking and secure web gateways. The deal could consolidate market share, expand CrowdStrike's cloud security portfolio, and reshape vendor competition by integrating Zscaler's zero-trust solutions. Both firms are conducting due diligence, and the transaction remains unconfirmed pending regulatory review and shareholder approval.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/crowdstrike-to-acquire-zscaler/",
    "publishedAt": "2026-11-21T13:12:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-negotiates-zscaler-acquisition",
      "article-822c7184",
      "822c7184",
      "crowdstrike-negotiates-zscaler-acquisition-457030"
    ]
  },
  {
    "slug": "trump-names-kirsten-davies-national-cyber-director-d6ec788a",
    "title": "Trump Names Kirsten Davies National Cyber Director",
    "summary": "White House appoints Kirsten Davies as National Cyber Director to steer America First cyber strategy and oversee federal cyber operations. Davies brings experience from previous cyber leadership roles, expected to shape national cyber defense priorities and cybersecurity policy coordination. The appointment signals a shift toward a more aggressive cyber posture; stakeholders should monitor policy developments and regulatory initiatives.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/president-trump-taps-kirsten-davies-as-national-cyber-director/",
    "publishedAt": "2026-11-21T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "trump-names-kirsten-davies-national-cyber-director",
      "article-d6ec788a",
      "d6ec788a",
      "trump-names-kirsten-davies-national-cyber-director-6c29ae"
    ]
  },
  {
    "slug": "china-linked-hackers-exploit-monai-label-zero-day-bc54a5be",
    "title": "China-Linked Hackers Exploit MONAI Label Zero-Day",
    "summary": "China-linked threat actors used autonomous Cairn AI agents to locate and exploit a critical vulnerability in MONAI Label medical software. The flaw permits unauthenticated critical remote code execution via malformed input, enabling data exfiltration from imaging systems. Amazon issued an out-of-band patch; all MONAI Label users should apply it immediately.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/amazon-china-linked-hackers-ai-agents-exploited-medical-software-zero-day/",
    "publishedAt": "2026-11-21T12:08:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "china-linked-hackers-exploit-monai-label-zero-day",
      "article-bc54a5be",
      "bc54a5be",
      "china-linked-hackers-exploit-monai-label-zero-day-750f66"
    ]
  },
  {
    "slug": "malicious-webpage-extracts-meta-muse-private-chats-24931218",
    "title": "Malicious Webpage Extracts Meta Muse Private Chats",
    "summary": "Researchers showed a single malicious webpage can extract private conversations and stored memories from Meta Muse without approval prompts. The method could also harvest credentials for connected accounts, but the demo was confined to one user and did not impact real users. Meta has not issued a fix; users should avoid untrusted webpages and consider disabling Muse until further guidance.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/a-single-malicious-webpage-let.html",
    "publishedAt": "2026-11-21T11:53:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "malicious-webpage-extracts-meta-muse-private-chats",
      "article-24931218",
      "24931218",
      "malicious-webpage-extracts-meta-muse-private-chats-2e042a"
    ]
  },
  {
    "slug": "gpgme-memory-bug-exposes-app-data-via-malicious-ke-95ec495f",
    "title": "GPGME Memory Bug Exposes App Data via Malicious Keys",
    "summary": "A malicious OpenPGP key with an unusually long user ID triggers a critical memory bug in GPGME, the core library of GnuPG, exposing application data. The flaw, CVE-2026-129975, affects all software using GPGME before 2.3.0 and lets attackers read memory without authentication. GnuPG released patched versions; users should upgrade to GPGME 2.3.0+ and enforce key-length checks to mitigate the issue.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/gnupg-warns-critical-gpgme-flaw-could.html",
    "publishedAt": "2026-11-21T11:05:53.000Z",
    "cves": [
      "CVE-2026-129975"
    ],
    "additionalSources": [],
    "aliases": [
      "gpgme-memory-bug-exposes-app-data-via-malicious-ke",
      "article-95ec495f",
      "95ec495f",
      "gpgme-memory-bug-exposes-app-data-via-malicious-ke-177e2e",
      "gpgme-memory-bug-exposes-app-data-via-malicious-keys"
    ]
  },
  {
    "slug": "ai-agents-exploit-monai-label-zero-day-for-root-ac-7d5446ad",
    "title": "AI Agents Exploit MONAI Label Zero-Day for Root Access",
    "summary": "AI agents discovered a zero-day in MONAI Label 0.8.5 and earlier, an open-source medical-imaging server, and used it to gain root on a university server. The flaw permits unauthenticated writes outside the server’s storage folder, enabling full system control without credentials. A patch for MONAI Label 0.8.5+ is available; admins should upgrade immediately and restrict default write permissions.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/attackers-ai-agents-found-zero-day-in.html",
    "publishedAt": "2026-11-21T11:03:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agents-exploit-monai-label-zero-day-for-root-ac",
      "article-7d5446ad",
      "7d5446ad",
      "ai-agents-exploit-monai-label-zero-day-for-root-ac-67265c",
      "ai-agents-exploit-monai-label-zero-day-for-root-access"
    ]
  },
  {
    "slug": "signal-blocks-screenshot-functionality-on-ios-and-77d729d8",
    "title": "Signal Blocks Screenshot Functionality on iOS and Android to Prevent AI Assistant Data Capture",
    "summary": "Signal has blocked screenshot functionality on iOS and Android to prevent AI assistants from capturing private chat content. The change addresses a privacy flaw that allowed screen-data interception, enabling AI agents to harvest message content without user interaction. Users can now install the patch to safeguard conversations, though protection remains incomplete against advanced AI detection.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/signal-blocks-ai-agents-from-reading.html",
    "publishedAt": "2026-11-21T08:49:20.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/security/signal-to-block-siri-gemini-ai-from-capturing-chats-on-ios-android/"
      },
      {
        "source": "The Record",
        "sourceUrl": "https://therecord.media/signal-no-screenshots-by-apple-google-operating-systems"
      }
    ],
    "aliases": [
      "signal-blocks-screenshot-functionality-on-ios-and",
      "article-77d729d8",
      "77d729d8",
      "signal-blocks-screenshot-functionality-on-ios-and-7ae7f9",
      "signal-blocks-screenshot-functionality-on-ios-and-android-to"
    ]
  },
  {
    "slug": "cisa-adds-vmware-cisco-apache-flaws-to-kev-5718e2a1",
    "title": "CISA Adds VMware, Cisco, Apache Flaws to KEV",
    "summary": "CISA added four actively exploited flaws to its KEV list, including a CVE-2026-129448 vulnerability in Broadcom VMware vCenter. The CVE-2026-129448 flaw, a deserialization of untrusted data with CVSS 9.8, enables remote code execution across VMware, Cisco Expressway, Apache Roller, and SAP NetWeaver systems. Patches are available for all affected products; administrators must apply updates immediately to mitigate the high-risk exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-critical-vmware-cisco.html",
    "publishedAt": "2026-11-21T08:49:13.000Z",
    "cves": [
      "CVE-2026-129448"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-vmware-cisco-apache-flaws-to-kev",
      "article-5718e2a1",
      "5718e2a1",
      "cisa-adds-vmware-cisco-apache-flaws-to-kev-1580ca"
    ]
  },
  {
    "slug": "6-critical-f5-big-ip-could-let-hackers-disrupt-web-e1a11be8",
    "title": "6 Critical F5 BIG-IP . Could Let Hackers Disrupt Websites and Execute Malicious Code",
    "summary": "F5 released emergency fixes for six critical BIG-IP vulnerabilities that could let remote attackers take websites and other services offline without logging in. The flaws affect specific traffic-handling configurations. An attacker who can reach a vulnerable service could crash the BIG-IP process that handles client traffic.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-f5-big-ip-vulnerabilities/",
    "publishedAt": "2026-11-21T03:13:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "6-critical-f5-big-ip-could-let-hackers-disrupt-web",
      "article-e1a11be8",
      "e1a11be8",
      "6-critical-f5-big-ip-could-let-hackers-disrupt-web-34cd03",
      "6-critical-f5-big-ip-could-let-hackers-disrupt-websites-and-"
    ]
  },
  {
    "slug": "whatsapp-android-flaws-could-let-hackers-delete-us-5e5d25e8",
    "title": "WhatsApp Android Flaws Could Let Hackers Delete Users’ Files and Expose IP Addresses",
    "summary": "WhatsApp’s November 2026 security update describes three flaws that could let attackers delete files stored by WhatsApp on Android, expose a user’s IP address, or bypass a security check for Meta AI’s Private Processing service. Of the three, only the IP exposure flaw was flagged for possible abuse.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/whatsapp-android-flaws/",
    "publishedAt": "2026-11-21T02:36:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "whatsapp-android-flaws-could-let-hackers-delete-us",
      "article-5e5d25e8",
      "5e5d25e8",
      "whatsapp-android-flaws-could-let-hackers-delete-us-8758a5",
      "whatsapp-android-flaws-could-let-hackers-delete-users-files-"
    ]
  },
  {
    "slug": "vendors-address-ai-agent-access-control-challenges-628c61df",
    "title": "Vendors Address AI Agent Access-Control Challenges",
    "summary": "Security vendors are developing identity, runtime, and development controls to restrict AI agents to authorized tasks. The convergence of controls aims to mitigate risks of agents overstepping boundaries, a gap that could enable data exfiltration or policy violations. CISOs must evaluate vendor solutions and implement layered controls to enforce task constraints, as no single standard exists yet.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/identity-access-management-security/ai-agents-bring-enterprises-new-access-control-challenges",
    "publishedAt": "2026-11-21T01:31:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vendors-address-ai-agent-access-control-challenges",
      "article-628c61df",
      "628c61df",
      "vendors-address-ai-agent-access-control-challenges-6918cc"
    ]
  },
  {
    "slug": "top-enterprise-risk-management-tools-2027-b701097f",
    "title": "Top Enterprise Risk Management Tools 2027",
    "summary": "The 2027 ERM landscape features platforms that enable organizations to identify, assess, and mitigate risks across operational, financial, compliance, and cybersecurity domains. These solutions leverage AI, machine learning, and automation to deliver real-time insights and streamline processes, while prioritizing seamless integration for centralized data views. Vendors emphasize AI-driven analytics and unified dashboards to support holistic risk management.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/enterprise-risk-management-tools/",
    "publishedAt": "2026-11-21T01:26:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "top-enterprise-risk-management-tools-2027",
      "article-b701097f",
      "b701097f",
      "top-enterprise-risk-management-tools-2027-7e6161"
    ]
  },
  {
    "slug": "cto-of-ransomwarehelp-indicted-for-wire-fraud-9b21c3c1",
    "title": "CTO of ‘RansomwareHelp’ Indicted for Wire Fraud",
    "summary": "The chief technology officer and co-founder of ransomwarehelp.com, a six year old Florida business that claimed to use \"advanced cryptographic tools\" to restore data locked by ransomware, has been charged with wire fraud after an FBI sting operation found the company was simply paying the attackers for a decryption key and charging victims a markup for work that was never performed.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "Krebs on Security",
    "sourceUrl": "https://krebsonsecurity.com/2026/11/cto-of-ransomwarehelp-indicted-for-wire-fraud/",
    "publishedAt": "2026-11-21T00:36:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cto-of-ransomwarehelp-indicted-for-wire-fraud",
      "article-9b21c3c1",
      "9b21c3c1",
      "cto-of-ransomwarehelp-indicted-for-wire-fraud-308466"
    ]
  },
  {
    "slug": "palo-alto-releases-patches-for-two-critical-nginx-c9de6158",
    "title": "Palo Alto Releases Patches for Two Critical NGINX CVEs",
    "summary": "Palo Alto Networks issued patches for two critical NGINX vulnerabilities, CVE-2026-123633 and CVE-2026-123007, that affect PAN-OS and Panorama when HTTP/2 is enabled. The flaws allow unauthenticated remote attackers to crash worker processes or execute code, posing a high-severity remote code execution risk. Administrators should apply the updates immediately or enable the temporary workaround to mitigate exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-123633",
    "publishedAt": "2026-11-20T23:00:00.000Z",
    "cves": [
      "CVE-2026-123633",
      "CVE-2026-123007"
    ],
    "additionalSources": [
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/palo-alto-confirms-nginx-rce-vulnerabilities/"
      }
    ],
    "aliases": [
      "palo-alto-releases-patches-for-two-critical-nginx",
      "article-c9de6158",
      "c9de6158",
      "palo-alto-releases-patches-for-two-critical-nginx-4fdfb7",
      "palo-alto-releases-patches-for-two-critical-nginx-cves"
    ]
  },
  {
    "slug": "com-group-conducts-vishing-data-theft-extortion-64ff6884",
    "title": "Com Group Conducts Vishing Data Theft Extortion",
    "summary": "Com affiliates execute vishing attacks, cloud data theft, and extortion campaigns targeting healthcare and finance organizations. Attackers leverage voice phishing to harvest credentials, exfiltrate cloud-stored data, and demand ransom payments, resulting in operational disruption and sensitive data exposure. Unit 42 recommends phishing-resistant multi-factor authentication, continuous cloud monitoring, and robust incident response planning to mitigate risks.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Unit 42",
    "sourceUrl": "https://unit42.paloaltonetworks.com/com-affiliate-vishing-attacks/",
    "publishedAt": "2026-11-20T22:00:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "com-group-conducts-vishing-data-theft-extortion",
      "article-64ff6884",
      "64ff6884",
      "com-group-conducts-vishing-data-theft-extortion-184882"
    ]
  },
  {
    "slug": "west-virginia-legislature-suffers-cyber-incident-11988aa7",
    "title": "West Virginia Legislature Suffers Cyber Incident",
    "summary": "A cybersecurity incident disrupted West Virginia Legislature IT systems starting Thursday and continued through Friday. The attack vector remains undisclosed, but containment prevented lateral movement to other state government networks. Legislative IT teams are actively restoring systems while investigators assess potential data compromise and implement additional safeguards.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/west-virginia-legislature-cyberattack",
    "publishedAt": "2026-11-20T21:34:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "west-virginia-legislature-suffers-cyber-incident",
      "article-11988aa7",
      "11988aa7",
      "west-virginia-legislature-suffers-cyber-incident-b1be85"
    ]
  },
  {
    "slug": "rhsa-2026-100822-critical-nginx-security-update-1afe8be9",
    "title": "RHSA-2026:100822: Critical: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100822",
    "publishedAt": "2026-11-20T21:31:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100822-critical-nginx-security-update",
      "article-1afe8be9",
      "1afe8be9",
      "rhsa-2026-100822-critical-nginx-security-update-2ee08c"
    ]
  },
  {
    "slug": "red-hat-issues-critical-php-8-4-security-update-to-b7e30b9f",
    "title": "Red Hat Issues Critical PHP 8.4 Security Update to Fix Remote Code Execution Vulnerabilities",
    "summary": "Red Hat released a critical PHP 8.4 update on RHEL 10, fixing remote code execution flaws triggered by crafted input streams. The patch addresses CVEs with CVSS scores up to 9.8, removing the risk of unauthenticated exploitation. Red Hat urges immediate application of RHSA-2026-100821, with no workarounds, and users to verify PHP 8.4 version to confirm the fix.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100821",
    "publishedAt": "2026-11-20T21:26:25.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Red Hat Security Advisories",
        "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:101251"
      }
    ],
    "aliases": [
      "red-hat-issues-critical-php-8-4-security-update-to",
      "article-b7e30b9f",
      "b7e30b9f",
      "red-hat-issues-critical-php-8-4-security-update-to-2ee08c",
      "red-hat-issues-critical-php-8-4-security-update-to-fix-remot"
    ]
  },
  {
    "slug": "china-s-armory-castle-lays-siege-to-vmware-vcenter-a33ee633",
    "title": "China's 'Armory Castle' Lays Siege to VMware vCenter Zero-Day",
    "summary": "During the last wave of major VMware vCenter security updates, a China-nexus threat group likely already had its next zero-day up its sleeve. The vulnerability is tracked as CVE-2026-123890.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/china-armory-castle-vmware-vcenter-zero-day",
    "publishedAt": "2026-11-20T21:03:27.000Z",
    "cves": [
      "CVE-2026-123890"
    ],
    "additionalSources": [],
    "aliases": [
      "china-s-armory-castle-lays-siege-to-vmware-vcenter",
      "article-a33ee633",
      "a33ee633",
      "china-s-armory-castle-lays-siege-to-vmware-vcenter-5bc9ce",
      "china-s-armory-castle-lays-siege-to-vmware-vcenter-zero-day"
    ]
  },
  {
    "slug": "rhsa-2026-100814-critical-nginx-security-update-ea5dadf7",
    "title": "RHSA-2026:100814: Critical: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100814",
    "publishedAt": "2026-11-20T20:46:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100814-critical-nginx-security-update",
      "article-ea5dadf7",
      "ea5dadf7",
      "rhsa-2026-100814-critical-nginx-security-update-2ee08c"
    ]
  },
  {
    "slug": "norwegian-energy-firm-suffers-two-day-data-breach-e58fe775",
    "title": "Norwegian energy firm suffers two-day data breach",
    "summary": "A Norwegian energy company experienced a data breach that persisted for two days, affecting its operational systems. Investigators have not confirmed a direct link between the two incidents, though they share several similarities, indicating possible repeated exploitation of a shared vulnerability. Security teams should review access controls and monitor for anomalous activity while awaiting further details from the investigation.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/second-norwegian-energy-company-breached-norwegian",
    "publishedAt": "2026-11-20T20:43:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "norwegian-energy-firm-suffers-two-day-data-breach",
      "article-e58fe775",
      "e58fe775",
      "norwegian-energy-firm-suffers-two-day-data-breach-73b007"
    ]
  },
  {
    "slug": "house-committee-rebukes-chinese-ai-adoption-a1717d24",
    "title": "House Committee Rebukes Chinese AI Adoption",
    "summary": "The House Homeland Security Committee launched an investigation into U.S. corporate adoption of Chinese open-weight AI models. Lawmakers cite supply chain risks, potential data exfiltration, and intellectual property theft as primary concerns for national security. The committee recommends stricter vetting of AI model provenance and enhanced export controls to mitigate strategic vulnerabilities.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/chinese-open-weight-AI-use-by-US-companies-house-investigation",
    "publishedAt": "2026-11-20T20:25:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "house-committee-rebukes-chinese-ai-adoption",
      "article-a1717d24",
      "a1717d24",
      "house-committee-rebukes-chinese-ai-adoption-5734e3"
    ]
  },
  {
    "slug": "how-cloudflare-waf-protects-against-ruby2shell-cve-45be843d",
    "title": "How Cloudflare WAF protects against ruby2shell (CVE-2026-132825)",
    "summary": "ruby2shell lets attackers corrupt memory in default Rails and Sinatra apps without logging in. Cloudflare WAF blocks it for every customer, including Free plans. Upgrade Ruby now, and use the WAF to cover the gap.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/ruby2shell-waf-protection/",
    "publishedAt": "2026-11-20T20:24:38.000Z",
    "cves": [
      "CVE-2026-132825"
    ],
    "additionalSources": [],
    "aliases": [
      "how-cloudflare-waf-protects-against-ruby2shell-cve",
      "article-45be843d",
      "45be843d",
      "how-cloudflare-waf-protects-against-ruby2shell-cve-156987",
      "how-cloudflare-waf-protects-against-ruby2shell-cve-2026-1328"
    ]
  },
  {
    "slug": "how-cloudflare-waf-helps-protect-against-phpafters-4653f8cd",
    "title": "How Cloudflare WAF helps protect against phpAfterShell and other critical PHP flaws",
    "summary": "phpAfterShell is a critical flaw in PHP's default session handler that can lead to code execution. Cloudflare WAF blocks it for all customers, including Free plans, and adds new rules for other PHP flaws fixed in the same release. The vulnerability is tracked as CVE-2026-126714.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/phpaftershell-waf-protection/",
    "publishedAt": "2026-11-20T20:00:45.000Z",
    "cves": [
      "CVE-2026-126714"
    ],
    "additionalSources": [],
    "aliases": [
      "how-cloudflare-waf-helps-protect-against-phpafters",
      "article-4653f8cd",
      "4653f8cd",
      "how-cloudflare-waf-helps-protect-against-phpafters-2df84a",
      "how-cloudflare-waf-helps-protect-against-phpaftershell-and-o"
    ]
  },
  {
    "slug": "rhsa-2026-100804-critical-nginx-security-update-5b8c4e7d",
    "title": "RHSA-2026:100804: Critical: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100804",
    "publishedAt": "2026-11-20T19:37:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100804-critical-nginx-security-update",
      "article-5b8c4e7d",
      "5b8c4e7d",
      "rhsa-2026-100804-critical-nginx-security-update-2ee08b"
    ]
  },
  {
    "slug": "cisco-products-hit-by-vulnerabilities-cve-added-to-db738bd1",
    "title": "Cisco Products Hit by Vulnerabilities, CVE Added to KEV",
    "summary": "Cisco products including IOS XR, Expressway, Snort 3, Cyber Vision, Secure FTD, Secure Client, and several collaboration services are affected by multiple vulnerabilities. CISA added CVE-2026-76466 to its Known Exploited Vulnerabilities database, indicating active exploitation potential for the affected components. Cisco recommends applying the latest firmware and software updates for the listed products immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/cisco-security-advisory-av26-1073",
    "publishedAt": "2026-11-20T19:33:11.000Z",
    "cves": [
      "CVE-2026-76466"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-products-hit-by-vulnerabilities-cve-added-to",
      "article-db738bd1",
      "db738bd1",
      "cisco-products-hit-by-vulnerabilities-cve-added-to-1b59a6",
      "cisco-products-hit-by-vulnerabilities-cve-added-to-kev"
    ]
  },
  {
    "slug": "the-container-store-restores-operations-following-5bb98133",
    "title": "The Container Store Restores Operations Following Weekend Cyberattack",
    "summary": "The Container Store experienced a weekend cyberattack that impacted its corporate website and internal IT systems. Parent company Neighborhood Intelligence disclosed that the unauthorized security incident temporarily disrupted operational infrastructure across the retail enterprise. The organization has fully restored its website and core systems following remediation efforts to address the cyber disruption.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/container-store-restores-systems-cyberattack",
    "publishedAt": "2026-11-20T19:32:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "the-container-store-restores-operations-following",
      "article-5bb98133",
      "5bb98133",
      "the-container-store-restores-operations-following-7f9123",
      "the-container-store-restores-operations-following-weekend-cy"
    ]
  },
  {
    "slug": "sap-releases-multi-product-security-updates-7e518ccc",
    "title": "SAP releases multi-product security updates",
    "summary": "SAP released a security advisory for SQL Anywhere Monitor, Solution Manager, CommonCryptoLib, HANA JDBC Client, Business Connector, NetWeaver Portal, S/4HANA, HANA 2.0, SAP GUI, and Starter Solution. The patches address memory corruption, authentication bypass, and privilege escalation flaws across 20+ SAP components, with CVE IDs omitted. SAP recommends applying the latest patches for each affected product immediately to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/sap-security-advisory-november-2025-monthly-rollup-av25-738",
    "publishedAt": "2026-11-20T19:17:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sap-releases-multi-product-security-updates",
      "article-7e518ccc",
      "7e518ccc",
      "sap-releases-multi-product-security-updates-7f945b"
    ]
  },
  {
    "slug": "google-releases-chrome-dev-160-for-android-aa5356a4",
    "title": "Google Releases Chrome Dev 160 for Android",
    "summary": "Google released Chrome Dev version 160.0.8171.0 for Android via the Google Play store, marking the latest development channel milestone. The update incorporates unspecified security patches and feature enhancements documented in the Chromium git log and official blog posts. Android users should install this release promptly to obtain the latest stability improvements and vulnerability mitigations.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-dev-for-android-update_0498913154.html",
    "publishedAt": "2026-11-20T19:13:32.556Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-releases-chrome-dev-160-for-android",
      "article-aa5356a4",
      "aa5356a4",
      "google-releases-chrome-dev-160-for-android-4d436c"
    ]
  },
  {
    "slug": "arctic-wolf-reports-record-october-threat-activity-779b4f49",
    "title": "Arctic Wolf reports record October threat activity",
    "summary": "Arctic Wolf Aurora Incident Response recorded a 78% rise in non-customer cases and a 96% increase in sophisticated network intrusions, including ransomware, in October 2026. The surge indicates attackers are more active and employing advanced tactics, stressing the importance of rapid detection and response. Teams should update incident response plans, deploy automation, and monitor emerging patterns to reduce future risk.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/blog/incident-response-at-machine-speed-what-black-octobers-record-case-volume-reveals-about-todays-threat-landscape/",
    "publishedAt": "2026-11-20T19:07:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "arctic-wolf-reports-record-october-threat-activity",
      "article-779b4f49",
      "779b4f49",
      "arctic-wolf-reports-record-october-threat-activity-446bc2"
    ]
  },
  {
    "slug": "bell-canada-breach-exposes-enterprise-customer-dat-b3499ea5",
    "title": "Bell Canada Breach Exposes Enterprise Customer Data",
    "summary": "Bell Canada confirmed that an 'agentic' threat actor breached its systems on November 17 2026, accessing enterprise customer data. The intrusion exploited vulnerabilities in the order-and-provisioning platform, allowing attackers to exfiltrate sensitive customer records. Bell Canada has issued a public advisory and is coordinating with security teams to apply patches and strengthen authentication controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/bell-canada-says-agentic-hacker-stole-enterprise-customer-data/",
    "publishedAt": "2026-11-20T18:51:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bell-canada-breach-exposes-enterprise-customer-dat",
      "article-b3499ea5",
      "b3499ea5",
      "bell-canada-breach-exposes-enterprise-customer-dat-716195",
      "bell-canada-breach-exposes-enterprise-customer-data"
    ]
  },
  {
    "slug": "rhsa-2026-100756-critical-nginx-1-24-security-upda-91d2834b",
    "title": "RHSA-2026:100756: Critical: nginx:1.24 security update",
    "summary": "An update for the nginx:1.24 module is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100756",
    "publishedAt": "2026-11-20T18:51:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100756-critical-nginx-1-24-security-upda",
      "article-91d2834b",
      "91d2834b",
      "rhsa-2026-100756-critical-nginx-1-24-security-upda-2ee088",
      "rhsa-2026-100756-critical-nginx-1-24-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-100755-critical-nginx-1-24-security-upda-da98cc4b",
    "title": "RHSA-2026:100755: Critical: nginx:1.24 security update",
    "summary": "An update for the nginx:1.24 module is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100755",
    "publishedAt": "2026-11-20T18:48:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100755-critical-nginx-1-24-security-upda",
      "article-da98cc4b",
      "da98cc4b",
      "rhsa-2026-100755-critical-nginx-1-24-security-upda-2ee088",
      "rhsa-2026-100755-critical-nginx-1-24-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-100768-critical-nginx-security-update-14feece7",
    "title": "RHSA-2026:100768: Critical: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100768",
    "publishedAt": "2026-11-20T18:47:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100768-critical-nginx-security-update",
      "article-14feece7",
      "14feece7",
      "rhsa-2026-100768-critical-nginx-security-update-2ee088"
    ]
  },
  {
    "slug": "rhsa-2026-100753-critical-nginx-security-update-11db7d6f",
    "title": "RHSA-2026:100753: Critical: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100753",
    "publishedAt": "2026-11-20T18:47:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100753-critical-nginx-security-update",
      "article-11db7d6f",
      "11db7d6f",
      "rhsa-2026-100753-critical-nginx-security-update-2ee088"
    ]
  },
  {
    "slug": "critical-nginx-1-26-update-for-rhel-9-6-eus-b1b3f11d",
    "title": "Critical Nginx 1.26 Update for RHEL 9.6 EUS",
    "summary": "Red Hat released a critical security update for nginx:1.26 on RHEL 9.6 Extended Update Support, addressing multiple high-severity vulnerabilities. The CVE references detail remote code execution via crafted HTTP requests, with CVSS scores up to 9.0. Apply the patch immediately or install the errata to mitigate the critical risk today.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100757",
    "publishedAt": "2026-11-20T18:47:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "critical-nginx-1-26-update-for-rhel-9-6-eus",
      "article-b1b3f11d",
      "b1b3f11d",
      "critical-nginx-1-26-update-for-rhel-9-6-eus-2ee088"
    ]
  },
  {
    "slug": "critical-nginx-update-for-rhel-9-2-sap-solutions-8c37d851",
    "title": "Critical Nginx Update for RHEL 9.2 SAP Solutions",
    "summary": "Red Hat issued a critical security update for nginx on RHEL 9.2 SAP Solutions, fixing several high-severity flaws. The linked CVE entries describe remote code execution via malformed HTTP requests, with CVSS scores up to 9.0. Apply the patch immediately or install the errata to mitigate the critical risk today.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100769",
    "publishedAt": "2026-11-20T18:45:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "critical-nginx-update-for-rhel-9-2-sap-solutions",
      "article-8c37d851",
      "8c37d851",
      "critical-nginx-update-for-rhel-9-2-sap-solutions-2ee088"
    ]
  },
  {
    "slug": "cve-2026-130901-improper-limitation-of-a-pathname-825b573f",
    "title": "CVE-2026-130901 - Improper limitation of a pathname to a restricted directory in Amazon awslabs.document-loader-mcp-server",
    "summary": "Bulletin ID: 2026-195-AWS Publication Date: 11/20/2026 10:30 AM PST Description: Improper limitation of a pathname to a restricted directory in the file access checks in Amazon awslabs.document-loader-mcp-server 1.0.10 through 1.0.20 might allow a context-dependent actor, via crafted document content processed by an MCP client, to read files outside the intended base directory and, in 1.0.12 through 1.0.20, to write PNG slide images outside it.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-195-aws/",
    "publishedAt": "2026-11-20T18:45:40.000Z",
    "cves": [
      "CVE-2026-130901"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-130901-improper-limitation-of-a-pathname",
      "article-825b573f",
      "825b573f",
      "cve-2026-130901-improper-limitation-of-a-pathname-2690c2",
      "cve-2026-130901-improper-limitation-of-a-pathname-to-a-restr"
    ]
  },
  {
    "slug": "communication-becomes-frontline-cyber-defense-c9bd5808",
    "title": "Communication Becomes Frontline Cyber Defense",
    "summary": "Cybersecurity leaders now assert that clear, disciplined communication is becoming a frontline defense as critical as technical tools. This shift covers conversations about cloud security and AI adoption, underscoring messaging’s strategic role in threat mitigation. Security teams should embed communication best practices into programs, enhancing resilience against evolving cyber threats.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/security-words-matter",
    "publishedAt": "2026-11-20T18:35:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "communication-becomes-frontline-cyber-defense",
      "article-c9bd5808",
      "c9bd5808",
      "communication-becomes-frontline-cyber-defense-497ba2"
    ]
  },
  {
    "slug": "chrome-dev-channel-updated-to-160-0-8171-0-3230d0ff",
    "title": "Chrome Dev Channel Updated to 160.0.8171.0",
    "summary": "Google Chrome's Dev channel updated to version 160.0.8171.0, delivering bug fixes and performance improvements across Windows, macOS, and Linux. Release notes detail changes in rendering, security, and developer tools, with a partial list in the Git log. Users on the Dev channel should install the new build to access the latest features.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-dev-for-desktop-update_0667948876.html",
    "publishedAt": "2026-11-20T17:58:33.217Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-dev-channel-updated-to-160-0-8171-0",
      "article-3230d0ff",
      "3230d0ff",
      "chrome-dev-channel-updated-to-160-0-8171-0-798051"
    ]
  },
  {
    "slug": "cairn-ai-tool-finds-zero-day-in-medical-imaging-ap-e63715ba",
    "title": "Cairn AI Tool Finds Zero-Day in Medical Imaging App",
    "summary": "Hackers used the open-source AI framework Cairn to discover a zero-day in a medical imaging application in a critical system. The flaw, a buffer overflow in the image-processing module, enabled remote code execution with elevated privileges. The vendor released patch 2.3.1; apply it immediately and monitor for anomalous activity to mitigate risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-use-autonomous-ai-tool-cairn-to-find-zero-day-take-over-server/",
    "publishedAt": "2026-11-20T17:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cairn-ai-tool-finds-zero-day-in-medical-imaging-ap",
      "article-e63715ba",
      "e63715ba",
      "cairn-ai-tool-finds-zero-day-in-medical-imaging-ap-594ab7",
      "cairn-ai-tool-finds-zero-day-in-medical-imaging-app"
    ]
  },
  {
    "slug": "cairn-ai-tool-finds-possible-zero-day-at-universit-cd701829",
    "title": "Cairn AI Tool Finds Possible Zero-Day at University",
    "summary": "A China-linked threat actor used the open-source AI framework Cairn to target two universities, reportedly finding a potential zero-day. The flaw, a memory-corruption bug in the LMS, could enable unauthenticated remote code execution, endangering academic data. Administrators should apply the vendor patch immediately and enforce strict access controls to mitigate risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/amazon-research-cairn-ai-university-attacks-possible-zero-day",
    "publishedAt": "2026-11-20T17:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cairn-ai-tool-finds-possible-zero-day-at-universit",
      "article-cd701829",
      "cd701829",
      "cairn-ai-tool-finds-possible-zero-day-at-universit-26a74c",
      "cairn-ai-tool-finds-possible-zero-day-at-university"
    ]
  },
  {
    "slug": "nvidia-ceo-resignation-and-microsoft-outage-highli-ad8d3de0",
    "title": "Nvidia CEO Resignation and Microsoft Outage Highlight AI Volatility",
    "summary": "Dark Reading highlights recent industry news, including Nvidia CEO Jensen Huang’s resignation and a Microsoft cloud outage. The video summarizes key developments that were omitted from earlier coverage, underscoring the volatility of the AI sector. Viewers are encouraged to review the full discussion for context on leadership changes and infrastructure disruptions.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/what-we-missed-nvidia-ceo-scandal-rocks-ai-industry",
    "publishedAt": "2026-11-20T17:04:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nvidia-ceo-resignation-and-microsoft-outage-highli",
      "article-ad8d3de0",
      "ad8d3de0",
      "nvidia-ceo-resignation-and-microsoft-outage-highli-3e1331",
      "nvidia-ceo-resignation-and-microsoft-outage-highlight-ai-vol"
    ]
  },
  {
    "slug": "microsoft-investigates-new-outlook-attachment-uplo-643ec312",
    "title": "Microsoft Investigates New Outlook Attachment Upload Failures",
    "summary": "Microsoft is investigating reports that Microsoft 365 users cannot upload attachments in the New Outlook client, a problem tracked under ticket EX1561765 in the admin center. The issue is being addressed in the November 20 service update. Users experiencing the failure should verify their client version and contact support if it persists.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsoft-attachment-upload-failures/",
    "publishedAt": "2026-11-20T17:01:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-investigates-new-outlook-attachment-uplo",
      "article-643ec312",
      "643ec312",
      "microsoft-investigates-new-outlook-attachment-uplo-2b6fb5",
      "microsoft-investigates-new-outlook-attachment-upload-failure"
    ]
  },
  {
    "slug": "bazuka-android-malware-hides-credential-theft-with-efc28292",
    "title": "Bazuka Android Malware Hides Credential Theft with Fake Overlays",
    "summary": "Bazuka is a disclosed Android malware framework that uses fake screen overlays to conceal credential theft and remote device control. It integrates large-language models for scalable victim management, enabling attackers to orchestrate credential harvesting and device-level commands across infected devices. Researchers released technical details but no patch exists; teams should monitor for updates and enforce app-store vetting to mitigate exposure.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/bazuka-android-malware-uses-fake-screen.html",
    "publishedAt": "2026-11-20T16:58:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bazuka-android-malware-hides-credential-theft-with",
      "article-efc28292",
      "efc28292",
      "bazuka-android-malware-hides-credential-theft-with-114e33",
      "bazuka-android-malware-hides-credential-theft-with-fake-over"
    ]
  },
  {
    "slug": "aws-ssosync-privilege-escalation-via-reused-email-b0cfb5a6",
    "title": "AWS ssosync Privilege Escalation via Reused Email Addresses",
    "summary": "CVE-2026-133199 exposes a privilege-escalation flaw in AWS ssosync before 2.9.5, letting an authenticated user inherit IAM Identity Center group memberships from a reused Google Workspace e-mail address or group name. The flaw results from incorrect privilege assignment during reconciliation, granting elevated permissions without further authentication. AWS released a patch in version 2.9.5; administrators should upgrade immediately to prevent exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-194-aws/",
    "publishedAt": "2026-11-20T16:41:29.000Z",
    "cves": [
      "CVE-2026-133199"
    ],
    "additionalSources": [],
    "aliases": [
      "aws-ssosync-privilege-escalation-via-reused-email",
      "article-b0cfb5a6",
      "b0cfb5a6",
      "aws-ssosync-privilege-escalation-via-reused-email-24dbe9",
      "aws-ssosync-privilege-escalation-via-reused-email-addresses"
    ]
  },
  {
    "slug": "ai-driven-attacks-arrive-cisos-need-five-steps-764d2948",
    "title": "AI-Driven Attacks Arrive; CISOs Need Five Steps",
    "summary": "Claude Mythos Preview, an advanced AI model, identified and linked software vulnerabilities faster than traditional tools. ARTEX recently removed its corporate barrier, granting attackers broader access to the model and increasing threat exposure. CISOs should adopt five proactive steps, tightening AI controls, enhancing vulnerability triage, and updating incident response plans.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/blog/ai-driven-attacks-are-here-five-steps-cisos-should-take-now/",
    "publishedAt": "2026-11-20T16:41:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-driven-attacks-arrive-cisos-need-five-steps",
      "article-764d2948",
      "764d2948",
      "ai-driven-attacks-arrive-cisos-need-five-steps-6f2ce9"
    ]
  },
  {
    "slug": "debian-packages-retain-distrusted-ca-certificates-ae93cb75",
    "title": "Debian Packages Retain Distrusted CA Certificates After Updates",
    "summary": "A Debian package mirror scan found over 100 packages still containing distrusted CA certificates after their removal from the system trust store. Debian developer Steve McIntyre posted the results on November 19, showing package-level certificate copies persist despite trust-store updates.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/debian-packages-ca-certificates/",
    "publishedAt": "2026-11-20T16:39:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "debian-packages-retain-distrusted-ca-certificates",
      "article-ae93cb75",
      "ae93cb75",
      "debian-packages-retain-distrusted-ca-certificates-4fdf79",
      "debian-packages-retain-distrusted-ca-certificates-after-upda"
    ]
  },
  {
    "slug": "java4shell-exposes-java-apps-to-code-execution-dfa30b1e",
    "title": "Java4Shell Exposes Java Apps to Code Execution",
    "summary": "Java4Shell flaw exposes Java apps to code execution; FBI warns of ARTEX intrusions, and 8-Digits Team faces a 27-year sentence. The flaw originates from deserialization of Java objects, allowing attackers to send that bypass authentication and run code. Oracle released patch 2026-04-01 for Java Runtime Environments; admins should upgrade or apply the workaround.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SentinelOne",
    "sourceUrl": "https://www.sentinelone.com/blog/the-good-the-bad-and-the-ugly-in-cybersecurity-week-47-8",
    "publishedAt": "2026-11-20T16:14:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "java4shell-exposes-java-apps-to-code-execution",
      "article-dfa30b1e",
      "dfa30b1e",
      "java4shell-exposes-java-apps-to-code-execution-5e83f0"
    ]
  },
  {
    "slug": "nvidia-tegra-igx-kernel-vulnerabilities-discovered-e3bb6f4f",
    "title": "NVIDIA Tegra IGX Kernel Vulnerabilities Discovered",
    "summary": "NVIDIA Tegra IGX Linux kernel subsystems contain vulnerabilities that could let attackers compromise devices. Flaws identified as CVE-2025-21656, CVE-2026-63940, CVE-2026-74350, CVE-2026-98432, and CVE-2026-99999 affect x86 architecture, hardware monitoring drivers, OCFS2, IPv4 networking, Ethernet bridge, Netfilter, and XFRM, enabling potential system compromise. Kernel updates correcting these flaws are available; administrators should apply the patch to mitigate risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9184-1",
    "publishedAt": "2026-11-20T16:08:41.000Z",
    "cves": [
      "CVE-2025-21656",
      "CVE-2026-63940",
      "CVE-2026-74350",
      "CVE-2026-98432",
      "CVE-2026-99999"
    ],
    "additionalSources": [],
    "aliases": [
      "nvidia-tegra-igx-kernel-vulnerabilities-discovered",
      "article-e3bb6f4f",
      "e3bb6f4f",
      "nvidia-tegra-igx-kernel-vulnerabilities-discovered-7e77f2"
    ]
  },
  {
    "slug": "nsa-resumes-operations-after-internal-network-disr-926a15d3",
    "title": "NSA Resumes Operations After Internal Network Disruptions",
    "summary": "The National Security Agency experienced internal network disruptions that forced a temporary Code Orange status for several facilities, delaying openings and requiring employee check-ins with supervisors. The disruptions impacted non-essential operations, but core mission functions continued under reduced capacity. Normal operations have resumed, though affected sites remain under Code Orange until full network stability is confirmed.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/nsa-resumes-normal-operations-following-internal-disruptions",
    "publishedAt": "2026-11-20T16:06:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nsa-resumes-operations-after-internal-network-disr",
      "article-926a15d3",
      "926a15d3",
      "nsa-resumes-operations-after-internal-network-disr-59abbd",
      "nsa-resumes-operations-after-internal-network-disruptions"
    ]
  },
  {
    "slug": "whatsapp-patches-cve-2026-23871-scam-vulnerability-c7f51406",
    "title": "WhatsApp Patches CVE-2026-23871 Scam Vulnerability",
    "summary": "WhatsApp patched CVE-2026-23871, a flaw in Android and Business apps that allowed attackers to embed deceptive URLs in chat replies, potentially enabling scam messages. The vulnerability stemmed from incomplete validation of external ad-reply URLs before version 2.26.17.4. Users must update to the latest release to eliminate the risk for all users.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/whatsapp-fixes-flaw-uncovered-while-disrupting-scam-campaign/",
    "publishedAt": "2026-11-20T16:01:02.000Z",
    "cves": [
      "CVE-2026-23871"
    ],
    "additionalSources": [
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/11/whatsapp-patches-3-security-flaws.html"
      }
    ],
    "aliases": [
      "whatsapp-patches-cve-2026-23871-scam-vulnerability",
      "article-c7f51406",
      "c7f51406",
      "whatsapp-patches-cve-2026-23871-scam-vulnerability-2655f8"
    ]
  },
  {
    "slug": "cisco-products-exposed-by-critical-nginx-rce-flaws-b0d351eb",
    "title": "Cisco Products Exposed by Critical nginx RCE Flaws",
    "summary": "Cisco products using nginx 1.9.5-1.31.8 are vulnerable to remote code execution through critical flaws. The flaws, identified as CVE-2026-113425, CVE-2026-121810, CVE-2026-123007, CVE-2026-123633, and CVE-2026-123634, exploit parsing errors in nginx modules and are publicly documented with PoC code. Apply nginx 1.31.9 or 1.30.7 patches immediately and update affected Cisco software to the latest releases.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-nginx-nov-2026-e8jska2s?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DVulnerabilities+in+nginx+Affecting+Cisco+Products%3A+November+2026%26vs_k%3D1",
    "publishedAt": "2026-11-20T16:00:00.000Z",
    "cves": [
      "CVE-2026-113425",
      "CVE-2026-121810",
      "CVE-2026-123007",
      "CVE-2026-123633",
      "CVE-2026-123634"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-products-exposed-by-critical-nginx-rce-flaws",
      "article-b0d351eb",
      "b0d351eb",
      "cisco-products-exposed-by-critical-nginx-rce-flaws-b84874"
    ]
  },
  {
    "slug": "chase-breach-exposes-customer-data-via-third-party-c58378e7",
    "title": "Chase Breach Exposes Customer Data via Third-Party",
    "summary": "J.P. Morgan Chase disclosed a data breach originating from a cyberattack on a third-party service provider, exposing customer personal and marketing data. The incident potentially compromised sensitive information for Chase, Visa, and Mastercard customers, raising concerns over third-party security controls. Chase recommends affected customers monitor accounts, change credentials, and report suspicious activity while the firm investigates the breach.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/vendor-data-breach-exposes-chase-visa-mastercard-customer-info/",
    "publishedAt": "2026-11-20T15:58:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chase-breach-exposes-customer-data-via-third-party",
      "article-c58378e7",
      "c58378e7",
      "chase-breach-exposes-customer-data-via-third-party-3052a2"
    ]
  },
  {
    "slug": "rhsa-2026-100752-critical-openjdk-25-0-5-1-securit-81864ea2",
    "title": "RHSA-2026:100752: Critical: OpenJDK 25.0.5.1 Security Update for Windows Builds",
    "summary": "An update is now available for OpenJDK. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100752",
    "publishedAt": "2026-11-20T15:50:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100752-critical-openjdk-25-0-5-1-securit",
      "article-81864ea2",
      "81864ea2",
      "rhsa-2026-100752-critical-openjdk-25-0-5-1-securit-2ee088",
      "rhsa-2026-100752-critical-openjdk-25-0-5-1-security-update-f"
    ]
  },
  {
    "slug": "moxa-firmware-buffer-overflow-vulnerabilities-16be413b",
    "title": "Moxa Firmware Buffer Overflow Vulnerabilities",
    "summary": "Moxa disclosed buffer overflow flaws in ioLogik E1200, EDS-E, IKS, and other firmware series, exploitable via Ethernet Remote I/Os and switches. CVE-2026-129971 and CVE-2026-129972 target remote I/Os, while CVE-2026-130493 and CVE-2026-130494 affect switch firmware, enabling potential code execution. Users should review the advisory and apply firmware updates promptly to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/control-systems-moxa-security-advisory-av26-1187",
    "publishedAt": "2026-11-20T15:39:31.000Z",
    "cves": [
      "CVE-2026-129971",
      "CVE-2026-129972",
      "CVE-2026-130493",
      "CVE-2026-130494"
    ],
    "additionalSources": [],
    "aliases": [
      "moxa-firmware-buffer-overflow-vulnerabilities",
      "article-16be413b",
      "16be413b",
      "moxa-firmware-buffer-overflow-vulnerabilities-474308"
    ]
  },
  {
    "slug": "ubuntu-kernel-fips-vulnerabilities-span-multiple-s-dffaa0a3",
    "title": "Ubuntu Kernel FIPS Vulnerabilities Span Multiple Subsystems",
    "summary": "Ubuntu Linux kernel FIPS vulnerabilities affect numerous subsystems, including USB Gadget drivers, memory management, and various architecture drivers. The flaws could allow an attacker to compromise the system, but no active exploitation or public PoC has been reported. Ubuntu recommends applying the latest kernel updates that include the fixes for these subsystems to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9183-1",
    "publishedAt": "2026-11-20T15:34:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-kernel-fips-vulnerabilities-span-multiple-s",
      "article-dffaa0a3",
      "dffaa0a3",
      "ubuntu-kernel-fips-vulnerabilities-span-multiple-s-7e77f5",
      "ubuntu-kernel-fips-vulnerabilities-span-multiple-subsystems"
    ]
  },
  {
    "slug": "ubuntu-kernel-vulnerabilities-cover-extensive-subs-14226752",
    "title": "Ubuntu Kernel Vulnerabilities Cover Extensive Subsystems",
    "summary": "Ubuntu Linux kernel vulnerabilities affect a broad range of subsystems, including device drivers, cryptographic APIs, and hardware interfaces. These flaws could enable an attacker to compromise the system, though no active exploitation or public PoC has been disclosed. Applying the latest kernel updates that incorporate the fixes for these subsystems is recommended to preserve system security.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9173-2",
    "publishedAt": "2026-11-20T15:33:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-kernel-vulnerabilities-cover-extensive-subs",
      "article-14226752",
      "14226752",
      "ubuntu-kernel-vulnerabilities-cover-extensive-subs-7e786a",
      "ubuntu-kernel-vulnerabilities-cover-extensive-subsystems"
    ]
  },
  {
    "slug": "linux-kernel-vulnerabilities-patched-in-usn-9168-3-d51a4baa",
    "title": "Linux kernel vulnerabilities patched in USN-9168-3",
    "summary": "Linux kernel subsystems such as ARM64, x86, Bluetooth, and GPU drivers have flaws that could let attackers compromise systems via code execution. The patch fixes memory corruption and privilege escalation bugs across 30+ subsystems, with no public exploit confirmed and CVE IDs omitted. Ubuntu released update 9168-3; users should apply the kernel patch immediately to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9168-3",
    "publishedAt": "2026-11-20T15:33:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-vulnerabilities-patched-in-usn-9168-3",
      "article-d51a4baa",
      "d51a4baa",
      "linux-kernel-vulnerabilities-patched-in-usn-9168-3-7e78cb"
    ]
  },
  {
    "slug": "linux-kernel-vulnerabilities-patched-in-usn-9167-2-66d65512",
    "title": "Linux kernel vulnerabilities patched in USN-9167-2",
    "summary": "Linux kernel subsystems including ARM64, x86, Bluetooth, and I2C drivers have flaws that could let attackers compromise systems via code execution. The patch addresses memory corruption and privilege escalation bugs across 30+ subsystems, with no public exploit confirmed and CVE IDs omitted. Ubuntu released update 9167-2; users should apply the kernel patch immediately to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9167-2",
    "publishedAt": "2026-11-20T15:33:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-vulnerabilities-patched-in-usn-9167-2",
      "article-66d65512",
      "66d65512",
      "linux-kernel-vulnerabilities-patched-in-usn-9167-2-7e78cf"
    ]
  },
  {
    "slug": "ubuntu-patches-multiple-security-flaws-in-linux-ke-87218dc3",
    "title": "Ubuntu Patches Multiple Security Flaws in Linux Kernel",
    "summary": "Ubuntu released security update USN-9169-2 to address multiple security vulnerabilities discovered across numerous Linux kernel subsystems. The underlying flaws affect critical subsystems including GPU drivers, network drivers, x86 architecture, and file systems, creating potential risks of system compromise. System administrators are advised to apply the updated Linux kernel packages distributed by Ubuntu to mitigate these security issues.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9169-2",
    "publishedAt": "2026-11-20T15:33:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-patches-multiple-security-flaws-in-linux-ke",
      "article-87218dc3",
      "87218dc3",
      "ubuntu-patches-multiple-security-flaws-in-linux-ke-7e78c8",
      "ubuntu-patches-multiple-security-flaws-in-linux-kernel"
    ]
  },
  {
    "slug": "kernel-vulnerabilities-in-oracle-linux-expose-syst-2ac58231",
    "title": "Kernel Vulnerabilities in Oracle Linux Expose Systems",
    "summary": "Oracle Linux kernel updates USN-9170-3 address multiple flaws that could allow attackers to compromise affected systems. The vulnerabilities, identified as CVE-2026-64564, CVE-2026-98432, and CVE-2026-99999, affect IPv4 networking, Ethernet bridge, Netfilter, SCTP, and XFRM subsystems, potentially enabling privilege escalation or denial of service. Administrators should apply kernel patches, verify subsystem configurations, and monitor for anomalous network activity to mitigate exploitation risks.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9170-3",
    "publishedAt": "2026-11-20T15:33:20.000Z",
    "cves": [
      "CVE-2026-64564",
      "CVE-2026-98432",
      "CVE-2026-99999"
    ],
    "additionalSources": [],
    "aliases": [
      "kernel-vulnerabilities-in-oracle-linux-expose-syst",
      "article-2ac58231",
      "2ac58231",
      "kernel-vulnerabilities-in-oracle-linux-expose-syst-7e7875",
      "kernel-vulnerabilities-in-oracle-linux-expose-systems"
    ]
  },
  {
    "slug": "usn-9176-2-ruby-vulnerabilities-b2c0aa44",
    "title": "USN-9176-2: Ruby vulnerabilities",
    "summary": "USN-9176-1 fixed vulnerabilities in Ruby. This update provides the corresponding updates for Ubuntu 16.04 LTS, Ubuntu 18.04 LTS, and Ubuntu 20.04 LTS. An attacker could possibly use this issue to cause a denial of service or execute arbitrary code. (GHSA-34m4-m9fh-gqp5) Owais Lone discovered that Ruby incorrectly handled compiling certain large regular expressions.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9176-2",
    "publishedAt": "2026-11-20T15:22:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9176-2-ruby-vulnerabilities",
      "article-b2c0aa44",
      "b2c0aa44",
      "usn-9176-2-ruby-vulnerabilities-7e785f"
    ]
  },
  {
    "slug": "spreadsheets-hide-password-risks-central-managemen-993785c5",
    "title": "Spreadsheets Hide Password Risks, Central Management Needed",
    "summary": "Storing corporate passwords in spreadsheets exposes IT administrators to weak, reused, or compromised credentials, as spreadsheets lack audit controls. This reliance on unapproved storage bypasses centralized credential management, increasing credential reuse and data exposure risk. Adopting a centralized password vault, such as NordPass, provides visibility, risk assessment, and secure sharing to mitigate spreadsheet-based credential risks.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/still-tracking-company-passwords-in-spreadsheets-youre-flying-blind/",
    "publishedAt": "2026-11-20T15:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "spreadsheets-hide-password-risks-central-managemen",
      "article-993785c5",
      "993785c5",
      "spreadsheets-hide-password-risks-central-managemen-4bcc24",
      "spreadsheets-hide-password-risks-central-management-needed"
    ]
  },
  {
    "slug": "norwegian-energy-firm-attacks-supercomputer-hack-e-341882db",
    "title": "Norwegian Energy Firm Attacks, Supercomputer Hack, Eclipse Exploit",
    "summary": "Norwegian energy firm suffered cyberattacks, a supercomputer was compromised, and a new Nightmare Eclipse exploit emerged. The EU added NoName057(16) to its sanctions list, malware targeted CACs on personal PCs, and Gemini agents focused on Epoch AI. Security teams should monitor indicators, apply patches, and review access controls to mitigate related threats.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/in-other-news-norwegian-energy-firm-cyberattacks-supercomputer-hack-new-nightmare-eclipse-exploit/",
    "publishedAt": "2026-11-20T14:56:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "norwegian-energy-firm-attacks-supercomputer-hack-e",
      "article-341882db",
      "341882db",
      "norwegian-energy-firm-attacks-supercomputer-hack-e-6d15cc",
      "norwegian-energy-firm-attacks-supercomputer-hack-eclipse-exp"
    ]
  },
  {
    "slug": "white-house-replaces-cyber-director-with-acting-cz-5cc759b5",
    "title": "White House Replaces Cyber Director with Acting Czar",
    "summary": "Sean Cairncross has left the White House cyber director role, with Kirsten Davies, Pentagon CIO, stepping in as acting cyber czar. The change signals a realignment of U.S. cyber policy oversight, potentially affecting coordination among the White House, Pentagon, and intelligence agencies. Security teams should track the transition for shifts in cyber strategy, reporting protocols, and continuity gaps.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/sean-cairncross-out-as-national-cyber-director",
    "publishedAt": "2026-11-20T14:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "white-house-replaces-cyber-director-with-acting-cz",
      "article-5cc759b5",
      "5cc759b5",
      "white-house-replaces-cyber-director-with-acting-cz-535edc",
      "white-house-replaces-cyber-director-with-acting-czar"
    ]
  },
  {
    "slug": "apache-tomcat-cve-2026-133325-tls-1-3-psk-peer-val-3755925e",
    "title": "Apache Tomcat CVE-2026-133325: TLS 1.3 PSK Peer Validation Flaw Enables Man-in-the-Middle and Unauthorized Cluster Joining",
    "summary": "Apache Tomcat CVE-2026-133325 allows attackers to bypass TLS-PSK peer validation in TLS 1.3, enabling man-in-the-middle attacks and unauthorized cluster joining. The flaw stems from missing certificate checks during the TLS handshake, granting remote code execution and lateral movement across cluster nodes. Administrators must apply the latest patches or disable TLS-PSK to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-apache-tomcat-flaw/",
    "publishedAt": "2026-11-20T14:29:21.000Z",
    "cves": [
      "CVE-2026-133325"
    ],
    "additionalSources": [
      {
        "source": "Canadian Centre for Cyber Security",
        "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/apache-security-advisory-av26-1188"
      }
    ],
    "aliases": [
      "apache-tomcat-cve-2026-133325-tls-1-3-psk-peer-val",
      "article-3755925e",
      "3755925e",
      "apache-tomcat-cve-2026-133325-tls-1-3-psk-peer-val-f2968f",
      "apache-tomcat-cve-2026-133325-tls-1-3-psk-peer-validation-fl"
    ]
  },
  {
    "slug": "credit-unions-hit-by-unnoticed-supplier-breach-cee36edd",
    "title": "Credit Unions Hit by Unnoticed Supplier Breach",
    "summary": "A supplier breach affecting dozens of credit unions went unnoticed for six weeks. The breach, reported by Ireland’s Data Protection Commission, involved a Belfast-based data processor that handled sensitive information for over 40 credit unions, potentially exposing customer data. Credit unions should conduct forensic investigations, notify affected customers, and review third-party data handling agreements.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/dozens-of-credit-unions-hit-by-supplier-breach",
    "publishedAt": "2026-11-20T14:24:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "credit-unions-hit-by-unnoticed-supplier-breach",
      "article-cee36edd",
      "cee36edd",
      "credit-unions-hit-by-unnoticed-supplier-breach-328e33"
    ]
  },
  {
    "slug": "soc-training-adapted-for-ai-driven-triage-9dad4985",
    "title": "SOC Training Adapted for AI-Driven Triage",
    "summary": "SOC leaders face a steep learning curve as agentic AI automates triage, threatening analyst skill retention. The article outlines strategies to preserve investigative judgment and bench talent, emphasizing continuous training and mentorship to counter AI’s efficiency gains. Adopting structured learning paths and hands-on simulations can help analysts adapt, ensuring critical decision-making remains human-centered.",
    "category": "General",
    "severity": "LOW",
    "source": "SentinelOne",
    "sourceUrl": "https://www.sentinelone.com/blog/the-new-analyst-learning-curve-training-and-retaining-talent-in-the-autonomous-soc/",
    "publishedAt": "2026-11-20T14:00:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "soc-training-adapted-for-ai-driven-triage",
      "article-9dad4985",
      "9dad4985",
      "soc-training-adapted-for-ai-driven-triage-2fb4a8"
    ]
  },
  {
    "slug": "nist-800-171-rev-3-transition-guide-7b2ecc11",
    "title": "NIST 800-171 Rev 3 Transition Guide",
    "summary": "Defense contractors must navigate the shift from NIST SP 800-171 Revision 2 to Revision 3 to maintain CMMC compliance. The guide presents a four-step approach, detailing assessment, remediation, documentation, and audit preparation to meet new security controls. Implementing these steps early mitigates compliance gaps and reduces the risk of certification delays.",
    "category": "General",
    "severity": "LOW",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/handling-the-nist-800-171-rev-3-transition",
    "publishedAt": "2026-11-20T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nist-800-171-rev-3-transition-guide",
      "article-7b2ecc11",
      "7b2ecc11",
      "nist-800-171-rev-3-transition-guide-747f6e"
    ]
  },
  {
    "slug": "us-threat-center-targets-scam-networks-cdfa009b",
    "title": "US Threat Center Targets Scam Networks",
    "summary": "The US Homeland Security Task Force has launched the Threat Disruption Center to target scam and sextortion crime networks. The center will coordinate intelligence sharing, law-enforcement operations, and victim-warning campaigns to disrupt financial fraud. Stakeholders are urged to report suspicious activity and collaborate with the center to strengthen national cyber-crime defenses.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/us-launches-center-to-disrupt-scams-and-warn-victims-sooner",
    "publishedAt": "2026-11-20T13:49:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "us-threat-center-targets-scam-networks",
      "article-cdfa009b",
      "cdfa009b",
      "us-threat-center-targets-scam-networks-6126de"
    ]
  },
  {
    "slug": "rhsa-2026-100751-critical-nginx-1-26-security-upda-f82e3205",
    "title": "RHSA-2026:100751: Critical: nginx:1.26 security update",
    "summary": "An update for the nginx:1.26 module is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100751",
    "publishedAt": "2026-11-20T13:49:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100751-critical-nginx-1-26-security-upda",
      "article-f82e3205",
      "f82e3205",
      "rhsa-2026-100751-critical-nginx-1-26-security-upda-2ee088",
      "rhsa-2026-100751-critical-nginx-1-26-security-update"
    ]
  },
  {
    "slug": "n-able-breach-causes-global-mail-assure-outage-4916ef61",
    "title": "N-able Breach Causes Global Mail Assure Outage",
    "summary": "N-able confirmed a server breach that triggered a worldwide outage of its Mail Assure and SpamExperts Hosted Cloud services. The intrusion exploited an unpatched authentication flaw, allowing attackers to gain privileged access and disrupt email filtering and spam protection. N-able has released a patch and recommends immediate credential rotation and network segmentation to mitigate further compromise.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/n-able-says-recent-security-breach-led-to-major-service-outage/",
    "publishedAt": "2026-11-20T13:18:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-breach-causes-global-mail-assure-outage",
      "article-4916ef61",
      "4916ef61",
      "n-able-breach-causes-global-mail-assure-outage-558a3a"
    ]
  },
  {
    "slug": "red-hat-issues-critical-nginx-1-24-rce-patch-5c1c1334",
    "title": "Red Hat Issues Critical nginx:1.24 RCE Patch",
    "summary": "Red Hat released a critical update for nginx:1.24 on RHEL 9.8, fixing a remote code execution flaw. The vulnerability permits unauthenticated attackers to run arbitrary code with root privileges, and Red Hat assigned a CVSS score of 9.8. Apply the update immediately and verify container integrity, following Red Hat’s mitigation guidance.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100750",
    "publishedAt": "2026-11-20T13:05:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-nginx-1-24-rce-patch",
      "article-5c1c1334",
      "5c1c1334",
      "red-hat-issues-critical-nginx-1-24-rce-patch-2ee088"
    ]
  },
  {
    "slug": "cyberleek-distributes-fake-gta-6-launchers-with-ma-3f6a75d7",
    "title": "CyberLeek Distributes Fake GTA 6 Launchers with Malware",
    "summary": "CyberLeek malware campaign uses over 355 domains to distribute fake GTA 6 launchers that deliver malicious payloads. The sites masquerade as legitimate game releases, but the ZIP archives contain trojanized executables designed to steal credentials and install backdoors. Security teams should block the listed domains, update URL filtering, and educate users about the phishing nature of the downloads.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/fake-gta-6-pc-launchers/",
    "publishedAt": "2026-11-20T13:02:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cyberleek-distributes-fake-gta-6-launchers-with-ma",
      "article-3f6a75d7",
      "3f6a75d7",
      "cyberleek-distributes-fake-gta-6-launchers-with-ma-714906",
      "cyberleek-distributes-fake-gta-6-launchers-with-malware"
    ]
  },
  {
    "slug": "ransomware-group-publishes-visa-mastercard-jpmorga-3c9a1f42",
    "title": "Ransomware Group Publishes Visa, Mastercard, JPMorgan Data",
    "summary": "A ransomware group disclosed stolen data allegedly from third-party providers linked to Visa, Mastercard, and JPMorgan Chase customers. The leak includes personal identifiers and financial information, potentially exposing millions of cardholders to credential theft and fraud. Affected institutions should conduct forensic investigations, notify impacted customers, and enforce stricter third-party access controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/data-breaches/2026/11/hackers-leak-data-linked-to-visa-mastercard-and-jpmorgan-customers",
    "publishedAt": "2026-11-20T12:51:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ransomware-group-publishes-visa-mastercard-jpmorga",
      "article-3c9a1f42",
      "3c9a1f42",
      "ransomware-group-publishes-visa-mastercard-jpmorga-1ec040",
      "ransomware-group-publishes-visa-mastercard-jpmorgan-data"
    ]
  },
  {
    "slug": "hackers-repurpose-softether-vpn-for-stealthy-espio-57435616",
    "title": "Hackers Repurpose SoftEther VPN for Stealthy Espionage",
    "summary": "Hackers rebuilt SoftEther VPN Bridge into NtMonitor VPN, creating a covert channel that links an external network to a compromised government network. The modified client leaves fewer SoftEther traces, enabling stealthy lateral movement; researchers link it to Webworm, a state-sponsored actor. No vendor patch exists; defenders should block the custom binary, enforce strict VPN controls, and monitor anomalous outbound traffic.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/legitimate-vpn-software/",
    "publishedAt": "2026-11-20T12:40:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-repurpose-softether-vpn-for-stealthy-espio",
      "article-57435616",
      "57435616",
      "hackers-repurpose-softether-vpn-for-stealthy-espio-419db3",
      "hackers-repurpose-softether-vpn-for-stealthy-espionage"
    ]
  },
  {
    "slug": "industry-debates-ai-patching-after-outages-993d70af",
    "title": "Industry Debates AI Patching After Outages",
    "summary": "Industry experts debated whether AI-accelerated patching contributed to recent major outages and system fragility. They emphasized the necessity of tested rollback plans and robust inter-system resilience to prevent cascading failures. The discussion highlighted that rapid automation must be balanced with rigorous validation to safeguard critical infrastructure and ensure compliance with regulatory standards.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/industry-reactions-to-major-outages-and-ai-patching-questions-feedback-friday/",
    "publishedAt": "2026-11-20T12:38:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "industry-debates-ai-patching-after-outages",
      "article-993d70af",
      "993d70af",
      "industry-debates-ai-patching-after-outages-329409"
    ]
  },
  {
    "slug": "openssl-base64-overflow-corrupts-memory-10f22820",
    "title": "OpenSSL Base64 Overflow Corrupts Memory",
    "summary": "A critical heap buffer overflow in OpenSSL’s Base64 encoding function lets attackers corrupt memory when handling large inputs. CVE-2026-121481 scores 9.8 on CVSS 3.1, marking it a high-severity flaw that can cause denial of service or remote code execution. OpenSSL released a patch; users should upgrade to the latest version or apply the fix to prevent exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/openssl-heap-buffer-overflow/",
    "publishedAt": "2026-11-20T12:34:30.000Z",
    "cves": [
      "CVE-2026-121481"
    ],
    "additionalSources": [],
    "aliases": [
      "openssl-base64-overflow-corrupts-memory",
      "article-10f22820",
      "10f22820",
      "openssl-base64-overflow-corrupts-memory-26106d"
    ]
  },
  {
    "slug": "armory-castle-exploits-vmware-vcenter-cve-2026-123-d6d0a5d8",
    "title": "Armory Castle Exploits VMware vCenter CVE-2026-123890",
    "summary": "Armory Castle, a China-linked espionage group, exploited VMware vCenter (CVE-2026-123890) since early September, before Broadcom released a fix. The CVSS 9.8 flaw permits unauthenticated remote attackers to obtain full administrator sessions on vCenter Server, controlling virtual infrastructure. Broadcom issued a patch in November; organizations must apply it immediately and verify vCenter Server is no longer exposed.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/20/vmware-vcenter-zero-day-cve-2026-123890-exploited/",
    "publishedAt": "2026-11-20T12:30:19.000Z",
    "cves": [
      "CVE-2026-123890"
    ],
    "additionalSources": [],
    "aliases": [
      "armory-castle-exploits-vmware-vcenter-cve-2026-123",
      "article-d6d0a5d8",
      "d6d0a5d8",
      "armory-castle-exploits-vmware-vcenter-cve-2026-123-6817af",
      "armory-castle-exploits-vmware-vcenter-cve-2026-123890"
    ]
  },
  {
    "slug": "cve-2026-99312-exposes-host-memory-via-kvm-on-amd-191cadd2",
    "title": "CVE-2026-99312 Exposes Host Memory via KVM on AMD",
    "summary": "Linux KVM (CVE-2026-99312) lets guest VMs read up to 127 GB of host memory on AMD processors with nested virtualization. This flaw allows attackers to access memory of other customers on shared cloud servers, risking data exposure. Kernel patches addressing CVE-2026-99312 have shipped; admins should update and disable nested virtualization if unnecessary.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/new-linux-kvm-flaw-cve-2026-99312-lets.html",
    "publishedAt": "2026-11-20T12:20:00.000Z",
    "cves": [
      "CVE-2026-99312"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-99312-exposes-host-memory-via-kvm-on-amd",
      "article-191cadd2",
      "191cadd2",
      "cve-2026-99312-exposes-host-memory-via-kvm-on-amd-6eb057"
    ]
  },
  {
    "slug": "microsoft-auto-installs-windows-11-26h2-on-unmanag-24a9fbd2",
    "title": "Microsoft Auto-Installs Windows 11 26H2 on Unmanaged Devices",
    "summary": "Microsoft has begun automatically upgrading eligible unmanaged devices to Windows 11 26H2, bypassing traditional IT management controls. The move risks exposing devices to unverified updates, potentially introducing compatibility issues or security gaps on systems lacking centralized patch oversight. Administrators should monitor device upgrade status, enforce manual update policies, or configure group policies to prevent automatic installation on unmanaged hardware.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-now-automatically-installs-windows-11-26h2-on-personal-and-unmanaged-pcs/",
    "publishedAt": "2026-11-20T12:14:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-auto-installs-windows-11-26h2-on-unmanag",
      "article-24a9fbd2",
      "24a9fbd2",
      "microsoft-auto-installs-windows-11-26h2-on-unmanag-7add96",
      "microsoft-auto-installs-windows-11-26h2-on-unmanaged-devices"
    ]
  },
  {
    "slug": "hospitals-universities-hit-by-byod-ransomware-audi-3e2fb1ee",
    "title": "Hospitals, Universities Hit by BYOD Ransomware Audio Messages",
    "summary": "Ransomware attackers targeted hospitals and universities, playing audio ransom messages on infected computers to replace text demands. The campaign used a BYOD vector, embedding voice recordings that announced compromise and demanded payment, increasing user distraction. Security teams should isolate affected endpoints, verify ransomware signatures, and apply vendor patches to stop spread and monitor for audio payloads.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/byod-ransomware/",
    "publishedAt": "2026-11-20T12:06:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hospitals-universities-hit-by-byod-ransomware-audi",
      "article-3e2fb1ee",
      "3e2fb1ee",
      "hospitals-universities-hit-by-byod-ransomware-audi-1ef97a",
      "hospitals-universities-hit-by-byod-ransomware-audio-messages"
    ]
  },
  {
    "slug": "ct-scan-unlocks-400-year-old-cryptex-padlock-50e4e0d2",
    "title": "CT Scan Unlocks 400-Year-Old Cryptex Padlock",
    "summary": "Researchers employed computed tomography scanning to reconstruct the internal code mechanism of a 400-year-old cryptex padlock, enabling its successful opening. The technique demonstrates that advanced imaging can bypass mechanical security, revealing that physical locks may be vulnerable to non-invasive analysis. Security designers should consider imaging resistance when creating high-security mechanical devices and evaluate potential forensic exploitation.",
    "category": "General",
    "severity": "LOW",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/11/opening-a-400-year-old-cryptex.html",
    "publishedAt": "2026-11-20T12:04:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ct-scan-unlocks-400-year-old-cryptex-padlock",
      "article-50e4e0d2",
      "50e4e0d2",
      "ct-scan-unlocks-400-year-old-cryptex-padlock-9d9f5b"
    ]
  },
  {
    "slug": "cisos-increasing-trust-in-autonomous-ai-soc-agents-870a7dcb",
    "title": "CISOs Increasing Trust in Autonomous AI SOC Agents",
    "summary": "A recent a16z survey of CISOs at enterprises over 1,000 employees shows growing confidence in autonomous AI agents for low-risk SOC tasks. Currently 36% are comfortable with AI autonomy, projected to rise to 60% in twelve months, making AI SOC the top initiative for 2027. Organizations should adopt governance frameworks to manage risk while delegating routine security operations to AI.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/the-path-to-ai-autonomy-in-soc.html",
    "publishedAt": "2026-11-20T12:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisos-increasing-trust-in-autonomous-ai-soc-agents",
      "article-870a7dcb",
      "870a7dcb",
      "cisos-increasing-trust-in-autonomous-ai-soc-agents-4e8b45"
    ]
  },
  {
    "slug": "cisa-adds-four-known-exploited-vulnerabilities-to-b38e652d",
    "title": "CISA Adds Four Known Exploited Vulnerabilities to Catalog",
    "summary": "BOD 26-04 reinforces the importance of the KEV Catalog and requires federal agencies to prioritize rapid remediation of high-risk vulnerabilities, specifically those identified by Common Vulnerabilities and Exposures (CVEs) listed in CISA’s KEV Catalog on publicly exposed assets that grant total control of the asset post-exploitation, while deferring action for lower-risk vulnerabilities. Aware of an exploited vulnerability not currently listed in the KEV Catalog?. The vulnerabilities are tracked as CVE-2025-42884, CVE-2026-76466, CVE-2026-123890.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/11/20/cisa-adds-four-known-exploited-vulnerabilities-catalog",
    "publishedAt": "2026-11-20T12:00:00.000Z",
    "cves": [
      "CVE-2025-42884",
      "CVE-2026-76466",
      "CVE-2026-123890",
      "CVE-2026-129448"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-four-known-exploited-vulnerabilities-to",
      "article-b38e652d",
      "b38e652d",
      "cisa-adds-four-known-exploited-vulnerabilities-to-61ed3a",
      "cisa-adds-four-known-exploited-vulnerabilities-to-catalog"
    ]
  },
  {
    "slug": "red-hat-releases-critical-update-for-nginx-12d2a366",
    "title": "Red Hat Releases Critical Update for nginx",
    "summary": "Red Hat issued a critical security update for nginx on RHEL 9, addressing multiple high-severity vulnerabilities. The update mitigates several CVE-identified flaws, each with a CVSS base score of 9.0 or higher, and prevents unauthenticated remote code execution. Administrators should apply the RHSA-2026:100748 package immediately and verify that all affected services are restarted.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100748",
    "publishedAt": "2026-11-20T11:44:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-update-for-nginx",
      "article-12d2a366",
      "12d2a366",
      "red-hat-releases-critical-update-for-nginx-2ee088"
    ]
  },
  {
    "slug": "red-hat-updates-nginx-1-24-on-rhel-9-4c76a417",
    "title": "Red Hat Updates nginx:1.24 on RHEL 9",
    "summary": "Red Hat issued a critical update for nginx:1.24 on RHEL 9, fixing vulnerabilities that could enable remote code execution. The advisory cites multiple CVE IDs with high CVSS scores, though no public exploits have been disclosed. Administrators should apply the update or install the patches immediately to prevent potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100746",
    "publishedAt": "2026-11-20T11:44:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-nginx-1-24-on-rhel-9",
      "article-4c76a417",
      "4c76a417",
      "red-hat-updates-nginx-1-24-on-rhel-9-2ee088"
    ]
  },
  {
    "slug": "sbc-medical-group-breach-exposes-2-million-custome-ca25a581",
    "title": "SBC Medical Group Breach Exposes 2 Million Customers",
    "summary": "Threat actors accessed databases containing customer information linked to SBC Medical Group clinics in Japan. The breach exposed personal data of over 2 million individuals, potentially including names, addresses, and medical records, though specific data types were not disclosed. SBC Medical Group has notified affected customers and is investigating the incident, urging users to monitor for suspicious activity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/sbc-medical-group-data-breach-impacts-over-2-million/",
    "publishedAt": "2026-11-20T11:36:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sbc-medical-group-breach-exposes-2-million-custome",
      "article-ca25a581",
      "ca25a581",
      "sbc-medical-group-breach-exposes-2-million-custome-399bff",
      "sbc-medical-group-breach-exposes-2-million-customers"
    ]
  },
  {
    "slug": "ai-driven-artex-automates-attacks-without-zero-day-3093e949",
    "title": "AI-Driven ARTEX Automates Attacks Without Zero-Days",
    "summary": "Attackers employ the open-source ARTEX framework, an AI-driven tool that automates network intrusion without relying on zero-day exploits. ARTEX scans for exposed applications, weak passwords, and loose permissions, persisting against defenses longer than typical human attackers. Security teams should harden configurations, enforce strong authentication, and monitor for automated scanning activity to mitigate ARTEX-driven threats.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-use-ai-powered-artex-framework/",
    "publishedAt": "2026-11-20T11:27:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-driven-artex-automates-attacks-without-zero-day",
      "article-3093e949",
      "3093e949",
      "ai-driven-artex-automates-attacks-without-zero-day-5826f1",
      "ai-driven-artex-automates-attacks-without-zero-days"
    ]
  },
  {
    "slug": "red-hat-updates-nginx-1-24-on-rhel-8-59c0a30f",
    "title": "Red Hat Updates nginx:1.24 on RHEL 8",
    "summary": "Red Hat released a critical update for nginx:1.24 on RHEL 8, addressing vulnerabilities that could allow remote code execution. The advisory lists several CVE IDs with high CVSS scores, but no public exploits have been reported. Administrators should apply the update or install the patches immediately to prevent potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100747",
    "publishedAt": "2026-11-20T11:08:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-nginx-1-24-on-rhel-8",
      "article-59c0a30f",
      "59c0a30f",
      "red-hat-updates-nginx-1-24-on-rhel-8-2ee088"
    ]
  },
  {
    "slug": "rhsa-2026-100745-critical-nginx-1-26-security-upda-78a6aabd",
    "title": "RHSA-2026:100745: Critical: nginx:1.26 security update",
    "summary": "An update for the nginx:1.26 module is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100745",
    "publishedAt": "2026-11-20T11:05:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100745-critical-nginx-1-26-security-upda",
      "article-78a6aabd",
      "78a6aabd",
      "rhsa-2026-100745-critical-nginx-1-26-security-upda-2ee088",
      "rhsa-2026-100745-critical-nginx-1-26-security-update"
    ]
  },
  {
    "slug": "f5-issues-emergency-patches-for-critical-big-ip-rc-37f0d20d",
    "title": "F5 Issues Emergency Patches for Critical BIG-IP RCE Flaws",
    "summary": "F5 released emergency patches for five critical BIG-IP vulnerabilities that enable remote code execution or denial-of-service attacks. The flaws grant unauthenticated attackers kernel-level code execution, threatening network traffic integrity and service availability, and the vendor classifies them as critical. F5 advises applying the latest BIG-IP firmware immediately and, if delayed, disabling affected modules and limiting management access as interim mitigations.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/f5-releases-emergency-patches-for-critical-big-ip-rce-flaws/",
    "publishedAt": "2026-11-20T10:57:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "f5-issues-emergency-patches-for-critical-big-ip-rc",
      "article-37f0d20d",
      "37f0d20d",
      "f5-issues-emergency-patches-for-critical-big-ip-rc-29dc34",
      "f5-issues-emergency-patches-for-critical-big-ip-rce-flaws"
    ]
  },
  {
    "slug": "european-commission-ai-attack-disrupts-services-879406ee",
    "title": "European Commission AI Attack Disrupts Services",
    "summary": "An AI-assisted cyberattack targeted European Commission services, causing temporary outages across multiple online portals. The incident involved automated reconnaissance and exploitation of exposed web interfaces, but no evidence of data exfiltration was found. Commission operators isolated affected services, applied temporary mitigations, and are monitoring for further activity while no patch is required.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/european-commission-confirms-ai-assisted-cyberattack-disrupted-services/",
    "publishedAt": "2026-11-20T10:51:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "european-commission-ai-attack-disrupts-services",
      "article-879406ee",
      "879406ee",
      "european-commission-ai-attack-disrupts-services-5e6be5"
    ]
  },
  {
    "slug": "sonicwall-gen-6-firewalls-unpatched-advises-immedi-cb8aa657",
    "title": "SonicWall Gen 6 Firewalls Unpatched, Advises Immediate Retirement",
    "summary": "SonicWall announced that Generation 6 firewalls will no longer receive security updates, citing increased AI-driven attack pressure. The advisory warns that unsupported edge devices are now prime targets for automated exploitation, potentially enabling remote code execution. Customers are urged to retire Gen 6 units immediately, replace them with supported models, and block internet exposure until a replacement is deployed.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/sonicwall-warns-gen-6-firewalls-wont.html",
    "publishedAt": "2026-11-20T10:38:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sonicwall-gen-6-firewalls-unpatched-advises-immedi",
      "article-cb8aa657",
      "cb8aa657",
      "sonicwall-gen-6-firewalls-unpatched-advises-immedi-1c7a0c",
      "sonicwall-gen-6-firewalls-unpatched-advises-immediate-retire"
    ]
  },
  {
    "slug": "ruby-patches-ruby2shell-heap-overflow-vulnerabilit-3bb20701",
    "title": "Ruby Patches Ruby2Shell Heap Overflow Vulnerability",
    "summary": "Ruby patched the Ruby2Shell heap-based buffer overflow that could enable remote code execution in Ruby applications. The flaw, tracked as CVE-2026-132825, allows attackers to corrupt heap memory and execute arbitrary code, potentially compromising any process running Ruby without authentication. Ruby released patch 3.2.2.1, and users should update immediately or apply the provided workaround to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/ruby-patches-ruby2shell-vulnerability-that-could-lead-to-rce/",
    "publishedAt": "2026-11-20T10:34:10.000Z",
    "cves": [
      "CVE-2026-132825"
    ],
    "additionalSources": [],
    "aliases": [
      "ruby-patches-ruby2shell-heap-overflow-vulnerabilit",
      "article-3bb20701",
      "3bb20701",
      "ruby-patches-ruby2shell-heap-overflow-vulnerabilit-7a0697",
      "ruby-patches-ruby2shell-heap-overflow-vulnerability"
    ]
  },
  {
    "slug": "cisco-expressway-cve-2026-76466-breach-enables-int-d2749c00",
    "title": "Cisco Expressway CVE-2026-76466 Breach Enables Internal Network Access",
    "summary": "Hackers exploited Cisco Expressway CVE-2026-76466, a CVSS 9.8 unauthenticated remote code execution flaw, to breach four devices in a Russian organization. The public PoC released before the attack showed attackers could gain full control over Expressway via crafted HTTP requests.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-critical-cisco.html",
    "publishedAt": "2026-11-20T10:32:50.000Z",
    "cves": [
      "CVE-2026-76466"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-expressway-cve-2026-76466-breach-enables-int",
      "article-d2749c00",
      "d2749c00",
      "cisco-expressway-cve-2026-76466-breach-enables-int-3f47a4",
      "cisco-expressway-cve-2026-76466-breach-enables-internal-netw"
    ]
  },
  {
    "slug": "rhsa-2026-100744-critical-nginx-security-update-315142a7",
    "title": "RHSA-2026:100744: Critical: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100744",
    "publishedAt": "2026-11-20T10:22:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100744-critical-nginx-security-update",
      "article-315142a7",
      "315142a7",
      "rhsa-2026-100744-critical-nginx-security-update-2ee088"
    ]
  },
  {
    "slug": "tfl-oyster-photocard-data-breach-exposes-265-000-u-afd049c0",
    "title": "TfL Oyster Photocard Data Breach Exposes 265,000 Users",
    "summary": "Transport for London confirmed that the Oyster photocard website was breached, exposing account details of approximately 265,000 users. The breach involved unauthorized access to the photocard system, potentially compromising personal data such as names, addresses, and card balances. TfL took the system offline, issued a security advisory, and is working with investigators to remediate the vulnerability and prevent further exposure.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/20/transport-for-london-oyster-photocard-data-breach/",
    "publishedAt": "2026-11-20T10:21:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "tfl-oyster-photocard-data-breach-exposes-265-000-u",
      "article-afd049c0",
      "afd049c0",
      "tfl-oyster-photocard-data-breach-exposes-265-000-u-57b060",
      "tfl-oyster-photocard-data-breach-exposes-265-000-users"
    ]
  },
  {
    "slug": "palo-alto-confirms-java-vulnerability-impacts-priv-10f5624d",
    "title": "Palo Alto Confirms Java Vulnerability Impacts Privilege Threat Analytics and Remote Access Connector",
    "summary": "Palo Alto Networks has confirmed that a critical Java vulnerability affects Idira Privilege Threat Analytics, Remote Access Connector, and on-premises HTML5 Gateway products. Tracked as CVE-2026-114938, the flaw could let a remote attacker run code without signing in when specific hardware and software conditions are met.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/palo-alto-confirms-java-vulnerability-impacts/",
    "publishedAt": "2026-11-20T10:00:36.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "palo-alto-confirms-java-vulnerability-impacts-priv",
      "article-10f5624d",
      "10f5624d",
      "palo-alto-confirms-java-vulnerability-impacts-priv-5a7914",
      "palo-alto-confirms-java-vulnerability-impacts-privilege-thre"
    ]
  },
  {
    "slug": "rhsa-2026-100735-important-sos-security-bug-fix-an-55df0332",
    "title": "RHSA-2026:100735: Important: sos security, bug fix, and enhancement update",
    "summary": "Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100735",
    "publishedAt": "2026-11-20T09:30:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100735-important-sos-security-bug-fix-an",
      "article-55df0332",
      "55df0332",
      "rhsa-2026-100735-important-sos-security-bug-fix-an-2ee088",
      "rhsa-2026-100735-important-sos-security-bug-fix-and-enhancem"
    ]
  },
  {
    "slug": "microsoft-releases-windows-11-kb5132057-update-b07486ca",
    "title": "Microsoft Releases Windows 11 KB5132057 Update",
    "summary": "Microsoft released the KB5132057 November Windows 11 preview update, addressing 28 changes across the operating system. The update includes enhancements to Windows Search, Windows Hello, and the Run dialog, along with other minor bug fixes. Security teams should install the patch via Windows Update or manual download to maintain system stability and security.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/windows-11-kb5132057-update-released-with-28-changes-and-fixes/",
    "publishedAt": "2026-11-20T09:25:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-releases-windows-11-kb5132057-update",
      "article-b07486ca",
      "b07486ca",
      "microsoft-releases-windows-11-kb5132057-update-8868a1"
    ]
  },
  {
    "slug": "rhsa-2026-100658-important-net-9-0-security-bug-fi-4564b0e1",
    "title": "RHSA-2026:100658: Important: .NET 9.0 security, bug fix, and enhancement update",
    "summary": "An update for .NET 9.0 is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100658",
    "publishedAt": "2026-11-20T09:09:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100658-important-net-9-0-security-bug-fi",
      "article-4564b0e1",
      "4564b0e1",
      "rhsa-2026-100658-important-net-9-0-security-bug-fi-2ee085",
      "rhsa-2026-100658-important-net-9-0-security-bug-fix-and-enha"
    ]
  },
  {
    "slug": "n-able-blames-service-disruption-on-cyberattack-ad60ab08",
    "title": "N-Able Blames Service Disruption on Cyberattack",
    "summary": "N-Able attributes a recent service disruption to a cyberattack that impacted its Mail Assure and SpamExperts Hosted Cloud offerings. The incident may have exposed user credentials, though no confirmed data exfiltration has been reported, raising concerns about account security. Affected customers should verify account integrity, enforce multi-factor authentication, and monitor for suspicious activity while awaiting vendor guidance.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/n-able-blames-service-disruption-on-cyberattack/",
    "publishedAt": "2026-11-20T09:08:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-blames-service-disruption-on-cyberattack",
      "article-ad60ab08",
      "ad60ab08",
      "n-able-blames-service-disruption-on-cyberattack-6adea2"
    ]
  },
  {
    "slug": "rhsa-2026-100657-important-net-8-0-security-bug-fi-36aacfb6",
    "title": "RHSA-2026:100657: Important: .NET 8.0 security, bug fix, and enhancement update",
    "summary": "An update for .NET 8.0 is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100657",
    "publishedAt": "2026-11-20T09:08:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100657-important-net-8-0-security-bug-fi",
      "article-36aacfb6",
      "36aacfb6",
      "rhsa-2026-100657-important-net-8-0-security-bug-fi-2ee085",
      "rhsa-2026-100657-important-net-8-0-security-bug-fix-and-enha"
    ]
  },
  {
    "slug": "chromium-use-after-free-vulnerability-cve-2024-753-faad13a5",
    "title": "Chromium Use-After-Free Vulnerability CVE-2024-7533",
    "summary": "Chromium's sharing feature contains a use-after-free flaw, identified as CVE-2024-7533, that can be triggered by maliciously crafted shared content. The flaw allows an attacker to execute arbitrary code or crash the browser, potentially compromising user data and session integrity. Google has released a patch in the latest Chromium update; users should upgrade immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2024-7532",
    "publishedAt": "2026-11-20T09:06:50.000Z",
    "cves": [
      "CVE-2024-7533",
      "CVE-2024-7532"
    ],
    "additionalSources": [],
    "aliases": [
      "chromium-use-after-free-vulnerability-cve-2024-753",
      "article-faad13a5",
      "faad13a5",
      "chromium-use-after-free-vulnerability-cve-2024-753-43286e",
      "chromium-use-after-free-vulnerability-cve-2024-7533"
    ]
  },
  {
    "slug": "chromium-angle-use-after-free-cve-2023-1531-e4eccb3a",
    "title": "Chromium ANGLE Use-After-Free CVE-2023-1531",
    "summary": "Chromium's ANGLE component contains a use-after-free flaw identified as CVE-2023-1531. The flaw allows an attacker to corrupt memory after a freed pointer is accessed, potentially enabling arbitrary code execution if exploited. Microsoft and Chromium developers have released a patch in the latest Chromium update; users should upgrade to the newest stable release to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-1531",
    "publishedAt": "2026-11-20T09:05:37.000Z",
    "cves": [
      "CVE-2023-1531"
    ],
    "additionalSources": [],
    "aliases": [
      "chromium-angle-use-after-free-cve-2023-1531",
      "article-e4eccb3a",
      "e4eccb3a",
      "chromium-angle-use-after-free-cve-2023-1531-4170db"
    ]
  },
  {
    "slug": "red-hat-rpm-security-update-rhsa-2026-100637-54dded9a",
    "title": "Red Hat RPM Security Update (RHSA-2026-100637)",
    "summary": "Red Hat released a moderate-impact security update for the rpm package on RHEL 8, addressing multiple vulnerabilities identified in the RPM package manager. The update mitigates potential privilege escalation or package tampering risks by correcting internal validation logic. Users should apply the RHSA-2026-100637 update via yum or dnf to ensure system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100637",
    "publishedAt": "2026-11-20T08:58:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-rpm-security-update-rhsa-2026-100637",
      "article-54dded9a",
      "54dded9a",
      "red-hat-rpm-security-update-rhsa-2026-100637-2ee084"
    ]
  },
  {
    "slug": "rhsa-2026-100686-important-curl-security-update-968536f6",
    "title": "RHSA-2026:100686: Important: curl security update",
    "summary": "An update for curl is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100686",
    "publishedAt": "2026-11-20T08:57:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100686-important-curl-security-update",
      "article-968536f6",
      "968536f6",
      "rhsa-2026-100686-important-curl-security-update-2ee085"
    ]
  },
  {
    "slug": "rhsa-2026-100638-moderate-rpm-security-update-d4314756",
    "title": "RHSA-2026:100638: Moderate: rpm security update",
    "summary": "An update for rpm is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100638",
    "publishedAt": "2026-11-20T08:55:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100638-moderate-rpm-security-update",
      "article-d4314756",
      "d4314756",
      "rhsa-2026-100638-moderate-rpm-security-update-2ee084"
    ]
  },
  {
    "slug": "rhsa-2026-100685-important-curl-security-update-be5483cc",
    "title": "RHSA-2026:100685: Important: curl security update",
    "summary": "An update for curl is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100685",
    "publishedAt": "2026-11-20T08:54:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100685-important-curl-security-update",
      "article-be5483cc",
      "be5483cc",
      "rhsa-2026-100685-important-curl-security-update-2ee085"
    ]
  },
  {
    "slug": "european-commission-confirms-ai-generated-cyberatt-4d57d748",
    "title": "European Commission Confirms AI-Generated Cyberattack",
    "summary": "The European Commission confirmed a cyberattack that leveraged an available AI tool to disrupt several of its applications. The attack forced multiple systems offline, though no evidence of data exfiltration or credential compromise was reported, according to spokesperson Thomas Regnier. Security teams should review access controls, monitor for anomalous activity, and apply any vendor-issued mitigations to prevent similar AI-driven disruptions.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/20/european-commission-ai-generated-cyberattack-publicly-available-tool/",
    "publishedAt": "2026-11-20T08:52:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "european-commission-confirms-ai-generated-cyberatt",
      "article-4d57d748",
      "4d57d748",
      "european-commission-confirms-ai-generated-cyberatt-42376c",
      "european-commission-confirms-ai-generated-cyberattack"
    ]
  },
  {
    "slug": "rhsa-2026-100643-moderate-rpm-security-update-baca4ae2",
    "title": "RHSA-2026:100643: Moderate: rpm security update",
    "summary": "An update for rpm is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100643",
    "publishedAt": "2026-11-20T08:48:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100643-moderate-rpm-security-update",
      "article-baca4ae2",
      "baca4ae2",
      "rhsa-2026-100643-moderate-rpm-security-update-2ee084"
    ]
  },
  {
    "slug": "rhsa-2026-100554-important-buildah-security-bug-fi-f8789eb8",
    "title": "RHSA-2026:100554: Important: buildah security, bug fix, and enhancement update",
    "summary": "An update for buildah is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100554",
    "publishedAt": "2026-11-20T08:47:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100554-important-buildah-security-bug-fi",
      "article-f8789eb8",
      "f8789eb8",
      "rhsa-2026-100554-important-buildah-security-bug-fi-2ee081",
      "rhsa-2026-100554-important-buildah-security-bug-fix-and-enha"
    ]
  },
  {
    "slug": "rhsa-2026-100641-important-c-ares-security-update-6ab76ab1",
    "title": "RHSA-2026:100641: Important: c-ares security update",
    "summary": "An update for c-ares is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100641",
    "publishedAt": "2026-11-20T08:47:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100641-important-c-ares-security-update",
      "article-6ab76ab1",
      "6ab76ab1",
      "rhsa-2026-100641-important-c-ares-security-update-2ee084"
    ]
  },
  {
    "slug": "red-hat-builds-security-update-for-buildah-4fa46f82",
    "title": "Red Hat Builds Security Update for Buildah",
    "summary": "Red Hat released an important buildah update for Enterprise Linux 9, addressing multiple security bugs that could allow privilege escalation or denial of service. The update includes fixes for CVEs referenced in the advisory, improving container image building reliability and preventing potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100688",
    "publishedAt": "2026-11-20T08:47:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-builds-security-update-for-buildah",
      "article-4fa46f82",
      "4fa46f82",
      "red-hat-builds-security-update-for-buildah-2ee085"
    ]
  },
  {
    "slug": "rhsa-2026-100639-important-skopeo-security-bug-fix-5e1bf7ca",
    "title": "RHSA-2026:100639: Important: skopeo security, bug fix, and enhancement update",
    "summary": "An update for skopeo is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100639",
    "publishedAt": "2026-11-20T08:46:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100639-important-skopeo-security-bug-fix",
      "article-5e1bf7ca",
      "5e1bf7ca",
      "rhsa-2026-100639-important-skopeo-security-bug-fix-2ee084",
      "rhsa-2026-100639-important-skopeo-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "rhsa-2026-100640-important-skopeo-security-bug-fix-4e7c28fe",
    "title": "RHSA-2026:100640: Important: skopeo security, bug fix, and enhancement update",
    "summary": "An update for skopeo is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100640",
    "publishedAt": "2026-11-20T08:45:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100640-important-skopeo-security-bug-fix",
      "article-4e7c28fe",
      "4e7c28fe",
      "rhsa-2026-100640-important-skopeo-security-bug-fix-2ee084",
      "rhsa-2026-100640-important-skopeo-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "rhsa-2026-100645-important-python3-9-security-upda-45b5e98e",
    "title": "RHSA-2026:100645: Important: python3.9 security update",
    "summary": "An update for python3.9 is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100645",
    "publishedAt": "2026-11-20T08:44:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100645-important-python3-9-security-upda",
      "article-45b5e98e",
      "45b5e98e",
      "rhsa-2026-100645-important-python3-9-security-upda-2ee084",
      "rhsa-2026-100645-important-python3-9-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-100689-important-python-oauthlib-securit-f3f00c2c",
    "title": "RHSA-2026:100689: Important: python-oauthlib security update",
    "summary": "An update for python-oauthlib is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100689",
    "publishedAt": "2026-11-20T08:44:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100689-important-python-oauthlib-securit",
      "article-f3f00c2c",
      "f3f00c2c",
      "rhsa-2026-100689-important-python-oauthlib-securit-2ee085",
      "rhsa-2026-100689-important-python-oauthlib-security-update"
    ]
  },
  {
    "slug": "red-hat-recommends-python3-9-update-for-security-b1698d4f",
    "title": "Red Hat Recommends Python3.9 Update for Security",
    "summary": "Red Hat issued an Important security update for python3.9 on RHEL 9.4, addressing multiple interpreter vulnerabilities. The advisory lists CVE identifiers and CVSS scores, indicating high-severity impact. Red Hat recommends applying the update immediately; no workaround is available, and administrators should verify package versions after installation for critical affected systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100553",
    "publishedAt": "2026-11-20T08:42:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-recommends-python3-9-update-for-security",
      "article-b1698d4f",
      "b1698d4f",
      "red-hat-recommends-python3-9-update-for-security-2ee081"
    ]
  },
  {
    "slug": "rhsa-2026-100690-important-python-oauthlib-securit-cddbb364",
    "title": "RHSA-2026:100690: Important: python-oauthlib security update",
    "summary": "An update for python-oauthlib is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100690",
    "publishedAt": "2026-11-20T08:42:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100690-important-python-oauthlib-securit",
      "article-cddbb364",
      "cddbb364",
      "rhsa-2026-100690-important-python-oauthlib-securit-2ee085",
      "rhsa-2026-100690-important-python-oauthlib-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-100644-important-python3-9-security-upda-784509aa",
    "title": "RHSA-2026:100644: Important: python3.9 security update",
    "summary": "An update for python3.9 is now available for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100644",
    "publishedAt": "2026-11-20T08:41:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100644-important-python3-9-security-upda",
      "article-784509aa",
      "784509aa",
      "rhsa-2026-100644-important-python3-9-security-upda-2ee084",
      "rhsa-2026-100644-important-python3-9-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-100691-important-python-oauthlib-securit-692cf308",
    "title": "RHSA-2026:100691: Important: python-oauthlib security update",
    "summary": "An update for python-oauthlib is now available for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100691",
    "publishedAt": "2026-11-20T08:40:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100691-important-python-oauthlib-securit",
      "article-692cf308",
      "692cf308",
      "rhsa-2026-100691-important-python-oauthlib-securit-2ee085",
      "rhsa-2026-100691-important-python-oauthlib-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-100642-important-edk2-security-update-23dc7558",
    "title": "RHSA-2026:100642: Important: edk2 security update",
    "summary": "An update for edk2 is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100642",
    "publishedAt": "2026-11-20T08:39:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100642-important-edk2-security-update",
      "article-23dc7558",
      "23dc7558",
      "rhsa-2026-100642-important-edk2-security-update-2ee084"
    ]
  },
  {
    "slug": "rhsa-2026-100734-important-edk2-security-update-45216704",
    "title": "RHSA-2026:100734: Important: edk2 security update",
    "summary": "An update for edk2 is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100734",
    "publishedAt": "2026-11-20T08:35:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100734-important-edk2-security-update",
      "article-45216704",
      "45216704",
      "rhsa-2026-100734-important-edk2-security-update-2ee088"
    ]
  },
  {
    "slug": "red-hat-kernel-update-for-rhel-8-8-sap-02614055",
    "title": "Red Hat Kernel Update for RHEL 8.8 SAP",
    "summary": "Red Hat released a kernel update for Enterprise Linux 8.8 SAP and Telecommunications, fixing bugs that could allow privilege escalation or denial of service. CVSS base scores for each vulnerability are listed in the CVE references, indicating high impact. Apply the kernel patch via RHEL 8.8 Update Services for SAP Solutions or Telecommunications Update Service to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100647",
    "publishedAt": "2026-11-20T08:34:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-for-rhel-8-8-sap",
      "article-02614055",
      "02614055",
      "red-hat-kernel-update-for-rhel-8-8-sap-2ee084"
    ]
  },
  {
    "slug": "rhsa-2026-100498-important-gnome-remote-desktop-se-60da1476",
    "title": "RHSA-2026:100498: Important: gnome-remote-desktop security update",
    "summary": "An update for gnome-remote-desktop is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100498",
    "publishedAt": "2026-11-20T08:33:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100498-important-gnome-remote-desktop-se",
      "article-60da1476",
      "60da1476",
      "rhsa-2026-100498-important-gnome-remote-desktop-se-2ee07e",
      "rhsa-2026-100498-important-gnome-remote-desktop-security-upd"
    ]
  },
  {
    "slug": "rhsa-2026-100648-important-xorg-x11-server-securit-cd2b4d30",
    "title": "RHSA-2026:100648: Important: xorg-x11-server security update",
    "summary": "An update for xorg-x11-server is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100648",
    "publishedAt": "2026-11-20T08:32:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100648-important-xorg-x11-server-securit",
      "article-cd2b4d30",
      "cd2b4d30",
      "rhsa-2026-100648-important-xorg-x11-server-securit-2ee084",
      "rhsa-2026-100648-important-xorg-x11-server-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-100649-important-aspell-security-update-dbe1de9d",
    "title": "RHSA-2026:100649: Important: aspell security update",
    "summary": "An update for aspell is now available for Red Hat Enterprise Linux 7 Extended Lifecycle Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100649",
    "publishedAt": "2026-11-20T08:32:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100649-important-aspell-security-update",
      "article-dbe1de9d",
      "dbe1de9d",
      "rhsa-2026-100649-important-aspell-security-update-2ee084"
    ]
  },
  {
    "slug": "rhsa-2026-100653-important-net-8-0-security-bug-fi-dcf5f07e",
    "title": "RHSA-2026:100653: Important: .NET 8.0 security, bug fix, and enhancement update",
    "summary": "An update for .NET 8.0 is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100653",
    "publishedAt": "2026-11-20T08:31:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100653-important-net-8-0-security-bug-fi",
      "article-dcf5f07e",
      "dcf5f07e",
      "rhsa-2026-100653-important-net-8-0-security-bug-fi-2ee085",
      "rhsa-2026-100653-important-net-8-0-security-bug-fix-and-enha"
    ]
  },
  {
    "slug": "rhsa-2026-100650-important-httpd-security-update-800165b0",
    "title": "RHSA-2026:100650: Important: httpd security update",
    "summary": "An update for httpd is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100650",
    "publishedAt": "2026-11-20T08:30:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100650-important-httpd-security-update",
      "article-800165b0",
      "800165b0",
      "rhsa-2026-100650-important-httpd-security-update-2ee084"
    ]
  },
  {
    "slug": "rhsa-2026-100654-important-net-9-0-security-bug-fi-5cb532c9",
    "title": "RHSA-2026:100654: Important: .NET 9.0 security, bug fix, and enhancement update",
    "summary": "An update for .NET 9.0 is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100654",
    "publishedAt": "2026-11-20T08:30:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100654-important-net-9-0-security-bug-fi",
      "article-5cb532c9",
      "5cb532c9",
      "rhsa-2026-100654-important-net-9-0-security-bug-fi-2ee085",
      "rhsa-2026-100654-important-net-9-0-security-bug-fix-and-enha"
    ]
  },
  {
    "slug": "rhsa-2026-100651-important-xorg-x11-server-securit-793092e8",
    "title": "RHSA-2026:100651: Important: xorg-x11-server security update",
    "summary": "An update for xorg-x11-server is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100651",
    "publishedAt": "2026-11-20T08:30:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100651-important-xorg-x11-server-securit",
      "article-793092e8",
      "793092e8",
      "rhsa-2026-100651-important-xorg-x11-server-securit-2ee084",
      "rhsa-2026-100651-important-xorg-x11-server-security-update"
    ]
  },
  {
    "slug": "red-hat-kernel-update-for-rhel-9-56850d67",
    "title": "Red Hat Kernel Update for RHEL 9",
    "summary": "Red Hat released a kernel security update for Enterprise Linux 9, addressing multiple vulnerabilities that could enable privilege escalation or denial of service. CVSS base scores for each vulnerability are provided in the CVE references, indicating high impact severity. Security teams should apply the kernel patch through RHEL 9 Update Services to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100662",
    "publishedAt": "2026-11-20T08:29:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-for-rhel-9",
      "article-56850d67",
      "56850d67",
      "red-hat-kernel-update-for-rhel-9-2ee085"
    ]
  },
  {
    "slug": "rhsa-2026-100655-important-net-10-0-security-bug-f-1748adca",
    "title": "RHSA-2026:100655: Important: .NET 10.0 security, bug fix, and enhancement update",
    "summary": "An update for .NET 10.0 is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100655",
    "publishedAt": "2026-11-20T08:28:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100655-important-net-10-0-security-bug-f",
      "article-1748adca",
      "1748adca",
      "rhsa-2026-100655-important-net-10-0-security-bug-f-2ee085",
      "rhsa-2026-100655-important-net-10-0-security-bug-fix-and-enh"
    ]
  },
  {
    "slug": "red-hat-kernel-update-for-rhel-9-4-sap-816c4b99",
    "title": "Red Hat Kernel Update for RHEL 9.4 SAP",
    "summary": "Red Hat issued a kernel security update for Enterprise Linux 9.4 SAP Solutions, fixing bugs that could allow privilege escalation or denial of service. CVSS base scores for each vulnerability are listed in the CVE references, indicating high impact severity. Apply the kernel patch via RHEL 9.4 Update Services for SAP Solutions to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100660",
    "publishedAt": "2026-11-20T08:27:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-for-rhel-9-4-sap",
      "article-816c4b99",
      "816c4b99",
      "red-hat-kernel-update-for-rhel-9-4-sap-2ee085"
    ]
  },
  {
    "slug": "rhsa-2026-100656-important-kernel-security-update-596c386b",
    "title": "RHSA-2026:100656: Important: kernel security update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100656",
    "publishedAt": "2026-11-20T08:27:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100656-important-kernel-security-update",
      "article-596c386b",
      "596c386b",
      "rhsa-2026-100656-important-kernel-security-update-2ee085"
    ]
  },
  {
    "slug": "rhsa-2026-100661-important-kernel-security-bug-fix-c963dc72",
    "title": "RHSA-2026:100661: Important: kernel security, bug fix, and enhancement update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100661",
    "publishedAt": "2026-11-20T08:27:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100661-important-kernel-security-bug-fix",
      "article-c963dc72",
      "c963dc72",
      "rhsa-2026-100661-important-kernel-security-bug-fix-2ee085",
      "rhsa-2026-100661-important-kernel-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "rhsa-2026-100693-critical-kpatch-patch-5-14-0-570-025486b2",
    "title": "RHSA-2026:100693: Critical: kpatch-patch-5_14_0-570_116_1, kpatch-patch-5_14_0-570_135_1, kpatch-patch-5_14_0-570_39_1, kpatch-patch-5_14_0-570_66_1, and kpatch-patch-5_14_0-570_94_1 security update",
    "summary": "An update for kpatch-patch-5_14_0-570_116_1, kpatch-patch-5_14_0-570_135_1, kpatch-patch-5_14_0-570_39_1, kpatch-patch-5_14_0-570_66_1, and kpatch-patch-5_14_0-570_94_1 is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100693",
    "publishedAt": "2026-11-20T08:26:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100693-critical-kpatch-patch-5-14-0-570",
      "article-025486b2",
      "025486b2",
      "rhsa-2026-100693-critical-kpatch-patch-5-14-0-570-2ee085",
      "rhsa-2026-100693-critical-kpatch-patch-5-14-0-570-116-1-kpat"
    ]
  },
  {
    "slug": "hackers-scan-litellm-ai-servers-for-rce-flaws-a04d461c",
    "title": "Hackers Scan LiteLLM AI Servers for RCE Flaws",
    "summary": "Hackers scan the internet for exposed LiteLLM AI servers, actively targeting a test endpoint in the LiteLLM gateway. They plan to chain two flaws-one in LiteLLM and a Starlette framework weakness-to gain unauthenticated remote code execution. No patch exists yet; administrators should restrict public LiteLLM access and apply future fixes.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/litellm-ai-servers/",
    "publishedAt": "2026-11-20T08:25:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-scan-litellm-ai-servers-for-rce-flaws",
      "article-a04d461c",
      "a04d461c",
      "hackers-scan-litellm-ai-servers-for-rce-flaws-57828f"
    ]
  },
  {
    "slug": "rhsa-2026-100687-critical-edk2-security-update-8ee21d8f",
    "title": "RHSA-2026:100687: Critical: edk2 security update",
    "summary": "An update for edk2 is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100687",
    "publishedAt": "2026-11-20T08:24:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100687-critical-edk2-security-update",
      "article-8ee21d8f",
      "8ee21d8f",
      "rhsa-2026-100687-critical-edk2-security-update-2ee085"
    ]
  },
  {
    "slug": "rhsa-2026-100694-critical-kpatch-patch-6-12-0-211-c146fa55",
    "title": "RHSA-2026:100694: Critical: kpatch-patch-6_12_0-211_16_1 and kpatch-patch-6_12_0-211_49_1 security update",
    "summary": "An update for kpatch-patch-6_12_0-211_16_1 and kpatch-patch-6_12_0-211_49_1 is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100694",
    "publishedAt": "2026-11-20T08:24:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100694-critical-kpatch-patch-6-12-0-211",
      "article-c146fa55",
      "c146fa55",
      "rhsa-2026-100694-critical-kpatch-patch-6-12-0-211-2ee085",
      "rhsa-2026-100694-critical-kpatch-patch-6-12-0-211-16-1-and-k"
    ]
  },
  {
    "slug": "rhsa-2026-100659-important-net-8-0-security-bug-fi-ccb92b86",
    "title": "RHSA-2026:100659: Important: .NET 8.0 security, bug fix, and enhancement update",
    "summary": "An update for .NET 8.0 is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100659",
    "publishedAt": "2026-11-20T08:23:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100659-important-net-8-0-security-bug-fi",
      "article-ccb92b86",
      "ccb92b86",
      "rhsa-2026-100659-important-net-8-0-security-bug-fi-2ee085",
      "rhsa-2026-100659-important-net-8-0-security-bug-fix-and-enha"
    ]
  },
  {
    "slug": "rhsa-2026-100667-important-flatpak-security-update-a1a845d1",
    "title": "RHSA-2026:100667: Important: flatpak security update",
    "summary": "An update for flatpak is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100667",
    "publishedAt": "2026-11-20T08:20:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100667-important-flatpak-security-update",
      "article-a1a845d1",
      "a1a845d1",
      "rhsa-2026-100667-important-flatpak-security-update-2ee085"
    ]
  },
  {
    "slug": "rhsa-2026-100666-important-flatpak-security-update-232fa221",
    "title": "RHSA-2026:100666: Important: flatpak security update",
    "summary": "An update for flatpak is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100666",
    "publishedAt": "2026-11-20T08:18:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100666-important-flatpak-security-update",
      "article-232fa221",
      "232fa221",
      "rhsa-2026-100666-important-flatpak-security-update-2ee085"
    ]
  },
  {
    "slug": "rhsa-2026-100668-important-flatpak-security-update-1e4e0a25",
    "title": "RHSA-2026:100668: Important: flatpak security update",
    "summary": "An update for flatpak is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100668",
    "publishedAt": "2026-11-20T08:18:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100668-important-flatpak-security-update",
      "article-1e4e0a25",
      "1e4e0a25",
      "rhsa-2026-100668-important-flatpak-security-update-2ee085"
    ]
  },
  {
    "slug": "red-hat-expat-security-update-8303ef25",
    "title": "Red Hat expat Security Update",
    "summary": "Red Hat Enterprise Linux 8 users must address a flaw in the expat XML parser, highlighted in RHSA-2026:100671. The issue permits local users to cause a stack overflow, enabling arbitrary code execution with a CVSS score of 7.5. Red Hat advises installing the expat update via the RHEL 8 update mechanism to eliminate the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100671",
    "publishedAt": "2026-11-20T08:16:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-expat-security-update",
      "article-8303ef25",
      "8303ef25",
      "red-hat-expat-security-update-2ee085"
    ]
  },
  {
    "slug": "red-hat-fltk-security-update-de925d74",
    "title": "Red Hat fltk Security Update",
    "summary": "Red Hat Enterprise Linux 8 users face a critical flaw in the fltk GUI toolkit, as identified in RHSA-2026:100695. The vulnerability allows local users to trigger a buffer overflow, potentially leading to arbitrary code execution with a CVSS score of 8.1.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100695",
    "publishedAt": "2026-11-20T08:14:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-fltk-security-update",
      "article-de925d74",
      "de925d74",
      "red-hat-fltk-security-update-2ee085"
    ]
  },
  {
    "slug": "rhsa-2026-100672-important-flatpak-security-update-826ad3dd",
    "title": "RHSA-2026:100672: Important: flatpak security update",
    "summary": "An update for flatpak is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100672",
    "publishedAt": "2026-11-20T08:12:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100672-important-flatpak-security-update",
      "article-826ad3dd",
      "826ad3dd",
      "rhsa-2026-100672-important-flatpak-security-update-2ee085"
    ]
  },
  {
    "slug": "rhsa-2026-100674-important-fltk-security-update-6ce10a75",
    "title": "RHSA-2026:100674: Important: fltk security update",
    "summary": "An update for fltk is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100674",
    "publishedAt": "2026-11-20T08:09:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100674-important-fltk-security-update",
      "article-6ce10a75",
      "6ce10a75",
      "rhsa-2026-100674-important-fltk-security-update-2ee085"
    ]
  },
  {
    "slug": "nginx-exposes-multiple-high-severity-vulnerabiliti-531b7dc5",
    "title": "NGINX Exposes Multiple High-Severity Vulnerabilities",
    "summary": "Fortinet FortiGuard PSIRT disclosed high-severity CVEs that compromise NGINX OSS and Plus versions 1.31.0-1.30.6, enabling memory corruption via crafted HTTP requests. The CVEs, including CVE-2026-123007 and CVE-2026-123633, score 8.1 on CVSSv3 and allow unauthenticated remote code execution. NGINX has released patches; administrators should upgrade to the latest stable version or apply the vendor-issued security updates immediately.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-279",
    "publishedAt": "2026-11-20T08:00:00.000Z",
    "cves": [
      "CVE-2026-123007",
      "CVE-2026-123633"
    ],
    "additionalSources": [],
    "aliases": [
      "nginx-exposes-multiple-high-severity-vulnerabiliti",
      "article-531b7dc5",
      "531b7dc5",
      "nginx-exposes-multiple-high-severity-vulnerabiliti-3bcda5",
      "nginx-exposes-multiple-high-severity-vulnerabilities"
    ]
  },
  {
    "slug": "jpmorgan-visa-mastercard-cite-third-party-data-lea-68db05d9",
    "title": "JPMorgan Visa Mastercard Cite Third-Party Data Leak",
    "summary": "The N0n extortion group leaked data tied to JPMorgan, Visa, and Mastercard customers, prompting the firms to blame third-party providers. The leak exposed sensitive customer information, though the extent of credential compromise remains unclear; no exploit or vulnerability was disclosed. Affected users are advised to monitor accounts and change credentials, while vendors review security controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/jpmorgan-visa-mastercard-cite-third-party-incidents-amid-data-leak/",
    "publishedAt": "2026-11-20T07:35:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "jpmorgan-visa-mastercard-cite-third-party-data-lea",
      "article-68db05d9",
      "68db05d9",
      "jpmorgan-visa-mastercard-cite-third-party-data-lea-332878",
      "jpmorgan-visa-mastercard-cite-third-party-data-leak"
    ]
  },
  {
    "slug": "romulus-clickfix-delivers-new-rat-to-target-pcs-21c5eb00",
    "title": "ROMULUS ClickFix Delivers New RAT to Target PCs",
    "summary": "Threat actors used the ROMULUS ClickFix delivery platform to ship a previously undocumented remote access trojan that resembles CNCMachineRMS. The RAT leverages signed binary sideloading and can spy on users while granting full control over infected PCs. Defenders should block ClickFix traffic, enforce application whitelisting, and monitor for unusual outbound connections to mitigate this threat.",
    "category": "General",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/romulus-clickfix-attacks-deliver-rat.html",
    "publishedAt": "2026-11-20T07:11:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "romulus-clickfix-delivers-new-rat-to-target-pcs",
      "article-21c5eb00",
      "21c5eb00",
      "romulus-clickfix-delivers-new-rat-to-target-pcs-2a08f9"
    ]
  },
  {
    "slug": "armory-castle-exploits-vmware-vcenter-zero-day-d09439e5",
    "title": "Armory Castle Exploits VMware vCenter Zero-Day",
    "summary": "Armory Castle exploited a critical authentication bypass in VMware vCenter Server's Directory Service, allowing attackers to gain administrative access and exfiltrate data. The flaw, identified as CVE-2026-123890 with a CVSS score of 9.8, permits unauthenticated exploitation and can lead to full system compromise.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/china-linked-hackers-exploit-critical.html",
    "publishedAt": "2026-11-20T06:33:31.000Z",
    "cves": [
      "CVE-2026-123890"
    ],
    "additionalSources": [],
    "aliases": [
      "armory-castle-exploits-vmware-vcenter-zero-day",
      "article-d09439e5",
      "d09439e5",
      "armory-castle-exploits-vmware-vcenter-zero-day-162ba3"
    ]
  },
  {
    "slug": "ai-red-teams-uncover-repeated-prompt-injection-vul-56ee9906",
    "title": "AI Red Teams Uncover Repeated Prompt Injection Vulnerabilities",
    "summary": "Researchers found AI agents retrained on a larger prompt injection dataset were more susceptible to hijacking during red-team tests. The automated purple-teaming workflow revealed that repeated prompt injection attempts could bypass weaker defenses, exposing a logic flaw in the agents' instruction parsing. Security teams should review prompt handling logic and implement stricter input validation to mitigate injection risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/20/ai-prompt-injection-red-team/",
    "publishedAt": "2026-11-20T06:30:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-red-teams-uncover-repeated-prompt-injection-vul",
      "article-56ee9906",
      "56ee9906",
      "ai-red-teams-uncover-repeated-prompt-injection-vul-11add1",
      "ai-red-teams-uncover-repeated-prompt-injection-vulnerabiliti"
    ]
  },
  {
    "slug": "retire-vanity-security-dashboards-to-reduce-ticket-de96e946",
    "title": "Retire Vanity Security Dashboards to Reduce Ticket Noise",
    "summary": "Estée Lauder’s OT architect argues that vanity dashboards generate noise, causing analysts to close tickets without addressing root causes. The video shows a manufacturing example where approved maintenance work repeatedly triggers identical alerts, producing thousands of tickets and persistent issues. The speaker recommends SOC and control teams collaborate to tune alert logic and eliminate redundant notifications.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/20/security-dashboards-tips-video/",
    "publishedAt": "2026-11-20T06:00:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "retire-vanity-security-dashboards-to-reduce-ticket",
      "article-de96e946",
      "de96e946",
      "retire-vanity-security-dashboards-to-reduce-ticket-25df9c",
      "retire-vanity-security-dashboards-to-reduce-ticket-noise"
    ]
  },
  {
    "slug": "drupal-issues-patch-for-critical-unauthenticated-r-941cb5d1",
    "title": "Drupal Issues Patch for Critical Unauthenticated RCE",
    "summary": "Drupal released a security update on 18 Nov to address a critical unauthenticated RCE in its core installer, enabling attackers to reinstall and take over sites. The vulnerability, identified as CVE-2026-132165, allows remote code execution without authentication and can lead to full site takeover.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/drupal-fixes-critical-rce-flaw/",
    "publishedAt": "2026-11-20T05:52:19.000Z",
    "cves": [
      "CVE-2026-132165"
    ],
    "additionalSources": [],
    "aliases": [
      "drupal-issues-patch-for-critical-unauthenticated-r",
      "article-941cb5d1",
      "941cb5d1",
      "drupal-issues-patch-for-critical-unauthenticated-r-cc2ed7",
      "drupal-issues-patch-for-critical-unauthenticated-rce"
    ]
  },
  {
    "slug": "ai-agent-api-security-lagging-behind-production-de-ddc48e86",
    "title": "AI Agent API Security Lagging Behind Production Deployment",
    "summary": "Postman surveyed nearly 9,000 developers, finding that 25% already deploy AI agents that call APIs in production. About forty percent of respondents have not defined how to secure the credentials and identities used by these agents, creating access risks. Teams should implement key management and identity controls for AI agents before expanding production use.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/20/ai-agent-api-security-production/",
    "publishedAt": "2026-11-20T05:30:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agent-api-security-lagging-behind-production-de",
      "article-ddc48e86",
      "ddc48e86",
      "ai-agent-api-security-lagging-behind-production-de-188663",
      "ai-agent-api-security-lagging-behind-production-deployment"
    ]
  },
  {
    "slug": "fastunlock-zero-day-enables-program-execution-on-l-a9c8b601",
    "title": "FastUnlock Zero-Day Enables Program Execution on Locked PCs",
    "summary": "FastUnlock lets an attacker with physical access to a locked Windows PC launch programs without signing in. The flaw grants a limited user account, not administrator rights, and is demonstrated by researchers MSNightmare and Nightmare Eclipse. Microsoft has not yet patched FastUnlock; teams should enforce physical security and monitor for unauthorized program launches on locked systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/new-unpatched-windows-0-day-fastunlock.html",
    "publishedAt": "2026-11-20T05:30:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fastunlock-zero-day-enables-program-execution-on-l",
      "article-a9c8b601",
      "a9c8b601",
      "fastunlock-zero-day-enables-program-execution-on-l-7c0033",
      "fastunlock-zero-day-enables-program-execution-on-locked-pcs"
    ]
  },
  {
    "slug": "cios-report-limited-immediate-access-to-critical-g-db30f6be",
    "title": "CIOs Report Limited Immediate Access to Critical Gear",
    "summary": "An Opengear survey of 514 CIOs and CISOs found most organizations cannot quickly access secure management of network gear when the primary network fails. This gap hinders rapid containment during ransomware or disruptive updates, prolonging outages and increasing exposure to compromised systems. Organizations should implement out-of-band consoles or redundant paths and prioritize remote management solutions to ensure timely incident response.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/20/network-outage-recovery-resilience/",
    "publishedAt": "2026-11-20T05:00:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cios-report-limited-immediate-access-to-critical-g",
      "article-db30f6be",
      "db30f6be",
      "cios-report-limited-immediate-access-to-critical-g-5fed78",
      "cios-report-limited-immediate-access-to-critical-gear"
    ]
  },
  {
    "slug": "kpmg-canada-breach-exposes-client-tax-documents-6326d3e0",
    "title": "KPMG Canada Breach Exposes Client Tax Documents",
    "summary": "KPMG Canada confirmed that an unauthorized third party accessed confidential tax documents of some clients during a cyberattack. The breach involved sensitive client data, prompting immediate containment actions and system hardening by the firm. KPMG is contacting affected clients directly and has not disclosed the breach timing or number of impacted records.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/kpmg-canada-confirms-cyberattack/",
    "publishedAt": "2026-11-20T03:58:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kpmg-canada-breach-exposes-client-tax-documents",
      "article-6326d3e0",
      "6326d3e0",
      "kpmg-canada-breach-exposes-client-tax-documents-64d9c2"
    ]
  },
  {
    "slug": "usn-9182-1-nginx-vulnerabilities-a8c3fe4e",
    "title": "USN-9182-1: nginx vulnerabilities",
    "summary": "A remote attacker could possibly use this issue to cause nginx to crash, resulting in a denial of service. (CVE-2026-125283) Vivek Parikh discovered that nginx did not correctly handle parsing certain ClientHello messages. This issue was only addressed in Ubuntu 18.04 LTS, Ubuntu 20.04 LTS, Ubuntu 22.04 LTS, and Ubuntu 24.04 LTS. (CVE-2026-123640) It was discovered that nginx did not correctly handle certain TLS connections.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9182-1",
    "publishedAt": "2026-11-20T03:15:31.000Z",
    "cves": [
      "CVE-2026-125283",
      "CVE-2026-123640",
      "CVE-2026-118899"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9182-1-nginx-vulnerabilities",
      "article-a8c3fe4e",
      "a8c3fe4e",
      "usn-9182-1-nginx-vulnerabilities-7e77f9"
    ]
  },
  {
    "slug": "usn-9181-1-openjdk-8-vulnerabilities-bc5bc842",
    "title": "USN-9181-1: OpenJDK 8 vulnerabilities",
    "summary": "A remote attacker could possibly use this issue to read or modify sensitive data. (CVE-2026-114939) Nicholas Carlini discovered that the JSSE component of OpenJDK 8 did not correctly authorize users. A remote attacker could possibly use this issue to read or modify sensitive data. (CVE-2026-114946) In addition to security fixes, the updated packages contain bug fixes, new features, and possibly incompatible changes.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9181-1",
    "publishedAt": "2026-11-20T02:42:46.000Z",
    "cves": [
      "CVE-2026-114939",
      "CVE-2026-114946",
      "CVE-2026-114940",
      "CVE-2026-114943",
      "CVE-2026-114944"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9181-1-openjdk-8-vulnerabilities",
      "article-bc5bc842",
      "bc5bc842",
      "usn-9181-1-openjdk-8-vulnerabilities-7e77fd"
    ]
  },
  {
    "slug": "crac-jdk-21-vulnerabilities-expose-rce-and-dos-ris-df412a2b",
    "title": "CRaC JDK 21 Vulnerabilities Expose RCE and DoS Risks",
    "summary": "CVE-2026-114938 through CVE-2026-114941 affect CRaC JDK 21 components, allowing remote attackers to trigger denial-of-service or execute arbitrary code. The flaws arise from improper input validation, authentication, and authorization in compiler, JGSS, JSSE, and library modules, exposing sensitive data. Oracle released patches for JDK 21; administrators should apply the latest update or use the provided work-around to mitigate the vulnerabilities.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9179-1",
    "publishedAt": "2026-11-20T02:36:27.000Z",
    "cves": [
      "CVE-2026-114938",
      "CVE-2026-114941"
    ],
    "additionalSources": [],
    "aliases": [
      "crac-jdk-21-vulnerabilities-expose-rce-and-dos-ris",
      "article-df412a2b",
      "df412a2b",
      "crac-jdk-21-vulnerabilities-expose-rce-and-dos-ris-7e7853",
      "crac-jdk-21-vulnerabilities-expose-rce-and-dos-risks"
    ]
  },
  {
    "slug": "usn-9178-1-crac-jdk-17-vulnerabilities-05e93fd6",
    "title": "USN-9178-1: CRaC JDK 17 vulnerabilities",
    "summary": "A remote attacker could possibly use this issue to read or modify sensitive data. (CVE-2026-114939) Nicholas Carlini discovered that the JSSE component of CRaC JDK 17 did not correctly authorize users. A remote attacker could possibly use this issue to read or modify sensitive data. (CVE-2026-114820) In addition to security fixes, the updated packages contain bug fixes, new features, and possibly incompatible changes.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9178-1",
    "publishedAt": "2026-11-20T02:36:11.000Z",
    "cves": [
      "CVE-2026-114939",
      "CVE-2026-114820",
      "CVE-2026-114938",
      "CVE-2026-114940",
      "CVE-2026-114942",
      "CVE-2026-114943",
      "CVE-2026-114944",
      "CVE-2026-114945",
      "CVE-2026-114946",
      "CVE-2026-83374",
      "CVE-2026-83376",
      "CVE-2026-83380",
      "CVE-2026-83381",
      "CVE-2026-83387",
      "CVE-2026-83395",
      "CVE-2026-83400",
      "CVE-2026-87290",
      "CVE-2026-87292",
      "CVE-2026-87294",
      "CVE-2026-87367",
      "CVE-2026-91332",
      "CVE-2026-91334",
      "CVE-2026-91335",
      "CVE-2026-91373",
      "CVE-2026-91374",
      "CVE-2026-91375",
      "CVE-2026-91379",
      "CVE-2026-91380",
      "CVE-2026-91382",
      "CVE-2026-91394",
      "CVE-2026-91397",
      "CVE-2026-91398",
      "CVE-2026-91400",
      "CVE-2026-91403",
      "CVE-2026-91410",
      "CVE-2026-91415",
      "CVE-2026-91418",
      "CVE-2026-91451",
      "CVE-2026-91452",
      "CVE-2026-91453",
      "CVE-2026-91461",
      "CVE-2026-91462",
      "CVE-2026-91463",
      "CVE-2026-91464",
      "CVE-2026-91487",
      "CVE-2026-101516"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9178-1-crac-jdk-17-vulnerabilities",
      "article-05e93fd6",
      "05e93fd6",
      "usn-9178-1-crac-jdk-17-vulnerabilities-7e7857"
    ]
  },
  {
    "slug": "ubuntu-patches-multiple-flaws-in-crac-jdk-25-42713894",
    "title": "Ubuntu Patches Multiple Flaws in CRaC JDK 25",
    "summary": "Ubuntu released security updates addressing multiple vulnerabilities across the Compiler, JGSS, and JSSE components of CRaC JDK 25. The defects, including CVE-2026-114938, stem from improper input handling, authentication failures, and authorization bypasses that allow remote arbitrary code execution and data access. Administrators should apply updated JDK packages provided under Ubuntu Security Notice USN-9180-1 to eliminate exploitation risks.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9180-1",
    "publishedAt": "2026-11-20T02:34:22.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-patches-multiple-flaws-in-crac-jdk-25",
      "article-42713894",
      "42713894",
      "ubuntu-patches-multiple-flaws-in-crac-jdk-25-7e7801"
    ]
  },
  {
    "slug": "isc-stormcast-podcast-friday-nov-20-f7652e64",
    "title": "ISC Stormcast Podcast - Friday, Nov 20",
    "summary": "The SANS Internet Storm Center published its Friday Stormcast podcast on November 20, 2026, featuring a discussion of emerging threat trends and recent cyber incidents. The episode includes analysis of malware campaigns, phishing tactics, and defensive recommendations for security teams. Listeners can access the full recording and transcript via the ISC website under the Creative Commons license.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33538",
    "publishedAt": "2026-11-20T02:00:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isc-stormcast-podcast-friday-nov-20",
      "article-f7652e64",
      "f7652e64",
      "isc-stormcast-podcast-friday-nov-20-57dd81"
    ]
  },
  {
    "slug": "nginx2root-five-new-nginx-vulnerabilities-and-how-3b075a0f",
    "title": "nginx2root: Five new nginx vulnerabilities, and how Cloudflare protects origins from the worst of them",
    "summary": "Five memory corruption bugs in nginx, called nginx2root, can let an unauthenticated attacker run code on a server. Here’s how they work, and why origins behind Cloudflare's proxy are shielded from the most serious of these bugs.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/nginx2root/",
    "publishedAt": "2026-11-20T01:58:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nginx2root-five-new-nginx-vulnerabilities-and-how",
      "article-3b075a0f",
      "3b075a0f",
      "nginx2root-five-new-nginx-vulnerabilities-and-how-5a9547",
      "nginx2root-five-new-nginx-vulnerabilities-and-how-cloudflare"
    ]
  },
  {
    "slug": "cleared-windows-event-logs-retain-forensic-evtx-ev-88123b4a",
    "title": "Cleared Windows Event Logs Retain Forensic EVTX Evidence",
    "summary": "Arctic Wolf incident response analysts found that clearing a Windows Event Log does not erase the underlying EVTX file. Instead, the supposedly cleared events remain recoverable within that same file, preserving forensic artifacts for investigators. Defenders should parse EVTX records directly rather than relying only on the 'Event log cleared' record when reconstructing activity.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/blog/windows-event-log-cleared-think-outside-the-box/",
    "publishedAt": "2026-11-20T01:24:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cleared-windows-event-logs-retain-forensic-evtx-ev",
      "article-88123b4a",
      "88123b4a",
      "cleared-windows-event-logs-retain-forensic-evtx-ev-5b2eeb",
      "cleared-windows-event-logs-retain-forensic-evtx-evidence"
    ]
  },
  {
    "slug": "windows-11-narrator-zero-day-bypasses-bitlocker-38f54851",
    "title": "Windows 11 Narrator Zero-Day Bypasses BitLocker",
    "summary": "Microsoft disclosed a Windows 11 zero-day, FastUnlock, allowing a physical attacker to bypass the Narrator lock-screen and run code. The flaw permits local code execution on a locked PC, exposing it even with BitLocker enabled, but does not decrypt the drive. Microsoft released a patch in the November 2026 cumulative update; users should install it promptly.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/windows-11-narrator-lock-screen-0-day/",
    "publishedAt": "2026-11-20T01:00:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-11-narrator-zero-day-bypasses-bitlocker",
      "article-38f54851",
      "38f54851",
      "windows-11-narrator-zero-day-bypasses-bitlocker-181cc8"
    ]
  },
  {
    "slug": "pyjwt-flaw-enables-token-revocation-check-bypasses-1e2cd4f6",
    "title": "PyJWT Flaw Enables Token Revocation Check Bypasses",
    "summary": "Ubuntu issued a security notice addressing a cryptographic verification vulnerability discovered within the PyJWT Python library. The library improperly accepts non-canonical encodings of token signature segments, enabling remote attackers to bypass token revocation checks. Administrators should immediately deploy updated PyJWT packages distributed via Ubuntu Security Notice USN-9177-1 to mitigate unauthorized access risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9177-1",
    "publishedAt": "2026-11-20T00:45:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pyjwt-flaw-enables-token-revocation-check-bypasses",
      "article-1e2cd4f6",
      "1e2cd4f6",
      "pyjwt-flaw-enables-token-revocation-check-bypasses-7e785b"
    ]
  },
  {
    "slug": "china-linked-hackers-exploited-vmware-vcenter-zero-66c94797",
    "title": "China-Linked Hackers Exploited VMware vCenter Zero-Day Since September",
    "summary": "China-linked attackers exploited a VMware vCenter Server zero-day authentication bypass since September 2026, compromising administrative access across worldwide instances. The flaw enables unauthenticated remote code execution and VM data exfiltration without a public proof-of-concept. Broadcom patched vCenter on November 19, 2026; administrators must apply updates immediately and enforce least-privilege API controls. The flaw is tracked as CVE-2026-123890.",
    "category": "Nation State",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/vmware-patches-vcenter-zero-day-exploited-in-attacks-since-september/",
    "publishedAt": "2026-11-20T00:26:25.000Z",
    "cves": [
      "CVE-2026-123890"
    ],
    "additionalSources": [
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/hackers-exploit-vmware-vcenter-0-day/"
      }
    ],
    "aliases": [
      "china-linked-hackers-exploited-vmware-vcenter-zero",
      "article-66c94797",
      "66c94797",
      "china-linked-hackers-exploited-vmware-vcenter-zero-777544",
      "china-linked-hackers-exploited-vmware-vcenter-zero-day-since"
    ]
  },
  {
    "slug": "gitlab-recommends-immediate-upgrade-to-19-6-1-19-5-e3709a40",
    "title": "GitLab Recommends Immediate Upgrade to 19.6.1, 19.5.8, 19.4.10",
    "summary": "GitLab released patch versions 19.6.1, 19.5.8, and 19.4.10 to fix multiple high-severity vulnerabilities in self-managed Community and Enterprise Editions. The flaws involve internal code paths that could enable arbitrary code execution or privilege escalation, though no active exploitation has been reported. Affected installations should upgrade immediately; GitLab.com and Dedicated services already run the fixes, and no workarounds are needed.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "GitLab Security Releases",
    "sourceUrl": "https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-6-1-released/",
    "publishedAt": "2026-11-20T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gitlab-recommends-immediate-upgrade-to-19-6-1-19-5",
      "article-e3709a40",
      "e3709a40",
      "gitlab-recommends-immediate-upgrade-to-19-6-1-19-5-48fe15",
      "gitlab-recommends-immediate-upgrade-to-19-6-1-19-5-8-19-4-10"
    ]
  },
  {
    "slug": "ruby-regex-and-case-conversion-vulnerabilities-exp-3c5ea493",
    "title": "Ruby Regex and Case Conversion Vulnerabilities Expose RCE Risk",
    "summary": "Ruby maintainers released patches for seven memory-safety flaws in CRuby’s regex engine and string case conversion, including CVE-2026-132825, affecting Ruby versions before 4.0.10, 3.4.13, and 3.3.14. The bugs let unauthenticated actors crash, read memory, or execute code when processing third-party input, potentially exposing Rack-based apps like Rails and Sinatra. All affected releases should upgrade immediately.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-193-aws/",
    "publishedAt": "2026-11-19T23:06:34.000Z",
    "cves": [
      "CVE-2026-132825"
    ],
    "additionalSources": [],
    "aliases": [
      "ruby-regex-and-case-conversion-vulnerabilities-exp",
      "article-3c5ea493",
      "3c5ea493",
      "ruby-regex-and-case-conversion-vulnerabilities-exp-232711",
      "ruby-regex-and-case-conversion-vulnerabilities-expose-rce-ri"
    ]
  },
  {
    "slug": "google-expands-android-developer-verification-glob-04053fe7",
    "title": "Google Expands Android Developer Verification Globally in 2027",
    "summary": "Google will extend Android developer verification to every country starting January 2027, after checks in four countries. Unverified developers and unregistered apps will lose normal install experience on certified devices, beginning with seven distributors including Google Play, Galaxy Store, Honor, Oppo, Xiaomi, Transsion, and Vivo.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/20/android-developer-verification-power-users/",
    "publishedAt": "2026-11-19T23:03:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-expands-android-developer-verification-glob",
      "article-04053fe7",
      "04053fe7",
      "google-expands-android-developer-verification-glob-31cfa1",
      "google-expands-android-developer-verification-globally-in-20"
    ]
  },
  {
    "slug": "qwen-incidents-highlight-self-hosted-ai-control-ga-f12009c3",
    "title": "Qwen Incidents Highlight Self-Hosted AI Control Gaps",
    "summary": "Several incidents involving Qwen deployments show companies using self-hosted AI agents have an illusion of control over model behavior. The incidents demonstrate that businesses need stronger steering and readiness to enforce directions in production AI systems. Security teams should treat self-hosted model operations as a governance and monitoring problem, not assume deployment alone provides control.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/qwen-incidents-self-hosted-ai-models-stronger-steering",
    "publishedAt": "2026-11-19T22:40:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "qwen-incidents-highlight-self-hosted-ai-control-ga",
      "article-f12009c3",
      "f12009c3",
      "qwen-incidents-highlight-self-hosted-ai-control-ga-7906ed",
      "qwen-incidents-highlight-self-hosted-ai-control-gaps"
    ]
  },
  {
    "slug": "sbc-medical-group-data-breach-exposes-1-6-million-5c9214e3",
    "title": "SBC Medical Group Data Breach Exposes 1.6 Million Customers",
    "summary": "SBC Medical Group disclosed two incidents that exposed personal data of 1.6 million customers and employees, per a SEC filing. The breaches compromised sensitive identifiers and possibly health records, though the full extent of data accessed is not detailed. SBC notified affected parties, hired forensic investigators, and is tightening security controls to mitigate future risks.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-steal-data-of-16-million-sbc-medical-group-customers/",
    "publishedAt": "2026-11-19T22:25:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sbc-medical-group-data-breach-exposes-1-6-million",
      "article-5c9214e3",
      "5c9214e3",
      "sbc-medical-group-data-breach-exposes-1-6-million-71449e",
      "sbc-medical-group-data-breach-exposes-1-6-million-customers"
    ]
  },
  {
    "slug": "phpaftershell-exploits-enable-php-remote-code-exec-19e0a459",
    "title": "phpAfterShell Exploits Enable PHP Remote Code Execution",
    "summary": "phpAfterShell and other critical PHP vulnerabilities disclosed in the November release allow remote code execution when processing malicious input. The associated CVE-2026-126714 exploits a memory-safety flaw in PHP’s string handling, enabling unauthenticated actors to crash or execute arbitrary code. All PHP installations should apply the latest security patch or upgrade to a supported version immediately.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/phpaftershell-critical-php-rce-vulnerabilities-cve-2026-126714",
    "publishedAt": "2026-11-19T21:46:23.000Z",
    "cves": [
      "CVE-2026-126714"
    ],
    "additionalSources": [],
    "aliases": [
      "phpaftershell-exploits-enable-php-remote-code-exec",
      "article-19e0a459",
      "19e0a459",
      "phpaftershell-exploits-enable-php-remote-code-exec-5eb105",
      "phpaftershell-exploits-enable-php-remote-code-execution"
    ]
  },
  {
    "slug": "cve-2026-132607-gcm-authentication-tag-length-down-7e9731bf",
    "title": "CVE-2026-132607 - GCM authentication tag length downgrade in Amazon S3 Encryption Client for PHP",
    "summary": "Bulletin ID: 2026-191-AWS Publication Date: 11/19/2026 13:00 PM PST Description: We identified CVE-2026-132607, an issue in the decryption component of Amazon S3 Encryption Client for PHP in the AWS SDK for PHP. The client did not verify the length of the AES-GCM authentication tag recorded in an object's metadata.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-191-aws/",
    "publishedAt": "2026-11-19T21:46:07.000Z",
    "cves": [
      "CVE-2026-132607"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-132607-gcm-authentication-tag-length-down",
      "article-7e9731bf",
      "7e9731bf",
      "cve-2026-132607-gcm-authentication-tag-length-down-1fbd5f",
      "cve-2026-132607-gcm-authentication-tag-length-downgrade-in-a"
    ]
  },
  {
    "slug": "lawmakers-form-ai-safety-caucus-amid-security-conc-28d5b736",
    "title": "Lawmakers Form AI Safety Caucus Amid Security Concerns",
    "summary": "A new AI safety caucus was formed by lawmakers amid growing security concerns. The caucus includes seven Republicans out of 26 founders, highlighting bipartisan interest despite the White House's resistance to AI regulation. The group aims to develop guidelines and oversight mechanisms to address AI risks within federal policy and to coordinate with industry stakeholders.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/lawmakers-launch-new-ai-safety-caucus",
    "publishedAt": "2026-11-19T21:19:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "lawmakers-form-ai-safety-caucus-amid-security-conc",
      "article-28d5b736",
      "28d5b736",
      "lawmakers-form-ai-safety-caucus-amid-security-conc-189d73",
      "lawmakers-form-ai-safety-caucus-amid-security-concerns"
    ]
  },
  {
    "slug": "asus-issues-control-center-express-hard-coded-key-b92d6bf8",
    "title": "ASUS Issues Control Center Express Hard-Coded Key Fix",
    "summary": "ASUS released Control Center Express v1.7.29 to patch three critical flaws that could let remote attackers gain administrative control of the console and devices. The vulnerabilities stem from hard-coded cryptographic keys, enabling unauthorized privileged access and potential compromise of device configuration. Administrators should upgrade to v1.7.29, apply the patch, and audit device access controls to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/asus-warns-of-critical-hard-coded-key-flaw-in-control-center-express/",
    "publishedAt": "2026-11-19T21:15:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "asus-issues-control-center-express-hard-coded-key",
      "article-b92d6bf8",
      "b92d6bf8",
      "asus-issues-control-center-express-hard-coded-key-176faa",
      "asus-issues-control-center-express-hard-coded-key-fix"
    ]
  },
  {
    "slug": "ios-27-3-beta-2-release-notes-86f63df4",
    "title": "iOS 27.3 Beta 2 Release Notes",
    "summary": "Apple released iOS 27.3 beta 2 v2, with accompanying release notes available for download and further documentation. The update does not disclose specific security fixes or vulnerability mitigations, leaving the exact changes unspecified. Users should review the release notes and apply the update when ready, following standard beta testing procedures to ensure compatibility.",
    "category": "General",
    "severity": "LOW",
    "source": "Apple Security Updates",
    "sourceUrl": "https://developer.apple.com/news/releases/?id=11192026a",
    "publishedAt": "2026-11-19T21:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ios-27-3-beta-2-release-notes",
      "article-86f63df4",
      "86f63df4",
      "ios-27-3-beta-2-release-notes-5a1efe"
    ]
  },
  {
    "slug": "ipados-27-3-beta-2-release-notes-ed587d4c",
    "title": "iPadOS 27.3 Beta 2 Release Notes",
    "summary": "Apple released iPadOS 27.3 beta 2 v2, with accompanying release notes available for download and further documentation. The update does not disclose specific security fixes or vulnerability mitigations, leaving the exact changes unspecified. Users should review the release notes and apply the update when ready, following standard beta testing procedures to ensure compatibility.",
    "category": "General",
    "severity": "LOW",
    "source": "Apple Security Updates",
    "sourceUrl": "https://developer.apple.com/news/releases/?id=11192026b",
    "publishedAt": "2026-11-19T21:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ipados-27-3-beta-2-release-notes",
      "article-ed587d4c",
      "ed587d4c",
      "ipados-27-3-beta-2-release-notes-5a1efe"
    ]
  },
  {
    "slug": "norwegian-energy-firm-breached-twice-within-two-da-d13b3a7b",
    "title": "Norwegian Energy Firm Breached Twice Within Two Days",
    "summary": "A second Norwegian energy company suffered a breach within two days of the first incident, raising concerns about resilience. Investigators have not linked the two attacks, though both incidents exhibit similar patterns, suggesting a possible shared threat actor or technique. Security teams should monitor for related indicators, apply defensive controls promptly, and coordinate with cybersecurity agencies to mitigate further risk.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/second-norwegian-energy-company-breached",
    "publishedAt": "2026-11-19T20:14:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "norwegian-energy-firm-breached-twice-within-two-da",
      "article-d13b3a7b",
      "d13b3a7b",
      "norwegian-energy-firm-breached-twice-within-two-da-280ffa",
      "norwegian-energy-firm-breached-twice-within-two-days"
    ]
  },
  {
    "slug": "usn-9176-1-ruby-vulnerabilities-4cae983c",
    "title": "USN-9176-1: Ruby vulnerabilities",
    "summary": "An attacker could possibly use this issue to cause a denial of service or execute arbitrary code. (GHSA-34m4-m9fh-gqp5) Owais Lone discovered that Ruby incorrectly handled compiling certain large regular expressions. An attacker could possibly use this issue to cause a denial of service or execute arbitrary code. (GHSA-3p8q-wmhx-vm2w) Stephan Lipp discovered that Ruby incorrectly handled converting certain regular expressions to strings.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9176-1",
    "publishedAt": "2026-11-19T20:07:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9176-1-ruby-vulnerabilities",
      "article-4cae983c",
      "4cae983c",
      "usn-9176-1-ruby-vulnerabilities-7e785f"
    ]
  },
  {
    "slug": "rhsa-2026-100717-low-edk2-security-update-e2f85032",
    "title": "RHSA-2026:100717: Low: edk2 security update",
    "summary": "An update for edk2 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Low. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100717",
    "publishedAt": "2026-11-19T20:03:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100717-low-edk2-security-update",
      "article-e2f85032",
      "e2f85032",
      "rhsa-2026-100717-low-edk2-security-update-2ee088"
    ]
  },
  {
    "slug": "vim-security-update-released-for-rhel9-f4daa8ef",
    "title": "vim security update released for RHEL9",
    "summary": "A vulnerability in vim on RHEL9 was identified, prompting Red Hat to issue an update. The flaw, rated Important, lacks a public CVE identifier but is documented with CVSS scores in the advisory references. Red Hat recommends applying the patch immediately to mitigate potential exploitation; no workarounds are provided today.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100487",
    "publishedAt": "2026-11-19T20:03:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vim-security-update-released-for-rhel9",
      "article-f4daa8ef",
      "f4daa8ef",
      "vim-security-update-released-for-rhel9-2ee07d"
    ]
  },
  {
    "slug": "rhsa-2026-100549-important-container-tools-rhel8-s-7b4fe718",
    "title": "RHSA-2026:100549: Important: container-tools:rhel8 security, bug fix, and enhancement update",
    "summary": "An update for the container-tools:rhel8 module is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100549",
    "publishedAt": "2026-11-19T20:02:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100549-important-container-tools-rhel8-s",
      "article-7b4fe718",
      "7b4fe718",
      "rhsa-2026-100549-important-container-tools-rhel8-s-2ee081",
      "rhsa-2026-100549-important-container-tools-rhel8-security-bu"
    ]
  },
  {
    "slug": "rhsa-2026-100486-important-vim-security-update-6d8680ec",
    "title": "RHSA-2026:100486: Important: vim security update",
    "summary": "An update for vim is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100486",
    "publishedAt": "2026-11-19T20:01:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100486-important-vim-security-update",
      "article-6d8680ec",
      "6d8680ec",
      "rhsa-2026-100486-important-vim-security-update-2ee07d"
    ]
  },
  {
    "slug": "rhsa-2026-100484-important-acl-security-update-14497d80",
    "title": "RHSA-2026:100484: Important: acl security update",
    "summary": "An update for acl is now available for Red Hat Enterprise Linux 6 Extended Lifecycle Support - EXTENSION. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100484",
    "publishedAt": "2026-11-19T20:00:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100484-important-acl-security-update",
      "article-14497d80",
      "14497d80",
      "rhsa-2026-100484-important-acl-security-update-2ee07d"
    ]
  },
  {
    "slug": "red-hat-issues-python-urllib3-security-update-e85bf29e",
    "title": "Red Hat Issues Python-urllib3 Security Update",
    "summary": "Python-urllib3 library in RHEL 8.6 receives a security update for both Advanced Mission Critical Update Support and Extended Update Support Long-Life Add-On. The update addresses multiple vulnerabilities identified by Red Hat Product Security, each with a CVSS base score listed in the CVE references. Red Hat recommends applying the update immediately via the standard package manager; no workarounds are provided.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100503",
    "publishedAt": "2026-11-19T19:59:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-python-urllib3-security-update",
      "article-e85bf29e",
      "e85bf29e",
      "red-hat-issues-python-urllib3-security-update-2ee080"
    ]
  },
  {
    "slug": "red-hat-issues-xorg-x11-server-update-5e57708a",
    "title": "Red Hat Issues Xorg-X11 Server Update",
    "summary": "Xorg-X11 server in RHEL 8.8 receives a security update for both SAP Solutions Update Services and Telecommunications Update Service. The update patches multiple vulnerabilities identified by Red Hat Product Security, each with a CVSS base score provided in the CVE references. Red Hat advises applying the update promptly through the standard package manager; no additional workarounds are required.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100499",
    "publishedAt": "2026-11-19T19:59:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-xorg-x11-server-update",
      "article-5e57708a",
      "5e57708a",
      "red-hat-issues-xorg-x11-server-update-2ee07e"
    ]
  },
  {
    "slug": "seven-critical-php-flaws-expose-rce-risks-7dbeb1d4",
    "title": "Seven Critical PHP Flaws Expose RCE Risks",
    "summary": "Seven critical PHP flaws that enable remote code execution have been identified, prompting a patch release from the PHP development team. Exploitability depends on server configuration, with some flaws requiring authenticated access or specific input handling, and no widespread exploitation has been reported. Administrators should apply the latest PHP patch immediately and review configuration settings to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/application-security/critical-php-flaws-code-execution-panic-php2shell",
    "publishedAt": "2026-11-19T19:57:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "seven-critical-php-flaws-expose-rce-risks",
      "article-7dbeb1d4",
      "7dbeb1d4",
      "seven-critical-php-flaws-expose-rce-risks-7d395d"
    ]
  }
];
