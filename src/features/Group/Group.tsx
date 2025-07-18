"use client";

import React, { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { FaPhotoVideo, FaRegAddressCard } from "react-icons/fa";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import {
  useGetSubscriptionsGroup,
  useGetSubscriptionsList,
} from "@/src/api/subscription/hooks";
import type {
  GroupType,
  SubscriptionsListSortEnum,
} from "@/src/api/subscription";
import { useDebounce, useMediaQuery, useQueryParamSelect } from "@/src/hooks";
import { HttpStatusCode } from "@/src/types";
import { MultiToggle } from "@/src/components/MultiToggle";
import { GroupHeader } from "./components/GroupHeader";
import { subscriptionsListSortConfig } from "../Subscriptions/components/SubscriptionsList";
import { GroupBody } from "./components/GroupBody";
import { GroupAside } from "./components/GroupAside";
import { Group404 } from "./Group404";
import { SubscriptionViewTypeEnum } from "./Group.types";

const QUERY_PARAM_KEY = "viewType";

interface GroupProps {
  groupId: GroupType["id"];
}

export const Group = ({ groupId }: GroupProps): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<
    SubscriptionsListSortEnum | undefined
  >();
  const [search, setSearch] = useState<string>("");

  const { selectedValue, handleChange } =
    useQueryParamSelect<SubscriptionViewTypeEnum>(
      QUERY_PARAM_KEY,
      SubscriptionViewTypeEnum.CHANNEL,
    );

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
    <div>
      <div className="inside-header flex flex-col">
        {isDesktop && <Breadcrumbs breadcrumbs={breadcrumbsWithoutLast} />}
        <GroupHeader
          isDesktop={isDesktop}
          currentGroup={subscriptionsGroup}
          subscriptionsCount={subscriptionsCount}
          searchValue={search}
          sortOptions={subscriptionsListSortConfig}
          onSortChange={(value) => setSelectedSort(value)}
          onSearchReset={() => setSearch("")}
          onSearchChange={(searchValue) => setSearch(searchValue)}
          toggleDrawer={toggleDrawer}
        />
      </div>
      {groupError?.response?.status === HttpStatusCode.NOT_FOUND ? (
        <Group404 />
      ) : (
        <div className="flex w-full">
          <GroupAside
            currentGroupId={groupId}
            groupName={subscriptionsGroup?.title ?? ""}
            isDrawerOpen={isDrawerOpen}
            isDesktop={isDesktop}
            toggleDrawer={toggleDrawer}
          />
          <GroupBody
            viewType={selectedValue}
            groupName={subscriptionsGroup?.title ?? ""}
            isFetchingNextPage={isFetchingNextPage}
            isSubscriptionsError={isSubscriptionsError}
            isSubscriptionsLoading={isSubscriptionsLoading}
            searchValue={debouncedValue}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            subscriptionsList={subscriptionsList}
          />
          <div className="fixed bottom-5 left-1/2 -translate-x-1/2 tb:left-[calc((50%+var(--main-aside-menu-width)/2)+16px)] lg:left-[calc((50%+var(--main-aside-menu-width)*2/2)+16px)]">
            <MultiToggle
              selectedValue={selectedValue}
              onToggle={handleChange}
              buttons={[
                {
                  content: <FaRegAddressCard size={20} />,
                  value: SubscriptionViewTypeEnum.CHANNEL,
                },
                {
                  content: <FaPhotoVideo size={20} />,
                  value: SubscriptionViewTypeEnum.VIDEO,
                },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};
