"use client";

import React, { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import {
  useGetSubscriptionsGroup,
  useGetSubscriptionsList,
} from "@/src/api/subscription/hooks";
import type { SubscriptionsListSortEnum } from "@/src/api/subscription";
import { useDebounce, useMediaQuery } from "@/src/hooks";
import { HttpStatusCode } from "@/src/types";
import { GroupHeader } from "./components/GroupHeader";
import { subscriptionsListSortConfig } from "../Subscriptions/components/SubscriptionsList";
import { GroupBody } from "./components/GroupBody";
import { GroupAside } from "./components/GroupAside";
import { Group404 } from "./Group404";

interface GroupProps {
  groupId: number;
}

export const Group = ({ groupId }: GroupProps): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<
    SubscriptionsListSortEnum | undefined
  >();
  const [search, setSearch] = useState<string>("");
  const debouncedValue = useDebounce(search, 300);
  const pathname = usePathname();
  const breadcrumbs = pathname
    .replace("%20", " ")
    .split("/")
    .filter((crumb) => crumb !== "");
  const breadcrumbsWithoutLast = breadcrumbs.slice(0, -1);

  const { subscriptionsGroup, groupError } = useGetSubscriptionsGroup({
    groupId,
  });

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

  const toggleDrawer = useCallback(
    (): void => setIsDrawerOpen((prev) => !prev),
    [setIsDrawerOpen],
  );

  return (
    <>
      {isDesktop && <Breadcrumbs breadcrumbs={breadcrumbsWithoutLast} />}
      <GroupHeader
        isDesktop={isDesktop}
        isSubscriptionsLoading={isSubscriptionsLoading}
        currentGroup={subscriptionsGroup}
        subscriptionsCount={subscriptionsCount}
        searchValue={search}
        sortOptions={subscriptionsListSortConfig}
        onSortChange={(value) => setSelectedSort(value)}
        onSearchReset={() => setSearch("")}
        onSearchChange={(searchValue) => setSearch(searchValue)}
        toggleDrawer={toggleDrawer}
      />
      {groupError?.response?.status === HttpStatusCode.NOT_FOUND ? (
        <Group404 />
      ) : (
        <div className="flex h-full w-full overflow-hidden">
          <GroupAside
            currentGroupId={groupId}
            groupName={subscriptionsGroup?.title ?? ""}
            isDrawerOpen={isDrawerOpen}
            isDesktop={isDesktop}
            toggleDrawer={toggleDrawer}
          />
          <GroupBody
            groupName={subscriptionsGroup?.title ?? ""}
            isFetchingNextPage={isFetchingNextPage}
            isSubscriptionsError={isSubscriptionsError}
            isSubscriptionsLoading={isSubscriptionsLoading}
            searchValue={debouncedValue}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            subscriptionsList={subscriptionsList}
          />
        </div>
      )}
    </>
  );
};
