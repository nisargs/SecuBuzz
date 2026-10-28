/**
 * Official Vendor PSIRT & Security Release feeds in SecuBuzz.
 * These represent primary hardware, OS, cloud, and infrastructure vendor bulletins.
 */
export const VENDOR_PSIRT_SOURCES = [
  'Palo Alto Networks PSIRT',
  'Fortinet FortiGuard PSIRT',
  'Cisco PSIRT',
  'Ivanti Security Advisories',
  'Microsoft MSRC',
  'Red Hat Security Advisories',
  'Google Chrome Releases',
  'AWS Security Bulletins',
  'GitLab Security Releases',
  'Ubuntu Security Notices',
  'Apple Security Updates',
  'GitHub Security Blog',
  'ZDI Advisories',
  'CERT-EU Security Advisories',
] as const;

export type VendorPsirtSource = (typeof VENDOR_PSIRT_SOURCES)[number];

/**
 * Checks whether an article's source is an official vendor PSIRT bulletin.
 */
export function isVendorPsirt(source?: string | null): boolean {
  if (!source) return false;
  const s = source.trim().toLowerCase();
  if (VENDOR_PSIRT_SOURCES.some((v) => v.toLowerCase() === s)) {
    return true;
  }
  return (
    s.includes('psirt') ||
    s.includes('msrc') ||
    s.includes('security advisories') ||
    s.includes('security bulletins') ||
    s.includes('security notices') ||
    s.includes('security releases') ||
    s.includes('chrome releases') ||
    s.includes('apple security')
  );
}

/**
 * Normalizes an article's source string into a clean, human-friendly Vendor / Publisher name.
 */
export function getVendorFromSource(source?: string | null): string {
  if (!source) return 'Other';
  const s = source.trim();
  if (/red\s*hat/i.test(s)) return 'Red Hat';
  if (/microsoft/i.test(s)) return 'Microsoft';
  if (/cisco/i.test(s)) return 'Cisco';
  if (/chrome/i.test(s)) return 'Google Chrome';
  if (/aws|amazon/i.test(s)) return 'AWS';
  if (/ubuntu|canonical/i.test(s)) return 'Ubuntu';
  if (/palo\s*alto/i.test(s)) return 'Palo Alto Networks';
  if (/fortinet/i.test(s)) return 'Fortinet';
  if (/ivanti/i.test(s)) return 'Ivanti';
  if (/apple/i.test(s)) return 'Apple';
  if (/gitlab/i.test(s)) return 'GitLab';
  if (/github/i.test(s)) return 'GitHub';
  if (/zero\s*day\s*initiative|zdi/i.test(s)) return 'ZDI';
  if (/cert-eu/i.test(s)) return 'CERT-EU';
  if (/splunk/i.test(s)) return 'Splunk';
  return s;
}
