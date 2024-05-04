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
};

export type SubscriptionsGroupType = {
  id: number;
  title: string;
  description: string;
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
