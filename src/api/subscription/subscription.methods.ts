import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { apiMethodInstance } from "../http.service";
import type {
  EditSubscriptionGroupPayload,
  GetSubscriptionsFromShareLinkParams,
  GetGroupShareLinkParams,
  GetGroupShareLinkResponse,
  GetSubscriptionsInfoResponse,
  GetSubscriptionsListParams,
  GetSubscriptionsListResponse,
  PostAddSubscriptionGroupPayload,
  PostSubscriptionGroupPayload,
  SubscriptionType,
  SubscriptionsGroupType,
} from "./subscription.types";

export const getSubscriptionsInfo = (): Promise<GetSubscriptionsInfoResponse> =>
  apiMethodInstance<GetSubscriptionsInfoResponse>({
    url: ApiEndpoints.SUBSCRIPTIONS_INFO,
    method: Methods.GET,
  });

export const getSubscriptionsList = (
  params: GetSubscriptionsListParams,
): Promise<GetSubscriptionsListResponse> =>
  apiMethodInstance<GetSubscriptionsListResponse>({
    url: ApiEndpoints.SUBSCRIPTIONS_LIST,
    method: Methods.GET,
    params,
  });

export const postSubscriptionsGroup = (
  data: PostSubscriptionGroupPayload,
): Promise<SubscriptionsGroupType> =>
  apiMethodInstance<SubscriptionsGroupType>({
    url: ApiEndpoints.GROUPS,
    method: Methods.POST,
    data,
  });

export const editSubscriptionsGroup = ({
  id,
  ...restData
}: EditSubscriptionGroupPayload): Promise<SubscriptionsGroupType> =>
  apiMethodInstance<SubscriptionsGroupType>({
    url: `${ApiEndpoints.GROUPS}${id}/`,
    method: Methods.PATCH,
    data: restData,
  });

export const deleteSubscriptionsGroup = (id: number): Promise<object> =>
  apiMethodInstance<object>({
    url: `${ApiEndpoints.GROUPS}${id}/`,
    method: Methods.DELETE,
  });

export const getSubscriptionsGroup = (
  id: number,
): Promise<SubscriptionsGroupType> =>
  apiMethodInstance<SubscriptionsGroupType>({
    url: `${ApiEndpoints.GROUPS}${id}/`,
    method: Methods.GET,
  });

export const getSubscriptionsGroups = (): Promise<SubscriptionsGroupType[]> =>
  apiMethodInstance<SubscriptionsGroupType[]>({
    url: ApiEndpoints.GROUPS,
    method: Methods.GET,
  });

export const postAddSubscriptionGroup = ({
  groupId,
  ...restData
}: PostAddSubscriptionGroupPayload): Promise<SubscriptionType> =>
  apiMethodInstance<SubscriptionType>({
    url: ApiEndpoints.ADD_SUBSCRIPTION_GROUP.replace(
      "{groupId}",
      String(groupId),
    ),
    method: Methods.POST,
    data: restData,
  });

export const deleteSubscriptionFromGroup = (
  subscriptionId: number,
): Promise<void> =>
  apiMethodInstance<void>({
    url: ApiEndpoints.REMOVE_SUBSCRIPTION_GROUP.replace(
      "{subscriptionId}",
      String(subscriptionId),
    ),
    method: Methods.DELETE,
  });

export const getGroupShareLink = (
  params: GetGroupShareLinkParams,
): Promise<GetGroupShareLinkResponse> =>
  apiMethodInstance({
    url: ApiEndpoints.GET_GROUP_SHARE_LINK,
    method: Methods.GET,
    params,
  });

export const getSubscriptionsFromShareLink = (
  params: GetSubscriptionsFromShareLinkParams,
): Promise<SubscriptionType[]> =>
  apiMethodInstance({
    url: ApiEndpoints.GET_SUBSCRIPTIONS_FROM_SHARE_LINK,
    method: Methods.GET,
    params,
  });
