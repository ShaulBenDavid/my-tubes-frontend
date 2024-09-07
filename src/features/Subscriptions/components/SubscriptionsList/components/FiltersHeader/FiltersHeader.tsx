import React from "react";
import { SearchInput } from "@/src/components/SearchInput";
import { SortFilter } from "@/src/components/SortFilter";
import type { SubscriptionsListSortEnum } from "@/src/api/subscription";
import type { SubscriptionsSortOptionType } from "../../SubscriptionsList.config";
import { Checkbox } from "@/src/components/Checkbox";

interface FiltersHeaderProps {
  isShowUngroup: boolean;
  onUngroupChange: () => void;
  searchValue: string;
  sortOptions: SubscriptionsSortOptionType[];
  onSortChange: (value?: SubscriptionsListSortEnum | undefined) => void;
  onSearchChange: (value: string) => void;
  onSearchReset: () => void;
}

export const FiltersHeader = ({
  isShowUngroup,
  onUngroupChange,
  searchValue,
  sortOptions,
  onSortChange,
  onSearchChange,
  onSearchReset,
}: FiltersHeaderProps): JSX.Element => (
  <div>
    <SearchInput
      value={searchValue}
      onReset={onSearchReset}
      placeholder="Search Channels..."
      onChange={(event) => onSearchChange(event.target.value)}
    />
    <div className="flex flex-row items-center justify-between">
      <div className="w-20">
        <SortFilter
          label="sort"
          options={sortOptions}
          handleChange={onSortChange}
        />
      </div>
      <Checkbox
        idFor="ungroup-subscription"
        label="Show Ungroup Subscriptions"
        checked={isShowUngroup}
        aria-checked={isShowUngroup}
        onChange={onUngroupChange}
      />
    </div>
  </div>
);
