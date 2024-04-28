import React from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Card } from "@/src/components/Card";
import type { SubscriptionsGroupType } from "@/src/api/subscription";
import { stringToColor } from "@/src/utils";

type GroupCardProps = SubscriptionsGroupType;

export const GroupCard = ({
  // !! will be used later with the edit method
  //   id,
  title,
  description,
  subscriptionCount,
}: GroupCardProps): JSX.Element => {
  const color = stringToColor(title);

  return (
    <Card
      className="flex h-full w-full flex-col border-2"
      style={{ borderColor: color }}
    >
      <h5 className="text-lg font-semibold capitalize">{title}</h5>
      <p className="line-clamp-6">{description}</p>
      <span className="mt-auto flex flex-row gap-1">
        <HiMiniUserGroup size={24} color={color} />
        {subscriptionCount}
      </span>
    </Card>
  );
};
