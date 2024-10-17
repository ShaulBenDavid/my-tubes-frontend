import { z } from "zod";

export const profileSchema = z.object({
  username: z.string(),
  instagramUrl: z
    .string()
    .url({ message: "Invalid Instagram URL" })
    .optional()
    .nullable(),
  twitterUrl: z.string().url({ message: "Invalid Twitter URL" }).nullable(),
  linkedinUrl: z.string().url({ message: "Invalid LinkedIn URL" }).nullable(),
  youtubeUrl: z.string().url({ message: "Invalid YouTube URL" }).nullable(),
});
