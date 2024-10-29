import React from "react";
import { useMediaQuery } from "@/src/hooks";
import { Table } from "@/src/components/Table";
import { useGetSubscriptionsGroups } from "@/src/api/subscription/hooks";
import { getColumns } from "./GroupManager.config";

export const GroupManager = (): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { isGroupsLoading, subscriptionsGroups } = useGetSubscriptionsGroups();

  const columns = getColumns({ isDesktop });

  return (
    <Table
      columns={columns}
      data={subscriptionsGroups}
      isLoading={isGroupsLoading}
    />
  );
};
