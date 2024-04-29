"use client";

import React, { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { SubscriptionsGroupType } from "@/src/api/subscription";
import { useGetSubscriptionsGroups } from "@/src/api/subscription/hooks";
import { CreateGroupCard } from "./components/CreateGroupCard";
import { GroupCard } from "./components/GroupCard";
import { GroupCardLoader } from "./components/GroupCard/GroupCard.loader";

const DeleteAndEditModals = dynamic(
  () =>
    import("./components/DeleteAndEditModals").then(
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

  return (
    <section
      /* prettier-ignore */
      className="grid-cols-groups-auto-fit grid h-full w-full auto-rows-fr grid-rows-4 gap-2 overflow-hidden overflow-y-auto"
    >
      <CreateGroupCard />
      {isGroupsLoading && <GroupCardLoader />}
      {!isGroupsLoading &&
        subscriptionsGroups?.map((group) => (
          <GroupCard
            key={group.id}
            data={group}
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
