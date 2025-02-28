import { z } from "zod";

export const profileSchema = z.object({
  username: z.string(),
  description: z
    .string({
      required_error: "Description is required",
    })
    .trim()
    .max(255, "Description can be long than 255 characters")
    .nullable(),
  instagramUrl: z
    .string()
    .url({ message: "Invalid Instagram URL" })
    .optional()
    .nullable(),
  twitterUrl: z.string().url({ message: "Invalid Twitter URL" }).nullable(),
  linkedinUrl: z.string().url({ message: "Invalid LinkedIn URL" }).nullable(),
  tiktokUrl: z.string().url({ message: "Invalid TikTok URL" }).nullable(),
  telegramUrl: z.string().url({ message: "Invalid Telegram URL" }).nullable(),
  youtubeUrl: z.string().url({ message: "Invalid YouTube URL" }).nullable(),
  isPublic: z.boolean(),
});
