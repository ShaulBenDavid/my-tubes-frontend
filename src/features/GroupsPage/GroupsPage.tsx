"use client";

import React from "react";
import dynamic from "next/dynamic";
import { TbListDetails } from "react-icons/tb";
import { FaLayerGroup } from "react-icons/fa";
import { useQueryParamSelect } from "@/src/hooks";
import { MultiToggle } from "@/src/components/MultiToggle";
import { Spinner } from "@/src/components/Spinner";
import { DetailedGroups } from "./DetailedGroups";

const GroupsSection = dynamic(
  () =>
    import("../Subscriptions/components/GroupsSection").then(
      (mod) => mod.GroupsSection,
    ),
  {
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
    ),
    ssr: false,
  },
);

const QUERY_PARAM_KEY = "tab";

enum GroupTabsEnum {
  DETAILED = "detailed",
  LIST = "list",
}

export const GroupsPage = (): JSX.Element => {
  const { selectedValue, handleChange } = useQueryParamSelect<GroupTabsEnum>(
    QUERY_PARAM_KEY,
    GroupTabsEnum.DETAILED,
  );

  return (
    <>
      {selectedValue === GroupTabsEnum.DETAILED && (
        <div className="flex animate-[fadeIn_0.5s_ease-in_forwards] overflow-x-clip">
          <DetailedGroups />
        </div>
      )}
      {selectedValue === GroupTabsEnum.LIST && (
        <div className="flex h-full animate-[fadeIn_0.5s_ease-in_forwards] overflow-hidden">
          <GroupsSection />
        </div>
      )}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 lg:left-[calc(50%+var(--main-aside-menu-width)/2)]">
        <MultiToggle
          selectedValue={selectedValue}
          onToggle={handleChange}
          buttons={[
            {
              content: <TbListDetails size={20} />,
              value: GroupTabsEnum.DETAILED,
            },
            {
              content: <FaLayerGroup size={20} />,
              value: GroupTabsEnum.LIST,
            },
          ]}
        />
      </div>
    </>
  );
};
