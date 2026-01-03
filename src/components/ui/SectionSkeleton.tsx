import React, { memo } from 'react';

export type SkeletonVariant = 'default' | 'cards' | 'text' | 'split' | 'grid';

interface SectionSkeletonProps {
  height?: string | number;
  className?: string;
  ariaLabel?: string;
  variant?: SkeletonVariant;
}

export const SectionSkeleton: React.FC<SectionSkeletonProps> = memo(({ 
  height = '50vh', 
  className = '',
  ariaLabel = 'Loading section...',
  variant = 'default'
}) => {
  const containerStyle: React.CSSProperties = {
    minHeight: typeof height === 'number' ? `${height}px` : height,
    contain: 'paint layout',
  };

  const shimmer = (
    <div 
      className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-700"
      style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)',
      }} 
    />
  );

  const renderContent = () => {
    switch (variant) {
      case 'cards':
        return (
          <div className="w-full h-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-full h-64 bg-[rgba(52,125,78,0.03)] rounded-xl border border-[rgba(52,125,78,0.05)]" />
            ))}
          </div>
        );
      case 'grid':
         return (
          <div className="w-full h-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center py-12">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex flex-col items-center gap-4">
                 <div className="w-24 h-24 rounded-full bg-[rgba(52,125,78,0.03)]" />
                 <div className="w-32 h-4 rounded bg-[rgba(52,125,78,0.03)]" />
              </div>
            ))}
          </div>
        );
      case 'split':
        return (
          <div className="w-full h-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
             <div className="w-full h-80 bg-[rgba(52,125,78,0.03)] rounded-xl" />
             <div className="space-y-4">
                <div className="w-3/4 h-8 bg-[rgba(52,125,78,0.03)] rounded" />
                <div className="w-full h-4 bg-[rgba(52,125,78,0.03)] rounded" />
                <div className="w-full h-4 bg-[rgba(52,125,78,0.03)] rounded" />
                <div className="w-2/3 h-4 bg-[rgba(52,125,78,0.03)] rounded" />
             </div>
          </div>
        );
      case 'text':
        return (
           <div className="w-full h-full max-w-4xl mx-auto px-6 flex flex-col justify-center items-center py-12 gap-6">
              <div className="w-1/2 h-10 bg-[rgba(52,125,78,0.03)] rounded" />
              <div className="w-full h-4 bg-[rgba(52,125,78,0.03)] rounded" />
              <div className="w-full h-4 bg-[rgba(52,125,78,0.03)] rounded" />
              <div className="w-3/4 h-4 bg-[rgba(52,125,78,0.03)] rounded" />
           </div>
        );
      default:
        return shimmer;
    }
  };

  return (
    <div 
      className={`w-full relative overflow-hidden ${className}`}
      style={containerStyle}
      role="status"
      aria-label={ariaLabel}
    >
      <div className="sr-only">Loading content...</div>
      {renderContent()}
    </div>
  );
});
