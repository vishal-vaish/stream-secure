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
]

export const motionData = [
  { hour: "00:00", "Ground Floor Lobby-1": 3, "Ground Floor Lobby-2": 2, timestamp: "May 7, 12:00 AM" },
  { hour: "01:00", "Ground Floor Lobby-1": 1, "Ground Floor Lobby-2": 0, timestamp: "May 7, 1:00 AM" },
  { hour: "02:00", "Ground Floor Lobby-1": 0, "Ground Floor Lobby-2": 1, timestamp: "May 7, 2:00 AM" },
  { hour: "03:00", "Ground Floor Lobby-1": 0, "Ground Floor Lobby-2": 0, timestamp: "May 7, 3:00 AM" },
  { hour: "04:00", "Ground Floor Lobby-1": 1, "Ground Floor Lobby-2": 0, timestamp: "May 7, 4:00 AM" },
  { hour: "05:00", "Ground Floor Lobby-1": 2, "Ground Floor Lobby-2": 1, timestamp: "May 7, 5:00 AM" },
  { hour: "06:00", "Ground Floor Lobby-1": 5, "Ground Floor Lobby-2": 3, timestamp: "May 7, 6:00 AM" },
  { hour: "07:00", "Ground Floor Lobby-1": 8, "Ground Floor Lobby-2": 6, timestamp: "May 7, 7:00 AM" },
  { hour: "08:00", "Ground Floor Lobby-1": 17, "Ground Floor Lobby-2": 14, timestamp: "May 7, 8:00 AM" },
  { hour: "09:00", "Ground Floor Lobby-1": 22, "Ground Floor Lobby-2": 19, timestamp: "May 7, 9:00 AM" },
  { hour: "10:00", "Ground Floor Lobby-1": 15, "Ground Floor Lobby-2": 12, timestamp: "May 7, 10:00 AM" },
  { hour: "11:00", "Ground Floor Lobby-1": 11, "Ground Floor Lobby-2": 9, timestamp: "May 7, 11:00 AM" },
  { hour: "12:00", "Ground Floor Lobby-1": 18, "Ground Floor Lobby-2": 16, timestamp: "May 7, 12:00 PM" },
  { hour: "13:00", "Ground Floor Lobby-1": 16, "Ground Floor Lobby-2": 14, timestamp: "May 7, 1:00 PM" },
  { hour: "14:00", "Ground Floor Lobby-1": 12, "Ground Floor Lobby-2": 10, timestamp: "May 7, 2:00 PM" },
  { hour: "15:00", "Ground Floor Lobby-1": 14, "Ground Floor Lobby-2": 11, timestamp: "May 7, 3:00 PM" },
  { hour: "16:00", "Ground Floor Lobby-1": 19, "Ground Floor Lobby-2": 17, timestamp: "May 7, 4:00 PM" },
  { hour: "17:00", "Ground Floor Lobby-1": 23, "Ground Floor Lobby-2": 21, timestamp: "May 7, 5:00 PM" },
  { hour: "18:00", "Ground Floor Lobby-1": 14, "Ground Floor Lobby-2": 12, timestamp: "May 7, 6:00 PM" },
  { hour: "19:00", "Ground Floor Lobby-1": 9, "Ground Floor Lobby-2": 7, timestamp: "May 7, 7:00 PM" },
  { hour: "20:00", "Ground Floor Lobby-1": 6, "Ground Floor Lobby-2": 4, timestamp: "May 7, 8:00 PM" },
  { hour: "21:00", "Ground Floor Lobby-1": 4, "Ground Floor Lobby-2": 3, timestamp: "May 7, 9:00 PM" },
  { hour: "22:00", "Ground Floor Lobby-1": 3, "Ground Floor Lobby-2": 2, timestamp: "May 7, 10:00 PM" },
  { hour: "23:00", "Ground Floor Lobby-1": 2, "Ground Floor Lobby-2": 1, timestamp: "May 7, 11:00 PM" },
]

export const storageData = [
  { name: "Used Space", value: 1.8, color: "#3B82F6" },
  { name: "Free Space", value: 6.2, color: "#FACC15" },
]

export const storageGrowthData = [
  { date: "May 1", growth: 0.28, day: "Mon" },
  { date: "May 2", growth: 0.31, day: "Tue" },
  { date: "May 3", growth: 0.35, day: "Wed" },
  { date: "May 4", growth: 0.32, day: "Thu" },
  { date: "May 5", growth: 0.42, day: "Fri" },
  { date: "May 6", growth: 0.19, day: "Sat" },
  { date: "May 7", growth: 0.15, day: "Sun" },
]

export const weeklyMotionData = [
  { day: "Mon", "Ground Floor Lobby-1": 145, "Ground Floor Lobby-2": 132, date: "May 1, 2025" },
  { day: "Tue", "Ground Floor Lobby-1": 132, "Ground Floor Lobby-2": 121, date: "May 2, 2025" },
  { day: "Wed", "Ground Floor Lobby-1": 164, "Ground Floor Lobby-2": 145, date: "May 3, 2025" },
  { day: "Thu", "Ground Floor Lobby-1": 187, "Ground Floor Lobby-2": 167, date: "May 4, 2025" },
  { day: "Fri", "Ground Floor Lobby-1": 219, "Ground Floor Lobby-2": 198, date: "May 5, 2025" },
  { day: "Sat", "Ground Floor Lobby-1": 98, "Ground Floor Lobby-2": 87, date: "May 6, 2025" },
  { day: "Sun", "Ground Floor Lobby-1": 65, "Ground Floor Lobby-2": 54, date: "May 7, 2025" },
]

export const eventTypeData = [
  { name: "Motion Detection", value: 65, color: "#3B82F6" },
  { name: "Connection Issues", value: 15, color: "#EF4444" },
  { name: "Storage Warnings", value: 10, color: "#F59E0B" },
  { name: "Login Attempts", value: 5, color: "#10B981" },
  { name: "System Alerts", value: 5, color: "#8B5CF6" },
]

export const hourlyEventData = [
  { hour: "00:00", events: 5 },
  { hour: "01:00", events: 2 },
  { hour: "02:00", events: 1 },
  { hour: "03:00", events: 0 },
  { hour: "04:00", events: 1 },
  { hour: "05:00", events: 3 },
  { hour: "06:00", events: 8 },
  { hour: "07:00", events: 14 },
  { hour: "08:00", events: 31 },
  { hour: "09:00", events: 41 },
  { hour: "10:00", events: 27 },
  { hour: "11:00", events: 20 },
  { hour: "12:00", events: 34 },
  { hour: "13:00", events: 30 },
  { hour: "14:00", events: 22 },
  { hour: "15:00", events: 25 },
  { hour: "16:00", events: 36 },
  { hour: "17:00", events: 44 },
  { hour: "18:00", events: 26 },
  { hour: "19:00", events: 16 },
  { hour: "20:00", events: 10 },
  { hour: "21:00", events: 7 },
  { hour: "22:00", events: 5 },
  { hour: "23:00", events: 3 },
]

export const performanceData = [
  { time: "00:00", cpu: 15, memory: 30, network: 5 },
  { time: "02:00", cpu: 12, memory: 28, network: 3 },
  { time: "04:00", cpu: 10, memory: 26, network: 2 },
  { time: "06:00", cpu: 18, memory: 32, network: 8 },
  { time: "08:00", cpu: 35, memory: 45, network: 25 },
  { time: "10:00", cpu: 28, memory: 40, network: 18 },
  { time: "12:00", cpu: 32, memory: 42, network: 22 },
  { time: "14:00", cpu: 30, memory: 41, network: 20 },
  { time: "16:00", cpu: 34, memory: 44, network: 24 },
  { time: "18:00", cpu: 25, memory: 38, network: 15 },
  { time: "20:00", cpu: 20, memory: 35, network: 10 },
  { time: "22:00", cpu: 18, memory: 32, network: 7 },
]

export const behavioralData = [
  {
    hour: "00:00",
    "Ground Floor Lobby-1 Walking": 2,
    "Ground Floor Lobby-1 Standing": 1,
    "Ground Floor Lobby-2 Walking": 1,
    "Ground Floor Lobby-2 Standing": 1,
  },
  {
    hour: "01:00",
    "Ground Floor Lobby-1 Walking": 1,
    "Ground Floor Lobby-1 Standing": 0,
    "Ground Floor Lobby-2 Walking": 0,
    "Ground Floor Lobby-2 Standing": 0,
  },
  {
    hour: "02:00",
    "Ground Floor Lobby-1 Walking": 0,
    "Ground Floor Lobby-1 Standing": 0,
    "Ground Floor Lobby-2 Walking": 1,
    "Ground Floor Lobby-2 Standing": 0,
  },
  {
    hour: "03:00",
    "Ground Floor Lobby-1 Walking": 0,
    "Ground Floor Lobby-1 Standing": 0,
    "Ground Floor Lobby-2 Walking": 0,
    "Ground Floor Lobby-2 Standing": 0,
  },
  {
    hour: "04:00",
    "Ground Floor Lobby-1 Walking": 1,
    "Ground Floor Lobby-1 Standing": 0,
    "Ground Floor Lobby-2 Walking": 0,
    "Ground Floor Lobby-2 Standing": 0,
  },
  {
    hour: "05:00",
    "Ground Floor Lobby-1 Walking": 1,
    "Ground Floor Lobby-1 Standing": 1,
    "Ground Floor Lobby-2 Walking": 1,
    "Ground Floor Lobby-2 Standing": 0,
  },
  {
    hour: "06:00",
    "Ground Floor Lobby-1 Walking": 3,
    "Ground Floor Lobby-1 Standing": 2,
    "Ground Floor Lobby-2 Walking": 2,
    "Ground Floor Lobby-2 Standing": 1,
  },
  {
    hour: "07:00",
    "Ground Floor Lobby-1 Walking": 6,
    "Ground Floor Lobby-1 Standing": 2,
    "Ground Floor Lobby-2 Walking": 4,
    "Ground Floor Lobby-2 Standing": 2,
  },
  {
    hour: "08:00",
    "Ground Floor Lobby-1 Walking": 12,
    "Ground Floor Lobby-1 Standing": 5,
    "Ground Floor Lobby-2 Walking": 10,
    "Ground Floor Lobby-2 Standing": 4,
  },
  {
    hour: "09:00",
    "Ground Floor Lobby-1 Walking": 14,
    "Ground Floor Lobby-1 Standing": 8,
    "Ground Floor Lobby-2 Walking": 12,
    "Ground Floor Lobby-2 Standing": 7,
  },
  {
    hour: "10:00",
    "Ground Floor Lobby-1 Walking": 9,
    "Ground Floor Lobby-1 Standing": 6,
    "Ground Floor Lobby-2 Walking": 7,
    "Ground Floor Lobby-2 Standing": 5,
  },
  {
    hour: "11:00",
    "Ground Floor Lobby-1 Walking": 7,
    "Ground Floor Lobby-1 Standing": 4,
    "Ground Floor Lobby-2 Walking": 5,
    "Ground Floor Lobby-2 Standing": 4,
  },
  {
    hour: "12:00",
    "Ground Floor Lobby-1 Walking": 10,
    "Ground Floor Lobby-1 Standing": 8,
    "Ground Floor Lobby-2 Walking": 9,
    "Ground Floor Lobby-2 Standing": 7,
  },
  {
    hour: "13:00",
    "Ground Floor Lobby-1 Walking": 9,
    "Ground Floor Lobby-1 Standing": 7,
    "Ground Floor Lobby-2 Walking": 8,
    "Ground Floor Lobby-2 Standing": 6,
  },
  {
    hour: "14:00",
    "Ground Floor Lobby-1 Walking": 7,
    "Ground Floor Lobby-1 Standing": 5,
    "Ground Floor Lobby-2 Walking": 6,
    "Ground Floor Lobby-2 Standing": 4,
  },
  {
    hour: "15:00",
    "Ground Floor Lobby-1 Walking": 8,
    "Ground Floor Lobby-1 Standing": 6,
    "Ground Floor Lobby-2 Walking": 7,
    "Ground Floor Lobby-2 Standing": 4,
  },
  {
    hour: "16:00",
    "Ground Floor Lobby-1 Walking": 11,
    "Ground Floor Lobby-1 Standing": 8,
    "Ground Floor Lobby-2 Walking": 10,
    "Ground Floor Lobby-2 Standing": 7,
  },
  {
    hour: "17:00",
    "Ground Floor Lobby-1 Walking": 14,
    "Ground Floor Lobby-1 Standing": 9,
    "Ground Floor Lobby-2 Walking": 13,
    "Ground Floor Lobby-2 Standing": 8,
  },
  {
    hour: "18:00",
    "Ground Floor Lobby-1 Walking": 9,
    "Ground Floor Lobby-1 Standing": 5,
    "Ground Floor Lobby-2 Walking": 8,
    "Ground Floor Lobby-2 Standing": 4,
  },
  {
    hour: "19:00",
    "Ground Floor Lobby-1 Walking": 6,
    "Ground Floor Lobby-1 Standing": 3,
    "Ground Floor Lobby-2 Walking": 5,
    "Ground Floor Lobby-2 Standing": 2,
  },
  {
    hour: "20:00",
    "Ground Floor Lobby-1 Walking": 4,
    "Ground Floor Lobby-1 Standing": 2,
    "Ground Floor Lobby-2 Walking": 3,
    "Ground Floor Lobby-2 Standing": 1,
  },
  {
    hour: "21:00",
    "Ground Floor Lobby-1 Walking": 3,
    "Ground Floor Lobby-1 Standing": 1,
    "Ground Floor Lobby-2 Walking": 2,
    "Ground Floor Lobby-2 Standing": 1,
  },
  {
    hour: "22:00",
    "Ground Floor Lobby-1 Walking": 2,
    "Ground Floor Lobby-1 Standing": 1,
    "Ground Floor Lobby-2 Walking": 1,
    "Ground Floor Lobby-2 Standing": 1,
  },
  {
    hour: "23:00",
    "Ground Floor Lobby-1 Walking": 1,
    "Ground Floor Lobby-1 Standing": 1,
    "Ground Floor Lobby-2 Walking": 1,
    "Ground Floor Lobby-2 Standing": 0,
  },
]

export const behaviorByZoneData = [
  { zone: "Ground Floor Lobby-1", walking: 65, standing: 35, color: "#3B82F6" },
  { zone: "Ground Floor Lobby-2", walking: 70, standing: 30, color: "#10B981" },
]

export const durationData = [
  { duration: "0-1 min", "Ground Floor Lobby-1": 45, "Ground Floor Lobby-2": 52 },
  { duration: "1-2 min", "Ground Floor Lobby-1": 32, "Ground Floor Lobby-2": 38 },
  { duration: "2-5 min", "Ground Floor Lobby-1": 18, "Ground Floor Lobby-2": 15 },
  { duration: "5-10 min", "Ground Floor Lobby-1": 8, "Ground Floor Lobby-2": 6 },
  { duration: "10+ min", "Ground Floor Lobby-1": 5, "Ground Floor Lobby-2": 3 },
]

export const crossLobbyMovement = [
  { time: "00:00-04:00", "Lobby-1 to Lobby-2": 8, "Lobby-2 to Lobby-1": 6 },
  { time: "04:00-08:00", "Lobby-1 to Lobby-2": 22, "Lobby-2 to Lobby-1": 18 },
  { time: "08:00-12:00", "Lobby-1 to Lobby-2": 35, "Lobby-2 to Lobby-1": 28 },
  { time: "12:00-16:00", "Lobby-1 to Lobby-2": 30, "Lobby-2 to Lobby-1": 22 },
  { time: "16:00-20:00", "Lobby-1 to Lobby-2": 20, "Lobby-2 to Lobby-1": 12 },
  { time: "20:00-00:00", "Lobby-1 to Lobby-2": 9, "Lobby-2 to Lobby-1": 4 },
]

export const dwellTimeData = [
  { location: "Ground Floor Lobby-1", time: 3.5 },
  { location: "Ground Floor Lobby-2", time: 2.8 },
]

export const staffMovementPatterns = [
  { pattern: "Ground Floor Lobby-1 → Ground Floor Lobby-2", count: 124, percentage: 58 },
  { pattern: "Ground Floor Lobby-2 → Ground Floor Lobby-1", count: 90, percentage: 42 },
]