"use client";

import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { getPublicGroupInfo } from "../openToPublic.methods";

export const GET_PUBLIC_GROUP_INFO_KEY = "getPublicGroupInfo";

interface UseGetPublicGroupInfoProps {
  userId: number;
  groupId: number;
}

export const useGetPublicGroupInfo = ({
  userId,
  groupId,
}: UseGetPublicGroupInfoProps) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [GET_PUBLIC_GROUP_INFO_KEY, { userId, groupId }],
    queryFn: () => getPublicGroupInfo(userId, groupId),
    gcTime: ms("4h"),
  });

  return {
    groupInfo: data,
    isGroupInfoLoading: isLoading,
    isGroupInfoError: isError,
  };
};
