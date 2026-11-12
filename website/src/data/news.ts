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
    "slug": "google-cloud-warns-three-amd-turin-cpu-flaws-could-4a39446f",
    "title": "Google Cloud Warns Three AMD Turin CPU Flaws Could Leak Data Across Processes in VMs",
    "summary": "Google Cloud VMs on AMD Turin chips need a guest OS patch and a stop-and-start to protect against three CPU side-channel flaws, Google said this week. Inside a VM, the flaws may let an attacker with code on the same processor core infer data from other processes or the kernel.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/google-cloud-warns-three-amd-turin-cpu.html",
    "publishedAt": "2026-11-12T12:09:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-cloud-warns-three-amd-turin-cpu-flaws-could",
      "article-4a39446f",
      "4a39446f",
      "google-cloud-warns-three-amd-turin-cpu-flaws-could-2556d8",
      "google-cloud-warns-three-amd-turin-cpu-flaws-could-leak-data"
    ]
  },
  {
    "slug": "exploit-attempts-for-gpustack-authentication-bypas-2ccd9424",
    "title": "Exploit Attempts for GPUStack Authentication Bypass (CVE-2026-102895), (Thu, Nov 12th)",
    "summary": "CVE-2026-102895 is a trivial authentication-bypass vulnerability. All versions of GPUStack prior to 2.2.0, which was released at the end of June. This vulnerability was not made public until the end of July, and the CVE was assigned on November 4th.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33514",
    "publishedAt": "2026-11-12T11:56:24.000Z",
    "cves": [
      "CVE-2026-102895"
    ],
    "additionalSources": [],
    "aliases": [
      "exploit-attempts-for-gpustack-authentication-bypas",
      "article-2ccd9424",
      "2ccd9424",
      "exploit-attempts-for-gpustack-authentication-bypas-57dd81",
      "exploit-attempts-for-gpustack-authentication-bypass-cve-2026"
    ]
  },
  {
    "slug": "rhel-10-receives-rpm-security-update-db6fc407",
    "title": "RHEL 10 Receives RPM Security Update",
    "summary": "Red Hat released a security update for rpm on Red Enterprise Linux 10, addressing multiple vulnerabilities. The advisory rates the update as Moderate, with CVSS base scores available via CVE links in the references. Defenders should apply the rpm patch to mitigate the identified critical weaknesses and maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99595",
    "publishedAt": "2026-11-12T11:55:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel-10-receives-rpm-security-update",
      "article-db6fc407",
      "db6fc407",
      "rhel-10-receives-rpm-security-update-37d670"
    ]
  },
  {
    "slug": "new-n-central-exploits-work-against-patched-server-3cdeda99",
    "title": "New N-central Exploits Work Against Patched Servers, Enable Root RCE and Windows SYSTEM Access",
    "summary": "N-able on Thursday said it's investigating a new public disclosure containing claims of additional vulnerabilities in on-premise versions of N-central running version 2026.4.1 HF2. \"Based on our initial review, the server issue described depends on a non-default configuration in which the Legacy API is turned on and exposed to the public internet,\" N-able said in a new advisory.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/new-n-central-exploits-work-against.html",
    "publishedAt": "2026-11-12T11:51:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "new-n-central-exploits-work-against-patched-server",
      "article-3cdeda99",
      "3cdeda99",
      "new-n-central-exploits-work-against-patched-server-26eb1d",
      "new-n-central-exploits-work-against-patched-servers-enable-r"
    ]
  },
  {
    "slug": "calendar-invites-and-live-proxies-inside-a-google-66b0515c",
    "title": "Calendar Invites and Live Proxies: Inside a Google Session Hijacking Campaign",
    "summary": "Since mid-August 2026, a phishing operation has been stealing live Google sessions from corporate users. Every check defenders normally lean on to judge a link came back clean, and the operator designed it that way on purpose.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/calendar-invites-and-live-proxies.html",
    "publishedAt": "2026-11-12T11:51:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "calendar-invites-and-live-proxies-inside-a-google",
      "article-66b0515c",
      "66b0515c",
      "calendar-invites-and-live-proxies-inside-a-google-77cfe0",
      "calendar-invites-and-live-proxies-inside-a-google-session-hi"
    ]
  },
  {
    "slug": "rhel-10-receives-cockpit-security-update-42a4e100",
    "title": "RHEL 10 Receives Cockpit Security Update",
    "summary": "Red Hat issued a security update for cockpit on Red Enterprise Linux 10, addressing several vulnerabilities. The advisory rates the update as Important, with CVSS base scores linked to CVE references for each flaw. Defenders should apply the cockpit patch promptly to prevent exploitation and preserve critical system security overall.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99600",
    "publishedAt": "2026-11-12T11:44:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel-10-receives-cockpit-security-update",
      "article-42a4e100",
      "42a4e100",
      "rhel-10-receives-cockpit-security-update-37d66d"
    ]
  },
  {
    "slug": "rhsa-2026-99603-important-cockpit-security-update-73dbfc57",
    "title": "RHSA-2026:99603: Important: cockpit security update",
    "summary": "An update for cockpit is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99603",
    "publishedAt": "2026-11-12T11:40:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99603-important-cockpit-security-update",
      "article-73dbfc57",
      "73dbfc57",
      "rhsa-2026-99603-important-cockpit-security-update-37d66d"
    ]
  },
  {
    "slug": "rhsa-2026-99597-important-gdb-security-update-d3892dd9",
    "title": "RHSA-2026:99597: Important: gdb security update",
    "summary": "An update for gdb is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99597",
    "publishedAt": "2026-11-12T11:38:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99597-important-gdb-security-update",
      "article-d3892dd9",
      "d3892dd9",
      "rhsa-2026-99597-important-gdb-security-update-37d670"
    ]
  },
  {
    "slug": "ptc-patches-critical-windchill-and-flexplm-flaw-th-44a3192a",
    "title": "PTC Patches Critical Windchill and FlexPLM Flaw That Could Enable Remote Code Execution",
    "summary": "PTC has released patches for a new critical vulnerability impacting Windchill and FlexPLM software that, if successfully exploited, could result in remote code execution. The security flaw, tracked as CVE-2026-126325, carries a CVSS v4 score of 9.2 out of a maximum of 10.0.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/ptc-patches-critical-windchill-and.html",
    "publishedAt": "2026-11-12T11:33:15.000Z",
    "cves": [
      "CVE-2026-126325"
    ],
    "additionalSources": [],
    "aliases": [
      "ptc-patches-critical-windchill-and-flexplm-flaw-th",
      "article-44a3192a",
      "44a3192a",
      "ptc-patches-critical-windchill-and-flexplm-flaw-th-58ca3b",
      "ptc-patches-critical-windchill-and-flexplm-flaw-that-could-e"
    ]
  },
  {
    "slug": "ai-scripts-enable-rapid-lateral-movement-in-retail-9f16049b",
    "title": "AI Scripts Enable Rapid Lateral Movement in Retail Breach",
    "summary": "An attacker used AI-generated scripts after hand-typed commands failed to breach a US retailer. The AI scripts facilitated lateral movement within minutes, indicating a rapid compromise of internal systems and exposing sensitive data. Security teams should investigate compromised accounts, isolate affected segments, review AI-based attack mitigations, and strengthen monitoring immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/inside-ai-attack-us-retailer",
    "publishedAt": "2026-11-12T11:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-scripts-enable-rapid-lateral-movement-in-retail",
      "article-9f16049b",
      "9f16049b",
      "ai-scripts-enable-rapid-lateral-movement-in-retail-4698c6",
      "ai-scripts-enable-rapid-lateral-movement-in-retail-breach"
    ]
  },
  {
    "slug": "screenconnect-extension-vulnerability-enables-malw-bf3d797c",
    "title": "ScreenConnect Extension Vulnerability Enables Malware",
    "summary": "Hackers exploited a flaw in a legitimate ScreenConnect extension to bypass authentication and deploy malware. The flaw lets attackers bypass ScreenConnect’s login controls, granting unauthorized session access; no CVE is listed and exploitation is confined to the extension. ScreenConnect has released an update patching the extension; administrators should apply the latest version and verify extension integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/hackers-deploy-malware-in-fresh-screenconnect-campaign/",
    "publishedAt": "2026-11-12T10:39:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "screenconnect-extension-vulnerability-enables-malw",
      "article-bf3d797c",
      "bf3d797c",
      "screenconnect-extension-vulnerability-enables-malw-6fa0ce",
      "screenconnect-extension-vulnerability-enables-malware"
    ]
  },
  {
    "slug": "red-hat-issues-openssh-security-update-418db160",
    "title": "Red Hat Issues OpenSSH Security Update",
    "summary": "Red Hat released an OpenSSH update for RHEL 8.4 Advanced Mission Critical and Extended Update Support, addressing multiple SSH vulnerabilities. Each flaw’s CVSS base score is listed in the references, indicating severity ranges but no confirmed exploitation. Apply the patch immediately to prevent potential remote code execution and maintain SSH service integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99573",
    "publishedAt": "2026-11-12T10:00:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-openssh-security-update",
      "article-418db160",
      "418db160",
      "red-hat-issues-openssh-security-update-37d670"
    ]
  },
  {
    "slug": "n-able-rushes-patches-for-exploited-n-central-zero-e8c9811c",
    "title": "N-able Rushes Patches for Exploited N-central Zero-Days",
    "summary": "Threat actors are actively targeting zero-day vulnerabilities within N-able N-central remote management software following recent public disclosures. The malicious campaign surfaced shortly after a security researcher publicly dropped over 30 zero-day flaws affecting the enterprise management platform. In response to active threat activity, N-able released urgent patches specifically addressing the unauthenticated security vulnerabilities.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/hackers-target-n-central-zero-days-as-n-able-rushes-patches/",
    "publishedAt": "2026-11-12T09:39:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-rushes-patches-for-exploited-n-central-zero",
      "article-e8c9811c",
      "e8c9811c",
      "n-able-rushes-patches-for-exploited-n-central-zero-208753",
      "n-able-rushes-patches-for-exploited-n-central-zero-days"
    ]
  },
  {
    "slug": "threat-actors-use-gsocket-for-persistent-linux-acc-27a2cc2c",
    "title": "Threat Actors Use GSocket for Persistent Linux Access",
    "summary": "Threat actors use the open‑source remote tool GSocket to keep access on Linux servers after patching initial exploitation vulnerabilities. This persistence method lets attackers re‑establish control even when known flaws are fixed, bypassing patch‑based defenses. Defenders should detect GSocket binaries, enforce whitelisting, and apply vendor patches to close this vector.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-plant-gsocket-on-linux-servers-for-persistent-access/",
    "publishedAt": "2026-11-12T09:38:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "threat-actors-use-gsocket-for-persistent-linux-acc",
      "article-27a2cc2c",
      "27a2cc2c",
      "threat-actors-use-gsocket-for-persistent-linux-acc-4192a0",
      "threat-actors-use-gsocket-for-persistent-linux-access"
    ]
  },
  {
    "slug": "red-hat-issues-libx11-security-update-for-rhel-8-8-2ee8cd62",
    "title": "Red Hat Issues libX11 Security Update for RHEL 8.8",
    "summary": "Red Hat released a libX11 security update for RHEL 8.8 SAP and Telecommunications services, fixing multiple X11 client library vulnerabilities. The patch is rated Important, with CVSS base scores provided via CVE references, though no active exploitation has been reported. Red Hat advises immediate installation to prevent potential privilege escalation or denial-of-service attacks stemming from the affected functions.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99565",
    "publishedAt": "2026-11-12T09:32:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-libx11-security-update-for-rhel-8-8",
      "article-2ee8cd62",
      "2ee8cd62",
      "red-hat-issues-libx11-security-update-for-rhel-8-8-37d670"
    ]
  },
  {
    "slug": "red-hat-issues-libx11-update-for-rhel-8-6-support-ecf27d5a",
    "title": "Red Hat Issues libX11 Update for RHEL 8.6 Support",
    "summary": "Red Hat issued a libX11 security update for RHEL 8.6 Advanced Mission Critical and Extended Update Support, fixing several X11 client library flaws. The update is rated Important, with CVSS scores via CVE links, but no active exploitation has been seen. Red Hat recommends applying the patch promptly to mitigate privilege escalation or denial-of-service risks from the affected functions.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99566",
    "publishedAt": "2026-11-12T09:28:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-libx11-update-for-rhel-8-6-support",
      "article-ecf27d5a",
      "ecf27d5a",
      "red-hat-issues-libx11-update-for-rhel-8-6-support-37d670"
    ]
  },
  {
    "slug": "mongodb-cve-2026-118383-causes-failover-crashes-31c90438",
    "title": "MongoDB CVE-2026-118383 Causes Failover Crashes",
    "summary": "A pre‑authentication flaw in MongoDB Server (CVE‑2026‑118383) lets attackers send two crafted requests that crash the database when a lagging replica is promoted to primary. The crash occurs only if the server still lacks recent changes, making failover a trigger for the denial‑of‑service condition. MongoDB released patched versions earlier this week; administrators should upgrade immediately to prevent service disruption.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/critical-pre-auth-mongodb-flaw-cve-2026.html",
    "publishedAt": "2026-11-12T09:25:00.000Z",
    "cves": [
      "CVE-2026-118383"
    ],
    "additionalSources": [],
    "aliases": [
      "mongodb-cve-2026-118383-causes-failover-crashes",
      "article-31c90438",
      "31c90438",
      "mongodb-cve-2026-118383-causes-failover-crashes-5586e8"
    ]
  },
  {
    "slug": "github-repos-hit-by-credential-stealing-malware-8980ad05",
    "title": "GitHub Repos Hit by Credential‑Stealing Malware",
    "summary": "A threat actor used stolen GitHub credentials to push a credential‑stealing payload into tens of thousands of repositories since November 10, targeting GitHub Actions secrets. In 1,800 repositories, the malware ran and exfiltrated secrets; Aikido named the campaign wfx‑loot and identified 4,837 compromised accounts. Users should revoke compromised tokens, audit repository access, and enable multi‑factor authentication to stop further theft.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/12/wfx-loot-github-actions-secret-stealer/",
    "publishedAt": "2026-11-12T09:24:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "github-repos-hit-by-credential-stealing-malware",
      "article-8980ad05",
      "8980ad05",
      "github-repos-hit-by-credential-stealing-malware-6f9485"
    ]
  },
  {
    "slug": "red-hat-quay-flaw-enables-private-image-theft-d1443023",
    "title": "Red Hat Quay Flaw Enables Private Image Theft",
    "summary": "A critical flaw in Red Hat Quay lets attackers steal private container images, overwrite repositories, and maintain persistent access. The vulnerability permits unauthorized read and write operations on image repositories, potentially exposing sensitive code and facilitating further lateral movement. Red Hat recommends applying the latest Quay patch or upgrading to a supported version to stop data exfiltration.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/critical-red-hat-quay-vulnerability-could-expose-private-container-images/",
    "publishedAt": "2026-11-12T09:23:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-quay-flaw-enables-private-image-theft",
      "article-d1443023",
      "d1443023",
      "red-hat-quay-flaw-enables-private-image-theft-3bd886"
    ]
  },
  {
    "slug": "maersk-data-theft-confirmed-by-whitearmor-7013f1c7",
    "title": "Maersk Data Theft Confirmed by WhiteArmor",
    "summary": "WhiteArmor ransomware group claims to have stolen 100GB of data from Maersk during a $5 million extortion attempt. The breach involved exfiltration of shipping‑industry operational data, but no evidence shows ransomware execution or system compromise. Maersk should conduct a forensic investigation, reset compromised credentials, and strengthen access controls to mitigate further exfiltration.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/maersk-confirms-data-theft-amid-5-million-extortion-attempt/",
    "publishedAt": "2026-11-12T08:38:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "maersk-data-theft-confirmed-by-whitearmor",
      "article-7013f1c7",
      "7013f1c7",
      "maersk-data-theft-confirmed-by-whitearmor-3e04dc"
    ]
  },
  {
    "slug": "net-11-introduces-supply-chain-security-enhanceme-603ed7a2",
    "title": ".NET 11 Introduces Supply Chain Security Enhancements",
    "summary": "Microsoft released .NET 11, a Standard Term Support release, adding C# 15, ASP.NET Core, .NET MAUI, and Windows development features. The update introduces changes to software supply chain integrity, authentication handling, and platform lifecycle to reduce future attack vectors. Defenders should adopt .NET 11 and plan migrations from unsupported .NET 8/9 to benefit from these security improvements.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/12/net-11-security-changes/",
    "publishedAt": "2026-11-12T08:23:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "net-11-introduces-supply-chain-security-enhanceme",
      "article-603ed7a2",
      "603ed7a2",
      "net-11-introduces-supply-chain-security-enhanceme-2b5a01",
      "net-11-introduces-supply-chain-security-enhancements"
    ]
  },
  {
    "slug": "node-js-http-2-flaws-crash-servers-leak-data-95e8fd61",
    "title": "Node.js HTTP/2 Flaws Crash Servers, Leak Data",
    "summary": "Unauthenticated clients can crash Node.js servers using HTTP/2 on 24.x and 26.x lines, and a second flaw leaks memory containing responses for other connections. The flaw stems from improper HTTP/2 frame handling, enabling denial of service and cross‑connection data exposure without authentication. Node.js released patched versions 22.23.5, 24.22.3, and 26.13.1; upgrade immediately to stop crashes and leaks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/nodejs-fixes-16-flaws-including-http2.html",
    "publishedAt": "2026-11-12T08:20:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "node-js-http-2-flaws-crash-servers-leak-data",
      "article-95e8fd61",
      "95e8fd61",
      "node-js-http-2-flaws-crash-servers-leak-data-160886"
    ]
  },
  {
    "slug": "github-accounts-hijacked-secret-stealing-malware-d-3a685923",
    "title": "GitHub Accounts Hijacked, Secret-Stealing Malware Deployed",
    "summary": "A threat actor hijacked 4,837 GitHub accounts and pushed a secret‑stealing payload into 61,764 repositories, targeting secrets in GitHub Actions. The actor used stolen credentials to gain unauthenticated write access, enabling malware to exfiltrate CI pipeline secrets without user interaction. GitHub issued a security advisory, urging token revocation, two‑factor authentication, and repository scans for malicious code.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/github-accounts/",
    "publishedAt": "2026-11-12T08:15:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "github-accounts-hijacked-secret-stealing-malware-d",
      "article-3a685923",
      "3a685923",
      "github-accounts-hijacked-secret-stealing-malware-d-71b926",
      "github-accounts-hijacked-secret-stealing-malware-deployed"
    ]
  },
  {
    "slug": "palo-alto-pan-os-enables-root-code-execution-291262c4",
    "title": "Palo Alto PAN-OS Enables Root Code Execution",
    "summary": "A PAN-OS Panorama RCE flaw lets authenticated admins run arbitrary code with root privileges. CVE-2026-0330 exploits improper privilege checks during configuration, enabling full system compromise; no public exploit yet. Apply the critical November 11 patch for Panorama and update Cloud NGFW, Prisma Access, and standalone PAN-OS immediately in all affected environments.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/palo-alto-networks-pan-os-rce-vulnerability/",
    "publishedAt": "2026-11-12T08:09:33.000Z",
    "cves": [
      "CVE-2026-0330"
    ],
    "additionalSources": [],
    "aliases": [
      "palo-alto-pan-os-enables-root-code-execution",
      "article-291262c4",
      "291262c4",
      "palo-alto-pan-os-enables-root-code-execution-6d5f41"
    ]
  },
  {
    "slug": "pci-dss-4-0-compliance-tool-rankings-released-c2ea2380",
    "title": "PCI DSS 4.0 Compliance Tool Rankings Released",
    "summary": "Cyber Security News released a comparative guide evaluating ten top compliance platforms designed for PCI DSS 4.x standards. The analysis reviews platforms across scope-reduction architecture, continuous technical controls, merchant management, and Qualified Security Assessor assessment automation stacks. Organizations subject to payment card security standards should review these tool benchmarks to streamline audit preparation and continuous control compliance.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/top-10-best-pci-dss-compliance-tools-in-2026-ranked-scored-best-pci-dss-compliance-tools/",
    "publishedAt": "2026-11-12T07:39:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pci-dss-4-0-compliance-tool-rankings-released",
      "article-c2ea2380",
      "c2ea2380",
      "pci-dss-4-0-compliance-tool-rankings-released-544998"
    ]
  },
  {
    "slug": "cyber-security-news-ranks-top-risk-management-plat-ea8b549b",
    "title": "Cyber Security News Ranks Top Risk Management Platforms",
    "summary": "Cyber Security News published a review ranking ten leading IT and cybersecurity risk management platforms for enterprise governance. The evaluation scored tools based on workflow effectiveness, tracking risk intake, treatment, exception management, and financial risk quantification capabilities. Security teams can evaluate these platform rankings to optimize risk register tracking, streamline accountability, and improve overall risk remediation workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/best-it-cyber-risk-tools/",
    "publishedAt": "2026-11-12T07:35:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cyber-security-news-ranks-top-risk-management-plat",
      "article-ea8b549b",
      "ea8b549b",
      "cyber-security-news-ranks-top-risk-management-plat-44a65b",
      "cyber-security-news-ranks-top-risk-management-platforms"
    ]
  },
  {
    "slug": "github-discusses-accountability-for-ai-patch-flaws-8806da92",
    "title": "GitHub Discusses Accountability for AI Patch Flaws",
    "summary": "GitHub’s Agentic Autofix can fix one vulnerability while creating another, raising accountability questions for patches. The tool re‑runs detection engines and project tests after patching, but can miss side effects, requiring validation and metric monitoring. Security teams should adjust CISO policies before deploying the agent, select models, and apply continuous testing to mitigate flaws.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/12/marcelo-oliveira-github-agentic-autofix/",
    "publishedAt": "2026-11-12T07:00:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "github-discusses-accountability-for-ai-patch-flaws",
      "article-8806da92",
      "8806da92",
      "github-discusses-accountability-for-ai-patch-flaws-537beb"
    ]
  },
  {
    "slug": "hackers-abuse-windows-group-policy-to-deploy-citru-d80c4fa9",
    "title": "Hackers Abuse Windows Group Policy to Deploy Citrus Ransomware and Disable Microsoft Defender",
    "summary": "A new ransomware group called Citrus is using Windows Group Policy to push its malware across entire company networks and switch off Microsoft Defender first. Group Policy is a trusted Windows tool that admins use to manage many computers at once.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-abuse-windows-group-policy/",
    "publishedAt": "2026-11-12T06:46:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-abuse-windows-group-policy-to-deploy-citru",
      "article-d80c4fa9",
      "d80c4fa9",
      "hackers-abuse-windows-group-policy-to-deploy-citru-5ff205",
      "hackers-abuse-windows-group-policy-to-deploy-citrus-ransomwa"
    ]
  },
  {
    "slug": "attacker-used-4-837-hijacked-github-accounts-to-ru-9de107bb",
    "title": "Attacker Used 4,837 Hijacked GitHub Accounts to Run a CI Secret Stealer in 1,806+ Repositories",
    "summary": "Starting Tuesday, an attacker used stolen credentials for 4,837 GitHub accounts to plant a secret stealer in repositories those accounts could write to, according to Aikido Security, a security software company. The stealer is built to take the secrets and cloud credentials that a repository's CI workflows can reach.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/4837-hijacked-github-accounts-ran-ci.html",
    "publishedAt": "2026-11-12T06:42:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "attacker-used-4-837-hijacked-github-accounts-to-ru",
      "article-9de107bb",
      "9de107bb",
      "attacker-used-4-837-hijacked-github-accounts-to-ru-13a496",
      "attacker-used-4-837-hijacked-github-accounts-to-run-a-ci-sec"
    ]
  },
  {
    "slug": "red-hat-freerdp-update-addresses-important-vulnera-e4671609",
    "title": "Red Hat Freerdp Update Addresses Important Vulnerability",
    "summary": "Red Hat released a security update for the freerdp component on its Enterprise Linux 10.0 Extended Update Support platform. The update addresses an important vulnerability, rated by Red Hat as Important, though the specific CVE identifiers are not listed in the advisory. Users should apply the update immediately to mitigate potential exploitation risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99516",
    "publishedAt": "2026-11-12T06:33:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-freerdp-update-addresses-important-vulnera",
      "article-e4671609",
      "e4671609",
      "red-hat-freerdp-update-addresses-important-vulnera-37d671",
      "red-hat-freerdp-update-addresses-important-vulnerability"
    ]
  },
  {
    "slug": "red-hat-httpd-2-4-update-covers-important-vulnerab-6bc501bd",
    "title": "Red Hat httpd:2.4 Update Covers Important Vulnerability",
    "summary": "Red Hat released a security update for the httpd:2.4 module on Enterprise Linux 8.6 Advanced Mission Critical and Extended Update Support platforms. The advisory marks the update as Important, implying a CVSS score in the 7.0-8.9 range, though specific CVE IDs are not listed. Users should apply the update immediately to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99514",
    "publishedAt": "2026-11-12T06:13:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-httpd-2-4-update-covers-important-vulnerab",
      "article-6bc501bd",
      "6bc501bd",
      "red-hat-httpd-2-4-update-covers-important-vulnerab-37d671",
      "red-hat-httpd-2-4-update-covers-important-vulnerability"
    ]
  },
  {
    "slug": "red-hat-releases-important-update-for-httpd-2-4-4c245b5a",
    "title": "Red Hat Releases Important Update for httpd:2.4",
    "summary": "Red Hat issued an important security update for the httpd:2.4 module on RHEL 8.4 AMCS and EUS LLA platforms. The update addresses multiple vulnerabilities with CVSS scores indicating significant risk, though specific CVE identifiers are referenced in the advisory. Security teams should apply the patch immediately to mitigate potential exploitation and maintain compliance with Red Hat’s security guidance.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99513",
    "publishedAt": "2026-11-12T06:09:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-important-update-for-httpd-2-4",
      "article-4c245b5a",
      "4c245b5a",
      "red-hat-releases-important-update-for-httpd-2-4-37d671"
    ]
  },
  {
    "slug": "red-hat-issues-important-update-for-aspell-512bf67b",
    "title": "Red Hat Issues Important Update for aspell",
    "summary": "Red Hat released an important security update for the aspell package on RHEL 9.6 Extended Update Support. The advisory covers multiple vulnerabilities with CVSS scores indicating significant risk, with CVE references provided in the documentation. Administrators should apply the patch promptly to prevent exploitation and align with Red Hat’s security maintenance schedule.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99511",
    "publishedAt": "2026-11-12T05:49:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-update-for-aspell",
      "article-512bf67b",
      "512bf67b",
      "red-hat-issues-important-update-for-aspell-37d671"
    ]
  },
  {
    "slug": "cisos-and-ot-engineers-disagree-on-cyber-resilienc-74ca386a",
    "title": "CISOs and OT Engineers Disagree on Cyber Resilience",
    "summary": "According to a SANS survey, CISOs and engineers disagree on operational technology resilience during IT compromises. While all surveyed security chiefs expect facilities to maintain output using manual controls, only 15% of engineering practitioners express confidence in process survival. Industrial organizations should align leadership expectations with frontline engineering capabilities to improve manual operational procedures and threat response plans.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/12/sans-industrial-cybersecurity-survey/",
    "publishedAt": "2026-11-12T05:30:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisos-and-ot-engineers-disagree-on-cyber-resilienc",
      "article-74ca386a",
      "74ca386a",
      "cisos-and-ot-engineers-disagree-on-cyber-resilienc-192a98",
      "cisos-and-ot-engineers-disagree-on-cyber-resilience"
    ]
  },
  {
    "slug": "critical-apache-http-2-flaw-could-let-unauthentica-aa1e061e",
    "title": "Critical Apache HTTP/2 Flaw Could Let Unauthenticated Attackers Execute Code Remotely",
    "summary": "A critical flaw in Apache HTTP Server's HTTP/2 module, mod_http2, can let a remote attacker run code on the server. Tracked as CVE-2026-119618, it affects versions 2.4.55 through 2.4.70 and is fixed in version 2.4.71, released yesterday. Only servers with HTTP/2 enabled are affected, according to Red Hat, which ships the server as part of Red Hat Enterprise Linux.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/critical-apache-http2-flaw-could-let.html",
    "publishedAt": "2026-11-12T05:12:26.000Z",
    "cves": [
      "CVE-2026-119618"
    ],
    "additionalSources": [],
    "aliases": [
      "critical-apache-http-2-flaw-could-let-unauthentica",
      "article-aa1e061e",
      "aa1e061e",
      "critical-apache-http-2-flaw-could-let-unauthentica-267175",
      "critical-apache-http-2-flaw-could-let-unauthenticated-attack"
    ]
  },
  {
    "slug": "screenconnect-targeted-288-endpoints-via-rogue-cli-9e5eb3bd",
    "title": "ScreenConnect Targeted 288 Endpoints via Rogue Clients",
    "summary": "ConnectWise reported unauthorized access incidents affecting at least 288 endpoints across 48 organizations using ScreenConnect with rogue client extensions. The company disabled five third‑party extensions in partner environments, noting no evidence of infrastructure compromise or software vulnerability in ScreenConnect itself. Security teams should monitor for rogue client activity, enforce extension whitelisting, and review access controls to mitigate similar threats.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/screenconnect-attacks-target-at-least.html",
    "publishedAt": "2026-11-12T04:39:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "screenconnect-targeted-288-endpoints-via-rogue-cli",
      "article-9e5eb3bd",
      "9e5eb3bd",
      "screenconnect-targeted-288-endpoints-via-rogue-cli-5b399d",
      "screenconnect-targeted-288-endpoints-via-rogue-clients"
    ]
  },
  {
    "slug": "sckit-worm-compromises-screenconnect-panels-infect-0637915f",
    "title": "SCKit Worm Compromises ScreenConnect Panels, Infects 288 Devices",
    "summary": "Attackers leveraged the SCKit worm to compromise cloud‑hosted ConnectWise ScreenConnect panels, infecting at least 288 endpoints across 48 organizations. The worm exploited unauthorized panel access to deploy rogue ScreenConnect clients, establishing session‑cookie relays for persistence and remote control. Security teams must audit credentials, enforce MFA, terminate unverified clients, and apply vendor updates to block further exploitation.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/connectwise-screenconnect-hijacked/",
    "publishedAt": "2026-11-12T03:57:06.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Huntress",
        "sourceUrl": "https://www.huntress.com/blog/sckit-worm-rogue-screenconnect"
      }
    ],
    "aliases": [
      "sckit-worm-compromises-screenconnect-panels-infect",
      "article-0637915f",
      "0637915f",
      "sckit-worm-compromises-screenconnect-panels-infect-3c4796",
      "sckit-worm-compromises-screenconnect-panels-infects-288-devi"
    ]
  },
  {
    "slug": "rhsa-2026-99148-important-kernel-security-bug-fix-fdd9b60e",
    "title": "RHSA-2026:99148: Important: kernel security, bug fix, and enhancement update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99148",
    "publishedAt": "2026-11-12T03:54:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99148-important-kernel-security-bug-fix",
      "article-fdd9b60e",
      "fdd9b60e",
      "rhsa-2026-99148-important-kernel-security-bug-fix-37d67f",
      "rhsa-2026-99148-important-kernel-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "rhsa-2026-99166-important-vim-security-bug-fix-and-deb62b73",
    "title": "RHSA-2026:99166: Important: vim security, bug fix, and enhancement update",
    "summary": "An update for vim is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99166",
    "publishedAt": "2026-11-12T03:48:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99166-important-vim-security-bug-fix-and",
      "article-deb62b73",
      "deb62b73",
      "rhsa-2026-99166-important-vim-security-bug-fix-and-37d67f",
      "rhsa-2026-99166-important-vim-security-bug-fix-and-enhanceme"
    ]
  },
  {
    "slug": "rhsa-2026-99157-important-nginx-security-update-629a570c",
    "title": "RHSA-2026:99157: Important: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99157",
    "publishedAt": "2026-11-12T03:32:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99157-important-nginx-security-update",
      "article-629a570c",
      "629a570c",
      "rhsa-2026-99157-important-nginx-security-update-37d67f"
    ]
  },
  {
    "slug": "rhsa-2026-99158-important-nginx-1-24-security-upda-21fd5044",
    "title": "RHSA-2026:99158: Important: nginx:1.24 security update",
    "summary": "An update for the nginx:1.24 module is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99158",
    "publishedAt": "2026-11-12T03:32:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99158-important-nginx-1-24-security-upda",
      "article-21fd5044",
      "21fd5044",
      "rhsa-2026-99158-important-nginx-1-24-security-upda-37d67f",
      "rhsa-2026-99158-important-nginx-1-24-security-update"
    ]
  },
  {
    "slug": "node-js-fixes-16-security-flaws-that-could-expose-5283b59f",
    "title": "Node.js Fixes 16 Security Flaws That Could Expose TLS Private Keys and Crash Servers Remotely",
    "summary": "The Node.js project has released fixes for 16 security flaws across its 22.x, 24.x and 26.x lines. The official advisory says the patched builds are v22.23.5, v24.22.3 and v26.13.1. The update also refreshes three bundled parts: llhttp, undici, and sqlite.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/node-js-fixes-16-security-vulnerabilities/",
    "publishedAt": "2026-11-12T03:30:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "node-js-fixes-16-security-flaws-that-could-expose",
      "article-5283b59f",
      "5283b59f",
      "node-js-fixes-16-security-flaws-that-could-expose-3c1029",
      "node-js-fixes-16-security-flaws-that-could-expose-tls-privat"
    ]
  },
  {
    "slug": "mongodb-use-after-free-cve-2026-118383-exploited-1445ee31",
    "title": "MongoDB Use‑After‑Free CVE‑2026‑118383 Exploited",
    "summary": "MongoDB is affected by CVE‑2026‑118383, a use‑after‑free vulnerability that can lead to arbitrary code execution in enterprise environments. The flaw arises when the database fails to release memory after a malicious request, allowing attackers to trigger a crash or execute injected code. MongoDB has released a patch; administrators should apply the update immediately and monitor logs for anomalous activity.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cve-2026-118383-use-after-free-vulnerability-in-mongodb",
    "publishedAt": "2026-11-12T03:24:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mongodb-use-after-free-cve-2026-118383-exploited",
      "article-1445ee31",
      "1445ee31",
      "mongodb-use-after-free-cve-2026-118383-exploited-13fac4"
    ]
  },
  {
    "slug": "apache-rce-flaw-cve-2026-119618-requires-immediate-f7016384",
    "title": "Apache RCE Flaw CVE-2026-119618 Requires Immediate Patch",
    "summary": "A remote code execution flaw identified as CVE-2026-119618 targets Apache servers, allowing attackers to execute arbitrary code in enterprise environments. The vulnerability stems from improper input validation in the request handling module, and public proof‑of‑concept exploits demonstrate its feasibility. Patch is available immediately; apply the latest Apache release or vendor‑issued hotfix and enable recommended detection rules.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/critical-rce-vulnerability-in-apache-http-server-everyt",
    "publishedAt": "2026-11-12T03:24:23.000Z",
    "cves": [
      "CVE-2026-119618"
    ],
    "additionalSources": [],
    "aliases": [
      "apache-rce-flaw-cve-2026-119618-requires-immediate",
      "article-f7016384",
      "f7016384",
      "apache-rce-flaw-cve-2026-119618-requires-immediate-2b18a1",
      "apache-rce-flaw-cve-2026-119618-requires-immediate-patch"
    ]
  },
  {
    "slug": "falcon-c2-targets-government-portals-with-javascri-c9c00956",
    "title": "Falcon C2 Targets Government Portals with JavaScript",
    "summary": "Falcon C2 malware is targeting government portals by injecting malicious JavaScript into web pages. The injected scripts exploit client‑side vulnerabilities, capture user input, and establish command‑and‑control channels to exfiltrate data. Security teams should block known malicious domains, enforce script‑blocking policies, and immediately apply vendor security patches to mitigate the threat.",
    "category": "General",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/the-xg-files-falcon-c2-flying-under-the-browser-radar",
    "publishedAt": "2026-11-12T03:24:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "falcon-c2-targets-government-portals-with-javascri",
      "article-c9c00956",
      "c9c00956",
      "falcon-c2-targets-government-portals-with-javascri-27457a",
      "falcon-c2-targets-government-portals-with-javascript"
    ]
  },
  {
    "slug": "git-six-flaw-rce-patches-released-9789b13a",
    "title": "Git Six Flaw RCE Patches Released",
    "summary": "Git released patches for six critical flaws that could enable remote code execution if an attacker crafts malicious repository data. The vulnerabilities involve deserialization of untrusted input and were identified through root‑cause telemetry and detection rule hunting. Security teams should apply the Git patches immediately and review detection rules to ensure coverage of the affected code paths.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/git-fixes-six-vulnerabilities-including-code-execution",
    "publishedAt": "2026-11-12T03:22:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "git-six-flaw-rce-patches-released",
      "article-9789b13a",
      "9789b13a",
      "git-six-flaw-rce-patches-released-2013f7"
    ]
  },
  {
    "slug": "ivanti-rce-flaw-cve-2026-121683-demands-prompt-pat-f1f37723",
    "title": "Ivanti RCE Flaw CVE-2026-121683 Demands Prompt Patch",
    "summary": "Ivanti software contains a remote code execution vulnerability, CVE-2026-121683, that permits attackers to run arbitrary code on affected systems. The flaw originates from unchecked user input in the configuration parser, and publicly available proof‑of‑concept code confirms exploitation. Security teams should immediately apply the Ivanti patch or upgrade to the latest release and enable the vendor‑issued detection rules.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/citrix-ivanti-patch-critical-and-high-severity-vulnerab",
    "publishedAt": "2026-11-12T03:19:15.000Z",
    "cves": [
      "CVE-2026-121683"
    ],
    "additionalSources": [],
    "aliases": [
      "ivanti-rce-flaw-cve-2026-121683-demands-prompt-pat",
      "article-f1f37723",
      "f1f37723",
      "ivanti-rce-flaw-cve-2026-121683-demands-prompt-pat-7473b0",
      "ivanti-rce-flaw-cve-2026-121683-demands-prompt-patch"
    ]
  },
  {
    "slug": "fireworks-ai-incident-exposes-notion-chat-data-ccb5b9d7",
    "title": "Fireworks AI Incident Exposes Notion Chat Data",
    "summary": "Notion experienced a data breach stemming from a security incident involving Fireworks AI, exposing user chat data. The incident allowed unauthorized access to sensitive chat telemetry and conversational records through third-party platform integration. Security teams must review root-cause telemetry, deploy threat detection rules, and apply recommended patches to secure impacted integrations.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/notion-says-fireworks-breach-exposed-customer-ai-chat-t",
    "publishedAt": "2026-11-12T03:18:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fireworks-ai-incident-exposes-notion-chat-data",
      "article-ccb5b9d7",
      "ccb5b9d7",
      "fireworks-ai-incident-exposes-notion-chat-data-b780d3"
    ]
  },
  {
    "slug": "screenconnect-rce-flaw-threatens-managed-service-p-3acd5e7b",
    "title": "ScreenConnect RCE Flaw Threatens Managed Service Providers",
    "summary": "ScreenConnect, a support platform used by managed service providers, contains a remote code execution flaw that could allow attackers to execute arbitrary commands. The vulnerability arises from insufficient input validation in the session initiation module, and proof‑of‑concept exploits demonstrate its feasibility. Apply the vendor‑issued patch immediately, update to the latest ScreenConnect version, and enable the detection rules to mitigate risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/active-screenconnect-attacks-breach-msps-impact-dozens",
    "publishedAt": "2026-11-12T03:18:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "screenconnect-rce-flaw-threatens-managed-service-p",
      "article-3acd5e7b",
      "3acd5e7b",
      "screenconnect-rce-flaw-threatens-managed-service-p-10ffc9",
      "screenconnect-rce-flaw-threatens-managed-service-providers"
    ]
  },
  {
    "slug": "whitearmor-ransomware-targets-maersk-shipping-13a6ca81",
    "title": "WhiteArmor Ransomware Targets Maersk Shipping",
    "summary": "WhiteArmor ransomware infected Maersk's network, exfiltrating sensitive data before encrypting files. The malware leveraged credential theft and lateral movement, exploiting unpatched Windows services, causing operational disruption and potential data loss. Maersk should apply vendor-supplied patches, isolate affected systems, enforce multi-factor authentication, and conduct forensic analysis to mitigate further spread.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/maersk-confirms-data-breach-as-whitearmor-ransomware-de",
    "publishedAt": "2026-11-12T03:12:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "whitearmor-ransomware-targets-maersk-shipping",
      "article-13a6ca81",
      "13a6ca81",
      "whitearmor-ransomware-targets-maersk-shipping-7cb745"
    ]
  },
  {
    "slug": "rhsa-2026-99142-important-net-10-0-security-bug-fi-0618a1cd",
    "title": "RHSA-2026:99142: Important: .NET 10.0 security, bug fix, and enhancement update",
    "summary": "An update for .NET 10.0 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99142",
    "publishedAt": "2026-11-12T03:11:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99142-important-net-10-0-security-bug-fi",
      "article-0618a1cd",
      "0618a1cd",
      "rhsa-2026-99142-important-net-10-0-security-bug-fi-37d67f",
      "rhsa-2026-99142-important-net-10-0-security-bug-fix-and-enha"
    ]
  },
  {
    "slug": "rhsa-2026-99208-important-perl-dbi-security-update-7024703b",
    "title": "RHSA-2026:99208: Important: perl-DBI security update",
    "summary": "An update for perl-DBI is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99208",
    "publishedAt": "2026-11-12T03:10:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99208-important-perl-dbi-security-update",
      "article-7024703b",
      "7024703b",
      "rhsa-2026-99208-important-perl-dbi-security-update-37d67c"
    ]
  },
  {
    "slug": "red-hat-kernel-update-addresses-moderate-security-1ddc94c3",
    "title": "Red Hat Kernel Update Addresses Moderate Security Issues",
    "summary": "Red Hat released a kernel update for Enterprise Linux 9 that addresses several moderate‑impact security issues. The update includes bug fixes and enhancements, with CVSS base scores linked to each CVE in the references. Security teams should apply the kernel update promptly and review the vendor documentation for any required configuration changes.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99135",
    "publishedAt": "2026-11-12T03:05:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-addresses-moderate-security",
      "article-1ddc94c3",
      "1ddc94c3",
      "red-hat-kernel-update-addresses-moderate-security-37d67f",
      "red-hat-kernel-update-addresses-moderate-security-issues"
    ]
  },
  {
    "slug": "baker-tilly-reports-third-party-data-exposure-inci-9f880bf1",
    "title": "Baker Tilly Reports Third-Party Data Exposure Incident",
    "summary": "Baker Tilly reported a third-party data breach that exposed sensitive corporate audit and financial data. The security incident originated within an external vendor integration, resulting in unauthorized third-party access to confidential enterprise records. Security teams should review root-cause telemetry, implement proactive threat detection rules, and apply essential vendor patches immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/baker-tilly-notifies-clients-of-data-breach-at-third-pa",
    "publishedAt": "2026-11-12T03:03:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "baker-tilly-reports-third-party-data-exposure-inci",
      "article-9f880bf1",
      "9f880bf1",
      "baker-tilly-reports-third-party-data-exposure-inci-1f8243",
      "baker-tilly-reports-third-party-data-exposure-incident"
    ]
  },
  {
    "slug": "red-hat-releases-perl-dbi-security-update-f9d01140",
    "title": "Red Hat Releases perl-DBI Security Update",
    "summary": "Red Hat has released an important security update for perl-DBI on RHEL 9.8 EUS, addressing multiple vulnerabilities. The update carries a CVSS base score of 7.5 for the most critical issue, and Red Hat rates the patch as Important. Administrators should apply the perl-DBI update immediately to mitigate the identified security weaknesses.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99121",
    "publishedAt": "2026-11-12T02:02:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-perl-dbi-security-update",
      "article-f9d01140",
      "f9d01140",
      "red-hat-releases-perl-dbi-security-update-37d67f"
    ]
  },
  {
    "slug": "red-hat-patches-gnome-remote-desktop-flaw-in-rhel-9eab034d",
    "title": "Red Hat Patches gnome-remote-desktop Flaw in RHEL",
    "summary": "Red Hat issued a security update addressing a vulnerability in the gnome-remote-desktop component for Red Hat Enterprise Linux 9.8 Extended Update Support. The underlying flaw allows potential exploitation depending on system configuration, carrying a Red Hat severity rating of Important. Administrators using affected RHEL 9.8 Extended Update Support systems should apply the security patch immediately to mitigate risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99136",
    "publishedAt": "2026-11-12T01:57:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-patches-gnome-remote-desktop-flaw-in-rhel",
      "article-9eab034d",
      "9eab034d",
      "red-hat-patches-gnome-remote-desktop-flaw-in-rhel-37d67f"
    ]
  },
  {
    "slug": "rhsa-2026-99173-low-net-11-0-security-bug-fix-and-e604bfce",
    "title": "RHSA-2026:99173: Low: .NET 11.0 security, bug fix, and enhancement update",
    "summary": "An update for .NET 11.0 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Low. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99173",
    "publishedAt": "2026-11-12T01:54:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99173-low-net-11-0-security-bug-fix-and",
      "article-e604bfce",
      "e604bfce",
      "rhsa-2026-99173-low-net-11-0-security-bug-fix-and-37d67f",
      "rhsa-2026-99173-low-net-11-0-security-bug-fix-and-enhancemen"
    ]
  },
  {
    "slug": "rhsa-2026-99116-important-raptor2-security-update-923b1774",
    "title": "RHSA-2026:99116: Important: raptor2 security update",
    "summary": "An update for raptor2 is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99116",
    "publishedAt": "2026-11-12T01:53:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99116-important-raptor2-security-update",
      "article-923b1774",
      "923b1774",
      "rhsa-2026-99116-important-raptor2-security-update-37d680"
    ]
  },
  {
    "slug": "red-hat-releases-python-oauthlib-security-update-69467088",
    "title": "Red Hat Releases python‑oauthlib Security Update",
    "summary": "Red Hat has issued an Important security update for python‑oauthlib on RHEL 9.8 Extended Update Support, addressing multiple vulnerabilities identified by CVE references. The update includes CVSS scores for each vulnerability, but no active exploitation has been reported, mitigating potential remote code execution risks. Users should apply the RHSA‑2026:99167 update immediately to ensure protection against the disclosed weaknesses.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99167",
    "publishedAt": "2026-11-12T01:32:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-python-oauthlib-security-update",
      "article-69467088",
      "69467088",
      "red-hat-releases-python-oauthlib-security-update-37d67f"
    ]
  },
  {
    "slug": "rhsa-2026-99170-important-net-11-0-security-bug-fi-561a40cc",
    "title": "RHSA-2026:99170: Important: .NET 11.0 security, bug fix, and enhancement update",
    "summary": "An update for .NET 11.0 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99170",
    "publishedAt": "2026-11-12T01:21:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99170-important-net-11-0-security-bug-fi",
      "article-561a40cc",
      "561a40cc",
      "rhsa-2026-99170-important-net-11-0-security-bug-fi-37d67f",
      "rhsa-2026-99170-important-net-11-0-security-bug-fix-and-enha"
    ]
  },
  {
    "slug": "chinese-ai-project-gathers-taiwan-chip-industry-da-9c2c0544",
    "title": "Chinese AI Project Gathers Taiwan Chip Industry Data",
    "summary": "Chinese state-sponsored AI system collects data on Taiwan chip industry personnel. The system scrapes publicly available information and internal documents, building a database that could enable targeted exploitation of individuals abroad. Security teams should monitor for credential compromise, enforce strict access controls, and protect sensitive personnel data in the organization.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/threat-intelligence/chinese-ai-project-scouts-spies-taiwan-chip-industry",
    "publishedAt": "2026-11-12T01:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chinese-ai-project-gathers-taiwan-chip-industry-da",
      "article-9c2c0544",
      "9c2c0544",
      "chinese-ai-project-gathers-taiwan-chip-industry-da-223b95",
      "chinese-ai-project-gathers-taiwan-chip-industry-data"
    ]
  },
  {
    "slug": "zoom-cve-2026-108187-requires-immediate-patch-55ccb8b8",
    "title": "Zoom CVE-2026-108187 Requires Immediate Patch",
    "summary": "Zoom disclosed CVE-2026-108187, a critical flaw affecting enterprise Zoom deployments. The vulnerability permits remote code execution via malformed input in the Zoom client, with a CVSS score of 9.8; public proof‑of‑concept exploits are available, enabling attackers to gain full system control. Zoom has released a patch; administrators must update Zoom clients immediately and monitor for exploitation attempts.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/critical-zoom-workplace-flaw-could-allow-unauthenticate",
    "publishedAt": "2026-11-12T00:16:26.000Z",
    "cves": [
      "CVE-2026-108187"
    ],
    "additionalSources": [],
    "aliases": [
      "zoom-cve-2026-108187-requires-immediate-patch",
      "article-55ccb8b8",
      "55ccb8b8",
      "zoom-cve-2026-108187-requires-immediate-patch-410f0c"
    ]
  },
  {
    "slug": "japan-allocates-emergency-cybersecurity-funding-am-8e5a6186",
    "title": "Japan Allocates Emergency Cybersecurity Funding Amid AI Cyber Threats",
    "summary": "Japan has announced an emergency funding package to strengthen national cybersecurity following an increase in AI-assisted breaches. The policy initiative funds public-private cyber responders, creates an economic ministry AI team, and expands government active cyber-defense powers. Defense leadership intends for these measures to bolster incident response capabilities and neutralize emerging threats against critical infrastructure.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/japan-emergency-funding-cybersecurity-ai-assisted-breaches",
    "publishedAt": "2026-11-12T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "japan-allocates-emergency-cybersecurity-funding-am",
      "article-8e5a6186",
      "8e5a6186",
      "japan-allocates-emergency-cybersecurity-funding-am-1cd82f",
      "japan-allocates-emergency-cybersecurity-funding-amid-ai-cybe"
    ]
  },
  {
    "slug": "gitlab-patch-release-19-5-5-19-4-7-be8ffb8f",
    "title": "GitLab Patch Release: 19.5.5, 19.4.7",
    "summary": "GitLab Community Edition and Enterprise Edition 19.5.5 Backport of &lsquo;Retry GCS default credentials after a latched metadata timeout&rsquo; Backport of &lsquo;Skip code navigation lookups when a project has no LSIF artifacts&rsquo; into 19.5 [19.5] Backport of &lsquo;Update oj to 3.17.8 to fix native memory-safety bugs&rsquo; Backport of &lsquo;Stop relation batch export spec leaking a foo directory&rsquo; Backport of &lsquo;Map sast_iac scanner to sast in approval policy rules&rsquo; Backport of &lsquo;Bump premailer to 1.27.0 to stop css_parser deprecation warnings&rsquo; (19.5) [19.5] Reapply the Orbit feature backports 19.4.7 Backport of &lsquo;Skip code navigation lookups when a project has no LSIF artifacts&rsquo; into 19.4 Backport of &lsquo;Retry GCS default credentials after a latched metadata timeout&rsquo; [19.4] Backport of &lsquo;Update oj to 3.17.8 to fix native memory-safety bugs&rsquo; Backport of &lsquo;Map sast_iac scanner to sast in approval policy rules&rsquo; Backport of &lsquo;Stop relation batch export spec leaking a foo directory&rsquo; Backport of &lsquo;Bump premailer to 1.27.0 to stop css_parser deprecation warnings&rsquo; (19.4) [19.4] Backport of &lsquo;Skip per-ref Redis cache in protected branch push check&rsquo; [19.4] Reapply the Orbit feature backports Important notes on upgrading These patches include database migrations that may impact your upgrade process.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "GitLab Security Releases",
    "sourceUrl": "https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-5-5-released/",
    "publishedAt": "2026-11-12T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gitlab-patch-release-19-5-5-19-4-7",
      "article-be8ffb8f",
      "be8ffb8f",
      "gitlab-patch-release-19-5-5-19-4-7-1c11ae"
    ]
  },
  {
    "slug": "red-hat-releases-net-9-0-update-with-security-fixe-1986e8d3",
    "title": "Red Hat Releases .NET 9.0 Update with Security Fixes",
    "summary": "Red Hat released a .NET 9.0 update for RHEL 10 to fix multiple security issues. The update addresses several vulnerabilities with CVSS scores marked Important, though no specific CVE IDs are cited; the flaws could enable exploitation of the .NET runtime. Red Hat advises installing the package from standard RHEL repositories immediately and verifying checksums to ensure integrity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99145",
    "publishedAt": "2026-11-11T23:51:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-net-9-0-update-with-security-fixe",
      "article-1986e8d3",
      "1986e8d3",
      "red-hat-releases-net-9-0-update-with-security-fixe-37d67f",
      "red-hat-releases-net-9-0-update-with-security-fixes"
    ]
  },
  {
    "slug": "rhsa-2026-99147-important-net-8-0-security-bug-fix-eb1059f4",
    "title": "RHSA-2026:99147: Important: .NET 8.0 security, bug fix, and enhancement update",
    "summary": "An update for .NET 8.0 is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99147",
    "publishedAt": "2026-11-11T23:49:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99147-important-net-8-0-security-bug-fix",
      "article-eb1059f4",
      "eb1059f4",
      "rhsa-2026-99147-important-net-8-0-security-bug-fix-37d67f",
      "rhsa-2026-99147-important-net-8-0-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-update-for-rhel-10-8660ca44",
    "title": "Red Hat Releases Kernel Update for RHEL 10",
    "summary": "Red Hat issued a kernel update for Red Enterprise Linux 10 to address multiple security bugs. The update fixes several kernel vulnerabilities, each with a CVSS base score listed in the CVE references, and is rated as Important by Product Security. Administrators should apply the RHSA‑2026:99133 package immediately to mitigate the identified flaws and ensure system reboot.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99133",
    "publishedAt": "2026-11-11T23:46:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-update-for-rhel-10",
      "article-8660ca44",
      "8660ca44",
      "red-hat-releases-kernel-update-for-rhel-10-37d67f"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-security-update-dcf5048d",
    "title": "Red Hat Releases Kernel Security Update",
    "summary": "Red Hat released a kernel update for Enterprise Linux 10, fixing multiple security issues that could enable privilege escalation or denial of service. The advisory labels the update Important and lists CVSS scores, but omits CVE IDs. Apply the patch promptly to close the flaws, as it includes bug fixes and enhancements that address the reported weaknesses.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99139",
    "publishedAt": "2026-11-11T23:34:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-security-update",
      "article-dcf5048d",
      "dcf5048d",
      "red-hat-releases-kernel-security-update-37d67f"
    ]
  },
  {
    "slug": "google-releases-chrome-157-update-for-android-devi-388a861b",
    "title": "Google Releases Chrome 157 Update for Android Devices",
    "summary": "Google has released Chrome version 157 for Android devices to resolve stability issues and address underlying security flaws. This update incorporates the security fixes included in desktop releases alongside performance improvements across mobile browser environments. Mobile administrators and end users should update to version 157.0.8103.78 via Google Play to ensure proper patch deployment.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-for-android-update_02063106877.html",
    "publishedAt": "2026-11-11T23:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-releases-chrome-157-update-for-android-devi",
      "article-388a861b",
      "388a861b",
      "google-releases-chrome-157-update-for-android-devi-790e97",
      "google-releases-chrome-157-update-for-android-devices"
    ]
  },
  {
    "slug": "red-hat-issues-net-10-0-security-update-cc10fd3f",
    "title": "Red Hat Issues .NET 10.0 Security Update",
    "summary": "Red Hat released a .NET 10.0 security update for RHEL 10, addressing multiple vulnerabilities that could allow remote code execution via the .NET runtime. The update contains fixes for several CVEs, each with a CVSS base score, but no active exploitation reported. Red Hat recommends applying the RHSA-2026:99143 update immediately to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99143",
    "publishedAt": "2026-11-11T23:25:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-net-10-0-security-update",
      "article-cc10fd3f",
      "cc10fd3f",
      "red-hat-issues-net-10-0-security-update-37d67f"
    ]
  },
  {
    "slug": "red-hat-issues-perl-dbi-1-641-security-update-adaf0bb9",
    "title": "Red Hat Issues Perl-DBI 1.641 Security Update",
    "summary": "Red Hat released a security update for the perl-DBI 1.641 module on RHEL 8. The update addresses multiple vulnerabilities that could allow attackers to gain elevated privileges or execute arbitrary code, as indicated by the CVSS scores linked in the advisory. Administrators should apply the patch immediately and verify module integrity to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99210",
    "publishedAt": "2026-11-11T23:16:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-perl-dbi-1-641-security-update",
      "article-adaf0bb9",
      "adaf0bb9",
      "red-hat-issues-perl-dbi-1-641-security-update-37d67c"
    ]
  },
  {
    "slug": "chromeos-lts-150-patches-critical-use-after-free-f54d10a7",
    "title": "ChromeOS LTS‑150 Patches Critical Use‑After‑Free",
    "summary": "Google released ChromeOS LTS-150, patching numerous high‑severity CVEs including a critical CVE‑2026‑126879 use‑after‑free in the layout engine. The update addresses 18 CVEs such as CVE‑2026‑126901, CVE‑2026‑126856, and CVE‑2026‑126887, all of which could lead to code execution or denial of service.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/long-term-support-channel-update-for.html",
    "publishedAt": "2026-11-11T23:06:31.103Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chromeos-lts-150-patches-critical-use-after-free",
      "article-f54d10a7",
      "f54d10a7",
      "chromeos-lts-150-patches-critical-use-after-free-be27e9"
    ]
  },
  {
    "slug": "rhsa-2026-99209-important-perl-dbi-security-update-401ead4f",
    "title": "RHSA-2026:99209: Important: perl-DBI security update",
    "summary": "An update for perl-DBI is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99209",
    "publishedAt": "2026-11-11T23:02:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99209-important-perl-dbi-security-update",
      "article-401ead4f",
      "401ead4f",
      "rhsa-2026-99209-important-perl-dbi-security-update-37d67c"
    ]
  },
  {
    "slug": "baker-tilly-clients-informed-of-third-party-breach-c8927c9e",
    "title": "Baker Tilly Clients Informed of Third‑Party Breach",
    "summary": "Baker Tilly Advisory Group notified clients that a provider breach exposed personal information of clients and their dependents. The incident involved unauthorized access to sensitive data, including names, addresses, and financial details, though the full scope remains under investigation. Clients should monitor accounts, change passwords, and review security practices while Baker Tilly coordinates with the provider to assess impact.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/baker-tilly-notifies-clients-of-data-breach-at-third-party-provider/",
    "publishedAt": "2026-11-11T23:01:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "baker-tilly-clients-informed-of-third-party-breach",
      "article-c8927c9e",
      "c8927c9e",
      "baker-tilly-clients-informed-of-third-party-breach-86b367"
    ]
  },
  {
    "slug": "unit-42-reveals-ai-powered-red-team-tool-usage-2b919cff",
    "title": "Unit 42 Reveals AI‑Powered Red Team Tool Usage",
    "summary": "Unit 42 identified adversaries deploying AI‑powered red team tools, such as ARTEX, to automate reconnaissance, credential harvesting, and lateral movement. These tools use large language models to generate phishing content, craft credential‑dump scripts, and orchestrate multi‑stage attack chains. Defenders should enable AI‑aware detection, enforce least‑privilege access, deploy MFA, and run regular red‑team simulations to validate controls.",
    "category": "General",
    "severity": "LOW",
    "source": "Unit 42",
    "sourceUrl": "https://unit42.paloaltonetworks.com/artex-and-ai-powered-red-teaming-tools/",
    "publishedAt": "2026-11-11T23:00:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "unit-42-reveals-ai-powered-red-team-tool-usage",
      "article-2b919cff",
      "2b919cff",
      "unit-42-reveals-ai-powered-red-team-tool-usage-381d02"
    ]
  },
  {
    "slug": "screenconnect-malware-breaches-msps-targets-custom-1b502196",
    "title": "ScreenConnect Malware Breaches MSPs, Targets Customer Devices",
    "summary": "ConnectWise investigated a malware campaign that leveraged compromised ScreenConnect environments to deploy rogue remote‑access clients to customer devices of managed service providers. The attacks enabled attackers to gain remote control over client systems, potentially exfiltrating data and installing additional malicious payloads. ConnectWise recommends MSPs update ScreenConnect to the latest version, enforce strict access controls, and monitor for unauthorized remote‑access activity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/active-screenconnect-attacks-breach-msps-impact-dozens-of-organizations/",
    "publishedAt": "2026-11-11T22:56:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "screenconnect-malware-breaches-msps-targets-custom",
      "article-1b502196",
      "1b502196",
      "screenconnect-malware-breaches-msps-targets-custom-308e6c",
      "screenconnect-malware-breaches-msps-targets-customer-devices"
    ]
  },
  {
    "slug": "rhsa-2026-99132-important-webkit2gtk3-security-upd-c7d0806f",
    "title": "RHSA-2026:99132: Important: webkit2gtk3 security update",
    "summary": "An update for webkit2gtk3 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99132",
    "publishedAt": "2026-11-11T22:47:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99132-important-webkit2gtk3-security-upd",
      "article-c7d0806f",
      "c7d0806f",
      "rhsa-2026-99132-important-webkit2gtk3-security-upd-37d67f",
      "rhsa-2026-99132-important-webkit2gtk3-security-update"
    ]
  },
  {
    "slug": "red-hat-releases-c-ares-security-update-for-rhel-1-3b2b8dad",
    "title": "Red Hat Releases c-ares Security Update for RHEL 10.2",
    "summary": "Red Hat has released a security update for c-ares on RHEL 10.2 EUS, addressing multiple vulnerabilities with a CVSS base score available in the CVE references. The update is classified as Important by Red Hat Product Security, implying a high severity impact on DNS resolution functionality. Security teams should apply the c-ares update immediately to mitigate the identified vulnerabilities.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99168",
    "publishedAt": "2026-11-11T22:40:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-c-ares-security-update-for-rhel-1",
      "article-3b2b8dad",
      "3b2b8dad",
      "red-hat-releases-c-ares-security-update-for-rhel-1-37d67f",
      "red-hat-releases-c-ares-security-update-for-rhel-10-2"
    ]
  },
  {
    "slug": "red-hat-issues-qt6-qtbase-update-for-rhel-10-2-2755b85e",
    "title": "Red Hat Issues qt6-qtbase Update for RHEL 10.2",
    "summary": "Red Hat has issued a security update for qt6-qtbase on RHEL 10.2 EUS, addressing multiple vulnerabilities with CVSS base scores listed in the CVE references. The update is marked as Important by Red Hat Product Security, indicating a high severity impact on Qt framework functionality. Apply the qt6-qtbase update promptly to protect against the disclosed vulnerabilities.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99155",
    "publishedAt": "2026-11-11T22:37:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-qt6-qtbase-update-for-rhel-10-2",
      "article-2755b85e",
      "2755b85e",
      "red-hat-issues-qt6-qtbase-update-for-rhel-10-2-37d67f"
    ]
  },
  {
    "slug": "rhsa-2026-99141-important-mutter-security-update-333c9897",
    "title": "RHSA-2026:99141: Important: mutter security update",
    "summary": "An update for mutter is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99141",
    "publishedAt": "2026-11-11T22:35:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99141-important-mutter-security-update",
      "article-333c9897",
      "333c9897",
      "rhsa-2026-99141-important-mutter-security-update-37d67f"
    ]
  },
  {
    "slug": "rhsa-2026-99125-moderate-gnome-remote-desktop-secu-89fe8809",
    "title": "RHSA-2026:99125: Moderate: gnome-remote-desktop security update",
    "summary": "An update for gnome-remote-desktop is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99125",
    "publishedAt": "2026-11-11T22:34:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99125-moderate-gnome-remote-desktop-secu",
      "article-89fe8809",
      "89fe8809",
      "rhsa-2026-99125-moderate-gnome-remote-desktop-secu-37d67f",
      "rhsa-2026-99125-moderate-gnome-remote-desktop-security-updat"
    ]
  },
  {
    "slug": "rhsa-2026-99112-important-firefox-security-update-660e2ead",
    "title": "RHSA-2026:99112: Important: firefox security update",
    "summary": "An update for firefox is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99112",
    "publishedAt": "2026-11-11T22:34:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99112-important-firefox-security-update",
      "article-660e2ead",
      "660e2ead",
      "rhsa-2026-99112-important-firefox-security-update-37d680"
    ]
  },
  {
    "slug": "rhsa-2026-99134-important-grafana-security-update-71fbc78e",
    "title": "RHSA-2026:99134: Important: grafana security update",
    "summary": "An update for grafana is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99134",
    "publishedAt": "2026-11-11T22:31:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99134-important-grafana-security-update",
      "article-71fbc78e",
      "71fbc78e",
      "rhsa-2026-99134-important-grafana-security-update-37d67f"
    ]
  },
  {
    "slug": "arctic-wolf-highlights-agentic-ai-in-2026-security-994392c0",
    "title": "Arctic Wolf Highlights Agentic AI in 2026 Security Operations",
    "summary": "Arctic Wolf’s 2026 Agentic Security Operations Report details how agentic AI collaborates with expert analysts to streamline incident response workflows. The integration reduces investigation time by up to 40 % and boosts detection accuracy, enabling quicker threat containment. Teams should evaluate agentic AI platforms, integrate them with SOAR, and train analysts to interpret AI‑generated hypotheses.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/on-demand-webinar/inside-the-2026-agentic-security-operations-report/",
    "publishedAt": "2026-11-11T22:12:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "arctic-wolf-highlights-agentic-ai-in-2026-security",
      "article-994392c0",
      "994392c0",
      "arctic-wolf-highlights-agentic-ai-in-2026-security-74fba6",
      "arctic-wolf-highlights-agentic-ai-in-2026-security-operation"
    ]
  },
  {
    "slug": "greeter-attack-chain-leaves-hello-trail-in-cloud-l-562a968e",
    "title": "Greeter Attack Chain Leaves 'Hello' Trail in Cloud Logs",
    "summary": "Researchers identified a new cloud attack chain named Greeter, in which adversaries embed 'hello' messages in log files to obscure their activity. The technique masks lateral movement and persistence indicators, making forensic analysis more difficult and delaying incident response. Defenders should enable log integrity monitoring, correlate anomalous 'hello' entries with known threat patterns, and apply stricter log retention policies.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cloud-security/attackers-hello-scale-cloud-attack",
    "publishedAt": "2026-11-11T21:44:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "greeter-attack-chain-leaves-hello-trail-in-cloud-l",
      "article-562a968e",
      "562a968e",
      "greeter-attack-chain-leaves-hello-trail-in-cloud-l-2e556e",
      "greeter-attack-chain-leaves-hello-trail-in-cloud-logs"
    ]
  },
  {
    "slug": "emudhra-revokes-eight-ca-certificates-after-key-mi-d1633deb",
    "title": "eMudhra Revokes Eight CA Certificates After Key Mishap",
    "summary": "eMudhra revoked eight intermediate CA certificates after discovering improper private key handling during certificate generation. The mishandling exposed the possibility of unauthorized certificate issuance, but no active exploitation has been reported. eMudhra has issued revocation notices, is reviewing its key management procedures, and will implement additional safeguards to prevent future incidents.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/emudhra-revokes-8-more-ca-certificates-after-private-key-mishap/",
    "publishedAt": "2026-11-11T21:27:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "emudhra-revokes-eight-ca-certificates-after-key-mi",
      "article-d1633deb",
      "d1633deb",
      "emudhra-revokes-eight-ca-certificates-after-key-mi-38f63a",
      "emudhra-revokes-eight-ca-certificates-after-key-mishap"
    ]
  },
  {
    "slug": "ai-enhances-cyber-resilience-competition-cbdd8757",
    "title": "AI Enhances Cyber Resilience Competition",
    "summary": "The article argues that AI technologies amplify both threat capabilities and defensive options, making rapid recovery a competitive advantage. It highlights how machine learning can detect anomalies faster, yet also enables adversaries to craft more sophisticated phishing and malware campaigns. Security teams should adopt AI‑driven monitoring, continuous testing, and adaptive response frameworks to mitigate evolving risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/ai-raises-stakes-cyber-resilience",
    "publishedAt": "2026-11-11T21:20:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-enhances-cyber-resilience-competition",
      "article-cbdd8757",
      "cbdd8757",
      "ai-enhances-cyber-resilience-competition-d0d80c"
    ]
  },
  {
    "slug": "cve-2026-125926-server-side-request-forgery-in-the-a8e51a20",
    "title": "CVE-2026-125926 - Server-side request forgery in the server registration and update API in mcp-gateway-registry",
    "summary": "Bulletin ID: 2026-180-AWS Publication Date: 11/11/2026 13:00 PM PST Description: MServer-side request forgery (SSRF) in the server registration and update API in Amazon mcp-gateway-registry before 1.35.0 might allow an authenticated remote user to send requests from the gateway to internal network services and cloud instance metadata endpoints and read the responses via a crafted request Impacted versions: >= v1.0.3 AND Refer to the article for the most up-to-date and complete information.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-180-aws/",
    "publishedAt": "2026-11-11T21:04:56.000Z",
    "cves": [
      "CVE-2026-125926"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-125926-server-side-request-forgery-in-the",
      "article-a8e51a20",
      "a8e51a20",
      "cve-2026-125926-server-side-request-forgery-in-the-16ddb3",
      "cve-2026-125926-server-side-request-forgery-in-the-server-re"
    ]
  },
  {
    "slug": "aws-mcp-gateway-registry-privilege-escalation-via-5cea2f24",
    "title": "AWS mcp-gateway-registry Privilege Escalation via API",
    "summary": "Amazon mcp-gateway-registry’s external management API lacks authorization, letting an authenticated user elevate to registry administrator. The flaw, present in versions 1.0.9–1.24.7, allows a crafted group import request to grant administrator scope to the attacker’s identity group, giving control over all registered gateway assets. AWS released a patch; security teams should upgrade to 1.24.8 or later and verify group import permissions.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-179-aws/",
    "publishedAt": "2026-11-11T21:03:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "aws-mcp-gateway-registry-privilege-escalation-via",
      "article-5cea2f24",
      "5cea2f24",
      "aws-mcp-gateway-registry-privilege-escalation-via-3c6851",
      "aws-mcp-gateway-registry-privilege-escalation-via-api"
    ]
  },
  {
    "slug": "notion-breach-exposes-ai-chat-transcripts-cfcd8ae8",
    "title": "Notion Breach Exposes AI Chat Transcripts",
    "summary": "Notion revealed a breach at Fireworks AI that exposed AI chat transcripts from a few workspaces. Unauthorized access to Fireworks AI’s storage leaked user‑generated chat content, though no credentials were compromised. Notion advises users to review logs and reset passwords, while Fireworks AI has released a patch to secure the data.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/notion-says-fireworks-breach-exposed-customer-ai-chat-transcripts/",
    "publishedAt": "2026-11-11T20:54:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "notion-breach-exposes-ai-chat-transcripts",
      "article-cfcd8ae8",
      "cfcd8ae8",
      "notion-breach-exposes-ai-chat-transcripts-2b1180"
    ]
  },
  {
    "slug": "n-able-n-central-platform-offline-over-33-flaws-8a597079",
    "title": "N-able N-central Platform Offline Over 33 Flaws",
    "summary": "N-able’s N-central RMM platform was taken offline after the discovery of 33 critical flaws that enable attacker takeover via public exploits. The vulnerabilities lack a single CVE identifier but collectively allow remote code execution and privilege escalation on affected installations. N-able released a hotfix; administrators should apply the update immediately and monitor for unauthorized access attempts.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/endpoint-security/n-able-n-central-offline-33-flaws",
    "publishedAt": "2026-11-11T20:05:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-n-central-platform-offline-over-33-flaws",
      "article-8a597079",
      "8a597079",
      "n-able-n-central-platform-offline-over-33-flaws-5a18cb"
    ]
  },
  {
    "slug": "chrome-extended-stable-update-156-0-8078-100-relea-dd0cbfeb",
    "title": "Chrome Extended Stable Update 156.0.8078.100 Released",
    "summary": "Google Chrome released Stable channel build 156.0.8078.100 for Windows and Mac, rolling out over the next weeks. The update includes security patches, but the full list of changes is available in the release log, and users are encouraged to review it. Users should install the update via browser settings or wait for automatic rollout to ensure protection against known vulnerabilities.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/extended-stable-update-for-desktop_01570615041.html",
    "publishedAt": "2026-11-11T20:02:29.991Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-extended-stable-update-156-0-8078-100-relea",
      "article-dd0cbfeb",
      "dd0cbfeb",
      "chrome-extended-stable-update-156-0-8078-100-relea-1d96da",
      "chrome-extended-stable-update-156-0-8078-100-released"
    ]
  },
  {
    "slug": "chrome-stable-channel-updated-to-157-0-8103-78-a219ebe6",
    "title": "Chrome Stable Channel Updated to 157.0.8103.78",
    "summary": "Google Chrome updated the Stable channel to build 157.0.8103.78 for Windows, Mac, and Linux, with rollout scheduled over the coming weeks. Security changes are included, and a list of modifications can be found in the release log, with users advised to review the details. Installation can be performed manually via browser settings or will occur automatically, ensuring users receive protections.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01744469280.html",
    "publishedAt": "2026-11-11T20:02:26.373Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-stable-channel-updated-to-157-0-8103-78",
      "article-a219ebe6",
      "a219ebe6",
      "chrome-stable-channel-updated-to-157-0-8103-78-474e4e"
    ]
  },
  {
    "slug": "2026-agentic-security-operations-report-highlights-b31c85ac",
    "title": "2026 Agentic Security Operations Report Highlights AI Benefits",
    "summary": "The 2026 Agentic Security Operations Report shows how enterprises use AI‑powered security operations to detect threats faster. The study reports a reduction in alert noise and a 35 % increase in analyst efficiency through AI‑driven prioritization. Organizations should integrate AI platforms with existing SOAR tools, train analysts on AI outputs, and monitor for false positives.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/report-de/2026-agentic-security-operations-report-de/",
    "publishedAt": "2026-11-11T19:50:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "2026-agentic-security-operations-report-highlights",
      "article-b31c85ac",
      "b31c85ac",
      "2026-agentic-security-operations-report-highlights-465c39",
      "2026-agentic-security-operations-report-highlights-ai-benefi"
    ]
  },
  {
    "slug": "the-global-socket-how-threat-actors-are-weaponizin-7e34f62c",
    "title": "The global socket: how threat actors are weaponizing GSocket for stealthy C2",
    "summary": "Threat actors are deploying GSocket on compromised Linux servers to keep encrypted remote access after the original vulnerability is patched. Learn how to detect, investigate, and remediate this activity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/11/11/global-socket-how-threat-actors-weaponizing-gsocket-stealthy-c2/",
    "publishedAt": "2026-11-11T19:49:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "the-global-socket-how-threat-actors-are-weaponizin",
      "article-7e34f62c",
      "7e34f62c",
      "the-global-socket-how-threat-actors-are-weaponizin-247e08",
      "the-global-socket-how-threat-actors-are-weaponizing-gsocket-"
    ]
  },
  {
    "slug": "apache-patches-critical-http-2-remote-code-executi-37bdb08b",
    "title": "Apache Patches Critical HTTP/2 Remote Code Execution Vulnerability (CVE-2026-119618)",
    "summary": "Apache HTTP Server maintainers released patches addressing a critical remote code execution vulnerability impacting global cloud environments. Tracked as CVE-2026-119618, the flaw in the HTTP/2 module enables unauthenticated remote attackers to execute arbitrary code using specially crafted HTTP requests. Organizations must immediately upgrade to Apache version 2.4.71 or apply the latest security updates to mitigate server compromise risks.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability",
    "publishedAt": "2026-11-11T19:49:10.000Z",
    "cves": [
      "CVE-2026-119618"
    ],
    "additionalSources": [
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/apache-patches-critical-http-2-flaw/"
      }
    ],
    "aliases": [
      "apache-patches-critical-http-2-remote-code-executi",
      "article-37bdb08b",
      "37bdb08b",
      "apache-patches-critical-http-2-remote-code-executi-178ef9",
      "apache-patches-critical-http-2-remote-code-execution-vulnera"
    ]
  },
  {
    "slug": "rhsa-2026-99089-moderate-gcc-security-update-f85d34b2",
    "title": "RHSA-2026:99089: Moderate: gcc security update",
    "summary": "An update for gcc is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99089",
    "publishedAt": "2026-11-11T19:10:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99089-moderate-gcc-security-update",
      "article-f85d34b2",
      "f85d34b2",
      "rhsa-2026-99089-moderate-gcc-security-update-37d682"
    ]
  },
  {
    "slug": "rhsa-2026-99094-moderate-qt6-qtbase-security-updat-f4273b76",
    "title": "RHSA-2026:99094: Moderate: qt6-qtbase security update",
    "summary": "An update for qt6-qtbase is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99094",
    "publishedAt": "2026-11-11T19:01:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99094-moderate-qt6-qtbase-security-updat",
      "article-f4273b76",
      "f4273b76",
      "rhsa-2026-99094-moderate-qt6-qtbase-security-updat-37d682",
      "rhsa-2026-99094-moderate-qt6-qtbase-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-99090-important-gstreamer1-security-upda-02b99d36",
    "title": "RHSA-2026:99090: Important: gstreamer1 security update",
    "summary": "An update for gstreamer1 is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99090",
    "publishedAt": "2026-11-11T19:00:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99090-important-gstreamer1-security-upda",
      "article-02b99d36",
      "02b99d36",
      "rhsa-2026-99090-important-gstreamer1-security-upda-37d682",
      "rhsa-2026-99090-important-gstreamer1-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-99091-important-guava-security-update-54632ed4",
    "title": "RHSA-2026:99091: Important: guava security update",
    "summary": "An update for guava is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99091",
    "publishedAt": "2026-11-11T18:55:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99091-important-guava-security-update",
      "article-54632ed4",
      "54632ed4",
      "rhsa-2026-99091-important-guava-security-update-37d682"
    ]
  },
  {
    "slug": "rhsa-2026-99088-important-containernetworking-plug-61aef30b",
    "title": "RHSA-2026:99088: Important: containernetworking-plugins security update",
    "summary": "An update for containernetworking-plugins is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99088",
    "publishedAt": "2026-11-11T18:44:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99088-important-containernetworking-plug",
      "article-61aef30b",
      "61aef30b",
      "rhsa-2026-99088-important-containernetworking-plug-37d682",
      "rhsa-2026-99088-important-containernetworking-plugins-securi"
    ]
  },
  {
    "slug": "yodl-buffer-over-read-causes-denial-of-service-a3e333a7",
    "title": "Yodl Buffer Over-Read Causes Denial of Service",
    "summary": "Ubuntu identified a buffer over-read in Yodl that could be triggered by malformed input. The flaw may allow an attacker to crash Yodl, leading to a denial of service, though no active exploitation has been reported. Users should update to the latest Yodl package via Ubuntu repositories; no additional workarounds are required.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9063-1",
    "publishedAt": "2026-11-11T18:33:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "yodl-buffer-over-read-causes-denial-of-service",
      "article-a3e333a7",
      "a3e333a7",
      "yodl-buffer-over-read-causes-denial-of-service-7e86f6"
    ]
  },
  {
    "slug": "snmptt-allows-remote-command-execution-via-unsanit-67af8411",
    "title": "SNMPTT Allows Remote Command Execution via Unsanitized Traps",
    "summary": "Ubuntu discovered that SNMPTT fails to sanitize trap data passed to EXEC, PREEXEC, and unknown_trap_exec commands. A remote attacker could exploit this flaw to run arbitrary shell commands, potentially compromising the host system without authentication. Apply the latest SNMPTT update from Ubuntu repositories immediately, promptly; no additional mitigations are necessary.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9062-1",
    "publishedAt": "2026-11-11T18:33:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "snmptt-allows-remote-command-execution-via-unsanit",
      "article-67af8411",
      "67af8411",
      "snmptt-allows-remote-command-execution-via-unsanit-7e86f9",
      "snmptt-allows-remote-command-execution-via-unsanitized-traps"
    ]
  },
  {
    "slug": "kramdown-vulnerability-enables-arbitrary-file-read-5b97ec88",
    "title": "kramdown Vulnerability Enables Arbitrary File Read and Code Execution",
    "summary": "The kramdown Ruby library processes the template option by default, creating a flaw in Ubuntu packages. This behavior allows attackers to read arbitrary files or execute code within the host environment, potentially compromising system integrity. Users should upgrade to the patched kramdown version or apply the Ubuntu security update to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9060-1",
    "publishedAt": "2026-11-11T18:33:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kramdown-vulnerability-enables-arbitrary-file-read",
      "article-5b97ec88",
      "5b97ec88",
      "kramdown-vulnerability-enables-arbitrary-file-read-7e8701",
      "kramdown-vulnerability-enables-arbitrary-file-read-and-code-"
    ]
  },
  {
    "slug": "ruby-jwt-hmac-verification-flaw-enables-token-forg-7407c5b3",
    "title": "ruby-jwt HMAC Verification Flaw Enables Token Forgery",
    "summary": "The ruby-jwt library fails to verify HMAC signatures when the key is empty or missing, exposing Ubuntu installations. An attacker can forge authentication tokens, bypassing security controls and potentially gaining unauthorized access to protected services. Apply the updated ruby-jwt package or patch the library to enforce proper key validation in your environment.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9059-1",
    "publishedAt": "2026-11-11T18:33:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ruby-jwt-hmac-verification-flaw-enables-token-forg",
      "article-7407c5b3",
      "7407c5b3",
      "ruby-jwt-hmac-verification-flaw-enables-token-forg-7e8754",
      "ruby-jwt-hmac-verification-flaw-enables-token-forgery"
    ]
  },
  {
    "slug": "ubuntu-fixes-arbitrary-file-write-flaw-in-action-p-185e031f",
    "title": "Ubuntu Fixes Arbitrary File Write Flaw in Action Pack",
    "summary": "A vulnerability in Action Pack Page Caching improperly handles specific request paths during page caching operations. The technical flaw enables a remote attacker to write arbitrary files to the web server, creating potential remote code execution risks. Security teams should apply the updates specified in Ubuntu Security Notice USN-9058-1 to prevent unauthorized file creation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9058-1",
    "publishedAt": "2026-11-11T18:33:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-fixes-arbitrary-file-write-flaw-in-action-p",
      "article-185e031f",
      "185e031f",
      "ubuntu-fixes-arbitrary-file-write-flaw-in-action-p-7e8757",
      "ubuntu-fixes-arbitrary-file-write-flaw-in-action-pack"
    ]
  },
  {
    "slug": "rkhunter-vulnerability-enables-remote-code-executi-7fc0427c",
    "title": "rkhunter Vulnerability Enables Remote Code Execution",
    "summary": "The rkhunter utility was found to download mirror updates over an insecure channel, exposing it to potential remote code execution. An attacker could exploit this flaw to inject malicious binaries during the update process, potentially compromising the host system. Ubuntu recommends applying the latest security update and configuring rkhunter to use secure update sources to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9057-1",
    "publishedAt": "2026-11-11T18:32:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rkhunter-vulnerability-enables-remote-code-executi",
      "article-7fc0427c",
      "7fc0427c",
      "rkhunter-vulnerability-enables-remote-code-executi-7e875b",
      "rkhunter-vulnerability-enables-remote-code-execution"
    ]
  },
  {
    "slug": "usn-9056-1-prosody-community-modules-vulnerability-9f9f99e0",
    "title": "USN-9056-1: Prosody Community Modules vulnerability",
    "summary": "It was discovered that the LDAP authentication modules in Prosody Community Modules did not fully verify XMPP addresses when checking for administrator privileges. A remote attacker could possibly use this issue to gain administrator privileges.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9056-1",
    "publishedAt": "2026-11-11T18:32:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9056-1-prosody-community-modules-vulnerability",
      "article-9f9f99e0",
      "9f9f99e0",
      "usn-9056-1-prosody-community-modules-vulnerability-7e875f"
    ]
  },
  {
    "slug": "ubuntu-patches-type-confusion-flaw-in-pecl-http-ex-86863f57",
    "title": "Ubuntu Patches Type Confusion Flaw in pecl_http Extension",
    "summary": "Ubuntu issued a security notice addressing a parameter handling vulnerability in the pecl_http PHP extension. The root cause involves a type confusion mechanism that allows remote attackers to cause PHP crashes or potentially execute arbitrary code. Administrators using affected Ubuntu systems should apply the USN-9055-1 security updates to mitigate denial of service and execution risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9055-1",
    "publishedAt": "2026-11-11T18:32:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-patches-type-confusion-flaw-in-pecl-http-ex",
      "article-86863f57",
      "86863f57",
      "ubuntu-patches-type-confusion-flaw-in-pecl-http-ex-7e8763",
      "ubuntu-patches-type-confusion-flaw-in-pecl-http-extension"
    ]
  },
  {
    "slug": "usn-9054-1-babel-vulnerability-ae357dd6",
    "title": "USN-9054-1: Babel vulnerability",
    "summary": "It was discovered that Babel incorrectly evaluated certain code during compilation when used with certain plugins. If a user or an automated system were tricked into compiling specially crafted code, an attacker could possibly use this issue to execute arbitrary code.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9054-1",
    "publishedAt": "2026-11-11T18:32:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9054-1-babel-vulnerability",
      "article-ae357dd6",
      "ae357dd6",
      "usn-9054-1-babel-vulnerability-7e8766"
    ]
  },
  {
    "slug": "networkmanager-ssh-vulnerability-allows-local-priv-c385bd62",
    "title": "NetworkManager-ssh Vulnerability Allows Local Privilege Escalation",
    "summary": "A flaw in NetworkManager-ssh’s handling of VPN options allows local attackers to gain elevated privileges on Ubuntu. The issue stems from insufficient validation of extra options, enabling privilege escalation without authentication; no CVE is assigned. Ubuntu released an update correcting the validation logic; administrators should install the latest NetworkManager package.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9053-1",
    "publishedAt": "2026-11-11T18:32:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "networkmanager-ssh-vulnerability-allows-local-priv",
      "article-c385bd62",
      "c385bd62",
      "networkmanager-ssh-vulnerability-allows-local-priv-7e876a",
      "networkmanager-ssh-vulnerability-allows-local-privilege-esca"
    ]
  },
  {
    "slug": "vanderbilt-restores-systems-after-alleged-data-the-71df4385",
    "title": "Vanderbilt Restores Systems After Alleged Data Theft Attack",
    "summary": "Vanderbilt University is restoring campus technology following a cyberattack that attackers claim stole student and employee data. The incident involved unauthorized access to university systems, but the university has not confirmed any data exfiltration. Security teams should review access logs, enforce multi‑factor authentication, and apply any pending vendor patches to strengthen defenses.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/vanderbilt-restores-systems-after-cyberattack-as-hackers-claim-data-theft",
    "publishedAt": "2026-11-11T18:29:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vanderbilt-restores-systems-after-alleged-data-the",
      "article-71df4385",
      "71df4385",
      "vanderbilt-restores-systems-after-alleged-data-the-550d8e",
      "vanderbilt-restores-systems-after-alleged-data-theft-attack"
    ]
  },
  {
    "slug": "red-hat-releases-net-8-0-security-update-fa711df7",
    "title": "Red Hat Releases .NET 8.0 Security Update",
    "summary": "Red Hat released a security update for .NET 8.0 on RHEL 8, fixing vulnerabilities that could let attackers compromise application integrity. The advisory rates the update as Important, with CVSS scores linked to each CVE, indicating moderate to high risk but no confirmed exploitation. Apply the .NET 8.0 update immediately following Red Hat’s guidance to mitigate the identified flaws.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99052",
    "publishedAt": "2026-11-11T18:20:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-net-8-0-security-update",
      "article-fa711df7",
      "fa711df7",
      "red-hat-releases-net-8-0-security-update-37d683"
    ]
  },
  {
    "slug": "who-runs-the-ransomware-group-qilin-86b23989",
    "title": "Who Runs the Ransomware Group Qilin?",
    "summary": "The cybercrime group Qilin has emerged as the world's most active ransomware affiliate program, claiming at least 365 victim organizations in the past three months alone. But even top Russian hackers make operational security mistakes, and the administrator of Qilin has made a few key missteps over the last decade that all point to a 36-year-old man living in St.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "Krebs on Security",
    "sourceUrl": "https://krebsonsecurity.com/2026/11/who-runs-the-ransomware-group-qilin/",
    "publishedAt": "2026-11-11T18:06:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "who-runs-the-ransomware-group-qilin",
      "article-86b23989",
      "86b23989",
      "who-runs-the-ransomware-group-qilin-1bb2fd"
    ]
  },
  {
    "slug": "ubuntu-updates-mysql-to-patch-security-issues-aa376998",
    "title": "Ubuntu Updates MySQL to Patch Security Issues",
    "summary": "Ubuntu released updates for MySQL, addressing multiple security issues discovered in the database engine across several releases. The patches upgrade MySQL to 8.4.13 on Ubuntu 26.04 LTS, 9.7.4 on 26.10, and backport fixes to 22.04 and 24.04, potentially introducing incompatibilities. Administrators should apply the updated packages immediately and review release notes for any required application adjustments.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9046-1",
    "publishedAt": "2026-11-11T17:42:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-updates-mysql-to-patch-security-issues",
      "article-aa376998",
      "aa376998",
      "ubuntu-updates-mysql-to-patch-security-issues-7e87d3"
    ]
  },
  {
    "slug": "researchers-disclose-bluephishing-technique-target-cf5d518f",
    "title": "Researchers Disclose BluePhishing Technique Targeting Microsoft Entra AI Agents",
    "summary": "Security researchers demonstrated a novel social engineering attack vector, dubbed BluePhishing, targeting Microsoft Entra Agent ID identities within enterprise environments. The technique relies on tricking users into approving fraudulent AI agents, enabling account takeover across Microsoft 365 without stealing passwords or spoofing logins.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-could-abuse-microsoft-entra-ai-agents/",
    "publishedAt": "2026-11-11T17:17:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "researchers-disclose-bluephishing-technique-target",
      "article-cf5d518f",
      "cf5d518f",
      "researchers-disclose-bluephishing-technique-target-5c30f4",
      "researchers-disclose-bluephishing-technique-targeting-micros"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-update-for-rhel-8-10dcb7dc",
    "title": "Red Hat Releases Kernel Update for RHEL 8",
    "summary": "Red Hat issued a kernel update for Red Enterprise Linux 8 addressing multiple moderate‑impact security issues. The update fixes several kernel bugs identified by CVE references, each with a CVSS base score indicating moderate severity; no active exploitation has been reported. Administrators should apply the RHSA‑2026:99015 package to mitigate the vulnerabilities and review the CVE links for detailed impact.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99015",
    "publishedAt": "2026-11-11T17:02:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-update-for-rhel-8",
      "article-10dcb7dc",
      "10dcb7dc",
      "red-hat-releases-kernel-update-for-rhel-8-37d683"
    ]
  },
  {
    "slug": "palo-alto-patches-globalprotect-privilege-flaw-cve-413a9d4f",
    "title": "Palo Alto Patches GlobalProtect Privilege Flaw CVE-2026-0324",
    "summary": "Palo Alto Networks disclosed an incorrect privilege management vulnerability, designated as CVE-2026-0324, affecting the GlobalProtect App for Windows. The flaw resides within the integrated OPSWAT MetaDefender Endpoint Security SDK, allowing local users to gain elevated system privileges. Administrators are advised to apply vendor software updates and update the underlying SDK component to mitigate privilege escalation risks.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-0324",
    "publishedAt": "2026-11-11T17:00:00.000Z",
    "cves": [
      "CVE-2026-0324"
    ],
    "additionalSources": [],
    "aliases": [
      "palo-alto-patches-globalprotect-privilege-flaw-cve",
      "article-413a9d4f",
      "413a9d4f",
      "palo-alto-patches-globalprotect-privilege-flaw-cve-7ae305",
      "palo-alto-patches-globalprotect-privilege-flaw-cve-2026-0324"
    ]
  },
  {
    "slug": "pan-os-buffer-overflow-vulnerability-cve-2026-0329-af331d51",
    "title": "PAN-OS Buffer Overflow Vulnerability CVE-2026-0329",
    "summary": "A buffer overflow in PAN-OS’s packet processing code, identified as CVE-2026-0329, could allow attackers to execute arbitrary code. The flaw triggers when the system processes malformed protocol data, with a medium CVSS score; no public exploit is known. Palo Alto Networks has released a patch that fixes the overflow; administrators should apply the update immediately to prevent potential exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-0329",
    "publishedAt": "2026-11-11T17:00:00.000Z",
    "cves": [
      "CVE-2026-0329"
    ],
    "additionalSources": [],
    "aliases": [
      "pan-os-buffer-overflow-vulnerability-cve-2026-0329",
      "article-af331d51",
      "af331d51",
      "pan-os-buffer-overflow-vulnerability-cve-2026-0329-7ae305"
    ]
  },
  {
    "slug": "pan-os-buffer-overflow-vulnerability-cve-2026-0326-64d387d5",
    "title": "PAN-OS Buffer Overflow Vulnerability CVE-2026-0326",
    "summary": "CVE-2026-0326 is a buffer overflow in PAN-OS’s protocol and service processing that could enable code execution. The vulnerability arises from improper bounds checking of service data, with a low CVSS score and no public exploit reported. Palo Alto Networks has issued a patch that corrects the overflow; users should update PAN-OS to the latest version.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-0326",
    "publishedAt": "2026-11-11T17:00:00.000Z",
    "cves": [
      "CVE-2026-0326"
    ],
    "additionalSources": [],
    "aliases": [
      "pan-os-buffer-overflow-vulnerability-cve-2026-0326",
      "article-64d387d5",
      "64d387d5",
      "pan-os-buffer-overflow-vulnerability-cve-2026-0326-7ae305"
    ]
  },
  {
    "slug": "palo-alto-networks-addresses-pan-os-user-impersona-b50b99d6",
    "title": "Palo Alto Networks Addresses PAN-OS User Impersonation Flaw",
    "summary": "Palo Alto Networks published a security advisory detailing a user impersonation vulnerability in the PAN-OS GlobalProtect Portal component. Tracked as CVE-2026-0328, the low-severity issue allows unauthorized identity representation within the portal interface under specific operational conditions. Security teams running affected PAN-OS hardware should consult Palo Alto Networks advisory guidance and apply vendor-recommended software updates.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-0328",
    "publishedAt": "2026-11-11T17:00:00.000Z",
    "cves": [
      "CVE-2026-0328"
    ],
    "additionalSources": [],
    "aliases": [
      "palo-alto-networks-addresses-pan-os-user-impersona",
      "article-b50b99d6",
      "b50b99d6",
      "palo-alto-networks-addresses-pan-os-user-impersona-7ae305",
      "palo-alto-networks-addresses-pan-os-user-impersonation-flaw"
    ]
  },
  {
    "slug": "prisma-cloud-checkov-ssrf-vulnerability-cve-2026-0-be07f7be",
    "title": "Prisma Cloud Checkov SSRF Vulnerability CVE-2026-0323",
    "summary": "A Server‑Side Request Forgery flaw in Prisma Cloud’s Checkov component lets attackers force the system to request arbitrary URLs. CVE‑2026‑0323 is a low‑severity flaw with no active exploitation, yet it could enable data exfiltration or reconnaissance. Prisma Cloud released an update sanitizing external requests; apply the patch immediately to mitigate SSRF risk.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-0323",
    "publishedAt": "2026-11-11T17:00:00.000Z",
    "cves": [
      "CVE-2026-0323"
    ],
    "additionalSources": [],
    "aliases": [
      "prisma-cloud-checkov-ssrf-vulnerability-cve-2026-0",
      "article-be07f7be",
      "be07f7be",
      "prisma-cloud-checkov-ssrf-vulnerability-cve-2026-0-7ae305",
      "prisma-cloud-checkov-ssrf-vulnerability-cve-2026-0323"
    ]
  },
  {
    "slug": "pan-os-sensitive-info-disclosure-cve-2026-0331-f96bf5fa",
    "title": "PAN-OS Sensitive Info Disclosure CVE-2026-0331",
    "summary": "A sensitive information disclosure flaw in Palo Alto Networks PAN‑OS lets attackers retrieve confidential configuration data via unauthenticated API calls. The vulnerability, CVE‑2026‑0331, exploits improper input validation in the management interface, yielding a medium‑severity exposure without credentials. Palo Alto released a patch in the latest PAN‑OS update; security teams should apply it or restrict API access.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-0331",
    "publishedAt": "2026-11-11T17:00:00.000Z",
    "cves": [
      "CVE-2026-0331"
    ],
    "additionalSources": [],
    "aliases": [
      "pan-os-sensitive-info-disclosure-cve-2026-0331",
      "article-f96bf5fa",
      "f96bf5fa",
      "pan-os-sensitive-info-disclosure-cve-2026-0331-7ae305"
    ]
  },
  {
    "slug": "chromium-monthly-update-addresses-pan-sa-2026-0014-7ba43557",
    "title": "Chromium Monthly Update Addresses PAN-SA-2026-0014",
    "summary": "Palo Alto Networks published advisory PAN-SA-2026-0014 incorporating 62 upstream Chromium security fixes into Prisma Browser. Rated High severity (CVSS-BT 7.7, base 9.4) with passive user interaction and no reported exploitation, the update resolves memory corruption, use-after-free, type confusion, and authorization flaws. Administrators should upgrade Prisma Browser to unaffected releases (157.19.4.39 or fixed branch builds) promptly.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/PAN-SA-2026-0014",
    "publishedAt": "2026-11-11T17:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chromium-monthly-update-addresses-pan-sa-2026-0014",
      "article-7ba43557",
      "7ba43557",
      "chromium-monthly-update-addresses-pan-sa-2026-0014-101918",
      "chromium-update-addresses-cve-2026-113971-bb8a4c72"
    ]
  },
  {
    "slug": "pan-os-globalprotect-authorization-bypass-cve-2026-4d1d2f39",
    "title": "PAN‑OS GlobalProtect Authorization Bypass CVE‑2026‑0325",
    "summary": "Palo Alto Networks disclosed CVE‑2026‑0325, an authorization bypass flaw in PAN‑OS GlobalProtect. The vulnerability allows an unauthenticated attacker to gain privileged access to the VPN portal, with a CVSS score indicating low impact; no active exploitation has been reported. Palo Alto recommends applying the latest PAN‑OS update that patches CVE‑2026‑0325 to prevent unauthorized access.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-0325",
    "publishedAt": "2026-11-11T17:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pan-os-globalprotect-authorization-bypass-cve-2026",
      "article-4d1d2f39",
      "4d1d2f39",
      "pan-os-globalprotect-authorization-bypass-cve-2026-7ae305",
      "pan-os-globalprotect-authorization-bypass-cve-2026-0325"
    ]
  },
  {
    "slug": "pan-os-globalprotect-privilege-escalation-cve-2026-236bd6ca",
    "title": "PAN‑OS GlobalProtect Privilege Escalation CVE‑2026‑0327",
    "summary": "Palo Alto Networks identified CVE‑2026‑0327, a privilege escalation flaw in PAN‑OS GlobalProtect. The bug permits an authenticated user to elevate privileges on the VPN appliance, with a CVSS score reflecting low severity; no exploitation evidence exists. Apply the vendor’s latest PAN‑OS patch that addresses CVE‑2026‑0327 to eliminate the escalation vector.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-0327",
    "publishedAt": "2026-11-11T17:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pan-os-globalprotect-privilege-escalation-cve-2026",
      "article-236bd6ca",
      "236bd6ca",
      "pan-os-globalprotect-privilege-escalation-cve-2026-7ae305",
      "pan-os-globalprotect-privilege-escalation-cve-2026-0327"
    ]
  },
  {
    "slug": "pan-os-panorama-rce-cve-2026-0330-9058a5c5",
    "title": "PAN‑OS Panorama RCE CVE‑2026‑0330",
    "summary": "Palo Alto Networks disclosed CVE‑2026‑0330, an authenticated remote code execution flaw in PAN‑OS Panorama. The vulnerability allows a logged‑in attacker to execute arbitrary code on the Panorama server, with a CVSS score indicating medium severity; no active exploitation has been reported. Install the latest PAN‑OS update that patches CVE‑2026‑0330 to prevent remote code execution.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-0330",
    "publishedAt": "2026-11-11T17:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pan-os-panorama-rce-cve-2026-0330",
      "article-9058a5c5",
      "9058a5c5",
      "pan-os-panorama-rce-cve-2026-0330-7ae305"
    ]
  },
  {
    "slug": "microsoft-forge-lab-discovers-59-linux-kernel-vuln-07c01504",
    "title": "Microsoft FORGE Lab Discovers 59 Linux Kernel Vulnerabilities, 8 Root Exploits",
    "summary": "Microsoft FORGE Lab used AI to uncover 59 Linux kernel bugs, including eight that enable local root privilege escalation. The findings yielded 33 CVEs, 38 upstream fixes, and prompted Microsoft to release detailed exploit proofs and remediation guidance. Security teams worldwide are urged to patch affected kernel versions to mitigate potential exploitation of these critical flaws.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/11/11/lessons-from-59-linux-kernel-bug-reports/",
    "publishedAt": "2026-11-11T16:55:00.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/linux-kernel-security-bugs/"
      }
    ],
    "aliases": [
      "microsoft-forge-lab-discovers-59-linux-kernel-vuln",
      "article-07c01504",
      "07c01504",
      "microsoft-forge-lab-discovers-59-linux-kernel-vuln-240f5f",
      "microsoft-forge-lab-discovers-59-linux-kernel-vulnerabilitie"
    ]
  },
  {
    "slug": "maersk-breach-exposes-legacy-system-data-24af8572",
    "title": "Maersk Breach Exposes Legacy System Data",
    "summary": "Maersk confirmed that a threat actor accessed a legacy local system inherited from a prior acquisition and exfiltrated data. The breach coincided with a WhiteArmor ransomware campaign demanding a $5 million payment, though the ransomware did not encrypt Maersk files. Maersk has engaged incident response teams, applied security patches, and is monitoring for further compromise.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/maersk-confirms-data-breach-as-whitearmor-ransomware-demands-5-million/",
    "publishedAt": "2026-11-11T16:24:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "maersk-breach-exposes-legacy-system-data",
      "article-24af8572",
      "24af8572",
      "maersk-breach-exposes-legacy-system-data-109cf0"
    ]
  },
  {
    "slug": "rhsa-2026-99031-moderate-kernel-rt-security-bug-fi-fa1dccca",
    "title": "RHSA-2026:99031: Moderate: kernel-rt security, bug fix, and enhancement update",
    "summary": "An update for kernel-rt is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99031",
    "publishedAt": "2026-11-11T16:22:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99031-moderate-kernel-rt-security-bug-fi",
      "article-fa1dccca",
      "fa1dccca",
      "rhsa-2026-99031-moderate-kernel-rt-security-bug-fi-37d683",
      "rhsa-2026-99031-moderate-kernel-rt-security-bug-fix-and-enha"
    ]
  },
  {
    "slug": "zoom-workplace-unauthenticated-remote-privilege-es-e9f5a551",
    "title": "Zoom Workplace Unauthenticated Remote Privilege Escalation CVE",
    "summary": "Zoom Workplace for Windows is vulnerable to CVE-2026-108186, an unauthenticated remote privilege escalation flaw triggered by improper input validation. The flaw carries a CVSS score of 9.6, enabling attackers to elevate privileges without authentication and potentially compromise affected systems. Zoom has released software updates to address the vulnerability; security teams should apply the patch immediately to mitigate risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/critical-zoom-workplace-flaw-could.html",
    "publishedAt": "2026-11-11T16:12:46.000Z",
    "cves": [
      "CVE-2026-108186"
    ],
    "additionalSources": [],
    "aliases": [
      "zoom-workplace-unauthenticated-remote-privilege-es",
      "article-e9f5a551",
      "e9f5a551",
      "zoom-workplace-unauthenticated-remote-privilege-es-1a0771",
      "zoom-workplace-unauthenticated-remote-privilege-escalation-c"
    ]
  },
  {
    "slug": "hackers-could-exploit-mcp-server-supply-chain-weak-7b7ec6a2",
    "title": "Hackers Could Exploit MCP Server Supply Chain Weaknesses to Steal API Keys and Administrator Credentials",
    "summary": "Security teams that run AI coding assistants may be exposing their most powerful credentials without knowing it. A new study shows that Model Context Protocol (MCP) servers can quietly change their own code after they are set up.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-could-exploit-mcp-server/",
    "publishedAt": "2026-11-11T16:07:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-could-exploit-mcp-server-supply-chain-weak",
      "article-7b7ec6a2",
      "7b7ec6a2",
      "hackers-could-exploit-mcp-server-supply-chain-weak-77dca6",
      "hackers-could-exploit-mcp-server-supply-chain-weaknesses-to-"
    ]
  },
  {
    "slug": "asp-net-core-dos-vulnerability-cve-2026-114147-dc063db2",
    "title": "ASP.NET Core DoS Vulnerability CVE-2026-114147",
    "summary": "Microsoft identified CVE-2026-114147, a denial‑of‑service flaw in ASP.NET Core affecting web applications. The flaw lets attackers trigger resource exhaustion via crafted requests, causing service downtime; no remote code execution is possible and exploits are not yet documented. Microsoft has issued a patch; developers should update ASP.NET Core to the latest version and monitor application performance for abnormal traffic.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114147",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114147"
    ],
    "additionalSources": [],
    "aliases": [
      "asp-net-core-dos-vulnerability-cve-2026-114147",
      "article-dc063db2",
      "dc063db2",
      "asp-net-core-dos-vulnerability-cve-2026-114147-1feaf4"
    ]
  },
  {
    "slug": "microsoft-updates-asp-net-core-privilege-flaw-guid-3f6c8e5d",
    "title": "Microsoft Updates ASP.NET Core Privilege Flaw Guidance",
    "summary": "Microsoft issued an informational update regarding an elevation of privilege vulnerability in ASP.NET Core tracked under CVE-2026-114146. The security advisory updates documentation links and metadata without altering the underlying technical flaw, which enables privilege escalation. Security teams should consult the revised Microsoft advisory links to verify patch status and deploy required software updates.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114146",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114146"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-asp-net-core-privilege-flaw-guid",
      "article-3f6c8e5d",
      "3f6c8e5d",
      "microsoft-updates-asp-net-core-privilege-flaw-guid-1feaf4",
      "microsoft-updates-asp-net-core-privilege-flaw-guidance"
    ]
  },
  {
    "slug": "asp-net-core-elevation-of-privilege-vulnerability-9e4b9d43",
    "title": "ASP.NET Core Elevation of Privilege Vulnerability CVE-2026-109481",
    "summary": "CVE-2026-109481 describes an elevation of privilege flaw in ASP.NET Core that could allow attackers to gain higher access levels. The vulnerability results from improper validation of user-supplied data during authentication, but no public exploit has been released. Microsoft has issued an informational update; administrators should apply the latest ASP.NET Core patch to mitigate the risk.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109481",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-109481"
    ],
    "additionalSources": [],
    "aliases": [
      "asp-net-core-elevation-of-privilege-vulnerability",
      "article-9e4b9d43",
      "9e4b9d43",
      "asp-net-core-elevation-of-privilege-vulnerability-1ff6ba",
      "asp-net-core-elevation-of-privilege-vulnerability-cve-2026-1"
    ]
  },
  {
    "slug": "microsoft-asp-net-core-info-disclosure-cve-2026-10-8f2b2422",
    "title": "Microsoft ASP.NET Core Info Disclosure CVE-2026-109476",
    "summary": "Microsoft disclosed an information‑disclosure flaw in ASP.NET Core that could expose sensitive data through improperly sanitized error messages. The vulnerability, identified as CVE‑2026‑109476, has a low severity rating and no known active exploitation. Microsoft issued an informational update; security teams should review the change log and apply any recommended patches.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109476",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-109476"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-asp-net-core-info-disclosure-cve-2026-10",
      "article-8f2b2422",
      "8f2b2422",
      "microsoft-asp-net-core-info-disclosure-cve-2026-10-1ff6ba",
      "microsoft-asp-net-core-info-disclosure-cve-2026-109476"
    ]
  },
  {
    "slug": "microsoft-asp-net-core-dos-cve-2026-109478-8102d35e",
    "title": "Microsoft ASP.NET Core DoS CVE-2026-109478",
    "summary": "Microsoft identified a denial‑of‑service vulnerability in ASP.NET Core that can be triggered by malformed requests, potentially exhausting server resources. The flaw, CVE‑2026‑109478, carries a low severity rating and has no known active exploitation. Microsoft released an informational update; administrators should monitor traffic and apply any available patches to mitigate DoS risk.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109478",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-109478"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-asp-net-core-dos-cve-2026-109478",
      "article-8102d35e",
      "8102d35e",
      "microsoft-asp-net-core-dos-cve-2026-109478-1ff6ba"
    ]
  },
  {
    "slug": "net-elevation-privilege-cve-2026-105544-4257502d",
    "title": ".NET Elevation Privilege CVE-2026-105544",
    "summary": "Microsoft announced an informational update for CVE‑2026‑105544, an elevation of privilege vulnerability affecting the .NET framework. The flaw allows local users to gain higher privileges by manipulating the runtime configuration, but no active exploitation has been reported. Microsoft has not released a patch yet; administrators should monitor for future advisories and apply any subsequent fixes when available.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105544",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-105544"
    ],
    "additionalSources": [],
    "aliases": [
      "net-elevation-privilege-cve-2026-105544",
      "article-4257502d",
      "4257502d",
      "net-elevation-privilege-cve-2026-105544-1ff889"
    ]
  },
  {
    "slug": "net-dos-vulnerability-cve-2026-109475-59cd8639",
    "title": ".NET DoS Vulnerability CVE-2026-109475",
    "summary": "Microsoft issued an informational notice for CVE‑2026‑109475, a denial‑of‑service flaw in the .NET framework. The vulnerability permits local users to trigger a crash by sending malformed input to the runtime, but no active exploitation has been observed. No patch has been released; administrators should watch for future updates and apply any subsequent fixes when available.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109475",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-109475"
    ],
    "additionalSources": [],
    "aliases": [
      "net-dos-vulnerability-cve-2026-109475",
      "article-59cd8639",
      "59cd8639",
      "net-dos-vulnerability-cve-2026-109475-1ff6ba"
    ]
  },
  {
    "slug": "microsoft-updates-product-list-for-cve-2026-114159-91575e5e",
    "title": "Microsoft Updates Product List for CVE-2026-114159 RCE",
    "summary": "Microsoft updated its product list for CVE-2026-114159, a Visual Studio remote code execution vulnerability that could allow attackers to run arbitrary code. The update is purely informational, providing no new patch or exploit details, and does not indicate active exploitation. Security teams should review the updated product list, confirm affected installations, and apply any forthcoming patches when released.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114159",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114159"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-product-list-for-cve-2026-114159",
      "article-91575e5e",
      "91575e5e",
      "microsoft-updates-product-list-for-cve-2026-114159-1feaf4",
      "microsoft-updates-product-list-for-cve-2026-114159-rce"
    ]
  },
  {
    "slug": "microsoft-updates-product-list-for-cve-2026-118745-753f3dd2",
    "title": "Microsoft Updates Product List for CVE-2026-118745 RCE",
    "summary": "Microsoft updated its product list for CVE-2026-118745, a Visual Studio remote code execution vulnerability that could allow attackers to run arbitrary code. The update is purely informational, providing no new patch or exploit details, and does not indicate active exploitation. Security teams should review the updated product list, confirm affected installations, and apply any forthcoming patches when released.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118745",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-118745"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-product-list-for-cve-2026-118745",
      "article-753f3dd2",
      "753f3dd2",
      "microsoft-updates-product-list-for-cve-2026-118745-1fe90c",
      "microsoft-updates-product-list-for-cve-2026-118745-rce"
    ]
  },
  {
    "slug": "microsoft-updates-visual-studio-cve-2026-114151-rc-6d361bc9",
    "title": "Microsoft Updates Visual Studio CVE-2026-114151 RCE",
    "summary": "Microsoft issued an informational update for Visual Studio addressing CVE-2026-114151, a remote code execution flaw. The flaw permits unauthenticated code execution via malformed input, yet no public exploit or PoC has been released. The update lists affected product versions only; no patch is required and no immediate remediation is necessary.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114151",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114151"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-visual-studio-cve-2026-114151-rc",
      "article-6d361bc9",
      "6d361bc9",
      "microsoft-updates-visual-studio-cve-2026-114151-rc-1feaf4",
      "microsoft-updates-visual-studio-cve-2026-114151-rce"
    ]
  },
  {
    "slug": "microsoft-updates-visual-studio-cve-2026-114152-rc-76b4d667",
    "title": "Microsoft Updates Visual Studio CVE-2026-114152 RCE",
    "summary": "Microsoft issued an informational update for Visual Studio addressing CVE-2026-114152, a remote code execution flaw. The vulnerability allows unauthenticated code execution through malformed input, but no public exploit or PoC has been disclosed. The update merely lists affected product versions; no patch is required and no immediate remediation is necessary.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114152",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114152"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-visual-studio-cve-2026-114152-rc",
      "article-76b4d667",
      "76b4d667",
      "microsoft-updates-visual-studio-cve-2026-114152-rc-1feaf4",
      "microsoft-updates-visual-studio-cve-2026-114152-rce"
    ]
  },
  {
    "slug": "microsoft-updates-visual-studio-cve-2026-114158-rc-c6216357",
    "title": "Microsoft Updates Visual Studio CVE-2026-114158 RCE",
    "summary": "Microsoft issued an informational update for Visual Studio addressing CVE-2026-114158, a remote code execution flaw. The flaw permits unauthenticated code execution via malformed input, yet no public exploit or PoC has been released. The update lists affected product versions only; no patch is required and no immediate remediation is necessary.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114158",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114158"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-visual-studio-cve-2026-114158-rc",
      "article-c6216357",
      "c6216357",
      "microsoft-updates-visual-studio-cve-2026-114158-rc-1feaf4",
      "microsoft-updates-visual-studio-cve-2026-114158-rce"
    ]
  },
  {
    "slug": "xen-orchestra-authentication-bypass-enables-admin-6ddfe4c0",
    "title": "Xen Orchestra Authentication Bypass Enables Admin Code Execution",
    "summary": "A critical authentication bypass in Xen Orchestra allows attackers to gain administrative privileges on XCP‑ng nodes. The flaw permits arbitrary code execution via crafted API requests, exposing the hypervisor to remote compromise without user interaction. Red Hat and Xen Orchestra have released patches; administrators should apply the latest updates and restrict API access to trusted hosts.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/critical-xen-orchestra-flaws-exploited-in-attacks/",
    "publishedAt": "2026-11-11T15:42:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xen-orchestra-authentication-bypass-enables-admin",
      "article-6ddfe4c0",
      "6ddfe4c0",
      "xen-orchestra-authentication-bypass-enables-admin-7156f1",
      "xen-orchestra-authentication-bypass-enables-admin-code-execu"
    ]
  },
  {
    "slug": "antifox-ai-framework-linked-to-aws-credential-thef-5d1eee3a",
    "title": "AntiFox AI Framework Linked to AWS Credential Theft",
    "summary": "Threat actors are utilizing the AntiFox agentic penetration testing platform to target Amazon Web Services infrastructure and pivot laterally across victim networks. The campaign relies on Alibaba Cloud systems hosting AntiFox interfaces to compromise environment access and steal AWS production secrets. Security teams must monitor cloud environments for unauthorized agentic pentesting tools and audit access permissions for AWS credentials.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/antifox-ai-pentesting-platform-linked.html",
    "publishedAt": "2026-11-11T15:34:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "antifox-ai-framework-linked-to-aws-credential-thef",
      "article-5d1eee3a",
      "5d1eee3a",
      "antifox-ai-framework-linked-to-aws-credential-thef-3a1306",
      "antifox-ai-framework-linked-to-aws-credential-theft"
    ]
  },
  {
    "slug": "ansible-2-4-critical-update-addresses-remote-explo-a6243e06",
    "title": "Ansible 2.4 Critical Update Addresses Remote Exploits",
    "summary": "Red Hat released a critical security update for Ansible Automation Platform 2.4, addressing multiple vulnerabilities that could allow remote code execution. The update includes patches for CVE‑linked flaws, each with a CVSS base score indicating high exploitation risk. Administrators should apply the RHSA‑2026:99006 update immediately and verify that all affected nodes are patched.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99006",
    "publishedAt": "2026-11-11T15:26:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ansible-2-4-critical-update-addresses-remote-explo",
      "article-a6243e06",
      "a6243e06",
      "ansible-2-4-critical-update-addresses-remote-explo-37d683",
      "ansible-2-4-critical-update-addresses-remote-exploits"
    ]
  },
  {
    "slug": "ansible-2-5-critical-update-addresses-remote-explo-26701ba2",
    "title": "Ansible 2.5 Critical Update Addresses Remote Exploits",
    "summary": "Red Hat issued a critical patch for Ansible Automation Platform 2.5, fixing vulnerabilities that could enable remote code execution on managed nodes. Each flaw is referenced by CVE identifiers and carries a high CVSS score, indicating significant exploitation potential. Users should apply the RHSA‑2026:99007 update promptly and audit their Ansible inventory for unpatched hosts.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99007",
    "publishedAt": "2026-11-11T15:23:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ansible-2-5-critical-update-addresses-remote-explo",
      "article-26701ba2",
      "26701ba2",
      "ansible-2-5-critical-update-addresses-remote-explo-37d683",
      "ansible-2-5-critical-update-addresses-remote-exploits"
    ]
  },
  {
    "slug": "antifox-ai-agents-target-aws-credentials-4539ca27",
    "title": "AntiFox AI Agents Target AWS Credentials",
    "summary": "Attackers deploy AntiFox AI agents on Alibaba Cloud to harvest AWS credentials from targeted web services. The open-source platform automates credential extraction, enabling rapid lateral movement within compromised AWS environments. Defenders should restrict outbound traffic from cloud instances, enforce least‑privilege IAM roles, and monitor for anomalous credential usage daily actively continuously.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-use-antifox-ai-agents-in-aws-credential-theft-attacks/",
    "publishedAt": "2026-11-11T15:12:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "antifox-ai-agents-target-aws-credentials",
      "article-4539ca27",
      "4539ca27",
      "antifox-ai-agents-target-aws-credentials-6ce1b6"
    ]
  },
  {
    "slug": "red-hat-updates-java-runtime-on-rhel-8-f2c13183",
    "title": "Red Hat Updates Java Runtime on RHEL 8",
    "summary": "Red Hat released an important security update for java‑1.8.0‑openjdk on RHEL 8, fixing Java runtime vulnerabilities. The patch addresses remote code execution and information disclosure flaws with CVSS scores between 7.0 and 8.5. Apply the update promptly, test application compatibility, and monitor for anomalous runtime behavior to maintain security posture.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95609",
    "publishedAt": "2026-11-11T15:01:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-java-runtime-on-rhel-8",
      "article-f2c13183",
      "f2c13183",
      "red-hat-updates-java-runtime-on-rhel-8-37d83e"
    ]
  },
  {
    "slug": "linux-ebpf-rootkits-spread-via-underground-forums-ca178826",
    "title": "Linux eBPF Rootkits Spread via Underground Forums",
    "summary": "Linux eBPF rootkits enable malicious code to run without loading kernel modules, allowing attackers to conceal activity. Flare analysis shows underground forums distribute rootkit source, tutorials, and exploits, expanding the threat surface across Linux systems. Security teams should monitor eBPF activity, enforce kernel module signing, and apply vendor patches to mitigate hidden rootkits.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/ebpf-rootkits-why-underground-actors-are-taking-notice/",
    "publishedAt": "2026-11-11T15:01:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-ebpf-rootkits-spread-via-underground-forums",
      "article-ca178826",
      "ca178826",
      "linux-ebpf-rootkits-spread-via-underground-forums-3277df"
    ]
  },
  {
    "slug": "red-hat-patches-mod-http2-on-rhel-9-8-f0fa443e",
    "title": "Red Hat Patches mod_http2 on RHEL 9.8",
    "summary": "Red Hat issued an important security update for mod_http2 on RHEL 9.8, addressing critical HTTP/2 handling flaws. The update mitigates potential denial‑of‑service and information disclosure vulnerabilities, with CVSS scores up to 8.0. Deploy the patch immediately, verify HTTP/2 functionality, and monitor for abnormal traffic patterns to preserve service availability across all affected servers.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98982",
    "publishedAt": "2026-11-11T14:58:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-patches-mod-http2-on-rhel-9-8",
      "article-f0fa443e",
      "f0fa443e",
      "red-hat-patches-mod-http2-on-rhel-9-8-37d6d5"
    ]
  },
  {
    "slug": "kai-adds-external-attack-surface-management-to-def-a9e35699",
    "title": "Kai Adds External Attack Surface Management to Defense Platform",
    "summary": "Security vendor Kai announced External Attack Surface Management capability integration into its Autonomous Defense Platform to monitor internet-facing assets. The feature addresses visibility gaps in internal exposure programs by identifying externally facing vulnerabilities visible to potential threat actors. The unified platform consolidates internal and external security exposures into a single remediation workflow to streamline risk mitigation efforts.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/kai-autonomous-defense-platform/",
    "publishedAt": "2026-11-11T14:55:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kai-adds-external-attack-surface-management-to-def",
      "article-a9e35699",
      "a9e35699",
      "kai-adds-external-attack-surface-management-to-def-76b889",
      "kai-adds-external-attack-surface-management-to-defense-platf"
    ]
  },
  {
    "slug": "red-hat-issues-openjdk-8-security-update-for-rhel-5832fee3",
    "title": "Red Hat Issues OpenJDK 8 Security Update for RHEL 7",
    "summary": "Red Hat released a security update for java‑1.8.0‑openjdk on Red Enterprise Linux 7 Extended Lifecycle Support to address multiple vulnerabilities. The update covers unspecified Java runtime flaws rated Important, with CVSS base scores linked via CVE references, potentially enabling remote code execution or privilege escalation. System administrators should apply the RHSA‑2026:95598 patch and verify Java version to ensure protection.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95598",
    "publishedAt": "2026-11-11T14:33:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-openjdk-8-security-update-for-rhel",
      "article-5832fee3",
      "5832fee3",
      "red-hat-issues-openjdk-8-security-update-for-rhel-37d841",
      "red-hat-issues-openjdk-8-security-update-for-rhel-7"
    ]
  },
  {
    "slug": "git-issues-patches-for-six-vulnerabilities-includi-beb706d4",
    "title": "Git Issues Patches for Six Vulnerabilities, Including Code Execution",
    "summary": "Git released patches for six vulnerabilities, including CVE-2026-111760, which allows code execution during recursive clones. The flaw stems from an integer truncation in Git’s index handling, enabling attackers to write unintended files or cause memory corruption when processing malicious repositories. Git has issued security updates; users should apply the latest release to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/git-project-security-updates/",
    "publishedAt": "2026-11-11T14:26:12.000Z",
    "cves": [
      "CVE-2026-111760"
    ],
    "additionalSources": [],
    "aliases": [
      "git-issues-patches-for-six-vulnerabilities-includi",
      "article-beb706d4",
      "beb706d4",
      "git-issues-patches-for-six-vulnerabilities-includi-4c12d4",
      "git-issues-patches-for-six-vulnerabilities-including-code-ex"
    ]
  },
  {
    "slug": "cloudflare-explains-quepaxa-consensus-algorithm-1e0211c8",
    "title": "Cloudflare Explains QuePaxa Consensus Algorithm",
    "summary": "Cloudflare is building an experimental consensus service that uses the novel QuePaxa algorithm, a consensus mechanism never deployed before. QuePaxa blends proof‑of‑work and proof‑of‑stake to reduce latency and increase fault tolerance across distributed nodes. The post explains the algorithm’s design and rationale, offering insights for researchers and practitioners exploring next‑generation consensus.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/choosing-quepaxa/",
    "publishedAt": "2026-11-11T14:24:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-explains-quepaxa-consensus-algorithm",
      "article-1e0211c8",
      "1e0211c8",
      "cloudflare-explains-quepaxa-consensus-algorithm-7323e2"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-security-update-for-rhel-1-54d0cb1a",
    "title": "Red Hat Releases Kernel Security Update for RHEL 10",
    "summary": "Red Hat issued a kernel update for Red Enterprise Linux 10 to address multiple security issues. The update targets unspecified kernel vulnerabilities rated Important, with CVSS base scores available via CVE references, indicating potential privilege escalation or denial of service if exploited. Administrators should apply the RHSA‑2026:98638 patch promptly and verify kernel version to ensure protection.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98638",
    "publishedAt": "2026-11-11T14:10:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-security-update-for-rhel-1",
      "article-54d0cb1a",
      "54d0cb1a",
      "red-hat-releases-kernel-security-update-for-rhel-1-37d6e1",
      "red-hat-releases-kernel-security-update-for-rhel-10"
    ]
  },
  {
    "slug": "qlik-sense-servers-targeted-by-reverse-shell-attem-b382a9bf",
    "title": "Qlik Sense Servers Targeted by Reverse Shell Attempts",
    "summary": "Threat actors targeted Qlik Sense servers in October 2026, attempting to deliver PowerShell reverse shells across multiple environments. The activity, observed by Cynet's CyOps and Research teams, involved a narrow three‑minute window and failed to achieve code execution or credential compromise. Security teams should monitor for similar attempts and ensure Qlik Sense is patched to the latest version.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-target-qlik-sense-servers-with.html",
    "publishedAt": "2026-11-11T14:01:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "qlik-sense-servers-targeted-by-reverse-shell-attem",
      "article-b382a9bf",
      "b382a9bf",
      "qlik-sense-servers-targeted-by-reverse-shell-attem-43fcd1",
      "qlik-sense-servers-targeted-by-reverse-shell-attempts"
    ]
  },
  {
    "slug": "asus-zoom-issue-patches-for-execution-flaws-8bf454f6",
    "title": "Asus, Zoom Issue Patches for Execution Flaws",
    "summary": "Asus and Zoom released security patches addressing critical flaws that could allow attackers to execute arbitrary code, overwrite memory, and elevate privileges. The vulnerabilities involve memory corruption and privilege escalation paths, potentially enabling full system compromise if exploited. Users should install the latest updates for both Asus firmware and Zoom client immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/asus-zoom-release-security-patches/",
    "publishedAt": "2026-11-11T13:58:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "asus-zoom-issue-patches-for-execution-flaws",
      "article-8bf454f6",
      "8bf454f6",
      "asus-zoom-issue-patches-for-execution-flaws-33d66f"
    ]
  },
  {
    "slug": "windows-signdrop-0-day-exploit-lets-attackers-gain-0c53ce65",
    "title": "Windows SignDrop 0-Day Exploit Lets Attackers Gain SYSTEM Privileges Through CLFS Protection",
    "summary": "A public exploit called SignDrop targets a Windows security feature meant to stop attacks on the Common Log File System (CLFS). It claims to turn a normal user account into a SYSTEM account, the highest level of control on Windows. The flaw has no CVE number and no patch as of November 11, 2026.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/windows-signdrop-zero-day-exploit/",
    "publishedAt": "2026-11-11T13:57:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-signdrop-0-day-exploit-lets-attackers-gain",
      "article-0c53ce65",
      "0c53ce65",
      "windows-signdrop-0-day-exploit-lets-attackers-gain-5900c9",
      "windows-signdrop-0-day-exploit-lets-attackers-gain-system-pr"
    ]
  },
  {
    "slug": "embed-security-updates-ai-soc-platform-for-custom-76e60024",
    "title": "Embed Security Updates AI SOC Platform for Custom Investigations",
    "summary": "Embed Security released updated capabilities for its AI SOC Platform to enhance threat detection engineering. The update introduces customer-built iSteps, NoiseIQ Memories, and Detection Engineering modules, allowing analysts to embed operational knowledge directly into the autonomous decision layer. Security operations teams can utilize these features to apply custom organizational expertise across continuous SOC workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/embed-security-expands-ai-soc-platform/",
    "publishedAt": "2026-11-11T13:54:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "embed-security-updates-ai-soc-platform-for-custom",
      "article-76e60024",
      "76e60024",
      "embed-security-updates-ai-soc-platform-for-custom-2b3726",
      "embed-security-updates-ai-soc-platform-for-custom-investigat"
    ]
  },
  {
    "slug": "remus-malware-claims-persistent-gmail-access-after-81bdb562",
    "title": "Remus Malware Claims Persistent Gmail Access After Reset",
    "summary": "The Remus infostealer asserts it can maintain Gmail access even after victims reset their passwords. The malware reportedly exploits credential persistence mechanisms, potentially leveraging OAuth tokens or cached credentials to bypass password changes. Users should revoke app permissions, enable two‑factor authentication, and monitor account activity regularly to mitigate the threat.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/remus-malware-claims-gmail-access-even-after-you-change-your-password",
    "publishedAt": "2026-11-11T13:42:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "remus-malware-claims-persistent-gmail-access-after",
      "article-81bdb562",
      "81bdb562",
      "remus-malware-claims-persistent-gmail-access-after-b7f879",
      "remus-malware-claims-persistent-gmail-access-after-reset"
    ]
  },
  {
    "slug": "rhsa-2026-98592-important-go-fdo-client-security-u-9fe8f942",
    "title": "RHSA-2026:98592: Important: go-fdo-client security update",
    "summary": "An update for go-fdo-client is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98592",
    "publishedAt": "2026-11-11T13:41:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98592-important-go-fdo-client-security-u",
      "article-9fe8f942",
      "9fe8f942",
      "rhsa-2026-98592-important-go-fdo-client-security-u-37d6e4",
      "rhsa-2026-98592-important-go-fdo-client-security-update"
    ]
  },
  {
    "slug": "citrix-ivanti-release-patches-for-rce-vulnerabilit-9b10f27d",
    "title": "Citrix, Ivanti Release Patches for RCE Vulnerabilities",
    "summary": "Citrix and Ivanti disclosed critical vulnerabilities that let attackers tamper with certificate entries and achieve remote code execution on affected hosts. The flaws arise from improper certificate validation, enabling arbitrary code execution and full host compromise; no public exploit is confirmed. Both vendors released patches; administrators should apply updates immediately and verify certificate integrity to mitigate risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/citrix-ivanti-patch-critical-and-high-severity-vulnerabilities/",
    "publishedAt": "2026-11-11T13:37:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "citrix-ivanti-release-patches-for-rce-vulnerabilit",
      "article-9b10f27d",
      "9b10f27d",
      "citrix-ivanti-release-patches-for-rce-vulnerabilit-3eadc4",
      "citrix-ivanti-release-patches-for-rce-vulnerabilities"
    ]
  },
  {
    "slug": "rhsa-2026-98595-important-flatpak-security-update-defea441",
    "title": "RHSA-2026:98595: Important: flatpak security update",
    "summary": "An update for flatpak is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98595",
    "publishedAt": "2026-11-11T13:37:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98595-important-flatpak-security-update",
      "article-defea441",
      "defea441",
      "rhsa-2026-98595-important-flatpak-security-update-37d6e4"
    ]
  },
  {
    "slug": "poland-shuts-down-epuap-after-cyberattack-b4bd6997",
    "title": "Poland Shuts Down ePUAP After Cyberattack",
    "summary": "Poland’s nationwide ePUAP platform, used for submitting official documents and communicating with government agencies, was shut down after a cyberattack. The attack disrupted the platform’s availability, preventing citizens from completing administrative procedures online. Polish authorities are investigating the incident, and the platform will be restored after security measures are verified.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/poland-shuts-down-government-services-platform-cyberattack",
    "publishedAt": "2026-11-11T13:18:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "poland-shuts-down-epuap-after-cyberattack",
      "article-b4bd6997",
      "b4bd6997",
      "poland-shuts-down-epuap-after-cyberattack-3e57c8"
    ]
  },
  {
    "slug": "britain-france-issue-guidelines-for-hacking-firms-94bb8378",
    "title": "Britain, France Issue Guidelines for Hacking Firms",
    "summary": "Britain and France have released the first regulatory guidelines targeting commercial hacking firms that develop, sell, or finance cyber‑crime infrastructure components (CCICs). The guidelines require firms to vet customers, implement technical safeguards against misuse, and maintain monitoring and reporting systems for abuse incidents. Compliance will be monitored by national authorities, and non‑compliance could result in licensing revocation or legal action.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/britain-france-set-out-guidelines-for-commercial-hacking-firms",
    "publishedAt": "2026-11-11T13:11:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "britain-france-issue-guidelines-for-hacking-firms",
      "article-94bb8378",
      "94bb8378",
      "britain-france-issue-guidelines-for-hacking-firms-51648b"
    ]
  },
  {
    "slug": "blind-eagle-targets-latin-america-with-fake-court-95822401",
    "title": "Blind Eagle Targets Latin America with Fake Court RATs",
    "summary": "Law enforcement intelligence reports that the state‑backed threat actor Blind Eagle targets Latin American entities with fake court‑related RATs. The RATs masquerade as legitimate court software, allowing attackers to establish persistent footholds and exfiltrate sensitive data. Security teams should verify software authenticity, enforce strict application whitelisting, and monitor for anomalous remote access activity.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/blind-eagle-uses-fake-court-notices-to-deliver-remote-a",
    "publishedAt": "2026-11-11T13:10:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "blind-eagle-targets-latin-america-with-fake-court",
      "article-95822401",
      "95822401",
      "blind-eagle-targets-latin-america-with-fake-court-196cd8",
      "blind-eagle-targets-latin-america-with-fake-court-rats"
    ]
  },
  {
    "slug": "git-cve-2026-111760-enables-remote-code-execution-c8ba2879",
    "title": "Git CVE-2026-111760 Enables Remote Code Execution",
    "summary": "Git introduced CVE-2026-111760, a flaw that permits remote code execution in enterprise environments. The vulnerability arises from improper input validation in the Git server component, allowing attackers to inject malicious commands; no public exploit is documented. A patch is available; administrators should update Git to the latest release and monitor logs for suspicious activity.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/git-patches-flaw-that-lets-malicious-repositories-execu",
    "publishedAt": "2026-11-11T13:10:43.000Z",
    "cves": [
      "CVE-2026-111760"
    ],
    "additionalSources": [],
    "aliases": [
      "git-cve-2026-111760-enables-remote-code-execution",
      "article-c8ba2879",
      "c8ba2879",
      "git-cve-2026-111760-enables-remote-code-execution-3a8d59"
    ]
  },
  {
    "slug": "cisa-kev-catalog-detect-patch-six-new-exploits-379e8ffb",
    "title": "CISA KEV Catalog: Detect & Patch Six New Exploits",
    "summary": "Critical security intelligence alert regarding CISA KEV Catalog: Detect & Patch Six. Review root-cause telemetry, hunt via detection rules, and patch today. The vulnerability is tracked as CVE-2026-20320.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cisa-adds-six-known-exploited-vulnerabilities-to-catalo",
    "publishedAt": "2026-11-11T13:10:29.000Z",
    "cves": [
      "CVE-2026-20320"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-kev-catalog-detect-patch-six-new-exploits",
      "article-379e8ffb",
      "379e8ffb",
      "cisa-kev-catalog-detect-patch-six-new-exploits-1b6aff"
    ]
  },
  {
    "slug": "cisco-broadworks-cve-2026-20320-xxe-flaw-patch-cfad1869",
    "title": "Cisco BroadWorks CVE-2026-20320: XXE Flaw Patch",
    "summary": "Cisco BroadWorks is affected by CVE-2026-20320, an XML External Entity (XXE) flaw that can enable remote code execution. The vulnerability allows attackers to read arbitrary files and execute commands on the BroadWorks server when processing crafted XML requests. Cisco has released a patch; administrators should apply the update immediately and enable input validation to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cisa-flags-cisco-broadworks-flaw-as-actively-exploited",
    "publishedAt": "2026-11-11T13:10:06.000Z",
    "cves": [
      "CVE-2026-20320"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-broadworks-cve-2026-20320-xxe-flaw-patch",
      "article-cfad1869",
      "cfad1869",
      "cisco-broadworks-cve-2026-20320-xxe-flaw-patch-2ca8f4"
    ]
  },
  {
    "slug": "microsoft-cve-2026-124194-enables-outlook-rce-ac9d4617",
    "title": "Microsoft CVE-2026-124194 Enables Outlook RCE",
    "summary": "Microsoft disclosed CVE-2026-124194, a flaw that allows remote code execution in Outlook on enterprise systems. The issue stems from improper handling of email attachments, enabling attackers to execute arbitrary code; no public exploit is reported. Microsoft has released a patch; users should update Outlook immediately and disable macro execution as a precaution.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/microsoft-november-2026-patch-tuesday-fixes-1-235-flaws",
    "publishedAt": "2026-11-11T13:09:51.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-cve-2026-124194-enables-outlook-rce",
      "article-ac9d4617",
      "ac9d4617",
      "microsoft-cve-2026-124194-enables-outlook-rce-1cb212"
    ]
  },
  {
    "slug": "rhsa-2026-98471-important-openexr-security-update-56dd69b3",
    "title": "RHSA-2026:98471: Important: openexr security update",
    "summary": "An update for openexr is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98471",
    "publishedAt": "2026-11-11T13:07:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98471-important-openexr-security-update",
      "article-56dd69b3",
      "56dd69b3",
      "rhsa-2026-98471-important-openexr-security-update-37d6e8"
    ]
  },
  {
    "slug": "n-able-issues-emergency-hotfix-after-33-vulnerabil-9ad632e5",
    "title": "N‑able Issues Emergency Hotfix After 33 Vulnerabilities Shutdown",
    "summary": "N‑able’s hosted remote monitoring platform suffered a worldwide shutdown after the public disclosure of 33 vulnerabilities. The emergency update, build 2026.4.1.26, addresses seven published CVEs and implements server, agent, and probe hardening to mitigate the identified weaknesses. Security teams should apply the hotfix immediately and review configuration settings to prevent similar disruptions.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/n-able-n-central-security-vulnerabilities/",
    "publishedAt": "2026-11-11T12:57:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-issues-emergency-hotfix-after-33-vulnerabil",
      "article-9ad632e5",
      "9ad632e5",
      "n-able-issues-emergency-hotfix-after-33-vulnerabil-dd18ec",
      "n-able-issues-emergency-hotfix-after-33-vulnerabilities-shut"
    ]
  },
  {
    "slug": "red-hat-rhc-update-addresses-important-vulnerabili-dc8f8a9d",
    "title": "Red Hat rhc Update Addresses Important Vulnerabilities",
    "summary": "Red Hat released a security update for the rhc client on Enterprise Linux 7, addressing vulnerabilities that could allow privilege escalation. The advisory references several CVEs with CVSS scores ranging from 7.5 to 8.3, indicating high exploitation potential for authenticated users. Administrators should apply the rhc update immediately and verify that all affected components are patched to prevent unauthorized access.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98794",
    "publishedAt": "2026-11-11T12:40:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-rhc-update-addresses-important-vulnerabili",
      "article-dc8f8a9d",
      "dc8f8a9d",
      "red-hat-rhc-update-addresses-important-vulnerabili-37d6dc",
      "red-hat-rhc-update-addresses-important-vulnerabilities"
    ]
  },
  {
    "slug": "red-hat-tigervnc-update-fixes-important-vulnerabil-b8109f0a",
    "title": "Red Hat tigervnc Update Fixes Important Vulnerabilities",
    "summary": "Red Hat issued an update for tigervnc on Enterprise Linux 9, fixing vulnerabilities that could enable code execution via the VNC protocol. The advisory lists CVEs with CVSS scores of 9.0, indicating a severe risk for systems exposed to untrusted network traffic. Users must apply the tigervnc patch immediately and restrict VNC access to trusted hosts to mitigate the threat.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98538",
    "publishedAt": "2026-11-11T12:39:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-tigervnc-update-fixes-important-vulnerabil",
      "article-b8109f0a",
      "b8109f0a",
      "red-hat-tigervnc-update-fixes-important-vulnerabil-37d6e5",
      "red-hat-tigervnc-update-fixes-important-vulnerabilities"
    ]
  },
  {
    "slug": "rhsa-2026-98531-important-qt5-qtdeclarative-securi-511b4b77",
    "title": "RHSA-2026:98531: Important: qt5-qtdeclarative security update",
    "summary": "An update for qt5-qtdeclarative is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98531",
    "publishedAt": "2026-11-11T12:34:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98531-important-qt5-qtdeclarative-securi",
      "article-511b4b77",
      "511b4b77",
      "rhsa-2026-98531-important-qt5-qtdeclarative-securi-37d6e5",
      "rhsa-2026-98531-important-qt5-qtdeclarative-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-98529-important-nginx-security-update-cf63534c",
    "title": "RHSA-2026:98529: Important: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98529",
    "publishedAt": "2026-11-11T12:34:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98529-important-nginx-security-update",
      "article-cf63534c",
      "cf63534c",
      "rhsa-2026-98529-important-nginx-security-update-37d6e5"
    ]
  },
  {
    "slug": "n-able-issues-hotfixes-for-zero-day-rmm-flaws-2b6e2e65",
    "title": "N‑able Issues Hotfixes for Zero‑Day RMM Flaws",
    "summary": "N‑able issued hotfixes for zero‑day flaws in its N‑central RMM platform that were publicly disclosed and caused hosted environments to go offline. The flaws arise from unvalidated input in the remote API, letting attackers execute arbitrary code and disrupt services; no public exploit exists. Administrators should apply the hotfixes immediately, monitor API traffic for anomalies, and disable unused remote endpoints.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/n-able-releases-security-hotfixes-for-zero-day-vulnerabilities/",
    "publishedAt": "2026-11-11T12:32:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-issues-hotfixes-for-zero-day-rmm-flaws",
      "article-2b6e2e65",
      "2b6e2e65",
      "n-able-issues-hotfixes-for-zero-day-rmm-flaws-65971b"
    ]
  },
  {
    "slug": "finite-state-secures-27m-for-device-security-platf-03104875",
    "title": "Finite State Secures $27M for Device Security Platform",
    "summary": "Finite State raised $27 million in Series C funding to expand its device security platform internationally. The investment will accelerate autonomous features for securing software and firmware across connected devices, including advanced firmware analysis and supply chain risk detection. Security teams should monitor platform enhancements for improved vulnerability management capabilities.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/finite-state-raises-27-million-to-secure-software-and-firmware-in-connected-devices/",
    "publishedAt": "2026-11-11T12:24:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "finite-state-secures-27m-for-device-security-platf",
      "article-03104875",
      "03104875",
      "finite-state-secures-27m-for-device-security-platf-527510",
      "finite-state-secures-27m-for-device-security-platform"
    ]
  },
  {
    "slug": "muse-band-brain-data-trained-ai-without-user-conse-21f1f218",
    "title": "Muse Band Brain Data Trained AI Without User Consent",
    "summary": "Interaxon trained AI models on de-identified brainwave data from Muse sleep band users without explicit consent. The company revised its privacy policy only after journalistic inquiries, revealing inadequate transparency around biometric data usage. Users should review updated privacy terms and consider opting out of data sharing features, while security teams assess biometric data handling practices in consumer IoT devices.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/ai/2026/11/muse-sleep-band-users-werent-told-their-brain-data-was-training-ai",
    "publishedAt": "2026-11-11T12:23:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "muse-band-brain-data-trained-ai-without-user-conse",
      "article-21f1f218",
      "21f1f218",
      "muse-band-brain-data-trained-ai-without-user-conse-3103fc",
      "muse-band-brain-data-trained-ai-without-user-consent"
    ]
  },
  {
    "slug": "35-000-grok-apps-exposed-leaking-confidential-data-b61d131a",
    "title": "35,000 Grok Apps Exposed Leaking Confidential Data",
    "summary": "Over 35,000 Grok-built applications were publicly accessible without authentication, exposing internal business data and credentials. Researchers found 35,578 of 37,571 apps open to anyone, with approximately 10% containing sensitive corporate information including passwords. Organizations must immediately audit Grok app deployments, enforce authentication, rotate any exposed credentials, and monitor for potential misuse of leaked credentials.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/over-35000-grok-built-apps-exposed.html",
    "publishedAt": "2026-11-11T12:19:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "35-000-grok-apps-exposed-leaking-confidential-data",
      "article-b61d131a",
      "b61d131a",
      "35-000-grok-apps-exposed-leaking-confidential-data-2138c5"
    ]
  },
  {
    "slug": "fortinet-releases-patch-for-nearly-100-vulnerabili-2d6ccff8",
    "title": "Fortinet Releases Patch for Nearly 100 Vulnerabilities",
    "summary": "Fortinet issued a comprehensive patch update covering almost 100 vulnerabilities discovered during AI‑driven security testing across multiple Fortinet devices. The update addresses a mix of authentication bypasses, privilege escalation flaws, and buffer overflows across FortiGate and FortiManager products. Administrators should apply the latest firmware and verify configuration compliance to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/fortinet-patches-nearly-100-vulnerabilities/",
    "publishedAt": "2026-11-11T12:10:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortinet-releases-patch-for-nearly-100-vulnerabili",
      "article-2d6ccff8",
      "2d6ccff8",
      "fortinet-releases-patch-for-nearly-100-vulnerabili-5b88be",
      "fortinet-releases-patch-for-nearly-100-vulnerabilities"
    ]
  },
  {
    "slug": "three-arrested-for-ai-voice-impersonation-fraud-2307b996",
    "title": "Three Arrested for AI Voice Impersonation Fraud",
    "summary": "Three individuals were arrested for using AI-generated voice and image impersonation to defraud companies of large payments. The scheme targeted executives and attorneys across multiple organizations between 2024 and 2026, leveraging deepfake technology for social engineering. Law enforcement agencies in Spain, the UK, and the US collaborated on the arrests, highlighting the growing threat of AI-enabled fraud.",
    "category": "General",
    "severity": "LOW",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/11/three-people-arrested-for-ai-enhanced-impersonation-fraud.html",
    "publishedAt": "2026-11-11T12:05:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "three-arrested-for-ai-voice-impersonation-fraud",
      "article-2307b996",
      "2307b996",
      "three-arrested-for-ai-voice-impersonation-fraud-989bbd"
    ]
  },
  {
    "slug": "xen-orchestra-auth-bypass-vsa-2026-062-patched-afced55d",
    "title": "Xen Orchestra Auth Bypass VSA-2026-062 Patched",
    "summary": "Xen Orchestra VSA-2026-062 enables attackers to bypass authentication and gain unauthorized access to virtual machine management interfaces. The flaw exploits a missing session validation check, allowing credentialless access with a CVSS score of 8.1. Red Hat has issued a patch for Xen Orchestra; security teams should update immediately and enforce strict access controls.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/hackers-exploit-critical-xen-orchestra-auth-bypass-flaw",
    "publishedAt": "2026-11-11T11:57:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xen-orchestra-auth-bypass-vsa-2026-062-patched",
      "article-afced55d",
      "afced55d",
      "xen-orchestra-auth-bypass-vsa-2026-062-patched-5e576d",
      "xen-orchestra-auth-bypass-cve-2026-123158-patched-0e92fe33"
    ]
  },
  {
    "slug": "claude-code-ai-discovers-technique-to-turn-dormant-7cfee60b",
    "title": "Claude Code AI Discovers Technique to Turn Dormant Model Neurons Into Hidden Malware Triggers",
    "summary": "Claude Code helped uncover a technique that can turn an otherwise capable AI model into a sleeper agent by changing fewer than 10 dormant neurons. Called Lazarus, the method plants a hidden backdoor in model weights, allowing an attacker’s trigger to make an AI agent produce commands that download and run malicious code.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/claude-code-ai/",
    "publishedAt": "2026-11-11T11:57:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "claude-code-ai-discovers-technique-to-turn-dormant",
      "article-7cfee60b",
      "7cfee60b",
      "claude-code-ai-discovers-technique-to-turn-dormant-228793",
      "claude-code-ai-discovers-technique-to-turn-dormant-model-neu"
    ]
  },
  {
    "slug": "git-fixes-6-vulnerabilities-enabling-code-executio-6e926cb9",
    "title": "Git Fixes 6 Vulnerabilities Enabling Code Execution via Cloning",
    "summary": "Git released 2.56.1, fixing six flaws that could allow code execution during recursive cloning. The critical bug causes an out‑of‑bounds write in the clone process; the others involve unsafe file writes and memory corruption in merges and patches. Upgrade to 2.56.1 or backport the patches to older releases like 2.55.1 and 2.54.1.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/git-fixes-security-vulnerabilities/",
    "publishedAt": "2026-11-11T11:33:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "git-fixes-6-vulnerabilities-enabling-code-executio",
      "article-6e926cb9",
      "6e926cb9",
      "git-fixes-6-vulnerabilities-enabling-code-executio-5c5eb7",
      "git-fixes-6-vulnerabilities-enabling-code-execution-via-clon"
    ]
  },
  {
    "slug": "windows-bitlocker-vulnerabilities-allow-attackers-7dee1c25",
    "title": "Windows BitLocker Vulnerabilities Allow Attackers to Bypass Security Feature",
    "summary": "Microsoft has disclosed two Windows BitLocker security feature bypass vulnerabilities that could allow attackers with physical access to weaken device protections. Published on November 10, 2026, the flaws are tracked as CVE-2026-97015 and CVE-2026-119832. Microsoft rates both as Important, with CVSS base scores of 6.8 and 5.9, respectively.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/windows-bitlocker-security-bypass/",
    "publishedAt": "2026-11-11T11:31:29.000Z",
    "cves": [
      "CVE-2026-97015",
      "CVE-2026-119832"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-bitlocker-vulnerabilities-allow-attackers",
      "article-7dee1c25",
      "7dee1c25",
      "windows-bitlocker-vulnerabilities-allow-attackers-6df65b",
      "windows-bitlocker-vulnerabilities-allow-attackers-to-bypass-"
    ]
  },
  {
    "slug": "microsoft-patch-tuesday-addresses-actively-exploit-a1376189",
    "title": "Microsoft Patch Tuesday Addresses Actively Exploited Outlook CVE",
    "summary": "Microsoft released a Patch Tuesday update for Outlook to remediate an actively exploited vulnerability identified as CVE-2026-124194. The flaw permits remote code execution via malicious email attachments, enabling attackers to execute arbitrary code on affected systems. Administrators should apply the Outlook patch immediately and verify Office updates to close the exploitation vector.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/bugs/2026/11/microsoft-patch-tuesday-fixes-outlook-flaw-already-under-attack",
    "publishedAt": "2026-11-11T11:25:05.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-patch-tuesday-addresses-actively-exploit",
      "article-a1376189",
      "a1376189",
      "microsoft-patch-tuesday-addresses-actively-exploit-344499",
      "microsoft-patch-tuesday-addresses-actively-exploited-outlook"
    ]
  },
  {
    "slug": "rhsa-2026-98588-moderate-openssl-security-bug-fix-00a2dfee",
    "title": "RHSA-2026:98588: Moderate: openssl security, bug fix, and enhancement update",
    "summary": "An update for openssl is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98588",
    "publishedAt": "2026-11-11T11:23:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98588-moderate-openssl-security-bug-fix",
      "article-00a2dfee",
      "00a2dfee",
      "rhsa-2026-98588-moderate-openssl-security-bug-fix-37d6e4",
      "rhsa-2026-98588-moderate-openssl-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "rhsa-2026-98586-important-networkmanager-security-54b55bf3",
    "title": "RHSA-2026:98586: Important: NetworkManager security update",
    "summary": "An update for NetworkManager is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98586",
    "publishedAt": "2026-11-11T11:23:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98586-important-networkmanager-security",
      "article-54b55bf3",
      "54b55bf3",
      "rhsa-2026-98586-important-networkmanager-security-37d6e4",
      "rhsa-2026-98586-important-networkmanager-security-update"
    ]
  },
  {
    "slug": "multiple-windows-remote-desktop-flaws-allow-attack-59540717",
    "title": "Multiple Windows Remote Desktop Flaws Allow Attackers to Execute Code Over Network",
    "summary": "Microsoft has released security updates for four Windows Remote Desktop Client vulnerabilities that could allow attackers to run code through network connections or local access. Published on November 10, 2026, the flaws involve memory handling errors and a race condition.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/multiple-windows-remote-desktop-vulnerabilities/",
    "publishedAt": "2026-11-11T11:22:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "multiple-windows-remote-desktop-flaws-allow-attack",
      "article-59540717",
      "59540717",
      "multiple-windows-remote-desktop-flaws-allow-attack-653499",
      "multiple-windows-remote-desktop-flaws-allow-attackers-to-exe"
    ]
  },
  {
    "slug": "microsoft-resolves-usb-audio-issues-from-september-f7c039c5",
    "title": "Microsoft Resolves USB Audio Issues from September Updates",
    "summary": "Microsoft addressed USB audio problems affecting Windows users who installed September security updates. The issue stemmed from a driver patch that caused device enumeration failures, disrupting sound output for affected systems; no exploitation was reported. The November 2026 cumulative update restores driver behavior, and users are advised to install the latest package to eliminate the audio malfunction.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-fixes-usb-audio-issues-caused-by-september-security-updates/",
    "publishedAt": "2026-11-11T11:18:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-resolves-usb-audio-issues-from-september",
      "article-f7c039c5",
      "f7c039c5",
      "microsoft-resolves-usb-audio-issues-from-september-7d9763",
      "microsoft-resolves-usb-audio-issues-from-september-updates"
    ]
  },
  {
    "slug": "microsoft-researchers-demonstrate-hidden-backdoor-7a159787",
    "title": "Microsoft researchers demonstrate hidden backdoor technique for AI agents",
    "summary": "Microsoft researchers have demonstrated how small changes to an AI model can implant a hidden backdoor, causing an agent to execute an attacker’s command when a specific trigger appears. The technique, called Lazarus, requires no model retraining and allows the agent to behave normally during standard safety evaluations.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/microsoft-hidden-ai-backdoors-lazarus/",
    "publishedAt": "2026-11-11T10:55:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-researchers-demonstrate-hidden-backdoor",
      "article-7a159787",
      "7a159787",
      "microsoft-researchers-demonstrate-hidden-backdoor-39d37f",
      "microsoft-researchers-demonstrate-hidden-backdoor-technique-"
    ]
  },
  {
    "slug": "usn-9041-1-uutils-coreutils-vulnerabilities-8f597bd7",
    "title": "USN-9041-1: uutils coreutils vulnerabilities",
    "summary": "A local attacker could possibly use this issue to obtain sensitive information or modify file permissions unexpectedly. (CVE-2026-35341) It was discovered that uutils coreutils dd incorrectly suppressed errors during file truncation operations. A local attacker could possibly use this issue to cause silent data corruption. (CVE-2026-35344) It was discovered that uutils coreutils tail incorrectly followed symbolic links when using the --follow=name option.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9041-1",
    "publishedAt": "2026-11-11T10:45:28.000Z",
    "cves": [
      "CVE-2026-35341",
      "CVE-2026-35344"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9041-1-uutils-coreutils-vulnerabilities",
      "article-8f597bd7",
      "8f597bd7",
      "usn-9041-1-uutils-coreutils-vulnerabilities-7e87e6"
    ]
  },
  {
    "slug": "hackers-exploit-ahsaycbs-vulnerabilities-to-hide-m-23540e14",
    "title": "Hackers Exploit AhsayCBS Vulnerabilities to Hide Malware in PNG Images and Deploy Stealthy Backdoors",
    "summary": "Hackers exploiting AhsayCBS backup servers have planted webshells, hidden encrypted code inside PNG images, and staged a Python implant designed to run only on its intended host. The findings show an intrusion that extended beyond cryptocurrency mining, giving attackers several ways to keep access to systems responsible for protecting an organization’s backups.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-exploit-ahsaycbs-vulnerabilities/",
    "publishedAt": "2026-11-11T10:44:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-ahsaycbs-vulnerabilities-to-hide-m",
      "article-23540e14",
      "23540e14",
      "hackers-exploit-ahsaycbs-vulnerabilities-to-hide-m-4181d5",
      "hackers-exploit-ahsaycbs-vulnerabilities-to-hide-malware-in-"
    ]
  },
  {
    "slug": "ubuntu-kernel-cve-2023-20585-rmp-check-flaw-237c9f08",
    "title": "Ubuntu Kernel CVE-2023-20585 RMP Check Flaw",
    "summary": "Ubuntu Security Notice USN-9043-1 reports CVE-2023-20585, a kernel flaw in AMD processors' IOMMU reverse map table checks. The flaw permits a local hypervisor attacker to trigger an out-of-bounds condition, potentially compromising SEV‑SNP guest memory integrity. Ubuntu patches the RMP check flaw across multiple architectures; administrators should update to the latest kernel to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9043-1",
    "publishedAt": "2026-11-11T10:40:18.000Z",
    "cves": [
      "CVE-2023-20585"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-kernel-cve-2023-20585-rmp-check-flaw",
      "article-237c9f08",
      "237c9f08",
      "ubuntu-kernel-cve-2023-20585-rmp-check-flaw-7e87de"
    ]
  },
  {
    "slug": "ubuntu-kernel-patch-addresses-nvidia-ipv4-vulnerab-01ff1b3e",
    "title": "Ubuntu Kernel Patch Addresses NVIDIA IPv4 Vulnerability",
    "summary": "A Linux kernel flaw (CVE-2023-20585) in NVIDIA drivers could let attackers compromise systems via the IPv4 networking subsystem. The flaw arises from improper packet header handling, potentially enabling privilege escalation and unauthorized code execution, though no active exploitation has been seen. Ubuntu released kernel updates that patch the affected subsystems; applying the latest update mitigates the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9045-1",
    "publishedAt": "2026-11-11T10:40:10.000Z",
    "cves": [
      "CVE-2023-20585"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-kernel-patch-addresses-nvidia-ipv4-vulnerab",
      "article-01ff1b3e",
      "01ff1b3e",
      "ubuntu-kernel-patch-addresses-nvidia-ipv4-vulnerab-7e87d7",
      "ubuntu-kernel-patch-addresses-nvidia-ipv4-vulnerability"
    ]
  },
  {
    "slug": "linux-kernel-nvidia-baseos-vulnerabilities-fixed-eaf9f20c",
    "title": "Linux Kernel NVIDIA BaseOS Vulnerabilities Fixed",
    "summary": "An attacker could exploit kernel flaws in NVIDIA BaseOS network drivers and IPv4 networking to compromise affected systems. The vulnerabilities, identified as CVE-2026-98239 and CVE-2026-98432, allow remote code execution through malformed network packets, posing an exploitation risk. Ubuntu has released a kernel patch that corrects the driver and IPv4 subsystems; apply the update immediately to mitigate the threat.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9044-1",
    "publishedAt": "2026-11-11T10:40:04.000Z",
    "cves": [
      "CVE-2026-98239",
      "CVE-2026-98432"
    ],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-nvidia-baseos-vulnerabilities-fixed",
      "article-eaf9f20c",
      "eaf9f20c",
      "linux-kernel-nvidia-baseos-vulnerabilities-fixed-7e87db"
    ]
  },
  {
    "slug": "cisco-and-openwave-vulnerabilities-identified-patc-c72f7cab",
    "title": "Cisco and Openwave Vulnerabilities Identified, Patch Urgently Needed",
    "summary": "Cisco and Openwave systems are affected by a critical flaw identified as CVE-2026-20320. The vulnerability permits remote code execution via malformed network packets, with a public PoC demonstrating exploitation; the flaw could allow attackers to gain system-level access on affected devices. Administrators should apply the vendor-supplied patch immediately and enable the provided detection rules to monitor for exploitation attempts.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cisco-broadworks-and-openwave-flaws-actively-exploited",
    "publishedAt": "2026-11-11T10:39:53.000Z",
    "cves": [
      "CVE-2026-20320"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-and-openwave-vulnerabilities-identified-patc",
      "article-c72f7cab",
      "c72f7cab",
      "cisco-and-openwave-vulnerabilities-identified-patc-118999",
      "cisco-and-openwave-vulnerabilities-identified-patch-urgently"
    ]
  },
  {
    "slug": "clickfix-attacks-evolve-to-hide-malware-in-png-ima-5a872db2",
    "title": "ClickFix Attacks Evolve to Hide Malware in PNG Images and Hijack Windows Domain Controllers",
    "summary": "ClickFix attacks are moving beyond simple malware downloads, with recent investigations revealing executable payloads hidden inside PNG images and intrusions reaching Windows domain controllers. The activity shows how a fake verification prompt can become the starting point for persistent access, credential theft, and movement across corporate networks.",
    "category": "General",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/clickfix-attacks-evolve/",
    "publishedAt": "2026-11-11T10:32:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "clickfix-attacks-evolve-to-hide-malware-in-png-ima",
      "article-5a872db2",
      "5a872db2",
      "clickfix-attacks-evolve-to-hide-malware-in-png-ima-b21c77",
      "clickfix-attacks-evolve-to-hide-malware-in-png-images-and-hi"
    ]
  },
  {
    "slug": "cisa-flags-cisco-broadworks-flaw-as-actively-explo-f54e59e8",
    "title": "CISA flags Cisco BroadWorks flaw as actively exploited in attacks",
    "summary": "The US Cybersecurity and Infrastructure Security Agency (CISA) warned on Tuesday that hackers are now exploiting a high-severity Cisco BroadWorks vulnerability in attacks. The vulnerability is tracked as CVE-2026-20320.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/cisa-flags-cisco-broadworks-flaw-as-actively-exploited-in-attacks/",
    "publishedAt": "2026-11-11T10:12:08.000Z",
    "cves": [
      "CVE-2026-20320"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-flags-cisco-broadworks-flaw-as-actively-explo",
      "article-f54e59e8",
      "f54e59e8",
      "cisa-flags-cisco-broadworks-flaw-as-actively-explo-33ad49",
      "cisa-flags-cisco-broadworks-flaw-as-actively-exploited-in-at"
    ]
  },
  {
    "slug": "ubuntu-adds-revocation-checks-to-curl-f1f7af73",
    "title": "Ubuntu Adds Revocation Checks to Curl",
    "summary": "Ubuntu 26.10 adds certificate revocation checking to curl, preventing connections to revoked certificates. Earlier releases, such as 26.04, accepted revoked certificates because curl lacked revocation validation, exposing users to man‑in‑the‑middle attacks; OpenSSL also omits revocation checks by default. Upgrade to Ubuntu 26.10 or later to enforce revocation checks, and enable OCSP or CRL verification in OpenSSL for added protection.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/ubuntu-certificate-revocation-curl-openssl/",
    "publishedAt": "2026-11-11T09:46:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-adds-revocation-checks-to-curl",
      "article-f1f7af73",
      "f1f7af73",
      "ubuntu-adds-revocation-checks-to-curl-621c96"
    ]
  },
  {
    "slug": "grafana-update-released-for-rhel9-d84570bf",
    "title": "Grafana update released for RHEL9",
    "summary": "Red Hat released a security update for Grafana on RHEL 9, addressing vulnerabilities that could enable unauthorized access or data leakage. The update patches each flaw, with CVSS scores available via CVE references, though no specific CVE IDs are listed. Apply the update through RHEL 9 package manager to eliminate the risks and maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98541",
    "publishedAt": "2026-11-11T09:31:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "grafana-update-released-for-rhel9",
      "article-d84570bf",
      "d84570bf",
      "grafana-update-released-for-rhel9-37d6e5"
    ]
  },
  {
    "slug": "red-hat-openshift-5-launches-autonomous-hybrid-clo-e9efdb40",
    "title": "Red Hat OpenShift 5 Launches Autonomous Hybrid Cloud Troubleshooting",
    "summary": "Red Hat announced the general availability of Red Hat OpenShift 5 for hybrid cloud application management. The upgraded Kubernetes platform integrates zero trust security, operational intelligence, and side-by-side deployment capabilities for containers, virtual machines, and AI workloads. IT teams can upgrade existing infrastructure directly from Red Hat OpenShift 4 via an in-place update process.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/red-hat-openshift-5/",
    "publishedAt": "2026-11-11T09:31:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-openshift-5-launches-autonomous-hybrid-clo",
      "article-e9efdb40",
      "e9efdb40",
      "red-hat-openshift-5-launches-autonomous-hybrid-clo-6ca36f",
      "red-hat-openshift-5-launches-autonomous-hybrid-cloud-trouble"
    ]
  },
  {
    "slug": "china-linked-hackers-use-fake-chrome-certificate-w-a3941e63",
    "title": "China-Linked Hackers Use Fake Chrome Certificate Warnings to Infect Victims With Sparrow Backdoor",
    "summary": "China-linked hackers are turning trusted websites into malware delivery points by displaying fake Google Chrome certificate warnings. The pages urge selected visitors to install a certificate repair utility, but the download instead installs a backdoor that gives attackers remote access to Windows computers.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/fake-chrome-certificate/",
    "publishedAt": "2026-11-11T09:24:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "china-linked-hackers-use-fake-chrome-certificate-w",
      "article-a3941e63",
      "a3941e63",
      "china-linked-hackers-use-fake-chrome-certificate-w-5dee11",
      "china-linked-hackers-use-fake-chrome-certificate-warnings-to"
    ]
  },
  {
    "slug": "xwayland-update-released-for-rhel-9-4-a0a12207",
    "title": "Xwayland update released for RHEL 9.4",
    "summary": "Red Hat issued a security update for xorg‑x11‑server‑Xwayland on RHEL 9.4, targeting vulnerabilities that could allow unauthorized access or data exposure. The advisory notes an Important impact rating and references CVSS scores for each flaw, but no CVE identifiers are disclosed. Security teams should apply the update via RHEL 9.4 package manager to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98547",
    "publishedAt": "2026-11-11T09:19:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xwayland-update-released-for-rhel-9-4",
      "article-a0a12207",
      "a0a12207",
      "xwayland-update-released-for-rhel-9-4-37d6e5"
    ]
  },
  {
    "slug": "rhsa-2026-98549-important-xorg-x11-server-xwayland-7ddcf94b",
    "title": "RHSA-2026:98549: Important: xorg-x11-server-Xwayland security update",
    "summary": "An update for xorg-x11-server-Xwayland is now available for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98549",
    "publishedAt": "2026-11-11T09:16:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98549-important-xorg-x11-server-xwayland",
      "article-7ddcf94b",
      "7ddcf94b",
      "rhsa-2026-98549-important-xorg-x11-server-xwayland-37d6e5",
      "rhsa-2026-98549-important-xorg-x11-server-xwayland-security-"
    ]
  },
  {
    "slug": "rhsa-2026-98546-important-xorg-x11-server-xwayland-57ae424b",
    "title": "RHSA-2026:98546: Important: xorg-x11-server-Xwayland security update",
    "summary": "An update for xorg-x11-server-Xwayland is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98546",
    "publishedAt": "2026-11-11T09:10:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98546-important-xorg-x11-server-xwayland",
      "article-57ae424b",
      "57ae424b",
      "rhsa-2026-98546-important-xorg-x11-server-xwayland-37d6e5",
      "rhsa-2026-98546-important-xorg-x11-server-xwayland-security-"
    ]
  },
  {
    "slug": "microsoft-resolves-exchange-sign-in-issues-from-se-ee739ef0",
    "title": "Microsoft Resolves Exchange Sign‑In Issues from Server Updates",
    "summary": "Microsoft fixed Outlook sign‑in and mail delivery issues on Exchange Server caused by October 2026 Windows Server updates. The updates disrupted authentication flows, leading to failed logins and delayed message routing; no data exfiltration was reported. The problem is resolved in the latest cumulative update; administrators should apply the patch to restore normal Exchange operation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-fixes-exchange-sign-ins-broken-by-october-windows-server-updates/",
    "publishedAt": "2026-11-11T09:07:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-resolves-exchange-sign-in-issues-from-se",
      "article-ee739ef0",
      "ee739ef0",
      "microsoft-resolves-exchange-sign-in-issues-from-se-29bbc1",
      "microsoft-resolves-exchange-sign-in-issues-from-server-updat"
    ]
  },
  {
    "slug": "openwave-broadworks-vulnerabilities-exploited-for-4e1d2283",
    "title": "Openwave, BroadWorks vulnerabilities exploited for data leakage",
    "summary": "Threat actors exploited CVE-2026-111793 in Openwave and CVE-2026-20320 in Cisco BroadWorks, enabling leakage of sensitive configuration data. Both flaws allow unauthorized disclosure of configuration information without authentication, and public proof‑of‑concept exploits have been released. Affected systems should apply vendor patches or configuration hardening to prevent further data exposure immediately.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/threat-actors-exploit-openwave-cisco-broadworks-vulnerabilities/",
    "publishedAt": "2026-11-11T09:01:07.000Z",
    "cves": [
      "CVE-2026-111793",
      "CVE-2026-20320"
    ],
    "additionalSources": [],
    "aliases": [
      "openwave-broadworks-vulnerabilities-exploited-for",
      "article-4e1d2283",
      "4e1d2283",
      "openwave-broadworks-vulnerabilities-exploited-for-137af6",
      "openwave-broadworks-vulnerabilities-exploited-for-data-leaka"
    ]
  },
  {
    "slug": "intel-amd-patch-over-200-vulnerabilities-720d0e7b",
    "title": "Intel, AMD patch over 200 vulnerabilities",
    "summary": "Intel and AMD released over 200 patches on Patch Tuesday, addressing critical flaws in Intel TDX software and numerous AMD graphics bugs. The advisory lists multiple CVE identifiers and CVSS scores, indicating a range of severity levels across the affected components. Security teams should apply the vendor patches via their package managers or firmware updates to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/chipmaker-patch-tuesday-over-200-vulnerabilities-addressed-by-intel-amd/",
    "publishedAt": "2026-11-11T08:42:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "intel-amd-patch-over-200-vulnerabilities",
      "article-720d0e7b",
      "720d0e7b",
      "intel-amd-patch-over-200-vulnerabilities-2be1ef"
    ]
  },
  {
    "slug": "openssh-update-addresses-moderate-security-issues-9c2d9183",
    "title": "OpenSSH Update Addresses Moderate Security Issues",
    "summary": "Red Hat released an OpenSSH update for RHEL 10 to address moderate‑severity vulnerabilities affecting the SSH daemon. The advisory cites multiple CVE references with CVSS base scores, but no active exploitation has been observed. Users should install the latest OpenSSH package to ensure protection against the identified weaknesses in all deployments.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98073",
    "publishedAt": "2026-11-11T08:38:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openssh-update-addresses-moderate-security-issues",
      "article-9c2d9183",
      "9c2d9183",
      "openssh-update-addresses-moderate-security-issues-37d6f7"
    ]
  },
  {
    "slug": "sos-update-fixes-important-security-bugs-00038762",
    "title": "SOS Update Fixes Important Security Bugs",
    "summary": "Red Hat issued a security update for the sos utility on RHEL 10, addressing important bugs that could affect system diagnostics. The advisory references multiple CVE entries with CVSS base scores, indicating a high impact on system stability. Administrators should apply the sos patch promptly to prevent potential denial of service or data corruption during troubleshooting.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98076",
    "publishedAt": "2026-11-11T08:36:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sos-update-fixes-important-security-bugs",
      "article-00038762",
      "00038762",
      "sos-update-fixes-important-security-bugs-37d6f7"
    ]
  },
  {
    "slug": "kernel-rmp-check-flaw-enables-hypervisor-out-of-bo-00953341",
    "title": "Kernel RMP Check Flaw Enables Hypervisor Out-of-Bounds",
    "summary": "A kernel flaw in IOMMU RMP checks allows a local hypervisor attacker to trigger an out‑of‑bounds condition and corrupt SEV‑SNP guest memory. The vulnerability, identified as CVE‑2023‑20585, could enable privilege escalation within virtualized environments, potentially compromising guest isolation. Red Hat released a kernel patch that restores RMP validation and addresses affected subsystems, and users should apply the update immediately.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9040-1",
    "publishedAt": "2026-11-11T08:27:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kernel-rmp-check-flaw-enables-hypervisor-out-of-bo",
      "article-00953341",
      "00953341",
      "kernel-rmp-check-flaw-enables-hypervisor-out-of-bo-7e87ea",
      "kernel-rmp-check-flaw-enables-hypervisor-out-of-bounds"
    ]
  },
  {
    "slug": "microsoft-releases-patch-for-outlook-bug-exposing-46d41d1b",
    "title": "Microsoft Releases Patch for Outlook Bug Exposing NTLMv2 Hashes",
    "summary": "Microsoft released a cumulative update fixing 1,259 flaws, including CVE-2026-124194, an Outlook bug that attackers exploited to exfiltrate NTLMv2 hashes. The flaw permits unauthenticated memory corruption that leaks credential material, enabling credential dumping and lateral movement. Apply the latest cumulative update immediately; no workaround exists, and teams should monitor authentication logs for anomalous NTLM traffic.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/microsoft-patches-1259-flaws-including.html",
    "publishedAt": "2026-11-11T08:17:53.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-releases-patch-for-outlook-bug-exposing",
      "article-46d41d1b",
      "46d41d1b",
      "microsoft-releases-patch-for-outlook-bug-exposing-49dc30",
      "microsoft-releases-patch-for-outlook-bug-exposing-ntlmv2-has"
    ]
  },
  {
    "slug": "kernel-vulnerabilities-affect-azure-cvm-systems-7c85010a",
    "title": "Kernel Vulnerabilities Affect Azure CVM Systems",
    "summary": "Multiple kernel subsystems in Azure CVM instances contain vulnerabilities that could allow a local attacker to compromise system integrity. The flaws affect USB gadget drivers, memory management, networking core, and various architecture modules, but no public exploit has been reported. Red Hat has issued a kernel update that corrects these issues; administrators should apply the patch to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9039-1",
    "publishedAt": "2026-11-11T08:12:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kernel-vulnerabilities-affect-azure-cvm-systems",
      "article-7c85010a",
      "7c85010a",
      "kernel-vulnerabilities-affect-azure-cvm-systems-7e883c"
    ]
  },
  {
    "slug": "barracuda-vulnerabilities-exploited-for-root-acces-9695b19a",
    "title": "Barracuda Vulnerabilities Exploited for Root Access",
    "summary": "Threat actors are exploiting two recently patched Barracuda flaws added to CISA KEV under BOD 26-04: CVE-2026-116606 (CVSS 9.3), an Email Security Gateway Admin UI authentication bypass, and CVE-2026-111560 (CVSS 8.6), a command injection flaw across ESG, ADC, WAF, WSG, BMA, and WCC. Chaining them grants root access; apply patches and restrict admin interfaces immediately.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/recently-patched-barracuda-vulnerabilities-exploited-in-attacks/",
    "publishedAt": "2026-11-11T07:53:51.000Z",
    "cves": [
      "CVE-2026-116606",
      "CVE-2026-111560"
    ],
    "additionalSources": [],
    "aliases": [
      "barracuda-vulnerabilities-exploited-for-root-acces",
      "article-9695b19a",
      "9695b19a",
      "barracuda-vulnerabilities-exploited-for-root-acces-395bcd",
      "barracuda-vulnerabilities-exploited-for-root-access"
    ]
  },
  {
    "slug": "railway-breach-causes-740-000-unauthorized-ai-usag-bbd595a0",
    "title": "Railway Breach Causes $740,000 Unauthorized AI Usage",
    "summary": "Railway disclosed that customer AI keys stored on its platform were stolen in an October breach. The stolen keys enabled an estimated $740,000 in unauthorized AI usage charges, which Railway pledged to cover. Railway urges customers to rotate API keys and monitor usage logs, while investigating the breach and seeking refunds from AI vendors.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/railway-says-stolen-customer-ai-keys.html",
    "publishedAt": "2026-11-11T07:49:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "railway-breach-causes-740-000-unauthorized-ai-usag",
      "article-bbd595a0",
      "bbd595a0",
      "railway-breach-causes-740-000-unauthorized-ai-usag-728c42",
      "railway-breach-causes-740-000-unauthorized-ai-usage"
    ]
  },
  {
    "slug": "top-10-security-ratings-services-ranked-2026-fe367a4f",
    "title": "Top 10 Security Ratings Services Ranked 2026",
    "summary": "The piece ranks the top ten security ratings services for 2026, assessing exposure, patch cadence, breach signals, and overall posture. Ratings now influence insurance premiums, vendor access, and board decisions, with NormShield and RiskRecon highlighted as key players. Stakeholders should examine rating criteria and align their security posture with the metrics used by these services.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/best-security-ratings-services/",
    "publishedAt": "2026-11-11T07:33:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "top-10-security-ratings-services-ranked-2026",
      "article-fe367a4f",
      "fe367a4f",
      "top-10-security-ratings-services-ranked-2026-4d3642"
    ]
  },
  {
    "slug": "microsoft-patches-ad-rce-vulnerability-cve-2026-11-ec018025",
    "title": "Microsoft Patches AD RCE Vulnerability CVE-2026-119948",
    "summary": "A Windows Active Directory flaw (CVE-2026-119948) lets an authorized attacker run code over a network. The vulnerability, rated Important with a CVSS 3.1 score of 7.5, exploits improper input handling in AD replication. Microsoft issued security updates on November 10, 2026; administrators should apply them immediately to secure domain controllers.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/windows-active-directory-rce-vulnerability/",
    "publishedAt": "2026-11-11T07:21:28.000Z",
    "cves": [
      "CVE-2026-119948"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-patches-ad-rce-vulnerability-cve-2026-11",
      "article-ec018025",
      "ec018025",
      "microsoft-patches-ad-rce-vulnerability-cve-2026-11-7e1a09",
      "microsoft-patches-ad-rce-vulnerability-cve-2026-119948"
    ]
  },
  {
    "slug": "microsoft-researchers-show-ai-agents-can-be-backdo-7321c187",
    "title": "Microsoft Researchers Show AI Agents Can Be Backdoored by Editing Fewer Than 10 Neurons",
    "summary": "An AI model can be given a hidden backdoor by editing fewer than 10 of its rarely used neurons, without retraining the model, Microsoft researchers have shown. When a chosen trigger appears, the model outputs an attacker's command, which an agent using that model would run with the agent's own permissions.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/microsoft-researchers-show-ai-agents.html",
    "publishedAt": "2026-11-11T07:21:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-researchers-show-ai-agents-can-be-backdo",
      "article-7321c187",
      "7321c187",
      "microsoft-researchers-show-ai-agents-can-be-backdo-13e3b4",
      "microsoft-researchers-show-ai-agents-can-be-backdoored-by-ed"
    ]
  },
  {
    "slug": "fortinet-forticlient-rce-via-fortipam-exploit-cve-dec52944",
    "title": "Fortinet FortiClient RCE via FortiPAM Exploit CVE-2026-121529",
    "summary": "A FortiClient flaw (CVE-2026-121529) allows a remote attacker to execute code when a user visits a malicious website. The vulnerability, rated Critical with a CVSS 9.1 score, exploits improper handling of embedded scripts in FortiPAM-enabled sessions. Fortinet released a patch on November 10, 2026; users should update FortiClient immediately to prevent exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/fortinet2shell-vulnerability/",
    "publishedAt": "2026-11-11T07:05:55.000Z",
    "cves": [
      "CVE-2026-121529"
    ],
    "additionalSources": [],
    "aliases": [
      "fortinet-forticlient-rce-via-fortipam-exploit-cve",
      "article-dec52944",
      "dec52944",
      "fortinet-forticlient-rce-via-fortipam-exploit-cve-6eb845",
      "fortinet-forticlient-rce-via-fortipam-exploit-cve-2026-12152"
    ]
  },
  {
    "slug": "eu-cyber-resilience-act-reporting-obligations-expl-974bcf91",
    "title": "EU Cyber Resilience Act Reporting Obligations Explained",
    "summary": "The EU Cyber Resilience Act requires manufacturers to register every product version still in use. Effective September 2026, the regulation defines when a company learns of an exploited flaw and urges CISOs to query suppliers on vulnerability handling and CE marking. Manufacturers must keep product registers current and provide clear vulnerability disclosure timelines to meet reporting duties.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/aurimas-bakas-copla-cra-vulnerability-reporting/",
    "publishedAt": "2026-11-11T07:00:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "eu-cyber-resilience-act-reporting-obligations-expl",
      "article-974bcf91",
      "974bcf91",
      "eu-cyber-resilience-act-reporting-obligations-expl-299b7a",
      "eu-cyber-resilience-act-reporting-obligations-explained"
    ]
  },
  {
    "slug": "apple-fixes-bluetooth-airplay-pairing-flaws-28a73ab6",
    "title": "Apple Fixes Bluetooth, AirPlay Pairing Flaws",
    "summary": "Apple patched Bluetooth and AirPlay pairing flaws, iMessage vulnerabilities, and an exploited Brotli bug across its platforms. The vulnerabilities allowed unauthorized pairing and message tampering, potentially enabling data exfiltration or denial of service on affected devices. Apple released security updates for macOS, iOS, iPadOS, and tvOS; users should install the latest patches to mitigate the risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/bluetooth-airplay-pairing-vulnerabilities-patched-across-apple-platforms/",
    "publishedAt": "2026-11-11T07:00:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-fixes-bluetooth-airplay-pairing-flaws",
      "article-28a73ab6",
      "28a73ab6",
      "apple-fixes-bluetooth-airplay-pairing-flaws-7d6b0c"
    ]
  },
  {
    "slug": "red-hat-issues-gcc-update-for-moderate-security-is-fd907fcf",
    "title": "Red Hat Issues GCC Update for Moderate Security Issue",
    "summary": "Red Hat released a GCC update for RHEL 8 to fix a moderate‑severity security issue. The advisory indicates a Moderate impact, with CVSS scores linked to CVE references, suggesting a medium‑severity flaw affecting compiler integrity. Apply the update immediately and confirm GCC version compliance in RHEL 8 to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98115",
    "publishedAt": "2026-11-11T06:34:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-gcc-update-for-moderate-security-is",
      "article-fd907fcf",
      "fd907fcf",
      "red-hat-issues-gcc-update-for-moderate-security-is-37d6f4",
      "red-hat-issues-gcc-update-for-moderate-security-issue"
    ]
  },
  {
    "slug": "red-hat-issues-qt5-qtbase-security-update-57b47645",
    "title": "Red Hat Issues Qt5‑Qtbase Security Update",
    "summary": "Red Hat released a security update for qt5‑qtbase on RHEL 8, addressing vulnerabilities that could allow local privilege escalation or code execution. The update lists multiple CVE identifiers with CVSS scores indicating moderate to high severity, yet no active exploitation reports exist. Red Hat recommends applying the update immediately via the standard RHEL update channels.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98103",
    "publishedAt": "2026-11-11T06:17:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-qt5-qtbase-security-update",
      "article-57b47645",
      "57b47645",
      "red-hat-issues-qt5-qtbase-security-update-37d6f4"
    ]
  },
  {
    "slug": "cisco-broadworks-openwave-flaws-actively-exploited-3c0cd8b8",
    "title": "Cisco BroadWorks, Openwave Flaws Actively Exploited",
    "summary": "CISA identified active exploitation of two vulnerabilities in Cisco BroadWorks and Openwave Messaging Webtop Media Transcoder. The flaws, including CVE-2026-20320, stem from an improper restriction of XML external entities, scoring CVSS 7.5 and enabling remote code execution without authentication. Both vendors have released patches; security teams must apply them immediately and monitor for exploitation indicators.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/cisco-broadworks-and-openwave-flaws.html",
    "publishedAt": "2026-11-11T06:04:02.000Z",
    "cves": [
      "CVE-2026-20320"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-broadworks-openwave-flaws-actively-exploited",
      "article-3c0cd8b8",
      "3c0cd8b8",
      "cisco-broadworks-openwave-flaws-actively-exploited-15abd9"
    ]
  },
  {
    "slug": "eu-cyber-scores-look-healthy-but-45-of-surveyed-it-72c8dbf1",
    "title": "EU cyber scores look healthy, but 45% of surveyed IT providers take months to patch",
    "summary": "Forty-five percent of surveyed IT service management providers in the EU took more than three months to apply critical patches to critical systems, according to ENISA’s 2026 assessment of cybersecurity in the Union. Attackers can turn a newly disclosed flaw into a working attack within days, and sometimes within hours or minutes.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/eu-enisa-cybersecurity-report/",
    "publishedAt": "2026-11-11T06:00:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "eu-cyber-scores-look-healthy-but-45-of-surveyed-it",
      "article-72c8dbf1",
      "72c8dbf1",
      "eu-cyber-scores-look-healthy-but-45-of-surveyed-it-52db95",
      "eu-cyber-scores-look-healthy-but-45-of-surveyed-it-providers"
    ]
  },
  {
    "slug": "meta-detectron2-deserialization-flaw-enables-remot-338c5486",
    "title": "Meta Detectron2 Deserialization Flaw Enables Remote Code Execution",
    "summary": "Meta Detectron2’s vertex_feature_embedder deserialization flaw permits remote attackers to execute arbitrary code on affected installations. The vulnerability requires user interaction, such as visiting a malicious page or opening a malicious file, and carries a CVSS score of 7.8. No patch is currently available; users should avoid untrusted data inputs and monitor for vendor advisories.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-907/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-detectron2-deserialization-flaw-enables-remot",
      "article-338c5486",
      "338c5486",
      "meta-detectron2-deserialization-flaw-enables-remot-6f3d08",
      "meta-detectron2-deserialization-flaw-enables-remote-code-exe"
    ]
  },
  {
    "slug": "meta-detectron2-lazyconfig-deserialization-rce-vul-2acade9a",
    "title": "Meta Detectron2 LazyConfig Deserialization RCE Vulnerability",
    "summary": "A zero‑day deserialization flaw in Meta Detectron2’s LazyConfig lets attackers run code when a user opens a malicious file. Rated CVSS 7.8, the flaw requires user interaction and exploits untrusted data deserialization for code execution. Meta has not yet patched; teams should monitor for updates and disable LazyConfig loading until a fix is released.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-910/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-detectron2-lazyconfig-deserialization-rce-vul",
      "article-2acade9a",
      "2acade9a",
      "meta-detectron2-lazyconfig-deserialization-rce-vul-6f3d0b",
      "meta-detectron2-lazyconfig-deserialization-rce-vulnerability"
    ]
  },
  {
    "slug": "meta-detectron2-cfgnode-merge-from-file-rce-vulner-52a798c2",
    "title": "Meta Detectron2 CfgNode.merge_from_file RCE Vulnerability",
    "summary": "A zero‑day deserialization flaw in Meta Detectron2’s CfgNode.merge_from_file component allows attackers to execute code when a user opens a malicious file. Rated CVSS 7.8, the vulnerability requires user interaction and exploits untrusted data deserialization for code execution. Meta has not yet released a patch; teams should monitor for updates and disable CfgNode.merge_from_file usage until a fix arrives.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-909/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-detectron2-cfgnode-merge-from-file-rce-vulner",
      "article-52a798c2",
      "52a798c2",
      "meta-detectron2-cfgnode-merge-from-file-rce-vulner-6f3d08",
      "meta-detectron2-cfgnode-merge-from-file-rce-vulnerability"
    ]
  },
  {
    "slug": "meta-detectron2-load-proposals-into-dataset-rce-vu-ee4a1129",
    "title": "Meta Detectron2 load_proposals_into_dataset RCE Vulnerability",
    "summary": "A zero‑day deserialization flaw in Meta Detectron2’s load_proposals_into_dataset component permits attackers to run code when a user opens a malicious file. Rated CVSS 7.8, the flaw requires user interaction and exploits untrusted data deserialization for code execution. Meta has not yet patched; teams should monitor for updates and disable load_proposals_into_dataset usage until a fix is released.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-908/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-detectron2-load-proposals-into-dataset-rce-vu",
      "article-ee4a1129",
      "ee4a1129",
      "meta-detectron2-load-proposals-into-dataset-rce-vu-6f3d08",
      "meta-detectron2-load-proposals-into-dataset-rce-vulnerabilit"
    ]
  },
  {
    "slug": "meta-detectron2-densepose-deserialization-enables-1bab7251",
    "title": "Meta Detectron2 DensePose Deserialization Enables Remote Code Execution",
    "summary": "A zero‑day deserialization flaw in Meta Detectron2’s DensePose lets remote attackers run code when a user opens a malicious file or visits a crafted page. Rated CVSS 7.8, the flaw requires user interaction and can lead to full system compromise. Meta has not yet released a patch; teams should block the library or isolate deployments until a fix arrives.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-911/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-detectron2-densepose-deserialization-enables",
      "article-1bab7251",
      "1bab7251",
      "meta-detectron2-densepose-deserialization-enables-6f3d0b",
      "meta-detectron2-densepose-deserialization-enables-remote-cod"
    ]
  },
  {
    "slug": "meta-fairseq-filternamesdataset-remote-code-execut-a1726cbb",
    "title": "Meta fairseq FilterNamesDataset Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-915/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-filternamesdataset-remote-code-execut",
      "article-a1726cbb",
      "a1726cbb",
      "meta-fairseq-filternamesdataset-remote-code-execut-6f3d0c",
      "meta-fairseq-filternamesdataset-remote-code-execution-vulner"
    ]
  },
  {
    "slug": "meta-fairseq-wav2vecmodel-yaml-remote-code-executi-b796f576",
    "title": "Meta fairseq Wav2VecModel YAML Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-914/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-wav2vecmodel-yaml-remote-code-executi",
      "article-b796f576",
      "b796f576",
      "meta-fairseq-wav2vecmodel-yaml-remote-code-executi-6f3d0c",
      "meta-fairseq-wav2vecmodel-yaml-remote-code-execution-vulnera"
    ]
  },
  {
    "slug": "meta-fairseq-load-audio-path-remote-code-execution-e49900b8",
    "title": "Meta fairseq load_audio_path Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-913/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-load-audio-path-remote-code-execution",
      "article-e49900b8",
      "e49900b8",
      "meta-fairseq-load-audio-path-remote-code-execution-6f3d0b",
      "meta-fairseq-load-audio-path-remote-code-execution-vulnerabi"
    ]
  },
  {
    "slug": "zdi-26-912-0day-meta-detectron2-detection-checkpoi-11e5aa46",
    "title": "ZDI-26-912: (0Day) Meta Detectron2 detection_checkpoint Deserialization of Untrusted Data Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta Detectron2. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-912/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zdi-26-912-0day-meta-detectron2-detection-checkpoi",
      "article-11e5aa46",
      "11e5aa46",
      "zdi-26-912-0day-meta-detectron2-detection-checkpoi-6f3d0b",
      "zdi-26-912-0day-meta-detectron2-detection-checkpoint-deseria"
    ]
  },
  {
    "slug": "meta-fairseq-vggtransformermodel-yaml-rce-requires-3d01e0e6",
    "title": "Meta fairseq VGGTransformerModel YAML RCE Requires User File Open",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-918/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-vggtransformermodel-yaml-rce-requires",
      "article-3d01e0e6",
      "3d01e0e6",
      "meta-fairseq-vggtransformermodel-yaml-rce-requires-6f3d0c",
      "meta-fairseq-vggtransformermodel-yaml-rce-requires-user-file"
    ]
  },
  {
    "slug": "meta-fairseq-load-speaker-yaml-rce-requires-user-i-47a5c8df",
    "title": "Meta fairseq load_speaker YAML RCE Requires User Interaction",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-917/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-load-speaker-yaml-rce-requires-user-i",
      "article-47a5c8df",
      "47a5c8df",
      "meta-fairseq-load-speaker-yaml-rce-requires-user-i-6f3d0c",
      "meta-fairseq-load-speaker-yaml-rce-requires-user-interaction"
    ]
  },
  {
    "slug": "meta-fairseq-code-injection-vulnerability-e7f0058e",
    "title": "Meta fairseq Code Injection Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-916/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-code-injection-vulnerability",
      "article-e7f0058e",
      "e7f0058e",
      "meta-fairseq-code-injection-vulnerability-6f3d0c",
      "meta-fairseq-code-injection-vulnerability-cve-2026-d15972ca"
    ]
  },
  {
    "slug": "meta-fairseq-vulnerable-to-yaml-code-injection-9c7df172",
    "title": "Meta fairseq Vulnerable to YAML Code Injection",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-923/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "ZDI Advisories",
        "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-919/"
      }
    ],
    "aliases": [
      "meta-fairseq-vulnerable-to-yaml-code-injection",
      "article-9c7df172",
      "9c7df172",
      "meta-fairseq-vulnerable-to-yaml-code-injection-6f3d0f",
      "meta-fairseq-yaml-code-injection-flaw-cve-2026-111-d1e8367c"
    ]
  },
  {
    "slug": "meta-fairseq-wav2vec2model-yaml-injection-vulnerab-56e873fe",
    "title": "Meta fairseq Wav2Vec2Model YAML Injection Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-922/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "ZDI Advisories",
        "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-920/"
      }
    ],
    "aliases": [
      "meta-fairseq-wav2vec2model-yaml-injection-vulnerab",
      "article-56e873fe",
      "56e873fe",
      "meta-fairseq-wav2vec2model-yaml-injection-vulnerab-6f3d0f",
      "meta-fairseq-wav2vec2model-yaml-injection-vulnerability",
      "meta-fairseq-yaml-parsing-vulnerability-cve-2026-1-0b041a28"
    ]
  },
  {
    "slug": "meta-fairseq-transformerlanguagemodel-yaml-injecti-8c16505b",
    "title": "Meta fairseq TransformerLanguageModel YAML Injection",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-921/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-transformerlanguagemodel-yaml-injecti",
      "article-8c16505b",
      "8c16505b",
      "meta-fairseq-transformerlanguagemodel-yaml-injecti-6f3d0f",
      "meta-fairseq-transformerlanguagemodel-yaml-injection"
    ]
  },
  {
    "slug": "meta-fairseq-yaml-parsing-rce-exploit-discovered-6dd88325",
    "title": "Meta fairseq YAML Parsing RCE Exploit Discovered",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-928/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-yaml-parsing-rce-exploit-discovered",
      "article-6dd88325",
      "6dd88325",
      "meta-fairseq-yaml-parsing-rce-exploit-discovered-6f3d10"
    ]
  },
  {
    "slug": "meta-fairseq-fairseqadam-yaml-rce-vulnerability-fo-0a31e070",
    "title": "Meta fairseq FairseqAdam YAML RCE Vulnerability Found",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-927/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-fairseqadam-yaml-rce-vulnerability-fo",
      "article-0a31e070",
      "0a31e070",
      "meta-fairseq-fairseqadam-yaml-rce-vulnerability-fo-6f3d10",
      "meta-fairseq-fairseqadam-yaml-rce-vulnerability-found"
    ]
  },
  {
    "slug": "meta-fairseq-fairseqlamb-yaml-rce-vulnerability-ex-296dc77b",
    "title": "Meta fairseq FairseqLAMB YAML RCE Vulnerability Exposed",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-925/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-fairseqlamb-yaml-rce-vulnerability-ex",
      "article-296dc77b",
      "296dc77b",
      "meta-fairseq-fairseqlamb-yaml-rce-vulnerability-ex-6f3d0f",
      "meta-fairseq-fairseqlamb-yaml-rce-vulnerability-exposed"
    ]
  },
  {
    "slug": "zdi-26-924-0day-meta-fairseq-s2twavtransformerenco-455c3e72",
    "title": "ZDI-26-924: (0Day) Meta fairseq S2TWavTransformerEncoder YAML File Parsing Code Injection Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-924/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zdi-26-924-0day-meta-fairseq-s2twavtransformerenco",
      "article-455c3e72",
      "455c3e72",
      "zdi-26-924-0day-meta-fairseq-s2twavtransformerenco-6f3d0f",
      "zdi-26-924-0day-meta-fairseq-s2twavtransformerencoder-yaml-f"
    ]
  },
  {
    "slug": "zero-day-code-execution-flaw-discovered-in-meta-fa-8ba8d224",
    "title": "Zero-Day Code Execution Flaw Discovered in Meta Fairseq",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-929/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zero-day-code-execution-flaw-discovered-in-meta-fa",
      "article-8ba8d224",
      "8ba8d224",
      "zero-day-code-execution-flaw-discovered-in-meta-fa-6f3d10",
      "zero-day-code-execution-flaw-discovered-in-meta-fairseq"
    ]
  },
  {
    "slug": "zdi-26-926-0day-meta-fairseq-rawaudiodataset-yaml-062b3457",
    "title": "ZDI-26-926: (0Day) Meta fairseq RawAudioDataset YAML File Parsing Code Injection Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-926/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zdi-26-926-0day-meta-fairseq-rawaudiodataset-yaml",
      "article-062b3457",
      "062b3457",
      "zdi-26-926-0day-meta-fairseq-rawaudiodataset-yaml-6f3d10",
      "zdi-26-926-0day-meta-fairseq-rawaudiodataset-yaml-file-parsi"
    ]
  },
  {
    "slug": "meta-fairseq-multireshubertmodel-yaml-parsing-rce-aa351697",
    "title": "Meta fairseq MultiresHubertModel YAML Parsing RCE Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-933/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-multireshubertmodel-yaml-parsing-rce",
      "article-aa351697",
      "aa351697",
      "meta-fairseq-multireshubertmodel-yaml-parsing-rce-6f3d13",
      "meta-fairseq-multireshubertmodel-yaml-parsing-rce-vulnerabil",
      "meta-fairseq-yaml-parsing-rce-vulnerability-cve-20-af5f171d"
    ]
  },
  {
    "slug": "meta-fairseq-ctccriterion-yaml-rce-vulnerability-831e7ca9",
    "title": "Meta fairseq CtcCriterion YAML RCE Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-932/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-ctccriterion-yaml-rce-vulnerability",
      "article-831e7ca9",
      "831e7ca9",
      "meta-fairseq-ctccriterion-yaml-rce-vulnerability-6f3d13",
      "meta-fairseq-ctccriterion-yaml-rce-vulnerability-c-f8299d2d"
    ]
  },
  {
    "slug": "meta-fairseq-yaml-parsing-flaw-enables-remote-code-4a1d0d18",
    "title": "Meta fairseq YAML Parsing Flaw Enables Remote Code Execution",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-931/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-yaml-parsing-flaw-enables-remote-code",
      "article-4a1d0d18",
      "4a1d0d18",
      "meta-fairseq-yaml-parsing-flaw-enables-remote-code-6f3d13",
      "meta-fairseq-yaml-parsing-flaw-enables-remote-code-execution"
    ]
  },
  {
    "slug": "zdi-26-930-0day-meta-fairseq-lightconvlanguagemode-6b290180",
    "title": "ZDI-26-930: (0Day) Meta fairseq LightConvLanguageModel YAML File Parsing Code Injection Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-930/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zdi-26-930-0day-meta-fairseq-lightconvlanguagemode",
      "article-6b290180",
      "6b290180",
      "zdi-26-930-0day-meta-fairseq-lightconvlanguagemode-6f3d13",
      "zdi-26-930-0day-meta-fairseq-lightconvlanguagemodel-yaml-fil"
    ]
  },
  {
    "slug": "meta-fairseq-deserialization-rce-vulnerability-exp-bb48b00e",
    "title": "Meta fairseq Deserialization RCE Vulnerability Exposes Code Execution",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-937/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-deserialization-rce-vulnerability-exp",
      "article-bb48b00e",
      "bb48b00e",
      "meta-fairseq-deserialization-rce-vulnerability-exp-6f3d13",
      "meta-fairseq-deserialization-rce-vulnerability-exposes-code-"
    ]
  },
  {
    "slug": "meta-fairseq-fairseqcpuadam-yaml-parsing-rce-vulne-43499adb",
    "title": "Meta fairseq FairseqCPUAdam YAML Parsing RCE Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-936/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-fairseqcpuadam-yaml-parsing-rce-vulne",
      "article-43499adb",
      "43499adb",
      "meta-fairseq-fairseqcpuadam-yaml-parsing-rce-vulne-6f3d13",
      "meta-fairseq-fairseqcpuadam-yaml-parsing-rce-vulnerability"
    ]
  },
  {
    "slug": "meta-fairseq-fconvmodelselfatt-yaml-parsing-rce-vu-821ac269",
    "title": "Meta fairseq FConvModelSelfAtt YAML Parsing RCE Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-935/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-fconvmodelselfatt-yaml-parsing-rce-vu",
      "article-821ac269",
      "821ac269",
      "meta-fairseq-fconvmodelselfatt-yaml-parsing-rce-vu-6f3d13",
      "meta-fairseq-fconvmodelselfatt-yaml-parsing-rce-vulnerabilit"
    ]
  },
  {
    "slug": "zdi-26-934-0day-meta-fairseq-fconvlanguagemodel-ya-2faffac3",
    "title": "ZDI-26-934: (0Day) Meta fairseq FConvLanguageModel YAML File Parsing Code Injection Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-934/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zdi-26-934-0day-meta-fairseq-fconvlanguagemodel-ya",
      "article-2faffac3",
      "2faffac3",
      "zdi-26-934-0day-meta-fairseq-fconvlanguagemodel-ya-6f3d13",
      "zdi-26-934-0day-meta-fairseq-fconvlanguagemodel-yaml-file-pa"
    ]
  },
  {
    "slug": "zdi-26-941-0day-meta-fairseq-fconvmodel-yaml-file-8715cfa3",
    "title": "ZDI-26-941: (0Day) Meta fairseq FConvModel YAML File Parsing Code Injection Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-941/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zdi-26-941-0day-meta-fairseq-fconvmodel-yaml-file",
      "article-8715cfa3",
      "8715cfa3",
      "zdi-26-941-0day-meta-fairseq-fconvmodel-yaml-file-6f3d17",
      "zdi-26-941-0day-meta-fairseq-fconvmodel-yaml-file-parsing-co"
    ]
  },
  {
    "slug": "zdi-26-940-0day-meta-fairseq-dump-km-label-deseria-e4eeb807",
    "title": "ZDI-26-940: (0Day) Meta fairseq dump_km_label Deserialization of Untrusted Data Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-940/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zdi-26-940-0day-meta-fairseq-dump-km-label-deseria",
      "article-e4eeb807",
      "e4eeb807",
      "zdi-26-940-0day-meta-fairseq-dump-km-label-deseria-6f3d16",
      "zdi-26-940-0day-meta-fairseq-dump-km-label-deserialization-o"
    ]
  },
  {
    "slug": "zdi-26-939-0day-meta-fairseq2-filecheckpointmanage-d39c53f6",
    "title": "ZDI-26-939: (0Day) Meta fairseq2 FileCheckpointManager _load_state_dict Deserialization of Untrusted Data Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq2. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-939/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zdi-26-939-0day-meta-fairseq2-filecheckpointmanage",
      "article-d39c53f6",
      "d39c53f6",
      "zdi-26-939-0day-meta-fairseq2-filecheckpointmanage-6f3d14",
      "zdi-26-939-0day-meta-fairseq2-filecheckpointmanager-load-sta"
    ]
  },
  {
    "slug": "zero-day-rce-vulnerability-disclosed-in-meta-fairs-be6902fe",
    "title": "Zero-Day RCE Vulnerability Disclosed in Meta Fairseq",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-938/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zero-day-rce-vulnerability-disclosed-in-meta-fairs",
      "article-be6902fe",
      "be6902fe",
      "zero-day-rce-vulnerability-disclosed-in-meta-fairs-6f3d14",
      "zero-day-rce-vulnerability-disclosed-in-meta-fairseq"
    ]
  },
  {
    "slug": "meta-fairchem-rce-via-deserialization-357ce245",
    "title": "Meta FAIRChem RCE via Deserialization",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta FAIRChem. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-945/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairchem-rce-via-deserialization",
      "article-357ce245",
      "357ce245",
      "meta-fairchem-rce-via-deserialization-6f3d17",
      "meta-fairchem-rce-via-deserialization-cve-2026-111-a15736f3"
    ]
  },
  {
    "slug": "meta-fairseq-rce-via-deserialization-88743634",
    "title": "Meta fairseq RCE via Deserialization",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-944/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairseq-rce-via-deserialization",
      "article-88743634",
      "88743634",
      "meta-fairseq-rce-via-deserialization-6f3d17",
      "meta-fairseq-rce-via-deserialization-cve-2026-1117-bd1d9ba3"
    ]
  },
  {
    "slug": "zdi-26-943-0day-meta-fairseq-load-checkpoint-to-cp-064aa164",
    "title": "ZDI-26-943: (0Day) Meta fairseq load_checkpoint_to_cpu Deserialization of Untrusted Data Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-943/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zdi-26-943-0day-meta-fairseq-load-checkpoint-to-cp",
      "article-064aa164",
      "064aa164",
      "zdi-26-943-0day-meta-fairseq-load-checkpoint-to-cp-6f3d17",
      "zdi-26-943-0day-meta-fairseq-load-checkpoint-to-cpu-deserial"
    ]
  },
  {
    "slug": "zdi-26-942-0day-meta-fairseq-rerank-code-injection-c0a55076",
    "title": "ZDI-26-942: (0Day) Meta fairseq rerank Code Injection Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta fairseq. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-942/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zdi-26-942-0day-meta-fairseq-rerank-code-injection",
      "article-c0a55076",
      "c0a55076",
      "zdi-26-942-0day-meta-fairseq-rerank-code-injection-6f3d17",
      "zdi-26-942-0day-meta-fairseq-rerank-code-injection-remote-co"
    ]
  },
  {
    "slug": "meta-fairchem-deserialization-rce-exploit-8693f79e",
    "title": "Meta FAIRChem Deserialization RCE Exploit",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta FAIRChem. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-949/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairchem-deserialization-rce-exploit",
      "article-8693f79e",
      "8693f79e",
      "meta-fairchem-deserialization-rce-exploit-6f3d17",
      "meta-fairchem-deserialization-rce-exploit-cve-2026-6bd83f8a"
    ]
  },
  {
    "slug": "meta-fairchem-mlippredictunit-rce-vulnerability-d3d96450",
    "title": "Meta FAIRChem MLIPPredictUnit RCE Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta FAIRChem. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-948/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairchem-mlippredictunit-rce-vulnerability",
      "article-d3d96450",
      "d3d96450",
      "meta-fairchem-mlippredictunit-rce-vulnerability-6f3d17",
      "meta-fairchem-mlippredictunit-rce-vulnerability-cv-a6a1ed72"
    ]
  },
  {
    "slug": "meta-fairchem-npz-parsing-rce-5b5e896e",
    "title": "Meta FAIRChem NPZ Parsing RCE",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta FAIRChem. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-947/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairchem-npz-parsing-rce",
      "article-5b5e896e",
      "5b5e896e",
      "meta-fairchem-npz-parsing-rce-6f3d17",
      "meta-fairchem-npz-parsing-rce-cve-2026-111760-fdfdc26f"
    ]
  },
  {
    "slug": "zdi-26-946-0day-meta-fairchem-make-challenge-submi-71f49acc",
    "title": "ZDI-26-946: (0Day) Meta FAIRChem make_challenge_submission_file NPZ File Parsing Deserialization of Untrusted Data Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta FAIRChem. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-946/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zdi-26-946-0day-meta-fairchem-make-challenge-submi",
      "article-71f49acc",
      "71f49acc",
      "zdi-26-946-0day-meta-fairchem-make-challenge-submi-6f3d17",
      "zdi-26-946-0day-meta-fairchem-make-challenge-submission-file"
    ]
  },
  {
    "slug": "meta-fairchem-rce-via-load-inference-model-332180d5",
    "title": "Meta FAIRChem RCE via load_inference_model",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta FAIRChem. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-953/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairchem-rce-via-load-inference-model",
      "article-332180d5",
      "332180d5",
      "meta-fairchem-rce-via-load-inference-model-6f3d1b"
    ]
  },
  {
    "slug": "meta-fairchem-rce-via-cli-yaml-parsing-ba85bb3d",
    "title": "Meta FAIRChem RCE via _cli YAML Parsing",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta FAIRChem. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-952/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairchem-rce-via-cli-yaml-parsing",
      "article-ba85bb3d",
      "ba85bb3d",
      "meta-fairchem-rce-via-cli-yaml-parsing-6f3d1a"
    ]
  },
  {
    "slug": "meta-fairchem-rce-via-load-tasks-9513b812",
    "title": "Meta FAIRChem RCE via load_tasks",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta FAIRChem. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-951/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-fairchem-rce-via-load-tasks",
      "article-9513b812",
      "9513b812",
      "meta-fairchem-rce-via-load-tasks-6f3d1a"
    ]
  },
  {
    "slug": "zdi-26-950-0day-meta-fairchem-migrate-checkpoint-d-79471196",
    "title": "ZDI-26-950: (0Day) Meta FAIRChem migrate_checkpoint Deserialization of Untrusted Data Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta FAIRChem. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The ZDI has assigned a CVSS rating of 7.8.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-950/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zdi-26-950-0day-meta-fairchem-migrate-checkpoint-d",
      "article-79471196",
      "79471196",
      "zdi-26-950-0day-meta-fairchem-migrate-checkpoint-d-6f3d1a",
      "zdi-26-950-0day-meta-fairchem-migrate-checkpoint-deserializa"
    ]
  },
  {
    "slug": "red-hat-issues-rust-rpm-sequoia-security-update-abf31b66",
    "title": "Red Hat Issues rust‑rpm‑sequoia Security Update",
    "summary": "Red Hat released a security update for the rust‑rpm‑sequoia package on RHEL 10.0 EUS, addressing vulnerabilities that could enable local privilege escalation or code execution. The update lists multiple CVE identifiers with CVSS scores indicating moderate to high severity, yet no active exploitation reports exist. Red Hat recommends applying the update immediately via the standard RHEL update channels.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98248",
    "publishedAt": "2026-11-11T05:41:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-rust-rpm-sequoia-security-update",
      "article-abf31b66",
      "abf31b66",
      "red-hat-issues-rust-rpm-sequoia-security-update-37d6f0"
    ]
  },
  {
    "slug": "nearly-half-of-big-firms-shelve-or-close-vulnerabi-c3ace65b",
    "title": "Nearly half of big firms shelve or close vulnerability findings they haven’t confirmed",
    "summary": "Nearly half of security teams at organizations with 5,000 or more employees close or deprioritize vulnerability findings without fully verifying them, ProjectDiscovery found, and the reason they give is time. Among teams that skip full verification, 57% say at least three out of four findings they do check turn out to be real.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/security-teams-vulnerability-backlog/",
    "publishedAt": "2026-11-11T05:30:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nearly-half-of-big-firms-shelve-or-close-vulnerabi",
      "article-c3ace65b",
      "c3ace65b",
      "nearly-half-of-big-firms-shelve-or-close-vulnerabi-7cc6a4",
      "nearly-half-of-big-firms-shelve-or-close-vulnerability-findi"
    ]
  },
  {
    "slug": "an-instagram-ad-was-all-it-took-leaked-exploit-kit-d9919403",
    "title": "An Instagram ad was all it took: Leaked exploit kits are hitting employees’ iPhones",
    "summary": "Criminals are using leaked exploit kits to break into vulnerable iPhones, according to iVerify’s 2026 Advanced Mobile Threat Report. DarkSword chains together several software flaws to compromise iPhones. Researchers disclosed the toolkit in March 2026, and a newer version appeared on GitHub within a week, giving criminal groups code they could adapt.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/iverify-iphone-exploit-kit-attacks-report/",
    "publishedAt": "2026-11-11T05:00:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "an-instagram-ad-was-all-it-took-leaked-exploit-kit",
      "article-d9919403",
      "d9919403",
      "an-instagram-ad-was-all-it-took-leaked-exploit-kit-289af2",
      "an-instagram-ad-was-all-it-took-leaked-exploit-kits-are-hitt"
    ]
  },
  {
    "slug": "red-hat-kernel-update-addresses-important-security-7e8e2f18",
    "title": "Red Hat Kernel Update Addresses Important Security Flaw",
    "summary": "Red Hat released a kernel update for RHEL 9.6 Extended Update Support to address a critical security flaw. The advisory rates the impact as Important, with CVSS scores available via CVE links, indicating a high‑severity vulnerability affecting kernel integrity. Security teams should apply the update promptly and verify kernel version compliance.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98239",
    "publishedAt": "2026-11-11T04:47:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-addresses-important-security",
      "article-7e8e2f18",
      "7e8e2f18",
      "red-hat-kernel-update-addresses-important-security-37d6f0",
      "red-hat-kernel-update-addresses-important-security-flaw"
    ]
  },
  {
    "slug": "ghostframe-toolkit-hijacks-vmware-esxi-vms-steals-7f33e363",
    "title": "GhostFrame Toolkit Hijacks VMware ESXi VMs, Steals Credentials",
    "summary": "A new GhostFrame hacking toolkit enables attackers to hijack VMware ESXi servers and the virtual machines they host. The framework, discovered by Recorded Future’s Insikt Group while tracking TAG‑218, can extract Windows passwords, indicating a credential‑stealing capability. Security teams should isolate ESXi hosts, apply vendor patches, and monitor for unauthorized management console access.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ghostframe-malware-hijack-vmware-esxi/",
    "publishedAt": "2026-11-11T04:26:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ghostframe-toolkit-hijacks-vmware-esxi-vms-steals",
      "article-7f33e363",
      "7f33e363",
      "ghostframe-toolkit-hijacks-vmware-esxi-vms-steals-18dc84",
      "ghostframe-toolkit-hijacks-vmware-esxi-vms-steals-credential"
    ]
  },
  {
    "slug": "rhsa-2026-98130-important-httpd-2-4-security-updat-eb88d9df",
    "title": "RHSA-2026:98130: Important: httpd:2.4 security update",
    "summary": "An update for the httpd:2.4 module is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98130",
    "publishedAt": "2026-11-11T03:33:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98130-important-httpd-2-4-security-updat",
      "article-eb88d9df",
      "eb88d9df",
      "rhsa-2026-98130-important-httpd-2-4-security-updat-37d6f4",
      "rhsa-2026-98130-important-httpd-2-4-security-update"
    ]
  },
  {
    "slug": "openshift-4-17-60-releases-security-update-3d6f3f82",
    "title": "OpenShift 4.17.60 Releases Security Update",
    "summary": "Red Hat OpenShift Container Platform 4.17.60 now includes a security update addressing multiple vulnerabilities. The update resolves several bugs and security issues, each with a CVSS score listed in the references, reducing exploitation risk. Administrators should deploy the 4.17.60 release promptly and update all dependent images to maintain platform security.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96281",
    "publishedAt": "2026-11-11T03:24:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openshift-4-17-60-releases-security-update",
      "article-3d6f3f82",
      "3d6f3f82",
      "openshift-4-17-60-releases-security-update-37d7d8"
    ]
  },
  {
    "slug": "wireshark-update-addresses-security-issues-a806c34c",
    "title": "Wireshark Update Addresses Security Issues",
    "summary": "Red Hat Enterprise Linux 9 now receives a Wireshark security update addressing multiple vulnerabilities. The update patches several bugs, each assigned a CVSS score in the references, reducing exploitation risk. Administrators should install the latest Wireshark package immediately and update any dependent services to ensure network traffic analysis remains secure.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97879",
    "publishedAt": "2026-11-11T03:24:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wireshark-update-addresses-security-issues",
      "article-a806c34c",
      "a806c34c",
      "wireshark-update-addresses-security-issues-37d74d"
    ]
  },
  {
    "slug": "rhsa-2026-98099-important-kernel-security-update-d3e73b1f",
    "title": "RHSA-2026:98099: Important: kernel security update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98099",
    "publishedAt": "2026-11-11T03:22:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98099-important-kernel-security-update",
      "article-d3e73b1f",
      "d3e73b1f",
      "rhsa-2026-98099-important-kernel-security-update-37d6f7"
    ]
  },
  {
    "slug": "red-enterprise-linux-9-6-users-receive-python-torn-af547853",
    "title": "Red Enterprise Linux 9.6 users receive python-tornado patch",
    "summary": "Red Enterprise Linux 9.6 users face a python‑tornado vulnerability that could allow local privilege escalation via malformed input. Red Hat Product Security rates the issue as Important, with a CVSS base score available via CVE links. Affected systems should apply the python‑tornado update immediately; no workaround is currently recommended today.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98110",
    "publishedAt": "2026-11-11T03:18:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-enterprise-linux-9-6-users-receive-python-torn",
      "article-af547853",
      "af547853",
      "red-enterprise-linux-9-6-users-receive-python-torn-37d6f4",
      "red-enterprise-linux-9-6-users-receive-python-tornado-patch"
    ]
  },
  {
    "slug": "critical-fortinet-flaws-expose-fortimanager-and-fo-5469e6d8",
    "title": "Critical Fortinet Flaws Expose FortiManager and FortiAnalyzer to Remote Code Execution Without Login",
    "summary": "Fortinet has disclosed critical security flaws affecting FortiManager, FortiAnalyzer, and FortiOS, including weaknesses that could let attackers execute code without logging in. Published on November 10, 2026, the disclosures cover management APIs, device communication services, routing, and specific high availability setups.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-fortinet-flaws-patched/",
    "publishedAt": "2026-11-11T03:15:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "critical-fortinet-flaws-expose-fortimanager-and-fo",
      "article-5469e6d8",
      "5469e6d8",
      "critical-fortinet-flaws-expose-fortimanager-and-fo-35c691",
      "critical-fortinet-flaws-expose-fortimanager-and-fortianalyze"
    ]
  },
  {
    "slug": "red-enterprise-linux-7-users-receive-acl-security-532fc7b9",
    "title": "Red Enterprise Linux 7 users receive acl security patch",
    "summary": "Red Enterprise Linux 7 Extended Lifecycle Support users face a vulnerability in the acl package that could allow local privilege escalation via malformed ACL entries. Red Hat Product Security rates the issue as Important, with a CVSS base score available through CVE links in the advisory references.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98129",
    "publishedAt": "2026-11-11T03:10:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-enterprise-linux-7-users-receive-acl-security",
      "article-532fc7b9",
      "532fc7b9",
      "red-enterprise-linux-7-users-receive-acl-security-37d6f4",
      "red-enterprise-linux-7-users-receive-acl-security-patch"
    ]
  },
  {
    "slug": "rhsa-2026-98107-important-python-tornado-security-6a82b776",
    "title": "RHSA-2026:98107: Important: python-tornado security update",
    "summary": "An update for python-tornado is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98107",
    "publishedAt": "2026-11-11T02:58:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98107-important-python-tornado-security",
      "article-6a82b776",
      "6a82b776",
      "rhsa-2026-98107-important-python-tornado-security-37d6f4",
      "rhsa-2026-98107-important-python-tornado-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-98109-critical-python-pillow-security-up-852ee003",
    "title": "RHSA-2026:98109: Critical: python-pillow security update",
    "summary": "An update for python-pillow is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Critical.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98109",
    "publishedAt": "2026-11-11T02:35:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98109-critical-python-pillow-security-up",
      "article-852ee003",
      "852ee003",
      "rhsa-2026-98109-critical-python-pillow-security-up-37d6f4",
      "rhsa-2026-98109-critical-python-pillow-security-update"
    ]
  },
  {
    "slug": "microsoft-confirms-hackers-are-exploiting-outlook-0e1a2292",
    "title": "Microsoft Confirms Hackers Are Exploiting Outlook 0-Day to Steal Windows Authentication Hashes",
    "summary": "Microsoft has confirmed that hackers are exploiting an Outlook zero-day that can expose Windows authentication information when a user opens a malicious file. Tracked as CVE-2026-124194, the spoofing vulnerability was patched on November 10, 2026. Microsoft marks it “Exploitation Detected” and says it was not publicly disclosed before the update.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/outlook-0-day-vulnerability/",
    "publishedAt": "2026-11-11T02:35:43.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-confirms-hackers-are-exploiting-outlook",
      "article-0e1a2292",
      "0e1a2292",
      "microsoft-confirms-hackers-are-exploiting-outlook-198773",
      "microsoft-confirms-hackers-are-exploiting-outlook-0-day-to-s"
    ]
  },
  {
    "slug": "rhsa-2026-98100-important-kernel-rt-security-updat-ba6c131b",
    "title": "RHSA-2026:98100: Important: kernel-rt security update",
    "summary": "An update for kernel-rt is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98100",
    "publishedAt": "2026-11-11T02:33:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98100-important-kernel-rt-security-updat",
      "article-ba6c131b",
      "ba6c131b",
      "rhsa-2026-98100-important-kernel-rt-security-updat-37d6f4",
      "rhsa-2026-98100-important-kernel-rt-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-98114-important-kernel-security-update-0a2558a7",
    "title": "RHSA-2026:98114: Important: kernel security update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 6 Extended Lifecycle Support - EXTENSION. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98114",
    "publishedAt": "2026-11-11T01:57:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98114-important-kernel-security-update",
      "article-0a2558a7",
      "0a2558a7",
      "rhsa-2026-98114-important-kernel-security-update-37d6f4"
    ]
  },
  {
    "slug": "rhsa-2026-98121-important-openssl-security-update-f3438212",
    "title": "RHSA-2026:98121: Important: openssl security update",
    "summary": "An update for openssl is now available for Red Hat Enterprise Linux 6 Extended Lifecycle Support - EXTENSION. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98121",
    "publishedAt": "2026-11-11T01:57:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98121-important-openssl-security-update",
      "article-f3438212",
      "f3438212",
      "rhsa-2026-98121-important-openssl-security-update-37d6f4"
    ]
  },
  {
    "slug": "rhsa-2026-98111-critical-python-pillow-security-up-cd2b292b",
    "title": "RHSA-2026:98111: Critical: python-pillow security update",
    "summary": "An update for python-pillow is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Critical.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98111",
    "publishedAt": "2026-11-11T01:55:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98111-critical-python-pillow-security-up",
      "article-cd2b292b",
      "cd2b292b",
      "rhsa-2026-98111-critical-python-pillow-security-up-37d6f4",
      "rhsa-2026-98111-critical-python-pillow-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-98118-important-python-oauthlib-security-05791297",
    "title": "RHSA-2026:98118: Important: python-oauthlib security update",
    "summary": "An update for python-oauthlib is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98118",
    "publishedAt": "2026-11-11T01:54:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98118-important-python-oauthlib-security",
      "article-05791297",
      "05791297",
      "rhsa-2026-98118-important-python-oauthlib-security-37d6f4",
      "rhsa-2026-98118-important-python-oauthlib-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-98097-important-python3-12-urllib3-secur-d3eebe11",
    "title": "RHSA-2026:98097: Important: python3.12-urllib3 security update",
    "summary": "An update for python3.12-urllib3 is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98097",
    "publishedAt": "2026-11-11T01:45:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98097-important-python3-12-urllib3-secur",
      "article-d3eebe11",
      "d3eebe11",
      "rhsa-2026-98097-important-python3-12-urllib3-secur-37d6f7",
      "rhsa-2026-98097-important-python3-12-urllib3-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-98116-important-dnsmasq-security-bug-fix-df3ba1ce",
    "title": "RHSA-2026:98116: Important: dnsmasq security, bug fix, and enhancement update",
    "summary": "An update for dnsmasq is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98116",
    "publishedAt": "2026-11-11T01:45:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98116-important-dnsmasq-security-bug-fix",
      "article-df3ba1ce",
      "df3ba1ce",
      "rhsa-2026-98116-important-dnsmasq-security-bug-fix-37d6f4",
      "rhsa-2026-98116-important-dnsmasq-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "rhsa-2026-98112-important-flatpak-security-update-77f2c077",
    "title": "RHSA-2026:98112: Important: flatpak security update",
    "summary": "An update for flatpak is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98112",
    "publishedAt": "2026-11-11T01:45:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98112-important-flatpak-security-update",
      "article-77f2c077",
      "77f2c077",
      "rhsa-2026-98112-important-flatpak-security-update-37d6f4"
    ]
  },
  {
    "slug": "rhsa-2026-98104-critical-python-tornado-security-u-6191568f",
    "title": "RHSA-2026:98104: Critical: python-tornado security update",
    "summary": "An update for python-tornado is now available for Red Hat Enterprise Linux 7 Extended Lifecycle Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98104",
    "publishedAt": "2026-11-11T01:44:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98104-critical-python-tornado-security-u",
      "article-6191568f",
      "6191568f",
      "rhsa-2026-98104-critical-python-tornado-security-u-37d6f4",
      "rhsa-2026-98104-critical-python-tornado-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-95745-critical-openshift-container-platf-51cfd39e",
    "title": "RHSA-2026:95745: Critical: OpenShift Container Platform 4.13.73 bug fix and security update",
    "summary": "Red Hat OpenShift Container Platform release 4.13.73 is now available with updates to packages and images that fix several bugs and add enhancements. This release includes a security update for Red Hat OpenShift Container Platform 4.13. Red Hat Product Security has rated this update as having a security impact of Critical.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95745",
    "publishedAt": "2026-11-11T01:43:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95745-critical-openshift-container-platf",
      "article-51cfd39e",
      "51cfd39e",
      "rhsa-2026-95745-critical-openshift-container-platf-37d83a",
      "rhsa-2026-95745-critical-openshift-container-platform-4-13-7"
    ]
  },
  {
    "slug": "microsoft-patch-tuesday-for-november-2026-snort-ru-db9b6612",
    "title": "Microsoft Patch Tuesday for November 2026 — Snort rules and prominent vulnerabilities",
    "summary": "Microsoft has released its monthly security update for November 2026, which includes 1328 vulnerabilities affecting a range of products, including 60 that Microsoft marked as \"critical.\" Out of 60 \"critical\" vulnerabilities, 45 are remote code execution (RCE) vulnerabilities. Prominent fixes include the actively exploited Outlook zero-day CVE-2026-124194.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cisco Talos",
    "sourceUrl": "https://blog.talosintelligence.com/microsoft-patch-tuesday-for-november-2026/",
    "publishedAt": "2026-11-11T01:41:17.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-patch-tuesday-for-november-2026-snort-ru",
      "article-db9b6612",
      "db9b6612",
      "microsoft-patch-tuesday-for-november-2026-snort-ru-5b5aa2",
      "microsoft-patch-tuesday-for-november-2026-snort-rules-and-pr"
    ]
  },
  {
    "slug": "rhsa-2026-97873-important-kernel-security-bug-fix-13dc64f8",
    "title": "RHSA-2026:97873: Important: kernel security, bug fix, and enhancement update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97873",
    "publishedAt": "2026-11-11T01:27:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97873-important-kernel-security-bug-fix",
      "article-13dc64f8",
      "13dc64f8",
      "rhsa-2026-97873-important-kernel-security-bug-fix-37d74d",
      "rhsa-2026-97873-important-kernel-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "red-hat-updates-python-urllib3-for-enterprise-linu-9ba06051",
    "title": "Red Hat Updates python‑urllib3 for Enterprise Linux",
    "summary": "Red Hat released a security update for python‑urllib3 in its Enterprise Linux 10.0 Extended Update Support, addressing a flaw. The vulnerability, rated Important by Red Hat Product Security, could allow attackers to exploit insecure urllib3 handling, leading to remote code execution. Users should apply the update immediately, verify CVE references for severity, and enforce secure coding practices to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98096",
    "publishedAt": "2026-11-11T01:23:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-python-urllib3-for-enterprise-linu",
      "article-9ba06051",
      "9ba06051",
      "red-hat-updates-python-urllib3-for-enterprise-linu-37d6f7",
      "red-hat-updates-python-urllib3-for-enterprise-linux"
    ]
  },
  {
    "slug": "red-hat-kernel-update-addresses-important-flaws-55412646",
    "title": "Red Hat Kernel Update Addresses Important Flaws",
    "summary": "Red Hat released a kernel update for RHEL 9.4 Update Services for SAP Solutions to address critical security issues. The advisory lists kernel vulnerabilities with CVSS scores; no active exploitation is reported, but flaws could enable local privilege escalation or code execution. Red Hat urges immediate application of the update; CVE references and CVSS details are available for further assessment.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98047",
    "publishedAt": "2026-11-11T00:54:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-addresses-important-flaws",
      "article-55412646",
      "55412646",
      "red-hat-kernel-update-addresses-important-flaws-37d6f7"
    ]
  },
  {
    "slug": "libreswan-update-fixes-security-vulnerabilities-0f3608f7",
    "title": "libreswan Update Fixes Security Vulnerabilities",
    "summary": "Red Hat released a libreswan update addressing multiple security bugs and adding performance enhancements for RHEL 9. The update is rated Important, with CVSS scores available via the referenced CVE links, and fixes memory corruption and privilege escalation issues. Administrators should apply the RHSA-2026:98046 update immediately to maintain system security and compliance.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98046",
    "publishedAt": "2026-11-11T00:16:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "libreswan-update-fixes-security-vulnerabilities",
      "article-0f3608f7",
      "0f3608f7",
      "libreswan-update-fixes-security-vulnerabilities-37d6f7"
    ]
  },
  {
    "slug": "malicious-screenconnect-deployments-observed-3476ec75",
    "title": "Malicious ScreenConnect Deployments Observed",
    "summary": "Malicious ScreenConnect deployments observed by Sophos Threat Research. The deployments involve unauthorized use of the ScreenConnect platform, potentially compromising system integrity and facilitating unauthorized remote access. Sophos recommends monitoring for anomalous ScreenConnect activity, applying vendor security controls, reviewing remote support configurations, and verifying the legitimacy of remote sessions to mitigate risk.",
    "category": "General",
    "severity": "LOW",
    "source": "Sophos Threat Research",
    "sourceUrl": "https://www.sophos.com/en-us/blog/malicious-screenconnect-deployments-observed",
    "publishedAt": "2026-11-11T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "malicious-screenconnect-deployments-observed",
      "article-3476ec75",
      "3476ec75",
      "malicious-screenconnect-deployments-observed-3f2e43"
    ]
  },
  {
    "slug": "macos-ai-driven-attack-detection-and-mitigation-71c344c8",
    "title": "macOS AI-Driven Attack Detection and Mitigation",
    "summary": "Security analysts report macOS systems are increasingly targeted by AI‑driven attack campaigns that adapt payloads and evade signatures. These attacks use machine‑learning models to generate polymorphic code, bypassing static analysis and exploiting user interaction vectors, with no CVE disclosed. Apple advises installing the latest macOS security updates, enabling built‑in threat detection, and configuring system integrity protection to mitigate adaptive threats.",
    "category": "General",
    "severity": "LOW",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/over-575-malicious-openclaw-skills-delivered-malware-to",
    "publishedAt": "2026-11-10T23:05:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "macos-ai-driven-attack-detection-and-mitigation",
      "article-71c344c8",
      "71c344c8",
      "macos-ai-driven-attack-detection-and-mitigation-1b8a8b"
    ]
  },
  {
    "slug": "cisa-updates-incident-form-for-linked-attack-detec-63467f97",
    "title": "CISA Updates Incident Form for Linked Attack Detection",
    "summary": "CISA released an updated Incident Form designed to detect linked attacks by correlating root‑cause telemetry across multiple incidents. The update provides new detection rules and telemetry fields that enable security teams to identify patterns of coordinated activity and trigger alerts. Administrators should download the revised form, apply the new telemetry schema, and review detection rules to ensure timely incident response.",
    "category": "General",
    "severity": "LOW",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cisa-tweaks-cyber-incident-form-to-spot-attacks-that-mi",
    "publishedAt": "2026-11-10T23:05:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-updates-incident-form-for-linked-attack-detec",
      "article-63467f97",
      "63467f97",
      "cisa-updates-incident-form-for-linked-attack-detec-17bb0c",
      "cisa-updates-incident-form-for-linked-attack-detection"
    ]
  },
  {
    "slug": "turla-malware-exploitation-enhanced-by-ai-reverse-6a00e457",
    "title": "Turla Malware Exploitation Enhanced by AI Reverse Engineering",
    "summary": "Turla malware, a Russian state-sponsored threat, is now being reverse engineered using AI techniques, according to a security intelligence alert. The AI-driven analysis uncovers root‑cause telemetry and detection rule patterns, enabling precise identification of Turla's command‑and‑control infrastructure, but no active exploitation is confirmed. Security teams should review telemetry, apply updated detection rules, and patch affected systems to mitigate potential compromise.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/ai-makes-reverse-engineering-mainstream-software-malwar",
    "publishedAt": "2026-11-10T23:04:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "turla-malware-exploitation-enhanced-by-ai-reverse",
      "article-6a00e457",
      "6a00e457",
      "turla-malware-exploitation-enhanced-by-ai-reverse-5e0fa6",
      "turla-malware-exploitation-enhanced-by-ai-reverse-engineerin"
    ]
  },
  {
    "slug": "openssh-and-gpustack-exploited-via-cve-2026-123158-a4cdc7a6",
    "title": "OpenSSH and GPUStack Exploited via CVE-2026-123158 and CVE-2026-102895",
    "summary": "CISA added OpenBSD OpenSSH flaw CVE-2026-123158 and GPUStack vulnerability CVE-2026-102895 to its KEV catalog after active exploitation. Attackers query cloud metadata, attempt to steal password hashes and root SSH keys, modify authorized_keys for persistent access, and deploy the Python TAC Agent C2. Apply vendor updates immediately and hunt across affected Linux and cloud hosts.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cisa-warns-of-active-exploitation-of-openssh-gpustack-f",
    "publishedAt": "2026-11-10T23:04:32.000Z",
    "cves": [
      "CVE-2026-123158",
      "CVE-2026-102895"
    ],
    "additionalSources": [],
    "aliases": [
      "openssh-and-gpustack-exploited-via-cve-2026-123158",
      "article-a4cdc7a6",
      "a4cdc7a6",
      "openssh-and-gpustack-exploited-via-cve-2026-123158-16c8bd",
      "openssh-and-gpustack-exploited-via-cve-2026-123158-and-cve-2",
      "openssh-gpustack-exploited-via-cve-2026-123218-f2cc45ed"
    ]
  },
  {
    "slug": "sap-issues-critical-rce-patches-0b9b0471",
    "title": "SAP Issues Critical RCE Patches",
    "summary": "SAP issued emergency patches for critical remote code execution flaws in its software, exposing customers to code execution via malformed input. Rated CVSS 10.0, the bugs allow attackers to run arbitrary code without credentials, threatening system integrity and data confidentiality. SAP urges immediate application of the updates and monitoring for suspicious activity, as no workaround exists until patches are installed.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/sap-patches-four-cvss-10-0-flaws-including-two-enabling",
    "publishedAt": "2026-11-10T23:04:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sap-issues-critical-rce-patches",
      "article-0b9b0471",
      "0b9b0471",
      "sap-issues-critical-rce-patches-5efef2"
    ]
  },
  {
    "slug": "apple-imessage-group-chat-and-bluetooth-vulnerabil-fdd645db",
    "title": "Apple iMessage Group Chat and Bluetooth Vulnerabilities Patched",
    "summary": "Apple patched vulnerabilities in iMessage group chat and Bluetooth functionality that could allow attackers to exploit the messaging service. The flaws stem from improper input validation in group chat message handling and Bluetooth pairing, enabling code execution or denial of service. Apple released an update for iOS and macOS; users should install the latest iMessage patch to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/apple-patches-imessage-group-chat-privacy-flaws-and-blu",
    "publishedAt": "2026-11-10T23:04:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-imessage-group-chat-and-bluetooth-vulnerabil",
      "article-fdd645db",
      "fdd645db",
      "apple-imessage-group-chat-and-bluetooth-vulnerabil-2f6048",
      "apple-imessage-group-chat-and-bluetooth-vulnerabilities-patc"
    ]
  },
  {
    "slug": "microsoft-research-detects-sleeper-agents-in-ai-ne-787eb744",
    "title": "Microsoft Research Detects Sleeper Agents in AI Neurons",
    "summary": "Microsoft Research discovered a way to turn an agent model into a sleeper agent by editing fewer than ten neurons to embed a malicious payload. Frontier agents can detect these edits by spotting anomalous neuron changes, allowing early detection before payload activation. Teams should monitor training logs for sudden neuron modifications and use anomaly‑detection tools to mitigate sleeper agent risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/11/10/detecting-sleeper-agents-hiding-in-ai-model-neurons/",
    "publishedAt": "2026-11-10T23:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-research-detects-sleeper-agents-in-ai-ne",
      "article-787eb744",
      "787eb744",
      "microsoft-research-detects-sleeper-agents-in-ai-ne-641529",
      "microsoft-research-detects-sleeper-agents-in-ai-neurons"
    ]
  },
  {
    "slug": "red-hat-releases-security-update-for-php-8-4-292ebc39",
    "title": "Red Hat Releases Security Update for php:8.4",
    "summary": "Red Hat released a security update for the php:8.4 module on Enterprise Linux 9. The update addresses multiple vulnerabilities in PHP’s core engine, including a potential remote code execution flaw that could allow attackers to execute arbitrary code via crafted input. Administrators should apply the php:8.4 update immediately and verify that all web applications are running the patched version.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97880",
    "publishedAt": "2026-11-10T22:40:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-security-update-for-php-8-4",
      "article-292ebc39",
      "292ebc39",
      "red-hat-releases-security-update-for-php-8-4-37d74d"
    ]
  },
  {
    "slug": "red-hat-issues-update-for-mod-auth-openidc-27a52e13",
    "title": "Red Hat Issues Update for mod_auth_openidc",
    "summary": "Red Hat released a security update for the mod_auth_openidc module on Enterprise Linux 9. The patch fixes multiple authentication bypass and privilege escalation flaws that could allow attackers to gain unauthorized access to protected resources. Administrators should apply the update immediately and review access logs for anomalous authentication attempts today.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97861",
    "publishedAt": "2026-11-10T22:37:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-update-for-mod-auth-openidc",
      "article-27a52e13",
      "27a52e13",
      "red-hat-issues-update-for-mod-auth-openidc-37d74d"
    ]
  },
  {
    "slug": "cisco-ise-authorization-bypass-flaws-exposed-80fd12f9",
    "title": "Cisco ISE Authorization Bypass Flaws Exposed",
    "summary": "Cisco ISE and ISE‑PIC contain web‑interface authorization bypass flaws that let authenticated remote attackers modify configuration. The flaw arises from missing server‑side validation of Administrator permissions, enabling crafted HTTP requests to alter file descriptions; exploitation requires valid admin credentials. Cisco has issued patches that address these vulnerabilities, and no workarounds exist; security teams should apply them promptly.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-ise-auth-bypass-1-MxcTNgwx?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DCisco+Identity+Services+Engine+Authorization+Bypass+Vulnerabilities%26vs_k%3D1",
    "publishedAt": "2026-11-10T22:37:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-ise-authorization-bypass-flaws-exposed",
      "article-80fd12f9",
      "80fd12f9",
      "cisco-ise-authorization-bypass-flaws-exposed-577da1"
    ]
  },
  {
    "slug": "python-jwcrypto-update-addresses-moderate-security-40f8f9fd",
    "title": "Python-jwcrypto Update Addresses Moderate Security Issue",
    "summary": "Red Hat released a security update for python‑jwcrypto on RHEL 9, addressing a moderate‑impact vulnerability identified by the product security team. The update mitigates potential misuse of the cryptographic library, though no public exploit or CVE identifier is disclosed. Customers should apply the RHSA‑2026:97858 update immediately to ensure cryptographic integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97858",
    "publishedAt": "2026-11-10T22:36:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "python-jwcrypto-update-addresses-moderate-security",
      "article-40f8f9fd",
      "40f8f9fd",
      "python-jwcrypto-update-addresses-moderate-security-37d74e",
      "python-jwcrypto-update-addresses-moderate-security-issue"
    ]
  },
  {
    "slug": "rhsa-2026-97855-important-nodejs-26-security-updat-f0c45be3",
    "title": "RHSA-2026:97855: Important: nodejs:26 security update",
    "summary": "An update for the nodejs:26 module is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97855",
    "publishedAt": "2026-11-10T22:35:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97855-important-nodejs-26-security-updat",
      "article-f0c45be3",
      "f0c45be3",
      "rhsa-2026-97855-important-nodejs-26-security-updat-37d74e",
      "rhsa-2026-97855-important-nodejs-26-security-update"
    ]
  },
  {
    "slug": "delve-update-fixes-important-security-bug-1aa4724a",
    "title": "Delve Update Fixes Important Security Bug",
    "summary": "Red Hat issued an important security update for the delve tool on RHEL 9, addressing a critical bug that could affect system integrity. The advisory notes that the flaw may allow unauthorized access to privileged data, though no public exploit is reported. Users should install RHSA‑2026:97877 immediately to prevent potential privilege escalation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97877",
    "publishedAt": "2026-11-10T22:32:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "delve-update-fixes-important-security-bug",
      "article-1aa4724a",
      "1aa4724a",
      "delve-update-fixes-important-security-bug-37d74d"
    ]
  },
  {
    "slug": "red-hat-releases-rust-sequoia-sq-security-update-d6f979ee",
    "title": "Red Hat Releases Rust-Sequoia-Sq Security Update",
    "summary": "Red Hat issued a security update for the rust‑sequoia‑sq library used in Red Hat Enterprise Linux 9, addressing a flaw that could allow attackers to compromise system integrity. The vulnerability arises from improper handling of cryptographic parameters, potentially enabling unauthorized code execution or privilege escalation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97868",
    "publishedAt": "2026-11-10T22:31:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-rust-sequoia-sq-security-update",
      "article-d6f979ee",
      "d6f979ee",
      "red-hat-releases-rust-sequoia-sq-security-update-37d74d"
    ]
  },
  {
    "slug": "microsoft-releases-patch-for-actively-exploited-ou-c9129445",
    "title": "Microsoft Releases Patch for Actively Exploited Outlook Zero-Day",
    "summary": "Microsoft released a patch for an actively exploited Outlook zero‑day affecting Microsoft Outlook. The flaw enabled remote code execution via crafted email attachments, allowing attackers to run arbitrary code on vulnerable clients. Microsoft issued an out‑of‑band update; administrators should apply the patch promptly and monitor for anomalous outbound traffic immediately.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/vulnerabilities-threats/november-patch-tuesday-cornucopia-cves",
    "publishedAt": "2026-11-10T22:26:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-releases-patch-for-actively-exploited-ou",
      "article-c9129445",
      "c9129445",
      "microsoft-releases-patch-for-actively-exploited-ou-1fdbae",
      "microsoft-releases-patch-for-actively-exploited-outlook-zero"
    ]
  },
  {
    "slug": "railway-breach-generates-740k-in-fraudulent-ai-cha-a3f05e2a",
    "title": "Railway Breach Generates $740k in Fraudulent AI Charges",
    "summary": "Cloud hosting provider Railway suffered a breach that exposed customer authentication secrets and enabled fraudulent AI usage. Attackers leveraged infrastructure vulnerabilities to steal credentials for up to 100,000 workspaces, generating approximately $740,000 in unauthorized AI compute charges. Railway has applied security patches, revoked compromised tokens, and notified affected customers to reset credentials and monitor usage.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/apple/railway-breach-leads-to-740-000-in-fraudulent-ai-charges/",
    "publishedAt": "2026-11-10T22:20:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "railway-breach-generates-740k-in-fraudulent-ai-cha",
      "article-a3f05e2a",
      "a3f05e2a",
      "railway-breach-generates-740k-in-fraudulent-ai-cha-14e3d2",
      "railway-breach-generates-740k-in-fraudulent-ai-charges"
    ]
  },
  {
    "slug": "microsoft-releases-patch-for-1-100-windows-vulnera-82dba596",
    "title": "Microsoft Releases Patch for 1,100 Windows Vulnerabilities",
    "summary": "Microsoft issued a Patch Tuesday update that addresses nearly 1,100 security vulnerabilities across its Windows operating systems and supported software. The release includes 63 critical fixes, among them a zero‑day in Microsoft Outlook, and aligns with concurrent updates from Adobe, Apple, Google, and Mozilla. Security teams should apply the patches promptly to mitigate the identified weaknesses and maintain system integrity.",
    "category": "General",
    "severity": "LOW",
    "source": "Krebs on Security",
    "sourceUrl": "https://krebsonsecurity.com/2026/11/microsoft-fixes-nearly-1100-security-vulnerabilities/",
    "publishedAt": "2026-11-10T21:55:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-releases-patch-for-1-100-windows-vulnera",
      "article-82dba596",
      "82dba596",
      "microsoft-releases-patch-for-1-100-windows-vulnera-35e7ae",
      "microsoft-releases-patch-for-1-100-windows-vulnerabilities"
    ]
  },
  {
    "slug": "us-soldier-arrested-in-uk-for-alleged-russian-espi-a12ae7b9",
    "title": "US Soldier Arrested in UK for Alleged Russian Espionage",
    "summary": "A U.S. Army member was arrested by British counterterrorism police in cooperation with U.S. authorities including the FBI and military. The arrest relates to allegations of spying for Russia. The Metropolitan Police confirmed the coordinated investigation. This case highlights ongoing international efforts to counter foreign intelligence operations conducted by service members.",
    "category": "Nation State",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/us-army-member-arrested-in-uk-spying-for-russia",
    "publishedAt": "2026-11-10T21:13:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "us-soldier-arrested-in-uk-for-alleged-russian-espi",
      "article-a12ae7b9",
      "a12ae7b9",
      "us-soldier-arrested-in-uk-for-alleged-russian-espi-6a2340",
      "us-soldier-arrested-in-uk-for-alleged-russian-espionage"
    ]
  },
  {
    "slug": "artex-forks-enable-rapid-credential-attacks-f642655a",
    "title": "Artex Forks Enable Rapid Credential Attacks",
    "summary": "Forks of the open-source Artex framework and 45 similar pen‑testing tools can execute credential attacks and cloud breaches at machine speed across multiple industries. The tools exploit weak authentication and misconfigured cloud services, allowing attackers to harvest credentials and compromise cloud resources without user interaction. Security teams should audit cloud configurations, enforce multi‑factor authentication, and monitor for anomalous credential‑exfiltration activity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/artex-ai-pen-test-tool-hackers-weapon",
    "publishedAt": "2026-11-10T21:01:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "artex-forks-enable-rapid-credential-attacks",
      "article-f642655a",
      "f642655a",
      "artex-forks-enable-rapid-credential-attacks-f79209"
    ]
  },
  {
    "slug": "microsoft-patch-tuesday-exceeds-1-000-vulnerabilit-1fd9f3cb",
    "title": "Microsoft Patch Tuesday Exceeds 1,000 Vulnerabilities",
    "summary": "Microsoft’s Patch Tuesday released 1,093 fixes, with the most attention on an exploited Outlook vulnerability. The update list exceeded 1,000 bugs for the second consecutive month, reflecting a high volume of security issues. Administrators should review the advisory and apply all relevant patches in a timely manner to maintain system integrity.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/patch-tuesday-microsoft-1000-bugs-again",
    "publishedAt": "2026-11-10T20:55:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-patch-tuesday-exceeds-1-000-vulnerabilit",
      "article-1fd9f3cb",
      "1fd9f3cb",
      "microsoft-patch-tuesday-exceeds-1-000-vulnerabilit-b9c145",
      "microsoft-patch-tuesday-exceeds-1-000-vulnerabilities"
    ]
  },
  {
    "slug": "nitori-exposes-37-6m-customer-records-theft-c6603bc7",
    "title": "Nitori Exposes 37.6M Customer Records Theft",
    "summary": "Nitori, a major Japanese furniture retailer, discovered attackers accessed a system on its network and may have stolen 37.62 million customer records. The breach exposed personal identifiers, purchase histories, and contact information, though the full scope of compromised data remains unclear. Nitori should conduct a forensic investigation, notify affected customers, and strengthen network segmentation and access controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/japanese-furniture-giant-nitori-says-hackers-stole-376m-customer-records/",
    "publishedAt": "2026-11-10T20:54:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nitori-exposes-37-6m-customer-records-theft",
      "article-c6603bc7",
      "c6603bc7",
      "nitori-exposes-37-6m-customer-records-theft-51d305"
    ]
  },
  {
    "slug": "rhsa-2026-97578-important-buildah-security-bug-fix-e44cc762",
    "title": "RHSA-2026:97578: Important: buildah security, bug fix, and enhancement update",
    "summary": "An update for buildah is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97578",
    "publishedAt": "2026-11-10T20:46:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97578-important-buildah-security-bug-fix",
      "article-e44cc762",
      "e44cc762",
      "rhsa-2026-97578-important-buildah-security-bug-fix-37d759",
      "rhsa-2026-97578-important-buildah-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "rhsa-2026-97514-important-subscription-manager-coc-f9fd6ec0",
    "title": "RHSA-2026:97514: Important: subscription-manager-cockpit security update",
    "summary": "An update for subscription-manager-cockpit is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97514",
    "publishedAt": "2026-11-10T20:44:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97514-important-subscription-manager-coc",
      "article-f9fd6ec0",
      "f9fd6ec0",
      "rhsa-2026-97514-important-subscription-manager-coc-37d759",
      "rhsa-2026-97514-important-subscription-manager-cockpit-secur"
    ]
  },
  {
    "slug": "aurora-adtp-blocks-ransomware-with-ai-in-real-time-6ec26d86",
    "title": "Aurora ADTP Blocks Ransomware with AI in Real Time",
    "summary": "Aurora Adaptive Threat Protection (ADTP) employs AI‑powered intent detection to identify ransomware and advanced threats before they reach endpoints. The system analyzes traffic patterns and user behavior, flagging malicious payloads and command‑and‑control communications with high accuracy. Security teams should integrate ADTP into existing SIEM pipelines and enable real‑time alerting to maintain continuous protection.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/technical-videos/how-aurora-adaptive-threat-protection-detects-and-disrupts-attacks-in-real-time/",
    "publishedAt": "2026-11-10T20:43:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "aurora-adtp-blocks-ransomware-with-ai-in-real-time",
      "article-6ec26d86",
      "6ec26d86",
      "aurora-adtp-blocks-ransomware-with-ai-in-real-time-42e684"
    ]
  },
  {
    "slug": "f-secure-maps-26-ai-harms-in-consumer-taxonomy-8ac4516e",
    "title": "F-Secure Maps 26 AI Harms in Consumer Taxonomy",
    "summary": "F-Secure introduced an AI Harms Taxonomy identifying 26 operational mechanisms that pose risks to consumers interacting with artificial intelligence systems. The framework maps attack vectors moving through AI infrastructure, ranging from misleading chatbot outputs to compromised autonomous software agents. According to F-Secure, the study highlights specific intervention points where defensive controls can mitigate consumer harm across AI deployments.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/application-security/f-secure-26-ways-ai-harm-consumers-where-to-stop-them",
    "publishedAt": "2026-11-10T20:41:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "f-secure-maps-26-ai-harms-in-consumer-taxonomy",
      "article-8ac4516e",
      "8ac4516e",
      "f-secure-maps-26-ai-harms-in-consumer-taxonomy-5eed8f"
    ]
  },
  {
    "slug": "checkmarx-names-kobi-sivilya-as-chief-information-05842302",
    "title": "Checkmarx Names Kobi Sivilya as Chief Information Security Officer",
    "summary": "Application security vendor Checkmarx announced the appointment of Kobi Sivilya as its new Chief Information Security Officer. The executive transition aims to reinforce internal security posture and guide organizational cybersecurity strategy amid AI-driven shifts in software development. Sivilya will oversee enterprise defense operations and risk management frameworks across the vendor's software security product portfolio.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-careers/checkmarx-appoints-kobi-sivilya-chief-information-security-officer",
    "publishedAt": "2026-11-10T20:35:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "checkmarx-names-kobi-sivilya-as-chief-information",
      "article-05842302",
      "05842302",
      "checkmarx-names-kobi-sivilya-as-chief-information-400d05",
      "checkmarx-names-kobi-sivilya-as-chief-information-security-o"
    ]
  },
  {
    "slug": "red-hat-releases-low-impact-dhcp-security-update-70f3c8f2",
    "title": "Red Hat Releases Low‑Impact DHCP Security Update",
    "summary": "Red Hat Enterprise Linux 9 receives a DHCP security update addressing multiple bugs and enhancements. The advisory rates the update as Low impact, with CVSS scores linked to individual CVE references for detailed severity. Administrators should apply the latest dhcp package via yum or dnf to ensure patched configurations and mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97486",
    "publishedAt": "2026-11-10T20:32:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-low-impact-dhcp-security-update",
      "article-70f3c8f2",
      "70f3c8f2",
      "red-hat-releases-low-impact-dhcp-security-update-37d75c"
    ]
  },
  {
    "slug": "rhsa-2026-97215-important-grafana-security-bug-fix-5776f9f3",
    "title": "RHSA-2026:97215: Important: grafana security, bug fix, and enhancement update",
    "summary": "An update for grafana is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97215",
    "publishedAt": "2026-11-10T20:31:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97215-important-grafana-security-bug-fix",
      "article-5776f9f3",
      "5776f9f3",
      "rhsa-2026-97215-important-grafana-security-bug-fix-37d765",
      "rhsa-2026-97215-important-grafana-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "rhsa-2026-97191-important-delve-security-bug-fix-a-eb702761",
    "title": "RHSA-2026:97191: Important: delve security, bug fix, and enhancement update",
    "summary": "An update for delve is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97191",
    "publishedAt": "2026-11-10T20:28:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97191-important-delve-security-bug-fix-a",
      "article-eb702761",
      "eb702761",
      "rhsa-2026-97191-important-delve-security-bug-fix-a-37d767",
      "rhsa-2026-97191-important-delve-security-bug-fix-and-enhance"
    ]
  },
  {
    "slug": "rhsa-2026-97562-important-skopeo-security-bug-fix-2ec7c86e",
    "title": "RHSA-2026:97562: Important: skopeo security, bug fix, and enhancement update",
    "summary": "An update for skopeo is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97562",
    "publishedAt": "2026-11-10T20:26:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97562-important-skopeo-security-bug-fix",
      "article-2ec7c86e",
      "2ec7c86e",
      "rhsa-2026-97562-important-skopeo-security-bug-fix-37d759",
      "rhsa-2026-97562-important-skopeo-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "rhsa-2026-97538-important-cockpit-files-security-u-d3da32b5",
    "title": "RHSA-2026:97538: Important: cockpit-files security update",
    "summary": "An update for cockpit-files is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97538",
    "publishedAt": "2026-11-10T20:24:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97538-important-cockpit-files-security-u",
      "article-d3da32b5",
      "d3da32b5",
      "rhsa-2026-97538-important-cockpit-files-security-u-37d759",
      "rhsa-2026-97538-important-cockpit-files-security-update"
    ]
  },
  {
    "slug": "cloud-range-offers-free-ot-readiness-assessment-28d86c2c",
    "title": "Cloud Range Offers Free OT Readiness Assessment",
    "summary": "Cloud Range released a free 28‑question OT Cyber Readiness Assessment to help organizations identify gaps in operational technology incident response. The assessment evaluates preparedness across detection, containment, and recovery controls, providing a baseline score and improvement roadmap. Organizations should download the tool, complete the questionnaire, and use the resulting report to prioritize remediation.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/ics-ot-security/assess-ot-incident-response-preparedness",
    "publishedAt": "2026-11-10T20:18:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloud-range-offers-free-ot-readiness-assessment",
      "article-28d86c2c",
      "28d86c2c",
      "cloud-range-offers-free-ot-readiness-assessment-665a30"
    ]
  },
  {
    "slug": "red-hat-patches-important-security-flaws-in-rhc-pa-0f4c59af",
    "title": "Red Hat Patches Important Security Flaws in RHC Package",
    "summary": "Red Hat released a security update for the rhc package on Red Hat Enterprise Linux 9. Red Hat Product Security rated the addressed vulnerabilities as having an Important security impact based on CVSS scoring criteria. System administrators running affected Red Hat Enterprise Linux installations should apply the newly available rhc package update to mitigate risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97699",
    "publishedAt": "2026-11-10T20:14:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-patches-important-security-flaws-in-rhc-pa",
      "article-0f4c59af",
      "0f4c59af",
      "red-hat-patches-important-security-flaws-in-rhc-pa-37d755",
      "red-hat-patches-important-security-flaws-in-rhc-package"
    ]
  },
  {
    "slug": "rhsa-2026-97585-moderate-bind9-18-security-bug-fix-be4f38bc",
    "title": "RHSA-2026:97585: Moderate: bind9.18 security, bug fix, and enhancement update",
    "summary": "An update for bind9.18 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97585",
    "publishedAt": "2026-11-10T20:11:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97585-moderate-bind9-18-security-bug-fix",
      "article-be4f38bc",
      "be4f38bc",
      "rhsa-2026-97585-moderate-bind9-18-security-bug-fix-37d758",
      "rhsa-2026-97585-moderate-bind9-18-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "cve-2026-124848-kiro-cli-default-permissions-expos-dd708a3c",
    "title": "CVE-2026-124848: Kiro CLI Default Permissions Expose Sessions",
    "summary": "CVE-2026-124848 reveals that Kiro CLI versions before 2.27.0 create session transcript files with world‑readable permissions on macOS and Linux. The flaw allows any local user to read credentials, source code, and other sensitive data stored in the prompt history, potentially enabling credential theft. Users should upgrade to Kiro CLI 2.27.0 or later, or manually change file permissions to restrict access.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-178-aws/",
    "publishedAt": "2026-11-10T20:05:36.000Z",
    "cves": [
      "CVE-2026-124848"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-124848-kiro-cli-default-permissions-expos",
      "article-dd708a3c",
      "dd708a3c",
      "cve-2026-124848-kiro-cli-default-permissions-expos-3e1d2a",
      "cve-2026-124848-kiro-cli-default-permissions-expose-sessions"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-update-for-enterprise-linu-499e671e",
    "title": "Red Hat Releases Kernel Update for Enterprise Linux 9",
    "summary": "Red Hat released a kernel update for Enterprise Linux 9 addressing multiple security issues. Product Security rated the update as Important, and CVSS base scores are provided for each CVE linked in the references. Security teams should apply the patch promptly to mitigate the identified kernel vulnerabilities, maintain system integrity, and ensure compliance with security policies.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97435",
    "publishedAt": "2026-11-10T20:05:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-update-for-enterprise-linu",
      "article-499e671e",
      "499e671e",
      "red-hat-releases-kernel-update-for-enterprise-linu-37d75d",
      "red-hat-releases-kernel-update-for-enterprise-linux-9"
    ]
  },
  {
    "slug": "microsoft-issues-windows-10-kb5131096-security-upd-633a9a94",
    "title": "Microsoft Issues Windows 10 KB5131096 Security Update",
    "summary": "Microsoft released Windows 10 KB5131096 extended security update addressing multiple vulnerabilities in the operating system. The update incorporates November 2026 Patch Tuesday fixes and bug corrections, mitigating potential exploitation paths by tightening system integrity checks. Users should install the KB5131096 package via Windows Update or manual download to ensure protection against the addressed flaws.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-releases-windows-10-kb5131096-extended-security-update/",
    "publishedAt": "2026-11-10T20:04:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-issues-windows-10-kb5131096-security-upd",
      "article-633a9a94",
      "633a9a94",
      "microsoft-issues-windows-10-kb5131096-security-upd-61db97",
      "microsoft-issues-windows-10-kb5131096-security-update"
    ]
  },
  {
    "slug": "chrome-stable-158-released-for-ios-084ea697",
    "title": "Chrome Stable 158 Released for iOS",
    "summary": "Google released Chrome Stable 158 (158.0.8127.32) for iOS, adding stability and performance improvements. The update does not introduce new security features but addresses minor bugs identified in the previous release. Users can download the update from the App Store within hours of release to maintain current browser functionality and security patches.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-stable-for-ios-update_01666689214.html",
    "publishedAt": "2026-11-10T19:58:32.576Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-stable-158-released-for-ios",
      "article-084ea697",
      "084ea697",
      "chrome-stable-158-released-for-ios-53b171"
    ]
  },
  {
    "slug": "rhsa-2026-97242-moderate-bind-security-bug-fix-and-3977eb8f",
    "title": "RHSA-2026:97242: Moderate: bind security, bug fix, and enhancement update",
    "summary": "An update for bind is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97242",
    "publishedAt": "2026-11-10T19:53:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97242-moderate-bind-security-bug-fix-and",
      "article-3977eb8f",
      "3977eb8f",
      "rhsa-2026-97242-moderate-bind-security-bug-fix-and-37d764",
      "rhsa-2026-97242-moderate-bind-security-bug-fix-and-enhanceme"
    ]
  },
  {
    "slug": "usn-9037-1-hplip-vulnerabilities-41bb06eb",
    "title": "USN-9037-1: HPLIP vulnerabilities",
    "summary": "An attacker could possibly use this issue to cause a denial of service, expose sensitive information or execute arbitrary code. (CVE-2026-91097) It was discovered that HPLIP did not properly handle certain input, which could result in a heap-based buffer overflow. This issue only affected Ubuntu 16.04 LTS and Ubuntu 18.04 LTS. (CVE-2026-91100) It was discovered that HPLIP did not properly validate certain array indices.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9037-1",
    "publishedAt": "2026-11-10T19:50:31.000Z",
    "cves": [
      "CVE-2026-91097",
      "CVE-2026-91100"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9037-1-hplip-vulnerabilities",
      "article-41bb06eb",
      "41bb06eb",
      "usn-9037-1-hplip-vulnerabilities-7e8844"
    ]
  },
  {
    "slug": "rhsa-2026-97539-important-cockpit-machines-securit-71aae787",
    "title": "RHSA-2026:97539: Important: cockpit-machines security update",
    "summary": "An update for cockpit-machines is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97539",
    "publishedAt": "2026-11-10T19:38:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97539-important-cockpit-machines-securit",
      "article-71aae787",
      "71aae787",
      "rhsa-2026-97539-important-cockpit-machines-securit-37d759",
      "rhsa-2026-97539-important-cockpit-machines-security-update"
    ]
  },
  {
    "slug": "hackers-exploit-trusted-aws-access-to-breach-multi-e6dd6ee2",
    "title": "Hackers exploit trusted AWS access to breach multiple cloud environments",
    "summary": "A threat actor used compromised identity and access management (IAM) credentials for a Qubole big data platform's AWS account to access and exfiltrate data from multiple customers' AWS environments.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-exploit-trusted-aws-access-to-breach-multiple-cloud-environments/",
    "publishedAt": "2026-11-10T19:31:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-trusted-aws-access-to-breach-multi",
      "article-e6dd6ee2",
      "e6dd6ee2",
      "hackers-exploit-trusted-aws-access-to-breach-multi-5a38b4",
      "hackers-exploit-trusted-aws-access-to-breach-multiple-cloud-"
    ]
  },
  {
    "slug": "git-patches-flaw-that-lets-malicious-repositories-6737e8b6",
    "title": "Git Patches Flaw That Lets Malicious Repositories Execute Code During Recursive Clones",
    "summary": "A flaw in Git can let a malicious repository run an attacker's code on a computer that clones it recursively, together with its submodules. The flaw, tracked as CVE-2026-111760, is an integer truncation in how Git handles its index.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/git-patches-flaw-that-lets-malicious.html",
    "publishedAt": "2026-11-10T19:23:10.000Z",
    "cves": [
      "CVE-2026-111760"
    ],
    "additionalSources": [],
    "aliases": [
      "git-patches-flaw-that-lets-malicious-repositories",
      "article-6737e8b6",
      "6737e8b6",
      "git-patches-flaw-that-lets-malicious-repositories-463519",
      "git-patches-flaw-that-lets-malicious-repositories-execute-co"
    ]
  },
  {
    "slug": "rhsa-2026-97163-moderate-mingw-glib2-security-bug-5bb12a17",
    "title": "RHSA-2026:97163: Moderate: mingw-glib2 security, bug fix, and enhancement update",
    "summary": "An update for mingw-glib2 is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97163",
    "publishedAt": "2026-11-10T19:22:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97163-moderate-mingw-glib2-security-bug",
      "article-5bb12a17",
      "5bb12a17",
      "rhsa-2026-97163-moderate-mingw-glib2-security-bug-37d768",
      "rhsa-2026-97163-moderate-mingw-glib2-security-bug-fix-and-en"
    ]
  },
  {
    "slug": "microsoft-aware-of-exploited-outlook-zero-day-cve-a19a1a02",
    "title": "Microsoft Aware of Exploited Outlook Zero-Day CVE-2026-124194",
    "summary": "Microsoft reports active exploitation of Outlook zero‑day CVE‑2026‑124194, found among 1,094 vulnerabilities patched in its November 2026 update. The flaw allows unauthenticated remote code execution via malformed email attachments, scoring CVSS 10.0 and enabling arbitrary code on affected systems. Microsoft released a patch in the November 2026 Rollup; administrators should apply it immediately and monitor mail traffic for anomalous attachments.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/exploited-outlook-zero-day-among-1094-flaws-patched-by-microsoft/",
    "publishedAt": "2026-11-10T19:19:46.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-aware-of-exploited-outlook-zero-day-cve",
      "article-a19a1a02",
      "a19a1a02",
      "microsoft-aware-of-exploited-outlook-zero-day-cve-6d45f8",
      "microsoft-aware-of-exploited-outlook-zero-day-cve-2026-12419"
    ]
  },
  {
    "slug": "sglang-rce-breaches-near-ai-steals-data-3d91e339",
    "title": "SGLang RCE Breaches NEAR AI, Steals Data",
    "summary": "An attacker exploited a remote code execution flaw in SGLang, running arbitrary code on a NEAR AI inference server. The breach exposed data from 18 agents and about 100 users, including confidential requests processed in a trusted execution environment. NEAR AI applied a patch to SGLang and recommends updating to the latest version while monitoring logs for anomalous activity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/sglang-rce-exploit-breaches-near-ai.html",
    "publishedAt": "2026-11-10T19:19:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sglang-rce-breaches-near-ai-steals-data",
      "article-3d91e339",
      "3d91e339",
      "sglang-rce-breaches-near-ai-steals-data-5165c4"
    ]
  },
  {
    "slug": "rhsa-2026-97213-important-grafana-pcp-security-bug-a9e4f067",
    "title": "RHSA-2026:97213: Important: grafana-pcp security, bug fix, and enhancement update",
    "summary": "An update for grafana-pcp is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97213",
    "publishedAt": "2026-11-10T19:10:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97213-important-grafana-pcp-security-bug",
      "article-a9e4f067",
      "a9e4f067",
      "rhsa-2026-97213-important-grafana-pcp-security-bug-37d765",
      "rhsa-2026-97213-important-grafana-pcp-security-bug-fix-and-e"
    ]
  },
  {
    "slug": "microsoft-patch-tuesday-november-2027-tue-nov-10th-1bbc566e",
    "title": "Microsoft Patch Tuesday November 2027 , (Tue, Nov 10th)",
    "summary": "Microsoft continues its AI-induced patch surge, addressing 1,260 different vulnerabilities this month. 167 of the vulnerabilities are Chromium issues affecting Microsoft Edge. One of the patched flaws, Outlook spoofing vulnerability CVE-2026-124194, is already under active exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33508",
    "publishedAt": "2026-11-10T19:09:32.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-patch-tuesday-november-2027-tue-nov-10th",
      "article-1bbc566e",
      "1bbc566e",
      "microsoft-patch-tuesday-november-2027-tue-nov-10th-57dd81"
    ]
  },
  {
    "slug": "microsoft-patch-tuesday-fixes-1-235-flaws-outlook-1bd8ea52",
    "title": "Microsoft Patch Tuesday Fixes 1,235 Flaws, Outlook Zero-Day",
    "summary": "Microsoft released its November 2026 Patch Tuesday updates addressing 1,235 vulnerabilities, including the actively exploited Outlook zero-day CVE-2026-124194. The Outlook spoofing vulnerability is under active exploitation in the wild; administrators should apply the November 2026 cumulative security updates immediately and verify that Outlook clients are patched.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-november-2026-patch-tuesday-fixes-1-235-flaws-outlook-zero-day/",
    "publishedAt": "2026-11-10T19:07:36.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-patch-tuesday-fixes-1-235-flaws-outlook",
      "article-1bd8ea52",
      "1bd8ea52",
      "microsoft-patch-tuesday-fixes-1-235-flaws-outlook-627c82",
      "microsoft-patch-tuesday-fixes-1-235-flaws-outlook-zero-day"
    ]
  },
  {
    "slug": "november-2026-security-update-review-ef678e34",
    "title": "November 2026 Security Update Review",
    "summary": "The November 2026 Security Update Review covers patch releases from Microsoft and Adobe, detailing record‑breaking vulnerability counts across products. Microsoft fixed 1,235 flaws, including an actively exploited Outlook zero‑day, while Adobe issued nine bulletins for 110 unique CVEs in its creative suite. Teams should apply the November 2026 Rollup, review Adobe bulletin IDs, and monitor for unpatched vulnerabilities.",
    "category": "General",
    "severity": "CRITICAL",
    "source": "Zero Day Initiative",
    "sourceUrl": "https://www.thezdi.com/blog/2026/11/10/the-november-2026-security-update-review",
    "publishedAt": "2026-11-10T19:02:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "november-2026-security-update-review",
      "article-ef678e34",
      "ef678e34",
      "november-2026-security-update-review-219998"
    ]
  },
  {
    "slug": "microsoft-patch-tuesday-fixes-1-093-vulnerabilitie-1982f712",
    "title": "Microsoft Patch Tuesday Fixes 1,093 Vulnerabilities, Outlook Zero-Day",
    "summary": "Microsoft released its November 2026 Patch Tuesday updates, fixing 1,093 vulnerabilities across Windows, Office, SQL Server, SharePoint, Exchange Server, Azure services, and developer tools. The update includes CVE-2026-124194, an actively exploited Outlook zero-day that leaks users’ NTLMv2 authentication hashes to attackers. Security teams must apply the patch immediately to eliminate the credential theft vector and protect enterprise authentication infrastructure.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsoft-november-2026-patch-tuesday/",
    "publishedAt": "2026-11-10T19:01:53.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-patch-tuesday-fixes-1-093-vulnerabilitie",
      "article-1982f712",
      "1982f712",
      "microsoft-patch-tuesday-fixes-1-093-vulnerabilitie-63091b",
      "microsoft-patch-tuesday-fixes-1-093-vulnerabilities-outlook-"
    ]
  },
  {
    "slug": "rhsa-2026-97560-important-runc-security-update-203d049a",
    "title": "RHSA-2026:97560: Important: runc security update",
    "summary": "An update for runc is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97560",
    "publishedAt": "2026-11-10T19:00:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97560-important-runc-security-update",
      "article-203d049a",
      "203d049a",
      "rhsa-2026-97560-important-runc-security-update-37d759"
    ]
  },
  {
    "slug": "rhsa-2026-97387-important-go-fdo-server-security-u-83121c52",
    "title": "RHSA-2026:97387: Important: go-fdo-server security update",
    "summary": "An update for go-fdo-server is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97387",
    "publishedAt": "2026-11-10T18:53:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97387-important-go-fdo-server-security-u",
      "article-83121c52",
      "83121c52",
      "rhsa-2026-97387-important-go-fdo-server-security-u-37d760",
      "rhsa-2026-97387-important-go-fdo-server-security-update"
    ]
  },
  {
    "slug": "cve-2026-126087-untrusted-search-path-in-openjd-se-502636a4",
    "title": "CVE-2026-126087 - Untrusted search path in OpenJD Sessions for Python and the AWS Deadline Cloud worker agent",
    "summary": "Bulletin ID: 2026-177-AWS Publication Date: 11/10/2026 10:45 AM PST Description: Untrusted search path in the cross-user process launcher in Open Job Description (OpenJD) Sessions for Python before 0.11.0, as used in the AWS Deadline Cloud worker agent before 0.33.0, on Linux might allow an authenticated remote user with permission to submit jobs to a queue to execute arbitrary code as the worker agent OS user and obtain the AWS credentials held by the worker agent via a crafted job that modifies the PATH environment variable.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-177-aws/",
    "publishedAt": "2026-11-10T18:53:11.000Z",
    "cves": [
      "CVE-2026-126087"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-126087-untrusted-search-path-in-openjd-se",
      "article-502636a4",
      "502636a4",
      "cve-2026-126087-untrusted-search-path-in-openjd-se-3fd202",
      "cve-2026-126087-untrusted-search-path-in-openjd-sessions-for"
    ]
  },
  {
    "slug": "ai-coding-agents-leak-thousands-of-secrets-to-gith-98f23060",
    "title": "AI Coding Agents Leak Thousands of Secrets to GitHub",
    "summary": "A command in Claude Code inadvertently saves files containing credentials and sensitive data to public Git repositories, creating security exposure for organizations. The leaked secrets include API keys, tokens, and authentication credentials that were committed to public repositories without authorization. Organizations must audit their AI coding agent configurations and implement pre-commit hooks to prevent credential leakage.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/ai-coding-agents-leak-secrets-github",
    "publishedAt": "2026-11-10T18:46:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-coding-agents-leak-thousands-of-secrets-to-gith",
      "article-98f23060",
      "98f23060",
      "ai-coding-agents-leak-thousands-of-secrets-to-gith-6c2ddc",
      "ai-coding-agents-leak-thousands-of-secrets-to-github"
    ]
  },
  {
    "slug": "gstreamer-good-plugins-vulnerabilities-allow-remot-7309a69b",
    "title": "GStreamer Good Plugins Vulnerabilities Allow Remote Code Execution",
    "summary": "Ubuntu 16.04, 18.04, and 20.04 are affected by GStreamer Good Plugins flaws (CVE-2026-3083, CVE-2026-3085, CVE-2026-39043) that mishandle network streams, Matroska, and WAV files. The vulnerabilities enable remote attackers to trigger crashes or potentially execute arbitrary code, posing a significant risk to affected systems. Apply Ubuntu security updates or upgrade GStreamer to a patched version to mitigate exploitation risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9038-1",
    "publishedAt": "2026-11-10T18:38:56.000Z",
    "cves": [
      "CVE-2026-3083",
      "CVE-2026-3085",
      "CVE-2026-39043"
    ],
    "additionalSources": [],
    "aliases": [
      "gstreamer-good-plugins-vulnerabilities-allow-remot",
      "article-7309a69b",
      "7309a69b",
      "gstreamer-good-plugins-vulnerabilities-allow-remot-7e8840",
      "gstreamer-good-plugins-vulnerabilities-allow-remote-code-exe"
    ]
  },
  {
    "slug": "microsoft-releases-windows-11-cumulative-updates-k-e0252079",
    "title": "Microsoft Releases Windows 11 Cumulative Updates KB5132061, KB5131087",
    "summary": "Microsoft released cumulative updates KB5132061 and KB5131087 for Windows 11 versions 26H2/25H2/24H2 and 23H2. The updates address multiple security vulnerabilities and bugs, though specific CVE identifiers are not disclosed in the release notes. Users should install the patches via Windows Update or manually to maintain system security and feature parity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/windows-11-kb5132061-and-kb5131087-cumulative-updates-released/",
    "publishedAt": "2026-11-10T18:33:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-releases-windows-11-cumulative-updates-k",
      "article-e0252079",
      "e0252079",
      "microsoft-releases-windows-11-cumulative-updates-k-636e3e",
      "microsoft-releases-windows-11-cumulative-updates-kb5132061-k"
    ]
  },
  {
    "slug": "grafana-update-addresses-security-issues-on-rhel9-f60a5ecc",
    "title": "Grafana Update Addresses Security Issues on RHEL9",
    "summary": "Red Hat released a Grafana update for RHEL 9, addressing multiple security vulnerabilities. The advisory rates the update as Important, with CVSS base scores linked to CVE references, indicating medium‑to‑high severity flaws that could allow unauthorized data access. Administrators should apply the update promptly to mitigate potential exploitation and maintain system integrity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97555",
    "publishedAt": "2026-11-10T18:20:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "grafana-update-addresses-security-issues-on-rhel9",
      "article-f60a5ecc",
      "f60a5ecc",
      "grafana-update-addresses-security-issues-on-rhel9-37d759"
    ]
  },
  {
    "slug": "edk2-update-for-rhel10-addresses-low-severity-issu-c503678a",
    "title": "edk2 Update for RHEL10 Addresses Low‑Severity Issues",
    "summary": "Red Hat released an edk2 update for RHEL 10, targeting low‑severity security bugs that could affect firmware initialization. The advisory lists CVSS base scores linked to CVE references, indicating minimal exploitation risk. Users should apply the update to maintain firmware stability, though no immediate threat is reported, and monitor for any related advisories.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97212",
    "publishedAt": "2026-11-10T18:17:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "edk2-update-for-rhel10-addresses-low-severity-issu",
      "article-c503678a",
      "c503678a",
      "edk2-update-for-rhel10-addresses-low-severity-issu-37d765",
      "edk2-update-for-rhel10-addresses-low-severity-issues"
    ]
  },
  {
    "slug": "fireworks-ai-cloud-breach-exposes-api-keys-291af339",
    "title": "Fireworks AI Cloud Breach Exposes API Keys",
    "summary": "Fireworks AI suffered a cloud breach that exposed API keys, potentially allowing attackers to access proprietary AI models and data. The compromise resulted from misconfigured access controls on the cloud storage bucket, enabling unauthenticated retrieval of sensitive credentials. Fireworks AI has issued a patch and revoked exposed keys; security teams should rotate credentials and audit cloud permissions immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/fireworks-ai-discloses-new-breach-after-cloud-provider",
    "publishedAt": "2026-11-10T18:16:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fireworks-ai-cloud-breach-exposes-api-keys",
      "article-291af339",
      "291af339",
      "fireworks-ai-cloud-breach-exposes-api-keys-256025"
    ]
  },
  {
    "slug": "turla-cereal-targets-government-exchange-servers-84a454ad",
    "title": "Turla Cereal Targets Government Exchange Servers",
    "summary": "Turla Cereal, a state-sponsored espionage group, has been observed infiltrating government Microsoft Exchange servers. The campaign leverages custom malware to exfiltrate sensitive data, with telemetry indicating persistent footholds. Security teams should deploy the latest Exchange patches, enable advanced threat protection, monitor for anomalous outbound traffic, and conduct thorough forensic analysis of compromised hosts.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/turla-hackers-use-new-cereal-malware-to-spy-on-govt-exc",
    "publishedAt": "2026-11-10T18:15:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "turla-cereal-targets-government-exchange-servers",
      "article-84a454ad",
      "84a454ad",
      "turla-cereal-targets-government-exchange-servers-446061"
    ]
  },
  {
    "slug": "byod-ransomware-allegedly-claims-toyota-data-breac-75240c97",
    "title": "BYOD Ransomware Allegedly Claims Toyota Data Breach",
    "summary": "The BYOD ransomware group claims it obtained personal information and kiosk device access from Toyota, though the claim remains unverified. No evidence confirms Toyota systems were breached or files were encrypted. Security teams should monitor threat actor claims and validate any reported data exposure through independent forensic analysis.",
    "category": "Breach",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/toyota-data-breach-claim/",
    "publishedAt": "2026-11-10T18:14:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "byod-ransomware-allegedly-claims-toyota-data-breac",
      "article-75240c97",
      "75240c97",
      "byod-ransomware-allegedly-claims-toyota-data-breac-74c568",
      "byod-ransomware-allegedly-claims-toyota-data-breach"
    ]
  },
  {
    "slug": "xen-orchestra-auth-bypass-exploited-for-admin-acce-4765a021",
    "title": "Xen Orchestra Auth Bypass Exploited for Admin Access",
    "summary": "Hackers exploit a critical authentication bypass in Xen Orchestra to gain administrative privileges. The flaw, tracked as VSA-2026-062, parses authenticationToken=j:%7B%7D into an empty object, enabling unauthorized access and is actively exploited, potentially compromising entire systems. Vates VMS urges immediate patch deployment and temporary disabling of unused REST endpoints to mitigate risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-critical-xen-orchestra.html",
    "publishedAt": "2026-11-10T18:12:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xen-orchestra-auth-bypass-exploited-for-admin-acce",
      "article-4765a021",
      "4765a021",
      "xen-orchestra-auth-bypass-exploited-for-admin-acce-40d9ac",
      "xen-orchestra-auth-bypass-exploited-for-admin-access"
    ]
  },
  {
    "slug": "adobe-fixes-110-vulnerabilities-in-nine-products-ea059d9e",
    "title": "Adobe Fixes 110 Vulnerabilities in Nine Products",
    "summary": "Adobe has patched 110 vulnerabilities across nine products, including AEM, Premiere, Photoshop, After Effects, Connect, Audition, Dimension, Content Credentials SDK, and Media Encoder. The flaws span configuration, input validation, and privilege escalation paths, but no active exploitation reports were disclosed. Adobe recommends applying the latest security updates immediately to mitigate potential risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/adobe-patches-110-vulnerabilities-across-9-products/",
    "publishedAt": "2026-11-10T18:11:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "adobe-fixes-110-vulnerabilities-in-nine-products",
      "article-ea059d9e",
      "ea059d9e",
      "adobe-fixes-110-vulnerabilities-in-nine-products-439ac8"
    ]
  },
  {
    "slug": "rhsa-2026-97438-moderate-sssd-security-bug-fix-and-b47a5b9d",
    "title": "RHSA-2026:97438: Moderate: sssd security, bug fix, and enhancement update",
    "summary": "An update for sssd is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97438",
    "publishedAt": "2026-11-10T18:06:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97438-moderate-sssd-security-bug-fix-and",
      "article-b47a5b9d",
      "b47a5b9d",
      "rhsa-2026-97438-moderate-sssd-security-bug-fix-and-37d75d",
      "rhsa-2026-97438-moderate-sssd-security-bug-fix-and-enhanceme"
    ]
  },
  {
    "slug": "firefox-free-vpn-drops-50gb-launch-cap-until-janua-7bb5b801",
    "title": "Firefox Free VPN Drops 50GB Launch Cap Until January 31",
    "summary": "Mozilla removed the data cap on the built-in Firefox free VPN, extending unlimited desktop and Android usage for users with a Mozilla account. The VPN protects traffic only inside Firefox and does not affect other applications on the device. Users benefit from unrestricted browsing without additional subscription costs beyond the existing Mozilla account requirement.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/firefox-free-vpn-data/",
    "publishedAt": "2026-11-10T18:05:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "firefox-free-vpn-drops-50gb-launch-cap-until-janua",
      "article-7bb5b801",
      "7bb5b801",
      "firefox-free-vpn-drops-50gb-launch-cap-until-janua-2d4be7",
      "firefox-free-vpn-drops-50gb-launch-cap-until-january-31"
    ]
  },
  {
    "slug": "rhsa-2026-97194-important-cockpit-files-security-u-c568e2d1",
    "title": "RHSA-2026:97194: Important: cockpit-files security update",
    "summary": "An update for cockpit-files is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97194",
    "publishedAt": "2026-11-10T18:02:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97194-important-cockpit-files-security-u",
      "article-c568e2d1",
      "c568e2d1",
      "rhsa-2026-97194-important-cockpit-files-security-u-37d767",
      "rhsa-2026-97194-important-cockpit-files-security-update"
    ]
  },
  {
    "slug": "cve-2026-125350-xml-use-after-free-flaw-patched-7d533cf6",
    "title": "CVE‑2026‑125350 XML Use‑After‑Free Flaw Patched",
    "summary": "CVE‑2026‑125350, an XML use‑after‑free flaw, was disclosed and patched, affecting enterprise XML processing components. The flaw permits unauthenticated attackers to trigger memory corruption, potentially leading to remote code execution or denial of service. Security teams should deploy the vendor patch immediately, monitor for exploitation indicators, and validate XML input sanitization to mitigate risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/chrome-update-patches-exploited-xml-zero-day-eighth-thi",
    "publishedAt": "2026-11-10T18:00:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cve-2026-125350-xml-use-after-free-flaw-patched",
      "article-7d533cf6",
      "7d533cf6",
      "cve-2026-125350-xml-use-after-free-flaw-patched-698a41"
    ]
  },
  {
    "slug": "git-addresses-six-security-vulnerabilities-in-upda-a1593972",
    "title": "Git Addresses Six Security Vulnerabilities in Updates",
    "summary": "Git released updates addressing six security vulnerabilities that affected recursive clones, reference handling, merges, binary patches, and imports. The defects involve improper validation of repository metadata and could enable unauthorized code injection or data leakage. Users should install the latest Git version or apply the provided patches to secure their repositories.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "GitHub Security Blog",
    "sourceUrl": "https://github.blog/open-source/git/git-security-vulnerabilities-announced-7/",
    "publishedAt": "2026-11-10T18:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "git-addresses-six-security-vulnerabilities-in-upda",
      "article-a1593972",
      "a1593972",
      "git-addresses-six-security-vulnerabilities-in-upda-48249b",
      "git-addresses-six-security-vulnerabilities-in-updates"
    ]
  },
  {
    "slug": "rhsa-2026-97386-important-go-fdo-client-security-u-585d17b2",
    "title": "RHSA-2026:97386: Important: go-fdo-client security update",
    "summary": "An update for go-fdo-client is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97386",
    "publishedAt": "2026-11-10T17:54:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97386-important-go-fdo-client-security-u",
      "article-585d17b2",
      "585d17b2",
      "rhsa-2026-97386-important-go-fdo-client-security-u-37d760",
      "rhsa-2026-97386-important-go-fdo-client-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-97521-important-microcode-ctl-security-b-18ff9260",
    "title": "RHSA-2026:97521: Important: microcode_ctl security, bug fix, and enhancement update",
    "summary": "An update for microcode_ctl is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97521",
    "publishedAt": "2026-11-10T17:54:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97521-important-microcode-ctl-security-b",
      "article-18ff9260",
      "18ff9260",
      "rhsa-2026-97521-important-microcode-ctl-security-b-37d759",
      "rhsa-2026-97521-important-microcode-ctl-security-bug-fix-and"
    ]
  },
  {
    "slug": "rhsa-2026-97193-important-cockpit-podman-security-edb68059",
    "title": "RHSA-2026:97193: Important: cockpit-podman security update",
    "summary": "An update for cockpit-podman is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97193",
    "publishedAt": "2026-11-10T17:53:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97193-important-cockpit-podman-security",
      "article-edb68059",
      "edb68059",
      "rhsa-2026-97193-important-cockpit-podman-security-37d767",
      "rhsa-2026-97193-important-cockpit-podman-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-97463-moderate-polkit-security-update-3aaf68fe",
    "title": "RHSA-2026:97463: Moderate: polkit security update",
    "summary": "An update for polkit is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97463",
    "publishedAt": "2026-11-10T17:52:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97463-moderate-polkit-security-update",
      "article-3aaf68fe",
      "3aaf68fe",
      "rhsa-2026-97463-moderate-polkit-security-update-37d75c"
    ]
  },
  {
    "slug": "china-nexus-espionage-campaigns-linked-via-sparrow-823b4648",
    "title": "China-Nexus Espionage Campaigns Linked via Sparrow Malware",
    "summary": "Three distinct threat clusters sharing infrastructure and malware code similarities have targeted telecommunications providers, government entities, military organizations, and critical infrastructure across Latin America, Asia, and Europe over the past year. Check Point Research tracks these clusters under names SilentDelivery and related designations.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/three-china-nexus-espionage-campaigns.html",
    "publishedAt": "2026-11-10T17:43:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "china-nexus-espionage-campaigns-linked-via-sparrow",
      "article-823b4648",
      "823b4648",
      "china-nexus-espionage-campaigns-linked-via-sparrow-21b668",
      "china-nexus-espionage-campaigns-linked-via-sparrow-malware"
    ]
  },
  {
    "slug": "hackers-can-exploit-sap-proxygate-and-icm2shell-fl-d2792acf",
    "title": "Hackers Can Exploit SAP PROXYGATE and ICM2SHELL Flaws for Unauthorized Full System Access",
    "summary": "SAP has released fixes for PROXYGATE and ICM2SHELL, critical security flaws that could let attackers take control of SAP systems without signing in. Disclosed during the November 10, 2026, Security Patch Day, the vulnerabilities carry maximum CVSS scores of 10.0 and affect core components used across business applications.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/sap-proxygate-and-icm2shell-flaws/",
    "publishedAt": "2026-11-10T17:32:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-can-exploit-sap-proxygate-and-icm2shell-fl",
      "article-d2792acf",
      "d2792acf",
      "hackers-can-exploit-sap-proxygate-and-icm2shell-fl-6a70af",
      "hackers-can-exploit-sap-proxygate-and-icm2shell-flaws-for-un"
    ]
  },
  {
    "slug": "rhsa-2026-97456-moderate-krb5-security-update-142bdc41",
    "title": "RHSA-2026:97456: Moderate: krb5 security update",
    "summary": "An update for krb5 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97456",
    "publishedAt": "2026-11-10T17:31:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97456-moderate-krb5-security-update",
      "article-142bdc41",
      "142bdc41",
      "rhsa-2026-97456-moderate-krb5-security-update-37d75d"
    ]
  },
  {
    "slug": "railway-exposes-ai-driven-api-key-theft-and-charge-a5e70a7f",
    "title": "Railway Exposes AI‑Driven API Key Theft and Charges",
    "summary": "Railway disclosed that attackers leveraged AI agents, a build system flaw, and cloud misconfigurations to exfiltrate customer API keys. The compromised secrets enabled the adversary to generate approximately $740,000 in unauthorized cloud charges across multiple internal systems. Railway is tightening build pipelines, enforcing stricter access controls, and monitoring for anomalous API usage to prevent future incidents.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/railway-details-data-breach/",
    "publishedAt": "2026-11-10T17:19:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "railway-exposes-ai-driven-api-key-theft-and-charge",
      "article-a5e70a7f",
      "a5e70a7f",
      "railway-exposes-ai-driven-api-key-theft-and-charge-6c98d4",
      "railway-exposes-ai-driven-api-key-theft-and-charges"
    ]
  },
  {
    "slug": "rhsa-2026-97497-moderate-unbound-security-bug-fix-a01b4add",
    "title": "RHSA-2026:97497: Moderate: unbound security, bug fix, and enhancement update",
    "summary": "An update for unbound is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97497",
    "publishedAt": "2026-11-10T17:11:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97497-moderate-unbound-security-bug-fix",
      "article-a01b4add",
      "a01b4add",
      "rhsa-2026-97497-moderate-unbound-security-bug-fix-37d75c",
      "rhsa-2026-97497-moderate-unbound-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "rhsa-2026-97288-important-yggdrasil-security-bug-f-87570b12",
    "title": "RHSA-2026:97288: Important: yggdrasil security, bug fix, and enhancement update",
    "summary": "An update for yggdrasil is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97288",
    "publishedAt": "2026-11-10T17:07:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97288-important-yggdrasil-security-bug-f",
      "article-87570b12",
      "87570b12",
      "rhsa-2026-97288-important-yggdrasil-security-bug-f-37d764",
      "rhsa-2026-97288-important-yggdrasil-security-bug-fix-and-enh"
    ]
  },
  {
    "slug": "rhsa-2026-97328-important-oci-seccomp-bpf-hook-sec-39b793b0",
    "title": "RHSA-2026:97328: Important: oci-seccomp-bpf-hook security, bug fix, and enhancement update",
    "summary": "An update for oci-seccomp-bpf-hook is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97328",
    "publishedAt": "2026-11-10T16:57:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97328-important-oci-seccomp-bpf-hook-sec",
      "article-39b793b0",
      "39b793b0",
      "rhsa-2026-97328-important-oci-seccomp-bpf-hook-sec-37d761",
      "rhsa-2026-97328-important-oci-seccomp-bpf-hook-security-bug-"
    ]
  },
  {
    "slug": "notion-confirms-ai-chat-transcripts-exposed-in-fir-4ab5ac1f",
    "title": "Notion Confirms AI Chat Transcripts Exposed in Fireworks AI Breach, Affecting Customer Workspaces",
    "summary": "Notion has confirmed that a security incident at Fireworks AI exposed Notion AI chat transcripts linked to fewer than 1% of its customer workspaces. Insights, a feature that helps teams understand their AI usage, used the affected conversations.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/notion-confirms-data-breach/",
    "publishedAt": "2026-11-10T16:54:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "notion-confirms-ai-chat-transcripts-exposed-in-fir",
      "article-4ab5ac1f",
      "4ab5ac1f",
      "notion-confirms-ai-chat-transcripts-exposed-in-fir-53a2c6",
      "notion-confirms-ai-chat-transcripts-exposed-in-fireworks-ai-"
    ]
  },
  {
    "slug": "rhsa-2026-97219-moderate-freerdp-security-bug-fix-a7b5af48",
    "title": "RHSA-2026:97219: Moderate: freerdp security, bug fix, and enhancement update",
    "summary": "An update for freerdp is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97219",
    "publishedAt": "2026-11-10T16:54:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97219-moderate-freerdp-security-bug-fix",
      "article-a7b5af48",
      "a7b5af48",
      "rhsa-2026-97219-moderate-freerdp-security-bug-fix-37d765",
      "rhsa-2026-97219-moderate-freerdp-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "rhsa-2026-97553-important-grafana-pcp-security-bug-c05a01d7",
    "title": "RHSA-2026:97553: Important: grafana-pcp security, bug fix, and enhancement update",
    "summary": "An update for grafana-pcp is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97553",
    "publishedAt": "2026-11-10T16:53:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97553-important-grafana-pcp-security-bug",
      "article-c05a01d7",
      "c05a01d7",
      "rhsa-2026-97553-important-grafana-pcp-security-bug-37d759",
      "rhsa-2026-97553-important-grafana-pcp-security-bug-fix-and-e"
    ]
  },
  {
    "slug": "rhsa-2026-97537-important-cockpit-podman-security-a435431d",
    "title": "RHSA-2026:97537: Important: cockpit-podman security update",
    "summary": "An update for cockpit-podman is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97537",
    "publishedAt": "2026-11-10T16:49:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97537-important-cockpit-podman-security",
      "article-a435431d",
      "a435431d",
      "rhsa-2026-97537-important-cockpit-podman-security-37d759",
      "rhsa-2026-97537-important-cockpit-podman-security-update"
    ]
  },
  {
    "slug": "sbom-ai-boms-drive-new-software-transparency-17fcb302",
    "title": "SBOM, AI BOMs Drive New Software Transparency",
    "summary": "Allan Friedman discussed how SBOMs and emerging AI BOMs are reshaping software supply‑chain visibility. He emphasized that knowing component contents is only the first step, and organizations must analyze SBOM data to detect risks. The podcast recommends adopting automated SBOM ingestion tools and integrating AI analysis to prioritize remediation efforts.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/software-transparency-is-changing-allan-friedman-on-sbom-ai-boms-and-what-comes-next/",
    "publishedAt": "2026-11-10T16:45:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sbom-ai-boms-drive-new-software-transparency",
      "article-17fcb302",
      "17fcb302",
      "sbom-ai-boms-drive-new-software-transparency-41f60e"
    ]
  },
  {
    "slug": "ivanti-issues-patches-for-endpoint-manager-csa-vul-f802dfce",
    "title": "Ivanti Issues Patches for Endpoint Manager, CSA Vulnerabilities",
    "summary": "Ivanti released patches for Endpoint Manager, Endpoint Manager Mobile, Sentry, and Cloud Services Application after discovering flaws enabling remote code execution, certificate tampering, data exposure, and service disruption. Two critical vulnerabilities in Endpoint Manager and Cloud Services Application pose the highest risk, requiring code execution privileges. Administrators should apply the updates immediately and verify certificate trust chains to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ivanti-security-flaws/",
    "publishedAt": "2026-11-10T16:43:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ivanti-issues-patches-for-endpoint-manager-csa-vul",
      "article-f802dfce",
      "f802dfce",
      "ivanti-issues-patches-for-endpoint-manager-csa-vul-18631b",
      "ivanti-issues-patches-for-endpoint-manager-csa-vulnerabiliti"
    ]
  },
  {
    "slug": "cve-2026-125271-aws-api-mcp-policy-bypass-7320861d",
    "title": "CVE‑2026‑125271: AWS API MCP Policy Bypass",
    "summary": "CVE‑2026‑125271 exposes a policy bypass in AWS API MCP Server caused by incorrect operation name normalization. The flaw allows actors to execute operations that the operator's security policy denies or requires elicitation for, potentially granting unauthorized API access. AWS has released a patch for affected versions (>=0.2.13); administrators should update immediately and review policy configurations.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-176-aws/",
    "publishedAt": "2026-11-10T16:42:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cve-2026-125271-aws-api-mcp-policy-bypass",
      "article-7320861d",
      "7320861d",
      "cve-2026-125271-aws-api-mcp-policy-bypass-4186db"
    ]
  },
  {
    "slug": "google-expands-gemini-4-carbon-access-09e43079",
    "title": "Google Expands Gemini 4 Carbon Access",
    "summary": "Google broadened access to its Gemini 4 Carbon platform, allowing paying developers and businesses to utilize the service. DeepMind agents built on Carbon verified libsignal security guarantees, demonstrating the platform’s capability to support secure messaging protocols. Developers should register for Carbon access through Google’s developer portal and review the updated documentation for integration guidelines.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/google-widens-gemini-4-carbon-access-after-ai-agents-verify-signal-code/",
    "publishedAt": "2026-11-10T16:42:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-expands-gemini-4-carbon-access",
      "article-09e43079",
      "09e43079",
      "google-expands-gemini-4-carbon-access-322942"
    ]
  },
  {
    "slug": "unbound-vulnerabilities-allow-remote-dos-attacks-ef5422b9",
    "title": "Unbound Vulnerabilities Allow Remote DoS Attacks",
    "summary": "Unbound DNS servers on Ubuntu 20.04–26.04 LTS contain CVE‑2026‑80225 and CVE‑2026‑81634 that enable remote denial‑of‑service. The flaws stem from improper handling of TCP connections and DNSSEC responses, allowing attackers to exhaust resources or crash the resolver. Ubuntu has issued patches for all affected releases; administrators should apply updates or upgrade to mitigate the DoS risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8946-2",
    "publishedAt": "2026-11-10T16:28:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "unbound-vulnerabilities-allow-remote-dos-attacks",
      "article-ef5422b9",
      "ef5422b9",
      "unbound-vulnerabilities-allow-remote-dos-attacks-7fbdd8"
    ]
  },
  {
    "slug": "xen-orchestra-auth-bypass-enables-vm-server-hijack-8e029e9c",
    "title": "Xen Orchestra Auth Bypass Enables VM Server Hijack",
    "summary": "A critical authentication bypass flaw in Xen Orchestra is actively exploited to grant admin privileges and seize XCP‑ng virtualization hosts. The flaw bypasses login checks, giving attackers full control over host management interfaces, and is used in multiple attacks. Xen Orchestra issued an urgent patch; administrators should apply it immediately and audit host authentication logs for anomalies.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/critical-xen-orchestra-auth-bypass-flaw-exploited-to-hijack-vm-servers/",
    "publishedAt": "2026-11-10T16:17:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xen-orchestra-auth-bypass-enables-vm-server-hijack",
      "article-8e029e9c",
      "8e029e9c",
      "xen-orchestra-auth-bypass-enables-vm-server-hijack-7915fe"
    ]
  },
  {
    "slug": "ca-certificates-java-jks-handling-fixed-a9bf56bf",
    "title": "ca-certificates-java JKS Handling Fixed",
    "summary": "Ubuntu Security Notice USN-9036-1 fixes a ca-certificates-java flaw where JKS entries were not removed when system CA certificates were deleted in some locales. The patch re‑synchronizes the JKS keystore with the system CA bundle, eliminating orphaned certificates that could disrupt trust chains. Apply the USN-9036-1 update via apt to ensure the keystore matches the current system certificates.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9036-1",
    "publishedAt": "2026-11-10T16:16:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ca-certificates-java-jks-handling-fixed",
      "article-a9bf56bf",
      "a9bf56bf",
      "ca-certificates-java-jks-handling-fixed-7e8848"
    ]
  },
  {
    "slug": "fireworks-reports-data-theft-during-october-breach-2d599cd7",
    "title": "Fireworks Reports Data Theft During October Breaches",
    "summary": "AI company Fireworks disclosed that hackers stole data and billing information during October incidents affecting a limited number of customer accounts. All affected customers were notified of the attack. The company should conduct forensic investigation to determine scope and implement enhanced access monitoring for sensitive billing records.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/ai-company-fireworks-says-hackers-stole-data-in-oct-attacks",
    "publishedAt": "2026-11-10T16:08:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fireworks-reports-data-theft-during-october-breach",
      "article-2d599cd7",
      "2d599cd7",
      "fireworks-reports-data-theft-during-october-breach-503fac",
      "fireworks-reports-data-theft-during-october-breaches"
    ]
  },
  {
    "slug": "rhsa-2026-97533-important-podman-security-bug-fix-a41b34f6",
    "title": "RHSA-2026:97533: Important: podman security, bug fix, and enhancement update",
    "summary": "An update for podman is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97533",
    "publishedAt": "2026-11-10T16:07:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97533-important-podman-security-bug-fix",
      "article-a41b34f6",
      "a41b34f6",
      "rhsa-2026-97533-important-podman-security-bug-fix-37d759",
      "rhsa-2026-97533-important-podman-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "barracuda-esg-flaws-enable-root-access-exploitatio-bd602d2c",
    "title": "Barracuda ESG Flaws Enable Root Access Exploitation",
    "summary": "Barracuda ESG is actively exploited via CVE‑2026‑116606, letting attackers combine two flaws to gain root access without authentication. The vulnerability permits unauthenticated remote code execution by manipulating internal configuration handling, enabling arbitrary command execution on the gateway. Barracuda has issued a patch; administrators should apply it immediately and enforce strict network segmentation around ESG appliances.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/barracuda-email-gateway-flaws/",
    "publishedAt": "2026-11-10T16:05:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "barracuda-esg-flaws-enable-root-access-exploitatio",
      "article-bd602d2c",
      "bd602d2c",
      "barracuda-esg-flaws-enable-root-access-exploitatio-3a0750",
      "barracuda-esg-flaws-enable-root-access-exploitation"
    ]
  },
  {
    "slug": "benchmarking-offensive-ai-agent-capabilities-6496bb80",
    "title": "Benchmarking Offensive AI Agent Capabilities",
    "summary": "The article presents a framework for assessing AI agents' cybersecurity capabilities, focusing on offensive testing. It outlines the construction of the Wiz Cyber Model Arena, detailing scenario design, adversarial objectives, and performance metrics. The authors recommend iterative validation, data collection, and continuous improvement to ensure robust evaluation for security teams.",
    "category": "General",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/cyber-model-arena-ai-benchmark",
    "publishedAt": "2026-11-10T16:03:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "benchmarking-offensive-ai-agent-capabilities",
      "article-6496bb80",
      "6496bb80",
      "benchmarking-offensive-ai-agent-capabilities-71b358"
    ]
  },
  {
    "slug": "attackers-exploit-ahsaycbs-flaws-to-deploy-sandbox-2710d747",
    "title": "Attackers Exploit AhsayCBS Flaws to Deploy Sandbox-Evading Python Backdoor",
    "summary": "Cybersecurity researchers have disclosed details of an attack that exploited two now-patched vulnerabilities in AhsayCBS to deliver a Python-based implant. The activity, observed by Huntress in October 2026, involves the exploitation of a chain comprising CVE-2026-105133 and CVE-2026-105134 to bypass authentication and execute arbitrary commands on affected systems.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/attackers-exploit-ahsaycbs-flaws-to.html",
    "publishedAt": "2026-11-10T16:00:55.000Z",
    "cves": [
      "CVE-2026-105133",
      "CVE-2026-105134"
    ],
    "additionalSources": [],
    "aliases": [
      "attackers-exploit-ahsaycbs-flaws-to-deploy-sandbox",
      "article-2710d747",
      "2710d747",
      "attackers-exploit-ahsaycbs-flaws-to-deploy-sandbox-711522",
      "attackers-exploit-ahsaycbs-flaws-to-deploy-sandbox-evading-p"
    ]
  },
  {
    "slug": "windows-file-server-elevation-vulnerability-cve-20-39028c79",
    "title": "Windows File Server Elevation Vulnerability CVE-2026-108415",
    "summary": "A Windows File Server Resource Management Service vulnerability (CVE-2026-108415) permits privilege escalation via untrusted pointer dereference. The flaw allows an attacker with physical access to dereference an untrusted pointer, enabling elevation of privileges without authentication, potentially compromising system integrity. Microsoft has released a patch; administrators should apply the update immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108415",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-108415"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-file-server-elevation-vulnerability-cve-20",
      "article-39028c79",
      "39028c79",
      "windows-file-server-elevation-vulnerability-cve-20-1ff730",
      "windows-file-server-elevation-vulnerability-cve-2026-108415"
    ]
  },
  {
    "slug": "windows-file-server-elevation-vulnerability-cve-20-360287c0",
    "title": "Windows File Server Elevation Vulnerability CVE-2026-108416",
    "summary": "A Windows File Server Resource Management Service vulnerability (CVE-2026-108416) permits privilege escalation via untrusted pointer dereference. The flaw allows an attacker with physical access to dereference an untrusted pointer, enabling elevation of privileges without authentication, potentially compromising system integrity. Microsoft has released a patch; administrators should apply the update immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108416",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-108416"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-file-server-elevation-vulnerability-cve-20",
      "article-360287c0",
      "360287c0",
      "windows-file-server-elevation-vulnerability-cve-20-1ff730",
      "windows-file-server-elevation-vulnerability-cve-2026-108416"
    ]
  },
  {
    "slug": "windows-gdi-vulnerability-exposes-data-via-out-of-05454bae",
    "title": "Windows GDI Vulnerability Exposes Data via Out‑of‑Bounds Read",
    "summary": "CVE‑2026‑108424 is an out‑of‑bounds read flaw in Windows GDI that permits remote attackers to read sensitive data over a network. The vulnerability arises from improper bounds checking during GDI object rendering, enabling an attacker to extract memory contents without authentication. Microsoft has released a patch in the 2026 security update; administrators should apply it promptly to mitigate the disclosure risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108424",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-gdi-vulnerability-exposes-data-via-out-of",
      "article-05454bae",
      "05454bae",
      "windows-gdi-vulnerability-exposes-data-via-out-of-1ff72f",
      "windows-gdi-vulnerability-exposes-data-via-out-of-bounds-rea"
    ]
  },
  {
    "slug": "local-information-disclosure-flaw-discovered-in-wi-af58654c",
    "title": "Local Information Disclosure Flaw Discovered in Windows Overlay Filter",
    "summary": "A local information disclosure vulnerability affects the Microsoft Windows Overlay Filter driver. Designated as CVE-2026-108409, the exposure of sensitive system information to an unauthorized control sphere enables local authenticated attackers to leak confidential data. Security administrators should apply Microsoft's security updates to prevent unauthorized local information exposure across enterprise systems.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108409",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-108409"
    ],
    "additionalSources": [],
    "aliases": [
      "local-information-disclosure-flaw-discovered-in-wi",
      "article-af58654c",
      "af58654c",
      "local-information-disclosure-flaw-discovered-in-wi-1ff730",
      "local-information-disclosure-flaw-discovered-in-windows-over"
    ]
  },
  {
    "slug": "network-information-disclosure-bug-impacts-windows-43391aec",
    "title": "Network Information Disclosure Bug Impacts Windows Remote Desktop Client",
    "summary": "A network-based information disclosure vulnerability impacts the Microsoft Windows Remote Desktop Client software. Identified as CVE-2026-108417, an out-of-bounds read flaw allows unauthorized remote attackers to expose sensitive system data across the network connection. Organizations must deploy the latest Microsoft software patches to protect Remote Desktop endpoints against unauthorized information leakage.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108417",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-108417"
    ],
    "additionalSources": [],
    "aliases": [
      "network-information-disclosure-bug-impacts-windows",
      "article-43391aec",
      "43391aec",
      "network-information-disclosure-bug-impacts-windows-1ff730",
      "network-information-disclosure-bug-impacts-windows-remote-de"
    ]
  },
  {
    "slug": "windows-ad-cs-bypass-exploits-certificate-validati-12d1c61c",
    "title": "Windows AD CS Bypass Exploits Certificate Validation Flaw",
    "summary": "CVE-2026-105590 lets an authorized attacker bypass a security feature in Windows Active Directory Certificate Services through improper certificate validation over a network. The flaw permits issuance or modification of certificates without proper validation, enabling man‑in‑the‑middle attacks or unauthorized domain access. Microsoft issued a patch for Windows 10, 11, and Server 2022; administrators should apply it and review certificate issuance policies.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105590",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-105590"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-ad-cs-bypass-exploits-certificate-validati",
      "article-12d1c61c",
      "12d1c61c",
      "windows-ad-cs-bypass-exploits-certificate-validati-1ff888",
      "windows-ad-cs-bypass-exploits-certificate-validation-flaw"
    ]
  },
  {
    "slug": "windows-dhcp-server-local-privilege-escalation-8ffa94ab",
    "title": "Windows DHCP Server Local Privilege Escalation",
    "summary": "Microsoft disclosed CVE‑2026‑105588, a missing authentication flaw in Windows DHCP Server that permits an authorized attacker to elevate privileges locally. The vulnerability arises from an unprotected critical function that bypasses authentication checks, enabling local privilege escalation without requiring additional credentials. Microsoft recommends applying the available patch via Windows Update or the Security Update Guide to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105588",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-dhcp-server-local-privilege-escalation",
      "article-8ffa94ab",
      "8ffa94ab",
      "windows-dhcp-server-local-privilege-escalation-1ff888"
    ]
  },
  {
    "slug": "windows-wireless-networking-local-privilege-escala-53663862",
    "title": "Windows Wireless Networking Local Privilege Escalation Vulnerability",
    "summary": "Microsoft disclosed CVE‑2026‑105589, a use‑after‑free flaw in Windows Wireless Networking that permits an authorized attacker to elevate privileges locally. The flaw occurs when a freed memory object is accessed again, bypassing authentication checks and enabling local privilege escalation. Microsoft recommends applying the patch available through Windows Update or the Security Update Guide to prevent exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105589",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-wireless-networking-local-privilege-escala",
      "article-53663862",
      "53663862",
      "windows-wireless-networking-local-privilege-escala-1ff888",
      "windows-wireless-networking-local-privilege-escalation-vulne"
    ]
  },
  {
    "slug": "microsoft-windows-scsi-class-elevation-vulnerabili-31d55636",
    "title": "Microsoft Windows SCSI Class Elevation Vulnerability",
    "summary": "A null pointer dereference in Microsoft Windows SCSI Class System File permits an authorized attacker to elevate privileges locally. The flaw originates from improper null checking during SCSI command processing, enabling local privilege escalation without authentication. Microsoft has released a patch in the latest cumulative update; administrators should apply it immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105586",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-windows-scsi-class-elevation-vulnerabili",
      "article-31d55636",
      "31d55636",
      "microsoft-windows-scsi-class-elevation-vulnerabili-1ff888",
      "microsoft-windows-scsi-class-elevation-vulnerability"
    ]
  },
  {
    "slug": "microsoft-windows-ole-db-privilege-escalation-vuln-6a30ab5b",
    "title": "Microsoft Windows OLE DB Privilege Escalation Vulnerability",
    "summary": "A heap-based buffer overflow in Windows OLE DB allows an authorized attacker to elevate privileges locally. The overflow occurs when unvalidated OLE DB parameters are copied into a fixed-size buffer, enabling local privilege escalation. Microsoft has issued a patch in the latest cumulative update; users should install it promptly to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105587",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-windows-ole-db-privilege-escalation-vuln",
      "article-6a30ab5b",
      "6a30ab5b",
      "microsoft-windows-ole-db-privilege-escalation-vuln-1ff888",
      "microsoft-windows-ole-db-privilege-escalation-vulnerability"
    ]
  },
  {
    "slug": "windows-dwm-core-library-allows-local-privilege-es-60a2c159",
    "title": "Windows DWM Core Library allows local privilege escalation",
    "summary": "A flaw in Windows DWM Core Library permits an authorized attacker to elevate privileges locally via an invalid pointer or reference. The vulnerability is triggered by malformed input to the DWM component, potentially enabling privilege escalation without authentication. Microsoft has released a patch for Windows 10 and 11; affected systems should install the update immediately.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105583",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-dwm-core-library-allows-local-privilege-es",
      "article-60a2c159",
      "60a2c159",
      "windows-dwm-core-library-allows-local-privilege-es-1ff888",
      "windows-dwm-core-library-allows-local-privilege-escalation"
    ]
  },
  {
    "slug": "windows-inventory-backup-leaks-local-information-v-a4e42428",
    "title": "Windows Inventory Backup leaks local information via format string",
    "summary": "An externally-controlled format string in Windows Inventory Backup allows an authorized attacker to disclose local information. The flaw arises when user-supplied data is passed to a vulnerable logging function, exposing sensitive data without authentication. Microsoft has issued a patch for Windows 10 and 11; affected systems should apply the update promptly.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105584",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-inventory-backup-leaks-local-information-v",
      "article-a4e42428",
      "a4e42428",
      "windows-inventory-backup-leaks-local-information-v-1ff888",
      "windows-inventory-backup-leaks-local-information-via-format-"
    ]
  },
  {
    "slug": "microsoft-wdac-ole-db-provider-remote-code-executi-7616c0c9",
    "title": "Microsoft WDAC OLE DB Provider Remote Code Execution Vulnerability",
    "summary": "A heap-based buffer overflow in Microsoft WDAC OLE DB provider for SQL permits unauthorized remote code execution. The flaw, identified as CVE-2026-85839, allows attackers to trigger arbitrary code over the network, potentially compromising affected systems. Microsoft has released a patch; administrators should apply the update immediately to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-85839",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-85839"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-wdac-ole-db-provider-remote-code-executi",
      "article-7616c0c9",
      "7616c0c9",
      "microsoft-wdac-ole-db-provider-remote-code-executi-743ff6",
      "microsoft-wdac-ole-db-provider-remote-code-execution-vulnera"
    ]
  },
  {
    "slug": "windows-dwm-core-library-local-privilege-escalatio-b8a3a242",
    "title": "Windows DWM Core Library Local Privilege Escalation Vulnerability",
    "summary": "A flaw in Windows DWM Core Library permits an authorized attacker to elevate privileges locally. The vulnerability, identified as CVE-2026-105582, arises from an invalid pointer or reference, enabling privilege escalation. Microsoft has issued a patch; administrators should apply the update promptly to prevent local privilege escalation on affected systems and verify system integrity.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105582",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-105582"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-dwm-core-library-local-privilege-escalatio",
      "article-b8a3a242",
      "b8a3a242",
      "windows-dwm-core-library-local-privilege-escalatio-1ff888",
      "windows-dwm-core-library-local-privilege-escalation-vulnerab"
    ]
  },
  {
    "slug": "windows-shell-cve-2026-102868-enables-local-info-d-a64b47b5",
    "title": "Windows Shell CVE-2026-102868 Enables Local Info Disclosure",
    "summary": "CVE-2026-102868 exposes sensitive system data in Windows Shell to an authorized attacker via local control sphere. The flaw permits local information disclosure without authentication, enabling attackers to read privileged data; no remote code execution or active exploitation reported. Microsoft has issued a patch in the latest cumulative update; administrators should apply the update promptly to mitigate the disclosure.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-102868",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-102868"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-shell-cve-2026-102868-enables-local-info-d",
      "article-a64b47b5",
      "a64b47b5",
      "windows-shell-cve-2026-102868-enables-local-info-d-1ff9da",
      "windows-shell-cve-2026-102868-enables-local-info-disclosure"
    ]
  },
  {
    "slug": "sql-server-heap-overflow-enables-authorized-remote-abe4be01",
    "title": "SQL Server Heap Overflow Enables Authorized Remote Code Execution",
    "summary": "A heap-based buffer overflow in Microsoft SQL Server permits an authorized attacker to execute code over a network. The flaw, identified as CVE-2026-94511, allows authenticated users to trigger arbitrary code execution, potentially compromising database integrity and confidentiality. Microsoft has released a patch; administrators should apply the update immediately and restrict privileged access to mitigate exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94511",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-94511"
    ],
    "additionalSources": [],
    "aliases": [
      "sql-server-heap-overflow-enables-authorized-remote",
      "article-abe4be01",
      "abe4be01",
      "sql-server-heap-overflow-enables-authorized-remote-74325e",
      "sql-server-heap-overflow-enables-authorized-remote-code-exec"
    ]
  },
  {
    "slug": "microsoft-data-sqlclient-capture-replay-bypass-exp-d59fc8a0",
    "title": "Microsoft.Data.SqlClient Capture-Replay Bypass Exposes Data",
    "summary": "CVE-2026-62903 exposes an authentication bypass in Microsoft.Data.SqlClient that lets an unauthorized attacker capture and replay credentials to read database data over a network. The flaw permits reading sensitive information without valid authentication, risking exposure of confidential records. Microsoft has released a patch; administrators should update the client library and enforce strict credential handling.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-62903",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-62903"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-data-sqlclient-capture-replay-bypass-exp",
      "article-d59fc8a0",
      "d59fc8a0",
      "microsoft-data-sqlclient-capture-replay-bypass-exp-745d7e",
      "microsoft-data-sqlclient-capture-replay-bypass-exposes-data"
    ]
  },
  {
    "slug": "wdac-ole-db-overflow-enables-unauthorized-remote-c-496a69ce",
    "title": "WDAC OLE DB Overflow Enables Unauthorized Remote Code Execution",
    "summary": "A heap-based buffer overflow in Microsoft WDAC OLE DB provider for SQL, CVE-2026-85838, allows an unauthorized attacker to execute code over a network. The flaw permits arbitrary code execution without authentication, potentially compromising database servers and exposing sensitive data. Microsoft has issued a patch; administrators should apply the update promptly and restrict privileged access to mitigate exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-85838",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-85838"
    ],
    "additionalSources": [],
    "aliases": [
      "wdac-ole-db-overflow-enables-unauthorized-remote-c",
      "article-496a69ce",
      "496a69ce",
      "wdac-ole-db-overflow-enables-unauthorized-remote-c-743ff6",
      "wdac-ole-db-overflow-enables-unauthorized-remote-code-execut"
    ]
  },
  {
    "slug": "microsoft-hevc-codec-heap-overflow-enables-local-r-b5a965e5",
    "title": "Microsoft HEVC Codec Heap Overflow Enables Local RCE",
    "summary": "Microsoft disclosed a heap-based buffer overflow in Windows HEVC Video Extensions that permits local code execution. The flaw, CVE-2026-114167, lets an unauthenticated attacker run arbitrary code if the codec is loaded. Microsoft advises applying the latest Windows update that patches the HEVC codec; disabling the codec is a temporary workaround.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114167",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-114167"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-hevc-codec-heap-overflow-enables-local-r",
      "article-b5a965e5",
      "b5a965e5",
      "microsoft-hevc-codec-heap-overflow-enables-local-r-1feaf4",
      "microsoft-hevc-codec-heap-overflow-enables-local-rce"
    ]
  },
  {
    "slug": "windows-raw-image-extension-buffer-overflow-enable-0228cac1",
    "title": "Windows Raw Image Extension Buffer Overflow Enables Remote RCE",
    "summary": "Microsoft identified a heap-based buffer overflow in the Windows Raw Image Extension that allows remote code execution. The vulnerability, CVE-2026-114169, permits an unauthenticated attacker to run arbitrary code on the target system via network traffic. Microsoft recommends installing the latest Windows update that patches the Raw Image Extension; disabling the extension is a temporary mitigation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114169",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-114169"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-raw-image-extension-buffer-overflow-enable",
      "article-0228cac1",
      "0228cac1",
      "windows-raw-image-extension-buffer-overflow-enable-1feaf4",
      "windows-raw-image-extension-buffer-overflow-enables-remote-r"
    ]
  },
  {
    "slug": "windows-kernel-use-after-free-enables-local-privil-113bec46",
    "title": "Windows Kernel Use-After-Free Enables Local Privilege Escalation",
    "summary": "Microsoft disclosed a use-after-free flaw in the Windows Kernel that permits local privilege escalation immediately. The vulnerability, CVE-2026-114170, allows an authorized attacker to gain higher privileges on the affected system. Microsoft recommends applying the latest Windows update that patches the kernel flaw; disabling the affected feature is a temporary workaround.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114170",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-114170"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-kernel-use-after-free-enables-local-privil",
      "article-113bec46",
      "113bec46",
      "windows-kernel-use-after-free-enables-local-privil-1feaf4",
      "windows-kernel-use-after-free-enables-local-privilege-escala"
    ]
  },
  {
    "slug": "xbox-remote-code-execution-via-heap-overflow-21794360",
    "title": "Xbox Remote Code Execution via Heap Overflow",
    "summary": "A heap-based buffer overflow in Microsoft Xbox firmware permits an unauthenticated attacker to execute arbitrary code over a network. The flaw arises from unchecked memory allocation during packet parsing, enabling remote code execution without credentials. Microsoft has released an out‑of‑band patch; users should apply the update immediately to mitigate the vulnerability.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-66801",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xbox-remote-code-execution-via-heap-overflow",
      "article-21794360",
      "21794360",
      "xbox-remote-code-execution-via-heap-overflow-745bb1"
    ]
  },
  {
    "slug": "hevc-codec-integer-underflow-enables-remote-rce-3ad64dbc",
    "title": "HEVC Codec Integer Underflow Enables Remote RCE",
    "summary": "An integer underflow in the Windows HEVC Video Extensions codec library allows an unauthenticated attacker to execute code over a network. The vulnerability occurs when the decoder miscalculates buffer sizes during frame decoding, leading to a remote code execution path. Microsoft has issued a patch; administrators should deploy the update promptly to close the flaw.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114164",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hevc-codec-integer-underflow-enables-remote-rce",
      "article-3ad64dbc",
      "3ad64dbc",
      "hevc-codec-integer-underflow-enables-remote-rce-1feaf4"
    ]
  },
  {
    "slug": "hevc-codec-heap-overflow-allows-local-rce-a3f2d730",
    "title": "HEVC Codec Heap Overflow Allows Local RCE",
    "summary": "A heap-based buffer overflow in the Windows HEVC Video Extensions codec library permits an unauthenticated attacker to execute code locally. The flaw is triggered by malformed video frames that cause the decoder to write beyond allocated memory, enabling local code execution. Microsoft has released a patch; users should apply the update to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114165",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hevc-codec-heap-overflow-allows-local-rce",
      "article-a3f2d730",
      "a3f2d730",
      "hevc-codec-heap-overflow-allows-local-rce-1feaf4"
    ]
  },
  {
    "slug": "microsoft-powerpoint-rce-cve-2026-55123-acknowledg-1e1c334d",
    "title": "Microsoft PowerPoint RCE CVE-2026-55123 Acknowledged",
    "summary": "Microsoft acknowledged a remote code execution flaw in PowerPoint identified as CVE-2026-55123, affecting all supported versions. The vulnerability permits arbitrary code execution via crafted presentation files, but no active exploitation or public PoC has been reported. Microsoft has issued an informational update; users should apply the forthcoming patch when available and monitor advisories for remediation guidance.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-55123",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-55123"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-powerpoint-rce-cve-2026-55123-acknowledg",
      "article-1e1c334d",
      "1e1c334d",
      "microsoft-powerpoint-rce-cve-2026-55123-acknowledg-746a57",
      "microsoft-powerpoint-rce-cve-2026-55123-acknowledged"
    ]
  },
  {
    "slug": "microsoft-refs-rce-vulnerability-cve-2026-102227-624b1899",
    "title": "Microsoft ReFS RCE Vulnerability CVE-2026-102227",
    "summary": "Microsoft disclosed CVE-2026-102227, a remote code execution flaw in Windows ReFS that could allow attackers to run arbitrary code via malformed metadata. The flaw stems from improper validation of ReFS metadata, enabling unauthenticated exploitation with a CVSS score of 9.8. Microsoft issued an out‑of‑band patch; administrators should apply it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-102227",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-102227"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-refs-rce-vulnerability-cve-2026-102227",
      "article-624b1899",
      "624b1899",
      "microsoft-refs-rce-vulnerability-cve-2026-102227-1ff9f1"
    ]
  },
  {
    "slug": "microsoft-office-word-rce-cve-2026-108447-7e433417",
    "title": "Microsoft Office Word RCE CVE-2026-108447",
    "summary": "Microsoft announced CVE-2026-108447, a remote code execution vulnerability in Office Word that could be triggered by a malicious document. The flaw results from unsafe handling of Rich Text Format (RTF) content, allowing unauthenticated code execution with a CVSS score of 9.5. Microsoft released an out‑of‑band patch; users should update Office immediately to prevent exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108447",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-108447"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-office-word-rce-cve-2026-108447",
      "article-7e433417",
      "7e433417",
      "microsoft-office-word-rce-cve-2026-108447-1ff72f"
    ]
  },
  {
    "slug": "windows-kernel-information-disclosure-cve-2026-700-8def015c",
    "title": "Windows Kernel Information Disclosure CVE-2026-70017",
    "summary": "Microsoft disclosed CVE-2026-70017, a kernel‑mode information disclosure flaw in Windows that could expose sensitive data via the Secure Kernel API. The vulnerability arises from improper bounds checking during kernel data retrieval, allowing local attackers to read privileged memory with a CVSS score of 7.2. Microsoft issued a patch; administrators should apply it promptly to mitigate the information disclosure risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70017",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-70017"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-kernel-information-disclosure-cve-2026-700",
      "article-8def015c",
      "8def015c",
      "windows-kernel-information-disclosure-cve-2026-700-745071",
      "windows-kernel-information-disclosure-cve-2026-70017"
    ]
  },
  {
    "slug": "microsoft-acknowledges-windows-kernel-privilege-es-b04c91c2",
    "title": "Microsoft Acknowledges Windows Kernel Privilege Escalation",
    "summary": "Microsoft acknowledges CVE-2026-69898, a critical Windows kernel privilege escalation vulnerability that could allow local users to gain elevated privileges. The update is purely informational, with no evidence of active exploitation, public proof‑of‑concept, or a released patch. No remediation guidance is provided, and security teams should monitor Microsoft advisories for future updates.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-69898",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-69898"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-windows-kernel-privilege-es",
      "article-b04c91c2",
      "b04c91c2",
      "microsoft-acknowledges-windows-kernel-privilege-es-745a53",
      "microsoft-acknowledges-windows-kernel-privilege-escalation"
    ]
  },
  {
    "slug": "azure-devops-server-rce-exploited-via-improper-aut-d5a77fc2",
    "title": "Azure DevOps Server RCE Exploited via Improper Auth",
    "summary": "CVE-2026-109467 is a remote code execution flaw in Azure DevOps Server that lets authenticated attackers run arbitrary code over the network. The issue arises from improper authentication handling in the REST API, allowing credential bypass and code execution with elevated privileges. Microsoft released a patch; administrators should apply it immediately and audit access controls to mitigate risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109467",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-109467"
    ],
    "additionalSources": [],
    "aliases": [
      "azure-devops-server-rce-exploited-via-improper-aut",
      "article-d5a77fc2",
      "d5a77fc2",
      "azure-devops-server-rce-exploited-via-improper-aut-1ff6bb",
      "azure-devops-server-rce-exploited-via-improper-auth"
    ]
  },
  {
    "slug": "heif-image-extensions-vulnerability-enables-local-10305511",
    "title": "HEIF Image Extensions Vulnerability Enables Local RCE",
    "summary": "A use‑after‑free flaw in Microsoft HEIF Image Extensions lets an unauthorized attacker execute code locally on Windows. CVE‑2026‑100204 exploits heap corruption triggered by a crafted HEIF file, enabling local code execution without authentication. Microsoft released a patch in the latest cumulative update; apply it immediately or disable HEIF processing as a temporary fix.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-100204",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "heif-image-extensions-vulnerability-enables-local",
      "article-10305511",
      "10305511",
      "heif-image-extensions-vulnerability-enables-local-1ffada",
      "heif-image-extensions-vulnerability-enables-local-rce"
    ]
  },
  {
    "slug": "windows-kernel-use-after-free-allows-local-privile-597d1e7b",
    "title": "Windows Kernel Use-After-Free Allows Local Privilege Escalation",
    "summary": "A use‑after‑free bug in the Windows Kernel allows an authorized attacker to elevate privileges locally on affected systems. The flaw, identified as CVE‑2026‑108403, arises from improper memory handling during kernel operations, enabling local privilege escalation without authentication. Microsoft has issued a patch in the latest cumulative update; administrators should apply it promptly to prevent privilege escalation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108403",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-kernel-use-after-free-allows-local-privile",
      "article-597d1e7b",
      "597d1e7b",
      "windows-kernel-use-after-free-allows-local-privile-1ff730",
      "windows-kernel-use-after-free-allows-local-privilege-escalat"
    ]
  },
  {
    "slug": "odbc-driver-heap-overflow-enables-remote-code-exec-38a3b1c9",
    "title": "ODBC Driver Heap Overflow Enables Remote Code Execution",
    "summary": "A heap‑based buffer overflow in the Microsoft ODBC Driver permits an unauthorized attacker to execute code over a network. CVE‑2026‑108411 exploits memory corruption triggered by malformed ODBC requests, enabling remote code execution without authentication. Microsoft released a patch in the latest cumulative update; apply it immediately or restrict ODBC traffic as a temporary workaround.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108411",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "odbc-driver-heap-overflow-enables-remote-code-exec",
      "article-38a3b1c9",
      "38a3b1c9",
      "odbc-driver-heap-overflow-enables-remote-code-exec-1ff730",
      "odbc-driver-heap-overflow-enables-remote-code-execution"
    ]
  },
  {
    "slug": "windows-dns-rce-via-deserialization-vulnerability-e4c11f4e",
    "title": "Windows DNS RCE via Deserialization Vulnerability",
    "summary": "Microsoft disclosed CVE-2026-109463, a deserialization flaw in Windows DNS enabling unauthenticated remote code execution over the network. Attackers can craft malicious DNS responses to trigger arbitrary code execution on affected systems. Microsoft released an emergency patch addressing this critical vulnerability, and administrators should deploy it promptly to prevent exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109463",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-109463"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-dns-rce-via-deserialization-vulnerability",
      "article-e4c11f4e",
      "e4c11f4e",
      "windows-dns-rce-via-deserialization-vulnerability-1ff6bb"
    ]
  },
  {
    "slug": "binance-warns-of-ios-flaw-that-could-leak-crypto-w-752325ce",
    "title": "Binance warns of iOS flaw that could leak crypto wallet secrets",
    "summary": "Binance is warning about a vulnerability in Apple's iOS 26.7.1, 27.0.1, and 27.2 that could allow third-party apps to read private files stored by other apps, including cryptocurrency seed phrases, secret keys, and login credentials.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/binance-warns-of-ios-flaw-that-could-leak-crypto-wallet-secrets/",
    "publishedAt": "2026-11-10T15:59:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-warns-of-ios-flaw-that-could-leak-crypto-w",
      "article-752325ce",
      "752325ce",
      "binance-warns-of-ios-flaw-that-could-leak-crypto-w-3c2f2c",
      "binance-warns-of-ios-flaw-that-could-leak-crypto-wallet-secr"
    ]
  },
  {
    "slug": "one-identity-releases-safeguard-9-0-privileged-acc-3b5508b9",
    "title": "One Identity Releases Safeguard 9.0 Privileged Access Platform",
    "summary": "One Identity launched Safeguard 9.0 to update its enterprise privileged access management architecture. The release targets privilege management operational challenges by streamlining infrastructure management and reducing administrative overhead within enterprise identity environments. Organizations deploying privileged access controls can implement version 9.0 to simplify administrative workflows and strengthen identity management infrastructure.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/one-identity-unveils-safeguard-9-0-for-simpler-pam/",
    "publishedAt": "2026-11-10T15:59:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "one-identity-releases-safeguard-9-0-privileged-acc",
      "article-3b5508b9",
      "3b5508b9",
      "one-identity-releases-safeguard-9-0-privileged-acc-6b48ea",
      "one-identity-releases-safeguard-9-0-privileged-access-platfo"
    ]
  },
  {
    "slug": "rhsa-2026-97344-important-rhc-worker-playbook-secu-2f648fa6",
    "title": "RHSA-2026:97344: Important: rhc-worker-playbook security, bug fix, and enhancement update",
    "summary": "An update for rhc-worker-playbook is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97344",
    "publishedAt": "2026-11-10T15:58:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97344-important-rhc-worker-playbook-secu",
      "article-2f648fa6",
      "2f648fa6",
      "rhsa-2026-97344-important-rhc-worker-playbook-secu-37d760",
      "rhsa-2026-97344-important-rhc-worker-playbook-security-bug-f"
    ]
  },
  {
    "slug": "blind-eagle-uses-fake-court-notices-to-deliver-rat-62d139ff",
    "title": "Blind Eagle Uses Fake Court Notices to Deliver RAT Across Latin America",
    "summary": "The threat actor Blind Eagle launched a campaign targeting Latin American organizations using judicial and administrative-themed phishing lures resembling court notifications and fiscalía notices. The campaign delivers a remote access trojan sharing lineage with AsyncRAT and DCRat through Portuguese and Spanish-language lures. Organizations should implement email filtering for domain-spoofed legal correspondence and require multi-factor authentication for remote access.",
    "category": "Nation State",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/blind-eagle-uses-fake-court-notices-to.html",
    "publishedAt": "2026-11-10T15:58:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "blind-eagle-uses-fake-court-notices-to-deliver-rat",
      "article-62d139ff",
      "62d139ff",
      "blind-eagle-uses-fake-court-notices-to-deliver-rat-713e62",
      "blind-eagle-uses-fake-court-notices-to-deliver-rat-across-la"
    ]
  },
  {
    "slug": "one-identity-updates-active-roles-8-6-active-direc-b223cfaf",
    "title": "One Identity Updates Active Roles 8.6 Active Directory Tool",
    "summary": "One Identity released Active Roles version 8.6 to enhance authentication mechanisms and administration within Active Directory environments. The update delivers cumulative security enhancements, expanded API integration capabilities, and flexible authentication models for managing enterprise directory services. System administrators should deploy Active Roles 8.6 to improve directory management security and leverage updated API capabilities for identity administration.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/one-identity-active-roles-8-6-security-administration/",
    "publishedAt": "2026-11-10T15:50:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "one-identity-updates-active-roles-8-6-active-direc",
      "article-b223cfaf",
      "b223cfaf",
      "one-identity-updates-active-roles-8-6-active-direc-84e6ff",
      "one-identity-updates-active-roles-8-6-active-directory-tool"
    ]
  },
  {
    "slug": "one-identity-releases-identity-manager-10-0-lts-2dce62bf",
    "title": "One Identity Releases Identity Manager 10.0 LTS",
    "summary": "One Identity has released Identity Manager 10.0 LTS, a major platform update introducing browser-based administration, AI-assisted insights, and streamlined automation for identity governance workflows. The update modernizes the user experience with a redesigned web interface and intelligent operational assistance. Organizations should evaluate migration readiness and validate compatibility with existing integration modules before deployment.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/one-identity-unveils-identity-manager-10-0-lts-with-ai-and-modern-ux/",
    "publishedAt": "2026-11-10T15:49:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "one-identity-releases-identity-manager-10-0-lts",
      "article-2dce62bf",
      "2dce62bf",
      "one-identity-releases-identity-manager-10-0-lts-6d5792"
    ]
  },
  {
    "slug": "spyware-infections-rise-among-average-users-183a61b2",
    "title": "Spyware Infections Rise Among Average Users",
    "summary": "A recent report indicates that cybercriminals are increasingly deploying spyware on consumer devices, targeting non‑enterprise users. The malware leverages social engineering and bundled software to gain persistent access, enabling data exfiltration and remote control. Security teams should enforce application whitelisting, educate users on safe download practices, and deploy endpoint detection solutions to mitigate the threat.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/spyware-cyber-crime-iverify",
    "publishedAt": "2026-11-10T15:45:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "spyware-infections-rise-among-average-users",
      "article-183a61b2",
      "183a61b2",
      "spyware-infections-rise-among-average-users-14c3af"
    ]
  },
  {
    "slug": "rhsa-2026-97238-important-cockpit-machines-securit-89841513",
    "title": "RHSA-2026:97238: Important: cockpit-machines security, bug fix, and enhancement update",
    "summary": "An update for cockpit-machines is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97238",
    "publishedAt": "2026-11-10T15:38:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97238-important-cockpit-machines-securit",
      "article-89841513",
      "89841513",
      "rhsa-2026-97238-important-cockpit-machines-securit-37d764",
      "rhsa-2026-97238-important-cockpit-machines-security-bug-fix-"
    ]
  },
  {
    "slug": "fireworks-ai-breach-impacts-customer-datasets-and-579dbb4a",
    "title": "Fireworks AI Breach Impacts Customer Datasets and Model Weights",
    "summary": "Fireworks AI disclosed a security incident affecting account and billing information, alongside secrets, datasets, and incomplete models for a limited set of accounts. The company detected unauthorized internal use of its systems, exposing customer data including model weights and Notion AI chat records. Organizations using Fireworks AI should audit access logs and rotate any exposed credentials immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/fireworks-ai-breach-widens-to-expose.html",
    "publishedAt": "2026-11-10T15:33:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fireworks-ai-breach-impacts-customer-datasets-and",
      "article-579dbb4a",
      "579dbb4a",
      "fireworks-ai-breach-impacts-customer-datasets-and-51109a",
      "fireworks-ai-breach-impacts-customer-datasets-and-model-weig"
    ]
  },
  {
    "slug": "ivanti-releases-monthly-security-update-7d8ceb82",
    "title": "Ivanti Releases Monthly Security Update",
    "summary": "Ivanti publishes monthly security patches on the second Tuesday, applying fixes discovered through AI‑driven vulnerability analysis. The update cycle incorporates advanced LLMs to detect issues missed by traditional tools, emphasizing proactive vulnerability management. Security teams should apply the latest Ivanti patches promptly and review release notes for newly identified vulnerabilities.",
    "category": "General",
    "severity": "LOW",
    "source": "Ivanti Security Advisories",
    "sourceUrl": "https://www.ivanti.com/blog/november-2026-security-update",
    "publishedAt": "2026-11-10T15:33:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ivanti-releases-monthly-security-update",
      "article-7d8ceb82",
      "7d8ceb82",
      "ivanti-releases-monthly-security-update-153446"
    ]
  },
  {
    "slug": "red-hat-releases-bind-security-update-for-rhel9-ac091820",
    "title": "Red Hat Releases BIND Security Update for RHEL9",
    "summary": "An update for BIND on Red Hat Enterprise Linux 9 addresses multiple security vulnerabilities, with CVSS base scores available via CVE links. The vulnerabilities are linked to CVE references and carry moderate severity scores, but no active exploitation has been reported. Red Hat has released the patch, and users should apply the update to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97586",
    "publishedAt": "2026-11-10T15:29:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-bind-security-update-for-rhel9",
      "article-ac091820",
      "ac091820",
      "red-hat-releases-bind-security-update-for-rhel9-37d758"
    ]
  },
  {
    "slug": "rhsa-2026-97299-moderate-pcp-security-bug-fix-and-b74c76f7",
    "title": "RHSA-2026:97299: Moderate: pcp security, bug fix, and enhancement update",
    "summary": "An update for pcp is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97299",
    "publishedAt": "2026-11-10T15:25:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97299-moderate-pcp-security-bug-fix-and",
      "article-b74c76f7",
      "b74c76f7",
      "rhsa-2026-97299-moderate-pcp-security-bug-fix-and-37d764",
      "rhsa-2026-97299-moderate-pcp-security-bug-fix-and-enhancemen"
    ]
  },
  {
    "slug": "red-hat-issues-containernetworking-plugins-securit-aa093ca2",
    "title": "Red Hat Issues Containernetworking‑Plugins Security Update",
    "summary": "An update for containernetworking‑plugins on Red Hat Enterprise Linux 9 addresses several security vulnerabilities, with CVSS base scores available via CVE links. The vulnerabilities carry important severity scores, but no active exploitation has been reported. Red Hat has released the patch, and users should apply the update to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97644",
    "publishedAt": "2026-11-10T15:23:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-containernetworking-plugins-securit",
      "article-aa093ca2",
      "aa093ca2",
      "red-hat-issues-containernetworking-plugins-securit-37d755",
      "red-hat-issues-containernetworking-plugins-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-97284-important-git-lfs-security-update-090e4bb8",
    "title": "RHSA-2026:97284: Important: git-lfs security update",
    "summary": "An update for git-lfs is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97284",
    "publishedAt": "2026-11-10T15:20:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97284-important-git-lfs-security-update",
      "article-090e4bb8",
      "090e4bb8",
      "rhsa-2026-97284-important-git-lfs-security-update-37d764"
    ]
  },
  {
    "slug": "rhsa-2026-97561-important-crun-security-bug-fix-an-81ee0c21",
    "title": "RHSA-2026:97561: Important: crun security, bug fix, and enhancement update",
    "summary": "An update for crun is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97561",
    "publishedAt": "2026-11-10T15:17:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97561-important-crun-security-bug-fix-an",
      "article-81ee0c21",
      "81ee0c21",
      "rhsa-2026-97561-important-crun-security-bug-fix-an-37d759",
      "rhsa-2026-97561-important-crun-security-bug-fix-and-enhancem"
    ]
  },
  {
    "slug": "researcher-bypasses-meta-smart-glasses-safeguard-ca7e9717",
    "title": "Researcher Bypasses Meta Smart Glasses Safeguard",
    "summary": "A researcher demonstrated that Meta smart glasses' software restriction policy could be bypassed to execute arbitrary code on the device. The vulnerability allows an attacker running on the device to override intended sandboxing protections. Users should apply manufacturer firmware updates as soon as available to remediate this code execution path.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/researcher-bypassed-meta-smart-glasses-safeguards-to-run-her-own-code",
    "publishedAt": "2026-11-10T15:09:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "researcher-bypasses-meta-smart-glasses-safeguard",
      "article-ca7e9717",
      "ca7e9717",
      "researcher-bypasses-meta-smart-glasses-safeguard-2c9fe4"
    ]
  },
  {
    "slug": "ransomware-recovery-becomes-client-retention-metri-3e699a1c",
    "title": "Ransomware Recovery Becomes Client Retention Metric",
    "summary": "Kaseya finds that ransomware recovery delays, poor communication, and unexpected costs erode MSP client trust, making recovery performance a retention metric. Disconnected recovery tools create these problems, while integrated workflows improve response times, transparency, and client satisfaction. MSPs should adopt unified recovery solutions to reduce delays, enhance communication, and maintain client loyalty during ransomware incidents.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/ransomware-recovery-is-now-a-client-retention-metric/",
    "publishedAt": "2026-11-10T15:01:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ransomware-recovery-becomes-client-retention-metri",
      "article-3e699a1c",
      "3e699a1c",
      "ransomware-recovery-becomes-client-retention-metri-2eea80",
      "ransomware-recovery-becomes-client-retention-metric"
    ]
  },
  {
    "slug": "ciso-forum-virtual-summit-2026-announced-b1149328",
    "title": "CISO Forum Virtual Summit 2026 Announced",
    "summary": "The CISO Forum will host a two‑day virtual summit in 2026, gathering global cybersecurity leaders to discuss contemporary risk management and defense strategies. Participants will share insights on emerging threats, regulatory compliance, and innovative technologies shaping modern enterprise security. Organizers recommend registering early, reviewing the agenda, and preparing case studies to maximize engagement and knowledge transfer.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/today-ciso-forum-virtual-summit-2026-join-global-cybersecurity-leaders/",
    "publishedAt": "2026-11-10T15:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ciso-forum-virtual-summit-2026-announced",
      "article-b1149328",
      "b1149328",
      "ciso-forum-virtual-summit-2026-announced-7d4f97"
    ]
  },
  {
    "slug": "whitematter-secures-20m-series-a-funding-a5c740c5",
    "title": "WhiteMatter Secures $20M Series A Funding",
    "summary": "WhiteMatter, a cybersecurity startup, announced a $20 million Series A round to support its AI‑centric guardian agent platform. The platform installs a dedicated guardian agent on each AI agent within an organization, monitoring for anomalous behavior and enforcing policy compliance. Investors include XYZ Ventures and ABC Capital, and the company plans to expand analytics suite and integrate with cloud providers.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/whitematter-raises-20-million-in-series-a-funding/",
    "publishedAt": "2026-11-10T14:58:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "whitematter-secures-20m-series-a-funding",
      "article-a5c740c5",
      "a5c740c5",
      "whitematter-secures-20m-series-a-funding-125679"
    ]
  },
  {
    "slug": "sap-releases-patches-for-critical-icm2shell-proxyg-09424f5e",
    "title": "SAP Releases Patches for Critical ICM2SHELL, ProxyGate Bugs",
    "summary": "SAP has issued 42 new and updated security advisories, including nine that address critical‑severity vulnerabilities in its ICM2SHELL and ProxyGate components. The critical flaws involve improper handling of input data, potentially enabling remote code execution, but no active exploitation has been reported. SAP recommends applying the released patches immediately to mitigate the identified risks and prevent potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/sap-patches-critical-icm2shell-proxygate-vulnerabilities/",
    "publishedAt": "2026-11-10T14:46:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sap-releases-patches-for-critical-icm2shell-proxyg",
      "article-09424f5e",
      "09424f5e",
      "sap-releases-patches-for-critical-icm2shell-proxyg-567cdd",
      "sap-releases-patches-for-critical-icm2shell-proxygate-bugs"
    ]
  },
  {
    "slug": "ai-reverse-engineering-let-researchers-add-a-new-f-4d48b7e9",
    "title": "AI reverse engineering let researchers add a new feature to Slack",
    "summary": "Intezer researchers used AI agents to rebuild source code for Slack, Apple’s Finder and a TinyTurla-NG sample, from a backdoor family Cisco Talos attributes to the Turla group. The rebuilt Slack ran well enough that the team added a new feature to it: AI text autocomplete, powered by a small local model.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/slack-ai-reverse-engineering/",
    "publishedAt": "2026-11-10T14:45:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-reverse-engineering-let-researchers-add-a-new-f",
      "article-4d48b7e9",
      "4d48b7e9",
      "ai-reverse-engineering-let-researchers-add-a-new-f-5d0b6c",
      "ai-reverse-engineering-let-researchers-add-a-new-feature-to-"
    ]
  },
  {
    "slug": "losapio-nominated-to-lead-cisa-amid-senate-uncerta-e092c1d2",
    "title": "LoSapio Nominated to Lead CISA Amid Senate Uncertainty",
    "summary": "Palantir's chief information security officer, Michael LoSapio, has been nominated by President Donald Trump to lead the Cybersecurity and Infrastructure Security Agency. The nomination awaits a lame‑duck Senate vote, leaving the confirmation status uncertain amid political debate over CISA leadership. If confirmed, LoSapio would oversee federal cybersecurity policy, incident response coordination, and critical infrastructure protection initiatives.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/michael-losapio-cisa-director-nomination",
    "publishedAt": "2026-11-10T14:31:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "losapio-nominated-to-lead-cisa-amid-senate-uncerta",
      "article-e092c1d2",
      "e092c1d2",
      "losapio-nominated-to-lead-cisa-amid-senate-uncerta-48000d",
      "losapio-nominated-to-lead-cisa-amid-senate-uncertainty"
    ]
  },
  {
    "slug": "north-korea-targets-drone-tech-and-software-supply-93ca9b9c",
    "title": "North Korea Targets Drone Tech and Software Supply Chains",
    "summary": "North Korean actors Lazarus and DeceptiveDevelopment resumed cyberespionage against drone technology and software supply chains between April and September 2026. They used stolen developer credentials to inject malicious code into open‑source projects and targeted European defense entities, widening the threat surface. Defenders should monitor supply‑chain integrity, enforce strict credential hygiene, and apply security patches to exposed development environments.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/north-korean-hackers-3/",
    "publishedAt": "2026-11-10T14:09:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "north-korea-targets-drone-tech-and-software-supply",
      "article-93ca9b9c",
      "93ca9b9c",
      "north-korea-targets-drone-tech-and-software-supply-63ada6",
      "north-korea-targets-drone-tech-and-software-supply-chains"
    ]
  },
  {
    "slug": "check-point-traces-copperdragon-sparrow-framework-47e2b6b2",
    "title": "Check Point Traces CopperDragon Sparrow Framework Globally",
    "summary": "Check Point Research tracked intrusion campaigns attributed to CopperDragon using a shared Sparrow framework across Latin America, Asia, and Europe. The campaigns employed distinct backdoors and post-exploitation tools while sharing common infrastructure patterns. defenders should monitor for lateral movement indicators and apply network segmentation to limit blast radius during active intrusions.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/not-all-that-glitters-is-gold-tracking-copperdragons-sparrow-framework-around-the-globe/",
    "publishedAt": "2026-11-10T14:01:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "check-point-traces-copperdragon-sparrow-framework",
      "article-47e2b6b2",
      "47e2b6b2",
      "check-point-traces-copperdragon-sparrow-framework-3c011b",
      "check-point-traces-copperdragon-sparrow-framework-globally"
    ]
  },
  {
    "slug": "dreeze-secures-33m-seed-funding-for-cloud-recovery-8e55b81a",
    "title": "Dreeze Secures $33M Seed Funding for Cloud Recovery",
    "summary": "Dreeze, a stealth startup, secured $33 million in seed funding to launch its Application Revival platform for Amazon Web Services. The platform automates full cloud application recovery by restoring data, infrastructure, and dependencies in the order required for operational continuity. Dreeze’s solution addresses gaps where traditional backups leave businesses offline, offering a comprehensive restoration workflow for enterprise cloud environments.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/dreeze-application-revival-33-million-funding/",
    "publishedAt": "2026-11-10T14:00:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "dreeze-secures-33m-seed-funding-for-cloud-recovery",
      "article-8e55b81a",
      "8e55b81a",
      "dreeze-secures-33m-seed-funding-for-cloud-recovery-7994f3"
    ]
  },
  {
    "slug": "clickfix-tradecraft-evolves-with-new-attack-chains-a7ea0c06",
    "title": "ClickFix Tradecraft Evolves with New Attack Chains",
    "summary": "Huntress reports evolving tradecraft of ClickFix, detailing four attack chains: lateral movement, hidden PNG payloads, Node.js RATs, and cache seeing. The techniques enable attackers to move laterally, deliver malicious payloads via disguised images, deploy Node.js RATs, and exfiltrate data through cache manipulation. Huntress recommends monitoring for unusual lateral activity, image-based payloads, Node.js anomalies, and cache access patterns to mitigate risk.",
    "category": "General",
    "severity": "HIGH",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/the-evolving-tradecraft-of-clickfix",
    "publishedAt": "2026-11-10T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "clickfix-tradecraft-evolves-with-new-attack-chains",
      "article-a7ea0c06",
      "a7ea0c06",
      "clickfix-tradecraft-evolves-with-new-attack-chains-41dc9e"
    ]
  },
  {
    "slug": "critical-apache-airflow-rce-flaw-allows-attackers-724acf9f",
    "title": "Critical Apache Airflow RCE Flaw Allows Attackers to Execute Code Without Authentication",
    "summary": "Apache Airflow has a critical remote code execution flaw that lets anyone with write access to the Celery message broker run code on worker nodes. The bug is tracked as CVE-2026-68982 and is classified as CWE-306, missing authentication for a critical function.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-apache-airflow-rce-flaw/",
    "publishedAt": "2026-11-10T13:57:52.000Z",
    "cves": [
      "CVE-2026-68982"
    ],
    "additionalSources": [],
    "aliases": [
      "critical-apache-airflow-rce-flaw-allows-attackers",
      "article-724acf9f",
      "724acf9f",
      "critical-apache-airflow-rce-flaw-allows-attackers-679389",
      "critical-apache-airflow-rce-flaw-allows-attackers-to-execute"
    ]
  },
  {
    "slug": "wiz-aligns-iso-for-japan-government-cloud-entry-3dcc3895",
    "title": "Wiz Aligns ISO for Japan Government Cloud Entry",
    "summary": "Wiz and ISMAP conduct gap assessment and ISO alignment to qualify for Japan's government cloud service list. The assessment identifies compliance gaps and outlines steps to meet Japan's public sector security requirements. Wiz plans to submit documentation and pursue certification, with no immediate security patch or vulnerability, aiming to comply with strict regulatory standards.",
    "category": "General",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/wiz-and-ismap-for-japan-public-sector",
    "publishedAt": "2026-11-10T13:48:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wiz-aligns-iso-for-japan-government-cloud-entry",
      "article-3dcc3895",
      "3dcc3895",
      "wiz-aligns-iso-for-japan-government-cloud-entry-22b4fb"
    ]
  },
  {
    "slug": "rhsa-2026-97121-moderate-unbound-security-bug-fix-7e279781",
    "title": "RHSA-2026:97121: Moderate: unbound security, bug fix, and enhancement update",
    "summary": "An update for unbound is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97121",
    "publishedAt": "2026-11-10T13:39:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97121-moderate-unbound-security-bug-fix",
      "article-7e279781",
      "7e279781",
      "rhsa-2026-97121-moderate-unbound-security-bug-fix-37d768",
      "rhsa-2026-97121-moderate-unbound-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "qubole-iam-credentials-compromised-multiple-organi-3ef88938",
    "title": "Qubole IAM Credentials Compromised, Multiple Organizations Hit",
    "summary": "Hackers used compromised Qubole IAM credentials to access customer files, secrets, keys, environment variables, and credentials, impacting more than a dozen organizations. The breach exploited privileged IAM access to exfiltrate sensitive data from Qubole‑managed cloud environments, exposing operational secrets across tenants. Customers should audit IAM permissions, rotate compromised credentials, and apply the latest Qubole security patches to prevent further exfiltration.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/over-a-dozen-organizations-hit-in-qubole-supply-chain-attack/",
    "publishedAt": "2026-11-10T13:27:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "qubole-iam-credentials-compromised-multiple-organi",
      "article-3ef88938",
      "3ef88938",
      "qubole-iam-credentials-compromised-multiple-organi-69ea7a",
      "qubole-iam-credentials-compromised-multiple-organizations-hi"
    ]
  },
  {
    "slug": "hackers-exploit-trusted-qubole-iam-roles-to-access-d4323600",
    "title": "Hackers Exploit Trusted Qubole IAM Roles to Access AWS Accounts and Download Entire S3 Buckets",
    "summary": "Hackers abused trusted Qubole integrations to enter customer AWS accounts, steal secrets, and download data from Amazon S3, sometimes taking entire buckets in one session. The activity ran from October 14 through October 26, 2026, using IAM credentials from an AWS account associated with Qubole rather than exploiting a software vulnerability.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/qubole-iam-roles/",
    "publishedAt": "2026-11-10T13:26:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-trusted-qubole-iam-roles-to-access",
      "article-d4323600",
      "d4323600",
      "hackers-exploit-trusted-qubole-iam-roles-to-access-644914",
      "hackers-exploit-trusted-qubole-iam-roles-to-access-aws-accou"
    ]
  },
  {
    "slug": "chrome-updates-released-to-patch-exploited-zero-da-7d6565c2",
    "title": "Chrome Updates Released to Patch Exploited Zero-Day Vulnerability",
    "summary": "Google released Chrome desktop and Android updates to patch CVE-2026-125350, a zero‑day flaw attackers are exploiting. The vulnerability permits remote code execution through the Chrome rendering engine, risking user data and system compromise. Users should install the latest Chrome version immediately, and admins should monitor for anomalous activity and enforce additional controls.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/bugs/2026/11/update-chrome-now-to-fix-a-flaw-attackers-are-exploiting",
    "publishedAt": "2026-11-10T13:23:00.000Z",
    "cves": [
      "CVE-2026-125350"
    ],
    "additionalSources": [],
    "aliases": [
      "chrome-updates-released-to-patch-exploited-zero-da",
      "article-7d6565c2",
      "7d6565c2",
      "chrome-updates-released-to-patch-exploited-zero-da-562340",
      "chrome-updates-released-to-patch-exploited-zero-day-vulnerab"
    ]
  },
  {
    "slug": "dark-storm-team-expands-ddos-for-hire-demands-5-00-fd53c7fb",
    "title": "Dark Storm Team Expands DDoS-for-Hire, Demands $5,000 for Amino",
    "summary": "Dark Storm Team expanded its DDoS‑for‑hire service, targeting Amino and demanding $5,000 in cryptocurrency to stop the attack. The group advertises on Telegram, issuing a payment request tied to an October 2025 incident, showing an active threat actor. Defenders should monitor traffic for DDoS patterns, deploy rate‑limiting and scrubbing services, and block known malicious IPs to mitigate disruption.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/dark-storm-team/",
    "publishedAt": "2026-11-10T13:18:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "dark-storm-team-expands-ddos-for-hire-demands-5-00",
      "article-fd53c7fb",
      "fd53c7fb",
      "dark-storm-team-expands-ddos-for-hire-demands-5-00-6e56dd",
      "dark-storm-team-expands-ddos-for-hire-demands-5-000-for-amin"
    ]
  },
  {
    "slug": "cisa-updates-incident-form-for-campaign-detection-34addf89",
    "title": "CISA Updates Incident Form for Campaign Detection",
    "summary": "CISA updated its incident reporting form to help analysts identify potential campaign links across organizations. The revised questionnaire incorporates MITRE ATT&CK terminology to capture malware, social engineering, hacking techniques, and insider threats, improving detection of coordinated attacks. Organizations should use the updated form to report incidents, enabling CISA to correlate events and provide more targeted guidance.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/cisa-incident-reporting-form-update/",
    "publishedAt": "2026-11-10T13:17:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-updates-incident-form-for-campaign-detection",
      "article-34addf89",
      "34addf89",
      "cisa-updates-incident-form-for-campaign-detection-157b51"
    ]
  },
  {
    "slug": "finite-state-raises-27-million-for-ai-product-secu-c67b25bf",
    "title": "Finite State Raises $27 Million for AI Product Security",
    "summary": "Finite State announced a $27 million Series C funding round to scale its autonomous product security platform amid rising AI-discovered vulnerabilities and new global security mandates. The investment targets accelerating defect detection across device supply chains. This reflects broader industry trends in automated vulnerability remediation.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/finite-state-raises-27-million-to-help-device-makers-fight-vulnpocalypse-with-ai-powered-product-security/",
    "publishedAt": "2026-11-10T13:17:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "finite-state-raises-27-million-for-ai-product-secu",
      "article-c67b25bf",
      "c67b25bf",
      "finite-state-raises-27-million-for-ai-product-secu-d04e30",
      "finite-state-raises-27-million-for-ai-product-security"
    ]
  },
  {
    "slug": "red-hat-issues-important-subscription-manager-cock-0b712084",
    "title": "Red Hat Issues Important subscription‑manager‑cockpit Update",
    "summary": "Red Hat released an important security update for subscription‑manager‑cockpit on Red Hat Enterprise Linux 10, addressing critical vulnerabilities. The advisory lists CVSS base scores for each flaw and links to CVE identifiers in the references. Systems administrators should apply the update promptly to close the security gaps and preserve platform stability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97090",
    "publishedAt": "2026-11-10T13:04:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-subscription-manager-cock",
      "article-0b712084",
      "0b712084",
      "red-hat-issues-important-subscription-manager-cock-37d76b",
      "red-hat-issues-important-subscription-manager-cockpit-update"
    ]
  },
  {
    "slug": "malwarebytes-flags-phishing-red-flags-on-advent-ca-a3608a97",
    "title": "Malwarebytes Flags Phishing Red Flags on Advent Calendars",
    "summary": "Malwarebytes Labs warns that several online advent calendar storefronts exhibit red flags such as copied designs, false urgency, and contradictory claims. These indicators suggest the sites may be phishing fronts or hosts for malicious payloads, potentially compromising user credentials or installing malware. Security teams should verify domain authenticity, inspect SSL certificates, and avoid downloading content from vendors until further investigation.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/how-to/2026/11/before-you-buy-an-advent-calendar-check-these-warning-signs",
    "publishedAt": "2026-11-10T13:03:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "malwarebytes-flags-phishing-red-flags-on-advent-ca",
      "article-a3608a97",
      "a3608a97",
      "malwarebytes-flags-phishing-red-flags-on-advent-ca-13ccbe",
      "malwarebytes-flags-phishing-red-flags-on-advent-calendars"
    ]
  },
  {
    "slug": "russian-state-hackers-compromise-romanian-kazakh-e-c70a08d6",
    "title": "Russian State Hackers Compromise Romanian, Kazakh Email Servers",
    "summary": "Russian state-linked hackers compromised government email servers in Romania and Kazakhstan, intercepting messages exchanged with NATO and EU officials. The intrusion leveraged credential theft and internal access to infiltrate mail systems, enabling covert eavesdropping on diplomatic communications without detection. Affected organizations should conduct forensic analysis, reset credentials, and implement multi-factor authentication to prevent further compromise.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/russia-hackers-espionage-romania-kazakhstan",
    "publishedAt": "2026-11-10T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russian-state-hackers-compromise-romanian-kazakh-e",
      "article-c70a08d6",
      "c70a08d6",
      "russian-state-hackers-compromise-romanian-kazakh-e-793ae9",
      "russian-state-hackers-compromise-romanian-kazakh-email-serve"
    ]
  },
  {
    "slug": "ai-simplifies-reverse-engineering-of-software-and-106b4d6e",
    "title": "AI Simplifies Reverse Engineering of Software and Malware",
    "summary": "Researchers demonstrated that artificial intelligence tools can now decompile and reconstruct complex software and the Turla malware, lowering the barrier for reverse engineering. The capability exposes hidden logic, facilitates vulnerability discovery, and speeds threat analysis, raising concerns for defenders. Security teams should adopt AI-aware defensive tools, continuous monitoring, and threat intelligence sharing to mitigate accelerated reverse engineering risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/application-security/ai-reverse-engineering-apps",
    "publishedAt": "2026-11-10T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-simplifies-reverse-engineering-of-software-and",
      "article-106b4d6e",
      "106b4d6e",
      "ai-simplifies-reverse-engineering-of-software-and-6489b9",
      "ai-simplifies-reverse-engineering-of-software-and-malware"
    ]
  },
  {
    "slug": "rhsa-2026-97040-important-kernel-security-bug-fix-275ecb10",
    "title": "RHSA-2026:97040: Important: kernel security, bug fix, and enhancement update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97040",
    "publishedAt": "2026-11-10T12:55:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97040-important-kernel-security-bug-fix",
      "article-275ecb10",
      "275ecb10",
      "rhsa-2026-97040-important-kernel-security-bug-fix-37d76c",
      "rhsa-2026-97040-important-kernel-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "red-hat-issues-moderate-sssd-update-for-rhel-10-1609cdcb",
    "title": "Red Hat Issues Moderate sssd Update for RHEL 10",
    "summary": "Red Hat released a moderate-impact update for the sssd service on Red Hat Enterprise Linux 10, addressing multiple security bugs. The update carries a CVSS base score for each vulnerability, with references to CVE identifiers in the advisory’s links. Administrators should apply the sssd update immediately to mitigate the identified weaknesses and maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97077",
    "publishedAt": "2026-11-10T12:54:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-moderate-sssd-update-for-rhel-10",
      "article-1609cdcb",
      "1609cdcb",
      "red-hat-issues-moderate-sssd-update-for-rhel-10-37d76b"
    ]
  },
  {
    "slug": "apple-releases-november-2026-security-updates-a7e401a4",
    "title": "Apple Releases November 2026 Security Updates",
    "summary": "Apple released a November 2026 update patching nine vulnerabilities across iOS, iPadOS, macOS, watchOS, and visionOS, including CVE-2026-113971 affecting iOS/iPadOS 26. The fixes address Bluetooth pairing weaknesses, iMessage group chat message leakage, and flaws that could allow remote attackers to intercept messages. Users should install the latest firmware and security teams should monitor for exploit activity and apply patches promptly.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33506",
    "publishedAt": "2026-11-10T12:48:55.000Z",
    "cves": [
      "CVE-2026-113971"
    ],
    "additionalSources": [],
    "aliases": [
      "apple-releases-november-2026-security-updates",
      "article-a7e401a4",
      "a7e401a4",
      "apple-releases-november-2026-security-updates-57dd81"
    ]
  },
  {
    "slug": "anthropic-releases-mythos-5-2-with-enhanced-sandbo-418ce659",
    "title": "Anthropic Releases Mythos 5.2 With Enhanced Sandbox Security",
    "summary": "Anthropic released Mythos 5.2, a new model iteration focused on vulnerability discovery for security researchers. The update tightens sandbox boundaries, reducing sandbox escape incidents observed in controlled testing environments. Security teams should upgrade to Mythos 5.2 to leverage enhanced sandbox integrity and bug‑hunting capabilities and improved detection of exploitation attempts.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/anthropic-rolls-out-mythos-5-2-with-improved-bug-hunting-fewer-sandbox-escapes/",
    "publishedAt": "2026-11-10T12:17:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-releases-mythos-5-2-with-enhanced-sandbo",
      "article-418ce659",
      "418ce659",
      "anthropic-releases-mythos-5-2-with-enhanced-sandbo-63a588",
      "anthropic-releases-mythos-5-2-with-enhanced-sandbox-security"
    ]
  },
  {
    "slug": "ireland-warns-of-rising-cyberattack-threats-ahead-f95a4122",
    "title": "Ireland Warns of Rising Cyberattack Threats Ahead of IRISSCON",
    "summary": "Irish cybersecurity officials warn that the nation faces increasing cyberattack and hybrid threat sophistication, citing a lack of preparedness. The warning precedes IRISSCON 2026, the annual IRISSCERT conference at Dublin’s Aviva Stadium, where experts will discuss strengthening national security capabilities. Stakeholders are urged to implement enhanced cyber defenses and policy reforms before the conference to mitigate the escalating threat landscape.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/irisscon-2026-dublin/",
    "publishedAt": "2026-11-10T12:16:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ireland-warns-of-rising-cyberattack-threats-ahead",
      "article-f95a4122",
      "f95a4122",
      "ireland-warns-of-rising-cyberattack-threats-ahead-2dcd70",
      "ireland-warns-of-rising-cyberattack-threats-ahead-of-irissco"
    ]
  },
  {
    "slug": "binance-alerts-to-ios-sandbox-escape-exposing-keys-a30ef69e",
    "title": "Binance Alerts to iOS Sandbox Escape Exposing Keys",
    "summary": "Binance warns that a sandbox escape lets iOS 26 and 27 apps read files from other apps, exposing seed phrases and private keys. The flaw, worse_query, exploits a privilege escalation bug in the iOS sandbox, enabling unauthorized file access.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/binance-warns-of-ios-sandbox-escape.html",
    "publishedAt": "2026-11-10T12:15:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-alerts-to-ios-sandbox-escape-exposing-keys",
      "article-a30ef69e",
      "a30ef69e",
      "binance-alerts-to-ios-sandbox-escape-exposing-keys-48a154"
    ]
  },
  {
    "slug": "sap-issues-patches-for-four-maximum-severity-flaws-41b60e3b",
    "title": "SAP Issues Patches for Four Maximum-Severity Flaws",
    "summary": "SAP released November 2026 security updates addressing 35 vulnerabilities, including four maximum‑severity flaws in NetWeaver, Web Dispatcher, and Gateway components. The flaws, classified as maximum severity, could allow remote code execution or privilege escalation if exploited, though no active exploitation reports exist. SAP has issued patches for all affected products; administrators should apply the updates promptly to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/sap-patches-four-maximum-severity-security-vulnerabilities/",
    "publishedAt": "2026-11-10T12:07:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sap-issues-patches-for-four-maximum-severity-flaws",
      "article-41b60e3b",
      "41b60e3b",
      "sap-issues-patches-for-four-maximum-severity-flaws-4e9854"
    ]
  },
  {
    "slug": "openssh-musl-flaw-enables-password-authentication-11883b79",
    "title": "OpenSSH Musl Flaw Enables Password‑Authentication Bypass",
    "summary": "A flaw dubbed 'sshole' affects OpenSSH on musl‑based Linux, letting attackers authenticate with an oversized password over 256 bytes. The bug arises from a buffer oversight in password parsing, enabling unauthorized login without valid credentials and potentially full system access. Admins should upgrade to the patched OpenSSH release or apply the vendor‑issued workaround to reject oversized passwords.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/11/new-openssh-vulnerability.html",
    "publishedAt": "2026-11-10T12:02:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openssh-musl-flaw-enables-password-authentication",
      "article-11883b79",
      "11883b79",
      "openssh-musl-flaw-enables-password-authentication-67f2ec",
      "openssh-musl-flaw-enables-password-authentication-bypass"
    ]
  },
  {
    "slug": "cisa-adds-six-exploited-vulnerabilities-to-kev-9ddecdf1",
    "title": "CISA Adds Six Exploited Vulnerabilities to KEV",
    "summary": "CISA added six known exploited vulnerabilities to its KEV catalog, including CVE-2026-20320, CVE-2026-111560, CVE-2026-111793, CVE-2026-116606, CVE-2026-124194, and CVE-2026-125350. The flaws cover XML external entity handling, OS command injection, resource transfer, authentication bypass, unsafe action, and use‑after‑free, all with active exploitation evidence. Vendors should apply patches or mitigations from the KEV catalog, and security teams should monitor for exploitation indicators.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/11/10/cisa-adds-six-known-exploited-vulnerabilities-catalog",
    "publishedAt": "2026-11-10T12:00:00.000Z",
    "cves": [
      "CVE-2026-20320",
      "CVE-2026-111560",
      "CVE-2026-111793",
      "CVE-2026-116606",
      "CVE-2026-124194",
      "CVE-2026-125350"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-six-exploited-vulnerabilities-to-kev",
      "article-9ddecdf1",
      "9ddecdf1",
      "cisa-adds-six-exploited-vulnerabilities-to-kev-6af0be"
    ]
  },
  {
    "slug": "adobe-commerce-and-magento-file-upload-rce-flaw-cv-d6c9bec3",
    "title": "Adobe Commerce and Magento File Upload RCE Flaw (CVE-2026-48356)",
    "summary": "Adobe Commerce and Magento contain an unrestricted file upload vulnerability (CVE-2026-48356, CVSS 9.3, CWE-434) enabling arbitrary code execution and elevated account control. CISA added the flaw to its Known Exploited Vulnerabilities catalog on Oct. 27, 2026, with federal remediation due Nov. 10, 2026, under BOD 26-04. Apply patches in Adobe bulletin APSB26-73 immediately.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/10/27/cisa-adds-two-known-exploited-vulnerabilities-catalog",
    "publishedAt": "2026-11-10T12:00:00.000Z",
    "cves": [
      "CVE-2026-48356"
    ],
    "additionalSources": [
      {
        "source": "Adobe Security Bulletin (APSB26-73)",
        "sourceUrl": "https://www.adobe.com/trust/security/products/commerce/apsb26-73.html"
      }
    ],
    "aliases": [
      "adobe-commerce-and-magento-file-upload-rce-flaw-cv",
      "article-d6c9bec3",
      "d6c9bec3",
      "adobe-commerce-and-magento-file-upload-rce-flaw-cv-7a305a",
      "adobe-commerce-and-magento-file-upload-rce-flaw-cve-2026-483",
      "https://www.cisa.gov/news-events/alerts/2026/10/27/cisa-adds-two-known-exploited-vulnerabilities-catalog"
    ]
  },
  {
    "slug": "binance-alerts-iphone-users-to-ios-file-access-fla-4cd25477",
    "title": "Binance Alerts iPhone Users to iOS File‑Access Flaw",
    "summary": "Binance warned iPhone users about worse_query, an iOS flaw that permits malicious apps to read files belonging to other apps. Affected iOS versions 26.7.1, 27.0.1, and 27.2 could expose seed phrases, private keys, and login credentials, creating a high‑risk data leakage vector. Users should install the latest iOS updates or apply the vendor’s security patch to mitigate the file‑access vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ios-flaw-expose-crypto-wallet/",
    "publishedAt": "2026-11-10T11:40:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-alerts-iphone-users-to-ios-file-access-fla",
      "article-4cd25477",
      "4cd25477",
      "binance-alerts-iphone-users-to-ios-file-access-fla-551001",
      "binance-alerts-iphone-users-to-ios-file-access-flaw"
    ]
  },
  {
    "slug": "claude-mythos-5-2-enhances-bug-hunting-reduces-san-8326924a",
    "title": "Claude Mythos 5.2 Enhances Bug Hunting, Reduces Sandbox Breaks",
    "summary": "Anthropic released Claude Mythos 5.2, a model variant aimed at improving cybersecurity task detection. The update tightens safety classifiers, decreasing sandbox‑breaking incidents observed during controlled testing of penetration‑testing and exploit‑generation requests. Security teams should upgrade to Mythos 5.2 to benefit from stricter safeguards and reduced sandbox escape risk and improved detection.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/anthropic-claude-fable-and-mythos-5-2-safeguards/",
    "publishedAt": "2026-11-10T11:40:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "claude-mythos-5-2-enhances-bug-hunting-reduces-san",
      "article-8326924a",
      "8326924a",
      "claude-mythos-5-2-enhances-bug-hunting-reduces-san-143103",
      "claude-mythos-5-2-enhances-bug-hunting-reduces-sandbox-break"
    ]
  },
  {
    "slug": "rich-network-data-improves-post-alert-interdiction-4a9ec0de",
    "title": "Rich Network Data Improves Post-Alert Interdiction",
    "summary": "The article argues that relying solely on alerts is insufficient, as security teams often fail to detect sophisticated intrusions. It proposes that rich network data enables interdiction by identifying and disrupting malicious traffic after an alert has been triggered. Security teams should integrate deep packet inspection and flow analytics to complement alerts, improving detection coverage and response times.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/beyond-alert-case-for-rich-network-data.html",
    "publishedAt": "2026-11-10T11:38:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rich-network-data-improves-post-alert-interdiction",
      "article-4a9ec0de",
      "4a9ec0de",
      "rich-network-data-improves-post-alert-interdiction-5a6a44"
    ]
  },
  {
    "slug": "sap-issues-critical-patch-day-for-netweaver-dispat-0a949af6",
    "title": "SAP Issues Critical Patch Day for NetWeaver, Dispatcher, Gateway",
    "summary": "SAP released its November 2026 Security Patch Day, addressing critical vulnerabilities in NetWeaver, Web Dispatcher, and Gateway components. The update includes 35 new security notes, four GitHub advisories, and fixes for four CVEs, including CVE-2026-44756, each scoring a maximum CVSS of 10.0. Administrators should apply patches immediately to eliminate the high‑risk remote code execution vectors exposed by these flaws.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/sap-security-patch-day-november/",
    "publishedAt": "2026-11-10T11:10:19.000Z",
    "cves": [
      "CVE-2026-44756"
    ],
    "additionalSources": [],
    "aliases": [
      "sap-issues-critical-patch-day-for-netweaver-dispat",
      "article-0a949af6",
      "0a949af6",
      "sap-issues-critical-patch-day-for-netweaver-dispat-48e8e0",
      "sap-issues-critical-patch-day-for-netweaver-dispatcher-gatew"
    ]
  },
  {
    "slug": "france-attributes-supermarket-refrigeration-sabota-99bf71bc",
    "title": "France Attributes Supermarket Refrigeration Sabotage to Iranian Hackers",
    "summary": "France attributed a disruptive cyberattack on 700 supermarket refrigeration systems to Iran's Islamic Revolutionary Guard Corps. Attackers remotely manipulated defrost controls during October 11–12, causing widespread food spoilage and approximately 20 fires, per the Paris prosecutor. Foreign Minister Jean-Noël Barrot confirmed the attribution; affected organizations should audit industrial control system access and implement network segmentation.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/iranian-hackers-supermarket-cyberattacks/",
    "publishedAt": "2026-11-10T10:23:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "france-attributes-supermarket-refrigeration-sabota",
      "article-99bf71bc",
      "99bf71bc",
      "france-attributes-supermarket-refrigeration-sabota-48fa53",
      "france-attributes-supermarket-refrigeration-sabotage-to-iran"
    ]
  },
  {
    "slug": "apple-patches-imessage-group-chat-privacy-flaws-an-be674176",
    "title": "Apple Patches iMessage Group Chat Privacy Flaws and Bluetooth Pairing Vulnerabilities",
    "summary": "An iMessage flaw could let a remote attacker join a group chat and receive its messages, Apple said yesterday, and it released updates to fix it. The updates also fix a separate iMessage flaw that could let someone added to a group access messages sent before they joined.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/apple-patches-imessage-group-chat.html",
    "publishedAt": "2026-11-10T10:16:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-patches-imessage-group-chat-privacy-flaws-an",
      "article-be674176",
      "be674176",
      "apple-patches-imessage-group-chat-privacy-flaws-an-797319",
      "apple-patches-imessage-group-chat-privacy-flaws-and-bluetoot"
    ]
  },
  {
    "slug": "attackers-exploit-barracuda-esg-flaws-for-root-acc-25ab3004",
    "title": "Attackers Exploit Barracuda ESG Flaws for Root Access",
    "summary": "Attackers are actively exploiting two critical Barracuda Email Security Gateway vulnerabilities to achieve root-level command execution. The flaws, recently patched by Barracuda, allow unauthenticated remote code execution on the appliance, granting full system compromise. Barracuda urges immediate application of security updates and verification of appliance integrity to prevent persistent unauthorized access.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-exploit-barracuda-email-security-gateway-flaws-to-get-root-access/",
    "publishedAt": "2026-11-10T10:10:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "attackers-exploit-barracuda-esg-flaws-for-root-acc",
      "article-25ab3004",
      "25ab3004",
      "attackers-exploit-barracuda-esg-flaws-for-root-acc-304d38",
      "attackers-exploit-barracuda-esg-flaws-for-root-access"
    ]
  },
  {
    "slug": "windows-11-26h2-enables-default-settings-backup-cbb1595d",
    "title": "Windows 11 26H2 Enables Default Settings Backup",
    "summary": "Windows 11 26H2 now enables settings backup by default on eligible devices. Renamed Windows Backup for Organizations, the update consolidates roaming settings management and preserves supported settings and Microsoft Store app lists during backup. Admins can adjust backup profiles via policy console; no extra patch needed beyond the 26H2 release.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/windows-settings-backup-default/",
    "publishedAt": "2026-11-10T10:03:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-11-26h2-enables-default-settings-backup",
      "article-cbb1595d",
      "cbb1595d",
      "windows-11-26h2-enables-default-settings-backup-2c499a"
    ]
  },
  {
    "slug": "anthropic-releases-claude-mythos-5-2-ai-for-vulner-649ae7e7",
    "title": "Anthropic Releases Claude Mythos 5.2 AI for Vulnerability Detection",
    "summary": "Anthropic released Claude Mythos 5.2, an AI model aimed at cybersecurity engineering, on November 9. The model achieved a 76.3% score on CyScenarioBench, indicating strong capability to identify zero‑day flaws. Access remains restricted to prevent misuse, and security teams can use it to locate, reproduce, and remediate vulnerabilities before exploitation.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/claude-mythos-5-2-released/",
    "publishedAt": "2026-11-10T10:03:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-releases-claude-mythos-5-2-ai-for-vulner",
      "article-649ae7e7",
      "649ae7e7",
      "anthropic-releases-claude-mythos-5-2-ai-for-vulner-64791d",
      "anthropic-releases-claude-mythos-5-2-ai-for-vulnerability-de"
    ]
  },
  {
    "slug": "sap-fixes-four-10-0-rce-flaws-including-netweaver-102407d0",
    "title": "SAP Fixes Four 10.0 RCE Flaws, Including NetWeaver",
    "summary": "SAP patched four CVSS 10.0 flaws on Security Patch Day affecting NetWeaver and Web Dispatcher: CVE-2026-76964 (ICM), CVE-2026-89126 (Web Dispatcher), CVE-2026-89103 (Gateway ProxyGate), and CVE-2026-120017 (SAML 2.0, distinct from earlier CVE-2026-44748). Unauthenticated attackers can achieve RCE, server impersonation, or arbitrary user login; apply SAP security notes immediately.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/sap-patches-four-cvss-100-flaws.html",
    "publishedAt": "2026-11-10T10:02:40.000Z",
    "cves": [
      "CVE-2026-76964",
      "CVE-2026-89126",
      "CVE-2026-89103",
      "CVE-2026-120017",
      "CVE-2026-44748"
    ],
    "additionalSources": [],
    "aliases": [
      "sap-fixes-four-10-0-rce-flaws-including-netweaver",
      "article-102407d0",
      "102407d0",
      "sap-fixes-four-10-0-rce-flaws-including-netweaver-4254d9"
    ]
  },
  {
    "slug": "turla-deploys-cereal-malware-to-harvest-exchange-e-e1a34ab8",
    "title": "Turla Deploys Cereal Malware to Harvest Exchange Emails",
    "summary": "Turla, a Russia‑aligned threat actor, deployed its Cereal malware to infiltrate Microsoft Exchange servers and harvest email communications covertly. The tool exploits undisclosed Exchange vulnerabilities to bypass authentication and exfiltrate mailboxes, enabling persistent surveillance without triggering standard detection. Security teams should apply Microsoft’s latest Exchange patches, enforce MFA, and monitor outbound traffic to mitigate the threat.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/eset-turla-exchange-malware/",
    "publishedAt": "2026-11-10T10:00:39.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/11/russian-turla-hackers-use-new-cereal.html"
      }
    ],
    "aliases": [
      "turla-deploys-cereal-malware-to-harvest-exchange-e",
      "article-e1a34ab8",
      "e1a34ab8",
      "turla-deploys-cereal-malware-to-harvest-exchange-e-ef12ed",
      "turla-deploys-cereal-malware-to-harvest-exchange-emails"
    ]
  },
  {
    "slug": "turla-s-cereal-toolset-targets-exchange-email-coll-c3ca009b",
    "title": "Turla’s Cereal Toolset Targets Exchange Email Collection",
    "summary": "ESET Research uncovered Turla’s Cereal toolset, which includes a novel Exchange email collection module and a unique command-and-control mechanism. The toolkit also employs sophisticated .NET execution tricks, enabling stealthy persistence and data exfiltration from compromised Microsoft Exchange servers. Security teams should harden Exchange configurations, monitor for anomalous outbound traffic, and apply the latest Microsoft patches to mitigate potential exploitation.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "ESET WeLiveSecurity",
    "sourceUrl": "https://www.welivesecurity.com/en/eset-research/exchange-for-breakfast-turlas-cereal-tricks-are-not-for-kids/",
    "publishedAt": "2026-11-10T09:57:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "turla-s-cereal-toolset-targets-exchange-email-coll",
      "article-c3ca009b",
      "c3ca009b",
      "turla-s-cereal-toolset-targets-exchange-email-coll-803ca3",
      "turla-s-cereal-toolset-targets-exchange-email-collection"
    ]
  },
  {
    "slug": "n-able-disables-n-central-over-30-zero-day-flaws-74835697",
    "title": "N-able Disables N-central Over 30 Zero-Day Flaws",
    "summary": "N-able temporarily disabled N-central services while addressing over 30 zero-day vulnerabilities that enable remote code execution, credential theft, and unauthorized administrator account creation. The flaws arise from insufficient input validation in the web interface, permitting attackers to inject malicious code and elevate privileges. N-able has released a patch and urges customers to update immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/n-able-takes-n-central-offline-as-researcher-drops-over-30-zero-days/",
    "publishedAt": "2026-11-10T09:56:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-disables-n-central-over-30-zero-day-flaws",
      "article-74835697",
      "74835697",
      "n-able-disables-n-central-over-30-zero-day-flaws-95ce8b"
    ]
  },
  {
    "slug": "malicious-vs-code-extension-steals-github-tokens-8dacf453",
    "title": "Malicious VS Code Extension Steals GitHub Tokens",
    "summary": "A poisoned Nx Console extension for VS Code stayed on the marketplace for 18 minutes, letting attackers install it and steal GitHub tokens. The extension captured authentication tokens during installation, compromising developer accounts and enabling unauthorized repository access. Developers should uninstall the extension immediately, revoke exposed tokens, and install official updates; Microsoft must remove the listing and investigate.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-steal-github-tokens/",
    "publishedAt": "2026-11-10T09:54:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "malicious-vs-code-extension-steals-github-tokens",
      "article-8dacf453",
      "8dacf453",
      "malicious-vs-code-extension-steals-github-tokens-664437"
    ]
  },
  {
    "slug": "ibm-signalwire-vulnerabilities-exploited-cisa-urge-dfabc271",
    "title": "IBM, SignalWire Vulnerabilities Exploited, CISA Urges Patch",
    "summary": "CISA added CVE-2026-123218 and CVE-2026-116779 to the KEV list after attackers exploited vulnerabilities in IBM Aspera Faspex and SignalWire FreeSwitch. The flaws enable remote code execution and privilege escalation, allowing adversaries to compromise server infrastructure and exfiltrate data. Federal agencies are urged to apply the vendor patches within three days to mitigate the active exploitation risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/ibm-aspera-faspex-signalwire-freeswitch-vulnerabilities-exploited-in-attacks/",
    "publishedAt": "2026-11-10T09:42:27.000Z",
    "cves": [
      "CVE-2026-123218",
      "CVE-2026-116779"
    ],
    "additionalSources": [],
    "aliases": [
      "ibm-signalwire-vulnerabilities-exploited-cisa-urge",
      "article-dfabc271",
      "dfabc271",
      "ibm-signalwire-vulnerabilities-exploited-cisa-urge-59bc4d",
      "ibm-signalwire-vulnerabilities-exploited-cisa-urges-patch"
    ]
  },
  {
    "slug": "hackers-use-fake-fofa-accounts-to-steal-ai-keys-2d9fba03",
    "title": "Hackers Use Fake FOFA Accounts to Steal AI Keys",
    "summary": "A threat actor created 1,438 fake FOFA accounts to scan the internet for leaked OpenAI and DeepSeek API keys. The system exploited misconfigured servers exposing API keys, enabling attackers to hijack AI services and potentially monetize or exfiltrate data. Organizations should rotate exposed keys, enforce strict key management, and monitor for unauthorized usage; FOFA must investigate account abuse.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/fake-fofa-accounts/",
    "publishedAt": "2026-11-10T09:39:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-use-fake-fofa-accounts-to-steal-ai-keys",
      "article-2d9fba03",
      "2d9fba03",
      "hackers-use-fake-fofa-accounts-to-steal-ai-keys-8fe774"
    ]
  }
];
