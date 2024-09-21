"use client";

import React, { useCallback, type RefObject } from "react";
import { toast } from "react-toastify";
import { appQueryClient } from "@/src/queries";
import type { SubscriptionsGroupType } from "@/src/api/subscription";
import { Modal } from "@/src/components/Modal";
import { ValidationContentModal } from "@/src/components/ValidationContentModal";
import {
  GET_SUBSCRIPTIONS_GROUPS_KEY,
  GET_SUBSCRIPTIONS_GROUP_KEY,
  GET_SUBSCRIPTIONS_LIST_KEY,
  useDeleteSubscriptionsGroup,
  useEditSubscriptionsGroup,
  GET_GROUP_DETAILED_LIST_KEY,
} from "@/src/api/subscription/hooks";
import {
  ARIA_CONTROL_GROUP_DELETE,
  ARIA_CONTROL_GROUP_EDIT,
} from "../GroupActions";
import { GroupForm } from "../GroupForm";

interface DeleteAndEditModalsProps {
  group?: SubscriptionsGroupType;
  onDeleteClose: () => void;
  onEditClose: () => void;
  deleteModalRef: RefObject<HTMLDialogElement>;
  editModalRef: RefObject<HTMLDialogElement>;
}

export const DeleteAndEditModals = ({
  group,
  onDeleteClose,
  onEditClose,
  deleteModalRef,
  editModalRef,
}: DeleteAndEditModalsProps): JSX.Element => {
  const { title, description, id } = group ?? {};

  const handleDeleteSuccess = useCallback((): void => {
    toast.success(`${title} Group deleted successfully!`);
    appQueryClient.invalidateQueries({
      queryKey: [GET_SUBSCRIPTIONS_GROUPS_KEY],
    });
    appQueryClient.invalidateQueries({
      queryKey: [GET_GROUP_DETAILED_LIST_KEY],
    });
    appQueryClient.invalidateQueries({
      queryKey: [GET_SUBSCRIPTIONS_LIST_KEY],
    });
    appQueryClient.invalidateQueries({
      queryKey: [GET_SUBSCRIPTIONS_GROUP_KEY, id],
    });
    onDeleteClose();
  }, [onDeleteClose, title, id]);

  const { deleteGroup, isDeleteGroupLoading } = useDeleteSubscriptionsGroup({
    handleSuccess: handleDeleteSuccess,
    handleError: () => {
      toast.error(
        `We failed to delete group - ${title}. please try again later.`,
      );
    },
  });

  const handleEditSuccess = useCallback((): void => {
    toast.success(`${title} Group updated successfully!`);
    appQueryClient.invalidateQueries({
      queryKey: [GET_SUBSCRIPTIONS_GROUPS_KEY],
    });
    appQueryClient.invalidateQueries({
      queryKey: [GET_SUBSCRIPTIONS_GROUP_KEY, id],
    });
    onEditClose();
  }, [id, onEditClose, title]);

  const { editGroup, isEditGroupLoading, isEditGroupError, editGroupError } =
    useEditSubscriptionsGroup({
      handleSuccess: handleEditSuccess,
    });

  return (
    <>
      <Modal
        ref={deleteModalRef}
        closeModal={onDeleteClose}
        id={ARIA_CONTROL_GROUP_DELETE}
      >
        {title && id && (
          <ValidationContentModal
            title={`Delete - ${title}`}
            content="After deleting the group you can't go back!"
            isLoading={isDeleteGroupLoading}
            onClose={onDeleteClose}
            onDelete={() => deleteGroup(id)}
          />
        )}
      </Modal>
      <Modal
        ref={editModalRef}
        closeModal={onEditClose}
        id={ARIA_CONTROL_GROUP_EDIT}
      >
        {title && id && (
          <GroupForm
            key={title}
            title={`Edit Group - ${title}`}
            content="Update your group content."
            isLoading={isEditGroupLoading}
            isError={isEditGroupError}
            errorMessage={editGroupError?.message ?? ""}
            mutate={(data) => editGroup({ id, ...data })}
            handleCloseModal={onEditClose}
            defaultValues={{
              title,
              description,
            }}
          />
        )}
      </Modal>
    </>
  );
};
