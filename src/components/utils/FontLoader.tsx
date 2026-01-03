import { useEffect } from 'react';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// FONT LOADER COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════════════════════
// Optimizes font loading by injecting link tags dynamically.
// Eliminates render-blocking CSS @imports.
// Ensures 'display=swap' is used for immediate text visibility.
// ═══════════════════════════════════════════════════════════════════════════════════════════════

export const FontLoader = () => {
  useEffect(() => {
    // We use a small utility to prevent duplicate injections
    const loadFont = (href: string) => {
      if (document.querySelector(`link[href="${href}"]`)) return;

      const link = document.createElement('link');
      link.href = href;
      link.rel = 'stylesheet';
      // Low priority for non-critical fonts, but here we want them relatively fast
      // so we just append them. The browser handles parallelism.
      document.head.appendChild(link);
    };

    // Preconnect to Google Fonts domain
    if (!document.querySelector('link[rel="preconnect"][href="https://fonts.googleapis.com"]')) {
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://fonts.googleapis.com';
      document.head.appendChild(preconnect);
      
      const preconnectCdn = document.createElement('link');
      preconnectCdn.rel = 'preconnect';
      preconnectCdn.href = 'https://fonts.gstatic.com';
      preconnectCdn.crossOrigin = 'anonymous';
      document.head.appendChild(preconnectCdn);
    }

    // Load fonts non-blocking
    // Using requestAnimationFrame to ensure we don't block the very first paint frame if possible
    requestAnimationFrame(() => {
       loadFont('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
       loadFont('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
    });

  }, []);

  return null;
};
