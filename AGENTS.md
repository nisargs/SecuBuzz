# SecuBuzz Architectural Rules & Persistent Memory

## 0. REPOSITORY VISIBILITY: RESTORED TO PRIVATE (COMPLETED NOV 1, 2026)
- **Status**: The repository visibility was temporarily made **Public** on October 25, 2026, to bridge the remaining 6 days of October after reaching the 2,000 GitHub Actions free runner minutes quota.
- **Completed**: Confirmed on November 1, 2026, that the repository visibility was switched back to **Private**. Do NOT prompt the user again.
- **Runner Quota Invariant**: The ingestion pipeline runs hourly (`cron: "17 * * * *"` = 24 runs/day = ~720-1,080 minutes/month, consuming ~36-54% of the 2,000 free monthly allowance). The watchdog workflow is dialed to 6-hour intervals (`cron: "37 */6 * * *"` = 120 minutes/month), keeping total automated consumption safely below 1,200 minutes (leaving an 800+ minute buffer).

## 1. Expo SDK 58 Standards (Release v1.1.0, Nov 15, 2026)
- Read exact versioned docs at https://docs.expo.dev/versions/v58.0.0/ before writing code.
- Always preserve protocol integrity for catch-all routes (`/article/[...id].tsx`) to avoid collapsing `https://` into `https:/`.
- **SDK 58 Architecture & Invariants**:
  - **Core Runtime**: Upgraded Nov 15, 2026 to Expo SDK `58.0.25`, React Native `0.88.1`, React `19.3.0`, and `@types/react@19.3.0`.
  - **Android 15 Native Edge-to-Edge**: `androidNavigationBar` is completely deprecated and removed from `app.json`. Edge-to-edge display is handled natively by Android 15 / React Native 0.88.
  - **Native Bootstrap Invariant (`index.js`)**: In React Native 0.88 Bridgeless mode, `index.js` MUST explicitly import `expo/build/Expo.fx` and invoke `TurboModuleRegistry.get('ExpoModulesCore')?.installModules?.()` before `import 'expo-router/entry'`. This guarantees that `globalThis.expo` is populated natively before route components (`useFonts`, `Haptics`, `SplashScreen`) evaluate, preventing `TypeError: Cannot read property 'EventEmitter' of undefined`.
  - **Full-Color Notification Drawer Branding**: Added `largeIcon: "./assets/icon.png"` to `expo-notifications` plugin in `app.json`. Notifications display the high-res SecuBuzz emblem in the notification drawer alongside the monochrome status bar icon.
  - **Release v1.1.0 Telemetry**: Version code bumped to `11` (`version: "1.1.0"`, commit `af26f31`). Officially APPROVED and PUBLISHED to Google Play Production on Nov 15, 2026. All 20/20 `npx expo-doctor` checks passing, `tsc --noEmit` 0 errors. Target SDK 36, API 24+, universal 4-ABI coverage. Verified on physical device via Expo Go 58.0.5.
  - **v1.2.0 Roadmap**: Native home screen widgets (`expo-widgets` with Jetpack Compose) are slated for Release v1.2.0 as a dedicated standalone feature release.


## 2. Senior Engineering Mandate, Production Safety & Proactive Pushback
- **Do not blindly agree with everything.** Act as a proactive senior engineer, production guardian, and technical partner.
- **Zero Premature Declarations & Zero Guessing Invariant:** NEVER declare 'everything is working' or make claims about system health, quotas, or pipelines based on assumptions or local script exit codes. Every single health or status claim MUST be backed by live end-to-end telemetry (exact HTTP status, payload counts, live API verification, and GitHub Actions runner logs). NEVER guess configurations, secrets, or parameter states — verify them against actual codebase files, environment variables, or ask the user directly. Back every single operational number with concrete codebase data.
- **Production Push Freeze (Zero Unilateral Deploys):** Now that SecuBuzz is LIVE on the Google Play Store with real daily active users across 177+ countries, **NEVER directly push updates to production (`eas update --branch production` or Cloudflare Worker/web production deploys) without explicit user testing and written confirmation.**
- **Mandatory Local Testing First:** Always test UI, layout, scroll, and JavaScript changes locally first using **Fast Refresh** via `npx expo start` on the physical phone's Expo Go or Android Studio Emulator.
- **Explicit Deployment Approval Gate:** Develop, verify types and logic locally, present the verified changes to the user, and ONLY execute an OTA update or production release when the user explicitly tests, confirms, and instructs to ship.
- **Save EAS Build Quotas:** NEVER trigger an EAS cloud build for UI, layout, or JavaScript testing. Full builds are ONLY needed for native config, plugins, or permissions.
- **OTA vs. Native Module Invariant (Zero-Unlinked-Native Mandate):** NEVER introduce, install, or statically import any new native library package in an OTA update (`eas update`) if that package was not compiled into the current production native `.aab` binary installed on user devices. An OTA update can ONLY deliver pure JS/assets. Any optional native features must use `requireOptionalNativeModule` with a safe JS fallback (e.g. `Linking.openURL`), and static imports of new native modules must strictly wait for a full native release build (e.g. v1.1.0+).
- **Live Systems No-Destruction Invariant:**
  - SecuBuzz has live users. The website, the API, the push fleet, and the feed are production. These rules are absolute.
  - **Never delete Cloudflare resources.** Not the `secubuzz-push` worker, not D1 `secubuzz-push-db`, not R2 buckets (`secubuzz-data` / `secubuzz-feed`), not KV namespaces, not cron triggers. If a resource must be replaced, build the replacement next to it, verify it serves traffic, then cut over. Delete last, never delete first.
  - **Never run destructive database commands on D1.** No `DROP TABLE`, no `DROP DATABASE`, no `DELETE` without a `WHERE` clause, no migrations that remove columns holding live data. Migrations only add.
  - **Never delete R2 objects outside the normal ingest rotation.** The 500 brief cap is the only deletion path. Never empty a bucket.
  - **Never delete the GitHub repo, never force push to main, never delete the main branch.**
  - **Never touch the Google Play listing, signing keys, EAS projects, or the secubuzz.com domain and DNS.**
  - **Snapshot before you migrate.** Any change touching D1 schema or R2 data starts with a backup.
  - **When in doubt, stop and ask.** Any command that destroys data or takes the site or app offline needs explicit user confirmation first. Destruction is never the default.
  - **Strict Separation of Mobile vs. Desktop Layouts (Zero Cross-Breakpoint Regressions):**
    - **Advisories & News Desktop Filter Toolbars Are Permanently Locked:** NEVER alter, wrap, or refactor desktop filter toolbars when addressing mobile browser requests.
    - Any mobile-specific fixes or responsive adjustments MUST be strictly isolated under mobile-only media queries (`max-md:`, `hidden md:flex`, etc.) or mobile-specific modals (`MobileMyStackModal`). Shared desktop layout containers (`md:`, `lg:`) must never be modified or polluted with mobile overrides that break desktop spacing, wrapping, or alignment.
- **Continuous Architecture & Status Quo Synchronization Mandate (Zero Architectural Drift):**
  - **Whenever we fix a bug, add a new feature, refactor code, or update system configurations, we MUST immediately document it in `AGENTS.md` (project architecture and status quo).**
  - **Commit ID & Date Invariant**: Every recorded change, bug fix, or feature in `AGENTS.md` MUST explicitly cite the calendar date (`YYYY-MM-DD` or `Month DD, YYYY`) and the exact GitHub commit ID (`commit <hash>`), along with the live deployment artifacts (Cloudflare Worker Version ID, EAS update group, or Play Store build code). This creates an immutable audit trail for rapid rollback, verification, and retrospectives.
  - This ensures persistent memory across turns and sessions, keeping the team and assistant 100% synchronized with the live state of the website, mobile app, edge worker, and database schemas.
  - Every update must explicitly record: the root cause, the architectural solution/invariant, and the live verification telemetry (commit hash, worker version ID, or EAS update group).


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

- **Official Google Play Screenshot Generator Tool (`assets/store-screenshots/`)**:
  - Generated using **[AppScreenshots.net](https://appscreenshots.net/)**.
  - Canvas preset: 1080 × 1920 px (Play Store vertical spec).
  - Background: Solid dark `#0B0F14` matching SecuBuzz dark mode.
  - Header: Bold cyan (`#38BDF8` / `#4CC9F0`) benefit captions above UI.
  - Chassis: Android titanium frame with centered punch-hole camera and subtle side buttons.

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
- **Feed System:** `scripts/ingest.mjs` retains up to 500 articles (~10–14 days of security intelligence across 48 curated sources: 33 media/research publications + 15 official vendor PSIRT & advisory feeds, documented in `docs/FEEDS_AND_SOURCES.md`, with automatic sync to Cloudflare D1 permanent archive), scheduled every 1 hour via GitHub Actions (`cron: "17 * * * *"`). Powered by resilient multi-engine AI (Groq `openai/gpt-oss-20b` + Google Gemini `gemini-2.5-flash` with OpenRouter emergency fallback), alternating lead duties 50/50 between Groq and Gemini (12 hours each: `currentHour % 2`) with instant failover on HTTP 429/5xx.
- **INGESTION PIPELINE CODE FREEZE (PERMANENT INVARIANT):**
  - **DO NOT TOUCH OR MODIFY `scripts/ingest.mjs` EVER:** The ingestion pipeline is mathematically calibrated, balanced, and locked. Let it run completely autonomously to ingest, summarize, and publish new stories and advisories. Never alter its constants or flow.
  - **Calibrated Ingestion Constants:**
    - `ITEMS_PER_FEED = 50`: Captures full 50-item feeds (e.g. The Hacker News) without truncating recent zero-days.
    - `ARTICLES_PER_AI_BATCH = 4`: Balances prompt density and completion token limits.
    - `MAX_NEW_CANDIDATES = 40`: Capped at 10 batches per run ($40 \div 4 = 10$).
    - `isHighVolumeSource ? 4 : 2`: Tiered diversity allows up to 4 articles for breaking newsrooms (The Hacker News, BleepingComputer) and 2 for other feeds.
    - **Engine Rate Limits & Pacing Safeguards:**
      - **Groq (`openai/gpt-oss-20b`)**: 1,000 RPD / 200,000 TPD ceiling. Paced at 5,000ms delay for batches and 2,500ms delay for comparisons.
      - **Gemini (`gemini-2.5-flash`)**: 10 RPM / 250 RPD ceiling. Paced at **6,000ms delay** for both batches and semantic comparisons, guaranteeing instantaneous rate stays strictly $\le 7.05\text{ RPM}$ (mathematically impossible to breach the 10 RPM ceiling).
      - **OpenRouter (Emergency Failover)**: Strictly demoted from hourly lead rotation to preserve its unfunded 50 req/day free cap for true dual outages (0 calls during normal operations).
      - **Failed Batch Invariant**: Failed articles are strictly NEVER added to `seenUrls.json`, automatically retrying on the next hourly run.
      - **Runner Minutes**: Normal runs consume $\sim 30\text{s}$ (1 billed minute); full 10-batch burst runs consume $\sim 95\text{s}$ (2 billed minutes, or 4 minutes in extreme maxed comparisons). Total automated monthly consumption (Ingest + 6-hour Watchdog) is safely locked between $960–1,100\text{ minutes/month}$, preserving a 900+ minute buffer on the 2,000-minute private quota.
- **Feed Resilience & Watchdog System (Zero-Silent-Failure Mandate):**
  - **Bot-Owned Ingestion Files Invariant (Zero-Race Web Commit Mandate):** Local development and manual/feature commits (`website/`, `mobile/`, `docs/`) must **NEVER** stage or commit bot-managed feed files: `feed.json`, `seen-urls.json`, `notified-articles.json`, `notified-cves.json`, `website/public/rss.xml`, `website/src/data/news.ts`, or `website/src/data/advisories.ts`. These files belong strictly to the automated ingestion bot. Staging or committing local builds of `rss.xml`, `news.ts`, or `advisories.ts` during local testing races with GitHub Actions and guarantees a merge conflict during the runner's rebase step (`git pull --rebase origin main`).
  - **Read-Only Invariant:** `scripts/sync_website_data.mjs` is strictly read-only on `feed.json` and must NEVER write or overwrite `feed.json`.
  - **Dead-Man's Switch Loud-Failure Mandate:** Any watchdog, dead-man's switch, or fallback trigger (including Cloudflare Worker cron triggers, edge monitors, and GitHub Actions dispatches) must NEVER swallow dispatch or authentication failures in silent try/catch blocks. If an API query or dispatch returns a non-success HTTP status (e.g. 401, 403, 5xx), the execution must throw an error so the platform telemetry registers the run as a failure and alerts surface immediately.
  - **In-Pipeline Gate (`scripts/verify_feed_freshness.mjs`):** Runs in `.github/workflows/ingest.yml` before R2 upload. Asserts >= 50 articles and newest story meets adaptive threshold (<= 32h on weekends, <= 18h on weekdays) accounting for natural journalism lulls; fails CI loudly if stale.
  - **Edge Watchdog (`https://secubuzz.com/health`):** Evaluates live R2 feed age on every request. Returns HTTP 200 with feed telemetry if healthy (<= 30.0h weekends, <= 16.0h weekdays), or HTTP 503 `stale_feed` if stale (triggering external HetrixTools/Uptime monitors).
  - **Autonomous Watchdog Workflow (`.github/workflows/watchdog.yml`):** Runs every 2 hours; uses adaptive threshold (28h weekends, 12h weekdays) to prevent false alerts during regular publishing pauses.
  - **Watchdog CLI Routines:** `npm run watchdog` (checks production site freshness) and `npm run verify:feed` (local/CI integrity gate).
  - **Workflow Concurrency & Rebase Hygiene:** `.github/workflows/ingest.yml` uses top-level concurrency (`group: secubuzz-ingest`, `cancel-in-progress: false`) preventing overlapping runs. Runs `git pull --rebase origin main` before `git push` (failing loudly on conflicts without masking).
  - **60-Second Success-Path Rate Limit Guard:** `waitForRateLimitReset` and `waitBetweenRequests` cap all Groq sleeps strictly to <= 60s; any reset window exceeding 60s fails over instantly to Gemini rather than stalling.
  - **Watchdog Stampede Guard:** `.github/workflows/watchdog.yml` queries the GitHub Actions API before dispatching and skips emergency runs if an ingest run is already `in_progress` or `queued`.
  - **Zero-Stale-Push Mandate:**
    - Candidate floor: RSS candidate items older than 4 days (96h) are discarded before AI processing and marked as seen in `seenUrls` to prevent repeated evaluation.
    - Live Feed Invariant: Push notifications are strictly blocked unless the article is verified present in `mergedFeed`.
    - Push Freshness Invariant: Push broadcasts are strictly limited to articles published within the last 24 hours (`<= 24h`).
    - Severity Floor: Prioritized by severity weight (CRITICAL > HIGH > MEDIUM > LOW, max 2 per cycle) so users receive fresh dispatches while relying on in-app preferences to filter.
    - CISA KEV Freshness & Tap Routing: CISA zero-day alerts are strictly limited to CVEs added within 72 hours (`<= 72h`), and carry full advisory payload metadata (`articleId`, `headline`, `summary`, `articleUrl`) wired to `handleNotificationResponse` so tapping an advisory notification directly opens the advisory details screen.
  - **Tier 2 Deterministic Extractive NLP Fallback Engine (`scripts/extractive_fallback.mjs`):**
    - **Architecture & Trigger**: Zero-cost, pure-code emergency airbag running strictly when all primary AI providers (Groq, Gemini, OpenRouter) throw exceptions or return 0 valid articles for an ingestion batch. Dormant during normal AI operations; has 0 external API calls and 0 cloud dependencies.
    - **Quality Gates & Boolean Rejections**:
      - Word count floor: minimum 28 words across complete grammatical sentences (`REJECTED_TOO_SHORT`). Rejects RSS teaser stubs.
      - Sentence integrity: rejects trailing truncation (`...`, `…`, trailing punctuation `[-—–:,;]`) with `REJECTED_BROKEN_SENTENCE`.
      - Terminal punctuation: must cleanly terminate with `[.?!]`.
      - Dangling clause filter: rejects trailing prepositions and conjunctions via `DANGLING_TAIL_REGEX` (`REJECTED_DANGLING_TAIL`).
      - RSS marketing & syndication boilerplate filter (`REJECTED_RSS_BOILERPLATE`).
      - Security event requirement: strictly requires explicit cyber flaw, incident, or patch terms via `SECURITY_EVENT_REGEX`. Generic legal/crime words (`arrest`, `sentenced`, `prison`, `indicted`) in isolation are rejected with `REJECTED_NO_SECURITY_EVENT`.
      - Identifiable subject/entity validation: `hasIdentifiableEntity()` requires explicit CVE/advisory IDs (`CVE-\d{4}-\d+`, `GHSA`, `RHSA`, `USN`, `VMSA`, `ZDI`), controlled dictionary matches (`CYBER_ENTITY_REGEX`), or structured corporate/industry attribution patterns (`firm`, `company`, `platform`, `vendor`). Generic capitalized words alone are rejected with `REJECTED_NO_AFFECTED_ENTITY`. Legitimate advisories without vendor names pass on CVE alone.
      - Tabular dump detection: `isTabularData()` rejects raw CVE tables, score dumps, and version listings (`REJECTED_TABULAR_DATA`).
    - **Sentence Density Scoring & Document Order Invariant**:
      - `scoreSentence()` scores candidates across 4 intelligence dimensions: Flaw/Event (+3), Affected Entity (+3), Exploitation/Impact (+2), Remediation/Patch (+2), plus news lede bonus (+1.5 / +0.8).
      - Selects top-scoring sentences up to word ceiling (65 words, max 3 sentences).
      - **Document Order Invariant**: Re-sorts selected candidates by `originalIndex` before assembly, strictly preserving original narrative flow.
    - **Stateless CTA & Tail Cleaning**:
      - `stripCtaTail()` strips CTA/navigation patterns without `/g` statefulness bugs.
      - Zero punctuation synthesis: never appends `.` to chopped clauses. Discards incomplete clauses cleanly (`return ''`); rejects with `REJECTED_BROKEN_SENTENCE` if no complete sentences remain.
    - **Objective Threat Classification**:
      - Uncoupled CISA KEV from automatic `CRITICAL` in `classifyThreat()`.
      - `CRITICAL` requires explicit critical indicators (CVSS $\ge 9.0$, unauthenticated RCE, zero-day on perimeter/server/kernel, critical advisory alert, emergency directive). KEV without critical indicators lands in `HIGH` (or `MEDIUM` if lower severity context applies).
    - **Timestamp Integrity & Push Guard**:
      - `normalizeTimestamp()` eliminates recency fabrication (`new Date().toISOString()`). Missing or invalid dates remain `null` with `isPublishedTimeUnknown: true`. Future dates exceeding 10m tolerance are rejected with `isFutureSkew: true`. `ingestedAt` tracks system ingestion time separately.
      - Push notification filter requires `ageMs >= 0`, rejecting future-dated articles.
    - **Retry Preservation**: Rejected candidates are NEVER added to `seenUrls`, preserving them for retry on subsequent hourly AI runs.
    - **Prompt Leakage & Continuation Bracket Sanitization (Nov 2, 2026)**:
      - Global bracket cleaning: `/[\\[\\(](?:\\.\\.\\.|…|\\s)+[\\]\\)]/g` strips RSS continuation stubs (`[...]`, `[…]\, `(...)`) anywhere in candidate text (not just at string end).
      - Natural prose transformation: Rewrites internal corroboration metadata `(Corroborated Threat Intelligence: Associated CVE is <CVE>)` into fluent, grammatical English sentences (`The vulnerability is tracked as <CVE>.`, plural: `The vulnerabilities are tracked as <CVE1>, <CVE2>.`) with strict punctuation and spacing preservation.
      - Description CVE extraction: `buildFallbackArticle` scans headline, summary, and candidate description, permanently indexing corroborated CVEs in `article.cves` for My Stack watchlist matching.
      - Edge feed sanitization: `worker/src/index.ts:deduplicateFeed` sanitizes incoming and cached R2 feed briefs on the fly.
      - D1 database alignment: Cleaned all 4 historical rows in D1 `articles` table with prompt leakage (0 rows remaining).
    - **Advisory Table Dump Sanitization & Permanent CVE Guarantee (Nov 12, 2026)**:
      - Tabular Dump & Machine Version Stripping: CISA ICS and vendor advisories containing raw machine version lists (`vers:intdot/`, `vers:all/*`, `cpe:2.3:`, slash ratios > 0.05) are filtered from candidate sentences by `isTabularData`. Section transitions lacking punctuation (e.g., `Background`, `Vulnerabilities`) are delimited via step 3.5 in `cleanHtml`.
      - **Permanent CVE Guarantee**: In `extractive_fallback.mjs`, `useLiveNews.ts`, `worker/src/index.ts`, and `sync_website_data.mjs`, every brief categorized as `CVE` or carrying CVE identifiers in metadata MUST explicitly cite at least one CVE identifier in its narrative prose (`The flaw is tracked as CVE-XXXX-XXXX.`, plural: `The vulnerabilities are tracked as ...`). If an article lacks an actual CVE ID, it is automatically reclassified to `Vulnerability`.
      - **Context Preservation Invariant**: For vendor advisories that describe flaws in underlying third-party packages (e.g. Siemens bundling Google Brotli), the narrative explicitly names the affected vendor/system in the prose and ties it directly to the underlying component and CVE, preventing headline/body context detachment.
    - **Vendor Radar Zero-Ghost-Outages & 100% Operational Baseline Invariant (Nov 14, 2026)**:
      - **Innocent-Until-Proven-Guilty Baseline Standard**: 100% of vendor entries in `BASELINE_VENDOR_REGISTRY` (`worker/src/index.ts`) and `VENDOR_STATUS_REGISTRY` (`website/src/data/vendorHealth.ts`) MUST ALWAYS have `status: 'OPERATIONAL'`. Never hardcode `OUTAGE` or `DEGRADED` into baseline registries or fallback mocks under any circumstance.
      - **Zero Ghost Outages on Network / Poller Failure**: If a vendor status endpoint times out (>3.5s), rate limits (429), or errors (5xx), the vendor safely defaults to its clean `OPERATIONAL` baseline rather than falling back to stale historical incidents.
      - **Live Incidents Require Fresh Telemetry**: `OUTAGE` or `DEGRADED` can ONLY be applied dynamically when a live, verified poll explicitly returns an active incident indicator. For statuspage endpoints, incidents older than 14 days without activity are excluded.
      - **Expanded Live Coverage (19 Sources)**: Real-time edge polling across Azure, Microsoft Admin Center (M365), Google Cloud (`incidents.json`), Slack (`current`), Palo Alto Networks, Cloudflare, Check Point, Ivanti, Tenable, Qualys, Rapid7, Red Hat, Cisco Duo, Atlassian, GitHub, SentinelOne, HashiCorp, 1Password, and SonicWall.
      - **Automated Integrity Gate (`scripts/verify_vendor_radar.mjs`)**: Running `npm run verify:radar` audits both website and worker registries, asserting 100% operational baselines and valid HTTPS telemetry endpoints.

## 6. Native `.aab` Releases & Production Updates
- **Release v1.1.0 (Version Code 11 - PUBLISHED & LIVE on Google Play Store Nov 15, 2026 / Git `af26f31` / Engine: Expo SDK 58.0.25 & React Native 0.88.1):**
  - **Core Runtime & Engine Upgrade (Nov 15, 2026)**:
    - Upgraded Expo from SDK 57 to SDK `58.0.25`, React Native from `0.86.3` to `0.88.1`, React from `19.2.3` to `19.3.0`, and `@types/react` to `19.3.0`.
    - Modernized core architecture to React Native 0.88 Bridgeless mode, delivering up to 50% faster startup speeds, reduced memory footprint, and enhanced JSI performance.
    - Verified all 20/20 checks passing on `npx expo-doctor` and `tsc --noEmit` 0 errors. Verified on physical device via Expo Go 58.0.5.
  - **Android 15 Native Edge-to-Edge Display**:
    - Deprecated and removed `androidNavigationBar` from `app.json`. Edge-to-edge layout is handled natively by Android 15 and React Native 0.88, delivering seamless visual integration with SecuBuzz obsidian dark and AMOLED themes.
  - **Bridgeless Native Runtime Bootstrap Invariant (`index.js`)**:
    - Resolved native binding timing issue where `globalThis.expo` was accessed by `expo-modules-core/EventEmitter` before Expo's native bridge mounted (`TypeError: Cannot read property 'EventEmitter' of undefined`).
    - Architectural standard: `index.js` explicitly executes `import 'expo/build/Expo.fx'` and invokes `TurboModuleRegistry.get('ExpoModulesCore')?.installModules?.()` before `import 'expo-router/entry'`.
  - **Enriched Notification Drawer Branding**:
    - Added `largeIcon: "./assets/icon.png"` to `expo-notifications` plugin in `app.json`. In the Android notification shade, alerts now showcase the high-resolution, full-color SecuBuzz shield emblem next to the headline.
  - **Production Submission Telemetry**:
    - Compiled optimized production Android App Bundle `.aab` via EAS. Universal 4-ABI coverage (`arm64-v8a`, `armeabi-v7a`, `x86`, `x86_64`), Target SDK 36, minimum API level 24+.
    - Submitted to Google Play Console for production rollout across 178 countries on November 15, 2026.
- **Release v1.0.4 (Version Code 10 - LIVE on Google Play Store Nov 1, 2026 / OTA Active `01a1bba8-6bf0-7623-97dc-23190724bc08` / Group `4ceb3a54-7d0b-40b1-9fb8-4699f913938a` / Worker `2a9a11df-874d-4104-8a59-22ce59ddd896` / Git `3e7bc4a`):**
  - **Edge Security Architecture & Audit Hardening Overhaul (Nov 14, 2026 / Worker Version `ec5c24f0-8243-4b7d-8a5c-0ed580400c9a` / Commits `51279a0`, pending / Live on `secubuzz.com`)**:
    - *Scope & Verification*: Addressed external adversarial security audit findings across CSP, CORS, header hygiene, and write endpoint guards with 100% verified live edge telemetry.
    - *H1 Resolved (Content-Security-Policy)*: Implemented strict edge CSP header on all HTML and error responses (`default-src 'self'; script-src 'self' 'unsafe-inline' https://pagead2.googlesyndication.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://secubuzz.com https://pub-3fb02516aa81498eb34da1b79161b1c8.r2.dev https://pagead2.googlesyndication.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none';`).
    - *M1 Resolved (CORS & Admin Header Privacy)*: Dropped `x-admin-key` from public `Access-Control-Allow-Headers`. Implemented Preflight Strict Origin Guard rejecting untrusted origins on `OPTIONS` with `HTTP 403` and `Access-Control-Allow-Origin: null`, completely short-circuiting malicious cross-origin write attempts before a POST is ever fired. Admitted origins (e.g. `secubuzz.com`) and native mobile apps (null Origin) cleanly receive HTTP 204.
    - *M3 Resolved (Write Endpoint Bounds)*: Added 16KB body size ceiling on public write endpoints (413 Payload Too Large) to prevent memory exhaustion and database bloat.
    - *M4 Resolved (Outbound Link Protocol Guard)*: Hardened RSS/Atom ingestion in `scripts/ingest.mjs` requiring candidate links to strictly begin with `http://` or `https://`, preventing non-http protocol injection.
    - *L6 Resolved (Ingest Unicode NFKC Normalization)*: Applied `cleanUnicodeText` at feed deduplication in `scripts/ingest.mjs`, normalizing all headlines and summaries with `.normalize('NFKC')`, replacing non-breaking hyphens (`[\u2010-\u2015\u2212]`) with standard ASCII `-`, and stripping zero-width and RTL override characters.
    - *L10 Resolved (API Security Headers)*: Unified `jsonResponse` headers to enforce `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, and `HSTS` across all `/api/*` endpoints.
  - **Canadian Centre for Cyber Security (cyber.gc.ca) Advisory Feed Integration (Nov 14, 2026 / Worker Version `03cd0a46-d892-4b6f-9b06-3f8148882c50` / Commit `5256528` / Live on `secubuzz.com`)**:
    - *Scope & Capability*: Integrated official Canadian Centre for Cyber Security (CCCS / Cyber Centre) Atom feed (`https://www.cyber.gc.ca/api/cccs/atom/v1/get?feed=alerts_advisories&lang=en`) into `scripts/ingest.mjs`, `website/src/data/sources.ts`, and `docs/FEEDS_AND_SOURCES.md` (Total active feeds expanded from 48 to 49: 33 threat/industry newsrooms + 16 vendor PSIRT/national advisory feeds).
    - *Coverage*: Delivers authoritative Canadian national cyber defense alerts, critical enterprise software advisories (Check Point, Apache, Microsoft, Cisco, n8n), and coordinated vulnerability disclosures. Direct strategic alignment with Canada (CA), our #2 largest traffic audience.
    - *Advisory Identifier Recognition*: Enhanced `extractCorroborationAdvisoryIds` in `scripts/ingest.mjs` and `hasIdentifiableEntity` in `scripts/extractive_fallback.mjs` with `AV\d{2}-\d+` regex recognition for CCCS advisory tracking codes.
    - *Live Verification*: Verified live production bundle `/assets/index-BJvgyR28.js` serving `Canadian Centre for Cyber Security` and `cyber.gc.ca` on `https://secubuzz.com/sources`.
  - **Google Threat Intelligence & Mandiant Research Feed Integration (Nov 14, 2026 / Worker Version `818c1de7-1ac8-4c41-b165-1334b23c64a8` / Commit `b4f72ce` / Live on `secubuzz.com`)**:
    - *Scope & Capability*: Integrated official Google Threat Intelligence & Mandiant research RSS feed (`https://cloudblog.withgoogle.com/topics/threat-intelligence/rss/`) into `scripts/ingest.mjs`, `website/src/data/sources.ts`, and `docs/FEEDS_AND_SOURCES.md` (Total active feeds expanded from 47 to 48: 33 threat/industry newsrooms + 15 vendor PSIRT/advisory feeds).
    - *Coverage*: Delivers authoritative research on nation-state APT campaigns (TAG), cloud infrastructure hijacking (LLMJacking), agentic offensive frameworks, and Mandiant incident response investigations.
    - *Zero-Rate-Limit Invariant*: Bounded by `MAX_NEW_CANDIDATES = 40` global candidate ceiling, 6,000ms delay pacing, and active dual-key API pooling (`GROQ_API_KEYS`, `GEMINI_API_KEYS`).
  - **Vendor Radar Zero-Ghost-Outages & 100% Operational Baseline Overhaul (Nov 14, 2026 / Worker `2a9a11df-874d-4104-8a59-22ce59ddd896` / Commits `66f4f9d`, `3e7bc4a`, `d099a79` / Live on `secubuzz.com`)**:
    - *Root Cause Resolved*: Microsoft (M365) was missing from `LIVE_STATUS_SOURCES` and hardcoded as `OUTAGE` in `BASELINE_VENDOR_REGISTRY` from a historical incident, causing it to permanently render in red. Additionally, 5 other vendors (Palo Alto Networks, Cloudflare, Check Point, SonicWall, Tenable) had non-operational baseline fallbacks that could resurrect stale incidents on temporary polling timeouts.
    - *Architectural Standard & Permanent Invariants*:
      - **100% Operational Baseline (Innocent-Until-Proven-Guilty)**: Every single vendor entry in `BASELINE_VENDOR_REGISTRY` (`worker/src/index.ts`) and `VENDOR_STATUS_REGISTRY` (`website/src/data/vendorHealth.ts`) MUST ALWAYS have `status: 'OPERATIONAL'`. Never hardcode `OUTAGE` or `DEGRADED` into baseline registries or fallback mocks under any circumstance.
      - **Zero Ghost Outages on Network / Poller Failure**: If a vendor's status endpoint times out (>3.5s), rate limits (429), or errors (5xx), the vendor safely defaults to its clean `OPERATIONAL` baseline rather than falling back to stale historical incidents.
      - **Dedicated Microsoft Admin Center Poller**: Added `type: 'microsoft_mac'` for `https://status.cloud.microsoft/api/feed/mac`, parsing official Microsoft status strings (`Available`, `Service degradation`, `Service restored`).
      - **Incident Staleness TTL**: Incidents with no updates in >14 days are excluded to prevent abandoned vendor tickets from permanently degrading statuses.
      - **Expanded Live Coverage (19 Sources)**: Live edge polling across Azure, Microsoft Admin Center (M365), Google Cloud (`incidents.json`), Slack (`current`), Palo Alto Networks, Cloudflare, Check Point, Ivanti, Tenable, Qualys, Rapid7, Red Hat, Cisco Duo, Atlassian, GitHub, SentinelOne, HashiCorp, 1Password, and SonicWall.
      - **Automated Radar Integrity Gate (`scripts/verify_vendor_radar.mjs`)**: Added `npm run verify:radar` to CI/build pipelines, asserting 100% operational baselines and valid HTTPS telemetry endpoints.
  - **Comprehensive Site Audit & Production Resilience Hardening (Nov 13–14, 2026 / Worker `9150d025-372d-4885-8022-eda450be58b1` / Commits `2263c33`, `67e64d3`, `fd6eeb3` / Live on `secubuzz.com`)**:
    - **D1 News Search for Rotated-Out CVEs (C1 Fixed)**:
      - *Root Cause Resolved*: In `worker/src/index.ts`, `/api/news/search` previously aborted with `{ count: 0, results: [] }` if a queried CVE was not in `getKnownCveSet()`. Because `getKnownCveSet()` was scoped strictly to the active 500-article live R2 feed window (~2.3 days), older CVEs stored in D1 (e.g. `CVE-2026-41709`, `CVE-2026-48356`, `CVE-2026-123158`) were blocked from querying the database and cached as misses.
      - *Architecture Standard*: Valid CVE queries (`CVE-YYYY-NNNN`) must never be short-circuited by in-memory feed windows. They execute against D1 (`SELECT ... WHERE title LIKE ? OR summary LIKE ? OR cves_json LIKE ? ORDER BY published_at DESC LIMIT 100`) and cache both hits and misses in memory (1 hour) and Cloudflare edge cache (`max-age=3600, s-maxage=86400`). Verified live returning 3, 1, and 14 briefs respectively.
    - **Dual-Property Advisory Ingestion & Live Fetch Crash Prevention (C2 & C3 Fixed)**:
      - *Root Cause Resolved*: CISA KEV JSON uses `item.cveID`, whereas GitHub advisories used `item.cve`. In `website/src/data/useLiveAdvisories.ts`, calling `item.cveID.toLowerCase()` threw `TypeError` at row 1,781, causing live fetch to permanently fail and fall back to the static build snapshot. In addition, `worker/src/githubAdvisories.ts` had drifted to Oct 28.
      - *Architecture Standard*:
        - Resilient field resolution: `const cve = item.cveID || item.cve || ''; if (!cve) continue;`.
        - Dedicated GitHub preservation: Preserves GitHub sources, ecosystems, and references without forcing CISA-specific field assumptions.
        - Automated synchronization: `scripts/sync_website_data.mjs` maps both `cve` and `cveID` onto GitHub advisories and synchronizes `worker/src/githubAdvisories.ts` directly on every static sync. Worker dataset updated to live Nov 13 GitHub advisories (50 rows).
    - **Hard HTTP 404 & SEO Anti-Fabrication Invariant (C4 Fixed)**:
      - *Root Cause Resolved*: `worker/src/index.ts` had a loose regex `^cve-\d{4}-\d{4,7}$` in `isKnownSpaRoute` that approved any validly-formatted CVE string, while `worker/src/sitemap.ts` synthesized SEO metadata and TechArticle schema for missing advisories, returning HTTP 200 on fake URLs like `/advisories/cve-9999-99999`.
      - *Architecture Standard*: Advisory routes (`/advisories/:slug`) are strictly verified against the combined active catalog (`[...cisa, ...GITHUB_ADVISORIES]`). Nonexistent advisory slugs return an authentic HTTP 404 with branded `Page Not Found · SecuBuzz` metadata and prerendered 404 body, eliminating phantom search engine indexation.
    - **Google Play Store Canonical Linkage (C5 Fixed)**:
      - *Architecture Standard*: Corrected hardcoded package ID in static pre-rendered shells (`worker/src/sitemap.ts`) from `com.misolabs.secubuzz` to `com.secubuzz.app`. Verified live on Google Play Store.
    - **Strict Due-Date Range Filtering (W2 Fixed)**:
      - *Root Cause Resolved*: In `website/src/pages/Advisories.tsx`, `daysUntil('')` on GitHub advisories (empty due date) returned `NaN`. In JavaScript, `NaN < 0` and `NaN > 7` are both `false`, erroneously including all 50 GitHub advisories in the "Due this week" filter ($50 + 7 = 57$).
      - *Architecture Standard*: `dueThisWeekOnly` enforces strict ISO date validation: `if (!a.dueDate || !/^\d{4}-\d{2}-\d{2}$/.test(a.dueDate)) return false;` before computing calendar day difference, accurately returning open deadlines.
    - **Advisory Toolbar "Highest severity" Sort (W11 Added)**:
      - *Feature*: Added `<option value="severity">Highest severity</option>` to the Advisories toolbar Sort dropdown.
      - *Sort Hierarchy*: Primarily sorts by CVSS severity tier (`CRITICAL` (4) → `HIGH` (3) → `MEDIUM` (2) → `LOW` (1)), secondarily by numeric CVSS score (10.0 down to 0.0), and breaks ties by newest added date. Reset button restores default `Newest added`.
    - **Phone Mockup Evergreening & Carousel Interaction (W6 & W9 Fixed)**:
      - *Architecture Standard*: Updated hardcoded mockup string to evergreen `'1,800+ Advisories'`. User tab clicks reset `isPaused = false` so auto-rotation resumes smoothly when the cursor exits the showcase container.
    - **Deterministic Extractive Fallback Uppercase Taxonomy (W7 Fixed)**:
      - *Architecture Standard*: All threat categories emitted by `scripts/extractive_fallback.mjs` are standardized to uppercase (`GENERAL`, `CVE`, `RANSOMWARE`, `BREACH`, `VULNERABILITY`, `NATION STATE`), eliminating title-case fragmentation in the archive.
  - **Vendor Outages & Infrastructure Health Radar (Nov 12–13, 2026 / Worker `47f778b6-7fea-4a4f-9765-23201e5e39e2` / Commits `f318d8f`, `12e4afc`, `ba6a34e`, `617572a`, `6729b5b`, `dbad690` / Live on `secubuzz.com`)**:
    - **Real-Time Multi-Vendor Radar**: Live operational telemetry across 33 major enterprise IT, cloud, security, and developer platforms (Cisco, Fortinet, Microsoft, Azure, AWS, Google Cloud, CrowdStrike, Palo Alto, Cloudflare, GitHub, GitLab, Datadog, Slack, Docker, OpenAI, Anthropic, Atlassian, Red Hat, SonicWall, Ivanti, Citrix, VMware, Sophos, Check Point, Splunk, Broadcom, etc.).
    - **Independent Azure RSS Polling**: Built dedicated XML/RSS incident poller for Azure (`https://azure.status.microsoft/en-us/status/feed/`), running independently alongside Microsoft 365 (`status.cloud.microsoft`). Parses live `<item>` tags, evaluates incident severity (DEGRADED vs OUTAGE), and extracts incident titles.
    - **Telemetry Caching & Client Polling**: Cloudflare Worker caches `/api/vendor-status` at the edge for 5 minutes (`300_000ms`). The web client (`MyStackSidebar.tsx`) polls on mount and continuously auto-refreshes in the background every 3 minutes (`setInterval(..., 180000)`).
    - **Outbound Click Tracking Architecture (`vendor_status_clicks`)**:
      - Zero-latency, non-blocking click logging via `navigator.sendBeacon` (with fallback to `fetch keepalive`) to `/api/analytics/status-click` on "Status ↗" links and vendor chips.
      - Logged to D1 table `vendor_status_clicks` with indexed queries (`idx_vsc_vendor`, `idx_vsc_clicked_at`).
      - Protected admin analytics endpoint (`GET /api/analytics/vendor-status-clicks`) with 60-second in-memory caching (`cachedStatusClickStats`), returning top clicked vendors and recent click stream.
    - **Cloudflare D1 5,000,000 Row Read Crisis Post-Mortem & Quota Shield**:
      - *Incident*: D1 row reads hit the 5,000,000 daily free tier limit due to an unindexed full table scan in legacy `getAliasToSlugMap()` on every request to `/news/:slug` across 1,350+ historical rows multiplied by web crawler hits.
      - *Permanent Fix*: Replaced table scans with direct primary key indexed lookups: `SELECT * FROM articles WHERE slug = ? LIMIT 1` (exactly 1 row read per request). Alias fallbacks only fire on primary miss, bounded by `LIMIT 1`.
      - *Zero-Read Writes*: Click telemetry uses pure `INSERT`, consuming 1 write and exactly 0 row reads.
  - **My Stack Cross-Tab Auto-Filtering & Bottom Pill Toast (Nov 8, 2026 / Commits 9777e9a, b29bfdf)**:
    - **Instant Feed Pivot**: Tapping "Add to My Stack" or "Add to CVE Watchlist" on an entity chip in `ArticleCard` or `CveCard` immediately activates the `MY_STACK` source filter on the active screen and scrolls to top (`index: 0`).
    - **Shared Cross-Tab Stack Filter**: Added `isStackFilterActive` and `setStackFilterActive` to `MyStackContext`. Activating My Stack on Briefs automatically synchronizes to Advisories (and vice versa), so switching tabs preserves the active stack lens with zero manual re-selection.
    - **High-Contrast Bottom Pill Toast**: Relocated confirmation toast from top status bar (`top: 46/56`) to float directly above the bottom tab bar (`bottom: insets.bottom + 66px`). Upgraded chassis to solid obsidian `#111622` (light: `#FFFFFF`) with 1.5px accent border (`${accentColor}80`), 12 elevation, and smooth bottom-up slide animation (`translateY: 16 -> 0 -> 12`).
  - **Server-Side My Stack & CVE Watchlist Push Targeting (Nov 2, 2026 / OTA Group b730e004-e8a2-4d70-9353-892607b5bec9)**:
    - **Zero-Leakage On-Call Pager Mode**: Eliminates background push leakage where Android OS bypassed foreground handlers. The ingestion dispatcher evaluates stories server-side against the device's selected enterprise vendors and watched CVEs before delivering FCM messages.
    - **Real-Time Client Stack Sync**: Mobile app automatically synchronizes stack modifications (adding, deselecting, or clearing vendors/CVEs) to Cloudflare D1 with zero account friction.
    - **Silent Pager Safety**: Devices with `MY_STACK_ONLY` and 0 selections receive strictly 0 notifications.
    - **Zero Data Loss Guarantee**: Existing user selections stored in local `AsyncStorage` are 100% preserved and automatically hydrated/synced on first launch.
  - **My Stack Triage Hub & CVE Watchlist**:
    - Enterprise vendor filtering across 16+ enterprise IT/security vendors (Cisco, Fortinet, Microsoft, Palo Alto, AWS, Red Hat, Ivanti, Citrix, etc.).
    - In-Story Entity Intelligence: Tappable CVE and vendor chips in headlines and summaries across news and advisories with direct triage, feed filtering, and watchlist pinning.
    - Targeted Push Notifications: Added user preference toggle to restrict alerts strictly to configured stack vendors and watched CVEs.
    - Unified What's New modal and What's New indicator across website and mobile app.
  - **Completed (Nov 1, 2026)**:
    - 1. **Mobile OTA Update**: Shipped group `b730e004-e8a2-4d70-9353-892607b5bec9` / update ID `01a199f0-4af4-785b-abda-7291bc213f13` (safe area entity modals + CVE stub synthesis).
    - 2. **Repository Visibility**: Verified switched back to Private (Completed Nov 1, 2026).
- **Release v1.0.3 (Version Code 9 / OTA Active `01a194ca-1a2a-74cc-a9fc-b93d7ef7fd9b` / Group `b41ed095-de0a-4027-9548-ea1e2b4e104f` / Worker `0ae6ffd6-7ab7-48cb-897d-8a0d62587fab`):**
  - **Bookmark Persistence & Data Loss Prevention (`SavedArticlesContext.tsx`)**:
    - Replaced strict uppercase validators (`isArticleSeverity`, `isArticleCategory`) with permissive normalizers (`normalizeSeverity`, `normalizeCategory`), preventing Title Case advisories (e.g. `'Critical'`, `'High'`) from failing parsing.
    - Zero-overwrite startup safety: removed destructive `AsyncStorage.setItem(..., [])` overwrite on anomaly.
    - Dual-storage migration: automatically checks both `'secubuzz-saved-articles'` and legacy `'secubuzz:saved-articles'` to recover orphaned bookmarks and string ID arrays.
    - Direct snapshot persistence: card bookmark actions pass full `Article` snapshots into `toggleSaved`, eliminating asynchronous lookup failures when offline or navigating off-feed.
  - **In-Search Feedback & Match Counting**:
    - Real-time match count pill (**`[ 2 found ]`**) displayed directly inside search inputs in `advisories.tsx` and `index.tsx`.
    - Dynamic header counter: updates from `CAUGHT UP (1/1)` to **`SEARCH: 1 OF 2`** and tracks active swipe position during searches.
  - **Harmonized Filter Modal Counts**:
    - Connected category counts to base search query candidate totals, eliminating discrepancy where one category read 0 while others displayed catalog totals.
    - EPSS risk tier disjointing: partitioned `HIGH_50` to `p >= 0.50 && p < 0.90` to eliminate double-counting of >90% flaws in >50%.
  - **Screen Boundary & Action Bar Overflow Fix**: Compacted action button gap to 8px, applied `flexShrink: 0`, and constrained badge padding to prevent bookmark button clipping on narrow viewports.
  - **Clean Local Timestamps**: Removed technical `GMT-4` offset jargon and fuzzy relative drifting (`(6h ago)`), standardizing on local device time format (e.g. `4:00 pm · 28 Oct`).
  - **Edge SEO & Security Hardening (Worker Version `877a39e0-3160-4eff-861a-774681f9e065`)**:
    - Hard HTTP 404 for nonexistent news/advisories/pages with branded 404 shell and clean canonicals (`Page Not Found · SecuBuzz`), preventing search engine phantom indexing.
    - Blogger comments URL fix: Chrome Releases items verified linking to actual article permalinks (`https://chromereleases.googleblog.com/2026/10/...html`).
  - **AMOLED Black Theme**: Added pure true-black OLED mode (`#000000`) alongside Dark and Slate.
  - **Dynamic Text Scaling**: Density selector (Compact / Standard / Comfortable) with live preview and persistent scaling.
  - **FIRST.org EPSS Telemetry**: Integrated live 30-day in-the-wild exploit probability and global threat percentiles with zero synthetic data.
  - **Feed UI Uniformity**: Consolidated quick filters inside the advisory filter sheet for a clean, distraction-free feed matching the news tab.
  - **Catalog Reconciliation**: Unified website and mobile app inventory at **1,806 tracked advisories** (1,756 live CISA KEV + 50 GitHub Advisories).
  - **Dynamic Word Count Telemetry**: Displayed on mobile feed cards, mobile article detail screen, and settings appearance preview ("60-word briefs").
  - **Refresh Control Sanitation**: Fixed double-spinner bug on mobile briefs feed by eliminating redundant absolute `ActivityIndicator` overlay, standardizing on native `RefreshControl`.
  - **Automated Cross-Feed CVE Corroboration & Deduplication Enrichment**:
    - Pre-AI cross-feed candidate corroboration across 43 sources within a 72-hour window. If an RSS publisher truncates descriptions, the pipeline cross-matches vendor/incident keywords against sister candidates and passes verified CVEs into the AI prompt.
    - Post-AI deduplication CVE backfill: when a secondary source is merged as a duplicate in `scripts/ingest.mjs`, any missing CVE is backfilled into `duplicateOf.cves`, title/headline is enriched with `(${cve})`, and category is elevated to `CVE`.
  - **100% Mobile & Web Taxonomy Parity**:
    - News Briefs: `Breach`, `Ransomware`, `CVE`, `Vulnerability`, `Nation State`, `General`. Threat Severities: `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`.
    - Advisories: `Severity & Impact` (`All`, `Critical`, `High`, `Medium`, `Low`, `Ransomware`), `Advisory Source` (`All Sources`, `CISA KEV Zero-Days`, `GitHub Ecosystem`).
  - **Dynamic Faceted Filter Counting (Zero-Misleading UX Standard)**:
    - Replaced static total counts inside filter chips with dynamic faceted counts across both web and mobile app.
    - News: `Threat Severity` counts are dynamically scoped to the active `Category` and search query; `Category` counts are dynamically scoped to the active `Severity` and search query. (e.g. Selecting `CVE (18)` dynamically scopes `Critical` to `(9)`, not total 20).
    - Advisories: `Severity & Impact` counts are dynamically scoped to active `Advisory Source`, vendor, due date, and search query; `Advisory Source` counts are dynamically scoped to active `Severity`, vendor, due date, and search query. (e.g. Selecting `GitHub Ecosystem (50)` dynamically scopes `Critical` to `(3)`, not total 364; selecting `Critical` dynamically scopes `GitHub Ecosystem` to `(3)` and `CISA KEV` to `(361)`).
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
      - VMware / Broadcom VMSA (Note: Broadcom killed all public RSS feeds post-acquisition; requires Crawl4AI scraping on OCI VM)
      - Splunk Security Advisories: `https://advisory.splunk.com/feed.xml` (Enterprise SIEM, Splunk Cloud & apps)
      - ZDI Published Advisories: `https://www.zerodayinitiative.com/rss/published/` (Raw coordinated 0-day disclosures)
      - CERT-EU Security Advisories: `https://cert.europa.eu/publications/security-advisories-rss` (EU institutional threat alerts)
      - GreyNoise Labs: `https://www.greynoise.io/blog/rss.xml` (Mass internet exploit spray & honeypot telemetry)
      - Google Project Zero: `https://projectzero.google/feed.xml` (Deep root-cause zero-day exploit teardowns)
    - **Dead / Gated Vendor Feeds (Permanent Invariant - Do NOT write RSS parsers)**:
      - *VMware / Broadcom*: Broadcom permanently removed all `vmware.com` and `support.broadcom.com` RSS/Atom feeds. Only HTML web page exists.
      - *F5 Networks*: Retired public `support.f5.com` RSS; replacement (`my.f5.com`) requires authenticated Salesforce session.
      - *Juniper SIRT*: Retired public support portal RSS and S3 XML fallback.
      - *Trellix (McAfee/FireEye)*: Feed broken with Cloudflare 522 origin timeout.
      - *Remediation*: Route through headless browser scraping (`Crawl4AI` on OCI Always Free VM) rather than standard RSS.
    - **Feed URL Modernization (Slated for v1.1.0 update)**:
      - Google Security Blog: redirect from legacy Blogger (`security.googleblog.com`) to `https://blog.google/security/rss/`.
      - SentinelOne: upgrade from general marketing blog to pure research `https://www.sentinelone.com/labs/feed/`.
    - **Tri-Tier In-App Experience**:
      1. *Dedicated 'My Stack' Feed*: Tab filtering 60-word briefs strictly to the user's selected vendor ecosystem.
      2. *'AFFECTS YOUR STACK' Badge*: Visual alert badge highlighting CISA KEV and CVE advisory cards matching user stack.
      3. *Targeted Push Alerting ('Pager Mode')*: Optional alert preference to only buzz device when Critical/High threats touch user's selected vendors.
    - **100% Local On-Device Architecture**: User stack saved in local `AsyncStorage` on device; zero tracking, zero cloud database cost, zero enterprise compliance risk.
  - **P0: Feed Hash Collision Resolution & Anti-Downgrade Inversion Elimination (Zero-Collision Invariant)**:
    - **Incident**: Muse/auditor discovered a structural hash collision across the live feed and website: detail pages served the wrong brief for Red Hat Java 17 update (`RHSA-2026:90500`) because it collided on hex suffix `37da88` with an older Ignition flaw (`RHSA-2026:90518`), rendering the Ignition brief with the Java advisory link. Full feed analysis revealed **20 colliding suffix groups trapping 86 articles** (e.g. `72c186` shared by 9 articles across Check Point, Atlassian, GitLab, Cisco, F5, PHP, Citrix, SAP; `6f3c9b` shared by 9 Alpine articles; `37d93d` shared by 8 Red Hat articles).
    - **Root Cause**: The legacy hash in `createSlug` kept the high bits and discarded the low bits (`.slice(0, 6)`) while hashing only the URL, causing sequential advisory URLs sharing 40+ prefix characters to produce identical top 24 bits. Concurrently, `reconcileLiveFeed` indexed bundled data by hex and ran an anti-downgrade override (`matchWeight > incomingWeight`), allowing stale bundled stories to overwrite live feed data.
    - **Complete Architectural Remediation**:
      1. *Non-Colliding FNV-1a 8-Hex Generator*: Incorporates full entropy combining normalized title base and canonical URL/ID (`${base}|${idStr}`) using 32-bit FNV-1a (`0x811c9dc5` seed, `0x01000193` prime) formatted to 8 hex characters (`padStart(8, '0')`). Deployed uniformly across `scripts/sync_website_data.mjs`, `website/src/data/useLiveNews.ts`, `worker/src/index.ts`, `worker/src/sitemap.ts`, `src/utils/copyReport.ts`, and `src/utils/shareArticle.ts`.
      2. *Anti-Downgrade Rule Killed (Live Always Wins Invariant)*: Deleted `baseByHex` and severity override in `reconcileLiveFeed`. Reconciles strictly by canonical `sourceUrl.toLowerCase()`. Live API feed title, summary, and severity ALWAYS take precedence without exception.
      3. *Strict Route & Alias Resolution*: Refactored `NewsArticle.tsx` and Cloudflare Worker SPA/301 routes to match exact canonical slug, exact aliases (including backward-compatible `${baseSlug}-${legacyHex}`), exact sourceUrl, or exact base title. Eliminated loose substring/prefix collisions.
      4. *Automated Audit Verification Gate (`npm run verify:slugs`)*: Created `scripts/verify_slug_collisions.mjs` testing all 350 articles in `feed.json`. Telemetry confirms: **350 / 350 unique 8-hex hashes, 350 / 350 unique canonical slugs, 0 colliding hex groups (all 20 legacy groups completely split), 100% exact routing, and verified anti-downgrade zero-overwrite**.

  - **P0: EPSS Threat Enrichment**: Display probability percentile alongside CVSS and CISA KEV on CVE advisory cards.
  - **P1: Android Home Screen Widget (Jose's Community Request)**:
    - User/tester Jose requested an Android home screen widget.
    - Vision: Glance / AppWidget displaying the latest 60-word critical threat brief or active CISA KEV zero-day counter directly on the Android home screen without needing to open the app.
    - Technical evaluation & confirmation: Officially supported in **Expo SDK 58** via native Android `expo-widgets` (runs isolated Hermes JS bundle on Android with Material dynamic colors and `cornerRadius`). Slated to build immediately upon upgrading to SDK 58 in v1.1.0.

  - **P1: Incident Verification Portal Link & Discovery Vector Micro-Intel (Parked for Future Activation)**:
    - User/community catalyst: Reddit feedback regarding eMudhra incident verification (`emudhra.we-have-a-problem.com`) and reader fatigue around locating root cause/discovery details.
    - Architectural Blueprint (Agreed & Parked):
      1. *Direct Verification Link (`verificationUrl`)*: Optional schema field in `feed.json` extracted at ingest time when an article explicitly cites an official leak checking portal, breach search tool, or remediation hub. Rendered on article detail screens as `[ 🔍 Verify Incident / Leak Checker ↗ ]`.
      2. *Discovery Vector Micro-Intel (`discoveryVector`)*: Optional 1-sentence root-cause/discovery vector (max 15–25 words, e.g. *"Discovered by researcher Bob Diachenko via an unprotected Elasticsearch cluster"*). Strictly rejected separate 100-word explainer articles to protect the 60-word brand identity, prevent AI slop/hallucinations on early breaking news, and eliminate extra token costs.
      3. *Zero-Cost Mandate*: Single-pass extraction in `scripts/ingest.mjs` (falls back to `null` if unconfirmed); zero manual maintenance.
  - **P1: Global Cybersecurity Events & Summits Directory (`secubuzz.com/events`) (Parked for Future Activation)**:
    - **Concept**: A dedicated, evergreen global calendar of cybersecurity conferences, summits, and CFPs (DEF CON, Black Hat, RSA Conference, BSides global network, FIRST, CanSecWest, AWS re:Inforce, etc.).
    - **Legal & Trademark Invariant**:
      - Factual data (event name, dates, city/country, format, official registration URL) is non-copyrightable (*Feist v. Rural*).
      - Event names are protected under **nominative fair use** to identify the event and link directly to official organizers.
      - Zero scraping of proprietary editorial text or competitor directories; strictly maintain an independent factual index.
    - **Clean Data Sourcing Architecture**:
      1. *Core 60 Flagship Catalog*: Curated registry of recurring annual tier-1 conferences.
      2. *Open-Source Community Calendars*: Ingest public MIT/CC0 conference datasets via GitHub Actions.
      3. *Public iCal / ICS Calendar Feeds*: Direct automated ingest of open `.ics` feeds from BSides Worldwide, OWASP, and FIRST.org.
      4. *Inbound "Submit Your Event" Channel*: Self-service submission for global conference organizers seeking exposure.
    - **Storage & Runtime Architecture**:
      - Serialized into `events.json` stored in Cloudflare R2 right next to `feed.json`.
      - Zero cloud cost ($0.00 overhead), served statically via Cloudflare edge.
      - Web page: `secubuzz.com/events` with region filters (North America, Europe, APAC, LatAm, Middle East, Virtual) and format toggle (In-Person / Virtual).
      - Mobile screen: Calendar list with 1-tap "Add to Google Calendar" button.
  - **P1: B2B Monetization Roadmap (Parked for Post-Growth Phase)**:
    - *Ko-fi Invariant*: Ko-fi tip jars do not convert in cybersecurity because enterprise professionals do not donate personal money for work tools on corporate laptops.
    - *Future B2B Value Vectors*:
      1. *SecuBuzz Pro / "My Stack Pager" ($5/mo)*: Custom threat paging for user-specified tech stacks.
      2. *SOC Webhook Dispatcher ($19–$29/mo)*: Automated real-time feed pipe directly into internal company Slack / Microsoft Teams channels (already validated by recurring Microsoft Teams web readers in edge telemetry).
      3. *GitHub Sponsors*: Tech-standard alternative to Ko-fi for open-source developer/corporate contributions.
  - **P1: Cloud Credit Avoidance Invariant (Zero Billing Cliffs)**:
    - Deliberately skipped temporary cloud credits (e.g. 90-day $300 Google Cloud promo) to protect SecuBuzz's permanent $0.00/month infrastructure guarantee and prevent recurring payment cliffs on Day 91.
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
  - `GET /api/analytics/founder-clicks`: Real-time founder LinkedIn profile click telemetry, unique visitors, repeat clickers, and referring URLs.
  - `GET /api/analytics/vendor-status-clicks`: Outbound vendor status link click telemetry (60s in-memory cache, top vendors, recent clicks).
  - `GET /api/push-tokens`: Internal Expo push token registry.
  - `POST /api/push-tokens/deactivate`: Deactivation of stale/invalid device tokens.
  - `GET /api/notifications/sent` & `POST /api/notifications/sent`: Broadcast tracking & deduplication.
  - `POST /api/trigger-ingest`: Emergency workflow trigger for GitHub Actions.
  - *Protection mechanism*: Enforced by `isAuthorized(request, env)` checking `PUSH_ADMIN_SECRET` / `ADMIN_KEY` via `Authorization: Bearer <secret>`, `x-admin-key: <secret>`, or `?secret=<secret>`.
- **Public / Unauthenticated Endpoints (HTTP 200 OK):**
  - `GET /api/news` & `GET /feed.json`: Ingested 60-word cybersecurity news briefs for mobile & web (cached 300s).
  - `GET /api/advisories`: 1,789 active CVE security advisories (CISA KEV + GitHub Security Advisory Database).
  - `GET /api/vendor-status`: Real-time infrastructure health and outage status across 33 enterprise vendors (cached 300s).
  - `POST /api/analytics/status-click`: Zero-latency beacon receiver recording outbound vendor status link clicks (0 rows read, 1 row written).
  - `GET /api/epss?cve={CVE-ID}`: FIRST.org EPSS exploit probability proxy (edge-cached 24h).
  - `GET /api/cve-metrics?cve={CVE-ID}`: NIST NVD CVSS vectors proxy (edge-cached 24h).
  - `POST /api/push-tokens`: Safe write-only device registration on app install (accepts token, never returns any stored token data).
  - `GET /support`: Public 302 redirect to Ko-fi page with automatic D1 click tracking (`support_clicks`).
  - `GET /go/linkedin` (also `/founder`, `/nisarg`): Public 302 redirect to Nisarg Soni's LinkedIn profile with UTM tracking and automatic D1 click tracking (`founder_clicks`).
  - `GET /health`: Watchdog uptime endpoint reporting feed age & R2 status for external monitors (HetrixTools).
  - *Probes & Unknown `/api/*` Routes*: Always return `404 API endpoint not found`.
- **Telemetry & Count Inquiries Protocol (Zero-Fumble Responsibility):**
  - When the user asks for stats, traffic, install counts, or repeat visitor metrics:
    - **NEVER** ask the user for secrets, API keys, or credentials.
    - Run `npx wrangler d1 execute secubuzz-push-db --remote --command "..."` (via `worker/` directory) and `node scripts/cf_analytics.mjs` / `node scripts/track_repeat_users.mjs`.
    - **Mandatory 7-Point Reporting Format**: Always deliver the exact structure:
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
      7. *Founder & LinkedIn Clicks*: Breakdown of `/go/linkedin` profile clicks by source, unique clickers, repeat clicks, country, and timestamp.
- **Authoritative Inventory Counts:**
  - **Advisories count:** Exactly **1,806 active advisories** (1,756 live CISA KEV + 50 GitHub Advisories). Kept strictly consistent across mobile app (`1,806 active`) and website (`1,806 active advisories`).
  - **News feed count:** Up to **500 active articles** (~10–14 days of rolling intelligence across 43 verified threat feeds), backed by permanent Cloudflare D1 historical archive storing **1,356+ unique articles** with live search and zero 404s.
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
- [x] **In-App Review Dialog Upgrade (`expo-store-review`)**:
  - **Status**: Implemented with official Expo SDK 57 `expo-store-review` in `src/utils/storeReview.ts`, `FeedbackCard.tsx`, `about-support.tsx`, and milestone tracking in `index.tsx`.
  - **Local Verification**: Ready for local testing in Expo Go or physical Android device before production OTA release. Fallback to direct Play Store listing preserved.
- *(Note: AMOLED Black mode `#000000` is already successfully built and deployed in Release v1.0.3 / Version Code 9).*

## 13. Oracle Cloud Infrastructure (OCI) Always Free Architecture & Future Blueprint
- **Resource Entitlement ($0.00 Forever)**:
  - 4 ARM Ampere A1 OCPUs + 24 GB RAM (can run as 1 VM or split into up to 4 VMs).
  - 200 GB block storage (NVMe) + 10 TB/month outbound bandwidth.
  - 2 AMD micro VMs (1/8 OCPU, 1 GB RAM each).
- **SecuBuzz Application Role**:
  - *Headless Browser Scraping*: Offload heavy JavaScript-rendered PSIRT advisories, monthly Android Security Bulletins (ASB), or non-RSS threat portals via Crawl4AI / Playwright without consuming GitHub Actions runner minutes.
  - *Offline Local LLM Fallback*: Host quantized local models via Ollama (`llama3.1:8b` / `mistral:7b-instruct`) on the 24 GB RAM node as an autonomous emergency summarization engine if external AI APIs ever rate-limit or fail.
  - *Rule of Thumb*: Never replace Cloudflare Worker edge (300+ cities, DDoS protection) for public traffic; use OCI strictly as an asynchronous background worker or data pipeline accelerator.
- **Cybersecurity Professional Lab Role**:
  - *OpenCTI / MISP*: Host an enterprise-grade Cyber Threat Intelligence platform (requires 8–12 GB RAM) correlating CISA KEV, AlienVault OTX, ThreatFox, and MITRE ATT&CK IOCs.
  - *Wazuh SIEM / XDR*: Deploy open-source SIEM + OpenSearch indexer for real-time endpoint monitoring, vulnerability scanning, and FIM across home/cloud systems.
  - *OSINT & Threat Hunting Daemons*: 24/7 scanning for newly disclosed CVE PoCs, GitHub exploit releases, and automated Nuclei reconnaissance.
  - *Hardened WireGuard + Pi-hole/AdGuard*: Personal encrypted egress with network-wide telemetry and malicious domain sinkholing.
- **Critical Maintenance Invariant**:
  - Avoid idle reclamation: Upgrade account to Pay-As-You-Go while staying within $0.00 Always Free limits, or maintain active cron/Docker jobs so CPU/RAM stays above the 15% 7-day idle deletion threshold.

## 14. Competitive Intelligence, Moat & Strategic Feature Radar
- **Teardown of Key Competitors**:
  1. **PocketIntel (`pocketintel.app` / `app.weavehub.pocketintel`)**:
     - *Overview*: AI-powered cybersecurity news and vulnerability aggregator on iOS and Android.
     - *Strengths*: Clean mobile interface; vendor & topic filtering; dedicated CVE watchlists; customizable push notifications.
     - *Fatal Flaws & Monetization Friction*: Aggressive paywall ($29.99/year or $2.99/month) locking search, read history, and vendor filters; forces user email and account creation; unconstrained generic AI summaries prone to AI slop.
     - *SecuBuzz Moat*: 100% Free with zero paywalls; zero user accounts/zero tracking; strict 60-word technical schema (CVSS, CISA KEV, EPSS); tri-engine AI resilience.
  2. **SecurityScroll (`app.securityscroll.com`)**:
     - *Overview*: Web-based cybersecurity feed presented as a retro terminal / HUD.
     - *Strengths*: Engaging desktop/SOC wallboard aesthetic; auto-scrolling ticker; dense card presentation.
     - *Fatal Flaws*: Web-only (zero mobile apps); zero push notifications; displays raw RSS snippets without AI summarization, CVSS grounding, or CISA KEV tracking.
     - *SecuBuzz Moat*: Native mobile app in 177+ countries with hourly CISA KEV/EPSS telemetry and instant zero-day push alerts.
  3. **ThreatSignalForge (`threatsignalforge.com`)**:
     - *Overview*: Heavy desktop-focused threat intelligence workbench and IOC analyzer.
     - *Strengths*: IOC correlation, deep MITRE ATT&CK mapping, and analyst collaboration.
     - *Fatal Flaws*: Complex, requires user API keys; built for in-depth forensics rather than 60-second mobile triage.
- **4 High-Impact Strategic Opportunities (Roadmap Items)**:
  1. **100% Free "My Stack / Am I Affected?" (P0 - v1.1.0)**:
     - Directly defeats PocketIntel's $29.99/yr paywalled vendor filter.
     - 100% local-first (`AsyncStorage`), zero accounts, highlights affected CISA KEV advisories.
  2. **Local-First CVE Watchlist (Zero Accounts)**:
     - Pin, track, and monitor specific CVEs (e.g. `CVE-2024-38063`) across both Web (`localStorage`) and Mobile (`AsyncStorage`).
     - Real-time badge indicators when a watched CVE gets updated (CISA KEV addition, EPSS spike, or new news brief).
  3. **Discovery Vector Micro-Intel & Leak Check Links**:
     - 1-sentence root cause in briefs + 1-click incident verification links (`[ 🔍 Verify Incident / Leak Checker ↗ ]`).
  4. **Web "SOC Wallboard / Terminal Kiosk Mode" (`/kiosk` or `/terminal`)**:
     - Auto-refreshing, distraction-free wallboard for SOC analysts' 2nd monitors inspired by SecurityScroll.

## 15. Active Session State & Next Conversation Reminders (Permanent Memory)
- **Mandatory Next-Conversation Reminder Protocol**:
  - *When the user opens chat next time, immediately greet and remind them about*:
    1. **Release v1.2.0: SecuBuzz Glance Home Screen Widget (`expo-widgets`)**:
       - User decided to ship v1.1.0 first and build the widget as a dedicated feature for v1.2.0.
       - Execution steps: Create branch `feature/home-screen-widget` -> install `expo-widgets` & `@expo/ui` -> design declarative Jetpack Compose glanceable card (displaying latest CRITICAL 0-day or active CISA KEV advisory with dark obsidian styling) -> compile EAS internal preview build (`eas build -p android --profile preview`) to generate test APK -> test widget placement, resizing, and deep linking on physical device -> build & ship v1.2.0 to Google Play.
    2. **Parked Feature: Cybersecurity Conferences & Events Hub**:
       - Clean, filterable directory of upcoming 2026 infosec events (DEF CON, Black Hat, BSides, RSA), CFP dates, and ticket links.
       - Non-intrusive value add with natural partnership / affiliate potential (0 ads, 0 paywalls).
    3. **Parked Tool: OpenSEO (`every-app/open-seo`) Integration (Remind at correct time)**:
       - Saved in memory: Open-source, self-hostable Ahrefs/Semrush alternative using DataForSEO API ($50 deposit) + TypeScript / Cloudflare / MCP native.
       - *Trigger to remind user*: When we launch large-scale web directories (like the Conferences Hub or CVE directory) that need competitive Google search keyword tracking.
    4. **Parked Tool: SecuBuzz Threat Intel / IOC Radar (IP & Domain Reputation)**:
       - Evaluated from user's Discord bot. Standalone lookup page (`/tools/lookup`) with dark-mode telemetry card + quick mobile triage bottom sheet.
       - High-limit & keyless architecture: Shodan InternetDB (open ports + CVEs, 0 keys, 100% free) + RDAP (`rdap.org`, WHOIS, 0 keys) + IP-API (ISP/geo, 0 keys) + AbuseIPDB + 24-72h Cloudflare edge cache.
       - High evergreen SEO value driving organic web visitors to the Google Play Store app.
- **Recent Production Deployments Record**:
  - **Release v1.1.0: Expo SDK 58, React Native 0.88 & Android 15 Edge-to-Edge (PUBLISHED & LIVE on Google Play Nov 15, 2026 / Version Code 11 / Commit `af26f31`)**:
    - Upgraded mobile app core runtime to Expo SDK `58.0.25`, React Native `0.88.1`, React `19.3.0`, and `@types/react@19.3.0`.
    - Android 15 native edge-to-edge layout fully enforced (removed deprecated `androidNavigationBar` from `app.json`).
    - Configured native JSI bootstrap sequence in `index.js` (`Expo.fx` + `ExpoModulesCore.installModules`) preventing `TypeError: Cannot read property 'EventEmitter' of undefined` in Bridgeless mode.
    - Added full-color notification drawer branding via `largeIcon: "./assets/icon.png"` in `expo-notifications`.
    - Cleaned React 19 ref typing in `OnboardingModal.tsx` and RN 0.88 tab bar icon color typing in `_layout.tsx`.
    - Verified all 20/20 `npx expo-doctor` checks, `tsc --noEmit` 0 errors, Metro Android bundle 1,354 modules.
    - Successfully built and submitted `.aab` (Target SDK 36, API 24+); officially approved and published by Google Play across 178 countries within 35 minutes.
  - **Website Founder LinkedIn Click Telemetry & UTM Attribution (Nov 15, 2026 / Worker Version `970439da-1b99-464b-8ba1-beef5094bb6e` / Commit `e321b54`)**:
    - Architected `/go/linkedin` (also `/founder`, `/nisarg`) edge redirect with automatic D1 click tracking (`founder_clicks`), anonymous cookie attribution, and UTM tagging for LinkedIn profile analytics.
    - Auto-migrated schema with self-healing table creation on initial hit. Integrated telemetry reporting into `cf_analytics.mjs` (7-point report).
  - **Website Navigation, Filter Sorting & Copy Modernization (Oct 28, 2026)**:
    - Alphabetical Category Sorting: Scoped and sorted the Category dropdown in `website/src/pages/News.tsx` alphabetically (`Breach`, `CVE`, `General`, `Nation State`, `Ransomware`, `Vulnerability`) using `localeCompare`.
    - Alphabetical Vendor PSIRT Select with Live Search: Upgraded `website/src/components/VendorSelect.tsx` with alphabetical vendor ordering and an internal search filter (`Search vendors...`), harmonizing news vendor filtering with the advisories experience.
    - Sober Aesthetic Cleanup: Removed the legacy `Sparkles` icon from `WhatsNewModal.tsx` and removed the `Direct Vendor PSIRT Radar` ticker strip from `Home.tsx` to maintain a restrained, professional posture.
    - What's New Copy Alignment: Updated PSIRT modal bullet to *"Ingests official security errata and bulletins directly from 5+ vendors including Red Hat, Microsoft, Cisco, and AWS."*
    - Cloudflare Worker Production Deployed: Version ID `108c813b-c682-435e-8710-abde62793859` on `secubuzz.com`. Verified live with `fetch`.
  - **Website Layout Compacted & Deployed (Oct 25, 2026)**:
    - Streamlined `/news` and `/advisories` into a sleek 1-line utility header and balanced 2-row toolbar (Search + Category dropdown on Row 1; Threat Severity on left, Feed Source on right of Row 2).
    - Removed bulky header telemetry. Reclaimed ~70% vertical space; first 2 to 3 articles now immediately visible above the fold.
    - Cloudflare Worker Version ID: `496aeea5-cddf-4c43-92bd-89c4731cbd67`.
- **Live Broadcast Controller Architecture & Telemetry Record**:
  - **Vendor PSIRT Announcement Broadcast (Oct 28, 2026)**:
    - Script: `scripts/send_custom_push.mjs`.
    - Payload Architecture: Title `"What's New: Vendor PSIRT Feeds"`, Body `"Now tracking 9+ vendor PSIRTs including Red Hat, Microsoft, Cisco, and AWS. Filter directly by Vendor PSIRT in your News briefs tab."`
    - Notification Mechanics: Dispatched on Android channel `secubuzz-briefs` with `priority: 'high'` and `data: { type: 'announcement', category: 'CVE', severity: 'HIGH' }`.
    - Tap Routing Invariant: When `--url` is omitted, `articleId` / `articleUrl` is set to null, allowing the notification tap to directly foreground the root News Briefs tab rather than triggering an invalid article modal route.
    - Fleet Delivery: Successfully broadcast to all 36 active subscribed Android devices with 36/36 `ok` tickets returned from Expo Push API.
    - Ticket Hygiene: Integrated automatic Cloudflare D1 deactivation (`is_active = 0`) for dead tokens returning `DeviceNotRegistered`.
  - **User & Fleet Telemetry Snapshot (Oct 27 vs Oct 28)**:
    - Oct 27 (Full Day): 944 unique visitors, 2,072 page views, 8,605 requests, 6 Play Store clicks, 3 active mobile devices seen, 15 notification opens.
    - Oct 28 (Mid-day): 924 unique visitors, 843 page views, 3,077 requests, 17 Play Store clicks, 9 active mobile devices seen (3x increase post-broadcast), 8 notification opens.
    - Audience Definition Grounding: Daily "Unique Visitors" in Cloudflare collapses intra-day repeat visits from the same IP/device into 1 unique count, while returning repeat users across days are explicitly monitored via direct/bookmark sessions (357 loads in 48h) and repeat Play Store clickers (64 repeat clicks out of 132 unique clickers).




