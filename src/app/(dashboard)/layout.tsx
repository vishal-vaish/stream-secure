"use client";

import React from 'react';
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import {usePathname} from "next/navigation";
import {dashboardItems} from "@/lib/constant";
import {SidebarItem} from "@/lib/types";
import Footer from "@/components/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  const pathname = usePathname();
  const title = findNavbarTitle(pathname, dashboardItems);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar/>
      <div className="flex-1 flex flex-col md:ml-64">
        <Header title={title || "Dashboard"} />
        <main className="flex-1 p-4 md:p-6 overflow-auto">
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

const findNavbarTitle = (href: string, items: SidebarItem[]): string | undefined => {
  for (const item of items) {
    if (item.href === href) return item.navbarTitle;
    if (item.subMenu) {
      const found = item.subMenu.find(sub => sub.href === href);
      if (found) return found.navbarTitle;
    }
  }
  return undefined;
};