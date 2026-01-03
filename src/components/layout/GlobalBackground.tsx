import React, { memo } from 'react';

export const GlobalBackground: React.FC = memo(() => {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(ellipse 1200px 900px at 15% 10%, rgba(52, 125, 78, 0.045) 0%, transparent 50%),
          radial-gradient(ellipse 1400px 1100px at 85% 25%, rgba(68, 145, 95, 0.04) 0%, transparent 55%),
          radial-gradient(ellipse 1000px 1300px at 25% 45%, rgba(88, 165, 118, 0.035) 0%, transparent 50%),
          radial-gradient(ellipse 1300px 900px at 75% 60%, rgba(52, 125, 78, 0.038) 0%, transparent 52%),
          radial-gradient(ellipse 1100px 1400px at 40% 75%, rgba(68, 145, 95, 0.042) 0%, transparent 55%),
          radial-gradient(ellipse 1500px 1000px at 90% 85%, rgba(88, 165, 118, 0.036) 0%, transparent 53%),
          radial-gradient(ellipse 900px 1200px at 10% 90%, rgba(52, 125, 78, 0.04) 0%, transparent 50%),
          radial-gradient(circle 800px at 50% 30%, rgba(168, 208, 188, 0.025) 0%, transparent 60%),
          radial-gradient(circle 700px at 65% 50%, rgba(228, 242, 235, 0.02) 0%, transparent 65%),
          linear-gradient(180deg, 
            rgba(228, 242, 235, 0.012) 0%, 
            rgba(168, 208, 188, 0.015) 15%, 
            rgba(88, 165, 118, 0.018) 30%, 
            rgba(68, 145, 95, 0.015) 50%, 
            rgba(52, 125, 78, 0.02) 70%, 
            rgba(34, 75, 48, 0.015) 85%, 
            rgba(228, 242, 235, 0.012) 100%
          )
        `,
        zIndex: 0,
        // Optimization: Use will-change to hint compositing, but be careful not to use too much memory
        // Since it's fixed and static, we don't strictly need will-change: transform
        contain: 'paint strict',
      }}
    />
  );
});
