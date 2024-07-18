"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Spinner } from "@/src/components/Spinner/Spinner";

const CallbackPage = dynamic(
  () => import("@/src/features/CallbackPage").then((mod) => mod.CallbackPage),
  {
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
    ),
    ssr: false,
  },
);

const Google = (): JSX.Element => <CallbackPage />;

export default Google;
