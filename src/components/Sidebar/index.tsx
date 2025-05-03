"use client";

import React, {useEffect, useState} from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {dashboardItems} from "@/lib/constant";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {Separator} from "@/components/ui/separator";
import Image from "next/image";
import Icon from "../../../public/logo.png";
import LogiscanLogo from "../../../public/logiscan logo.png";

const AppSidebar = () => {
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    const currentTab = dashboardItems
      .find(item => item.route === pathname);
    if (currentTab) {
      setSelectedTab(currentTab.name);
    }
  }, [pathname]);

  return (
    <Sidebar collapsible={"icon"}>
      <SidebarHeader>
        <div className="flex items-center justify-center h-16">
          <div className="text-black uppercase text-3xl">Laneguard</div>
        </div>
      </SidebarHeader>
      <Separator/>
      <SidebarContent className="mt-5">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardItems.map((item) => (
                <SidebarMenuItem
                  key={item.name}
                  className={cn("rounded-md h-10 justify-center flex items-center",
                    selectedTab === item.name && "text-sidebar-accent-foreground bg-[#2563eb]")}
                >
                  <SidebarMenuButton
                    asChild
                    tooltip={item.name}
                    className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:p-[0.2rem] group-data-[collapsible=icon]:items-center h-10"
                  >
                    <a href={item.route} className="flex items-center">
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className="ml-2">{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
export default AppSidebar
