"use client";

import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { getGroupShareLink } from "../subscription.methods";
import type { GetGroupShareLinkParams } from "../subscription.types";

const GET_GROUP_SHARE_LINK_KEY = "getGroupShareLink";

export const useGetGroupShareLink = (params: GetGroupShareLinkParams) => {
  const { isLoading, data } = useQuery({
    queryKey: [GET_GROUP_SHARE_LINK_KEY, params],
    queryFn: () => getGroupShareLink(params),
    gcTime: ms("4h"),
  });

  return {
    isGroupLinkLoading: isLoading,
    groupShareLink: data?.link,
  };
};
