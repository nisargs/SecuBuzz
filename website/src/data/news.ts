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
    "slug": "citrix-issues-patches-for-10-critical-netscaler-cv-c4e83fb0",
    "title": "Citrix Issues Patches for 10 Critical NetScaler CVEs",
    "summary": "Citrix released patches for ten critical NetScaler vulnerabilities, including CVE-2026-120868, that could cause unexpected behavior or denial‑of‑service conditions. The flaws allow attackers to trigger service disruptions by manipulating configuration or traffic, but do not provide remote code execution. Citrix recommends applying the latest firmware updates immediately; interim mitigations include disabling affected services and limiting external access.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/citrix-patches-10-critical-netscaler-vulnerabilities/",
    "publishedAt": "2026-11-13T09:36:56.000Z",
    "cves": [
      "CVE-2026-120868"
    ],
    "additionalSources": [],
    "aliases": [
      "citrix-issues-patches-for-10-critical-netscaler-cv",
      "article-c4e83fb0",
      "c4e83fb0",
      "citrix-issues-patches-for-10-critical-netscaler-cv-7a96dd",
      "citrix-issues-patches-for-10-critical-netscaler-cves"
    ]
  },
  {
    "slug": "openai-launches-daybreak-ai-for-security-testing-30376842",
    "title": "OpenAI Launches Daybreak AI for Security Testing",
    "summary": "OpenAI launched Daybreak, AI agents that conduct web application penetration testing and vulnerability analysis within the software security lifecycle. Red Team examines source code and runtime context to find attack vectors, while Defense Factory automates patch creation and retesting. Teams can join an early‑access program to integrate Daybreak findings into CI/CD pipelines, speeding vulnerability remediation.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/13/openai-daybreak-vulnerability-remediation-red-team-defense-factory-agents/",
    "publishedAt": "2026-11-13T09:31:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-launches-daybreak-ai-for-security-testing",
      "article-30376842",
      "30376842",
      "openai-launches-daybreak-ai-for-security-testing-73c9c4"
    ]
  },
  {
    "slug": "beast-ransomware-adds-hidden-control-panel-ea0936f6",
    "title": "Beast Ransomware Adds Hidden Control Panel",
    "summary": "Beast ransomware introduced a hidden control panel that allows operators to select encryption targets on infected Windows systems. The panel is accessed via ALT+CTRL+666, giving affiliates granular control beyond command-line defaults, potentially increasing encryption coverage and ransom demands. Security teams should disable the panel by removing the Beast binary, apply vendor patches, and monitor for ALT+CTRL+666 activity.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/beast-ransomware/",
    "publishedAt": "2026-11-13T08:38:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "beast-ransomware-adds-hidden-control-panel",
      "article-ea0936f6",
      "ea0936f6",
      "beast-ransomware-adds-hidden-control-panel-6a98bc"
    ]
  },
  {
    "slug": "microsoft-365-global-outage-affects-outlook-teams-b9dd6a76",
    "title": "Microsoft 365 Global Outage Affects Outlook, Teams",
    "summary": "A worldwide outage of Microsoft 365 services, including Outlook, SharePoint, and Teams, has disrupted operations for numerous organizations. The incident, caused by an internal infrastructure failure, led to prolonged service unavailability across multiple regions, impacting email, collaboration, and cloud storage. Microsoft is working to restore services and has advised users to monitor status updates for resolution timelines.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/worldwide-microsoft-365-outage-disrupts-outlook-sharepoint-teams-and-more",
    "publishedAt": "2026-11-13T08:35:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-365-global-outage-affects-outlook-teams",
      "article-b9dd6a76",
      "b9dd6a76",
      "microsoft-365-global-outage-affects-outlook-teams-343d8a"
    ]
  },
  {
    "slug": "police-arrest-354-dark-web-cybercrime-suspects-07e6a2d5",
    "title": "Police Arrest 354 Dark Web Cybercrime Suspects",
    "summary": "Police forces worldwide arrested 354 suspects in a joint operation targeting vendors and buyers on dark‑web marketplaces such as Archetyp, Nemesis, Tor2Door, Bohemia, and Kingdom. The crackdown, coordinated by international law‑enforcement agencies, aimed to dismantle illicit cybercrime networks facilitating malware distribution and financial fraud. Authorities are proceeding with prosecutions and asset seizures to disrupt future operations.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/police-arrest-354-vendors-buyers-in-global-cybercrime-crackdown/",
    "publishedAt": "2026-11-13T08:34:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "police-arrest-354-dark-web-cybercrime-suspects",
      "article-07e6a2d5",
      "07e6a2d5",
      "police-arrest-354-dark-web-cybercrime-suspects-725e7d"
    ]
  },
  {
    "slug": "check-point-gateways-targeted-via-php2shell-and-pr-f6aa0340",
    "title": "Check Point Gateways Targeted via PHP2Shell and Privilege Escalation",
    "summary": "Hackers exploited PHP2Shell vulnerabilities in unpatched Check Point Security Gateways to gain initial access to Israeli organizations. The attackers then leveraged the previously reported local privilege escalation flaw CVE-2026-123039 in Gaia OS to deploy the TSGA backdoor and delete ESXi files. Check Point has issued a patch for PHP2Shell and recommends updating Gaia OS firmware to mitigate the escalation vector.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-php2shell-flaws-in.html",
    "publishedAt": "2026-11-13T08:05:49.000Z",
    "cves": [
      "CVE-2026-123039"
    ],
    "additionalSources": [],
    "aliases": [
      "check-point-gateways-targeted-via-php2shell-and-pr",
      "article-f6aa0340",
      "f6aa0340",
      "check-point-gateways-targeted-via-php2shell-and-pr-4b0b0c",
      "check-point-gateways-targeted-via-php2shell-and-privilege-es"
    ]
  },
  {
    "slug": "arcticrat-hijacks-android-phones-via-hidden-vnc-e9d01b0b",
    "title": "ArcticRAT Hijacks Android Phones via Hidden VNC",
    "summary": "ArcticRAT, a new Android remote access trojan, captures full device control while displaying a black screen to the user. The malware employs a hidden VNC channel to open banking apps, approve permissions, and exfiltrate data without user awareness. Security teams should update Android OS, install reputable security apps, and monitor for unusual background processes to mitigate the threat.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/arcticrat-android-malware/",
    "publishedAt": "2026-11-13T07:51:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "arcticrat-hijacks-android-phones-via-hidden-vnc",
      "article-e9d01b0b",
      "e9d01b0b",
      "arcticrat-hijacks-android-phones-via-hidden-vnc-7fe43b"
    ]
  },
  {
    "slug": "check-point-gateways-destroyed-via-php2shell-explo-501ed4bb",
    "title": "Check Point Gateways Destroyed via PHP2Shell Exploit",
    "summary": "Attackers used PHP2Shell vulnerabilities to compromise Check Point Security Gateways and gain initial access. They then leveraged CVE-2026-123039, a local privilege escalation flaw in Gaia OS, to obtain root privileges and cause destructive damage. Check Point released patches for PHP2Shell and recommends applying the Gaia OS update to eliminate the escalation vector.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/php2shell-exploited-in-destructive-check-point-gateway-attacks/",
    "publishedAt": "2026-11-13T07:39:04.000Z",
    "cves": [
      "CVE-2026-123039"
    ],
    "additionalSources": [],
    "aliases": [
      "check-point-gateways-destroyed-via-php2shell-explo",
      "article-501ed4bb",
      "501ed4bb",
      "check-point-gateways-destroyed-via-php2shell-explo-2c4b60",
      "check-point-gateways-destroyed-via-php2shell-exploit"
    ]
  },
  {
    "slug": "n-central-zero-day-enables-remote-root-execution-ddc58ca6",
    "title": "N-central Zero-Day Enables Remote Root Execution",
    "summary": "A newly disclosed N-central zero‑day, named 4EverAble2Shell, permits remote, unauthenticated attackers to execute code with root privileges. The vulnerability exploits a flaw in the N-central management console that bypasses authentication checks, enabling full system compromise. Vendor has released a patch; administrators should apply the update immediately and disable remote console access until remediation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/hackers-exploit-new-n-central-zero-day-hours-after-poc-publication/",
    "publishedAt": "2026-11-13T07:20:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-central-zero-day-enables-remote-root-execution",
      "article-ddc58ca6",
      "ddc58ca6",
      "n-central-zero-day-enables-remote-root-execution-1f0112"
    ]
  },
  {
    "slug": "openai-unveils-ai-tools-for-pen-testing-and-remedi-a9b87e51",
    "title": "OpenAI Unveils AI Tools for Pen Testing and Remediation",
    "summary": "OpenAI introduced Daybreak Red Team and Daybreak Defense Factory, AI‑driven tools that automate web application penetration testing and vulnerability remediation. The platform links automated testing with remediation workflows while requiring human approval for code changes, aiming to reduce manual effort. Organizations should integrate the Daybreak suite into CI/CD pipelines and monitor for false positives, as the tools are in release.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/openai-two-ai-cybersecurity-tools/",
    "publishedAt": "2026-11-13T07:16:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-unveils-ai-tools-for-pen-testing-and-remedi",
      "article-a9b87e51",
      "a9b87e51",
      "openai-unveils-ai-tools-for-pen-testing-and-remedi-1a4590",
      "openai-unveils-ai-tools-for-pen-testing-and-remediation"
    ]
  },
  {
    "slug": "hackers-exploit-check-point-firewall-flaws-to-gain-4cee6a87",
    "title": "Hackers Exploit Check Point Firewall Flaws to Gain Root Access and Deploy Wiper Malware on VMware ESXi",
    "summary": "Hackers have chained Check Point firewall vulnerabilities to gain root access, plant backdoors, and deploy destructive malware on a VMware ESXi host. Check Point confirmed that attackers exploited the privilege escalation flaw against a couple of dozen customers.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-exploit-check-point-firewall-flaws/",
    "publishedAt": "2026-11-13T06:38:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-check-point-firewall-flaws-to-gain",
      "article-4cee6a87",
      "4cee6a87",
      "hackers-exploit-check-point-firewall-flaws-to-gain-193824",
      "hackers-exploit-check-point-firewall-flaws-to-gain-root-acce"
    ]
  },
  {
    "slug": "north-korea-uses-stolen-webcam-clips-for-400m-scam-f4f1bd5f",
    "title": "North Korea Uses Stolen Webcam Clips for $400M Scam",
    "summary": "North Korean state hackers stole over 900 webcam recordings to fuel a $400 million cryptocurrency fraud scheme called FaceStealer. They embed victim footage into fake Zoom and Teams calls, recording targets before redirecting them to malicious sites that siphon funds. The FBI warned crypto and web3 workers; organizations should verify meeting links and monitor for video content to mitigate exploitation.",
    "category": "Nation State",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/13/fbi-north-korean-fake-zoom-calls/",
    "publishedAt": "2026-11-13T06:30:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "north-korea-uses-stolen-webcam-clips-for-400m-scam",
      "article-f4f1bd5f",
      "f4f1bd5f",
      "north-korea-uses-stolen-webcam-clips-for-400m-scam-64946d"
    ]
  },
  {
    "slug": "teams-meeting-scheduler-phishing-yields-valid-sess-c87b0296",
    "title": "Teams Meeting Scheduler Phishing Yields Valid Session Token",
    "summary": "Attackers used a fake Microsoft Teams meeting scheduler to trick a construction employee into approving a device‑code sign‑in, capturing a valid session token. The phishing exploited the legitimate device‑code flow, requiring no credential disclosure but allowing attackers to hijack the session before detection. Teams should enforce stricter booking verification, monitor device‑code usage, and apply MFA to mitigate similar social‑engineering attacks.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/13/microsoft-teams-device-code-phishing/",
    "publishedAt": "2026-11-13T06:15:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "teams-meeting-scheduler-phishing-yields-valid-sess",
      "article-c87b0296",
      "c87b0296",
      "teams-meeting-scheduler-phishing-yields-valid-sess-68fb07",
      "teams-meeting-scheduler-phishing-yields-valid-session-token"
    ]
  },
  {
    "slug": "n-central-flaws-compromise-21-servers-06a541af",
    "title": "N-central Flaws Compromise 21 Servers",
    "summary": "Hackers exploited N-able N-central flaws, 4EverAble2Shell and Agent2Shell, to compromise 21 servers, 19 of which ran Hotfix 2. The flaws allow remote code execution via malformed API requests, enabling attackers to execute arbitrary commands without authentication. N-able has disabled affected features and integrations, issued a patch, and recommends applying the latest Hotfix 2 update to mitigate the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-n-central-flaws-to.html",
    "publishedAt": "2026-11-13T05:43:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-central-flaws-compromise-21-servers",
      "article-06a541af",
      "06a541af",
      "n-central-flaws-compromise-21-servers-18c6e7"
    ]
  },
  {
    "slug": "tsmc-employee-data-exposed-via-third-party-cloud-6ce49751",
    "title": "TSMC Employee Data Exposed via Third‑Party Cloud",
    "summary": "TSMC disclosed that personal data of current and former employees was exposed online through a third‑party cloud provider. The breach involved data stored externally, with no indication that TSMC’s internal systems were compromised or accessed by attackers. TSMC recommends employees verify account activity, change passwords, and monitor for suspicious access while the cloud provider implements additional safeguards.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/tsmc-data-breach/",
    "publishedAt": "2026-11-13T05:25:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "tsmc-employee-data-exposed-via-third-party-cloud",
      "article-6ce49751",
      "6ce49751",
      "tsmc-employee-data-exposed-via-third-party-cloud-285bea"
    ]
  },
  {
    "slug": "macfinger-clickfix-deploys-downthedrain-infosteale-d327fb1e",
    "title": "Macfinger ClickFix Deploys DownTheDRAIN Infostealer on macOS",
    "summary": "The Macfinger ClickFix campaign has distributed the DownTheDRAIN infostealer targeting macOS systems. DownTheDRAIN harvests credentials and sensitive data via keylogging and clipboard monitoring, though no ransomware payload is included. Security teams should deploy macOS endpoint protection, block known malicious domains, and monitor for credential exfiltration and implement strict application whitelisting to prevent execution of unknown binaries.",
    "category": "General",
    "severity": "HIGH",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33518",
    "publishedAt": "2026-11-13T03:41:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "macfinger-clickfix-deploys-downthedrain-infosteale",
      "article-d327fb1e",
      "d327fb1e",
      "macfinger-clickfix-deploys-downthedrain-infosteale-57dd81",
      "macfinger-clickfix-deploys-downthedrain-infostealer-on-macos"
    ]
  },
  {
    "slug": "fbi-seizes-1-2b-crypto-stolen-from-binance-7ab8f53b",
    "title": "FBI Seizes $1.2B Crypto Stolen from Binance",
    "summary": "The FBI seized $1.2 billion in cryptocurrency stolen from Binance, linked to a North Korean social engineering scheme that also yielded $400 million. The operation uncovered a phishing and credential‑stealing campaign that compromised Binance accounts, enabling large fund transfers to illicit wallets.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/fbi-says-us-seized-1-2-billion-worth-of-cryptocurrency-stolen-from-binance/",
    "publishedAt": "2026-11-13T02:28:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fbi-seizes-1-2b-crypto-stolen-from-binance",
      "article-7ab8f53b",
      "7ab8f53b",
      "fbi-seizes-1-2b-crypto-stolen-from-binance-101d11"
    ]
  },
  {
    "slug": "microsoft-365-outage-hits-exchange-teams-sharepoin-253f54b2",
    "title": "Microsoft 365 Outage Hits Exchange, Teams, SharePoint",
    "summary": "Microsoft suffered a 2026‑11‑12 outage that disrupted Microsoft 365 services, including Exchange Online, Teams, SharePoint, Copilot, and Defender XDR, worldwide. The outage originated from infrastructure failures that caused regional connectivity issues, first affecting Exchange mailbox access in the Americas before spreading globally. Microsoft is restoring services, investigating root causes, and will issue updates as the situation stabilizes.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/massive-microsoft-365-outage/",
    "publishedAt": "2026-11-13T02:14:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-365-outage-hits-exchange-teams-sharepoin",
      "article-253f54b2",
      "253f54b2",
      "microsoft-365-outage-hits-exchange-teams-sharepoin-7e4663",
      "microsoft-365-outage-hits-exchange-teams-sharepoint"
    ]
  },
  {
    "slug": "red-hat-quay-unauth-image-access-cve-2026-123710-6b3a025e",
    "title": "Red Hat Quay Unauth Image Access CVE-2026-123710",
    "summary": "A flaw in Red Hat Quay lets unauthenticated users read container images, exposing enterprise registries. CVE‑2026‑123710 permits remote attackers to retrieve image metadata and content; no public exploit yet, but risk is high for exposed registries. Apply the latest patch immediately and enable image access controls as a temporary mitigation for now.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/critical-red-hat-quay-flaw-lets-attackers-read-and-over",
    "publishedAt": "2026-11-13T02:08:31.000Z",
    "cves": [
      "CVE-2026-123710"
    ],
    "additionalSources": [],
    "aliases": [
      "red-hat-quay-unauth-image-access-cve-2026-123710",
      "article-6b3a025e",
      "6b3a025e",
      "red-hat-quay-unauth-image-access-cve-2026-123710-441b0f"
    ]
  },
  {
    "slug": "us-seizes-north-korean-hacking-tools-and-1-2b-cryp-0fbc0a01",
    "title": "US Seizes North Korean Hacking Tools and $1.2B Crypto",
    "summary": "US law enforcement seized North Korean hacking tools and $1.2B cryptocurrency. The seized assets include malware toolkits used for credential theft and lateral movement, indicating ongoing threat actor activity. The seizure disrupts the actors' operational capabilities; security teams should monitor for related tool signatures and update threat intelligence feeds to stay ahead.",
    "category": "General",
    "severity": "LOW",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/us-seizes-north-korean-hacking-infrastructure-1-2-billi",
    "publishedAt": "2026-11-13T02:07:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "us-seizes-north-korean-hacking-tools-and-1-2b-cryp",
      "article-0fbc0a01",
      "0fbc0a01",
      "us-seizes-north-korean-hacking-tools-and-1-2b-cryp-495370",
      "us-seizes-north-korean-hacking-tools-and-1-2b-crypto"
    ]
  },
  {
    "slug": "operation-endgame-seizes-235-servers-and-6m-logins-6ba94c3c",
    "title": "Operation Endgame Seizes 235 Servers and 6M Logins",
    "summary": "Operation Endgame seized 235 servers and 6 million stolen login credentials from a cybercriminal network. The seized servers hosted credential dumping tools and distributed phishing kits, indicating large-scale credential theft operations. Security teams should update credential monitoring, enforce multi-factor authentication, and to block known malicious IPs associated with the seized infrastructure.",
    "category": "General",
    "severity": "LOW",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/operation-endgame-malware-takedown-turns-up-over-6-mill",
    "publishedAt": "2026-11-13T02:07:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "operation-endgame-seizes-235-servers-and-6m-logins",
      "article-6ba94c3c",
      "6ba94c3c",
      "operation-endgame-seizes-235-servers-and-6m-logins-7d2fab"
    ]
  },
  {
    "slug": "maersk-data-theft-via-acquired-system-flaw-9b123dc2",
    "title": "Maersk Data Theft via Acquired System Flaw",
    "summary": "Maersk suffered a data theft incident caused by a flaw in an acquired system component, allowing unauthorized extraction of sensitive information. The vulnerability permits attackers to bypass authentication controls and read confidential data, though no public exploit has been disclosed. Maersk should apply the vendor patch immediately and review access controls to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/maersk-confirms-data-theft-amid-5-million-extortion-att",
    "publishedAt": "2026-11-13T02:00:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "maersk-data-theft-via-acquired-system-flaw",
      "article-9b123dc2",
      "9b123dc2",
      "maersk-data-theft-via-acquired-system-flaw-7238cf"
    ]
  },
  {
    "slug": "screenconnect-rce-enables-lateral-movement-66c43421",
    "title": "ScreenConnect RCE Enables Lateral Movement",
    "summary": "An RCE flaw in ScreenConnect allows attackers to execute arbitrary code on the host. The flaw arises from insufficient input validation in the remote command interface, enabling code execution that can be used for lateral movement; no public PoC exists. ScreenConnect has released a patch; administrators should update immediately and enforce network segmentation to limit lateral spread.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/hackers-deploy-malware-in-fresh-screenconnect-campaign",
    "publishedAt": "2026-11-13T01:58:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "screenconnect-rce-enables-lateral-movement",
      "article-66c43421",
      "66c43421",
      "screenconnect-rce-enables-lateral-movement-5bbf8a"
    ]
  },
  {
    "slug": "citrix-netscaler-12-flaws-auth-bypass-and-dos-560013e3",
    "title": "Citrix NetScaler 12 Flaws: Auth Bypass and DoS",
    "summary": "Citrix NetScaler suffers 12 critical flaws, including authentication bypass and denial‑of‑service. The vulnerabilities stem from improper input validation and flawed session handling, allowing attackers to gain unauthorized access and disrupt service; no public PoC is reported yet. Citrix has issued a patch; administrators should apply it promptly and verify authentication controls.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/citrix-patches-12-netscaler-and-secure-access-client-fl",
    "publishedAt": "2026-11-13T01:56:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "citrix-netscaler-12-flaws-auth-bypass-and-dos",
      "article-560013e3",
      "560013e3",
      "citrix-netscaler-12-flaws-auth-bypass-and-dos-5cdbf9"
    ]
  },
  {
    "slug": "critical-zero-day-4everable2shell-flaw-impacts-n-a-29591531",
    "title": "Critical Zero-Day 4EverAble2Shell Flaw Impacts N-able N-central",
    "summary": "A critical security intelligence alert details the 4EverAble2Shell zero-day vulnerability affecting N-able N-central remote monitoring software. Threat analysis indicates a critical zero-day vulnerability requiring defenders to review root-cause telemetry and deploy targeted threat-hunting detection rules. Administrators are urged to apply available security patches today to mitigate potential system compromise and prevent unauthorized access.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/new-n-able-4everable2shell-zero-day-exploited-hours-aft",
    "publishedAt": "2026-11-13T01:56:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "critical-zero-day-4everable2shell-flaw-impacts-n-a",
      "article-29591531",
      "29591531",
      "critical-zero-day-4everable2shell-flaw-impacts-n-a-6d157a",
      "critical-zero-day-4everable2shell-flaw-impacts-n-able-n-cent"
    ]
  },
  {
    "slug": "signdrop-clfs-driver-zero-day-grants-system-privil-d6593a77",
    "title": "SignDrop CLFS Driver Zero‑Day Grants SYSTEM Privileges",
    "summary": "A zero‑day flaw in SignDrop’s CLFS driver lets attackers gain SYSTEM privileges on affected machines. The vulnerability abuses improper privilege checks, enabling local or remote code execution with full system rights; no public PoC exists yet. SignDrop has issued a patch; security teams should apply it immediately and monitor for privilege‑escalation indicators.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/new-signdrop-zero-day-exploit-turns-windows-clfs-securi",
    "publishedAt": "2026-11-13T01:43:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "signdrop-clfs-driver-zero-day-grants-system-privil",
      "article-d6593a77",
      "d6593a77",
      "signdrop-clfs-driver-zero-day-grants-system-privil-6044ca",
      "signdrop-clfs-driver-zero-day-grants-system-privileges"
    ]
  },
  {
    "slug": "red-hat-satellite-6-17-13-receives-critical-async-40212a83",
    "title": "Red Hat Satellite 6.17.13 receives critical async update",
    "summary": "Red Hat Satellite 6.17.13 for RHEL 9 contains critical flaws that could let attackers compromise satellite management. The flaws are rated CVSS 9.0+, exposing remote code execution paths that bypass authentication and grant full control over satellite services. Red Hat recommends installing the provided patch immediately; administrators should also verify satellite configuration and apply any additional hardening guidelines.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99950",
    "publishedAt": "2026-11-12T23:52:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-satellite-6-17-13-receives-critical-async",
      "article-40212a83",
      "40212a83",
      "red-hat-satellite-6-17-13-receives-critical-async-37d661",
      "red-hat-satellite-6-17-13-receives-critical-async-update"
    ]
  },
  {
    "slug": "red-hat-satellite-6-18-11-receives-critical-async-50d0fdfe",
    "title": "Red Hat Satellite 6.18.11 receives critical async update",
    "summary": "Red Hat Satellite 6.18.11 for RHEL 9 includes critical vulnerabilities that may allow attackers to take control of satellite services. These flaws are rated CVSS 9.0+, providing remote code execution paths that bypass authentication and enable full administrative access. Apply the vendor’s patch immediately and review satellite configuration to enforce least‑privilege access controls.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99952",
    "publishedAt": "2026-11-12T23:52:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-satellite-6-18-11-receives-critical-async",
      "article-50d0fdfe",
      "50d0fdfe",
      "red-hat-satellite-6-18-11-receives-critical-async-37d661",
      "red-hat-satellite-6-18-11-receives-critical-async-update"
    ]
  },
  {
    "slug": "red-hat-satellite-6-16-15-async-update-released-b153599d",
    "title": "Red Hat Satellite 6.16.15 Async Update Released",
    "summary": "Red Hat Satellite 6.16.15 for RHEL 8 and RHEL 9 receives an async update addressing multiple vulnerabilities. The update mitigates unspecified security issues with a CVSS base score listed in the CVE references, potentially preventing unauthorized access or privilege escalation. Administrators should apply the new Satellite package immediately to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99949",
    "publishedAt": "2026-11-12T23:51:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-satellite-6-16-15-async-update-released",
      "article-b153599d",
      "b153599d",
      "red-hat-satellite-6-16-15-async-update-released-37d661"
    ]
  },
  {
    "slug": "openstack-platform-17-1-manila-update-released-e8dcdcb1",
    "title": "OpenStack Platform 17.1 Manila Update Released",
    "summary": "Red Hat OpenStack Platform 17.1 (Wallaby) receives a critical security update for the openstack-manila component. The patch addresses multiple vulnerabilities with CVSS scores listed in the CVE references, potentially allowing unauthorized data access or service disruption. Deploy the updated openstack-manila package promptly to secure storage services.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99947",
    "publishedAt": "2026-11-12T23:31:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openstack-platform-17-1-manila-update-released",
      "article-e8dcdcb1",
      "e8dcdcb1",
      "openstack-platform-17-1-manila-update-released-37d661"
    ]
  },
  {
    "slug": "fake-zillow-pages-deliver-netsupport-rat-via-click-32571686",
    "title": "Fake Zillow Pages Deliver NetSupport RAT via ClickFix Attack",
    "summary": "Threat actors deploy fake Zillow pages in a ClickFix campaign to compromise Windows users with NetSupport RAT. Deceptive verification prompts copy a malicious PowerShell script onto victim clipboards, social engineering users into executing persistent remote-control malware. According to EfficientIP Research Labs, security administrators should restrict user PowerShell execution rights and block untrusted web execution prompts.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/13/fake-zillow-clickfix-netsupport-rat/",
    "publishedAt": "2026-11-12T23:15:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fake-zillow-pages-deliver-netsupport-rat-via-click",
      "article-32571686",
      "32571686",
      "fake-zillow-pages-deliver-netsupport-rat-via-click-5d8862",
      "fake-zillow-pages-deliver-netsupport-rat-via-clickfix-attack"
    ]
  },
  {
    "slug": "postgresql-security-update-fixes-52-vulnerabilitie-360a9c71",
    "title": "PostgreSQL security update fixes 52 vulnerabilities, ends support for PostgreSQL 14",
    "summary": "The PostgreSQL Global Development Group released PostgreSQL 18.7, 17.12, 16.16, 15.20 and 14.25 on November 12, fixing 52 security vulnerabilities and more than 140 other bugs. Most of those code execution bugs are memory errors or type confusion, where PostgreSQL handles a value as the wrong data type.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/13/postgresql-security-update-november-2026/",
    "publishedAt": "2026-11-12T23:05:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "postgresql-security-update-fixes-52-vulnerabilitie",
      "article-360a9c71",
      "360a9c71",
      "postgresql-security-update-fixes-52-vulnerabilitie-3d48ad",
      "postgresql-security-update-fixes-52-vulnerabilities-ends-sup"
    ]
  },
  {
    "slug": "rhsa-2026-99741-important-mysql-8-4-security-updat-feec161f",
    "title": "RHSA-2026:99741: Important: mysql:8.4 security update",
    "summary": "An update for the mysql:8.4 module is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99741",
    "publishedAt": "2026-11-12T23:05:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99741-important-mysql-8-4-security-updat",
      "article-feec161f",
      "feec161f",
      "rhsa-2026-99741-important-mysql-8-4-security-updat-37d669",
      "rhsa-2026-99741-important-mysql-8-4-security-update"
    ]
  },
  {
    "slug": "chrome-for-android-update-53843f68",
    "title": "Chrome for Android Update",
    "summary": "We've just released Chrome 158 (158.0.8127.36) for Android to a small percentage of users. It'll become available on Google Play over the next few days. If you find a new issue, please let us know by filing a bug .",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-for-android-update_012297226.html",
    "publishedAt": "2026-11-12T23:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-for-android-update",
      "article-53843f68",
      "53843f68",
      "chrome-for-android-update-1c46b4"
    ]
  },
  {
    "slug": "rhsa-2026-99715-important-krb5-security-bug-fix-an-502ec757",
    "title": "RHSA-2026:99715: Important: krb5 security, bug fix, and enhancement update",
    "summary": "An update for krb5 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99715",
    "publishedAt": "2026-11-12T22:53:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99715-important-krb5-security-bug-fix-an",
      "article-502ec757",
      "502ec757",
      "rhsa-2026-99715-important-krb5-security-bug-fix-an-37d669",
      "rhsa-2026-99715-important-krb5-security-bug-fix-and-enhancem"
    ]
  },
  {
    "slug": "rhsa-2026-99825-important-pki-deps-10-6-security-b-d68d107f",
    "title": "RHSA-2026:99825: Important: pki-deps:10.6 security, bug fix, and enhancement update",
    "summary": "An update for the pki-deps:10.6 module is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99825",
    "publishedAt": "2026-11-12T22:53:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99825-important-pki-deps-10-6-security-b",
      "article-d68d107f",
      "d68d107f",
      "rhsa-2026-99825-important-pki-deps-10-6-security-b-37d665",
      "rhsa-2026-99825-important-pki-deps-10-6-security-bug-fix-and"
    ]
  },
  {
    "slug": "sckit-worm-targets-msps-via-screenconnect-39490bde",
    "title": "SCKit Worm Targets MSPs via ScreenConnect",
    "summary": "A worm-like malware toolkit named SCKit has been deployed in recent ScreenConnect attacks against managed service providers. The malware spreads from infected customer devices to MSP technicians' computers, enabling attackers to compromise additional managed networks and exfiltrate data. Security teams should isolate affected systems, update ScreenConnect to the latest version, and monitor for lateral movement.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/new-worm-like-sckit-malware-targets-msps-in-screenconnect-attacks/",
    "publishedAt": "2026-11-12T22:53:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sckit-worm-targets-msps-via-screenconnect",
      "article-39490bde",
      "39490bde",
      "sckit-worm-targets-msps-via-screenconnect-2041b9"
    ]
  },
  {
    "slug": "organizations-struggle-with-post-quantum-cryptogra-0e7823a4",
    "title": "Organizations Struggle With Post-Quantum Cryptography Asset Discovery",
    "summary": "Enterprise organizations face significant operational hurdles when preparing for the mandatory transition to post-quantum cryptography standards. According to Dark Reading, most entities have not adequately audited their internal cryptographic estate to establish a baseline for post-quantum implementation. Security leadership must prioritize discovering and mapping legacy cryptographic assets across systems before beginning post-quantum security deployments.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/getting-past-post-quantum-cryptography-discovery",
    "publishedAt": "2026-11-12T22:46:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "organizations-struggle-with-post-quantum-cryptogra",
      "article-0e7823a4",
      "0e7823a4",
      "organizations-struggle-with-post-quantum-cryptogra-668bf4",
      "organizations-struggle-with-post-quantum-cryptography-asset-"
    ]
  },
  {
    "slug": "rhsa-2026-99915-moderate-xz-security-update-346452a7",
    "title": "RHSA-2026:99915: Moderate: xz security update",
    "summary": "An update for xz is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99915",
    "publishedAt": "2026-11-12T22:40:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99915-moderate-xz-security-update",
      "article-346452a7",
      "346452a7",
      "rhsa-2026-99915-moderate-xz-security-update-37d662"
    ]
  },
  {
    "slug": "rhsa-2026-99865-moderate-xorg-x11-server-security-c1a992fe",
    "title": "RHSA-2026:99865: Moderate: xorg-x11-server security update",
    "summary": "An update for xorg-x11-server is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99865",
    "publishedAt": "2026-11-12T22:38:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99865-moderate-xorg-x11-server-security",
      "article-c1a992fe",
      "c1a992fe",
      "rhsa-2026-99865-moderate-xorg-x11-server-security-37d665",
      "rhsa-2026-99865-moderate-xorg-x11-server-security-update"
    ]
  },
  {
    "slug": "hackers-exploit-4-800-github-accounts-for-cloud-cr-25faffd4",
    "title": "Hackers Exploit 4,800 GitHub Accounts for Cloud Credentials",
    "summary": "A wfx-loot campaign compromised 4,837 GitHub accounts, using them to scan 61,764 repositories, open pull requests, and deploy secrets‑stealing malware. The attackers leveraged credential reuse and automated scanning to exfiltrate cloud service keys, exposing multiple cloud environments to unauthorized access. GitHub has issued a security advisory, urging users to rotate compromised credentials, enable two‑factor authentication, and review repository access logs.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-compromise-4-800-github-accounts-to-steal-cloud-credentials/",
    "publishedAt": "2026-11-12T22:25:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-4-800-github-accounts-for-cloud-cr",
      "article-25faffd4",
      "25faffd4",
      "hackers-exploit-4-800-github-accounts-for-cloud-cr-270eee",
      "hackers-exploit-4-800-github-accounts-for-cloud-credentials"
    ]
  },
  {
    "slug": "arctic-wolf-discusses-agentic-ai-in-security-ops-bd8ef852",
    "title": "Arctic Wolf Discusses Agentic AI in Security Ops",
    "summary": "Arctic Wolf released a report on how agentic AI and human analysts collaborate to accelerate security operations, reduce investigation time, and improve threat response. The document details AI-driven automation integrated with expert analysis to streamline incident detection, triage, and remediation, citing performance metrics.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/on-demand-webinar-uk/inside-2026-agentic-security-operations-report/",
    "publishedAt": "2026-11-12T22:13:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "arctic-wolf-discusses-agentic-ai-in-security-ops",
      "article-bd8ef852",
      "bd8ef852",
      "arctic-wolf-discusses-agentic-ai-in-security-ops-2b8ebe"
    ]
  },
  {
    "slug": "feds-seize-1-2b-from-binance-theft-takedown-facest-f9460563",
    "title": "Feds Seize $1.2B from Binance Theft, Takedown FaceStealer Tools",
    "summary": "The DOJ and FBI seized $1.2 billion tied to a North Korea‑linked cryptocurrency theft and dismantled FaceStealer malware tools. Investigations revealed the funds were proceeds from stolen digital assets, while the takedown removed the credential‑harvesting infrastructure. Cryptocurrency exchanges are urged to strengthen monitoring and compliance to deter future thefts and cooperate with ongoing investigations.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/stolen-binance-crypto-recovered-doj-facestealer-disrupted",
    "publishedAt": "2026-11-12T21:42:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "feds-seize-1-2b-from-binance-theft-takedown-facest",
      "article-f9460563",
      "f9460563",
      "feds-seize-1-2b-from-binance-theft-takedown-facest-51d148",
      "feds-seize-1-2b-from-binance-theft-takedown-facestealer-tool"
    ]
  },
  {
    "slug": "chrome-early-stable-update-158-0-8127-36-37-for-wi-c4f4dddf",
    "title": "Chrome Early Stable Update 158.0.8127.36/37 for Windows",
    "summary": "Google Chrome released an early stable update for Windows, version 158.0.8127.36/37, as part of its routine patch cycle. The update includes minor bug fixes and performance improvements, with a full changelog available in the release notes. Users are advised to install the update promptly to maintain compatibility and benefit from the latest stability enhancements.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/early-stable-update-for-desktop_0520415684.html",
    "publishedAt": "2026-11-12T21:30:51.410Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-early-stable-update-158-0-8127-36-37-for-wi",
      "article-c4f4dddf",
      "c4f4dddf",
      "chrome-early-stable-update-158-0-8127-36-37-for-wi-8f8561",
      "chrome-early-stable-update-158-0-8127-36-37-for-windows"
    ]
  },
  {
    "slug": "apache-http-server-vulnerabilities-enable-potentia-5daaddf2",
    "title": "Apache HTTP Server Vulnerabilities Enable Potential Code Execution",
    "summary": "Apache HTTP Server’s mod_dav, mod_vhost_alias, and mod_md modules contain memory corruption flaws that allow attackers to crash or potentially execute code via crafted WebDAV locks or specific requests. CVE-2026-109163’s stack buffer overflow can lead to arbitrary code execution, while CVE-2026-42528 and CVE-2026-109163 also enable denial of service. Administrators should apply patches and restrict WebDAV access until the fixes are deployed.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9090-1",
    "publishedAt": "2026-11-12T21:25:57.000Z",
    "cves": [
      "CVE-2026-109163",
      "CVE-2026-42528"
    ],
    "additionalSources": [],
    "aliases": [
      "apache-http-server-vulnerabilities-enable-potentia",
      "article-5daaddf2",
      "5daaddf2",
      "apache-http-server-vulnerabilities-enable-potentia-7e85a4",
      "apache-http-server-vulnerabilities-enable-potential-code-exe"
    ]
  },
  {
    "slug": "rhsa-2026-99695-important-glib-networking-security-a80cb47d",
    "title": "RHSA-2026:99695: Important: glib-networking security update",
    "summary": "An update for glib-networking is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99695",
    "publishedAt": "2026-11-12T21:24:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99695-important-glib-networking-security",
      "article-a80cb47d",
      "a80cb47d",
      "rhsa-2026-99695-important-glib-networking-security-37d66c",
      "rhsa-2026-99695-important-glib-networking-security-update"
    ]
  },
  {
    "slug": "defenders-prepare-strategies-against-artex-and-ant-6f314e46",
    "title": "Defenders Prepare Strategies Against Artex and AntiFox Tools",
    "summary": "Cybercriminals are increasingly leveraging agentic penetration-testing software, including Artex and AntiFox, to target enterprise environments. These autonomous testing frameworks allow malicious actors to automate compromise paths, significantly increasing the scale and speed of network attacks. Security experts recommend that enterprise defenders immediately establish tailored response plans and defensive mitigations to neutralize automated threat capabilities.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/cyber-experts-fight-artex-antifox",
    "publishedAt": "2026-11-12T21:18:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "defenders-prepare-strategies-against-artex-and-ant",
      "article-6f314e46",
      "6f314e46",
      "defenders-prepare-strategies-against-artex-and-ant-312a19",
      "defenders-prepare-strategies-against-artex-and-antifox-tools"
    ]
  },
  {
    "slug": "cve-2026-126793-privilege-escalation-in-aurora-pos-84682522",
    "title": "CVE-2026-126793 - Privilege escalation in Aurora PostgreSQL dialect detection in AWS Advanced Go Wrapper",
    "summary": "An untrusted search path vulnerability in Aurora PostgreSQL dialect detection in AWS Advanced Go Wrapper (CVE-2026-126793) allows an authenticated attacker to escalate privileges to other database users, including the rds_superuser role, by executing a crafted function during cluster connection. AWS has released patched versions.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-182-aws/",
    "publishedAt": "2026-11-12T21:11:28.000Z",
    "cves": [
      "CVE-2026-126793"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-126793-privilege-escalation-in-aurora-pos",
      "article-84682522",
      "84682522",
      "cve-2026-126793-privilege-escalation-in-aurora-pos-137402",
      "cve-2026-126793-privilege-escalation-in-aurora-postgresql-di"
    ]
  },
  {
    "slug": "debian-lan-acl-flaw-allows-credential-changes-aefd640e",
    "title": "Debian-LAN ACL flaw allows credential changes",
    "summary": "A flaw in Debian-LAN’s Kerberos admin server ACLs permits authenticated users to alter other users’ credentials, enabling privilege escalation. The vulnerability stems from overly permissive ACL configuration, lacking proper access checks, and could be exploited by insiders with valid credentials. Red Hat recommends applying the latest Debian-LAN patch or tightening ACLs to restrict admin server access, mitigating potential credential tampering.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9068-1",
    "publishedAt": "2026-11-12T21:02:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "debian-lan-acl-flaw-allows-credential-changes",
      "article-aefd640e",
      "aefd640e",
      "debian-lan-acl-flaw-allows-credential-changes-7e86e3"
    ]
  },
  {
    "slug": "x11vnc-shared-memory-permission-flaw-525aa917",
    "title": "x11vnc Shared Memory Permission Flaw",
    "summary": "The x11vnc remote desktop server creates shared memory segments with insecure permissions, exposing a local privilege escalation vector. A local attacker could read sensitive data or alter screen contents, potentially compromising user sessions and data integrity. Apply the vendor patch or upgrade to the latest x11vnc release to enforce proper memory permissions.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9089-1",
    "publishedAt": "2026-11-12T20:55:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "x11vnc-shared-memory-permission-flaw",
      "article-525aa917",
      "525aa917",
      "x11vnc-shared-memory-permission-flaw-7e85f6"
    ]
  },
  {
    "slug": "microsoft-365-outage-disrupts-outlook-exchange-onl-2d15b165",
    "title": "Microsoft 365 Outage Disrupts Outlook, Exchange Online and Teams",
    "summary": "Microsoft says failed server health checks disrupted Outlook and other Microsoft 365 services. The company is still investigating the cause and has disclosed no evidence of a cyberattack.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/microsoft-365-outage-disrupts-outlook-exchange-online-and-teams/",
    "publishedAt": "2026-11-12T20:55:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-365-outage-disrupts-outlook-exchange-onl",
      "article-2d15b165",
      "2d15b165",
      "microsoft-365-outage-disrupts-outlook-exchange-onl-4ceea1",
      "microsoft-365-outage-disrupts-outlook-exchange-online-and-te"
    ]
  },
  {
    "slug": "tigervnc-stores-tls-exceptions-as-trusted-cas-b7eedaef",
    "title": "TigerVNC Stores TLS Exceptions as Trusted CAs",
    "summary": "TigerVNC viewer treats TLS certificate exceptions as trusted CAs, allowing a remote attacker to impersonate any VNC server after a user accepts an exception. The flaw requires user interaction and does not grant code execution, yet it enables man‑in‑the‑middle attacks on VNC sessions. Ubuntu advises upgrading to TigerVNC 1.2.0 or later and avoiding unverified certificate acceptance.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9088-1",
    "publishedAt": "2026-11-12T20:55:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "tigervnc-stores-tls-exceptions-as-trusted-cas",
      "article-b7eedaef",
      "b7eedaef",
      "tigervnc-stores-tls-exceptions-as-trusted-cas-7e85fa"
    ]
  },
  {
    "slug": "still-in-the-meeting-bluenoroff-six-months-on-0fe49fbc",
    "title": "Still in the Meeting: BlueNoroff Six Months On",
    "summary": "In April, Arctic Wolf Labs documented how BlueNoroff used fake Zoom and Microsoft Teams meetings, ClickFix prompts, and AI-generated participants to compromise leaders in the Web3 and cryptocurrency sector. We expected the threat actor to adapt after we published that report.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/blog/still-in-the-meeting-bluenoroff-six-months-on/",
    "publishedAt": "2026-11-12T20:55:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "still-in-the-meeting-bluenoroff-six-months-on",
      "article-0fe49fbc",
      "0fe49fbc",
      "still-in-the-meeting-bluenoroff-six-months-on-6ac6bc"
    ]
  },
  {
    "slug": "usn-9087-1-signing-party-vulnerability-f443fe14",
    "title": "USN-9087-1: signing-party vulnerability",
    "summary": "It was discovered that the gpg-key2ps tool in signing-party did not properly sanitize user IDs before passing them to a shell. If a user were tricked into processing a specially crafted OpenPGP key, an attacker could possibly use this issue to execute arbitrary commands.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9087-1",
    "publishedAt": "2026-11-12T20:55:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9087-1-signing-party-vulnerability",
      "article-f443fe14",
      "f443fe14",
      "usn-9087-1-signing-party-vulnerability-7e85fe"
    ]
  },
  {
    "slug": "usn-9086-1-sa-exim-vulnerability-05de8e34",
    "title": "USN-9086-1: SA-Exim vulnerability",
    "summary": "It was discovered that SA-Exim unsafely evaluated the parameters of its greylisting SpamAssassin rule. An attacker able to write SpamAssassin configuration files or rules could possibly use this issue to execute arbitrary code.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9086-1",
    "publishedAt": "2026-11-12T20:54:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9086-1-sa-exim-vulnerability",
      "article-05de8e34",
      "05de8e34",
      "usn-9086-1-sa-exim-vulnerability-7e8602"
    ]
  },
  {
    "slug": "usn-9085-1-ruby-openid-vulnerability-529ecadc",
    "title": "USN-9085-1: Ruby OpenID vulnerability",
    "summary": "It was discovered that Ruby OpenID sent a request to the claimed identifier URL before verifying the signature of an OpenID response. A remote attacker could possibly use this issue to perform server-side request forgery attacks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9085-1",
    "publishedAt": "2026-11-12T20:54:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9085-1-ruby-openid-vulnerability",
      "article-529ecadc",
      "529ecadc",
      "usn-9085-1-ruby-openid-vulnerability-7e8605"
    ]
  },
  {
    "slug": "usn-9084-1-radicale-vulnerability-f879e9e3",
    "title": "USN-9084-1: Radicale vulnerability",
    "summary": "It was discovered that Radicale did not delay failed authentication attempts when using htpasswd authentication. A remote attacker could possibly use this issue to obtain user passwords through timing or brute-force attacks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9084-1",
    "publishedAt": "2026-11-12T20:54:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9084-1-radicale-vulnerability",
      "article-f879e9e3",
      "f879e9e3",
      "usn-9084-1-radicale-vulnerability-7e8609"
    ]
  },
  {
    "slug": "gevent-server-flaw-enables-http-request-smuggling-12ae9695",
    "title": "Gevent server flaw enables HTTP request smuggling",
    "summary": "The gevent WSGI server fails to validate chunked transfer encoding trailers, enabling remote attackers to smuggle HTTP requests and potentially elevate privileges. Request smuggling can bypass security controls, leading to unauthorized data access or command execution. Upgrade to the latest gevent version or apply the vendor’s patch, and enforce strict trailer validation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9083-1",
    "publishedAt": "2026-11-12T20:54:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gevent-server-flaw-enables-http-request-smuggling",
      "article-12ae9695",
      "12ae9695",
      "gevent-server-flaw-enables-http-request-smuggling-7e860d"
    ]
  },
  {
    "slug": "usn-9082-1-pngquant-vulnerability-31566bba",
    "title": "USN-9082-1: pngquant vulnerability",
    "summary": "Choi Jaeseung discovered that pngquant incorrectly handled certain PNG images, leading to a buffer overflow. An attacker could possibly use this issue to cause pngquant to crash or execute arbitrary code.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9082-1",
    "publishedAt": "2026-11-12T20:53:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9082-1-pngquant-vulnerability",
      "article-31566bba",
      "31566bba",
      "usn-9082-1-pngquant-vulnerability-7e8611"
    ]
  },
  {
    "slug": "red-hat-releases-perl-cgi-security-update-f16d5a95",
    "title": "Red Hat Releases Perl-CGI Security Update",
    "summary": "Perl-CGI on Red Hat Enterprise Linux 8 is affected by a security flaw prompting an update. Red Hat Product Security rated the issue as Important, with CVSS base scores linked to CVE references. The vendor has released the patch; administrators should install it promptly today to eliminate the vulnerability.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99849",
    "publishedAt": "2026-11-12T20:49:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-perl-cgi-security-update",
      "article-f16d5a95",
      "f16d5a95",
      "red-hat-releases-perl-cgi-security-update-37d665"
    ]
  },
  {
    "slug": "rhsa-2026-99845-important-pki-deps-10-6-security-b-888e82ef",
    "title": "RHSA-2026:99845: Important: pki-deps:10.6 security, bug fix, and enhancement update",
    "summary": "An update for the pki-deps:10.6 module is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99845",
    "publishedAt": "2026-11-12T20:45:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99845-important-pki-deps-10-6-security-b",
      "article-888e82ef",
      "888e82ef",
      "rhsa-2026-99845-important-pki-deps-10-6-security-b-37d665",
      "rhsa-2026-99845-important-pki-deps-10-6-security-bug-fix-and"
    ]
  },
  {
    "slug": "rhsa-2026-99716-important-krb5-security-bug-fix-an-11f78917",
    "title": "RHSA-2026:99716: Important: krb5 security, bug fix, and enhancement update",
    "summary": "An update for krb5 is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99716",
    "publishedAt": "2026-11-12T20:43:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99716-important-krb5-security-bug-fix-an",
      "article-11f78917",
      "11f78917",
      "rhsa-2026-99716-important-krb5-security-bug-fix-an-37d669",
      "rhsa-2026-99716-important-krb5-security-bug-fix-and-enhancem"
    ]
  },
  {
    "slug": "rhsa-2026-99817-important-xfsprogs-security-update-bca3f800",
    "title": "RHSA-2026:99817: Important: xfsprogs security update",
    "summary": "An update for xfsprogs is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99817",
    "publishedAt": "2026-11-12T20:42:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99817-important-xfsprogs-security-update",
      "article-bca3f800",
      "bca3f800",
      "rhsa-2026-99817-important-xfsprogs-security-update-37d665"
    ]
  },
  {
    "slug": "red-hat-releases-glib2-security-update-5fe320e5",
    "title": "Red Hat Releases glib2 Security Update",
    "summary": "glib2 on Red Hat Enterprise Linux 8.6 is impacted by a security flaw prompting an update. Red Hat Product Security rated the issue as Moderate, with CVSS base scores linked to CVE references. The vendor has released the patch; administrators and promptly apply it today to mitigate the vulnerability.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99864",
    "publishedAt": "2026-11-12T20:40:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-glib2-security-update",
      "article-5fe320e5",
      "5fe320e5",
      "red-hat-releases-glib2-security-update-37d665"
    ]
  },
  {
    "slug": "rhsa-2026-99846-important-pki-deps-10-6-security-b-9d58449f",
    "title": "RHSA-2026:99846: Important: pki-deps:10.6 security, bug fix, and enhancement update",
    "summary": "An update for the pki-deps:10.6 module is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99846",
    "publishedAt": "2026-11-12T20:39:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99846-important-pki-deps-10-6-security-b",
      "article-9d58449f",
      "9d58449f",
      "rhsa-2026-99846-important-pki-deps-10-6-security-b-37d665",
      "rhsa-2026-99846-important-pki-deps-10-6-security-bug-fix-and"
    ]
  },
  {
    "slug": "rhsa-2026-99826-important-rhc-security-update-0ac23d2f",
    "title": "RHSA-2026:99826: Important: rhc security update",
    "summary": "An update for rhc is now available for Red Hat Enterprise Linux 7 Extended Lifecycle Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99826",
    "publishedAt": "2026-11-12T20:38:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99826-important-rhc-security-update",
      "article-0ac23d2f",
      "0ac23d2f",
      "rhsa-2026-99826-important-rhc-security-update-37d665"
    ]
  },
  {
    "slug": "red-hat-releases-mysql-8-4-security-update-50925d94",
    "title": "Red Hat Releases MySQL 8.4 Security Update",
    "summary": "Red Hat has issued a security update for MySQL 8.4 on Enterprise Linux 10. The update addresses multiple critical vulnerabilities with an Important impact rating; CVSS base scores are listed in the referenced CVE links. Administrators should apply the patch promptly and review the CVE references for detailed severity information.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99720",
    "publishedAt": "2026-11-12T20:37:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-mysql-8-4-security-update",
      "article-50925d94",
      "50925d94",
      "red-hat-releases-mysql-8-4-security-update-37d669"
    ]
  },
  {
    "slug": "rhc-security-update-for-rhel-8-6-available-90f40726",
    "title": "RHC Security Update for RHEL 8.6 Available",
    "summary": "Red Hat released an important security update for the rhc client on RHEL 8.6 Advanced Mission Critical Update Support and Extended Update Support Long‑Life Add‑On. The update addresses multiple vulnerabilities, each with a CVSS base score listed in the CVE references, but no active exploitation has been reported. Red Hat recommends applying the rhc update immediately to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99827",
    "publishedAt": "2026-11-12T20:34:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhc-security-update-for-rhel-8-6-available",
      "article-90f40726",
      "90f40726",
      "rhc-security-update-for-rhel-8-6-available-37d665"
    ]
  },
  {
    "slug": "rhsa-2026-99824-important-rhc-security-update-49927037",
    "title": "RHSA-2026:99824: Important: rhc security update",
    "summary": "An update for rhc is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99824",
    "publishedAt": "2026-11-12T20:28:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99824-important-rhc-security-update",
      "article-49927037",
      "49927037",
      "rhsa-2026-99824-important-rhc-security-update-37d665"
    ]
  },
  {
    "slug": "red-hat-issues-libx11-security-update-c4881392",
    "title": "Red Hat Issues libX11 Security Update",
    "summary": "Red Hat released a security update for libX11 affecting Enterprise Linux 7 Extended Lifecycle Support. The update addresses multiple vulnerabilities rated as Important, with CVSS scores available via referenced CVE links, and mitigates potential privilege escalation. Customers should install the patch immediately to mitigate potential denial‑of‑service or privilege escalation risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99754",
    "publishedAt": "2026-11-12T20:17:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-libx11-security-update",
      "article-c4881392",
      "c4881392",
      "red-hat-issues-libx11-security-update-37d669"
    ]
  },
  {
    "slug": "microsoft-365-outage-hits-outlook-teams-copilot-b8aa62f3",
    "title": "Microsoft 365 Outage Hits Outlook, Teams, Copilot",
    "summary": "Microsoft is investigating a widespread outage that has disrupted Outlook, Microsoft Teams, and Copilot services for users worldwide. Preliminary diagnostics indicate a network routing issue within Microsoft’s global infrastructure, causing connectivity failures across multiple regions. Microsoft has deployed a temporary fix and is working to restore full functionality while monitoring for residual impact.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/massive-microsoft-365-outage-disrupts-outlook-teams-copilot-worldwide/",
    "publishedAt": "2026-11-12T20:15:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-365-outage-hits-outlook-teams-copilot",
      "article-b8aa62f3",
      "b8aa62f3",
      "microsoft-365-outage-hits-outlook-teams-copilot-db0964"
    ]
  },
  {
    "slug": "chrome-159-promoted-to-beta-channel-c2196938",
    "title": "Chrome 159 Promoted to Beta Channel",
    "summary": "Google Chrome promoted version 159 to the Beta channel for Windows, macOS, and Linux, expanding early access for developers and testers. The update includes under‑the‑hood performance and stability improvements alongside several new features, but no security vulnerabilities are reported. Users may switch channels via the Chrome settings or consult the Chromium blog for detailed change logs and bug‑reporting procedures.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-beta-for-desktop-update_0414360355.html",
    "publishedAt": "2026-11-12T20:13:33.460Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-159-promoted-to-beta-channel",
      "article-c2196938",
      "c2196938",
      "chrome-159-promoted-to-beta-channel-50ce61"
    ]
  },
  {
    "slug": "red-hat-issues-libxtst-security-update-0390e8d5",
    "title": "Red Hat Issues libXtst Security Update",
    "summary": "Red Hat released a security update for libXtst affecting Enterprise Linux 7 Extended Lifecycle Support. The update fixes multiple vulnerabilities rated as Important, with CVSS scores available via referenced CVE links, and reduces privilege escalation risk. Customers should apply the patch promptly to prevent potential denial‑of‑service or privilege escalation and mitigate related risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99745",
    "publishedAt": "2026-11-12T20:10:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-libxtst-security-update",
      "article-0390e8d5",
      "0390e8d5",
      "red-hat-issues-libxtst-security-update-37d669"
    ]
  },
  {
    "slug": "luna-moth-targets-law-firms-with-token-theft-cbb89b75",
    "title": "Luna Moth Targets Law Firms with Token Theft",
    "summary": "Extortion group Luna Moth re‑targets law firms that declined its first ransom, launching a social‑engineering campaign to harvest Microsoft access tokens. The attack leverages phishing emails that embed malicious attachments or links, exploiting user credential theft to gain privileged cloud access. Security teams should enforce multi‑factor authentication, monitor token usage, and conduct employee awareness training to mitigate token‑based credential compromise.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/data-privacy/extortion-luna-moth-law-firms-second-time",
    "publishedAt": "2026-11-12T20:09:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "luna-moth-targets-law-firms-with-token-theft",
      "article-cbb89b75",
      "cbb89b75",
      "luna-moth-targets-law-firms-with-token-theft-1a55e6"
    ]
  },
  {
    "slug": "red-hat-releases-qt5-qtbase-security-update-26b8c52b",
    "title": "Red Hat Releases qt5‑qtbase Security Update",
    "summary": "Red Hat issued an important security update for qt5‑qtbase on RHEL 7 Extended Lifecycle Support, addressing multiple vulnerabilities. The update is rated Important by Red Hat Product Security, and CVSS base scores for each vulnerability are provided in the references. Users should apply the patch immediately to mitigate the identified weaknesses and consult the CVE links for detailed severity information.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99746",
    "publishedAt": "2026-11-12T20:08:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-qt5-qtbase-security-update",
      "article-26b8c52b",
      "26b8c52b",
      "red-hat-releases-qt5-qtbase-security-update-37d669"
    ]
  },
  {
    "slug": "sudo-time-restriction-bypass-vulnerability-9995d4e0",
    "title": "Sudo Time Restriction Bypass Vulnerability",
    "summary": "Sudo on Ubuntu 18.04 LTS and 20.04 LTS contains a flaw that fails to enforce NOTBEFORE and NOTAFTER time restrictions when timestamps lack a timezone indicator. A local attacker could manipulate the TZ environment variable to execute commands outside the intended time window, escalating privileges. Ubuntu has released updates for both releases; administrators should apply them to prevent the bypass.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8895-2",
    "publishedAt": "2026-11-12T20:06:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sudo-time-restriction-bypass-vulnerability",
      "article-9995d4e0",
      "9995d4e0",
      "sudo-time-restriction-bypass-vulnerability-7fc9ae"
    ]
  },
  {
    "slug": "n-able-zero-day-exploited-for-miner-deployment-89b33db4",
    "title": "N‑Able Zero‑Day Exploited for Miner Deployment",
    "summary": "Hackers are exploiting a newly disclosed N‑Able N‑Central zero‑day, dubbed '4EverAble2Shell', to compromise servers and deploy cryptocurrency miners. The flaw permits unauthenticated remote code execution, enabling attackers to gain root access even on systems that have applied the latest emergency hotfix. N‑Able has released a patch; administrators should immediately apply the update and monitor for unauthorized miner processes.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/new-n-able-4everable2shell-zero-day-exploited-hours-after-poc-released/",
    "publishedAt": "2026-11-12T19:51:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-zero-day-exploited-for-miner-deployment",
      "article-89b33db4",
      "89b33db4",
      "n-able-zero-day-exploited-for-miner-deployment-548c4c"
    ]
  },
  {
    "slug": "united-airlines-bans-ai-assistants-for-credential-d991520a",
    "title": "United Airlines Bans AI Assistants for Credential Safety",
    "summary": "United Airlines has prohibited customers from using AI assistants to access its services, citing risks of credential exposure and transactions. The decision follows concerns that shared login tokens could be harvested by malicious actors, enabling unauthorized account activity and data leakage. Customers are advised to use official mobile apps and two‑factor authentication, and airlines will monitor for suspicious account behavior.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/united-airlines-to-block-customers-using-ai-agents",
    "publishedAt": "2026-11-12T19:20:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "united-airlines-bans-ai-assistants-for-credential",
      "article-d991520a",
      "d991520a",
      "united-airlines-bans-ai-assistants-for-credential-3f5cae",
      "united-airlines-bans-ai-assistants-for-credential-safety"
    ]
  },
  {
    "slug": "red-hat-issues-critical-fence-agents-update-36ba2f36",
    "title": "Red Hat Issues Critical Fence‑Agents Update",
    "summary": "Red Hat released a critical security update for fence‑agents on RHEL 9.8 EUS, addressing multiple high‑impact vulnerabilities. The update mitigates remote code execution risks by patching underlying flaws identified in the fence‑agents component, with CVSS base scores indicating severe impact. Administrators should apply the RHSA‑2026:99693 update immediately and verify that fence‑agents is running the latest patched version.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99693",
    "publishedAt": "2026-11-12T19:19:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-fence-agents-update",
      "article-36ba2f36",
      "36ba2f36",
      "red-hat-issues-critical-fence-agents-update-37d66c"
    ]
  },
  {
    "slug": "rhsa-2026-99758-important-osbuild-composer-securit-8508d258",
    "title": "RHSA-2026:99758: Important: osbuild-composer security update",
    "summary": "An update for osbuild-composer is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99758",
    "publishedAt": "2026-11-12T19:13:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99758-important-osbuild-composer-securit",
      "article-8508d258",
      "8508d258",
      "rhsa-2026-99758-important-osbuild-composer-securit-37d669",
      "rhsa-2026-99758-important-osbuild-composer-security-update"
    ]
  },
  {
    "slug": "apache-http-2-module-vulnerability-allows-remote-c-93d590e7",
    "title": "Apache HTTP/2 Module Vulnerability Allows Remote Code Execution",
    "summary": "Apache HTTP Server's HTTP/2 module contains a critical flaw that permits unauthenticated remote code execution. The vulnerability, which lacks a CVE identifier, could allow attackers to run arbitrary code on affected servers without credentials. Apache has released an update; administrators should apply the patch immediately and verify that HTTP/2 traffic is properly secured.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/apache-http-server-patches-critical-http-2-remote-code-execution-flaw/",
    "publishedAt": "2026-11-12T19:12:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apache-http-2-module-vulnerability-allows-remote-c",
      "article-93d590e7",
      "93d590e7",
      "apache-http-2-module-vulnerability-allows-remote-c-221b21",
      "apache-http-2-module-vulnerability-allows-remote-code-execut"
    ]
  },
  {
    "slug": "cve-2026-127119-unverified-ownership-of-the-defaul-cf8beca4",
    "title": "CVE-2026-127119 - Unverified ownership of the default EMR cluster log location in AWS SDK for pandas",
    "summary": "An unverified ownership vulnerability in the EMR module of AWS SDK for pandas (awswrangler) from version 1.1.0 before 3.18.0 allows attackers to exploit default cluster log locations. AWS advises upgrading to awswrangler 3.18.0 or later to resolve the issue. The flaw is tracked as CVE-2026-127119.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-181-aws/",
    "publishedAt": "2026-11-12T19:07:08.000Z",
    "cves": [
      "CVE-2026-127119"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-127119-unverified-ownership-of-the-defaul",
      "article-cf8beca4",
      "cf8beca4",
      "cve-2026-127119-unverified-ownership-of-the-defaul-1528db",
      "cve-2026-127119-unverified-ownership-of-the-default-emr-clus"
    ]
  },
  {
    "slug": "red-hat-issues-thunderbird-security-update-08e51de2",
    "title": "Red Hat Issues thunderbird Security Update",
    "summary": "Red Hat released an important security update for thunderbird on RHEL 9.2 Update Services for SAP Solutions, fixing bugs. The update is rated Important by Red Hat Product Security, and CVSS base scores for each vulnerability are listed in the references. Administrators should apply the patch promptly to address the identified issues and review the CVE links for severity details.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99749",
    "publishedAt": "2026-11-12T19:02:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-thunderbird-security-update",
      "article-08e51de2",
      "08e51de2",
      "red-hat-issues-thunderbird-security-update-37d669"
    ]
  },
  {
    "slug": "red-hat-releases-sso-7-6-14-update-for-rhel-7-b589d983",
    "title": "Red Hat Releases SSO 7.6.14 Update for RHEL 7",
    "summary": "Red Hat issued a security update for Single Sign‑On 7.6.14 on RHEL 7, addressing multiple vulnerabilities. The advisory labels the update as critical, but the vendor rates the security impact as none and provides CVSS scores via CVE links. Administrators should install the new packages immediately to ensure compatibility, though no immediate exploitation risk is reported.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99764",
    "publishedAt": "2026-11-12T18:58:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-sso-7-6-14-update-for-rhel-7",
      "article-b589d983",
      "b589d983",
      "red-hat-releases-sso-7-6-14-update-for-rhel-7-37d668"
    ]
  },
  {
    "slug": "red-hat-updates-sso-7-6-14-for-rhel-8-88292ebb",
    "title": "Red Hat Updates SSO 7.6.14 for RHEL 8",
    "summary": "Red Hat released a security update for Single Sign‑On 7.6.14 on RHEL 8, fixing several vulnerabilities. The advisory marks the update as critical, yet the vendor reports no security impact and references CVSS scores via CVE links. Systems administrators should apply the new packages promptly, though no active exploitation is documented.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99765",
    "publishedAt": "2026-11-12T18:58:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-sso-7-6-14-for-rhel-8",
      "article-88292ebb",
      "88292ebb",
      "red-hat-updates-sso-7-6-14-for-rhel-8-37d668"
    ]
  },
  {
    "slug": "red-hat-single-sign-on-7-6-14-updated-on-rhel-9-ba9f65f7",
    "title": "Red Hat Single Sign-On 7.6.14 Updated on RHEL 9",
    "summary": "Red Hat released Single Sign-On 7.6.14 packages for RHEL 9 to address identified security issues. The update contains fixes for multiple vulnerabilities, though Red Hat Product Security rated the overall impact as none, indicating no critical flaws were present. Administrators should install the new packages promptly and verify that the SSO service remains operational.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99766",
    "publishedAt": "2026-11-12T18:57:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-single-sign-on-7-6-14-updated-on-rhel-9",
      "article-ba9f65f7",
      "ba9f65f7",
      "red-hat-single-sign-on-7-6-14-updated-on-rhel-9-37d668"
    ]
  },
  {
    "slug": "compat-openssl10-security-update-for-rhel-8-8-51270b4f",
    "title": "compat-openssl10 Security Update for RHEL 8.8",
    "summary": "Red Hat released a compat-openssl10 update for RHEL 8.8 and SAP solutions to address critical cryptographic issues. The update fixes multiple vulnerabilities that could allow attackers to bypass SSL/TLS validation, potentially enabling man‑in‑the‑middle attacks, and is rated as Important by Red Hat Product Security. Systems should apply the new packages immediately and verify that OpenSSL functionality remains intact.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99724",
    "publishedAt": "2026-11-12T18:48:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "compat-openssl10-security-update-for-rhel-8-8",
      "article-51270b4f",
      "51270b4f",
      "compat-openssl10-security-update-for-rhel-8-8-37d669"
    ]
  },
  {
    "slug": "rhsa-2026-99763-critical-red-hat-single-sign-on-7-9a27c18e",
    "title": "RHSA-2026:99763: Critical: Red Hat Single Sign-On 7.6.14 security update",
    "summary": "A security update is now available for Red Hat Single Sign-On 7.6 from the Customer Portal. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99763",
    "publishedAt": "2026-11-12T18:35:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99763-critical-red-hat-single-sign-on-7",
      "article-9a27c18e",
      "9a27c18e",
      "rhsa-2026-99763-critical-red-hat-single-sign-on-7-37d668",
      "rhsa-2026-99763-critical-red-hat-single-sign-on-7-6-14-secur"
    ]
  },
  {
    "slug": "wiz-research-publishes-aspm-ai-era-risk-mitigation-af84827b",
    "title": "Wiz Research Publishes ASPM AI Era Risk Mitigation Guide",
    "summary": "Wiz Research releases a guide on ASPM in the AI era, focusing on rapid risk remediation for software supply chains. The article recommends simplifying ownership mapping, applying code fixes, and automating workflows to reduce MTTR and eliminate remediation bottlenecks. Security teams should adopt these practices to streamline vulnerability triage and accelerate patch deployment.",
    "category": "General",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/aspm-ai-era-pt-3-fixing-risk-code-speed",
    "publishedAt": "2026-11-12T18:32:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wiz-research-publishes-aspm-ai-era-risk-mitigation",
      "article-af84827b",
      "af84827b",
      "wiz-research-publishes-aspm-ai-era-risk-mitigation-7e5daa",
      "wiz-research-publishes-aspm-ai-era-risk-mitigation-guide"
    ]
  },
  {
    "slug": "maersk-reports-legacy-system-cyber-incident-742c5924",
    "title": "Maersk Reports Legacy System Cyber Incident",
    "summary": "Maersk disclosed a cyber incident that impacted its legacy system, adding to a series of attacks on shipping ports worldwide. The event follows a ransomware attack on Brazil’s largest port last week, highlighting persistent threats to maritime infrastructure. Maritime operators should review legacy system security, apply available patches, and strengthen monitoring to mitigate future incidents.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/shipping-giant-maersk-says-recent-incident-affected-legacy-system",
    "publishedAt": "2026-11-12T18:28:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "maersk-reports-legacy-system-cyber-incident",
      "article-742c5924",
      "742c5924",
      "maersk-reports-legacy-system-cyber-incident-7f0c84"
    ]
  },
  {
    "slug": "anthropic-releases-self-hosted-claude-managed-agen-1c93b5d8",
    "title": "Anthropic Releases Self-Hosted Claude Managed Agents in Beta",
    "summary": "Anthropic released a self-hosted version of Claude Managed Agents in private beta to protect automated corporate workflows. The deployment option keeps agent credentials, sandboxes, session histories, and harnesses directly within an organization's on-premise or cloud environment. Customers seeking to secure unattended tasks can request access to the self-hosted feature through their Anthropic account team.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/12/anthropic-self-hosted-claude-managed-agents/",
    "publishedAt": "2026-11-12T18:07:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-releases-self-hosted-claude-managed-agen",
      "article-1c93b5d8",
      "1c93b5d8",
      "anthropic-releases-self-hosted-claude-managed-agen-34ed84",
      "anthropic-releases-self-hosted-claude-managed-agents-in-beta"
    ]
  },
  {
    "slug": "threatsday-59-linux-kernel-bugs-falcon-spyware-gso-8e5a5539",
    "title": "ThreatsDay: 59 Linux Kernel Bugs, Falcon Spyware, GSocket Backdoors + 17 More Stories",
    "summary": "A search result isn't always safe. An access request isn't always harmless. Attackers are using fake websites, stolen access, and trusted tools to get into places they shouldn't be.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/threatsday-59-linux-kernel-bugs-falcon.html",
    "publishedAt": "2026-11-12T18:02:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "threatsday-59-linux-kernel-bugs-falcon-spyware-gso",
      "article-8e5a5539",
      "8e5a5539",
      "threatsday-59-linux-kernel-bugs-falcon-spyware-gso-3dad84",
      "threatsday-59-linux-kernel-bugs-falcon-spyware-gsocket-backd"
    ]
  },
  {
    "slug": "homeview-releases-version-27-2-with-bug-fixes-2a11ae0d",
    "title": "HomeView Releases Version 27.2 with Bug Fixes",
    "summary": "HomeView Software version 27.2 (24V526) was released, offering updated functionality and bug fixes. The update addresses minor stability issues and enhances compatibility with newer operating system versions. Users should download the new build from the vendor portal and apply it to maintain optimal performance and verify integrity before deployment and confirm checksum integrity.",
    "category": "General",
    "severity": "LOW",
    "source": "Apple Security Updates",
    "sourceUrl": "https://developer.apple.com/news/releases/?id=11122026a",
    "publishedAt": "2026-11-12T18:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "homeview-releases-version-27-2-with-bug-fixes",
      "article-2a11ae0d",
      "2a11ae0d",
      "homeview-releases-version-27-2-with-bug-fixes-6610eb"
    ]
  },
  {
    "slug": "google-chrome-releases-ios-stable-158-update-b4ec3c00",
    "title": "Google Chrome Releases iOS Stable 158 Update",
    "summary": "Google Chrome releases Stable 158 (158.0.8127.35) for iOS, adding stability and performance improvements. The update will be available on the App Store within hours, with changes documented in the Git log. Users encountering new issues should file bugs through the Chrome Release Team channels to aid future patches and improve stability.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-stable-for-ios-update_02111478502.html",
    "publishedAt": "2026-11-12T17:58:34.407Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-chrome-releases-ios-stable-158-update",
      "article-b4ec3c00",
      "b4ec3c00",
      "google-chrome-releases-ios-stable-158-update-1aca02"
    ]
  },
  {
    "slug": "google-releases-chrome-beta-159-for-android-device-cbba6905",
    "title": "Google Releases Chrome Beta 159 for Android Devices",
    "summary": "Google released Chrome Beta version 159.0.8154.4 for Android mobile devices, making it available on Google Play. The update incorporates platform updates and developer features with details documented inside the underlying Chromium Git log repository. Google encourages developers and users to test the beta build and report any newly discovered software issues via bug tickets.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-beta-for-android-update_01250189783.html",
    "publishedAt": "2026-11-12T17:58:32.687Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-releases-chrome-beta-159-for-android-device",
      "article-cbba6905",
      "cbba6905",
      "google-releases-chrome-beta-159-for-android-device-4ea3ac",
      "google-releases-chrome-beta-159-for-android-devices"
    ]
  },
  {
    "slug": "new-signdrop-zero-day-exploit-turns-windows-clfs-s-ac2d5382",
    "title": "New SignDrop Zero-Day Exploit Turns Windows CLFS Security Feature Into SYSTEM Access",
    "summary": "Public exploit code released earlier this week claims that a local Windows user can gain SYSTEM privileges through the Common Log File System driver. The proof of concept, called SignDrop, targets a log-authentication feature added to the driver last year.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/new-signdrop-zero-day-exploit-turns.html",
    "publishedAt": "2026-11-12T17:50:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "new-signdrop-zero-day-exploit-turns-windows-clfs-s",
      "article-ac2d5382",
      "ac2d5382",
      "new-signdrop-zero-day-exploit-turns-windows-clfs-s-64d87b",
      "new-signdrop-zero-day-exploit-turns-windows-clfs-security-fe"
    ]
  },
  {
    "slug": "rhsa-2026-99725-important-compat-openssl10-securit-83bfad69",
    "title": "RHSA-2026:99725: Important: compat-openssl10 security update",
    "summary": "An update for compat-openssl10 is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99725",
    "publishedAt": "2026-11-12T17:47:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99725-important-compat-openssl10-securit",
      "article-83bfad69",
      "83bfad69",
      "rhsa-2026-99725-important-compat-openssl10-securit-37d669",
      "rhsa-2026-99725-important-compat-openssl10-security-update"
    ]
  },
  {
    "slug": "red-hat-updates-kpatch-packages-for-enterprise-lin-dc8e60c0",
    "title": "Red Hat Updates kpatch Packages for Enterprise Linux 10",
    "summary": "Red Hat released important security updates for kpatch packages affecting Red Hat Enterprise Linux 10. The vendor rated the security impact of the underlying components as Important based on Common Vulnerability Scoring System evaluations. Enterprise system administrators should apply the updated kpatch packages across affected Red Hat Enterprise Linux 10 deployments to mitigate operational risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99722",
    "publishedAt": "2026-11-12T17:46:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-kpatch-packages-for-enterprise-lin",
      "article-dc8e60c0",
      "dc8e60c0",
      "red-hat-updates-kpatch-packages-for-enterprise-lin-37d669",
      "red-hat-updates-kpatch-packages-for-enterprise-linux-10"
    ]
  },
  {
    "slug": "google-releases-chrome-beta-update-for-ios-e86cb456",
    "title": "Google Releases Chrome Beta Update for iOS",
    "summary": "Google announced the release of Chrome Beta version 159.0.8154.5 for iOS operating systems across Apple devices. The upcoming update will be made available on the Apple App Store and includes developer changes referenced in the Git log. The Chrome Release Team advises users to submit bug reports if any new software issues are identified in the updated build.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-beta-for-ios-update_01890458731.html",
    "publishedAt": "2026-11-12T17:43:50.798Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-releases-chrome-beta-update-for-ios",
      "article-e86cb456",
      "e86cb456",
      "google-releases-chrome-beta-update-for-ios-2a703f"
    ]
  },
  {
    "slug": "rhsa-2026-99726-important-compat-openssl10-securit-d6aab5d1",
    "title": "RHSA-2026:99726: Important: compat-openssl10 security update",
    "summary": "An update for compat-openssl10 is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99726",
    "publishedAt": "2026-11-12T17:41:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99726-important-compat-openssl10-securit",
      "article-d6aab5d1",
      "d6aab5d1",
      "rhsa-2026-99726-important-compat-openssl10-securit-37d669",
      "rhsa-2026-99726-important-compat-openssl10-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-99691-moderate-python3-security-update-3fdb0da6",
    "title": "RHSA-2026:99691: Moderate: python3 security update",
    "summary": "An update for python3 is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99691",
    "publishedAt": "2026-11-12T17:39:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99691-moderate-python3-security-update",
      "article-3fdb0da6",
      "3fdb0da6",
      "rhsa-2026-99691-moderate-python3-security-update-37d66c"
    ]
  },
  {
    "slug": "rhsa-2026-99630-important-kernel-security-bug-fix-f04a9622",
    "title": "RHSA-2026:99630: Important: kernel security, bug fix, and enhancement update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99630",
    "publishedAt": "2026-11-12T17:29:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99630-important-kernel-security-bug-fix",
      "article-f04a9622",
      "f04a9622",
      "rhsa-2026-99630-important-kernel-security-bug-fix-37d66d",
      "rhsa-2026-99630-important-kernel-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "cisco-broadworks-xml-external-entity-vulnerability-d5db2d32",
    "title": "Cisco BroadWorks XML External Entity Vulnerability",
    "summary": "Cisco BroadWorks' Open Client Interface XML parser is vulnerable to blind XML external entity injection, letting unauthenticated remote attackers read sensitive configuration files. The flaw stems from default external entity resolution, allowing crafted XML messages to the OCI-P service to expose filesystem data with BroadWorks user privileges. Cisco released patches; no workarounds exist, so administrators must apply updates immediately.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-bworks-xxe-uwUd7CEt?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DCisco+BroadWorks+Out-of-Band+Blind+XML+External+Entity+Injection+Vulnerability%26vs_k%3D1",
    "publishedAt": "2026-11-12T17:25:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-broadworks-xml-external-entity-vulnerability",
      "article-d5db2d32",
      "d5db2d32",
      "cisco-broadworks-xml-external-entity-vulnerability-235c18"
    ]
  },
  {
    "slug": "rhsa-2026-99660-important-xfsprogs-security-update-1d7bc380",
    "title": "RHSA-2026:99660: Important: xfsprogs security update",
    "summary": "An update for xfsprogs is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99660",
    "publishedAt": "2026-11-12T17:18:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99660-important-xfsprogs-security-update",
      "article-1d7bc380",
      "1d7bc380",
      "rhsa-2026-99660-important-xfsprogs-security-update-37d66c"
    ]
  },
  {
    "slug": "rhsa-2026-99707-important-libpcap-security-update-92b4230f",
    "title": "RHSA-2026:99707: Important: libpcap security update",
    "summary": "An update for libpcap is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99707",
    "publishedAt": "2026-11-12T17:18:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99707-important-libpcap-security-update",
      "article-92b4230f",
      "92b4230f",
      "rhsa-2026-99707-important-libpcap-security-update-37d669"
    ]
  },
  {
    "slug": "rhsa-2026-99659-important-xfsprogs-security-update-40daf9b0",
    "title": "RHSA-2026:99659: Important: xfsprogs security update",
    "summary": "An update for xfsprogs is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99659",
    "publishedAt": "2026-11-12T17:17:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99659-important-xfsprogs-security-update",
      "article-40daf9b0",
      "40daf9b0",
      "rhsa-2026-99659-important-xfsprogs-security-update-37d66c"
    ]
  },
  {
    "slug": "rhsa-2026-99643-low-curl-security-update-9262d46e",
    "title": "RHSA-2026:99643: Low: curl security update",
    "summary": "An update for curl is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Low. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99643",
    "publishedAt": "2026-11-12T17:17:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99643-low-curl-security-update",
      "article-9262d46e",
      "9262d46e",
      "rhsa-2026-99643-low-curl-security-update-37d66c"
    ]
  },
  {
    "slug": "poisoned-ai-training-enables-remote-code-execution-5f5a52ca",
    "title": "Poisoned AI Training Enables Remote Code Execution",
    "summary": "Poisoned training data and model checkpoints can trigger remote code execution in AI coding agents, per Microsoft Defender Research. The flaw exploits the training pipeline, letting attackers embed malicious code that runs when the agent processes user inputs, potentially compromising downstream systems. Defenders should verify training data integrity, enforce supply‑chain controls, and monitor agent behavior for anomalous execution.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/11/12/trained-to-betray-how-post-training-supply-chain-attacks-hijack-coding-agents/",
    "publishedAt": "2026-11-12T17:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "poisoned-ai-training-enables-remote-code-execution",
      "article-5f5a52ca",
      "5f5a52ca",
      "poisoned-ai-training-enables-remote-code-execution-30f228"
    ]
  },
  {
    "slug": "europol-seizes-235-servers-257-domains-of-gootload-58ee2d20",
    "title": "Europol Seizes 235 Servers, 257 Domains of Gootloader, CastleRAT",
    "summary": "Europol and partners disrupted 235 servers and 257 domains linked to Gootloader, CastleRAT, and StealC malware services that facilitate ransomware and data theft. The operation seized 6.4 million victim datasets from the criminal infrastructure, exposing the scale of the cyber‑crime‑as‑a‑service model. No vendor patches are required; the action demonstrates law enforcement’s capacity to dismantle malware supply chains.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/malware-infrastructure-disrupted/",
    "publishedAt": "2026-11-12T16:58:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "europol-seizes-235-servers-257-domains-of-gootload",
      "article-58ee2d20",
      "58ee2d20",
      "europol-seizes-235-servers-257-domains-of-gootload-2f82bf",
      "europol-seizes-235-servers-257-domains-of-gootloader-castler"
    ]
  },
  {
    "slug": "rhsa-2026-99661-important-xfsprogs-security-update-f932da94",
    "title": "RHSA-2026:99661: Important: xfsprogs security update",
    "summary": "An update for xfsprogs is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99661",
    "publishedAt": "2026-11-12T16:57:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99661-important-xfsprogs-security-update",
      "article-f932da94",
      "f932da94",
      "rhsa-2026-99661-important-xfsprogs-security-update-37d66c"
    ]
  },
  {
    "slug": "rhsa-2026-99690-important-libpcap-security-update-55be5499",
    "title": "RHSA-2026:99690: Important: libpcap security update",
    "summary": "An update for libpcap is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99690",
    "publishedAt": "2026-11-12T16:56:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99690-important-libpcap-security-update",
      "article-55be5499",
      "55be5499",
      "rhsa-2026-99690-important-libpcap-security-update-37d66c"
    ]
  },
  {
    "slug": "rhsa-2026-99702-important-webkit2gtk3-security-upd-1574e233",
    "title": "RHSA-2026:99702: Important: webkit2gtk3 security update",
    "summary": "An update for webkit2gtk3 is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99702",
    "publishedAt": "2026-11-12T16:53:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99702-important-webkit2gtk3-security-upd",
      "article-1574e233",
      "1574e233",
      "rhsa-2026-99702-important-webkit2gtk3-security-upd-37d669",
      "rhsa-2026-99702-important-webkit2gtk3-security-update"
    ]
  },
  {
    "slug": "n-able-zero-day-targets-even-patched-servers-f923e85e",
    "title": "N‑Able Zero‑Day Targets Even Patched Servers",
    "summary": "New N‑Able N‑Central zero‑day exploits, named 4EverAble2Shell and Agent2Shell, target servers even after the latest emergency hotfix. The vulnerability enables unauthenticated attackers to gain root access, allowing deployment of cryptocurrency miners and other malicious payloads. Administrators should apply the latest patch, monitor for unauthorized processes, and verify that the HTTP/2 module is properly secured.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/n-able-n-central-zero-day-exploits/",
    "publishedAt": "2026-11-12T16:53:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-zero-day-targets-even-patched-servers",
      "article-f923e85e",
      "f923e85e",
      "n-able-zero-day-targets-even-patched-servers-99074e"
    ]
  },
  {
    "slug": "microsoft-investigates-teams-outage-in-north-ameri-302825c3",
    "title": "Microsoft Investigates Teams Outage in North America",
    "summary": "Microsoft is actively investigating an operational outage affecting Microsoft Teams users across the North America region. Tracked under incident identifier TM1550488 in the Microsoft 365 admin center, automated recovery mechanisms have begun mitigating the service disruption. Official status updates indicate incremental service improvements, although Microsoft has not confirmed complete resolution for all impacted enterprise environments.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsoft-teams-outagenorth-america/",
    "publishedAt": "2026-11-12T16:44:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-investigates-teams-outage-in-north-ameri",
      "article-302825c3",
      "302825c3",
      "microsoft-investigates-teams-outage-in-north-ameri-46e08a",
      "microsoft-investigates-teams-outage-in-north-america"
    ]
  },
  {
    "slug": "linux-kernel-vulnerabilities-affect-amd-and-arm-pr-590add84",
    "title": "Linux Kernel Vulnerabilities Affect AMD and Arm Processors",
    "summary": "Linux kernel flaws CVE-2023-20585 and CVE-2025-10263 let local attackers bypass memory protections on AMD and Arm CPUs, potentially compromising guest memory. The bugs enable out-of-bounds writes and privilege escalation, threatening SEV‑SNP guest memory and allowing unauthorized code execution. Kernel maintainers released patches; administrators should apply updates, verify hypervisor isolation, and monitor for anomalous memory activity.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9066-1",
    "publishedAt": "2026-11-12T16:34:04.000Z",
    "cves": [
      "CVE-2023-20585",
      "CVE-2025-10263"
    ],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-vulnerabilities-affect-amd-and-arm-pr",
      "article-590add84",
      "590add84",
      "linux-kernel-vulnerabilities-affect-amd-and-arm-pr-7e86ea",
      "linux-kernel-vulnerabilities-affect-amd-and-arm-processors"
    ]
  },
  {
    "slug": "ubuntu-patches-multiple-kernel-subsystem-vulnerabi-a74d4372",
    "title": "Ubuntu Patches Multiple Kernel Subsystem Vulnerabilities",
    "summary": "Ubuntu released a kernel update addressing several security issues that could allow attackers to compromise systems via vulnerable subsystems. The update fixes flaws in network file systems, stream parsing, ARM64, PowerPC, RISC‑V, S390, UML, x86, block layer, Android, Bluetooth, TPM, and other drivers. Users should apply the update promptly to eliminate potential privilege escalation or denial‑of‑service risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9018-2",
    "publishedAt": "2026-11-12T16:32:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-patches-multiple-kernel-subsystem-vulnerabi",
      "article-a74d4372",
      "a74d4372",
      "ubuntu-patches-multiple-kernel-subsystem-vulnerabi-7e8929",
      "ubuntu-patches-multiple-kernel-subsystem-vulnerabilities"
    ]
  },
  {
    "slug": "critical-red-hat-quay-flaw-lets-attackers-read-and-b698f583",
    "title": "Critical Red Hat Quay Flaw Lets Attackers Read and Overwrite All Private Container Images in a Registry",
    "summary": "A critical flaw in Red Hat Quay allows an attacker who can access a Quay registry to read and overwrite private container images in every repository. When it is off, anyone with a valid account can still exploit the flaw, Red Hat said yesterday. The vulnerability is tracked as CVE-2026-123710.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/critical-red-hat-quay-flaw-lets.html",
    "publishedAt": "2026-11-12T16:27:01.000Z",
    "cves": [
      "CVE-2026-123710"
    ],
    "additionalSources": [],
    "aliases": [
      "critical-red-hat-quay-flaw-lets-attackers-read-and",
      "article-b698f583",
      "b698f583",
      "critical-red-hat-quay-flaw-lets-attackers-read-and-6a7933",
      "critical-red-hat-quay-flaw-lets-attackers-read-and-overwrite"
    ]
  },
  {
    "slug": "european-authorities-take-down-steaic-malware-serv-6e7a742b",
    "title": "European authorities take down SteaIC malware servers for second time this year",
    "summary": "German authorities on Thursday said investigators traced the rebuilt network to the Virtualine bulletproof hosting provider, seized by the FBI in October, with the assistance of police in Frankfurt and the Dutch National High Tech Crime Unit.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/european-authorities-take-down-stealic-malware-second-time",
    "publishedAt": "2026-11-12T16:21:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "european-authorities-take-down-steaic-malware-serv",
      "article-6e7a742b",
      "6e7a742b",
      "european-authorities-take-down-steaic-malware-serv-4df0a2",
      "european-authorities-take-down-steaic-malware-servers-for-se"
    ]
  },
  {
    "slug": "connectwise-investigates-screenconnect-breaches-at-1746e6e4",
    "title": "ConnectWise Investigates ScreenConnect Breaches at 50 Clients",
    "summary": "ConnectWise reports that abuse of its ScreenConnect remote‑access tool has led to data breaches at nearly 50 customer organizations. The exploitation involved unauthorized remote sessions bypassing authentication controls, exposing sensitive files and credentials, with no public proof‑of‑concept disclosed. ConnectWise has released a patch and recommends customers disable remote‑access features until the fix is applied, while conducting forensic investigations.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/connectwise-screenconnect-breaches-third-party-tool",
    "publishedAt": "2026-11-12T16:16:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "connectwise-investigates-screenconnect-breaches-at",
      "article-1746e6e4",
      "1746e6e4",
      "connectwise-investigates-screenconnect-breaches-at-196615",
      "connectwise-investigates-screenconnect-breaches-at-50-client"
    ]
  },
  {
    "slug": "rhsa-2026-99662-important-xfsprogs-security-update-115a9084",
    "title": "RHSA-2026:99662: Important: xfsprogs security update",
    "summary": "An update for xfsprogs is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99662",
    "publishedAt": "2026-11-12T16:15:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99662-important-xfsprogs-security-update",
      "article-115a9084",
      "115a9084",
      "rhsa-2026-99662-important-xfsprogs-security-update-37d66c"
    ]
  },
  {
    "slug": "rhsa-2026-99698-important-glib-networking-security-d12b3f3d",
    "title": "RHSA-2026:99698: Important: glib-networking security update",
    "summary": "An update for glib-networking is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99698",
    "publishedAt": "2026-11-12T16:15:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99698-important-glib-networking-security",
      "article-d12b3f3d",
      "d12b3f3d",
      "rhsa-2026-99698-important-glib-networking-security-37d66c",
      "rhsa-2026-99698-important-glib-networking-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-99696-important-glib-networking-security-486941dd",
    "title": "RHSA-2026:99696: Important: glib-networking security update",
    "summary": "An update for glib-networking is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99696",
    "publishedAt": "2026-11-12T16:07:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99696-important-glib-networking-security",
      "article-486941dd",
      "486941dd",
      "rhsa-2026-99696-important-glib-networking-security-37d66c",
      "rhsa-2026-99696-important-glib-networking-security-update"
    ]
  },
  {
    "slug": "windows-signdrop-zero-day-exploit-enables-system-p-f64df1ef",
    "title": "Windows SignDrop Zero-Day Exploit Enables SYSTEM Privileges via CLFS Abuse",
    "summary": "Microsoft Windows systems are affected by the SignDrop zero‑day vulnerability, which allows attackers to gain SYSTEM privileges. The flaw abuses CLFS and Windows Defender to write privileged files under the antimalware process, enabling persistence and payload deployment. Microsoft has issued an out‑of‑band patch disabling CLFS operations for Defender; security teams must apply it immediately.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/new-windows-signdrop-zero-day-gives-hackers-system-privileges/",
    "publishedAt": "2026-11-12T16:04:00.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "SecurityWeek",
        "sourceUrl": "https://www.securityweek.com/nightmare-eclipse-drops-windows-zero-day-exploit-signdrop/"
      }
    ],
    "aliases": [
      "windows-signdrop-zero-day-exploit-enables-system-p",
      "article-f64df1ef",
      "f64df1ef",
      "windows-signdrop-zero-day-exploit-enables-system-p-15fe10",
      "windows-signdrop-zero-day-exploit-enables-system-privileges-"
    ]
  },
  {
    "slug": "ubuntu-discloses-pillow-denial-of-service-vulnerab-eeb6a195",
    "title": "Ubuntu Discloses Pillow Denial‑of‑Service Vulnerabilities",
    "summary": "Ubuntu released security notice USN‑9064‑1, exposing multiple Pillow library flaws that allow attackers to trigger denial‑of‑service conditions via infinite loops and uncontrolled recursion. The CVE‑identified issues (CVE‑2026‑112390, CVE‑2026‑112391, CVE‑2026‑112392) affect Ubuntu 18.04 through 26.10, causing potential service crashes or hangs without authentication. The vulnerabilities are tracked as CVE-2026-112390, CVE-2026-112391, CVE-2026-112392.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9064-1",
    "publishedAt": "2026-11-12T15:55:24.000Z",
    "cves": [
      "CVE-2026-112390",
      "CVE-2026-112391",
      "CVE-2026-112392"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-discloses-pillow-denial-of-service-vulnerab",
      "article-eeb6a195",
      "eeb6a195",
      "ubuntu-discloses-pillow-denial-of-service-vulnerab-7e86f2",
      "ubuntu-discloses-pillow-denial-of-service-vulnerabilities"
    ]
  },
  {
    "slug": "citrix-releases-patches-for-12-netscaler-flaws-4e7d75dc",
    "title": "Citrix Releases Patches for 12 NetScaler Flaws",
    "summary": "Citrix has issued patches for twelve critical NetScaler ADC, Gateway, and Console flaws that could enable denial‑of‑service or authentication bypass. The most severe flaw, CVE-2026-120868, is a memory overflow with CVSS 9.3 that permits unauthenticated remote code execution, potentially compromising entire NetScaler deployments. Citrix recommends applying the latest cumulative update immediately and verifying configuration changes to mitigate the vulnerabilities.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/citrix-patches-12-netscaler-and-secure.html",
    "publishedAt": "2026-11-12T15:38:49.000Z",
    "cves": [
      "CVE-2026-120868"
    ],
    "additionalSources": [],
    "aliases": [
      "citrix-releases-patches-for-12-netscaler-flaws",
      "article-4e7d75dc",
      "4e7d75dc",
      "citrix-releases-patches-for-12-netscaler-flaws-2a885d"
    ]
  },
  {
    "slug": "apache-fixes-critical-http-2-rce-vulnerability-8fa80d31",
    "title": "Apache Fixes Critical HTTP/2 RCE Vulnerability",
    "summary": "Apache patched a critical mod_http2 race condition that could let unauthenticated attackers execute code on HTTP/2‑enabled servers. The flaw, CVE-2026-119618, exploits a race condition in HTTP/2, enabling unauthenticated remote code execution that could compromise all affected servers. Administrators should apply the latest Apache release and disable HTTP/2 if immediate patching is not possible to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/apache-patches-critical-http-server-rce-found-by-anthropic-google/",
    "publishedAt": "2026-11-12T15:38:31.000Z",
    "cves": [
      "CVE-2026-119618"
    ],
    "additionalSources": [],
    "aliases": [
      "apache-fixes-critical-http-2-rce-vulnerability",
      "article-8fa80d31",
      "8fa80d31",
      "apache-fixes-critical-http-2-rce-vulnerability-79fafe"
    ]
  },
  {
    "slug": "rhsa-2026-99632-moderate-gcc-toolset-15-gcc-securi-b2f69179",
    "title": "RHSA-2026:99632: Moderate: gcc-toolset-15-gcc security update",
    "summary": "An update for gcc-toolset-15-gcc is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99632",
    "publishedAt": "2026-11-12T15:23:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99632-moderate-gcc-toolset-15-gcc-securi",
      "article-b2f69179",
      "b2f69179",
      "rhsa-2026-99632-moderate-gcc-toolset-15-gcc-securi-37d66d",
      "rhsa-2026-99632-moderate-gcc-toolset-15-gcc-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-99611-moderate-xorg-x11-server-security-00e02230",
    "title": "RHSA-2026:99611: Moderate: xorg-x11-server security update",
    "summary": "An update for xorg-x11-server is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99611",
    "publishedAt": "2026-11-12T15:21:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99611-moderate-xorg-x11-server-security",
      "article-00e02230",
      "00e02230",
      "rhsa-2026-99611-moderate-xorg-x11-server-security-37d66d",
      "rhsa-2026-99611-moderate-xorg-x11-server-security-update"
    ]
  },
  {
    "slug": "fake-ai-domains-redirect-to-clickfix-and-browser-m-cb9cc025",
    "title": "Fake AI Domains Redirect to ClickFix and Browser Malware",
    "summary": "Researchers discovered 186 fake AI domains redirecting users to ClickFix-style lures, browser-hijacking malware, and search‑hijacking extensions. The attack leverages typographical prompt deception, codenamed TypoPrompting, to trick users into verifying fake AI tools, enabling credential theft and malicious payload delivery. Security teams should block these domains, enforce strict DNS filtering, and educate users about authentic AI services to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/186-fake-ai-domains-redirect-users-to.html",
    "publishedAt": "2026-11-12T15:15:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fake-ai-domains-redirect-to-clickfix-and-browser-m",
      "article-cb9cc025",
      "cb9cc025",
      "fake-ai-domains-redirect-to-clickfix-and-browser-m-759ea8",
      "fake-ai-domains-redirect-to-clickfix-and-browser-malware"
    ]
  },
  {
    "slug": "police-seize-servers-behind-gootloader-castlerat-s-f1e4e109",
    "title": "Police Seize Servers Behind Gootloader, CastleRAT, StealC",
    "summary": "Europol and nine partner agencies seized hundreds of servers and domains that supported the Gootloader, CastleRAT, and StealC malware ecosystems. The takedown disrupted command‑and‑control channels, halted credential‑stealing operations, and limited the malware’s ability to deliver ransomware payloads to corporate networks. Security teams should monitor residual infrastructure, apply network segmentation, and maintain threat intelligence feeds to detect command‑and‑control domains.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/police-dismantles-gootloader-castlerat-stealc-malware-infrastructure/",
    "publishedAt": "2026-11-12T15:07:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "police-seize-servers-behind-gootloader-castlerat-s",
      "article-f1e4e109",
      "f1e4e109",
      "police-seize-servers-behind-gootloader-castlerat-s-70cdd8",
      "police-seize-servers-behind-gootloader-castlerat-stealc"
    ]
  },
  {
    "slug": "picus-launches-autonomous-ai-penetration-testing-t-0099f552",
    "title": "Picus Launches Autonomous AI Penetration Testing Tool",
    "summary": "Picus Security introduced Picus Autonomous Penetration Testing, an AI-driven tool that chains real exploits toward an organization’s critical assets. The system operates under strict governance, preventing agents from overriding controls while delivering realistic breach scenarios. Teams can validate defenses, prioritize remediation, and train staff, with no public vulnerability or exploit disclosed.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/12/picus-autonomous-penetration-testing/",
    "publishedAt": "2026-11-12T15:05:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "picus-launches-autonomous-ai-penetration-testing-t",
      "article-0099f552",
      "0099f552",
      "picus-launches-autonomous-ai-penetration-testing-t-56da8b",
      "picus-launches-autonomous-ai-penetration-testing-tool"
    ]
  },
  {
    "slug": "ai-agents-breach-semiconductor-defense-civil-targe-918fee5a",
    "title": "AI Agents Breach Semiconductor, Defense, Civil Targets",
    "summary": "Attackers leveraged the open‑source Cairn AI agent framework to autonomously breach semiconductor, defense, and civil society organizations. The framework chains exploits without human intervention, enabling rapid compromise of critical infrastructure and sensitive data, with evidence of active exploitation. Security teams should monitor for anomalous AI activity, enforce strict access controls, and apply timely patches to mitigate automated attack vectors.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Unit 42",
    "sourceUrl": "https://unit42.paloaltonetworks.com/cairn-framework-ai-autonomous-attacks/",
    "publishedAt": "2026-11-12T15:00:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agents-breach-semiconductor-defense-civil-targe",
      "article-918fee5a",
      "918fee5a",
      "ai-agents-breach-semiconductor-defense-civil-targe-3e557a",
      "ai-agents-breach-semiconductor-defense-civil-targets"
    ]
  },
  {
    "slug": "attackers-breached-10-organizations-with-an-open-s-0ba41d82",
    "title": "Attackers breached 10 organizations with an open-source AI pentest framework",
    "summary": "Chinese-speaking attackers used Cairn, an open-source AI penetration testing framework, to run 25 operations against at least 19 organizations in August and September 2026. Palo Alto Networks’ Unit 42 found that the attackers gained unauthorized access or pulled data at 10 of them, often after typing little more than a domain name and a one-line goal.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/12/cairn-autonomous-ai-cyberattacks/",
    "publishedAt": "2026-11-12T15:00:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "attackers-breached-10-organizations-with-an-open-s",
      "article-0ba41d82",
      "0ba41d82",
      "attackers-breached-10-organizations-with-an-open-s-7c7e41",
      "attackers-breached-10-organizations-with-an-open-source-ai-p"
    ]
  },
  {
    "slug": "endpoint-management-platforms-pose-major-security-ea047999",
    "title": "Endpoint Management Platforms Pose Major Security Threat",
    "summary": "Endpoint management platforms can become powerful attack tools when compromised, enabling hackers to deploy malware, execute commands, and disrupt thousands of devices. Action1 recommends customer‑controlled cryptographic authorization to prevent attackers from abusing sensitive endpoint operations and mitigate this risk. Security teams should enforce strict access controls, monitor for unauthorized changes, and apply timely updates to protect endpoint management infrastructure.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/your-endpoint-management-platform-could-be-your-biggest-security-risk/",
    "publishedAt": "2026-11-12T15:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "endpoint-management-platforms-pose-major-security",
      "article-ea047999",
      "ea047999",
      "endpoint-management-platforms-pose-major-security-487a4c",
      "endpoint-management-platforms-pose-major-security-threat"
    ]
  },
  {
    "slug": "japan-sees-record-cyberattacks-driven-by-ai-intrus-db59b6fd",
    "title": "Japan Sees Record Cyberattacks Driven by AI Intrusions",
    "summary": "Researchers report a record rise in Japanese cyberattacks, attributing many incidents to AI‑assisted intrusion techniques. The attacks include widespread data breaches and exploitations of unpatched vulnerabilities, increasing pressure on organizations to accelerate patch management. Security teams should prioritize vulnerability scanning, enforce timely patching, and adopt AI‑driven threat detection to mitigate emerging intrusion tactics.",
    "category": "General",
    "severity": "LOW",
    "source": "Socket.dev",
    "sourceUrl": "https://socket.dev/blog/japan-cyberattack-surge",
    "publishedAt": "2026-11-12T14:51:52.947Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "japan-sees-record-cyberattacks-driven-by-ai-intrus",
      "article-db59b6fd",
      "db59b6fd",
      "japan-sees-record-cyberattacks-driven-by-ai-intrus-683cad",
      "japan-sees-record-cyberattacks-driven-by-ai-intrusions"
    ]
  },
  {
    "slug": "rhsa-2026-99593-moderate-rpm-security-update-4803ff68",
    "title": "RHSA-2026:99593: Moderate: rpm security update",
    "summary": "An update for rpm is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99593",
    "publishedAt": "2026-11-12T14:37:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99593-moderate-rpm-security-update",
      "article-4803ff68",
      "4803ff68",
      "rhsa-2026-99593-moderate-rpm-security-update-37d670"
    ]
  },
  {
    "slug": "apify-rotates-tokens-after-internal-breach-6f629cb0",
    "title": "Apify Rotates Tokens After Internal Breach",
    "summary": "Apify detected unauthorized access to internal systems and responded by rotating critical API tokens and revoking third‑party OAuth connections. The incident prompted a 2FA reset for affected users to mitigate potential credential abuse and secure remaining access points. Security teams should review token rotation policies, enforce multi‑factor authentication, and monitor for anomalous credential usage.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/apify-rotates-api-tokens-prompts-2fa-resets-after-breach/",
    "publishedAt": "2026-11-12T14:36:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apify-rotates-tokens-after-internal-breach",
      "article-6f629cb0",
      "6f629cb0",
      "apify-rotates-tokens-after-internal-breach-143e2b"
    ]
  },
  {
    "slug": "red-hat-issues-gd-update-for-rhel7-e8daf164",
    "title": "Red Hat Issues gd Update for RHEL7",
    "summary": "Red Hat released a security update for the gd component on RHEL 7 Extended Lifecycle Support, fixing a flaw that could enable code execution. The update is rated Important, with CVSS scores linked via CVE references, indicating a moderate‑to‑high severity vulnerability. Red Hat recommends applying the patch immediately; no workarounds are needed.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98418",
    "publishedAt": "2026-11-12T14:27:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-gd-update-for-rhel7",
      "article-e8daf164",
      "e8daf164",
      "red-hat-issues-gd-update-for-rhel7-37d6e9"
    ]
  },
  {
    "slug": "bricklink-offline-after-detecting-unusual-activity-bdfef76b",
    "title": "BrickLink Offline After Detecting Unusual Activity",
    "summary": "BrickLink, the LEGO marketplace, went offline after detecting unusual activity on its servers. The incident involved suspicious traffic patterns that prompted a temporary shutdown to prevent potential data compromise, though no breach was confirmed. The platform has not yet disclosed whether customer data was affected and advises users to monitor for any unauthorized account activity.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/legos-bricklink-taken-offline-after-unusual-activity-what-users-should-know",
    "publishedAt": "2026-11-12T14:25:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bricklink-offline-after-detecting-unusual-activity",
      "article-bdfef76b",
      "bdfef76b",
      "bricklink-offline-after-detecting-unusual-activity-238d20"
    ]
  },
  {
    "slug": "red-hat-updates-crun-for-rhel-9-8-eus-796cd2ac",
    "title": "Red Hat Updates crun for RHEL 9.8 EUS",
    "summary": "Red Hat released a security update for the crun container runtime on RHEL 9.8 EUS, addressing a vulnerability that could let attackers compromise container execution. The advisory notes an Important impact rating and references CVE links, but no specific CVE identifiers or CVSS scores are disclosed.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99117",
    "publishedAt": "2026-11-12T14:25:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-crun-for-rhel-9-8-eus",
      "article-796cd2ac",
      "796cd2ac",
      "red-hat-updates-crun-for-rhel-9-8-eus-37d680"
    ]
  },
  {
    "slug": "study-reveals-critical-supply-chain-vulnerability-98a854e0",
    "title": "Study Reveals Critical Supply-Chain Vulnerability in 50 Platforms",
    "summary": "nDiligence released a four‑year study exposing a critical supply‑chain vulnerability affecting all 50 examined software and device types. The flaw arises from insecure application integration practices, enabling attackers to inject malicious code during deployment and compromising downstream systems. Organizations should audit supply‑chain processes, enforce strict code signing, and apply vendor patches to mitigate the identified risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ndiligence-releases-four-year-study-identifying-a-critical-supply-chain-vulnerability-across-50-platform-types/",
    "publishedAt": "2026-11-12T14:25:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "study-reveals-critical-supply-chain-vulnerability",
      "article-98a854e0",
      "98a854e0",
      "study-reveals-critical-supply-chain-vulnerability-2e6aa5",
      "study-reveals-critical-supply-chain-vulnerability-in-50-plat"
    ]
  },
  {
    "slug": "cisa-confirms-active-exploitation-of-outlook-user-fd83b243",
    "title": "CISA Confirms Active Exploitation of Outlook User Interaction 0-Day Vulnerability",
    "summary": "The U.S. Cybersecurity and Infrastructure Security Agency has confirmed active exploitation of a Microsoft Outlook zero-day vulnerability CVE-2026-124194 that can expose user authentication data. According to Microsoft’s security advisory, an attacker can send a specially crafted message file and persuade a victim to open it in Outlook.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/active-exploitation-of-outlook-0-day-vulnerability/",
    "publishedAt": "2026-11-12T14:11:54.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-confirms-active-exploitation-of-outlook-user",
      "article-fd83b243",
      "fd83b243",
      "cisa-confirms-active-exploitation-of-outlook-user-936874",
      "cisa-confirms-active-exploitation-of-outlook-user-interactio"
    ]
  },
  {
    "slug": "teams-booking-flow-conceals-device-code-phishing-a4e0cca3",
    "title": "Teams Booking Flow Conceals Device Code Phishing",
    "summary": "Threat actors leveraged a Microsoft Teams meeting‑booking flow to deliver device code phishing, tricking users into authorizing attacker access. The attack exploited the Teams booking interface’s lack of device‑code validation, allowing attackers to obtain temporary access tokens without user credentials. Security teams should enforce MFA, disable unused device‑code flows, and monitor for anomalous token usage to mitigate this threat.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/crafty-microsoft-teams-booking-flow-disguises-device-code-phishing",
    "publishedAt": "2026-11-12T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "teams-booking-flow-conceals-device-code-phishing",
      "article-a4e0cca3",
      "a4e0cca3",
      "teams-booking-flow-conceals-device-code-phishing-4d51b7"
    ]
  },
  {
    "slug": "red-hat-quay-vulnerability-enables-token-hijacking-58ffebef",
    "title": "Red Hat Quay Vulnerability Enables Token Hijacking",
    "summary": "Red Hat Quay contains a critical flaw that allows unauthenticated attackers reaching a registry’s key server to hijack token signing. The vulnerability, identified as CVE-2026-123710, carries a CVSS score of 9.8, indicating a high‑impact remote code execution risk. Red Hat released a patch on November 11 2026; administrators should update Quay immediately and verify token signing integrity.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/red-hat-quay-vulnerability/",
    "publishedAt": "2026-11-12T13:57:37.000Z",
    "cves": [
      "CVE-2026-123710"
    ],
    "additionalSources": [],
    "aliases": [
      "red-hat-quay-vulnerability-enables-token-hijacking",
      "article-58ffebef",
      "58ffebef",
      "red-hat-quay-vulnerability-enables-token-hijacking-15a972"
    ]
  },
  {
    "slug": "check-point-gateways-hit-by-php2shell-exploitation-91c904a4",
    "title": "Check Point Gateways Hit by PHP2Shell Exploitation",
    "summary": "Attackers exploited CVE-2026-109618 on Check Point Security Gateways’ Mobile Access portals, targeting Israeli organizations via IP 130.94.19.204 in late October 2026. The vulnerability allows remote code execution through PHP2Shell, enabling attackers to compromise gateway systems and potentially exfiltrate data. Check Point released a patch for CVE-2026-109618; administrators should apply it immediately and monitor for anomalous activity.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/php2shell-exploitation-on-check-point-gateway/",
    "publishedAt": "2026-11-12T13:56:37.000Z",
    "cves": [
      "CVE-2026-109618"
    ],
    "additionalSources": [],
    "aliases": [
      "check-point-gateways-hit-by-php2shell-exploitation",
      "article-91c904a4",
      "91c904a4",
      "check-point-gateways-hit-by-php2shell-exploitation-350a39"
    ]
  },
  {
    "slug": "aws-fixes-mcp-gateway-ssrf-vulnerability-b2c99e9d",
    "title": "AWS Fixes MCP Gateway SSRF Vulnerability",
    "summary": "AWS disclosed CVE‑2026‑125926, a server‑side request forgery flaw in mcp‑gateway‑registry that permits authenticated users to access internal services and cloud credentials. The vulnerability affects versions 1.0.3 through 1.34.0; version 1.35.0 contains the fix and mitigates the internal network exposure. AWS urges users to upgrade to 1.35.0 or apply the patch immediately to prevent unauthorized internal access. The flaw is tracked as CVE-2026-125926.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/aws-mcp-gateway-security-flaw/",
    "publishedAt": "2026-11-12T13:51:59.000Z",
    "cves": [
      "CVE-2026-125926"
    ],
    "additionalSources": [],
    "aliases": [
      "aws-fixes-mcp-gateway-ssrf-vulnerability",
      "article-b2c99e9d",
      "b2c99e9d",
      "aws-fixes-mcp-gateway-ssrf-vulnerability-35a87a"
    ]
  },
  {
    "slug": "qilin-ransomware-admin-identified-as-36-year-old-r-e5b20db7",
    "title": "Qilin Ransomware Admin Identified as 36-Year-Old Russian Hacker After Cybercrime Probe",
    "summary": "A cybercrime investigation has linked the administrator of Qilin ransomware to Aleksey Mikhailovich Yakovtsev, a 36-year-old man living in St. Published by KrebsOnSecurity on November 11, 2026, the findings connect the online identity “Haise” to older forum accounts, Telegram records, and leaked databases.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/qilin-ransomware-admin-identified/",
    "publishedAt": "2026-11-12T13:42:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "qilin-ransomware-admin-identified-as-36-year-old-r",
      "article-e5b20db7",
      "e5b20db7",
      "qilin-ransomware-admin-identified-as-36-year-old-r-445761",
      "qilin-ransomware-admin-identified-as-36-year-old-russian-hac"
    ]
  },
  {
    "slug": "chrome-157-firefox-160-patch-180-vulnerabilities-73c79817",
    "title": "Chrome 157, Firefox 160 Patch 180+ Vulnerabilities",
    "summary": "Google released Chrome 157, fixing 83 flaws, and Mozilla updated Firefox 160 to address 99 bugs, patching over 180 vulnerabilities. The patches cover memory corruption, privilege escalation, and input validation flaws, with no active exploitation reported. Users should install the latest browser versions promptly to mitigate potential exploitation in enterprise environments.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/chrome-firefox-updates-patch-180-vulnerabilities/",
    "publishedAt": "2026-11-12T13:42:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-157-firefox-160-patch-180-vulnerabilities",
      "article-73c79817",
      "73c79817",
      "chrome-157-firefox-160-patch-180-vulnerabilities-568b12"
    ]
  },
  {
    "slug": "lenovo-warns-of-high-severity-server-flaw-that-res-740b14a3",
    "title": "Lenovo Warns of High-Severity Server Flaw That Restores Default Root Credentials After Reset",
    "summary": "Lenovo has disclosed a high-severity security flaw in ThinkSystem V4 server management firmware that restores a default OpenBMC root password after a factory reset. Tracked as CVE-2026-81936, the issue could let attackers access enabled administrative interfaces and reach the controller’s underlying operating system, which is normally restricted.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/lenovo-server-flaw/",
    "publishedAt": "2026-11-12T13:37:44.000Z",
    "cves": [
      "CVE-2026-81936"
    ],
    "additionalSources": [],
    "aliases": [
      "lenovo-warns-of-high-severity-server-flaw-that-res",
      "article-740b14a3",
      "740b14a3",
      "lenovo-warns-of-high-severity-server-flaw-that-res-1fa676",
      "lenovo-warns-of-high-severity-server-flaw-that-restores-defa"
    ]
  },
  {
    "slug": "endgame-takedown-recovers-6-million-stolen-credent-3e3943d7",
    "title": "Endgame Takedown Recovers 6 Million Stolen Credentials",
    "summary": "Police and Europol dismantled servers behind Gootloader, CastleRAT, and StealC malware, uncovering more than 6 million stolen credentials used by ransomware gangs. The credentials were harvested from infected computers and sold to attackers, enabling unauthorized network access and facilitating ransomware operations. Law enforcement should continue to disrupt credential‑selling services and enforce stricter authentication controls to mitigate future ransomware infiltration.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/12/europol-operation-endgame-malware-takedown/",
    "publishedAt": "2026-11-12T13:34:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "endgame-takedown-recovers-6-million-stolen-credent",
      "article-3e3943d7",
      "3e3943d7",
      "endgame-takedown-recovers-6-million-stolen-credent-23c44f",
      "endgame-takedown-recovers-6-million-stolen-credentials"
    ]
  },
  {
    "slug": "red-hat-releases-important-cockpit-security-update-7d415ad2",
    "title": "Red Hat Releases Important Cockpit Security Update",
    "summary": "Red Hat issued a security update for cockpit on Enterprise Linux 9.8 Extended Update Support, addressing an important vulnerability. The update carries a CVSS base score indicating significant risk, and the referenced CVE(s) detail the flaw in cockpit’s authentication handling. Administrators should apply the update immediately to prevent potential privilege escalation or unauthorized access.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99601",
    "publishedAt": "2026-11-12T13:31:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-important-cockpit-security-update",
      "article-7d415ad2",
      "7d415ad2",
      "red-hat-releases-important-cockpit-security-update-37d66d"
    ]
  },
  {
    "slug": "romania-blocks-russian-attack-on-government-emails-b15c63ed",
    "title": "Romania Blocks Russian Attack on Government Emails",
    "summary": "Romania’s intelligence agency reported stopping a Russian state‑linked cyber‑espionage campaign that targeted government email accounts before data exfiltration could occur. The operation prevented the exfiltration of sensitive information, mitigating potential compromise of national security communications. Authorities should maintain continuous monitoring of state‑linked threat actors and enforce robust email authentication protocols.",
    "category": "Nation State",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/romania-russia-cyberattack-emails",
    "publishedAt": "2026-11-12T13:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "romania-blocks-russian-attack-on-government-emails",
      "article-b15c63ed",
      "b15c63ed",
      "romania-blocks-russian-attack-on-government-emails-29f0e5"
    ]
  },
  {
    "slug": "sckit-exploits-screenconnect-remote-access-vulnera-3164abd1",
    "title": "SCKit Exploits ScreenConnect Remote Access Vulnerability",
    "summary": "SCKit malware exploits the patched CVE‑2026‑84869 flaw in ConnectWise ScreenConnect, hijacking support sessions to compromise managed service provider environments. The CVSS 9.9 flaw permits unauthenticated remote code execution via crafted requests, exposing internal networks to lateral movement. ScreenConnect released an update; administrators should patch immediately and disable unused remote‑access features to mitigate risk. The flaw is tracked as CVE-2026-84869.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/sckit-malware-targets-screenconnect.html",
    "publishedAt": "2026-11-12T13:08:28.000Z",
    "cves": [
      "CVE-2026-84869"
    ],
    "additionalSources": [],
    "aliases": [
      "sckit-exploits-screenconnect-remote-access-vulnera",
      "article-3164abd1",
      "3164abd1",
      "sckit-exploits-screenconnect-remote-access-vulnera-7c1985",
      "sckit-exploits-screenconnect-remote-access-vulnerability"
    ]
  },
  {
    "slug": "kazakhstan-hackers-deploy-ai-agent-for-central-asi-3d350d73",
    "title": "Kazakhstan Hackers Deploy AI Agent for Central Asian Espionage",
    "summary": "Suspected Kazakhstan-linked hackers deployed an AI agent to spy on Central Asian governments, steal documents, and infiltrate critical infrastructure. The agent automates reconnaissance and credential harvesting, bypassing traditional controls to gain unauthorized access to mission‑critical systems. Teams should enforce strict access controls, monitor for anomalous AI‑driven activity, and deploy advanced threat detection to mitigate infiltration.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/kazakhstan-hackers-central-asia",
    "publishedAt": "2026-11-12T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kazakhstan-hackers-deploy-ai-agent-for-central-asi",
      "article-3d350d73",
      "3d350d73",
      "kazakhstan-hackers-deploy-ai-agent-for-central-asi-520e00",
      "kazakhstan-hackers-deploy-ai-agent-for-central-asian-espiona"
    ]
  },
  {
    "slug": "red-hat-releases-krb5-security-update-for-rhel-10-f0f88349",
    "title": "Red Hat Releases krb5 Security Update for RHEL 10",
    "summary": "Red Hat issued a security update for the krb5 library on Red Hat Enterprise Linux 10, addressing a bug that could affect Kerberos authentication. The update carries an Important security impact rating, though no public exploit or CVE identifier is disclosed in the advisory. Customers should apply the RHSA‑2026:99624 package immediately to mitigate potential authentication weaknesses.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99624",
    "publishedAt": "2026-11-12T12:56:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-krb5-security-update-for-rhel-10",
      "article-f0f88349",
      "f0f88349",
      "red-hat-releases-krb5-security-update-for-rhel-10-37d66d"
    ]
  },
  {
    "slug": "red-hat-updates-cockpit-for-rhel-9-dfd40861",
    "title": "Red Hat Updates cockpit for RHEL 9",
    "summary": "Red Hat released a security update for the cockpit web console on RHEL 9, addressing a vulnerability that could let attackers gain unauthorized administrative access. The advisory assigns an Important impact rating and references CVE links, but no specific CVE identifiers or CVSS scores are provided.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99602",
    "publishedAt": "2026-11-12T12:53:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-cockpit-for-rhel-9",
      "article-dfd40861",
      "dfd40861",
      "red-hat-updates-cockpit-for-rhel-9-37d66d"
    ]
  },
  {
    "slug": "cruciferra-maas-conceals-infostealers-and-rats-1b5dca33",
    "title": "Cruciferra MaaS Conceals Infostealers and RATs",
    "summary": "Cybercriminals rent the Cruciferra malware‑as‑a‑service platform to conceal infostealers and remote access trojans from security software. Cruciferra encrypts malicious payloads in multiple layers, evading antivirus and endpoint detection tools and enabling widespread global campaigns. Defenders should employ advanced behavioral analytics and multi‑layered detection to identify encrypted RATs and infostealer activity.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/cruciferra-malware-as-a-service/",
    "publishedAt": "2026-11-12T12:48:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cruciferra-maas-conceals-infostealers-and-rats",
      "article-1b5dca33",
      "1b5dca33",
      "cruciferra-maas-conceals-infostealers-and-rats-1df31d"
    ]
  },
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
    "slug": "police-use-webloc-to-track-smartphones-via-app-dat-dc40be45",
    "title": "Police Use Webloc to Track Smartphones via App Data",
    "summary": "Penlink’s Webloc app harvests location data from weather, gaming, email, and religious apps on smartphones, police map movements. The tool aggregates billions of points, reconstructing a trajectory over the past year and delivering near real‑time updates, exposing privacy without consent. No vendor patch is required; law enforcement should enforce data‑handling policies and consider opt‑in mechanisms to mitigate privacy risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/11/another-way-police-are-locating-people-from-their-smartphones.html",
    "publishedAt": "2026-11-12T12:02:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "police-use-webloc-to-track-smartphones-via-app-dat",
      "article-dc40be45",
      "dc40be45",
      "police-use-webloc-to-track-smartphones-via-app-dat-d477ac",
      "police-use-webloc-to-track-smartphones-via-app-data"
    ]
  },
  {
    "slug": "siemens-industrial-edge-management-11a6dfe0",
    "title": "Siemens Industrial Edge Management",
    "summary": "A buffer overflow vulnerability in the Brotli decoder (c/dec/decode.c) in Google Brotli versions 1.0.3 through 1.2.0 on all platforms allows a remote unauthenticated attacker to corrupt adjacent decoder state memory, disclose sensitive memory contents, cause a denial of service, or potentially execute arbitrary code using a crafted Brotli-compressed stream. The flaw is tracked as CVE-2026-111497.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-316-03",
    "publishedAt": "2026-11-12T12:00:00.000Z",
    "cves": [
      "CVE-2026-111497"
    ],
    "additionalSources": [],
    "aliases": [
      "siemens-industrial-edge-management",
      "article-11a6dfe0",
      "11a6dfe0",
      "siemens-industrial-edge-management-41bab8"
    ]
  },
  {
    "slug": "siemens-desigo-gridscale-6a76e33a",
    "title": "Siemens Desigo, Gridscale",
    "summary": "A buffer overflow vulnerability in the Brotli decoder (c/dec/decode.c) in Google Brotli versions 1.0.3 through 1.2.0 on all platforms allows a remote unauthenticated attacker to corrupt adjacent decoder state memory, disclose sensitive memory contents, cause a denial of service, or potentially execute arbitrary code using a crafted Brotli-compressed stream. The flaw is tracked as CVE-2026-111497.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-316-02",
    "publishedAt": "2026-11-12T12:00:00.000Z",
    "cves": [
      "CVE-2026-111497"
    ],
    "additionalSources": [],
    "aliases": [
      "siemens-desigo-gridscale",
      "article-6a76e33a",
      "6a76e33a",
      "siemens-desigo-gridscale-41bab8"
    ]
  },
  {
    "slug": "siemens-ruggedcom-ape1808-37c64b1f",
    "title": "Siemens RUGGEDCOM APE1808",
    "summary": "A buffer overflow vulnerability in the Brotli decoder (c/dec/decode.c) in Google Brotli versions 1.0.3 through 1.2.0 on all platforms allows a remote unauthenticated attacker to corrupt adjacent decoder state memory, disclose sensitive memory contents, cause a denial of service, or potentially execute arbitrary code using a crafted Brotli-compressed stream. The flaw is tracked as CVE-2026-111497.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-316-04",
    "publishedAt": "2026-11-12T12:00:00.000Z",
    "cves": [
      "CVE-2026-111497"
    ],
    "additionalSources": [],
    "aliases": [
      "siemens-ruggedcom-ape1808",
      "article-37c64b1f",
      "37c64b1f",
      "siemens-ruggedcom-ape1808-41bab8"
    ]
  },
  {
    "slug": "siemens-ruggedcom-ape1808-affected-by-php2shell-fl-540fe133",
    "title": "Siemens RUGGEDCOM APE1808 Affected by PHP2Shell Flaw",
    "summary": "A use‑after‑free flaw in PAN‑OS PHP2Shell (CVE‑2026‑109618/109619) enables remote code execution on Siemens RUGGEDCOM APE1808 devices. The flaw exploits PHP's longjmp OOM handling, yielding CVSS 9.8 and critical infrastructure impact; attackers can execute arbitrary code without authentication. Siemens recommends applying the vendor‑issued workarounds and updating firmware as soon as patches are available. The flaw is tracked as CVE-2026-109618.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-316-05",
    "publishedAt": "2026-11-12T12:00:00.000Z",
    "cves": [
      "CVE-2026-109618"
    ],
    "additionalSources": [],
    "aliases": [
      "siemens-ruggedcom-ape1808-affected-by-php2shell-fl",
      "article-540fe133",
      "540fe133",
      "siemens-ruggedcom-ape1808-affected-by-php2shell-fl-41bab8",
      "siemens-ruggedcom-ape1808-affected-by-php2shell-flaw"
    ]
  },
  {
    "slug": "siemens-building-automation-affected-by-php2shell-e09c233b",
    "title": "Siemens Building Automation Affected by PHP2Shell Vulnerabilities",
    "summary": "The PHP core vulnerabilities CVE‑2026‑109618/109619 (php2shell) allow unauthenticated remote code execution on Siemens Building Automation and Energy products. The flaws stem from improper handling of PHP's longjmp OOM errors, granting attackers full code execution without credentials and posing critical infrastructure risk. Siemens advises restricting network access, applying vendor‑issued workarounds, and following operational guidelines until patches are released. The flaw is tracked as CVE-2026-109618.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-316-01",
    "publishedAt": "2026-11-12T12:00:00.000Z",
    "cves": [
      "CVE-2026-109618"
    ],
    "additionalSources": [],
    "aliases": [
      "siemens-building-automation-affected-by-php2shell",
      "article-e09c233b",
      "e09c233b",
      "siemens-building-automation-affected-by-php2shell-41bab8",
      "siemens-building-automation-affected-by-php2shell-vulnerabil"
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
    "slug": "rhsa-2026-99596-important-gdb-security-update-3fbde677",
    "title": "RHSA-2026:99596: Important: gdb security update",
    "summary": "An update for gdb is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99596",
    "publishedAt": "2026-11-12T11:22:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99596-important-gdb-security-update",
      "article-3fbde677",
      "3fbde677",
      "rhsa-2026-99596-important-gdb-security-update-37d670"
    ]
  },
  {
    "slug": "rhsa-2026-99594-important-gdb-security-update-6cea9c6b",
    "title": "RHSA-2026:99594: Important: gdb security update",
    "summary": "An update for gdb is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99594",
    "publishedAt": "2026-11-12T11:13:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99594-important-gdb-security-update",
      "article-6cea9c6b",
      "6cea9c6b",
      "rhsa-2026-99594-important-gdb-security-update-37d670"
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
    "slug": "rhsa-2026-99576-important-rsync-security-update-ecc89d3d",
    "title": "RHSA-2026:99576: Important: rsync security update",
    "summary": "An update for rsync is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99576",
    "publishedAt": "2026-11-12T10:54:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99576-important-rsync-security-update",
      "article-ecc89d3d",
      "ecc89d3d",
      "rhsa-2026-99576-important-rsync-security-update-37d670"
    ]
  },
  {
    "slug": "scammers-target-browser-push-notifications-for-dec-1e1a942a",
    "title": "Scammers Target Browser Push Notifications for Deception",
    "summary": "Scammers exploit browser push notifications to trick users into granting permissions, creating a false sense of adware infection. The technique leverages the push notification API to display deceptive alerts that prompt users to enable notifications. Security teams should disable or restrict push notifications and educate users about legitimate notification requests.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/mobile/2026/11/why-scammers-want-you-to-allow-notifications",
    "publishedAt": "2026-11-12T10:52:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "scammers-target-browser-push-notifications-for-dec",
      "article-1e1a942a",
      "1e1a942a",
      "scammers-target-browser-push-notifications-for-dec-508181",
      "scammers-target-browser-push-notifications-for-deception"
    ]
  },
  {
    "slug": "rhsa-2026-99592-important-openssh-security-update-8e522824",
    "title": "RHSA-2026:99592: Important: openssh security update",
    "summary": "An update for openssh is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99592",
    "publishedAt": "2026-11-12T10:48:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99592-important-openssh-security-update",
      "article-8e522824",
      "8e522824",
      "rhsa-2026-99592-important-openssh-security-update-37d670"
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
    "slug": "chrome-updates-83-flaws-five-critical-rce-fixes-7a376471",
    "title": "Chrome Updates 83 Flaws, Five Critical RCE Fixes",
    "summary": "Google released a Chrome update fixing 83 vulnerabilities, including five use‑after‑free flaws that could enable remote code execution on Windows, macOS, and Linux. The flaws affect rendering, graphics, JavaScript, and core features, with CVSS scores up to 9.8, and are exploitable via crafted web content. Users should upgrade to Chrome 157.0.8103.78/79 or later, and admins should enforce updated security policies.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/google-chrome-fixes-83-security-flaws/",
    "publishedAt": "2026-11-12T10:32:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-updates-83-flaws-five-critical-rce-fixes",
      "article-7a376471",
      "7a376471",
      "chrome-updates-83-flaws-five-critical-rce-fixes-3e4626"
    ]
  },
  {
    "slug": "microsoft-reports-windows-11-update-installation-f-ad847603",
    "title": "Microsoft Reports Windows 11 Update Installation Failure",
    "summary": "Microsoft confirmed that November 2026 security updates fail to install on Windows 11 systems with the October preview update. The failure blocks critical patches, leaving affected devices vulnerable to known exploits. Users are advised to revert to the stable release or await a corrective update from Microsoft in the near future.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-confirms-kb5132061-installation-issues-0x80070306-0x800f0989-0x800f0993-errors/",
    "publishedAt": "2026-11-12T10:24:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-reports-windows-11-update-installation-f",
      "article-ad847603",
      "ad847603",
      "microsoft-reports-windows-11-update-installation-f-2c5b46",
      "microsoft-reports-windows-11-update-installation-failure"
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
    "slug": "microsoft-warns-hackers-are-using-gsocket-backdoor-b50f0c5f",
    "title": "Microsoft Warns Hackers Are Using GSocket Backdoors to Keep Linux Servers Compromised After Patching",
    "summary": "Microsoft has warned that attackers are using a free remote access tool called GSocket to stay inside Linux servers even after the original security hole is fixed. Many admins treat a patch as the end of an incident, but this activity shows that patching alone may leave the attacker’s access untouched.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/gsocket-backdoors/",
    "publishedAt": "2026-11-12T09:44:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-warns-hackers-are-using-gsocket-backdoor",
      "article-b50f0c5f",
      "b50f0c5f",
      "microsoft-warns-hackers-are-using-gsocket-backdoor-2b8f06",
      "microsoft-warns-hackers-are-using-gsocket-backdoors-to-keep-"
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
    "summary": "MongoDB is affected by CVE‑2026‑118383, a use‑after‑free vulnerability that can lead to arbitrary code execution in enterprise environments. The flaw arises when the database fails to release memory after a malicious request, allowing attackers to trigger a crash or execute injected code. MongoDB has released a patch; administrators should apply the update immediately and monitor logs for anomalous activity. The flaw is tracked as CVE-2026-118383.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cve-2026-118383-use-after-free-vulnerability-in-mongodb",
    "publishedAt": "2026-11-12T03:24:43.000Z",
    "cves": [
      "CVE-2026-118383"
    ],
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
    "slug": "rhsa-2026-99122-moderate-xorg-x11-server-security-33a55dd2",
    "title": "RHSA-2026:99122: Moderate: xorg-x11-server security update",
    "summary": "An update for xorg-x11-server is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99122",
    "publishedAt": "2026-11-12T02:41:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99122-moderate-xorg-x11-server-security",
      "article-33a55dd2",
      "33a55dd2",
      "rhsa-2026-99122-moderate-xorg-x11-server-security-37d67f",
      "rhsa-2026-99122-moderate-xorg-x11-server-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-99154-important-gimp-security-update-eaa56947",
    "title": "RHSA-2026:99154: Important: gimp security update",
    "summary": "An update for gimp is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99154",
    "publishedAt": "2026-11-12T02:40:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99154-important-gimp-security-update",
      "article-eaa56947",
      "eaa56947",
      "rhsa-2026-99154-important-gimp-security-update-37d67f"
    ]
  },
  {
    "slug": "rhsa-2026-99131-important-webkit2gtk3-security-bug-f8593654",
    "title": "RHSA-2026:99131: Important: webkit2gtk3 security, bug fix, and enhancement update",
    "summary": "An update for webkit2gtk3 is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99131",
    "publishedAt": "2026-11-12T02:38:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99131-important-webkit2gtk3-security-bug",
      "article-f8593654",
      "f8593654",
      "rhsa-2026-99131-important-webkit2gtk3-security-bug-37d67f",
      "rhsa-2026-99131-important-webkit2gtk3-security-bug-fix-and-e"
    ]
  },
  {
    "slug": "rhsa-2026-99127-important-qt5-qtdeclarative-securi-4fe2f1df",
    "title": "RHSA-2026:99127: Important: qt5-qtdeclarative security update",
    "summary": "An update for qt5-qtdeclarative is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99127",
    "publishedAt": "2026-11-12T02:37:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99127-important-qt5-qtdeclarative-securi",
      "article-4fe2f1df",
      "4fe2f1df",
      "rhsa-2026-99127-important-qt5-qtdeclarative-securi-37d67f",
      "rhsa-2026-99127-important-qt5-qtdeclarative-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-99152-important-grafana-pcp-security-upd-699f7d6c",
    "title": "RHSA-2026:99152: Important: grafana-pcp security update",
    "summary": "An update for grafana-pcp is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99152",
    "publishedAt": "2026-11-12T02:36:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99152-important-grafana-pcp-security-upd",
      "article-699f7d6c",
      "699f7d6c",
      "rhsa-2026-99152-important-grafana-pcp-security-upd-37d67f",
      "rhsa-2026-99152-important-grafana-pcp-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-99169-important-oci-seccomp-bpf-hook-sec-9a3f5d54",
    "title": "RHSA-2026:99169: Important: oci-seccomp-bpf-hook security update",
    "summary": "An update for oci-seccomp-bpf-hook is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99169",
    "publishedAt": "2026-11-12T02:33:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99169-important-oci-seccomp-bpf-hook-sec",
      "article-9a3f5d54",
      "9a3f5d54",
      "rhsa-2026-99169-important-oci-seccomp-bpf-hook-sec-37d67f",
      "rhsa-2026-99169-important-oci-seccomp-bpf-hook-security-upda"
    ]
  },
  {
    "slug": "rhsa-2026-99161-moderate-patch-security-update-902bf761",
    "title": "RHSA-2026:99161: Moderate: patch security update",
    "summary": "An update for patch is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99161",
    "publishedAt": "2026-11-12T02:31:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99161-moderate-patch-security-update",
      "article-902bf761",
      "902bf761",
      "rhsa-2026-99161-moderate-patch-security-update-37d67f"
    ]
  },
  {
    "slug": "rhsa-2026-99124-important-squid-security-update-5e3f8556",
    "title": "RHSA-2026:99124: Important: squid security update",
    "summary": "An update for squid is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99124",
    "publishedAt": "2026-11-12T02:27:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99124-important-squid-security-update",
      "article-5e3f8556",
      "5e3f8556",
      "rhsa-2026-99124-important-squid-security-update-37d67f"
    ]
  },
  {
    "slug": "rhsa-2026-99146-important-net-8-0-security-bug-fix-cb21ce40",
    "title": "RHSA-2026:99146: Important: .NET 8.0 security, bug fix, and enhancement update",
    "summary": "An update for .NET 8.0 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99146",
    "publishedAt": "2026-11-12T02:21:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99146-important-net-8-0-security-bug-fix",
      "article-cb21ce40",
      "cb21ce40",
      "rhsa-2026-99146-important-net-8-0-security-bug-fix-37d67f",
      "rhsa-2026-99146-important-net-8-0-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "rhsa-2026-99151-important-grafana-security-update-6dea7678",
    "title": "RHSA-2026:99151: Important: grafana security update",
    "summary": "An update for grafana is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99151",
    "publishedAt": "2026-11-12T02:03:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-99151-important-grafana-security-update",
      "article-6dea7678",
      "6dea7678",
      "rhsa-2026-99151-important-grafana-security-update-37d67f"
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
    "slug": "greynoise-benchmarks-46-ai-models-for-defensive-se-38d76cb0",
    "title": "GreyNoise Benchmarks 46 AI Models for Defensive Security",
    "summary": "GreyNoise Labs evaluated 46 artificial intelligence models on defensive cybersecurity capabilities across real-world operational tasks. The benchmark assessed model performance across specific defensive domains including network detections, file-based detections, and attack forensic analysis. Security teams can utilize the index findings to evaluate AI model efficacy for defensive SOC automation and threat analysis workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "GreyNoise Labs",
    "sourceUrl": "https://www.greynoise.io/blog/ai-cyber-index-benchmarking-defensive-capabilities",
    "publishedAt": "2026-11-12T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "greynoise-benchmarks-46-ai-models-for-defensive-se",
      "article-38d76cb0",
      "38d76cb0",
      "greynoise-benchmarks-46-ai-models-for-defensive-se-4c6dce",
      "greynoise-benchmarks-46-ai-models-for-defensive-security"
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
    "summary": "GitLab released security and maintenance patch updates 19.5.5 and 19.4.7 for Community Edition and Enterprise Edition. The updates resolve native memory-safety bugs in dependencies, fix GCS default credential metadata timeouts, and correct approval policy scanner mappings. GitLab strongly recommends administrators upgrade to these patch versions immediately.",
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
    "summary": "Google released ChromeOS LTS-150, patching numerous high‑severity CVEs including a critical CVE‑2026‑126879 use‑after‑free in the layout engine. The update addresses 18 CVEs such as CVE‑2026‑126901, CVE‑2026‑126856, and CVE‑2026‑126887, all of which could lead to code execution or denial of service. The vulnerabilities are tracked as CVE-2026-126879, CVE-2026-126901, CVE-2026-126856.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/long-term-support-channel-update-for.html",
    "publishedAt": "2026-11-11T23:06:31.103Z",
    "cves": [
      "CVE-2026-126879",
      "CVE-2026-126901",
      "CVE-2026-126856",
      "CVE-2026-126887"
    ],
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
    "slug": "japan-allocates-emergency-cybersecurity-funding-fo-53025add",
    "title": "Japan Allocates Emergency Cybersecurity Funding for Proactive Defense",
    "summary": "Japan announced an emergency cybersecurity funding package to counter an increasing volume of AI-enabled cyberattacks against national infrastructure. The initiative establishes public-private cyber response units, an AI specialist team led by the Ministry of Economy, and expanded active defense authorities. Government authorities plan to leverage the enhanced operational discretion and specialized units to strengthen national proactive defense posture.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/japan-emergency-funding-cybersecurity-ai-assisted-breaches-japanese",
    "publishedAt": "2026-11-11T22:14:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "japan-allocates-emergency-cybersecurity-funding-fo",
      "article-53025add",
      "53025add",
      "japan-allocates-emergency-cybersecurity-funding-fo-3197c7",
      "japan-allocates-emergency-cybersecurity-funding-for-proactiv"
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
    "summary": "Server-side request forgery (SSRF) in the server registration and update API in Amazon mcp-gateway-registry before 1.35.0 might allow an authenticated remote user to send requests from the gateway to internal network services and cloud instance metadata endpoints and read the responses via a crafted request.",
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
    "summary": "Palo Alto Networks disclosed CVE‑2026‑0325, an authorization bypass flaw in PAN‑OS GlobalProtect. The vulnerability allows an unauthenticated attacker to gain privileged access to the VPN portal, with a CVSS score indicating low impact; no active exploitation has been reported. Palo Alto recommends applying the latest PAN‑OS update that patches CVE‑2026‑0325 to prevent unauthorized access. The flaw is tracked as CVE-2026-0325.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-0325",
    "publishedAt": "2026-11-11T17:00:00.000Z",
    "cves": [
      "CVE-2026-0325"
    ],
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
    "summary": "Palo Alto Networks identified CVE‑2026‑0327, a privilege escalation flaw in PAN‑OS GlobalProtect. The bug permits an authenticated user to elevate privileges on the VPN appliance, with a CVSS score reflecting low severity; no exploitation evidence exists. Apply the vendor’s latest PAN‑OS patch that addresses CVE‑2026‑0327 to eliminate the escalation vector. The flaw is tracked as CVE-2026-0327.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-0327",
    "publishedAt": "2026-11-11T17:00:00.000Z",
    "cves": [
      "CVE-2026-0327"
    ],
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
    "summary": "Palo Alto Networks disclosed CVE‑2026‑0330, an authenticated remote code execution flaw in PAN‑OS Panorama. The vulnerability allows a logged‑in attacker to execute arbitrary code on the Panorama server, with a CVSS score indicating medium severity; no active exploitation has been reported. Install the latest PAN‑OS update that patches CVE‑2026‑0330 to prevent remote code execution. The flaw is tracked as CVE-2026-0330.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-0330",
    "publishedAt": "2026-11-11T17:00:00.000Z",
    "cves": [
      "CVE-2026-0330"
    ],
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
    "category": "Vulnerability",
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
    "summary": "Security teams that run AI coding assistants may be exposing their most powerful credentials without knowing it. A new study shows that Model Context Protocol (MCP) servers can quietly change their own code after they are set up. The flaw is tracked as CVE-2026-125271.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-could-exploit-mcp-server/",
    "publishedAt": "2026-11-11T16:07:18.000Z",
    "cves": [
      "CVE-2026-125271"
    ],
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
    "slug": "cve-2026-118749-asp-net-core-dos-vulnerability-23f19ff0",
    "title": "CVE-2026-118749 ASP.NET Core DoS Vulnerability",
    "summary": "CVE-2026-118749 is a denial‑of‑service flaw in ASP.NET Core that can be triggered by malformed requests. The vulnerability causes resource exhaustion, leading to application crashes without requiring authentication, and is classified as a high‑severity DoS issue. Microsoft has released an informational update; administrators should apply the latest ASP.NET Core patches and monitor traffic for abnormal request patterns.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118749",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-118749"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-118749-asp-net-core-dos-vulnerability",
      "article-23f19ff0",
      "23f19ff0",
      "cve-2026-118749-asp-net-core-dos-vulnerability-1fe90c"
    ]
  },
  {
    "slug": "microsoft-publishes-informational-update-on-cve-20-7bf468e2",
    "title": "Microsoft Publishes Informational Update on CVE-2026-118746",
    "summary": "Microsoft released an update addressing CVE-2026-118746, a .NET security feature bypass vulnerability that could allow attackers to circumvent authentication checks. The flaw originates from improper validation of security tokens, potentially enabling unauthorized code execution if exploited, though no active exploitation has been reported. A patch is available in the .NET update; administrators should apply it immediately to mitigate risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118746",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-118746"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-publishes-informational-update-on-cve-20",
      "article-7bf468e2",
      "7bf468e2",
      "microsoft-publishes-informational-update-on-cve-20-1fe90c",
      "microsoft-publishes-informational-update-on-cve-2026-118746"
    ]
  },
  {
    "slug": "microsoft-issues-informational-update-on-cve-2026-dab543b0",
    "title": "Microsoft Issues Informational Update on CVE-2026-118747",
    "summary": "Microsoft released an update addressing CVE-2026-118747, a .NET denial‑of‑service vulnerability that could cause application crashes by exhausting resources. The flaw stems from unbounded memory allocation during request processing, potentially leading to service disruption if triggered, though no active exploitation has been reported. A patch is available in the .NET update; administrators should apply it promptly to prevent outages.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118747",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-118747"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-issues-informational-update-on-cve-2026",
      "article-dab543b0",
      "dab543b0",
      "microsoft-issues-informational-update-on-cve-2026-1fe90c",
      "microsoft-issues-informational-update-on-cve-2026-118747"
    ]
  },
  {
    "slug": "microsoft-updates-guidance-for-asp-net-core-dos-fl-f69a0c33",
    "title": "Microsoft Updates Guidance for ASP.NET Core DoS Flaw",
    "summary": "Microsoft updated security guidance regarding CVE-2026-118748, a denial of service vulnerability affecting ASP.NET Core applications. The security flaw exposes targeted ASP.NET Core deployments to potential denial of service conditions, though recent documentation modifications represent informational updates only. Security teams managing affected ASP.NET Core frameworks should review the revised Microsoft security update links to ensure proper mitigation deployment.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-118748",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-118748"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-guidance-for-asp-net-core-dos-fl",
      "article-f69a0c33",
      "f69a0c33",
      "microsoft-updates-guidance-for-asp-net-core-dos-fl-1fe90c",
      "microsoft-updates-guidance-for-asp-net-core-dos-flaw"
    ]
  },
  {
    "slug": "asp-net-core-security-feature-bypass-cve-2026-1141-0d270cd7",
    "title": "ASP.NET Core Security Feature Bypass CVE-2026-114157",
    "summary": "CVE-2026-114157 is a security feature bypass affecting Microsoft ASP.NET Core, enabling attackers to circumvent built‑in controls. The flaw stems from improper validation of security update links; no active exploitation has been observed, and the issue is informational only. Microsoft has released an informational update; administrators should verify update link handling but no patch is required.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114157",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114157"
    ],
    "additionalSources": [],
    "aliases": [
      "asp-net-core-security-feature-bypass-cve-2026-1141",
      "article-0d270cd7",
      "0d270cd7",
      "asp-net-core-security-feature-bypass-cve-2026-1141-1feaf4",
      "asp-net-core-security-feature-bypass-cve-2026-114157"
    ]
  },
  {
    "slug": "aspire-elevation-of-privilege-cve-2026-120006-c6630772",
    "title": "Aspire Elevation of Privilege CVE-2026-120006",
    "summary": "CVE-2026-120006 is an elevation of privilege flaw in Microsoft Aspire, allowing attackers to gain higher privileges within the application. The vulnerability arises from insufficient access control checks; no active exploitation has been reported, and the update is informational only. Microsoft has issued an informational notice; administrators should review privilege assignments but no patch is required.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-120006",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-120006"
    ],
    "additionalSources": [],
    "aliases": [
      "aspire-elevation-of-privilege-cve-2026-120006",
      "article-c6630772",
      "c6630772",
      "aspire-elevation-of-privilege-cve-2026-120006-1fdeb3"
    ]
  },
  {
    "slug": "asp-net-core-cve-2026-114150-information-disclosur-12b4cf9e",
    "title": "ASP.NET Core CVE-2026-114150 Information Disclosure Update",
    "summary": "Microsoft issued an informational update for the ASP.NET Core information disclosure vulnerability identified as CVE-2026-114150. The update clarifies security update links and related information but does not provide a patch or exploit details. Users should review the updated documentation, though no active exploitation has been reported.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114150",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114150"
    ],
    "additionalSources": [],
    "aliases": [
      "asp-net-core-cve-2026-114150-information-disclosur",
      "article-12b4cf9e",
      "12b4cf9e",
      "asp-net-core-cve-2026-114150-information-disclosur-1feaf4",
      "asp-net-core-cve-2026-114150-information-disclosure-update"
    ]
  },
  {
    "slug": "asp-net-core-cve-2026-114154-denial-of-service-upd-820a074c",
    "title": "ASP.NET Core CVE-2026-114154 Denial of Service Update",
    "summary": "Microsoft released an informational update for the ASP.NET Core denial of service vulnerability identified as CVE-2026-114154. The update adjusts the product list in the security updates table but does not provide a patch or exploit details. Administrators should verify that their deployments are listed, though no active exploitation has been reported.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114154",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114154"
    ],
    "additionalSources": [],
    "aliases": [
      "asp-net-core-cve-2026-114154-denial-of-service-upd",
      "article-820a074c",
      "820a074c",
      "asp-net-core-cve-2026-114154-denial-of-service-upd-1feaf4",
      "asp-net-core-cve-2026-114154-denial-of-service-update"
    ]
  },
  {
    "slug": "microsoft-updates-net-elevation-of-privilege-advis-cfa9fdfb",
    "title": "Microsoft Updates .NET Elevation of Privilege Advisory",
    "summary": "Microsoft updated documentation regarding an elevation of privilege flaw identified as CVE-2026-114155 in the .NET framework. The underlying security vulnerability allows local unauthorized users to gain elevated system privileges across impacted software components. Administrators are advised to review the updated security guidance links and deploy the latest .NET updates to ensure system protection.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114155",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114155"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-net-elevation-of-privilege-advis",
      "article-cfa9fdfb",
      "cfa9fdfb",
      "microsoft-updates-net-elevation-of-privilege-advis-1feaf4",
      "microsoft-updates-net-elevation-of-privilege-advisory"
    ]
  },
  {
    "slug": "microsoft-revises-asp-net-core-security-bypass-adv-8988610a",
    "title": "Microsoft Revises ASP.NET Core Security Bypass Advisory",
    "summary": "Microsoft issued an informational update regarding a security feature bypass vulnerability tracked as CVE-2026-114156 in ASP.NET Core. The underlying security flaw affects ASP.NET Core mechanisms, while the current advisory update modifies link details and documentation without introducing software modifications. System administrators should consult the revised Microsoft update links to confirm patch implementation and ensure defensive mitigations remain active.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114156",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114156"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-revises-asp-net-core-security-bypass-adv",
      "article-8988610a",
      "8988610a",
      "microsoft-revises-asp-net-core-security-bypass-adv-1feaf4",
      "microsoft-revises-asp-net-core-security-bypass-advisory"
    ]
  },
  {
    "slug": "asp-net-core-vulnerability-enables-denial-of-servi-effa4853",
    "title": "ASP.NET Core Vulnerability Enables Denial of Service",
    "summary": "CVE‑2026‑114149 is a denial‑of‑service flaw in ASP.NET Core that can be triggered by malformed HTTP requests. The vulnerability allows attackers to exhaust server resources, causing legitimate traffic to be dropped without code execution. Microsoft has released an update; administrators should apply the latest ASP.NET Core patch to mitigate the DoS risk. The flaw is tracked as CVE-2026-114149.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114149",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114149"
    ],
    "additionalSources": [],
    "aliases": [
      "asp-net-core-vulnerability-enables-denial-of-servi",
      "article-effa4853",
      "effa4853",
      "asp-net-core-vulnerability-enables-denial-of-servi-1feaf4",
      "asp-net-core-vulnerability-enables-denial-of-service"
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
    "summary": "A public exploit called SignDrop targets a Windows security feature meant to stop attacks on the Common Log File System (CLFS). It claims to turn a normal user account into a SYSTEM account, the highest level of control on Windows. The flaw has no CVE number and no patch as of November 11, 2026. The flaw is tracked as CVE-2026-97015.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/windows-signdrop-zero-day-exploit/",
    "publishedAt": "2026-11-11T13:57:20.000Z",
    "cves": [
      "CVE-2026-97015"
    ],
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
    "slug": "microsoft-alerts-security-teams-to-ai-agent-backdo-48c2503d",
    "title": "Microsoft Alerts Security Teams to AI Agent Backdoors",
    "summary": "A critical security alert from Microsoft identifies malicious backdoor activity targeting enterprise AI agents associated with Lazarus threat tactics. Telemetry analysis indicates that these backdoors disrupt essential root-cause controls and compromise agent execution environments without authorization. Security administrators must analyze system telemetry, deploy proactive threat-hunting detection rules, and apply mandatory software updates immediately.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/microsoft-researchers-show-ai-agents-can-be-backdoored",
    "publishedAt": "2026-11-11T13:10:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-alerts-security-teams-to-ai-agent-backdo",
      "article-48c2503d",
      "48c2503d",
      "microsoft-alerts-security-teams-to-ai-agent-backdo-6fa77a",
      "microsoft-alerts-security-teams-to-ai-agent-backdoors"
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
    "slug": "token-analyzes-ai-agent-security-flaws-in-browser-f1471ebf",
    "title": "Token Analyzes AI Agent Security Flaws in Browser Systems",
    "summary": "Security research from Token reveals that browser AI agents fail standard enterprise security controls for identity, access, and logging. The findings indicate that autonomous agents running inside authenticated browser sessions bypass operational boundaries and obscure audit tracking. Organizations must enforce dedicated non-human agent identities, limit job permissions, and isolate execution logs from user activity.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/we-built-agent-that-broke-all-of-our.html",
    "publishedAt": "2026-11-11T12:01:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "token-analyzes-ai-agent-security-flaws-in-browser",
      "article-f1471ebf",
      "f1471ebf",
      "token-analyzes-ai-agent-security-flaws-in-browser-73b6a4",
      "token-analyzes-ai-agent-security-flaws-in-browser-systems"
    ]
  },
  {
    "slug": "emudhra-revokes-eight-intermediate-cas-after-key-c-879e0857",
    "title": "eMudhra Revokes Eight Intermediate CAs After Key Compromise Flaw",
    "summary": "eMudhra revoked eight additional intermediate certificate authorities following an October key compromise incident linked to an in-house Python script. A single line flaw within the internal script affected the intermediate certificate authorities without directly weakening their private signing keys. The certificate authority executed revocation actions for the impacted CAs to maintain public trust and secure signing infrastructure integrity.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/emudhra-revokes-8-more-cas-it.html",
    "publishedAt": "2026-11-11T12:00:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "emudhra-revokes-eight-intermediate-cas-after-key-c",
      "article-879e0857",
      "879e0857",
      "emudhra-revokes-eight-intermediate-cas-after-key-c-1a8d4d",
      "emudhra-revokes-eight-intermediate-cas-after-key-compromise-"
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
    "summary": "Microsoft has released security updates for four Windows Remote Desktop Client vulnerabilities that could allow attackers to run code through network connections or local access. Published on November 10, 2026, the flaws involve memory handling errors and a race condition. The vulnerabilities are tracked as CVE-2026-119934, CVE-2026-119858, CVE-2026-95964.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/multiple-windows-remote-desktop-vulnerabilities/",
    "publishedAt": "2026-11-11T11:22:00.000Z",
    "cves": [
      "CVE-2026-119934",
      "CVE-2026-119858",
      "CVE-2026-95964",
      "CVE-2026-119390"
    ],
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
      "CVE-2026-35344",
      "CVE-2026-35345",
      "CVE-2026-35348",
      "CVE-2026-35350",
      "CVE-2026-35351",
      "CVE-2026-35354",
      "CVE-2026-35357",
      "CVE-2026-35359",
      "CVE-2026-35360",
      "CVE-2026-35363",
      "CVE-2026-35364",
      "CVE-2026-35367",
      "CVE-2026-35368",
      "CVE-2026-35373",
      "CVE-2026-35374",
      "CVE-2026-35376",
      "CVE-2026-35377",
      "CVE-2026-93658"
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
    "summary": "Hackers exploiting AhsayCBS backup servers have planted webshells, hidden encrypted code inside PNG images, and staged a Python implant designed to run only on its intended host. The findings show an intrusion that extended beyond cryptocurrency mining, giving attackers several ways to keep access to systems responsible for protecting an organization’s backups. The flaw is tracked as CVE-2026-105133.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-exploit-ahsaycbs-vulnerabilities/",
    "publishedAt": "2026-11-11T10:44:43.000Z",
    "cves": [
      "CVE-2026-105133"
    ],
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
    "summary": "A kernel flaw in IOMMU RMP checks allows a local hypervisor attacker to trigger an out‑of‑bounds condition and corrupt SEV‑SNP guest memory. The vulnerability, identified as CVE‑2023‑20585, could enable privilege escalation within virtualized environments, potentially compromising guest isolation. Red Hat released a kernel patch that restores RMP validation and addresses affected subsystems, and users should apply the update immediately. The flaw is tracked as CVE-2023-20585.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9040-1",
    "publishedAt": "2026-11-11T08:27:44.000Z",
    "cves": [
      "CVE-2023-20585"
    ],
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
    "summary": "Fortinet has disclosed critical security flaws affecting FortiManager, FortiAnalyzer, and FortiOS, including weaknesses that could let attackers execute code without logging in. Published on November 10, 2026, the disclosures cover management APIs, device communication services, routing, and specific high availability setups. The flaw is tracked as CVE-2026-100204.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-fortinet-flaws-patched/",
    "publishedAt": "2026-11-11T03:15:16.000Z",
    "cves": [
      "CVE-2026-100204"
    ],
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
  }
];
