import { buildRoutePath } from "@/src/utils";
import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { publicMethodInstance } from "../http.service";
import type { SubscriptionType } from "../subscription";
import type {
  GetPublicGroupInfoResponse,
  GetPublicGroupsParams,
  GetPublicUserInfo,
  GetSharedGroupInfoResponse,
  SharedLinkParams,
} from "./openToPublic.types";
import type { GetGroupDetailedList } from "../subscription/subscription.types";

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

export const getPublicGroupDetailedList = ({
  username,
  ...params
}: GetPublicGroupsParams): Promise<GetGroupDetailedList> =>
  publicMethodInstance<GetGroupDetailedList>({
    url: ApiEndpoints.USER_PUBLIC_GROUPS.replace("{username}", username),
    method: Methods.GET,
    params,
  });

export const getPublicGroupInfo = (
  userId: number,
  groupId: number,
): Promise<GetPublicGroupInfoResponse> =>
  publicMethodInstance<GetPublicGroupInfoResponse>({
    url: ApiEndpoints.PUBLIC_GROUP_INFO.replace(
      "{userId}",
      userId.toString(),
    ).replace("{groupId}", groupId.toString()),
    method: Methods.GET,
  });

export const getPublicGroupSubscriptions = (
  userId: number,
  groupId: number,
): Promise<Omit<SubscriptionType, "group">[]> =>
  publicMethodInstance<Omit<SubscriptionType, "group">[]>({
    url: ApiEndpoints.PUBLIC_GROUP_SUBSCRIPTIONS.replace(
      "{userId}",
      userId.toString(),
    ).replace("{groupId}", groupId.toString()),
    method: Methods.GET,
  });
