"use client";

import React from "react";
import { useGetSubscriptionsInfo } from "@/src/api/subscription/hooks";
import { ChannelCardLoader } from "../ChannelCard";

export const SubscriptionsList = (): JSX.Element => {
  const { subscriptionsInfo, isSubscriptionsLoading } =
    useGetSubscriptionsInfo();
  console.log(subscriptionsInfo);

  return (
    <div className="flex h-full w-96 snap-y snap-mandatory flex-col gap-4 overflow-y-auto ">
      {isSubscriptionsLoading && <ChannelCardLoader />}
      {/* {subscriptionsList?.subscriptions &&
        subscriptionsList?.subscriptions.map(
          ({ title, description, imageUrl, channelId }) => (
            <ChannelCard
              key={channelId}
              title={title}
              description={description}
              imageUrl={imageUrl}
              channelId={channelId}
            />
          ),
        )} */}
    </div>
  );
};
