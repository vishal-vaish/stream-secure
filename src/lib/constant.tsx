import {
 Bell,
  Camera,
  LayoutDashboard,
  Settings,
   Users
} from "lucide-react";
import {SidebarItem} from "@/lib/types";

export enum Menu {
  DASHBOARD = "Dashboard",
  SURVEILLANCE = "Surveillance",
  NVR_DEVICES = "NVR Devices",
  SERVERS = "Servers",
  Cameras = "Cameras",
}

export const dashboardItems:SidebarItem[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    label: 'Surveillance',
    icon: Camera,
    expandable: true,
    id: 'surveillance',
    subMenu: [
      { label: 'NVR Devices', href: '/nvr_devices' },
      { label: 'Servers', href: '/servers' },
      { label: 'Cameras', href: '/cameras' },
    ],
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings,
  },
  {
    label: 'Alerts',
    href: '/alert',
    icon: Bell,
    badge: 3,
  },
  {
    label: 'Users',
    href: '/users',
    icon: Users,
  },
];
