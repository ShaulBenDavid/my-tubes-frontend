import React, { useRef } from "react";
import { FaFolderPlus } from "react-icons/fa";
import { Card } from "@/src/components/Card";
import { Button, ButtonVariants } from "@/src/components/Button";
import { Modal } from "@/src/components/Modal";

export const CreateGroupCard = (): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement>(null);

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
      <Modal
        ref={modalRef}
        id="createGroupModal"
        closeModal={() => modalRef?.current?.close()}
      >
        s
      </Modal>
    </>
  );
};
