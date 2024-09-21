"use client";

import React, { useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import type {
  SubscriptionType,
  SubscriptionsGroupType,
} from "@/src/api/subscription";
import { appQueryClient } from "@/src/queries";
import {
  GET_GROUP_DETAILED_LIST_KEY,
  GET_SUBSCRIPTIONS_GROUPS_KEY,
  GET_SUBSCRIPTIONS_LIST_KEY,
  useGetSubscriptionsGroups,
  usePostAddSubscriptionGroup,
} from "@/src/api/subscription/hooks";
import { CreateGroupCard } from "./components/CreateGroupCard";
import { GroupCard } from "./components/GroupCard";
import { GroupCardLoader } from "./components/GroupCard/GroupCard.loader";

const DeleteAndEditModals = dynamic(
  () =>
    import("@/src/features/Group/components/DeleteAndEditModals").then(
      (mod) => mod.DeleteAndEditModals,
    ),
  {
    ssr: false,
  },
);

export const GroupsSection = (): JSX.Element => {
  const [selectedGroup, setSelectedGroup] = useState<
    SubscriptionsGroupType | undefined
  >();
  const deleteModalRef = useRef<HTMLDialogElement>(null);
  const editModalRef = useRef<HTMLDialogElement>(null);

  const { subscriptionsGroups, isGroupsLoading } = useGetSubscriptionsGroups();
  const { addSubscriptionGroup } = usePostAddSubscriptionGroup({
    handleSuccess: (res) => {
      appQueryClient.invalidateQueries({
        queryKey: [GET_SUBSCRIPTIONS_GROUPS_KEY],
      });
      appQueryClient.invalidateQueries({
        queryKey: [GET_GROUP_DETAILED_LIST_KEY],
      });
      appQueryClient.invalidateQueries({
        queryKey: [GET_SUBSCRIPTIONS_LIST_KEY],
      });
      toast.success(`${res.title} was added to a group successfully!`);
    },
    handleError: (err) => {
      toast.error(err?.response?.data.error ?? "");
    },
  });

  const onDeleteClose = (): void => deleteModalRef?.current?.close();
  const onEditClose = (): void => editModalRef?.current?.close();

  const handleDeleteClick = useCallback(
    (data: SubscriptionsGroupType) => {
      setSelectedGroup(data);
      deleteModalRef.current?.showModal();
    },
    [deleteModalRef],
  );

  const handleEditClick = useCallback(
    (data: SubscriptionsGroupType) => {
      setSelectedGroup(data);
      editModalRef.current?.showModal();
    },
    [editModalRef],
  );

  const handleDrop = useCallback(
    (data: SubscriptionType, groupId: number) => {
      addSubscriptionGroup({ groupId, subscriptionId: data.id });
    },
    [addSubscriptionGroup],
  );

  return (
    <section
      /* prettier-ignore */
      className="grid-rows-groups-row-fit grid h-full w-full grid-cols-tablet-groups-auto-fit xl:grid-cols-groups-auto-fit gap-4 overflow-hidden overflow-y-auto pr-2"
    >
      <CreateGroupCard />
      {isGroupsLoading && <GroupCardLoader />}
      {!isGroupsLoading &&
        subscriptionsGroups?.map((group) => (
          <GroupCard
            key={group.id}
            data={group}
            onDrop={handleDrop}
            handleDeleteClick={() => handleDeleteClick(group)}
            handleEditClick={() => handleEditClick(group)}
          />
        ))}
      <DeleteAndEditModals
        group={selectedGroup}
        deleteModalRef={deleteModalRef}
        editModalRef={editModalRef}
        onDeleteClose={onDeleteClose}
        onEditClose={onEditClose}
      />
    </section>
  );
};
