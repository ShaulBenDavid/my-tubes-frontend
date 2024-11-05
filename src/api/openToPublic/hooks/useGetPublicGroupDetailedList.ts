"use client";

import { useMemo } from "react";
import ms from "ms";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPublicGroupDetailedList } from "../openToPublic.methods";
import type { GetPublicGroupsParams } from "../openToPublic.types";
import type { DetailedGroup } from "../../subscription/subscription.types";

export const GET_PUBLIC_GROUP_DETAILED_LIST_KEY = "getPublicGroupDetailedList";

export const useGetPublicGroupDetailedList = (
  params: GetPublicGroupsParams,
) => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isError,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [GET_PUBLIC_GROUP_DETAILED_LIST_KEY, params],
    queryFn: ({ pageParam = 1 }) =>
      getPublicGroupDetailedList({ page: pageParam, ...params }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
    getPreviousPageParam: (firstPage) => firstPage.previous,
    gcTime: ms("4h"),
  });

  const flatData: DetailedGroup[] | undefined = useMemo(
    () => data?.pages.flatMap(({ results }) => results),
    [data],
  );

  return {
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    groupList: flatData,
    isGroupListLoading: isLoading,
    isGroupListError: isError,
  };
};
