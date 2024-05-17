"use client";

import React from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import type {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import NoDataSVG from "@/src/assets/images/NoDataSVG.svg";
import { ChannelCard, ChannelCardLoader } from "@/src/components/ChannelCard";
import { EmptyState } from "@/src/components/EmptyState";
import { Spinner } from "@/src/components/Spinner";
import type { SubscriptionType } from "@/src/api/subscription";
import type { GetSubscriptionsListResponse } from "@/src/api/subscription/subscription.types";

interface GroupBodyProps {
  isSubscriptionsLoading: boolean;
  isFetchingNextPage: boolean;
  isSubscriptionsError: boolean;
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<GetSubscriptionsListResponse, unknown>,
      Error
    >
  >;
  subscriptionsList?: SubscriptionType[];
  searchValue: string;
}

export const GroupBody = ({
  isSubscriptionsLoading,
  isFetchingNextPage,
  isSubscriptionsError,
  hasNextPage,
  fetchNextPage,
  subscriptionsList,
  searchValue,
}: GroupBodyProps): JSX.Element => {
  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading: isSubscriptionsLoading || isFetchingNextPage,
    onLoadMore: fetchNextPage,
    hasNextPage,
    disabled: isSubscriptionsError,
    rootMargin: "100px",
  });

  return (
    <section
      /* prettier-ignore */
      className="grid-rows-groups-row-fit grid h-full w-full grid-cols-groups-auto-fit flex-col gap-4 overflow-y-auto pt-4"
      ref={rootRef}
      id="searchResults"
    >
      {isSubscriptionsLoading && <ChannelCardLoader />}
      {!isSubscriptionsLoading && !subscriptionsList?.length && (
        <div className="col-span-full row-span-full flex h-full w-full items-center justify-center">
          <EmptyState
            svgUrl={NoDataSVG}
            header={
              searchValue.length
                ? `No Results Found For: ${searchValue}`
                : "No Subscriptions In this group."
            }
          />
        </div>
      )}
      {!!subscriptionsList?.length &&
        subscriptionsList.map(
          ({ title, description, imageUrl, channelId, id }) => (
            <ChannelCard
              key={title}
              title={title}
              description={description}
              imageUrl={imageUrl}
              itemId={id}
              channelId={channelId}
            />
          ),
        )}
      {(isFetchingNextPage || hasNextPage) && (
        <div
          ref={sentryRef}
          className="col-span-full flex w-full items-center justify-center p-2"
        >
          <Spinner />
        </div>
      )}
    </section>
  );
};
