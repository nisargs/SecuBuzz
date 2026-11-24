import type { NewsBrief, NewsCategory } from '../types/news';

export const newsCategories: NewsCategory[] = [
  'Breach',
  'Ransomware',
  'CVE',
  'Vulnerability',
  'Nation State',
  'General'
];

export const news: NewsBrief[] = [
  {
    "slug": "cia-unclassified-system-breached-47717a35",
    "title": "CIA Unclassified System Breached",
    "summary": "A cyberattack breached an unclassified CIA system, though the specific data compromised and the attacker remain unidentified. The breach indicates potential exploitation of internal network defenses, but no evidence of credential theft or data exfiltration has been disclosed. Security teams should review CIA network hardening measures and monitor for anomalous activity following the incident.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/an-unclassified-cia-system-was-breached-in-a-cyberattack-ap-source-says/",
    "publishedAt": "2026-11-24T22:41:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cia-unclassified-system-breached",
      "article-47717a35",
      "47717a35",
      "cia-unclassified-system-breached-1302b2"
    ]
  },
  {
    "slug": "red-hat-releases-librabbitmq-security-update-4d11bcbe",
    "title": "Red Hat Releases librabbitmq Security Update",
    "summary": "Red Hat released a security update for the librabbitmq library on RHEL 9, fixing vulnerabilities that could enable remote code execution. The flaws involve improper input validation in AMQP handling, with CVSS scores of 7.5-8.3, and are documented but not yet exploited. Apply the latest librabbitmq package immediately to ensure the patched version is in use.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:103286",
    "publishedAt": "2026-11-24T22:09:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-librabbitmq-security-update",
      "article-4d11bcbe",
      "4d11bcbe",
      "red-hat-releases-librabbitmq-security-update-2ee1d3"
    ]
  },
  {
    "slug": "red-hat-issues-critical-cjose-update-7d192425",
    "title": "Red Hat Issues Critical cjose Update",
    "summary": "Red Hat issued a critical security update for the cjose library on RHEL 9, addressing flaws that could allow remote code execution. The vulnerabilities arise from improper handling of JOSE tokens, with CVSS scores up to 9.1, and are publicly documented but not yet exploited. Red Hat recommends installing the latest cjose package immediately to secure affected systems.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:103380",
    "publishedAt": "2026-11-24T22:09:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-cjose-update",
      "article-7d192425",
      "7d192425",
      "red-hat-issues-critical-cjose-update-2ee1d7"
    ]
  },
  {
    "slug": "satellite-ground-infrastructure-faces-cyber-threat-42753a39",
    "title": "Satellite Ground Infrastructure Faces Cyber Threats",
    "summary": "Satellite operators face growing cybersecurity risks from weaknesses in ground-based infrastructure that supports space services. These vulnerabilities, including outdated firmware and unsecured communication links, could enable attackers to disrupt satellite operations or intercept data. Operators should update firmware, enforce strict access controls, and conduct regular penetration testing to mitigate emerging threats.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/satellites-ground-level-cybersecurity-problem",
    "publishedAt": "2026-11-24T22:05:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "satellite-ground-infrastructure-faces-cyber-threat",
      "article-42753a39",
      "42753a39",
      "satellite-ground-infrastructure-faces-cyber-threat-501c3c",
      "satellite-ground-infrastructure-faces-cyber-threats"
    ]
  },
  {
    "slug": "apt-webworm-customizes-softether-vpn-to-evade-dete-7db99672",
    "title": "APT Webworm Customizes SoftEther VPN to Evade Detection",
    "summary": "Webworm, a China-aligned espionage group, rebuilt SoftEther VPN from source, removing default artifacts that would normally alert defenders. By stripping telemetry and logging hooks, the modified VPN hides its presence, enabling stealthy lateral movement inside corporate networks without triggering security monitoring. Security teams should monitor anomalous SoftEther traffic, enforce strict VPN policies, and apply hardening updates that re-enable logging.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/perimeter/webworm-slithers-customized-softether-vpn",
    "publishedAt": "2026-11-24T21:48:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apt-webworm-customizes-softether-vpn-to-evade-dete",
      "article-7db99672",
      "7db99672",
      "apt-webworm-customizes-softether-vpn-to-evade-dete-331ab6",
      "apt-webworm-customizes-softether-vpn-to-evade-detection"
    ]
  },
  {
    "slug": "rackspace-spot-platform-shut-down-after-breach-a36ba24c",
    "title": "Rackspace Spot Platform Shut Down After Breach",
    "summary": "A security breach in Rackspace Spot cloud platform exposed customer Kubernetes clusters and secrets to attackers. The incident allowed unauthorized access to sensitive configuration data, compromising cluster integrity and potentially exposing customer workloads. Rackspace has shut down the platform and urged customers to migrate services and download data as soon as possible by December 8.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/rackspace-shuts-down-spot-cloud-platform-after-security-breach/",
    "publishedAt": "2026-11-24T21:37:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rackspace-spot-platform-shut-down-after-breach",
      "article-a36ba24c",
      "a36ba24c",
      "rackspace-spot-platform-shut-down-after-breach-3f03f1"
    ]
  },
  {
    "slug": "vulnerabilities-threaten-visa-systems-in-multiple-774b5d98",
    "title": "Vulnerabilities Threaten Visa Systems in Multiple Countries",
    "summary": "Vulnerabilities in online visa and immigration systems of Nigeria, Ethiopia, Zambia, Sri Lanka, Fiji, and Ghana could disrupt traveler entry. The flaws allow attackers to manipulate border-control workflows, potentially bypassing authentication and authorization checks, though no confirmed exploitation has been reported. Affected agencies should apply vendor-issued patches, enforce multi-factor authentication, and monitor for anomalous access attempts.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/vulnerabilities-threats/god-mode-flaws-wreak-border-control-havoc",
    "publishedAt": "2026-11-24T21:36:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vulnerabilities-threaten-visa-systems-in-multiple",
      "article-774b5d98",
      "774b5d98",
      "vulnerabilities-threaten-visa-systems-in-multiple-9fd0ad",
      "vulnerabilities-threaten-visa-systems-in-multiple-countries"
    ]
  },
  {
    "slug": "cifs-utils-update-addresses-security-issues-in-rhe-f6105dd0",
    "title": "cifs-utils Update Addresses Security Issues in RHEL9",
    "summary": "Red Hat released a security update for cifs-utils on RHEL 9, fixing vulnerabilities that could enable privilege escalation or data exposure. The advisory cites multiple CVE identifiers with CVSS scores between 7.0 and 8.5, indicating high-severity flaws in SMB client handling. Administrators should apply RHSA-2026:102952 immediately and confirm cifs-utils is at least version 6.0.0-3.el9.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102952",
    "publishedAt": "2026-11-24T20:55:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cifs-utils-update-addresses-security-issues-in-rhe",
      "article-f6105dd0",
      "f6105dd0",
      "cifs-utils-update-addresses-security-issues-in-rhe-2ee179",
      "cifs-utils-update-addresses-security-issues-in-rhel9"
    ]
  },
  {
    "slug": "mycolorado-app-breach-stole-data-of-150-000-users-e22aa361",
    "title": "myColorado App Breach Stole Data of 150,000 Users",
    "summary": "The state of Colorado confirmed a cyberattack that disabled the myColorado mobile application and compromised personal data of approximately 150,000 residents. The breach exposed identifiers, contact information, and document storage details, potentially enabling identity theft or phishing campaigns against affected users. Colorado authorities urged users to monitor accounts, change passwords, and report suspicious activity while the agency investigates the incident.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/mycolorado-app-down-data-breach",
    "publishedAt": "2026-11-24T20:52:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mycolorado-app-breach-stole-data-of-150-000-users",
      "article-e22aa361",
      "e22aa361",
      "mycolorado-app-breach-stole-data-of-150-000-users-77b7d8"
    ]
  },
  {
    "slug": "red-hat-releases-gnome-remote-desktop-security-upd-fed8c6a1",
    "title": "Red Hat Releases gnome-remote-desktop Security Update",
    "summary": "A security update for gnome-remote-desktop on Red Hat Enterprise Linux 10 addresses multiple vulnerabilities that could allow remote code execution. The flaws, rated Important by Red Hat Product Security, carry CVSS scores that indicate high exploitation risk, though no active exploits have been reported.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:103408",
    "publishedAt": "2026-11-24T20:29:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-gnome-remote-desktop-security-upd",
      "article-fed8c6a1",
      "fed8c6a1",
      "red-hat-releases-gnome-remote-desktop-security-upd-2ee1da",
      "red-hat-releases-gnome-remote-desktop-security-update"
    ]
  },
  {
    "slug": "inception-gang-launches-large-scale-vishing-campai-6668275b",
    "title": "Inception Gang Launches Large-Scale Vishing Campaign",
    "summary": "Inception, a new extortion group, launched a large-scale vishing campaign targeting SSO credentials of global brands and firms. The campaign uses social engineering calls to harvest SSO tokens, potentially enabling unauthorized corporate account access; no encryption or exfiltration has been reported. Teams should enforce MFA, monitor login anomalies, and train staff on phishing to mitigate the threat.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/new-inception-extortion-gang-launches-large-scale-vishing-campaign/",
    "publishedAt": "2026-11-24T20:21:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "inception-gang-launches-large-scale-vishing-campai",
      "article-6668275b",
      "6668275b",
      "inception-gang-launches-large-scale-vishing-campai-45b38e",
      "inception-gang-launches-large-scale-vishing-campaign"
    ]
  },
  {
    "slug": "red-hat-issues-openssl-security-patch-a854ee06",
    "title": "Red Hat Issues openssl Security Patch",
    "summary": "An OpenSSL security update for Red Hat Enterprise Linux 10.2 EUS addresses multiple cryptographic flaws that could enable downgrade attacks. The vulnerabilities, rated Moderate by Red Hat Product Security, have CVSS scores indicating moderate risk and no confirmed wild exploitation. Red Hat has issued the patch; users should update OpenSSL to the latest version to prevent potential downgrade exploits.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:103381",
    "publishedAt": "2026-11-24T20:14:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-openssl-security-patch",
      "article-a854ee06",
      "a854ee06",
      "red-hat-issues-openssl-security-patch-2ee1d7"
    ]
  },
  {
    "slug": "qt5-qtdeclarative-update-fixes-security-flaws-in-r-02f9bfd5",
    "title": "qt5-qtdeclarative Update Fixes Security Flaws in RHEL8.4",
    "summary": "Red Hat issued a security update for qt5-qtdeclarative on RHEL 8.4, addressing vulnerabilities that could lead to memory corruption or denial of service. The advisory references several CVE identifiers with CVSS scores ranging from 6.5 to 8.0, indicating moderate to high severity. Systems should install RHSA-2026:103374 promptly and verify qt5-qtdeclarative is updated to the patched version.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:103374",
    "publishedAt": "2026-11-24T20:06:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "qt5-qtdeclarative-update-fixes-security-flaws-in-r",
      "article-02f9bfd5",
      "02f9bfd5",
      "qt5-qtdeclarative-update-fixes-security-flaws-in-r-2ee1d7",
      "qt5-qtdeclarative-update-fixes-security-flaws-in-rhel8-4"
    ]
  },
  {
    "slug": "erlang-otp-vulnerabilities-prompt-update-029a9067",
    "title": "Erlang OTP Vulnerabilities Prompt Update",
    "summary": "Erlang OTP multiple versions are affected by security flaws that could allow unauthorized code execution via the runtime system. The advisory, issued by the Canadian Centre for Cyber Security, does not list specific CVE identifiers but notes a CVSS base score indicating moderate severity. Administrators should review the provided web link and apply any available updates to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/erlang-security-advisory-av26-1204",
    "publishedAt": "2026-11-24T19:59:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "erlang-otp-vulnerabilities-prompt-update",
      "article-029a9067",
      "029a9067",
      "erlang-otp-vulnerabilities-prompt-update-544801"
    ]
  },
  {
    "slug": "california-privacy-agency-director-kemp-resigns-af-bdd646fe",
    "title": "California Privacy Agency Director Kemp Resigns After Two Years",
    "summary": "California Privacy Protection Agency director Charles Kemp announced his departure after a two-year tenure. His exit follows the launch of the agency’s first-in-the-nation platform that enables consumers to opt out of data sharing. The agency will continue to enforce privacy regulations and support consumer data rights under new effective leadership.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/california-privacy-agency-kemp",
    "publishedAt": "2026-11-24T19:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "california-privacy-agency-director-kemp-resigns-af",
      "article-bdd646fe",
      "bdd646fe",
      "california-privacy-agency-director-kemp-resigns-af-745ee9",
      "california-privacy-agency-director-kemp-resigns-after-two-ye"
    ]
  },
  {
    "slug": "cve-2026-135614-sensitive-data-redaction-bypass-in-c7149bd2",
    "title": "CVE-2026-135614 - Sensitive data redaction bypass in the troubleshooting tool in Amazon ECS MCP Server",
    "summary": "Bulletin ID: 2026-200-AWS Publication Date: 11/24/2026 11:00 AM PST Description: Amazon ECS MCP Server is an open-source Model Context Protocol server that lets AI agents and assistants manage and troubleshoot Amazon ECS workloads using the operator's AWS credentials. We identified CVE-2026-135614, an issue in the troubleshooting tool of the Amazon ECS MCP Server (awslabs.ecs-mcp-server) before 0.1.36.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-200-aws/",
    "publishedAt": "2026-11-24T19:27:19.000Z",
    "cves": [
      "CVE-2026-135614"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-135614-sensitive-data-redaction-bypass-in",
      "article-c7149bd2",
      "c7149bd2",
      "cve-2026-135614-sensitive-data-redaction-bypass-in-562e61",
      "cve-2026-135614-sensitive-data-redaction-bypass-in-the-troub"
    ]
  },
  {
    "slug": "cve-2026-135414-server-side-request-forgery-in-sna-3f6f69aa",
    "title": "CVE-2026-135414 - Server-side request forgery in snapshot repository registration in Amazon OpenSearch Service",
    "summary": "Bulletin ID: 2026-201-AWS Publication Date: 11/24/2026 11:15 AM PST Description: Amazon OpenSearch Service is a managed service for deploying, operating, and scaling OpenSearch clusters in the AWS Cloud. We identified CVE-2026-135414, an issue in snapshot repository registration in Amazon OpenSearch Service.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-201-aws/",
    "publishedAt": "2026-11-24T19:27:19.000Z",
    "cves": [
      "CVE-2026-135414"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-135414-server-side-request-forgery-in-sna",
      "article-3f6f69aa",
      "3f6f69aa",
      "cve-2026-135414-server-side-request-forgery-in-sna-547988",
      "cve-2026-135414-server-side-request-forgery-in-snapshot-repo"
    ]
  },
  {
    "slug": "turnitin-reports-unauthorized-activity-on-customer-09876e6f",
    "title": "Turnitin Reports Unauthorized Activity on Customer Systems",
    "summary": "Turnitin announced that it detected unauthorized activity involving certain customer-facing systems, according to a statement from CEO Chris Caren. The company did not disclose specific details or evidence of data compromise, but the incident indicates potential exploitation of exposed interfaces. Turnitin urged customers to review access controls, monitor logs, and apply any available security updates to mitigate the threat.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/turnitin-discloses-cyberattack-affecting-customer-facing-systems/",
    "publishedAt": "2026-11-24T18:59:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "turnitin-reports-unauthorized-activity-on-customer",
      "article-09876e6f",
      "09876e6f",
      "turnitin-reports-unauthorized-activity-on-customer-2283e3",
      "turnitin-reports-unauthorized-activity-on-customer-systems"
    ]
  },
  {
    "slug": "cve-2026-134066-query-injection-via-schema-derived-19cdd93a",
    "title": "CVE-2026-134066 - Query injection via schema-derived identifiers in Graph Explorer",
    "summary": "Bulletin ID: 2026-199-AWS Publication Date: 11/24/2026 10:30 AM PST Description: Graph Explorer is an open-source tool for browsing and searching graph data, which customers self-host against Amazon Neptune or other graph databases. We identified CVE-2026-134066, an issue in the query construction of Graph Explorer before version 3.2.1.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-199-aws/",
    "publishedAt": "2026-11-24T18:44:47.000Z",
    "cves": [
      "CVE-2026-134066"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-134066-query-injection-via-schema-derived",
      "article-19cdd93a",
      "19cdd93a",
      "cve-2026-134066-query-injection-via-schema-derived-2d6424",
      "cve-2026-134066-query-injection-via-schema-derived-identifie"
    ]
  },
  {
    "slug": "vmware-vcenter-vulnerabilities-require-patch-ec14cfd4",
    "title": "VMware vCenter Vulnerabilities Require Patch",
    "summary": "VMware vCenter and Cloud Foundation versions before 9.1.2 and 9.0.2 contain vulnerabilities that could enable remote code execution. The advisory, issued by the Canadian Centre for Cyber Security, references a CVSS base score but does not provide a CVE identifier, indicating moderate risk. VMware has released patches for affected products; administrators should apply the updates promptly to prevent potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/vmware-security-advisory-av26-1203",
    "publishedAt": "2026-11-24T18:43:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vmware-vcenter-vulnerabilities-require-patch",
      "article-ec14cfd4",
      "ec14cfd4",
      "vmware-vcenter-vulnerabilities-require-patch-7852ff"
    ]
  },
  {
    "slug": "chrome-early-stable-update-released-for-desktop-03c1f428",
    "title": "Chrome Early Stable Update Released for Desktop",
    "summary": "Google Chrome released an early stable update (version 159.0.8154.33/34) for Windows and Mac desktop clients. The update includes minor bug fixes and performance improvements, with no publicly disclosed security flaws or CVEs. Users should install the update via the Chrome browser's auto-update mechanism or manually download the installer to maintain up-to-date security posture.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/early-stable-update-for-desktop_027920431.html",
    "publishedAt": "2026-11-24T18:36:59.123Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-early-stable-update-released-for-desktop",
      "article-03c1f428",
      "03c1f428",
      "chrome-early-stable-update-released-for-desktop-223215"
    ]
  },
  {
    "slug": "wiz-shares-fedramp-vdr-ver-insights-39a59a07",
    "title": "Wiz Shares FedRAMP VDR & VER Insights",
    "summary": "Wiz Research hosted a FedRAMP VDR & VER event on November 12, gathering government officials, industry experts, and its own FedRAMP team to discuss modernizing vulnerability management. The session highlighted new FedRAMP requirements, emphasizing automated vulnerability detection, continuous verification, and streamlined remediation workflows. Participants were urged to use Wiz’s platform for real-time compliance monitoring and align operations with FedRAMP.",
    "category": "General",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/fedramp-vdr-ver-event-key-takeaways",
    "publishedAt": "2026-11-24T18:36:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wiz-shares-fedramp-vdr-ver-insights",
      "article-39a59a07",
      "39a59a07",
      "wiz-shares-fedramp-vdr-ver-insights-4c453c"
    ]
  },
  {
    "slug": "chrome-beta-updates-desktop-clients-to-159-0-8154-5a9d70cc",
    "title": "Chrome Beta Updates Desktop Clients to 159.0.8154.33",
    "summary": "Google Chrome updated its Beta channel to version 159.0.8154.33 for Windows, Mac, and Linux desktop clients. The release contains minor bug fixes and performance enhancements, with no disclosed security vulnerabilities or CVEs. Beta users should enable auto-update or manually install the new build to stay current with the latest features.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-beta-for-desktop-update_0422009936.html",
    "publishedAt": "2026-11-24T18:28:33.237Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-beta-updates-desktop-clients-to-159-0-8154",
      "article-5a9d70cc",
      "5a9d70cc",
      "chrome-beta-updates-desktop-clients-to-159-0-8154-ae14b1",
      "chrome-beta-updates-desktop-clients-to-159-0-8154-33"
    ]
  },
  {
    "slug": "socket-provides-free-patches-for-all-critical-ruby-d62555b9",
    "title": "Socket Provides Free Patches for All Critical RubyGems CVEs",
    "summary": "Socket has released free patches that address every critical RubyGems vulnerability without requiring dependency upgrades. The patches cover all CVEs flagged as critical by the RubyGems security team, ensuring immediate remediation for affected projects. Security teams should download the patches from Socket’s repository and apply them via the provided installation scripts or package managers.",
    "category": "General",
    "severity": "LOW",
    "source": "Socket.dev",
    "sourceUrl": "https://socket.dev/blog/free-patches-critical-ruby-cves",
    "publishedAt": "2026-11-24T18:27:14.893Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "socket-provides-free-patches-for-all-critical-ruby",
      "article-d62555b9",
      "d62555b9",
      "socket-provides-free-patches-for-all-critical-ruby-718eab",
      "socket-provides-free-patches-for-all-critical-rubygems-cves"
    ]
  },
  {
    "slug": "chrome-for-android-update-23c3fa76",
    "title": "Chrome for Android Update",
    "summary": "We've just released Chrome 159 (159.0.8154.33) for Android to a small percentage of users. It'll become available on Google Play over the next few days. If you find a new issue, please let us know by filing a bug .",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-for-android-update_082592203.html",
    "publishedAt": "2026-11-24T18:12:30.107Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-for-android-update",
      "article-23c3fa76",
      "23c3fa76",
      "chrome-for-android-update-c48cf1"
    ]
  },
  {
    "slug": "aws-pgactive-buffer-overflow-enables-authenticated-9a41b041",
    "title": "AWS pgactive Buffer Overflow Enables Authenticated RCE",
    "summary": "A stack-based buffer overflow in AWS pgactive’s replication origin name parsing lets an authenticated database user with specific privileges run arbitrary OS commands. The flaw, CVE-2026-134068, permits privilege-escalated code execution on the database host, threatening the entire PostgreSQL cluster. AWS has issued a patch for all affected versions (≥ 2.1.0); administrators should apply it immediately to close the RCE vector.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-198-aws/",
    "publishedAt": "2026-11-24T18:09:02.000Z",
    "cves": [
      "CVE-2026-134068"
    ],
    "additionalSources": [],
    "aliases": [
      "aws-pgactive-buffer-overflow-enables-authenticated",
      "article-9a41b041",
      "9a41b041",
      "aws-pgactive-buffer-overflow-enables-authenticated-2baf4c",
      "aws-pgactive-buffer-overflow-enables-authenticated-rce"
    ]
  },
  {
    "slug": "radware-breach-exposes-customer-cloud-access-keys-6970bc18",
    "title": "Radware Breach Exposes Customer Cloud Access Keys",
    "summary": "Radware reported that attackers accessed customer account details and cloud access keys via an unsecured internal Cloud WAF management API left exposed online. The exposed API permitted retrieval of credentials that could be used to compromise customer cloud environments. Radware has disclosed the breach; affected customers should review logs and rotate keys.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/radware-discloses-breach-exposing-customer-cloud-access-keys/",
    "publishedAt": "2026-11-24T17:49:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "radware-breach-exposes-customer-cloud-access-keys",
      "article-6970bc18",
      "6970bc18",
      "radware-breach-exposes-customer-cloud-access-keys-6983f3"
    ]
  },
  {
    "slug": "lawmakers-urge-id-verification-firms-to-strengthen-208dbf8c",
    "title": "Lawmakers Urge ID Verification Firms to Strengthen Security",
    "summary": "Lawmakers issued a bipartisan letter urging identity verification firms to strengthen security following the September data breach at IDscan. The letter highlights ongoing vulnerabilities in ID verification services and calls for enhanced safeguards to protect user data. Industry stakeholders should review compliance frameworks and implement robust controls to mitigate future breaches.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/idscan-data-breach-warning-congressional-letter",
    "publishedAt": "2026-11-24T17:49:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "lawmakers-urge-id-verification-firms-to-strengthen",
      "article-208dbf8c",
      "208dbf8c",
      "lawmakers-urge-id-verification-firms-to-strengthen-7d700a",
      "lawmakers-urge-id-verification-firms-to-strengthen-security"
    ]
  },
  {
    "slug": "red-hat-issues-important-update-for-resource-agent-8d7ff866",
    "title": "Red Hat Issues Important Update for resource-agents",
    "summary": "Red Hat released an Important security update for the resource-agents package on Enterprise Linux 8, addressing multiple vulnerabilities that could affect cluster resource management. The advisory references CVSS base scores for each flaw, indicating high-severity risks that could lead to unauthorized access or denial of service within the cluster. Administrators should apply the update immediately to mitigate the identified weaknesses.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:103254",
    "publishedAt": "2026-11-24T17:17:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-update-for-resource-agent",
      "article-8d7ff866",
      "8d7ff866",
      "red-hat-issues-important-update-for-resource-agent-2ee1d3",
      "red-hat-issues-important-update-for-resource-agents"
    ]
  },
  {
    "slug": "red-hat-issues-critical-fence-agents-update-bc33027c",
    "title": "Red Hat Issues Critical Fence-Agents Update",
    "summary": "Red Hat released a critical security update for fence-agents on RHEL 8, fixing vulnerabilities that could let local attackers gain elevated privileges. The advisory cites CVSS base scores for each flaw, indicating high severity, though specific CVE IDs are not listed. Red Hat urges immediate installation of the updated fence-agents package to prevent privilege escalation and potential code execution.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:103211",
    "publishedAt": "2026-11-24T17:16:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-fence-agents-update",
      "article-bc33027c",
      "bc33027c",
      "red-hat-issues-critical-fence-agents-update-2ee1d2"
    ]
  },
  {
    "slug": "bots-detect-aws-keys-within-eight-seconds-of-expos-f38dcebc",
    "title": "Bots Detect AWS Keys Within Eight Seconds of Exposure",
    "summary": "A cloud security bot can discover exposed AWS access keys within eight seconds of publication. The rapid detection capability enables attackers to quickly harvest credentials, potentially granting unauthorized access to cloud resources before owners revoke the key. Security teams should enforce strict key rotation, enable automated key monitoring, and immediately revoke any accidentally exposed credentials.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/ai/2026/11/a-bot-tested-an-aws-key-within-8-seconds-of-exposure",
    "publishedAt": "2026-11-24T17:08:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bots-detect-aws-keys-within-eight-seconds-of-expos",
      "article-f38dcebc",
      "f38dcebc",
      "bots-detect-aws-keys-within-eight-seconds-of-expos-1bc796",
      "bots-detect-aws-keys-within-eight-seconds-of-exposure"
    ]
  },
  {
    "slug": "rhsa-2026-102942-important-mariadb-11-8-security-u-4be34062",
    "title": "RHSA-2026:102942: Important: mariadb:11.8 security update",
    "summary": "An update for the mariadb:11.8 module is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102942",
    "publishedAt": "2026-11-24T17:00:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102942-important-mariadb-11-8-security-u",
      "article-4be34062",
      "4be34062",
      "rhsa-2026-102942-important-mariadb-11-8-security-u-2ee178",
      "rhsa-2026-102942-important-mariadb-11-8-security-update"
    ]
  },
  {
    "slug": "volant-manticore-deploys-ipfs-based-kuboshell-back-dbe30849",
    "title": "Volant Manticore Deploys IPFS-Based KuboShell Backdoor",
    "summary": "Iran-aligned Volant Manticore has targeted telecommunications firms, airlines, and critical infrastructure in Cyprus, using a custom backdoor named KuboShell. KuboShell leverages the InterPlanetary File System for command-and-control and deploys the Homa post-compromise framework, enabling stealthy persistence. Security teams should monitor for IPFS traffic, block known KuboShell signatures, and apply network segmentation to mitigate potential espionage.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/iran-aligned-volant-manticore-uses-ipfs.html",
    "publishedAt": "2026-11-24T16:54:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "volant-manticore-deploys-ipfs-based-kuboshell-back",
      "article-dbe30849",
      "dbe30849",
      "volant-manticore-deploys-ipfs-based-kuboshell-back-451f5e",
      "volant-manticore-deploys-ipfs-based-kuboshell-backdoor"
    ]
  },
  {
    "slug": "tanium-vulnerabilities-span-multiple-product-versi-f7e47898",
    "title": "Tanium Vulnerabilities Span Multiple Product Versions",
    "summary": "Tanium disclosed vulnerabilities in Core Content, Enhanced Tags, Default Content, Endpoint Configuration Toolset, Engage, Zone Server, and Threat Response across multiple versions. Flaws enable local privilege escalation or arbitrary code execution, with CVSS scores 6.5-8.3, but no active exploitation reported. Apply the latest patches or upgrade to the minimum recommended versions to mitigate the risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/tanium-security-advisory-av26-1202",
    "publishedAt": "2026-11-24T16:45:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "tanium-vulnerabilities-span-multiple-product-versi",
      "article-f7e47898",
      "f7e47898",
      "tanium-vulnerabilities-span-multiple-product-versi-420fd1",
      "tanium-vulnerabilities-span-multiple-product-versions"
    ]
  },
  {
    "slug": "vmware-patches-critical-esx-and-vcenter-vulnerabil-a401c0cd",
    "title": "VMware Patches Critical ESX and vCenter Vulnerabilities",
    "summary": "VMware disclosed a critical authentication bypass in vCenter and code execution flaws on ESX hosts, identified by CVE-2026-123903. The flaw permits unauthenticated attackers to gain control of vCenter and run arbitrary code on ESX servers, threatening virtual infrastructure. VMware issued an out-of-band patch; administrators should apply it immediately to secure affected systems.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/vmware-updates-patch-critical-esx-vcenter-vulnerabilities/",
    "publishedAt": "2026-11-24T16:32:56.000Z",
    "cves": [
      "CVE-2026-123903"
    ],
    "additionalSources": [],
    "aliases": [
      "vmware-patches-critical-esx-and-vcenter-vulnerabil",
      "article-a401c0cd",
      "a401c0cd",
      "vmware-patches-critical-esx-and-vcenter-vulnerabil-3b1d10",
      "vmware-patches-critical-esx-and-vcenter-vulnerabilities"
    ]
  },
  {
    "slug": "shinyhunters-claims-to-return-after-fbi-arrests-us-310365e0",
    "title": "ShinyHunters claims to return after FBI arrests, uses old PGP keys as proof",
    "summary": "The ShinyHunters extortion gang claims to have returned in posts on a new data leak site after a series of arrests over the past two months targeting alleged members.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/shinyhunters-resurfaces-after-fbi-arrests-uses-old-pgp-keys-as-proof/",
    "publishedAt": "2026-11-24T16:30:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "shinyhunters-claims-to-return-after-fbi-arrests-us",
      "article-310365e0",
      "310365e0",
      "shinyhunters-claims-to-return-after-fbi-arrests-us-329b20",
      "shinyhunters-claims-to-return-after-fbi-arrests-uses-old-pgp"
    ]
  },
  {
    "slug": "eu-academy-breach-stole-user-data-57513e30",
    "title": "EU Academy Breach Stole User Data",
    "summary": "The European Commission confirmed attackers breached its EU Academy learning hub and stole personal data of an undisclosed number of users. The breach exposed user credentials and demographic details, enabling potential identity theft or phishing attacks against EU staff and students. The Commission must investigate, notify affected users, and reinforce access controls on the EU Academy platform.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/european-commission-confirms-data-theft-in-eu-academy-breach/",
    "publishedAt": "2026-11-24T16:22:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "eu-academy-breach-stole-user-data",
      "article-57513e30",
      "57513e30",
      "eu-academy-breach-stole-user-data-21e64d"
    ]
  },
  {
    "slug": "check-point-servers-compromised-in-22-org-campaign-4e126213",
    "title": "Check Point Servers Compromised in 22-Org Campaign",
    "summary": "Threat actors exploited multiple vulnerabilities to compromise Check Point Security management servers in an ongoing campaign that affected 22 organizations. The exploitation enabled attackers to gain administrative control over the servers, potentially exposing configuration data and internal network traffic. Check Point has released patches for the affected vulnerabilities; administrators should apply updates and review server hardening configurations.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-compromise-check-point-servers-in-22-organizations/",
    "publishedAt": "2026-11-24T16:15:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "check-point-servers-compromised-in-22-org-campaign",
      "article-4e126213",
      "4e126213",
      "check-point-servers-compromised-in-22-org-campaign-32f490"
    ]
  },
  {
    "slug": "rhsa-2026-102931-important-grafana-security-update-083e714c",
    "title": "RHSA-2026:102931: Important: grafana security update",
    "summary": "An update for grafana is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102931",
    "publishedAt": "2026-11-24T16:11:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102931-important-grafana-security-update",
      "article-083e714c",
      "083e714c",
      "rhsa-2026-102931-important-grafana-security-update-2ee178"
    ]
  },
  {
    "slug": "microsoft-office-visio-rce-cve-2026-112732-omitted-d6267404",
    "title": "Microsoft Office Visio RCE CVE-2026-112732 Omitted",
    "summary": "Microsoft Office Visio contains a remote code execution flaw identified as CVE-2026-112732, affecting all supported Visio versions. The flaw permits arbitrary code execution via crafted input, but no exploitation has been reported, and it was omitted from the November 2026 Security Updates. Microsoft released the patch in November 2026, and customers who installed those updates need not take further action.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-112732",
    "publishedAt": "2026-11-24T16:00:00.000Z",
    "cves": [
      "CVE-2026-112732"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-office-visio-rce-cve-2026-112732-omitted",
      "article-d6267404",
      "d6267404",
      "microsoft-office-visio-rce-cve-2026-112732-omitted-1febc7"
    ]
  },
  {
    "slug": "carnegie-endowment-donor-data-leaked-by-vendor-45cf6cec",
    "title": "Carnegie Endowment Donor Data Leaked by Vendor",
    "summary": "The Carnegie Endowment for International Peace reported that a third-party vendor, Soapbox Engage, suffered a breach that leaked donor information. The leak exposed personal and financial details of donors, potentially enabling targeted phishing or identity theft campaigns. The Endowment should investigate the vendor’s security posture, notify affected donors, and enforce stricter data protection controls.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/carnegie-endowment-data-breach",
    "publishedAt": "2026-11-24T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "carnegie-endowment-donor-data-leaked-by-vendor",
      "article-45cf6cec",
      "45cf6cec",
      "carnegie-endowment-donor-data-leaked-by-vendor-4e7787"
    ]
  },
  {
    "slug": "red-hat-issues-kernel-rt-update-for-rhel-9-2-sap-0ba2bd0e",
    "title": "Red Hat Issues kernel-rt Update for RHEL 9.2 SAP",
    "summary": "A kernel-rt security update fixes multiple privilege escalation and denial-of-service flaws in Red Hat Enterprise Linux 9.2 for SAP Solutions. Each vulnerability carries a CVSS score between 7.5 and 8.3, exposing local users to potential real-time scheduling disruption. Red Hat has issued the patch for all affected RHEL 9.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:103219",
    "publishedAt": "2026-11-24T15:46:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-kernel-rt-update-for-rhel-9-2-sap",
      "article-0ba2bd0e",
      "0ba2bd0e",
      "red-hat-issues-kernel-rt-update-for-rhel-9-2-sap-2ee1d2"
    ]
  },
  {
    "slug": "rhsa-2026-102948-moderate-cockpit-machines-securit-7c7424ba",
    "title": "RHSA-2026:102948: Moderate: cockpit-machines security update",
    "summary": "An update for cockpit-machines is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102948",
    "publishedAt": "2026-11-24T15:45:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102948-moderate-cockpit-machines-securit",
      "article-7c7424ba",
      "7c7424ba",
      "rhsa-2026-102948-moderate-cockpit-machines-securit-2ee178",
      "rhsa-2026-102948-moderate-cockpit-machines-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-102941-important-fltk-security-update-39efe707",
    "title": "RHSA-2026:102941: Important: fltk security update",
    "summary": "An update for fltk is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102941",
    "publishedAt": "2026-11-24T15:43:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102941-important-fltk-security-update",
      "article-39efe707",
      "39efe707",
      "rhsa-2026-102941-important-fltk-security-update-2ee178"
    ]
  },
  {
    "slug": "mcdonald-s-japan-customer-data-breach-confirmed-c2ac64ab",
    "title": "McDonald’s Japan Customer Data Breach Confirmed",
    "summary": "McDonald’s Japan confirmed a breach where a third party accessed customer data stored behind its official mobile app. The exposed records included purchase histories, internal customer IDs, IP addresses, and mobile device location data, potentially compromising user privacy. McDonald’s Japan urged affected customers to monitor accounts and advised security teams to review access controls and data handling practices.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/mcdonalds-japan-data-breach/",
    "publishedAt": "2026-11-24T15:39:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mcdonald-s-japan-customer-data-breach-confirmed",
      "article-c2ac64ab",
      "c2ac64ab",
      "mcdonald-s-japan-customer-data-breach-confirmed-59f768"
    ]
  },
  {
    "slug": "ai-development-adds-vulnerability-noise-calls-for-f1552214",
    "title": "AI Development Adds Vulnerability Noise, Calls for Resilience",
    "summary": "AI-driven development increases software supply-chain complexity, flooding security teams with low-risk vulnerabilities. RapidFort argues that runtime visibility, container hardening, and automated remediation can filter noise, reducing false positives and focusing resources on real threats. Security teams should adopt these practices to improve resilience, though no specific patch or CVE is cited.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/from-vulnerability-noise-to-resilience-rethinking-security-in-the-ai-era/",
    "publishedAt": "2026-11-24T15:01:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-development-adds-vulnerability-noise-calls-for",
      "article-f1552214",
      "f1552214",
      "ai-development-adds-vulnerability-noise-calls-for-33dc1c",
      "ai-development-adds-vulnerability-noise-calls-for-resilience"
    ]
  },
  {
    "slug": "autonomous-ai-agents-automate-multi-platform-intru-360d7a1c",
    "title": "Autonomous AI Agents Automate Multi-Platform Intrusions",
    "summary": "Unit 42 tracked cyber campaigns featuring autonomous AI agents deployed to conduct multi-platform intrusions. Threat actors used these agentic systems to automate complex attacks using standard administrative tools while generating distinct operational traces. Security operations teams must monitor environment-specific telemetry to identify automated agent behaviors and mitigate multi-platform intrusion risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Unit 42",
    "sourceUrl": "https://unit42.paloaltonetworks.com/autonomous-ai-agent-threat-campaigns/",
    "publishedAt": "2026-11-24T15:00:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "autonomous-ai-agents-automate-multi-platform-intru",
      "article-360d7a1c",
      "360d7a1c",
      "autonomous-ai-agents-automate-multi-platform-intru-38de7d",
      "autonomous-ai-agents-automate-multi-platform-intrusions"
    ]
  },
  {
    "slug": "cisa-alerts-on-exploited-n-able-email-bug-1663bd94",
    "title": "CISA Alerts on Exploited N-Able Email Bug",
    "summary": "CISA warns that a vulnerability in N-Able’s email security platform has been exploited, threatening government departments. The flaw, identified as CVE-2026-134624, allows attackers to bypass spam and malware filtering, potentially delivering malicious content to users. N-Able has released a patch; agencies must update before Thanksgiving to mitigate the critical risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/cisa-nable-cybersecurity-bug",
    "publishedAt": "2026-11-24T15:00:00.000Z",
    "cves": [
      "CVE-2026-134624"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-alerts-on-exploited-n-able-email-bug",
      "article-1663bd94",
      "1663bd94",
      "cisa-alerts-on-exploited-n-able-email-bug-713807"
    ]
  },
  {
    "slug": "eu-academy-data-exposed-in-ai-assisted-attack-ef68327d",
    "title": "EU Academy Data Exposed in AI-Assisted Attack",
    "summary": "The European Commission discovered that an AI-assisted cyberattack exposed names and email addresses of EU Academy users. The breach, identified during an October investigation, indicates attackers accessed user data stored in the Academy’s systems, though no financial or credential theft was reported. The Commission is reviewing access controls and advising affected users to monitor for phishing attempts.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/european-commission-uncovers-data-breach-in-cyberattack-investigation/",
    "publishedAt": "2026-11-24T14:49:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "eu-academy-data-exposed-in-ai-assisted-attack",
      "article-ef68327d",
      "ef68327d",
      "eu-academy-data-exposed-in-ai-assisted-attack-72f95c"
    ]
  },
  {
    "slug": "chrome-vulnerability-affects-versions-before-158-0-44fc3e83",
    "title": "Chrome Vulnerability Affects Versions Before 158.0.8127.88",
    "summary": "Google issued a security advisory for a vulnerability affecting Chrome versions prior to 158.0.8127.88 on Windows/Mac and 158.0.8127.88 on Linux. The flaw could allow attackers to compromise user sessions or execute code, though no exploitation reports are cited. Users and administrators should update to the latest Chrome release or apply the vendor’s patch as soon as it becomes available.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/google-security-advisory-av26-1201",
    "publishedAt": "2026-11-24T14:41:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-vulnerability-affects-versions-before-158-0",
      "article-44fc3e83",
      "44fc3e83",
      "chrome-vulnerability-affects-versions-before-158-0-170ca6",
      "chrome-vulnerability-affects-versions-before-158-0-8127-88"
    ]
  },
  {
    "slug": "cloudera-announces-sovereign-ai-solution-for-enter-3b34ea0e",
    "title": "Cloudera Announces Sovereign AI Solution for Enterprise Environments",
    "summary": "Cloudera launched Cloudera for Digital Sovereignty to provide enterprise technical and operational control across cloud, data, and AI lifecycles. The architecture combines Cloudera Anywhere Cloud with open-weight models to support deployments across sovereign clouds, private data centers, and air-gapped environments. Security teams can leverage open standards to maintain governed data pipelines while mitigating vendor lock-in risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/cloudera-digital-sovereignty/",
    "publishedAt": "2026-11-24T14:33:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudera-announces-sovereign-ai-solution-for-enter",
      "article-3b34ea0e",
      "3b34ea0e",
      "cloudera-announces-sovereign-ai-solution-for-enter-4dfd58",
      "cloudera-announces-sovereign-ai-solution-for-enterprise-envi"
    ]
  },
  {
    "slug": "n8n-vulnerabilities-affect-multiple-versions-cb89839d",
    "title": "n8n Vulnerabilities Affect Multiple Versions",
    "summary": "n8n disclosed flaws in versions prior to 3.4.0, 2.50.0, 2.49.5, 2.48.8, 1.123.101, 2.49.4, 2.48.7, and 1.123.100. The flaws allow local privilege escalation or arbitrary code execution, with CVSS scores 6.0-8.0, but no active exploitation observed. Apply the latest patches or upgrade to the minimum recommended versions to mitigate the risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/n8n-security-advisory-av26-1200",
    "publishedAt": "2026-11-24T14:32:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n8n-vulnerabilities-affect-multiple-versions",
      "article-cb89839d",
      "cb89839d",
      "n8n-vulnerabilities-affect-multiple-versions-3ce52d"
    ]
  },
  {
    "slug": "astelia-introduces-autonomous-network-mitigation-a68a5da0",
    "title": "Astelia Introduces Autonomous Network Mitigation",
    "summary": "Astelia released autonomous network mitigation that blocks attack paths to reachable vulnerabilities before patches are applied. The solution uses Frontier AI models to cut exploit time to near zero, covering the 1% of vulnerabilities attackers can reach without patching. Deploying the mitigation workflow requires six steps and a single approval branch, enabling organizations to prevent exploitation while awaiting vendor fixes.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/astelia-autonomous-network-mitigation/",
    "publishedAt": "2026-11-24T14:24:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "astelia-introduces-autonomous-network-mitigation",
      "article-a68a5da0",
      "a68a5da0",
      "astelia-introduces-autonomous-network-mitigation-575764"
    ]
  },
  {
    "slug": "check-point-security-management-servers-targeted-i-e5c91a47",
    "title": "Check Point Security Management Servers Targeted in Global Attacks",
    "summary": "Threat actors compromised Check Point Security Management Servers across multiple international organizations using an AI-assisted campaign. Attackers initiated the intrusions from 99 distinct IP addresses to target enterprise networks across various global industry sectors. Network administrators must inspect management server logs for indicators of compromise associated with the identified infrastructure and isolate impacted management nodes.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/check-point-security-management-servers-hacked-in-ai-assisted-campaign/",
    "publishedAt": "2026-11-24T14:21:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "check-point-security-management-servers-targeted-i",
      "article-e5c91a47",
      "e5c91a47",
      "check-point-security-management-servers-targeted-i-2644fe",
      "check-point-security-management-servers-targeted-in-global-a"
    ]
  },
  {
    "slug": "rhsa-2026-102937-important-fltk-security-update-2ee1c1c9",
    "title": "RHSA-2026:102937: Important: fltk security update",
    "summary": "An update for fltk is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102937",
    "publishedAt": "2026-11-24T14:16:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102937-important-fltk-security-update",
      "article-2ee1c1c9",
      "2ee1c1c9",
      "rhsa-2026-102937-important-fltk-security-update-2ee178"
    ]
  },
  {
    "slug": "rhsa-2026-102943-moderate-cockpit-machines-securit-746d88f6",
    "title": "RHSA-2026:102943: Moderate: cockpit-machines security update",
    "summary": "An update for cockpit-machines is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102943",
    "publishedAt": "2026-11-24T14:14:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102943-moderate-cockpit-machines-securit",
      "article-746d88f6",
      "746d88f6",
      "rhsa-2026-102943-moderate-cockpit-machines-securit-2ee178",
      "rhsa-2026-102943-moderate-cockpit-machines-security-update"
    ]
  },
  {
    "slug": "volant-manticore-flying-under-the-radar-1ed67c1d",
    "title": "Volant Manticore: Flying Under the Radar",
    "summary": "Key Points Introduction Check Point Research is tracking a previously undocumented Iran-nexus threat group who we named Volant Manticore. What started in July 2026 as a single backdoor delivered to a Cyprus-based airline through a fake CV has since expanded into a broader cluster of activity that we traced back to September 2025.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/volant-manticore-flying-under-the-radar/",
    "publishedAt": "2026-11-24T14:13:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "volant-manticore-flying-under-the-radar",
      "article-1ed67c1d",
      "1ed67c1d",
      "volant-manticore-flying-under-the-radar-3a8350"
    ]
  },
  {
    "slug": "critical-vmware-esx-flaws-let-remote-attackers-exe-d6ab6346",
    "title": "Critical VMware ESX Flaws Let Remote Attackers Execute Malicious Code on Virtualization Hosts",
    "summary": "Broadcom has disclosed 23 VMware vulnerabilities, including two critical flaws that could let attackers run code directly on ESX hosts and a third that could let them access vCenter without signing in. The Broadcom security advisory, VMSA-2026-0011, was published on November 24. It says the flaws were privately reported and does not report active exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/vmware-esx-host-vulnerabilities/",
    "publishedAt": "2026-11-24T14:11:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "critical-vmware-esx-flaws-let-remote-attackers-exe",
      "article-d6ab6346",
      "d6ab6346",
      "critical-vmware-esx-flaws-let-remote-attackers-exe-17cb24",
      "critical-vmware-esx-flaws-let-remote-attackers-execute-malic"
    ]
  },
  {
    "slug": "mcdonald-s-japan-exposes-app-user-location-data-747e255b",
    "title": "McDonald's Japan Exposes App User Location Data",
    "summary": "A data breach at McDonald's Japan exposed a database of official smartphone app users, revealing their location information. Attackers accessed the database through an undisclosed vulnerability, compromising personal data for thousands of customers without evidence of credential theft. McDonald's Japan has notified affected users and is working with security teams to investigate the breach and strengthen database access controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/mcdonalds-japan-data-breach-exposes-customer-location-information/",
    "publishedAt": "2026-11-24T14:09:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mcdonald-s-japan-exposes-app-user-location-data",
      "article-747e255b",
      "747e255b",
      "mcdonald-s-japan-exposes-app-user-location-data-6af1bf"
    ]
  },
  {
    "slug": "rhsa-2026-102938-important-fltk-security-update-a7f02297",
    "title": "RHSA-2026:102938: Important: fltk security update",
    "summary": "An update for fltk is now available for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102938",
    "publishedAt": "2026-11-24T13:52:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102938-important-fltk-security-update",
      "article-a7f02297",
      "a7f02297",
      "rhsa-2026-102938-important-fltk-security-update-2ee178"
    ]
  },
  {
    "slug": "rhsa-2026-102859-important-python3-12-security-upd-f3b66ced",
    "title": "RHSA-2026:102859: Important: python3.12 security update",
    "summary": "An update for python3.12 is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102859",
    "publishedAt": "2026-11-24T13:48:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102859-important-python3-12-security-upd",
      "article-f3b66ced",
      "f3b66ced",
      "rhsa-2026-102859-important-python3-12-security-upd-2ee175",
      "rhsa-2026-102859-important-python3-12-security-update"
    ]
  },
  {
    "slug": "uk-ncsc-reports-rise-in-ai-driven-cyber-attacks-6e944715",
    "title": "UK NCSC Reports Rise in AI-Driven Cyber Attacks",
    "summary": "Britain's National Cyber Security Centre reported a marked rise in artificial intelligence-assisted cyberattacks since September. NCSC advisories indicate that AI integration has significantly accelerated threat actor speed, operational scale, and persistence during network intrusion attempts. Defense teams must adapt detection strategies to identify high-velocity automated threats and enhance response capabilities against rapid attack lifecycles.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/cyberattacks-uk-artificial-intelligence",
    "publishedAt": "2026-11-24T13:45:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "uk-ncsc-reports-rise-in-ai-driven-cyber-attacks",
      "article-6e944715",
      "6e944715",
      "uk-ncsc-reports-rise-in-ai-driven-cyber-attacks-184ff5"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-update-for-rhel-9-4-sap-bb9a6e86",
    "title": "Red Hat Releases kernel Update for RHEL 9.4 SAP",
    "summary": "A kernel security update addresses several privilege escalation and denial-of-service vulnerabilities in Red Hat Enterprise Linux 9.4 for SAP Solutions. The flaws have CVSS scores ranging from 7.0 to 8.2, allowing local users to potentially disrupt system operations. Red Hat has released the patch for all affected RHEL 9.4 SAP nodes; administrators should apply it immediately to mitigate the risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102712",
    "publishedAt": "2026-11-24T13:41:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-update-for-rhel-9-4-sap",
      "article-bb9a6e86",
      "bb9a6e86",
      "red-hat-releases-kernel-update-for-rhel-9-4-sap-2ee171"
    ]
  },
  {
    "slug": "gta-6-hacker-sentenced-released-same-day-3f92ee57",
    "title": "GTA 6 Hacker Sentenced, Released Same Day",
    "summary": "A former Lapsus$ member, Arion Kurtaj, was sentenced to seven years for leaking Grand Theft Auto VI footage after a guilty plea. The case involved fraud and computer misuse charges, including unauthorized disclosure of proprietary game content in London. Court granted license release the same day; no further remediation required.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/gta-vi-hacker-sentenced-seven-years-released-on-licence/",
    "publishedAt": "2026-11-24T13:35:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gta-6-hacker-sentenced-released-same-day",
      "article-3f92ee57",
      "3f92ee57",
      "gta-6-hacker-sentenced-released-same-day-38e906"
    ]
  },
  {
    "slug": "hackers-deploy-zqagent-backdoor-to-run-malicious-c-dafeda16",
    "title": "Hackers Deploy ZQAgent Backdoor to Run Malicious Commands and Access Files on Linux Servers",
    "summary": "A new Linux backdoor called ZQAgent is giving attackers a long-term foothold on compromised servers. It can run commands, move through folders, read files and open network tunnels. The malware was dropped by ARTEX, an AI-driven hacking framework.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-deploy-zqagent-backdoor/",
    "publishedAt": "2026-11-24T13:35:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-deploy-zqagent-backdoor-to-run-malicious-c",
      "article-dafeda16",
      "dafeda16",
      "hackers-deploy-zqagent-backdoor-to-run-malicious-c-4fec88",
      "hackers-deploy-zqagent-backdoor-to-run-malicious-commands-an"
    ]
  },
  {
    "slug": "shirudo-ai-tool-protects-unpatched-linux-systems-fa91e5d3",
    "title": "Shirudo AI Tool Protects Unpatched Linux Systems",
    "summary": "OpenAI and Cisco released Shirudo, an open-source Linux security tool that deploys temporary runtime protections to block exploitation of unpatched vulnerabilities. Shirudo leverages AI-driven heuristics to detect and mitigate exploitation attempts against known CVEs without requiring service restarts, addressing the gap before patch deployment. Administrators can deploy Shirudo immediately to shield systems, then apply official patches once available.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/new-shirudo-tool-uses-ai-to-shield-unpatched-linux-systems-from-exploits/",
    "publishedAt": "2026-11-24T13:34:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "shirudo-ai-tool-protects-unpatched-linux-systems",
      "article-fa91e5d3",
      "fa91e5d3",
      "shirudo-ai-tool-protects-unpatched-linux-systems-5c4b77"
    ]
  },
  {
    "slug": "red-hat-issues-kernel-update-for-rhel-9-sap-01dbf79d",
    "title": "Red Hat Issues kernel Update for RHEL 9 SAP",
    "summary": "A kernel security update fixes multiple privilege escalation and denial-of-service flaws in Red Hat Enterprise Linux 9. The vulnerabilities carry CVSS scores between 7.2 and 8.0, exposing local users to potential system disruption. Red Hat has issued the patch for all affected RHEL 9 nodes; administrators should apply it promptly to close the gaps.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102590",
    "publishedAt": "2026-11-24T13:31:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-kernel-update-for-rhel-9-sap",
      "article-01dbf79d",
      "01dbf79d",
      "red-hat-issues-kernel-update-for-rhel-9-sap-2ee16a"
    ]
  },
  {
    "slug": "anthropic-enhances-enterprise-ai-misuse-detection-d206bbec",
    "title": "Anthropic Enhances Enterprise AI Misuse Detection",
    "summary": "Anthropic introduced an Enterprise File System (EFS) feature to detect Claude AI misuse across multiple requests for zero-retention customers. The mechanism scans request patterns, flags anomalous usage, and preserves conversation data within the customer’s own cloud, preventing data leakage. Security teams should enable EFS, monitor flagged sessions, and maintain local data retention policies to mitigate potential misuse.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/anthropic-expands-enterprise-safeguards-for-detecting-ai-misuse/",
    "publishedAt": "2026-11-24T13:30:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-enhances-enterprise-ai-misuse-detection",
      "article-d206bbec",
      "d206bbec",
      "anthropic-enhances-enterprise-ai-misuse-detection-138f1d"
    ]
  },
  {
    "slug": "vmware-vcenter-hit-by-another-critical-9-8-rated-a-1d91cc69",
    "title": "VMware vCenter Hit by Another Critical 9.8-Rated Auth Bypass Flaw After Zero-Day Exploitation",
    "summary": "Broadcom has shipped patches to address 23 vulnerabilities impacting VMware ESX, vCenter, Workstation, Fusion, and Avi Load Balancer, including one critical bug that could be abused to bypass authentication. The critical vulnerability, tracked as CVE-2026-123903, is rated 9.8 out of 10.0 on the CVSS scoring system. It resides in the VMware Directory Service (\"vmdir\").",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/vmware-vcenter-hit-by-another-critical.html",
    "publishedAt": "2026-11-24T13:28:26.000Z",
    "cves": [
      "CVE-2026-123903"
    ],
    "additionalSources": [],
    "aliases": [
      "vmware-vcenter-hit-by-another-critical-9-8-rated-a",
      "article-1d91cc69",
      "1d91cc69",
      "vmware-vcenter-hit-by-another-critical-9-8-rated-a-222651",
      "vmware-vcenter-hit-by-another-critical-9-8-rated-auth-bypass"
    ]
  },
  {
    "slug": "codesys-visualization-vulnerabilities-pre-4-11-0-0-a5bd4129",
    "title": "Codesys Visualization Vulnerabilities Pre-4.11.0.0 Advisory",
    "summary": "The Canadian Centre for Cyber Security issued advisory AV26-1199, warning that Codesys Visualization versions prior to 4.11.0.0 contain multiple vulnerabilities. These flaws could allow attackers to gain unauthorized access or execute arbitrary code within the visualization component, potentially compromising industrial control systems. Users should review the provided links and apply available updates or workarounds as soon as patches are released.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/control-systems-codesys-security-advisory-av26-1199",
    "publishedAt": "2026-11-24T13:23:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "codesys-visualization-vulnerabilities-pre-4-11-0-0",
      "article-a5bd4129",
      "a5bd4129",
      "codesys-visualization-vulnerabilities-pre-4-11-0-0-3684ae",
      "codesys-visualization-vulnerabilities-pre-4-11-0-0-advisory"
    ]
  },
  {
    "slug": "rhsa-2026-102588-important-liblerc-security-update-0baf4d23",
    "title": "RHSA-2026:102588: Important: liblerc security update",
    "summary": "An update for liblerc is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102588",
    "publishedAt": "2026-11-24T13:18:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102588-important-liblerc-security-update",
      "article-0baf4d23",
      "0baf4d23",
      "rhsa-2026-102588-important-liblerc-security-update-2ee16a"
    ]
  },
  {
    "slug": "rhsa-2026-102302-critical-php-security-update-8009f33f",
    "title": "RHSA-2026:102302: Critical: php security update",
    "summary": "An update for php is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102302",
    "publishedAt": "2026-11-24T13:07:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102302-critical-php-security-update",
      "article-8009f33f",
      "8009f33f",
      "rhsa-2026-102302-critical-php-security-update-2ee161"
    ]
  },
  {
    "slug": "wiz-enhances-openai-daybreak-defense-with-security-a49c15f9",
    "title": "Wiz Enhances OpenAI Daybreak Defense with Security Intelligence",
    "summary": "Wiz Research announced integration of its cloud security intelligence into OpenAI's Daybreak Defense Factory, aiming to improve AI-driven vulnerability analysis. The integration leverages Wiz's data feeds to identify code remediation opportunities, but no specific vulnerability is disclosed. OpenAI can now apply Wiz insights to prioritize patching and reduce exposure to emerging threats.",
    "category": "General",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/wiz-openai-codex-integration",
    "publishedAt": "2026-11-24T13:00:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wiz-enhances-openai-daybreak-defense-with-security",
      "article-a49c15f9",
      "a49c15f9",
      "wiz-enhances-openai-daybreak-defense-with-security-6be72e",
      "wiz-enhances-openai-daybreak-defense-with-security-intellige"
    ]
  },
  {
    "slug": "mcdonald-s-japan-breach-reveals-purchase-and-locat-61cd47bb",
    "title": "McDonald’s Japan Breach Reveals Purchase and Location Data",
    "summary": "McDonald’s Japan announced a cybersecurity breach that exposed customers’ purchase histories and mobile device location data. The incident involved unauthorized access to the company’s customer database, potentially compromising sensitive personal information for a large user base. The company is investigating the breach and has notified affected customers, while security teams should monitor for phishing or credential misuse.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/japan-mcdonalds-cyberattack-breach",
    "publishedAt": "2026-11-24T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mcdonald-s-japan-breach-reveals-purchase-and-locat",
      "article-61cd47bb",
      "61cd47bb",
      "mcdonald-s-japan-breach-reveals-purchase-and-locat-3b6181",
      "mcdonald-s-japan-breach-reveals-purchase-and-location-data"
    ]
  },
  {
    "slug": "suse-advises-neuvector-stack-buffer-overflow-vulne-93af351c",
    "title": "SUSE Advises NeuVector Stack Buffer Overflow Vulnerabilities",
    "summary": "SUSE reports stack buffer overflow vulnerabilities in NeuVector dataplane affecting versions prior to 5.7.0, 5.5.6, and 5.6.5, triggered by DLP/WAF rule limits. The 2048-byte overflow can corrupt memory and cause denial-of-service, but no remote code execution or active exploitation has been confirmed. Users should apply the SUSE update or upgrade NeuVector to a newer release to mitigate the DoS risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/suse-linux-security-advisory-av26-1198",
    "publishedAt": "2026-11-24T12:59:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "suse-advises-neuvector-stack-buffer-overflow-vulne",
      "article-93af351c",
      "93af351c",
      "suse-advises-neuvector-stack-buffer-overflow-vulne-59d0d1",
      "suse-advises-neuvector-stack-buffer-overflow-vulnerabilities"
    ]
  },
  {
    "slug": "cve-2026-131914-enables-unauthenticated-asp-net-rc-3fcb8aae",
    "title": "CVE-2026-131914 Enables Unauthenticated ASP.NET RCE",
    "summary": "Attackers exploited CVE-2026-131914, a critical flaw in Idunno AntiCsrf used by ASP.NET WebForms, to trigger web redirects and confirm exploitation. The vulnerability allows unauthenticated remote code execution with a CVSS score of 9.8, and threat actors have actively leveraged it. Microsoft and vendors have released patches; administrators should update the AntiCsrf library and disable redirects until the fix is applied.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-asp-net-anticsrf-flaw-exploited/",
    "publishedAt": "2026-11-24T12:55:28.000Z",
    "cves": [
      "CVE-2026-131914"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-131914-enables-unauthenticated-asp-net-rc",
      "article-3fcb8aae",
      "3fcb8aae",
      "cve-2026-131914-enables-unauthenticated-asp-net-rc-139fe7",
      "cve-2026-131914-enables-unauthenticated-asp-net-rce"
    ]
  },
  {
    "slug": "shinyhunters-crew-reappears-on-new-leak-site-d710e72a",
    "title": "ShinyHunters Crew Reappears on New Leak Site",
    "summary": "Okta’s threat intelligence team uncovered the ShinyHunters-linked crew resurfacing on a leak site called 'Inception', continuing social engineering and credential-harvesting campaigns. Since March 2026, the O-UNC-053 cluster has targeted technology, healthcare, biotech, finance, insurance, entertainment, gaming, retail, transportation, hospitality, and legal sectors. Security teams should monitor credential-stealing phishing attempts and enforce multi-factor authentication to mitigate the crew’s exploitation.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/shinyhunters-inception-leak-site-okta/",
    "publishedAt": "2026-11-24T12:47:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "shinyhunters-crew-reappears-on-new-leak-site",
      "article-d710e72a",
      "d710e72a",
      "shinyhunters-crew-reappears-on-new-leak-site-72ea5a"
    ]
  },
  {
    "slug": "rhsa-2026-102524-important-buildah-conmon-containe-738d6a07",
    "title": "RHSA-2026:102524: Important: buildah, conmon, container-selinux, containernetworking-plugins, containers-common, criu, crun, fuse-overlayfs, oci-seccomp-bpf-hook, podman, runc, skopeo, and slirp4netns security, bug fix, and enhancement update",
    "summary": "An update for buildah, conmon, container-selinux, containernetworking-plugins, containers-common, criu, crun, fuse-overlayfs, oci-seccomp-bpf-hook, podman, runc, skopeo, and slirp4netns is now available for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102524",
    "publishedAt": "2026-11-24T12:41:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102524-important-buildah-conmon-containe",
      "article-738d6a07",
      "738d6a07",
      "rhsa-2026-102524-important-buildah-conmon-containe-2ee169",
      "rhsa-2026-102524-important-buildah-conmon-container-selinux-"
    ]
  },
  {
    "slug": "rhsa-2026-102526-important-container-tools-rhel8-s-9221ff20",
    "title": "RHSA-2026:102526: Important: container-tools:rhel8 security update",
    "summary": "An update for the container-tools:rhel8 module is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102526",
    "publishedAt": "2026-11-24T12:41:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102526-important-container-tools-rhel8-s",
      "article-9221ff20",
      "9221ff20",
      "rhsa-2026-102526-important-container-tools-rhel8-s-2ee169",
      "rhsa-2026-102526-important-container-tools-rhel8-security-up"
    ]
  },
  {
    "slug": "rhsa-2026-102534-moderate-ruby-2-5-security-update-de3bf5ee",
    "title": "RHSA-2026:102534: Moderate: ruby:2.5 security update",
    "summary": "An update for the ruby:2.5 module is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102534",
    "publishedAt": "2026-11-24T12:35:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102534-moderate-ruby-2-5-security-update",
      "article-de3bf5ee",
      "de3bf5ee",
      "rhsa-2026-102534-moderate-ruby-2-5-security-update-2ee169"
    ]
  },
  {
    "slug": "bedrock-data-launches-intent-aware-ai-agent-dlp-b146ea2c",
    "title": "Bedrock Data Launches Intent-Aware AI Agent DLP",
    "summary": "Bedrock Data launched Agent DLP, a runtime data loss prevention tool that infers user intent and evaluates AI agent actions against policy. The tool weighs intent and behavior, enabling continued AI agent use while protecting sensitive data across tool and LLM calls. It also supports off-the-shelf integrations and offers a policy enforcement framework for AI workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/bedrock-data-agent-dlp/",
    "publishedAt": "2026-11-24T12:34:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bedrock-data-launches-intent-aware-ai-agent-dlp",
      "article-b146ea2c",
      "b146ea2c",
      "bedrock-data-launches-intent-aware-ai-agent-dlp-114ac7"
    ]
  },
  {
    "slug": "elastic-deploys-ai-agents-to-triage-soc-alerts-4214ea31",
    "title": "Elastic Deploys AI Agents to Triage SOC Alerts",
    "summary": "Elastic Security 9.6 introduces AlertZero, AI agents that triage alerts, hunt threats, and tune detection rules. The release adds Linux ransomware protection, expands entity resolution, and adds 143 detection rules for AI agents and LLM platforms. AlertZero groups workers into four watches-triage, threat hunting, detection engineering, and others-to automate SOC backlog.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/elastic-security-9-6-features/",
    "publishedAt": "2026-11-24T12:27:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "elastic-deploys-ai-agents-to-triage-soc-alerts",
      "article-4214ea31",
      "4214ea31",
      "elastic-deploys-ai-agents-to-triage-soc-alerts-7db374"
    ]
  },
  {
    "slug": "red-hat-issues-thunderbird-update-for-important-vu-f9fe74d9",
    "title": "Red Hat Issues Thunderbird Update for Important Vulnerabilities",
    "summary": "Red Hat Enterprise Linux 8.6 receives a security update for Thunderbird, addressing several important vulnerabilities. The advisory references multiple CVEs with CVSS base scores, indicating potential remote code execution or privilege escalation if unpatched. Users should apply the update immediately to mitigate the risk, as the patch resolves all identified flaws.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102921",
    "publishedAt": "2026-11-24T12:23:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-thunderbird-update-for-important-vu",
      "article-f9fe74d9",
      "f9fe74d9",
      "red-hat-issues-thunderbird-update-for-important-vu-2ee178",
      "red-hat-issues-thunderbird-update-for-important-vulnerabilit"
    ]
  },
  {
    "slug": "rhel-10-cifs-utils-update-released-ff7b7890",
    "title": "RHEL 10 cifs-utils Update Released",
    "summary": "Red Hat released a security update for cifs-utils on RHEL 10, fixing vulnerabilities that could enable remote code execution via SMB. Each flaw carries a CVSS base score, but the advisory lists no specific CVE identifiers. Apply the patch through standard RHEL update channels immediately; no configuration changes are required.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102887",
    "publishedAt": "2026-11-24T12:12:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel-10-cifs-utils-update-released",
      "article-ff7b7890",
      "ff7b7890",
      "rhel-10-cifs-utils-update-released-2ee175"
    ]
  },
  {
    "slug": "red-hat-issues-critical-ruby-3-3-security-update-bc4fc911",
    "title": "Red Hat Issues Critical Ruby 3.3 Security Update",
    "summary": "Red Hat released a critical security update for the ruby:3.3 module on RHEL9, addressing multiple vulnerabilities. The update mitigates high-severity flaws, each with a CVSS base score detailed in the referenced CVE links, though no active exploitation has been reported. Administrators should apply the ruby:3.3 update immediately to prevent potential denial-of-service or privilege escalation attacks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102869",
    "publishedAt": "2026-11-24T12:10:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-ruby-3-3-security-update",
      "article-bc4fc911",
      "bc4fc911",
      "red-hat-issues-critical-ruby-3-3-security-update-2ee175"
    ]
  },
  {
    "slug": "red-hat-issues-important-libreoffice-security-upda-180d6662",
    "title": "Red Hat Issues Important LibreOffice Security Update",
    "summary": "Red Hat released an important security update for LibreOffice on RHEL9.6 Extended Update Support, addressing several vulnerabilities. Each flaw carries a CVSS base score listed in the CVE references, though no active exploitation has been documented. Users should install the LibreOffice update promptly to mitigate potential denial-of-service or privilege escalation risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102888",
    "publishedAt": "2026-11-24T12:10:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-libreoffice-security-upda",
      "article-180d6662",
      "180d6662",
      "red-hat-issues-important-libreoffice-security-upda-2ee175",
      "red-hat-issues-important-libreoffice-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-102905-important-container-tools-rhel8-s-60bcb6ec",
    "title": "RHSA-2026:102905: Important: container-tools:rhel8 security update",
    "summary": "An update for the container-tools:rhel8 module is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102905",
    "publishedAt": "2026-11-24T12:08:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102905-important-container-tools-rhel8-s",
      "article-60bcb6ec",
      "60bcb6ec",
      "rhsa-2026-102905-important-container-tools-rhel8-s-2ee178",
      "rhsa-2026-102905-important-container-tools-rhel8-security-up"
    ]
  },
  {
    "slug": "infrastructure-vulnerabilities-highlight-systemic-3b11aa68",
    "title": "Infrastructure Vulnerabilities Highlight Systemic Fragility",
    "summary": "Schneier's essay examines how America’s critical infrastructure remains fragile due to aging systems, piecemeal patching, and hobbyist maintenance. The author argues that centralization and incremental upgrades create a single point of failure, causing widespread outages when components fail. The piece calls for systemic investment and coordinated security practices to reduce the risk of cascading infrastructure breakdowns.",
    "category": "General",
    "severity": "LOW",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/11/we-get-the-infrastructure-we-pay-for.html",
    "publishedAt": "2026-11-24T12:06:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "infrastructure-vulnerabilities-highlight-systemic",
      "article-3b11aa68",
      "3b11aa68",
      "infrastructure-vulnerabilities-highlight-systemic-6dbeac",
      "infrastructure-vulnerabilities-highlight-systemic-fragility"
    ]
  },
  {
    "slug": "azure-api-management-flaw-used-to-steal-credential-770aa984",
    "title": "Azure API Management flaw used to steal credentials",
    "summary": "Microsoft warned that a vulnerability in Azure API Management (APIM) was exploited to exfiltrate credentials from customers’ instances, affecting Norwegian energy firms and others. The flaw in APIM Classic tiers lets attackers bypass authentication and retrieve stored secrets, potentially compromising downstream services. Microsoft recommends applying the latest APIM patch, disabling Classic tiers, and rotating exposed credentials immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/azure-apim-vulnerability-credential-theft/",
    "publishedAt": "2026-11-24T12:04:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "azure-api-management-flaw-used-to-steal-credential",
      "article-770aa984",
      "770aa984",
      "azure-api-management-flaw-used-to-steal-credential-3bd7d5",
      "azure-api-management-flaw-used-to-steal-credentials"
    ]
  },
  {
    "slug": "google-researcher-exposes-net-bit-flip-code-integr-9d93c4f8",
    "title": "Google Researcher Exposes .NET Bit-Flip Code Integrity Bypass",
    "summary": "A Google Project Zero researcher demonstrated that a single bit flip in .NET files bypasses Windows code integrity, allowing local attackers to run untrusted code. The flaw also bypassed VirtualBox process hardening on Windows and is tracked as CVE-2026-87268, exposing local privilege escalation. Administrators should update .NET Framework to the latest patch or apply vendor mitigations to prevent exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/google-researcher-shows-how-single-bit.html",
    "publishedAt": "2026-11-24T12:02:00.000Z",
    "cves": [
      "CVE-2026-87268"
    ],
    "additionalSources": [],
    "aliases": [
      "google-researcher-exposes-net-bit-flip-code-integr",
      "article-9d93c4f8",
      "9d93c4f8",
      "google-researcher-exposes-net-bit-flip-code-integr-54b258",
      "google-researcher-exposes-net-bit-flip-code-integrity-bypass"
    ]
  },
  {
    "slug": "cisa-adds-three-vulnerabilities-to-kev-catalog-d6d46ce7",
    "title": "CISA Adds Three Vulnerabilities to KEV Catalog",
    "summary": "CISA added three vulnerabilities-CVE-2026-131914, CVE-2026-132165, and CVE-2026-132224-to its Known Exploited Vulnerabilities catalog after confirming active exploitation. The update signals that these flaws, including Idunno AntiCsrf deserialization, Drupal Core RCE, and Optimizely state data control, pose significant risks to federal agencies. Federal agencies must prioritize rapid remediation per Binding Operational Directive 26-04, applying vendor patches or workarounds to mitigate high-risk vulnerabilities.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/11/24/cisa-adds-three-known-exploited-vulnerabilities-catalog",
    "publishedAt": "2026-11-24T12:00:00.000Z",
    "cves": [
      "CVE-2026-131914",
      "CVE-2026-132165",
      "CVE-2026-132224"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-three-vulnerabilities-to-kev-catalog",
      "article-d6d46ce7",
      "d6d46ce7",
      "cisa-adds-three-vulnerabilities-to-kev-catalog-2a7c77"
    ]
  },
  {
    "slug": "schneider-electric-ecostruxure-rapsody-vulnerabili-85289464",
    "title": "Schneider Electric EcoStruxure Rapsody Vulnerability",
    "summary": "Schneider Electric reported a memory corruption flaw in EcoStruxure Power Build Rapsody that can cause heap or stack buffer overflows. The CVSS 5.3 vulnerability permits local attackers to trigger memory corruption and potentially execute arbitrary code if not patched. Affected releases include generic/CVSS Vendor Equipment v3 5.3; users should apply vendor patches or workarounds promptly.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-328-02",
    "publishedAt": "2026-11-24T12:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "schneider-electric-ecostruxure-rapsody-vulnerabili",
      "article-85289464",
      "85289464",
      "schneider-electric-ecostruxure-rapsody-vulnerabili-41abb8",
      "schneider-electric-ecostruxure-rapsody-vulnerability"
    ]
  },
  {
    "slug": "danfoss-ak-sm-8xxa-vulnerability-enables-remote-co-f03778b7",
    "title": "Danfoss AK-SM 8xxA Vulnerability Enables Remote Code Execution",
    "summary": "Danfoss AK-SM 8xxA Series suffers a stack-based buffer overflow in an unauthenticated CGI handler that lets attackers send crafted HTTP/S POST requests. CVE-2026-129713 scores CVSS 9.8, causing memory corruption, webserver restart, and potentially arbitrary code execution with webserver privileges. Affected firmware versions are listed by Danfoss; users must apply the vendor patch or upgrade firmware immediately.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-328-03",
    "publishedAt": "2026-11-24T12:00:00.000Z",
    "cves": [
      "CVE-2026-129713"
    ],
    "additionalSources": [],
    "aliases": [
      "danfoss-ak-sm-8xxa-vulnerability-enables-remote-co",
      "article-f03778b7",
      "f03778b7",
      "danfoss-ak-sm-8xxa-vulnerability-enables-remote-co-41abb8",
      "danfoss-ak-sm-8xxa-vulnerability-enables-remote-code-executi"
    ]
  },
  {
    "slug": "automationdirect-c-more-ea9-programming-software-4e483033",
    "title": "AutomationDirect C-More EA9 Programming Software",
    "summary": "The following versions of AutomationDirect C-More EA9 Programming Software are affected: C-More EA9 Programming Software CVSS Vendor Equipment v3 7.8 AutomationDirect C-More EA9 Programming Software 1 Vulnerability Heap-based Buffer Overflow . An attacker can exploit this vulnerability by convincing a user to open a malicious project file delivered through common distribution channels such as email, file sharing, or removable media. The flaw is tracked as CVE-2026-127280.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-328-01",
    "publishedAt": "2026-11-24T12:00:00.000Z",
    "cves": [
      "CVE-2026-127280"
    ],
    "additionalSources": [],
    "aliases": [
      "automationdirect-c-more-ea9-programming-software",
      "article-4e483033",
      "4e483033",
      "automationdirect-c-more-ea9-programming-software-41abb8"
    ]
  },
  {
    "slug": "kepco-data-breach-exposes-1-5-million-personal-rec-8eae557f",
    "title": "KEPCO Data Breach Exposes 1.5 Million Personal Records",
    "summary": "Hackers accessed KEPCO’s customer portal and supplier relationship management platform, exfiltrating personal data of approximately 1.5 million users. The breach involved names, contact details, and possibly financial identifiers, though the full data scope is unclear. KEPCO has not yet released a detailed incident response plan; affected parties should monitor for identity theft and consider credit monitoring services.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/1-5-million-impacted-by-data-breach-at-south-korean-electric-company-kepco/",
    "publishedAt": "2026-11-24T11:50:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kepco-data-breach-exposes-1-5-million-personal-rec",
      "article-8eae557f",
      "8eae557f",
      "kepco-data-breach-exposes-1-5-million-personal-rec-c32c46",
      "kepco-data-breach-exposes-1-5-million-personal-records"
    ]
  },
  {
    "slug": "rhsa-2026-102920-important-thunderbird-security-bu-5e6b18ed",
    "title": "RHSA-2026:102920: Important: thunderbird security, bug fix, and enhancement update",
    "summary": "An update for thunderbird is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102920",
    "publishedAt": "2026-11-24T11:50:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102920-important-thunderbird-security-bu",
      "article-5e6b18ed",
      "5e6b18ed",
      "rhsa-2026-102920-important-thunderbird-security-bu-2ee178",
      "rhsa-2026-102920-important-thunderbird-security-bug-fix-and-"
    ]
  },
  {
    "slug": "red-hat-releases-critical-ruby-3-3-security-update-9eacbea6",
    "title": "Red Hat Releases Critical Ruby 3.3 Security Update",
    "summary": "Red Hat released a critical update for the ruby:3.3 module on Enterprise Linux 8, fixing several security bugs. The patch addresses high-severity flaws that could enable remote code execution or privilege escalation, with CVSS scores up to 9.2. Administrators should apply RHSA-2026:102909 immediately and confirm the Ruby runtime is at the patched version.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102909",
    "publishedAt": "2026-11-24T11:49:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-ruby-3-3-security-update",
      "article-9eacbea6",
      "9eacbea6",
      "red-hat-releases-critical-ruby-3-3-security-update-2ee178"
    ]
  },
  {
    "slug": "eviltokens-phishing-persists-after-microsoft-taked-12d2a0bf",
    "title": "EvilTokens Phishing Persists After Microsoft Takedown",
    "summary": "Despite Microsoft shutting down the EvilTokens phishing-as-a-service kit, attackers continue to deploy new phishing hosts targeting Microsoft 365 accounts. The campaign exploits social engineering to trick users into revealing credentials, potentially granting attackers full access to corporate Microsoft 365 environments. Security teams should enforce multi-factor authentication, monitor for anomalous sign-ins, and educate users about phishing indicators.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/eviltokens-phishing/",
    "publishedAt": "2026-11-24T11:36:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "eviltokens-phishing-persists-after-microsoft-taked",
      "article-12d2a0bf",
      "12d2a0bf",
      "eviltokens-phishing-persists-after-microsoft-taked-686bbb",
      "eviltokens-phishing-persists-after-microsoft-takedown"
    ]
  },
  {
    "slug": "libreoffice-vulnerabilities-patched-in-rhel-9-4-sa-f14f6a42",
    "title": "LibreOffice Vulnerabilities Patched in RHEL 9.4 SAP",
    "summary": "Red Hat released a security update for LibreOffice on RHEL 9.4 Update Services for SAP Solutions, addressing multiple vulnerabilities. The update carries an Important impact rating, with CVSS base scores available via CVE references, but no active exploitation has been reported. Administrators should apply the latest LibreOffice package to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102889",
    "publishedAt": "2026-11-24T11:29:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "libreoffice-vulnerabilities-patched-in-rhel-9-4-sa",
      "article-f14f6a42",
      "f14f6a42",
      "libreoffice-vulnerabilities-patched-in-rhel-9-4-sa-2ee175",
      "libreoffice-vulnerabilities-patched-in-rhel-9-4-sap"
    ]
  },
  {
    "slug": "alpine-ssh-authentication-bypass-via-257-byte-pass-47527dbf",
    "title": "Alpine SSH Authentication Bypass via 257-Byte Password",
    "summary": "OpenSSH flaw CVE-2026-123158 lets remote attackers authenticate to Alpine Linux accounts using musl, no PAM, and password logins, without a valid password or SSH key. SSHole exploits a parsing error in password authentication, enabling forged sessions and unauthorized access that could lead to lateral movement.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-bypass-alpine-linux-ssh-authentication/",
    "publishedAt": "2026-11-24T11:25:20.000Z",
    "cves": [
      "CVE-2026-123158"
    ],
    "additionalSources": [],
    "aliases": [
      "alpine-ssh-authentication-bypass-via-257-byte-pass",
      "article-47527dbf",
      "47527dbf",
      "alpine-ssh-authentication-bypass-via-257-byte-pass-b3b708",
      "alpine-ssh-authentication-bypass-via-257-byte-password"
    ]
  },
  {
    "slug": "red-hat-issues-critical-update-for-ruby-4-0-dc67e712",
    "title": "Red Hat Issues Critical Update for ruby:4.0",
    "summary": "A critical flaw in the ruby:4.0 module for Red Hat Enterprise Linux 9 triggered an urgent security update. The vulnerability, rated with a high CVSS score, permits remote code execution via the Ruby interpreter and is linked to several CVEs. Red Hat released the patch in RHSA-2026-102883; users must apply it immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102883",
    "publishedAt": "2026-11-24T11:24:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-update-for-ruby-4-0",
      "article-dc67e712",
      "dc67e712",
      "red-hat-issues-critical-update-for-ruby-4-0-2ee175"
    ]
  },
  {
    "slug": "researchers-plant-secrets-in-ai-prompts-attackers-2a9c27cc",
    "title": "Researchers Plant Secrets in AI Prompts; Attackers Discover Them",
    "summary": "Researchers embedded Amazon access keys into AI prompt templates, which attackers later located and tested against AWS accounts. The key leakage exploited prompt injection, enabling attackers to validate credentials in real time; no confirmed account takeover was reported. Affected organizations should rotate exposed keys, audit prompt usage, and enforce strict secrets management to mitigate future leaks.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/ai/2026/11/researchers-planted-secrets-in-ai-prompts-attackers-found-them",
    "publishedAt": "2026-11-24T11:21:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "researchers-plant-secrets-in-ai-prompts-attackers",
      "article-2a9c27cc",
      "2a9c27cc",
      "researchers-plant-secrets-in-ai-prompts-attackers-452144",
      "researchers-plant-secrets-in-ai-prompts-attackers-discover-t"
    ]
  },
  {
    "slug": "rhsa-2026-102908-important-libxi-security-update-7dbf3394",
    "title": "RHSA-2026:102908: Important: libXi security update",
    "summary": "An update for libXi is now available for Red Hat Enterprise Linux 7 Extended Lifecycle Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102908",
    "publishedAt": "2026-11-24T11:17:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102908-important-libxi-security-update",
      "article-7dbf3394",
      "7dbf3394",
      "rhsa-2026-102908-important-libxi-security-update-2ee178"
    ]
  },
  {
    "slug": "rhsa-2026-102516-moderate-firewalld-security-updat-333302f8",
    "title": "RHSA-2026:102516: Moderate: firewalld security update",
    "summary": "An update for firewalld is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102516",
    "publishedAt": "2026-11-24T11:16:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102516-moderate-firewalld-security-updat",
      "article-333302f8",
      "333302f8",
      "rhsa-2026-102516-moderate-firewalld-security-updat-2ee169",
      "rhsa-2026-102516-moderate-firewalld-security-update"
    ]
  },
  {
    "slug": "red-hat-releases-important-update-for-container-to-8b2b6753",
    "title": "Red Hat Releases Important Update for Container Tool Suite",
    "summary": "Red Hat issued a security update for buildah, conmon, containernetworking-plugins, containers-common, fuse-overlayfs, gvisor-tap-vsock, oci-seccomp-bpf-hook, podman, runc, skopeo, and slirp4netns on Enterprise Linux 9.6 EUS. The update addresses multiple vulnerabilities with CVSS scores in the Important range, mitigating potential container escape or privilege escalation risks. Administrators should apply the RHSA-2026:102529 package updates immediately to secure container runtimes and associated networking components.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102529",
    "publishedAt": "2026-11-24T11:15:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-important-update-for-container-to",
      "article-8b2b6753",
      "8b2b6753",
      "red-hat-releases-important-update-for-container-to-2ee169",
      "red-hat-releases-important-update-for-container-tool-suite"
    ]
  },
  {
    "slug": "red-hat-releases-cifs-utils-patch-for-rhel-9-8-79714d74",
    "title": "Red Hat Releases cifs-utils Patch for RHEL 9.8",
    "summary": "Red Hat issued a cifs-utils update for RHEL 9.8 EUS, fixing vulnerabilities that could enable remote code execution via SMB. Each flaw is linked to a CVE and carries a CVSS base score, with Red Hat rating the issue as Important. Apply the patch or upgrade to the latest RHEL 9.8 release to eliminate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102886",
    "publishedAt": "2026-11-24T10:51:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-cifs-utils-patch-for-rhel-9-8",
      "article-79714d74",
      "79714d74",
      "red-hat-releases-cifs-utils-patch-for-rhel-9-8-2ee175"
    ]
  },
  {
    "slug": "mfa-bypassed-via-phone-scams-targeting-microsoft-3-53df92e4",
    "title": "MFA Bypassed via Phone Scams Targeting Microsoft 365",
    "summary": "Cybercriminals posing as corporate IT support trick employees into revealing Microsoft 365 credentials, bypassing MFA to access OneDrive and SharePoint. They exfiltrated emails and files from compromised accounts and demanded ransom via Teams or email, exploiting social engineering. Teams should enforce verification protocols, monitor anomalous activity, and restrict external sharing to mitigate similar attacks.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/bypass-mfa-through-phone-scams/",
    "publishedAt": "2026-11-24T10:48:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mfa-bypassed-via-phone-scams-targeting-microsoft-3",
      "article-53df92e4",
      "53df92e4",
      "mfa-bypassed-via-phone-scams-targeting-microsoft-3-6f7ef4",
      "mfa-bypassed-via-phone-scams-targeting-microsoft-365"
    ]
  },
  {
    "slug": "microsoft-patches-azure-api-management-flaw-target-108a246b",
    "title": "Microsoft Patches Azure API Management Flaw Targeting Secrets",
    "summary": "Microsoft discovered a flaw in Azure API Management Classic that allowed attackers to search for access tokens and secrets. The vulnerability, enabling credential theft and unauthorized API access, was reported by Norway's National Security Authority and is actively exploited. Microsoft released a patch in the latest update; customers should apply it immediately and audit API permissions to mitigate risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/microsoft-fixes-azure-api-management.html",
    "publishedAt": "2026-11-24T10:44:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-patches-azure-api-management-flaw-target",
      "article-108a246b",
      "108a246b",
      "microsoft-patches-azure-api-management-flaw-target-50ec5f",
      "microsoft-patches-azure-api-management-flaw-targeting-secret"
    ]
  },
  {
    "slug": "rhsa-2026-102514-important-buildah-conmon-containe-c65b1cfb",
    "title": "RHSA-2026:102514: Important: buildah, conmon, container-selinux, containers-common, criu, fuse-overlayfs, gvisor-tap-vsock, oci-seccomp-bpf-hook, podman, skopeo, and slirp4netns security, bug fix, and enhancement update",
    "summary": "An update for buildah, conmon, container-selinux, containers-common, criu, fuse-overlayfs, gvisor-tap-vsock, oci-seccomp-bpf-hook, podman, skopeo, and slirp4netns is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102514",
    "publishedAt": "2026-11-24T10:44:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102514-important-buildah-conmon-containe",
      "article-c65b1cfb",
      "c65b1cfb",
      "rhsa-2026-102514-important-buildah-conmon-containe-2ee169",
      "rhsa-2026-102514-important-buildah-conmon-container-selinux-"
    ]
  },
  {
    "slug": "elecbrakes-bluetooth-flaws-enable-forced-trailer-b-fa27c92f",
    "title": "Elecbrakes Bluetooth Flaws Enable Forced Trailer Braking",
    "summary": "Critical Bluetooth vulnerabilities in Elecbrakes trailer controllers allow nearby attackers to force braking, potentially causing accidents. The flaw exploits insecure Bluetooth pairing and command authentication, enabling remote manipulation of braking systems without user interaction. Manufacturers should update firmware to patch the vulnerabilities and disable unused Bluetooth interfaces to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/elecbrakes-bluetooth-vulnerabilities-expose-trailers-to-forced-braking/",
    "publishedAt": "2026-11-24T10:44:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "elecbrakes-bluetooth-flaws-enable-forced-trailer-b",
      "article-fa27c92f",
      "fa27c92f",
      "elecbrakes-bluetooth-flaws-enable-forced-trailer-b-95afdd",
      "elecbrakes-bluetooth-flaws-enable-forced-trailer-braking"
    ]
  },
  {
    "slug": "rhoso-18-0-24-critical-security-update-released-0032b6c9",
    "title": "RHOSO 18.0.24 Critical Security Update Released",
    "summary": "Red Hat OpenStack Services on OpenShift (RHOSO) 18.0 RPMs have been released with a critical security impact, addressing multiple vulnerabilities affecting the platform. Each vulnerability is linked to a CVE and assigned a CVSS base score, but no specific CVE identifiers are disclosed in the advisory. Administrators should install the updated RPMs immediately to mitigate the identified security risks.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102906",
    "publishedAt": "2026-11-24T10:43:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhoso-18-0-24-critical-security-update-released",
      "article-0032b6c9",
      "0032b6c9",
      "rhoso-18-0-24-critical-security-update-released-2ee178"
    ]
  },
  {
    "slug": "red-hat-issues-container-tools-rhel8-security-upda-2c96d487",
    "title": "Red Hat Issues container-tools:rhel8 Security Update for RHEL 8.4",
    "summary": "Red Hat released a security update for the container-tools:rhel8 module on RHEL 8.4 AMCS and EUS LLA, addressing multiple vulnerabilities. The update contains fixes for issues with CVSS scores listed in the CVE references, but no active exploitation has been reported. Red Hat recommends applying the patch through the standard RHEL update channels to mitigate potential remote code execution.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102902",
    "publishedAt": "2026-11-24T10:41:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-container-tools-rhel8-security-upda",
      "article-2c96d487",
      "2c96d487",
      "red-hat-issues-container-tools-rhel8-security-upda-2ee178",
      "red-hat-issues-container-tools-rhel8-security-update-for-rhe"
    ]
  },
  {
    "slug": "peninsula-energy-halts-trading-after-mine-cyber-in-058b9715",
    "title": "Peninsula Energy Halts Trading After Mine Cyber Incident",
    "summary": "Peninsula Energy reported a cybersecurity incident at its Wyoming uranium project, temporarily disrupting operations and prompting a trading halt. The breach details remain undisclosed, but the company indicated that critical operational systems were impacted, raising concerns over supply chain continuity. Peninsula Energy is coordinating with cybersecurity teams and regulators to assess the incident and resume trading.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/peninsula-energy-halts-trading-after-cyber-incident-hits-us-uranium-mine/",
    "publishedAt": "2026-11-24T10:35:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "peninsula-energy-halts-trading-after-mine-cyber-in",
      "article-058b9715",
      "058b9715",
      "peninsula-energy-halts-trading-after-mine-cyber-in-2f1a40",
      "peninsula-energy-halts-trading-after-mine-cyber-incident"
    ]
  },
  {
    "slug": "cisa-flags-exploited-vmware-sap-cisco-apache-flaws-bca0d7dc",
    "title": "CISA Flags Exploited VMware, SAP, Cisco, Apache Flaws",
    "summary": "CISA added four exploited vulnerabilities affecting VMware vCenter, SAP NetWeaver, Cisco Expressway, and Apache Roller to its KEV catalog. All four flaws were actively exploited in the wild, prompting CISA to urge federal civilian agencies to patch by November 23. Administrators should apply vendor patches or workarounds immediately to mitigate the exploitation risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/cisa-warns-vmware-sap-cisco-apache-roller-flaws-exploited/",
    "publishedAt": "2026-11-24T10:00:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-flags-exploited-vmware-sap-cisco-apache-flaws",
      "article-bca0d7dc",
      "bca0d7dc",
      "cisa-flags-exploited-vmware-sap-cisco-apache-flaws-61fd44"
    ]
  },
  {
    "slug": "rhsa-2026-102880-important-imagemagick-security-up-37f0bc25",
    "title": "RHSA-2026:102880: Important: ImageMagick security update",
    "summary": "An update for ImageMagick is now available for Red Hat Enterprise Linux 7 Extended Lifecycle Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102880",
    "publishedAt": "2026-11-24T09:50:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102880-important-imagemagick-security-up",
      "article-37f0bc25",
      "37f0bc25",
      "rhsa-2026-102880-important-imagemagick-security-up-2ee175",
      "rhsa-2026-102880-important-imagemagick-security-update"
    ]
  },
  {
    "slug": "chrome-vulnerability-lets-code-run-outside-sandbox-1fca16de",
    "title": "Chrome Vulnerability Lets Code Run Outside Sandbox",
    "summary": "Google Chrome's CVE-2026-134401 flaw permits remote attackers to execute code outside the browser sandbox, potentially compromising the host system. The vulnerability arises from a memory corruption bug in the rendering engine, enabling arbitrary code execution without user interaction. Google released a stable update for Windows, macOS, and Linux; users should install the patch within the next few days to mitigate.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-google-chrome-flaw/",
    "publishedAt": "2026-11-24T09:37:46.000Z",
    "cves": [
      "CVE-2026-134401"
    ],
    "additionalSources": [],
    "aliases": [
      "chrome-vulnerability-lets-code-run-outside-sandbox",
      "article-1fca16de",
      "1fca16de",
      "chrome-vulnerability-lets-code-run-outside-sandbox-5c3d42"
    ]
  },
  {
    "slug": "globetopper-faces-up-to-2-5-million-in-lost-revenu-cf27e5da",
    "title": "GlobeTopper faces up to $2.5 million in lost revenue after hackers steal $70,000 in gift cards",
    "summary": "According to a filing with the U.S. Securities and Exchange Commission (SEC), parent company iQSTEL said GlobeTopper detected the intrusion on October 22 and took the platform offline the next morning after spotting further unauthorized activity.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/globetopper-breach-gift-cards/",
    "publishedAt": "2026-11-24T09:33:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "globetopper-faces-up-to-2-5-million-in-lost-revenu",
      "article-cf27e5da",
      "cf27e5da",
      "globetopper-faces-up-to-2-5-million-in-lost-revenu-225ebb",
      "globetopper-faces-up-to-2-5-million-in-lost-revenue-after-ha"
    ]
  },
  {
    "slug": "suzlon-reports-cyber-incident-no-impact-on-critica-b97d31b8",
    "title": "Suzlon Reports Cyber Incident, No Impact on Critical Systems",
    "summary": "Suzlon Energy disclosed a cyber incident on November 23, 2026, claiming no disruption to its wind turbine control or business-critical applications. The company activated incident response procedures, limited potential impact, and notified Indian regulatory authorities, indicating containment of the event. Stakeholders should review Suzlon’s incident response documentation and ensure continued monitoring of operational technology networks.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/suzlon-energy-cyberattack/",
    "publishedAt": "2026-11-24T09:28:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "suzlon-reports-cyber-incident-no-impact-on-critica",
      "article-b97d31b8",
      "b97d31b8",
      "suzlon-reports-cyber-incident-no-impact-on-critica-54a08c",
      "suzlon-reports-cyber-incident-no-impact-on-critical-systems"
    ]
  },
  {
    "slug": "anthropic-launches-claude-ship-for-github-pr-revie-2d6b3709",
    "title": "Anthropic Launches Claude Ship for GitHub PR Review",
    "summary": "Anthropic released Claude Ship in beta, letting Claude Code review GitHub pull requests, push fixes, and approve changes when policy allows. The tool does not merge code automatically; repository permissions and branch rules still govern integration. Security teams can use Claude Ship to automate reviews, but must enforce branch protection and review policies to retain control.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/claude-that-review-pull-requests-work-fixes-and-approves-it/",
    "publishedAt": "2026-11-24T09:21:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-launches-claude-ship-for-github-pr-revie",
      "article-2d6b3709",
      "2d6b3709",
      "anthropic-launches-claude-ship-for-github-pr-revie-3189c6",
      "anthropic-launches-claude-ship-for-github-pr-review"
    ]
  },
  {
    "slug": "windows-remote-access-api-vulnerability-enables-sy-0927961f",
    "title": "Windows Remote Access API Vulnerability Enables SYSTEM Privilege Escalation",
    "summary": "A flaw in the Windows Remote Access API lets an attacker with limited local access run code with SYSTEM privileges. Microsoft assigned CVE-2026-119853 a CVSS score of 7.8 and rated the issue Important, but no active exploitation has been reported. Microsoft released a patch on Patch Tuesday; teams should apply it immediately via Windows Update or WSUS.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/windows-remote-access-api-flaw/",
    "publishedAt": "2026-11-24T09:12:12.000Z",
    "cves": [
      "CVE-2026-119853"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-remote-access-api-vulnerability-enables-sy",
      "article-0927961f",
      "0927961f",
      "windows-remote-access-api-vulnerability-enables-sy-10397a",
      "windows-remote-access-api-vulnerability-enables-system-privi"
    ]
  },
  {
    "slug": "rhsa-2026-102854-critical-ruby-security-update-77e427ff",
    "title": "RHSA-2026:102854: Critical: ruby security update",
    "summary": "An update for ruby is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102854",
    "publishedAt": "2026-11-24T09:09:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102854-critical-ruby-security-update",
      "article-77e427ff",
      "77e427ff",
      "rhsa-2026-102854-critical-ruby-security-update-2ee175"
    ]
  },
  {
    "slug": "php-critical-security-update-for-rhel-9-4-sap-00df2f33",
    "title": "PHP Critical Security Update for RHEL 9.4 SAP",
    "summary": "Red Hat released a critical PHP security update for RHEL 9.4 Update Services for SAP Solutions, addressing multiple vulnerabilities that could allow remote code execution. Each vulnerability is linked to a CVE and assigned a CVSS base score, but specific CVE identifiers are not disclosed in the advisory.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102855",
    "publishedAt": "2026-11-24T09:08:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php-critical-security-update-for-rhel-9-4-sap",
      "article-00df2f33",
      "00df2f33",
      "php-critical-security-update-for-rhel-9-4-sap-2ee175"
    ]
  },
  {
    "slug": "anthropic-launches-claude-ship-for-ai-code-review-889e1e66",
    "title": "Anthropic Launches Claude Ship for AI Code Review",
    "summary": "Anthropic released Claude Ship, a beta AI suite that reviews pull requests, fixes issues, and approves changes per team policies. It merges code review, automated fixes, and policy enforcement to speed development while preserving quality. Deploying Claude Ship into CI/CD pipelines lets teams set approval thresholds and monitor false positives for safe integration.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/anthropic-claude-ship-beta/",
    "publishedAt": "2026-11-24T09:02:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-launches-claude-ship-for-ai-code-review",
      "article-889e1e66",
      "889e1e66",
      "anthropic-launches-claude-ship-for-ai-code-review-2420de"
    ]
  },
  {
    "slug": "nvidia-kernel-vulnerability-enables-hypervisor-out-031ac3d8",
    "title": "NVIDIA Kernel Vulnerability Enables Hypervisor Out-of-Bounds",
    "summary": "A local attacker with hypervisor access can exploit a missing Reverse Map Table check during IOMMU buffer access, enabling an out-of-bounds condition that may corrupt SEV-SNP guest memory. The flaw, CVE-2023-20585, is a local privilege escalation that could undermine guest isolation, with no public exploit yet. Ubuntu released kernel patches; administrators should update or backport the fix.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9192-1",
    "publishedAt": "2026-11-24T08:42:57.000Z",
    "cves": [
      "CVE-2023-20585"
    ],
    "additionalSources": [],
    "aliases": [
      "nvidia-kernel-vulnerability-enables-hypervisor-out",
      "article-031ac3d8",
      "031ac3d8",
      "nvidia-kernel-vulnerability-enables-hypervisor-out-7e7785",
      "nvidia-kernel-vulnerability-enables-hypervisor-out-of-bounds"
    ]
  },
  {
    "slug": "ubuntu-releases-kernel-patch-for-multiple-azure-vu-1657bc5f",
    "title": "Ubuntu Releases Kernel Patch for Multiple Azure Vulnerabilities",
    "summary": "Ubuntu released a kernel update that patches multiple Azure vulnerabilities across subsystems such as ARM64, S390, x86, Bluetooth, GPU, and network drivers. The flaws allow remote or local privilege escalation, enabling attackers to compromise system integrity and run arbitrary code on virtual machines. Admins should promptly apply the latest kernel update or backport the patches to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9191-1",
    "publishedAt": "2026-11-24T08:42:14.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Ubuntu Security Notices",
        "sourceUrl": "https://ubuntu.com/security/notices/USN-9168-4"
      }
    ],
    "aliases": [
      "ubuntu-releases-kernel-patch-for-multiple-azure-vu",
      "article-1657bc5f",
      "1657bc5f",
      "ubuntu-releases-kernel-patch-for-multiple-azure-vu-7e7789",
      "ubuntu-releases-kernel-patch-for-multiple-azure-vulnerabilit"
    ]
  },
  {
    "slug": "kernel-vulnerabilities-threaten-system-integrity-1ef945b8",
    "title": "Kernel Vulnerabilities Threaten System Integrity",
    "summary": "A range of kernel subsystems in Linux contain vulnerabilities that could enable attackers to compromise system integrity. The flaws affect architecture layers, device drivers, and file system components, posing a broad local privilege escalation risk. Ubuntu released kernel patches addressing these issues; administrators should update to the latest kernel or backport the fixes.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9190-1",
    "publishedAt": "2026-11-24T08:41:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kernel-vulnerabilities-threaten-system-integrity",
      "article-1ef945b8",
      "1ef945b8",
      "kernel-vulnerabilities-threaten-system-integrity-7e778c"
    ]
  },
  {
    "slug": "ubuntu-and-red-hat-patch-nvidia-kernel-vulnerabili-0701c793",
    "title": "Ubuntu and Red Hat Patch NVIDIA Kernel Vulnerabilities",
    "summary": "Ubuntu and Red Hat have released kernel updates to address multiple NVIDIA subsystem vulnerabilities affecting Linux systems. The flaws span device drivers, data paths, architecture modules, cryptographic APIs, and hardware interfaces, potentially enabling privilege escalation or data exfiltration. Administrators should apply the latest kernel patches immediately to mitigate risk, as no active exploitation has been reported.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9173-3",
    "publishedAt": "2026-11-24T08:41:02.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Ubuntu Security Notices",
        "sourceUrl": "https://ubuntu.com/security/notices/USN-9174-2"
      }
    ],
    "aliases": [
      "ubuntu-and-red-hat-patch-nvidia-kernel-vulnerabili",
      "article-0701c793",
      "0701c793",
      "ubuntu-and-red-hat-patch-nvidia-kernel-vulnerabili-7e786a",
      "ubuntu-and-red-hat-patch-nvidia-kernel-vulnerabilities"
    ]
  },
  {
    "slug": "linux-kernel-vulnerabilities-patched-64aff9b5",
    "title": "Linux Kernel Vulnerabilities Patched",
    "summary": "Multiple kernel vulnerabilities were identified across various subsystems, potentially allowing attackers to compromise affected Linux systems. The flaws affect stream parsing, architecture modules, drivers, Bluetooth, GPU, Hyper-V, network, and other hardware interfaces, yet no active exploitation has been reported. Red Hat and Ubuntu have issued kernel updates that patch these subsystems; administrators should install the latest kernel to mitigate risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9167-3",
    "publishedAt": "2026-11-24T08:40:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-vulnerabilities-patched",
      "article-64aff9b5",
      "64aff9b5",
      "linux-kernel-vulnerabilities-patched-7e78cf"
    ]
  },
  {
    "slug": "linux-kernel-vulnerabilities-patching-update-relea-28a515f1",
    "title": "Linux Kernel Vulnerabilities Patching Update Released",
    "summary": "The Linux kernel contains multiple vulnerabilities, including CVE-2026-99218, that could allow attackers to compromise affected systems. These flaws span cryptographic API, file system infrastructure, key management, io_uring, PID namespace, and tracing subsystems, potentially enabling privilege escalation or arbitrary code execution. Kernel maintainers have released an update patching all listed CVEs; administrators should apply the update promptly.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9165-2",
    "publishedAt": "2026-11-24T08:40:41.000Z",
    "cves": [
      "CVE-2026-99218"
    ],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-vulnerabilities-patching-update-relea",
      "article-28a515f1",
      "28a515f1",
      "linux-kernel-vulnerabilities-patching-update-relea-7e78d7",
      "linux-kernel-vulnerabilities-patching-update-released"
    ]
  },
  {
    "slug": "microsoft-uncovers-linux-kernel-vulnerabilities-in-7a22f5cf",
    "title": "Microsoft Uncovers Linux Kernel Vulnerabilities in Azure",
    "summary": "Microsoft identified multiple Linux kernel flaws in Azure that could allow attackers to compromise affected systems. The vulnerabilities affect IPv4 networking, Ethernet bridge, Netfilter, SCTP, and XFRM subsystems, and are catalogued as CVE-2026-64564, CVE-2026-98432, and CVE-2026-99999, potentially enabling remote code execution. Administrators should apply the latest kernel updates or install the provided patches to eliminate the exploitation vector.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9170-4",
    "publishedAt": "2026-11-24T08:40:41.000Z",
    "cves": [
      "CVE-2026-64564",
      "CVE-2026-98432",
      "CVE-2026-99999"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-uncovers-linux-kernel-vulnerabilities-in",
      "article-7a22f5cf",
      "7a22f5cf",
      "microsoft-uncovers-linux-kernel-vulnerabilities-in-7e7875",
      "microsoft-uncovers-linux-kernel-vulnerabilities-in-azure"
    ]
  },
  {
    "slug": "whmcs-sql-injection-exposes-customer-data-without-4b5a9c1c",
    "title": "WHMCS SQL Injection Exposes Customer Data Without Login",
    "summary": "A remote SQL injection flaw in WHMCS’s shopping cart lets unauthenticated attackers retrieve customer records and admin password hashes from the database. The flaw bypasses authentication, enabling data exfiltration without credentials; no public exploit is known, yet it could expose sensitive user data.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/whmcs-sql-injection-flaw-could-expose.html",
    "publishedAt": "2026-11-24T08:34:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "whmcs-sql-injection-exposes-customer-data-without",
      "article-4b5a9c1c",
      "4b5a9c1c",
      "whmcs-sql-injection-exposes-customer-data-without-5ef80c",
      "whmcs-sql-injection-exposes-customer-data-without-login"
    ]
  },
  {
    "slug": "microsoft-365-copilot-cve-2026-50691-enables-privi-350e8b5e",
    "title": "Microsoft 365 Copilot CVE-2026-50691 Enables Privilege Escalation",
    "summary": "Microsoft disclosed CVE-2026-50691, a critical flaw in Microsoft 365 Copilot that lets a low-privileged user elevate network permissions without user interaction. Scored 9.9 on CVSS 3.1, the bug exploits a logic error in Copilot’s permission model, enabling unauthorized access to protected resources. Microsoft urges customers to apply the November 19 patch via Microsoft Update or by updating the Copilot add-in.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsoft-365-copilot-flaw/",
    "publishedAt": "2026-11-24T08:28:18.000Z",
    "cves": [
      "CVE-2026-50691"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-365-copilot-cve-2026-50691-enables-privi",
      "article-350e8b5e",
      "350e8b5e",
      "microsoft-365-copilot-cve-2026-50691-enables-privi-da2520",
      "microsoft-365-copilot-cve-2026-50691-enables-privilege-escal"
    ]
  },
  {
    "slug": "rhsa-2026-102845-important-cockpit-security-update-99557e81",
    "title": "RHSA-2026:102845: Important: cockpit security update",
    "summary": "An update for cockpit is now available for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102845",
    "publishedAt": "2026-11-24T08:14:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102845-important-cockpit-security-update",
      "article-99557e81",
      "99557e81",
      "rhsa-2026-102845-important-cockpit-security-update-2ee175"
    ]
  },
  {
    "slug": "rhsa-2026-102841-important-webkit2gtk3-security-up-2ea55ced",
    "title": "RHSA-2026:102841: Important: webkit2gtk3 security update",
    "summary": "An update for webkit2gtk3 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102841",
    "publishedAt": "2026-11-24T08:11:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102841-important-webkit2gtk3-security-up",
      "article-2ea55ced",
      "2ea55ced",
      "rhsa-2026-102841-important-webkit2gtk3-security-up-2ee175",
      "rhsa-2026-102841-important-webkit2gtk3-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-102852-important-python-oauthlib-securit-0ea1961c",
    "title": "RHSA-2026:102852: Important: python-oauthlib security update",
    "summary": "An update for python-oauthlib is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102852",
    "publishedAt": "2026-11-24T08:06:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102852-important-python-oauthlib-securit",
      "article-0ea1961c",
      "0ea1961c",
      "rhsa-2026-102852-important-python-oauthlib-securit-2ee175",
      "rhsa-2026-102852-important-python-oauthlib-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-102842-important-webkit2gtk3-security-up-41e90b35",
    "title": "RHSA-2026:102842: Important: webkit2gtk3 security update",
    "summary": "An update for webkit2gtk3 is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102842",
    "publishedAt": "2026-11-24T08:04:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102842-important-webkit2gtk3-security-up",
      "article-41e90b35",
      "41e90b35",
      "rhsa-2026-102842-important-webkit2gtk3-security-up-2ee175",
      "rhsa-2026-102842-important-webkit2gtk3-security-update"
    ]
  },
  {
    "slug": "red-hat-issues-python3-12-security-update-for-rhel-c6da3a0a",
    "title": "Red Hat Issues python3.12 Security Update for RHEL 9.6",
    "summary": "Red Hat released a security update for python3.12 on RHEL 9.6 EUS, addressing code-execution vulnerabilities. The patch fixes issues with CVSS scores of 7.8-8.5, as listed in the CVE references, with no active exploitation reported. Red Hat recommends applying the update via standard RHEL channels immediately to mitigate potential remote code execution.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102850",
    "publishedAt": "2026-11-24T08:04:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-python3-12-security-update-for-rhel",
      "article-c6da3a0a",
      "c6da3a0a",
      "red-hat-issues-python3-12-security-update-for-rhel-2ee175",
      "red-hat-issues-python3-12-security-update-for-rhel-9-6"
    ]
  },
  {
    "slug": "red-hat-recommends-python-oauthlib-patch-for-rhel-d6553110",
    "title": "Red Hat Recommends Python-OAuthlib Patch for RHEL 10.2",
    "summary": "Red Hat released an important security update for python-oauthlib on RHEL 10.2 Extended Update Support, targeting authentication library flaws. The update fixes multiple high-severity bugs that could allow credential misuse or unauthorized token issuance, though CVE identifiers are not disclosed. Apply RHSA-2026:102851 via the Customer Portal or use yum/dnf to install the latest python-oauthlib package immediately.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102851",
    "publishedAt": "2026-11-24T07:55:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-recommends-python-oauthlib-patch-for-rhel",
      "article-d6553110",
      "d6553110",
      "red-hat-recommends-python-oauthlib-patch-for-rhel-2ee175",
      "red-hat-recommends-python-oauthlib-patch-for-rhel-10-2"
    ]
  },
  {
    "slug": "red-hat-recommends-php-update-for-rhel-9-2-7558e27e",
    "title": "Red Hat Recommends PHP Update for RHEL 9.2",
    "summary": "A critical PHP update is released for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions, fixing runtime vulnerabilities. The patch addresses multiple high-severity flaws that could enable remote code execution or privilege escalation, though CVE IDs are not listed. Red Hat advises applying RHSA-2026:102847 immediately via the Customer Portal or using yum/dnf to install the updated PHP package.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102847",
    "publishedAt": "2026-11-24T07:50:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-recommends-php-update-for-rhel-9-2",
      "article-7558e27e",
      "7558e27e",
      "red-hat-recommends-php-update-for-rhel-9-2-2ee175"
    ]
  },
  {
    "slug": "ai-hackers-access-3-392-accounts-decrypt-50-ssh-ke-f102eb77",
    "title": "AI Hackers Access 3,392 Accounts, Decrypt 50 SSH Keys",
    "summary": "An attacker employing the CyberStrikeAI framework accessed 3,392 user accounts and active session tokens during a four-day cloud intrusion at two AWS accounts and seven EKS clusters in October 2026. The operator also decrypted a bastion host database, recovering 50 SSH private keys, exposing critical credentials. Security teams should isolate affected accounts, rotate credentials, and investigate the breach.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ai-powered-hackers/",
    "publishedAt": "2026-11-24T07:47:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-hackers-access-3-392-accounts-decrypt-50-ssh-ke",
      "article-f102eb77",
      "f102eb77",
      "ai-hackers-access-3-392-accounts-decrypt-50-ssh-ke-511f7e",
      "ai-hackers-access-3-392-accounts-decrypt-50-ssh-keys"
    ]
  },
  {
    "slug": "top-attack-path-management-tools-ranked-for-2026-2ec886b3",
    "title": "Top Attack Path Management Tools Ranked for 2026",
    "summary": "Cyber Security News evaluated defensive tools, ranking the top ten attack path management solutions available in 2026. These tools analyze complex attack chains by converting vulnerability lists into graphs mapping misconfigurations, excessive permissions, and credential reuse. Security teams can deploy attack path management software to identify critical choke points and remediate high-risk operational vectors efficiently.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/best-attack-path-management/",
    "publishedAt": "2026-11-24T07:46:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "top-attack-path-management-tools-ranked-for-2026",
      "article-2ec886b3",
      "2ec886b3",
      "top-attack-path-management-tools-ranked-for-2026-a31adc"
    ]
  },
  {
    "slug": "hackers-plant-backdoors-in-6-wordpress-plugins-to-1ee8819b",
    "title": "Hackers Plant Backdoors in 6 WordPress Plugins to Steal Passwords and Take Over Websites",
    "summary": "Hackers planted a remote-control backdoor in nine versions of six WordPress plugins from WP connect on November 22, 2026. The malware could let an attacker steal password hashes, run commands, and take over a website. But WordPress.org blocked the tainted versions before distributing them and closed all six plugins that evening.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/backdoors-in-6-wordpress-plugins/",
    "publishedAt": "2026-11-24T07:33:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-plant-backdoors-in-6-wordpress-plugins-to",
      "article-1ee8819b",
      "1ee8819b",
      "hackers-plant-backdoors-in-6-wordpress-plugins-to-25e2cf",
      "hackers-plant-backdoors-in-6-wordpress-plugins-to-steal-pass"
    ]
  },
  {
    "slug": "elecbrakes-bluetooth-flaw-enables-remote-brake-con-1f770d18",
    "title": "Elecbrakes Bluetooth Flaw Enables Remote Brake Control",
    "summary": "A critical Bluetooth flaw in Elecbrakes trailer brake controllers, CVE-2026-96805, lets attackers within range manipulate brakes without pairing. Rated 9.6 CVSS, the flaw exploits command injection in Bluetooth, enabling unauthenticated remote brake control. Manufacturers should push firmware updates disabling unsecured Bluetooth commands; users must avoid exposing controllers to untrusted devices until patched.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-bluetooth-flaw/",
    "publishedAt": "2026-11-24T07:21:45.000Z",
    "cves": [
      "CVE-2026-96805"
    ],
    "additionalSources": [],
    "aliases": [
      "elecbrakes-bluetooth-flaw-enables-remote-brake-con",
      "article-1f770d18",
      "1f770d18",
      "elecbrakes-bluetooth-flaw-enables-remote-brake-con-ff7b14",
      "elecbrakes-bluetooth-flaw-enables-remote-brake-control"
    ]
  },
  {
    "slug": "red-hat-issues-important-security-update-for-maria-9b915824",
    "title": "Red Hat Issues Important Security Update for MariaDB",
    "summary": "Red Hat released a security update addressing security flaws in the mariadb:11.8 module for Red Hat Enterprise Linux 9. Red Hat Product Security rated the operational impact of these vulnerabilities as Important based on Common Vulnerability Scoring System metrics. System administrators should apply the RHSA-2026:102830 advisory updates to mitigate potential exploitation risks across enterprise RHEL environments.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102830",
    "publishedAt": "2026-11-24T07:08:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-security-update-for-maria",
      "article-9b915824",
      "9b915824",
      "red-hat-issues-important-security-update-for-maria-2ee175",
      "red-hat-issues-important-security-update-for-mariadb"
    ]
  },
  {
    "slug": "red-hat-issues-important-webkit2gtk3-update-778a739a",
    "title": "Red Hat Issues Important WebKit2GTK3 Update",
    "summary": "Red Hat released an important security update for webkit2gtk3 on RHEL 9.2 for SAP Solutions. The patch addresses undisclosed vulnerabilities that could enable code execution or system compromise, with CVSS scores linked in the CVE references and mitigate potential privilege escalation. Administrators should apply the update immediately to eliminate the exploitation vector.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102838",
    "publishedAt": "2026-11-24T07:07:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-webkit2gtk3-update",
      "article-778a739a",
      "778a739a",
      "red-hat-issues-important-webkit2gtk3-update-2ee175"
    ]
  },
  {
    "slug": "hackers-compromise-check-point-management-servers-360328a1",
    "title": "Hackers Compromise Check Point Management Servers",
    "summary": "Hackers have compromised Check Point Security Management Servers, which store firewall rule sets that govern corporate traffic filtering. The ongoing campaign has affected at least 22 organizations worldwide, and attackers retain active access to many servers, exposing critical network controls. Check Point recommends applying the latest firmware patches, disabling unused management interfaces, and monitoring for anomalous configuration changes.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/check-point-security-management-servers/",
    "publishedAt": "2026-11-24T07:03:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-compromise-check-point-management-servers",
      "article-360328a1",
      "360328a1",
      "hackers-compromise-check-point-management-servers-4c8a3c"
    ]
  },
  {
    "slug": "google-cloud-ciso-discusses-agentic-ai-in-soc-f18561ce",
    "title": "Google Cloud CISO Discusses Agentic AI in SOC",
    "summary": "Google Cloud CISO Chris Betz spoke about agentic AI in security operations during a Help Net Security interview. He noted that automation lets attackers traverse networks in minutes, questioned junior analyst roles, and urged reassessment of controls and board oversight. Betz advised organizations to evolve SOC workflows with AI-driven threat hunting and governance to counter increasingly stealthy espionage groups.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/chris-betz-google-agentic-ai-security/",
    "publishedAt": "2026-11-24T07:00:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-cloud-ciso-discusses-agentic-ai-in-soc",
      "article-f18561ce",
      "f18561ce",
      "google-cloud-ciso-discusses-agentic-ai-in-soc-72b4c2"
    ]
  },
  {
    "slug": "ransomware-groups-multiply-despite-fewer-victim-pa-db29ac26",
    "title": "Ransomware Groups Multiply Despite Fewer Victim Payments",
    "summary": "Check Point Research’s State of Ransomware Q3 2026 report lists 2,830 victims on data-leak sites, the highest quarterly total on record. July, August, and September accounted for 964, 1,042, and 824 victims respectively, indicating a sustained expansion of active ransomware groups. The report shows declining payments but continued brand proliferation, stressing the need for stronger defensive measures.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/check-point-ransomware-attacks-q3-2026-report/",
    "publishedAt": "2026-11-24T06:30:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ransomware-groups-multiply-despite-fewer-victim-pa",
      "article-db29ac26",
      "db29ac26",
      "ransomware-groups-multiply-despite-fewer-victim-pa-78ca87",
      "ransomware-groups-multiply-despite-fewer-victim-payments"
    ]
  },
  {
    "slug": "aws-european-sovereign-cloud-architecture-and-comp-1475af38",
    "title": "AWS European Sovereign Cloud: Architecture and Compliance Overview",
    "summary": "AWS European Sovereign Cloud offers infrastructure designed to meet European data sovereignty requirements, providing isolated regions and compliance with local regulations. The architecture provides physical and logical separation, encryption controls, and audit capabilities, enabling organizations to retain full data control while leveraging AWS services. Customers can evaluate the platform against certifications and compliance frameworks to determine suitability for sensitive workloads.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/aws-european-sovereign-cloud-details/",
    "publishedAt": "2026-11-24T06:15:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "aws-european-sovereign-cloud-architecture-and-comp",
      "article-1475af38",
      "1475af38",
      "aws-european-sovereign-cloud-architecture-and-comp-ae595c",
      "aws-european-sovereign-cloud-architecture-and-compliance-ove"
    ]
  },
  {
    "slug": "red-hat-releases-cockpit-security-update-bbd94913",
    "title": "Red Hat Releases Cockpit Security Update",
    "summary": "Red Hat issued an Important security update for the cockpit component on Enterprise Linux 9.4 Update Services for SAP Solutions. The advisory cites several CVEs with CVSS scores, but no specific CVE ID is listed. Administrators should apply the cockpit update immediately to mitigate the identified vulnerabilities and consult the CVE links for detailed impact.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102813",
    "publishedAt": "2026-11-24T06:12:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-cockpit-security-update",
      "article-bbd94913",
      "bbd94913",
      "red-hat-releases-cockpit-security-update-2ee174"
    ]
  },
  {
    "slug": "splitsecure-unveils-secret-splitting-access-contro-2a84a83e",
    "title": "SplitSecure Unveils Secret-Splitting Access Control Platform",
    "summary": "SplitSecure announced a new access control platform built on secret-splitting technology to replace password managers, PAM, and vaults. The architecture supports passwords, passkeys, one-time codes, SAML & OIDC federation, and SSH, enabling secure credential handling for humans and AI agents. Organizations should evaluate the platform for integration with existing identity systems and assess its impact on compliance and operational workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/splitsecure-launches-new-access-control-architecture-for-humans-and-ai-agents/",
    "publishedAt": "2026-11-24T06:07:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "splitsecure-unveils-secret-splitting-access-contro",
      "article-2a84a83e",
      "2a84a83e",
      "splitsecure-unveils-secret-splitting-access-contro-5b17cc",
      "splitsecure-unveils-secret-splitting-access-control-platform"
    ]
  },
  {
    "slug": "red-hat-issues-critical-php-7-4-security-update-216b4966",
    "title": "Red Hat Issues Critical PHP 7.4 Security Update",
    "summary": "Red Hat released a Critical security update for the php:7.4 module on Enterprise Linux 8.6 Advanced Mission Critical and Extended Update Support. The advisory references multiple CVEs with CVSS scores, but no specific CVE ID is provided in the description. Administrators should apply the php:7.4 update immediately to address the critical vulnerabilities and review the CVE links for detailed impact.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102823",
    "publishedAt": "2026-11-24T06:05:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-php-7-4-security-update",
      "article-216b4966",
      "216b4966",
      "red-hat-issues-critical-php-7-4-security-update-2ee174"
    ]
  },
  {
    "slug": "openai-cisco-launch-ai-assisted-linux-shield-tool-f5687079",
    "title": "OpenAI, Cisco Launch AI-Assisted Linux Shield Tool",
    "summary": "OpenAI and Cisco unveiled Shirudo, an AI-assisted Linux runtime that deploys temporary eBPF controls to block exploit behaviors before patches. The system generates programs that intercept vulnerable system calls, preventing exploitation without rebooting and narrowing the exposure window. Deploy Shirudo on exposed hosts, monitor logs, and apply vendor patches promptly to eliminate the root flaw.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/openai-and-cisco-unveil-ai-assisted.html",
    "publishedAt": "2026-11-24T06:02:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-cisco-launch-ai-assisted-linux-shield-tool",
      "article-f5687079",
      "f5687079",
      "openai-cisco-launch-ai-assisted-linux-shield-tool-7e44e4"
    ]
  },
  {
    "slug": "cisa-adds-actively-exploited-n-able-mailassure-ssr-20bd190c",
    "title": "CISA Adds Actively Exploited N-able MailAssure SSRF Flaw to KEV Catalog",
    "summary": "CISA added the critical SSRF vulnerability CVE-2026-134624 in N-able MailAssure's LDAP synchronization to its Known Exploited Vulnerabilities catalog, confirming active exploitation. The flaw allows authenticated attackers to force server-side requests to internal resources, enabling data exposure and lateral movement within protected networks. Administrators must immediately apply N-able's patch and enforce strict LDAP restrictions to mitigate the SSRF risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-n-able-mailassure-flaw.html",
    "publishedAt": "2026-11-24T06:02:45.000Z",
    "cves": [
      "CVE-2026-134624"
    ],
    "additionalSources": [
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/critical-n-able-mail-assure-ssrf-vulnerability/"
      }
    ],
    "aliases": [
      "cisa-adds-actively-exploited-n-able-mailassure-ssr",
      "article-20bd190c",
      "20bd190c",
      "cisa-adds-actively-exploited-n-able-mailassure-ssr-55f90e",
      "cisa-adds-actively-exploited-n-able-mailassure-ssrf-flaw-to-"
    ]
  },
  {
    "slug": "openai-cisco-release-shirudo-to-shield-linux-until-1498088f",
    "title": "OpenAI, Cisco Release Shirudo to Shield Linux Until Patches",
    "summary": "OpenAI and Cisco released Shirudo, a Linux runtime that deploys temporary eBPF controls to block exploit behaviors while patches are pending. Shirudo generates small programs that intercept vulnerable system calls, preventing exploitation without rebooting and narrowing the exposure window. Deploy Shirudo on exposed hosts, monitor logs, and apply vendor patches promptly to eliminate the root flaw.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/cisco-openai-shirudo/",
    "publishedAt": "2026-11-24T06:00:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-cisco-release-shirudo-to-shield-linux-until",
      "article-1498088f",
      "1498088f",
      "openai-cisco-release-shirudo-to-shield-linux-until-19958a",
      "openai-cisco-release-shirudo-to-shield-linux-until-patches"
    ]
  },
  {
    "slug": "oracle-png-parsing-overflow-enables-remote-code-ex-48b4eab1",
    "title": "Oracle PNG Parsing Overflow Enables Remote Code Execution",
    "summary": "A PNG file parsing integer overflow in Oracle Outside In Technology lets remote attackers execute arbitrary code, requiring user interaction to trigger. The flaw, CVE-2026-91483, has a CVSS score of 7.8 and is publicly documented, indicating a high-severity remote code execution risk. Oracle released a patch; security teams should apply it immediately or use the documented workaround to mitigate exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1154/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-91483"
    ],
    "additionalSources": [],
    "aliases": [
      "oracle-png-parsing-overflow-enables-remote-code-ex",
      "article-48b4eab1",
      "48b4eab1",
      "oracle-png-parsing-overflow-enables-remote-code-ex-77f3bf",
      "oracle-png-parsing-overflow-enables-remote-code-execution"
    ]
  },
  {
    "slug": "oracle-bmp-parsing-out-of-bounds-write-exploitable-d3097312",
    "title": "Oracle BMP Parsing Out-of-Bounds Write Exploitable",
    "summary": "A BMP file parsing out-of-bounds write in Oracle Outside In Technology lets remote attackers execute arbitrary code, requiring library interaction. CVE-2026-91459 carries a CVSS score of 7.8, is publicly documented, and poses a high-severity remote code execution risk. Oracle released a patch; teams should apply it promptly or use the documented workaround to stop exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1153/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-91459"
    ],
    "additionalSources": [],
    "aliases": [
      "oracle-bmp-parsing-out-of-bounds-write-exploitable",
      "article-d3097312",
      "d3097312",
      "oracle-bmp-parsing-out-of-bounds-write-exploitable-77f3bf"
    ]
  },
  {
    "slug": "oracle-tiff-parsing-out-of-bounds-write-vulnerabil-f33f3af4",
    "title": "Oracle TIFF Parsing Out-of-Bounds Write Vulnerability",
    "summary": "A TIFF file parsing out-of-bounds write in Oracle Outside In Technology allows remote attackers to execute arbitrary code, requiring interaction with the library. CVE-2026-91460 has a CVSS score of 7.8, is publicly documented, and represents a high-severity remote code execution threat. Oracle issued a patch; teams should apply it immediately or use the documented workaround to prevent exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1152/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-91460"
    ],
    "additionalSources": [],
    "aliases": [
      "oracle-tiff-parsing-out-of-bounds-write-vulnerabil",
      "article-f33f3af4",
      "f33f3af4",
      "oracle-tiff-parsing-out-of-bounds-write-vulnerabil-77f3bf",
      "oracle-tiff-parsing-out-of-bounds-write-vulnerability"
    ]
  },
  {
    "slug": "zdi-26-1151-oracle-outside-in-technology-bmp-file-2c0a53e4",
    "title": "ZDI-26-1151: Oracle Outside In Technology BMP File Parsing Out-Of-Bounds Write Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Oracle Outside In Technology. Interaction with this library is required to exploit this vulnerability but attack vectors may vary depending on the implementation. The following CVEs are assigned: CVE-2026-91457.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1151/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-91457"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1151-oracle-outside-in-technology-bmp-file",
      "article-2c0a53e4",
      "2c0a53e4",
      "zdi-26-1151-oracle-outside-in-technology-bmp-file-77f3bf",
      "zdi-26-1151-oracle-outside-in-technology-bmp-file-parsing-ou"
    ]
  },
  {
    "slug": "x-org-server-privilege-escalation-via-libfontenc-p-772bc9e7",
    "title": "X.Org Server Privilege Escalation via libfontenc Parsing",
    "summary": "A local privilege escalation flaw in X.Org Server’s libfontenc encoding file parser allows attackers with code execution to gain elevated rights. The vulnerability, identified as CVE-2026-109908, scores CVSS 7.8 and requires local code execution to exploit, enabling unauthorized privilege escalation. No vendor patch has been released yet; security teams should monitor for updates and apply mitigations when available.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1158/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-109908"
    ],
    "additionalSources": [],
    "aliases": [
      "x-org-server-privilege-escalation-via-libfontenc-p",
      "article-772bc9e7",
      "772bc9e7",
      "x-org-server-privilege-escalation-via-libfontenc-p-77f3c0",
      "x-org-server-privilege-escalation-via-libfontenc-parsing"
    ]
  },
  {
    "slug": "asus-control-center-express-user-creation-privileg-c8048976",
    "title": "ASUS Control Center Express User Creation Privilege Escalation",
    "summary": "A remote privilege escalation flaw in ASUS Control Center Express’s user-creation module allows attackers to gain elevated rights when authenticated. The vulnerability, identified as CVE-2026-114205, scores CVSS 9.9 and requires authentication, enabling unauthorized privilege escalation. No vendor patch has been released yet; security teams should monitor for updates and apply mitigations when available.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1157/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-114205"
    ],
    "additionalSources": [],
    "aliases": [
      "asus-control-center-express-user-creation-privileg",
      "article-c8048976",
      "c8048976",
      "asus-control-center-express-user-creation-privileg-77f3c0",
      "asus-control-center-express-user-creation-privilege-escalati"
    ]
  },
  {
    "slug": "asus-control-center-express-authentication-bypass-6536d5b6",
    "title": "ASUS Control Center Express Authentication Bypass via Hard-coded Key",
    "summary": "A remote authentication bypass flaw in ASUS Control Center Express uses a hard-coded cryptographic key, allowing attackers to access the system without credentials. The vulnerability, identified as CVE-2026-114204, scores CVSS 9.0 and permits unauthorized access without authentication. No vendor patch has been released yet; security teams should monitor for updates and apply mitigations when available.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1156/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-114204"
    ],
    "additionalSources": [],
    "aliases": [
      "asus-control-center-express-authentication-bypass",
      "article-6536d5b6",
      "6536d5b6",
      "asus-control-center-express-authentication-bypass-77f3c0",
      "asus-control-center-express-authentication-bypass-via-hard-c"
    ]
  },
  {
    "slug": "zdi-26-1155-asus-control-center-express-use-of-har-603d0777",
    "title": "ZDI-26-1155: ASUS Control Center Express Use of Hard-coded Cryptographic Key Authentication Bypass Vulnerability",
    "summary": "This vulnerability allows remote attackers to bypass authentication on affected installations of ASUS Control Center Express. Authentication is not required to exploit this vulnerability. The following CVEs are assigned: CVE-2026-114202.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1155/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-114202"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1155-asus-control-center-express-use-of-har",
      "article-603d0777",
      "603d0777",
      "zdi-26-1155-asus-control-center-express-use-of-har-77f3bf",
      "zdi-26-1155-asus-control-center-express-use-of-hard-coded-cr"
    ]
  },
  {
    "slug": "litellm-pass-through-endpoint-rce-vulnerability-25eb4818",
    "title": "LiteLLM Pass-Through Endpoint RCE Vulnerability",
    "summary": "LiteLLM contains a pass-through endpoint flaw that allows remote attackers to execute arbitrary code on affected installations. The vulnerability requires authentication, has a CVSS score of 7.2, and permits code injection via crafted requests. A patch is available from the vendor; administrators should apply the update to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1084/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "litellm-pass-through-endpoint-rce-vulnerability",
      "article-25eb4818",
      "25eb4818",
      "litellm-pass-through-endpoint-rce-vulnerability-77f356"
    ]
  },
  {
    "slug": "litellm-virtual-key-alias-privilege-escalation-09cfdd26",
    "title": "LiteLLM Virtual Key Alias Privilege Escalation",
    "summary": "LiteLLM has a virtual key model alias flaw that permits remote attackers to elevate privileges on the affected installations. The vulnerability requires authentication, carries a CVSS score of 6.5, and allows attackers to bypass authorization checks. The vendor has released a patch; administrators should update LiteLLM to prevent privilege escalation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1083/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "litellm-virtual-key-alias-privilege-escalation",
      "article-09cfdd26",
      "09cfdd26",
      "litellm-virtual-key-alias-privilege-escalation-77f356"
    ]
  },
  {
    "slug": "rustdesk-client-lpe-cve-2026-131827-4e437ba9",
    "title": "RustDesk Client LPE CVE-2026-131827",
    "summary": "RustDesk Client for Windows contains a reg_recovery flaw that allows local attackers to elevate privileges on affected installations. The vulnerability requires low-privileged code execution, has a CVSS score of 7.8, and is identified as CVE-2026-131827. A patch is available; users should update RustDesk Client to mitigate the local privilege escalation risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1080/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-131827"
    ],
    "additionalSources": [],
    "aliases": [
      "rustdesk-client-lpe-cve-2026-131827",
      "article-4e437ba9",
      "4e437ba9",
      "rustdesk-client-lpe-cve-2026-131827-77f356"
    ]
  },
  {
    "slug": "zdi-26-1079-llama-cpp-server-context-impl-destroy-506d420f",
    "title": "ZDI-26-1079: llama.cpp server_context_impl destroy vocab Use-After-Free Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of llama.cpp. Authentication is not required to exploit this vulnerability. The following CVEs are assigned: CVE-2026-131837.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1079/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-131837"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1079-llama-cpp-server-context-impl-destroy",
      "article-506d420f",
      "506d420f",
      "zdi-26-1079-llama-cpp-server-context-impl-destroy-77f353",
      "zdi-26-1079-llama-cpp-server-context-impl-destroy-vocab-use-"
    ]
  },
  {
    "slug": "zdi-26-1065-0day-deepspeed-get-zero-stage-deserial-b4d9d749",
    "title": "ZDI-26-1065: (0Day) DeepSpeed _get_zero_stage Deserialization of Untrusted Data Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of DeepSpeed. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The following CVEs are assigned: CVE-2026-136439.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1065/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-136439"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1065-0day-deepspeed-get-zero-stage-deserial",
      "article-b4d9d749",
      "b4d9d749",
      "zdi-26-1065-0day-deepspeed-get-zero-stage-deserial-77f34f",
      "zdi-26-1065-0day-deepspeed-get-zero-stage-deserialization-of"
    ]
  },
  {
    "slug": "zdi-26-1064-0day-deepspeed-build-engine-from-ds-ch-e73a09ab",
    "title": "ZDI-26-1064: (0Day) DeepSpeed build_engine_from_ds_checkpoint Deserialization of Untrusted Data Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of DeepSpeed. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The following CVEs are assigned: CVE-2026-136438.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1064/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-136438"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1064-0day-deepspeed-build-engine-from-ds-ch",
      "article-e73a09ab",
      "e73a09ab",
      "zdi-26-1064-0day-deepspeed-build-engine-from-ds-ch-77f34f",
      "zdi-26-1064-0day-deepspeed-build-engine-from-ds-checkpoint-d"
    ]
  },
  {
    "slug": "zdi-26-1063-0day-deepspeed-parse-optim-states-dese-dc15ce19",
    "title": "ZDI-26-1063: (0Day) DeepSpeed parse_optim_states Deserialization of Untrusted Data Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of DeepSpeed. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The following CVEs are assigned: CVE-2026-136437.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1063/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-136437"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1063-0day-deepspeed-parse-optim-states-dese",
      "article-dc15ce19",
      "dc15ce19",
      "zdi-26-1063-0day-deepspeed-parse-optim-states-dese-77f34f",
      "zdi-26-1063-0day-deepspeed-parse-optim-states-deserializatio"
    ]
  },
  {
    "slug": "zdi-26-1062-0day-deepspeed-torch-checkpoint-engine-18d0f8c9",
    "title": "ZDI-26-1062: (0Day) DeepSpeed torch_checkpoint_engine Deserialization of Untrusted Data Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of DeepSpeed. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The following CVEs are assigned: CVE-2026-136436.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1062/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-136436"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1062-0day-deepspeed-torch-checkpoint-engine",
      "article-18d0f8c9",
      "18d0f8c9",
      "zdi-26-1062-0day-deepspeed-torch-checkpoint-engine-77f34e",
      "zdi-26-1062-0day-deepspeed-torch-checkpoint-engine-deseriali"
    ]
  },
  {
    "slug": "busybox-ftpd-directory-traversal-allows-arbitrary-43994ad2",
    "title": "BusyBox ftpd Directory Traversal Allows Arbitrary File Access",
    "summary": "A directory traversal flaw in BusyBox ftpd lets remote attackers create, delete, or read arbitrary files on affected installations without authentication. The flaw stems from improper path validation, yielding a CVSS score of 6.5 and enabling sensitive data disclosure or file manipulation. No vendor patch exists; isolate affected systems and apply custom workarounds or upgrade to newer BusyBox releases.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1069/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "busybox-ftpd-directory-traversal-allows-arbitrary",
      "article-43994ad2",
      "43994ad2",
      "busybox-ftpd-directory-traversal-allows-arbitrary-77f34f",
      "busybox-ftpd-directory-traversal-allows-arbitrary-file-acces"
    ]
  },
  {
    "slug": "firebird-sql-srp-auth-bypass-exposes-unauthenticat-9be3795f",
    "title": "Firebird SQL SRP Auth Bypass Exposes Unauthenticated Access",
    "summary": "A zero-day authentication bypass in Firebird SQL SRP permits remote attackers to gain full database access without credentials. The flaw exploits a flaw in the SRP protocol handling, rated CVSS 9.1, enabling unrestricted data read, write, and schema modification. Firebird has released patch 6.0.0.10; administrators should apply the update immediately or isolate vulnerable instances.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1068/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "firebird-sql-srp-auth-bypass-exposes-unauthenticat",
      "article-9be3795f",
      "9be3795f",
      "firebird-sql-srp-auth-bypass-exposes-unauthenticat-77f34f",
      "firebird-sql-srp-auth-bypass-exposes-unauthenticated-access"
    ]
  },
  {
    "slug": "bytebase-dbhub-auth-bypass-enables-unauthenticated-836e58a5",
    "title": "Bytebase DBHub Auth Bypass Enables Unauthenticated Access",
    "summary": "Bytebase DBHub suffers an authentication bypass that allows remote attackers to access the platform without credentials. The flaw arises from improper authorization checks in the MCP module, rated CVSS 9.8, permitting full data read, write, and configuration changes. Bytebase has issued patch 1.2.3; administrators should update immediately or isolate affected instances.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1067/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bytebase-dbhub-auth-bypass-enables-unauthenticated",
      "article-836e58a5",
      "836e58a5",
      "bytebase-dbhub-auth-bypass-enables-unauthenticated-77f34f",
      "bytebase-dbhub-auth-bypass-enables-unauthenticated-access"
    ]
  },
  {
    "slug": "zdi-26-1066-0day-python-packaging-authority-pip-co-2be0e546",
    "title": "ZDI-26-1066: (0Day) Python Packaging Authority pip Configuration File Incorrect Permission Assignment Local Privilege Escalation Vulnerability",
    "summary": "This vulnerability allows local attackers to escalate privileges on affected installations of Python Packaging Authority pip. An attacker must first obtain the ability to execute low-privileged code on the target system in order to exploit this vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1066/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1066-0day-python-packaging-authority-pip-co",
      "article-2be0e546",
      "2be0e546",
      "zdi-26-1066-0day-python-packaging-authority-pip-co-77f34f",
      "zdi-26-1066-0day-python-packaging-authority-pip-configuratio"
    ]
  },
  {
    "slug": "parallels-desktop-cshashellext-local-privilege-esc-5bbad1a9",
    "title": "Parallels Desktop CSHAShellExt Local Privilege Escalation Vulnerability",
    "summary": "A local privilege escalation flaw in Parallels Desktop's CSHAShellExt component allows attackers with low-privileged guest code execution to gain elevated rights. The vulnerability, identified as 'CVE-2026-121756', has a CVSS score of 8.8 and requires local code execution to exploit. Parallels has released a patch for all affected installations; users should update immediately and restrict guest code execution privileges.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1042/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-121756"
    ],
    "additionalSources": [],
    "aliases": [
      "parallels-desktop-cshashellext-local-privilege-esc",
      "article-5bbad1a9",
      "5bbad1a9",
      "parallels-desktop-cshashellext-local-privilege-esc-77f347",
      "parallels-desktop-cshashellext-local-privilege-escalation-vu"
    ]
  },
  {
    "slug": "parallels-desktop-vulnerability-enables-local-priv-7b3d10f8",
    "title": "Parallels Desktop Vulnerability Enables Local Privilege Escalation",
    "summary": "A local privilege escalation flaw in Parallels Desktop’s inittool2 lets attackers who already execute low-privilege code elevate to full system rights. CVE-2026-121754 carries a CVSS 7.8 score and requires initial local code execution, with no remote or unauthenticated vector. Parallels released a patch in the latest update; administrators should apply it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1040/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-121754"
    ],
    "additionalSources": [],
    "aliases": [
      "parallels-desktop-vulnerability-enables-local-priv",
      "article-7b3d10f8",
      "7b3d10f8",
      "parallels-desktop-vulnerability-enables-local-priv-77f347",
      "parallels-desktop-vulnerability-enables-local-privilege-esca"
    ]
  },
  {
    "slug": "zdi-26-1041-parallels-desktop-handle-based-rename-527e807b",
    "title": "ZDI-26-1041: Parallels Desktop Handle-based Rename Time-Of-Check Time-Of-Use Information Disclosure Vulnerability",
    "summary": "This vulnerability allows local attackers to disclose sensitive information on affected installations of Parallels Desktop. An attacker must first obtain the ability to execute low-privileged code on the target guest system in order to exploit this vulnerability. The following CVEs are assigned: CVE-2026-121755.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-1041/",
    "publishedAt": "2026-11-24T06:00:00.000Z",
    "cves": [
      "CVE-2026-121755"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-1041-parallels-desktop-handle-based-rename",
      "article-527e807b",
      "527e807b",
      "zdi-26-1041-parallels-desktop-handle-based-rename-77f347",
      "zdi-26-1041-parallels-desktop-handle-based-rename-time-of-ch"
    ]
  },
  {
    "slug": "node-js-simple-git-rce-vulnerability-cve-2026-1348-d005401f",
    "title": "Node.js simple-git RCE Vulnerability CVE-2026-134815",
    "summary": "A critical flaw in the Node.js simple-git library allows attackers to execute arbitrary commands on servers that pass untrusted input into Git arguments. Tracked as CVE-2026-134815, the vulnerability is an argument injection weakness present in simple-git versions before 4.1.0, enabling remote code execution without authentication. Users should upgrade to simple-git 4.1.0 or later to mitigate the flaw.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/node-js-simple-git-library-flaw/",
    "publishedAt": "2026-11-24T05:55:37.000Z",
    "cves": [
      "CVE-2026-134815"
    ],
    "additionalSources": [],
    "aliases": [
      "node-js-simple-git-rce-vulnerability-cve-2026-1348",
      "article-d005401f",
      "d005401f",
      "node-js-simple-git-rce-vulnerability-cve-2026-1348-26fd16",
      "node-js-simple-git-rce-vulnerability-cve-2026-134815"
    ]
  },
  {
    "slug": "it-delegates-password-management-while-maintaining-599336a7",
    "title": "IT Delegates Password Management While Maintaining Control",
    "summary": "IT departments often delegate password management to business units, creating accounts that may be unknown to central security teams. This practice can leave IT responsible for credentials it cannot monitor, increasing risk when personnel changes or external contractors access shared accounts. Implementing centralized identity governance, enforcing least-privilege access, and requiring IT involvement in account provisioning can mitigate these risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/passwork-enterprise-password-management/",
    "publishedAt": "2026-11-24T05:30:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "it-delegates-password-management-while-maintaining",
      "article-599336a7",
      "599336a7",
      "it-delegates-password-management-while-maintaining-2009d9",
      "it-delegates-password-management-while-maintaining-control"
    ]
  },
  {
    "slug": "red-hat-issues-important-libxi-security-update-0dc42e1f",
    "title": "Red Hat Issues Important libXi Security Update",
    "summary": "Red Hat released an important security update for the libXi library on RHEL 9.6 Extended Update Support. The update addresses unspecified vulnerabilities in libXi, with Red Hat Product Security rating the fix as Important and providing CVSS scores via CVE references. Administrators should apply the update promptly to mitigate potential exploitation of the libXi flaws.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102798",
    "publishedAt": "2026-11-24T05:09:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-libxi-security-update",
      "article-0dc42e1f",
      "0dc42e1f",
      "red-hat-issues-important-libxi-security-update-2ee172"
    ]
  },
  {
    "slug": "red-hat-issues-important-skopeo-security-update-81f307ba",
    "title": "Red Hat Issues Important skopeo Security Update",
    "summary": "Red Hat released an important security update for the skopeo tool on RHEL 9.8 Extended Update Support. The update addresses unspecified vulnerabilities in skopeo, with Red Hat Product Security rating the fix as Important and providing CVSS scores via CVE references. Administrators should apply the update promptly to mitigate potential exploitation of the skopeo flaws.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102806",
    "publishedAt": "2026-11-24T05:09:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-skopeo-security-update",
      "article-81f307ba",
      "81f307ba",
      "red-hat-issues-important-skopeo-security-update-2ee174"
    ]
  },
  {
    "slug": "red-hat-issues-important-libxi-update-for-rhel-9-4-feaf3316",
    "title": "Red Hat Issues Important libXi Update for RHEL 9.4",
    "summary": "Red Hat issued an Important security update for libXi on RHEL 9.4 Update Services for SAP Solutions. The patch addresses libXi vulnerabilities, with CVSS base scores linked via CVE references, and is rated Important by Product Security. Users should apply the update promptly to mitigate the weaknesses and meet SAP solution compliance.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102799",
    "publishedAt": "2026-11-24T05:08:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-libxi-update-for-rhel-9-4",
      "article-feaf3316",
      "feaf3316",
      "red-hat-issues-important-libxi-update-for-rhel-9-4-2ee172"
    ]
  },
  {
    "slug": "red-hat-releases-tigervnc-update-for-rhel-8-6-f2a1fd5e",
    "title": "Red Hat Releases Tigervnc Update for RHEL 8.6",
    "summary": "Red Hat issued an important security update for the Tigervnc remote desktop server on RHEL 8.6 Advanced and Extended Update Support. The update addresses multiple vulnerabilities identified in Tigervnc, each assigned a CVSS base score and linked to CVE identifiers in the advisory references. Red Hat recommends applying the patch immediately to mitigate potential exploitation and maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102805",
    "publishedAt": "2026-11-24T05:07:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-tigervnc-update-for-rhel-8-6",
      "article-f2a1fd5e",
      "f2a1fd5e",
      "red-hat-releases-tigervnc-update-for-rhel-8-6-2ee174"
    ]
  },
  {
    "slug": "stalwart-1-2-0-adds-full-exchange-protocol-support-23b9d255",
    "title": "Stalwart 1.2.0 Adds Full Exchange Protocol Support",
    "summary": "Stalwart 1.2.0 introduces full Exchange-compatible protocols, enabling MAPI over HTTP, EWS, ActiveSync, and Autodiscover for Outlook, Apple Mail, and mobile clients. The open-source mail server ships under the AGPL Community edition, offering mail, calendar, contacts, tasks, and notes. Administrators can deploy Stalwart as a drop-in replacement for Microsoft Exchange, but should evaluate compatibility with existing client configurations before migration.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/stalwart-microsoft-exchange-replacement/",
    "publishedAt": "2026-11-24T05:00:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "stalwart-1-2-0-adds-full-exchange-protocol-support",
      "article-23b9d255",
      "23b9d255",
      "stalwart-1-2-0-adds-full-exchange-protocol-support-1a1a56"
    ]
  },
  {
    "slug": "rhsa-2026-102802-important-libxi-security-update-cfea5ec0",
    "title": "RHSA-2026:102802: Important: libXi security update",
    "summary": "An update for libXi is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102802",
    "publishedAt": "2026-11-24T04:22:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102802-important-libxi-security-update",
      "article-cfea5ec0",
      "cfea5ec0",
      "rhsa-2026-102802-important-libxi-security-update-2ee174"
    ]
  },
  {
    "slug": "red-hat-releases-libxi-security-update-for-rhel-8-01b8354e",
    "title": "Red Hat Releases libXi Security Update for RHEL 8.6",
    "summary": "Red Hat issued a security update for the libXi library on RHEL 8.6 Advanced Mission Critical and Extended Update Support, addressing identified vulnerabilities. The update carries an Important impact rating; CVSS base scores are available via CVE links, but no active exploitation is reported. Red Hat recommends applying the patch through standard update channels immediately.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102803",
    "publishedAt": "2026-11-24T04:20:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-libxi-security-update-for-rhel-8",
      "article-01b8354e",
      "01b8354e",
      "red-hat-releases-libxi-security-update-for-rhel-8-2ee174",
      "red-hat-releases-libxi-security-update-for-rhel-8-6"
    ]
  },
  {
    "slug": "red-hat-issues-libxi-update-for-rhel-9-2-sap-ab037c79",
    "title": "Red Hat Issues libXi Update for RHEL 9.2 SAP",
    "summary": "Red Hat released a security update for the libXi library on RHEL 9.2 Update Services for SAP Solutions, addressing identified vulnerabilities. The patch is rated Important; CVSS base scores are provided via CVE links, with no reported active exploitation. Apply the update through standard update channels to mitigate the identified flaws.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102800",
    "publishedAt": "2026-11-24T04:17:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-libxi-update-for-rhel-9-2-sap",
      "article-ab037c79",
      "ab037c79",
      "red-hat-issues-libxi-update-for-rhel-9-2-sap-2ee174"
    ]
  },
  {
    "slug": "openai-and-cisco-release-shirudo-to-block-linux-ex-1663e286",
    "title": "OpenAI and Cisco Release Shirudo to Block Linux Exploits",
    "summary": "OpenAI and Cisco introduced Shirudo, an open-source AI-driven tool that blocks specific exploits on live Linux servers while teams test and deploy permanent patches. In a controlled test, a Codex-generated shield prevented a Java4Shell exploit against Elasticsearch without service interruption. Security teams should deploy Shirudo immediately to mitigate known exploits and reduce patch deployment windows.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/openai-and-cisco-launch-shirudo/",
    "publishedAt": "2026-11-24T03:51:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-and-cisco-release-shirudo-to-block-linux-ex",
      "article-1663e286",
      "1663e286",
      "openai-and-cisco-release-shirudo-to-block-linux-ex-d4a78b",
      "openai-and-cisco-release-shirudo-to-block-linux-exploits"
    ]
  },
  {
    "slug": "rhsa-2026-102715-critical-ruby-security-bug-fix-an-93e531fa",
    "title": "RHSA-2026:102715: Critical: ruby security, bug fix, and enhancement update",
    "summary": "An update for ruby is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102715",
    "publishedAt": "2026-11-24T03:09:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102715-critical-ruby-security-bug-fix-an",
      "article-93e531fa",
      "93e531fa",
      "rhsa-2026-102715-critical-ruby-security-bug-fix-an-2ee171",
      "rhsa-2026-102715-critical-ruby-security-bug-fix-and-enhancem"
    ]
  },
  {
    "slug": "red-hat-issues-critical-ruby4-0-security-update-59a21035",
    "title": "Red Hat Issues Critical ruby4.0 Security Update",
    "summary": "Red Hat issued a critical security update for the ruby4.0 package on RHEL 10, addressing several high-severity bugs. The advisory references CVSS base scores for each vulnerability, though specific CVE identifiers are not disclosed in the notice. Administrators should apply the ruby4.0 update promptly to prevent exploitation of the identified weaknesses.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102714",
    "publishedAt": "2026-11-24T03:09:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-ruby4-0-security-update",
      "article-59a21035",
      "59a21035",
      "red-hat-issues-critical-ruby4-0-security-update-2ee171"
    ]
  },
  {
    "slug": "chromeos-stable-channel-updated-to-os-16868-29-0-adb54fa3",
    "title": "ChromeOS Stable Channel Updated to OS 16868.29.0",
    "summary": "Google updated the ChromeOS Stable channel to OS version 16868.29.0 and browser version 158.0.8127.98 for most devices, including ChromeOS Flex. The update includes routine security and stability improvements, with no new vulnerabilities disclosed. Users should apply the update via the standard ChromeOS update mechanism regularly to maintain current security posture.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-chromeos_01679457768.html",
    "publishedAt": "2026-11-24T02:54:25.241Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chromeos-stable-channel-updated-to-os-16868-29-0",
      "article-adb54fa3",
      "adb54fa3",
      "chromeos-stable-channel-updated-to-os-16868-29-0-616ab3"
    ]
  },
  {
    "slug": "red-hat-releases-critical-php-7-4-security-update-99077dba",
    "title": "Red Hat Releases Critical php:7.4 Security Update",
    "summary": "Red Hat released a critical security update for the php:7.4 module on RHEL 8.8 Update Services for SAP Solutions and the Telecommunications Update Service. The update addresses high-severity vulnerabilities, each assigned a CVSS base score, but no specific CVE identifiers are listed. Red Hat recommends applying the php:7.4 update immediately to mitigate potential remote code execution risks.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102713",
    "publishedAt": "2026-11-24T02:38:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-php-7-4-security-update",
      "article-99077dba",
      "99077dba",
      "red-hat-releases-critical-php-7-4-security-update-2ee171"
    ]
  },
  {
    "slug": "ongoing-scanning-detected-on-banatsync-subnet-baab0068",
    "title": "Ongoing Scanning Detected on BANATSYNC Subnet",
    "summary": "SANS Internet Storm Center reports continuous scanning from subnet 109.160.32.0/24, assigned to BANATSYNC SRL, a Romanian web hosting and VPS provider. DShield sensor data shows persistent probing over 90 days, suggesting ongoing reconnaissance or potential exploitation attempts against the subnet's hosts. Security teams should monitor for suspicious activity, enforce rate limiting, and harden hosts to mitigate potential threats.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33550",
    "publishedAt": "2026-11-24T02:32:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ongoing-scanning-detected-on-banatsync-subnet",
      "article-baab0068",
      "baab0068",
      "ongoing-scanning-detected-on-banatsync-subnet-57dd81"
    ]
  },
  {
    "slug": "isc-stormcast-podcast-released-for-nov-24-2026-fe0f5f93",
    "title": "ISC Stormcast Podcast Released for Nov 24, 2026",
    "summary": "The ISC Stormcast podcast released for Tuesday, November 24, 2026, delivers a concise briefing on the latest cyber threat landscape. The episode covers emerging malware trends, nation-state activity, and defensive tactics, providing analysts with actionable insights for the week. Listeners can access the recording via the ISC website or subscribe to the podcast feed for real-time updates.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33552",
    "publishedAt": "2026-11-24T02:00:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isc-stormcast-podcast-released-for-nov-24-2026",
      "article-fe0f5f93",
      "fe0f5f93",
      "isc-stormcast-podcast-released-for-nov-24-2026-57dd81"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-update-for-rhel-9-6-eus-b5a282ce",
    "title": "Red Hat Releases Kernel Update for RHEL 9.6 EUS",
    "summary": "Red Hat issued a kernel update for RHEL 9.6 EUS to fix multiple security flaws that could enable privilege escalation or denial of service. Each fix carries a CVSS base score, though no CVE IDs or public exploits are referenced. Red Hat advises immediate application of the patch via standard repositories to ensure all security enhancements are installed.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102711",
    "publishedAt": "2026-11-24T01:25:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-update-for-rhel-9-6-eus",
      "article-b5a282ce",
      "b5a282ce",
      "red-hat-releases-kernel-update-for-rhel-9-6-eus-2ee171"
    ]
  },
  {
    "slug": "red-hat-issues-kernel-update-for-rhel-9-8-eus-a6f19b1d",
    "title": "Red Hat Issues Kernel Update for RHEL 9.8 EUS",
    "summary": "Red Hat issued a kernel update for RHEL 9.8 EUS to fix vulnerabilities that could enable privilege escalation or denial of service. Each fix carries a CVSS base score, but no CVE IDs or public exploits are referenced. Red Hat advises applying the patch via standard repositories immediately to incorporate all security improvements.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102710",
    "publishedAt": "2026-11-24T01:23:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-kernel-update-for-rhel-9-8-eus",
      "article-a6f19b1d",
      "a6f19b1d",
      "red-hat-issues-kernel-update-for-rhel-9-8-eus-2ee171"
    ]
  },
  {
    "slug": "red-hat-updates-multiple-container-tools-on-rhel-9-ad6179bc",
    "title": "Red Hat Updates Multiple Container Tools on RHEL 9.4",
    "summary": "Red Hat released a security update for buildah, conmon, container-selinux, containernetworking-plugins, containers-common, crun, fuse-overlayfs, gvisor-tap-vsock, oci-seccomp-bpf-hook, podman, runc, skopeo, and slirp4netns on RHEL 9.4. The update fixes multiple vulnerabilities, each with a CVSS base score, and is rated as Important by Red Hat Product Security. Apply the update via RHEL 9.4 Update Services for SAP Solutions to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102708",
    "publishedAt": "2026-11-24T01:10:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-multiple-container-tools-on-rhel-9",
      "article-ad6179bc",
      "ad6179bc",
      "red-hat-updates-multiple-container-tools-on-rhel-9-2ee170",
      "red-hat-updates-multiple-container-tools-on-rhel-9-4"
    ]
  },
  {
    "slug": "red-hat-updates-kernel-for-rhel-8-8-sap-3518b097",
    "title": "Red Hat Updates Kernel for RHEL 8.8 SAP",
    "summary": "Red Hat issued a kernel update for RHEL 8.8 SAP and Telecom to fix vulnerabilities that could enable privilege escalation or denial of service. Each fix carries a CVSS base score, but no CVE IDs or public exploits are cited. Red Hat recommends applying the patch via standard repositories immediately to incorporate all security improvements.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102709",
    "publishedAt": "2026-11-24T01:10:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-kernel-for-rhel-8-8-sap",
      "article-3518b097",
      "3518b097",
      "red-hat-updates-kernel-for-rhel-8-8-sap-2ee170"
    ]
  },
  {
    "slug": "red-hat-releases-security-update-for-container-too-daf1c6c4",
    "title": "Red Hat Releases Security Update for Container Tools",
    "summary": "Red Hat released the 3.3.4 build of Apicurio Registry container images for OpenShift, providing updated components and security patches. The update includes security fixes and enhancements, ensuring compatibility with current OpenShift deployments and aligning with Red Hat's security policy. Security teams should pull the new images from the Red Hat Container Registry and redeploy to maintain compliance.",
    "category": "General",
    "severity": "LOW",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102699",
    "publishedAt": "2026-11-24T00:52:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-security-update-for-container-too",
      "article-daf1c6c4",
      "daf1c6c4",
      "red-hat-releases-security-update-for-container-too-2ee16e",
      "red-hat-releases-security-update-for-container-tools"
    ]
  },
  {
    "slug": "laliga-data-breach-fans-personal-info-stolen-c566d02d",
    "title": "LaLiga Data Breach: Fans' Personal Info Stolen",
    "summary": "Hackers accessed LaLiga digital services and stole personal data of fans, affecting multiple Spanish clubs. The breach exploited unknown vulnerabilities in the league's web infrastructure, enabling unauthorized data exfiltration. LaLiga has notified affected parties and is working with security teams immediately to remediate the vulnerabilities and secure its systems today.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/laliga-hacked-spain-top-professional-league-confirms-cyber-incident",
    "publishedAt": "2026-11-24T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "laliga-data-breach-fans-personal-info-stolen",
      "article-c566d02d",
      "c566d02d",
      "laliga-data-breach-fans-personal-info-stolen-6d1aa3"
    ]
  },
  {
    "slug": "gta-vi-hacker-sentenced-released-same-day-fcf6ba53",
    "title": "GTA VI Hacker Sentenced, Released Same Day",
    "summary": "A British cybercriminal breached Rockstar Games’ systems, leaking unreleased Grand Theft Auto VI footage in the United Kingdom. The attack exploited internal access controls, but no specific vulnerability was publicly disclosed without evidence of ongoing threat to Rockstar’s operations. He received a seven-year prison sentence and was released on license after serving time.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/gta-vi-hacker-arion-kurtaj-released-on-license",
    "publishedAt": "2026-11-24T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gta-vi-hacker-sentenced-released-same-day",
      "article-fcf6ba53",
      "fcf6ba53",
      "gta-vi-hacker-sentenced-released-same-day-47eeb4"
    ]
  },
  {
    "slug": "rhsa-2026-102696-critical-php-8-2-security-update-d2bfc141",
    "title": "RHSA-2026:102696: Critical: php:8.2 security update",
    "summary": "An update for the php:8.2 module is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102696",
    "publishedAt": "2026-11-23T23:31:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102696-critical-php-8-2-security-update",
      "article-d2bfc141",
      "d2bfc141",
      "rhsa-2026-102696-critical-php-8-2-security-update-2ee16e"
    ]
  },
  {
    "slug": "cybersecurity-jobs-open-now-november-24-2026-f8135851",
    "title": "Cybersecurity Jobs Open Now, November 24, 2026",
    "summary": "A new Applied Cyber, Detections role is listed by Help Net Security, targeting remote positions in the United States. Candidates will support detection operations, develop and refine detection logic, and automate alert triage across web domains, social media, and other digital channels. The posting encourages collaboration with engineering and product teams to enhance detection capabilities and address evolving cyber threats.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/24/cybersecurity-jobs-available-right-now-november-24-2026/",
    "publishedAt": "2026-11-23T23:30:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cybersecurity-jobs-open-now-november-24-2026",
      "article-f8135851",
      "f8135851",
      "cybersecurity-jobs-open-now-november-24-2026-60bd08"
    ]
  },
  {
    "slug": "rhsa-2026-102695-critical-php-8-2-security-update-fe9d24bb",
    "title": "RHSA-2026:102695: Critical: php:8.2 security update",
    "summary": "An update for the php:8.2 module is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102695",
    "publishedAt": "2026-11-23T23:28:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102695-critical-php-8-2-security-update",
      "article-fe9d24bb",
      "fe9d24bb",
      "rhsa-2026-102695-critical-php-8-2-security-update-2ee16e"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-update-for-rhel-9-2-sap-0a725d3f",
    "title": "Red Hat Releases Kernel Update for RHEL 9.2 SAP",
    "summary": "Red Hat issued a kernel update for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions, addressing multiple security bugs. The advisory rates the update as Important, with CVSS base scores linked to individual CVE references, indicating high risk if unpatched. Security teams should apply the update promptly, ensuring kernel version compliance and verifying SAP application compatibility after installation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102689",
    "publishedAt": "2026-11-23T23:23:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-update-for-rhel-9-2-sap",
      "article-0a725d3f",
      "0a725d3f",
      "red-hat-releases-kernel-update-for-rhel-9-2-sap-2ee16e"
    ]
  },
  {
    "slug": "usn-9189-1-qt5compat-vulnerability-e859a30a",
    "title": "USN-9189-1: Qt5Compat vulnerability",
    "summary": "It was discovered that Qt5Compat did not correctly handle certain text codec names, which could lead to an out-of-bounds read. An attacker could possibly use this issue to cause a denial of service.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9189-1",
    "publishedAt": "2026-11-23T23:21:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9189-1-qt5compat-vulnerability",
      "article-e859a30a",
      "e859a30a",
      "usn-9189-1-qt5compat-vulnerability-7e77df"
    ]
  },
  {
    "slug": "rhsa-2026-102684-critical-php-8-3-security-update-f1b40ee0",
    "title": "RHSA-2026:102684: Critical: php:8.3 security update",
    "summary": "An update for the php:8.3 module is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102684",
    "publishedAt": "2026-11-23T22:29:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102684-critical-php-8-3-security-update",
      "article-f1b40ee0",
      "f1b40ee0",
      "rhsa-2026-102684-critical-php-8-3-security-update-2ee16e"
    ]
  },
  {
    "slug": "chrome-158-released-for-android-b09b0dcc",
    "title": "Chrome 158 Released for Android",
    "summary": "Google has released Chrome 158 (158.0.8127.92) for Android, which will appear on Google Play within days. The update focuses on stability and performance enhancements, while incorporating the same security fixes present in the corresponding desktop releases for Windows, Mac, and Linux. Users should install the new package via Google Play; no additional work-around is required.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-for-android-update_0411169060.html",
    "publishedAt": "2026-11-23T22:09:51.297Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-158-released-for-android",
      "article-b09b0dcc",
      "b09b0dcc",
      "chrome-158-released-for-android-412ac1"
    ]
  },
  {
    "slug": "red-hat-issues-python-oauthlib-security-update-d0a8cfdf",
    "title": "Red Hat issues python-oauthlib security update",
    "summary": "Red Hat released a security update for python-oauthlib on RHEL 9, addressing multiple critical vulnerabilities. The update mitigates flaws that could enable remote code execution or privilege escalation, with CVSS scores linked via CVE references and rated Important by Product Security. Administrators should apply RHSA-2026:102668 immediately to secure affected systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102668",
    "publishedAt": "2026-11-23T22:06:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-python-oauthlib-security-update",
      "article-d0a8cfdf",
      "d0a8cfdf",
      "red-hat-issues-python-oauthlib-security-update-2ee16d"
    ]
  },
  {
    "slug": "aurora-stops-clickfix-attacks-with-intent-detectio-c9f21da8",
    "title": "Aurora stops ClickFix attacks with intent detection",
    "summary": "ClickFix attacks coerce users into executing malicious commands, creating a gray zone that evades traditional security tools. Aurora Adaptive Threat Protection employs intent-based detection to recognize execution patterns, stopping attacks at the moment they occur and mapping activity for visibility. Security teams can integrate Aurora to gain real-time protection against ClickFix and similar command-execution threats.",
    "category": "General",
    "severity": "HIGH",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/technical-videos/how-aurora-adaptive-threat-protection-detects-and-stops-clickfix-attacks/",
    "publishedAt": "2026-11-23T22:03:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "aurora-stops-clickfix-attacks-with-intent-detectio",
      "article-c9f21da8",
      "c9f21da8",
      "aurora-stops-clickfix-attacks-with-intent-detectio-41f70a",
      "aurora-stops-clickfix-attacks-with-intent-detection"
    ]
  },
  {
    "slug": "ot-gateways-reveal-authentication-status-many-unpr-65970c74",
    "title": "OT Gateways Reveal Authentication Status, Many Unprotected",
    "summary": "Industrial serial gateways reveal whether they are authenticated, exposing a flaw in critical OT access devices. The default configuration broadcasts authentication status, allowing attackers to identify unprotected devices; no exploit is needed, but the disclosure raises credential theft risk. Disable status broadcasts, enforce authentication, and apply vendor firmware updates that conceal authentication state.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/ics-ot-security/industrial-serial-gateways-broadcast-insecure",
    "publishedAt": "2026-11-23T22:02:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ot-gateways-reveal-authentication-status-many-unpr",
      "article-65970c74",
      "65970c74",
      "ot-gateways-reveal-authentication-status-many-unpr-209193",
      "ot-gateways-reveal-authentication-status-many-unprotected"
    ]
  },
  {
    "slug": "13-malicious-nuget-packages-target-net-developers-81b6e5e1",
    "title": "13 Malicious NuGet Packages Target .NET Developers",
    "summary": "Socket researchers identified 13 malicious NuGet packages that lure .NET developers with fake job assessment prompts. The packages perform DLL side-loading, steal credentials, and embed GitHub-based malware, compromising developer environments. Security teams should audit package sources, enforce trusted feeds, and apply the latest .NET security updates to mitigate exposure and monitor for suspicious activity.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Socket.dev",
    "sourceUrl": "https://socket.dev/blog/malicious-nuget-packages-fake-job-assessments",
    "publishedAt": "2026-11-23T21:55:22.725Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "13-malicious-nuget-packages-target-net-developers",
      "article-81b6e5e1",
      "81b6e5e1",
      "13-malicious-nuget-packages-target-net-developers-43d711"
    ]
  },
  {
    "slug": "aws-ssm-agent-default-key-flaw-exposes-role-creden-768216c7",
    "title": "AWS SSM Agent default key flaw exposes role credentials",
    "summary": "Amazon SSM Agent on AWS Windows Server AMIs contains a flaw where instances share a default cryptographic key during registration. CVE-2026-134069 allows a local non-admin user to retrieve the instance’s Default Host Management Configuration role credentials, enabling potential credential theft. AWS recommends updating to the latest SSM Agent version or applying the provided patch to eliminate the shared key vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-197-aws/",
    "publishedAt": "2026-11-23T21:54:18.000Z",
    "cves": [
      "CVE-2026-134069"
    ],
    "additionalSources": [],
    "aliases": [
      "aws-ssm-agent-default-key-flaw-exposes-role-creden",
      "article-768216c7",
      "768216c7",
      "aws-ssm-agent-default-key-flaw-exposes-role-creden-29fa73",
      "aws-ssm-agent-default-key-flaw-exposes-role-credentials"
    ]
  },
  {
    "slug": "red-hat-releases-golang-update-for-rhel-10-b421f581",
    "title": "Red Hat Releases Golang Update for RHEL 10",
    "summary": "Red Hat released a golang update for RHEL 10, fixing multiple security bugs in the Go compiler and runtime. The update addresses several CVE-linked issues, each with a CVSS base score indicating moderate impact; no active exploitation is known. Red Hat advises applying the update via the package manager; no workaround is needed.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102587",
    "publishedAt": "2026-11-23T21:42:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-golang-update-for-rhel-10",
      "article-b421f581",
      "b421f581",
      "red-hat-releases-golang-update-for-rhel-10-2ee16a"
    ]
  },
  {
    "slug": "red-hat-issues-golang-security-update-f2d54dcf",
    "title": "Red Hat Issues Golang Security Update",
    "summary": "Red Hat released a security update for the golang runtime on RHEL 9, addressing multiple vulnerabilities. The update mitigates unspecified bugs that could allow local privilege escalation or code execution, with CVSS scores available via referenced CVE links. Administrators should apply the golang package update immediately to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102586",
    "publishedAt": "2026-11-23T21:41:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-golang-security-update",
      "article-f2d54dcf",
      "f2d54dcf",
      "red-hat-issues-golang-security-update-2ee16a"
    ]
  },
  {
    "slug": "crowdstrike-acquires-zscaler-for-ai-security-integ-74ee119c",
    "title": "CrowdStrike Acquires Zscaler for AI Security Integration",
    "summary": "CrowdStrike announced a $44 billion acquisition of Zscaler, merging endpoint protection with zero-trust network security. The integration aims to centralize AI agent oversight, enabling unified threat detection across device and network layers. Customers will receive combined platform capabilities, but must plan for migration and potential licensing adjustments, ensuring seamless transition.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/endpoint-security/crowdstrike-ai-security-push-zscaler-deal",
    "publishedAt": "2026-11-23T21:21:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-acquires-zscaler-for-ai-security-integ",
      "article-74ee119c",
      "74ee119c",
      "crowdstrike-acquires-zscaler-for-ai-security-integ-27390e",
      "crowdstrike-acquires-zscaler-for-ai-security-integration"
    ]
  },
  {
    "slug": "red-hat-issues-python-3-6-security-update-7ae3d02b",
    "title": "Red Hat Issues Python 3.6 Security Update",
    "summary": "Red Hat released a security update for the python36:3.6 module on RHEL 8, addressing several vulnerabilities. The patch fixes bugs that could enable local privilege escalation or arbitrary code execution, with CVSS scores provided via CVE references. System administrators should install the updated python36 package promptly to secure their environments.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102653",
    "publishedAt": "2026-11-23T21:08:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-python-3-6-security-update",
      "article-7ae3d02b",
      "7ae3d02b",
      "red-hat-issues-python-3-6-security-update-2ee16d"
    ]
  },
  {
    "slug": "aurora-adtp-blocks-modern-attacks-by-continuous-be-f261eb17",
    "title": "Aurora ADTP Blocks Modern Attacks by Continuous Behavior Tracking",
    "summary": "Aurora Adaptive Threat Protection (ADTP) monitors endpoint activity to counter attacks that bypass conventional defenses. By linking related behaviors into a full attack narrative, ADTP identifies malicious intent before execution, enabling real-time disruption. Security teams should deploy ADTP alongside existing endpoint solutions and configure behavior thresholds for optimal coverage, reducing blind spots.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/technical-videos/how-aurora-adaptive-threat-protection-detects-stops-and-reverses-modern-attacks/",
    "publishedAt": "2026-11-23T21:00:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "aurora-adtp-blocks-modern-attacks-by-continuous-be",
      "article-f261eb17",
      "f261eb17",
      "aurora-adtp-blocks-modern-attacks-by-continuous-be-47c4d5",
      "aurora-adtp-blocks-modern-attacks-by-continuous-behavior-tra"
    ]
  },
  {
    "slug": "kepco-breach-exposes-1-5-million-customer-records-33ce023b",
    "title": "KEPCO Breach Exposes 1.5 Million Customer Records",
    "summary": "A threat actor breached KEPCO’s internal network, accessing two systems that stored customer, employee, and contractor data. The intrusion leveraged an undisclosed vulnerability in the company’s network perimeter, enabling unauthorized data exfiltration and potential credential compromise. KEPCO has issued a security advisory and is conducting a forensic investigation, urging affected users to monitor accounts and change passwords.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/south-koreas-power-giant-kepco-confirms-data-breach-impacting-15-million/",
    "publishedAt": "2026-11-23T20:54:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kepco-breach-exposes-1-5-million-customer-records",
      "article-33ce023b",
      "33ce023b",
      "kepco-breach-exposes-1-5-million-customer-records-2a6e37"
    ]
  },
  {
    "slug": "chrome-stable-channel-updated-to-158-0-8127-88-d35ce0b3",
    "title": "Chrome Stable Channel Updated to 158.0.8127.88",
    "summary": "Google Chrome released a stable channel update to version 158.0.8127.88 for Windows, Mac, and Linux, rolling out over the next weeks. The update includes security fixes, with a detailed change log available; users are encouraged to review the log before upgrading. Administrators should schedule the rollout, verify compatibility, and monitor for any post-upgrade issues via the community help forum.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01734282054.html",
    "publishedAt": "2026-11-23T20:52:51.321Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-stable-channel-updated-to-158-0-8127-88",
      "article-d35ce0b3",
      "d35ce0b3",
      "chrome-stable-channel-updated-to-158-0-8127-88-5debed"
    ]
  },
  {
    "slug": "chrome-extended-stable-channel-updated-to-156-0-80-45d8d596",
    "title": "Chrome Extended Stable Channel Updated to 156.0.8078.114",
    "summary": "Google Chrome’s Extended Stable channel updated to 156.0.8078.114 for Windows and macOS, extending the stable release schedule. The update lists changes, with security fixes pending a later release, and will roll out over the next days or weeks. Users may review the change log, file bugs, or use the community forum while awaiting the security patch.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/extended-stable-update-for-desktop_01590513949.html",
    "publishedAt": "2026-11-23T20:52:47.796Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-extended-stable-channel-updated-to-156-0-80",
      "article-45d8d596",
      "45d8d596",
      "chrome-extended-stable-channel-updated-to-156-0-80-496d05",
      "chrome-extended-stable-channel-updated-to-156-0-8078-114"
    ]
  },
  {
    "slug": "cve-2026-134056-out-of-bounds-write-in-padded-bloc-994f1241",
    "title": "CVE-2026-134056 - Out-of-bounds write in padded block cipher decryption in AWS-LC",
    "summary": "Bulletin ID: 2026-196-AWS Publication Date: 11/23/2026 12:00 PM PST Description: We identified CVE-2026-134056, an out-of-bounds write issue in AWS-LC's padded block cipher decryption. If the output buffer is the minimum documented size, AWS-LC can write one byte past its end. The aws-lc-rs StreamingDecryptingKey API has a similar issue with cbc_pkcs7 and ecb_pkcs7.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-196-aws/",
    "publishedAt": "2026-11-23T20:29:41.000Z",
    "cves": [
      "CVE-2026-134056"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-134056-out-of-bounds-write-in-padded-bloc",
      "article-994f1241",
      "994f1241",
      "cve-2026-134056-out-of-bounds-write-in-padded-bloc-28459b",
      "cve-2026-134056-out-of-bounds-write-in-padded-block-cipher-d"
    ]
  },
  {
    "slug": "red-hat-issues-important-sqlite-security-update-eb5cc09f",
    "title": "Red Hat Issues Important SQLite Security Update",
    "summary": "Red Hat released an important security update for SQLite on Red Hat Enterprise Linux 8, addressing multiple vulnerabilities. The update carries an Important impact rating, with CVSS base scores linked to each CVE in the advisory references. Administrators should apply the update immediately and verify that SQLite components are patched to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102648",
    "publishedAt": "2026-11-23T20:28:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-sqlite-security-update",
      "article-eb5cc09f",
      "eb5cc09f",
      "red-hat-issues-important-sqlite-security-update-2ee16d"
    ]
  },
  {
    "slug": "cisco-products-affected-by-php-remote-code-vulnera-a22919db",
    "title": "Cisco Products Affected by PHP Remote Code Vulnerability",
    "summary": "Cisco products are vulnerable to a PHP flaw that permits remote code execution, as disclosed by the PHP Foundation on November 19, 2026. The flaw, identified as CVE-2026-126714 and dubbed phpAfterShell, carries a Critical security impact rating and is referenced by GHSA-fm2m-fjf5-v3cp. Cisco recommends applying the available PHP security patches immediately to mitigate the RCE risk and ensure system integrity.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-phpaftershell-nov-2026-kT9pL4Xe?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DVulnerability+in+PHP+Affecting+Cisco+Products%3A+November+2026%26vs_k%3D1",
    "publishedAt": "2026-11-23T20:20:00.000Z",
    "cves": [
      "CVE-2026-126714"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-products-affected-by-php-remote-code-vulnera",
      "article-a22919db",
      "a22919db",
      "cisco-products-affected-by-php-remote-code-vulnera-6bcf0e",
      "cisco-products-affected-by-php-remote-code-vulnerability"
    ]
  },
  {
    "slug": "red-hat-issues-moderate-update-for-go-toolset-rhel-9f1b8474",
    "title": "Red Hat Issues Moderate Update for go-toolset:rhel8",
    "summary": "Red Hat released a moderate security update for the go-toolset:rhel8 module on RHEL8, fixing multiple Go compiler bugs. The patch addresses local privilege escalation and denial-of-service flaws with CVSS scores up to 7.5, though no active exploitation is known. Red Hat advises applying the update via the standard RHEL8 update channel; no workarounds are required.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102592",
    "publishedAt": "2026-11-23T20:16:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-moderate-update-for-go-toolset-rhel",
      "article-9f1b8474",
      "9f1b8474",
      "red-hat-issues-moderate-update-for-go-toolset-rhel-2ee16a",
      "red-hat-issues-moderate-update-for-go-toolset-rhel8"
    ]
  },
  {
    "slug": "trump-names-industry-veteran-davies-as-acting-cybe-bcd7ff11",
    "title": "Trump Names Industry Veteran Davies as Acting Cyber Director",
    "summary": "Trump appointed Kirsten Davies as National Cyber Director, signaling a shift toward industry expertise amid outages and geopolitical tensions. The move follows criticism of cyber leadership and aims to leverage Davies' private sector experience to strengthen U.S. cyber defenses. The appointment is expected to influence policy direction and coordination with industry partners, though no immediate operational changes have been announced.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/us-cyber-director-pick-signals-shift-toward-expertise",
    "publishedAt": "2026-11-23T20:13:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "trump-names-industry-veteran-davies-as-acting-cybe",
      "article-bcd7ff11",
      "bcd7ff11",
      "trump-names-industry-veteran-davies-as-acting-cybe-5720f2",
      "trump-names-industry-veteran-davies-as-acting-cyber-director"
    ]
  },
  {
    "slug": "openrouter-removes-ai-providers-for-data-handling-161bd63a",
    "title": "OpenRouter Removes AI Providers for Data Handling Violations",
    "summary": "OpenRouter removed three AI providers after discovering they violated data-handling policies and exposed sensitive user prompts and secrets. The policy breach leaked proprietary prompts, potentially compromising client confidentiality and violating OpenRouter's privacy commitments. OpenRouter suspended the providers, issued a public notice, and is reviewing vetting procedures to prevent future violations.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/openrouter-drops-ai-providers-over-leaked-prompts-and-secrets/",
    "publishedAt": "2026-11-23T20:00:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openrouter-removes-ai-providers-for-data-handling",
      "article-161bd63a",
      "161bd63a",
      "openrouter-removes-ai-providers-for-data-handling-35ecc2",
      "openrouter-removes-ai-providers-for-data-handling-violations"
    ]
  },
  {
    "slug": "ubuntu-oauthlib-multiple-cve-vulnerabilities-discl-55dbba3a",
    "title": "Ubuntu OAuthLib multiple CVE vulnerabilities disclosed",
    "summary": "Ubuntu 20.04 to 26.10 releases contain several OAuthLib flaws affecting token revocation, PKCE verification, and client identity validation. CVE-2026-49264 permits arbitrary code execution via JSONP callbacks, CVE-2026-49265 enables token theft through non-constant-time comparison, and CVE-2026-118669 allows unauthorized token acquisition by bypassing client checks. Users should upgrade to Ubuntu releases or apply the security patches to mitigate these OAuthLib vulnerabilities.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9188-1",
    "publishedAt": "2026-11-23T19:44:23.000Z",
    "cves": [
      "CVE-2026-49264",
      "CVE-2026-49265",
      "CVE-2026-118669"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-oauthlib-multiple-cve-vulnerabilities-discl",
      "article-55dbba3a",
      "55dbba3a",
      "ubuntu-oauthlib-multiple-cve-vulnerabilities-discl-7e77e3",
      "ubuntu-oauthlib-multiple-cve-vulnerabilities-disclosed"
    ]
  },
  {
    "slug": "chrome-ios-stable-158-released-with-stability-impr-cc781fff",
    "title": "Chrome iOS Stable 158 Released with Stability Improvements",
    "summary": "Google released Chrome Stable 158 (158.0.8127.86) for iOS, adding stability and performance improvements to the mobile browser. The update addresses minor bugs and optimizes rendering, reducing memory usage and enhancing page load times on iOS devices. The new build will be available on the App Store within hours, and users are encouraged to update to benefit from the fixes.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-stable-for-ios-update_0595441535.html",
    "publishedAt": "2026-11-23T18:58:34.761Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-ios-stable-158-released-with-stability-impr",
      "article-cc781fff",
      "cc781fff",
      "chrome-ios-stable-158-released-with-stability-impr-5cad3b",
      "chrome-ios-stable-158-released-with-stability-improvements"
    ]
  },
  {
    "slug": "laliga-data-breach-exposes-fans-personal-informati-47226265",
    "title": "LaLiga Data Breach Exposes Fans Personal Information",
    "summary": "LaLiga disclosed a breach that exposed personal data of its users and some affiliated clubs. The theft included names, email addresses, phone numbers, and other sensitive information, raising significant privacy and regulatory concerns. LaLiga notified affected users, launched incident response, and is cooperating with law enforcement to trace the attack.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/spanish-laliga-confirms-hackers-stole-soccer-fans-personal-data/",
    "publishedAt": "2026-11-23T18:38:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "laliga-data-breach-exposes-fans-personal-informati",
      "article-47226265",
      "47226265",
      "laliga-data-breach-exposes-fans-personal-informati-2c4a18",
      "laliga-data-breach-exposes-fans-personal-information"
    ]
  },
  {
    "slug": "misp-advises-hotfix-for-pre-v2-5-53-vulnerabilitie-92ccdb3b",
    "title": "MISP Advises Hotfix for Pre-v2.5.53 Vulnerabilities",
    "summary": "The Canadian Centre for Cyber Security issued advisory AV26-1197, noting that MISP versions prior to 2.5.53 contain multiple security vulnerabilities. A quick hotfix, version 2.5.53, addresses the identified flaws, and administrators are urged to review the provided links and apply updates as soon as possible. Failure to patch may leave MISP installations vulnerable to exploitation of the disclosed weaknesses.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/misp-security-advisory-av26-1197",
    "publishedAt": "2026-11-23T18:14:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "misp-advises-hotfix-for-pre-v2-5-53-vulnerabilitie",
      "article-92ccdb3b",
      "92ccdb3b",
      "misp-advises-hotfix-for-pre-v2-5-53-vulnerabilitie-30e927",
      "misp-advises-hotfix-for-pre-v2-5-53-vulnerabilities"
    ]
  },
  {
    "slug": "ai-detects-new-attacks-by-learning-normal-behavior-7b3d2c9c",
    "title": "AI Detects New Attacks by Learning Normal Behavior",
    "summary": "Arctic Wolf's AI threat detection platform identifies new attacks by learning normal user, device, and system behavior. The system flags deviations that may indicate emerging threats, enabling security teams to investigate and respond to previously unseen attacks. This approach expands detection coverage beyond signature-based methods, improving overall security posture for organizations worldwide.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/glossary-uk/what-is-ai-threat-detection/",
    "publishedAt": "2026-11-23T17:52:11.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Arctic Wolf",
        "sourceUrl": "https://arcticwolf.com/resources/glossary/ai-threat-detection/"
      }
    ],
    "aliases": [
      "ai-detects-new-attacks-by-learning-normal-behavior",
      "article-7b3d2c9c",
      "7b3d2c9c",
      "ai-detects-new-attacks-by-learning-normal-behavior-4e86f0"
    ]
  },
  {
    "slug": "new-framework-traces-decade-of-ransomware-actors-a995d0f9",
    "title": "New Framework Traces Decade of Ransomware Actors",
    "summary": "A new attribution framework enables security teams to trace ransomware actors across a decade of operations. The framework aggregates metadata from ransomware campaigns, correlating signatures and infrastructure to identify individual threat actors, thereby improving threat intelligence and response. Security teams can adopt the framework to enhance attribution accuracy, integrate with existing SIEMs, and prioritize defensive measures against identified actors.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/alias-researcher-unmasked-ransomware-actors",
    "publishedAt": "2026-11-23T17:45:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "new-framework-traces-decade-of-ransomware-actors",
      "article-a995d0f9",
      "a995d0f9",
      "new-framework-traces-decade-of-ransomware-actors-392cc2"
    ]
  },
  {
    "slug": "webworm-modifies-softether-vpn-to-evade-detection-75f1fbe0",
    "title": "Webworm Modifies SoftEther VPN to Evade Detection",
    "summary": "The China-aligned threat actor Webworm is suspected of deploying a custom SoftEther VPN Bridge variant designed to conceal itself from security tools. The modified bridge removes recognizable detection fingerprints and masquerades as network-monitoring software, enabling covert remote access to compromised networks. Defenders should monitor anomalous VPN traffic, verify SoftEther installations against known hashes, and apply patches to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/webworm-suspected-of-modifying.html",
    "publishedAt": "2026-11-23T17:45:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "webworm-modifies-softether-vpn-to-evade-detection",
      "article-75f1fbe0",
      "75f1fbe0",
      "webworm-modifies-softether-vpn-to-evade-detection-514f20"
    ]
  },
  {
    "slug": "usn-9187-1-libssh-vulnerabilities-77c22071",
    "title": "USN-9187-1: libssh vulnerabilities",
    "summary": "This issue only affected Ubuntu 16.04 LTS, Ubuntu 18.04 LTS, and Ubuntu 20.04 LTS. (CVE-2026-59843) Mikhail Ilin and Saransh Rana discovered that libssh did not correctly sanitize shell metacharacters when expanding usernames in ProxyCommand strings. An attacker could possibly use this issue to obtain sensitive information. (CVE-2026-59846) Ben Smyth discovered that libssh incorrectly verified AES-GCM authentication tags when built with the OpenSSL backend.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9187-1",
    "publishedAt": "2026-11-23T17:32:05.000Z",
    "cves": [
      "CVE-2026-59843",
      "CVE-2026-59846",
      "CVE-2026-59847",
      "CVE-2026-59848",
      "CVE-2026-59850"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9187-1-libssh-vulnerabilities",
      "article-77c22071",
      "77c22071",
      "usn-9187-1-libssh-vulnerabilities-7e77e6"
    ]
  },
  {
    "slug": "crowdstrike-acquires-zscaler-for-43-9b-7e7a2503",
    "title": "CrowdStrike Acquires Zscaler for $43.9B",
    "summary": "CrowdStrike announced the acquisition of Zscaler in a $43.9 billion deal, aiming to expand its AI-driven security portfolio. The purchase reflects CEO George Kurtz’s vision of building the largest AI safety and security company worldwide. The transaction is expected to integrate Zscaler’s cloud security platform with CrowdStrike’s endpoint protection, pending regulatory approval.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/crowdstrike-zscaler",
    "publishedAt": "2026-11-23T17:14:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-acquires-zscaler-for-43-9b",
      "article-7e7a2503",
      "7e7a2503",
      "crowdstrike-acquires-zscaler-for-43-9b-36aaca"
    ]
  },
  {
    "slug": "globetopper-suffers-cyberattack-causing-financial-3f431e41",
    "title": "GlobeTopper Suffers Cyberattack Causing Financial and Operational Losses",
    "summary": "B2B top-up solutions provider GlobeTopper suffered a cyberattack that disrupted its business operations and compromised digital assets. Attackers redeemed digital gift cards valued at $70,000, resulting in an estimated total operational revenue loss of $2.5 million for the company. Organizations should review digital asset transaction controls and implement strict access monitoring on top-up management systems.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/globetopper-loses-25-million-after-hackers-steal-70k-in-gift-cards/",
    "publishedAt": "2026-11-23T16:50:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "globetopper-suffers-cyberattack-causing-financial",
      "article-3f431e41",
      "3f431e41",
      "globetopper-suffers-cyberattack-causing-financial-374c76",
      "globetopper-suffers-cyberattack-causing-financial-and-operat"
    ]
  },
  {
    "slug": "china-nexus-actor-exploits-medical-imaging-zero-da-91214183",
    "title": "China-Nexus Actor Exploits Medical Imaging Zero-Day via Cairn",
    "summary": "A China-nexus threat actor targeted East Asian universities by deploying the Cairn penetration testing tool to execute attacks. The adversary exploited an unpatched zero-day vulnerability in a medical imaging application, escalating privileges from flaw discovery to root access within 11 minutes. Security teams must monitor for unauthorized Cairn execution and audit medical imaging software for unauthenticated access vectors.",
    "category": "Nation State",
    "severity": "CRITICAL",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/ai-agents-flaw-discovery-root-access-11-minutes",
    "publishedAt": "2026-11-23T16:17:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "china-nexus-actor-exploits-medical-imaging-zero-da",
      "article-91214183",
      "91214183",
      "china-nexus-actor-exploits-medical-imaging-zero-da-268456",
      "china-nexus-actor-exploits-medical-imaging-zero-day-via-cair"
    ]
  },
  {
    "slug": "red-hat-issues-freerdp-patch-for-rhel-9-8be1dfa3",
    "title": "Red Hat Issues freerdp Patch for RHEL 9",
    "summary": "Red Hat released an important freerdp update for RHEL 9, addressing several security vulnerabilities. The flaws could allow attackers to execute arbitrary code or exfiltrate session data, yet no active exploitation has been reported. Security teams should apply the freerdp patch immediately, verify remote desktop configurations, and monitor for suspicious activity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102399",
    "publishedAt": "2026-11-23T16:09:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-freerdp-patch-for-rhel-9",
      "article-8be1dfa3",
      "8be1dfa3",
      "red-hat-issues-freerdp-patch-for-rhel-9-2ee162"
    ]
  },
  {
    "slug": "red-hat-issues-important-netpbm-patch-for-rhel-10-55631f55",
    "title": "Red Hat Issues Important Netpbm Patch for RHEL 10",
    "summary": "Red Hat released a security update for the netpbm package affecting Red Hat Enterprise Linux 10 installations. The underlying security flaws received an Important severity rating from Red Hat Product Security, with detailed base scores published in accompanying advisories. System administrators should apply the updated netpbm packages via standard Red Hat Enterprise Linux package management systems.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102569",
    "publishedAt": "2026-11-23T16:05:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-netpbm-patch-for-rhel-10",
      "article-55631f55",
      "55631f55",
      "red-hat-issues-important-netpbm-patch-for-rhel-10-2ee16a"
    ]
  },
  {
    "slug": "red-hat-releases-netpbm-update-for-rhel-9-8-eus-c9c0afbb",
    "title": "Red Hat Releases Netpbm Update for RHEL 9.8 EUS",
    "summary": "Red Hat issued a security update addressing vulnerabilities in the netpbm package for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security categorized the security impact as Important, providing Common Vulnerability Scoring System base scores across referenced advisories. Administrators managing Extended Update Support environments must deploy the updated netpbm packages to mitigate potential security risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102542",
    "publishedAt": "2026-11-23T16:03:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-netpbm-update-for-rhel-9-8-eus",
      "article-c9c0afbb",
      "c9c0afbb",
      "red-hat-releases-netpbm-update-for-rhel-9-8-eus-2ee169"
    ]
  },
  {
    "slug": "microsoft-security-response-center-acknowledges-cv-ec77efd5",
    "title": "Microsoft Security Response Center acknowledges CVE-2026-69291",
    "summary": "Microsoft Security Response Center acknowledges CVE-2026-69291, a remote code execution flaw in the Windows Volume Manager Extension Driver. The vulnerability allows attackers to execute arbitrary code via crafted volume manager requests that can be triggered by malicious input, potentially compromising affected systems. A patch is available; administrators should apply the update promptly to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-69291",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-69291"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-security-response-center-acknowledges-cv",
      "article-ec77efd5",
      "ec77efd5",
      "microsoft-security-response-center-acknowledges-cv-745a69",
      "microsoft-security-response-center-acknowledges-cve-2026-692"
    ]
  },
  {
    "slug": "microsoft-security-response-center-acknowledges-cv-4a4a964b",
    "title": "Microsoft Security Response Center acknowledges CVE-2026-87697",
    "summary": "Microsoft Security Response Center acknowledges CVE-2026-87697, a remote code execution flaw in the .NET runtime. The vulnerability permits attackers to run arbitrary code through crafted .NET assemblies that can be triggered by malicious input, potentially compromising affected applications. A patch is available; developers should update .NET to the latest version to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-87697",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-87697"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-security-response-center-acknowledges-cv",
      "article-4a4a964b",
      "4a4a964b",
      "microsoft-security-response-center-acknowledges-cv-743f14",
      "microsoft-security-response-center-acknowledges-cve-2026-876"
    ]
  },
  {
    "slug": "asp-net-core-denial-of-service-cve-2026-96233-3fd47404",
    "title": "ASP.NET Core Denial of Service CVE-2026-96233",
    "summary": "A denial-of-service flaw in ASP.NET Core, CVE-2026-96233, lets attackers exhaust server resources via crafted HTTP requests. The flaw arises from improper input validation in request parsing, and no public exploit is known, but it can cause service interruption. Microsoft released a patch that corrects the parsing logic; administrators should apply the latest ASP.NET Core update or vendor hotfix.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96233",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-96233"
    ],
    "additionalSources": [],
    "aliases": [
      "asp-net-core-denial-of-service-cve-2026-96233",
      "article-3fd47404",
      "3fd47404",
      "asp-net-core-denial-of-service-cve-2026-96233-743180"
    ]
  },
  {
    "slug": "windows-message-queuing-dos-cve-2026-119848-cf733baf",
    "title": "Windows Message Queuing DoS CVE-2026-119848",
    "summary": "CVE-2026-119848 is a denial-of-service flaw in Windows Message Queuing that lets attackers crash the service with malformed queue messages. The vulnerability stems from unchecked bounds during message deserialization, and no active exploitation is known, but it can cause repeated service restarts. Microsoft released a patch that validates message lengths; administrators should apply Windows update or vendor hotfix to mitigate DoS.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-119848",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-119848"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-message-queuing-dos-cve-2026-119848",
      "article-cf733baf",
      "cf733baf",
      "windows-message-queuing-dos-cve-2026-119848-1fe894"
    ]
  },
  {
    "slug": "microsoft-acknowledges-cve-2026-70175-asp-net-core-eca1996d",
    "title": "Microsoft Acknowledges CVE-2026-70175 ASP.NET Core Privilege Bug",
    "summary": "Microsoft has acknowledged CVE-2026-70175, an elevation of privilege flaw in ASP.NET Core that could let attackers gain higher privileges on affected systems. The flaw stems from improper validation of user input during authentication, allowing privilege escalation without authentication, though no public exploit exists. Microsoft issued an update; users should watch for future patches and apply any subsequent fixes when available.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70175",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-70175"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-cve-2026-70175-asp-net-core",
      "article-eca1996d",
      "eca1996d",
      "microsoft-acknowledges-cve-2026-70175-asp-net-core-74506d",
      "microsoft-acknowledges-cve-2026-70175-asp-net-core-privilege"
    ]
  },
  {
    "slug": "microsoft-acknowledges-cve-2026-96225-net-privileg-773963d1",
    "title": "Microsoft Acknowledges CVE-2026-96225 .NET Privilege Bug",
    "summary": "Microsoft has acknowledged CVE-2026-96225, an elevation of privilege flaw in .NET that could allow attackers to gain higher privileges on affected systems. The vulnerability arises from validation errors during authentication, enabling privilege escalation without authentication, though no public exploit has been reported. Microsoft issued an update; users should watch for future patches and apply any subsequent fixes when available.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96225",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-96225"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-cve-2026-96225-net-privileg",
      "article-773963d1",
      "773963d1",
      "microsoft-acknowledges-cve-2026-96225-net-privileg-743181",
      "microsoft-acknowledges-cve-2026-96225-net-privilege-bug"
    ]
  },
  {
    "slug": "microsoft-acknowledges-cve-2026-78462-in-vs-code-8068fa08",
    "title": "Microsoft Acknowledges CVE-2026-78462 in VS Code",
    "summary": "Microsoft acknowledges CVE-2026-78462, a Visual Studio Code security feature bypass vulnerability. The issue could allow attackers to bypass security controls, but no public exploit or PoC has been disclosed. Microsoft has issued an informational update; no patch or mitigation is required at this time, and the vulnerability is tracked in the Microsoft Security Advisory database.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-78462",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-78462"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-cve-2026-78462-in-vs-code",
      "article-8068fa08",
      "8068fa08",
      "microsoft-acknowledges-cve-2026-78462-in-vs-code-744cbf"
    ]
  },
  {
    "slug": "microsoft-acknowledges-cve-2026-72965-in-windows-b3ad5032",
    "title": "Microsoft Acknowledges CVE-2026-72965 in Windows",
    "summary": "Microsoft acknowledges CVE-2026-72965, a Windows WebClient Service elevation of privilege vulnerability. The flaw could allow local users to gain higher privileges, but no public exploit or PoC has been disclosed. Microsoft has issued an informational update; no patch or mitigation is required at this time, and the vulnerability is tracked in the Microsoft Security Advisory database.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-72965",
    "publishedAt": "2026-11-23T16:00:00.000Z",
    "cves": [
      "CVE-2026-72965"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-cve-2026-72965-in-windows",
      "article-b3ad5032",
      "b3ad5032",
      "microsoft-acknowledges-cve-2026-72965-in-windows-744f66"
    ]
  },
  {
    "slug": "splunk-advisory-affects-multiple-products-requires-9d6cde7f",
    "title": "Splunk Advisory Affects Multiple Products, Requires Upgrade",
    "summary": "Splunk issued a security advisory (AV26-1196) affecting multiple products, including Enterprise, Enterprise Security, PCI Compliance, and SOAR, with versions prior to specified releases. The vulnerabilities could enable unauthorized access or privilege escalation within Splunk deployments, but no active exploitation has been confirmed. Administrators should review the provided links, upgrade to newer versions, and enforce access controls to mitigate risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/splunk-security-advisory-av26-1196",
    "publishedAt": "2026-11-23T15:52:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "splunk-advisory-affects-multiple-products-requires",
      "article-9d6cde7f",
      "9d6cde7f",
      "splunk-advisory-affects-multiple-products-requires-83b887",
      "splunk-advisory-affects-multiple-products-requires-upgrade"
    ]
  },
  {
    "slug": "microsoft-patches-exploited-azure-api-management-f-83470f49",
    "title": "Microsoft Patches Exploited Azure API Management Flaw Targeting Energy Sector Credentials",
    "summary": "Microsoft patched an Azure API Management flaw that attackers exploited to target Norwegian energy companies and other sectors. The vulnerability let attackers read protected configuration data and credential vaults, potentially exposing API secrets and sensitive information. Microsoft urged affected customers to apply the update or configuration changes immediately to block unauthorized credential access.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/azure-flaw-exploited-to-target-secrets-at-norwegian-energy-firms/",
    "publishedAt": "2026-11-23T15:47:40.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/security/microsoft-azure-flaw-exploited-to-steal-customers-api-credentials/"
      }
    ],
    "aliases": [
      "microsoft-patches-exploited-azure-api-management-f",
      "article-83470f49",
      "83470f49",
      "microsoft-patches-exploited-azure-api-management-f-5e6aa8",
      "microsoft-patches-exploited-azure-api-management-flaw-target"
    ]
  },
  {
    "slug": "hackers-exploit-microsoft-cloud-flaw-against-norwe-81f7b48b",
    "title": "Hackers Exploit Microsoft Cloud Flaw Against Norwegian Energy Firms",
    "summary": "Hackers exploited a Microsoft cloud security vulnerability to target sensitive credentials at Equinor and Skagerak Energi. The flaw permitted unauthorized access to configuration secrets, potentially exposing login information, though no confirmed data loss was reported. Microsoft issued a patch and urged affected customers to update their Azure services to close the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/norway-microsoft-cyberattack-equinor",
    "publishedAt": "2026-11-23T15:45:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-microsoft-cloud-flaw-against-norwe",
      "article-81f7b48b",
      "81f7b48b",
      "hackers-exploit-microsoft-cloud-flaw-against-norwe-199bbb",
      "hackers-exploit-microsoft-cloud-flaw-against-norwegian-energ"
    ]
  },
  {
    "slug": "spring-ai-vulnerability-affects-multiple-versions-324b9980",
    "title": "Spring AI Vulnerability Affects Multiple Versions",
    "summary": "Spring AI versions prior to 1.0.11, 1.1.10, 2.0.2.1, and 2.0.3 suffer a broken logical grouping expression flaw in TypesenseFilterExpressionConverter. The flaw can cause improper query parsing, potentially exposing data or causing denial of service. Upgrade to the latest Spring AI release or apply the vendor patch to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/spring-security-advisory-av26-1195",
    "publishedAt": "2026-11-23T15:41:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "spring-ai-vulnerability-affects-multiple-versions",
      "article-324b9980",
      "324b9980",
      "spring-ai-vulnerability-affects-multiple-versions-7742fe"
    ]
  },
  {
    "slug": "meta-muse-ai-hallucinates-shares-external-app-data-840c6d88",
    "title": "Meta Muse AI Hallucinates, Shares External App Data",
    "summary": "Meta’s Muse AI agent reportedly accessed data from other applications and produced hallucinated responses during user interactions. The incident highlights limitations in the model’s knowledge boundaries and the risk of unintended data leakage. Meta should refine data access controls and improve hallucination mitigation to safeguard user privacy and information integrity.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/ai/2026/11/muse-ai-got-nosy-and-started-making-things-up-meta-insiders-say",
    "publishedAt": "2026-11-23T15:37:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "meta-muse-ai-hallucinates-shares-external-app-data",
      "article-840c6d88",
      "840c6d88",
      "meta-muse-ai-hallucinates-shares-external-app-data-64292a"
    ]
  },
  {
    "slug": "apache-solr-health-check-vulnerability-disclosed-084e3bca",
    "title": "Apache Solr Health-Check Vulnerability Disclosed",
    "summary": "Apache Solr versions prior to 10.1.0 and 9.11.0 contain a health-check flaw that can trigger unintended functionality, referenced by CVE-2026-86312. The flaw allows attackers to invoke the ping endpoint, potentially causing unauthorized actions or information disclosure within the Solr instance. Administrators should upgrade to Solr 10.1.0 or later, or apply the vendor-issued patch, and verify that health-check endpoints are secured.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/apache-security-advisory-av26-1194",
    "publishedAt": "2026-11-23T15:34:03.000Z",
    "cves": [
      "CVE-2026-86312"
    ],
    "additionalSources": [],
    "aliases": [
      "apache-solr-health-check-vulnerability-disclosed",
      "article-084e3bca",
      "084e3bca",
      "apache-solr-health-check-vulnerability-disclosed-5d2c79"
    ]
  },
  {
    "slug": "rhel9-podman-update-fixes-important-security-flaw-88343d44",
    "title": "RHEL9 Podman Update Fixes Important Security Flaw",
    "summary": "Red Hat released a security update for the podman container engine on RHEL9 to address a critical flaw. The patch fixes an undisclosed vulnerability rated Important by Red Hat Product Security, with CVSS scores linked through CVE references. Administrators should apply the podman update immediately to prevent exploitation and maintain secure container orchestration environments.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102296",
    "publishedAt": "2026-11-23T15:32:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel9-podman-update-fixes-important-security-flaw",
      "article-88343d44",
      "88343d44",
      "rhel9-podman-update-fixes-important-security-flaw-2ee15f"
    ]
  },
  {
    "slug": "rhsa-2026-102507-important-webkit2gtk3-security-up-cac88745",
    "title": "RHSA-2026:102507: Important: webkit2gtk3 security update",
    "summary": "An update for webkit2gtk3 is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102507",
    "publishedAt": "2026-11-23T15:30:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102507-important-webkit2gtk3-security-up",
      "article-cac88745",
      "cac88745",
      "rhsa-2026-102507-important-webkit2gtk3-security-up-2ee169",
      "rhsa-2026-102507-important-webkit2gtk3-security-update"
    ]
  },
  {
    "slug": "grafana-update-addresses-remote-code-execution-vul-55e19624",
    "title": "Grafana Update Addresses Remote Code Execution Vulnerabilities",
    "summary": "A Grafana security update for Red Hat Enterprise Linux 10 addresses multiple vulnerabilities that could enable remote code execution through the web interface. The vulnerabilities are rated Important, with CVSS base scores listed in the CVE references, indicating high severity potential for exploitation. Red Hat has released the update; administrators should apply the patch immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102502",
    "publishedAt": "2026-11-23T15:25:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "grafana-update-addresses-remote-code-execution-vul",
      "article-55e19624",
      "55e19624",
      "grafana-update-addresses-remote-code-execution-vul-2ee169",
      "grafana-update-addresses-remote-code-execution-vulnerabiliti"
    ]
  },
  {
    "slug": "synology-dsm-vulnerability-affects-versions-before-f780faa3",
    "title": "Synology DSM Vulnerability Affects Versions Before 7.4.1",
    "summary": "DiskStation Manager (DSM) versions prior to 7.4.1 contain a vulnerability that could allow unauthorized access or privilege escalation. The flaw permits attackers to exploit a logic error in DSM’s authentication flow, potentially bypassing user credentials and gaining elevated privileges. Administrators should upgrade to the latest DSM release or apply the vendor-issued patch, and enforce strict access controls to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/synology-security-advisory-av26-1193",
    "publishedAt": "2026-11-23T15:23:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "synology-dsm-vulnerability-affects-versions-before",
      "article-f780faa3",
      "f780faa3",
      "synology-dsm-vulnerability-affects-versions-before-741c15",
      "synology-dsm-vulnerability-affects-versions-before-7-4-1"
    ]
  },
  {
    "slug": "rhsa-2026-100561-important-openjdk-11-0-33-1-els-s-966b21de",
    "title": "RHSA-2026:100561: Important: OpenJDK 11.0.33.1 ELS Security Update For Portable Linux Builds",
    "summary": "An update is now available for OpenJDK. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100561",
    "publishedAt": "2026-11-23T15:22:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100561-important-openjdk-11-0-33-1-els-s",
      "article-966b21de",
      "966b21de",
      "rhsa-2026-100561-important-openjdk-11-0-33-1-els-s-2ee081",
      "rhsa-2026-100561-important-openjdk-11-0-33-1-els-security-up"
    ]
  },
  {
    "slug": "red-hat-updates-openjdk-11-0-33-1-windows-25229d68",
    "title": "Red Hat Updates OpenJDK 11.0.33.1 Windows",
    "summary": "Red Hat released an OpenJDK 11.0.33.1 ELS update for Windows, fixing vulnerabilities that could allow remote code execution via Java. The advisory lists multiple CVEs, each with a CVSS score marked Important, but no specific CVE IDs are named. Red Hat urges immediate application; no work-arounds are provided, and the patch is available through standard ELS channels.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100562",
    "publishedAt": "2026-11-23T15:20:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-openjdk-11-0-33-1-windows",
      "article-25229d68",
      "25229d68",
      "red-hat-updates-openjdk-11-0-33-1-windows-2ee081"
    ]
  },
  {
    "slug": "fbi-ncic-database-targeted-in-second-cyber-inciden-c85df571",
    "title": "FBI NCIC Database Targeted in Second Cyber Incident",
    "summary": "The FBI’s National Crime Information Center (NCIC) database was targeted in a second cyber incident reported this month. The attack compromised access to records on fugitives, warrants, criminal histories, and missing persons, potentially exposing sensitive law-enforcement data. Investigators are assessing the breach scope, and security teams should monitor for unauthorized access attempts to similar databases.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/23rd-november-threat-intelligence-report/",
    "publishedAt": "2026-11-23T15:16:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fbi-ncic-database-targeted-in-second-cyber-inciden",
      "article-c85df571",
      "c85df571",
      "fbi-ncic-database-targeted-in-second-cyber-inciden-119758",
      "fbi-ncic-database-targeted-in-second-cyber-incident"
    ]
  },
  {
    "slug": "rhsa-2026-102405-important-qt5-qtdeclarative-secur-71c56100",
    "title": "RHSA-2026:102405: Important: qt5-qtdeclarative security update",
    "summary": "An update for qt5-qtdeclarative is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102405",
    "publishedAt": "2026-11-23T15:15:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102405-important-qt5-qtdeclarative-secur",
      "article-71c56100",
      "71c56100",
      "rhsa-2026-102405-important-qt5-qtdeclarative-secur-2ee165",
      "rhsa-2026-102405-important-qt5-qtdeclarative-security-update"
    ]
  },
  {
    "slug": "trump-names-davies-national-cyber-czar-8b4bb737",
    "title": "Trump Names Davies National Cyber Czar",
    "summary": "President Trump has confirmed appointing Pentagon CIO John Davies as national cyber director after widespread support. Davies, who has served as acting director, will lead DoD cyber strategy and coordinate federal cyber defense efforts. The appointment aims to strengthen overall U.S. cyber posture, contingent on interagency cooperation and resource allocation.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/kirsten-davies-trump-intends-nominate-national-cyber-director",
    "publishedAt": "2026-11-23T15:14:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "trump-names-davies-national-cyber-czar",
      "article-8b4bb737",
      "8b4bb737",
      "trump-names-davies-national-cyber-czar-7c9797"
    ]
  },
  {
    "slug": "red-hat-updates-tigervnc-for-rhel-9-6-51c027f3",
    "title": "Red Hat Updates tigervnc for RHEL 9.6",
    "summary": "Red Hat released a tigervnc update for RHEL 9.6 EUS, fixing vulnerabilities that could enable remote code execution via the VNC server. The advisory lists multiple CVEs, each with a CVSS score marked Important, but no specific CVE IDs are named. Red Hat urges immediate application; no work-arounds are offered, and the patch is available through standard EUS channels.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102407",
    "publishedAt": "2026-11-23T15:12:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-tigervnc-for-rhel-9-6",
      "article-51c027f3",
      "51c027f3",
      "red-hat-updates-tigervnc-for-rhel-9-6-2ee165"
    ]
  },
  {
    "slug": "jetbrains-advises-updates-for-multiple-product-vul-f887450b",
    "title": "JetBrains Advises Updates for Multiple Product Vulnerabilities",
    "summary": "JetBrains announced vulnerabilities affecting Junie, Junie CLI, and Junie GitHub Action, with affected versions listed in advisory AV26-1192. The flaws stem from insufficient input validation and insecure configuration defaults, enabling unauthorized code execution or privilege escalation, though no active exploitation has been reported. JetBrains recommends applying the latest patches for all affected versions and reviewing configuration settings to mitigate risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/jetbrains-security-advisory-av26-1192",
    "publishedAt": "2026-11-23T15:11:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "jetbrains-advises-updates-for-multiple-product-vul",
      "article-f887450b",
      "f887450b",
      "jetbrains-advises-updates-for-multiple-product-vul-53189a",
      "jetbrains-advises-updates-for-multiple-product-vulnerabiliti"
    ]
  },
  {
    "slug": "multiple-high-impact-vulnerabilities-exploit-remot-1431ab6d",
    "title": "Multiple High-Impact Vulnerabilities Exploit Remote Code Paths",
    "summary": "This week’s recap highlights several high-impact vulnerabilities, including a VMware 0-Day, Java4Shell, NGINX2Root, and Ruby2Shell, that exploit remote code execution paths. The flaws enable attackers to pivot from one compromised system to another, expanding lateral movement. Vendors have released patches; security teams should apply them promptly and monitor for exploitation attempts.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/weekly-recap-vmware-0-day-java4shell.html",
    "publishedAt": "2026-11-23T15:10:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "multiple-high-impact-vulnerabilities-exploit-remot",
      "article-1431ab6d",
      "1431ab6d",
      "multiple-high-impact-vulnerabilities-exploit-remot-18c20e",
      "multiple-high-impact-vulnerabilities-exploit-remote-code-pat"
    ]
  },
  {
    "slug": "n-able-releases-patch-for-critical-cve-2026-134624-2c7597c5",
    "title": "N-Able Releases Patch for Critical CVE-2026-134624",
    "summary": "N-Able disclosed a critical flaw, CVE-2026-134624, that was exploited during a Mail Assure cyberattack targeting its services. The vulnerability allowed attackers to gain unauthorized access to administrative functions, potentially enabling data exfiltration or service disruption. N-Able released a patch and advised customers to apply the update immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/n-able-patches-critical-flaw-disclosed-after-mail-assure-cyberattack/",
    "publishedAt": "2026-11-23T15:06:49.000Z",
    "cves": [
      "CVE-2026-134624"
    ],
    "additionalSources": [],
    "aliases": [
      "n-able-releases-patch-for-critical-cve-2026-134624",
      "article-2c7597c5",
      "2c7597c5",
      "n-able-releases-patch-for-critical-cve-2026-134624-78d0e6"
    ]
  },
  {
    "slug": "gl-inet-cloud-compromise-deploys-malware-to-router-c6aa16cc",
    "title": "GL.iNet Cloud Compromise Deploys Malware to Routers and KVMs",
    "summary": "Attackers compromised GL.iNet’s GoodCloud remote-management service and used it to install malware on connected routers and KVM devices. The breach exploited unauthorized cloud access, enabling remote code execution on device firmware and allowing persistent control and data exfiltration. GL.iNet has not yet released a patch; teams should isolate affected devices, update firmware when available, and monitor for anomalous traffic.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/gl-inet-cloud-compromise-malware-backdoors/",
    "publishedAt": "2026-11-23T15:05:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gl-inet-cloud-compromise-deploys-malware-to-router",
      "article-c6aa16cc",
      "c6aa16cc",
      "gl-inet-cloud-compromise-deploys-malware-to-router-281202",
      "gl-inet-cloud-compromise-deploys-malware-to-routers-and-kvms"
    ]
  },
  {
    "slug": "red-hat-issues-important-update-for-qt5-qtdeclarat-a2de0e52",
    "title": "Red Hat Issues Important Update for qt5-qtdeclarative",
    "summary": "Red Hat released an important security update for qt5-qtdeclarative on RHEL9.4, correcting several memory corruption bugs in the Qt Declarative module. These flaws could allow local attackers to crash the application or potentially execute arbitrary code, with CVSS scores up to 8.3. Apply the patch through the standard RHEL9.4 update mechanism; no workarounds are provided.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102406",
    "publishedAt": "2026-11-23T15:02:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-update-for-qt5-qtdeclarat",
      "article-a2de0e52",
      "a2de0e52",
      "red-hat-issues-important-update-for-qt5-qtdeclarat-2ee165",
      "red-hat-issues-important-update-for-qt5-qtdeclarative"
    ]
  },
  {
    "slug": "red-hat-issues-important-update-for-tigervnc-3d563aba",
    "title": "Red Hat Issues Important Update for tigervnc",
    "summary": "Red Hat released an important security update for tigervnc on RHEL9.4, fixing multiple remote code execution flaws in the VNC server. The vulnerabilities enable unauthenticated attackers to run arbitrary code with the VNC service’s privileges, with CVSS scores up to 9.2. Apply the patch via the standard RHEL9.4 update channel; no workarounds are available.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102402",
    "publishedAt": "2026-11-23T15:02:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-update-for-tigervnc",
      "article-3d563aba",
      "3d563aba",
      "red-hat-issues-important-update-for-tigervnc-2ee165"
    ]
  },
  {
    "slug": "ai-agent-identity-gaps-span-multiple-platforms-666cfee6",
    "title": "AI Agent Identity Gaps Span Multiple Platforms",
    "summary": "AI agents operating across multiple platforms create security gaps when no single vendor can observe or control their actions, according to Token Security. The shared responsibility problem complicates agent identity, permission, and accountability management for organizations. Organizations should assign clear ownership and accountability for agent identities and permissions across platforms.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/ai-agents-are-creating-a-shared-responsibility-gap/",
    "publishedAt": "2026-11-23T15:00:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agent-identity-gaps-span-multiple-platforms",
      "article-666cfee6",
      "666cfee6",
      "ai-agent-identity-gaps-span-multiple-platforms-4aa78c"
    ]
  },
  {
    "slug": "huntress-begins-eu-data-hosting-in-frankfurt-12ff4d6c",
    "title": "Huntress Begins EU Data Hosting in Frankfurt",
    "summary": "Huntress has started European Union data hosting, with Phase 1 storing certain data in Frankfurt. The company said other data currently remains in the United States while Phase 2 is planned. Customers should review the available regional data residency details to fully understand which information is hosted in each location.",
    "category": "General",
    "severity": "LOW",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/eu-data-hosting",
    "publishedAt": "2026-11-23T15:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "huntress-begins-eu-data-hosting-in-frankfurt",
      "article-12ff4d6c",
      "12ff4d6c",
      "huntress-begins-eu-data-hosting-in-frankfurt-76a822"
    ]
  },
  {
    "slug": "red-hat-issues-tigervnc-security-update-822afb48",
    "title": "Red Hat Issues Tigervnc Security Update",
    "summary": "Red Hat released a security update for the tigervnc package on RHEL 9.2 for SAP solutions, addressing significant vulnerabilities. The patch fixes flaws that could enable remote code execution or privilege escalation via the VNC protocol, with CVSS scores linked to CVE references. Users should update the tigervnc package promptly to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102400",
    "publishedAt": "2026-11-23T14:56:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-tigervnc-security-update",
      "article-822afb48",
      "822afb48",
      "red-hat-issues-tigervnc-security-update-2ee165"
    ]
  },
  {
    "slug": "n-able-mailassure-vulnerability-advisory-9c081c10",
    "title": "N-Able MailAssure Vulnerability Advisory",
    "summary": "N-Able issued advisory AV26-1191 for MailAssure before 20261121.1943, noting a vulnerability. The flaw may allow unauthorized access to email data or compromise the integrity of mail transmissions, though no exploitation reports have been confirmed. Administrators are advised to review the provided links, apply available updates, and monitor for any anomalous activity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/n-able-security-advisory-av26-1191",
    "publishedAt": "2026-11-23T14:51:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-mailassure-vulnerability-advisory",
      "article-9c081c10",
      "9c081c10",
      "n-able-mailassure-vulnerability-advisory-761d20"
    ]
  },
  {
    "slug": "nvidia-reinstates-jensen-huang-as-ceo-04e4f5e8",
    "title": "NVIDIA Reinstates Jensen Huang as CEO",
    "summary": "NVIDIA reinstated Jensen Huang as president, chief executive officer, and board director on November 23, 2026, after a unanimous board vote. The decision took effect immediately, but an independent board inquiry into reports that a foreign intelligence effort targeted Huang remains open. NVIDIA said the board met with Huang several times and received additional information.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/nvidia-reinstates-jensen-huang/",
    "publishedAt": "2026-11-23T14:51:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nvidia-reinstates-jensen-huang-as-ceo",
      "article-04e4f5e8",
      "04e4f5e8",
      "nvidia-reinstates-jensen-huang-as-ceo-42eb2b"
    ]
  },
  {
    "slug": "wiz-research-reports-agentic-framework-cloud-intru-dbba3a3a",
    "title": "Wiz Research Reports Agentic Framework Cloud Intrusions",
    "summary": "Agentic offensive frameworks such as ARTEX are driving a surge in cloud intrusions, as reported by Wiz Research. These frameworks enable automated, high-velocity attacks that exploit misconfigurations and weak IAM controls, causing unauthorized data exfiltration and service disruption across cloud environments. Security teams should monitor for ARTEX-related activity, enforce least-privilege IAM, and deploy detection rules to spot noisy, machine-speed attacks.",
    "category": "General",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/agentic-attacks-artex-offensive-ai-frameworks",
    "publishedAt": "2026-11-23T14:46:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wiz-research-reports-agentic-framework-cloud-intru",
      "article-dbba3a3a",
      "dbba3a3a",
      "wiz-research-reports-agentic-framework-cloud-intru-44fa60",
      "wiz-research-reports-agentic-framework-cloud-intrusions"
    ]
  },
  {
    "slug": "red-hat-issues-cockpit-security-update-18124180",
    "title": "Red Hat Issues Cockpit Security Update",
    "summary": "Red Hat released a security update for the cockpit web console on RHEL 9.6 EUS, addressing critical vulnerabilities. The update resolves bugs that could allow authenticated users to execute arbitrary commands or elevate privileges, with CVSS scores available via CVE links. Administrators should apply the cockpit package update immediately to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102348",
    "publishedAt": "2026-11-23T14:44:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-cockpit-security-update",
      "article-18124180",
      "18124180",
      "red-hat-issues-cockpit-security-update-2ee162"
    ]
  },
  {
    "slug": "red-hat-advises-updates-for-multiple-rhel-versions-5f2cf303",
    "title": "Red Hat Advises Updates for Multiple RHEL Versions",
    "summary": "Red Hat issued advisory AV26-1190 affecting all RHEL 6-10, Hardened Images, and OpenShift 4-5. The advisory references multiple undisclosed vulnerabilities across these products, with no CVE IDs provided, implying potential remote code execution or privilege escalation risks. Administrators should review Red Hat’s links and apply available patches as soon as they are released.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/red-hat-security-advisory-av26-1190",
    "publishedAt": "2026-11-23T14:40:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-advises-updates-for-multiple-rhel-versions",
      "article-5f2cf303",
      "5f2cf303",
      "red-hat-advises-updates-for-multiple-rhel-versions-cc2e06"
    ]
  },
  {
    "slug": "red-hat-releases-critical-php-update-for-rhel9-ca848282",
    "title": "Red Hat Releases Critical PHP Update for RHEL9",
    "summary": "Red Hat released a critical PHP update for RHEL9, addressing multiple vulnerabilities. The update fixes several PHP bugs that could allow remote code execution or privilege escalation; CVSS scores indicate high severity, though specific CVE IDs are not listed. Red Hat has made the update available through standard repositories; administrators should install the latest php package to mitigate the risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102297",
    "publishedAt": "2026-11-23T14:37:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-php-update-for-rhel9",
      "article-ca848282",
      "ca848282",
      "red-hat-releases-critical-php-update-for-rhel9-2ee15f"
    ]
  },
  {
    "slug": "red-hat-issues-qt5-qtdeclarative-update-for-rhel-9-c62fa871",
    "title": "Red Hat Issues qt5-qtdeclarative Update for RHEL 9.2",
    "summary": "Red Hat released a security update for qt5-qtdeclarative on Red Enterprise Linux 9.2, targeting SAP Solution services. The patch addresses multiple CVE-linked vulnerabilities, each assigned a CVSS base score that denotes an important impact; no active exploitation is reported. Red Hat recommends applying the update through the standard package manager; no workaround is necessary.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102398",
    "publishedAt": "2026-11-23T14:35:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-qt5-qtdeclarative-update-for-rhel-9",
      "article-c62fa871",
      "c62fa871",
      "red-hat-issues-qt5-qtdeclarative-update-for-rhel-9-2ee162",
      "red-hat-issues-qt5-qtdeclarative-update-for-rhel-9-2"
    ]
  },
  {
    "slug": "eu-academy-access-disabled-after-data-exposure-att-13ac5f6c",
    "title": "EU Academy Access Disabled After Data Exposure Attack",
    "summary": "The European Commission disabled public access to the EU Academy platform after a cyberattack exposed users’ personal data. The breach involved unauthorized access to the learning platform’s database, potentially compromising contact information and enrollment records. The Commission has not disclosed the number of affected users; security teams should monitor for credential misuse and enforce stricter access controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/eu-academy-disabled/",
    "publishedAt": "2026-11-23T14:34:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "eu-academy-access-disabled-after-data-exposure-att",
      "article-13ac5f6c",
      "13ac5f6c",
      "eu-academy-access-disabled-after-data-exposure-att-af6925",
      "eu-academy-access-disabled-after-data-exposure-attack"
    ]
  },
  {
    "slug": "fake-claude-ai-app-distributes-revstealer-infostea-55053197",
    "title": "Fake Claude AI App Distributes RevStealer Infostealer",
    "summary": "Hackers distributed RevStealer, a Windows infostealer, via a counterfeit Claude AI desktop application promising free access. The 101 MB archive launches malware that harvests saved passwords, browser sessions, and cryptocurrency wallet data without opening a chat window. Security teams should verify application authenticity, block the download source, and deploy endpoint protection to detect and remove RevStealer.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-hide-revstealer-malware/",
    "publishedAt": "2026-11-23T14:24:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fake-claude-ai-app-distributes-revstealer-infostea",
      "article-55053197",
      "55053197",
      "fake-claude-ai-app-distributes-revstealer-infostea-4d4447",
      "fake-claude-ai-app-distributes-revstealer-infostealer"
    ]
  },
  {
    "slug": "red-hat-issues-qt6-update-for-rhel-10-0-eus-012d7a37",
    "title": "Red Hat Issues Qt6 Update for RHEL 10.0 EUS",
    "summary": "Red Enterprise Linux 10.0 EUS users receive a qt6-qtbase update addressing security issues in the Qt framework. The patch mitigates several vulnerabilities that could enable remote code execution or privilege escalation; CVSS scores are provided, but no public exploit is known. Red Hat recommends installing the update via the package manager; no work-arounds are available.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102350",
    "publishedAt": "2026-11-23T14:15:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-qt6-update-for-rhel-10-0-eus",
      "article-012d7a37",
      "012d7a37",
      "red-hat-issues-qt6-update-for-rhel-10-0-eus-2ee162"
    ]
  },
  {
    "slug": "vmcloudoor-backdoor-targets-alibaba-tencent-huawei-e4513407",
    "title": "Vmcloudoor Backdoor Targets Alibaba, Tencent, Huawei Clouds",
    "summary": "The newly discovered Linux backdoor, Vmcloudoor, covertly commandeers cloud servers, enabling attackers to exfiltrate sensitive files. Designed to infect virtual machines on Chinese cloud platforms, it masquerades as a legitimate cloud-management agent, reducing detection by administrators. Security teams should isolate affected instances, update to the latest vendor patches, and monitor for unauthorized agent activity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/vmcloudoor-malware/",
    "publishedAt": "2026-11-23T14:14:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vmcloudoor-backdoor-targets-alibaba-tencent-huawei",
      "article-e4513407",
      "e4513407",
      "vmcloudoor-backdoor-targets-alibaba-tencent-huawei-67482d",
      "vmcloudoor-backdoor-targets-alibaba-tencent-huawei-clouds"
    ]
  },
  {
    "slug": "red-hat-releases-critical-php-update-for-rhel-10-c415e070",
    "title": "Red Hat Releases Critical PHP Update for RHEL 10",
    "summary": "Red Enterprise Linux 10 users receive a php update addressing multiple security flaws in the PHP engine. The update fixes vulnerabilities that could allow remote code execution or privilege escalation; CVSS scores are listed, but no public exploit exists. Red Hat recommends applying the patch immediately via the standard package manager; no work-arounds are available.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102300",
    "publishedAt": "2026-11-23T14:02:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-php-update-for-rhel-10",
      "article-c415e070",
      "c415e070",
      "red-hat-releases-critical-php-update-for-rhel-10-2ee161"
    ]
  },
  {
    "slug": "cloudflare-builds-dns-testing-tools-for-internal-f-47f9c202",
    "title": "Cloudflare Builds DNS Testing Tools for Internal Framework",
    "summary": "Cloudflare developed internal tools to extend its testing framework for networking protocols, focusing on DNS. The new DNS tooling enables teams to probe protocol behavior, identify edge cases, and validate performance under load. These tools are available internally and can be leveraged by security teams to assess DNS resilience and detect anomalies.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/probing-dns-at-cloudflare/",
    "publishedAt": "2026-11-23T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-builds-dns-testing-tools-for-internal-f",
      "article-47f9c202",
      "47f9c202",
      "cloudflare-builds-dns-testing-tools-for-internal-f-6baf0f",
      "cloudflare-builds-dns-testing-tools-for-internal-framework"
    ]
  },
  {
    "slug": "usn-9186-1-tomcat-vulnerabilities-eede7db4",
    "title": "USN-9186-1: Tomcat vulnerabilities",
    "summary": "Tomcat 10 has been updated to 10.1.61 in Ubuntu 24.04 LTS, Ubuntu 26.04 LTS and Ubuntu 26.10. Tomcat 11 has been updated to 11.0.27 in Ubuntu 26.04 LTS and Ubuntu 26.10. In addition to security fixes, the updated packages contain bug fixes, new features, and possibly incompatible changes.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9186-1",
    "publishedAt": "2026-11-23T13:59:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9186-1-tomcat-vulnerabilities",
      "article-eede7db4",
      "eede7db4",
      "usn-9186-1-tomcat-vulnerabilities-7e77ea"
    ]
  },
  {
    "slug": "wordpress-site-hosts-13-clickfix-malware-traps-30fce793",
    "title": "WordPress Site Hosts 13 ClickFix Malware Traps",
    "summary": "A compromised WordPress site hosted 13 ClickFix traps from three malware kits, each presenting a fake security check. The traps use social engineering to convince users to paste malicious commands, a phishing kit requiring user interaction. Security teams should remove infected plugins, update WordPress core, and monitor for similar deceptive traps.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-plant-13-clickfix-traps/",
    "publishedAt": "2026-11-23T13:58:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wordpress-site-hosts-13-clickfix-malware-traps",
      "article-30fce793",
      "30fce793",
      "wordpress-site-hosts-13-clickfix-malware-traps-bb8ae7"
    ]
  },
  {
    "slug": "php-session-overwrite-flaw-enables-remote-code-exe-5c0c352c",
    "title": "PHP Session Overwrite Flaw Enables Remote Code Execution",
    "summary": "A PHP session overwrite flaw lets attackers inject malicious data during an interrupted overwrite, triggering deserialization and remote code execution on apps. The flaw, part of the PHP2Shell chain, exploits improper session data handling and can be triggered without authentication, risking server compromise. No patch exists yet; admins should disable session overwrite or apply custom fixes to block deserialization attacks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/phpaftershell-vulnerability-revives-php2shells-attack-path/",
    "publishedAt": "2026-11-23T13:58:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "php-session-overwrite-flaw-enables-remote-code-exe",
      "article-5c0c352c",
      "5c0c352c",
      "php-session-overwrite-flaw-enables-remote-code-exe-3953b3",
      "php-session-overwrite-flaw-enables-remote-code-execution"
    ]
  },
  {
    "slug": "red-hat-updates-containernetworking-plugins-for-se-83a9fa45",
    "title": "Red Hat Updates containernetworking-plugins for Security",
    "summary": "Red Hat released a security update for containernetworking-plugins on RHEL 9, fixing local privilege escalation via container networking. Each flaw has a CVSS base score, with the highest rated as Important, indicating a high exploitation risk though no active attacks have been reported. Apply the update immediately and monitor logs for privilege escalation attempts as the patch closes critical paths.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102292",
    "publishedAt": "2026-11-23T13:44:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-containernetworking-plugins-for-se",
      "article-83a9fa45",
      "83a9fa45",
      "red-hat-updates-containernetworking-plugins-for-se-2ee15f",
      "red-hat-updates-containernetworking-plugins-for-security"
    ]
  },
  {
    "slug": "ibm-issues-advisory-for-multiple-vulnerabilities-27fd094c",
    "title": "IBM Issues Advisory for Multiple Vulnerabilities",
    "summary": "IBM disclosed vulnerabilities in Engineering AI Hub up to 1.4.0 and Guardium Data Protection up to 12.2, enabling unauthorized access. Flaws stem from insufficient input validation and privilege checks, with CVSS 7.0-8.5, though no exploitation reported. Apply the latest firmware updates and review advisory links for mitigation guidance to secure deployments.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/ibm-security-advisory-av26-1189",
    "publishedAt": "2026-11-23T13:38:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ibm-issues-advisory-for-multiple-vulnerabilities",
      "article-27fd094c",
      "27fd094c",
      "ibm-issues-advisory-for-multiple-vulnerabilities-4d932a"
    ]
  },
  {
    "slug": "red-hat-updates-xdg-desktop-portal-for-security-8968871e",
    "title": "Red Hat Updates xdg-desktop-portal for Security",
    "summary": "Red Hat released a security update for xdg-desktop-portal on RHEL 8.8 Update Services, fixing local privilege escalation via desktop portal. Flaws carry CVSS scores, highest rated Important, indicating high exploitation risk but no active attacks reported. Apply the update immediately and monitor logs for privilege escalation attempts as the patch closes critical paths.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102290",
    "publishedAt": "2026-11-23T13:33:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-xdg-desktop-portal-for-security",
      "article-8968871e",
      "8968871e",
      "red-hat-updates-xdg-desktop-portal-for-security-2ee15f"
    ]
  },
  {
    "slug": "microsoft-tests-fix-for-windows-11-bluetooth-audio-654313d2",
    "title": "Microsoft Tests Fix for Windows 11 Bluetooth Audio Drops",
    "summary": "Microsoft is testing a fix for a long-standing Windows 11 Bluetooth audio quality drop affecting headphone users. The issue stems from an audio driver mis-handling of Bluetooth codec parameters, causing significant degradation but lacking remote code execution or data exfiltration. Microsoft has released a test build; users should install the forthcoming update once available to restore audio fidelity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-testing-fix-for-windows-11-bluetooth-audio-quality-drops/",
    "publishedAt": "2026-11-23T13:28:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-tests-fix-for-windows-11-bluetooth-audio",
      "article-654313d2",
      "654313d2",
      "microsoft-tests-fix-for-windows-11-bluetooth-audio-2318cc",
      "microsoft-tests-fix-for-windows-11-bluetooth-audio-drops"
    ]
  },
  {
    "slug": "gl-inet-devices-compromised-via-remote-management-d318a9d0",
    "title": "GL.iNet Devices Compromised via Remote Management Flaw",
    "summary": "Attackers exploited a flaw in GL.iNet’s GoodCloud remote management to push malware onto routers and KVMs, enabling code execution. The flaw stems from insufficient authentication checks, allowing unauthenticated attackers to upload and execute arbitrary firmware. GL.iNet recommends installing the latest firmware and disabling remote management until a patch is applied to mitigate the threat.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/gl-inet-routers-kvms-compromised-via-remote-management-service-flaw/",
    "publishedAt": "2026-11-23T13:26:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gl-inet-devices-compromised-via-remote-management",
      "article-d318a9d0",
      "d318a9d0",
      "gl-inet-devices-compromised-via-remote-management-4e72f5",
      "gl-inet-devices-compromised-via-remote-management-flaw"
    ]
  },
  {
    "slug": "binary-parser-vulnerability-enables-javascript-inj-4dfae943",
    "title": "binary-parser Vulnerability Enables JavaScript Injection",
    "summary": "A critical flaw in the binary-parser library (CVE-2026-134814) allows attackers controlling parser definitions to inject and execute arbitrary JavaScript code. The vulnerability, affecting binary-parser versions before 2.3.1, has a CVSS score of 9.2, indicating high exploitation potential and remote code execution. Users should upgrade to binary-parser 2.3.1 or later and apply any vendor-provided patches to mitigate the injection risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/critical-binary-parser-flaw-enables.html",
    "publishedAt": "2026-11-23T13:22:20.000Z",
    "cves": [
      "CVE-2026-134814"
    ],
    "additionalSources": [],
    "aliases": [
      "binary-parser-vulnerability-enables-javascript-inj",
      "article-4dfae943",
      "4dfae943",
      "binary-parser-vulnerability-enables-javascript-inj-3a1c13",
      "binary-parser-vulnerability-enables-javascript-injection"
    ]
  },
  {
    "slug": "linux-8-8-receives-important-webkit2gtk3-update-96d7cd26",
    "title": "Linux 8.8 Receives Important webkit2gtk3 Update",
    "summary": "Red Enterprise Linux 8.8 and SAP/Telecommunications Update Services receive an important security update for the webkit2gtk3 component. The advisory references CVSS base scores for each vulnerability, though specific CVE identifiers are not listed in the release. System administrators should install the update promptly to address the identified weaknesses and maintain platform integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102291",
    "publishedAt": "2026-11-23T13:12:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-8-8-receives-important-webkit2gtk3-update",
      "article-96d7cd26",
      "96d7cd26",
      "linux-8-8-receives-important-webkit2gtk3-update-2ee15f"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-rt-patch-for-rhel-9-2-f2ae7ef0",
    "title": "Red Hat Releases Kernel-RT Patch for RHEL 9.2",
    "summary": "Red Hat released an important kernel-rt update for RHEL 9.2 SAP services, addressing multiple security bugs. The update mitigates vulnerabilities that could allow privilege escalation or denial of service, though no active exploitation has been reported. Security teams should apply the kernel-rt patch immediately and verify kernel integrity to maintain system stability.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102294",
    "publishedAt": "2026-11-23T13:07:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-rt-patch-for-rhel-9-2",
      "article-f2ae7ef0",
      "f2ae7ef0",
      "red-hat-releases-kernel-rt-patch-for-rhel-9-2-2ee15f"
    ]
  },
  {
    "slug": "red-hat-releases-critical-php-8-2-security-update-f727fc43",
    "title": "Red Hat Releases Critical PHP 8.2 Security Update",
    "summary": "Red Hat released a critical update for php:8.2 on RHEL 9, fixing flaws that could allow remote code execution via malformed PHP input. The patch addresses multiple CVE-identified vulnerabilities with CVSS scores above 9.0, eliminating unauthenticated code injection risk. Apply RHSA-2026:102261 or upgrade to the latest php:8.2 image immediately, then verify application compatibility.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102261",
    "publishedAt": "2026-11-23T13:05:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-critical-php-8-2-security-update",
      "article-f727fc43",
      "f727fc43",
      "red-hat-releases-critical-php-8-2-security-update-2ee15e"
    ]
  },
  {
    "slug": "red-enterprise-linux-9-receives-critical-php-8-4-u-c973cf10",
    "title": "Red Enterprise Linux 9 Receives Critical php:8.4 Update",
    "summary": "Red Enterprise Linux 9 users receive a critical update for the php:8.4 module, addressing multiple security vulnerabilities. The advisory lists CVSS base scores for each flaw, but no specific CVE identifiers are disclosed in the release notes. Administrators should apply the update immediately to mitigate the risk, as the patch resolves the identified weaknesses.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102255",
    "publishedAt": "2026-11-23T13:04:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-enterprise-linux-9-receives-critical-php-8-4-u",
      "article-c973cf10",
      "c973cf10",
      "red-enterprise-linux-9-receives-critical-php-8-4-u-2ee15e",
      "red-enterprise-linux-9-receives-critical-php-8-4-update"
    ]
  },
  {
    "slug": "rhel-10-rsync-update-addresses-security-flaws-3f6b1e3f",
    "title": "RHEL 10 rsync Update Addresses Security Flaws",
    "summary": "Red Hat released an rsync update for RHEL 10, rated Important by Product Security, addressing multiple undisclosed vulnerabilities. Each vulnerability has an associated CVSS base score, but no specific CVE identifiers are listed in the advisory. Users should apply the update promptly to mitigate potential exploitation and ensure rsync integrity on their systems.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102293",
    "publishedAt": "2026-11-23T13:00:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel-10-rsync-update-addresses-security-flaws",
      "article-3f6b1e3f",
      "3f6b1e3f",
      "rhel-10-rsync-update-addresses-security-flaws-2ee15f"
    ]
  },
  {
    "slug": "cleverbridge-reports-credit-card-data-theft-c5388145",
    "title": "Cleverbridge Reports Credit Card Data Theft",
    "summary": "Cleverbridge confirmed a breach on November 4, 2026, during which attackers accessed stored credit card and CVV numbers from its e-commerce platform. The incident involved unauthorized activity detected by the platform, but the extent of affected clients and customer data remains unspecified. Cleverbridge urged affected customers to monitor accounts, change passwords, and contact payment processors for further protection.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/cleverbridge-data-breach-card-numbers-cvv/",
    "publishedAt": "2026-11-23T13:00:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cleverbridge-reports-credit-card-data-theft",
      "article-c5388145",
      "c5388145",
      "cleverbridge-reports-credit-card-data-theft-606837"
    ]
  },
  {
    "slug": "red-hat-issues-important-freerdp-update-4d3c810a",
    "title": "Red Hat Issues Important FreeRDP Update",
    "summary": "Red Hat released an important security update for the freerdp package on RHEL 8, addressing a flaw that could allow remote code execution via RDP packets. The vulnerability, rated CVSS 8.2 by Red Hat, enables attackers with network access to execute code on the target system.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102286",
    "publishedAt": "2026-11-23T12:58:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-freerdp-update",
      "article-4d3c810a",
      "4d3c810a",
      "red-hat-issues-important-freerdp-update-2ee15f"
    ]
  },
  {
    "slug": "iterm2-remote-code-execution-flaw-lets-hackers-run-1a5ec94c",
    "title": "iTerm2 Remote Code Execution Flaw Lets Hackers Run Malicious Commands by Displaying Crafted Files",
    "summary": "A security flaw in iTerm2, a macOS terminal emulator, lets attackers run commands when a user displays a specially crafted file in a vulnerable terminal session. The user does not have to run the file as a script or paste a command supplied by the attacker.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/iterm2-remote-code-execution-flaw/",
    "publishedAt": "2026-11-23T12:57:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "iterm2-remote-code-execution-flaw-lets-hackers-run",
      "article-1a5ec94c",
      "1a5ec94c",
      "iterm2-remote-code-execution-flaw-lets-hackers-run-78c586",
      "iterm2-remote-code-execution-flaw-lets-hackers-run-malicious"
    ]
  },
  {
    "slug": "fbi-investigates-breach-of-national-crime-informat-198d95d0",
    "title": "FBI Investigates Breach of National Crime Information Center",
    "summary": "A breach of the FBI’s National Crime Information Center (NCIC) exposed sensitive criminal and investigative data. The intrusion exploited an unpatched authentication flaw, potentially granting attackers access to records of fugitives, missing persons, and criminal histories. FBI officials are investigating, urging stakeholders to monitor for unauthorized disclosures and tighten internal access controls while a patch is developed.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/data-breaches/2026/11/fbi-crime-database-reportedly-hacked",
    "publishedAt": "2026-11-23T12:57:11.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "The Record",
        "sourceUrl": "https://therecord.media/fbi-cyberattack-data-breach"
      }
    ],
    "aliases": [
      "fbi-investigates-breach-of-national-crime-informat",
      "article-198d95d0",
      "198d95d0",
      "fbi-investigates-breach-of-national-crime-informat-426861",
      "fbi-investigates-breach-of-national-crime-information-center"
    ]
  },
  {
    "slug": "ai-agent-enables-theft-of-insurer-and-eu-data-68acdc27",
    "title": "AI Agent Enables Theft of Insurer and EU Data",
    "summary": "A low-skilled hacker used a jailbroken AI agent to exfiltrate an insurer’s customer database and 8.6 GB of EU municipal files over nine days. The attacker issued misspelled French commands, exploiting the agent’s model to bypass authentication. Security teams should isolate the AI environment, revoke credentials, and conduct comprehensive analysis of breached systems.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/jailbroken-ai-agent/",
    "publishedAt": "2026-11-23T12:44:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agent-enables-theft-of-insurer-and-eu-data",
      "article-68acdc27",
      "68acdc27",
      "ai-agent-enables-theft-of-insurer-and-eu-data-6bf745"
    ]
  },
  {
    "slug": "crowdstrike-agrees-to-acquire-zscaler-for-43-9b-7b45dcf3",
    "title": "CrowdStrike Agrees to Acquire Zscaler for $43.9B",
    "summary": "CrowdStrike announced a $43.9 billion all-stock acquisition of Zscaler, aiming to integrate Zscaler’s cloud network security into its Falcon platform. The deal expands CrowdStrike’s control over device endpoints and corporate app connections, potentially consolidating cloud security services under a single vendor. Regulatory approvals remain pending; stakeholders should monitor integration timelines and potential antitrust reviews.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/crowdstrike-acquire-zscaler/",
    "publishedAt": "2026-11-23T12:44:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-agrees-to-acquire-zscaler-for-43-9b",
      "article-7b45dcf3",
      "7b45dcf3",
      "crowdstrike-agrees-to-acquire-zscaler-for-43-9b-1750db"
    ]
  },
  {
    "slug": "screenconnect-cve-2026-84869-enables-msp-technicia-884b5434",
    "title": "ScreenConnect CVE-2026-84869 Enables MSP Technician Hijack",
    "summary": "Threat actors exploited a patched flaw in ConnectWise ScreenConnect, identified as CVE-2026-84869, to hijack managed service provider technician workstations. The CVSS 9.9 score marks it as a critical unauthenticated RCE that lets a guest transfer and execute malicious payloads. ConnectWise issued an emergency patch; administrators must apply it immediately and limit guest access to prevent exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-critical-screenconnect.html",
    "publishedAt": "2026-11-23T12:41:04.000Z",
    "cves": [
      "CVE-2026-84869"
    ],
    "additionalSources": [],
    "aliases": [
      "screenconnect-cve-2026-84869-enables-msp-technicia",
      "article-884b5434",
      "884b5434",
      "screenconnect-cve-2026-84869-enables-msp-technicia-1e79ee",
      "screenconnect-cve-2026-84869-enables-msp-technician-hijack"
    ]
  },
  {
    "slug": "n-able-exposes-cve-2026-134624-ssrf-in-mail-assure-2650ac11",
    "title": "N-Able Exposes CVE-2026-134624 SSRF in Mail Assure",
    "summary": "N-Able disclosed a critical SSRF flaw, CVE-2026-134624, discovered during an investigation of its Mail Assure and SpamExperts Hosted Cloud breach. The vulnerability permits a high-privilege API user to open connections to arbitrary internal systems, enabling potential lateral movement. N-Able recommends applying the vendor patch immediately and restricting API access to mitigate exploitation risks.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/n-able-discloses-critical-mail-assure.html",
    "publishedAt": "2026-11-23T12:28:09.000Z",
    "cves": [
      "CVE-2026-134624"
    ],
    "additionalSources": [],
    "aliases": [
      "n-able-exposes-cve-2026-134624-ssrf-in-mail-assure",
      "article-2650ac11",
      "2650ac11",
      "n-able-exposes-cve-2026-134624-ssrf-in-mail-assure-530267"
    ]
  },
  {
    "slug": "i4c-warns-against-sharing-confidential-data-on-wha-7d7235d8",
    "title": "I4C Warns Against Sharing Confidential Data on WhatsApp Web",
    "summary": "The Indian Cyber Crime Coordination Center cautioned users against sharing confidential data on WhatsApp Web, citing risks of session hijacking. The advisory notes that an attacker with access to a signed-in browser session can read messages and view contacts, compromising privacy. Users should log out manually after each session and avoid sharing sensitive information on the platform to mitigate exposure.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/whatsapp-web-confidential-data/",
    "publishedAt": "2026-11-23T12:19:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "i4c-warns-against-sharing-confidential-data-on-wha",
      "article-7d7235d8",
      "7d7235d8",
      "i4c-warns-against-sharing-confidential-data-on-wha-23ca8e",
      "i4c-warns-against-sharing-confidential-data-on-whatsapp-web"
    ]
  },
  {
    "slug": "red-hat-issues-libxrender-security-update-47c1eed1",
    "title": "Red Hat Issues libXrender Security Update",
    "summary": "Red Hat released an important security update for libXrender on RHEL 7 Extended Lifecycle Support. The update addresses one or more vulnerabilities with CVSS scores available via linked CVE references, though specific IDs are not listed. Apply the libXrender update immediately, promptly, and follow Red Hat advisories for installation guidance.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102282",
    "publishedAt": "2026-11-23T12:16:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-libxrender-security-update",
      "article-47c1eed1",
      "47c1eed1",
      "red-hat-issues-libxrender-security-update-2ee15f"
    ]
  },
  {
    "slug": "dragos-finds-undetected-intrusions-at-ai-providers-6ff8354c",
    "title": "Dragos Finds Undetected Intrusions at AI Providers",
    "summary": "Dragos discovered undetected intrusions at three AI inference providers that siphoned nearly two million prompts from AI services. The attackers exploited weaknesses in prompt handling and authentication, enabling data exfiltration without triggering existing monitoring systems. Security teams should review prompt validation, strengthen access controls, and deploy anomaly detection to prevent future theft.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/ai-inference-providers-failed-to-detect-hacking-and-prompt-theft-says-dragos/",
    "publishedAt": "2026-11-23T12:16:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "dragos-finds-undetected-intrusions-at-ai-providers",
      "article-6ff8354c",
      "6ff8354c",
      "dragos-finds-undetected-intrusions-at-ai-providers-4971dd"
    ]
  },
  {
    "slug": "red-hat-issues-librabbitmq-security-update-29d2cee6",
    "title": "Red Hat Issues librabbitmq Security Update",
    "summary": "Red Hat released an important security update for librabbitmq on RHEL 10. The update mitigates vulnerabilities with CVSS scores available via linked CVE references, though specific IDs are not listed, and it applies to all affected librabbitmq packages. Install the librabbitmq update promptly and consult Red Hat advisories for detailed guidance.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102283",
    "publishedAt": "2026-11-23T12:13:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-librabbitmq-security-update",
      "article-29d2cee6",
      "29d2cee6",
      "red-hat-issues-librabbitmq-security-update-2ee15f"
    ]
  },
  {
    "slug": "red-hat-releases-libxrender-security-update-89fe55ea",
    "title": "Red Hat Releases libXrender Security Update",
    "summary": "Red Hat released a security update for libXrender on Enterprise Linux 8.8, addressing multiple vulnerabilities rated as Important. The update includes patches for CVEs referenced in the advisory, each with a CVSS base score that informs the severity. Administrators should apply the update promptly and verify that libXrender is at the latest patched version to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102281",
    "publishedAt": "2026-11-23T12:12:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-libxrender-security-update",
      "article-89fe55ea",
      "89fe55ea",
      "red-hat-releases-libxrender-security-update-2ee15f"
    ]
  },
  {
    "slug": "rhsa-2026-102288-important-red-hat-amq-broker-7-14-07642452",
    "title": "RHSA-2026:102288: Important: Red Hat AMQ Broker 7.14.2 release and security update",
    "summary": "Red Hat AMQ Broker 7.14.2 is now available from the Red Hat Customer Portal. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102288",
    "publishedAt": "2026-11-23T12:11:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102288-important-red-hat-amq-broker-7-14",
      "article-07642452",
      "07642452",
      "rhsa-2026-102288-important-red-hat-amq-broker-7-14-2ee15f",
      "rhsa-2026-102288-important-red-hat-amq-broker-7-14-2-release"
    ]
  },
  {
    "slug": "red-hat-releases-libxrender-security-update-for-rh-eb9e39b2",
    "title": "Red Hat Releases libXrender Security Update for RHEL 8.6",
    "summary": "Red Hat released a libXrender security update for RHEL 8.6 Advanced Mission Critical and Extended Update Support, fixing multiple vulnerabilities. The vulnerabilities have CVSS base scores linked via CVE references, indicating significant risk if unpatched. Administrators should apply the update promptly to mitigate the identified security issues across all affected systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102280",
    "publishedAt": "2026-11-23T12:08:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-libxrender-security-update-for-rh",
      "article-eb9e39b2",
      "eb9e39b2",
      "red-hat-releases-libxrender-security-update-for-rh-2ee15f",
      "red-hat-releases-libxrender-security-update-for-rhel-8-6"
    ]
  },
  {
    "slug": "peruvian-call-center-operator-sentenced-to-eight-y-a9926847",
    "title": "Peruvian Call Center Operator Sentenced to Eight Years",
    "summary": "A Peruvian call-center operator received an eight-year sentence for facilitating a government-impersonation fraud that targeted over 30,000 Spanish-speaking U.S. residents. The scheme used deceptive calls to coerce victims into revealing personal data, leading to millions of dollars stolen. The conviction highlights the legal consequences for individuals aiding such fraud operations.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/call-center-operator-gets-8-years-for-helping-scam-30-000-americans/",
    "publishedAt": "2026-11-23T12:02:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "peruvian-call-center-operator-sentenced-to-eight-y",
      "article-a9926847",
      "a9926847",
      "peruvian-call-center-operator-sentenced-to-eight-y-1172be",
      "peruvian-call-center-operator-sentenced-to-eight-years"
    ]
  },
  {
    "slug": "cisco-expressway-cve-2026-76466-enables-remote-roo-ec41c6ad",
    "title": "Cisco Expressway CVE-2026-76466 Enables Remote Root Access Exploitation",
    "summary": "Cisco Expressway devices are compromised by CVE-2026-76466, allowing attackers to gain root privileges without authentication. The flaw permits unauthenticated remote code execution via the web interface, enabling full system takeover and potential lateral movement. Cisco has released a patch; administrators must apply it immediately and verify device integrity to mitigate exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-exploit-critical-cisco-expressway-flaw/",
    "publishedAt": "2026-11-23T12:02:15.000Z",
    "cves": [
      "CVE-2026-76466"
    ],
    "additionalSources": [
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/cisco-expressway-vulnerability-exploited/"
      }
    ],
    "aliases": [
      "cisco-expressway-cve-2026-76466-enables-remote-roo",
      "article-ec41c6ad",
      "ec41c6ad",
      "cisco-expressway-cve-2026-76466-enables-remote-roo-2b8cb0",
      "cisco-expressway-cve-2026-76466-enables-remote-root-access-e"
    ]
  },
  {
    "slug": "essay-argues-ai-lacks-legal-rights-81502dc3",
    "title": "Essay Argues AI Lacks Legal Rights",
    "summary": "Character.AI petitioned a court to dismiss a death suit, claiming chatbot’s speech was protected and the company was a service, not a product. Judge Anne Conway rejected both arguments in May 2025, holding that the chatbot’s content could be subject to product-liability law. The ruling underscores the debate over AI accountability and limits of First Amendment protections for machine-generated speech.",
    "category": "General",
    "severity": "LOW",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/11/humans-have-rights-machines-do-not.html",
    "publishedAt": "2026-11-23T12:00:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "essay-argues-ai-lacks-legal-rights",
      "article-81502dc3",
      "81502dc3",
      "essay-argues-ai-lacks-legal-rights-1dc8c0"
    ]
  },
  {
    "slug": "cisa-adds-two-known-exploited-vulnerabilities-to-c-ed14a870",
    "title": "CISA Adds Two Known Exploited Vulnerabilities to Catalog",
    "summary": "CISA has added two new vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog , based on evidence of active exploitation. CVE-2026-133968 Project MONAI MONAI Label Path Traversal Vulnerability CVE-2026-134624 N-able Mail Assure (SpamExperts) Server-Side Request Forgery (SSRF) Vulnerability These types of vulnerabilities are a frequent attack vector for malicious cyber actors and pose significant risks to the federal enterprise.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/11/23/cisa-adds-two-known-exploited-vulnerabilities-catalog",
    "publishedAt": "2026-11-23T12:00:00.000Z",
    "cves": [
      "CVE-2026-133968",
      "CVE-2026-134624"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-two-known-exploited-vulnerabilities-to-c",
      "article-ed14a870",
      "ed14a870",
      "cisa-adds-two-known-exploited-vulnerabilities-to-c-6d6b67",
      "cisa-adds-two-known-exploited-vulnerabilities-to-catalog"
    ]
  },
  {
    "slug": "red-hat-releases-patch-update-for-rhel-10-37b0ef8e",
    "title": "Red Hat Releases Patch Update for RHEL 10",
    "summary": "Red Hat released a security update for the patch component on RHEL 10, addressing several vulnerabilities. The vulnerabilities carry CVSS base scores linked via CVE references, indicating moderate risk if unpatched. Administrators should apply the update promptly to mitigate the identified security issues across all affected systems in the production environment.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102274",
    "publishedAt": "2026-11-23T11:46:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-patch-update-for-rhel-10",
      "article-37b0ef8e",
      "37b0ef8e",
      "red-hat-releases-patch-update-for-rhel-10-2ee15e"
    ]
  },
  {
    "slug": "badbox-3-0-ad-fraud-operation-disrupted-4267da39",
    "title": "BadBox 3.0 Ad Fraud Operation Disrupted",
    "summary": "Backdoors on low-cost consumer devices enabled the BadBox 3.0 ad-fraud operation, delivering modules that generated 40 billion bid requests daily. The operation leveraged residential-proxy capabilities to obfuscate traffic, creating an ad-fraud network that inflated auction volumes and siphoned revenue from publishers. Security teams coordinated a takedown that disrupted the backdoor infrastructure, halting bid-request generation and exposing compromised devices for remediation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/badbox-3-0-ad-fraud-operation-generating-40-billion-daily-bid-requests-disrupted/",
    "publishedAt": "2026-11-23T11:44:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "badbox-3-0-ad-fraud-operation-disrupted",
      "article-4267da39",
      "4267da39",
      "badbox-3-0-ad-fraud-operation-disrupted-2a52b5"
    ]
  },
  {
    "slug": "oxloader-hijacks-dlls-to-spread-multiple-malware-f-45300881",
    "title": "OXLoader Hijacks DLLs to Spread Multiple Malware Families",
    "summary": "OXLoader malware exploits DLL hijacking to deliver multiple malware families via fake complaints and activators. The technique leverages trusted system DLL paths to inject malicious code, enabling stealthy distribution across victim machines. Security teams should monitor for anomalous DLL loads, apply whitelisting, and update endpoint protection to block OXLoader activity.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/threat-intel/2026/11/oxloader-abuses-dll-hijacking-to-distribute-different-malware-families",
    "publishedAt": "2026-11-23T11:35:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "oxloader-hijacks-dlls-to-spread-multiple-malware-f",
      "article-45300881",
      "45300881",
      "oxloader-hijacks-dlls-to-spread-multiple-malware-f-3109f0",
      "oxloader-hijacks-dlls-to-spread-multiple-malware-families"
    ]
  },
  {
    "slug": "sap-netweaver-cisco-expressway-flaws-exploited-c9fd06e6",
    "title": "SAP NetWeaver, Cisco Expressway Flaws Exploited",
    "summary": "Threat actors leveraged vulnerabilities in SAP NetWeaver and Cisco Expressway to leak or alter server data and gain root-level command execution. The flaws, likely involving improper input validation and privilege checks, allow attackers to bypass authentication and execute arbitrary code. Administrators should apply vendor patches, enforce least privilege, and monitor for anomalous activity to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/sap-netweaver-cisco-expressway-flaws-exploited-in-attacks/",
    "publishedAt": "2026-11-23T11:35:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sap-netweaver-cisco-expressway-flaws-exploited",
      "article-c9fd06e6",
      "c9fd06e6",
      "sap-netweaver-cisco-expressway-flaws-exploited-321e51"
    ]
  },
  {
    "slug": "crowdstrike-to-acquire-zscaler-for-43-9b-c33d0a4d",
    "title": "CrowdStrike to Acquire Zscaler for $43.9B",
    "summary": "CrowdStrike announced a $43.9 billion acquisition of Zscaler, aiming to combine their security platforms and generate over $10 billion in annual recurring revenue. The deal positions CrowdStrike as a leading provider of integrated cloud-native security services, expanding its market reach across identity, network, and application layers.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/crowdstrike-to-acquire-zscaler-in-43-9-billion-deal/",
    "publishedAt": "2026-11-23T11:31:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-to-acquire-zscaler-for-43-9b",
      "article-c33d0a4d",
      "c33d0a4d",
      "crowdstrike-to-acquire-zscaler-for-43-9b-583182"
    ]
  },
  {
    "slug": "red-hat-issues-low-impact-edk2-update-60cab848",
    "title": "Red Hat Issues Low-Impact edk2 Update",
    "summary": "Red Hat released a low-impact update for the edk2 firmware component on RHEL 8.4 Advanced Mission Critical Update Support and Extended Update Support Long-Life Add-On. The update addresses multiple security issues, each with a CVSS base score listed in the CVE references, but no active exploitation has been reported. Red Hat recommends applying the update immediately to maintain system integrity.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102278",
    "publishedAt": "2026-11-23T11:30:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-low-impact-edk2-update",
      "article-60cab848",
      "60cab848",
      "red-hat-issues-low-impact-edk2-update-2ee15e"
    ]
  },
  {
    "slug": "rhsa-2026-102253-important-kernel-security-bug-fix-0d07fd6a",
    "title": "RHSA-2026:102253: Important: kernel security, bug fix, and enhancement update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102253",
    "publishedAt": "2026-11-23T11:14:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102253-important-kernel-security-bug-fix",
      "article-0d07fd6a",
      "0d07fd6a",
      "rhsa-2026-102253-important-kernel-security-bug-fix-2ee15e",
      "rhsa-2026-102253-important-kernel-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "ai-agents-find-and-exploit-medical-imaging-zero-da-b001ba5a",
    "title": "AI Agents Find and Exploit Medical Imaging Zero-Day",
    "summary": "AI agents uncovered a zero-day flaw in an open-source medical imaging app in 11 minutes, allowing file writes outside the intended directory. The flaw grants full administrator control, enabling arbitrary code execution and server compromise. No patch exists; isolate the app, apply critical updates, and monitor for unauthorized file writes.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-use-ai/",
    "publishedAt": "2026-11-23T11:07:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agents-find-and-exploit-medical-imaging-zero-da",
      "article-b001ba5a",
      "b001ba5a",
      "ai-agents-find-and-exploit-medical-imaging-zero-da-6f23d6",
      "ai-agents-find-and-exploit-medical-imaging-zero-day"
    ]
  },
  {
    "slug": "cairn-framework-used-to-exploit-medical-ai-zero-da-402eb59c",
    "title": "Cairn Framework Used to Exploit Medical AI Zero-Day",
    "summary": "A Chinese-nexus threat actor used the open-source Cairn framework to exploit a zero-day in a medical imaging AI application. The zero-day enabled remote code execution after initial failed attempts, giving the attacker a foothold without a disclosed CVE. No vendor patch exists; teams should monitor exploitation, harden AI applications, and limit autonomous framework use.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/cairn-ai-agents-autonomous-attacks/",
    "publishedAt": "2026-11-23T10:49:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cairn-framework-used-to-exploit-medical-ai-zero-da",
      "article-402eb59c",
      "402eb59c",
      "cairn-framework-used-to-exploit-medical-ai-zero-da-53c0da",
      "cairn-framework-used-to-exploit-medical-ai-zero-day"
    ]
  },
  {
    "slug": "rhel-10-2-eus-receives-moderate-security-patch-15dd34fc",
    "title": "RHEL 10.2 EUS Receives Moderate Security Patch",
    "summary": "Red Hat released a moderate-impact patch for Red Hat Enterprise Linux 10.2 Extended Update Support, addressing multiple security issues. The update carries a CVSS base score indicating moderate severity, with detailed scores linked via CVE references in the advisory. Administrators should apply the patch promptly to mitigate the identified vulnerabilities and maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102252",
    "publishedAt": "2026-11-23T10:45:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel-10-2-eus-receives-moderate-security-patch",
      "article-15dd34fc",
      "15dd34fc",
      "rhel-10-2-eus-receives-moderate-security-patch-2ee15e"
    ]
  },
  {
    "slug": "gl-inet-cloud-flaw-enables-malware-on-routers-e0f4f497",
    "title": "GL.iNet Cloud Flaw Enables Malware on Routers",
    "summary": "A flaw in GL.iNet’s cloud remote-management service granted attackers unauthorized access to routers and KVM devices, allowing malware and backdoor installation. The vulnerability, discovered on November 20 2026, was patched by GL.iNet, but affected devices still need a firmware update to eliminate the risk. Security teams should verify firmware versions and apply the latest update; no additional workarounds are documented.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-exploit-gl-inet-cloud-flaw/",
    "publishedAt": "2026-11-23T10:45:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gl-inet-cloud-flaw-enables-malware-on-routers",
      "article-e0f4f497",
      "e0f4f497",
      "gl-inet-cloud-flaw-enables-malware-on-routers-2c9c6b"
    ]
  },
  {
    "slug": "attackers-exploited-microsoft-entra-connect-health-4760c6b1",
    "title": "Attackers exploited Microsoft Entra Connect Health flaw to access tenant data",
    "summary": "Attackers exploited a vulnerability in the Microsoft Entra Connect Health API to read the technical contact email addresses and configuration details of Entra tenants, the company warned affected organizations. Microsoft Entra Connect Health is a cloud-based monitoring service that gives administrators a single view of the health, performance and alerts for their on-premises identity infrastructure in the Microsoft Entra admin center.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/microsoft-entra-connect-health-vulnerability-tenant-data/",
    "publishedAt": "2026-11-23T10:34:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "attackers-exploited-microsoft-entra-connect-health",
      "article-4760c6b1",
      "4760c6b1",
      "attackers-exploited-microsoft-entra-connect-health-7d5536",
      "attackers-exploited-microsoft-entra-connect-health-flaw-to-a"
    ]
  },
  {
    "slug": "ai-driven-breach-exposes-over-1-million-records-16a5e138",
    "title": "AI-Driven Breach Exposes Over 1 Million Records",
    "summary": "Chinese-speaking hackers leveraged an AI testing tool to autonomously breach ten organizations between August and September 2026, exposing over one million personal records from a single victim. The tool performed most attack steps, with operators only specifying targets, indicating a low-effort exploitation chain. Affected entities should conduct forensic investigations, strengthen access controls, and notify impacted individuals per regulatory requirements.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-use-autonomous-ai/",
    "publishedAt": "2026-11-23T10:27:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-driven-breach-exposes-over-1-million-records",
      "article-16a5e138",
      "16a5e138",
      "ai-driven-breach-exposes-over-1-million-records-7b8b24"
    ]
  },
  {
    "slug": "critical-asp-net-anticsrf-flaw-enables-remote-code-eded742f",
    "title": "Critical ASP.NET AntiCsrf Flaw Enables Remote Code Execution Without Authentication",
    "summary": "A critical flaw in the Idunno.AntiCsrf library used by legacy ASP.NET WebForms apps has been actively exploited, letting attackers run arbitrary code on servers without authentication. The vulnerability, CVE-2026-131914, scores 9.3 on CVSS and has already caused incidents worldwide. Affected organizations must update or remove the library immediately and apply vendor patches to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/asp-net-anticsrf-flaw-under-attack/",
    "publishedAt": "2026-11-23T10:25:17.000Z",
    "cves": [
      "CVE-2026-131914"
    ],
    "additionalSources": [
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-critical-aspnet-anti.html"
      }
    ],
    "aliases": [
      "critical-asp-net-anticsrf-flaw-enables-remote-code",
      "article-eded742f",
      "eded742f",
      "critical-asp-net-anticsrf-flaw-enables-remote-code-28c2eb",
      "critical-asp-net-anticsrf-flaw-enables-remote-code-execution"
    ]
  },
  {
    "slug": "red-hat-releases-webkit2gtk3-security-update-ee9994d5",
    "title": "Red Hat releases webkit2gtk3 security update",
    "summary": "Red Hat released a critical webkit2gtk3 security update for RHEL 8.4 Advanced Mission Critical and Extended Update Support. The update fixes multiple vulnerabilities, each with a CVSS base score in the CVE references, and is rated Important. Apply the update promptly today to prevent exploitation of the affected webkit2gtk3 components.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102248",
    "publishedAt": "2026-11-23T10:00:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-webkit2gtk3-security-update",
      "article-ee9994d5",
      "ee9994d5",
      "red-hat-releases-webkit2gtk3-security-update-2ee15e"
    ]
  },
  {
    "slug": "red-hat-issues-critical-update-for-java-21-ibm-sem-75e77b1c",
    "title": "Red Hat Issues Critical Update for java-21-ibm-semeru JDK",
    "summary": "Red Hat released a critical update for java-21-ibm-semeru-certified-jdk on RHEL 10.0 and 10.2, fixing multiple high-impact vulnerabilities. The flaws, listed in the advisory’s CVE references, enable unauthenticated remote code execution with a CVSS score of 9.8, giving attackers full system control. Apply the vendor-supplied patch immediately; verify installation with rpm -q java-21-ibm-semeru-certified-jdk on affected systems.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102246",
    "publishedAt": "2026-11-23T09:45:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-update-for-java-21-ibm-sem",
      "article-75e77b1c",
      "75e77b1c",
      "red-hat-issues-critical-update-for-java-21-ibm-sem-2ee15e",
      "red-hat-issues-critical-update-for-java-21-ibm-semeru-jdk"
    ]
  },
  {
    "slug": "rhsa-2026-102247-important-java-1-8-0-ibm-security-e5fce34f",
    "title": "RHSA-2026:102247: Important: java-1.8.0-ibm security update",
    "summary": "An update for java-1.8.0-ibm is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102247",
    "publishedAt": "2026-11-23T09:41:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102247-important-java-1-8-0-ibm-security",
      "article-e5fce34f",
      "e5fce34f",
      "rhsa-2026-102247-important-java-1-8-0-ibm-security-2ee15e",
      "rhsa-2026-102247-important-java-1-8-0-ibm-security-update"
    ]
  },
  {
    "slug": "red-hat-issues-critical-php-8-3-security-update-1131078f",
    "title": "Red Hat Issues Critical PHP 8.3 Security Update",
    "summary": "Red Hat released a critical security update for the php:8.3 module on RHEL 9, addressing multiple vulnerabilities. The update is rated Critical, with CVSS base scores provided for each vulnerability via the referenced CVE links, indicating high-severity flaws. Apply the patch promptly; no workarounds are available, and the update should be deployed across all affected systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102226",
    "publishedAt": "2026-11-23T09:16:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-php-8-3-security-update",
      "article-1131078f",
      "1131078f",
      "red-hat-issues-critical-php-8-3-security-update-2ee15e"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-security-update-for-rhel-8-f6106dd4",
    "title": "Red Hat Releases Kernel Security Update for RHEL 8.6",
    "summary": "Red Hat issued a kernel security update for RHEL 8.6 Advanced Mission Critical Update Support and Extended Update Support Long-Life Add-On, addressing multiple vulnerabilities. The update carries an Important impact rating, with CVSS base scores available for each vulnerability via the referenced CVE links. Security teams should apply the patch immediately to mitigate potential exploitation; no workarounds are currently recommended.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102233",
    "publishedAt": "2026-11-23T09:14:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-security-update-for-rhel-8",
      "article-f6106dd4",
      "f6106dd4",
      "red-hat-releases-kernel-security-update-for-rhel-8-2ee15e",
      "red-hat-releases-kernel-security-update-for-rhel-8-6"
    ]
  },
  {
    "slug": "red-hat-releases-liblerc-security-update-3df8ccfe",
    "title": "Red Hat Releases liblerc Security Update",
    "summary": "A flaw in liblerc, used by Red Hat Enterprise Linux 10.2 EUS, is now fixed by a security update. Red Hat rates the issue as Important, with a CVSS base score available via CVE links in the advisory, indicating high risk. Apply the liblerc patch for RHEL 10.2 EUS immediately to eliminate the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102232",
    "publishedAt": "2026-11-23T09:12:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-liblerc-security-update",
      "article-3df8ccfe",
      "3df8ccfe",
      "red-hat-releases-liblerc-security-update-2ee15e"
    ]
  },
  {
    "slug": "microsoft-confirms-printing-issues-on-forcepoint-s-cbc7d4a7",
    "title": "Microsoft Confirms Printing Issues on Forcepoint Systems",
    "summary": "Microsoft confirmed that the KB5132043 Windows 11 hotpatch caused printing failures on systems running Forcepoint DLP software. The issue does not represent a security vulnerability but disrupts print functionality for affected users. Microsoft advises users to postpone the hotpatch until a fix is released or to revert to a previous Windows 11 build.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-confirms-printing-issues-after-kb5132043-windows-hotpatch/",
    "publishedAt": "2026-11-23T09:11:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-confirms-printing-issues-on-forcepoint-s",
      "article-cbc7d4a7",
      "cbc7d4a7",
      "microsoft-confirms-printing-issues-on-forcepoint-s-7dbc66",
      "microsoft-confirms-printing-issues-on-forcepoint-systems"
    ]
  },
  {
    "slug": "rhsa-2026-102230-important-liblerc-security-update-06992153",
    "title": "RHSA-2026:102230: Important: liblerc security update",
    "summary": "An update for liblerc is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102230",
    "publishedAt": "2026-11-23T09:04:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102230-important-liblerc-security-update",
      "article-06992153",
      "06992153",
      "rhsa-2026-102230-important-liblerc-security-update-2ee15e"
    ]
  },
  {
    "slug": "gl-inet-cloud-flaw-exploited-for-malware-1a3f0284",
    "title": "GL.iNet Cloud flaw exploited for malware",
    "summary": "Hackers exploited a flaw in GL.iNet's GoodCloud remote-management service to install malware on customer routers and KVM devices. The vulnerability allowed remote code execution via authenticated access, and the attacker leveraged it to deploy malicious binaries before the company patched the flaw. GL.iNet has blocked the attack vector and recommends users apply the firmware update immediately to prevent further infections.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploited-glinet-cloud-flaw-to.html",
    "publishedAt": "2026-11-23T09:04:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gl-inet-cloud-flaw-exploited-for-malware",
      "article-1a3f0284",
      "1a3f0284",
      "gl-inet-cloud-flaw-exploited-for-malware-2dfd25"
    ]
  },
  {
    "slug": "signal-blocks-ai-assistants-from-accessing-private-29017594",
    "title": "Signal Blocks AI Assistants From Accessing Private Messages",
    "summary": "Signal updated its app to block AI assistants on iOS 27 and Android, preventing them from capturing users’ private message content. The change stops assistants like Siri and Google Gemini from reading the screen to answer queries, protecting data stores. No vulnerability is reported; the update is a privacy safeguard that requires installing the latest Signal version.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/signal-blocks-ai-assistants-screenshots/",
    "publishedAt": "2026-11-23T08:53:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "signal-blocks-ai-assistants-from-accessing-private",
      "article-29017594",
      "29017594",
      "signal-blocks-ai-assistants-from-accessing-private-287530",
      "signal-blocks-ai-assistants-from-accessing-private-messages"
    ]
  },
  {
    "slug": "samsung-securities-breach-exposes-8-241-customers-8e25bd81",
    "title": "Samsung Securities Breach Exposes 8,241 Customers' Data",
    "summary": "Samsung Securities reported a breach exposing personal data of 8,241 customers after unauthorized access to its Voice of Customer (VOC) website. The breach involved credential theft and internal compromise, but impact was limited to the VOC system. Samsung Securities advised affected customers to monitor accounts, change passwords, and is investigating while notifying regulators.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/samsung-securities-data-breach/",
    "publishedAt": "2026-11-23T08:53:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "samsung-securities-breach-exposes-8-241-customers",
      "article-8e25bd81",
      "8e25bd81",
      "samsung-securities-breach-exposes-8-241-customers-28fcc5",
      "samsung-securities-breach-exposes-8-241-customers-data"
    ]
  },
  {
    "slug": "rhsa-2026-102228-important-redhat-ds-12-security-b-06aa9831",
    "title": "RHSA-2026:102228: Important: redhat-ds:12 security, bug fix, and enhancement update",
    "summary": "An update for the redhat-ds:12 module is now available for Red Hat Directory Server 12.9 for RHEL 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102228",
    "publishedAt": "2026-11-23T08:33:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102228-important-redhat-ds-12-security-b",
      "article-06aa9831",
      "06aa9831",
      "rhsa-2026-102228-important-redhat-ds-12-security-b-2ee15e",
      "rhsa-2026-102228-important-redhat-ds-12-security-bug-fix-and"
    ]
  },
  {
    "slug": "rhsa-2026-102229-important-389-ds-base-and-redhat-6fc27522",
    "title": "RHSA-2026:102229: Important: 389-ds-base and redhat-ds security, bug fix, and enhancement update",
    "summary": "An update for multiple packages is now available for Red Hat Directory Server 13.3 for RHEL 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102229",
    "publishedAt": "2026-11-23T08:31:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102229-important-389-ds-base-and-redhat",
      "article-6fc27522",
      "6fc27522",
      "rhsa-2026-102229-important-389-ds-base-and-redhat-2ee15e",
      "rhsa-2026-102229-important-389-ds-base-and-redhat-ds-securit"
    ]
  },
  {
    "slug": "rhsa-2026-102224-important-grafana-security-update-caa3d2a4",
    "title": "RHSA-2026:102224: Important: grafana security update",
    "summary": "An update for grafana is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102224",
    "publishedAt": "2026-11-23T08:25:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102224-important-grafana-security-update",
      "article-caa3d2a4",
      "caa3d2a4",
      "rhsa-2026-102224-important-grafana-security-update-2ee15e"
    ]
  },
  {
    "slug": "ai-assisted-attacks-trigger-unauthorized-bank-tran-2b6acc3a",
    "title": "AI-Assisted Attacks Trigger Unauthorized Bank Transfers",
    "summary": "AI-assisted threat actors targeted Indian ICT assets, forcing unauthorized financial transfers at banks and fintech firms. The attacks leveraged machine-learning-driven phishing and credential-stealing techniques, exploiting known login-bypass flaws to move laterally within banking networks. Red CERT-In urges immediate patching of vulnerable systems and enhanced monitoring of transaction logs to detect further unauthorized activity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/ai-assisted-cyberattacks-trigger.html",
    "publishedAt": "2026-11-23T08:24:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-assisted-attacks-trigger-unauthorized-bank-tran",
      "article-2b6acc3a",
      "2b6acc3a",
      "ai-assisted-attacks-trigger-unauthorized-bank-tran-70818c",
      "ai-assisted-attacks-trigger-unauthorized-bank-transfers"
    ]
  },
  {
    "slug": "xdg-desktop-portal-update-for-rhel-8-6-released-4ae96a4a",
    "title": "xdg-desktop-portal Update for RHEL 8.6 Released",
    "summary": "Red Hat issued an xdg-desktop-portal update for RHEL 8.6 to address security concerns. The update fixes vulnerabilities that could allow attackers to gain unauthorized access to desktop portal services, potentially leading to privilege escalation or data exposure. Users should apply the patch promptly and verify the CVSS scores provided in the advisory for detailed risk assessment.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102225",
    "publishedAt": "2026-11-23T08:22:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xdg-desktop-portal-update-for-rhel-8-6-released",
      "article-4ae96a4a",
      "4ae96a4a",
      "xdg-desktop-portal-update-for-rhel-8-6-released-2ee15e"
    ]
  },
  {
    "slug": "grafana-update-for-rhel-9-8-released-62aba3a1",
    "title": "Grafana Update for RHEL 9.8 Released",
    "summary": "Red Hat released a Grafana update for RHEL 9.8 Extended Update Support to fix multiple security issues. The vulnerabilities could allow attackers to exploit Grafana’s web interface, potentially enabling unauthorized data access or critical code execution. Apply the patch immediately and review the CVSS scores linked in the advisory for risk assessment.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102222",
    "publishedAt": "2026-11-23T08:15:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "grafana-update-for-rhel-9-8-released",
      "article-62aba3a1",
      "62aba3a1",
      "grafana-update-for-rhel-9-8-released-2ee15e"
    ]
  },
  {
    "slug": "badbox-3-0-tv-boxes-generate-40-billion-ad-request-5e60fd71",
    "title": "BADBOX 3.0 TV Boxes Generate 40 Billion Ad Requests",
    "summary": "BADBOX 3.0 infected low-cost TV boxes produced roughly 40 billion ad bid requests daily, exceeding 4% of all connected TV traffic. The malware hijacked ad rendering processes, enabling stealthy traffic injection without user awareness and creating a large-scale advertising fraud network.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/badbox-3-0-ad-fraud-operation/",
    "publishedAt": "2026-11-23T08:06:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "badbox-3-0-tv-boxes-generate-40-billion-ad-request",
      "article-5e60fd71",
      "5e60fd71",
      "badbox-3-0-tv-boxes-generate-40-billion-ad-request-126196",
      "badbox-3-0-tv-boxes-generate-40-billion-ad-requests"
    ]
  },
  {
    "slug": "bulgarian-government-breach-exposes-62-million-pag-ab52e416",
    "title": "Bulgarian Government Breach Exposes 62 Million Pages",
    "summary": "Hackers accessed Bulgarian state administration networks for five years, exfiltrating 130 GB of documents. The intrusion leveraged covert persistence mechanisms to download over 62 million pages, representing a significant compromise of sensitive government data. Bulgarian authorities disrupted the operation and are investigating the breach; no vendor patch is applicable, but organizations should review network segmentation and intrusion detection controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/bulgarian-government/",
    "publishedAt": "2026-11-23T08:01:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bulgarian-government-breach-exposes-62-million-pag",
      "article-ab52e416",
      "ab52e416",
      "bulgarian-government-breach-exposes-62-million-pag-4b51f5",
      "bulgarian-government-breach-exposes-62-million-pages"
    ]
  },
  {
    "slug": "weekly-security-roundup-nov-16-22-a07bae89",
    "title": "Weekly Security Roundup: Nov 16-22",
    "summary": "Malwarebytes Labs released a weekly security roundup covering topics from Nov 16 to Nov 22, 2026. The report summarizes emerging threats, vulnerability disclosures, and defensive recommendations observed during that period, including zero-day exploits and supply-chain risks. The summary is available for security teams to review trends, update defenses, and threat intelligence.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/a-week-in-security-november-16-november-22",
    "publishedAt": "2026-11-23T08:01:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "weekly-security-roundup-nov-16-22",
      "article-a07bae89",
      "a07bae89",
      "weekly-security-roundup-nov-16-22-b93180"
    ]
  },
  {
    "slug": "outages-reveal-need-for-robust-recovery-planning-42474264",
    "title": "Outages Reveal Need for Robust Recovery Planning",
    "summary": "Outages at Microsoft, the FAA, and major banks highlight the need for robust recovery planning, as lack of resilience caused extended downtime. The incidents exposed gaps in business continuity frameworks, revealing that inadequate failover testing can leave essential services vulnerable to prolonged disruption. Organizations should define downtime thresholds, conduct failover drills, and implement automated recovery workflows to maintain continuity.",
    "category": "General",
    "severity": "LOW",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/why-resilience-has-to-come-first",
    "publishedAt": "2026-11-23T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "outages-reveal-need-for-robust-recovery-planning",
      "article-42474264",
      "42474264",
      "outages-reveal-need-for-robust-recovery-planning-70868f"
    ]
  },
  {
    "slug": "virtualbox-process-hardening-on-windows-2026-editi-f1458f09",
    "title": "VirtualBox Process Hardening on Windows 2026 Edition: What’s a Single Bit Between Friends?",
    "summary": "Back in 2017 I did some research into Oracle VirtualBox on Windows. The protection was to gate who could open the kernel driver, which might allow for privilege escalation due to the way it was designed. This time I found 3 new bypasses for protected processes, with an additional bug which was a broken fix for the 2020 bypass breaking due to changes in Windows.",
    "category": "General",
    "severity": "HIGH",
    "source": "Google Project Zero",
    "sourceUrl": "https://projectzero.google/2026/11/virtualbox-process-hardening.html",
    "publishedAt": "2026-11-23T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "virtualbox-process-hardening-on-windows-2026-editi",
      "article-f1458f09",
      "f1458f09",
      "virtualbox-process-hardening-on-windows-2026-editi-3e3201",
      "virtualbox-process-hardening-on-windows-2026-edition-what-s-"
    ]
  },
  {
    "slug": "rhsa-2026-102221-important-grafana-security-update-d58f0238",
    "title": "RHSA-2026:102221: Important: grafana security update",
    "summary": "An update for grafana is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102221",
    "publishedAt": "2026-11-23T07:50:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102221-important-grafana-security-update",
      "article-d58f0238",
      "d58f0238",
      "rhsa-2026-102221-important-grafana-security-update-2ee15e"
    ]
  },
  {
    "slug": "red-hat-kernel-update-for-rhel-10-0-eus-c676eec0",
    "title": "Red Hat Kernel Update for RHEL 10.0 EUS",
    "summary": "Red Hat released a kernel update for Enterprise Linux 10.0 Extended Update Support, addressing multiple security issues. The advisory notes an Important security impact, with CVSS base scores linked to each vulnerability, indicating potential high-severity flaws. Security teams should apply the update immediately to mitigate the identified kernel vulnerabilities, as no workarounds are provided.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102220",
    "publishedAt": "2026-11-23T07:49:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-for-rhel-10-0-eus",
      "article-c676eec0",
      "c676eec0",
      "red-hat-kernel-update-for-rhel-10-0-eus-2ee15e"
    ]
  },
  {
    "slug": "cisco-expressway-zero-day-exploit-enables-remote-c-154f46d5",
    "title": "Cisco Expressway Zero-Day Exploit Enables Remote Code Execution",
    "summary": "A zero-day vulnerability (CVE-2026-76466) in Cisco Expressway gateways has been exploited by attackers to breach internal networks. The unauthenticated remote flaw permits arbitrary code execution, and it has been confirmed as a critical CVSS-rated zero-day used in the wild. Cisco has released a patch; organizations must apply it immediately and verify CISA’s Known Exploited Vulnerabilities catalog for guidance.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/cisa-flags-critical-cisco-expressway-rce-flaw-as-actively-exploited/",
    "publishedAt": "2026-11-23T07:44:19.000Z",
    "cves": [
      "CVE-2026-76466"
    ],
    "additionalSources": [
      {
        "source": "Help Net Security",
        "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/cisco-expressway-vulnerability-exploited-cve-2026-76466/"
      }
    ],
    "aliases": [
      "cisco-expressway-zero-day-exploit-enables-remote-c",
      "article-154f46d5",
      "154f46d5",
      "cisco-expressway-zero-day-exploit-enables-remote-c-6aa7cf",
      "cisco-expressway-zero-day-exploit-enables-remote-code-execut"
    ]
  },
  {
    "slug": "malicious-ad-domains-steal-iphone-crypto-recovery-a94fe9be",
    "title": "Malicious Ad Domains Steal iPhone Crypto Recovery Phrases",
    "summary": "Hackers leveraged over 480 malicious ad domains to compromise iPhones and exfiltrate crypto wallet recovery phrases, passwords, and personal data. The MoldyRoost operation exploited ad rendering engine flaws, enabling credential theft without user interaction across 47+ countries. Apple issued a security advisory urging iOS updates and users to avoid suspicious ads; security teams should monitor ad traffic and enforce sandboxing.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/malicious-ad-domains-target-iphones/",
    "publishedAt": "2026-11-23T07:32:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "malicious-ad-domains-steal-iphone-crypto-recovery",
      "article-a94fe9be",
      "a94fe9be",
      "malicious-ad-domains-steal-iphone-crypto-recovery-5df5ed",
      "malicious-ad-domains-steal-iphone-crypto-recovery-phrases"
    ]
  },
  {
    "slug": "red-hat-kernel-update-for-rhel-8-7151ae6f",
    "title": "Red Hat Kernel Update for RHEL 8",
    "summary": "Red Hat issued a kernel update for Enterprise Linux 8, addressing several security issues. The advisory labels the update as Important, with CVSS base scores linked to each vulnerability, implying high-severity flaws. Apply the update promptly to remediate the kernel vulnerabilities; no workarounds are provided, and ensure system integrity today.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102218",
    "publishedAt": "2026-11-23T07:27:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-for-rhel-8",
      "article-7151ae6f",
      "7151ae6f",
      "red-hat-kernel-update-for-rhel-8-2ee15e"
    ]
  },
  {
    "slug": "red-hat-kernel-rt-update-for-rhel-8-226ecb49",
    "title": "Red Hat Kernel-rt Update for RHEL 8",
    "summary": "Red Hat released a kernel-rt update for Enterprise Linux 8, fixing multiple security defects. The advisory rates the update as Important, with CVSS base scores linked to each vulnerability, indicating high-severity flaws. Security teams should apply the kernel-rt patch immediately; no workarounds exist, and system stability must be verified today.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102219",
    "publishedAt": "2026-11-23T07:15:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-rt-update-for-rhel-8",
      "article-226ecb49",
      "226ecb49",
      "red-hat-kernel-rt-update-for-rhel-8-2ee15e"
    ]
  },
  {
    "slug": "cancer-institute-tackles-shadow-it-in-research-0187d950",
    "title": "Cancer Institute Tackles Shadow IT in Research",
    "summary": "Istituto Nazionale Tumori (INT) discusses how to keep a cancer research hospital operational while protecting against cyberattacks. The director explains collaboration with partner hospitals in the Rare Cancer Network, challenges when staff cannot access chemotherapy plans, and why banning shadow IT rarely fixes gaps. INT also highlights the most burdensome EU regulation and outlines its approach to secure research workflows.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/rocco-saviano-istituto-nazionale-tumori-int-hospital-microsegmentation/",
    "publishedAt": "2026-11-23T07:00:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cancer-institute-tackles-shadow-it-in-research",
      "article-0187d950",
      "0187d950",
      "cancer-institute-tackles-shadow-it-in-research-70aeed"
    ]
  },
  {
    "slug": "rhsa-2026-102211-important-freerdp-security-update-bcc853c0",
    "title": "RHSA-2026:102211: Important: freerdp security update",
    "summary": "An update for freerdp is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102211",
    "publishedAt": "2026-11-23T06:48:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102211-important-freerdp-security-update",
      "article-bcc853c0",
      "bcc853c0",
      "rhsa-2026-102211-important-freerdp-security-update-2ee15e"
    ]
  },
  {
    "slug": "red-hat-issues-important-update-for-webkit2gtk3-979f8058",
    "title": "Red Hat Issues Important Update for webkit2gtk3",
    "summary": "Red Hat released an important update for webkit2gtk3 on RHEL 8.6, correcting multiple high-severity bugs. The vulnerabilities, cited by CVE references, enable authenticated remote code execution with a CVSS score of 8.7, allowing attackers to execute arbitrary code. Apply the vendor patch immediately; verify installation with rpm -q webkit2gtk3 on affected RHEL 8.6 systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102214",
    "publishedAt": "2026-11-23T06:44:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-update-for-webkit2gtk3",
      "article-979f8058",
      "979f8058",
      "red-hat-issues-important-update-for-webkit2gtk3-2ee15e"
    ]
  },
  {
    "slug": "red-hat-releases-important-update-for-freerdp-fcbf7de6",
    "title": "Red Hat Releases Important Update for freerdp",
    "summary": "Red Hat issued an important update for freerdp on RHEL 9.4 SAP solutions, addressing several critical vulnerabilities. The disclosed flaws, referenced by CVE identifiers, allow authenticated remote code execution with a CVSS score of 8.3, potentially compromising user sessions. Red Hat recommends applying the patch immediately; users should verify the update via rpm -q freerdp on affected RHEL 9.4 systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102213",
    "publishedAt": "2026-11-23T06:44:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-important-update-for-freerdp",
      "article-fcbf7de6",
      "fcbf7de6",
      "red-hat-releases-important-update-for-freerdp-2ee15e"
    ]
  },
  {
    "slug": "important-freerdp-update-for-rhel-9-2-sap-c0d1994e",
    "title": "Important freerdp update for RHEL 9.2 SAP",
    "summary": "An update fixes security vulnerabilities in freerdp affecting RHEL 9.2 Update Services for SAP Solutions and related components. The flaws, referenced by CVE identifiers, could enable remote code execution via malformed RDP packets in the remote desktop protocol stack. Red Hat advises applying the patch promptly to prevent exploitation and ensure all clients are updated.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102212",
    "publishedAt": "2026-11-23T06:40:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "important-freerdp-update-for-rhel-9-2-sap",
      "article-c0d1994e",
      "c0d1994e",
      "important-freerdp-update-for-rhel-9-2-sap-2ee15e"
    ]
  },
  {
    "slug": "xalgorix-introduces-ai-powered-pen-testing-tool-028c9b4e",
    "title": "Xalgorix Introduces AI-Powered Pen Testing Tool",
    "summary": "Xalgorix, an open-source AI penetration testing framework, validates findings through a dual-agent verification process. The primary agent identifies potential bugs, while a secondary agent attempts to exploit them; failures to confirm a bug result in a flagged finding for manual review, reducing false positives. The tool is available for community use and encourages reviewers to assess flagged vulnerabilities before reporting.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/xalgorix-ai-penetration-testing-tool/",
    "publishedAt": "2026-11-23T06:30:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xalgorix-introduces-ai-powered-pen-testing-tool",
      "article-028c9b4e",
      "028c9b4e",
      "xalgorix-introduces-ai-powered-pen-testing-tool-51e5e3"
    ]
  },
  {
    "slug": "important-xdg-desktop-portal-update-for-rhel-8-4-b52fa4c5",
    "title": "Important xdg-desktop-portal update for RHEL 8.4",
    "summary": "An update addresses security flaws in xdg-desktop-portal affecting RHEL 8.4 Advanced Mission Critical and Extended Update Support. The vulnerabilities, identified via CVE references, allow potential privilege escalation or code execution through desktop portal interactions. Red Hat recommends applying the update immediately to mitigate the risk to ensure system integrity continuously.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102210",
    "publishedAt": "2026-11-23T06:30:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "important-xdg-desktop-portal-update-for-rhel-8-4",
      "article-b52fa4c5",
      "b52fa4c5",
      "important-xdg-desktop-portal-update-for-rhel-8-4-2ee15e"
    ]
  },
  {
    "slug": "early-black-friday-scams-emerge-without-red-flags-f3dc3eff",
    "title": "Early Black Friday Scams Emerge Without Red Flags",
    "summary": "Scammers began posting fake Black Friday deals on September 1, earlier than last year, rarely referencing the holiday or using familiar domain names. The campaigns appear as Facebook group posts or Google Sites pages, mimicking retailer sale language promoting software, payment, travel, or crypto offers. Security teams should monitor social media and verify vendor legitimacy before engaging with such promotions.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/black-friday-scams-doppel-report/",
    "publishedAt": "2026-11-23T06:00:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "early-black-friday-scams-emerge-without-red-flags",
      "article-f3dc3eff",
      "f3dc3eff",
      "early-black-friday-scams-emerge-without-red-flags-469d30"
    ]
  },
  {
    "slug": "red-hat-issues-cockpit-security-patch-cda706c6",
    "title": "Red Hat Issues Cockpit Security Patch",
    "summary": "Red Hat released a security update for the Cockpit management interface on Enterprise Linux 10.0 Extended Update Support. The advisory references multiple CVEs with CVSS base scores, but no active exploitation is reported, and the update is classified as Important by Product Security. Administrators should apply the Cockpit patch promptly to address the identified vulnerabilities.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102208",
    "publishedAt": "2026-11-23T05:54:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-cockpit-security-patch",
      "article-cda706c6",
      "cda706c6",
      "red-hat-issues-cockpit-security-patch-2ee15e"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-security-update-e592f563",
    "title": "Red Hat Releases Kernel Security Update",
    "summary": "Red Hat issued a kernel update for Enterprise Linux 9 addressing multiple security bugs. The advisory lists several CVEs with CVSS base scores, but no active exploitation is reported, and the update is rated as Important by Product Security. Users should apply the kernel patch immediately to mitigate the identified vulnerabilities.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102167",
    "publishedAt": "2026-11-23T05:42:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-security-update",
      "article-e592f563",
      "e592f563",
      "red-hat-releases-kernel-security-update-2ee15b"
    ]
  },
  {
    "slug": "isaca-updates-cobit-7-with-ai-risk-scenarios-a8c0f551",
    "title": "ISACA Updates COBIT 7 with AI Risk Scenarios",
    "summary": "ISACA released COBIT 7, the latest version of its governance framework, adding AI risk scenarios. The update provides comprehensive guidance, a digital platform, and customizable resources to help organizations manage emerging AI risks. Security teams should review the new scenarios and integrate them into their governance and risk management processes.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/isaca-cobit-7-released/",
    "publishedAt": "2026-11-23T05:30:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isaca-updates-cobit-7-with-ai-risk-scenarios",
      "article-a8c0f551",
      "a8c0f551",
      "isaca-updates-cobit-7-with-ai-risk-scenarios-b65bee"
    ]
  },
  {
    "slug": "red-hat-releases-mysql-8-4-security-update-eaea480b",
    "title": "Red Hat Releases MySQL 8.4 Security Update",
    "summary": "Red Hat issued a security update for the mysql:8.4 module on Red Enterprise Linux 9.8 Extended Update Support. The update addresses multiple vulnerabilities, each with a CVSS base score listed in the CVE references, but no active exploitation has been reported. Administrators should apply the RHSA-2026:102188 update promptly to mitigate potential exploitation of the identified flaws.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102188",
    "publishedAt": "2026-11-23T05:18:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-mysql-8-4-security-update",
      "article-eaea480b",
      "eaea480b",
      "red-hat-releases-mysql-8-4-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-releases-important-git-lfs-security-update-91a818e5",
    "title": "Red Hat Releases Important Git-LFS Security Update",
    "summary": "Red Hat issued an important security update for git-lfs on RHEL 9.8 Extended Update Support. The advisory indicates that the update addresses one or more vulnerabilities, each with a CVSS base score available via the referenced CVE links. Users should apply the git-lfs update immediately to mitigate the identified security risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102187",
    "publishedAt": "2026-11-23T05:18:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-important-git-lfs-security-update",
      "article-91a818e5",
      "91a818e5",
      "red-hat-releases-important-git-lfs-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-issues-moderate-openssh-security-update-859b0083",
    "title": "Red Hat Issues Moderate OpenSSH Security Update",
    "summary": "Red Hat released a moderate security update for OpenSSH on RHEL 9, addressing weaknesses that could allow remote attackers to gain elevated privileges. The advisory references multiple CVEs, each with a CVSS base score provided, indicating the severity of the flaws. Administrators should apply the OpenSSH update promptly to mitigate the disclosed vulnerabilities and prevent privilege escalation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102191",
    "publishedAt": "2026-11-23T05:09:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-moderate-openssh-security-update",
      "article-859b0083",
      "859b0083",
      "red-hat-issues-moderate-openssh-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-update-for-rhel-10-19ccd1c3",
    "title": "Red Hat Releases Kernel Update for RHEL 10",
    "summary": "Red Hat released a kernel update for Red Enterprise Linux 10 to address multiple security bugs. The update contains fixes for several kernel vulnerabilities, each with a CVSS base score listed in the CVE references, but no active exploitation has been reported. Administrators should apply the RHSA-2026:102168 update promptly to mitigate potential exploitation of the identified flaws.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102168",
    "publishedAt": "2026-11-23T05:06:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-update-for-rhel-10",
      "article-19ccd1c3",
      "19ccd1c3",
      "red-hat-releases-kernel-update-for-rhel-10-2ee15b"
    ]
  },
  {
    "slug": "flatpak-update-addresses-important-security-flaw-fbdc29fb",
    "title": "Flatpak Update Addresses Important Security Flaw",
    "summary": "Red Hat released a security update for Flatpak on Red Hat Enterprise Linux 9, addressing an important vulnerability in the container runtime. The advisory notes the flaw’s importance but does not list a CVE identifier; CVSS base scores are provided in the references. Apply the Flatpak update promptly; no further mitigations are required.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102181",
    "publishedAt": "2026-11-23T05:04:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "flatpak-update-addresses-important-security-flaw",
      "article-fbdc29fb",
      "fbdc29fb",
      "flatpak-update-addresses-important-security-flaw-2ee15b"
    ]
  },
  {
    "slug": "thunderbird-update-fixes-important-security-flaw-1fd8558b",
    "title": "Thunderbird Update Fixes Important Security Flaw",
    "summary": "A security update for Thunderbird on Red Hat Enterprise Linux 9.8 EUS addresses an important vulnerability affecting the email client. The flaw, rated Important by Red Hat Product Security, lacks a publicly disclosed CVE identifier but is documented with CVSS base scores in the advisory references. Red Hat recommends applying the update immediately; no additional workarounds are specified.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102171",
    "publishedAt": "2026-11-23T04:55:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "thunderbird-update-fixes-important-security-flaw",
      "article-1fd8558b",
      "1fd8558b",
      "thunderbird-update-fixes-important-security-flaw-2ee15b"
    ]
  },
  {
    "slug": "rhsa-2026-102178-important-xdg-desktop-portal-secu-14a0b22d",
    "title": "RHSA-2026:102178: Important: xdg-desktop-portal security update",
    "summary": "An update for xdg-desktop-portal is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102178",
    "publishedAt": "2026-11-23T04:54:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102178-important-xdg-desktop-portal-secu",
      "article-14a0b22d",
      "14a0b22d",
      "rhsa-2026-102178-important-xdg-desktop-portal-secu-2ee15b",
      "rhsa-2026-102178-important-xdg-desktop-portal-security-updat"
    ]
  },
  {
    "slug": "rhsa-2026-102190-moderate-openssh-security-update-72816923",
    "title": "RHSA-2026:102190: Moderate: openssh security update",
    "summary": "An update for openssh is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102190",
    "publishedAt": "2026-11-23T04:45:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-102190-moderate-openssh-security-update",
      "article-72816923",
      "72816923",
      "rhsa-2026-102190-moderate-openssh-security-update-2ee15b"
    ]
  },
  {
    "slug": "fence-agents-receives-important-security-update-561939fb",
    "title": "Fence-Agents Receives Important Security Update",
    "summary": "Red Hat released an Important security update for the fence-agents package on RHEL 8. The update addresses multiple vulnerabilities that could allow privilege escalation or denial of service, as indicated by the CVSS scores linked in the advisory. Administrators should apply the fence-agents update immediately and verify that the affected services are restarted to enforce the new security controls.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102154",
    "publishedAt": "2026-11-23T04:41:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fence-agents-receives-important-security-update",
      "article-561939fb",
      "561939fb",
      "fence-agents-receives-important-security-update-2ee15a"
    ]
  },
  {
    "slug": "matilda-sells-claimed-vmware-vcenter-exploit-3411243b",
    "title": "Matilda Sells Claimed VMware vCenter Exploit",
    "summary": "A forum seller named Matilda is offering a claimed exploit for VMware vCenter Server, targeting CVE-2026-123890. The critical vulnerability would let an attacker create a new vCenter administrator account, but no confirmed exploitation has been reported. Broadcom issued a patch on November 19, 2026; administrators should apply it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/alleged-vmware-vcenter-0-day-exploit/",
    "publishedAt": "2026-11-23T04:30:26.000Z",
    "cves": [
      "CVE-2026-123890"
    ],
    "additionalSources": [],
    "aliases": [
      "matilda-sells-claimed-vmware-vcenter-exploit",
      "article-3411243b",
      "3411243b",
      "matilda-sells-claimed-vmware-vcenter-exploit-726bd0"
    ]
  },
  {
    "slug": "curl-receives-moderate-security-update-eaf8d87e",
    "title": "Curl Receives Moderate Security Update",
    "summary": "Red Hat issued a Moderate security update for the curl package on RHEL 8. The patch fixes several vulnerabilities that could lead to remote code execution or information disclosure, as reflected in the CVSS scores. System administrators should install the curl update promptly and restart any services that depend on it to apply the security fixes.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102194",
    "publishedAt": "2026-11-23T04:16:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "curl-receives-moderate-security-update",
      "article-eaf8d87e",
      "eaf8d87e",
      "curl-receives-moderate-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-publishes-important-xdg-desktop-portal-pat-470d747d",
    "title": "Red Hat Publishes Important xdg-desktop-portal Patch",
    "summary": "Red Hat released an important security update for the xdg-desktop-portal component on RHEL 9, addressing multiple vulnerabilities each with a CVSS base score listed in the CVE references. The update mitigates potential privilege escalation and information disclosure risks that could be exploited via desktop portal interfaces. Red Hat recommends applying the patch promptly to ensure desktop security compliance.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102179",
    "publishedAt": "2026-11-23T04:13:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-publishes-important-xdg-desktop-portal-pat",
      "article-470d747d",
      "470d747d",
      "red-hat-publishes-important-xdg-desktop-portal-pat-2ee15b",
      "red-hat-publishes-important-xdg-desktop-portal-patch"
    ]
  },
  {
    "slug": "red-hat-issues-net-8-0-security-update-480ca2aa",
    "title": "Red Hat Issues .NET 8.0 Security Update",
    "summary": "Red Hat issued a security update for .NET 8.0 on RHEL 10.2 Extended Update Support, addressing several platform vulnerabilities. The update is rated Important, with CVSS base scores for each flaw listed via CVE links in the references, indicating high-severity risk if left unpatched. Red Hat urges immediate installation of the update and verification of CVSS scores to prioritize remediation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102173",
    "publishedAt": "2026-11-23T04:12:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-net-8-0-security-update",
      "article-480ca2aa",
      "480ca2aa",
      "red-hat-issues-net-8-0-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-releases-openssh-security-update-a1367179",
    "title": "Red Hat releases openssh security update",
    "summary": "Red Hat released a critical openssh security update for RHEL 10, addressing several bugs and enhancements. The update fixes multiple critical vulnerabilities, each with a CVSS base score in the CVE references, and is rated Moderate. Apply the update promptly today to mitigate potential exploitation of the affected openssh components.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102195",
    "publishedAt": "2026-11-23T04:12:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-openssh-security-update",
      "article-a1367179",
      "a1367179",
      "red-hat-releases-openssh-security-update-2ee15b"
    ]
  },
  {
    "slug": "rhel-9-thunderbird-update-fixes-code-execution-fla-a05946fa",
    "title": "RHEL 9 Thunderbird Update Fixes Code Execution Flaws",
    "summary": "Red Hat issued an important security update for Thunderbird on RHEL 9, fixing vulnerabilities that could lead to memory corruption or arbitrary code execution. The patch addresses CVE-linked defects with a CVSS score in the moderate range, and no active exploitation has been observed. Users should install RHSA-2026:102170 promptly to secure their mail clients.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102170",
    "publishedAt": "2026-11-23T04:11:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel-9-thunderbird-update-fixes-code-execution-fla",
      "article-a05946fa",
      "a05946fa",
      "rhel-9-thunderbird-update-fixes-code-execution-fla-2ee15b",
      "rhel-9-thunderbird-update-fixes-code-execution-flaws"
    ]
  },
  {
    "slug": "rhel-8-xdg-desktop-portal-update-addresses-privile-99bd95c4",
    "title": "RHEL 8 xdg-desktop-portal Update Addresses Privilege Escalation",
    "summary": "Red Hat released an important security update for xdg-desktop-portal on RHEL 8, addressing multiple vulnerabilities that could allow privilege escalation or code execution. The update includes patches for CVE-linked flaws, with a CVSS base score indicating moderate to high risk, but no active exploitation reported. Security teams should apply the RHSA-2026:102175 update immediately to mitigate potential attacks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102175",
    "publishedAt": "2026-11-23T03:45:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhel-8-xdg-desktop-portal-update-addresses-privile",
      "article-99bd95c4",
      "99bd95c4",
      "rhel-8-xdg-desktop-portal-update-addresses-privile-2ee15b",
      "rhel-8-xdg-desktop-portal-update-addresses-privilege-escalat"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-security-update-for-rhel6-34a6796a",
    "title": "Red Hat Releases Kernel Security Update for RHEL6",
    "summary": "A kernel vulnerability affecting Red Hat Enterprise Linux 6 Extended Lifecycle Support prompted an Important security update. The flaw, detailed in multiple CVE references, carries a CVSS base score indicating significant risk, but no active exploitation has been reported. Red Hat has released the patch; administrators should apply the update immediately to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102182",
    "publishedAt": "2026-11-23T03:44:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-security-update-for-rhel6",
      "article-34a6796a",
      "34a6796a",
      "red-hat-releases-kernel-security-update-for-rhel6-2ee15b"
    ]
  },
  {
    "slug": "red-hat-issues-thunderbird-security-update-028c3c47",
    "title": "Red Hat Issues Thunderbird Security Update",
    "summary": "An Important security update for Thunderbird on Red Hat Enterprise Linux 8 addresses a kernel-level vulnerability. The vulnerability, referenced by multiple CVE entries, has a CVSS base score reflecting high risk, though no active exploitation has been observed. Red Hat has issued the patch; users are advised to install it promptly to prevent potential compromise.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102172",
    "publishedAt": "2026-11-23T03:41:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-thunderbird-security-update",
      "article-028c3c47",
      "028c3c47",
      "red-hat-issues-thunderbird-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-updates-libgsf-for-security-50f93d6e",
    "title": "Red Hat Updates libgsf for Security",
    "summary": "Red Hat released a security update for libgsf on RHEL 10.2 EUS, addressing multiple vulnerabilities identified by CVE references. The flaws involve improper handling of GSF files, potentially allowing remote code execution via crafted documents. Red Hat has issued a patch; administrators should apply the update immediately to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102162",
    "publishedAt": "2026-11-23T03:35:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-libgsf-for-security",
      "article-50f93d6e",
      "50f93d6e",
      "red-hat-updates-libgsf-for-security-2ee15b"
    ]
  },
  {
    "slug": "git-lfs-security-update-for-red-hat-enterprise-lin-2d84a280",
    "title": "git-lfs Security Update for Red Hat Enterprise Linux 10",
    "summary": "Red Hat released a security update for git-lfs on Red Hat Enterprise Linux 10, addressing a vulnerability that could allow code execution. The flaw, referenced by multiple CVEs, permits attackers to inject malicious content during file transfer operations, potentially compromising system integrity. Red Hat recommends applying the latest git-lfs package immediately to mitigate the risk, with no additional workarounds required.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102186",
    "publishedAt": "2026-11-23T03:32:40.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Red Hat Security Advisories",
        "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102184"
      }
    ],
    "aliases": [
      "git-lfs-security-update-for-red-hat-enterprise-lin",
      "article-2d84a280",
      "2d84a280",
      "git-lfs-security-update-for-red-hat-enterprise-lin-2ee15b",
      "git-lfs-security-update-for-red-hat-enterprise-linux-10"
    ]
  },
  {
    "slug": "red-hat-issues-nodejs22-important-security-update-555683a3",
    "title": "Red Hat issues nodejs22 important security update",
    "summary": "An important-impact flaw in Red Hat Enterprise Linux 10.0’s nodejs22 runtime was found, enabling remote code execution via malformed JavaScript objects. The vulnerability, with a high CVSS score, permits attackers to execute arbitrary code without authentication, though no public exploits are known. Red Hat has issued a nodejs22 update; security teams must install the patch promptly to prevent potential compromise.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102180",
    "publishedAt": "2026-11-23T03:32:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-nodejs22-important-security-update",
      "article-555683a3",
      "555683a3",
      "red-hat-issues-nodejs22-important-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-releases-glib2-moderate-security-update-29f2a9a2",
    "title": "Red Hat releases glib2 moderate security update",
    "summary": "A moderate-impact vulnerability in Red Hat Enterprise Linux 8.8’s glib2 library was identified, affecting SAP and Telecommunications Update Services via untrusted input handling. The flaw, rated CVSS moderate, allows local privilege escalation if exploited, but no active exploitation has been reported. Red Hat has released a patch; administrators should apply the glib2 update immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102189",
    "publishedAt": "2026-11-23T03:30:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-glib2-moderate-security-update",
      "article-29f2a9a2",
      "29f2a9a2",
      "red-hat-releases-glib2-moderate-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-releases-xdg-desktop-portal-update-for-rhe-099203f6",
    "title": "Red Hat Releases xdg-desktop-portal Update for RHEL 10.2",
    "summary": "Red Hat issued a security update for xdg-desktop-portal on RHEL 10.2 Extended Update Support, addressing multiple vulnerabilities. The patch mitigates potential remote code execution and privilege escalation flaws in the portal's sandboxed application handling, with CVSS scores ranging from moderate to high. Red Hat recommends applying the update immediately to secure affected systems.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102176",
    "publishedAt": "2026-11-23T03:30:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-xdg-desktop-portal-update-for-rhe",
      "article-099203f6",
      "099203f6",
      "red-hat-releases-xdg-desktop-portal-update-for-rhe-2ee15b",
      "red-hat-releases-xdg-desktop-portal-update-for-rhel-10-2"
    ]
  },
  {
    "slug": "red-hat-releases-xdg-desktop-portal-security-updat-65044650",
    "title": "Red Hat Releases xdg-desktop-portal Security Update",
    "summary": "Red Hat issued a security update for xdg-desktop-portal on RHEL 9.4 for SAP Solutions, addressing multiple vulnerabilities. The update mitigates potential remote code execution and privilege escalation flaws identified in the portal's handling of sandboxed applications, with CVSS scores ranging from moderate to high. Red Hat recommends applying the update immediately to secure affected systems.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102165",
    "publishedAt": "2026-11-23T03:25:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-xdg-desktop-portal-security-updat",
      "article-65044650",
      "65044650",
      "red-hat-releases-xdg-desktop-portal-security-updat-2ee15b",
      "red-hat-releases-xdg-desktop-portal-security-update"
    ]
  },
  {
    "slug": "qemu-kvm-ma-flaw-allows-local-privilege-escalation-4423a1ec",
    "title": "QEMU KVM MA Flaw Allows Local Privilege Escalation",
    "summary": "Red Enterprise Linux 7 Extended Lifecycle Support users face a qemu-kvm-ma flaw that may enable local privilege escalation via the virtual machine monitor. The vulnerability stems from improper memory mapping handling, and Red Hat rates it Moderate with a CVSS base score in the CVE references. Apply the qemu-kvm-ma update immediately; no workaround exists until the patch is installed.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102196",
    "publishedAt": "2026-11-23T03:24:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "qemu-kvm-ma-flaw-allows-local-privilege-escalation",
      "article-4423a1ec",
      "4423a1ec",
      "qemu-kvm-ma-flaw-allows-local-privilege-escalation-2ee15b"
    ]
  },
  {
    "slug": "gnome-remote-desktop-vulnerability-enables-remote-ae144d19",
    "title": "GNOME Remote Desktop Vulnerability Enables Remote Code Execution",
    "summary": "Red Enterprise Linux 9.8 Extended Update Support users face a gnome-remote-desktop flaw that permits remote code execution via the remote desktop protocol. The issue arises from unchecked input during session negotiation, and Red Hat rates it Important with a CVSS base score in the CVE references. Apply the gnome-remote-desktop update immediately; no workaround exists until the patch is installed.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102169",
    "publishedAt": "2026-11-23T03:22:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gnome-remote-desktop-vulnerability-enables-remote",
      "article-ae144d19",
      "ae144d19",
      "gnome-remote-desktop-vulnerability-enables-remote-2ee15b",
      "gnome-remote-desktop-vulnerability-enables-remote-code-execu"
    ]
  },
  {
    "slug": "red-hat-issues-security-update-for-xdg-desktop-por-4ae5111b",
    "title": "Red Hat Issues Security Update for xdg-desktop-portal",
    "summary": "Red Hat released a security update for the xdg-desktop-portal component in Red Enterprise Linux 10, addressing multiple vulnerabilities. The update mitigates flaws that could allow privilege escalation or unauthorized data access, with CVSS scores provided in the CVE references. Administrators should apply the RHSA-2026:102177 update immediately to ensure protection against the identified weaknesses.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102177",
    "publishedAt": "2026-11-23T03:15:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-security-update-for-xdg-desktop-por",
      "article-4ae5111b",
      "4ae5111b",
      "red-hat-issues-security-update-for-xdg-desktop-por-2ee15b",
      "red-hat-issues-security-update-for-xdg-desktop-portal"
    ]
  },
  {
    "slug": "volkswagen-cars-exposed-via-bluetooth-spy-flaws-1dfe3aed",
    "title": "Volkswagen Cars Exposed via Bluetooth Spy Flaws",
    "summary": "Researchers demonstrated that Bluetooth flaws in Volkswagen vehicles enable eavesdropping on conversations and GPS tracking. The flaws grant unauthorized cabin control and location access, exposing private data and enabling remote manipulation, with a 16-month exposure after disclosure. Volkswagen should expedite the release of a patch and advise owners to disable Bluetooth or apply the fix immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hack-volkswagen-cars-via-bluetooth/",
    "publishedAt": "2026-11-23T03:09:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "volkswagen-cars-exposed-via-bluetooth-spy-flaws",
      "article-1dfe3aed",
      "1dfe3aed",
      "volkswagen-cars-exposed-via-bluetooth-spy-flaws-210daa"
    ]
  },
  {
    "slug": "openai-finds-zero-day-mobile-os-bypass-and-rce-808117f3",
    "title": "OpenAI Finds Zero-Day Mobile OS Bypass and RCE",
    "summary": "OpenAI’s GPT-6.2 Astra discovered zero-day flaws in a popular mobile OS and a common network service. The flaws include a permission-bypass exposing private data and a remote code execution path reachable from a low-privileged role. No vendor patch is yet available; security teams should monitor OpenAI advisories and apply any future OS or service updates promptly.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/openai-gpt-6-2-astra-0-day-vulnerabilities/",
    "publishedAt": "2026-11-23T03:06:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openai-finds-zero-day-mobile-os-bypass-and-rce",
      "article-808117f3",
      "808117f3",
      "openai-finds-zero-day-mobile-os-bypass-and-rce-17f932"
    ]
  },
  {
    "slug": "red-hat-updates-mingw-expat-for-rhel8-88477b25",
    "title": "Red Hat Updates mingw-expat for RHEL8",
    "summary": "Red Hat released an Important security update for mingw-expat on Red Hat Enterprise Linux 8 to fix a kernel-related flaw. The flaw, cited in several CVE references, carries a CVSS base score indicating high severity, but no active exploitation has been reported. The vendor has made the patch available; administrators should apply it immediately to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102193",
    "publishedAt": "2026-11-23T03:06:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-mingw-expat-for-rhel8",
      "article-88477b25",
      "88477b25",
      "red-hat-updates-mingw-expat-for-rhel8-2ee15b"
    ]
  },
  {
    "slug": "cleverbridge-reports-card-data-theft-f685ea02",
    "title": "Cleverbridge Reports Card Data Theft",
    "summary": "Cleverbridge confirmed that attackers exfiltrated payment card data from its e-commerce platform, including card numbers, expiration dates, and CVV codes. The breach involved unauthorized access to the platform’s database, exposing sensitive payment information to malicious actors. Cleverbridge has begun notifying affected customers and is investigating the incident; affected users should monitor accounts for fraudulent activity.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/cleverbridge-data-breach/",
    "publishedAt": "2026-11-23T02:37:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cleverbridge-reports-card-data-theft",
      "article-f685ea02",
      "f685ea02",
      "cleverbridge-reports-card-data-theft-70d8b7"
    ]
  },
  {
    "slug": "red-hat-updates-librabbitmq-on-rhel-8-3f737d08",
    "title": "Red Hat Updates librabbitmq on RHEL 8",
    "summary": "Red Hat issued a security update for librabbitmq on RHEL 8, addressing vulnerabilities rated as Important. The vulnerabilities lack a publicly disclosed CVE identifier in the advisory, but Red Hat provides CVSS base scores for each through referenced CVE links. Security teams should apply the librabbitmq update immediately to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102157",
    "publishedAt": "2026-11-23T02:16:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-librabbitmq-on-rhel-8",
      "article-3f737d08",
      "3f737d08",
      "red-hat-updates-librabbitmq-on-rhel-8-2ee15a"
    ]
  },
  {
    "slug": "red-hat-updates-libgsf-on-rhel-9-ff7053b1",
    "title": "Red Hat Updates libgsf on RHEL 9",
    "summary": "Red Hat released a security update for libgsf on RHEL 9, addressing vulnerabilities rated as Important. No specific CVE identifiers are listed in the advisory, but CVSS base scores are available via referenced CVE links for each vulnerability. Apply the libgsf update promptly to reduce exposure to the identified weaknesses.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102160",
    "publishedAt": "2026-11-23T02:14:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-libgsf-on-rhel-9",
      "article-ff7053b1",
      "ff7053b1",
      "red-hat-updates-libgsf-on-rhel-9-2ee15b"
    ]
  },
  {
    "slug": "red-hat-gfs2-utils-security-update-released-cf32cd93",
    "title": "Red Hat gfs2-utils security update released",
    "summary": "Red Hat released a gfs2-utils update for Enterprise Linux 9, fixing a flaw that could allow arbitrary code via malformed GFS2 metadata. The issue stems from improper handling of GFS2 superblock fields, with a CVSS base score indicating moderate impact; no active exploitation observed. Apply the patch through the standard update channel to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102183",
    "publishedAt": "2026-11-23T02:14:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-gfs2-utils-security-update-released",
      "article-cf32cd93",
      "cf32cd93",
      "red-hat-gfs2-utils-security-update-released-2ee15b"
    ]
  },
  {
    "slug": "red-hat-libgsf-security-update-released-29b1afa8",
    "title": "Red Hat libgsf security update released",
    "summary": "Red Hat released a libgsf update for Enterprise Linux 9.8 EUS, fixing a flaw that could allow arbitrary code via malformed GSF files. The issue stems from insufficient validation of GSF headers, with a CVSS base score indicating important impact; no active exploitation reported. Apply the patch via the standard update channel to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102161",
    "publishedAt": "2026-11-23T02:13:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-libgsf-security-update-released",
      "article-29b1afa8",
      "29b1afa8",
      "red-hat-libgsf-security-update-released-2ee15b"
    ]
  },
  {
    "slug": "isc-stormcast-monday-november-23-2026-3e9121da",
    "title": "ISC Stormcast: Monday November 23, 2026",
    "summary": "The SANS Internet Storm Center releases its weekly Stormcast podcast for Monday, November 23, 2026. The episode covers current threat landscape insights, emerging attack trends, and defensive best practices shared by industry experts. Listeners can access the recording and transcript via the ISC website, providing a resource for security teams to stay informed.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33548",
    "publishedAt": "2026-11-23T02:00:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isc-stormcast-monday-november-23-2026",
      "article-3e9121da",
      "3e9121da",
      "isc-stormcast-monday-november-23-2026-57dd81"
    ]
  },
  {
    "slug": "red-hat-updates-flatpak-on-rhel-8-8-0270c368",
    "title": "Red Hat Updates flatpak on RHEL 8.8",
    "summary": "Red Hat released a security update for flatpak on RHEL 8.8, addressing vulnerabilities rated as Important. The advisory does not list specific CVE identifiers, but CVSS base scores are provided via referenced CVE links for each vulnerability. Security teams should apply the flatpak update promptly to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102158",
    "publishedAt": "2026-11-23T01:58:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-flatpak-on-rhel-8-8",
      "article-0270c368",
      "0270c368",
      "red-hat-updates-flatpak-on-rhel-8-8-2ee15a"
    ]
  },
  {
    "slug": "red-hat-issues-important-libgsf-security-update-a34525dd",
    "title": "Red Hat Issues Important libgsf Security Update",
    "summary": "Red Hat released a libgsf update on RHEL 10, fixing vulnerabilities that could enable local privilege escalation or denial of service. The advisory lists CVSS base scores and references CVE identifiers, though specific CVE numbers are omitted. Red Hat recommends applying the update immediately via the RPM package or system update tools to mitigate exploitation risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102159",
    "publishedAt": "2026-11-23T01:47:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-libgsf-security-update",
      "article-a34525dd",
      "a34525dd",
      "red-hat-issues-important-libgsf-security-update-2ee15b"
    ]
  },
  {
    "slug": "red-hat-flatpak-update-fixes-security-vulnerabilit-58f0e68c",
    "title": "Red Hat Flatpak Update Fixes Security Vulnerabilities",
    "summary": "Red Hat issued a flatpak patch for RHEL 8.4 to fix multiple security flaws. The update addresses privilege-escalation and information-leak vulnerabilities, each with a CVSS score listed via CVE references, but no exploitation reported. Apply the flatpak update immediately; no workaround exists, and users should confirm the new flatpak version post-install.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102156",
    "publishedAt": "2026-11-23T01:23:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-flatpak-update-fixes-security-vulnerabilit",
      "article-58f0e68c",
      "58f0e68c",
      "red-hat-flatpak-update-fixes-security-vulnerabilit-2ee15a",
      "red-hat-flatpak-update-fixes-security-vulnerabilities"
    ]
  },
  {
    "slug": "red-hat-kernel-patch-addresses-multiple-security-f-74ef8639",
    "title": "Red Hat Kernel Patch Addresses Multiple Security Flaws",
    "summary": "Red Hat issued a kernel patch for RHEL 10.2 EUS to fix multiple Linux kernel security flaws. The update addresses privilege-escalation and information-leak flaws, each with a CVSS score listed via CVE references, but no active exploitation has been seen. Red Hat advises applying the kernel update immediately; no workaround exists, and users should confirm the new kernel version post-install.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102090",
    "publishedAt": "2026-11-23T00:51:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-patch-addresses-multiple-security-f",
      "article-74ef8639",
      "74ef8639",
      "red-hat-kernel-patch-addresses-multiple-security-f-2ee157",
      "red-hat-kernel-patch-addresses-multiple-security-flaws"
    ]
  },
  {
    "slug": "red-hat-issues-fltk-security-patch-743179e1",
    "title": "Red Hat Issues fltk Security Patch",
    "summary": "Red Enterprise Linux 9 users receive an important security update for the fltk GUI toolkit. The update addresses one or more vulnerabilities that could allow attackers to execute code or compromise system integrity, as indicated by the CVSS base score linked in the advisory. Red Hat recommends applying the patch immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102089",
    "publishedAt": "2026-11-23T00:40:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-fltk-security-patch",
      "article-743179e1",
      "743179e1",
      "red-hat-issues-fltk-security-patch-2ee157"
    ]
  },
  {
    "slug": "google-blocks-ai-tool-calls-with-governance-42e3e322",
    "title": "Google Blocks AI Tool Calls with Governance",
    "summary": "Google introduces semantic governance policies on its Gemini platform, allowing enterprises to pre-screen AI agent tool calls. The policies evaluate each proposed tool invocation against user intent and company rules, blocking non-compliant actions at the Agent Gateway enforcement point. Organizations can configure permissions to define allowed actions, enhancing control over AI agent behavior.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/google-semantic-governance-policies/",
    "publishedAt": "2026-11-23T00:27:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-blocks-ai-tool-calls-with-governance",
      "article-42e3e322",
      "42e3e322",
      "google-blocks-ai-tool-calls-with-governance-1a2d8c"
    ]
  },
  {
    "slug": "red-hat-updates-python-oauthlib-security-b56e0807",
    "title": "Red Hat Updates python-oauthlib Security",
    "summary": "Red Enterprise Linux 8.8 users receive an important security update for python-oauthlib, a library used for OAuth authentication. The update fixes one or more vulnerabilities that could enable attackers to bypass authentication or inject malicious tokens, as indicated by the CVSS base score referenced in the advisory. Red Hat advises applying the patch promptly to secure authentication flows.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102091",
    "publishedAt": "2026-11-23T00:18:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-python-oauthlib-security",
      "article-b56e0807",
      "b56e0807",
      "red-hat-updates-python-oauthlib-security-2ee157"
    ]
  },
  {
    "slug": "red-hat-python-oauthlib-patch-resolves-security-is-fbed9239",
    "title": "Red Hat python-oauthlib Patch Resolves Security Issues",
    "summary": "Red Hat released a python-oauthlib patch for RHEL 8.4 to address several security vulnerabilities. The update mitigates privilege-escalation and information-leak flaws, each assigned a CVSS score and referenced via CVE links, with no active exploitation observed. Apply the python-oauthlib update immediately; no workaround is available, and users should verify the new package version after installation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102092",
    "publishedAt": "2026-11-23T00:16:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-python-oauthlib-patch-resolves-security-is",
      "article-fbed9239",
      "fbed9239",
      "red-hat-python-oauthlib-patch-resolves-security-is-2ee157",
      "red-hat-python-oauthlib-patch-resolves-security-issues"
    ]
  },
  {
    "slug": "red-hat-releases-open-vswitch-2-15-security-update-d4e32cc7",
    "title": "Red Hat Releases Open vSwitch 2.15 Security Update",
    "summary": "Red Hat released a security update for Open vSwitch 2.15 on RHEL 8 Fast Datapath, addressing a vulnerability that could allow unauthorized traffic manipulation. The advisory rates the issue as Important, with CVSS base scores linked to CVE entries, indicating a high-severity flaw that may enable remote code execution.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102088",
    "publishedAt": "2026-11-23T00:14:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-open-vswitch-2-15-security-update",
      "article-d4e32cc7",
      "d4e32cc7",
      "red-hat-releases-open-vswitch-2-15-security-update-2ee157"
    ]
  },
  {
    "slug": "red-hat-releases-openvswitch-3-6-patch-c6abbe2c",
    "title": "Red Hat Releases openvswitch 3.6 Patch",
    "summary": "Red Enterprise Linux 10 users receive an important security update for openvswitch 3.6, a software switch used in virtual networking. The update addresses one or more vulnerabilities that could allow attackers to execute code or disrupt network traffic, as indicated by the CVSS base score linked in the advisory. Red Hat recommends applying the patch immediately to protect virtual networks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:102087",
    "publishedAt": "2026-11-23T00:12:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-openvswitch-3-6-patch",
      "article-c6abbe2c",
      "c6abbe2c",
      "red-hat-releases-openvswitch-3-6-patch-2ee157"
    ]
  },
  {
    "slug": "ghostscript-upload2shell-vulnerability-poc-release-419e4f95",
    "title": "Ghostscript Upload2Shell Vulnerability PoC Released",
    "summary": "Ghostscript’s Upload2Shell vulnerability (CVE-2026-125396) allows attackers to execute arbitrary code via crafted PDF uploads. The flaw, rated as a high-severity issue, exploits a buffer overflow in the PDF parsing engine, enabling remote code execution without authentication. Security teams should update Ghostscript to the latest version or apply the vendor-issued patch to prevent exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Sophos Threat Research",
    "sourceUrl": "https://www.sophos.com/en-us/blog/proof-of-concept-available-for-ghostscript-upload2shell",
    "publishedAt": "2026-11-23T00:00:00.000Z",
    "cves": [
      "CVE-2026-125396"
    ],
    "additionalSources": [],
    "aliases": [
      "ghostscript-upload2shell-vulnerability-poc-release",
      "article-419e4f95",
      "419e4f95",
      "ghostscript-upload2shell-vulnerability-poc-release-29be2e",
      "ghostscript-upload2shell-vulnerability-poc-released"
    ]
  },
  {
    "slug": "check-point-management-servers-hit-by-intrusion-ca-0d35bd8b",
    "title": "Check Point Management Servers Hit by Intrusion Campaign",
    "summary": "GreyNoise discovered an intrusion campaign targeting Check Point Security Management Servers, with confirmed attack activity between October 17 and November 2, 2026. The campaign impacted at least 22 distinct organizations globally. Security teams should investigate exposed management servers and review related logs for signs of compromise.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "GreyNoise Labs",
    "sourceUrl": "https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign",
    "publishedAt": "2026-11-23T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "check-point-management-servers-hit-by-intrusion-ca",
      "article-0d35bd8b",
      "0d35bd8b",
      "check-point-management-servers-hit-by-intrusion-ca-3ef513",
      "check-point-management-servers-hit-by-intrusion-campaign"
    ]
  },
  {
    "slug": "debian-13-8-bundles-kernel-and-chromium-fixes-8096e679",
    "title": "Debian 13.8 Bundles Kernel and Chromium Fixes",
    "summary": "Debian 13.8 bundles security fixes for the kernel, Chromium, Firefox ESR, OpenJDK 25, nginx, BIND 9, Dovecot, rsync, PostgreSQL 17, and 112 other packages. The update covers 122 advisories, DSA-6408 to DSA-6629, fixing critical bugs that could enable privilege escalation. Users should run 'apt update && apt upgrade' on trixie, verify packages, and monitor Debian Security Advisories for further patches.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/23/debian-13-8-released/",
    "publishedAt": "2026-11-22T23:05:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "debian-13-8-bundles-kernel-and-chromium-fixes",
      "article-8096e679",
      "8096e679",
      "debian-13-8-bundles-kernel-and-chromium-fixes-426950"
    ]
  },
  {
    "slug": "gl-inet-cloud-flaw-enables-router-and-kvm-malware-f26108c9",
    "title": "GL.iNet Cloud Flaw Enables Router and KVM Malware",
    "summary": "Hackers leveraged a flaw in GL.iNet’s cloud-based remote-management service to compromise customer routers and KVM devices. The vulnerability permits unauthenticated code execution, enabling attackers to drop custom malware, establish backdoors, and spawn reverse shells for persistent remote control. GL.iNet has released a patch for the cloud service; administrators should apply the update immediately and verify device firmware integrity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-exploit-glinet-cloud-flaw-to-infect-routers-kvm-devices/",
    "publishedAt": "2026-11-22T18:45:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gl-inet-cloud-flaw-enables-router-and-kvm-malware",
      "article-f26108c9",
      "f26108c9",
      "gl-inet-cloud-flaw-enables-router-and-kvm-malware-630c8c"
    ]
  },
  {
    "slug": "debian-ubuntu-remove-rsyslogd-timestamp-config-dir-fc4a37ea",
    "title": "Debian, Ubuntu Remove rsyslogd Timestamp Config Directive",
    "summary": "Debian and Ubuntu removed a configuration directive from rsyslogd in early 2023, changing syslog timestamp handling. The change removes a legacy option that allowed custom timestamp formatting, potentially causing logs to default to system time zones and reducing forensic precision. Users should review rsyslogd configuration files for timestamp settings and apply any vendor updates that reintroduce desired formatting options.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33530",
    "publishedAt": "2026-11-22T18:38:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "debian-ubuntu-remove-rsyslogd-timestamp-config-dir",
      "article-fc4a37ea",
      "fc4a37ea",
      "debian-ubuntu-remove-rsyslogd-timestamp-config-dir-57dd81",
      "debian-ubuntu-remove-rsyslogd-timestamp-config-directive"
    ]
  },
  {
    "slug": "virustotal-detects-ransomware-missed-by-75-av-engi-c4a5db07",
    "title": "VirusTotal Detects Ransomware Missed by 75 AV Engines",
    "summary": "VirusTotal introduced a runtime encryption check that identified a Python ransomware sample previously undetected by 75 antivirus engines. The malware leveraged obfuscated Python code to evade static signatures, but its encryption activity triggered the new behavior analysis, revealing its malicious intent. Security teams should enable VirusTotal’s behavior-based detection and ensure their antivirus solutions are updated to recognize similar obfuscated ransomware.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/virustotal-ransomware-detection/",
    "publishedAt": "2026-11-22T17:11:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "virustotal-detects-ransomware-missed-by-75-av-engi",
      "article-c4a5db07",
      "c4a5db07",
      "virustotal-detects-ransomware-missed-by-75-av-engi-614dd5",
      "virustotal-detects-ransomware-missed-by-75-av-engines"
    ]
  },
  {
    "slug": "optimizely-malware-hits-178-organizations-fb37b3e2",
    "title": "Optimizely Malware Hits 178 Organizations",
    "summary": "An attacker exploited a flaw in Optimizely’s web experimentation platform to plant malicious JavaScript on 178 organizations’ websites, such as BBC, CNN, and Zoom. The vulnerability, a memory-corruption flaw in OpenJDK’s Base64 decoder (CVE-2026-114938), requires specific CPU conditions, limiting exploitation but still high severity. Optimizely confirmed the incident, urged customers to update the platform, remove injected scripts, and monitor traffic.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/22/week-in-review-java4shell-proves-tricky-to-exploit-malware-planted-via-optimizely-hits-178-orgs/",
    "publishedAt": "2026-11-22T09:00:25.000Z",
    "cves": [
      "CVE-2026-114938"
    ],
    "additionalSources": [],
    "aliases": [
      "optimizely-malware-hits-178-organizations",
      "article-fb37b3e2",
      "fb37b3e2",
      "optimizely-malware-hits-178-organizations-654f99"
    ]
  },
  {
    "slug": "openrouter-removes-providers-after-prompt-theft-di-9940c3f7",
    "title": "OpenRouter Removes Providers After Prompt Theft Discovery",
    "summary": "OpenRouter removed three AI inference providers after researchers uncovered months of prompt theft from their internal systems. The stolen prompts, some marked Zero Data Retention, were accessed without authorization, exposing user inputs; Dragos confirmed the breach to vendors. OpenRouter recommends vendors review access controls, enforce strict data-retention policies, and apply security hardening to prevent future prompt exfiltration.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html",
    "publishedAt": "2026-11-22T05:06:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openrouter-removes-providers-after-prompt-theft-di",
      "article-9940c3f7",
      "9940c3f7",
      "openrouter-removes-providers-after-prompt-theft-di-799f6a",
      "openrouter-removes-providers-after-prompt-theft-discovery"
    ]
  },
  {
    "slug": "ghostscript-sandbox-escape-rce-demonstrated-via-fi-c975302d",
    "title": "Ghostscript Sandbox Escape RCE Demonstrated via File Uploads",
    "summary": "Researchers demonstrated a sandbox-escape RCE flaw in Ghostscript, a common PDF/PostScript interpreter on Linux servers, via crafted file uploads. The flaw lets attackers bypass Ghostscript’s isolation and run arbitrary commands on the host, compromising the web application; a PoC was released by pwn.ai. Ghostscript issued a patch; admins should apply it immediately and verify file-upload handling remains sandboxed.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/researchers-demonstrate-ghostscript.html",
    "publishedAt": "2026-11-22T05:03:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ghostscript-sandbox-escape-rce-demonstrated-via-fi",
      "article-c975302d",
      "c975302d",
      "ghostscript-sandbox-escape-rce-demonstrated-via-fi-4d8551",
      "ghostscript-sandbox-escape-rce-demonstrated-via-file-uploads"
    ]
  },
  {
    "slug": "openrouter-removes-compromised-ai-hosts-revokes-ze-e5254118",
    "title": "OpenRouter Removes Compromised AI Hosts, Revokes Zero Data Retention",
    "summary": "OpenRouter removed three AI hosting providers and revoked Zero Data Retention for 125 endpoints after detecting provider compromise. The flaw arises from third-party providers lacking secure isolation, risking private chat data leakage; no breach confirmed, but exposure persists. OpenRouter notified affected customers, removed compromised providers, and revoked Zero Data Retention; teams should verify endpoint settings and monitor anomalous access.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/openrouter-ai-chat-leaks/",
    "publishedAt": "2026-11-22T03:58:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openrouter-removes-compromised-ai-hosts-revokes-ze",
      "article-e5254118",
      "e5254118",
      "openrouter-removes-compromised-ai-hosts-revokes-ze-2e8006",
      "openrouter-removes-compromised-ai-hosts-revokes-zero-data-re"
    ]
  },
  {
    "slug": "red-hat-issues-critical-php-patch-for-rhel7-944c034d",
    "title": "Red Hat Issues Critical PHP Patch for RHEL7",
    "summary": "Red Hat released a critical PHP update for RHEL7 Extended Lifecycle Support, fixing high-severity vulnerabilities that could allow remote code execution. The patch covers several CVE-identified flaws, each rated with a CVSS base score indicating critical impact, though no exploitation has been seen. Apply the update immediately via RHSA-2026:101337 to keep PHP secure.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:101337",
    "publishedAt": "2026-11-22T03:56:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-php-patch-for-rhel7",
      "article-944c034d",
      "944c034d",
      "red-hat-issues-critical-php-patch-for-rhel7-2ee0ed"
    ]
  },
  {
    "slug": "ghostscript-upload2shell-enables-remote-command-ex-85e5b759",
    "title": "Ghostscript Upload2Shell Enables Remote Command Execution",
    "summary": "Ghostscript’s Type 1 font loader flaw, CVE-2026-125396, allows attackers to run arbitrary commands on WordPress, Roundcube, and print servers via file processing. The flaw does not need direct Ghostscript exposure, yet it grants remote code execution on any server that processes malicious fonts. Patches for Ghostscript 10.08.0+ are released; administrators should upgrade immediately to eliminate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/upload2shell-flaw/",
    "publishedAt": "2026-11-22T02:43:08.000Z",
    "cves": [
      "CVE-2026-125396"
    ],
    "additionalSources": [],
    "aliases": [
      "ghostscript-upload2shell-enables-remote-command-ex",
      "article-85e5b759",
      "85e5b759",
      "ghostscript-upload2shell-enables-remote-command-ex-4a2f52",
      "ghostscript-upload2shell-enables-remote-command-execution"
    ]
  },
  {
    "slug": "red-hat-issues-critical-php-8-2-update-efc53ac1",
    "title": "Red Hat Issues Critical PHP 8.2 Update",
    "summary": "Red Hat issued a critical update for php:8.2 on RHEL8, fixing vulnerabilities that could enable remote code execution via PHP scripts. The CVE entries show CVSS scores up to 9.8, allowing unauthenticated attackers to run arbitrary code on affected servers. Administrators should apply the php:8.2 patch immediately and confirm the new module version is deployed to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:101276",
    "publishedAt": "2026-11-22T02:24:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-php-8-2-update",
      "article-efc53ac1",
      "efc53ac1",
      "red-hat-issues-critical-php-8-2-update-2ee0ea"
    ]
  },
  {
    "slug": "entra-connect-health-flaw-exposes-admin-emails-20cbb0e4",
    "title": "Entra Connect Health Flaw Exposes Admin Emails",
    "summary": "A flaw in Microsoft Entra Connect Health lets attackers read admin and technical contact email addresses and config data. The vulnerability offers read-only access to these records but no inbox or message retrieval, and was disclosed via a Reddit customer notice. Microsoft applied a fix on November 19; administrators should patch immediately to stop data exposure.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsoft-entra-connect-health-flaw/",
    "publishedAt": "2026-11-22T02:03:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "entra-connect-health-flaw-exposes-admin-emails",
      "article-20cbb0e4",
      "20cbb0e4",
      "entra-connect-health-flaw-exposes-admin-emails-307435"
    ]
  },
  {
    "slug": "rackspace-spot-breach-exposes-customer-kubernetes-49607481",
    "title": "Rackspace Spot Breach Exposes Customer Kubernetes Secrets",
    "summary": "Hackers breached Rackspace Spot cloud platform using compromised credentials, deploying unauthorized workloads and accessing Kubernetes secrets in customer clusters. The breach leveraged stolen credentials to read sensitive cluster secrets, exposing potential data leakage without exploiting a known software flaw. Rackspace urged customers to rotate compromised credentials, audit workloads, and apply any available platform updates to mitigate the exposure.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/rackspace-spot-breach-let-hackers-access-customer-kubernetes-secrets/",
    "publishedAt": "2026-11-21T22:59:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rackspace-spot-breach-exposes-customer-kubernetes",
      "article-49607481",
      "49607481",
      "rackspace-spot-breach-exposes-customer-kubernetes-43072e",
      "rackspace-spot-breach-exposes-customer-kubernetes-secrets"
    ]
  },
  {
    "slug": "red-hat-issues-critical-update-for-php-8-2-ba37de30",
    "title": "Red Hat Issues Critical Update for PHP 8.2",
    "summary": "Red Hat released a critical security update for the php:8.2 module on RHEL 9.8 Extended Update Support, addressing high-impact vulnerabilities. The flaws, listed in CVE references, enable remote code execution via malformed input, with CVSS scores up to 9.8. Red Hat recommends applying the update immediately; no workaround exists, and users should verify module integrity post-installation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:101253",
    "publishedAt": "2026-11-21T18:51:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-update-for-php-8-2",
      "article-ba37de30",
      "ba37de30",
      "red-hat-issues-critical-update-for-php-8-2-2ee0ea"
    ]
  },
  {
    "slug": "red-hat-issues-critical-update-for-php-8-3-647cf248",
    "title": "Red Hat Issues Critical Update for PHP 8.3",
    "summary": "Red Hat released a critical security update for the php:8.3 module on RHEL 9.8 Extended Update Support, addressing high-impact vulnerabilities. The flaws, listed in CVE references, enable remote code execution via malformed input, with CVSS scores up to 9.8. Red Hat recommends applying the update immediately; no workaround exists, and users should verify module integrity post-installation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:101252",
    "publishedAt": "2026-11-21T18:28:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-update-for-php-8-3",
      "article-647cf248",
      "647cf248",
      "red-hat-issues-critical-update-for-php-8-3-2ee0ea"
    ]
  },
  {
    "slug": "microsoft-entra-connect-health-breach-exposes-admi-92d37834",
    "title": "Microsoft Entra Connect Health Breach Exposes Admin Emails",
    "summary": "Attackers exploited a flaw in Microsoft Entra Connect Health, gaining unauthorized access to administrator email addresses and tenant configuration data. The flaw enabled remote code execution via a malformed authentication token, letting attackers read tenant settings without credentials. Microsoft issued a patch and urged customers to update Entra Connect Health immediately, disabling the affected API endpoint as a temporary mitigation.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/microsoft-entra-connect-health-flaw-exploited-to-steal-tenant-data/",
    "publishedAt": "2026-11-21T18:01:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-entra-connect-health-breach-exposes-admi",
      "article-92d37834",
      "92d37834",
      "microsoft-entra-connect-health-breach-exposes-admi-33d14e",
      "microsoft-entra-connect-health-breach-exposes-admin-emails"
    ]
  },
  {
    "slug": "mcp-servers-pose-new-ai-attack-surface-7fc7f366",
    "title": "MCP Servers Pose New AI Attack Surface",
    "summary": "MCP lets AI apps connect to external tools, APIs, and business data, making each server a new attack surface. Misconfigurations or weak authentication allow attackers to gain unauthorized access, potentially compromising corporate systems and data. Apply strict access controls, enable MFA, audit settings, and install vendor patches regularly to mitigate risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/mcp-server-security/",
    "publishedAt": "2026-11-21T17:24:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "mcp-servers-pose-new-ai-attack-surface",
      "article-7fc7f366",
      "7fc7f366",
      "mcp-servers-pose-new-ai-attack-surface-2864c5"
    ]
  },
  {
    "slug": "red-hat-issues-critical-update-for-php-7-4-09495a8d",
    "title": "Red Hat Issues Critical Update for PHP 7.4",
    "summary": "Red Hat released a critical security update for the php:7.4 module on RHEL 8, addressing high-impact vulnerabilities. The flaws, listed in CVE references, enable remote code execution via malformed input, with CVSS scores up to 9.8. Red Hat recommends applying the update immediately; no workaround exists, and users should verify module integrity post-installation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100991",
    "publishedAt": "2026-11-21T15:34:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-critical-update-for-php-7-4",
      "article-09495a8d",
      "09495a8d",
      "red-hat-issues-critical-update-for-php-7-4-2ee090"
    ]
  },
  {
    "slug": "fbi-ncic-database-breach-exposes-sensitive-law-enf-1fef14b8",
    "title": "FBI NCIC Database Breach Exposes Sensitive Law Enforcement Records",
    "summary": "FBI National Crime Information Center (NCIC) database was breached, exposing case files and personnel records. Attackers exploited an undisclosed flaw to gain unauthorized access, potentially compromising investigative workflows. Investigators are isolating the breach, patching the flaw, urging agencies to review NCIC access controls, and coordinating with federal cybersecurity teams to mitigate further exposure.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/fbi-reportedly-hacked-again-this-time-targeting-nationwide-police-database/",
    "publishedAt": "2026-11-21T14:26:04.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "SecurityWeek",
        "sourceUrl": "https://www.securityweek.com/fbi-investigating-apparent-hack-of-its-key-national-criminal-justice-database-ap-source-says/"
      }
    ],
    "aliases": [
      "fbi-ncic-database-breach-exposes-sensitive-law-enf",
      "article-1fef14b8",
      "1fef14b8",
      "fbi-ncic-database-breach-exposes-sensitive-law-enf-3a94f2",
      "fbi-ncic-database-breach-exposes-sensitive-law-enforcement-r"
    ]
  },
  {
    "slug": "crowdstrike-negotiates-zscaler-acquisition-822c7184",
    "title": "CrowdStrike Negotiates Zscaler Acquisition",
    "summary": "CrowdStrike is negotiating a potential acquisition of Zscaler, the cloud-security platform provider that offers zero-trust networking and secure web gateways. The deal could consolidate market share, expand CrowdStrike's cloud security portfolio, and reshape vendor competition by integrating Zscaler's zero-trust solutions. Both firms are conducting due diligence, and the transaction remains unconfirmed pending regulatory review and shareholder approval.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/crowdstrike-to-acquire-zscaler/",
    "publishedAt": "2026-11-21T13:12:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "crowdstrike-negotiates-zscaler-acquisition",
      "article-822c7184",
      "822c7184",
      "crowdstrike-negotiates-zscaler-acquisition-457030"
    ]
  },
  {
    "slug": "trump-names-kirsten-davies-national-cyber-director-d6ec788a",
    "title": "Trump Names Kirsten Davies National Cyber Director",
    "summary": "White House appoints Kirsten Davies as National Cyber Director to steer America First cyber strategy and oversee federal cyber operations. Davies brings experience from previous cyber leadership roles, expected to shape national cyber defense priorities and cybersecurity policy coordination. The appointment signals a shift toward a more aggressive cyber posture; stakeholders should monitor policy developments and regulatory initiatives.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/president-trump-taps-kirsten-davies-as-national-cyber-director/",
    "publishedAt": "2026-11-21T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "trump-names-kirsten-davies-national-cyber-director",
      "article-d6ec788a",
      "d6ec788a",
      "trump-names-kirsten-davies-national-cyber-director-6c29ae"
    ]
  },
  {
    "slug": "china-linked-hackers-exploit-monai-label-zero-day-bc54a5be",
    "title": "China-Linked Hackers Exploit MONAI Label Zero-Day",
    "summary": "China-linked threat actors used autonomous Cairn AI agents to locate and exploit a critical vulnerability in MONAI Label medical software. The flaw permits unauthenticated critical remote code execution via malformed input, enabling data exfiltration from imaging systems. Amazon issued an out-of-band patch; all MONAI Label users should apply it immediately.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/amazon-china-linked-hackers-ai-agents-exploited-medical-software-zero-day/",
    "publishedAt": "2026-11-21T12:08:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "china-linked-hackers-exploit-monai-label-zero-day",
      "article-bc54a5be",
      "bc54a5be",
      "china-linked-hackers-exploit-monai-label-zero-day-750f66"
    ]
  },
  {
    "slug": "malicious-webpage-extracts-meta-muse-private-chats-24931218",
    "title": "Malicious Webpage Extracts Meta Muse Private Chats",
    "summary": "Researchers showed a single malicious webpage can extract private conversations and stored memories from Meta Muse without approval prompts. The method could also harvest credentials for connected accounts, but the demo was confined to one user and did not impact real users. Meta has not issued a fix; users should avoid untrusted webpages and consider disabling Muse until further guidance.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/a-single-malicious-webpage-let.html",
    "publishedAt": "2026-11-21T11:53:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "malicious-webpage-extracts-meta-muse-private-chats",
      "article-24931218",
      "24931218",
      "malicious-webpage-extracts-meta-muse-private-chats-2e042a"
    ]
  },
  {
    "slug": "gpgme-memory-bug-exposes-app-data-via-malicious-ke-95ec495f",
    "title": "GPGME Memory Bug Exposes App Data via Malicious Keys",
    "summary": "A malicious OpenPGP key with an unusually long user ID triggers a critical memory bug in GPGME, the core library of GnuPG, exposing application data. The flaw, CVE-2026-129975, affects all software using GPGME before 2.3.0 and lets attackers read memory without authentication. GnuPG released patched versions; users should upgrade to GPGME 2.3.0+ and enforce key-length checks to mitigate the issue.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/gnupg-warns-critical-gpgme-flaw-could.html",
    "publishedAt": "2026-11-21T11:05:53.000Z",
    "cves": [
      "CVE-2026-129975"
    ],
    "additionalSources": [],
    "aliases": [
      "gpgme-memory-bug-exposes-app-data-via-malicious-ke",
      "article-95ec495f",
      "95ec495f",
      "gpgme-memory-bug-exposes-app-data-via-malicious-ke-177e2e",
      "gpgme-memory-bug-exposes-app-data-via-malicious-keys"
    ]
  },
  {
    "slug": "ai-agents-exploit-monai-label-zero-day-for-root-ac-7d5446ad",
    "title": "AI Agents Exploit MONAI Label Zero-Day for Root Access",
    "summary": "AI agents discovered a zero-day in MONAI Label 0.8.5 and earlier, an open-source medical-imaging server, and used it to gain root on a university server. The flaw permits unauthenticated writes outside the server’s storage folder, enabling full system control without credentials. A patch for MONAI Label 0.8.5+ is available; admins should upgrade immediately and restrict default write permissions.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/attackers-ai-agents-found-zero-day-in.html",
    "publishedAt": "2026-11-21T11:03:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-agents-exploit-monai-label-zero-day-for-root-ac",
      "article-7d5446ad",
      "7d5446ad",
      "ai-agents-exploit-monai-label-zero-day-for-root-ac-67265c",
      "ai-agents-exploit-monai-label-zero-day-for-root-access"
    ]
  },
  {
    "slug": "signal-blocks-screenshot-functionality-on-ios-and-77d729d8",
    "title": "Signal Blocks Screenshot Functionality on iOS and Android to Prevent AI Assistant Data Capture",
    "summary": "Signal has blocked screenshot functionality on iOS and Android to prevent AI assistants from capturing private chat content. The change addresses a privacy flaw that allowed screen-data interception, enabling AI agents to harvest message content without user interaction. Users can now install the patch to safeguard conversations, though protection remains incomplete against advanced AI detection.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/signal-blocks-ai-agents-from-reading.html",
    "publishedAt": "2026-11-21T08:49:20.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/security/signal-to-block-siri-gemini-ai-from-capturing-chats-on-ios-android/"
      },
      {
        "source": "The Record",
        "sourceUrl": "https://therecord.media/signal-no-screenshots-by-apple-google-operating-systems"
      }
    ],
    "aliases": [
      "signal-blocks-screenshot-functionality-on-ios-and",
      "article-77d729d8",
      "77d729d8",
      "signal-blocks-screenshot-functionality-on-ios-and-7ae7f9",
      "signal-blocks-screenshot-functionality-on-ios-and-android-to"
    ]
  },
  {
    "slug": "cisa-adds-vmware-cisco-apache-flaws-to-kev-5718e2a1",
    "title": "CISA Adds VMware, Cisco, Apache Flaws to KEV",
    "summary": "CISA added four actively exploited flaws to its KEV list, including a CVE-2026-129448 vulnerability in Broadcom VMware vCenter. The CVE-2026-129448 flaw, a deserialization of untrusted data with CVSS 9.8, enables remote code execution across VMware, Cisco Expressway, Apache Roller, and SAP NetWeaver systems. Patches are available for all affected products; administrators must apply updates immediately to mitigate the high-risk exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-critical-vmware-cisco.html",
    "publishedAt": "2026-11-21T08:49:13.000Z",
    "cves": [
      "CVE-2026-129448"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-vmware-cisco-apache-flaws-to-kev",
      "article-5718e2a1",
      "5718e2a1",
      "cisa-adds-vmware-cisco-apache-flaws-to-kev-1580ca"
    ]
  },
  {
    "slug": "6-critical-f5-big-ip-could-let-hackers-disrupt-web-e1a11be8",
    "title": "6 Critical F5 BIG-IP . Could Let Hackers Disrupt Websites and Execute Malicious Code",
    "summary": "F5 released emergency fixes for six critical BIG-IP vulnerabilities that could let remote attackers take websites and other services offline without logging in. The flaws affect specific traffic-handling configurations. An attacker who can reach a vulnerable service could crash the BIG-IP process that handles client traffic.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-f5-big-ip-vulnerabilities/",
    "publishedAt": "2026-11-21T03:13:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "6-critical-f5-big-ip-could-let-hackers-disrupt-web",
      "article-e1a11be8",
      "e1a11be8",
      "6-critical-f5-big-ip-could-let-hackers-disrupt-web-34cd03",
      "6-critical-f5-big-ip-could-let-hackers-disrupt-websites-and-"
    ]
  },
  {
    "slug": "whatsapp-android-flaws-could-let-hackers-delete-us-5e5d25e8",
    "title": "WhatsApp Android Flaws Could Let Hackers Delete Users’ Files and Expose IP Addresses",
    "summary": "WhatsApp’s November 2026 security update describes three flaws that could let attackers delete files stored by WhatsApp on Android, expose a user’s IP address, or bypass a security check for Meta AI’s Private Processing service. Of the three, only the IP exposure flaw was flagged for possible abuse.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/whatsapp-android-flaws/",
    "publishedAt": "2026-11-21T02:36:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "whatsapp-android-flaws-could-let-hackers-delete-us",
      "article-5e5d25e8",
      "5e5d25e8",
      "whatsapp-android-flaws-could-let-hackers-delete-us-8758a5",
      "whatsapp-android-flaws-could-let-hackers-delete-users-files-"
    ]
  },
  {
    "slug": "vendors-address-ai-agent-access-control-challenges-628c61df",
    "title": "Vendors Address AI Agent Access-Control Challenges",
    "summary": "Security vendors are developing identity, runtime, and development controls to restrict AI agents to authorized tasks. The convergence of controls aims to mitigate risks of agents overstepping boundaries, a gap that could enable data exfiltration or policy violations. CISOs must evaluate vendor solutions and implement layered controls to enforce task constraints, as no single standard exists yet.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/identity-access-management-security/ai-agents-bring-enterprises-new-access-control-challenges",
    "publishedAt": "2026-11-21T01:31:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vendors-address-ai-agent-access-control-challenges",
      "article-628c61df",
      "628c61df",
      "vendors-address-ai-agent-access-control-challenges-6918cc"
    ]
  },
  {
    "slug": "top-enterprise-risk-management-tools-2027-b701097f",
    "title": "Top Enterprise Risk Management Tools 2027",
    "summary": "The 2027 ERM landscape features platforms that enable organizations to identify, assess, and mitigate risks across operational, financial, compliance, and cybersecurity domains. These solutions leverage AI, machine learning, and automation to deliver real-time insights and streamline processes, while prioritizing seamless integration for centralized data views. Vendors emphasize AI-driven analytics and unified dashboards to support holistic risk management.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/enterprise-risk-management-tools/",
    "publishedAt": "2026-11-21T01:26:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "top-enterprise-risk-management-tools-2027",
      "article-b701097f",
      "b701097f",
      "top-enterprise-risk-management-tools-2027-7e6161"
    ]
  },
  {
    "slug": "cto-of-ransomwarehelp-indicted-for-wire-fraud-9b21c3c1",
    "title": "CTO of ‘RansomwareHelp’ Indicted for Wire Fraud",
    "summary": "The chief technology officer and co-founder of ransomwarehelp.com, a six year old Florida business that claimed to use \"advanced cryptographic tools\" to restore data locked by ransomware, has been charged with wire fraud after an FBI sting operation found the company was simply paying the attackers for a decryption key and charging victims a markup for work that was never performed.",
    "category": "Ransomware",
    "severity": "MEDIUM",
    "source": "Krebs on Security",
    "sourceUrl": "https://krebsonsecurity.com/2026/11/cto-of-ransomwarehelp-indicted-for-wire-fraud/",
    "publishedAt": "2026-11-21T00:36:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cto-of-ransomwarehelp-indicted-for-wire-fraud",
      "article-9b21c3c1",
      "9b21c3c1",
      "cto-of-ransomwarehelp-indicted-for-wire-fraud-308466"
    ]
  },
  {
    "slug": "palo-alto-releases-patches-for-two-critical-nginx-c9de6158",
    "title": "Palo Alto Releases Patches for Two Critical NGINX CVEs",
    "summary": "Palo Alto Networks issued patches for two critical NGINX vulnerabilities, CVE-2026-123633 and CVE-2026-123007, that affect PAN-OS and Panorama when HTTP/2 is enabled. The flaws allow unauthenticated remote attackers to crash worker processes or execute code, posing a high-severity remote code execution risk. Administrators should apply the updates immediately or enable the temporary workaround to mitigate exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Palo Alto Networks PSIRT",
    "sourceUrl": "https://security.paloaltonetworks.com/CVE-2026-123633",
    "publishedAt": "2026-11-20T23:00:00.000Z",
    "cves": [
      "CVE-2026-123633",
      "CVE-2026-123007"
    ],
    "additionalSources": [
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/palo-alto-confirms-nginx-rce-vulnerabilities/"
      }
    ],
    "aliases": [
      "palo-alto-releases-patches-for-two-critical-nginx",
      "article-c9de6158",
      "c9de6158",
      "palo-alto-releases-patches-for-two-critical-nginx-4fdfb7",
      "palo-alto-releases-patches-for-two-critical-nginx-cves"
    ]
  },
  {
    "slug": "com-group-conducts-vishing-data-theft-extortion-64ff6884",
    "title": "Com Group Conducts Vishing Data Theft Extortion",
    "summary": "Com affiliates execute vishing attacks, cloud data theft, and extortion campaigns targeting healthcare and finance organizations. Attackers leverage voice phishing to harvest credentials, exfiltrate cloud-stored data, and demand ransom payments, resulting in operational disruption and sensitive data exposure. Unit 42 recommends phishing-resistant multi-factor authentication, continuous cloud monitoring, and robust incident response planning to mitigate risks.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Unit 42",
    "sourceUrl": "https://unit42.paloaltonetworks.com/com-affiliate-vishing-attacks/",
    "publishedAt": "2026-11-20T22:00:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "com-group-conducts-vishing-data-theft-extortion",
      "article-64ff6884",
      "64ff6884",
      "com-group-conducts-vishing-data-theft-extortion-184882"
    ]
  },
  {
    "slug": "west-virginia-legislature-suffers-cyber-incident-11988aa7",
    "title": "West Virginia Legislature Suffers Cyber Incident",
    "summary": "A cybersecurity incident disrupted West Virginia Legislature IT systems starting Thursday and continued through Friday. The attack vector remains undisclosed, but containment prevented lateral movement to other state government networks. Legislative IT teams are actively restoring systems while investigators assess potential data compromise and implement additional safeguards.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/west-virginia-legislature-cyberattack",
    "publishedAt": "2026-11-20T21:34:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "west-virginia-legislature-suffers-cyber-incident",
      "article-11988aa7",
      "11988aa7",
      "west-virginia-legislature-suffers-cyber-incident-b1be85"
    ]
  },
  {
    "slug": "rhsa-2026-100822-critical-nginx-security-update-1afe8be9",
    "title": "RHSA-2026:100822: Critical: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100822",
    "publishedAt": "2026-11-20T21:31:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100822-critical-nginx-security-update",
      "article-1afe8be9",
      "1afe8be9",
      "rhsa-2026-100822-critical-nginx-security-update-2ee08c"
    ]
  },
  {
    "slug": "red-hat-issues-critical-php-8-4-security-update-to-b7e30b9f",
    "title": "Red Hat Issues Critical PHP 8.4 Security Update to Fix Remote Code Execution Vulnerabilities",
    "summary": "Red Hat released a critical PHP 8.4 update on RHEL 10, fixing remote code execution flaws triggered by crafted input streams. The patch addresses CVEs with CVSS scores up to 9.8, removing the risk of unauthenticated exploitation. Red Hat urges immediate application of RHSA-2026-100821, with no workarounds, and users to verify PHP 8.4 version to confirm the fix.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100821",
    "publishedAt": "2026-11-20T21:26:25.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Red Hat Security Advisories",
        "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:101251"
      }
    ],
    "aliases": [
      "red-hat-issues-critical-php-8-4-security-update-to",
      "article-b7e30b9f",
      "b7e30b9f",
      "red-hat-issues-critical-php-8-4-security-update-to-2ee08c",
      "red-hat-issues-critical-php-8-4-security-update-to-fix-remot"
    ]
  },
  {
    "slug": "china-s-armory-castle-lays-siege-to-vmware-vcenter-a33ee633",
    "title": "China's 'Armory Castle' Lays Siege to VMware vCenter Zero-Day",
    "summary": "During the last wave of major VMware vCenter security updates, a China-nexus threat group likely already had its next zero-day up its sleeve. The vulnerability is tracked as CVE-2026-123890.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/china-armory-castle-vmware-vcenter-zero-day",
    "publishedAt": "2026-11-20T21:03:27.000Z",
    "cves": [
      "CVE-2026-123890"
    ],
    "additionalSources": [],
    "aliases": [
      "china-s-armory-castle-lays-siege-to-vmware-vcenter",
      "article-a33ee633",
      "a33ee633",
      "china-s-armory-castle-lays-siege-to-vmware-vcenter-5bc9ce",
      "china-s-armory-castle-lays-siege-to-vmware-vcenter-zero-day"
    ]
  },
  {
    "slug": "rhsa-2026-100814-critical-nginx-security-update-ea5dadf7",
    "title": "RHSA-2026:100814: Critical: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100814",
    "publishedAt": "2026-11-20T20:46:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100814-critical-nginx-security-update",
      "article-ea5dadf7",
      "ea5dadf7",
      "rhsa-2026-100814-critical-nginx-security-update-2ee08c"
    ]
  },
  {
    "slug": "norwegian-energy-firm-suffers-two-day-data-breach-e58fe775",
    "title": "Norwegian energy firm suffers two-day data breach",
    "summary": "A Norwegian energy company experienced a data breach that persisted for two days, affecting its operational systems. Investigators have not confirmed a direct link between the two incidents, though they share several similarities, indicating possible repeated exploitation of a shared vulnerability. Security teams should review access controls and monitor for anomalous activity while awaiting further details from the investigation.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/second-norwegian-energy-company-breached-norwegian",
    "publishedAt": "2026-11-20T20:43:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "norwegian-energy-firm-suffers-two-day-data-breach",
      "article-e58fe775",
      "e58fe775",
      "norwegian-energy-firm-suffers-two-day-data-breach-73b007"
    ]
  },
  {
    "slug": "house-committee-rebukes-chinese-ai-adoption-a1717d24",
    "title": "House Committee Rebukes Chinese AI Adoption",
    "summary": "The House Homeland Security Committee launched an investigation into U.S. corporate adoption of Chinese open-weight AI models. Lawmakers cite supply chain risks, potential data exfiltration, and intellectual property theft as primary concerns for national security. The committee recommends stricter vetting of AI model provenance and enhanced export controls to mitigate strategic vulnerabilities.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/chinese-open-weight-AI-use-by-US-companies-house-investigation",
    "publishedAt": "2026-11-20T20:25:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "house-committee-rebukes-chinese-ai-adoption",
      "article-a1717d24",
      "a1717d24",
      "house-committee-rebukes-chinese-ai-adoption-5734e3"
    ]
  },
  {
    "slug": "how-cloudflare-waf-protects-against-ruby2shell-cve-45be843d",
    "title": "How Cloudflare WAF protects against ruby2shell (CVE-2026-132825)",
    "summary": "ruby2shell lets attackers corrupt memory in default Rails and Sinatra apps without logging in. Cloudflare WAF blocks it for every customer, including Free plans. Upgrade Ruby now, and use the WAF to cover the gap.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/ruby2shell-waf-protection/",
    "publishedAt": "2026-11-20T20:24:38.000Z",
    "cves": [
      "CVE-2026-132825"
    ],
    "additionalSources": [],
    "aliases": [
      "how-cloudflare-waf-protects-against-ruby2shell-cve",
      "article-45be843d",
      "45be843d",
      "how-cloudflare-waf-protects-against-ruby2shell-cve-156987",
      "how-cloudflare-waf-protects-against-ruby2shell-cve-2026-1328"
    ]
  },
  {
    "slug": "how-cloudflare-waf-helps-protect-against-phpafters-4653f8cd",
    "title": "How Cloudflare WAF helps protect against phpAfterShell and other critical PHP flaws",
    "summary": "phpAfterShell is a critical flaw in PHP's default session handler that can lead to code execution. Cloudflare WAF blocks it for all customers, including Free plans, and adds new rules for other PHP flaws fixed in the same release. The vulnerability is tracked as CVE-2026-126714.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/phpaftershell-waf-protection/",
    "publishedAt": "2026-11-20T20:00:45.000Z",
    "cves": [
      "CVE-2026-126714"
    ],
    "additionalSources": [],
    "aliases": [
      "how-cloudflare-waf-helps-protect-against-phpafters",
      "article-4653f8cd",
      "4653f8cd",
      "how-cloudflare-waf-helps-protect-against-phpafters-2df84a",
      "how-cloudflare-waf-helps-protect-against-phpaftershell-and-o"
    ]
  },
  {
    "slug": "rhsa-2026-100804-critical-nginx-security-update-5b8c4e7d",
    "title": "RHSA-2026:100804: Critical: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 10.2 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100804",
    "publishedAt": "2026-11-20T19:37:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100804-critical-nginx-security-update",
      "article-5b8c4e7d",
      "5b8c4e7d",
      "rhsa-2026-100804-critical-nginx-security-update-2ee08b"
    ]
  },
  {
    "slug": "cisco-products-hit-by-vulnerabilities-cve-added-to-db738bd1",
    "title": "Cisco Products Hit by Vulnerabilities, CVE Added to KEV",
    "summary": "Cisco products including IOS XR, Expressway, Snort 3, Cyber Vision, Secure FTD, Secure Client, and several collaboration services are affected by multiple vulnerabilities. CISA added CVE-2026-76466 to its Known Exploited Vulnerabilities database, indicating active exploitation potential for the affected components. Cisco recommends applying the latest firmware and software updates for the listed products immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/cisco-security-advisory-av26-1073",
    "publishedAt": "2026-11-20T19:33:11.000Z",
    "cves": [
      "CVE-2026-76466"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-products-hit-by-vulnerabilities-cve-added-to",
      "article-db738bd1",
      "db738bd1",
      "cisco-products-hit-by-vulnerabilities-cve-added-to-1b59a6",
      "cisco-products-hit-by-vulnerabilities-cve-added-to-kev"
    ]
  },
  {
    "slug": "the-container-store-restores-operations-following-5bb98133",
    "title": "The Container Store Restores Operations Following Weekend Cyberattack",
    "summary": "The Container Store experienced a weekend cyberattack that impacted its corporate website and internal IT systems. Parent company Neighborhood Intelligence disclosed that the unauthorized security incident temporarily disrupted operational infrastructure across the retail enterprise. The organization has fully restored its website and core systems following remediation efforts to address the cyber disruption.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/container-store-restores-systems-cyberattack",
    "publishedAt": "2026-11-20T19:32:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "the-container-store-restores-operations-following",
      "article-5bb98133",
      "5bb98133",
      "the-container-store-restores-operations-following-7f9123",
      "the-container-store-restores-operations-following-weekend-cy"
    ]
  },
  {
    "slug": "sap-releases-multi-product-security-updates-7e518ccc",
    "title": "SAP releases multi-product security updates",
    "summary": "SAP released a security advisory for SQL Anywhere Monitor, Solution Manager, CommonCryptoLib, HANA JDBC Client, Business Connector, NetWeaver Portal, S/4HANA, HANA 2.0, SAP GUI, and Starter Solution. The patches address memory corruption, authentication bypass, and privilege escalation flaws across 20+ SAP components, with CVE IDs omitted. SAP recommends applying the latest patches for each affected product immediately to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Canadian Centre for Cyber Security",
    "sourceUrl": "https://cyber.gc.ca/en/alerts-advisories/sap-security-advisory-november-2025-monthly-rollup-av25-738",
    "publishedAt": "2026-11-20T19:17:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sap-releases-multi-product-security-updates",
      "article-7e518ccc",
      "7e518ccc",
      "sap-releases-multi-product-security-updates-7f945b"
    ]
  },
  {
    "slug": "google-releases-chrome-dev-160-for-android-aa5356a4",
    "title": "Google Releases Chrome Dev 160 for Android",
    "summary": "Google released Chrome Dev version 160.0.8171.0 for Android via the Google Play store, marking the latest development channel milestone. The update incorporates unspecified security patches and feature enhancements documented in the Chromium git log and official blog posts. Android users should install this release promptly to obtain the latest stability improvements and vulnerability mitigations.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-dev-for-android-update_0498913154.html",
    "publishedAt": "2026-11-20T19:13:32.556Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-releases-chrome-dev-160-for-android",
      "article-aa5356a4",
      "aa5356a4",
      "google-releases-chrome-dev-160-for-android-4d436c"
    ]
  },
  {
    "slug": "arctic-wolf-reports-record-october-threat-activity-779b4f49",
    "title": "Arctic Wolf reports record October threat activity",
    "summary": "Arctic Wolf Aurora Incident Response recorded a 78% rise in non-customer cases and a 96% increase in sophisticated network intrusions, including ransomware, in October 2026. The surge indicates attackers are more active and employing advanced tactics, stressing the importance of rapid detection and response. Teams should update incident response plans, deploy automation, and monitor emerging patterns to reduce future risk.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/blog/incident-response-at-machine-speed-what-black-octobers-record-case-volume-reveals-about-todays-threat-landscape/",
    "publishedAt": "2026-11-20T19:07:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "arctic-wolf-reports-record-october-threat-activity",
      "article-779b4f49",
      "779b4f49",
      "arctic-wolf-reports-record-october-threat-activity-446bc2"
    ]
  },
  {
    "slug": "bell-canada-breach-exposes-enterprise-customer-dat-b3499ea5",
    "title": "Bell Canada Breach Exposes Enterprise Customer Data",
    "summary": "Bell Canada confirmed that an 'agentic' threat actor breached its systems on November 17 2026, accessing enterprise customer data. The intrusion exploited vulnerabilities in the order-and-provisioning platform, allowing attackers to exfiltrate sensitive customer records. Bell Canada has issued a public advisory and is coordinating with security teams to apply patches and strengthen authentication controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/bell-canada-says-agentic-hacker-stole-enterprise-customer-data/",
    "publishedAt": "2026-11-20T18:51:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bell-canada-breach-exposes-enterprise-customer-dat",
      "article-b3499ea5",
      "b3499ea5",
      "bell-canada-breach-exposes-enterprise-customer-dat-716195",
      "bell-canada-breach-exposes-enterprise-customer-data"
    ]
  },
  {
    "slug": "rhsa-2026-100756-critical-nginx-1-24-security-upda-91d2834b",
    "title": "RHSA-2026:100756: Critical: nginx:1.24 security update",
    "summary": "An update for the nginx:1.24 module is now available for Red Hat Enterprise Linux 9.6 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100756",
    "publishedAt": "2026-11-20T18:51:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100756-critical-nginx-1-24-security-upda",
      "article-91d2834b",
      "91d2834b",
      "rhsa-2026-100756-critical-nginx-1-24-security-upda-2ee088",
      "rhsa-2026-100756-critical-nginx-1-24-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-100755-critical-nginx-1-24-security-upda-da98cc4b",
    "title": "RHSA-2026:100755: Critical: nginx:1.24 security update",
    "summary": "An update for the nginx:1.24 module is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100755",
    "publishedAt": "2026-11-20T18:48:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100755-critical-nginx-1-24-security-upda",
      "article-da98cc4b",
      "da98cc4b",
      "rhsa-2026-100755-critical-nginx-1-24-security-upda-2ee088",
      "rhsa-2026-100755-critical-nginx-1-24-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-100768-critical-nginx-security-update-14feece7",
    "title": "RHSA-2026:100768: Critical: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100768",
    "publishedAt": "2026-11-20T18:47:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100768-critical-nginx-security-update",
      "article-14feece7",
      "14feece7",
      "rhsa-2026-100768-critical-nginx-security-update-2ee088"
    ]
  },
  {
    "slug": "rhsa-2026-100753-critical-nginx-security-update-11db7d6f",
    "title": "RHSA-2026:100753: Critical: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 9.8 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100753",
    "publishedAt": "2026-11-20T18:47:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-100753-critical-nginx-security-update",
      "article-11db7d6f",
      "11db7d6f",
      "rhsa-2026-100753-critical-nginx-security-update-2ee088"
    ]
  },
  {
    "slug": "critical-nginx-1-26-update-for-rhel-9-6-eus-b1b3f11d",
    "title": "Critical Nginx 1.26 Update for RHEL 9.6 EUS",
    "summary": "Red Hat released a critical security update for nginx:1.26 on RHEL 9.6 Extended Update Support, addressing multiple high-severity vulnerabilities. The CVE references detail remote code execution via crafted HTTP requests, with CVSS scores up to 9.0. Apply the patch immediately or install the errata to mitigate the critical risk today.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100757",
    "publishedAt": "2026-11-20T18:47:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "critical-nginx-1-26-update-for-rhel-9-6-eus",
      "article-b1b3f11d",
      "b1b3f11d",
      "critical-nginx-1-26-update-for-rhel-9-6-eus-2ee088"
    ]
  },
  {
    "slug": "critical-nginx-update-for-rhel-9-2-sap-solutions-8c37d851",
    "title": "Critical Nginx Update for RHEL 9.2 SAP Solutions",
    "summary": "Red Hat issued a critical security update for nginx on RHEL 9.2 SAP Solutions, fixing several high-severity flaws. The linked CVE entries describe remote code execution via malformed HTTP requests, with CVSS scores up to 9.0. Apply the patch immediately or install the errata to mitigate the critical risk today.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:100769",
    "publishedAt": "2026-11-20T18:45:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "critical-nginx-update-for-rhel-9-2-sap-solutions",
      "article-8c37d851",
      "8c37d851",
      "critical-nginx-update-for-rhel-9-2-sap-solutions-2ee088"
    ]
  },
  {
    "slug": "cve-2026-130901-improper-limitation-of-a-pathname-825b573f",
    "title": "CVE-2026-130901 - Improper limitation of a pathname to a restricted directory in Amazon awslabs.document-loader-mcp-server",
    "summary": "Bulletin ID: 2026-195-AWS Publication Date: 11/20/2026 10:30 AM PST Description: Improper limitation of a pathname to a restricted directory in the file access checks in Amazon awslabs.document-loader-mcp-server 1.0.10 through 1.0.20 might allow a context-dependent actor, via crafted document content processed by an MCP client, to read files outside the intended base directory and, in 1.0.12 through 1.0.20, to write PNG slide images outside it.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-195-aws/",
    "publishedAt": "2026-11-20T18:45:40.000Z",
    "cves": [
      "CVE-2026-130901"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-130901-improper-limitation-of-a-pathname",
      "article-825b573f",
      "825b573f",
      "cve-2026-130901-improper-limitation-of-a-pathname-2690c2",
      "cve-2026-130901-improper-limitation-of-a-pathname-to-a-restr"
    ]
  },
  {
    "slug": "communication-becomes-frontline-cyber-defense-c9bd5808",
    "title": "Communication Becomes Frontline Cyber Defense",
    "summary": "Cybersecurity leaders now assert that clear, disciplined communication is becoming a frontline defense as critical as technical tools. This shift covers conversations about cloud security and AI adoption, underscoring messaging’s strategic role in threat mitigation. Security teams should embed communication best practices into programs, enhancing resilience against evolving cyber threats.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/security-words-matter",
    "publishedAt": "2026-11-20T18:35:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "communication-becomes-frontline-cyber-defense",
      "article-c9bd5808",
      "c9bd5808",
      "communication-becomes-frontline-cyber-defense-497ba2"
    ]
  },
  {
    "slug": "chrome-dev-channel-updated-to-160-0-8171-0-3230d0ff",
    "title": "Chrome Dev Channel Updated to 160.0.8171.0",
    "summary": "Google Chrome's Dev channel updated to version 160.0.8171.0, delivering bug fixes and performance improvements across Windows, macOS, and Linux. Release notes detail changes in rendering, security, and developer tools, with a partial list in the Git log. Users on the Dev channel should install the new build to access the latest features.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-dev-for-desktop-update_0667948876.html",
    "publishedAt": "2026-11-20T17:58:33.217Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-dev-channel-updated-to-160-0-8171-0",
      "article-3230d0ff",
      "3230d0ff",
      "chrome-dev-channel-updated-to-160-0-8171-0-798051"
    ]
  },
  {
    "slug": "cairn-ai-tool-finds-zero-day-in-medical-imaging-ap-e63715ba",
    "title": "Cairn AI Tool Finds Zero-Day in Medical Imaging App",
    "summary": "Hackers used the open-source AI framework Cairn to discover a zero-day in a medical imaging application in a critical system. The flaw, a buffer overflow in the image-processing module, enabled remote code execution with elevated privileges. The vendor released patch 2.3.1; apply it immediately and monitor for anomalous activity to mitigate risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-use-autonomous-ai-tool-cairn-to-find-zero-day-take-over-server/",
    "publishedAt": "2026-11-20T17:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cairn-ai-tool-finds-zero-day-in-medical-imaging-ap",
      "article-e63715ba",
      "e63715ba",
      "cairn-ai-tool-finds-zero-day-in-medical-imaging-ap-594ab7",
      "cairn-ai-tool-finds-zero-day-in-medical-imaging-app"
    ]
  },
  {
    "slug": "cairn-ai-tool-finds-possible-zero-day-at-universit-cd701829",
    "title": "Cairn AI Tool Finds Possible Zero-Day at University",
    "summary": "A China-linked threat actor used the open-source AI framework Cairn to target two universities, reportedly finding a potential zero-day. The flaw, a memory-corruption bug in the LMS, could enable unauthenticated remote code execution, endangering academic data. Administrators should apply the vendor patch immediately and enforce strict access controls to mitigate risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/amazon-research-cairn-ai-university-attacks-possible-zero-day",
    "publishedAt": "2026-11-20T17:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cairn-ai-tool-finds-possible-zero-day-at-universit",
      "article-cd701829",
      "cd701829",
      "cairn-ai-tool-finds-possible-zero-day-at-universit-26a74c",
      "cairn-ai-tool-finds-possible-zero-day-at-university"
    ]
  },
  {
    "slug": "nvidia-ceo-resignation-and-microsoft-outage-highli-ad8d3de0",
    "title": "Nvidia CEO Resignation and Microsoft Outage Highlight AI Volatility",
    "summary": "Dark Reading highlights recent industry news, including Nvidia CEO Jensen Huang’s resignation and a Microsoft cloud outage. The video summarizes key developments that were omitted from earlier coverage, underscoring the volatility of the AI sector. Viewers are encouraged to review the full discussion for context on leadership changes and infrastructure disruptions.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/what-we-missed-nvidia-ceo-scandal-rocks-ai-industry",
    "publishedAt": "2026-11-20T17:04:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nvidia-ceo-resignation-and-microsoft-outage-highli",
      "article-ad8d3de0",
      "ad8d3de0",
      "nvidia-ceo-resignation-and-microsoft-outage-highli-3e1331",
      "nvidia-ceo-resignation-and-microsoft-outage-highlight-ai-vol"
    ]
  },
  {
    "slug": "microsoft-investigates-new-outlook-attachment-uplo-643ec312",
    "title": "Microsoft Investigates New Outlook Attachment Upload Failures",
    "summary": "Microsoft is investigating reports that Microsoft 365 users cannot upload attachments in the New Outlook client, a problem tracked under ticket EX1561765 in the admin center. The issue is being addressed in the November 20 service update. Users experiencing the failure should verify their client version and contact support if it persists.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsoft-attachment-upload-failures/",
    "publishedAt": "2026-11-20T17:01:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-investigates-new-outlook-attachment-uplo",
      "article-643ec312",
      "643ec312",
      "microsoft-investigates-new-outlook-attachment-uplo-2b6fb5",
      "microsoft-investigates-new-outlook-attachment-upload-failure"
    ]
  },
  {
    "slug": "bazuka-android-malware-hides-credential-theft-with-efc28292",
    "title": "Bazuka Android Malware Hides Credential Theft with Fake Overlays",
    "summary": "Bazuka is a disclosed Android malware framework that uses fake screen overlays to conceal credential theft and remote device control. It integrates large-language models for scalable victim management, enabling attackers to orchestrate credential harvesting and device-level commands across infected devices. Researchers released technical details but no patch exists; teams should monitor for updates and enforce app-store vetting to mitigate exposure.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/bazuka-android-malware-uses-fake-screen.html",
    "publishedAt": "2026-11-20T16:58:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "bazuka-android-malware-hides-credential-theft-with",
      "article-efc28292",
      "efc28292",
      "bazuka-android-malware-hides-credential-theft-with-114e33",
      "bazuka-android-malware-hides-credential-theft-with-fake-over"
    ]
  },
  {
    "slug": "aws-ssosync-privilege-escalation-via-reused-email-b0cfb5a6",
    "title": "AWS ssosync Privilege Escalation via Reused Email Addresses",
    "summary": "CVE-2026-133199 exposes a privilege-escalation flaw in AWS ssosync before 2.9.5, letting an authenticated user inherit IAM Identity Center group memberships from a reused Google Workspace e-mail address or group name. The flaw results from incorrect privilege assignment during reconciliation, granting elevated permissions without further authentication. AWS released a patch in version 2.9.5; administrators should upgrade immediately to prevent exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-194-aws/",
    "publishedAt": "2026-11-20T16:41:29.000Z",
    "cves": [
      "CVE-2026-133199"
    ],
    "additionalSources": [],
    "aliases": [
      "aws-ssosync-privilege-escalation-via-reused-email",
      "article-b0cfb5a6",
      "b0cfb5a6",
      "aws-ssosync-privilege-escalation-via-reused-email-24dbe9",
      "aws-ssosync-privilege-escalation-via-reused-email-addresses"
    ]
  },
  {
    "slug": "ai-driven-attacks-arrive-cisos-need-five-steps-764d2948",
    "title": "AI-Driven Attacks Arrive; CISOs Need Five Steps",
    "summary": "Claude Mythos Preview, an advanced AI model, identified and linked software vulnerabilities faster than traditional tools. ARTEX recently removed its corporate barrier, granting attackers broader access to the model and increasing threat exposure. CISOs should adopt five proactive steps, tightening AI controls, enhancing vulnerability triage, and updating incident response plans.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/blog/ai-driven-attacks-are-here-five-steps-cisos-should-take-now/",
    "publishedAt": "2026-11-20T16:41:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-driven-attacks-arrive-cisos-need-five-steps",
      "article-764d2948",
      "764d2948",
      "ai-driven-attacks-arrive-cisos-need-five-steps-6f2ce9"
    ]
  },
  {
    "slug": "debian-packages-retain-distrusted-ca-certificates-ae93cb75",
    "title": "Debian Packages Retain Distrusted CA Certificates After Updates",
    "summary": "A Debian package mirror scan found over 100 packages still containing distrusted CA certificates after their removal from the system trust store. Debian developer Steve McIntyre posted the results on November 19, showing package-level certificate copies persist despite trust-store updates.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/debian-packages-ca-certificates/",
    "publishedAt": "2026-11-20T16:39:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "debian-packages-retain-distrusted-ca-certificates",
      "article-ae93cb75",
      "ae93cb75",
      "debian-packages-retain-distrusted-ca-certificates-4fdf79",
      "debian-packages-retain-distrusted-ca-certificates-after-upda"
    ]
  },
  {
    "slug": "java4shell-exposes-java-apps-to-code-execution-dfa30b1e",
    "title": "Java4Shell Exposes Java Apps to Code Execution",
    "summary": "Java4Shell flaw exposes Java apps to code execution; FBI warns of ARTEX intrusions, and 8-Digits Team faces a 27-year sentence. The flaw originates from deserialization of Java objects, allowing attackers to send that bypass authentication and run code. Oracle released patch 2026-04-01 for Java Runtime Environments; admins should upgrade or apply the workaround.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SentinelOne",
    "sourceUrl": "https://www.sentinelone.com/blog/the-good-the-bad-and-the-ugly-in-cybersecurity-week-47-8",
    "publishedAt": "2026-11-20T16:14:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "java4shell-exposes-java-apps-to-code-execution",
      "article-dfa30b1e",
      "dfa30b1e",
      "java4shell-exposes-java-apps-to-code-execution-5e83f0"
    ]
  },
  {
    "slug": "nvidia-tegra-igx-kernel-vulnerabilities-discovered-e3bb6f4f",
    "title": "NVIDIA Tegra IGX Kernel Vulnerabilities Discovered",
    "summary": "NVIDIA Tegra IGX Linux kernel subsystems contain vulnerabilities that could let attackers compromise devices. Flaws identified as CVE-2025-21656, CVE-2026-63940, CVE-2026-74350, CVE-2026-98432, and CVE-2026-99999 affect x86 architecture, hardware monitoring drivers, OCFS2, IPv4 networking, Ethernet bridge, Netfilter, and XFRM, enabling potential system compromise. Kernel updates correcting these flaws are available; administrators should apply the patch to mitigate risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9184-1",
    "publishedAt": "2026-11-20T16:08:41.000Z",
    "cves": [
      "CVE-2025-21656",
      "CVE-2026-63940",
      "CVE-2026-74350",
      "CVE-2026-98432",
      "CVE-2026-99999"
    ],
    "additionalSources": [],
    "aliases": [
      "nvidia-tegra-igx-kernel-vulnerabilities-discovered",
      "article-e3bb6f4f",
      "e3bb6f4f",
      "nvidia-tegra-igx-kernel-vulnerabilities-discovered-7e77f2"
    ]
  },
  {
    "slug": "nsa-resumes-operations-after-internal-network-disr-926a15d3",
    "title": "NSA Resumes Operations After Internal Network Disruptions",
    "summary": "The National Security Agency experienced internal network disruptions that forced a temporary Code Orange status for several facilities, delaying openings and requiring employee check-ins with supervisors. The disruptions impacted non-essential operations, but core mission functions continued under reduced capacity. Normal operations have resumed, though affected sites remain under Code Orange until full network stability is confirmed.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/nsa-resumes-normal-operations-following-internal-disruptions",
    "publishedAt": "2026-11-20T16:06:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nsa-resumes-operations-after-internal-network-disr",
      "article-926a15d3",
      "926a15d3",
      "nsa-resumes-operations-after-internal-network-disr-59abbd",
      "nsa-resumes-operations-after-internal-network-disruptions"
    ]
  }
];
