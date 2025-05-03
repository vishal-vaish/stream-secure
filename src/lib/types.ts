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

export interface NVR {
  id: string;
  name: string;
  location: string;
  status: NVRStatusEnum;
  lastUpdated: string;
  totalCollections: number;
  storageUsed: number;
  storageTotal: number;
  thumbnail: string;
}

export enum NVRStatusEnum {
  ONLINE = 'online',
  OFFLINE = 'offline',
}