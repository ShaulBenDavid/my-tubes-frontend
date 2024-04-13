export interface SubscriptionType {
  title: string;
  description: string;
  channel_id: string;
  image_url: string;
}

export interface GetSubscriptionsListResponse {
  subscriptions: SubscriptionType[];
  last_sync_date: Date;
}
