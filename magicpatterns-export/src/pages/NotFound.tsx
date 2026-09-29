import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="mx-auto max-w-site px-5 py-28 md:px-8">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">We couldn’t find that page</h1>
      <p className="mt-3 max-w-md text-muted">The brief or advisory may have moved, or the link may be mistyped.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/news" className="rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-ink hover:bg-accent/90">
          Browse news
        </Link>
        <Link to="/advisories" className="rounded-md border border-line px-4 py-2.5 text-sm text-ink hover:bg-surface">
          View advisories
        </Link>
      </div>
    </section>);

}