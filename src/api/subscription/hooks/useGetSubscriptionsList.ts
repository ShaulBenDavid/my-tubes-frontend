"use client";

import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getSubscriptionsList } from "../subscription.methods";

const GET_SUBSCRIPTIONS_LIST_KEY = "getSubscriptionList";

export const useGetSubscriptionsList = () => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isError,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [GET_SUBSCRIPTIONS_LIST_KEY],
    queryFn: ({ pageParam = 1 }) => getSubscriptionsList({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
    getPreviousPageParam: (firstPage) => firstPage.previous,
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
