"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ReactFocusLock from "react-focus-lock";
import { useGetUserInfo } from "@/src/api/user/hooks";
import { Routes } from "@/src/routes";
import { Avatar } from "../../../Avatar";
import { Dropdown } from "../../../Dropdown";
import { AppLink } from "../../../AppLink";
import { ValidationContentModal } from "@/src/components/ValidationContentModal";
import { Modal } from "@/src/components/Modal";

const ARIA_CONTROL_LOGOUT_USER = "logoutUserModal";

export const UserMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logoutModalRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  const { userInfo, isUserLoading } = useGetUserInfo();

  const handleClose = (): void => setIsOpen(false);

  return (
    <>
      <div className="ml-auto h-fit">
        {isUserLoading && (
          <div className="h-8 w-8 shrink-0 animate-pulse rounded-full bg-primary-200" />
        )}
        {userInfo && !isUserLoading && (
          <Dropdown
            setState={setIsOpen}
            isOpen={isOpen}
            trigger={
              <Avatar
                name={`${userInfo.firstName} ${userInfo.lastName}`}
                url={userInfo.imageUrl ?? ""}
              />
            }
            label="user menu"
            className="right-0 w-56"
          >
            <ReactFocusLock>
              <ul role="menu" className="flex flex-col gap-1">
                <li
                  onClick={handleClose}
                  onKeyDown={() => ({})}
                  role="menuitem"
                >
                  <AppLink href={`/@${userInfo.username}`}>
                    <div className="flex flex-col">
                      <span>
                        {userInfo.firstName} {userInfo.lastName}
                      </span>
                      <small className="text-sm lowercase opacity-70 first-letter:capitalize">
                        {userInfo.username}
                      </small>
                    </div>
                  </AppLink>
                </li>
                <hr className="border-r-2 border-white/30" />
                <li
                  onClick={handleClose}
                  onKeyDown={() => ({})}
                  role="menuitem"
                >
                  <AppLink href={Routes.SETTINGS}>Settings</AppLink>
                </li>
                <li
                  onClick={handleClose}
                  onKeyDown={() => ({})}
                  role="menuitem"
                  aria-controls={ARIA_CONTROL_LOGOUT_USER}
                >
                  <AppLink onClick={() => logoutModalRef.current?.showModal()}>
                    Logout
                  </AppLink>
                </li>
              </ul>
            </ReactFocusLock>
          </Dropdown>
        )}
      </div>
      <Modal
        ref={logoutModalRef}
        closeModal={() => logoutModalRef.current?.close()}
        id={ARIA_CONTROL_LOGOUT_USER}
      >
        <ValidationContentModal
          title="Logout"
          content="Are you sure you want to log out?"
          onClose={() => logoutModalRef.current?.close()}
          onDelete={() => router.replace(Routes.LOGOUT)}
        />
      </Modal>
    </>
  );
};
