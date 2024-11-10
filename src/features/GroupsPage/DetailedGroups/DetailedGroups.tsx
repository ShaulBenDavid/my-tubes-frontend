"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useGetGroupDetailedList } from "@/src/api/subscription/hooks";
import type { SubscriptionsListSortEnum } from "@/src/api/subscription";
import { Spinner } from "@/src/components/Spinner";
import { EmptyState } from "@/src/components/EmptyState";
import NoDataSVG from "@/src/assets/images/NoDataSVG.svg";
import WarningSVG from "@/src/assets/images/WarningDrawSVG.svg";
import { Routes } from "@/src/routes";
import { ButtonLink } from "@/src/components/ButtonLink";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { useMediaQuery } from "@/src/hooks";
import { buildRoutePath } from "@/src/utils";
import { GroupsHeader } from "../components/GroupsHeader";
import {
  GroupCarousel,
  GroupCarouselLoader,
} from "../components/GroupCarousel";

export const DetailedGroups = (): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedSort, setSelectedSort] = useState<
    SubscriptionsListSortEnum | undefined
  >();
  const pathname = usePathname();
  const breadcrumbs = pathname
    .replace("%20", " ")
    .split("/")
    .filter((crumb) => crumb !== "");

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
      className="flex h-full w-full flex-col overflow-hidden overflow-y-auto pr-1"
      ref={rootRef}
    >
      {isDesktop && (
        <div className="pb-4">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
      )}
      <GroupsHeader
        groupsCount={groupsCount}
        onSortChange={(value) => setSelectedSort(value)}
      />
      <section className="flex h-full flex-col gap-8">
        {isGroupListLoading && <GroupCarouselLoader />}
        {!isGroupListLoading && !groupList?.length && (
          <div className="flex h-full items-center justify-center">
            <EmptyState
              svgUrl={isGroupListError ? WarningSVG : NoDataSVG}
              header={
                isGroupListError
                  ? "Some Error happened sorry for the inconvenience"
                  : "There are no existing groups."
              }
              description={
                isGroupListError
                  ? undefined
                  : "To create a group go to the subscription page."
              }
              footer={
                isGroupListError ? undefined : (
                  <ButtonLink href={Routes.SUBSCRIPTIONS}>
                    Subscriptions
                  </ButtonLink>
                )
              }
            />
          </div>
        )}
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
                headerHref={buildRoutePath(
                  Routes.SUBSCRIPTIONS,
                  Routes.GROUP,
                  title,
                  String(id),
                )}
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
