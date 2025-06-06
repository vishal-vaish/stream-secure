"use client";

import { Menu, X} from 'lucide-react';
import React, {useEffect, useState} from 'react'
import {cn} from "@/lib/utils";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {dashboardItems} from "@/lib/constant";
import Logo from "@/components/Sidebar/Logo";
import {Separator} from "@/components/ui/separator";
import UserDetails from "@/components/Sidebar/UserDetails";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const hoverLinkClass = (active: boolean) =>
    `${active ? 'text-blue-600 bg-blue-50 dark:bg-gray-700 dark:text-blue-400' : 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200'}`

  const isExternalLink = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed z-50 p-2 text-gray-500 bg-white rounded-md shadow-md md:hidden top-4 left-4 dark:bg-gray-800 border:bg-gray-900 border"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24}/> : <Menu size={24}/>}
      </button>

      {/* Sidebar */}
      <aside
        className={cn("fixed inset-y-0 left-0 z-40 flex flex-col w-64 transition-transform duration-300 bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700",
          isOpen ? 'translate-x-0' : '-translate-x-full')}
      >
        <Logo/>
        <Separator className="mb-1"/>
        <div className="flex flex-col flex-1 overflow-y-auto gap-1">
          {dashboardItems.map(item => {
            const Icon = item.icon;

            return (
              <div key={item.href} className={cn("mx-2 rounded-md", hoverLinkClass(isActive(item.href!)))}>
                {isExternalLink(item.href!) ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center px-4 py-2 text-sm font-medium rounded-md",
                      "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-900"
                    )}
                  >
                    <Icon className="w-5 h-5 mr-3"/>
                    {item.label}
                    {item.badge && (
                      <span
                        className="flex items-center justify-center w-5 h-5 ml-auto text-xs text-white bg-red-500 rounded-full">
                       {item.badge}
                      </span>
                    )}
                  </a>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={() => {
                      if (isOpen) {
                        setIsOpen(false);
                      }
                    }}
                    className={cn(
                      "flex items-center px-4 py-2 text-sm font-medium rounded-md ",
                      isActive(item.href!) ? "" : "hover:bg-gray-100 dark:hover:bg-gray-900"
                    )}
                  >
                    <Icon className="w-5 h-5 mr-3"/>
                    {item.label}
                    {item.badge && (
                      <span
                        className="flex items-center justify-center w-5 h-5 ml-auto text-xs text-white bg-red-500 rounded-full">
                       {item.badge}
                      </span>
                    )}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
        <UserDetails/>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  )
}
export default Sidebar
