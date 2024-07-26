"use client";

import React, { forwardRef, useRef, type ForwardedRef } from "react";
import { useOnClickOutside } from "@/src/hooks";

interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  closeModal: () => void;
}

export const Modal = forwardRef(
  (
    { closeModal, id, children }: ModalProps,
    ref: ForwardedRef<HTMLDialogElement>,
  ): JSX.Element => {
    const contentRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(contentRef, closeModal);

    return (
      <dialog
        onCancel={closeModal}
        ref={ref}
        id={id}
        /* prettier-ignore */
        className="bg-modal-bg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl shadow-dropdown focus:outline-none"
      >
        <div ref={contentRef}>{children}</div>
      </dialog>
    );
  },
);
