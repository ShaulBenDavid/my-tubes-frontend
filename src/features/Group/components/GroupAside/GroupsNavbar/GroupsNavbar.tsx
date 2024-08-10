"use client";

import React, { useMemo } from "react";
import { GroupLink, GroupLinkLoader } from "./GroupLink";
import { useGetSubscriptionsGroups } from "@/src/api/subscription/hooks";

interface GroupsNavbarProps {
  currentGroupId: number;
}

export const GroupsNavbar = ({
  currentGroupId,
}: GroupsNavbarProps): JSX.Element => {
  const { subscriptionsGroups, isGroupsLoading } = useGetSubscriptionsGroups();

  const filteredGroup = useMemo(
    () => subscriptionsGroups?.filter(({ id }) => id !== currentGroupId),
    [currentGroupId, subscriptionsGroups],
  );

  return (
    <nav
      aria-label="groups navbar"
      className="flex h-full flex-col overflow-hidden"
    >
      {isGroupsLoading && <GroupLinkLoader />}
      {!!filteredGroup?.length && !isGroupsLoading && (
        <>
          <h3 className="text-base font-semibold">Your Groups</h3>
          <div className="flex h-full flex-col gap-2 overflow-y-auto pr-1 pt-4">
            {filteredGroup.map(({ title, id, subscriptionCount, emoji }) => (
              <GroupLink
                key={title + id}
                title={title}
                id={id}
                count={subscriptionCount}
                emoji={emoji}
              />
            ))}
          </div>
        </>
      )}
    </nav>
  );
};
