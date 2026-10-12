import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  ShieldCheck,
  FileText,
  MessageSquare,
  Bug,
  Sparkles,
  UserX,
  ExternalLink,
  Lock,
  ArrowUpRight,
} from 'lucide-react';
import { PageIntro } from '../components/PageIntro';
import { Seo } from '../components/Seo';

interface Channel {
  id: string;
  title: string;
  email: string;
  description: string;
  sla: string;
  icon: React.ComponentType<{ className?: string }>;
  defaultSubject: string;
  defaultBody: string;
}

const CHANNELS: Channel[] = [
  {
    id: 'support',
    title: 'General Support & App Feedback',
    email: 'support@secubuzz.com',
    description: 'Technical questions, mobile app feedback, Android push alerts, or feature suggestions.',
    sla: 'Typical reply within 1 business day',
    icon: MessageSquare,
    defaultSubject: '[SecuBuzz Support] Inquiry',
    defaultBody: 'Hello SecuBuzz team,\n\nI have a question or feedback regarding the app:\n\n',
  },
  {
    id: 'security',
    title: 'Coordinated Vulnerability Disclosure',
    email: 'security@secubuzz.com',
    description: 'Security architecture audits, potential vulnerabilities, and responsible bug bounty disclosures.',
    sla: '48-hour SLA under RFC 9116 Coordinated Disclosure',
    icon: ShieldCheck,
    defaultSubject: '[SecuBuzz Security Disclosure] Vulnerability Report',
    defaultBody: 'SecuBuzz Security Team,\n\nI am reporting a potential vulnerability under your Coordinated Vulnerability Disclosure policy.\n\nComponent Affected:\nSeverity Assessment:\nSteps to Reproduce:\nProof of Concept:\n\n',
  },
  {
    id: 'publishers',
    title: 'Publishers & Removal Requests',
    email: 'publishers@secubuzz.com',
    description: 'RSS feed inclusion proposals, byline attribution corrections, or immediate content opt-out.',
    sla: 'Removal requests honored within 48 hours without friction',
    icon: FileText,
    defaultSubject: '[SecuBuzz Publisher Request] Content & Attribution',
    defaultBody: 'SecuBuzz Editorial Desk,\n\nPublication Name:\nArticle or Feed URL:\nRequest Details (Attribution / Correction / Opt-Out):\n\n',
  },
];

interface Template {
  id: string;
  name: string;
  targetEmail: string;
  subject: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TEMPLATES: Template[] = [
  {
    id: 'bug',
    name: 'Bug Report',
    targetEmail: 'support@secubuzz.com',
    subject: '[SecuBuzz Bug Report] Android App Issue',
    icon: Bug,
    body: `Device Model:
Android OS Version:
SecuBuzz App Version (e.g. 1.0.2):

Description of Issue:
[Please explain what went wrong]

Steps to Reproduce:
1. 
2. 
3. 

Expected Behavior:
[What should have happened]`,
  },
  {
    id: 'feature',
    name: 'Feature Idea',
    targetEmail: 'support@secubuzz.com',
    subject: '[SecuBuzz Feature Suggestion] User Idea',
    icon: Sparkles,
    body: `Feature Proposal:
[Brief headline of what you'd like to see]

Problem It Solves:
[How would this help your daily cybersecurity triage?]

Suggested Implementation:
[Any specific workflow details?]`,
  },
  {
    id: 'publisher',
    name: 'Feed Suggestion / Removal',
    targetEmail: 'publishers@secubuzz.com',
    subject: '[SecuBuzz Publisher Desk] Feed Request',
    icon: FileText,
    body: `Publication / Blog Name:
Website URL:
RSS / Atom Feed URL:
Type of Request (Inclusion / Correction / Opt-Out):

Contact Name & Role:`,
  },
  {
    id: 'privacy',
    name: 'Data Deletion',
    targetEmail: 'support@secubuzz.com',
    subject: '[SecuBuzz Privacy] Data Deletion Request',
    icon: UserX,
    body: `Hello MiSo Labs / SecuBuzz Privacy Team,

I request the complete verification and purge of any push notification token or associated server telemetry for my device.

Device Platform: Android
Date of Request: ${new Date().toISOString().slice(0, 10)}`,
  },
];

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState<Template>(TEMPLATES[0]);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleCopyTemplate = () => {
    const fullText = `To: ${activeTemplate.targetEmail}\nSubject: ${activeTemplate.subject}\n\n${activeTemplate.body}`;
    navigator.clipboard.writeText(fullText);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  const createMailto = (email: string, subject: string, body: string) => {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Seo
        title="Contact SecuBuzz · MiSo Labs"
        description="Direct communication channels for SecuBuzz by MiSo Labs. Support, bug reports, publisher partnerships, and coordinated security disclosures."
        canonicalPath="/contact"
      />

      <PageIntro
        title="Direct Contact Channels"
        description="Questions, bug reports, publisher inquiries, or coordinated security disclosures. Every channel routes directly to an engineer with zero intermediary database storage."
      />

      <main className="mx-auto max-w-site px-5 py-14 md:px-8 space-y-16">
        {/* 3 CORE DEPARTMENT ACTION CARDS */}
        <section aria-labelledby="channels-heading">
          <div className="flex items-center justify-between pb-6 border-b border-line">
            <div>
              <h2 id="channels-heading" className="text-xl font-semibold tracking-tight text-ink">
                Verified Inboxes
              </h2>
              <p className="mt-1 text-sm text-muted">
                Select a channel below to draft an email or copy the verified destination address.
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-line bg-surface text-muted">
              <Lock className="w-3 h-3 text-accent" /> Zero Form-Storage Policy
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {CHANNELS.map((ch) => {
              const Icon = ch.icon;
              const isCopied = copiedEmail === ch.email;
              const mailtoHref = createMailto(ch.email, ch.defaultSubject, ch.defaultBody);

              return (
                <div
                  key={ch.id}
                  className="flex flex-col justify-between rounded-xl border border-line bg-surface p-6 transition-all duration-150 hover:border-line/80 hover:shadow-lg hover:shadow-black/20"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-bg text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-mono font-medium text-subtle uppercase tracking-wider">
                        Active
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-ink">{ch.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{ch.description}</p>

                    <div className="mt-4 rounded-md border border-line bg-bg/60 p-2.5">
                      <p className="text-[11px] font-mono text-subtle">Destination</p>
                      <p className="font-mono text-sm font-medium text-ink select-all break-all mt-0.5">
                        {ch.email}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-line space-y-3">
                    <p className="text-xs text-subtle leading-normal">{ch.sla}</p>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={mailtoHref}
                        className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-accent px-3 text-xs font-semibold text-accent-ink transition-colors hover:bg-accent/90"
                      >
                        <Mail className="h-3.5 w-3.5" /> Send Email
                      </a>

                      <button
                        type="button"
                        onClick={() => handleCopyEmail(ch.email)}
                        className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-line bg-bg px-3 text-xs font-medium text-ink transition-colors hover:bg-raised"
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-accent" />
                            <span className="text-accent font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5 text-muted" /> Copy Address
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* READY-MADE EMAIL TEMPLATE GENERATOR */}
        <section
          aria-labelledby="template-heading"
          className="rounded-2xl border border-line bg-surface p-6 md:p-8 space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 id="template-heading" className="text-lg font-semibold text-ink">
                Quick Template Generator
              </h2>
              <p className="text-sm text-muted mt-1">
                Choose a structured topic below to pre-populate your email draft with standard diagnostic fields.
              </p>
            </div>
          </div>

          {/* Template Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            {TEMPLATES.map((tpl) => {
              const TplIcon = tpl.icon;
              const isSelected = activeTemplate.id === tpl.id;

              return (
                <button
                  key={tpl.id}
                  type="button"
                  onClick={() => setActiveTemplate(tpl)}
                  className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-accent text-accent-ink font-semibold shadow-sm'
                      : 'border border-line bg-bg text-muted hover:text-ink hover:bg-raised'
                  }`}
                >
                  <TplIcon className="h-3.5 w-3.5" />
                  {tpl.name}
                </button>
              );
            })}
          </div>

          {/* Template Content Box */}
          <div className="rounded-xl border border-line bg-bg p-5 font-mono text-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-line text-subtle">
              <span>
                To: <span className="text-ink font-medium">{activeTemplate.targetEmail}</span>
              </span>
              <span>
                Subject: <span className="text-accent">{activeTemplate.subject}</span>
              </span>
            </div>

            <pre className="text-ink/90 whitespace-pre-wrap font-mono leading-relaxed max-h-56 overflow-y-auto">
              {activeTemplate.body}
            </pre>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <p className="text-xs text-muted">
              Using webmail (Gmail, Proton, Outlook)? Copy the template and paste it into your compose window.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyTemplate}
                className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-line bg-raised px-4 text-xs font-medium text-ink transition-colors hover:bg-raised/80"
              >
                {copiedTemplate ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-accent" />
                    <span className="text-accent font-semibold">Template Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-muted" /> Copy Template
                  </>
                )}
              </button>

              <a
                href={createMailto(activeTemplate.targetEmail, activeTemplate.subject, activeTemplate.body)}
                className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-accent px-4 text-xs font-semibold text-accent-ink transition-colors hover:bg-accent/90"
              >
                <ArrowUpRight className="h-3.5 w-3.5" /> Open in Mail App
              </a>
            </div>
          </div>
        </section>

        {/* SECURITY & PRIVACY ARCHITECTURAL ASSURANCE */}
        <section className="rounded-xl border border-line/70 bg-surface/50 p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-2.5 text-ink">
            <ShieldCheck className="h-5 w-5 text-accent" />
            <h3 className="font-semibold text-sm">Security &amp; Attack Surface Elimination</h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 text-xs leading-relaxed text-muted pt-2 border-t border-line/60">
            <div>
              <p className="font-medium text-ink mb-1">Zero SQL Injection Risk</p>
              <p>
                By avoiding web-based form textboxes, SecuBuzz eliminates all database insertion attack surfaces (SQLi, Stored XSS, and parameter pollution).
              </p>
            </div>
            <div>
              <p className="font-medium text-ink mb-1">Direct Verified Delivery</p>
              <p>
                Inquiries travel through end-to-end encrypted SMTP/TLS directly to our engineers' phones. No messages sit unread in an intermediary database.
              </p>
            </div>
            <div>
              <p className="font-medium text-ink mb-1">RFC 9116 Compliant</p>
              <p>
                Our authoritative vulnerability disclosure policy is declared at{' '}
                <a
                  href="/.well-known/security.txt"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-accent hover:underline inline-flex items-center gap-0.5"
                >
                  security.txt <ExternalLink className="w-2.5 h-2.5 inline" />
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}