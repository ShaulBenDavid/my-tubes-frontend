"use client";

import React from "react";
import { GroupsNavbar } from "./GroupsNavbar";
import { Share, ShareLoader } from "@/src/components/Share";
import { useGetGroupShareLink } from "@/src/api/subscription/hooks";
import { useGetUserInfo } from "@/src/api/user/hooks";

const PUBLIC_SHARED_GROUP_URL = "https://my-tubes.com/channels";

interface GroupAsideProps {
  currentGroupId: number;
  groupName: string;
}

export const GroupAside = ({
  currentGroupId,
  groupName,
}: GroupAsideProps): JSX.Element => {
  const { userInfo } = useGetUserInfo();
  const { isGroupLinkLoading, groupShareLink } = useGetGroupShareLink({
    groupId: currentGroupId,
    path: PUBLIC_SHARED_GROUP_URL,
  });

  return (
    <aside className="flex h-full w-72 shrink-0 flex-col gap-4 border-r border-white/30 p-2 pl-0">
      {isGroupLinkLoading && <ShareLoader />}
      {groupShareLink && !isGroupLinkLoading && (
        <Share
          url={groupShareLink}
          title={`${userInfo?.firstName} ${userInfo?.lastName} - ${groupName} Subscriptions`}
          content={`${userInfo?.firstName} Invites You to Explore Subscriptions on the Topic: ${groupName}`}
        />
      )}
      <GroupsNavbar currentGroupId={currentGroupId} />
    </aside>
  );
};
