import { useQuery } from "@tanstack/react-query";
import { getSubscriptionsList } from "../subscription.methods";

const GET_SUBSCRIPTIONS_KEY = "getSubscription";

export const useGetSubscriptions = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [GET_SUBSCRIPTIONS_KEY],
    queryFn: getSubscriptionsList,
  });

  return {
    subscriptionsList: data,
    isSubscriptionsLoading: isLoading,
    isSubscriptionsError: isError,
  };
};
