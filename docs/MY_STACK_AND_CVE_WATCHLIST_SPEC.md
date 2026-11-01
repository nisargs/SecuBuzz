# SecuBuzz: "My Stack & CVE Watchlist" — Complete A to Z Technical & Product Specification

> **Document Type**: Comprehensive Product Requirement Document (PRD) & Technical Architecture Specification  
> **Target Audience**: Product leads, senior engineers, and AI models (ChatGPT, Claude 3.7, DeepSeek R1, GPT-4o) for cross-model consultation, architectural review, and implementation planning.  
> **Product**: SecuBuzz (Android Native App `com.secubuzz.app` + Web Companion `secubuzz.com`)  
> **Status**: Ready for Consultation & Phased Implementation  
> **Version**: 1.0.0 (November 2026)

---

## Table of Contents
1. [Executive Summary & Product Vision](#1-executive-summary--product-vision)
2. [The Core Problem: Alert Fatigue vs. Account Friction](#2-the-core-problem-alert-fatigue-vs-account-friction)
3. [Zero-Account, Local-First Architectural Foundation](#3-zero-account-local-first-architectural-foundation)
4. [Data Models & Schema Specifications](#4-data-models--schema-specifications)
5. [The Deterministic Intelligence Matching Engine](#5-the-deterministic-intelligence-matching-engine)
6. [Mobile App Specification (Android / React Native)](#6-mobile-app-specification-android--react-native)
7. [Mobile Push Alerting: The "SOC Pager Mode"](#7-mobile-push-alerting-the-soc-pager-mode)
8. [Web Companion Specification (Vite / React / Cloudflare)](#8-web-companion-specification-vite--react--cloudflare)
9. [Zero-Account Cross-Device Sync (Dynamic QR / Deep Link)](#9-zero-account-cross-device-sync-dynamic-qr--deep-link)
10. [UI/UX Design Language & Interaction Patterns](#10-uiux-design-language--interaction-patterns)
11. [Edge Cases, Resilience & Security Posture](#11-edge-cases-resilience--security-posture)
12. [Phased Implementation Roadmap](#12-phased-implementation-roadmap)
13. [Consultation Questionnaire for External AIs](#13-consultation-questionnaire-for-external-ais)

---

## 1. Executive Summary & Product Vision

### 1.1 The Feature
**"My Stack & CVE Watchlist"** is an intelligence personalization engine that allows cybersecurity professionals to track specific enterprise technology stacks (e.g., *Fortinet, Cisco, AWS, Okta, Windows Server, Kubernetes*) and pin critical zero-days (e.g., *CVE-2024-3400, CVE-2026-118527*) without creating an account or storing sensitive infrastructure data on third-party servers.

### 1.2 The Two Complementary Scopes
1. **Macro Scope ("My Stack")**: Broad vendor and ecosystem tracking. Matches news briefs, vendor PSIRTs, and CISA KEV advisories touching the user's infrastructure.
2. **Micro Scope ("CVE Watchlist")**: Precision tracking of specific vulnerability identifiers actively being monitored, patched, or audited by the user's remediation team.

### 1.3 Dual-Platform Mission
- **Web Companion (`secubuzz.com`)**: Operates as a **desktop SOC triage dashboard** open on an analyst's second monitor, offering instant multi-vendor feed filtering.
- **Android Mobile App (`com.secubuzz.app`)**: Operates as an **on-call "SOC Pager"**, silencing industry background noise and only dispatching audible push notifications when a verified zero-day touches the user's selected stack.

---

## 2. The Core Problem: Alert Fatigue vs. Account Friction

### 2.1 The Threat Intelligence Dilemma
SecuBuzz ingests threat data from **52 curated sources** (including 16 official vendor PSIRTs, CISA KEV, and GitHub Advisories), generating ~30–50 factual 60-word briefs daily and tracking 1,816 active advisories. 
- A DevOps engineer relying on AWS and Docker does not want notifications about SAP NetWeaver flaws.
- A network engineer securing Fortinet and Cisco perimeters does not need routine mobile pings about Android framework updates.
- **Result**: Users either mute push notifications entirely or experience cognitive fatigue.

### 2.2 The Enterprise Account Trap
Standard commercial products solve this by forcing users to create an account, verify an email, and configure a profile in a cloud database. In enterprise cybersecurity, this approach fails:
1. **Corporate Risk / IT Governance**: Security analysts browsing on corporate laptops cannot register accounts or enter their company’s internal infrastructure map into a third-party SaaS tool without security vendor review.
2. **Data Disclosure Risk**: Storing a user-to-stack mapping (e.g., *"User X at Bank Y runs Palo Alto PAN-OS 10.2 and FortiOS 7.2"*) creates a high-value honey pot for attackers.
3. **Onboarding Drop-Off**: Forcing sign-up creates immediate 60%+ conversion friction.

---

## 3. Zero-Account, Local-First Architectural Foundation

### 3.1 100% On-Device Persistence
SecuBuzz eliminates the cloud database entirely for personalization:
- **Web Storage**: Browser `window.localStorage` (keys: `secubuzz_my_stack`, `secubuzz_cve_watchlist`).
- **Mobile Storage**: Native `@react-native-async-storage/async-storage` (keys: `@secubuzz_my_stack`, `@secubuzz_cve_watchlist`).

```
┌─────────────────────────────────────────────────────────────┐
│                      USER CLIENT                            │
│  [ Web Browser localStorage ] OR [ Android AsyncStorage ]    │
│  - Selected Vendors: ['fortinet', 'cisco', 'aws']           │
│  - Watched CVEs: ['CVE-2024-3400', 'CVE-2026-90500']        │
└──────────────────────────────┬──────────────────────────────┘
                               │
                       Zero PII Uploaded
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                    SECUBUZZ EDGE (R2)                       │
│  - Public feed.json (Static 350 briefs)                     │
│  - Public advisories.json (Static 1,816 KEVs)               │
│  * Clients pull public feeds & filter 100% client-side *    │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Key Architectural Benefits
- **Zero Privacy Liability**: SecuBuzz servers never store or transmit corporate infrastructure configurations.
- **Zero Infrastructure Cost**: $0.00 backend compute, zero user tables, zero session storage, zero database queries.
- **Sub-Millisecond Triage**: Filtering happens entirely in-memory on the client via pre-indexed lookup maps.
- **Instant Activation**: 1-click chip selection without forms or login walls.

---

## 4. Data Models & Schema Specifications

### 4.1 TypeScript Entity Definitions

```typescript
/**
 * Vendor Ecosystem Catalog Item
 */
export interface StackVendor {
  id: string;               // Normalized identifier: 'fortinet', 'cisco', 'aws'
  name: string;             // Display name: 'Fortinet'
  category: 'perimeter' | 'cloud' | 'os' | 'enterprise_apps' | 'devops';
  aliases: string[];        // Match tokens: ['fortinet', 'fortigate', 'fortios', 'fortimanager']
  psirtSources?: string[];  // Dedicated source feeds: ['Fortinet FortiGuard PSIRT']
  cisaVendorKey?: string;   // Exact vendorProject string in CISA KEV: 'Fortinet'
}

/**
 * Watched CVE Target Item
 */
export interface WatchedCve {
  cveId: string;            // Standardized uppercase: 'CVE-2024-3400'
  addedAt: string;          // ISO 8601: '2026-11-01T12:00:00.000Z'
  customNote?: string;      // User-defined triage note: 'Firewall cluster A - awaiting maintenance window'
  pinned?: boolean;         // Pin to top of advisory views
}

/**
 * Consolidated Local Storage State
 */
export interface MyTargetsState {
  version: number;          // Schema version (e.g., 1)
  vendors: string[];        // Array of vendor IDs: ['fortinet', 'paloalto', 'aws']
  cves: WatchedCve[];       // Array of tracked CVE objects
  alertScope: 'ALL' | 'STACK_ONLY'; // Push notification filter mode
  updatedAt: string;        // ISO 8601 timestamp
}
```

### 4.2 Pre-Curated Vendor Catalog (52-Feed Grounding)

| Category | Vendor ID | Display Name | Match Tokens & Aliases | PSIRT Source Mapping |
| :--- | :--- | :--- | :--- | :--- |
| **Perimeter & Network** | `fortinet` | Fortinet | `fortinet`, `fortigate`, `fortios`, `fortimanager`, `fortianalyzer` | Fortinet FortiGuard PSIRT |
| | `cisco` | Cisco | `cisco`, `ios-xe`, `nx-os`, `asa`, `firepower`, `duo` | Cisco PSIRT, Cisco Talos |
| | `paloalto` | Palo Alto Networks | `palo alto`, `pan-os`, `globalprotect`, `cortex`, `prisma` | Unit 42, Palo Alto PSIRT |
| | `checkpoint` | Check Point | `check point`, `gaia`, `quantum`, `smartconsole` | Check Point Research |
| | `f5` | F5 Networks | `f5`, `big-ip`, `big-iq`, `tmos` | CERT-EU Advisories |
| | `sonicwall` | SonicWall | `sonicwall`, `sonicos`, `secure mobile access`, `sma` | CISA KEV Vendor Key |
| | `ivanti` | Ivanti | `ivanti`, `connect secure`, `policy secure`, `epmm` | Ivanti Security Advisories |
| **Cloud & Identity** | `aws` | Amazon Web Services | `aws`, `amazon web services`, `ec2`, `s3`, `iam`, `lambda` | AWS Security Bulletins |
| | `azure` | Microsoft Azure | `azure`, `entra id`, `active directory`, `office 365` | Microsoft MSRC |
| | `googlecloud` | Google Cloud | `gcp`, `google cloud`, `workspace`, `bigquery` | Google Security Blog |
| | `okta` | Okta | `okta`, `auth0`, `identity engine` | News / Research feeds |
| | `cloudflare` | Cloudflare | `cloudflare`, `warp`, `zero trust`, `workers` | Cloudflare Security |
| **OS & Hypervisors** | `windows` | Microsoft Windows | `windows`, `windows server`, `hyper-v`, `ntlm`, `kerberos` | Microsoft MSRC |
| | `linux` | Linux Kernel / Distros | `linux`, `kernel`, `rhel`, `ubuntu`, `debian`, `systemd` | Ubuntu USN, Red Hat RHSA |
| | `apple` | Apple Ecosystem | `apple`, `macos`, `ios`, `ipados`, `safari`, `webkit` | Apple Security Updates |
| | `android` | Android (AOSP) | `android`, `aosp`, `pixel`, `qualcomm`, `mediatek` | Android Security Bulletin |
| | `vmware` | VMware / Broadcom | `vmware`, `esxi`, `vcenter`, `vsphere`, `workstation` | CISA KEV Vendor Key |
| **Enterprise Apps** | `atlassian` | Atlassian | `atlassian`, `confluence`, `jira`, `bitbucket` | CERT-EU Advisories |
| | `gitlab` | GitLab | `gitlab`, `gitlab-ce`, `gitlab-ee` | GitLab Security Releases |
| | `sap` | SAP | `sap`, `netweaver`, `hana`, `s/4hana` | CERT-EU Advisories |
| | `oracle` | Oracle | `oracle`, `database`, `weblogic`, `peoplesoft` | Oracle Security Alerts |

---

## 5. The Deterministic Intelligence Matching Engine

### 5.1 Multi-Tier Match Pipeline
When evaluating whether a brief or advisory matches the user's stack, the client runs a 4-tier evaluation:

```
ARTICLE / ADVISORY UNDER EVALUATION
               │
               ▼
   [ Tier 1: Watched CVE Hit? ]
   Does article.cves intersect with user.watchedCves?
   ├─► YES: Match = "WATCHED_CVE" (Priority 1)
   └─► NO: Proceed to Tier 2
               │
               ▼
   [ Tier 2: Dedicated PSIRT Source Match? ]
   Does article.source match any user.selectedVendor.psirtSources?
   ├─► YES: Match = "VENDOR_PSIRT" (Priority 2)
   └─► NO: Proceed to Tier 3
               │
               ▼
   [ Tier 3: CISA KEV Vendor/Product Match? ]
   If advisory: Does vendorProject / product match user.selectedVendor?
   ├─► YES: Match = "ADVISORY_VENDOR" (Priority 3)
   └─► NO: Proceed to Tier 4
               │
               ▼
   [ Tier 4: Boundary Regex Entity Match ]
   Does title or summary match \b(vendor_tokens)\b?
   ├─► YES: Match = "TEXT_ENTITY" (Priority 4)
   └─► NO: Discard (Not in user's stack)
```

### 5.2 Word-Boundary Regex Compilation
To prevent false-positive sub-string collisions (e.g., preventing *"ios"* from matching inside *"precocious"* or *"f5"* inside random strings):
```typescript
function buildVendorMatcher(aliases: string[]): RegExp {
  const escaped = aliases.map(a => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  // Enforces word boundaries and supports hyphenated product variants
  return new RegExp(`\\b(${escaped.join('|')})\\b`, 'i');
}
```

---

## 6. Mobile App Specification (Android / React Native)

### 6.1 User Interaction Flows

#### A. Interactive CVE Badge (Long-Press & Tap)
- **Problem**: Manually writing `CVE-2024-3400` on a mobile keyboard is error-prone.
- **Solution**: Every CVE pill rendered on an Article Card or Advisory Card is interactive:
  1. **Short Tap**: Opens the full Advisory details screen or filters the feed by that CVE.
  2. **Long-Press (150ms with `Haptics.impactAsync(Heavy)`)**: Opens native Action Sheet:
     - ⭐ **Add to CVE Watchlist** (or remove if already tracked)
     - 🔍 **Filter Feed by this CVE**
     - 📋 **Copy CVE ID to Clipboard**
     - ↗ **View Official NVD / CISA Page**

#### B. Advisory Card Watch Toggle (`CveCard.tsx`)
- Inside the card action bar (next to Bookmark and Share):
- Add a dedicated **Target / Eye button** (`Ionicons name="eye-outline" | "eye"`).
- Tapping triggers a distinct success haptic pulse and pins the CVE to their Watchlist.
- Watched advisories display a permanent titanium badge in the card header: `[ 🎯 WATCHED ]`.

#### C. Top Feed Filter Bar
- On the Briefs Tab (`index.tsx`) and Advisories Tab (`advisories.tsx`):
- Add a persistent sub-header toggle pill:
  `[ All News (350) ]` | `[ ⚡ My Stack (18) ]` | `[ 🎯 Watchlist (3) ]`
- Selecting **`My Stack`** limits the view strictly to matching stories.

#### D. The Zero-Noise Empty State
If the user's stack has zero active threats in the 350-article rolling window:
```text
┌─────────────────────────────────────────────────────────────┐
│                      ⚡ STACK QUIET                         │
│                                                             │
│ No active zero-days or emergency threat briefs detected     │
│ for your 4 selected vendors in the last 7 days.             │
│                                                             │
│ Monitored: Fortinet · Cisco · AWS · Okta                    │
│ [ Edit Stack Targets ]                                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. Mobile Push Alerting: The "SOC Pager Mode"

### 7.1 The Pager Mode Concept
Currently, SecuBuzz push notifications broadcast all High and Critical zero-days. With **Pager Mode**, the user can configure their device to act as an emergency on-call pager exclusively for their stack.

### 7.2 UI Configuration (`src/app/notifications.tsx`)
Add a new section above Severity Threshold:
```text
DISPATCH FILTERING MODE:
  ( ) All Global Threats
      Receive breaking alerts for all critical zero-days across the industry.
  (●) SOC Pager Mode (My Stack & Watched CVEs Only)
      Strictly silence notifications unless a critical flaw affects your
      selected technologies or watched CVEs.
```

### 7.3 Privacy-Preserving Dispatch Architecture
To maintain the **Zero-Cloud-Storage Invariant**:
- **Option A (Client-Side Notification Gate - Recommended for Zero-Cost)**:
  1. The app receives the standard high-priority push payload via FCM.
  2. In `notificationService.ts`, the foreground/background notification handler intercepts the payload before presenting the visual banner.
  3. The handler checks `payload.data.vendor` and `payload.data.cveID` against local `@secubuzz_my_stack`.
  4. If `alertScope === 'STACK_ONLY'` and no match is found, the handler drops the notification silently (`shouldShowAlert: false`).
  5. If it matches, it triggers the alert with custom urgent sound and high-priority heads-up banner.
  - *Result*: Zero infrastructure changes; zero server knowledge of the user's stack.

---

## 8. Web Companion Specification (Vite / React / Cloudflare)

### 8.1 Desktop SOC Triage Dashboard
On [`secubuzz.com`](https://secubuzz.com), the user interface is optimized for multi-monitor workstations.

#### A. Top Header Action
In `SiteHeader.tsx`:
- Add a new action pill right next to Search:
  `[ ⚡ My Stack (4) ]` (displays active target count).

#### B. The Feed Switcher Bar (`website/src/pages/News.tsx`)
```text
[ All Intelligence (350) ]   [ ⚡ My Stack (24) ]   [ 🎯 Watched CVEs (2) ]   [ ⚙ Manage Stack ]
```

#### C. In-Card Stack Badge
When browsing in "All Intelligence" mode, cards affecting the user's stack feature an unobtrusive, high-contrast architectural chip:
`[ AFFECTS STACK: FORTINET ]` or `[ 🎯 WATCHED CVE ]`.

#### D. Quick-Watch Hover Action
Hovering over any `[ CVE-YYYY-NNNN ]` badge in a news brief or table row displays a micro-action tooltip:
`[ CVE-2024-3400 | + Watch ]`. Clicking immediately saves it to `localStorage`.

#### E. Slide-Over Management Drawer (`StackDrawer.tsx`)
- **Search & Quick-Add Input**: Auto-suggests vendors, products, and CVEs.
- **Categorized Chip Matrix**: 1-click toggles for common enterprise technologies.
- **Active Watched List**: View all active selections with 1-click `✕` remove.
- **Cross-Device Sync Action**: Triggers QR Code sync modal.

---

## 9. Zero-Account Cross-Device Sync (Dynamic QR / Deep Link)

### 9.1 The URL Hash Fragment Protocol
How do we sync stack preferences from a corporate desktop browser to a mobile phone without accounts or cloud databases?
- **URL Hash Fragments (`#...`)**: Data stored after the `#` symbol in a URL is strictly processed on the client side and is **never transmitted to the web server** in HTTP request headers.
- **Compact Payload**:
  `https://secubuzz.com/stack#v=cisco,fortinet,aws&cves=CVE-2024-3400,CVE-2026-90500`

### 9.2 The 1-Click Sync Flow
```
1. USER ON DESKTOP WEBSITE
   - Clicks [ Sync to Phone ] in the Stack Drawer.
   - Website generates a dynamic QR code encoding the hash URL.

2. USER ON ANDROID APP
   - Opens Camera or taps [ Scan Stack QR ] in App Settings.
   - App parses deep-link parameters: `v` (vendors) and `cves` (watched CVEs).
   - Prompts confirmation: "Import 3 vendors and 2 watched CVEs?"
   - Saves directly into local `AsyncStorage`.
   - Setup complete in 3 seconds with zero account creation.
```

---

## 10. UI/UX Design Language & Interaction Patterns

Conforming strictly to the **Anti-AI / Executive / Sober Standard** defined in Rule 4 of `AGENTS.md`:

- **Chassis & Background**: Solid dark obsidian (`#0B0F14`), titanium borders (`#1E2638`), crisp 4px architectural corners.
- **Typography**: Clean monospace font for CVEs (`JetBrains Mono` / `Courier`), bold structural sans for headings.
- **Color Signifiers**:
  - `CRITICAL`: Dynamic crimson (`#EF4444`) 5px micro-dot and border divider.
  - `HIGH`: Amber (`#F59E0B`).
  - `STACK BADGE`: Subdued titanium slate (`#334155` background, `#94A3B8` text, `#475569` border).
  - `WATCHED CVE BADGE`: Subtle cyan accent (`#0284C7` background, `#38BDF8` text).
- **Prohibited Patterns**:
  - ❌ No glowing neon buttons or pulsing animations.
  - ❌ No emoji spam (`🚨⚠️🔥`).
  - ❌ No intrusive full-screen modal takeovers.

---

## 11. Edge Cases, Resilience & Security Posture

| Scenario / Edge Case | Failure Mode | Architectural Safeguard |
| :--- | :--- | :--- |
| **Local Storage Cleared** | Browser history wipe deletes stack preferences. | Provide a 1-click *"Export Backup File (JSON)"* and *"Copy Sync Link"* in settings. |
| **CVE Number Formatting** | User inputs lowercase or malformed CVE (e.g. `cve-2024-3400 `). | Normalization sanitizer: `raw.trim().toUpperCase().replace(/[^A-Z0-9-]/g, '')`. Validated via `/^CVE-\d{4}-\d{4,7}$/`. |
| **Feed Rollover (Story Older than 7 Days)** | A watched CVE brief rolls out of the 350-article window. | Watched CVEs remain permanently accessible via the **Advisory Tab (1,816 items)** regardless of news feed age. |
| **Zero Stack Matches** | User selects a niche vendor with no recent flaws. | High-utility empty state clearly confirms monitoring status rather than showing a blank screen. |
| **Push Payload Spoofing** | Compromised push token attempting to deliver fake alerts. | Push tokens verified via Expo Push service with ECDSA payload validation. |

---

## 12. Phased Implementation Roadmap

```
PHASE 1: Web Companion Local Stack & Filter (Current Sprint)
├── 1. Build `useMyStack` hook with `localStorage` persistence.
├── 2. Implement `StackDrawer` with curated enterprise chips.
├── 3. Add top feed switcher pills on `secubuzz.com`: [All] vs [My Stack].
└── 4. Wire hover micro-action to add CVE to Watchlist directly from pills.

PHASE 2: Mobile App Local Stack & Interactive Gestures
├── 1. Wire `@secubuzz_my_stack` into `AsyncStorage`.
├── 2. Add long-press haptic action sheet to all mobile CVE badges.
├── 3. Add 1-tap "Watch" toggle button to `CveCard.tsx`.
└── 4. Add feed toggle pill to `index.tsx` and `advisories.tsx`.

PHASE 3: Cross-Device QR Sync & SOC Pager Mode
├── 1. Implement QR Code generator on web (`secubuzz.com/stack#...`).
├── 2. Wire deep-link import handler in mobile `_layout.tsx`.
└── 3. Implement client-side notification filtering for "SOC Pager Mode".
```

---

## 13. Consultation Questionnaire for External AIs

When feeding this specification into other AI systems (ChatGPT, Claude 3.7, DeepSeek R1, GPT-4o), prompt them with the following technical questions:

1. **Push Delivery vs. Battery Efficiency**:
   *"Given Android 14/15 background restrictions, is client-side notification interception (dropping non-matching FCM payloads in background) sufficiently reliable for 'SOC Pager Mode', or should we pass an anonymous bloom filter / hash set of vendor IDs to Cloudflare D1 during device token sync?"*
2. **Matching Engine Optimization**:
   *"With 350 news briefs and 1,816 advisories evaluated in-memory on every feed render, what data structure (Trie, Set, or compiled RegExp) provides the highest frame-rate performance for React Native and low-end mobile devices?"*
3. **B2B Monetization Extension**:
   *"How can this zero-account 'My Stack' feature naturally upsell into an enterprise B2B tier (e.g. $19/mo SOC Slack/Teams webhook dispatcher) without compromising the free app's zero-PII privacy guarantee?"*
4. **UX Refinements**:
   *"Review the long-press CVE action sheet interaction. Is there an even lower-friction gesture (e.g., swipe action or double-tap) that security analysts would prefer when triaging 20+ CVEs during morning standups?"*

***
*Specification authored and ratified by the SecuBuzz Senior Engineering Lead. Conforms to all SecuBuzz Architectural Invariants and Google Play Production Safety Guidelines.*
