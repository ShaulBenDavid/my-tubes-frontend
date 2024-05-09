import React from "react";
import { SearchInput } from "@/src/components/SearchInput";
import { SortFilter } from "@/src/components/SortFilter";
import type { SubscriptionsListSortEnum } from "@/src/api/subscription";
import type { SubscriptionsSortOptionType } from "../SubscriptionsList.config";
import { Checkbox } from "@/src/components/Checkbox";

interface FiltersHeaderProps {
  searchValue: string;
  sortOptions: SubscriptionsSortOptionType[];
  onSortChange: (value?: SubscriptionsListSortEnum | undefined) => void;
  onSearchChange: (value: string) => void;
  onSearchReset: () => void;
}

export const FiltersHeader = ({
  searchValue,
  sortOptions,
  onSortChange,
  onSearchChange,
  onSearchReset,
}: FiltersHeaderProps): JSX.Element => (
  <div>
    <div className="flex flex-row items-center">
      <SortFilter
        label="sort"
        options={sortOptions}
        handleChange={onSortChange}
      />
      <Checkbox
        idFor="ungroup-subscription"
        label="Show Ungroup Subscriptions"
      />
    </div>
    <SearchInput
      value={searchValue}
      onReset={onSearchReset}
      placeholder="Search Channels..."
      onChange={(event) => onSearchChange(event.target.value)}
    />
  </div>
);
