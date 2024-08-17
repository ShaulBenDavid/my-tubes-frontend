"use client";

import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { getGroupInfoFromShareLink } from "../openToPublic.methods";
import type { SharedLinkParams } from "../openToPublic.types";

const GET_GROUP_INFO_FROM_SHARE_LINK_KEY = "getGroupInfoFromShareLink";

export const useGetGroupInfoFromShareLink = (params: SharedLinkParams) => {
  const { isLoading, data } = useQuery({
    queryKey: [GET_GROUP_INFO_FROM_SHARE_LINK_KEY, params],
    queryFn: () => getGroupInfoFromShareLink(params),
    gcTime: ms("4h"),
  });

  return {
    isGroupInfoLoading: isLoading,
    groupInfo: data,
  };
};
