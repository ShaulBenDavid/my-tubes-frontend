"use client";

import React from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useGetSubscriptionsList } from "@/src/api/subscription/hooks";
import { ChannelCard, ChannelCardLoader } from "../ChannelCard";
import { Spinner } from "@/src/components/Spinner";

export const SubscriptionsList = (): JSX.Element => {
  const {
    subscriptionsList,
    isSubscriptionsLoading,
    isSubscriptionsError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetSubscriptionsList();

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading: isSubscriptionsLoading || isFetchingNextPage,
    onLoadMore: fetchNextPage,
    hasNextPage,
    disabled: isSubscriptionsError,
    rootMargin: "100px",
  });

  return (
    <div
      className="flex h-full w-96 snap-y snap-mandatory flex-col gap-4 overflow-y-auto"
      ref={rootRef}
    >
      {isSubscriptionsLoading && <ChannelCardLoader />}
      {!!subscriptionsList?.length &&
        subscriptionsList.map(({ title, description, imageUrl, channelId }) => (
          <ChannelCard
            key={title}
            title={title}
            description={description}
            imageUrl={imageUrl}
            channelId={channelId}
          />
        ))}
      {(isFetchingNextPage || hasNextPage) && (
        <div
          ref={sentryRef}
          className="flex w-full items-center justify-center p-2"
        >
          <Spinner />
        </div>
      )}
    </div>
  );
};