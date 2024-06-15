"use client";

import React, { type ReactNode, useContext } from "react";
import { AuthContext } from "../context/auth";
import { useLogout, useRefresh } from "../api/auth/hooks";
import type { AuthResponseType } from "../api/auth";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({
  children,
}: AuthProviderProps): JSX.Element | null => {
  const { handleLogout, setAuth, isAuthInitialized } = useContext(AuthContext);

  const { logout } = useLogout({ handleSuccess: handleLogout });

  const handleSuccess = (res: AuthResponseType): void => {
    setAuth(res);
  };

  useRefresh({
    handleSuccess,
    handleLogout: logout,
    enabled: !isAuthInitialized,
  });
  if (!isAuthInitialized) return <div />;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
