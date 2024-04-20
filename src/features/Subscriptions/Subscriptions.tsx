"use client";

import React from "react";
import { useGetSubscriptionsList } from "@/src/api/subscription/hooks";
import { SubscriptionsList } from "./components/SubscriptionsList";

export const Subscriptions = (): JSX.Element => {
  const { subscriptionsList, subscriptionsCount, isSubscriptionsLoading } =
    useGetSubscriptionsList();

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <h1 className="pb-2 text-xl font-semibold">
        Subscriptions <span>({subscriptionsCount ?? 0})</span>
      </h1>
      <SubscriptionsList
        data={subscriptionsList ?? []}
        isLoading={isSubscriptionsLoading}
      />
    </div>
  );
};
