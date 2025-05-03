"use client";

import React from 'react';
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64">
        <Header title={"NVR Dashboard"}/>
      {children}
      </div>
    </div>
  );
};

export default Layout;
