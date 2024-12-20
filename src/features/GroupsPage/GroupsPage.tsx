"use client";

import React, { useCallback } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { TbListDetails } from "react-icons/tb";
import { FaLayerGroup } from "react-icons/fa";
import { MultiToggle } from "@/src/components/MultiToggle";
import { DetailedGroups } from "./DetailedGroups";
import { GroupsSection } from "../Subscriptions/components/GroupsSection";
import { useMediaQuery } from "@/src/hooks";

const QUERY_PARAM_KEY = "tab";

enum GroupTabsEnum {
  DETAILED = "detailed",
  LIST = "list",
}

export const GroupsPage = (): JSX.Element => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const selectedTab =
    searchParams.get(QUERY_PARAM_KEY) ?? GroupTabsEnum.DETAILED;

  const handleChange = useCallback(
    (term: string): void => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(QUERY_PARAM_KEY, term);
      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, replace],
  );

  return (
    <>
      {(selectedTab === GroupTabsEnum.DETAILED || isDesktop) && (
        <div className="flex h-full animate-[fadeIn_0.5s_ease-in_forwards] overflow-hidden">
          <DetailedGroups />
        </div>
      )}
      {selectedTab === GroupTabsEnum.LIST && !isDesktop && (
        <div className="flex h-full animate-[fadeIn_0.5s_ease-in_forwards] overflow-hidden">
          <GroupsSection />
        </div>
      )}
      {!isDesktop && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2">
          <MultiToggle
            selectedValue={selectedTab}
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
      )}
    </>
  );
};
