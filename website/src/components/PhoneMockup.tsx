import React from 'react';

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[290px] md:w-[320px]" aria-hidden="true">
      {/* Dark Titanium Hardware Chassis - Solid, constant dark bezel in both dark & light themes */}
      <div className="relative rounded-[48px] border-[3.5px] border-[#1E2638] bg-[#0A0D14] p-2.5 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35),0_10px_25px_-10px_rgba(15,23,42,0.2)] ring-1 ring-white/10 dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_50px_-10px_rgba(76,201,240,0.06)]">
        {/* Screen container */}
        <div className="relative overflow-hidden rounded-[38px] bg-[#0B0F14] ring-1 ring-black/80">
          <img
            src="/1.jpg"
            alt="SecuBuzz Mobile App Interface"
            className="block h-auto w-full select-none"
            loading="eager"
            width={320}
            height={711}
          />
        </div>
      </div>
    </div>
  );
}