"use client";

import React, { type ReactNode, useId } from "react";
import { type PlacesType, Tooltip } from "react-tooltip";
import { IoIosInformationCircleOutline } from "react-icons/io";
import theme from "@/src/styles/tailwind.theme";

interface InfoTooltipProps {
  title: ReactNode;
  place?: PlacesType;
}

export const InfoTooltip = ({
  title,
  place,
}: InfoTooltipProps): JSX.Element => {
  const id = useId();

  return (
    <>
      <Tooltip
        id={id}
        className="z-50 max-w-full"
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
