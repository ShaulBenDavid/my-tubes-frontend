import React from "react";
import { CreateGroupCard } from "./components/CreateGroupCard";

export const GroupsSection = (): JSX.Element => (
  <section
    /* prettier-ignore */
    className="grid-cols-groups-auto-fit grid h-full w-full auto-rows-fr grid-rows-4 gap-2 overflow-hidden"
  >
    <CreateGroupCard />
  </section>
);
