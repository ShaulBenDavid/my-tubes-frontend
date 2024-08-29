"use client";

import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import { SearchInput } from "@/src/components/SearchInput";
import { SortFilter } from "@/src/components/SortFilter";
import type {
  SubscriptionsGroupType,
  SubscriptionsListSortEnum,
} from "@/src/api/subscription";
import type { SubscriptionsSortOptionType } from "../../../Subscriptions/components/SubscriptionsList";
import { Actions } from "./components/Actions";

const EmojiDropdown = dynamic(
  () => import("./components/EmojiDropdown").then((mod) => mod.EmojiDropdown),
  {
    loading: () => <Skeleton width="32px" height="32px" className="mx-2" />,
    ssr: false,
  },
);

interface GroupHeaderProps {
  isDesktop: boolean;
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
  isDesktop,
  isSubscriptionsLoading,
  currentGroup,
  subscriptionsCount,
  searchValue,
  sortOptions,
  onSortChange,
  onSearchChange,
  onSearchReset,
}: GroupHeaderProps): JSX.Element => {
  const { title, description, emoji, id } = currentGroup ?? {};

  return (
    <header className="flex w-full flex-col justify-between gap-2 border-b border-white/30 pb-2 tb:flex-row tb:py-4">
      <div className="flex flex-row gap-2">
        {id && title && (
          <EmojiDropdown selectedIcon={emoji} id={id} title={title} />
        )}
        <div className="flex flex-col justify-center">
          <h1 className="flex flex-row text-xl font-semibold capitalize">
            {title || <Skeleton width="100px" height="20px" />}
            <span className="ps-2">({subscriptionsCount || "--"})</span>
          </h1>
          {isDesktop &&
            (isSubscriptionsLoading ? (
              <Skeleton width="100%" height="14px" count={2} />
            ) : (
              description && (
                <p className="line-clamp-3 text-ellipsis">{description}</p>
              )
            ))}
        </div>
      </div>
      <div className="flex w-full shrink-0 flex-row-reverse items-start justify-between tb:w-fit tb:flex-row tb:justify-normal">
        <span className="flex h-10 w-24 items-center">
          <SortFilter
            label="sort"
            options={sortOptions}
            handleChange={onSortChange}
          />
        </span>
        <SearchInput
          width={isDesktop ? "350px" : "100%"}
          value={searchValue}
          onReset={onSearchReset}
          placeholder="Search Channels..."
          onChange={(event) => onSearchChange(event.target.value)}
        />
        {isDesktop && (
          <div className="ml-4">
            {currentGroup && <Actions currentGroup={currentGroup} />}
          </div>
        )}
      </div>
    </header>
  );
};
