"use client";

import { useMutation } from "@tanstack/react-query";
import { deleteSubscriptionFromGroup } from "../subscription.methods";

const DELETE_SUBSCRIPTION_FROM_GROUP_KEY = "deleteSubscriptionFromGroup";

interface UseDeleteSubscriptionFromGroupProps {
  handleSuccess?: () => void;
  handleError?: () => void;
}

export const useDeleteSubscriptionFromGroup = ({
  handleSuccess,
  handleError,
}: UseDeleteSubscriptionFromGroupProps) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: [DELETE_SUBSCRIPTION_FROM_GROUP_KEY],
    mutationFn: deleteSubscriptionFromGroup,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  return {
    removeSubscription: mutate,
    removeSubscriptionError: error,
    isRemoveSubscriptionLoading: isPending,
    isRemoveSubscriptionError: isError,
  };
};
