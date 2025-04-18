"use client";

import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import { RiSettings5Fill } from "react-icons/ri";
import { SearchInput } from "@/src/components/SearchInput";
import { ActionButton } from "@/src/components/ActionButton";
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

export const GROUP_SETTINGS_DRAWER = "group-settings-drawer";

interface GroupHeaderProps {
  isDesktop: boolean;
  currentGroup?: SubscriptionsGroupType;
  subscriptionsCount?: number;
  searchValue: string;
  sortOptions: SubscriptionsSortOptionType[];
  onSortChange: (value?: SubscriptionsListSortEnum | undefined) => void;
  onSearchChange: (value: string) => void;
  onSearchReset: () => void;
  toggleDrawer: () => void;
}

export const GroupHeader = ({
  isDesktop,
  currentGroup,
  subscriptionsCount,
  searchValue,
  sortOptions,
  onSortChange,
  onSearchChange,
  onSearchReset,
  toggleDrawer,
}: GroupHeaderProps): JSX.Element => {
  const { title, emoji, id } = currentGroup ?? {};

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
        {!isDesktop && (
          <ActionButton
            icon={<RiSettings5Fill size={24} />}
            id="open-settings"
            aria-label="menu"
            aria-controls={GROUP_SETTINGS_DRAWER}
            onClick={toggleDrawer}
          />
        )}
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
