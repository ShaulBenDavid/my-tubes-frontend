import { z } from "zod";

export const moveToGroupSchema = z.object({
  subscriptionId: z
    .number({
      required_error: "Subscription is required",
    })
    .nullable(),
  groupId: z
    .number({
      required_error: "Group is required",
    })
    .nullable(),
});
