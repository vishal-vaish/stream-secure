import React from "react";

export interface SidebarItem {
  label: string;
  href?: string;
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
  ipAddress:string;
  model:string;
  modelName:string;
  lastUpdated: string;
  totalChannels: number;
  storageUsed: number;
  storageTotal: number;
  thumbnail: string;
}

export enum NVRStatusEnum {
  ONLINE = "online",
  OFFLINE = "offline",
}

export interface BreadcrumbItemType {
  label: string;
  path: string;
}

export interface ChannelType {
  id: string;
  nvrId: string;
  name: string;
  location: string;
  status: ChannelStatusEnum;
  lastUpdated: string;
  resolution: string;
  streamUrl: string;
  thumbnail: string;
}

export enum ChannelStatusEnum {
  ONLINE = "online",
  OFFLINE = "offline",
}

export interface StorageType {
  nvrId: string;
  channelId: string;
  channelName: string;
  nvrName: string;
  filename: string;
  created: string;
  path: string;
  size_bytes: number;
  thumbnail: string;
}
