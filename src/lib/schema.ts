import {z} from 'zod';

export const loginSchema = z.object({
  username: z.string().max(50),
  password: z.string().min(6).max(80),
})

export type loginSchemaType = z.infer<typeof loginSchema>;

const StorageTypeEnum = z.enum(['Local Storage', 'Network Storage', 'Cloud Storage']);

const RetentionPolicySchema = z.object({
  enableAutoDelete: z.boolean().default(false),
  autoDeleteOlderThan: z.number().int().positive().optional(),
  timeUnit: z.enum(['Hours', 'Days', 'Weeks', 'Months']).optional()
}).refine((data) => {
  if (data.enableAutoDelete) {
    return !!data.autoDeleteOlderThan && !!data.timeUnit;
  }
  return true;
}, {
  message: "Time value and unit are required when auto-delete is enabled",
  path: ["autoDeleteOlderThan"]
});

const AdvancedOptionsSchema = z.object({
  setPrimaryStorage: z.boolean().default(false),
  useAsBackupOnly: z.boolean().default(false)
});

export const createStorageSchema = z.object({
  storageName: z
    .string()
    .min(1, "Storage Name is required"),
  storageType: StorageTypeEnum,
  ipAddress: z
    .string()
    .min(1, "IP Address/Hostname is required"),
  path: z
    .string()
    .min(1, "Path is required"),
  authentication: z.object({
    username: z.string(),
    password: z.string()
  }),
  storageCapacity: z
    .number()
    .positive("Storage capacity must be greater than 0")
    .min(1),
  retentionSettings: RetentionPolicySchema,
  advancedOptions: AdvancedOptionsSchema.optional().default({
    setPrimaryStorage: false,
    useAsBackupOnly: false
  })
});

export type createStorageSchemaType = z.input<typeof createStorageSchema>;

export const manufacturerOptions = [
  "Hikvision",
  "Dahua",
] as const;

const MAC_REGEX = /^([0-9A-Fa-f]{2}:){5}([0-9A-Fa-f]{2})$/;
const IP_REGEX = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const PORT_REGEX = /^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;

export const createNVRDevicesSchema = z.object({
  name: z.string()
    .min(1, "NVR name is required"),
  location: z.string()
    .min(1, "Location is required"),
  manufacturer: z.enum(manufacturerOptions, {
    errorMap: () => ({message: "Please select a manufacturer"})
  }),
  model: z.string()
    .min(1, "Model is required")
    .max(50, "Model must be 50 characters or less"),

  ipAddress: z.string()
    .min(1, "IP Address is required")
    .refine(val => IP_REGEX.test(val), {
      message: "Invalid IP address format (e.g. 192.168.1.100)"
    }),

  macAddress: z.string()
    .min(1, "MAC Address is required")
    .refine(val => MAC_REGEX.test(val), {
      message: "Invalid MAC address format (e.g. 00:1b:44:11:3A:B7)"
    }),

  rtspPort: z.string()
    .min(1, "RTSP Port is required")
    .refine(val => PORT_REGEX.test(val), {
      message: "Port must be between 1-65535"
    }),

  httpPort: z.string()
    .min(1, "HTTP Port is required")
    .refine(val => PORT_REGEX.test(val), {
      message: "Port must be between 1-65535"
    }),

  username: z.string()
    .min(1, "Username is required")
    .max(30, "Username must be 30 characters or less"),

  password: z.string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must be 100 characters or less"),

  maxChannels: z.number({
    required_error: "Channel count is required",
    invalid_type_error: "Channel count must be a number"
  })
    .int("Channel count must be a whole number")
    .positive("Channel count must be positive")
    .max(16, "Maximum supported channels is 16"),

  storageCapacity: z.number({
    required_error: "Storage capacity is required",
    invalid_type_error: "Storage capacity must be a number"
  })
    .positive("Storage capacity must be positive")
    .max(1024, "Maximum storage capacity is 1024 TB")
});

export type createNVRDevicesSchemaType = z.infer<typeof createNVRDevicesSchema>;



