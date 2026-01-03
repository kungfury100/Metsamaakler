import { useEffect } from 'react';

export interface SeoContent {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  keywords?: string[];
  schema?: Record<string, any>;
}

export const useSeo = (content: SeoContent) => {
  useEffect(() => {
    // 1. Update Title
    document.title = content.title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', content.description);

    // 3. Update Canonical URL
    if (content.canonical) {
      let linkCanonical = document.querySelector("link[rel='canonical']");
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', content.canonical);
    }

    // 4. Update Open Graph
    const updateMeta = (property: string, value: string) => {
      let meta = document.querySelector(`meta[property='${property}']`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      
      // Ensure absolute URL for og:image
      if (property === 'og:image' && value && value.startsWith('/')) {
        value = `https://metsamaakler.ee${value}`;
      }
      
      meta.setAttribute('content', value);
    };

    updateMeta('og:title', content.title);
    updateMeta('og:description', content.description);
    if (content.ogImage) updateMeta('og:image', content.ogImage);
    if (content.ogImageAlt) updateMeta('og:image:alt', content.ogImageAlt);

    // 5. Inject JSON-LD Schema
    if (content.schema) {
      let script = document.querySelector("#seo-schema-json");
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('id', 'seo-schema-json');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(content.schema);
    }

    // Cleanup function could reset title/meta if needed, but usually not necessary for SPA transitions 
    // where the next page overrides it anyway.
  }, [content]);
};