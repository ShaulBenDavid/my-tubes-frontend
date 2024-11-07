"use effect";

import React from "react";
import { GroupInfo } from "./components/GroupInfo";
import { UserInfo } from "./components/UserInfo";
import { PublicGroupHeaderLoader } from "./PublicGroupHeader.loader";
import type { GroupType } from "@/src/api/subscription";
import type { UserSharedInfoType } from "@/src/api/openToPublic";

interface PublicGroupHeaderProps {
  isLoading: boolean;
  groupInfo?: GroupType;
  userInfo?: UserSharedInfoType;
  expirationDate?: Date;
  backwardHref?: string;
}

export const PublicGroupHeader = ({
  isLoading,
  groupInfo,
  userInfo,
  expirationDate,
  backwardHref,
}: PublicGroupHeaderProps): JSX.Element => (
  <div className="flex flex-col gap-4">
    {isLoading && <PublicGroupHeaderLoader />}
    {groupInfo && userInfo && !isLoading && (
      <>
        <GroupInfo
          title={groupInfo.title}
          description={groupInfo.description}
          id={groupInfo.id}
          emoji={groupInfo.emoji}
          href={backwardHref}
        />
        <UserInfo
          expirationDate={expirationDate}
          firstName={userInfo.firstName}
          lastName={userInfo?.lastName ?? ""}
          imageUrl={userInfo.imageUrl}
        />
      </>
    )}
  </div>
);
