import VehicleAccessIcon from "@/components/Icon/VehicleAccessIcon";
import NvrIcon from "@/components/Icon/NVRIcon";

export enum TABS {
  DASHBOARD = "Dashboard",
  NVR = "NVR",
}

export const dashboardItems = [
  {
    name: TABS.DASHBOARD,
    route: "/",
    icon: <VehicleAccessIcon/>
  },
  {
    name: TABS.NVR,
    route: "/nvr",
    icon: <NvrIcon/>
  },
];

