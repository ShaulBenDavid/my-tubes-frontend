"use client";

import React from "react";
import { useGetSubscriptionsInfo } from "@/src/api/subscription/hooks";
import { formatDateToCustomFormat } from "@/src/utils";
import { SubscriptionsList } from "./components/SubscriptionsList";

export const Subscriptions = (): JSX.Element => {
  const { subscriptionsInfo } = useGetSubscriptionsInfo();

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="flex flex-row justify-between pb-2">
        <h1 className="text-xl font-semibold">
          Subscriptions{" "}
          <span>({subscriptionsInfo?.subscriptionsCount ?? 0})</span>
        </h1>
        {subscriptionsInfo && (
          <span>
            last sync:{" "}
            <time className="font-bold">
              {formatDateToCustomFormat(
                new Date(subscriptionsInfo.lastSyncDate),
              )}
            </time>
          </span>
        )}
      </div>
      <SubscriptionsList />
    </div>
  );
};
