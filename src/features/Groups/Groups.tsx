"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import {
  useGetSubscriptionsGroup,
  useGetSubscriptionsList,
} from "@/src/api/subscription/hooks";
import type { SubscriptionsListSortEnum } from "@/src/api/subscription";
import NoDataSVG from "@/src/assets/images/NoDataSVG.svg";
import { ChannelCard, ChannelCardLoader } from "@/src/components/ChannelCard";
import { useDebounce } from "@/src/hooks";
import { EmptyState } from "@/src/components/EmptyState";
import { Spinner } from "@/src/components/Spinner";
import { GroupHeader } from "./GroupHeader";
import { subscriptionsListSortConfig } from "../Subscriptions/components/SubscriptionsList";

interface GroupsProps {
  groupId: number;
}

export const Groups = ({ groupId }: GroupsProps): JSX.Element => {
  const [selectedSort, setSelectedSort] = useState<
    SubscriptionsListSortEnum | undefined
  >();
  const [search, setSearch] = useState<string>("");
  const debouncedValue = useDebounce(search, 300);
  const pathname = usePathname();
  const breadcrumbs = pathname.split("/").filter((crumb) => crumb !== "");
  const breadcrumbsWithoutLast = breadcrumbs.slice(0, -1);
  const {
    subscriptionsList,
    fetchNextPage,
    hasNextPage,
    subscriptionsCount,
    isSubscriptionsLoading,
    isSubscriptionsError,
    isFetchingNextPage,
  } = useGetSubscriptionsList({
    group: groupId,
    search: debouncedValue,
    ordering: selectedSort,
  });
  const { subscriptionsGroup } = useGetSubscriptionsGroup({ groupId });

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading: isSubscriptionsLoading || isFetchingNextPage,
    onLoadMore: fetchNextPage,
    hasNextPage,
    disabled: isSubscriptionsError,
    rootMargin: "100px",
  });

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <Breadcrumbs breadcrumbs={breadcrumbsWithoutLast} />
      <GroupHeader
        title={subscriptionsGroup?.title ?? ""}
        description={subscriptionsGroup?.description ?? ""}
        subscriptionsCount={subscriptionsCount}
        searchValue={search}
        sortOptions={subscriptionsListSortConfig}
        onSortChange={(value) => setSelectedSort(value)}
        onSearchReset={() => setSearch("")}
        onSearchChange={(searchValue) => setSearch(searchValue)}
      />
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
                debouncedValue.length
                  ? `No Results Found For: ${debouncedValue}`
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
    </div>
  );
};
