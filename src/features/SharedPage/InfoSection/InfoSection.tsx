import React from "react";
import { GroupInfo } from "./components/GroupInfo";
import { useGetGroupInfoFromShareLink } from "@/src/api/openToPublic/hooks/useGetGroupInfoFromShareLink";
import { UserInfo } from "./components/UserInfo";

interface InfoSectionProps {
  token: string;
}

export const InfoSection = ({ token }: InfoSectionProps): JSX.Element => {
  const { groupInfo } = useGetGroupInfoFromShareLink({ token });

  return (
    <div className="flex flex-col gap-4 pt-4">
      {groupInfo && (
        <>
          <GroupInfo
            title={groupInfo.title}
            description={groupInfo.description}
            id={groupInfo.id}
            emoji={groupInfo.emoji}
          />
          <UserInfo
            expirationDate={groupInfo.expirationDate}
            username={groupInfo.userList.user.username}
            imageUrl={groupInfo.userList.user.imageUrl}
          />
        </>
      )}
    </div>
  );
};
