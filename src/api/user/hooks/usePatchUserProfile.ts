"use client";

import type { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import type { UserProfileType } from "../user.types";
import { patchUserProfile } from "../user.method";

const PATCH_USER_PROFILE_KEY = "patchUserProfile";

interface UsePatchUserProfile {
  handleSuccess?: (data: UserProfileType) => void;
  handleError?: (data: AxiosError<{ error: string }>) => void;
}

export const usePatchUserProfile = ({
  handleSuccess,
  handleError,
}: UsePatchUserProfile) => {
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
