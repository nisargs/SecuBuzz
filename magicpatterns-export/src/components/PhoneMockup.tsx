import React from 'react';

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[290px] md:w-[320px]" aria-hidden="true">
      <div className="rounded-[44px] border border-line/80 bg-surface p-2 shadow-2xl shadow-accent/5 ring-1 ring-white/5">
        <div className="relative overflow-hidden rounded-[36px] bg-[#0B0F14]">
          <img
            src="/screenshot.jpg"
            alt="SecuBuzz Mobile App Interface"
            className="block h-auto w-full select-none"
            loading="eager"
            width={320}
            height={693}
          />
        </div>
      </div>
    </div>
  );
}