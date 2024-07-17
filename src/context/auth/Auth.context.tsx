"use client";

import type { Dispatch, SetStateAction } from "react";
import React, { createContext, useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { AuthResponseType } from "@/src/api/auth";
import { appQueryClient } from "@/src/queries";
import { dwInstance } from "@/src/api/http.service";

export type Auth = AuthResponseType | null | undefined;

type AuthContextObj = {
  auth: Auth;
  isAuth: boolean;
  isAuthInitialized: boolean;
  setAuth: Dispatch<SetStateAction<Auth>>;
  handleLogout: () => void;
};

export const AuthContext = createContext({} as AuthContextObj);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [auth, setAuth] = useState<Auth>();
  const router = useRouter();

  const handleLogout = useCallback(async (): Promise<void> => {
    dwInstance.defaults.headers.Authorization = null;
    await appQueryClient.clear();
    await appQueryClient.removeQueries();
    await appQueryClient.resetQueries();
    await appQueryClient.cancelQueries();
    router.refresh();
    setAuth(null);
  }, [router]);

  const value = useMemo(
    (): AuthContextObj => ({
      auth,
      isAuth: !!auth?.accessToken,
      isAuthInitialized: auth !== undefined,
      setAuth,
      handleLogout,
    }),
    [auth, handleLogout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
