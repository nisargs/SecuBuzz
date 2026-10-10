import React from 'react';
import { PlayIcon } from 'lucide-react';

interface PlayStoreButtonProps {
  size?: 'md' | 'lg';
  source?: string;
}

export function PlayStoreButton({ size = 'md', source = 'button' }: PlayStoreButtonProps) {
  const sizing = size === 'lg' ? 'h-14 px-6 text-base' : 'h-11 px-5 text-sm';
  const href = `/go/play?src=${encodeURIComponent(source)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 whitespace-nowrap rounded-md bg-accent font-semibold text-accent-ink transition-[background-color,transform] duration-150 ease-out hover:bg-accent/90 active:scale-[0.98] ${sizing}`}
    >
      <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-medium uppercase tracking-wide opacity-80">Google Play</span>
        <span>Get it on Google Play</span>
      </span>
    </a>
  );
}