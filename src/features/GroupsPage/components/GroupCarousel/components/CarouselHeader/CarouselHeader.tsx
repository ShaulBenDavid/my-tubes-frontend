import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { DetailedGroup } from "@/src/api/subscription/subscription.types";
import { buildRoutePath, stringToColor } from "@/src/utils";
import { Routes } from "@/src/routes";

type CarouselHeaderProps = Omit<DetailedGroup, "subscriptions">;

export const CarouselHeader = ({
  title,
  id,
  subscriptionsCount,
  emoji,
}: CarouselHeaderProps): JSX.Element => {
  const color = stringToColor(title + id);

  return (
    <Link
      className="flex flex-row items-center justify-between border-b py-1 duration-75 hover:text-blue-400"
      style={{
        borderImage: `linear-gradient(to right, ${color}, transparent) 1`,
      }}
      href={buildRoutePath(
        Routes.SUBSCRIPTIONS,
        Routes.GROUP,
        title,
        String(id),
      )}
    >
      <h2 className="text-base font-bold capitalize tb:text-lg">
        {emoji && (
          <span aria-hidden className="mr-2">
            {emoji}
          </span>
        )}
        {title} ({subscriptionsCount || "--"})
      </h2>
      <FaArrowRight aria-hidden className="ml-2" />
    </Link>
  );
};