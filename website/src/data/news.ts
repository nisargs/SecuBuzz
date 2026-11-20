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
    "slug": "whatsapp-patches-cve-2026-23871-scam-vulnerability-c7f51406",
    "title": "WhatsApp Patches CVE-2026-23871 Scam Vulnerability",
    "summary": "WhatsApp identified CVE-2026-23871, a flaw that could have enabled attackers to craft more convincing scam messages. The vulnerability, discovered during a campaign disruption effort, potentially allowed malicious actors to embed deceptive content within legitimate chats. WhatsApp released a patch in its latest update; users should install the new version to eliminate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/whatsapp-fixes-flaw-uncovered-while-disrupting-scam-campaign/",
    "publishedAt": "2026-11-20T16:01:02.000Z",
    "cves": [
      "CVE-2026-23871"
    ],
    "additionalSources": [],
    "aliases": [
      "whatsapp-patches-cve-2026-23871-scam-vulnerability",
      "article-c7f51406",
      "c7f51406",
      "whatsapp-patches-cve-2026-23871-scam-vulnerability-2655f8"
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
    "slug": "apache-tomcat-vulnerability-enables-unauthorized-c-db2ea093",
    "title": "Apache Tomcat Vulnerability Enables Unauthorized Cluster Joining",
    "summary": "A critical flaw in Apache Tomcat lets remote attackers join trusted server clusters without authentication, targeting TLS 1.3 pre-shared key setups. Identified as CVE-2026-133325, the flaw abuses improper validation of cluster join requests, enabling unauthenticated RCE and lateral movement. Apache released a patch; administrators should upgrade Tomcat or apply configuration changes to block cluster joining until the fix is applied.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-apache-tomcat-flaw/",
    "publishedAt": "2026-11-20T14:29:21.000Z",
    "cves": [
      "CVE-2026-133325"
    ],
    "additionalSources": [],
    "aliases": [
      "apache-tomcat-vulnerability-enables-unauthorized-c",
      "article-db2ea093",
      "db2ea093",
      "apache-tomcat-vulnerability-enables-unauthorized-c-f2968f",
      "apache-tomcat-vulnerability-enables-unauthorized-cluster-joi"
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
    "slug": "red-hat-releases-kernel-update-for-rhel-9-6-eus-dc0864d2",
    "title": "Red Hat Releases Kernel Update for RHEL 9.6 EUS",
    "summary": "Red Hat released a kernel update for RHEL 9.6 Extended Update Support that addresses multiple security bugs. The update includes fixes for vulnerabilities with CVSS scores ranging from moderate to high, as detailed in the linked CVE references. Red Hat recommends applying the update immediately to mitigate potential exploitation and maintain kernel integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100652",
    "publishedAt": "2026-11-20T08:46:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-update-for-rhel-9-6-eus",
      "article-dc0864d2",
      "dc0864d2",
      "red-hat-releases-kernel-update-for-rhel-9-6-eus-2ee085"
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
  },
  {
    "slug": "ai-fuels-vulnerability-hysteria-and-operational-di-dbe94d43",
    "title": "AI Fuels Vulnerability Hysteria and Operational Disruption",
    "summary": "The Reporters' Notebook video series analyzes fallout from recent high-severity flaw disclosures, highlighting how AI-assisted exploit fears amplify vulnerability hysteria. The discussion notes widespread panic, operational disruptions, and growing warning fatigue among security teams, though no specific vulnerability is cited. The series encourages balanced risk assessment and disciplined alert management to mitigate unnecessary operational impact.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/vulnerabilities-threats/navigating-vulnerability-hysteria-ai-era",
    "publishedAt": "2026-11-19T19:46:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-fuels-vulnerability-hysteria-and-operational-di",
      "article-dbe94d43",
      "dbe94d43",
      "ai-fuels-vulnerability-hysteria-and-operational-di-8544c4",
      "ai-fuels-vulnerability-hysteria-and-operational-disruption"
    ]
  },
  {
    "slug": "drupal-core-vulnerability-enables-remote-code-exec-7d44e06d",
    "title": "Drupal Core Vulnerability Enables Remote Code Execution",
    "summary": "A remote code execution flaw exists in Drupal core versions before 10.6.22, 11.3.22, and 11.4.13, allowing attackers to execute arbitrary code. The vulnerability, identified as SA-CORE-2026-017, permits unauthenticated exploitation and could compromise site integrity and data. Drupal administrators should apply the latest patch or upgrade to a supported version as soon as the update is released.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/drupal-security-advisory-av26-1186",
    "publishedAt": "2026-11-19T19:29:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "drupal-core-vulnerability-enables-remote-code-exec",
      "article-7d44e06d",
      "7d44e06d",
      "drupal-core-vulnerability-enables-remote-code-exec-1fb70b",
      "drupal-core-vulnerability-enables-remote-code-execution"
    ]
  },
  {
    "slug": "vmware-vcenter-authentication-bypass-zero-day-expl-14ded22f",
    "title": "VMware vCenter Authentication Bypass Zero-Day Exploited by Chinese APT",
    "summary": "A China-linked espionage group exploited a critical VMware vCenter authentication bypass before Broadcom issued a patch. The flaw permits unauthenticated access to vCenter management interfaces, enabling attackers to execute privileged commands and potentially compromise virtual infrastructure. Administrators should apply Broadcom's patch immediately and enforce strict access controls to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/newly-patched-vmware-vcenter-flaw-exploited-as-zero-day-by-chinese-apt/",
    "publishedAt": "2026-11-19T19:21:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vmware-vcenter-authentication-bypass-zero-day-expl",
      "article-14ded22f",
      "14ded22f",
      "vmware-vcenter-authentication-bypass-zero-day-expl-4b6fa8",
      "vmware-vcenter-authentication-bypass-zero-day-exploited-by-c"
    ]
  },
  {
    "slug": "securing-github-actions-against-insider-threats-63cbba6e",
    "title": "Securing GitHub Actions Against Insider Threats",
    "summary": "A practical guide outlines steps to harden GitHub Actions against insider threats, focusing on credential protection and pipeline integrity. The approach covers trusted publishing, release approvals, and revocation mechanisms to prevent malicious code injection from compromised accounts. Security teams should implement these controls, enforce least-privilege access, and monitor workflow logs for anomalous activity.",
    "category": "General",
    "severity": "LOW",
    "source": "Socket.dev",
    "sourceUrl": "https://socket.dev/blog/hardening-github-actions-against-insider-threats",
    "publishedAt": "2026-11-19T19:17:08.445Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "securing-github-actions-against-insider-threats",
      "article-63cbba6e",
      "63cbba6e",
      "securing-github-actions-against-insider-threats-5e5d6a"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-security-update-for-rhel-8-8b4cf37d",
    "title": "Red Hat Releases Kernel Security Update for RHEL 8.4",
    "summary": "Red Hat issued a kernel security update for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support, addressing multiple critical vulnerabilities. The advisory references several CVE identifiers, each with a CVSS base score, but no active exploitation reports were disclosed. Administrators should apply the update promptly, verify kernel integrity, and monitor for any anomalous kernel behavior.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100517",
    "publishedAt": "2026-11-19T19:16:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-security-update-for-rhel-8",
      "article-8b4cf37d",
      "8b4cf37d",
      "red-hat-releases-kernel-security-update-for-rhel-8-2ee080",
      "red-hat-releases-kernel-security-update-for-rhel-8-4"
    ]
  },
  {
    "slug": "rhsa-2026-100500-important-python-urllib3-security-64f6a192",
    "title": "RHSA-2026:100500: Important: python-urllib3 security update",
    "summary": "An update for python-urllib3 is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100500",
    "publishedAt": "2026-11-19T19:14:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100500-important-python-urllib3-security",
      "article-64f6a192",
      "64f6a192",
      "rhsa-2026-100500-important-python-urllib3-security-2ee080",
      "rhsa-2026-100500-important-python-urllib3-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-100544-moderate-jackson-core-security-up-bb9f299c",
    "title": "RHSA-2026:100544: Moderate: jackson-core security update",
    "summary": "An update for jackson-core is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100544",
    "publishedAt": "2026-11-19T19:12:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100544-moderate-jackson-core-security-up",
      "article-bb9f299c",
      "bb9f299c",
      "rhsa-2026-100544-moderate-jackson-core-security-up-2ee081",
      "rhsa-2026-100544-moderate-jackson-core-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-100497-important-freerdp-security-update-15fea938",
    "title": "RHSA-2026:100497: Important: freerdp security update",
    "summary": "An update for freerdp is now available for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100497",
    "publishedAt": "2026-11-19T19:11:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100497-important-freerdp-security-update",
      "article-15fea938",
      "15fea938",
      "rhsa-2026-100497-important-freerdp-security-update-2ee07d"
    ]
  },
  {
    "slug": "rhsa-2026-100529-important-libxrender-security-upd-9a197c31",
    "title": "RHSA-2026:100529: Important: libXrender security update",
    "summary": "An update for libXrender is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100529",
    "publishedAt": "2026-11-19T19:11:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100529-important-libxrender-security-upd",
      "article-9a197c31",
      "9a197c31",
      "rhsa-2026-100529-important-libxrender-security-upd-2ee080",
      "rhsa-2026-100529-important-libxrender-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-100476-important-netpbm-security-update-db163bba",
    "title": "RHSA-2026:100476: Important: netpbm security update",
    "summary": "An update for netpbm is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100476",
    "publishedAt": "2026-11-19T19:11:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100476-important-netpbm-security-update",
      "article-db163bba",
      "db163bba",
      "rhsa-2026-100476-important-netpbm-security-update-2ee07d"
    ]
  },
  {
    "slug": "rhsa-2026-100546-moderate-jackson-core-security-up-afbc845c",
    "title": "RHSA-2026:100546: Moderate: jackson-core security update",
    "summary": "An update for jackson-core is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100546",
    "publishedAt": "2026-11-19T19:09:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100546-moderate-jackson-core-security-up",
      "article-afbc845c",
      "afbc845c",
      "rhsa-2026-100546-moderate-jackson-core-security-up-2ee081",
      "rhsa-2026-100546-moderate-jackson-core-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-100485-important-grafana-security-update-27037fe8",
    "title": "RHSA-2026:100485: Important: grafana security update",
    "summary": "An update for grafana is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100485",
    "publishedAt": "2026-11-19T19:09:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100485-important-grafana-security-update",
      "article-27037fe8",
      "27037fe8",
      "rhsa-2026-100485-important-grafana-security-update-2ee07d"
    ]
  },
  {
    "slug": "rhsa-2026-100482-moderate-gstreamer1-plugins-bad-f-dc679ec3",
    "title": "RHSA-2026:100482: Moderate: gstreamer1-plugins-bad-free security update",
    "summary": "An update for gstreamer1-plugins-bad-free is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100482",
    "publishedAt": "2026-11-19T19:08:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100482-moderate-gstreamer1-plugins-bad-f",
      "article-dc679ec3",
      "dc679ec3",
      "rhsa-2026-100482-moderate-gstreamer1-plugins-bad-f-2ee07d",
      "rhsa-2026-100482-moderate-gstreamer1-plugins-bad-free-securi"
    ]
  },
  {
    "slug": "vmware-vcenter-vulnerabilities-exploited-in-wild-c-d742542e",
    "title": "VMware vCenter Vulnerabilities Exploited in Wild (CVE-2026-123890)",
    "summary": "Multiple VMware vCenter versions, including 9.1.x, 9.0.x, 8.0, and 7.0, contain vulnerabilities that have been exploited in the wild, such as CVE-2026-123890. The flaw allows attackers to gain unauthorized access to vCenter management functions, potentially enabling remote code execution and full control over virtual environments. VMware's VMSA-2026-0009 patch addresses CVE-2026-123890, CVE-2026-123891, and CVE-2026-123892; administrators should apply the update immediately.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/vmware-security-advisory-av26-1185",
    "publishedAt": "2026-11-19T19:02:48.000Z",
    "cves": [
      "CVE-2026-123890",
      "CVE-2026-123891",
      "CVE-2026-123892"
    ],
    "additionalSources": [],
    "aliases": [
      "vmware-vcenter-vulnerabilities-exploited-in-wild-c",
      "article-d742542e",
      "d742542e",
      "vmware-vcenter-vulnerabilities-exploited-in-wild-c-7852fc",
      "vmware-vcenter-vulnerabilities-exploited-in-wild-cve-2026-12"
    ]
  },
  {
    "slug": "pause-reactive-patching-for-team-stability-5cdb9296",
    "title": "Pause Reactive Patching for Team Stability",
    "summary": "Bill urges the cybersecurity community to pause from relentless reactive patching and instead focus on environmental awareness and team stability. He argues that sustainable practices and well-balanced workloads reduce burnout and improve long-term security posture. The message calls for a cultural shift toward proactive planning and holistic well-being rather than constant firefighting.",
    "category": "General",
    "severity": "LOW",
    "source": "Cisco Talos",
    "sourceUrl": "https://blog.talosintelligence.com/the-internet-needs-a-nap-and-you-do-too/",
    "publishedAt": "2026-11-19T19:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pause-reactive-patching-for-team-stability",
      "article-5cdb9296",
      "5cdb9296",
      "pause-reactive-patching-for-team-stability-634e67"
    ]
  },
  {
    "slug": "mitel-micollab-vulnerability-affects-versions-10-3-fdd9df48",
    "title": "Mitel MiCollab Vulnerability Affects Versions ≤10.3.0.18",
    "summary": "Mitel disclosed a vulnerability affecting MiCollab versions up to 10.3.0.18. The flaw allows unauthorized access or potential data exposure, though no exploitation evidence is reported; the advisory does not assign a CVE identifier. Mitel recommends applying the latest MiCollab update or patch as provided in the advisory; administrators should review the Cyber Centre link for detailed instructions.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/mitel-security-advisory-av26-1184",
    "publishedAt": "2026-11-19T18:51:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mitel-micollab-vulnerability-affects-versions-10-3",
      "article-fdd9df48",
      "fdd9df48",
      "mitel-micollab-vulnerability-affects-versions-10-3-696627",
      "mitel-micollab-vulnerability-affects-versions-10-3-0-18"
    ]
  },
  {
    "slug": "multiple-threats-gpt-6-2-flaws-bubbleloader-malwar-ad1c0b6a",
    "title": "Multiple Threats: GPT-6.2 Flaws, BubbleLoader Malware, $500M Ransom",
    "summary": "The article outlines several emerging threats, including GPT-6.2 jailbreak vulnerabilities, BubbleLoader PNG malware, and a $500 million ransom demand. It highlights how attackers exploit familiar interfaces and AI to deceive users into revealing credentials or executing malicious payloads. Security teams should monitor for these tactics, apply relevant patches, and employ AI-aware detection to mitigate potential compromise.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/threatsday-gpt-62-jailbreak-flaws.html",
    "publishedAt": "2026-11-19T18:47:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "multiple-threats-gpt-6-2-flaws-bubbleloader-malwar",
      "article-ad1c0b6a",
      "ad1c0b6a",
      "multiple-threats-gpt-6-2-flaws-bubbleloader-malwar-7c958c",
      "multiple-threats-gpt-6-2-flaws-bubbleloader-malware-500m-ran"
    ]
  },
  {
    "slug": "php-vulnerabilities-affect-versions-8-6-0-8763cb55",
    "title": "PHP Vulnerabilities Affect Versions <8.6.0",
    "summary": "PHP Group identified security flaws in PHP versions prior to 8.6.0, including 8.5.13, 8.4.28, 8.3.37, and 8.2.36. The advisory does not list a CVE identifier, but the vulnerabilities could enable unauthorized code execution or data leakage. Administrators should apply the latest PHP 8.x patch or update as recommended in the Cyber Centre link to mitigate risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/php-group-security-advisory-av26-1183",
    "publishedAt": "2026-11-19T18:33:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php-vulnerabilities-affect-versions-8-6-0",
      "article-8763cb55",
      "8763cb55",
      "php-vulnerabilities-affect-versions-8-6-0-1a35b7"
    ]
  },
  {
    "slug": "php-foundation-releases-security-fixes-for-8-2-8-5-63932e70",
    "title": "PHP Foundation Releases Security Fixes for 8.2-8.5",
    "summary": "PHP Foundation released security updates for PHP 8.2-8.5 addressing 17 issues across engine, extensions, and stream wrappers. The flaws involve the PHP engine, PHP-FPM, CGI binary, SOAP, Phar, session, DOM, date extensions, HTTP/FTP wrappers, and RFC 3986 URI implementation, but no public exploit is reported. AWS recommends applying the patched versions 8.2.36, 8.3.37, 8.4.28, and 8.5.13 as the sole remediation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-190-aws/",
    "publishedAt": "2026-11-19T18:30:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php-foundation-releases-security-fixes-for-8-2-8-5",
      "article-63932e70",
      "63932e70",
      "php-foundation-releases-security-fixes-for-8-2-8-5-1e0887"
    ]
  },
  {
    "slug": "ubiquiti-unifi-access-vulnerabilities-pre-4-3-24-f6faa93c",
    "title": "Ubiquiti UniFi Access Vulnerabilities Pre-4.3.24",
    "summary": "Ubiquiti disclosed security weaknesses in its UniFi Access Application versions before 4.3.24, exposing the software to potential exploitation via unspecified input vectors. Without a CVE ID, the flaws could let attackers manipulate configuration or session data, enabling unauthorized access. Administrators should review the advisory and apply any available firmware or software updates promptly to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/ubiquiti-security-advisory-av26-1182",
    "publishedAt": "2026-11-19T18:28:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubiquiti-unifi-access-vulnerabilities-pre-4-3-24",
      "article-f6faa93c",
      "f6faa93c",
      "ubiquiti-unifi-access-vulnerabilities-pre-4-3-24-3f023f"
    ]
  },
  {
    "slug": "jetbrains-teamcity-vulnerabilities-pre-2026-2-1-a278e213",
    "title": "JetBrains TeamCity Vulnerabilities Pre-2026.2.1",
    "summary": "JetBrains identified security weaknesses in its TeamCity product versions before 2026.2.1 and 2026.1.5, potentially exposing the CI/CD platform to exploitation. Without CVE IDs, the flaws could let attackers gain unauthorized access or disrupt builds via input validation errors. JetBrains urges users to review the advisory links and apply any available updates to secure the environment.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/jetbrains-security-advisory-av26-1181",
    "publishedAt": "2026-11-19T18:24:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "jetbrains-teamcity-vulnerabilities-pre-2026-2-1",
      "article-a278e213",
      "a278e213",
      "jetbrains-teamcity-vulnerabilities-pre-2026-2-1-53189b"
    ]
  },
  {
    "slug": "tfl-data-breach-exposes-265-000-oyster-card-users-62eda7bc",
    "title": "TfL Data Breach Exposes 265,000 Oyster Card Users",
    "summary": "Transport for London reported that approximately 265,000 Oyster photocard customers may have had their account details exposed in a data breach. The breach potentially compromised usernames, passwords, and personal information, though the extent of credential theft or misuse remains unconfirmed. TfL urges affected users to monitor accounts, change passwords, and review security settings while the investigation continues.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/transport-for-london-breach-exposes-265-000-oyster-card-users-data/",
    "publishedAt": "2026-11-19T18:20:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "tfl-data-breach-exposes-265-000-oyster-card-users",
      "article-62eda7bc",
      "62eda7bc",
      "tfl-data-breach-exposes-265-000-oyster-card-users-5adcdf"
    ]
  },
  {
    "slug": "craftcms-vulnerability-in-versions-pre-5-11-5-disc-b7076f94",
    "title": "CraftCMS Vulnerability in Versions Pre-5.11.5 Disclosed",
    "summary": "The Canadian Centre for Cyber Security disclosed a vulnerability in CraftCMS versions before 5.11.5 on November 18, 2026. The flaw, detailed on the CraftCMS GitHub repository, may allow attackers to exploit weaknesses in the CMS code, potentially enabling unauthorized access or data exposure. Administrators should review the advisory and apply any available updates to secure affected installations.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/craftcms-security-advisory-av26-1180",
    "publishedAt": "2026-11-19T18:19:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "craftcms-vulnerability-in-versions-pre-5-11-5-disc",
      "article-b7076f94",
      "b7076f94",
      "craftcms-vulnerability-in-versions-pre-5-11-5-disc-4395db",
      "craftcms-vulnerability-in-versions-pre-5-11-5-disclosed"
    ]
  },
  {
    "slug": "deepfake-musk-scam-sees-4-7m-crypto-blocked-aefff8aa",
    "title": "Deepfake Musk Scam Sees $4.7M Crypto Blocked",
    "summary": "Coinbase reported that it blocked $4.7 million in attempted payments to a deepfake Elon Musk scam targeting cryptocurrency users. The fraudulent scheme leveraged a fabricated Musk persona to persuade victims into sending funds, but the platform's fraud detection prevented the transfers. Users should verify sender authenticity and remain cautious of unsolicited crypto requests to mitigate similar scams.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/ai/2026/11/deepfake-elon-musk-nearly-costs-viewers-4-7-million-in-crypto",
    "publishedAt": "2026-11-19T17:26:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "deepfake-musk-scam-sees-4-7m-crypto-blocked",
      "article-aefff8aa",
      "aefff8aa",
      "deepfake-musk-scam-sees-4-7m-crypto-blocked-5c02b3"
    ]
  },
  {
    "slug": "doj-dhs-launch-threat-disruption-center-for-cyberc-8fa7171e",
    "title": "DOJ, DHS Launch Threat Disruption Center for Cybercrime",
    "summary": "The U.S. Department of Justice and Department of Homeland Security are partnering on a Threat Disruption Center to triage victim complaints, map cybercriminal networks, and provide a direct channel to private-sector organizations that work with victims. The unit is intended to improve coordination against scams and cybercrime. No operational timeline, funding details, or enforcement authorities were disclosed in the announcement.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/doj-dhs-partner-on-new-unit-tackling-scams-cybercrime",
    "publishedAt": "2026-11-19T17:25:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "doj-dhs-launch-threat-disruption-center-for-cyberc",
      "article-8fa7171e",
      "8fa7171e",
      "doj-dhs-launch-threat-disruption-center-for-cyberc-2aad78",
      "doj-dhs-launch-threat-disruption-center-for-cybercrime"
    ]
  },
  {
    "slug": "cisa-nominee-losapio-vows-to-bolster-cyber-defense-dc560534",
    "title": "CISA nominee LoSapio vows to bolster cyber defenses while denying Jan. 6 Capitol attack",
    "summary": "President Donald Trump’s pick to lead the Cybersecurity and Infrastructure Security Agency pledged to lawmakers to uncover any “gaps” within the organization while also denying the Capitol came under attack on January 6, 2021.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/cisa-losapio-nomination-trump",
    "publishedAt": "2026-11-19T17:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-nominee-losapio-vows-to-bolster-cyber-defense",
      "article-dc560534",
      "dc560534",
      "cisa-nominee-losapio-vows-to-bolster-cyber-defense-630e89",
      "cisa-nominee-losapio-vows-to-bolster-cyber-defenses-while-de"
    ]
  },
  {
    "slug": "phpaftershell-enables-php-session-exploit-e648c712",
    "title": "phpAfterShell Enables PHP Session Exploit",
    "summary": "CVE-2026-126714 exposes PHP's file-based session storage, letting attackers inject chosen objects. If a second flaw supplies a gadget chain, the injected objects can trigger arbitrary server code execution. PHP releases have fixed the issue; administrators should apply the latest patches or upgrade to a supported version to eliminate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/phpaftershell-explained-how-hackers.html",
    "publishedAt": "2026-11-19T16:59:56.000Z",
    "cves": [
      "CVE-2026-126714"
    ],
    "additionalSources": [],
    "aliases": [
      "phpaftershell-enables-php-session-exploit",
      "article-e648c712",
      "e648c712",
      "phpaftershell-enables-php-session-exploit-213b90"
    ]
  },
  {
    "slug": "phpaftershell-exploits-php2shell-patch-to-enable-r-81a2d034",
    "title": "phpAfterShell Exploits PHP2Shell Patch to Enable RCE",
    "summary": "A new PHP attack, phpAfterShell, enables unauthenticated remote code execution on servers even after the October PHP2Shell patches. The flaw, CVE-2026-126714, exploits a separate PHP bug that lets attackers combine payloads and run arbitrary code without authentication. Administrators should apply the latest PHP patch and verify that the phpAfterShell vulnerability is mitigated.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/phpaftershell-rce/",
    "publishedAt": "2026-11-19T16:50:33.000Z",
    "cves": [
      "CVE-2026-126714"
    ],
    "additionalSources": [],
    "aliases": [
      "phpaftershell-exploits-php2shell-patch-to-enable-r",
      "article-81a2d034",
      "81a2d034",
      "phpaftershell-exploits-php2shell-patch-to-enable-r-822549",
      "phpaftershell-exploits-php2shell-patch-to-enable-rce"
    ]
  },
  {
    "slug": "vmware-vcenter-authentication-bypass-flaws-exposed-1973945a",
    "title": "VMware vCenter Authentication Bypass Flaws Exposed",
    "summary": "Broadcom issued VMSA-2026-0009, detailing five VMware flaws that let attackers with network access to vCenter bypass authentication and reach servers, including vCenter, SDDC Manager, and VMware Tools. The most severe flaw, CVE-2026-123890, scores 9.8 on CVSS, enabling unauthenticated remote code execution via credential-less access. No workarounds are available; administrators must apply the Broadcom patches immediately to prevent exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/vmware-vcenter-authentication-bypass/",
    "publishedAt": "2026-11-19T16:30:55.000Z",
    "cves": [
      "CVE-2026-123890"
    ],
    "additionalSources": [],
    "aliases": [
      "vmware-vcenter-authentication-bypass-flaws-exposed",
      "article-1973945a",
      "1973945a",
      "vmware-vcenter-authentication-bypass-flaws-exposed-157a43"
    ]
  },
  {
    "slug": "php-releases-18-security-patches-for-critical-rce-8cd3859d",
    "title": "PHP Releases 18 Security Patches for Critical RCE Flaws",
    "summary": "PHP released updates for 18 vulnerabilities, including critical flaws that let unauthenticated attackers remotely execute code. The bugs stem from improper input validation in PHP core, enabling code injection without authentication and granting server control. All affected PHP versions ship patches; administrators should update to the latest release or apply vendor-supplied hotfixes to eliminate the risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/php-security-updates-fix-18-flaws-including-critical-rce-bugs/",
    "publishedAt": "2026-11-19T16:28:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php-releases-18-security-patches-for-critical-rce",
      "article-8cd3859d",
      "8cd3859d",
      "php-releases-18-security-patches-for-critical-rce-1d7cf4",
      "php-releases-18-security-patches-for-critical-rce-flaws"
    ]
  },
  {
    "slug": "uk-court-confirms-secret-encryption-notice-to-appl-9bce48c5",
    "title": "UK Court Confirms Secret Encryption Notice to Apple",
    "summary": "A UK tribunal confirmed that the British government served Apple with a notice targeting the company’s iCloud encryption safeguards. The notice, denied for almost two years, seeks to compel Apple to provide access to encrypted data stored on its servers. Apple’s legal team has not yet responded, but security teams should monitor for potential policy changes affecting cloud encryption compliance.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/apple-uk-encryption-notice",
    "publishedAt": "2026-11-19T16:15:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "uk-court-confirms-secret-encryption-notice-to-appl",
      "article-9bce48c5",
      "9bce48c5",
      "uk-court-confirms-secret-encryption-notice-to-appl-634638",
      "uk-court-confirms-secret-encryption-notice-to-apple"
    ]
  },
  {
    "slug": "jpmorgan-chase-confirms-third-party-data-exposure-8e3f6470",
    "title": "JPMorgan Chase Confirms Third-Party Data Exposure",
    "summary": "JPMorgan Chase confirmed a third-party cyberattack targeting outside companies that provide services to the bank. Attackers accessed marketing data held by those vendors, which may include some customer names and email addresses, though the bank did not disclose how many customers are affected. Security teams should treat exposed names and emails as phishing risk and verify third-party access controls.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/jpmorgan-third-party-data-breach/",
    "publishedAt": "2026-11-19T16:14:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "jpmorgan-chase-confirms-third-party-data-exposure",
      "article-8e3f6470",
      "8e3f6470",
      "jpmorgan-chase-confirms-third-party-data-exposure-1623d8"
    ]
  },
  {
    "slug": "microsoft-acknowledges-cve-2026-69360-in-office-wo-f5ab3f82",
    "title": "Microsoft Acknowledges CVE-2026-69360 in Office Word",
    "summary": "Microsoft acknowledged CVE-2026-69360, a remote code execution vulnerability in Office Word. The vendor has issued an informational update, but no exploit details or patch status are disclosed. Security teams should monitor for future advisories and verify that their Office installations are up to date currently and immediately.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-69360",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-69360"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-cve-2026-69360-in-office-wo",
      "article-f5ab3f82",
      "f5ab3f82",
      "microsoft-acknowledges-cve-2026-69360-in-office-wo-745a66",
      "microsoft-acknowledges-cve-2026-69360-in-office-word"
    ]
  },
  {
    "slug": "microsoft-acknowledges-excel-rce-cve-2026-100209-d9e842df",
    "title": "Microsoft Acknowledges Excel RCE CVE-2026-100209",
    "summary": "Microsoft acknowledges CVE-2026-100209, a remote code execution flaw in Office Excel that could be triggered by malicious content. The flaw permits arbitrary code execution via a crafted spreadsheet; no public exploit has been disclosed and CVSS is not yet published. Microsoft has released a patch in the latest Office update; administrators should apply it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-100209",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-100209"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-excel-rce-cve-2026-100209",
      "article-d9e842df",
      "d9e842df",
      "microsoft-acknowledges-excel-rce-cve-2026-100209-1ffada"
    ]
  },
  {
    "slug": "microsoft-acknowledges-exchange-rce-cve-2026-55007-b2279bfb",
    "title": "Microsoft Acknowledges Exchange RCE CVE-2026-55007",
    "summary": "Microsoft acknowledges CVE-2026-55007, a remote code execution flaw in Exchange Server that could be triggered by malicious content. The flaw permits arbitrary code execution via a crafted email attachment; no public exploit has been disclosed and CVSS is not yet published. Microsoft has released a patch in the latest Exchange update; administrators should apply it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-55007",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-55007"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-exchange-rce-cve-2026-55007",
      "article-b2279bfb",
      "b2279bfb",
      "microsoft-acknowledges-exchange-rce-cve-2026-55007-746a5b"
    ]
  },
  {
    "slug": "microsoft-acknowledges-office-rce-cve-2026-78505-a59da9f6",
    "title": "Microsoft Acknowledges Office RCE CVE-2026-78505",
    "summary": "Microsoft acknowledges CVE-2026-78505, a remote code execution flaw in Office that could be triggered by malicious content. The flaw permits arbitrary code execution via a crafted document; no public exploit has been disclosed and CVSS is not yet published. Microsoft has released a patch in the latest Office update; administrators should apply it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-78505",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-78505"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-office-rce-cve-2026-78505",
      "article-a59da9f6",
      "a59da9f6",
      "microsoft-acknowledges-office-rce-cve-2026-78505-744cbc"
    ]
  },
  {
    "slug": "microsoft-office-excel-cve-2026-97772-acknowledged-a65edabe",
    "title": "Microsoft Office Excel CVE-2026-97772 Acknowledged",
    "summary": "Microsoft Office Excel Remote Code Execution Vulnerability CVE-2026-97772 was acknowledged by Microsoft. The flaw, affecting Excel's processing of specially crafted spreadsheets, permits arbitrary code execution, yet no exploitation has been reported. Microsoft has issued an informational update; users should monitor for official patch releases and apply updates promptly today.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97772",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-97772"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-office-excel-cve-2026-97772-acknowledged",
      "article-a65edabe",
      "a65edabe",
      "microsoft-office-excel-cve-2026-97772-acknowledged-7430f9"
    ]
  },
  {
    "slug": "microsoft-office-excel-cve-2026-97768-acknowledged-f6bc40da",
    "title": "Microsoft Office Excel CVE-2026-97768 Acknowledged",
    "summary": "Microsoft Office Excel Remote Code Execution Vulnerability CVE-2026-97768 was acknowledged by Microsoft. The flaw, affecting Excel's processing of specially crafted spreadsheets, permits arbitrary code execution, yet no exploitation has been reported. Microsoft has issued an informational update; users should monitor for official patch releases and apply updates promptly today.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97768",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-97768"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-office-excel-cve-2026-97768-acknowledged",
      "article-f6bc40da",
      "f6bc40da",
      "microsoft-office-excel-cve-2026-97768-acknowledged-7430f9"
    ]
  },
  {
    "slug": "microsoft-office-excel-cve-2026-97745-acknowledged-019e2d42",
    "title": "Microsoft Office Excel CVE-2026-97745 Acknowledged",
    "summary": "Microsoft Office Excel Remote Code Execution Vulnerability CVE-2026-97745 was acknowledged by Microsoft. The flaw, affecting Excel's processing of specially crafted spreadsheets, permits arbitrary code execution, yet no exploitation has been reported. Microsoft has issued an informational update; users should monitor for official patch releases and apply updates promptly today.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97745",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-97745"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-office-excel-cve-2026-97745-acknowledged",
      "article-019e2d42",
      "019e2d42",
      "microsoft-office-excel-cve-2026-97745-acknowledged-7430f9"
    ]
  },
  {
    "slug": "microsoft-office-excel-cve-2026-100211-rce-96e958c2",
    "title": "Microsoft Office Excel CVE-2026-100211 RCE",
    "summary": "Microsoft Office Excel is affected by CVE-2026-100211, a remote code execution vulnerability exploitable via crafted spreadsheet files. The flaw arises from improper handling of complex formula parsing, granting attackers unauthenticated RCE with a CVSS score of 9.8. Microsoft has released a patch in the November 2026 update; administrators should apply the Office 365 update immediately to mitigate exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-100211",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-100211"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-office-excel-cve-2026-100211-rce",
      "article-96e958c2",
      "96e958c2",
      "microsoft-office-excel-cve-2026-100211-rce-1ffada"
    ]
  },
  {
    "slug": "microsoft-acknowledges-cve-2026-97763-excel-rce-fb7aab1d",
    "title": "Microsoft Acknowledges CVE-2026-97763 Excel RCE",
    "summary": "Microsoft acknowledged CVE-2026-97763, a remote code execution flaw in Office Excel that could allow attackers to run arbitrary code via crafted spreadsheets. The advisory notes only an informational update, with no patch or exploitation evidence yet. Teams should watch Microsoft’s CVE tracker for a patch and apply it promptly to mitigate risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97763",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-97763"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-cve-2026-97763-excel-rce",
      "article-fb7aab1d",
      "fb7aab1d",
      "microsoft-acknowledges-cve-2026-97763-excel-rce-7430f9"
    ]
  },
  {
    "slug": "microsoft-office-excel-cve-2026-97773-rce-vulnerab-6ec3afdc",
    "title": "Microsoft Office Excel CVE-2026-97773 RCE Vulnerability",
    "summary": "Microsoft Office Excel contains a remote code execution vulnerability (CVE-2026-97773) that could allow attackers to run arbitrary code without authentication. The flaw resides in the Excel rendering engine, enabling code execution via a crafted spreadsheet; no public exploit is confirmed. Microsoft has acknowledged the issue and is working on a patch; users should monitor for updates.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97773",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-97773"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-office-excel-cve-2026-97773-rce-vulnerab",
      "article-6ec3afdc",
      "6ec3afdc",
      "microsoft-office-excel-cve-2026-97773-rce-vulnerab-7430f9",
      "microsoft-office-excel-cve-2026-97773-rce-vulnerability"
    ]
  },
  {
    "slug": "microsoft-office-excel-cve-2026-97777-rce-vulnerab-ebd23f1c",
    "title": "Microsoft Office Excel CVE-2026-97777 RCE Vulnerability",
    "summary": "Microsoft Office Excel contains a remote code execution vulnerability (CVE-2026-97777) that could allow attackers to run arbitrary code without authentication. The flaw resides in the Excel rendering engine, enabling code execution via a crafted spreadsheet; no public exploit is confirmed. Microsoft has acknowledged the issue and is working on a patch; users should monitor for updates.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97777",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-97777"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-office-excel-cve-2026-97777-rce-vulnerab",
      "article-ebd23f1c",
      "ebd23f1c",
      "microsoft-office-excel-cve-2026-97777-rce-vulnerab-7430f9",
      "microsoft-office-excel-cve-2026-97777-rce-vulnerability"
    ]
  },
  {
    "slug": "microsoft-office-excel-cve-2026-97741-rce-vulnerab-ddffc804",
    "title": "Microsoft Office Excel CVE-2026-97741 RCE Vulnerability",
    "summary": "Microsoft Office Excel contains a remote code execution vulnerability (CVE-2026-97741) that could allow attackers to run arbitrary code without authentication. The flaw resides in the Excel rendering engine, enabling code execution via a crafted spreadsheet; no public exploit is confirmed. Microsoft has acknowledged the issue and is working on a patch; users should monitor for updates.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97741",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-97741"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-office-excel-cve-2026-97741-rce-vulnerab",
      "article-ddffc804",
      "ddffc804",
      "microsoft-office-excel-cve-2026-97741-rce-vulnerab-7430f9",
      "microsoft-office-excel-cve-2026-97741-rce-vulnerability"
    ]
  },
  {
    "slug": "microsoft-excel-remote-code-execution-vulnerabilit-eb985edd",
    "title": "Microsoft Excel Remote Code Execution Vulnerability CVE-2026-97767",
    "summary": "Microsoft Office Excel has a remote code execution flaw (CVE-2026-97767) triggered by malicious spreadsheet files. The flaw stems from improper handling of embedded objects, enabling attackers to run arbitrary code with the user’s privileges, though no exploitation has been seen. Microsoft has released a patch in the latest Office update; users should install it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97767",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-97767"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-excel-remote-code-execution-vulnerabilit",
      "article-eb985edd",
      "eb985edd",
      "microsoft-excel-remote-code-execution-vulnerabilit-7430f9",
      "microsoft-excel-remote-code-execution-vulnerability-cve-2026"
    ]
  },
  {
    "slug": "microsoft-powerpoint-remote-code-execution-vulnera-83a730c6",
    "title": "Microsoft PowerPoint Remote Code Execution Vulnerability CVE-2026-88207",
    "summary": "Microsoft Office PowerPoint has a remote code execution flaw (CVE-2026-88207) triggered by malicious presentation files. The flaw stems from unsafe parsing of custom XML elements, enabling attackers to run arbitrary code with the user’s privileges, though no exploitation has been seen. Microsoft has released a patch in the latest Office update; users should install it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88207",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-88207"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-powerpoint-remote-code-execution-vulnera",
      "article-83a730c6",
      "83a730c6",
      "microsoft-powerpoint-remote-code-execution-vulnera-743eb0",
      "microsoft-powerpoint-remote-code-execution-vulnerability-cve"
    ]
  },
  {
    "slug": "net-framework-remote-code-execution-vulnerability-30c8957c",
    "title": ".NET Framework Remote Code Execution Vulnerability CVE-2026-70007",
    "summary": ".NET Framework has a remote code execution flaw (CVE-2026-70007) triggered by malicious assemblies. The flaw stems from improper validation of assembly metadata, enabling attackers to run arbitrary code with the application’s privileges, though no exploitation has been seen. Microsoft has issued a patch in the latest .NET update; administrators should install it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70007",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-70007"
    ],
    "additionalSources": [],
    "aliases": [
      "net-framework-remote-code-execution-vulnerability",
      "article-30c8957c",
      "30c8957c",
      "net-framework-remote-code-execution-vulnerability-745071",
      "net-framework-remote-code-execution-vulnerability-cve-2026-7"
    ]
  },
  {
    "slug": "microsoft-updates-acknowledgement-for-excel-rce-vu-43d73606",
    "title": "Microsoft Updates Acknowledgement for Excel RCE Vulnerability CVE-2026-97756",
    "summary": "Microsoft released an informational update regarding a remote code execution vulnerability impacting Microsoft Office Excel. Tracked as CVE-2026-97756, the security flaw allows potential attackers to execute arbitrary code on targeted systems through crafted spreadsheet files. Microsoft updated the advisory acknowledgements while maintaining existing patch guidance and recommended defensive updates for enterprise environments.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97756",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-97756"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-acknowledgement-for-excel-rce-vu",
      "article-43d73606",
      "43d73606",
      "microsoft-updates-acknowledgement-for-excel-rce-vu-7430f9",
      "microsoft-updates-acknowledgement-for-excel-rce-vulnerabilit"
    ]
  },
  {
    "slug": "microsoft-updates-cve-2026-70035-acknowledgement-o-7a5d6c2c",
    "title": "Microsoft Updates CVE-2026-70035 Acknowledgement Only",
    "summary": "Microsoft updated the acknowledgement for CVE-2026-70035, a .NET Framework remote code execution vulnerability, with no code changes. The informational change does not alter the vulnerability's severity, exploitability, or affected versions. Administrators should verify existing mitigations remain applied, as no new patch or workaround accompanies this acknowledgement update.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70035",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-70035"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-cve-2026-70035-acknowledgement-o",
      "article-7a5d6c2c",
      "7a5d6c2c",
      "microsoft-updates-cve-2026-70035-acknowledgement-o-745071",
      "microsoft-updates-cve-2026-70035-acknowledgement-only"
    ]
  },
  {
    "slug": "microsoft-excel-rce-vulnerability-cve-2026-118302-cd3b1070",
    "title": "Microsoft Excel RCE Vulnerability CVE-2026-118302",
    "summary": "CVE-2026-118302 enables remote code execution in Microsoft Office Excel through a flaw in the application. The vulnerability permits unauthenticated attackers to run arbitrary code on affected machines, posing a high risk to enterprise environments. Microsoft released an informational acknowledgement; no patch is currently available, and users should monitor for future updates.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118302",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-118302"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-excel-rce-vulnerability-cve-2026-118302",
      "article-cd3b1070",
      "cd3b1070",
      "microsoft-excel-rce-vulnerability-cve-2026-118302-1fe91c"
    ]
  },
  {
    "slug": "microsoft-outlook-rce-vulnerability-cve-2026-97749-4811b074",
    "title": "Microsoft Outlook RCE Vulnerability CVE-2026-97749",
    "summary": "CVE-2026-97749 enables remote code execution in Microsoft Office Outlook through a flaw in the application. The vulnerability permits unauthenticated attackers to run arbitrary code on affected machines, posing a high risk to enterprise environments. Microsoft released an informational acknowledgement; no patch is currently available, and users should monitor for future updates.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97749",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-97749"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-outlook-rce-vulnerability-cve-2026-97749",
      "article-4811b074",
      "4811b074",
      "microsoft-outlook-rce-vulnerability-cve-2026-97749-7430f9"
    ]
  },
  {
    "slug": "microsoft-excel-rce-vulnerability-cve-2026-97761-24efe064",
    "title": "Microsoft Excel RCE Vulnerability CVE-2026-97761",
    "summary": "CVE-2026-97761 enables remote code execution in Microsoft Office Excel through a flaw in the application. The vulnerability permits unauthenticated attackers to run arbitrary code on affected machines, posing a high risk to enterprise environments. Microsoft released an informational acknowledgement; no patch is currently available, and users should monitor for future updates.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97761",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-97761"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-excel-rce-vulnerability-cve-2026-97761",
      "article-24efe064",
      "24efe064",
      "microsoft-excel-rce-vulnerability-cve-2026-97761-7430f9"
    ]
  },
  {
    "slug": "microsoft-updates-excel-rce-vulnerability-acknowle-16c2e96e",
    "title": "Microsoft Updates Excel RCE Vulnerability Acknowledgement",
    "summary": "Microsoft updated an acknowledgement for CVE-2026-97780, a remote code execution vulnerability in Office Excel. The MSRC entry describes the change as informational only and provides no new technical details, exploitability status, or severity score. Security teams should track the advisory for future updates and apply Excel patches when Microsoft publishes remediation guidance.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-97780",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-97780"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-excel-rce-vulnerability-acknowle",
      "article-16c2e96e",
      "16c2e96e",
      "microsoft-updates-excel-rce-vulnerability-acknowle-7430f9",
      "microsoft-updates-excel-rce-vulnerability-acknowledgement"
    ]
  },
  {
    "slug": "microsoft-acknowledges-vs-code-rce-vulnerability-08b4926a",
    "title": "Microsoft Acknowledges VS Code RCE Vulnerability",
    "summary": "Microsoft acknowledges CVE-2026-69370, a remote code execution flaw in Visual Studio Code product. The vulnerability permits arbitrary code execution via crafted input, but no active exploitation has been reported in the product. Microsoft has issued an informational update; users should await official patch guidance in the product for all users.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-69370",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-69370"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-vs-code-rce-vulnerability",
      "article-08b4926a",
      "08b4926a",
      "microsoft-acknowledges-vs-code-rce-vulnerability-745a66"
    ]
  },
  {
    "slug": "microsoft-acknowledges-ppp-eap-tls-rce-flaw-64a8a31b",
    "title": "Microsoft Acknowledges PPP EAP-TLS RCE Flaw",
    "summary": "Microsoft acknowledges CVE-2026-84015, a remote code execution flaw in the PPP EAP-TLS protocol. The vulnerability allows attackers to execute arbitrary code via crafted EAP-TLS messages, but no active exploitation has been reported. Microsoft has issued an informational update; users should await official patch guidance for all affected systems in the product.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-84015",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-84015"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-ppp-eap-tls-rce-flaw",
      "article-64a8a31b",
      "64a8a31b",
      "microsoft-acknowledges-ppp-eap-tls-rce-flaw-744088"
    ]
  },
  {
    "slug": "microsoft-acknowledges-net-rce-vulnerability-a85d6c3e",
    "title": "Microsoft Acknowledges .NET RCE Vulnerability",
    "summary": "Microsoft acknowledges CVE-2026-70174, a remote code execution flaw in the .NET framework. The vulnerability permits arbitrary code execution via crafted .NET payloads, but no active exploitation has been reported. Microsoft has issued an informational update; users should await official patch guidance for all affected systems in the product for all users.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70174",
    "publishedAt": "2026-11-19T16:00:00.000Z",
    "cves": [
      "CVE-2026-70174"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-net-rce-vulnerability",
      "article-a85d6c3e",
      "a85d6c3e",
      "microsoft-acknowledges-net-rce-vulnerability-74506d"
    ]
  },
  {
    "slug": "php-patches-seven-critical-rce-vulnerabilities-4dc7c84c",
    "title": "PHP Patches Seven Critical RCE Vulnerabilities",
    "summary": "PHP patched seven critical RCE flaws that could let attackers crash the worker process and execute code with its privileges. The bugs stem from unchecked input handling in the PHP worker, enabling arbitrary code execution without authentication and compromising the application. All affected PHP releases now include the fixes; administrators should apply the updates immediately to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/php-patches-seven-critical-rce-vulnerabilities/",
    "publishedAt": "2026-11-19T15:54:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php-patches-seven-critical-rce-vulnerabilities",
      "article-4dc7c84c",
      "4dc7c84c",
      "php-patches-seven-critical-rce-vulnerabilities-151857"
    ]
  },
  {
    "slug": "linux-kernel-vulnerabilities-corrected-in-usn-9175-c30d5d3c",
    "title": "Linux Kernel Vulnerabilities Corrected in USN-9175-1",
    "summary": "The USN-9175-1 notice details multiple Linux kernel vulnerabilities that could allow attackers to compromise affected systems. The flaws affect device drivers, architecture modules, and cryptographic APIs, stemming from improper handling of privileged operations and enabling privilege escalation or denial of service. Kernel maintainers released patches; administrators should update to the latest kernel to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9175-1",
    "publishedAt": "2026-11-19T15:43:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-vulnerabilities-corrected-in-usn-9175",
      "article-c30d5d3c",
      "c30d5d3c",
      "linux-kernel-vulnerabilities-corrected-in-usn-9175-7e7862",
      "linux-kernel-vulnerabilities-corrected-in-usn-9175-1"
    ]
  },
  {
    "slug": "openvpn-flaw-cve-2026-121720-impacts-versions-thro-bd9d93e3",
    "title": "OpenVPN Flaw CVE-2026-121720 Impacts Versions Through 2.7.8",
    "summary": "The Canadian Centre for Cyber Security issued a security advisory regarding a vulnerability affecting OpenVPN installations up to version 2.7.8. Identified as CVE-2026-121720, the flaw poses operational risks to virtual private network infrastructure supporting enterprise access. System administrators are encouraged to review official advisory documentation and deploy vendor-provided security patches immediately to mitigate exposure.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/openvpn-security-advisory-av26-1179",
    "publishedAt": "2026-11-19T15:39:51.000Z",
    "cves": [
      "CVE-2026-121720"
    ],
    "additionalSources": [],
    "aliases": [
      "openvpn-flaw-cve-2026-121720-impacts-versions-thro",
      "article-bd9d93e3",
      "bd9d93e3",
      "openvpn-flaw-cve-2026-121720-impacts-versions-thro-57de18",
      "openvpn-flaw-cve-2026-121720-impacts-versions-through-2-7-8"
    ]
  },
  {
    "slug": "f5-issues-advisory-for-multiple-big-ip-vulnerabili-e90fc272",
    "title": "F5 Issues Advisory for Multiple BIG-IP Vulnerabilities",
    "summary": "F5 released advisory AV26-1178 exposing multiple vulnerabilities in BIG-IP, APM, SSL Orchestrator, PEM, CNF, and Next for Kubernetes versions up to 21.1.0. The flaws allow remote attackers to execute arbitrary code via malformed configuration data, with CVSS scores up to 9.8, and are documented.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/f5-security-advisory-av26-1178",
    "publishedAt": "2026-11-19T15:33:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "f5-issues-advisory-for-multiple-big-ip-vulnerabili",
      "article-e90fc272",
      "e90fc272",
      "f5-issues-advisory-for-multiple-big-ip-vulnerabili-3f3de0",
      "f5-issues-advisory-for-multiple-big-ip-vulnerabilities"
    ]
  },
  {
    "slug": "php-8-6-released-with-updated-session-security-def-bbc1c50c",
    "title": "PHP 8.6 Released With Updated Session Security Defaults",
    "summary": "PHP 8.6 has been released, introducing developer functionality alongside modified configuration defaults for session management. The release enforces strict session mode and HTTP-only cookies, sets SameSite to Lax, and deprecates incomplete custom session handlers. Organizations relying on legacy settings should test application login flows to preserve compatibility prior to deployment.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/php-8-6-released/",
    "publishedAt": "2026-11-19T15:22:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php-8-6-released-with-updated-session-security-def",
      "article-bbc1c50c",
      "bbc1c50c",
      "php-8-6-released-with-updated-session-security-def-4ffd81",
      "php-8-6-released-with-updated-session-security-defaults"
    ]
  },
  {
    "slug": "php-releases-patch-for-7-critical-rce-flaws-92b2b9de",
    "title": "PHP Releases Patch for 7 Critical RCE Flaws",
    "summary": "PHP Foundation released a patch for seven critical flaws that could allow remote code execution on affected deployments. The most severe flaw, CVE-2026-115560, scores CVSS 9.2 and stems from improper input validation that permits arbitrary code execution and file modification. All supported PHP versions have the update available; administrators should apply the patch immediately to mitigate exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/php-fixes-7-critical-flaws-including.html",
    "publishedAt": "2026-11-19T15:18:07.000Z",
    "cves": [
      "CVE-2026-115560"
    ],
    "additionalSources": [],
    "aliases": [
      "php-releases-patch-for-7-critical-rce-flaws",
      "article-92b2b9de",
      "92b2b9de",
      "php-releases-patch-for-7-critical-rce-flaws-56cd6d"
    ]
  },
  {
    "slug": "european-commission-confirms-cyberattack-says-hack-d8c629c0",
    "title": "European Commission confirms cyberattack, says hackers used AI tool",
    "summary": "POLITICO had reported CERT-EU had identified the attackers’ use of ARTEX, an open-source AI hacking platform that the FBI last week warned was being used both by criminals and state-sponsored groups.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/european-commission-confirms-cyberattack-using-ai",
    "publishedAt": "2026-11-19T15:15:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "european-commission-confirms-cyberattack-says-hack",
      "article-d8c629c0",
      "d8c629c0",
      "european-commission-confirms-cyberattack-says-hack-6cd590",
      "european-commission-confirms-cyberattack-says-hackers-used-a"
    ]
  },
  {
    "slug": "linux-kernel-vulnerabilities-addressed-in-usn-9173-c92b0942",
    "title": "Linux Kernel Vulnerabilities Addressed in USN-9173-1",
    "summary": "The USN-9173-1 notice reports several Linux kernel vulnerabilities that could let attackers compromise affected systems. These defects involve device drivers, architecture modules, and cryptographic APIs, arising from improper handling of privileged operations and potentially enabling privilege escalation or denial of service. Kernel maintainers have issued patches; administrators should update to the latest kernel to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9173-1",
    "publishedAt": "2026-11-19T15:13:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-vulnerabilities-addressed-in-usn-9173",
      "article-c92b0942",
      "c92b0942",
      "linux-kernel-vulnerabilities-addressed-in-usn-9173-7e786a",
      "linux-kernel-vulnerabilities-addressed-in-usn-9173-1"
    ]
  },
  {
    "slug": "linux-kernel-vulnerabilities-affect-multiple-subsy-0d52dedf",
    "title": "Linux Kernel Vulnerabilities Affect Multiple Subsystems",
    "summary": "A set of kernel flaws discovered in the Linux kernel could allow attackers to compromise affected systems. The vulnerabilities span numerous subsystems, including device drivers, architecture modules, and cryptographic components, potentially enabling privilege escalation or denial of service. Kernel maintainers have released an update correcting these issues; administrators should apply the patch promptly to secure their environments.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9174-1",
    "publishedAt": "2026-11-19T15:12:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-vulnerabilities-affect-multiple-subsy",
      "article-0d52dedf",
      "0d52dedf",
      "linux-kernel-vulnerabilities-affect-multiple-subsy-7e7866",
      "linux-kernel-vulnerabilities-affect-multiple-subsystems"
    ]
  },
  {
    "slug": "linux-kernel-fips-subsystem-vulnerabilities-fixed-5ff570dd",
    "title": "Linux Kernel FIPS Subsystem Vulnerabilities Fixed in USN-9168-2",
    "summary": "USN-9168-2 fixes multiple Linux kernel flaws that could let attackers compromise systems via subsystems such as stream parsing, ARM64, S390, x86, and various drivers. No public exploits are known, but the vulnerabilities could enable privilege escalation or kernel-level code execution, representing a medium-severity risk. Kernel maintainers released patches; administrators should update to the latest kernel to mitigate the issues.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9168-2",
    "publishedAt": "2026-11-19T15:12:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-fips-subsystem-vulnerabilities-fixed",
      "article-5ff570dd",
      "5ff570dd",
      "linux-kernel-fips-subsystem-vulnerabilities-fixed-7e78cb",
      "linux-kernel-fips-subsystem-vulnerabilities-fixed-in-usn-916"
    ]
  },
  {
    "slug": "ubuntu-fixes-kernel-vulnerabilities-in-aws-fips-cc733f24",
    "title": "Ubuntu Fixes Kernel Vulnerabilities in AWS FIPS",
    "summary": "Ubuntu Security Notices reports CVE-2026-64564, CVE-2026-98432, and CVE-2026-99999, kernel vulnerabilities affecting AWS FIPS-enabled Linux systems. The flaws reside in IPv4 networking, Ethernet bridge, Netfilter, SCTP, and XFRM subsystems, potentially enabling remote code execution or privilege escalation. Ubuntu has released an update correcting these defects; administrators should apply the latest kernel patch to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9170-2",
    "publishedAt": "2026-11-19T15:12:06.000Z",
    "cves": [
      "CVE-2026-64564",
      "CVE-2026-98432",
      "CVE-2026-99999"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-fixes-kernel-vulnerabilities-in-aws-fips",
      "article-cc733f24",
      "cc733f24",
      "ubuntu-fixes-kernel-vulnerabilities-in-aws-fips-7e7875"
    ]
  },
  {
    "slug": "linux-kernel-oracle-vulnerabilities-cve-2026-98432-4a8ec64b",
    "title": "Linux Kernel Oracle Vulnerabilities CVE-2026-98432, CVE-2026-99999 Fixed",
    "summary": "USN-9171-2 addresses Linux kernel flaws in IPv4 networking, Ethernet bridge, Netfilter, and XFRM that could allow attackers to compromise systems. The advisory lists CVE-2026-98432 and CVE-2026-99999; no public exploits are reported, but the issues could enable privilege escalation or kernel code execution. Kernel maintainers have released patches; administrators should update to the latest kernel version to mitigate the vulnerabilities.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9171-2",
    "publishedAt": "2026-11-19T15:12:06.000Z",
    "cves": [
      "CVE-2026-98432",
      "CVE-2026-99999"
    ],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-oracle-vulnerabilities-cve-2026-98432",
      "article-4a8ec64b",
      "4a8ec64b",
      "linux-kernel-oracle-vulnerabilities-cve-2026-98432-7e7871",
      "linux-kernel-oracle-vulnerabilities-cve-2026-98432-cve-2026-"
    ]
  },
  {
    "slug": "vmware-vcenter-auth-bypass-vulnerability-fixed-4578142e",
    "title": "VMware vCenter Auth Bypass Vulnerability Fixed",
    "summary": "A critical flaw in VMware vCenter, scoring CVSS 9.8, allows network attackers to bypass authentication and gain unauthorized access to the management console. The vulnerability exploits a flaw in the authentication mechanism, enabling attackers to control ESX hosts and virtual machines without credentials. All supported vCenter branches have patched releases; administrators should update immediately and verify authentication logs for anomalies.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/critical-vmware-vcenter-flaw-cvss-98.html",
    "publishedAt": "2026-11-19T15:11:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vmware-vcenter-auth-bypass-vulnerability-fixed",
      "article-4578142e",
      "4578142e",
      "vmware-vcenter-auth-bypass-vulnerability-fixed-70121b"
    ]
  },
  {
    "slug": "criminal-ip-launches-aitem-exposure-management-pla-343bfdd5",
    "title": "Criminal IP Launches AITEM Exposure Management Platform",
    "summary": "Criminal IP, developed by AI SPERA, launched Criminal IP AITEM on November 18, 2026, combining internet-facing asset discovery with AI-assisted investigation. The platform adds public-source exposure analysis and dark web monitoring as an evolution of Criminal IP ASM. Security teams can use AITEM to connect asset discovery with AI-powered threat exposure management.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/criminal-ip-launches-aitem-to-connect-asset-discovery-with-ai-powered-exposure-management/",
    "publishedAt": "2026-11-19T15:03:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "criminal-ip-launches-aitem-exposure-management-pla",
      "article-343bfdd5",
      "343bfdd5",
      "criminal-ip-launches-aitem-exposure-management-pla-5b028b",
      "criminal-ip-launches-aitem-exposure-management-platform"
    ]
  },
  {
    "slug": "ransomware-warning-signs-before-encryption-78600f48",
    "title": "Ransomware Warning Signs Before Encryption",
    "summary": "Acronis identifies five early warning signs of ransomware activity that occur before encryption or data theft. These indicators include credential theft, lateral movement, and attempts to disable security controls, allowing attackers to establish persistence. Security teams should monitor for these behaviors, enforce least-privilege access, and implement continuous monitoring to detect and contain intrusions early.",
    "category": "Ransomware",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/five-warning-signs-of-ransomware-breach-before-encryption-or-data-theft/",
    "publishedAt": "2026-11-19T15:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ransomware-warning-signs-before-encryption",
      "article-78600f48",
      "78600f48",
      "ransomware-warning-signs-before-encryption-1b637e"
    ]
  },
  {
    "slug": "nginx2root-vulnerabilities-enable-remote-code-exec-6b546d38",
    "title": "NGINX2Root Vulnerabilities Enable Remote Code Execution",
    "summary": "Two critical NGINX vulnerabilities, collectively known as nginx2root, allow unauthenticated attackers to execute code remotely on vulnerable web servers. Researchers chained the flaws with a Linux kernel bug to elevate privileges to root, demonstrating a full system compromise. All supported NGINX releases have patches; administrators should apply the update and monitor for kernel exploitation attempts.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/critical-nginx-nginx2root-bugs-let-attackers-hijack-servers/",
    "publishedAt": "2026-11-19T14:57:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nginx2root-vulnerabilities-enable-remote-code-exec",
      "article-6b546d38",
      "6b546d38",
      "nginx2root-vulnerabilities-enable-remote-code-exec-a431b9",
      "nginx2root-vulnerabilities-enable-remote-code-execution"
    ]
  },
  {
    "slug": "php-warns-of-critical-security-flaws-affecting-all-0ac633db",
    "title": "PHP Warns of Critical Security Flaws Affecting All Supported Versions, Urges Users to Update",
    "summary": "The PHP security team has warned of vulnerabilities across all branches covered by its November 19, 2026 security update, with the most severe issues rated critical. The team urged website operators and hosting providers to update promptly. The critical flaws require non-default settings or uncommon setups, so not every installation faces the same risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/php-8-released/",
    "publishedAt": "2026-11-19T14:42:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php-warns-of-critical-security-flaws-affecting-all",
      "article-0ac633db",
      "0ac633db",
      "php-warns-of-critical-security-flaws-affecting-all-2864ff",
      "php-warns-of-critical-security-flaws-affecting-all-supported"
    ]
  },
  {
    "slug": "russian-spies-turn-one-cloud-breach-into-a-steppin-f900f7fe",
    "title": "Russian spies turn one cloud breach into a stepping stone for the next",
    "summary": "A Russian cyberespionage group is posing as employees of organizations it has already breached to phish new targets, Google Threat Intelligence Group (GTIG) found. Google tracks the group as COLD RELIC (also known as Star Blizzard, Callisto and Gossamer Bear), and the US Department of Justice has assessed that it operates within Russia’s Federal Security Service (FSB).",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/russian-spies-impersonation-cloud-breach/",
    "publishedAt": "2026-11-19T14:42:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russian-spies-turn-one-cloud-breach-into-a-steppin",
      "article-f900f7fe",
      "f900f7fe",
      "russian-spies-turn-one-cloud-breach-into-a-steppin-9bbd69",
      "russian-spies-turn-one-cloud-breach-into-a-stepping-stone-fo"
    ]
  },
  {
    "slug": "drupal-fixes-installer-flaw-enabling-site-takeover-cd342b87",
    "title": "Drupal Fixes Installer Flaw Enabling Site Takeover",
    "summary": "Drupal core contains a critical installer flaw that permits unauthenticated attackers to trigger a site reinstallation and take over the site. The vulnerability requires specific configuration conditions and can lead to remote code execution if the installer is invoked without proper safeguards. All supported Drupal branches have patched releases; site administrators should apply the update and verify installer access controls.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/drupal-patches-critical-installer-flaw.html",
    "publishedAt": "2026-11-19T14:33:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "drupal-fixes-installer-flaw-enabling-site-takeover",
      "article-cd342b87",
      "cd342b87",
      "drupal-fixes-installer-flaw-enabling-site-takeover-4696ac"
    ]
  },
  {
    "slug": "nvidia-denies-gentlemen-ransomware-claim-a06839da",
    "title": "Nvidia Denies Gentlemen Ransomware Claim",
    "summary": "Gentlemen ransomware group listed Nvidia as a victim, alleging a compromise of its systems. No evidence of exploitation or data exfiltration was found, and the claim lacks supporting proof of a vulnerability or breach. Nvidia confirmed no compromise and urged stakeholders to monitor for potential phishing or credential theft attempts.",
    "category": "Breach",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/nvidia-responds-to-gentlemen-ransomware-claim/",
    "publishedAt": "2026-11-19T14:17:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nvidia-denies-gentlemen-ransomware-claim",
      "article-a06839da",
      "a06839da",
      "nvidia-denies-gentlemen-ransomware-claim-15a41b"
    ]
  },
  {
    "slug": "meta-ai-agent-muse-reads-displayed-encrypted-messa-039586a1",
    "title": "Meta AI Agent Muse Reads Displayed Encrypted Message Text",
    "summary": "Meta AI agent Muse read Signal message text on Android phones and Macs without directly connecting to the encrypted messaging app, Reuters reported. The investigation found Muse could use Android notifications and macOS permissions to view text already displayed on a device, and tests did not show Signal encryption was broken.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/muse-reads-encrypted-messages/",
    "publishedAt": "2026-11-19T14:11:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-ai-agent-muse-reads-displayed-encrypted-messa",
      "article-039586a1",
      "039586a1",
      "meta-ai-agent-muse-reads-displayed-encrypted-messa-2b2339",
      "meta-ai-agent-muse-reads-displayed-encrypted-message-text"
    ]
  },
  {
    "slug": "badbox-3-0-malware-infects-android-tv-boxes-to-gen-106873f0",
    "title": "BADBOX 3.0 Malware Infects Android TV Boxes to Generate 40 Billion Fraudulent Ad Requests Daily",
    "summary": "Low-cost Android streaming boxes helped power an advertising fraud operation that generated roughly 40 billion bid requests a day at its peak. Known as BADBOX 3.0, the campaign used infected devices to play video ads outside the visible screen while making the traffic look as though it came from legitimate streaming apps.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/badbox-3-0-malware/",
    "publishedAt": "2026-11-19T14:05:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "badbox-3-0-malware-infects-android-tv-boxes-to-gen",
      "article-106873f0",
      "106873f0",
      "badbox-3-0-malware-infects-android-tv-boxes-to-gen-d73be1",
      "badbox-3-0-malware-infects-android-tv-boxes-to-generate-40-b"
    ]
  },
  {
    "slug": "holiday-bot-fraud-strains-small-business-security-62227aa7",
    "title": "Holiday Bot Fraud Strains Small Business Security",
    "summary": "Bot-driven fraud and holiday social engineering attacks target small businesses during the holiday season. These campaigns exploit automated phishing, credential harvesting, and social engineering tactics, extending over weeks and overwhelming security teams. Security teams should deploy comprehensive multi-factor authentication, daily email filtering, and employee training to mitigate the prolonged threat.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/why-holiday-security-cant-wait-black-friday",
    "publishedAt": "2026-11-19T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "holiday-bot-fraud-strains-small-business-security",
      "article-62227aa7",
      "62227aa7",
      "holiday-bot-fraud-strains-small-business-security-2fe4c2"
    ]
  },
  {
    "slug": "election-day-cyberattacks-surge-across-1-400-sites-8c085251",
    "title": "Election Day Cyberattacks Surge Across 1,400 Sites",
    "summary": "During the 2026 U.S. midterm elections, election-related sites experienced increased traffic and cyberattacks. Cloudflare data from over 1,400 protected sites shows spikes in phishing, credential stuffing, and distributed denial-of-service attempts targeting voter information portals. Operators should enforce stricter rate limiting, deploy WAF rules, and monitor for anomalous traffic patterns to defend against election-day threats.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/internet-traffic-2026-us-election/",
    "publishedAt": "2026-11-19T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "election-day-cyberattacks-surge-across-1-400-sites",
      "article-8c085251",
      "8c085251",
      "election-day-cyberattacks-surge-across-1-400-sites-5d027c"
    ]
  },
  {
    "slug": "timeroasting-detection-via-packet-size-analysis-ef3720c9",
    "title": "Timeroasting Detection via Packet Size Analysis",
    "summary": "Timeroasting, a stealthy side-channel exfiltration method, leaves no authentication logs and targets systems using MS-SNTP. The technique manipulates the two MS-SNTP authenticator forms to create timing variations that bypass standard logging, enabling covert data transfer. By reversing the authenticator logic, the author builds detection that monitors packet size patterns, providing a defensive measure against timeroasting attacks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/detecting-timeroasting",
    "publishedAt": "2026-11-19T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "timeroasting-detection-via-packet-size-analysis",
      "article-ef3720c9",
      "ef3720c9",
      "timeroasting-detection-via-packet-size-analysis-7f61dd"
    ]
  },
  {
    "slug": "armory-castle-exploits-vsphere-f240c9be",
    "title": "ARMORY CASTLE Exploits vSphere",
    "summary": "Written by: Jayson Frost, Bryce Greathouse, Dhanesh Kizhakkinan, John Palmisano, Steve Rasch, Daniel Sislo, John Wolfram Introduction On Oct. 15, 2026, Mandiant and Google Threat Intelligence Group (GTIG) published a blog post detailing recent activity in which the suspected PRC-nexus threat actor ARMORY CASTLE (formerly tracked as UNC5221) exploited CVE-2026-102764, a zero-day vulnerability in BeyondTrust Remote Support, which was patched in BT26-05 .",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Google Threat Intelligence",
    "sourceUrl": "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-vsphere/",
    "publishedAt": "2026-11-19T14:00:00.000Z",
    "cves": [
      "CVE-2026-102764",
      "CVE-2026-123890",
      "CVE-2026-59309",
      "CVE-2025-22457"
    ],
    "additionalSources": [],
    "aliases": [
      "armory-castle-exploits-vsphere",
      "article-f240c9be",
      "f240c9be",
      "armory-castle-exploits-vsphere-32bd79"
    ]
  },
  {
    "slug": "russian-operation-steals-bank-irs-credentials-from-44828728",
    "title": "Russian Operation Steals Bank, IRS Credentials from PCs",
    "summary": "A Russian-speaking cybercrime group has stolen login credentials for US banks, the IRS, and Social Security from infected Windows PCs. Victims were ordinary users; many employed password managers and MFA, yet attackers still captured credentials through malware, without breaching any institution. Defenders should harden endpoint security, enforce multi-factor authentication, and monitor for credential-stealing malware to prevent similar thefts.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-steal-us-bank/",
    "publishedAt": "2026-11-19T13:43:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russian-operation-steals-bank-irs-credentials-from",
      "article-44828728",
      "44828728",
      "russian-operation-steals-bank-irs-credentials-from-3229bb",
      "russian-operation-steals-bank-irs-credentials-from-pcs"
    ]
  },
  {
    "slug": "ubuntu-24-04-kernel-update-addresses-critical-ipv4-c0845476",
    "title": "Ubuntu 24.04 Kernel Update Addresses Critical IPv4, Bridge, Netfilter Vulnerabilities",
    "summary": "Ubuntu 24.04 users must install the latest kernel update to patch critical vulnerabilities affecting IPv4 networking, Ethernet bridge, Netfilter, and XFRM subsystems. The flaws, CVE-2026-98432 and CVE-2026-99999, could enable privilege escalation or denial of service if exploited by attackers. Immediate kernel upgrade is recommended to mitigate potential compromise and maintain system security.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9172-1",
    "publishedAt": "2026-11-19T13:43:11.000Z",
    "cves": [
      "CVE-2026-98432",
      "CVE-2026-99999"
    ],
    "additionalSources": [
      {
        "source": "Ubuntu Security Notices",
        "sourceUrl": "https://ubuntu.com/security/notices/USN-9171-1"
      }
    ],
    "aliases": [
      "ubuntu-24-04-kernel-update-addresses-critical-ipv4",
      "article-c0845476",
      "c0845476",
      "ubuntu-24-04-kernel-update-addresses-critical-ipv4-7e786e",
      "ubuntu-24-04-kernel-update-addresses-critical-ipv4-bridge-ne"
    ]
  },
  {
    "slug": "ubuntu-patches-kernel-vulnerabilities-in-ipv4-brid-2e68255b",
    "title": "Ubuntu Patches Kernel Vulnerabilities in IPv4, Bridge, Netfilter, SCTP",
    "summary": "Ubuntu 24.04 USN-9170-1 fixes Linux kernel flaws affecting IPv4 networking, Ethernet bridge, Netfilter, SCTP, and XFRM subsystems. The vulnerabilities, CVE-2026-64564, CVE-2026-98432, and CVE-2026-99999, could enable privilege escalation or denial of service if exploited by an attacker. Apply the kernel update immediately to patch the affected subsystems and prevent potential compromise.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9170-1",
    "publishedAt": "2026-11-19T13:42:53.000Z",
    "cves": [
      "CVE-2026-64564",
      "CVE-2026-98432",
      "CVE-2026-99999"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-patches-kernel-vulnerabilities-in-ipv4-brid",
      "article-2e68255b",
      "2e68255b",
      "ubuntu-patches-kernel-vulnerabilities-in-ipv4-brid-7e7875",
      "ubuntu-patches-kernel-vulnerabilities-in-ipv4-bridge-netfilt"
    ]
  },
  {
    "slug": "ukraine-arrests-ransomware-network-extorting-40m-a5f80651",
    "title": "Ukraine Arrests Ransomware Network Extorting $40M",
    "summary": "Ukrainian authorities arrested four suspects linked to an international ransomware network that extorted over $40 million from U.S. oil and healthcare firms. The group used credential theft and encrypted data to demand ransom, targeting critical infrastructure and causing significant financial loss. Law enforcement seized ransom payments and seized infrastructure, and the operators face prosecution under Ukrainian cybercrime statutes.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/ukraine-ransomware-arrests-cyber",
    "publishedAt": "2026-11-19T13:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ukraine-arrests-ransomware-network-extorting-40m",
      "article-a5f80651",
      "a5f80651",
      "ukraine-arrests-ransomware-network-extorting-40m-6ebab0"
    ]
  },
  {
    "slug": "gatekeeper-asymmetry-makes-llms-more-vulnerable-7a2b859f",
    "title": "Gatekeeper Asymmetry Makes LLMs More Vulnerable",
    "summary": "The paper introduces gatekeeper asymmetry doom, asserting that when input vetting is weaker than processing, vulnerability is inevitable. Authors illustrate the principle with examples across security domains, showing limited input validation can cause catastrophic failures in powerful LLMs. The study urges stronger gatekeeping and hard-problem reliance to mitigate asymmetry in advanced AI systems.",
    "category": "General",
    "severity": "LOW",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/30-years-of-gatekeeper-asymmetry-doom-the-paradox-that-makes-powerful-llms-more-vulnerable/",
    "publishedAt": "2026-11-19T13:19:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gatekeeper-asymmetry-makes-llms-more-vulnerable",
      "article-7a2b859f",
      "7a2b859f",
      "gatekeeper-asymmetry-makes-llms-more-vulnerable-4ced8c"
    ]
  },
  {
    "slug": "cisco-expressway-devices-hacked-after-poc-release-3751e940",
    "title": "Cisco Expressway Devices Hacked After PoC Release",
    "summary": "Attackers compromised clustered Cisco Expressway devices at a Russian organization shortly after a public proof-of-concept was released. The flaw allowed authenticated remote code execution via malformed SIP messages, enabling attackers to gain privileged access and prepare lateral movement tools. Cisco issued a patch in the following security advisory, and security teams should update firmware and disable unused SIP services.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/hackers-exploit-cisco-expressway-vulnerability-soon-after-poc-release/",
    "publishedAt": "2026-11-19T13:12:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-expressway-devices-hacked-after-poc-release",
      "article-3751e940",
      "3751e940",
      "cisco-expressway-devices-hacked-after-poc-release-512afc"
    ]
  },
  {
    "slug": "drupal-fixes-critical-remote-code-execution-flaw-8a5e1fa6",
    "title": "Drupal Fixes Critical Remote Code Execution Flaw",
    "summary": "Drupal Security Team patched a critical remote code execution flaw that could let attackers seize control of vulnerable sites. The vulnerability, a buffer overflow in a core module, carries a CVSS score of 9.8 and has a publicly available proof-of-concept exploit. Administrators must apply the latest Drupal update immediately and confirm the core module is patched to prevent remote takeover.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/drupal-patches-critical-rce-flaw-warns-exploits-may-surface-quickly/",
    "publishedAt": "2026-11-19T13:08:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "drupal-fixes-critical-remote-code-execution-flaw",
      "article-8a5e1fa6",
      "8a5e1fa6",
      "drupal-fixes-critical-remote-code-execution-flaw-4acb1d"
    ]
  },
  {
    "slug": "cisa-warns-hackers-are-actively-exploiting-four-fl-3f05fb63",
    "title": "CISA Warns Hackers Are Actively Exploiting Four Flaws in Synology, LiteLLM, Apache Axis and REDCap",
    "summary": "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) added four flaws to its Known Exploited Vulnerabilities (KEV) catalog on November 18, 2026, after finding evidence that attackers were already exploiting them. The entries cover Synology DiskStation Manager (DSM), BerriAI LiteLLM, Apache Axis and Vanderbilt University’s Research Electronic Data Capture platform, better known as REDCap.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/flaws-in-synology-litellm-apache-axis-and-redcap/",
    "publishedAt": "2026-11-19T13:06:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-warns-hackers-are-actively-exploiting-four-fl",
      "article-3f05fb63",
      "3f05fb63",
      "cisa-warns-hackers-are-actively-exploiting-four-fl-67f111",
      "cisa-warns-hackers-are-actively-exploiting-four-flaws-in-syn"
    ]
  },
  {
    "slug": "microsoft-agent-framework-compromised-by-credentia-10c4e003",
    "title": "Microsoft Agent Framework Compromised by Credential Stealer",
    "summary": "Microsoft’s agent-framework package on PyPI was compromised by malicious releases 1.26.1 and 1.26.2 that steal cloud and CI/CD credentials. The supply-chain intrusion exploited the toolkit’s execution, enabling credential exfiltration without user interaction; detected by StepSecurity, OX Security, and Socket. Microsoft should remove the compromised packages from PyPI, release a clean version, and advise developers to audit installed packages and update.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/microsoft-agent-framework-package-pypi-compromised/",
    "publishedAt": "2026-11-19T12:53:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-agent-framework-compromised-by-credentia",
      "article-10c4e003",
      "10c4e003",
      "microsoft-agent-framework-compromised-by-credentia-2b0fc5",
      "microsoft-agent-framework-compromised-by-credential-stealer"
    ]
  },
  {
    "slug": "chrome-158-fixes-six-critical-flaws-139afb67",
    "title": "Chrome 158 Fixes Six Critical Flaws",
    "summary": "Google released Chrome 158, addressing 204 security issues, including six critical vulnerabilities. Two of the critical flaws were identified using AI-assisted analysis, highlighting the role of machine learning in vulnerability discovery. Users should update to Chrome 158 immediately to mitigate the disclosed vulnerabilities and maintain secure browsing and protect against exploitation.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/bugs/2026/11/chrome-patches-six-critical-flaws-two-found-with-ais-help",
    "publishedAt": "2026-11-19T12:38:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-158-fixes-six-critical-flaws",
      "article-139afb67",
      "139afb67",
      "chrome-158-fixes-six-critical-flaws-745b88"
    ]
  },
  {
    "slug": "microsoft-365-mfa-bypassed-via-device-code-phishin-6ca870f6",
    "title": "Microsoft 365 MFA Bypassed via Device Code Phishing",
    "summary": "Hackers hijacked Microsoft 365 accounts by sending fake payment notices that redirect users to a legitimate Microsoft sign-in page. The attack exploits the device code flow’s lack of MFA enforcement, letting attackers obtain tokens without credential verification. Microsoft recommends disabling device code authentication for sensitive workloads and enforcing MFA; users should verify invoice authenticity before signing in.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/device-code-authentication/",
    "publishedAt": "2026-11-19T12:26:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-365-mfa-bypassed-via-device-code-phishin",
      "article-6ca870f6",
      "6ca870f6",
      "microsoft-365-mfa-bypassed-via-device-code-phishin-1a5b88",
      "microsoft-365-mfa-bypassed-via-device-code-phishing"
    ]
  },
  {
    "slug": "stepsecurity-raises-20m-for-supply-chain-defense-0bdac8bf",
    "title": "StepSecurity Raises $20M for Supply Chain Defense",
    "summary": "StepSecurity announced a $20M funding round to expand its supply chain protection platform. The capital will accelerate development and distribution of its security solutions, targeting supply chain risk mitigation for enterprises and supporting rapid scaling. No immediate patch or vulnerability; the announcement signals investment in future defensive capabilities within the cybersecurity market.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/stepsecurity-secures-20-million-to-expand-supply-chain-protection/",
    "publishedAt": "2026-11-19T12:23:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "stepsecurity-raises-20m-for-supply-chain-defense",
      "article-0bdac8bf",
      "0bdac8bf",
      "stepsecurity-raises-20m-for-supply-chain-defense-3066df"
    ]
  },
  {
    "slug": "apache-roller-axis-flaws-exploited-in-confluence-a-2278081c",
    "title": "Apache Roller, Axis Flaws Exploited in Confluence Attacks",
    "summary": "Attackers have exploited critical vulnerabilities in Apache Roller and Axis, targeting Confluence Data Center deployments. The Axis flaw permits remote code execution through malformed XML, while the Roller issue allows unauthorized file uploads, both with CVSS scores above 8.0. Administrators should apply vendor patches, disable XML processing if possible, and enforce strict file-type validation to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/critical-apache-roller-axis-vulnerabilities-exploited-in-attacks/",
    "publishedAt": "2026-11-19T12:13:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apache-roller-axis-flaws-exploited-in-confluence-a",
      "article-2278081c",
      "2278081c",
      "apache-roller-axis-flaws-exploited-in-confluence-a-ebd020",
      "apache-roller-axis-flaws-exploited-in-confluence-attacks"
    ]
  },
  {
    "slug": "open-weight-ai-governance-gap-and-mitigation-b349f721",
    "title": "Open-Weight AI Governance Gap and Mitigation",
    "summary": "Open-weight AI adoption grows due to lower costs, enhanced data privacy, and increased control. However, many organizations fail to address the associated risks, creating a governance gap that exposes them to data misuse, model bias, and compliance violations. Industry experts recommend establishing risk frameworks, implementing oversight mechanisms, and adopting best-practice guidelines to mitigate potential threats.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/the-governance-gap-in-open-weight-ai-and-what-to-do-about-it/",
    "publishedAt": "2026-11-19T12:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "open-weight-ai-governance-gap-and-mitigation",
      "article-b349f721",
      "b349f721",
      "open-weight-ai-governance-gap-and-mitigation-24678a"
    ]
  },
  {
    "slug": "cve-2026-125132-libumqtt-integer-underflow-exploit-3693d087",
    "title": "CVE-2026-125132: libumqtt Integer Underflow Exploit",
    "summary": "CVE-2026-125132 reveals an integer underflow in libumqtt that can be triggered remotely, per CISA's November 19, 2026 advisory. With a CVSS score of 8.6, the flaw may cause denial of service, memory corruption, or information disclosure in critical infrastructure sectors. No patch exists yet; operators should monitor for updates and apply defensive controls until remediation is available.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-323-03",
    "publishedAt": "2026-11-19T12:00:00.000Z",
    "cves": [
      "CVE-2026-125132"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-125132-libumqtt-integer-underflow-exploit",
      "article-3693d087",
      "3693d087",
      "cve-2026-125132-libumqtt-integer-underflow-exploit-41adfe"
    ]
  },
  {
    "slug": "elecbrakes-brake-control-vulnerabilities-exposed-5fee4a58",
    "title": "Elecbrakes Brake Control Vulnerabilities Exposed",
    "summary": "CVE-2026-124281, CVE-2026-125273, and CVE-2026-96805 allow unauthenticated attackers to control Elecbrakes EB2, VM1, and ELBC2000 firmware, enabling brake manipulation and safety feature disabling. The vulnerabilities stem from missing authentication for critical functions, dangerous method exposure, and an unprotected firmware-update channel, with VM1 scoring CVSS 9.6. Manufacturers issued emergency patches; teams should update firmware immediately and verify integrity to prevent unauthorized updates.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-323-02",
    "publishedAt": "2026-11-19T12:00:00.000Z",
    "cves": [
      "CVE-2026-124281",
      "CVE-2026-125273",
      "CVE-2026-96805"
    ],
    "additionalSources": [],
    "aliases": [
      "elecbrakes-brake-control-vulnerabilities-exposed",
      "article-5fee4a58",
      "5fee4a58",
      "elecbrakes-brake-control-vulnerabilities-exposed-41adfe"
    ]
  },
  {
    "slug": "openplc-runtime-race-condition-allows-unauthentica-307fcd5b",
    "title": "OpenPLC Runtime Race Condition Allows Unauthenticated Admin Creation",
    "summary": "A race condition in Autonomy Logic OpenPLC Runtime versions 4.2.4 and prior can create multiple unauthenticated admin accounts. Tracked as CVE-2026-126088 and rated CVSS 8.1, the flaw lets concurrent requests pass the existence check before any user is committed. Security teams should upgrade affected OpenPLC Runtime deployments and restrict network access to the runtime interface.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-323-01",
    "publishedAt": "2026-11-19T12:00:00.000Z",
    "cves": [
      "CVE-2026-126088"
    ],
    "additionalSources": [],
    "aliases": [
      "openplc-runtime-race-condition-allows-unauthentica",
      "article-307fcd5b",
      "307fcd5b",
      "openplc-runtime-race-condition-allows-unauthentica-41adfe",
      "openplc-runtime-race-condition-allows-unauthenticated-admin-"
    ]
  },
  {
    "slug": "palo-alto-pan-os-exposed-to-php-rce-vulnerabilitie-bee3de34",
    "title": "Palo Alto PAN-OS Exposed to PHP RCE Vulnerabilities",
    "summary": "Palo Alto Networks confirmed attackers exploited two PHP flaws, CVE-2026-109618 and CVE-2026-109619, on PAN-OS interfaces exposed to the internet. Both flaws allow unauthenticated remote code execution on the web server, enabling attackers to run arbitrary code without credentials. Palo Alto released patches; administrators should apply updates immediately and restrict internet exposure of management interfaces.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/everything-is-web-application-including.html",
    "publishedAt": "2026-11-19T11:52:23.000Z",
    "cves": [
      "CVE-2026-109618",
      "CVE-2026-109619"
    ],
    "additionalSources": [],
    "aliases": [
      "palo-alto-pan-os-exposed-to-php-rce-vulnerabilitie",
      "article-bee3de34",
      "bee3de34",
      "palo-alto-pan-os-exposed-to-php-rce-vulnerabilitie-7cae08",
      "palo-alto-pan-os-exposed-to-php-rce-vulnerabilities"
    ]
  },
  {
    "slug": "microsoft-tests-edge-lockdown-mode-disabling-gpu-a-a4704323",
    "title": "Microsoft Tests Edge Lockdown Mode Disabling GPU APIs",
    "summary": "Microsoft is testing an Edge Lockdown Mode that disables WebGL, WebGL2, and WebGPU APIs to shrink the browser attack surface. The feature removes GPU-accelerated rendering paths that could be leveraged for memory corruption or side-channel attacks, preserving core functionality. Microsoft plans to roll out the mode in a future update; security teams should monitor release notes for configuration options.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-tests-new-edge-lockdown-mode-that-disables-gpu-apis/",
    "publishedAt": "2026-11-19T11:46:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-tests-edge-lockdown-mode-disabling-gpu-a",
      "article-a4704323",
      "a4704323",
      "microsoft-tests-edge-lockdown-mode-disabling-gpu-a-5f79b7",
      "microsoft-tests-edge-lockdown-mode-disabling-gpu-apis"
    ]
  },
  {
    "slug": "backbox-linux-10-brings-new-hacking-tools-and-ubun-6d23a266",
    "title": "BackBox Linux 10 brings new hacking tools and Ubuntu 26.04 support",
    "summary": "BackBox Linux is a free, open source penetration testing distribution made by BackBox, a non-profit community project that keeps its own repositories of ethical hacking tools. On November 19 the project released version 10, codenamed Resolute Raccoon. It’s built for compatibility with Ubuntu 26.04 LTS and ships with the Linux 7.0 kernel and the Xfce 4.20 desktop.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/backbox-linux-10-penetration-testing/",
    "publishedAt": "2026-11-19T11:01:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "backbox-linux-10-brings-new-hacking-tools-and-ubun",
      "article-6d23a266",
      "6d23a266",
      "backbox-linux-10-brings-new-hacking-tools-and-ubun-162595",
      "backbox-linux-10-brings-new-hacking-tools-and-ubuntu-26-04-s"
    ]
  },
  {
    "slug": "sonicwall-urges-immediate-replacement-of-gen-6-fir-01c5d095",
    "title": "SonicWall Urges Immediate Replacement of Gen 6 Firewalls",
    "summary": "SonicWall is urging customers to replace Gen 6 and Gen 6.5 firewalls running SonicOS 6.x because the appliances have reached end of support. The company says no further firmware updates or security patches will be issued regardless of severity, leaving internet-facing units exposed. Security teams should remove these devices from the internet edge and migrate to supported hardware immediately.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/sonicwall-gen-6-firewalls-reach-end-of-support/",
    "publishedAt": "2026-11-19T10:44:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sonicwall-urges-immediate-replacement-of-gen-6-fir",
      "article-01c5d095",
      "01c5d095",
      "sonicwall-urges-immediate-replacement-of-gen-6-fir-492ef3",
      "sonicwall-urges-immediate-replacement-of-gen-6-firewalls"
    ]
  },
  {
    "slug": "n-able-breach-management-access-disabled-194f7fa9",
    "title": "N-Able Breach: Management Access Disabled",
    "summary": "N-Able confirmed unauthorized access to a single server in its Mail Assure and SpamExperts hosted cloud, targeting interfaces across the Americas, Europe, and Asia-Pacific. Email filtering remained operational, allowing customers to send and receive mail, while administrators lost access and N-Able disabled portals pending investigation.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/n-able-confirms-server-breach/",
    "publishedAt": "2026-11-19T10:44:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-breach-management-access-disabled",
      "article-194f7fa9",
      "194f7fa9",
      "n-able-breach-management-access-disabled-7c0bb7"
    ]
  },
  {
    "slug": "splunk-releases-patches-for-140-vulnerabilities-1a0c32e8",
    "title": "Splunk Releases Patches for 140 Vulnerabilities",
    "summary": "Splunk released security updates addressing nearly 140 critical and high-severity flaws across its three core products. The vulnerabilities enabled authentication bypass, remote code execution, and privilege escalation, with CVSS scores ranging from 7.0 to 9.8, and public proof-of-concept exploits were available for several. All affected products now ship patched versions; administrators should apply the updates immediately to mitigate the risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/splunk-patches-nearly-140-flaws-across-three-core-products/",
    "publishedAt": "2026-11-19T10:41:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "splunk-releases-patches-for-140-vulnerabilities",
      "article-1a0c32e8",
      "1a0c32e8",
      "splunk-releases-patches-for-140-vulnerabilities-317d2f"
    ]
  },
  {
    "slug": "bitwarden-integrates-native-passkey-support-on-des-782d035d",
    "title": "Bitwarden Integrates Native Passkey Support on Desktop Systems",
    "summary": "Bitwarden integrated native passkey support across Windows 11 and macOS operating systems to simplify passwordless access. The integration leverages Windows Hello and Apple Touch ID mechanisms to authenticate users and unlock encrypted credentials stored in vault repositories. Security administrators can deploy the updated Bitwarden client across desktop environments to enable operating system level passkey creation and management.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/bitwarden-windows-macos-passkeys-integration/",
    "publishedAt": "2026-11-19T10:39:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bitwarden-integrates-native-passkey-support-on-des",
      "article-782d035d",
      "782d035d",
      "bitwarden-integrates-native-passkey-support-on-des-785e94",
      "bitwarden-integrates-native-passkey-support-on-desktop-syste"
    ]
  },
  {
    "slug": "microsoft-issues-workaround-for-office-launch-issu-86b6f61b",
    "title": "Microsoft Issues Workaround for Office Launch Issues Post-Hotpatch",
    "summary": "Microsoft confirmed a Windows 11 hotpatch caused installation and launch failures in Office and other third-party apps. The problem originates from a corrupted registry update that interferes with startup, but does not expose data or allow code execution.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-confirms-app-installation-launch-issues-after-hotpatch/",
    "publishedAt": "2026-11-19T10:35:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-issues-workaround-for-office-launch-issu",
      "article-86b6f61b",
      "86b6f61b",
      "microsoft-issues-workaround-for-office-launch-issu-7d3ddb",
      "microsoft-issues-workaround-for-office-launch-issues-post-ho"
    ]
  },
  {
    "slug": "f5-patches-five-nginx2root-flaws-5bcbdd43",
    "title": "F5 Patches Five NGINX2Root Flaws",
    "summary": "F5 Networks released emergency patches for five NGINX2Root vulnerabilities that enable remote, unauthenticated attackers to execute arbitrary code on affected systems. Public proof-of-concept exploits have surfaced, confirming the flaws’ exploitability and prompting immediate remediation by affected customers. F5 recommends applying the latest firmware updates and verifying patch deployment to mitigate the risk of code execution.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/f5-patches-critical-nginx2root-flaws-as-poc-exploits-go-public/",
    "publishedAt": "2026-11-19T10:26:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "f5-patches-five-nginx2root-flaws",
      "article-5bcbdd43",
      "5bcbdd43",
      "f5-patches-five-nginx2root-flaws-50d435"
    ]
  },
  {
    "slug": "gta-6-scams-are-after-your-google-password-money-a-a23f6b54",
    "title": "GTA 6 scams are after your Google password, money, and crypto wallet",
    "summary": "Scammers are using the GTA 6 launch to steal Google passwords, sell game keys that may never arrive, and get players to connect crypto wallets. Stefan Dasic, a senior malware research engineer at Malwarebytes, tracked the lures.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/gta-6-scams-threats/",
    "publishedAt": "2026-11-19T10:09:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gta-6-scams-are-after-your-google-password-money-a",
      "article-a23f6b54",
      "a23f6b54",
      "gta-6-scams-are-after-your-google-password-money-a-4b0712",
      "gta-6-scams-are-after-your-google-password-money-and-crypto-"
    ]
  },
  {
    "slug": "ukraine-arrests-key-members-of-ransomware-gang-tha-3cec419f",
    "title": "Ukraine arrests key members of ransomware gang that extorted $40.5 million posing as IT support",
    "summary": "Four key members of a ransomware group that took more than $40.5 million from at least 28 companies have been detained in Ukraine. The arrests followed an investigation that Ukrainian police ran with the FBI for more than two years.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/ukraine-ransomware-gang-arrests-fake-it-support-calls/",
    "publishedAt": "2026-11-19T10:07:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ukraine-arrests-key-members-of-ransomware-gang-tha",
      "article-3cec419f",
      "3cec419f",
      "ukraine-arrests-key-members-of-ransomware-gang-tha-72c3d3",
      "ukraine-arrests-key-members-of-ransomware-gang-that-extorted"
    ]
  },
  {
    "slug": "ubuntu-releases-kernel-patch-for-multiple-azure-vu-1b8d9d27",
    "title": "Ubuntu Releases Kernel Patch for Multiple Azure Vulnerabilities",
    "summary": "Ubuntu issued a kernel update addressing several vulnerabilities that could allow attackers to compromise Azure-hosted systems. The flaws span USB gadget drivers, memory management, various architectures, and file system components, with no confirmed exploitation in the wild. All affected subsystems are fixed in the latest kernel release; administrators should apply the update promptly to mitigate potential compromise.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9160-1",
    "publishedAt": "2026-11-19T09:58:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-releases-kernel-patch-for-multiple-azure-vu",
      "article-1b8d9d27",
      "1b8d9d27",
      "ubuntu-releases-kernel-patch-for-multiple-azure-vu-7e78e9",
      "ubuntu-releases-kernel-patch-for-multiple-azure-vulnerabilit"
    ]
  },
  {
    "slug": "hackers-target-european-commission-with-artex-ai-t-b79e0695",
    "title": "Hackers Target European Commission with ARTEX AI Tool in Major Cyberattack",
    "summary": "A cyberattack on the European Commission disrupted staff services for more than 10 days, leaving some employees unable to submit timesheets, request leave, or enter salary information. The EU’s cybersecurity service, CERT-EU, found that hackers used an AI tool called ARTEX, POLITICO reported on November 19, 2026.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/european-commission-cyberattack/",
    "publishedAt": "2026-11-19T09:53:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-target-european-commission-with-artex-ai-t",
      "article-b79e0695",
      "b79e0695",
      "hackers-target-european-commission-with-artex-ai-t-44a59b",
      "hackers-target-european-commission-with-artex-ai-tool-in-maj"
    ]
  },
  {
    "slug": "scattered-spider-uses-phishing-sim-swap-tactics-ee2fede3",
    "title": "Scattered Spider Uses Phishing, SIM-Swap Tactics",
    "summary": "Scattered Spider employed fake text messages and SIM-swap operations to compromise user accounts and intercept authentication codes. The actor leveraged social engineering to bypass two-factor authentication, enabling unauthorized access to corporate systems; no public exploit or CVE was disclosed. Security teams should verify phone number ownership, enable device-based authentication, and monitor for SIM-swap activity to mitigate similar attacks.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/scattered-spiders-phishing-and-sim-swap-tactics-led-to-six-year-sentence",
    "publishedAt": "2026-11-19T09:41:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "scattered-spider-uses-phishing-sim-swap-tactics",
      "article-ee2fede3",
      "ee2fede3",
      "scattered-spider-uses-phishing-sim-swap-tactics-434191"
    ]
  },
  {
    "slug": "hackers-breach-n-able-cloud-server-disrupting-emai-ac60aa8a",
    "title": "Hackers Breach N-able Cloud Server, Disrupting Email Security Management Across 3 Regions",
    "summary": "N-able on Wednesday disclosed that unknown threat actors gained unauthorized access to one of the servers in the Mail Assure and Spam Experts Hosted Cloud, causing it to disable management interfaces and APIs. \"We have taken steps to mitigate the threat and are continuing to harden our services to reduce the risk of recurrence,\" N-able said.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/n-able-confirms-hackers-accessed-cloud.html",
    "publishedAt": "2026-11-19T09:31:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-breach-n-able-cloud-server-disrupting-emai",
      "article-ac60aa8a",
      "ac60aa8a",
      "hackers-breach-n-able-cloud-server-disrupting-emai-9f2069",
      "hackers-breach-n-able-cloud-server-disrupting-email-security"
    ]
  },
  {
    "slug": "nvidia-investigates-gentlemen-leak-claims-e153f400",
    "title": "NVIDIA Investigates Gentlemen Leak Claims",
    "summary": "NVIDIA is investigating claims that the Gentlemen ransomware group listed the company on its dark-web data-leak site, implying a possible breach. The leak site reportedly contains sensitive data, but NVIDIA has not confirmed any compromise or the breach’s scope. NVIDIA advises customers to monitor for suspicious activity and apply forthcoming security updates while the investigation continues.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/nvidia-investigating-gentlemen-ransomware-breach-claims/",
    "publishedAt": "2026-11-19T09:23:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nvidia-investigates-gentlemen-leak-claims",
      "article-e153f400",
      "e153f400",
      "nvidia-investigates-gentlemen-leak-claims-504dc8"
    ]
  },
  {
    "slug": "java4shell-exploitation-attempts-reported-ea4bc007",
    "title": "Java4Shell Exploitation Attempts Reported",
    "summary": "Attackers have begun probing and exploiting Java4Shell (CVE-2026-114938) across platforms, with GreyNoise and Cloudflare reporting attempts. The flaw permits remote code execution via malformed Java serialization, and vendors like Cisco, Elastic, Red Hat, and Siemens have issued advisories. Oracle and affected vendors have released patches; apply them immediately and monitor traffic for anomalies.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/java4shell-exploitation-attempts-begin-as-vendors-rush-out-advisories/",
    "publishedAt": "2026-11-19T09:10:58.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "java4shell-exploitation-attempts-reported",
      "article-ea4bc007",
      "ea4bc007",
      "java4shell-exploitation-attempts-reported-779057"
    ]
  },
  {
    "slug": "hackers-deploy-overlord-rat-that-survives-windows-3c6527c9",
    "title": "Hackers Deploy Overlord RAT That Survives Windows Resets and Crashes Systems When Terminated",
    "summary": "A financially motivated hacking group is deploying Overlord RAT, a Windows remote access trojan that can return after a victim uses “Reset this PC.” The malware can also trigger a blue screen if a user or security tool forcibly ends its process.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-deploy-overlord-rat/",
    "publishedAt": "2026-11-19T08:51:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-deploy-overlord-rat-that-survives-windows",
      "article-3c6527c9",
      "3c6527c9",
      "hackers-deploy-overlord-rat-that-survives-windows-c592a7",
      "hackers-deploy-overlord-rat-that-survives-windows-resets-and"
    ]
  },
  {
    "slug": "ruby-fixes-7-regex-string-flaws-warns-5-rce-pocs-c6ac8bc7",
    "title": "Ruby Fixes 7 Regex/String Flaws, Warns 5 RCE PoCs",
    "summary": "Ruby released patches for seven memory-safety flaws in its regular expression engine and string case-conversion code. Five of those defects have proof-of-concept exploits that allow crafted input to trigger remote code execution on affected systems. The maintainers advise users to upgrade to the fixed Ruby versions immediately to eliminate the RCE risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/ruby-releases-fixes-for-7-regex-and.html",
    "publishedAt": "2026-11-19T08:42:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ruby-fixes-7-regex-string-flaws-warns-5-rce-pocs",
      "article-c6ac8bc7",
      "c6ac8bc7",
      "ruby-fixes-7-regex-string-flaws-warns-5-rce-pocs-6d49f3"
    ]
  },
  {
    "slug": "ruby2-hell-critical-one-byte-heap-overflow-in-ruby-ff7850cf",
    "title": "ruby2ßhell: Critical One-Byte Heap Overflow in Ruby Could Allow RCE Attacks",
    "summary": "Ruby has patched a critical memory corruption flaw that can allow remote code execution (RCE) on vulnerable servers. Tracked as GHSA-34m4-m9fh-gqp5 and named ruby2ßhell by Veria Labs, the flaw affects Ruby’s string case conversion code.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ruby2shell-rce/",
    "publishedAt": "2026-11-19T08:41:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ruby2-hell-critical-one-byte-heap-overflow-in-ruby",
      "article-ff7850cf",
      "ff7850cf",
      "ruby2-hell-critical-one-byte-heap-overflow-in-ruby-31b71e",
      "ruby2-hell-critical-one-byte-heap-overflow-in-ruby-could-all"
    ]
  },
  {
    "slug": "splunk-fixes-critical-rce-and-auth-bypass-in-soar-7a8bfe7e",
    "title": "Splunk Fixes Critical RCE and Auth Bypass in SOAR",
    "summary": "Splunk released patches for its SOAR and Enterprise platforms to address a critical remote code execution flaw and a separate authentication bypass. The SOAR vulnerability, CVE-2026-131253, scored 9.9/10 and requires privileged accounts, while the Enterprise flaw, CVE-2026-76535, allows unauthenticated users to execute searches. Administrators should apply the latest updates immediately to eliminate the high-risk code execution and privilege escalation vectors.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/splunk-patches-vulnerabilities/",
    "publishedAt": "2026-11-19T08:36:42.000Z",
    "cves": [
      "CVE-2026-131253",
      "CVE-2026-76535"
    ],
    "additionalSources": [],
    "aliases": [
      "splunk-fixes-critical-rce-and-auth-bypass-in-soar",
      "article-7a8bfe7e",
      "7a8bfe7e",
      "splunk-fixes-critical-rce-and-auth-bypass-in-soar-4776f0"
    ]
  },
  {
    "slug": "ruby-releases-patch-for-seven-rce-vulnerabilities-6c94ef26",
    "title": "Ruby Releases Patch for Seven RCE Vulnerabilities",
    "summary": "Ruby 4.0.10, 3.4.13, and 3.3.14 were updated to fix seven vulnerabilities in the language’s regex engine and string case-conversion code. The flaws enable remote code execution by allowing attackers to run arbitrary code within vulnerable Ruby processes, with proof-of-concept demonstrations already available. Users should upgrade to the patched releases immediately to prevent exploitation of the critical RCE vectors.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ruby-patches-7-security-vulnerabilities/",
    "publishedAt": "2026-11-19T08:32:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ruby-releases-patch-for-seven-rce-vulnerabilities",
      "article-6c94ef26",
      "6c94ef26",
      "ruby-releases-patch-for-seven-rce-vulnerabilities-74ca1a"
    ]
  },
  {
    "slug": "us-enlists-private-firms-to-cut-scammers-off-from-3d27f789",
    "title": "US enlists private firms to cut scammers off from victims’ cash",
    "summary": "Stopping victims’ money before it reaches foreign scam, cybercrime and sextortion networks is the goal of a new US unit launched by the Homeland Security Task Force (HSTF). The Threat Disruption Center is part of the HSTF’s National Coordination Center (NCC) in Fairfax, Virginia.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/us-threat-disruption-center-scam-sextortion-funds/",
    "publishedAt": "2026-11-19T08:21:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "us-enlists-private-firms-to-cut-scammers-off-from",
      "article-3d27f789",
      "3d27f789",
      "us-enlists-private-firms-to-cut-scammers-off-from-ed762c",
      "us-enlists-private-firms-to-cut-scammers-off-from-victims-ca"
    ]
  },
  {
    "slug": "researcher-demonstrates-rce-in-postgresql-mysql-or-1d1c9f59",
    "title": "Researcher Demonstrates RCE in PostgreSQL, MySQL, Oracle",
    "summary": "A researcher demonstrated remote code execution exploits against PostgreSQL, MySQL, and Oracle databases using low-privilege accounts. The attacks leveraged memory-corruption bugs in the database engines, allowing code execution on the server without table read permissions. No vendor patches are currently available; administrators should restrict low-privilege access and monitor for anomalous activity until mitigations are released.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/researcher-demonstrates-database-rce.html",
    "publishedAt": "2026-11-19T08:14:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "researcher-demonstrates-rce-in-postgresql-mysql-or",
      "article-1d1c9f59",
      "1d1c9f59",
      "researcher-demonstrates-rce-in-postgresql-mysql-or-2444d1",
      "researcher-demonstrates-rce-in-postgresql-mysql-oracle"
    ]
  },
  {
    "slug": "eol-iot-devices-pose-security-risks-if-unmanaged-9af0d1c3",
    "title": "EOL IoT Devices Pose Security Risks if Unmanaged",
    "summary": "End-of-life IoT devices become security liabilities when vendors stop supporting them, leaving smart homes exposed to unpatched flaws. Without firmware updates, known vulnerabilities remain exploitable, allowing attackers to use exposed interfaces or default credentials for unauthorized entry. Teams should decommission or replace unsupported devices, enforce network segmentation, and apply vendor-approved workarounds or firmware upgrades where possible.",
    "category": "General",
    "severity": "LOW",
    "source": "ESET WeLiveSecurity",
    "sourceUrl": "https://www.welivesecurity.com/en/internet-of-things/iot-devices-no-longer-supported-smart-home-safe/",
    "publishedAt": "2026-11-19T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "eol-iot-devices-pose-security-risks-if-unmanaged",
      "article-9af0d1c3",
      "9af0d1c3",
      "eol-iot-devices-pose-security-risks-if-unmanaged-5e2c0d"
    ]
  },
  {
    "slug": "huntress-soc-mitigates-rogue-screenconnect-deploym-ad6f3d4f",
    "title": "Huntress SOC Mitigates Rogue ScreenConnect Deployments Following Account Compromise",
    "summary": "TruePath IT and the Huntress SOC investigated a security incident originating from a compromised user account. Threat actors leveraged the unauthorized access to deploy two rogue ScreenConnect instances, resulting in $3 million in operational downtime. The Huntress SOC identified the 2 AM RMM alerts to isolate the unauthorized deployments and secure the managed environment.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/rmm-alerts-msp-soc-incident-response",
    "publishedAt": "2026-11-19T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "huntress-soc-mitigates-rogue-screenconnect-deploym",
      "article-ad6f3d4f",
      "ad6f3d4f",
      "huntress-soc-mitigates-rogue-screenconnect-deploym-131aef",
      "huntress-soc-mitigates-rogue-screenconnect-deployments-follo"
    ]
  },
  {
    "slug": "cisa-adds-four-exploited-vulnerabilities-2e7a06cd",
    "title": "CISA Adds Four Exploited Vulnerabilities",
    "summary": "CISA added four actively exploited vulnerabilities to its Known Exploited Vulnerabilities catalog, affecting Synology DSM, BerriAI LiteLLM, Apache Axis, and Vanderbilt REDCap systems. The flaws enable ransomware, cryptomining, and LLMjacking attacks, with evidence of active exploitation in the wild. CISA urges affected organizations to apply vendor patches, monitor for suspicious activity, and maintain up-to-date security configurations.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/cisa-warns-of-4-exploited-flaws-linked.html",
    "publishedAt": "2026-11-19T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-four-exploited-vulnerabilities",
      "article-2e7a06cd",
      "2e7a06cd",
      "cisa-adds-four-exploited-vulnerabilities-7141e2"
    ]
  },
  {
    "slug": "africa-leads-global-cyber-attack-rankings-ede8c92a",
    "title": "Africa Leads Global Cyber Attack Rankings",
    "summary": "Threat intelligence indicates Africa now tops global attack rankings, with Nigeria’s incidents more than doubling from the previous year. The spike encompasses phishing, ransomware, and credential-stealing campaigns, placing Angola and Kenya among the top five most attacked nations. Defenders should enhance regional threat monitoring, strengthen endpoint defenses, and share indicators of compromise across national agencies.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/threat-intelligence/africa-top-spot-most-attacked-region-nigeria-surge",
    "publishedAt": "2026-11-19T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "africa-leads-global-cyber-attack-rankings",
      "article-ede8c92a",
      "ede8c92a",
      "africa-leads-global-cyber-attack-rankings-204adb"
    ]
  },
  {
    "slug": "php-issues-critical-update-for-cve-2026-115560-rce-c36942a6",
    "title": "PHP Issues Critical Update for CVE-2026-115560 RCE",
    "summary": "PHP released a critical security update to address CVE-2026-115560, an RCE flaw affecting session upload progress. The vulnerability was publicly disclosed two days after the PHP2Shell patches, and proof-of-concept exploits are available. Administrators should apply the latest PHP patch immediately to eliminate the high-risk code execution vector in affected systems.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/php-readies-critical-security-updates-to-patch-another-rce-flaw/",
    "publishedAt": "2026-11-19T07:45:17.000Z",
    "cves": [
      "CVE-2026-115560"
    ],
    "additionalSources": [],
    "aliases": [
      "php-issues-critical-update-for-cve-2026-115560-rce",
      "article-c36942a6",
      "c36942a6",
      "php-issues-critical-update-for-cve-2026-115560-rce-5d0802"
    ]
  },
  {
    "slug": "chinese-hackers-upgrade-eggstreme-malware-with-sil-936101d4",
    "title": "Chinese Hackers Upgrade EggStreme Malware With Silent Backdoor to Evade Security Detection",
    "summary": "A suspected Chinese cyberespionage group has rebuilt its EggStreme malware framework, adding a Windows backdoor that waits for an incoming connection instead of calling out to an attacker-controlled server. Bitdefender’s November 18, 2026, report tracks the changes as the group continues to target government organizations in the Philippines.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/eggstreme-malware/",
    "publishedAt": "2026-11-19T07:19:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chinese-hackers-upgrade-eggstreme-malware-with-sil",
      "article-936101d4",
      "936101d4",
      "chinese-hackers-upgrade-eggstreme-malware-with-sil-4d75b9",
      "chinese-hackers-upgrade-eggstreme-malware-with-silent-backdo"
    ]
  },
  {
    "slug": "crowdstrike-tracks-java4shell-post-exploitation-ac-3c4ad1e9",
    "title": "CrowdStrike Tracks Java4Shell Post-Exploitation Activity",
    "summary": "CrowdStrike reports exposure and post-exploitation activity tied to Java4Shell, tracked as CVE-2026-114938, affecting Java-based environments. The available advisory does not specify the root-cause mechanism, CVSS score, or whether exploitation is zero-day, but it confirms post-compromise activity. Security teams should identify exposed Java assets, apply vendor fixes when available, and investigate for post-exploitation indicators.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/crowdstrike-helps-protect-against-java4shell-cve-2026-114938/",
    "publishedAt": "2026-11-19T06:00:00.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-tracks-java4shell-post-exploitation-ac",
      "article-3c4ad1e9",
      "3c4ad1e9",
      "crowdstrike-tracks-java4shell-post-exploitation-ac-33529e",
      "crowdstrike-tracks-java4shell-post-exploitation-activity"
    ]
  },
  {
    "slug": "zdi-26-1039-oracle-peoplesoft-register-incorrect-a-08d871b0",
    "title": "ZDI-26-1039: Oracle PeopleSoft register Incorrect Authorization Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Oracle PeopleSoft. Authentication is required to exploit this vulnerability. The following CVEs are assigned: CVE-2026-35273.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1039/",
    "publishedAt": "2026-11-19T06:00:00.000Z",
    "cves": [
      "CVE-2026-35273"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1039-oracle-peoplesoft-register-incorrect-a",
      "article-08d871b0",
      "08d871b0",
      "zdi-26-1039-oracle-peoplesoft-register-incorrect-a-77f344",
      "zdi-26-1039-oracle-peoplesoft-register-incorrect-authorizati"
    ]
  },
  {
    "slug": "zdi-26-1038-0day-pwn2own-united-chargers-grizzl-e-4148bfab",
    "title": "ZDI-26-1038: (0Day) (Pwn2Own) United Chargers Grizzl-E Smart 40A OCPP UpdateFirmware Out-Of-Bounds Write Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows network-adjacent attackers to execute arbitrary code on affected installations of United Chargers Grizzl-E Smart 40A EV chargers. Authentication is not required to exploit this vulnerability. The following CVEs are assigned: CVE-2026-131813.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1038/",
    "publishedAt": "2026-11-19T06:00:00.000Z",
    "cves": [
      "CVE-2026-131813"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1038-0day-pwn2own-united-chargers-grizzl-e",
      "article-4148bfab",
      "4148bfab",
      "zdi-26-1038-0day-pwn2own-united-chargers-grizzl-e-77f344",
      "zdi-26-1038-0day-pwn2own-united-chargers-grizzl-e-smart-40a-"
    ]
  },
  {
    "slug": "consumer-devices-breach-ot-segmentation-in-hospita-1073f17e",
    "title": "Consumer Devices Breach OT Segmentation in Hospitals",
    "summary": "Claroty found game consoles, Roku sticks, Teslas, and other consumer gadgets bypassing OT network segmentation in hospitals, factories, and commercial sites. Many devices are placed on production or guest segments, enabling attackers to move laterally to critical OT equipment without isolation. Teams should audit device placement, enforce strict segmentation, and monitor OT traffic to block lateral movement.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/slipping-past-ot-network-segmentation/",
    "publishedAt": "2026-11-19T05:30:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "consumer-devices-breach-ot-segmentation-in-hospita",
      "article-1073f17e",
      "1073f17e",
      "consumer-devices-breach-ot-segmentation-in-hospita-6e29c9",
      "consumer-devices-breach-ot-segmentation-in-hospitals"
    ]
  },
  {
    "slug": "chromeos-stable-channel-updated-with-vm-escape-fix-7a79563a",
    "title": "ChromeOS Stable Channel Updated with VM Escape Fixes",
    "summary": "Google released a stable channel update for ChromeOS, upgrading OS to version 16868.24.0 and browser to 158.0.8127.65. The update bundles fixes for two VM escape vulnerabilities, CVE-2026-99999 and CVE-2026-74580, which could allow attackers to escape environments and gain local privilege escalation. The patch is included in the stable channel release; users should install the update immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-chromeos_01891834105.html",
    "publishedAt": "2026-11-19T05:16:06.168Z",
    "cves": [
      "CVE-2026-99999",
      "CVE-2026-74580"
    ],
    "additionalSources": [],
    "aliases": [
      "chromeos-stable-channel-updated-with-vm-escape-fix",
      "article-7a79563a",
      "7a79563a",
      "chromeos-stable-channel-updated-with-vm-escape-fix-3ef936",
      "chromeos-stable-channel-updated-with-vm-escape-fixes"
    ]
  },
  {
    "slug": "apache-roller-rce-exploited-without-authentication-557e2079",
    "title": "Apache Roller RCE Exploited Without Authentication",
    "summary": "Hackers are actively exploiting a critical Apache Roller RCE flaw that allows unauthenticated code execution on affected servers. CVE-2026-129448 affects Roller 4.0.0-6.1.4 and scores CVSS 3.1 9.8, classifying it as a high-risk zero-day. Administrators should immediately upgrade to the latest Roller release or apply the vendor-issued patch to mitigate the exploitation risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/apache-roller-rce-exploitation/",
    "publishedAt": "2026-11-19T05:15:41.000Z",
    "cves": [
      "CVE-2026-129448"
    ],
    "additionalSources": [],
    "aliases": [
      "apache-roller-rce-exploited-without-authentication",
      "article-557e2079",
      "557e2079",
      "apache-roller-rce-exploited-without-authentication-686495"
    ]
  },
  {
    "slug": "ai-agents-run-with-employee-credentials-unchecked-cd7e3f81",
    "title": "AI Agents Run with Employee Credentials Unchecked",
    "summary": "Nudge Security found that AI agents in project trackers, CRMs, and automation tools run with the credentials of their creators, inheriting full employee access. This credential inheritance creates a blind spot, enabling malicious or accidental actions without security oversight. Teams should enforce least-privilege for AI agents, monitor activity, and audit credential usage to block unauthorized access.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/ai-agents-employee-credentials-nudge-security-report/",
    "publishedAt": "2026-11-19T05:00:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agents-run-with-employee-credentials-unchecked",
      "article-cd7e3f81",
      "cd7e3f81",
      "ai-agents-run-with-employee-credentials-unchecked-4ca14d"
    ]
  },
  {
    "slug": "cyberpower-ups-software-enables-system-access-and-61239936",
    "title": "CyberPower UPS Software Enables SYSTEM Access and AD Dump",
    "summary": "Attackers used a scripting feature in CyberPower PowerPanel Business UPS software to gain SYSTEM-level access on a Windows domain controller. The flaw enabled copying the Active Directory database and launching persistent malware, though no data exfiltration was observed. CyberPower has not yet issued a patch; administrators should disable scripting or apply the latest firmware and monitor domain controller activity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-abuse-cyberpower-ups-software/",
    "publishedAt": "2026-11-19T04:10:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cyberpower-ups-software-enables-system-access-and",
      "article-61239936",
      "61239936",
      "cyberpower-ups-software-enables-system-access-and-1cc4ec",
      "cyberpower-ups-software-enables-system-access-and-ad-dump"
    ]
  },
  {
    "slug": "java4shell-exploited-disguised-as-chrome-traffic-99f8ae2d",
    "title": "Java4Shell Exploited, Disguised as Chrome Traffic",
    "summary": "Cloudflare’s Cloudforce One detected a Java4Shell RCE attempt that masqueraded as normal Google Chrome traffic in web logs. The exploit used CVE-2026-114938, with the source IP first scanning via a User-Agent header before sending the payload after 17 hours. Defenders should monitor anomalous User-Agent strings, apply the Java4Shell patch, and enforce strict input validation on Java services.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/java4shell-rce-flaw-exploited/",
    "publishedAt": "2026-11-19T03:18:37.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "java4shell-exploited-disguised-as-chrome-traffic",
      "article-99f8ae2d",
      "99f8ae2d",
      "java4shell-exploited-disguised-as-chrome-traffic-51b917"
    ]
  },
  {
    "slug": "cve-2026-114938-openjdk-base64-decoder-intrinsic-o-ed5c5460",
    "title": "CVE-2026-114938 - OpenJDK Base64 Decoder Intrinsic Out-of-Bounds Write Issue",
    "summary": "Bulletin ID: 2026-189-AWS Publication Date: 11/18/2026 17:00 PM PST Description: AWS is aware of CVE-2026-114938, a memory issue in the Base64 decoder intrinsic of OpenJDK 17.0.6 and later on x86-64 processors that support AVX-512 VBMI. AWS is working to deploy the fix to affected AWS services Refer to the article for the most up-to-date and complete information.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-189-aws/",
    "publishedAt": "2026-11-19T03:02:28.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-114938-openjdk-base64-decoder-intrinsic-o",
      "article-ed5c5460",
      "ed5c5460",
      "cve-2026-114938-openjdk-base64-decoder-intrinsic-o-782165",
      "cve-2026-114938-openjdk-base64-decoder-intrinsic-out-of-boun"
    ]
  },
  {
    "slug": "isc-stormcast-thursday-november-19-2026-2b637354",
    "title": "ISC Stormcast: Thursday November 19, 2026",
    "summary": "ISC released its weekly stormcast for Thursday, November 19, 2026, summarizing the latest network anomalies and threat actor activity. The episode does not disclose new vulnerabilities but highlights emerging tactics, techniques, and procedures used by adversaries. Listeners can access the recording via the ISC website and subscribe to receive future stormcast updates.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33536",
    "publishedAt": "2026-11-19T02:00:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isc-stormcast-thursday-november-19-2026",
      "article-2b637354",
      "2b637354",
      "isc-stormcast-thursday-november-19-2026-57dd81"
    ]
  },
  {
    "slug": "honeypot-analysis-should-follow-code-practices-4d1622d8",
    "title": "Honeypot Analysis Should Follow Code Practices",
    "summary": "Kevin Truong’s guest diary advocates treating honeypot data analysis as software development, recommending version control and code review practices. The post highlights risks of unstructured analysis, such as misinterpretation of threat indicators, and stresses the need for reproducibility and auditability. Security teams should adopt Git workflows, pull-request reviews, and human gatekeeping for AI-driven insights to improve accuracy and maintainability.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33534",
    "publishedAt": "2026-11-19T01:53:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "honeypot-analysis-should-follow-code-practices",
      "article-4d1622d8",
      "4d1622d8",
      "honeypot-analysis-should-follow-code-practices-57dd81"
    ]
  },
  {
    "slug": "rhsa-2026-100567-critical-java-21-openjdk-security-b44c198b",
    "title": "RHSA-2026:100567: Critical: java-21-openjdk security update for RHEL 8 and 9",
    "summary": "An update for java-21-openjdk is now available for Red Hat Enterprise Linux 8, Red Hat Enterprise Linux 9, Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions, Red Hat Enterprise Linux 9.6 Extended Update Support, and Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100567",
    "publishedAt": "2026-11-19T01:44:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100567-critical-java-21-openjdk-security",
      "article-b44c198b",
      "b44c198b",
      "rhsa-2026-100567-critical-java-21-openjdk-security-2ee081",
      "rhsa-2026-100567-critical-java-21-openjdk-security-update-fo"
    ]
  },
  {
    "slug": "red-hat-releases-critical-java-17-openjdk-update-f-495d3bfa",
    "title": "Red Hat Releases Critical java-17-openjdk Update for RHEL 9",
    "summary": "Red Hat issued a critical security update for java-17-openjdk on RHEL 9 and related SAP and Extended Update Support streams. The update addresses multiple high-severity vulnerabilities, each with CVSS scores indicating critical impact, but no specific CVE IDs are listed in the advisory. Administrators should apply the update immediately; no workarounds are provided, and the patch mitigates all identified risks.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100564",
    "publishedAt": "2026-11-19T01:39:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-java-17-openjdk-update-f",
      "article-495d3bfa",
      "495d3bfa",
      "red-hat-releases-critical-java-17-openjdk-update-f-2ee081",
      "red-hat-releases-critical-java-17-openjdk-update-for-rhel-9"
    ]
  },
  {
    "slug": "rhsa-2026-100491-critical-fence-agents-security-up-8cf77df9",
    "title": "RHSA-2026:100491: Critical: fence-agents security update",
    "summary": "An update for fence-agents is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100491",
    "publishedAt": "2026-11-19T01:37:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100491-critical-fence-agents-security-up",
      "article-8cf77df9",
      "8cf77df9",
      "rhsa-2026-100491-critical-fence-agents-security-up-2ee07d",
      "rhsa-2026-100491-critical-fence-agents-security-update"
    ]
  },
  {
    "slug": "red-enterprise-linux-8-receives-critical-kpatch-up-377e3654",
    "title": "Red Enterprise Linux 8 Receives Critical kpatch Updates",
    "summary": "Red Enterprise Linux 8 receives critical kpatch updates (kpatch-patch-4_18_0-553_109_1, 125_1, 158_1, 72_1, 85_1) that address multiple kernel vulnerabilities. Red Hat Product Security rates the update as Critical, with CVSS base scores linked to each CVE, indicating high-severity remote code execution risks. Administrators should apply the kpatch packages immediately to mitigate the vulnerabilities and prevent potential exploitation.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100525",
    "publishedAt": "2026-11-19T01:34:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-enterprise-linux-8-receives-critical-kpatch-up",
      "article-377e3654",
      "377e3654",
      "red-enterprise-linux-8-receives-critical-kpatch-up-2ee080",
      "red-enterprise-linux-8-receives-critical-kpatch-updates"
    ]
  },
  {
    "slug": "red-enterprise-linux-10-0-updates-fence-agents-wit-215b1f62",
    "title": "Red Enterprise Linux 10.0 Updates fence-agents with Critical Fix",
    "summary": "Red Enterprise Linux 10.0 Extended Update Support receives a critical fence-agents security update addressing multiple CVE-linked vulnerabilities. The update is rated Critical by Red Hat Product Security, with CVSS base scores provided for each referenced CVE. Systems should install the fence-agents package immediately to close the security gaps and avoid exploitation.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100633",
    "publishedAt": "2026-11-19T01:31:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-enterprise-linux-10-0-updates-fence-agents-wit",
      "article-215b1f62",
      "215b1f62",
      "red-enterprise-linux-10-0-updates-fence-agents-wit-2ee084",
      "red-enterprise-linux-10-0-updates-fence-agents-with-critical"
    ]
  },
  {
    "slug": "rhsa-2026-100523-critical-kpatch-patch-5-14-0-427-7bffa221",
    "title": "RHSA-2026:100523: Critical: kpatch-patch-5_14_0-427_100_1, kpatch-patch-5_14_0-427_113_1, kpatch-patch-5_14_0-427_126_1, kpatch-patch-5_14_0-427_146_1, and kpatch-patch-5_14_0-427_84_1 security update",
    "summary": "An update for kpatch-patch-5_14_0-427_100_1, kpatch-patch-5_14_0-427_113_1, kpatch-patch-5_14_0-427_126_1, kpatch-patch-5_14_0-427_146_1, and kpatch-patch-5_14_0-427_84_1 is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100523",
    "publishedAt": "2026-11-19T01:29:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100523-critical-kpatch-patch-5-14-0-427",
      "article-7bffa221",
      "7bffa221",
      "rhsa-2026-100523-critical-kpatch-patch-5-14-0-427-2ee080",
      "rhsa-2026-100523-critical-kpatch-patch-5-14-0-427-100-1-kpat"
    ]
  },
  {
    "slug": "rhsa-2026-100522-critical-kpatch-patch-5-14-0-687-5864e497",
    "title": "RHSA-2026:100522: Critical: kpatch-patch-5_14_0-687_10_1 and kpatch-patch-5_14_0-687_42_1 security update",
    "summary": "An update for kpatch-patch-5_14_0-687_10_1 and kpatch-patch-5_14_0-687_42_1 is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100522",
    "publishedAt": "2026-11-19T01:28:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100522-critical-kpatch-patch-5-14-0-687",
      "article-5864e497",
      "5864e497",
      "rhsa-2026-100522-critical-kpatch-patch-5-14-0-687-2ee080",
      "rhsa-2026-100522-critical-kpatch-patch-5-14-0-687-10-1-and-k"
    ]
  },
  {
    "slug": "rhsa-2026-100560-important-java-11-openjdk-els-sec-128b95f5",
    "title": "RHSA-2026:100560: Important: Java 11 OpenJDK ELS Security Update",
    "summary": "An update for java-11-openjdk with Extended Lifecycle Support is now available for Red Hat Enterprise Linux 7, Red Hat Enterprise Linux 8, and Red Hat Enterprise Linux 9.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100560",
    "publishedAt": "2026-11-19T01:27:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100560-important-java-11-openjdk-els-sec",
      "article-128b95f5",
      "128b95f5",
      "rhsa-2026-100560-important-java-11-openjdk-els-sec-2ee081",
      "rhsa-2026-100560-important-java-11-openjdk-els-security-upda"
    ]
  },
  {
    "slug": "red-hat-issues-critical-kpatch-patches-for-rhel-8-57cd9eef",
    "title": "Red Hat Issues Critical kpatch Patches for RHEL 8.8 SAP",
    "summary": "Red Hat released a critical security update for kpatch patches 4_18_0-477_107_1 through 4_18_0-477_161_1 on RHEL 8.8 Update Services for SAP Solutions. The update addresses multiple kernel patch vulnerabilities rated Critical by Red Hat Product Security, with CVSS base scores listed in the CVE references. Administrators should apply the patches immediately to mitigate potential remote code execution risks on affected systems.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100524",
    "publishedAt": "2026-11-19T01:25:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-kpatch-patches-for-rhel-8",
      "article-57cd9eef",
      "57cd9eef",
      "red-hat-issues-critical-kpatch-patches-for-rhel-8-2ee080",
      "red-hat-issues-critical-kpatch-patches-for-rhel-8-8-sap"
    ]
  },
  {
    "slug": "red-hat-releases-critical-kpatch-patches-for-rhel-1f98b6fb",
    "title": "Red Hat Releases Critical kpatch Patches for RHEL 9.2 SAP",
    "summary": "Red Hat issued a critical security update for kpatch patches 5_14_0-284_134_1 through 5_14_0-284_188_1 on RHEL 9.2 Update Services for SAP Solutions. The patches fix kernel vulnerabilities rated Critical by Red Hat Product Security, with CVSS base scores provided in the CVE references. System administrators should apply the updates immediately to prevent potential remote code execution on affected systems.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100521",
    "publishedAt": "2026-11-19T01:23:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-kpatch-patches-for-rhel",
      "article-1f98b6fb",
      "1f98b6fb",
      "red-hat-releases-critical-kpatch-patches-for-rhel-2ee080",
      "red-hat-releases-critical-kpatch-patches-for-rhel-9-2-sap"
    ]
  },
  {
    "slug": "rhsa-2026-100496-critical-red-hat-openstack-platfo-80c0de29",
    "title": "RHSA-2026:100496: Critical: Red Hat OpenStack Platform 16.2 (openstack-manila) security update",
    "summary": "An update for openstack-manila is now available for Red Hat OpenStack Platform 16.2 (Train). Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100496",
    "publishedAt": "2026-11-19T01:12:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100496-critical-red-hat-openstack-platfo",
      "article-80c0de29",
      "80c0de29",
      "rhsa-2026-100496-critical-red-hat-openstack-platfo-2ee07d",
      "rhsa-2026-100496-critical-red-hat-openstack-platform-16-2-op"
    ]
  },
  {
    "slug": "critical-java-21-openjdk-update-for-rhel-10-8cb4ded1",
    "title": "Critical java-21-openjdk Update for RHEL 10",
    "summary": "Red Hat released a critical security update for java-21-openjdk on RHEL 10, addressing multiple high-severity vulnerabilities. The update, rated as Critical by Red Hat Product Security, contains patches for CVEs that could allow remote code execution with a CVSS score above 8.0. Administrators should apply the update immediately or upgrade to the latest RHEL 10 release to ensure protection.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100568",
    "publishedAt": "2026-11-19T00:46:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "critical-java-21-openjdk-update-for-rhel-10",
      "article-8cb4ded1",
      "8cb4ded1",
      "critical-java-21-openjdk-update-for-rhel-10-2ee081"
    ]
  },
  {
    "slug": "critical-java-17-openjdk-update-for-rhel-8-56eabea4",
    "title": "Critical java-17-openjdk Update for RHEL 8",
    "summary": "Red Hat issued a critical security update for java-17-openjdk on RHEL 8, fixing several high-severity flaws. The patches address CVEs that could enable remote code execution with CVSS scores exceeding 8.0, posing significant risk. Systems administrators should apply the update promptly or upgrade to the latest RHEL 8 release to mitigate the vulnerabilities.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100563",
    "publishedAt": "2026-11-19T00:45:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "critical-java-17-openjdk-update-for-rhel-8",
      "article-56eabea4",
      "56eabea4",
      "critical-java-17-openjdk-update-for-rhel-8-2ee081"
    ]
  },
  {
    "slug": "red-hat-releases-critical-java-25-openjdk-update-f-83dfab4f",
    "title": "Red Hat Releases Critical java-25-openjdk Update for RHEL 9",
    "summary": "Red Hat issued a critical security update for java-25-openjdk on RHEL 9 and the 9.8 Extended Update Support stream. The patch fixes multiple high-severity vulnerabilities with CVSS scores indicating critical impact, though specific CVE IDs are not enumerated. Administrators should apply the update immediately; no workarounds are available, and the patch mitigates all identified risks.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100571",
    "publishedAt": "2026-11-19T00:19:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-java-25-openjdk-update-f",
      "article-83dfab4f",
      "83dfab4f",
      "red-hat-releases-critical-java-25-openjdk-update-f-2ee081",
      "red-hat-releases-critical-java-25-openjdk-update-for-rhel-9"
    ]
  },
  {
    "slug": "rhsa-2026-100572-critical-java-25-openjdk-security-9d45f95f",
    "title": "RHSA-2026:100572: Critical: java-25-openjdk security update for RHEL 10",
    "summary": "An update for java-25-openjdk is now available for Red Hat Enterprise Linux 10.2 Extended Update Support and Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100572",
    "publishedAt": "2026-11-19T00:15:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100572-critical-java-25-openjdk-security",
      "article-9d45f95f",
      "9d45f95f",
      "rhsa-2026-100572-critical-java-25-openjdk-security-2ee081",
      "rhsa-2026-100572-critical-java-25-openjdk-security-update-fo"
    ]
  },
  {
    "slug": "nist-demonstrates-quantum-position-verification-to-80a33f8f",
    "title": "NIST Demonstrates Quantum Position Verification to Block Remote Hackers",
    "summary": "Physicists at the National Institute of Standards and Technology demonstrated a quantum position verification protocol using entangled photons to confirm a user's exact physical location. The research team successfully closed security loopholes in earlier quantum schemes during testing inside a facility in Boulder, Colorado.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/nist-quantum-position-verification/",
    "publishedAt": "2026-11-19T00:07:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nist-demonstrates-quantum-position-verification-to",
      "article-80a33f8f",
      "80a33f8f",
      "nist-demonstrates-quantum-position-verification-to-5575a2",
      "nist-demonstrates-quantum-position-verification-to-block-rem"
    ]
  },
  {
    "slug": "russian-charged-with-palantir-employee-surveillanc-0334815b",
    "title": "Russian Charged with Palantir Employee Surveillance",
    "summary": "U.S. prosecutors charged Russian national Igor Andreevich D’iu for acting as a Moscow agent targeting Palantir Technologies employees. The case uncovered Telegram-based recruitment and covert monitoring designed to harvest intelligence on a defense-technology firm’s workforce. Defenders should audit employee access, monitor for insider threats, and enforce strict communication controls to mitigate similar espionage.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/russian-charged-with-spying-on-palantir-for-moscow",
    "publishedAt": "2026-11-19T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russian-charged-with-palantir-employee-surveillanc",
      "article-0334815b",
      "0334815b",
      "russian-charged-with-palantir-employee-surveillanc-533958",
      "russian-charged-with-palantir-employee-surveillance"
    ]
  },
  {
    "slug": "apple-releases-app-store-connect-api-4-6-1-update-2f7f1e5a",
    "title": "Apple Releases App Store Connect API 4.6.1 Update",
    "summary": "Apple released App Store Connect API 4.6.1 to improve developer integration and streamline app management. The update addresses multiple bugs, introduces new features, and enhances stability, but no security vulnerabilities were disclosed. Developers should download the new release, update their integration, and test compatibility with existing workflows to ensure compliance.",
    "category": "General",
    "severity": "LOW",
    "source": "Apple Security Updates",
    "sourceUrl": "https://developer.apple.com/news/releases/?id=11182026b",
    "publishedAt": "2026-11-19T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-releases-app-store-connect-api-4-6-1-update",
      "article-2f7f1e5a",
      "2f7f1e5a",
      "apple-releases-app-store-connect-api-4-6-1-update-5bd3d7"
    ]
  },
  {
    "slug": "ransomware-brokers-shift-listings-to-private-chann-d5f645d4",
    "title": "Ransomware Brokers Shift Listings to Private Channels",
    "summary": "Ransomware gangs are moving access-broker listings from public dark-web forums to private channels, cutting early warning signals. ZeroFox data shows monthly victim counts rose from 573 in 2025 to 718 in 2026, while public listings dropped from 620 to 370 per quarter. Security teams should monitor private broker communications and employ network segmentation to limit lateral movement once compromised.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/ransomware-access-brokers-cybercrime/",
    "publishedAt": "2026-11-18T23:28:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ransomware-brokers-shift-listings-to-private-chann",
      "article-d5f645d4",
      "d5f645d4",
      "ransomware-brokers-shift-listings-to-private-chann-3c8e2d",
      "ransomware-brokers-shift-listings-to-private-channels"
    ]
  },
  {
    "slug": "rhsa-2026-100550-critical-red-hat-jboss-core-servi-47d19b1b",
    "title": "RHSA-2026:100550: Critical: Red Hat JBoss Core Services Apache HTTP Server 2.4.62 SP7 security update",
    "summary": "Red Hat JBoss Core Services Apache HTTP Server 2.4.62 Service Pack 7 is now available. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100550",
    "publishedAt": "2026-11-18T23:27:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100550-critical-red-hat-jboss-core-servi",
      "article-47d19b1b",
      "47d19b1b",
      "rhsa-2026-100550-critical-red-hat-jboss-core-servi-2ee081",
      "rhsa-2026-100550-critical-red-hat-jboss-core-services-apache"
    ]
  },
  {
    "slug": "ukraine-fbi-arrest-ransomware-group-members-bb9e5203",
    "title": "Ukraine, FBI Arrest Ransomware Group Members",
    "summary": "Ukrainian authorities and the FBI arrested four suspects from an international ransomware group tied to more than $40.5 million in ransom payments from at least 28 companies. The raid followed a joint investigation that traced the gang’s stolen-credential phishing attacks. Officials advise organizations to strengthen access controls and monitor for anomalous credential activity to mitigate similar threats.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/ukraine-fbi-arrest-ransomware-gang-members-tied-to-40m-in-ransoms/",
    "publishedAt": "2026-11-18T23:08:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ukraine-fbi-arrest-ransomware-group-members",
      "article-bb9e5203",
      "bb9e5203",
      "ukraine-fbi-arrest-ransomware-group-members-6f6078"
    ]
  },
  {
    "slug": "azure-linux-4-released-for-vms-without-extra-fee-b6924440",
    "title": "Azure Linux 4 Released for VMs Without Extra Fee",
    "summary": "Microsoft announced general availability of Azure Linux 4, its in-house Linux distribution for customer virtual machines and scale sets. It is offered at no extra license fee, with customers paying only for Azure compute. The release enables organizations to deploy a consistent Linux environment across Azure workloads without additional licensing costs.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/microsoft-azure-linux-4/",
    "publishedAt": "2026-11-18T23:01:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "azure-linux-4-released-for-vms-without-extra-fee",
      "article-b6924440",
      "b6924440",
      "azure-linux-4-released-for-vms-without-extra-fee-4f3d13"
    ]
  },
  {
    "slug": "ubuntu-patches-multiple-openjdk-27-flaws-24a3f261",
    "title": "Ubuntu Patches Multiple OpenJDK 27 Flaws",
    "summary": "Ubuntu released a security update addressing multiple remote vulnerabilities affecting the OpenJDK 27 environment. Flaws including CVE-2026-114938 and CVE-2026-114939 involve improper input handling and authentication in Compiler, JGSS, and JSSE components, allowing unauthorized data access, denial of service, or arbitrary code execution. Security teams should apply the USN-9158-1 package updates to mitigate potential exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9158-1",
    "publishedAt": "2026-11-18T22:13:47.000Z",
    "cves": [
      "CVE-2026-114938",
      "CVE-2026-114939"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-patches-multiple-openjdk-27-flaws",
      "article-24a3f261",
      "24a3f261",
      "ubuntu-patches-multiple-openjdk-27-flaws-7e7940"
    ]
  },
  {
    "slug": "usn-9157-1-openjdk-25-vulnerabilities-d6b9f99d",
    "title": "USN-9157-1: OpenJDK 25 vulnerabilities",
    "summary": "A remote attacker could possibly use this issue to cause a denial of service or execute arbitrary code. (CVE-2026-114938) It was discovered that the JGSS component of OpenJDK 25 did not correctly authenticate users. A remote attacker could possibly use this issue to read or modify sensitive data. (CVE-2026-114939) Nicholas Carlini discovered that the JSSE component of OpenJDK 25 did not correctly authorize users.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9157-1",
    "publishedAt": "2026-11-18T22:13:33.000Z",
    "cves": [
      "CVE-2026-114938",
      "CVE-2026-114939",
      "CVE-2026-114940",
      "CVE-2026-114941",
      "CVE-2026-114942",
      "CVE-2026-114943",
      "CVE-2026-114944",
      "CVE-2026-114945",
      "CVE-2026-114946",
      "CVE-2026-114947"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9157-1-openjdk-25-vulnerabilities",
      "article-d6b9f99d",
      "d6b9f99d",
      "usn-9157-1-openjdk-25-vulnerabilities-7e7944"
    ]
  },
  {
    "slug": "usn-9156-1-openjdk-21-vulnerabilities-d767f87d",
    "title": "USN-9156-1: OpenJDK 21 vulnerabilities",
    "summary": "A remote attacker could possibly use this issue to cause a denial of service or execute arbitrary code. (CVE-2026-114938) It was discovered that the JGSS component of OpenJDK 21 did not correctly authenticate users. A remote attacker could possibly use this issue to read or modify sensitive data. (CVE-2026-114939) Nicholas Carlini discovered that the JSSE component of OpenJDK 21 did not correctly authorize users.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9156-1",
    "publishedAt": "2026-11-18T22:12:23.000Z",
    "cves": [
      "CVE-2026-114938",
      "CVE-2026-114939",
      "CVE-2026-114940",
      "CVE-2026-114941",
      "CVE-2026-114942",
      "CVE-2026-114943",
      "CVE-2026-114944",
      "CVE-2026-114945",
      "CVE-2026-114946"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9156-1-openjdk-21-vulnerabilities",
      "article-d767f87d",
      "d767f87d",
      "usn-9156-1-openjdk-21-vulnerabilities-7e7947"
    ]
  },
  {
    "slug": "palo-alto-networks-and-ubuntu-address-cve-2026-114-671a87c2",
    "title": "Palo Alto Networks and Ubuntu Address CVE-2026-114938 Java Vulnerability",
    "summary": "Palo Alto Networks and Ubuntu both address CVE-2026-114938, a critical Java/OpenJDK flaw affecting enterprise and OpenJDK 17 deployments. The vulnerability enables remote attackers to cause denial of service or execute arbitrary code, risking compromise of vulnerable systems. Administrators should apply vendor updates and follow Palo Alto and Ubuntu advisories for mitigation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9155-1",
    "publishedAt": "2026-11-18T22:10:58.000Z",
    "cves": [
      "CVE-2026-114938",
      "CVE-2026-114939",
      "CVE-2026-114940",
      "CVE-2026-114942",
      "CVE-2026-114943",
      "CVE-2026-114944",
      "CVE-2026-114945",
      "CVE-2026-114946"
    ],
    "additionalSources": [
      {
        "source": "Palo Alto Networks PSIRT",
        "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-114938"
      }
    ],
    "aliases": [
      "palo-alto-networks-and-ubuntu-address-cve-2026-114",
      "article-671a87c2",
      "671a87c2",
      "palo-alto-networks-and-ubuntu-address-cve-2026-114-7e794b",
      "palo-alto-networks-and-ubuntu-address-cve-2026-114938-java-v"
    ]
  },
  {
    "slug": "usn-9154-1-openjdk-11-vulnerabilities-d20be6b4",
    "title": "USN-9154-1: OpenJDK 11 vulnerabilities",
    "summary": "A remote attacker could possibly use this issue to read or modify sensitive data. (CVE-2026-114939) Nicholas Carlini discovered that the JSSE component of OpenJDK 11 did not correctly authorize users. A remote attacker could possibly use this issue to read or modify sensitive data. (CVE-2026-114940) It was discovered that the Hotspot component of OpenJDK 11 did not correctly authorize users.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9154-1",
    "publishedAt": "2026-11-18T22:09:36.000Z",
    "cves": [
      "CVE-2026-114939",
      "CVE-2026-114940",
      "CVE-2026-114943",
      "CVE-2026-114944",
      "CVE-2026-114946"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9154-1-openjdk-11-vulnerabilities",
      "article-d20be6b4",
      "d20be6b4",
      "usn-9154-1-openjdk-11-vulnerabilities-7e794f"
    ]
  },
  {
    "slug": "social-media-amplifies-outage-panic-2ab3bacf",
    "title": "Social Media Amplifies Outage Panic",
    "summary": "The article warns that recent outages and attacks can cause unnecessary worry, especially when amplified by social media. It advises against allowing social media narratives to transform a technical bug into a perceived disaster, which can mislead stakeholders. Readers are encouraged to verify incidents through official sources before reacting, thereby reducing panic and misinformation.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/ai/2026/11/outage-or-attack-dont-let-social-media-fill-in-the-gaps",
    "publishedAt": "2026-11-18T22:07:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "social-media-amplifies-outage-panic",
      "article-2ab3bacf",
      "2ab3bacf",
      "social-media-amplifies-outage-panic-20edd5"
    ]
  },
  {
    "slug": "gta-6-scams-threaten-accounts-money-crypto-a0dea539",
    "title": "GTA 6 Scams Threaten Accounts, Money, Crypto",
    "summary": "Scammers target GTA 6 players with fake code offers that can compromise Google accounts, financial data, or crypto wallets. The scheme uses social engineering to trick users into providing credentials or downloading malware, exploiting the hype around the game's launch. Users should avoid unsolicited code offers, verify authenticity through official channels, and enable two-factor authentication to mitigate credential theft.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/scams/2026/11/gta-6-scams-could-cost-you-your-account-money-or-crypto",
    "publishedAt": "2026-11-18T22:06:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gta-6-scams-threaten-accounts-money-crypto",
      "article-a0dea539",
      "a0dea539",
      "gta-6-scams-threaten-accounts-money-crypto-5a292d"
    ]
  },
  {
    "slug": "cloudflare-releases-updated-clairic-models-16be56c3",
    "title": "Cloudflare Releases Updated Clairic Models",
    "summary": "Cloudflare’s Workers AI team released updated Clairic and Clairic-flash models with open-weight architecture. The new models support more efficient extraction tasks and expand the repertoire of AI-powered services, but no security issues are reported. Developers can integrate the open-weight models via the Workers AI API to enhance text extraction capabilities.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/open-clairic/",
    "publishedAt": "2026-11-18T22:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-releases-updated-clairic-models",
      "article-16be56c3",
      "16be56c3",
      "cloudflare-releases-updated-clairic-models-6fe107"
    ]
  },
  {
    "slug": "chrome-for-android-update-ce57406e",
    "title": "Chrome for Android Update",
    "summary": "We've just released Chrome 159 (159.0.8154.18) for Android to a small percentage of users. It'll become available on Google Play over the next few days. If you find a new issue, please let us know by filing a bug .",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-for-android-update_0145322301.html",
    "publishedAt": "2026-11-18T22:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-for-android-update",
      "article-ce57406e",
      "ce57406e",
      "chrome-for-android-update-4a431e"
    ]
  },
  {
    "slug": "russian-cold-relic-apt-leverages-cloud-breaches-fo-5d65504b",
    "title": "Russian Cold Relic APT Leverages Cloud Breaches for Impersonation",
    "summary": "The Russia-linked threat group Cold Relic is conducting targeted attacks leveraging initial access gained from compromised cloud environments. Attackers exfiltrate victim data from initial cloud breaches to orchestrate highly convincing impersonation and social engineering campaigns against secondary enterprise targets. Security teams must enforce strict identity controls and closely monitor cross-tenant cloud trust relationships to mitigate lateral expansion.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/cold-relic-turns-one-cloud-breach-into-another",
    "publishedAt": "2026-11-18T21:59:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russian-cold-relic-apt-leverages-cloud-breaches-fo",
      "article-5d65504b",
      "5d65504b",
      "russian-cold-relic-apt-leverages-cloud-breaches-fo-2eca1e",
      "russian-cold-relic-apt-leverages-cloud-breaches-for-imperson"
    ]
  },
  {
    "slug": "rhsa-2026-100566-critical-openjdk-17-0-21-1-securi-28f3adbf",
    "title": "RHSA-2026:100566: Critical: OpenJDK 17.0.21.1 Security Update for Windows Builds",
    "summary": "An update is now available for OpenJDK. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100566",
    "publishedAt": "2026-11-18T21:29:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100566-critical-openjdk-17-0-21-1-securi",
      "article-28f3adbf",
      "28f3adbf",
      "rhsa-2026-100566-critical-openjdk-17-0-21-1-securi-2ee081",
      "rhsa-2026-100566-critical-openjdk-17-0-21-1-security-update-"
    ]
  },
  {
    "slug": "openjdk-17-0-21-1-critical-update-for-portable-lin-a7b37d41",
    "title": "OpenJDK 17.0.21.1 Critical Update for Portable Linux",
    "summary": "The update addresses multiple vulnerabilities in OpenJDK 17.0.21.1 for portable Linux builds. Red Hat Product Security rates the flaws as critical, with CVSS base scores listed in the CVE references. The vendor has released a patch; administrators should apply the update immediately to mitigate potential exploitation and verify installation promptly.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100565",
    "publishedAt": "2026-11-18T21:29:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openjdk-17-0-21-1-critical-update-for-portable-lin",
      "article-a7b37d41",
      "a7b37d41",
      "openjdk-17-0-21-1-critical-update-for-portable-lin-2ee081",
      "openjdk-17-0-21-1-critical-update-for-portable-linux"
    ]
  },
  {
    "slug": "rhsa-2026-100570-critical-openjdk-21-0-13-1-securi-9dbb1b99",
    "title": "RHSA-2026:100570: Critical: OpenJDK 21.0.13.1 Security Update for Windows Builds",
    "summary": "An update is now available for OpenJDK. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100570",
    "publishedAt": "2026-11-18T21:20:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100570-critical-openjdk-21-0-13-1-securi",
      "article-9dbb1b99",
      "9dbb1b99",
      "rhsa-2026-100570-critical-openjdk-21-0-13-1-securi-2ee081",
      "rhsa-2026-100570-critical-openjdk-21-0-13-1-security-update-"
    ]
  },
  {
    "slug": "smartermail-vulnerabilities-affect-builds-before-9-34e8ac4f",
    "title": "SmarterMail Vulnerabilities Affect Builds Before 9817",
    "summary": "SmarterMail versions prior to Build 9817 contain undisclosed vulnerabilities that could allow attackers to compromise the application. The Canadian Centre for Cyber Security issued advisory AV26-1177, urging administrators to review links and apply updates as soon as possible. Applying the latest SmarterMail release or patch mitigates the risk; security teams should verify installation and monitor for anomalous activity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/smartertools-security-advisory-av26-1177",
    "publishedAt": "2026-11-18T21:06:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "smartermail-vulnerabilities-affect-builds-before-9",
      "article-34e8ac4f",
      "34e8ac4f",
      "smartermail-vulnerabilities-affect-builds-before-9-670f7b",
      "smartermail-vulnerabilities-affect-builds-before-9817"
    ]
  },
  {
    "slug": "rhsa-2026-100569-critical-openjdk-21-0-13-1-securi-07d3e719",
    "title": "RHSA-2026:100569: Critical: OpenJDK 21.0.13.1 Security Update for Portable Linux Builds",
    "summary": "An update is now available for OpenJDK. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100569",
    "publishedAt": "2026-11-18T21:04:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100569-critical-openjdk-21-0-13-1-securi",
      "article-07d3e719",
      "07d3e719",
      "rhsa-2026-100569-critical-openjdk-21-0-13-1-securi-2ee081",
      "rhsa-2026-100569-critical-openjdk-21-0-13-1-security-update-"
    ]
  },
  {
    "slug": "teamcity-vulnerabilities-in-versions-before-2026-1-26df0737",
    "title": "TeamCity Vulnerabilities in Versions Before 2026.1.3",
    "summary": "TeamCity releases before 2025.11.7 and 2026.1.3 contain vulnerabilities that may enable unauthorized code execution. The Canadian Centre for Cyber Security advisory AV26-1176 recommends reviewing links and installing the latest patches immediately. Applying the updated TeamCity version eliminates the flaw; administrators should verify deployment and monitor for suspicious activity and ensure proper configuration.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/jetbrains-security-advisory-av26-1176",
    "publishedAt": "2026-11-18T21:00:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "teamcity-vulnerabilities-in-versions-before-2026-1",
      "article-26df0737",
      "26df0737",
      "teamcity-vulnerabilities-in-versions-before-2026-1-53189b",
      "teamcity-vulnerabilities-in-versions-before-2026-1-3"
    ]
  },
  {
    "slug": "usn-9037-2-hplip-regression-f71ac02e",
    "title": "USN-9037-2: HPLIP regression",
    "summary": "USN-9037-1 fixed vulnerabilities in HPLIP. Unfortunately, the upstream fix introduced a regression that caused scanning to fail on certain HP devices. An attacker could possibly use this issue to cause a denial of service, expose sensitive information or execute arbitrary code. (CVE-2026-91097) It was discovered that HPLIP did not properly handle certain input, which could result in a heap-based buffer overflow.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9037-2",
    "publishedAt": "2026-11-18T20:58:04.000Z",
    "cves": [
      "CVE-2026-91097",
      "CVE-2026-91098",
      "CVE-2026-91099",
      "CVE-2026-91100",
      "CVE-2026-91101",
      "CVE-2026-91102",
      "CVE-2026-91103",
      "CVE-2026-91104",
      "CVE-2026-91105",
      "CVE-2026-91106"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9037-2-hplip-regression",
      "article-f71ac02e",
      "f71ac02e",
      "usn-9037-2-hplip-regression-7e8844"
    ]
  },
  {
    "slug": "coinbase-blocks-4-7m-transfers-to-deepfake-scam-6e665e31",
    "title": "Coinbase Blocks $4.7M Transfers to Deepfake Scam",
    "summary": "Coinbase blocked $4.7 million in crypto transfers to scammers using an AI-generated deepfake of Elon Musk during a Tesla livestream that drew over 500,000 viewers. The fraud leveraged social engineering and insufficient transfer-verification controls, enabling attackers to siphon funds before detection. Coinbase’s monitoring flagged the anomaly, prompting an update to its outbound-transfer workflow that now requires authentication for large movements.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/coinbase-blocks-47-million-in-transfers-to-elon-musk-deepfake-scam/",
    "publishedAt": "2026-11-18T20:49:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "coinbase-blocks-4-7m-transfers-to-deepfake-scam",
      "article-6e665e31",
      "6e665e31",
      "coinbase-blocks-4-7m-transfers-to-deepfake-scam-28cf16"
    ]
  },
  {
    "slug": "strike-graph-unveils-ai-for-continuous-compliance-04bc5d59",
    "title": "Strike Graph Unveils AI for Continuous Compliance Evidence",
    "summary": "Strike Graph introduced an agentic AI platform that automatically gathers compliance evidence from existing systems via APIs, eliminating manual collection. The solution maps data to over 30 regulatory frameworks, providing a single source of truth without duplicating effort across tools. Users integrate the AI into their toolchain, and the platform offers dashboards and export options for audit readiness.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/strike-graph-launches-integration-ai-to-automate-continuous-compliance-evidence-using-any-existing-tool",
    "publishedAt": "2026-11-18T20:45:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "strike-graph-unveils-ai-for-continuous-compliance",
      "article-04bc5d59",
      "04bc5d59",
      "strike-graph-unveils-ai-for-continuous-compliance-11523c",
      "strike-graph-unveils-ai-for-continuous-compliance-evidence"
    ]
  },
  {
    "slug": "judge-approves-spirit-data-sale-to-google-b2faef81",
    "title": "Judge Approves Spirit Data Sale to Google",
    "summary": "A federal bankruptcy judge approved the sale of Spirit Airlines' defunct data to Google. The transaction transfers millions of passenger records, which Google plans to use in AI training while agreeing to strict privacy safeguards. Affected stakeholders should monitor compliance with the court-issued protective orders and ensure that any AI deployment incorporates the agreed data-handling constraints.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/judge-signs-off-google-purchase-spirit-airlines-data",
    "publishedAt": "2026-11-18T20:39:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "judge-approves-spirit-data-sale-to-google",
      "article-b2faef81",
      "b2faef81",
      "judge-approves-spirit-data-sale-to-google-22b216"
    ]
  },
  {
    "slug": "iranian-groups-hand-off-access-for-destructive-att-6eb700e4",
    "title": "Iranian Groups Hand Off Access for Destructive Attacks",
    "summary": "AttackIQ research examined 20 Iranian state-sponsored threat groups, revealing a coordinated hand-off of network access to enable destructive operations. The analysis shows espionage, ransomware, and hacktivism tactics intertwining within state-backed campaigns, complicating attribution and mitigation. Security teams should monitor for lateral movement indicators and implement strict network segmentation to reduce the impact of such hand-offs.",
    "category": "Nation State",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/threat-intelligence/attackiq-research-reveals-iranian-cyber-groups",
    "publishedAt": "2026-11-18T20:38:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "iranian-groups-hand-off-access-for-destructive-att",
      "article-6eb700e4",
      "6eb700e4",
      "iranian-groups-hand-off-access-for-destructive-att-7ef219",
      "iranian-groups-hand-off-access-for-destructive-attacks"
    ]
  },
  {
    "slug": "admin-plans-early-patch-info-sharing-with-industry-a870dd28",
    "title": "Admin Plans Early Patch Info Sharing with Industry",
    "summary": "Homeland Security Secretary Markwayne Mullin announced a policy to engage industry for early patch information before releases. The initiative aims to collect detailed patch data from vendors to assess security impact and mitigate potential vulnerabilities. No vendor patch or technical fix is involved; the program is a strategic outreach effort to improve patch management.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/tech-disruptions-house-homeland-committee-testimony",
    "publishedAt": "2026-11-18T20:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "admin-plans-early-patch-info-sharing-with-industry",
      "article-a870dd28",
      "a870dd28",
      "admin-plans-early-patch-info-sharing-with-industry-750ba0"
    ]
  },
  {
    "slug": "critical-java-and-nginx-vulnerability-cve-2026-114-4adcf3cd",
    "title": "Critical Java and NGINX Vulnerability CVE-2026-114938",
    "summary": "A critical vulnerability disclosed today, identified as CVE-2026-114938, affects Java and NGINX, while a separate Microsoft 365 outage was reported. The flaw allows unauthenticated remote code execution through malformed input, with public proof-of-concept code available, potentially compromising affected servers. Administrators should apply vendor-issued patches for Java and NGINX immediately and monitor Microsoft 365 for service restoration.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33532",
    "publishedAt": "2026-11-18T19:54:50.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "critical-java-and-nginx-vulnerability-cve-2026-114",
      "article-4adcf3cd",
      "4adcf3cd",
      "critical-java-and-nginx-vulnerability-cve-2026-114-57dd81",
      "critical-java-and-nginx-vulnerability-cve-2026-114938"
    ]
  },
  {
    "slug": "wellington-it-breach-exposes-50-credit-unions-3536783e",
    "title": "Wellington IT Breach Exposes 50 Credit Unions",
    "summary": "A cyberattack on Wellington IT exposed sensitive member data from 50 credit unions, primarily in Ireland. The breach likely involved credential compromise or unauthorized access to the provider’s systems, though the exact vector remains undisclosed. Affected institutions should conduct forensic investigations, reset credentials, and notify regulators while Wellington IT is advised to strengthen access controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/data-breach-impacts-40-irish-credit-unions-in-reported-it-provider-hack/",
    "publishedAt": "2026-11-18T19:39:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wellington-it-breach-exposes-50-credit-unions",
      "article-3536783e",
      "3536783e",
      "wellington-it-breach-exposes-50-credit-unions-7397db"
    ]
  },
  {
    "slug": "mitre-flags-inaccurate-cve-timestamps-plans-retire-2cd1a5df",
    "title": "MITRE Flags Inaccurate CVE Timestamps, Plans Retirement",
    "summary": "MITRE disclosed that 87% of its recent CVE records contain inaccurate publication timestamps. The error stems from legacy system inconsistencies, and MITRE plans to retire the system in 2027. Users should cross-check CVE release dates and await the updated database to maintain accurate vulnerability timelines in security operations for incident response.",
    "category": "General",
    "severity": "LOW",
    "source": "Socket.dev",
    "sourceUrl": "https://socket.dev/blog/mitre-cve-timestamp-issues",
    "publishedAt": "2026-11-18T19:38:28.084Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mitre-flags-inaccurate-cve-timestamps-plans-retire",
      "article-2cd1a5df",
      "2cd1a5df",
      "mitre-flags-inaccurate-cve-timestamps-plans-retire-11514c",
      "mitre-flags-inaccurate-cve-timestamps-plans-retirement"
    ]
  },
  {
    "slug": "cisco-endpoint-connector-vulnerabilities-affect-li-c641da17",
    "title": "Cisco Endpoint Connector Vulnerabilities Affect Linux, Mac, Windows",
    "summary": "Cisco disclosed vulnerabilities in Secure Endpoint Connector for Linux, Mac, and Windows affecting versions before 1.29.3, 1.27.5, and 8.6.4. The flaws allow local privilege escalation via improper input validation, with public proof-of-concept code available, potentially enabling attackers to gain elevated access. Administrators should upgrade to the latest Secure Endpoint Connector releases and apply vendor-issued patches to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/cisco-security-advisory-av26-1175",
    "publishedAt": "2026-11-18T19:14:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-endpoint-connector-vulnerabilities-affect-li",
      "article-c641da17",
      "c641da17",
      "cisco-endpoint-connector-vulnerabilities-affect-li-1b59a2",
      "cisco-endpoint-connector-vulnerabilities-affect-linux-mac-wi"
    ]
  },
  {
    "slug": "usn-9153-1-cloud-init-vulnerability-8ef719c2",
    "title": "USN-9153-1: cloud-init vulnerability",
    "summary": "It was discovered that cloud-init incorrectly handled certain errors when configuring user passwords on systems with SSSD installed but not configured. An attacker could possibly use this issue to access affected user accounts without a password, resulting in unauthorized access.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9153-1",
    "publishedAt": "2026-11-18T19:07:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9153-1-cloud-init-vulnerability",
      "article-8ef719c2",
      "8ef719c2",
      "usn-9153-1-cloud-init-vulnerability-7e7953"
    ]
  },
  {
    "slug": "f5-and-cloud-providers-patch-critical-nginx-http-2-907bc7c6",
    "title": "F5 and Cloud Providers Patch Critical NGINX HTTP/2 Flaws",
    "summary": "F5 Networks and cloud providers issued critical security advisories addressing multiple vulnerabilities in open-source NGINX and NGINX Plus. Tracked under CVE-2026-123007 and CVE-2026-123633, the HTTP/2 flaws allow unauthenticated remote attackers to trigger code execution and denial-of-service conditions via malformed requests. Administrators must immediately apply the latest upstream NGINX updates and deploy vendor mitigations to prevent exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/f5-security-advisory-av26-1174",
    "publishedAt": "2026-11-18T19:02:27.000Z",
    "cves": [
      "CVE-2026-123633",
      "CVE-2026-123007",
      "CVE-2026-123634",
      "CVE-2026-113425",
      "CVE-2026-121810",
      "CVE-2026-118899"
    ],
    "additionalSources": [
      {
        "source": "Help Net Security",
        "sourceUrl": "https://www.helpnetsecurity.com/2026/11/19/nginx2root-nginx-vulnerabilities/"
      },
      {
        "source": "AWS Security Bulletins",
        "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-192-aws/"
      }
    ],
    "aliases": [
      "f5-and-cloud-providers-patch-critical-nginx-http-2",
      "article-907bc7c6",
      "907bc7c6",
      "f5-and-cloud-providers-patch-critical-nginx-http-2-3f3de0",
      "f5-and-cloud-providers-patch-critical-nginx-http-2-flaws"
    ]
  },
  {
    "slug": "senators-push-white-house-ai-cyber-defense-initiat-e388310a",
    "title": "Senators Push White House AI Cyber Defense Initiative",
    "summary": "Bipartisan senators urged the White House to launch a national initiative to strengthen defenses against AI-enabled cyber threats. The call follows recent incidents where adversaries leveraged generative AI to craft sophisticated phishing and malware campaigns. Stakeholders should monitor emerging AI threat frameworks and collaborate with federal agencies to develop mitigation guidelines.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/ai-cyber-white-house",
    "publishedAt": "2026-11-18T19:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "senators-push-white-house-ai-cyber-defense-initiat",
      "article-e388310a",
      "e388310a",
      "senators-push-white-house-ai-cyber-defense-initiat-3c0ebb",
      "senators-push-white-house-ai-cyber-defense-initiative"
    ]
  },
  {
    "slug": "chrome-early-stable-desktop-update-released-c4ac022c",
    "title": "Chrome Early Stable Desktop Update Released",
    "summary": "Google Chrome released an early stable update for desktop platforms, version 159.0.8154.13/.14, targeting Windows and Mac users. The update includes minor bug fixes and performance improvements, with a full change log available in the release notes. Users are encouraged to install the update via the browser's update mechanism; no security patches are addressed in this release.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/early-stable-update-for-desktop_01707050408.html",
    "publishedAt": "2026-11-18T18:58:35.648Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-early-stable-desktop-update-released",
      "article-c4ac022c",
      "c4ac022c",
      "chrome-early-stable-desktop-update-released-70d958"
    ]
  },
  {
    "slug": "nginx-http-2-flaw-enables-unauthenticated-remote-c-96906100",
    "title": "NGINX HTTP/2 Flaw Enables Unauthenticated Remote Code Execution",
    "summary": "A decade-old vulnerability in NGINX's HTTP/2 implementation (CVE-2026-123007) allows unauthenticated attackers to execute arbitrary code on servers with HTTP/2 enabled. The flaw, present since version 1.9.5, stems from improper handling of HTTP/2 frames leading to memory corruption and unauthenticated remote code execution. F5 released patched versions 1.31.9 and 1.30.7; administrators must upgrade immediately to mitigate exploitation risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/10-year-old-nginx-http2-flaw-lets.html",
    "publishedAt": "2026-11-18T18:31:17.000Z",
    "cves": [
      "CVE-2026-123007"
    ],
    "additionalSources": [],
    "aliases": [
      "nginx-http-2-flaw-enables-unauthenticated-remote-c",
      "article-96906100",
      "96906100",
      "nginx-http-2-flaw-enables-unauthenticated-remote-c-2def97",
      "nginx-http-2-flaw-enables-unauthenticated-remote-code-execut"
    ]
  },
  {
    "slug": "chrome-beta-desktop-update-released-e6aa2faa",
    "title": "Chrome Beta Desktop Update Released",
    "summary": "Google Chrome updated its Beta channel to version 159.0.8154.13 for Windows, Mac, and Linux desktop users. The release contains incremental bug fixes and stability improvements, with a partial change log posted in the Git log. Users should update via the browser's update settings; no critical security patches are included currently.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-beta-for-desktop-update_01411055938.html",
    "publishedAt": "2026-11-18T18:28:33.180Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-beta-desktop-update-released",
      "article-e6aa2faa",
      "e6aa2faa",
      "chrome-beta-desktop-update-released-3a467f"
    ]
  },
  {
    "slug": "cve-2026-130638-path-traversal-in-the-object-detec-16072b1a",
    "title": "CVE-2026-130638 - Path traversal in the object detection dataset preparation tool in AutoGluon MultiModal",
    "summary": "Bulletin ID: 2026-188-AWS Publication Date: 11/18/2026 10:00 AM PST Description: Relative path traversal in the object detection dataset preparation tool in AutoGluon Multimodal before 1.6.0 might allow adversary-in-the-middle attackers to write arbitrary files with the privileges of the user running the tool via a crafted dataset archive substituted for a dataset downloaded over plaintext HTTP.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-188-aws/",
    "publishedAt": "2026-11-18T18:18:11.000Z",
    "cves": [
      "CVE-2026-130638"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-130638-path-traversal-in-the-object-detec",
      "article-16072b1a",
      "16072b1a",
      "cve-2026-130638-path-traversal-in-the-object-detec-936eef",
      "cve-2026-130638-path-traversal-in-the-object-detection-datas"
    ]
  },
  {
    "slug": "f5-big-ip-flaws-threaten-traffic-management-microk-980da029",
    "title": "F5 BIG-IP Flaws Threaten Traffic Management Microkernel",
    "summary": "F5 disclosed six critical BIG-IP flaws that can crash the Traffic Management Microkernel (TMM) without authentication, disrupting traffic until restart. Each flaw requires a specific virtual-server setup, such as an iRule with a particular command or an APM policy with two agent types, and may enable remote code execution. F5 urges immediate patching and configuration review to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/f5-warns-6-critical-big-ip-flaws-can.html",
    "publishedAt": "2026-11-18T18:15:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "f5-big-ip-flaws-threaten-traffic-management-microk",
      "article-980da029",
      "980da029",
      "f5-big-ip-flaws-threaten-traffic-management-microk-437859",
      "f5-big-ip-flaws-threaten-traffic-management-microkernel"
    ]
  },
  {
    "slug": "ghostmap-ebpf-rootkit-conceals-ironworm-malware-on-3496fb98",
    "title": "GhostMap eBPF Rootkit Conceals IronWorm Malware on Linux",
    "summary": "Attackers are deploying the GhostMap eBPF rootkit to hide IronWorm malware processes, files, and network sockets from standard Linux inspection tools like /proc/net/tcp. The rootkit leverages extended Berkeley Packet Filter hooks to manipulate kernel-level visibility, allowing malicious listeners to evade detection while remaining operational.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-use-ghostmap-ebpf-rootkit/",
    "publishedAt": "2026-11-18T18:11:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ghostmap-ebpf-rootkit-conceals-ironworm-malware-on",
      "article-3496fb98",
      "3496fb98",
      "ghostmap-ebpf-rootkit-conceals-ironworm-malware-on-719949",
      "ghostmap-ebpf-rootkit-conceals-ironworm-malware-on-linux"
    ]
  },
  {
    "slug": "arctic-wolf-releases-quarterly-innovation-update-a1e410dd",
    "title": "Arctic Wolf Releases Quarterly Innovation Update",
    "summary": "Arctic Wolf published its November 2026 quarterly update, outlining new product features, strategic initiatives, and upcoming roadmap milestones. The release highlights enhancements in threat detection, managed detection and response services, and expanded partner integrations. Customers are encouraged to review the full briefing for detailed feature specifications and to schedule a roadmap discussion with Arctic Wolf.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/on-demand-webinar-uk/whats-new-and-whats-next-arctic-wolf-november-2026-update/",
    "publishedAt": "2026-11-18T18:10:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "arctic-wolf-releases-quarterly-innovation-update",
      "article-a1e410dd",
      "a1e410dd",
      "arctic-wolf-releases-quarterly-innovation-update-7fd065"
    ]
  },
  {
    "slug": "arctic-wolf-announces-november-2026-product-update-1aedb6a5",
    "title": "Arctic Wolf Announces November 2026 Product Update",
    "summary": "Arctic Wolf released its November 2026 quarterly update, outlining new security services and roadmap milestones. The update highlights enhancements to threat detection, incident response automation, and expanded partner integrations. Customers are encouraged to review the release notes and schedule integration testing to align with the new capabilities in the next quarter.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/on-demand-webinar/whats-new-whats-next-with-arctic-wolf-november-2026-update/",
    "publishedAt": "2026-11-18T18:02:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "arctic-wolf-announces-november-2026-product-update",
      "article-1aedb6a5",
      "1aedb6a5",
      "arctic-wolf-announces-november-2026-product-update-7a1038"
    ]
  },
  {
    "slug": "hackers-use-hidden-cron-jobs-to-reinstall-malware-8db0ac7a",
    "title": "Hackers Use Hidden Cron Jobs to Reinstall Malware on Firewalls and Routers Every 5 Minutes",
    "summary": "A Linux botnet is hiding in a place most network teams never look: the scheduled jobs on their firewalls, routers and switches. If a responder kills the malware and deletes the file, a hidden cron job downloads it again within five minutes.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-use-hidden-cron-jobs/",
    "publishedAt": "2026-11-18T18:01:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-use-hidden-cron-jobs-to-reinstall-malware",
      "article-8db0ac7a",
      "8db0ac7a",
      "hackers-use-hidden-cron-jobs-to-reinstall-malware-63e5fa",
      "hackers-use-hidden-cron-jobs-to-reinstall-malware-on-firewal"
    ]
  },
  {
    "slug": "docker-model-runner-flaw-enables-container-escapes-5c86d152",
    "title": "Docker Model Runner Flaw Enables Container Escapes",
    "summary": "Security researchers disclosed an unauthenticated argument-injection vulnerability affecting Docker Model Runner in Docker Desktop. Cataloged as CVE-2026-28400, the primitive enables default-privilege containers to corrupt VM data disks and achieve host code execution across macOS and Windows environments. Security teams must update Docker Desktop installations to mitigate host file read and write primitives exploited through model runner workflows.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Zero Day Initiative",
    "sourceUrl": "https://www.thezdi.com/blog/2026/11/17/hostile-inference-exploiting-docker-model-runner-for-container-escapes",
    "publishedAt": "2026-11-18T17:23:52.000Z",
    "cves": [
      "CVE-2026-28400"
    ],
    "additionalSources": [],
    "aliases": [
      "docker-model-runner-flaw-enables-container-escapes",
      "article-5c86d152",
      "5c86d152",
      "docker-model-runner-flaw-enables-container-escapes-61cd3e"
    ]
  },
  {
    "slug": "critical-apache-roller-rce-flaw-under-active-explo-0ec06f71",
    "title": "Critical Apache Roller RCE Flaw Under Active Exploitation, No Authentication Required",
    "summary": "A critical security flaw in Apache Roller, an open-source, Java-based blogging platform, has come under active exploitation in the wild, according to the Apache Software Foundation (ASF) The vulnerability, tracked as CVE-2026-129448 (CVSS score: 9.8), is a case of unauthenticated deserialization in the XML-RPC endpoint that could lead to remote code execution.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/critical-apache-roller-rce-flaw-under.html",
    "publishedAt": "2026-11-18T17:10:45.000Z",
    "cves": [
      "CVE-2026-129448"
    ],
    "additionalSources": [],
    "aliases": [
      "critical-apache-roller-rce-flaw-under-active-explo",
      "article-0ec06f71",
      "0ec06f71",
      "critical-apache-roller-rce-flaw-under-active-explo-4e2bbc",
      "critical-apache-roller-rce-flaw-under-active-exploitation-no"
    ]
  },
  {
    "slug": "malicious-pypi-package-impersonates-microsoft-agen-2cc616e2",
    "title": "Malicious PyPI Package Impersonates Microsoft Agent Framework",
    "summary": "Threat actors compromised Microsoft's official Agent Framework Python package hosted on the PyPI repository to execute supply chain attacks. Attackers published two malicious package versions engineered to steal cloud credentials and sensitive system information from developer environments. Security teams and developers should immediately audit Python dependencies, remove affected package versions, and rotate potentially exposed credentials.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/microsofts-agent-framework-pypi-package-compromised-to-steal-credentials/",
    "publishedAt": "2026-11-18T16:58:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "malicious-pypi-package-impersonates-microsoft-agen",
      "article-2cc616e2",
      "2cc616e2",
      "malicious-pypi-package-impersonates-microsoft-agen-4d12ee",
      "malicious-pypi-package-impersonates-microsoft-agent-framewor"
    ]
  },
  {
    "slug": "openjdk-runtime-vulnerability-exposes-java-applica-1c76e78e",
    "title": "OpenJDK Runtime Vulnerability Exposes Java Applications to RCE",
    "summary": "An unauthenticated memory corruption flaw in the OpenJDK runtime, designated as CVE-2026-114938 and dubbed Java4Shell, impacts global enterprise applications. Discovered using artificial intelligence analysis, the vulnerability allows remote attackers to achieve arbitrary code execution and complete system takeover. Enterprise security teams must audit their Java software ecosystem and prioritize applying runtime vendor patches across all deployments.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/vulnerabilities-threats/java4shell-flaw-threatens-global-java-application-ecosystem",
    "publishedAt": "2026-11-18T16:54:52.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "openjdk-runtime-vulnerability-exposes-java-applica",
      "article-1c76e78e",
      "1c76e78e",
      "openjdk-runtime-vulnerability-exposes-java-applica-6dc22d",
      "openjdk-runtime-vulnerability-exposes-java-applications-to-r"
    ]
  },
  {
    "slug": "chrome-beta-159-for-ios-released-98fc33db",
    "title": "Chrome Beta 159 for iOS Released",
    "summary": "Google released Chrome Beta 159 for iOS, version 159.0.8154.17, adding new features and fixes. The update includes changes listed in the Git log, with developers encouraged to report issues via the bug filing system. Security teams should verify compatibility and monitor for regressions in the beta release in the upcoming release cycle.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-beta-for-ios-update_0690310551.html",
    "publishedAt": "2026-11-18T16:28:32.710Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-beta-159-for-ios-released",
      "article-98fc33db",
      "98fc33db",
      "chrome-beta-159-for-ios-released-6347ba"
    ]
  },
  {
    "slug": "gstreamer-vulnerability-enables-denial-of-service-2421dbfe",
    "title": "GStreamer Vulnerability Enables Denial of Service or Code Execution",
    "summary": "Ubuntu discovered that GStreamer mishandles malformed data, which could let an attacker trigger a denial of service or execute arbitrary code. The flaw stems from inadequate input validation during media pipeline parsing, exposing systems to remote code execution when crafted data is processed. Apply the latest GStreamer update or Ubuntu security patch to eliminate the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9152-1",
    "publishedAt": "2026-11-18T16:24:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gstreamer-vulnerability-enables-denial-of-service",
      "article-2421dbfe",
      "2421dbfe",
      "gstreamer-vulnerability-enables-denial-of-service-7e7956",
      "gstreamer-vulnerability-enables-denial-of-service-or-code-ex"
    ]
  },
  {
    "slug": "offsec-converts-recent-vulnerabilities-into-hands-97d5622b",
    "title": "OffSec Converts Recent Vulnerabilities Into Hands-On Labs",
    "summary": "OffSec released over 80 hands-on labs built around recent real-world vulnerabilities including PHPH2Shell, expanding its training catalog within two weeks. The labs map to actual CVEs and support a Level 20 Learn One promotion offering $550 off for enrolled learners. Security teams can use the curriculum to practice detection and remediation techniques against these threats.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/offsec-php2shell-black-october-hands-on-labs/",
    "publishedAt": "2026-11-18T16:16:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "offsec-converts-recent-vulnerabilities-into-hands",
      "article-97d5622b",
      "97d5622b",
      "offsec-converts-recent-vulnerabilities-into-hands-7f223b",
      "offsec-converts-recent-vulnerabilities-into-hands-on-labs"
    ]
  },
  {
    "slug": "rhsa-2026-100573-critical-openjdk-25-0-5-1-securit-6e0aa222",
    "title": "RHSA-2026:100573: Critical: OpenJDK 25.0.5.1 Security Update for Portable Linux Builds",
    "summary": "An update is now available for OpenJDK. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100573",
    "publishedAt": "2026-11-18T16:14:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100573-critical-openjdk-25-0-5-1-securit",
      "article-6e0aa222",
      "6e0aa222",
      "rhsa-2026-100573-critical-openjdk-25-0-5-1-securit-2ee081",
      "rhsa-2026-100573-critical-openjdk-25-0-5-1-security-update-f"
    ]
  },
  {
    "slug": "nginx-http-2-flaws-enable-remote-code-execution-b81237d2",
    "title": "NGINX HTTP/2 Flaws Enable Remote Code Execution",
    "summary": "Two critical NGINX HTTP/2 vulnerabilities (CVE-2026-123633, CVE-2026-123007) enable remote code execution on servers accepting HTTP/2 connections. The flaws trigger memory corruption during HTTP/2 stream handling; CVSS scores 9.8 and 9.6, and no public exploit yet but potential for server compromise. NGINX released patches on November 18, 2026; administrators should update to the latest release or disable HTTP/2 until patched.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/nginx-http-2-vulnerabilities/",
    "publishedAt": "2026-11-18T16:05:50.000Z",
    "cves": [
      "CVE-2026-123633",
      "CVE-2026-123007"
    ],
    "additionalSources": [],
    "aliases": [
      "nginx-http-2-flaws-enable-remote-code-execution",
      "article-b81237d2",
      "b81237d2",
      "nginx-http-2-flaws-enable-remote-code-execution-5ea75f"
    ]
  },
  {
    "slug": "microsoft-updates-cvss-for-ad-domain-services-cve-ede8431a",
    "title": "Microsoft Updates CVSS for AD Domain Services CVE-2026-118148",
    "summary": "Microsoft updated the CVSS score for the Active Directory Domain Services elevation of privilege vulnerability, CVE-2026-118148. The revision does not change the flaw’s root cause or exploitability; it remains a local privilege escalation requiring authenticated domain controller access. Administrators should review the updated FAQ for guidance on monitoring and applying standard domain services hardening, as no new patch is required.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118148",
    "publishedAt": "2026-11-18T16:00:00.000Z",
    "cves": [
      "CVE-2026-118148"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-cvss-for-ad-domain-services-cve",
      "article-ede8431a",
      "ede8431a",
      "microsoft-updates-cvss-for-ad-domain-services-cve-1fe923",
      "microsoft-updates-cvss-for-ad-domain-services-cve-2026-11814"
    ]
  },
  {
    "slug": "cisco-patches-clamav-flaws-causing-denial-of-servi-68fc4068",
    "title": "Cisco Patches ClamAV Flaws Causing Denial of Service",
    "summary": "Cisco addressed multiple ClamAV vulnerabilities affecting its products that let a remote attacker bypass configured file and scan time limits, causing denial of service that interrupts scanning operations. The Security Impact Rating is High on Windows platforms like Cisco Secure Endpoint Connector, Medium elsewhere, with no available workarounds. Cisco released software updates; administrators should apply them promptly.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-clamav-multi-e93M3vdA?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DClamAV+Vulnerabilities+Affecting+Cisco+Products%3A+November+2026%26vs_k%3D1",
    "publishedAt": "2026-11-18T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-patches-clamav-flaws-causing-denial-of-servi",
      "article-68fc4068",
      "68fc4068",
      "cisco-patches-clamav-flaws-causing-denial-of-servi-59933d",
      "cisco-patches-clamav-flaws-causing-denial-of-service"
    ]
  },
  {
    "slug": "vulnerability-in-oracle-openjdk-java4shell-affecti-e1a485fe",
    "title": "Vulnerability in Oracle OpenJDK (Java4Shell) Affecting Cisco Products: November 2026",
    "summary": "On November 17, 2026, Oracle announced the availability of fixes for a vulnerability in OpenJDK that could lead to remote code execution identified by CVE-2026-114938. For additional information, see the Talos blog post: Talos Threat Advisory CVE-2026-114938: Critical vulnerability in OpenJDK JAVA This advisory will be updated as additional information becomes available.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-nov2026-java-rce-eCa6ss9z?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DVulnerability+in+Oracle+OpenJDK+%28Java4Shell%29+Affecting+Cisco+Products%3A+November+2026%26vs_k%3D1",
    "publishedAt": "2026-11-18T16:00:00.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "vulnerability-in-oracle-openjdk-java4shell-affecti",
      "article-e1a485fe",
      "e1a485fe",
      "vulnerability-in-oracle-openjdk-java4shell-affecti-3acc1e",
      "vulnerability-in-oracle-openjdk-java4shell-affecting-cisco-p"
    ]
  },
  {
    "slug": "emacs-prior-to-31-2-allows-local-code-execution-c938cfb4",
    "title": "Emacs Prior to 31.2 Allows Local Code Execution",
    "summary": "GNU Emacs versions before 31.2 contain a local code execution flaw triggered by malicious .dir-locals.el files. The vulnerability bypasses auto-mode-alist checks, allowing an attacker to run arbitrary code when a user opens a file; no public exploit reported. Users should upgrade to Emacs 31.2 or later, or disable .dir-locals.el processing until a patch is released.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/gnu-security-advisory-av26-1173",
    "publishedAt": "2026-11-18T15:37:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "emacs-prior-to-31-2-allows-local-code-execution",
      "article-c938cfb4",
      "c938cfb4",
      "emacs-prior-to-31-2-allows-local-code-execution-7658c9"
    ]
  },
  {
    "slug": "armornet-launches-ai-driven-supply-chain-risk-plat-68fb3902",
    "title": "Armornet Launches AI-Driven Supply-Chain Risk Platform",
    "summary": "Armornet introduces an AI-driven platform that maps teams’ vendor dependencies and assigns continuous risk scores to each supplier. The solution monitors the software supply chain from code to deployment, providing real-time visibility into potential security gaps. Security teams can use the platform’s insights to prioritize remediation and enforce stricter vendor controls.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/armornet-ai-software-supply-chain-vendor-security/",
    "publishedAt": "2026-11-18T15:20:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "armornet-launches-ai-driven-supply-chain-risk-plat",
      "article-68fb3902",
      "68fb3902",
      "armornet-launches-ai-driven-supply-chain-risk-plat-27171a",
      "armornet-launches-ai-driven-supply-chain-risk-platform"
    ]
  },
  {
    "slug": "arctic-wolf-named-visionary-in-ai-soc-industry-rep-97c46dd2",
    "title": "Arctic Wolf Named Visionary in AI SOC Industry Report",
    "summary": "Frost & Sullivan named cybersecurity provider Arctic Wolf a Visionary Leader in its Frost Radar AI Security Operations Centers 2026 report. According to the report, the evaluation recognizes the Aurora Agentic SOC platform for combining agentic artificial intelligence with human expertise. Security teams can review the research metrics to assess operational AI analytics capabilities.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/press-releases/arctic-wolf-named-a-visionary-leader-in-frost-radar-for-ai-security-operations-centers/",
    "publishedAt": "2026-11-18T15:16:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "arctic-wolf-named-visionary-in-ai-soc-industry-rep",
      "article-97c46dd2",
      "97c46dd2",
      "arctic-wolf-named-visionary-in-ai-soc-industry-rep-5abc7a",
      "arctic-wolf-named-visionary-in-ai-soc-industry-report"
    ]
  },
  {
    "slug": "russian-state-hackers-exploit-stolen-cloud-data-fo-31d1ba6a",
    "title": "Russian State Hackers Exploit Stolen Cloud Data for Espionage",
    "summary": "Russian state-backed threat actors leverage stolen cloud credentials to impersonate legitimate contacts and infiltrate target organizations. The method bypasses authentication, granting attackers access to internal networks and enabling data exfiltration from professional contacts; no specific vulnerability exploitation is reported. Security teams should enforce multi-factor authentication, monitor for anomalous login patterns, and review cloud access logs for suspicious activity.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/russia-cyber-espionage-google",
    "publishedAt": "2026-11-18T15:15:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russian-state-hackers-exploit-stolen-cloud-data-fo",
      "article-31d1ba6a",
      "31d1ba6a",
      "russian-state-hackers-exploit-stolen-cloud-data-fo-1fddff",
      "russian-state-hackers-exploit-stolen-cloud-data-for-espionag"
    ]
  },
  {
    "slug": "nginx-unauthenticated-rce-via-http-2-cve-2026-1236-d89a704c",
    "title": "NGINX Unauthenticated RCE via HTTP/2 CVE-2026-123633, CVE-2026-123007",
    "summary": "NGINX suffers unauthenticated RCE via CVE-2026-123633 and CVE-2026-123007, exploiting HTTP/2 parsing to compromise web servers, APIs, and sensitive data. The flaw allows arbitrary code execution without authentication, a high-severity RCE with a CVSS score above 9.0. NGINX released an out-of-band patch updating the HTTP/2 parser; apply it immediately and disable HTTP/2 on legacy systems as a temporary fix.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities",
    "publishedAt": "2026-11-18T15:13:20.000Z",
    "cves": [
      "CVE-2026-123633",
      "CVE-2026-123007"
    ],
    "additionalSources": [],
    "aliases": [
      "nginx-unauthenticated-rce-via-http-2-cve-2026-1236",
      "article-d89a704c",
      "d89a704c",
      "nginx-unauthenticated-rce-via-http-2-cve-2026-1236-757983",
      "nginx-unauthenticated-rce-via-http-2-cve-2026-123633-cve-202"
    ]
  },
  {
    "slug": "from-deepfakes-to-helpdesk-impersonation-why-stron-19bda175",
    "title": "From Deepfakes to Helpdesk Impersonation: Why Stronger Verification Matters",
    "summary": "Attackers are using deepfakes, helpdesk impersonation, and fake IT support requests to deceive employees and gain unauthorized access to corporate systems. Specops Software examines real-world attacks and explains how stronger identity verification can help organizations prevent social engineering threats.",
    "category": "General",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/from-deepfakes-to-helpdesk-impersonation-why-stronger-verification-matters/",
    "publishedAt": "2026-11-18T15:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "from-deepfakes-to-helpdesk-impersonation-why-stron",
      "article-19bda175",
      "19bda175",
      "from-deepfakes-to-helpdesk-impersonation-why-stron-783f6f",
      "from-deepfakes-to-helpdesk-impersonation-why-stronger-verifi"
    ]
  },
  {
    "slug": "cloudflare-waf-blocks-java4shell-exploit-7a6ccdff",
    "title": "Cloudflare WAF Blocks Java4Shell Exploit",
    "summary": "Java4Shell, a critical memory-corruption flaw in OpenJDK’s Base64 decoder, allows remote code execution on affected Java runtimes. Identified as CVE-2026-114938, the vulnerability exploits a decoder buffer overflow triggered by crafted Base64 payloads, enabling unauthenticated code execution. Cloudflare’s WAF now offers six managed rules that log matching requests by default; organizations should also apply the latest OpenJDK patches.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/java4shell-waf-protection/",
    "publishedAt": "2026-11-18T14:52:10.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "cloudflare-waf-blocks-java4shell-exploit",
      "article-7a6ccdff",
      "7a6ccdff",
      "cloudflare-waf-blocks-java4shell-exploit-7b5d2a"
    ]
  },
  {
    "slug": "british-hacker-sentenced-six-years-for-crypto-thef-38b8c730",
    "title": "British Hacker Sentenced Six Years for Crypto Theft",
    "summary": "Tyler Robert Buchanan, a 24-year-old from Dundee, received a six-year prison sentence for orchestrating an $11.6 million cryptocurrency theft operation. Microsoft labeled the group as one of the most dangerous financial criminal collectives, targeting victims via phishing and credential theft. Law enforcement agencies should continue monitoring for related phishing campaigns and enforce stricter credential hygiene to mitigate similar attacks.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/british-hacker-gets-six-year-sentence-scattered-spider",
    "publishedAt": "2026-11-18T14:48:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "british-hacker-sentenced-six-years-for-crypto-thef",
      "article-38b8c730",
      "38b8c730",
      "british-hacker-sentenced-six-years-for-crypto-thef-37027f",
      "british-hacker-sentenced-six-years-for-crypto-theft"
    ]
  },
  {
    "slug": "ox-security-unveils-ox-radar-and-response-center-e1b217b8",
    "title": "OX Security Unveils OX Radar and Response Center",
    "summary": "OX Security launched OX Radar and Response Center, a platform that automatically monitors critical vulnerabilities and supply chain threats for customers. The system aggregates threat data, evaluates exposure, and prioritizes remediation, enabling teams to focus on high-priority risks. No vendor patch is required; organizations should integrate the tool into existing workflows for continuous threat visibility.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ox-security-ox-radar-response-center/",
    "publishedAt": "2026-11-18T14:30:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ox-security-unveils-ox-radar-and-response-center",
      "article-e1b217b8",
      "e1b217b8",
      "ox-security-unveils-ox-radar-and-response-center-2ac2aa"
    ]
  },
  {
    "slug": "new-eggstreme-malware-variant-goes-silent-to-evade-3d8d99c0",
    "title": "New EggStreme Malware Variant Goes Silent to Evade Security Tools in Government Attacks",
    "summary": "The suspected Chinese advanced persistent threat (APT) group behind the sophisticated EggStreme malware has rebuilt its toolkit as it continues to target government organizations in the Philippines. \"When attackers are exposed, the cheap response is to rotate,\" Bitdefender said in a technical report shared with The Hacker News.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/eggstreme-hackers-rebuild-malware-with.html",
    "publishedAt": "2026-11-18T14:11:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "new-eggstreme-malware-variant-goes-silent-to-evade",
      "article-3d8d99c0",
      "3d8d99c0",
      "new-eggstreme-malware-variant-goes-silent-to-evade-63ba9f",
      "new-eggstreme-malware-variant-goes-silent-to-evade-security-"
    ]
  },
  {
    "slug": "microsoft-s-ai-uncovers-99-security-issues-in-expr-dd12e280",
    "title": "Microsoft’s AI Uncovers 99 Security Issues in Express, ImageMagick and Other Open-Source Projects",
    "summary": "Microsoft and GitHub sent 99 verified security reports to six open-source projects, including Express and ImageMagick, after an AI pilot identified thousands of potential vulnerabilities. In its Nov. 17 announcement, GitHub said maintainers had fixed 55 issues as of Nov. 15.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsofts-ai-uncovers-99-security-issues/",
    "publishedAt": "2026-11-18T14:06:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-s-ai-uncovers-99-security-issues-in-expr",
      "article-dd12e280",
      "dd12e280",
      "microsoft-s-ai-uncovers-99-security-issues-in-expr-76a8c4",
      "microsoft-s-ai-uncovers-99-security-issues-in-express-imagem"
    ]
  },
  {
    "slug": "brazilian-signature-apps-harbor-rce-vulnerabilitie-7e1baafb",
    "title": "Brazilian Signature Apps Harbor RCE Vulnerabilities",
    "summary": "Brazilian government-sanctioned signature apps expose authentication middleware to remote code execution via unvalidated input. The flaw lets attackers inject code during document signing, potentially compromising legal documents and enabling fraud; no public exploit confirmed. Patches are pending; security teams should disable vulnerable middleware, apply vendor updates when released, and monitor for unauthorized signing activity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/vulnerabilities-threats/major-brazilian-signature-app-rce-fraud",
    "publishedAt": "2026-11-18T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "brazilian-signature-apps-harbor-rce-vulnerabilitie",
      "article-7e1baafb",
      "7e1baafb",
      "brazilian-signature-apps-harbor-rce-vulnerabilitie-38dc37",
      "brazilian-signature-apps-harbor-rce-vulnerabilities"
    ]
  },
  {
    "slug": "github-security-advisory-av26-1172-7d0fa86e",
    "title": "GitHub security advisory (AV26-1172)",
    "summary": "Serial number: AV26-1172 Date: November 18, 2026 As of November 18, 2026, GitHub is affected by vulnerabilities in the following product: Enterprise Server 3.19.0 Prior to 3.19.16 3.20.0 Prior to 3.20.12 3.21.0 Prior to 3.21.10 3.22.0 Prior to 3.22.5 The Cyber Centre encourages users and administrators to review the provided web links and apply any necessary updates as they become available.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/github-security-advisory-av26-1172",
    "publishedAt": "2026-11-18T13:40:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "github-security-advisory-av26-1172",
      "article-7d0fa86e",
      "7d0fa86e",
      "github-security-advisory-av26-1172-6bfa9e"
    ]
  },
  {
    "slug": "gentlemen-ransomware-gang-claims-nvidia-breach-2d18cebf",
    "title": "Gentlemen Ransomware Gang Claims NVIDIA Breach",
    "summary": "The Gentlemen ransomware group posted a claim of breaching NVIDIA on its dark-web leak site. The post includes a countdown and ransom talk references but lacks sample files or confirmed compromise evidence. NVIDIA has not publicly confirmed a breach, and no definitive proof of infiltration has been disclosed in the public domain.",
    "category": "Ransomware",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/nvidia-data-breach-claim/",
    "publishedAt": "2026-11-18T13:37:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gentlemen-ransomware-gang-claims-nvidia-breach",
      "article-2d18cebf",
      "2d18cebf",
      "gentlemen-ransomware-gang-claims-nvidia-breach-60b88c"
    ]
  },
  {
    "slug": "russian-apt-impersonates-hacked-firm-employee-to-t-2d9b132f",
    "title": "Russian APT Impersonates Hacked Firm Employee to Target US Org",
    "summary": "A Russian APT used stolen Star Blizzard credentials to pose as an employee of a compromised firm and phish a U.S. organization. The attack leveraged data and social engineering to gain initial access by exploiting the target's trust in the impersonated identity. Security teams should verify employee identities, enforce MFA, and monitor for anomalous credential usage to mitigate impersonation attacks.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/russian-apt-poses-as-employee-of-hacked-firm-to-breach-another-us-organization/",
    "publishedAt": "2026-11-18T13:33:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russian-apt-impersonates-hacked-firm-employee-to-t",
      "article-2d9b132f",
      "2d9b132f",
      "russian-apt-impersonates-hacked-firm-employee-to-t-252ccd",
      "russian-apt-impersonates-hacked-firm-employee-to-target-us-o"
    ]
  },
  {
    "slug": "malwarebytes-engineers-secure-their-own-antivirus-b2853287",
    "title": "Malwarebytes Engineers Secure Their Own Antivirus",
    "summary": "Malwarebytes engineers discuss protecting their antivirus platform from malware that could disable or bypass its defenses. The article outlines defensive strategies, including code integrity checks, runtime monitoring, and secure update mechanisms to thwart disabling attacks. Security teams should adopt similar integrity verification and update safeguards to maintain antivirus resilience against disabling malware.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/inside-malwarebytes/2026/11/who-protects-the-antivirus-how-we-secure-malwarebytes-itself",
    "publishedAt": "2026-11-18T13:32:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "malwarebytes-engineers-secure-their-own-antivirus",
      "article-b2853287",
      "b2853287",
      "malwarebytes-engineers-secure-their-own-antivirus-564ccb"
    ]
  },
  {
    "slug": "google-chrome-vulnerability-affects-versions-befor-a7e6781c",
    "title": "Google Chrome Vulnerability Affects Versions Before 158.0.8127.36",
    "summary": "A vulnerability affects Google Chrome stable channel desktop versions before 158.0.8127.36 on Windows, Mac, and Linux. The flaw, lacking a CVE ID, is not publicly exploited but could enable code execution or session compromise. Google advises users to review the advisory and install the latest Chrome update promptly to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/google-security-advisory-av26-1171",
    "publishedAt": "2026-11-18T13:31:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-chrome-vulnerability-affects-versions-befor",
      "article-a7e6781c",
      "a7e6781c",
      "google-chrome-vulnerability-affects-versions-befor-170ca3",
      "google-chrome-vulnerability-affects-versions-before-158-0-81"
    ]
  },
  {
    "slug": "equinor-cyberattack-disrupts-internal-services-7ced0b19",
    "title": "Equinor Cyberattack Disrupts Internal Services",
    "summary": "A cyberattack targeted Equinor’s IT infrastructure, disrupting internal services while reportedly sparing oil and gas production. The intrusion likely involved unauthorized access to internal networks, though no data exfiltration has been confirmed. Security teams should isolate affected systems, conduct forensic analysis, and apply any available vendor patches to prevent further compromise.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/norway-equinor-cyberattack-energy",
    "publishedAt": "2026-11-18T13:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "equinor-cyberattack-disrupts-internal-services",
      "article-7ced0b19",
      "7ced0b19",
      "equinor-cyberattack-disrupts-internal-services-503070"
    ]
  },
  {
    "slug": "oracle-vulnerabilities-span-multiple-products-69bc02a2",
    "title": "Oracle Vulnerabilities Span Multiple Products",
    "summary": "Oracle disclosed vulnerabilities in several products, including Helidon, JD Edwards EnterpriseOne Localizations, MySQL Cluster, MySQL Server, MySQL Workbench, Oracle APEX, Access Manager, Agile PLM, and Oracle Communications components. No CVE IDs or exploit details are given, but the flaws could allow unauthorized access or code execution. Oracle advises applying the available patches or following vendor guidance to mitigate the risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/oracle-corporation-security-advisory-av26-1170",
    "publishedAt": "2026-11-18T12:51:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "oracle-vulnerabilities-span-multiple-products",
      "article-69bc02a2",
      "69bc02a2",
      "oracle-vulnerabilities-span-multiple-products-490b08"
    ]
  },
  {
    "slug": "chrome-beta-159-released-for-android-aba108b7",
    "title": "Chrome Beta 159 Released for Android",
    "summary": "Google released Chrome Beta 159 (159.0.8154.18) for Android via Google Play. The update includes partial changes from the Git log, with new features detailed on the Chromium blog and web platform updates. Users can report issues via bug filing; no security fixes are mentioned in this beta release.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-beta-for-android-update_01196380134.html",
    "publishedAt": "2026-11-18T12:28:32.268Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-beta-159-released-for-android",
      "article-aba108b7",
      "aba108b7",
      "chrome-beta-159-released-for-android-3504a5"
    ]
  },
  {
    "slug": "tpm-lockout-bypass-cracks-windows-hello-bitlocker-316b7959",
    "title": "TPM Lockout Bypass Cracks Windows Hello BitLocker PINs",
    "summary": "Researchers found TPM lockout for Windows Hello and BitLocker PINs resettable by opening PC cases on AMD and some Intel systems. This physical flaw enables offline brute-forcing of short PINs, with lab tests cracking a four-digit Hello PIN and six-digit BitLocker PIN within days. Mitigation requires longer PINs or passwords, as no firmware patch addresses the hardware lockout reset mechanism.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/flash-chip-attack-bypasses-tpm-lockout.html",
    "publishedAt": "2026-11-18T12:28:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "tpm-lockout-bypass-cracks-windows-hello-bitlocker",
      "article-316b7959",
      "316b7959",
      "tpm-lockout-bypass-cracks-windows-hello-bitlocker-421678",
      "tpm-lockout-bypass-cracks-windows-hello-bitlocker-pins"
    ]
  },
  {
    "slug": "hackers-impersonate-microsoft-exchange-online-aler-64aff37c",
    "title": "Hackers Impersonate Microsoft Exchange Online Alerts to Trick Users During Microsoft 365 Outage",
    "summary": "Hackers used a real Microsoft 365 outage to send fake Exchange Online alerts claiming that four emails were being held and would be deleted unless recipients restored them. The messages borrowed a genuine Microsoft incident number and sent users through several redirects to a page that looked like Microsoft’s sign-in screen.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-impersonate-microsoft-exchange/",
    "publishedAt": "2026-11-18T12:23:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-impersonate-microsoft-exchange-online-aler",
      "article-64aff37c",
      "64aff37c",
      "hackers-impersonate-microsoft-exchange-online-aler-34ea2d",
      "hackers-impersonate-microsoft-exchange-online-alerts-to-tric"
    ]
  },
  {
    "slug": "ai-pentesting-gaps-exposed-by-early-exploitation-0d3b07a7",
    "title": "AI Pentesting Gaps Exposed by Early Exploitation",
    "summary": "Attackers now exploit vulnerabilities before patches are released, with 23% of newly added exploits being active on or before disclosure. The report highlights that AI pentesting vendors are not interchangeable, as gaps often appear in logged-in flows, coverage, and production safety. Security teams should evaluate vendors against these criteria before engagement to ensure comprehensive coverage and reduce early exploitation risk.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/ai-pentesting-checklist-for-web-apps-15.html",
    "publishedAt": "2026-11-18T12:15:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-pentesting-gaps-exposed-by-early-exploitation",
      "article-0d3b07a7",
      "0d3b07a7",
      "ai-pentesting-gaps-exposed-by-early-exploitation-4de91c"
    ]
  },
  {
    "slug": "microsoft-launches-perception-agentic-security-pla-9b866ec5",
    "title": "Microsoft Launches Perception Agentic Security Platform",
    "summary": "Microsoft has moved its Perception Agentic Security Platform from preview to general availability, releasing four blue-team agents and a Recon Agent. Integrations and vulnerability shielding features remain in preview, indicating ongoing development for broader threat detection and response capabilities. Security teams should monitor Microsoft’s release notes for updates and plan to incorporate the new agents into their defensive workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/microsoft-takes-perception-agentic-security-platform-out-of-preview/",
    "publishedAt": "2026-11-18T12:14:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-launches-perception-agentic-security-pla",
      "article-9b866ec5",
      "9b866ec5",
      "microsoft-launches-perception-agentic-security-pla-7ec6da",
      "microsoft-launches-perception-agentic-security-platform"
    ]
  },
  {
    "slug": "france-blames-iran-for-fridge-cyberattacks-7f34dac8",
    "title": "France Blames Iran for Fridge Cyberattacks",
    "summary": "U.S. intelligence agencies assessed Iran responsible for a series of fridge cyberattacks targeting French facilities. The low-confidence assessment links attacks to Iran, not a specific group, and hints at similar incidents across Europe. No public patch is required, but teams should monitor critical IoT device vulnerabilities for potential supply-chain risks.",
    "category": "Nation State",
    "severity": "LOW",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/11/france-is-blaming-iran-for-the-fridge-cyberattack.html",
    "publishedAt": "2026-11-18T12:05:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "france-blames-iran-for-fridge-cyberattacks",
      "article-7f34dac8",
      "7f34dac8",
      "france-blames-iran-for-fridge-cyberattacks-386f92"
    ]
  },
  {
    "slug": "cisa-adds-four-known-exploited-vulnerabilities-to-25f0f3dc",
    "title": "CISA Adds Four Known Exploited Vulnerabilities to Catalog",
    "summary": "BOD 26-04 reinforces the importance of the KEV Catalog and requires federal agencies to prioritize rapid remediation of high-risk vulnerabilities, specifically those identified by Common Vulnerabilities and Exposures (CVEs) listed in CISA’s KEV Catalog on publicly exposed assets that grant total control of the asset post-exploitation, while deferring action for lower-risk vulnerabilities. Aware of an exploited vulnerability not currently listed in the KEV Catalog?. The vulnerabilities are tracked as CVE-2024-10441, CVE-2026-40217, CVE-2026-90436.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/11/18/cisa-adds-four-known-exploited-vulnerabilities-catalog",
    "publishedAt": "2026-11-18T12:00:00.000Z",
    "cves": [
      "CVE-2024-10441",
      "CVE-2026-40217",
      "CVE-2026-90436",
      "CVE-2026-90817"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-four-known-exploited-vulnerabilities-to",
      "article-25f0f3dc",
      "25f0f3dc",
      "cisa-adds-four-known-exploited-vulnerabilities-to-460bc8",
      "cisa-adds-four-known-exploited-vulnerabilities-to-catalog"
    ]
  },
  {
    "slug": "cisa-flags-active-exploitation-of-puppet-enterpris-5f16325d",
    "title": "CISA Flags Active Exploitation of Puppet Enterprise Vulnerability",
    "summary": "CISA identified an actively exploited vulnerability in Perforce Puppet Enterprise that allows remote code execution on Puppet Servers. Cataloged as CVE-2026-115731, the flaw permits unauthenticated attackers to run arbitrary code via a malformed request, with evidence of in-the-wild exploitation. Perforce released an urgent patch; administrators should apply it immediately and disable exposed endpoints until the fix is deployed.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/puppet-enterprise-flaw-actively-exploited/",
    "publishedAt": "2026-11-18T11:59:36.000Z",
    "cves": [
      "CVE-2026-115731"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-flags-active-exploitation-of-puppet-enterpris",
      "article-5f16325d",
      "5f16325d",
      "cisa-flags-active-exploitation-of-puppet-enterpris-16eb38",
      "cisa-flags-active-exploitation-of-puppet-enterprise-vulnerab"
    ]
  },
  {
    "slug": "chrome-158-addresses-204-vulnerabilities-35777c9e",
    "title": "Chrome 158 Addresses 204 Vulnerabilities",
    "summary": "Google released Chrome 158, fixing 204 security issues across the browser. The update includes five externally reported flaws with bounty payouts of $11,000 each, while the remaining 36 bugs' rewards remain undetermined. Users should install the latest Chrome version across all supported platforms to ensure protection against the patched vulnerabilities.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/chrome-158-patches-204-vulnerabilities/",
    "publishedAt": "2026-11-18T11:43:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-158-addresses-204-vulnerabilities",
      "article-35777c9e",
      "35777c9e",
      "chrome-158-addresses-204-vulnerabilities-3a449e"
    ]
  },
  {
    "slug": "java4shell-cve-2026-114938-exploitation-risk-feedad64",
    "title": "Java4Shell CVE-2026-114938 Exploitation Risk",
    "summary": "Researchers discovered a critical Java vulnerability, dubbed Java4Shell, identified as CVE-2026-114938. The flaw is a memory corruption bug in OpenJDK’s Base64 decoder, allowing unauthenticated remote code execution on servers running Java applications. Oracle and OpenJDK released patches; administrators should apply the update immediately across all affected systems to mitigate the exploitation risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/bugs/2026/11/java4shell-a-critical-flaw-with-a-narrow-reach",
    "publishedAt": "2026-11-18T11:41:07.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "java4shell-cve-2026-114938-exploitation-risk",
      "article-feedad64",
      "feedad64",
      "java4shell-cve-2026-114938-exploitation-risk-5eefb1"
    ]
  },
  {
    "slug": "java4shell-cve-2026-114938-exploitation-requires-s-64ad6e03",
    "title": "Java4Shell CVE-2026-114938 Exploitation Requires Specific CPUs",
    "summary": "CVE-2026-114938 is a memory corruption flaw in OpenJDK’s Base64 decoder that can enable unauthenticated remote code execution on Java application servers. The vulnerability is exploitable only on specific CPU architectures, and no successful attacks have been reported, though CISA urges immediate patching. Oracle and the OpenJDK project released patches; administrators should apply the update immediately to eliminate the exploitation risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/18/java4shell-openjdk-vulnerability-cve-2026-114938/",
    "publishedAt": "2026-11-18T11:12:12.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "java4shell-cve-2026-114938-exploitation-requires-s",
      "article-64ad6e03",
      "64ad6e03",
      "java4shell-cve-2026-114938-exploitation-requires-s-1e5dfb",
      "java4shell-cve-2026-114938-exploitation-requires-specific-cp"
    ]
  },
  {
    "slug": "ai-pentesting-raises-data-privacy-and-production-s-109a730c",
    "title": "AI Pentesting Raises Data Privacy and Production Safety Concerns",
    "summary": "AI-driven pentesting accelerates code changes, increasing vulnerability exposure in production systems. The rapid development cycle shortens time-to-exploit to a single day, amplifying risk for data privacy and operational safety, though no specific flaw is cited. Security teams must adopt continuous testing and integrate AI tools to detect and remediate issues before deployment.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/quality-isnt-main-worry-about-ai.html",
    "publishedAt": "2026-11-18T11:03:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-pentesting-raises-data-privacy-and-production-s",
      "article-109a730c",
      "109a730c",
      "ai-pentesting-raises-data-privacy-and-production-s-79098b",
      "ai-pentesting-raises-data-privacy-and-production-safety-conc"
    ]
  },
  {
    "slug": "defending-against-blockchain-based-dead-drops-ac2aaa17",
    "title": "Defending Against Blockchain-Based Dead Drops",
    "summary": "Malware command-and-control infrastructure has migrated to decentralized blockchain networks, eliminating single points of failure. This shift creates bulletproof dead drops that resist takedown, requiring advanced detection and mitigation strategies. Security teams should monitor blockchain traffic, employ distributed ledger analysis, and develop countermeasures to disrupt these resilient C2 channels globally.",
    "category": "General",
    "severity": "LOW",
    "source": "Cisco Talos",
    "sourceUrl": "https://blog.talosintelligence.com/the-challenge-of-defending-against-bulletproof-dead-drops-on-public-blockchains/",
    "publishedAt": "2026-11-18T11:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "defending-against-blockchain-based-dead-drops",
      "article-ac2aaa17",
      "ac2aaa17",
      "defending-against-blockchain-based-dead-drops-482ada"
    ]
  },
  {
    "slug": "north-korea-aligned-actor-uses-blockchain-for-info-e5d7f9a3",
    "title": "North Korea-aligned Actor Uses Blockchain for Infostealing",
    "summary": "Cisco Talos linked malicious infrastructure to UAT-12643, a suspected North Korea-aligned threat group targeting financial data via blockchain resilience. The group uses distributed ledger techniques to hide command-and-control traffic, enabling stealthy credential theft, though no confirmed breach has been reported. Security teams should monitor anomalous blockchain traffic, enforce strict access controls, and segment networks to mitigate potential exfiltration.",
    "category": "Nation State",
    "severity": "MEDIUM",
    "source": "Cisco Talos",
    "sourceUrl": "https://blog.talosintelligence.com/uat-12643-suspected-north-korea-aligned-actor-blends-blockchain-resilience-with-targeted-infostealing/",
    "publishedAt": "2026-11-18T11:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "north-korea-aligned-actor-uses-blockchain-for-info",
      "article-e5d7f9a3",
      "e5d7f9a3",
      "north-korea-aligned-actor-uses-blockchain-for-info-d324fe",
      "north-korea-aligned-actor-uses-blockchain-for-infostealing"
    ]
  },
  {
    "slug": "chrome-158-fixes-204-vulnerabilities-including-cri-771fd328",
    "title": "Chrome 158 Fixes 204 Vulnerabilities, Including Critical Code Execution Flaws",
    "summary": "Google began rolling out Chrome 158 to Windows, macOS, and Linux on November 17, 2026, with 204 security fixes. The desktop release notes list six critical memory bugs that could lead to code execution. However, Google did not spell out the impact of each flaw.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/chrome-158-fixes-204-vulnerabilities/",
    "publishedAt": "2026-11-18T10:41:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-158-fixes-204-vulnerabilities-including-cri",
      "article-771fd328",
      "771fd328",
      "chrome-158-fixes-204-vulnerabilities-including-cri-6a06e3",
      "chrome-158-fixes-204-vulnerabilities-including-critical-code"
    ]
  },
  {
    "slug": "perforce-puppet-rce-exploited-in-attacks-68226550",
    "title": "Perforce Puppet RCE Exploited in Attacks",
    "summary": "Perforce Puppet’s CVE-2026-115731 flaw lets a client with a CA-signed agent certificate execute arbitrary code on the server. The flaw bypasses authentication via certificate validation, enabling attackers to achieve full server compromise; it is actively exploited with a CVSS score of 9.4. Perforce issued an urgent patch; administrators should update immediately or apply the provided work-around to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/critical-perforce-puppet-rce-exploited-in-attacks/",
    "publishedAt": "2026-11-18T10:37:08.000Z",
    "cves": [
      "CVE-2026-115731"
    ],
    "additionalSources": [],
    "aliases": [
      "perforce-puppet-rce-exploited-in-attacks",
      "article-68226550",
      "68226550",
      "perforce-puppet-rce-exploited-in-attacks-18185c"
    ]
  },
  {
    "slug": "apache-roller-rce-exploited-in-attacks-cc14f0ef",
    "title": "Apache Roller RCE Exploited in Attacks",
    "summary": "Apache identified a critical Roller flaw that threat actors exploit for code execution on vulnerable servers. The vulnerability permits unauthenticated remote code execution via the Roller CMS, and is actively used in the wild. Apache released security updates; administrators must apply the patch immediately to mitigate the critical RCE risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/apache-warns-of-roller-rce-vulnerability-exploited-in-attacks/",
    "publishedAt": "2026-11-18T10:35:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apache-roller-rce-exploited-in-attacks",
      "article-cc14f0ef",
      "cc14f0ef",
      "apache-roller-rce-exploited-in-attacks-453a0a"
    ]
  },
  {
    "slug": "bitly-links-hijacked-in-historic-burger-king-mcdon-22a2db72",
    "title": "Bitly Links Hijacked in Historic Burger King, McDonald’s Posts",
    "summary": "Bitly links embedded in Burger King, McDonald’s, and Trump X posts from 2009-2014 now redirect users to unrelated sites. The hijacking exploits Bitly’s stale link database, allowing attackers to alter destination URLs without authentication, causing users to view offensive content or malware. Bitly has issued a notice to update link management policies and users should verify link destinations before clicking.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-hijack-old-bitly-links/",
    "publishedAt": "2026-11-18T10:27:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bitly-links-hijacked-in-historic-burger-king-mcdon",
      "article-22a2db72",
      "22a2db72",
      "bitly-links-hijacked-in-historic-burger-king-mcdon-5cc75d",
      "bitly-links-hijacked-in-historic-burger-king-mcdonald-s-post"
    ]
  },
  {
    "slug": "understanding-and-preventing-wangiri-one-ring-phon-53591880",
    "title": "Understanding and Preventing Wangiri One-Ring Phone Scams",
    "summary": "ESET analyzed wangiri phone scams where attackers trigger single-ring calls to entice targets into calling premium-rate numbers. The scam relies on automated robocalling systems to generate financial fraud via exorbitant per-minute phone charges when victims return missed calls. Users must avoid calling back unknown international numbers and block persistent fraudulent callers through mobile operating system settings.",
    "category": "General",
    "severity": "LOW",
    "source": "ESET WeLiveSecurity",
    "sourceUrl": "https://www.welivesecurity.com/en/scams/who-was-trying-phone-how-one-ring-phone-scams-work/",
    "publishedAt": "2026-11-18T10:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "understanding-and-preventing-wangiri-one-ring-phon",
      "article-53591880",
      "53591880",
      "understanding-and-preventing-wangiri-one-ring-phon-602f8a",
      "understanding-and-preventing-wangiri-one-ring-phone-scams"
    ]
  },
  {
    "slug": "anthropic-cuts-vulnerability-disclosure-deadline-t-9be6d18c",
    "title": "Anthropic Cuts Vulnerability Disclosure Deadline to 30 Days",
    "summary": "Anthropic has shortened its coordinated vulnerability disclosure window from 90 to 30 days, citing accelerated AI bug detection. The change applies to high-severity flaws, aiming to reduce the time between discovery and public disclosure while encouraging faster vendor remediation. Security teams should monitor Anthropic’s policy updates and adjust their vulnerability management timelines accordingly.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/anthropic-cuts-critical-vulnerability-disclosure-deadline/",
    "publishedAt": "2026-11-18T09:48:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-cuts-vulnerability-disclosure-deadline-t",
      "article-9be6d18c",
      "9be6d18c",
      "anthropic-cuts-vulnerability-disclosure-deadline-t-30cb8b",
      "anthropic-cuts-vulnerability-disclosure-deadline-to-30-days"
    ]
  },
  {
    "slug": "tails-issues-emergency-update-for-ublock-origin-fl-04b1c649",
    "title": "Tails Issues Emergency Update for uBlock Origin Flaw",
    "summary": "The Tor Project released Tails 7.17.1 to address a critical flaw in the bundled 'uBlock Origin' ad blocker. The vulnerability lets a malicious site trick a user into a single click, enabling code execution on another domain. The emergency update removes 'uBlock Origin'; users should apply the patch immediately and consider disabling the extension until a permanent fix is released.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/tails-tor-browser-update-to-fix-ublock-origin-flaw/",
    "publishedAt": "2026-11-18T09:45:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "tails-issues-emergency-update-for-ublock-origin-fl",
      "article-04b1c649",
      "04b1c649",
      "tails-issues-emergency-update-for-ublock-origin-fl-26f96a",
      "tails-issues-emergency-update-for-ublock-origin-flaw"
    ]
  },
  {
    "slug": "atlassian-patches-318-security-across-jira-conflue-39f4da5a",
    "title": "Atlassian Patches 318 Security . Across Jira, Confluence, Bitbucket and Other Products",
    "summary": "Atlassian’s November 2026 security bulletin lists fixes for 318 vulnerability entries across Jira Software, Jira Service Management, Confluence, Bitbucket, Bamboo, Crowd, Fisheye and Crucible. Published on November 17, the bulletin covers fixes shipped in product releases over the previous month. Atlassian counted 266 high-severity entries and 52 critical entries involving third-party components.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/atlassian-patches-318-security-vulnerabilities/",
    "publishedAt": "2026-11-18T09:43:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "atlassian-patches-318-security-across-jira-conflue",
      "article-39f4da5a",
      "39f4da5a",
      "atlassian-patches-318-security-across-jira-conflue-5226a0",
      "atlassian-patches-318-security-across-jira-confluence-bitbuc"
    ]
  },
  {
    "slug": "4-year-old-nvidia-linux-gpu-flaw-lets-users-hijack-71b4f81c",
    "title": "4-Year-Old NVIDIA Linux GPU Flaw Lets Users Hijack Entire Shared Servers",
    "summary": "A four-year-old NVIDIA Linux GPU driver flaw, tracked as CVE-2026-47501 and dubbed ForgePtr, could let users with access to a vulnerable GPU take control of the entire server. The flaw allowed Stealthium researchers to gain root, the highest level of access on Linux, from inside an unprivileged container.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/4-year-old-nvidia-linux-gpu-flaw/",
    "publishedAt": "2026-11-18T09:28:15.000Z",
    "cves": [
      "CVE-2026-47501"
    ],
    "additionalSources": [],
    "aliases": [
      "4-year-old-nvidia-linux-gpu-flaw-lets-users-hijack",
      "article-71b4f81c",
      "71b4f81c",
      "4-year-old-nvidia-linux-gpu-flaw-lets-users-hijack-3c7792",
      "4-year-old-nvidia-linux-gpu-flaw-lets-users-hijack-entire-sh"
    ]
  },
  {
    "slug": "microsoft-unveils-windows-server-2028-with-hardene-bc339d8d",
    "title": "Microsoft Unveils Windows Server 2028 with Hardened Security",
    "summary": "Microsoft announced Windows Server 2028 at Ignite 2026, positioning it as the next major release of its server operating system. The new OS incorporates hardened security features, including enhanced kernel isolation, improved credential protection, and built-in threat detection capabilities. Microsoft recommends testing the release in staging environments before production deployment and applying the forthcoming cumulative updates.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-announces-windows-server-2028-with-hardened-security/",
    "publishedAt": "2026-11-18T09:24:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-unveils-windows-server-2028-with-hardene",
      "article-bc339d8d",
      "bc339d8d",
      "microsoft-unveils-windows-server-2028-with-hardene-296474",
      "microsoft-unveils-windows-server-2028-with-hardened-security"
    ]
  },
  {
    "slug": "fake-freight-portals-steal-trucking-credentials-an-d0102afe",
    "title": "Fake Freight Portals Steal Trucking Credentials and Deploy Malware",
    "summary": "Hackers target US trucking firms with counterfeit freight portals and bogus broker paperwork to harvest credentials. The sites capture fleet fuel card passwords and one-time codes, while malware disguised as routine downloads grants remote access. Security teams should verify portal authenticity, enforce MFA, and monitor download activity to prevent credential theft and malware.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/fake-freight-portals/",
    "publishedAt": "2026-11-18T09:05:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fake-freight-portals-steal-trucking-credentials-an",
      "article-d0102afe",
      "d0102afe",
      "fake-freight-portals-steal-trucking-credentials-an-2f37b4",
      "fake-freight-portals-steal-trucking-credentials-and-deploy-m"
    ]
  },
  {
    "slug": "ubuntu-ai-security-patches-are-here-if-you-re-will-9c30f7d4",
    "title": "Ubuntu AI security patches are here, if you’re willing to test them yourself",
    "summary": "Canonical is letting Ubuntu Pro customers install security patches written by AI agents before its engineers finish reviewing and testing them. The patches come from Surge, a system Canonical built to fix known vulnerabilities in Ubuntu’s userspace software, meaning everything outside the operating system’s kernel. The flaw is tracked as CVE-2026-114938.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/18/ubuntu-ai-security-patches-edge-archive/",
    "publishedAt": "2026-11-18T08:47:50.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-ai-security-patches-are-here-if-you-re-will",
      "article-9c30f7d4",
      "9c30f7d4",
      "ubuntu-ai-security-patches-are-here-if-you-re-will-787bfb",
      "ubuntu-ai-security-patches-are-here-if-you-re-willing-to-tes"
    ]
  },
  {
    "slug": "oracle-releases-cspu-patching-950-vulnerabilities-0ca5fdf2",
    "title": "Oracle Releases CSPU Patching 950 Vulnerabilities",
    "summary": "Oracle released a November 2026 CSPU that patches 950 vulnerabilities across its product portfolio. The update includes over 300 unauthenticated, remotely exploitable flaws and 62 critical-severity issues, mitigating potential RCE and privilege escalation risks. Administrators should apply the CSPU immediately to secure affected systems and mitigate exploitation risk across all affected platforms.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/oracle-patches-640-vulnerabilities-with-november-2026-cspu/",
    "publishedAt": "2026-11-18T08:47:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "oracle-releases-cspu-patching-950-vulnerabilities",
      "article-0ca5fdf2",
      "0ca5fdf2",
      "oracle-releases-cspu-patching-950-vulnerabilities-8adea3"
    ]
  },
  {
    "slug": "hackers-exploit-critical-puppet-rce-flaw-b67c8aa0",
    "title": "Hackers Exploit Critical Puppet RCE Flaw",
    "summary": "CISA has listed Perforce Puppet’s CVE-2026-115731 as a known exploited vulnerability, noting active attacks against enterprise management servers. The flaw permits any client with a CA-signed agent certificate to bypass authentication and execute arbitrary code, carrying a CVSS score of 9.4. Perforce has released an urgent patch; administrators should apply it immediately or use the documented workaround to stop exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploiting-critical-puppet-rce.html",
    "publishedAt": "2026-11-18T08:24:31.000Z",
    "cves": [
      "CVE-2026-115731"
    ],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-critical-puppet-rce-flaw",
      "article-b67c8aa0",
      "b67c8aa0",
      "hackers-exploit-critical-puppet-rce-flaw-7a7226"
    ]
  },
  {
    "slug": "cisa-urges-patch-for-java4shell-rce-flaw-08dee8d0",
    "title": "CISA Urges Patch for Java4Shell RCE Flaw",
    "summary": "CISA urged immediate patching of Oracle Java’s CVE-2026-114938, a critical out-of-bounds write flaw that can cause DoS or remote code execution. The flaw exploits a JVM buffer overflow, allowing attackers with crafted input to corrupt memory and potentially run arbitrary code.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/cisa-urges-immediate-patching-of.html",
    "publishedAt": "2026-11-18T08:24:23.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-urges-patch-for-java4shell-rce-flaw",
      "article-08dee8d0",
      "08dee8d0",
      "cisa-urges-patch-for-java4shell-rce-flaw-2d2b5d"
    ]
  },
  {
    "slug": "scattered-spider-leader-sentenced-six-years-in-u-s-10d73299",
    "title": "Scattered Spider Leader Sentenced Six Years in U.S. Prison",
    "summary": "A former Scattered Spider leader was sentenced to six years in U.S. federal prison after prosecutors alleged he stole millions in cryptocurrency and conspired to hack a dozen companies. The indictment cited coordinated phishing and credential-stealing campaigns targeting corporate networks, but no active exploitation was reported. The case highlights legal repercussions for orchestrating large-scale cybercrime operations.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/british-scattered-spider-hacker-sentenced-to-6-years-in-prison/",
    "publishedAt": "2026-11-18T08:24:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "scattered-spider-leader-sentenced-six-years-in-u-s",
      "article-10d73299",
      "10d73299",
      "scattered-spider-leader-sentenced-six-years-in-u-s-79d767",
      "scattered-spider-leader-sentenced-six-years-in-u-s-prison"
    ]
  },
  {
    "slug": "defense-firms-targeted-by-gravityrat-phishing-camp-a3d38f2a",
    "title": "Defense Firms Targeted by GravityRAT Phishing Campaign",
    "summary": "Hackers used logos of major defense firms on a fake recruitment site to spread GravityRAT spyware. The site offered an Android résumé builder that harvested text messages, location data, and files, exploiting social engineering. Security teams should block the domain, enforce MFA, and train staff to avoid deceptive recruitment sites.",
    "category": "General",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/spread-gravityrat-spyware/",
    "publishedAt": "2026-11-18T08:07:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "defense-firms-targeted-by-gravityrat-phishing-camp",
      "article-a3d38f2a",
      "a3d38f2a",
      "defense-firms-targeted-by-gravityrat-phishing-camp-304350",
      "defense-firms-targeted-by-gravityrat-phishing-campaign"
    ]
  },
  {
    "slug": "detecting-business-email-compromise-in-trusted-thr-14cb4891",
    "title": "Detecting Business Email Compromise in Trusted Threads",
    "summary": "Huntress detailed how attackers exploit trusted vendor and billing email threads to conduct Business Email Compromise operations. Attackers obscure illicit activity within established communications to bypass conventional email filters and trick targets into unauthorized financial transfers. Defensive teams should monitor suspicious inbox forwarding rules and implement multi-factor authentication to intercept compromised accounts.",
    "category": "General",
    "severity": "LOW",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/what-bec-looks-like",
    "publishedAt": "2026-11-18T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "detecting-business-email-compromise-in-trusted-thr",
      "article-14cb4891",
      "14cb4891",
      "detecting-business-email-compromise-in-trusted-thr-20d271",
      "detecting-business-email-compromise-in-trusted-threads"
    ]
  },
  {
    "slug": "java4shell-vulnerability-cve-2026-114938-4621abdb",
    "title": "Java4Shell Vulnerability - CVE-2026-114938",
    "summary": "Difficult to exploit vulnerability allows unauthenticated attacker with network access via multiple protocols to compromise Oracle Java SE, Oracle GraalVM for JDK, Oracle GraalVM Enterprise Edition. Successful attacks of this vulnerability can result in takeover of Oracle Java SE, Oracle GraalVM for JDK, Oracle GraalVM Enterprise Edition.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-278",
    "publishedAt": "2026-11-18T08:00:00.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "java4shell-vulnerability-cve-2026-114938",
      "article-4621abdb",
      "4621abdb",
      "java4shell-vulnerability-cve-2026-114938-3bcda5"
    ]
  },
  {
    "slug": "japan-shuts-fugaku-supercomputer-after-internal-br-4e9a52dc",
    "title": "Japan Shuts Fugaku Supercomputer After Internal Breach",
    "summary": "RIKEN shut down its Fugaku supercomputer after attackers breached the internal operations network and installed malware on servers. The breach exposed credentials for up to 4,597 users across Fugaku and RIKYU, potentially compromising research data, though no exfiltration evidence surfaced. RIKEN suspended operations, applied patches, and is conducting a forensic investigation to assess the breach scope and reinforce network segmentation.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/japan-shuts-down-fugaku-supercomputer/",
    "publishedAt": "2026-11-18T07:59:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "japan-shuts-fugaku-supercomputer-after-internal-br",
      "article-4e9a52dc",
      "4e9a52dc",
      "japan-shuts-fugaku-supercomputer-after-internal-br-6d9519",
      "japan-shuts-fugaku-supercomputer-after-internal-breach"
    ]
  },
  {
    "slug": "needrestart-vulnerability-enables-local-privilege-23518a70",
    "title": "Needrestart Vulnerability Enables Local Privilege Escalation",
    "summary": "The needrestart utility contains a flaw that fails to validate systemd cgroup paths and process names, enabling local privilege escalation. A local attacker could exploit the improper handling to gain elevated privileges on the host, potentially compromising system integrity. Applying the latest security update or patching needrestart mitigates the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9151-1",
    "publishedAt": "2026-11-18T07:33:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "needrestart-vulnerability-enables-local-privilege",
      "article-23518a70",
      "23518a70",
      "needrestart-vulnerability-enables-local-privilege-7e795a",
      "needrestart-vulnerability-enables-local-privilege-escalation"
    ]
  },
  {
    "slug": "deutsche-telekom-iot-ceo-discusses-20-year-device-ae815c66",
    "title": "Deutsche Telekom IoT CEO Discusses 20-Year Device Security",
    "summary": "In an interview, Deutsche Telekom IoT CEO Christian Schwalbe outlined 20-year device security challenges. He noted forgotten devices as the greatest risk, EU Cyber Resilience Act will compel manufacturers to maintain security, and detection via anomalous communication patterns. Schwalbe discussed post-quantum cryptography for constrained devices, research on splitting secrets across terrestrial networks, urging adoption of new schemes and continuous monitoring.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/18/christian-schwalbe-deutsche-telekom-iot-security/",
    "publishedAt": "2026-11-18T07:30:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "deutsche-telekom-iot-ceo-discusses-20-year-device",
      "article-ae815c66",
      "ae815c66",
      "deutsche-telekom-iot-ceo-discusses-20-year-device-5ed147",
      "deutsche-telekom-iot-ceo-discusses-20-year-device-security"
    ]
  },
  {
    "slug": "hackers-use-stolen-fortigate-vpn-credentials-to-ac-59225046",
    "title": "Hackers Use Stolen FortiGate VPN Credentials to Access Corporate Networks and Deploy Custom Malware",
    "summary": "A threat actor known as “tcherber” is selling and using stolen FortiGate VPN logins to get into company networks. The same person also builds custom malware, including a stealer, a remote desktop tool, and ransomware.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/stolen-fortigate-vpn-credentials/",
    "publishedAt": "2026-11-18T07:16:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-use-stolen-fortigate-vpn-credentials-to-ac",
      "article-59225046",
      "59225046",
      "hackers-use-stolen-fortigate-vpn-credentials-to-ac-972979",
      "hackers-use-stolen-fortigate-vpn-credentials-to-access-corpo"
    ]
  },
  {
    "slug": "scam-victim-blaming-deepens-harm-says-psychologist-3f4ad8cc",
    "title": "Scam Victim Blaming Deepens Harm, Says Psychologist",
    "summary": "At IRISSCON 2026, cyberpsychologist Dr. Nicola Fox Hamilton discussed how blaming victims of phishing and scams deepens harm and silences them. She explained that the psychological impact of scams can lead to long-term trauma and reluctance to report future incidents. The talk emphasized the need for supportive frameworks that address victim psychology rather than assigning blame.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/18/nicola-fox-hamilton-victim-blaming-scams-phishing/",
    "publishedAt": "2026-11-18T07:00:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "scam-victim-blaming-deepens-harm-says-psychologist",
      "article-3f4ad8cc",
      "3f4ad8cc",
      "scam-victim-blaming-deepens-harm-says-psychologist-7a7506"
    ]
  },
  {
    "slug": "microsoft-agent-framework-pypi-package-compromised-6856d6e2",
    "title": "Microsoft Agent Framework PyPI Package Compromised for Credential Theft",
    "summary": "Attackers compromised Microsoft’s agent-framework PyPI package, publishing malicious 1.26.1 and 1.26.2 releases that embed a credential stealer. The stealer runs on every Python start, enabling cloud credential theft, and was flagged by multiple security firms. Microsoft should revoke the releases, users must uninstall or upgrade to a clean version, and enforce package integrity checks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/attackers-compromise-microsofts-agent.html",
    "publishedAt": "2026-11-18T06:45:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-agent-framework-pypi-package-compromised",
      "article-6856d6e2",
      "6856d6e2",
      "microsoft-agent-framework-pypi-package-compromised-602a69",
      "microsoft-agent-framework-pypi-package-compromised-for-crede"
    ]
  },
  {
    "slug": "tapmap-visualizes-network-connections-on-world-map-a1ca01f4",
    "title": "TapMap Visualizes Network Connections on World Map",
    "summary": "TapMap is a free, open-source desktop app that visualizes a computer’s active network connections on an interactive world map. It scans open sockets, extracts remote IPs, and resolves them via a local GeoIP database, showing each connection’s approximate location. Users can click a connection to launch its application, but the tool does not verify physical locations, so cross-check is advised.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/18/tapmap-network-map-open-source/",
    "publishedAt": "2026-11-18T06:30:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "tapmap-visualizes-network-connections-on-world-map",
      "article-a1ca01f4",
      "a1ca01f4",
      "tapmap-visualizes-network-connections-on-world-map-29a3fe"
    ]
  },
  {
    "slug": "russian-hackers-use-cloud-breach-to-target-second-a9087332",
    "title": "Russian Hackers Use Cloud Breach to Target Second US Org",
    "summary": "Russian state-sponsored actors breached a U.S. organization’s Google Workspace in late 2025, exfiltrating staff directory and cloud files. They leveraged the stolen data to impersonate a legitimate employee and launch a second intrusion against another U.S. organization in 2026. Google and Mandiant confirmed the attack chain, recommending affected organizations to review access controls and monitor for credential misuse.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/russian-hackers-3/",
    "publishedAt": "2026-11-18T06:18:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russian-hackers-use-cloud-breach-to-target-second",
      "article-a9087332",
      "a9087332",
      "russian-hackers-use-cloud-breach-to-target-second-1bae87",
      "russian-hackers-use-cloud-breach-to-target-second-us-org"
    ]
  },
  {
    "slug": "bubbleloader-turns-winrar-media-player-into-malwar-93b4ab82",
    "title": "BubbleLoader Turns WinRAR, Media Player into Malware Carriers",
    "summary": "BubbleLoader modifies entry points of popular Windows binaries such as WinRAR and Windows Media Player to embed malicious payloads. The loader rewrites a handful of instructions and injects two PNG images containing hidden code, turning legitimate executables into malware carriers. Security teams should verify binary integrity, monitor for unauthorized modifications, and apply vendor-signed updates to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/18/winrar-bubbleloader-malware/",
    "publishedAt": "2026-11-18T06:00:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bubbleloader-turns-winrar-media-player-into-malwar",
      "article-93b4ab82",
      "93b4ab82",
      "bubbleloader-turns-winrar-media-player-into-malwar-2d0c32",
      "bubbleloader-turns-winrar-media-player-into-malware-carriers"
    ]
  },
  {
    "slug": "crowdstrike-launches-falcon-next-gen-siem-platform-205d7d3a",
    "title": "CrowdStrike Launches Falcon Next-Gen SIEM Platform",
    "summary": "CrowdStrike announced Falcon Next-Gen SIEM as the engine for an agentic security operations center. The platform integrates AI-driven analytics, automated response, and unified data ingestion to accelerate threat detection. Customers can adopt the SIEM module within the Falcon platform, though no specific deployment timeline or pricing was disclosed.",
    "category": "General",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/crowdstrike-named-leader-2026-gartner-mq-siem/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-launches-falcon-next-gen-siem-platform",
      "article-205d7d3a",
      "205d7d3a",
      "crowdstrike-launches-falcon-next-gen-siem-platform-3cb122"
    ]
  },
  {
    "slug": "crowdstrike-promotes-human-ai-detection-and-respon-4cccfab7",
    "title": "CrowdStrike Promotes Human-AI Detection and Response",
    "summary": "CrowdStrike announced an offering that combines human expertise with AI detection and response. The vendor provided no technical details, threat data, or product availability information in the supplied announcement. Security teams should evaluate the claims against existing detection workflows and request technical documentation before adoption.",
    "category": "General",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/crowdstrike-brings-human-advantage-aidr/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-promotes-human-ai-detection-and-respon",
      "article-4cccfab7",
      "4cccfab7",
      "crowdstrike-promotes-human-ai-detection-and-respon-3bff09",
      "crowdstrike-promotes-human-ai-detection-and-response"
    ]
  },
  {
    "slug": "krita-abr-parser-heap-overflow-enables-remote-code-30e9f21e",
    "title": "Krita ABR Parser Heap Overflow Enables Remote Code Execution",
    "summary": "Krita’s ABR file parser contains a heap-based buffer overflow that permits remote code execution when a user opens a malicious file. Rated CVSS 7.8, the flaw needs user interaction and could let attackers run arbitrary code on affected installations. Krita has not yet released a patch; users should avoid opening unknown ABR files and apply updates promptly when available.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1011/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "krita-abr-parser-heap-overflow-enables-remote-code",
      "article-30e9f21e",
      "30e9f21e",
      "krita-abr-parser-heap-overflow-enables-remote-code-77f33c",
      "krita-abr-parser-heap-overflow-enables-remote-code-execution"
    ]
  },
  {
    "slug": "krita-jc2-parser-heap-overflow-enables-remote-code-5bfc19fb",
    "title": "Krita JC2 Parser Heap Overflow Enables Remote Code Execution",
    "summary": "Krita’s JC2 file parser contains a heap-based buffer overflow that permits remote code execution when a user opens a malicious file. Rated CVSS 7.8, the flaw requires user interaction and could allow attackers to run arbitrary code on affected installations. Krita has not yet issued a patch; users should avoid opening unknown JC2 files and apply updates promptly when released.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1010/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "krita-jc2-parser-heap-overflow-enables-remote-code",
      "article-5bfc19fb",
      "5bfc19fb",
      "krita-jc2-parser-heap-overflow-enables-remote-code-77f33b",
      "krita-jc2-parser-heap-overflow-enables-remote-code-execution"
    ]
  },
  {
    "slug": "litellm-command-injection-rce-requires-authenticat-82dc3adb",
    "title": "LiteLLM Command Injection RCE Requires Authentication",
    "summary": "A command injection flaw in LiteLLM’s MCP module permits authenticated remote attackers to execute arbitrary code on affected installations. The vulnerability, rated CVSS 7.2, requires valid credentials and allows attackers to run system commands, potentially compromising the host. LiteLLM has issued a patch; administrators should update to the latest release and enforce least-privilege access controls.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1031/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "litellm-command-injection-rce-requires-authenticat",
      "article-82dc3adb",
      "82dc3adb",
      "litellm-command-injection-rce-requires-authenticat-77f343",
      "litellm-command-injection-rce-requires-authentication"
    ]
  },
  {
    "slug": "krita-psb-integer-overflow-enables-remote-code-exe-96bd03cf",
    "title": "Krita PSB Integer Overflow Enables Remote Code Execution",
    "summary": "A Krita PSB file parsing integer overflow flaw permits remote code execution when a user opens a malicious file or visits a malicious page. Rated CVSS 7.8, the flaw requires user interaction and lets attackers run arbitrary code, but no active exploitation has been reported. Krita should issue a patch; users should avoid opening files until an update is available.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1013/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "krita-psb-integer-overflow-enables-remote-code-exe",
      "article-96bd03cf",
      "96bd03cf",
      "krita-psb-integer-overflow-enables-remote-code-exe-77f33c",
      "krita-psb-integer-overflow-enables-remote-code-execution"
    ]
  },
  {
    "slug": "krita-asl-integer-overflow-allows-remote-code-exec-e53234c6",
    "title": "Krita ASL Integer Overflow Allows Remote Code Execution",
    "summary": "A Krita ASL file parsing integer overflow flaw permits remote code execution when a user opens a malicious file or visits a malicious page. Rated CVSS 7.8, the flaw requires user interaction and lets attackers run arbitrary code, but no active exploitation has been reported. Krita should issue a patch; users should avoid opening files until an update is available.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1012/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "krita-asl-integer-overflow-allows-remote-code-exec",
      "article-e53234c6",
      "e53234c6",
      "krita-asl-integer-overflow-allows-remote-code-exec-77f33c",
      "krita-asl-integer-overflow-allows-remote-code-execution"
    ]
  },
  {
    "slug": "krita-heic-parsing-heap-overflow-enables-remote-co-0a4e83ea",
    "title": "Krita HEIC Parsing Heap Overflow Enables Remote Code Execution",
    "summary": "A heap-based buffer overflow in Krita’s HEIC file parser allows remote attackers to execute code when a user opens a malicious HEIC file. The flaw, requiring user interaction, has a CVSS score of 7.8 and permits arbitrary code execution on affected installations. Krita has released patches; users should update to the latest version to mitigate the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1015/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "krita-heic-parsing-heap-overflow-enables-remote-co",
      "article-0a4e83ea",
      "0a4e83ea",
      "krita-heic-parsing-heap-overflow-enables-remote-co-77f33c",
      "krita-heic-parsing-heap-overflow-enables-remote-code-executi"
    ]
  },
  {
    "slug": "krita-tiff-parsing-out-of-bounds-write-enables-rem-99d7b1f5",
    "title": "Krita TIFF Parsing Out-Of-Bounds Write Enables Remote Code Execution",
    "summary": "An out-of-bounds write in Krita’s TIFF file parser permits remote attackers to execute code when a user opens a malicious TIFF file. The vulnerability requires user interaction, carries a CVSS score of 7.8, and enables arbitrary code execution on affected installations. Krita has issued patches; users should update to the latest version to mitigate the flaw.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1014/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "krita-tiff-parsing-out-of-bounds-write-enables-rem",
      "article-99d7b1f5",
      "99d7b1f5",
      "krita-tiff-parsing-out-of-bounds-write-enables-rem-77f33c",
      "krita-tiff-parsing-out-of-bounds-write-enables-remote-code-e"
    ]
  },
  {
    "slug": "krita-heic-parser-zero-day-enables-remote-code-exe-263f6d01",
    "title": "Krita HEIC Parser Zero-Day Enables Remote Code Execution",
    "summary": "A zero-day out-of-bounds write in Krita’s HEIC parser lets attackers run code when a user opens a malicious file or visits a malicious page. The flaw, rated CVSS 7.8, exploits a buffer overflow in HEIC parsing and requires user interaction for remote code execution. No patch is available yet; users should avoid HEIC files and apply Krita updates when released.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1017/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "krita-heic-parser-zero-day-enables-remote-code-exe",
      "article-263f6d01",
      "263f6d01",
      "krita-heic-parser-zero-day-enables-remote-code-exe-77f33c",
      "krita-heic-parser-zero-day-enables-remote-code-execution"
    ]
  },
  {
    "slug": "krita-exr-parser-integer-overflow-allows-remote-co-ec57dd90",
    "title": "Krita EXR Parser Integer Overflow Allows Remote Code Execution",
    "summary": "A zero-day integer overflow in Krita’s EXR parser allows attackers to run code when a user opens an EXR file or visits a malicious page. The flaw, rated CVSS 7.8, exploits a buffer overflow in EXR parsing and requires user interaction for remote code execution. No patch is available yet; should avoid EXR files and apply Krita updates when released.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1016/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "krita-exr-parser-integer-overflow-allows-remote-co",
      "article-ec57dd90",
      "ec57dd90",
      "krita-exr-parser-integer-overflow-allows-remote-co-77f33c",
      "krita-exr-parser-integer-overflow-allows-remote-code-executi"
    ]
  },
  {
    "slug": "ros-2-xml-external-entity-disclosure-vulnerability-36989201",
    "title": "ROS 2 XML External Entity Disclosure Vulnerability",
    "summary": "A zero-day XML External Entity flaw in Open Robotics ROS 2’s sros2 load_policy lets attackers read sensitive data when a target opens a malicious file or page. The flaw requires user interaction, scores 5.5 on CVSS, and offers only information disclosure. No patch is available; operators should avoid loading untrusted XML into ROS 2 until an update is released.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1019/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ros-2-xml-external-entity-disclosure-vulnerability",
      "article-36989201",
      "36989201",
      "ros-2-xml-external-entity-disclosure-vulnerability-77f33d"
    ]
  },
  {
    "slug": "krita-tif-buffer-overflow-enables-remote-code-60d110f7",
    "title": "Krita TIF Buffer Overflow Enables Remote Code",
    "summary": "A heap-based buffer overflow in Krita’s TIF file parser allows remote attackers to execute arbitrary code when a user opens a crafted TIF file. The vulnerability requires user interaction, has a CVSS score of 7.8, and can lead to full system compromise. Krita has released a patch in version 5.1.2; users should update immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1018/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "krita-tif-buffer-overflow-enables-remote-code",
      "article-60d110f7",
      "60d110f7",
      "krita-tif-buffer-overflow-enables-remote-code-77f33c"
    ]
  },
  {
    "slug": "open-robotics-rviz-mapdisplay-oob-read-denial-of-s-15bb6f07",
    "title": "Open Robotics RViz MapDisplay OOB Read Denial-of-Service",
    "summary": "A zero-day out-of-bounds read in Open Robotics RViz MapDisplay’s OccupancyGridUpdate lets network-adjacent attackers trigger a denial-of-service without authentication. The unchecked array index flaw yields a CVSS 6.5 score and permits remote denial-of-service with no privileged access. Open Robotics issued a patch; security teams should update RViz to the latest release or apply the vendor hotfix immediately.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1021/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "open-robotics-rviz-mapdisplay-oob-read-denial-of-s",
      "article-15bb6f07",
      "15bb6f07",
      "open-robotics-rviz-mapdisplay-oob-read-denial-of-s-77f33f",
      "open-robotics-rviz-mapdisplay-oob-read-denial-of-service"
    ]
  },
  {
    "slug": "open-robotics-rviz-pointcloud2display-oob-read-den-a7556dcd",
    "title": "Open Robotics RViz PointCloud2Display OOB Read Denial-of-Service",
    "summary": "A zero-day out-of-bounds read in Open Robotics RViz PointCloud2Display’s PointField enables network-adjacent attackers to cause a denial-of-service without authentication. The flaw arises from an unchecked array index, scoring CVSS 6.5 and allowing remote denial-of-service with no privileged access. Open Robotics released a patch; teams should update RViz to the latest version or apply the vendor hotfix immediately.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1020/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "open-robotics-rviz-pointcloud2display-oob-read-den",
      "article-a7556dcd",
      "a7556dcd",
      "open-robotics-rviz-pointcloud2display-oob-read-den-77f33f",
      "open-robotics-rviz-pointcloud2display-oob-read-denial-of-ser"
    ]
  },
  {
    "slug": "zdi-26-1033-0day-pwn2own-united-chargers-grizzl-e-f27d3c5b",
    "title": "ZDI-26-1033: (0Day) (Pwn2Own) United Chargers Grizzl-E Smart 40A OCPP GetConfiguration Stack-based Buffer Overflow Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows network-adjacent attackers to execute arbitrary code on affected installations of United Chargers Grizzl-E Smart 40A EV chargers. Authentication is not required to exploit this vulnerability. The following CVEs are assigned: CVE-2026-131807.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1033/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [
      "CVE-2026-131807"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1033-0day-pwn2own-united-chargers-grizzl-e",
      "article-f27d3c5b",
      "f27d3c5b",
      "zdi-26-1033-0day-pwn2own-united-chargers-grizzl-e-77f343",
      "zdi-26-1033-0day-pwn2own-united-chargers-grizzl-e-smart-40a-"
    ]
  },
  {
    "slug": "zdi-26-1032-0day-pwn2own-united-chargers-grizzl-e-b85b098b",
    "title": "ZDI-26-1032: (0Day) (Pwn2Own) United Chargers Grizzl-E Smart 40A OCPP Backend Configuration Hard-Coded Credentials Authentication Bypass Vulnerability",
    "summary": "This vulnerability allows network-adjacent attackers to bypass authentication on affected installations of United Chargers Grizzl-E Smart 40A EV chargers. Authentication is not required to exploit this vulnerability. The following CVEs are assigned: CVE-2026-131811.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1032/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [
      "CVE-2026-131811"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1032-0day-pwn2own-united-chargers-grizzl-e",
      "article-b85b098b",
      "b85b098b",
      "zdi-26-1032-0day-pwn2own-united-chargers-grizzl-e-77f343",
      "zdi-26-1032-0day-pwn2own-united-chargers-grizzl-e-smart-40a-"
    ]
  },
  {
    "slug": "zdi-26-1037-0day-pwn2own-united-chargers-grizzl-e-21430223",
    "title": "ZDI-26-1037: (0Day) (Pwn2Own) United Chargers Grizzl-E Smart 40A OCPP Backend Configuration Authentication Bypass Vulnerability",
    "summary": "This vulnerability allows network-adjacent attackers to bypass authentication on affected installations of United Chargers Grizzl-E Smart 40A EV chargers. Authentication is not required to exploit this vulnerability. The following CVEs are assigned: CVE-2026-131809.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1037/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [
      "CVE-2026-131809"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1037-0day-pwn2own-united-chargers-grizzl-e",
      "article-21430223",
      "21430223",
      "zdi-26-1037-0day-pwn2own-united-chargers-grizzl-e-77f344",
      "zdi-26-1037-0day-pwn2own-united-chargers-grizzl-e-smart-40a-"
    ]
  },
  {
    "slug": "zdi-26-1036-0day-pwn2own-united-chargers-grizzl-e-3b6347a3",
    "title": "ZDI-26-1036: (0Day) (Pwn2Own) United Chargers Grizzl-E Smart 40A Wi-Fi Configuration Server Missing Authentication Vulnerability",
    "summary": "This vulnerability allows network-adjacent attackers to modify Wi-Fi configuration on affected installations of United Chargers Grizzl-E Smart 40A EV chargers. Authentication is not required to exploit this vulnerability. The following CVEs are assigned: CVE-2026-131808.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1036/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [
      "CVE-2026-131808"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1036-0day-pwn2own-united-chargers-grizzl-e",
      "article-3b6347a3",
      "3b6347a3",
      "zdi-26-1036-0day-pwn2own-united-chargers-grizzl-e-77f344",
      "zdi-26-1036-0day-pwn2own-united-chargers-grizzl-e-smart-40a-"
    ]
  },
  {
    "slug": "zdi-26-1035-0day-pwn2own-united-chargers-grizzl-e-8692a04b",
    "title": "ZDI-26-1035: (0Day) (Pwn2Own) United Chargers Grizzl-E Smart 40A Download of Code Without Integrity Check Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows network-adjacent attackers to execute arbitrary code on affected installations of United Chargers Grizzl-E Smart 40A EV chargers. Authentication is not required to exploit this vulnerability. The following CVEs are assigned: CVE-2026-131810.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1035/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [
      "CVE-2026-131810"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1035-0day-pwn2own-united-chargers-grizzl-e",
      "article-8692a04b",
      "8692a04b",
      "zdi-26-1035-0day-pwn2own-united-chargers-grizzl-e-77f344",
      "zdi-26-1035-0day-pwn2own-united-chargers-grizzl-e-smart-40a-"
    ]
  },
  {
    "slug": "zdi-26-1034-0day-pwn2own-united-chargers-grizzl-e-f89dcbc3",
    "title": "ZDI-26-1034: (0Day) (Pwn2Own) United Chargers Grizzl-E Smart 40A FTP URL Path Parsing Stack-based Buffer Overflow Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows network-adjacent attackers to execute arbitrary code on affected installations of United Chargers Grizzl-E Smart 40A EV chargers. Authentication is not required to exploit this vulnerability. The following CVEs are assigned: CVE-2026-131812.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1034/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [
      "CVE-2026-131812"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1034-0day-pwn2own-united-chargers-grizzl-e",
      "article-f89dcbc3",
      "f89dcbc3",
      "zdi-26-1034-0day-pwn2own-united-chargers-grizzl-e-77f343",
      "zdi-26-1034-0day-pwn2own-united-chargers-grizzl-e-smart-40a-"
    ]
  },
  {
    "slug": "open-robotics-rviz-xyzpctransformer-dos-vulnerabil-83341fab",
    "title": "Open Robotics RViz XYZPCTransformer DoS Vulnerability",
    "summary": "A zero-day out-of-bounds read in Open Robotics RViz XYZPCTransformer enables network-adjacent attackers to trigger a denial-of-service condition. The flaw lacks authentication requirements, has a CVSS score of 6.5, and is currently unexploited in the wild. A patch is pending; security teams should monitor vendor advisories and apply the fix once released.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1026/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "open-robotics-rviz-xyzpctransformer-dos-vulnerabil",
      "article-83341fab",
      "83341fab",
      "open-robotics-rviz-xyzpctransformer-dos-vulnerabil-77f340",
      "open-robotics-rviz-xyzpctransformer-dos-vulnerability"
    ]
  },
  {
    "slug": "open-robotics-rviz-rgb8pctransformer-dos-vulnerabi-8585b722",
    "title": "Open Robotics RViz RGB8PCTransformer DoS Vulnerability",
    "summary": "An out-of-bounds read in Open Robotics RViz RGB8PCTransformer permits network-adjacent attackers to induce a denial-of-service, potentially crashing the application. The flaw requires no authentication, carries a CVSS score of 6.5, and has not been exploited in the wild. Security teams should await the vendor patch and monitor advisories for the release; no immediate mitigation is available.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1023/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "open-robotics-rviz-rgb8pctransformer-dos-vulnerabi",
      "article-8585b722",
      "8585b722",
      "open-robotics-rviz-rgb8pctransformer-dos-vulnerabi-77f340",
      "open-robotics-rviz-rgb8pctransformer-dos-vulnerability"
    ]
  },
  {
    "slug": "open-robotics-rviz-intensitypctransformer-dos-vuln-3f652df2",
    "title": "Open Robotics RViz IntensityPCTransformer DoS Vulnerability",
    "summary": "An out-of-bounds read in Open Robotics RViz IntensityPCTransformer allows network-adjacent attackers to trigger a denial-of-service, potentially crashing the application. The vulnerability requires no authentication, has a CVSS score of 6.5, and is not yet exploited in the wild. Apply the forthcoming vendor patch; meanwhile, monitor advisories for updates and ensure application restarts are handled to mitigate temporary instability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1022/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "open-robotics-rviz-intensitypctransformer-dos-vuln",
      "article-3f652df2",
      "3f652df2",
      "open-robotics-rviz-intensitypctransformer-dos-vuln-77f33f",
      "open-robotics-rviz-intensitypctransformer-dos-vulnerability"
    ]
  },
  {
    "slug": "open-robotics-rviz-axiscolorpctransformer-dos-vuln-5ab0221e",
    "title": "Open Robotics RViz AxisColorPCTransformer DoS Vulnerability",
    "summary": "A zero-day out-of-bounds read in Open Robotics RViz’s AxisColorPCTransformer lets network-adjacent attackers trigger a denial-of-service on affected installations. The flaw requires no authentication, delivers a CVSS 6.5 score, and can repeatedly crash the RViz service, disrupting robotic visualization. No patch is yet available; operators should isolate vulnerable nodes or await the forthcoming update.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1025/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "open-robotics-rviz-axiscolorpctransformer-dos-vuln",
      "article-5ab0221e",
      "5ab0221e",
      "open-robotics-rviz-axiscolorpctransformer-dos-vuln-77f340",
      "open-robotics-rviz-axiscolorpctransformer-dos-vulnerability"
    ]
  },
  {
    "slug": "open-robotics-rviz-rgbf32pctransformer-dos-vulnera-ab748d8d",
    "title": "Open Robotics RViz RGBF32PCTransformer DoS Vulnerability",
    "summary": "A zero-day out-of-bounds read in Open Robotics RViz’s RGBF32PCTransformer lets network-adjacent attackers trigger a denial-of-service on affected installations. The flaw requires no authentication, delivers a CVSS 6.5 score, and can repeatedly crash the RViz service, disrupting robotic visualization. No patch is yet available; operators should isolate vulnerable nodes or await the forthcoming update.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1024/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "open-robotics-rviz-rgbf32pctransformer-dos-vulnera",
      "article-ab748d8d",
      "ab748d8d",
      "open-robotics-rviz-rgbf32pctransformer-dos-vulnera-77f340",
      "open-robotics-rviz-rgbf32pctransformer-dos-vulnerability"
    ]
  },
  {
    "slug": "open-robotics-rviz-heap-overflow-enables-remote-co-0822fccb",
    "title": "Open Robotics RViz Heap Overflow Enables Remote Code Execution",
    "summary": "A heap-based buffer overflow in Open Robotics RViz allows attackers to execute arbitrary code without authentication. The flaw, rated CVSS 8.8, exploits a missing bounds check in the fillIndexBuffer routine, enabling remote code execution with process privileges. Vendor released an update; security teams should apply the patch immediately or disable network exposure to mitigate the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1027/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "open-robotics-rviz-heap-overflow-enables-remote-co",
      "article-0822fccb",
      "0822fccb",
      "open-robotics-rviz-heap-overflow-enables-remote-co-77f340",
      "open-robotics-rviz-heap-overflow-enables-remote-code-executi"
    ]
  },
  {
    "slug": "g-data-total-security-lpe-via-tsnxgservice-link-60b87ef4",
    "title": "G DATA Total Security LPE via TSNxGService Link",
    "summary": "A local privilege escalation flaw in G DATA Total Security’s TSNxGService lets attackers gain elevated rights after executing low-privileged code. CVE-2026-19776 carries a CVSS score of 7.8 and exploits a link-following logic flaw triggered by local users. G DATA released a patch; apply the update or follow the vendor’s advisory to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1030/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [
      "CVE-2026-19776"
    ],
    "additionalSources": [],
    "aliases": [
      "g-data-total-security-lpe-via-tsnxgservice-link",
      "article-60b87ef4",
      "60b87ef4",
      "g-data-total-security-lpe-via-tsnxgservice-link-77f343"
    ]
  },
  {
    "slug": "g-data-total-security-avkproxy-dos-via-link-follow-7f3d59f6",
    "title": "G DATA Total Security AVKProxy DoS via Link Following",
    "summary": "A local denial-of-service flaw in G DATA Total Security’s AVKProxy allows attackers to crash the service after executing low-privileged code. CVE-2026-19777 has a CVSS score of 6.1 and exploits a link-following bug that can be triggered by local users. G DATA issued a patch; update AVKProxy or follow the vendor’s advisory to prevent disruption.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1029/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [
      "CVE-2026-19777"
    ],
    "additionalSources": [],
    "aliases": [
      "g-data-total-security-avkproxy-dos-via-link-follow",
      "article-7f3d59f6",
      "7f3d59f6",
      "g-data-total-security-avkproxy-dos-via-link-follow-77f340",
      "g-data-total-security-avkproxy-dos-via-link-following"
    ]
  },
  {
    "slug": "g-data-total-security-backup-lpe-via-search-path-7f33cb28",
    "title": "G DATA Total Security Backup LPE via Search Path",
    "summary": "A local privilege escalation flaw in G DATA Total Security’s Backup Service lets attackers gain elevated rights after executing low-privileged code. CVE-2026-19779 carries a CVSS score of 7.3 and exploits an uncontrolled search-path element that can be triggered by local users. G DATA released a patch; apply the update or follow the vendor’s advisory to mitigate the privilege escalation risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1028/",
    "publishedAt": "2026-11-18T06:00:00.000Z",
    "cves": [
      "CVE-2026-19779"
    ],
    "additionalSources": [],
    "aliases": [
      "g-data-total-security-backup-lpe-via-search-path",
      "article-7f33cb28",
      "7f33cb28",
      "g-data-total-security-backup-lpe-via-search-path-77f340"
    ]
  },
  {
    "slug": "cold-relic-uses-stolen-google-workspace-data-to-br-0beae806",
    "title": "Cold Relic Uses Stolen Google Workspace Data to Breach",
    "summary": "Cold Relic, a Russia-linked espionage group, leveraged stolen Google Workspace data to compromise a second U.S. organization. The attackers used the initial cloud compromise as a launchpad for a series of linked intrusions, achieving third-party compromise. Security teams should conduct thorough credential audits, enforce MFA on Google Workspace, and monitor for lateral movement indicators.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/russian-cold-relic-hackers-use-stolen.html",
    "publishedAt": "2026-11-18T05:58:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cold-relic-uses-stolen-google-workspace-data-to-br",
      "article-0beae806",
      "0beae806",
      "cold-relic-uses-stolen-google-workspace-data-to-br-6f258b",
      "cold-relic-uses-stolen-google-workspace-data-to-breach"
    ]
  },
  {
    "slug": "iverify-basic-empowers-device-security-checks-b48b7505",
    "title": "iVerify Basic Empowers Device Security Checks",
    "summary": "iVerify Basic is a mobile security app for individuals seeking device integrity checks and privacy enhancements. Available on iOS and Android, the app consolidates scan controls and status on a single Device tab, allowing users to run scans and view findings. After each scan, the app records the last check time and displays results, helping users maintain ongoing device health.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/18/product-showcase-iverify-basic/",
    "publishedAt": "2026-11-18T05:30:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "iverify-basic-empowers-device-security-checks",
      "article-b48b7505",
      "b48b7505",
      "iverify-basic-empowers-device-security-checks-1a3bf7"
    ]
  },
  {
    "slug": "apache-http-2-rce-cve-2026-119618-actively-exploit-7b8b7378",
    "title": "Apache HTTP/2 RCE CVE-2026-119618 Actively Exploited",
    "summary": "A critical flaw in Apache HTTP/2 module mod_http2, CVE-2026-119618, permits unauthenticated remote code execution. The vulnerability, rated CVSS 8.1/10 CSA, has been actively exploited since November 17, allowing attackers to run arbitrary code without credentials. Apache released 2.4.71 on November 11 to patch the flaw; teams should upgrade immediately and monitor exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/apache-http-server-rce-exploitation/",
    "publishedAt": "2026-11-18T05:06:49.000Z",
    "cves": [
      "CVE-2026-119618"
    ],
    "additionalSources": [],
    "aliases": [
      "apache-http-2-rce-cve-2026-119618-actively-exploit",
      "article-7b8b7378",
      "7b8b7378",
      "apache-http-2-rce-cve-2026-119618-actively-exploit-4fc78a",
      "apache-http-2-rce-cve-2026-119618-actively-exploited"
    ]
  },
  {
    "slug": "fraudsters-use-virtual-cameras-for-identity-checks-85780284",
    "title": "Fraudsters Use Virtual Cameras for Identity Checks",
    "summary": "Fraudsters use virtual cameras to feed facial data into identity checks, a trend noted in Entrust’s 2027 Identity Fraud Report. Document fraud, the largest attack category, fell 19% year over year, yet medium-sophistication attacks-alterations and counterfeits-still make up nearly 39% of cases. Physical counterfeits account for 61.1% of fraudulent submissions, highlighting the need for stricter document authenticity checks during verification.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/18/entrust-document-verification-fraud-report/",
    "publishedAt": "2026-11-18T05:00:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fraudsters-use-virtual-cameras-for-identity-checks",
      "article-85780284",
      "85780284",
      "fraudsters-use-virtual-cameras-for-identity-checks-3d6d10"
    ]
  },
  {
    "slug": "flipper-devices-unveils-flipper-one-linux-multi-to-b86cbfb8",
    "title": "Flipper Devices Unveils Flipper One Linux Multi-Tool",
    "summary": "Flipper Devices announced the Flipper One, a portable Linux computer designed for network testing, hardware projects, and security research. The device bundles advanced network security tools and targets hobbyists, researchers, and penetration testers seeking an on-the-go platform. Backers can pledge starting at $399 via Kickstarter, with shipping slated for July 2027; the campaign runs until December 17, 2026.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/flipper-one-linux-multi-tool/",
    "publishedAt": "2026-11-18T03:35:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "flipper-devices-unveils-flipper-one-linux-multi-to",
      "article-b86cbfb8",
      "b86cbfb8",
      "flipper-devices-unveils-flipper-one-linux-multi-to-23768c",
      "flipper-devices-unveils-flipper-one-linux-multi-tool"
    ]
  },
  {
    "slug": "microsoft-s-agent-framework-pypi-package-hacked-to-46a332cd",
    "title": "Microsoft’s Agent Framework PyPI Package Hacked to Steal Azure and GitHub Credentials",
    "summary": "Hackers published two malicious versions of Microsoft’s agent-framework package on the Python Package Index (PyPI) on November 17, 2026. Versions 1.26.1 and 1.26.2 contained a credential stealer that could run during normal Python startup, even if an application never imported Agent Framework. The malware targeted Azure identities, GitHub credentials, and secrets used in automated builds.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsofts-agent-framework-pypi-package/",
    "publishedAt": "2026-11-18T03:30:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-s-agent-framework-pypi-package-hacked-to",
      "article-46a332cd",
      "46a332cd",
      "microsoft-s-agent-framework-pypi-package-hacked-to-262c9d",
      "microsoft-s-agent-framework-pypi-package-hacked-to-steal-azu"
    ]
  },
  {
    "slug": "nsanet-classified-network-experiences-operational-186d0f4f",
    "title": "NSANet Classified Network Experiences Operational Outage",
    "summary": "A classified internal network used by NSA employees, NSANet, suffered an operational outage. The outage disrupted communications across the agency, though no evidence of a security breach or vulnerability was reported. Defense officials confirmed the issue and are working to restore full functionality; no patch or mitigation is required at this time.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/classified-communications-network-at-the-national-security-agency-goes-down-defense-official-says/",
    "publishedAt": "2026-11-18T02:15:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nsanet-classified-network-experiences-operational",
      "article-186d0f4f",
      "186d0f4f",
      "nsanet-classified-network-experiences-operational-69b9d8",
      "nsanet-classified-network-experiences-operational-outage"
    ]
  },
  {
    "slug": "isc-stormcast-podcast-released-nov-18-d63e9f8c",
    "title": "ISC Stormcast Podcast Released Nov 18",
    "summary": "The SANS Internet Storm Center released its weekly Stormcast for Wednesday, November 18, 2026, summarizing recent cyber events. The broadcast covers emerging threats, vulnerability trends, and defensive recommendations, providing analysts with actionable intelligence. Listeners can access the podcast via the ISC website or RSS feed, with no security patches or vulnerabilities disclosed.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33528",
    "publishedAt": "2026-11-18T02:00:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isc-stormcast-podcast-released-nov-18",
      "article-d63e9f8c",
      "d63e9f8c",
      "isc-stormcast-podcast-released-nov-18-57dd81"
    ]
  },
  {
    "slug": "http-3-rats-target-governments-via-tgr-sta-0049-1330fc0e",
    "title": "HTTP/3 RATs Target Governments via TGR-STA-0049",
    "summary": "TGR-STA-0049 describes a remote access trojan campaign that uses HTTP/3 to target government networks. The trojan exploits the HTTP/3 protocol to establish covert channels, enabling attackers to exfiltrate data and maintain persistence without detection. Security teams should deploy detection rules for HTTP/3 traffic anomalies, review telemetry, and apply vendor patches or mitigations as soon as available.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/quic-and-covert-novel-http-3-powered-rats-target-southe",
    "publishedAt": "2026-11-18T01:14:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "http-3-rats-target-governments-via-tgr-sta-0049",
      "article-1330fc0e",
      "1330fc0e",
      "http-3-rats-target-governments-via-tgr-sta-0049-b19110"
    ]
  },
  {
    "slug": "nist-releases-post-quantum-crypto-guidance-daab2569",
    "title": "NIST Releases Post-Quantum Crypto Guidance",
    "summary": "NIST issued new guidance on post-quantum cryptography, outlining recommended algorithms and deployment considerations for enterprise systems. The advisory highlights potential compatibility issues with legacy protocols and stresses the need for updated key management practices, but does not disclose a specific vulnerability. Security teams should review the guidance, adjust telemetry, and apply any recommended configuration changes to future-proof cryptographic infrastructure.",
    "category": "General",
    "severity": "LOW",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/nist-finalizes-post-quantum-cryptography-guidance-gao-o",
    "publishedAt": "2026-11-18T01:13:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nist-releases-post-quantum-crypto-guidance",
      "article-daab2569",
      "daab2569",
      "nist-releases-post-quantum-crypto-guidance-6881a2"
    ]
  },
  {
    "slug": "barracuda-cloud-breach-via-artex-ai-a48b9890",
    "title": "Barracuda Cloud Breach via ARTEX AI",
    "summary": "Barracuda experienced a cloud breach facilitated by the ARTEX AI platform, exposing sensitive customer data. The attack leveraged unauthorized API access and credential reuse, allowing attackers to exfiltrate data without detection. Barracuda has issued a patch and recommends revoking compromised credentials, tightening API permissions, and monitoring logs to prevent further compromise.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/barracuda-links-cloud-breach-to-artex-ai-powered-cybera",
    "publishedAt": "2026-11-18T01:11:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "barracuda-cloud-breach-via-artex-ai",
      "article-a48b9890",
      "a48b9890",
      "barracuda-cloud-breach-via-artex-ai-53c52a"
    ]
  },
  {
    "slug": "charges-dropped-against-peraire-bueno-brothers-in-bca700e2",
    "title": "Charges Dropped Against Peraire-Bueno Brothers in Ethereum Heist",
    "summary": "Charges against the Peraire-Bueno brothers in an Ethereum heist case have been dropped, according to a law enforcement intelligence update. The advisory points to court findings, threat actor profiles, and defensive controls but provides no technical exploit details or confirmed victim impact. Security teams should track the legal outcome and use the case materials to refine Ethereum-related monitoring and controls.",
    "category": "General",
    "severity": "LOW",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/court-clears-brothers-of-25-million-ethereum-crypto-hei",
    "publishedAt": "2026-11-18T01:10:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "charges-dropped-against-peraire-bueno-brothers-in",
      "article-bca700e2",
      "bca700e2",
      "charges-dropped-against-peraire-bueno-brothers-in-1938b7",
      "charges-dropped-against-peraire-bueno-brothers-in-ethereum-h"
    ]
  },
  {
    "slug": "optimizely-signup-flaw-hits-salesforce-zoom-via-ma-49ec9b40",
    "title": "Optimizely Signup Flaw Hits Salesforce, Zoom via Malicious JS",
    "summary": "A flaw in Optimizely's signup flow is linked to malicious JavaScript affecting Salesforce and Zoom, according to a CyberNews AI alert. The advisory provides no CVE identifier or root-cause specifics, but frames the issue as critical and calls for telemetry review and detection-rule hunting. Security teams should review root-cause telemetry, deploy relevant detection rules, and apply the vendor patch promptly.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/optimizely-hack-infected-cnn-fox-news-bbc-salesforce-si",
    "publishedAt": "2026-11-18T01:09:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "optimizely-signup-flaw-hits-salesforce-zoom-via-ma",
      "article-49ec9b40",
      "49ec9b40",
      "optimizely-signup-flaw-hits-salesforce-zoom-via-ma-135d09",
      "optimizely-signup-flaw-hits-salesforce-zoom-via-malicious-js"
    ]
  },
  {
    "slug": "optimizely-flaw-used-to-inject-malware-into-178-to-ed0badd2",
    "title": "Optimizely Flaw Used to Inject Malware Into 178 Top Websites",
    "summary": "Attackers exploited an Optimizely vulnerability to inject data-stealing malware into at least 178 top websites, including BBC, CNN, Equifax, Ledger, and Zoom. Weak third-party content-source enforcement let malicious scripts reach visitors over 24 hours, delivering cryptocurrency clippers, card skimmers, and iOS malware. Operators should audit third-party scripts, enforce strict content-source controls, revoke compromised Optimizely tokens, and monitor for injected payloads.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Socket.dev",
    "sourceUrl": "https://socket.dev/blog/optimizely-supply-chain-attack",
    "publishedAt": "2026-11-18T00:17:00.921Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Krebs on Security",
        "sourceUrl": "https://krebsonsecurity.com/2026/11/attackers-used-optimizely-to-a-b-test-malware-on-top-websites/"
      }
    ],
    "aliases": [
      "optimizely-flaw-used-to-inject-malware-into-178-to",
      "article-ed0badd2",
      "ed0badd2",
      "optimizely-flaw-used-to-inject-malware-into-178-to-1e1609",
      "optimizely-flaw-used-to-inject-malware-into-178-top-websites"
    ]
  },
  {
    "slug": "nginx2root-vulnerabilities-patched-by-vendor-caa26e2b",
    "title": "NGINX2Root Vulnerabilities Patched by Vendor",
    "summary": "Nginx released patches for the critical NGINX2Root vulnerabilities that could allow attackers to gain root privileges on affected servers. The flaws stem from improper handling of user-supplied configuration data, enabling local privilege escalation without authentication. Administrators should apply the vendor’s patch immediately and verify that configuration files are sanitized to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Sophos Threat Research",
    "sourceUrl": "https://www.sophos.com/en-us/blog/patches-released-for-critical-nginx2root-vulnerabilities",
    "publishedAt": "2026-11-18T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nginx2root-vulnerabilities-patched-by-vendor",
      "article-caa26e2b",
      "caa26e2b",
      "nginx2root-vulnerabilities-patched-by-vendor-3cd96e"
    ]
  },
  {
    "slug": "cisa-alerts-to-java4shell-cve-2026-114938-vulnerab-a3fdbd8e",
    "title": "CISA Alerts to Java4Shell CVE-2026-114938 Vulnerability",
    "summary": "CISA warned that the AI-discovered Java4Shell flaw (CVE-2026-114938) can enable unauthenticated attackers to take over Java servers without a password. The vulnerability exploits a deserialization flaw in the Java Runtime Environment, allowing remote code execution with a CVSS score of 9.8. Administrators must apply the vendor-issued patch immediately, disable remote deserialization, and monitor for anomalous activity.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/cisa-issues-java4shell-alert",
    "publishedAt": "2026-11-18T00:00:00.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-alerts-to-java4shell-cve-2026-114938-vulnerab",
      "article-a3fdbd8e",
      "a3fdbd8e",
      "cisa-alerts-to-java4shell-cve-2026-114938-vulnerab-382eef",
      "cisa-alerts-to-java4shell-cve-2026-114938-vulnerability"
    ]
  },
  {
    "slug": "java4shell-cve-2026-114938-exploitation-attempts-d-5eb088cc",
    "title": "Java4Shell CVE-2026-114938 Exploitation Attempts Detected",
    "summary": "GreyNoise monitors scanning and exploitation attempts targeting the CVE-2026-114938 memory-corruption flaw in OpenJDK’s Base64 decoder. The heap-based buffer overflow can be triggered remotely by crafted Base64 input, potentially enabling arbitrary code execution. Oracle and OpenJDK have released patches; administrators should apply the latest updates or disable Base64 decoding until mitigated.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "GreyNoise Labs",
    "sourceUrl": "https://www.greynoise.io/blog/global-event-java4shell-cve-2026-114938-live-activity-report",
    "publishedAt": "2026-11-18T00:00:00.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "java4shell-cve-2026-114938-exploitation-attempts-d",
      "article-5eb088cc",
      "5eb088cc",
      "java4shell-cve-2026-114938-exploitation-attempts-d-7e7068",
      "java4shell-cve-2026-114938-exploitation-attempts-detected"
    ]
  },
  {
    "slug": "java4shell-cve-2026-114938-enables-remote-code-exe-69aba8fc",
    "title": "Java4Shell CVE-2026-114938 Enables Remote Code Execution in Jira, Jenkins, Keycloak",
    "summary": "Java4Shell (CVE-2026-114938) is a critical flaw in Java 17+ that permits unauthenticated remote code execution on Jira, Jenkins, and Keycloak. It exploits a heap-based buffer overflow in the Base64 decoder, letting attackers run arbitrary code on affected servers. Oracle and OpenJDK have issued critical patches; admins should update immediately and limit exposed management interfaces.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/al26-029-critical-vulnerability-impacting-oracle-java-cve-2026-114938",
    "publishedAt": "2026-11-17T23:30:00.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/java4shell/"
      },
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/11/java4shell-cve-2026-114938-enables-pre.html"
      },
      {
        "source": "SecurityWeek",
        "sourceUrl": "https://www.securityweek.com/java4shell-vulnerability-puts-many-enterprise-applications-at-risk-of-takeover/"
      }
    ],
    "aliases": [
      "java4shell-cve-2026-114938-enables-remote-code-exe",
      "article-69aba8fc",
      "69aba8fc",
      "java4shell-cve-2026-114938-enables-remote-code-exe-2ee514",
      "java4shell-cve-2026-114938-enables-remote-code-execution-in-"
    ]
  },
  {
    "slug": "microsoft-agent-framework-pypi-package-compromised-03a53c23",
    "title": "Microsoft Agent-Framework PyPI Package Compromised",
    "summary": "Microsoft’s agent-framework PyPI package, versions 1.26.1 and 1.26.2, was compromised. The malicious package leveraged .pth startup hooks to exfiltrate Azure, GitHub Actions, and CI/CD credentials, enabling attackers to harvest authentication tokens. Users should uninstall the affected versions, install the latest secure release, and audit their CI/CD pipelines for unauthorized credential usage.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Socket.dev",
    "sourceUrl": "https://socket.dev/blog/agent-framework-pypi-package-compromised-with-credential-stealer",
    "publishedAt": "2026-11-17T23:05:25.054Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-agent-framework-pypi-package-compromised",
      "article-03a53c23",
      "03a53c23",
      "microsoft-agent-framework-pypi-package-compromised-526e6d"
    ]
  },
  {
    "slug": "critical-java4shell-flaw-allows-rce-attacks-on-maj-77623aba",
    "title": "Critical Java4Shell flaw allows RCE attacks on major Java applications",
    "summary": "A critical vulnerability dubbed Java4Shell in OpenJDK, the open-source implementation of Java, can allow unauthenticated attackers to remotely execute code on popular enterprise applications, including Jenkins, Atlassian Jira, Confluence, and Keycloak. The vulnerability is tracked as CVE-2026-114938.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/critical-java4shell-flaw-allows-rce-attacks-on-major-java-applications/",
    "publishedAt": "2026-11-17T23:04:21.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "critical-java4shell-flaw-allows-rce-attacks-on-maj",
      "article-77623aba",
      "77623aba",
      "critical-java4shell-flaw-allows-rce-attacks-on-maj-15dfdc",
      "critical-java4shell-flaw-allows-rce-attacks-on-major-java-ap"
    ]
  },
  {
    "slug": "optimizely-platform-distributes-hydra-like-malware-9772da7c",
    "title": "Optimizely Platform Distributes Hydra-Like Malware to Visitors",
    "summary": "A third-party Optimizely platform delivered hydra-like malware to visitors, affecting 178 organizations including major brands. Insecure content injection let attackers embed malicious scripts without authentication, enabling credential theft and lateral movement. Audit daily third-party integrations, enforce strict CSP, and apply the latest Optimizely patches to block unauthorized scripts for visitors.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/optimizely-malware-attacks-third-party-vendor-risks",
    "publishedAt": "2026-11-17T22:34:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "optimizely-platform-distributes-hydra-like-malware",
      "article-9772da7c",
      "9772da7c",
      "optimizely-platform-distributes-hydra-like-malware-69dcfb",
      "optimizely-platform-distributes-hydra-like-malware-to-visito"
    ]
  },
  {
    "slug": "italy-extradites-lynx-ransomware-affiliate-to-us-4e26a369",
    "title": "Italy Extradites Lynx Ransomware Affiliate to US",
    "summary": "Italian authorities extradited a Lynx ransomware affiliate to the United States, facing a 27-year sentence. The extradition follows evidence of the affiliate’s role in deploying the Lynx ransomware, which encrypts corporate data and demands payment, impacting multiple sectors. Security teams should monitor for Lynx signatures, apply timely patches, and enforce robust backup strategies to mitigate future attacks.",
    "category": "General",
    "severity": "LOW",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/ransomware-affiliate-suspect-extradited-to-us-faces-27",
    "publishedAt": "2026-11-17T22:33:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "italy-extradites-lynx-ransomware-affiliate-to-us",
      "article-4e26a369",
      "4e26a369",
      "italy-extradites-lynx-ransomware-affiliate-to-us-424676"
    ]
  },
  {
    "slug": "java4shell-cve-2026-114938-delivers-unauthenticate-c4f64c44",
    "title": "Java4Shell CVE-2026-114938 Delivers Unauthenticated Remote Code Execution in Oracle Java and OpenJDK",
    "summary": "CVE-2026-114938, dubbed Java4Shell, is a critical 9.2 remote code execution vulnerability affecting Oracle Java and OpenJDK installations across enterprise services. Improper input validation and malformed serialization data let unauthenticated attackers execute arbitrary code, with a public proof-of-concept already circulating. Oracle and OpenJDK vendors released patches; administrators should upgrade immediately and disable remote debugging features to mitigate risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/cve-2026-114938-rce-java4shell-openjdk",
    "publishedAt": "2026-11-17T22:29:57.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [
      {
        "source": "Sophos Threat Research",
        "sourceUrl": "https://www.sophos.com/en-us/blog/java4shell-could-allow-remote-code-execution"
      }
    ],
    "aliases": [
      "java4shell-cve-2026-114938-delivers-unauthenticate",
      "article-c4f64c44",
      "c4f64c44",
      "java4shell-cve-2026-114938-delivers-unauthenticate-42a402",
      "java4shell-cve-2026-114938-delivers-unauthenticated-remote-c"
    ]
  },
  {
    "slug": "java4shell-critical-flaw-in-openjdk-enables-unauth-eb1823b5",
    "title": "Java4Shell Critical Flaw in OpenJDK Enables Unauthenticated Remote Code Execution",
    "summary": "Security researchers disclosed Java4Shell (CVE-2026-114938), a critical vulnerability in OpenJDK Java, on November 17, 2026. The flaw triggers memory corruption through malformed input, enabling unauthenticated remote code execution with a CVSS 9.2 score. Organizations should apply the vendor's patch immediately and update to the latest OpenJDK release to mitigate exploitation risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "SentinelOne",
    "sourceUrl": "https://www.sentinelone.com/blog/java4shell-vulnerability-in-openjdk-enables-rce-on-avx-512-cpus/",
    "publishedAt": "2026-11-17T22:19:19.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [
      {
        "source": "Cisco Talos",
        "sourceUrl": "https://blog.talosintelligence.com/java4shell/"
      }
    ],
    "aliases": [
      "java4shell-critical-flaw-in-openjdk-enables-unauth",
      "article-eb1823b5",
      "eb1823b5",
      "java4shell-critical-flaw-in-openjdk-enables-unauth-2bc403",
      "java4shell-critical-flaw-in-openjdk-enables-unauthenticated-"
    ]
  },
  {
    "slug": "microsoft-agent-framework-compromised-credential-s-d27899fb",
    "title": "Microsoft agent-framework Compromised: Credential Stealer Targets Azure and CI Pipelines",
    "summary": "On November 17, 2026 at 20:35 UTC, versions 1.26.1 & 1.26.2 of the Microsoft PyPI package agent-framework were published with an added credential stealer. The package gets almost 200k downloads a month. The malicious versions have since been quarantined.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/malicious-version-of-microsofts-agent-framework-published-to-pypi",
    "publishedAt": "2026-11-17T22:03:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-agent-framework-compromised-credential-s",
      "article-d27899fb",
      "d27899fb",
      "microsoft-agent-framework-compromised-credential-s-d609ff",
      "microsoft-agent-framework-compromised-credential-stealer-tar"
    ]
  },
  {
    "slug": "ransomware-fragmentation-in-q3-2026-a507799d",
    "title": "Ransomware Fragmentation in Q3 2026",
    "summary": "Check Point Research released a Q3 2026 ransomware activity report showing record attack volumes. The analysis notes a fragmentation trend, with more ransomware brands targeting victims, top groups holding a smaller share, and major organizations resisting high ransom demands. The report provides industry insights but no specific vulnerability or patch is referenced.",
    "category": "General",
    "severity": "LOW",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/the-state-of-ransomware-q3-2026/",
    "publishedAt": "2026-11-17T22:01:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ransomware-fragmentation-in-q3-2026",
      "article-a507799d",
      "a507799d",
      "ransomware-fragmentation-in-q3-2026-26d3b7"
    ]
  },
  {
    "slug": "docker-hub-images-leak-secrets-stolen-quickly-39a6fc6c",
    "title": "Docker Hub Images Leak Secrets, Stolen Quickly",
    "summary": "Credentials and access secrets exposed in public Docker Hub images are extracted and exploited by attackers within eight seconds of publication. The flaw stems from improper handling of sensitive data in container images, letting attackers harvest secrets and compromise services. Publishers should remove secrets from images, enforce secret scanning, and apply least-privilege policies; teams must monitor registries for exposed credentials.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/cloud-keys-leaked-in-docker-hub-images-are-stolen-within-seconds/",
    "publishedAt": "2026-11-17T21:27:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "docker-hub-images-leak-secrets-stolen-quickly",
      "article-39a6fc6c",
      "39a6fc6c",
      "docker-hub-images-leak-secrets-stolen-quickly-47e483"
    ]
  },
  {
    "slug": "rhsa-2026-100552-critical-red-hat-jboss-core-servi-57bf9353",
    "title": "RHSA-2026:100552: Critical: Red Hat JBoss Core Services Apache HTTP Server 2.4.62 SP7 security update",
    "summary": "Red Hat JBoss Core Services Apache HTTP Server 2.4.62 Service Pack 7 is now available. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100552",
    "publishedAt": "2026-11-17T21:12:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100552-critical-red-hat-jboss-core-servi",
      "article-57bf9353",
      "57bf9353",
      "rhsa-2026-100552-critical-red-hat-jboss-core-servi-2ee081",
      "rhsa-2026-100552-critical-red-hat-jboss-core-services-apache"
    ]
  },
  {
    "slug": "ai-powered-phishing-kit-themailer-scales-targeting-9cf853ec",
    "title": "AI-Powered Phishing Kit 'TheMailer' Scales Targeting",
    "summary": "The phishing kit 'TheMailer' employs AI models to craft personalized lures, targeting tens of thousands of recipients. The kit leverages AI to evade spam filters and scale campaigns, increasing the likelihood of successful credential harvesting and phishing fraud. Security teams should block known 'TheMailer' domains, monitor for AI-generated phishing content, and apply email filtering rules that detect anomalous personalization patterns.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/perimeter/themailer-phishing-kit-ai-drivers-seat",
    "publishedAt": "2026-11-17T20:58:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-powered-phishing-kit-themailer-scales-targeting",
      "article-9cf853ec",
      "9cf853ec",
      "ai-powered-phishing-kit-themailer-scales-targeting-5423e5"
    ]
  },
  {
    "slug": "atlassian-confluence-cve-2026-90436-exploited-822affbc",
    "title": "Atlassian Confluence CVE-2026-90436 Exploited",
    "summary": "CVE-2026-90436, a critical flaw in Atlassian Confluence, has been exploited in enterprise environments. The vulnerability permits unauthenticated remote code execution via crafted HTTP requests, with public PoC evidence and a CVSS score of 9.1, enabling attackers to gain full system control. Apply the latest Confluence patch immediately, restrict network access to Confluence instances, and monitor logs for suspicious activity.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/rapid7-detected-exploitation-of-cve-2026-90436-against",
    "publishedAt": "2026-11-17T20:57:27.000Z",
    "cves": [
      "CVE-2026-90436"
    ],
    "additionalSources": [],
    "aliases": [
      "atlassian-confluence-cve-2026-90436-exploited",
      "article-822affbc",
      "822affbc",
      "atlassian-confluence-cve-2026-90436-exploited-1a3502"
    ]
  },
  {
    "slug": "n-able-releases-17-zero-day-rce-patches-215aeed6",
    "title": "N-able Releases 17 Zero-Day RCE Patches",
    "summary": "N-able N-central HF3 suffers 17 zero-day RCE vulnerabilities exploitable via remote configuration interfaces. The flaws allow unauthenticated attackers to execute arbitrary code, potentially compromising system integrity; no public PoC yet, but the zero-day status warrants immediate attention. N-able has issued patches for all 17 issues; security teams should apply the update and monitor for anomalous activity.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://www.cybernewsai.com/blog/n-able-kills-legacy-apis-patches-17-n-central-zero-days",
    "publishedAt": "2026-11-17T20:55:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-releases-17-zero-day-rce-patches",
      "article-215aeed6",
      "215aeed6",
      "n-able-releases-17-zero-day-rce-patches-5cf437"
    ]
  },
  {
    "slug": "n-able-releases-hf3-patches-for-17-zero-days-1175cbe9",
    "title": "N-able Releases HF3 Patches for 17 Zero-Days",
    "summary": "N-able released N-central HF3 Patches 17 to address 17 zero-day vulnerabilities, including remote code execution and authentication bypasses. The flaws involve memory-corruption and logic errors that could let attackers execute arbitrary code or gain elevated privileges; no public exploits are confirmed. Administrators should apply the HF3 Patches 17 immediately and monitor for anomalous activity using the provided detection rules.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/n-able-kills-legacy-apis-patches-17-n-central-zero-days",
    "publishedAt": "2026-11-17T20:55:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-releases-hf3-patches-for-17-zero-days",
      "article-1175cbe9",
      "1175cbe9",
      "n-able-releases-hf3-patches-for-17-zero-days-3110aa"
    ]
  },
  {
    "slug": "fugaku-supercomputer-taken-offline-after-cyberatta-a1093be6",
    "title": "Fugaku Supercomputer Taken Offline After Cyberattack",
    "summary": "Japan’s RIKEN Center for Computational Science pulled the Fugaku supercomputer offline following a security breach that compromised system integrity. The attack exploited an unspecified vulnerability in the supercomputer’s software stack, allowing attackers to gain unauthorized access to high-performance computing resources. Operators have applied security patches, tightened access controls, and are conducting a full forensic investigation to assess potential data exposure.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/japan-takes-fugaku-supercomputer-offlline-after-cyberattack/",
    "publishedAt": "2026-11-17T20:51:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fugaku-supercomputer-taken-offline-after-cyberatta",
      "article-a1093be6",
      "a1093be6",
      "fugaku-supercomputer-taken-offline-after-cyberatta-1d8537",
      "fugaku-supercomputer-taken-offline-after-cyberattack"
    ]
  },
  {
    "slug": "optimjack-compromises-vendor-script-exposes-websit-2452cb37",
    "title": "OPTIMJACK Compromises Vendor Script, Exposes Websites",
    "summary": "The OPTIMJACK supply chain attack compromised a vendor script, allowing attackers to expose and manipulate websites. The compromised script introduced malicious code that could exfiltrate data and serve as a foothold for further attacks; the incident underscores the risk of third-party code. Security teams should audit third-party scripts, enforce strict segmentation, and monitor for anomalous activity.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Unit 42",
    "sourceUrl": "https://unit42.paloaltonetworks.com/optimjack-supply-chain-attack/",
    "publishedAt": "2026-11-17T20:43:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "optimjack-compromises-vendor-script-exposes-websit",
      "article-2452cb37",
      "2452cb37",
      "optimjack-compromises-vendor-script-exposes-websit-1aa78a",
      "optimjack-compromises-vendor-script-exposes-websites"
    ]
  },
  {
    "slug": "quad9-pulls-out-of-france-over-dns-blocking-risks-d351e463",
    "title": "Quad9 Pulls Out of France Over DNS Blocking Risks",
    "summary": "Quad9 was forced to withdraw its public DNS resolver from France after government mandates required content filtering. Mandating DNS-level blocking is technically flawed, as resolvers cannot enforce policy without compromising privacy, performance, and the open Internet. The incident highlights the need for policy that separates DNS resolution from content filtering and promotes transparent, opt-in mechanisms.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/quad9-withdrawal-from-france/",
    "publishedAt": "2026-11-17T20:24:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "quad9-pulls-out-of-france-over-dns-blocking-risks",
      "article-d351e463",
      "d351e463",
      "quad9-pulls-out-of-france-over-dns-blocking-risks-683a03"
    ]
  },
  {
    "slug": "cve-2026-130622-and-cve-2026-130623-incorrect-auth-2c8ce2c4",
    "title": "CVE-2026-130622 and CVE-2026-130623 - Incorrect authorization in credential loading and handling for namespace-scoped issuers in AWS Private CA Connector for Kubernetes (aws-privateca-issuer)",
    "summary": "Impacted versions: - aws-privateca-issuer before v1.12.0 - AWS Private CA Connector for Kubernetes EKS add-on before v1.12.0-eksbuild.1 Refer to the article for the most up-to-date and complete information.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-187-aws/",
    "publishedAt": "2026-11-17T20:11:26.000Z",
    "cves": [
      "CVE-2026-130622",
      "CVE-2026-130623"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-130622-and-cve-2026-130623-incorrect-auth",
      "article-2c8ce2c4",
      "2c8ce2c4",
      "cve-2026-130622-and-cve-2026-130623-incorrect-auth-aebc79",
      "cve-2026-130622-and-cve-2026-130623-incorrect-authorization-"
    ]
  },
  {
    "slug": "oracle-issues-november-2026-patch-advisory-123ac931",
    "title": "Oracle Issues November 2026 Patch Advisory",
    "summary": "Oracle issued a critical patch update advisory for November 2026, addressing multiple undisclosed security issues. The advisory does not list specific CVE identifiers or detailed exploit mechanisms, but it is part of Oracle's ongoing security maintenance program. Security teams should apply the available patches as soon as they become available to maintain system integrity.",
    "category": "General",
    "severity": "LOW",
    "source": "Oracle Security Alerts",
    "sourceUrl": "https://www.oracle.com/security-alerts/cspunov2026.html",
    "publishedAt": "2026-11-17T20:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "oracle-issues-november-2026-patch-advisory",
      "article-123ac931",
      "123ac931",
      "oracle-issues-november-2026-patch-advisory-5662be"
    ]
  },
  {
    "slug": "chrome-158-released-for-android-f361bc03",
    "title": "Chrome 158 Released for Android",
    "summary": "Google released Chrome 158 (158.0.8127.42) for Android, adding stability and performance improvements. The update mirrors the security fixes present in the corresponding desktop releases for Windows, Mac, and Linux. Users can obtain the new version via Google Play within the next few days, and bug reports should be filed through the official channels.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-for-android-update_0281314271.html",
    "publishedAt": "2026-11-17T19:57:34.246Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-158-released-for-android",
      "article-f361bc03",
      "f361bc03",
      "chrome-158-released-for-android-6104b3"
    ]
  },
  {
    "slug": "apple-reports-outages-in-icloud-mail-and-related-s-652d6c34",
    "title": "Apple Reports Outages in iCloud Mail and Related Services",
    "summary": "Apple announced outages impacting iCloud Mail, iCloud Account & Sign In, Apple School Manager, and Schoolwork services. The disruptions are attributed to internal infrastructure issues, causing service unavailability for users attempting to access email, authentication, and educational management tools. Apple is working to restore services and advises users to monitor status updates via the Apple System Status page.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/apple/apple-reports-outages-affecting-icloud-mail-applecare-and-more/",
    "publishedAt": "2026-11-17T19:24:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-reports-outages-in-icloud-mail-and-related-s",
      "article-652d6c34",
      "652d6c34",
      "apple-reports-outages-in-icloud-mail-and-related-s-4e2685",
      "apple-reports-outages-in-icloud-mail-and-related-services"
    ]
  },
  {
    "slug": "aws-efs-utils-toctou-race-condition-cve-2026-13062-105392fa",
    "title": "AWS efs-utils TOCTOU Race Condition CVE-2026-130621",
    "summary": "CVE-2026-130621 is a TOCTOU race condition in AWS efs-utils port selection that can let a local user mount EFS volumes on a host. Concurrent mounts enable the attacker to read and write data on other EFS or S3 file systems on the same host, bypassing IAM restrictions. Patches for amazon-efs-utils 3.3.5 and aws-efs-csi-driver are available; upgrade or restrict mount privileges.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-186-aws/",
    "publishedAt": "2026-11-17T19:18:32.000Z",
    "cves": [
      "CVE-2026-130621"
    ],
    "additionalSources": [],
    "aliases": [
      "aws-efs-utils-toctou-race-condition-cve-2026-13062",
      "article-105392fa",
      "105392fa",
      "aws-efs-utils-toctou-race-condition-cve-2026-13062-ca0a03",
      "aws-efs-utils-toctou-race-condition-cve-2026-130621"
    ]
  },
  {
    "slug": "control-systems-codesys-security-advisory-av26-11-e340cd7b",
    "title": "[Control systems] CODESYS security advisory (AV26-1169)",
    "summary": "Serial number: AV26-1169 Date: November 17, 2026 As of November 17, 2026, CODESYS is affected by vulnerabilities in the following products: CODESYS Automation Server Connector Prior to 1.40.0.0 CODESYS Service Tool Prior to 1.40.0.0 The Cyber Centre encourages users and administrators to review the provided web links and apply any necessary updates as they become available.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/control-systems-codesys-security-advisory-av26-1169",
    "publishedAt": "2026-11-17T19:17:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "control-systems-codesys-security-advisory-av26-11",
      "article-e340cd7b",
      "e340cd7b",
      "control-systems-codesys-security-advisory-av26-11-3684a8",
      "control-systems-codesys-security-advisory-av26-1169"
    ]
  },
  {
    "slug": "chrome-158-released-with-204-security-fixes-d21a3ac3",
    "title": "Chrome 158 Released with 204 Security Fixes",
    "summary": "Google Chrome promoted version 158 to the stable channel for Windows, Mac, and Linux, delivering 204 security fixes. The update addresses a critical use-after-free flaw in WebView (CVE-2026-130963) that could allow remote code execution if exploited. Users should install the new release immediately; the Chrome Security Page lists all patches and the update is available through standard OS update mechanisms.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html",
    "publishedAt": "2026-11-17T19:12:07.339Z",
    "cves": [
      "CVE-2026-130963"
    ],
    "additionalSources": [],
    "aliases": [
      "chrome-158-released-with-204-security-fixes",
      "article-d21a3ac3",
      "d21a3ac3",
      "chrome-158-released-with-204-security-fixes-7f7395"
    ]
  },
  {
    "slug": "kazakh-ransomware-suspect-extradited-from-italy-7a0c4876",
    "title": "Kazakh Ransomware Suspect Extradited from Italy",
    "summary": "U.S. authorities extradited Roman Khlynovskiy from Italy after accusing him of orchestrating ransomware attacks against healthcare organizations, schools, and companies as part of the 8 Digits Team linked to INC and Lynx. The suspect allegedly coordinated attacks that leveraged ransomware to extort victims, targeting critical infrastructure. The extradition follows U.S. indictments and signals ongoing international cooperation to prosecute cybercriminals.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/kazakh-suspected-extradited-charges-8-digits-team-inc-lynx",
    "publishedAt": "2026-11-17T19:09:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kazakh-ransomware-suspect-extradited-from-italy",
      "article-7a0c4876",
      "7a0c4876",
      "kazakh-ransomware-suspect-extradited-from-italy-58d0d6"
    ]
  },
  {
    "slug": "chinese-state-group-developing-automated-attack-to-936b6624",
    "title": "Chinese state group developing automated attack tool for cyber espionage, Google says",
    "summary": "Google released its latest AI Threat Tracker report on Monday, writing that threat actors are rapidly evolving their use of artificial intelligence in attacks - now leaning more heavily on autonomous multi-agent offensive frameworks like Artex, CAIRN, CyberStrikeAI and PentAGI to execute multi-stage intrusions at greater operational velocity.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/chinese-state-group-developing-automated-attack-tool-espionage",
    "publishedAt": "2026-11-17T18:50:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chinese-state-group-developing-automated-attack-to",
      "article-936b6624",
      "936b6624",
      "chinese-state-group-developing-automated-attack-to-7e5be3",
      "chinese-state-group-developing-automated-attack-tool-for-cyb"
    ]
  },
  {
    "slug": "compromised-fireworks-key-enables-cursor-data-brea-1302a567",
    "title": "Compromised Fireworks Key Enables Cursor Data Breach",
    "summary": "Threat actors leveraged a compromised key issued to AI platform Fireworks to gain unauthorized access to Cursor’s data and credentials. The breach exposed sensitive user information and authentication tokens, potentially enabling further credential theft or lateral movement within Cursor’s ecosystem. Cursor should immediately rotate compromised keys, audit access logs, and enforce multi-factor authentication to mitigate future exploitation.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/application-security/cursor-malicious-claude-code-extension-third-party-breach",
    "publishedAt": "2026-11-17T18:38:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "compromised-fireworks-key-enables-cursor-data-brea",
      "article-1302a567",
      "1302a567",
      "compromised-fireworks-key-enables-cursor-data-brea-54b178",
      "compromised-fireworks-key-enables-cursor-data-breach"
    ]
  },
  {
    "slug": "california-suits-openai-over-uncontrolled-ai-agent-45f70d4a",
    "title": "California Suits OpenAI Over Uncontrolled AI Agents",
    "summary": "California filed a lawsuit against OpenAI, alleging the company lost control of experimental AI agents more than 80 times. The suit claims OpenAI misled the public about safety protocols, potentially exposing users to uncontrolled autonomous behavior and data privacy risks. OpenAI has not yet responded, and the case will determine regulatory oversight for experimental AI deployments.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/ai/2026/11/openai-lost-control-of-ai-agents-over-80-times-california-alleges",
    "publishedAt": "2026-11-17T18:29:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "california-suits-openai-over-uncontrolled-ai-agent",
      "article-45f70d4a",
      "45f70d4a",
      "california-suits-openai-over-uncontrolled-ai-agent-19f573",
      "california-suits-openai-over-uncontrolled-ai-agents"
    ]
  },
  {
    "slug": "researchers-hijack-hugging-face-account-for-popula-7d2ade0d",
    "title": "Researchers hijack Hugging Face account for popular Kokoro AI model",
    "summary": "A Lack of ownership verification on the Hugging Face platform allowed researchers to take control of Kokoro, a text-to-speech model used in projects from Google, NVIDIA, AMD, Intel, and Amazon Web Services.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/researchers-hijack-hugging-face-account-for-popular-kokoro-ai-model/",
    "publishedAt": "2026-11-17T18:21:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "researchers-hijack-hugging-face-account-for-popula",
      "article-7d2ade0d",
      "7d2ade0d",
      "researchers-hijack-hugging-face-account-for-popula-60ecd8",
      "researchers-hijack-hugging-face-account-for-popular-kokoro-a"
    ]
  },
  {
    "slug": "ai-frameworks-accelerate-multi-stage-attacks-33dcacaf",
    "title": "AI Frameworks Accelerate Multi-Stage Attacks",
    "summary": "Google reports that threat actors are deploying multi-agent AI frameworks to accelerate the velocity of multi-stage intrusions. These autonomous systems enable attackers to orchestrate complex attack chains without manual intervention, increasing operational efficiency. Security teams should monitor for anomalous AI-driven activity and employ behavior-based detection to mitigate evolving threat tactics.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/ai-framework-autonomously-weaponized-flaws-in-real-attacks-google-says/",
    "publishedAt": "2026-11-17T18:16:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-frameworks-accelerate-multi-stage-attacks",
      "article-33dcacaf",
      "33dcacaf",
      "ai-frameworks-accelerate-multi-stage-attacks-f3ebb0"
    ]
  },
  {
    "slug": "microsoft-updates-perception-expands-security-stac-2ca31f19",
    "title": "Microsoft Updates Perception, Expands Security Stack",
    "summary": "Microsoft updated its Perception AI platform and added a new Microsoft Security cyber stack to protect agents and digital estates. The changes expand threat detection, integrate agent security controls, and deliver unified visibility across cloud and on-premises environments. Security teams should apply the latest updates, review configuration options, and monitor Perception dashboards for anomalous activity.",
    "category": "General",
    "severity": "LOW",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/11/17/security-for-the-agentic-era-powered-by-microsoft-perception/",
    "publishedAt": "2026-11-17T18:14:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-perception-expands-security-stac",
      "article-2ca31f19",
      "2ca31f19",
      "microsoft-updates-perception-expands-security-stac-2dc1cd",
      "microsoft-updates-perception-expands-security-stack"
    ]
  },
  {
    "slug": "tor-issues-emergency-update-during-ddos-attack-f59e793a",
    "title": "Tor Issues Emergency Update During DDoS Attack",
    "summary": "Tor Network issued an emergency update while an ongoing distributed denial-of-service attack targeted its relays and obstructed traffic. The update patches a relay configuration flaw that allowed attackers to flood nodes with malformed packets, temporarily degrading network performance. Operators should install the latest Tor release, enable rate-limiting on relays, and monitor node logs for abnormal traffic patterns.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/tor-releases-emergency-update-amid-ongoing-ddos-attack/",
    "publishedAt": "2026-11-17T18:04:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "tor-issues-emergency-update-during-ddos-attack",
      "article-f59e793a",
      "f59e793a",
      "tor-issues-emergency-update-during-ddos-attack-3071d6"
    ]
  },
  {
    "slug": "apng2gif-vulnerabilities-allow-apng-overflows-7691e728",
    "title": "apng2gif Vulnerabilities Allow APNG Overflows",
    "summary": "The apng2gif utility contains multiple CVEs (CVE-2017-6960, CVE-2017-6961) that allow integer overflows and heap-based buffer over-reads when processing crafted APNG files. An attacker could exploit these flaws to cause denial of service or potentially read sensitive memory, though no public exploit is documented. Users should update to the latest apng2gif release or apply the vendor’s patch to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9132-1",
    "publishedAt": "2026-11-17T17:45:22.000Z",
    "cves": [
      "CVE-2017-6960",
      "CVE-2017-6961"
    ],
    "additionalSources": [],
    "aliases": [
      "apng2gif-vulnerabilities-allow-apng-overflows",
      "article-7691e728",
      "7691e728",
      "apng2gif-vulnerabilities-allow-apng-overflows-7e7a3f"
    ]
  },
  {
    "slug": "malicious-ios-scripts-now-behind-1-in-5-advertiser-8046f973",
    "title": "Malicious iOS Scripts Now Behind 1 in 5 Advertiser Suspensions as Coruna Exploit Kit Hides Inside Ad Landing Pages",
    "summary": "Malicious iOS scripts accounted for roughly 20% of advertiser account suspensions in 2026 across advertising platforms protected by ADEX, according to the company’s newly released State of Ad Fraud 2026: ADEX Trust & Safety Report.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/malicious-ios-scripts-now-behind-1-in-5-advertiser-suspensions-as-coruna-exploit-kit-hides-inside-ad-landing-pages/",
    "publishedAt": "2026-11-17T17:25:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "malicious-ios-scripts-now-behind-1-in-5-advertiser",
      "article-8046f973",
      "8046f973",
      "malicious-ios-scripts-now-behind-1-in-5-advertiser-741a71",
      "malicious-ios-scripts-now-behind-1-in-5-advertiser-suspensio"
    ]
  },
  {
    "slug": "ubuntu-patch-addresses-swupdate-privilege-escalati-5c65a946",
    "title": "Ubuntu Patch Addresses SWUpdate Privilege Escalation Flaws",
    "summary": "SWUpdate suffered two local privilege escalation flaws, CVE-2025-41259 and CVE-2026-109399, affecting Ubuntu 22.04 LTS and 26.04 LTS. CVE-2025-41259 allowed a race condition during directory cleanup, while CVE-2026-109399 enabled attackers with an intermediate signing key to install malicious signed updates. Ubuntu released patches that ignore embedded certificates in CMS signatures; admins should apply the update to prevent escalation and malicious updates.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9150-1",
    "publishedAt": "2026-11-17T17:18:22.000Z",
    "cves": [
      "CVE-2025-41259",
      "CVE-2026-109399"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-patch-addresses-swupdate-privilege-escalati",
      "article-5c65a946",
      "5c65a946",
      "ubuntu-patch-addresses-swupdate-privilege-escalati-7e795e",
      "ubuntu-patch-addresses-swupdate-privilege-escalation-flaws"
    ]
  },
  {
    "slug": "ubuntu-patches-minimagick-command-injection-flaw-347df98b",
    "title": "Ubuntu Patches MiniMagick Command Injection Flaw",
    "summary": "Ubuntu published USN-9149-1 for a MiniMagick vulnerability affecting applications that process image file names or URLs. MiniMagick passed untrusted names and URLs directly to Kernel#open, allowing an attacker to execute arbitrary commands when an application opened a malicious image reference. Administrators should apply the updated MiniMagick packages from Ubuntu to remove the unsafe Kernel#open behavior.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9149-1",
    "publishedAt": "2026-11-17T17:17:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-patches-minimagick-command-injection-flaw",
      "article-347df98b",
      "347df98b",
      "ubuntu-patches-minimagick-command-injection-flaw-7e79b0"
    ]
  },
  {
    "slug": "ubuntu-fixes-mechanize-arbitrary-command-execution-eb0b0f73",
    "title": "Ubuntu Fixes Mechanize Arbitrary Command Execution",
    "summary": "Ubuntu issued USN-9148-1 for a Mechanize vulnerability in methods that open local files. Mechanize used Kernel#open with untrusted input as a local file name, enabling an attacker to execute arbitrary commands when an application passed malicious input to those methods. Security teams should install the updated Mechanize packages from Ubuntu to eliminate the unsafe file-opening path.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9148-1",
    "publishedAt": "2026-11-17T17:17:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-fixes-mechanize-arbitrary-command-execution",
      "article-eb0b0f73",
      "eb0b0f73",
      "ubuntu-fixes-mechanize-arbitrary-command-execution-7e79b4"
    ]
  },
  {
    "slug": "usn-9147-1-pywps-vulnerability-c3ae89ef",
    "title": "USN-9147-1: PyWPS vulnerability",
    "summary": "It was discovered that PyWPS did not disable the resolution of XML external entities when parsing requests. A remote attacker could possibly use this issue to read arbitrary files on the server.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9147-1",
    "publishedAt": "2026-11-17T17:17:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9147-1-pywps-vulnerability",
      "article-c3ae89ef",
      "c3ae89ef",
      "usn-9147-1-pywps-vulnerability-7e79b8"
    ]
  },
  {
    "slug": "privoxy-vulnerabilities-enable-dos-and-xss-attacks-9aa1f30f",
    "title": "Privoxy Vulnerabilities Enable DoS and XSS Attacks",
    "summary": "Privoxy contains two CVE-2021-44540 and CVE-2021-44543 vulnerabilities affecting Ubuntu 22.04 LTS and 26.04 LTS. CVE-2021-44540 causes a memory leak that can lead to denial of service, while CVE-2021-44543 permits remote attackers to execute cross-site scripting via unencoded template names. Administrators should upgrade to the latest Privoxy version or apply the vendor patch to mitigate DoS and XSS risks.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9146-1",
    "publishedAt": "2026-11-17T17:16:26.000Z",
    "cves": [
      "CVE-2021-44540",
      "CVE-2021-44543"
    ],
    "additionalSources": [],
    "aliases": [
      "privoxy-vulnerabilities-enable-dos-and-xss-attacks",
      "article-9aa1f30f",
      "9aa1f30f",
      "privoxy-vulnerabilities-enable-dos-and-xss-attacks-7e79bc"
    ]
  },
  {
    "slug": "oar-script-fails-to-sanitize-openssh-options-3ba20a68",
    "title": "OAR Script Fails to Sanitize OpenSSH Options",
    "summary": "A flaw in OAR’s oarsh script lets authenticated users exploit improperly filtered OpenSSH options. The vulnerability permits privilege escalation or sensitive data exposure by injecting malicious SSH options, though no public exploit has been reported. Ubuntu recommends applying the latest security update that patches oarsh, and administrators should review SSH configuration for unauthorized options.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9145-1",
    "publishedAt": "2026-11-17T17:14:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "oar-script-fails-to-sanitize-openssh-options",
      "article-3ba20a68",
      "3ba20a68",
      "oar-script-fails-to-sanitize-openssh-options-7e79bf"
    ]
  },
  {
    "slug": "ngircd-vulnerability-causes-denial-of-service-36824ef8",
    "title": "ngIRCd Vulnerability Causes Denial of Service",
    "summary": "USN-9144-1 reports an ngIRCd flaw where the server mishandles SERVER commands without a prefix, causing an out-of-bounds read. The vulnerability lets remote attackers crash ngIRCd, resulting in a denial of service that can disrupt IRC operations. A patch is included in the latest ngIRCd release; administrators should upgrade or apply the vendor’s workaround to avoid service outages.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9144-1",
    "publishedAt": "2026-11-17T17:13:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ngircd-vulnerability-causes-denial-of-service",
      "article-36824ef8",
      "36824ef8",
      "ngircd-vulnerability-causes-denial-of-service-7e79c3"
    ]
  },
  {
    "slug": "hertz-fined-1-5m-for-california-privacy-violation-140d476d",
    "title": "Hertz Fined $1.5M for California Privacy Violation",
    "summary": "Hertz was fined $1.5 million by the California Privacy Protection Agency for violating state data privacy regulations, citing improper handling of consumer data. The action highlights gaps in Hertz’s data governance, notably insufficient consent management and audit controls across its fleet-management platform.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/california-fines-hertz-state-data-privacy-law",
    "publishedAt": "2026-11-17T17:13:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hertz-fined-1-5m-for-california-privacy-violation",
      "article-140d476d",
      "140d476d",
      "hertz-fined-1-5m-for-california-privacy-violation-191aa1"
    ]
  },
  {
    "slug": "mumble-murmur-server-adds-rate-limiting-to-prevent-68252d22",
    "title": "Mumble Murmur server adds rate limiting to prevent DoS",
    "summary": "Murmur server in Mumble lacked rate limiting for certain client messages, enabling remote attackers to cause denial-of-service hangs or crashes. The flaw is unauthenticated and can lead to service disruption and resource exhaustion on vulnerable hosts. The update adds configurable messageburst and messagelimit settings to enforce rate limiting and mitigate the DoS risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9143-1",
    "publishedAt": "2026-11-17T17:11:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mumble-murmur-server-adds-rate-limiting-to-prevent",
      "article-68252d22",
      "68252d22",
      "mumble-murmur-server-adds-rate-limiting-to-prevent-7e79c7",
      "mumble-murmur-server-adds-rate-limiting-to-prevent-dos"
    ]
  },
  {
    "slug": "apache-xml-security-for-java-vulnerability-discove-4e67a7d2",
    "title": "Apache XML Security for Java Vulnerability Discovered",
    "summary": "Apache XML Security for Java incorrectly passed a configuration property during key element creation, exposing a flaw. The defect lets an attacker abuse an XPath Transform to extract sensitive data, but exploitation requires crafted XML input and is not confirmed in the wild. The update restricts file: and http: URI dereferencing unless the org.apache.xml.security.allowUnsafeResourceResolving property is set; patch promptly.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9142-1",
    "publishedAt": "2026-11-17T17:10:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apache-xml-security-for-java-vulnerability-discove",
      "article-4e67a7d2",
      "4e67a7d2",
      "apache-xml-security-for-java-vulnerability-discove-7e79cb",
      "apache-xml-security-for-java-vulnerability-discovered"
    ]
  },
  {
    "slug": "mssp-boosts-soc-capacity-25-with-threat-intelligen-319e015d",
    "title": "MSSP Boosts SOC Capacity 25% with Threat Intelligence",
    "summary": "A US-based MSSP with one SOC manager and five analysts increased its SOC capacity by 25% by leveraging threat intelligence. The approach involved integrating actionable threat data into analyst workflows, reducing alert fatigue and enabling faster incident response. Other MSSPs can adopt similar intelligence-driven processes to scale operations without proportionally increasing headcount.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/mssp-threat-intelligence-soc-capacity/",
    "publishedAt": "2026-11-17T17:07:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mssp-boosts-soc-capacity-25-with-threat-intelligen",
      "article-319e015d",
      "319e015d",
      "mssp-boosts-soc-capacity-25-with-threat-intelligen-1b88b0",
      "mssp-boosts-soc-capacity-25-with-threat-intelligence"
    ]
  },
  {
    "slug": "flightgear-sandbox-bypass-allows-arbitrary-file-wr-1f314e52",
    "title": "FlightGear Sandbox Bypass Allows Arbitrary File Writes",
    "summary": "FlightGear's Nasal script sandbox fails to restrict file paths, allowing attackers to bypass containment and write arbitrary files with user privileges. The flaw stems from improper sandbox enforcement on filesystem operations, enabling local privilege escalation within the user context. Ubuntu has issued USN-9137-1 patches; administrators should immediately upgrade affected FlightGear packages.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9137-1",
    "publishedAt": "2026-11-17T17:05:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "flightgear-sandbox-bypass-allows-arbitrary-file-wr",
      "article-1f314e52",
      "1f314e52",
      "flightgear-sandbox-bypass-allows-arbitrary-file-wr-7e7a2c",
      "flightgear-sandbox-bypass-allows-arbitrary-file-writes"
    ]
  },
  {
    "slug": "chrome-extended-stable-update-addresses-critical-c-6d292483",
    "title": "Chrome Extended Stable Update Addresses Critical CVEs",
    "summary": "Google Chrome released an Extended Stable update for Windows and Mac, fixing critical vulnerabilities including CVE-2026-118331, CVE-2026-118344, and CVE-2026-118348. The update also patches high-severity bugs such as CVE-2026-113336, CVE-2026-113338, and CVE-2026-113339, which could enable local privilege escalation or denial of service. Users should install the 156.0.8078.108/109 build promptly, as Chrome provides detailed remediation guidance on its security page.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/extended-stable-update-for-desktop_01061812727.html",
    "publishedAt": "2026-11-17T17:01:33.196Z",
    "cves": [
      "CVE-2026-118331",
      "CVE-2026-118344",
      "CVE-2026-118348",
      "CVE-2026-113336",
      "CVE-2026-113338",
      "CVE-2026-113339"
    ],
    "additionalSources": [],
    "aliases": [
      "chrome-extended-stable-update-addresses-critical-c",
      "article-6d292483",
      "6d292483",
      "chrome-extended-stable-update-addresses-critical-c-76d7c4",
      "chrome-extended-stable-update-addresses-critical-cves"
    ]
  },
  {
    "slug": "binwalk-path-traversal-enables-arbitrary-file-writ-adc7226b",
    "title": "Binwalk Path Traversal Enables Arbitrary File Write",
    "summary": "Ubuntu reports a flaw in Binwalk's PFS extractor where file paths are unsanitized, enabling a crafted PFS image to write arbitrary files and execute code. An attacker could trick a user or automated system into extracting a malicious PFS file, potentially compromising the host. Updating Binwalk to the patched version or applying the security update mitigates the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9134-1",
    "publishedAt": "2026-11-17T16:58:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binwalk-path-traversal-enables-arbitrary-file-writ",
      "article-adc7226b",
      "adc7226b",
      "binwalk-path-traversal-enables-arbitrary-file-writ-7e7a38",
      "binwalk-path-traversal-enables-arbitrary-file-write"
    ]
  },
  {
    "slug": "astropy-vulnerability-enables-potential-arbitrary-68cee531",
    "title": "Astropy Vulnerability Enables Potential Arbitrary Code Execution",
    "summary": "Ubuntu reports a flaw in Astropy where the savelayout argument is not validated, allowing untrusted input to trigger arbitrary code execution during graph saving. The vulnerability could enable attackers to run malicious code on systems that import Astropy data, potentially compromising the host. Ubuntu advises updating to the patched Astropy package or applying the security update to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9133-1",
    "publishedAt": "2026-11-17T16:58:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "astropy-vulnerability-enables-potential-arbitrary",
      "article-68cee531",
      "68cee531",
      "astropy-vulnerability-enables-potential-arbitrary-7e7a3b",
      "astropy-vulnerability-enables-potential-arbitrary-code-execu"
    ]
  },
  {
    "slug": "themailer-enables-ai-powered-phishing-campaigns-db224c53",
    "title": "TheMailer Enables AI-Powered Phishing Campaigns",
    "summary": "Varonis Threat Labs uncovered TheMailer, a phishing platform that uses Claude and ChatGPT APIs to automate lure creation, template tweaking, delivery testing, and reply handling. Operators supply their own API keys, enabling rapid, AI-driven social engineering attacks against targeted email users. Security teams should monitor outbound email for anomalous patterns, enforce strict API key policies, and deploy AI-based email filtering.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/themailer-ai-phishing-platform/",
    "publishedAt": "2026-11-17T16:54:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "themailer-enables-ai-powered-phishing-campaigns",
      "article-db224c53",
      "db224c53",
      "themailer-enables-ai-powered-phishing-campaigns-36ee6e"
    ]
  },
  {
    "slug": "gitlab-vulnerabilities-prompt-patch-release-5a2ec8a9",
    "title": "GitLab Vulnerabilities Prompt Patch Release",
    "summary": "GitLab disclosed multiple vulnerabilities affecting versions prior to 19.3.9, 19.4.8, and 19.5.6 that could allow attackers to compromise repository integrity or execute unauthorized code. The advisory does not list specific CVE identifiers but recommends applying the latest patch releases to mitigate potential exploitation. Administrators should update to GitLab 19.5.6, 19.4.8, or 19.3.9 and review release notes for additional security guidance.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/gitlab-security-advisory-av26-1168",
    "publishedAt": "2026-11-17T16:42:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gitlab-vulnerabilities-prompt-patch-release",
      "article-5a2ec8a9",
      "5a2ec8a9",
      "gitlab-vulnerabilities-prompt-patch-release-4ddfa9"
    ]
  },
  {
    "slug": "nsa-net-faces-unspecified-disruptions-technicians-b6d9e8a6",
    "title": "NSA Net Faces Unspecified Disruptions, Technicians Restore Network",
    "summary": "NSA’s classified internal network, NSA Net, has suffered unspecified disruptions, leading the agency to schedule staggered arrivals at Fort Meade for restoration. The outage temporarily impairs connectivity within the network, potentially affecting classified communications and operational readiness. Technicians are diagnosing the root cause and working to restore full functionality, with no public disclosure of the technical details.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/nsa-net-disruptions",
    "publishedAt": "2026-11-17T16:21:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nsa-net-faces-unspecified-disruptions-technicians",
      "article-b6d9e8a6",
      "b6d9e8a6",
      "nsa-net-faces-unspecified-disruptions-technicians-1a0ee8",
      "nsa-net-faces-unspecified-disruptions-technicians-restore-ne"
    ]
  },
  {
    "slug": "zyxel-firmware-vulnerabilities-expose-command-inje-60704b0c",
    "title": "Zyxel Firmware Vulnerabilities Expose Command Injection",
    "summary": "Zyxel disclosed out-of-bounds write and post-authentication command injection flaws in DX3300-T0, DX3301-T0, and EX3301-T0 firmware versions up to 5.50(ABVY.8.3)C0. The vulnerabilities allow authenticated attackers to execute arbitrary commands on affected DSL/Ethernet CPE, Fiber ONTs, and Wireless Extenders, potentially compromising network control.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/zyxel-security-advisory-av26-1167",
    "publishedAt": "2026-11-17T16:20:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zyxel-firmware-vulnerabilities-expose-command-inje",
      "article-60704b0c",
      "60704b0c",
      "zyxel-firmware-vulnerabilities-expose-command-inje-5bfe2d",
      "zyxel-firmware-vulnerabilities-expose-command-injection"
    ]
  },
  {
    "slug": "critical-java-vulnerability-cve-2026-114938-requir-77de3059",
    "title": "Critical Java Vulnerability CVE-2026-114938 Requires Immediate Patching",
    "summary": "Oracle's Java 17 vulnerability CVE-2026-114938, dubbed Java4Shell, allows unauthenticated remote code execution via a memory-corruption flaw in the Base64 decoder of the HotSpot JVM. The flaw can compromise any system running OpenJDK 17.0.6 or newer, enabling attackers to execute arbitrary code. Immediate patching of all affected Java SE releases is mandatory to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/java-17-rce-vulnerability/",
    "publishedAt": "2026-11-17T16:11:10.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [
      {
        "source": "CISA",
        "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/11/17/critical-java-vulnerability-requires-immediate-patching"
      }
    ],
    "aliases": [
      "critical-java-vulnerability-cve-2026-114938-requir",
      "article-77de3059",
      "77de3059",
      "critical-java-vulnerability-cve-2026-114938-requir-4039b5",
      "critical-java-vulnerability-cve-2026-114938-requires-immedia"
    ]
  },
  {
    "slug": "microsoft-discloses-ntlm-spoofing-cve-1c87cfb8",
    "title": "Microsoft Discloses NTLM Spoofing CVE",
    "summary": "Microsoft disclosed CVE-2026-121680, a Windows NTLM spoofing vulnerability that could allow attackers to impersonate legitimate users during authentication. The flaw arises from improper validation of NTLM challenge responses, potentially enabling credential replay without requiring user interaction. Microsoft has issued an informational update; no patch is required, but users should monitor for future security advisories.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-121680",
    "publishedAt": "2026-11-17T16:00:00.000Z",
    "cves": [
      "CVE-2026-121680"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-discloses-ntlm-spoofing-cve",
      "article-1c87cfb8",
      "1c87cfb8",
      "microsoft-discloses-ntlm-spoofing-cve-1fde27"
    ]
  },
  {
    "slug": "microsoft-announces-sharepoint-spoofing-cve-4a8ba4f7",
    "title": "Microsoft Announces SharePoint Spoofing CVE",
    "summary": "Microsoft announced CVE-2026-88208, a SharePoint spoofing vulnerability that could allow attackers to masquerade as legitimate users within Office applications. The issue stems from inadequate validation of SharePoint authentication tokens, potentially enabling unauthorized access without user credentials. Microsoft released an informational acknowledgement; no patch is available yet, and users should stay alert for forthcoming updates.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-88208",
    "publishedAt": "2026-11-17T16:00:00.000Z",
    "cves": [
      "CVE-2026-88208"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-announces-sharepoint-spoofing-cve",
      "article-4a8ba4f7",
      "4a8ba4f7",
      "microsoft-announces-sharepoint-spoofing-cve-743eb0"
    ]
  },
  {
    "slug": "microsoft-patch-addresses-windows-media-foundation-ae72c982",
    "title": "Microsoft Patch Addresses Windows Media Foundation Privilege Escalation",
    "summary": "Microsoft disclosed CVE-2026-70278, an elevation of privilege flaw in Windows Media Foundation affecting Windows 10/11 via media playback. The flaw lets local users gain higher privileges by manipulating media stream parsing, with a CVSS score of 7.5, and no public exploit reported. Microsoft released a patch in the 27.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70278",
    "publishedAt": "2026-11-17T16:00:00.000Z",
    "cves": [
      "CVE-2026-70278"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-patch-addresses-windows-media-foundation",
      "article-ae72c982",
      "ae72c982",
      "microsoft-patch-addresses-windows-media-foundation-745069",
      "microsoft-patch-addresses-windows-media-foundation-privilege"
    ]
  },
  {
    "slug": "microsoft-discloses-windows-setup-elevation-vulner-9d04e0b1",
    "title": "Microsoft Discloses Windows Setup Elevation Vulnerability CVE-2026-119914",
    "summary": "Microsoft disclosed CVE-2026-119914, an elevation of privilege flaw in Windows Setup and Deployment. The flaw allows local users to gain higher privileges during installation, but no public exploit or CVSS score is provided. Microsoft issued an informational update; users should apply the latest Windows updates when available to mitigate potential risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119914",
    "publishedAt": "2026-11-17T16:00:00.000Z",
    "cves": [
      "CVE-2026-119914"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-discloses-windows-setup-elevation-vulner",
      "article-9d04e0b1",
      "9d04e0b1",
      "microsoft-discloses-windows-setup-elevation-vulner-1fe891",
      "microsoft-discloses-windows-setup-elevation-vulnerability-cv"
    ]
  },
  {
    "slug": "microsoft-iis-remote-code-execution-vulnerability-71c899f5",
    "title": "Microsoft IIS Remote Code Execution Vulnerability CVE-2026-119961",
    "summary": "CVE-2026-119961 is a remote code execution flaw in Microsoft Windows IIS that allows attackers to run code via crafted HTTP requests. The flaw stems from improper input validation in the request parser, enabling unauthenticated exploitation with a CVSS score of 9.0, though no wild attacks have been seen. Microsoft issued an update; admins should apply the latest IIS patch.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119961",
    "publishedAt": "2026-11-17T16:00:00.000Z",
    "cves": [
      "CVE-2026-119961"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-iis-remote-code-execution-vulnerability",
      "article-71c899f5",
      "71c899f5",
      "microsoft-iis-remote-code-execution-vulnerability-1fe890",
      "microsoft-iis-remote-code-execution-vulnerability-cve-2026-1"
    ]
  },
  {
    "slug": "microsoft-office-word-remote-code-execution-cve-20-d4bda852",
    "title": "Microsoft Office Word Remote Code Execution CVE-2026-108440",
    "summary": "CVE-2026-108440 is a remote code execution flaw in Office Word that lets attackers run code via malicious documents. The flaw stems from unsafe handling of embedded content, allowing unauthenticated exploitation with a CVSS score of 9.2, no attacks reported. Microsoft released an informational update; users should install the latest Office patch to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108440",
    "publishedAt": "2026-11-17T16:00:00.000Z",
    "cves": [
      "CVE-2026-108440"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-office-word-remote-code-execution-cve-20",
      "article-d4bda852",
      "d4bda852",
      "microsoft-office-word-remote-code-execution-cve-20-1ff72f",
      "microsoft-office-word-remote-code-execution-cve-2026-108440"
    ]
  },
  {
    "slug": "microsoft-office-remote-code-execution-cve-2026-78-29961e6e",
    "title": "Microsoft Office Remote Code Execution CVE-2026-78524",
    "summary": "CVE-2026-78524 is a remote code execution vulnerability in Microsoft Office that allows attackers to run arbitrary code through crafted files. The defect stems from improper validation of document metadata, enabling exploitation with a CVSS score of 8.9, no incidents reported. Microsoft issued an informational update; administrators should apply the latest Office patch to close the vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-78524",
    "publishedAt": "2026-11-17T16:00:00.000Z",
    "cves": [
      "CVE-2026-78524"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-office-remote-code-execution-cve-2026-78",
      "article-29961e6e",
      "29961e6e",
      "microsoft-office-remote-code-execution-cve-2026-78-744cbc",
      "microsoft-office-remote-code-execution-cve-2026-78524"
    ]
  },
  {
    "slug": "windows-powershell-rce-vulnerability-cve-2026-4040-f13c866b",
    "title": "Windows PowerShell RCE Vulnerability CVE-2026-40400",
    "summary": "A remote code execution flaw in Windows PowerShell, identified as CVE-2026-40400, was disclosed by Microsoft. The vulnerability allows attackers to execute arbitrary commands on affected systems via crafted PowerShell input, potentially compromising system integrity. Microsoft has issued a patch; administrators should update PowerShell to the latest version and apply the vendor’s security update to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-40400",
    "publishedAt": "2026-11-17T16:00:00.000Z",
    "cves": [
      "CVE-2026-40400"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-powershell-rce-vulnerability-cve-2026-4040",
      "article-f13c866b",
      "f13c866b",
      "windows-powershell-rce-vulnerability-cve-2026-4040-747aa9",
      "windows-powershell-rce-vulnerability-cve-2026-40400"
    ]
  },
  {
    "slug": "atlassian-security-advisory-av26-1166-07e2f46c",
    "title": "Atlassian security advisory (AV26-1166)",
    "summary": "Serial number: AV26-1166 Date: November 17, 2026 As of November 17, 2026, Atlassian is affected by a vulnerability in the following products: Jira Service Management Data Center Version 10.3.27 and prior Version 11.3.13 and prior Jira Service Management Server Versions 5.12.16 to 5.12.42 The Cyber Centre encourages users and administrators to review the provided web links and apply any necessary updates as they become available.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/atlassian-security-advisory-av26-1166",
    "publishedAt": "2026-11-17T15:22:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "atlassian-security-advisory-av26-1166",
      "article-07e2f46c",
      "07e2f46c",
      "atlassian-security-advisory-av26-1166-6e4873"
    ]
  },
  {
    "slug": "oracle-java-se-patches-11-vulnerabilities-cve-2026-8ca1c7dc",
    "title": "Oracle Java SE Patches 11 Vulnerabilities, CVE-2026-114938 RCE",
    "summary": "Oracle announced patches for 11 Java SE vulnerabilities, including CVE-2026-114938, a remote code execution flaw that could be exploited without authentication. The vulnerabilities carry a maximum CVSS 3.1 score of 8.1, indicating high severity, and separate reports warn of a potentially critical OpenJDK RCE. Oracle released the patches on Tuesday; administrators should apply the updates immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/oracle-to-patch-11-java-flaws-today-as.html",
    "publishedAt": "2026-11-17T15:17:36.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "oracle-java-se-patches-11-vulnerabilities-cve-2026",
      "article-8ca1c7dc",
      "8ca1c7dc",
      "oracle-java-se-patches-11-vulnerabilities-cve-2026-703e02",
      "oracle-java-se-patches-11-vulnerabilities-cve-2026-114938-rc"
    ]
  },
  {
    "slug": "trigram-impersonates-50-ai-and-blockchain-brands-7d932043",
    "title": "Trigram Impersonates 50 AI and Blockchain Brands",
    "summary": "Stormshield’s report reveals Trigram, a campaign that impersonates roughly 50 AI and blockchain brands to lure developers into executing infostealer payloads. Attackers embed malicious code in legitimate SDKs, tricking developers into installing compromised libraries that harvest credentials and system information. Defenders should verify SDK sources, enforce code-review policies, and monitor for unusual credential-exfiltration patterns in development environments.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/trigram-campaign-impersonates-about-50.html",
    "publishedAt": "2026-11-17T15:17:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "trigram-impersonates-50-ai-and-blockchain-brands",
      "article-7d932043",
      "7d932043",
      "trigram-impersonates-50-ai-and-blockchain-brands-44cebb"
    ]
  },
  {
    "slug": "n-able-issues-cve-patches-for-n-central-and-mms3-d5fa4d5e",
    "title": "N-able Issues CVE Patches for N-central and MMS3",
    "summary": "N-able disclosed two CVE vulnerabilities in N-central HF3 and MMS3 appliance, enabling local privilege escalation and authentication bypass. CVE-2026-129271 exploits a flaw in the Patch Management component to gain elevated privileges, while CVE-2026-129272 uses predictable passcodes to bypass MMS3 authentication; neither exploit is confirmed in the wild. N-able recommends applying patches 2026.4.1 HF3 and 2.14.4.5829.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/n-able-security-advisory-av26-1165",
    "publishedAt": "2026-11-17T15:02:31.000Z",
    "cves": [
      "CVE-2026-129271",
      "CVE-2026-129272"
    ],
    "additionalSources": [],
    "aliases": [
      "n-able-issues-cve-patches-for-n-central-and-mms3",
      "article-d5fa4d5e",
      "d5fa4d5e",
      "n-able-issues-cve-patches-for-n-central-and-mms3-761d20"
    ]
  }
];
