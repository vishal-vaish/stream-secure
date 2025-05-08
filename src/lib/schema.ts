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
