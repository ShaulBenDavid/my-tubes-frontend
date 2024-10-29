import React from "react";
import { Table } from "@/src/components/Table";
import { SettingsContent } from "../SettingsLayout";

export const MyTubes = (): JSX.Element => (
  <SettingsContent
    title="Control your Tubes settings"
    description="Manage the visibility of groups on My Tubes by customizing which 
    groups users can access and interact with. Control group memberships and ensure relevant content is available to the right audience."
  >
    <Table
      columns={[
        { width: 30, accessor: "0", header: "Test" },
        { width: 40, accessor: "1", header: "Test" },
        { width: 30, accessor: "2", header: "Test" },
      ]}
      data={[
        { "0": "2", "2": 1, "1": 0 },
        { "0": "2", "2": 1, "1": 0 },
        { "0": "2", "2": 1, "1": 0 },
        { "0": "2", "2": 1, "1": 0 },
        { "0": "2", "2": 1, "1": 0 },
      ]}
    />
  </SettingsContent>
);
