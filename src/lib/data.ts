import {NVR, NVRStatusEnum} from "@/lib/types";

export const nvrs: NVR[] = [
  {
    id: "nvr-001",
    name: "Main Building NVR",
    location: "Server Room 1",
    status: NVRStatusEnum.ONLINE,
    lastUpdated: new Date().toISOString(),
    totalCollections: 24,
    storageUsed: 1.8,
    storageTotal: 8,
    thumbnail: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "nvr-002",
    name: "Warehouse NVR",
    location: "Security Office",
    status: NVRStatusEnum.ONLINE,
    lastUpdated: new Date().toISOString(),
    totalCollections: 16,
    storageUsed: 2.4,
    storageTotal: 6,
    thumbnail: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "nvr-003",
    name: "Parking Lot NVR",
    location: "Gatehouse",
    status: NVRStatusEnum.OFFLINE,
    lastUpdated: new Date(Date.now() - 86400000).toISOString(),
    totalCollections: 8,
    storageUsed: 1.2,
    storageTotal: 4,
    thumbnail: "https://images.pexels.com/photos/63901/pexels-photo-63901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "nvr-004",
    name: "Perimeter NVR",
    location: "East Wing",
    status: NVRStatusEnum.ONLINE,
    lastUpdated: new Date().toISOString(),
    totalCollections: 12,
    storageUsed: 3.1,
    storageTotal: 6,
    thumbnail: "https://images.pexels.com/photos/1117493/pexels-photo-1117493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];
