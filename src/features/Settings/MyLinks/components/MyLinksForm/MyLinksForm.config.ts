import { z } from "zod";

export const myLinksSchema = z.object({
  customUrls: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      url: z.string().url("Invalid URL"),
    }),
  ),
});
