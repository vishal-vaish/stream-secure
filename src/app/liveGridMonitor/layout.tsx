"use client";

import React from 'react';
import LiveGridFooter from "@/components/footer/LiveGridFooter";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {

  return (
    <main className="flex flex-col bg-gray-50 dark:bg-gray-900">
        {children}
    </main>
  );
};

export default Layout;