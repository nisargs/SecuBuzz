import React from 'react';

interface PageIntroProps {
  title: string;
  description?: string;
  meta?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageIntro({ title, description, meta, children }: PageIntroProps) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-site px-5 pb-10 pt-14 md:px-8 md:pb-12 md:pt-20">
        {meta && <div className="mb-4 font-mono text-xs text-subtle">{meta}</div>}
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink md:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>}
        {children}
      </div>
    </section>);

}