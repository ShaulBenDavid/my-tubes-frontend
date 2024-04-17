import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { apiMethodInstance } from "../http.service";
import type { GetSubscriptionsInfoResponse } from "./subscription.types";

export const getSubscriptionsInfo = (): Promise<GetSubscriptionsInfoResponse> =>
  apiMethodInstance<GetSubscriptionsInfoResponse>({
    url: ApiEndpoints.SUBSCRIPTIONS_INFO,
    method: Methods.GET,
  });
