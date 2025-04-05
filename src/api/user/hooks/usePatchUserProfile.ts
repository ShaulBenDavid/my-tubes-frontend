"use client";

import type { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import type { UserProfileType } from "../user.types";
import { patchUserProfile } from "../user.method";

const PATCH_USER_PROFILE_KEY = "patchUserProfile";

interface UsePatchUserProfileProps {
  handleSuccess?: (data: UserProfileType) => void;
  handleError?: (data: AxiosError<{ username?: string }>) => void;
}

export const usePatchUserProfile = ({
  handleSuccess,
  handleError,
}: UsePatchUserProfileProps) => {
  const { mutate, isPending, isError, error, data } = useMutation({
    mutationKey: [PATCH_USER_PROFILE_KEY],
    mutationFn: patchUserProfile,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  return {
    userProfile: data,
    patchProfile: mutate,
    profileError: error,
    isUserProfileLoading: isPending,
    isUserProfileError: isError,
  };
};
