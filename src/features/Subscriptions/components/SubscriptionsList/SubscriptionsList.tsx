"use client";

import React from "react";
import { ChannelCard, ChannelCardLoader } from "../ChannelCard";
import type { SubscriptionType } from "@/src/api/subscription/subscription.types";

interface SubscriptionsListProps {
  data: SubscriptionType[];
  isLoading: boolean;
}

export const SubscriptionsList = ({
  data,
  isLoading,
}: SubscriptionsListProps): JSX.Element => (
  <div className="flex h-full w-96 snap-y snap-mandatory flex-col gap-4 overflow-y-auto ">
    {isLoading && <ChannelCardLoader />}
    {!!data.length &&
      data.map(({ title, description, imageUrl, channelId }) => (
        <ChannelCard
          key={title}
          title={title}
          description={description}
          imageUrl={imageUrl}
          channelId={channelId}
        />
      ))}
  </div>
);
