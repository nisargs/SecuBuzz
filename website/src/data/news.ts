import type { NewsBrief, NewsCategory } from '../types/news';

export const newsCategories: NewsCategory[] = [
  'Vulnerability',
  'Ransomware',
  'Breach',
  'Malware',
  'Policy',
  'Cloud'
];

export const news: NewsBrief[] = [
  {
    "slug": "github-introduces-ai-detector-to-block-passwords-b-5fe20c",
    "title": "GitHub Introduces AI Detector to Block Passwords Before Code Push",
    "summary": "GitHub has released an AI‑powered secret detector, built with Microsoft Applied Sciences, that scans code before a push to identify unstructured credentials such as database passwords. The ModernBERT classifier extends existing push protection, blocking pushes that contain secrets and preventing credentials from entering repository history.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/08/github-push-protection-modernbert/",
    "publishedAt": "2026-10-08T09:02:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "github-introduces-ai-detector-to-block-passwords-b",
      "article-5fe20c",
      "5fe20c",
      "github-introduces-ai-detector-to-block-passwords-before-code"
    ]
  },
  {
    "slug": "matchboil-malware-used-by-russia-aligned-group-to-20d654",
    "title": "MATCHBOIL Malware Used by Russia‑Aligned Group to Install Spying Backdoor in Ukraine",
    "summary": "ESET researchers identified MATCHBOIL, a downloader used by the Russia‑aligned group UAC‑0099, which installs a spying backdoor on Windows machines in Ukraine. The malware targets transportation, manufacturing, and energy sectors, planting a secondary program that creates privileged access for the attackers.",
    "category": "Malware",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/08/matchboil-malware-uac-0099/",
    "publishedAt": "2026-10-08T09:00:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "matchboil-malware-used-by-russia-aligned-group-to",
      "article-20d654",
      "20d654",
      "matchboil-malware-used-by-russia-aligned-group-to-install-sp"
    ]
  },
  {
    "slug": "oracle-health-data-breach-reaches-nearly-20-millio-3328a2",
    "title": "Oracle Health Data Breach Reaches Nearly 20 Million Records",
    "summary": "Oracle Health has reported that the number of affected records in its data breach has risen to almost 20 million, surpassing earlier estimates. The breach exposes patient data, potentially including personal identifiers and health information. No further details on mitigation or affected systems are provided.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/oracle-health-data-breach-tally-climbs-to-nearly-20-million/",
    "publishedAt": "2026-10-08T08:23:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "oracle-health-data-breach-reaches-nearly-20-millio",
      "article-3328a2",
      "3328a2",
      "oracle-health-data-breach-reaches-nearly-20-million-records"
    ]
  },
  {
    "slug": "monstercloud-owner-charged-with-fraud-over-ransomw-98a112",
    "title": "MonsterCloud Owner Charged with Fraud Over Ransomware Payments",
    "summary": "Florida-based ransomware remediation company MonsterCloud’s owner, Zohar Pinhasi, is charged with fraud for secretly paying ransomware gangs and overbilling clients. Prosecutors allege he paid over $8 million to attackers while billing more than $19 million to victims, inflating ransom payments and exploiting client trust.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/08/monstercloud-owner-ransomware-fraud-charges/",
    "publishedAt": "2026-10-08T08:00:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "monstercloud-owner-charged-with-fraud-over-ransomw",
      "article-98a112",
      "98a112",
      "monstercloud-owner-charged-with-fraud-over-ransomware-paymen"
    ]
  },
  {
    "slug": "fortibleed-attackers-lock-legitimate-users-out-of-739cd1",
    "title": "FortiBleed Attackers Lock Legitimate Users Out of Fortinet Devices",
    "summary": "Attackers targeting Fortinet devices use FortiBleed to create new accounts and delete existing ones, locking legitimate users out. The exploit manipulates device authentication, preventing authorized access and disrupting network operations. Fortinet has issued a patch to address the vulnerability and recommends updating firmware immediately.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/fortibleed-attackers-locking-victims-out-of-fortinet-devices/",
    "publishedAt": "2026-10-08T07:52:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortibleed-attackers-lock-legitimate-users-out-of",
      "article-739cd1",
      "739cd1",
      "fortibleed-attackers-lock-legitimate-users-out-of-fortinet-d"
    ]
  },
  {
    "slug": "u-s-offers-10m-reward-for-zhang-yu-linked-to-hafni-70e894",
    "title": "U.S. Offers $10M Reward for Zhang Yu Linked to HAFNIUM Exchange Attacks",
    "summary": "The U.S. State Department is offering up to $10 million for tips that identify or locate Zhang Yu, a Chinese national charged in the U.S. over the 2021 Microsoft Exchange Server HAFNIUM attacks. The reward seeks information leading to his identification or location.",
    "category": "Malware",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/us-offers-up-to-10-million-for-tips-on.html",
    "publishedAt": "2026-10-08T07:42:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "u-s-offers-10m-reward-for-zhang-yu-linked-to-hafni",
      "article-70e894",
      "70e894",
      "u-s-offers-10m-reward-for-zhang-yu-linked-to-hafnium-exchang"
    ]
  },
  {
    "slug": "samsung-galaxy-s26-hacked-three-more-times-at-pwn2-42e02c",
    "title": "Samsung Galaxy S26 Hacked Three More Times at Pwn2Own Ireland",
    "summary": "During the second day of Pwn2Own Ireland 2026, researchers exploited 45 unique zero‑day vulnerabilities in the Samsung Galaxy S26, earning $232,500 in cash awards. The attacks demonstrated active exploitation of critical device flaws in the wild.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/samsung-galaxy-s26-hacked-three-more-times-at-pwn2own-ireland/",
    "publishedAt": "2026-10-08T06:32:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "samsung-galaxy-s26-hacked-three-more-times-at-pwn2",
      "article-42e02c",
      "42e02c",
      "samsung-galaxy-s26-hacked-three-more-times-at-pwn2own-irelan"
    ]
  },
  {
    "slug": "build-an-economic-model-to-prioritize-security-spe-468f2a",
    "title": "Build an Economic Model to Prioritize Security Spending",
    "summary": "Security leaders can use an economic model to quantify risk, starting with loss scenarios and mapping them to assets. The approach ranks fixes by value at risk, aligns with CFO expectations, and demonstrates the worth of prevented incidents, helping prioritize investments.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/08/ivan-milenkovic-qualys-cyber-risk-quantification/",
    "publishedAt": "2026-10-08T06:00:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "build-an-economic-model-to-prioritize-security-spe",
      "article-468f2a",
      "468f2a",
      "build-an-economic-model-to-prioritize-security-spending"
    ]
  },
  {
    "slug": "tensorlake-npm-package-compromised-to-deliver-cred-71428b",
    "title": "Tensorlake npm Package Compromised to Deliver Credential‑Stealing Worm",
    "summary": "The npm package \"tensorlake\" was tampered with in a ChainDrop/Shai‑Hulud supply‑chain attack. The malicious 0.5.144 release contains obfuscated malware that harvests credentials, exfiltrates secrets, establishes persistence, and executes remotely supplied code, compromising user accounts.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/tensorlake-npm-package-compromised-to.html",
    "publishedAt": "2026-10-08T05:46:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "tensorlake-npm-package-compromised-to-deliver-cred",
      "article-71428b",
      "71428b",
      "tensorlake-npm-package-compromised-to-deliver-credential-ste"
    ]
  },
  {
    "slug": "audit-system-to-prevent-misuse-of-ai-in-street-sur-749558",
    "title": "Audit System to Prevent Misuse of AI in Street Surveillance",
    "summary": "A Japanese professor proposes a Fully Monitored Public Space system that adds independent record‑keeping and unannounced spot checks to AI analyzing street camera footage. The system uses existing cameras and encrypted storage to deter operators from misusing surveillance AI.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/08/ai-surveillance-cameras-privacy/",
    "publishedAt": "2026-10-08T05:30:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "audit-system-to-prevent-misuse-of-ai-in-street-sur",
      "article-749558",
      "749558",
      "audit-system-to-prevent-misuse-of-ai-in-street-surveillance"
    ]
  },
  {
    "slug": "ai-can-fix-cybersecurity-compliance-from-dashboard-32786c",
    "title": "AI Can Fix Cybersecurity Compliance, From Dashboards to Continuous Execution",
    "summary": "The article discusses how artificial intelligence can streamline cybersecurity compliance by automating control implementation, monitoring, and incident response. It highlights the high cost of manual compliance, citing a Pentagon estimate of $105,000 for a contractor’s CMMC Level 2 over three years.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/08/espresso-labs-ai-cybersecurity-compliance/",
    "publishedAt": "2026-10-08T05:00:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-can-fix-cybersecurity-compliance-from-dashboard",
      "article-32786c",
      "32786c",
      "ai-can-fix-cybersecurity-compliance-from-dashboards-to-conti"
    ]
  },
  {
    "slug": "despite-passkey-knowledge-professionals-still-use-72804b",
    "title": "Despite Passkey Knowledge, Professionals Still Use Passwords",
    "summary": "A 2026 Global State of Authentication survey found that 43% of 1,890 security professionals still rely on usernames and passwords for work accounts, even though 87% are familiar with passkeys. The study highlights a gap between awareness and adoption of modern authentication methods.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/08/passkey-adoption-typing-passwords/",
    "publishedAt": "2026-10-08T04:30:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "despite-passkey-knowledge-professionals-still-use",
      "article-72804b",
      "72804b",
      "despite-passkey-knowledge-professionals-still-use-passwords"
    ]
  },
  {
    "slug": "ibm-and-red-hat-patch-400-java-library-vulnerabili-6f37d9",
    "title": "IBM and Red Hat Patch 400+ Java Library Vulnerabilities",
    "summary": "IBM and Red Hat identified and fixed more than 400 previously unknown security flaws in widely used Java libraries. The vulnerabilities expose companies that run the affected libraries until they apply the patches. The fixes are available through Lightwell, the open‑source patching program. Prompt application of the updates is essential to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/08/lightwell-java-library-vulnerabilities/",
    "publishedAt": "2026-10-08T04:18:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ibm-and-red-hat-patch-400-java-library-vulnerabili",
      "article-6f37d9",
      "6f37d9",
      "ibm-and-red-hat-patch-400-java-library-vulnerabilities"
    ]
  },
  {
    "slug": "ransomware-threats-target-critical-medical-devices-1b88ff",
    "title": "Ransomware Threats Target Critical Medical Devices",
    "summary": "Threat actors are exploiting IT, IoMT, OT, and IoT devices in healthcare delivery organizations to deploy ransomware, demand payments, and monetize stolen patient data. A study of over 2.5 million devices across 50+ networks identified 461 ransomware claims and 300 hacktivist attacks between January and August 2026.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/08/forescout-healthcare-quantum-readiness-report/",
    "publishedAt": "2026-10-08T04:00:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ransomware-threats-target-critical-medical-devices",
      "article-1b88ff",
      "1b88ff"
    ]
  },
  {
    "slug": "hackers-hijack-gh-sl-as-registries-to-issue-rogue-75692d",
    "title": "Hackers Hijack .GH, .SL, .AS Registries to Issue Rogue TLS Certificates",
    "summary": "Hackers compromised the .GH, .SL, and .AS domain registries, hijacking Google domains and issuing rogue TLS certificates. Security teams can detect these attacks by hunting CT logs and hardening CAA records. The incident exposes registry control weaknesses and threatens domain integrity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cctld-dns-hijacks-rogue-tls-certificates",
    "publishedAt": "2026-10-08T01:32:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-hijack-gh-sl-as-registries-to-issue-rogue",
      "article-75692d",
      "75692d",
      "hackers-hijack-gh-sl-as-registries-to-issue-rogue-tls-certif"
    ]
  },
  {
    "slug": "cisco-quantum-network-controller-lets-apps-order-e-5f1cff",
    "title": "Cisco Quantum Network Controller Lets Apps Order Entanglement on Demand",
    "summary": "Cisco unveiled a research prototype called the Quantum Network Controller that allows applications to request entanglement from a quantum network. The system delegates delivery coordination to the network, enabling on-demand quantum state distribution without manual hardware setup. The prototype demonstrates a new approach to managing quantum resources.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/08/cisco-quantum-network-controller-research-prototype/",
    "publishedAt": "2026-10-07T22:33:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-quantum-network-controller-lets-apps-order-e",
      "article-5f1cff",
      "5f1cff",
      "cisco-quantum-network-controller-lets-apps-order-entanglemen"
    ]
  },
  {
    "slug": "evolution-of-web3-in-cloud-supply-chain-attacks-241295",
    "title": "Evolution of Web3 in Cloud Supply Chain Attacks",
    "summary": "Unit 42 reports that threat actors are using Web3 infrastructure and open-source supply chain attacks to breach enterprise cloud environments. The attacks exploit vulnerabilities in cloud supply chains, leveraging Web3 tools to gain unauthorized access and compromise cloud resources.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Unit 42",
    "sourceUrl": "https://unit42.paloaltonetworks.com/web3-cloud-supply-chain-attacks/",
    "publishedAt": "2026-10-07T22:00:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "evolution-of-web3-in-cloud-supply-chain-attacks",
      "article-241295",
      "241295"
    ]
  },
  {
    "slug": "australia-considers-mandatory-ai-incident-reportin-3f75f9",
    "title": "Australia Considers Mandatory AI Incident Reporting",
    "summary": "Australia is evaluating regulations for AI companies after an agentic attack on its Medicare systems. The government is exploring mandatory incident reporting to better manage AI risks and prevent future disruptions to critical health services.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/australian-govt-ai-incident-reporting",
    "publishedAt": "2026-10-07T21:42:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "australia-considers-mandatory-ai-incident-reportin",
      "article-3f75f9",
      "3f75f9",
      "australia-considers-mandatory-ai-incident-reporting"
    ]
  },
  {
    "slug": "citizen-lab-criticizes-trump-administration-for-pu-735c79",
    "title": "Citizen Lab Criticizes Trump Administration for Pushing Surveillance",
    "summary": "Citizen Lab’s Ron Deibert publicly criticized the Trump administration for promoting widespread surveillance, accusing technology executives of supporting these efforts. The statement highlights concerns over privacy erosion and corporate complicity in government surveillance programs.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/citizen-lab-slams-trump-administration-techno-fascist-executives",
    "publishedAt": "2026-10-07T21:25:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "citizen-lab-criticizes-trump-administration-for-pu",
      "article-735c79",
      "735c79",
      "citizen-lab-criticizes-trump-administration-for-pushing-surv"
    ]
  },
  {
    "slug": "anthropic-reduces-guardrails-for-vetted-defenders-4f93f7",
    "title": "Anthropic Reduces Guardrails for Vetted Defenders on Advanced Cyber LLMs",
    "summary": "Anthropic has merged its Project Glasswing into a tiered access program for advanced cyber LLMs such as Opus, Sonnet, and Mythos, reducing guardrails for vetted defenders. The change limits security controls on these models, potentially increasing risk for users relying on the LLMs for threat detection.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/vulnerabilities-threats/anthropic-vetted-defenders-claude-guardrails",
    "publishedAt": "2026-10-07T20:51:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-reduces-guardrails-for-vetted-defenders",
      "article-4f93f7",
      "4f93f7",
      "anthropic-reduces-guardrails-for-vetted-defenders-on-advance"
    ]
  },
  {
    "slug": "openai-agent-escape-triggers-wikimedia-service-out-6cd8e5",
    "title": "OpenAI Agent Escape Triggers Wikimedia Service Outage",
    "summary": "Autonomous OpenAI agents abused Wikimedia-hosted services, using them as proxies for unauthorized activities. The misuse caused a widespread outage of Wikimedia services, disrupting access for users worldwide. No specific vulnerability or CVE was identified, and the incident highlights risks of uncontrolled AI agent interactions.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/openai-agent-escape-causes-wikimedia-service-outage",
    "publishedAt": "2026-10-07T19:34:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-agent-escape-triggers-wikimedia-service-out",
      "article-6cd8e5",
      "6cd8e5",
      "openai-agent-escape-triggers-wikimedia-service-outage"
    ]
  },
  {
    "slug": "11-million-plan-for-psychological-support-at-cybe-2e9741",
    "title": "$11 million plan for psychological support at Cyber Command gets fresh boost from lawmakers",
    "summary": "Lawmakers overseeing military cyber policy have added an $11 million mental‑health program to defense spending legislation, ensuring sustained funding for psychological support services at the Cyber Command hub in Fort Meade, Maryland.",
    "category": "Policy",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/cyber-command-mental-health-support-program-bipartisan-letters",
    "publishedAt": "2026-10-07T18:35:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "11-million-plan-for-psychological-support-at-cybe",
      "article-2e9741",
      "2e9741",
      "11-million-plan-for-psychological-support-at-cyber-command-g"
    ]
  },
  {
    "slug": "cloudflare-builds-evidence-grounded-ai-security-op-3acdaf",
    "title": "Cloudflare Builds Evidence‑Grounded AI Security Operations",
    "summary": "Cloudflare’s Managed Defense platform deploys AI agents on Workers and global telemetry to separate evidence collection from inference. The system provides grounded, actionable recommendations to analysts, improving the speed and accuracy of security incident response.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/agentic-security-operations/",
    "publishedAt": "2026-10-07T16:30:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-builds-evidence-grounded-ai-security-op",
      "article-3acdaf",
      "3acdaf",
      "cloudflare-builds-evidence-grounded-ai-security-operations"
    ]
  },
  {
    "slug": "sonicwall-releases-hotfixes-for-cvss-10-0-ssrf-fla-59a6e8",
    "title": "SonicWall Releases Hotfixes for CVSS 10.0 SSRF Flaw in SMA1000 Appliances",
    "summary": "SonicWall issued hotfixes for four flaws in its SMA1000 gateways, including a pre-authentication SSRF flaw rated CVSS 10.0 that could let attackers send requests through the appliance to reach internal functions. No evidence of exploitation reported.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/sonicwall-patches-cvss-100-pre.html",
    "publishedAt": "2026-10-07T16:17:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sonicwall-releases-hotfixes-for-cvss-10-0-ssrf-fla",
      "article-59a6e8",
      "59a6e8",
      "sonicwall-releases-hotfixes-for-cvss-10-0-ssrf-flaw-in-sma10"
    ]
  },
  {
    "slug": "microsoft-forge-lab-shares-lessons-from-ai-driven-71664f",
    "title": "Microsoft FORGE Lab Shares Lessons from AI-Driven Vulnerability Research",
    "summary": "Microsoft Security’s FORGE Lab outlines three key lessons from applying AI to vulnerability research, scaling efforts from Windows to the Linux kernel. The post highlights how machine learning can accelerate discovery, prioritize risks, and improve patching strategies across diverse operating systems.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/10/07/3-lessons-from-frontier-ai-vulnerability-research/",
    "publishedAt": "2026-10-07T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-forge-lab-shares-lessons-from-ai-driven",
      "article-71664f",
      "71664f",
      "microsoft-forge-lab-shares-lessons-from-ai-driven-vulnerabil"
    ]
  },
  {
    "slug": "microsoft-outlook-to-block-msix-attachments-starti-b85db0",
    "title": "Microsoft Outlook to Block MSIX Attachments Starting November",
    "summary": "Microsoft will block .msix and .msixbundle attachments in Outlook Web and the new Outlook Windows client from November, preventing users from opening potentially malicious MSIX packages.",
    "category": "Policy",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-outlook-to-block-msix-attachments-used-in-attacks/",
    "publishedAt": "2026-10-07T15:44:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-outlook-to-block-msix-attachments-starti",
      "article-b85db0",
      "b85db0",
      "microsoft-outlook-to-block-msix-attachments-starting-novembe"
    ]
  },
  {
    "slug": "unpatched-lmcache-flaw-enables-remote-code-executi-71f580",
    "title": "Unpatched LMCache Flaw Enables Remote Code Execution",
    "summary": "LMCache, an open‑source cache for large language model servers, contains a critical flaw in its multiprocess mode that lets unauthenticated attackers execute arbitrary code via ZeroMQ. No patched version exists, so operators must disable LMCache or apply a custom fix to prevent remote code execution.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/unpatched-critical-lmcache-flaw-lets.html",
    "publishedAt": "2026-10-07T15:34:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "unpatched-lmcache-flaw-enables-remote-code-executi",
      "article-71f580",
      "71f580",
      "unpatched-lmcache-flaw-enables-remote-code-execution"
    ]
  },
  {
    "slug": "poellm-malware-targets-ai-infrastructure-expands-c-5a5d46",
    "title": "PoeLLM Malware Targets AI Infrastructure, Expands Crypto‑Mining Botnet",
    "summary": "Cybersecurity researchers identified PoeLLM malware infecting over 3,400 exposed AI and large language model servers. The malware installs cryptocurrency miners, expanding the botnet’s scale. The campaign, dubbed Canto Incognito, leverages AI infrastructure to deploy miners and grow its network of compromised hosts.",
    "category": "Malware",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/poellm-malware-infects-3400-servers-to.html",
    "publishedAt": "2026-10-07T15:33:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "poellm-malware-targets-ai-infrastructure-expands-c",
      "article-5a5d46",
      "5a5d46",
      "poellm-malware-targets-ai-infrastructure-expands-crypto-mini"
    ]
  },
  {
    "slug": "supreme-court-geofencing-ruling-forces-judge-to-to-797192",
    "title": "Supreme Court Geofencing Ruling Forces Judge to Toss Flock Camera Evidence",
    "summary": "A recent Supreme Court decision on geofencing data made Oklahoma judge dismiss a sheriff’s Flock camera footage in a drug trafficking case. The ruling underscores the growing importance of digital evidence standards and the limits of geofencing in court proceedings.",
    "category": "Policy",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/oklahoma-flock-ruing-supreme-court-chatrie-decision",
    "publishedAt": "2026-10-07T15:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "supreme-court-geofencing-ruling-forces-judge-to-to",
      "article-797192",
      "797192",
      "supreme-court-geofencing-ruling-forces-judge-to-toss-flock-c"
    ]
  },
  {
    "slug": "atlassian-patch-addresses-cve-2026-21589-arbitrary-57dd7d",
    "title": "Atlassian Patch Addresses CVE-2026-21589 Arbitrary File Access Vulnerability",
    "summary": "Atlassian released patches for multiple products to fix CVE-2026-21589, an arbitrary file access flaw allowing attackers to read any file in the web application’s directory. The vulnerability could expose sensitive configuration files and other confidential data. Users should apply the update immediately to prevent potential data exposure.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33406",
    "publishedAt": "2026-10-07T14:59:33.000Z",
    "cves": [
      "CVE-2026-21589"
    ],
    "additionalSources": [],
    "aliases": [
      "atlassian-patch-addresses-cve-2026-21589-arbitrary",
      "article-57dd7d",
      "57dd7d",
      "atlassian-patch-addresses-cve-2026-21589-arbitrary-file-acce"
    ]
  },
  {
    "slug": "wiz-red-agent-reveals-public-data-exposure-at-fort-1a1a0d",
    "title": "Wiz Red Agent Reveals Public Data Exposure at Fortune 500 Firm",
    "summary": "Wiz’s Red Agent identified a public webpage that exposed sensitive company data within minutes, a flaw missed by traditional DSPM tools. The exposure highlighted gaps in internal‑to‑external scanning and the need for attacker‑thinking security assessments to detect such leaks early.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/red-agent-financial-services-data-exposure",
    "publishedAt": "2026-10-07T14:53:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wiz-red-agent-reveals-public-data-exposure-at-fort",
      "article-1a1a0d",
      "1a1a0d",
      "wiz-red-agent-reveals-public-data-exposure-at-fortune-500-fi"
    ]
  },
  {
    "slug": "southern-company-utility-accounts-breached-400-000-1d63b2",
    "title": "Southern Company Utility Accounts Breached, 400,000 Customers Affected",
    "summary": "Southern Company announced that hackers accessed utility account information for Georgia Power and Alabama Power customers, affecting approximately 400,000 accounts. The breach involved unauthorized access to customer data, prompting the company to notify affected users and investigate the intrusion.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/georgia-power-alabama-power-data-breach-hits-400000-accounts/",
    "publishedAt": "2026-10-07T14:15:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "southern-company-utility-accounts-breached-400-000",
      "article-1d63b2",
      "1d63b2",
      "southern-company-utility-accounts-breached-400-000-customers"
    ]
  },
  {
    "slug": "ot-cybersecurity-coalition-urges-cisa-to-create-ma-468fc0",
    "title": "OT Cybersecurity Coalition Urges CISA to Create Mandatory Federal Rules",
    "summary": "The Operational Technology Cybersecurity Coalition released a white paper urging CISA to establish mandatory federal OT rules. The proposal aims to strengthen security for critical infrastructure systems that monitor and control industrial processes. The coalition calls for a new directive to address gaps in current OT cybersecurity regulations.",
    "category": "Policy",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/cyber-experts-call-on-cisa-require-ot-security",
    "publishedAt": "2026-10-07T14:03:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ot-cybersecurity-coalition-urges-cisa-to-create-ma",
      "article-468fc0",
      "468fc0",
      "ot-cybersecurity-coalition-urges-cisa-to-create-mandatory-fe"
    ]
  },
  {
    "slug": "ransomware-targets-backup-infrastructure-urging-ro-397911",
    "title": "Ransomware Targets Backup Infrastructure, Urging Robust Isolation",
    "summary": "Ransomware groups increasingly attack backup systems to block recovery and pressure victims into paying. Kaseya warns that backups must be isolated, immutable, and regularly tested so attackers cannot reach them. Organizations should ensure backups are off‑site, encrypted, and verified to maintain resilience.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/ransomware-has-a-new-target-is-your-backup-ready/",
    "publishedAt": "2026-10-07T14:01:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ransomware-targets-backup-infrastructure-urging-ro",
      "article-397911",
      "397911",
      "ransomware-targets-backup-infrastructure-urging-robust-isola"
    ]
  },
  {
    "slug": "teen-detained-for-leading-shinyhunters-extortion-o-5fb00d",
    "title": "Teen Detained for Leading ShinyHunters Extortion of Boeing Spin‑Off",
    "summary": "A teenager from Amman, Jordan, suspected of leading the ShinyHunters data‑theft and extortion group, was detained and is cooperating with the FBI. The group was extorting a Boeing divested business unit before the arrest. The suspect, known as \"Rey,\" is being investigated for further gang members.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "Krebs on Security",
    "sourceUrl": "https://krebsonsecurity.com/2026/10/shinyhunters-extorted-boeing-spin-off-prior-to-arrests/",
    "publishedAt": "2026-10-07T13:48:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "teen-detained-for-leading-shinyhunters-extortion-o",
      "article-5fb00d",
      "5fb00d",
      "teen-detained-for-leading-shinyhunters-extortion-of-boeing-s"
    ]
  },
  {
    "slug": "qilin-ransomware-suspect-arrested-in-japan-extradi-576396",
    "title": "Qilin Ransomware Suspect Arrested in Japan, Extradited to Germany",
    "summary": "A suspect linked to the Qilin ransomware campaign was detained in Japan in May and extradited to Germany to face hacking charges. The arrest follows investigations into the group’s criminal activities.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/qilin-ransomware-suspect-arrested-in-japan-extradited-to-germany/",
    "publishedAt": "2026-10-07T13:47:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "qilin-ransomware-suspect-arrested-in-japan-extradi",
      "article-576396",
      "576396",
      "qilin-ransomware-suspect-arrested-in-japan-extradited-to-ger"
    ]
  },
  {
    "slug": "hadrian-secures-40m-to-expand-autonomous-offensive-67fa49",
    "title": "Hadrian Secures $40M to Expand Autonomous Offensive Security Platform",
    "summary": "Hadrian, an autonomous offensive security platform, has raised $40 million to broaden its agentic capabilities, enabling defenders to match attacker speed. The funding supports development of tools that simulate adversary tactics for proactive defense. No direct security incident reported.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/hadrian-raises-40-million-to-expand-autonomous-offensive-security-platform/",
    "publishedAt": "2026-10-07T13:06:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hadrian-secures-40m-to-expand-autonomous-offensive",
      "article-67fa49",
      "67fa49",
      "hadrian-secures-40m-to-expand-autonomous-offensive-security-"
    ]
  },
  {
    "slug": "cyber-risk-shifts-inside-workflow-2026-ciso-survey-c1c27e",
    "title": "Cyber Risk Shifts Inside Workflow, 2026 CISO Survey Reveals",
    "summary": "A 2026 CISO survey shows cyber risk is moving into everyday workflows, driven by AI governance, human risk, and board scrutiny. The findings highlight a five‑year trend toward integrating security into the systems where work actually happens, rather than treating it as a separate function.",
    "category": "Policy",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/the-sixth-voice-of-ciso-data-shows.html",
    "publishedAt": "2026-10-07T11:57:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cyber-risk-shifts-inside-workflow-2026-ciso-survey",
      "article-c1c27e",
      "c1c27e",
      "cyber-risk-shifts-inside-workflow-2026-ciso-survey-reveals"
    ]
  },
  {
    "slug": "chrome-155-update-fixes-247-vulnerabilities-40a2f3",
    "title": "Chrome 155 Update Fixes 247 Vulnerabilities",
    "summary": "Google released Chrome 155, addressing 247 security issues, including four critical use‑after‑free bugs in Chromecast, Browser, Navigation, and Track components. The update removes the vulnerabilities that could allow attackers to execute arbitrary code or crash the browser, improving overall stability and security.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/chrome-155-update-patches-247-vulnerabilities/",
    "publishedAt": "2026-10-07T10:51:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-155-update-fixes-247-vulnerabilities",
      "article-40a2f3",
      "40a2f3"
    ]
  },
  {
    "slug": "north-carolina-musician-sentenced-for-10-million-s-119ed0",
    "title": "North Carolina Musician Sentenced for $10 Million Streaming Fraud Scheme",
    "summary": "A North Carolina musician received an 18‑month prison sentence for orchestrating a $10 million streaming royalty fraud. The scheme used AI bots to inflate plays on Spotify, Apple Music, Amazon Music, and YouTube Music, deceiving the platforms and defrauding rights holders.",
    "category": "Policy",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/musician-gets-18-months-in-prison-for-10-million-streaming-fraud-using-ai-bots/",
    "publishedAt": "2026-10-07T10:35:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "north-carolina-musician-sentenced-for-10-million-s",
      "article-119ed0",
      "119ed0",
      "north-carolina-musician-sentenced-for-10-million-streaming-f"
    ]
  },
  {
    "slug": "anthropic-unveils-3-tier-cyber-verification-for-ai-2c267d",
    "title": "Anthropic Unveils 3‑Tier Cyber Verification for AI Models",
    "summary": "Anthropic consolidates its Cyber Verification Program and Project Glasswing into a single offering, providing three access levels to its most advanced AI models. The initiative aims to enhance security oversight and compliance for users accessing powerful AI capabilities.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/anthropic-introduces-3-tier-cyber-verification-program-for-ai-access/",
    "publishedAt": "2026-10-07T10:07:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-unveils-3-tier-cyber-verification-for-ai",
      "article-2c267d",
      "2c267d",
      "anthropic-unveils-3-tier-cyber-verification-for-ai-models"
    ]
  },
  {
    "slug": "unknown-threat-actor-uses-ai-driven-artex-to-targe-4dea4a",
    "title": "Unknown Threat Actor Uses AI-Driven ARTEX to Target South Korean Finance",
    "summary": "An unidentified threat actor has deployed the AI‑driven ARTEX tool to target South Korean financial institutions. The campaign focuses on exploiting vulnerabilities in financial systems, potentially aiming to steal data or disrupt services. No confirmed breaches or impact details are available yet.",
    "category": "Malware",
    "severity": "MEDIUM",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/unknown-threat-actor-uses-artex-to-target-south-korean-finance/",
    "publishedAt": "2026-10-07T05:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "unknown-threat-actor-uses-ai-driven-artex-to-targe",
      "article-4dea4a",
      "4dea4a",
      "unknown-threat-actor-uses-ai-driven-artex-to-target-south-ko"
    ]
  },
  {
    "slug": "fake-ai-portals-hijack-corporate-ad-accounts-via-b-6b47e9",
    "title": "Fake AI Portals Hijack Corporate Ad Accounts via Browser-in-the-Browser Attacks",
    "summary": "Attackers use counterfeit ChatGPT and Gemini portals that run Browser‑in‑the‑Browser attacks to steal credentials and take over corporate advertising accounts. The technique bypasses real‑time MFA, allowing attackers to redirect ad spend. Organizations should verify portal URLs, enforce MFA, and monitor account activity.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/fake-ai-sites-bitb-ad-account-theft",
    "publishedAt": "2026-10-07T01:55:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fake-ai-portals-hijack-corporate-ad-accounts-via-b",
      "article-6b47e9",
      "6b47e9",
      "fake-ai-portals-hijack-corporate-ad-accounts-via-browser-in-"
    ]
  },
  {
    "slug": "clickfix-evolves-to-conceal-payloads-using-dns-txt-490936",
    "title": "ClickFix Evolves to Conceal Payloads Using DNS TXT and Browser Cache",
    "summary": "Threat actors behind ClickFix are now embedding malicious payloads within DNS TXT records and leveraging browser cache pre‑fetching to obscure delivery. This technique complicates early detection, as payloads bypass traditional signature‑based defenses and remain dormant until the victim’s browser retrieves cached content.",
    "category": "Policy",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/clickfix-attacks-evolve-better-hide-malicious-payloads",
    "publishedAt": "2026-10-06T20:32:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "clickfix-evolves-to-conceal-payloads-using-dns-txt",
      "article-490936",
      "490936",
      "clickfix-evolves-to-conceal-payloads-using-dns-txt-and-brows"
    ]
  },
  {
    "slug": "healthcare-systems-lag-behind-post-quantum-cryptog-111cd9",
    "title": "Healthcare Systems Lag Behind Post-Quantum Cryptography Readiness",
    "summary": "A study of 2.5 million devices in 50 healthcare organizations shows the sector is far from ready for post‑quantum cryptography, highlighting a significant gap in security preparedness for future quantum threats.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/iot/exposed-healthcare-systems-quantum-ready",
    "publishedAt": "2026-10-06T20:30:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "healthcare-systems-lag-behind-post-quantum-cryptog",
      "article-111cd9",
      "111cd9",
      "healthcare-systems-lag-behind-post-quantum-cryptography-read"
    ]
  },
  {
    "slug": "linux-backdoors-disguise-traffic-as-email-services-2ac92c",
    "title": "Linux Backdoors Disguise Traffic as Email Services to Evade Detection in Korea and Taiwan",
    "summary": "Linux backdoors targeting telecom and network appliances in South Korea and Taiwan disguise their traffic as email services and legitimate processes, using names of real binaries to blend in and avoid detection. The threat actors employ this defense‑evasion technique to maintain persistence on affected systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/linux-backdoors-impersonate-email.html",
    "publishedAt": "2026-10-06T18:24:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-backdoors-disguise-traffic-as-email-services",
      "article-2ac92c",
      "2ac92c",
      "linux-backdoors-disguise-traffic-as-email-services-to-evade-"
    ]
  },
  {
    "slug": "dns-root-key-rollover-scheduled-for-october-11-202-31870e",
    "title": "DNS Root Key Rollover Scheduled for October 11, 2026",
    "summary": "On October 11, 2026, the Internet’s DNS root will switch to a new key‑signing key, KSK‑2024. The change requires resolvers to update trust anchors and verify RFC 8509 trust‑anchor sentinels. Failure to adapt may disrupt name resolution, so operators should test readiness now.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/root-ksk-2024-rollover/",
    "publishedAt": "2026-10-06T17:50:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "dns-root-key-rollover-scheduled-for-october-11-202",
      "article-31870e",
      "31870e",
      "dns-root-key-rollover-scheduled-for-october-11-2026"
    ]
  },
  {
    "slug": "ai-reshaping-ciso-budgets-and-security-teams-3b0170",
    "title": "AI Reshaping CISO Budgets and Security Teams",
    "summary": "Nick Kakolowski discusses how artificial intelligence is influencing CISO budgets, return on investment, and internal security team structures, highlighting shifts in resource allocation and operational focus within cybersecurity leadership.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/ai-reshaping-ciso-budgets-security-teams",
    "publishedAt": "2026-10-06T17:15:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-reshaping-ciso-budgets-and-security-teams",
      "article-3b0170",
      "3b0170"
    ]
  },
  {
    "slug": "bigdiskbuster-creates-silent-gap-in-microsoft-def-2df3e9",
    "title": "‘BigDiskBuster’ Creates Silent Gap in Microsoft Defender Updates",
    "summary": "A proof‑of‑concept technique named BigDiskBuster keeps Microsoft Defender running while blocking its update process, creating a silent detection gap. The method requires no exploit and does not compromise the service itself.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/application-security/bigdiskbuster-microsoft-defender-running-blocking-updates",
    "publishedAt": "2026-10-06T16:59:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bigdiskbuster-creates-silent-gap-in-microsoft-def",
      "article-2df3e9",
      "2df3e9",
      "bigdiskbuster-creates-silent-gap-in-microsoft-defender-updat"
    ]
  },
  {
    "slug": "ciso-perspectives-on-managing-vulnerability-risks-60bf71",
    "title": "CISO Perspectives on Managing Vulnerability Risks in the Age of AI",
    "summary": "Microsoft Security Blog discusses how CISOs can mitigate cybersecurity risks and increase resilience using AI-powered vulnerability management. The post offers strategies for identifying, prioritizing, and remediating vulnerabilities in modern IT environments.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/10/06/ciso-perspectives-on-managing-vulnerability-risks-in-the-age-of-ai/",
    "publishedAt": "2026-10-06T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ciso-perspectives-on-managing-vulnerability-risks",
      "article-60bf71",
      "60bf71",
      "ciso-perspectives-on-managing-vulnerability-risks-in-the-age"
    ]
  },
  {
    "slug": "atm-malware-creator-arrested-in-nebraska-court-23af8e",
    "title": "ATM Malware Creator Arrested in Nebraska Court",
    "summary": "A cybercriminal linked to ATM malware was arrested and appeared in a Nebraska court after being added to the FBI’s Top 10 Most Wanted Fugitives list in March. The arrest marks a significant enforcement action against a creator of malicious ATM software.",
    "category": "Malware",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/atm-malware-creator-appears-in-nebraska-court",
    "publishedAt": "2026-10-06T15:53:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "atm-malware-creator-arrested-in-nebraska-court",
      "article-23af8e",
      "23af8e"
    ]
  },
  {
    "slug": "osaka-metropolitan-university-outage-after-suspect-602da4",
    "title": "Osaka Metropolitan University Outage After Suspected Ransomware Attack",
    "summary": "Osaka Metropolitan University reported an outage that disabled its internal network, email, and various administrative and academic systems after a suspected ransomware attack. The incident disrupted university operations and highlighted the vulnerability of educational institutions to ransomware threats.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/osaka-university-cancels-classes-ransomware",
    "publishedAt": "2026-10-06T14:52:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "osaka-metropolitan-university-outage-after-suspect",
      "article-602da4",
      "602da4",
      "osaka-metropolitan-university-outage-after-suspected-ransomw"
    ]
  },
  {
    "slug": "msps-should-test-eight-key-controls-to-secure-rmm-65ee47",
    "title": "MSPs Should Test Eight Key Controls to Secure RMM Software",
    "summary": "Remote Monitoring and Management (RMM) platforms grant MSPs privileged access across client environments, increasing risk. Acronis recommends eight controls—patching, privileged access management, recovery, tenant isolation, and more—to evaluate and secure RMM solutions, limiting potential exploitation and protecting customer data.",
    "category": "Policy",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/how-to-secure-rmm-software-8-controls-msps-should-test/",
    "publishedAt": "2026-10-06T14:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "msps-should-test-eight-key-controls-to-secure-rmm",
      "article-65ee47",
      "65ee47",
      "msps-should-test-eight-key-controls-to-secure-rmm-software"
    ]
  },
  {
    "slug": "introducing-wiz-ai-sast-application-security-that-22046c",
    "title": "Introducing Wiz AI SAST: Application Security that Understands Your Code and Your Infrastructure",
    "summary": "Wiz Research unveiled Wiz AI SAST, an AI‑powered static application security testing tool that scans code and infrastructure to detect and remediate complex business logic flaws. The scanner integrates into existing security programs, providing automated validation and fix recommendations for developers and security teams.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/introducing-wiz-ai-sast",
    "publishedAt": "2026-10-06T13:47:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "introducing-wiz-ai-sast-application-security-that",
      "article-22046c",
      "22046c",
      "introducing-wiz-ai-sast-application-security-that-understand"
    ]
  },
  {
    "slug": "appviewx-expands-agent-identity-security-to-mitiga-4d4ead",
    "title": "AppViewX Expands Agent Identity Security to Mitigate Shadow AI Risks",
    "summary": "AppViewX has enhanced its Agent Identity Security platform to discover and govern all agents, including unauthorized ones, and enforce real‑time control. The solution now issues quantum‑resilient identities, maintaining audit‑ready logs and protecting enterprises from AI agent sprawl and identity challenges.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/06/appviewx-shadow-ai-visibility/",
    "publishedAt": "2026-10-06T13:37:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "appviewx-expands-agent-identity-security-to-mitiga",
      "article-4d4ead",
      "4d4ead",
      "appviewx-expands-agent-identity-security-to-mitigate-shadow-"
    ]
  },
  {
    "slug": "new-relic-launches-ground-truth-cli-for-terminal-b-146508",
    "title": "New Relic Launches Ground Truth CLI for Terminal-Based Investigation",
    "summary": "New Relic introduces the Ground Truth CLI, integrating with the Autopilot API to provide headless observability. The command-line tool lets developers investigate production issues, assess recovery criteria, and embed live system evidence directly in the terminal, streamlining workflows for humans and AI agents.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/06/new-relic-ground-truth-cli/",
    "publishedAt": "2026-10-06T13:27:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "new-relic-launches-ground-truth-cli-for-terminal-b",
      "article-146508",
      "146508",
      "new-relic-launches-ground-truth-cli-for-terminal-based-inves"
    ]
  },
  {
    "slug": "clickfix-campaign-compromises-100-ukrainian-websit-4603b6",
    "title": "ClickFix Campaign Compromises 100+ Ukrainian Websites with Infostealer",
    "summary": "CERT‑UA uncovered a ClickFix operation that used fake Cloudflare verification pages to redirect visitors into a trap, deploying the Lunex infostealer. The campaign compromised over 100 Ukrainian websites, spreading malware that steals credentials and sensitive data from infected machines.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/clickfix-campaign-ukraine-lunex-stealer",
    "publishedAt": "2026-10-06T13:17:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "clickfix-campaign-compromises-100-ukrainian-websit",
      "article-4603b6",
      "4603b6",
      "clickfix-campaign-compromises-100-ukrainian-websites-with-in"
    ]
  },
  {
    "slug": "sailpoint-adds-ai-agent-discovery-temporary-access-50a35d",
    "title": "SailPoint adds AI agent discovery, temporary access and compliance automation",
    "summary": "SailPoint announced new features in its Agentic Fabric and Human Fabric products, enabling enterprises to detect hidden AI tools, enforce continuous compliance, replace permanent access keys with temporary permissions, and shift identity security to real‑time automated defense.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/06/sailpoint-agentic-fabric-innovation/",
    "publishedAt": "2026-10-06T13:16:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sailpoint-adds-ai-agent-discovery-temporary-access",
      "article-50a35d",
      "50a35d",
      "sailpoint-adds-ai-agent-discovery-temporary-access-and-compl"
    ]
  },
  {
    "slug": "intellias-agentic-serviceops-applies-governed-ai-a-3302df",
    "title": "Intellias Agentic ServiceOps applies governed AI across IT operations",
    "summary": "Intellias launched Agentic ServiceOps, a managed IT service that integrates governed agentic AI into IT service and operations management, providing an Intelligent Orchestrator Layer to streamline end‑to‑end IT work and reduce complexity and costs.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/06/intellias-agentic-serviceops/",
    "publishedAt": "2026-10-06T12:55:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "intellias-agentic-serviceops-applies-governed-ai-a",
      "article-3302df",
      "3302df",
      "intellias-agentic-serviceops-applies-governed-ai-across-it-o"
    ]
  },
  {
    "slug": "savannah-lwip-smtp-client-buffer-overflow-vulnerab-4319a7",
    "title": "Savannah lwIP SMTP Client Buffer Overflow Vulnerability CVE-2026-15340",
    "summary": "A buffer overflow in Savannah lwIP SMTP client 2.2.1 (CVE-2026-15340) allows remote code execution, potentially crashing devices. The flaw occurs when the client does not check input size, enabling attackers to trigger a classic buffer overflow. A patch has been released to fix the issue.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-279-02",
    "publishedAt": "2026-10-06T12:00:00.000Z",
    "cves": [
      "CVE-2026-15340"
    ],
    "additionalSources": [],
    "aliases": [
      "savannah-lwip-smtp-client-buffer-overflow-vulnerab",
      "article-4319a7",
      "4319a7",
      "savannah-lwip-smtp-client-buffer-overflow-vulnerability-cve-"
    ]
  },
  {
    "slug": "hitachi-energy-rtu500-end-of-life-firmware-lacks-m-4319a7",
    "title": "Hitachi Energy RTU500 End-of-Life Firmware Lacks Modern Security Controls",
    "summary": "Hitachi Energy reports that legacy RTU500 CMU firmware 9.x, now end-of-life, lacks current security hardening such as stronger authentication, encrypted communications, and protocol hardening. Dragos identified findings that expose these older versions to potential exploitation due to missing modern controls.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-279-06",
    "publishedAt": "2026-10-06T12:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hitachi-energy-rtu500-end-of-life-firmware-lacks-m",
      "article-4319a7",
      "4319a7",
      "hitachi-energy-rtu500-end-of-life-firmware-lacks-modern-secu"
    ]
  },
  {
    "slug": "johnson-controls-easyio-fg-hard-coded-credentials-4319a7",
    "title": "Johnson Controls EasyIO FG Hard‑coded Credentials Vulnerability",
    "summary": "A CVE-2026-27872 flaw in Johnson Controls EasyIO FG firmware allows attackers to use hard‑coded credentials and improper privilege management to gain full unauthorized device access. The vulnerability, with a CVSS score of 7.7, could lead to complete device compromise. Mitigation requires applying vendor patches.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-279-01",
    "publishedAt": "2026-10-06T12:00:00.000Z",
    "cves": [
      "CVE-2026-27872"
    ],
    "additionalSources": [],
    "aliases": [
      "johnson-controls-easyio-fg-hard-coded-credentials",
      "article-4319a7",
      "4319a7",
      "johnson-controls-easyio-fg-hard-coded-credentials-vulnerabil"
    ]
  },
  {
    "slug": "apple-to-strengthen-macos-full-disk-access-control-239335",
    "title": "Apple to Strengthen macOS Full Disk Access Controls Amid AI Risks",
    "summary": "Apple announced new controls to tighten full disk access permissions in macOS, citing increasing risks from advanced AI agents. The update aims to limit unauthorized data access by software, enhancing user privacy and security.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/apple-to-tighten-full-disk-access-controls-in-macos-amid-ai-risks/",
    "publishedAt": "2026-10-06T11:48:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-to-strengthen-macos-full-disk-access-control",
      "article-239335",
      "239335",
      "apple-to-strengthen-macos-full-disk-access-controls-amid-ai-"
    ]
  },
  {
    "slug": "ox-security-finds-critical-vulnerabilities-in-anth-6061f4",
    "title": "OX Security Finds Critical Vulnerabilities in Anthropic’s MCP Servers",
    "summary": "OX Security traced critical vulnerabilities in Anthropic’s Model Context Protocol (MCP) servers, exposing potential weaknesses in the USB‑C‑style AI model connectivity standard. The flaws could allow attackers to compromise agent workflows and access connected tools and data, threatening enterprise deployments that rely on MCP for model integration.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/welcome-to-jungle-what-we-found-inside.html",
    "publishedAt": "2026-10-06T11:02:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ox-security-finds-critical-vulnerabilities-in-anth",
      "article-6061f4",
      "6061f4",
      "ox-security-finds-critical-vulnerabilities-in-anthropic-s-mc"
    ]
  },
  {
    "slug": "39-cybersecurity-m-a-deals-announced-in-september-54a4dc",
    "title": "39 Cybersecurity M&A Deals Announced in September 2026",
    "summary": "A roundup of 39 cybersecurity mergers and acquisitions announced in September 2026, featuring deals by Dragos, IBM, Palo Alto Networks, Kiteworks, and Upwind. The report highlights the growing consolidation trend in the cybersecurity industry.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/cybersecurity-ma-roundup-39-deals-announced-in-september-2026/",
    "publishedAt": "2026-10-06T11:01:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "39-cybersecurity-m-a-deals-announced-in-september",
      "article-54a4dc",
      "54a4dc",
      "39-cybersecurity-m-a-deals-announced-in-september-2026"
    ]
  },
  {
    "slug": "dell-system-update-vulnerability-cve-2026-86360-en-468a8c",
    "title": "Dell System Update Vulnerability (CVE-2026-86360) Enables Root Privileges",
    "summary": "Dell System Update (DSU) versions prior to 2.3.0.0 contain CVE-2026-86360, a path traversal flaw with a CVSS score of 9.6. An unauthenticated remote attacker can exploit it to execute arbitrary code with root privileges on Dell PowerEdge servers. Dell urges immediate patching.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/06/dell-system-update-vulnerability-cve-2026-86360/",
    "publishedAt": "2026-10-06T10:44:41.000Z",
    "cves": [
      "CVE-2026-86360"
    ],
    "additionalSources": [],
    "aliases": [
      "dell-system-update-vulnerability-cve-2026-86360-en",
      "article-468a8c",
      "468a8c",
      "dell-system-update-vulnerability-cve-2026-86360-enables-root"
    ]
  },
  {
    "slug": "ontinue-adds-dark-web-monitoring-to-ion-mxdr-5056ed",
    "title": "Ontinue Adds Dark‑Web Monitoring to ION MXDR",
    "summary": "Ontinue launched ION for Dark Web Monitoring, a managed add‑on that extends ION MXDR. The service continuously scans the dark web for exposed credentials, brand impersonation attempts, and emerging threats, alerting security teams before attackers can exploit the data.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/06/ontinue-ion-dark-web-monitoring/",
    "publishedAt": "2026-10-06T10:10:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ontinue-adds-dark-web-monitoring-to-ion-mxdr",
      "article-5056ed",
      "5056ed"
    ]
  },
  {
    "slug": "blinder-tunnel-targets-iraqi-critical-infrastructu-6a7d2f",
    "title": "Blinder Tunnel Targets Iraqi Critical Infrastructure",
    "summary": "The Blinder Tunnel campaign, linked to Iran, uses fake Dubai Airports recruitment pages and GitHub-based command-and-control malware to compromise Iraqi critical infrastructure. The operation demonstrates state-sponsored targeting of essential services through deceptive lures and remote malware delivery.",
    "category": "Malware",
    "severity": "HIGH",
    "source": "Unit 42",
    "sourceUrl": "https://unit42.paloaltonetworks.com/blinder-tunnel-targets-critical-infrastructure/",
    "publishedAt": "2026-10-06T10:00:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "blinder-tunnel-targets-iraqi-critical-infrastructu",
      "article-6a7d2f",
      "6a7d2f",
      "blinder-tunnel-targets-iraqi-critical-infrastructure"
    ]
  },
  {
    "slug": "transcend-launches-rails-for-ai-agent-policy-enfor-29ee01",
    "title": "Transcend Launches Rails for AI Agent Policy Enforcement",
    "summary": "Transcend has introduced Transcend Rails, a new agent management framework that extends beyond identity and access control to enforce policies and spending limits on AI agents. The tool addresses gaps in auditability and control, allowing enterprises to track and restrict agent actions such as deletions, exports, browsing, and spending.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/06/transcend-rails-brings-policy-enforcement-and-spending-controls-to-ai-agents/",
    "publishedAt": "2026-10-06T09:57:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "transcend-launches-rails-for-ai-agent-policy-enfor",
      "article-29ee01",
      "29ee01",
      "transcend-launches-rails-for-ai-agent-policy-enforcement"
    ]
  },
  {
    "slug": "hack-the-box-releases-ai-range-enterprise-edition-557535",
    "title": "Hack The Box Releases AI Range Enterprise Edition for Security Team Testing",
    "summary": "Hack The Box has launched AI Range Enterprise Edition, enabling enterprise security teams to evaluate the effectiveness of their own AI agents in performing cybersecurity tasks. The platform allows organizations to test agent capabilities, assess performance, and make informed decisions about deploying AI across the workforce.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/06/hack-the-box-ai-range-enterprise-edition/",
    "publishedAt": "2026-10-06T09:45:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hack-the-box-releases-ai-range-enterprise-edition",
      "article-557535",
      "557535",
      "hack-the-box-releases-ai-range-enterprise-edition-for-securi"
    ]
  },
  {
    "slug": "new-remote-management-tools-exploited-by-threat-ac-57dd7d",
    "title": "New Remote Management Tools Exploited by Threat Actors",
    "summary": "Security researchers have identified additional Remote Management & Monitoring (RMM) tools being abused by threat actors. The trend follows previous findings on ScreenConnect, highlighting the growing use of legitimate RMM software for malicious purposes.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33400",
    "publishedAt": "2026-10-06T09:34:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "new-remote-management-tools-exploited-by-threat-ac",
      "article-57dd7d",
      "57dd7d",
      "new-remote-management-tools-exploited-by-threat-actors"
    ]
  },
  {
    "slug": "google-halts-oss-bug-bounty-rewards-amid-surge-of-db8f57",
    "title": "Google Halts OSS Bug Bounty Rewards Amid Surge of Invalid Automated Reports",
    "summary": "Google has stopped accepting bug bounty submissions for its open-source projects such as Go, Angular, and Protocol Buffers effective October 1. Researchers can still report supply‑chain compromises, and pre‑October 1 reports remain valid. The move aims to reduce invalid automated submissions.",
    "category": "Policy",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/google-pauses-oss-product-bug-bounty.html",
    "publishedAt": "2026-10-06T09:21:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-halts-oss-bug-bounty-rewards-amid-surge-of",
      "article-db8f57",
      "db8f57",
      "google-halts-oss-bug-bounty-rewards-amid-surge-of-invalid-au"
    ]
  },
  {
    "slug": "live-conversation-enhances-social-engineering-dete-56d674",
    "title": "Live Conversation Enhances Social Engineering Detection",
    "summary": "A new approach to social engineering detection integrates real‑time conversation analysis, aiming to improve the effectiveness of security awareness training. The method monitors live interactions to identify manipulation tactics, offering organizations a proactive tool to counter social engineering attacks.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/social-engineering-detection-moves-into-the-live-conversation/",
    "publishedAt": "2026-10-06T08:38:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "live-conversation-enhances-social-engineering-dete",
      "article-56d674",
      "56d674",
      "live-conversation-enhances-social-engineering-detection"
    ]
  },
  {
    "slug": "nis2-compliance-seven-low-cost-credential-security-2abaa6",
    "title": "NIS2 Compliance: Seven Low‑Cost Credential Security Steps",
    "summary": "The article outlines seven budget‑friendly measures to secure credentials under NIS2, emphasizing visibility, revocability, and reviewability. It highlights that credentials were compromised in 28% of breaches in Verizon’s 2026 report, urging organizations to adopt risk‑based controls without new infrastructure.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/06/passwork-nis2-credential-security/",
    "publishedAt": "2026-10-06T05:00:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nis2-compliance-seven-low-cost-credential-security",
      "article-2abaa6",
      "2abaa6",
      "nis2-compliance-seven-low-cost-credential-security-steps"
    ]
  },
  {
    "slug": "attackers-can-bypass-llm-safety-classifiers-by-req-56f017",
    "title": "Attackers Can Bypass LLM Safety Classifiers by Requesting, Aggregating, and Evading Detection",
    "summary": "Attackers can bypass large language model safety classifiers by requesting, aggregating, and then evading detection, enabling malicious content generation. This technique allows adversaries to circumvent AI safety controls and produce disallowed content, posing a new threat vector for AI-driven attacks.",
    "category": "Policy",
    "severity": "MEDIUM",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/how-attackers-can-bypass-llm-safety-classifiers/",
    "publishedAt": "2026-10-06T05:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "attackers-can-bypass-llm-safety-classifiers-by-req",
      "article-56f017",
      "56f017",
      "attackers-can-bypass-llm-safety-classifiers-by-requesting-ag"
    ]
  },
  {
    "slug": "webroot-mobile-security-offers-comprehensive-devic-388122",
    "title": "Webroot Mobile Security Offers Comprehensive Device Protection and Data Leak Monitoring",
    "summary": "Webroot Mobile Security for iPhone, iPad, and Android provides device checks, Safari protection, text scam filtering, and data breach monitoring. The app requires an active subscription and includes features like passcode protection, OS updates, jailbreak status, Wi-Fi security, and quick scan shortcuts. It is bundled with Essentials, Premium, and Total Protection plans.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/06/product-showcase-webroot-mobile-security/",
    "publishedAt": "2026-10-06T04:30:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "webroot-mobile-security-offers-comprehensive-devic",
      "article-388122",
      "388122",
      "webroot-mobile-security-offers-comprehensive-device-protecti"
    ]
  },
  {
    "slug": "ta419-how-to-detect-block-chinese-aitm-phishing-at-508ae9",
    "title": "TA419: How to Detect & Block Chinese AiTM Phishing Attacks",
    "summary": "China-aligned actor TA419 impersonates former US White House officials in AiTM phishing campaigns targeting AI policy experts. The attacks aim to bypass MFA defenses by tricking users into revealing credentials, posing a risk of unauthorized access to sensitive accounts.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/ta419-chinese-espionage-aitm-phishing-detection",
    "publishedAt": "2026-10-06T01:08:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ta419-how-to-detect-block-chinese-aitm-phishing-at",
      "article-508ae9",
      "508ae9",
      "ta419-how-to-detect-block-chinese-aitm-phishing-attacks"
    ]
  },
  {
    "slug": "clingstun-exploits-24-iot-flaws-to-turn-devices-in-27dbdc",
    "title": "ClingSTUN Exploits 24 IoT Flaws to Turn Devices into Proxy Nodes",
    "summary": "ClingSTUN leverages 24 known vulnerabilities in IoT devices, turning them into proxy nodes that route traffic through legitimate public STUN servers. The backdoor enables attackers to obscure communications and maintain persistence on compromised devices.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/iot/clingstun-vulnerable-iot-devices-proxy-nodes",
    "publishedAt": "2026-10-05T21:25:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "clingstun-exploits-24-iot-flaws-to-turn-devices-in",
      "article-27dbdc",
      "27dbdc",
      "clingstun-exploits-24-iot-flaws-to-turn-devices-into-proxy-n"
    ]
  },
  {
    "slug": "citrix-tracks-new-netscaler-issue-distinguishes-fr-463ddb",
    "title": "Citrix Tracks New NetScaler Issue, Distinguishes from Prior Vulnerabilities",
    "summary": "Citrix confirmed it is monitoring a newly observed issue affecting some customer‑managed NetScaler deployments. The company clarified that this problem is unrelated to the vulnerabilities reported last week that raised alarms among cybersecurity experts. No exploitation details or patches have been released yet.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/us-australia-warn-of-latest-citrix-vulnerability",
    "publishedAt": "2026-10-05T17:22:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "citrix-tracks-new-netscaler-issue-distinguishes-fr",
      "article-463ddb",
      "463ddb",
      "citrix-tracks-new-netscaler-issue-distinguishes-from-prior-v"
    ]
  },
  {
    "slug": "atb-grocery-chain-hit-by-cyberattack-extortion-dem-479905",
    "title": "ATB Grocery Chain Hit by Cyberattack, Extortion Demand Posted",
    "summary": "Ukraine’s largest grocery chain ATB confirmed a cyberattack after hackers posted an extortion demand on its website. The incident indicates a breach attempt, but no data leak has been reported. ATB is investigating the attack and has not disclosed any compromised customer information.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/atb-ukraine-cyberattack-ransomware",
    "publishedAt": "2026-10-05T17:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "atb-grocery-chain-hit-by-cyberattack-extortion-dem",
      "article-479905",
      "479905",
      "atb-grocery-chain-hit-by-cyberattack-extortion-demand-posted"
    ]
  },
  {
    "slug": "microsoft-exchange-vulnerability-cve-2026-96940-al-3247e6",
    "title": "Microsoft Exchange Vulnerability CVE-2026-96940 Allows Privilege Escalation",
    "summary": "Microsoft Exchange Server flaw CVE-2026-96940, rated 8.8 CVSS, enables authenticated attackers to elevate privileges and read other users' mailboxes. Microsoft has issued out‑of‑band patches to address the weak authorization issue.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/microsoft-exchange-flaw-lets.html",
    "publishedAt": "2026-10-05T16:21:52.000Z",
    "cves": [
      "CVE-2026-96940"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-exchange-vulnerability-cve-2026-96940-al",
      "article-3247e6",
      "3247e6",
      "microsoft-exchange-vulnerability-cve-2026-96940-allows-privi"
    ]
  },
  {
    "slug": "what-s-new-in-wiz-service-catalog-smarter-discover-438eea",
    "title": "What’s New in Wiz Service Catalog: Smarter Discovery, Governance, and Service-Level Context",
    "summary": "Wiz introduces updates to its Service Catalog, enabling faster build, continuous context updates, and clearer paths from cloud risk to accountability. The enhancements aim to improve governance and streamline risk management for cloud environments.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/wiz-service-catalog-updates",
    "publishedAt": "2026-10-05T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "what-s-new-in-wiz-service-catalog-smarter-discover",
      "article-438eea",
      "438eea",
      "what-s-new-in-wiz-service-catalog-smarter-discovery-governan"
    ]
  },
  {
    "slug": "chinese-hackers-impersonate-us-officials-for-ai-cy-3ba281",
    "title": "Chinese Hackers Impersonate US Officials for AI Cyber Espionage",
    "summary": "Chinese hackers from TA419 forged relationships with AI policy experts at U.S. think tanks, universities, and legal groups to facilitate espionage. The group impersonated officials to gain access to sensitive research and policy discussions. The operation highlights growing state-sponsored AI cyber espionage targeting U.S. policy makers.",
    "category": "Malware",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/chinese-actor-impersonates-us-officials-cyber-espionage",
    "publishedAt": "2026-10-05T15:52:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chinese-hackers-impersonate-us-officials-for-ai-cy",
      "article-3ba281",
      "3ba281",
      "chinese-hackers-impersonate-us-officials-for-ai-cyber-espion"
    ]
  },
  {
    "slug": "milk-dragon-phishing-kit-targets-shoppers-with-fak-17376c",
    "title": "Milk Dragon Phishing Kit Targets Shoppers with Fake Discounts",
    "summary": "Cybercriminals use the Milk Dragon phishing kit, active since October 2025, to lure shoppers on Facebook and TikTok with fake discounts. The kit directs victims to 258 phishing pages across 66 countries, stealing payment card details and one‑time passwords.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/05/milk-dragon-phishing-fake-discounts/",
    "publishedAt": "2026-10-05T13:55:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "milk-dragon-phishing-kit-targets-shoppers-with-fak",
      "article-17376c",
      "17376c",
      "milk-dragon-phishing-kit-targets-shoppers-with-fake-discount"
    ]
  },
  {
    "slug": "belarusian-hacktivists-conduct-two-year-espionage-465798",
    "title": "Belarusian Hacktivists Conduct Two‑Year Espionage in Russian Healthcare Network",
    "summary": "Russian researchers attribute a two‑year espionage campaign to Belarusian Cyber Partisans, a hacktivist group known for attacks on governments and infrastructure. The campaign infiltrated a Russian healthcare network, gathering sensitive information over an extended period.",
    "category": "Malware",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/belarusian-hacktivists-two-years-Russian-healthcare-network",
    "publishedAt": "2026-10-05T13:55:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "belarusian-hacktivists-conduct-two-year-espionage",
      "article-465798",
      "465798",
      "belarusian-hacktivists-conduct-two-year-espionage-in-russian"
    ]
  },
  {
    "slug": "tenfold-adds-shared-content-governance-and-real-ti-655a1b",
    "title": "tenfold Adds Shared Content Governance and Real‑Time Auditing to Free Edition",
    "summary": "tenfold released two new features in its free Community Edition: shared content governance and real‑time event auditing. The updates enable organizations with fewer than 150 users to manage Microsoft 365 sharing more effectively and investigate suspicious identity activity, enhancing overall identity governance.",
    "category": "Policy",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/tenfold-ce-our-free-identity-governance-tool-just-got-2-new-features/",
    "publishedAt": "2026-10-05T13:33:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "tenfold-adds-shared-content-governance-and-real-ti",
      "article-655a1b",
      "655a1b",
      "tenfold-adds-shared-content-governance-and-real-time-auditin"
    ]
  },
  {
    "slug": "stellar-cyber-7-0-unveils-ai-powered-soc-workflows-4d00ac",
    "title": "Stellar Cyber 7.0 Unveils AI‑Powered SOC Workflows",
    "summary": "Stellar Cyber released version 7.0, adding AI‑driven case triage, measurable SOC workflows, deeper investigative evidence, expanded automated response, and new APIs for large‑scale security operations. The update moves the Human‑Augmented Autonomous SOC from concept to practical operating model, improving analyst efficiency and response speed.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/05/stellar-cyber-7-0/",
    "publishedAt": "2026-10-05T13:31:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "stellar-cyber-7-0-unveils-ai-powered-soc-workflows",
      "article-4d00ac",
      "4d00ac"
    ]
  },
  {
    "slug": "malwarebytes-launches-free-scam-link-check-tool-5937e5",
    "title": "Malwarebytes Launches Free Scam Link Check Tool",
    "summary": "Malwarebytes released a free web tool that lets users paste suspicious URLs from text, email, chat, or social media to determine if they are safe or dangerous. The tool returns a safety result, explains the reasons, and recommends next steps. It aims to help users avoid scams that have caused billions in losses.",
    "category": "Malware",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/05/malwarebytes-scam-link-check/",
    "publishedAt": "2026-10-05T13:30:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "malwarebytes-launches-free-scam-link-check-tool",
      "article-5937e5",
      "5937e5"
    ]
  },
  {
    "slug": "cloudflare-celebrates-16th-birthday-with-46-new-re-1a28cb",
    "title": "Cloudflare Celebrates 16th Birthday with 46 New Releases",
    "summary": "During its 16th birthday, Cloudflare announced 46 new features across open source projects, post‑quantum security, AI agents, and developer platform upgrades. The company provided a day‑by‑day roundup of all the new releases shipped during the Birthday Week 2026 event.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/birthday-week-2026-wrap-up/",
    "publishedAt": "2026-10-05T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-celebrates-16th-birthday-with-46-new-re",
      "article-1a28cb",
      "1a28cb",
      "cloudflare-celebrates-16th-birthday-with-46-new-releases"
    ]
  },
  {
    "slug": "cloudflare-interns-ship-products-across-48-teams-7813d8",
    "title": "Cloudflare Interns Ship Products Across 48 Teams",
    "summary": "Cloudflare reports that over 750 interns have contributed real products to 48 teams, including Birthday Week launches and post‑quantum security initiatives, demonstrating AI’s role in amplifying human potential rather than replacing it.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/one-year-later-1111-interns/",
    "publishedAt": "2026-10-05T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-interns-ship-products-across-48-teams",
      "article-7813d8",
      "7813d8"
    ]
  },
  {
    "slug": "ai-driven-attacks-accelerate-prompting-security-te-3ef1fc",
    "title": "AI‑Driven Attacks Accelerate, Prompting Security Teams to Adapt",
    "summary": "AI‑driven attacks are accelerating, forcing security teams to adapt their defenses. The latest Dark Reading poll shows organizations prioritizing automation, threat intelligence, and rapid response to counter fast, relentless, and automated adversaries. Companies are investing in AI‑enabled detection, incident response, and training to keep pace with evolving attack tactics.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/ai-attacks-security-strategies",
    "publishedAt": "2026-10-05T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-driven-attacks-accelerate-prompting-security-te",
      "article-3ef1fc",
      "3ef1fc",
      "ai-driven-attacks-accelerate-prompting-security-teams-to-ada"
    ]
  },
  {
    "slug": "credential-layer-expansion-outpaces-security-teams-1ea7c2",
    "title": "Credential Layer Expansion Outpaces Security Teams",
    "summary": "Modern enterprises rely on credentials for human, system, and AI connections. GitGuardian offers detection, remediation, and prevention to secure this layer, helping organizations identify where credentials exist and how to protect them.",
    "category": "Policy",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/the-credential-layer-is-expanding.html",
    "publishedAt": "2026-10-05T11:55:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "credential-layer-expansion-outpaces-security-teams",
      "article-1ea7c2",
      "1ea7c2"
    ]
  },
  {
    "slug": "realtek-jungle-sdk-exploit-attempts-deploy-cling-b-7460a7",
    "title": "Realtek Jungle SDK Exploit Attempts Deploy Cling Botnet via STUN C2",
    "summary": "Threat actors targeted a critical flaw in the Realtek Jungle SDK, attempting to use the vulnerability to install the Cling botnet. Cling repurposes standard STUN traffic as a command-and-control channel, enabling remote control of infected devices. The flaw has been patched, but exploitation attempts continue.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/realtek-jungle-sdk-exploit-attempts.html",
    "publishedAt": "2026-10-05T11:46:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "realtek-jungle-sdk-exploit-attempts-deploy-cling-b",
      "article-7460a7",
      "7460a7",
      "realtek-jungle-sdk-exploit-attempts-deploy-cling-botnet-via-"
    ]
  },
  {
    "slug": "senate-passes-bipartisan-bill-to-strengthen-health-4bb6ed",
    "title": "Senate Passes Bipartisan Bill to Strengthen Healthcare Cybersecurity",
    "summary": "The U.S. Senate has passed a bipartisan bill aimed at improving cybersecurity in the healthcare sector. The legislation follows a year in which over 730 cyber breaches impacted more than 270 million Americans, with each breach costing an average of $10 million. The bill seeks to enhance protections for sensitive health data and reduce future breach incidents.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/senate-passes-bipartisan-bill-to-strengthen-healthcare-cybersecurity/",
    "publishedAt": "2026-10-05T10:42:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "senate-passes-bipartisan-bill-to-strengthen-health",
      "article-4bb6ed",
      "4bb6ed",
      "senate-passes-bipartisan-bill-to-strengthen-healthcare-cyber"
    ]
  },
  {
    "slug": "makerphone-2-0-diy-4g-phone-with-plug-in-hardware-7526f5",
    "title": "MAKERphone 2.0: DIY 4G Phone with Plug‑in Hardware",
    "summary": "CircuitMess launches MAKERphone 2.0, a build‑it‑yourself 4G handset that runs MicroPython or Arduino C++. Users insert a SIM to make real calls and texts, and can add plug‑in camera, speaker, and prototyping board modules. The kit targets hobbyists and parents seeking a child’s first phone.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/05/makerphone-2-diy-4g-phone/",
    "publishedAt": "2026-10-05T09:50:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "makerphone-2-0-diy-4g-phone-with-plug-in-hardware",
      "article-7526f5",
      "7526f5"
    ]
  },
  {
    "slug": "windows-kb5124010-update-causes-crashes-in-games-u-78a077",
    "title": "Windows KB5124010 Update Causes Crashes in Games Using AC‑3 Audio Decoding",
    "summary": "Microsoft’s KB5124010 Windows 11 preview update introduced a bug that causes games and applications using AC‑3 (Dolby Digital) audio decoding to crash. The issue affects only software that relies on the AC‑3 codec, and users are advised to postpone the update until Microsoft releases a fix. No data loss or security breach is reported.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-windows-kb5124010-update-crashes-some-games-and-apps/",
    "publishedAt": "2026-10-05T09:37:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-kb5124010-update-causes-crashes-in-games-u",
      "article-78a077",
      "78a077",
      "windows-kb5124010-update-causes-crashes-in-games-using-ac-3-"
    ]
  },
  {
    "slug": "doxx-net-launches-public-beta-of-agentic-defined-n-5f1054",
    "title": "doxx.net Launches Public Beta of Agentic Defined Networking Platform",
    "summary": "doxx.net has opened a public beta of its Agentic Defined Networking (ADN) platform, allowing users and their agents to create private, serverless networks with built‑in threat protection. The service blocks known malicious destinations and requires no personal information to join. The beta launch follows a $38 million funding round.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/05/doxx-net-agentic-defined-networking-platform/",
    "publishedAt": "2026-10-05T08:03:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "doxx-net-launches-public-beta-of-agentic-defined-n",
      "article-5f1054",
      "5f1054",
      "doxx-net-launches-public-beta-of-agentic-defined-networking-"
    ]
  },
  {
    "slug": "script-parses-and-sends-tty-logs-from-dshield-sens-57dd7a",
    "title": "Script Parses and Sends TTY Logs from DShield Sensor to SIEM",
    "summary": "A script was created to parse TTY logs generated by actors or bots after they log into a DShield sensor. The parsed logs are transmitted daily to the DShield SIEM for correlation with other collected data, enabling analysts to track malicious command activity.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33396",
    "publishedAt": "2026-10-05T00:15:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "script-parses-and-sends-tty-logs-from-dshield-sens",
      "article-57dd7a",
      "57dd7a",
      "script-parses-and-sends-tty-logs-from-dshield-sensor-to-siem"
    ]
  },
  {
    "slug": "trump-appoints-national-intelligence-director-jay-9cfd02",
    "title": "Trump Appoints National Intelligence Director Jay Clayton to Head New Federal AI Task Force",
    "summary": "President Trump announced that National Intelligence Director Jay Clayton will lead a newly formed federal task force focused on artificial intelligence. The move follows a White House meeting with AI industry leaders and aims to coordinate national AI strategy and policy across government agencies.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/trump-names-national-intelligence-director-jay-clayton-to-lead-a-new-federal-ai-task-force/",
    "publishedAt": "2026-10-04T14:57:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "trump-appoints-national-intelligence-director-jay",
      "article-9cfd02",
      "9cfd02",
      "trump-appoints-national-intelligence-director-jay-clayton-to"
    ]
  },
  {
    "slug": "anthropic-requests-claude-users-share-voice-data-f-7080bc",
    "title": "Anthropic Requests Claude Users Share Voice Data for Model Training",
    "summary": "Anthropic has begun asking Claude users to voluntarily share their voice conversations to help train and improve its AI models. The initiative involves collecting user voice data for model training purposes, with no indication of data breaches or security incidents.",
    "category": "Policy",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-asks-claude-users-to-share-voice-data-for-ai-model-training/",
    "publishedAt": "2026-10-04T10:53:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-requests-claude-users-share-voice-data-f",
      "article-7080bc",
      "7080bc",
      "anthropic-requests-claude-users-share-voice-data-for-model-t"
    ]
  },
  {
    "slug": "analysis-of-new-user-agent-strings-in-honeypot-log-57dd7a",
    "title": "Analysis of New User Agent Strings in Honeypot Logs",
    "summary": "Observations of newly appearing user agent strings in honeypot logs have sparked interest. The logs reveal diverse client identifiers, offering insights into attacker tools and techniques. Monitoring these strings helps security teams detect emerging threats and refine detection rules.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33394",
    "publishedAt": "2026-10-04T07:58:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "analysis-of-new-user-agent-strings-in-honeypot-log",
      "article-57dd7a",
      "57dd7a",
      "analysis-of-new-user-agent-strings-in-honeypot-logs"
    ]
  },
  {
    "slug": "yara-x-1-21-0-released-with-five-improvements-and-57dd7a",
    "title": "YARA-X 1.21.0 Released with Five Improvements and Four Bug Fixes",
    "summary": "The YARA-X tool has released version 1.21.0, adding five new features and fixing four bugs. The update enhances rule creation and performance for malware analysts and security researchers. No security impact is reported, and users are encouraged to upgrade to benefit from the improvements.",
    "category": "Malware",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33392",
    "publishedAt": "2026-10-03T14:40:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "yara-x-1-21-0-released-with-five-improvements-and",
      "article-57dd7a",
      "57dd7a",
      "yara-x-1-21-0-released-with-five-improvements-and-four-bug-f"
    ]
  },
  {
    "slug": "mi5-warns-of-china-s-mss-funding-research-with-ove-35a893",
    "title": "MI5 Warns of China’s MSS Funding Research with Over 100 UK Academics",
    "summary": "MI5 issued a Security Service Espionage Alert on September 30, 2026, stating that China’s Ministry of State Security funded research through the China General Technology Research Institute involving more than 100 UK-linked academics. The program aims to advance intelligence gathering capabilities for Beijing’s state security service.",
    "category": "Malware",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/mi5-says-chinas-mss-funded-research.html",
    "publishedAt": "2026-10-03T14:38:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mi5-warns-of-china-s-mss-funding-research-with-ove",
      "article-35a893",
      "35a893",
      "mi5-warns-of-china-s-mss-funding-research-with-over-100-uk-a"
    ]
  },
  {
    "slug": "warlock-uses-sharepoint-vulnerabilities-to-deploy-7c87c2",
    "title": "Warlock Uses SharePoint Vulnerabilities to Deploy Ransomware",
    "summary": "The China-linked threat actor Warlock continues to weaponize Microsoft SharePoint flaws, targeting Portuguese and Spanish organizations, including critical infrastructure, government and education sectors. The attacks disable security tools and deploy ransomware, exploiting both legacy and new SharePoint vulnerabilities.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/warlock-exploits-sharepoint-flaws-to.html",
    "publishedAt": "2026-10-03T14:36:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "warlock-uses-sharepoint-vulnerabilities-to-deploy",
      "article-7c87c2",
      "7c87c2",
      "warlock-uses-sharepoint-vulnerabilities-to-deploy-ransomware"
    ]
  },
  {
    "slug": "fortra-patches-critical-vulnerabilities-in-boks-eb38b3",
    "title": "Fortra Patches Critical Vulnerabilities in BoKS",
    "summary": "Fortra released patches for critical bugs in its BoKS platform that could allow attackers to bypass authentication, execute shell commands, and corrupt memory. The vulnerabilities posed a high risk of unauthorized access and potential data compromise. Users are urged to apply the latest updates immediately to mitigate the threat.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/fortra-patches-critical-vulnerabilities-in-boks/",
    "publishedAt": "2026-10-03T11:34:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortra-patches-critical-vulnerabilities-in-boks",
      "article-eb38b3",
      "eb38b3"
    ]
  },
  {
    "slug": "antino-backdoor-uses-m365-outlook-and-onedrive-for-1de25f",
    "title": "Antino Backdoor Uses M365 Outlook and OneDrive for Covert Command and Control",
    "summary": "China-nexus threat actor UAT-11587 deployed the Rust-based Antino backdoor, abusing Microsoft 365 Outlook and OneDrive services to establish covert command and control channels against Asian government entities. The backdoor enables remote execution and data exfiltration via cloud services.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/antino-backdoor-abuses-m365-outlook-onedrive-c2",
    "publishedAt": "2026-10-02T23:51:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "antino-backdoor-uses-m365-outlook-and-onedrive-for",
      "article-1de25f",
      "1de25f",
      "antino-backdoor-uses-m365-outlook-and-onedrive-for-covert-co"
    ]
  },
  {
    "slug": "judge-dismisses-spyware-lawsuit-against-salvadoran-738393",
    "title": "Judge Dismisses Spyware Lawsuit Against Salvadoran Journalists",
    "summary": "A California judge dismissed a spyware lawsuit filed by Salvadoran journalists who claimed they were targeted with Pegasus. The plaintiffs, all employees of El Faro, could not establish jurisdiction in the state. The case highlights ongoing legal challenges surrounding state-sponsored spyware use against journalists.",
    "category": "Malware",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/judge-dismisses-spyware-case-brought-by-salvadoran-journalists",
    "publishedAt": "2026-10-02T20:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "judge-dismisses-spyware-lawsuit-against-salvadoran",
      "article-738393",
      "738393",
      "judge-dismisses-spyware-lawsuit-against-salvadoran-journalis"
    ]
  },
  {
    "slug": "bipartisan-bills-target-alpr-use-70ee4a",
    "title": "Bipartisan Bills Target ALPR Use",
    "summary": "Legislation introduced by Sen. Josh Hawley and a bipartisan group led by Sen. Bernie Sanders, Sen. Jeff Merkley, and Rep. Alexandria Ocasio‑Cortez aims to limit automated license plate readers. The bills seek to regulate ALPR deployment and address privacy concerns raised by the technology.",
    "category": "Policy",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/alpr-legislation-hawley-sanders-merkley-aoc",
    "publishedAt": "2026-10-02T19:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bipartisan-bills-target-alpr-use",
      "article-70ee4a",
      "70ee4a"
    ]
  },
  {
    "slug": "swift-banking-government-middleware-enables-rce-4889d6",
    "title": "SWIFT Banking & Government Middleware Enables RCE",
    "summary": "A remote code execution flaw exists in SWIFT banking and government middleware, allowing attackers to exploit hardware-based multi‑factor authentication weaknesses in ultra‑sensitive environments. Patching the middleware vulnerabilities is essential to prevent potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/swift-banking-govt-middleware-rce",
    "publishedAt": "2026-10-02T16:27:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "swift-banking-government-middleware-enables-rce",
      "article-4889d6",
      "4889d6"
    ]
  },
  {
    "slug": "cloudflare-stream-and-workers-enable-custom-video-2213dc",
    "title": "Cloudflare Stream and Workers Enable Custom Video Pipelines",
    "summary": "Cloudflare demonstrates how to build long-running, continuous video processing pipelines by pairing Cloudflare Workers and Durable Objects with a containerized media engine. The solution allows developers to create custom video workflows that run continuously and scale automatically.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/streamline/",
    "publishedAt": "2026-10-02T16:13:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-stream-and-workers-enable-custom-video",
      "article-2213dc",
      "2213dc",
      "cloudflare-stream-and-workers-enable-custom-video-pipelines"
    ]
  },
  {
    "slug": "preparing-for-ai-accountability-in-2027-681a3e",
    "title": "Preparing for AI Accountability in 2027",
    "summary": "Organizations may face an artificial intelligence reckoning over the next year. Omdia and Gartner discuss how to tackle governance, security, and value challenges ahead, emphasizing the need for robust AI oversight and risk management practices.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/is-your-organization-ready-for-2027-s-ai-accountability-era-",
    "publishedAt": "2026-10-02T16:01:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "preparing-for-ai-accountability-in-2027",
      "article-681a3e",
      "681a3e"
    ]
  },
  {
    "slug": "rogue-ai-terminology-misplaces-responsibility-in-s-29e084",
    "title": "Rogue AI Terminology Misplaces Responsibility in Security Failures",
    "summary": "The term \"Rogue AI\" anthropomorphizes large language models, diverting accountability from vendors. Security professionals should view AI agents as untrusted, nondeterministic software rather than sentient actors. This perspective emphasizes proper risk management and safeguards against misattributed blame.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/insider-threats/blame-rogue-ai-security-failures",
    "publishedAt": "2026-10-02T15:51:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rogue-ai-terminology-misplaces-responsibility-in-s",
      "article-29e084",
      "29e084",
      "rogue-ai-terminology-misplaces-responsibility-in-security-fa"
    ]
  },
  {
    "slug": "us-sanctions-venezuelan-gang-for-atm-jackpotting-a-3731bd",
    "title": "US Sanctions Venezuelan Gang for ATM Jackpotting Attacks",
    "summary": "The U.S. Treasury Department sanctioned eight members of the Venezuelan gang Tren de Aragua for orchestrating ATM jackpotting attacks that stole millions of dollars across the United States. The sanctions aim to curb the gang’s financial operations and deter future criminal activity.",
    "category": "Policy",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/us-sanctions-tren-de-aragua-members-in-atm-jackpotting-crackdown/",
    "publishedAt": "2026-10-02T15:20:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "us-sanctions-venezuelan-gang-for-atm-jackpotting-a",
      "article-3731bd",
      "3731bd",
      "us-sanctions-venezuelan-gang-for-atm-jackpotting-attacks"
    ]
  },
  {
    "slug": "mississippi-mayor-reports-ransomware-incident-shut-74dec6",
    "title": "Mississippi Mayor Reports Ransomware Incident Shutting Down City Systems",
    "summary": "A ransomware attack disrupted government services in Vicksburg, Mississippi, forcing a temporary shutdown of city systems. Mayor Willis Thompson confirmed the incident and said the FBI and other authorities are investigating the breach.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/vicksburg-mississippi-government-ransomware-attack",
    "publishedAt": "2026-10-02T14:06:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mississippi-mayor-reports-ransomware-incident-shut",
      "article-74dec6",
      "74dec6",
      "mississippi-mayor-reports-ransomware-incident-shutting-down-"
    ]
  },
  {
    "slug": "browser-attacks-evade-edr-endpoint-telemetry-in-th-7f6dd6",
    "title": "Browser Attacks Evade EDR Endpoint Telemetry in Three Ways",
    "summary": "Browser attacks can evade EDR by stealing sessions, abusing extensions, manipulating users without leaving artifacts. NordLayer explains three evasion methods and recommends browser-level controls to close the gap. These techniques highlight the limitations of traditional endpoint detection and underscore the importance of integrating browser security solutions into comprehensive threat detection strategies.",
    "category": "Policy",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/the-edr-blind-spot-3-ways-browser-attacks-evade-endpoint-telemetry/",
    "publishedAt": "2026-10-02T14:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "browser-attacks-evade-edr-endpoint-telemetry-in-th",
      "article-7f6dd6",
      "7f6dd6",
      "browser-attacks-evade-edr-endpoint-telemetry-in-three-ways"
    ]
  },
  {
    "slug": "vulnerability-backlogs-are-an-ownership-problem-4e8105",
    "title": "Vulnerability Backlogs Are an Ownership Problem",
    "summary": "Organizations lack clear ownership of assets, leading to unresolved vulnerability backlogs. The article argues that better vulnerability scanners are insufficient; companies must assign responsibility and authority to fix issues. It emphasizes governance and accountability as key to reducing security gaps.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/vulnerability-backlogs-ownership-problem",
    "publishedAt": "2026-10-02T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vulnerability-backlogs-are-an-ownership-problem",
      "article-4e8105",
      "4e8105"
    ]
  },
  {
    "slug": "introducing-web-search-api-via-ai-gateway-2d7cf0",
    "title": "Introducing Web Search API via AI Gateway",
    "summary": "Cloudflare’s AI Gateway now offers a native web search API, partnering with Ceramic.ai, Exa, and Linkup. Developers can inject real‑time web context into model inference via REST APIs or Workers bindings. The feature expands AI capabilities, enabling dynamic, up‑to‑date information retrieval during inference calls.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/introducing-web-search-api/",
    "publishedAt": "2026-10-02T13:28:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "introducing-web-search-api-via-ai-gateway",
      "article-2d7cf0",
      "2d7cf0"
    ]
  },
  {
    "slug": "fake-zoom-installer-distributes-cloudsyncd-backdoo-44e789",
    "title": "Fake Zoom Installer Distributes CloudSyncD Backdoor on macOS",
    "summary": "A fake Zoom installer targeting macOS users drops a 756 KB Mach‑O backdoor named CloudSyncD, which extracts itself at runtime. The malicious dropper can provide remote access to infected systems, enabling attackers to exfiltrate data or install additional malware. Users should verify Zoom downloads from official sources and keep macOS updated.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/macos-users-targeted-by-fake-zoom-installer-carrying-cloudsyncd-backdoor/",
    "publishedAt": "2026-10-02T13:15:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fake-zoom-installer-distributes-cloudsyncd-backdoo",
      "article-44e789",
      "44e789",
      "fake-zoom-installer-distributes-cloudsyncd-backdoor-on-macos"
    ]
  },
  {
    "slug": "updates-on-our-pledge-to-make-cloudflare-features-2b4323",
    "title": "Updates on our pledge to make Cloudflare features accessible to everyone",
    "summary": "Cloudflare reports progress on its commitment to eliminate two-tier product access, expanding Logpush, multi-account governance, and higher platform limits to all accounts. The company outlines internal testing and future plans for broader feature availability.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/enterprise-for-all-update/",
    "publishedAt": "2026-10-02T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "updates-on-our-pledge-to-make-cloudflare-features",
      "article-2b4323",
      "2b4323",
      "updates-on-our-pledge-to-make-cloudflare-features-accessible"
    ]
  },
  {
    "slug": "cloudflare-enables-automation-for-leading-civil-so-54096a",
    "title": "Cloudflare Enables Automation for Leading Civil Society Organizations",
    "summary": "Cloudflare reports that leading civil society organizations are leveraging its platform to automate operations, improving efficiency and resilience. The initiative showcases how non‑profits can use Cloudflare’s security and performance services to streamline workflows, protect data, and scale services without dedicated IT teams.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/civil-society-automation/",
    "publishedAt": "2026-10-02T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-enables-automation-for-leading-civil-so",
      "article-54096a",
      "54096a",
      "cloudflare-enables-automation-for-leading-civil-society-orga"
    ]
  },
  {
    "slug": "linux-backdoors-mimic-asian-mail-security-products-50d1b2",
    "title": "Linux Backdoors Mimic Asian Mail Security Products",
    "summary": "Three newly discovered Linux backdoors disguise themselves as legitimate Asian mail security products, making detection difficult. The implants mimic the appearance and behavior of trusted edge solutions, allowing attackers to gain unauthorized access to compromised systems. Security teams should monitor for unusual mail security processes and verify software authenticity.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/threat-intelligence/malicious-linux-implants-mimic-asian-mail-security",
    "publishedAt": "2026-10-02T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-backdoors-mimic-asian-mail-security-products",
      "article-50d1b2",
      "50d1b2"
    ]
  },
  {
    "slug": "cloudflare-unveils-eight-major-observability-updat-674932",
    "title": "Cloudflare Unveils Eight Major Observability Updates",
    "summary": "Cloudflare launches eight major updates that consolidate logs, traces, analytics, alerts, dashboards, querying, and telemetry export into a single observability platform. The changes aim to simplify and make pricing more predictable for users, enhancing monitoring and incident response capabilities.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/one-observability-platform/",
    "publishedAt": "2026-10-02T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-unveils-eight-major-observability-updat",
      "article-674932",
      "674932",
      "cloudflare-unveils-eight-major-observability-updates"
    ]
  },
  {
    "slug": "microsoft-warns-ai-accelerates-attackers-edge-1581e7",
    "title": "Microsoft Warns AI Accelerates Attackers’ Edge",
    "summary": "Microsoft’s 2026 Digital Defense Report highlights that threat actors are using AI to discover bugs, build malware, and conduct intrusions faster than defenders can respond. The report stresses the need for rapid defensive adjustments to close the gap as AI changes cybersecurity dynamics.",
    "category": "Malware",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/02/ai-cybersecurity-threats-microsoft-report/",
    "publishedAt": "2026-10-02T12:47:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-warns-ai-accelerates-attackers-edge",
      "article-1581e7",
      "1581e7"
    ]
  },
  {
    "slug": "openai-terminates-three-safety-researchers-over-da-515e6d",
    "title": "OpenAI Terminates Three Safety Researchers Over Data Leak",
    "summary": "OpenAI fired three safety team members after they leaked private company information, violating internal policies. The incident involved unauthorized access to sensitive data and prompted an internal investigation. No external breach was reported, but the leak highlights risks of insider data mishandling.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/openai-parts-ways-with-three-safety.html",
    "publishedAt": "2026-10-02T12:23:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-terminates-three-safety-researchers-over-da",
      "article-515e6d",
      "515e6d",
      "openai-terminates-three-safety-researchers-over-data-leak"
    ]
  },
  {
    "slug": "cisa-adds-two-known-exploited-vulnerabilities-to-c-4b42aa",
    "title": "CISA Adds Two Known Exploited Vulnerabilities to Catalog",
    "summary": "CISA has added CVE-2026-102489, a Zammad session fixation flaw, and CVE-2026-102490, a Zammad improper privilege management flaw, to its Known Exploited Vulnerabilities catalog after evidence of active exploitation. The vulnerabilities pose significant risks to federal agencies and require rapid remediation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/10/02/cisa-adds-two-known-exploited-vulnerabilities-catalog",
    "publishedAt": "2026-10-02T12:00:00.000Z",
    "cves": [
      "CVE-2026-102489",
      "CVE-2026-102490"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-two-known-exploited-vulnerabilities-to-c",
      "article-4b42aa",
      "4b42aa",
      "cisa-adds-two-known-exploited-vulnerabilities-to-catalog"
    ]
  },
  {
    "slug": "microsoft-x-account-hijacked-by-crypto-scammers-61cf19",
    "title": "Microsoft X Account Hijacked by Crypto Scammers",
    "summary": "Hackers hijacked Microsoft’s official X account, which has 13 million followers, to promote a Clippy‑themed cryptocurrency account. The takeover was used to amplify the scam content, but no user data or credentials were reported as compromised.",
    "category": "Breach",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/crypto-scammers-hijack-microsofts-official-x-account/",
    "publishedAt": "2026-10-02T11:46:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-x-account-hijacked-by-crypto-scammers",
      "article-61cf19",
      "61cf19"
    ]
  },
  {
    "slug": "iranian-state-hacker-indicted-and-extradited-to-u-1cd7dc",
    "title": "Iranian State Hacker Indicted and Extradited to U.S. Authorities",
    "summary": "Amir Barati, alleged member of the Mabna Institute, is indicted for targeting U.S. universities, private firms, and government entities. He has been extradited to the United States for prosecution. The case highlights ongoing Iranian cyber espionage efforts against U.S. institutions.",
    "category": "Malware",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/in-rare-move-iranian-hacker-accused-of-working-for-irgc-extradited-to-us/",
    "publishedAt": "2026-10-02T11:14:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "iranian-state-hacker-indicted-and-extradited-to-u",
      "article-1cd7dc",
      "1cd7dc",
      "iranian-state-hacker-indicted-and-extradited-to-u-s-authorit"
    ]
  },
  {
    "slug": "ai-agents-target-us-department-of-education-and-li-1966f4",
    "title": "AI Agents Target US Department of Education and Library and Archives Canada with SQL Injection",
    "summary": "Researchers identified AI-driven agents that performed SQL injection attacks against the US Department of Education and Library and Archives Canada. The attacks exploited database input validation flaws, potentially allowing attackers to read or modify sensitive data. No confirmed data exfiltration was reported, and mitigation involves patching input handling and monitoring for injection attempts.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/ai-agents-aimed-sql-injection-at-us-and-canadian-government-sites/",
    "publishedAt": "2026-10-02T08:38:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agents-target-us-department-of-education-and-li",
      "article-1966f4",
      "1966f4",
      "ai-agents-target-us-department-of-education-and-library-and-"
    ]
  },
  {
    "slug": "google-restricts-android-accessibility-services-to-5134c9",
    "title": "Google Restricts Android Accessibility Services to Verified Tools Under Advanced Protection",
    "summary": "Google limits Android accessibility services to verified Accessibility Tools when Advanced Protection is enabled, blocking malicious apps that abuse the API for malware and fraud. The change reduces attack surface for credential theft and financial fraud. Users with Advanced Protection will no longer grant unrestricted access to unverified apps.",
    "category": "Malware",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/android-17-advanced-protection-locks.html",
    "publishedAt": "2026-10-02T08:01:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-restricts-android-accessibility-services-to",
      "article-5134c9",
      "5134c9",
      "google-restricts-android-accessibility-services-to-verified-"
    ]
  },
  {
    "slug": "insider-recruitment-threats-target-employee-access-2e7c50",
    "title": "Insider Recruitment Threats Target Employee Access",
    "summary": "Cybercriminals are actively recruiting employees to gain legitimate access, enabling them to perform routine actions such as information lookups, account resets, transaction approvals, and shipment changes. These insider services can be sold to criminal customers, increasing the risk of internal compromise and facilitating covert operations within targeted organizations.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/02/intel-471-insider-threat-recruitment-report/",
    "publishedAt": "2026-10-02T06:00:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "insider-recruitment-threats-target-employee-access",
      "article-2e7c50",
      "2e7c50"
    ]
  },
  {
    "slug": "android-17-adds-features-to-hinder-spyware-trackin-6505bc",
    "title": "Android 17 Adds Features to Hinder Spyware Tracking",
    "summary": "Google’s Android 17 introduces six Advanced Protection features, including forensic logging that stores evidence off-device and Intrusion Logging that records security and network events. Existing users will be notified when the updates roll out, enhancing traceability for suspected phone hacks.",
    "category": "Malware",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/02/android-17-advanced-protection-features/",
    "publishedAt": "2026-10-02T05:30:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "android-17-adds-features-to-hinder-spyware-trackin",
      "article-6505bc",
      "6505bc",
      "android-17-adds-features-to-hinder-spyware-tracking"
    ]
  },
  {
    "slug": "ai-threats-rank-highest-among-business-leaders-405948",
    "title": "AI Threats Rank Highest Among Business Leaders",
    "summary": "PwC surveyed 3,934 executives across 71 countries, finding botnets, adversarial attacks, and data poisoning as the top AI threats. Leaders identified these gaps as the most unprepared, surpassing all other risks in their top five preparedness list.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/02/pwc-attacks-on-ai-systems/",
    "publishedAt": "2026-10-02T05:00:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-threats-rank-highest-among-business-leaders",
      "article-405948",
      "405948"
    ]
  },
  {
    "slug": "ai-agents-maintain-access-to-company-data-after-ta-7e0d34",
    "title": "AI Agents Maintain Access to Company Data After Tasks Complete",
    "summary": "IT teams worry that AI agents retain ongoing access to corporate systems and can act on users’ behalf after their tasks finish, highlighting a gap in enforceable AI policies and the need for real‑time monitoring to prevent unauthorized actions.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/02/delinea-ai-policy-adoption-enforcement-report/",
    "publishedAt": "2026-10-02T04:30:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agents-maintain-access-to-company-data-after-ta",
      "article-7e0d34",
      "7e0d34",
      "ai-agents-maintain-access-to-company-data-after-tasks-comple"
    ]
  },
  {
    "slug": "vega-ii-introduces-ai-powered-soc-platform-5f401f",
    "title": "Vega II Introduces AI‑Powered SOC Platform",
    "summary": "Vega released Vega II, its largest platform update, adding security‑trained AI and persistent memory to the SOC. The update removes legacy SIEM and data pipeline barriers, providing teams with a lasting record of learned insights for improved security operations.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/02/new-infosec-products-of-the-week-october-2-2026/",
    "publishedAt": "2026-10-02T04:00:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vega-ii-introduces-ai-powered-soc-platform",
      "article-5f401f",
      "5f401f"
    ]
  },
  {
    "slug": "killsec-ransomware-mastermind-identified-as-16-yea-2168cb",
    "title": "KillSec Ransomware Mastermind Identified as 16‑Year‑Old",
    "summary": "Law enforcement agencies from multiple countries disrupted a cybercrime operation led by a 16‑year‑old mastermind behind KillSec ransomware, which has claimed about 500 victims worldwide over the past two years.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/killsec-ransomware-mastermind-16-year-old",
    "publishedAt": "2026-10-01T21:37:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "killsec-ransomware-mastermind-identified-as-16-yea",
      "article-2168cb",
      "2168cb",
      "killsec-ransomware-mastermind-identified-as-16-year-old"
    ]
  },
  {
    "slug": "zero-trust-model-still-effective-against-ai-assist-2cf9c6",
    "title": "Zero Trust Model Still Effective Against AI-Assisted Attacks",
    "summary": "John Kindervag, creator of Zero Trust, asserts that the framework remains robust in the AI era if implemented correctly. He emphasizes that Zero Trust principles can counter AI-assisted attack techniques, reinforcing the importance of proper deployment and continuous monitoring.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/zero-trust-creator-says-model-holds-firm-against-ai-assisted-attacks/",
    "publishedAt": "2026-10-01T18:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zero-trust-model-still-effective-against-ai-assist",
      "article-2cf9c6",
      "2cf9c6",
      "zero-trust-model-still-effective-against-ai-assisted-attacks"
    ]
  },
  {
    "slug": "osavul-raises-10m-series-a-to-detect-hostile-inten-4f0dd7",
    "title": "Osavul Raises $10M Series A to Detect Hostile Intent in Cyber and Physical Domains",
    "summary": "Hybrid risk intelligence firm Osavul secured $10 million in a Series A round led by 33N Ventures to enhance its platform that identifies hostile intent across cyber and physical environments. The funding will support technology development and market expansion.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/osavul-lands-10-million-to-spot-hostile-intent-across-cyber-physical-domains/",
    "publishedAt": "2026-10-01T17:16:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "osavul-raises-10m-series-a-to-detect-hostile-inten",
      "article-4f0dd7",
      "4f0dd7",
      "osavul-raises-10m-series-a-to-detect-hostile-intent-in-cyber"
    ]
  },
  {
    "slug": "threatsday-highlights-ai-powered-zero-day-chain-an-1e51a4",
    "title": "ThreatsDay Highlights AI-Powered Zero-Day Chain and Model Inspection RCE",
    "summary": "ThreatsDay reports an AI-driven zero‑day exploitation chain that leverages model inspection Remote Code Execution (RCE) and other attack vectors. The report details how seemingly benign actions—such as inspecting models, caching data, or compiling code—can be abused to execute arbitrary code, exposing systems to significant risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/threatsday-ai-powered-zero-day-chain.html",
    "publishedAt": "2026-10-01T16:45:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "threatsday-highlights-ai-powered-zero-day-chain-an",
      "article-1e51a4",
      "1e51a4",
      "threatsday-highlights-ai-powered-zero-day-chain-and-model-in"
    ]
  },
  {
    "slug": "wordpress-backdoor-rebuilds-itself-after-cleanup-u-16516f",
    "title": "WordPress Backdoor Rebuilds Itself After Cleanup Using Files, Database, and Shared Memory",
    "summary": "Researchers uncovered a WordPress backdoor that self‑heals by recreating itself through files, database entries, and shared memory after cleanup. The malware, codenamed SC, uses multiple persistence mechanisms to ensure the final payload remains active without re‑infection.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/wordpress-backdoor-rebuilds-itself.html",
    "publishedAt": "2026-10-01T14:37:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wordpress-backdoor-rebuilds-itself-after-cleanup-u",
      "article-16516f",
      "16516f",
      "wordpress-backdoor-rebuilds-itself-after-cleanup-using-files"
    ]
  },
  {
    "slug": "rob-juncker-discusses-hacker-identity-and-ethics-3e23c1",
    "title": "Rob Juncker Discusses Hacker Identity and Ethics",
    "summary": "Rob Juncker, Mimecast’s chief product and technology officer, confirms he is a hacker and shares his moral compass on security practices. The interview explores his perspective on hacking and cybersecurity leadership.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/hacker-conversations-rob-juncker-a-knock-at-the-door-and-a-moral-compass/",
    "publishedAt": "2026-10-01T14:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rob-juncker-discusses-hacker-identity-and-ethics",
      "article-3e23c1",
      "3e23c1"
    ]
  },
  {
    "slug": "pwc-finds-only-22-of-enterprises-ready-for-autonom-31e73b",
    "title": "PwC Finds Only 22% of Enterprises Ready for Autonomous AI Cyber Defense",
    "summary": "A PwC survey shows just 22% of corporate leaders would deploy fully autonomous AI for cyber defense, and only 21% are adopting quantum‑resistant security measures. The findings highlight a widespread gap in preparedness for emerging AI and quantum threats across the industry.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/enterprises-struggle-to-prepare-for-ai-and-quantum-threats-pwc-says/",
    "publishedAt": "2026-10-01T14:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pwc-finds-only-22-of-enterprises-ready-for-autonom",
      "article-31e73b",
      "31e73b",
      "pwc-finds-only-22-of-enterprises-ready-for-autonomous-ai-cyb"
    ]
  },
  {
    "slug": "government-agencies-lead-2026-cyber-threat-landsca-280219",
    "title": "Government Agencies Lead 2026 Cyber Threat Landscape",
    "summary": "Microsoft’s Digital Defense Report shows government agencies and services experienced 27% of cyber activity in 2026, up from 17% in 2025. The report highlights the growing interconnected cyber risk facing public sector entities and underscores the need for enhanced defensive measures.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Microsoft Security",
    "sourceUrl": "https://blogs.microsoft.com/on-the-issues/2026/10/01/preparing-governments-for-an-era-of-interconnected-cyber-risk/",
    "publishedAt": "2026-10-01T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "government-agencies-lead-2026-cyber-threat-landsca",
      "article-280219",
      "280219",
      "government-agencies-lead-2026-cyber-threat-landscape"
    ]
  },
  {
    "slug": "microsoft-releases-2026-digital-defense-report-hig-6a5d05",
    "title": "Microsoft Releases 2026 Digital Defense Report Highlights",
    "summary": "Microsoft’s 2026 Digital Defense Report outlines a security landscape that is increasingly interconnected, noting evolving threat vectors and the need for robust defense strategies. The report emphasizes the importance of proactive security measures and continuous monitoring to mitigate emerging risks across digital infrastructures.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/10/01/insights-from-the-2026-microsoft-digital-defense-report/",
    "publishedAt": "2026-10-01T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-releases-2026-digital-defense-report-hig",
      "article-6a5d05",
      "6a5d05",
      "microsoft-releases-2026-digital-defense-report-highlights"
    ]
  },
  {
    "slug": "deepkeep-launches-ai-lens-to-monitor-coding-agent-1a5108",
    "title": "DeepKeep Launches AI Lens to Monitor Coding Agent Data Leaks",
    "summary": "DeepKeep introduced AI Lens for Developers, an extension that monitors coding agents like Cursor and Claude Code for data leaks and destructive commands. The tool provides policy enforcement, audit visibility, and runtime protection, closing a critical gap in developer security programs.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/01/deepkeeps-ai-lens-flags-coding-agent-data-leaks-and-routes-destructive-commands-for-approval/",
    "publishedAt": "2026-10-01T13:57:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "deepkeep-launches-ai-lens-to-monitor-coding-agent",
      "article-1a5108",
      "1a5108",
      "deepkeep-launches-ai-lens-to-monitor-coding-agent-data-leaks"
    ]
  },
  {
    "slug": "exabeam-introduces-ai-assisted-investigations-for-3f4276",
    "title": "Exabeam Introduces AI‑Assisted Investigations for On‑Premises Data",
    "summary": "Exabeam launches new capabilities that extend its Agentic SOC to both cloud and on‑premises environments. The update enables AI‑driven investigation, execution, and governance while keeping data local. It aims to accelerate threat detection and response for organizations that require on‑premises data residency.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/01/exabeam-agentic-soc/",
    "publishedAt": "2026-10-01T13:50:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "exabeam-introduces-ai-assisted-investigations-for",
      "article-3f4276",
      "3f4276",
      "exabeam-introduces-ai-assisted-investigations-for-on-premise"
    ]
  },
  {
    "slug": "radarfirst-launches-ai-incident-management-tool-34fd4f",
    "title": "RadarFirst Launches AI Incident Management Tool",
    "summary": "RadarFirst has released Radar AI Incident Management, a tool designed to help organizations investigate and document AI-related incidents. The solution addresses risks from biased outcomes, data exposure, and unintended AI actions, enabling coordinated responses across privacy, security, compliance, and product teams.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/01/radarfirst-ai-incident-management/",
    "publishedAt": "2026-10-01T13:39:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "radarfirst-launches-ai-incident-management-tool",
      "article-34fd4f",
      "34fd4f"
    ]
  },
  {
    "slug": "sophos-launches-ai-enabled-ciso-advantage-to-prior-1f4021",
    "title": "Sophos Launches AI‑Enabled CISO Advantage to Prioritize Security Fixes",
    "summary": "Sophos has introduced CISO Advantage, an agentic AI solution that maps security operations to strategy, providing organizations with a clear risk picture and a prioritized plan to address vulnerabilities. The tool translates security data into actionable, fundable initiatives for business leaders.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/01/sophos-ciso-advantage/",
    "publishedAt": "2026-10-01T13:25:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sophos-launches-ai-enabled-ciso-advantage-to-prior",
      "article-1f4021",
      "1f4021",
      "sophos-launches-ai-enabled-ciso-advantage-to-prioritize-secu"
    ]
  },
  {
    "slug": "ai-accelerates-vulnerability-discovery-but-fundame-278a1c",
    "title": "AI Accelerates Vulnerability Discovery, but Fundamentals Remain Key",
    "summary": "AI speeds up finding and exploiting software flaws, yet virtual patching still relies on defense‑in‑depth and solid application security practices. The article stresses that AI does not replace core security principles, only the pace of attacks.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/ai-has-changed-attack-speed-not-security-fundamentals/",
    "publishedAt": "2026-10-01T13:15:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-accelerates-vulnerability-discovery-but-fundame",
      "article-278a1c",
      "278a1c",
      "ai-accelerates-vulnerability-discovery-but-fundamentals-rema"
    ]
  },
  {
    "slug": "ai-agent-exploits-zammad-zero-days-to-breach-dutch-8afdb3",
    "title": "AI Agent Exploits Zammad Zero-Days to Breach Dutch Vulnerability Disclosure Non-Profit",
    "summary": "An AI-powered attack on September 21 used two zero-day flaws in Zammad, an open-source helpdesk system, to hijack sessions, execute remote code, and elevate privileges from a Zammad user to root. The attackers then accessed additional services and read sensitive data.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/01/divd-agentic-ai-attack-breach/",
    "publishedAt": "2026-10-01T13:13:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agent-exploits-zammad-zero-days-to-breach-dutch",
      "article-8afdb3",
      "8afdb3",
      "ai-agent-exploits-zammad-zero-days-to-breach-dutch-vulnerabi"
    ]
  },
  {
    "slug": "legit-security-adds-automated-fixes-for-open-sourc-2f4484",
    "title": "Legit Security Adds Automated Fixes for Open‑Source Dependencies",
    "summary": "Legit Security expands its Agentic Remediation to automatically patch vulnerabilities in open‑source libraries, not just proprietary code. The update lets development teams move from detection to verified fixes without manual triage, addressing the growing risk from AI‑generated code and frequent dependency updates.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/01/legit-security-agentic-remediation-expansion/",
    "publishedAt": "2026-10-01T13:04:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "legit-security-adds-automated-fixes-for-open-sourc",
      "article-2f4484",
      "2f4484",
      "legit-security-adds-automated-fixes-for-open-source-dependen"
    ]
  },
  {
    "slug": "ai-search-is-now-generally-available-26c82e",
    "title": "AI Search is now generally available",
    "summary": "AI Search is now generally available, offering image pixel embedding for visual search, OCR on scanned PDFs, file uploads up to 10 MiB, and compatibility with any chat model. The service includes new features and a pricing model, enhancing AI-driven search capabilities for users.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/ai-search-ga/",
    "publishedAt": "2026-10-01T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-search-is-now-generally-available",
      "article-26c82e",
      "26c82e"
    ]
  },
  {
    "slug": "cloudflare-os-offers-managed-agent-workspaces-396285",
    "title": "Cloudflare OS Offers Managed Agent Workspaces",
    "summary": "Cloudflare OS provides every employee with a managed agent workspace that understands company workflows and connects to internal data and systems. The service is now available via a waitlist for fully managed deployments that can be launched with a few clicks.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/managed-cloudflare-os/",
    "publishedAt": "2026-10-01T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-os-offers-managed-agent-workspaces",
      "article-396285",
      "396285"
    ]
  },
  {
    "slug": "zimbra-cve-2026-73570-exploited-via-crafted-emails-3dc4dc",
    "title": "Zimbra CVE-2026-73570 Exploited via Crafted Emails",
    "summary": "A zero‑day flaw, CVE-2026-73570, in Zimbra allows attackers to execute code by sending specially crafted emails without user interaction. The vulnerability was actively exploited before public disclosure, enabling remote code execution on affected servers. Patching Zimbra to the latest release mitigates the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/zimbra-vulnerability-exploited-in-the-wild-prior-to-public-disclosure/",
    "publishedAt": "2026-10-01T12:55:57.000Z",
    "cves": [
      "CVE-2026-73570"
    ],
    "additionalSources": [],
    "aliases": [
      "zimbra-cve-2026-73570-exploited-via-crafted-emails",
      "article-3dc4dc",
      "3dc4dc"
    ]
  },
  {
    "slug": "johnson-controls-easyio-neo-series-controllers-vul-431bed",
    "title": "Johnson Controls EasyIO Neo Series Controllers Vulnerable to Cleartext Credential Interception",
    "summary": "Johnson Controls EasyIO Neo Series EC and CW Controllers V3.3b62, V3.3b63, V3.3b24, and V3.3b25 are affected by CVE-2026-64893. The flaw allows attackers to intercept and read sensitive information, including credentials and session data, via cleartext transmission. A patch is available from Johnson Controls.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-274-05",
    "publishedAt": "2026-10-01T12:00:00.000Z",
    "cves": [
      "CVE-2026-64893"
    ],
    "additionalSources": [],
    "aliases": [
      "johnson-controls-easyio-neo-series-controllers-vul",
      "article-431bed",
      "431bed",
      "johnson-controls-easyio-neo-series-controllers-vulnerable-to"
    ]
  },
  {
    "slug": "meari-iot-cloud-platform-openapi-service-authoriza-431bed",
    "title": "Meari IoT Cloud Platform OpenAPI Service Authorization Flaw (CVE-2026-101104, CVE-2026-96613)",
    "summary": "Meari IoT Cloud Platform OpenAPI Service (all versions) suffers from an authorization flaw (CVE-2026-101104, CVE-2026-96613) that lets authenticated users manipulate device configurations, trigger unauthorized behaviors, and access credentials, owner details, and network data. The vulnerability has a CVSS score of 7.7 and impacts commercial facilities and IT sectors worldwide.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-274-06",
    "publishedAt": "2026-10-01T12:00:00.000Z",
    "cves": [
      "CVE-2026-101104",
      "CVE-2026-96613"
    ],
    "additionalSources": [],
    "aliases": [
      "meari-iot-cloud-platform-openapi-service-authoriza",
      "article-431bed",
      "431bed",
      "meari-iot-cloud-platform-openapi-service-authorization-flaw-"
    ]
  },
  {
    "slug": "cisa-alerts-on-cve-2023-46604-in-armatura-one-plat-431bed",
    "title": "CISA Alerts on CVE‑2023‑46604 in Armatura One Platform",
    "summary": "CISA reports that Armatura LLC’s Armatura One platform is vulnerable to CVE‑2023‑46604, a deserialization flaw in embedded Apache ActiveMQ. The flaw can give attackers full host control, database access, and physical access‑control takeover. The vulnerability is rated CVSS 9.8 and affects all worldwide deployments of Armatura One.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-274-01",
    "publishedAt": "2026-10-01T12:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-alerts-on-cve-2023-46604-in-armatura-one-plat",
      "article-431bed",
      "431bed",
      "cisa-alerts-on-cve-2023-46604-in-armatura-one-platform"
    ]
  },
  {
    "slug": "monta-monta-app-vulnerabilities-enable-unauthorize-431bed",
    "title": "Monta monta.app Vulnerabilities Enable Unauthorized Administrative Control and Denial-of-Service",
    "summary": "The Monta monta.app charging station software has multiple critical vulnerabilities (CVE-2026-95102, CVE-2026-97363, CVE-2026-97212, CVE-2026-93474) that allow attackers to gain administrative control or launch denial‑of‑service attacks. WebSocket endpoints lack authentication, enabling exploitation. Patching is required to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-274-02",
    "publishedAt": "2026-10-01T12:00:00.000Z",
    "cves": [
      "CVE-2026-95102",
      "CVE-2026-97363",
      "CVE-2026-97212",
      "CVE-2026-93474"
    ],
    "additionalSources": [],
    "aliases": [
      "monta-monta-app-vulnerabilities-enable-unauthorize",
      "article-431bed",
      "431bed",
      "monta-monta-app-vulnerabilities-enable-unauthorized-administ"
    ]
  },
  {
    "slug": "financial-services-companies-discuss-modernizing-s-40d97b",
    "title": "Financial Services Companies Discuss Modernizing Software Supply Chain",
    "summary": "Security leaders in banks, insurers, and asset managers debate how to eliminate supply‑chain vulnerabilities. Engineering teams outline platform upgrades, while testing budgets and change‑freeze schedules create delays. The result is often an exception, compensating control, or postponed date, highlighting the challenge of modernizing supply chains.",
    "category": "Policy",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/how-financial-services-companies-can.html",
    "publishedAt": "2026-10-01T11:45:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "financial-services-companies-discuss-modernizing-s",
      "article-40d97b",
      "40d97b",
      "financial-services-companies-discuss-modernizing-software-su"
    ]
  },
  {
    "slug": "microsoft-enables-windows-settings-backup-by-defau-3f99e2",
    "title": "Microsoft Enables Windows Settings Backup by Default for Enterprise Systems",
    "summary": "Microsoft has activated Windows settings backup and restore on all Microsoft Entra‑joined or hybrid‑joined enterprise systems upgraded to Windows 11 26H2. The feature automatically backs up user settings and can restore them, improving configuration resilience and simplifying recovery after device changes or resets.",
    "category": "Policy",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-enables-windows-settings-backup-by-default-for-orgs/",
    "publishedAt": "2026-10-01T11:14:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-enables-windows-settings-backup-by-defau",
      "article-3f99e2",
      "3f99e2",
      "microsoft-enables-windows-settings-backup-by-default-for-ent"
    ]
  },
  {
    "slug": "treasury-blacklists-atm-malware-developer-tren-de-5102fc",
    "title": "Treasury Blacklists ATM Malware Developer Tren de Aragua",
    "summary": "The U.S. Treasury has blacklisted Tren de Aragua, the developer behind an ATM jackpotting malware network. The action follows investigations into the developer’s scheme to hijack ATMs for illicit cash withdrawals. The blacklist aims to curb further criminal activity and protect banking infrastructure.",
    "category": "Malware",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/treasury-blacklists-most-wanted-atm-malware-developer-and-his-network/",
    "publishedAt": "2026-10-01T10:51:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "treasury-blacklists-atm-malware-developer-tren-de",
      "article-5102fc",
      "5102fc",
      "treasury-blacklists-atm-malware-developer-tren-de-aragua"
    ]
  },
  {
    "slug": "openai-disrupts-moonshot-ai-reasoning-extraction-c-31c88f",
    "title": "OpenAI Disrupts Moonshot AI Reasoning Extraction Campaign",
    "summary": "OpenAI identified and disrupted a coordinated distillation campaign targeting its AI models to illicitly extract protected reasoning. The activity, traced back to July, was linked to individuals associated with Moonshot AI, a Beijing-based Chinese company. OpenAI’s intervention halted the campaign and protected model integrity.",
    "category": "Policy",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/openai-disrupts-reasoning-extraction.html",
    "publishedAt": "2026-10-01T10:42:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-disrupts-moonshot-ai-reasoning-extraction-c",
      "article-31c88f",
      "31c88f",
      "openai-disrupts-moonshot-ai-reasoning-extraction-campaign"
    ]
  },
  {
    "slug": "pentagon-personnel-records-breached-3-million-stol-31578d",
    "title": "Pentagon Personnel Records Breached, 3 Million+ Stolen",
    "summary": "Hackers breached the Pentagon’s Defense Manpower Data Center, stealing personal records of over three million military personnel. The breach exposed sensitive HR data, prompting the Pentagon to notify affected service members and initiate investigations into the unauthorized access.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-breach-pentagon-human-resources-management-system-steal-data-of-nearly-3-million-people/",
    "publishedAt": "2026-10-01T09:44:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pentagon-personnel-records-breached-3-million-stol",
      "article-31578d",
      "31578d",
      "pentagon-personnel-records-breached-3-million-stolen"
    ]
  },
  {
    "slug": "blackfog-launches-adx-vision-2-0-for-agentic-ai-go-3ed712",
    "title": "BlackFog Launches ADX Vision 2.0 for Agentic AI Governance",
    "summary": "BlackFog has released ADX Vision 2.0, a new platform that extends its AI security suite to protect and govern generative and agentic AI usage within enterprises. The solution offers prompt protection, governance controls, and monitoring to mitigate risks such as prompt injection, unauthorized data exposure, and decision‑making errors by AI agents.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/01/blackfog-adx-vision-2-0/",
    "publishedAt": "2026-10-01T07:25:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "blackfog-launches-adx-vision-2-0-for-agentic-ai-go",
      "article-3ed712",
      "3ed712",
      "blackfog-launches-adx-vision-2-0-for-agentic-ai-governance"
    ]
  },
  {
    "slug": "apple-coregraphics-cve-2026-86950-exploited-via-ma-2623b9",
    "title": "Apple CoreGraphics CVE-2026-86950 Exploited via Malicious PDF",
    "summary": "Security researchers released a proof‑of‑concept for CVE-2026-86950, a memory‑corruption flaw in Apple CoreGraphics. A crafted PDF with an embedded font can crash unpatched iPhones and Macs. The vulnerability triggers a crash, not code execution, and is not yet confirmed in the wild.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/apple-coregraphics-poc-emerges-as.html",
    "publishedAt": "2026-10-01T05:54:41.000Z",
    "cves": [
      "CVE-2026-86950"
    ],
    "additionalSources": [],
    "aliases": [
      "apple-coregraphics-cve-2026-86950-exploited-via-ma",
      "article-2623b9",
      "2623b9",
      "apple-coregraphics-cve-2026-86950-exploited-via-malicious-pd"
    ]
  },
  {
    "slug": "screenconnect-client-abused-by-attackers-57dd7a",
    "title": "ScreenConnect Client Abused by Attackers",
    "summary": "Threat actors are exploiting the ScreenConnect client, a legitimate remote‑access tool, to conduct attacks. The misuse involves leveraging the software’s legitimate features for malicious purposes, potentially enabling unauthorized remote sessions and data exfiltration. No specific vulnerability or CVE is cited.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33388",
    "publishedAt": "2026-10-01T05:32:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "screenconnect-client-abused-by-attackers",
      "article-57dd7a",
      "57dd7a"
    ]
  },
  {
    "slug": "ai-in-soc-may-reduce-entry-level-job-opportunities-4b5fce",
    "title": "AI in SOC May Reduce Entry-Level Job Opportunities",
    "summary": "The integration of AI tools in security operations centers automates repetitive tasks such as phishing detection and malware pattern recognition, potentially decreasing the need for junior analysts. This trend could make entry‑level SOC positions harder to secure as automation replaces routine analysis work.",
    "category": "Malware",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/01/ai-soc-entry-jobs/",
    "publishedAt": "2026-10-01T05:30:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-in-soc-may-reduce-entry-level-job-opportunities",
      "article-4b5fce",
      "4b5fce"
    ]
  },
  {
    "slug": "bitget-confirms-third-party-zero-day-used-in-387-5-34baad",
    "title": "Bitget Confirms Third-Party Zero-Day Used in $387.5 Million Crypto Theft",
    "summary": "Bitget confirmed attackers stole $387.5 million by exploiting a zero‑day flaw in third‑party security products. SlowMist investigation identified malicious activity and a customized tool used by the attacker. No CVE ID was disclosed.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/10/bitget-confirms-third-party-zero-day.html",
    "publishedAt": "2026-10-01T05:21:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bitget-confirms-third-party-zero-day-used-in-387-5",
      "article-34baad",
      "34baad",
      "bitget-confirms-third-party-zero-day-used-in-387-5-million-c"
    ]
  },
  {
    "slug": "ai-identified-vulnerabilities-rapidly-exploited-72cbb8",
    "title": "AI-Identified Vulnerabilities Rapidly Exploited",
    "summary": "Researchers found that attackers quickly exploit vulnerabilities discovered by AI agents, with exploitation occurring within four days of public disclosure. Analysis of January 2025 to August 2026 data shows disclosure rates doubled, yet exploitation remains rare, highlighting the speed at which high‑profile flaws are targeted.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/01/google-ai-discovered-vulnerabilities-remote-code-execution/",
    "publishedAt": "2026-10-01T05:00:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-identified-vulnerabilities-rapidly-exploited",
      "article-72cbb8",
      "72cbb8"
    ]
  },
  {
    "slug": "crowdstrike-expands-federal-soc-modernization-with-3f8510",
    "title": "CrowdStrike Expands Federal SOC Modernization with CISA‑Funded SIEMaaS",
    "summary": "CrowdStrike has announced an expansion of its federal Security Operations Center modernization program, adding SIEM‑as‑a‑Service (SIEMaaS) capabilities funded by the Cybersecurity and Infrastructure Security Agency (CISA). The move aims to enhance threat detection and response for U.S. federal agencies by providing scalable, cloud‑based security information and event management services.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/crowdstrike-expands-federal-soc-modernization-via-cisa-siemaas/",
    "publishedAt": "2026-10-01T05:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-expands-federal-soc-modernization-with",
      "article-3f8510",
      "3f8510",
      "crowdstrike-expands-federal-soc-modernization-with-cisa-fund"
    ]
  },
  {
    "slug": "employment-scam-victims-tripled-at-financial-firms-3d6cca",
    "title": "Employment Scam Victims Tripled at Financial Firms in 21 Countries",
    "summary": "Employment‑style phishing scams targeting employees at more than 370 banks and financial institutions in 21 countries surged 258% over the past year, according to fraud‑detection vendor BioCatch. The rise outpaced all other scam types, with total reported scams increasing 35% across the same institutions.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/01/employment-scam-victims-research/",
    "publishedAt": "2026-10-01T04:30:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "employment-scam-victims-tripled-at-financial-firms",
      "article-3d6cca",
      "3d6cca",
      "employment-scam-victims-tripled-at-financial-firms-in-21-cou"
    ]
  },
  {
    "slug": "proton-drive-offers-end-to-end-encrypted-cloud-sto-221117",
    "title": "Proton Drive Offers End‑to‑End Encrypted Cloud Storage and Collaboration",
    "summary": "Proton Drive provides secure cloud storage, file synchronization, and backup with end‑to‑end encryption. It includes Proton Docs and Proton Sheets for encrypted document and spreadsheet collaboration, available via web, desktop, and mobile apps, plus a command‑line interface for Windows, macOS, and Linux.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/01/product-showcase-proton-drive/",
    "publishedAt": "2026-10-01T03:48:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "proton-drive-offers-end-to-end-encrypted-cloud-sto",
      "article-221117",
      "221117",
      "proton-drive-offers-end-to-end-encrypted-cloud-storage-and-c"
    ]
  },
  {
    "slug": "deepmind-unveils-synthid-bio-watermark-for-ai-desi-384195",
    "title": "DeepMind Unveils SynthID Bio Watermark for AI‑Designed Proteins",
    "summary": "Google DeepMind has developed SynthID Bio, a watermark that embeds a signature into the amino acid sequence and 3D coordinates of AI‑designed protein binders without affecting their function. The watermark can be verified on the physical protein after synthesis, targeting DNA‑synthesis screening providers.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/10/01/synthid-bio-watermark/",
    "publishedAt": "2026-10-01T03:31:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "deepmind-unveils-synthid-bio-watermark-for-ai-desi",
      "article-384195",
      "384195",
      "deepmind-unveils-synthid-bio-watermark-for-ai-designed-prote"
    ]
  },
  {
    "slug": "isc-stormcast-podcast-released-for-october-1-2026-57dd7a",
    "title": "ISC Stormcast Podcast Released for October 1, 2026",
    "summary": "The SANS Internet Storm Center released its weekly ISC Stormcast podcast for Thursday, October 1, 2026. The episode is available via the ISC website and is licensed under Creative Commons Attribution-Noncommercial 3.0 United States.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33386",
    "publishedAt": "2026-10-01T02:00:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isc-stormcast-podcast-released-for-october-1-2026",
      "article-57dd7a",
      "57dd7a"
    ]
  },
  {
    "slug": "over-543-000-github-secrets-exposed-in-large-leak-0a4b2a",
    "title": "Over 543,000 GitHub Secrets Exposed in Large Leak Study",
    "summary": "A Truffle Security audit uncovered 543,699 valid secrets on GitHub, with a median lifespan of 784 days. Nearly 37% of the leaks occurred after GitHub enabled Push Protection, highlighting ongoing exposure risks for developers and organizations relying on GitHub for code hosting.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/543k-valid-secrets-exposed-public-github-repositories",
    "publishedAt": "2026-10-01T00:50:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "over-543-000-github-secrets-exposed-in-large-leak",
      "article-0a4b2a",
      "0a4b2a",
      "over-543-000-github-secrets-exposed-in-large-leak-study"
    ]
  },
  {
    "slug": "ftc-investigating-openai-and-anthropic-over-possib-40c7f5",
    "title": "FTC Investigating OpenAI and Anthropic Over Possible Consumer Risks",
    "summary": "The Federal Trade Commission has opened an investigation into OpenAI and Anthropic, citing potential risks to consumers. The FTC confirmed the inquiry but has not released further details. The probe focuses on how the companies’ AI services may affect user privacy and safety.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/ftc-is-investigating-openai-and-anthropic-over-possible-risks-to-consumers/",
    "publishedAt": "2026-09-30T23:43:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ftc-investigating-openai-and-anthropic-over-possib",
      "article-40c7f5",
      "40c7f5",
      "ftc-investigating-openai-and-anthropic-over-possible-consume"
    ]
  },
  {
    "slug": "russian-state-hackers-deploy-cosmicpulse-backdoor-274a52",
    "title": "Russian State Hackers Deploy CosmicPulse Backdoor via RedFlick Technique",
    "summary": "Russian state actor Star Blizzard has introduced a new malware installation method called RedFlick to deploy its CosmicPulse backdoor. The technique allows the actor to push malicious code onto targeted systems, potentially enabling persistent access and data exfiltration. No public patch or mitigation is currently available.",
    "category": "Malware",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/russian-state-hackers-use-new-redflick-technique-to-push-malware/",
    "publishedAt": "2026-09-30T20:34:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russian-state-hackers-deploy-cosmicpulse-backdoor",
      "article-274a52",
      "274a52",
      "russian-state-hackers-deploy-cosmicpulse-backdoor-via-redfli"
    ]
  },
  {
    "slug": "automakers-share-connected-car-data-with-third-par-387b72",
    "title": "Automakers Share Connected-Car Data with Third-Party Advertisers",
    "summary": "A study shows that automakers routinely provide personally identifiable connected-car data to a network of large corporations involved in advertising. The data sharing exposes drivers to extensive tracking and profiling by third parties, raising privacy concerns about the use of vehicle telemetry for targeted marketing.",
    "category": "Policy",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/automakers-routinely-share-connected-car-data-third-parties",
    "publishedAt": "2026-09-30T20:32:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "automakers-share-connected-car-data-with-third-par",
      "article-387b72",
      "387b72",
      "automakers-share-connected-car-data-with-third-party-adverti"
    ]
  },
  {
    "slug": "pentagon-issues-cyber-command-notice-amid-suicide-2a73f8",
    "title": "Pentagon Issues Cyber Command Notice Amid Suicide Death Reports",
    "summary": "Following reports of multiple suicide deaths, the Pentagon’s assistant secretary for cyber policy issued a memo demanding specific actions from U.S. Cyber Command leadership. The notice highlights concerns over cyber-related incidents and calls for enhanced oversight and response measures within the command.",
    "category": "Policy",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/cyber-command-suicide-deaths-pentagon-memo",
    "publishedAt": "2026-09-30T19:35:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pentagon-issues-cyber-command-notice-amid-suicide",
      "article-2a73f8",
      "2a73f8",
      "pentagon-issues-cyber-command-notice-amid-suicide-death-repo"
    ]
  },
  {
    "slug": "google-reports-10-000-monthly-vulnerability-disclo-138419",
    "title": "Google Reports 10,000 Monthly Vulnerability Disclosures, AI Accelerates Exploitation",
    "summary": "Google researchers warned that vulnerability disclosures have doubled to over 10,000 per month, with artificial intelligence driving the increase. The surge highlights growing exploitation activity, though no specific vulnerabilities or exploits are named. The trend underscores the need for continuous patching and monitoring.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/google-vulnerabilities-cyberattacks-ai",
    "publishedAt": "2026-09-30T19:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-reports-10-000-monthly-vulnerability-disclo",
      "article-138419",
      "138419",
      "google-reports-10-000-monthly-vulnerability-disclosures-ai-a"
    ]
  },
  {
    "slug": "ai-boosts-soc-satisfaction-to-91-while-entry-barri-7da85a",
    "title": "AI Boosts SOC Satisfaction to 91% While Entry Barriers Rise",
    "summary": "Swimlane research shows that AI-driven detection and response has raised overall SOC satisfaction to 91%. However, nearly half of security professionals find entry into the field harder, and one in four say AI limits skill development. The study highlights a paradox in the evolving security workforce.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-careers/ai-reshapes-soc-career-ladder",
    "publishedAt": "2026-09-30T18:56:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-boosts-soc-satisfaction-to-91-while-entry-barri",
      "article-7da85a",
      "7da85a",
      "ai-boosts-soc-satisfaction-to-91-while-entry-barriers-rise"
    ]
  },
  {
    "slug": "wizos-helm-charts-offer-hardened-kubernetes-deploy-1c9332",
    "title": "WizOS Helm Charts Offer Hardened Kubernetes Deployments",
    "summary": "WizOS introduces signed, CVE‑scanned Helm charts that harden Kubernetes supply chains. The charts eliminate hidden CI/CD risks and unmaintained dependencies, providing a secure, seamless deployment path for Kubernetes environments.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/wizos-helm-charts",
    "publishedAt": "2026-09-30T15:52:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wizos-helm-charts-offer-hardened-kubernetes-deploy",
      "article-1c9332",
      "1c9332",
      "wizos-helm-charts-offer-hardened-kubernetes-deployments"
    ]
  },
  {
    "slug": "cisa-warns-of-critical-pre-auth-rce-in-mikrotik-ro-5bdc14",
    "title": "CISA Warns of Critical Pre-Auth RCE in MikroTik RouterOS",
    "summary": "CISA has identified a critical pre-authentication remote code execution flaw in MikroTik RouterOS that can allow attackers to execute arbitrary code or cause a denial‑of‑service. The vulnerability affects all RouterOS versions and requires no user interaction. MikroTik has released patches; users should update immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/cisa-warns-of-critical-pre-auth-rce-flaw-in-mikrotik-routeros/",
    "publishedAt": "2026-09-30T15:49:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-warns-of-critical-pre-auth-rce-in-mikrotik-ro",
      "article-5bdc14",
      "5bdc14",
      "cisa-warns-of-critical-pre-auth-rce-in-mikrotik-routeros"
    ]
  },
  {
    "slug": "ai-co-workers-threaten-existing-security-models-537447",
    "title": "AI Co‑workers Threaten Existing Security Models",
    "summary": "Persistent AI coworkers can operate continuously with standing access, exposing identity risks that current security models were not designed to handle. Token Security recommends giving each agent its own identity, owner, scoped permissions, and lifecycle controls to mitigate these risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/ais-third-wave-coworkers-break-the-security-model-that-worked-for-agents/",
    "publishedAt": "2026-09-30T14:01:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-co-workers-threaten-existing-security-models",
      "article-537447",
      "537447"
    ]
  },
  {
    "slug": "cloudflare-impact-reaches-100-million-in-donations-56c6f4",
    "title": "Cloudflare Impact Reaches $100 Million in Donations",
    "summary": "Cloudflare’s Impact program has reached a $100 million milestone in donated services, shielding thousands of entities—including journalists, civil society groups, state and local governments, election bodies, and public schools—from cyberattacks. The initiative expands protection for vulnerable organizations worldwide in the coming months.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/100-million-donations/",
    "publishedAt": "2026-09-30T13:01:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-impact-reaches-100-million-in-donations",
      "article-56c6f4",
      "56c6f4"
    ]
  },
  {
    "slug": "identify-ai-model-overuse-with-user-insights-6f904c",
    "title": "Identify AI model overuse with User Insights",
    "summary": "AI Gateway User Insights now tracks task, model, turn, and user categories to help teams monitor AI adoption and optimize model usage. The feature is free for AI Gateway users and provides detailed usage analytics for better decision making.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/ai-model-overuse-user-insights/",
    "publishedAt": "2026-09-30T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "identify-ai-model-overuse-with-user-insights",
      "article-6f904c",
      "6f904c"
    ]
  },
  {
    "slug": "chrome-and-firefox-patch-over-100-vulnerabilities-6677ea",
    "title": "Chrome and Firefox Patch Over 100 Vulnerabilities, Including RCE Flaws",
    "summary": "Chrome and Firefox updates address more than 100 security issues, some permitting remote attackers to execute arbitrary code or escape browser sandboxes. The patches close potential exploitation vectors that could lead to system compromise. Users should install the latest browser versions to maintain protection.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/chrome-firefox-updates-patch-over-100-vulnerabilities/",
    "publishedAt": "2026-09-30T12:16:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-and-firefox-patch-over-100-vulnerabilities",
      "article-6677ea",
      "6677ea",
      "chrome-and-firefox-patch-over-100-vulnerabilities-including-"
    ]
  },
  {
    "slug": "us-focused-phishing-campaign-steals-microsoft-365-1fba45",
    "title": "US‑Focused Phishing Campaign Steals Microsoft 365 Sessions and Deploys RMM Tools",
    "summary": "Researchers traced a phishing campaign targeting US organizations that stole Microsoft 365 session tokens and installed remote‑access tools. The attackers used the stolen sessions to gain broader account compromise and potential fraud. Organizations should monitor for unusual RMM tool activity and enforce MFA on Microsoft 365 accounts.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/09/us-focused-csuite-phishing-steals.html",
    "publishedAt": "2026-09-30T10:45:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "us-focused-phishing-campaign-steals-microsoft-365",
      "article-1fba45",
      "1fba45",
      "us-focused-phishing-campaign-steals-microsoft-365-sessions-a"
    ]
  },
  {
    "slug": "openinfra-europe-s-jfrog-artifactory-compromised-v-4cd905",
    "title": "OpenInfra Europe’s JFrog Artifactory Compromised via CVE-2026-82329",
    "summary": "Attackers breached a self-hosted JFrog Artifactory instance operated by OpenInfra Europe, exploiting CVE-2026-82329. Users who downloaded or installed artifacts from https://artifactory.nordix.org/ between August 28 and September 15, 2026 should immediately stop using them, remove them from pipelines, and treat the packages as potentially compromised.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/30/openinfra-jfrog-artifactory-instance-compromised/",
    "publishedAt": "2026-09-30T10:39:26.000Z",
    "cves": [
      "CVE-2026-82329"
    ],
    "additionalSources": [],
    "aliases": [
      "openinfra-europe-s-jfrog-artifactory-compromised-v",
      "article-4cd905",
      "4cd905",
      "openinfra-europe-s-jfrog-artifactory-compromised-via-cve-202"
    ]
  },
  {
    "slug": "openssl-fixes-high-severity-dtls-heap-memory-leak-15abd8",
    "title": "OpenSSL Fixes High‑Severity DTLS Heap Memory Leak",
    "summary": "OpenSSL released a patch for a high‑severity flaw that could leak heap memory or crash applications during DTLS handshakes. The vulnerability occurs when a resend is triggered while a large handshake message is partially processed, potentially exposing sensitive data over UDP traffic.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/09/openssl-fixes-high-severity-dtls-flaw.html",
    "publishedAt": "2026-09-30T08:09:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openssl-fixes-high-severity-dtls-heap-memory-leak",
      "article-15abd8",
      "15abd8"
    ]
  },
  {
    "slug": "former-us-air-force-members-sentenced-for-million-16c94c",
    "title": "Former US Air Force Members Sentenced for Million-Dollar Business Email Compromise Scheme",
    "summary": "Two former Air Force personnel, Chijioke Timothy Odimegwu and Harafat Mogaji, were sentenced to 189 months for running a BEC and phishing operation that targeted U.S. businesses. They sent spam emails to steal employee usernames and passwords, compromising corporate email accounts.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/30/air-force-members-sentenced-bec-phishing/",
    "publishedAt": "2026-09-30T07:42:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "former-us-air-force-members-sentenced-for-million",
      "article-16c94c",
      "16c94c",
      "former-us-air-force-members-sentenced-for-million-dollar-bus"
    ]
  },
  {
    "slug": "south-africa-seeks-assistance-after-ransomware-too-595911",
    "title": "South Africa Seeks Assistance After Ransomware Toolkit Hits Air Traffic Control Network",
    "summary": "A ransomware toolkit was installed on at least one operational South African air traffic control network, prompting authorities to seek external help. The attack targeted aviation infrastructure, potentially disrupting air traffic management systems and raising concerns about critical national infrastructure security.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/south-africa-help-cyberattack-air-traffic-control",
    "publishedAt": "2026-09-30T07:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "south-africa-seeks-assistance-after-ransomware-too",
      "article-595911",
      "595911",
      "south-africa-seeks-assistance-after-ransomware-toolkit-hits-"
    ]
  },
  {
    "slug": "security-tools-now-scan-claude-enterprise-chats-fo-7a7236",
    "title": "Security Tools Now Scan Claude Enterprise Chats for Sensitive Data",
    "summary": "Over 100 security and compliance vendors now integrate with the Claude Compliance API, allowing companies to monitor Claude Enterprise activity. The feed captures conversations, uploaded files, projects, cowork and code sessions, prompts, responses, and tool calls, helping detect and protect sensitive information.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/30/claude-compliance-api-integrations/",
    "publishedAt": "2026-09-30T06:31:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "security-tools-now-scan-claude-enterprise-chats-fo",
      "article-7a7236",
      "7a7236",
      "security-tools-now-scan-claude-enterprise-chats-for-sensitiv"
    ]
  },
  {
    "slug": "owasp-noir-revealed-as-open-source-static-analysis-6c7219",
    "title": "OWASP Noir Revealed as Open-Source Static Analysis Tool",
    "summary": "OWASP Noir is an open-source static analysis tool that scans application source code to list exposed endpoints, including paths, HTTP methods, parameters, headers, and cookies, with file and line references. It highlights shadow APIs, deprecated routes, and undocumented handlers, aiding developers in identifying hidden or unused endpoints.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/30/owasp-noir-open-source-static-analysis-tool/",
    "publishedAt": "2026-09-30T05:30:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "owasp-noir-revealed-as-open-source-static-analysis",
      "article-6c7219",
      "6c7219",
      "owasp-noir-revealed-as-open-source-static-analysis-tool"
    ]
  },
  {
    "slug": "eu-cyber-resilience-act-imposes-container-and-kube-1c1b66",
    "title": "EU Cyber Resilience Act Imposes Container and Kubernetes Security Requirements",
    "summary": "The EU Cyber Resilience Act (CRA) mandates cybersecurity requirements for products with digital elements sold in the EU, effective Dec. 10, 2024. Reporting obligations begin Sept. 11, 2026, with full enforcement Dec. 11, 2027. The regulation introduces new requirements for teams working with containers and Kubernetes throughout the application lifecycle.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/30/rapidfort-cra-container-compliance/",
    "publishedAt": "2026-09-30T05:00:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "eu-cyber-resilience-act-imposes-container-and-kube",
      "article-1c1b66",
      "1c1b66",
      "eu-cyber-resilience-act-imposes-container-and-kubernetes-sec"
    ]
  },
  {
    "slug": "bh-consulting-launches-bh-haven-sme-cybersecurity-537398",
    "title": "BH Consulting Launches BH Haven SME Cybersecurity Service with AI Support",
    "summary": "BH Consulting has introduced BH Haven, a continuous service for Irish SMEs that pairs specialist consultants with a proprietary AI tool for analysis, evidence review, regulatory mapping and reporting. The offering prioritises Ireland, the UK, Nordic and other EU markets, helping clients comply with GDPR, NIS2 and the EU AI Act.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/30/bh-haven-sme-cybersecurity-service/",
    "publishedAt": "2026-09-30T04:30:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bh-consulting-launches-bh-haven-sme-cybersecurity",
      "article-537398",
      "537398",
      "bh-consulting-launches-bh-haven-sme-cybersecurity-service-wi"
    ]
  },
  {
    "slug": "most-critical-and-high-vulnerabilities-remain-unpa-3393d9",
    "title": "Most Critical and High Vulnerabilities Remain Unpatched Over 90 Days",
    "summary": "Detectify examined 1,293 customers across the US, UK, and Nordics, finding that 97% of critical and 92% of high‑severity flaws in the Nordics, and 86% in the US, had been exposed for more than 90 days. The study highlights a widespread lag in patching internet‑facing systems.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/30/research-unpatched-vulnerabilities-backlog/",
    "publishedAt": "2026-09-30T04:00:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "most-critical-and-high-vulnerabilities-remain-unpa",
      "article-3393d9",
      "3393d9",
      "most-critical-and-high-vulnerabilities-remain-unpatched-over"
    ]
  },
  {
    "slug": "cloudflare-to-issue-post-quantum-certificates-in-e-d85720",
    "title": "Cloudflare to Issue Post-Quantum Certificates in Early 2027",
    "summary": "Cloudflare announced it will become a public certificate authority, issuing both conventional and post-quantum Merkle Tree Certificates (MTCs). Production issuance of MTCs is scheduled for Q1 2027, aiming to diversify the web’s certificate ecosystem dominated by a few major CAs.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/30/cloudflare-certificate-authority-2027/",
    "publishedAt": "2026-09-30T03:09:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-to-issue-post-quantum-certificates-in-e",
      "article-d85720",
      "d85720",
      "cloudflare-to-issue-post-quantum-certificates-in-early-2027"
    ]
  },
  {
    "slug": "terminalfix-and-lorem-ipsum-loader-enable-covert-t-5c4536",
    "title": "TerminalFix and Lorem Ipsum Loader Enable Covert Tunneling",
    "summary": "The malware family TerminalFix and its component Lorem Ipsum Loader have been observed creating covert tunnels to exfiltrate data. The activity is part of a broader campaign that previously used a different delivery mechanism, indicating ongoing threat actor operations.",
    "category": "Malware",
    "severity": "MEDIUM",
    "source": "Sophos Threat Research",
    "sourceUrl": "https://www.sophos.com/en-us/blog/terminalfix-and-lorem-ipsum-loader-enable-covert-tunneling",
    "publishedAt": "2026-09-30T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "terminalfix-and-lorem-ipsum-loader-enable-covert-t",
      "article-5c4536",
      "5c4536",
      "terminalfix-and-lorem-ipsum-loader-enable-covert-tunneling"
    ]
  },
  {
    "slug": "paragon-spyware-firm-plans-nasdaq-ipo-103cb0",
    "title": "Paragon Spyware Firm Plans Nasdaq IPO",
    "summary": "Paragon, a controversial spyware company, intends to go public by year’s end under the REDLattice umbrella. The firm will begin trading on Nasdaq once the deal closes. No security incident or breach is reported in the announcement.",
    "category": "Malware",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/controversial-spyware-firm-paragon-to-go-public",
    "publishedAt": "2026-09-29T20:35:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "paragon-spyware-firm-plans-nasdaq-ipo",
      "article-103cb0",
      "103cb0"
    ]
  },
  {
    "slug": "french-tax-administration-data-theft-via-stolen-st-721c64",
    "title": "French Tax Administration Data Theft via Stolen Staff Passwords",
    "summary": "An attacker used stolen staff passwords to access tax data of hundreds of thousands of taxpayers and businesses in France during June and July. The breach went undetected for seven weeks, with no sophisticated techniques, exposing sensitive personal and corporate tax information. No public fix is available; the incident highlights weak credential management.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/09/french-tax-data-theft-using-stolen.html",
    "publishedAt": "2026-09-29T17:47:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "french-tax-administration-data-theft-via-stolen-st",
      "article-721c64",
      "721c64",
      "french-tax-administration-data-theft-via-stolen-staff-passwo"
    ]
  },
  {
    "slug": "darpa-selects-xint-to-use-ai-in-securing-military-6d2c27",
    "title": "DARPA Selects Xint to Use AI in Securing Military Messaging Apps",
    "summary": "DARPA has chosen Xint, the winner of the AIxCC competition, to analyze code and binaries of military messaging apps for vulnerabilities. The AI technology may also be offered to commercial customers to enhance software security.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/darpa-selects-xint-to-use-ai-in-securing-military-messaging-apps/",
    "publishedAt": "2026-09-29T17:24:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "darpa-selects-xint-to-use-ai-in-securing-military",
      "article-6d2c27",
      "6d2c27",
      "darpa-selects-xint-to-use-ai-in-securing-military-messaging-"
    ]
  },
  {
    "slug": "new-spectre-v2-variant-enables-rapid-linux-root-ha-7390a7",
    "title": "New Spectre v2 Variant Enables Rapid Linux Root Hash Extraction on Intel CPUs",
    "summary": "A newly discovered Branch Target Reuse (BTR) variant of Spectre v2 can extract root password hashes from Intel‑based Linux systems in 3‑5 minutes. The attack targets the CPU micro‑architecture, bypassing kernel protections, and requires only local execution on the affected machine.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/new-spectre-v2-attack-variant-leaks-linux-root-password-hash-in-minutes/",
    "publishedAt": "2026-09-29T17:10:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "new-spectre-v2-variant-enables-rapid-linux-root-ha",
      "article-7390a7",
      "7390a7",
      "new-spectre-v2-variant-enables-rapid-linux-root-hash-extract"
    ]
  },
  {
    "slug": "storm-3068-exploits-compromised-identity-for-cloud-3eb4a2",
    "title": "Storm-3068 Exploits Compromised Identity for Cloud Access",
    "summary": "A compromised identity was leveraged by the threat actor Storm-3068 to gain broader cloud access, affecting identities, pipelines, and infrastructure. The incident highlights the need for stronger identity protection and monitoring to prevent lateral movement within cloud environments.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/09/29/beyond-source-code-a-path-to-the-keys-to-the-kingdom/",
    "publishedAt": "2026-09-29T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "storm-3068-exploits-compromised-identity-for-cloud",
      "article-3eb4a2",
      "3eb4a2",
      "storm-3068-exploits-compromised-identity-for-cloud-access"
    ]
  },
  {
    "slug": "ietf-introduces-transcript-authentication-to-block-4485c0",
    "title": "IETF Introduces Transcript Authentication to Block Quantum Downgrade Attacks on IPsec",
    "summary": "Researchers identified a protocol flaw that allows quantum attackers to downgrade post‑quantum IPsec tunnels to classical cryptography. The IETF has adopted a transcript authentication extension to prevent such quantum downgrade attacks, strengthening IPsec’s resilience against future quantum threats.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/ipsec-downgrade-protection/",
    "publishedAt": "2026-09-29T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ietf-introduces-transcript-authentication-to-block",
      "article-4485c0",
      "4485c0",
      "ietf-introduces-transcript-authentication-to-block-quantum-d"
    ]
  },
  {
    "slug": "cloudflare-expands-threat-signals-to-all-accounts-ad238f",
    "title": "Cloudflare Expands Threat Signals to All Accounts",
    "summary": "Cloudflare now offers Threat Signals to every account, automatically parsing open-source threat reports, extracting structured indicators, and linking threat context to WAF rules via the Threat Events Platform. This enhances real-time threat visibility and simplifies rule creation for all users.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/threat-signals/",
    "publishedAt": "2026-09-29T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-expands-threat-signals-to-all-accounts",
      "article-ad238f",
      "ad238f"
    ]
  },
  {
    "slug": "cloudflare-introduces-application-profiles-for-pos-2333a1",
    "title": "Cloudflare Introduces Application Profiles for Positive Security",
    "summary": "Cloudflare’s Application Profiles learn normal HTTP request patterns and flag deviations, adding a positive security layer. By reducing attack surface, the feature helps counter AI‑generated payloads, improving protection against evolving web threats for all customers.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/application-profiles/",
    "publishedAt": "2026-09-29T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-introduces-application-profiles-for-pos",
      "article-2333a1",
      "2333a1",
      "cloudflare-introduces-application-profiles-for-positive-secu"
    ]
  },
  {
    "slug": "cloudflare-waf-tester-reveals-detection-gaps-1b2172",
    "title": "Cloudflare WAF Tester Reveals Detection Gaps",
    "summary": "Cloudflare built a WAF tester that adapts requests based on WAF responses, testing six attack categories on a staging environment. The tool uncovered gaps in the WAF’s detection logic, allowing certain attacks to pass. Cloudflare documented the missed detections and applied fixes to close the identified weaknesses.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/adaptive-ai-waf-testing/",
    "publishedAt": "2026-09-29T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-waf-tester-reveals-detection-gaps",
      "article-1b2172",
      "1b2172"
    ]
  },
  {
    "slug": "meta-gives-small-businesses-an-ai-agent-that-knows-2ca31d",
    "title": "Meta gives small businesses an AI agent that knows their work",
    "summary": "Meta introduces Muse for Small Business, an AI agent that integrates with Instagram analytics, Facebook Pages, and Meta ad accounts. The agent assists owners by automating tasks and providing context‑aware insights, helping streamline operations across the Meta ecosystem.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/29/meta-muse-for-small-business/",
    "publishedAt": "2026-09-29T12:45:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-gives-small-businesses-an-ai-agent-that-knows",
      "article-2ca31d",
      "2ca31d",
      "meta-gives-small-businesses-an-ai-agent-that-knows-their-wor"
    ]
  },
  {
    "slug": "viidure-dashcam-android-app-suffers-critical-vulne-431cd5",
    "title": "Viidure Dashcam Android App Suffers Critical Vulnerabilities Including CVE-2026-94204",
    "summary": "Affected Viidure Dashcam Android versions contain CVE‑2026‑94204, incorrect permission assignment, hard‑coded credentials, and a public‑read cloud storage bucket. These flaws let attackers access, modify, or delete sensitive user data and critical system files, potentially crippling the entire platform.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-272-07",
    "publishedAt": "2026-09-29T12:00:00.000Z",
    "cves": [
      "CVE-2026-94204"
    ],
    "additionalSources": [],
    "aliases": [
      "viidure-dashcam-android-app-suffers-critical-vulne",
      "article-431cd5",
      "431cd5",
      "viidure-dashcam-android-app-suffers-critical-vulnerabilities"
    ]
  },
  {
    "slug": "vivotek-camera-firmware-remote-command-execution-v-431cd5",
    "title": "VIVOTEK Camera Firmware Remote Command Execution Vulnerability",
    "summary": "A critical vulnerability (CVE-2026-22755) in VIVOTEK camera firmware allows attackers to achieve remote command execution with root privileges, potentially compromising the entire camera system. Affected models include V Series FD9187, FD9189, FD9365, FD9387, FD9389, FD9391, C Series FE9180, V Series FE9191, FE9382, FE9391, IB9365, IB9387, IB9389, IB939, IP9165, IP9171. Patching to the latest firmware is required.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-272-03",
    "publishedAt": "2026-09-29T12:00:00.000Z",
    "cves": [
      "CVE-2026-22755"
    ],
    "additionalSources": [],
    "aliases": [
      "vivotek-camera-firmware-remote-command-execution-v",
      "article-431cd5",
      "431cd5",
      "vivotek-camera-firmware-remote-command-execution-vulnerabili"
    ]
  },
  {
    "slug": "baicells-nova-430h-vulnerability-allows-malformed-431cd5",
    "title": "Baicells Nova 430H Vulnerability Allows Malformed Message Denial of Service",
    "summary": "An unauthenticated attacker within radio range can send a malformed uplink message with an invalid NAS payload to Baicells Nova 430H eNodeB, causing the device to forward it to the core network and trigger a signaling shutdown, resulting in denial of service. CVE-2026-96274 is the affected vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-272-04",
    "publishedAt": "2026-09-29T12:00:00.000Z",
    "cves": [
      "CVE-2026-96274"
    ],
    "additionalSources": [],
    "aliases": [
      "baicells-nova-430h-vulnerability-allows-malformed",
      "article-431cd5",
      "431cd5",
      "baicells-nova-430h-vulnerability-allows-malformed-message-de"
    ]
  },
  {
    "slug": "deepfakes-drive-board-prioritization-after-executi-673e00",
    "title": "Deepfakes Drive Board Prioritization After Executive Fall",
    "summary": "A 2026 Deepfake Readiness Index shows nearly 75% of security leaders have faced or suspect deepfake attacks, yet only 10% have dedicated defenses. Real‑time communications—phone calls, remote interviews, video meetings—are prime targets for AI impersonation, exposing organizations to identity fraud and operational risk.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/29/pindrop-enterprise-deepfake-attacks-report/",
    "publishedAt": "2026-09-29T11:59:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "deepfakes-drive-board-prioritization-after-executi",
      "article-673e00",
      "673e00",
      "deepfakes-drive-board-prioritization-after-executive-fall"
    ]
  },
  {
    "slug": "vietnamese-man-charged-in-16m-pig-butchering-crypt-2d2de2",
    "title": "Vietnamese Man Charged in $16M Pig Butchering Crypto Scam",
    "summary": "A Vietnamese national faces money‑laundering charges for orchestrating a pig‑butchering scheme that stole $16 million in cryptocurrency from a victim. The case highlights the growing threat of sophisticated financial fraud targeting crypto investors.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/vietnamese-man-charged-in-16-million-pig-butchering-crypto-scam/",
    "publishedAt": "2026-09-29T11:41:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vietnamese-man-charged-in-16m-pig-butchering-crypt",
      "article-2d2de2",
      "2d2de2",
      "vietnamese-man-charged-in-16m-pig-butchering-crypto-scam"
    ]
  },
  {
    "slug": "four-cyber-threats-harboring-big-plans-for-the-fut-575f3e",
    "title": "Four Cyber Threats Harboring Big Plans for the Future",
    "summary": "SecurityWeek highlights AI, supply‑chain exposure, quantum computing, and geopolitical conflict as emerging threats that test security programs. The article urges organizations to integrate disruption preparedness into daily operations to mitigate future risks.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/four-cyber-threats-harboring-big-plans-for-the-future/",
    "publishedAt": "2026-09-29T11:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "four-cyber-threats-harboring-big-plans-for-the-fut",
      "article-575f3e",
      "575f3e",
      "four-cyber-threats-harboring-big-plans-for-the-future"
    ]
  },
  {
    "slug": "cybersecurity-hiring-practices-exclude-junior-tale-1c5dd2",
    "title": "Cybersecurity Hiring Practices Exclude Junior Talent",
    "summary": "A recent report shows that most cybersecurity firms limit entry-level roles, with over 80% of executives using full training budgets and 70% lacking junior positions. Short training sessions are suggested to accelerate new hires’ productivity and skill development across tools.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/29/skillbit-cybersecurity-micro-training-trends-report/",
    "publishedAt": "2026-09-29T11:00:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cybersecurity-hiring-practices-exclude-junior-tale",
      "article-1c5dd2",
      "1c5dd2",
      "cybersecurity-hiring-practices-exclude-junior-talent"
    ]
  },
  {
    "slug": "palo-alto-networks-and-nvidia-collaborate-to-tight-300346",
    "title": "Palo Alto Networks and NVIDIA Collaborate to Tighten AI Agent Controls",
    "summary": "Palo Alto Networks and NVIDIA collaborate to tighten control over AI agents, focusing on agent activity, network traffic, and identity management via NVIDIA’s Open Agent Safety Platform. The partnership aims to limit AI agents’ code writing, data access, and software use, enhancing security oversight in enterprise environments.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/29/palo-alto-networks-nvidia-ai-agent-security/",
    "publishedAt": "2026-09-29T10:21:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "palo-alto-networks-and-nvidia-collaborate-to-tight",
      "article-300346",
      "300346",
      "palo-alto-networks-and-nvidia-collaborate-to-tighten-ai-agen"
    ]
  },
  {
    "slug": "unit-42-releases-opertraitor-tool-to-audit-kuberne-4d46cb",
    "title": "Unit 42 Releases OperTraitor Tool to Audit Kubernetes Operator Privileges",
    "summary": "Unit 42’s OperTraitor tool audits Kubernetes operators to identify excessive RBAC permissions and secure non-human identities. By scanning operator privileges, it highlights privilege escalation risks and helps organizations tighten Kubernetes security posture, reducing potential attack surfaces from misconfigured operator roles.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Unit 42",
    "sourceUrl": "https://unit42.paloaltonetworks.com/agentic-ai-kubernetes-operator-risks/",
    "publishedAt": "2026-09-29T10:00:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "unit-42-releases-opertraitor-tool-to-audit-kuberne",
      "article-4d46cb",
      "4d46cb",
      "unit-42-releases-opertraitor-tool-to-audit-kubernetes-operat"
    ]
  },
  {
    "slug": "cloudflare-emdash-1-0-enforces-plugin-permission-r-2e900d",
    "title": "Cloudflare EmDash 1.0 Enforces Plugin Permission Requests",
    "summary": "Cloudflare’s new EmDash 1.0 CMS locks each sandboxed plugin in its own isolated runtime. A plugin starts with access only to its private storage and cannot reach site content, media, users, secrets, environment, filesystem, or network until it declares needed permissions and a site administrator approves them. This protects site owners running third‑party code.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/29/cloudflare-emdash-plugin-security/",
    "publishedAt": "2026-09-29T09:03:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-emdash-1-0-enforces-plugin-permission-r",
      "article-2e900d",
      "2e900d",
      "cloudflare-emdash-1-0-enforces-plugin-permission-requests"
    ]
  },
  {
    "slug": "anthropic-s-claude-sonnet-5-5-delivers-30-faster-p-3985ef",
    "title": "Anthropic’s Claude Sonnet 5.5 Delivers 30% Faster Performance",
    "summary": "Anthropic released Claude Sonnet 5.5, an AI model for coding and office tasks that is over 30% faster than its predecessor while using fewer tokens, reducing cost per task. The model is available with zero data retention on the Claude Platform via AWS, Google Cloud, and Microsoft Azure.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/29/anthropic-claude-sonnet-5-5/",
    "publishedAt": "2026-09-29T08:15:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-s-claude-sonnet-5-5-delivers-30-faster-p",
      "article-3985ef",
      "3985ef",
      "anthropic-s-claude-sonnet-5-5-delivers-30-faster-performance"
    ]
  },
  {
    "slug": "four-week-plan-to-mitigate-vendor-concentration-ri-46656b",
    "title": "Four‑Week Plan to Mitigate Vendor Concentration Risk",
    "summary": "Skycloak founder Guilliano Molaire outlines a four‑week strategy to map and reduce vendor concentration risk. The approach identifies hidden dependencies on single cloud, identity, DNS, email, payment, or AI model providers, helping organizations avoid cascading failures when one provider goes down.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/29/vendor-concentration-risk-video/",
    "publishedAt": "2026-09-29T05:00:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "four-week-plan-to-mitigate-vendor-concentration-ri",
      "article-46656b",
      "46656b",
      "four-week-plan-to-mitigate-vendor-concentration-risk"
    ]
  },
  {
    "slug": "application-security-researcher-position-open-in-i-7d7294",
    "title": "Application Security Researcher Position Open in Israel",
    "summary": "A job opening for an Application Security Researcher at Novee Security in Israel is announced. The role involves testing web applications and APIs, verifying vulnerabilities, documenting exploits, and developing new testing methods to improve detection and support customer deployments.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/29/cybersecurity-jobs-available-right-now-september-29-2026/",
    "publishedAt": "2026-09-29T04:00:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "application-security-researcher-position-open-in-i",
      "article-7d7294",
      "7d7294",
      "application-security-researcher-position-open-in-israel"
    ]
  },
  {
    "slug": "carbonato-botnet-targets-docker-hosts-steals-ai-ap-18feca",
    "title": "Carbonato Botnet Targets Docker Hosts, Steals AI API Keys via Hermes Agent",
    "summary": "The Carbonato botnet leverages the open‑source Hermes Agent AI framework to run commands through Telegram and harvest AI API keys from exposed Docker hosts. Attackers gain remote control over compromised containers, enabling credential theft and potential lateral movement. Mitigation requires hardening Docker exposure, disabling unused APIs, and monitoring for anomalous Telegram traffic.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/identity-access-management-security/carbonato-botnet-ai-agent-hacked-docker-hosts",
    "publishedAt": "2026-09-28T20:23:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "carbonato-botnet-targets-docker-hosts-steals-ai-ap",
      "article-18feca",
      "18feca",
      "carbonato-botnet-targets-docker-hosts-steals-ai-api-keys-via"
    ]
  },
  {
    "slug": "shinyhunters-exploit-oracle-peoplesoft-vulnerabili-4069f3",
    "title": "ShinyHunters Exploit Oracle PeopleSoft Vulnerability in New Campaign",
    "summary": "ShinyHunters are leveraging a flaw in Oracle PeopleSoft products to conduct attacks, following their claim of breaching the FBI’s jobs site. The group uses workarounds to bypass security controls, targeting organizations that rely on PeopleSoft. No CVE ID is disclosed, and no patch status is mentioned.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/shinyhunters-cyberattacks-oracle-mandiant",
    "publishedAt": "2026-09-28T19:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "shinyhunters-exploit-oracle-peoplesoft-vulnerabili",
      "article-4069f3",
      "4069f3",
      "shinyhunters-exploit-oracle-peoplesoft-vulnerability-in-new-"
    ]
  },
  {
    "slug": "supabase-misconfigurations-expose-pii-passwords-an-22c860",
    "title": "Supabase Misconfigurations Expose PII, Passwords, and Auth Tokens in 16,000 Databases",
    "summary": "Researchers discovered over 16,000 Supabase databases with misconfigured access controls, revealing readable tables containing personally identifiable information, passwords, and authentication tokens. The exposure allows attackers to harvest sensitive data from the databases, posing a significant privacy risk to affected users.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/misconfigured-supabase-apps-expose-data-in-over-16-000-databases/",
    "publishedAt": "2026-09-28T18:50:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "supabase-misconfigurations-expose-pii-passwords-an",
      "article-22c860",
      "22c860",
      "supabase-misconfigurations-expose-pii-passwords-and-auth-tok"
    ]
  },
  {
    "slug": "ai-agents-operate-with-broad-privileges-raising-in-1b494e",
    "title": "AI Agents Operate with Broad Privileges, Raising Insider Threat Concerns",
    "summary": "Enterprises monitor human employees closely, but autonomous AI agents often run with extensive privileges that can become insider threats. The article highlights the need for auditing AI access controls to prevent misuse and potential data breaches.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/vulnerabilities-threats/ai-agents-are-privileged-users-who-is-auditing-their-access",
    "publishedAt": "2026-09-28T18:44:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agents-operate-with-broad-privileges-raising-in",
      "article-1b494e",
      "1b494e",
      "ai-agents-operate-with-broad-privileges-raising-insider-thre"
    ]
  },
  {
    "slug": "rathat-android-malware-console-targets-high-value-53085e",
    "title": "RatHat Android Malware Console Targets High-Value Victims",
    "summary": "Security firm Cleafy traced nearly 100 deployments of RatHat’s Android banking trojan console since April 2026. The console, part of a malware‑as‑a‑service model, lets operators control infected phones and collect data from each device.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/09/rathat-android-malware-console-uses.html",
    "publishedAt": "2026-09-28T17:38:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rathat-android-malware-console-targets-high-value",
      "article-53085e",
      "53085e",
      "rathat-android-malware-console-targets-high-value-victims"
    ]
  },
  {
    "slug": "new-mexico-jury-finds-meta-deceived-consumers-abou-397bff",
    "title": "New Mexico Jury Finds Meta Deceived Consumers About Data Privacy Practices",
    "summary": "A New Mexico jury found Meta violated consumer privacy law nearly 44 million times by misleading users about its data‑privacy practices. The court ruled the company’s statements were deceptive, holding Meta accountable for false claims about how it collects and uses personal information.",
    "category": "Policy",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/facebook-new-mexico-privacy",
    "publishedAt": "2026-09-28T17:15:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "new-mexico-jury-finds-meta-deceived-consumers-abou",
      "article-397bff",
      "397bff",
      "new-mexico-jury-finds-meta-deceived-consumers-about-data-pri"
    ]
  },
  {
    "slug": "chrome-store-hosts-poper-blocker-spyware-downloade-2c08cd",
    "title": "Chrome Store Hosts 'Poper Blocker' Spyware Downloaded by Millions",
    "summary": "A Chrome Store extension called Poper Blocker, marketed as an ad‑blocker, has been downloaded by millions. The app exfiltrates large amounts of sensitive user data while leveraging Google’s approval to appear legitimate. Researchers have warned that the spyware can harvest personal information and browsing habits.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/application-security/chrome-store-poper-blocker-spyware-downloaded-millions",
    "publishedAt": "2026-09-28T16:51:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-store-hosts-poper-blocker-spyware-downloade",
      "article-2c08cd",
      "2c08cd",
      "chrome-store-hosts-poper-blocker-spyware-downloaded-by-milli"
    ]
  },
  {
    "slug": "securityweek-opens-call-for-presentations-at-2026-1d25fa",
    "title": "SecurityWeek Opens Call for Presentations at 2026 CISO Forum Virtual Summit",
    "summary": "SecurityWeek is inviting cybersecurity professionals to submit vendor‑neutral presentations for the 2026 CISO Forum Virtual Summit. The event aims to help leaders navigate emerging threats, strengthen resilience, and address strategic challenges in enterprise security programs. Submissions are open now.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/call-for-presentations-open-for-2026-ciso-forum-virtual-summit/",
    "publishedAt": "2026-09-28T15:15:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "securityweek-opens-call-for-presentations-at-2026",
      "article-1d25fa",
      "1d25fa",
      "securityweek-opens-call-for-presentations-at-2026-ciso-forum"
    ]
  },
  {
    "slug": "vinext-1-0-launches-production-ready-framework-for-23c101",
    "title": "Vinext 1.0 Launches Production‑Ready Framework for Next.js on Vite",
    "summary": "Vinext 1.0, a new framework, enables developers to run Next.js applications on Vite. The release introduces advanced cache warming, broader compatibility, and an automated testing pipeline, making production deployments smoother and more efficient for Next.js projects.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/vinext-nextjs-on-vite/",
    "publishedAt": "2026-09-28T14:51:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vinext-1-0-launches-production-ready-framework-for",
      "article-23c101",
      "23c101",
      "vinext-1-0-launches-production-ready-framework-for-next-js-o"
    ]
  },
  {
    "slug": "over-80-000-organizations-lose-ai-logins-to-shadow-5a8c0c",
    "title": "Over 80,000 Organizations Lose AI Logins to Shadow AI and LLMjacking",
    "summary": "Infostealer logs exposed AI account credentials and sessions for more than 80,000 corporate domains, enabling stolen conversations and LLMjacking. The breach threatens sensitive AI interactions and highlights the need for stronger credential protection.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/80-000-plus-organizations-had-ai-logins-stolen-from-shadow-ai-to-llmjacking/",
    "publishedAt": "2026-09-28T14:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "over-80-000-organizations-lose-ai-logins-to-shadow",
      "article-5a8c0c",
      "5a8c0c",
      "over-80-000-organizations-lose-ai-logins-to-shadow-ai-and-ll"
    ]
  },
  {
    "slug": "emdash-1-0-released-as-secure-stable-cms-for-astro-664e52",
    "title": "EmDash 1.0 Released as Secure, Stable CMS for Astro",
    "summary": "EmDash 1.0 launches as a stable, open‑source CMS built for Astro, featuring agent‑friendly workflows, sandboxed plugins, and a decentralized registry that keeps publishers in control. The release emphasizes secure plugin management and publisher autonomy.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/emdash-cms-plugin-registry/",
    "publishedAt": "2026-09-28T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "emdash-1-0-released-as-secure-stable-cms-for-astro",
      "article-664e52",
      "664e52"
    ]
  },
  {
    "slug": "voidzero-accelerates-javascript-toolchain-at-cloud-60e961",
    "title": "VoidZero Accelerates JavaScript Toolchain at Cloudflare",
    "summary": "VoidZero has released over 80 updates, boosting JavaScript compilation, linting, and testing speeds. The toolchain now offers a 10x faster React compiler and Vite+ 1.0, enhancing developer productivity and AI agent performance.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/voidzero-update/",
    "publishedAt": "2026-09-28T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "voidzero-accelerates-javascript-toolchain-at-cloud",
      "article-60e961",
      "60e961",
      "voidzero-accelerates-javascript-toolchain-at-cloudflare"
    ]
  },
  {
    "slug": "forge-introduces-open-source-pipeline-for-sdks-and-436511",
    "title": "Forge Introduces Open‑Source Pipeline for SDKs and Docs",
    "summary": "Forge is a pluggable, open‑source CI pipeline that automatically generates SDKs, CLIs, and documentation from API definitions. By integrating generation into team repositories, it keeps developer tools in sync and reduces manual maintenance.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/forge-open-source-generation-pipeline/",
    "publishedAt": "2026-09-28T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "forge-introduces-open-source-pipeline-for-sdks-and",
      "article-436511",
      "436511",
      "forge-introduces-open-source-pipeline-for-sdks-and-docs"
    ]
  },
  {
    "slug": "file-notification-systems-enable-cross-account-bro-38139d",
    "title": "File‑Notification Systems Enable Cross‑Account Browsing and Keystroke Timing Spy",
    "summary": "Researchers discovered that Windows, Linux, and macOS file‑notification APIs can be abused to monitor other users’ activity. An unprivileged Windows account could detect 95.7 % of another user’s Firefox visits, while Linux notifications exposed keystroke timing on local keyboards and SSH sessions. The flaw allows passive spying without elevated privileges.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/28/cve-2025-68788-file-notification-attacks/",
    "publishedAt": "2026-09-28T12:14:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "file-notification-systems-enable-cross-account-bro",
      "article-38139d",
      "38139d",
      "file-notification-systems-enable-cross-account-browsing-and-"
    ]
  },
  {
    "slug": "dc-health-agency-exposes-400-000-beneficiary-recor-79a936",
    "title": "DC Health Agency Exposes 400,000 Beneficiary Records",
    "summary": "The DC Health Agency exposed Medicaid IDs and other beneficiary information for 400,000 individuals, compromising personal data and potentially enabling identity theft. The breach involved unauthorized access to sensitive health records, requiring immediate remediation and notification of affected parties.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/dc-health-agency-exposes-400000-beneficiary-records/",
    "publishedAt": "2026-09-28T11:29:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "dc-health-agency-exposes-400-000-beneficiary-recor",
      "article-79a936",
      "79a936",
      "dc-health-agency-exposes-400-000-beneficiary-records"
    ]
  },
  {
    "slug": "facebook-found-liable-for-misleading-users-about-p-50f837",
    "title": "Facebook Found Liable for Misleading Users About Privacy Protections",
    "summary": "A New Mexico jury ruled that Facebook deceived users regarding its privacy safeguards, holding the company liable for misleading claims. The decision highlights the legal responsibility of social media platforms to transparently disclose privacy practices. No data breach was reported, but the ruling may prompt stricter compliance.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/new-mexico-jury-finds-facebook-liable-for-deceiving-users-about-privacy-protections/",
    "publishedAt": "2026-09-28T10:40:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "facebook-found-liable-for-misleading-users-about-p",
      "article-50f837",
      "50f837",
      "facebook-found-liable-for-misleading-users-about-privacy-pro"
    ]
  },
  {
    "slug": "linkedin-tests-peer-verified-work-history-badges-47d3b0",
    "title": "LinkedIn Tests Peer‑Verified Work History Badges",
    "summary": "LinkedIn is piloting a feature that lets members confirm a connection’s work or education history. Verified members can endorse a colleague’s past roles or schools; once enough endorsements are collected, LinkedIn adds a verification badge to the profile. Users may opt out of the feature.",
    "category": "Policy",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/28/linkedin-profile-verification-features/",
    "publishedAt": "2026-09-28T08:20:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linkedin-tests-peer-verified-work-history-badges",
      "article-47d3b0",
      "47d3b0"
    ]
  },
  {
    "slug": "security-check-protect-ai-agent-memory-from-creden-67c8a4",
    "title": "Security Check: Protect AI Agent Memory from Credential Leakage",
    "summary": "Vectorize CEO Chris Latimer warns that AI coding agents often store API keys, credentials, and sensitive documents in plain text on developer machines and cloud services. Attackers can inject poisoned memory via plugins or integrations, targeting inexperienced coders. The interview stresses the need for strict access controls and secure memory handling practices.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/28/chris-latimer-vectorize-agent-memory-security/",
    "publishedAt": "2026-09-28T06:00:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "security-check-protect-ai-agent-memory-from-creden",
      "article-67c8a4",
      "67c8a4",
      "security-check-protect-ai-agent-memory-from-credential-leaka"
    ]
  },
  {
    "slug": "ai-forces-enterprises-to-rethink-security-governan-3b8ed8",
    "title": "AI Forces Enterprises to Rethink Security Governance",
    "summary": "AI agents are prompting companies to embed governance into systems and maintain human accountability as deployments scale. AWS’s Reimagine 2026 highlights the need for governance frameworks, citing interviews with 154 executives across 128 organizations in 23 industries. The report urges updating review processes beyond legacy six‑month IT programs.",
    "category": "Cloud",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/28/ai-agent-security-governance-aws-report/",
    "publishedAt": "2026-09-28T05:00:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-forces-enterprises-to-rethink-security-governan",
      "article-3b8ed8",
      "3b8ed8",
      "ai-forces-enterprises-to-rethink-security-governance"
    ]
  },
  {
    "slug": "quantum-random-number-generators-may-leak-clues-de-2f2abb",
    "title": "Quantum Random Number Generators May Leak Clues Despite Passing Tests",
    "summary": "A new ETSI technical report highlights weaknesses in quantum random number generators that could allow attackers to infer generated numbers. The guidance covers device and system flaws that reduce randomness, potentially compromising cryptographic keys and other security functions.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/28/quantum-random-number-generator-qrng-guidance/",
    "publishedAt": "2026-09-28T04:00:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "quantum-random-number-generators-may-leak-clues-de",
      "article-2f2abb",
      "2f2abb",
      "quantum-random-number-generators-may-leak-clues-despite-pass"
    ]
  },
  {
    "slug": "wireshark-4-6-9-release-addresses-19-vulnerabiliti-57dd7a",
    "title": "Wireshark 4.6.9 Release Addresses 19 Vulnerabilities",
    "summary": "Wireshark version 4.6.9 has been released, fixing 19 security vulnerabilities and 16 bugs. The update improves stability and security for users of the network protocol analyzer.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33372",
    "publishedAt": "2026-09-27T15:04:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wireshark-4-6-9-release-addresses-19-vulnerabiliti",
      "article-57dd7a",
      "57dd7a",
      "wireshark-4-6-9-release-addresses-19-vulnerabilities"
    ]
  },
  {
    "slug": "lunexstealer-uses-amd-driver-byovd-to-evade-edr-an-1a0722",
    "title": "LunexStealer Uses AMD Driver BYOVD to Evade EDR and Steal Credentials",
    "summary": "LunexStealer deploys the AMD PDFWKRNL.sys driver via a Bring Your Own Vulnerability (BYOVD) technique to zero kernel callbacks, effectively blinding endpoint detection and response systems. The malware then steals browser credentials and cryptocurrency wallet data from 28 victim panels.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/lunex-stealer-amd-byovd-edr-evasion",
    "publishedAt": "2026-09-27T01:41:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "lunexstealer-uses-amd-driver-byovd-to-evade-edr-an",
      "article-1a0722",
      "1a0722",
      "lunexstealer-uses-amd-driver-byovd-to-evade-edr-and-steal-cr"
    ]
  },
  {
    "slug": "us-and-china-agree-to-ai-safety-communication-chan-5bc6d9",
    "title": "US and China Agree to AI Safety Communication Channel Amid Trade Talks",
    "summary": "The United States and China have agreed to establish a communication mechanism for artificial intelligence‑related incidents while continuing trade and military discussions. The agreement aims to improve dialogue and cooperation on AI safety issues between the two nations.",
    "category": "Policy",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/china-and-us-agree-to-establish-ai-safety-channel-and-continue-trade-and-military-talks/",
    "publishedAt": "2026-09-26T18:09:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "us-and-china-agree-to-ai-safety-communication-chan",
      "article-5bc6d9",
      "5bc6d9",
      "us-and-china-agree-to-ai-safety-communication-channel-amid-t"
    ]
  },
  {
    "slug": "claude-opus-5-5-shows-reduced-ai-writing-patterns-579f7c",
    "title": "Claude Opus 5.5 Shows Reduced AI Writing Patterns",
    "summary": "Anthropic’s Claude Opus 5.5 has been analyzed to use fewer em dashes, produce shorter sentences, and employ simpler wording compared to earlier versions. The changes aim to make the model’s responses less detectable as AI-generated text while maintaining content depth.",
    "category": "Policy",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/artificial-intelligence/claude-opus-55-uses-95-percent-fewer-em-dashes-but-its-answers-are-getting-longer/",
    "publishedAt": "2026-09-26T16:26:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "claude-opus-5-5-shows-reduced-ai-writing-patterns",
      "article-579f7c",
      "579f7c"
    ]
  },
  {
    "slug": "microsoft-pauses-kb5002907-update-after-office-201-4cc554",
    "title": "Microsoft Pauses KB5002907 Update After Office 2016/2019 License Deactivations",
    "summary": "Microsoft halted rollout of KB5002907, a Microsoft 365 update, after users reported that it deactivated or removed perpetual Office 2016 and Office 2019 installations. The pause follows widespread reports of license deactivation, prompting Microsoft to investigate the update’s impact on legacy Office products.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-365-kb5002907-update-paused-after-office-license-deactivations/",
    "publishedAt": "2026-09-26T15:50:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-pauses-kb5002907-update-after-office-201",
      "article-4cc554",
      "4cc554",
      "microsoft-pauses-kb5002907-update-after-office-2016-2019-lic"
    ]
  },
  {
    "slug": "github-actions-re-enabled-while-mini-shai-hulud-pa-4a285d",
    "title": "GitHub Actions Re-Enabled While Mini Shai-Hulud Payload Remains Active",
    "summary": "Two third‑party GitHub Actions that were previously compromised in a Mini Shai‑Hulud ransomware campaign were re‑enabled by their maintainer. The actions still point to malicious code, allowing attackers to execute the payload in any workflow that uses them. The continued availability poses a risk to projects relying on these actions.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/github-actions-re-enabled-with-mini-shai-hulud-payload-still-active/",
    "publishedAt": "2026-09-26T14:19:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "github-actions-re-enabled-while-mini-shai-hulud-pa",
      "article-4a285d",
      "4a285d",
      "github-actions-re-enabled-while-mini-shai-hulud-payload-rema"
    ]
  },
  {
    "slug": "openai-ai-agents-uploaded-user-images-to-third-par-d8c0e7",
    "title": "OpenAI AI Agents Uploaded User Images to Third-Party Sites",
    "summary": "OpenAI reports that its AI agents unintentionally uploaded user-provided images to external image-hosting services during research and evaluation tasks. The incident involved third‑party sites, potentially exposing user content beyond OpenAI’s control. No further details on mitigation or impact are provided.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/artificial-intelligence/openais-ai-agents-accidentally-uploaded-user-provided-images-to-third-party-sites/",
    "publishedAt": "2026-09-26T12:28:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-ai-agents-uploaded-user-images-to-third-par",
      "article-d8c0e7",
      "d8c0e7",
      "openai-ai-agents-uploaded-user-images-to-third-party-sites"
    ]
  },
  {
    "slug": "windows-botnet-uses-xai-grok-to-maintain-persisten-572cd4",
    "title": "Windows Botnet Uses xAI Grok to Maintain Persistence",
    "summary": "A new Windows botnet, x47.c, leverages the xAI Grok AI API to select predefined actions and maintain persistence. The botnet’s use of AI enables it to adapt its behavior, potentially draining resources and evading detection. No specific mitigation is disclosed yet.",
    "category": "Policy",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/new-x47-c-windows-botnet-weaponizes-xai-grok-ai-api-draining/",
    "publishedAt": "2026-09-26T12:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-botnet-uses-xai-grok-to-maintain-persisten",
      "article-572cd4",
      "572cd4",
      "windows-botnet-uses-xai-grok-to-maintain-persistence"
    ]
  },
  {
    "slug": "elementor-csrf-flaw-lets-attackers-take-over-sites-b8be11",
    "title": "Elementor CSRF Flaw Lets Attackers Take Over Sites After Admin Clicks Crafted Link",
    "summary": "A high‑severity CSRF flaw in the Elementor WordPress plugin allows unauthenticated attackers to create rogue administrator accounts and seize control of a site. The vulnerability, with a CVSS score of 8.8, has no CVE yet and affects recent Elementor versions.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/09/elementor-csrf-flaw-lets-attackers-take.html",
    "publishedAt": "2026-09-26T09:55:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "elementor-csrf-flaw-lets-attackers-take-over-sites",
      "article-b8be11",
      "b8be11",
      "elementor-csrf-flaw-lets-attackers-take-over-sites-after-adm"
    ]
  }
];
