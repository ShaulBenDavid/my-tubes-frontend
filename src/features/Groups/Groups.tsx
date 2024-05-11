"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";

interface GroupsProps {
  groupId: string;
}

export const Groups = ({ groupId }: GroupsProps): JSX.Element => {
  const pathname = usePathname();
  const breadcrumbs = pathname.split("/").filter((crumb) => crumb !== "");
  const breadcrumbsWithoutLast = breadcrumbs.slice(0, -1);

  return (
    <div>
      {groupId}
      <Breadcrumbs breadcrumbs={breadcrumbsWithoutLast} />
    </div>
  );
};
