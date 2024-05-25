"use client";

import { isAxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { postSubscriptionsGroup } from "../subscription.methods";

const POST_SUBSCRIPTIONS_GROUP_KEY = "postSubscriptionsGroup";

interface UsePostSubscriptionsGroupProps {
  handleSuccess?: () => void;
}

export const usePostSubscriptionsGroup = ({
  handleSuccess,
}: UsePostSubscriptionsGroupProps) => {
  const { mutate, isPending, isError, error, data } = useMutation({
    mutationKey: [POST_SUBSCRIPTIONS_GROUP_KEY],
    mutationFn: postSubscriptionsGroup,
    onSuccess: handleSuccess,
  });

  return {
    groupData: data,
    postGroup: mutate,
    groupError: isAxiosError(error) ? error : undefined,
    isPostGroupLoading: isPending,
    isPostGroupError: isError,
  };
};
