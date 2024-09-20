"use client";

import { useMemo } from "react";
import ms from "ms";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getGroupDetailedList } from "../subscription.methods";
import type {
  DetailedGroup,
  GetSubscriptionsListParams,
} from "../subscription.types";

export const GET_GROUP_DETAILED_LIST_KEY = "getGroupDetailedList";

export const useGetGroupDetailedList = (params: GetSubscriptionsListParams) => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isError,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [GET_GROUP_DETAILED_LIST_KEY, params],
    queryFn: ({ pageParam = 1 }) =>
      getGroupDetailedList({ page: pageParam, ...params }),
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
    groupsCount: data?.pages[0].count,
    groupList: flatData,
    isGroupListLoading: isLoading,
    isGroupListError: isError,
  };
};
