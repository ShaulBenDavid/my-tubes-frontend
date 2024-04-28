"use client";

import React, { useRef } from "react";
import { FaFolderPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  GET_SUBSCRIPTIONS_GROUPS_KEY,
  usePostSubscriptionsGroup,
} from "@/src/api/subscription/hooks";
import { Card } from "@/src/components/Card";
import { appQueryClient } from "@/src/queries";
import { Button, ButtonVariants } from "@/src/components/Button";
import { Modal } from "@/src/components/Modal";
import { GroupForm } from "../GroupForm";

export const CreateGroupCard = (): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleCloseModal = (): void => modalRef?.current?.close();

  const handleSuccess = (): void => {
    toast.success("Group created successfully!");
    appQueryClient.invalidateQueries({
      queryKey: [GET_SUBSCRIPTIONS_GROUPS_KEY],
    });
    handleCloseModal();
  };

  const {
    postGroup,
    groupData,
    isPostGroupLoading,
    isPostGroupError,
    groupError,
  } = usePostSubscriptionsGroup({ handleSuccess });

  return (
    <>
      <Card>
        <div className="flex h-full flex-col items-center justify-center gap-2">
          <FaFolderPlus size={160} opacity={0.5} />
          <h4 className="text-xl font-semibold">Create a group</h4>
          <Button
            variant={ButtonVariants.PRIMARY}
            width="190px"
            onClick={() => modalRef.current?.showModal()}
            id="openModalButton"
            aria-controls="createGroupModal"
          >
            New Group
          </Button>
        </div>
      </Card>
      <Modal ref={modalRef} id="createGroupModal" closeModal={handleCloseModal}>
        <GroupForm
          key={groupData?.id}
          isLoading={isPostGroupLoading}
          isError={isPostGroupError}
          errorMessage={groupError?.message ?? ""}
          mutate={postGroup}
          handleCloseModal={handleCloseModal}
        />
      </Modal>
    </>
  );
};
