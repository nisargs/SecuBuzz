import type { Article } from '../models/article';
import type { ArticleRepository } from './ArticleRepository';

/**
 * SAMPLE / DEMO DATA ONLY.
 *
 * These stories are short, original summaries written for the prototype.
 * They are not copied from any publication. sourceUrl points at real
 * public homepages so "Read full article" has somewhere to go in demos.
 *
 * Replace this class with a real backend later. Do not scrape full article text.
 */
const SAMPLE_ARTICLES: Article[] = [
  {
    id: 'demo-1',
    headline: 'Hospital network takes emergency systems offline after ransomware hit',
    summary:
      'A regional hospital group disconnected parts of its network after ransomware locked administrative systems overnight. Emergency rooms stayed open with paper backups while IT teams isolated affected servers. Officials said patient care records were not confirmed stolen, but appointment systems and billing remained down. The hospital has not named a threat group. Investigators are still mapping how the attackers first got in.',
    sourceName: 'CISA',
    sourceUrl: 'https://www.cisa.gov/news-events',
    category: 'RANSOMWARE',
    publishedAt: '2026-09-11T18:30:00.000Z',
    imageUrl: null,
    severity: 'CRITICAL',
  },
  {
    id: 'demo-2',
    headline: 'Payroll vendor discloses customer data exposed in cloud storage misconfiguration',
    summary:
      'A payroll software vendor told customers that a cloud storage bucket holding HR files was left publicly readable for several days. The company said tax forms and bank account numbers for some employees may have been visible. Access was closed after a researcher reported it. The vendor is offering credit monitoring and says it found no proof of mass download, though logs are still under review.',
    sourceName: 'Krebs on Security',
    sourceUrl: 'https://krebsonsecurity.com/',
    category: 'BREACH',
    publishedAt: '2026-09-11T12:10:00.000Z',
    imageUrl: null,
    severity: 'HIGH',
  },
  {
    id: 'demo-3',
    headline: 'Critical remote-code bug patched in widely used enterprise VPN gateway',
    summary:
      'A VPN vendor released an emergency update for a flaw that lets an unauthenticated attacker run code on internet-facing gateways. The issue sits in the web management portal used by many companies for remote staff. Security teams are urged to patch before proof-of-concept tools spread. The vendor has not seen confirmed in-the-wild abuse yet, but similar VPN bugs have been exploited within hours in past years.',
    sourceName: 'NVD',
    sourceUrl: 'https://nvd.nist.gov/',
    category: 'CVE',
    publishedAt: '2026-09-11T08:00:00.000Z',
    imageUrl: null,
    severity: 'CRITICAL',
  },
  {
    id: 'demo-4',
    headline: 'Browser makers push emergency update for actively exploited memory bug',
    summary:
      'Chrome, Edge, and other Chromium browsers shipped a same-day patch after researchers found a memory-safety bug already used in limited attacks. A malicious page can crash the renderer and, in some cases, escape the sandbox. Users should restart the browser so the update applies. Enterprises that pin browser versions need to move quickly. Google has not published full technical details while the patch rolls out.',
    sourceName: 'Google Chrome Releases',
    sourceUrl: 'https://chromereleases.googleblog.com/',
    category: 'VULNERABILITY',
    publishedAt: '2026-09-10T21:45:00.000Z',
    imageUrl: null,
    severity: 'HIGH',
  },
  {
    id: 'demo-5',
    headline: 'Government advisory ties spear-phishing campaign to known nation-state group',
    summary:
      'A joint advisory describes a spear-phishing wave aimed at defense contractors and energy firms. Emails impersonate invoice threads and drop a remote-access tool after the victim opens a document. Analysts link the infrastructure to a previously tracked nation-state cluster. Recommended steps include blocking listed domains, resetting tokens, and hunting for unusual outbound traffic. The advisory stops short of attributing the campaign to a specific country by name in public text.',
    sourceName: 'CISA',
    sourceUrl: 'https://www.cisa.gov/news-events/cybersecurity-advisories',
    category: 'NATION_STATE',
    publishedAt: '2026-09-10T16:20:00.000Z',
    imageUrl: null,
    severity: 'HIGH',
  },
  {
    id: 'demo-6',
    headline: 'Retail chain confirms payment data stolen from e-commerce plugin',
    summary:
      'A national retailer said attackers injected malicious checkout code through a third-party store plugin. Card numbers and names were skimmed for about two weeks before the code was removed. In-store chip payments were not affected. The company is working with card brands on replacement cards. Shoppers who used the website during the window should watch statements. The plugin maker has published a patched version.',
    sourceName: 'The Record',
    sourceUrl: 'https://therecord.media/',
    category: 'BREACH',
    publishedAt: '2026-09-10T09:15:00.000Z',
    imageUrl: null,
    severity: 'HIGH',
  },
  {
    id: 'demo-7',
    headline: 'Schools warned after locker-style ransomware hits student information systems',
    summary:
      'Several school districts reported the same ransomware family encrypting student information systems just before the term started. Attackers demanded payment and threatened to leak grades and contact details. Districts restored from backups with mixed success; some still rely on paper attendance. Education-sector responders say the initial access often came from reused passwords on remote desktop. No district in the sample set has confirmed paying a ransom.',
    sourceName: 'MS-ISAC',
    sourceUrl: 'https://www.cisecurity.org/ms-isac',
    category: 'RANSOMWARE',
    publishedAt: '2026-09-09T19:00:00.000Z',
    imageUrl: null,
    severity: 'HIGH',
  },
  {
    id: 'demo-8',
    headline: 'Open-source library used in mobile apps ships fix for token leak',
    summary:
      'Maintainers of a popular authentication library patched a bug that could write session tokens into debug logs on Android. Apps that left verbose logging on in production were most at risk. Anyone with log access could replay a login. Developers should upgrade and rotate tokens. Security teams treat this as overdue hygiene even without a store-wide emergency update.',
    sourceName: 'GitHub Security Lab',
    sourceUrl: 'https://securitylab.github.com/',
    category: 'CVE',
    publishedAt: '2026-09-09T11:40:00.000Z',
    imageUrl: null,
    severity: 'MEDIUM',
  },
  {
    id: 'demo-9',
    headline: 'Cloud provider explains multi-hour IAM outage that blocked logins',
    summary:
      'A major cloud provider published a postmortem on an identity outage that stopped console logins for several hours. A configuration push cascaded into region-wide errors. Workloads kept running, but teams could not change permissions or rotate keys. The provider added staged rollouts and better canaries. It is a reminder that security controls can fail closed and still create operational risk.',
    sourceName: 'AWS Security Blog',
    sourceUrl: 'https://aws.amazon.com/blogs/security/',
    category: 'GENERAL',
    publishedAt: '2026-09-08T22:05:00.000Z',
    imageUrl: null,
    severity: 'MEDIUM',
  },
  {
    id: 'demo-10',
    headline: 'Researchers publish details of kernel race used to escape containers',
    summary:
      'Academic researchers described a race condition in a Linux kernel subsystem that can break out of some container setups. The bug needs local access, so it is not a worm, but it matters on shared hosts. A patch is in stable kernels; cloud images may lag. Teams running multi-tenant workloads should confirm node images include the fix. Disclosure was coordinated with maintainers.',
    sourceName: 'Linux Kernel Mailing List',
    sourceUrl: 'https://lore.kernel.org/linux-hardening/',
    category: 'VULNERABILITY',
    publishedAt: '2026-09-08T14:55:00.000Z',
    imageUrl: null,
    severity: 'MEDIUM',
  },
  {
    id: 'demo-11',
    headline: 'Telecoms firm reports long-running intrusion aimed at network maps',
    summary:
      'A telecommunications operator said a quiet intrusion lasted weeks before being found during routine log review. Attackers moved slowly and appeared focused on network diagrams rather than customer billing. The company is treating the case as espionage-style activity and has shared indicators with peers. Customer call records were not confirmed stolen. The public statement is limited while law enforcement is involved, which is typical for this kind of incident.',
    sourceName: 'NCSC',
    sourceUrl: 'https://www.ncsc.gov.uk/section/keep-up-to-date/news',
    category: 'NATION_STATE',
    publishedAt: '2026-09-07T17:25:00.000Z',
    imageUrl: null,
    severity: 'CRITICAL',
  },
];

/** Short pause so the Feed can show its loading state during demos. */
const MOCK_DELAY_MS = 450;

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export class MockArticleRepository implements ArticleRepository {
  async getArticles(): Promise<Article[]> {
    await wait(MOCK_DELAY_MS);
    // Return a copy so screens cannot accidentally mutate the demo list.
    return SAMPLE_ARTICLES.map((article) => ({ ...article }));
  }

  lastResultFromCache(): boolean {
    return false;
  }
}
