import React, { type RefObject } from "react";
import type { SubscriptionsGroupType } from "@/src/api/subscription";
import { Modal } from "@/src/components/Modal";
import {
  ARIA_CONTROL_GROUP_DELETE,
  ARIA_CONTROL_GROUP_EDIT,
} from "../GroupCard/CardActions/CardActions";
import { DeleteGroup } from "./DeleteGroup";
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
  const { title, description } = group ?? {};

  return (
    <>
      <Modal
        ref={deleteModalRef}
        closeModal={onDeleteClose}
        id={ARIA_CONTROL_GROUP_DELETE}
      >
        {title && <DeleteGroup title={title} onClose={onDeleteClose} />}
      </Modal>
      <Modal
        ref={editModalRef}
        closeModal={onEditClose}
        id={ARIA_CONTROL_GROUP_EDIT}
      >
        {title && description && (
          <GroupForm
            key={title}
            title={`Edit Group - ${title}`}
            content="Update your group content."
            isLoading={false}
            isError={false}
            errorMessage=""
            mutate={() => ({})}
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
