"use client";

import React, { useContext, useState } from "react";
import ReactFocusLock from "react-focus-lock";
import { AuthContext } from "@/src/context/auth";
import { useLogout } from "@/src/api/auth/hooks";
import { useGetUserInfo } from "@/src/api/user/hooks";
import { Avatar } from "../../../Avatar";
import { Dropdown } from "../../../Dropdown";
import { AppLink } from "../../../AppLink";

export const UserMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleLogout } = useContext(AuthContext);
  const { logout } = useLogout({ handleSuccess: handleLogout });
  const { userInfo, isUserLoading } = useGetUserInfo();

  return (
    <div className="ml-5 max-tb:ml-auto">
      {isUserLoading && (
        <div className="h-8 w-8 shrink-0 animate-pulse rounded-full bg-primary-200" />
      )}
      {userInfo && !isUserLoading && (
        <Dropdown
          setState={setIsOpen}
          isOpen={isOpen}
          trigger={
            <Avatar
              name={`${userInfo.first_name} ${userInfo.last_name}`}
              url={userInfo.image_url ?? ""}
            />
          }
          label="user menu"
          className="right-0 w-56"
        >
          <ReactFocusLock>
            <ul role="menu" className="flex flex-col gap-1">
              <li role="menuitem">
                <AppLink href={`/${userInfo.username}`}>
                  <div className="flex flex-col">
                    <span>
                      {userInfo.first_name} {userInfo.last_name}
                    </span>
                    <small className="text-sm lowercase opacity-70 first-letter:capitalize">
                      {userInfo.username}
                    </small>
                  </div>
                </AppLink>
              </li>
              <hr className="border-r-2 border-white/30" />

              <li role="menuitem">
                <AppLink onClick={logout}>Logout</AppLink>
              </li>
            </ul>
          </ReactFocusLock>
        </Dropdown>
      )}
    </div>
  );
};
