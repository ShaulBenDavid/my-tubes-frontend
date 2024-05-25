"use client";

import type { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { postAddSubscriptionGroup } from "../subscription.methods";
import type { SubscriptionType } from "../subscription.types";

const POST_ADD_SUBSCRIPTION_GROUP_KEY = "postAddSubscriptionGroup";

interface UsePostAddSubscriptionGroupProps {
  handleSuccess?: (data: SubscriptionType) => void;
  handleError?: (data: AxiosError<{ error: string }>) => void;
}

export const usePostAddSubscriptionGroup = ({
  handleSuccess,
  handleError,
}: UsePostAddSubscriptionGroupProps) => {
  const { mutate, isPending, isError, error, data } = useMutation({
    mutationKey: [POST_ADD_SUBSCRIPTION_GROUP_KEY],
    mutationFn: postAddSubscriptionGroup,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  return {
    subscriptionData: data,
    addSubscriptionGroup: mutate,
    subscriptionError: error,
    isPostAddSubscriptionLoading: isPending,
    isPostAddSubscriptionError: isError,
  };
};
