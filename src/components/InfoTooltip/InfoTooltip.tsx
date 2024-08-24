"use client";

import React, { type ReactNode, useId } from "react";
import { Tooltip } from "react-tooltip";
import { IoIosInformationCircleOutline } from "react-icons/io";
import theme from "@/src/styles/tailwind.theme";

interface InfoTooltipProps {
  title: ReactNode;
}

export const InfoTooltip = ({ title }: InfoTooltipProps): JSX.Element => {
  const id = useId();

  return (
    <>
      <Tooltip id={id} className="z-10 max-w-full">
        <p className="text-white">{title}</p>
      </Tooltip>
      <IoIosInformationCircleOutline
        data-tooltip-id={id}
        data-tooltip-variant="info"
        stroke={theme["spec-text-secondary"]}
        size={24}
      />
    </>
  );
};
