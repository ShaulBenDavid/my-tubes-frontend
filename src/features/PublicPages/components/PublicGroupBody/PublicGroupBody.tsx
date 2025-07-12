"use client";

import React from "react";
import { EmptyState } from "@/src/components/EmptyState";
import { ChannelCard, ChannelCardLoader } from "@/src/components/ChannelCard";
import NoDataSVG from "@/src/assets/images/NoDataSVG.svg";
import type { SubscriptionType } from "@/src/api/subscription";

interface PublicGroupBodyProps {
  isLoading: boolean;
  subscriptions?: Omit<SubscriptionType, "group">[];
}

export const PublicGroupBody = ({
  isLoading,
  subscriptions,
}: PublicGroupBodyProps): JSX.Element => (
  <section
    className="flex w-full flex-col gap-2 sm:grid sm:grid-cols-tablet-groups-auto-fit sm:grid-rows-groups-row-fit
     tb:gap-3 tb:py-4 lg:grid-cols-groups-auto-fit"
  >
    {isLoading && <ChannelCardLoader />}
    {!isLoading && !subscriptions?.length && (
      <div className="col-span-full row-span-full flex h-full w-full items-center justify-center">
        <EmptyState svgUrl={NoDataSVG} header={"Couldn't find Channels."} />
      </div>
    )}
    {!!subscriptions?.length &&
      !isLoading &&
      subscriptions.map(
        ({ title, description, imageUrl, channelId, id }, index) => (
          <ChannelCard
            key={channelId + id}
            title={title}
            description={description}
            imageUrl={imageUrl}
            itemId={id}
            channelId={channelId}
            className="animate-[fadeIn_1s_ease-in_50ms_forwards] opacity-0 sm:h-44"
            style={{ animationDelay: `${index * 0.07}s` }}
          />
        ),
      )}
  </section>
);
