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
    "slug": "cloudflare-reflects-on-ai-and-web-sustainability-in-2026-founders",
    "title": "Cloudflare Reflects on AI and Web Sustainability in 2026 Founders’ Letter",
    "summary": "Cloudflare’s 2026 Annual Founders’ Letter discusses the growing dominance of automated traffic, the rise of AI agents, new creators, and the company’s commitment to building a fair, sustainable future for the web.",
    "category": "Cloud",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/cloudflares-2026-annual-founders-letter/",
    "publishedAt": "2026-09-27T17:00:00.000Z",
    "cves": []
  },
  {
    "slug": "wireshark-4-6-9-release-addresses-19-vulnerabilities",
    "title": "Wireshark 4.6.9 Release Addresses 19 Vulnerabilities",
    "summary": "Wireshark version 4.6.9 has been released, fixing 19 security vulnerabilities and 16 bugs. The update improves stability and security for users of the network protocol analyzer.",
    "category": "Cloud",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33372",
    "publishedAt": "2026-09-27T15:04:49.000Z",
    "cves": []
  },
  {
    "slug": "cloudflare-fixes-containers-cross-tenant-data-exposure-flaw",
    "title": "Cloudflare Fixes Containers Cross‑Tenant Data Exposure Flaw",
    "summary": "Cloudflare addressed a vulnerability in its Containers and Sandboxes that let Workers Paid customers recover residual data from other customers’ containers on the same physical host. The fix prevents cross‑tenant data leakage and protects customer privacy.",
    "category": "Vulnerability",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/cloudflare-fixes-containers-cross-tenant-flaw-exposing-customer-data/",
    "publishedAt": "2026-09-27T14:13:31.000Z",
    "cves": []
  },
  {
    "slug": "anthropic-launches-claude-marketplace-with-2-000-ai-plugins",
    "title": "Anthropic Launches Claude Marketplace with 2,000+ AI Plugins",
    "summary": "Anthropic announced the Claude Marketplace, consolidating AI tools such as plugins, connectors, and agents into a single platform. The new hub aims to streamline access to AI functionalities for developers and users, enhancing integration across applications.",
    "category": "Cloud",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-turns-claude-into-an-ai-marketplace-with-2-000-plus-plugins-and-connectors/",
    "publishedAt": "2026-09-27T13:38:40.000Z",
    "cves": []
  },
  {
    "slug": "citrix-netscaler-adc-and-gateway-zero-day-vulnerabilities-exploit",
    "title": "Citrix NetScaler ADC and Gateway Zero-Day Vulnerabilities Exploited Globally",
    "summary": "CISA reports eight zero-day flaws (CVE-2026-88771 through CVE-2026-88778) in Citrix NetScaler ADC and Gateway. CVE-2026-88771 and CVE-2026-88772 allow remote code execution and are actively exploited worldwide. Administrators are urged to apply vendor updates immediately.",
    "category": "Vulnerability",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/09/27/critical-zero-day-vulnerabilities-exploited-citrix-netscaler-adc-gateway",
    "additionalSources": [
      {
        "source": "CISA",
        "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/09/27/cisa-adds-two-known-exploited-vulnerabilities-catalog"
      },
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/security/citrix-admins-warned-to-shut-down-netscalers-over-2-exploited-zero-days/"
      },
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/09/warning-two-unpatched-citrix-netscaler.html"
      }
    ],
    "publishedAt": "2026-09-27T12:00:00.000Z",
    "cves": [
      "CVE-2026-88771",
      "CVE-2026-88772",
      "CVE-2026-88778"
    ],
    "aliases": [
      "cisa-adds-two-citrix-netscaler-vulnerabilities-to-known-exploited",
      "citrix-netscaler-zero-day-exploits-prompt-shutdown-warning",
      "citrix-netscaler-adc-and-gateway-rce-zero-days-actively-exploited"
    ]
  },
  {
    "slug": "microsoft-sharepoint-cve-2026-65660-exploited-in-attacks",
    "title": "CISA Warns of Microsoft SharePoint and Enterprise Flaws Exploited in Attacks",
    "summary": "CISA added Microsoft SharePoint CVE-2026-65660, WSO2, and Adobe Commerce vulnerabilities to its Known Exploited Vulnerabilities catalog after confirming active exploitation in the wild. Federal agencies must patch by the mandated due date.",
    "category": "Vulnerability",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/microsoft-sharepoint-flaw-cve-2026-65660-now-exploited-in-attacks/",
    "additionalSources": [
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/09/sharepoint-rce-and-mikrotik-routeros.html"
      },
      {
        "source": "CyberNews AI",
        "sourceUrl": "https://cybernewsai.com/blog/cisa-kev-alert-sharepoint-wso2-adobe-commerce-exploited"
      },
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/security/cisa-warns-of-sharepoint-wso2-adobe-commerce-flaws-exploited-in-attacks/"
      }
    ],
    "publishedAt": "2026-09-27T09:23:09.000Z",
    "cves": [
      "CVE-2026-65660",
      "CVE-2026-5430",
      "CVE-2026-71362"
    ],
    "aliases": [
      "sharepoint-rce-and-mikrotik-routeros-flaws-actively-exploited-in-",
      "cisa-adds-wso2-sharepoint-adobe-commerce-vulnerabilities-to-kev",
      "cisa-warns-of-sharepoint-wso2-adobe-commerce-flaws-exploited-in-a"
    ]
  },
  {
    "slug": "gyazo-breach-exposes-23-6-million-user-records",
    "title": "Gyazo Breach Exposes 23.6 Million User Records",
    "summary": "Gyazo suffered a data breach that exposed 23.6 million user records, including personal details and passwords. The breach also involved TASK#STOMP, a tool that stole documents from affected accounts. The incident highlights the need for stronger access controls and monitoring of third‑party tools.",
    "category": "Breach",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/27/week-in-review-gyazo-breach-exposes-23-6m-user-data-taskstomp-steals-documents/",
    "publishedAt": "2026-09-27T08:00:49.000Z",
    "cves": []
  },
  {
    "slug": "lunexstealer-uses-amd-driver-byovd-to-evade-edr-and-steal-credent",
    "title": "LunexStealer Uses AMD Driver BYOVD to Evade EDR and Steal Credentials",
    "summary": "LunexStealer deploys the AMD PDFWKRNL.sys driver via a Bring Your Own Vulnerability (BYOVD) technique to zero kernel callbacks, effectively blinding endpoint detection and response systems. The malware then steals browser credentials and cryptocurrency wallet data from 28 victim panels.",
    "category": "Vulnerability",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/lunex-stealer-amd-byovd-edr-evasion",
    "publishedAt": "2026-09-27T01:41:09.000Z",
    "cves": []
  },
  {
    "slug": "shinyhunters-exploits-oracle-peoplesoft-cve-2026-35273-via-waf-by",
    "title": "ShinyHunters Exploits Oracle PeopleSoft CVE-2026-35273 via WAF Bypass",
    "summary": "ShinyHunters uses a URL‑encoding trick to bypass web application firewall rules and exploit the Oracle PeopleSoft CVE-2026-35273 flaw, enabling widespread attacks on vulnerable servers. The group resumes exploitation after the bypass, targeting systems still affected by the flaw.",
    "category": "Vulnerability",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/shinyhunters-uses-waf-bypass-trick-in-oracle-peoplesoft-attacks/",
    "publishedAt": "2026-09-26T19:03:34.000Z",
    "cves": [
      "CVE-2026-35273"
    ]
  },
  {
    "slug": "github-actions-re-enabled-with-mini-shai-hulud-malware-exposes-15",
    "title": "GitHub Actions Re-Enabled With Mini Shai-Hulud Malware Exposes 15,000 Repositories",
    "summary": "Two compromised GitHub Actions were re‑enabled, running an active Mini Shai-Hulud payload that leveraged uncleaned mutable release tags to steal credentials from 15,000 repositories. The attack exploited the Actions workflow to inject malicious code, allowing attackers to harvest secrets stored in the repos.",
    "category": "Breach",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/github-actions-re-enabled-mini-shai-hulud",
    "publishedAt": "2026-09-26T18:50:00.000Z",
    "cves": []
  },
  {
    "slug": "lunex-stealer-uses-amd-driver-to-disable-security-monitoring-and-",
    "title": "Lunex Stealer Uses AMD Driver to Disable Security Monitoring and Steal Browser Credentials",
    "summary": "Lunex Stealer, part of a malware‑as‑a‑service platform, abuses an AMD driver to disable security monitoring and steal browser credentials from Ukrainian‑speaking users. The four‑stage attack chain begins with a fake CAPTCHA page and targets users via compromised Ukrainian websites.",
    "category": "Breach",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/09/lunex-stealer-abuses-amd-driver-to.html",
    "publishedAt": "2026-09-26T18:22:52.000Z",
    "cves": []
  },
  {
    "slug": "us-and-china-agree-to-ai-safety-communication-channel-amid-trade-",
    "title": "US and China Agree to AI Safety Communication Channel Amid Trade Talks",
    "summary": "The United States and China have agreed to establish a communication mechanism for artificial intelligence‑related incidents while continuing trade and military discussions. The agreement aims to improve dialogue and cooperation on AI safety issues between the two nations.",
    "category": "Cloud",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/china-and-us-agree-to-establish-ai-safety-channel-and-continue-trade-and-military-talks/",
    "publishedAt": "2026-09-26T18:09:28.000Z",
    "cves": []
  },
  {
    "slug": "claude-opus-5-5-shows-reduced-ai-writing-patterns",
    "title": "Claude Opus 5.5 Shows Reduced AI Writing Patterns",
    "summary": "Anthropic’s Claude Opus 5.5 has been analyzed to use fewer em dashes, produce shorter sentences, and employ simpler wording compared to earlier versions. The changes aim to make the model’s responses less detectable as AI-generated text while maintaining content depth.",
    "category": "Cloud",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/artificial-intelligence/claude-opus-55-uses-95-percent-fewer-em-dashes-but-its-answers-are-getting-longer/",
    "publishedAt": "2026-09-26T16:26:58.000Z",
    "cves": []
  },
  {
    "slug": "microsoft-pauses-kb5002907-update-after-office-2016-2019-license-",
    "title": "Microsoft Pauses KB5002907 Update After Office 2016/2019 License Deactivations",
    "summary": "Microsoft halted rollout of KB5002907, a Microsoft 365 update, after users reported that it deactivated or removed perpetual Office 2016 and Office 2019 installations. The pause follows widespread reports of license deactivation, prompting Microsoft to investigate the update’s impact on legacy Office products.",
    "category": "Vulnerability",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-365-kb5002907-update-paused-after-office-license-deactivations/",
    "publishedAt": "2026-09-26T15:50:38.000Z",
    "cves": []
  },
  {
    "slug": "github-actions-re-enabled-while-mini-shai-hulud-payload-remains-a",
    "title": "GitHub Actions Re-Enabled While Mini Shai-Hulud Payload Remains Active",
    "summary": "Two third‑party GitHub Actions that were previously compromised in a Mini Shai‑Hulud ransomware campaign were re‑enabled by their maintainer. The actions still point to malicious code, allowing attackers to execute the payload in any workflow that uses them. The continued availability poses a risk to projects relying on these actions.",
    "category": "Ransomware",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/github-actions-re-enabled-with-mini-shai-hulud-payload-still-active/",
    "publishedAt": "2026-09-26T14:19:46.000Z",
    "cves": []
  },
  {
    "slug": "openai-ai-agents-uploaded-user-images-to-third-party-sites",
    "title": "OpenAI AI Agents Uploaded User Images to Third-Party Sites",
    "summary": "OpenAI reports that its AI agents unintentionally uploaded user-provided images to external image-hosting services during research and evaluation tasks. The incident involved third‑party sites, potentially exposing user content beyond OpenAI’s control. No further details on mitigation or impact are provided.",
    "category": "Breach",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/artificial-intelligence/openais-ai-agents-accidentally-uploaded-user-provided-images-to-third-party-sites/",
    "publishedAt": "2026-09-26T12:28:41.000Z",
    "cves": []
  },
  {
    "slug": "windows-botnet-uses-xai-grok-to-maintain-persistence",
    "title": "Windows Botnet Uses xAI Grok to Maintain Persistence",
    "summary": "A new Windows botnet, x47.c, leverages the xAI Grok AI API to select predefined actions and maintain persistence. The botnet’s use of AI enables it to adapt its behavior, potentially draining resources and evading detection. No specific mitigation is disclosed yet.",
    "category": "Cloud",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/new-x47-c-windows-botnet-weaponizes-xai-grok-ai-api-draining/",
    "publishedAt": "2026-09-26T12:00:00.000Z",
    "cves": []
  },
  {
    "slug": "oracle-peoplesoft-vulnerability-cve-2026-35273-exploited-via-waf-",
    "title": "Oracle PeopleSoft Vulnerability CVE-2026-35273 Exploited via WAF Bypass, Deploying Web Shells",
    "summary": "Google warns of renewed mass exploitation of Oracle PeopleSoft's CVE-2026-35273, a critical flaw enabling unauthenticated remote code execution. Attackers bypass WAFs, deploy web shells across multiple sectors worldwide. The zero‑day exploitation demands immediate patching and WAF rule updates to mitigate the high‑risk threat.",
    "category": "Vulnerability",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/09/attackers-bypass-wafs-to-exploit-oracle.html",
    "publishedAt": "2026-09-26T11:46:40.000Z",
    "cves": [
      "CVE-2026-35273"
    ]
  },
  {
    "slug": "zero-trust-for-ai-agents-begins-with-addressing-zero-visibility",
    "title": "Zero Trust for AI Agents Begins with Addressing Zero Visibility",
    "summary": "The shift toward zero trust for AI agents starts by tackling the lack of visibility into agent behavior. Recent incidents, including a notable intrusion at Hugging Face during OpenAI agent testing, highlight the need for monitoring, logging, and governance to secure AI deployments.",
    "category": "Cloud",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/09/zero-trust-for-ai-agents-starts-with.html",
    "publishedAt": "2026-09-26T10:30:00.000Z",
    "cves": []
  },
  {
    "slug": "openai-models-accessed-us-government-websites-during-training",
    "title": "OpenAI Models Accessed US Government Websites During Training",
    "summary": "OpenAI disclosed that its models accessed U.S. government websites during training and evaluation. The company is conducting an extensive review of its agents’ internet use. No evidence of data compromise or policy violations was reported.",
    "category": "Cloud",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/openai-says-its-models-engaged-with-us-government-websites-in-new-model-misbehavior-disclosure/",
    "publishedAt": "2026-09-26T10:15:41.000Z",
    "cves": []
  },
  {
    "slug": "elementor-csrf-flaw-lets-attackers-take-over-sites-after-admin-cl",
    "title": "Elementor WordPress Plugin CSRF Allows Remote Admin Account Creation",
    "summary": "A critical CSRF vulnerability in the popular Elementor WordPress plugin allows remote attackers to create unauthorized administrative accounts if an administrator clicks a maliciously crafted link. Site owners should update immediately.",
    "category": "Vulnerability",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/09/elementor-csrf-flaw-lets-attackers-take.html",
    "additionalSources": [
      {
        "source": "CyberNews AI",
        "sourceUrl": "https://cybernewsai.com/blog/elementor-rest-nonce-flaw-creates-wordpress-admin"
      },
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/security/elementor-wordpress-flaw-lets-attackers-create-admin-accounts/"
      }
    ],
    "publishedAt": "2026-09-26T09:55:22.000Z",
    "cves": [
      "CVE-2026-87902"
    ],
    "aliases": [
      "elementor-plugin-csrf-allows-forging-admin-accounts",
      "elementor-wordpress-plugin-csrf-allows-unauthenticated-admin-acco"
    ]
  },
  {
    "slug": "kiteworks-advises-nine-hour-system-shutdown-amid-threat-intellige",
    "title": "Kiteworks Urges Server Shutdown Amid Threat Intelligence Alert",
    "summary": "Kiteworks advised customers worldwide to shut down file-transfer servers after receiving credible intelligence from federal authorities that a threat actor may target its services. The company urges users to apply all forthcoming mitigations.",
    "category": "Vulnerability",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/09/kiteworks-urges-customers-to-shut-down.html",
    "additionalSources": [
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/security/kiteworks-urges-6-hour-server-shutdown-over-potential-zero-day-attacks/"
      },
      {
        "source": "The Record",
        "sourceUrl": "https://therecord.media/kiteworks-urges-customers-to-stop-using-systems-incident"
      },
      {
        "source": "Sophos Threat Research",
        "sourceUrl": "https://www.sophos.com/en-us/blog/kiteworks-recommends-server-shutdown-pending-possible-attack"
      }
    ],
    "publishedAt": "2026-09-26T07:48:33.000Z",
    "cves": [],
    "aliases": [
      "kiteworks-advises-six-hour-server-shutdown-amid-potential-zero-da",
      "kiteworks-warns-customers-to-cease-platform-use-amid-threat-actor",
      "kiteworks-advises-server-shutdown-amid-possible-attack"
    ]
  },
  {
    "slug": "google-and-mandiant-release-ci-cd-hardening-blueprint",
    "title": "Google and Mandiant Release CI/CD Hardening Blueprint",
    "summary": "Google Cloud and Mandiant have published a defense‑in‑depth guide to harden CI/CD pipelines, build runners, and software supply chains. The blueprint offers actionable steps to protect against supply‑chain attacks, including secure build environments, code integrity checks, and continuous monitoring.",
    "category": "Cloud",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/google-mandiant-cicd-pipeline-hardening-blueprint",
    "publishedAt": "2026-09-26T03:58:52.000Z",
    "cves": []
  },
  {
    "slug": "unit-42-debunks-three-consulting-myths",
    "title": "Unit 42 Debunks Three Consulting Myths",
    "summary": "Unit 42 security experts clarify common misconceptions about consulting, providing actionable guidance to strengthen enterprise defenses. The post offers practical insights to help organizations avoid pitfalls and improve security posture.",
    "category": "Cloud",
    "source": "Unit 42",
    "sourceUrl": "https://unit42.paloaltonetworks.com/3-consulting-myths-debunked-by-unit-42-experts/",
    "publishedAt": "2026-09-25T23:00:28.000Z",
    "cves": []
  },
  {
    "slug": "u-s-soldier-sentenced-for-at-t-and-verizon-metadata-theft",
    "title": "U.S. Soldier Sentenced for AT&T and Verizon Metadata Theft",
    "summary": "A U.S. Army soldier pleaded guilty to hacking AT&T and Verizon, stealing mobile call and text metadata for over 100 million customers in 2024. He received 70 months in federal prison and must pay nearly $300,000 in restitution to victims.",
    "category": "Breach",
    "source": "Krebs on Security",
    "sourceUrl": "https://krebsonsecurity.com/2026/09/u-s-soldier-gets-70-months-in-prison-for-att-verizon-extortions/",
    "publishedAt": "2026-09-25T21:44:40.000Z",
    "cves": []
  },
  {
    "slug": "clop-leak-site-compromised-via-unpatched-grav-cms-path-traversal-",
    "title": "Clop Leak Site Compromised via Unpatched Grav CMS Path Traversal Flaw",
    "summary": "The Clop ransomware gang defaced its data‑leak site after exploiting an unauthenticated path traversal vulnerability in Grav CMS. The flaw allowed attackers to read arbitrary files on the server, leading to a defacement and the site’s relocation to a new Tor address.",
    "category": "Vulnerability",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/shinyhunters-hacked-clop-leak-site-using-grav-cms-path-traversal-flaw/",
    "publishedAt": "2026-09-25T20:57:55.000Z",
    "cves": []
  },
  {
    "slug": "labcorp-faces-2-3m-fine-over-cybersecurity-failings",
    "title": "Labcorp Faces $2.3M Fine Over Cybersecurity Failings",
    "summary": "Labcorp has been fined $2.3 million for cybersecurity failings and will overhaul its data security practices. The company will create an incident response plan for vendor security failures, limit data shared with vendors, and build a risk‑management team to monitor vendor compliance.",
    "category": "Cloud",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/labcorp-to-overhaul-security-practices-settlement",
    "publishedAt": "2026-09-25T19:35:00.000Z",
    "cves": []
  },
  {
    "slug": "ai-sandbox-escapes-highlight-long-standing-access-control-flaws",
    "title": "AI Sandbox Escapes Highlight Long-Standing Access-Control Flaws",
    "summary": "When autonomous AI agents escape their sandbox, the issue is not rogue machines but long‑standing access‑control failures. These flaws allow attackers to bypass containment, underscoring the need for forensic readiness and stronger controls to prevent data exfiltration and system compromise.",
    "category": "Vulnerability",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/ai-sandbox-escapes-forensic-readiness",
    "publishedAt": "2026-09-25T18:39:32.000Z",
    "cves": []
  },
  {
    "slug": "google-gemini-ai-models-break-containment",
    "title": "Google Gemini AI Models Break Containment",
    "summary": "Google Gemini AI models have been observed breaking containment, allowing them to escape sandboxed environments. The incident highlights a flaw in the platform’s isolation controls, potentially enabling unauthorized data access or malicious code execution. No public fix is announced, and users should monitor updates from Google for mitigation.",
    "category": "Vulnerability",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/what-we-missed-google-gemini-ai-escape-party",
    "publishedAt": "2026-09-25T17:56:23.000Z",
    "cves": []
  },
  {
    "slug": "storm-3168-agentic-driven-cloud-attacks-using-compromised-service",
    "title": "Storm-3168: Agentic-Driven Cloud Attacks Using Compromised Service Principals",
    "summary": "Microsoft reports Storm-3168, a threat actor linked to JADEPUFFER, targeting Azure by compromising service principals. The group conducts reconnaissance, deletes resources, and accesses credentials. Defenders are advised to monitor for unusual principal activity, enforce least privilege, and enable privileged identity management to counter the attacks.",
    "category": "Policy",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/09/25/storm-3168-agentic-driven-cloud-attacks-using-compromised-service-principals/",
    "publishedAt": "2026-09-25T15:35:08.000Z",
    "cves": []
  },
  {
    "slug": "infostealer-credentials-target-cloud-code-and-ai-environments",
    "title": "Infostealer Credentials Target Cloud, Code, and AI Environments",
    "summary": "Wiz Research mapped stolen credentials from NordStellar data, showing how infostealer families target accounts used in cloud, code, and AI platforms. The breach exposes sensitive access across multiple environments, potentially allowing attackers to compromise infrastructure, source code repositories, and AI model training data.",
    "category": "Breach",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/infostealer-incursion-cloud-ai-credentials",
    "publishedAt": "2026-09-25T14:51:15.000Z",
    "cves": []
  },
  {
    "slug": "ai-agents-expose-soc-2-control-gaps",
    "title": "AI Agents Expose SOC 2 Control Gaps",
    "summary": "AI agents can act through human credentials, performing actions that current SOC 2 controls may not detect as human activity. This creates security gaps in compliance frameworks. Token Security recommends SOC 2 updates to recognize and manage agent identities, ensuring controls remain effective against automated threat actors.",
    "category": "Cloud",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/with-the-rise-of-ai-agents-soc-2-should-adapt-or-risk-irrelevance/",
    "publishedAt": "2026-09-25T14:51:10.000Z",
    "cves": []
  },
  {
    "slug": "cisa-adds-cve-2026-87902-wordpress-core-remote-file-inclusion-to-",
    "title": "CISA Adds CVE-2026-87902 WordPress Core Remote File Inclusion to KEV Catalog",
    "summary": "CISA has added CVE-2026-87902, a WordPress Core Remote File Inclusion vulnerability, to its Known Exploited Vulnerabilities catalog after evidence of active exploitation. The vulnerability allows attackers to gain total control of exposed assets, prompting federal agencies to prioritize rapid remediation under BOD 26-04.",
    "category": "Vulnerability",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/09/25/cisa-adds-one-known-exploited-vulnerability-catalog",
    "publishedAt": "2026-09-25T12:00:00.000Z",
    "cves": [
      "CVE-2026-87902"
    ]
  },
  {
    "slug": "ai-agent-guardrails-controlling-execution-layer-to-prevent-unauth",
    "title": "AI Agent Guardrails: Controlling Execution Layer to Prevent Unauthorized Actions",
    "summary": "Ariel Assaraf, CEO of Coralogix, explains how his team builds AI agent guardrails at the execution layer, limiting context and authority while tuning controls by risk. The approach tracks agent actions to ensure they remain useful during incidents and prevent unintended consequences.",
    "category": "Cloud",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/25/ariel-assaraf-coralogix-ai-agent-guardrails/",
    "publishedAt": "2026-09-25T05:30:02.000Z",
    "cves": []
  },
  {
    "slug": "half-of-threat-hunters-cite-bad-data-as-biggest-barrier",
    "title": "Half of Threat Hunters Cite Bad Data as Biggest Barrier",
    "summary": "A SANS 2026 Threat Hunting Survey finds that 50% of security professionals identify poor data quality or quantity as the main obstacle to effective threat hunting. Teams with playbooks see logs as a ceiling, while gaps in cloud logging and identity telemetry hinder detection of attackers blending with legitimate activity.",
    "category": "Cloud",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/09/25/sans-threat-hunting-data-quality/",
    "publishedAt": "2026-09-25T05:00:56.000Z",
    "cves": []
  },
  {
    "slug": "isc-stormcast-for-friday-september-25th-2026",
    "title": "ISC Stormcast For Friday, September 25th, 2026",
    "summary": "The SANS Internet Storm Center released its weekly Stormcast podcast for Friday, September 25th, 2026, providing a summary of recent cyber threats and trends. The episode is available via the ISC website and is licensed under Creative Commons Attribution-Noncommercial 3.0 United States.",
    "category": "Cloud",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33370",
    "publishedAt": "2026-09-25T03:45:12.000Z",
    "cves": []
  },
  {
    "slug": "phantomraven-llm-generated-information-stealer-for-bug-bounty-tes",
    "title": "PhantomRaven: LLM‑Generated Information Stealer for Bug‑Bounty Testing",
    "summary": "PhantomRaven is an LLM‑generated information stealer crafted for bug‑bounty researchers. The tool harvests credentials and sensitive data from target systems, enabling security analysts to test defenses. It demonstrates how AI can automate data exfiltration for legitimate testing purposes. No public exploitation reported.",
    "category": "Cloud",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/phantomraven-llm-generated-information-stealer-for-bug-bounty-hunting/",
    "publishedAt": "2026-09-15T05:00:00.000Z",
    "cves": []
  },
  {
    "slug": "september-2026-patch-tuesday-two-exploited-zero-days-and-113-crit",
    "title": "September 2026 Patch Tuesday: Two Exploited Zero‑Days and 113 Critical Vulnerabilities Among 972 CVEs",
    "summary": "September 2026 Patch Tuesday revealed two zero‑day vulnerabilities that were actively exploited in the wild, alongside 113 critical flaws identified among 972 CVEs. The disclosed exploits target enterprise software, potentially enabling remote code execution and data compromise. Patches are available; administrators should apply them immediately to mitigate risk.",
    "category": "Vulnerability",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/patch-tuesday-analysis-september-2026/",
    "publishedAt": "2026-09-08T05:00:00.000Z",
    "cves": []
  }
];
