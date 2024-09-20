"use client";

import React from "react";
import { GroupsHeader } from "./components/GroupsHeader";
import { useGetGroupDetailedList } from "@/src/api/subscription/hooks/useGetGroupDetailedList";
import { GroupCarousel } from "./components/GroupCarousel";

export const GroupsPage = (): JSX.Element => {
  const { groupsCount, groupList, isGroupListLoading } =
    useGetGroupDetailedList({});

  return (
    <>
      <GroupsHeader groupsCount={groupsCount} />
      <section className="flex h-full flex-col gap-6 overflow-auto">
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
      </section>
    </>
  );
};
