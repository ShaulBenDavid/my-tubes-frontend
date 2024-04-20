"use client";

import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { SkeletonTheme } from "react-loading-skeleton";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { QueryProvider } from "./query.provider";
import { AxiosInterceptor } from "../api";
import { AuthContextProvider } from "../context/auth";
import { AuthProvider } from "./auth.provider";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-tooltip/dist/react-tooltip.css";
import theme from "../styles/tailwind.theme";

const MAX_NUMBER_DISPLAYED_TOASTS = 4;

export const AppProviders = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <QueryProvider>
    <AuthContextProvider>
      <AxiosInterceptor>
        <AuthProvider>
          <SkeletonTheme baseColor="#282828" highlightColor="#48484833">
            {children}
            <ToastContainer
              limit={MAX_NUMBER_DISPLAYED_TOASTS}
              stacked
              position="top-left"
            />
          </SkeletonTheme>
          <Suspense fallback={null}>
            <ProgressBar
              height="4px"
              color={theme.primary[200]}
              options={{ showSpinner: false }}
              shallowRouting
            />
          </Suspense>
        </AuthProvider>
      </AxiosInterceptor>
    </AuthContextProvider>
  </QueryProvider>
);
