import { SubscriptionsListSortEnum } from "@/src/api/subscription/subscription.types";

export const subscriptionsListSortConfig = [
  { label: "A-z", value: SubscriptionsListSortEnum.ASCENDING },
  { label: "Z-a", value: SubscriptionsListSortEnum.DESCENDING },
];
