import React from "react";
import { notFound } from "next/navigation";
import { UserLandingPage } from "@/src/features/PublicPages/UserLandingPage";

const AT_SIGN = "%40";

type UserPageProps = {
  params: {
    user: string;
  };
};

const UserPage = async ({ params: { user } }: UserPageProps) => {
  const username: string | null = user.startsWith(AT_SIGN)
    ? user.replace(AT_SIGN, "")
    : null;

  if (!username) {
    notFound();
  }

  return (
    <main className="flex h-full w-full flex-col items-center overflow-hidden overflow-y-auto">
      <UserLandingPage username={username} />
    </main>
  );
};

export default UserPage;
