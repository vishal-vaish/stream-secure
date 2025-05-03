import React from "react";

export interface SidebarItem {
  label: string;
  href?: string;
  navbarTitle?: string;
  icon: React.ElementType;
  expandable?:boolean;
  id?:string;
  subMenu?: SubmenuItem[];
  badge?:number;
}

export interface SubmenuItem {
  label: string;
  href: string;
  navbarTitle:string;
}

