import {ChannelStatusEnum, ChannelType, NVR, NVRStatusEnum} from "@/lib/types";

export const mockedNVRData: NVR[] = [
  {
    id: "nvr-001",
    name: "JMS Mining HO",
    location: "Head Office",
    status: NVRStatusEnum.ONLINE,
    lastUpdated: new Date().toISOString(),
    model: "DS-7P32NI-K4",
    ipAddress: "49.249.96.100",
    modelName: "HIK Media Server",
    totalChannels: 2,
    storageUsed: 1.8,
    storageTotal: 8,
    thumbnail: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  // {
  //   id: "nvr-002",
  //   name: "Warehouse NVR",
  //   location: "Security Office",
  //   status: NVRStatusEnum.ONLINE,
  //   lastUpdated: new Date().toISOString(),
  //   model: "DS-7P32NI-K4",
  //   ipAddress: "24.119.45.410",
  //   modelName: "HIK Media Server",
  //   totalChannels: 16,
  //   storageUsed: 2.4,
  //   storageTotal: 6,
  //   thumbnail: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  // {
  //   id: "nvr-003",
  //   name: "Parking Lot NVR",
  //   location: "Gatehouse",
  //   status: NVRStatusEnum.OFFLINE,
  //   model: "DS-7P32NI-K4",
  //   ipAddress: "24.459.12.410",
  //   modelName: "HIK Media Server",
  //   lastUpdated: new Date(Date.now() - 86400000).toISOString(),
  //   totalChannels: 8,
  //   storageUsed: 1.2,
  //   storageTotal: 4,
  //   thumbnail: "https://images.pexels.com/photos/63901/pexels-photo-63901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  // {
  //   id: "nvr-004",
  //   name: "Perimeter NVR",
  //   location: "East Wing",
  //   model: "DS-7P32NI-K4",
  //   ipAddress: "24.129.40.010",
  //   modelName: "HIK Media Server",
  //   status: NVRStatusEnum.ONLINE,
  //   lastUpdated: new Date().toISOString(),
  //   totalChannels: 12,
  //   storageUsed: 3.1,
  //   storageTotal: 6,
  //   thumbnail: "https://images.pexels.com/photos/1117493/pexels-photo-1117493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // }
];

export const mockedChannelsData: ChannelType[] = [
  // Main Server 1 Cameras
  // {
  //   id: "cam-001",
  //   nvrId: "nvr-002",
  //   name: "Lobby Camera 1",
  //   location: "Main Entrance",
  //   status: ChannelStatusEnum.ONLINE,
  //   lastUpdated: new Date().toISOString(),
  //   resolution: "1080p",
  //   streamUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  //   thumbnail: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  // {
  //   id: "cam-002",
  //   nvrId: "nvr-002",
  //   name: "Lobby Camera 2",
  //   location: "Reception Desk",
  //   status: ChannelStatusEnum.ONLINE,
  //   lastUpdated: new Date().toISOString(),
  //   resolution: "1080p",
  //   streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  //   thumbnail: "https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  // {
  //   id: "cam-003",
  //   nvrId: "nvr-002",
  //   name: "Elevator Camera",
  //   location: "Main Lobby Elevator",
  //   status: ChannelStatusEnum.OFFLINE,
  //   lastUpdated: new Date().toISOString(),
  //   resolution: "1080p",
  //   streamUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  //   thumbnail: "https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  // // Additional cameras would be defined here, but trimmed for brevity
  // {
  //   id: "cam-004",
  //   nvrId: "nvr-003",
  //   name: "Office Hallway 1",
  //   location: "1st Floor Hallway",
  //   status: ChannelStatusEnum.ONLINE,
  //   lastUpdated: new Date().toISOString(),
  //   resolution: "1080p",
  //   streamUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  //   thumbnail: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  // {
  //   id: "cam-005",
  //   nvrId: "nvr-002",
  //   name: "Conference Room A",
  //   location: "2nd Floor East Wing",
  //   status: ChannelStatusEnum.OFFLINE,
  //   lastUpdated: new Date(Date.now() - 7200000).toISOString(),
  //   resolution: "1080p",
  //   streamUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  //   thumbnail: "https://images.pexels.com/photos/561458/pexels-photo-561458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  // {
  //   id: "cam-006",
  //   nvrId: "nvr-003",
  //   name: "Parking Entrance",
  //   location: "Underground Parking",
  //   status: ChannelStatusEnum.OFFLINE,
  //   lastUpdated: new Date().toISOString(),
  //   resolution: "1080p",
  //   streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  //   thumbnail: "https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  // {
  //   id: "cam-007",
  //   nvrId: "nvr-002",
  //   name: "Warehouse Gate",
  //   location: "Main Warehouse Entrance",
  //   status: ChannelStatusEnum.ONLINE,
  //   lastUpdated: new Date().toISOString(),
  //   resolution: "1080p",
  //   streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  //   thumbnail: "https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  // {
  //   id: "cam-008",
  //   nvrId: "nvr-002",
  //   name: "Loading Dock 1",
  //   location: "North Loading Area",
  //   status: ChannelStatusEnum.ONLINE,
  //   lastUpdated: new Date().toISOString(),
  //   resolution: "1080p",
  //   streamUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  //   thumbnail: "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  {
    id: "cam-009",
    nvrId: "nvr-001",
    name: "Ground Floor Lobby-1",
    location: "Ground Floor Lobby",
    status: ChannelStatusEnum.ONLINE,
    lastUpdated: new Date().toISOString(),
    resolution: "1080p",
    streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "cam-010",
    nvrId: "nvr-001",
    name: "Ground Floor Lobby-2",
    location: "Ground Floor Lobby",
    status: ChannelStatusEnum.ONLINE,
    lastUpdated: new Date(Date.now() - 7200000).toISOString(),
    resolution: "1080p",
    streamUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.pexels.com/photos/561458/pexels-photo-561458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];