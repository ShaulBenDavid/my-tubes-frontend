import React from "react";
import Skeleton from "react-loading-skeleton";
import { useGetUserCustomLinks } from "@/src/api/user/hooks";
import { SettingsContent } from "../SettingsLayout";
import { MyLinksForm } from "./components/MyLinksForm";

export const MyLinks = (): JSX.Element => {
  const { isCustomLinksLoading, userCustomLinks } = useGetUserCustomLinks();

  return (
    <SettingsContent
      title="Manage your landing page"
      description="Customize your landing page by adding custom links and setting a color palette to match your style."
    >
      {isCustomLinksLoading && (
        <Skeleton width="full" height="20px" count={5} />
      )}
      {!isCustomLinksLoading && userCustomLinks && (
        <MyLinksForm defaultForm={userCustomLinks} />
      )}
    </SettingsContent>
  );
};
