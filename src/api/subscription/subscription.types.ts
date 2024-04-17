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
