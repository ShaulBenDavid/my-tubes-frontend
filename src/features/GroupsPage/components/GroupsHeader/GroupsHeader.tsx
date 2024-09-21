"use client";

import React from "react";
import { SortFilter } from "@/src/components/SortFilter";
import type { SubscriptionsListSortEnum } from "@/src/api/subscription";
import { subscriptionsListSortConfig } from "@/src/features/Subscriptions/components/SubscriptionsList";

interface GroupsHeaderProps {
  groupsCount?: number;
  onSortChange: (value?: SubscriptionsListSortEnum | undefined) => void;
}

export const GroupsHeader = ({
  groupsCount,
  onSortChange,
}: GroupsHeaderProps): JSX.Element => (
  <div className="flex flex-row justify-between pb-2">
    <h1 className="font-semibold tb:text-xl">
      Groups <span>({groupsCount ?? "--"})</span>
    </h1>
    <div className="w-20">
      <SortFilter
        label="sort"
        options={subscriptionsListSortConfig}
        handleChange={onSortChange}
      />
    </div>
  </div>
);
