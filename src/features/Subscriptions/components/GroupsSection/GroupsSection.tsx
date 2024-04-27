"use client";

import React from "react";
import { CreateGroupCard } from "./components/CreateGroupCard";
import { GroupCard } from "./components/GroupCard";
import { useGetSubscriptionsGroups } from "@/src/api/subscription/hooks";

export const GroupsSection = (): JSX.Element => {
  const { subscriptionsGroups } = useGetSubscriptionsGroups();

  return (
    <section
      /* prettier-ignore */
      className="grid-cols-groups-auto-fit grid h-full w-full auto-rows-fr grid-rows-4 gap-2 overflow-hidden"
    >
      <CreateGroupCard />
      {subscriptionsGroups?.map(
        ({ id, title, description, subscriptionCount }) => (
          <GroupCard
            key={id}
            id={id}
            title={title}
            description={description}
            subscriptionCount={subscriptionCount}
          />
        ),
      )}
    </section>
  );
};
