import type { PaginationParams, PaginationType } from "../common.types";

export interface SubscriptionType {
  id: number;
  title: string;
  description: string;
  channelId: string;
  imageUrl: string;
}

export interface GetSubscriptionsInfoResponse {
  subscriptionsCount: number;
  lastSyncDate: Date;
}

export type GetSubscriptionsListResponse = PaginationType<SubscriptionType>;

export enum SubscriptionsListSortEnum {
  ASCENDING = "title",
  DESCENDING = "-title",
}

export type GetSubscriptionsListParams = PaginationParams & {
  ordering?: SubscriptionsListSortEnum;
  search?: string;
  group?: number | "ungroup";
};

export type SubscriptionsGroupType = {
  id: number;
  title: string;
  description?: string | null;
  subscriptionCount: number;
};

export type PostSubscriptionGroupPayload = Pick<
  SubscriptionsGroupType,
  "title" | "description"
>;

export type EditSubscriptionGroupPayload = Omit<
  SubscriptionsGroupType,
  "subscriptionCount"
>;

export type PostAddSubscriptionGroupPayload = Record<
  `${"subscription" | "group"}Id`,
  number
>;
