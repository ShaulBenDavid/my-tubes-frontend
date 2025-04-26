export enum ApiEndpoints {
  // AUTH
  LOGIN = "user/auth/login/google/",
  REFRESH = "user/auth/token/",

  // USER
  USER_INFO = "user/info/",
  USER_LIST = "user/list/",
  USER_PROFILE = "user/profile/",
  USER_CUSTOM_LINKS = "user/custom-links/",

  // SUBSCRIPTIONS
  SUBSCRIPTIONS_INFO = "subscribe/info/",
  SUBSCRIPTIONS_LIST = "subscribe/list/",
  GET_SUBSCRIPTIONS_FROM_SHARED_LINK = "subscribe/shared-subscriptions/",
  GET_GROUP_INFO_FROM_SHARED_LINK = "subscribe/shared-group/info/",

  // GROUPS
  GROUPS = "subscribe/groups/",
  GROUPS_DETAILED = "subscribe/groups/detailed/",
  ADD_SUBSCRIPTION_GROUP = "subscribe/groups/{groupId}/add-subscription/",
  REMOVE_SUBSCRIPTION_GROUP = "subscribe/subs/{subscriptionId}/ungroup-subscription/",
  GET_GROUP_SHARE_LINK = "subscribe/group-share-link/",

  // PUBLIC - Open to all users
  USER_PUBLIC_GROUPS = "subscribe/user/groups/{username}/",
  PUBLIC_GROUP_INFO = "subscribe/public-user/{userId}/group/{groupId}/info/",
  PUBLIC_GROUP_SUBSCRIPTIONS = "subscribe/public-user/{userId}/group/{groupId}/subscriptions/",
}
