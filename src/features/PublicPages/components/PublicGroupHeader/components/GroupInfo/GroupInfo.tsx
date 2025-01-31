import React from "react";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import type { SubscriptionsGroupType } from "@/src/api/subscription";
import { stringToColor } from "@/src/utils";

type GroupInfoProps = Omit<
  SubscriptionsGroupType,
  "isPublic" | "subscriptionCount"
> & { href?: string };

export const GroupInfo = ({
  id,
  title,
  emoji,
  href,
}: GroupInfoProps): JSX.Element => {
  const borderColor = stringToColor(title + id);

  return (
    <header
      className="flex flex-col items-center gap-2 rounded-xl border-b pb-4"
      style={{ borderColor }}
    >
      <div
        className={`grid w-full gap-2 ${href ? "grid-cols-[32px_1fr_32px]" : ""}`}
      >
        {href && (
          <Link
            href={href}
            className="p-2 duration-100 ease-linear hover:text-blue-400"
          >
            <FaArrowLeftLong size={24} className="shrink-0" />
          </Link>
        )}
        <div className="flex w-full items-end justify-center gap-2 overflow-hidden">
          {emoji && (
            <span aria-label="group emoji" className="text-5xl">
              {emoji}
            </span>
          )}
          <h1 className="truncate text-center text-2xl capitalize">{title}</h1>
        </div>
      </div>
    </header>
  );
};
