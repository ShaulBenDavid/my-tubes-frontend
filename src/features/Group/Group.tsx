"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import {
  useGetSubscriptionsGroup,
  useGetSubscriptionsList,
} from "@/src/api/subscription/hooks";
import type { SubscriptionsListSortEnum } from "@/src/api/subscription";
import { useDebounce } from "@/src/hooks";
import { EmptyState } from "@/src/components/EmptyState";
import NotFoundSVG from "@/src/assets/images/404SVG.svg";
import { ButtonLink, ButtonLinkVariants } from "@/src/components/ButtonLink";
import { Routes } from "@/src/routes";
import { HttpStatusCode } from "@/src/types";
import { GroupHeader } from "./components/GroupHeader";
import { subscriptionsListSortConfig } from "../Subscriptions/components/SubscriptionsList";
import { GroupBody } from "./components/GroupBody";
import { GroupAside } from "./components/GroupAside";

interface GroupProps {
  groupId: number;
}

export const Group = ({ groupId }: GroupProps): JSX.Element => {
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

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsWithoutLast} />
      <GroupHeader
        isSubscriptionsLoading={isSubscriptionsLoading}
        currentGroup={subscriptionsGroup}
        subscriptionsCount={subscriptionsCount}
        searchValue={search}
        sortOptions={subscriptionsListSortConfig}
        onSortChange={(value) => setSelectedSort(value)}
        onSearchReset={() => setSearch("")}
        onSearchChange={(searchValue) => setSearch(searchValue)}
      />
      {groupError?.response?.status === HttpStatusCode.NOT_FOUND ? (
        <div className="flex h-full w-full items-center justify-center">
          <EmptyState
            svgUrl={NotFoundSVG}
            header="Group Does Not Exist"
            footer={
              <ButtonLink
                href={Routes.SUBSCRIPTIONS}
                variant={ButtonLinkVariants.PRIMARY}
                width="240px"
              >
                Go to subscriptions page
              </ButtonLink>
            }
          />
        </div>
      ) : (
        <div className="flex h-full w-full overflow-hidden">
          <GroupAside
            currentGroupId={groupId}
            groupName={subscriptionsGroup?.title ?? ""}
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
