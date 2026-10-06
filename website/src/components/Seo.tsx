import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
}

export function Seo({
  title,
  description,
  canonicalPath = '',
  type = 'website',
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    // 1. Title
    const fullTitle = title.includes('SecuBuzz') ? title : `${title} · SecuBuzz`;
    document.title = fullTitle;

    // 2. Canonical URL
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = cleanPath === '/' ? 'https://secubuzz.com/' : `https://secubuzz.com${cleanPath.replace(/\/$/, '')}`;

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 3. Meta Description
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', description);

    // 4. OpenGraph tags
    const setMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const setNameMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('og:title', fullTitle);
    setMeta('og:description', description);
    setMeta('og:url', canonicalUrl);
    setMeta('og:type', type);

    setNameMeta('twitter:title', fullTitle);
    setNameMeta('twitter:description', description);

    // 5. Schema.org JSON-LD Structured Data
    if (jsonLd) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, canonicalPath, type, jsonLd]);

  return null;
}
