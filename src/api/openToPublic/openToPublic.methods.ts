import { buildRoutePath } from "@/src/utils";
import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { publicMethodInstance } from "../http.service";
import type { SubscriptionType } from "../subscription";
import type {
  GetPublicUserInfo,
  GetSharedGroupInfoResponse,
  SharedLinkParams,
} from "./openToPublic.types";

export const getSubscriptionsFromShareLink = (
  params: SharedLinkParams,
): Promise<Omit<SubscriptionType, "group">[]> =>
  publicMethodInstance({
    url: ApiEndpoints.GET_SUBSCRIPTIONS_FROM_SHARED_LINK,
    method: Methods.GET,
    params,
  });

export const getGroupInfoFromShareLink = (
  params: SharedLinkParams,
): Promise<GetSharedGroupInfoResponse> =>
  publicMethodInstance({
    url: ApiEndpoints.GET_GROUP_INFO_FROM_SHARED_LINK,
    method: Methods.GET,
    params,
  });

export const getPublicUserInfo = (
  username: string,
): Promise<GetPublicUserInfo> =>
  publicMethodInstance<GetPublicUserInfo>({
    url: buildRoutePath(ApiEndpoints.USER_PROFILE, username),
    method: Methods.GET,
  });
