import {z} from "zod"

export const messageSchema = z.object({
    content: z
    .string()
    .min(2, {message: "content must be at least 2 characters"})
    .max(300, {message: "content no longer than 300 characters"})
})