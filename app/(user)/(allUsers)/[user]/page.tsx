import React from "react";
import { notFound } from "next/navigation";
import { UserLandingPage } from "@/src/features/PublicPages/UserLandingPage";

const AT_SIGN = "%40";

type UserPageProps = {
  params: {
    user: string;
  };
};

const UserPage = async ({
  params: { user },
}: UserPageProps): Promise<JSX.Element> => {
  const username: string | null = user.startsWith(AT_SIGN)
    ? user.replace(AT_SIGN, "")
    : null;

  if (!username) {
    notFound();
  }

  return <UserLandingPage username={username} />;
};

export default UserPage;
