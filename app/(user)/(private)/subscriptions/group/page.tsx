import React from "react";
import { EmptyState } from "@/src/components/EmptyState";
import UnderConstructionSVG from "@/src/assets/images/UnderConstructionSVG.svg";

const GroupPage = () => (
  <section className="flex h-full w-full items-center justify-center py-14">
    <EmptyState
      svgUrl={UnderConstructionSVG}
      header="Group Page in construction"
      description="Sorry for the inconvenience, but this page is currently under construction.
            We're working hard to bring you new and exciting content soon.    
            Thank you for your patience and understanding."
    />
  </section>
);

export default GroupPage;
