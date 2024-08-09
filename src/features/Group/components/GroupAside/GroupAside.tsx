"use client";

import React from "react";
import { GroupsNavbar } from "./GroupsNavbar";
import { Share } from "@/src/components/Share";

interface GroupAsideProps {
  currentGroupId: number;
}

export const GroupAside = ({
  currentGroupId,
}: GroupAsideProps): JSX.Element => (
  <aside className="flex h-full w-72 shrink-0 flex-col gap-4 border-r border-white/30 p-2 pl-0">
    <Share />
    <GroupsNavbar currentGroupId={currentGroupId} />
  </aside>
);
