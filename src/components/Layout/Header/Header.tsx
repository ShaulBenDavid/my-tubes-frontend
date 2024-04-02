import React from "react";
import { UserMenu } from "./UserMenu";

export const Header = (): JSX.Element => (
  <header className="flex h-14 w-full flex-row items-center justify-end px-4">
    <UserMenu />
  </header>
);
