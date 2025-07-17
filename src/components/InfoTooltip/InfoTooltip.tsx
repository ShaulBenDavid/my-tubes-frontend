"use client";

import React, { type ReactNode, useId } from "react";
import { twMerge } from "tailwind-merge";
import { type PlacesType, Tooltip } from "react-tooltip";
import { IoIosInformationCircleOutline } from "react-icons/io";
import theme from "@/src/styles/tailwind.theme";

interface InfoTooltipProps {
  title: ReactNode;
  place?: PlacesType;
  className?: string;
}

export const InfoTooltip = ({
  title,
  place,
  className,
}: InfoTooltipProps): JSX.Element => {
  const id = useId();

  return (
    <>
      <Tooltip
        id={id}
        className={twMerge("max-w-full", className)}
        positionStrategy="fixed"
        place={place}
      >
        <p className="text-sm font-normal text-white">{title}</p>
      </Tooltip>
      <IoIosInformationCircleOutline
        data-tooltip-id={id}
        data-tooltip-variant="info"
        stroke={theme["spec-text-secondary"]}
        className="shrink-0"
        size={24}
      />
    </>
  );
};
