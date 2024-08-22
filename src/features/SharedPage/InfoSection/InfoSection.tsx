"use effect";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { HttpStatusCode } from "@/src/types";
import { GroupInfo } from "./components/GroupInfo";
import { useGetGroupInfoFromShareLink } from "@/src/api/openToPublic/hooks/useGetGroupInfoFromShareLink";
import { UserInfo } from "./components/UserInfo";
import { InfoSectionLoader } from "./InfoSection.loader";
import { Routes } from "@/src/routes";

interface InfoSectionProps {
  token: string;
}

export const InfoSection = ({ token }: InfoSectionProps): JSX.Element => {
  const router = useRouter();
  const { groupInfo, isGroupInfoLoading, groupInfoError } =
    useGetGroupInfoFromShareLink({
      token,
    });

  useEffect(() => {
    if (
      axios.isAxiosError(groupInfoError) &&
      groupInfoError?.response?.status === HttpStatusCode.NOT_FOUND
    ) {
      router.replace(Routes.ROOT);
    }
  }, [groupInfoError, router]);

  return (
    <div className="flex flex-col gap-4 pt-4">
      {isGroupInfoLoading && <InfoSectionLoader />}
      {groupInfo && !isGroupInfoLoading && (
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
