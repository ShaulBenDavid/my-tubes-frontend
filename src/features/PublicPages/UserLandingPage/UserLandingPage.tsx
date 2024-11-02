"use client";

import React from "react";
import { notFound } from "next/navigation";
import { useGetPublicUserInfo } from "@/src/api/openToPublic/hooks";
import { HttpStatusCode } from "@/src/types";
import { UserHeader } from "./components/UserHeader";
import { UserLandingPageLoader } from "./UserLandingPage.loader";

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
    <article className="flex flex-col">
      <UserHeader
        imageUrl={imageUrl}
        firstName={firstName}
        lastName={lastName}
      />
    </article>
  );
};
