"use client";

import React from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useGetGroupDetailedList } from "@/src/api/subscription/hooks/useGetGroupDetailedList";
import { GroupsHeader } from "./components/GroupsHeader";
import { GroupCarousel } from "./components/GroupCarousel";
import { Spinner } from "@/src/components/Spinner";

export const GroupsPage = (): JSX.Element => {
  const {
    groupsCount,
    groupList,
    isGroupListLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isGroupListError,
  } = useGetGroupDetailedList({});

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading: isGroupListLoading || isFetchingNextPage,
    onLoadMore: fetchNextPage,
    hasNextPage,
    disabled: isGroupListError,
    rootMargin: "100px",
  });

  return (
    <div className="flex h-full w-full flex-col overflow-auto" ref={rootRef}>
      <GroupsHeader groupsCount={groupsCount} />
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
