import React, { useState, useEffect } from 'react';

interface ScreenItem {
  id: string;
  tabName: string;
  label: string;
  tag: string;
  image: string;
  alt: string;
}

const SCREENS: ScreenItem[] = [
  {
    id: 'briefs',
    tabName: 'Briefs',
    label: '60-Word Briefs',
    tag: 'Live Intel',
    image: '/1.jpg',
    alt: 'SecuBuzz 60-Word Security Briefs Feed'
  },
  {
    id: 'advisories',
    tabName: 'Advisories',
    label: '1,814 Advisories',
    tag: 'CISA KEV',
    image: '/2.jpg',
    alt: 'SecuBuzz 1,814 Active Threat Advisories Radar'
  },
  {
    id: 'saved',
    tabName: 'Bookmarks',
    label: 'Saved Stories',
    tag: 'Offline Triage',
    image: '/3.jpg',
    alt: 'SecuBuzz Bookmarked Stories and Threat Advisories'
  }
];

const CYCLE_DURATION_MS = 6500;
const TICK_INTERVAL_MS = 100;

export function PhoneMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Preload all showcase screenshots on mount
  useEffect(() => {
    SCREENS.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  // Auto-cycle through screens with smooth progress bar
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((curr) => (curr + 1) % SCREENS.length);
          return 0;
        }
        return prev + (100 / (CYCLE_DURATION_MS / TICK_INTERVAL_MS));
      });
    }, TICK_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTabClick = (idx: number) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleTabClick((activeIndex + 1) % SCREENS.length);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleTabClick((activeIndex - 1 + SCREENS.length) % SCREENS.length);
    }
  };

  return (
    <div
      className="relative mx-auto w-[290px] md:w-[320px]"
      role="region"
      aria-label="SecuBuzz Mobile App Interactive Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Dark Titanium Hardware Chassis - Solid, constant dark bezel in both dark & light themes */}
      <div className="relative rounded-[48px] border-[3.5px] border-[#1E2638] bg-[#0A0D14] p-2.5 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35),0_10px_25px_-10px_rgba(15,23,42,0.2)] ring-1 ring-white/10 dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_50px_-10px_rgba(76,201,240,0.06)]">
        {/* Screen container - Aspect ratio locked to 1080x2400 phone display */}
        <div className="relative aspect-[1080/2400] overflow-hidden rounded-[38px] bg-[#0B0F14] ring-1 ring-black/80">
          {SCREENS.map((screen, idx) => (
            <img
              key={screen.id}
              src={screen.image}
              alt={screen.alt}
              className={`absolute inset-0 block h-full w-full select-none object-cover transition-opacity duration-500 ease-in-out ${
                idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              loading="eager"
              width={320}
              height={711}
            />
          ))}
        </div>
      </div>

      {/* Interactive 3-Screen Showcase Controller */}
      <div className="mt-3.5 flex flex-col items-center gap-2">
        <div
          role="tablist"
          aria-label="App preview screens"
          className="flex w-full items-center justify-between gap-1 rounded-xl border border-line/80 bg-surface/90 p-1 shadow-sm backdrop-blur-md"
        >
          {SCREENS.map((screen, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={screen.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTabClick(idx)}
                className={`group relative flex-1 rounded-lg px-2 py-1.5 text-center transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? 'bg-surface-elevated text-ink font-medium shadow-sm'
                    : 'text-muted hover:bg-surface-elevated/40 hover:text-ink'
                }`}
              >
                <div className="flex items-center justify-center gap-1.5 text-xs">
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                      isActive ? 'bg-accent' : 'bg-muted/40 group-hover:bg-muted'
                    }`}
                  />
                  <span className="truncate">{screen.tabName}</span>
                </div>

                {/* Active progress indicator line */}
                {isActive && (
                  <div className="absolute inset-x-2 -bottom-0.5 h-[2px] overflow-hidden rounded-full bg-accent/20">
                    <div
                      className="h-full bg-accent transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Micro-caption helper */}
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-subtle">
          <span className="inline-block h-1 w-1 rounded-full bg-accent animate-pulse" />
          <span>Interactive showcase · Click tabs to explore</span>
        </div>
      </div>
    </div>
  );
}