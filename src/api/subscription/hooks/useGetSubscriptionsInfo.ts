import { useQuery } from "@tanstack/react-query";
import { getSubscriptionsInfo } from "../subscription.methods";

const GET_SUBSCRIPTIONS_INFO_KEY = "getSubscriptionInfo";

export const useGetSubscriptionsInfo = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [GET_SUBSCRIPTIONS_INFO_KEY],
    queryFn: getSubscriptionsInfo,
  });

  return {
    subscriptionsInfo: data,
    isSubscriptionsLoading: isLoading,
    isSubscriptionsError: isError,
  };
};
