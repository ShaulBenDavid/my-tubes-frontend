"use client";

import axios from "axios";
import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { getPublicUserInfo } from "../openToPublic.methods";

const GET_PUBLIC_USER_INFO_KEY = "getPublicUserInfo";

interface UseGetPublicUserInfoProps {
  username: string;
}

export const useGetPublicUserInfo = ({
  username,
}: UseGetPublicUserInfoProps) => {
  const { isLoading, data, error } = useQuery({
    queryKey: [GET_PUBLIC_USER_INFO_KEY, username],
    queryFn: () => getPublicUserInfo(username),
    gcTime: ms("4h"),
  });

  return {
    isUserInfoLoading: isLoading,
    userInfo: data,
    userInfoError: axios.isAxiosError(error) ? error : undefined,
  };
};
