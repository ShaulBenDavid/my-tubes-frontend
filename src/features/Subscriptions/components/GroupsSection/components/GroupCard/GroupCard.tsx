"use client";

import React from "react";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { useDrop } from "react-dnd";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Routes } from "@/src/routes";
import { Card } from "@/src/components/Card";
import type {
  SubscriptionType,
  SubscriptionsGroupType,
} from "@/src/api/subscription";
import { buildRoutePath, stringToColor, wordToCapitalize } from "@/src/utils";
import { CardActions } from "./CardActions";

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
  const { title, description, subscriptionCount, id } = data;
  const color = stringToColor(title + id);
  const capitalizedTitle = wordToCapitalize(title);
  const countDetails = `Subscriptions count in ${capitalizedTitle} group is ${subscriptionCount}`;

  const [{ isOver }, drop] = useDrop({
    accept: DND_TYPE_ID,
    drop: (dropData: SubscriptionType) => onDrop(dropData, data.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} style={{ opacity: isOver ? 0.5 : 1 }}>
      <Card
        className="flex h-full w-full flex-col border-2"
        style={{ borderColor: color }}
      >
        <h5 className="text-lg font-semibold">
          <Link
            className="hover:text-blue-400 hover:underline"
            href={buildRoutePath(
              Routes.SUBSCRIPTIONS,
              Routes.GROUP,
              title,
              String(id),
            )}
          >
            <span style={{ color }}>#</span>
            {capitalizedTitle}
          </Link>
        </h5>
        <p className="line-clamp-6">{description}</p>
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
          <CardActions
            name={title}
            onDelete={handleDeleteClick}
            onEdit={handleEditClick}
          />
        </div>
      </Card>
    </div>
  );
};
