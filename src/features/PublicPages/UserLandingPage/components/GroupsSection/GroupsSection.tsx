"use client";

import React from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { Spinner } from "@/src/components/Spinner";
import { EmptyState } from "@/src/components/EmptyState";
import NoDataSVG from "@/src/assets/images/NoDataSVG.svg";
import WarningSVG from "@/src/assets/images/WarningDrawSVG.svg";
import {
  GroupCarousel,
  GroupCarouselLoader,
} from "@/src/features/GroupsPage/components/GroupCarousel";
import { useGetPublicGroupDetailedList } from "@/src/api/openToPublic/hooks";

interface GroupsSectionProps {
  username: string;
  profileId: number;
}

export const GroupsSection = ({
  username,
  profileId,
}: GroupsSectionProps): JSX.Element => {
  const {
    groupList,
    isGroupListLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isGroupListError,
  } = useGetPublicGroupDetailedList({ username });

  const [sentryRef] = useInfiniteScroll({
    loading: isGroupListLoading || isFetchingNextPage,
    onLoadMore: fetchNextPage,
    hasNextPage,
    disabled: isGroupListError,
    rootMargin: "100px",
  });

  const filteredGroupList = groupList?.filter(
    ({ subscriptionsCount }) => !!subscriptionsCount,
  );

  return (
    <section className="flex h-full w-full flex-col gap-8">
      {isGroupListLoading && <GroupCarouselLoader />}
      {!isGroupListLoading && !filteredGroupList?.length && (
        <div className="mt-8 flex h-full items-center justify-center">
          <EmptyState
            svgUrl={isGroupListError ? WarningSVG : NoDataSVG}
            header={
              isGroupListError
                ? "An error occurred. Please try again later."
                : "No groups available at the moment."
            }
          />
        </div>
      )}
      {!!filteredGroupList?.length &&
        !isGroupListLoading &&
        filteredGroupList.map(
          ({ title, id, emoji, subscriptionsCount, subscriptions }) => (
            <GroupCarousel
              key={title + subscriptionsCount}
              title={title}
              id={id}
              emoji={emoji}
              subscriptionsCount={subscriptionsCount}
              subscriptions={subscriptions}
              headerHref={`/@${username.replace("%40", "@")}/${profileId}/group/${id}/`}
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
  );
};
