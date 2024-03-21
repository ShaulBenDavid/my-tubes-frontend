import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { apiMethodInstance } from "../http.service";
import type { UserInfoType } from "./user.types";

export const getUserInfo = (): Promise<UserInfoType> =>
  apiMethodInstance<UserInfoType>({
    url: ApiEndpoints.USER_INFO,
    method: Methods.GET,
  });
