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

## 6. Next Native `.aab` Rebuild Roadmap (v1.0.2+)
- **Header Brand Unification:** Replace 'SecuRadar' with 'SecuBuzz' in `src/app/(tabs)/advisories.tsx` (line 353) to unify app brand identity with `secubuzz.com` and eliminate third-party trademark/domain confusion.
- **Haptic Feedback:** Install `expo-haptics` (`npx expo install expo-haptics`) on the next full native binary release for tactile bookmarking and refresh feedback. Do not introduce in OTA-only cycles.

## 7. Product Evolution & Post-Approval Roadmap (Claude + ChatGPT Synthesis)
- **Current Milestone (Freeze Phase):** 14-day Google Play closed testing window (~10 days remaining as of late Sept 2026). Protect build stability on production branch; no high-risk architectural rewrites during this evaluation window.
- **EPSS (Exploit Prediction Scoring System) Evaluation:** Scheduled for preliminary technical evaluation on Monday/Tuesday. EPSS is a free daily API from FIRST.org providing in-the-wild exploitation probability (e.g. 97th percentile / 0.94 probability) for CVEs. Must be lightweight and fail gracefully if offline.
- **The Core Product Pivot ("Threat-to-Action"):**
  - Transform SecuBuzz from a cybersecurity news reader into a lightweight, personal threat-intelligence assistant.
  - Pipeline: `News → CVE → KEV → EPSS → Product / Version → User Stack ("Am I Affected?") → Action`.
- **Feature Prioritization (Post-Approval v1.1+):**
  - **P0: "My Stack / Am I Affected?"**: Local, 100% on-device vendor/technology watchlist (e.g. Microsoft Exchange, Palo Alto PAN-OS, Cisco ASA, Fortinet). Matches against `vendorProject` and `product` fields already present in the article model. Zero privacy risk, zero backend cost.
  - **P0: EPSS Threat Enrichment**: Display probability percentile alongside CVSS and CISA KEV on CVE advisory cards.
  - **P1: Structured Threat Timeline**: Visual lifecycle (`Disclosed → PoC → Exploit → CISA KEV → Patch`) indicating what changed.
  - **P1: Authoritative NVD Vector Integration**: Pull CVSS v3.1/v4.0 vector strings directly from NIST NVD API.
- **Strict Guardrails:**
  - **No UGC / Social Feeds:** Reject open comments, likes, or user-generated text. Preserves sober, no-noise positioning and avoids legal moderation liability. If community signal is added, keep it strictly to anonymous 1-tap poll metrics (e.g., *"Are you affected? Yes 30% / No 70%"*).
  - **No Full-Text Scraping for IOCs:** Do not scrape full publisher articles to extract IPs/hashes (copyright risk). Extract structured IOCs only from designated open threat feeds (ThreatFox, CISA KEV) when needed.


