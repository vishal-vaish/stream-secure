import {
  BarChart3,
  Calendar,
  Camera,
  CassetteTape, ExternalLinkIcon,
  FileBarChart,
  HardDrive,
  LayoutDashboard,
  ServerIcon,
  Settings,
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
  REPORTS = "Reports",
  EVENTS = "Events",
  ANALYTIX_CORE = "Analytix Core",
  LANE_GUARD = "Lane-Guard",
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
  {
    label: SideMenu.REPORTS,
    href: "/reports",
    isDisabled: true,
    icon: FileBarChart,
  },
  {
    label: SideMenu.EVENTS,
    href: "/events",
    isDisabled: true,
    icon: Calendar,
  },
  {
    label: SideMenu.ANALYTIX_CORE,
    href: "/analytix_core",
    icon: BarChart3,
  },
  {
    label: SideMenu.USERS,
    href: "/users",
    icon: Users,
  },
  {
    label: SideMenu.LANE_GUARD,
    // href: "http://192.168.1.111:3000",
    href: "http://localhost:3000",
    icon: ExternalLinkIcon,
  },
  {
    label: SideMenu.SETTINGS,
    href: "/settings",
    icon: Settings,
  },
];
