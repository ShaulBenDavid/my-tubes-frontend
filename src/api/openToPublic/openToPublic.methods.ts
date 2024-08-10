import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { publicMethodInstance } from "../http.service";
import type { SubscriptionType } from "../subscription";
import type { GetSubscriptionsFromShareLinkParams } from "./openToPublic.types";

export const getSubscriptionsFromShareLink = (
  params: GetSubscriptionsFromShareLinkParams,
): Promise<SubscriptionType[]> =>
  publicMethodInstance({
    url: ApiEndpoints.GET_SUBSCRIPTIONS_FROM_SHARE_LINK,
    method: Methods.GET,
    params,
  });
