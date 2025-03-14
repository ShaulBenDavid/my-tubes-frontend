import React from "react";
import { SettingsContent } from "../SettingsLayout";
import { DeleteUser } from "./components/DeleteUser";

export const Account = (): JSX.Element => (
  <SettingsContent
    title="Manage your account"
    description="Manage your account settings, and control the account configurations."
  >
    <DeleteUser />
  </SettingsContent>
);
