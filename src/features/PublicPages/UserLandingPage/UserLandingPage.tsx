"use client";

import React from "react";
import { notFound } from "next/navigation";
import { useGetPublicUserInfo } from "@/src/api/openToPublic/hooks";
import { HttpStatusCode } from "@/src/types";

interface UserLandingPageProps {
  username: string;
}

export const UserLandingPage = ({
  username,
}: UserLandingPageProps): JSX.Element => {
  const { userInfoError } = useGetPublicUserInfo({ username });

  if (userInfoError?.response?.status === HttpStatusCode.NOT_FOUND) {
    notFound();
  }

  return <div>UserLandingPage</div>;
};
