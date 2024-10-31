import React, { useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import { useMediaQuery } from "@/src/hooks";
import { Table } from "@/src/components/Table";
import { appQueryClient } from "@/src/queries";
import type { SubscriptionsGroupType } from "@/src/api/subscription";
import {
  GET_SUBSCRIPTIONS_GROUPS_KEY,
  useEditSubscriptionsGroup,
  useGetSubscriptionsGroups,
} from "@/src/api/subscription/hooks";
import { getColumns } from "./GroupManager.config";

export const GroupManager = (): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const updateData = useCallback((id: number, isPublic: boolean) => {
    appQueryClient.setQueryData(
      [GET_SUBSCRIPTIONS_GROUPS_KEY],
      (groupsData: SubscriptionsGroupType[]) =>
        groupsData
          ? groupsData.map((group) =>
              group.id === id ? { ...group, isPublic } : group,
            )
          : groupsData,
    );
  }, []);

  const { editGroup } = useEditSubscriptionsGroup({
    handleSuccess: ({ title, id, isPublic }) => {
      toast.success(`${title} group updated successfully!`);
      updateData(id, isPublic);
    },
    handleError: () => {
      toast.error("Something failed try again later..");
    },
  });
  const { isGroupsLoading, subscriptionsGroups } = useGetSubscriptionsGroups();

  const columns = useMemo(
    () =>
      getColumns({
        isDesktop,
        onPublicChange: (groupId, isPublic) => {
          editGroup({ id: groupId, isPublic });
        },
      }),
    [isDesktop, editGroup],
  );

  return (
    <Table
      columns={columns}
      data={subscriptionsGroups}
      isLoading={isGroupsLoading}
    />
  );
};
