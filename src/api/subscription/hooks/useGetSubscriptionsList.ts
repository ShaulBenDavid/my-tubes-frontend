"use client";

import { useMemo } from "react";
import ms from "ms";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getSubscriptionsList } from "../subscription.methods";
import type { GetSubscriptionsListParams } from "../subscription.types";

export const GET_SUBSCRIPTIONS_LIST_KEY = "getSubscriptionList";

export const useGetSubscriptionsList = (params: GetSubscriptionsListParams) => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isError,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [GET_SUBSCRIPTIONS_LIST_KEY, params],
    queryFn: ({ pageParam = 1 }) =>
      getSubscriptionsList({ page: pageParam, ...params }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
    getPreviousPageParam: (firstPage) => firstPage.previous,
    gcTime: ms("4h"),
  });

  const flatData = useMemo(
    () => data?.pages.flatMap(({ results }) => results),
    [data],
  );

  return {
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    subscriptionsCount: data?.pages[0].count,
    subscriptionsList: flatData,
    isSubscriptionsLoading: isLoading,
    isSubscriptionsError: isError,
  };
};
