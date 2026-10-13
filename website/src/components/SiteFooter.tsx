import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { footerNav } from '../data/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)] md:px-8">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Cybersecurity news in 60 words and CISA zero-day alerts, for people who have to act on them.
          </p>
        </div>
        {footerNav.map((group) =>
        <nav key={group.heading} aria-label={group.heading}>
            <h2 className="text-sm font-semibold text-ink">{group.heading}</h2>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.to}>
                  {link.to.endsWith('.xml') ? (
                    <a
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors duration-150 ease-out hover:text-accent">
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-sm text-muted transition-colors duration-150 ease-out hover:text-accent">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-5 py-6 text-xs text-subtle md:flex-row md:items-center md:justify-between md:px-8">
          <div className="space-y-1">
            <p>© 2026 MiSo Labs. All rights reserved.</p>
            <p>All product names and trademarks are property of their respective owners, used for identification only.</p>
          </div>
          <p className="shrink-0">Not affiliated with CISA. KEV data sourced from CISA’s public catalog.</p>
        </div>
      </div>
    </footer>);

}