import React from "react";
import { Table } from "@/src/components/Table";
import { useGetSubscriptionsGroups } from "@/src/api/subscription/hooks";
import { getColumns } from "./GroupManager.config";

export const GroupManager = (): JSX.Element => {
  const { isGroupsLoading, subscriptionsGroups } = useGetSubscriptionsGroups();

  const columns = getColumns();

  return (
    <Table
      columns={columns}
      data={subscriptionsGroups}
      isLoading={isGroupsLoading}
    />
  );
};
