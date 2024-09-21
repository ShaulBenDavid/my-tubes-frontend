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
      className="group flex flex-row items-center justify-between border-b py-1 duration-75 hover:text-blue-400"
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
      <span className="flex flex-row items-center gap-3">
        <span className="translate-x-20 opacity-0 duration-100 group-hover:translate-x-0 group-hover:opacity-100">
          Explore All
        </span>
        <FaArrowRight aria-hidden className="mr-3 tb:mr-6" />
      </span>
    </Link>
  );
};
