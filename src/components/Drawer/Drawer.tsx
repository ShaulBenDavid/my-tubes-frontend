"use client";

import React, { useEffect } from "react";
import ReactFocusLock from "react-focus-lock";
import { Backdrop } from "../Backdrop";

type DrawerProps = React.PropsWithChildren<{
  onClose: () => void;
  isOpen: boolean;
  id: string;
}>;

export const Drawer = ({ onClose, isOpen, children, id }: DrawerProps) => {
  useEffect((): any => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    // eslint-disable-next-line no-return-assign
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Escape" || e.key === "ArrowDown") {
      onClose();
    }
  };

  return (
    <div
      data-testid="drawer"
      className={`fixed inset-0 z-50 h-dvh w-screen ${
        isOpen ? "flex" : "hidden"
      }`}
      role="presentation"
      onKeyDown={handleKeyPress}
      aria-hidden={!isOpen}
      id={id}
    >
      <Backdrop onClick={onClose} />
      <ReactFocusLock>
        <div
          className="absolute z-50 flex h-dvh animate-[enterIn_0.2s_ease-in_forwards] bg-spec-space-bg px-2 py-4 shadow-2xl ease-in"
          tabIndex={-1}
        >
          {children}
        </div>
      </ReactFocusLock>
    </div>
  );
};
