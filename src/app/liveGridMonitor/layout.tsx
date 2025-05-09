"use client";

import React from 'react';
import LiveGridFooter from "@/components/footer/LiveGridFooter";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 p-2 overflow-auto">
        {children}
      </main>
      <LiveGridFooter/>
    </div>
  );
};

export default Layout;