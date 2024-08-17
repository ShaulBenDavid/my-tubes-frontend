import React from "react";
import { GroupInfo } from "./GroupInfo";
import { useGetGroupInfoFromShareLink } from "@/src/api/openToPublic/hooks/useGetGroupInfoFromShareLink";

interface InfoSectionProps {
  token: string;
}

export const InfoSection = ({ token }: InfoSectionProps): JSX.Element => {
  const { groupInfo } = useGetGroupInfoFromShareLink({ token });

  return (
    <div className="pt-4">
      {groupInfo && (
        <GroupInfo
          title={groupInfo.title}
          description={groupInfo.description}
          id={groupInfo.id}
          emoji={groupInfo.emoji}
        />
      )}
    </div>
  );
};
