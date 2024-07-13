"use client";

import { useEffect } from "react";
import ms from "ms";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { login } from "../auth.methods";
import type { LoginParamsType, AuthResponseType } from "../auth.types";

const GET_LOGIN_KEY = "getLogin";

interface UseLoginProps {
  params: LoginParamsType;
  handleSuccess: (res: AuthResponseType) => void;
}

export const useLogin = ({ params, handleSuccess }: UseLoginProps) => {
  const { data, isError, isSuccess, isLoading, error } = useQuery({
    queryKey: [GET_LOGIN_KEY, params],
    queryFn: () => login(params),
    gcTime: ms("4h"),
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
