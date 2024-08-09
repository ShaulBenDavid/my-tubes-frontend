"use client";

import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { getSubscriptionsFromShareLink } from "../subscription.methods";
import type { GetSubscriptionsFromShareLinkParams } from "../subscription.types";

const GET_SUBSCRIPTIONS_FROM_SHARE_LINK_KEY = "getSubscriptionsFromShareLink";

export const useGetSubscriptionsFromShareLink = (
  params: GetSubscriptionsFromShareLinkParams,
) => {
  const { isLoading, data } = useQuery({
    queryKey: [GET_SUBSCRIPTIONS_FROM_SHARE_LINK_KEY, params],
    queryFn: () => getSubscriptionsFromShareLink(params),
    gcTime: ms("4h"),
  });

  return {
    isSubscriptionsLoading: isLoading,
    subscriptions: data,
  };
};
