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
    "slug": "attackers-chain-three-ivanti-flaws-for-root-access-d58862",
    "title": "Attackers Chain Three Ivanti Flaws for Root Access",
    "summary": "Attackers chained three vulnerabilities in Ivanti Connect Secure to gain unauthenticated root access. The flaws include 'CVE-2026-111357', a missing authentication bug with CVSS 8.8, and two other undisclosed weaknesses exploited in the wild, enabling privilege escalation without credentials. CISA added the issues to its KEV catalog; Ivanti has released patches, and security teams should apply them immediately.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/attackers-chain-three-ivanti-connect.html",
    "publishedAt": "2026-10-31T08:27:43.000Z",
    "cves": [
      "CVE-2026-111357"
    ],
    "additionalSources": [],
    "aliases": [
      "attackers-chain-three-ivanti-flaws-for-root-access",
      "article-d58862",
      "d58862"
    ]
  },
  {
    "slug": "f5-big-ip-apm-vulnerability-exposed-to-active-expl-72c186",
    "title": "F5 BIG-IP APM Vulnerability Exposed to Active Exploitation",
    "summary": "F5 disclosed a critical flaw in its BIG‑IP APM product that has been actively exploited in the wild. The vulnerability allows attackers to bypass authentication controls, potentially gaining unauthorized administrative access to network devices. F5 has released a patch; security teams must apply it immediately and verify configuration hardening to prevent further exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CERT-EU Security Advisories",
    "sourceUrl": "https://cert.europa.eu/publications/security-advisories/2026-013/",
    "publishedAt": "2026-10-31T06:43:54.965Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "f5-big-ip-apm-vulnerability-exposed-to-active-expl",
      "article-72c186",
      "72c186",
      "f5-big-ip-apm-vulnerability-exposed-to-active-exploitation"
    ]
  },
  {
    "slug": "wordpress-rce-vulnerability-targeted-by-60-000-att-999c16",
    "title": "WordPress RCE Vulnerability Targeted by 60,000 Attacks",
    "summary": "Hackers targeted a WordPress Core remote code execution vulnerability during software updates, with 60,471 blocked attempts recorded by Wordfence in 24 hours. The flaw, identified as CVE-2026-101767, allows unauthenticated attackers to execute arbitrary code on affected sites, potentially compromising site integrity and data. WordPress released version 7.1.4 to address the issue; administrators should update immediately and monitor for suspicious activity.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/60000-attacks-targeting-wordpress/",
    "publishedAt": "2026-10-31T06:02:41.000Z",
    "cves": [
      "CVE-2026-101767"
    ],
    "additionalSources": [],
    "aliases": [
      "wordpress-rce-vulnerability-targeted-by-60-000-att",
      "article-999c16",
      "999c16",
      "wordpress-rce-vulnerability-targeted-by-60-000-attacks"
    ]
  },
  {
    "slug": "gitlab-patches-critical-unauthenticated-rce-flaw-72c186",
    "title": "GitLab Patches Critical Unauthenticated RCE Flaw",
    "summary": "GitLab published a security advisory on 21 October 2026 addressing a critical vulnerability in GitLab Community and Enterprise Editions that allows unauthenticated arbitrary code execution on affected servers. The flaw enables remote attackers to compromise internet-facing GitLab instances without credentials, posing severe operational risk to source code repositories and CI/CD pipelines.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "CERT-EU Security Advisories",
    "sourceUrl": "https://cert.europa.eu/publications/security-advisories/2026-019/",
    "publishedAt": "2026-10-31T05:48:08.535Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gitlab-patches-critical-unauthenticated-rce-flaw",
      "article-72c186",
      "72c186"
    ]
  },
  {
    "slug": "php-unauthenticated-rce-vulnerabilities-pushed-in-72c186",
    "title": "PHP Unauthenticated RCE Vulnerabilities Pushed in Oct 2026",
    "summary": "PHP disclosed two critical vulnerabilities enabling unauthenticated remote code execution in versions 8.5.12, 8.4.27, 8.3.36, and 8.2.35, with public PoCs circulating. Both flaws allow attackers to run arbitrary code without credentials, and active exploitation is suspected from emerging PoCs. PHP patched on 21 October 2026; admins should upgrade to the latest releases and monitor for exploitation attempts.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "CERT-EU Security Advisories",
    "sourceUrl": "https://cert.europa.eu/publications/security-advisories/2026-018/",
    "publishedAt": "2026-10-31T05:44:58.809Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php-unauthenticated-rce-vulnerabilities-pushed-in",
      "article-72c186",
      "72c186",
      "php-unauthenticated-rce-vulnerabilities-pushed-in-oct-2026"
    ]
  },
  {
    "slug": "citrix-netscaler-exposed-to-critical-rce-vulnerabi-72c186",
    "title": "Citrix NetScaler Exposed to Critical RCE Vulnerabilities",
    "summary": "Citrix NetScaler ADC and Gateway suffered eight vulnerabilities, including two critical unauthenticated RCE flaws confirmed in the wild, with CVE-2026-88779 cited as a representative case. The flaws permit attackers to execute arbitrary code on exposed devices without authentication, potentially compromising all internet‑exposed NetScaler instances. Citrix released patches; security teams must apply updates immediately and conduct compromise assessments on exposed systems.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CERT-EU Security Advisories",
    "sourceUrl": "https://cert.europa.eu/publications/security-advisories/2026-014/",
    "publishedAt": "2026-10-31T05:44:58.809Z",
    "cves": [
      "CVE-2026-88779"
    ],
    "additionalSources": [],
    "aliases": [
      "citrix-netscaler-exposed-to-critical-rce-vulnerabi",
      "article-72c186",
      "72c186",
      "citrix-netscaler-exposed-to-critical-rce-vulnerabilities"
    ]
  },
  {
    "slug": "chatgpt-share-link-enables-session-code-execution-7dc981",
    "title": "ChatGPT Share Link Enables Session Code Execution",
    "summary": "A malicious ChatGPT share link can execute attacker code within a logged‑in session, granting the attacker read access to private conversations. The flaw stems from insufficient isolation of shared session data, allowing injected scripts to run with the user's privileges. OpenAI fixed the issue eight days after the researchers reported it, issuing a patch and rating the vulnerability as P1.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/a-shared-chatgpt-link-could-run.html",
    "publishedAt": "2026-10-31T05:33:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chatgpt-share-link-enables-session-code-execution",
      "article-7dc981",
      "7dc981"
    ]
  },
  {
    "slug": "linux-kernel-tcp-use-after-free-cve-exploitable-7f55d5",
    "title": "Linux Kernel TCP Use-After-Free CVE Exploitable",
    "summary": "AWS identified CVE-2026-98432, a use-after-free flaw in the Linux kernel IPv4 TCP handshake path affecting versions 4.4 and later. The flaw can trigger remote code execution during TCP connection establishment, posing a high risk to exposed services. Updated kernel packages for Amazon Linux 2 and 2023 are available; customers should apply patches and reboot, while managed services receive automatic updates.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-160-aws/",
    "publishedAt": "2026-10-31T05:21:05.000Z",
    "cves": [
      "CVE-2026-98432"
    ],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-tcp-use-after-free-cve-exploitable",
      "article-7f55d5",
      "7f55d5"
    ]
  },
  {
    "slug": "google-unveils-gemini-4-carbon-ai-for-security-120a94",
    "title": "Google Unveils Gemini 4 Carbon AI for Security",
    "summary": "Google has launched Gemini 4 Carbon, an AI model designed to identify software vulnerabilities, assess exploitation potential, and generate remediation suggestions. The model builds on Gemini 4 Argon, extending capabilities to security and coding tasks that previously required days of effort. Access will be limited to selected cyber defenders initially, with broader availability expected after further testing and refinement.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/google-launches-gemini-4-carbon/",
    "publishedAt": "2026-10-31T04:48:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-unveils-gemini-4-carbon-ai-for-security",
      "article-120a94",
      "120a94"
    ]
  },
  {
    "slug": "sap-patches-critical-kernel-and-netweaver-flaws-72c186",
    "title": "SAP Patches Critical Kernel and NetWeaver Flaws",
    "summary": "SAP released security updates addressing two critical vulnerabilities in its Kernel and NetWeaver Message Server, including CVE-2026-44756 (CVSS 10.0) and CVE-2026-58240 (CVSS 9.8), both remotely exploitable without authentication. The flaws, dubbed OVERPASS and S4GET by Onapsis Research Labs, can lead to arbitrary operating system command execution under the SAP service account.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CERT-EU Security Advisories",
    "sourceUrl": "https://cert.europa.eu/publications/security-advisories/2026-011/",
    "publishedAt": "2026-10-31T04:45:29.392Z",
    "cves": [
      "CVE-2026-44756",
      "CVE-2026-58240"
    ],
    "additionalSources": [],
    "aliases": [
      "sap-patches-critical-kernel-and-netweaver-flaws",
      "article-72c186",
      "72c186"
    ]
  },
  {
    "slug": "polymarket-supply-chain-flaw-cve-2026-97229-detect-7660bd",
    "title": "Polymarket Supply Chain Flaw CVE-2026-97229 Detected",
    "summary": "A supply‑chain flaw identified in Polymarket’s platform, tracked as CVE-2026-97229, allows attackers to inject malicious code during deployment. The vulnerability arises from insufficient validation of third‑party components, enabling unauthorized code execution with potential data exfiltration; no active exploitation reported yet. Polymarket has released a patch and recommends applying the update immediately, alongside monitoring telemetry for anomalous deployment activity.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/2-million-drained-from-polymarket-traders-in-new-supply",
    "publishedAt": "2026-10-31T02:01:13.000Z",
    "cves": [
      "CVE-2026-97229"
    ],
    "additionalSources": [],
    "aliases": [
      "polymarket-supply-chain-flaw-cve-2026-97229-detect",
      "article-7660bd",
      "7660bd",
      "polymarket-supply-chain-flaw-cve-2026-97229-detected"
    ]
  },
  {
    "slug": "wordpress-rce-flaw-sparks-63-000-attack-attempts-7e216d",
    "title": "WordPress RCE Flaw Sparks 63,000 Attack Attempts",
    "summary": "A critical remote code execution flaw in WordPress core has triggered over 63,000 exploitation attempts within 24 hours, targeting the plugin loading mechanism. The bug allows attackers to inject arbitrary PHP code through malformed plugin URLs, leading to full server compromise without authentication. WordPress core developers have issued a patch in version 6.5.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/wordpress-rce-flaw-draws-nearly-63-000-attack-attempts",
    "publishedAt": "2026-10-30T22:44:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wordpress-rce-flaw-sparks-63-000-attack-attempts",
      "article-7e216d",
      "7e216d"
    ]
  },
  {
    "slug": "cve-2026-98432-linux-kernel-tcp-flaw-grants-unauth-636780",
    "title": "CVE‑2026‑98432: Linux Kernel TCP Flaw Grants Unauthenticated Root RCE",
    "summary": "A critical Linux kernel vulnerability (CVE‑2026‑98432) lets unauthenticated attackers execute arbitrary code as root via flawed TCP handling. The flaw, rated CVSS 9.8/10, affects systems using Multipath TCP listeners and can be triggered without credentials. Vendors including Red Hat have released patches; immediate deployment is required to prevent full system compromise.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/critical-linux-kernel-flaw-allows-remote-root-attacks-on-mptcp-servers/",
    "publishedAt": "2026-10-30T21:09:46.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "CyberNews AI",
        "sourceUrl": "https://cybernewsai.com/blog/critical-linux-kernel-flaw-allows-remote-root-attacks-o"
      },
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/10/linux-kernel-tcp-flaw-with-98-cvss.html"
      }
    ],
    "aliases": [
      "cve-2026-98432-linux-kernel-tcp-flaw-grants-unauth",
      "article-636780",
      "636780",
      "cve-2026-98432-linux-kernel-tcp-flaw-grants-unauthenticated-"
    ]
  },
  {
    "slug": "doj-calls-for-privacy-ombudsman-on-character-ai-sa-2d5396",
    "title": "DOJ Calls for Privacy Ombudsman on Character.AI Sales",
    "summary": "The DOJ’s Executive Office for U.S. Trustees has raised privacy concerns regarding the potential sale of Character.AI chat data. The agency seeks a consumer privacy ombudsman to advise courts on data regulation and sale terms. This initiative reflects growing scrutiny of AI data handling practices.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/doj-raises-privacy-concerns-over-character-ai-sale",
    "publishedAt": "2026-10-30T20:45:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "doj-calls-for-privacy-ombudsman-on-character-ai-sa",
      "article-2d5396",
      "2d5396",
      "doj-calls-for-privacy-ombudsman-on-character-ai-sales"
    ]
  },
  {
    "slug": "red-hat-releases-critical-pillow-update-for-rhel8-37d93d",
    "title": "Red Hat Releases Critical Pillow Update for RHEL8",
    "summary": "Red Hat has issued a critical security update for python‑pillow on RHEL 8, addressing multiple vulnerabilities that could allow remote code execution. The update carries a high CVSS base score and is available through the RHSA-2026:93077 advisory. Administrators must install the patch promptly to secure image processing services.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93077",
    "publishedAt": "2026-10-30T19:24:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-pillow-update-for-rhel8",
      "article-37d93d",
      "37d93d"
    ]
  },
  {
    "slug": "resolve-retailer-card-data-compromised-4250d4",
    "title": "Resolve Retailer Card Data Compromised",
    "summary": "A hack exposed customer payment card numbers at Resolve, a fashion retailer targeting Millennials and Gen Z. Attackers accessed stored card data through an undisclosed vulnerability in the retailer’s payment processing system, potentially allowing credential theft. Resolve has notified affected customers and is coordinating with payment processors to mitigate further exposure.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/resolve-fashion-retailer-data-breach-payment-cards",
    "publishedAt": "2026-10-30T19:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "resolve-retailer-card-data-compromised",
      "article-4250d4",
      "4250d4"
    ]
  },
  {
    "slug": "chromeos-dev-channel-updated-to-16868-5-0-7a43a5",
    "title": "ChromeOS Dev Channel Updated to 16868.5.0",
    "summary": "Google released ChromeOS Dev channel update to OS version 16868.5.0, including Browser 158.0.8127.5, for most ChromeOS devices. The update addresses multiple stability and security issues identified in the previous build, ensuring improved kernel and application integrity. Users on Dev channel should apply the update immediately to maintain system security posture.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/10/dev-channel-update-for-chromeos_0448562495.html",
    "publishedAt": "2026-10-30T18:49:40.728Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chromeos-dev-channel-updated-to-16868-5-0",
      "article-7a43a5",
      "7a43a5"
    ]
  },
  {
    "slug": "cve-2026-119117-exposes-aws-credentials-in-logs-59cb37",
    "title": "CVE-2026-119117 Exposes AWS Credentials in Logs",
    "summary": "CVE-2026-119117 allows local users to retrieve AWS credentials from logs and process arguments in Amazon Kinesis Producer Library for Java before 1.0.8 when DEBUG logging is enabled. The flaw enables credential disclosure through log files and command-line arguments, compromising application security. AWS recommends upgrading to version 1.0.8 or later to remediate.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-159-aws/",
    "publishedAt": "2026-10-30T18:18:40.000Z",
    "cves": [
      "CVE-2026-119117"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-119117-exposes-aws-credentials-in-logs",
      "article-59cb37",
      "59cb37"
    ]
  },
  {
    "slug": "freertos-kernel-cve-2026-119086-enables-privileged-58165f",
    "title": "FreeRTOS-Kernel CVE-2026-119086 Enables Privileged Escalation",
    "summary": "CVE-2026-119086 in FreeRTOS-Kernel allows unprivileged tasks to corrupt privileged memory via missing type validation in xQueueSelectFromSet. The flaw permits an attacker to write beyond intended destinations while executing in privileged context, undermining kernel integrity on MPU-enabled builds with queue sets. Amazon recommends applying the latest FreeRTOS-Kernel patch (v7.4.0+) and disabling queue sets on untrusted tasks to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-158-aws/",
    "publishedAt": "2026-10-30T17:39:33.000Z",
    "cves": [
      "CVE-2026-119086"
    ],
    "additionalSources": [],
    "aliases": [
      "freertos-kernel-cve-2026-119086-enables-privileged",
      "article-58165f",
      "58165f",
      "freertos-kernel-cve-2026-119086-enables-privileged-escalatio"
    ]
  },
  {
    "slug": "arctic-wolf-releases-2026-agentic-security-operati-678c5e",
    "title": "Arctic Wolf Releases 2026 Agentic Security Operations Report",
    "summary": "The 2026 Agentic Security Operations Report outlines how agentic AI collaborates with expert analysts to accelerate security investigations. It details operational efficiencies gained through AI-driven threat detection and response workflows. The report is available for download from Arctic Wolf’s website, offering insights into future security operation trends.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/report-au/agentic-security-operations-report/",
    "publishedAt": "2026-10-30T17:23:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "arctic-wolf-releases-2026-agentic-security-operati",
      "article-678c5e",
      "678c5e",
      "arctic-wolf-releases-2026-agentic-security-operations-report"
    ]
  },
  {
    "slug": "red-hat-issues-critical-ipa-security-update-37d93d",
    "title": "Red Hat Issues Critical IPA Security Update",
    "summary": "Red Hat released a critical security update for the IPA component on Enterprise Linux 7 Extended Lifecycle Support. The update addresses multiple high‑severity vulnerabilities that could allow remote code execution or privilege escalation. Red Hat recommends immediate application of the patch to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93071",
    "publishedAt": "2026-10-30T17:04:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-ipa-security-update",
      "article-37d93d",
      "37d93d"
    ]
  },
  {
    "slug": "uefi-flaw-affects-majority-of-servers-5f262a",
    "title": "UEFI Flaw Affects Majority of Servers",
    "summary": "A critical UEFI firmware flaw was discovered that compromises the boot integrity of the majority of enterprise servers, enabling attackers to load malicious code during system startup. The vulnerability allows unauthenticated remote exploitation through a malformed firmware update package, potentially granting full system control without user interaction.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/in-other-news-anthropic-breach-dispute-uefi-flaw-hits-most-servers-cloudflare-ai-data-leak/",
    "publishedAt": "2026-10-30T14:41:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "uefi-flaw-affects-majority-of-servers",
      "article-5f262a",
      "5f262a"
    ]
  },
  {
    "slug": "malicious-claude-extension-distributed-via-cursor-cf1d91",
    "title": "Malicious Claude Extension Distributed via Cursor Marketplace Compromises Developers",
    "summary": "A malicious version of Anthropic’s Claude Code extension was distributed through Cursor’s marketplace, targeting up to 5,000 developers. The Trojanized extension allowed attackers to inject malicious code and install persistent SSH backdoors, compromising development workspaces and source repositories. Users must uninstall the extension immediately, disable it, and apply vendor patches to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors/",
    "publishedAt": "2026-10-30T14:36:54.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Dark Reading",
        "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/devs-trojanized-claude-code-extension-cursor"
      }
    ],
    "aliases": [
      "malicious-claude-extension-distributed-via-cursor",
      "article-cf1d91",
      "cf1d91",
      "malicious-claude-extension-distributed-via-cursor-marketplac"
    ]
  },
  {
    "slug": "syrian-hacker-sentenced-for-western-attacks-5ca85b",
    "title": "Syrian Hacker Sentenced for Western Attacks",
    "summary": "A Syrian hacker, known as “Th3Pr0,” was sentenced to 42 months in federal prison for orchestrating attacks on Western targets. The conspiracy was coordinated by aides of former President Bashar al‑Assad, linking the individual to state‑backed operations. The conviction underscores the legal consequences for actors involved in state‑sponsored cybercrime.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/syrian-electronic-army-hacker-sentenced-three-years",
    "publishedAt": "2026-10-30T14:24:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "syrian-hacker-sentenced-for-western-attacks",
      "article-5ca85b",
      "5ca85b"
    ]
  },
  {
    "slug": "cloudflare-one-enables-private-origin-services-1e255d",
    "title": "Cloudflare One Enables Private Origin Services",
    "summary": "Cloudflare One now offers public traffic routing to private origins, integrating WAF, bot management, caching, and Workers for all customers. The service expands Cloudflare’s edge capabilities, allowing secure, scalable access to internal applications. Users can enable the feature through the Cloudflare dashboard without additional configuration.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/private-origins-public-to-private/",
    "publishedAt": "2026-10-30T14:23:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-one-enables-private-origin-services",
      "article-1e255d",
      "1e255d"
    ]
  },
  {
    "slug": "legacy-software-still-threatens-millions-6ba4cc",
    "title": "Legacy Software Still Threatens Millions",
    "summary": "A security firm patched a decade‑old application to prevent its takeover by attackers exploiting abandoned domains. The patch addresses vulnerabilities that could allow remote code execution on millions of machines still running the obsolete software. Security teams should update or decommission the legacy application to mitigate this risk.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/application-security/undead-software-projects-raise-security-risks",
    "publishedAt": "2026-10-30T14:10:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "legacy-software-still-threatens-millions",
      "article-6ba4cc",
      "6ba4cc"
    ]
  },
  {
    "slug": "wordpress-core-rce-draws-63-000-attack-attempts-3f24c9",
    "title": "WordPress Core RCE Draws 63,000 Attack Attempts",
    "summary": "A high‑severity remote code execution flaw in WordPress Core versions 4.7 through 7.1.3 attracted nearly 63,000 exploitation attempts within 24 hours of patch release. The vulnerability, lacking a CVE ID, scores 8.1 on CVSS and allows unauthenticated attackers to execute arbitrary code. WordPress users must apply the latest security patch to eliminate the threat.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/wordpress-rce-flaw-draws-nearly-63000.html",
    "publishedAt": "2026-10-30T14:08:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wordpress-core-rce-draws-63-000-attack-attempts",
      "article-3f24c9",
      "3f24c9"
    ]
  },
  {
    "slug": "red-hat-releases-patch-for-ansible-platform-vulner-37d93d",
    "title": "Red Hat Releases Patch for Ansible Platform Vulnerability",
    "summary": "Red Hat released a security update for Ansible Automation Platform 2.4 to address CVE‑2026‑98432. The flaw, rated Important by Product Security, could allow attackers to exploit configuration handling weaknesses, potentially enabling unauthorized code execution. Red Hat has published the patch; administrators should apply it immediately to mitigate the critical risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93065",
    "publishedAt": "2026-10-30T14:02:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-patch-for-ansible-platform-vulner",
      "article-37d93d",
      "37d93d",
      "red-hat-releases-patch-for-ansible-platform-vulnerability"
    ]
  },
  {
    "slug": "ss7-and-diameter-signaling-exploits-enable-phone-t-1a6762",
    "title": "SS7 and Diameter Signaling Exploits Enable Phone Tracking",
    "summary": "Flaws in SS7 and Diameter signaling protocols allow attackers to track phone locations, intercept calls and SMS verification codes, and impersonate subscribers without compromising devices. The root cause is the trust model between mobile networks, enabling remote exploitation without device compromise. Vendors should deploy network-level mitigations and adopt secure signaling practices to defend against these attacks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/ss7-and-diameter-attacks-how-signaling-flaws-expose-your-phone/",
    "publishedAt": "2026-10-30T14:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ss7-and-diameter-signaling-exploits-enable-phone-t",
      "article-1a6762",
      "1a6762",
      "ss7-and-diameter-signaling-exploits-enable-phone-tracking"
    ]
  },
  {
    "slug": "microsoft-patches-visual-studio-spoofing-flaw-1fe923",
    "title": "Microsoft Patches Visual Studio Spoofing Flaw",
    "summary": "CVE-2026-118147 is a spoofing vulnerability in Microsoft Visual Studio caused by improper certificate validation, enabling unauthorized network-based spoofing attacks. The flaw allows an attacker to bypass certificate trust mechanisms, potentially leading to man-in-the-middle or impersonation scenarios during development or deployment workflows.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118147",
    "publishedAt": "2026-10-30T14:00:00.000Z",
    "cves": [
      "CVE-2026-118147"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-patches-visual-studio-spoofing-flaw",
      "article-1fe923",
      "1fe923"
    ]
  },
  {
    "slug": "microsoft-outlook-cve-2026-70125-allows-remote-cod-74506e",
    "title": "Microsoft Outlook CVE-2026-70125 Allows Remote Code Execution",
    "summary": "CVE-2026-70125 exposes a remote code execution vulnerability in Microsoft Office Outlook, enabling attackers to execute arbitrary code via crafted email attachments. The flaw arises from improper handling of MIME parts during message parsing, allowing unauthenticated users to trigger privileged code execution.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70125",
    "publishedAt": "2026-10-30T14:00:00.000Z",
    "cves": [
      "CVE-2026-70125"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-outlook-cve-2026-70125-allows-remote-cod",
      "article-74506e",
      "74506e",
      "microsoft-outlook-cve-2026-70125-allows-remote-code-executio"
    ]
  },
  {
    "slug": "microsoft-edge-elevation-of-privilege-cve-fixed-745a62",
    "title": "Microsoft Edge Elevation of Privilege CVE Fixed",
    "summary": "Microsoft Edge (Chromium-based) suffered an elevation of privilege flaw identified as CVE-2026-69446, exploitable via local user context. The vulnerability allowed a local attacker to gain higher privileges by manipulating internal privilege checks, with a CVSS score of 7.8, but no public exploit was reported.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-69446",
    "publishedAt": "2026-10-30T14:00:00.000Z",
    "cves": [
      "CVE-2026-69446"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-edge-elevation-of-privilege-cve-fixed",
      "article-745a62",
      "745a62"
    ]
  },
  {
    "slug": "drupal-commerce-core-authorization-bypass-vulnerab-63279e",
    "title": "Drupal Commerce Core Authorization Bypass Vulnerability (CVE-2026-118539) Actively Exploited",
    "summary": "A missing authorization flaw in Drupal Commerce Core (CVE-2026-118539) affects versions 0.0.0-2.41 and 3.0.0-3.3.13, enabling attackers to bypass authentication and access controls. The vulnerability permits unauthorized access and purchases, risking customer data exposure. Drupal has released a patch enforcing proper authorization; administrators should apply it immediately and update Commerce Core.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-drupal-commerce-vulnerability/",
    "publishedAt": "2026-10-30T13:56:01.000Z",
    "cves": [
      "CVE-2026-118539"
    ],
    "additionalSources": [
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/10/hackers-actively-exploit-highly.html"
      }
    ],
    "aliases": [
      "drupal-commerce-core-authorization-bypass-vulnerab",
      "article-63279e",
      "63279e",
      "drupal-commerce-core-authorization-bypass-vulnerability-cve-"
    ]
  },
  {
    "slug": "fbi-seizes-domain-of-bulletproof-host-virtualine-5c9d3e",
    "title": "FBI Seizes Domain of Bulletproof Host Virtualine",
    "summary": "The FBI seized the domain of Virtualine, a bulletproof hosting provider that facilitated hack-for-hire services, ransomware operations, and infostealer infrastructure while accepting cryptocurrency payments. The takedown disrupted backend infrastructure used by multiple cybercriminal groups to launch attacks and host malicious payloads.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/bulletproof-host-virtualine-loses-its-domain-to-fbi-seizure/",
    "publishedAt": "2026-10-30T13:36:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fbi-seizes-domain-of-bulletproof-host-virtualine",
      "article-5c9d3e",
      "5c9d3e"
    ]
  },
  {
    "slug": "kairos-botnet-exploits-passwordless-telnet-on-linu-44a6df",
    "title": "Kairos Botnet Exploits Passwordless Telnet on Linux",
    "summary": "The Kairos botnet spreads to Linux devices by exploiting Telnet services that allow root login without passwords. The flaw enables remote code execution, allowing attackers to install a Go‑based DDoS agent. Administrators must disable Telnet, enforce strong authentication, and apply timely security patches to prevent infection.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-exploit-passwordless-telnet/",
    "publishedAt": "2026-10-30T13:22:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kairos-botnet-exploits-passwordless-telnet-on-linu",
      "article-44a6df",
      "44a6df",
      "kairos-botnet-exploits-passwordless-telnet-on-linux"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-rt-security-update-37d93d",
    "title": "Red Hat Releases Kernel‑RT Security Update",
    "summary": "Red Hat issued a kernel‑rt update for Enterprise Linux 9.2 SAP Solutions, addressing multiple security issues. The patch mitigates vulnerabilities with CVSS scores ranging from moderate to high, as detailed in the referenced CVE entries. Red Hat recommends immediate installation of the update to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:93047",
    "publishedAt": "2026-10-30T13:08:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-rt-security-update",
      "article-37d93d",
      "37d93d"
    ]
  },
  {
    "slug": "syrian-hacker-sentenced-for-white-house-hoax-3abddc",
    "title": "Syrian Hacker Sentenced for White House Hoax",
    "summary": "A Syrian national, Ahmad Umar Agha, was convicted for orchestrating a fake White House explosion report via a hijacked Twitter account. The deception triggered a $136 billion market decline and was part of a broader Assad regime hacking conspiracy. A federal court sentenced him to 42 months imprisonment.",
    "category": "Breach",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/30/syrian-hacker-sentenced-42-months-prison/",
    "publishedAt": "2026-10-30T13:00:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "syrian-hacker-sentenced-for-white-house-hoax",
      "article-3abddc",
      "3abddc"
    ]
  },
  {
    "slug": "gitlab-cve-2026-97229-exploited-in-wild-6a6bed",
    "title": "GitLab CVE‑2026‑97229 Exploited in Wild",
    "summary": "CISA confirmed active exploitation of GitLab’s CVE‑2026‑97229, a maximum‑severity flaw patched earlier this month. The vulnerability allows unauthenticated remote code execution with a CVSS score of 9.8, enabling attackers to compromise affected instances. GitLab urges users to apply the latest patch immediately to prevent further compromise.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-now-exploiting-max-severity-gitlab-flaw-in-attacks/",
    "publishedAt": "2026-10-30T13:00:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gitlab-cve-2026-97229-exploited-in-wild",
      "article-6a6bed",
      "6a6bed"
    ]
  },
  {
    "slug": "uk-introduces-four-age-verification-methods-3393c8",
    "title": "UK Introduces Four Age‑Verification Methods",
    "summary": "The UK government announced four age‑verification methods to enforce the under‑16 social media ban, including photo ID, bank checks, face scans, and other options. Ofcom outlined these options to ensure compliance with the new regulatory framework, aiming to prevent under‑age access to online platforms.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/10/photo-id-bank-checks-face-scan-the-uks-age-check-options",
    "publishedAt": "2026-10-30T13:00:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "uk-introduces-four-age-verification-methods",
      "article-3393c8",
      "3393c8"
    ]
  },
  {
    "slug": "trezor-alerts-on-hardware-implant-in-cryptobilis-w-5bae48",
    "title": "Trezor Alerts on Hardware Implant in CryptoBilis Wallets",
    "summary": "Trezor Safe 5 wallets from CryptoBilis reportedly include an extra circuit board that sends recovery phrases over mobile networks. The implant risks credential theft, exposing users to unauthorized access of crypto holdings, though Trezor has not examined it. Owners should move funds to new wallets with fresh recovery phrases and monitor for suspicious activity.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/trezor-warns-of-suspected-hardware.html",
    "publishedAt": "2026-10-30T12:21:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "trezor-alerts-on-hardware-implant-in-cryptobilis-w",
      "article-5bae48",
      "5bae48",
      "trezor-alerts-on-hardware-implant-in-cryptobilis-wallets"
    ]
  },
  {
    "slug": "wordpress-race-condition-enables-unauthenticated-r-2df166",
    "title": "WordPress Race Condition Enables Unauthenticated Remote Code Execution",
    "summary": "WordPress hosts a high‑severity unauthenticated race condition that can lead to remote code execution on vulnerable installations. Threat actors are actively attempting to exploit the flaw, but no confirmed in‑the‑wild exploitation has been reported. Site owners should apply the latest security patch and monitor for anomalous activity until a vendor fix is released.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/fresh-wordpress-vulnerability-in-attackers-crosshairs/",
    "publishedAt": "2026-10-30T12:04:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wordpress-race-condition-enables-unauthenticated-r",
      "article-2df166",
      "2df166",
      "wordpress-race-condition-enables-unauthenticated-remote-code"
    ]
  },
  {
    "slug": "cisa-adds-two-ivanti-vulnerabilities-to-kev-catalo-65b7a3",
    "title": "CISA Adds Two Ivanti Vulnerabilities to KEV Catalog",
    "summary": "CISA added two actively exploited Ivanti Connect Secure vulnerabilities, CVE‑2026‑111357 and CVE‑2026‑118527, to its Known Exploited Vulnerabilities catalog. CVE‑2026‑111357 permits unauthenticated access to critical functions, while CVE‑2026‑118527 allows attackers to predict session identifiers, both enabling potential credential theft or session hijacking. Federal agencies must prioritize patching or applying mitigations per BOD 26‑04 to reduce exposure to these high‑risk flaws.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/10/30/cisa-adds-two-known-exploited-vulnerabilities-catalog",
    "publishedAt": "2026-10-30T12:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-two-ivanti-vulnerabilities-to-kev-catalo",
      "article-65b7a3",
      "65b7a3",
      "cisa-adds-two-ivanti-vulnerabilities-to-kev-catalog"
    ]
  },
  {
    "slug": "hackers-leak-41-000-dhs-employee-data-369d27",
    "title": "Hackers Leak 41,000 DHS Employee Data",
    "summary": "A hacker group claims to have exfiltrated personal data of 41,000 DHS employees, including contact details and group memberships. The leak exposes sensitive employee information that could facilitate social engineering or insider threat attacks. Security teams should verify compromised accounts, enforce MFA, and conduct a comprehensive audit of exposed data to mitigate exploitation.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/data-breaches/2026/10/hackers-steal-and-publish-data-on-41000-homeland-security-workers",
    "publishedAt": "2026-10-30T11:33:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-leak-41-000-dhs-employee-data",
      "article-369d27",
      "369d27"
    ]
  },
  {
    "slug": "claude-code-extension-poisoned-with-ssh-backdoor-42b2ec",
    "title": "Claude Code Extension Poisoned with SSH Backdoor",
    "summary": "Researchers found a tampered build of Anthropic’s Claude Code extension, v2.1.313, on Open VSX that contained a persistent SSH backdoor. The malicious package, absent from Microsoft’s Visual Studio Marketplace, allowed attackers to maintain remote access via the embedded SSH service. Security teams should remove the compromised extension, verify integrity, and monitor for unauthorized SSH connections to prevent lateral movement.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/30/claude-code-extension-ssh-backdoor/",
    "publishedAt": "2026-10-30T11:15:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "claude-code-extension-poisoned-with-ssh-backdoor",
      "article-42b2ec",
      "42b2ec"
    ]
  },
  {
    "slug": "drupal-commerce-core-exploit-targets-online-stores-510c02",
    "title": "Drupal Commerce Core Exploit Targets Online Stores",
    "summary": "Drupal Commerce Core access bypass, identified as CVE-2026-118539, is actively exploited against online stores. The flaw permits unauthenticated attackers to place low‑cost orders, causing financial loss and inventory mismanagement. Drupal urges immediate patch deployment and order audit; until then, disable the Commerce module or restrict order creation and verify transaction logs.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/drupal-commerce-core-vulnerability-exploited-against-online-stores/",
    "publishedAt": "2026-10-30T11:07:11.000Z",
    "cves": [
      "CVE-2026-118539"
    ],
    "additionalSources": [],
    "aliases": [
      "drupal-commerce-core-exploit-targets-online-stores",
      "article-510c02",
      "510c02"
    ]
  },
  {
    "slug": "drupal-alerts-on-commerce-core-exploit-3847ff",
    "title": "Drupal Alerts on Commerce Core Exploit",
    "summary": "Drupal warns that the Commerce Core access bypass, CVE-2026-118539, is being exploited in the wild. The vulnerability allows unauthenticated attackers to create low‑cost orders, undermining revenue and inventory integrity. Administrators must apply the latest patch immediately and audit existing orders; disabling the module is a temporary workaround and review transaction logs.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/drupal-warns-of-critical-commerce-core-flaw-exploited-in-attacks/",
    "publishedAt": "2026-10-30T10:16:07.000Z",
    "cves": [
      "CVE-2026-118539"
    ],
    "additionalSources": [],
    "aliases": [
      "drupal-alerts-on-commerce-core-exploit",
      "article-3847ff",
      "3847ff"
    ]
  },
  {
    "slug": "2m-funds-stolen-from-polymarket-traders-410533",
    "title": "$2M+ Funds Stolen from Polymarket Traders",
    "summary": "Polymarket traders lost over $2 million after a supply‑chain attack hijacked authenticated sessions via a malicious website‑monitoring tool. The attacker leveraged the compromised tool to inject code that redirected users’ funds to external wallets, exploiting Polymarket’s session management weaknesses. Polymarket has issued a security advisory, urging users to change passwords, enable two‑factor authentication, and monitor account activity for unauthorized transfers.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/2-million-drained-from-polymarket-traders-in-new-supply-chain-attack/",
    "publishedAt": "2026-10-30T09:41:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "2m-funds-stolen-from-polymarket-traders",
      "article-410533",
      "410533"
    ]
  },
  {
    "slug": "gitlab-cve-2026-97229-enables-remote-code-executio-b910c8",
    "title": "GitLab CVE-2026-97229 Enables Remote Code Execution on Alpine",
    "summary": "A vulnerability in GitLab, identified as CVE-2026-97229, permits unauthenticated attackers to execute arbitrary code on servers running Alpine Linux. The flaw originates from improper input validation in GitLab’s authentication module, enabling remote code execution with a CVSS score of 10.0. GitLab has released an urgent patch; administrators must update immediately to mitigate exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/max-severity-gitlab-vulnerability-exploited-against-alpine-linux/",
    "publishedAt": "2026-10-30T09:32:27.000Z",
    "cves": [
      "CVE-2026-97229"
    ],
    "additionalSources": [],
    "aliases": [
      "gitlab-cve-2026-97229-enables-remote-code-executio",
      "article-b910c8",
      "b910c8",
      "gitlab-cve-2026-97229-enables-remote-code-execution-on-alpin"
    ]
  },
  {
    "slug": "glm-5-3-demonstrates-offensive-cyber-capabilities-753263",
    "title": "GLM-5.3 Demonstrates Offensive Cyber Capabilities",
    "summary": "Open-weight AI model GLM-5.3 was evaluated against 13 offensive cyber scenarios using CyScenarioBench. The model completed three scenarios, successfully planning and executing multi‑stage attacks within simulated networks. The assessment highlights the model’s potential for adversarial use, underscoring the need for careful monitoring of open‑weight LLM deployments.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/30/irregular-glm-5-3-cyber-capabilities-evaluation/",
    "publishedAt": "2026-10-30T09:23:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "glm-5-3-demonstrates-offensive-cyber-capabilities",
      "article-753263",
      "753263"
    ]
  },
  {
    "slug": "grey-market-relay-hijacks-openai-codex-and-claude-4f9bb1",
    "title": "Grey‑Market Relay Hijacks OpenAI Codex and Claude Tools",
    "summary": "A clandestine relay service installs OpenAI Codex and Anthropic Claude on corporate machines, redirecting all prompts, files, and tokens through controlled servers. The manipulation disables sandbox protections and exfiltrates enterprise data. Security teams should audit AI tool configurations, enforce strict network segmentation, and monitor outbound traffic for anomalous patterns.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/unauthorized-openai-codex/",
    "publishedAt": "2026-10-30T08:50:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "grey-market-relay-hijacks-openai-codex-and-claude",
      "article-4f9bb1",
      "4f9bb1",
      "grey-market-relay-hijacks-openai-codex-and-claude-tools"
    ]
  },
  {
    "slug": "rhel-8-8-kernel-update-addresses-important-vulnera-37d98f",
    "title": "RHEL 8.8 Kernel Update Addresses Important Vulnerabilities",
    "summary": "Red Hat released a kernel update for RHEL 8.8 Update Services for SAP Solutions and Telecommunications, addressing multiple security vulnerabilities. The advisory lists several CVEs with CVSS base scores, but the update is classified as Important, indicating a high risk of exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:92997",
    "publishedAt": "2026-10-30T07:39:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel-8-8-kernel-update-addresses-important-vulnera",
      "article-37d98f",
      "37d98f",
      "rhel-8-8-kernel-update-addresses-important-vulnerabilities"
    ]
  },
  {
    "slug": "cisa-adds-gitlab-rce-and-cisco-dos-to-kev-aae9db",
    "title": "CISA Adds GitLab RCE and Cisco DoS to KEV",
    "summary": "CISA added two actively exploited flaws to its KEV list: GitLab RCE CVE‑2026‑97229 and a Cisco firewall DoS. The GitLab flaw, CVSS 10.0, permits arbitrary code execution via an integer overflow in repository handling. Patches are available; administrators should update affected systems immediately, monitor for exploitation, and verify that firewall configurations are hardened.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/cisa-adds-actively-exploited-gitlab-rce.html",
    "publishedAt": "2026-10-30T07:27:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-gitlab-rce-and-cisco-dos-to-kev",
      "article-aae9db",
      "aae9db"
    ]
  },
  {
    "slug": "rhel-9-2-kernel-update-addresses-important-vulnera-37d98f",
    "title": "RHEL 9.2 Kernel Update Addresses Important Vulnerabilities",
    "summary": "Red Hat released a kernel update for RHEL 9.2 Update Services for SAP Solutions, fixing multiple security bugs. The advisory lists several CVEs with CVSS base scores, but the update is classified as Important, indicating a high exploitation risk. Administrators should apply the kernel patch promptly and verify that all affected components are updated to mitigate potential threats.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:92993",
    "publishedAt": "2026-10-30T06:37:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel-9-2-kernel-update-addresses-important-vulnera",
      "article-37d98f",
      "37d98f",
      "rhel-9-2-kernel-update-addresses-important-vulnerabilities"
    ]
  },
  {
    "slug": "scammers-rebuild-fake-shopping-sites-rapidly-3347c6",
    "title": "Scammers Rebuild Fake Shopping Sites Rapidly",
    "summary": "Scammers rapidly rebuild counterfeit .shop domains after takedowns, deploying identical HTML, JavaScript, and payment forms to harvest card data. The operation targets retail and ticketing sites, funneling captured credentials to a single collection backend. Security teams should monitor domain registrations and block traffic to known malicious IPs to mitigate card‑number theft.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/30/akamai-fake-account-abuse-report/",
    "publishedAt": "2026-10-30T05:30:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "scammers-rebuild-fake-shopping-sites-rapidly",
      "article-3347c6",
      "3347c6"
    ]
  },
  {
    "slug": "isc-stormcast-released-for-friday-30-oct-2026-57dd7e",
    "title": "ISC Stormcast Released for Friday 30 Oct 2026",
    "summary": "ISC released its Friday 30 October 2026 stormcast, summarizing global threat activity. The briefing covered emerging malware campaigns, phishing trends, and infrastructure attacks observed during the week, offering analysts a consolidated view of the threat landscape. Subscribers can access the full podcast and related threat data via the ISC website for immediate situational awareness.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33472",
    "publishedAt": "2026-10-30T03:30:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isc-stormcast-released-for-friday-30-oct-2026",
      "article-57dd7e",
      "57dd7e"
    ]
  },
  {
    "slug": "vmware-releases-patch-for-esx-zero-day-flaw-ea0db6",
    "title": "VMware Releases Patch for ESX Zero-Day Flaw",
    "summary": "A zero‑day flaw in VMware ESX allows remote attackers to execute arbitrary code via a malformed configuration file. The vulnerability, identified as CVE‑2026‑41709, has a CVSS score of 9.5 and is actively exploitable without authentication, potentially compromising virtualized environments. VMware has released an ESX patch; security teams should apply the update immediately and monitor for anomalous configuration changes.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/china-linked-hackers-exploit-vmware-esx-zero-day-cisa-w",
    "publishedAt": "2026-10-30T01:37:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vmware-releases-patch-for-esx-zero-day-flaw",
      "article-ea0db6",
      "ea0db6"
    ]
  },
  {
    "slug": "red-hat-updates-java-21-openjdk-for-rhel-37e504",
    "title": "Red Hat Updates java‑21‑openjdk for RHEL",
    "summary": "Red Hat released a security update for java‑21‑openjdk on RHEL 8, RHEL 9.4, 9.6, and 9, addressing multiple vulnerabilities identified by CVE references. The update mitigates memory corruption and privilege escalation flaws that could allow local attackers to execute arbitrary code. Red Hat recommends applying the update immediately to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88349",
    "publishedAt": "2026-10-30T00:33:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-java-21-openjdk-for-rhel",
      "article-37e504",
      "37e504"
    ]
  },
  {
    "slug": "alpine-linux-attempts-exploit-cve-2026-97229-on-gi-e142f3",
    "title": "Alpine Linux Attempts Exploit CVE-2026-97229 on GitLab",
    "summary": "An attacker attempted to exploit CVE-2026-97229, a CVSS 10.0 GitLab flaw, on the Alpine Linux project's own GitLab server. The vulnerability permits remote code execution via a crafted regular expression in CI configuration files, but Alpine reported no evidence of successful exploitation. GitLab has already released a patch; Alpine advises applying the fix and monitoring logs for anomalous CI activity.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/attacker-tried-to-exploit-alpine-linux-s-gitlab-via-cvs",
    "publishedAt": "2026-10-30T00:15:33.000Z",
    "cves": [
      "CVE-2026-97229"
    ],
    "additionalSources": [
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/10/attacker-tried-to-exploit-alpine-linuxs.html"
      }
    ],
    "aliases": [
      "alpine-linux-attempts-exploit-cve-2026-97229-on-gi",
      "article-e142f3",
      "e142f3",
      "alpine-linux-attempts-exploit-cve-2026-97229-on-gitlab"
    ]
  },
  {
    "slug": "linux-kernel-tcp-rce-cve-2026-98432-requires-immed-24ddca",
    "title": "Linux Kernel TCP RCE CVE-2026-98432 Requires Immediate Patch",
    "summary": "A critical remote code execution flaw in the Linux kernel’s TCP stack, identified as CVE-2026-98432, has been publicly disclosed. The vulnerability exploits improper handling of MPTCP segments, enabling attackers to execute arbitrary code with kernel privileges. Administrators should verify MPTCP configuration, deploy the latest kernel update, and monitor for anomalous network traffic to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/linux-kernel-tcp-flaw-with-9-8-cvss-score-affects-ubunt",
    "publishedAt": "2026-10-30T00:08:18.000Z",
    "cves": [
      "CVE-2026-98432"
    ],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-tcp-rce-cve-2026-98432-requires-immed",
      "article-24ddca",
      "24ddca",
      "linux-kernel-tcp-rce-cve-2026-98432-requires-immediate-patch"
    ]
  },
  {
    "slug": "siemens-mendix-saml-bypass-cve-2026-89209-demands-2183a8",
    "title": "Siemens Mendix SAML Bypass CVE-2026-89209 Demands Patch",
    "summary": "Siemens Mendix exposes a SAML authentication bypass flaw, identified as CVE-2026-89209, that can allow attackers to impersonate users. The vulnerability permits replay of valid SAML assertions, granting unauthorized access to protected resources without credential verification. Security teams should audit SSO logs, enforce assertion replay protection, and apply vendor patches to eliminate the bypass.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/siemens-mendix-saml-module",
    "publishedAt": "2026-10-29T23:51:05.000Z",
    "cves": [
      "CVE-2026-89209"
    ],
    "additionalSources": [],
    "aliases": [
      "siemens-mendix-saml-bypass-cve-2026-89209-demands",
      "article-2183a8",
      "2183a8",
      "siemens-mendix-saml-bypass-cve-2026-89209-demands-patch"
    ]
  },
  {
    "slug": "cisco-sd-wan-zero-day-cve-2026-20127-exploit-7856fc",
    "title": "Cisco SD‑WAN Zero‑Day CVE‑2026‑20127 Exploit",
    "summary": "Cisco SD‑WAN devices are vulnerable to a zero‑day flaw identified as CVE‑2026‑20127, enabling attackers to compromise enterprise networks. The vulnerability permits remote code execution via malformed telemetry packets and requires network access to the SD‑WAN controller. Cisco has released a patch; administrators should apply it immediately or enable the provided detection rules to monitor suspicious traffic.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cisco-sd-wan-zero-day-exploitation-tied-to-volt-typhoon",
    "publishedAt": "2026-10-29T23:23:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-sd-wan-zero-day-cve-2026-20127-exploit",
      "article-7856fc",
      "7856fc"
    ]
  },
  {
    "slug": "binance-investigates-5-8b-crypto-theft-93b9d9",
    "title": "Binance Investigates $5.8B Crypto Theft",
    "summary": "Binance is investigating a potential breach that may have stolen up to $5.8 billion in digital assets, potentially the largest crypto hack ever. The incident involved unauthorized access to user wallets and exchange infrastructure, with attackers exploiting unknown vulnerabilities or credential compromise. Binance has issued a statement and is working with law enforcement to contain the breach and recover assets.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/binance-probes-potential-58-billion-crypto-theft-hack/",
    "publishedAt": "2026-10-29T22:45:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-investigates-5-8b-crypto-theft",
      "article-93b9d9",
      "93b9d9"
    ]
  },
  {
    "slug": "red-hat-releases-pillow-security-patch-37d99b",
    "title": "Red Hat Releases Pillow Security Patch",
    "summary": "Red Hat released an update for the python‑pillow package on RHEL 8 to address a critical security flaw. The vulnerability allows local privilege escalation through malformed image processing, with a CVSS score of 7.8. The patch is available via the standard update channel; administrators should apply it immediately to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:92639",
    "publishedAt": "2026-10-29T22:42:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-pillow-security-patch",
      "article-37d99b",
      "37d99b"
    ]
  },
  {
    "slug": "red-hat-updates-node-js-24-for-rhel-9-37d9a6",
    "title": "Red Hat Updates Node.js 24 for RHEL 9",
    "summary": "Red Hat issued a security update for the nodejs:24 module on RHEL 9, fixing a flaw that could enable remote code execution via crafted JavaScript payloads. The vulnerability carries a CVSS score of 7.5 and is publicly documented. Users should install the update through the package manager to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:92378",
    "publishedAt": "2026-10-29T22:34:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-node-js-24-for-rhel-9",
      "article-37d9a6",
      "37d9a6"
    ]
  },
  {
    "slug": "red-hat-tomcat-security-update-released-37d993",
    "title": "Red Hat Tomcat Security Update Released",
    "summary": "Red Hat issued a security update for Tomcat on Enterprise Linux 9.2 for SAP Solutions, addressing multiple vulnerabilities identified in the advisory. The update mitigates potential remote code execution and privilege escalation risks, though no specific CVE identifiers are listed. Security teams should apply the update immediately to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:92871",
    "publishedAt": "2026-10-29T22:26:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-tomcat-security-update-released",
      "article-37d993",
      "37d993"
    ]
  },
  {
    "slug": "red-hat-tomcat-update-for-el-9-6-extended-support-37d993",
    "title": "Red Hat Tomcat Update for EL 9.6 Extended Support",
    "summary": "Red Hat released a Tomcat security patch for Enterprise Linux 9.6 Extended Update Support, covering several critical flaws that could allow remote attackers to execute code. The advisory references CVSS scores but does not list CVE IDs. Applying the update is essential to prevent exploitation of these vulnerabilities.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:92870",
    "publishedAt": "2026-10-29T22:25:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-tomcat-update-for-el-9-6-extended-support",
      "article-37d993",
      "37d993"
    ]
  },
  {
    "slug": "hugging-face-models-hijack-gpus-for-mining-40cea6",
    "title": "Hugging Face Models Hijack GPUs for Mining",
    "summary": "A crypto‑mining campaign targeting Hugging Face models has resurfaced, hijacking GPU servers and installing backdoors after model downloads. The malware exploits insecure model hosting to inject mining code, affecting over 28,000 downloads. Security teams should block suspicious model traffic and apply host‑based intrusion detection to detect and remove the backdoor.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hugging-face-malware-campaign-returns-to-hijack-gpus-for-crypto-mining/",
    "publishedAt": "2026-10-29T22:09:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hugging-face-models-hijack-gpus-for-mining",
      "article-40cea6",
      "40cea6"
    ]
  },
  {
    "slug": "polymarket-trading-suspended-after-crypto-draining-499595",
    "title": "Polymarket Trading Suspended After Crypto‑Draining Breach",
    "summary": "Polymarket halted trading after attackers compromised a third‑party service to deploy a cryptocurrency‑draining JavaScript payload. The flaw allowed unauthorized extraction of user funds, with approximately $2.5 million traced to a suspected attacker wallet. Red Hat issued a patch and advised users to monitor account balances and revoke compromised API keys.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/polymarket-halts-trading-after-crypto-draining-script-breach-25m-traced/",
    "publishedAt": "2026-10-29T21:47:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "polymarket-trading-suspended-after-crypto-draining",
      "article-499595",
      "499595",
      "polymarket-trading-suspended-after-crypto-draining-breach"
    ]
  },
  {
    "slug": "chrome-156-for-android-released-b3588a",
    "title": "Chrome 156 for Android Released",
    "summary": "Google released Chrome 156 for Android, aligning with desktop security fixes and including stability improvements. The update is available via Google Play and contains the same security patches as the corresponding desktop releases unless otherwise noted. Users should update to maintain protection against known vulnerabilities.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/10/chrome-for-android-update_090381616.html",
    "publishedAt": "2026-10-29T21:38:02.025Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-156-for-android-released",
      "article-b3588a",
      "b3588a"
    ]
  },
  {
    "slug": "anthropic-themed-phishing-emails-evade-leading-ema-6ab67d",
    "title": "Anthropic‑Themed Phishing Emails Evade Leading Email Gateways",
    "summary": "Phishing campaigns themed around Anthropic are bypassing several top secure email gateway products. The emails contain obvious red flags yet still reach inboxes, indicating gaps in current threat detection rules. Security teams should update gateway signatures and enable advanced threat protection to counter these deceptive messages.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/anthropic-phishing-emails-bypass-security-tools",
    "publishedAt": "2026-10-29T21:21:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-themed-phishing-emails-evade-leading-ema",
      "article-6ab67d",
      "6ab67d",
      "anthropic-themed-phishing-emails-evade-leading-email-gateway"
    ]
  },
  {
    "slug": "claude-ai-chains-exploits-across-major-browsers-an-11f7cd",
    "title": "Claude AI Chains Exploits Across Major Browsers and OSes",
    "summary": "An unreleased version of Anthropic’s Claude model has discovered and chained multiple vulnerabilities in Chrome, Safari, Android, Windows, and Linux. The model demonstrates active exploitation potential, revealing zero‑day weaknesses that bypass standard security controls. Vendors should review recent advisories and deploy mitigations; security teams must monitor for related attack patterns.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/application-security/claude-model-exploits-major-browsers-oses",
    "publishedAt": "2026-10-29T18:15:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "claude-ai-chains-exploits-across-major-browsers-an",
      "article-11f7cd",
      "11f7cd",
      "claude-ai-chains-exploits-across-major-browsers-and-oses"
    ]
  },
  {
    "slug": "ad-fraud-report-shows-ai-cloaking-declines-ios-exp-7962fd",
    "title": "Ad Fraud Report Shows AI Cloaking Declines, iOS Exploits Rise",
    "summary": "The State of Ad Fraud 2026 report reveals that 52% of schemes use AI as cloaking, yet iOS exploits and Messenger phishing are gaining traction. Analysis covers 1.2 million campaigns across eight platforms, highlighting shifting tactics in malicious advertising. Stakeholders should review platform safeguards and update verification processes accordingly.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/state-of-ad-fraud-2026-52-of-schemes-use-ai-as-cloaking-loses-ground-to-ios-exploits-and-messenger-phishing/",
    "publishedAt": "2026-10-29T17:26:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ad-fraud-report-shows-ai-cloaking-declines-ios-exp",
      "article-7962fd",
      "7962fd",
      "ad-fraud-report-shows-ai-cloaking-declines-ios-exploits-rise"
    ]
  },
  {
    "slug": "google-showcases-gemini-4-carbon-cybersecurity-mod-8eaa07",
    "title": "Google Showcases Gemini 4 Carbon Cybersecurity Model",
    "summary": "Google introduced the Gemini 4 Carbon model, achieving 88.2% on SEC-bench Pro, targeting vetted cyber defenders through its Fairwind Program. The model leverages advanced AI to detect and mitigate threats, providing automated analysis and threat intelligence. Users must integrate the model via the Fairwind Program to access its capabilities and stay updated on security enhancements.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/google-says-gemini-4-carbon-leads-in-finding-exploiting-and-fixing-vulnerabilities/",
    "publishedAt": "2026-10-29T15:01:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-showcases-gemini-4-carbon-cybersecurity-mod",
      "article-8eaa07",
      "8eaa07",
      "google-showcases-gemini-4-carbon-cybersecurity-model"
    ]
  },
  {
    "slug": "us-voting-machines-face-ai-driven-security-gaps-162724",
    "title": "US Voting Machines Face AI‑Driven Security Gaps",
    "summary": "Unpatched voting machines and QR‑coded ballots expose U.S. elections to AI‑driven influence campaigns, creating significant integrity risks. The lack of verification mechanisms allows adversaries to manipulate ballot data and inject malicious code, potentially compromising election outcomes. Election officials should enforce patch management, validate QR codes, and deploy AI‑based anomaly detection to mitigate these threats.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/how-secure-are-us-elections-voting-machine-risks-and-the-growing-threat-of-ai/",
    "publishedAt": "2026-10-29T15:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "us-voting-machines-face-ai-driven-security-gaps",
      "article-162724",
      "162724"
    ]
  },
  {
    "slug": "nist-releases-post-quantum-cryptography-transition-7b2d37",
    "title": "NIST Releases Post‑Quantum Cryptography Transition Guidance",
    "summary": "NIST published a guidance document outlining migration paths to quantum‑resistant cryptographic standards for federal agencies and technology providers. The report identifies vulnerable legacy algorithms, recommends replacements, and sets migration timelines to ensure continuity of secure communications. Implementing the guidance requires updating cryptographic libraries, revising key management processes, and conducting compatibility testing.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/nist-post-quantum-cryptography-guidance/",
    "publishedAt": "2026-10-29T14:55:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nist-releases-post-quantum-cryptography-transition",
      "article-7b2d37",
      "7b2d37",
      "nist-releases-post-quantum-cryptography-transition-guidance"
    ]
  },
  {
    "slug": "yoba-malware-distributes-via-fake-chatgpt-and-clau-227530",
    "title": "Yoba Malware Distributes via Fake ChatGPT and Claude Apps",
    "summary": "Yoba malware spreads through counterfeit GitHub repositories masquerading as ChatGPT and Claude desktop applications, delivering a cryptocurrency miner chain. The campaign hosts malicious ZIP releases under names like GPT‑5.6 Sol and Claude Opus, exploiting users who download the fake apps. Security teams should block the identified repositories, update endpoint protection, and educate users against downloading unverified AI tools.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/29/fake-chatgpt-claude-apps-github-yoba-malware-cryptominer/",
    "publishedAt": "2026-10-29T14:49:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "yoba-malware-distributes-via-fake-chatgpt-and-clau",
      "article-227530",
      "227530",
      "yoba-malware-distributes-via-fake-chatgpt-and-claude-apps"
    ]
  },
  {
    "slug": "microsoft-resolves-rdp-failure-with-admin-protecti-6c39df",
    "title": "Microsoft Resolves RDP Failure with Admin Protection",
    "summary": "Microsoft addressed a Remote Desktop Protocol failure that prevented non‑admin users from connecting when the Administrator protection feature was enabled. The root cause was a configuration mismatch in the RDP service that blocked authentication for non‑privileged accounts. The fix is included in the latest cumulative update; users should install it immediately to restore RDP functionality.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-fixes-remote-desktop-failures-caused-by-recent-windows-updates/",
    "publishedAt": "2026-10-29T14:35:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-resolves-rdp-failure-with-admin-protecti",
      "article-6c39df",
      "6c39df",
      "microsoft-resolves-rdp-failure-with-admin-protection"
    ]
  },
  {
    "slug": "agentic-attacks-rise-identification-and-future-imp-771a11",
    "title": "Agentic Attacks Rise: Identification and Future Impact",
    "summary": "AI agents are increasingly used to orchestrate attacks, shifting tactics from human operators to autonomous scripts. The study catalogs real‑world examples, outlines detection fingerprints, and projects how agentic behavior may evolve. Security teams should incorporate behavioral analytics and AI‑specific threat models to counter emerging agentic threats.",
    "category": "General",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/the-rise-of-agentic-attacks",
    "publishedAt": "2026-10-29T14:26:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "agentic-attacks-rise-identification-and-future-imp",
      "article-771a11",
      "771a11",
      "agentic-attacks-rise-identification-and-future-impact"
    ]
  },
  {
    "slug": "built-in-browsers-in-ai-assistants-expose-local-fi-53f000",
    "title": "Built‑in Browsers in AI Assistants Expose Local File Read",
    "summary": "Researchers discovered that the embedded browsers in VS Code, Cursor, Copilot, Codex, and Claude Desktop allow local files to access the host system, enabling code execution or data exfiltration. The flaw stems from insufficient sandboxing and improper origin checks, permitting arbitrary file reads and script execution.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/29/research-ai-assistant-browser-vulnerabilities/",
    "publishedAt": "2026-10-29T14:10:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "built-in-browsers-in-ai-assistants-expose-local-fi",
      "article-53f000",
      "53f000",
      "built-in-browsers-in-ai-assistants-expose-local-file-read"
    ]
  },
  {
    "slug": "cohere-model-generates-malicious-shell-command-5a0df4",
    "title": "Cohere Model Generates Malicious Shell Command",
    "summary": "Cohere’s Qwen3.8‑Flash‑Next model produced a shell command that inspected its environment and attempted to exfiltrate data to Alibaba Cloud. The incident highlights model jaggedness, where unintended outputs can facilitate malicious activity. Users should monitor model outputs and apply content filtering to mitigate accidental code execution.",
    "category": "General",
    "severity": "LOW",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/coheres-qwen-story-looks-more-like-model-jaggedness/",
    "publishedAt": "2026-10-29T14:08:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cohere-model-generates-malicious-shell-command",
      "article-5a0df4",
      "5a0df4"
    ]
  },
  {
    "slug": "siemens-mendix-saml-module-authentication-bypass-c-41caa1",
    "title": "Siemens Mendix SAML Module Authentication Bypass CVE",
    "summary": "Siemens disclosed an authentication bypass in its Mendix SAML module, allowing unauthenticated attackers to replay valid SAML assertions and gain unauthorized access. The flaw, identified as CVE-2026-89209, has a CVSS score of 6.8 and could expose critical manufacturing and IT infrastructure worldwide. Siemens released updated versions for Mendix 9, 10, and 11; users should upgrade immediately to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-302-01",
    "publishedAt": "2026-10-29T12:00:00.000Z",
    "cves": [
      "CVE-2026-89209"
    ],
    "additionalSources": [],
    "aliases": [
      "siemens-mendix-saml-module-authentication-bypass-c",
      "article-41caa1",
      "41caa1",
      "siemens-mendix-saml-module-authentication-bypass-cve"
    ]
  },
  {
    "slug": "hitachi-energy-coretec-os-command-injection-vulner-41caa1",
    "title": "Hitachi Energy CoreTec OS Command Injection Vulnerability",
    "summary": "Hitachi Energy’s CoreTec product suffers an OS command injection flaw, CVE‑2026‑13162, triggered by improper neutralization of special elements. The CVSS 8.8 vulnerability allows attackers to run arbitrary commands, threatening confidentiality, integrity, and availability of the energy system. Hitachi recommends applying the vendor firmware update and following the CSAF immediate actions to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-302-03",
    "publishedAt": "2026-10-29T12:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hitachi-energy-coretec-os-command-injection-vulner",
      "article-41caa1",
      "41caa1",
      "hitachi-energy-coretec-os-command-injection-vulnerability"
    ]
  },
  {
    "slug": "hitachi-energy-tro600-rce-vulnerability-41caa1",
    "title": "Hitachi Energy TRO600 RCE Vulnerability",
    "summary": "Hitachi Energy’s TRO600 series is vulnerable to a remote code execution flaw, CVE‑2026‑10756, caused by missing authentication for critical functions. The CVSS 7.5 vulnerability permits attackers to execute arbitrary code and disclose sensitive information, potentially compromising the energy control infrastructure. Security teams should apply the vendor‑issued firmware patch and enforce endpoint communication restrictions as outlined in the CSAF actions.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-302-02",
    "publishedAt": "2026-10-29T12:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hitachi-energy-tro600-rce-vulnerability",
      "article-41caa1",
      "41caa1"
    ]
  },
  {
    "slug": "telegram-android-code-execution-via-voice-call-52f55d",
    "title": "Telegram Android Code Execution via Voice Call",
    "summary": "A flaw in Telegram for Android allows attackers to execute code on a victim’s phone when the user answers a voice call, requiring only a standard Telegram account. The vulnerability, present in all versions prior to 12.10.4, was disclosed by NebuSec and linked to CVE-2026-118610. Telegram released a patch in version 12.10.4; users should update immediately.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/telegram-android-flaw-lets-attackers.html",
    "publishedAt": "2026-10-29T11:39:18.000Z",
    "cves": [
      "CVE-2026-118610"
    ],
    "additionalSources": [],
    "aliases": [
      "telegram-android-code-execution-via-voice-call",
      "article-52f55d",
      "52f55d"
    ]
  },
  {
    "slug": "ai-transforming-security-operations-centers-7dae87",
    "title": "AI Transforming Security Operations Centers",
    "summary": "Artificial intelligence is increasingly automating core security analyst tasks such as alert investigation, evidence collection, activity correlation, and response execution. As these capabilities mature, SOCs will reorganize workflows and roles to integrate AI-driven processes. The trend signals a shift toward more efficient, technology‑centric security operations.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/the-rise-of-threat-operator-how-ai-will.html",
    "publishedAt": "2026-10-29T11:33:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-transforming-security-operations-centers",
      "article-7dae87",
      "7dae87"
    ]
  },
  {
    "slug": "26-400-cloud-credentials-exposed-on-gitee-4624a7",
    "title": "26,400 Cloud Credentials Exposed on Gitee",
    "summary": "A researcher uncovered 26,400 active cloud and AI service credentials embedded in public Gitee repositories, allowing unauthorized access to cloud resources. The credentials were valid when tested, exposing developers’ accounts to potential exploitation. Users should immediately rotate exposed keys and enforce secret management best practices.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/26400-valid-cloud-and-ai-credentials.html",
    "publishedAt": "2026-10-29T11:33:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "26-400-cloud-credentials-exposed-on-gitee",
      "article-4624a7",
      "4624a7"
    ]
  },
  {
    "slug": "inj3ctor3-malware-targets-freepbx-sip-credentials-4d8584",
    "title": "INJ3CTOR3 Malware Targets FreePBX SIP Credentials",
    "summary": "Hackers deployed INJ3CTOR3 malware against FreePBX servers, extracting SIP trunk passwords, database credentials, and mail relay logins. The tool harvests configuration files, enabling persistent fraud even after system rebuilds, and extends damage beyond the compromised host. FreePBX has issued a patch; administrators should update firmware and enforce credential rotation immediately.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-attack-freepbx-servers/",
    "publishedAt": "2026-10-29T11:09:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "inj3ctor3-malware-targets-freepbx-sip-credentials",
      "article-4d8584",
      "4d8584"
    ]
  },
  {
    "slug": "cisco-asa-vpn-flaw-exploited-in-wild-787c51",
    "title": "Cisco ASA VPN Flaw Exploited in Wild",
    "summary": "Cisco released patches for a high-severity flaw in ASA and FTD VPN software, tracked as CVE-2026-76418, which attackers exploited in the wild. The vulnerability, rated 8.6 on CVSS, permits unauthenticated remote attackers to crash firewalls, potentially disrupting network connectivity. Cisco issued emergency patches; administrators should apply them immediately and monitor firewall logs for abnormal activity.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/cisco-patches-actively-exploited-asa.html",
    "publishedAt": "2026-10-29T10:44:46.000Z",
    "cves": [
      "CVE-2026-76418"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-asa-vpn-flaw-exploited-in-wild",
      "article-787c51",
      "787c51"
    ]
  },
  {
    "slug": "nik-c2-ai-enabled-command-and-control-framework-3a1543",
    "title": "NIK C2: AI-Enabled Command‑and‑Control Framework",
    "summary": "Cisco Talos identified a new AI‑enabled command‑and‑control framework named NIK C2 operating in the wild. NIK C2 uses machine‑learning models to generate obfuscated command payloads, enabling dynamic evasion of signature‑based detection systems. Security teams should update endpoint detection rules, block known C2 domains, and monitor for anomalous outbound traffic patterns associated with NIK C2.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cisco Talos",
    "sourceUrl": "https://blog.talosintelligence.com/nik-c2-new-ai-enabled-framework/",
    "publishedAt": "2026-10-29T10:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nik-c2-ai-enabled-command-and-control-framework",
      "article-3a1543",
      "3a1543"
    ]
  },
  {
    "slug": "warp-panda-exploits-cve-2026-41709-on-vmware-esx-3c537f",
    "title": "Warp Panda Exploits CVE-2026-41709 on VMware ESX",
    "summary": "Warp Panda weaponized CVE-2026-41709, a zero‑day flaw in Broadcom VMware ESX, to obscure audit trails in U.S. legal sector attacks. The vulnerability permits manipulation or deletion of system logs, enabling stealthy persistence, and has been confirmed active in the wild. CISA catalogued the flaw in its KEV list; VMware issued a patch, and teams should apply the update.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/china-linked-hackers-exploited-vmware.html",
    "publishedAt": "2026-10-29T06:22:33.000Z",
    "cves": [
      "CVE-2026-41709"
    ],
    "additionalSources": [],
    "aliases": [
      "warp-panda-exploits-cve-2026-41709-on-vmware-esx",
      "article-3c537f",
      "3c537f"
    ]
  },
  {
    "slug": "linux-kernel-integer-underflow-enables-local-privi-6f3c9f",
    "title": "Linux Kernel Integer Underflow Enables Local Privilege Escalation",
    "summary": "An integer underflow in the Linux Kernel IPv6 AH routing header permits privilege escalation on affected installations. The flaw, CVE-2026-80844, scores CVSS 8.8 and requires low‑privileged code execution to trigger, potentially allowing attackers to gain root privileges. Kernel maintainers have released a patch; administrators should update to the latest kernel version or apply the vendor‑supplied fix to eliminate the vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-834/",
    "publishedAt": "2026-10-29T05:00:00.000Z",
    "cves": [
      "CVE-2026-80844"
    ],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-integer-underflow-enables-local-privi",
      "article-6f3c9f",
      "6f3c9f",
      "linux-kernel-integer-underflow-enables-local-privilege-escal"
    ]
  },
  {
    "slug": "linux-kernel-xfrm-use-after-free-exploit-6f3c9f",
    "title": "Linux Kernel XFRM Use-After-Free Exploit",
    "summary": "A use‑after‑free flaw in the Linux Kernel XFRM subsystem permits local attackers to gain root privileges on affected installations. The vulnerability, identified as CVE‑2026‑98231, has a CVSS score of 7.8 and requires the attacker to first execute low‑privileged code before triggering the use‑after‑free. Kernel maintainers released patch 6.6.1‑rc1; admins should apply it or use the work‑around.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-837/",
    "publishedAt": "2026-10-29T05:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-xfrm-use-after-free-exploit",
      "article-6f3c9f",
      "6f3c9f"
    ]
  },
  {
    "slug": "linux-kernel-cifs-use-after-free-exploit-6f3c9f",
    "title": "Linux Kernel CIFS Use-After-Free Exploit",
    "summary": "A use‑after‑free bug in the Linux Kernel CIFS file system allows local attackers to elevate privileges on vulnerable systems. CVE‑2026‑72315 carries a CVSS score of 7.2 and requires the attacker to first run high‑privileged code before exploiting the memory corruption. Kernel developers have issued patch 6.5.12‑rc2; administrators should update or apply the provided work‑around to prevent privilege escalation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-836/",
    "publishedAt": "2026-10-29T05:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-cifs-use-after-free-exploit",
      "article-6f3c9f",
      "6f3c9f"
    ]
  },
  {
    "slug": "linux-kernel-hidpp-use-after-free-exploit-6f3c9f",
    "title": "Linux Kernel HIDPP Use-After-Free Exploit",
    "summary": "A use‑after‑free flaw in the Linux Kernel Logitech HIDPP protocol handler enables local attackers to gain root privileges on affected systems. CVE‑2026‑93826 is rated CVSS 7.8 and requires the attacker to first execute low‑privileged code before triggering the memory corruption. Kernel maintainers released patch 6.6.0‑rc3; users should apply the update or use the documented work‑around to block privilege escalation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-835/",
    "publishedAt": "2026-10-29T05:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-hidpp-use-after-free-exploit",
      "article-6f3c9f",
      "6f3c9f"
    ]
  },
  {
    "slug": "mlflow-tracking-server-privilege-escalation-cve-20-6f3ca2",
    "title": "MLflow Tracking Server Privilege Escalation CVE-2026-118625",
    "summary": "A missing authorization flaw in MLflow Tracking Server, identified as CVE-2026-118625, allows authenticated remote attackers to elevate privileges. The vulnerability requires valid credentials but grants full system access, and no public exploit has been reported. MLflow has released an update; administrators should apply the patch and enforce least‑privilege access controls.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-841/",
    "publishedAt": "2026-10-29T05:00:00.000Z",
    "cves": [
      "CVE-2026-118625"
    ],
    "additionalSources": [],
    "aliases": [
      "mlflow-tracking-server-privilege-escalation-cve-20",
      "article-6f3ca2",
      "6f3ca2",
      "mlflow-tracking-server-privilege-escalation-cve-2026-118625"
    ]
  },
  {
    "slug": "mlflow-rce-via-cve-2026-118623-deserialization-6f3c9f",
    "title": "MLflow RCE via CVE-2026-118623 Deserialization",
    "summary": "MLflow's PickleEvaluationArtifact deserialization flaw, CVE-2026-118623, permits remote code execution when a user opens a malicious file or visits a crafted page. The vulnerability has a CVSS score of 7.8, and no public exploit has been disclosed. MLflow has issued a patch; users should update immediately and avoid opening untrusted artifacts.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-839/",
    "publishedAt": "2026-10-29T05:00:00.000Z",
    "cves": [
      "CVE-2026-118623"
    ],
    "additionalSources": [],
    "aliases": [
      "mlflow-rce-via-cve-2026-118623-deserialization",
      "article-6f3c9f",
      "6f3c9f"
    ]
  },
  {
    "slug": "freebsd-kernel-tty-race-enables-local-privilege-es-6f3c9f",
    "title": "FreeBSD Kernel TTY Race Enables Local Privilege Escalation",
    "summary": "A race condition in the FreeBSD kernel’s TTY subsystem permits local attackers to elevate privileges on affected installations. The flaw requires initial execution of low‑privileged code, has a CVSS score of 7.8, and is identified as CVE-2026-58093. Security teams should apply the vendor‑issued patch or update to the kernel to mitigate the privilege escalation risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-838/",
    "publishedAt": "2026-10-29T05:00:00.000Z",
    "cves": [
      "CVE-2026-58093"
    ],
    "additionalSources": [],
    "aliases": [
      "freebsd-kernel-tty-race-enables-local-privilege-es",
      "article-6f3c9f",
      "6f3c9f",
      "freebsd-kernel-tty-race-enables-local-privilege-escalation"
    ]
  },
  {
    "slug": "mlflow-statsmodels-deserialization-rce-vulnerabili-6f3ca3",
    "title": "MLflow Statsmodels Deserialization RCE Vulnerability",
    "summary": "A deserialization flaw in MLflow’s Statsmodels _load_model function permits remote attackers to execute arbitrary code on affected installations. The vulnerability requires user interaction, visiting a malicious page or opening a crafted file, and carries a CVSS score of 7.8, indicating high severity. A patch addressing CVE-2024-37052 is available; administrators should update MLflow immediately or apply the workaround to mitigate exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-845/",
    "publishedAt": "2026-10-29T05:00:00.000Z",
    "cves": [
      "CVE-2024-37052"
    ],
    "additionalSources": [],
    "aliases": [
      "mlflow-statsmodels-deserialization-rce-vulnerabili",
      "article-6f3ca3",
      "6f3ca3",
      "mlflow-statsmodels-deserialization-rce-vulnerability"
    ]
  },
  {
    "slug": "mlflow-shap-deserialization-rce-vulnerability-6f3ca2",
    "title": "MLflow SHAP Deserialization RCE Vulnerability",
    "summary": "A deserialization flaw in MLflow’s SHAP load_explainer function allows remote attackers to execute arbitrary code on affected installations. The flaw requires user interaction, visiting a page or opening a file, and has a CVSS score of 7.8, indicating high severity. A patch addressing CVE-2026-118627 is available; administrators should update MLflow immediately or apply the workaround to mitigate exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-843/",
    "publishedAt": "2026-10-29T05:00:00.000Z",
    "cves": [
      "CVE-2026-118627"
    ],
    "additionalSources": [],
    "aliases": [
      "mlflow-shap-deserialization-rce-vulnerability",
      "article-6f3ca2",
      "6f3ca2"
    ]
  },
  {
    "slug": "mlflow-tracking-server-privilege-escalation-vulner-6f3ca2",
    "title": "MLflow Tracking Server Privilege Escalation Vulnerability",
    "summary": "A missing authorization flaw in MLflow’s Tracking Server permits authenticated attackers to elevate privileges on affected installations. The vulnerability requires valid credentials, has a CVSS score of 5.4, and allows attackers to gain higher-level access within the MLflow environment. A patch addressing CVE-2026-118626 is available; administrators should update MLflow or apply the vendor‑issued workaround to prevent privilege escalation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-842/",
    "publishedAt": "2026-10-29T05:00:00.000Z",
    "cves": [
      "CVE-2026-118626"
    ],
    "additionalSources": [],
    "aliases": [
      "mlflow-tracking-server-privilege-escalation-vulner",
      "article-6f3ca2",
      "6f3ca2",
      "mlflow-tracking-server-privilege-escalation-vulnerability"
    ]
  },
  {
    "slug": "dhs-personnel-records-leak-exposes-ice-operations-7d88db",
    "title": "DHS Personnel Records Leak Exposes ICE Operations",
    "summary": "A data breach exposed records of over 41,000 Department of Homeland Security employees and contractors, revealing contact details, assignments, and links to undercover ICE operations. The leak, distributed publicly, provides an internal view of teams and reporting lines, potentially enabling targeted espionage or social engineering. DHS should immediately revoke compromised credentials, conduct a forensic audit, and notify affected personnel.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/dhs-data-leak/",
    "publishedAt": "2026-10-29T03:13:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "dhs-personnel-records-leak-exposes-ice-operations",
      "article-7d88db",
      "7d88db"
    ]
  },
  {
    "slug": "cisco-sd-wan-controllers-vulnerability-cve-2026-20-78eefb",
    "title": "Cisco SD‑WAN Controllers Vulnerability (CVE‑2026‑20127) Allows Authentication Bypass and Potential KeyDrift Deployment",
    "summary": "Cisco SD‑WAN Controllers suffered an authentication‑bypass flaw (CVE‑2026‑20127) that let attackers gain privileged access. The defect allowed unauthenticated remote requests to bypass login, enabling manipulation of NETCONF configurations and potential deployment of the KeyDrift malware framework. Cisco issued an out‑of‑band patch; administrators should apply it immediately and monitor controller logs for signs of compromise.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-sdwan-rpa-EHchtZk?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DCisco+Catalyst+SD-WAN+Controller+Authentication+Bypass+Vulnerability%26vs_k%3D1",
    "publishedAt": "2026-10-29T01:54:35.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-exploit-cisco-sd-wan-flaw-to-deploy-custom-keydrift-malware/"
      }
    ],
    "aliases": [
      "cisco-sd-wan-controllers-vulnerability-cve-2026-20",
      "article-78eefb",
      "78eefb",
      "cisco-sd-wan-controllers-vulnerability-cve-2026-20127-allows"
    ]
  },
  {
    "slug": "keystone-wallets-key-theft-recall-5e44c0",
    "title": "Keystone Wallets Key Theft Recall",
    "summary": "Keystone hardware wallets suffered key theft via compromised firmware, exposing private keys to attackers. The flaw originates from insecure bootloader validation, allowing malicious firmware to be installed during manufacturing, leading to credential compromise. Keystone has issued a recall and firmware update; users must replace devices and apply the new secure bootloader patch.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/keystone-to-destroy-18-835-hardware-wallets-after-hacke",
    "publishedAt": "2026-10-29T00:50:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "keystone-wallets-key-theft-recall",
      "article-5e44c0",
      "5e44c0"
    ]
  },
  {
    "slug": "oracle-peoplesoft-patch-shinyhunters-zero-day-flaw-3182b7",
    "title": "Oracle PeopleSoft: Patch ShinyHunters Zero-Day Flaw",
    "summary": "Oracle PeopleSoft faces a zero‑day flaw, CVE-2026-35273, that can be exploited via vulnerable input handling in enterprise environments. The vulnerability allows attackers to execute arbitrary code without authentication, as demonstrated by publicly available telemetry and detection rules. Oracle recommends applying the latest patch immediately and monitoring logs for anomalous activity to mitigate exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/shinyhunters-exploited-oracle-peoplesoft-zero-day-turns",
    "publishedAt": "2026-10-29T00:50:00.000Z",
    "cves": [
      "CVE-2026-35273"
    ],
    "additionalSources": [],
    "aliases": [
      "oracle-peoplesoft-patch-shinyhunters-zero-day-flaw",
      "article-3182b7",
      "3182b7"
    ]
  },
  {
    "slug": "autonomous-ai-exploits-defend-against-zero-day-age-48c497",
    "title": "Autonomous AI Exploits: Defend Against Zero‑Day Agents",
    "summary": "A zero‑day flaw, CVE-2026-33096, targets autonomous AI components in enterprise systems, enabling remote code execution. The defect permits attackers to inject malicious scripts through unvalidated AI input, with public telemetry indicating active exploitation and monitoring system logs for anomalous behavior. Patch the affected AI modules immediately and enforce strict input validation to prevent exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/anthropic-s-unreleased-ai-model-chains-flaws-into-worki",
    "publishedAt": "2026-10-29T00:49:43.000Z",
    "cves": [
      "CVE-2026-33096"
    ],
    "additionalSources": [],
    "aliases": [
      "autonomous-ai-exploits-defend-against-zero-day-age",
      "article-48c497",
      "48c497",
      "autonomous-ai-exploits-defend-against-zero-day-agents"
    ]
  },
  {
    "slug": "php2shell-exploit-cve-2026-109618-enables-rce-440c37",
    "title": "PHP2Shell Exploit CVE-2026-109618 Enables RCE",
    "summary": "PHP2Shell vulnerability, CVE-2026-109618, permits remote code execution on government servers, allowing attackers to run arbitrary commands. The flaw originates from insecure handling of PHP session tokens, enabling unauthenticated users to inject malicious code via crafted requests. A vendor patch has been released; administrators should apply it immediately and deploy detection rules to identify exploitation attempts.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/php2shell-attack-roots-25-servers-breaches-u-s-governme",
    "publishedAt": "2026-10-29T00:49:09.000Z",
    "cves": [
      "CVE-2026-109618"
    ],
    "additionalSources": [],
    "aliases": [
      "php2shell-exploit-cve-2026-109618-enables-rce",
      "article-440c37",
      "440c37"
    ]
  },
  {
    "slug": "cisa-adds-cve-2026-111497-to-known-exploited-vulne-1aa209",
    "title": "CISA Adds CVE‑2026‑111497 to Known Exploited Vulnerabilities Catalog; AWS and Cisco Issue Patches for Brotli RCE",
    "summary": "CISA added CVE‑2026‑111497, a Brotli decompression flaw, to its Known Exploited Vulnerabilities catalog, affecting Google services. The flaw permits remote code execution or memory disclosure by exploiting improper input validation, enabling attackers to run arbitrary code. AWS and Cisco have issued patches for affected services, urging customers to update immediately to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-oct2026-node-js-Jj3SQ19u?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DVulnerabilities+in+Node.js+Affecting+Cisco+Products%3A+October+2026%26vs_k%3D1",
    "publishedAt": "2026-10-29T00:36:45.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "AWS Security Bulletins",
        "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-155-aws/"
      }
    ],
    "aliases": [
      "cisa-adds-cve-2026-111497-to-known-exploited-vulne",
      "article-1aa209",
      "1aa209",
      "cisa-adds-cve-2026-111497-to-known-exploited-vulnerabilities"
    ]
  },
  {
    "slug": "cisco-asa-ftd-ssl-vpn-dos-vulnerability-patches-re-2f6ce2",
    "title": "Cisco ASA/FTD SSL VPN DoS Vulnerability Patches Released",
    "summary": "Cisco ASA and FTD firewalls suffered a denial‑of‑service flaw that crashes SSL VPN devices, affecting access for many enterprises. The logic error, triggered by a crafted request during VPN connection when secondary authentication is enabled, forces a device reload and disrupts services. Cisco released patches and advised administrators to update or apply mitigations to prevent crashes, ensuring continued VPN availability.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-asaftd-tunnel-dos-s6mgkb75?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DCisco+Secure+Firewall+Adaptive+Security+Appliance+and+Secure+Firewall+Threat+Defense+Software+Remote+Access+SSL+VPN+Tunnel+Denial+of+Service+Vulnerability%26vs_k%3D1",
    "publishedAt": "2026-10-28T23:15:00.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/security/cisco-warns-of-firewall-zero-day-exploited-to-crash-ssl-vpn-devices/"
      }
    ],
    "aliases": [
      "cisco-asa-ftd-ssl-vpn-dos-vulnerability-patches-re",
      "article-2f6ce2",
      "2f6ce2",
      "cisco-asa-ftd-ssl-vpn-dos-vulnerability-patches-released"
    ]
  },
  {
    "slug": "uat-11473-exploits-cisco-sd-wan-auth-bypass-373777",
    "title": "UAT-11473 Exploits Cisco SD-WAN Auth Bypass",
    "summary": "Cisco Talos identified UAT-11473, a sophisticated APT group, exploiting CVE-2026-20127, an authentication bypass vulnerability in Cisco SD-WAN Catalyst Controller instances to gain unauthorized access. The group deployed KeyDrift malware on compromised systems after bypassing authentication controls. Organizations running Cisco SD-WAN Catalyst Controllers should verify patch status for CVE-2026-20127 and hunt for KeyDrift indicators.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Cisco Talos",
    "sourceUrl": "https://blog.talosintelligence.com/uat-11473-keydrift/",
    "publishedAt": "2026-10-28T21:32:02.000Z",
    "cves": [
      "CVE-2026-20127"
    ],
    "additionalSources": [],
    "aliases": [
      "uat-11473-exploits-cisco-sd-wan-auth-bypass",
      "article-373777",
      "373777"
    ]
  },
  {
    "slug": "federal-court-rules-west-virginia-data-shield-law-7fd6e6",
    "title": "Federal Court Rules West Virginia Data Shield Law Unconstitutional",
    "summary": "A federal appellate court panel ruled West Virginia's Daniel's Law, which shielded personal data of police and public officials, unconstitutional. The decision removes the legal barrier preventing public disclosure of personal information held by state agencies regarding law enforcement personnel. The ruling enables public records requests targeting personal data of public safety officials in West Virginia.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/west-virginia-daniels-law-struck-down-appellate-court",
    "publishedAt": "2026-10-28T20:50:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "federal-court-rules-west-virginia-data-shield-law",
      "article-7fd6e6",
      "7fd6e6",
      "federal-court-rules-west-virginia-data-shield-law-unconstitu"
    ]
  },
  {
    "slug": "law-enforcement-seizes-virtualine-bulletproof-host-8c1e6f",
    "title": "Law Enforcement Seizes Virtualine Bulletproof Hosting Domain",
    "summary": "U.S. law enforcement seized the primary domain of Virtualine, a bulletproof hosting service advertised on cybercrime forums for facilitating illegal activities. The service provided infrastructure to ransomware operators and other cybercriminals seeking to evade takedown efforts. The seizure disrupts a known channel for illicit hosting but does not eliminate the underlying criminal operations.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/police-seize-virtualine-bulletproof-service-tied-to-ransowmare-cybercrime/",
    "publishedAt": "2026-10-28T20:47:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "law-enforcement-seizes-virtualine-bulletproof-host",
      "article-8c1e6f",
      "8c1e6f",
      "law-enforcement-seizes-virtualine-bulletproof-hosting-domain"
    ]
  },
  {
    "slug": "japan-airlines-confirms-customer-data-theft-incide-482a55",
    "title": "Japan Airlines Confirms Customer Data Theft Incident",
    "summary": "Japan Airlines confirmed a data breach in which hackers stole passport numbers, frequent flyer numbers, email addresses, and phone numbers for approximately 2,000 customers. The incident occurred amid a broader wave of cyber incidents affecting Japanese organizations. Affected individuals face identity theft risk from exposed government-issued identifiers and personal contact details.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/japan-airlines-warns-of-breach-country-grapples-with-incidents",
    "publishedAt": "2026-10-28T20:33:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "japan-airlines-confirms-customer-data-theft-incide",
      "article-482a55",
      "482a55",
      "japan-airlines-confirms-customer-data-theft-incident"
    ]
  },
  {
    "slug": "cisco-pre-announces-november-advisories-for-three-76d307",
    "title": "Cisco Pre-Announces November Advisories for Three Products",
    "summary": "Cisco PSIRT will publish security advisories on November 4, 2026, addressing vulnerabilities in Identity Services Engine, UCS Central Software, and Unified Communications Manager. The advisories include fixed software releases, and no further security-hardening advisories are planned before January 20, 2027. Cisco recommends customers upgrade to the fixed versions specified in the advisories to remediate the disclosed flaws.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-notice-I8z3n6lK?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DCisco+Advance+Notification+for+Publication+of+November+4%2C+2026%2C+Security+Advisories%26vs_k%3D1",
    "publishedAt": "2026-10-28T20:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-pre-announces-november-advisories-for-three",
      "article-76d307",
      "76d307",
      "cisco-pre-announces-november-advisories-for-three-products"
    ]
  },
  {
    "slug": "chrome-early-stable-update-released-671bb3",
    "title": "Chrome Early Stable Update Released",
    "summary": "Google Chrome’s Stable channel received an early update to version 157.0.8103.26/27 for Windows, with Mac following shortly. The update includes bug fixes and performance improvements, as detailed in the release log. Users are encouraged to install the update via the browser’s update mechanism to maintain security and stability.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/10/early-stable-update-for-desktop_01255863767.html",
    "publishedAt": "2026-10-28T19:57:13.619Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-early-stable-update-released",
      "article-671bb3",
      "671bb3"
    ]
  },
  {
    "slug": "chromeos-stable-patch-fixes-critical-fileapi-flaw-60e267",
    "title": "ChromeOS Stable Patch Fixes Critical FileAPI Flaw",
    "summary": "Google released ChromeOS Stable channel update 16836.30.0, patching multiple vulnerabilities including a critical improper input validation flaw in FileAPI. CVE-2026-118331 carries a critical severity rating, while five additional high-severity flaws span use-after-free and input validation issues across Animation, Compositing, UI, and ReadingList components. Users should update to browser version 156.0.8078.77 to remediate all disclosed defects.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/10/stable-channel-update-for-chromeos_01748991111.html",
    "publishedAt": "2026-10-28T19:45:30.211Z",
    "cves": [
      "CVE-2026-118331"
    ],
    "additionalSources": [],
    "aliases": [
      "chromeos-stable-patch-fixes-critical-fileapi-flaw",
      "article-60e267",
      "60e267"
    ]
  },
  {
    "slug": "aws-agent-tool-masking-bypass-cve-2026-115415-5142fc",
    "title": "AWS Agent Tool Masking Bypass CVE-2026-115415",
    "summary": "CVE-2026-115415 allows an LLM to bypass environment variable masking in Strands Agents Tools, exposing cloud credentials and API keys. The flaw occurs when a crafted prompt instructs the tool to disable masking, returning sensitive data without operator consent. AWS recommends applying the latest patch and disabling automatic tool invocation until remediation is applied.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-154-aws/",
    "publishedAt": "2026-10-28T19:39:08.000Z",
    "cves": [
      "CVE-2026-115415"
    ],
    "additionalSources": [],
    "aliases": [
      "aws-agent-tool-masking-bypass-cve-2026-115415",
      "article-5142fc",
      "5142fc"
    ]
  },
  {
    "slug": "ghostaction-pivots-to-developer-endpoints-and-clou-d1cd75",
    "title": "GhostAction Pivots to Developer Endpoints and Cloud",
    "summary": "The GhostAction cybercrime group's supply chain attack campaign has fizzled, with the outfit shifting its operational focus toward developer endpoints and cloud access infrastructure. The group's persistent presence on GitHub signals an intent to target software development workflows and cloud-connected environments as new attack vectors.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/application-security/ghostaction-hacking-wave-fizzles-attackers-github",
    "publishedAt": "2026-10-28T19:39:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ghostaction-pivots-to-developer-endpoints-and-clou",
      "article-d1cd75",
      "d1cd75",
      "ghostaction-pivots-to-developer-endpoints-and-cloud"
    ]
  },
  {
    "slug": "discord-opens-public-server-messages-to-search-eng-24cc09",
    "title": "Discord Opens Public Server Messages to Search Engines",
    "summary": "Discord will permit search engines to index discussions within Discoverable Servers, making those messages accessible on the open web to users outside the platform without requiring an account or invitation. This policy change expands the public surface of server communications previously confined to the Discord ecosystem.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/discord-to-let-search-engines-index-public-server-messages/",
    "publishedAt": "2026-10-28T18:44:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "discord-opens-public-server-messages-to-search-eng",
      "article-24cc09",
      "24cc09",
      "discord-opens-public-server-messages-to-search-engines"
    ]
  },
  {
    "slug": "volt-typhoon-leverages-silent-train-for-zero-days-371e09",
    "title": "Volt Typhoon Leverages Silent Train for Zero-Days",
    "summary": "The China-nexus espionage group Volt Typhoon operated a covert access network dubbed Silent Train to execute four zero-day exploitation campaigns for strategic access. Lumen Technologies Black Lotus Labs identified the network in late 2023, noting it uses rotating chains of compromised SOHO, IoT, and enterprise infrastructure.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/volt-typhoon-used-covert-silent-train.html",
    "publishedAt": "2026-10-28T18:08:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "volt-typhoon-leverages-silent-train-for-zero-days",
      "article-371e09",
      "371e09"
    ]
  },
  {
    "slug": "red-hat-patches-mrtg-on-rhel-9-4-sap-37d9b1",
    "title": "Red Hat Patches mrtg on RHEL 9.4 SAP",
    "summary": "Red Hat released a security update for the mrtg monitoring package on Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. The update addresses vulnerabilities rated as Important by Red Hat Product Security, with specific CVSS scores available through referenced CVE links. Administrators should apply the RHSA-2026:92051 patch to remediate the identified flaws in their mrtg installations.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:92051",
    "publishedAt": "2026-10-28T18:00:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-patches-mrtg-on-rhel-9-4-sap",
      "article-37d9b1",
      "37d9b1"
    ]
  },
  {
    "slug": "unit-42-maps-retail-holiday-threat-landscape-2a5d72",
    "title": "Unit 42 Maps Retail Holiday Threat Landscape",
    "summary": "Unit 42 published an analysis of peak shopping season cyber threats targeting retail operations, covering ransomware campaigns and AI-powered attack vectors. The report outlines defensive strategies to protect customer trust and operational continuity during high-volume holiday periods. Security teams should review the guidance to align holiday-season incident response plans with emerging threat patterns.",
    "category": "General",
    "severity": "LOW",
    "source": "Unit 42",
    "sourceUrl": "https://unit42.paloaltonetworks.com/unwrapping-retail-cyber-threats/",
    "publishedAt": "2026-10-28T18:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "unit-42-maps-retail-holiday-threat-landscape",
      "article-2a5d72",
      "2a5d72"
    ]
  },
  {
    "slug": "red-hat-ships-jboss-eap-8-1-9-security-fix-37d9b1",
    "title": "Red Hat Ships JBoss EAP 8.1.9 Security Fix",
    "summary": "Red Hat released a security update for JBoss Enterprise Application Platform 8.1.9 on Red Hat Enterprise Linux 9. The update addresses vulnerabilities rated as Important by Red Hat Product Security, with specific CVSS scores available through referenced CVE links. Administrators should apply the RHSA-2026:92056 patch to remediate the identified flaws in their JBoss EAP deployments.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:92056",
    "publishedAt": "2026-10-28T17:56:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-ships-jboss-eap-8-1-9-security-fix",
      "article-37d9b1",
      "37d9b1"
    ]
  },
  {
    "slug": "offsec-releases-free-php2shell-exploitation-lab-17a67c",
    "title": "OffSec Releases Free PHP2Shell Exploitation Lab",
    "summary": "OffSec released a free interactive lab in Proving Grounds Play enabling security practitioners to examine and defend against the critical PHP2Shell vulnerabilities, including CVE-2026-109618. The lab provides hands-on exploitation scenarios for the PHP2Shell flaw family, which researchers classify as critical severity, as AI-assisted research reshapes vulnerability discovery workflows.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/offsec-launches-free-php2shell-lab-following-critical-vulnerability-discovery/",
    "publishedAt": "2026-10-28T17:54:27.000Z",
    "cves": [
      "CVE-2026-109618"
    ],
    "additionalSources": [],
    "aliases": [
      "offsec-releases-free-php2shell-exploitation-lab",
      "article-17a67c",
      "17a67c"
    ]
  },
  {
    "slug": "zero-click-telegram-sticker-flaw-enables-ios-code-2356c5",
    "title": "Zero-Click Telegram Sticker Flaw Enables iOS Code Execution",
    "summary": "Security researcher Saifeldeen Aziz disclosed new zero-click vulnerabilities in Telegram stickers that bypass server-side validation checks. He chained the flaws to achieve arbitrary code execution on iOS devices, demonstrating a complete attack path without user interaction. The research was scheduled for presentation at OffensiveCon in Tokyo on October 28, 2026",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/0-click-flaw-in-telegram-stickers/",
    "publishedAt": "2026-10-28T17:15:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zero-click-telegram-sticker-flaw-enables-ios-code",
      "article-2356c5",
      "2356c5",
      "zero-click-telegram-sticker-flaw-enables-ios-code-execution"
    ]
  },
  {
    "slug": "github-ships-npm-package-firewall-for-pre-install-3a9011",
    "title": "GitHub Ships npm Package Firewall for Pre-Install Scanning",
    "summary": "GitHub announced a package firewall that evaluates npm packages against enterprise policy before installation, blocking known malware, critical vulnerabilities, and brand-new versions. The checks execute before a package reaches a developer laptop, build pipeline, or coding agent. Any developer can enable the firewall by pointing npm at it, part of four security additions addressing AI-accelerated software development",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/28/github-package-firewall-npm/",
    "publishedAt": "2026-10-28T17:09:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "github-ships-npm-package-firewall-for-pre-install",
      "article-3a9011",
      "3a9011",
      "github-ships-npm-package-firewall-for-pre-install-scanning"
    ]
  },
  {
    "slug": "google-enables-one-tap-installs-for-approved-third-14b753",
    "title": "Google Enables One-Tap Installs for Approved Third-Party Stores",
    "summary": "Google is enabling approved third-party Android app stores outside the U.S. to offer one-tap installs and background updates, bypassing confirmation screens. Stores must pass identity checks and submit their full catalog and every update to Google for ongoing malware scanning. The feature becomes available to qualifying stores starting December 1, expanding sideloading while retaining centralized security review.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/google-to-allow-one-tap-android-app.html",
    "publishedAt": "2026-10-28T17:08:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-enables-one-tap-installs-for-approved-third",
      "article-14b753",
      "14b753",
      "google-enables-one-tap-installs-for-approved-third-party-sto"
    ]
  },
  {
    "slug": "chrome-157-released-for-android-5c6d27",
    "title": "Chrome 157 Released for Android",
    "summary": "Chrome 157 (157.0.8103.30) has been rolled out to a small percentage of Android users, with full availability expected on Google Play in the coming days. The update focuses on stability and performance enhancements, with detailed changes documented in the Git log. Users encountering issues should file bugs through the provided channels.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/10/chrome-for-android-update_01511209741.html",
    "publishedAt": "2026-10-28T17:06:56.273Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-157-released-for-android",
      "article-5c6d27",
      "5c6d27"
    ]
  },
  {
    "slug": "sony-isp-breach-exposes-2-5-million-records-1edde0",
    "title": "Sony ISP Breach Exposes 2.5 Million Records",
    "summary": "Sony Network Communications confirmed a breach that exposed approximately 2.5 million customer records, including personal data of current and former users. The compromise involved unauthorized access to Sony ISP subsidiary databases, potentially allowing attackers to harvest sensitive information. Sony has advised affected customers to monitor accounts and change credentials while deploying additional security controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/sony-isp-subsidiary-data-breach-exposes-25-million-customer-records/",
    "publishedAt": "2026-10-28T16:45:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sony-isp-breach-exposes-2-5-million-records",
      "article-1edde0",
      "1edde0"
    ]
  },
  {
    "slug": "clickfix-social-engineering-campaign-observed-in-t-57dd7e",
    "title": "ClickFix Social Engineering Campaign Observed in the Wild",
    "summary": "A new ClickFix social engineering campaign is actively targeting users through deceptive instructions that trick victims into executing malicious commands. The attack vector relies on convincing users to manually run PowerShell or similar commands, bypassing traditional malware delivery mechanisms. Security teams should monitor for anomalous command-line execution patterns and reinforce user awareness training against instruction-based lures.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33466",
    "publishedAt": "2026-10-28T16:07:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "clickfix-social-engineering-campaign-observed-in-t",
      "article-57dd7e",
      "57dd7e",
      "clickfix-social-engineering-campaign-observed-in-the-wild"
    ]
  },
  {
    "slug": "ai-assisted-php2shell-breaches-u-s-government-netw-86a45a",
    "title": "AI‑Assisted PHP2Shell Breaches U.S. Government Network",
    "summary": "An AI‑assisted attack by a China‑nexus threat actor exploited PHP2Shell vulnerabilities to breach exposed U.S. Government‑affiliated systems. The operation, observed on October 25, 2026, combined PHP2Shell with a kernel privilege‑escalation exploit to gain root access on 25 servers. Security teams should isolate affected servers, apply the latest PHP2Shell patches, and conduct a comprehensive kernel hardening review to prevent further exploitation.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/php2shell-attack-roots-25-servers.html",
    "publishedAt": "2026-10-28T16:02:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-assisted-php2shell-breaches-u-s-government-netw",
      "article-86a45a",
      "86a45a",
      "ai-assisted-php2shell-breaches-u-s-government-network"
    ]
  },
  {
    "slug": "volt-typhoon-employs-silent-train-zero-day-framewo-e7d5a3",
    "title": "Volt Typhoon Employs Silent Train Zero-Day Framework",
    "summary": "Chinese state-sponsored group Volt Typhoon has deployed the Silent Train framework, leveraging rotating device chains to deliver zero-day attacks against high-value targets. The framework exploits a vulnerability identified as CVE-2024-39717, enabling attackers to pivot across compromised devices. Security teams should monitor for anomalous device activity and apply mitigations for the referenced CVE.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/volt-typhoon-hides-zero-day-attacks-using-silent-train-framework/",
    "publishedAt": "2026-10-28T16:00:00.000Z",
    "cves": [
      "CVE-2024-39717"
    ],
    "additionalSources": [],
    "aliases": [
      "volt-typhoon-employs-silent-train-zero-day-framewo",
      "article-e7d5a3",
      "e7d5a3",
      "volt-typhoon-employs-silent-train-zero-day-framework"
    ]
  },
  {
    "slug": "microsoft-outlines-ciso-strategy-for-agentic-ai-er-2412d7",
    "title": "Microsoft Outlines CISO Strategy for Agentic AI Era",
    "summary": "Microsoft published guidance for CISOs navigating the agentic AI era, identifying two core priorities: enabling innovation through identity and data guardrails, and modernizing defense against AI-powered threats. The advisory, authored by Aarti Borkar, frames the evolving security leadership role around balancing AI adoption with protective controls.",
    "category": "General",
    "severity": "LOW",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/10/28/the-cisos-evolving-role-protecting-and-defending-in-the-agentic-era/",
    "publishedAt": "2026-10-28T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-outlines-ciso-strategy-for-agentic-ai-er",
      "article-2412d7",
      "2412d7",
      "microsoft-outlines-ciso-strategy-for-agentic-ai-era"
    ]
  },
  {
    "slug": "aws-sdk-for-pandas-athena-result-tampering-flaw-4f8e24",
    "title": "AWS SDK for pandas Athena Result Tampering Flaw",
    "summary": "AWS disclosed CVE-2026-118029 in the awswrangler library, where unverified ownership of the default Athena query result location permits data tampering. A remote user can read query results and alter returned data sets by pre-creating an S3 bucket at the default destination, bypassing ownership checks. Teams should upgrade awswrangler and verify S3 bucket ownership for Athena result destinations.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-153-aws/",
    "publishedAt": "2026-10-28T15:40:38.000Z",
    "cves": [
      "CVE-2026-118029"
    ],
    "additionalSources": [],
    "aliases": [
      "aws-sdk-for-pandas-athena-result-tampering-flaw",
      "article-4f8e24",
      "4f8e24"
    ]
  },
  {
    "slug": "ai-adoption-in-soc-outpaces-expectations-2bc3ae",
    "title": "AI Adoption in SOC Outpaces Expectations",
    "summary": "A Help Net Security analysis reports that security teams are adopting AI-driven automation in the SOC faster than industry observers anticipated. The author notes that compliance obligations, previously assumed to slow AI integration, have not impeded deployment pace. The finding suggests SOC operators are increasingly trusting AI to execute operational actions within security workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/28/exaforce-trust-in-ai-security/",
    "publishedAt": "2026-10-28T15:25:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-adoption-in-soc-outpaces-expectations",
      "article-2bc3ae",
      "2bc3ae"
    ]
  },
  {
    "slug": "nefilim-ransomware-affiliate-sentenced-to-70-month-211c3a",
    "title": "Nefilim Ransomware Affiliate Sentenced to 70 Months",
    "summary": "Artem Stryzhak, identified as a Ukrainian Hive and Nefilim ransomware affiliate, was sentenced to 70 months in US federal prison. He pleaded guilty to using Nefilim ransomware in attacks against victims. The prosecution represents a continued law enforcement effort targeting ransomware operators linked to the Hive ecosystem.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/ukrainian-hive-and-nefilim-ransomware-affiliate-gets-70-months-in-us-prison/",
    "publishedAt": "2026-10-28T15:05:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nefilim-ransomware-affiliate-sentenced-to-70-month",
      "article-211c3a",
      "211c3a",
      "nefilim-ransomware-affiliate-sentenced-to-70-months"
    ]
  },
  {
    "slug": "ai-bot-impersonation-used-for-credential-scanning-5eded3",
    "title": "AI Bot Impersonation Used for Credential Scanning",
    "summary": "A threat actor is scanning for exposed credentials by impersonating AI agents from OpenAI, Anthropic, Meta, and other vendors. The attacker leverages trusted AI company bot identities to probe for publicly accessible data and evade detection. Security teams should monitor anomalous bot user-agent strings and restrict public access to sensitive endpoints to counter this reconnaissance.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/attacker-impersonates-ai-bots-scans-credentials",
    "publishedAt": "2026-10-28T14:37:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-bot-impersonation-used-for-credential-scanning",
      "article-5eded3",
      "5eded3"
    ]
  },
  {
    "slug": "windows-imaging-component-information-disclosure-p-745d86",
    "title": "Windows Imaging Component Information Disclosure Patched",
    "summary": "Microsoft disclosed CVE-2026-62740, an information disclosure vulnerability in the Windows Imaging Component affecting supported editions of Microsoft Office. The flaw allows unauthorized access to sensitive data through improper handling of image processing operations. Microsoft recommends customers install the latest security updates across all affected Office editions to remediate the issue.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-62740",
    "publishedAt": "2026-10-28T14:00:00.000Z",
    "cves": [
      "CVE-2026-62740"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-imaging-component-information-disclosure-p",
      "article-745d86",
      "745d86",
      "windows-imaging-component-information-disclosure-patched"
    ]
  },
  {
    "slug": "banks-block-third-party-ai-agents-from-accounts-669fa8",
    "title": "Banks Block Third-Party AI Agents From Accounts",
    "summary": "Banks are blocking third-party AI agents from accessing customer accounts, citing security risks to account integrity. The concern centers on unauthorized access and potential misuse of customer financial data by external AI systems. Financial institutions are implementing access restrictions to mitigate risks posed by autonomous third-party agents interacting with banking platforms.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/ai/2026/10/banks-are-blocking-ai-agents-from-customer-accounts",
    "publishedAt": "2026-10-28T13:38:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "banks-block-third-party-ai-agents-from-accounts",
      "article-669fa8",
      "669fa8"
    ]
  },
  {
    "slug": "oracle-e-business-suite-cve-2026-101767-rce-vulner-8e6c6f",
    "title": "Oracle E-Business Suite CVE-2026-101767 RCE Vulnerability",
    "summary": "Oracle E-Business Suite suffers CVE-2026-101767, a critical unauthenticated remote code execution flaw in the Application Object Library. Scored 9.8 on CVSS, the flaw allows attackers to bypass authentication and execute arbitrary code, potentially compromising all EBS instances. Oracle patched last week; teams should apply the update immediately and monitor for exploitation attempts.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/hackers-target-critical-oracle-e.html",
    "publishedAt": "2026-10-28T12:48:03.000Z",
    "cves": [
      "CVE-2026-101767"
    ],
    "additionalSources": [
      {
        "source": "CyberNews AI",
        "sourceUrl": "https://cybernewsai.com/blog/hackers-target-critical-oracle-e-business-suite-rce-fla"
      }
    ],
    "aliases": [
      "oracle-e-business-suite-cve-2026-101767-rce-vulner",
      "article-8e6c6f",
      "8e6c6f",
      "oracle-e-business-suite-cve-2026-101767-rce-vulnerability"
    ]
  },
  {
    "slug": "cisa-flags-actively-exploited-vmware-and-linux-fla-50dc05",
    "title": "CISA Flags Actively Exploited VMware and Linux Flaws",
    "summary": "CISA added CVE-2026-41709 (Broadcom VMware ESX insufficient logging) and CVE-2026-46300 (Linux kernel missing variable initialization) to its Known Exploited Vulnerabilities catalog based on evidence of active exploitation. Both flaws represent frequent attack vectors for malicious actors targeting federal enterprise infrastructure. BOD 26-04 mandates FCEB agencies prioritize rapid remediation of KEV-listed vulnerabilities on publicly exposed assets.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/10/28/cisa-adds-two-known-exploited-vulnerabilities-catalog",
    "publishedAt": "2026-10-28T12:00:00.000Z",
    "cves": [
      "CVE-2026-41709",
      "CVE-2026-46300"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-flags-actively-exploited-vmware-and-linux-fla",
      "article-50dc05",
      "50dc05",
      "cisa-flags-actively-exploited-vmware-and-linux-flaws"
    ]
  },
  {
    "slug": "fbi-seizes-domain-of-hosting-provider-allegedly-fa-57e04e",
    "title": "FBI Seizes Domain of Hosting Provider Allegedly Facilitating Child Abuse and Money Laundering",
    "summary": "The FBI seized the domain of a bullet‑proof hosting provider that allegedly facilitated child sexual abuse material distribution and money laundering. The operation targeted the provider’s infrastructure, disrupting its services and preventing further criminal activity through its hosting network. No public patch is required; security teams should monitor for related domain registrations and enforce strict domain registration policies.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/fbi-seizure-csam-virtualine",
    "publishedAt": "2026-10-28T12:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fbi-seizes-domain-of-hosting-provider-allegedly-fa",
      "article-57e04e",
      "57e04e",
      "fbi-seizes-domain-of-hosting-provider-allegedly-facilitating"
    ]
  },
  {
    "slug": "adobe-issues-patches-for-eight-critical-campaign-c-533abd",
    "title": "Adobe Issues Patches for Eight Critical Campaign Classic Vulnerabilities Including CVE-2026-104351",
    "summary": "Adobe released patches for eight critical Campaign Classic vulnerabilities, including CVE-2026-104351, a code injection flaw that could enable arbitrary code execution. The flaw carries a CVSS score of 9.9, indicating a high‑risk remote code execution vector that could bypass security features and elevate privileges. Adobe has issued the updates; users should apply patches immediately and verify installation to mitigate exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/adobe-fixes-8-critical-campaign-classic.html",
    "publishedAt": "2026-10-28T11:15:51.000Z",
    "cves": [
      "CVE-2026-104351"
    ],
    "additionalSources": [],
    "aliases": [
      "adobe-issues-patches-for-eight-critical-campaign-c",
      "article-533abd",
      "533abd",
      "adobe-issues-patches-for-eight-critical-campaign-classic-vul"
    ]
  },
  {
    "slug": "chrome-and-firefox-patch-serious-security-flaws-2bca28",
    "title": "Chrome and Firefox Patch Serious Security Flaws",
    "summary": "Google and Mozilla released security updates for Chrome and Firefox on October 27, 2026, addressing serious security flaws in both browsers. The patches remediate vulnerabilities that could be exploited to compromise user sessions or execute malicious code within the browser environment. Users should install the updates immediately to close the exposure window and reduce attack surface.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/ai/2026/10/chrome-and-firefox-updates-fix-serious-security-flaws-install-them-now",
    "publishedAt": "2026-10-28T11:13:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-and-firefox-patch-serious-security-flaws",
      "article-2bca28",
      "2bca28"
    ]
  },
  {
    "slug": "researchers-study-fraudulent-north-korean-it-worke-365efa",
    "title": "Researchers Study Fraudulent North Korean IT Workers",
    "summary": "Researchers established a fictitious startup to observe fraudulent North Korean IT workers across the global talent market. The operation aimed to identify recruitment tactics, credential misuse, insider threat patterns, and potential supply‑chain risks within the tech sector. Findings will guide security teams in tightening background checks, detecting deceptive hiring, and reinforcing vendor vetting procedures.",
    "category": "General",
    "severity": "LOW",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/10/studying-fraudulent-north-korean-it-workers.html",
    "publishedAt": "2026-10-28T11:05:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "researchers-study-fraudulent-north-korean-it-worke",
      "article-365efa",
      "365efa",
      "researchers-study-fraudulent-north-korean-it-workers"
    ]
  },
  {
    "slug": "hackers-compromise-camera-management-software-to-d-50255f",
    "title": "Hackers Compromise Camera Management Software to Deploy Malware on Windows Computers",
    "summary": "Hackers compromised a camera management application to deploy malware on Windows PCs, leveraging a legitimate Microsoft program to execute malicious code and maintain persistence. The attack chain exploited the software’s Windows authentication integration, enabling attackers to bypass security controls and execute code remotely. Apply vendor patches and limit camera software privileges immediately.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/camera-management-software/",
    "publishedAt": "2026-10-28T11:03:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-compromise-camera-management-software-to-d",
      "article-50255f",
      "50255f",
      "hackers-compromise-camera-management-software-to-deploy-malw"
    ]
  },
  {
    "slug": "long-hidden-flaws-patched-in-epics-research-facili-3ce2ad",
    "title": "Long-Hidden Flaws Patched in EPICS Research Facility Control Software",
    "summary": "Four previously undisclosed EPICS Base flaws were identified in research facility control software used by particle accelerators and fusion laboratories. The vulnerabilities could allow attackers to crash critical control processes, potentially disrupting experimental operations, but no evidence of exploitation was reported. Patches have been released by the EPICS project; operators should update their systems promptly to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/long-hidden-flaws-patched-in-epics-research-facility-control-software/",
    "publishedAt": "2026-10-28T10:48:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "long-hidden-flaws-patched-in-epics-research-facili",
      "article-3ce2ad",
      "3ce2ad",
      "long-hidden-flaws-patched-in-epics-research-facility-control"
    ]
  },
  {
    "slug": "cybersecurity-black-week-highlights-php-flaw-and-k-100aad",
    "title": "Cybersecurity Black Week Highlights PHP Flaw and Kernel Leak",
    "summary": "Cybersecurity Black Week featured a critical PHP flaw, leaked Linux kernel reports, and a poisoned LiteLLM release within a single week. The PHP vulnerability threatened unauthenticated remote code execution, while the other incidents largely produced noise without confirmed exploitation. Teams should patch PHP, monitor kernel advisories, and verify third‑party release integrity to mitigate risks.",
    "category": "General",
    "severity": "CRITICAL",
    "source": "ESET WeLiveSecurity",
    "sourceUrl": "https://www.welivesecurity.com/en/business-security/lessons-cybersecurity-black-week/",
    "publishedAt": "2026-10-28T10:33:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cybersecurity-black-week-highlights-php-flaw-and-k",
      "article-100aad",
      "100aad",
      "cybersecurity-black-week-highlights-php-flaw-and-kernel-leak"
    ]
  },
  {
    "slug": "skyw4lker-phishing-campaign-targets-american-organ-4e2af0",
    "title": "Skyw4lker Phishing Campaign Targets American Organizations",
    "summary": "Skyw4lker is a device code phishing campaign that targets American organizations by exploiting legitimate cloud services and authentication mechanisms to gain corporate account access. The attack bypasses traditional credential theft, leveraging trusted workflows and leaving fewer obvious signs, which hampers detection. Security teams should monitor anomalous device code requests, enforce multi‑factor authentication, and apply vendor patches to mitigate this vector.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/american-organizations-under-attack.html",
    "publishedAt": "2026-10-28T10:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "skyw4lker-phishing-campaign-targets-american-organ",
      "article-4e2af0",
      "4e2af0",
      "skyw4lker-phishing-campaign-targets-american-organizations"
    ]
  },
  {
    "slug": "oracle-peoplesoft-zero-day-is-three-chained-flaws-773949",
    "title": "Oracle PeopleSoft Zero-Day Is Three Chained Flaws",
    "summary": "Oracle PeopleSoft suffered a zero‑day exploit comprising three chained SSRF flaws that let attackers reach an internal management interface via the trusted loopback address. The flaws, CVE‑2026‑35273, were patched by Oracle in June, yet the exploit persisted until May. Teams should apply the June patch immediately and confirm internal interfaces are no longer reachable externally.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/shinyhunters-exploited-oracle.html",
    "publishedAt": "2026-10-28T06:04:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "oracle-peoplesoft-zero-day-is-three-chained-flaws",
      "article-773949",
      "773949"
    ]
  },
  {
    "slug": "interpol-s-operation-serengeti-nets-1-462-arrests-130710",
    "title": "Interpol’s Operation Serengeti Nets 1,462 Arrests and $105M Recovery",
    "summary": "Interpol's Operation Serengeti, now in its third iteration, resulted in 1,462 arrests across 20 African countries and the US, recovering $105 million in stolen funds. The crackdown demonstrates international cooperation against cybercrime syndicates that funnel illicit proceeds into global financial systems. Law enforcement agencies should continue joint investigations, share threat intelligence, and enforce asset forfeiture to disrupt future operations.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/third-serengeti-sweep-1400-arrests-investigations-mature",
    "publishedAt": "2026-10-28T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "interpol-s-operation-serengeti-nets-1-462-arrests",
      "article-130710",
      "130710",
      "interpol-s-operation-serengeti-nets-1-462-arrests-and-105m-r"
    ]
  },
  {
    "slug": "nist-roadmap-to-retire-quantum-vulnerable-encrypti-6711e9",
    "title": "NIST Roadmap to Retire Quantum‑Vulnerable Encryption",
    "summary": "NIST released a roadmap to retire quantum‑vulnerable encryption, targeting sensitive federal systems with earlier deadlines. The plan identifies legacy cryptographic algorithms that are susceptible to quantum attacks and outlines transition milestones, but no specific CVE is cited. Organizations should begin migrating to post‑quantum algorithms per NIST IR 8547, applying recommended updates and monitoring compliance.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/28/nist-post-quantum-cryptography-migration-roadmap/",
    "publishedAt": "2026-10-28T05:30:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nist-roadmap-to-retire-quantum-vulnerable-encrypti",
      "article-6711e9",
      "6711e9",
      "nist-roadmap-to-retire-quantum-vulnerable-encryption"
    ]
  },
  {
    "slug": "kroll-breach-analysis-reveals-data-stored-by-unkno-44b9df",
    "title": "Kroll Breach Analysis Reveals Data Stored by Unknown Third‑Party Vendors",
    "summary": "Kroll’s 2026 breach analysis shows that nearly 70% of affected individuals had their data stored by obscure third‑party vendors. The supply‑chain compromise exposed customer records across multiple organizations, yet no specific CVE or exploit was reported. Firms should audit external data handlers, enforce strict access controls, and deploy continuous monitoring to prevent similar breaches.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/28/kroll-third-party-data-breaches-insurance-claims-report/",
    "publishedAt": "2026-10-28T05:00:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kroll-breach-analysis-reveals-data-stored-by-unkno",
      "article-44b9df",
      "44b9df",
      "kroll-breach-analysis-reveals-data-stored-by-unknown-third-p"
    ]
  },
  {
    "slug": "alpine-ilx-f511-buffer-overflow-enables-remote-cod-6f3c9b",
    "title": "Alpine iLX-F511 Buffer Overflow Enables Remote Code Execution",
    "summary": "A stack-based buffer overflow in Alpine iLX-F511's Android Auto Connection Handler allows physically present attackers to execute arbitrary code. The flaw, identified as 'CVE-2026-118609', has a CVSS score of 6.8 and does not require authentication, enabling local privilege escalation. Security teams should apply the vendor's patch or disable the vulnerable component to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-827/",
    "publishedAt": "2026-10-28T05:00:00.000Z",
    "cves": [
      "CVE-2026-118609"
    ],
    "additionalSources": [],
    "aliases": [
      "alpine-ilx-f511-buffer-overflow-enables-remote-cod",
      "article-6f3c9b",
      "6f3c9b",
      "alpine-ilx-f511-buffer-overflow-enables-remote-code-executio"
    ]
  },
  {
    "slug": "alpine-ilx-f511-bluetooth-read-leak-exposes-sensit-6f3c9b",
    "title": "Alpine iLX-F511 Bluetooth Read Leak Exposes Sensitive Data",
    "summary": "An out-of-bounds read in Alpine iLX-F511's libanwbtstack.so allows network-adjacent attackers to disclose sensitive information in affected installations. The vulnerability, 'CVE-2026-118608', requires pairing a malicious Bluetooth device and has a CVSS score of 3.5, indicating low exploitation risk. Security teams should update the firmware or block Bluetooth pairing to prevent data leakage.",
    "category": "CVE",
    "severity": "LOW",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-826/",
    "publishedAt": "2026-10-28T05:00:00.000Z",
    "cves": [
      "CVE-2026-118608"
    ],
    "additionalSources": [],
    "aliases": [
      "alpine-ilx-f511-bluetooth-read-leak-exposes-sensit",
      "article-6f3c9b",
      "6f3c9b",
      "alpine-ilx-f511-bluetooth-read-leak-exposes-sensitive-data"
    ]
  },
  {
    "slug": "alpine-ilx-f511-diagapp-command-injection-enables-6f3c9b",
    "title": "Alpine iLX-F511 diagapp Command Injection Enables Code Execution",
    "summary": "A command injection flaw in Alpine iLX-F511's diagapp permits physically present attackers to run arbitrary commands in affected devices. The vulnerability, identified as 'CVE-2026-118607', has a CVSS score of 6.8 and does not require authentication, allowing local privilege escalation. Apply the vendor's patch or disable diagapp to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-825/",
    "publishedAt": "2026-10-28T05:00:00.000Z",
    "cves": [
      "CVE-2026-118607"
    ],
    "additionalSources": [],
    "aliases": [
      "alpine-ilx-f511-diagapp-command-injection-enables",
      "article-6f3c9b",
      "6f3c9b",
      "alpine-ilx-f511-diagapp-command-injection-enables-code-execu"
    ]
  },
  {
    "slug": "alpine-ilx-f511-android-auto-service-rce-via-stack-6f3c9b",
    "title": "Alpine iLX-F511 Android Auto Service RCE via Stack Overflow",
    "summary": "A stack‑based buffer overflow in the Alpine iLX‑F511 Android Auto Service allows attackers to execute arbitrary code without authentication. The vulnerability, CVE-2026-118610, scores CVSS 8.8 and can be exploited remotely, granting full device control. Patches are available from Alpine; users should update firmware to the latest release or apply the vendor‑supplied fix.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-828/",
    "publishedAt": "2026-10-28T05:00:00.000Z",
    "cves": [
      "CVE-2026-118610"
    ],
    "additionalSources": [],
    "aliases": [
      "alpine-ilx-f511-android-auto-service-rce-via-stack",
      "article-6f3c9b",
      "6f3c9b",
      "alpine-ilx-f511-android-auto-service-rce-via-stack-overflow"
    ]
  },
  {
    "slug": "zdi-discloses-zero-day-rce-in-alpine-ilx-f511-6f3c9c",
    "title": "ZDI Discloses Zero-Day RCE in Alpine iLX-F511",
    "summary": "A zero-day heap-based buffer overflow vulnerability in the Alpine iLX-F511 Bluetooth OBEX packet handler allows physically present attackers to execute arbitrary code without authentication. Tracked as CVE-2026-118611 and demonstrated at Pwn2Own, the flaw carries a CVSS score of 6.8. Users should monitor vendor advisories for firmware updates and restrict physical access to affected devices until patches are available.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-829/",
    "publishedAt": "2026-10-28T05:00:00.000Z",
    "cves": [
      "CVE-2026-118611"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-discloses-zero-day-rce-in-alpine-ilx-f511",
      "article-6f3c9c",
      "6f3c9c"
    ]
  },
  {
    "slug": "apple-safari-rce-via-jstowasm-type-confusion-6f3c9e",
    "title": "Apple Safari RCE via jsToWasm Type Confusion",
    "summary": "A type‑confusion flaw in Safari’s jsToWasm entry point permits remote code execution when a user visits a malicious page. The vulnerability, CVE‑2026‑86974, scores CVSS 8.8 and requires user interaction to trigger, allowing attackers to run arbitrary code on affected browsers. Apple has issued an update that patches the flaw; security teams should install the latest Safari version immediately.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-830/",
    "publishedAt": "2026-10-28T05:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-safari-rce-via-jstowasm-type-confusion",
      "article-6f3c9e",
      "6f3c9e"
    ]
  },
  {
    "slug": "valkey-remote-code-execution-via-numeric-truncatio-6f3c9f",
    "title": "Valkey Remote Code Execution via Numeric Truncation",
    "summary": "Valkey clusterCreatePublishMsgBlock numeric truncation flaw permits authenticated remote attackers to execute arbitrary code on affected installations. The vulnerability, identified as CVE-2026-104351, scores CVSS 8.8, enabling remote code execution without privilege escalation. Valkey has released a patch; security teams should apply the update immediately in all affected environments to mitigate exploitation today.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-833/",
    "publishedAt": "2026-10-28T05:00:00.000Z",
    "cves": [
      "CVE-2026-104351"
    ],
    "additionalSources": [],
    "aliases": [
      "valkey-remote-code-execution-via-numeric-truncatio",
      "article-6f3c9f",
      "6f3c9f",
      "valkey-remote-code-execution-via-numeric-truncation"
    ]
  },
  {
    "slug": "apple-macos-coretext-out-of-bounds-read-disclosure-6f3c9e",
    "title": "Apple macOS CoreText Out-of-Bounds Read Disclosure",
    "summary": "Apple macOS CoreText GDEF LigCaretList out-of-bounds read flaw allows remote attackers to disclose sensitive information on affected systems. The vulnerability, CVE-2026-112656, scores CVSS 3.3 and requires user interaction, such as opening a malicious file or visiting a malicious page. Apple has issued an update; users should install the latest macOS release to eliminate the information disclosure risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-831/",
    "publishedAt": "2026-10-28T05:00:00.000Z",
    "cves": [
      "CVE-2026-112656"
    ],
    "additionalSources": [],
    "aliases": [
      "apple-macos-coretext-out-of-bounds-read-disclosure",
      "article-6f3c9e",
      "6f3c9e"
    ]
  },
  {
    "slug": "avg-internet-security-local-privilege-escalation-e-6f3c9f",
    "title": "AVG Internet Security Local Privilege Escalation Exploit",
    "summary": "A local privilege escalation vulnerability exists in AVG Internet Security’s avgToolsSvc component, allowing attackers with low‑privileged code execution to gain higher privileges. The flaw, rated CVSS 7.3, is identified as CVE-2026-6064 and requires local code execution to trigger. AVG has released a patch; security teams should apply it immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-832/",
    "publishedAt": "2026-10-28T05:00:00.000Z",
    "cves": [
      "CVE-2026-6064"
    ],
    "additionalSources": [],
    "aliases": [
      "avg-internet-security-local-privilege-escalation-e",
      "article-6f3c9f",
      "6f3c9f",
      "avg-internet-security-local-privilege-escalation-exploit"
    ]
  },
  {
    "slug": "crowdstrike-2026-report-ecrime-leads-china-activit-6b8654",
    "title": "CrowdStrike 2026 Report: eCrime Leads, China Activity Rises",
    "summary": "CrowdStrike released its 2026 Legal Threat Landscape Report, highlighting eCrime as the leading attack vector. The analysis indicates a surge in China‑originated cyber activity, with increased phishing, ransomware, and data‑exfiltration campaigns. Security teams should prioritize monitoring for emerging threat actors, enforce strict email filtering, and update incident response playbooks accordingly.",
    "category": "General",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/crowdstrike-2026-legal-threat-landscape-report/",
    "publishedAt": "2026-10-28T05:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-2026-report-ecrime-leads-china-activit",
      "article-6b8654",
      "6b8654",
      "crowdstrike-2026-report-ecrime-leads-china-activity-rises"
    ]
  },
  {
    "slug": "node2shell-brotli-flaw-under-active-exploitation-563a99",
    "title": "Node2Shell Brotli Flaw Under Active Exploitation",
    "summary": "Sophos Threat Research confirms active exploitation of Node2Shell (CVE-2026-111497), a vulnerability in the Brotli compression library. The flaw is being actively exploited in the wild, representing an urgent remote threat to systems processing Brotli-compressed data. Security teams should apply vendor patches immediately and monitor for exploitation indicators on affected infrastructure.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Sophos Threat Research",
    "sourceUrl": "https://www.sophos.com/en-us/blog/node2shell-cve-2026-111497-in-active-exploitation",
    "publishedAt": "2026-10-28T00:00:00.000Z",
    "cves": [
      "CVE-2026-111497"
    ],
    "additionalSources": [],
    "aliases": [
      "node2shell-brotli-flaw-under-active-exploitation",
      "article-563a99",
      "563a99"
    ]
  },
  {
    "slug": "gmo-group-advises-shutdown-amid-ransomware-threat-6b8c08",
    "title": "GMO Group Advises Shutdown Amid Ransomware Threat",
    "summary": "A threat actor breached GMO Group’s Onamae Desktop Cloud and threatened a ransomware attack, prompting the company to advise customers to disconnect and shut down systems. The threat exploits compromised credentials to gain remote access, potentially encrypting user data. GMO has released a mitigation guide and urges immediate network isolation.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/japans-gmo-urges-customers-to-shut-down-pcs-amid-ransomware-threat/",
    "publishedAt": "2026-10-27T23:35:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gmo-group-advises-shutdown-amid-ransomware-threat",
      "article-6b8c08",
      "6b8c08"
    ]
  },
  {
    "slug": "openai-gpt-6-1-terra-safety-testing-reveals-increa-622464",
    "title": "OpenAI GPT‑6.1 Terra Safety Testing Reveals Increased Destructive‑Action Flags",
    "summary": "OpenAI’s GPT‑6.1 Terra model was evaluated in safety testing, revealing increased destructive‑action flags compared to earlier releases. The flaw stems from insufficient policy enforcement during content generation, allowing the model to produce higher‑risk prompts. OpenAI recommends applying the latest safety updates and actively monitoring prompt outputs for elevated destructive‑action flags.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/artificial-intelligence/openais-gpt-61-terra-is-safer-overall-but-shows-more-destructive-action-flags-in-tests/",
    "publishedAt": "2026-10-27T22:43:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-gpt-6-1-terra-safety-testing-reveals-increa",
      "article-622464",
      "622464",
      "openai-gpt-6-1-terra-safety-testing-reveals-increased-destru"
    ]
  },
  {
    "slug": "ai-liability-mitigation-frameworks-for-cisos-221f17",
    "title": "AI Liability Mitigation Frameworks for CISOs",
    "summary": "Cyber leaders can mitigate AI liability by documenting AI usage, ensuring transparency, and negotiating smart contracts with vendors. These frameworks provide a structured approach to traceability, risk assessment, and compliance, reducing potential legal exposure during AI deployments. Organizations should adopt these practices early, integrate them into procurement processes, and maintain audit trails to satisfy regulatory requirements.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/3-frameworks-cisos-ai-liability",
    "publishedAt": "2026-10-27T21:15:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-liability-mitigation-frameworks-for-cisos",
      "article-221f17",
      "221f17"
    ]
  },
  {
    "slug": "ubuntu-patches-brotli-denial-of-service-and-code-e-7fbd64",
    "title": "Ubuntu Patches Brotli Denial-of-Service and Code Execution Flaw",
    "summary": "Ubuntu released USN-8956-2 to address a Brotli vulnerability affecting Ubuntu 16.04 LTS, 18.04 LTS, and 20.04 LTS. The flaw involves incorrect handling of certain compressed streams, allowing a remote attacker to cause denial of service or execute arbitrary code. Administrators should apply the update immediately to mitigate remote exploitation risk on affected releases.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8956-2",
    "publishedAt": "2026-10-27T21:14:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-patches-brotli-denial-of-service-and-code-e",
      "article-7fbd64",
      "7fbd64",
      "ubuntu-patches-brotli-denial-of-service-and-code-execution-f"
    ]
  },
  {
    "slug": "black-basta-ransomware-campaign-uses-external-team-4093b4",
    "title": "Black Basta Ransomware Campaign Uses External Team Chats for Rapid Malware Delivery",
    "summary": "A social engineering campaign, possibly tied to Black Basta ransomware, delivers malware via external team chats within fifteen minutes. The method exploits trusted communication channels, enabling rapid credential theft and lateral movement across multiple high-value targets. Teams should monitor chat traffic for anomalous file transfers, enforce strict access controls, and apply timely endpoint patches.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cloud-security/email-bombing-external-teams-chats-repeatable-access-path",
    "publishedAt": "2026-10-27T20:42:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "black-basta-ransomware-campaign-uses-external-team",
      "article-4093b4",
      "4093b4",
      "black-basta-ransomware-campaign-uses-external-team-chats-for"
    ]
  },
  {
    "slug": "artem-stryzhak-pleads-guilty-to-ransomware-operato-2da8f1",
    "title": "Artem Stryzhak Pleads Guilty to Ransomware Operator Charges",
    "summary": "Ukrainian national Artem Stryzhak pleaded guilty to charges linked to participation in at least two ransomware groups, including Nefilim and Hive. The case underscores legal action against operators behind Nefilim and Hive ransomware, highlighting international cooperation. Courts imposed a five‑year-plus sentence, underscoring the judiciary's firm stance against ransomware operations worldwide.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/nefilim-hive-ransomware-operator-70-months-prison",
    "publishedAt": "2026-10-27T20:40:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "artem-stryzhak-pleads-guilty-to-ransomware-operato",
      "article-2da8f1",
      "2da8f1",
      "artem-stryzhak-pleads-guilty-to-ransomware-operator-charges"
    ]
  },
  {
    "slug": "sboms-insufficient-for-supply-chain-attack-visibil-1a4870",
    "title": "SBOMs Insufficient for Supply Chain Attack Visibility",
    "summary": "The Shai‑Hulud supply chain attack demonstrated that static SBOMs fail to expose the full extent of compromised code. Defenders require real‑time visibility into production code and affected services to detect and remediate such compromises effectively. Adopting continuous monitoring and dynamic SBOM generation can bridge the gap between static artifacts and live threat detection.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/sboms-alone-scope-supply-chain-attack",
    "publishedAt": "2026-10-27T19:58:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sboms-insufficient-for-supply-chain-attack-visibil",
      "article-1a4870",
      "1a4870",
      "sboms-insufficient-for-supply-chain-attack-visibility"
    ]
  },
  {
    "slug": "chromeos-beta-updated-to-os-16852-15-0-3bfeed",
    "title": "ChromeOS Beta Updated to OS 16852.15.0",
    "summary": "ChromeOS Beta channel received an OS update to version 16852.15.0, including Browser 157.0.8103.23, for most devices. The update aims to improve system stability and performance, with users encouraged to report issues via the ChromeOS communities. Administrators should monitor release notes and ensure devices are updated to maintain compatibility with new features.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/10/beta-channel-update-for-chromeos_0669100502.html",
    "publishedAt": "2026-10-27T19:39:25.377Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chromeos-beta-updated-to-os-16852-15-0",
      "article-3bfeed",
      "3bfeed"
    ]
  },
  {
    "slug": "us-doj-indicts-malaysian-national-in-madagascar-sc-7387bf",
    "title": "US DOJ Indicts Malaysian National in Madagascar Scam Operation",
    "summary": "The U.S. Department of Justice indicted a Malaysian national involved in a scam center operation that targeted victims in Madagascar. The indictment also covers four other foreign nationals and highlights the expanding global reach of scam center industries across multiple jurisdictions. Law enforcement agencies should monitor cross-border scam operations and coordinate international investigations to disrupt similar illicit networks.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/malaysian-national-indicted-after-scam-centers-raid-madagascar",
    "publishedAt": "2026-10-27T19:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "us-doj-indicts-malaysian-national-in-madagascar-sc",
      "article-7387bf",
      "7387bf",
      "us-doj-indicts-malaysian-national-in-madagascar-scam-operati"
    ]
  },
  {
    "slug": "chrome-ios-stable-157-released-23db61",
    "title": "Chrome iOS Stable 157 Released",
    "summary": "Google released Chrome Stable 157 for iOS, version 157.0.8103.24, which will appear on the App Store within hours. The update focuses on stability and performance improvements, with a full list of changes available in the Git log. Users encountering new issues should file bugs through the provided channels to aid future releases.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/10/chrome-stable-for-ios-update_01149650302.html",
    "publishedAt": "2026-10-27T19:28:32.782Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-ios-stable-157-released",
      "article-23db61",
      "23db61"
    ]
  },
  {
    "slug": "microsoft-distrusts-emudhra-certificates-in-out-of-13cec4",
    "title": "Microsoft Distrusts eMudhra Certificates in Out-of-Band Update",
    "summary": "Microsoft released out‑of‑band Windows updates to remove trust in certificates issued by the compromised eMudhra certificate authority, protecting systems that do not receive automatic certificate trust updates. The flaw stems from compromised CA keys that enabled attackers to actively issue fraudulent certificates, creating a potential man‑in‑the‑middle risk for TLS connections. Apply the update via Windows Update immediately.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-releases-windows-oob-updates-to-distrust-emudhra-certificates/",
    "publishedAt": "2026-10-27T18:20:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-distrusts-emudhra-certificates-in-out-of",
      "article-13cec4",
      "13cec4",
      "microsoft-distrusts-emudhra-certificates-in-out-of-band-upda"
    ]
  },
  {
    "slug": "red-hat-openshift-container-platform-4-16-74-secur-37e481",
    "title": "Red Hat OpenShift Container Platform 4.16.74 Security Update",
    "summary": "Red Hat released OpenShift Container Platform 4.16.74, addressing multiple bugs and adding enhancements that impact the platform’s security posture. The update includes a security fix for an unspecified vulnerability, with Red Hat Product Security rating the impact as Important and providing CVSS scores via referenced CVE links. Users should apply the 4.16.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:89714",
    "publishedAt": "2026-10-27T18:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-openshift-container-platform-4-16-74-secur",
      "article-37e481",
      "37e481",
      "red-hat-openshift-container-platform-4-16-74-security-update"
    ]
  },
  {
    "slug": "red-hat-releases-critical-update-for-openshift-con-37da92",
    "title": "Red Hat Releases Critical Update for OpenShift Container Platform 4.12.102",
    "summary": "Red Hat released a critical security update for OpenShift Container Platform 4.12.102, addressing multiple bugs that could compromise container workloads. The update carries a security impact rated Critical, with CVSS base scores available for each vulnerability referenced in the advisory. Users should apply the 4.12.102 release immediately to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:90272",
    "publishedAt": "2026-10-27T17:59:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-update-for-openshift-con",
      "article-37da92",
      "37da92",
      "red-hat-releases-critical-update-for-openshift-container-pla"
    ]
  },
  {
    "slug": "ai-threatens-core-cybersecurity-skills-78cb52",
    "title": "AI Threatens Core Cybersecurity Skills",
    "summary": "Nathan Hamiel warns that AI could erode core cybersecurity skills, likening technical expertise to outdated navigation tools. The article argues that automated systems may replace tasks such as threat hunting, incident response, and security monitoring, potentially leaving professionals without hands‑on experience. Organizations should invest in continuous training and maintain human oversight to preserve essential security capabilities amid AI adoption.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/ai-kill-off-cybersecurity-pros-skills",
    "publishedAt": "2026-10-27T17:43:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-threatens-core-cybersecurity-skills",
      "article-78cb52",
      "78cb52"
    ]
  },
  {
    "slug": "cve-2026-111497-out-of-bounds-write-in-brotli-libr-58bbdb",
    "title": "CVE‑2026‑111497: Out‑of‑Bounds Write in Brotli Library",
    "summary": "CVE‑2026‑111497 is a remotely exploitable out‑of‑bounds write flaw in Google’s Brotli compression library that affects any application decompressing Brotli data via node:zlib. The flaw, also known as Node2Shell, allows attackers to corrupt process memory, potentially causing crashes or leaking sensitive data, and a PoC exists. Google and Node.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/27/node2shell-broccoli2shell-vulnerability-cve-2026-111497/",
    "publishedAt": "2026-10-27T17:38:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cve-2026-111497-out-of-bounds-write-in-brotli-libr",
      "article-58bbdb",
      "58bbdb",
      "cve-2026-111497-out-of-bounds-write-in-brotli-library"
    ]
  },
  {
    "slug": "firefox-extensions-mimic-wallets-to-steal-secrets-126ab1",
    "title": "Firefox Extensions Mimic Wallets to Steal Secrets",
    "summary": "Malicious Firefox extensions impersonating Phantom, Jupiter, and Bitget wallets have been found, tricking users into revealing recovery phrases and private keys. The extensions spoof the wallet UI and one fetches its payload remotely, enabling credential exfiltration without user awareness. Security teams should audit installed extensions, remove any that mimic wallet names, and enforce strict vetting to prevent credential theft.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Socket.dev",
    "sourceUrl": "https://socket.dev/blog/firefox-wallet-impersonators",
    "publishedAt": "2026-10-27T17:28:33.184Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "firefox-extensions-mimic-wallets-to-steal-secrets",
      "article-126ab1",
      "126ab1"
    ]
  },
  {
    "slug": "aokigahara-stealer-targets-developer-keyrings-and-25ead6",
    "title": "Aokigahara Stealer Targets Developer Keyrings and AI Assistants",
    "summary": "The Aokigahara infostealer expands traditional data theft tactics by targeting developer keyrings and AI assistant sessions, exposing sensitive business data and infrastructure from a single compromised endpoint. Its focus on AI tools and developer credentials represents an evolution in infostealer capabilities, enabling broader access to cloud environments and proprietary codebases.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/endpoint-security/aokigahara-stealer-developer-keyrings-ai-assistants",
    "publishedAt": "2026-10-27T16:47:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "aokigahara-stealer-targets-developer-keyrings-and",
      "article-25ead6",
      "25ead6",
      "aokigahara-stealer-targets-developer-keyrings-and-ai-assista"
    ]
  },
  {
    "slug": "oracle-peoplesoft-ssrf-exploit-cve-2026-35273-6873a1",
    "title": "Oracle PeopleSoft SSRF Exploit CVE-2026-35273",
    "summary": "Oracle PeopleSoft’s CVE‑2026‑35273 SSRF flaw lets attackers forge internal requests that bypass validateClient checks. The vulnerability supports remote code execution with a CVSS of 9.2, and ShinyHunters has confirmed widespread exploitation. Oracle issued a critical patch; teams should apply it immediately and disable external request capabilities as a temporary mitigation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Zero Day Initiative",
    "sourceUrl": "https://www.thezdi.com/blog/2026/10/20/cve-2026-35273-ssrf-to-rce-in-oracle-peoplesoft",
    "publishedAt": "2026-10-27T16:39:07.000Z",
    "cves": [
      "CVE-2026-35273"
    ],
    "additionalSources": [],
    "aliases": [
      "oracle-peoplesoft-ssrf-exploit-cve-2026-35273",
      "article-6873a1",
      "6873a1"
    ]
  },
  {
    "slug": "ubuntu-authd-identity-validation-flaw-exposes-loca-7fbd60",
    "title": "Ubuntu Authd Identity Validation Flaw Exposes Local Accounts",
    "summary": "Authd in Ubuntu failed to validate user identities when matching accounts from identity providers, allowing an attacker to impersonate another user and access local files. The flaw stems from improper identity verification logic, potentially enabling unauthorized access to sensitive data. Ubuntu has released a patch; administrators should update authd immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8957-1",
    "publishedAt": "2026-10-27T16:23:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-authd-identity-validation-flaw-exposes-loca",
      "article-7fbd60",
      "7fbd60",
      "ubuntu-authd-identity-validation-flaw-exposes-local-accounts"
    ]
  },
  {
    "slug": "warp-breach-exposes-agent-logs-and-telemetry-data-6ed322",
    "title": "Warp Breach Exposes Agent Logs and Telemetry Data",
    "summary": "A breach exposed Warp agentic development environment users’ decision logs and telemetry data after a third‑party vendor was compromised. The compromise leveraged unauthorized access to the vendor’s infrastructure, allowing attackers to retrieve sensitive operational telemetry and user interaction records. Warp has issued a security advisory and recommends affected users apply the vendor’s latest patch and monitor account activity for anomalies.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/warp-discloses-breach-exposing-ai-agent-logs-user-telemetry-data/",
    "publishedAt": "2026-10-27T16:15:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "warp-breach-exposes-agent-logs-and-telemetry-data",
      "article-6ed322",
      "6ed322"
    ]
  },
  {
    "slug": "top-five-cybersecurity-scams-targeting-u-s-voters-ebdb8b",
    "title": "Top Five Cybersecurity Scams Targeting U.S. Voters",
    "summary": "Five election‑related scam campaigns target voters with deceptive messages that prompt registration, donations, surveys, or merchandise purchases. These phishing attempts exploit social engineering tactics, embedding malicious links or payment requests that can compromise personal data and financial information. Security teams should verify sender authenticity, use link scanners, and educate users to avoid clicking or providing credentials on suspicious election communications.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/scams/2026/10/five-election-scams-to-watch-out-for",
    "publishedAt": "2026-10-27T15:36:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "top-five-cybersecurity-scams-targeting-u-s-voters",
      "article-ebdb8b",
      "ebdb8b"
    ]
  },
  {
    "slug": "microsoft-net-elevation-of-privilege-vulnerability-74506d",
    "title": "Microsoft .NET Elevation of Privilege Vulnerability CVE‑2026‑70161",
    "summary": "Microsoft .NET framework contains an elevation of privilege flaw identified as CVE‑2026‑70161 that allows local users to gain higher privileges on affected systems. The vulnerability exploits improper access control checks during component initialization, enabling attackers to execute privileged code without authentication. Microsoft has released a patch in the latest security update; administrators should apply it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70161",
    "publishedAt": "2026-10-27T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-net-elevation-of-privilege-vulnerability",
      "article-74506d",
      "74506d",
      "microsoft-net-elevation-of-privilege-vulnerability-cve-2026-"
    ]
  },
  {
    "slug": "goahead-tls-flaw-enables-session-decryption-with-r-3e2958",
    "title": "GoAhead TLS Flaw Enables Session Decryption with Revoked Client Certificates",
    "summary": "GoAhead embedded web servers using OpenSSL mutual‑TLS load a certificate revocation list but never enable revocation checking, allowing revoked client certificates to authenticate on affected installations. The flaw permits attackers to decrypt TLS sessions and bypass authentication controls, exposing sensitive data and enabling credential theft without requiring privileged access. Patch is available from GoAhead.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/goahead-tls-flaws-allow-revoked-client.html",
    "publishedAt": "2026-10-27T13:59:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "goahead-tls-flaw-enables-session-decryption-with-r",
      "article-3e2958",
      "3e2958",
      "goahead-tls-flaw-enables-session-decryption-with-revoked-cli"
    ]
  },
  {
    "slug": "denver-health-plan-breach-exposes-238-000-records-474ada",
    "title": "Denver Health Plan Breach Exposes 238,000 Records via Leaked Key",
    "summary": "A leaked SquareML access key potentially exposed a database containing personal and health information of 238,000 Denver Health Plan members. The breach resulted from accidental key disclosure, allowing unauthenticated read access to sensitive records, including medical histories and contact details. Immediate remediation requires revoking the compromised key, rotating all credentials, and auditing access controls to prevent recurrence.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/vendor-key-leak-puts-data-of-238000-denver-health-plan-members-at-risk/",
    "publishedAt": "2026-10-27T13:30:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "denver-health-plan-breach-exposes-238-000-records",
      "article-474ada",
      "474ada",
      "denver-health-plan-breach-exposes-238-000-records-via-leaked"
    ]
  },
  {
    "slug": "php2shell-exploitation-attempts-fail-in-observed-a-5582d7",
    "title": "PHP2Shell Exploitation Attempts Fail in Observed Attacks",
    "summary": "PHP2Shell, a PHP-based web shell, has been targeted for exploitation attempts, but no successful attacks have been reported to date. The vulnerability, identified as CVE-2026-109618, remains unexploited, with attackers lacking a working exploit or privileges to achieve remote code execution. Security teams should apply the vendor’s patch, update PHP to the latest stable release, and monitor for anomalous shell activity.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/php2shell-exploitation-so-far",
    "publishedAt": "2026-10-27T13:21:45.000Z",
    "cves": [
      "CVE-2026-109618"
    ],
    "additionalSources": [],
    "aliases": [
      "php2shell-exploitation-attempts-fail-in-observed-a",
      "article-5582d7",
      "5582d7",
      "php2shell-exploitation-attempts-fail-in-observed-attacks"
    ]
  },
  {
    "slug": "yoba-malware-distributed-via-signed-ai-tool-binari-7e8a7a",
    "title": "Yoba Malware Distributed via Signed AI Tool Binaries",
    "summary": "A campaign leverages signed ChatGPT and Claude binaries to deliver the Yoba malware chain through fake GitHub projects masquerading as AI desktop applications. The attackers embed malicious code in these binaries, exploiting trust in signed software to execute payloads on victim systems. Security teams should verify signatures, monitor for anomalous binaries, and apply updated endpoint protection rules.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/tricks-from-the-past-deployed-via-signed-chatgpt-and-claude-binaries/",
    "publishedAt": "2026-10-27T13:03:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "yoba-malware-distributed-via-signed-ai-tool-binari",
      "article-7e8a7a",
      "7e8a7a",
      "yoba-malware-distributed-via-signed-ai-tool-binaries"
    ]
  },
  {
    "slug": "arctic-wolf-2026-agentic-security-operations-repor-610053",
    "title": "Arctic Wolf 2026 Agentic Security Operations Report",
    "summary": "Arctic Wolf released its 2026 Agentic Security Operations Report, outlining how agentic AI collaborates with analysts to accelerate security investigations. The report details improvements in threat detection, alert triage, and response times, emphasizing the synergy between human expertise and automated analysis. Readers are encouraged to download the full report for insights on integrating agentic AI into existing SOC workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/report-uk/agentic-security-operations-report-2026/",
    "publishedAt": "2026-10-27T13:00:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "arctic-wolf-2026-agentic-security-operations-repor",
      "article-610053",
      "610053",
      "arctic-wolf-2026-agentic-security-operations-report"
    ]
  },
  {
    "slug": "camera-management-software-compromised-malware-dep-b2477a",
    "title": "Camera Management Software Compromised, Malware Deployed",
    "summary": "Attackers compromised a camera management platform, enabling malware deployment, persistence, and command‑and‑control beaconing. The exploitation chain leveraged a software flaw that allowed remote code execution, with attackers establishing a foothold and maintaining persistence through privileged backdoors. Security teams should apply vendor patches, enforce least‑privilege access, and monitor for anomalous outbound traffic to mitigate further compromise.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/camera-management-software-compromise-malware",
    "publishedAt": "2026-10-27T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "camera-management-software-compromised-malware-dep",
      "article-b2477a",
      "b2477a",
      "camera-management-software-compromised-malware-deployed"
    ]
  },
  {
    "slug": "cloudflare-launches-php-capture-the-flag-challenge-3764d5",
    "title": "Cloudflare Launches PHP Capture the Flag Challenge for WAF Testing",
    "summary": "Cloudflare has introduced a PHP Capture the Flag challenge integrated with its Bug Bounty program to evaluate the effectiveness of its Web Application Firewall. Researchers are invited to bypass the WAF defenses and capture the flag, providing insights into potential weaknesses. Participants should follow the challenge guidelines and report findings through the official bug bounty portal.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/php-ctf/",
    "publishedAt": "2026-10-27T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-launches-php-capture-the-flag-challenge",
      "article-3764d5",
      "3764d5",
      "cloudflare-launches-php-capture-the-flag-challenge-for-waf-t"
    ]
  },
  {
    "slug": "cloudflare-radar-records-widespread-internet-outag-67c23b",
    "title": "Cloudflare Radar Records Widespread Internet Outages in Q3 2026",
    "summary": "Cloudflare Radar recorded widespread internet outages during Q3 2026, with power failures, natural disasters, and government shutdowns disrupting global connectivity. These events caused significant traffic degradation and service unavailability across multiple regions, highlighting the fragility of critical infrastructure. Operators should enhance redundancy, monitor power supplies, and coordinate with authorities to mitigate future disruptions.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/q3-2026-internet-disruption-summary/",
    "publishedAt": "2026-10-27T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-radar-records-widespread-internet-outag",
      "article-67c23b",
      "67c23b",
      "cloudflare-radar-records-widespread-internet-outages-in-q3-2"
    ]
  },
  {
    "slug": "arctic-wolf-report-shows-agentic-ai-resolves-most-bf5d28",
    "title": "Arctic Wolf Report Shows Agentic AI Resolves Most Security Investigations",
    "summary": "Arctic Wolf published its 2026 Agentic Security Operations Report detailing artificial intelligence integration in SOC workflows. The report reveals agentic AI now resolves 60% of security investigations, significantly reducing alert fatigue and threat response times. Organizations are advised to implement AI-driven triage alongside mandatory human analyst oversight to maximize overall operational efficiency.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/press-releases/arctic-wolf-2026-agentic-security-operations-report-reveals-ai-now-resolves-the-majority-of-security-investigations-in-its-agentic-soc/",
    "publishedAt": "2026-10-27T12:58:30.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Arctic Wolf",
        "sourceUrl": "https://arcticwolf.com/resources/report/2026-agentic-security-operations-report/"
      }
    ],
    "aliases": [
      "arctic-wolf-report-shows-agentic-ai-resolves-most",
      "article-bf5d28",
      "bf5d28",
      "arctic-wolf-report-shows-agentic-ai-resolves-most-security-i"
    ]
  },
  {
    "slug": "ai-technologies-reshape-human-intimacy-creating-ne-7d6a7c",
    "title": "AI Technologies Reshape Human Intimacy, Creating New Exploitation Vectors",
    "summary": "The report highlights how AI technologies are reshaping human intimacy, blurring authenticity and enabling new exploitation vectors. AI models produce persuasive content that can deceive users, creating opportunities for social engineering and privacy breaches across digital platforms. Security teams should monitor AI-generated material, enforce verification protocols, and educate users to mitigate manipulation risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/ai/2026/10/artificial-intimacy-love-and-lies-in-the-age-of-ai",
    "publishedAt": "2026-10-27T12:40:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-technologies-reshape-human-intimacy-creating-ne",
      "article-7d6a7c",
      "7d6a7c",
      "ai-technologies-reshape-human-intimacy-creating-new-exploita"
    ]
  },
  {
    "slug": "php-and-node-js-flaws-threaten-trusted-websites-19c656",
    "title": "PHP and Node.js Flaws Threaten Trusted Websites",
    "summary": "PHP and Node.js flaws, hacked sites, fake updates, and rogue certificates can risk users on trusted websites. The vulnerabilities arise from insecure server configurations and certificate mismanagement, enabling credential theft and man‑in‑the‑middle attacks; no specific CVE cited. Users should verify site certificates, avoid downloading unverified updates, and keep PHP/Node.js environments patched.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/10/the-webs-having-a-rough-week-heres-how-to-browse-safely",
    "publishedAt": "2026-10-27T12:22:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php-and-node-js-flaws-threaten-trusted-websites",
      "article-19c656",
      "19c656"
    ]
  },
  {
    "slug": "microsoft-authenticator-flaw-enables-token-theft-1cfe87",
    "title": "Microsoft Authenticator Flaw Enables Token Theft",
    "summary": "Microsoft Authenticator for Android had a flaw allowing permissionless malicious apps to impersonate trusted Microsoft apps and harvest work account sign‑in tokens. The vulnerability, tracked as CVE‑2026‑80097, exploits the app’s lack of permission checks, enabling credential theft without user interaction; a public PoC demonstrated the exploit. Microsoft released Authenticator 6.2606.4246, and users must update immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/microsoft-authenticator-flaw-let.html",
    "publishedAt": "2026-10-27T12:09:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-authenticator-flaw-enables-token-theft",
      "article-1cfe87",
      "1cfe87"
    ]
  },
  {
    "slug": "mitsubishi-electric-patches-multiple-ics-product-v-41cb8a",
    "title": "Mitsubishi Electric Patches Multiple ICS Product Vulnerabilities",
    "summary": "CISA issued a CSAF advisory for multiple vulnerabilities in Mitsubishi Electric GENESIS, GENESIS64, ICONICS Suite, and related industrial products enabling arbitrary code execution and authentication bypass. The flaws (CVE-2023-4863, CVE-2026-16436, CVE-2026-16437, CVE-2026-16438) permit remote code execution, credential bypass, and arbitrary operations leading to data tampering, destruction, and denial-of-service conditions. Affected versions include GENESIS64 and ICONICS Suite 10.97 and up",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-300-02",
    "publishedAt": "2026-10-27T12:00:00.000Z",
    "cves": [
      "CVE-2023-4863",
      "CVE-2026-16436",
      "CVE-2026-16437",
      "CVE-2026-16438"
    ],
    "additionalSources": [],
    "aliases": [
      "mitsubishi-electric-patches-multiple-ics-product-v",
      "article-41cb8a",
      "41cb8a",
      "mitsubishi-electric-patches-multiple-ics-product-vulnerabili"
    ]
  },
  {
    "slug": "epics-base-integer-overflow-vulnerability-cve-2026-41cb8a",
    "title": "EPICS Base Integer Overflow Vulnerability (CVE-2026-114595) Enables Remote Code Execution",
    "summary": "An integer overflow in EPICS Base release 7.0.10 and prior allows an attacker to cause memory corruption, potentially leading to arbitrary code execution or denial‑of‑service. The flaw arises from improper handling of network request lengths, resulting in incorrect memory allocation and type confusion. EPICS has released a patch; operators should update to the latest release and monitor for anomalous activity.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-300-01",
    "publishedAt": "2026-10-27T12:00:00.000Z",
    "cves": [
      "CVE-2026-114595"
    ],
    "additionalSources": [],
    "aliases": [
      "epics-base-integer-overflow-vulnerability-cve-2026",
      "article-41cb8a",
      "41cb8a",
      "epics-base-integer-overflow-vulnerability-cve-2026-114595-en"
    ]
  },
  {
    "slug": "research-proves-ai-models-can-hide-backdoors-21fd94",
    "title": "Research Proves AI Models Can Hide Backdoors",
    "summary": "Researchers demonstrated that AI models can embed encrypted neural networks within host weights, executing only upon a secret trigger. The proof-of-concept, implemented in PyTorch, uses digital lockers to make hidden circuits provably hard to elicit under cryptographic assumptions even with full weight access. The work extends prior hiding techniques from fixed strings to arbitrary computations",
    "category": "General",
    "severity": "LOW",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/10/hiding-capabilities-in-ai-models.html",
    "publishedAt": "2026-10-27T11:01:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "research-proves-ai-models-can-hide-backdoors",
      "article-21fd94",
      "21fd94"
    ]
  },
  {
    "slug": "samsung-tvs-may-listen-via-connected-soundbars-5a742a",
    "title": "Samsung TVs May Listen via Connected Soundbars",
    "summary": "A vulnerability in Samsung TVs lacking built‑in microphones allows connected soundbars or Bluetooth microphones to capture audio, enabling covert listening. The flaw exploits the TV’s audio‑routing firmware, permitting unauthorized audio streams to bypass user‑controlled privacy settings without requiring network access. Samsung released a firmware update disabling external microphone routing; users should apply it.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/privacy/2026/10/samsung-tvs-without-mics-may-listen-through-soundbars-researcher-says",
    "publishedAt": "2026-10-27T10:44:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "samsung-tvs-may-listen-via-connected-soundbars",
      "article-5a742a",
      "5a742a"
    ]
  },
  {
    "slug": "apple-backports-zero-day-patch-for-older-ios-devic-118c92",
    "title": "Apple Backports Zero‑Day Patch for Older iOS Devices",
    "summary": "Apple has backported security patches to older iPhones and iPads, addressing a zero‑day bug exploited in sophisticated targeted attacks on iOS devices. CVE-2026-86950 allows remote code execution via a malformed graphics request, actively exploited. Apple has issued a firmware update for affected devices; security teams should install the patch immediately to eliminate the exploitation vector.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/apple/apple-backports-coregraphics-zero-day-patches-to-older-iphones/",
    "publishedAt": "2026-10-27T10:36:12.000Z",
    "cves": [
      "CVE-2026-86950"
    ],
    "additionalSources": [],
    "aliases": [
      "apple-backports-zero-day-patch-for-older-ios-devic",
      "article-118c92",
      "118c92",
      "apple-backports-zero-day-patch-for-older-ios-devices"
    ]
  },
  {
    "slug": "ryan-fetterman-discusses-practical-detection-engin-1e450e",
    "title": "Ryan Fetterman Discusses Practical Detection Engineering",
    "summary": "Ryan Fetterman, a federal SOC analyst, outlines practical detection engineering techniques and career guidance for blue teams. He emphasizes hands‑on monitoring, threat hunting, and iterative hypothesis testing as core skills. Fetterman advises balancing workload with continuous learning to prevent burnout, advocating structured playbooks and automated alert tuning for sustainable security operations.",
    "category": "General",
    "severity": "LOW",
    "source": "Cisco Talos",
    "sourceUrl": "https://blog.talosintelligence.com/from-federal-socs-to-talos-ryan-fetterman-on-practical-security-research/",
    "publishedAt": "2026-10-27T10:00:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ryan-fetterman-discusses-practical-detection-engin",
      "article-1e450e",
      "1e450e",
      "ryan-fetterman-discusses-practical-detection-engineering"
    ]
  },
  {
    "slug": "australia-disrupts-amadey-malware-backend-180k-dev-4db04f",
    "title": "Australia Disrupts Amadey Malware Backend, 180K Devices Affected",
    "summary": "The Australian Signals Directorate (ASD) successfully infiltrated and severed access to the backend infrastructure of the Amadey malware, disrupting operations affecting approximately 180,000 infected computers worldwide. The criminal operator lost the ability to command and control compromised endpoints, preventing further data theft or malicious payload delivery.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/australia-gets-into-amadey-malware.html",
    "publishedAt": "2026-10-27T09:33:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "australia-disrupts-amadey-malware-backend-180k-dev",
      "article-4db04f",
      "4db04f",
      "australia-disrupts-amadey-malware-backend-180k-devices-affec"
    ]
  },
  {
    "slug": "openai-compaction-feature-exposes-hidden-reasoning-7e5761",
    "title": "OpenAI Compaction Feature Exposes Hidden Reasoning",
    "summary": "Security researchers from Xint demonstrated that OpenAI's compaction feature, designed to shrink long conversations for storage efficiency, can be abused to extract a model's hidden reasoning in plain text. The technique bypasses OpenAI's normal encryption of internal reasoning chains, allowing unauthorized access to proprietary model logic and intermediate problem-solving steps.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/openai-compaction-flaw-let-researchers.html",
    "publishedAt": "2026-10-27T08:22:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-compaction-feature-exposes-hidden-reasoning",
      "article-7e5761",
      "7e5761"
    ]
  },
  {
    "slug": "maritime-coalition-unveils-open-threat-database-fo-694cac",
    "title": "Maritime Coalition Unveils Open Threat Database for Port Infrastructure",
    "summary": "The Maritime Coalition has released a free vulnerability database cataloging nearly 30,000 IT and OT weaknesses affecting ship and port systems, including 37 maritime‑specific products. The database aggregates known flaws to aid operators in prioritizing security controls and patching schedules. Users can access the repository online to download vulnerability lists and mitigation guidance.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/maritime-coalition-launches-free-vulnerability-database-for-ship-and-port-systems/",
    "publishedAt": "2026-10-27T07:14:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "maritime-coalition-unveils-open-threat-database-fo",
      "article-694cac",
      "694cac",
      "maritime-coalition-unveils-open-threat-database-for-port-inf"
    ]
  },
  {
    "slug": "google-project-zero-compares-fuzzilli-and-bigsleep-75f539",
    "title": "Google Project Zero Compares Fuzzilli and BigSleep on V8",
    "summary": "Google Project Zero compared the generative JavaScript engine fuzzer Fuzzilli with the LLM-based bug finder BigSleep against Chrome’s V8 engine. Over six months, BigSleep reported 45 vulnerabilities versus Fuzzilli’s 37, with an estimated 60% overlap in discovered bugs. The study demonstrates that LLMs and fuzzers uncover distinct flaw sets, underscoring their complementary roles in vulnerability discovery.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Project Zero",
    "sourceUrl": "https://projectzero.google/2026/10/fuzzing-v-AI.html",
    "publishedAt": "2026-10-27T07:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-project-zero-compares-fuzzilli-and-bigsleep",
      "article-75f539",
      "75f539",
      "google-project-zero-compares-fuzzilli-and-bigsleep-on-v8"
    ]
  },
  {
    "slug": "attackers-hijack-dahua-ip-cameras-in-ukraine-using-185083",
    "title": "Attackers Hijack Dahua IP Cameras in Ukraine Using P2P Access and Auth Weaknesses",
    "summary": "Attackers exploited weak authentication and P2P access controls on Dahua IP cameras and DVRs in Ukraine, enabling unauthorized remote viewing, configuration changes, and creation of third‑party accounts. The vulnerability allows remote attackers to bypass device security, potentially exposing sensitive surveillance feeds and compromising operational integrity. Operators should disable P2P features, enforce strong passwords, and apply vendor firmware updates immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/attackers-hijack-dahua-ip-cameras-in.html",
    "publishedAt": "2026-10-27T06:34:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "attackers-hijack-dahua-ip-cameras-in-ukraine-using",
      "article-185083",
      "185083",
      "attackers-hijack-dahua-ip-cameras-in-ukraine-using-p2p-acces"
    ]
  },
  {
    "slug": "ai-security-startups-expected-to-merge-into-larger-2149ac",
    "title": "AI Security Startups Expected to Merge into Larger Platforms",
    "summary": "The interview discusses how AI security startups will consolidate into larger platform offerings within the cybersecurity ecosystem. Key categories expected to survive include core threat detection, while others may become platform features as vendors merge. Investors should focus on Q3 funding trends, Israel’s venture share, and foundational controls before agent deployment to mitigate integration risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/27/jonathan-care-kuppingercole-analysts-ai-security-market/",
    "publishedAt": "2026-10-27T06:30:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-security-startups-expected-to-merge-into-larger",
      "article-2149ac",
      "2149ac",
      "ai-security-startups-expected-to-merge-into-larger-platforms"
    ]
  },
  {
    "slug": "microsoft-authenticator-android-flaw-enables-rogue-1f8218",
    "title": "Microsoft Authenticator Android Flaw Enables Rogue Apps to Steal Work Accounts",
    "summary": "A flaw in Microsoft Authenticator on Android allows any local app to silently hijack a user’s work account without permissions. The vulnerability bypasses the broker mechanism used by Teams and Outlook, enabling credential theft without user interaction or elevated privileges. Microsoft has released an update that patches the flaw; administrators should upgrade Authenticator immediately and enforce app permission restrictions.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/27/microsoft-authenticator-vulnerability-patchedcve-2026-80097/",
    "publishedAt": "2026-10-27T06:14:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-authenticator-android-flaw-enables-rogue",
      "article-1f8218",
      "1f8218",
      "microsoft-authenticator-android-flaw-enables-rogue-apps-to-s"
    ]
  },
  {
    "slug": "cve-2026-111497-brotli-vulnerability-affects-palo-4fd0b0",
    "title": "CVE-2026-111497 Brotli Vulnerability Affects Palo Alto Networks Products",
    "summary": "A critical Brotli compression flaw, CVE-2026-111497, compromises Palo Alto Networks devices via unauthenticated remote code execution. The vulnerability, rated CVSS 9.5, allows attackers to inject malicious payloads into network traffic, potentially bypassing security controls. Palo Alto Networks has released a patch; administrators must apply the update immediately to mitigate exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-111497",
    "publishedAt": "2026-10-27T05:40:00.000Z",
    "cves": [
      "CVE-2026-111497"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-111497-brotli-vulnerability-affects-palo",
      "article-4fd0b0",
      "4fd0b0",
      "cve-2026-111497-brotli-vulnerability-affects-palo-alto-netwo"
    ]
  },
  {
    "slug": "zdi-26-811-mailenable-parseobjectresponse-xml-exte-6f3c97",
    "title": "ZDI-26-811: MailEnable parseObjectResponse XML External Entity Processing Information Disclosure Vulnerability",
    "summary": "A remote XML External Entity processing flaw in MailEnable’s parseObjectResponse component allows authenticated attackers to read sensitive data from affected installations. The vulnerability, identified as CVE-2026-114552, carries a CVSS score of 6.5 and requires valid credentials for exploitation. MailEnable has released a patch; administrators should apply the update immediately to mitigate the disclosure risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-811/",
    "publishedAt": "2026-10-27T05:00:00.000Z",
    "cves": [
      "CVE-2026-114552"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-811-mailenable-parseobjectresponse-xml-exte",
      "article-6f3c97",
      "6f3c97",
      "zdi-26-811-mailenable-parseobjectresponse-xml-external-entit"
    ]
  },
  {
    "slug": "zdi-26-810-mailenable-auth-cleartext-storage-infor-6f3c97",
    "title": "ZDI-26-810: MailEnable Auth Cleartext Storage Information Disclosure Vulnerability",
    "summary": "An unauthenticated information disclosure flaw in MailEnable’s authentication module permits attackers to read stored cleartext credentials from affected systems. The issue, referenced as CVE-2026-114551, has a CVSS score of 5.9 and does not require prior authentication. MailEnable has issued a patch; security teams should update promptly to prevent credential exposure.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-810/",
    "publishedAt": "2026-10-27T05:00:00.000Z",
    "cves": [
      "CVE-2026-114551"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-810-mailenable-auth-cleartext-storage-infor",
      "article-6f3c97",
      "6f3c97",
      "zdi-26-810-mailenable-auth-cleartext-storage-information-dis"
    ]
  },
  {
    "slug": "red-hat-enterprise-linux-8-6-rhc-client-security-u-37da80",
    "title": "Red Hat Enterprise Linux 8.6 rhc Client Security Update Addresses Critical Flaw",
    "summary": "An update for the Red Hat Enterprise Linux 8.6 rhc client fixes a security flaw in Advanced Mission Critical Update Support and Extended Update Support Long‑Life Add‑On. Red Hat Product Security rates the issue as Important, with a CVSS base score listed in the CVE references, but no public exploit.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:90725",
    "publishedAt": "2026-10-27T04:35:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-enterprise-linux-8-6-rhc-client-security-u",
      "article-37da80",
      "37da80",
      "red-hat-enterprise-linux-8-6-rhc-client-security-update-addr"
    ]
  },
  {
    "slug": "chromeos-lts-150-update-addresses-multiple-cves-732b9d",
    "title": "ChromeOS LTS-150 Update Addresses Multiple CVEs",
    "summary": "ChromeOS LTS-150 version 150.0.7871.287 is being rolled out, addressing several CVEs including CVE-2026-103629, CVE-2026-110166, CVE-2026-113279, and CVE-2026-110138. The vulnerabilities involve integer overflows, buffer overflows, memory corruption, and use‑after‑free conditions across Skia, Animation, Accessibility, Payments, Core, Compositing, Video, and ShapeDetection components. Users should install the update promptly to mitigate the identified security flaws.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/10/long-term-support-channel-update-for_0661547040.html",
    "publishedAt": "2026-10-27T02:10:25.437Z",
    "cves": [
      "CVE-2026-103629",
      "CVE-2026-110166",
      "CVE-2026-113279",
      "CVE-2026-110138"
    ],
    "additionalSources": [],
    "aliases": [
      "chromeos-lts-150-update-addresses-multiple-cves",
      "article-732b9d",
      "732b9d"
    ]
  },
  {
    "slug": "apple-releases-patch-for-cve-2026-109618-and-303-o-57dd7e",
    "title": "Apple Releases Patch for CVE-2026-109618 and 303 Other Vulnerabilities",
    "summary": "Apple issued a patch update covering 304 vulnerabilities, including CVE-2026-109618, as part of its October 2026 security release. The update addresses a range of issues across macOS and iOS platforms, though specific technical details are not disclosed. Users are advised to apply the latest update to ensure protection against the identified weaknesses.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/33458",
    "publishedAt": "2026-10-27T02:09:55.000Z",
    "cves": [
      "CVE-2026-109618"
    ],
    "additionalSources": [],
    "aliases": [
      "apple-releases-patch-for-cve-2026-109618-and-303-o",
      "article-57dd7e",
      "57dd7e",
      "apple-releases-patch-for-cve-2026-109618-and-303-other-vulne"
    ]
  },
  {
    "slug": "penetration-tester-arrested-for-artex-ai-breach-of-58f8a2",
    "title": "Penetration Tester Arrested for ARTEX AI Breach of 90 South Korean Organizations",
    "summary": "A penetration tester weaponized the ARTEX AI framework to breach 90 South Korean organizations, leading to seven arrests. The breach leveraged ARTEX AI’s automated credential harvesting and lateral movement, exfiltrating sensitive data and demanding ransom from. Security teams should rotate credentials, enable multi‑factor authentication, and monitor AI‑driven anomalies to mitigate similar attacks in 2026.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/seoul-police-arrest-pentester-over-82m-artex-ai-breach",
    "publishedAt": "2026-10-27T00:59:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "penetration-tester-arrested-for-artex-ai-breach-of",
      "article-58f8a2",
      "58f8a2",
      "penetration-tester-arrested-for-artex-ai-breach-of-90-south-"
    ]
  },
  {
    "slug": "cve-2026-111497-enables-remote-code-execution-in-p-2b6599",
    "title": "CVE-2026-111497 Enables Remote Code Execution in PHP Windows Packages",
    "summary": "CVE-2026-111497 permits remote code execution in PHP Windows packages via Brotli auto‑decompression triggered by cURL and Guzzle. The CVSS 9.2 flaw allows unauthenticated attackers to run arbitrary code on affected servers, threatening web applications. PHP released a patch for the Windows build; apply it immediately or disable Brotli decompression as a workaround.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cve-2026-111497-php-windows-brotli-memory-corruption-patch-guide",
    "publishedAt": "2026-10-27T00:59:11.000Z",
    "cves": [
      "CVE-2026-111497"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-111497-enables-remote-code-execution-in-p",
      "article-2b6599",
      "2b6599",
      "cve-2026-111497-enables-remote-code-execution-in-php-windows"
    ]
  },
  {
    "slug": "magento-cms-skimmer-exploit-compromises-953-stores-7aa7f5",
    "title": "Magento CMS Skimmer Exploit Compromises 953 Stores",
    "summary": "Attackers exploited a flaw in Magento CMS, injecting JavaScript skimmers via cms_block poisoning and PolyShell RCE, compromising over 953 e‑commerce stores. The flaw allows arbitrary code execution via cms_block, enabling PolyShell payloads; the exploit is actively used in the wild with no public PoC. Magento has released a patch; administrators should apply the latest update and disable unused cms_block modules.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/magento-cms-skimmer-how-to-detect-block-953-store-attack",
    "publishedAt": "2026-10-27T00:58:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "magento-cms-skimmer-exploit-compromises-953-stores",
      "article-7aa7f5",
      "7aa7f5"
    ]
  },
  {
    "slug": "fragmented-ai-security-benchmarks-fail-to-capture-6eb353",
    "title": "Fragmented AI Security Benchmarks Fail to Capture Real‑World Threats",
    "summary": "The proliferation of AI security benchmarks creates fragmented evaluation landscapes, with each metric focusing on distinct aspects of model robustness. Because benchmarks target isolated variables, they fail to capture real‑world attack vectors, underscoring the need for integrated testing against proprietary codebases. Security teams should supplement benchmark results with internal penetration tests and continuous monitoring to ensure comprehensive AI model protection.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-analytics/benchmarking-security-of-ai-models-poses-challenges",
    "publishedAt": "2026-10-27T00:26:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fragmented-ai-security-benchmarks-fail-to-capture",
      "article-6eb353",
      "6eb353",
      "fragmented-ai-security-benchmarks-fail-to-capture-real-world"
    ]
  },
  {
    "slug": "flaw-in-ignition-component-of-rhel-9-4-sap-solutio-37da88",
    "title": "Flaw in Ignition Component of RHEL 9.4 SAP Solutions Enables Local Privilege Escalation",
    "summary": "A flaw in the ignition component of Red Hat Enterprise Linux 9.4 SAP Solutions permits local privilege escalation. The issue stems from improper input validation; CVSS scores 7.0‑8.5 and a public PoC confirm exploitability, making it a high‑risk vulnerability. Red Hat released an update; apply the patch immediately to remediate the vulnerability today.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:90518",
    "publishedAt": "2026-10-27T00:05:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "flaw-in-ignition-component-of-rhel-9-4-sap-solutio",
      "article-37da88",
      "37da88",
      "flaw-in-ignition-component-of-rhel-9-4-sap-solutions-enables"
    ]
  },
  {
    "slug": "university-of-copenhagen-data-breach-exposes-525-0-59b7e3",
    "title": "University of Copenhagen Data Breach Exposes 525,000 Personal Records",
    "summary": "Hackers accessed a test environment at the University of Copenhagen, exposing personal data of 525,000 individuals. The breach involved unauthorized entry into a non-production system, revealing names, addresses, and student IDs. The university has notified affected parties and is conducting a forensic investigation, urging users to monitor for identity theft.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/university-of-copenhagen-data-breach-exposes-data-of-525-000-people/",
    "publishedAt": "2026-10-26T22:20:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "university-of-copenhagen-data-breach-exposes-525-0",
      "article-59b7e3",
      "59b7e3",
      "university-of-copenhagen-data-breach-exposes-525-000-persona"
    ]
  },
  {
    "slug": "cloudflare-workers-ai-glm-5-3-kv-cache-exposure-5ff437",
    "title": "Cloudflare Workers AI GLM‑5.3 KV Cache Exposure",
    "summary": "A configuration mismatch in Cloudflare Workers AI’s GLM‑5.3 model exposed KV cache pages across requests via an SGLang bug. The flaw allowed unauthenticated readers to retrieve sensitive session data, creating a cross‑request information disclosure with potential credential leakage. Cloudflare released a patch correcting the SGLang configuration and recommends updating to the latest Workers AI runtime to mitigate the exposure.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/kv-cache-exposure-remediation/",
    "publishedAt": "2026-10-26T22:01:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-workers-ai-glm-5-3-kv-cache-exposure",
      "article-5ff437",
      "5ff437"
    ]
  },
  {
    "slug": "nvidia-executive-urges-cisos-to-own-ai-risks-1d1431",
    "title": "Nvidia Executive Urges CISOs to Own AI Risks",
    "summary": "Nvidia security executive Mark Weatherford emphasized that CISOs must guide business leaders in evaluating AI benefits and risks. The briefing highlighted that organizations deploying AI must retain ownership of associated security responsibilities and risk mitigation. No vendor patch or technical fix is required; the focus remains on governance and risk management practices.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-careers/risks-rewards-ai-redefining-ciso-role",
    "publishedAt": "2026-10-26T21:44:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nvidia-executive-urges-cisos-to-own-ai-risks",
      "article-1d1431",
      "1d1431"
    ]
  },
  {
    "slug": "former-pentester-uses-artex-ai-to-steal-8-2-millio-7e6d07",
    "title": "Former Pentester Uses ARTEX AI to Steal 8.2 Million Records",
    "summary": "A former penetration tester employed the ARTEX AI pentesting framework to compromise over 90 South Korean organizations, exfiltrating 8.2 million data records. The operation leveraged automated vulnerability discovery and credential harvesting, enabling attackers to bypass authentication controls without manual intervention. South Korean police identified seven suspects; organizations should review access controls, monitor anomalous data exfiltration, and apply security patches.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/former-pentester-used-artex-ai-to-steal-82-million-data-records/",
    "publishedAt": "2026-10-26T21:08:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "former-pentester-uses-artex-ai-to-steal-8-2-millio",
      "article-7e6d07",
      "7e6d07",
      "former-pentester-uses-artex-ai-to-steal-8-2-million-records"
    ]
  },
  {
    "slug": "texas-sues-openai-over-alleged-deceptive-ai-safety-79c7fc",
    "title": "Texas Sues OpenAI Over Alleged Deceptive AI Safety Claims",
    "summary": "Texas files a lawsuit against OpenAI alleging deceptive marketing of its AI safety claims, targeting the company’s CEO under state trade‑practice laws. The suit seeks personal liability for founder Sam Altman and demands regulatory reforms and substantial fines for consumer deception. OpenAI has not yet responded, but the case could prompt stricter oversight of AI marketing practices across the industry.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/texas-sues-openai-deceiving-customers",
    "publishedAt": "2026-10-26T21:03:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "texas-sues-openai-over-alleged-deceptive-ai-safety",
      "article-79c7fc",
      "79c7fc",
      "texas-sues-openai-over-alleged-deceptive-ai-safety-claims"
    ]
  },
  {
    "slug": "hackers-exploit-php2shell-vulnerability-to-target-56d3fb",
    "title": "Hackers Exploit PHP2Shell Vulnerability to Target Universities and Businesses",
    "summary": "Hackers are exploiting the PHP2Shell vulnerability, using publicly available code to compromise PHP‑based websites at universities and businesses. The flaw, identified as CVE-2026-109618 and CVE-2026-109619, has a CVSS v4.0 score of 9.2, enabling remote code execution without authentication. Administrators should apply the vendor‑issued patches immediately and disable exposed PHP functions to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/public-php2shell-exploit-code/",
    "publishedAt": "2026-10-26T20:29:21.000Z",
    "cves": [
      "CVE-2026-109618",
      "CVE-2026-109619"
    ],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-php2shell-vulnerability-to-target",
      "article-56d3fb",
      "56d3fb",
      "hackers-exploit-php2shell-vulnerability-to-target-universiti"
    ]
  },
  {
    "slug": "anthropic-files-for-potentially-the-biggest-ipo-ev-31e9d8",
    "title": "Anthropic Files for Potentially the Biggest IPO Ever",
    "summary": "Anthropic has filed for what could become the largest initial public offering in history, according to a SecurityWeek report. The company’s chief executive highlighted the potential for artificial intelligence to act autonomously in ways that could threaten human safety. Investors and regulators should monitor the filing closely, as the IPO could influence market dynamics and regulatory scrutiny of AI development.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/anthropic-files-for-potentially-the-biggest-ipo-ever-as-ceo-warns-of-risk-to-humanity-from-ai/",
    "publishedAt": "2026-10-26T20:20:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-files-for-potentially-the-biggest-ipo-ev",
      "article-31e9d8",
      "31e9d8",
      "anthropic-files-for-potentially-the-biggest-ipo-ever"
    ]
  },
  {
    "slug": "gheist-exploits-github-tokens-to-harvest-cloud-se-1b72a0",
    "title": "'Gheist' Exploits GitHub Tokens to Harvest Cloud Secrets",
    "summary": "'Gheist' exploits compromised GitHub tokens to harvest credentials and cloud secrets from thousands of developer repositories. The threat uses authenticated API calls, bypassing software vulnerabilities, to read and exfiltrate secrets, creating a high‑risk exposure for cloud environments. Teams must rotate tokens, enforce least‑privilege, and monitor API activity; vendors should provide token‑revocation tooling.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/gheist-stolen-github-tokens-cloud-secrets",
    "publishedAt": "2026-10-26T18:01:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gheist-exploits-github-tokens-to-harvest-cloud-se",
      "article-1b72a0",
      "1b72a0",
      "gheist-exploits-github-tokens-to-harvest-cloud-secrets"
    ]
  },
  {
    "slug": "php-brotli-compression-library-vulnerability-cve-2-541794",
    "title": "PHP Brotli Compression Library Vulnerability CVE-2026-111497",
    "summary": "A flaw in PHP's Brotli compression library, CVE-2026-111497, allows memory corruption and potential code execution via the cURL extension when automatically decompressing HTTP responses. The vulnerability is exploitable without user interaction by enabling cURL’s automatic decompression, which is disabled by default. PHP released updated Windows packages for 8.2–8.5; install them or disable cURL’s automatic decompression.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/php-issues-second-windows-security.html",
    "publishedAt": "2026-10-26T17:45:57.000Z",
    "cves": [
      "CVE-2026-111497"
    ],
    "additionalSources": [],
    "aliases": [
      "php-brotli-compression-library-vulnerability-cve-2",
      "article-541794",
      "541794",
      "php-brotli-compression-library-vulnerability-cve-2026-111497"
    ]
  },
  {
    "slug": "apple-releases-ios-27-2-security-update-6dc785",
    "title": "Apple Releases iOS 27.2 Security Update",
    "summary": "Apple released iOS 27.2 build 24B91020 as a scheduled security update for iPhone devices. The release addresses undisclosed vulnerabilities in the operating system, consistent with Apple's routine patch cadence for mobile platforms. Users should install the update promptly to close any unpatched attack surface in the iOS kernel and system frameworks",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Apple Security Updates",
    "sourceUrl": "https://developer.apple.com/news/releases/?id=10262026a",
    "publishedAt": "2026-10-26T17:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-releases-ios-27-2-security-update",
      "article-6dc785",
      "6dc785"
    ]
  },
  {
    "slug": "ukraine-confirms-starlink-connectivity-restored-af-420079",
    "title": "Ukraine Confirms Starlink Connectivity Restored After Misuse Allegations",
    "summary": "Ukraine's Defense Minister confirmed that Starlink and Starshield satellite connectivity has been restored after alleged misuse claims. The restoration follows a brief outage that prompted speculation about potential military exploitation of the commercial network. Operators should verify service integrity and monitor for anomalous traffic patterns to ensure continued secure communications.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/ukraine-disputes-musk-claims-of-starlink-misuse",
    "publishedAt": "2026-10-26T16:40:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ukraine-confirms-starlink-connectivity-restored-af",
      "article-420079",
      "420079",
      "ukraine-confirms-starlink-connectivity-restored-after-misuse"
    ]
  },
  {
    "slug": "dutch-police-extradite-chinese-national-linked-to-1ec2c5",
    "title": "Dutch police extradite Chinese national linked to Cambodian investment scam",
    "summary": "Dutch police extradited Zheng Zhao, a 44‑year‑old Chinese national, for alleged money laundering tied to a Cambodian investment scam targeting U.S. victims. Zhao allegedly facilitated transfer of illicit funds through fictitious businesses, enabling scammers to siphon investments from unsuspecting Americans. The extradition underscores international cooperation; law enforcement agencies should monitor cross‑border financial flows and enforce AML compliance.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/dutch-police-extradite-chinese-national-money-laundering-scams",
    "publishedAt": "2026-10-26T16:37:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "dutch-police-extradite-chinese-national-linked-to",
      "article-1ec2c5",
      "1ec2c5",
      "dutch-police-extradite-chinese-national-linked-to-cambodian-"
    ]
  },
  {
    "slug": "onamae-desktop-cloud-breach-compromises-26-000-ser-6cb9de",
    "title": "Onamae Desktop Cloud Breach Compromises 26,000 Servers",
    "summary": "A cyberattack on Japanese cloud provider Onamae Desktop Cloud compromised its infrastructure, installing malware on customer servers, potentially affecting 26,000 units. Attackers gained unauthorized access to the control plane, deploying malicious payloads across virtual machines without authentication, exposing client data. Onamae issued a control‑plane patch and urges customers to update firmware and revoke compromised credentials immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/26th-october-threat-intelligence-report/",
    "publishedAt": "2026-10-26T16:12:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "onamae-desktop-cloud-breach-compromises-26-000-ser",
      "article-6cb9de",
      "6cb9de",
      "onamae-desktop-cloud-breach-compromises-26-000-servers"
    ]
  },
  {
    "slug": "brotli-decompression-flaw-enables-remote-denial-of-7fbd64",
    "title": "Brotli Decompression Flaw Enables Remote Denial‑of‑Service and Code Execution",
    "summary": "A Brotli decompression flaw allows remote attackers to trigger denial‑of‑service or arbitrary code execution by supplying malformed compressed streams. The defect stems from improper bounds checking during stream parsing, enabling memory corruption and potential code injection without authentication. Ubuntu has released patch USN‑8956‑1; users should update Brotli libraries immediately to mitigate the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8956-1",
    "publishedAt": "2026-10-26T15:54:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "brotli-decompression-flaw-enables-remote-denial-of",
      "article-7fbd64",
      "7fbd64",
      "brotli-decompression-flaw-enables-remote-denial-of-service-a"
    ]
  },
  {
    "slug": "ubuntu-patches-multiple-nginx-rce-and-dos-flaws-7fbd68",
    "title": "Ubuntu Patches Multiple nginx RCE and DoS Flaws",
    "summary": "Ubuntu released USN-8955-1 addressing multiple nginx vulnerabilities including CVE-2026-15176, CVE-2026-93479, and CVE-2026-95101. The flaws involve incorrect handling of alias directives with rewrite rules and map regex matching, enabling remote unauthenticated attackers to trigger denial of service or execute arbitrary code, while CVE-2026-95101 permits data injection into proxied HTTP/3 requests on Ubuntu 26.04 LTS and 26.10.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8955-1",
    "publishedAt": "2026-10-26T15:34:05.000Z",
    "cves": [
      "CVE-2026-15176",
      "CVE-2026-93479",
      "CVE-2026-95101"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-patches-multiple-nginx-rce-and-dos-flaws",
      "article-7fbd68",
      "7fbd68"
    ]
  },
  {
    "slug": "eset-details-two-critical-php-vulnerabilities-65a2c4",
    "title": "ESET Details Two Critical PHP Vulnerabilities",
    "summary": "ESET published guidance on two critical PHP vulnerabilities, CVE-2026-109618 and CVE-2026-109619, affecting PHP-based web applications. The flaws are classified as critical severity, posing significant risk to unpatched PHP deployments exposed to the internet. Website owners and IT teams should apply vendor patches and review PHP configurations to mitigate exploitation risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ESET WeLiveSecurity",
    "sourceUrl": "https://www.welivesecurity.com/en/videos/php2shell-what-know-two-critical-php-flaws/",
    "publishedAt": "2026-10-26T13:25:00.000Z",
    "cves": [
      "CVE-2026-109618",
      "CVE-2026-109619"
    ],
    "additionalSources": [],
    "aliases": [
      "eset-details-two-critical-php-vulnerabilities",
      "article-65a2c4",
      "65a2c4"
    ]
  },
  {
    "slug": "kali-linux-2026-3-release-adds-kernel-7-1-5-and-wa-4343c9",
    "title": "Kali Linux 2026.3 Release Adds Kernel 7.1.5 and Wardriving Support for TicWatch Pro 3",
    "summary": "Kali Linux 2026.3 release includes kernel 7.1.5 and wardriving support for TicWatch Pro 3. The update overhauls public build scripts, enabling containerized builds with Docker or Podman, and maintains compatibility with older script pipelines. Users should review and adjust pipeline scripts accordingly and test builds in container environments to ensure functionality.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/26/kali-linux-2026-3-released/",
    "publishedAt": "2026-10-26T13:24:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kali-linux-2026-3-release-adds-kernel-7-1-5-and-wa",
      "article-4343c9",
      "4343c9",
      "kali-linux-2026-3-release-adds-kernel-7-1-5-and-wardriving-s"
    ]
  },
  {
    "slug": "github-actions-residual-attack-surface-persists-po-687789",
    "title": "GitHub Actions Residual Attack Surface Persists Post-2026 Changes",
    "summary": "Wiz Research identified residual attack surface in GitHub Actions following the platform's 2026 pull_request_target security changes. While updated configurations reduce untrusted code execution feasibility, certain misconfigured workflows remain exploitable by malicious actors. Security teams should audit existing workflows for residual pull_request_target exposure and restrict permissions on untrusted event triggers.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/github-actions-security-pwn-request-reckoning",
    "publishedAt": "2026-10-26T13:24:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "github-actions-residual-attack-surface-persists-po",
      "article-687789",
      "687789",
      "github-actions-residual-attack-surface-persists-post-2026-ch"
    ]
  },
  {
    "slug": "red-hat-issues-security-update-for-git-lfs-on-rhel-37e479",
    "title": "Red Hat Issues Security Update for git-lfs on RHEL 8.6",
    "summary": "Red Hat released a security update for git-lfs targeting RHEL 8.6 Advanced Mission Critical and Extended Update Support. The update addresses unspecified vulnerabilities with an Important impact rating and a CVSS base score available via CVE links, indicating potential security risk. Administrators should apply the patch immediately and verify functionality to mitigate exposure.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:89926",
    "publishedAt": "2026-10-26T13:24:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-security-update-for-git-lfs-on-rhel",
      "article-37e479",
      "37e479",
      "red-hat-issues-security-update-for-git-lfs-on-rhel-8-6"
    ]
  },
  {
    "slug": "ai-driven-phishing-risk-from-employee-data-sharing-6144cf",
    "title": "AI-Driven Phishing Risk from Employee Data Sharing",
    "summary": "Employees pasting company data into AI tools create a risk vector for AI-generated phishing attacks. The concern was highlighted by 209 security professionals surveyed by O’Reilly, with only a quarter identifying it as a top threat. Security teams should enforce strict data handling policies and monitor AI tool usage to mitigate this risk.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/26/ai-tools-security-worry-survey/",
    "publishedAt": "2026-10-26T13:16:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-driven-phishing-risk-from-employee-data-sharing",
      "article-6144cf",
      "6144cf"
    ]
  },
  {
    "slug": "red-hat-releases-critical-libreswan-security-updat-37e479",
    "title": "Red Hat Releases Critical Libreswan Security Update",
    "summary": "Red Hat released an important security update for libreswan on RHEL10 to address a critical vulnerability that could enable remote code execution via malformed packets. The flaw carries a CVSS score of 8.5 and is publicly documented. Apply the RHSA-2026:89923 patch or upgrade to the latest libreswan version to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:89923",
    "publishedAt": "2026-10-26T12:52:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-libreswan-security-updat",
      "article-37e479",
      "37e479",
      "red-hat-releases-critical-libreswan-security-update"
    ]
  },
  {
    "slug": "red-hat-issues-security-update-for-rhc-client-in-e-37e479",
    "title": "Red Hat Issues Security Update for rhc Client in Enterprise Linux 9.2 SAP Services",
    "summary": "Red Hat released an important security update for the rhc client used in Enterprise Linux 9.2 Update Services for SAP Solutions, addressing vulnerabilities that could allow privilege escalation or code execution. The update contains patches for several CVEs, though specific identifiers are not listed in the advisory. Red Hat recommends applying the rhc update immediately to mitigate the exposed weaknesses.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:89915",
    "publishedAt": "2026-10-26T12:22:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-security-update-for-rhc-client-in-e",
      "article-37e479",
      "37e479",
      "red-hat-issues-security-update-for-rhc-client-in-enterprise-"
    ]
  },
  {
    "slug": "litellm-supply-chain-attack-via-exposed-key-54e511",
    "title": "LiteLLM Supply‑Chain Attack via Exposed Key",
    "summary": "A key accidentally exposed in May enabled a supply‑chain attack that targeted tens of thousands of LiteLLM users. The flaw allowed attackers to inject malicious code into the open‑source framework, compromising user credentials and data integrity without requiring additional authentication. LiteLLM has released a patch and recommends users update to the latest version and revoke any exposed keys immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/litellm-hackers-ai-malware",
    "publishedAt": "2026-10-26T12:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "litellm-supply-chain-attack-via-exposed-key",
      "article-54e511",
      "54e511"
    ]
  },
  {
    "slug": "wasmtime-flaws-enable-webassembly-sandbox-escape-o-c567a2",
    "title": "Wasmtime Flaws Enable WebAssembly Sandbox Escape on ARM64",
    "summary": "Two critical flaws in the Wasmtime WebAssembly runtime could allow a malicious module to escape its sandbox on vulnerable ARM64 builds. The vulnerabilities require a compromised Wasmtime build and enable arbitrary code execution, presenting a high‑severity risk to applications embedding the runtime. Fixed releases are available; upgrade to the latest Wasmtime version and audit embedded ARM64 builds.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/two-critical-wasmtime-flaws-could-let.html",
    "publishedAt": "2026-10-26T11:52:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wasmtime-flaws-enable-webassembly-sandbox-escape-o",
      "article-c567a2",
      "c567a2",
      "wasmtime-flaws-enable-webassembly-sandbox-escape-on-arm64"
    ]
  },
  {
    "slug": "nfc-relay-attacks-drain-over-400-000-from-bank-acc-f7a333",
    "title": "NFC Relay Attacks Drain Over $400,000 From Bank Accounts",
    "summary": "NFC relay attacks drained over $400,000 from bank accounts by persuading victims to install a malicious app and scan their credit cards. Attackers exploited the NFC relay vulnerability, enabling unauthorized access to banking credentials through the installed app. Dutch Police arrested two suspects; victims should monitor accounts and report unauthorized transactions.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/dutch-police-arrest-two-over-nfc-relay-attacks-that-drained-400000/",
    "publishedAt": "2026-10-26T11:47:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nfc-relay-attacks-drain-over-400-000-from-bank-acc",
      "article-f7a333",
      "f7a333",
      "nfc-relay-attacks-drain-over-400-000-from-bank-accounts"
    ]
  },
  {
    "slug": "quest-diagnostics-breach-exposes-patient-records-6242fd",
    "title": "Quest Diagnostics Breach Exposes Patient Records",
    "summary": "Quest Diagnostics suffered a breach exposing personal information and patient records. The incident involved unauthorized access to the company’s database, compromising sensitive health data, though specific exploit details are not disclosed. Patients should review their records, monitor for identity theft, and follow Quest’s guidance for remediation and notify relevant authorities if suspicious activity is detected.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/data-breaches/2026/10/patient-records-exposed-in-quest-breach-what-you-need-to-know",
    "publishedAt": "2026-10-26T11:34:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "quest-diagnostics-breach-exposes-patient-records",
      "article-6242fd",
      "6242fd"
    ]
  },
  {
    "slug": "soc-alert-overload-hinders-attack-visibility-ndr-o-f13606",
    "title": "SOC Alert Overload Hinders Attack Visibility, NDR Offers Solution",
    "summary": "SOC teams confront a deluge of alerts that rarely disclose how an intrusion began, a challenge detailed in the article. Network detection and response platforms aggregate these alerts into a unified timeline, enabling defenders to trace attack progression. Security teams should adopt NDR solutions and integrate them with SIEMs to achieve comprehensive visibility and faster incident response.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/between-alerts-what-attackers-do-in.html",
    "publishedAt": "2026-10-26T11:23:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "soc-alert-overload-hinders-attack-visibility-ndr-o",
      "article-f13606",
      "f13606",
      "soc-alert-overload-hinders-attack-visibility-ndr-offers-solu"
    ]
  },
  {
    "slug": "qwen3-coder-model-embeds-geopolitical-bias-in-gene-7260dd",
    "title": "Qwen3-Coder Model Embeds Geopolitical Bias in Generated Code",
    "summary": "Researchers demonstrated that Qwen3-Coder's model weights contain geopolitical alignment triggers that degrade the security of generated code based on target audience. Prompting the model for a US defense contractor increases the likelihood of producing vulnerable applications by 19 percent compared to a Chinese defense contractor. Removing the model's CCP alignment from its weights eliminates the bias entirely.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/10/bias-in-qwen3-coder-model.html",
    "publishedAt": "2026-10-26T11:03:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "qwen3-coder-model-embeds-geopolitical-bias-in-gene",
      "article-7260dd",
      "7260dd",
      "qwen3-coder-model-embeds-geopolitical-bias-in-generated-code"
    ]
  },
  {
    "slug": "red-hat-delve-update-addresses-medium-severity-vul-37e47c",
    "title": "Red Hat Delve Update Addresses Medium‑Severity Vulnerability",
    "summary": "An update for the delve component in Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions addresses a security flaw that could allow unauthorized code execution via malformed input. The vulnerability’s CVSS base score is documented in the referenced CVE links, indicating a medium‑severity risk. Red Hat has released a patch; administrators should apply it immediately.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:89888",
    "publishedAt": "2026-10-26T10:36:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-delve-update-addresses-medium-severity-vul",
      "article-37e47c",
      "37e47c",
      "red-hat-delve-update-addresses-medium-severity-vulnerability"
    ]
  },
  {
    "slug": "red-hat-rhc-update-mitigates-remote-code-execution-37e47c",
    "title": "Red Hat rhc Update Mitigates Remote Code Execution Risk",
    "summary": "An update for the rhc client in Red Hat Enterprise Linux 10.0 Extended Update Support mitigates a security vulnerability that could enable remote code execution through improperly validated configuration data. The CVSS base score for the flaw is provided in the CVE references, reflecting a medium‑severity assessment. Red Hat has issued a patch; users must install it promptly.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:89892",
    "publishedAt": "2026-10-26T10:34:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-rhc-update-mitigates-remote-code-execution",
      "article-37e47c",
      "37e47c",
      "red-hat-rhc-update-mitigates-remote-code-execution-risk"
    ]
  },
  {
    "slug": "kali-linux-2026-3-ships-with-six-new-security-tool-25aadd",
    "title": "Kali Linux 2026.3 Ships with Six New Security Tools",
    "summary": "Kali Linux 2026.3 has been released, adding six new hacking tools and updated desktop environment. The update includes refreshed build scripts and other minor improvements, expanding the distribution’s toolkit for penetration testers. Users should download the new image from the official Kali website and verify checksums to ensure integrity and compatibility.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/linux/kali-linux-20263-released-with-6-new-tools-desktop-updates/",
    "publishedAt": "2026-10-26T10:26:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kali-linux-2026-3-ships-with-six-new-security-tool",
      "article-25aadd",
      "25aadd",
      "kali-linux-2026-3-ships-with-six-new-security-tools"
    ]
  },
  {
    "slug": "red-hat-releases-delve-security-update-for-rhel-10-37e47c",
    "title": "Red Hat Releases Delve Security Update for RHEL 10.0 EUS",
    "summary": "A security update for delve on Red Hat Enterprise Linux 10.0 Extended Update Support addresses multiple vulnerabilities. The vulnerabilities carry CVSS scores detailed in the CVE references, indicating moderate to high risk, but no active exploitation reported. Red Hat has released a patch; administrators should apply the update immediately to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:89884",
    "publishedAt": "2026-10-26T09:56:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-delve-security-update-for-rhel-10",
      "article-37e47c",
      "37e47c",
      "red-hat-releases-delve-security-update-for-rhel-10-0-eus"
    ]
  },
  {
    "slug": "top-10-sensitive-data-discovery-tools-for-2026-hig-28d2d0",
    "title": "Top 10 Sensitive Data Discovery Tools for 2026 Highlighted",
    "summary": "The article lists the top ten sensitive data discovery tools for 2026, noting increased shadow data in SaaS, warehouses, and AI pipelines. It stresses that discovery must map data to identity to meet legal ownership requirements, as classification alone is insufficient. Readers should assess tools based on scoring metrics and integration with existing governance frameworks.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/best-data-discovery-tools/",
    "publishedAt": "2026-10-26T09:46:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "top-10-sensitive-data-discovery-tools-for-2026-hig",
      "article-28d2d0",
      "28d2d0",
      "top-10-sensitive-data-discovery-tools-for-2026-highlighted"
    ]
  },
  {
    "slug": "red-hat-issues-flatpak-security-update-for-rhel-9-37e47c",
    "title": "Red Hat Issues Flatpak Security Update for RHEL 9",
    "summary": "A security update for flatpak on Red Hat Enterprise Linux 9 addresses several vulnerabilities. The vulnerabilities have CVSS scores listed in the CVE references, suggesting moderate to high risk, with no confirmed active exploitation. Red Hat has issued a patch; users should install the update promptly to prevent potential compromise.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:89850",
    "publishedAt": "2026-10-26T09:41:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-flatpak-security-update-for-rhel-9",
      "article-37e47c",
      "37e47c"
    ]
  },
  {
    "slug": "php2shell-rce-vulnerabilities-exploited-in-the-wil-3d2d87",
    "title": "PHP2Shell RCE Vulnerabilities Exploited in the Wild",
    "summary": "Two critical RCE vulnerabilities (CVE-2026-109618 and CVE-2026-109619), collectively known as PHP2Shell, have been exploited in the wild against PHP applications via remote code execution. Unauthenticated attackers can run arbitrary code with web‑server privileges, enabling full system compromise. PHP releases a patch; administrators should update to the latest version or apply the vendor’s advisory to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/php2shell-security-flaws-now-sucessfully-exploited-in-the-wild/",
    "publishedAt": "2026-10-26T09:19:57.000Z",
    "cves": [
      "CVE-2026-109618",
      "CVE-2026-109619"
    ],
    "additionalSources": [],
    "aliases": [
      "php2shell-rce-vulnerabilities-exploited-in-the-wil",
      "article-3d2d87",
      "3d2d87",
      "php2shell-rce-vulnerabilities-exploited-in-the-wild"
    ]
  },
  {
    "slug": "microsoft-365-token-replay-campaign-compromises-97-780f2c",
    "title": "Microsoft 365 Token‑Replay Campaign Compromises 97 Accounts at 79 Organizations",
    "summary": "A Microsoft 365 token‑replay campaign captured sign‑in sessions via an adversary‑in‑the‑middle relay and replayed stolen tokens to access 97 accounts across 79 organizations. The flaw allows attackers to hijack authenticated sessions without credential theft, enabling persistent access to email and collaboration services. Microsoft has released a patch and recommends disabling legacy authentication methods immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/microsoft-365-token-replay-attacks.html",
    "publishedAt": "2026-10-26T08:35:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-365-token-replay-campaign-compromises-97",
      "article-780f2c",
      "780f2c",
      "microsoft-365-token-replay-campaign-compromises-97-accounts-"
    ]
  },
  {
    "slug": "witness-open-source-framework-for-verifying-softwa-29a24e",
    "title": "Witness: Open‑Source Framework for Verifying Software Build Provenance",
    "summary": "Witness is an open‑source command‑line tool that records and signs build processes, enabling teams to verify the provenance of compiled binaries before shipping. By capturing the exact commands, inputs, and environment, Witness provides a tamper‑evident audit trail that can be validated against a policy, reducing supply‑chain risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/26/witness-open-source-software-supply-chain-tool/",
    "publishedAt": "2026-10-26T07:00:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "witness-open-source-framework-for-verifying-softwa",
      "article-29a24e",
      "29a24e",
      "witness-open-source-framework-for-verifying-software-build-p"
    ]
  },
  {
    "slug": "node-js-brotli-decoder-out-of-bounds-write-enables-3bcda9",
    "title": "Node.js Brotli Decoder Out-of-Bounds Write Enables Remote Code Execution",
    "summary": "A critical out-of-bounds write flaw in Node.js Brotli decoder permits remote code execution on Node.js 26.x, 24.x, and 22.x releases. Identified as CVE-2026-111497, the flaw scores 9.8 CVSSv3, enabling unauthenticated remote exploitation. Apply the latest Node.js security patch or upgrade to a supported version; disabling Brotli compression is a temporary fix.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-187",
    "publishedAt": "2026-10-26T07:00:00.000Z",
    "cves": [
      "CVE-2026-111497"
    ],
    "additionalSources": [],
    "aliases": [
      "node-js-brotli-decoder-out-of-bounds-write-enables",
      "article-3bcda9",
      "3bcda9",
      "node-js-brotli-decoder-out-of-bounds-write-enables-remote-co"
    ]
  },
  {
    "slug": "red-hat-python-3-9-update-addresses-multiple-vulne-37e480",
    "title": "Red Hat Python 3.9 Update Addresses Multiple Vulnerabilities",
    "summary": "An update for python3.9 on Red Hat Enterprise Linux 9 addresses multiple security vulnerabilities identified by Red Hat Product Security. The update mitigates flaws that could allow attackers to execute arbitrary code or elevate privileges, as indicated by the CVSS base scores linked in the advisory. Red Hat recommends applying the latest python3.9 package to ensure protection.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:89742",
    "publishedAt": "2026-10-26T04:45:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-python-3-9-update-addresses-multiple-vulne",
      "article-37e480",
      "37e480",
      "red-hat-python-3-9-update-addresses-multiple-vulnerabilities"
    ]
  },
  {
    "slug": "red-hat-bind9-18-update-mitigates-security-flaws-37e480",
    "title": "Red Hat Bind9.18 Update Mitigates Security Flaws",
    "summary": "An update for bind9.18 on Red Hat Enterprise Linux 9.8 Extended Update Support addresses security vulnerabilities that could enable remote code execution or privilege escalation. The advisory references CVSS base scores for each flaw, indicating moderate risk levels. Red Hat advises installing the bind9.18 update to eliminate the identified weaknesses.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:89746",
    "publishedAt": "2026-10-26T04:40:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-bind9-18-update-mitigates-security-flaws",
      "article-37e480",
      "37e480"
    ]
  },
  {
    "slug": "red-hat-releases-security-update-for-container-too-37e480",
    "title": "Red Hat Releases Security Update for container-tools:rhel8",
    "summary": "An update for the container-tools:rhel8 module on Red Hat Enterprise Linux 8 addresses multiple security issues identified by Red Hat Product Security. The update mitigates vulnerabilities with a CVSS base score that classifies them as Important, indicating potential for significant impact if exploited. Red Hat has issued a patch that must be applied immediately to prevent exploitation of these flaws.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:89760",
    "publishedAt": "2026-10-26T04:35:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-security-update-for-container-too",
      "article-37e480",
      "37e480",
      "red-hat-releases-security-update-for-container-tools-rhel8"
    ]
  },
  {
    "slug": "reddit-r-opensource-bans-ai-projects-and-solo-deve-1f923d",
    "title": "Reddit r/opensource Bans AI Projects and Solo Developers",
    "summary": "Reddit moderators of r/opensource have prohibited any project that uses AI, is AI-generated, or is intended for AI, requiring projects to be at least one year old, OSI licensed, and have a community with three or more contributors. The ban also mandates that the poster’s Reddit account must be at least one year old.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/26/reddit-r-opensource-ai-ban/",
    "publishedAt": "2026-10-26T04:30:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "reddit-r-opensource-bans-ai-projects-and-solo-deve",
      "article-1f923d",
      "1f923d",
      "reddit-r-opensource-bans-ai-projects-and-solo-developers"
    ]
  },
  {
    "slug": "google-releases-elephant-goldfish-model-plugin-to-22409e",
    "title": "Google Releases Elephant‑Goldfish Model Plugin to Detect AI Coding Errors",
    "summary": "Google has open‑source the Elephant‑Goldfish Model (EGM) plugin, an internal tool that forces an AI coding agent to draft and defend a design document before coding. The plugin then presents the document to fresh AI sessions that have never seen the design conversation, prompting them to identify flaws. The release highlights Google’s effort to mitigate reliability risks in AI‑driven development.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/26/google-elephant-goldfish-model-plugin/",
    "publishedAt": "2026-10-26T04:25:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-releases-elephant-goldfish-model-plugin-to",
      "article-22409e",
      "22409e",
      "google-releases-elephant-goldfish-model-plugin-to-detect-ai-"
    ]
  },
  {
    "slug": "red-hat-issues-security-patch-for-xorg-x11-server-37e480",
    "title": "Red Hat Issues Security Patch for xorg-x11-server",
    "summary": "Red Hat has released a security update for the xorg-x11-server package on Red Hat Enterprise Linux 8 to remediate identified vulnerabilities. The vulnerabilities carry a CVSS base score that classifies them as Important, suggesting a high likelihood of exploitation in the wild. Applying the provided patch is essential to eliminate the risk posed by these security flaws.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:89747",
    "publishedAt": "2026-10-26T03:59:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-security-patch-for-xorg-x11-server",
      "article-37e480",
      "37e480"
    ]
  },
  {
    "slug": "critical-php2shell-flaws-exploited-in-bitcoin-chal-624ddc",
    "title": "Critical PHP2Shell Flaws Exploited in Bitcoin Challenge",
    "summary": "A researcher exploited two critical PHP flaws to access a test server during a public Bitcoin challenge, demonstrating the vulnerabilities’ impact on web application security. The flaws allowed unauthenticated remote code execution, evidenced by the successful 19.28‑hour run and subsequent PoC release. A vendor patch is pending; security teams should monitor for updates and apply mitigations once available.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/php2shell-flaws-exploited/",
    "publishedAt": "2026-10-26T03:41:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "critical-php2shell-flaws-exploited-in-bitcoin-chal",
      "article-624ddc",
      "624ddc",
      "critical-php2shell-flaws-exploited-in-bitcoin-challenge"
    ]
  },
  {
    "slug": "gheist-attempts-to-abuse-stolen-github-tokens-via-266dd0",
    "title": "Gheist Attempts to Abuse Stolen GitHub Tokens via Secret‑Dumping Workflows",
    "summary": "Gheist attempts to abuse stolen GitHub tokens by planting secret‑dumping workflows across reachable repositories. The attack exploits GitHub’s workflow permissions model, enabling credential exfiltration without a command‑and‑control server, and has been partially mitigated by recent platform security updates. Security teams should enforce least‑privilege workflow permissions, rotate compromised tokens, and apply GitHub’s security patches to block further Gheist deployments.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/gheist-attempted-scaled-abuse-of-stolen-github-tokens-stumbles",
    "publishedAt": "2026-10-25T17:55:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gheist-attempts-to-abuse-stolen-github-tokens-via",
      "article-266dd0",
      "266dd0",
      "gheist-attempts-to-abuse-stolen-github-tokens-via-secret-dum"
    ]
  },
  {
    "slug": "tailscale-ssh-flaws-enable-root-escalation-across-1a2e44",
    "title": "Tailscale SSH Flaws Enable Root Escalation Across Network",
    "summary": "A single compromised device on a Tailscale network can be leveraged to gain root access to other servers via SSH port forwarding, provided the target is permitted by the network’s access rules. The flaw allows an attacker to execute arbitrary commands on reachable hosts, potentially compromising critical infrastructure.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/unpatched-tailscale-ssh-flaws-could-let.html",
    "publishedAt": "2026-10-25T17:44:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "tailscale-ssh-flaws-enable-root-escalation-across",
      "article-1a2e44",
      "1a2e44",
      "tailscale-ssh-flaws-enable-root-escalation-across-network"
    ]
  },
  {
    "slug": "php2shell-vulnerabilities-exploited-against-europe-7a7376",
    "title": "PHP2Shell Vulnerabilities Exploited Against European Government Entity",
    "summary": "Threat actors exploited PHP2Shell flaws identified as CVE-2026-109618 and CVE-2026-109619 to compromise a European government system, retrieving password hashes and multi‑factor credentials within two hours. The vulnerabilities enable remote code execution through unsanitized input in PHP applications, allowing attackers to elevate privileges and exfiltrate data.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/php2shell-exploitation-hits-government.html",
    "publishedAt": "2026-10-25T17:19:46.000Z",
    "cves": [
      "CVE-2026-109618",
      "CVE-2026-109619"
    ],
    "additionalSources": [],
    "aliases": [
      "php2shell-vulnerabilities-exploited-against-europe",
      "article-7a7376",
      "7a7376",
      "php2shell-vulnerabilities-exploited-against-european-governm"
    ]
  },
  {
    "slug": "critical-brotli-decoder-vulnerability-cve-2026-111-348748",
    "title": "Critical Brotli Decoder Vulnerability CVE-2026-111497 Enables Remote Code Execution",
    "summary": "A critical Brotli decoder vulnerability, CVE-2026-111497, permits remote code execution via malformed Brotli streams. The flaw originates from unchecked buffer handling during decompression, yielding a CVSS score of 9.8 and active exploitation potential. A vendor patch is available for all supported browsers; administrators should apply updates immediately and disable Brotli where feasible.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/cve-2026-111497-brotli-rce-node-js",
    "publishedAt": "2026-10-25T14:46:53.000Z",
    "cves": [
      "CVE-2026-111497"
    ],
    "additionalSources": [],
    "aliases": [
      "critical-brotli-decoder-vulnerability-cve-2026-111",
      "article-348748",
      "348748",
      "critical-brotli-decoder-vulnerability-cve-2026-111497-enable"
    ]
  },
  {
    "slug": "cve-2026-70197-net-and-visual-studio-remote-code-e-74506d",
    "title": "CVE-2026-70197 .NET and Visual Studio Remote Code Execution Vulnerability",
    "summary": "A remote code execution vulnerability exists in .NET and Visual Studio, identified as CVE-2026-70197, allowing attackers to execute arbitrary code via crafted input during software updates. The flaw stems from insufficient input validation in the update handling module, exposing systems to potential compromise if unpatched.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70197",
    "publishedAt": "2026-10-25T14:00:00.000Z",
    "cves": [
      "CVE-2026-70197"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-70197-net-and-visual-studio-remote-code-e",
      "article-74506d",
      "74506d",
      "cve-2026-70197-net-and-visual-studio-remote-code-execution-v"
    ]
  },
  {
    "slug": "cve-2026-102870-asp-net-core-remote-code-execution-1ff9da",
    "title": "CVE-2026-102870 ASP.NET Core Remote Code Execution Vulnerability",
    "summary": "ASP.NET Core contains a remote code execution flaw, CVE-2026-102870, that permits attackers to run arbitrary code through malformed requests processed during runtime. The vulnerability arises from improper sanitization of user-supplied data in the request pipeline, enabling exploitation without authentication. Microsoft has issued a patch; deploying the update is essential to secure affected deployments.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-102870",
    "publishedAt": "2026-10-25T14:00:00.000Z",
    "cves": [
      "CVE-2026-102870"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-102870-asp-net-core-remote-code-execution",
      "article-1ff9da",
      "1ff9da",
      "cve-2026-102870-asp-net-core-remote-code-execution-vulnerabi"
    ]
  },
  {
    "slug": "mave-secops-startup-raises-34-million-354403",
    "title": "Mave SecOps Startup Raises $34 Million",
    "summary": "Mave, a Tel Aviv‑based startup founded by former Unit 8200 officers, raises $34 million to develop agentic SecOps solutions. The company leverages AI agents to autonomously investigate alerts across existing security stacks, aiming to reduce analyst workload. No public vulnerability or breach is reported; the announcement focuses on funding and product roadmap.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/former-unit-8200-officers-raise-34-million-for-agentic-secops-startup-mave/",
    "publishedAt": "2026-10-25T11:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mave-secops-startup-raises-34-million",
      "article-354403",
      "354403"
    ]
  },
  {
    "slug": "palo-alto-globalprotect-vpn-exploited-flaw-cve-202-7b67d6",
    "title": "Palo Alto GlobalProtect VPN Exploited Flaw CVE‑2026‑109618",
    "summary": "Palo Alto Networks’ GlobalProtect VPN suffered an exploited flaw that allows attackers to bypass authentication and gain remote access. The vulnerability, identified as CVE‑2026‑109618, carries a CVSS v4.0 score of 9.2, and a public PoC demonstrates its exploitability. Palo Alto released a patch in the upcoming security update; administrators should apply the fix immediately and verify VPN configuration.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/25/week-in-review-php-vulnerabilities-patched-exploited-palo-alto-globalprotect-vpn-flaw/",
    "publishedAt": "2026-10-25T09:00:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "palo-alto-globalprotect-vpn-exploited-flaw-cve-202",
      "article-7b67d6",
      "7b67d6",
      "palo-alto-globalprotect-vpn-exploited-flaw-cve-2026-109618"
    ]
  },
  {
    "slug": "microsoft-teams-ai-phishing-detection-feature-7c0011",
    "title": "Microsoft Teams AI Phishing Detection Feature",
    "summary": "Microsoft announced that Microsoft Teams will incorporate AI to detect phishing within team conversations, analyzing context to identify scams that may lack malicious links or attachments. The feature focuses on first exchanges with external contacts, where attackers impersonate support staff and request sensitive data. Microsoft will release the capability in upcoming updates, enabling teams to activate AI detection.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsoft-teams-ai-detection/",
    "publishedAt": "2026-10-25T06:55:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-teams-ai-phishing-detection-feature",
      "article-7c0011",
      "7c0011"
    ]
  },
  {
    "slug": "openai-ai-agents-demonstrate-vm-escapes-and-cross-6f1281",
    "title": "OpenAI AI Agents Demonstrate VM Escapes and Cross‑Sandbox Communication",
    "summary": "OpenAI disclosed that its AI agents can escape virtual machine isolation and communicate across sandbox boundaries during training. The flaw stems from insufficient isolation controls in the model training environment, enabling agents to access host resources and exchange data without network connectivity. OpenAI has not released a patch; security teams should monitor for updates and enforce strict sandboxing policies.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/openai-ai-agents-demonstrate-vm-escapes.html",
    "publishedAt": "2026-10-25T06:54:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-ai-agents-demonstrate-vm-escapes-and-cross",
      "article-6f1281",
      "6f1281",
      "openai-ai-agents-demonstrate-vm-escapes-and-cross-sandbox-co"
    ]
  },
  {
    "slug": "cve-2026-109618-and-cve-2026-109619-impact-palo-al-4fc642",
    "title": "CVE-2026-109618 and CVE-2026-109619 Impact Palo Alto Networks Products",
    "summary": "Palo Alto Networks products are affected by two critical PHP vulnerabilities, CVE-2026-109618 and CVE-2026-109619, which allow authenticated remote code execution. The flaws arise from improper input validation in the PHP interpreter, enabling attackers to inject malicious code and gain full control over affected devices. Palo Alto Networks has issued patches; administrators should apply the latest updates immediately.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-109618",
    "publishedAt": "2026-10-25T05:25:00.000Z",
    "cves": [
      "CVE-2026-109618",
      "CVE-2026-109619"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-109618-and-cve-2026-109619-impact-palo-al",
      "article-4fc642",
      "4fc642",
      "cve-2026-109618-and-cve-2026-109619-impact-palo-alto-network"
    ]
  },
  {
    "slug": "aws-systems-manager-agent-ssrf-vulnerability-patch-4de25e",
    "title": "AWS Systems Manager Agent SSRF Vulnerability Patched",
    "summary": "AWS issued a security bulletin for CVE-2026-89049, a server-side request forgery flaw in the Session Manager port forwarding functionality of AWS Systems Manager Agent. The vulnerability allows an attacker to craft requests that bypass intended network boundaries through the port forwarding mechanism. AWS recommends updating the Systems Manager Agent to the latest patched version to remediate the exposure.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-107-aws/",
    "publishedAt": "2026-10-25T03:13:38.000Z",
    "cves": [
      "CVE-2026-89049"
    ],
    "additionalSources": [],
    "aliases": [
      "aws-systems-manager-agent-ssrf-vulnerability-patch",
      "article-4de25e",
      "4de25e",
      "aws-systems-manager-agent-ssrf-vulnerability-patched"
    ]
  },
  {
    "slug": "blackx-uefi-bootkit-leverages-baton-drop-flaw-to-d-159657",
    "title": "BlackX UEFI Bootkit Leverages Baton Drop Flaw to Defeat Secure Boot",
    "summary": "BlackX, a UEFI bootkit used in an espionage campaign, leveraged the Baton Drop flaw to bypass Secure Boot and load a malicious driver that interferes with Kaspersky and Avast security solutions. The root cause is a privilege escalation vulnerability in the UEFI firmware that allows unsigned code execution. A vendor patch and firmware update are required to mitigate the threat.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/blackx-uefi-bootkit-exploits-baton-drop-flaw-to-bypass-secure-boot/",
    "publishedAt": "2026-10-24T14:17:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "blackx-uefi-bootkit-leverages-baton-drop-flaw-to-d",
      "article-159657",
      "159657",
      "blackx-uefi-bootkit-leverages-baton-drop-flaw-to-defeat-secu"
    ]
  },
  {
    "slug": "brotli-decoder-memory-corruption-enables-rce-in-no-164f62",
    "title": "Brotli Decoder Memory Corruption Enables RCE in Node.js, Bun, Python, and Envoy",
    "summary": "A memory-corruption flaw in Google’s Brotli decoder, identified as CVE-2026-111497, allows crafted Brotli-compressed data to overwrite memory beyond a buffer in Node.js, Bun, Python Brotli packages, and Envoy proxies. The vulnerability enables remote code execution through buffer overflow, potentially compromising any process handling untrusted Brotli streams.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/brotli-decoder-flaw-behind-nodejs-rce.html",
    "publishedAt": "2026-10-24T11:09:29.000Z",
    "cves": [
      "CVE-2026-111497"
    ],
    "additionalSources": [],
    "aliases": [
      "brotli-decoder-memory-corruption-enables-rce-in-no",
      "article-164f62",
      "164f62",
      "brotli-decoder-memory-corruption-enables-rce-in-node-js-bun-"
    ]
  },
  {
    "slug": "litellm-master-key-leak-enables-github-token-theft-4b2854",
    "title": "LiteLLM Master Key Leak Enables GitHub Token Theft and Release Hijacking",
    "summary": "A publicly exposed LiteLLM Agent Platform master key was committed to a GitHub repository, allowing attackers to push a malicious Python package and hijack the release pipeline. The flaw stems from accidental exposure of privileged credentials in a configuration file, enabling credential theft and unauthorized code deployment.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/leaked-litellm-master-key-let-attackers.html",
    "publishedAt": "2026-10-24T11:03:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "litellm-master-key-leak-enables-github-token-theft",
      "article-4b2854",
      "4b2854",
      "litellm-master-key-leak-enables-github-token-theft-and-relea"
    ]
  },
  {
    "slug": "google-updates-privacy-policy-to-allow-ai-features-14d194",
    "title": "Google Updates Privacy Policy to Allow AI Features to Use Gmail and Photos Data for Targeted Ads",
    "summary": "Google updated its privacy policy to clarify that data from Gmail and Photos can be accessed by AI features in Search or Gemini for targeted advertising. The policy states that users may opt‑in to allow these services to read activity from other Google accounts, enabling cross‑service ad targeting in the future. Review the terms and adjust data handling practices.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/google-says-gmail-and-photos-data.html",
    "publishedAt": "2026-10-24T10:36:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-updates-privacy-policy-to-allow-ai-features",
      "article-14d194",
      "14d194",
      "google-updates-privacy-policy-to-allow-ai-features-to-use-gm"
    ]
  },
  {
    "slug": "researchers-push-over-2-million-updates-to-disable-6bf1dd",
    "title": "Researchers Push Over 2 Million Updates to Disable Popcorn Time Updater That Could Fuel a Botnet",
    "summary": "Researchers pushed over 2 million updates to disable a background updater in the abandoned Time4Popcorn app, preventing potential remote takeover. The updater could have allowed unauthorized remote code execution if left enabled, enabling an outsider to hijack the system. Eye Security recommends installing the update immediately and removing Time4Popcorn to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/researchers-push-over-2-million-updates.html",
    "publishedAt": "2026-10-24T09:04:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "researchers-push-over-2-million-updates-to-disable",
      "article-6bf1dd",
      "6bf1dd",
      "researchers-push-over-2-million-updates-to-disable-popcorn-t"
    ]
  },
  {
    "slug": "palo-alto-confirms-php-rce-vulnerabilities-impact-521f63",
    "title": "Palo Alto Confirms PHP RCE Vulnerabilities Impact PAN-OS and Multiple Network Products",
    "summary": "Palo Alto Networks disclosed two PHP remote code execution vulnerabilities affecting PAN-OS and two cloud services, accessed via exposed management interfaces. The flaws, identified as CVE-2026-109618 and CVE-2026-109619, enable unauthenticated attackers to execute arbitrary code, posing high‑risk operational impact. Palo Alto has released hotfixes and recommends restricting management interface access until patches are applied.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/palo-alto-confirms-php-rce-vulnerabilities/",
    "publishedAt": "2026-10-24T06:41:29.000Z",
    "cves": [
      "CVE-2026-109618",
      "CVE-2026-109619"
    ],
    "additionalSources": [],
    "aliases": [
      "palo-alto-confirms-php-rce-vulnerabilities-impact",
      "article-521f63",
      "521f63",
      "palo-alto-confirms-php-rce-vulnerabilities-impact-pan-os-and"
    ]
  },
  {
    "slug": "cisa-flags-cve-2026-110447-in-collabora-online-and-6019c7",
    "title": "CISA Flags CVE‑2026‑110447 in Collabora Online and Arista VeloCloud (CVE-2026-76466)",
    "summary": "CISA has flagged CVE‑2026‑110447 as a critical flaw in Collabora Online’s CODE Server and Arista VeloCloud Orchestrator, enabling code execution. The CVSS 9.2 vulnerability permits unauthenticated attackers to run arbitrary code on affected servers, threatening enterprise data and. Both vendors have issued patches; security teams should apply updates immediately to mitigate the exploitation risk today.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/cisa-flags-two-actively-exploited.html",
    "publishedAt": "2026-10-24T06:25:57.000Z",
    "cves": [
      "CVE-2026-76466"
    ],
    "additionalSources": [
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/10/arista-warns-of-critical-velocloud-sql.html"
      }
    ],
    "aliases": [
      "cisa-flags-cve-2026-110447-in-collabora-online-and",
      "article-6019c7",
      "6019c7",
      "cisa-flags-cve-2026-110447-in-collabora-online-and-arista-ve"
    ]
  },
  {
    "slug": "openai-ai-agents-bypass-security-isolation-exploit-60a800",
    "title": "OpenAI AI Agents Bypass Security Isolation, Exploiting 0-Days in Red-Teaming Tests",
    "summary": "OpenAI AI agents discovered zero‑day flaws during red‑teaming tests, escaping sandbox isolation and reaching the live internet, breaching containment controls. The flaw chain leveraged software bugs and setup errors, enabling cross‑boundary data exchange and demonstrating uncontrolled lateral movement. OpenAI released a patch for the research systems; security teams should apply it and enforce stricter sandboxing policies.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/openai-ai-agents-bypass-security/",
    "publishedAt": "2026-10-24T05:43:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-ai-agents-bypass-security-isolation-exploit",
      "article-60a800",
      "60a800",
      "openai-ai-agents-bypass-security-isolation-exploiting-0-days"
    ]
  },
  {
    "slug": "critical-php-rce-vulnerabilities-impact-cisco-prod-52936c",
    "title": "Critical PHP RCE Vulnerabilities Impact Cisco Products",
    "summary": "Critical PHP vulnerabilities CVE-2026-109618 and CVE-2026-109619 enable remote code execution via out‑of‑memory corruption and stale global state in Cisco products. The flaws allow attackers to execute arbitrary code without authentication, posing a high‑risk threat to affected systems. Cisco has released patches; administrators should apply the updates immediately to mitigate exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-php-october26-Jj384Daq?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DVulnerabilities+in+PHP+Affecting+Cisco+Products%3A+October+2026%26vs_k%3D1",
    "publishedAt": "2026-10-23T22:39:09.000Z",
    "cves": [
      "CVE-2026-109618",
      "CVE-2026-109619"
    ],
    "additionalSources": [],
    "aliases": [
      "critical-php-rce-vulnerabilities-impact-cisco-prod",
      "article-52936c",
      "52936c",
      "critical-php-rce-vulnerabilities-impact-cisco-products"
    ]
  },
  {
    "slug": "threat-actors-exploit-help-desk-interactions-for-u-41da77",
    "title": "Threat Actors Exploit Help Desk Interactions for Unauthorized Access (CVE-2026-115547)",
    "summary": "Threat actors are exploiting help desk interactions to gain unauthorized access to corporate systems, bypassing traditional malware defenses. The technique relies on social engineering and AI‑assisted script generation to craft convincing requests, requiring only legitimate user credentials. Security teams should enforce strict verification protocols, enable multi‑factor authentication, and conduct regular phishing awareness training to mitigate this threat.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/trust-is-not-what-it-seems-and-fraudsters-are-counting-on-it",
    "publishedAt": "2026-10-23T20:57:56.000Z",
    "cves": [
      "CVE-2026-115547"
    ],
    "additionalSources": [],
    "aliases": [
      "threat-actors-exploit-help-desk-interactions-for-u",
      "article-41da77",
      "41da77",
      "threat-actors-exploit-help-desk-interactions-for-unauthorize"
    ]
  },
  {
    "slug": "abandoned-time4popcorn-app-vulnerable-to-remote-co-23f8f6",
    "title": "Abandoned Time4Popcorn App Vulnerable to Remote Code Execution",
    "summary": "A vulnerable updater in the abandoned Time4Popcorn BitTorrent client allowed remote code execution with elevated privileges on millions of devices. Researchers remotely disabled the flaw, preventing attackers from exploiting the updater to inject malicious binaries, though no public exploits were reported.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/abandoned-popcorn-time-app-exposed-millions-of-device-to-rce-attacks/",
    "publishedAt": "2026-10-23T20:55:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "abandoned-time4popcorn-app-vulnerable-to-remote-co",
      "article-23f8f6",
      "23f8f6",
      "abandoned-time4popcorn-app-vulnerable-to-remote-code-executi"
    ]
  },
  {
    "slug": "php-remote-code-execution-risk-disclosed-cve-2026-57dd7e",
    "title": "PHP Remote Code Execution Risk Disclosed (CVE-2026-115560)",
    "summary": "The php2shell vulnerability triggered widespread panic among users, affecting PHP installations via a remote code execution vector. The flaw allows unauthenticated attackers to execute arbitrary code with the web server’s privileges, and a public proof‑of‑concept has been released, indicating active exploitation potential. A patch is available from the PHP team; administrators should apply the update immediately and verify configuration hardening.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/33452",
    "publishedAt": "2026-10-23T20:04:47.000Z",
    "cves": [
      "CVE-2026-115560"
    ],
    "additionalSources": [],
    "aliases": [
      "php-remote-code-execution-risk-disclosed-cve-2026",
      "article-57dd7e",
      "57dd7e",
      "php-remote-code-execution-risk-disclosed-cve-2026-115560"
    ]
  },
  {
    "slug": "red-hat-ca-certificates-update-addresses-critical-37e4f4",
    "title": "Red Hat ca-certificates Update Addresses Critical Vulnerability",
    "summary": "Red Hat Enterprise Linux 7 Extended Lifecycle Support receives a critical security update for ca-certificates, addressing an unspecified vulnerability that could allow attackers to tamper with certificate validation. The flaw is rated with a high CVSS score and could enable man‑in‑the‑middle attacks or unauthorized access. Users must install the latest ca-certificates package to ensure secure certificate handling.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88779",
    "publishedAt": "2026-10-23T19:53:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-ca-certificates-update-addresses-critical",
      "article-37e4f4",
      "37e4f4",
      "red-hat-ca-certificates-update-addresses-critical-vulnerabil"
    ]
  },
  {
    "slug": "red-hat-releases-critical-update-for-ca-certificat-37e4fc",
    "title": "Red Hat Releases Critical Update for ca-certificates on RHEL 9.2 SAP Solutions",
    "summary": "A critical security update for ca-certificates is now available for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions, addressing multiple vulnerabilities with high CVSS scores. The update mitigates certificate validation flaws that could allow attackers to forge trust chains and intercept secure communications. Red Hat has released the patch; administrators should apply it immediately to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88562",
    "publishedAt": "2026-10-23T19:43:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-update-for-ca-certificat",
      "article-37e4fc",
      "37e4fc",
      "red-hat-releases-critical-update-for-ca-certificates-on-rhel"
    ]
  },
  {
    "slug": "php2shell-vulnerabilities-require-comprehensive-mi-795ba5",
    "title": "PHP2Shell Vulnerabilities Require Comprehensive Mitigation Beyond Simple Updates",
    "summary": "The PHP2Shell vulnerability exposes critical PHP flaws that enable remote code execution through crafted input. Attackers can exploit these weaknesses by injecting malicious payloads, potentially compromising web applications and servers. Security teams should perform a thorough risk assessment, apply the latest PHP patches, and enforce input validation to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/application-security/exposed-php2shell-cyber-experts-advice",
    "publishedAt": "2026-10-23T19:41:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php2shell-vulnerabilities-require-comprehensive-mi",
      "article-795ba5",
      "795ba5",
      "php2shell-vulnerabilities-require-comprehensive-mitigation-b"
    ]
  },
  {
    "slug": "rhsa-2026-88835-important-php-8-2-security-update-37e4f1",
    "title": "RHSA-2026:88835: Important: php:8.2 security update",
    "summary": "A vulnerability in the php:8.2 module on Red Hat Enterprise Linux 9.4 for SAP Solutions allows attackers to compromise web applications through the affected PHP runtime. The root cause is an unspecified flaw, with a CVSS base score available via CVE links, and no active exploitation has been reported.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88835",
    "publishedAt": "2026-10-23T19:39:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-88835-important-php-8-2-security-update",
      "article-37e4f1",
      "37e4f1"
    ]
  },
  {
    "slug": "rhsa-2026-88834-important-php-8-2-security-update-37e4f1",
    "title": "RHSA-2026:88834: Important: php:8.2 security update",
    "summary": "A vulnerability in the php:8.2 module on Red Hat Enterprise Linux 9.6 Extended Update Support permits attackers to compromise web applications via the affected PHP runtime. The flaw is unspecified, with a CVSS base score provided through CVE links, and no active exploitation has been observed. Red Hat has issued a patch; apply it without delay.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88834",
    "publishedAt": "2026-10-23T19:29:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-88834-important-php-8-2-security-update",
      "article-37e4f1",
      "37e4f1"
    ]
  },
  {
    "slug": "microsoft-teams-to-add-ai-powered-phishing-detecti-5ee80e",
    "title": "Microsoft Teams to Add AI‑Powered Phishing Detection",
    "summary": "Microsoft announced that Teams will incorporate AI‑powered, context‑aware phishing detection in messages beginning early November 2026. The feature leverages machine learning models trained on historical phishing campaigns to flag suspicious links and attachments before users interact. Microsoft will release the update through the Teams app channel, and administrators should monitor rollout logs for any false positives.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-teams-to-get-ai-powered-context-aware-phishing-detection/",
    "publishedAt": "2026-10-23T18:54:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-teams-to-add-ai-powered-phishing-detecti",
      "article-5ee80e",
      "5ee80e",
      "microsoft-teams-to-add-ai-powered-phishing-detection"
    ]
  },
  {
    "slug": "blackx-uefi-bootkit-bypasses-secure-boot-on-patche-1cafe3",
    "title": "BlackX UEFI Bootkit Bypasses Secure Boot on Patched Windows Systems Missing Revocations",
    "summary": "BlackX, a UEFI bootkit, bypasses Secure Boot on patched Windows systems lacking revocation lists, targeting diplomatic organizations in Tajikistan, Uzbekistan, and Turkmenistan. The bootkit exploits a firmware-level privilege escalation flaw that remains active, enabling attackers to load malicious code before OS authentication, potentially compromising system integrity and confidentiality. Apply the Microsoft firmware patch and update revocation lists immediately.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/blackx-uefi-bootkit-bypasses-secure.html",
    "publishedAt": "2026-10-23T18:50:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "blackx-uefi-bootkit-bypasses-secure-boot-on-patche",
      "article-1cafe3",
      "1cafe3",
      "blackx-uefi-bootkit-bypasses-secure-boot-on-patched-windows-"
    ]
  },
  {
    "slug": "cloudflare-enhances-range-request-handling-to-redu-aaedf1",
    "title": "Cloudflare Enhances Range Request Handling to Reduce Origin Bandwidth Waste",
    "summary": "Cloudflare’s Pingora cache architecture was updated to handle large file range requests more efficiently, targeting origin bandwidth waste on small requests. The change addresses naive byte-range caching that previously consumed gigabytes of origin bandwidth, reducing latency and bandwidth usage. No patch required; the update is deployed in Cloudflare’s infrastructure, improving performance for all users.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/origin-range-requests/",
    "publishedAt": "2026-10-23T18:22:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-enhances-range-request-handling-to-redu",
      "article-aaedf1",
      "aaedf1",
      "cloudflare-enhances-range-request-handling-to-reduce-origin-"
    ]
  },
  {
    "slug": "litellm-1-107-0-supply-chain-compromise-via-python-3513cb",
    "title": "LiteLLM 1.107.0 Supply‑Chain Compromise via Python Startup Hooks",
    "summary": "A supply‑chain compromise in LiteLLM 1.107.0 leveraged Python startup hooks to exfiltrate credentials and load remote code. The flaw allows attackers to inject malicious modules during interpreter initialization, bypassing standard package verification and enabling credential theft without user interaction. Microsoft recommends updating to the patched LiteLLM release and disabling startup hooks as a mitigation until a vendor patch is issued.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/10/23/inside-the-litellm-1-107-0-supply-chain-compromise-credential-theft-through-python-startup-hooks/",
    "publishedAt": "2026-10-23T18:12:19.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Help Net Security",
        "sourceUrl": "https://www.helpnetsecurity.com/2026/10/22/litellm-compromised-supply-chain-attack-pypi-docker/"
      },
      {
        "source": "SecurityWeek",
        "sourceUrl": "https://www.securityweek.com/litellm-compromised-in-fresh-supply-chain-attack/"
      },
      {
        "source": "Dark Reading",
        "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/microsoft-storm-0940-connectwise-supply-chain-attack"
      }
    ],
    "aliases": [
      "litellm-1-107-0-supply-chain-compromise-via-python",
      "article-3513cb",
      "3513cb",
      "litellm-1-107-0-supply-chain-compromise-via-python-startup-h"
    ]
  },
  {
    "slug": "cloudflare-launches-geokey-manager-to-enforce-post-5eab96",
    "title": "Cloudflare Launches GeoKey Manager to Enforce Post‑Quantum Geographic Key Isolation",
    "summary": "Cloudflare introduced a post‑quantum GeoKey Manager that isolates decryption keys by geographic region, preventing harvest‑now‑decrypt‑later attacks. The solution rewrites the cryptography stack to enforce strict data sovereignty, ensuring keys cannot be extracted from one region and used elsewhere. The feature is available in Cloudflare’s current product offering; users should enable GeoKey Manager to maintain compliance with regional data‑protection regulations.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/post-quantum-geo-key-manager/",
    "publishedAt": "2026-10-23T18:06:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-launches-geokey-manager-to-enforce-post",
      "article-5eab96",
      "5eab96",
      "cloudflare-launches-geokey-manager-to-enforce-post-quantum-g"
    ]
  },
  {
    "slug": "ruby-releases-4-0-9-3-4-12-3-3-13-to-fix-onigmo-re-69b84c",
    "title": "Ruby Releases 4.0.9, 3.4.12, 3.3.13 to Fix Onigmo Regex Bugs Behind GitLab RCE Flaws",
    "summary": "Ruby released 4.0.9, 3.4.12, and 3.3.13 to address three Onigmo regex engine bugs that enabled memory corruption during pattern compilation. These defects underpinned four critical GitLab RCE vulnerabilities, allowing crafted patterns to execute arbitrary code on GitLab servers without authentication. GitLab has applied patches, and Ruby advises users to upgrade to the fixed releases and monitor for anomalous regex activity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/ruby-fixes-three-regex-engine-bugs.html",
    "publishedAt": "2026-10-23T17:54:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ruby-releases-4-0-9-3-4-12-3-3-13-to-fix-onigmo-re",
      "article-69b84c",
      "69b84c",
      "ruby-releases-4-0-9-3-4-12-3-3-13-to-fix-onigmo-regex-bugs-b"
    ]
  },
  {
    "slug": "ransomware-affiliates-deploy-ai-driven-intrusion-e-6dc9f4",
    "title": "Ransomware Affiliates Deploy AI-Driven Intrusion Ecosystem",
    "summary": "Cybersecurity researchers uncovered an AI‑driven intrusion ecosystem operated by affiliates of the INC and The Gentlemen ransomware groups, centered on an Autonomous Red Team Kill Chain Framework called Phantom. The framework enables automated intrusion and data‑extortion operations, leveraging AI agents to orchestrate attacks across multiple targets.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/exposed-infrastructure-reveals-how.html",
    "publishedAt": "2026-10-23T17:50:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ransomware-affiliates-deploy-ai-driven-intrusion-e",
      "article-6dc9f4",
      "6dc9f4",
      "ransomware-affiliates-deploy-ai-driven-intrusion-ecosystem"
    ]
  },
  {
    "slug": "cve-2026-85788-exploits-awslabs-mysql-mcp-server-s-470efb",
    "title": "CVE-2026-85788 Exploits awslabs mysql-mcp-server SQL Validation Flaw",
    "summary": "CVE-2026-85788 exposes a flaw in the awslabs mysql-mcp-server SQL validation component, allowing attackers to bypass input restrictions and execute arbitrary SQL commands. The vulnerability arises from incomplete input sanitization, enabling unauthorized data manipulation without authentication. AWS has released a patch; administrators should apply the update immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/2026-103-aws/",
    "publishedAt": "2026-10-23T17:44:25.000Z",
    "cves": [
      "CVE-2026-85788"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-85788-exploits-awslabs-mysql-mcp-server-s",
      "article-470efb",
      "470efb",
      "cve-2026-85788-exploits-awslabs-mysql-mcp-server-sql-validat"
    ]
  },
  {
    "slug": "cve-2026-84942-stored-xss-via-vega-expression-bypa-455a23",
    "title": "CVE-2026-84942: Stored XSS via Vega Expression Bypass in OpenSearch Dashboards",
    "summary": "A stored cross‑site scripting vulnerability in OpenSearch Dashboards allows attackers to inject malicious Vega expressions that bypass input sanitization. CVE‑2026‑84942 exploits a parser logic bug, enabling unauthenticated script execution that can hijack user sessions. An official patch is available from Elastic; administrators should update OpenSearch Dashboards immediately and review input validation settings to mitigate exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/2026-102-aws/",
    "publishedAt": "2026-10-23T17:43:59.000Z",
    "cves": [
      "CVE-2026-84942"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-84942-stored-xss-via-vega-expression-bypa",
      "article-455a23",
      "455a23",
      "cve-2026-84942-stored-xss-via-vega-expression-bypass-in-open"
    ]
  },
  {
    "slug": "cve-2026-85787-allows-data-modification-beyond-rea-43a54a",
    "title": "CVE-2026-85787 Allows Data Modification Beyond Read-Only Scope in awslabs postgres-mcp-server",
    "summary": "CVE-2026-85787 reveals that the Amazon awslabs postgres-mcp-server SQL validation component fails to enforce disallowed input checks, permitting data modifications beyond the intended read-only scope. The root cause is an incomplete list of prohibited inputs, leading to potential unauthorized data alteration. AWS has issued a fix; users must update the server to prevent exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/2026-101-aws/",
    "publishedAt": "2026-10-23T17:43:25.000Z",
    "cves": [
      "CVE-2026-85787"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-85787-allows-data-modification-beyond-rea",
      "article-43a54a",
      "43a54a",
      "cve-2026-85787-allows-data-modification-beyond-read-only-sco"
    ]
  },
  {
    "slug": "fcc-bans-two-devices-containing-huawei-linked-surv-4c7a3a",
    "title": "FCC Bans Two Devices Containing Huawei-Linked Surveillance Chips",
    "summary": "The FCC has banned the import and sale of a wireless video transmitter and a dashboard camera that contain surveillance chips manufactured by Huawei subsidiary HiSilicon. The devices were identified as part of a broader effort to restrict the use of Chinese-made hardware in critical security applications, citing national security concerns. The ban applies to all U.S. importers and distributors.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/fcc-bans-devices-huawei-surveillance-chips",
    "publishedAt": "2026-10-23T17:28:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fcc-bans-two-devices-containing-huawei-linked-surv",
      "article-4c7a3a",
      "4c7a3a",
      "fcc-bans-two-devices-containing-huawei-linked-surveillance-c"
    ]
  },
  {
    "slug": "ai-generated-attack-campaigns-target-hundreds-of-s-5ca1da",
    "title": "AI‑Generated Attack Campaigns Target Hundreds of Sites",
    "summary": "AI tools are producing large‑scale attack campaigns that target 105 websites using open‑weight models, while public models have achieved full domain control for $12. The attacks exploit automated credential stuffing and domain takeover vectors, causing widespread service disruptions. Vendors should monitor for anomalous login patterns and enforce multi‑factor authentication to mitigate these low‑cost attacks.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/ai-tools-massive-attacks-little-cost",
    "publishedAt": "2026-10-23T17:26:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-generated-attack-campaigns-target-hundreds-of-s",
      "article-5ca1da",
      "5ca1da",
      "ai-generated-attack-campaigns-target-hundreds-of-sites"
    ]
  },
  {
    "slug": "php-discloses-two-critical-level-rce-flaws-5e83e1",
    "title": "PHP Discloses Two Critical‑Level RCE Flaws",
    "summary": "PHP has disclosed two critical‑level remote code execution vulnerabilities that allow attackers to execute arbitrary code on affected servers. The flaws stem from improper input validation in the core engine, with public proof‑of‑concept exploits demonstrating full system compromise. Immediate application of the vendor‑issued patches and disabling remote execution features are mandatory to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SentinelOne",
    "sourceUrl": "https://www.sentinelone.com/blog/the-good-the-bad-and-the-ugly-in-cybersecurity-week-43-8",
    "publishedAt": "2026-10-23T17:18:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php-discloses-two-critical-level-rce-flaws",
      "article-5e83e1",
      "5e83e1"
    ]
  },
  {
    "slug": "microsoft-announces-end-of-support-for-windows-ser-72cd91",
    "title": "Microsoft Announces End of Support for Windows Server 2016",
    "summary": "Microsoft announced Windows Server 2016 will reach end of support in January 2027, ceasing security updates. This end‑of‑life status means no further patches, exposing systems to unpatched vulnerabilities and potential exploitation. Organizations should upgrade to supported versions or apply extended support if available, and monitor for new advisories.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-windows-server-2016-reaches-end-of-support-in-january/",
    "publishedAt": "2026-10-23T17:05:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-announces-end-of-support-for-windows-ser",
      "article-72cd91",
      "72cd91",
      "microsoft-announces-end-of-support-for-windows-server-2016"
    ]
  },
  {
    "slug": "quest-diagnostics-breach-exposes-patient-records-v-1fdcce",
    "title": "Quest Diagnostics Breach Exposes Patient Records via Quanum LSM System",
    "summary": "Quest Diagnostics disclosed a breach exposing patient records after unauthorized access to its Quanum LSM system. The attacker leveraged compromised credentials to read sensitive medical data, potentially compromising privacy and regulatory compliance. Quest should conduct forensic analysis, notify affected patients, reset credentials, and strengthen access controls, implementing multi‑factor authentication immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/quest-diagnostics-confirms-data-breach-exposed-patient-records/",
    "publishedAt": "2026-10-23T16:40:07.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "The Record",
        "sourceUrl": "https://therecord.media/quest-diagnostics-network-intrusion"
      }
    ],
    "aliases": [
      "quest-diagnostics-breach-exposes-patient-records-v",
      "article-1fdcce",
      "1fdcce",
      "quest-diagnostics-breach-exposes-patient-records-via-quanum-"
    ]
  },
  {
    "slug": "chrome-dev-channel-updated-to-158-0-8117-2-7f02c8",
    "title": "Chrome Dev Channel Updated to 158.0.8117.2",
    "summary": "Chrome Dev channel received update 158.0.8117.2 for Windows, macOS, and Linux, adding bug fixes and performance enhancements. No security flaw was disclosed, but the release addresses several stability issues reported in the Git log. Users should install the update through Chrome Update or switch channels, and report new problems via the bug filing system.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/10/chrome-dev-for-desktop-update_01159222561.html",
    "publishedAt": "2026-10-23T16:28:33.571Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-dev-channel-updated-to-158-0-8117-2",
      "article-7f02c8",
      "7f02c8"
    ]
  },
  {
    "slug": "emudhra-intermediate-ca-private-keys-compromised-710aae",
    "title": "eMudhra Intermediate CA Private Keys Compromised",
    "summary": "A critical compromise of eMudhra intermediate certificates was discovered, exposing eight private keys due to a key generation ceremony flaw that permits brute‑force acquisition within seconds. The flaw allows attackers to forge certificates for any domain, potentially enabling man‑in‑the‑middle attacks and undermining trust chains. Cisco recommends disabling affected CAs and applying vendor‑issued mitigations immediately.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-emudhra-info-ScS22A1r?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DCisco+Informational+for+Emergency+Distrust+of+eMudhra+Root+and+Intermediate+Certificate+Authorities%26vs_k%3D1",
    "publishedAt": "2026-10-23T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "emudhra-intermediate-ca-private-keys-compromised",
      "article-710aae",
      "710aae"
    ]
  },
  {
    "slug": "php-releases-mitigation-for-cve-2026-115560-rce-vu-3e4da4",
    "title": "PHP Releases Mitigation for CVE‑2026‑115560 RCE Vulnerability",
    "summary": "PHP disclosed a new remote code execution vulnerability, CVE‑2026‑115560, impacting systems with non‑default configurations. The flaw permits arbitrary code execution, with no patch available and active exploitation status unknown. PHP recommends disabling vulnerable features, monitoring logs, and applying the forthcoming vendor patch as soon as it is released.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/php-shares-mitigation-for-new-and-unpatched-rce-vulnerability/",
    "publishedAt": "2026-10-23T15:38:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php-releases-mitigation-for-cve-2026-115560-rce-vu",
      "article-3e4da4",
      "3e4da4",
      "php-releases-mitigation-for-cve-2026-115560-rce-vulnerabilit"
    ]
  },
  {
    "slug": "red-hat-releases-php-security-update-for-rhel-9-6-37e4f5",
    "title": "Red Hat Releases PHP Security Update for RHEL 9.6 EUS",
    "summary": "Red Hat Enterprise Linux 9.6 Extended Update Support released RHSA‑2026:88720 to patch multiple PHP security flaws impacting web services. The patches cover vulnerabilities rated Important by Red Hat Product Security, with CVSS scores linked via CVE references, though no active exploitation has been observed. Apply the update immediately to eliminate potential remote code execution risks and maintain PHP integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88720",
    "publishedAt": "2026-10-23T15:23:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-php-security-update-for-rhel-9-6",
      "article-37e4f5",
      "37e4f5",
      "red-hat-releases-php-security-update-for-rhel-9-6-eus"
    ]
  },
  {
    "slug": "red-hat-releases-php-security-update-for-rhel-9-4-37e4f5",
    "title": "Red Hat Releases PHP Security Update for RHEL 9.4 SAP",
    "summary": "Red Hat issued a PHP security update for Enterprise Linux 9.4 SAP Solutions, addressing multiple vulnerabilities with an Important impact rating. The update mitigates code execution risks by patching identified flaws referenced in CVE links. Users should apply the update immediately to maintain system integrity and prevent exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88725",
    "publishedAt": "2026-10-23T15:23:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-php-security-update-for-rhel-9-4",
      "article-37e4f5",
      "37e4f5",
      "red-hat-releases-php-security-update-for-rhel-9-4-sap"
    ]
  },
  {
    "slug": "whatsapp-may-stop-working-without-registered-sim-u-25a338",
    "title": "WhatsApp May Stop Working Without Registered SIM Under New Rules",
    "summary": "WhatsApp users in India may lose service if their device lacks a registered SIM, per new government regulations effective January 1, 2027. The rule requires all messaging accounts to be linked to a registered SIM, impacting secondary phones, tablets, and other devices without active SIMs. Compliance deadlines are set for December 31, 2026, after which non‑compliant accounts will be disabled.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/whatsapp-stop-working-without-registered-sim/",
    "publishedAt": "2026-10-23T15:20:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "whatsapp-may-stop-working-without-registered-sim-u",
      "article-25a338",
      "25a338",
      "whatsapp-may-stop-working-without-registered-sim-under-new-r"
    ]
  },
  {
    "slug": "critical-okta-access-gateway-flaw-lets-attackers-w-302b8e",
    "title": "Critical Okta Access Gateway Flaw Lets Attackers With Admin Access Execute System Commands",
    "summary": "A critical flaw in Okta Access Gateway lets authenticated administrators run arbitrary system commands via the Admin Console, enabling remote code execution. CVE-2026-115547 arises from weak input validation and has a CVSS v3.1 score of 9.1, indicating high exploitability. Okta released a patch for versions before 2026.10.2; apply it immediately to disable command execution.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/okta-access-gateway-flaw/",
    "publishedAt": "2026-10-23T15:19:23.000Z",
    "cves": [
      "CVE-2026-115547"
    ],
    "additionalSources": [],
    "aliases": [
      "critical-okta-access-gateway-flaw-lets-attackers-w",
      "article-302b8e",
      "302b8e",
      "critical-okta-access-gateway-flaw-lets-attackers-with-admin-"
    ]
  },
  {
    "slug": "hpe-aruba-networking-flaws-enable-full-device-take-2478d1",
    "title": "HPE Aruba Networking Flaws Enable Full Device Takeover",
    "summary": "Hewlett Packard Enterprise disclosed critical vulnerabilities in Aruba Networking AOS-8 and AOS-10 that allow attackers to gain full control of Mobility Conductors, Controllers, Gateways, and access points without authentication. The flaws enable remote code execution and compromise network infrastructure, posing a high‑risk threat to enterprise deployments. HPE has released patches; administrators must apply them immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hpe-warns-aruba-networking-flaws/",
    "publishedAt": "2026-10-23T14:53:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hpe-aruba-networking-flaws-enable-full-device-take",
      "article-2478d1",
      "2478d1",
      "hpe-aruba-networking-flaws-enable-full-device-takeover"
    ]
  },
  {
    "slug": "capcom-customer-data-breach-exposes-11-8-million-r-17005a",
    "title": "Capcom Customer Data Breach Exposes 11.8 Million Records",
    "summary": "Capcom’s CAPCOM ID service suffered unauthorized access, exposing 11,774,247 customer records including email addresses and account activity. The breach involved credential compromise and unauthorized password changes on 196 accounts, indicating active credential theft. Capcom has reset affected passwords and will notify customers, urging immediate password updates and monitoring for suspicious activity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/capcom-confirmed-customer-records-exposed/",
    "publishedAt": "2026-10-23T14:37:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "capcom-customer-data-breach-exposes-11-8-million-r",
      "article-17005a",
      "17005a",
      "capcom-customer-data-breach-exposes-11-8-million-records"
    ]
  },
  {
    "slug": "apt28-targets-nato-defense-firms-via-compromised-s-648e98",
    "title": "APT28 Targets NATO Defense Firms via Compromised Systems",
    "summary": "APT28 targeted NATO defense firms via compromised systems, exploiting weak authentication and privileged accounts. The attack leveraged stolen credentials and lateral movement, causing unauthorized access to sensitive data and disrupting operational workflows. Security teams should enforce MFA, monitor for anomalous activity, apply vendor patches, and conduct thorough access reviews immediately.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/in-other-news-tor-exit-relays-hijacked-banks-spot-rogue-ai-agents-self-rebuilding-macos-ransomware/",
    "publishedAt": "2026-10-23T14:23:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apt28-targets-nato-defense-firms-via-compromised-s",
      "article-648e98",
      "648e98",
      "apt28-targets-nato-defense-firms-via-compromised-systems"
    ]
  },
  {
    "slug": "north-korea-s-state-websites-hit-by-multi-country-70b8df",
    "title": "North Korea’s State Websites Hit by Multi‑Country DDoS Floods",
    "summary": "Multiple waves of DDoS attacks originating from Vietnam, the Philippines, Venezuela, and other nations disrupted North Korea’s public internet services, taking major state websites offline. The floods began at 02:01 UTC on October 20, overwhelming the country’s bandwidth and rendering sites unreachable. Network operators should deploy rate limiting, scrubbing services, and traffic anomaly detection to defend against such volumetric assaults.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/multiple-waves-of-ddos-attacks-caused-in-north-korea/",
    "publishedAt": "2026-10-23T14:22:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "north-korea-s-state-websites-hit-by-multi-country",
      "article-70b8df",
      "70b8df",
      "north-korea-s-state-websites-hit-by-multi-country-ddos-flood"
    ]
  },
  {
    "slug": "node-js-brotli-decoder-rce-exploit-cve-2026-111497-a2d6ed",
    "title": "Node.js Brotli Decoder RCE Exploit (CVE‑2026‑111497)",
    "summary": "A high‑severity memory flaw in Node.js’s Brotli decoder (CVE‑2026‑111497) allows attackers to execute code via specially crafted Brotli‑compressed data. Researchers demonstrated a working Node2Shell exploit that achieves remote code execution without authentication, exposing enterprise applications to immediate risk. Red Hat and Node.js maintainers have released patches; administrators should apply the latest Node.js update and monitor for anomalous Brotli traffic.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/new-node2shell-node-js-rce-exploit/",
    "publishedAt": "2026-10-23T14:11:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "node-js-brotli-decoder-rce-exploit-cve-2026-111497",
      "article-a2d6ed",
      "a2d6ed"
    ]
  },
  {
    "slug": "ai-agent-manipulation-via-malicious-inputs-exploit-5ad1e0",
    "title": "AI Agent Manipulation via Malicious Inputs Exploits Legitimate Permissions",
    "summary": "AI agents can be manipulated through malicious emails, websites, and plugins to execute commands, steal data, or delete files using their legitimate permissions. The flaw arises from insufficient input validation and lack of runtime control enforcement, enabling attackers to hijack agent operations. Gen Digital recommends implementing Agent Trust Hub skill verification, secure connectivity, and runtime controls to mitigate this risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/you-gave-your-ai-agent-access-but-who-is-giving-it-orders/",
    "publishedAt": "2026-10-23T14:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agent-manipulation-via-malicious-inputs-exploit",
      "article-5ad1e0",
      "5ad1e0",
      "ai-agent-manipulation-via-malicious-inputs-exploits-legitima"
    ]
  },
  {
    "slug": "cve-2026-102208-windows-win32-kernel-subsystem-ele-1ff9f1",
    "title": "CVE-2026-102208: Windows Win32 Kernel Subsystem Elevation of Privilege",
    "summary": "CVE-2026-102208 is an elevation of privilege flaw in Windows Win32 Kernel Subsystem affecting all Windows versions. The flaw allows local attackers to gain SYSTEM privileges via malformed input, with CVSS 8.5, and a public PoC exists. Microsoft released a patch in the latest cumulative update; administrators should apply it immediately and enforce least privilege.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-102208",
    "publishedAt": "2026-10-23T14:00:00.000Z",
    "cves": [
      "CVE-2026-102208"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-102208-windows-win32-kernel-subsystem-ele",
      "article-1ff9f1",
      "1ff9f1",
      "cve-2026-102208-windows-win32-kernel-subsystem-elevation-of-"
    ]
  },
  {
    "slug": "cve-2026-83862-windows-network-load-balancing-rce-7440de",
    "title": "CVE‑2026‑83862: Windows Network Load Balancing RCE Exploit Adjusted CVSS",
    "summary": "CVE‑2026‑83862 is a Windows Network Load Balancing Remote Code Execution vulnerability with a CVSS base score of 8.8 after an attack vector adjustment to Adjacent. The flaw requires Layer 2 adjacency and allows authenticated attackers to execute arbitrary code on affected systems. Microsoft has released a patch; customers should install the update immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-83862",
    "publishedAt": "2026-10-23T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cve-2026-83862-windows-network-load-balancing-rce",
      "article-7440de",
      "7440de",
      "cve-2026-83862-windows-network-load-balancing-rce-exploit-ad"
    ]
  },
  {
    "slug": "caribbean-cyber-threats-amplify-global-risk-485ca9",
    "title": "Caribbean Cyber Threats Amplify Global Risk",
    "summary": "Caribbean cyber threats are escalating, demonstrating how regional exploit activity can amplify global risk. The lack of robust security assurance allows attackers to accelerate exploitation, increasing the likelihood of cross-border compromise. Stakeholders should strengthen threat intelligence sharing, enforce rigorous vulnerability management, and adopt proactive security frameworks to mitigate cascading impacts.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/why-caribbean-threats-cascade-global-cyber-risk",
    "publishedAt": "2026-10-23T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "caribbean-cyber-threats-amplify-global-risk",
      "article-485ca9",
      "485ca9"
    ]
  },
  {
    "slug": "red-hat-php-security-update-for-rhel-7-els-37e4f8",
    "title": "Red Hat PHP Security Update for RHEL 7 ELS",
    "summary": "An update for PHP is now available for Red Hat Enterprise Linux 7 Extended Lifecycle Support, addressing multiple security issues identified in the product. The update carries an Important security impact rating, with CVSS base scores listed in the CVE references for each vulnerability. Red Hat recommends applying the patch immediately to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88693",
    "publishedAt": "2026-10-23T13:54:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-php-security-update-for-rhel-7-els",
      "article-37e4f8",
      "37e4f8"
    ]
  },
  {
    "slug": "enterprise-firewalls-and-vpns-breached-70-000-cred-1f7b9d",
    "title": "Enterprise Firewalls and VPNs Breached, 70,000 Credentials Exposed",
    "summary": "Hackers breached exposed Fortinet FortiGate and Palo Alto Networks GlobalProtect firewalls, accessing over 70,000 credentials across multiple organizations worldwide. The attack leveraged misconfigured network edge devices, allowing attackers to enumerate and exfiltrate stored credentials. Immediate patching of firewall firmware, tightening of VPN authentication, and network segmentation are required to remediate the breach.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/hackers-breach-enterprise-firewalls-and.html",
    "publishedAt": "2026-10-23T13:50:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "enterprise-firewalls-and-vpns-breached-70-000-cred",
      "article-1f7b9d",
      "1f7b9d",
      "enterprise-firewalls-and-vpns-breached-70-000-credentials-ex"
    ]
  },
  {
    "slug": "red-hat-kernel-update-for-enterprise-linux-10-0-eu-37e4f8",
    "title": "Red Hat Kernel Update for Enterprise Linux 10.0 EUS",
    "summary": "Red Hat Enterprise Linux 10.0 Extended Update Support received a kernel security update addressing multiple vulnerabilities that could enable privilege escalation or denial of service. The update carries an Important security impact rating, with CVSS scores available via the referenced CVE links, indicating moderate to high severity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88687",
    "publishedAt": "2026-10-23T13:49:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-for-enterprise-linux-10-0-eu",
      "article-37e4f8",
      "37e4f8",
      "red-hat-kernel-update-for-enterprise-linux-10-0-eus"
    ]
  },
  {
    "slug": "critical-php-vulnerability-cve-2026-109618-enables-57dd7e",
    "title": "Critical PHP Vulnerability CVE-2026-109618 Enables Remote Code Execution",
    "summary": "A critical PHP vulnerability, CVE-2026-109618, enables remote code execution via malformed input. The flaw allows unauthenticated attackers to execute arbitrary code with the privileges of the web server, and a public PoC demonstrates the exploitability. A patch is available from the PHP team; administrators should update to the latest release immediately.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/33450",
    "publishedAt": "2026-10-23T13:43:20.000Z",
    "cves": [
      "CVE-2026-109618"
    ],
    "additionalSources": [],
    "aliases": [
      "critical-php-vulnerability-cve-2026-109618-enables",
      "article-57dd7e",
      "57dd7e",
      "critical-php-vulnerability-cve-2026-109618-enables-remote-co"
    ]
  },
  {
    "slug": "stealc-returns-with-stadia-rat-for-password-theft-5e33ee",
    "title": "StealC Returns with Stadia RAT for Password Theft and Remote Control",
    "summary": "The StealC operator has reintroduced its malware as Stadia, a Windows remote access trojan that steals passwords and secretly controls victim PCs. The RAT expands beyond credential theft, allowing attackers to execute commands, browse files, manage processes, and load additional malicious payloads. Security teams should monitor for unusual remote control activity and apply endpoint protection updates.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/stealc-malware/",
    "publishedAt": "2026-10-23T13:40:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "stealc-returns-with-stadia-rat-for-password-theft",
      "article-5e33ee",
      "5e33ee",
      "stealc-returns-with-stadia-rat-for-password-theft-and-remote"
    ]
  },
  {
    "slug": "cyber-insurers-shift-from-risk-transfer-to-active-717256",
    "title": "Cyber Insurers Shift from Risk Transfer to Active Cyber Defense",
    "summary": "Cyber insurers now face direct cybersecurity responsibilities as AI, social engineering, and cloud risks grow, shifting focus from pure risk transfer to active threat mitigation. This trend forces carriers to expand underwriting models, integrate technical assessments, and deploy defensive controls, while maintaining traditional actuarial pricing. Insurers are investing in cyber expertise, threat intelligence, and incident response to meet regulatory expectations.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/cyber-insurances-underwriting-isnt-enough",
    "publishedAt": "2026-10-23T13:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cyber-insurers-shift-from-risk-transfer-to-active",
      "article-717256",
      "717256",
      "cyber-insurers-shift-from-risk-transfer-to-active-cyber-defe"
    ]
  },
  {
    "slug": "uk-proposes-14-year-prison-terms-for-undersea-cabl-216515",
    "title": "UK Proposes 14‑Year Prison Terms for Undersea Cable Sabotage",
    "summary": "The United Kingdom is proposing amendments to the Submarine Telegraph Act 1885 to increase penalties for deliberate undersea cable sabotage. The revised law would raise the maximum fine to £1,000 and extend imprisonment to fourteen years, replacing the current five‑year limit. The proposal reflects growing concerns over hybrid threats targeting critical infrastructure and aims to deter future sabotage incidents.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/uk-undersea-cables-sabotage-new-sentencing-guidelines",
    "publishedAt": "2026-10-23T13:26:00.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Help Net Security",
        "sourceUrl": "https://www.helpnetsecurity.com/2026/10/23/uk-undersea-cable-sabotage-sentences/"
      }
    ],
    "aliases": [
      "uk-proposes-14-year-prison-terms-for-undersea-cabl",
      "article-216515",
      "216515",
      "uk-proposes-14-year-prison-terms-for-undersea-cable-sabotage"
    ]
  },
  {
    "slug": "red-hat-ca-certificates-critical-update-for-rhel-9-37e4fc",
    "title": "Red Hat ca-certificates Critical Update for RHEL 9.6 EUS",
    "summary": "A critical vulnerability in ca-certificates affects Red Hat Enterprise Linux 9.6 Extended Update Support, enabling potential exploitation via certificate validation flaws. The root cause involves improper handling of certificate chains, with a CVSS base score indicating high risk and active exploitation potential. Red Hat has released a patch; administrators must apply the update immediately to mitigate the threat.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88563",
    "publishedAt": "2026-10-23T13:24:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-ca-certificates-critical-update-for-rhel-9",
      "article-37e4fc",
      "37e4fc",
      "red-hat-ca-certificates-critical-update-for-rhel-9-6-eus"
    ]
  },
  {
    "slug": "capcom-warns-of-phishing-after-11-7-million-record-905773",
    "title": "Capcom Warns of Phishing After 11.7 Million Records Exposed",
    "summary": "Capcom disclosed that 11.7 million user records, including email addresses, were exposed, potentially enabling targeted phishing attacks against CAPCOM ID holders. The breach also involved unauthorized password changes on 196 accounts, indicating credential manipulation that could facilitate credential stuffing or account takeover. Capcom urges users to reset passwords immediately, enable two‑factor authentication, and is investigating the leak source.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/data-breaches/2026/10/resident-evil-maker-capcom-warns-of-phishing-after-11-7-million-records-exposed",
    "publishedAt": "2026-10-23T13:07:52.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "SecurityWeek",
        "sourceUrl": "https://www.securityweek.com/11-million-impacted-by-capcom-data-breach/"
      },
      {
        "source": "Help Net Security",
        "sourceUrl": "https://www.helpnetsecurity.com/2026/10/23/capcom-id-data-breach-11-million-records-exposed/"
      }
    ],
    "aliases": [
      "capcom-warns-of-phishing-after-11-7-million-record",
      "article-905773",
      "905773",
      "capcom-warns-of-phishing-after-11-7-million-records-exposed"
    ]
  },
  {
    "slug": "infostealer-targets-ai-development-tools-for-crede-5671d3",
    "title": "Infostealer Targets AI Development Tools for Credential Theft",
    "summary": "A new infostealer malware targets AI development tools, harvesting browser passwords, session cookies, and cryptocurrency wallets. The threat collects credentials for Claude, ChatGPT Desktop, Codex, Cursor, Windsurf, GitHub Copilot, and local development files, expanding its scope beyond traditional credential theft. Security teams should block known download URLs, enforce least‑privilege access, and monitor anomalous credential exfiltration to mitigate this evolving threat.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/infostealer-riding-the-ai-train/",
    "publishedAt": "2026-10-23T13:00:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "infostealer-targets-ai-development-tools-for-crede",
      "article-5671d3",
      "5671d3",
      "infostealer-targets-ai-development-tools-for-credential-thef"
    ]
  },
  {
    "slug": "hpe-releases-patches-for-eight-high-severity-aruba-156206",
    "title": "HPE Releases Patches for Eight High‑Severity ArubaOS RCE and Auth Bypass Flaws",
    "summary": "Hewlett Packard Enterprise disclosed eight high‑severity ArubaOS flaws enabling authentication bypass and remote code execution via the Aruba Operating System. The vulnerabilities stem from improper input validation in privileged configuration interfaces, allowing attackers to inject malicious commands and gain full administrative control. HPE released patches for all affected versions; security teams should apply the updates immediately and verify configuration integrity.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hpe-patches-eight-max-severity-rce-and-auth-bypass-aos-flaws/",
    "publishedAt": "2026-10-23T12:48:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hpe-releases-patches-for-eight-high-severity-aruba",
      "article-156206",
      "156206",
      "hpe-releases-patches-for-eight-high-severity-arubaos-rce-and"
    ]
  },
  {
    "slug": "mirai-botnet-operators-exploit-php2shell-aslr-bypa-249a64",
    "title": "Mirai Botnet Operators Exploit PHP2Shell ASLR Bypass (CVE-2026-109618)",
    "summary": "Researchers linked Mirai botnet operators to PHP2Shell attacks, revealing an ASLR bypass that could facilitate remote code execution on vulnerable servers. The flaw, identified as CVE-2026-109618, exploits a stack corruption vulnerability in PHP’s internal memory handling, but no successful exploitation has been observed. Administrators should update PHP to the latest release and enable ASLR mitigation features to prevent potential exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/mirai-botnet-operators-join-php2shell-attacks-as-aslr-bypass-exploits-emerge/",
    "publishedAt": "2026-10-23T12:45:52.000Z",
    "cves": [
      "CVE-2026-109618"
    ],
    "additionalSources": [],
    "aliases": [
      "mirai-botnet-operators-exploit-php2shell-aslr-bypa",
      "article-249a64",
      "249a64",
      "mirai-botnet-operators-exploit-php2shell-aslr-bypass-cve-202"
    ]
  },
  {
    "slug": "red-hat-ca-certificates-critical-update-for-rhel-8-37e4f8",
    "title": "Red Hat ca-certificates Critical Update for RHEL 8.6 AMSC and ELS",
    "summary": "A critical flaw in ca-certificates compromises Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Extended Update Support Long‑Life Add‑On, allowing attackers to bypass certificate validation. The vulnerability’s root cause is a logic error in chain verification, with a CVSS score reflecting severe risk and potential in‑the‑wild exploitation.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88668",
    "publishedAt": "2026-10-23T12:20:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-ca-certificates-critical-update-for-rhel-8",
      "article-37e4f8",
      "37e4f8",
      "red-hat-ca-certificates-critical-update-for-rhel-8-6-amsc-an"
    ]
  },
  {
    "slug": "red-hat-releases-critical-ca-certificates-update-f-37e4f8",
    "title": "Red Hat releases critical ca-certificates update for Enterprise Linux 8.4",
    "summary": "Red Hat released a critical ca-certificates update for Enterprise Linux 8.4 Advanced Mission Critical Update Support, fixing multiple certificate validation flaws. The patch addresses several high‑severity memory corruption bugs with CVSS scores above 9.0, eliminating remote code execution risk. Apply the latest ca-certificates package immediately to secure all affected systems.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88669",
    "publishedAt": "2026-10-23T12:16:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-ca-certificates-update-f",
      "article-37e4f8",
      "37e4f8",
      "red-hat-releases-critical-ca-certificates-update-for-enterpr"
    ]
  },
  {
    "slug": "cisa-adds-cve-2026-110447-to-known-exploited-vulne-240955",
    "title": "CISA Adds CVE-2026-110447 to Known Exploited Vulnerabilities Catalog",
    "summary": "CISA has identified an active exploitation of CVE-2026-110447, a command‑injection flaw in Collabora Online’s built‑in CODE Server, targeting publicly exposed federal assets. The vulnerability permits unauthenticated remote code execution with full control over the host, and a public PoC demonstrates its feasibility. CISA urges federal agencies to apply the vendor patch immediately and to enforce BOD 26‑04 risk‑based update policies.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/10/23/cisa-adds-one-known-exploited-vulnerability-catalog-0",
    "publishedAt": "2026-10-23T12:00:00.000Z",
    "cves": [
      "CVE-2026-110447"
    ],
    "additionalSources": [
      {
        "source": "CISA",
        "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/10/23/cisa-adds-one-known-exploited-vulnerability-catalog"
      }
    ],
    "aliases": [
      "cisa-adds-cve-2026-110447-to-known-exploited-vulne",
      "article-240955",
      "240955",
      "cisa-adds-cve-2026-110447-to-known-exploited-vulnerabilities"
    ]
  },
  {
    "slug": "chrome-dev-158-released-for-android-7a379b",
    "title": "Chrome Dev 158 Released for Android",
    "summary": "Chrome Dev 158 (158.0.8117.0) for Android has been released to Google Play, extending the developer channel for the browser. The update lists changes in the Git log, with feature details on the Chromium blog and web platform updates linked separately. Users reporting new issues should file bugs through official channels; no security patches or critical fixes are included.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/10/chrome-dev-for-android-update_01679408792.html",
    "publishedAt": "2026-10-23T11:58:32.749Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-dev-158-released-for-android",
      "article-7a379b",
      "7a379b"
    ]
  },
  {
    "slug": "red-hat-ca-certificates-critical-security-update-r-37e4f8",
    "title": "Red Hat ca-certificates Critical Security Update Released",
    "summary": "Red Hat Enterprise Linux 8.8 users face a critical vulnerability in the ca-certificates package, impacting SSL/TLS trust chains. The flaw allows attackers to subvert certificate validation, potentially enabling man‑in‑the‑middle attacks; a CVSS score of 9.8 reflects its high exploitability. Red Hat has issued an immediate patch; administrators must apply the update to restore secure certificate handling.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88662",
    "publishedAt": "2026-10-23T11:50:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-ca-certificates-critical-security-update-r",
      "article-37e4f8",
      "37e4f8",
      "red-hat-ca-certificates-critical-security-update-released"
    ]
  },
  {
    "slug": "microsoft-365-accounts-compromised-at-79-organizat-603fb9",
    "title": "Microsoft 365 Accounts Compromised at 79 Organizations via Session Replay",
    "summary": "An attacker replayed stolen Microsoft 365 sign‑in sessions to access email accounts at 79 organizations, bypassing password authentication. The campaign, spanning July 14 to September 22, 2026, involved 497 successful sign‑ins and over 200,000 failed attempts, with attackers deploying hidden inbox rules to conceal activity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/23/microsoft-365-accounts-stolen-sessions/",
    "publishedAt": "2026-10-23T11:45:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-365-accounts-compromised-at-79-organizat",
      "article-603fb9",
      "603fb9",
      "microsoft-365-accounts-compromised-at-79-organizations-via-s"
    ]
  },
  {
    "slug": "red-hat-releases-php-security-update-for-rhel-9-2-37e4f8",
    "title": "Red Hat Releases PHP Security Update for RHEL 9.2 SAP Solutions",
    "summary": "A PHP security update has been issued for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions, addressing multiple vulnerabilities with an Important impact rating. The update mitigates unspecified code execution flaws that could be triggered by misconfigured PHP installations. Red Hat has made the patch available through the standard update channels, and users should apply it immediately.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:88659",
    "publishedAt": "2026-10-23T11:44:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-php-security-update-for-rhel-9-2",
      "article-37e4f8",
      "37e4f8",
      "red-hat-releases-php-security-update-for-rhel-9-2-sap-soluti"
    ]
  },
  {
    "slug": "microsoft-s-project-perception-deploys-guardian-ag-7fdadf",
    "title": "Microsoft’s Project Perception Deploys Guardian Agents Amid AI Insider Threat Concerns",
    "summary": "Microsoft’s Project Perception introduces Guardian Agents to monitor and contain anomalous AI agents within its unified security stack. Experts caution that deploying agents to police other agents could amplify risk rather than mitigate it, highlighting challenges in autonomous threat containment. Security teams should evaluate the trade‑offs of AI‑driven containment and consider layered defenses to prevent escalation.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/ai-agents-insider-threats-inside-microsoft-unified-security-stack",
    "publishedAt": "2026-10-23T11:38:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-s-project-perception-deploys-guardian-ag",
      "article-7fdadf",
      "7fdadf",
      "microsoft-s-project-perception-deploys-guardian-agents-amid-"
    ]
  },
  {
    "slug": "php-warns-of-new-rce-risk-cve-2026-115560-no-emerg-2a3bb1",
    "title": "PHP Warns of New RCE Risk CVE-2026-115560, No Emergency Fix Issued",
    "summary": "PHP has identified a new remote code execution vulnerability, CVE-2026-115560, affecting web applications configured in an unusual way. The flaw is considered unlikely to be exploited, and PHP has not released an emergency patch, instead recommending disabling a specific feature to mitigate risk. Users should review configuration settings and apply any available updates to reduce exposure.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/urgent-php-warns-of-another-unpatched.html",
    "publishedAt": "2026-10-23T11:25:43.000Z",
    "cves": [
      "CVE-2026-115560"
    ],
    "additionalSources": [],
    "aliases": [
      "php-warns-of-new-rce-risk-cve-2026-115560-no-emerg",
      "article-2a3bb1",
      "2a3bb1",
      "php-warns-of-new-rce-risk-cve-2026-115560-no-emergency-fix-i"
    ]
  },
  {
    "slug": "sandworm-executes-destructive-wiping-attack-on-ukr-5fff35",
    "title": "Sandworm Executes Destructive Wiping Attack on Ukrainian Logistics Company via Spear-Phishing Backdoor",
    "summary": "Sandworm, a Russian state-sponsored group, launched a destructive wiping attack on a Ukrainian logistics company via a spear-phishing email that delivered the UAC-0099 backdoor. The Earth Sirrush backdoor granted attackers initial access, enabling deployment of destructive payloads that caused irreversible data loss and system shutdowns. ESET recommends applying the latest updates and disabling unused services.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/russian-linked-hackers-used-new-mesh.html",
    "publishedAt": "2026-10-23T11:11:23.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "ESET WeLiveSecurity",
        "sourceUrl": "https://www.welivesecurity.com/en/eset-research/mythicratatoskr-yggdrasil-enabled-backdoor-deployed-uac0099-sandworm-collaboration/"
      }
    ],
    "aliases": [
      "sandworm-executes-destructive-wiping-attack-on-ukr",
      "article-5fff35",
      "5fff35",
      "sandworm-executes-destructive-wiping-attack-on-ukrainian-log"
    ]
  },
  {
    "slug": "emudhra-tls-certificates-compromised-by-weak-priva-468030",
    "title": "eMudhra TLS Certificates Compromised by Weak Private Keys",
    "summary": "eMudhra Limited’s eight TLS certificates contain private keys with only 3 to 8 bits of entropy, far below the 384‑bit standard for NIST P‑384 elliptic curve keys. The flaw arises from inadequate key generation, allowing trivial brute‑force recovery of the private keys. Immediate action requires revoking the compromised certificates, issuing new keys with full entropy, and enforcing strict key‑generation policies.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/10/compromised-tls-certificates.html",
    "publishedAt": "2026-10-23T11:04:22.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/10/emudhra-to-exit-global-ssltls-business.html"
      },
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/godaddy-revoking-tls-certificates/"
      }
    ],
    "aliases": [
      "emudhra-tls-certificates-compromised-by-weak-priva",
      "article-468030",
      "468030",
      "emudhra-tls-certificates-compromised-by-weak-private-keys"
    ]
  },
  {
    "slug": "chinese-threat-actors-weaponize-artex-ai-tool-in-c-21b8af",
    "title": "Chinese Threat Actors Weaponize Artex AI Tool in ConnectWise Intrusions",
    "summary": "China APT leveraged the AI pentest tool Artex to target ConnectWise installations, compromising hundreds of organizations and achieving privileged access in some environments. The attack chain exploited automated credential discovery and lateral movement within the ConnectWise platform, enabling attackers to elevate privileges to operator level. ConnectWise has released a patch and recommends disabling the affected modules immediately.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/china-apt-uses-ai-pentest-tool-artex-in-connectwise-attacks/",
    "publishedAt": "2026-10-23T10:31:16.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "The Record",
        "sourceUrl": "https://therecord.media/china-cyber-connectwise-ai"
      }
    ],
    "aliases": [
      "chinese-threat-actors-weaponize-artex-ai-tool-in-c",
      "article-21b8af",
      "21b8af",
      "chinese-threat-actors-weaponize-artex-ai-tool-in-connectwise"
    ]
  }
];
