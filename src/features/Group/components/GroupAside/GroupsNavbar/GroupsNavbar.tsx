"use client";

import React from "react";
import { GroupLink, GroupLinkLoader } from "./GroupLink";
import { useGetSubscriptionsGroups } from "@/src/api/subscription/hooks";

interface GroupsNavbarProps {
  currentGroupId: number;
}

export const GroupsNavbar = ({
  currentGroupId,
}: GroupsNavbarProps): JSX.Element => {
  const { subscriptionsGroups, isGroupsLoading } = useGetSubscriptionsGroups();

  return (
    <nav
      aria-label="groups navbar"
      className="flex h-full flex-col overflow-hidden"
    >
      {isGroupsLoading && <GroupLinkLoader />}
      {!!subscriptionsGroups?.length && !isGroupsLoading && (
        <>
          <h3 className="text-base font-semibold">Your Groups</h3>
          <div className="flex h-full flex-col gap-2 overflow-y-auto pr-1 pt-4">
            {subscriptionsGroups.map(
              ({ title, id, subscriptionCount, emoji }) =>
                id !== currentGroupId ? (
                  <GroupLink
                    key={title + id}
                    title={title}
                    id={id}
                    count={subscriptionCount}
                    emoji={emoji}
                  />
                ) : null,
            )}
          </div>
        </>
      )}
    </nav>
  );
};
