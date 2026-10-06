# SecuBuzz Architectural Rules & Persistent Memory

## 1. Expo SDK 57 Standards
- Read exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing code.
- Always preserve protocol integrity for catch-all routes (`/article/[...id].tsx`) to avoid collapsing `https://` into `https:/`.

## 2. Senior Engineering Mandate & Proactive Pushback
- **Do not blindly agree with everything.** Act as a proactive senior engineer and technical partner.
- **Save EAS Build Quotas:** NEVER trigger an EAS cloud build for UI, layout, or JavaScript testing. Always instruct using **Fast Refresh** with `npx expo start` via the physical phone's Expo Go or Android Studio Emulator.
- **Over-The-Air (OTA) Updates:** When `expo-updates` is active, push JS/TS/UI updates via `eas update --branch production` instead of generating new APKs or waiting for Google Play store review. Full builds are ONLY needed for native config, plugins, or permissions.

## 3. Threat Severity Classification (Objective Criteria)
- Grounded strictly in CVSS 3.1/4.0 and CISA KEV framework:
  - `CRITICAL`: Active in-the-wild zero-day exploitation; unauthenticated RCE on enterprise infrastructure/firewalls/kernels (CVSS 9.0–10.0); CISA emergency directives.
  - `HIGH`: Confirmed major data breaches (credentials/millions of users); CVSS 7.0–8.9 with public PoC; active ransomware extortion or tracked nation-state APT campaigns.
  - `MEDIUM`: Vulnerabilities requiring user interaction (phishing, CSRF, XSS); routine scheduled security patches (Patch Tuesday); phishing kits.
  - `LOW`: Informational reports, security surveys, webinars, minor bugs (CVSS < 4.0), defensive tool releases.

## 4. Design & Aesthetics (Anti-AI-Vibe / SOBER)
- Never use neon saturated cliches, glowing bubble pills, or emoji clutter (🚨⚠️).
- Severity telemetry uses a restrained 5px micro-dot, crisp 4px architectural corners, and a dynamic crimson (`#EF4444`) accent divider line for `CRITICAL` stories.
- Future Theme Roadmap:
  - Dark Mode (current default): background `#0B0F14`.
  - Future White Theme: tokens prepared in `src/theme/theme.ts` with AA/AAA contrast ratios.
  - Accent Presets: Cyan (`#4CC9F0`), Terminal Green (`#10B981`), Cyber Amber (`#F59E0B`), Slate (`#94A3B8`).

## 5. Deployment & Google Play Compliance
- **Cloudflare Worker (`worker/src/index.ts`):** Must always be deployed with `npx wrangler deploy` when routing or policy files change. Always verify live endpoints with `fetch`.
- **Policy URLs:**
  - Privacy Policy: `https://secubuzz.com/privacy`
  - Account Deletion: `https://secubuzz.com/account-deletion`
  - Both URLs and in-app screens (`privacy.tsx`, `data-privacy.tsx`) explicitly declare the app name **"SecuBuzz"** and developer **"MiSo Labs"**.
- **Feed System:** `scripts/ingest.mjs` retains up to 250 articles (~5–7 days of security intelligence), scheduled every 4 hours via Worker cron.

## 6. Native `.aab` Release (v1.0.2 / Code 6)
- **Header Brand Unification (Completed):** Replaced 'SecuRadar' with 'SecuBuzz' in `src/app/(tabs)/advisories.tsx` to unify app brand identity with `secubuzz.com` and eliminate third-party trademark/domain confusion.
- **Haptic Feedback (Completed):** Installed `expo-haptics` and wired tactile feedback into bookmarking (`SavedArticlesContext`), incident report copying (`copyReport.ts`), manual refresh (`index.tsx`, `advisories.tsx`), and theme/accent switches (`ThemeContext.tsx`).

## 7. Product Evolution & Post-Approval Roadmap (Claude + ChatGPT Synthesis)
- **Current Milestone (Production Review Phase):** 14-day closed testing completed with 100% criteria met. Production access application officially submitted on **Oct 5, 2026, 7:01 PM** and is currently in Google Play review (typically 2–7 business days). Maintain build freeze on production branch during review.
- **EPSS (Exploit Prediction Scoring System) Evaluation:** Scheduled for preliminary technical evaluation on Monday/Tuesday. EPSS is a free daily API from FIRST.org providing in-the-wild exploitation probability (e.g. 97th percentile / 0.94 probability) for CVEs. Must be lightweight and fail gracefully if offline.
- **The Core Product Pivot ("Threat-to-Action"):**
  - Transform SecuBuzz from a cybersecurity news reader into a lightweight, personal threat-intelligence assistant.
  - Pipeline: `News → CVE → KEV → EPSS → Product / Version → User Stack ("Am I Affected?") → Action`.
- **Feature Prioritization (Post-Approval v1.1+):**
  - **P0: "My Stack / Am I Affected?"**: Local, 100% on-device vendor/technology watchlist (e.g. Microsoft Exchange, Palo Alto PAN-OS, Cisco ASA, Fortinet). Matches against `vendorProject` and `product` fields already present in the article model. Zero privacy risk, zero backend cost.
  - **P0: EPSS Threat Enrichment**: Display probability percentile alongside CVSS and CISA KEV on CVE advisory cards.
  - **P1: Structured Threat Timeline**: Visual lifecycle (`Disclosed → PoC → Exploit → CISA KEV → Patch`) indicating what changed.
  - **P1: Authoritative NVD Vector Integration**: Pull CVSS v3.1/v4.0 vector strings directly from NIST NVD API.
  - **P2: Cloudflare Monetization Gateway (Agent & Scraper Micropayments)**:
    - Post-approval evaluation: Enable Cloudflare's Monetization Gateway to charge third-party AI bots, commercial LLM crawlers, and automated MCP consumers querying `secubuzz.com` feeds and API endpoints, while keeping the mobile app and human reader experience 100% free.
  - **P2: Post-Approval Health & Uptime Monitoring ($0.00 Zero-Cost Hardening)**:
    - Skipped during 14-day closed testing freeze; activate immediately upon Google Play production approval.
    - **Recommended Tool (#1): HetrixTools** (15 monitors, 1-minute check frequency, free SSL certificate expiry alerts, free domain expiration alerts, free blacklist/IP reputation monitoring, free Telegram/Discord/Webhooks, 100% ad/commercial-friendly free tier).
    - **Secondary Alternative (#2): UptimeObserver** (20 monitors, 5-minute check frequency, Telegram/Pushover/Webhooks; lacks SSL/domain expiry on free tier).
    - **Target Endpoints to Monitor**:
      1. `https://secubuzz.com/` (Website / Landing page)
      2. `https://secubuzz.com/health` (Cloudflare Worker & R2 health check)
      3. `https://secubuzz.com/api/news` (JSON article feed)
      4. `https://secubuzz.com/api/advisories` (CISA KEV / EPSS advisory feed)
  - **P2: Open-Source Media, Ingestion & ASO Tooling Stack (Post-Approval Activation)**:
    - **Play Store Screenshots & Demo Videos**:
      - `software-mansion-labs/goldie`: Open-source agentic app store screenshot & preview generator built specifically for Expo/React Native.
      - `siddharthvaddem/openscreen`: Free MIT Screen Studio alternative for professional screen recording with auto-zoom, cursor smoothing, and motion blur.
      - `feitangyuan/onetake`: Programmatic one-take product demo film generation.
    - **Threat Intelligence Expansion (Android ASB)**:
      - `docs.crawl4ai.com`: Free asynchronous LLM-friendly crawler to scrape non-RSS security tables (e.g. monthly Android Security Bulletins at `source.android.com/docs/security/bulletin/`).
    - **Anti-AI Slop Ingestion Guardrails**:
      - `petergyang/no-ai-slop` & `jalaalrd/anti-ai-slop-writing`: Strict rules integrated into `scripts/ingest.mjs` Groq prompt to eradicate AI filler words ("delve", "tapestry", "in today's digital age") and maintain razor-sharp technical 60-word briefs.
    - **SEO & Localization Strategy**:
      - `every-app/open-seo`: Open-source SEO workspace and MCP server for continuous web auditing.
      - **Localization Decision**: Reject dynamic server translation to prevent cybersecurity terminology corruption and VPS costs; localize Google Play Store listing metadata (title, short description, screenshots) for top international markets.
- **Strict Guardrails:**
  - **No UGC / Social Feeds:** Reject open comments, likes, or user-generated text. Preserves sober, no-noise positioning and avoids legal moderation liability. If community signal is added, keep it strictly to anonymous 1-tap poll metrics (e.g., *"Are you affected? Yes 30% / No 70%"*).
  - **No Full-Text Scraping for IOCs:** Do not scrape full publisher articles to extract IPs/hashes (copyright risk). Extract structured IOCs only from designated open threat feeds (ThreatFox, CISA KEV) when needed.

## 8. Go-To-Market & Organic Distribution Playbook
- Full marketing strategy and ready-to-use post templates documented in `docs/MARKETING_PLAYBOOK.md`.
- Key channels to trigger upon Google Play production approval:
  1. **Reddit:** Developer story in `r/cybersecurity` and `r/sysadmin` (focus on zero fluff, 60 words, CISA KEV, $0 cost, zero tracking).
  2. **Hacker News:** `Show HN` highlighting technical minimalism, Cloudflare edge workers, and privacy.
  3. **LinkedIn:** Daily morning 60-word threat triage posts targeting CISOs & SOC analysts.
  4. **Substack:** Weekly Friday "5-Minute Zero-Day Digest" linking back to the app.

## 9. Google Search Console & Web SEO Memory (Permanent Record)
- **Google Search Console (GSC):** ALREADY CLAIMED & ACTIVATED for `https://secubuzz.com`. Dynamic sitemap `https://secubuzz.com/sitemap.xml` is actively submitted and tracked. **NEVER suggest or ask the user to claim or verify GSC again.**
- **Primary SEO Targets & Semantic Keywords:**
  - Target phrase: "Quick Cybersecurity News in 60 Words & CISA KEV Radar".
  - Keyword clusters: `quick cybersecurity news`, `cybersecurity news quick`, `60 word cybersecurity briefs`, `CISA KEV daily tracker`, `zero day alerts`, `EPSS threat radar`.
  - Strategy: Target long-tail CVE queries and "quick / 60 words" bite-sized intent where enterprise vendors (CrowdStrike, Splunk) and legacy media (BleepingComputer) cannot compete.
- **Edge Analytics Routine:**
  - Quick health command: `npm run analytics` (or `node scripts/cf_analytics.mjs`).



