import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { Button, ButtonVariants } from "@/src/components/Button";
import theme from "@/src/styles/tailwind.theme";

interface DeleteGroupProps {
  title: string;
  isLoading: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const DeleteGroup = ({
  title,
  isLoading,
  onClose,
  onDelete,
}: DeleteGroupProps): JSX.Element => (
  <div className="flex h-fit w-96 flex-col items-center justify-center">
    <div className="flex flex-col items-center">
      <IoWarningOutline size={60} color={theme.primary[500]} />
      <h4 className="text-lg font-semibold text-primary-500">
        Delete - {title}
      </h4>
      <p className="text-center text-base text-white/70">
        After deleting the group you can&apos;t go back!
      </p>
    </div>
    <div className="flex w-full flex-row gap-2 pt-8">
      <Button variant={ButtonVariants.SECONDARY} onClick={onClose}>
        cancel
      </Button>
      <Button
        variant={ButtonVariants.PRIMARY}
        isLoading={isLoading}
        onClick={onDelete}
      >
        I am sure
      </Button>
    </div>
  </div>
);
