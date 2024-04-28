"use client";

import { useMutation } from "@tanstack/react-query";
import { editSubscriptionsGroup } from "../subscription.methods";

const EDIT_SUBSCRIPTIONS_GROUP_KEY = "editSubscriptionsGroup";

interface UseEditSubscriptionsGroupProps {
  handleSuccess?: () => void;
}

export const useEditSubscriptionsGroup = ({
  handleSuccess,
}: UseEditSubscriptionsGroupProps) => {
  const { mutate, isPending, isError, error, data } = useMutation({
    mutationKey: [EDIT_SUBSCRIPTIONS_GROUP_KEY],
    mutationFn: editSubscriptionsGroup,
    onSuccess: handleSuccess,
  });

  return {
    groupData: data,
    editGroup: mutate,
    editGroupError: error,
    isEditGroupLoading: isPending,
    isEditGroupError: isError,
  };
};
