import React from "react";
import { Tooltip } from "react-tooltip";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Card } from "@/src/components/Card";
import type { SubscriptionsGroupType } from "@/src/api/subscription";
import { stringToColor, wordToCapitalize } from "@/src/utils";
import { CardActions } from "./CardActions";

interface GroupCardProps {
  data: SubscriptionsGroupType;
  handleDeleteClick: () => void;
  handleEditClick: () => void;
}

export const GroupCard = ({
  data,
  handleDeleteClick,
  handleEditClick,
}: GroupCardProps): JSX.Element => {
  const { title, description, subscriptionCount, id } = data;
  const color = stringToColor(title);
  const capitalizedTitle = wordToCapitalize(title);
  const countDetails = `Subscriptions count in ${capitalizedTitle} group is ${subscriptionCount}`;

  return (
    <Card
      className="flex h-full w-full flex-col border-2"
      style={{ borderColor: color }}
    >
      <h5 className="text-lg font-semibold">{capitalizedTitle}</h5>
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
  );
};
