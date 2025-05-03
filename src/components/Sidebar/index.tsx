"use client";

import {ChevronRight,Menu, X} from 'lucide-react';
import React, {useEffect, useState} from 'react'
import {cn} from "@/lib/utils";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {dashboardItems} from "@/lib/constant";
import Logo from "@/components/Sidebar/Logo";
import {Separator} from "@/components/ui/separator";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>(['surveillance']);
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

  const toggleExpand = (item: string) => {
    setExpandedItems(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const isExpanded = (item: string) => expandedItems.includes(item);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };


  const navLinkClass = (active: boolean) =>
    `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
      active ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white'
    }`;

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed z-50 p-2 text-gray-500 bg-white rounded-md shadow-md md:hidden top-4 left-4"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24}/> : <Menu size={24}/>}
      </button>

      {/* Sidebar */}
      <aside
        className={cn("fixed inset-y-0 left-0 z-40 flex flex-col w-64 transition-transform duration-300 bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-900",
          isOpen ? 'translate-x-0' : '-translate-x-full')}
      >
        <Logo/>

        <Separator className="mb-4"/>

        <div className="flex flex-col flex-1 overflow-y-auto">
          {dashboardItems.map(item => {
            const Icon = item.icon;

            if (item.expandable && item.subMenu && item.id) {
              return (
                <div key={item.id} className="pt-2 mx-2">
                  <button
                    className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-md text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                    onClick={() => toggleExpand(item.id!)}
                  >
                    <div className="flex items-center">
                      <Icon className="w-5 h-5 mr-3"/>
                      {item.label}
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded(item.id!) ? 'transform rotate-90' : ''
                      }`}
                    />
                  </button>

                  {isExpanded(item.id) && (
                    <div className="mt-1 ml-8 space-y-1">
                      {item.subMenu.map(child => (
                        <Link key={child.href} href={child.href} className={navLinkClass(isActive(child.href))}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href!} className={cn("mx-2",navLinkClass(isActive(item.href!)))}>
                <Icon className="w-5 h-5 mr-3"/>
                {item.label}
                {item.badge && (
                  <span
                    className="flex items-center justify-center w-5 h-5 ml-auto text-xs text-white bg-red-500 rounded-full">
                   {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
              A
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 dark:text-white">Admin User</p>
              <p className="text-xs text-gray-500 dark:text-gray-100">admin@example.com</p>
            </div>
          </div>
        </div>
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
