import React from "react";
import type { ColumnType } from "@/src/components/Table";
import type { SubscriptionsGroupType } from "@/src/api/subscription";
import { ToggleButton } from "@/src/components/ToggleButton";

export const getColumns = ({
  isDesktop,
  onPublicChange,
}: {
  isDesktop: boolean;
  onPublicChange: (id: number, boolean: boolean) => void;
}): ColumnType<SubscriptionsGroupType>[] => [
  ...(isDesktop
    ? [
        {
          accessor: "emoji" as keyof SubscriptionsGroupType,
          header: "emoji",
          width: 10,
        },
      ]
    : []),
  { accessor: "title", header: "group name", width: 45 },
  ...(isDesktop
    ? [
        {
          accessor: "subscriptionCount" as keyof SubscriptionsGroupType,
          header: "subscription count",
          width: 30,
        },
      ]
    : []),
  {
    accessor: "isPublic",
    header: "Public",
    width: 15,
    infoTooltip:
      "Enable this option to make your group discoverable by other users on My Tubes.",
    render: ({ title, isPublic, id }) => (
      <div className="flex items-center">
        <ToggleButton
          idFor={`${title}-isPublic`}
          checked={isPublic}
          onChange={() => onPublicChange(id, !isPublic)}
        />
      </div>
    ),
  },
];
