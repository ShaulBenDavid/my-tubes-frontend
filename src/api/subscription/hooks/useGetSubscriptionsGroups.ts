import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { getSubscriptionsGroups } from "../subscription.methods";

export const GET_SUBSCRIPTIONS_GROUPS_KEY = "getSubscriptionsGroups";

export const useGetSubscriptionsGroups = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [GET_SUBSCRIPTIONS_GROUPS_KEY],
    queryFn: getSubscriptionsGroups,
    gcTime: ms("4h"),
  });

  return {
    subscriptionsGroups: data,
    isGroupsLoading: isLoading,
    isGroupsError: isError,
  };
};
