import React from "react";

interface GroupsHeaderProps {
  groupsCount?: number;
}

export const GroupsHeader = ({
  groupsCount,
}: GroupsHeaderProps): JSX.Element => (
  <div className="pb-2">
    <h1 className="font-semibold tb:text-xl">
      Groups <span>({groupsCount ?? "--"})</span>
    </h1>
  </div>
);
