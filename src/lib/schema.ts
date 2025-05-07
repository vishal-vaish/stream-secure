import {z} from 'zod';

export const loginSchema = z.object({
  username: z.string().max(50),
  password: z.string().min(6).max(80),
})

export type loginSchemaType = z.infer<typeof loginSchema>;
