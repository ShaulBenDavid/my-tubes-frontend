export enum ApiEndpoints {
  // AUTH
  LOGIN = "user/auth/login/google/",
  REFRESH = "user/auth/token/",

  // USER
  USER_INFO = "user/info/",

  // SUBSCRIPTIONS
  SUBSCRIPTIONS_INFO = "subscribe/info/",
  SUBSCRIPTIONS_LIST = "subscribe/list/",
  GET_SUBSCRIPTIONS_FROM_SHARED_LINK = "subscribe/shared-subscriptions/",
  GET_GROUP_INFO_FROM_SHARED_LINK = "subscribe/shared-group/info/",

  // GROUPS
  GROUPS = "subscribe/groups/",
  ADD_SUBSCRIPTION_GROUP = "subscribe/groups/{groupId}/add-subscription/",
  REMOVE_SUBSCRIPTION_GROUP = "subscribe/subs/{subscriptionId}/ungroup-subscription/",
  GET_GROUP_SHARE_LINK = "subscribe/group-share-link/",
}
