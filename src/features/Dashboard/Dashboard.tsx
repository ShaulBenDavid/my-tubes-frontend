"use client";

import React from "react";
import { BsCloudPlusFill } from "react-icons/bs";
import { EmptyState } from "@/src/components/EmptyState";
import NextOptionSVG from "@/src/assets/images/NextOptionSVG.svg";
import WarningSVG from "@/src/assets/images/WarningDrawSVG.svg";
import { Routes } from "@/src/routes";
import { ButtonLink } from "@/src/components/ButtonLink";
import { GroupsChart } from "./components/GroupsChart";
import { useGetSubscriptionsGroups } from "@/src/api/subscription/hooks";

export const Dashboard = (): JSX.Element => {
  const { subscriptionsGroups, isGroupsError, isGroupsLoading } =
    useGetSubscriptionsGroups();

  return (
    <div className="flex h-full w-full flex-col">
      {(subscriptionsGroups?.length === 0 || isGroupsError) &&
        !isGroupsLoading && (
          <div className="flex flex-1 items-center justify-center">
            <EmptyState
              svgUrl={isGroupsError ? WarningSVG : NextOptionSVG}
              header={
                isGroupsError
                  ? "Some Error happened sorry for the inconvenience"
                  : "Welcome to my tubes!"
              }
              description={
                isGroupsError
                  ? undefined
                  : "To experience the full potential of the app, start by creating a group."
              }
              footer={
                isGroupsError ? undefined : (
                  <ButtonLink href={Routes.SUBSCRIPTIONS}>
                    <span className="flex flex-row gap-2">
                      Go To Subscriptions{" "}
                      <BsCloudPlusFill size={24} aria-hidden />
                    </span>
                  </ButtonLink>
                )
              }
            />
          </div>
        )}
      {!isGroupsLoading && !!subscriptionsGroups?.length && (
        <div className="h-1/2 w-full">
          <GroupsChart data={subscriptionsGroups} />
        </div>
      )}
    </div>
  );
};
