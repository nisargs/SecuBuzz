# SecuBuzz Active Feeds & Threat Intelligence Sources Directory

This document provides a single source of truth for all active data feeds, security advisories, and prospective threat intelligence sources powering the SecuBuzz ecosystem.

---

## 1. Active News Feeds (Briefs Tab)
These 27 curated feeds are ingested every 2 hours by `scripts/ingest.mjs` running on GitHub Actions (`cron: "17 */2 * * *"`). Each raw item is filtered, deduplicated, and converted by dual-engine AI (Groq `openai/gpt-oss-20b` with automated fallback to Google Gemini `gemini-2.5-flash`) into concise, 60-word security briefs classified by Threat Severity (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`) and Category.

| # | Source Name | Feed URL | Primary Focus |
|---|---|---|---|
| **1** | **The Hacker News** | `https://feeds.feedburner.com/TheHackersNews` | General cyber attacks, zero-days, exploit discoveries |
| **2** | **BleepingComputer** | `https://www.bleepingcomputer.com/feed/` | Ransomware, active campaigns, tech security updates |
| **3** | **CISA Alerts** | `https://www.cisa.gov/cybersecurity-advisories/all.xml` | U.S. Federal Government security advisories |
| **4** | **Krebs on Security** | `https://krebsonsecurity.com/feed/` | Investigative cybercrime, breaches, financial fraud |
| **5** | **SANS Internet Storm Center** | `https://isc.sans.edu/rssfeed_full.xml` | Network incident handling, threat diaries, honeypot telemetry |
| **6** | **Unit 42 (Palo Alto)** | `https://unit42.paloaltonetworks.com/feed/` | APT research, malware reverse engineering, threat actors |
| **7** | **Zero Day Initiative (ZDI)** | `https://www.zerodayinitiative.com/blog?format=rss` | Zero-day vulnerability disclosures, patch analysis |
| **8** | **The Record by Recorded Future**| `https://therecord.media/feed/` | Geopolitical cybersecurity, state-sponsored campaigns |
| **9** | **SecurityWeek** | `https://www.securityweek.com/feed/` | Enterprise risk, industry breaches, defense tech |
| **10** | **Dark Reading** | `https://www.darkreading.com/rss.xml` | Information security community, vulnerability research |
| **11** | **Help Net Security** | `https://www.helpnetsecurity.com/feed/` | Technical cybersecurity tutorials, tool releases |
| **12** | **CyberNews AI** | `https://www.cybernewsai.com/feed.xml` | AI security, deepfakes, algorithmic risks |
| **13** | **Microsoft Security Blog** | `https://www.microsoft.com/security/blog/feed/` | Windows/Azure threats, Patch Tuesday advisories |
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

---

## 2. Active Threat Advisories (Advisories Tab / SecuBuzz)
These feeds are ingested by `src/services/cveService.ts`, merged, deduplicated by CVE ID, and cached offline via `AsyncStorage` (`@secubuzz_advisories_v2`).

### A. CISA Known Exploited Vulnerabilities (KEV)
- **Feed URL**: `https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json`
- **Cadence**: Live on app launch & pull-to-refresh; background cached.
- **Data Provided**:
  - Confirmed active zero-days exploited in the wild.
  - Known ransomware campaign association (`Known` vs `Unknown`).
  - U.S. Federal Government remediation deadlines under BOD 22-01 / BOD 26-04.
  - Direct vendor patch instructions and NVD links.

### B. GitHub Global Security Advisories
- **Feed URL**: `https://api.github.com/advisories?per_page=50`
- **Cadence**: Live on app launch & pull-to-refresh; background cached.
- **Data Provided**:
  - Open-source software ecosystem vulnerabilities across Go, npm, Python (PyPI), Java (Maven), RubyGems, .NET (NuGet), and Rust.
  - Exact first patched version (`Upgrade to vX.X.X or later`).
  - Vulnerable version ranges and CWE classification.
  - CVSS v3 and CVSS v4 severity metrics.

---

## 3. Threat Intelligence Roadmap Sources (Reserved for Future Tabs)
Detailed in [`docs/THREAT_INTEL_SOURCES.md`](file:///c:/SecuBuzz/docs/THREAT_INTEL_SOURCES.md):
1. **Pulsedive Threat Intelligence**: Free community API for IOC (IP, domain, hash) lookup.
2. **Sophos Intelix URL Lookup**: Live URL phishing and malware scoring.
3. **Cloudflare Radar**: 100% free public API for global internet outages and DDoS trends.
4. **OpenCVE API**: Custom vendor and tech-stack watchlists.
5. **SecurityVulnerability.io**: EPSS exploit prediction scoring.
6. **Cyber Happenings & Signalis**: Dark web ransomware leak victim trackers.
7. **Agentic Threat Tracker**: AI agent and prompt injection security vulnerabilities.
8. **Silent Push**: Pre-attack adversary infrastructure intelligence.
9. **Validin**: Historic passive DNS and certificate pivoting.
10. **NIST NVD 2.0 API**: Official U.S. National Vulnerability Database catalog.
