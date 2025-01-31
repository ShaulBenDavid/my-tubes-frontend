"use client";

import type { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import type { UserMyLinksType } from "../user.types";
import { patchUserCustomLinks } from "../user.method";

const PATCH_USER_CUSTOM_LINKS_KEY = "patchUserCustomLinks";

interface UsePatchUserCustomLinksProps {
  handleSuccess?: (data: UserMyLinksType) => void;
  handleError?: (data: AxiosError<{ error: string }>) => void;
}

export const usePatchUserCustomLinks = ({
  handleSuccess,
  handleError,
}: UsePatchUserCustomLinksProps) => {
  const { mutate, isPending, isError, error, data } = useMutation({
    mutationKey: [PATCH_USER_CUSTOM_LINKS_KEY],
    mutationFn: patchUserCustomLinks,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  return {
    userCustomLinks: data,
    patchCustomLinks: mutate,
    customLinksError: error,
    isUserCustomLinksLoading: isPending,
    isUserCustomLinksError: isError,
  };
};
