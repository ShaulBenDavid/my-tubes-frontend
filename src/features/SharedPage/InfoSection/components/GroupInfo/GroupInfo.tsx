import React from "react";
import type { SubscriptionsGroupType } from "@/src/api/subscription";
import { stringToColor } from "@/src/utils";

type GroupInfoProps = Omit<
  SubscriptionsGroupType,
  "isPublic" | "subscriptionCount"
>;

export const GroupInfo = ({
  id,
  title,
  description,
  emoji,
}: GroupInfoProps): JSX.Element => {
  const borderColor = stringToColor(title + id);

  return (
    <div
      className="flex flex-col items-center gap-2 rounded-xl border-b pb-4"
      style={{ borderColor }}
    >
      <h1 className="flex items-end justify-center gap-2 text-center text-2xl capitalize">
        {emoji && (
          <span aria-label="group emoji" className="text-5xl">
            {emoji}
          </span>
        )}
        {title}
      </h1>
      {description && (
        <p className="w-[90%] text-center opacity-90 sm:w-4/5">{description}</p>
      )}
    </div>
  );
};
