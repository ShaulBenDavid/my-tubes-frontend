"use client";

import React from "react";
import { InfoTooltip } from "../InfoTooltip";
import { ShareButtons, type ShareButtonsProps } from "./ShareButtons";

interface ShareProps extends ShareButtonsProps {
  tooltipContent?: string;
}

export const Share = ({
  url = "",
  title,
  content,
  tooltipContent,
}: ShareProps): JSX.Element => (
  <div className="flex w-full flex-col gap-4">
    <div className="flex flex-row gap-2">
      <h3 className="text-base font-semibold">Share with your friends</h3>
      {tooltipContent && (
        <InfoTooltip title={tooltipContent} place="bottom-start" />
      )}
    </div>
    <ShareButtons url={url} content={content} title={title} />
  </div>
);
