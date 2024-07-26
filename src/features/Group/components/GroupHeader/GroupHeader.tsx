import React from "react";
import Skeleton from "react-loading-skeleton";
import { SearchInput } from "@/src/components/SearchInput";
import { SortFilter } from "@/src/components/SortFilter";
import type {
  SubscriptionsGroupType,
  SubscriptionsListSortEnum,
} from "@/src/api/subscription";
import type { SubscriptionsSortOptionType } from "../../../Subscriptions/components/SubscriptionsList";
import { Actions } from "./Actions";

interface GroupHeaderProps {
  isSubscriptionsLoading: boolean;
  currentGroup?: SubscriptionsGroupType;
  subscriptionsCount?: number;
  searchValue: string;
  sortOptions: SubscriptionsSortOptionType[];
  onSortChange: (value?: SubscriptionsListSortEnum | undefined) => void;
  onSearchChange: (value: string) => void;
  onSearchReset: () => void;
}

export const GroupHeader = ({
  isSubscriptionsLoading,
  currentGroup,
  subscriptionsCount,
  searchValue,
  sortOptions,
  onSortChange,
  onSearchChange,
  onSearchReset,
}: GroupHeaderProps): JSX.Element => {
  const { title, description } = currentGroup ?? {};

  return (
    <header className="flex w-full flex-row border-b border-white/30 py-4">
      <div className="w-3/5">
        <h1 className="flex flex-row text-xl font-semibold capitalize">
          {title || <Skeleton width="100px" height="20px" />}

          <span className="ps-2">({subscriptionsCount || "--"})</span>
        </h1>
        {isSubscriptionsLoading ? (
          <Skeleton width="100%" height="14px" count={2} />
        ) : (
          description && <p>{description}</p>
        )}
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
        <div className="ml-4">
          {currentGroup && <Actions currentGroup={currentGroup} />}
        </div>
      </div>
    </header>
  );
};
