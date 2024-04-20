import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import type { PaginationParams } from "../common.types";
import { apiMethodInstance } from "../http.service";
import type {
  GetSubscriptionsInfoResponse,
  GetSubscriptionsListResponse,
} from "./subscription.types";

export const getSubscriptionsInfo = (): Promise<GetSubscriptionsInfoResponse> =>
  apiMethodInstance<GetSubscriptionsInfoResponse>({
    url: ApiEndpoints.SUBSCRIPTIONS_INFO,
    method: Methods.GET,
  });

export const getSubscriptionsList = (
  params: PaginationParams,
): Promise<GetSubscriptionsListResponse> =>
  apiMethodInstance<GetSubscriptionsListResponse>({
    url: ApiEndpoints.SUBSCRIPTIONS_LIST,
    method: Methods.GET,
    params,
  });
