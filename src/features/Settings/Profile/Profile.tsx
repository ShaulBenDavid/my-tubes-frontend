import React from "react";
import Skeleton from "react-loading-skeleton";
import { useGetUserProfile } from "@/src/api/user/hooks";
import { ProfileForm } from "./components/ProfileForm";
import { SettingsContent } from "../SettingsLayout";
import { Share, ShareLoader } from "@/src/components/Share";

const PUBLIC_SHARED_GROUP_URL = "https://my-tubes.com/";

export const Profile = (): JSX.Element => {
  const { isUserLoading, userProfile } = useGetUserProfile();

  return (
    <SettingsContent
      title="Control your profile settings"
      description="Manage what others can see about you and link your social accounts for
          easy access."
    >
      {isUserLoading && <ShareLoader />}
      {userProfile?.isPublic && !isUserLoading && (
        <Share
          url={`${PUBLIC_SHARED_GROUP_URL}@${userProfile.username}/`}
          title={`${userProfile.username} - MyTubes`}
          content={`${userProfile.username} Invites You to Explore his Subscriptions..`}
          tooltipContent="This link allows you to share your profile data and your public groups."
        />
      )}
      <hr className="border-r-2 border-white/30" />
      {isUserLoading && <Skeleton width="full" height="20px" count={5} />}
      {!isUserLoading && userProfile && (
        <ProfileForm defaultForm={userProfile} />
      )}
    </SettingsContent>
  );
};
