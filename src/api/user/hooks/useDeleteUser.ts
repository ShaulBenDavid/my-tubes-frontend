"use client";

import type { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "../user.method";

const DELETE_USER_KEY = "deleteUser";

interface UseDeleteUserProps {
  handleSuccess?: () => void;
  handleError?: (data: AxiosError<{ error: string }>) => void;
}

export const useDeleteUser = ({
  handleSuccess,
  handleError,
}: UseDeleteUserProps) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: [DELETE_USER_KEY],
    mutationFn: deleteUser,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  return {
    deleteUser: mutate,
    deleteError: error,
    isDeleteUserLoading: isPending,
    isDeleteUserError: isError,
  };
};
