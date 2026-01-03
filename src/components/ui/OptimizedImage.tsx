import React, { useState, forwardRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// OPTIMIZED IMAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════════════════════
// Advanced wrapper for performance-critical imagery.
// Features:
// - Layout Shift Protection (Aspect Ratio Reservation)
// - Native Lazy Loading & Decoding control
// - Fetch Priority support
// - Error Handling integration
// - WebP/AVIF source support (via picture tag)
// ═══════════════════════════════════════════════════════════════════════════════════════════════

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  // Source variants for modern formats
  avifSrc?: string;
  webpSrc?: string;
  
  // Performance hints
  priority?: boolean; // If true, sets loading="eager" and fetchpriority="high"
  
  // Layout
  aspectRatio?: number; // width / height
  fit?: 'cover' | 'contain' | 'fill';
}

export const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(({
  src,
  alt,
  className = '',
  avifSrc,
  webpSrc,
  priority = false,
  aspectRatio,
  fit = 'cover',
  style,
  width,
  height,
  ...rest
}, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Calculate dynamic style for aspect ratio wrapper if needed
  // Note: We prefer using modern CSS 'aspect-ratio' over padding-bottom hack
  const imageStyle: React.CSSProperties = {
    objectFit: fit,
    width: '100%',
    height: '100%',
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    ...style,
  };

  const wrapperStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : (aspectRatio ? 'auto' : '100%'),
    aspectRatio: aspectRatio ? `${aspectRatio}` : undefined,
  };

  const loadingStrategy = priority ? 'eager' : 'lazy';
  const decodingStrategy = priority ? 'sync' : 'async';
  const fetchPriority = priority ? 'high' : 'auto';

  // If we have multiple sources, use picture tag
  if (avifSrc || webpSrc) {
    return (
      <div className={`optimized-image-wrapper ${className}`} style={wrapperStyle}>
        <picture>
          {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img
            ref={ref}
            src={src}
            alt={alt}
            loading={loadingStrategy}
            decoding={decodingStrategy}
            // @ts-ignore - React types might not include fetchPriority yet
            fetchpriority={fetchPriority}
            style={imageStyle}
            width={width}
            height={height}
            onLoad={() => setIsLoaded(true)}
            {...rest}
          />
        </picture>
      </div>
    );
  }

  // Fallback to simpler implementation using existing error handler
  // We wrap ImageWithFallback to inject our performance props
  return (
    <div className={`optimized-image-wrapper ${className}`} style={wrapperStyle}>
       {/* Placeholder / Skeleton could go here */}
       {!isLoaded && (
         <div 
            className="absolute inset-0 bg-[rgba(52,125,78,0.05)] animate-pulse" 
            style={{ zIndex: 0 }}
         />
       )}
       
       <ImageWithFallback
         // @ts-ignore
         ref={ref}
         src={src}
         alt={alt}
         loading={loadingStrategy}
         decoding={decodingStrategy}
         // @ts-ignore
         fetchpriority={fetchPriority}
         style={imageStyle}
         width={width}
         height={height}
         onLoad={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
           setIsLoaded(true);
           if (rest.onLoad) rest.onLoad(e);
         }}
         {...rest}
       />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';
