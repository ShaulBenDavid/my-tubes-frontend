import { z } from "zod";

export const moveToGroupSchema = z.object({
  subscriptionId: z
    .number({
      required_error: "Subscription is required",
    })
    .max(255)
    .nullable(),
  groupId: z
    .number({
      required_error: "Group is required",
    })
    .max(255)
    .nullable(),
});
