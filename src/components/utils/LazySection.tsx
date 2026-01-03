import React, { useState, useEffect, useRef, Suspense } from 'react';
import { SectionSkeleton, SkeletonVariant } from '../ui/SectionSkeleton';
import { ErrorBoundary } from './ErrorBoundary';

interface LazySectionProps {
  children: React.ReactNode;
  height?: string | number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  variant?: SkeletonVariant;
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  height = 800,
  threshold = 0,
  rootMargin = '600px',
  className = '',
  variant = 'default',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, threshold, rootMargin]);

  const LoadingFallback = <SectionSkeleton height={height} variant={variant} />;

  return (
    <div 
      ref={ref} 
      className={`w-full transition-opacity duration-500 ${className}`} 
      style={{ minHeight: typeof height === 'number' ? `${height}px` : height }}
    >
      {!isVisible ? (
        LoadingFallback
      ) : (
        <ErrorBoundary fallback={LoadingFallback}>
          <Suspense fallback={LoadingFallback}>
            {children}
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};
