import React from "react";
import { SettingsContent } from "../SettingsLayout";
import { GroupManager } from "./GroupManager";

export const MyTubes = (): JSX.Element => (
  <SettingsContent
    title="Control your Tubes settings"
    description="Manage the visibility of groups on My Tubes by customizing which 
    groups users can access and interact with. Control group memberships and ensure relevant content is available to the right audience."
  >
    <GroupManager />
  </SettingsContent>
);
