export type SourceCategory =
  | 'vendor-psirt'
  | 'vendor-outages'
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
  // 2. Vendor Infrastructure & Outage Radars (33 feeds, Alphabetical)
  // ---------------------------------------------------------------------------
  {
    name: '1Password Status',
    domain: 'status.1password.com',
    url: 'https://status.1password.com/',
    focus: 'Operational health and incident tracking across 1Password enterprise vaults, developer tools, and browser extensions.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Apple System Status',
    domain: 'apple.com',
    url: 'https://www.apple.com/support/systemstatus/',
    focus: 'Real-time health of Apple Developer services, iCloud infrastructure, Apple ID authentication, and push notification relays.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Atlassian Status',
    domain: 'status.atlassian.com',
    url: 'https://status.atlassian.com/',
    focus: 'Live incident and degradation telemetry across Jira Cloud, Confluence, Bitbucket, and Opsgenie.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'AWS Service Health',
    domain: 'health.aws.amazon.com',
    url: 'https://health.aws.amazon.com/health/status',
    focus: 'Authoritative regional and global health status across all Amazon Web Services compute, storage, IAM, and networking.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Azure Status',
    domain: 'azure.status.microsoft',
    url: 'https://azure.status.microsoft/en-us/status',
    focus: 'Dedicated live RSS incident radar and regional operational health across all Microsoft Azure cloud infrastructure.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Broadcom / VMware Status',
    domain: 'status.broadcom.com',
    url: 'https://status.broadcom.com/',
    focus: 'Operational telemetry for VMware Cloud Foundation, Tanzu, Carbon Black, and Broadcom enterprise cloud services.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Check Point Status',
    domain: 'status.checkpoint.com',
    url: 'https://status.checkpoint.com/',
    focus: 'Real-time operational status for Quantum security gateways, Harmony SASE, CloudGuard, and Infinity portals.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Cisco Status',
    domain: 'status.cisco.com',
    url: 'https://status.cisco.com/',
    focus: 'Incident tracking across Cisco Duo two-factor authentication, Umbrella DNS, Secure Endpoint, and Webex.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Citrix Cloud Status',
    domain: 'status.cloud.com',
    url: 'https://status.cloud.com/',
    focus: 'Service availability and incident reports for Citrix DaaS, NetScaler Gateway service, and Workspace.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Cloudflare Status',
    domain: 'cloudflarestatus.com',
    url: 'https://www.cloudflarestatus.com/',
    focus: 'Global edge network telemetry, Zero Trust / Access gateways, Workers runtime, and DNS resolution health.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'CrowdStrike Falcon Status',
    domain: 'falcon.crowdstrike.com',
    url: 'https://falcon.crowdstrike.com/',
    focus: 'Operational telemetry for the Falcon XDR Cloud, Threat Graph, sensor update infrastructure, and API endpoints.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'CyberArk Status',
    domain: 'status.cyberark.com',
    url: 'https://status.cyberark.com/',
    focus: 'Operational status for CyberArk Identity Security Platform, Privilege Cloud, and Workforce Password Management.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'F5 Distributed Cloud Status',
    domain: 'f5cloudstatus.com',
    url: 'https://www.f5cloudstatus.com/',
    focus: 'Live incident radar for F5 Distributed Cloud WAAP, BIG-IP Next Cloud, and global multi-cloud networking.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Fortinet FortiStatus',
    domain: 'status.fortistatus.com',
    url: 'https://status.fortistatus.com/',
    focus: 'Service health across FortiCloud, FortiSASE, FortiGate Cloud management, and FortiGuard security fabric.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'GitHub Status',
    domain: 'githubstatus.com',
    url: 'https://www.githubstatus.com/',
    focus: 'Continuous health telemetry for GitHub Actions runners, Git operations, Webhooks, API, and Copilot.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'GitLab Status',
    domain: 'status.gitlab.com',
    url: 'https://status.gitlab.com/',
    focus: 'Operational status and incident tracking for GitLab.com SaaS, CI/CD Shared Runners, and Container Registry.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Google Cloud Status',
    domain: 'status.cloud.google.com',
    url: 'https://status.cloud.google.com/',
    focus: 'Authoritative status dashboard for Google Cloud Platform (GCP) compute, Google Kubernetes Engine (GKE), and BigQuery.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'HashiCorp Status',
    domain: 'status.hashicorp.com',
    url: 'https://status.hashicorp.com/',
    focus: 'Live health telemetry for HashiCorp Cloud Platform (HCP) Vault, Terraform Cloud, and Consul.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Ivanti Cloud Status',
    domain: 'status.ivanticloud.com',
    url: 'https://status.ivanticloud.com/',
    focus: 'Operational reporting for Ivanti Neurons, Connect Secure cloud controllers, and Endpoint Manager.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Microsoft 365 Status',
    domain: 'status.cloud.microsoft',
    url: 'https://status.cloud.microsoft/m365/referrer=serviceStatusRedirect',
    focus: 'Live incident telemetry across Microsoft 365, Teams, Exchange Online, SharePoint, and Entra ID authentication.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Okta Status',
    domain: 'status.okta.com',
    url: 'https://status.okta.com/',
    focus: 'Real-time availability and incident tracking across all global Okta Identity Cloud cells, Workforce Identity, and Customer Identity.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Oracle Cloud (OCI) Status',
    domain: 'ocistatus.oraclecloud.com',
    url: 'https://ocistatus.oraclecloud.com/',
    focus: 'Operational status across all Oracle Cloud regions, autonomous databases, compute nodes, and security zones.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Palo Alto Networks Status',
    domain: 'status.paloaltonetworks.com',
    url: 'https://status.paloaltonetworks.com/',
    focus: 'Incident tracking for Prisma Access SASE, Cortex XDR, Strata Cloud Manager, and WildFire cloud analysis.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Qualys Status',
    domain: 'status.qualys.com',
    url: 'https://status.qualys.com/',
    focus: 'Operational availability across all Qualys Cloud Platform shared and private operational clusters worldwide.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Rapid7 Status',
    domain: 'status.rapid7.com',
    url: 'https://status.rapid7.com/',
    focus: 'Live health reporting for InsightVM vulnerability management, InsightIDR SIEM/XDR, and InsightConnect.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Red Hat Status',
    domain: 'status.redhat.com',
    url: 'https://status.redhat.com/',
    focus: 'Service health across Red Hat Hybrid Cloud Console, OpenShift Dedicated, Quay.io registry, and customer portal.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'SentinelOne Status',
    domain: 'status.sentinelone.com',
    url: 'https://status.sentinelone.com/',
    focus: 'Live operational telemetry across Singularity XDR management consoles, cloud AI analysis, and agent communication.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Slack System Status',
    domain: 'status.slack.com',
    url: 'https://status.slack.com/',
    focus: 'Service incident tracking across Slack messaging, huddles, workflow builder, enterprise key management, and API.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'SonicWall Status',
    domain: 'status.sonicwall.com',
    url: 'https://status.sonicwall.com/',
    focus: 'Live operational health across Hosted Email Security (HES), Wireless Network Manager (WNM), and Cloud Edge SASE.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Sophos Central Status',
    domain: 'sophoscentral.status.page',
    url: 'https://sophoscentral.status.page/',
    focus: 'Real-time availability for Sophos Central endpoint management, XGS firewall cloud reporting, and MDR operations.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Tenable Status',
    domain: 'status.tenable.com',
    url: 'https://status.tenable.com/',
    focus: 'Live incident radar for Tenable One exposure management, Tenable.io vulnerability cloud, and OT security.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Trend Micro Status',
    domain: 'status.trendmicro.com',
    url: 'https://status.trendmicro.com/',
    focus: 'Operational telemetry for Trend Vision One, Apex One SaaS, and Cloud One workload protection.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },
  {
    name: 'Zscaler Trust',
    domain: 'trust.zscaler.com',
    url: 'https://trust.zscaler.com/',
    focus: 'Operational health across global Zscaler Internet Access (ZIA) public service edges and Private Access (ZPA) brokers.',
    category: 'vendor-outages',
    cadence: '5m edge poll',
  },

  // ---------------------------------------------------------------------------
  // 3. Threat Research & News (28 feeds, Alphabetical)
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
    name: 'Google Threat Intelligence',
    domain: 'cloud.google.com',
    url: 'https://cloud.google.com/blog/topics/threat-intelligence',
    focus: 'Nation-state APT campaigns, Mandiant incident response, cloud resource hijacking, and cyber espionage telemetry.',
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
 * Filtered threat feeds count (excluding authoritative databases and outage monitors)
 */
export const THREAT_FEEDS_COUNT = SOURCES.filter(
  (s) => s.category !== 'advisory-db' && s.category !== 'vendor-outages'
).length;

/**
 * Live vendor outage & infrastructure health monitors count
 */
export const OUTAGE_FEEDS_COUNT = SOURCES.filter(
  (s) => s.category === 'vendor-outages'
).length;

/**
 * Total monitored sources, outage radars, and databases count
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
    id: 'vendor-outages',
    title: 'Vendor Outage & Infrastructure Radars',
    description:
      'Real-time operational health, incident status, and outage feeds monitored across 33 enterprise IT, security, cloud, and developer platforms.',
    sources: SOURCES.filter((s) => s.category === 'vendor-outages').sort((a, b) =>
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
