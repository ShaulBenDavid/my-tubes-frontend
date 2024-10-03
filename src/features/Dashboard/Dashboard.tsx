"use client";

import React from "react";
import { BsCloudPlusFill } from "react-icons/bs";
import { EmptyState } from "@/src/components/EmptyState";
import NextOptionSVG from "@/src/assets/images/NextOptionSVG.svg";
import WarningSVG from "@/src/assets/images/WarningDrawSVG.svg";
import { Routes } from "@/src/routes";
import { ButtonLink } from "@/src/components/ButtonLink";

export const Dashboard = (): JSX.Element => (
  <div className="flex h-full items-center justify-center">
    <EmptyState
      svgUrl={!true ? WarningSVG : NextOptionSVG}
      header={
        !true
          ? "Some Error happened sorry for the inconvenience"
          : "Welcome to my tubes!"
      }
      description={
        !true
          ? undefined
          : "To experience the full potential of the app, start by creating a group."
      }
      footer={
        !true ? undefined : (
          <ButtonLink href={Routes.SUBSCRIPTIONS}>
            <span className="flex flex-row gap-2">
              Go To Subscriptions <BsCloudPlusFill size={24} aria-hidden />
            </span>
          </ButtonLink>
        )
      }
    />
  </div>
);
