"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useGetSubscriptionsInfo } from "@/src/api/subscription/hooks";
import { Spinner } from "@/src/components/Spinner";
import { Header } from "./components/Header";
import { SubscriptionsList } from "./components/SubscriptionsList";
import { useMediaQuery } from "@/src/hooks";

const GroupsSection = dynamic(
  () => import("./components/GroupsSection").then((mod) => mod.GroupsSection),
  {
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
    ),
    ssr: false,
  },
);

export const Subscriptions = (): JSX.Element => {
  const { subscriptionsInfo } = useGetSubscriptionsInfo();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Header
        subscriptionsCount={subscriptionsInfo?.subscriptionsCount ?? "--"}
        lastSyncDate={subscriptionsInfo?.lastSyncDate}
      />
      <div className="flex h-full w-full flex-row gap-4 overflow-hidden">
        <SubscriptionsList isDesktop={isDesktop} />
        {isDesktop && <GroupsSection />}
      </div>
    </>
  );
};
