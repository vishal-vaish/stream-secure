import React from "react";
import {SideMenu} from "@/lib/constant";

export interface SidebarItem {
  label: SideMenu;
  href?: string;
  icon: React.ElementType;
  badge?:number;
  isDisabled?: boolean;
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
  status?: ChannelStatusEnum;
  lastUpdated: string;
  resolution: string;
  streamUrl: string;
  thumbnail: string;
  isLiveStreaming?:boolean;
}

export enum ChannelStatusEnum {
  ONLINE = "online",
  OFFLINE = "offline",
}

export interface RecordingType {
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

export enum StorageTypeEnum {
  LOCAL_STORAGE = "Local Storage",
  NETWORK_STORAGE = "Network Storage",
  CLOUD_STORAGE = "Cloud Storage",
}

export interface StorageType {
  id:string;
  storageName: string;
  storageType: StorageTypeEnum;
  ipAddress: string;
  path: string;
  authentication: {
    username: string;
    password: string;
  },
  storageCapacity: number;
  retentionSettings: {
    enableAutoDelete: boolean,
    autoDeleteOlderThan?: boolean,
    timeUnit?:string
  }
  advancedOptions: {
    setPrimaryStorage?:boolean,
    useAsBackupOnly?:boolean,
  }
}

export interface DishUsageType {
  total_size_bytes: number;
}

export interface VideoGridDataType {
  id: string;
  url: string;
  title: string;
}

export interface StreamHealthType {
  status: ChannelStatusEnum;
  channelId: string;
  ffmpeg_running: boolean;
  recording_running: boolean;
}
