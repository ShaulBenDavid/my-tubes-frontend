"use client";

import { useContext, useLayoutEffect } from "react";
import { dwInstance } from "./http.service";
import {
  axiosRequest,
  errInterceptor,
  resInterceptor,
} from "./axiosinterceptor.utils";
import { AuthContext } from "../context/auth";
import { useLogout, useRefresh } from "./auth/hooks";
import type { AuthResponseType } from "./auth";

export const AxiosInterceptor = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const { auth, handleLogout, setAuth } = useContext(AuthContext);
  const { logout } = useLogout({ handleSuccess: handleLogout });

  const handleSuccess = (res: AuthResponseType): void => {
    setAuth(res);
  };

  const { refresh } = useRefresh({
    handleSuccess,
    handleLogout: logout,
    enabled: false,
  });

  useLayoutEffect(() => {
    const reqInterceptor = dwInstance.interceptors.request.use((config) =>
      axiosRequest(config, auth?.accessToken, auth?.googleToken),
    );

    const responseInterceptor = dwInstance.interceptors.response.use(
      resInterceptor,
      (error) => errInterceptor(error, refresh, auth?.accessToken),
    );

    return () => {
      dwInstance.interceptors.request.eject(reqInterceptor);
      dwInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [auth?.accessToken, auth?.googleToken, refresh]);
  return children;
};
