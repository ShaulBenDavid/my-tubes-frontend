"use client";

import React from "react";
import { notFound } from "next/navigation";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useGetPublicUserInfo } from "@/src/api/openToPublic/hooks";
import { HttpStatusCode } from "@/src/types";
import { UserHeader } from "./components/UserHeader";
import { UserLandingPageLoader } from "./UserLandingPage.loader";
import { getSocialLinks } from "./UserLandingPage.utils";
import { SocialLinks } from "./components/SocialLinks/SocialLinks";
import { GroupsSection } from "./components/GroupsSection";

interface UserLandingPageProps {
  username: string;
}

export const UserLandingPage = ({
  username,
}: UserLandingPageProps): JSX.Element => {
  const { userInfo, isUserInfoLoading, userInfoError } = useGetPublicUserInfo({
    username,
  });

  if (isUserInfoLoading) {
    return <UserLandingPageLoader />;
  }

  if (
    userInfoError?.response?.status === HttpStatusCode.NOT_FOUND ||
    !userInfo
  ) {
    notFound();
  }

  const {
    user: { imageUrl, firstName, lastName },
  } = userInfo;

  return (
    <DndProvider backend={HTML5Backend}>
      <article className="flex h-full w-full max-w-[1400px] flex-col gap-4 p-2 tb:p-4">
        <UserHeader
          imageUrl={imageUrl}
          firstName={firstName}
          lastName={lastName}
        />
        <SocialLinks links={getSocialLinks(userInfo)} />
        <GroupsSection username={username} />
      </article>
    </DndProvider>
  );
};
