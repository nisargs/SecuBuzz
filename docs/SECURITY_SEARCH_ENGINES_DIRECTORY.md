# SecuBuzz Cybersecurity Search Engines & OSINT Directory

This reference document catalogs 31 prominent cybersecurity search engines and OSINT research platforms, analyzes their pricing models and free-tier access, categorizes their functional domains, and outlines future evaluation pathways for SecuBuzz researcher tooling and threat enrichment.

---

## 1. Quick Reference Matrix

| # | Tool Name | Primary Research Focus | Pricing / Free Tier Status | Official URL |
|---|---|---|---|---|
| **1** | **DeHashed** | Leaked credentials & compromised accounts | Freemium (Free asset search preview; full records require subscription) | [dehashed.com](https://dehashed.com/) |
| **2** | **SecurityTrails** | Passive DNS history, WHOIS, IP pivots | Free Community Tier (50 free API queries/mo + free web portal) | [securitytrails.com](https://securitytrails.com/) |
| **3** | **DorkSearch** | Fast automated Google Dorking generator | **100% Free** (Open web application with pre-built dork categories) | [dorksearch.com](https://dorksearch.com/) |
| **4** | **Exploit-DB** | Verified exploits & proof-of-concept archive | **100% Free** (Maintained by OffSec; web archive + open `searchsploit` CLI) | [exploit-db.com](https://www.exploit-db.com/) |
| **5** | **ZoomEye** | Cyberspace device & network component scanner | Free Community Tier (10,000 monthly search credits upon free registration) | [zoomeye.org](https://www.zoomeye.org/) |
| **6** | **Pulsedive** | Community threat intelligence & IOC risk scoring | Free Community Tier (Generous API allowance, IOC risk scores, threat actor mapping) | [pulsedive.com](https://pulsedive.com/) |
| **7** | **GrayhatWarfare** | Public S3 buckets, Azure Blobs, DigitalOcean | Freemium (Free search by extension/keyword with rate limits) | [grayhatwarfare.com](https://grayhatwarfare.com/) |
| **8** | **PolySwarm** | Multi-engine malware detection & hash lookup | Free Community Tier (Hash lookups and basic scanning via API & UI) | [polyswarm.network](https://polyswarm.network/) |
| **9** | **FOFA** | Cyberspace asset mapping & banner querying | Free Community Tier (Daily query points for registered researchers) | [fofa.info](https://fofa.info/) |
| **10** | **LeakIX** | Indexed public misconfigurations & open DBs | **100% Free Community Tier** (Search exposed Redis, Elasticsearch, Git, etc.) | [leakix.net](https://leakix.net/) |
| **11** | **DNSDumpster** | Fast DNS reconnaissance & subdomain mapping | **100% Free** (Maintained by HackerTarget; exports mapping graphs & CSV) | [dnsdumpster.com](https://dnsdumpster.com/) |
| **12** | **FullHunt** | Attack surface discovery & automated mapping | Free Community Tier (Subdomain enumeration and open attack surface data) | [fullhunt.io](https://fullhunt.io/) |
| **13** | **AlienVault OTX** | Open crowd-sourced threat intelligence (AT&T) | **100% Free** (Community pulses, adversary feeds, IOC lookups via API) | [otx.alienvault.com](https://otx.alienvault.com/) |
| **14** | **ONYPHE** | Attack surface discovery & cyber defense scanner | Free Community Tier (Basic search access, open ports, banners, pastes) | [onyphe.io](https://www.onyphe.io/) |
| **15** | **Grep.app** | Code search across 500,000+ public Git repos | **100% Free** (High-speed regex/string code search across GitHub) | [grep.app](https://grep.app/) |
| **16** | **URLScan.io** | Automated website scanning & DOM/network analysis | **100% Free Public Tier** (5,000 public scans/mo, screenshot, DOM, headers) | [urlscan.io](https://urlscan.io/) |
| **17** | **Vulners** | Vulnerability search across CVEs, exploits, patches| Free Community Tier (Searchable CVE database, advisory cross-referencing) | [vulners.com](https://vulners.com/) |
| **18** | **Wayback Machine**| Historical web archives & deleted page analysis | **100% Free Public Archive** (Internet Archive historical snapshots) | [web.archive.org](https://web.archive.org/) |
| **19** | **Shodan** | Search engine for Internet-connected devices | Freemium (Basic web search preview; one-time lifetime or academic free access) | [shodan.io](https://www.shodan.io/) |
| **20** | **Netlas.io** | Attack surface intelligence & perimeter mapping | Free Community Tier (Daily search credits; certificates, IP/port scans) | [netlas.io](https://netlas.io/) |
| **21** | **crt.sh** | Certificate Transparency public search (Sectigo) | **100% Free** (PostgreSQL/web database of all logged SSL/TLS certificates) | [crt.sh](https://crt.sh/) |
| **22** | **WiGLE** | Wireless network mapping & geolocation database | Free Community Tier (Search Wi-Fi SSIDs, BSSIDs, and geographic coordinates) | [wigle.net](https://wigle.net/) |
| **23** | **PublicWWW** | Source code & snippet search in web pages | Freemium (Free searches for HTML/JS/CSS source code snippets) | [publicwww.com](https://publicwww.com/) |
| **24** | **BinaryEdge** | Threat intelligence & perimeter scanning | Free Community Tier (Monthly query allowance; open ports, DNS, torrents) | [binaryedge.io](https://binaryedge.io/) |
| **25** | **GreyNoise** | Internet noise filter & opportunistic scan analysis| Free Community Tier (GreyNoise Visualizer separates noise from targeted attacks) | [greynoise.io](https://www.greynoise.io/) |
| **26** | **Hunter.io** | Professional email pattern finder & verifier | Free Tier (25 free monthly searches and verifications) | [hunter.io](https://hunter.io/) |
| **27** | **Censys** | Internet asset and certificate search engine | Free Community Tier (Monthly search quota for research & asset discovery) | [censys.com](https://censys.com/) |
| **28** | **Intelligence X**| Search engine for Tor, I2P, leaks, and archives | Freemium (Free web previews of leak archives, dark web pastes, selectors) | [intelx.io](https://intelx.io/) |
| **29** | **Packet Storm** | Security advisories, exploits, tools, and CVE PoCs| **100% Free Public Archive** (Unrestricted community security repository) | [packetstormsecurity.com](https://packetstormsecurity.com/) |
| **30** | **SearchCode** | Search 75B+ lines of code across 40M projects | **100% Free** (Comprehensive public repository code search engine) | [searchcode.com](https://searchcode.com/) |
| **31** | **VirusTotal** | Multi-engine antivirus scanner & IOC analyzer | Free Public Tier (4 requests/min, 500 requests/day for files, URLs, IPs) | [virustotal.com](https://virustotal.com/) |

---

## 2. Functional Categorization

### A. Attack Surface, Ports & Asset Scanners
* **Shodan** / **Censys** / **ZoomEye** / **FOFA** / **Netlas.io** / **BinaryEdge** / **ONYPHE** / **FullHunt**
* *Use Case*: Discovering exposed perimeter infrastructure, internet-facing operational technology (OT), industrial control systems (ICS), unauthenticated administrative panels, and banner fingerprints.

### B. DNS Reconnaissance & Certificate Discovery
* **crt.sh** / **DNSDumpster** / **SecurityTrails**
* *Use Case*: Mapping attack surface through Certificate Transparency logs, detecting undocumented staging/internal subdomains, and investigating historical DNS migrations.

### C. Threat Intelligence, IOC Scoring & Noise Filtering
* **AlienVault OTX** / **Pulsedive** / **GreyNoise** / **PolySwarm** / **VirusTotal**
* *Use Case*: Triage and validation of suspicious IP addresses, domains, and hashes. GreyNoise specifically eliminates background internet noise (mass scanners like Shodan or Mirai bots) to highlight real targeted adversary activity.

### D. Exploits, Vulnerability Tracking & PoC Repositories
* **Exploit-DB** / **Packet Storm Security** / **Vulners**
* *Use Case*: Verifying whether a disclosed CVE has a weaponized public exploit or functional proof-of-concept. Directly complements SecuBuzz's CISA KEV and vendor PSIRT tracking.

### E. Code & Leaked Secrets Search
* **Grep.app** / **SearchCode** / **PublicWWW**
* *Use Case*: Searching public GitHub/GitLab repositories for hardcoded credentials, misconfigured API secrets, vulnerable software implementations, or web page source snippets.

### F. Data Breaches, Exposed Storage & Dark Web OSINT
* **DeHashed** / **LeakIX** / **GrayhatWarfare** / **Intelligence X**
* *Use Case*: Detecting misconfigured cloud buckets (AWS S3, Azure Blobs), exposed databases (Elasticsearch, MongoDB), dark web leak chatter, and credential dumps.

### G. Web Forensic & Historic Analysis
* **URLScan.io** / **Wayback Machine** / **Hunter.io** / **WiGLE**
* *Use Case*: Safe remote detonation and DOM inspection of phishing sites without visiting them directly (URLScan); retrieving defaced, deleted, or historical pages (Wayback); email format recon (Hunter); and wardriving / wireless network tracking (WiGLE).

---

## 3. High-Value Opportunities for SecuBuzz Architecture

1. **Exploit-DB & Packet Storm Deep-Linking**:
   * When an advisory has an associated CVE, SecuBuzz can dynamically provide direct verification links to Exploit-DB (`https://www.exploit-db.com/search?cve=...`) or Vulners.
2. **URLScan & VirusTotal Safe Inspection Link**:
   * In news briefs covering active malware campaigns or malicious domains, SecuBuzz can offer a safe 1-click sandbox view via URLScan (`https://urlscan.io/search/#...`) without exposing the user to live malicious payloads.
3. **Pulsedive & AlienVault OTX Threat Feeds**:
   * Pulsedive and OTX offer generous free community APIs that can enrich SecuBuzz briefs with threat actor profiles and malicious indicator counts.
