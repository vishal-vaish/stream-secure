"use client";

import React from 'react';
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import BreadcrumbContainer from "@/components/BreadcrumbContainer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  const {breadcrumbItems, navbarTitle} = useNavbarDetails();

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar/>
      <div className="flex-1 flex flex-col md:ml-64">
        <Header title={navbarTitle || "Dashboard"} />
        <main className="flex-1 p-4 overflow-auto">
          {breadcrumbItems.length > 0 && (
            <div className="mb-6">
              <BreadcrumbContainer items={breadcrumbItems} />
            </div>
          )}
          <div className="min-h-[calc(100vh-15rem)]">
            {children}
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;