"use client";

import React, { useId } from "react";
import { Tooltip } from "react-tooltip";
import { IoIosInformationCircleOutline } from "react-icons/io";
import theme from "@/src/styles/tailwind.theme";

interface InfoTooltipProps {
  title: string;
}

export const InfoTooltip = ({ title }: InfoTooltipProps): JSX.Element => {
  const id = useId();

  return (
    <>
      <Tooltip id={id}>
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
