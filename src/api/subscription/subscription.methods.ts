import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { apiMethodInstance } from "../http.service";
import type {
  EditSubscriptionGroupPayload,
  GetSubscriptionsInfoResponse,
  GetSubscriptionsListParams,
  GetSubscriptionsListResponse,
  PostSubscriptionGroupPayload,
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

export const getSubscriptionsGroups = (): Promise<SubscriptionsGroupType[]> =>
  apiMethodInstance<SubscriptionsGroupType[]>({
    url: ApiEndpoints.GROUPS,
    method: Methods.GET,
  });
