# SecuBuzz Architectural Rules & Persistent Memory

## 1. Expo SDK 57 Standards
- Read exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing code.
- Always preserve protocol integrity for catch-all routes (`/article/[...id].tsx`) to avoid collapsing `https://` into `https:/`.
- **SDK 58 Migration Strategy**: Expo SDK 58 (React Native 0.88) was released Oct 15, 2026. Do NOT upgrade immediately while Expo Go 58 is pending rollout on Google Play. Slated for **Release v1.1.0** to unlock native Android home screen widgets (`expo-widgets`), prebuilt `expo-modules-core` (50% faster Android builds), and `expo-notifications` `largeIcon` drawer branding.


## 2. Senior Engineering Mandate, Production Safety & Proactive Pushback
- **Do not blindly agree with everything.** Act as a proactive senior engineer, production guardian, and technical partner.
- **Production Push Freeze (Zero Unilateral Deploys):** Now that SecuBuzz is LIVE on the Google Play Store with real daily active users across 177+ countries, **NEVER directly push updates to production (`eas update --branch production` or Cloudflare Worker/web production deploys) without explicit user testing and written confirmation.**
- **Mandatory Local Testing First:** Always test UI, layout, scroll, and JavaScript changes locally first using **Fast Refresh** via `npx expo start` on the physical phone's Expo Go or Android Studio Emulator.
- **Explicit Deployment Approval Gate:** Develop, verify types and logic locally, present the verified changes to the user, and ONLY execute an OTA update or production release when the user explicitly tests, confirms, and instructs to ship.
- **Save EAS Build Quotas:** NEVER trigger an EAS cloud build for UI, layout, or JavaScript testing. Full builds are ONLY needed for native config, plugins, or permissions.

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
- **Hardware-Locked Phone Mockup Standard (`PhoneMockup.tsx`):**
  - The physical device chassis is permanently locked to a dark obsidian/titanium finish (`bg-[#0A0D14]`, `border-[3.5px] border-[#1E2638]`, `rounded-[48px]`, `ring-1 ring-white/10`).
  - **Never adapt the chassis to the website theme**: It must never use `bg-surface` or `border-line` which washes out into a pale border in white theme.
  - **No protruding button divs**: The chassis must remain flush with clean architectural corners; do not attach floating fake side button elements that stick out past the bezel.
  - **Light Mode Contrast**: Hardware realism is maintained on light backgrounds via a deep multi-tier drop shadow (`shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)]`).
  - **Clean Edge-to-Edge Navigation**: Mobile screenshots (`1.jpg`, `2.jpg`, `3.jpg`, `screenshot.jpg`, `app-screenshot.jpg`) must maintain a seamless dark `#0B0E14` base with a subtle Android gesture pill, completely eliminating any light/white OS 3-button navigation bars.
  - **Interactive 3-Screen Showcase Controller**: `PhoneMockup.tsx` provides 3 interactive tabs (`Briefs`, `Advisories`, `Bookmarks`) allowing visitors to explore the core app experiences (`/1.jpg`, `/2.jpg`, `/3.jpg`). Features smooth 500ms crossfade, a 6.5s auto-rotation with active progress line, and pause on hover/focus.

## 5. Deployment & Google Play Compliance
- **Cloudflare Worker (`worker/src/index.ts`):** Must always be deployed with `npx wrangler deploy` when routing or policy files change. Always verify live endpoints with `fetch`.
- **Policy URLs & Inbound Channels:**
  - Privacy Policy: `https://secubuzz.com/privacy`
  - Account Deletion: `https://secubuzz.com/account-deletion`
  - Contact Hub: `https://secubuzz.com/contact`
  - Both URLs and in-app screens (`privacy.tsx`, `data-privacy.tsx`) explicitly declare the app name **"SecuBuzz"** and developer **"MiSo Labs"**.
  - **Zero-Attack-Surface Contact Architecture:** Replaced insecure mock textboxes with verified 1-click Contact Action Cards and structured diagnostic templates routing directly via authenticated email protocols (`support@secubuzz.com`, `security@secubuzz.com`, `publishers@secubuzz.com`). Eliminates SQL injection, stored XSS, and database bot spam, while guaranteeing immediate notifications on team devices.
- **Desktop QR Conversion & Video Assets:**
  - High-res QR code (`/qr.png`) pointing directly to Google Play Store deployed to bridge the desktop-to-mobile conversion gap for corporate PC readers (89.8% of web traffic). Rendered on `/download` and via desktop helper triggers.
  - Product walkthrough video deployed at `/secubuzz-landscape.mp4` (with HTTP 301 redirect from legacy `/brag.mp4` in Cloudflare Worker).
- **Feed System:** `scripts/ingest.mjs` retains up to 350 articles (~7–10 days of security intelligence across 27 curated sources), scheduled every 1 hour via GitHub Actions (`cron: "17 * * * *"`). Powered by resilient tri-engine AI (Groq `openai/gpt-oss-20b` + Google Gemini `gemini-2.5-flash` + OpenRouter fallback), interleaved via hourly lead rotation (`currentHour % pool.length`) with instant failover on HTTP 429/5xx.
- **Feed Resilience & Watchdog System (Zero-Silent-Failure Mandate):**
  - **Read-Only Invariant:** `scripts/sync_website_data.mjs` is strictly read-only on `feed.json` and must NEVER write or overwrite `feed.json`.
  - **In-Pipeline Gate (`scripts/verify_feed_freshness.mjs`):** Runs in `.github/workflows/ingest.yml` before R2 upload. Asserts >= 50 articles and newest story meets adaptive threshold (<= 32h on weekends, <= 18h on weekdays) accounting for natural journalism lulls; fails CI loudly if stale.
  - **Edge Watchdog (`https://secubuzz.com/health`):** Evaluates live R2 feed age on every request. Returns HTTP 200 with feed telemetry if healthy (<= 30.0h weekends, <= 16.0h weekdays), or HTTP 503 `stale_feed` if stale (triggering external HetrixTools/Uptime monitors).
  - **Autonomous Watchdog Workflow (`.github/workflows/watchdog.yml`):** Runs every 2 hours; uses adaptive threshold (28h weekends, 12h weekdays) to prevent false alerts during regular publishing pauses.
  - **Watchdog CLI Routines:** `npm run watchdog` (checks production site freshness) and `npm run verify:feed` (local/CI integrity gate).
  - **CI Push Rebase Hygiene:** `.github/workflows/ingest.yml` runs `git pull --rebase origin main || true` before `git push` to eliminate CI race condition failures when commits land on main during ingestion.
  - **Zero-Stale-Push Mandate:**
    - Candidate floor: RSS candidate items older than 4 days (96h) are discarded before AI processing and marked as seen in `seenUrls` to prevent repeated evaluation.
    - Live Feed Invariant: Push notifications are strictly blocked unless the article is verified present in `mergedFeed`.
    - Push Freshness Invariant: Push broadcasts are strictly limited to articles published within the last 24 hours (`<= 24h`).
    - Severity Floor: Prioritized by severity weight (CRITICAL > HIGH > MEDIUM > LOW, max 2 per cycle) so users receive fresh dispatches while relying on in-app preferences to filter.
    - CISA KEV Freshness & Tap Routing: CISA zero-day alerts are strictly limited to CVEs added within 72 hours (`<= 72h`), and carry full advisory payload metadata (`articleId`, `headline`, `summary`, `articleUrl`) wired to `handleNotificationResponse` so tapping an advisory notification directly opens the advisory details screen.

## 6. Native `.aab` Releases
- **Release v1.0.3 (Version Code 9):**
  - **AMOLED Black Theme**: Added pure true-black OLED mode (`#000000`) alongside Dark and Slate.
  - **Dynamic Text Scaling**: Density selector (Compact / Standard / Comfortable) with live preview and persistent scaling.
  - **FIRST.org EPSS Telemetry**: Integrated live 30-day in-the-wild exploit probability and global threat percentiles with zero synthetic data.
  - **Feed UI Uniformity**: Consolidated quick filters inside the advisory filter sheet for a clean, distraction-free feed matching the news tab.
  - **Catalog Reconciliation**: Unified website and mobile app inventory at 1,798 tracked advisories (1,748 live CISA KEV + 50 GitHub Advisories).
- **Previous Release v1.0.2 (Version Code 8):** Header brand unification and tactile haptic feedback.

## 7. Product Evolution & Post-Approval Roadmap (Claude + ChatGPT Synthesis)
- **Current Milestone (Officially Live on Google Play Store):** Production Release `1.0.2` (Version Code 8) is fully approved and **LIVE across all 177+ countries/regions on the Google Play Store**. The 14-day testing period and Google Play production review are completed and passed. The native build freeze is officially lifted. Next phase: Post-approval marketing activation and development of P0 *"My Stack / Am I Affected?"*.
- **EPSS (Exploit Prediction Scoring System) Evaluation:** Scheduled for preliminary technical evaluation on Monday/Tuesday. EPSS is a free daily API from FIRST.org providing in-the-wild exploitation probability (e.g. 97th percentile / 0.94 probability) for CVEs. Must be lightweight and fail gracefully if offline.
- **The Core Product Pivot ("Threat-to-Action"):**
  - Transform SecuBuzz from a cybersecurity news reader into a lightweight, personal threat-intelligence assistant.
  - Pipeline: `News → CVE → KEV → EPSS → Product / Version → User Stack ("Am I Affected?") → Action`.
- **Feature Prioritization (Post-Approval v1.1+):**
  - **P0: "My Stack / Am I Affected?" (Vendor Official Feeds & Personal Radar)**:
    - **Core Vision**: Transform SecuBuzz into an indispensable enterprise vendor watchdog and personal threat pager.
    - **Vendor Official PSIRT Advisory Feeds** (to plug into `scripts/ingest.mjs`):
      - Palo Alto Networks PSIRT: `https://security.paloaltonetworks.com/rss.xml` (PAN-OS, GlobalProtect, Prisma, Cortex)
      - Microsoft MSRC: `https://api.msrc.microsoft.com/update-guide/rss` (Patch Tuesday, Windows Server, Exchange, Entra ID)
      - Cisco PSIRT: `https://tools.cisco.com/security/center/psirtrss20/CiscoSecurityAdvisory.xml` (IOS-XE, ASA, Duo, AnyConnect)
      - Fortinet PSIRT: `https://filestore.fortinet.com/fortinet/rss/psirt.xml` (FortiOS, FortiGate, FortiManager)
      - Ivanti Security Advisories: `https://www.ivanti.com/blog/topics/security-advisory/rss` (Connect Secure, EPMM)
      - VMware / Broadcom Security Advisories (VMSA)
    - **Tri-Tier In-App Experience**:
      1. *Dedicated 'My Stack' Feed*: Tab filtering 60-word briefs strictly to the user's selected vendor ecosystem.
      2. *'AFFECTS YOUR STACK' Badge*: Visual alert badge highlighting CISA KEV and CVE advisory cards matching user stack.
      3. *Targeted Push Alerting ('Pager Mode')*: Optional alert preference to only buzz device when Critical/High threats touch user's selected vendors.
    - **100% Local On-Device Architecture**: User stack saved in local `AsyncStorage` on device; zero tracking, zero cloud database cost, zero enterprise compliance risk.
  - **P0: EPSS Threat Enrichment**: Display probability percentile alongside CVSS and CISA KEV on CVE advisory cards.
  - **P1: Android Home Screen Widget (Jose's Community Request)**:
    - User/tester Jose requested an Android home screen widget.
    - Vision: Glance / AppWidget displaying the latest 60-word critical threat brief or active CISA KEV zero-day counter directly on the Android home screen without needing to open the app.
    - Technical evaluation & confirmation: Officially supported in **Expo SDK 58** via native Android `expo-widgets` (runs isolated Hermes JS bundle on Android with Material dynamic colors and `cornerRadius`). Slated to build immediately upon upgrading to SDK 58 in v1.1.0.

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

## 10. Git Hygiene & Ingestion Invariant (Mandatory)
- **ALWAYS `git pull` BEFORE PUSHING:** Never run `git push` without running `git pull` (or `git pull --rebase origin main`) first.
- **Why:** GitHub Actions (`ingest.yml`) runs on an hourly cron (`cron: "17 * * * *"`) and automatically commits fresh threat intelligence feeds directly to `origin/main`.
- **Consequence:** Pushing without pulling first causes non-fast-forward push rejections and messy merge conflicts on `feed.json` and `rss.xml`. Always pull first.
- **Store Listing Update Reminder (Mandatory)**: Maintain store listing freeze in Google Play Console during live `v1.0.2` operations. When preparing the next major native release (v1.1.0+ / "My Stack"), proactively remind the user to update the Main Store Listing text in Google Play Console using [STORE_LISTING.md](file:///c:/SecuBuzz/STORE_LISTING.md) (updating "hourly refreshed" and latest feature highlights).

## 11. API Classification, Telemetry Routines & Inventory Counts (Permanent Record)
- **Private / Admin-Protected Endpoints (HTTP 401 Unauthorized if unauthenticated):**
  - `GET /api/analytics/install-clicks`: Real-time install button click telemetry, unique visitors, repeat clickers, and breakdown by source/country.
  - `GET /api/analytics/support-clicks`: Real-time Ko-fi support link click telemetry, unique visitors, repeat clickers, and placement breakdown.
  - `GET /api/push-tokens`: Internal Expo push token registry.
  - `POST /api/push-tokens/deactivate`: Deactivation of stale/invalid device tokens.
  - `GET /api/notifications/sent` & `POST /api/notifications/sent`: Broadcast tracking & deduplication.
  - `POST /api/trigger-ingest`: Emergency workflow trigger for GitHub Actions.
  - *Protection mechanism*: Enforced by `isAuthorized(request, env)` checking `PUSH_ADMIN_SECRET` / `ADMIN_KEY` via `Authorization: Bearer <secret>`, `x-admin-key: <secret>`, or `?secret=<secret>`.
- **Public / Unauthenticated Endpoints (HTTP 200 OK):**
  - `GET /api/news` & `GET /feed.json`: Ingested 60-word cybersecurity news briefs for mobile & web (cached 300s).
  - `GET /api/advisories`: 1,789 active CVE security advisories (CISA KEV + GitHub Security Advisory Database).
  - `GET /api/epss?cve={CVE-ID}`: FIRST.org EPSS exploit probability proxy (edge-cached 24h).
  - `GET /api/cve-metrics?cve={CVE-ID}`: NIST NVD CVSS vectors proxy (edge-cached 24h).
  - `POST /api/push-tokens`: Safe write-only device registration on app install (accepts token, never returns any stored token data).
  - `GET /support`: Public 302 redirect to Ko-fi page with automatic D1 click tracking (`support_clicks`).
  - `GET /health`: Watchdog uptime endpoint reporting feed age & R2 status for external monitors (HetrixTools).
  - *Probes & Unknown `/api/*` Routes*: Always return `404 API endpoint not found`.
- **Telemetry & Count Inquiries Protocol (Zero-Fumble Responsibility):**
  - When the user asks for stats, traffic, install counts, or repeat visitor metrics:
    - **NEVER** ask the user for secrets, API keys, or credentials.
    - Run `npx wrangler d1 execute secubuzz-push-db --remote --command "..."` (via `worker/` directory) and `node scripts/cf_analytics.mjs` / `node scripts/track_repeat_users.mjs`.
    - **Mandatory 6-Point Reporting Format**: Always deliver the exact structure:
      1. *Real User Numbers (Traffic & Sessions)*: 7-day daily breakdown table of unique visitors, total requests, page views, new mobile app installs (measured by fresh push token registrations in D1), bandwidth, and top countries (US, DE, CA, NL, IN, AU, etc.).
      2. *Pages Checked*: Breakdown of RUM page views by route (`/`, `/news`, `/advisories`, `/download`, `/publishers`, `/about`, and specific CVE/brief URLs).
      3. *Repeat Users & Push Notification Fleet Reach*: Always explicitly report:
         - Subscribed Devices: count and version breakdown (v1.0.3, v1.0.2)
         - Active in last 7 days (active token seen within 7 days)
         - Active in last 48–72h (active token seen within 48–72h)
         - Uninstalled / Pruned Tokens (`is_active = 0`)
         - Web Repeat Users: Returning direct readers (bookmarks/shortcuts) and repeat clickers.
      4. *Time on Site & Engagement*: Pages/session (~2.9 pages), dwell time (~1.5–2.5 min for 60-word briefs), inbound referrers (Reddit, Google, direct), and device OS split (Windows, iOS, Android, macOS). Note bot anomalies (e.g. Germany ~16 req/visit vs US ~3 req/visit reflects cloud scrapers).
      5. *Download Clicks*: Breakdown of `/go/play` button clicks by country/source (human vs crawler) and `/download` visits.
      6. *Support & Ko-fi Clicks*: Breakdown of `/support` clicks by source (`footer_card`, `about_page`, `download_page`, `footer_nav`), unique clickers, repeat clicks, country, and recent referral stream.
- **Authoritative Inventory Counts:**
  - **Advisories count:** Exactly **1,789 active advisories** (CISA KEV ~1,530 + GitHub Advisories ~259). Kept strictly consistent across mobile app (`1,789 active`) and website (`1,789 active advisories`).
  - **News feed count:** Up to **350 articles** (~7–10 days of rolling intelligence across 27 verified threat feeds).
- **100% Free Tier ($0.00 Cost Guarantee):**
  - AI Summarization: Tri-engine architecture (Groq `openai/gpt-oss-20b` + Google Gemini `gemini-2.5-flash` + OpenRouter fallback). Primary Groq free tier ceiling is 8,000 TPM, 30 RPM, 14,400 RPD; backup Google Gemini free tier offers 1,000,000 TPM, 15 RPM, 1,500 RPD. Ingestion runs every 1 hour, batching 2 articles with a 5s backoff and automated fallback. Adding feeds or increasing feed size respects these ceilings and never incurs costs.
  - Cloudflare: Worker (100k req/day free), R2 (10GB / 1M writes free), D1 (5M reads / 100k writes free).
  - GitHub Actions: 2,000 runner minutes/month free (~480 min used with 1-hour cron, leaving ~1,520 free minutes).

## 12. Saved Post-Approval Execution Checklist (On Hold / For Later)
- [ ] **LinkedIn Profile Integration (Nisarg Soni - `soni-nisarg`)**:
  - Add `https://secubuzz.com` to Featured links (headline, 60-word briefs description).
  - Add "SecuBuzz Threat Intelligence Platform" to Projects section with tags (Threat Intel, React Native, Cloudflare Workers, CISA KEV, EPSS).
  - Optional Headline tag: *"Creator of SecuBuzz — 60-Word Cybersecurity Threat Intelligence Assistant"*.
- [ ] **HetrixTools Uptime & Watchdog Setup ($0.00 Free Tier)**:
  - 1-minute monitors for `https://secubuzz.com/health` (feed freshness watchdog), `https://secubuzz.com/` (web companion), and `https://secubuzz.com/api/advisories` (CISA KEV API).
  - Connect free Telegram or Discord webhook for 0-latency push alerts if feed age ever exceeds thresholds.
- [ ] **Bing Webmaster Tools Ongoing Inspection**:
  - Review sitemap indexing progress (2,108 URLs submitted).
  - Check AI Performance (BETA) tab for Microsoft Copilot citation tracking.
  - (Optional) Submit next 100 advisory URLs after daily priority quota resets.
- [ ] **P0 Feature Development: "My Stack / Am I Affected?" (v1.1.0)**:
  - Vendor Official PSIRT Feeds (Palo Alto, Microsoft MSRC, Cisco, Fortinet, Ivanti).
  - Local on-device `AsyncStorage` stack selection.
  - "AFFECTS YOUR STACK" visual alert badge on CISA KEV cards.
- [ ] **Expo SDK 58 Upgrade & Android Widget Activation (v1.1.0 Milestone)**:
  - **Prerequisite Gate**: Wait until Expo Go SDK 58 drops on Google Play Store and initial patch `58.0.x` stabilizes.
  - **Jose's Android Home Screen Widget (`expo-widgets`)**: Build the native threat ticker widget in TypeScript/Hermes displaying latest 60-word brief / CISA KEV zero-day counter.
  - **Notification Drawer Icon (`expo-notifications`)**: Wire `largeIcon` in app config to show crisp SecuBuzz shield in Android status drawer.
  - **Build Speed**: Leverage precompiled `libexpo-modules-core.so` on Android to cut build times in half.
- [ ] **Organic Marketing & Outreach Pipeline (Zero-Budget)**:

  - **Clint Gibler (`tl;dr sec` / OpenAI)**: On hold until P0 "My Stack / Am I Affected?" (v1.1.0) is shipped on Google Play. Message templates preserved in `docs/MARKETING_PLAYBOOK.md`.
  - **Reddit Developer Story**: On hold until account reaches 50–100 comment karma. Template preserved in `docs/MARKETING_PLAYBOOK.md` for `r/cybersecurity`, `r/sysadmin`, and `r/androidapps`.
  - **Hacker News "Show HN"**: Target Tuesday/Wednesday 8:00–9:00 AM EDT focusing on $0 edge worker architecture, zero-tracking, and strict schema AI distillation.
  - **Daily Morning LinkedIn Triage**: Daily 8:30 AM posts sharing 60-word technical briefs for active CVEs with EPSS scores.
- [ ] **Community / Custom Broadcast Push Notifications (On Hold / For Later)**:
  - **Tool Ready**: `scripts/send_custom_push.mjs` allows broadcasting custom push notifications directly to all registered mobile app devices in Cloudflare D1.
  - **Safety Features**: Defaults to `--dry-run` inspection (displays target count, active token breakdown, and payload preview) before executing live broadcasts with `--send`.
  - **Reminder Triggers for Future**:
    - Milestone celebrations (e.g., reaching 100+ active devices or 1,000 readers).
    - Announcing major feature updates (e.g., v1.1.0 "My Stack / Am I Affected?" or Android Home Screen Widgets).
    - Timed rating & feedback outreach (e.g., asking engaged readers for a review after an impactful zero-day news cycle).
- [ ] **In-App Review Dialog Upgrade (`expo-in-app-review`) (User Reminder / On Hold)**:
  - **Goal**: Replace external Google Play Store redirect with Google Play's native in-app review bottom sheet so readers can submit 5-star ratings directly within SecuBuzz without app exits.
  - **Testing Requirement**: User specifically requested to be reminded in a future update to test the in-app review dialog locally on a physical Android device before pushing to production.
- *(Note: AMOLED Black mode `#000000` is already successfully built and deployed in Release v1.0.3 / Version Code 9).*

