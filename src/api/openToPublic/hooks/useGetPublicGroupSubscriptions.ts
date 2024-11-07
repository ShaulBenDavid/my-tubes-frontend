"use client";

import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { getPublicGroupSubscriptions } from "../openToPublic.methods";

export const GET_PUBLIC_GROUP_SUBSCRIPTIONS_KEY = "getPublicGroupSubscriptions";

interface UseGetPublicGroupSubscriptionsProps {
  userId: number;
  groupId: number;
}

export const useGetPublicGroupSubscriptions = ({
  userId,
  groupId,
}: UseGetPublicGroupSubscriptionsProps) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [GET_PUBLIC_GROUP_SUBSCRIPTIONS_KEY, { userId, groupId }],
    queryFn: () => getPublicGroupSubscriptions(userId, groupId),
    gcTime: ms("4h"),
  });

  return {
    groupSubscriptions: data,
    isGroupSubscriptionsLoading: isLoading,
    isGroupSubscriptionsError: isError,
  };
};
