"use client";

import { useMutation } from "@tanstack/react-query";
import { postSubscriptionsGroup } from "../subscription.methods";

const POST_SUBSCRIPTIONS_GROUP_KEY = "postSubscriptionsGroup";

interface UsePostSubscriptionsGroupProps {
  handleSuccess?: () => void;
}

export const usePostSubscriptionsGroup = ({
  handleSuccess,
}: UsePostSubscriptionsGroupProps) => {
  const { isPending, isError } = useMutation({
    mutationKey: [POST_SUBSCRIPTIONS_GROUP_KEY],
    mutationFn: postSubscriptionsGroup,
    onSuccess: handleSuccess,
  });

  return {
    isPostGroupLoading: isPending,
    isPostGroupError: isError,
  };
};
