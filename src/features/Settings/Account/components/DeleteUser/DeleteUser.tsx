import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button, ButtonVariants } from "@/src/components/Button";
import { ValidationContentModal } from "@/src/components/ValidationContentModal";
import { Modal } from "@/src/components/Modal";
import { useDeleteUser } from "@/src/api/user/hooks";
import { Routes } from "@/src/routes";

const ARIA_CONTROL_DELETE_USER = "deleteUserModal";

export const DeleteUser = (): JSX.Element => {
  const deleteModalRef = useRef<HTMLDialogElement>(null);
  const { push } = useRouter();
  const { deleteUser, isDeleteUserLoading } = useDeleteUser({
    handleSuccess: () => {
      push(Routes.LOGOUT);
    },
    handleError: () => {
      toast.error("We failed to delete your User. please try again later.");
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold text-red-500">Delete User</h2>
      <p className="text-white/90">
        Are you sure you want to delete your account? This action is permanent
        and cannot be undone.
      </p>
      <Button
        variant={ButtonVariants.PRIMARY}
        width="200px"
        className="mt-2"
        aria-controls={ARIA_CONTROL_DELETE_USER}
        onClick={() => deleteModalRef.current?.showModal()}
      >
        Delete User
      </Button>
      <Modal
        ref={deleteModalRef}
        closeModal={() => deleteModalRef.current?.close()}
        id={ARIA_CONTROL_DELETE_USER}
      >
        <ValidationContentModal
          title="Delete User"
          content="After deleting the User you can't go back!"
          isLoading={isDeleteUserLoading}
          onClose={() => deleteModalRef.current?.close()}
          onDelete={() => deleteUser()}
        />
      </Modal>
    </div>
  );
};
