import React, { useState } from 'react';
import { Mail, Copy, Check, Lock, ShieldCheck } from 'lucide-react';

const SUBMISSION_TEMPLATE = `To: publishers@secubuzz.com
Subject: [Feed Submission] Publication Name

Publication Name: <Your Publication or Research Blog>
RSS / Atom Feed URL: <https://example.com/feed.xml>
Editorial Contact: <editor@example.com>
Primary Coverage: [Vulnerabilities / Threat Intel / Breaches / Policy]
Corrections Policy URL: <https://example.com/corrections>

Additional Notes:
- `;

const DEFAULT_SUBJECT = '[Feed Submission] New Cybersecurity Source';
const DEFAULT_BODY = `Publication Name: 
RSS / Atom Feed URL: 
Editorial Contact: 
Primary Coverage: [Vulnerabilities / Threat Intel / Breaches / Policy]
Corrections Policy URL: 

Additional Notes:
`;

const MAILTO_HREF = `mailto:publishers@secubuzz.com?subject=${encodeURIComponent(
  DEFAULT_SUBJECT
)}&body=${encodeURIComponent(DEFAULT_BODY)}`;

export function PublisherForm() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('publishers@secubuzz.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(SUBMISSION_TEMPLATE);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <div className="space-y-6 rounded-xl border border-line bg-surface p-6 md:p-8">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-bg text-accent">
            <Mail className="h-5 w-5" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-0.5 font-mono text-[11px] text-muted">
            <Lock className="h-3 w-3 text-accent" /> Zero Form-Storage
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">
          Submit your feed
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          SecuBuzz reviews all prospective newsrooms and threat feeds via authenticated editorial email protocols.
        </p>
      </div>

      {/* Destination Inbox Card */}
      <div className="rounded-lg border border-line bg-bg/70 p-3.5">
        <div className="flex items-center justify-between font-mono text-[11px] text-subtle">
          <span>Destination Inbox</span>
          <span className="text-accent">48h SLA</span>
        </div>
        <p className="mt-1 select-all break-all font-mono text-sm font-semibold text-ink">
          publishers@secubuzz.com
        </p>
      </div>

      {/* Direct Action Buttons */}
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={MAILTO_HREF}
          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-accent px-3 text-xs font-semibold text-accent-ink transition-colors duration-150 ease-out hover:bg-accent/90"
        >
          <Mail className="h-3.5 w-3.5" /> Send Email
        </a>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-line bg-bg px-3 text-xs font-medium text-ink transition-colors duration-150 ease-out hover:bg-raised"
        >
          {copiedEmail ? (
            <>
              <Check className="h-3.5 w-3.5 text-accent" /> Copied!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-muted" /> Copy Address
            </>
          )}
        </button>
      </div>

      {/* Structured Template Section */}
      <div className="border-t border-line pt-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-ink">
            Submission Template
          </span>
          <button
            type="button"
            onClick={handleCopyTemplate}
            className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-accent hover:underline"
          >
            {copiedTemplate ? (
              <>
                <Check className="h-3 w-3" /> Template Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" /> Copy Template
              </>
            )}
          </button>
        </div>

        <div className="mt-2.5 overflow-hidden rounded-lg border border-line bg-bg/90 p-3">
          <pre className="font-mono text-[11px] leading-relaxed text-muted whitespace-pre-wrap select-all">
            {SUBMISSION_TEMPLATE}
          </pre>
        </div>
      </div>

      {/* Security Note */}
      <div className="flex items-start gap-2.5 rounded-lg border border-line/60 bg-bg/40 p-3 text-xs text-subtle">
        <ShieldCheck className="h-4 w-4 shrink-0 text-accent mt-0.5" />
        <p className="leading-relaxed">
          Zero-attack-surface architecture: Inbound feeds are evaluated by human editors. No unauthenticated forms or database writes exist to exploit.
        </p>
      </div>
    </div>
  );
}