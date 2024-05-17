import ms from "ms";
import { isAxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { getSubscriptionsGroup } from "../subscription.methods";

export const GET_SUBSCRIPTIONS_GROUP_KEY = "getSubscriptionsGroup";

interface UseGetSubscriptionsGroupProps {
  groupId: number;
}

export const useGetSubscriptionsGroup = ({
  groupId,
}: UseGetSubscriptionsGroupProps) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: [GET_SUBSCRIPTIONS_GROUP_KEY, groupId],
    queryFn: () => getSubscriptionsGroup(groupId),
    gcTime: ms("4h"),
  });

  return {
    subscriptionsGroup: data,
    isGroupLoading: isLoading,
    isGroupError: isError,
    groupError: isAxiosError(error) ? error : undefined,
  };
};
