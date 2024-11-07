"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { GroupType } from "@/src/api/subscription";
import {
  useGetGroupInfoFromShareLink,
  useGetSubscriptionsFromShareLink,
} from "@/src/api/openToPublic/hooks";
import { HttpStatusCode } from "@/src/types";
import { Routes } from "@/src/routes";
import { PublicGroupHeader } from "../components/PublicGroupHeader";
import { PublicGroupBody } from "../components/PublicGroupBody";

interface SharedPageProps {
  token: string;
}

export const SharedPage = ({ token }: SharedPageProps): JSX.Element => {
  const router = useRouter();

  const { groupInfo, isGroupInfoLoading, groupInfoError } =
    useGetGroupInfoFromShareLink({
      token,
    });

  const { subscriptions, isSubscriptionsLoading } =
    useGetSubscriptionsFromShareLink({ token });

  useEffect(() => {
    if (groupInfoError?.response?.status === HttpStatusCode.NOT_FOUND) {
      router.replace(Routes.ROOT);
    }
  }, [groupInfoError, router]);

  const { expirationDate, userList, ...rest } = groupInfo ?? {};

  return (
    <article className="flex h-full w-full max-w-[1400px] flex-col gap-4 p-2 tb:p-4">
      <PublicGroupHeader
        groupInfo={(rest as GroupType)?.id ? (rest as GroupType) : undefined}
        userInfo={userList?.user}
        expirationDate={expirationDate}
        isLoading={isGroupInfoLoading}
      />
      <PublicGroupBody
        isLoading={isSubscriptionsLoading}
        subscriptions={subscriptions}
      />
    </article>
  );
};
