export type VendorHealthStatus = 'OPERATIONAL' | 'DEGRADED' | 'OUTAGE';

export interface VendorHealth {
  vendor: string;
  status: VendorHealthStatus;
  summary: string;
  statusUrl: string;
  updatedAt?: string;
}

export const VENDOR_STATUS_REGISTRY: Record<string, VendorHealth> = {
  Azure: {
    vendor: 'Azure',
    status: 'OPERATIONAL',
    summary: 'All Azure cloud regions & services operational',
    statusUrl: 'https://azure.status.microsoft/en-us/status',
  },
  Microsoft: {
    vendor: 'Microsoft',
    status: 'OUTAGE',
    summary: 'Service degradation affecting Microsoft 365, Teams & Exchange Online',
    statusUrl: 'https://status.cloud.microsoft/m365/referrer=serviceStatusRedirect',
  },
  'Palo Alto Networks': {
    vendor: 'Palo Alto Networks',
    status: 'DEGRADED',
    summary: 'Prisma Cloud: Alert Manual and Automated Remediation is unavailable',
    statusUrl: 'https://status.paloaltonetworks.com/',
  },
  SonicWall: {
    vendor: 'SonicWall',
    status: 'DEGRADED',
    summary: 'Email delivery to some mail services impacted (HES NA) & WNM login issue',
    statusUrl: 'https://status.sonicwall.com/',
  },
  Ivanti: {
    vendor: 'Ivanti',
    status: 'OPERATIONAL',
    summary: 'All Ivanti Cloud systems operational',
    statusUrl: 'https://status.ivanticloud.com/',
  },
  Cloudflare: {
    vendor: 'Cloudflare',
    status: 'DEGRADED',
    summary: 'Durable Objects increased error rates in North America',
    statusUrl: 'https://www.cloudflarestatus.com/',
  },
  'Check Point': {
    vendor: 'Check Point',
    status: 'DEGRADED',
    summary: 'Smart-1 Cloud unavailable in UAE region',
    statusUrl: 'https://status.checkpoint.com/',
  },
  Tenable: {
    vendor: 'Tenable',
    status: 'DEGRADED',
    summary: 'Tenable One & Vulnerability Management platform issues',
    statusUrl: 'https://status.tenable.com/',
  },
  AWS: {
    vendor: 'AWS',
    status: 'OPERATIONAL',
    summary: 'All AWS services operating normally',
    statusUrl: 'https://health.aws.amazon.com/health/status',
  },
  CrowdStrike: {
    vendor: 'CrowdStrike',
    status: 'OPERATIONAL',
    summary: 'Falcon cloud platform operational',
    statusUrl: 'https://falcon.crowdstrike.com/',
  },
  Cisco: {
    vendor: 'Cisco',
    status: 'OPERATIONAL',
    summary: 'Duo & Cisco Security services operational',
    statusUrl: 'https://status.cisco.com/',
  },
  Fortinet: {
    vendor: 'Fortinet',
    status: 'OPERATIONAL',
    summary: 'FortiCloud services operational',
    statusUrl: 'https://status.fortistatus.com/',
  },
  'Red Hat': {
    vendor: 'Red Hat',
    status: 'OPERATIONAL',
    summary: 'Red Hat Hybrid Cloud Console operational',
    statusUrl: 'https://status.redhat.com/',
  },
  Google: {
    vendor: 'Google',
    status: 'OPERATIONAL',
    summary: 'Google Cloud Platform operational',
    statusUrl: 'https://status.cloud.google.com/',
  },
  Atlassian: {
    vendor: 'Atlassian',
    status: 'OPERATIONAL',
    summary: 'Jira & Confluence cloud operational',
    statusUrl: 'https://status.atlassian.com/',
  },
  GitLab: {
    vendor: 'GitLab',
    status: 'OPERATIONAL',
    summary: 'GitLab.com operational',
    statusUrl: 'https://status.gitlab.com/',
  },
  Oracle: {
    vendor: 'Oracle',
    status: 'OPERATIONAL',
    summary: 'Oracle Cloud Infrastructure operational',
    statusUrl: 'https://ocistatus.oraclecloud.com/',
  },
  Citrix: {
    vendor: 'Citrix',
    status: 'OPERATIONAL',
    summary: 'Citrix Cloud services operational',
    statusUrl: 'https://status.cloud.com/',
  },
  VMware: {
    vendor: 'VMware',
    status: 'OPERATIONAL',
    summary: 'Broadcom / VMware Cloud operational',
    statusUrl: 'https://status.broadcom.com/',
  },
  Apple: {
    vendor: 'Apple',
    status: 'OPERATIONAL',
    summary: 'Apple Developer & System Services operational',
    statusUrl: 'https://www.apple.com/support/systemstatus/',
  },
  Okta: {
    vendor: 'Okta',
    status: 'OPERATIONAL',
    summary: 'All Okta Identity Cloud services operational',
    statusUrl: 'https://trust.okta.com/',
  },
  Zscaler: {
    vendor: 'Zscaler',
    status: 'OPERATIONAL',
    summary: 'ZIA & ZPA Zero Trust clouds operational',
    statusUrl: 'https://trust.zscaler.com/',
  },
  SentinelOne: {
    vendor: 'SentinelOne',
    status: 'OPERATIONAL',
    summary: 'Singularity XDR platform operational',
    statusUrl: 'https://status.sentinelone.com/',
  },
  Sophos: {
    vendor: 'Sophos',
    status: 'OPERATIONAL',
    summary: 'Sophos Central operational',
    statusUrl: 'https://sophoscentral.status.page/',
  },
  F5: {
    vendor: 'F5',
    status: 'OPERATIONAL',
    summary: 'F5 Distributed Cloud Services operational',
    statusUrl: 'https://www.f5cloudstatus.com/',
  },
  GitHub: {
    vendor: 'GitHub',
    status: 'OPERATIONAL',
    summary: 'All GitHub services operational',
    statusUrl: 'https://www.githubstatus.com/',
  },
  Slack: {
    vendor: 'Slack',
    status: 'OPERATIONAL',
    summary: 'All Slack services operational',
    statusUrl: 'https://status.slack.com/',
  },
  Qualys: {
    vendor: 'Qualys',
    status: 'OPERATIONAL',
    summary: 'Qualys Cloud Platform operational',
    statusUrl: 'https://status.qualys.com/',
  },
  Rapid7: {
    vendor: 'Rapid7',
    status: 'OPERATIONAL',
    summary: 'Insight Platform services operational',
    statusUrl: 'https://status.rapid7.com/',
  },
  CyberArk: {
    vendor: 'CyberArk',
    status: 'OPERATIONAL',
    summary: 'Identity Security & Privilege Cloud operational',
    statusUrl: 'https://status.cyberark.com/',
  },
  HashiCorp: {
    vendor: 'HashiCorp',
    status: 'OPERATIONAL',
    summary: 'HCP Vault & Terraform Cloud operational',
    statusUrl: 'https://status.hashicorp.com/',
  },
  '1Password': {
    vendor: '1Password',
    status: 'OPERATIONAL',
    summary: '1Password service operational',
    statusUrl: 'https://status.1password.com/',
  },
  'Trend Micro': {
    vendor: 'Trend Micro',
    status: 'OPERATIONAL',
    summary: 'Trend Vision One operational',
    statusUrl: 'https://status.trendmicro.com/',
  },
};

export function getVendorHealth(vendor: string, customRegistry = VENDOR_STATUS_REGISTRY): VendorHealth {
  // Normalize match
  const key = Object.keys(customRegistry).find(
    (k) => k.toLowerCase() === vendor.toLowerCase()
  );
  if (key && customRegistry[key]) {
    return customRegistry[key];
  }
  return {
    vendor,
    status: 'OPERATIONAL',
    summary: 'Operating normally',
    statusUrl: `https://www.google.com/search?q=${encodeURIComponent(vendor + ' status page')}`,
  };
}
