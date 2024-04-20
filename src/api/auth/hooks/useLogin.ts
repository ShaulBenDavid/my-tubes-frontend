"use client";

import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { login } from "../auth.methods";
import type { LoginParamsType, AuthResponseType } from "../auth.types";

const GET_LOGIN_KEY = "getLogin";

interface UseLoginProps {
  params: LoginParamsType;
  enabled?: boolean;
  handleSuccess: (res: AuthResponseType) => void;
}

export const useLogin = ({
  params,
  enabled = false,
  handleSuccess,
}: UseLoginProps) => {
  const { data, isError, isSuccess, isLoading, error } = useQuery({
    queryKey: [GET_LOGIN_KEY],
    queryFn: () => login(params),
    enabled,
    gcTime: 60 * 60 * 1000,
    retry: 0,
  });

  useEffect(() => {
    if (isSuccess && data) {
      handleSuccess(data);
    }
  }, [handleSuccess, isSuccess, data]);

  return {
    isLoginLoading: isLoading,
    isLoginError: isError,
    loginError: axios.isAxiosError(error) ? error : undefined,
  };
};
