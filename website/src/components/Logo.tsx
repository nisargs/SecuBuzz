import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5" aria-label="SecuBuzz home">
      <img
        src="/icon.png?v=2"
        alt="SecuBuzz"
        className="h-7 w-7 object-contain"
        width={28}
        height={28}
      />
      <span className="text-[17px] font-semibold tracking-tight text-ink">
        Secu<span className="text-accent">Buzz</span>
      </span>
    </Link>
  );
}