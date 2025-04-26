"use client";

import React, { useState } from "react";
import { SearchInput } from "@/src/components/SearchInput";
import { useDebounce } from "@/src/hooks";
import { useGetUserList } from "@/src/api/user/hooks";

const MIN_SEARCH_LENGTH = 3;

export const Users = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>("");

  const value = useDebounce(searchValue, 300);
  console.log("value", value);

  const { isUserListLoading } = useGetUserList({
    enabled: searchValue.length >= MIN_SEARCH_LENGTH,
    params: {
      search: value,
    },
  });

  return (
    <div className="pt-2">
      <SearchInput
        placeholder="Search For users..."
        onChange={(event) => setSearchValue(event.target.value)}
        onReset={() => setSearchValue("")}
        value={searchValue}
      />
      {isUserListLoading && <div />}
    </div>
  );
};
