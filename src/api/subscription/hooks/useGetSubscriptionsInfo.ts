import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { appQueryClient } from "@/src/queries";
import { getSubscriptionsInfo } from "../subscription.methods";
import { GET_SUBSCRIPTIONS_LIST_KEY } from "./useGetSubscriptionsList";

const GET_SUBSCRIPTIONS_INFO_KEY = "getSubscriptionInfo";

export const useGetSubscriptionsInfo = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [GET_SUBSCRIPTIONS_INFO_KEY],
    queryFn: () =>
      getSubscriptionsInfo().then((res) => {
        if (res.isDataSynced)
          appQueryClient.invalidateQueries({
            queryKey: [GET_SUBSCRIPTIONS_LIST_KEY],
          });
        return res;
      }),
    gcTime: ms("4h"),
  });

  return {
    subscriptionsInfo: data,
    isSubscriptionsLoading: isLoading,
    isSubscriptionsError: isError,
  };
};
