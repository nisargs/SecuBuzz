import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PlayStoreButton } from './PlayStoreButton';

interface WhatsNewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ReleaseItem {
  version: string;
  date: string;
  badge?: string;
  tagline: string;
  highlights: { title: string; desc: string }[];
}

const RELEASES: ReleaseItem[] = [
  {
    version: 'v1.0.3',
    date: 'October 2026',
    badge: 'LATEST',
    tagline: 'Enterprise Vendor PSIRT Radar, EPSS Telemetry & AMOLED Theme',
    highlights: [
      {
        title: 'Direct Vendor PSIRT Ingestion',
        desc: 'Ingests official security errata and bulletins directly from Red Hat RHSA, Microsoft MSRC, Cisco PSIRT, Palo Alto Networks, Fortinet, and AWS.',
      },
      {
        title: 'FIRST.org EPSS Scoring',
        desc: 'Integrated live 30-day exploit probability and global threat percentiles on CVE advisory cards with zero synthetic data.',
      },
      {
        title: 'AMOLED True-Black Theme',
        desc: 'Added pure true-black OLED mode (#000000) for mobile battery saving alongside Dark and Slate.',
      },
      {
        title: '1,810 Tracked Advisories',
        desc: 'Unified catalog tracking 1,760 CISA KEV active zero-days and 50 GitHub ecosystem security advisories.',
      },
      {
        title: 'Dynamic Text Scaling',
        desc: 'Added density selector (Compact, Standard, Comfortable) with persistent typography scaling.',
      },
    ],
  },
  {
    version: 'v1.0.2',
    date: 'October 2026',
    tagline: 'Google Play Global Launch & Haptic Feedback',
    highlights: [
      {
        title: 'Worldwide Google Play Availability',
        desc: 'SecuBuzz passed Google Play production review and is officially live across all 177+ countries.',
      },
      {
        title: 'Tactile Haptic Feedback',
        desc: 'Subtle vibration cues when bookmarking stories and pulling to refresh the threat feed.',
      },
      {
        title: 'Header Brand Unification',
        desc: 'Streamlined terminal-inspired header styling across news, advisories, and settings screens.',
      },
    ],
  },
  {
    version: 'v1.0.1',
    date: 'September 2026',
    tagline: 'CISA KEV Zero-Day Alerts & Federal Deadlines',
    highlights: [
      {
        title: 'CISA KEV Push Notifications',
        desc: 'Automated background alerts delivered within hours of CISA listing confirmed actively-exploited zero-days.',
      },
      {
        title: 'BOD Federal Deadlines',
        desc: 'Actionable remediation due dates and countdowns under Binding Operational Directives.',
      },
      {
        title: '100% On-Device Bookmarks',
        desc: 'Private offline saving with zero tracking, zero accounts, and zero cloud telemetry.',
      },
    ],
  },
];

export function WhatsNewModal({ isOpen, onClose }: WhatsNewModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="whats-new-title"
    >
      <div
        className="relative flex flex-col max-h-[85vh] w-full max-w-xl rounded-2xl border border-line bg-surface shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h2 id="whats-new-title" className="text-base font-semibold text-ink">
                What’s New in Secu<span className="text-accent">Buzz</span>
              </h2>
              <p className="text-xs text-subtle">Product release notes & continuous engineering updates</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted hover:bg-raised hover:text-ink transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable Releases Timeline) */}
        <div className="overflow-y-auto px-6 py-5 space-y-8">
          {RELEASES.map((rel, idx) => (
            <div key={rel.version} className="relative pl-6 border-l border-line/60 last:border-transparent">
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-surface">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>

              {/* Release Header */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-sm font-semibold text-ink">{rel.version}</span>
                {rel.badge && (
                  <span className="rounded border border-accent/40 bg-accent/10 px-1.5 py-0.5 text-[9px] font-mono font-semibold uppercase text-accent">
                    {rel.badge}
                  </span>
                )}
                <span className="font-mono text-xs text-subtle">· {rel.date}</span>
              </div>

              <p className="mt-1 text-xs font-medium text-muted">{rel.tagline}</p>

              {/* Highlights List */}
              <ul className="mt-3 space-y-2.5">
                {rel.highlights.map((h) => (
                  <li key={h.title} className="text-xs leading-relaxed text-muted">
                    <span className="font-medium text-ink">{h.title}:</span>{' '}
                    <span>{h.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-line bg-raised/40 px-6 py-3.5 rounded-b-2xl">
          <span className="text-xs text-subtle">Live on Google Play Store</span>
          <div className="flex items-center gap-3">
            <PlayStoreButton size="md" source="whats_new_modal" />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
