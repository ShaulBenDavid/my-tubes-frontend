"use client";

import React, { useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useDebounce } from "@/src/hooks";
import { useGetSubscriptionsList } from "@/src/api/subscription/hooks";
import { Spinner } from "@/src/components/Spinner";
import { EmptyState } from "@/src/components/EmptyState";
import type { SubscriptionsListSortEnum } from "@/src/api/subscription/subscription.types";
import NoDataSVG from "@/src/assets/images/NoDataSVG.svg";
import {
  ChannelCard,
  ChannelCardLoader,
} from "../../../../components/ChannelCard";
import { subscriptionsListSortConfig } from "./SubscriptionsList.config";
import { FiltersHeader } from "./FiltersHeader";

const UNGROUP_SUBSCRIPTION_FILTER = "ungroup";

export const SubscriptionsList = (): JSX.Element => {
  const [selectedSort, setSelectedSort] = useState<
    SubscriptionsListSortEnum | undefined
  >();
  const [search, setSearch] = useState<string>("");
  const [isShowUngroup, setIsShowUngroup] = useState<boolean>(true);
  const debouncedValue = useDebounce(search, 300);

  const {
    subscriptionsList,
    isSubscriptionsLoading,
    isSubscriptionsError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetSubscriptionsList({
    ordering: selectedSort,
    search: debouncedValue,
    group: isShowUngroup ? UNGROUP_SUBSCRIPTION_FILTER : undefined,
  });

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading: isSubscriptionsLoading || isFetchingNextPage,
    onLoadMore: fetchNextPage,
    hasNextPage,
    disabled: isSubscriptionsError,
    rootMargin: "100px",
  });

  return (
    <div className="flex h-full w-96 shrink-0 flex-col gap-4">
      <FiltersHeader
        isShowUngroup={isShowUngroup}
        onUngroupChange={() => setIsShowUngroup((prev) => !prev)}
        searchValue={search}
        sortOptions={subscriptionsListSortConfig}
        onSortChange={(value) => setSelectedSort(value)}
        onSearchReset={() => setSearch("")}
        onSearchChange={(searchValue) => setSearch(searchValue)}
      />
      <div
        className="flex h-full w-full snap-y snap-mandatory flex-col gap-4 overflow-y-auto pr-2"
        ref={rootRef}
        id="searchResults"
      >
        {isSubscriptionsLoading && (
          <div className="flex flex-col gap-6">
            <ChannelCardLoader />
          </div>
        )}
        {!isSubscriptionsLoading && !subscriptionsList?.length && (
          <div className="flex h-full w-full items-center justify-center">
            <EmptyState svgUrl={NoDataSVG} header="No Subscriptions Data." />
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
                isDraggable
              />
            ),
          )}
        {(isFetchingNextPage || hasNextPage) && (
          <div
            ref={sentryRef}
            className="flex w-full items-center justify-center p-2"
          >
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};
