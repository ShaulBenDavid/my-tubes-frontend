export enum ApiEndpoints {
  // AUTH
  LOGIN = "user/auth/login/google/",
  REFRESH = "user/auth/token/",
  // USER
  USER_INFO = "user/info/",
  // SUBSCRIPTIONS
  SUBSCRIPTIONS_INFO = "subscribe/info/",
  SUBSCRIPTIONS_LIST = "subscribe/list/",
  // GROUPS
  GROUPS = "subscribe/groups/",
  ADD_SUBSCRIPTION_GROUP = "subscribe/groups/{groupId}/add-subscription/",
}
