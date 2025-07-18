"use client";

import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { SearchInput } from "@/src/components/SearchInput";
import { useDebounce } from "@/src/hooks";
import { useGetUserList } from "@/src/api/user/hooks";
import { AccountLink } from "@/src/components/AccountLink";
import { EmptyState } from "@/src/components/EmptyState";
import NoDataSVG from "@/src/assets/images/NoDataSVG.svg";
import { AccountLinkLoader } from "@/src/components/AccountLink/AccountLink.loader";

const MIN_SEARCH_LENGTH = 2;

export const Users = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>("");

  const value = useDebounce(searchValue, 300);

  const hasSearchLength = value.length >= MIN_SEARCH_LENGTH;

  const { isUserListLoading, userList } = useGetUserList({
    enabled: hasSearchLength,
    params: {
      search: value,
    },
  });

  return (
    <div>
      <header className="inside-header pt-2">
        <SearchInput
          placeholder="Search for users..."
          onChange={(event) => setSearchValue(event.target.value)}
          onReset={() => setSearchValue("")}
          value={searchValue}
        />
      </header>

      {isUserListLoading && (
        <div className="pt-2">
          <AccountLinkLoader />
        </div>
      )}

      {!hasSearchLength && !userList?.length && !isUserListLoading && (
        <section className="flex flex-col items-center justify-center gap-2 py-12 text-center">
          <FcSearch size={36} aria-hidden />
          <h1 className="font-bold tb:text-lg">Search users</h1>
          <p className="text-sm opacity-90 tb:text-base">
            Search public <strong>My-Tubes</strong> profiles to view their
            followed channels, shared links, and other public info.
          </p>
        </section>
      )}

      {!isUserListLoading && hasSearchLength && !userList?.length && (
        <div className="flex h-full w-full items-center justify-center pt-12">
          <EmptyState
            svgUrl={NoDataSVG}
            header={`No users found for "${searchValue}"`}
          />
        </div>
      )}

      {!!userList?.length && (
        <section className="py-2" id="searchResults">
          {userList.map((user) => (
            <AccountLink
              key={user.id}
              href={`/@${user.username}`}
              imageUrl={user?.imageUrl ?? undefined}
              name={user.username}
              description={user?.description}
            />
          ))}
        </section>
      )}
    </div>
  );
};
