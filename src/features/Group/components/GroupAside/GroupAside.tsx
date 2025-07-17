"use client";

import React from "react";
import { GroupsNavbar } from "./GroupsNavbar";
import { Share, ShareLoader } from "@/src/components/Share";
import { useGetGroupShareLink } from "@/src/api/subscription/hooks";
import { useGetUserInfo } from "@/src/api/user/hooks";
import { GROUP_SETTINGS_DRAWER } from "../GroupHeader/GroupHeader";
import { Drawer } from "@/src/components/Drawer";

const PUBLIC_SHARED_GROUP_URL = "https://my-tubes.com/channels";

interface GroupAsideProps {
  currentGroupId: number;
  groupName: string;
  isDesktop: boolean;
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

export const GroupAside = ({
  currentGroupId,
  groupName,
  isDesktop,
  isDrawerOpen,
  toggleDrawer,
}: GroupAsideProps): JSX.Element => {
  const { userInfo } = useGetUserInfo();
  const { isGroupLinkLoading, groupShareLink } = useGetGroupShareLink({
    groupId: currentGroupId,
    path: PUBLIC_SHARED_GROUP_URL,
  });

  const renderContent = (): JSX.Element => (
    <>
      {isGroupLinkLoading && <ShareLoader />}
      {groupShareLink && !isGroupLinkLoading && (
        <Share
          url={groupShareLink}
          title={`${userInfo?.firstName} ${userInfo?.lastName} - ${groupName} Subscriptions`}
          content={`${userInfo?.firstName} Invites You to Explore Subscriptions on the Topic: ${groupName}`}
          tooltipContent="This link allows you to share all subscriptions within this group. It's valid for 24 hours."
        />
      )}
      <GroupsNavbar currentGroupId={currentGroupId} />
    </>
  );

  return isDesktop ? (
    <aside className="flex h-full w-72 shrink-0" style={{ zIndex: 1 }}>
      <div className="fixed top-0 flex h-dvh w-72 flex-col gap-5 border-r border-white/30 p-2 pl-0 pt-[calc(101px+var(--desktop-top-padding))]">
        {renderContent()}
      </div>
    </aside>
  ) : (
    <Drawer
      onClose={toggleDrawer}
      isOpen={isDrawerOpen}
      id={GROUP_SETTINGS_DRAWER}
    >
      <div className="flex h-full w-72 shrink-0 flex-col gap-5 border-r border-white/30 p-2 pl-0">
        {renderContent()}
      </div>
    </Drawer>
  );
};
