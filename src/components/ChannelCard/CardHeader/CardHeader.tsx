"use client";

import React from "react";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { MdDragIndicator, MdGroups } from "react-icons/md";
import { buildRoutePath, stringToColor } from "@/src/utils";
import { Routes } from "@/src/routes";
import { Avatar } from "@/src/components/Avatar";
import type { SubscriptionsGroupType } from "@/src/api/subscription";

interface CardHeaderProps {
  title: string;
  imageUrl: string;
  isDraggable?: boolean;
  group?: Pick<SubscriptionsGroupType, "id" | "title"> | null;
}

export const CardHeader = ({
  title,
  group,
  imageUrl,
  isDraggable,
}: CardHeaderProps): JSX.Element => (
  <div className="flex flex-row items-center gap-2">
    <Avatar name={title} url={imageUrl} />
    <span className="flex w-full flex-col">
      <h5 className="line-clamp-1 text-ellipsis text-base font-semibold capitalize">
        {title}
      </h5>
      {group?.title && (
        <span className="flex flex-row items-center gap-1">
          <MdGroups
            aria-hidden
            className="shrink-0"
            fill={stringToColor(group.title + group.id)}
          />
          <Tooltip id={group.title} className="z-10 max-w-full">
            <p className="text-white">Group</p>
          </Tooltip>
          <Link
            data-tooltip-id={group.title}
            data-tooltip-variant="info"
            className="line-clamp-1 text-ellipsis text-sm font-normal capitalize opacity-80 hover:underline"
            href={buildRoutePath(
              Routes.SUBSCRIPTIONS,
              Routes.GROUP,
              title,
              String(group.id),
            )}
          >
            {group.title}
          </Link>
        </span>
      )}
    </span>
    {isDraggable && (
      <MdDragIndicator size={30} className="ml-auto shrink-0 opacity-70" />
    )}
  </div>
);
