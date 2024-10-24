import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { apiMethodInstance } from "../http.service";
import type { UserInfoType, UserProfileType } from "./user.types";

export const getUserInfo = (): Promise<UserInfoType> =>
  apiMethodInstance<UserInfoType>({
    url: ApiEndpoints.USER_INFO,
    method: Methods.GET,
  });

export const getUserProfile = (): Promise<UserProfileType> =>
  apiMethodInstance<UserProfileType>({
    url: ApiEndpoints.USER_PROFILE,
    method: Methods.GET,
  });

export const patchUserProfile = (
  data: UserProfileType,
): Promise<UserProfileType> =>
  apiMethodInstance<UserProfileType>({
    url: ApiEndpoints.USER_PROFILE,
    method: Methods.PATCH,
    data,
  });

export const deleteUser = (): Promise<UserProfileType> =>
  apiMethodInstance<UserProfileType>({
    url: ApiEndpoints.USER_PROFILE,
    method: Methods.DELETE,
  });
