import type { ColumnType } from "@/src/components/Table";
import type { SubscriptionsGroupType } from "@/src/api/subscription";

export const getColumns = ({
  isDesktop,
}: {
  isDesktop: boolean;
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
  { accessor: "title", header: "group name", width: 40 },
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
    width: 20,
  },
];
