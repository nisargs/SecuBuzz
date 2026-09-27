# SecuBuzz Threat Intelligence Sources & Future Architecture

This document catalogs the 15 threat intelligence and vulnerability resources identified for SecuBuzz, analyzes their pricing models and capabilities, and outlines proposed features for a future dedicated **Threat Intel / IOC Lookup** tab and background radar.

---

## 1. Master Resource Directory

| # | Resource Name | Endpoint / Documentation | Pricing / Free Tier | Key Capability |
|---|---|---|---|---|
| **1** | **Sophos Intelix Labs** | `https://api.labs.sophos.com/doc/` | Free tier (limited queries/mo) | Cloud-based threat telemetry & malware engine |
| **2** | **Sophos URL Lookup** | `https://api.labs.sophos.com/doc/lookup/urls` | Free tier | Real-time URL threat scoring, malware & phishing categorization |
| **3** | **OpenCVE API** | `https://docs.opencve.io/api/` | Free & Open Source | CVE database, vendor subscriptions, custom alert alerts |
| **4** | **SecurityVulnerability.io** | `https://securityvulnerability.io/` | Free web access / API | Live vulnerability tracker, EPSS exploit likelihood scores |
| **5** | **Cyber Happenings Watchlists** | `https://cyberhappenings.com/watchlists/` | Free community intelligence | Active incident tracking, ransomware leak site listings |
| **6** | **Signalis Threat Observatory** | `https://signalis.watch/` | Free community observatory | Telegram threat actor monitoring, ransomware observatory |
| **7** | **GoPivot OSINT Tools** | `https://gopivot.ing/tools/` | Free OSINT toolkit | Pivot intelligence, reverse IP/DNS lookup, ASN investigation |
| **8** | **Silent Push API** | `https://www.silentpush.com/api/` | Free community tier | Pre-attack infrastructure detection, fast-flux DNS defense |
| **9** | **Agentic Threat Tracker** | `https://agentic-threat-tracker.com/` | Free open tracker | AI agent vulnerabilities, prompt injections, LLM zero-days |
| **10** | **Pulsedive Threat Intelligence** | `https://pulsedive.com/about/api` | Free tier (generous query allowance) | IOC lookup (IP, domain, hash, URL) with risk score & threat actor mapping |
| **11** | **Validin Threat Radar** | `https://www.validin.com/pricing/` | Free Community tier | Historic passive DNS, certificate pivots, domain intelligence |
| **12** | **Cloudflare Radar** | `https://radar.cloudflare.com/` | 100% Free Public API | Global internet outages, live DDoS attack vectors, BGP routing anomalies |
| **13** | **NVD-CVEDetails API Wrapper** | `https://github.com/TheNilesh/nvd-cvedetails-api` | Open Source (Self-hosted or direct) | Streamlined JSON query wrapper for NIST NVD & CVE Details |
| **14** | **NIST NVD 2.0 API** | `https://nvd.nist.gov/developers/vulnerabilities` | 100% Free (Public API key available) | Official U.S. National Vulnerability Database catalog |
| **15** | **GitHub Global Security Advisories** | `https://docs.github.com/en/rest/security-advisories/` | 100% Free Public REST API | Open-source ecosystem advisories (npm, PyPI, Go, Rust, NuGet) |

---

## 2. Currently Ingested & Active in SecuBuzz

### A. CISA Known Exploited Vulnerabilities (KEV)
- **Endpoint**: `https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json`
- **Cost**: 100% Free (Public U.S. Federal Government feed).
- **In-App Usage**: Active in the **CVE Radar / Advisories** tab. Displays verified zero-days actively exploited in enterprise networks, ransomware campaign associations, and federal remediation deadlines.

### B. GitHub Global Security Advisories
- **Endpoint**: `https://api.github.com/advisories?per_page=50`
- **Cost**: 100% Free (No API key required for public endpoint, 60 req/hr unauth, 5000 req/hr with free token).
- **In-App Usage**: Combined with CISA KEV into the **Advisories** tab. Ingests software ecosystem flaws across npm, PyPI, Go, Cargo/Rust, and Maven, complete with patched versions, affected version ranges, and CWE types.

---

## 3. High-Value Roadmap Ideas for Future SecuBuzz Tabs & Tools

### Idea 1: "Threat Intel / IOC Lookup" Tab (Pulsedive + Sophos + Validin)
- **Concept**: A dedicated search utility where security practitioners and users can paste any **IP address, domain, URL, or file hash**.
- **Execution (Zero Cost)**:
  - Connect to **Pulsedive Free Community API**: returns instantaneous Threat Score (0–100), Risk Level (Low/Medium/High/Critical), Malicious indicators, and linked threat actors.
  - Connect to **Sophos URL Lookup API**: flags phishing, credential harvesters, and malicious redirects.
- **Value**: Transforms SecuBuzz from a passive news reader into an **active defensive security tool** on the user's phone.

### Idea 2: "Global Internet Pulse" (Cloudflare Radar)
- **Concept**: Real-time telemetry tracking global internet infrastructure health.
- **Execution (100% Free API)**:
  - Ingest Cloudflare Radar's public API:
    - Major submarine cable cuts / country-level internet blackouts (e.g. Bangladesh, Iran, Ukraine).
    - Top targeted sectors of DDoS attacks in the last 24 hours.
    - Global malicious bot vs. human traffic percentage.
- **Value**: High executive and enthusiast appeal; visually stunning data that makes SecuBuzz feel like a military-grade security operations center (SOC) terminal.

### Idea 3: "Ransomware & Dark Web Leaks" Radar (Cyber Happenings + Signalis)
- **Concept**: Track victims listed by top ransomware cartels (LockBit, BlackCat, Akira, BianLian, Play) as they are claimed on dark web extortion sites.
- **Value**: Gives enterprise IT/security leaders immediate advance notice if one of their vendors, suppliers, or partners has been breached before mainstream news reports it.

### Idea 4: "AI & Agent Security" (Agentic Threat Tracker)
- **Concept**: As enterprises deploy autonomous AI agents and MCP servers, novel attacks (prompt injection, tool-call hijacking, model weights theft) are multiplying.
- **Execution**: Introduce a dedicated **AI Agents** topic/tag in Briefs and Advisories tracking agentic framework vulnerabilities (LangChain, AutoGen, CrewAI, Ollama, etc.).

### Idea 5: "Custom Vendor Watchlist" (OpenCVE / NVD)
- **Concept**: Users select their enterprise tech stack (e.g., `Microsoft`, `Palo Alto Networks`, `Fortinet`, `Cisco`, `WordPress`).
- **Execution**: SecuBuzz alerts them specifically when a Critical (CVSS > 9.0) or active zero-day touches their chosen tech stack.

---

## 4. Architectural Rules for Future Integrations
1. **Never breach the Anti-AI / SOBER design guidelines**:
   - Maintain the `#0B0F14` dark foundation, 5px micro-dots, and AA/AAA contrast ratios.
   - Avoid gimmick clutter or emoji pills.
2. **Offline-First & Battery Preservation**:
   - Always cache responses via `AsyncStorage` with reasonable TTLs (e.g., 2–4 hours).
   - Rate-limit background polling to prevent battery drainage on physical Android/iOS devices.
3. **OTA Deployability**:
   - Implement all API fetching in pure JavaScript/TypeScript (`fetch`) to ensure all new feature rollouts can be delivered instantly via `eas update --branch production` without requiring Google Play `.aab` reviews.
