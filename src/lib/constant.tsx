import {
  Camera,
  CassetteTape,
  HardDrive,
  LayoutDashboard,
  ServerIcon,
  Users,
} from "lucide-react";
import {SidebarItem} from "@/lib/types";

export enum SideMenu {
  DASHBOARD = "Dashboard",
  NVR_DEVICES = "NVR Devices",
  CHANNELS = "Channels",
  RECORDINGS = "Recordings",
  STORAGE = "Storage",
  SETTINGS = "Settings",
  ALERTS = "Alerts",
  USERS = "Users",
}

export const dashboardItems: SidebarItem[] = [
  {
    label: SideMenu.DASHBOARD,
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: SideMenu.NVR_DEVICES,
    icon: ServerIcon,
    href: "/nvr"
  },
  {
    label: SideMenu.CHANNELS,
    icon: Camera,
    href: "/channels"
  },
  {
    label: SideMenu.RECORDINGS,
    icon: CassetteTape,
    href: "/recordings"
  },
  {
    label: SideMenu.STORAGE,
    icon: HardDrive,
    href: "/storages"
  },
  // {
  //   label: SideMenu.SETTINGS,
  //   href: "/settings",
  //   icon: Settings,
  // },
  // {
  //   label: SideMenu.ALERTS,
  //   href: "/alert",
  //   icon: Bell,
  //   badge: 3,
  // },
  {
    label: SideMenu.USERS,
    href: "/users",
    icon: Users,
  },
];
