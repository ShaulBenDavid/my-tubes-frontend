"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/src/context/auth";
import { Routes } from "../routes";

interface ProtectedRouteProps {
  defaultRoute?: Routes;
  children: React.ReactNode;
}

export const ProtectedRoute = ({
  defaultRoute = Routes.SIGN_IN,
  children,
}: ProtectedRouteProps): JSX.Element | null => {
  const { isAuth } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.push(defaultRoute);
    }
  }, [router, isAuth, defaultRoute]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isAuth ? <>{children}</> : <></>;
};
