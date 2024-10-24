import React from "react";
import Skeleton from "react-loading-skeleton";
import { useGetUserProfile } from "@/src/api/user/hooks";
import { ProfileForm } from "./components/ProfileForm";
import { SettingsContent } from "../SettingsLayout";

export const Profile = (): JSX.Element => {
  const { isUserLoading, userProfile } = useGetUserProfile();

  return (
    <SettingsContent
      title="Control your profile settings"
      description="Manage what others can see about you and link your social accounts for
          easy access."
    >
      {isUserLoading && <Skeleton width="full" height="20px" count={5} />}
      {!isUserLoading && userProfile && (
        <ProfileForm defaultForm={userProfile} />
      )}
    </SettingsContent>
  );
};
