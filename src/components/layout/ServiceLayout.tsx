import React from 'react';
import { ServiceSidebar } from './ServiceSidebar';

interface ServiceLayoutProps {
  children: React.ReactNode;
  sidebarProps?: React.ComponentProps<typeof ServiceSidebar>;
}

export const ServiceLayout: React.FC<ServiceLayoutProps> = ({ children, sidebarProps }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
        
        {/* Main Content Area */}
        <div className="order-1 lg:order-1">
          {children}
        </div>

        {/* Sidebar */}
        <div className="order-2 lg:order-2 relative">
          <ServiceSidebar {...sidebarProps} />
        </div>

      </div>
    </div>
  );
};