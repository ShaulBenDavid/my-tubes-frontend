import type { PaginationParams, PaginationType } from "../common.types";

export interface SubscriptionType {
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
};

export type SubscriptionsGroupType = {
  id: number;
  title: string;
  description: string;
  subscriptionCount: number;
};

export type PostSubscriptionGroup = Pick<
  SubscriptionsGroupType,
  "title" | "description"
>;
