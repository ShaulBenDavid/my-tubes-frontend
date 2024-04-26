import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { apiMethodInstance } from "../http.service";
import type {
  GetSubscriptionsInfoResponse,
  GetSubscriptionsListParams,
  GetSubscriptionsListResponse,
  PostSubscriptionGroup,
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
  data: PostSubscriptionGroup,
): Promise<SubscriptionsGroupType> =>
  apiMethodInstance<SubscriptionsGroupType>({
    url: ApiEndpoints.GROUPS,
    method: Methods.POST,
    data,
  });
