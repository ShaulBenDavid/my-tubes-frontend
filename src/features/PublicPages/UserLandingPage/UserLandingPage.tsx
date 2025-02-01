"use client";

import React from "react";
import { notFound } from "next/navigation";
import { useGetPublicUserInfo } from "@/src/api/openToPublic/hooks";
import { HttpStatusCode } from "@/src/types";
import { UserHeader } from "./components/UserHeader";
import { UserLandingPageLoader } from "./UserLandingPage.loader";
import { getSocialLinks } from "./UserLandingPage.utils";
import { SocialLinks } from "./components/SocialLinks/SocialLinks";
import { GroupsSection } from "./components/GroupsSection";
import { CustomLinks } from "./components/CustomLinks";

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
    description,
    user: { imageUrl, firstName, lastName },
    customUrls,
  } = userInfo;

  return (
    <article className="flex w-full max-w-[1400px] flex-col items-center gap-4 p-2 tb:p-4">
      <UserHeader
        imageUrl={imageUrl}
        firstName={firstName}
        lastName={lastName}
        description={description}
      />
      <SocialLinks links={getSocialLinks(userInfo)} />
      {customUrls?.length && <CustomLinks data={customUrls} />}
      <GroupsSection username={username} profileId={userInfo.id} />
    </article>
  );
};
