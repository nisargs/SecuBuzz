import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

interface SupportBannerProps {
  className?: string;
  compact?: boolean;
}

export function SupportBanner({ className = '', compact = false }: SupportBannerProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-sm transition-all duration-200 hover:border-accent/40 hover:bg-surface md:p-8 ${className}`}
    >
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-start sm:items-center gap-4 sm:gap-5">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Heart className="h-6 w-6 sm:h-7 sm:w-7 fill-accent/20 text-accent" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">
                Independent · Community Supported
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold tracking-tight text-ink">
              Support independent security research.
            </h3>
            <p className="text-sm text-muted max-w-xl leading-relaxed">
              If SecuBuzz saved you time this week, you can support the project here.
            </p>
          </div>
        </div>

        <a
          href="/support"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-[#0A0D14] shadow-sm transition-all duration-150 ease-out hover:bg-accent/90 hover:scale-[1.02] hover:shadow-md"
        >
          <span>Support SecuBuzz</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
