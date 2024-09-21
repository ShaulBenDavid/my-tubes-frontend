"use client";

import React, { useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useGetGroupDetailedList } from "@/src/api/subscription/hooks";
import type { SubscriptionsListSortEnum } from "@/src/api/subscription";
import { Spinner } from "@/src/components/Spinner";
import { GroupsHeader } from "./components/GroupsHeader";
import { GroupCarousel } from "./components/GroupCarousel";

export const GroupsPage = (): JSX.Element => {
  const [selectedSort, setSelectedSort] = useState<
    SubscriptionsListSortEnum | undefined
  >();

  const {
    groupsCount,
    groupList,
    isGroupListLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isGroupListError,
  } = useGetGroupDetailedList({ ordering: selectedSort });

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading: isGroupListLoading || isFetchingNextPage,
    onLoadMore: fetchNextPage,
    hasNextPage,
    disabled: isGroupListError,
    rootMargin: "100px",
  });

  return (
    <div
      className="flex h-full w-full flex-col overflow-y-auto pr-1"
      ref={rootRef}
    >
      <GroupsHeader
        groupsCount={groupsCount}
        onSortChange={(value) => setSelectedSort(value)}
      />
      <section className="flex h-full flex-col gap-6">
        {!!groupList?.length &&
          !isGroupListLoading &&
          groupList.map(
            ({ title, id, emoji, subscriptionsCount, subscriptions }) => (
              <GroupCarousel
                key={title + subscriptionsCount}
                title={title}
                id={id}
                emoji={emoji}
                subscriptionsCount={subscriptionsCount}
                subscriptions={subscriptions}
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
      </section>
    </div>
  );
};
