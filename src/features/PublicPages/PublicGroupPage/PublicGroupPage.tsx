"use client";

import React from "react";
import { PublicGroupHeader } from "../components/PublicGroupHeader";
import { PublicGroupBody } from "../components/PublicGroupBody";
import {
  useGetPublicGroupInfo,
  useGetPublicGroupSubscriptions,
} from "@/src/api/openToPublic/hooks";

interface PublicGroupPageProps {
  profileId: number;
  groupId: number;
  username: string;
}

export const PublicGroupPage = ({
  profileId,
  groupId,
  username,
}: PublicGroupPageProps): JSX.Element => {
  const { groupInfo, isGroupInfoLoading } = useGetPublicGroupInfo({
    userId: profileId,
    groupId,
  });
  const { groupSubscriptions, isGroupSubscriptionsLoading } =
    useGetPublicGroupSubscriptions({ userId: profileId, groupId });

  return (
    <article className="flex w-full max-w-[1400px] flex-col gap-4 p-2 tb:p-4">
      <PublicGroupHeader
        groupInfo={groupInfo}
        userInfo={groupInfo?.userList?.user}
        isLoading={isGroupInfoLoading}
        backwardHref={`/${username.replace(/%40/g, "@")}`}
      />
      <PublicGroupBody
        isLoading={isGroupSubscriptionsLoading}
        subscriptions={groupSubscriptions}
      />
    </article>
  );
};
