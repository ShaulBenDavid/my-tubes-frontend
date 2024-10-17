import React from "react";
import Skeleton from "react-loading-skeleton";
import { useGetUserProfile } from "@/src/api/user/hooks";
import { ProfileForm } from "./components/ProfileForm";

export const Profile = (): JSX.Element => {
  const { isUserLoading, userProfile } = useGetUserProfile();

  return (
    <section className="flex w-full flex-col gap-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">
          Control your profile settings
        </h1>
        <p className="text-sm text-white/70">
          Manage what others can see about you and link your social accounts for
          easy access.
        </p>
      </header>
      <hr className="border-r-2 border-white/30" />
      {isUserLoading && <Skeleton width="full" height="20px" count={5} />}
      {!isUserLoading && userProfile && (
        <ProfileForm defaultForm={userProfile} />
      )}
    </section>
  );
};
