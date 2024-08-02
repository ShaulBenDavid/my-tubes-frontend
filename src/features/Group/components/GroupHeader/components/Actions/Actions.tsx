"use client";

import React, { useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import type { SubscriptionsGroupType } from "@/src/api/subscription";
import { GroupActions } from "../../../GroupActions";

const DeleteAndEditModals = dynamic(
  () =>
    import("@/src/features/Group/components/DeleteAndEditModals").then(
      (mod) => mod.DeleteAndEditModals,
    ),
  {
    ssr: false,
  },
);

interface ActionsProps {
  currentGroup: SubscriptionsGroupType;
}

export const Actions = ({ currentGroup }: ActionsProps): JSX.Element => {
  const deleteModalRef = useRef<HTMLDialogElement>(null);
  const editModalRef = useRef<HTMLDialogElement>(null);

  const onDeleteClose = useCallback(() => {
    deleteModalRef.current?.close();
  }, [deleteModalRef]);

  const onEditClose = useCallback(() => {
    editModalRef.current?.close();
  }, [editModalRef]);

  const handleDeleteClick = useCallback(() => {
    deleteModalRef.current?.showModal();
  }, [deleteModalRef]);

  const handleEditClick = useCallback(() => {
    editModalRef.current?.showModal();
  }, [editModalRef]);

  return (
    <>
      <GroupActions
        name={currentGroup.title}
        onDelete={handleDeleteClick}
        onEdit={handleEditClick}
      />
      <DeleteAndEditModals
        group={currentGroup}
        deleteModalRef={deleteModalRef}
        editModalRef={editModalRef}
        onDeleteClose={onDeleteClose}
        onEditClose={onEditClose}
      />
    </>
  );
};
