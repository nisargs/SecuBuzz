export type SourceCategory =
  | 'vendor-psirt'
  | 'news-research'
  | 'supply-chain'
  | 'incident-research'
  | 'advisory-db';

export interface SourceItem {
  name: string;
  domain: string;
  url: string;
  focus: string;
  category: SourceCategory;
  cadence?: string;
}

export interface SourceGroup {
  id: SourceCategory;
  title: string;
  description: string;
  sources: SourceItem[];
}

export const SOURCES: SourceItem[] = [
  // ---------------------------------------------------------------------------
  // 1. Official Vendor PSIRT & Advisories (16 feeds, Alphabetical)
  // ---------------------------------------------------------------------------
  {
    name: 'Android Security Bulletin',
    domain: 'source.android.com',
    url: 'https://source.android.com/docs/security/bulletin',
    focus: 'Google’s monthly Android Open Source Project (AOSP) security bulletins covering framework, system, and kernel CVEs.',
    category: 'vendor-psirt',
    cadence: 'Monthly (1st Monday)',
  },
  {
    name: 'Apple Security Updates',
    domain: 'support.apple.com',
    url: 'https://support.apple.com/en-us/HT201222',
    focus: 'Official security content and vulnerability disclosures for iOS, iPadOS, macOS, watchOS, and Safari.',
    category: 'vendor-psirt',
    cadence: 'OS release cycle & Rapid Security Response',
  },
  {
    name: 'AWS Security Bulletins',
    domain: 'aws.amazon.com',
    url: 'https://aws.amazon.com/security/security-bulletins/',
    focus: 'Amazon Web Services bulletins and security updates for AWS services, cloud runtime environments, and SDKs.',
    category: 'vendor-psirt',
    cadence: 'Advisory release',
  },
  {
    name: 'CERT-EU Security Advisories',
    domain: 'cert.europa.eu',
    url: 'https://cert.europa.eu/publications/security-advisories/',
    focus: 'Technical security advisories and coordinated disclosures for European Union institutions, bodies, and agencies.',
    category: 'vendor-psirt',
    cadence: 'Continuous alerts',
  },
  {
    name: 'Cisco PSIRT',
    domain: 'sec.cloudapps.cisco.com',
    url: 'https://sec.cloudapps.cisco.com/security/center/publicationListing.x',
    focus: 'Authoritative security advisories and software patches across Cisco IOS-XE, ASA, NX-OS, and Duo platforms.',
    category: 'vendor-psirt',
    cadence: 'Bi-weekly & out-of-band',
  },
  {
    name: 'Fortinet FortiGuard PSIRT',
    domain: 'fortiguard.fortinet.com',
    url: 'https://fortiguard.fortinet.com/rss/ir.xml',
    focus: 'Official vulnerability advisories, severity ratings, and mitigation guidance for FortiOS, FortiGate, and FortiManager.',
    category: 'vendor-psirt',
    cadence: 'Monthly patch cycle & out-of-band',
  },
  {
    name: 'GitHub Security Blog',
    domain: 'github.blog',
    url: 'https://github.blog/category/security/',
    focus: 'Security updates, coordinated vulnerability disclosures, and platform defense insights from GitHub’s security team.',
    category: 'vendor-psirt',
    cadence: 'Weekly editorial & disclosures',
  },
  {
    name: 'GitLab Security Releases',
    domain: 'about.gitlab.com',
    url: 'https://about.gitlab.com/releases/categories/releases/',
    focus: 'Scheduled and critical security patch releases resolving vulnerabilities in GitLab Enterprise and Community editions.',
    category: 'vendor-psirt',
    cadence: 'Bi-weekly & critical patch',
  },
  {
    name: 'Google Chrome Releases',
    domain: 'chromereleases.googleblog.com',
    url: 'https://chromereleases.googleblog.com',
    focus: 'Stable, Beta, and Extended channel updates detailing resolved CVEs, memory safety fixes, and zero-day patches.',
    category: 'vendor-psirt',
    cadence: 'Weekly & out-of-band',
  },
  {
    name: 'Ivanti Security Advisories',
    domain: 'ivanti.com',
    url: 'https://www.ivanti.com/blog/topics/security-advisory',
    focus: 'Official patch notices and remediation directives for Ivanti Connect Secure (ICS), EPMM, and Neurons solutions.',
    category: 'vendor-psirt',
    cadence: 'Bi-weekly & emergency fixes',
  },
  {
    name: 'Microsoft MSRC',
    domain: 'msrc.microsoft.com',
    url: 'https://msrc.microsoft.com/update-guide',
    focus: 'Microsoft Security Response Center official bulletins, Patch Tuesday updates, and emergency out-of-band fixes.',
    category: 'vendor-psirt',
    cadence: 'Monthly Patch Tuesday & out-of-band',
  },
  {
    name: 'Oracle Security Alerts',
    domain: 'oracle.com',
    url: 'https://www.oracle.com/security-alerts/',
    focus: 'Oracle Critical Patch Updates (CPU), Security Alerts, and third-party bulletin disclosures across Oracle products.',
    category: 'vendor-psirt',
    cadence: 'Quarterly CPU & out-of-band alerts',
  },
  {
    name: 'Palo Alto Networks PSIRT',
    domain: 'security.paloaltonetworks.com',
    url: 'https://security.paloaltonetworks.com',
    focus: 'Security advisories and patch notifications for PAN-OS, GlobalProtect, Prisma Access, and Cortex infrastructure.',
    category: 'vendor-psirt',
    cadence: 'Advisory release',
  },
  {
    name: 'Red Hat Security Advisories',
    domain: 'access.redhat.com',
    url: 'https://access.redhat.com/security/security-updates/',
    focus: 'Official Red Hat Security Advisories (RHSA) and errata for Red Hat Enterprise Linux, OpenShift, and Ansible.',
    category: 'vendor-psirt',
    cadence: 'Continuous errata',
  },
  {
    name: 'Ubuntu Security Notices',
    domain: 'ubuntu.com',
    url: 'https://ubuntu.com/security/notices',
    focus: 'Canonical’s official Ubuntu Security Notices (USN) detailing security patches for Ubuntu LTS distributions.',
    category: 'vendor-psirt',
    cadence: 'Continuous errata',
  },
  {
    name: 'ZDI Advisories',
    domain: 'zerodayinitiative.com',
    url: 'https://www.zerodayinitiative.com/advisories/published/',
    focus: 'Published coordinated zero-day vulnerability disclosures across enterprise infrastructure, software, and ICS.',
    category: 'vendor-psirt',
    cadence: 'Continuous disclosures',
  },

  // ---------------------------------------------------------------------------
  // 2. Threat Research & News (28 feeds, Alphabetical)
  // ---------------------------------------------------------------------------
  {
    name: 'BleepingComputer',
    domain: 'bleepingcomputer.com',
    url: 'https://www.bleepingcomputer.com',
    focus: 'Rapid zero-day vulnerability disclosures, enterprise ransomware tracking, and critical patch updates.',
    category: 'news-research',
  },
  {
    name: 'Check Point Research',
    domain: 'research.checkpoint.com',
    url: 'https://research.checkpoint.com',
    focus: 'Malware reverse engineering, nation-state cyber espionage tracking, and mobile threat research.',
    category: 'news-research',
  },
  {
    name: 'Cisco Talos',
    domain: 'blog.talosintelligence.com',
    url: 'https://blog.talosintelligence.com',
    focus: 'Commercial threat intelligence, vulnerability discovery, threat actor campaigns, and email security research.',
    category: 'news-research',
  },
  {
    name: 'CISA',
    domain: 'cisa.gov',
    url: 'https://www.cisa.gov/news-events/cybersecurity-advisories',
    focus: 'Official alerts, emergency directives, and vulnerability advisories from the U.S. Cybersecurity and Infrastructure Security Agency.',
    category: 'news-research',
  },
  {
    name: 'Cloudflare Security',
    domain: 'blog.cloudflare.com',
    url: 'https://blog.cloudflare.com',
    focus: 'DDoS attack trends, edge infrastructure defense, protocol security, and zero-trust engineering insights.',
    category: 'news-research',
  },
  {
    name: 'CrowdStrike',
    domain: 'crowdstrike.com',
    url: 'https://www.crowdstrike.com/blog/',
    focus: 'Falcon OverWatch threat hunting telemetry, nation-state adversary tracking, and cloud threat intelligence.',
    category: 'news-research',
  },
  {
    name: 'Cyber Security News',
    domain: 'cybersecuritynews.com',
    url: 'https://cybersecuritynews.com',
    focus: 'Daily vulnerability roundups, exploit announcements, cyber defense guides, and technical advisories.',
    category: 'news-research',
  },
  {
    name: 'CyberNews AI',
    domain: 'cybernewsai.com',
    url: 'https://www.cybernewsai.com',
    focus: 'Artificial intelligence security, LLM vulnerabilities, automated offensive tools, and emerging AI risk vectors.',
    category: 'news-research',
  },
  {
    name: 'Dark Reading',
    domain: 'darkreading.com',
    url: 'https://www.darkreading.com',
    focus: 'Enterprise security operations, cloud security defense, cyber risk management, and technical architecture.',
    category: 'news-research',
  },
  {
    name: 'ESET WeLiveSecurity',
    domain: 'welivesecurity.com',
    url: 'https://www.welivesecurity.com',
    focus: 'Global malware research, wiper attack investigations, and security telemetry from ESET researchers.',
    category: 'news-research',
  },
  {
    name: 'Google Project Zero',
    domain: 'projectzero.google',
    url: 'https://projectzero.google',
    focus: 'Deep root-cause zero-day exploit teardowns and technical vulnerability analysis by Google’s research team.',
    category: 'news-research',
  },
  {
    name: 'Google Security',
    domain: 'security.googleblog.com',
    url: 'https://security.googleblog.com',
    focus: 'Web security standards, cryptography advancements, memory safety, and platform defense research from Google.',
    category: 'news-research',
  },
  {
    name: 'GreyNoise Labs',
    domain: 'greynoise.io',
    url: 'https://www.greynoise.io/blog',
    focus: 'Internet-wide exploit spray tracking, honeypot telemetry, and noise-vs-attack traffic differentiation.',
    category: 'news-research',
  },
  {
    name: 'Help Net Security',
    domain: 'helpnetsecurity.com',
    url: 'https://www.helpnetsecurity.com',
    focus: 'Technical security management, vulnerability disclosures, and practical defense engineering research.',
    category: 'news-research',
  },
  {
    name: 'Krebs on Security',
    domain: 'krebsonsecurity.com',
    url: 'https://krebsonsecurity.com',
    focus: 'Investigative cybercrime journalism, data breach disclosures, and financial fraud tracking by Brian Krebs.',
    category: 'news-research',
  },
  {
    name: 'Malwarebytes Labs',
    domain: 'malwarebytes.com',
    url: 'https://www.malwarebytes.com/blog',
    focus: 'Consumer and enterprise malware analysis, adware investigations, and threat remediation guidance.',
    category: 'news-research',
  },
  {
    name: 'Microsoft Security',
    domain: 'microsoft.com',
    url: 'https://www.microsoft.com/security/blog/',
    focus: 'Adversary profiling, cloud defense best practices, and enterprise security architecture from Microsoft.',
    category: 'news-research',
  },
  {
    name: 'SANS Internet Storm Center',
    domain: 'isc.sans.edu',
    url: 'https://isc.sans.edu',
    focus: 'Global network threat telemetry, daily handler diaries, and internet-wide exploit activity tracking.',
    category: 'news-research',
  },
  {
    name: 'Schneier on Security',
    domain: 'schneier.com',
    url: 'https://www.schneier.com',
    focus: 'Security technology, public policy, cryptography commentary, and privacy analysis by Bruce Schneier.',
    category: 'news-research',
  },
  {
    name: 'SecurityWeek',
    domain: 'securityweek.com',
    url: 'https://www.securityweek.com',
    focus: 'Enterprise cybersecurity news, software supply chain risks, executive threat briefs, and venture updates.',
    category: 'news-research',
  },
  {
    name: 'SentinelOne',
    domain: 'sentinelone.com',
    url: 'https://www.sentinelone.com/blog/',
    focus: 'Autonomous endpoint telemetry, nation-state campaign research, and cybercrime investigations.',
    category: 'news-research',
  },
  {
    name: 'Sophos Threat Research',
    domain: 'news.sophos.com',
    url: 'https://news.sophos.com/en-us/category/threat-research/',
    focus: 'MDR incident investigations, ransomware tactics, techniques, and procedures (TTPs), and endpoint telemetry.',
    category: 'news-research',
  },
  {
    name: 'The Hacker News',
    domain: 'thehackernews.com',
    url: 'https://thehackernews.com',
    focus: 'Leading independent cybersecurity journalism covering breaking attacks, zero-days, and infosec analysis.',
    category: 'news-research',
  },
  {
    name: 'The Record',
    domain: 'therecord.media',
    url: 'https://therecord.media',
    focus: 'Recorded Future’s newsroom reporting on cyber warfare, state-sponsored espionage, and infrastructure attacks.',
    category: 'news-research',
  },
  {
    name: 'Trend Micro Research',
    domain: 'trendmicro.com',
    url: 'https://www.trendmicro.com/research',
    focus: 'Advanced threat research, ransomware telemetry, IoT/OT vulnerabilities, and endpoint defense analysis.',
    category: 'news-research',
  },
  {
    name: 'Unit 42',
    domain: 'unit42.paloaltonetworks.com',
    url: 'https://unit42.paloaltonetworks.com',
    focus: 'Palo Alto Networks threat research, nation-state APT campaign tracking, and malware family teardowns.',
    category: 'news-research',
  },
  {
    name: 'Wiz Research',
    domain: 'wiz.io',
    url: 'https://www.wiz.io/blog',
    focus: 'Cloud infrastructure security, tenant isolation escapes, container vulnerabilities, and cloud IAM risks.',
    category: 'news-research',
  },
  {
    name: 'Zero Day Initiative',
    domain: 'zerodayinitiative.com',
    url: 'https://www.zerodayinitiative.com/blog',
    focus: 'Trend Micro ZDI vulnerability research, Pwn2Own contest results, and bug bounty program findings.',
    category: 'news-research',
  },

  // ---------------------------------------------------------------------------
  // 3. Supply Chain (1 feed, Alphabetical)
  // ---------------------------------------------------------------------------
  {
    name: 'Socket.dev',
    domain: 'socket.dev',
    url: 'https://socket.dev/blog',
    focus: 'Proactive detection of malicious open-source packages, typosquatting, and install scripts across npm and PyPI.',
    category: 'supply-chain',
  },

  // ---------------------------------------------------------------------------
  // 4. Incident Research (3 feeds, Alphabetical)
  // ---------------------------------------------------------------------------
  {
    name: 'Arctic Wolf',
    domain: 'arcticwolf.com',
    url: 'https://arcticwolf.com/resources/blog/',
    focus: 'Real-world incident response telemetry, social engineering campaigns, and active exploitation teardowns.',
    category: 'incident-research',
  },
  {
    name: 'Huntress',
    domain: 'huntress.com',
    url: 'https://www.huntress.com/blog',
    focus: 'Field-level tradecraft analysis, Active Directory abuse, active ransomware intrusions, and SMB incident response.',
    category: 'incident-research',
  },
  {
    name: 'The DFIR Report',
    domain: 'thedfirreport.com',
    url: 'https://thedfirreport.com',
    focus: 'Comprehensive post-incident digital forensics and intrusion case studies reconstructing full attack lifecycles.',
    category: 'incident-research',
  },

  // ---------------------------------------------------------------------------
  // 5. Advisory Databases (3 databases, Alphabetical)
  // ---------------------------------------------------------------------------
  {
    name: 'CISA Known Exploited Vulnerabilities (KEV)',
    domain: 'cisa.gov',
    url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog',
    focus: 'Federal authoritative catalog of confirmed actively-exploited zero-days with binding remediation due dates under BOD 22-01.',
    category: 'advisory-db',
    cadence: 'Live hourly sync',
  },
  {
    name: 'FIRST.org EPSS',
    domain: 'first.org',
    url: 'https://www.first.org/epss/',
    focus: 'Exploit Prediction Scoring System estimating the empirical probability of in-the-wild exploitation within 30 days.',
    category: 'advisory-db',
    cadence: 'Daily sync',
  },
  {
    name: 'GitHub Security Advisory Database',
    domain: 'github.com',
    url: 'https://github.com/advisories',
    focus: 'Authoritative vulnerability database covering open-source package advisories across npm, PyPI, Maven, Go, NuGet, Cargo, and Composer.',
    category: 'advisory-db',
    cadence: 'Hourly sync',
  },
];

/**
 * Filtered threat feeds count (excluding authoritative databases)
 */
export const THREAT_FEEDS_COUNT = SOURCES.filter(
  (s) => s.category !== 'advisory-db'
).length;

/**
 * Total monitored sources and databases count
 */
export const TOTAL_SOURCES_COUNT = SOURCES.length;

export const SOURCE_GROUPS: SourceGroup[] = [
  {
    id: 'vendor-psirt',
    title: 'Official Vendor PSIRT & Advisories',
    description:
      'Authoritative hardware, cloud, OS, and enterprise infrastructure security bulletins ingested directly from primary vendor response teams.',
    sources: SOURCES.filter((s) => s.category === 'vendor-psirt').sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  },
  {
    id: 'news-research',
    title: 'Threat Research & News',
    description:
      'Vetted independent journalism, threat intelligence labs, security researchers, and government CERT reporting.',
    sources: SOURCES.filter((s) => s.category === 'news-research').sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain',
    description:
      'Dedicated monitoring of software supply chain threats, malicious open-source packages, and repository security across npm and PyPI.',
    sources: SOURCES.filter((s) => s.category === 'supply-chain').sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  },
  {
    id: 'incident-research',
    title: 'Incident Research',
    description:
      'Field-level incident response telemetry, intrusion forensics, ransomware case studies, and active tradecraft analysis.',
    sources: SOURCES.filter((s) => s.category === 'incident-research').sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  },
  {
    id: 'advisory-db',
    title: 'Advisory Databases',
    description:
      'Authoritative vulnerability catalogs and exploit prediction telemetry ingested directly to track CVE deadlines and exploit likelihood.',
    sources: SOURCES.filter((s) => s.category === 'advisory-db').sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  },
];
