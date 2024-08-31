import React from "react";
import { EmptyState } from "@/src/components/EmptyState";
import NotFoundSVG from "@/src/assets/images/404SVG.svg";
import { ButtonLink, ButtonLinkVariants } from "@/src/components/ButtonLink";
import { Routes } from "@/src/routes";

export const Group404 = () => (
  <div className="flex h-full w-full items-center justify-center">
    <EmptyState
      svgUrl={NotFoundSVG}
      header="Group Does Not Exist"
      footer={
        <ButtonLink
          href={Routes.SUBSCRIPTIONS}
          variant={ButtonLinkVariants.PRIMARY}
          width="240px"
        >
          Go to subscriptions page
        </ButtonLink>
      }
    />
  </div>
);
