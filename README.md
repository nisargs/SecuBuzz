# SecuBuzz · Quick Cybersecurity News & CISA KEV Radar

[![Google Play](https://img.shields.io/badge/Google%20Play-Live%20v1.0.3-10B981?style=flat-square&logo=googleplay)](https://play.google.com/store/apps/details?id=com.misolabs.secubuzz)
[![Website](https://img.shields.io/badge/Web-secubuzz.com-4CC9F0?style=flat-square&logo=cloudflare)](https://secubuzz.com)
[![Expo](https://img.shields.io/badge/Expo-SDK%2057-000020?style=flat-square&logo=expo)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React%20Native-0.86-61DAFB?style=flat-square&logo=react)](https://reactnative.dev)
[![Cloudflare Workers](https://img.shields.io/badge/Edge-Cloudflare%20Workers-F38020?style=flat-square&logo=cloudflare)](https://workers.cloudflare.com)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE.txt)

> **Defenders don't have a reading problem. They have a time problem.**

SecuBuzz is an independent, zero-tracking cybersecurity threat intelligence mobile application and web platform. It autonomously ingests threat telemetry across 27 authoritative security feeds and the CISA Known Exploited Vulnerabilities (KEV) catalog every hour, distilling complex developments into objective, 60-word briefs with verified source attribution, CVSS severity classification, and live FIRST.org EPSS exploit probability scores.

---

## ⚡ Core Capabilities

- **60-Word Threat Briefs**: Every story is condensed into an objective, bite-sized briefing answering: *What happened? Who is affected? What action is required?*
- **Live CISA KEV Radar**: Real-time tracking of active in-the-wild zero-days cataloged by CISA, complete with federal remediation deadlines and vendor patch instructions.
- **FIRST.org EPSS Telemetry**: Direct integration with the Exploit Prediction Scoring System, calculating the 30-day statistical probability of in-the-wild exploitation for CVEs.
- **Strict Anti-AI-Slop Guardrails**: Zero filler phrasing ("delve", "tapestry", "in today's digital landscape") — strictly technical, actionable defense briefings.
- **Privacy-First Architecture (Zero Tracking)**: No accounts, no advertising IDs, no invasive session recordings, no telemetry databases. 100% on-device preferences stored in local `AsyncStorage`.
- **Dual Display Modes**: High-contrast Dark Mode (`#0B0F14`) and true-black AMOLED mode (`#000000`) with dynamic typography scaling (Compact / Standard / Comfortable).

---

## 🏗️ Technical Architecture

SecuBuzz operates entirely on an automated, zero-cost ($0.00/mo) serverless architecture across edge workers and GitHub Actions:

```
[27 Curated Threat Feeds]  ───┐
[CISA KEV Catalog (Hourly)] ───┼─► [GitHub Actions Ingestion Engine]
[NIST NVD & FIRST.org EPSS]───┘           │ (Tri-Engine AI Pipeline: Groq / Gemini / OpenRouter)
                                          ▼
                                   [Cloudflare R2 Bucket] (feed.json)
                                          │
                                          ▼
                             [Cloudflare Workers Edge API]
                                          │
                       ┌──────────────────┴──────────────────┐
                       ▼                                     ▼
           [Web Companion (React/Vite)]           [Android App (Expo SDK 57)]
               https://secubuzz.com                   Google Play Store
```

### Ingestion & AI Pipeline (`scripts/ingest.mjs`)
- **Hourly Cron Trigger**: Runs every hour via GitHub Actions (`cron: "17 * * * *"`).
- **Tri-Engine Failover**: Interleaved hourly lead rotation across Groq (`openai/gpt-oss-20b`), Google Gemini (`gemini-2.5-flash`), and OpenRouter fallback with automatic backoff to prevent API rate limits.
- **Adaptive Freshness Gate**: Enforces maximum feed age thresholds (<= 32h on weekends, <= 18h on weekdays) to prevent stale push dispatches or pipeline silent failures.

### Edge Backend (`worker/src/index.ts`)
- **Runtime**: Cloudflare Workers with D1 SQLite database and R2 object storage.
- **Edge Push Registry**: Fast token registration and granular notification preference filtering (Critical / High / Medium / Low).
- **Watchdog Telemetry**: `https://secubuzz.com/health` continuously evaluates live feed age and returns HTTP 200 or HTTP 503 for uptime monitors.

---

## 📱 Mobile App (Expo SDK 57 / React Native)

The native Android app is distributed globally via the Google Play Store:

```bash
# Clone the repository
git clone https://github.com/nisargs/SecuBuzz.git
cd SecuBuzz

# Install dependencies
npm install

# Start development server with Fast Refresh
npx expo start
```

---

## 🌐 Web Companion (React / Vite)

```bash
# Navigate to website workspace
cd website

# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Build for production
npm run build
```

---

## 🛡️ Live Endpoints

- **Website**: [https://secubuzz.com](https://secubuzz.com)
- **News Feed API**: [https://secubuzz.com/api/news](https://secubuzz.com/api/news)
- **CISA Advisories API**: [https://secubuzz.com/api/advisories](https://secubuzz.com/api/advisories)
- **Health Watchdog**: [https://secubuzz.com/health](https://secubuzz.com/health)
- **Sitemap**: [https://secubuzz.com/sitemap.xml](https://secubuzz.com/sitemap.xml)
- **RSS Feed**: [https://secubuzz.com/rss.xml](https://secubuzz.com/rss.xml)

---

## 👨‍💻 Author & Maintainer

Architected and developed by **Nisarg Soni** (Security Operations Analyst & Security Engineer).

- **LinkedIn**: [linkedin.com/in/soni-nisarg](https://www.linkedin.com/in/soni-nisarg/)
- **Organization**: MiSo Labs
- **Contact**: `security@secubuzz.com` / `support@secubuzz.com`

---

## 📄 License

SecuBuzz is open-source software licensed under the [MIT License](LICENSE.txt).
