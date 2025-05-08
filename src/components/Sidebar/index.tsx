"use client";

import {LogOutIcon, Menu, X} from 'lucide-react';
import React, {useEffect, useState} from 'react'
import {cn, waitFor} from "@/lib/utils";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {dashboardItems, SideMenu} from "@/lib/constant";
import Logo from "@/components/Sidebar/Logo";
import {Separator} from "@/components/ui/separator";
import Cookies from "js-cookie";
import {validUserData} from "@/lib/data";
import TooltipWrapper from "@/components/TooltipWrapper";

type TooltipConfigType = {
  [key in SideMenu]?: string;
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

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

  const removeToken = async () => {
    Cookies.remove("auth_token");
    await waitFor(1);
    router.push("/login");
  }

  const tooltipRenderConfig:TooltipConfigType = {
    [SideMenu.DASHBOARD] : "Centralized command center displaying real-time security metrics and device status overview.",
    [SideMenu.REPORTS] : "Automated documentation of security insights with exportable data visualization capabilities.",
    [SideMenu.EVENTS] : "Real-time incident detection and notification system with customizable alert parameters.",
    [SideMenu.ANALYTICS] : "AI-powered visualization tools analyzing patterns and trends from surveillance footage.",
  };

  const getTooltipDescription = (menu:SideMenu) :string => {
    return tooltipRenderConfig[menu] || "";
  }

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
        className={cn("fixed inset-y-0 left-0 z-40 flex flex-col w-64 transition-transform duration-300 bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700",
          isOpen ? 'translate-x-0' : '-translate-x-full')}
      >
        <Logo/>
        <Separator className="mb-4"/>
        <div className="flex flex-col flex-1 overflow-y-auto">
          {dashboardItems.map(item => {
            const Icon = item.icon;

            return (
              <div key={item.href} className={cn("mx-2 rounded-md", hoverLinkClass(isActive(item.href!)))}>
                {item.isDisabled ? (
                  <TooltipWrapper
                    contentRenderer={
                      <div className="flex flex-col gap-2">
                        <p className="border-b pb-2">This Feature is currently disabled</p>
                        <p>{getTooltipDescription(item.label)}</p>
                      </div>
                    }
                    side={"right"}
                  >
                    <div
                      className={cn(
                        "flex items-center px-4 py-2 text-sm font-medium rounded-md dark:text-gray-500",
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
                    </div>
                  </TooltipWrapper>
                ) : (
                  <Link
                    href={item.href!}
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

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                A
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-100">{validUserData[0].username}</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">{validUserData[0].email}</p>
              </div>
            </div>
            <div
              className="cursor-pointer"
              onClick={removeToken}
            >
              <LogOutIcon/>
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
