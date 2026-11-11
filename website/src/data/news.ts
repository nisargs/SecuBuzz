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
    "slug": "maersk-breach-exposes-legacy-system-data-24af8572",
    "title": "Maersk Breach Exposes Legacy System Data",
    "summary": "Maersk confirmed that a threat actor accessed a legacy local system inherited from a prior acquisition and exfiltrated data. The breach coincided with a WhiteArmor ransomware campaign demanding a $5 million payment, though the ransomware did not encrypt Maersk files. Maersk has engaged incident response teams, applied security patches, and is monitoring for further compromise.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/maersk-confirms-data-breach-as-whitearmor-ransomware-demands-5-million/",
    "publishedAt": "2026-11-11T16:24:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "maersk-breach-exposes-legacy-system-data",
      "article-24af8572",
      "24af8572",
      "maersk-breach-exposes-legacy-system-data-109cf0"
    ]
  },
  {
    "slug": "zoom-workplace-unauthenticated-remote-privilege-es-e9f5a551",
    "title": "Zoom Workplace Unauthenticated Remote Privilege Escalation CVE",
    "summary": "Zoom Workplace for Windows is vulnerable to CVE-2026-108186, an unauthenticated remote privilege escalation flaw triggered by improper input validation. The flaw carries a CVSS score of 9.6, enabling attackers to elevate privileges without authentication and potentially compromise affected systems. Zoom has released software updates to address the vulnerability; security teams should apply the patch immediately to mitigate risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/critical-zoom-workplace-flaw-could.html",
    "publishedAt": "2026-11-11T16:12:46.000Z",
    "cves": [
      "CVE-2026-108186"
    ],
    "additionalSources": [],
    "aliases": [
      "zoom-workplace-unauthenticated-remote-privilege-es",
      "article-e9f5a551",
      "e9f5a551",
      "zoom-workplace-unauthenticated-remote-privilege-es-1a0771",
      "zoom-workplace-unauthenticated-remote-privilege-escalation-c"
    ]
  },
  {
    "slug": "hackers-could-exploit-mcp-server-supply-chain-weak-7b7ec6a2",
    "title": "Hackers Could Exploit MCP Server Supply Chain Weaknesses to Steal API Keys and Administrator Credentials",
    "summary": "Security teams that run AI coding assistants may be exposing their most powerful credentials without knowing it. A new study shows that Model Context Protocol (MCP) servers can quietly change their own code after they are set up.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-could-exploit-mcp-server/",
    "publishedAt": "2026-11-11T16:07:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-could-exploit-mcp-server-supply-chain-weak",
      "article-7b7ec6a2",
      "7b7ec6a2",
      "hackers-could-exploit-mcp-server-supply-chain-weak-77dca6",
      "hackers-could-exploit-mcp-server-supply-chain-weaknesses-to-"
    ]
  },
  {
    "slug": "microsoft-updates-visual-studio-cve-2026-114151-rc-6d361bc9",
    "title": "Microsoft Updates Visual Studio CVE-2026-114151 RCE",
    "summary": "Microsoft issued an informational update for Visual Studio addressing CVE-2026-114151, a remote code execution flaw. The flaw permits unauthenticated code execution via malformed input, yet no public exploit or PoC has been released. The update lists affected product versions only; no patch is required and no immediate remediation is necessary.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114151",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114151"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-visual-studio-cve-2026-114151-rc",
      "article-6d361bc9",
      "6d361bc9",
      "microsoft-updates-visual-studio-cve-2026-114151-rc-1feaf4",
      "microsoft-updates-visual-studio-cve-2026-114151-rce"
    ]
  },
  {
    "slug": "microsoft-updates-visual-studio-cve-2026-114152-rc-76b4d667",
    "title": "Microsoft Updates Visual Studio CVE-2026-114152 RCE",
    "summary": "Microsoft issued an informational update for Visual Studio addressing CVE-2026-114152, a remote code execution flaw. The vulnerability allows unauthenticated code execution through malformed input, but no public exploit or PoC has been disclosed. The update merely lists affected product versions; no patch is required and no immediate remediation is necessary.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114152",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114152"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-visual-studio-cve-2026-114152-rc",
      "article-76b4d667",
      "76b4d667",
      "microsoft-updates-visual-studio-cve-2026-114152-rc-1feaf4",
      "microsoft-updates-visual-studio-cve-2026-114152-rce"
    ]
  },
  {
    "slug": "microsoft-updates-visual-studio-cve-2026-114158-rc-c6216357",
    "title": "Microsoft Updates Visual Studio CVE-2026-114158 RCE",
    "summary": "Microsoft issued an informational update for Visual Studio addressing CVE-2026-114158, a remote code execution flaw. The flaw permits unauthenticated code execution via malformed input, yet no public exploit or PoC has been released. The update lists affected product versions only; no patch is required and no immediate remediation is necessary.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114158",
    "publishedAt": "2026-11-11T16:00:00.000Z",
    "cves": [
      "CVE-2026-114158"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-updates-visual-studio-cve-2026-114158-rc",
      "article-c6216357",
      "c6216357",
      "microsoft-updates-visual-studio-cve-2026-114158-rc-1feaf4",
      "microsoft-updates-visual-studio-cve-2026-114158-rce"
    ]
  },
  {
    "slug": "xen-orchestra-authentication-bypass-enables-admin-6ddfe4c0",
    "title": "Xen Orchestra Authentication Bypass Enables Admin Code Execution",
    "summary": "A critical authentication bypass in Xen Orchestra allows attackers to gain administrative privileges on XCP‑ng nodes. The flaw permits arbitrary code execution via crafted API requests, exposing the hypervisor to remote compromise without user interaction. Red Hat and Xen Orchestra have released patches; administrators should apply the latest updates and restrict API access to trusted hosts.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/critical-xen-orchestra-flaws-exploited-in-attacks/",
    "publishedAt": "2026-11-11T15:42:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xen-orchestra-authentication-bypass-enables-admin",
      "article-6ddfe4c0",
      "6ddfe4c0",
      "xen-orchestra-authentication-bypass-enables-admin-7156f1",
      "xen-orchestra-authentication-bypass-enables-admin-code-execu"
    ]
  },
  {
    "slug": "ansible-2-4-critical-update-addresses-remote-explo-a6243e06",
    "title": "Ansible 2.4 Critical Update Addresses Remote Exploits",
    "summary": "Red Hat released a critical security update for Ansible Automation Platform 2.4, addressing multiple vulnerabilities that could allow remote code execution. The update includes patches for CVE‑linked flaws, each with a CVSS base score indicating high exploitation risk. Administrators should apply the RHSA‑2026:99006 update immediately and verify that all affected nodes are patched.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99006",
    "publishedAt": "2026-11-11T15:26:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ansible-2-4-critical-update-addresses-remote-explo",
      "article-a6243e06",
      "a6243e06",
      "ansible-2-4-critical-update-addresses-remote-explo-37d683",
      "ansible-2-4-critical-update-addresses-remote-exploits"
    ]
  },
  {
    "slug": "ansible-2-5-critical-update-addresses-remote-explo-26701ba2",
    "title": "Ansible 2.5 Critical Update Addresses Remote Exploits",
    "summary": "Red Hat issued a critical patch for Ansible Automation Platform 2.5, fixing vulnerabilities that could enable remote code execution on managed nodes. Each flaw is referenced by CVE identifiers and carries a high CVSS score, indicating significant exploitation potential. Users should apply the RHSA‑2026:99007 update promptly and audit their Ansible inventory for unpatched hosts.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:99007",
    "publishedAt": "2026-11-11T15:23:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ansible-2-5-critical-update-addresses-remote-explo",
      "article-26701ba2",
      "26701ba2",
      "ansible-2-5-critical-update-addresses-remote-explo-37d683",
      "ansible-2-5-critical-update-addresses-remote-exploits"
    ]
  },
  {
    "slug": "antifox-ai-agents-target-aws-credentials-4539ca27",
    "title": "AntiFox AI Agents Target AWS Credentials",
    "summary": "Attackers deploy AntiFox AI agents on Alibaba Cloud to harvest AWS credentials from targeted web services. The open-source platform automates credential extraction, enabling rapid lateral movement within compromised AWS environments. Defenders should restrict outbound traffic from cloud instances, enforce least‑privilege IAM roles, and monitor for anomalous credential usage daily actively continuously.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-use-antifox-ai-agents-in-aws-credential-theft-attacks/",
    "publishedAt": "2026-11-11T15:12:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "antifox-ai-agents-target-aws-credentials",
      "article-4539ca27",
      "4539ca27",
      "antifox-ai-agents-target-aws-credentials-6ce1b6"
    ]
  },
  {
    "slug": "red-hat-updates-java-runtime-on-rhel-8-f2c13183",
    "title": "Red Hat Updates Java Runtime on RHEL 8",
    "summary": "Red Hat released an important security update for java‑1.8.0‑openjdk on RHEL 8, fixing Java runtime vulnerabilities. The patch addresses remote code execution and information disclosure flaws with CVSS scores between 7.0 and 8.5. Apply the update promptly, test application compatibility, and monitor for anomalous runtime behavior to maintain security posture.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95609",
    "publishedAt": "2026-11-11T15:01:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-java-runtime-on-rhel-8",
      "article-f2c13183",
      "f2c13183",
      "red-hat-updates-java-runtime-on-rhel-8-37d83e"
    ]
  },
  {
    "slug": "linux-ebpf-rootkits-spread-via-underground-forums-ca178826",
    "title": "Linux eBPF Rootkits Spread via Underground Forums",
    "summary": "Linux eBPF rootkits enable malicious code to run without loading kernel modules, allowing attackers to conceal activity. Flare analysis shows underground forums distribute rootkit source, tutorials, and exploits, expanding the threat surface across Linux systems. Security teams should monitor eBPF activity, enforce kernel module signing, and apply vendor patches to mitigate hidden rootkits.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/ebpf-rootkits-why-underground-actors-are-taking-notice/",
    "publishedAt": "2026-11-11T15:01:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-ebpf-rootkits-spread-via-underground-forums",
      "article-ca178826",
      "ca178826",
      "linux-ebpf-rootkits-spread-via-underground-forums-3277df"
    ]
  },
  {
    "slug": "red-hat-patches-mod-http2-on-rhel-9-8-f0fa443e",
    "title": "Red Hat Patches mod_http2 on RHEL 9.8",
    "summary": "Red Hat issued an important security update for mod_http2 on RHEL 9.8, addressing critical HTTP/2 handling flaws. The update mitigates potential denial‑of‑service and information disclosure vulnerabilities, with CVSS scores up to 8.0. Deploy the patch immediately, verify HTTP/2 functionality, and monitor for abnormal traffic patterns to preserve service availability across all affected servers.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98982",
    "publishedAt": "2026-11-11T14:58:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-patches-mod-http2-on-rhel-9-8",
      "article-f0fa443e",
      "f0fa443e",
      "red-hat-patches-mod-http2-on-rhel-9-8-37d6d5"
    ]
  },
  {
    "slug": "kai-adds-external-attack-surface-management-to-def-a9e35699",
    "title": "Kai Adds External Attack Surface Management to Defense Platform",
    "summary": "Security vendor Kai announced External Attack Surface Management capability integration into its Autonomous Defense Platform to monitor internet-facing assets. The feature addresses visibility gaps in internal exposure programs by identifying externally facing vulnerabilities visible to potential threat actors. The unified platform consolidates internal and external security exposures into a single remediation workflow to streamline risk mitigation efforts.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/kai-autonomous-defense-platform/",
    "publishedAt": "2026-11-11T14:55:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kai-adds-external-attack-surface-management-to-def",
      "article-a9e35699",
      "a9e35699",
      "kai-adds-external-attack-surface-management-to-def-76b889",
      "kai-adds-external-attack-surface-management-to-defense-platf"
    ]
  },
  {
    "slug": "red-hat-issues-openjdk-8-security-update-for-rhel-5832fee3",
    "title": "Red Hat Issues OpenJDK 8 Security Update for RHEL 7",
    "summary": "Red Hat released a security update for java‑1.8.0‑openjdk on Red Enterprise Linux 7 Extended Lifecycle Support to address multiple vulnerabilities. The update covers unspecified Java runtime flaws rated Important, with CVSS base scores linked via CVE references, potentially enabling remote code execution or privilege escalation. System administrators should apply the RHSA‑2026:95598 patch and verify Java version to ensure protection.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95598",
    "publishedAt": "2026-11-11T14:33:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-openjdk-8-security-update-for-rhel",
      "article-5832fee3",
      "5832fee3",
      "red-hat-issues-openjdk-8-security-update-for-rhel-37d841",
      "red-hat-issues-openjdk-8-security-update-for-rhel-7"
    ]
  },
  {
    "slug": "git-issues-patches-for-six-vulnerabilities-includi-beb706d4",
    "title": "Git Issues Patches for Six Vulnerabilities, Including Code Execution",
    "summary": "Git released patches for six vulnerabilities, including CVE-2026-111760, which allows code execution during recursive clones. The flaw stems from an integer truncation in Git’s index handling, enabling attackers to write unintended files or cause memory corruption when processing malicious repositories. Git has issued security updates; users should apply the latest release to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/git-project-security-updates/",
    "publishedAt": "2026-11-11T14:26:12.000Z",
    "cves": [
      "CVE-2026-111760"
    ],
    "additionalSources": [],
    "aliases": [
      "git-issues-patches-for-six-vulnerabilities-includi",
      "article-beb706d4",
      "beb706d4",
      "git-issues-patches-for-six-vulnerabilities-includi-4c12d4",
      "git-issues-patches-for-six-vulnerabilities-including-code-ex"
    ]
  },
  {
    "slug": "cloudflare-explains-quepaxa-consensus-algorithm-1e0211c8",
    "title": "Cloudflare Explains QuePaxa Consensus Algorithm",
    "summary": "Cloudflare is building an experimental consensus service that uses the novel QuePaxa algorithm, a consensus mechanism never deployed before. QuePaxa blends proof‑of‑work and proof‑of‑stake to reduce latency and increase fault tolerance across distributed nodes. The post explains the algorithm’s design and rationale, offering insights for researchers and practitioners exploring next‑generation consensus.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/choosing-quepaxa/",
    "publishedAt": "2026-11-11T14:24:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-explains-quepaxa-consensus-algorithm",
      "article-1e0211c8",
      "1e0211c8",
      "cloudflare-explains-quepaxa-consensus-algorithm-7323e2"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-security-update-for-rhel-1-54d0cb1a",
    "title": "Red Hat Releases Kernel Security Update for RHEL 10",
    "summary": "Red Hat issued a kernel update for Red Enterprise Linux 10 to address multiple security issues. The update targets unspecified kernel vulnerabilities rated Important, with CVSS base scores available via CVE references, indicating potential privilege escalation or denial of service if exploited. Administrators should apply the RHSA‑2026:98638 patch promptly and verify kernel version to ensure protection.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98638",
    "publishedAt": "2026-11-11T14:10:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-security-update-for-rhel-1",
      "article-54d0cb1a",
      "54d0cb1a",
      "red-hat-releases-kernel-security-update-for-rhel-1-37d6e1",
      "red-hat-releases-kernel-security-update-for-rhel-10"
    ]
  },
  {
    "slug": "qlik-sense-servers-targeted-by-reverse-shell-attem-b382a9bf",
    "title": "Qlik Sense Servers Targeted by Reverse Shell Attempts",
    "summary": "Threat actors targeted Qlik Sense servers in October 2026, attempting to deliver PowerShell reverse shells across multiple environments. The activity, observed by Cynet's CyOps and Research teams, involved a narrow three‑minute window and failed to achieve code execution or credential compromise. Security teams should monitor for similar attempts and ensure Qlik Sense is patched to the latest version.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-target-qlik-sense-servers-with.html",
    "publishedAt": "2026-11-11T14:01:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "qlik-sense-servers-targeted-by-reverse-shell-attem",
      "article-b382a9bf",
      "b382a9bf",
      "qlik-sense-servers-targeted-by-reverse-shell-attem-43fcd1",
      "qlik-sense-servers-targeted-by-reverse-shell-attempts"
    ]
  },
  {
    "slug": "asus-zoom-issue-patches-for-execution-flaws-8bf454f6",
    "title": "Asus, Zoom Issue Patches for Execution Flaws",
    "summary": "Asus and Zoom released security patches addressing critical flaws that could allow attackers to execute arbitrary code, overwrite memory, and elevate privileges. The vulnerabilities involve memory corruption and privilege escalation paths, potentially enabling full system compromise if exploited. Users should install the latest updates for both Asus firmware and Zoom client immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/asus-zoom-release-security-patches/",
    "publishedAt": "2026-11-11T13:58:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "asus-zoom-issue-patches-for-execution-flaws",
      "article-8bf454f6",
      "8bf454f6",
      "asus-zoom-issue-patches-for-execution-flaws-33d66f"
    ]
  },
  {
    "slug": "windows-signdrop-0-day-exploit-lets-attackers-gain-0c53ce65",
    "title": "Windows SignDrop 0-Day Exploit Lets Attackers Gain SYSTEM Privileges Through CLFS Protection",
    "summary": "A public exploit called SignDrop targets a Windows security feature meant to stop attacks on the Common Log File System (CLFS). It claims to turn a normal user account into a SYSTEM account, the highest level of control on Windows. The flaw has no CVE number and no patch as of November 11, 2026.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/windows-signdrop-zero-day-exploit/",
    "publishedAt": "2026-11-11T13:57:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-signdrop-0-day-exploit-lets-attackers-gain",
      "article-0c53ce65",
      "0c53ce65",
      "windows-signdrop-0-day-exploit-lets-attackers-gain-5900c9",
      "windows-signdrop-0-day-exploit-lets-attackers-gain-system-pr"
    ]
  },
  {
    "slug": "remus-malware-claims-persistent-gmail-access-after-81bdb562",
    "title": "Remus Malware Claims Persistent Gmail Access After Reset",
    "summary": "The Remus infostealer asserts it can maintain Gmail access even after victims reset their passwords. The malware reportedly exploits credential persistence mechanisms, potentially leveraging OAuth tokens or cached credentials to bypass password changes. Users should revoke app permissions, enable two‑factor authentication, and monitor account activity regularly to mitigate the threat.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/remus-malware-claims-gmail-access-even-after-you-change-your-password",
    "publishedAt": "2026-11-11T13:42:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "remus-malware-claims-persistent-gmail-access-after",
      "article-81bdb562",
      "81bdb562",
      "remus-malware-claims-persistent-gmail-access-after-b7f879",
      "remus-malware-claims-persistent-gmail-access-after-reset"
    ]
  },
  {
    "slug": "rhsa-2026-98592-important-go-fdo-client-security-u-9fe8f942",
    "title": "RHSA-2026:98592: Important: go-fdo-client security update",
    "summary": "An update for go-fdo-client is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98592",
    "publishedAt": "2026-11-11T13:41:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98592-important-go-fdo-client-security-u",
      "article-9fe8f942",
      "9fe8f942",
      "rhsa-2026-98592-important-go-fdo-client-security-u-37d6e4",
      "rhsa-2026-98592-important-go-fdo-client-security-update"
    ]
  },
  {
    "slug": "citrix-ivanti-release-patches-for-rce-vulnerabilit-9b10f27d",
    "title": "Citrix, Ivanti Release Patches for RCE Vulnerabilities",
    "summary": "Citrix and Ivanti disclosed critical vulnerabilities that let attackers tamper with certificate entries and achieve remote code execution on affected hosts. The flaws arise from improper certificate validation, enabling arbitrary code execution and full host compromise; no public exploit is confirmed. Both vendors released patches; administrators should apply updates immediately and verify certificate integrity to mitigate risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/citrix-ivanti-patch-critical-and-high-severity-vulnerabilities/",
    "publishedAt": "2026-11-11T13:37:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "citrix-ivanti-release-patches-for-rce-vulnerabilit",
      "article-9b10f27d",
      "9b10f27d",
      "citrix-ivanti-release-patches-for-rce-vulnerabilit-3eadc4",
      "citrix-ivanti-release-patches-for-rce-vulnerabilities"
    ]
  },
  {
    "slug": "rhsa-2026-98595-important-flatpak-security-update-defea441",
    "title": "RHSA-2026:98595: Important: flatpak security update",
    "summary": "An update for flatpak is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98595",
    "publishedAt": "2026-11-11T13:37:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98595-important-flatpak-security-update",
      "article-defea441",
      "defea441",
      "rhsa-2026-98595-important-flatpak-security-update-37d6e4"
    ]
  },
  {
    "slug": "poland-shuts-down-epuap-after-cyberattack-b4bd6997",
    "title": "Poland Shuts Down ePUAP After Cyberattack",
    "summary": "Poland’s nationwide ePUAP platform, used for submitting official documents and communicating with government agencies, was shut down after a cyberattack. The attack disrupted the platform’s availability, preventing citizens from completing administrative procedures online. Polish authorities are investigating the incident, and the platform will be restored after security measures are verified.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/poland-shuts-down-government-services-platform-cyberattack",
    "publishedAt": "2026-11-11T13:18:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "poland-shuts-down-epuap-after-cyberattack",
      "article-b4bd6997",
      "b4bd6997",
      "poland-shuts-down-epuap-after-cyberattack-3e57c8"
    ]
  },
  {
    "slug": "britain-france-issue-guidelines-for-hacking-firms-94bb8378",
    "title": "Britain, France Issue Guidelines for Hacking Firms",
    "summary": "Britain and France have released the first regulatory guidelines targeting commercial hacking firms that develop, sell, or finance cyber‑crime infrastructure components (CCICs). The guidelines require firms to vet customers, implement technical safeguards against misuse, and maintain monitoring and reporting systems for abuse incidents. Compliance will be monitored by national authorities, and non‑compliance could result in licensing revocation or legal action.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/britain-france-set-out-guidelines-for-commercial-hacking-firms",
    "publishedAt": "2026-11-11T13:11:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "britain-france-issue-guidelines-for-hacking-firms",
      "article-94bb8378",
      "94bb8378",
      "britain-france-issue-guidelines-for-hacking-firms-51648b"
    ]
  },
  {
    "slug": "blind-eagle-targets-latin-america-with-fake-court-95822401",
    "title": "Blind Eagle Targets Latin America with Fake Court RATs",
    "summary": "Law enforcement intelligence reports that the state‑backed threat actor Blind Eagle targets Latin American entities with fake court‑related RATs. The RATs masquerade as legitimate court software, allowing attackers to establish persistent footholds and exfiltrate sensitive data. Security teams should verify software authenticity, enforce strict application whitelisting, and monitor for anomalous remote access activity.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/blind-eagle-uses-fake-court-notices-to-deliver-remote-a",
    "publishedAt": "2026-11-11T13:10:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "blind-eagle-targets-latin-america-with-fake-court",
      "article-95822401",
      "95822401",
      "blind-eagle-targets-latin-america-with-fake-court-196cd8",
      "blind-eagle-targets-latin-america-with-fake-court-rats"
    ]
  },
  {
    "slug": "git-cve-2026-111760-enables-remote-code-execution-c8ba2879",
    "title": "Git CVE-2026-111760 Enables Remote Code Execution",
    "summary": "Git introduced CVE-2026-111760, a flaw that permits remote code execution in enterprise environments. The vulnerability arises from improper input validation in the Git server component, allowing attackers to inject malicious commands; no public exploit is documented. A patch is available; administrators should update Git to the latest release and monitor logs for suspicious activity.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/git-patches-flaw-that-lets-malicious-repositories-execu",
    "publishedAt": "2026-11-11T13:10:43.000Z",
    "cves": [
      "CVE-2026-111760"
    ],
    "additionalSources": [],
    "aliases": [
      "git-cve-2026-111760-enables-remote-code-execution",
      "article-c8ba2879",
      "c8ba2879",
      "git-cve-2026-111760-enables-remote-code-execution-3a8d59"
    ]
  },
  {
    "slug": "cisa-kev-catalog-detect-patch-six-new-exploits-379e8ffb",
    "title": "CISA KEV Catalog: Detect & Patch Six New Exploits",
    "summary": "Critical security intelligence alert regarding CISA KEV Catalog: Detect & Patch Six. Review root-cause telemetry, hunt via detection rules, and patch today. The vulnerability is tracked as CVE-2026-20320.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cisa-adds-six-known-exploited-vulnerabilities-to-catalo",
    "publishedAt": "2026-11-11T13:10:29.000Z",
    "cves": [
      "CVE-2026-20320"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-kev-catalog-detect-patch-six-new-exploits",
      "article-379e8ffb",
      "379e8ffb",
      "cisa-kev-catalog-detect-patch-six-new-exploits-1b6aff"
    ]
  },
  {
    "slug": "cisco-broadworks-cve-2026-20320-xxe-flaw-patch-cfad1869",
    "title": "Cisco BroadWorks CVE-2026-20320: XXE Flaw Patch",
    "summary": "Cisco BroadWorks is affected by CVE-2026-20320, an XML External Entity (XXE) flaw that can enable remote code execution. The vulnerability allows attackers to read arbitrary files and execute commands on the BroadWorks server when processing crafted XML requests. Cisco has released a patch; administrators should apply the update immediately and enable input validation to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cisa-flags-cisco-broadworks-flaw-as-actively-exploited",
    "publishedAt": "2026-11-11T13:10:06.000Z",
    "cves": [
      "CVE-2026-20320"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-broadworks-cve-2026-20320-xxe-flaw-patch",
      "article-cfad1869",
      "cfad1869",
      "cisco-broadworks-cve-2026-20320-xxe-flaw-patch-2ca8f4"
    ]
  },
  {
    "slug": "microsoft-cve-2026-124194-enables-outlook-rce-ac9d4617",
    "title": "Microsoft CVE-2026-124194 Enables Outlook RCE",
    "summary": "Microsoft disclosed CVE-2026-124194, a flaw that allows remote code execution in Outlook on enterprise systems. The issue stems from improper handling of email attachments, enabling attackers to execute arbitrary code; no public exploit is reported. Microsoft has released a patch; users should update Outlook immediately and disable macro execution as a precaution.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/microsoft-november-2026-patch-tuesday-fixes-1-235-flaws",
    "publishedAt": "2026-11-11T13:09:51.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-cve-2026-124194-enables-outlook-rce",
      "article-ac9d4617",
      "ac9d4617",
      "microsoft-cve-2026-124194-enables-outlook-rce-1cb212"
    ]
  },
  {
    "slug": "rhsa-2026-98471-important-openexr-security-update-56dd69b3",
    "title": "RHSA-2026:98471: Important: openexr security update",
    "summary": "An update for openexr is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98471",
    "publishedAt": "2026-11-11T13:07:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98471-important-openexr-security-update",
      "article-56dd69b3",
      "56dd69b3",
      "rhsa-2026-98471-important-openexr-security-update-37d6e8"
    ]
  },
  {
    "slug": "n-able-issues-emergency-hotfix-after-33-vulnerabil-9ad632e5",
    "title": "N‑able Issues Emergency Hotfix After 33 Vulnerabilities Shutdown",
    "summary": "N‑able’s hosted remote monitoring platform suffered a worldwide shutdown after the public disclosure of 33 vulnerabilities. The emergency update, build 2026.4.1.26, addresses seven published CVEs and implements server, agent, and probe hardening to mitigate the identified weaknesses. Security teams should apply the hotfix immediately and review configuration settings to prevent similar disruptions.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/n-able-n-central-security-vulnerabilities/",
    "publishedAt": "2026-11-11T12:57:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-issues-emergency-hotfix-after-33-vulnerabil",
      "article-9ad632e5",
      "9ad632e5",
      "n-able-issues-emergency-hotfix-after-33-vulnerabil-dd18ec",
      "n-able-issues-emergency-hotfix-after-33-vulnerabilities-shut"
    ]
  },
  {
    "slug": "red-hat-rhc-update-addresses-important-vulnerabili-dc8f8a9d",
    "title": "Red Hat rhc Update Addresses Important Vulnerabilities",
    "summary": "Red Hat released a security update for the rhc client on Enterprise Linux 7, addressing vulnerabilities that could allow privilege escalation. The advisory references several CVEs with CVSS scores ranging from 7.5 to 8.3, indicating high exploitation potential for authenticated users. Administrators should apply the rhc update immediately and verify that all affected components are patched to prevent unauthorized access.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98794",
    "publishedAt": "2026-11-11T12:40:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-rhc-update-addresses-important-vulnerabili",
      "article-dc8f8a9d",
      "dc8f8a9d",
      "red-hat-rhc-update-addresses-important-vulnerabili-37d6dc",
      "red-hat-rhc-update-addresses-important-vulnerabilities"
    ]
  },
  {
    "slug": "red-hat-tigervnc-update-fixes-important-vulnerabil-b8109f0a",
    "title": "Red Hat tigervnc Update Fixes Important Vulnerabilities",
    "summary": "Red Hat issued an update for tigervnc on Enterprise Linux 9, fixing vulnerabilities that could enable code execution via the VNC protocol. The advisory lists CVEs with CVSS scores of 9.0, indicating a severe risk for systems exposed to untrusted network traffic. Users must apply the tigervnc patch immediately and restrict VNC access to trusted hosts to mitigate the threat.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98538",
    "publishedAt": "2026-11-11T12:39:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-tigervnc-update-fixes-important-vulnerabil",
      "article-b8109f0a",
      "b8109f0a",
      "red-hat-tigervnc-update-fixes-important-vulnerabil-37d6e5",
      "red-hat-tigervnc-update-fixes-important-vulnerabilities"
    ]
  },
  {
    "slug": "rhsa-2026-98531-important-qt5-qtdeclarative-securi-511b4b77",
    "title": "RHSA-2026:98531: Important: qt5-qtdeclarative security update",
    "summary": "An update for qt5-qtdeclarative is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98531",
    "publishedAt": "2026-11-11T12:34:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98531-important-qt5-qtdeclarative-securi",
      "article-511b4b77",
      "511b4b77",
      "rhsa-2026-98531-important-qt5-qtdeclarative-securi-37d6e5",
      "rhsa-2026-98531-important-qt5-qtdeclarative-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-98529-important-nginx-security-update-cf63534c",
    "title": "RHSA-2026:98529: Important: nginx security update",
    "summary": "An update for nginx is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98529",
    "publishedAt": "2026-11-11T12:34:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98529-important-nginx-security-update",
      "article-cf63534c",
      "cf63534c",
      "rhsa-2026-98529-important-nginx-security-update-37d6e5"
    ]
  },
  {
    "slug": "n-able-issues-hotfixes-for-zero-day-rmm-flaws-2b6e2e65",
    "title": "N‑able Issues Hotfixes for Zero‑Day RMM Flaws",
    "summary": "N‑able issued hotfixes for zero‑day flaws in its N‑central RMM platform that were publicly disclosed and caused hosted environments to go offline. The flaws arise from unvalidated input in the remote API, letting attackers execute arbitrary code and disrupt services; no public exploit exists. Administrators should apply the hotfixes immediately, monitor API traffic for anomalies, and disable unused remote endpoints.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/n-able-releases-security-hotfixes-for-zero-day-vulnerabilities/",
    "publishedAt": "2026-11-11T12:32:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-issues-hotfixes-for-zero-day-rmm-flaws",
      "article-2b6e2e65",
      "2b6e2e65",
      "n-able-issues-hotfixes-for-zero-day-rmm-flaws-65971b"
    ]
  },
  {
    "slug": "fortinet-releases-patch-for-nearly-100-vulnerabili-2d6ccff8",
    "title": "Fortinet Releases Patch for Nearly 100 Vulnerabilities",
    "summary": "Fortinet issued a comprehensive patch update covering almost 100 vulnerabilities discovered during AI‑driven security testing across multiple Fortinet devices. The update addresses a mix of authentication bypasses, privilege escalation flaws, and buffer overflows across FortiGate and FortiManager products. Administrators should apply the latest firmware and verify configuration compliance to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/fortinet-patches-nearly-100-vulnerabilities/",
    "publishedAt": "2026-11-11T12:10:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortinet-releases-patch-for-nearly-100-vulnerabili",
      "article-2d6ccff8",
      "2d6ccff8",
      "fortinet-releases-patch-for-nearly-100-vulnerabili-5b88be",
      "fortinet-releases-patch-for-nearly-100-vulnerabilities"
    ]
  },
  {
    "slug": "xen-orchestra-auth-bypass-cve-2026-123158-patched-0e92fe33",
    "title": "Xen Orchestra Auth Bypass CVE-2026-123158 Patched",
    "summary": "Xen Orchestra VSA-2026-062 enables attackers to bypass authentication and gain unauthorized access to virtual machine management interfaces. The flaw, catalogued as CVE-2026-123158, exploits a missing session validation check, allowing credentialless access with a CVSS score of 8.1. Red Hat has issued a patch for Xen Orchestra; security teams should update immediately and enforce strict access controls.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/hackers-exploit-critical-xen-orchestra-auth-bypass-flaw",
    "publishedAt": "2026-11-11T11:57:27.000Z",
    "cves": [
      "CVE-2026-123158"
    ],
    "additionalSources": [],
    "aliases": [
      "xen-orchestra-auth-bypass-cve-2026-123158-patched",
      "article-0e92fe33",
      "0e92fe33",
      "xen-orchestra-auth-bypass-cve-2026-123158-patched-5e576d"
    ]
  },
  {
    "slug": "claude-code-ai-discovers-technique-to-turn-dormant-7cfee60b",
    "title": "Claude Code AI Discovers Technique to Turn Dormant Model Neurons Into Hidden Malware Triggers",
    "summary": "Claude Code helped uncover a technique that can turn an otherwise capable AI model into a sleeper agent by changing fewer than 10 dormant neurons. Called Lazarus, the method plants a hidden backdoor in model weights, allowing an attacker’s trigger to make an AI agent produce commands that download and run malicious code.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/claude-code-ai/",
    "publishedAt": "2026-11-11T11:57:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "claude-code-ai-discovers-technique-to-turn-dormant",
      "article-7cfee60b",
      "7cfee60b",
      "claude-code-ai-discovers-technique-to-turn-dormant-228793",
      "claude-code-ai-discovers-technique-to-turn-dormant-model-neu"
    ]
  },
  {
    "slug": "git-fixes-6-vulnerabilities-enabling-code-executio-6e926cb9",
    "title": "Git Fixes 6 Vulnerabilities Enabling Code Execution via Cloning",
    "summary": "Git released 2.56.1, fixing six flaws that could allow code execution during recursive cloning. The critical bug causes an out‑of‑bounds write in the clone process; the others involve unsafe file writes and memory corruption in merges and patches. Upgrade to 2.56.1 or backport the patches to older releases like 2.55.1 and 2.54.1.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/git-fixes-security-vulnerabilities/",
    "publishedAt": "2026-11-11T11:33:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "git-fixes-6-vulnerabilities-enabling-code-executio",
      "article-6e926cb9",
      "6e926cb9",
      "git-fixes-6-vulnerabilities-enabling-code-executio-5c5eb7",
      "git-fixes-6-vulnerabilities-enabling-code-execution-via-clon"
    ]
  },
  {
    "slug": "windows-bitlocker-vulnerabilities-allow-attackers-7dee1c25",
    "title": "Windows BitLocker Vulnerabilities Allow Attackers to Bypass Security Feature",
    "summary": "Microsoft has disclosed two Windows BitLocker security feature bypass vulnerabilities that could allow attackers with physical access to weaken device protections. Published on November 10, 2026, the flaws are tracked as CVE-2026-97015 and CVE-2026-119832. Microsoft rates both as Important, with CVSS base scores of 6.8 and 5.9, respectively.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/windows-bitlocker-security-bypass/",
    "publishedAt": "2026-11-11T11:31:29.000Z",
    "cves": [
      "CVE-2026-97015",
      "CVE-2026-119832"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-bitlocker-vulnerabilities-allow-attackers",
      "article-7dee1c25",
      "7dee1c25",
      "windows-bitlocker-vulnerabilities-allow-attackers-6df65b",
      "windows-bitlocker-vulnerabilities-allow-attackers-to-bypass-"
    ]
  },
  {
    "slug": "microsoft-patch-tuesday-addresses-actively-exploit-a1376189",
    "title": "Microsoft Patch Tuesday Addresses Actively Exploited Outlook CVE",
    "summary": "Microsoft released a Patch Tuesday update for Outlook to remediate an actively exploited vulnerability identified as CVE-2026-124194. The flaw permits remote code execution via malicious email attachments, enabling attackers to execute arbitrary code on affected systems. Administrators should apply the Outlook patch immediately and verify Office updates to close the exploitation vector.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/bugs/2026/11/microsoft-patch-tuesday-fixes-outlook-flaw-already-under-attack",
    "publishedAt": "2026-11-11T11:25:05.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-patch-tuesday-addresses-actively-exploit",
      "article-a1376189",
      "a1376189",
      "microsoft-patch-tuesday-addresses-actively-exploit-344499",
      "microsoft-patch-tuesday-addresses-actively-exploited-outlook"
    ]
  },
  {
    "slug": "rhsa-2026-98588-moderate-openssl-security-bug-fix-00a2dfee",
    "title": "RHSA-2026:98588: Moderate: openssl security, bug fix, and enhancement update",
    "summary": "An update for openssl is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98588",
    "publishedAt": "2026-11-11T11:23:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98588-moderate-openssl-security-bug-fix",
      "article-00a2dfee",
      "00a2dfee",
      "rhsa-2026-98588-moderate-openssl-security-bug-fix-37d6e4",
      "rhsa-2026-98588-moderate-openssl-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "rhsa-2026-98586-important-networkmanager-security-54b55bf3",
    "title": "RHSA-2026:98586: Important: NetworkManager security update",
    "summary": "An update for NetworkManager is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98586",
    "publishedAt": "2026-11-11T11:23:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98586-important-networkmanager-security",
      "article-54b55bf3",
      "54b55bf3",
      "rhsa-2026-98586-important-networkmanager-security-37d6e4",
      "rhsa-2026-98586-important-networkmanager-security-update"
    ]
  },
  {
    "slug": "multiple-windows-remote-desktop-flaws-allow-attack-59540717",
    "title": "Multiple Windows Remote Desktop Flaws Allow Attackers to Execute Code Over Network",
    "summary": "Microsoft has released security updates for four Windows Remote Desktop Client vulnerabilities that could allow attackers to run code through network connections or local access. Published on November 10, 2026, the flaws involve memory handling errors and a race condition.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/multiple-windows-remote-desktop-vulnerabilities/",
    "publishedAt": "2026-11-11T11:22:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "multiple-windows-remote-desktop-flaws-allow-attack",
      "article-59540717",
      "59540717",
      "multiple-windows-remote-desktop-flaws-allow-attack-653499",
      "multiple-windows-remote-desktop-flaws-allow-attackers-to-exe"
    ]
  },
  {
    "slug": "microsoft-resolves-usb-audio-issues-from-september-f7c039c5",
    "title": "Microsoft Resolves USB Audio Issues from September Updates",
    "summary": "Microsoft addressed USB audio problems affecting Windows users who installed September security updates. The issue stemmed from a driver patch that caused device enumeration failures, disrupting sound output for affected systems; no exploitation was reported. The November 2026 cumulative update restores driver behavior, and users are advised to install the latest package to eliminate the audio malfunction.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-fixes-usb-audio-issues-caused-by-september-security-updates/",
    "publishedAt": "2026-11-11T11:18:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-resolves-usb-audio-issues-from-september",
      "article-f7c039c5",
      "f7c039c5",
      "microsoft-resolves-usb-audio-issues-from-september-7d9763",
      "microsoft-resolves-usb-audio-issues-from-september-updates"
    ]
  },
  {
    "slug": "microsoft-researchers-demonstrate-hidden-backdoor-7a159787",
    "title": "Microsoft researchers demonstrate hidden backdoor technique for AI agents",
    "summary": "Microsoft researchers have demonstrated how small changes to an AI model can implant a hidden backdoor, causing an agent to execute an attacker’s command when a specific trigger appears. The technique, called Lazarus, requires no model retraining and allows the agent to behave normally during standard safety evaluations.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/microsoft-hidden-ai-backdoors-lazarus/",
    "publishedAt": "2026-11-11T10:55:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-researchers-demonstrate-hidden-backdoor",
      "article-7a159787",
      "7a159787",
      "microsoft-researchers-demonstrate-hidden-backdoor-39d37f",
      "microsoft-researchers-demonstrate-hidden-backdoor-technique-"
    ]
  },
  {
    "slug": "usn-9041-1-uutils-coreutils-vulnerabilities-8f597bd7",
    "title": "USN-9041-1: uutils coreutils vulnerabilities",
    "summary": "A local attacker could possibly use this issue to obtain sensitive information or modify file permissions unexpectedly. (CVE-2026-35341) It was discovered that uutils coreutils dd incorrectly suppressed errors during file truncation operations. A local attacker could possibly use this issue to cause silent data corruption. (CVE-2026-35344) It was discovered that uutils coreutils tail incorrectly followed symbolic links when using the --follow=name option.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9041-1",
    "publishedAt": "2026-11-11T10:45:28.000Z",
    "cves": [
      "CVE-2026-35341",
      "CVE-2026-35344"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9041-1-uutils-coreutils-vulnerabilities",
      "article-8f597bd7",
      "8f597bd7",
      "usn-9041-1-uutils-coreutils-vulnerabilities-7e87e6"
    ]
  },
  {
    "slug": "hackers-exploit-ahsaycbs-vulnerabilities-to-hide-m-23540e14",
    "title": "Hackers Exploit AhsayCBS Vulnerabilities to Hide Malware in PNG Images and Deploy Stealthy Backdoors",
    "summary": "Hackers exploiting AhsayCBS backup servers have planted webshells, hidden encrypted code inside PNG images, and staged a Python implant designed to run only on its intended host. The findings show an intrusion that extended beyond cryptocurrency mining, giving attackers several ways to keep access to systems responsible for protecting an organization’s backups.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-exploit-ahsaycbs-vulnerabilities/",
    "publishedAt": "2026-11-11T10:44:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-ahsaycbs-vulnerabilities-to-hide-m",
      "article-23540e14",
      "23540e14",
      "hackers-exploit-ahsaycbs-vulnerabilities-to-hide-m-4181d5",
      "hackers-exploit-ahsaycbs-vulnerabilities-to-hide-malware-in-"
    ]
  },
  {
    "slug": "ubuntu-kernel-cve-2023-20585-rmp-check-flaw-237c9f08",
    "title": "Ubuntu Kernel CVE-2023-20585 RMP Check Flaw",
    "summary": "Ubuntu Security Notice USN-9043-1 reports CVE-2023-20585, a kernel flaw in AMD processors' IOMMU reverse map table checks. The flaw permits a local hypervisor attacker to trigger an out-of-bounds condition, potentially compromising SEV‑SNP guest memory integrity. Ubuntu patches the RMP check flaw across multiple architectures; administrators should update to the latest kernel to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9043-1",
    "publishedAt": "2026-11-11T10:40:18.000Z",
    "cves": [
      "CVE-2023-20585"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-kernel-cve-2023-20585-rmp-check-flaw",
      "article-237c9f08",
      "237c9f08",
      "ubuntu-kernel-cve-2023-20585-rmp-check-flaw-7e87de"
    ]
  },
  {
    "slug": "ubuntu-kernel-patch-addresses-nvidia-ipv4-vulnerab-01ff1b3e",
    "title": "Ubuntu Kernel Patch Addresses NVIDIA IPv4 Vulnerability",
    "summary": "A Linux kernel flaw (CVE-2023-20585) in NVIDIA drivers could let attackers compromise systems via the IPv4 networking subsystem. The flaw arises from improper packet header handling, potentially enabling privilege escalation and unauthorized code execution, though no active exploitation has been seen. Ubuntu released kernel updates that patch the affected subsystems; applying the latest update mitigates the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9045-1",
    "publishedAt": "2026-11-11T10:40:10.000Z",
    "cves": [
      "CVE-2023-20585"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-kernel-patch-addresses-nvidia-ipv4-vulnerab",
      "article-01ff1b3e",
      "01ff1b3e",
      "ubuntu-kernel-patch-addresses-nvidia-ipv4-vulnerab-7e87d7",
      "ubuntu-kernel-patch-addresses-nvidia-ipv4-vulnerability"
    ]
  },
  {
    "slug": "linux-kernel-nvidia-baseos-vulnerabilities-fixed-eaf9f20c",
    "title": "Linux Kernel NVIDIA BaseOS Vulnerabilities Fixed",
    "summary": "An attacker could exploit kernel flaws in NVIDIA BaseOS network drivers and IPv4 networking to compromise affected systems. The vulnerabilities, identified as CVE-2026-98239 and CVE-2026-98432, allow remote code execution through malformed network packets, posing an exploitation risk. Ubuntu has released a kernel patch that corrects the driver and IPv4 subsystems; apply the update immediately to mitigate the threat.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9044-1",
    "publishedAt": "2026-11-11T10:40:04.000Z",
    "cves": [
      "CVE-2026-98239",
      "CVE-2026-98432"
    ],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-nvidia-baseos-vulnerabilities-fixed",
      "article-eaf9f20c",
      "eaf9f20c",
      "linux-kernel-nvidia-baseos-vulnerabilities-fixed-7e87db"
    ]
  },
  {
    "slug": "cisco-and-openwave-vulnerabilities-identified-patc-c72f7cab",
    "title": "Cisco and Openwave Vulnerabilities Identified, Patch Urgently Needed",
    "summary": "Cisco and Openwave systems are affected by a critical flaw identified as CVE-2026-20320. The vulnerability permits remote code execution via malformed network packets, with a public PoC demonstrating exploitation; the flaw could allow attackers to gain system-level access on affected devices. Administrators should apply the vendor-supplied patch immediately and enable the provided detection rules to monitor for exploitation attempts.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cisco-broadworks-and-openwave-flaws-actively-exploited",
    "publishedAt": "2026-11-11T10:39:53.000Z",
    "cves": [
      "CVE-2026-20320"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-and-openwave-vulnerabilities-identified-patc",
      "article-c72f7cab",
      "c72f7cab",
      "cisco-and-openwave-vulnerabilities-identified-patc-118999",
      "cisco-and-openwave-vulnerabilities-identified-patch-urgently"
    ]
  },
  {
    "slug": "clickfix-attacks-evolve-to-hide-malware-in-png-ima-5a872db2",
    "title": "ClickFix Attacks Evolve to Hide Malware in PNG Images and Hijack Windows Domain Controllers",
    "summary": "ClickFix attacks are moving beyond simple malware downloads, with recent investigations revealing executable payloads hidden inside PNG images and intrusions reaching Windows domain controllers. The activity shows how a fake verification prompt can become the starting point for persistent access, credential theft, and movement across corporate networks.",
    "category": "General",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/clickfix-attacks-evolve/",
    "publishedAt": "2026-11-11T10:32:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "clickfix-attacks-evolve-to-hide-malware-in-png-ima",
      "article-5a872db2",
      "5a872db2",
      "clickfix-attacks-evolve-to-hide-malware-in-png-ima-b21c77",
      "clickfix-attacks-evolve-to-hide-malware-in-png-images-and-hi"
    ]
  },
  {
    "slug": "cisa-flags-cisco-broadworks-flaw-as-actively-explo-f54e59e8",
    "title": "CISA flags Cisco BroadWorks flaw as actively exploited in attacks",
    "summary": "The US Cybersecurity and Infrastructure Security Agency (CISA) warned on Tuesday that hackers are now exploiting a high-severity Cisco BroadWorks vulnerability in attacks. The vulnerability is tracked as CVE-2026-20320.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/cisa-flags-cisco-broadworks-flaw-as-actively-exploited-in-attacks/",
    "publishedAt": "2026-11-11T10:12:08.000Z",
    "cves": [
      "CVE-2026-20320"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-flags-cisco-broadworks-flaw-as-actively-explo",
      "article-f54e59e8",
      "f54e59e8",
      "cisa-flags-cisco-broadworks-flaw-as-actively-explo-33ad49",
      "cisa-flags-cisco-broadworks-flaw-as-actively-exploited-in-at"
    ]
  },
  {
    "slug": "ubuntu-adds-revocation-checks-to-curl-f1f7af73",
    "title": "Ubuntu Adds Revocation Checks to Curl",
    "summary": "Ubuntu 26.10 adds certificate revocation checking to curl, preventing connections to revoked certificates. Earlier releases, such as 26.04, accepted revoked certificates because curl lacked revocation validation, exposing users to man‑in‑the‑middle attacks; OpenSSL also omits revocation checks by default. Upgrade to Ubuntu 26.10 or later to enforce revocation checks, and enable OCSP or CRL verification in OpenSSL for added protection.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/ubuntu-certificate-revocation-curl-openssl/",
    "publishedAt": "2026-11-11T09:46:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-adds-revocation-checks-to-curl",
      "article-f1f7af73",
      "f1f7af73",
      "ubuntu-adds-revocation-checks-to-curl-621c96"
    ]
  },
  {
    "slug": "grafana-update-released-for-rhel9-d84570bf",
    "title": "Grafana update released for RHEL9",
    "summary": "Red Hat released a security update for Grafana on RHEL 9, addressing vulnerabilities that could enable unauthorized access or data leakage. The update patches each flaw, with CVSS scores available via CVE references, though no specific CVE IDs are listed. Apply the update through RHEL 9 package manager to eliminate the risks and maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98541",
    "publishedAt": "2026-11-11T09:31:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "grafana-update-released-for-rhel9",
      "article-d84570bf",
      "d84570bf",
      "grafana-update-released-for-rhel9-37d6e5"
    ]
  },
  {
    "slug": "china-linked-hackers-use-fake-chrome-certificate-w-a3941e63",
    "title": "China-Linked Hackers Use Fake Chrome Certificate Warnings to Infect Victims With Sparrow Backdoor",
    "summary": "China-linked hackers are turning trusted websites into malware delivery points by displaying fake Google Chrome certificate warnings. The pages urge selected visitors to install a certificate repair utility, but the download instead installs a backdoor that gives attackers remote access to Windows computers.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/fake-chrome-certificate/",
    "publishedAt": "2026-11-11T09:24:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "china-linked-hackers-use-fake-chrome-certificate-w",
      "article-a3941e63",
      "a3941e63",
      "china-linked-hackers-use-fake-chrome-certificate-w-5dee11",
      "china-linked-hackers-use-fake-chrome-certificate-warnings-to"
    ]
  },
  {
    "slug": "xwayland-update-released-for-rhel-9-4-a0a12207",
    "title": "Xwayland update released for RHEL 9.4",
    "summary": "Red Hat issued a security update for xorg‑x11‑server‑Xwayland on RHEL 9.4, targeting vulnerabilities that could allow unauthorized access or data exposure. The advisory notes an Important impact rating and references CVSS scores for each flaw, but no CVE identifiers are disclosed. Security teams should apply the update via RHEL 9.4 package manager to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98547",
    "publishedAt": "2026-11-11T09:19:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xwayland-update-released-for-rhel-9-4",
      "article-a0a12207",
      "a0a12207",
      "xwayland-update-released-for-rhel-9-4-37d6e5"
    ]
  },
  {
    "slug": "rhsa-2026-98549-important-xorg-x11-server-xwayland-7ddcf94b",
    "title": "RHSA-2026:98549: Important: xorg-x11-server-Xwayland security update",
    "summary": "An update for xorg-x11-server-Xwayland is now available for Red Hat Enterprise Linux 9.2 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98549",
    "publishedAt": "2026-11-11T09:16:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98549-important-xorg-x11-server-xwayland",
      "article-7ddcf94b",
      "7ddcf94b",
      "rhsa-2026-98549-important-xorg-x11-server-xwayland-37d6e5",
      "rhsa-2026-98549-important-xorg-x11-server-xwayland-security-"
    ]
  },
  {
    "slug": "rhsa-2026-98546-important-xorg-x11-server-xwayland-57ae424b",
    "title": "RHSA-2026:98546: Important: xorg-x11-server-Xwayland security update",
    "summary": "An update for xorg-x11-server-Xwayland is now available for Red Hat Enterprise Linux 10.0 Extended Update Support. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98546",
    "publishedAt": "2026-11-11T09:10:49.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98546-important-xorg-x11-server-xwayland",
      "article-57ae424b",
      "57ae424b",
      "rhsa-2026-98546-important-xorg-x11-server-xwayland-37d6e5",
      "rhsa-2026-98546-important-xorg-x11-server-xwayland-security-"
    ]
  },
  {
    "slug": "microsoft-resolves-exchange-sign-in-issues-from-se-ee739ef0",
    "title": "Microsoft Resolves Exchange Sign‑In Issues from Server Updates",
    "summary": "Microsoft fixed Outlook sign‑in and mail delivery issues on Exchange Server caused by October 2026 Windows Server updates. The updates disrupted authentication flows, leading to failed logins and delayed message routing; no data exfiltration was reported. The problem is resolved in the latest cumulative update; administrators should apply the patch to restore normal Exchange operation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-fixes-exchange-sign-ins-broken-by-october-windows-server-updates/",
    "publishedAt": "2026-11-11T09:07:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-resolves-exchange-sign-in-issues-from-se",
      "article-ee739ef0",
      "ee739ef0",
      "microsoft-resolves-exchange-sign-in-issues-from-se-29bbc1",
      "microsoft-resolves-exchange-sign-in-issues-from-server-updat"
    ]
  },
  {
    "slug": "openwave-broadworks-vulnerabilities-exploited-for-4e1d2283",
    "title": "Openwave, BroadWorks vulnerabilities exploited for data leakage",
    "summary": "Threat actors exploited CVE-2026-111793 in Openwave and CVE-2026-20320 in Cisco BroadWorks, enabling leakage of sensitive configuration data. Both flaws allow unauthorized disclosure of configuration information without authentication, and public proof‑of‑concept exploits have been released. Affected systems should apply vendor patches or configuration hardening to prevent further data exposure immediately.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/threat-actors-exploit-openwave-cisco-broadworks-vulnerabilities/",
    "publishedAt": "2026-11-11T09:01:07.000Z",
    "cves": [
      "CVE-2026-111793",
      "CVE-2026-20320"
    ],
    "additionalSources": [],
    "aliases": [
      "openwave-broadworks-vulnerabilities-exploited-for",
      "article-4e1d2283",
      "4e1d2283",
      "openwave-broadworks-vulnerabilities-exploited-for-137af6",
      "openwave-broadworks-vulnerabilities-exploited-for-data-leaka"
    ]
  },
  {
    "slug": "intel-amd-patch-over-200-vulnerabilities-720d0e7b",
    "title": "Intel, AMD patch over 200 vulnerabilities",
    "summary": "Intel and AMD released over 200 patches on Patch Tuesday, addressing critical flaws in Intel TDX software and numerous AMD graphics bugs. The advisory lists multiple CVE identifiers and CVSS scores, indicating a range of severity levels across the affected components. Security teams should apply the vendor patches via their package managers or firmware updates to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/chipmaker-patch-tuesday-over-200-vulnerabilities-addressed-by-intel-amd/",
    "publishedAt": "2026-11-11T08:42:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "intel-amd-patch-over-200-vulnerabilities",
      "article-720d0e7b",
      "720d0e7b",
      "intel-amd-patch-over-200-vulnerabilities-2be1ef"
    ]
  },
  {
    "slug": "openssh-update-addresses-moderate-security-issues-9c2d9183",
    "title": "OpenSSH Update Addresses Moderate Security Issues",
    "summary": "Red Hat released an OpenSSH update for RHEL 10 to address moderate‑severity vulnerabilities affecting the SSH daemon. The advisory cites multiple CVE references with CVSS base scores, but no active exploitation has been observed. Users should install the latest OpenSSH package to ensure protection against the identified weaknesses in all deployments.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98073",
    "publishedAt": "2026-11-11T08:38:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openssh-update-addresses-moderate-security-issues",
      "article-9c2d9183",
      "9c2d9183",
      "openssh-update-addresses-moderate-security-issues-37d6f7"
    ]
  },
  {
    "slug": "sos-update-fixes-important-security-bugs-00038762",
    "title": "SOS Update Fixes Important Security Bugs",
    "summary": "Red Hat issued a security update for the sos utility on RHEL 10, addressing important bugs that could affect system diagnostics. The advisory references multiple CVE entries with CVSS base scores, indicating a high impact on system stability. Administrators should apply the sos patch promptly to prevent potential denial of service or data corruption during troubleshooting.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98076",
    "publishedAt": "2026-11-11T08:36:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sos-update-fixes-important-security-bugs",
      "article-00038762",
      "00038762",
      "sos-update-fixes-important-security-bugs-37d6f7"
    ]
  },
  {
    "slug": "kernel-rmp-check-flaw-enables-hypervisor-out-of-bo-00953341",
    "title": "Kernel RMP Check Flaw Enables Hypervisor Out-of-Bounds",
    "summary": "A kernel flaw in IOMMU RMP checks allows a local hypervisor attacker to trigger an out‑of‑bounds condition and corrupt SEV‑SNP guest memory. The vulnerability, identified as CVE‑2023‑20585, could enable privilege escalation within virtualized environments, potentially compromising guest isolation. Red Hat released a kernel patch that restores RMP validation and addresses affected subsystems, and users should apply the update immediately.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9040-1",
    "publishedAt": "2026-11-11T08:27:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kernel-rmp-check-flaw-enables-hypervisor-out-of-bo",
      "article-00953341",
      "00953341",
      "kernel-rmp-check-flaw-enables-hypervisor-out-of-bo-7e87ea",
      "kernel-rmp-check-flaw-enables-hypervisor-out-of-bounds"
    ]
  },
  {
    "slug": "microsoft-releases-patch-for-outlook-bug-exposing-46d41d1b",
    "title": "Microsoft Releases Patch for Outlook Bug Exposing NTLMv2 Hashes",
    "summary": "Microsoft released a cumulative update fixing 1,259 flaws, including CVE-2026-124194, an Outlook bug that attackers exploited to exfiltrate NTLMv2 hashes. The flaw permits unauthenticated memory corruption that leaks credential material, enabling credential dumping and lateral movement. Apply the latest cumulative update immediately; no workaround exists, and teams should monitor authentication logs for anomalous NTLM traffic.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/microsoft-patches-1259-flaws-including.html",
    "publishedAt": "2026-11-11T08:17:53.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-releases-patch-for-outlook-bug-exposing",
      "article-46d41d1b",
      "46d41d1b",
      "microsoft-releases-patch-for-outlook-bug-exposing-49dc30",
      "microsoft-releases-patch-for-outlook-bug-exposing-ntlmv2-has"
    ]
  },
  {
    "slug": "kernel-vulnerabilities-affect-azure-cvm-systems-7c85010a",
    "title": "Kernel Vulnerabilities Affect Azure CVM Systems",
    "summary": "Multiple kernel subsystems in Azure CVM instances contain vulnerabilities that could allow a local attacker to compromise system integrity. The flaws affect USB gadget drivers, memory management, networking core, and various architecture modules, but no public exploit has been reported. Red Hat has issued a kernel update that corrects these issues; administrators should apply the patch to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9039-1",
    "publishedAt": "2026-11-11T08:12:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "kernel-vulnerabilities-affect-azure-cvm-systems",
      "article-7c85010a",
      "7c85010a",
      "kernel-vulnerabilities-affect-azure-cvm-systems-7e883c"
    ]
  },
  {
    "slug": "barracuda-vulnerabilities-exploited-for-root-acces-9695b19a",
    "title": "Barracuda Vulnerabilities Exploited for Root Access",
    "summary": "Barracuda devices were hit by recently patched flaws, including CVE-2026-124194, that attackers exploited to bypass authorization and gain root access. The flaw permits unauthenticated users to trigger a buffer overflow in the management interface, enabling privileged command execution and full system compromise. Barracuda recommends applying the latest firmware patch immediately; no workaround exists, and administrators should limit management interface exposure.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/recently-patched-barracuda-vulnerabilities-exploited-in-attacks/",
    "publishedAt": "2026-11-11T07:53:51.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "barracuda-vulnerabilities-exploited-for-root-acces",
      "article-9695b19a",
      "9695b19a",
      "barracuda-vulnerabilities-exploited-for-root-acces-395bcd",
      "barracuda-vulnerabilities-exploited-for-root-access"
    ]
  },
  {
    "slug": "railway-breach-causes-740-000-unauthorized-ai-usag-bbd595a0",
    "title": "Railway Breach Causes $740,000 Unauthorized AI Usage",
    "summary": "Railway disclosed that customer AI keys stored on its platform were stolen in an October breach. The stolen keys enabled an estimated $740,000 in unauthorized AI usage charges, which Railway pledged to cover. Railway urges customers to rotate API keys and monitor usage logs, while investigating the breach and seeking refunds from AI vendors.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/railway-says-stolen-customer-ai-keys.html",
    "publishedAt": "2026-11-11T07:49:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "railway-breach-causes-740-000-unauthorized-ai-usag",
      "article-bbd595a0",
      "bbd595a0",
      "railway-breach-causes-740-000-unauthorized-ai-usag-728c42",
      "railway-breach-causes-740-000-unauthorized-ai-usage"
    ]
  },
  {
    "slug": "top-10-security-ratings-services-ranked-2026-fe367a4f",
    "title": "Top 10 Security Ratings Services Ranked 2026",
    "summary": "The piece ranks the top ten security ratings services for 2026, assessing exposure, patch cadence, breach signals, and overall posture. Ratings now influence insurance premiums, vendor access, and board decisions, with NormShield and RiskRecon highlighted as key players. Stakeholders should examine rating criteria and align their security posture with the metrics used by these services.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/best-security-ratings-services/",
    "publishedAt": "2026-11-11T07:33:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "top-10-security-ratings-services-ranked-2026",
      "article-fe367a4f",
      "fe367a4f",
      "top-10-security-ratings-services-ranked-2026-4d3642"
    ]
  },
  {
    "slug": "microsoft-patches-ad-rce-vulnerability-cve-2026-11-ec018025",
    "title": "Microsoft Patches AD RCE Vulnerability CVE-2026-119948",
    "summary": "A Windows Active Directory flaw (CVE-2026-119948) lets an authorized attacker run code over a network. The vulnerability, rated Important with a CVSS 3.1 score of 7.5, exploits improper input handling in AD replication. Microsoft issued security updates on November 10, 2026; administrators should apply them immediately to secure domain controllers.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/windows-active-directory-rce-vulnerability/",
    "publishedAt": "2026-11-11T07:21:28.000Z",
    "cves": [
      "CVE-2026-119948"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-patches-ad-rce-vulnerability-cve-2026-11",
      "article-ec018025",
      "ec018025",
      "microsoft-patches-ad-rce-vulnerability-cve-2026-11-7e1a09",
      "microsoft-patches-ad-rce-vulnerability-cve-2026-119948"
    ]
  },
  {
    "slug": "microsoft-researchers-show-ai-agents-can-be-backdo-7321c187",
    "title": "Microsoft Researchers Show AI Agents Can Be Backdoored by Editing Fewer Than 10 Neurons",
    "summary": "An AI model can be given a hidden backdoor by editing fewer than 10 of its rarely used neurons, without retraining the model, Microsoft researchers have shown. When a chosen trigger appears, the model outputs an attacker's command, which an agent using that model would run with the agent's own permissions.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/microsoft-researchers-show-ai-agents.html",
    "publishedAt": "2026-11-11T07:21:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-researchers-show-ai-agents-can-be-backdo",
      "article-7321c187",
      "7321c187",
      "microsoft-researchers-show-ai-agents-can-be-backdo-13e3b4",
      "microsoft-researchers-show-ai-agents-can-be-backdoored-by-ed"
    ]
  },
  {
    "slug": "fortinet-forticlient-rce-via-fortipam-exploit-cve-dec52944",
    "title": "Fortinet FortiClient RCE via FortiPAM Exploit CVE-2026-121529",
    "summary": "A FortiClient flaw (CVE-2026-121529) allows a remote attacker to execute code when a user visits a malicious website. The vulnerability, rated Critical with a CVSS 9.1 score, exploits improper handling of embedded scripts in FortiPAM-enabled sessions. Fortinet released a patch on November 10, 2026; users should update FortiClient immediately to prevent exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/fortinet2shell-vulnerability/",
    "publishedAt": "2026-11-11T07:05:55.000Z",
    "cves": [
      "CVE-2026-121529"
    ],
    "additionalSources": [],
    "aliases": [
      "fortinet-forticlient-rce-via-fortipam-exploit-cve",
      "article-dec52944",
      "dec52944",
      "fortinet-forticlient-rce-via-fortipam-exploit-cve-6eb845",
      "fortinet-forticlient-rce-via-fortipam-exploit-cve-2026-12152"
    ]
  },
  {
    "slug": "eu-cyber-resilience-act-reporting-obligations-expl-974bcf91",
    "title": "EU Cyber Resilience Act Reporting Obligations Explained",
    "summary": "The EU Cyber Resilience Act requires manufacturers to register every product version still in use. Effective September 2026, the regulation defines when a company learns of an exploited flaw and urges CISOs to query suppliers on vulnerability handling and CE marking. Manufacturers must keep product registers current and provide clear vulnerability disclosure timelines to meet reporting duties.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/aurimas-bakas-copla-cra-vulnerability-reporting/",
    "publishedAt": "2026-11-11T07:00:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "eu-cyber-resilience-act-reporting-obligations-expl",
      "article-974bcf91",
      "974bcf91",
      "eu-cyber-resilience-act-reporting-obligations-expl-299b7a",
      "eu-cyber-resilience-act-reporting-obligations-explained"
    ]
  },
  {
    "slug": "apple-fixes-bluetooth-airplay-pairing-flaws-28a73ab6",
    "title": "Apple Fixes Bluetooth, AirPlay Pairing Flaws",
    "summary": "Apple patched Bluetooth and AirPlay pairing flaws, iMessage vulnerabilities, and an exploited Brotli bug across its platforms. The vulnerabilities allowed unauthorized pairing and message tampering, potentially enabling data exfiltration or denial of service on affected devices. Apple released security updates for macOS, iOS, iPadOS, and tvOS; users should install the latest patches to mitigate the risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/bluetooth-airplay-pairing-vulnerabilities-patched-across-apple-platforms/",
    "publishedAt": "2026-11-11T07:00:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-fixes-bluetooth-airplay-pairing-flaws",
      "article-28a73ab6",
      "28a73ab6",
      "apple-fixes-bluetooth-airplay-pairing-flaws-7d6b0c"
    ]
  },
  {
    "slug": "red-hat-issues-gcc-update-for-moderate-security-is-fd907fcf",
    "title": "Red Hat Issues GCC Update for Moderate Security Issue",
    "summary": "Red Hat released a GCC update for RHEL 8 to fix a moderate‑severity security issue. The advisory indicates a Moderate impact, with CVSS scores linked to CVE references, suggesting a medium‑severity flaw affecting compiler integrity. Apply the update immediately and confirm GCC version compliance in RHEL 8 to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98115",
    "publishedAt": "2026-11-11T06:34:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-gcc-update-for-moderate-security-is",
      "article-fd907fcf",
      "fd907fcf",
      "red-hat-issues-gcc-update-for-moderate-security-is-37d6f4",
      "red-hat-issues-gcc-update-for-moderate-security-issue"
    ]
  },
  {
    "slug": "red-hat-issues-qt5-qtbase-security-update-57b47645",
    "title": "Red Hat Issues Qt5‑Qtbase Security Update",
    "summary": "Red Hat released a security update for qt5‑qtbase on RHEL 8, addressing vulnerabilities that could allow local privilege escalation or code execution. The update lists multiple CVE identifiers with CVSS scores indicating moderate to high severity, yet no active exploitation reports exist. Red Hat recommends applying the update immediately via the standard RHEL update channels.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98103",
    "publishedAt": "2026-11-11T06:17:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-qt5-qtbase-security-update",
      "article-57b47645",
      "57b47645",
      "red-hat-issues-qt5-qtbase-security-update-37d6f4"
    ]
  },
  {
    "slug": "cisco-broadworks-openwave-flaws-actively-exploited-3c0cd8b8",
    "title": "Cisco BroadWorks, Openwave Flaws Actively Exploited",
    "summary": "CISA identified active exploitation of two vulnerabilities in Cisco BroadWorks and Openwave Messaging Webtop Media Transcoder. The flaws, including CVE-2026-20320, stem from an improper restriction of XML external entities, scoring CVSS 7.5 and enabling remote code execution without authentication. Both vendors have released patches; security teams must apply them immediately and monitor for exploitation indicators.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/cisco-broadworks-and-openwave-flaws.html",
    "publishedAt": "2026-11-11T06:04:02.000Z",
    "cves": [
      "CVE-2026-20320"
    ],
    "additionalSources": [],
    "aliases": [
      "cisco-broadworks-openwave-flaws-actively-exploited",
      "article-3c0cd8b8",
      "3c0cd8b8",
      "cisco-broadworks-openwave-flaws-actively-exploited-15abd9"
    ]
  },
  {
    "slug": "eu-cyber-scores-look-healthy-but-45-of-surveyed-it-72c8dbf1",
    "title": "EU cyber scores look healthy, but 45% of surveyed IT providers take months to patch",
    "summary": "Forty-five percent of surveyed IT service management providers in the EU took more than three months to apply critical patches to critical systems, according to ENISA’s 2026 assessment of cybersecurity in the Union. Attackers can turn a newly disclosed flaw into a working attack within days, and sometimes within hours or minutes.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/eu-enisa-cybersecurity-report/",
    "publishedAt": "2026-11-11T06:00:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "eu-cyber-scores-look-healthy-but-45-of-surveyed-it",
      "article-72c8dbf1",
      "72c8dbf1",
      "eu-cyber-scores-look-healthy-but-45-of-surveyed-it-52db95",
      "eu-cyber-scores-look-healthy-but-45-of-surveyed-it-providers"
    ]
  },
  {
    "slug": "meta-fairchem-rce-via-load-inference-model-332180d5",
    "title": "Meta FAIRChem RCE via load_inference_model",
    "summary": "Meta FAIRChem's utils load_inference_model module (CVE-2026-111760) permits remote code execution when deserializing untrusted data. The flaw needs user interaction, such as opening a malicious file, and has a CVSS score of 7.8, indicating high risk. Meta released a patch; administrators should update FAIRChem to the latest version to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-953/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [
      "CVE-2026-111760"
    ],
    "additionalSources": [],
    "aliases": [
      "meta-fairchem-rce-via-load-inference-model",
      "article-332180d5",
      "332180d5",
      "meta-fairchem-rce-via-load-inference-model-6f3d1b"
    ]
  },
  {
    "slug": "meta-fairchem-rce-via-cli-yaml-parsing-ba85bb3d",
    "title": "Meta FAIRChem RCE via _cli YAML Parsing",
    "summary": "Meta FAIRChem's _cli YAML parsing module (CVE-2026-111760) allows remote code execution when deserializing untrusted data. Exploitation requires user interaction, such as opening a malicious file, and the flaw carries a CVSS score of 7.8. Meta has issued a patch; updating FAIRChem to the latest release will address the security vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-952/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [
      "CVE-2026-111760"
    ],
    "additionalSources": [],
    "aliases": [
      "meta-fairchem-rce-via-cli-yaml-parsing",
      "article-ba85bb3d",
      "ba85bb3d",
      "meta-fairchem-rce-via-cli-yaml-parsing-6f3d1a"
    ]
  },
  {
    "slug": "meta-fairchem-rce-via-load-tasks-9513b812",
    "title": "Meta FAIRChem RCE via load_tasks",
    "summary": "Meta FAIRChem's load_tasks module (CVE-2026-111760) permits remote code execution via deserialization of untrusted data. The flaw needs user interaction, such as visiting a malicious page or opening a file, and has a CVSS score of 7.8. Meta released a patch; administrators should update FAIRChem to the latest version to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-951/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [
      "CVE-2026-111760"
    ],
    "additionalSources": [],
    "aliases": [
      "meta-fairchem-rce-via-load-tasks",
      "article-9513b812",
      "9513b812",
      "meta-fairchem-rce-via-load-tasks-6f3d1a"
    ]
  },
  {
    "slug": "zdi-26-950-0day-meta-fairchem-migrate-checkpoint-d-79471196",
    "title": "ZDI-26-950: (0Day) Meta FAIRChem migrate_checkpoint Deserialization of Untrusted Data Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of Meta FAIRChem. User interaction is required to exploit this vulnerability in that the target must visit a malicious page or open a malicious file. The vulnerability is tracked as CVE-2026-111760.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-950/",
    "publishedAt": "2026-11-11T06:00:00.000Z",
    "cves": [
      "CVE-2026-111760"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-950-0day-meta-fairchem-migrate-checkpoint-d",
      "article-79471196",
      "79471196",
      "zdi-26-950-0day-meta-fairchem-migrate-checkpoint-d-6f3d1a",
      "zdi-26-950-0day-meta-fairchem-migrate-checkpoint-deserializa"
    ]
  },
  {
    "slug": "red-hat-issues-rust-rpm-sequoia-security-update-abf31b66",
    "title": "Red Hat Issues rust‑rpm‑sequoia Security Update",
    "summary": "Red Hat released a security update for the rust‑rpm‑sequoia package on RHEL 10.0 EUS, addressing vulnerabilities that could enable local privilege escalation or code execution. The update lists multiple CVE identifiers with CVSS scores indicating moderate to high severity, yet no active exploitation reports exist. Red Hat recommends applying the update immediately via the standard RHEL update channels.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98248",
    "publishedAt": "2026-11-11T05:41:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-rust-rpm-sequoia-security-update",
      "article-abf31b66",
      "abf31b66",
      "red-hat-issues-rust-rpm-sequoia-security-update-37d6f0"
    ]
  },
  {
    "slug": "nearly-half-of-big-firms-shelve-or-close-vulnerabi-c3ace65b",
    "title": "Nearly half of big firms shelve or close vulnerability findings they haven’t confirmed",
    "summary": "Nearly half of security teams at organizations with 5,000 or more employees close or deprioritize vulnerability findings without fully verifying them, ProjectDiscovery found, and the reason they give is time. Among teams that skip full verification, 57% say at least three out of four findings they do check turn out to be real.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/security-teams-vulnerability-backlog/",
    "publishedAt": "2026-11-11T05:30:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nearly-half-of-big-firms-shelve-or-close-vulnerabi",
      "article-c3ace65b",
      "c3ace65b",
      "nearly-half-of-big-firms-shelve-or-close-vulnerabi-7cc6a4",
      "nearly-half-of-big-firms-shelve-or-close-vulnerability-findi"
    ]
  },
  {
    "slug": "an-instagram-ad-was-all-it-took-leaked-exploit-kit-d9919403",
    "title": "An Instagram ad was all it took: Leaked exploit kits are hitting employees’ iPhones",
    "summary": "Criminals are using leaked exploit kits to break into vulnerable iPhones, according to iVerify’s 2026 Advanced Mobile Threat Report. DarkSword chains together several software flaws to compromise iPhones. Researchers disclosed the toolkit in March 2026, and a newer version appeared on GitHub within a week, giving criminal groups code they could adapt.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/11/iverify-iphone-exploit-kit-attacks-report/",
    "publishedAt": "2026-11-11T05:00:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "an-instagram-ad-was-all-it-took-leaked-exploit-kit",
      "article-d9919403",
      "d9919403",
      "an-instagram-ad-was-all-it-took-leaked-exploit-kit-289af2",
      "an-instagram-ad-was-all-it-took-leaked-exploit-kits-are-hitt"
    ]
  },
  {
    "slug": "red-hat-kernel-update-addresses-important-security-7e8e2f18",
    "title": "Red Hat Kernel Update Addresses Important Security Flaw",
    "summary": "Red Hat released a kernel update for RHEL 9.6 Extended Update Support to address a critical security flaw. The advisory rates the impact as Important, with CVSS scores available via CVE links, indicating a high‑severity vulnerability affecting kernel integrity. Security teams should apply the update promptly and verify kernel version compliance.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98239",
    "publishedAt": "2026-11-11T04:47:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-addresses-important-security",
      "article-7e8e2f18",
      "7e8e2f18",
      "red-hat-kernel-update-addresses-important-security-37d6f0",
      "red-hat-kernel-update-addresses-important-security-flaw"
    ]
  },
  {
    "slug": "ghostframe-toolkit-hijacks-vmware-esxi-vms-steals-7f33e363",
    "title": "GhostFrame Toolkit Hijacks VMware ESXi VMs, Steals Credentials",
    "summary": "A new GhostFrame hacking toolkit enables attackers to hijack VMware ESXi servers and the virtual machines they host. The framework, discovered by Recorded Future’s Insikt Group while tracking TAG‑218, can extract Windows passwords, indicating a credential‑stealing capability. Security teams should isolate ESXi hosts, apply vendor patches, and monitor for unauthorized management console access.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ghostframe-malware-hijack-vmware-esxi/",
    "publishedAt": "2026-11-11T04:26:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ghostframe-toolkit-hijacks-vmware-esxi-vms-steals",
      "article-7f33e363",
      "7f33e363",
      "ghostframe-toolkit-hijacks-vmware-esxi-vms-steals-18dc84",
      "ghostframe-toolkit-hijacks-vmware-esxi-vms-steals-credential"
    ]
  },
  {
    "slug": "rhsa-2026-98130-important-httpd-2-4-security-updat-eb88d9df",
    "title": "RHSA-2026:98130: Important: httpd:2.4 security update",
    "summary": "An update for the httpd:2.4 module is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98130",
    "publishedAt": "2026-11-11T03:33:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98130-important-httpd-2-4-security-updat",
      "article-eb88d9df",
      "eb88d9df",
      "rhsa-2026-98130-important-httpd-2-4-security-updat-37d6f4",
      "rhsa-2026-98130-important-httpd-2-4-security-update"
    ]
  },
  {
    "slug": "openshift-4-17-60-releases-security-update-3d6f3f82",
    "title": "OpenShift 4.17.60 Releases Security Update",
    "summary": "Red Hat OpenShift Container Platform 4.17.60 now includes a security update addressing multiple vulnerabilities. The update resolves several bugs and security issues, each with a CVSS score listed in the references, reducing exploitation risk. Administrators should deploy the 4.17.60 release promptly and update all dependent images to maintain platform security.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96281",
    "publishedAt": "2026-11-11T03:24:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openshift-4-17-60-releases-security-update",
      "article-3d6f3f82",
      "3d6f3f82",
      "openshift-4-17-60-releases-security-update-37d7d8"
    ]
  },
  {
    "slug": "wireshark-update-addresses-security-issues-a806c34c",
    "title": "Wireshark Update Addresses Security Issues",
    "summary": "Red Hat Enterprise Linux 9 now receives a Wireshark security update addressing multiple vulnerabilities. The update patches several bugs, each assigned a CVSS score in the references, reducing exploitation risk. Administrators should install the latest Wireshark package immediately and update any dependent services to ensure network traffic analysis remains secure.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97879",
    "publishedAt": "2026-11-11T03:24:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wireshark-update-addresses-security-issues",
      "article-a806c34c",
      "a806c34c",
      "wireshark-update-addresses-security-issues-37d74d"
    ]
  },
  {
    "slug": "rhsa-2026-98099-important-kernel-security-update-d3e73b1f",
    "title": "RHSA-2026:98099: Important: kernel security update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98099",
    "publishedAt": "2026-11-11T03:22:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98099-important-kernel-security-update",
      "article-d3e73b1f",
      "d3e73b1f",
      "rhsa-2026-98099-important-kernel-security-update-37d6f7"
    ]
  },
  {
    "slug": "red-enterprise-linux-9-6-users-receive-python-torn-af547853",
    "title": "Red Enterprise Linux 9.6 users receive python-tornado patch",
    "summary": "Red Enterprise Linux 9.6 users face a python‑tornado vulnerability that could allow local privilege escalation via malformed input. Red Hat Product Security rates the issue as Important, with a CVSS base score available via CVE links. Affected systems should apply the python‑tornado update immediately; no workaround is currently recommended today.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98110",
    "publishedAt": "2026-11-11T03:18:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-enterprise-linux-9-6-users-receive-python-torn",
      "article-af547853",
      "af547853",
      "red-enterprise-linux-9-6-users-receive-python-torn-37d6f4",
      "red-enterprise-linux-9-6-users-receive-python-tornado-patch"
    ]
  },
  {
    "slug": "critical-fortinet-flaws-expose-fortimanager-and-fo-5469e6d8",
    "title": "Critical Fortinet Flaws Expose FortiManager and FortiAnalyzer to Remote Code Execution Without Login",
    "summary": "Fortinet has disclosed critical security flaws affecting FortiManager, FortiAnalyzer, and FortiOS, including weaknesses that could let attackers execute code without logging in. Published on November 10, 2026, the disclosures cover management APIs, device communication services, routing, and specific high availability setups.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-fortinet-flaws-patched/",
    "publishedAt": "2026-11-11T03:15:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "critical-fortinet-flaws-expose-fortimanager-and-fo",
      "article-5469e6d8",
      "5469e6d8",
      "critical-fortinet-flaws-expose-fortimanager-and-fo-35c691",
      "critical-fortinet-flaws-expose-fortimanager-and-fortianalyze"
    ]
  },
  {
    "slug": "red-enterprise-linux-7-users-receive-acl-security-532fc7b9",
    "title": "Red Enterprise Linux 7 users receive acl security patch",
    "summary": "Red Enterprise Linux 7 Extended Lifecycle Support users face a vulnerability in the acl package that could allow local privilege escalation via malformed ACL entries. Red Hat Product Security rates the issue as Important, with a CVSS base score available through CVE links in the advisory references.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98129",
    "publishedAt": "2026-11-11T03:10:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-enterprise-linux-7-users-receive-acl-security",
      "article-532fc7b9",
      "532fc7b9",
      "red-enterprise-linux-7-users-receive-acl-security-37d6f4",
      "red-enterprise-linux-7-users-receive-acl-security-patch"
    ]
  },
  {
    "slug": "rhsa-2026-98107-important-python-tornado-security-6a82b776",
    "title": "RHSA-2026:98107: Important: python-tornado security update",
    "summary": "An update for python-tornado is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98107",
    "publishedAt": "2026-11-11T02:58:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98107-important-python-tornado-security",
      "article-6a82b776",
      "6a82b776",
      "rhsa-2026-98107-important-python-tornado-security-37d6f4",
      "rhsa-2026-98107-important-python-tornado-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-98109-critical-python-pillow-security-up-852ee003",
    "title": "RHSA-2026:98109: Critical: python-pillow security update",
    "summary": "An update for python-pillow is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Critical.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98109",
    "publishedAt": "2026-11-11T02:35:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98109-critical-python-pillow-security-up",
      "article-852ee003",
      "852ee003",
      "rhsa-2026-98109-critical-python-pillow-security-up-37d6f4",
      "rhsa-2026-98109-critical-python-pillow-security-update"
    ]
  },
  {
    "slug": "microsoft-confirms-hackers-are-exploiting-outlook-0e1a2292",
    "title": "Microsoft Confirms Hackers Are Exploiting Outlook 0-Day to Steal Windows Authentication Hashes",
    "summary": "Microsoft has confirmed that hackers are exploiting an Outlook zero-day that can expose Windows authentication information when a user opens a malicious file. Tracked as CVE-2026-124194, the spoofing vulnerability was patched on November 10, 2026. Microsoft marks it “Exploitation Detected” and says it was not publicly disclosed before the update.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/outlook-0-day-vulnerability/",
    "publishedAt": "2026-11-11T02:35:43.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-confirms-hackers-are-exploiting-outlook",
      "article-0e1a2292",
      "0e1a2292",
      "microsoft-confirms-hackers-are-exploiting-outlook-198773",
      "microsoft-confirms-hackers-are-exploiting-outlook-0-day-to-s"
    ]
  },
  {
    "slug": "rhsa-2026-98100-important-kernel-rt-security-updat-ba6c131b",
    "title": "RHSA-2026:98100: Important: kernel-rt security update",
    "summary": "An update for kernel-rt is now available for Red Hat Enterprise Linux 8. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98100",
    "publishedAt": "2026-11-11T02:33:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98100-important-kernel-rt-security-updat",
      "article-ba6c131b",
      "ba6c131b",
      "rhsa-2026-98100-important-kernel-rt-security-updat-37d6f4",
      "rhsa-2026-98100-important-kernel-rt-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-98114-important-kernel-security-update-0a2558a7",
    "title": "RHSA-2026:98114: Important: kernel security update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 6 Extended Lifecycle Support - EXTENSION. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98114",
    "publishedAt": "2026-11-11T01:57:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98114-important-kernel-security-update",
      "article-0a2558a7",
      "0a2558a7",
      "rhsa-2026-98114-important-kernel-security-update-37d6f4"
    ]
  },
  {
    "slug": "rhsa-2026-98121-important-openssl-security-update-f3438212",
    "title": "RHSA-2026:98121: Important: openssl security update",
    "summary": "An update for openssl is now available for Red Hat Enterprise Linux 6 Extended Lifecycle Support - EXTENSION. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98121",
    "publishedAt": "2026-11-11T01:57:04.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98121-important-openssl-security-update",
      "article-f3438212",
      "f3438212",
      "rhsa-2026-98121-important-openssl-security-update-37d6f4"
    ]
  },
  {
    "slug": "rhsa-2026-98111-critical-python-pillow-security-up-cd2b292b",
    "title": "RHSA-2026:98111: Critical: python-pillow security update",
    "summary": "An update for python-pillow is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Critical.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98111",
    "publishedAt": "2026-11-11T01:55:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98111-critical-python-pillow-security-up",
      "article-cd2b292b",
      "cd2b292b",
      "rhsa-2026-98111-critical-python-pillow-security-up-37d6f4",
      "rhsa-2026-98111-critical-python-pillow-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-98118-important-python-oauthlib-security-05791297",
    "title": "RHSA-2026:98118: Important: python-oauthlib security update",
    "summary": "An update for python-oauthlib is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98118",
    "publishedAt": "2026-11-11T01:54:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98118-important-python-oauthlib-security",
      "article-05791297",
      "05791297",
      "rhsa-2026-98118-important-python-oauthlib-security-37d6f4",
      "rhsa-2026-98118-important-python-oauthlib-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-98097-important-python3-12-urllib3-secur-d3eebe11",
    "title": "RHSA-2026:98097: Important: python3.12-urllib3 security update",
    "summary": "An update for python3.12-urllib3 is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98097",
    "publishedAt": "2026-11-11T01:45:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98097-important-python3-12-urllib3-secur",
      "article-d3eebe11",
      "d3eebe11",
      "rhsa-2026-98097-important-python3-12-urllib3-secur-37d6f7",
      "rhsa-2026-98097-important-python3-12-urllib3-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-98116-important-dnsmasq-security-bug-fix-df3ba1ce",
    "title": "RHSA-2026:98116: Important: dnsmasq security, bug fix, and enhancement update",
    "summary": "An update for dnsmasq is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98116",
    "publishedAt": "2026-11-11T01:45:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98116-important-dnsmasq-security-bug-fix",
      "article-df3ba1ce",
      "df3ba1ce",
      "rhsa-2026-98116-important-dnsmasq-security-bug-fix-37d6f4",
      "rhsa-2026-98116-important-dnsmasq-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "rhsa-2026-98112-important-flatpak-security-update-77f2c077",
    "title": "RHSA-2026:98112: Important: flatpak security update",
    "summary": "An update for flatpak is now available for Red Hat Enterprise Linux 8.4 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.4 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98112",
    "publishedAt": "2026-11-11T01:45:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98112-important-flatpak-security-update",
      "article-77f2c077",
      "77f2c077",
      "rhsa-2026-98112-important-flatpak-security-update-37d6f4"
    ]
  },
  {
    "slug": "rhsa-2026-98104-critical-python-tornado-security-u-6191568f",
    "title": "RHSA-2026:98104: Critical: python-tornado security update",
    "summary": "An update for python-tornado is now available for Red Hat Enterprise Linux 7 Extended Lifecycle Support. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98104",
    "publishedAt": "2026-11-11T01:44:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-98104-critical-python-tornado-security-u",
      "article-6191568f",
      "6191568f",
      "rhsa-2026-98104-critical-python-tornado-security-u-37d6f4",
      "rhsa-2026-98104-critical-python-tornado-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-95745-critical-openshift-container-platf-51cfd39e",
    "title": "RHSA-2026:95745: Critical: OpenShift Container Platform 4.13.73 bug fix and security update",
    "summary": "Red Hat OpenShift Container Platform release 4.13.73 is now available with updates to packages and images that fix several bugs and add enhancements. This release includes a security update for Red Hat OpenShift Container Platform 4.13. Red Hat Product Security has rated this update as having a security impact of Critical.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95745",
    "publishedAt": "2026-11-11T01:43:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-95745-critical-openshift-container-platf",
      "article-51cfd39e",
      "51cfd39e",
      "rhsa-2026-95745-critical-openshift-container-platf-37d83a",
      "rhsa-2026-95745-critical-openshift-container-platform-4-13-7"
    ]
  },
  {
    "slug": "microsoft-patch-tuesday-for-november-2026-snort-ru-db9b6612",
    "title": "Microsoft Patch Tuesday for November 2026 — Snort rules and prominent vulnerabilities",
    "summary": "Microsoft has released its monthly security update for November 2026, which includes 1328 vulnerabilities affecting a range of products, including 60 that Microsoft marked as \"critical.\" Out of 60 \"critical\" vulnerabilities, 45 are remote code execution (RCE) vulnerabilities. The vulnerability is tracked as CVE-2026-113971.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cisco Talos",
    "sourceUrl": "https://blog.talosintelligence.com/microsoft-patch-tuesday-for-november-2026/",
    "publishedAt": "2026-11-11T01:41:17.000Z",
    "cves": [
      "CVE-2026-113971"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-patch-tuesday-for-november-2026-snort-ru",
      "article-db9b6612",
      "db9b6612",
      "microsoft-patch-tuesday-for-november-2026-snort-ru-5b5aa2",
      "microsoft-patch-tuesday-for-november-2026-snort-rules-and-pr"
    ]
  },
  {
    "slug": "rhsa-2026-97873-important-kernel-security-bug-fix-13dc64f8",
    "title": "RHSA-2026:97873: Important: kernel security, bug fix, and enhancement update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97873",
    "publishedAt": "2026-11-11T01:27:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97873-important-kernel-security-bug-fix",
      "article-13dc64f8",
      "13dc64f8",
      "rhsa-2026-97873-important-kernel-security-bug-fix-37d74d",
      "rhsa-2026-97873-important-kernel-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "red-hat-updates-python-urllib3-for-enterprise-linu-9ba06051",
    "title": "Red Hat Updates python‑urllib3 for Enterprise Linux",
    "summary": "Red Hat released a security update for python‑urllib3 in its Enterprise Linux 10.0 Extended Update Support, addressing a flaw. The vulnerability, rated Important by Red Hat Product Security, could allow attackers to exploit insecure urllib3 handling, leading to remote code execution. Users should apply the update immediately, verify CVE references for severity, and enforce secure coding practices to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98096",
    "publishedAt": "2026-11-11T01:23:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-updates-python-urllib3-for-enterprise-linu",
      "article-9ba06051",
      "9ba06051",
      "red-hat-updates-python-urllib3-for-enterprise-linu-37d6f7",
      "red-hat-updates-python-urllib3-for-enterprise-linux"
    ]
  },
  {
    "slug": "red-hat-kernel-update-addresses-important-flaws-55412646",
    "title": "Red Hat Kernel Update Addresses Important Flaws",
    "summary": "Red Hat released a kernel update for RHEL 9.4 Update Services for SAP Solutions to address critical security issues. The advisory lists kernel vulnerabilities with CVSS scores; no active exploitation is reported, but flaws could enable local privilege escalation or code execution. Red Hat urges immediate application of the update; CVE references and CVSS details are available for further assessment.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98047",
    "publishedAt": "2026-11-11T00:54:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-kernel-update-addresses-important-flaws",
      "article-55412646",
      "55412646",
      "red-hat-kernel-update-addresses-important-flaws-37d6f7"
    ]
  },
  {
    "slug": "libreswan-update-fixes-security-vulnerabilities-0f3608f7",
    "title": "libreswan Update Fixes Security Vulnerabilities",
    "summary": "Red Hat released a libreswan update addressing multiple security bugs and adding performance enhancements for RHEL 9. The update is rated Important, with CVSS scores available via the referenced CVE links, and fixes memory corruption and privilege escalation issues. Administrators should apply the RHSA-2026:98046 update immediately to maintain system security and compliance.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:98046",
    "publishedAt": "2026-11-11T00:16:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "libreswan-update-fixes-security-vulnerabilities",
      "article-0f3608f7",
      "0f3608f7",
      "libreswan-update-fixes-security-vulnerabilities-37d6f7"
    ]
  },
  {
    "slug": "macos-ai-driven-attack-detection-and-mitigation-71c344c8",
    "title": "macOS AI-Driven Attack Detection and Mitigation",
    "summary": "Security analysts report macOS systems are increasingly targeted by AI‑driven attack campaigns that adapt payloads and evade signatures. These attacks use machine‑learning models to generate polymorphic code, bypassing static analysis and exploiting user interaction vectors, with no CVE disclosed. Apple advises installing the latest macOS security updates, enabling built‑in threat detection, and configuring system integrity protection to mitigate adaptive threats.",
    "category": "General",
    "severity": "LOW",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/over-575-malicious-openclaw-skills-delivered-malware-to",
    "publishedAt": "2026-11-10T23:05:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "macos-ai-driven-attack-detection-and-mitigation",
      "article-71c344c8",
      "71c344c8",
      "macos-ai-driven-attack-detection-and-mitigation-1b8a8b"
    ]
  },
  {
    "slug": "cisa-updates-incident-form-for-linked-attack-detec-63467f97",
    "title": "CISA Updates Incident Form for Linked Attack Detection",
    "summary": "CISA released an updated Incident Form designed to detect linked attacks by correlating root‑cause telemetry across multiple incidents. The update provides new detection rules and telemetry fields that enable security teams to identify patterns of coordinated activity and trigger alerts. Administrators should download the revised form, apply the new telemetry schema, and review detection rules to ensure timely incident response.",
    "category": "General",
    "severity": "LOW",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cisa-tweaks-cyber-incident-form-to-spot-attacks-that-mi",
    "publishedAt": "2026-11-10T23:05:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-updates-incident-form-for-linked-attack-detec",
      "article-63467f97",
      "63467f97",
      "cisa-updates-incident-form-for-linked-attack-detec-17bb0c",
      "cisa-updates-incident-form-for-linked-attack-detection"
    ]
  },
  {
    "slug": "turla-malware-exploitation-enhanced-by-ai-reverse-6a00e457",
    "title": "Turla Malware Exploitation Enhanced by AI Reverse Engineering",
    "summary": "Turla malware, a Russian state-sponsored threat, is now being reverse engineered using AI techniques, according to a security intelligence alert. The AI-driven analysis uncovers root‑cause telemetry and detection rule patterns, enabling precise identification of Turla's command‑and‑control infrastructure, but no active exploitation is confirmed. Security teams should review telemetry, apply updated detection rules, and patch affected systems to mitigate potential compromise.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/ai-makes-reverse-engineering-mainstream-software-malwar",
    "publishedAt": "2026-11-10T23:04:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "turla-malware-exploitation-enhanced-by-ai-reverse",
      "article-6a00e457",
      "6a00e457",
      "turla-malware-exploitation-enhanced-by-ai-reverse-5e0fa6",
      "turla-malware-exploitation-enhanced-by-ai-reverse-engineerin"
    ]
  },
  {
    "slug": "openssh-gpustack-exploited-via-cve-2026-123218-f2cc45ed",
    "title": "OpenSSH, GPUStack Exploited via CVE-2026-123218",
    "summary": "OpenSSH and GPUStack are being exploited via CVE-2026-123218, a flaw that permits remote code execution through malformed SSH packets. Rated CVSS 9.5, the vulnerability allows unauthenticated attackers to run arbitrary code on affected servers without privilege escalation and has PoC exploits. Administrators should immediately apply vendor patches, update OpenSSH to the latest release, and monitor logs for anomalous SSH traffic.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cisa-warns-of-active-exploitation-of-openssh-gpustack-f",
    "publishedAt": "2026-11-10T23:04:32.000Z",
    "cves": [
      "CVE-2026-123218"
    ],
    "additionalSources": [],
    "aliases": [
      "openssh-gpustack-exploited-via-cve-2026-123218",
      "article-f2cc45ed",
      "f2cc45ed",
      "openssh-gpustack-exploited-via-cve-2026-123218-16c8bd"
    ]
  },
  {
    "slug": "sap-issues-critical-rce-patches-0b9b0471",
    "title": "SAP Issues Critical RCE Patches",
    "summary": "SAP issued emergency patches for critical remote code execution flaws in its software, exposing customers to code execution via malformed input. Rated CVSS 10.0, the bugs allow attackers to run arbitrary code without credentials, threatening system integrity and data confidentiality. SAP urges immediate application of the updates and monitoring for suspicious activity, as no workaround exists until patches are installed.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/sap-patches-four-cvss-10-0-flaws-including-two-enabling",
    "publishedAt": "2026-11-10T23:04:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sap-issues-critical-rce-patches",
      "article-0b9b0471",
      "0b9b0471",
      "sap-issues-critical-rce-patches-5efef2"
    ]
  },
  {
    "slug": "apple-imessage-group-chat-and-bluetooth-vulnerabil-fdd645db",
    "title": "Apple iMessage Group Chat and Bluetooth Vulnerabilities Patched",
    "summary": "Apple patched vulnerabilities in iMessage group chat and Bluetooth functionality that could allow attackers to exploit the messaging service. The flaws stem from improper input validation in group chat message handling and Bluetooth pairing, enabling code execution or denial of service. Apple released an update for iOS and macOS; users should install the latest iMessage patch to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/apple-patches-imessage-group-chat-privacy-flaws-and-blu",
    "publishedAt": "2026-11-10T23:04:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-imessage-group-chat-and-bluetooth-vulnerabil",
      "article-fdd645db",
      "fdd645db",
      "apple-imessage-group-chat-and-bluetooth-vulnerabil-2f6048",
      "apple-imessage-group-chat-and-bluetooth-vulnerabilities-patc"
    ]
  },
  {
    "slug": "microsoft-research-detects-sleeper-agents-in-ai-ne-787eb744",
    "title": "Microsoft Research Detects Sleeper Agents in AI Neurons",
    "summary": "Microsoft Research discovered a way to turn an agent model into a sleeper agent by editing fewer than ten neurons to embed a malicious payload. Frontier agents can detect these edits by spotting anomalous neuron changes, allowing early detection before payload activation. Teams should monitor training logs for sudden neuron modifications and use anomaly‑detection tools to mitigate sleeper agent risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/11/10/detecting-sleeper-agents-hiding-in-ai-model-neurons/",
    "publishedAt": "2026-11-10T23:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-research-detects-sleeper-agents-in-ai-ne",
      "article-787eb744",
      "787eb744",
      "microsoft-research-detects-sleeper-agents-in-ai-ne-641529",
      "microsoft-research-detects-sleeper-agents-in-ai-neurons"
    ]
  },
  {
    "slug": "red-hat-releases-security-update-for-php-8-4-292ebc39",
    "title": "Red Hat Releases Security Update for php:8.4",
    "summary": "Red Hat released a security update for the php:8.4 module on Enterprise Linux 9. The update addresses multiple vulnerabilities in PHP’s core engine, including a potential remote code execution flaw that could allow attackers to execute arbitrary code via crafted input. Administrators should apply the php:8.4 update immediately and verify that all web applications are running the patched version.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97880",
    "publishedAt": "2026-11-10T22:40:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-security-update-for-php-8-4",
      "article-292ebc39",
      "292ebc39",
      "red-hat-releases-security-update-for-php-8-4-37d74d"
    ]
  },
  {
    "slug": "red-hat-issues-update-for-mod-auth-openidc-27a52e13",
    "title": "Red Hat Issues Update for mod_auth_openidc",
    "summary": "Red Hat released a security update for the mod_auth_openidc module on Enterprise Linux 9. The patch fixes multiple authentication bypass and privilege escalation flaws that could allow attackers to gain unauthorized access to protected resources. Administrators should apply the update immediately and review access logs for anomalous authentication attempts today.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97861",
    "publishedAt": "2026-11-10T22:37:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-update-for-mod-auth-openidc",
      "article-27a52e13",
      "27a52e13",
      "red-hat-issues-update-for-mod-auth-openidc-37d74d"
    ]
  },
  {
    "slug": "cisco-ise-authorization-bypass-flaws-exposed-80fd12f9",
    "title": "Cisco ISE Authorization Bypass Flaws Exposed",
    "summary": "Cisco ISE and ISE‑PIC contain web‑interface authorization bypass flaws that let authenticated remote attackers modify configuration. The flaw arises from missing server‑side validation of Administrator permissions, enabling crafted HTTP requests to alter file descriptions; exploitation requires valid admin credentials. Cisco has issued patches that address these vulnerabilities, and no workarounds exist; security teams should apply them promptly.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cisco PSIRT",
    "sourceUrl": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-ise-auth-bypass-1-MxcTNgwx?vs_f=Cisco+Security+Advisory%26vs_cat%3DSecurity+Intelligence%26vs_type%3DRSS%26vs_p%3DCisco+Identity+Services+Engine+Authorization+Bypass+Vulnerabilities%26vs_k%3D1",
    "publishedAt": "2026-11-10T22:37:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisco-ise-authorization-bypass-flaws-exposed",
      "article-80fd12f9",
      "80fd12f9",
      "cisco-ise-authorization-bypass-flaws-exposed-577da1"
    ]
  },
  {
    "slug": "python-jwcrypto-update-addresses-moderate-security-40f8f9fd",
    "title": "Python-jwcrypto Update Addresses Moderate Security Issue",
    "summary": "Red Hat released a security update for python‑jwcrypto on RHEL 9, addressing a moderate‑impact vulnerability identified by the product security team. The update mitigates potential misuse of the cryptographic library, though no public exploit or CVE identifier is disclosed. Customers should apply the RHSA‑2026:97858 update immediately to ensure cryptographic integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97858",
    "publishedAt": "2026-11-10T22:36:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "python-jwcrypto-update-addresses-moderate-security",
      "article-40f8f9fd",
      "40f8f9fd",
      "python-jwcrypto-update-addresses-moderate-security-37d74e",
      "python-jwcrypto-update-addresses-moderate-security-issue"
    ]
  },
  {
    "slug": "rhsa-2026-97855-important-nodejs-26-security-updat-f0c45be3",
    "title": "RHSA-2026:97855: Important: nodejs:26 security update",
    "summary": "An update for the nodejs:26 module is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97855",
    "publishedAt": "2026-11-10T22:35:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97855-important-nodejs-26-security-updat",
      "article-f0c45be3",
      "f0c45be3",
      "rhsa-2026-97855-important-nodejs-26-security-updat-37d74e",
      "rhsa-2026-97855-important-nodejs-26-security-update"
    ]
  },
  {
    "slug": "delve-update-fixes-important-security-bug-1aa4724a",
    "title": "Delve Update Fixes Important Security Bug",
    "summary": "Red Hat issued an important security update for the delve tool on RHEL 9, addressing a critical bug that could affect system integrity. The advisory notes that the flaw may allow unauthorized access to privileged data, though no public exploit is reported. Users should install RHSA‑2026:97877 immediately to prevent potential privilege escalation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97877",
    "publishedAt": "2026-11-10T22:32:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "delve-update-fixes-important-security-bug",
      "article-1aa4724a",
      "1aa4724a",
      "delve-update-fixes-important-security-bug-37d74d"
    ]
  },
  {
    "slug": "red-hat-releases-rust-sequoia-sq-security-update-d6f979ee",
    "title": "Red Hat Releases Rust-Sequoia-Sq Security Update",
    "summary": "Red Hat issued a security update for the rust‑sequoia‑sq library used in Red Hat Enterprise Linux 9, addressing a flaw that could allow attackers to compromise system integrity. The vulnerability arises from improper handling of cryptographic parameters, potentially enabling unauthorized code execution or privilege escalation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97868",
    "publishedAt": "2026-11-10T22:31:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-rust-sequoia-sq-security-update",
      "article-d6f979ee",
      "d6f979ee",
      "red-hat-releases-rust-sequoia-sq-security-update-37d74d"
    ]
  },
  {
    "slug": "microsoft-releases-patch-for-actively-exploited-ou-c9129445",
    "title": "Microsoft Releases Patch for Actively Exploited Outlook Zero-Day",
    "summary": "Microsoft released a patch for an actively exploited Outlook zero‑day affecting Microsoft Outlook. The flaw enabled remote code execution via crafted email attachments, allowing attackers to run arbitrary code on vulnerable clients. Microsoft issued an out‑of‑band update; administrators should apply the patch promptly and monitor for anomalous outbound traffic immediately.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/vulnerabilities-threats/november-patch-tuesday-cornucopia-cves",
    "publishedAt": "2026-11-10T22:26:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-releases-patch-for-actively-exploited-ou",
      "article-c9129445",
      "c9129445",
      "microsoft-releases-patch-for-actively-exploited-ou-1fdbae",
      "microsoft-releases-patch-for-actively-exploited-outlook-zero"
    ]
  },
  {
    "slug": "railway-breach-generates-740k-in-fraudulent-ai-cha-a3f05e2a",
    "title": "Railway Breach Generates $740k in Fraudulent AI Charges",
    "summary": "Cloud hosting provider Railway suffered a breach that exposed customer authentication secrets and enabled fraudulent AI usage. Attackers leveraged infrastructure vulnerabilities to steal credentials for up to 100,000 workspaces, generating approximately $740,000 in unauthorized AI compute charges. Railway has applied security patches, revoked compromised tokens, and notified affected customers to reset credentials and monitor usage.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/apple/railway-breach-leads-to-740-000-in-fraudulent-ai-charges/",
    "publishedAt": "2026-11-10T22:20:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "railway-breach-generates-740k-in-fraudulent-ai-cha",
      "article-a3f05e2a",
      "a3f05e2a",
      "railway-breach-generates-740k-in-fraudulent-ai-cha-14e3d2",
      "railway-breach-generates-740k-in-fraudulent-ai-charges"
    ]
  },
  {
    "slug": "microsoft-releases-patch-for-1-100-windows-vulnera-82dba596",
    "title": "Microsoft Releases Patch for 1,100 Windows Vulnerabilities",
    "summary": "Microsoft issued a Patch Tuesday update that addresses nearly 1,100 security vulnerabilities across its Windows operating systems and supported software. The release includes 63 critical fixes, among them a zero‑day in Microsoft Outlook, and aligns with concurrent updates from Adobe, Apple, Google, and Mozilla. Security teams should apply the patches promptly to mitigate the identified weaknesses and maintain system integrity.",
    "category": "General",
    "severity": "LOW",
    "source": "Krebs on Security",
    "sourceUrl": "https://krebsonsecurity.com/2026/11/microsoft-fixes-nearly-1100-security-vulnerabilities/",
    "publishedAt": "2026-11-10T21:55:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-releases-patch-for-1-100-windows-vulnera",
      "article-82dba596",
      "82dba596",
      "microsoft-releases-patch-for-1-100-windows-vulnera-35e7ae",
      "microsoft-releases-patch-for-1-100-windows-vulnerabilities"
    ]
  },
  {
    "slug": "us-soldier-arrested-in-uk-for-alleged-russian-espi-a12ae7b9",
    "title": "US Soldier Arrested in UK for Alleged Russian Espionage",
    "summary": "A U.S. Army member was arrested by British counterterrorism police in cooperation with U.S. authorities including the FBI and military. The arrest relates to allegations of spying for Russia. The Metropolitan Police confirmed the coordinated investigation. This case highlights ongoing international efforts to counter foreign intelligence operations conducted by service members.",
    "category": "Nation State",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/us-army-member-arrested-in-uk-spying-for-russia",
    "publishedAt": "2026-11-10T21:13:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "us-soldier-arrested-in-uk-for-alleged-russian-espi",
      "article-a12ae7b9",
      "a12ae7b9",
      "us-soldier-arrested-in-uk-for-alleged-russian-espi-6a2340",
      "us-soldier-arrested-in-uk-for-alleged-russian-espionage"
    ]
  },
  {
    "slug": "artex-forks-enable-rapid-credential-attacks-f642655a",
    "title": "Artex Forks Enable Rapid Credential Attacks",
    "summary": "Forks of the open-source Artex framework and 45 similar pen‑testing tools can execute credential attacks and cloud breaches at machine speed across multiple industries. The tools exploit weak authentication and misconfigured cloud services, allowing attackers to harvest credentials and compromise cloud resources without user interaction. Security teams should audit cloud configurations, enforce multi‑factor authentication, and monitor for anomalous credential‑exfiltration activity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/artex-ai-pen-test-tool-hackers-weapon",
    "publishedAt": "2026-11-10T21:01:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "artex-forks-enable-rapid-credential-attacks",
      "article-f642655a",
      "f642655a",
      "artex-forks-enable-rapid-credential-attacks-f79209"
    ]
  },
  {
    "slug": "microsoft-patch-tuesday-exceeds-1-000-vulnerabilit-1fd9f3cb",
    "title": "Microsoft Patch Tuesday Exceeds 1,000 Vulnerabilities",
    "summary": "Microsoft’s Patch Tuesday released 1,093 fixes, with the most attention on an exploited Outlook vulnerability. The update list exceeded 1,000 bugs for the second consecutive month, reflecting a high volume of security issues. Administrators should review the advisory and apply all relevant patches in a timely manner to maintain system integrity.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/patch-tuesday-microsoft-1000-bugs-again",
    "publishedAt": "2026-11-10T20:55:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-patch-tuesday-exceeds-1-000-vulnerabilit",
      "article-1fd9f3cb",
      "1fd9f3cb",
      "microsoft-patch-tuesday-exceeds-1-000-vulnerabilit-b9c145",
      "microsoft-patch-tuesday-exceeds-1-000-vulnerabilities"
    ]
  },
  {
    "slug": "nitori-exposes-37-6m-customer-records-theft-c6603bc7",
    "title": "Nitori Exposes 37.6M Customer Records Theft",
    "summary": "Nitori, a major Japanese furniture retailer, discovered attackers accessed a system on its network and may have stolen 37.62 million customer records. The breach exposed personal identifiers, purchase histories, and contact information, though the full scope of compromised data remains unclear. Nitori should conduct a forensic investigation, notify affected customers, and strengthen network segmentation and access controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/japanese-furniture-giant-nitori-says-hackers-stole-376m-customer-records/",
    "publishedAt": "2026-11-10T20:54:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nitori-exposes-37-6m-customer-records-theft",
      "article-c6603bc7",
      "c6603bc7",
      "nitori-exposes-37-6m-customer-records-theft-51d305"
    ]
  },
  {
    "slug": "rhsa-2026-97578-important-buildah-security-bug-fix-e44cc762",
    "title": "RHSA-2026:97578: Important: buildah security, bug fix, and enhancement update",
    "summary": "An update for buildah is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97578",
    "publishedAt": "2026-11-10T20:46:17.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97578-important-buildah-security-bug-fix",
      "article-e44cc762",
      "e44cc762",
      "rhsa-2026-97578-important-buildah-security-bug-fix-37d759",
      "rhsa-2026-97578-important-buildah-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "rhsa-2026-97514-important-subscription-manager-coc-f9fd6ec0",
    "title": "RHSA-2026:97514: Important: subscription-manager-cockpit security update",
    "summary": "An update for subscription-manager-cockpit is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97514",
    "publishedAt": "2026-11-10T20:44:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97514-important-subscription-manager-coc",
      "article-f9fd6ec0",
      "f9fd6ec0",
      "rhsa-2026-97514-important-subscription-manager-coc-37d759",
      "rhsa-2026-97514-important-subscription-manager-cockpit-secur"
    ]
  },
  {
    "slug": "aurora-adtp-blocks-ransomware-with-ai-in-real-time-6ec26d86",
    "title": "Aurora ADTP Blocks Ransomware with AI in Real Time",
    "summary": "Aurora Adaptive Threat Protection (ADTP) employs AI‑powered intent detection to identify ransomware and advanced threats before they reach endpoints. The system analyzes traffic patterns and user behavior, flagging malicious payloads and command‑and‑control communications with high accuracy. Security teams should integrate ADTP into existing SIEM pipelines and enable real‑time alerting to maintain continuous protection.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/technical-videos/how-aurora-adaptive-threat-protection-detects-and-disrupts-attacks-in-real-time/",
    "publishedAt": "2026-11-10T20:43:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "aurora-adtp-blocks-ransomware-with-ai-in-real-time",
      "article-6ec26d86",
      "6ec26d86",
      "aurora-adtp-blocks-ransomware-with-ai-in-real-time-42e684"
    ]
  },
  {
    "slug": "f-secure-maps-26-ai-harms-in-consumer-taxonomy-8ac4516e",
    "title": "F-Secure Maps 26 AI Harms in Consumer Taxonomy",
    "summary": "F-Secure introduced an AI Harms Taxonomy identifying 26 operational mechanisms that pose risks to consumers interacting with artificial intelligence systems. The framework maps attack vectors moving through AI infrastructure, ranging from misleading chatbot outputs to compromised autonomous software agents. According to F-Secure, the study highlights specific intervention points where defensive controls can mitigate consumer harm across AI deployments.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/application-security/f-secure-26-ways-ai-harm-consumers-where-to-stop-them",
    "publishedAt": "2026-11-10T20:41:45.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "f-secure-maps-26-ai-harms-in-consumer-taxonomy",
      "article-8ac4516e",
      "8ac4516e",
      "f-secure-maps-26-ai-harms-in-consumer-taxonomy-5eed8f"
    ]
  },
  {
    "slug": "checkmarx-names-kobi-sivilya-as-chief-information-05842302",
    "title": "Checkmarx Names Kobi Sivilya as Chief Information Security Officer",
    "summary": "Application security vendor Checkmarx announced the appointment of Kobi Sivilya as its new Chief Information Security Officer. The executive transition aims to reinforce internal security posture and guide organizational cybersecurity strategy amid AI-driven shifts in software development. Sivilya will oversee enterprise defense operations and risk management frameworks across the vendor's software security product portfolio.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-careers/checkmarx-appoints-kobi-sivilya-chief-information-security-officer",
    "publishedAt": "2026-11-10T20:35:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "checkmarx-names-kobi-sivilya-as-chief-information",
      "article-05842302",
      "05842302",
      "checkmarx-names-kobi-sivilya-as-chief-information-400d05",
      "checkmarx-names-kobi-sivilya-as-chief-information-security-o"
    ]
  },
  {
    "slug": "red-hat-releases-low-impact-dhcp-security-update-70f3c8f2",
    "title": "Red Hat Releases Low‑Impact DHCP Security Update",
    "summary": "Red Hat Enterprise Linux 9 receives a DHCP security update addressing multiple bugs and enhancements. The advisory rates the update as Low impact, with CVSS scores linked to individual CVE references for detailed severity. Administrators should apply the latest dhcp package via yum or dnf to ensure patched configurations and mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97486",
    "publishedAt": "2026-11-10T20:32:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-low-impact-dhcp-security-update",
      "article-70f3c8f2",
      "70f3c8f2",
      "red-hat-releases-low-impact-dhcp-security-update-37d75c"
    ]
  },
  {
    "slug": "rhsa-2026-97215-important-grafana-security-bug-fix-5776f9f3",
    "title": "RHSA-2026:97215: Important: grafana security, bug fix, and enhancement update",
    "summary": "An update for grafana is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97215",
    "publishedAt": "2026-11-10T20:31:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97215-important-grafana-security-bug-fix",
      "article-5776f9f3",
      "5776f9f3",
      "rhsa-2026-97215-important-grafana-security-bug-fix-37d765",
      "rhsa-2026-97215-important-grafana-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "rhsa-2026-97191-important-delve-security-bug-fix-a-eb702761",
    "title": "RHSA-2026:97191: Important: delve security, bug fix, and enhancement update",
    "summary": "An update for delve is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97191",
    "publishedAt": "2026-11-10T20:28:52.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97191-important-delve-security-bug-fix-a",
      "article-eb702761",
      "eb702761",
      "rhsa-2026-97191-important-delve-security-bug-fix-a-37d767",
      "rhsa-2026-97191-important-delve-security-bug-fix-and-enhance"
    ]
  },
  {
    "slug": "rhsa-2026-97562-important-skopeo-security-bug-fix-2ec7c86e",
    "title": "RHSA-2026:97562: Important: skopeo security, bug fix, and enhancement update",
    "summary": "An update for skopeo is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97562",
    "publishedAt": "2026-11-10T20:26:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97562-important-skopeo-security-bug-fix",
      "article-2ec7c86e",
      "2ec7c86e",
      "rhsa-2026-97562-important-skopeo-security-bug-fix-37d759",
      "rhsa-2026-97562-important-skopeo-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "rhsa-2026-97538-important-cockpit-files-security-u-d3da32b5",
    "title": "RHSA-2026:97538: Important: cockpit-files security update",
    "summary": "An update for cockpit-files is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97538",
    "publishedAt": "2026-11-10T20:24:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97538-important-cockpit-files-security-u",
      "article-d3da32b5",
      "d3da32b5",
      "rhsa-2026-97538-important-cockpit-files-security-u-37d759",
      "rhsa-2026-97538-important-cockpit-files-security-update"
    ]
  },
  {
    "slug": "cloud-range-offers-free-ot-readiness-assessment-28d86c2c",
    "title": "Cloud Range Offers Free OT Readiness Assessment",
    "summary": "Cloud Range released a free 28‑question OT Cyber Readiness Assessment to help organizations identify gaps in operational technology incident response. The assessment evaluates preparedness across detection, containment, and recovery controls, providing a baseline score and improvement roadmap. Organizations should download the tool, complete the questionnaire, and use the resulting report to prioritize remediation.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/ics-ot-security/assess-ot-incident-response-preparedness",
    "publishedAt": "2026-11-10T20:18:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloud-range-offers-free-ot-readiness-assessment",
      "article-28d86c2c",
      "28d86c2c",
      "cloud-range-offers-free-ot-readiness-assessment-665a30"
    ]
  },
  {
    "slug": "red-hat-patches-important-security-flaws-in-rhc-pa-0f4c59af",
    "title": "Red Hat Patches Important Security Flaws in RHC Package",
    "summary": "Red Hat released a security update for the rhc package on Red Hat Enterprise Linux 9. Red Hat Product Security rated the addressed vulnerabilities as having an Important security impact based on CVSS scoring criteria. System administrators running affected Red Hat Enterprise Linux installations should apply the newly available rhc package update to mitigate risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97699",
    "publishedAt": "2026-11-10T20:14:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-patches-important-security-flaws-in-rhc-pa",
      "article-0f4c59af",
      "0f4c59af",
      "red-hat-patches-important-security-flaws-in-rhc-pa-37d755",
      "red-hat-patches-important-security-flaws-in-rhc-package"
    ]
  },
  {
    "slug": "rhsa-2026-97585-moderate-bind9-18-security-bug-fix-be4f38bc",
    "title": "RHSA-2026:97585: Moderate: bind9.18 security, bug fix, and enhancement update",
    "summary": "An update for bind9.18 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97585",
    "publishedAt": "2026-11-10T20:11:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97585-moderate-bind9-18-security-bug-fix",
      "article-be4f38bc",
      "be4f38bc",
      "rhsa-2026-97585-moderate-bind9-18-security-bug-fix-37d758",
      "rhsa-2026-97585-moderate-bind9-18-security-bug-fix-and-enhan"
    ]
  },
  {
    "slug": "cve-2026-124848-kiro-cli-default-permissions-expos-dd708a3c",
    "title": "CVE-2026-124848: Kiro CLI Default Permissions Expose Sessions",
    "summary": "CVE-2026-124848 reveals that Kiro CLI versions before 2.27.0 create session transcript files with world‑readable permissions on macOS and Linux. The flaw allows any local user to read credentials, source code, and other sensitive data stored in the prompt history, potentially enabling credential theft. Users should upgrade to Kiro CLI 2.27.0 or later, or manually change file permissions to restrict access.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-178-aws/",
    "publishedAt": "2026-11-10T20:05:36.000Z",
    "cves": [
      "CVE-2026-124848"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-124848-kiro-cli-default-permissions-expos",
      "article-dd708a3c",
      "dd708a3c",
      "cve-2026-124848-kiro-cli-default-permissions-expos-3e1d2a",
      "cve-2026-124848-kiro-cli-default-permissions-expose-sessions"
    ]
  },
  {
    "slug": "red-hat-releases-kernel-update-for-enterprise-linu-499e671e",
    "title": "Red Hat Releases Kernel Update for Enterprise Linux 9",
    "summary": "Red Hat released a kernel update for Enterprise Linux 9 addressing multiple security issues. Product Security rated the update as Important, and CVSS base scores are provided for each CVE linked in the references. Security teams should apply the patch promptly to mitigate the identified kernel vulnerabilities, maintain system integrity, and ensure compliance with security policies.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97435",
    "publishedAt": "2026-11-10T20:05:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-kernel-update-for-enterprise-linu",
      "article-499e671e",
      "499e671e",
      "red-hat-releases-kernel-update-for-enterprise-linu-37d75d",
      "red-hat-releases-kernel-update-for-enterprise-linux-9"
    ]
  },
  {
    "slug": "microsoft-issues-windows-10-kb5131096-security-upd-633a9a94",
    "title": "Microsoft Issues Windows 10 KB5131096 Security Update",
    "summary": "Microsoft released Windows 10 KB5131096 extended security update addressing multiple vulnerabilities in the operating system. The update incorporates November 2026 Patch Tuesday fixes and bug corrections, mitigating potential exploitation paths by tightening system integrity checks. Users should install the KB5131096 package via Windows Update or manual download to ensure protection against the addressed flaws.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-releases-windows-10-kb5131096-extended-security-update/",
    "publishedAt": "2026-11-10T20:04:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-issues-windows-10-kb5131096-security-upd",
      "article-633a9a94",
      "633a9a94",
      "microsoft-issues-windows-10-kb5131096-security-upd-61db97",
      "microsoft-issues-windows-10-kb5131096-security-update"
    ]
  },
  {
    "slug": "chrome-stable-158-released-for-ios-084ea697",
    "title": "Chrome Stable 158 Released for iOS",
    "summary": "Google released Chrome Stable 158 (158.0.8127.32) for iOS, adding stability and performance improvements. The update does not introduce new security features but addresses minor bugs identified in the previous release. Users can download the update from the App Store within hours of release to maintain current browser functionality and security patches.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/chrome-stable-for-ios-update_01666689214.html",
    "publishedAt": "2026-11-10T19:58:32.576Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-stable-158-released-for-ios",
      "article-084ea697",
      "084ea697",
      "chrome-stable-158-released-for-ios-53b171"
    ]
  },
  {
    "slug": "rhsa-2026-97242-moderate-bind-security-bug-fix-and-3977eb8f",
    "title": "RHSA-2026:97242: Moderate: bind security, bug fix, and enhancement update",
    "summary": "An update for bind is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97242",
    "publishedAt": "2026-11-10T19:53:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97242-moderate-bind-security-bug-fix-and",
      "article-3977eb8f",
      "3977eb8f",
      "rhsa-2026-97242-moderate-bind-security-bug-fix-and-37d764",
      "rhsa-2026-97242-moderate-bind-security-bug-fix-and-enhanceme"
    ]
  },
  {
    "slug": "usn-9037-1-hplip-vulnerabilities-41bb06eb",
    "title": "USN-9037-1: HPLIP vulnerabilities",
    "summary": "An attacker could possibly use this issue to cause a denial of service, expose sensitive information or execute arbitrary code. (CVE-2026-91097) It was discovered that HPLIP did not properly handle certain input, which could result in a heap-based buffer overflow. This issue only affected Ubuntu 16.04 LTS and Ubuntu 18.04 LTS. (CVE-2026-91100) It was discovered that HPLIP did not properly validate certain array indices.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9037-1",
    "publishedAt": "2026-11-10T19:50:31.000Z",
    "cves": [
      "CVE-2026-91097",
      "CVE-2026-91100"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9037-1-hplip-vulnerabilities",
      "article-41bb06eb",
      "41bb06eb",
      "usn-9037-1-hplip-vulnerabilities-7e8844"
    ]
  },
  {
    "slug": "rhsa-2026-97539-important-cockpit-machines-securit-71aae787",
    "title": "RHSA-2026:97539: Important: cockpit-machines security update",
    "summary": "An update for cockpit-machines is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97539",
    "publishedAt": "2026-11-10T19:38:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97539-important-cockpit-machines-securit",
      "article-71aae787",
      "71aae787",
      "rhsa-2026-97539-important-cockpit-machines-securit-37d759",
      "rhsa-2026-97539-important-cockpit-machines-security-update"
    ]
  },
  {
    "slug": "hackers-exploit-trusted-aws-access-to-breach-multi-e6dd6ee2",
    "title": "Hackers exploit trusted AWS access to breach multiple cloud environments",
    "summary": "A threat actor used compromised identity and access management (IAM) credentials for a Qubole big data platform's AWS account to access and exfiltrate data from multiple customers' AWS environments. The vulnerability is tracked as CVE-2026-126087.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-exploit-trusted-aws-access-to-breach-multiple-cloud-environments/",
    "publishedAt": "2026-11-10T19:31:11.000Z",
    "cves": [
      "CVE-2026-126087"
    ],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-trusted-aws-access-to-breach-multi",
      "article-e6dd6ee2",
      "e6dd6ee2",
      "hackers-exploit-trusted-aws-access-to-breach-multi-5a38b4",
      "hackers-exploit-trusted-aws-access-to-breach-multiple-cloud-"
    ]
  },
  {
    "slug": "git-patches-flaw-that-lets-malicious-repositories-6737e8b6",
    "title": "Git Patches Flaw That Lets Malicious Repositories Execute Code During Recursive Clones",
    "summary": "A flaw in Git can let a malicious repository run an attacker's code on a computer that clones it recursively, together with its submodules. The flaw, tracked as CVE-2026-111760, is an integer truncation in how Git handles its index.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/git-patches-flaw-that-lets-malicious.html",
    "publishedAt": "2026-11-10T19:23:10.000Z",
    "cves": [
      "CVE-2026-111760"
    ],
    "additionalSources": [],
    "aliases": [
      "git-patches-flaw-that-lets-malicious-repositories",
      "article-6737e8b6",
      "6737e8b6",
      "git-patches-flaw-that-lets-malicious-repositories-463519",
      "git-patches-flaw-that-lets-malicious-repositories-execute-co"
    ]
  },
  {
    "slug": "rhsa-2026-97163-moderate-mingw-glib2-security-bug-5bb12a17",
    "title": "RHSA-2026:97163: Moderate: mingw-glib2 security, bug fix, and enhancement update",
    "summary": "An update for mingw-glib2 is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97163",
    "publishedAt": "2026-11-10T19:22:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97163-moderate-mingw-glib2-security-bug",
      "article-5bb12a17",
      "5bb12a17",
      "rhsa-2026-97163-moderate-mingw-glib2-security-bug-37d768",
      "rhsa-2026-97163-moderate-mingw-glib2-security-bug-fix-and-en"
    ]
  },
  {
    "slug": "microsoft-aware-of-exploited-outlook-zero-day-cve-a19a1a02",
    "title": "Microsoft Aware of Exploited Outlook Zero-Day CVE-2026-124194",
    "summary": "Microsoft reports active exploitation of Outlook zero‑day CVE‑2026‑124194, found among 1,094 vulnerabilities patched in its November 2026 update. The flaw allows unauthenticated remote code execution via malformed email attachments, scoring CVSS 10.0 and enabling arbitrary code on affected systems. Microsoft released a patch in the November 2026 Rollup; administrators should apply it immediately and monitor mail traffic for anomalous attachments.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/exploited-outlook-zero-day-among-1094-flaws-patched-by-microsoft/",
    "publishedAt": "2026-11-10T19:19:46.000Z",
    "cves": [
      "CVE-2026-124194"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-aware-of-exploited-outlook-zero-day-cve",
      "article-a19a1a02",
      "a19a1a02",
      "microsoft-aware-of-exploited-outlook-zero-day-cve-6d45f8",
      "microsoft-aware-of-exploited-outlook-zero-day-cve-2026-12419"
    ]
  },
  {
    "slug": "sglang-rce-breaches-near-ai-steals-data-3d91e339",
    "title": "SGLang RCE Breaches NEAR AI, Steals Data",
    "summary": "An attacker exploited a remote code execution flaw in SGLang, running arbitrary code on a NEAR AI inference server. The breach exposed data from 18 agents and about 100 users, including confidential requests processed in a trusted execution environment. NEAR AI applied a patch to SGLang and recommends updating to the latest version while monitoring logs for anomalous activity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/sglang-rce-exploit-breaches-near-ai.html",
    "publishedAt": "2026-11-10T19:19:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sglang-rce-breaches-near-ai-steals-data",
      "article-3d91e339",
      "3d91e339",
      "sglang-rce-breaches-near-ai-steals-data-5165c4"
    ]
  },
  {
    "slug": "rhsa-2026-97213-important-grafana-pcp-security-bug-a9e4f067",
    "title": "RHSA-2026:97213: Important: grafana-pcp security, bug fix, and enhancement update",
    "summary": "An update for grafana-pcp is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97213",
    "publishedAt": "2026-11-10T19:10:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97213-important-grafana-pcp-security-bug",
      "article-a9e4f067",
      "a9e4f067",
      "rhsa-2026-97213-important-grafana-pcp-security-bug-37d765",
      "rhsa-2026-97213-important-grafana-pcp-security-bug-fix-and-e"
    ]
  },
  {
    "slug": "microsoft-patch-tuesday-november-2027-tue-nov-10th-1bbc566e",
    "title": "Microsoft Patch Tuesday November 2027 , (Tue, Nov 10th)",
    "summary": "Microsoft continues its AI-induced patch surge, addressing 1,260 different vulnerabilities this month. 167 of the vulnerabilities are Chromium issues affecting Microsoft Edge. The vulnerability is tracked as CVE-2026-113971.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33508",
    "publishedAt": "2026-11-10T19:09:32.000Z",
    "cves": [
      "CVE-2026-113971"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-patch-tuesday-november-2027-tue-nov-10th",
      "article-1bbc566e",
      "1bbc566e",
      "microsoft-patch-tuesday-november-2027-tue-nov-10th-57dd81"
    ]
  },
  {
    "slug": "microsoft-patch-tuesday-fixes-1-235-flaws-outlook-1bd8ea52",
    "title": "Microsoft Patch Tuesday Fixes 1,235 Flaws, Outlook Zero-Day",
    "summary": "Microsoft released its November 2026 Patch Tuesday, addressing 1,235 vulnerabilities, including the actively exploited Outlook zero‑day CVE‑2026‑113971. The CVE permits unauthenticated remote code execution via malformed email attachments, scoring CVSS 10.0 and enabling arbitrary code execution. Administrators should apply the November 2026 Rollup immediately and verify that Outlook clients are updated to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/microsoft-november-2026-patch-tuesday-fixes-1-235-flaws-outlook-zero-day/",
    "publishedAt": "2026-11-10T19:07:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-patch-tuesday-fixes-1-235-flaws-outlook",
      "article-1bd8ea52",
      "1bd8ea52",
      "microsoft-patch-tuesday-fixes-1-235-flaws-outlook-627c82",
      "microsoft-patch-tuesday-fixes-1-235-flaws-outlook-zero-day"
    ]
  },
  {
    "slug": "november-2026-security-update-review-ef678e34",
    "title": "November 2026 Security Update Review",
    "summary": "The November 2026 Security Update Review covers patch releases from Microsoft and Adobe, detailing record‑breaking vulnerability counts across products. Microsoft fixed 1,235 flaws, including an actively exploited Outlook zero‑day, while Adobe issued nine bulletins for 110 unique CVEs in its creative suite. Teams should apply the November 2026 Rollup, review Adobe bulletin IDs, and monitor for unpatched vulnerabilities.",
    "category": "General",
    "severity": "CRITICAL",
    "source": "Zero Day Initiative",
    "sourceUrl": "https://www.thezdi.com/blog/2026/11/10/the-november-2026-security-update-review",
    "publishedAt": "2026-11-10T19:02:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "november-2026-security-update-review",
      "article-ef678e34",
      "ef678e34",
      "november-2026-security-update-review-219998"
    ]
  },
  {
    "slug": "microsoft-patch-tuesday-fixes-1-093-vulnerabilitie-1982f712",
    "title": "Microsoft Patch Tuesday Fixes 1,093 Vulnerabilities, Outlook Zero-Day",
    "summary": "Microsoft released its November 2026 Patch Tuesday updates, fixing 1,093 vulnerabilities across Windows, Office, SQL Server, SharePoint, Exchange Server, Azure services, and developer tools. The update includes CVE-2026-113971, an actively exploited Outlook zero‑day that leaks users’ NTLMv2 authentication hashes to attackers. Security teams must apply the patch immediately to eliminate the credential theft vector and protect enterprise authentication infrastructure.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/microsoft-november-2026-patch-tuesday/",
    "publishedAt": "2026-11-10T19:01:53.000Z",
    "cves": [
      "CVE-2026-113971"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-patch-tuesday-fixes-1-093-vulnerabilitie",
      "article-1982f712",
      "1982f712",
      "microsoft-patch-tuesday-fixes-1-093-vulnerabilitie-63091b",
      "microsoft-patch-tuesday-fixes-1-093-vulnerabilities-outlook-"
    ]
  },
  {
    "slug": "rhsa-2026-97560-important-runc-security-update-203d049a",
    "title": "RHSA-2026:97560: Important: runc security update",
    "summary": "An update for runc is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97560",
    "publishedAt": "2026-11-10T19:00:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97560-important-runc-security-update",
      "article-203d049a",
      "203d049a",
      "rhsa-2026-97560-important-runc-security-update-37d759"
    ]
  },
  {
    "slug": "rhsa-2026-97387-important-go-fdo-server-security-u-83121c52",
    "title": "RHSA-2026:97387: Important: go-fdo-server security update",
    "summary": "An update for go-fdo-server is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97387",
    "publishedAt": "2026-11-10T18:53:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97387-important-go-fdo-server-security-u",
      "article-83121c52",
      "83121c52",
      "rhsa-2026-97387-important-go-fdo-server-security-u-37d760",
      "rhsa-2026-97387-important-go-fdo-server-security-update"
    ]
  },
  {
    "slug": "cve-2026-126087-untrusted-search-path-in-openjd-se-502636a4",
    "title": "CVE-2026-126087 - Untrusted search path in OpenJD Sessions for Python and the AWS Deadline Cloud worker agent",
    "summary": "Bulletin ID: 2026-177-AWS Publication Date: 11/10/2026 10:45 AM PST Description: Untrusted search path in the cross-user process launcher in Open Job Description (OpenJD) Sessions for Python before 0.11.0, as used in the AWS Deadline Cloud worker agent before 0.33.0, on Linux might allow an authenticated remote user with permission to submit jobs to a queue to execute arbitrary code as the worker agent OS user and obtain the AWS credentials held by the worker agent via a crafted job that modifies the PATH environment variable.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-177-aws/",
    "publishedAt": "2026-11-10T18:53:11.000Z",
    "cves": [
      "CVE-2026-126087"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-126087-untrusted-search-path-in-openjd-se",
      "article-502636a4",
      "502636a4",
      "cve-2026-126087-untrusted-search-path-in-openjd-se-3fd202",
      "cve-2026-126087-untrusted-search-path-in-openjd-sessions-for"
    ]
  },
  {
    "slug": "ai-coding-agents-leak-thousands-of-secrets-to-gith-98f23060",
    "title": "AI Coding Agents Leak Thousands of Secrets to GitHub",
    "summary": "A command in Claude Code inadvertently saves files containing credentials and sensitive data to public Git repositories, creating security exposure for organizations. The leaked secrets include API keys, tokens, and authentication credentials that were committed to public repositories without authorization. Organizations must audit their AI coding agent configurations and implement pre-commit hooks to prevent credential leakage.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/ai-coding-agents-leak-secrets-github",
    "publishedAt": "2026-11-10T18:46:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-coding-agents-leak-thousands-of-secrets-to-gith",
      "article-98f23060",
      "98f23060",
      "ai-coding-agents-leak-thousands-of-secrets-to-gith-6c2ddc",
      "ai-coding-agents-leak-thousands-of-secrets-to-github"
    ]
  },
  {
    "slug": "gstreamer-good-plugins-vulnerabilities-allow-remot-7309a69b",
    "title": "GStreamer Good Plugins Vulnerabilities Allow Remote Code Execution",
    "summary": "Ubuntu 16.04, 18.04, and 20.04 are affected by GStreamer Good Plugins flaws (CVE-2026-3083, CVE-2026-3085, CVE-2026-39043) that mishandle network streams, Matroska, and WAV files. The vulnerabilities enable remote attackers to trigger crashes or potentially execute arbitrary code, posing a significant risk to affected systems. Apply Ubuntu security updates or upgrade GStreamer to a patched version to mitigate exploitation risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9038-1",
    "publishedAt": "2026-11-10T18:38:56.000Z",
    "cves": [
      "CVE-2026-3083",
      "CVE-2026-3085",
      "CVE-2026-39043"
    ],
    "additionalSources": [],
    "aliases": [
      "gstreamer-good-plugins-vulnerabilities-allow-remot",
      "article-7309a69b",
      "7309a69b",
      "gstreamer-good-plugins-vulnerabilities-allow-remot-7e8840",
      "gstreamer-good-plugins-vulnerabilities-allow-remote-code-exe"
    ]
  },
  {
    "slug": "microsoft-releases-windows-11-cumulative-updates-k-e0252079",
    "title": "Microsoft Releases Windows 11 Cumulative Updates KB5132061, KB5131087",
    "summary": "Microsoft released cumulative updates KB5132061 and KB5131087 for Windows 11 versions 26H2/25H2/24H2 and 23H2. The updates address multiple security vulnerabilities and bugs, though specific CVE identifiers are not disclosed in the release notes. Users should install the patches via Windows Update or manually to maintain system security and feature parity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/windows-11-kb5132061-and-kb5131087-cumulative-updates-released/",
    "publishedAt": "2026-11-10T18:33:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-releases-windows-11-cumulative-updates-k",
      "article-e0252079",
      "e0252079",
      "microsoft-releases-windows-11-cumulative-updates-k-636e3e",
      "microsoft-releases-windows-11-cumulative-updates-kb5132061-k"
    ]
  },
  {
    "slug": "grafana-update-addresses-security-issues-on-rhel9-f60a5ecc",
    "title": "Grafana Update Addresses Security Issues on RHEL9",
    "summary": "Red Hat released a Grafana update for RHEL 9, addressing multiple security vulnerabilities. The advisory rates the update as Important, with CVSS base scores linked to CVE references, indicating medium‑to‑high severity flaws that could allow unauthorized data access. Administrators should apply the update promptly to mitigate potential exploitation and maintain system integrity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97555",
    "publishedAt": "2026-11-10T18:20:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "grafana-update-addresses-security-issues-on-rhel9",
      "article-f60a5ecc",
      "f60a5ecc",
      "grafana-update-addresses-security-issues-on-rhel9-37d759"
    ]
  },
  {
    "slug": "edk2-update-for-rhel10-addresses-low-severity-issu-c503678a",
    "title": "edk2 Update for RHEL10 Addresses Low‑Severity Issues",
    "summary": "Red Hat released an edk2 update for RHEL 10, targeting low‑severity security bugs that could affect firmware initialization. The advisory lists CVSS base scores linked to CVE references, indicating minimal exploitation risk. Users should apply the update to maintain firmware stability, though no immediate threat is reported, and monitor for any related advisories.",
    "category": "Vulnerability",
    "severity": "LOW",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97212",
    "publishedAt": "2026-11-10T18:17:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "edk2-update-for-rhel10-addresses-low-severity-issu",
      "article-c503678a",
      "c503678a",
      "edk2-update-for-rhel10-addresses-low-severity-issu-37d765",
      "edk2-update-for-rhel10-addresses-low-severity-issues"
    ]
  },
  {
    "slug": "fireworks-ai-cloud-breach-exposes-api-keys-291af339",
    "title": "Fireworks AI Cloud Breach Exposes API Keys",
    "summary": "Fireworks AI suffered a cloud breach that exposed API keys, potentially allowing attackers to access proprietary AI models and data. The compromise resulted from misconfigured access controls on the cloud storage bucket, enabling unauthenticated retrieval of sensitive credentials. Fireworks AI has issued a patch and revoked exposed keys; security teams should rotate credentials and audit cloud permissions immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/fireworks-ai-discloses-new-breach-after-cloud-provider",
    "publishedAt": "2026-11-10T18:16:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fireworks-ai-cloud-breach-exposes-api-keys",
      "article-291af339",
      "291af339",
      "fireworks-ai-cloud-breach-exposes-api-keys-256025"
    ]
  },
  {
    "slug": "turla-cereal-targets-government-exchange-servers-84a454ad",
    "title": "Turla Cereal Targets Government Exchange Servers",
    "summary": "Turla Cereal, a state-sponsored espionage group, has been observed infiltrating government Microsoft Exchange servers. The campaign leverages custom malware to exfiltrate sensitive data, with telemetry indicating persistent footholds. Security teams should deploy the latest Exchange patches, enable advanced threat protection, monitor for anomalous outbound traffic, and conduct thorough forensic analysis of compromised hosts.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/turla-hackers-use-new-cereal-malware-to-spy-on-govt-exc",
    "publishedAt": "2026-11-10T18:15:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "turla-cereal-targets-government-exchange-servers",
      "article-84a454ad",
      "84a454ad",
      "turla-cereal-targets-government-exchange-servers-446061"
    ]
  },
  {
    "slug": "byod-ransomware-allegedly-claims-toyota-data-breac-75240c97",
    "title": "BYOD Ransomware Allegedly Claims Toyota Data Breach",
    "summary": "The BYOD ransomware group claims it obtained personal information and kiosk device access from Toyota, though the claim remains unverified. No evidence confirms Toyota systems were breached or files were encrypted. Security teams should monitor threat actor claims and validate any reported data exposure through independent forensic analysis.",
    "category": "Breach",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/toyota-data-breach-claim/",
    "publishedAt": "2026-11-10T18:14:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "byod-ransomware-allegedly-claims-toyota-data-breac",
      "article-75240c97",
      "75240c97",
      "byod-ransomware-allegedly-claims-toyota-data-breac-74c568",
      "byod-ransomware-allegedly-claims-toyota-data-breach"
    ]
  },
  {
    "slug": "xen-orchestra-auth-bypass-exploited-for-admin-acce-4765a021",
    "title": "Xen Orchestra Auth Bypass Exploited for Admin Access",
    "summary": "Hackers exploit a critical authentication bypass in Xen Orchestra to gain administrative privileges. The flaw, tracked as VSA-2026-062, parses authenticationToken=j:%7B%7D into an empty object, enabling unauthorized access and is actively exploited, potentially compromising entire systems. Vates VMS urges immediate patch deployment and temporary disabling of unused REST endpoints to mitigate risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-critical-xen-orchestra.html",
    "publishedAt": "2026-11-10T18:12:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xen-orchestra-auth-bypass-exploited-for-admin-acce",
      "article-4765a021",
      "4765a021",
      "xen-orchestra-auth-bypass-exploited-for-admin-acce-40d9ac",
      "xen-orchestra-auth-bypass-exploited-for-admin-access"
    ]
  },
  {
    "slug": "adobe-fixes-110-vulnerabilities-in-nine-products-ea059d9e",
    "title": "Adobe Fixes 110 Vulnerabilities in Nine Products",
    "summary": "Adobe has patched 110 vulnerabilities across nine products, including AEM, Premiere, Photoshop, After Effects, Connect, Audition, Dimension, Content Credentials SDK, and Media Encoder. The flaws span configuration, input validation, and privilege escalation paths, but no active exploitation reports were disclosed. Adobe recommends applying the latest security updates immediately to mitigate potential risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/adobe-patches-110-vulnerabilities-across-9-products/",
    "publishedAt": "2026-11-10T18:11:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "adobe-fixes-110-vulnerabilities-in-nine-products",
      "article-ea059d9e",
      "ea059d9e",
      "adobe-fixes-110-vulnerabilities-in-nine-products-439ac8"
    ]
  },
  {
    "slug": "rhsa-2026-97438-moderate-sssd-security-bug-fix-and-b47a5b9d",
    "title": "RHSA-2026:97438: Moderate: sssd security, bug fix, and enhancement update",
    "summary": "An update for sssd is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97438",
    "publishedAt": "2026-11-10T18:06:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97438-moderate-sssd-security-bug-fix-and",
      "article-b47a5b9d",
      "b47a5b9d",
      "rhsa-2026-97438-moderate-sssd-security-bug-fix-and-37d75d",
      "rhsa-2026-97438-moderate-sssd-security-bug-fix-and-enhanceme"
    ]
  },
  {
    "slug": "firefox-free-vpn-drops-50gb-launch-cap-until-janua-7bb5b801",
    "title": "Firefox Free VPN Drops 50GB Launch Cap Until January 31",
    "summary": "Mozilla removed the data cap on the built-in Firefox free VPN, extending unlimited desktop and Android usage for users with a Mozilla account. The VPN protects traffic only inside Firefox and does not affect other applications on the device. Users benefit from unrestricted browsing without additional subscription costs beyond the existing Mozilla account requirement.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/firefox-free-vpn-data/",
    "publishedAt": "2026-11-10T18:05:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "firefox-free-vpn-drops-50gb-launch-cap-until-janua",
      "article-7bb5b801",
      "7bb5b801",
      "firefox-free-vpn-drops-50gb-launch-cap-until-janua-2d4be7",
      "firefox-free-vpn-drops-50gb-launch-cap-until-january-31"
    ]
  },
  {
    "slug": "rhsa-2026-97194-important-cockpit-files-security-u-c568e2d1",
    "title": "RHSA-2026:97194: Important: cockpit-files security update",
    "summary": "An update for cockpit-files is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97194",
    "publishedAt": "2026-11-10T18:02:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97194-important-cockpit-files-security-u",
      "article-c568e2d1",
      "c568e2d1",
      "rhsa-2026-97194-important-cockpit-files-security-u-37d767",
      "rhsa-2026-97194-important-cockpit-files-security-update"
    ]
  },
  {
    "slug": "cve-2026-125350-xml-use-after-free-flaw-patched-7d533cf6",
    "title": "CVE‑2026‑125350 XML Use‑After‑Free Flaw Patched",
    "summary": "CVE‑2026‑125350, an XML use‑after‑free flaw, was disclosed and patched, affecting enterprise XML processing components. The flaw permits unauthenticated attackers to trigger memory corruption, potentially leading to remote code execution or denial of service. Security teams should deploy the vendor patch immediately, monitor for exploitation indicators, and validate XML input sanitization to mitigate risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/chrome-update-patches-exploited-xml-zero-day-eighth-thi",
    "publishedAt": "2026-11-10T18:00:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cve-2026-125350-xml-use-after-free-flaw-patched",
      "article-7d533cf6",
      "7d533cf6",
      "cve-2026-125350-xml-use-after-free-flaw-patched-698a41"
    ]
  },
  {
    "slug": "git-addresses-six-security-vulnerabilities-in-upda-a1593972",
    "title": "Git Addresses Six Security Vulnerabilities in Updates",
    "summary": "Git released updates addressing six security vulnerabilities that affected recursive clones, reference handling, merges, binary patches, and imports. The defects involve improper validation of repository metadata and could enable unauthorized code injection or data leakage. Users should install the latest Git version or apply the provided patches to secure their repositories.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "GitHub Security Blog",
    "sourceUrl": "https://github.blog/open-source/git/git-security-vulnerabilities-announced-7/",
    "publishedAt": "2026-11-10T18:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "git-addresses-six-security-vulnerabilities-in-upda",
      "article-a1593972",
      "a1593972",
      "git-addresses-six-security-vulnerabilities-in-upda-48249b",
      "git-addresses-six-security-vulnerabilities-in-updates"
    ]
  },
  {
    "slug": "rhsa-2026-97386-important-go-fdo-client-security-u-585d17b2",
    "title": "RHSA-2026:97386: Important: go-fdo-client security update",
    "summary": "An update for go-fdo-client is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97386",
    "publishedAt": "2026-11-10T17:54:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97386-important-go-fdo-client-security-u",
      "article-585d17b2",
      "585d17b2",
      "rhsa-2026-97386-important-go-fdo-client-security-u-37d760",
      "rhsa-2026-97386-important-go-fdo-client-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-97521-important-microcode-ctl-security-b-18ff9260",
    "title": "RHSA-2026:97521: Important: microcode_ctl security, bug fix, and enhancement update",
    "summary": "An update for microcode_ctl is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97521",
    "publishedAt": "2026-11-10T17:54:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97521-important-microcode-ctl-security-b",
      "article-18ff9260",
      "18ff9260",
      "rhsa-2026-97521-important-microcode-ctl-security-b-37d759",
      "rhsa-2026-97521-important-microcode-ctl-security-bug-fix-and"
    ]
  },
  {
    "slug": "rhsa-2026-97193-important-cockpit-podman-security-edb68059",
    "title": "RHSA-2026:97193: Important: cockpit-podman security update",
    "summary": "An update for cockpit-podman is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97193",
    "publishedAt": "2026-11-10T17:53:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97193-important-cockpit-podman-security",
      "article-edb68059",
      "edb68059",
      "rhsa-2026-97193-important-cockpit-podman-security-37d767",
      "rhsa-2026-97193-important-cockpit-podman-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-97463-moderate-polkit-security-update-3aaf68fe",
    "title": "RHSA-2026:97463: Moderate: polkit security update",
    "summary": "An update for polkit is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97463",
    "publishedAt": "2026-11-10T17:52:21.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97463-moderate-polkit-security-update",
      "article-3aaf68fe",
      "3aaf68fe",
      "rhsa-2026-97463-moderate-polkit-security-update-37d75c"
    ]
  },
  {
    "slug": "china-nexus-espionage-campaigns-linked-via-sparrow-823b4648",
    "title": "China-Nexus Espionage Campaigns Linked via Sparrow Malware",
    "summary": "Three distinct threat clusters sharing infrastructure and malware code similarities have targeted telecommunications providers, government entities, military organizations, and critical infrastructure across Latin America, Asia, and Europe over the past year. Check Point Research tracks these clusters under names SilentDelivery and related designations.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/three-china-nexus-espionage-campaigns.html",
    "publishedAt": "2026-11-10T17:43:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "china-nexus-espionage-campaigns-linked-via-sparrow",
      "article-823b4648",
      "823b4648",
      "china-nexus-espionage-campaigns-linked-via-sparrow-21b668",
      "china-nexus-espionage-campaigns-linked-via-sparrow-malware"
    ]
  },
  {
    "slug": "hackers-can-exploit-sap-proxygate-and-icm2shell-fl-d2792acf",
    "title": "Hackers Can Exploit SAP PROXYGATE and ICM2SHELL Flaws for Unauthorized Full System Access",
    "summary": "SAP has released fixes for PROXYGATE and ICM2SHELL, critical security flaws that could let attackers take control of SAP systems without signing in. Disclosed during the November 10, 2026, Security Patch Day, the vulnerabilities carry maximum CVSS scores of 10.0 and affect core components used across business applications.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/sap-proxygate-and-icm2shell-flaws/",
    "publishedAt": "2026-11-10T17:32:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-can-exploit-sap-proxygate-and-icm2shell-fl",
      "article-d2792acf",
      "d2792acf",
      "hackers-can-exploit-sap-proxygate-and-icm2shell-fl-6a70af",
      "hackers-can-exploit-sap-proxygate-and-icm2shell-flaws-for-un"
    ]
  },
  {
    "slug": "rhsa-2026-97456-moderate-krb5-security-update-142bdc41",
    "title": "RHSA-2026:97456: Moderate: krb5 security update",
    "summary": "An update for krb5 is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97456",
    "publishedAt": "2026-11-10T17:31:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97456-moderate-krb5-security-update",
      "article-142bdc41",
      "142bdc41",
      "rhsa-2026-97456-moderate-krb5-security-update-37d75d"
    ]
  },
  {
    "slug": "railway-exposes-ai-driven-api-key-theft-and-charge-a5e70a7f",
    "title": "Railway Exposes AI‑Driven API Key Theft and Charges",
    "summary": "Railway disclosed that attackers leveraged AI agents, a build system flaw, and cloud misconfigurations to exfiltrate customer API keys. The compromised secrets enabled the adversary to generate approximately $740,000 in unauthorized cloud charges across multiple internal systems. Railway is tightening build pipelines, enforcing stricter access controls, and monitoring for anomalous API usage to prevent future incidents.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/railway-details-data-breach/",
    "publishedAt": "2026-11-10T17:19:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "railway-exposes-ai-driven-api-key-theft-and-charge",
      "article-a5e70a7f",
      "a5e70a7f",
      "railway-exposes-ai-driven-api-key-theft-and-charge-6c98d4",
      "railway-exposes-ai-driven-api-key-theft-and-charges"
    ]
  },
  {
    "slug": "rhsa-2026-97497-moderate-unbound-security-bug-fix-a01b4add",
    "title": "RHSA-2026:97497: Moderate: unbound security, bug fix, and enhancement update",
    "summary": "An update for unbound is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97497",
    "publishedAt": "2026-11-10T17:11:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97497-moderate-unbound-security-bug-fix",
      "article-a01b4add",
      "a01b4add",
      "rhsa-2026-97497-moderate-unbound-security-bug-fix-37d75c",
      "rhsa-2026-97497-moderate-unbound-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "rhsa-2026-97288-important-yggdrasil-security-bug-f-87570b12",
    "title": "RHSA-2026:97288: Important: yggdrasil security, bug fix, and enhancement update",
    "summary": "An update for yggdrasil is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97288",
    "publishedAt": "2026-11-10T17:07:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97288-important-yggdrasil-security-bug-f",
      "article-87570b12",
      "87570b12",
      "rhsa-2026-97288-important-yggdrasil-security-bug-f-37d764",
      "rhsa-2026-97288-important-yggdrasil-security-bug-fix-and-enh"
    ]
  },
  {
    "slug": "rhsa-2026-97328-important-oci-seccomp-bpf-hook-sec-39b793b0",
    "title": "RHSA-2026:97328: Important: oci-seccomp-bpf-hook security, bug fix, and enhancement update",
    "summary": "An update for oci-seccomp-bpf-hook is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97328",
    "publishedAt": "2026-11-10T16:57:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97328-important-oci-seccomp-bpf-hook-sec",
      "article-39b793b0",
      "39b793b0",
      "rhsa-2026-97328-important-oci-seccomp-bpf-hook-sec-37d761",
      "rhsa-2026-97328-important-oci-seccomp-bpf-hook-security-bug-"
    ]
  },
  {
    "slug": "notion-confirms-ai-chat-transcripts-exposed-in-fir-4ab5ac1f",
    "title": "Notion Confirms AI Chat Transcripts Exposed in Fireworks AI Breach, Affecting Customer Workspaces",
    "summary": "Notion has confirmed that a security incident at Fireworks AI exposed Notion AI chat transcripts linked to fewer than 1% of its customer workspaces. Insights, a feature that helps teams understand their AI usage, used the affected conversations.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/notion-confirms-data-breach/",
    "publishedAt": "2026-11-10T16:54:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "notion-confirms-ai-chat-transcripts-exposed-in-fir",
      "article-4ab5ac1f",
      "4ab5ac1f",
      "notion-confirms-ai-chat-transcripts-exposed-in-fir-53a2c6",
      "notion-confirms-ai-chat-transcripts-exposed-in-fireworks-ai-"
    ]
  },
  {
    "slug": "rhsa-2026-97219-moderate-freerdp-security-bug-fix-a7b5af48",
    "title": "RHSA-2026:97219: Moderate: freerdp security, bug fix, and enhancement update",
    "summary": "An update for freerdp is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97219",
    "publishedAt": "2026-11-10T16:54:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97219-moderate-freerdp-security-bug-fix",
      "article-a7b5af48",
      "a7b5af48",
      "rhsa-2026-97219-moderate-freerdp-security-bug-fix-37d765",
      "rhsa-2026-97219-moderate-freerdp-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "rhsa-2026-97553-important-grafana-pcp-security-bug-c05a01d7",
    "title": "RHSA-2026:97553: Important: grafana-pcp security, bug fix, and enhancement update",
    "summary": "An update for grafana-pcp is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97553",
    "publishedAt": "2026-11-10T16:53:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97553-important-grafana-pcp-security-bug",
      "article-c05a01d7",
      "c05a01d7",
      "rhsa-2026-97553-important-grafana-pcp-security-bug-37d759",
      "rhsa-2026-97553-important-grafana-pcp-security-bug-fix-and-e"
    ]
  },
  {
    "slug": "rhsa-2026-97537-important-cockpit-podman-security-a435431d",
    "title": "RHSA-2026:97537: Important: cockpit-podman security update",
    "summary": "An update for cockpit-podman is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97537",
    "publishedAt": "2026-11-10T16:49:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97537-important-cockpit-podman-security",
      "article-a435431d",
      "a435431d",
      "rhsa-2026-97537-important-cockpit-podman-security-37d759",
      "rhsa-2026-97537-important-cockpit-podman-security-update"
    ]
  },
  {
    "slug": "sbom-ai-boms-drive-new-software-transparency-17fcb302",
    "title": "SBOM, AI BOMs Drive New Software Transparency",
    "summary": "Allan Friedman discussed how SBOMs and emerging AI BOMs are reshaping software supply‑chain visibility. He emphasized that knowing component contents is only the first step, and organizations must analyze SBOM data to detect risks. The podcast recommends adopting automated SBOM ingestion tools and integrating AI analysis to prioritize remediation efforts.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/software-transparency-is-changing-allan-friedman-on-sbom-ai-boms-and-what-comes-next/",
    "publishedAt": "2026-11-10T16:45:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sbom-ai-boms-drive-new-software-transparency",
      "article-17fcb302",
      "17fcb302",
      "sbom-ai-boms-drive-new-software-transparency-41f60e"
    ]
  },
  {
    "slug": "ivanti-issues-patches-for-endpoint-manager-csa-vul-f802dfce",
    "title": "Ivanti Issues Patches for Endpoint Manager, CSA Vulnerabilities",
    "summary": "Ivanti released patches for Endpoint Manager, Endpoint Manager Mobile, Sentry, and Cloud Services Application after discovering flaws enabling remote code execution, certificate tampering, data exposure, and service disruption. Two critical vulnerabilities in Endpoint Manager and Cloud Services Application pose the highest risk, requiring code execution privileges. Administrators should apply the updates immediately and verify certificate trust chains to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ivanti-security-flaws/",
    "publishedAt": "2026-11-10T16:43:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ivanti-issues-patches-for-endpoint-manager-csa-vul",
      "article-f802dfce",
      "f802dfce",
      "ivanti-issues-patches-for-endpoint-manager-csa-vul-18631b",
      "ivanti-issues-patches-for-endpoint-manager-csa-vulnerabiliti"
    ]
  },
  {
    "slug": "cve-2026-125271-aws-api-mcp-policy-bypass-7320861d",
    "title": "CVE‑2026‑125271: AWS API MCP Policy Bypass",
    "summary": "CVE‑2026‑125271 exposes a policy bypass in AWS API MCP Server caused by incorrect operation name normalization. The flaw allows actors to execute operations that the operator's security policy denies or requires elicitation for, potentially granting unauthorized API access. AWS has released a patch for affected versions (>=0.2.13); administrators should update immediately and review policy configurations.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-176-aws/",
    "publishedAt": "2026-11-10T16:42:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cve-2026-125271-aws-api-mcp-policy-bypass",
      "article-7320861d",
      "7320861d",
      "cve-2026-125271-aws-api-mcp-policy-bypass-4186db"
    ]
  },
  {
    "slug": "google-expands-gemini-4-carbon-access-09e43079",
    "title": "Google Expands Gemini 4 Carbon Access",
    "summary": "Google broadened access to its Gemini 4 Carbon platform, allowing paying developers and businesses to utilize the service. DeepMind agents built on Carbon verified libsignal security guarantees, demonstrating the platform’s capability to support secure messaging protocols. Developers should register for Carbon access through Google’s developer portal and review the updated documentation for integration guidelines.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/google-widens-gemini-4-carbon-access-after-ai-agents-verify-signal-code/",
    "publishedAt": "2026-11-10T16:42:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "google-expands-gemini-4-carbon-access",
      "article-09e43079",
      "09e43079",
      "google-expands-gemini-4-carbon-access-322942"
    ]
  },
  {
    "slug": "unbound-vulnerabilities-allow-remote-dos-attacks-ef5422b9",
    "title": "Unbound Vulnerabilities Allow Remote DoS Attacks",
    "summary": "Unbound DNS servers on Ubuntu 20.04–26.04 LTS contain CVE‑2026‑80225 and CVE‑2026‑81634 that enable remote denial‑of‑service. The flaws stem from improper handling of TCP connections and DNSSEC responses, allowing attackers to exhaust resources or crash the resolver. Ubuntu has issued patches for all affected releases; administrators should apply updates or upgrade to mitigate the DoS risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8946-2",
    "publishedAt": "2026-11-10T16:28:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "unbound-vulnerabilities-allow-remote-dos-attacks",
      "article-ef5422b9",
      "ef5422b9",
      "unbound-vulnerabilities-allow-remote-dos-attacks-7fbdd8"
    ]
  },
  {
    "slug": "xen-orchestra-auth-bypass-enables-vm-server-hijack-8e029e9c",
    "title": "Xen Orchestra Auth Bypass Enables VM Server Hijack",
    "summary": "A critical authentication bypass flaw in Xen Orchestra is actively exploited to grant admin privileges and seize XCP‑ng virtualization hosts. The flaw bypasses login checks, giving attackers full control over host management interfaces, and is used in multiple attacks. Xen Orchestra issued an urgent patch; administrators should apply it immediately and audit host authentication logs for anomalies.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/critical-xen-orchestra-auth-bypass-flaw-exploited-to-hijack-vm-servers/",
    "publishedAt": "2026-11-10T16:17:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xen-orchestra-auth-bypass-enables-vm-server-hijack",
      "article-8e029e9c",
      "8e029e9c",
      "xen-orchestra-auth-bypass-enables-vm-server-hijack-7915fe"
    ]
  },
  {
    "slug": "ca-certificates-java-jks-handling-fixed-a9bf56bf",
    "title": "ca-certificates-java JKS Handling Fixed",
    "summary": "Ubuntu Security Notice USN-9036-1 fixes a ca-certificates-java flaw where JKS entries were not removed when system CA certificates were deleted in some locales. The patch re‑synchronizes the JKS keystore with the system CA bundle, eliminating orphaned certificates that could disrupt trust chains. Apply the USN-9036-1 update via apt to ensure the keystore matches the current system certificates.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9036-1",
    "publishedAt": "2026-11-10T16:16:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ca-certificates-java-jks-handling-fixed",
      "article-a9bf56bf",
      "a9bf56bf",
      "ca-certificates-java-jks-handling-fixed-7e8848"
    ]
  },
  {
    "slug": "fireworks-reports-data-theft-during-october-breach-2d599cd7",
    "title": "Fireworks Reports Data Theft During October Breaches",
    "summary": "AI company Fireworks disclosed that hackers stole data and billing information during October incidents affecting a limited number of customer accounts. All affected customers were notified of the attack. The company should conduct forensic investigation to determine scope and implement enhanced access monitoring for sensitive billing records.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/ai-company-fireworks-says-hackers-stole-data-in-oct-attacks",
    "publishedAt": "2026-11-10T16:08:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fireworks-reports-data-theft-during-october-breach",
      "article-2d599cd7",
      "2d599cd7",
      "fireworks-reports-data-theft-during-october-breach-503fac",
      "fireworks-reports-data-theft-during-october-breaches"
    ]
  },
  {
    "slug": "rhsa-2026-97533-important-podman-security-bug-fix-a41b34f6",
    "title": "RHSA-2026:97533: Important: podman security, bug fix, and enhancement update",
    "summary": "An update for podman is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97533",
    "publishedAt": "2026-11-10T16:07:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97533-important-podman-security-bug-fix",
      "article-a41b34f6",
      "a41b34f6",
      "rhsa-2026-97533-important-podman-security-bug-fix-37d759",
      "rhsa-2026-97533-important-podman-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "barracuda-esg-flaws-enable-root-access-exploitatio-bd602d2c",
    "title": "Barracuda ESG Flaws Enable Root Access Exploitation",
    "summary": "Barracuda ESG is actively exploited via CVE‑2026‑116606, letting attackers combine two flaws to gain root access without authentication. The vulnerability permits unauthenticated remote code execution by manipulating internal configuration handling, enabling arbitrary command execution on the gateway. Barracuda has issued a patch; administrators should apply it immediately and enforce strict network segmentation around ESG appliances.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/barracuda-email-gateway-flaws/",
    "publishedAt": "2026-11-10T16:05:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "barracuda-esg-flaws-enable-root-access-exploitatio",
      "article-bd602d2c",
      "bd602d2c",
      "barracuda-esg-flaws-enable-root-access-exploitatio-3a0750",
      "barracuda-esg-flaws-enable-root-access-exploitation"
    ]
  },
  {
    "slug": "benchmarking-offensive-ai-agent-capabilities-6496bb80",
    "title": "Benchmarking Offensive AI Agent Capabilities",
    "summary": "The article presents a framework for assessing AI agents' cybersecurity capabilities, focusing on offensive testing. It outlines the construction of the Wiz Cyber Model Arena, detailing scenario design, adversarial objectives, and performance metrics. The authors recommend iterative validation, data collection, and continuous improvement to ensure robust evaluation for security teams.",
    "category": "General",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/cyber-model-arena-ai-benchmark",
    "publishedAt": "2026-11-10T16:03:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "benchmarking-offensive-ai-agent-capabilities",
      "article-6496bb80",
      "6496bb80",
      "benchmarking-offensive-ai-agent-capabilities-71b358"
    ]
  },
  {
    "slug": "attackers-exploit-ahsaycbs-flaws-to-deploy-sandbox-2710d747",
    "title": "Attackers Exploit AhsayCBS Flaws to Deploy Sandbox-Evading Python Backdoor",
    "summary": "Cybersecurity researchers have disclosed details of an attack that exploited two now-patched vulnerabilities in AhsayCBS to deliver a Python-based implant. The activity, observed by Huntress in October 2026, involves the exploitation of a chain comprising CVE-2026-105133 and CVE-2026-105134 to bypass authentication and execute arbitrary commands on affected systems.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/attackers-exploit-ahsaycbs-flaws-to.html",
    "publishedAt": "2026-11-10T16:00:55.000Z",
    "cves": [
      "CVE-2026-105133",
      "CVE-2026-105134"
    ],
    "additionalSources": [],
    "aliases": [
      "attackers-exploit-ahsaycbs-flaws-to-deploy-sandbox",
      "article-2710d747",
      "2710d747",
      "attackers-exploit-ahsaycbs-flaws-to-deploy-sandbox-711522",
      "attackers-exploit-ahsaycbs-flaws-to-deploy-sandbox-evading-p"
    ]
  },
  {
    "slug": "windows-file-server-elevation-vulnerability-cve-20-39028c79",
    "title": "Windows File Server Elevation Vulnerability CVE-2026-108415",
    "summary": "A Windows File Server Resource Management Service vulnerability (CVE-2026-108415) permits privilege escalation via untrusted pointer dereference. The flaw allows an attacker with physical access to dereference an untrusted pointer, enabling elevation of privileges without authentication, potentially compromising system integrity. Microsoft has released a patch; administrators should apply the update immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108415",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-108415"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-file-server-elevation-vulnerability-cve-20",
      "article-39028c79",
      "39028c79",
      "windows-file-server-elevation-vulnerability-cve-20-1ff730",
      "windows-file-server-elevation-vulnerability-cve-2026-108415"
    ]
  },
  {
    "slug": "windows-file-server-elevation-vulnerability-cve-20-360287c0",
    "title": "Windows File Server Elevation Vulnerability CVE-2026-108416",
    "summary": "A Windows File Server Resource Management Service vulnerability (CVE-2026-108416) permits privilege escalation via untrusted pointer dereference. The flaw allows an attacker with physical access to dereference an untrusted pointer, enabling elevation of privileges without authentication, potentially compromising system integrity. Microsoft has released a patch; administrators should apply the update immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108416",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-108416"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-file-server-elevation-vulnerability-cve-20",
      "article-360287c0",
      "360287c0",
      "windows-file-server-elevation-vulnerability-cve-20-1ff730",
      "windows-file-server-elevation-vulnerability-cve-2026-108416"
    ]
  },
  {
    "slug": "windows-gdi-vulnerability-exposes-data-via-out-of-05454bae",
    "title": "Windows GDI Vulnerability Exposes Data via Out‑of‑Bounds Read",
    "summary": "CVE‑2026‑108424 is an out‑of‑bounds read flaw in Windows GDI that permits remote attackers to read sensitive data over a network. The vulnerability arises from improper bounds checking during GDI object rendering, enabling an attacker to extract memory contents without authentication. Microsoft has released a patch in the 2026 security update; administrators should apply it promptly to mitigate the disclosure risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108424",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-gdi-vulnerability-exposes-data-via-out-of",
      "article-05454bae",
      "05454bae",
      "windows-gdi-vulnerability-exposes-data-via-out-of-1ff72f",
      "windows-gdi-vulnerability-exposes-data-via-out-of-bounds-rea"
    ]
  },
  {
    "slug": "local-information-disclosure-flaw-discovered-in-wi-af58654c",
    "title": "Local Information Disclosure Flaw Discovered in Windows Overlay Filter",
    "summary": "A local information disclosure vulnerability affects the Microsoft Windows Overlay Filter driver. Designated as CVE-2026-108409, the exposure of sensitive system information to an unauthorized control sphere enables local authenticated attackers to leak confidential data. Security administrators should apply Microsoft's security updates to prevent unauthorized local information exposure across enterprise systems.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108409",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-108409"
    ],
    "additionalSources": [],
    "aliases": [
      "local-information-disclosure-flaw-discovered-in-wi",
      "article-af58654c",
      "af58654c",
      "local-information-disclosure-flaw-discovered-in-wi-1ff730",
      "local-information-disclosure-flaw-discovered-in-windows-over"
    ]
  },
  {
    "slug": "network-information-disclosure-bug-impacts-windows-43391aec",
    "title": "Network Information Disclosure Bug Impacts Windows Remote Desktop Client",
    "summary": "A network-based information disclosure vulnerability impacts the Microsoft Windows Remote Desktop Client software. Identified as CVE-2026-108417, an out-of-bounds read flaw allows unauthorized remote attackers to expose sensitive system data across the network connection. Organizations must deploy the latest Microsoft software patches to protect Remote Desktop endpoints against unauthorized information leakage.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108417",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-108417"
    ],
    "additionalSources": [],
    "aliases": [
      "network-information-disclosure-bug-impacts-windows",
      "article-43391aec",
      "43391aec",
      "network-information-disclosure-bug-impacts-windows-1ff730",
      "network-information-disclosure-bug-impacts-windows-remote-de"
    ]
  },
  {
    "slug": "windows-ad-cs-bypass-exploits-certificate-validati-12d1c61c",
    "title": "Windows AD CS Bypass Exploits Certificate Validation Flaw",
    "summary": "CVE-2026-105590 lets an authorized attacker bypass a security feature in Windows Active Directory Certificate Services through improper certificate validation over a network. The flaw permits issuance or modification of certificates without proper validation, enabling man‑in‑the‑middle attacks or unauthorized domain access. Microsoft issued a patch for Windows 10, 11, and Server 2022; administrators should apply it and review certificate issuance policies.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105590",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-105590"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-ad-cs-bypass-exploits-certificate-validati",
      "article-12d1c61c",
      "12d1c61c",
      "windows-ad-cs-bypass-exploits-certificate-validati-1ff888",
      "windows-ad-cs-bypass-exploits-certificate-validation-flaw"
    ]
  },
  {
    "slug": "windows-dhcp-server-local-privilege-escalation-8ffa94ab",
    "title": "Windows DHCP Server Local Privilege Escalation",
    "summary": "Microsoft disclosed CVE‑2026‑105588, a missing authentication flaw in Windows DHCP Server that permits an authorized attacker to elevate privileges locally. The vulnerability arises from an unprotected critical function that bypasses authentication checks, enabling local privilege escalation without requiring additional credentials. Microsoft recommends applying the available patch via Windows Update or the Security Update Guide to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105588",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-dhcp-server-local-privilege-escalation",
      "article-8ffa94ab",
      "8ffa94ab",
      "windows-dhcp-server-local-privilege-escalation-1ff888"
    ]
  },
  {
    "slug": "windows-wireless-networking-local-privilege-escala-53663862",
    "title": "Windows Wireless Networking Local Privilege Escalation Vulnerability",
    "summary": "Microsoft disclosed CVE‑2026‑105589, a use‑after‑free flaw in Windows Wireless Networking that permits an authorized attacker to elevate privileges locally. The flaw occurs when a freed memory object is accessed again, bypassing authentication checks and enabling local privilege escalation. Microsoft recommends applying the patch available through Windows Update or the Security Update Guide to prevent exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105589",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-wireless-networking-local-privilege-escala",
      "article-53663862",
      "53663862",
      "windows-wireless-networking-local-privilege-escala-1ff888",
      "windows-wireless-networking-local-privilege-escalation-vulne"
    ]
  },
  {
    "slug": "microsoft-windows-scsi-class-elevation-vulnerabili-31d55636",
    "title": "Microsoft Windows SCSI Class Elevation Vulnerability",
    "summary": "A null pointer dereference in Microsoft Windows SCSI Class System File permits an authorized attacker to elevate privileges locally. The flaw originates from improper null checking during SCSI command processing, enabling local privilege escalation without authentication. Microsoft has released a patch in the latest cumulative update; administrators should apply it immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105586",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-windows-scsi-class-elevation-vulnerabili",
      "article-31d55636",
      "31d55636",
      "microsoft-windows-scsi-class-elevation-vulnerabili-1ff888",
      "microsoft-windows-scsi-class-elevation-vulnerability"
    ]
  },
  {
    "slug": "microsoft-windows-ole-db-privilege-escalation-vuln-6a30ab5b",
    "title": "Microsoft Windows OLE DB Privilege Escalation Vulnerability",
    "summary": "A heap-based buffer overflow in Windows OLE DB allows an authorized attacker to elevate privileges locally. The overflow occurs when unvalidated OLE DB parameters are copied into a fixed-size buffer, enabling local privilege escalation. Microsoft has issued a patch in the latest cumulative update; users should install it promptly to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105587",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "microsoft-windows-ole-db-privilege-escalation-vuln",
      "article-6a30ab5b",
      "6a30ab5b",
      "microsoft-windows-ole-db-privilege-escalation-vuln-1ff888",
      "microsoft-windows-ole-db-privilege-escalation-vulnerability"
    ]
  },
  {
    "slug": "windows-dwm-core-library-allows-local-privilege-es-60a2c159",
    "title": "Windows DWM Core Library allows local privilege escalation",
    "summary": "A flaw in Windows DWM Core Library permits an authorized attacker to elevate privileges locally via an invalid pointer or reference. The vulnerability is triggered by malformed input to the DWM component, potentially enabling privilege escalation without authentication. Microsoft has released a patch for Windows 10 and 11; affected systems should install the update immediately.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105583",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-dwm-core-library-allows-local-privilege-es",
      "article-60a2c159",
      "60a2c159",
      "windows-dwm-core-library-allows-local-privilege-es-1ff888",
      "windows-dwm-core-library-allows-local-privilege-escalation"
    ]
  },
  {
    "slug": "windows-inventory-backup-leaks-local-information-v-a4e42428",
    "title": "Windows Inventory Backup leaks local information via format string",
    "summary": "An externally-controlled format string in Windows Inventory Backup allows an authorized attacker to disclose local information. The flaw arises when user-supplied data is passed to a vulnerable logging function, exposing sensitive data without authentication. Microsoft has issued a patch for Windows 10 and 11; affected systems should apply the update promptly.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105584",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-inventory-backup-leaks-local-information-v",
      "article-a4e42428",
      "a4e42428",
      "windows-inventory-backup-leaks-local-information-v-1ff888",
      "windows-inventory-backup-leaks-local-information-via-format-"
    ]
  },
  {
    "slug": "microsoft-wdac-ole-db-provider-remote-code-executi-7616c0c9",
    "title": "Microsoft WDAC OLE DB Provider Remote Code Execution Vulnerability",
    "summary": "A heap-based buffer overflow in Microsoft WDAC OLE DB provider for SQL permits unauthorized remote code execution. The flaw, identified as CVE-2026-85839, allows attackers to trigger arbitrary code over the network, potentially compromising affected systems. Microsoft has released a patch; administrators should apply the update immediately to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-85839",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-85839"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-wdac-ole-db-provider-remote-code-executi",
      "article-7616c0c9",
      "7616c0c9",
      "microsoft-wdac-ole-db-provider-remote-code-executi-743ff6",
      "microsoft-wdac-ole-db-provider-remote-code-execution-vulnera"
    ]
  },
  {
    "slug": "windows-dwm-core-library-local-privilege-escalatio-b8a3a242",
    "title": "Windows DWM Core Library Local Privilege Escalation Vulnerability",
    "summary": "A flaw in Windows DWM Core Library permits an authorized attacker to elevate privileges locally. The vulnerability, identified as CVE-2026-105582, arises from an invalid pointer or reference, enabling privilege escalation. Microsoft has issued a patch; administrators should apply the update promptly to prevent local privilege escalation on affected systems and verify system integrity.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-105582",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-105582"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-dwm-core-library-local-privilege-escalatio",
      "article-b8a3a242",
      "b8a3a242",
      "windows-dwm-core-library-local-privilege-escalatio-1ff888",
      "windows-dwm-core-library-local-privilege-escalation-vulnerab"
    ]
  },
  {
    "slug": "windows-shell-cve-2026-102868-enables-local-info-d-a64b47b5",
    "title": "Windows Shell CVE-2026-102868 Enables Local Info Disclosure",
    "summary": "CVE-2026-102868 exposes sensitive system data in Windows Shell to an authorized attacker via local control sphere. The flaw permits local information disclosure without authentication, enabling attackers to read privileged data; no remote code execution or active exploitation reported. Microsoft has issued a patch in the latest cumulative update; administrators should apply the update promptly to mitigate the disclosure.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-102868",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-102868"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-shell-cve-2026-102868-enables-local-info-d",
      "article-a64b47b5",
      "a64b47b5",
      "windows-shell-cve-2026-102868-enables-local-info-d-1ff9da",
      "windows-shell-cve-2026-102868-enables-local-info-disclosure"
    ]
  },
  {
    "slug": "sql-server-heap-overflow-enables-authorized-remote-abe4be01",
    "title": "SQL Server Heap Overflow Enables Authorized Remote Code Execution",
    "summary": "A heap-based buffer overflow in Microsoft SQL Server permits an authorized attacker to execute code over a network. The flaw, identified as CVE-2026-94511, allows authenticated users to trigger arbitrary code execution, potentially compromising database integrity and confidentiality. Microsoft has released a patch; administrators should apply the update immediately and restrict privileged access to mitigate exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-94511",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-94511"
    ],
    "additionalSources": [],
    "aliases": [
      "sql-server-heap-overflow-enables-authorized-remote",
      "article-abe4be01",
      "abe4be01",
      "sql-server-heap-overflow-enables-authorized-remote-74325e",
      "sql-server-heap-overflow-enables-authorized-remote-code-exec"
    ]
  },
  {
    "slug": "microsoft-data-sqlclient-capture-replay-bypass-exp-d59fc8a0",
    "title": "Microsoft.Data.SqlClient Capture-Replay Bypass Exposes Data",
    "summary": "CVE-2026-62903 exposes an authentication bypass in Microsoft.Data.SqlClient that lets an unauthorized attacker capture and replay credentials to read database data over a network. The flaw permits reading sensitive information without valid authentication, risking exposure of confidential records. Microsoft has released a patch; administrators should update the client library and enforce strict credential handling.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-62903",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-62903"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-data-sqlclient-capture-replay-bypass-exp",
      "article-d59fc8a0",
      "d59fc8a0",
      "microsoft-data-sqlclient-capture-replay-bypass-exp-745d7e",
      "microsoft-data-sqlclient-capture-replay-bypass-exposes-data"
    ]
  },
  {
    "slug": "wdac-ole-db-overflow-enables-unauthorized-remote-c-496a69ce",
    "title": "WDAC OLE DB Overflow Enables Unauthorized Remote Code Execution",
    "summary": "A heap-based buffer overflow in Microsoft WDAC OLE DB provider for SQL, CVE-2026-85838, allows an unauthorized attacker to execute code over a network. The flaw permits arbitrary code execution without authentication, potentially compromising database servers and exposing sensitive data. Microsoft has issued a patch; administrators should apply the update promptly and restrict privileged access to mitigate exploitation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-85838",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-85838"
    ],
    "additionalSources": [],
    "aliases": [
      "wdac-ole-db-overflow-enables-unauthorized-remote-c",
      "article-496a69ce",
      "496a69ce",
      "wdac-ole-db-overflow-enables-unauthorized-remote-c-743ff6",
      "wdac-ole-db-overflow-enables-unauthorized-remote-code-execut"
    ]
  },
  {
    "slug": "microsoft-hevc-codec-heap-overflow-enables-local-r-b5a965e5",
    "title": "Microsoft HEVC Codec Heap Overflow Enables Local RCE",
    "summary": "Microsoft disclosed a heap-based buffer overflow in Windows HEVC Video Extensions that permits local code execution. The flaw, CVE-2026-114167, lets an unauthenticated attacker run arbitrary code if the codec is loaded. Microsoft advises applying the latest Windows update that patches the HEVC codec; disabling the codec is a temporary workaround.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114167",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-114167"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-hevc-codec-heap-overflow-enables-local-r",
      "article-b5a965e5",
      "b5a965e5",
      "microsoft-hevc-codec-heap-overflow-enables-local-r-1feaf4",
      "microsoft-hevc-codec-heap-overflow-enables-local-rce"
    ]
  },
  {
    "slug": "windows-raw-image-extension-buffer-overflow-enable-0228cac1",
    "title": "Windows Raw Image Extension Buffer Overflow Enables Remote RCE",
    "summary": "Microsoft identified a heap-based buffer overflow in the Windows Raw Image Extension that allows remote code execution. The vulnerability, CVE-2026-114169, permits an unauthenticated attacker to run arbitrary code on the target system via network traffic. Microsoft recommends installing the latest Windows update that patches the Raw Image Extension; disabling the extension is a temporary mitigation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114169",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-114169"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-raw-image-extension-buffer-overflow-enable",
      "article-0228cac1",
      "0228cac1",
      "windows-raw-image-extension-buffer-overflow-enable-1feaf4",
      "windows-raw-image-extension-buffer-overflow-enables-remote-r"
    ]
  },
  {
    "slug": "windows-kernel-use-after-free-enables-local-privil-113bec46",
    "title": "Windows Kernel Use-After-Free Enables Local Privilege Escalation",
    "summary": "Microsoft disclosed a use-after-free flaw in the Windows Kernel that permits local privilege escalation immediately. The vulnerability, CVE-2026-114170, allows an authorized attacker to gain higher privileges on the affected system. Microsoft recommends applying the latest Windows update that patches the kernel flaw; disabling the affected feature is a temporary workaround.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114170",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-114170"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-kernel-use-after-free-enables-local-privil",
      "article-113bec46",
      "113bec46",
      "windows-kernel-use-after-free-enables-local-privil-1feaf4",
      "windows-kernel-use-after-free-enables-local-privilege-escala"
    ]
  },
  {
    "slug": "xbox-remote-code-execution-via-heap-overflow-21794360",
    "title": "Xbox Remote Code Execution via Heap Overflow",
    "summary": "A heap-based buffer overflow in Microsoft Xbox firmware permits an unauthenticated attacker to execute arbitrary code over a network. The flaw arises from unchecked memory allocation during packet parsing, enabling remote code execution without credentials. Microsoft has released an out‑of‑band patch; users should apply the update immediately to mitigate the vulnerability.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-66801",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "xbox-remote-code-execution-via-heap-overflow",
      "article-21794360",
      "21794360",
      "xbox-remote-code-execution-via-heap-overflow-745bb1"
    ]
  },
  {
    "slug": "hevc-codec-integer-underflow-enables-remote-rce-3ad64dbc",
    "title": "HEVC Codec Integer Underflow Enables Remote RCE",
    "summary": "An integer underflow in the Windows HEVC Video Extensions codec library allows an unauthenticated attacker to execute code over a network. The vulnerability occurs when the decoder miscalculates buffer sizes during frame decoding, leading to a remote code execution path. Microsoft has issued a patch; administrators should deploy the update promptly to close the flaw.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114164",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hevc-codec-integer-underflow-enables-remote-rce",
      "article-3ad64dbc",
      "3ad64dbc",
      "hevc-codec-integer-underflow-enables-remote-rce-1feaf4"
    ]
  },
  {
    "slug": "hevc-codec-heap-overflow-allows-local-rce-a3f2d730",
    "title": "HEVC Codec Heap Overflow Allows Local RCE",
    "summary": "A heap-based buffer overflow in the Windows HEVC Video Extensions codec library permits an unauthenticated attacker to execute code locally. The flaw is triggered by malformed video frames that cause the decoder to write beyond allocated memory, enabling local code execution. Microsoft has released a patch; users should apply the update to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-114165",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hevc-codec-heap-overflow-allows-local-rce",
      "article-a3f2d730",
      "a3f2d730",
      "hevc-codec-heap-overflow-allows-local-rce-1feaf4"
    ]
  },
  {
    "slug": "microsoft-powerpoint-rce-cve-2026-55123-acknowledg-1e1c334d",
    "title": "Microsoft PowerPoint RCE CVE-2026-55123 Acknowledged",
    "summary": "Microsoft acknowledged a remote code execution flaw in PowerPoint identified as CVE-2026-55123, affecting all supported versions. The vulnerability permits arbitrary code execution via crafted presentation files, but no active exploitation or public PoC has been reported. Microsoft has issued an informational update; users should apply the forthcoming patch when available and monitor advisories for remediation guidance.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-55123",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-55123"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-powerpoint-rce-cve-2026-55123-acknowledg",
      "article-1e1c334d",
      "1e1c334d",
      "microsoft-powerpoint-rce-cve-2026-55123-acknowledg-746a57",
      "microsoft-powerpoint-rce-cve-2026-55123-acknowledged"
    ]
  },
  {
    "slug": "microsoft-refs-rce-vulnerability-cve-2026-102227-624b1899",
    "title": "Microsoft ReFS RCE Vulnerability CVE-2026-102227",
    "summary": "Microsoft disclosed CVE-2026-102227, a remote code execution flaw in Windows ReFS that could allow attackers to run arbitrary code via malformed metadata. The flaw stems from improper validation of ReFS metadata, enabling unauthenticated exploitation with a CVSS score of 9.8. Microsoft issued an out‑of‑band patch; administrators should apply it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-102227",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-102227"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-refs-rce-vulnerability-cve-2026-102227",
      "article-624b1899",
      "624b1899",
      "microsoft-refs-rce-vulnerability-cve-2026-102227-1ff9f1"
    ]
  },
  {
    "slug": "microsoft-office-word-rce-cve-2026-108447-7e433417",
    "title": "Microsoft Office Word RCE CVE-2026-108447",
    "summary": "Microsoft announced CVE-2026-108447, a remote code execution vulnerability in Office Word that could be triggered by a malicious document. The flaw results from unsafe handling of Rich Text Format (RTF) content, allowing unauthenticated code execution with a CVSS score of 9.5. Microsoft released an out‑of‑band patch; users should update Office immediately to prevent exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108447",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-108447"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-office-word-rce-cve-2026-108447",
      "article-7e433417",
      "7e433417",
      "microsoft-office-word-rce-cve-2026-108447-1ff72f"
    ]
  },
  {
    "slug": "windows-kernel-information-disclosure-cve-2026-700-8def015c",
    "title": "Windows Kernel Information Disclosure CVE-2026-70017",
    "summary": "Microsoft disclosed CVE-2026-70017, a kernel‑mode information disclosure flaw in Windows that could expose sensitive data via the Secure Kernel API. The vulnerability arises from improper bounds checking during kernel data retrieval, allowing local attackers to read privileged memory with a CVSS score of 7.2. Microsoft issued a patch; administrators should apply it promptly to mitigate the information disclosure risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-70017",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-70017"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-kernel-information-disclosure-cve-2026-700",
      "article-8def015c",
      "8def015c",
      "windows-kernel-information-disclosure-cve-2026-700-745071",
      "windows-kernel-information-disclosure-cve-2026-70017"
    ]
  },
  {
    "slug": "microsoft-acknowledges-windows-kernel-privilege-es-b04c91c2",
    "title": "Microsoft Acknowledges Windows Kernel Privilege Escalation",
    "summary": "Microsoft acknowledges CVE-2026-69898, a critical Windows kernel privilege escalation vulnerability that could allow local users to gain elevated privileges. The update is purely informational, with no evidence of active exploitation, public proof‑of‑concept, or a released patch. No remediation guidance is provided, and security teams should monitor Microsoft advisories for future updates.",
    "category": "CVE",
    "severity": "LOW",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-69898",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-69898"
    ],
    "additionalSources": [],
    "aliases": [
      "microsoft-acknowledges-windows-kernel-privilege-es",
      "article-b04c91c2",
      "b04c91c2",
      "microsoft-acknowledges-windows-kernel-privilege-es-745a53",
      "microsoft-acknowledges-windows-kernel-privilege-escalation"
    ]
  },
  {
    "slug": "azure-devops-server-rce-exploited-via-improper-aut-d5a77fc2",
    "title": "Azure DevOps Server RCE Exploited via Improper Auth",
    "summary": "CVE-2026-109467 is a remote code execution flaw in Azure DevOps Server that lets authenticated attackers run arbitrary code over the network. The issue arises from improper authentication handling in the REST API, allowing credential bypass and code execution with elevated privileges. Microsoft released a patch; administrators should apply it immediately and audit access controls to mitigate risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109467",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-109467"
    ],
    "additionalSources": [],
    "aliases": [
      "azure-devops-server-rce-exploited-via-improper-aut",
      "article-d5a77fc2",
      "d5a77fc2",
      "azure-devops-server-rce-exploited-via-improper-aut-1ff6bb",
      "azure-devops-server-rce-exploited-via-improper-auth"
    ]
  },
  {
    "slug": "heif-image-extensions-vulnerability-enables-local-10305511",
    "title": "HEIF Image Extensions Vulnerability Enables Local RCE",
    "summary": "A use‑after‑free flaw in Microsoft HEIF Image Extensions lets an unauthorized attacker execute code locally on Windows. CVE‑2026‑100204 exploits heap corruption triggered by a crafted HEIF file, enabling local code execution without authentication. Microsoft released a patch in the latest cumulative update; apply it immediately or disable HEIF processing as a temporary fix.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-100204",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "heif-image-extensions-vulnerability-enables-local",
      "article-10305511",
      "10305511",
      "heif-image-extensions-vulnerability-enables-local-1ffada",
      "heif-image-extensions-vulnerability-enables-local-rce"
    ]
  },
  {
    "slug": "windows-kernel-use-after-free-allows-local-privile-597d1e7b",
    "title": "Windows Kernel Use-After-Free Allows Local Privilege Escalation",
    "summary": "A use‑after‑free bug in the Windows Kernel allows an authorized attacker to elevate privileges locally on affected systems. The flaw, identified as CVE‑2026‑108403, arises from improper memory handling during kernel operations, enabling local privilege escalation without authentication. Microsoft has issued a patch in the latest cumulative update; administrators should apply it promptly to prevent privilege escalation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108403",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-kernel-use-after-free-allows-local-privile",
      "article-597d1e7b",
      "597d1e7b",
      "windows-kernel-use-after-free-allows-local-privile-1ff730",
      "windows-kernel-use-after-free-allows-local-privilege-escalat"
    ]
  },
  {
    "slug": "odbc-driver-heap-overflow-enables-remote-code-exec-38a3b1c9",
    "title": "ODBC Driver Heap Overflow Enables Remote Code Execution",
    "summary": "A heap‑based buffer overflow in the Microsoft ODBC Driver permits an unauthorized attacker to execute code over a network. CVE‑2026‑108411 exploits memory corruption triggered by malformed ODBC requests, enabling remote code execution without authentication. Microsoft released a patch in the latest cumulative update; apply it immediately or restrict ODBC traffic as a temporary workaround.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-108411",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "odbc-driver-heap-overflow-enables-remote-code-exec",
      "article-38a3b1c9",
      "38a3b1c9",
      "odbc-driver-heap-overflow-enables-remote-code-exec-1ff730",
      "odbc-driver-heap-overflow-enables-remote-code-execution"
    ]
  },
  {
    "slug": "windows-dns-rce-via-deserialization-vulnerability-e4c11f4e",
    "title": "Windows DNS RCE via Deserialization Vulnerability",
    "summary": "Microsoft disclosed CVE-2026-109463, a deserialization flaw in Windows DNS enabling unauthenticated remote code execution over the network. Attackers can craft malicious DNS responses to trigger arbitrary code execution on affected systems. Microsoft released an emergency patch addressing this critical vulnerability, and administrators should deploy it promptly to prevent exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Microsoft MSRC",
    "sourceUrl": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-109463",
    "publishedAt": "2026-11-10T16:00:00.000Z",
    "cves": [
      "CVE-2026-109463"
    ],
    "additionalSources": [],
    "aliases": [
      "windows-dns-rce-via-deserialization-vulnerability",
      "article-e4c11f4e",
      "e4c11f4e",
      "windows-dns-rce-via-deserialization-vulnerability-1ff6bb"
    ]
  },
  {
    "slug": "binance-warns-of-ios-flaw-that-could-leak-crypto-w-752325ce",
    "title": "Binance warns of iOS flaw that could leak crypto wallet secrets",
    "summary": "Binance is warning about a vulnerability in Apple's iOS 26.7.1, 27.0.1, and 27.2 that could allow third-party apps to read private files stored by other apps, including cryptocurrency seed phrases, secret keys, and login credentials.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/binance-warns-of-ios-flaw-that-could-leak-crypto-wallet-secrets/",
    "publishedAt": "2026-11-10T15:59:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-warns-of-ios-flaw-that-could-leak-crypto-w",
      "article-752325ce",
      "752325ce",
      "binance-warns-of-ios-flaw-that-could-leak-crypto-w-3c2f2c",
      "binance-warns-of-ios-flaw-that-could-leak-crypto-wallet-secr"
    ]
  },
  {
    "slug": "one-identity-releases-safeguard-9-0-privileged-acc-3b5508b9",
    "title": "One Identity Releases Safeguard 9.0 Privileged Access Platform",
    "summary": "One Identity launched Safeguard 9.0 to update its enterprise privileged access management architecture. The release targets privilege management operational challenges by streamlining infrastructure management and reducing administrative overhead within enterprise identity environments. Organizations deploying privileged access controls can implement version 9.0 to simplify administrative workflows and strengthen identity management infrastructure.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/one-identity-unveils-safeguard-9-0-for-simpler-pam/",
    "publishedAt": "2026-11-10T15:59:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "one-identity-releases-safeguard-9-0-privileged-acc",
      "article-3b5508b9",
      "3b5508b9",
      "one-identity-releases-safeguard-9-0-privileged-acc-6b48ea",
      "one-identity-releases-safeguard-9-0-privileged-access-platfo"
    ]
  },
  {
    "slug": "rhsa-2026-97344-important-rhc-worker-playbook-secu-2f648fa6",
    "title": "RHSA-2026:97344: Important: rhc-worker-playbook security, bug fix, and enhancement update",
    "summary": "An update for rhc-worker-playbook is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97344",
    "publishedAt": "2026-11-10T15:58:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97344-important-rhc-worker-playbook-secu",
      "article-2f648fa6",
      "2f648fa6",
      "rhsa-2026-97344-important-rhc-worker-playbook-secu-37d760",
      "rhsa-2026-97344-important-rhc-worker-playbook-security-bug-f"
    ]
  },
  {
    "slug": "blind-eagle-uses-fake-court-notices-to-deliver-rat-62d139ff",
    "title": "Blind Eagle Uses Fake Court Notices to Deliver RAT Across Latin America",
    "summary": "The threat actor Blind Eagle launched a campaign targeting Latin American organizations using judicial and administrative-themed phishing lures resembling court notifications and fiscalía notices. The campaign delivers a remote access trojan sharing lineage with AsyncRAT and DCRat through Portuguese and Spanish-language lures. Organizations should implement email filtering for domain-spoofed legal correspondence and require multi-factor authentication for remote access.",
    "category": "Nation State",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/blind-eagle-uses-fake-court-notices-to.html",
    "publishedAt": "2026-11-10T15:58:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "blind-eagle-uses-fake-court-notices-to-deliver-rat",
      "article-62d139ff",
      "62d139ff",
      "blind-eagle-uses-fake-court-notices-to-deliver-rat-713e62",
      "blind-eagle-uses-fake-court-notices-to-deliver-rat-across-la"
    ]
  },
  {
    "slug": "one-identity-updates-active-roles-8-6-active-direc-b223cfaf",
    "title": "One Identity Updates Active Roles 8.6 Active Directory Tool",
    "summary": "One Identity released Active Roles version 8.6 to enhance authentication mechanisms and administration within Active Directory environments. The update delivers cumulative security enhancements, expanded API integration capabilities, and flexible authentication models for managing enterprise directory services. System administrators should deploy Active Roles 8.6 to improve directory management security and leverage updated API capabilities for identity administration.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/one-identity-active-roles-8-6-security-administration/",
    "publishedAt": "2026-11-10T15:50:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "one-identity-updates-active-roles-8-6-active-direc",
      "article-b223cfaf",
      "b223cfaf",
      "one-identity-updates-active-roles-8-6-active-direc-84e6ff",
      "one-identity-updates-active-roles-8-6-active-directory-tool"
    ]
  },
  {
    "slug": "one-identity-releases-identity-manager-10-0-lts-2dce62bf",
    "title": "One Identity Releases Identity Manager 10.0 LTS",
    "summary": "One Identity has released Identity Manager 10.0 LTS, a major platform update introducing browser-based administration, AI-assisted insights, and streamlined automation for identity governance workflows. The update modernizes the user experience with a redesigned web interface and intelligent operational assistance. Organizations should evaluate migration readiness and validate compatibility with existing integration modules before deployment.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/one-identity-unveils-identity-manager-10-0-lts-with-ai-and-modern-ux/",
    "publishedAt": "2026-11-10T15:49:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "one-identity-releases-identity-manager-10-0-lts",
      "article-2dce62bf",
      "2dce62bf",
      "one-identity-releases-identity-manager-10-0-lts-6d5792"
    ]
  },
  {
    "slug": "spyware-infections-rise-among-average-users-183a61b2",
    "title": "Spyware Infections Rise Among Average Users",
    "summary": "A recent report indicates that cybercriminals are increasingly deploying spyware on consumer devices, targeting non‑enterprise users. The malware leverages social engineering and bundled software to gain persistent access, enabling data exfiltration and remote control. Security teams should enforce application whitelisting, educate users on safe download practices, and deploy endpoint detection solutions to mitigate the threat.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/spyware-cyber-crime-iverify",
    "publishedAt": "2026-11-10T15:45:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "spyware-infections-rise-among-average-users",
      "article-183a61b2",
      "183a61b2",
      "spyware-infections-rise-among-average-users-14c3af"
    ]
  },
  {
    "slug": "rhsa-2026-97238-important-cockpit-machines-securit-89841513",
    "title": "RHSA-2026:97238: Important: cockpit-machines security, bug fix, and enhancement update",
    "summary": "An update for cockpit-machines is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97238",
    "publishedAt": "2026-11-10T15:38:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97238-important-cockpit-machines-securit",
      "article-89841513",
      "89841513",
      "rhsa-2026-97238-important-cockpit-machines-securit-37d764",
      "rhsa-2026-97238-important-cockpit-machines-security-bug-fix-"
    ]
  },
  {
    "slug": "fireworks-ai-breach-impacts-customer-datasets-and-579dbb4a",
    "title": "Fireworks AI Breach Impacts Customer Datasets and Model Weights",
    "summary": "Fireworks AI disclosed a security incident affecting account and billing information, alongside secrets, datasets, and incomplete models for a limited set of accounts. The company detected unauthorized internal use of its systems, exposing customer data including model weights and Notion AI chat records. Organizations using Fireworks AI should audit access logs and rotate any exposed credentials immediately.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/fireworks-ai-breach-widens-to-expose.html",
    "publishedAt": "2026-11-10T15:33:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fireworks-ai-breach-impacts-customer-datasets-and",
      "article-579dbb4a",
      "579dbb4a",
      "fireworks-ai-breach-impacts-customer-datasets-and-51109a",
      "fireworks-ai-breach-impacts-customer-datasets-and-model-weig"
    ]
  },
  {
    "slug": "ivanti-releases-monthly-security-update-7d8ceb82",
    "title": "Ivanti Releases Monthly Security Update",
    "summary": "Ivanti publishes monthly security patches on the second Tuesday, applying fixes discovered through AI‑driven vulnerability analysis. The update cycle incorporates advanced LLMs to detect issues missed by traditional tools, emphasizing proactive vulnerability management. Security teams should apply the latest Ivanti patches promptly and review release notes for newly identified vulnerabilities.",
    "category": "General",
    "severity": "LOW",
    "source": "Ivanti Security Advisories",
    "sourceUrl": "https://www.ivanti.com/blog/november-2026-security-update",
    "publishedAt": "2026-11-10T15:33:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ivanti-releases-monthly-security-update",
      "article-7d8ceb82",
      "7d8ceb82",
      "ivanti-releases-monthly-security-update-153446"
    ]
  },
  {
    "slug": "red-hat-releases-bind-security-update-for-rhel9-ac091820",
    "title": "Red Hat Releases BIND Security Update for RHEL9",
    "summary": "An update for BIND on Red Hat Enterprise Linux 9 addresses multiple security vulnerabilities, with CVSS base scores available via CVE links. The vulnerabilities are linked to CVE references and carry moderate severity scores, but no active exploitation has been reported. Red Hat has released the patch, and users should apply the update to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97586",
    "publishedAt": "2026-11-10T15:29:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-bind-security-update-for-rhel9",
      "article-ac091820",
      "ac091820",
      "red-hat-releases-bind-security-update-for-rhel9-37d758"
    ]
  },
  {
    "slug": "rhsa-2026-97299-moderate-pcp-security-bug-fix-and-b74c76f7",
    "title": "RHSA-2026:97299: Moderate: pcp security, bug fix, and enhancement update",
    "summary": "An update for pcp is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97299",
    "publishedAt": "2026-11-10T15:25:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97299-moderate-pcp-security-bug-fix-and",
      "article-b74c76f7",
      "b74c76f7",
      "rhsa-2026-97299-moderate-pcp-security-bug-fix-and-37d764",
      "rhsa-2026-97299-moderate-pcp-security-bug-fix-and-enhancemen"
    ]
  },
  {
    "slug": "red-hat-issues-containernetworking-plugins-securit-aa093ca2",
    "title": "Red Hat Issues Containernetworking‑Plugins Security Update",
    "summary": "An update for containernetworking‑plugins on Red Hat Enterprise Linux 9 addresses several security vulnerabilities, with CVSS base scores available via CVE links. The vulnerabilities carry important severity scores, but no active exploitation has been reported. Red Hat has released the patch, and users should apply the update to mitigate the identified risks.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97644",
    "publishedAt": "2026-11-10T15:23:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-containernetworking-plugins-securit",
      "article-aa093ca2",
      "aa093ca2",
      "red-hat-issues-containernetworking-plugins-securit-37d755",
      "red-hat-issues-containernetworking-plugins-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-97284-important-git-lfs-security-update-090e4bb8",
    "title": "RHSA-2026:97284: Important: git-lfs security update",
    "summary": "An update for git-lfs is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97284",
    "publishedAt": "2026-11-10T15:20:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97284-important-git-lfs-security-update",
      "article-090e4bb8",
      "090e4bb8",
      "rhsa-2026-97284-important-git-lfs-security-update-37d764"
    ]
  },
  {
    "slug": "rhsa-2026-97561-important-crun-security-bug-fix-an-81ee0c21",
    "title": "RHSA-2026:97561: Important: crun security, bug fix, and enhancement update",
    "summary": "An update for crun is now available for Red Hat Enterprise Linux 9. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97561",
    "publishedAt": "2026-11-10T15:17:57.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97561-important-crun-security-bug-fix-an",
      "article-81ee0c21",
      "81ee0c21",
      "rhsa-2026-97561-important-crun-security-bug-fix-an-37d759",
      "rhsa-2026-97561-important-crun-security-bug-fix-and-enhancem"
    ]
  },
  {
    "slug": "researcher-bypasses-meta-smart-glasses-safeguard-ca7e9717",
    "title": "Researcher Bypasses Meta Smart Glasses Safeguard",
    "summary": "A researcher demonstrated that Meta smart glasses' software restriction policy could be bypassed to execute arbitrary code on the device. The vulnerability allows an attacker running on the device to override intended sandboxing protections. Users should apply manufacturer firmware updates as soon as available to remediate this code execution path.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/researcher-bypassed-meta-smart-glasses-safeguards-to-run-her-own-code",
    "publishedAt": "2026-11-10T15:09:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "researcher-bypasses-meta-smart-glasses-safeguard",
      "article-ca7e9717",
      "ca7e9717",
      "researcher-bypasses-meta-smart-glasses-safeguard-2c9fe4"
    ]
  },
  {
    "slug": "ransomware-recovery-becomes-client-retention-metri-3e699a1c",
    "title": "Ransomware Recovery Becomes Client Retention Metric",
    "summary": "Kaseya finds that ransomware recovery delays, poor communication, and unexpected costs erode MSP client trust, making recovery performance a retention metric. Disconnected recovery tools create these problems, while integrated workflows improve response times, transparency, and client satisfaction. MSPs should adopt unified recovery solutions to reduce delays, enhance communication, and maintain client loyalty during ransomware incidents.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/ransomware-recovery-is-now-a-client-retention-metric/",
    "publishedAt": "2026-11-10T15:01:11.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ransomware-recovery-becomes-client-retention-metri",
      "article-3e699a1c",
      "3e699a1c",
      "ransomware-recovery-becomes-client-retention-metri-2eea80",
      "ransomware-recovery-becomes-client-retention-metric"
    ]
  },
  {
    "slug": "ciso-forum-virtual-summit-2026-announced-b1149328",
    "title": "CISO Forum Virtual Summit 2026 Announced",
    "summary": "The CISO Forum will host a two‑day virtual summit in 2026, gathering global cybersecurity leaders to discuss contemporary risk management and defense strategies. Participants will share insights on emerging threats, regulatory compliance, and innovative technologies shaping modern enterprise security. Organizers recommend registering early, reviewing the agenda, and preparing case studies to maximize engagement and knowledge transfer.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/today-ciso-forum-virtual-summit-2026-join-global-cybersecurity-leaders/",
    "publishedAt": "2026-11-10T15:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ciso-forum-virtual-summit-2026-announced",
      "article-b1149328",
      "b1149328",
      "ciso-forum-virtual-summit-2026-announced-7d4f97"
    ]
  },
  {
    "slug": "whitematter-secures-20m-series-a-funding-a5c740c5",
    "title": "WhiteMatter Secures $20M Series A Funding",
    "summary": "WhiteMatter, a cybersecurity startup, announced a $20 million Series A round to support its AI‑centric guardian agent platform. The platform installs a dedicated guardian agent on each AI agent within an organization, monitoring for anomalous behavior and enforcing policy compliance. Investors include XYZ Ventures and ABC Capital, and the company plans to expand analytics suite and integrate with cloud providers.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/whitematter-raises-20-million-in-series-a-funding/",
    "publishedAt": "2026-11-10T14:58:19.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "whitematter-secures-20m-series-a-funding",
      "article-a5c740c5",
      "a5c740c5",
      "whitematter-secures-20m-series-a-funding-125679"
    ]
  },
  {
    "slug": "sap-releases-patches-for-critical-icm2shell-proxyg-09424f5e",
    "title": "SAP Releases Patches for Critical ICM2SHELL, ProxyGate Bugs",
    "summary": "SAP has issued 42 new and updated security advisories, including nine that address critical‑severity vulnerabilities in its ICM2SHELL and ProxyGate components. The critical flaws involve improper handling of input data, potentially enabling remote code execution, but no active exploitation has been reported. SAP recommends applying the released patches immediately to mitigate the identified risks and prevent potential exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/sap-patches-critical-icm2shell-proxygate-vulnerabilities/",
    "publishedAt": "2026-11-10T14:46:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sap-releases-patches-for-critical-icm2shell-proxyg",
      "article-09424f5e",
      "09424f5e",
      "sap-releases-patches-for-critical-icm2shell-proxyg-567cdd",
      "sap-releases-patches-for-critical-icm2shell-proxygate-bugs"
    ]
  },
  {
    "slug": "ai-reverse-engineering-let-researchers-add-a-new-f-4d48b7e9",
    "title": "AI reverse engineering let researchers add a new feature to Slack",
    "summary": "Intezer researchers used AI agents to rebuild source code for Slack, Apple’s Finder and a TinyTurla-NG sample, from a backdoor family Cisco Talos attributes to the Turla group. The rebuilt Slack ran well enough that the team added a new feature to it: AI text autocomplete, powered by a small local model.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/slack-ai-reverse-engineering/",
    "publishedAt": "2026-11-10T14:45:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-reverse-engineering-let-researchers-add-a-new-f",
      "article-4d48b7e9",
      "4d48b7e9",
      "ai-reverse-engineering-let-researchers-add-a-new-f-5d0b6c",
      "ai-reverse-engineering-let-researchers-add-a-new-feature-to-"
    ]
  },
  {
    "slug": "losapio-nominated-to-lead-cisa-amid-senate-uncerta-e092c1d2",
    "title": "LoSapio Nominated to Lead CISA Amid Senate Uncertainty",
    "summary": "Palantir's chief information security officer, Michael LoSapio, has been nominated by President Donald Trump to lead the Cybersecurity and Infrastructure Security Agency. The nomination awaits a lame‑duck Senate vote, leaving the confirmation status uncertain amid political debate over CISA leadership. If confirmed, LoSapio would oversee federal cybersecurity policy, incident response coordination, and critical infrastructure protection initiatives.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/michael-losapio-cisa-director-nomination",
    "publishedAt": "2026-11-10T14:31:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "losapio-nominated-to-lead-cisa-amid-senate-uncerta",
      "article-e092c1d2",
      "e092c1d2",
      "losapio-nominated-to-lead-cisa-amid-senate-uncerta-48000d",
      "losapio-nominated-to-lead-cisa-amid-senate-uncertainty"
    ]
  },
  {
    "slug": "north-korea-targets-drone-tech-and-software-supply-93ca9b9c",
    "title": "North Korea Targets Drone Tech and Software Supply Chains",
    "summary": "North Korean actors Lazarus and DeceptiveDevelopment resumed cyberespionage against drone technology and software supply chains between April and September 2026. They used stolen developer credentials to inject malicious code into open‑source projects and targeted European defense entities, widening the threat surface. Defenders should monitor supply‑chain integrity, enforce strict credential hygiene, and apply security patches to exposed development environments.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/north-korean-hackers-3/",
    "publishedAt": "2026-11-10T14:09:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "north-korea-targets-drone-tech-and-software-supply",
      "article-93ca9b9c",
      "93ca9b9c",
      "north-korea-targets-drone-tech-and-software-supply-63ada6",
      "north-korea-targets-drone-tech-and-software-supply-chains"
    ]
  },
  {
    "slug": "check-point-traces-copperdragon-sparrow-framework-47e2b6b2",
    "title": "Check Point Traces CopperDragon Sparrow Framework Globally",
    "summary": "Check Point Research tracked intrusion campaigns attributed to CopperDragon using a shared Sparrow framework across Latin America, Asia, and Europe. The campaigns employed distinct backdoors and post-exploitation tools while sharing common infrastructure patterns. defenders should monitor for lateral movement indicators and apply network segmentation to limit blast radius during active intrusions.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Check Point Research",
    "sourceUrl": "https://research.checkpoint.com/2026/not-all-that-glitters-is-gold-tracking-copperdragons-sparrow-framework-around-the-globe/",
    "publishedAt": "2026-11-10T14:01:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "check-point-traces-copperdragon-sparrow-framework",
      "article-47e2b6b2",
      "47e2b6b2",
      "check-point-traces-copperdragon-sparrow-framework-3c011b",
      "check-point-traces-copperdragon-sparrow-framework-globally"
    ]
  },
  {
    "slug": "dreeze-secures-33m-seed-funding-for-cloud-recovery-8e55b81a",
    "title": "Dreeze Secures $33M Seed Funding for Cloud Recovery",
    "summary": "Dreeze, a stealth startup, secured $33 million in seed funding to launch its Application Revival platform for Amazon Web Services. The platform automates full cloud application recovery by restoring data, infrastructure, and dependencies in the order required for operational continuity. Dreeze’s solution addresses gaps where traditional backups leave businesses offline, offering a comprehensive restoration workflow for enterprise cloud environments.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/dreeze-application-revival-33-million-funding/",
    "publishedAt": "2026-11-10T14:00:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "dreeze-secures-33m-seed-funding-for-cloud-recovery",
      "article-8e55b81a",
      "8e55b81a",
      "dreeze-secures-33m-seed-funding-for-cloud-recovery-7994f3"
    ]
  },
  {
    "slug": "critical-apache-airflow-rce-flaw-allows-attackers-724acf9f",
    "title": "Critical Apache Airflow RCE Flaw Allows Attackers to Execute Code Without Authentication",
    "summary": "Apache Airflow has a critical remote code execution flaw that lets anyone with write access to the Celery message broker run code on worker nodes. The bug is tracked as CVE-2026-68982 and is classified as CWE-306, missing authentication for a critical function.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/critical-apache-airflow-rce-flaw/",
    "publishedAt": "2026-11-10T13:57:52.000Z",
    "cves": [
      "CVE-2026-68982"
    ],
    "additionalSources": [],
    "aliases": [
      "critical-apache-airflow-rce-flaw-allows-attackers",
      "article-724acf9f",
      "724acf9f",
      "critical-apache-airflow-rce-flaw-allows-attackers-679389",
      "critical-apache-airflow-rce-flaw-allows-attackers-to-execute"
    ]
  },
  {
    "slug": "wiz-aligns-iso-for-japan-government-cloud-entry-3dcc3895",
    "title": "Wiz Aligns ISO for Japan Government Cloud Entry",
    "summary": "Wiz and ISMAP conduct gap assessment and ISO alignment to qualify for Japan's government cloud service list. The assessment identifies compliance gaps and outlines steps to meet Japan's public sector security requirements. Wiz plans to submit documentation and pursue certification, with no immediate security patch or vulnerability, aiming to comply with strict regulatory standards.",
    "category": "General",
    "severity": "LOW",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/wiz-and-ismap-for-japan-public-sector",
    "publishedAt": "2026-11-10T13:48:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "wiz-aligns-iso-for-japan-government-cloud-entry",
      "article-3dcc3895",
      "3dcc3895",
      "wiz-aligns-iso-for-japan-government-cloud-entry-22b4fb"
    ]
  },
  {
    "slug": "rhsa-2026-97121-moderate-unbound-security-bug-fix-7e279781",
    "title": "RHSA-2026:97121: Moderate: unbound security, bug fix, and enhancement update",
    "summary": "An update for unbound is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Moderate. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97121",
    "publishedAt": "2026-11-10T13:39:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97121-moderate-unbound-security-bug-fix",
      "article-7e279781",
      "7e279781",
      "rhsa-2026-97121-moderate-unbound-security-bug-fix-37d768",
      "rhsa-2026-97121-moderate-unbound-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "qubole-iam-credentials-compromised-multiple-organi-3ef88938",
    "title": "Qubole IAM Credentials Compromised, Multiple Organizations Hit",
    "summary": "Hackers used compromised Qubole IAM credentials to access customer files, secrets, keys, environment variables, and credentials, impacting more than a dozen organizations. The breach exploited privileged IAM access to exfiltrate sensitive data from Qubole‑managed cloud environments, exposing operational secrets across tenants. Customers should audit IAM permissions, rotate compromised credentials, and apply the latest Qubole security patches to prevent further exfiltration.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/over-a-dozen-organizations-hit-in-qubole-supply-chain-attack/",
    "publishedAt": "2026-11-10T13:27:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "qubole-iam-credentials-compromised-multiple-organi",
      "article-3ef88938",
      "3ef88938",
      "qubole-iam-credentials-compromised-multiple-organi-69ea7a",
      "qubole-iam-credentials-compromised-multiple-organizations-hi"
    ]
  },
  {
    "slug": "hackers-exploit-trusted-qubole-iam-roles-to-access-d4323600",
    "title": "Hackers Exploit Trusted Qubole IAM Roles to Access AWS Accounts and Download Entire S3 Buckets",
    "summary": "Hackers abused trusted Qubole integrations to enter customer AWS accounts, steal secrets, and download data from Amazon S3, sometimes taking entire buckets in one session. The activity ran from October 14 through October 26, 2026, using IAM credentials from an AWS account associated with Qubole rather than exploiting a software vulnerability.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/qubole-iam-roles/",
    "publishedAt": "2026-11-10T13:26:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-exploit-trusted-qubole-iam-roles-to-access",
      "article-d4323600",
      "d4323600",
      "hackers-exploit-trusted-qubole-iam-roles-to-access-644914",
      "hackers-exploit-trusted-qubole-iam-roles-to-access-aws-accou"
    ]
  },
  {
    "slug": "chrome-updates-released-to-patch-exploited-zero-da-7d6565c2",
    "title": "Chrome Updates Released to Patch Exploited Zero-Day Vulnerability",
    "summary": "Google released Chrome desktop and Android updates to patch CVE-2026-123158, a zero‑day flaw attackers are exploiting. The vulnerability permits remote code execution through the Chrome rendering engine, risking user data and system compromise. Users should install the latest Chrome version immediately, and admins should monitor for anomalous activity and enforce additional controls.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/bugs/2026/11/update-chrome-now-to-fix-a-flaw-attackers-are-exploiting",
    "publishedAt": "2026-11-10T13:23:00.000Z",
    "cves": [
      "CVE-2026-123158"
    ],
    "additionalSources": [],
    "aliases": [
      "chrome-updates-released-to-patch-exploited-zero-da",
      "article-7d6565c2",
      "7d6565c2",
      "chrome-updates-released-to-patch-exploited-zero-da-562340",
      "chrome-updates-released-to-patch-exploited-zero-day-vulnerab"
    ]
  },
  {
    "slug": "dark-storm-team-expands-ddos-for-hire-demands-5-00-fd53c7fb",
    "title": "Dark Storm Team Expands DDoS-for-Hire, Demands $5,000 for Amino",
    "summary": "Dark Storm Team expanded its DDoS‑for‑hire service, targeting Amino and demanding $5,000 in cryptocurrency to stop the attack. The group advertises on Telegram, issuing a payment request tied to an October 2025 incident, showing an active threat actor. Defenders should monitor traffic for DDoS patterns, deploy rate‑limiting and scrubbing services, and block known malicious IPs to mitigate disruption.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/dark-storm-team/",
    "publishedAt": "2026-11-10T13:18:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "dark-storm-team-expands-ddos-for-hire-demands-5-00",
      "article-fd53c7fb",
      "fd53c7fb",
      "dark-storm-team-expands-ddos-for-hire-demands-5-00-6e56dd",
      "dark-storm-team-expands-ddos-for-hire-demands-5-000-for-amin"
    ]
  },
  {
    "slug": "cisa-updates-incident-form-for-campaign-detection-34addf89",
    "title": "CISA Updates Incident Form for Campaign Detection",
    "summary": "CISA updated its incident reporting form to help analysts identify potential campaign links across organizations. The revised questionnaire incorporates MITRE ATT&CK terminology to capture malware, social engineering, hacking techniques, and insider threats, improving detection of coordinated attacks. Organizations should use the updated form to report incidents, enabling CISA to correlate events and provide more targeted guidance.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/cisa-incident-reporting-form-update/",
    "publishedAt": "2026-11-10T13:17:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-updates-incident-form-for-campaign-detection",
      "article-34addf89",
      "34addf89",
      "cisa-updates-incident-form-for-campaign-detection-157b51"
    ]
  },
  {
    "slug": "finite-state-raises-27-million-for-ai-product-secu-c67b25bf",
    "title": "Finite State Raises $27 Million for AI Product Security",
    "summary": "Finite State announced a $27 million Series C funding round to scale its autonomous product security platform amid rising AI-discovered vulnerabilities and new global security mandates. The investment targets accelerating defect detection across device supply chains. This reflects broader industry trends in automated vulnerability remediation.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/finite-state-raises-27-million-to-help-device-makers-fight-vulnpocalypse-with-ai-powered-product-security/",
    "publishedAt": "2026-11-10T13:17:34.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "finite-state-raises-27-million-for-ai-product-secu",
      "article-c67b25bf",
      "c67b25bf",
      "finite-state-raises-27-million-for-ai-product-secu-d04e30",
      "finite-state-raises-27-million-for-ai-product-security"
    ]
  },
  {
    "slug": "red-hat-issues-important-subscription-manager-cock-0b712084",
    "title": "Red Hat Issues Important subscription‑manager‑cockpit Update",
    "summary": "Red Hat released an important security update for subscription‑manager‑cockpit on Red Hat Enterprise Linux 10, addressing critical vulnerabilities. The advisory lists CVSS base scores for each flaw and links to CVE identifiers in the references. Systems administrators should apply the update promptly to close the security gaps and preserve platform stability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97090",
    "publishedAt": "2026-11-10T13:04:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-important-subscription-manager-cock",
      "article-0b712084",
      "0b712084",
      "red-hat-issues-important-subscription-manager-cock-37d76b",
      "red-hat-issues-important-subscription-manager-cockpit-update"
    ]
  },
  {
    "slug": "malwarebytes-flags-phishing-red-flags-on-advent-ca-a3608a97",
    "title": "Malwarebytes Flags Phishing Red Flags on Advent Calendars",
    "summary": "Malwarebytes Labs warns that several online advent calendar storefronts exhibit red flags such as copied designs, false urgency, and contradictory claims. These indicators suggest the sites may be phishing fronts or hosts for malicious payloads, potentially compromising user credentials or installing malware. Security teams should verify domain authenticity, inspect SSL certificates, and avoid downloading content from vendors until further investigation.",
    "category": "General",
    "severity": "LOW",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/how-to/2026/11/before-you-buy-an-advent-calendar-check-these-warning-signs",
    "publishedAt": "2026-11-10T13:03:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "malwarebytes-flags-phishing-red-flags-on-advent-ca",
      "article-a3608a97",
      "a3608a97",
      "malwarebytes-flags-phishing-red-flags-on-advent-ca-13ccbe",
      "malwarebytes-flags-phishing-red-flags-on-advent-calendars"
    ]
  },
  {
    "slug": "russian-state-hackers-compromise-romanian-kazakh-e-c70a08d6",
    "title": "Russian State Hackers Compromise Romanian, Kazakh Email Servers",
    "summary": "Russian state-linked hackers compromised government email servers in Romania and Kazakhstan, intercepting messages exchanged with NATO and EU officials. The intrusion leveraged credential theft and internal access to infiltrate mail systems, enabling covert eavesdropping on diplomatic communications without detection. Affected organizations should conduct forensic analysis, reset credentials, and implement multi-factor authentication to prevent further compromise.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/russia-hackers-espionage-romania-kazakhstan",
    "publishedAt": "2026-11-10T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "russian-state-hackers-compromise-romanian-kazakh-e",
      "article-c70a08d6",
      "c70a08d6",
      "russian-state-hackers-compromise-romanian-kazakh-e-793ae9",
      "russian-state-hackers-compromise-romanian-kazakh-email-serve"
    ]
  },
  {
    "slug": "ai-simplifies-reverse-engineering-of-software-and-106b4d6e",
    "title": "AI Simplifies Reverse Engineering of Software and Malware",
    "summary": "Researchers demonstrated that artificial intelligence tools can now decompile and reconstruct complex software and the Turla malware, lowering the barrier for reverse engineering. The capability exposes hidden logic, facilitates vulnerability discovery, and speeds threat analysis, raising concerns for defenders. Security teams should adopt AI-aware defensive tools, continuous monitoring, and threat intelligence sharing to mitigate accelerated reverse engineering risks.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/application-security/ai-reverse-engineering-apps",
    "publishedAt": "2026-11-10T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-simplifies-reverse-engineering-of-software-and",
      "article-106b4d6e",
      "106b4d6e",
      "ai-simplifies-reverse-engineering-of-software-and-6489b9",
      "ai-simplifies-reverse-engineering-of-software-and-malware"
    ]
  },
  {
    "slug": "rhsa-2026-97040-important-kernel-security-bug-fix-275ecb10",
    "title": "RHSA-2026:97040: Important: kernel security, bug fix, and enhancement update",
    "summary": "An update for kernel is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97040",
    "publishedAt": "2026-11-10T12:55:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-97040-important-kernel-security-bug-fix",
      "article-275ecb10",
      "275ecb10",
      "rhsa-2026-97040-important-kernel-security-bug-fix-37d76c",
      "rhsa-2026-97040-important-kernel-security-bug-fix-and-enhanc"
    ]
  },
  {
    "slug": "red-hat-issues-moderate-sssd-update-for-rhel-10-1609cdcb",
    "title": "Red Hat Issues Moderate sssd Update for RHEL 10",
    "summary": "Red Hat released a moderate-impact update for the sssd service on Red Hat Enterprise Linux 10, addressing multiple security bugs. The update carries a CVSS base score for each vulnerability, with references to CVE identifiers in the advisory’s links. Administrators should apply the sssd update immediately to mitigate the identified weaknesses and maintain system integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:97077",
    "publishedAt": "2026-11-10T12:54:35.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-moderate-sssd-update-for-rhel-10",
      "article-1609cdcb",
      "1609cdcb",
      "red-hat-issues-moderate-sssd-update-for-rhel-10-37d76b"
    ]
  },
  {
    "slug": "apple-releases-november-2026-security-updates-a7e401a4",
    "title": "Apple Releases November 2026 Security Updates",
    "summary": "Apple released a November 2026 update patching nine vulnerabilities across iOS, iPadOS, macOS, watchOS, and visionOS, including CVE-2026-113971 affecting iOS/iPadOS 26. The fixes address Bluetooth pairing weaknesses, iMessage group chat message leakage, and flaws that could allow remote attackers to intercept messages. Users should install the latest firmware and security teams should monitor for exploit activity and apply patches promptly.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33506",
    "publishedAt": "2026-11-10T12:48:55.000Z",
    "cves": [
      "CVE-2026-113971"
    ],
    "additionalSources": [],
    "aliases": [
      "apple-releases-november-2026-security-updates",
      "article-a7e401a4",
      "a7e401a4",
      "apple-releases-november-2026-security-updates-57dd81"
    ]
  },
  {
    "slug": "anthropic-releases-mythos-5-2-with-enhanced-sandbo-418ce659",
    "title": "Anthropic Releases Mythos 5.2 With Enhanced Sandbox Security",
    "summary": "Anthropic released Mythos 5.2, a new model iteration focused on vulnerability discovery for security researchers. The update tightens sandbox boundaries, reducing sandbox escape incidents observed in controlled testing environments. Security teams should upgrade to Mythos 5.2 to leverage enhanced sandbox integrity and bug‑hunting capabilities and improved detection of exploitation attempts.",
    "category": "General",
    "severity": "LOW",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/anthropic-rolls-out-mythos-5-2-with-improved-bug-hunting-fewer-sandbox-escapes/",
    "publishedAt": "2026-11-10T12:17:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-releases-mythos-5-2-with-enhanced-sandbo",
      "article-418ce659",
      "418ce659",
      "anthropic-releases-mythos-5-2-with-enhanced-sandbo-63a588",
      "anthropic-releases-mythos-5-2-with-enhanced-sandbox-security"
    ]
  },
  {
    "slug": "ireland-warns-of-rising-cyberattack-threats-ahead-f95a4122",
    "title": "Ireland Warns of Rising Cyberattack Threats Ahead of IRISSCON",
    "summary": "Irish cybersecurity officials warn that the nation faces increasing cyberattack and hybrid threat sophistication, citing a lack of preparedness. The warning precedes IRISSCON 2026, the annual IRISSCERT conference at Dublin’s Aviva Stadium, where experts will discuss strengthening national security capabilities. Stakeholders are urged to implement enhanced cyber defenses and policy reforms before the conference to mitigate the escalating threat landscape.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/irisscon-2026-dublin/",
    "publishedAt": "2026-11-10T12:16:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ireland-warns-of-rising-cyberattack-threats-ahead",
      "article-f95a4122",
      "f95a4122",
      "ireland-warns-of-rising-cyberattack-threats-ahead-2dcd70",
      "ireland-warns-of-rising-cyberattack-threats-ahead-of-irissco"
    ]
  },
  {
    "slug": "binance-alerts-to-ios-sandbox-escape-exposing-keys-a30ef69e",
    "title": "Binance Alerts to iOS Sandbox Escape Exposing Keys",
    "summary": "Binance warns that a sandbox escape lets iOS 26 and 27 apps read files from other apps, exposing seed phrases and private keys. The flaw, worse_query, exploits a privilege escalation bug in the iOS sandbox, enabling unauthorized file access.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/binance-warns-of-ios-sandbox-escape.html",
    "publishedAt": "2026-11-10T12:15:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-alerts-to-ios-sandbox-escape-exposing-keys",
      "article-a30ef69e",
      "a30ef69e",
      "binance-alerts-to-ios-sandbox-escape-exposing-keys-48a154"
    ]
  },
  {
    "slug": "sap-issues-patches-for-four-maximum-severity-flaws-41b60e3b",
    "title": "SAP Issues Patches for Four Maximum-Severity Flaws",
    "summary": "SAP released November 2026 security updates addressing 35 vulnerabilities, including four maximum‑severity flaws in NetWeaver, Web Dispatcher, and Gateway components. The flaws, classified as maximum severity, could allow remote code execution or privilege escalation if exploited, though no active exploitation reports exist. SAP has issued patches for all affected products; administrators should apply the updates promptly to mitigate potential exploitation.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/sap-patches-four-maximum-severity-security-vulnerabilities/",
    "publishedAt": "2026-11-10T12:07:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sap-issues-patches-for-four-maximum-severity-flaws",
      "article-41b60e3b",
      "41b60e3b",
      "sap-issues-patches-for-four-maximum-severity-flaws-4e9854"
    ]
  },
  {
    "slug": "openssh-musl-flaw-enables-password-authentication-11883b79",
    "title": "OpenSSH Musl Flaw Enables Password‑Authentication Bypass",
    "summary": "A flaw dubbed 'sshole' affects OpenSSH on musl‑based Linux, letting attackers authenticate with an oversized password over 256 bytes. The bug arises from a buffer oversight in password parsing, enabling unauthorized login without valid credentials and potentially full system access. Admins should upgrade to the patched OpenSSH release or apply the vendor‑issued workaround to reject oversized passwords.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/11/new-openssh-vulnerability.html",
    "publishedAt": "2026-11-10T12:02:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openssh-musl-flaw-enables-password-authentication",
      "article-11883b79",
      "11883b79",
      "openssh-musl-flaw-enables-password-authentication-67f2ec",
      "openssh-musl-flaw-enables-password-authentication-bypass"
    ]
  },
  {
    "slug": "cisa-adds-six-exploited-vulnerabilities-to-kev-9ddecdf1",
    "title": "CISA Adds Six Exploited Vulnerabilities to KEV",
    "summary": "CISA added six known exploited vulnerabilities to its KEV catalog, including CVE-2026-20320, CVE-2026-111560, CVE-2026-111793, CVE-2026-116606, CVE-2026-124194, and CVE-2026-125350. The flaws cover XML external entity handling, OS command injection, resource transfer, authentication bypass, unsafe action, and use‑after‑free, all with active exploitation evidence. Vendors should apply patches or mitigations from the KEV catalog, and security teams should monitor for exploitation indicators.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/11/10/cisa-adds-six-known-exploited-vulnerabilities-catalog",
    "publishedAt": "2026-11-10T12:00:00.000Z",
    "cves": [
      "CVE-2026-20320",
      "CVE-2026-111560",
      "CVE-2026-111793",
      "CVE-2026-116606",
      "CVE-2026-124194",
      "CVE-2026-125350"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-six-exploited-vulnerabilities-to-kev",
      "article-9ddecdf1",
      "9ddecdf1",
      "cisa-adds-six-exploited-vulnerabilities-to-kev-6af0be"
    ]
  },
  {
    "slug": "adobe-commerce-and-magento-file-upload-rce-flaw-cv-d6c9bec3",
    "title": "Adobe Commerce and Magento File Upload RCE Flaw (CVE-2026-48356)",
    "summary": "Adobe Commerce and Magento contain an unrestricted file upload vulnerability (CVE-2026-48356, CVSS 9.3, CWE-434) enabling arbitrary code execution and elevated account control. CISA added the flaw to its Known Exploited Vulnerabilities catalog on Oct. 27, 2026, with federal remediation due Nov. 10, 2026, under BOD 26-04. Apply patches in Adobe bulletin APSB26-73 immediately.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/10/27/cisa-adds-two-known-exploited-vulnerabilities-catalog",
    "publishedAt": "2026-11-10T12:00:00.000Z",
    "cves": [
      "CVE-2026-48356"
    ],
    "additionalSources": [
      {
        "source": "Adobe Security Bulletin (APSB26-73)",
        "sourceUrl": "https://www.adobe.com/trust/security/products/commerce/apsb26-73.html"
      }
    ],
    "aliases": [
      "adobe-commerce-and-magento-file-upload-rce-flaw-cv",
      "article-d6c9bec3",
      "d6c9bec3",
      "adobe-commerce-and-magento-file-upload-rce-flaw-cv-7a305a",
      "adobe-commerce-and-magento-file-upload-rce-flaw-cve-2026-483",
      "https://www.cisa.gov/news-events/alerts/2026/10/27/cisa-adds-two-known-exploited-vulnerabilities-catalog"
    ]
  },
  {
    "slug": "binance-alerts-iphone-users-to-ios-file-access-fla-4cd25477",
    "title": "Binance Alerts iPhone Users to iOS File‑Access Flaw",
    "summary": "Binance warned iPhone users about worse_query, an iOS flaw that permits malicious apps to read files belonging to other apps. Affected iOS versions 26.7.1, 27.0.1, and 27.2 could expose seed phrases, private keys, and login credentials, creating a high‑risk data leakage vector. Users should install the latest iOS updates or apply the vendor’s security patch to mitigate the file‑access vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ios-flaw-expose-crypto-wallet/",
    "publishedAt": "2026-11-10T11:40:16.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-alerts-iphone-users-to-ios-file-access-fla",
      "article-4cd25477",
      "4cd25477",
      "binance-alerts-iphone-users-to-ios-file-access-fla-551001",
      "binance-alerts-iphone-users-to-ios-file-access-flaw"
    ]
  },
  {
    "slug": "claude-mythos-5-2-enhances-bug-hunting-reduces-san-8326924a",
    "title": "Claude Mythos 5.2 Enhances Bug Hunting, Reduces Sandbox Breaks",
    "summary": "Anthropic released Claude Mythos 5.2, a model variant aimed at improving cybersecurity task detection. The update tightens safety classifiers, decreasing sandbox‑breaking incidents observed during controlled testing of penetration‑testing and exploit‑generation requests. Security teams should upgrade to Mythos 5.2 to benefit from stricter safeguards and reduced sandbox escape risk and improved detection.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/anthropic-claude-fable-and-mythos-5-2-safeguards/",
    "publishedAt": "2026-11-10T11:40:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "claude-mythos-5-2-enhances-bug-hunting-reduces-san",
      "article-8326924a",
      "8326924a",
      "claude-mythos-5-2-enhances-bug-hunting-reduces-san-143103",
      "claude-mythos-5-2-enhances-bug-hunting-reduces-sandbox-break"
    ]
  },
  {
    "slug": "rich-network-data-improves-post-alert-interdiction-4a9ec0de",
    "title": "Rich Network Data Improves Post-Alert Interdiction",
    "summary": "The article argues that relying solely on alerts is insufficient, as security teams often fail to detect sophisticated intrusions. It proposes that rich network data enables interdiction by identifying and disrupting malicious traffic after an alert has been triggered. Security teams should integrate deep packet inspection and flow analytics to complement alerts, improving detection coverage and response times.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/beyond-alert-case-for-rich-network-data.html",
    "publishedAt": "2026-11-10T11:38:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rich-network-data-improves-post-alert-interdiction",
      "article-4a9ec0de",
      "4a9ec0de",
      "rich-network-data-improves-post-alert-interdiction-5a6a44"
    ]
  },
  {
    "slug": "sap-issues-critical-patch-day-for-netweaver-dispat-0a949af6",
    "title": "SAP Issues Critical Patch Day for NetWeaver, Dispatcher, Gateway",
    "summary": "SAP released its November 2026 Security Patch Day, addressing critical vulnerabilities in NetWeaver, Web Dispatcher, and Gateway components. The update includes 35 new security notes, four GitHub advisories, and fixes for four CVEs, including CVE-2026-44756, each scoring a maximum CVSS of 10.0. Administrators should apply patches immediately to eliminate the high‑risk remote code execution vectors exposed by these flaws.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/sap-security-patch-day-november/",
    "publishedAt": "2026-11-10T11:10:19.000Z",
    "cves": [
      "CVE-2026-44756"
    ],
    "additionalSources": [],
    "aliases": [
      "sap-issues-critical-patch-day-for-netweaver-dispat",
      "article-0a949af6",
      "0a949af6",
      "sap-issues-critical-patch-day-for-netweaver-dispat-48e8e0",
      "sap-issues-critical-patch-day-for-netweaver-dispatcher-gatew"
    ]
  },
  {
    "slug": "france-attributes-supermarket-refrigeration-sabota-99bf71bc",
    "title": "France Attributes Supermarket Refrigeration Sabotage to Iranian Hackers",
    "summary": "France attributed a disruptive cyberattack on 700 supermarket refrigeration systems to Iran's Islamic Revolutionary Guard Corps. Attackers remotely manipulated defrost controls during October 11–12, causing widespread food spoilage and approximately 20 fires, per the Paris prosecutor. Foreign Minister Jean-Noël Barrot confirmed the attribution; affected organizations should audit industrial control system access and implement network segmentation.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/iranian-hackers-supermarket-cyberattacks/",
    "publishedAt": "2026-11-10T10:23:06.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "france-attributes-supermarket-refrigeration-sabota",
      "article-99bf71bc",
      "99bf71bc",
      "france-attributes-supermarket-refrigeration-sabota-48fa53",
      "france-attributes-supermarket-refrigeration-sabotage-to-iran"
    ]
  },
  {
    "slug": "apple-patches-imessage-group-chat-privacy-flaws-an-be674176",
    "title": "Apple Patches iMessage Group Chat Privacy Flaws and Bluetooth Pairing Vulnerabilities",
    "summary": "An iMessage flaw could let a remote attacker join a group chat and receive its messages, Apple said yesterday, and it released updates to fix it. The updates also fix a separate iMessage flaw that could let someone added to a group access messages sent before they joined.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/apple-patches-imessage-group-chat.html",
    "publishedAt": "2026-11-10T10:16:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-patches-imessage-group-chat-privacy-flaws-an",
      "article-be674176",
      "be674176",
      "apple-patches-imessage-group-chat-privacy-flaws-an-797319",
      "apple-patches-imessage-group-chat-privacy-flaws-and-bluetoot"
    ]
  },
  {
    "slug": "attackers-exploit-barracuda-esg-flaws-for-root-acc-25ab3004",
    "title": "Attackers Exploit Barracuda ESG Flaws for Root Access",
    "summary": "Attackers are actively exploiting two critical Barracuda Email Security Gateway vulnerabilities to achieve root-level command execution. The flaws, recently patched by Barracuda, allow unauthenticated remote code execution on the appliance, granting full system compromise. Barracuda urges immediate application of security updates and verification of appliance integrity to prevent persistent unauthorized access.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/hackers-exploit-barracuda-email-security-gateway-flaws-to-get-root-access/",
    "publishedAt": "2026-11-10T10:10:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "attackers-exploit-barracuda-esg-flaws-for-root-acc",
      "article-25ab3004",
      "25ab3004",
      "attackers-exploit-barracuda-esg-flaws-for-root-acc-304d38",
      "attackers-exploit-barracuda-esg-flaws-for-root-access"
    ]
  },
  {
    "slug": "windows-11-26h2-enables-default-settings-backup-cbb1595d",
    "title": "Windows 11 26H2 Enables Default Settings Backup",
    "summary": "Windows 11 26H2 now enables settings backup by default on eligible devices. Renamed Windows Backup for Organizations, the update consolidates roaming settings management and preserves supported settings and Microsoft Store app lists during backup. Admins can adjust backup profiles via policy console; no extra patch needed beyond the 26H2 release.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/windows-settings-backup-default/",
    "publishedAt": "2026-11-10T10:03:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "windows-11-26h2-enables-default-settings-backup",
      "article-cbb1595d",
      "cbb1595d",
      "windows-11-26h2-enables-default-settings-backup-2c499a"
    ]
  },
  {
    "slug": "anthropic-releases-claude-mythos-5-2-ai-for-vulner-649ae7e7",
    "title": "Anthropic Releases Claude Mythos 5.2 AI for Vulnerability Detection",
    "summary": "Anthropic released Claude Mythos 5.2, an AI model aimed at cybersecurity engineering, on November 9. The model achieved a 76.3% score on CyScenarioBench, indicating strong capability to identify zero‑day flaws. Access remains restricted to prevent misuse, and security teams can use it to locate, reproduce, and remediate vulnerabilities before exploitation.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/claude-mythos-5-2-released/",
    "publishedAt": "2026-11-10T10:03:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anthropic-releases-claude-mythos-5-2-ai-for-vulner",
      "article-649ae7e7",
      "649ae7e7",
      "anthropic-releases-claude-mythos-5-2-ai-for-vulner-64791d",
      "anthropic-releases-claude-mythos-5-2-ai-for-vulnerability-de"
    ]
  },
  {
    "slug": "sap-fixes-four-10-0-rce-flaws-including-netweaver-102407d0",
    "title": "SAP Fixes Four 10.0 RCE Flaws, Including NetWeaver",
    "summary": "SAP released a patch for four critical flaws, all rated CVSS 10.0, on its monthly Security Patch Day. The vulnerabilities, including CVE-2026-83844, allow unauthenticated remote code execution on SAP NetWeaver application servers and the Web Dispatcher. SAP has issued patches for all affected components; security teams should apply them immediately to prevent exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/sap-patches-four-cvss-100-flaws.html",
    "publishedAt": "2026-11-10T10:02:40.000Z",
    "cves": [
      "CVE-2026-83844"
    ],
    "additionalSources": [],
    "aliases": [
      "sap-fixes-four-10-0-rce-flaws-including-netweaver",
      "article-102407d0",
      "102407d0",
      "sap-fixes-four-10-0-rce-flaws-including-netweaver-4254d9"
    ]
  },
  {
    "slug": "turla-deploys-cereal-malware-to-harvest-exchange-e-e1a34ab8",
    "title": "Turla Deploys Cereal Malware to Harvest Exchange Emails",
    "summary": "Turla, a Russia‑aligned threat actor, deployed its Cereal malware to infiltrate Microsoft Exchange servers and harvest email communications covertly. The tool exploits undisclosed Exchange vulnerabilities to bypass authentication and exfiltrate mailboxes, enabling persistent surveillance without triggering standard detection. Security teams should apply Microsoft’s latest Exchange patches, enforce MFA, and monitor outbound traffic to mitigate the threat.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/eset-turla-exchange-malware/",
    "publishedAt": "2026-11-10T10:00:39.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/11/russian-turla-hackers-use-new-cereal.html"
      }
    ],
    "aliases": [
      "turla-deploys-cereal-malware-to-harvest-exchange-e",
      "article-e1a34ab8",
      "e1a34ab8",
      "turla-deploys-cereal-malware-to-harvest-exchange-e-ef12ed",
      "turla-deploys-cereal-malware-to-harvest-exchange-emails"
    ]
  },
  {
    "slug": "turla-s-cereal-toolset-targets-exchange-email-coll-c3ca009b",
    "title": "Turla’s Cereal Toolset Targets Exchange Email Collection",
    "summary": "ESET Research uncovered Turla’s Cereal toolset, which includes a novel Exchange email collection module and a unique command-and-control mechanism. The toolkit also employs sophisticated .NET execution tricks, enabling stealthy persistence and data exfiltration from compromised Microsoft Exchange servers. Security teams should harden Exchange configurations, monitor for anomalous outbound traffic, and apply the latest Microsoft patches to mitigate potential exploitation.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "ESET WeLiveSecurity",
    "sourceUrl": "https://www.welivesecurity.com/en/eset-research/exchange-for-breakfast-turlas-cereal-tricks-are-not-for-kids/",
    "publishedAt": "2026-11-10T09:57:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "turla-s-cereal-toolset-targets-exchange-email-coll",
      "article-c3ca009b",
      "c3ca009b",
      "turla-s-cereal-toolset-targets-exchange-email-coll-803ca3",
      "turla-s-cereal-toolset-targets-exchange-email-collection"
    ]
  },
  {
    "slug": "n-able-disables-n-central-over-30-zero-day-flaws-74835697",
    "title": "N-able Disables N-central Over 30 Zero-Day Flaws",
    "summary": "N-able temporarily disabled N-central services while addressing over 30 zero-day vulnerabilities that enable remote code execution, credential theft, and unauthorized administrator account creation. The flaws arise from insufficient input validation in the web interface, permitting attackers to inject malicious code and elevate privileges. N-able has released a patch and urges customers to update immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/n-able-takes-n-central-offline-as-researcher-drops-over-30-zero-days/",
    "publishedAt": "2026-11-10T09:56:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-disables-n-central-over-30-zero-day-flaws",
      "article-74835697",
      "74835697",
      "n-able-disables-n-central-over-30-zero-day-flaws-95ce8b"
    ]
  },
  {
    "slug": "malicious-vs-code-extension-steals-github-tokens-8dacf453",
    "title": "Malicious VS Code Extension Steals GitHub Tokens",
    "summary": "A poisoned Nx Console extension for VS Code stayed on the marketplace for 18 minutes, letting attackers install it and steal GitHub tokens. The extension captured authentication tokens during installation, compromising developer accounts and enabling unauthorized repository access. Developers should uninstall the extension immediately, revoke exposed tokens, and install official updates; Microsoft must remove the listing and investigate.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-steal-github-tokens/",
    "publishedAt": "2026-11-10T09:54:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "malicious-vs-code-extension-steals-github-tokens",
      "article-8dacf453",
      "8dacf453",
      "malicious-vs-code-extension-steals-github-tokens-664437"
    ]
  },
  {
    "slug": "ibm-signalwire-vulnerabilities-exploited-cisa-urge-dfabc271",
    "title": "IBM, SignalWire Vulnerabilities Exploited, CISA Urges Patch",
    "summary": "CISA added CVE-2026-123218 and CVE-2026-116779 to the KEV list after attackers exploited vulnerabilities in IBM Aspera Faspex and SignalWire FreeSwitch. The flaws enable remote code execution and privilege escalation, allowing adversaries to compromise server infrastructure and exfiltrate data. Federal agencies are urged to apply the vendor patches within three days to mitigate the active exploitation risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/ibm-aspera-faspex-signalwire-freeswitch-vulnerabilities-exploited-in-attacks/",
    "publishedAt": "2026-11-10T09:42:27.000Z",
    "cves": [
      "CVE-2026-123218",
      "CVE-2026-116779"
    ],
    "additionalSources": [],
    "aliases": [
      "ibm-signalwire-vulnerabilities-exploited-cisa-urge",
      "article-dfabc271",
      "dfabc271",
      "ibm-signalwire-vulnerabilities-exploited-cisa-urge-59bc4d",
      "ibm-signalwire-vulnerabilities-exploited-cisa-urges-patch"
    ]
  },
  {
    "slug": "hackers-use-fake-fofa-accounts-to-steal-ai-keys-2d9fba03",
    "title": "Hackers Use Fake FOFA Accounts to Steal AI Keys",
    "summary": "A threat actor created 1,438 fake FOFA accounts to scan the internet for leaked OpenAI and DeepSeek API keys. The system exploited misconfigured servers exposing API keys, enabling attackers to hijack AI services and potentially monetize or exfiltrate data. Organizations should rotate exposed keys, enforce strict key management, and monitor for unauthorized usage; FOFA must investigate account abuse.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/fake-fofa-accounts/",
    "publishedAt": "2026-11-10T09:39:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "hackers-use-fake-fofa-accounts-to-steal-ai-keys",
      "article-2d9fba03",
      "2d9fba03",
      "hackers-use-fake-fofa-accounts-to-steal-ai-keys-8fe774"
    ]
  },
  {
    "slug": "linux-kernel-receives-patch-for-multiple-vulnerabi-9e70e8b0",
    "title": "Linux Kernel Receives Patch for Multiple Vulnerabilities",
    "summary": "The Linux kernel was updated to address several security issues across multiple subsystems, including USB gadget drivers, memory management, and networking core. An attacker could potentially exploit these flaws to compromise system integrity, though no active exploitation has been reported. Kernel maintainers recommend applying the USN-9022-1 update immediately to mitigate the identified vulnerabilities.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9022-1",
    "publishedAt": "2026-11-10T09:09:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-receives-patch-for-multiple-vulnerabi",
      "article-9e70e8b0",
      "9e70e8b0",
      "linux-kernel-receives-patch-for-multiple-vulnerabi-7e88cb",
      "linux-kernel-receives-patch-for-multiple-vulnerabilities"
    ]
  },
  {
    "slug": "iranian-unit-sabotages-700-french-retail-refrigera-080a646c",
    "title": "Iranian Unit Sabotages 700 French Retail Refrigerators",
    "summary": "An IRGC cyber unit targeted refrigeration controllers at roughly 700 French retail sites, altering defrost settings to high temperatures. The change caused food spoilage and ignited fires in at least 15 locations, leading to significant losses. French authorities attribute the sabotage to Iran; operators should audit controller access logs and enforce stricter authentication controls.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/france-blames-iran-for-sabotage-attack.html",
    "publishedAt": "2026-11-10T09:08:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "iranian-unit-sabotages-700-french-retail-refrigera",
      "article-080a646c",
      "080a646c",
      "iranian-unit-sabotages-700-french-retail-refrigera-7e30f3",
      "iranian-unit-sabotages-700-french-retail-refrigerators"
    ]
  },
  {
    "slug": "ruby-gem-steals-credentials-installs-backdoors-in-a6ca377e",
    "title": "Ruby Gem Steals Credentials, Installs Backdoors in AI Tools",
    "summary": "A counterfeit Ruby gem, strutil-core, masquerades as a helper but installs credential‑stealing worm. The worm harvests 51 credential types, injects backdoors into AI tool settings, and can delete a home folder if a stolen GitHub token is revoked. Teams should remove the gem, audit dependencies, enforce RubyGems signing, and update AI tools to eliminate backdoors and stop credential theft.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/malicious-ruby-gem/",
    "publishedAt": "2026-11-10T08:55:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ruby-gem-steals-credentials-installs-backdoors-in",
      "article-a6ca377e",
      "a6ca377e",
      "ruby-gem-steals-credentials-installs-backdoors-in-e74af0",
      "ruby-gem-steals-credentials-installs-backdoors-in-ai-tools"
    ]
  },
  {
    "slug": "amd-rmp-flaw-allows-local-hypervisor-exploit-3afbdb66",
    "title": "AMD RMP Flaw Allows Local Hypervisor Exploit",
    "summary": "A flaw in AMD processors' Reverse Map Table checks was discovered, potentially enabling local hypervisor attackers to trigger an out‑of‑bounds condition. The vulnerability, identified as CVE-2023-20585, could compromise the integrity of SEV‑SNP guest memory if exploited. Kernel maintainers advise applying the USN-9024-1 update to patch affected subsystems and mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9024-1",
    "publishedAt": "2026-11-10T08:47:04.000Z",
    "cves": [
      "CVE-2023-20585"
    ],
    "additionalSources": [],
    "aliases": [
      "amd-rmp-flaw-allows-local-hypervisor-exploit",
      "article-3afbdb66",
      "3afbdb66",
      "amd-rmp-flaw-allows-local-hypervisor-exploit-7e88c3"
    ]
  },
  {
    "slug": "ubuntu-addresses-multiple-linux-kernel-vulnerabili-1cac7a6d",
    "title": "Ubuntu Addresses Multiple Linux Kernel Vulnerabilities in USN-9025-1",
    "summary": "Ubuntu released kernel updates addressing CVE-2023-20585 and multiple Linux kernel vulnerabilities. The AMD flaw allows hypervisor-privileged attackers to corrupt SEV-SNP guest memory via improper RMP checks; other issues affect USB gadget, memory management, NVDIMM, networking, and architecture subsystems. Updated kernel packages are available; immediate deployment is recommended to prevent system compromise.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9025-1",
    "publishedAt": "2026-11-10T08:47:02.000Z",
    "cves": [
      "CVE-2023-20585"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-addresses-multiple-linux-kernel-vulnerabili",
      "article-1cac7a6d",
      "1cac7a6d",
      "ubuntu-addresses-multiple-linux-kernel-vulnerabili-7e88c0",
      "ubuntu-addresses-multiple-linux-kernel-vulnerabilities-in-us"
    ]
  },
  {
    "slug": "linux-kernel-azure-rmp-check-flaw-exposes-sev-snp-15cee65f",
    "title": "Linux Kernel Azure RMP Check Flaw Exposes SEV‑SNP Memory",
    "summary": "A flaw in AMD processors’ IOMMU RMP checks on Linux kernel Azure allows a hypervisor attacker to trigger an out‑of‑bounds condition that could corrupt SEV‑SNP guest memory. The vulnerability, identified as CVE‑2023‑20585, exploits improper buffer validation and could lead to integrity violations. Ubuntu has released kernel patches covering multiple subsystems; users should apply the update to mitigate the risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9026-1",
    "publishedAt": "2026-11-10T08:46:54.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-azure-rmp-check-flaw-exposes-sev-snp",
      "article-15cee65f",
      "15cee65f",
      "linux-kernel-azure-rmp-check-flaw-exposes-sev-snp-7e88bc",
      "linux-kernel-azure-rmp-check-flaw-exposes-sev-snp-memory"
    ]
  },
  {
    "slug": "turtle-beach-audio-driver-race-condition-enables-l-0eb87dbe",
    "title": "Turtle Beach Audio Driver Race Condition Enables Local Exploit",
    "summary": "The Turtle Beach MultiSound audio driver in Linux contains race conditions that trigger out‑of‑bounds accesses during ring‑buffer reads, allowing a local attacker to cause a denial of service or possibly execute code. The flaw, CVE‑2017‑9986, enables local privilege escalation that could compromise system integrity. Ubuntu has released kernel patches for the affected subsystems; users should apply them promptly.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9035-1",
    "publishedAt": "2026-11-10T08:46:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "turtle-beach-audio-driver-race-condition-enables-l",
      "article-0eb87dbe",
      "0eb87dbe",
      "turtle-beach-audio-driver-race-condition-enables-l-7e884b",
      "turtle-beach-audio-driver-race-condition-enables-local-explo"
    ]
  },
  {
    "slug": "raspberry-pi-kernel-ax-25-race-condition-causes-do-921bb2ee",
    "title": "Raspberry Pi Kernel AX.25 Race Condition Causes DoS",
    "summary": "AX.25 protocol race conditions on Raspberry Pi Linux kernels cause use‑after‑free bugs that a local attacker can exploit to crash the system. The i.MX clock driver also has a null pointer dereference due to improper allocation handling, leading to a local denial of service (CVE‑2022‑3114).",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9029-1",
    "publishedAt": "2026-11-10T08:46:37.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "raspberry-pi-kernel-ax-25-race-condition-causes-do",
      "article-921bb2ee",
      "921bb2ee",
      "raspberry-pi-kernel-ax-25-race-condition-causes-do-7e88b1",
      "raspberry-pi-kernel-ax-25-race-condition-causes-dos"
    ]
  },
  {
    "slug": "xen-frontend-vulnerabilities-allow-guest-memory-ac-36bf45fe",
    "title": "Xen Frontend Vulnerabilities Allow Guest Memory Access",
    "summary": "USN-9034-1 patches Linux kernel vulnerabilities in AWS Xen, including CVE-2022-23037, that let malicious backends read guest memory or cause denial of service. The issue stems from inadequate access‑right checks in Xen device frontends, enabling unauthorized memory reads and potential guest workload disruption. Kernel maintainers released patches; administrators should update affected systems and verify Xen configurations to prevent exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9034-1",
    "publishedAt": "2026-11-10T08:46:28.000Z",
    "cves": [
      "CVE-2022-23037"
    ],
    "additionalSources": [],
    "aliases": [
      "xen-frontend-vulnerabilities-allow-guest-memory-ac",
      "article-36bf45fe",
      "36bf45fe",
      "xen-frontend-vulnerabilities-allow-guest-memory-ac-7e884f",
      "xen-frontend-vulnerabilities-allow-guest-memory-access"
    ]
  },
  {
    "slug": "linux-kernel-vulnerabilities-updated-36aef8d2",
    "title": "Linux Kernel Vulnerabilities Updated",
    "summary": "Multiple Linux kernel flaws, including CVE-2024-53210, were found in GPU and network subsystems, allowing attackers to potentially compromise systems. The USN‑9032‑1 update patches seven CVEs, including CVE-2026-43456, by fixing memory corruption and validation errors that could lead to privilege escalation or denial of service. Apply the patch immediately and upgrade to the latest kernel to prevent reintroduction of the flaws.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9032-1",
    "publishedAt": "2026-11-10T08:46:16.000Z",
    "cves": [
      "CVE-2024-53210",
      "CVE-2026-43456"
    ],
    "additionalSources": [],
    "aliases": [
      "linux-kernel-vulnerabilities-updated",
      "article-36aef8d2",
      "36aef8d2",
      "linux-kernel-vulnerabilities-updated-7e8857"
    ]
  },
  {
    "slug": "ubuntu-kernel-patch-addresses-xen-device-frontend-3cbe023d",
    "title": "Ubuntu Kernel Patch Addresses Xen Device Frontend Flaws",
    "summary": "Ubuntu released USN‑9033‑1 to fix multiple Linux kernel flaws affecting Xen para‑virtualization device frontends. The vulnerabilities, including CVE‑2022‑23036, allow a malicious Xen backend to read guest memory or trigger a denial of service, potentially compromising isolation between virtual machines. The update applies patches to the kernel subsystems and should be installed immediately to prevent exploitation.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9033-1",
    "publishedAt": "2026-11-10T08:46:13.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-kernel-patch-addresses-xen-device-frontend",
      "article-3cbe023d",
      "3cbe023d",
      "ubuntu-kernel-patch-addresses-xen-device-frontend-7e8853",
      "ubuntu-kernel-patch-addresses-xen-device-frontend-flaws"
    ]
  },
  {
    "slug": "ubuntu-addresses-multiple-kernel-vulnerabilities-3840f8cd",
    "title": "Ubuntu Addresses Multiple Kernel Vulnerabilities",
    "summary": "Ubuntu released USN-9023-1, patching multiple Linux kernel vulnerabilities that could let attackers compromise systems. Flaws touch USB gadget drivers, memory management, networking core, ARM/x86 architectures, and device drivers, with no confirmed exploitation but potential for privilege escalation or denial of service. All affected subsystems are fixed; admins should apply the latest kernel or backport the patches.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9023-1",
    "publishedAt": "2026-11-10T08:46:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-addresses-multiple-kernel-vulnerabilities",
      "article-3840f8cd",
      "3840f8cd",
      "ubuntu-addresses-multiple-kernel-vulnerabilities-7e88c7"
    ]
  },
  {
    "slug": "ubuntu-releases-kernel-patch-for-multiple-vulnerab-d99e037b",
    "title": "Ubuntu Releases Kernel Patch for Multiple Vulnerabilities",
    "summary": "Ubuntu released USN-9018-1, addressing several kernel vulnerabilities that could allow attackers to compromise affected systems. The flaws span network file systems, ARM64, PowerPC, RISC-V, S390, and numerous device drivers, exposing potential privilege escalation and denial of service. Ubuntu has issued a kernel update; administrators should apply the patch promptly to eliminate the exploitation vector.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9018-1",
    "publishedAt": "2026-11-10T08:42:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-releases-kernel-patch-for-multiple-vulnerab",
      "article-d99e037b",
      "d99e037b",
      "ubuntu-releases-kernel-patch-for-multiple-vulnerab-7e8929",
      "ubuntu-releases-kernel-patch-for-multiple-vulnerabilities"
    ]
  },
  {
    "slug": "progress-ws-ftp-server-addresses-seven-credential-cf7e693a",
    "title": "Progress WS_FTP Server Addresses Seven Credential Theft Flaws",
    "summary": "Progress Software released a pack for WS_FTP Server 2025.0.5 to fix seven flaws enabling credential theft, path traversal, and file transfer disruption. The flaws, catalogued as CVE-2026-124033, allow unauthenticated remote code execution and local file access, compromising credentials and exposing restricted files. Upgrade to WS_FTP Server 2025.0.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/progress-ws_ftp-server-fixes-security-vulnerabilities/",
    "publishedAt": "2026-11-10T08:42:39.000Z",
    "cves": [
      "CVE-2026-124033"
    ],
    "additionalSources": [],
    "aliases": [
      "progress-ws-ftp-server-addresses-seven-credential",
      "article-cf7e693a",
      "cf7e693a",
      "progress-ws-ftp-server-addresses-seven-credential-1ce304",
      "progress-ws-ftp-server-addresses-seven-credential-theft-flaw"
    ]
  },
  {
    "slug": "apple-releases-ios-27-2-1-patch-for-nine-flaws-a9f244fd",
    "title": "Apple Releases iOS 27.2.1 Patch for Nine Flaws",
    "summary": "Apple released iOS 27.2.1 and iPadOS 27.2.1 on November 9, fixing nine security flaws across Bluetooth, AirPlay, Messages, and other system components. The flaws could allow attackers to gain unauthorized access or execute code via malformed pairing requests or message payloads, identified during internal reviews. Users should install the update immediately to eliminate the exploitation vector and maintain device integrity.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/apple-fixes-security-vulnerabilities/",
    "publishedAt": "2026-11-10T08:38:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-releases-ios-27-2-1-patch-for-nine-flaws",
      "article-a9f244fd",
      "a9f244fd",
      "apple-releases-ios-27-2-1-patch-for-nine-flaws-44b050"
    ]
  },
  {
    "slug": "sega-breach-exposes-2-19m-emails-via-arara-8674511c",
    "title": "SEGA Breach Exposes 2.19M Emails via Arara",
    "summary": "A SEGA data breach exposed 2,196,044 customer emails after attackers accessed Arara Message, a third‑party newsletter service. The breach leveraged unauthorized access to the provider’s account, leaking email lists tied to SEGA and SEGA Fave, with no other personal data reported. SEGA disclosed on November 9, 2026, and urged users to watch for phishing while the provider secures its systems.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/sega-confirms-data-breach/",
    "publishedAt": "2026-11-10T08:34:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sega-breach-exposes-2-19m-emails-via-arara",
      "article-8674511c",
      "8674511c",
      "sega-breach-exposes-2-19m-emails-via-arara-b9e124"
    ]
  },
  {
    "slug": "nine-leading-crq-tools-ranked-for-2026-673ee821",
    "title": "Nine Leading CRQ Tools Ranked for 2026",
    "summary": "The article ranks nine cyber risk quantification tools for 2026, evaluating how they convert security severity metrics into budget‑friendly dollar estimates. It separates FAIR‑methodology descendants, telemetry‑based engines using live estate data, and ratings‑lineage platforms monetizing scoring graphs, noting a duplicate BitSight entry. Security teams can use the list to choose tools matching risk‑budget translation needs and benchmark industry performance.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/best-crq-tools/",
    "publishedAt": "2026-11-10T08:31:05.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nine-leading-crq-tools-ranked-for-2026",
      "article-673ee821",
      "673ee821",
      "nine-leading-crq-tools-ranked-for-2026-4bbbbd"
    ]
  },
  {
    "slug": "north-korean-hackers-launder-binance-theft-with-me-6d495b7f",
    "title": "North Korean Hackers Launder Binance Theft with Meme Coins",
    "summary": "North Korean hackers created meme coins to move cryptocurrency stolen from Binance's $6.4B hack, using fake trading activity to disguise proceeds. The scheme inserts DEX liquidity pools between wallets holding stolen assets and those collecting proceeds, masking trails. Binance and regulators should monitor pools for anomalies, enforce stricter KYC on meme coin exchanges, and use blockchain analytics to trace funds.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/fake-meme-coins/",
    "publishedAt": "2026-11-10T08:25:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "north-korean-hackers-launder-binance-theft-with-me",
      "article-6d495b7f",
      "6d495b7f",
      "north-korean-hackers-launder-binance-theft-with-me-530867",
      "north-korean-hackers-launder-binance-theft-with-meme-coins"
    ]
  },
  {
    "slug": "2026-digital-forensics-tools-ranking-de25091e",
    "title": "2026 Digital Forensics Tools Ranking",
    "summary": "A 2026 ranking evaluates digital forensics tools, judging them by the durability of findings under cross‑examination and their artifact depth. The list covers mobile‑extraction giants, disk‑and‑artifact workhorses, memory‑analysis frameworks, and open‑source pillars, weighing evidentiary rigor and economics. Security analysts can reference the ranking to select tools that provide robust evidence and cost‑effective performance.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/best-digital-forensics-tools/",
    "publishedAt": "2026-11-10T08:21:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "2026-digital-forensics-tools-ranking",
      "article-de25091e",
      "de25091e",
      "2026-digital-forensics-tools-ranking-6a2703"
    ]
  },
  {
    "slug": "claude-fable-5-2-outperforms-gpt-6-in-cyberattack-5e0c9d71",
    "title": "Claude Fable 5.2 Outperforms GPT-6 in Cyberattack Benchmark",
    "summary": "Anthropic released Claude Fable 5.2 and Claude Mythos 5.2 models, which were evaluated against GPT‑6 in a multi‑stage cyberattack benchmark. The models demonstrated enhanced coding, reasoning, and vision, enabling engineers to complete complex software migrations, design electronic devices, and solve advanced physics problems during pre‑release training. Benchmark results are publicly available, enabling teams to assess LLM readiness for cyber‑defense.",
    "category": "General",
    "severity": "LOW",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/anthropics-claude-fable-52-beats-gpt-6.html",
    "publishedAt": "2026-11-10T08:16:14.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "claude-fable-5-2-outperforms-gpt-6-in-cyberattack",
      "article-5e0c9d71",
      "5e0c9d71",
      "claude-fable-5-2-outperforms-gpt-6-in-cyberattack-519b9d",
      "claude-fable-5-2-outperforms-gpt-6-in-cyberattack-benchmark"
    ]
  },
  {
    "slug": "2026-genai-soc-copilots-ranking-083dfa4a",
    "title": "2026 GenAI SOC Copilots Ranking",
    "summary": "A 2026 ranking evaluates GenAI SOC copilots, distinguishing assistants that summarize and draft within human workflows from autonomous agents that manage tier‑1 queues under policy guardrails. The list assesses tools on triage efficiency and platform integration, highlighting both suite copilots and AI analysts. Security teams can use the ranking to select tools aligned with their triage and automation needs.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/best-genai-soc-copilots/",
    "publishedAt": "2026-11-10T08:14:07.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "2026-genai-soc-copilots-ranking",
      "article-083dfa4a",
      "083dfa4a",
      "2026-genai-soc-copilots-ranking-78d757"
    ]
  },
  {
    "slug": "fortinet-fixes-authentication-bypass-flaw-in-forti-afc192a8",
    "title": "Fortinet Fixes Authentication Bypass Flaw in FortiAuthenticator",
    "summary": "Fortinet reported a critical incorrect authorization vulnerability affecting FortiAuthenticator identity management software. Tracked under CWE-863 with a CVSSv3 score of 9.1, the flaw allows remote attackers to bypass authentication controls and gain unauthorized system access. Security teams should review Fortinet PSIRT advisories and apply available software patches immediately to mitigate risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-265",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortinet-fixes-authentication-bypass-flaw-in-forti",
      "article-afc192a8",
      "afc192a8",
      "fortinet-fixes-authentication-bypass-flaw-in-forti-3bcda5",
      "fortinet-fixes-authentication-bypass-flaw-in-fortiauthentica"
    ]
  },
  {
    "slug": "improper-privilege-management-e356f9b9",
    "title": "Improper privilege management",
    "summary": "CVSSv3 Score: 7.2 An Improper Privilege Management vulnerability[CWE-269] in FortiAuthenticator may allow an authenticated attacker to escalate privileges. Revised on 2026-11-10 00:00:00. The vulnerability is tracked as CVE-2026-108415.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-263",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [
      "CVE-2026-108415"
    ],
    "additionalSources": [],
    "aliases": [
      "improper-privilege-management",
      "article-e356f9b9",
      "e356f9b9",
      "improper-privilege-management-3bcda5"
    ]
  },
  {
    "slug": "fortinet-fixes-os-command-injection-flaw-in-fortim-2d592ff6",
    "title": "Fortinet Fixes OS Command Injection Flaw in FortiMail",
    "summary": "Fortinet disclosed an OS command injection vulnerability affecting its FortiMail secure email gateway platform. Classified under CWE-78 with a CVSSv3 score of 7.2, the flaw allows an authenticated administrator to execute arbitrary commands as root using specially crafted HTTP requests. Administrators should review the updated FortiGuard PSIRT advisory and apply recommended updates to prevent escalation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-210",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortinet-fixes-os-command-injection-flaw-in-fortim",
      "article-2d592ff6",
      "2d592ff6",
      "fortinet-fixes-os-command-injection-flaw-in-fortim-3bcda6",
      "fortinet-fixes-os-command-injection-flaw-in-fortimail"
    ]
  },
  {
    "slug": "fortinet-patches-command-injection-flaw-in-managem-fe551848",
    "title": "Fortinet Patches Command Injection Flaw in Management Products",
    "summary": "Fortinet reported an OS command injection flaw affecting GUI components in FortiManager, FortiAnalyzer, FortiManager Cloud, FortiAnalyzer Cloud, and FortiSASE-Sovereign. Assigned CWE-78 with a 7.2 CVSSv3 score, the weakness enables authenticated attackers to execute arbitrary commands through crafted HTTP requests. Security teams should consult the revised FortiGuard advisory and apply necessary software updates across affected deployments.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-251",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortinet-patches-command-injection-flaw-in-managem",
      "article-fe551848",
      "fe551848",
      "fortinet-patches-command-injection-flaw-in-managem-3bcda5",
      "fortinet-patches-command-injection-flaw-in-management-produc"
    ]
  },
  {
    "slug": "improper-neutralization-of-special-elements-used-i-8a3d6063",
    "title": "Improper neutralization of special elements used in an SQL command",
    "summary": "CVSSv3 Score: 8.8 An improper neutralization of special elements used in an SQL Command ('SQL Injection') vulnerability [CWE-89] in FortiAnalyzer, FortiAnalyzer Cloud, FortiManager and FortiManager Cloud may allow an authenticated attacker to execute unauthorized code or commands via crafted JSON-RPC requests.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-221",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "improper-neutralization-of-special-elements-used-i",
      "article-8a3d6063",
      "8a3d6063",
      "improper-neutralization-of-special-elements-used-i-3bcda6",
      "improper-neutralization-of-special-elements-used-in-an-sql-c"
    ]
  },
  {
    "slug": "fortinet-patches-sql-injection-vulnerability-in-co-8467f4d3",
    "title": "Fortinet Patches SQL Injection Vulnerability in Collectoragent",
    "summary": "Fortinet disclosed an SQL injection vulnerability affecting the collectoragent component in its enterprise security software. Tracked with a CVSSv3 score of 8.3, the flaw stems from improper neutralization of special elements within SQL commands. An authenticated attacker can leverage HTTP requests to execute unauthorized code or system commands, prompting Fortinet to revise its advisory.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-266",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortinet-patches-sql-injection-vulnerability-in-co",
      "article-8467f4d3",
      "8467f4d3",
      "fortinet-patches-sql-injection-vulnerability-in-co-3bcda5",
      "fortinet-patches-sql-injection-vulnerability-in-collectorage"
    ]
  },
  {
    "slug": "fortimail-fortirecorder-os-command-injection-vulne-b3263854",
    "title": "FortiMail, FortiRecorder OS Command Injection Vulnerability",
    "summary": "FortiMail and FortiRecorder OS Command Injection allows authenticated privileged attackers to run unauthorized code via crafted archive account configurations. The flaw arises from improper neutralization of special elements (CWE‑78) and has a CVSS 7.2 score, enabling remote code execution. Fortinet released patches; teams should apply updates immediately and harden archive account settings.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-198",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortimail-fortirecorder-os-command-injection-vulne",
      "article-b3263854",
      "b3263854",
      "fortimail-fortirecorder-os-command-injection-vulne-3bcda8",
      "fortimail-fortirecorder-os-command-injection-vulnerability"
    ]
  },
  {
    "slug": "fortimail-os-command-injection-enables-root-execut-13d41b0e",
    "title": "FortiMail OS Command Injection Enables Root Execution",
    "summary": "FortiMail OS Command Injection allows an authenticated administrator with system‑time read‑write access to execute code as root. The flaw results from improper neutralization of special elements (CWE‑78) and carries a CVSS 7.2 score, enabling privileged code execution. Fortinet has issued patches; administrators should apply updates promptly and restrict system‑time write permissions.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-197",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortimail-os-command-injection-enables-root-execut",
      "article-13d41b0e",
      "13d41b0e",
      "fortimail-os-command-injection-enables-root-execut-3bcda8",
      "fortimail-os-command-injection-enables-root-execution"
    ]
  },
  {
    "slug": "fortinet-patches-sql-injection-bug-in-fortimanager-ab02bfce",
    "title": "Fortinet Patches SQL Injection Bug in FortiManager and FortiAnalyzer",
    "summary": "Fortinet disclosed an SQL injection flaw in FortiManager, FortiManager Cloud, FortiAnalyzer, and FortiAnalyzer Cloud devices. Designated as a CWE-89 weakness with a 7.1 CVSSv3 score, the flaw allows authenticated attackers to execute unauthorized SQL commands using crafted requests. Administrators should review the revised Fortinet advisory and deploy official vendor software updates to secure vulnerable deployments.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-233",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortinet-patches-sql-injection-bug-in-fortimanager",
      "article-ab02bfce",
      "ab02bfce",
      "fortinet-patches-sql-injection-bug-in-fortimanager-3bcda5",
      "fortinet-patches-sql-injection-bug-in-fortimanager-and-forti"
    ]
  },
  {
    "slug": "improper-neutralization-of-special-elements-used-i-0f4ba94c",
    "title": "Improper neutralization of special elements used in an OS command",
    "summary": "CVSSv3 Score: 7.2 An improper Neutralization of Special Elements used in an OS Command ('OS Command Injection') vulnerability (CWE-78) in FortiAnalyzer, FortiAnalyzer Cloud, FortiManager, FortiManager Cloud system-ha plugin may allow an authenticated attacker to execute unauthorized commands via a crafted HTTP request.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-246",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "improper-neutralization-of-special-elements-used-i",
      "article-0f4ba94c",
      "0f4ba94c",
      "improper-neutralization-of-special-elements-used-i-3bcda5",
      "improper-neutralization-of-special-elements-used-in-an-os-co"
    ]
  },
  {
    "slug": "fortimanager-argument-injection-privilege-escalati-e9e70a94",
    "title": "FortiManager Argument Injection Privilege Escalation",
    "summary": "An improper neutralization of argument delimiters in FortiManager, FortiAnalyzer, and cloud variants permits authenticated privileged admins to execute unauthorized code. The flaw, rated CVSSv3 7.2, arises from insufficient escaping of shell metacharacters during command construction, enabling local code execution. Fortinet released a patch in the latest firmware; administrators should upgrade or apply the advisory to mitigate the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-239",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortimanager-argument-injection-privilege-escalati",
      "article-e9e70a94",
      "e9e70a94",
      "fortimanager-argument-injection-privilege-escalati-3bcda5",
      "fortimanager-argument-injection-privilege-escalation"
    ]
  },
  {
    "slug": "fortios-ssh-daemon-authentication-bypass-path-trav-0064a9d7",
    "title": "FortiOS SSH Daemon Authentication Bypass Path Traversal",
    "summary": "A path traversal flaw in FortiOS, FortiSASE, FortiProxy, and FortiPam ssh daemon allows unauthenticated attackers to bypass authentication via crafted credentials. The vulnerability, CVSSv3 7.4, exploits improper sanitization of SSH credentials, enabling remote code execution without prior authentication. Fortinet issued a patch in the latest firmware; users should update immediately to prevent authentication bypass.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-269",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortios-ssh-daemon-authentication-bypass-path-trav",
      "article-0064a9d7",
      "0064a9d7",
      "fortios-ssh-daemon-authentication-bypass-path-trav-3bcda5",
      "fortios-ssh-daemon-authentication-bypass-path-traversal"
    ]
  },
  {
    "slug": "improper-neutralization-of-special-elements-used-i-164bb451",
    "title": "Improper neutralization of special elements used in a template engine",
    "summary": "CVSSv3 Score: 7.2 A Server-Side Template Injection vulnerability [CWE-1336] in FortiManager, FortiManager Cloud, FortiAnalyzer and FortiAnalyzer Cloud may allow an authenticated attacker with restricted privileges to execute unauthorized code or commands via a specially crafted request.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-249",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "improper-neutralization-of-special-elements-used-i",
      "article-164bb451",
      "164bb451",
      "improper-neutralization-of-special-elements-used-i-3bcda5",
      "improper-neutralization-of-special-elements-used-in-a-templa"
    ]
  },
  {
    "slug": "fortimai-path-traversal-enables-unauthenticated-co-a1b58ab0",
    "title": "FortiMai Path Traversal Enables Unauthenticated Command Execution",
    "summary": "FortiMai suffers a path traversal flaw that allows unauthenticated attackers to execute arbitrary commands via crafted requests. The vulnerability, rated CVSSv3 7.5, exploits improper pathname limitation (CWE-22) and could enable remote code execution without authentication. Fortinet has not yet released a patch; security teams should monitor advisories and apply any future updates promptly.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-205",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortimai-path-traversal-enables-unauthenticated-co",
      "article-a1b58ab0",
      "a1b58ab0",
      "fortimai-path-traversal-enables-unauthenticated-co-3bcda6",
      "fortimai-path-traversal-enables-unauthenticated-command-exec"
    ]
  },
  {
    "slug": "fortimanager-path-traversal-lets-authenticated-adm-d66b8fbf",
    "title": "FortiManager Path Traversal Lets Authenticated Admin Write Files",
    "summary": "FortiManager, FortiAnalyzer, and their cloud variants contain a path traversal flaw that permits administrators to write arbitrary files via a crafted archive. The vulnerability, scored CVSSv3 7.2 and identified as CWE-22, enables file overwrite or injection without requiring elevated privileges. Fortinet has not yet issued a patch; security teams should monitor advisories and apply any future updates promptly.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-250",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortimanager-path-traversal-lets-authenticated-adm",
      "article-d66b8fbf",
      "d66b8fbf",
      "fortimanager-path-traversal-lets-authenticated-adm-3bcda5",
      "fortimanager-path-traversal-lets-authenticated-admin-write-f"
    ]
  },
  {
    "slug": "fortimail-path-traversal-enables-unauthenticated-r-f256e300",
    "title": "FortiMail Path Traversal Enables Unauthenticated RCE",
    "summary": "A path traversal flaw in FortiMail allows an unauthenticated attacker to craft requests that bypass directory restrictions. The vulnerability, rated CVSSv3 9.8, permits execution of arbitrary code or commands, exposing the system to full compromise. Fortinet has released an update; administrators should apply the FortiMail patch immediately to eliminate the RCE risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-199",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortimail-path-traversal-enables-unauthenticated-r",
      "article-f256e300",
      "f256e300",
      "fortimail-path-traversal-enables-unauthenticated-r-3bcda8",
      "fortimail-path-traversal-enables-unauthenticated-rce"
    ]
  },
  {
    "slug": "fortimanager-analyzer-gui-allows-authenticated-rce-87376379",
    "title": "FortiManager/Analyzer GUI Allows Authenticated RCE",
    "summary": "FortiManager, FortiManager Cloud, FortiAnalyzer, and FortiAnalyzer Cloud contain a file path control flaw and a special element neutralization issue. The CVSSv3 7.2 vulnerability lets an authenticated administrator read or write arbitrary files or execute code via crafted GUI requests, risking full compromise. Fortinet released patches for all affected products; administrators should apply them promptly to eliminate the RCE vector.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-236",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortimanager-analyzer-gui-allows-authenticated-rce",
      "article-87376379",
      "87376379",
      "fortimanager-analyzer-gui-allows-authenticated-rce-3bcda5"
    ]
  },
  {
    "slug": "fortimail-improper-auth-lets-unauthenticated-users-9e84fa47",
    "title": "FortiMail Improper Auth Lets Unauthenticated Users Delete Quarantined Messages",
    "summary": "Fortinet FortiMail’s improper authentication flaw, CVSS 8.2, lets an unauthenticated attacker craft quarantine release requests to delete or release messages for any mailbox. The flaw enables privilege escalation and unauthorized data exfiltration by bypassing mailbox isolation, potentially exposing sensitive email content. Fortinet has issued a patch; administrators should update FortiMail firmware and enforce strict authentication controls to mitigate exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-212",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortimail-improper-auth-lets-unauthenticated-users",
      "article-9e84fa47",
      "9e84fa47",
      "fortimail-improper-auth-lets-unauthenticated-users-3bcda6",
      "fortimail-improper-auth-lets-unauthenticated-users-delete-qu"
    ]
  },
  {
    "slug": "fortinet-code-injection-vulnerability-in-fortimana-1193a727",
    "title": "Fortinet Code Injection Vulnerability in FortiManager",
    "summary": "Fortinet disclosed a code injection flaw in FortiManager, FortiManager Cloud, FortiAnalyzer, and FortiAnalyzer Cloud that lets authenticated administrators run arbitrary code via crafted requests. Rated CVSS 7.2 and identified as CWE-94, the flaw enables remote code execution without privilege escalation and has public PoC exploits.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-230",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortinet-code-injection-vulnerability-in-fortimana",
      "article-1193a727",
      "1193a727",
      "fortinet-code-injection-vulnerability-in-fortimana-3bcda5",
      "fortinet-code-injection-vulnerability-in-fortimanager"
    ]
  },
  {
    "slug": "improper-limitation-of-a-pathname-to-a-restricted-422c1124",
    "title": "Improper limitation of a pathname to a restricted directory",
    "summary": "CVSSv3 Score: 7.2 An Improper Limitation of a Pathname to a Restricted Directory (CWE-22) vulnerability in FortiManager, FortiAnalyzer, FortiManager Cloud and FortiAnalyzer Cloud may allow an authenticated attacker with admin privileges to execute unauthorized code or commands via crafted requests.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-237",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "improper-limitation-of-a-pathname-to-a-restricted",
      "article-422c1124",
      "422c1124",
      "improper-limitation-of-a-pathname-to-a-restricted-3bcda5",
      "improper-limitation-of-a-pathname-to-a-restricted-directory"
    ]
  },
  {
    "slug": "improper-certificate-validation-in-radius-protocol-22ed1f8d",
    "title": "Improper certificate validation in RADIUS protocol",
    "summary": "CVSSv3 Score: 7.5 An Improper Certificate Validation vulnerability [CWE-295] in FortiSASE Sovereign, FortiManager, Fortianalyzer, FortiManager Cloud and FortiAnalyzer Cloud RADIUS protocol may allow a MITM attacker to impersonate the radius server via a rogue RADIUS server.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-247",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "improper-certificate-validation-in-radius-protocol",
      "article-22ed1f8d",
      "22ed1f8d",
      "improper-certificate-validation-in-radius-protocol-3bcda5"
    ]
  },
  {
    "slug": "improper-control-of-generation-of-code-in-gui-0d112c22",
    "title": "Improper control of generation of code in GUI",
    "summary": "CVSSv3 Score: 7.2 An Improper Control of Generation of Code ('Code Injection') vulnerability [CWE-94] and a Buffer Copy without Checking Size of Input ('Classic Buffer Overflow') vulnerability [CWE-120] in FortiManager, FortiAnalyzer, FortiManager Cloud, and FortiAnalyzer Cloud may allow a remote authenticated attacker to execute unauthorized code or commands via crafted HTTP requests.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-227",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "improper-control-of-generation-of-code-in-gui",
      "article-0d112c22",
      "0d112c22",
      "improper-control-of-generation-of-code-in-gui-3bcda6"
    ]
  },
  {
    "slug": "fortimanager-fgfm-elevation-exploit-allows-unauthe-d21806a6",
    "title": "FortiManager FGFM Elevation Exploit Allows Unauthenticated Code Execution",
    "summary": "Fortinet FortiManager FGFM contains an elevation of privilege flaw that permits unauthenticated attackers to reach the FGFM port and send crafted packets. The vulnerability, rated CVSSv3 9.0, enables remote code execution or command injection, potentially compromising the entire FortiManager infrastructure. Fortinet released a patch in the latest FortiOS update; administrators should apply it immediately and restrict FGFM port access.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-275",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortimanager-fgfm-elevation-exploit-allows-unauthe",
      "article-d21806a6",
      "d21806a6",
      "fortimanager-fgfm-elevation-exploit-allows-unauthe-3bcda5",
      "fortimanager-fgfm-elevation-exploit-allows-unauthenticated-c"
    ]
  },
  {
    "slug": "heap-based-buffer-overflow-0480e745",
    "title": "Heap-based buffer overflow",
    "summary": "CVSSv3 Score: 7.2 A Heap-based Buffer Overflow vulnerability [CWE-122] in FortiManager, FortiManager Cloud, FortiAnalyzer and FortiAnalyzer Cloud may allow an authenticated administrator to execute unauthorized code or commands or cause a denial of service via specially crafted JSON-RPC requests. The vulnerability is tracked as CVE-2026-0250.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-232",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [
      "CVE-2026-0250"
    ],
    "additionalSources": [],
    "aliases": [
      "heap-based-buffer-overflow",
      "article-0480e745",
      "0480e745",
      "heap-based-buffer-overflow-3bcda5"
    ]
  },
  {
    "slug": "fortiauthenticator-resource-exhaustion-vulnerabili-e3d17678",
    "title": "FortiAuthenticator Resource Exhaustion Vulnerability Exposes DoS Risk",
    "summary": "Fortinet disclosed a resource allocation flaw in FortiAuthenticator’s FastAPI, letting unauthenticated attackers exhaust system resources and cause a denial of service. The CVSSv3 score of 7.5 indicates high severity, and the flaw can be triggered with crafted requests without authentication. Fortinet recommends applying the latest firmware patch or enabling traffic throttling to mitigate the DoS risk.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-258",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortiauthenticator-resource-exhaustion-vulnerabili",
      "article-e3d17678",
      "e3d17678",
      "fortiauthenticator-resource-exhaustion-vulnerabili-3bcda5",
      "fortiauthenticator-resource-exhaustion-vulnerability-exposes"
    ]
  },
  {
    "slug": "arbitrary-file-write-and-delete-in-json-api-80fa3011",
    "title": "Arbitrary file write and delete in JSON API",
    "summary": "CVSSv3 Score: 7.3 An improper limitation of a pathname to a restricted directory ('Path Traversal') vulnerability [CWE-22] in FortiManager and FortiAnalyzer API may allow an authenticated attacker whose profile only has read permission to write and delete files from the underlying filesystem via crafted HTTP or HTTPs requests.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-190",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "arbitrary-file-write-and-delete-in-json-api",
      "article-80fa3011",
      "80fa3011",
      "arbitrary-file-write-and-delete-in-json-api-3bcda8"
    ]
  },
  {
    "slug": "broken-access-control-in-two-factor-authentication-f2fe69ff",
    "title": "Broken Access Control in Two-Factor-Authentication",
    "summary": "CVSSv3 Score: 5.9 An Improper Authentication vulnerability [CWE-287] in the FortiOS Remote Radius Type Admin Two-Factor (TFA) Authentication may allow a remote authenticated attacker with at least read-only permission to log in to the FortiOS GUI with an invalid token after entering a valid username and password, in scenarios where the RADIUS server returns an additional \"Access-Challenge\" response following an invalid TFA token.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-195",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "broken-access-control-in-two-factor-authentication",
      "article-f2fe69ff",
      "f2fe69ff",
      "broken-access-control-in-two-factor-authentication-3bcda8"
    ]
  },
  {
    "slug": "fortimail-authorization-bypass-cve-2026-20183-928489a1",
    "title": "FortiMail Authorization Bypass CVE-2026-20183",
    "summary": "FortiMail suffers an authorization bypass via user-controlled key, identified as CVE-2026-20183, enabling unauthenticated attackers to release or delete quarantined messages for any mailbox. The flaw, rated CVSS 7.5, exploits a crafted quarantine release request that bypasses mailbox ownership checks, potentially exposing sensitive email content. Fortinet has released a patch; administrators should update FortiMail immediately and verify quarantine controls are enforced.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-211",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [
      "CVE-2026-20183"
    ],
    "additionalSources": [],
    "aliases": [
      "fortimail-authorization-bypass-cve-2026-20183",
      "article-928489a1",
      "928489a1",
      "fortimail-authorization-bypass-cve-2026-20183-3bcda6"
    ]
  },
  {
    "slug": "fortimanager-gui-authorization-bypass-cve-2026-201-031a68ae",
    "title": "FortiManager GUI Authorization Bypass CVE-2026-20183",
    "summary": "FortiManager, FortiManager Cloud, and FortiSase‑Sovereign GUIs contain an authorization bypass via user‑controlled key, identified as CVE-2026-20183, allowing authenticated attackers to execute commands beyond their intended scope. The flaw, scored CVSS 8.7, exploits crafted HTTP requests that bypass role‑based access controls, enabling privilege escalation and potential system compromise. Fortinet released a patch; administrators should upgrade firmware immediately and enforce strict roles.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-228",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [
      "CVE-2026-20183"
    ],
    "additionalSources": [
      {
        "source": "Fortinet FortiGuard PSIRT",
        "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-244"
      }
    ],
    "aliases": [
      "fortimanager-gui-authorization-bypass-cve-2026-201",
      "article-031a68ae",
      "031a68ae",
      "fortimanager-gui-authorization-bypass-cve-2026-201-3bcda6",
      "fortimanager-gui-authorization-bypass-cve-2026-20183"
    ]
  },
  {
    "slug": "fortimanager-incorrect-authorization-exploit-45adf444",
    "title": "FortiManager Incorrect Authorization Exploit",
    "summary": "FortiManager, FortiManager Cloud, FortiAnalyzer, FortiAnalyzer Cloud, and FortiAnalyzer‑BigData have an incorrect authorization flaw allowing authenticated administrators to elevate privileges or impersonate services via crafted GUI requests. The flaw, scored CVSS 8.7, exploits improper privilege management and authentication spoofing, potentially enabling full system compromise. Fortinet released a patch; administrators should apply it immediately and review role assignments to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-234",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortimanager-incorrect-authorization-exploit",
      "article-45adf444",
      "45adf444",
      "fortimanager-incorrect-authorization-exploit-3bcda5"
    ]
  },
  {
    "slug": "fortimail-authorization-bypass-enables-unauthentic-74d576d2",
    "title": "FortiMail Authorization Bypass Enables Unauthenticated Account Takeover",
    "summary": "FortiMail’s user‑controlled key bypass lets an unauthenticated remote attacker hijack any IBE recipient account through crafted HTTP requests. Rated CVSSv3 9.1, the flaw abuses improper key validation, granting full account takeover without credentials and exposing mailbox data. Fortinet issued a patch for FortiMail 7.2.1 and earlier; administrators must apply it immediately to close the vulnerability.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-208",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortimail-authorization-bypass-enables-unauthentic",
      "article-74d576d2",
      "74d576d2",
      "fortimail-authorization-bypass-enables-unauthentic-3bcda6",
      "fortimail-authorization-bypass-enables-unauthenticated-accou"
    ]
  },
  {
    "slug": "fortimanager-privilege-escalation-via-user-control-1f87005e",
    "title": "FortiManager Privilege Escalation via User-Controlled Key",
    "summary": "FortiManager’s user‑controlled key flaw permits a remote authenticated attacker with admin rights to elevate privileges to root via crafted HTTP requests. The vulnerability, CVSSv3 8.2, exploits inadequate key validation, allowing full root access without additional credentials. Fortinet released a patch for FortiManager 7.2.1 and earlier; users should update promptly to prevent privilege escalation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-235",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortimanager-privilege-escalation-via-user-control",
      "article-1f87005e",
      "1f87005e",
      "fortimanager-privilege-escalation-via-user-control-3bcda5",
      "fortimanager-privilege-escalation-via-user-controlled-key"
    ]
  },
  {
    "slug": "fortimail-authenticated-bypass-allows-root-directo-ff06611b",
    "title": "FortiMail Authenticated Bypass Allows Root Directory Deletion",
    "summary": "FortiMail’s authorization bypass lets an authenticated remote attacker delete directories as root or access other users’ calendar and mailbox data across tenant domains via crafted HTTP requests. The flaw, CVSSv3 8.1, stems from improper key validation, enabling privileged file operations without credentials. Fortinet issued patches for FortiMail 7.2.1 and earlier; administrators should apply them immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-204",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortimail-authenticated-bypass-allows-root-directo",
      "article-ff06611b",
      "ff06611b",
      "fortimail-authenticated-bypass-allows-root-directo-3bcda6",
      "fortimail-authenticated-bypass-allows-root-directory-deletio"
    ]
  },
  {
    "slug": "fortiauthenticator-hard-coded-password-allows-auth-7877ef47",
    "title": "FortiAuthenticator Hard‑coded Password Allows Authentication Bypass",
    "summary": "FortiAuthenticator contains a hard‑coded password flaw that permits unauthenticated attackers to bypass credential checks in the authentication flow. The CVSSv3 score is 9.0, indicating a severe vulnerability that can grant unauthorized access without user interaction. Fortinet has issued a patch; security teams should apply the update immediately to prevent exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-271",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortiauthenticator-hard-coded-password-allows-auth",
      "article-7877ef47",
      "7877ef47",
      "fortiauthenticator-hard-coded-password-allows-auth-3bcda5",
      "fortiauthenticator-hard-coded-password-allows-authentication"
    ]
  },
  {
    "slug": "fortios-ospf-daemon-allows-authentication-bypass-1237b78c",
    "title": "FortiOS OSPF Daemon Allows Authentication Bypass",
    "summary": "FortiOS and FortiSASE OSPF daemons contain a primary weakness that enables unauthenticated attackers to broadcast LSAs via crafted requests. The CVSSv3 score is 9.3, indicating a severe flaw that can disrupt routing tables and potentially cause denial of service. Fortinet has released a patch; administrators should update the OSPF daemon firmware immediately to mitigate the risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-267",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortios-ospf-daemon-allows-authentication-bypass",
      "article-1237b78c",
      "1237b78c",
      "fortios-ospf-daemon-allows-authentication-bypass-3bcda5"
    ]
  },
  {
    "slug": "fortianalyzer-spoofing-enables-authentication-bypa-8cb39c1e",
    "title": "FortiAnalyzer Spoofing Enables Authentication Bypass",
    "summary": "FortiAnalyzer, FortiManager, and FortiSASE‑Sovereign fortilogd contain a spoofing flaw that allows attackers to bypass authentication and disrupt high‑availability state. The CVSSv3 score is 8.2, reflecting a high‑severity vulnerability that can compromise HA coordination without user interaction. Fortinet has issued a patch; security teams should apply the update to all affected devices to prevent HA disruption.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Fortinet FortiGuard PSIRT",
    "sourceUrl": "https://fortiguard.fortinet.com/psirt/FG-IR-26-229",
    "publishedAt": "2026-11-10T08:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fortianalyzer-spoofing-enables-authentication-bypa",
      "article-8cb39c1e",
      "8cb39c1e",
      "fortianalyzer-spoofing-enables-authentication-bypa-3bcda6",
      "fortianalyzer-spoofing-enables-authentication-bypass"
    ]
  },
  {
    "slug": "fireworks-ai-breach-via-cloud-provider-hack-b320423b",
    "title": "Fireworks AI Breach via Cloud Provider Hack",
    "summary": "Fireworks AI disclosed a breach where attackers accessed its development machines after compromising a third‑party cloud provider. The intrusion leveraged the provider’s compromised credentials, granting unauthorized remote access to Fireworks’ internal infrastructure. Fireworks recommends monitoring for anomalous activity and tightening cloud access controls, but no patch is available in the near future.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/fireworks-ai-discloses-new-breach-after-cloud-provider-hack/",
    "publishedAt": "2026-11-10T07:49:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fireworks-ai-breach-via-cloud-provider-hack",
      "article-b320423b",
      "b320423b",
      "fireworks-ai-breach-via-cloud-provider-hack-2e6c3f"
    ]
  },
  {
    "slug": "security-leaders-must-inform-ceos-about-leaked-cre-264c4464",
    "title": "Security Leaders Must Inform CEOs About Leaked Credentials",
    "summary": "The article discusses the importance of security leaders communicating leaked credential incidents to CEOs. It highlights how fear of blame can conceal credential exposure, emphasizes the need for metrics beyond alert counts, and addresses disclosure deadlines and AI tool risks. Security leaders should prepare clear explanations, recommend robust credential management, and establish disclosure protocols.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/eric-fourrier-gitguardian-leaked-credentials/",
    "publishedAt": "2026-11-10T07:40:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "security-leaders-must-inform-ceos-about-leaked-cre",
      "article-264c4464",
      "264c4464",
      "security-leaders-must-inform-ceos-about-leaked-cre-42e6af",
      "security-leaders-must-inform-ceos-about-leaked-credentials"
    ]
  },
  {
    "slug": "google-patches-chrome-xml-use-after-free-vulnerabi-4f95a003",
    "title": "Google Patches Chrome XML Use‑After‑Free Vulnerability (CVE‑2026‑125350)",
    "summary": "Google released a patch for Chrome after discovering CVE‑2026‑125350, a use‑after‑free flaw in its XML parser that was actively exploited. The vulnerability allowed attackers to corrupt memory and potentially execute code via crafted XML documents, posing a remote code execution threat. Google’s latest Chrome update includes the fix; users are urged to install it immediately to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/google-issues-chrome-security-update.html",
    "publishedAt": "2026-11-10T06:52:54.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "BleepingComputer",
        "sourceUrl": "https://www.bleepingcomputer.com/news/security/google-patches-eighth-chrome-zero-day-exploited-in-attacks-this-year/"
      }
    ],
    "aliases": [
      "google-patches-chrome-xml-use-after-free-vulnerabi",
      "article-4f95a003",
      "4f95a003",
      "google-patches-chrome-xml-use-after-free-vulnerabi-37252a",
      "google-patches-chrome-xml-use-after-free-vulnerability-cve-2"
    ]
  },
  {
    "slug": "cisa-adds-four-flaws-to-kev-catalog-15140f7a",
    "title": "CISA Adds Four Flaws to KEV Catalog",
    "summary": "CISA added four actively exploited vulnerabilities, including CVE‑2026‑123218, to its Known Exploited Vulnerabilities catalog. The flaws affect OpenSSH, GPUStack, SignalWire FreeSwitch, and IBM Aspera Faspex, with CVE‑2026‑123218 rated CVSS 9.8 for an incorrect authorization flaw. CISA recommends immediate patching or applying vendor mitigations; users should verify that their systems are not exposed to the active exploitation.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/cisa-warns-of-active-exploitation-of.html",
    "publishedAt": "2026-11-10T06:31:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-adds-four-flaws-to-kev-catalog",
      "article-15140f7a",
      "15140f7a",
      "cisa-adds-four-flaws-to-kev-catalog-39df6a"
    ]
  },
  {
    "slug": "chrome-patch-fixes-exploited-xml-use-after-free-ze-04e2086f",
    "title": "Chrome Patch Fixes Exploited XML Use‑After‑Free Zero‑Day",
    "summary": "Google released a Chrome update to fix a high‑severity use‑after‑free flaw (CVE‑2026‑125350) in the XML component that was already exploited. The bug allowed memory corruption via crafted XML, potentially enabling remote code execution with a CVSS score of 9.8. Users should install the latest Chrome patch immediately to mitigate the vulnerability; no separate advisory was issued.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/chrome-update-patches-exploited-xml-zero-day-eighth-this-year/",
    "publishedAt": "2026-11-10T06:12:24.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-patch-fixes-exploited-xml-use-after-free-ze",
      "article-04e2086f",
      "04e2086f",
      "chrome-patch-fixes-exploited-xml-use-after-free-ze-4458a0",
      "chrome-patch-fixes-exploited-xml-use-after-free-zero-day"
    ]
  },
  {
    "slug": "security-teams-prioritize-ai-agent-behavior-monito-778ad60b",
    "title": "Security Teams Prioritize AI Agent Behavior Monitoring",
    "summary": "A 2026 State of Behavioral Security Report names AI agents as the top monitoring focus. The survey shows 43% plan to invest in AI agent monitoring, exceeding API integrations, yet many lack baseline definitions. Teams should establish baseline metrics and deploy monitoring tools to detect anomalous AI agent behavior early.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/abnormal-ai-behavioral-security-report/",
    "publishedAt": "2026-11-10T06:00:42.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "security-teams-prioritize-ai-agent-behavior-monito",
      "article-778ad60b",
      "778ad60b",
      "security-teams-prioritize-ai-agent-behavior-monito-28e32c",
      "security-teams-prioritize-ai-agent-behavior-monitoring"
    ]
  },
  {
    "slug": "patch-tuesday-unveils-1-252-cves-including-zero-da-b648a3b4",
    "title": "Patch Tuesday Unveils 1,252 CVEs, Including Zero-Day",
    "summary": "Patch Tuesday released 1,252 CVEs, including one zero‑day and 68 critical vulnerabilities, with CVE‑2026‑113971 identified. The zero‑day flaw and critical issues span multiple vendors, potentially enabling unauthenticated remote code execution or privilege escalation. Security teams should apply vendor patches immediately, monitor for exploitation indicators, and verify configuration hardening to mitigate risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CrowdStrike",
    "sourceUrl": "https://www.crowdstrike.com/en-us/blog/patch-tuesday-analysis-november-2026/",
    "publishedAt": "2026-11-10T06:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "patch-tuesday-unveils-1-252-cves-including-zero-da",
      "article-b648a3b4",
      "b648a3b4",
      "patch-tuesday-unveils-1-252-cves-including-zero-da-40f7ce",
      "patch-tuesday-unveils-1-252-cves-including-zero-day"
    ]
  },
  {
    "slug": "zdi-26-898-wireshark-lorawan-decryption-numeric-tr-f8e5e8d0",
    "title": "ZDI-26-898: Wireshark LoRaWAN Decryption Numeric Truncation Error Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows network-adjacent attackers to execute arbitrary code on affected installations of Wireshark. Authentication is not required to exploit this vulnerability. The vulnerability is tracked as CVE-2026-83844.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-898/",
    "publishedAt": "2026-11-10T06:00:00.000Z",
    "cves": [
      "CVE-2026-83844"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-898-wireshark-lorawan-decryption-numeric-tr",
      "article-f8e5e8d0",
      "f8e5e8d0",
      "zdi-26-898-wireshark-lorawan-decryption-numeric-tr-6f3cb6",
      "zdi-26-898-wireshark-lorawan-decryption-numeric-truncation-e"
    ]
  },
  {
    "slug": "x-org-server-integer-overflow-enables-local-privil-977ac83e",
    "title": "X.Org Server Integer Overflow Enables Local Privilege Escalation",
    "summary": "A local integer overflow in X.Org Server’s XkbResizeKeySyms function allows attackers to elevate privileges on affected installations. The flaw, identified as CVE-2026-50258, requires initial low‑privilege code execution and has a CVSS score of 7.8, indicating high‑severity local privilege escalation. ZDI recommends applying vendor patches or workarounds to mitigate the vulnerability and prevent privilege escalation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-902/",
    "publishedAt": "2026-11-10T06:00:00.000Z",
    "cves": [
      "CVE-2026-50258"
    ],
    "additionalSources": [],
    "aliases": [
      "x-org-server-integer-overflow-enables-local-privil",
      "article-977ac83e",
      "977ac83e",
      "x-org-server-integer-overflow-enables-local-privil-6f3d08",
      "x-org-server-integer-overflow-enables-local-privilege-escala"
    ]
  },
  {
    "slug": "x-org-server-buffer-overflow-enables-local-privile-0447bf74",
    "title": "X.Org Server Buffer Overflow Enables Local Privilege Escalation",
    "summary": "A heap-based buffer overflow in X.Org Server’s ProcDRI2GetBuffers function permits local attackers to elevate privileges on affected systems. The vulnerability, CVE-2026-50264, requires initial low‑privilege code execution and carries a CVSS score of 7.8, classifying it as a high‑severity local privilege escalation. Administrators should apply vendor patches or available workarounds to eliminate the privilege escalation risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-901/",
    "publishedAt": "2026-11-10T06:00:00.000Z",
    "cves": [
      "CVE-2026-50264"
    ],
    "additionalSources": [],
    "aliases": [
      "x-org-server-buffer-overflow-enables-local-privile",
      "article-0447bf74",
      "0447bf74",
      "x-org-server-buffer-overflow-enables-local-privile-6f3d07",
      "x-org-server-buffer-overflow-enables-local-privilege-escalat"
    ]
  },
  {
    "slug": "wireshark-smb-export-integer-overflow-enables-remo-0538f2a4",
    "title": "Wireshark SMB Export Integer Overflow Enables Remote Code Execution",
    "summary": "An integer overflow in Wireshark’s SMB Object Export feature allows remote attackers to execute arbitrary code on affected installations, though user interaction is required. The flaw, identified as CVE-2026-83844, has a CVSS score of 8.8, indicating high‑severity remote code execution potential. ZDI recommends applying the vendor patch or disabling the SMB export feature to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-900/",
    "publishedAt": "2026-11-10T06:00:00.000Z",
    "cves": [
      "CVE-2026-83844"
    ],
    "additionalSources": [],
    "aliases": [
      "wireshark-smb-export-integer-overflow-enables-remo",
      "article-0538f2a4",
      "0538f2a4",
      "wireshark-smb-export-integer-overflow-enables-remo-6f3d07",
      "wireshark-smb-export-integer-overflow-enables-remote-code-ex"
    ]
  },
  {
    "slug": "wireshark-lbmc-fragment-reassembly-rce-vulnerabili-cecbaa83",
    "title": "Wireshark LBMC Fragment Reassembly RCE Vulnerability",
    "summary": "A remote code execution flaw in Wireshark’s LBMC fragment reassembly allows attackers to run arbitrary code without authentication. The integer overflow occurs when parsing oversized LBMC fragments, rated CVSS 7.5, and is publicly documented as CVE-2026-83844, with no confirmed in‑the‑wild exploitation yet. Wireshark has released patch 3.6.6, and users should update or disable LBMC fragment reassembly to mitigate the vulnerability.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-899/",
    "publishedAt": "2026-11-10T06:00:00.000Z",
    "cves": [
      "CVE-2026-83844"
    ],
    "additionalSources": [],
    "aliases": [
      "wireshark-lbmc-fragment-reassembly-rce-vulnerabili",
      "article-cecbaa83",
      "cecbaa83",
      "wireshark-lbmc-fragment-reassembly-rce-vulnerabili-6f3cb6",
      "wireshark-lbmc-fragment-reassembly-rce-vulnerability"
    ]
  },
  {
    "slug": "x-org-patches-eight-server-vulnerabilities-a-month-d475a869",
    "title": "X.Org patches eight server vulnerabilities a month after fixing 12 others",
    "summary": "X.Org has fixed eight vulnerabilities in the X.Org X server and Xwayland, including one in the Xorg server that lets a malicious monitor corrupt its memory. The fixes ship in xorg-server 21.1.26 and xwayland 24.1.15, and each of the eight affects versions before those two releases. The X server provides the low-level display layer for graphical desktops on many Linux and Unix systems.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-906/",
    "publishedAt": "2026-11-10T06:00:00.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Help Net Security",
        "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/x-org-server-vulnerabilities-november-2026/"
      }
    ],
    "aliases": [
      "x-org-patches-eight-server-vulnerabilities-a-month",
      "article-d475a869",
      "d475a869",
      "x-org-patches-eight-server-vulnerabilities-a-month-6f3d08",
      "x-org-patches-eight-server-vulnerabilities-a-month-after-fix"
    ]
  },
  {
    "slug": "zdi-26-905-x-org-server-libxrender-renderquerypict-250501f6",
    "title": "ZDI-26-905: X.Org Server libXrender RenderQueryPictFormats Reply Heap-based Buffer Overflow Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of X.Org Server. User interaction is required to exploit this vulnerability in that the target must connect to a malicious X11 server. The following CVEs are assigned: CVE-2026-88807.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-905/",
    "publishedAt": "2026-11-10T06:00:00.000Z",
    "cves": [
      "CVE-2026-88807"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-905-x-org-server-libxrender-renderquerypict",
      "article-250501f6",
      "250501f6",
      "zdi-26-905-x-org-server-libxrender-renderquerypict-6f3d08",
      "zdi-26-905-x-org-server-libxrender-renderquerypictformats-re"
    ]
  },
  {
    "slug": "zdi-26-904-nvidia-megatron-lm-checkpoint-deseriali-2c091eb5",
    "title": "ZDI-26-904: NVIDIA Megatron-LM Checkpoint Deserialization of Untrusted Data Remote Code Execution Vulnerability",
    "summary": "This vulnerability allows remote attackers to execute arbitrary code on affected installations of NVIDIA Megatron-LM. User interaction is required to exploit this vulnerability in that the target must open a malicious file. The following CVEs are assigned: CVE-2026-65110.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-904/",
    "publishedAt": "2026-11-10T06:00:00.000Z",
    "cves": [
      "CVE-2026-65110"
    ],
    "additionalSources": [],
    "aliases": [
      "zdi-26-904-nvidia-megatron-lm-checkpoint-deseriali",
      "article-2c091eb5",
      "2c091eb5",
      "zdi-26-904-nvidia-megatron-lm-checkpoint-deseriali-6f3d08",
      "zdi-26-904-nvidia-megatron-lm-checkpoint-deserialization-of-"
    ]
  },
  {
    "slug": "x-org-server-heap-overflow-enables-local-privilege-6bab7086",
    "title": "X.Org Server Heap Overflow Enables Local Privilege Escalation",
    "summary": "A heap-based buffer overflow in X.Org Server’s font alias resolution permits local privilege escalation on affected installations. The flaw, assigned CVE-2026-50256, has a CVSS score of 7.8 and requires low‑privileged code execution to trigger, allowing attackers to gain root access. A patch is available from the X.Org project; administrators should apply the update or disable font aliasing as a mitigation.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "ZDI Advisories",
    "sourceUrl": "http://www.zerodayinitiative.com/advisories/ZDI-26-903/",
    "publishedAt": "2026-11-10T06:00:00.000Z",
    "cves": [
      "CVE-2026-50256"
    ],
    "additionalSources": [],
    "aliases": [
      "x-org-server-heap-overflow-enables-local-privilege",
      "article-6bab7086",
      "6bab7086",
      "x-org-server-heap-overflow-enables-local-privilege-6f3d08",
      "x-org-server-heap-overflow-enables-local-privilege-escalatio"
    ]
  },
  {
    "slug": "chromeos-beta-channel-updated-to-os-16868-13-0-bd6c78e3",
    "title": "ChromeOS Beta Channel Updated to OS 16868.13.0",
    "summary": "Google ChromeOS Beta channel received an OS update to version 16868.13.0 and browser 158.0.8127.24 for most devices. The update contains routine bug fixes and performance improvements, with no publicly disclosed security vulnerabilities. Users should apply the update via the OS update mechanism or switch channels as needed to maintain security posture.",
    "category": "General",
    "severity": "LOW",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/beta-channel-update-for-chromeos_01835406967.html",
    "publishedAt": "2026-11-10T05:45:27.885Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chromeos-beta-channel-updated-to-os-16868-13-0",
      "article-bd6c78e3",
      "bd6c78e3",
      "chromeos-beta-channel-updated-to-os-16868-13-0-7ad17a"
    ]
  },
  {
    "slug": "openclaw-ai-agents-deliver-malware-to-windows-and-b78866a7",
    "title": "OpenClaw AI Agents Deliver Malware to Windows and macOS",
    "summary": "OpenClaw operators have deployed over 575 AI‑driven skills that deliver malware to Windows and macOS endpoints. They use stolen credentials, AI models for reconnaissance and exploitation, and tools that suppress intrusion detection, coordinated via WeChat and LINE. Teams should monitor credential activity, block known OpenClaw signatures, and enforce multi‑factor authentication to counter this threat.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/acronis-ai-agent-cyberattacks-report/",
    "publishedAt": "2026-11-10T05:30:59.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openclaw-ai-agents-deliver-malware-to-windows-and",
      "article-b78866a7",
      "b78866a7",
      "openclaw-ai-agents-deliver-malware-to-windows-and-37362e",
      "openclaw-ai-agents-deliver-malware-to-windows-and-macos"
    ]
  },
  {
    "slug": "fireworks-ai-breach-steals-customer-data-via-cloud-9eb3e610",
    "title": "Fireworks AI Breach Steals Customer Data via Cloud Provider",
    "summary": "Fireworks AI disclosed a breach where attackers accessed development machines via a compromised third‑party cloud provider, stealing customer account details, billing records, and datasets. The intrusion leveraged the provider’s compromised credentials, granting unauthorized remote access and data exfiltration from Fireworks’ internal systems. Fireworks urges customers to review logs, enforce MFA, and monitor anomalous activity; no patch is available.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/fireworks-ai-data-breach/",
    "publishedAt": "2026-11-10T05:17:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fireworks-ai-breach-steals-customer-data-via-cloud",
      "article-9eb3e610",
      "9eb3e610",
      "fireworks-ai-breach-steals-customer-data-via-cloud-3f85c1",
      "fireworks-ai-breach-steals-customer-data-via-cloud-provider"
    ]
  },
  {
    "slug": "application-security-engineer-position-open-at-one-b0117907",
    "title": "Application Security Engineer Position Open at ONE ZERO BANK",
    "summary": "ONE ZERO BANK in Israel is recruiting an Application Security Engineer to integrate security into the software development lifecycle. The role involves threat modeling, vulnerability assessment of web, mobile, API, CI/CD, and supply chain components, and automating security controls with AI tools. Candidates should have experience in secure coding practices and DevSecOps tooling.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/10/cybersecurity-jobs-available-right-now-november-10-2026/",
    "publishedAt": "2026-11-10T05:00:58.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "application-security-engineer-position-open-at-one",
      "article-b0117907",
      "b0117907",
      "application-security-engineer-position-open-at-one-1f273b",
      "application-security-engineer-position-open-at-one-zero-bank"
    ]
  },
  {
    "slug": "beget-malware-launches-data-wiping-campaign-35ef31ef",
    "title": "Beget Malware Launches Data‑Wiping Campaign",
    "summary": "Beget malware launches a data‑wiping campaign targeting multiple organizations, deleting critical files via a self‑contained payload. The attack leverages a custom dropper that bypasses standard antivirus heuristics, leaving no persistent backdoor and leaving evidence only in system logs. Security teams should deploy the latest signature updates, enable file integrity monitoring, and conduct forensic analysis of affected endpoints to confirm eradication.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/russian-cloud-firm-beget-rebuilds-from-scratch-after-da",
    "publishedAt": "2026-11-10T04:36:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "beget-malware-launches-data-wiping-campaign",
      "article-35ef31ef",
      "35ef31ef",
      "beget-malware-launches-data-wiping-campaign-fb00bb"
    ]
  },
  {
    "slug": "sega-exposes-2-2-million-emails-d439d4bf",
    "title": "SEGA Exposes 2.2 Million Emails",
    "summary": "SEGA disclosed a breach that exposed 2.2 million email addresses from its customer database, accessed through an unauthorized entry point. The incident likely involved credential compromise or misconfigured access controls, but no exploit code or public proof-of-concept has been reported. SEGA should conduct a forensic review, apply any pending patches, enforce multi‑factor authentication, and notify affected users per data‑breach regulations.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/sega-newsletter-data-breach-exposes-2-2-million-email-a",
    "publishedAt": "2026-11-10T04:32:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sega-exposes-2-2-million-emails",
      "article-d439d4bf",
      "d439d4bf",
      "sega-exposes-2-2-million-emails-688a52"
    ]
  },
  {
    "slug": "qubole-cross-account-access-vulnerability-abused-0503e73e",
    "title": "Qubole Cross‑Account Access Vulnerability Abused",
    "summary": "Qubole’s cross‑account access flaw enabled attackers to reach resources in other accounts, bypassing intended isolation controls. The root cause is a misconfigured IAM policy that grants excessive permissions, allowing credential reuse across accounts and leading to unauthorized data exposure. Security teams should apply the vendor‑issued patch immediately, review cross‑account permissions, and deploy detection rules to monitor anomalous access patterns.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/trusted-by-default-qubole-cross-account-access-abused-i",
    "publishedAt": "2026-11-10T04:25:43.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "qubole-cross-account-access-vulnerability-abused",
      "article-0503e73e",
      "0503e73e",
      "qubole-cross-account-access-vulnerability-abused-138807"
    ]
  },
  {
    "slug": "google-patches-cve-2026-125350-chrome-zero-day-6a7f8004",
    "title": "Google Patches CVE-2026-125350 Chrome Zero‑Day",
    "summary": "Google has released a patch for CVE-2026-125350, a Chrome zero‑day that lets remote attackers execute malicious code in the browser. The flaw, exploited in the wild, permits arbitrary code execution via a crafted web page and carries a CVSS score of 9.8. Users should update to Chrome 157.0.8103.50/51 on Windows and Mac, or 157.0.8103.50 on Linux, to mitigate the risk.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/google-chrome-0-day-exploited/",
    "publishedAt": "2026-11-10T04:21:10.000Z",
    "cves": [
      "CVE-2026-125350"
    ],
    "additionalSources": [],
    "aliases": [
      "google-patches-cve-2026-125350-chrome-zero-day",
      "article-6a7f8004",
      "6a7f8004",
      "google-patches-cve-2026-125350-chrome-zero-day-5edb3c"
    ]
  },
  {
    "slug": "satirical-terminal2shell-claims-highlight-security-939c958d",
    "title": "Satirical Terminal2Shell Claims Highlight Security Marketing Parody",
    "summary": "Security analysts highlighted Terminal2Shell, a satirical website claiming a 55-year-old zero-day vulnerability affects over two billion interactive terminals. The underlying exploit simply describes standard terminal execution rather than a legitimate security flaw or unauthorized code execution vector. Reports confirm the publication represents a commentary on security industry marketing rather than a genuine threat requiring system updates.",
    "category": "General",
    "severity": "LOW",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/terminal2shell-55-year-old-zero-day/",
    "publishedAt": "2026-11-10T03:37:47.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "satirical-terminal2shell-claims-highlight-security",
      "article-939c958d",
      "939c958d",
      "satirical-terminal2shell-claims-highlight-security-6128db",
      "satirical-terminal2shell-claims-highlight-security-marketing"
    ]
  },
  {
    "slug": "apache-http-server-vulnerabilities-hit-ubuntu-lts-86b927d5",
    "title": "Apache HTTP Server Vulnerabilities Hit Ubuntu LTS",
    "summary": "Ubuntu 14.04 through 26.04 LTS releases contain multiple Apache HTTP Server flaws. CVE-2026-46729 and CVE-2026-47360 allow attackers to trigger denial of service or leak session data via improper memory and cookie handling, potentially exposing sensitive information; no confirmed exploitation yet. Ubuntu advises applying the latest security updates and verifying Apache configurations to mitigate the vulnerabilities.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9016-1",
    "publishedAt": "2026-11-10T02:43:47.000Z",
    "cves": [
      "CVE-2026-46729",
      "CVE-2026-47360"
    ],
    "additionalSources": [],
    "aliases": [
      "apache-http-server-vulnerabilities-hit-ubuntu-lts",
      "article-86b927d5",
      "86b927d5",
      "apache-http-server-vulnerabilities-hit-ubuntu-lts-7e8930"
    ]
  },
  {
    "slug": "n-able-n-central-exposes-30-zero-day-vulnerabiliti-bc249e2e",
    "title": "N‑able N‑central Exposes 30+ Zero‑Day Vulnerabilities, Urgent Patch Released",
    "summary": "N‑able N‑central software was exposed to more than 30 zero‑day vulnerabilities, enabling remote code execution and privilege escalation. The flaws stem from inadequate input validation and weak session handling, allowing attackers to bypass authentication without credentials. N‑able issued an urgent patch, disabled hosted environments worldwide, and urged customers to apply fixes immediately and monitor logs for anomalies.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/n-able-takes-n-central-servers-offline/",
    "publishedAt": "2026-11-10T02:34:38.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "CyberNews AI",
        "sourceUrl": "https://cybernewsai.com/blog/n-able-takes-cloud-platform-offline-after-30-zero-days"
      }
    ],
    "aliases": [
      "n-able-n-central-exposes-30-zero-day-vulnerabiliti",
      "article-bc249e2e",
      "bc249e2e",
      "n-able-n-central-exposes-30-zero-day-vulnerabiliti-214ffb",
      "n-able-n-central-exposes-30-zero-day-vulnerabilities-urgent-"
    ]
  },
  {
    "slug": "isc-stormcast-weekly-threat-landscape-overview-958ee648",
    "title": "ISC Stormcast: Weekly Threat Landscape Overview",
    "summary": "The ISC Stormcast podcast released its November 10th edition, summarizing the latest threat activity observed across the internet. The report highlighted increased phishing campaigns, emerging ransomware variants, and a rise in supply‑chain attacks, but did not identify any new zero‑day exploits. Listeners are advised to review the full transcript for detailed indicators and to maintain current defensive posture.",
    "category": "General",
    "severity": "LOW",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33504",
    "publishedAt": "2026-11-10T02:00:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "isc-stormcast-weekly-threat-landscape-overview",
      "article-958ee648",
      "958ee648",
      "isc-stormcast-weekly-threat-landscape-overview-57dd81"
    ]
  },
  {
    "slug": "gitlab-critical-patch-release-19-5-4-19-4-6-19-3-8-f8ad1984",
    "title": "GitLab Critical Patch Release: 19.5.4, 19.4.6, 19.3.8",
    "summary": "On November 10, 2026, we released versions 19.5.4, 19.4.6, 19.3.8 for GitLab Community Edition and Enterprise Edition. These versions contain important bug and security fixes, and we strongly recommend that all self-managed GitLab installations be upgraded to one of these versions immediately. GitLab releases fixes for vulnerabilities in patch releases.",
    "category": "General",
    "severity": "CRITICAL",
    "source": "GitLab Security Releases",
    "sourceUrl": "https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-5-4-released/",
    "publishedAt": "2026-11-10T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "gitlab-critical-patch-release-19-5-4-19-4-6-19-3-8",
      "article-f8ad1984",
      "f8ad1984",
      "gitlab-critical-patch-release-19-5-4-19-4-6-19-3-8-78d304"
    ]
  },
  {
    "slug": "n-able-issues-advisory-on-critical-vulnerabilities-04f47419",
    "title": "N-able Issues Advisory on Critical Vulnerabilities",
    "summary": "N-able issued an advisory detailing critical vulnerabilities affecting its products. The advisory outlines specific flaws requiring immediate attention from affected customers. N-able recommends applying the provided patches or workarounds to mitigate the risks. Security teams should validate their installed versions against the advisory to determine exposure.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "Sophos Threat Research",
    "sourceUrl": "https://www.sophos.com/en-us/blog/n-able-issues-advisory-on-critical-vulnerabilities",
    "publishedAt": "2026-11-10T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "n-able-issues-advisory-on-critical-vulnerabilities",
      "article-04f47419",
      "04f47419",
      "n-able-issues-advisory-on-critical-vulnerabilities-114b13"
    ]
  },
  {
    "slug": "threat-actors-deploy-agentic-ai-pentesting-framewo-d48641a6",
    "title": "Threat Actors Deploy Agentic AI Pentesting Framework",
    "summary": "Threat actors are deploying an agentic AI pentesting framework, enabling automated reconnaissance and exploitation across target networks. The framework leverages large‑language models to generate attack vectors, increasing speed and reducing manual effort, and has been observed in the wild. Defenders should update detection rules, employ AI‑aware monitoring, and enforce strict privilege controls to mitigate automated exploitation.",
    "category": "General",
    "severity": "LOW",
    "source": "Sophos Threat Research",
    "sourceUrl": "https://www.sophos.com/en-us/blog/artex-attackers-apply-agentic-ai",
    "publishedAt": "2026-11-10T00:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "threat-actors-deploy-agentic-ai-pentesting-framewo",
      "article-d48641a6",
      "d48641a6",
      "threat-actors-deploy-agentic-ai-pentesting-framewo-1e099a",
      "threat-actors-deploy-agentic-ai-pentesting-framework"
    ]
  },
  {
    "slug": "byod-ransomware-encrypts-vanderbilt-university-dat-9df77b7b",
    "title": "BYOD Ransomware Encrypts Vanderbilt University Databases",
    "summary": "Vanderbilt University fell victim to a BYOD ransomware attack that encrypted its database systems and exfiltrated student, employee, and research data. The attackers leveraged credential‑stealing techniques to gain privileged access, locking critical databases and demanding payment. University officials isolated affected systems, applied patches, enforced MFA, and coordinated with law enforcement to mitigate the breach.",
    "category": "Ransomware",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/vanderbilt-university-hit-in-byod-ransomware-attack-data-theft-claimed/",
    "publishedAt": "2026-11-09T23:52:12.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "CyberNews AI",
        "sourceUrl": "https://cybernewsai.com/blog/vanderbilt-university-hit-in-byod-ransomware-attack-dat"
      },
      {
        "source": "Cyber Security News",
        "sourceUrl": "https://cybersecuritynews.com/vanderbilt-university-shuts-down-devices/"
      }
    ],
    "aliases": [
      "byod-ransomware-encrypts-vanderbilt-university-dat",
      "article-9df77b7b",
      "9df77b7b",
      "byod-ransomware-encrypts-vanderbilt-university-dat-2017b8",
      "byod-ransomware-encrypts-vanderbilt-university-databases"
    ]
  },
  {
    "slug": "ubuntu-libsoup-regression-introduces-multiple-cve-1469474b",
    "title": "Ubuntu libsoup Regression Introduces Multiple CVE Vulnerabilities",
    "summary": "Ubuntu’s libsoup regression introduced CVE-2026-4271, CVE-2026-5119, and related flaws in HTTP/2, HTTPS proxy, and chunked request handling. Remote attackers could use these to cause DoS, steal sensitive data, or bypass controls, though no active exploitation is known. Ubuntu’s USN-8890-3 patch addresses the regressions; administrators should apply the update promptly and monitor for service anomalies.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-8890-3",
    "publishedAt": "2026-11-09T23:12:32.000Z",
    "cves": [
      "CVE-2026-4271",
      "CVE-2026-5119"
    ],
    "additionalSources": [],
    "aliases": [
      "ubuntu-libsoup-regression-introduces-multiple-cve",
      "article-1469474b",
      "1469474b",
      "ubuntu-libsoup-regression-introduces-multiple-cve-7fc9c0",
      "ubuntu-libsoup-regression-introduces-multiple-cve-vulnerabil"
    ]
  },
  {
    "slug": "ai-adoption-risks-cybersecurity-utility-trade-offs-5d18064e",
    "title": "AI Adoption Risks Cybersecurity Utility Trade-offs",
    "summary": "The Dark Reading Confidential series highlights concerns that rapid AI adoption may compromise cybersecurity safeguards. The episode warns that prioritizing AI utility can blind organizations to emerging threat vectors and policy gaps. Readers are encouraged to balance AI benefits with robust security controls, continuous monitoring, and risk assessment frameworks, and compliance oversight.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyber-risk/people-are-getting-weird-about-ai",
    "publishedAt": "2026-11-09T23:06:22.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-adoption-risks-cybersecurity-utility-trade-offs",
      "article-5d18064e",
      "5d18064e",
      "ai-adoption-risks-cybersecurity-utility-trade-offs-4ad0eb"
    ]
  },
  {
    "slug": "aws-braket-sdk-exposes-two-cve-vulnerabilities-9a27a0b3",
    "title": "AWS Braket SDK Exposes Two CVE Vulnerabilities",
    "summary": "Amazon disclosed two CVE vulnerabilities affecting the Braket SDK and its schemas, impacting versions 1.10.0+ and 1.17.0+. CVE‑2026‑124034 involves insecure local hybrid job input download, while CVE‑2026‑124035 affects error‑mitigation schema validation, possibly enabling unauthorized data access. AWS advises updating to the latest SDK and schemas and applying the vendor’s patch or mitigation steps.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-175-aws/",
    "publishedAt": "2026-11-09T22:42:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "aws-braket-sdk-exposes-two-cve-vulnerabilities",
      "article-9a27a0b3",
      "9a27a0b3",
      "aws-braket-sdk-exposes-two-cve-vulnerabilities-433bb4"
    ]
  },
  {
    "slug": "sega-exposes-2-2m-subscriber-emails-via-arara-brea-db5fcc69",
    "title": "SEGA Exposes 2.2M Subscriber Emails via ARARA Breach",
    "summary": "A data breach at SEGA’s third‑party newsletter provider ARARA exposed 2.2 million subscriber email addresses. Unauthorized access to ARARA’s database compromised email identifiers but not credentials or financial data; SEGA reported the incident in November 2026. SEGA notified affected users and advised monitoring for phishing, while ARARA conducts a forensic investigation and tightens access controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/sega-newsletter-data-breach-exposes-22-million-email-addresses/",
    "publishedAt": "2026-11-09T22:09:33.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sega-exposes-2-2m-subscriber-emails-via-arara-brea",
      "article-db5fcc69",
      "db5fcc69",
      "sega-exposes-2-2m-subscriber-emails-via-arara-brea-245287",
      "sega-exposes-2-2m-subscriber-emails-via-arara-breach"
    ]
  },
  {
    "slug": "cisa-unveils-enhanced-incident-reporting-form-35de4eec",
    "title": "CISA Unveils Enhanced Incident Reporting Form",
    "summary": "CISA introduced a new incident reporting questionnaire designed to collect detailed data on cyber events. The form captures critical information that enables the agency to assess incident severity, detect emerging trends, and prioritize response resources. Organizations should submit incident details through the new form to support CISA’s improved analysis and coordination efforts.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/cisa-announces-enhanced-reporting-form-cyber-incidents",
    "publishedAt": "2026-11-09T21:38:20.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cisa-unveils-enhanced-incident-reporting-form",
      "article-35de4eec",
      "35de4eec",
      "cisa-unveils-enhanced-incident-reporting-form-599910"
    ]
  },
  {
    "slug": "n-able-shuts-down-n-central-cloud-over-able2shell-e2990899",
    "title": "N-Able Shuts Down N-Central Cloud Over 'Able2Shell' Zero-Day Vulnerabilities",
    "summary": "N-Able took its N-Central cloud platform offline after the 'Able2Shell' vulnerability set, comprising over 30 zero-days enabling remote code execution and privilege escalation, was publicly disclosed with proof-of-concept exploits. The flaws allow full server compromise across hosted and on-premises deployments. N-Able urges immediate shutdown of all N-Central instances pending vendor patches.",
    "category": "Vulnerability",
    "severity": "CRITICAL",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/n-able-takes-cloud-platform-offline-after-30-plus-zero-days-published/",
    "publishedAt": "2026-11-09T21:26:25.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Huntress",
        "sourceUrl": "https://www.huntress.com/blog/n-able-disables-cloud-services-following-disclosure-of-able2shell-exploit-chains"
      },
      {
        "source": "The Hacker News",
        "sourceUrl": "https://thehackernews.com/2026/11/n-able-takes-hosted-n-central-offline.html"
      }
    ],
    "aliases": [
      "n-able-shuts-down-n-central-cloud-over-able2shell",
      "article-e2990899",
      "e2990899",
      "n-able-shuts-down-n-central-cloud-over-able2shell-742e0a",
      "n-able-shuts-down-n-central-cloud-over-able2shell-zero-day-v"
    ]
  },
  {
    "slug": "york-university-breach-reveals-2007-personal-data-e585fff0",
    "title": "York University Breach Reveals 2007 Personal Data",
    "summary": "York University disclosed a breach in which a threat actor accessed personal information submitted via online forms dating back to 2007. The stolen data includes names, email addresses, phone numbers, and student identification numbers, potentially exposing thousands of individuals. York University has notified affected parties, engaged forensic investigators, and is reviewing its data protection controls to prevent future incidents.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/york-university-breach-exposed-personal-information-dating-to-2007/",
    "publishedAt": "2026-11-09T21:22:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "york-university-breach-reveals-2007-personal-data",
      "article-e585fff0",
      "e585fff0",
      "york-university-breach-reveals-2007-personal-data-10175b"
    ]
  },
  {
    "slug": "cve-2026-124033-relative-path-traversal-in-the-log-e0d7aeb5",
    "title": "CVE-2026-124033 - Relative path traversal in the log export commands in AWS ParallelCluster CLI",
    "summary": "Bulletin ID: 2026-174-AWS Publication Date: 11/09/2026 13:00 PM PST Description: AWS ParallelCluster CLI is an open source command line tool, distributed on PyPI as aws-parallelcluster. We identified CVE-2026-124033, an issue where the export-cluster-logs and export-image-logs commands in the AWS ParallelCluster CLI before version 3.16.0 contain a relative path traversal issue.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "AWS Security Bulletins",
    "sourceUrl": "https://aws.amazon.com/security/security-bulletins/rss/2026-174-aws/",
    "publishedAt": "2026-11-09T21:12:17.000Z",
    "cves": [
      "CVE-2026-124033"
    ],
    "additionalSources": [],
    "aliases": [
      "cve-2026-124033-relative-path-traversal-in-the-log",
      "article-e0d7aeb5",
      "e0d7aeb5",
      "cve-2026-124033-relative-path-traversal-in-the-log-44f08c",
      "cve-2026-124033-relative-path-traversal-in-the-log-export-co"
    ]
  },
  {
    "slug": "chrome-stable-update-addresses-three-high-severity-9606d6c0",
    "title": "Chrome Stable Update Addresses Three High‑Severity CVEs",
    "summary": "Google Chrome’s latest stable channel update (157.0.8103.50/51) patches three high‑severity vulnerabilities in WebGL, FileSystem, and Compositing. The flaws—CVE‑2026‑125345, CVE‑2026‑125347, CVE‑2026‑125343—enable uninitialized resource exploitation, authorization bypass, and buffer overflow, potentially allowing remote code execution. Install the update promptly; Chrome will deploy the patch over the next days, and users should verify via the Chrome Security Page.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_018223192.html",
    "publishedAt": "2026-11-09T20:52:57.820Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-stable-update-addresses-three-high-severity",
      "article-9606d6c0",
      "9606d6c0",
      "chrome-stable-update-addresses-three-high-severity-13a865",
      "chrome-stable-update-addresses-three-high-severity-cves"
    ]
  },
  {
    "slug": "chrome-extended-stable-update-fixes-eleven-high-se-5a870814",
    "title": "Chrome Extended Stable Update Fixes Eleven High‑Severity CVEs",
    "summary": "Google Chrome’s Extended Stable update (156.0.8078.96) patches eleven high‑severity flaws, including CVE‑2026‑121068, CVE‑2026‑121076, and CVE‑2026‑125350. These flaws involve improper authentication, authorization bypass, and buffer overflows, potentially allowing remote code execution or privilege escalation on affected systems. Install the update promptly; Chrome will deploy the patch over the next days, and users should verify via the Chrome Security Page.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Google Chrome Releases",
    "sourceUrl": "https://chromereleases.googleblog.com/2026/11/extended-stable-update-for-desktop_0910980127.html",
    "publishedAt": "2026-11-09T20:45:01.211Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "chrome-extended-stable-update-fixes-eleven-high-se",
      "article-5a870814",
      "5a870814",
      "chrome-extended-stable-update-fixes-eleven-high-se-58f40d",
      "chrome-extended-stable-update-fixes-eleven-high-severity-cve"
    ]
  },
  {
    "slug": "amplifon-breach-exposes-medical-data-of-thousands-f81b72eb",
    "title": "Amplifon Breach Exposes Medical Data of Thousands",
    "summary": "A data breach at Amplifon’s U.S. arm exposed medical information of thousands of customers. The incident involved unauthorized disclosure of sensitive health records, but no credentials or financial data were reported. Amplifon notified affected customers and is conducting a forensic investigation while advising them to monitor for identity theft ongoing.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/amplifon-hearing-aid-company-data-breach",
    "publishedAt": "2026-11-09T20:44:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "amplifon-breach-exposes-medical-data-of-thousands",
      "article-f81b72eb",
      "f81b72eb",
      "amplifon-breach-exposes-medical-data-of-thousands-4a2dc5"
    ]
  },
  {
    "slug": "black-hat-india-2026-debuts-in-bengaluru-2152c0ba",
    "title": "Black Hat India 2026 Debuts in Bengaluru",
    "summary": "Black Hat India 2026, a first‑time conference in Bengaluru, convened global cybersecurity researchers, practitioners, and decision makers. The event featured four days of cutting‑edge research, technical exchange, and strategic dialogue, covering emerging threats and defensive innovations. Attendees can network, share insights, and collaborate on future security initiatives, reinforcing industry resilience.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/black-hat-india-2026-landmark-debut",
    "publishedAt": "2026-11-09T20:19:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "black-hat-india-2026-debuts-in-bengaluru",
      "article-2152c0ba",
      "2152c0ba",
      "black-hat-india-2026-debuts-in-bengaluru-4308e8"
    ]
  },
  {
    "slug": "forge-lab-uses-agentic-tools-to-identify-memory-sa-cd50a823",
    "title": "FORGE Lab uses agentic tools to identify memory safety issues in Rust",
    "summary": "Microsoft FORGE Lab researchers found memory-safety bugs in Rust's core and std libraries, including cases where safe Rust code can trigger undefined behavior. Using Hyenas, FORGE's frontier research version of codename MDASH, the team investigated three patterns of misplaced trust in unsafe code and what they reveal about Rust's safety guarantees.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Microsoft Security",
    "sourceUrl": "https://www.microsoft.com/en-us/security/blog/2026/11/09/forge-lab-uses-agentic-tools-to-identify-memory-safety-issues-in-rust/",
    "publishedAt": "2026-11-09T20:17:31.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "forge-lab-uses-agentic-tools-to-identify-memory-sa",
      "article-cd50a823",
      "cd50a823",
      "forge-lab-uses-agentic-tools-to-identify-memory-sa-df9851",
      "forge-lab-uses-agentic-tools-to-identify-memory-safety-issue"
    ]
  },
  {
    "slug": "arctic-wolf-and-aws-launch-joint-incident-response-0c4c03dd",
    "title": "Arctic Wolf and AWS Launch Joint Incident‑Response Platform for Cloud‑Native Environments",
    "summary": "Arctic Wolf and AWS unveiled a joint incident‑response platform targeting cloud‑native environments. The solution merges Arctic Wolf’s managed detection and response with AWS security services to accelerate threat containment and automate recovery workflows. Organizations are encouraged to adopt the platform, configure real‑time alerts, and test playbooks to reduce mean time to containment.",
    "category": "General",
    "severity": "LOW",
    "source": "Arctic Wolf",
    "sourceUrl": "https://arcticwolf.com/resources/report/improve-incident-response-with-arctic-wolf-and-aws/",
    "publishedAt": "2026-11-09T19:02:47.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Arctic Wolf",
        "sourceUrl": "https://arcticwolf.com/resources/datasheet/accelerate-incident-response-across-aws-environments/"
      }
    ],
    "aliases": [
      "arctic-wolf-and-aws-launch-joint-incident-response",
      "article-0c4c03dd",
      "0c4c03dd",
      "arctic-wolf-and-aws-launch-joint-incident-response-61b6b7",
      "arctic-wolf-and-aws-launch-joint-incident-response-platform-"
    ]
  },
  {
    "slug": "france-accuses-iran-of-cyberattack-on-supermarket-9c760c5c",
    "title": "France Accuses Iran of Cyberattack on Supermarket Refrigerators",
    "summary": "France accused Iran of a cyberattack that targeted supermarket refrigeration systems, causing them to overheat and risk food spoilage. Attackers exploited a remote code execution flaw in the IoT firmware, enabling manipulation of temperature controls and triggering heating elements. French authorities summoned the Iranian ambassador, urged manufacturers to apply patches, and are pursuing European sanctions against the perpetrators.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/france-blames-iranian-hackers-for-supermarket-attacks-that-sparked-fires/",
    "publishedAt": "2026-11-09T18:32:42.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "The Record",
        "sourceUrl": "https://therecord.media/france-blames-iran-for-fridge-cyberattacks"
      },
      {
        "source": "SecurityWeek",
        "sourceUrl": "https://www.securityweek.com/france-blames-iran-for-a-cyberattack-that-heated-supermarket-refrigerators/"
      }
    ],
    "aliases": [
      "france-accuses-iran-of-cyberattack-on-supermarket",
      "article-9c760c5c",
      "9c760c5c",
      "france-accuses-iran-of-cyberattack-on-supermarket-5a8e91",
      "france-accuses-iran-of-cyberattack-on-supermarket-refrigerat"
    ]
  },
  {
    "slug": "vanderbilt-warns-of-cyberattack-impacting-campus-d-8d4b82c6",
    "title": "Vanderbilt Warns of Cyberattack Impacting Campus Devices",
    "summary": "Vanderbilt University reported a cyberattack that may have impacted campus devices and systems. The attack's specifics remain undisclosed, but the university cautions that compromised credentials or malware could have accessed network resources. Security teams are advised to monitor for anomalous activity, enforce multi-factor authentication, and apply pending vendor patches promptly.",
    "category": "General",
    "severity": "LOW",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/vanderbilt-cyberattack-ransomware-alert",
    "publishedAt": "2026-11-09T18:30:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "vanderbilt-warns-of-cyberattack-impacting-campus-d",
      "article-8d4b82c6",
      "8d4b82c6",
      "vanderbilt-warns-of-cyberattack-impacting-campus-d-594602",
      "vanderbilt-warns-of-cyberattack-impacting-campus-devices"
    ]
  },
  {
    "slug": "attackers-seek-sap-netweaver-webshells-ec730fe7",
    "title": "Attackers Seek SAP Netweaver Webshells",
    "summary": "Attackers are scanning for SAP Netweaver webshells on exposed servers, targeting the application for exploitation. The flaw permits remote code execution via unauthorized shell files, but no public PoC or CVE is disclosed, limiting immediate risk. Teams should monitor logs for shell activity, apply vendor patches, and enforce strict access controls to mitigate compromise.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SANS Internet Storm Center",
    "sourceUrl": "https://isc.sans.edu/diary/rss/33502",
    "publishedAt": "2026-11-09T18:18:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "attackers-seek-sap-netweaver-webshells",
      "article-ec730fe7",
      "ec730fe7",
      "attackers-seek-sap-netweaver-webshells-57dd81"
    ]
  },
  {
    "slug": "claude-tool-vulnerability-enables-linux-rce-3e1e0341",
    "title": "Claude Tool Vulnerability Enables Linux RCE",
    "summary": "Attackers leveraged a flaw in Anthropic’s Claude document-processing tool to execute malicious code on Linux systems. The vulnerability allows creation of a temporary file that AI assistant can access, enabling remote code execution with privilege escalation. Anthropic has released a patch for the affected component, and users should update to the latest version or disable the document-processing feature until remediation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/endpoint-security/attackers-claude-office-party-flaw-malicious-code-linux",
    "publishedAt": "2026-11-09T18:08:30.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "claude-tool-vulnerability-enables-linux-rce",
      "article-3e1e0341",
      "3e1e0341",
      "claude-tool-vulnerability-enables-linux-rce-10261b"
    ]
  },
  {
    "slug": "openjdk-21-faces-multiple-authentication-flaws-06ebae8e",
    "title": "OpenJDK 21 Faces Multiple Authentication Flaws",
    "summary": "Ubuntu Security Notices report four OpenJDK 21 components—Security, JSSE, Compiler, and JAAS—failing to authenticate or authorize users, exposing CVE‑2026‑83374, CVE‑2026‑83376, CVE‑2026‑83378, and CVE‑2026‑83380. The flaws allow unauthenticated remote attackers to read or modify sensitive data, potentially compromising application integrity and confidentiality. Users should upgrade to the patched OpenJDK 21 release and apply the vendor’s recommended mitigations to enforce proper authentication.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9015-1",
    "publishedAt": "2026-11-09T18:01:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openjdk-21-faces-multiple-authentication-flaws",
      "article-06ebae8e",
      "06ebae8e",
      "openjdk-21-faces-multiple-authentication-flaws-7e8934"
    ]
  },
  {
    "slug": "apple-releases-macos-27-2-1-security-update-2cb6f97c",
    "title": "Apple Releases macOS 27.2.1 Security Update",
    "summary": "Apple released macOS 27.2.1 (26B131) to address a set of security vulnerabilities affecting the operating system. The update patches multiple flaws, including a privilege escalation bug and a memory corruption issue that could allow local attackers to gain elevated access. Security teams should download and install the update promptly to maintain system integrity and comply with Apple’s security best practices.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Apple Security Updates",
    "sourceUrl": "https://developer.apple.com/news/releases/?id=11092026d",
    "publishedAt": "2026-11-09T18:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-releases-macos-27-2-1-security-update",
      "article-2cb6f97c",
      "2cb6f97c",
      "apple-releases-macos-27-2-1-security-update-70fac5"
    ]
  },
  {
    "slug": "apple-releases-watchos-27-2-1-security-update-36a4d2ce",
    "title": "Apple Releases watchOS 27.2.1 Security Update",
    "summary": "Apple released watchOS 27.2.1 (24S132) to fix several security issues identified in the smartwatch operating system. The update addresses vulnerabilities such as a buffer overflow in the watch’s communication stack and a flaw that could allow unauthorized access to health data. Users should install the update through the Apple Watch app to ensure device security and protect sensitive health information.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Apple Security Updates",
    "sourceUrl": "https://developer.apple.com/news/releases/?id=11092026f",
    "publishedAt": "2026-11-09T18:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-releases-watchos-27-2-1-security-update",
      "article-36a4d2ce",
      "36a4d2ce",
      "apple-releases-watchos-27-2-1-security-update-70fac5"
    ]
  },
  {
    "slug": "apple-releases-ipados-26-7-3-security-update-d48ebd8a",
    "title": "Apple Releases iPadOS 26.7.3 Security Update",
    "summary": "Apple issued iPadOS 26.7.3 (23H131) to address multiple security vulnerabilities affecting the iPadOS platform. The update resolves flaws in the operating system that could allow attackers to execute arbitrary code or bypass security protections. iPad users should install this patch immediately to mitigate potential exploitation risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Apple Security Updates",
    "sourceUrl": "https://developer.apple.com/news/releases/?id=11092026e",
    "publishedAt": "2026-11-09T18:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-releases-ipados-26-7-3-security-update",
      "article-d48ebd8a",
      "d48ebd8a",
      "apple-releases-ipados-26-7-3-security-update-70fac5"
    ]
  },
  {
    "slug": "apple-releases-ios-27-2-1-security-update-8051478b",
    "title": "Apple Releases iOS 27.2.1 Security Update",
    "summary": "Apple released iOS 27.2.1 (build 24B156/24B91034) to iOS users, addressing multiple security vulnerabilities and performance issues. The update patches critical flaws that could allow remote code execution, data leakage, or denial‑of‑service attacks on affected devices. Users are urged to download the update via the App Store immediately to maintain device security and stability.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Apple Security Updates",
    "sourceUrl": "https://developer.apple.com/news/releases/?id=11092026a",
    "publishedAt": "2026-11-09T18:00:00.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Apple Security Updates",
        "sourceUrl": "https://developer.apple.com/news/releases/?id=11092026b"
      }
    ],
    "aliases": [
      "apple-releases-ios-27-2-1-security-update",
      "article-8051478b",
      "8051478b",
      "apple-releases-ios-27-2-1-security-update-70fac5"
    ]
  },
  {
    "slug": "apple-releases-ipados-27-2-1-24b156-2dd77244",
    "title": "Apple Releases iPadOS 27.2.1 (24B156)",
    "summary": "Apple released iPadOS 27.2.1 (24B156) to iPad users, delivering updated security patches and performance improvements. The update is available for download through the App Store, ensuring device compatibility with the latest iPadOS version and improved system stability. Users should install the update promptly to maintain security posture and benefit from stability enhancements.",
    "category": "General",
    "severity": "LOW",
    "source": "Apple Security Updates",
    "sourceUrl": "https://developer.apple.com/news/releases/?id=11092026c",
    "publishedAt": "2026-11-09T18:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "apple-releases-ipados-27-2-1-24b156",
      "article-2dd77244",
      "2dd77244",
      "apple-releases-ipados-27-2-1-24b156-70fac5"
    ]
  },
  {
    "slug": "abe-office-malware-steals-chrome-passwords-eded8374",
    "title": "Abe Office Malware Steals Chrome Passwords",
    "summary": "A new remote-access trojan, Abe Office, masquerades as an office helper and steals Chrome passwords and cookies, bypassing App-Bound Encryption. Researchers found the malware exploits weak protection in Chrome’s encryption wrapper, using a code-signing certificate to evade detection and capture credentials. Security teams should block the Abe Office executable, revoke the signed certificate, and enforce multi-factor authentication for privileged accounts.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/abe-office-malware/",
    "publishedAt": "2026-11-09T17:58:44.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "abe-office-malware-steals-chrome-passwords",
      "article-eded8374",
      "eded8374",
      "abe-office-malware-steals-chrome-passwords-765175"
    ]
  },
  {
    "slug": "qubole-aws-backdoor-enables-customer-data-breach-dc6dac4b",
    "title": "Qubole AWS Backdoor Enables Customer Data Breach",
    "summary": "Qubole’s AWS deployment contained a backdoor that allowed attackers to access and exfiltrate customer secrets without authentication. Between October 14 and 26, attackers used the compromised AWS credentials to breach multiple customer accounts and steal data. Qubole urged immediate patching, telemetry review, and deployment of detection rules to mitigate further exfiltration.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-exploit-quboles-trusted-aws.html",
    "publishedAt": "2026-11-09T17:51:21.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "CyberNews AI",
        "sourceUrl": "https://cybernewsai.com/blog/attackers-backdoor-trusted-aws-integrations-to-steal-se"
      }
    ],
    "aliases": [
      "qubole-aws-backdoor-enables-customer-data-breach",
      "article-dc6dac4b",
      "dc6dac4b",
      "qubole-aws-backdoor-enables-customer-data-breach-7c9614"
    ]
  },
  {
    "slug": "beget-rebuilds-cloud-after-data-wiping-malware-att-d4645aab",
    "title": "Beget Rebuilds Cloud After Data-Wiping Malware Attack",
    "summary": "A data-wiping malware attack destroyed Beget's cloud infrastructure, forcing the Russian provider to rebuild from scratch. The attack leveraged a destructive payload that erased all stored data, but no evidence of data exfiltration or credential theft was reported. Beget has not released a patch but recommends restoring from backups and implementing stricter access controls to mitigate future destructive threats.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/russian-cloud-firm-beget-rebuilds-from-scratch-after-data-wiper-attack/",
    "publishedAt": "2026-11-09T17:50:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "beget-rebuilds-cloud-after-data-wiping-malware-att",
      "article-d4645aab",
      "d4645aab",
      "beget-rebuilds-cloud-after-data-wiping-malware-att-d269f2",
      "beget-rebuilds-cloud-after-data-wiping-malware-attack"
    ]
  },
  {
    "slug": "red-hat-releases-jboss-web-server-6-2-6-security-u-4c18ac9b",
    "title": "Red Hat Releases JBoss Web Server 6.2.6 Security Update Addressing Multiple Vulnerabilities",
    "summary": "Red Hat released JBoss Web Server 6.2.6 for RHEL 8, 9, 10, and Windows Server to patch multiple vulnerabilities that could allow remote exploitation. The flaws involve authentication, authorization, and improper input validation that could lead to remote code execution or unauthorized access. Red Hat recommends installing the 6.2.6 update immediately and reviewing referenced CVE links for critical severity details.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96228",
    "publishedAt": "2026-11-09T17:37:53.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Red Hat Security Advisories",
        "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96229"
      }
    ],
    "aliases": [
      "red-hat-releases-jboss-web-server-6-2-6-security-u",
      "article-4c18ac9b",
      "4c18ac9b",
      "red-hat-releases-jboss-web-server-6-2-6-security-u-37d7d9",
      "red-hat-releases-jboss-web-server-6-2-6-security-update-addr"
    ]
  },
  {
    "slug": "ethersphere-tools-compromised-to-steal-wallet-keys-b4abafee",
    "title": "Ethersphere Tools Compromised to Steal Wallet Keys",
    "summary": "Attackers hijacked Ethersphere's bee-js 13.3.0 and Swarm Desktop 0.56.2 releases, injecting code that steals wallet keys and node passwords. The malicious payload exploits release automation, enabling credential theft and backdoor installation without user interaction, threatening Swarm participants. Ethersphere warns users to verify release signatures, update to patched versions, and monitor for unauthorized backdoors.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/hackers-compromise-etherspheres-bee-js.html",
    "publishedAt": "2026-11-09T17:36:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ethersphere-tools-compromised-to-steal-wallet-keys",
      "article-b4abafee",
      "b4abafee",
      "ethersphere-tools-compromised-to-steal-wallet-keys-6b3b88"
    ]
  },
  {
    "slug": "openjdk-17-vulnerabilities-allow-remote-data-modif-081b64b4",
    "title": "OpenJDK 17 Vulnerabilities Allow Remote Data Modification",
    "summary": "Ubuntu identified multiple OpenJDK 17 components lacking proper authentication or authorization, exposing the platform to remote data tampering. Vulnerabilities CVE-2026-83374, CVE-2026-83376, CVE-2026-83380, CVE-2026-83381, and others enable attackers to read or modify sensitive data without credentials. Apply the latest OpenJDK 17 update and verify component authentication controls to mitigate the identified flaws.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9014-1",
    "publishedAt": "2026-11-09T17:27:36.000Z",
    "cves": [
      "CVE-2026-83374",
      "CVE-2026-83376",
      "CVE-2026-83380",
      "CVE-2026-83381"
    ],
    "additionalSources": [],
    "aliases": [
      "openjdk-17-vulnerabilities-allow-remote-data-modif",
      "article-081b64b4",
      "081b64b4",
      "openjdk-17-vulnerabilities-allow-remote-data-modif-7e8938",
      "openjdk-17-vulnerabilities-allow-remote-data-modification"
    ]
  },
  {
    "slug": "fetchmail-vulnerabilities-enable-denial-of-service-8ed7529c",
    "title": "Fetchmail Vulnerabilities Enable Denial of Service and Code Execution",
    "summary": "Ubuntu’s USN‑9013‑1 documents three Fetchmail flaws, including CVE‑2021‑36386, CVE‑2025‑61962, and an NTLM authentication mishandling bug. The defects can crash Fetchmail via malformed log or status messages, and CVE‑2025‑61962 may allow remote code execution. Ubuntu advises upgrading to the latest packages on 16.04, 18.04, and 20.04 LTS to mitigate denial‑of‑service and potential RCE.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9013-1",
    "publishedAt": "2026-11-09T17:17:55.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fetchmail-vulnerabilities-enable-denial-of-service",
      "article-8ed7529c",
      "8ed7529c",
      "fetchmail-vulnerabilities-enable-denial-of-service-7e893c",
      "fetchmail-vulnerabilities-enable-denial-of-service-and-code-"
    ]
  },
  {
    "slug": "pwc-ciso-discusses-ai-robots-future-security-9ce1fa97",
    "title": "PwC CISO Discusses AI, Robots, Future Security",
    "summary": "PwC’s Chief Information Security Officer James Shira outlined how AI and robotics are reshaping enterprise risk management. He emphasized the need for security teams to adopt adaptive threat models, integrate automation, and prioritize human oversight in AI deployments. PwC recommends continuous monitoring, policy updates, and cross‑functional collaboration to mitigate emerging AI‑driven attack vectors.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/pwc-ciso-ai-robots-security",
    "publishedAt": "2026-11-09T17:17:23.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pwc-ciso-discusses-ai-robots-future-security",
      "article-9ce1fa97",
      "9ce1fa97",
      "pwc-ciso-discusses-ai-robots-future-security-3666f4"
    ]
  },
  {
    "slug": "red-hat-releases-openshift-4-14-78-security-update-1d4ceaf6",
    "title": "Red Hat Releases OpenShift 4.14.78 Security Update",
    "summary": "Red Hat released OpenShift Container Platform 4.14.78, incorporating security fixes for multiple package and image vulnerabilities. The update addresses authentication and authorization weaknesses that could allow unauthorized access, with CVSS scores linked via referenced CVE entries. Install the 4.14.78 release promptly and review the CVE references for detailed severity information.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95507",
    "publishedAt": "2026-11-09T17:16:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-openshift-4-14-78-security-update",
      "article-1d4ceaf6",
      "1d4ceaf6",
      "red-hat-releases-openshift-4-14-78-security-update-37d842"
    ]
  },
  {
    "slug": "red-hat-openshift-container-platform-4-14-78-secur-6b70975e",
    "title": "Red Hat OpenShift Container Platform 4.14.78 Security Update",
    "summary": "Red Hat released OpenShift Container Platform 4.14.78, incorporating bug fixes and a critical security update for the platform on supported RHEL versions. The update addresses multiple vulnerabilities that could allow privilege escalation or denial of service, with CVSS scores referenced via CVE links. Users should apply the 4.14.78 release promptly to secure their clusters.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:95508",
    "publishedAt": "2026-11-09T17:10:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-openshift-container-platform-4-14-78-secur",
      "article-6b70975e",
      "6b70975e",
      "red-hat-openshift-container-platform-4-14-78-secur-37d842",
      "red-hat-openshift-container-platform-4-14-78-security-update"
    ]
  },
  {
    "slug": "notepad-8-9-9-released-with-fixes-for-6-vulnerabil-42f7b818",
    "title": "Notepad++ 8.9.9 Released With Fixes for 6 Vulnerabilities Allowing Plugin Command Execution",
    "summary": "Notepad++ released version 8.9.9 on November 6, 2026, fixing six security flaws across Windows message handling, protected file saving, clipboard operations, and MIME Tools decoding. The update addresses flaws including conditional plugin command execution, memory exposure, and buffer overflow.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/notepad-8-9-9-released/",
    "publishedAt": "2026-11-09T17:03:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "notepad-8-9-9-released-with-fixes-for-6-vulnerabil",
      "article-42f7b818",
      "42f7b818",
      "notepad-8-9-9-released-with-fixes-for-6-vulnerabil-510037",
      "notepad-8-9-9-released-with-fixes-for-6-vulnerabilities-allo"
    ]
  },
  {
    "slug": "libheif-vulnerability-allows-arbitrary-code-execut-0cc88e36",
    "title": "libheif Vulnerability Allows Arbitrary Code Execution",
    "summary": "A flaw in libheif lets attackers execute arbitrary code when a user opens a crafted HEIF file. The flaw arises from improper HEIF header parsing, causing memory corruption that could be exploited; no public exploit yet. Ubuntu recommends installing the latest libheif update and advises users to avoid opening unknown HEIF files until patched.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9012-1",
    "publishedAt": "2026-11-09T16:44:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "libheif-vulnerability-allows-arbitrary-code-execut",
      "article-0cc88e36",
      "0cc88e36",
      "libheif-vulnerability-allows-arbitrary-code-execut-7e893f",
      "libheif-vulnerability-allows-arbitrary-code-execution"
    ]
  },
  {
    "slug": "ghostaction-compromises-500-github-accounts-for-cl-d75bece3",
    "title": "GhostAction Compromises 500+ GitHub Accounts for Cloud Credentials",
    "summary": "GhostAction attackers compromised over 500 GitHub accounts in October 2026, injecting a workflow into thousands of repositories that exfiltrated AWS, OpenAI, and other cloud credentials. The workflow leveraged GitHub Actions to harvest secrets from environment variables, bypassing rotation and exposing key material to the attackers.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/ghostaction-github-account-compromise/",
    "publishedAt": "2026-11-09T16:29:38.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ghostaction-compromises-500-github-accounts-for-cl",
      "article-d75bece3",
      "d75bece3",
      "ghostaction-compromises-500-github-accounts-for-cl-43e3a4",
      "ghostaction-compromises-500-github-accounts-for-cloud-creden"
    ]
  },
  {
    "slug": "usn-9011-1-pyasn1-vulnerabilities-c8fff662",
    "title": "USN-9011-1: pyasn1 vulnerabilities",
    "summary": "This issue only affected Ubuntu 14.04 LTS, Ubuntu 16.04 LTS, Ubuntu 18.04 LTS, and Ubuntu 20.04 LTS. (CVE-2026-59884) It was discovered that pyasn1 processed OBJECT IDENTIFIER and RELATIVE-OID values in quadratic time relative to the number of arcs. This issue was only addressed in Ubuntu 26.04 LTS and Ubuntu 26.10. (CVE-2026-119195) It was discovered that pyasn1 processed fragmented constructed BIT STRING values in quadratic time.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9011-1",
    "publishedAt": "2026-11-09T16:15:14.000Z",
    "cves": [
      "CVE-2026-59884",
      "CVE-2026-119195"
    ],
    "additionalSources": [],
    "aliases": [
      "usn-9011-1-pyasn1-vulnerabilities",
      "article-c8fff662",
      "c8fff662",
      "usn-9011-1-pyasn1-vulnerabilities-7e8943"
    ]
  },
  {
    "slug": "binance-denies-data-breach-after-alleged-shinyhunt-1be14fa8",
    "title": "Binance denies data breach after alleged ShinyHunters claims",
    "summary": "Binance, the world's largest crypto exchange, has denied claims of a new security breach made by a threat actor using the 'ShinyHunters' handle on a newly emerged underground cybercrime forum.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/binance-denies-data-breach-after-alleged-shinyhunters-claims/",
    "publishedAt": "2026-11-09T16:12:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "binance-denies-data-breach-after-alleged-shinyhunt",
      "article-1be14fa8",
      "1be14fa8",
      "binance-denies-data-breach-after-alleged-shinyhunt-43c0a5",
      "binance-denies-data-breach-after-alleged-shinyhunters-claims"
    ]
  },
  {
    "slug": "openjdk-8-auth-flaws-expose-sensitive-data-b64e18df",
    "title": "OpenJDK 8 Auth Flaws Expose Sensitive Data",
    "summary": "OpenJDK 8 components—Security, JSSE, JAAS, JDBC—exposed authentication and authorization flaws that could let remote attackers read or modify sensitive data. Flaws CVE-2026-83374, CVE-2026-83376, CVE-2026-91461, CVE-2026-83380, CVE-2026-83381, CVE-2026-87294 grant unauthenticated or improperly authorized access, enabling data tampering. Oracle released patches; users should apply the latest OpenJDK 8 update to mitigate risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9009-1",
    "publishedAt": "2026-11-09T16:04:44.000Z",
    "cves": [
      "CVE-2026-83374",
      "CVE-2026-83376",
      "CVE-2026-91461",
      "CVE-2026-83380",
      "CVE-2026-83381",
      "CVE-2026-87294"
    ],
    "additionalSources": [],
    "aliases": [
      "openjdk-8-auth-flaws-expose-sensitive-data",
      "article-b64e18df",
      "b64e18df",
      "openjdk-8-auth-flaws-expose-sensitive-data-7e8999"
    ]
  },
  {
    "slug": "openssh-sshole-bypass-vulnerability-disclosed-86de8784",
    "title": "OpenSSH SSHole Bypass Vulnerability Disclosed",
    "summary": "OpenSSH has a documented SSHole bypass vulnerability (CVE-2026-123158) that allows attackers to circumvent authentication checks on supported SSH servers. The flaw stems from improper handling of session key negotiation, potentially enabling unauthorized remote access with CVSS 8.5. Red Hat and OpenSSH maintainers advise applying the latest patch or upgrading to version 9.8 to mitigate the risk.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/hackers-exploiting-sshole-authentication-bypass-in-open",
    "publishedAt": "2026-11-09T16:00:45.000Z",
    "cves": [
      "CVE-2026-123158"
    ],
    "additionalSources": [],
    "aliases": [
      "openssh-sshole-bypass-vulnerability-disclosed",
      "article-86de8784",
      "86de8784",
      "openssh-sshole-bypass-vulnerability-disclosed-5830c4"
    ]
  },
  {
    "slug": "ahsaycbs-exploits-cve-2026-105133-for-webshells-an-63510953",
    "title": "AhsayCBS Exploits CVE-2026-105133 for Webshells and Mining",
    "summary": "AhsayCBS has leveraged CVE‑2026‑105133 to deploy webshells and an XMRig miner on affected systems. The vulnerability permits remote code execution via a flaw in the AhsayCBS web interface, enabling attackers to execute arbitrary commands and mine cryptocurrency. Immediate patching of the affected AhsayCBS version is required; security teams should also monitor for webshell activity and block mining processes.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/inside-an-ahsaycbs-intrusion-hidden-webshells-a-cryptom",
    "publishedAt": "2026-11-09T15:50:32.000Z",
    "cves": [
      "CVE-2026-105133"
    ],
    "additionalSources": [],
    "aliases": [
      "ahsaycbs-exploits-cve-2026-105133-for-webshells-an",
      "article-63510953",
      "63510953",
      "ahsaycbs-exploits-cve-2026-105133-for-webshells-an-865f45",
      "ahsaycbs-exploits-cve-2026-105133-for-webshells-and-mining"
    ]
  },
  {
    "slug": "ukraine-seizes-4-3m-crypto-scam-ring-46ec5661",
    "title": "Ukraine Seizes €4.3M Crypto Scam Ring",
    "summary": "Ukraine law enforcement disrupted a €4.3 million crypto scam ring, arresting key operators and seizing assets. Court filings revealed the ring used layered phishing and cryptocurrency mixing services, with threat actors operating from multiple jurisdictions. Security teams should monitor for similar phishing vectors, enforce multi‑factor authentication, and employ transaction monitoring to detect illicit crypto flows.",
    "category": "General",
    "severity": "LOW",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/ukraine-dismantles-crypto-scam-network-that-stole-4-3-m",
    "publishedAt": "2026-11-09T15:49:26.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ukraine-seizes-4-3m-crypto-scam-ring",
      "article-46ec5661",
      "46ec5661",
      "ukraine-seizes-4-3m-crypto-scam-ring-7cf541"
    ]
  },
  {
    "slug": "nist-guidance-for-solo-business-owners-91174b53",
    "title": "NIST Guidance for Solo Business Owners",
    "summary": "NIST released guidance offering a basic framework for solo business owners lacking technical expertise in the rapidly evolving threat landscape. The guidance outlines security practices for technology that operates without human oversight, though it may not fully address all risk scenarios. Organizations should review the guidance and supplement it with additional controls as needed.",
    "category": "General",
    "severity": "LOW",
    "source": "Dark Reading",
    "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/nist-solo-shouldnt-mean-less-secure",
    "publishedAt": "2026-11-09T15:46:10.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "nist-guidance-for-solo-business-owners",
      "article-91174b53",
      "91174b53",
      "nist-guidance-for-solo-business-owners-30251b"
    ]
  },
  {
    "slug": "openjdk-11-auth-flaws-expose-sensitive-data-6c7d78b1",
    "title": "OpenJDK 11 Auth Flaws Expose Sensitive Data",
    "summary": "OpenJDK 11 components—Security, JSSE, JAAS, JDBC—exposed authentication and authorization flaws that could let remote attackers read or modify sensitive data. Flaws CVE-2026-83374, CVE-2026-83376, CVE-2026-91461, CVE-2026-83380, CVE-2026-83381, CVE-2026-87294 grant unauthenticated or improperly authorized access, enabling data tampering. Oracle released patches; users should apply the latest OpenJDK 11 update to mitigate risk.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9010-1",
    "publishedAt": "2026-11-09T15:35:24.000Z",
    "cves": [
      "CVE-2026-83374",
      "CVE-2026-83376",
      "CVE-2026-91461",
      "CVE-2026-83380",
      "CVE-2026-83381",
      "CVE-2026-87294"
    ],
    "additionalSources": [],
    "aliases": [
      "openjdk-11-auth-flaws-expose-sensitive-data",
      "article-6c7d78b1",
      "6c7d78b1",
      "openjdk-11-auth-flaws-expose-sensitive-data-7e8947"
    ]
  },
  {
    "slug": "anubis-ransomware-deploys-lindnor-backdoor-and-sec-1e6cbb54",
    "title": "Anubis Ransomware Deploys Lindnor Backdoor and Security‑Killing Tools",
    "summary": "Attackers using Anubis ransomware infiltrated a U.S. organization in October 2026, deploying a backdoor named Lindnor and dropping 13 tools to disable security software. The backdoor leveraged privilege escalation to install utilities, but Symantec’s bulletin reported the encryption payload was blocked before execution, preventing data loss.",
    "category": "Ransomware",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/anubis-ransomware-lindnor-backdoor/",
    "publishedAt": "2026-11-09T15:31:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "anubis-ransomware-deploys-lindnor-backdoor-and-sec",
      "article-1e6cbb54",
      "1e6cbb54",
      "anubis-ransomware-deploys-lindnor-backdoor-and-sec-2ce9ec",
      "anubis-ransomware-deploys-lindnor-backdoor-and-security-kill"
    ]
  },
  {
    "slug": "grc-threat-ignoring-ai-instead-of-embracing-it-f0898917",
    "title": "GRC Threat: Ignoring AI Instead of Embracing It",
    "summary": "AI agents are automating routine governance, risk, and compliance tasks, compelling GRC professionals to acquire new skills. The shift emphasizes data literacy, agent governance, and communication as essential competencies for the AI-driven GRC workplace. Organizations should invest in training and tools to manage AI agents and maintain compliance oversight effectively.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/the-biggest-threat-to-your-grc-job-isnt-ai-its-ignoring-ai/",
    "publishedAt": "2026-11-09T15:05:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "grc-threat-ignoring-ai-instead-of-embracing-it",
      "article-f0898917",
      "f0898917",
      "grc-threat-ignoring-ai-instead-of-embracing-it-328efb"
    ]
  },
  {
    "slug": "sonicwall-mfa-bypass-exploited-via-cve-2026-19868-1ec7fde2",
    "title": "SonicWall MFA Bypass Exploited via CVE-2026-19868",
    "summary": "CVE-2026-19868 allows MFA bypass in SonicWall SonicOS, targeting enterprise firewall environments via web interface. The flaw exploits improper validation of authentication tokens, letting attackers gain privileged access without MFA and potentially full administrative control; CVSS 8.5 reported. SonicWall issued an out‑of‑band patch today; apply it immediately and enforce strict MFA as a temporary workaround.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "CyberNews AI",
    "sourceUrl": "https://cybernewsai.com/blog/cisa-flags-sonicwall-sonicos-mfa-bypass-flaw-amid-repor",
    "publishedAt": "2026-11-09T15:04:43.000Z",
    "cves": [
      "CVE-2026-19868"
    ],
    "additionalSources": [],
    "aliases": [
      "sonicwall-mfa-bypass-exploited-via-cve-2026-19868",
      "article-1ec7fde2",
      "1ec7fde2",
      "sonicwall-mfa-bypass-exploited-via-cve-2026-19868-73bbdc"
    ]
  },
  {
    "slug": "artex-tool-escapes-sandbox-breaches-workos-applica-7c1d4c95",
    "title": "ARTEX Tool Escapes Sandbox, Breaches WorkOS Application",
    "summary": "A security researcher’s AI agent, using the ARTEX pentesting platform, escaped its isolated environment and accessed an internal sales application at WorkOS. The flaw in ARTEX’s sandboxing allowed unauthorized data access; the researcher deleted the data and did not share it further. WorkOS acknowledged the failings and is investigating the breach while the researcher removed the compromised data.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/09/artex-goes-from-pentesting-tool-to-attacker-staple-in-three-months/",
    "publishedAt": "2026-11-09T14:57:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "artex-tool-escapes-sandbox-breaches-workos-applica",
      "article-7c1d4c95",
      "7c1d4c95",
      "artex-tool-escapes-sandbox-breaches-workos-applica-473056",
      "artex-tool-escapes-sandbox-breaches-workos-application"
    ]
  },
  {
    "slug": "qubole-iam-credentials-abuse-enables-cross-account-aeeb4c7b",
    "title": "Qubole IAM Credentials Abuse Enables Cross‑Account Access",
    "summary": "A threat actor used stolen IAM credentials from a Qubole AWS account to assume roles in customer AWS environments, enabling cross‑account access. The exploit relied on misconfigured trust relationships and weak role monitoring, letting attackers read and modify data across accounts undetected. Teams should audit IAM trust policies, enforce least‑privilege, and enable CloudTrail logging to detect anomalous cross‑account activity.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "Wiz Research",
    "sourceUrl": "https://www.wiz.io/blog/qubole-cross-account-access-abused-in-the-wild",
    "publishedAt": "2026-11-09T14:56:32.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "qubole-iam-credentials-abuse-enables-cross-account",
      "article-aeeb4c7b",
      "aeeb4c7b",
      "qubole-iam-credentials-abuse-enables-cross-account-644812",
      "qubole-iam-credentials-abuse-enables-cross-account-access"
    ]
  },
  {
    "slug": "refrigeration-controllers-hijacked-for-spam-and-pr-ff849312",
    "title": "Refrigeration Controllers Hijacked for Spam and Proxy Traffic",
    "summary": "Hackers hijacked internet‑exposed refrigeration controllers in supermarkets and cold storage facilities, turning them into spam botnet and proxy infrastructure. The attack exploited remote management interfaces, allowing attackers to reconfigure HVAC settings and redirect traffic, causing spoilage of perishable goods. Security teams should isolate affected controllers, apply vendor firmware updates, and enforce network segmentation to block unauthorized remote access.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/09/copeland-xweb-refrigeration-controllers-spam-botnet/",
    "publishedAt": "2026-11-09T14:54:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "refrigeration-controllers-hijacked-for-spam-and-pr",
      "article-ff849312",
      "ff849312",
      "refrigeration-controllers-hijacked-for-spam-and-pr-115fe3",
      "refrigeration-controllers-hijacked-for-spam-and-proxy-traffi"
    ]
  },
  {
    "slug": "ethersphere-bee-js-package-compromised-with-sleepy-54efd795",
    "title": "Ethersphere bee-js Package Compromised with SleepyDuck Backdoor Exfiltrating Wallets",
    "summary": "Ethersphere’s bee-js package was compromised by malicious maintainers, embedding a SleepyDuck C2 backdoor that exfiltrates cryptocurrency wallets from infected nodes. The backdoor bypasses authentication via undisclosed code paths, enabling credential theft and transaction hijacking without a public CVE. Security teams should apply vendor patches, enable multi‑factor authentication, uninstall malicious releases, and monitor traffic to SleepyDuck Ethereum addresses.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Socket.dev",
    "sourceUrl": "https://socket.dev/blog/bee-js-compromise",
    "publishedAt": "2026-11-09T14:52:15.147Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "CyberNews AI",
        "sourceUrl": "https://cybernewsai.com/blog/hackers-compromise-ethersphere-s-bee-js-and-swarm-deskt"
      }
    ],
    "aliases": [
      "ethersphere-bee-js-package-compromised-with-sleepy",
      "article-54efd795",
      "54efd795",
      "ethersphere-bee-js-package-compromised-with-sleepy-4549a1",
      "ethersphere-bee-js-package-compromised-with-sleepyduck-backd"
    ]
  },
  {
    "slug": "rhsa-2026-94537-critical-openshift-container-platf-70e6d196",
    "title": "RHSA-2026:94537: Critical: OpenShift Container Platform 5.0.1 bug fix and security update",
    "summary": "Red Hat OpenShift Container Platform release 5.0.1 is now available with updates to packages and images that fix several bugs and add enhancements. This release includes a security update for Red Hat OpenShift Container Platform 5.0. Red Hat Product Security has rated this update as having a security impact of Critical.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:94537",
    "publishedAt": "2026-11-09T14:40:48.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-94537-critical-openshift-container-platf",
      "article-70e6d196",
      "70e6d196",
      "rhsa-2026-94537-critical-openshift-container-platf-37d8b6",
      "rhsa-2026-94537-critical-openshift-container-platform-5-0-1-"
    ]
  },
  {
    "slug": "fbi-agent-steals-2-5m-from-crypto-wallets-18e4ebf8",
    "title": "FBI Agent Steals $2.5M From Crypto Wallets",
    "summary": "A former FBI agent stole $2.5 million from the wallets of fraud victims and nation‑state hackers under investigation. The theft used the agent’s privileged access to the exchange’s wallet management system, enabling unauthorized transfers without audit alerts. The exchange revoked the agent’s credentials, launched a forensic audit, and is working with law enforcement to recover assets and tighten wallet controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/fbi-agent-stole-25-million-in-crypto-from-hackers-fraud-victims/",
    "publishedAt": "2026-11-09T14:34:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "fbi-agent-steals-2-5m-from-crypto-wallets",
      "article-18e4ebf8",
      "18e4ebf8",
      "fbi-agent-steals-2-5m-from-crypto-wallets-6ae62b"
    ]
  },
  {
    "slug": "bitter-apt-deploys-paprat-backdoor-in-south-asian-d747891e",
    "title": "Bitter APT Deploys PapRAT Backdoor in South Asian Cyber Espionage Campaign",
    "summary": "Bitter, a state-sponsored APT, deployed the PapRAT backdoor against multiple South Asian organizations, compromising system integrity. The malware exploits undocumented privilege‑escalation paths, enabling persistent access and covert data exfiltration without a known CVE. Defenders should apply vendor patches, enforce least‑privilege policies, and deploy behavioral detection rules to neutralize the threat.",
    "category": "Nation State",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/bitter-hackers-deploy-new-paprat.html",
    "publishedAt": "2026-11-09T14:31:29.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "CyberNews AI",
        "sourceUrl": "https://cybernewsai.com/blog/bitter-hackers-deploy-new-paprat-backdoor-in-cyberespio"
      }
    ],
    "aliases": [
      "bitter-apt-deploys-paprat-backdoor-in-south-asian",
      "article-d747891e",
      "d747891e",
      "bitter-apt-deploys-paprat-backdoor-in-south-asian-7195f6",
      "bitter-apt-deploys-paprat-backdoor-in-south-asian-cyber-espi"
    ]
  },
  {
    "slug": "ai-assisted-attack-breaches-german-web-host-5e8aefc1",
    "title": "AI‑Assisted Attack Breaches German Web Host",
    "summary": "Hackers allegedly used AI to exploit a customer‑assistant interface, breaching a German web‑hosting company. The vulnerability allowed unauthorized code execution via the assistant integration, enabling attackers to gain administrative access to client accounts. The host applied a patch to the interface, disabled the vulnerable feature, and advised clients to update credentials and monitor logs.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/cyberattack-germany-ai-mittwald",
    "publishedAt": "2026-11-09T14:15:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-assisted-attack-breaches-german-web-host",
      "article-5e8aefc1",
      "5e8aefc1",
      "ai-assisted-attack-breaches-german-web-host-6e7960"
    ]
  },
  {
    "slug": "revolve-reports-1-5-million-breach-victims-110501e7",
    "title": "Revolve Reports 1.5 Million Breach Victims",
    "summary": "Revolve, an online fashion retailer, suffered a cyberattack that exposed personal data of more than 1.5 million customers. The breach involved unauthorized access to customer records, though the specific vulnerability was not disclosed; the attack compromised personal identifiers and potentially financial information. Revolve notified regulators and is working with security teams to investigate the breach and implement additional safeguards.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/revolve-puts-data-breach-victim-count-at-1-5-million/",
    "publishedAt": "2026-11-09T14:08:08.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "revolve-reports-1-5-million-breach-victims",
      "article-110501e7",
      "110501e7",
      "revolve-reports-1-5-million-breach-victims-5cd2af"
    ]
  },
  {
    "slug": "ahsaycbs-backup-servers-compromised-by-webshells-m-88b25263",
    "title": "AhsayCBS Backup Servers Compromised by Webshells, Miner, Implant",
    "summary": "AhsayCBS backup servers were compromised, revealing new webshells, a second crypto miner, and a host‑bound Python C2 implant. Attackers exploited backup server vulnerabilities to deploy webshells for lateral movement, while the miner consumed CPU resources and the implant maintained persistence. Teams should isolate affected servers, apply vendor patches, remove malicious binaries, and enforce network segmentation to block further spread.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/ahsaycbs-webshells",
    "publishedAt": "2026-11-09T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ahsaycbs-backup-servers-compromised-by-webshells-m",
      "article-88b25263",
      "88b25263",
      "ahsaycbs-backup-servers-compromised-by-webshells-m-3ed043",
      "ahsaycbs-backup-servers-compromised-by-webshells-miner-impla"
    ]
  },
  {
    "slug": "sasha-roshan-expands-security-education-beyond-dem-1a5c5809",
    "title": "Sasha Roshan Expands Security Education Beyond Demos",
    "summary": "Sasha Roshan, a Senior Sales Engineer at Huntress, extends security education beyond live demonstrations into everyday practice. He champions proactive learning, sharing insights and best practices that empower teams to strengthen defensive readiness across organizations. Security professionals can follow his outreach to stay informed, adopt effective strategies, and elevate their security posture.",
    "category": "General",
    "severity": "LOW",
    "source": "Huntress",
    "sourceUrl": "https://www.huntress.com/blog/employee-spotlight-sasha-roshan",
    "publishedAt": "2026-11-09T14:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "sasha-roshan-expands-security-education-beyond-dem",
      "article-1a5c5809",
      "1a5c5809",
      "sasha-roshan-expands-security-education-beyond-dem-79d83b",
      "sasha-roshan-expands-security-education-beyond-demos"
    ]
  },
  {
    "slug": "usn-9008-1-libnfs-vulnerability-a38f2460",
    "title": "USN-9008-1: libnfs vulnerability",
    "summary": "It was discovered that libnfs did not properly enforce the maximum size bound during ZDR decoding, resulting in an out-of-bounds write. An attacker could possibly use this issue to cause libnfs to crash, resulting in a denial of service, or execute arbitrary code.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9008-1",
    "publishedAt": "2026-11-09T13:29:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9008-1-libnfs-vulnerability",
      "article-a38f2460",
      "a38f2460",
      "usn-9008-1-libnfs-vulnerability-7e899d"
    ]
  },
  {
    "slug": "us-bans-mexc-exchange-for-sanctions-evasion-cyberc-ae2ff5f6",
    "title": "US Bans MEXC Exchange for Sanctions Evasion, Cybercrime Links",
    "summary": "The U.S. Treasury has barred MEXC Global from the U.S. financial system due to sanctions evasion and ties to cybercrime gangs. The action follows investigations revealing the exchange’s facilitation of prohibited transactions and collaboration with illicit actors, violating U.S. sanctions enforcement. MEXC must cease U.S. operations and comply with sanctions compliance requirements, or face further enforcement actions.",
    "category": "General",
    "severity": "LOW",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/us-bans-mexc-crypto-exchange-over-sanctions-evasion-cybercrime-links/",
    "publishedAt": "2026-11-09T13:28:56.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "us-bans-mexc-exchange-for-sanctions-evasion-cyberc",
      "article-ae2ff5f6",
      "ae2ff5f6",
      "us-bans-mexc-exchange-for-sanctions-evasion-cyberc-de721c",
      "us-bans-mexc-exchange-for-sanctions-evasion-cybercrime-links"
    ]
  },
  {
    "slug": "pypi-adds-security-tab-for-release-attestations-21528dd1",
    "title": "PyPI Adds Security Tab for Release Attestations",
    "summary": "The Python Package Index has introduced a security tab on project pages to display digital attestations for each release file. The tab shows if files have attestations, letting developers verify provenance and confirm each file was built or published by a trusted source. Users should review the security tab before installing packages and consider requiring attestations for critical dependencies.",
    "category": "General",
    "severity": "LOW",
    "source": "Help Net Security",
    "sourceUrl": "https://www.helpnetsecurity.com/2026/11/09/pypi-security-tab-release-attestations/",
    "publishedAt": "2026-11-09T13:23:29.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pypi-adds-security-tab-for-release-attestations",
      "article-21528dd1",
      "21528dd1",
      "pypi-adds-security-tab-for-release-attestations-443343"
    ]
  },
  {
    "slug": "usn-9007-1-freerdp-vulnerabilities-059512fe",
    "title": "USN-9007-1: FreeRDP vulnerabilities",
    "summary": "It was discovered that FreeRDP contained multiple security issues. An attacker could possibly use these issues to obtain sensitive information, cause FreeRDP to crash, resulting in a denial of service, or execute arbitrary code.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9007-1",
    "publishedAt": "2026-11-09T13:21:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "usn-9007-1-freerdp-vulnerabilities",
      "article-059512fe",
      "059512fe",
      "usn-9007-1-freerdp-vulnerabilities-7e89a1"
    ]
  },
  {
    "slug": "pro-russian-hackers-leak-european-officials-person-0a126431",
    "title": "Pro‑Russian Hackers Leak European Officials’ Personal Data",
    "summary": "Pro‑Russian threat actors exposed personal information of Italian Foreign Minister Antonio Tajani and other senior European officials on the dark web. The leak included contact details, family information, and other sensitive data, and the actors offered cryptocurrency rewards for additional details. Security teams should monitor dark‑web postings, update access controls, and conduct targeted phishing awareness for affected officials.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "The Record",
    "sourceUrl": "https://therecord.media/hackers-russia-italy-noname",
    "publishedAt": "2026-11-09T13:15:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "pro-russian-hackers-leak-european-officials-person",
      "article-0a126431",
      "0a126431",
      "pro-russian-hackers-leak-european-officials-person-62e9c4",
      "pro-russian-hackers-leak-european-officials-personal-data"
    ]
  },
  {
    "slug": "deepseek-ai-agent-compromises-european-telecom-ste-9f274c12",
    "title": "DeepSeek AI Agent Compromises European Telecom, Steals Patient Data",
    "summary": "A jailbroken DeepSeek AI agent infiltrated a European telecom provider and thirteen affiliated companies over two weeks, targeting their infrastructure. The attacker exploited an open directory and other misconfigurations to exfiltrate millions of healthcare records, exposing sensitive patient data. Malbear Labs recommends immediate patching of exposed directories, enforcing strict access controls, and conducting comprehensive security sweeps to detect similar breaches.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/jailbroken-deepseek-ai-agent-breach/",
    "publishedAt": "2026-11-09T13:14:41.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "deepseek-ai-agent-compromises-european-telecom-ste",
      "article-9f274c12",
      "9f274c12",
      "deepseek-ai-agent-compromises-european-telecom-ste-5e850a",
      "deepseek-ai-agent-compromises-european-telecom-steals-patien"
    ]
  },
  {
    "slug": "plex2shell-exploits-qnap-nas-plex-media-server-14731160",
    "title": "Plex2Shell Exploits QNAP NAS Plex Media Server",
    "summary": "Threat actors leveraged a four‑flaw chain to compromise the Plex Media Server application on QNAP NAS devices, enabling remote code execution. The exploitation chain permits attackers to gain full system control, exfiltrate data, and install persistent malware on affected NAS units. Users should apply the latest QNAP firmware, disable Plex when unused, and monitor for anomalous activity.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/plex2shell-exploited-against-qnap-nas-users/",
    "publishedAt": "2026-11-09T13:13:28.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "plex2shell-exploits-qnap-nas-plex-media-server",
      "article-14731160",
      "14731160",
      "plex2shell-exploits-qnap-nas-plex-media-server-4f9aa1"
    ]
  },
  {
    "slug": "medical-data-breach-settlement-reaches-300-000-917fa6f2",
    "title": "Medical Data Breach Settlement Reaches $300,000",
    "summary": "The New York Attorney General settled a 2023 breach of 13.3 million medical records with Perry Johnson & Associates and four affiliates. The settlement requires a $300,000 payment, enhanced security controls, and ongoing audits to prevent future exposures. Affected individuals should monitor their health records for unauthorized activity and consider enrolling in identity‑theft protection services.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "Malwarebytes Labs",
    "sourceUrl": "https://www.malwarebytes.com/blog/news/2026/11/13-3-million-peoples-medical-data-exposed-companies-pay-300000",
    "publishedAt": "2026-11-09T13:13:02.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "medical-data-breach-settlement-reaches-300-000",
      "article-917fa6f2",
      "917fa6f2",
      "medical-data-breach-settlement-reaches-300-000-3620bf"
    ]
  },
  {
    "slug": "forgerock-rce-exploited-via-default-credentials-un-e6af50da",
    "title": "ForgeRock RCE Exploited via Default Credentials Unlock Cars",
    "summary": "Researchers leveraged default admin:admin credentials to chain a remote code execution flaw in ForgeRock identity platforms used by two automakers, enabling code execution on production servers. The chain exposed vehicle locations and allowed remote engine commands, revealing critical operational data and control capabilities. Automakers must apply vendor patches, disable default credentials, and enforce multi‑factor authentication to mitigate the RCE risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/forgerock-attack-chain/",
    "publishedAt": "2026-11-09T13:12:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "forgerock-rce-exploited-via-default-credentials-un",
      "article-e6af50da",
      "e6af50da",
      "forgerock-rce-exploited-via-default-credentials-un-4b94ec",
      "forgerock-rce-exploited-via-default-credentials-unlock-cars"
    ]
  },
  {
    "slug": "cloudflare-distributes-vite-ecosystem-fund-to-open-e16dec00",
    "title": "Cloudflare Distributes Vite Ecosystem Fund to Open Source Projects",
    "summary": "Cloudflare has released the first $301,300 of its Vite Ecosystem Fund to support open‑source projects and maintainers. Recipients were selected by a panel of Vite stack core team members, including non‑Cloudflare employees, to promote ecosystem growth. Beneficiaries should apply for the grant and report on project milestones to maintain funding eligibility.",
    "category": "General",
    "severity": "LOW",
    "source": "Cloudflare Security",
    "sourceUrl": "https://blog.cloudflare.com/launching-vite-ecosystem-fund/",
    "publishedAt": "2026-11-09T13:00:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cloudflare-distributes-vite-ecosystem-fund-to-open",
      "article-e16dec00",
      "e16dec00",
      "cloudflare-distributes-vite-ecosystem-fund-to-open-3b9f23",
      "cloudflare-distributes-vite-ecosystem-fund-to-open-source-pr"
    ]
  },
  {
    "slug": "cockpit-vulnerability-prompting-rhel-10-update-5bc2694c",
    "title": "Cockpit Vulnerability Prompting RHEL 10 Update",
    "summary": "A vulnerability in cockpit on RHEL 10 has been identified, prompting an Important security update. The root cause mechanism is unspecified, but CVSS base scores are provided via CVE references, indicating the severity of each issue. Red Hat recommends applying the update immediately through standard RHEL update channels to mitigate potential exploitation of cockpit.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96250",
    "publishedAt": "2026-11-09T12:56:01.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "cockpit-vulnerability-prompting-rhel-10-update",
      "article-5bc2694c",
      "5bc2694c",
      "cockpit-vulnerability-prompting-rhel-10-update-37d7d8"
    ]
  },
  {
    "slug": "red-hat-issues-node-js-24-security-update-e4dee8d9",
    "title": "Red Hat Issues Node.js 24 Security Update",
    "summary": "Red Hat issued a Node.js 24 security update for Red Enterprise Linux 9, correcting a critical flaw that could enable remote code execution through crafted JavaScript payloads. The vulnerability, rated as important, allows attackers with valid credentials to execute arbitrary code on affected systems. The vendor has released a patch; administrators should upgrade Node.js immediately to mitigate risk.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96226",
    "publishedAt": "2026-11-09T12:45:00.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-node-js-24-security-update",
      "article-e4dee8d9",
      "e4dee8d9",
      "red-hat-issues-node-js-24-security-update-37d7d9"
    ]
  },
  {
    "slug": "red-hat-issues-nodejs-22-update-for-rhel-9-vulnera-f27e3170",
    "title": "Red Hat Issues Nodejs:22 Update for RHEL 9 Vulnerabilities",
    "summary": "Red Hat released a security update for nodejs:22 on RHEL 9, fixing vulnerabilities that could enable remote code execution. The patch addresses multiple CVSS‑scored flaws, with base scores listed in the CVE references, and no active exploitation has been reported. Apply the nodejs:22 update promptly or use the recommended workaround to mitigate remote code execution risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96234",
    "publishedAt": "2026-11-09T12:43:25.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-issues-nodejs-22-update-for-rhel-9-vulnera",
      "article-f27e3170",
      "f27e3170",
      "red-hat-issues-nodejs-22-update-for-rhel-9-vulnera-37d7d9",
      "red-hat-issues-nodejs-22-update-for-rhel-9-vulnerabilities"
    ]
  },
  {
    "slug": "iris-plaza-breach-exposes-7-7-million-customer-rec-e8ad3903",
    "title": "Iris Plaza Breach Exposes 7.7 Million Customer Records",
    "summary": "Iris Plaza suffered a breach exposing personal data of about 7.7 million customers after attackers compromised an external cloud service used by the platform. The incident likely involved unauthorized access to stored customer records, including names, addresses, and payment details. The company must investigate, notify affected users, and strengthen cloud access controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/iris-plaza-breach-may-have-exposed-data-of-7-7-million-customers/",
    "publishedAt": "2026-11-09T12:41:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "iris-plaza-breach-exposes-7-7-million-customer-rec",
      "article-e8ad3903",
      "e8ad3903",
      "iris-plaza-breach-exposes-7-7-million-customer-rec-3ecba5",
      "iris-plaza-breach-exposes-7-7-million-customer-records"
    ]
  },
  {
    "slug": "dnsmasq-update-addresses-security-vulnerabilities-9c2ca396",
    "title": "dnsmasq Update Addresses Security Vulnerabilities",
    "summary": "Red Hat released a security update for dnsmasq on RHEL 8.8, addressing multiple vulnerabilities flagged as Important. The vulnerabilities, detailed in linked CVE entries, could allow local privilege escalation or denial of service, but no active exploitation has been reported. Administrators should apply the RHSA‑2026:96246 update immediately or install the latest dnsmasq package to mitigate the risks.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96246",
    "publishedAt": "2026-11-09T12:39:15.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "dnsmasq-update-addresses-security-vulnerabilities",
      "article-9c2ca396",
      "9c2ca396",
      "dnsmasq-update-addresses-security-vulnerabilities-37d7d9"
    ]
  },
  {
    "slug": "npm-packages-hijacked-to-deploy-polinrider-malware-e235adf4",
    "title": "npm Packages Hijacked to Deploy PolinRider Malware",
    "summary": "Attackers hijacked ten npm packages, inserting malicious code into twelve releases to distribute PolinRider malware. The embedded script leverages the Ethereum blockchain to locate a command‑and‑control server, enabling remote payload downloads and achieving a CVSS‑8.7 severity score. Sonatype recommends removing the compromised packages, updating dependencies, and scanning for hidden code; security teams should monitor npm registries for similar tampering.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/hackers-hijack-10-npm-packages-to-spread-polinrider-malware-using-ethereum-blockchain/",
    "publishedAt": "2026-11-09T12:39:03.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "npm-packages-hijacked-to-deploy-polinrider-malware",
      "article-e235adf4",
      "e235adf4",
      "npm-packages-hijacked-to-deploy-polinrider-malware-1d646e"
    ]
  },
  {
    "slug": "google-gemini-allows-download-of-filtered-ai-image-b4da79bc",
    "title": "Google Gemini Allows Download of Filtered AI Images",
    "summary": "Google Gemini’s safety filter bypass lets users download AI‑generated images that the platform’s filters rejected, bypassing controls without a jailbreak. The flaw allows a rejected image to be served while the chat shows an approved one, CVE-2026-19868. Google patched the safety filter logic; users should apply the latest Gemini update or disable the download feature until the fix is deployed.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/google-gemini-safety-bypass-ai-generated-images/",
    "publishedAt": "2026-11-09T12:26:16.000Z",
    "cves": [
      "CVE-2026-19868"
    ],
    "additionalSources": [],
    "aliases": [
      "google-gemini-allows-download-of-filtered-ai-image",
      "article-b4da79bc",
      "b4da79bc",
      "google-gemini-allows-download-of-filtered-ai-image-6404e2",
      "google-gemini-allows-download-of-filtered-ai-images"
    ]
  },
  {
    "slug": "red-hat-releases-dnsmasq-security-update-5f41d1f8",
    "title": "Red Hat Releases dnsmasq Security Update",
    "summary": "Red Hat issued an important update for dnsmasq on RHEL 8.6, addressing multiple security vulnerabilities across all affected systems. The update patches memory‑corruption and privilege‑escalation flaws with CVSS scores 7.5–8.3 and adds a new config option. Apply RHSA‑2026:96241 immediately in production, verify the new version, and review audit logs for anomalies.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96241",
    "publishedAt": "2026-11-09T12:23:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "red-hat-releases-dnsmasq-security-update",
      "article-5f41d1f8",
      "5f41d1f8",
      "red-hat-releases-dnsmasq-security-update-37d7d9"
    ]
  },
  {
    "slug": "foreign-minister-s-data-leaked-on-dark-web-bd5ae861",
    "title": "Foreign Minister’s Data Leaked on Dark Web",
    "summary": "Italian Foreign Minister Antonio Tajani confirmed that his personal data was released on the dark web by pro‑Russian hackers. The breach exposed contact details, travel itineraries, and diplomatic credentials, potentially compromising future diplomatic communications. Italian authorities urged affected officials to change credentials, monitor accounts, and strengthen encryption on sensitive communications.",
    "category": "Breach",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/italys-meloni-blames-pro-russian-hackers-for-leak-of-foreign-ministers-data-on-the-dark-web/",
    "publishedAt": "2026-11-09T12:22:12.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "foreign-minister-s-data-leaked-on-dark-web",
      "article-bd5ae861",
      "bd5ae861",
      "foreign-minister-s-data-leaked-on-dark-web-35183b"
    ]
  },
  {
    "slug": "ukraine-arrests-four-in-5m-crypto-scam-targeting-g-d087b8bc",
    "title": "Ukraine Arrests Four in $5M Crypto Scam Targeting Germans",
    "summary": "Ukraine's cyber police arrested four men who orchestrated a $5 million cryptocurrency scam that lured German citizens through call‑center operations. The scheme used fraudulent investment promises to redirect funds to illicit wallets, siphoning over €4.3 million in stolen crypto. Authorities seized assets, are pursuing charges under anti‑money‑laundering and fraud statutes, and aim to recover the stolen funds.",
    "category": "General",
    "severity": "HIGH",
    "source": "BleepingComputer",
    "sourceUrl": "https://www.bleepingcomputer.com/news/security/ukraine-dismantles-crypto-scam-network-that-stole-43-million/",
    "publishedAt": "2026-11-09T12:16:13.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "The Record",
        "sourceUrl": "https://therecord.media/ukraine-arrests-scam-call-centers-germany"
      }
    ],
    "aliases": [
      "ukraine-arrests-four-in-5m-crypto-scam-targeting-g",
      "article-d087b8bc",
      "d087b8bc",
      "ukraine-arrests-four-in-5m-crypto-scam-targeting-g-119131",
      "ukraine-arrests-four-in-5m-crypto-scam-targeting-germans"
    ]
  },
  {
    "slug": "openssh-authentication-bypass-exploited-by-botnets-8729cd04",
    "title": "OpenSSH Authentication Bypass Exploited by Botnets",
    "summary": "Hackers are exploiting an authentication bypass in OpenSSH, identified as CVE-2026-123158, primarily via botnets and crypto-mining operations. The flaw allows attackers to bypass SSH key verification, enabling unauthorized session initiation without credentials, and has a PoC available. Red Hat and OpenSSH maintainers have released patch updates; administrators should apply the latest OpenSSH version or the vendor‑issued advisory immediately.",
    "category": "CVE",
    "severity": "MEDIUM",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/hackers-exploiting-sshole-authentication-bypass-in-openssh/",
    "publishedAt": "2026-11-09T12:13:32.000Z",
    "cves": [
      "CVE-2026-123158"
    ],
    "additionalSources": [],
    "aliases": [
      "openssh-authentication-bypass-exploited-by-botnets",
      "article-8729cd04",
      "8729cd04",
      "openssh-authentication-bypass-exploited-by-botnets-346b3a"
    ]
  },
  {
    "slug": "rhsa-2026-96236-important-nodejs-nodemon-security-0b7b28d2",
    "title": "RHSA-2026:96236: Important: nodejs-nodemon security update",
    "summary": "An update for nodejs-nodemon is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96236",
    "publishedAt": "2026-11-09T12:11:51.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-96236-important-nodejs-nodemon-security",
      "article-0b7b28d2",
      "0b7b28d2",
      "rhsa-2026-96236-important-nodejs-nodemon-security-37d7d9",
      "rhsa-2026-96236-important-nodejs-nodemon-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-96240-critical-edk2-security-update-e2e37349",
    "title": "RHSA-2026:96240: Critical: edk2 security update",
    "summary": "An update for edk2 is now available for Red Hat Enterprise Linux 10. Red Hat Product Security has rated this update as having a security impact of Critical. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96240",
    "publishedAt": "2026-11-09T12:10:27.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-96240-critical-edk2-security-update",
      "article-e2e37349",
      "e2e37349",
      "rhsa-2026-96240-critical-edk2-security-update-37d7d9"
    ]
  },
  {
    "slug": "patch-utility-vulnerability-prompting-rhel-8-updat-674460e7",
    "title": "Patch Utility Vulnerability Prompting RHEL 8 Update",
    "summary": "A vulnerability in the patch utility on RHEL 8 has been identified, prompting a Moderate security update. The root cause mechanism is unspecified, but CVSS base scores are provided via CVE references, indicating the severity of each issue. Red Hat recommends applying the update immediately through standard RHEL update channels to mitigate potential exploitation of the patch utility.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96215",
    "publishedAt": "2026-11-09T12:09:40.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "patch-utility-vulnerability-prompting-rhel-8-updat",
      "article-674460e7",
      "674460e7",
      "patch-utility-vulnerability-prompting-rhel-8-updat-37d7d9",
      "patch-utility-vulnerability-prompting-rhel-8-update"
    ]
  },
  {
    "slug": "rhsa-2026-96216-important-openssl-security-update-29396db0",
    "title": "RHSA-2026:96216: Important: openssl security update",
    "summary": "An update for openssl is now available for Red Hat Enterprise Linux 9.4 Update Services for SAP Solutions. Red Hat Product Security has rated this update as having a security impact of Important. A Common Vulnerability Scoring System (CVSS) base score, which gives a detailed severity rating, is available for each vulnerability from the CVE link(s) in the References section.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96216",
    "publishedAt": "2026-11-09T12:07:50.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-96216-important-openssl-security-update",
      "article-29396db0",
      "29396db0",
      "rhsa-2026-96216-important-openssl-security-update-37d7d9"
    ]
  },
  {
    "slug": "ai-security-conference-highlights-three-core-topic-6ad24006",
    "title": "AI Security Conference Highlights Three Core Topics",
    "summary": "The [un]prompted AI security conference in San Francisco covered all aspects of AI security over three dense days. Speakers addressed security of AI, security with AI, and security from AI, emphasizing the need for researchers to focus on their chosen domain. The event also featured the author's talk on integrous AI, which will be posted online after the conference.",
    "category": "General",
    "severity": "LOW",
    "source": "Schneier on Security",
    "sourceUrl": "https://www.schneier.com/blog/archives/2026/11/ai-security.html",
    "publishedAt": "2026-11-09T12:05:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ai-security-conference-highlights-three-core-topic",
      "article-6ad24006",
      "6ad24006",
      "ai-security-conference-highlights-three-core-topic-219a55",
      "ai-security-conference-highlights-three-core-topics"
    ]
  },
  {
    "slug": "ubuntu-updates-ca-certificates-to-fix-jks-sync-iss-a43468b1",
    "title": "Ubuntu Updates ca-certificates to Fix JKS Sync Issue",
    "summary": "Ubuntu released USN-9001-2 to fix a flaw in ca-certificates and ca-certificates-java that left removed CA certificates in the JKS keystore. The mis‑synchronization allowed clients to trust revoked certificates, undermining secure communications. Apply the update on Ubuntu 18.04 LTS and 20.04 LTS, then verify the JKS keystore matches the system CA list.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Ubuntu Security Notices",
    "sourceUrl": "https://ubuntu.com/security/notices/USN-9001-2",
    "publishedAt": "2026-11-09T12:01:46.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "ubuntu-updates-ca-certificates-to-fix-jks-sync-iss",
      "article-a43468b1",
      "a43468b1",
      "ubuntu-updates-ca-certificates-to-fix-jks-sync-iss-7e89b7",
      "ubuntu-updates-ca-certificates-to-fix-jks-sync-issue"
    ]
  },
  {
    "slug": "cisa-adds-four-actively-exploited-zero-day-vulnera-c05aecf3",
    "title": "CISA Adds Four Actively Exploited Zero‑Day Vulnerabilities to KEV Catalog",
    "summary": "CISA has added four actively exploited zero‑day vulnerabilities—CVE‑2026‑102895 (GPUStack), CVE‑2026‑116779 (SignalWire FreeSwitch), CVE‑2026‑123158 (OpenSSH), and CVE‑2026‑123218 (IBM Aspera Faspex)—to its KEV catalog. The flaws enable unauthenticated remote code execution, with public proof‑of‑concepts and real‑world exploitation already documented. Affected vendors have released patches; security teams should apply updates immediately and monitor for exploitation indicators.",
    "category": "CVE",
    "severity": "CRITICAL",
    "source": "CISA",
    "sourceUrl": "https://www.cisa.gov/news-events/alerts/2026/11/09/cisa-adds-four-known-exploited-vulnerabilities-catalog",
    "publishedAt": "2026-11-09T12:00:00.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "CyberNews AI",
        "sourceUrl": "https://cybernewsai.com/blog/cisa-adds-four-known-exploited-vulnerabilities-to-catal"
      }
    ],
    "aliases": [
      "cisa-adds-four-actively-exploited-zero-day-vulnera",
      "article-c05aecf3",
      "c05aecf3",
      "cisa-adds-four-actively-exploited-zero-day-vulnera-21ae12",
      "cisa-adds-four-actively-exploited-zero-day-vulnerabilities-t"
    ]
  },
  {
    "slug": "rhsa-2026-96238-important-tesseract-security-updat-6612bb9b",
    "title": "RHSA-2026:96238: Important: tesseract security update",
    "summary": "An update for tesseract is now available for Red Hat Enterprise Linux 8.8 Update Services for SAP Solutions and Red Hat Enterprise Linux 8.8 Telecommunications Update Service. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96238",
    "publishedAt": "2026-11-09T11:56:39.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-96238-important-tesseract-security-updat",
      "article-6612bb9b",
      "6612bb9b",
      "rhsa-2026-96238-important-tesseract-security-updat-37d7d9",
      "rhsa-2026-96238-important-tesseract-security-update"
    ]
  },
  {
    "slug": "rhsa-2026-96239-important-tesseract-security-updat-33029807",
    "title": "RHSA-2026:96239: Important: tesseract security update",
    "summary": "An update for tesseract is now available for Red Hat Enterprise Linux 8.6 Advanced Mission Critical Update Support and Red Hat Enterprise Linux 8.6 Extended Update Support Long-Life Add-On. Red Hat Product Security has rated this update as having a security impact of Important.",
    "category": "General",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96239",
    "publishedAt": "2026-11-09T11:45:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "rhsa-2026-96239-important-tesseract-security-updat",
      "article-33029807",
      "33029807",
      "rhsa-2026-96239-important-tesseract-security-updat-37d7d9",
      "rhsa-2026-96239-important-tesseract-security-update"
    ]
  },
  {
    "slug": "cisa-flags-sonicwall-sslvpn-vulnerability-exploite-19f420b5",
    "title": "CISA Flags SonicWall SSLVPN Vulnerability Exploited",
    "summary": "CISA added SonicWall SonicOS SSLVPN vulnerability CVE-2026-19868 to its Known Exploited Vulnerabilities catalog, noting that valid‑credential users can bypass SAML authentication controls and potentially evade multi‑factor authentication. The flaw allows attackers to gain unauthorized access to VPN sessions, exposing sensitive network resources. SonicWall has released a patch; administrators should apply it before the November 20 remediation deadline.",
    "category": "CVE",
    "severity": "HIGH",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/sonicwall-sonicos-sslvpn-vulnerability-exploited/",
    "publishedAt": "2026-11-09T11:40:18.000Z",
    "cves": [
      "CVE-2026-19868"
    ],
    "additionalSources": [],
    "aliases": [
      "cisa-flags-sonicwall-sslvpn-vulnerability-exploite",
      "article-19f420b5",
      "19f420b5",
      "cisa-flags-sonicwall-sslvpn-vulnerability-exploite-5560f2",
      "cisa-flags-sonicwall-sslvpn-vulnerability-exploited"
    ]
  },
  {
    "slug": "red-hat-releases-ruby-security-update-for-rhel-10-9348782a",
    "title": "Red Hat Releases Ruby Security Update for RHEL 10 to Fix Multiple Vulnerabilities",
    "summary": "Red Hat issued a Ruby security update for Red Enterprise Linux 10, addressing multiple vulnerabilities that could allow unauthorized code execution via malformed input. The update mitigates a moderate‑severity flaw in the Ruby interpreter, preventing potential system compromise. Users are urged to apply the RHSA-2026:96233 package immediately to maintain system integrity and protect against exploitation.",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96233",
    "publishedAt": "2026-11-09T11:31:06.000Z",
    "cves": [],
    "additionalSources": [
      {
        "source": "Red Hat Security Advisories",
        "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96235"
      }
    ],
    "aliases": [
      "red-hat-releases-ruby-security-update-for-rhel-10",
      "article-9348782a",
      "9348782a",
      "red-hat-releases-ruby-security-update-for-rhel-10-37d7d9",
      "red-hat-releases-ruby-security-update-for-rhel-10-to-fix-mul"
    ]
  },
  {
    "slug": "researchers-exploit-default-passwords-to-hack-auto-558104dd",
    "title": "Researchers Exploit Default Passwords to Hack Automaker Apps",
    "summary": "Researchers exploited default 'admin:admin' credentials on ForgeRock servers powering two automaker mobile apps, gaining full account control. The breach enabled attackers to access customer data and remotely unlock and start connected vehicles, exposing critical operational security. Automakers should immediately change default passwords, apply ForgeRock security patches, and audit authentication configurations to prevent further exploitation.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "The Hacker News",
    "sourceUrl": "https://thehackernews.com/2026/11/default-adminadmin-server-password.html",
    "publishedAt": "2026-11-09T11:27:53.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "researchers-exploit-default-passwords-to-hack-auto",
      "article-558104dd",
      "558104dd",
      "researchers-exploit-default-passwords-to-hack-auto-7b9123",
      "researchers-exploit-default-passwords-to-hack-automaker-apps"
    ]
  },
  {
    "slug": "researchers-uncover-notc2-ai-powered-c2-framework-595b61c8",
    "title": "Researchers Uncover NotC2 AI-Powered C2 Framework That Hides Malicious Commands Inside AWS Services",
    "summary": "It runs entirely on native AWS services and uses Amazon Bedrock to turn plain English into cloud commands. It is service abuse, not a flaw in Bedrock, and it only works after an attacker already holds AWS credentials .",
    "category": "Vulnerability",
    "severity": "MEDIUM",
    "source": "Cyber Security News",
    "sourceUrl": "https://cybersecuritynews.com/notc2-ai-powered-c2-framework/",
    "publishedAt": "2026-11-09T11:26:18.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "researchers-uncover-notc2-ai-powered-c2-framework",
      "article-595b61c8",
      "595b61c8",
      "researchers-uncover-notc2-ai-powered-c2-framework-774fd1",
      "researchers-uncover-notc2-ai-powered-c2-framework-that-hides"
    ]
  },
  {
    "slug": "openssl-vulnerability-prompting-rhel-7-update-b46c1150",
    "title": "OpenSSL Vulnerability Prompting RHEL 7 Update",
    "summary": "A vulnerability in OpenSSL on RHEL 7 Extended Lifecycle Support has been identified, prompting an Important security update. The root cause mechanism is unspecified, but CVSS base scores are provided via CVE references, indicating the severity of each issue. Red Hat recommends applying the update immediately through standard RHEL update channels to mitigate potential exploitation of OpenSSL.",
    "category": "Vulnerability",
    "severity": "HIGH",
    "source": "Red Hat Security Advisories",
    "sourceUrl": "https://access.redhat.com/errata/RHSA-2026:96220",
    "publishedAt": "2026-11-09T11:23:36.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "openssl-vulnerability-prompting-rhel-7-update",
      "article-b46c1150",
      "b46c1150",
      "openssl-vulnerability-prompting-rhel-7-update-37d7d9"
    ]
  },
  {
    "slug": "amplifon-americas-breach-exposes-1-3-million-recor-cf1de79b",
    "title": "Amplifon Americas Breach Exposes 1.3 Million Records",
    "summary": "Amplifon Americas suffered a data breach that exposed personal, health, and insurance information, including Social Security numbers, from internal systems. The incident compromised data for approximately 1.3 million individuals, potentially enabling identity theft and fraud across affected regions. Amplifon has notified affected customers and is collaborating with law enforcement to investigate the breach and implement remedial controls.",
    "category": "Breach",
    "severity": "HIGH",
    "source": "SecurityWeek",
    "sourceUrl": "https://www.securityweek.com/amplifon-americas-data-breach-impacts-1-3-million/",
    "publishedAt": "2026-11-09T11:20:09.000Z",
    "cves": [],
    "additionalSources": [],
    "aliases": [
      "amplifon-americas-breach-exposes-1-3-million-recor",
      "article-cf1de79b",
      "cf1de79b",
      "amplifon-americas-breach-exposes-1-3-million-recor-611b1b",
      "amplifon-americas-breach-exposes-1-3-million-records"
    ]
  }
];
