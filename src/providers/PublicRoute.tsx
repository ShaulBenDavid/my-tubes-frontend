"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/src/context/auth";
import { Routes } from "../routes";

interface PublicRouteProps {
  defaultRoute?: Routes;
  children: React.ReactNode;
}

export const PublicRoute = ({
  defaultRoute = Routes.DASHBOARD,
  children,
}: PublicRouteProps): JSX.Element | null => {
  const { isAuth } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.push(defaultRoute);
    }
  }, [router, isAuth, defaultRoute]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isAuth ? <></> : <>{children}</>;
};
