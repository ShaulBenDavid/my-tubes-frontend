import React from "react";
import { GroupsNavbar } from "./GroupsNavbar";
// import { Share } from "@/src/components/Share";

interface GroupAsideProps {
  currentGroupId: number;
}

export const GroupAside = ({
  currentGroupId,
}: GroupAsideProps): JSX.Element => (
  <aside className="flex h-full w-72 flex-col border-r border-white/30 p-2">
    {/* <Share /> */}
    <GroupsNavbar currentGroupId={currentGroupId} />
  </aside>
);
