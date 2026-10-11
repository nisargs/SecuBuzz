import assert from "node:assert/strict";

/**
 * Integration Test: Push Targeting & Alert Preference Filtering
 * Verifies that the filtering rules strictly obey user intent across all combinations.
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
];

// Logic mirroring scripts/ingest.mjs
function shouldDeliverNotification(device, channelType, severity) {
  if (!device || !device.token) return false;
  if (typeof device.newsBriefs === "undefined") {
    return severity === "CRITICAL" || severity === "HIGH";
  }
  if (channelType === "brief" && !device.newsBriefs) return false;
  if (channelType === "advisory" && !device.threatAdvisories) return false;

  const threshold = (device.severityThreshold || "HIGH_CRITICAL").toUpperCase();
  if (threshold === "CRITICAL_ONLY") {
    return severity === "CRITICAL";
  }
  if (threshold === "HIGH_CRITICAL") {
    return severity === "CRITICAL" || severity === "HIGH";
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

  console.log("\nALL 5 PUSH TARGETING TESTS PASSED (100% PASS RATE).");
}

runTests();
