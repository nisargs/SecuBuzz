export interface LegalSection {
  id: string;
  heading: string;
  body: string[];
}

export const privacySections: LegalSection[] = [
{
  id: 'overview',
  heading: '1. Overview & Developer Details',
  body: [
  'SecuBuzz by MiSo Labs ("we", "us", or "our") develops and operates the SecuBuzz mobile application and the secubuzz.com website. This Privacy Policy details our data practices and privacy guarantees.',
  'We believe privacy is an absolute baseline in cybersecurity. SecuBuzz is engineered so that defense teams, analysts, and engineers can read threat intelligence without surveillance, account creation, or personal telemetry harvesting.']

},
{
  id: 'what-we-collect',
  heading: '2. Information We Handle',
  body: [
  'Device and Application Telemetry: Anonymized crash logs and app version statistics used strictly to diagnose bugs and maintain uptime.',
  'Push Notification Token: If you opt in to receive real-time CISA KEV zero-day alerts, an anonymous Expo/Firebase Cloud Messaging (FCM) token is registered to deliver broadcast notifications. This token is never linked to your personal identity, name, or phone number, and can be revoked at any time.',
  'On-Device Bookmarks & Preferences: All bookmarks, filter preferences, and theme choices are stored 100% on your local device. They are never sent to or stored on our servers.']

},
{
  id: 'what-we-dont',
  heading: '3. What We Never Collect',
  body: [
  'We do not collect names, passwords, phone numbers, contact books, GPS location data, advertising IDs (GAID/IDFA), or browsed story history.',
  'We do not sell personal data, license user profiles, or transmit information to data brokers or third-party marketing networks.']

},
{
  id: 'sharing',
  heading: '4. Service Providers & Third Parties',
  body: [
  'We utilize Cloudflare Workers for secure edge delivery and Google Firebase/Expo for anonymous push notification delivery.',
  'News source links redirect directly to external publisher websites. Third-party publisher websites operate under their own independent privacy notices.']

},
{
  id: 'retention',
  heading: '5. Data Retention & Deletion',
  body: [
  'Anonymous push tokens are retained only while active and purged automatically when notifications are disabled or the app is uninstalled.',
  'You may request complete verification of any server token removal by contacting support@secubuzz.com.']

},
{
  id: 'contact',
  heading: '6. Privacy Contact',
  body: [
  'For questions or privacy inquiries regarding SecuBuzz or MiSo Labs, contact us at support@secubuzz.com.']

}];


export const accountDeletionSections: LegalSection[] = [
{
  id: 'account-free',
  heading: '1. Account-Free Architecture',
  body: [
  'SecuBuzz by MiSo Labs does not require user registration, email sign-ups, or account creation to access full cybersecurity intelligence and CVE alerts.',
  'Because we do not maintain user accounts or persistent user profiles, there is no online user account to delete or disable.']

},
{
  id: 'local-data',
  heading: '2. Deleting On-Device Data',
  body: [
  'All user data (such as bookmarked stories, filter preferences, and theme choices) is stored entirely in local device storage.',
  'To immediately purge all local data, tap "Clear All Data" in the SecuBuzz in-app Settings screen, or select "Clear Storage / Cache" in your Android system application settings.']

},
{
  id: 'push-token-revocation',
  heading: '3. Push Notification Token Deletion',
  body: [
  'If you enabled push notifications, an anonymous delivery token was registered to receive KEV alerts. You can immediately revoke this token by turning off notifications in SecuBuzz settings or uninstalling the app.']

},
{
  id: 'manual-request',
  heading: '4. Data Deletion Inquiries',
  body: [
  'If you have contacted our support team via email or wish to request confirmation of data deletion, send an email to support@secubuzz.com with the subject line "Data Deletion Request". All verified inquiries are completed within 48 to 72 business hours.']

}];


export const termsSections: LegalSection[] = [
{
  id: 'acceptance',
  heading: 'Acceptance of Terms',
  body: [
  'By installing the SecuBuzz application or accessing secubuzz.com, you agree to these Terms. SecuBuzz is developed and operated by MiSo Labs.']

},
{
  id: 'service',
  heading: 'The Service',
  body: [
  'SecuBuzz provides factual, 60-word summaries of public cybersecurity disclosures and CISA Known Exploited Vulnerabilities catalog updates. SecuBuzz and MiSo Labs are independent entities and are not affiliated with or endorsed by CISA, the Department of Homeland Security, or external news publishers.']

},
{
  id: 'no-advice',
  heading: 'Security Advisory Disclaimer',
  body: [
  'SecuBuzz briefs are informational summaries intended for initial triage and situational awareness. Always inspect authoritative vendor security bulletins, NVD CVSS vectors, and your organization’s vulnerability governance before taking remediation actions.']

},
{
  id: 'contact',
  heading: 'Contact',
  body: ['Questions about these terms can be directed to support@secubuzz.com.']
}];