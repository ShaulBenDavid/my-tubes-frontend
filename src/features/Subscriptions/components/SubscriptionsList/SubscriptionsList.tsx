"use client";

import React from "react";
import { useGetSubscriptions } from "@/src/api/subscription/hooks";
import { ChannelCard } from "../ChannelCard";

export const SubscriptionsList = (): JSX.Element => {
  const { subscriptionsList } = useGetSubscriptions();

  return (
    <div className="h-full w-96 overflow-y-auto">
      {subscriptionsList?.subscriptions && (
        <ChannelCard
          title={subscriptionsList.subscriptions[0].title}
          description={subscriptionsList.subscriptions[0].description}
          imageUrl={subscriptionsList.subscriptions[0].image_url}
          channelId={subscriptionsList.subscriptions[0].channel_id}
        />
      )}
    </div>
  );
};
