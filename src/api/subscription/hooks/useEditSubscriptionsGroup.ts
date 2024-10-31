"use client";

import { useMutation } from "@tanstack/react-query";
import { editSubscriptionsGroup } from "../subscription.methods";
import type { SubscriptionsGroupType } from "../subscription.types";

const EDIT_SUBSCRIPTIONS_GROUP_KEY = "editSubscriptionsGroup";

interface UseEditSubscriptionsGroupProps {
  handleSuccess?: (data: SubscriptionsGroupType) => void;
  handleError?: () => void;
}

export const useEditSubscriptionsGroup = ({
  handleSuccess,
  handleError,
}: UseEditSubscriptionsGroupProps) => {
  const { mutate, isPending, isError, error, data, variables } = useMutation({
    mutationKey: [EDIT_SUBSCRIPTIONS_GROUP_KEY],
    mutationFn: editSubscriptionsGroup,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  return {
    groupData: data,
    editGroup: mutate,
    editGroupError: error,
    isEditGroupLoading: isPending,
    isEditGroupError: isError,
    variables,
  };
};
