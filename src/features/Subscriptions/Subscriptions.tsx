"use client";

import React from "react";
import { useGetSubscriptionsInfo } from "@/src/api/subscription/hooks";
import { formatDateToCustomFormat } from "@/src/utils";
import { InfoTooltip } from "@/src/components/InfoTooltip";
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
          <div className="flex flex-row gap-2">
            <span>
              last sync:{" "}
              <time className="font-bold">
                {formatDateToCustomFormat(
                  new Date(subscriptionsInfo.lastSyncDate),
                )}
              </time>
            </span>
            <InfoTooltip title="Last Sync: This indicates the most recent time we synchronized your subscribers with your YouTube account." />
          </div>
        )}
      </div>
      <SubscriptionsList />
    </div>
  );
};
