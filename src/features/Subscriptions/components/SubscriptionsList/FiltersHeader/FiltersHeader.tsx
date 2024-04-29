import React from "react";
import { SearchInput } from "@/src/components/SearchInput";
import { SortFilter } from "@/src/components/SortFilter";
import type { SubscriptionsListSortEnum } from "@/src/api/subscription";
import type { SubscriptionsSortOptionType } from "../SubscriptionsList.config";

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
    <SortFilter
      label="sort"
      options={sortOptions}
      handleChange={onSortChange}
    />
    <SearchInput
      value={searchValue}
      onReset={onSearchReset}
      placeholder="Search Channels..."
      onChange={(event) => onSearchChange(event.target.value)}
    />
  </div>
);
