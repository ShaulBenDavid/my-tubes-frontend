import { z } from "zod";

export const profileSchema = z
  .object({
    instagram_url: z
      .string()
      .url({ message: "Invalid Instagram URL" })
      .nullable(),
    twitter_url: z.string().url({ message: "Invalid Twitter URL" }).nullable(),
    linkedin_url: z
      .string()
      .url({ message: "Invalid LinkedIn URL" })
      .nullable(),
    youtube_url: z.string().url({ message: "Invalid YouTube URL" }).nullable(),
  })
  .partial();
