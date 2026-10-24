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
