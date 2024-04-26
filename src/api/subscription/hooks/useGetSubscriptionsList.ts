"use client";

import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getSubscriptionsList } from "../subscription.methods";
import type { SubscriptionsListSortEnum } from "../subscription.types";

const GET_SUBSCRIPTIONS_LIST_KEY = "getSubscriptionList";

interface UserInfoTypeGetSubscriptionsListProps {
  ordering?: SubscriptionsListSortEnum;
}

export const useGetSubscriptionsList = ({
  ordering,
}: UserInfoTypeGetSubscriptionsListProps) => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isError,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [GET_SUBSCRIPTIONS_LIST_KEY, { ordering }],
    queryFn: ({ pageParam = 1 }) =>
      getSubscriptionsList({ page: pageParam, ordering }),
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
