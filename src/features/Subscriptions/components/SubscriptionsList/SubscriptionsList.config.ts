import { SubscriptionsListSortEnum } from "@/src/api/subscription/subscription.types";

export interface SubscriptionsSortOptionType {
  label: string;
  value: SubscriptionsListSortEnum;
}

export const subscriptionsListSortConfig: SubscriptionsSortOptionType[] = [
  { label: "A-z", value: SubscriptionsListSortEnum.ASCENDING },
  { label: "Z-a", value: SubscriptionsListSortEnum.DESCENDING },
];
