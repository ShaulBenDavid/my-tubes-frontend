"use client";

import React, { useMemo } from "react";
import { BsCloudPlusFill } from "react-icons/bs";
import {
  useGetSubscriptionsGroups,
  useGetSubscriptionsInfo,
} from "@/src/api/subscription/hooks";
import { EmptyState } from "@/src/components/EmptyState";
import NextOptionSVG from "@/src/assets/images/NextOptionSVG.svg";
import WarningSVG from "@/src/assets/images/WarningDrawSVG.svg";
import { Routes } from "@/src/routes";
import { ButtonLink } from "@/src/components/ButtonLink";
import { GroupsChart } from "./components/GroupsChart";
import { GroupPie } from "./components/GroupPie";
import { Spinner, SpinnerSize } from "@/src/components/Spinner";

export const Dashboard = (): JSX.Element => {
  const { subscriptionsGroups, isGroupsError, isGroupsLoading } =
    useGetSubscriptionsGroups();
  const { subscriptionsInfo, isSubscriptionsError, isSubscriptionsLoading } =
    useGetSubscriptionsInfo();

  const isLoading: boolean = isGroupsLoading || isSubscriptionsLoading;
  const isError: boolean = isSubscriptionsError || isGroupsError;

  const totalGroupedSubscriptions = useMemo(
    (): number | undefined =>
      subscriptionsGroups?.reduce<number>(
        (acc, cur) => acc + cur.subscriptionCount,
        0,
      ),
    [subscriptionsGroups],
  );

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto">
      {isLoading && (
        <div className="flex flex-1 items-center justify-center">
          <Spinner size={SpinnerSize.LARGE} />
        </div>
      )}
      {(subscriptionsGroups?.length === 0 || isError) && !isLoading && (
        <div className="flex flex-1 items-center justify-center">
          <EmptyState
            svgUrl={isError ? WarningSVG : NextOptionSVG}
            header={
              isError
                ? "Some Error happened sorry for the inconvenience"
                : "Welcome to my tubes!"
            }
            description={
              isError
                ? undefined
                : "To experience the full potential of the app, start by creating a group."
            }
            footer={
              isError ? undefined : (
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
      {!isLoading &&
        !!subscriptionsGroups?.length &&
        !!subscriptionsInfo?.subscriptionsCount && (
          <div className="grid w-full grid-cols-1 gap-4 tb:h-1/2 tb:grid-cols-3 md:grid-cols-4">
            <GroupPie
              totalGroupedSubscriptions={totalGroupedSubscriptions || 0}
              totalSubscriptions={subscriptionsInfo.subscriptionsCount}
            />
            <GroupsChart data={subscriptionsGroups} />
          </div>
        )}
    </div>
  );
};
