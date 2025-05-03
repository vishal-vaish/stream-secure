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
  SERVERS = "Servers",
  Cameras = "Cameras",
  SETTINGS = "Settings",
  ALERTS = "Alerts",
  USERS = "Users",
}

export const dashboardItems:SidebarItem[] = [
  {
    label: SideMenu.DASHBOARD,
    href: "/",
    icon: LayoutDashboard,
    navbarTitle: "Dashboard",
  },
  {
    label: SideMenu.SURVEILLANCE,
    icon: Camera,
    expandable: true,
    id: "surveillance",
    subMenu: [
      { label: SideMenu.NVR_DEVICES, href: "/nvr_devices", navbarTitle:"NVR Dashboard" },
      { label: SideMenu.SERVERS, href: "/servers", navbarTitle:"All Servers" },
      { label: SideMenu.Cameras, href: "/cameras", navbarTitle:"All Cameras" },
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
