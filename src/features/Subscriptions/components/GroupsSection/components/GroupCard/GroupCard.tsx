"use client";

import React from "react";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { useDrop } from "react-dnd";
import { FaArrowRight } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Routes } from "@/src/routes";
import { Card } from "@/src/components/Card";
import { GroupActions } from "@/src/features/Group/components/GroupActions";
import type {
  SubscriptionType,
  SubscriptionsGroupType,
} from "@/src/api/subscription";
import { buildRoutePath, stringToColor, wordToCapitalize } from "@/src/utils";

export const DND_TYPE_ID = "channel";

interface GroupCardProps {
  data: SubscriptionsGroupType;
  handleDeleteClick: () => void;
  handleEditClick: () => void;
  onDrop: (data: SubscriptionType, groupId: number) => void;
}

export const GroupCard = ({
  data,
  handleDeleteClick,
  handleEditClick,
  onDrop,
}: GroupCardProps): JSX.Element => {
  const { title, subscriptionCount, emoji, id } = data;
  const color = stringToColor(title + id);
  const capitalizedTitle = wordToCapitalize(title);
  const countDetails = `Subscriptions count in ${capitalizedTitle} group is ${subscriptionCount}`;

  const [{ isOver, isDrag }, drop] = useDrop({
    accept: DND_TYPE_ID,
    drop: (dropData: SubscriptionType) => onDrop(dropData, data.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isDrag: !!monitor.getItemType(),
    }),
  });

  return (
    <div ref={drop} style={{ opacity: isOver ? 0.5 : 1 }}>
      <Card
        className="flex h-40 w-full flex-col border-2"
        style={{ borderColor: color, borderStyle: isDrag ? "dashed" : "solid" }}
      >
        <h5 className="flex text-lg font-semibold">
          <Link
            className="flex w-full flex-row items-center duration-100 ease-linear hover:text-blue-400 hover:underline"
            href={buildRoutePath(
              Routes.SUBSCRIPTIONS,
              Routes.GROUP,
              title,
              String(id),
            )}
          >
            {emoji && <span className="mr-2 text-4xl">{emoji}</span>}
            <span style={{ color }} aria-hidden>
              #
            </span>
            <span className="line-clamp-1">{capitalizedTitle}</span>
            <FaArrowRight aria-hidden className="ml-2" />
          </Link>
        </h5>
        <div className="mt-auto flex flex-row justify-between">
          <Tooltip content={countDetails} id={String(id)} />
          <span
            className="flex flex-row gap-1"
            data-tooltip-id={String(id)}
            data-tooltip-variant="info"
            aria-label={countDetails}
          >
            <HiMiniUserGroup size={24} color={color} />
            {subscriptionCount}
          </span>
          <GroupActions
            name={title}
            onDelete={handleDeleteClick}
            onEdit={handleEditClick}
          />
        </div>
      </Card>
    </div>
  );
};
