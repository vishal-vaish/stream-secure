import {
  EventSeverityEnum,
  EventStatusEnum,
  NVR,
  NVRStatusEnum,
  recentEventsStatsType,
  StorageType,
  StorageTypeEnum,
  VideoGridDataType
} from "@/lib/types";
import {
  Activity,
  Bell,
  KeyRound,
  Shield,
  User2Icon,
  Users
} from "lucide-react";

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
    storageUsed: 0.8,
    storageTotal: 1,
    // thumbnail: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    thumbnail: "https://jmsmining.com/wp-content/uploads/2024/03/Demo.jpg"
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

export const mockedChannelsData = [
  {
    id: "cam-009",
    nvrId: "nvr-001",
    name: "Ground Floor Lobby-1",
    location: "Ground Floor Lobby",
    // status: ChannelStatusEnum.ONLINE,
    lastUpdated: new Date().toISOString(),
    resolution: "1080p",
    streamUrl: "http://192.168.1.114:8000/hls/stream_0/playlist.m3u8",
    thumbnail: "http://192.168.1.114:8000/hls/stream_0/playlist.m3u8",
    isLiveStreaming:true,
  },
  {
    id: "cam-010",
    nvrId: "nvr-001",
    name: "Ground Floor Lobby-2",
    location: "Ground Floor Lobby",
    // status: ChannelStatusEnum.ONLINE,
    lastUpdated: new Date(Date.now() - 7200000).toISOString(),
    resolution: "1080p",
    streamUrl: "http://192.168.1.114:8000/hls/stream_1/playlist.m3u8",
    thumbnail: "http://192.168.1.114:8000/hls/stream_1/playlist.m3u8",
    isLiveStreaming:true,
  },
];

export const validUserData = [
  {
    id: "001",
    username: "admin",
    password: "password123",
    email: "admin@example.com",
    role: "Admin",
    status: "active",
    lastActive: new Date(Date.now() - 1000 * 60 * 15)
  }
]

export const storageMockedData: StorageType[] = [{
  id: "sto-001",
  storageName: "Primary Storage",
  storageType: StorageTypeEnum.LOCAL_STORAGE,
  ipAddress: "192.168.1.114",
  path: "/tmp/recordings",
  authentication: {
    username: "admin",
    password: "securePass123"
  },
  storageCapacity: 1,
  retentionSettings: {
    enableAutoDelete: false
  },
  advancedOptions: {
    setPrimaryStorage: true,
    useAsBackupOnly: false
  }
}]

export const settingMockedData = [
  {
    id: "1",
    settingName: "Notifications",
    icon: Bell
  },
  {
    id: "2",
    settingName: "Profile",
    icon: User2Icon
  },
  {
    id: "3",
    settingName: "Reset Password",
    icon: KeyRound
  },
]

export const mockedVideoGridData:VideoGridDataType[] = [
  { id: "1", url: "http://192.168.1.114:8000/hls/stream_0/playlist.m3u8", title: "cam-009" },
  { id: "2", url: "http://192.168.1.114:8000/hls/stream_1/playlist.m3u8", title: "cam-010" }
];

export const systemHealthUsageStats = [
  {
    label: "CPU Usage",
    value: 45,
    barColor: "bg-blue-600",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    label: "Memory Usage",
    value: 68,
    barColor: "bg-green-600",
    textColor: "text-green-600 dark:text-green-400",
  },
  {
    label: "Network Load",
    value: 32,
    barColor: "bg-purple-600",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    label: "Storage I/O",
    value: 55,
    barColor: "bg-orange-600",
    textColor: "text-orange-600 dark:text-orange-400",
  },
];

export const activeUserStats = [
  {
    label: "Online Users",
    description: "Currently active in the system",
    icon: Users,
    iconBg: "bg-blue-100 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    value: 1,
  },
  {
    label: "Admin Users",
    description: "With administrative access",
    icon: Shield,
    iconBg: "bg-green-100 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
    value: 2,
  },
  {
    label: "Active Sessions",
    description: "Current monitoring sessions",
    icon: Activity,
    iconBg: "bg-yellow-100 dark:bg-yellow-900/20",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    value: 1,
  },
]

export const recentEventsStats:recentEventsStatsType[] = [
  {
    id: 1,
    type: "Motion Detected",
    location: "Ground Floor Lobby-1",
    device: "JMS Mining HQ",
    timestamp: "May 7, 2025, 9:12 PM",
    severity: EventSeverityEnum.LOW,
    status: EventStatusEnum.NEW,
    timeAgo: "2m ago"
  },
  {
    id: 2,
    type: "Connection Lost",
    location: "Ground Floor Lobby-2",
    device: "JMS Mining HQ",
    timestamp: "May 7, 2025, 8:45 PM",
    severity: EventSeverityEnum.HIGH,
    status: EventStatusEnum.ACKNOWLEDGED,
    timeAgo: "29m ago"
  },
  {
    id: 3,
    type: "Storage Warning",
    location: "Ground Floor Lobby-1",
    device: "JMS Mining HQ",
    timestamp: "May 7, 2025, 7:30 PM",
    severity: EventSeverityEnum.MEDIUM,
    status: EventStatusEnum.RESOLVED,
    timeAgo: "1h 44m ago"
  },
  {
    id: 4,
    type: "Storage Warning",
    location: "NVR 2",
    device: "System",
    timestamp: "May 7, 2025, 8:55 PM",
    severity: EventSeverityEnum.MEDIUM,
    status: EventStatusEnum.ACKNOWLEDGED,
    timeAgo: "19m ago",
    details: "reaching 85% capacity"
  },
  {
    id: 5,
    type: "System Update",
    location: "Camera 5",
    device: "System",
    timestamp: "May 7, 2025, 8:12 PM",
    severity: EventSeverityEnum.INFO,
    status: EventStatusEnum.INFO,
    timeAgo: "1h 2m ago",
    details: "New firmware available"
  },
  // {
  //   id: 6,
  //   type: "Motion Detected",
  //   location: "Camera 3 - Parking Lot",
  //   device: "System",
  //   timestamp: "May 7, 2025, 9:10 PM",
  //   severity: "low",
  //   status: "new",
  //   timeAgo: "4m ago"
  // }
]