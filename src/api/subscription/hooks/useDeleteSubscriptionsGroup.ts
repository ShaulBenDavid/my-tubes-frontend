"use client";

import { useMutation } from "@tanstack/react-query";
import { deleteSubscriptionsGroup } from "../subscription.methods";

const DELETE_SUBSCRIPTIONS_GROUP_KEY = "deleteSubscriptionsGroup";

interface UseDeleteSubscriptionsGroupProps {
  handleSuccess?: () => void;
  handleError?: () => void;
}

export const useDeleteSubscriptionsGroup = ({
  handleSuccess,
  handleError,
}: UseDeleteSubscriptionsGroupProps) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: [DELETE_SUBSCRIPTIONS_GROUP_KEY],
    mutationFn: deleteSubscriptionsGroup,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  return {
    deleteGroup: mutate,
    deleteGroupError: error,
    isDeleteGroupLoading: isPending,
    isDeleteGroupError: isError,
  };
};
