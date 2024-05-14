"use client";

import React from "react";
import { usePathname } from "next/navigation";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { useGetSubscriptionsList } from "@/src/api/subscription/hooks";
import NoDataSVG from "@/src/assets/images/NoDataSVG.svg";
import { ChannelCard, ChannelCardLoader } from "@/src/components/ChannelCard";
import { EmptyState } from "@/src/components/EmptyState";
import { Spinner } from "@/src/components/Spinner";

interface GroupsProps {
  groupId: number;
  groupName: string;
}

export const Groups = ({ groupId, groupName }: GroupsProps): JSX.Element => {
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
  });

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
      <header>
        <h1 className="pt-3 text-xl font-semibold capitalize">
          {groupName}
          <span className="ps-2">({subscriptionsCount ?? "--"})</span>
        </h1>
        <p>Description</p>
      </header>
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
              header="No Subscriptions In this group."
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
