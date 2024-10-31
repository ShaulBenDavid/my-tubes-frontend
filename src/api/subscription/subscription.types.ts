import type { PaginationParams, PaginationType } from "../common.types";

export type SubscriptionsGroupType = {
  id: number;
  title: string;
  description?: string | null;
  emoji?: string | null;
  subscriptionCount: number;
  isPublic: boolean;
};

export interface SubscriptionType {
  id: number;
  title: string;
  description: string;
  channelId: string;
  imageUrl: string;
  group?: Pick<SubscriptionsGroupType, "id" | "title"> | null;
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

export type PostSubscriptionGroupPayload = Pick<
  SubscriptionsGroupType,
  "title" | "description"
>;

export type EditSubscriptionGroupPayload = Partial<SubscriptionsGroupType> &
  Required<Pick<SubscriptionsGroupType, "id">>;

export type PostAddSubscriptionGroupPayload = Record<
  `${"subscription" | "group"}Id`,
  number
>;

export type GetGroupShareLinkParams = {
  path: string;
  groupId: number;
};

export type GetGroupShareLinkResponse = {
  link: string;
};

export type DetailedGroup = {
  id: number;
  title: string;
  emoji?: string | null;
  subscriptionsCount: number;
  subscriptions: Omit<SubscriptionType, "group">[];
};

export type GetGroupDetailedList = PaginationType<DetailedGroup>;
