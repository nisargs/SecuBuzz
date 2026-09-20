export const PRIVACY_POLICY_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SecuBuzz · Privacy Policy</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Exo:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #0B0F14;
      --card-bg: #121820;
      --border: #1E293B;
      --cyan: #4CC9F0;
      --cyan-glow: rgba(76, 201, 240, 0.15);
      --text-primary: #F8FAFC;
      --text-secondary: #94A3B8;
      --text-muted: #64748B;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg);
      color: var(--text-primary);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      line-height: 1.7;
      padding: 40px 20px 80px;
    }

    .container {
      max-width: 820px;
      margin: 0 auto;
    }

    header {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 1px solid var(--border);
    }

    .app-title {
      font-family: 'Exo', sans-serif;
      font-weight: 800;
      font-size: 2.2rem;
      letter-spacing: -0.5px;
      color: var(--text-primary);
    }

    .tagline {
      color: var(--cyan);
      font-family: 'Exo', sans-serif;
      font-weight: 600;
      font-size: 0.85rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-top: 4px;
    }

    .updated-date {
      color: var(--text-muted);
      font-size: 0.9rem;
      margin-top: 14px;
    }

    .intro-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-left: 4px solid var(--cyan);
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 36px;
    }

    .intro-card p {
      color: var(--text-secondary);
      font-size: 1.05rem;
    }

    .section {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 28px;
      margin-bottom: 24px;
    }

    .section h2 {
      font-family: 'Exo', sans-serif;
      font-weight: 700;
      font-size: 1.3rem;
      color: var(--text-primary);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .section h2::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 18px;
      background: var(--cyan);
      border-radius: 2px;
    }

    .section p {
      color: var(--text-secondary);
      font-size: 0.98rem;
      margin-bottom: 14px;
    }

    .section p:last-child {
      margin-bottom: 0;
    }

    .section ul {
      margin: 12px 0 16px 24px;
      color: var(--text-secondary);
    }

    .section li {
      margin-bottom: 8px;
    }

    .highlight-box {
      background: rgba(76, 201, 240, 0.06);
      border: 1px solid rgba(76, 201, 240, 0.2);
      border-radius: 8px;
      padding: 16px 20px;
      margin: 14px 0;
    }

    .highlight-box p {
      color: #E2E8F0;
      font-size: 0.95rem;
    }

    a {
      color: var(--cyan);
      text-decoration: none;
      transition: opacity 0.2s;
    }

    a:hover {
      text-decoration: underline;
      opacity: 0.85;
    }

    footer {
      text-align: center;
      margin-top: 60px;
      padding-top: 32px;
      border-top: 1px solid var(--border);
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    footer a {
      color: var(--text-secondary);
      margin: 0 10px;
    }

    footer a:hover {
      color: var(--cyan);
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1 class="app-title">SecuBuzz</h1>
      <div class="tagline">60-Word Security Briefs</div>
      <p class="updated-date">Effective Date: September 14, 2026</p>
    </header>

    <div class="intro-card">
      <p>
        This Privacy Policy explains how <strong>SecuBuzz</strong> handles information when you use the SecuBuzz mobile application and associated services. We believe privacy is a fundamental right, especially in cybersecurity. SecuBuzz is built to deliver transparent, high-signal intelligence without surveillance, tracking, or invasive data harvesting.
      </p>
    </div>

    <div class="section">
      <h2>1. Who We Are</h2>
      <p>
        SecuBuzz is an independent cybersecurity news and threat briefing application developed and operated by <strong>Nisarg Soni</strong>.
      </p>
      <p>
        For any privacy, security, or data handling inquiries, please contact:
        <br />
        <strong>Email:</strong> <a href="mailto:secubuzz.app@gmail.com">secubuzz.app@gmail.com</a>
        <br />
        <strong>Developer Profile:</strong> <a href="https://www.linkedin.com/in/soni-nisarg/" target="_blank" rel="noopener noreferrer">Nisarg Soni on LinkedIn</a>
      </p>
    </div>

    <div class="section">
      <h2>2. Information We Collect</h2>
      <p>
        SecuBuzz is designed so that you can browse cybersecurity news without creating an account, registering personal credentials, or surrendering identity data.
      </p>
      <div class="highlight-box">
        <p><strong>Zero Personal Data Harvesting:</strong> SecuBuzz does not collect your name, email address, phone number, address, contacts, precise GPS location, photos, camera/microphone streams, financial details, or biometric credentials.</p>
      </div>
      <p>
        The only technical data processed is:
      </p>
      <ul>
        <li><strong>Locally Saved Articles:</strong> Articles you bookmark are stored directly on your physical device using local on-device storage. They are never transmitted to our servers.</li>
        <li><strong>Push Notification Tokens:</strong> If you grant permission to receive news alerts, a pseudonymous Expo Push Notification token is generated for your device and stored in our Cloudflare D1 database. This token is used solely to deliver notifications when new security briefs are published and can be revoked at any time via your device's notification settings.</li>
      </ul>
    </div>

    <div class="section">
      <h2>3. Information Stored on Your Device</h2>
      <p>
        SecuBuzz stores minimal application state locally on your device (such as cached feed snapshots and saved article bookmarks). This data never leaves your device and is erased if you clear the app's storage or uninstall the application.
      </p>
    </div>

    <div class="section">
      <h2>4. News Content & External Publisher Links</h2>
      <p>
        SecuBuzz retrieves cybersecurity news feeds containing concise AI-assisted summaries, categories, severity ratings, publication timestamps, and source URLs.
      </p>
      <p>
        When you tap <em>"Read Original"</em>, you are directed to the external publisher's website (e.g., The Hacker News, BleepingComputer, CISA). Once you leave SecuBuzz, the privacy policy and terms of the respective external publisher govern your visit.
      </p>
    </div>

    <div class="section">
      <h2>5. Hosting and Infrastructure</h2>
      <p>
        SecuBuzz utilizes enterprise-grade infrastructure to deliver its fast, reliable feeds:
      </p>
      <ul>
        <li><strong>Cloudflare R2:</strong> Used for static, globally distributed feed caching and content delivery via HTTPS.</li>
        <li><strong>Cloudflare Workers & D1:</strong> Used to manage pseudonymous push notification tokens securely.</li>
        <li><strong>Expo / Firebase Cloud Messaging (FCM):</strong> Used to route push notifications reliably to your Android device tray.</li>
      </ul>
      <p>
        None of these infrastructure services receive your personal identity, browsing history, or saved bookmarks.
      </p>
    </div>

    <div class="section">
      <h2>6. AI-Assisted Brief Generation</h2>
      <p>
        SecuBuzz's backend pipeline uses Groq AI models to generate factually grounded 40–60 word summaries and threat severity classifications from public RSS feeds. This process runs entirely on the backend and does not process or expose user personal data.
      </p>
    </div>

    <div class="section">
      <h2>7. No Sale of Personal Information</h2>
      <p>
        SecuBuzz does not sell, rent, monetize, or trade your personal information or device tokens with third parties, data brokers, or commercial marketers.
      </p>
    </div>

    <div class="section">
      <h2>8. No Third-Party Advertising or Tracking SDKs</h2>
      <p>
        SecuBuzz does not integrate third-party ad networks (such as Google AdMob or Meta Audience Network) or invasive behavioral tracking analytics. You will never see commercial popups, banners, or tracking pixels inside the app.
      </p>
    </div>

    <div class="section">
      <h2>9. Security Measures</h2>
      <p>
        All communications between the SecuBuzz mobile application and backend services occur strictly over modern TLS/HTTPS encryption. Administrative endpoints are guarded with cryptographically secure authentication keys.
      </p>
    </div>

    <div class="section">
      <h2>10. Data Retention & Deletion</h2>
      <p>
        Because SecuBuzz does not require accounts, there is no account database to delete. You have complete control over your data:
      </p>
      <ul>
        <li><strong>Bookmarks:</strong> Can be un-saved individually in the app or cleared by clearing the app data.</li>
        <li><strong>Push Tokens:</strong> Deactivated automatically if you disable notifications in Android Settings, or upon request by emailing us with your push token.</li>
      </ul>
    </div>

    <div class="section">
      <h2>11. Children's Privacy</h2>
      <p>
        SecuBuzz is an informational cybersecurity tool intended for security practitioners, developers, and general technology audiences. It is not directed at children under the age of 13, and does not knowingly collect data from children.
      </p>
    </div>

    <div class="section">
      <h2>12. Policy Updates</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect operational changes or regulatory requirements. Any updates will be posted on this page with an updated effective date.
      </p>
    </div>

    <div class="section">
      <h2>13. Contact Information</h2>
      <p>
        If you have questions, feedback, or security disclosure reports regarding this policy, please reach out directly:
      </p>
      <p>
        <strong>Email:</strong> <a href="mailto:secubuzz.app@gmail.com">secubuzz.app@gmail.com</a><br />
        <strong>Developer:</strong> Nisarg Soni (<a href="https://www.linkedin.com/in/soni-nisarg/" target="_blank" rel="noopener noreferrer">LinkedIn</a>)
      </p>
    </div>

    <footer>
      <p>© 2026 SecuBuzz · Developed by Nisarg Soni</p>
      <p style="margin-top: 8px;">
        <a href="mailto:secubuzz.app@gmail.com">Support</a> · 
        <a href="https://www.linkedin.com/in/soni-nisarg/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </footer>
  </div>
</body>
</html>`;
