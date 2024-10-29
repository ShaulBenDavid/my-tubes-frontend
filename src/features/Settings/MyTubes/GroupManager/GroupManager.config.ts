import type { ColumnType } from "@/src/components/Table";
import type { SubscriptionsGroupType } from "@/src/api/subscription";

export const getColumns = (): ColumnType<SubscriptionsGroupType>[] => [
  { accessor: "emoji", header: "emoji", width: 10 },
  { accessor: "title", header: "group name", width: 40 },
  { accessor: "subscriptionCount", header: "subscription count", width: 30 },
  { accessor: "isPublic", header: "Public", width: 20 },
];
