import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { Button, ButtonVariants } from "@/src/components/Button";
import theme from "@/src/styles/tailwind.theme";

interface ValidationContentModalProps {
  title: string;
  content: string;
  isLoading?: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const ValidationContentModal = ({
  title,
  content,
  isLoading = false,
  onClose,
  onDelete,
}: ValidationContentModalProps): JSX.Element => (
  <div className="flex h-fit w-72 flex-col items-center justify-center tb:w-96">
    <div className="flex flex-col items-center">
      <IoWarningOutline size={60} color={theme.primary[500]} />
      <h4 className="text-lg font-semibold text-primary-500">{title}</h4>
      <p className="text-center text-base text-white/70">{content}</p>
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
