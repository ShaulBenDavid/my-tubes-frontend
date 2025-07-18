import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { getEnrichSubscription } from "../subscription.methods";

export const GET_ENRICH_SUBSCRIPTIONS_KEY = "getEnrichSubscriptions";

interface UseGetEnrichSubscriptionsProps {
  enabled?: boolean;
}

export const useGetEnrichSubscriptions = ({
  enabled,
}: UseGetEnrichSubscriptionsProps) => {
  const { isLoading, isError } = useQuery({
    queryKey: [GET_ENRICH_SUBSCRIPTIONS_KEY],
    queryFn: getEnrichSubscription,
    gcTime: ms("4h"),
    staleTime: ms("5m"),
    enabled,
  });

  return {
    isEnrichLoading: isLoading,
    isEnrichError: isError,
  };
};
