import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { apiMethodInstance, refreshMethodInstance } from "../http.service";
import type { LoginParamsType, AuthResponseType } from "./auth.types";

export const login = (params: LoginParamsType): Promise<AuthResponseType> =>
  apiMethodInstance<AuthResponseType>({
    url: ApiEndpoints.LOGIN,
    method: Methods.GET,
    params,
  });

export const logout = (): Promise<void> =>
  refreshMethodInstance<void>({
    url: ApiEndpoints.LOGOUT,
    method: Methods.DELETE,
  });

export const refresh = (): Promise<AuthResponseType> =>
  refreshMethodInstance<AuthResponseType>({
    url: ApiEndpoints.REFRESH,
    method: Methods.GET,
  });
