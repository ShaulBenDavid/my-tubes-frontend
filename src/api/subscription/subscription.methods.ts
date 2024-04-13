import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { apiMethodInstance } from "../http.service";
import type { GetSubscriptionsListResponse } from "./subscription.types";

export const getSubscriptionsList = (): Promise<GetSubscriptionsListResponse> =>
  apiMethodInstance<GetSubscriptionsListResponse>({
    url: ApiEndpoints.SUBSCRIPTIONS_LIST,
    method: Methods.GET,
  });
