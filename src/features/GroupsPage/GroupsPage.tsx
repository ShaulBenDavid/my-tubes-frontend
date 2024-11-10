"use client";

import React, { useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { FaLayerGroup } from "react-icons/fa";
import { MultiToggle } from "@/src/components/MultiToggle";
import { DetailedGroups } from "./DetailedGroups";

enum GroupTabsEnum {
  DETAILED = "detailed",
  LIST = "list",
}

export const GroupsPage = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<GroupTabsEnum>(
    GroupTabsEnum.DETAILED,
  );

  return (
    <>
      <DetailedGroups />
      <div className="fixed bottom-4 left-4">
        <MultiToggle
          selectedValue={selectedTab}
          onToggle={(value) => setSelectedTab(value)}
          buttons={[
            {
              content: <TbListDetails size={24} />,
              value: GroupTabsEnum.DETAILED,
            },
            { content: <FaLayerGroup size={24} />, value: GroupTabsEnum.LIST },
          ]}
        />
      </div>
    </>
  );
};
