# SecuBuzz Active Feeds & Threat Intelligence Sources Directory

This document provides the authoritative, single source of truth for all active news feeds, official vendor PSIRT bulletins, security advisory databases, and threat telemetry powering the SecuBuzz ecosystem.

Last Updated: October 2026 | Total Active Sources: 43 Feeds + 2 Advisory Databases (1,806 Tracked Advisories) + FIRST.org EPSS Radar

---

## 1. Active News Feeds: Industry & Threat Research (29 Sources)
Ingested hourly by `scripts/ingest.mjs` running on GitHub Actions (`cron: "17 * * * *"`). Each raw item is filtered, cross-corroborated, deduplicated, and converted by resilient tri-engine AI (Groq `openai/gpt-oss-20b` + Google Gemini `gemini-2.5-flash` + OpenRouter fallback) into concise, 60-word security briefs classified by Threat Severity (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`) and Category (`Breach`, `Ransomware`, `CVE`, `Vulnerability`, `Nation State`, `General`).

| # | Source Name | Feed URL | Primary Focus |
|---|---|---|---|
| **1** | **The Hacker News** | `https://feeds.feedburner.com/TheHackersNews` | General cyber attacks, zero-days, exploit discoveries |
| **2** | **BleepingComputer** | `https://www.bleepingcomputer.com/feed/` | Ransomware, active campaigns, tech security updates |
| **3** | **CISA Alerts** | `https://www.cisa.gov/cybersecurity-advisories/all.xml` | U.S. Federal Government security advisories |
| **4** | **Krebs on Security** | `https://krebsonsecurity.com/feed/` | Investigative cybercrime, breaches, financial fraud |
| **5** | **SANS Internet Storm Center** | `https://isc.sans.edu/rssfeed_full.xml` | Network incident handling, threat diaries, honeypot telemetry |
| **6** | **Unit 42 (Palo Alto)** | `https://unit42.paloaltonetworks.com/feed/` | APT research, malware reverse engineering, threat actors |
| **7** | **Zero Day Initiative (ZDI)** | `https://www.zerodayinitiative.com/blog?format=rss` | Zero-day vulnerability disclosures, patch analysis |
| **8** | **The Record by Recorded Future** | `https://therecord.media/feed/` | Geopolitical cybersecurity, state-sponsored campaigns |
| **9** | **SecurityWeek** | `https://www.securityweek.com/feed/` | Enterprise risk, industry breaches, defense tech |
| **10** | **Dark Reading** | `https://www.darkreading.com/rss.xml` | Information security community, vulnerability research |
| **11** | **Help Net Security** | `https://www.helpnetsecurity.com/feed/` | Technical cybersecurity tutorials, tool releases |
| **12** | **CyberNews AI** | `https://www.cybernewsai.com/feed.xml` | AI security, deepfakes, algorithmic risks |
| **13** | **Microsoft Security Blog** | `https://www.microsoft.com/security/blog/feed/` | Windows/Azure threats, security research |
| **14** | **Google Security Blog** | `https://security.googleblog.com/feeds/posts/default` | Android, Chrome, cloud security research |
| **15** | **Sophos Threat Research** | `https://news.sophos.com/en-us/category/threat-research/feed/` | Endpoint defense, active adversary reports |
| **16** | **Check Point Research** | `https://research.checkpoint.com/feed/` | Malware reverse engineering, threat intelligence |
| **17** | **CrowdStrike Blog** | `https://www.crowdstrike.com/blog/feed/` | EDR intelligence, nation-state adversary tracking |
| **18** | **The DFIR Report** | `https://thedfirreport.com/feed/` | Real-world intrusion case studies, forensic timelines |
| **19** | **Wiz Research** | `https://www.wiz.io/blog/rss.xml` | Cloud infrastructure vulnerabilities (AWS, GCP, Azure) |
| **20** | **Cloudflare Security** | `https://blog.cloudflare.com/rss/` | DDoS trends, web application firewalls, edge security |
| **21** | **Cisco Talos** | `https://blog.talosintelligence.com/rss/` | Nation-state campaigns, malware IOCs, exploit telemetry |
| **22** | **Trend Micro Research** | `https://feeds.feedburner.com/TrendMicroResearch` | Vulnerability research, rootkit/ransomware investigations |
| **23** | **SentinelOne** | `https://www.sentinelone.com/blog/feed/` | Endpoint threat research, nation-state actor profiles |
| **24** | **Schneier on Security** | `https://www.schneier.com/feed/atom/` | Cryptography, privacy, and strategic security policy |
| **25** | **Malwarebytes Labs** | `https://www.malwarebytes.com/blog/feed/index.xml` | Threat intelligence, malicious infrastructure tracking |
| **26** | **ESET WeLiveSecurity** | `https://www.welivesecurity.com/en/rss/feed/` | Global APT analysis, spyware campaigns, wiper malware |
| **27** | **Cyber Security News** | `https://feeds.feedburner.com/cyber-security-news` | Active zero-days, ransomware intrusion techniques, tool updates |
| **28** | **Google Project Zero** | `https://projectzero.google/feed.xml` | Deep root-cause zero-day exploit teardowns & research |
| **29** | **GreyNoise Labs** | `https://www.greynoise.io/blog/rss.xml` | Mass internet exploit spray, honeypot telemetry, scanner profiling |

---

## 2. Active Vendor PSIRT & Security Release Feeds (14 Official Platforms & Advisories)
These official Product Security Incident Response Team (PSIRT) and official vendor security release feeds provide direct, authoritative dispatches directly from platform vendors before secondary journalism reports them. They serve as the foundational pipeline for the upcoming **P0: "My Stack / Am I Affected?"** enterprise personal radar.

| # | Vendor / Platform | Feed URL | Primary Focus & Ecosystem |
|---|---|---|---|
| **30** | **Palo Alto Networks PSIRT** | `https://security.paloaltonetworks.com/rss.xml` | PAN-OS, GlobalProtect, Prisma Access, Cortex XDR |
| **31** | **Fortinet FortiGuard PSIRT** | `https://fortiguard.fortinet.com/rss/ir.xml` | FortiOS, FortiGate, FortiManager, FortiAnalyzer |
| **32** | **Cisco PSIRT** | `https://tools.cisco.com/security/center/psirtrss20/CiscoSecurityAdvisory.xml` | Cisco IOS-XE, ASA, Duo, AnyConnect, Catalyst |
| **33** | **Ivanti Security Advisories** | `https://www.ivanti.com/blog/topics/security-advisory/rss` | Connect Secure (ICS), EPMM, Policy Secure, Neurons |
| **34** | **Microsoft MSRC** | `https://api.msrc.microsoft.com/update-guide/rss` | Patch Tuesday, Windows Server, Exchange, Entra ID, Hyper-V |
| **35** | **Red Hat Security Advisories** | `https://access.redhat.com/security/data/metrics/rhsa.rss` | RHEL, OpenShift, Ansible, JBoss enterprise packages |
| **36** | **Google Chrome Releases** | `https://feeds.feedburner.com/GoogleChromeReleases` | V8 engine zero-days, Chromium browser security fixes |
| **37** | **AWS Security Bulletins** | `https://aws.amazon.com/security/security-bulletins/feed/` | Cloud infrastructure vulnerabilities, AWS SDKs, Linux AMIs |
| **38** | **GitLab Security Releases** | `https://docs.gitlab.com/releases/patch-releases.xml` | GitLab Community & Enterprise edition critical RCE patches |
| **39** | **Ubuntu Security Notices** | `https://usn.ubuntu.com/rss.xml` | Canonical Linux kernel vulnerabilities, server packages |
| **40** | **Apple Security Updates** | `https://developer.apple.com/news/releases/rss/releases.rss` | iOS, iPadOS, macOS, Safari WebKit active zero-days |
| **41** | **GitHub Security Blog** | `https://github.blog/security/feed/` | Software supply chain, GitHub Actions security, Dependabot |
| **42** | **ZDI Published Advisories** | `https://www.zerodayinitiative.com/rss/published/` | Raw coordinated zero-day vulnerability disclosures & CVE advisories |
| **43** | **CERT-EU Security Advisories** | `https://cert.europa.eu/publications/security-advisories-rss` | Authoritative EU institutional threat alerts & critical vulnerability notices |

---

## 3. Active Threat Advisories Catalogs (1,806 Tracked Advisories)
These feeds power the **Advisories Tab** on both the mobile app and website, merged and deduplicated by CVE ID, with full offline caching via `AsyncStorage` (`@secubuzz_advisories_v2`).

### A. CISA Known Exploited Vulnerabilities (KEV) Catalog (1,756 Advisories)
- **Feed Endpoint**: `https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json`
- **Cadence**: Live on app launch & pull-to-refresh; background cached.
- **Data Provided**:
  - Confirmed active zero-days actively exploited in enterprise networks in the wild.
  - Known ransomware campaign association (`Known` vs `Unknown`).
  - U.S. Federal Government remediation deadlines under Binding Operational Directives (BOD 22-01 / BOD 26-04).
  - Direct vendor patch instructions and authoritative NVD reference links.

### B. GitHub Global Security Advisories (50 Ecosystem Advisories)
- **Feed Endpoint**: `https://api.github.com/advisories?per_page=50`
- **Cadence**: Live on app launch & pull-to-refresh; background cached.
- **Data Provided**:
  - Open-source software ecosystem vulnerabilities across Go, npm, Python (PyPI), Java (Maven), RubyGems, .NET (NuGet), and Rust (Cargo).
  - Exact first patched version (`Upgrade to vX.X.X or later`).
  - Vulnerable version ranges and CWE classification.
  - CVSS v3 and CVSS v4 severity metrics.

### C. FIRST.org EPSS (Exploit Prediction Scoring System) Telemetry
- **Proxy Endpoint**: `https://secubuzz.com/api/epss?cve={CVE-ID}`
- **Data Source**: FIRST.org EPSS Live API.
- **Cadence**: Edge-cached for 24 hours in Cloudflare Worker.
- **Data Provided**:
  - 30-day in-the-wild exploitation probability (e.g. `0.941` = 94.1% probability of weaponized exploitation in the wild).
  - Global threat percentile ranking across all published CVEs (e.g. `98th percentile`).
  - Rendered dynamically on CVE detail screens and advisory cards with zero synthetic data.

---

## 4. Ingestion Cadence, Deduplication & AI Architecture

```mermaid
graph TD
    A[43 RSS Feeds: 29 News + 14 PSIRT/Advisories] --> B[scripts/ingest.mjs: Hourly cron]
    B --> C[Candidate Extraction: Top 15 items / feed]
    C --> D[Candidate Floor: Discard items > 96h]
    D --> E[Seen URLs Filter: seen-urls.json]
    E --> F[72h Semantic Cross-Feed CVE Corroboration]
    F --> G[Dual-Tier AI Processing: Groq + Gemini + OpenRouter]
    G --> H[50-60 Word Technical Brief Generation]
    H --> I[Smart Semantic Context Deduplication]
    I --> J[Merged Feed: Retains up to 350 stories]
    J --> K[Cloudflare R2 Bucket + secubuzz.com/feed.json]
    J --> L[Zero-Stale Push Broadcast: Max 2 / cycle, <= 24h old]
```

- **Cadence**: Hourly at :17 past the hour (`17 * * * *`).
- **Retained Window**: Rolling cap of up to 350 articles (~7–10 days of continuous threat intelligence).
- **Anti-AI Slop Guardrails**: Strict prompts prohibiting generic buzzwords ("delve", "tapestry", "in today's digital landscape") in favor of concise, technical 50–60 word briefs.
- **Taxonomy Parity**:
  - News Briefs: Threat Categories (`Breach`, `Ransomware`, `CVE`, `Vulnerability`, `Nation State`, `General`) and Severities (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`).
  - Advisories: Severities (`All`, `Critical`, `High`, `Medium`, `Low`, `Ransomware`) and Sources (`All Sources`, `CISA KEV Zero-Days`, `GitHub Ecosystem`).
