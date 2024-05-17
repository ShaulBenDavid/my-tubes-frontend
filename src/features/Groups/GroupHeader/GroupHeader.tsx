import React from "react";
import { SearchInput } from "@/src/components/SearchInput";
import { SortFilter } from "@/src/components/SortFilter";
import type { SubscriptionsListSortEnum } from "@/src/api/subscription";
import type { SubscriptionsSortOptionType } from "../../Subscriptions/components/SubscriptionsList";

interface GroupHeaderProps {
  title: string;
  description: string;
  subscriptionsCount?: number;
  searchValue: string;
  sortOptions: SubscriptionsSortOptionType[];
  onSortChange: (value?: SubscriptionsListSortEnum | undefined) => void;
  onSearchChange: (value: string) => void;
  onSearchReset: () => void;
}

export const GroupHeader = ({
  title,
  description,
  subscriptionsCount,
  searchValue,
  sortOptions,
  onSortChange,
  onSearchChange,
  onSearchReset,
}: GroupHeaderProps): JSX.Element => (
  <header className="flex w-full flex-row border-b border-white/30 py-4">
    <div className="w-3/5">
      <h1 className="text-xl font-semibold capitalize">
        {title}
        <span className="ps-2">({subscriptionsCount ?? "--"})</span>
      </h1>
      <p>{description}</p>
    </div>
    <div className="flex w-full items-end justify-end">
      <span className="flex h-10 w-24 items-center">
        <SortFilter
          label="sort"
          options={sortOptions}
          handleChange={onSortChange}
        />
      </span>
      <SearchInput
        width="350px"
        value={searchValue}
        onReset={onSearchReset}
        placeholder="Search Channels..."
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  </header>
);
