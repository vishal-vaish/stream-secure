import {
 Bell,
  Camera,
  LayoutDashboard,
  Settings,
   Users
} from "lucide-react";
import {SidebarItem} from "@/lib/types";

export enum SideMenu {
  DASHBOARD = "Dashboard",
  SURVEILLANCE = "Surveillance",
  NVR_DEVICES = "NVR Devices",
  CHANNELS = "Channels",
  SETTINGS = "Settings",
  ALERTS = "Alerts",
  USERS = "Users",
}

export const dashboardItems:SidebarItem[] = [
  {
    label: SideMenu.DASHBOARD,
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: SideMenu.SURVEILLANCE,
    icon: Camera,
    expandable: true,
    id: "surveillance",
    subMenu: [
      { label: SideMenu.NVR_DEVICES, href: "/nvr", navbarTitle:"NVR Dashboard" },
      { label: SideMenu.CHANNELS, href: "/channels", navbarTitle:"All Channels" },
    ],
  },
  {
    label: SideMenu.SETTINGS,
    href: "/settings",
    icon: Settings,
  },
  {
    label: SideMenu.ALERTS,
    href: "/alert",
    icon: Bell,
    badge: 3,
  },
  {
    label: SideMenu.USERS,
    href: "/users",
    icon: Users,
  },
];
