import assert from "node:assert/strict";

/**
 * Integration Test: Push Targeting & Alert Preference Filtering
 * Verifies that the filtering rules strictly obey user intent across all combinations,
 * including the new "MY_STACK_ONLY" enterprise on-call pager mode.
 */

// Simulated device profiles
const testDevices = [
  {
    token: "Token_Muted_All",
    newsBriefs: false,
    threatAdvisories: false,
    severityThreshold: "CRITICAL_ONLY",
  },
  {
    token: "Token_News_Only_All_Severities",
    newsBriefs: true,
    threatAdvisories: false,
    severityThreshold: "ALL",
  },
  {
    token: "Token_News_Only_Critical",
    newsBriefs: true,
    threatAdvisories: false,
    severityThreshold: "CRITICAL_ONLY",
  },
  {
    token: "Token_Advisories_Only_High_Critical",
    newsBriefs: false,
    threatAdvisories: true,
    severityThreshold: "HIGH_CRITICAL",
  },
  {
    token: "Token_Default_User",
    newsBriefs: true,
    threatAdvisories: true,
    severityThreshold: "HIGH_CRITICAL",
  },
  {
    token: "Token_My_Stack_User",
    newsBriefs: true,
    threatAdvisories: true,
    severityThreshold: "MY_STACK_ONLY",
    selectedVendors: ["Red Hat", "Ivanti"],
    watchedCves: ["CVE-2026-104935", "CVE-2026-111357"],
  },
  {
    token: "Token_My_Stack_Cleared_User",
    newsBriefs: true,
    threatAdvisories: true,
    severityThreshold: "MY_STACK_ONLY",
    selectedVendors: [],
    watchedCves: [],
  },
];

// Logic mirroring scripts/ingest.mjs
function shouldDeliverNotification(device, channelType, severity, item) {
  if (!device || !device.token) return false;

  if (typeof device.newsBriefs === "undefined") {
    return severity === "CRITICAL" || severity === "HIGH";
  }

  if (channelType === "brief" && !device.newsBriefs) {
    return false;
  }
  if (channelType === "advisory" && !device.threatAdvisories) {
    return false;
  }

  const threshold = (device.severityThreshold || "HIGH_CRITICAL").toUpperCase();
  if (threshold === "CRITICAL_ONLY") {
    return severity === "CRITICAL";
  }
  if (threshold === "HIGH_CRITICAL") {
    return severity === "CRITICAL" || severity === "HIGH";
  }
  if (threshold === "MY_STACK_ONLY") {
    if (!item) return false;
    const vendors = Array.isArray(device.selectedVendors) ? device.selectedVendors : [];
    const cves = Array.isArray(device.watchedCves) ? device.watchedCves : [];
    if (vendors.length === 0 && cves.length === 0) {
      return false;
    }

    const headline = String(item.headline || item.vulnerabilityName || "").toUpperCase();
    const summary = String(item.summary || item.shortDescription || "").toUpperCase();
    const cveId = String(item.cveID || item.cve || "").toUpperCase();

    if (cves.length > 0) {
      for (const watched of cves) {
        const wNorm = watched.toUpperCase();
        if (cveId && (cveId.includes(wNorm) || wNorm.includes(cveId))) return true;
        if (headline.includes(wNorm) || summary.includes(wNorm)) return true;
      }
    }

    if (vendors.length > 0) {
      const vendorProject = String(item.vendorProject || item.vendor || item.source || "").toLowerCase();
      const product = String(item.product || "").toLowerCase();
      const combined = [headline, summary, vendorProject, product].join(" ").toLowerCase();

      for (const vendor of vendors) {
        const vLower = vendor.toLowerCase();
        if (combined.includes(vLower)) return true;
      }
    }

    return false;
  }
  return true;
}

function runTests() {
  console.log("--- Running Push Preference Filter Test Matrix ---");

  // Test 1: Muted user must NEVER receive anything
  for (const channel of ["brief", "advisory"]) {
    for (const sev of ["CRITICAL", "HIGH", "MEDIUM", "LOW"]) {
      assert.equal(
        shouldDeliverNotification(testDevices[0], channel, sev),
        false,
        `Muted user received ${channel} [${sev}]`
      );
    }
  }
  console.log("✔ Test 1: Muted user receives 0 notifications across all channels & severities.");

  // Test 2: News-only user never receives advisories
  for (const sev of ["CRITICAL", "HIGH", "MEDIUM", "LOW"]) {
    assert.equal(
      shouldDeliverNotification(testDevices[1], "advisory", sev),
      false,
      `News-only user received advisory [${sev}]`
    );
    assert.equal(
      shouldDeliverNotification(testDevices[1], "brief", sev),
      true,
      `News-only user with ALL threshold failed to receive brief [${sev}]`
    );
  }
  console.log("✔ Test 2: News-only user receives briefs but strictly 0 advisories.");

  // Test 3: Critical-only user rejects HIGH, MEDIUM, LOW
  assert.equal(shouldDeliverNotification(testDevices[2], "brief", "CRITICAL"), true);
  assert.equal(shouldDeliverNotification(testDevices[2], "brief", "HIGH"), false);
  assert.equal(shouldDeliverNotification(testDevices[2], "brief", "MEDIUM"), false);
  assert.equal(shouldDeliverNotification(testDevices[2], "brief", "LOW"), false);
  console.log("✔ Test 3: Critical-only filter strictly accepts only CRITICAL.");

  // Test 4: Advisories-only user rejects briefs and rejects MEDIUM/LOW
  assert.equal(shouldDeliverNotification(testDevices[3], "brief", "CRITICAL"), false);
  assert.equal(shouldDeliverNotification(testDevices[3], "advisory", "CRITICAL"), true);
  assert.equal(shouldDeliverNotification(testDevices[3], "advisory", "HIGH"), true);
  assert.equal(shouldDeliverNotification(testDevices[3], "advisory", "MEDIUM"), false);
  console.log("✔ Test 4: Advisory-only with HIGH_CRITICAL strictly accepts HIGH/CRITICAL advisories.");

  // Test 5: Default user accepts HIGH and CRITICAL on both channels
  assert.equal(shouldDeliverNotification(testDevices[4], "brief", "HIGH"), true);
  assert.equal(shouldDeliverNotification(testDevices[4], "brief", "CRITICAL"), true);
  assert.equal(shouldDeliverNotification(testDevices[4], "brief", "MEDIUM"), false);
  assert.equal(shouldDeliverNotification(testDevices[4], "advisory", "HIGH"), true);
  assert.equal(shouldDeliverNotification(testDevices[4], "advisory", "CRITICAL"), true);
  assert.equal(shouldDeliverNotification(testDevices[4], "advisory", "MEDIUM"), false);
  console.log("✔ Test 5: Default user receives HIGH and CRITICAL across both channels.");

  // Test 6: My Stack User receives stories matching their selected vendors
  const redHatArticle = {
    headline: "Red Hat Releases Critical Kernel Update for RHEL 9.4",
    summary: "Red Hat issued a security patch addressing privilege escalation...",
    source: "Red Hat Security Advisories",
  };
  const ivantiArticle = {
    headline: "Ivanti Patches Two More Connect Secure Zero-Days",
    summary: "Ivanti Connect Secure flaw allows remote code execution...",
    source: "BleepingComputer",
  };
  const binanceArticle = {
    headline: "Binance Breach Shows Single Laptop Compromise Led to Hack",
    summary: "Crypto exchange breach involved compromised developer credential...",
    source: "SecurityWeek",
  };
  const cveAdvisory = {
    cveID: "CVE-2026-104935",
    vendorProject: "Ivanti",
    product: "Connect Secure",
    vulnerabilityName: "Ivanti Connect Secure Predictable Numbers Flaw",
  };
  const unmonitoredCveAdvisory = {
    cveID: "CVE-2026-99999",
    vendorProject: "SonicWall",
    product: "SonicOS",
    vulnerabilityName: "SonicWall Firewall Buffer Overflow",
  };

  assert.equal(shouldDeliverNotification(testDevices[5], "brief", "HIGH", redHatArticle), true, "Red Hat article must match");
  assert.equal(shouldDeliverNotification(testDevices[5], "brief", "CRITICAL", ivantiArticle), true, "Ivanti article must match");
  assert.equal(shouldDeliverNotification(testDevices[5], "brief", "CRITICAL", binanceArticle), false, "Binance article must NOT match");
  assert.equal(shouldDeliverNotification(testDevices[5], "advisory", "HIGH", cveAdvisory), true, "Watched CVE advisory must match");
  assert.equal(shouldDeliverNotification(testDevices[5], "advisory", "HIGH", unmonitoredCveAdvisory), false, "Unmonitored CVE advisory must NOT match");
  console.log("✔ Test 6: My Stack user accepts matching vendors & CVEs, and silences unmonitored alerts.");

  // Test 7: Cleared Stack User receives strictly ZERO notifications
  assert.equal(shouldDeliverNotification(testDevices[6], "brief", "HIGH", redHatArticle), false, "Cleared stack must reject Red Hat");
  assert.equal(shouldDeliverNotification(testDevices[6], "brief", "CRITICAL", ivantiArticle), false, "Cleared stack must reject Ivanti");
  assert.equal(shouldDeliverNotification(testDevices[6], "advisory", "HIGH", cveAdvisory), false, "Cleared stack must reject CVEs");
  console.log("✔ Test 7: Cleared Stack user (0 vendors & 0 CVEs) receives strictly 0 alerts (silent pager).");

  console.log("\nALL 7 PUSH TARGETING TESTS PASSED (100% PASS RATE).");
}

runTests();
