"use client";

import React from "react";
import { useGetSubscriptionsInfo } from "@/src/api/subscription/hooks";
import { SubscriptionsList } from "./components/SubscriptionsList";
import { Header } from "./components/Header";
import { GroupsSection } from "./components/GroupsSection";

export const Subscriptions = (): JSX.Element => {
  const { subscriptionsInfo } = useGetSubscriptionsInfo();

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <Header
        subscriptionsCount={subscriptionsInfo?.subscriptionsCount ?? "--"}
        lastSyncDate={subscriptionsInfo?.lastSyncDate}
      />
      <div className="flex h-full w-full flex-row gap-4 overflow-hidden">
        <SubscriptionsList />
        <GroupsSection />
      </div>
    </div>
  );
};
