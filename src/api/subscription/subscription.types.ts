export interface SubscriptionType {
  title: string;
  description: string;
  channelId: string;
  imageUrl: string;
}

export interface GetSubscriptionsListResponse {
  subscriptions: SubscriptionType[];
  lastSyncDate: Date;
}
