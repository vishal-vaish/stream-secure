import {
  Camera,
  HardDrive,
  LayoutDashboard,
  ServerIcon,
} from "lucide-react";
import {SidebarItem} from "@/lib/types";

export enum SideMenu {
  DASHBOARD = "Dashboard",
  NVR_DEVICES = "NVR Devices",
  CHANNELS = "Channels",
  RECORDINGS = "Recordings",
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
    icon: HardDrive,
    href: "/recordings"
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
  // {
  //   label: SideMenu.USERS,
  //   href: "/users",
  //   icon: Users,
  // },
];
