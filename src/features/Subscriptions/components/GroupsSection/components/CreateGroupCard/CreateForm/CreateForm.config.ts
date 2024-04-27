import { z } from "zod";

export const groupDetailsSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .trim()
    .min(1)
    .max(100, "Title can be long than 100 characters")
    .refine(
      (value) => /^[A-Za-z\s]*$/.test(value),
      "only english letters allowed",
    ),
  description: z
    .string({
      required_error: "Title is required",
    })
    .trim()
    .min(1)
    .max(255, "Description can be long than 255 characters"),
});
