import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { buildRoutePath, stringToColor } from "@/src/utils";
import { Routes } from "@/src/routes";

interface GroupLinkProps {
  title: string;
  id: number;
  count: number;
  emoji?: string | null;
}

export const GroupLink = ({
  title,
  id,
  count,
  emoji,
}: GroupLinkProps): JSX.Element => {
  const color = stringToColor(title + id);

  return (
    <Link
      href={buildRoutePath(
        Routes.SUBSCRIPTIONS,
        Routes.GROUP,
        title,
        String(id),
      )}
      style={{ borderColor: color }}
      className="flex flex-row items-center justify-between rounded-xl border p-2 text-base capitalize duration-75 hover:text-blue-400"
    >
      <span className="truncate pr-3">
        {emoji && <>{emoji}&nbsp;</>}
        {title}
      </span>
      <div className="flex flex-row">
        <span aria-label="subscriptions count in group">{`(${count || "--"})`}</span>
        <IoIosArrowForward aria-hidden size={24} />
      </div>
    </Link>
  );
};
