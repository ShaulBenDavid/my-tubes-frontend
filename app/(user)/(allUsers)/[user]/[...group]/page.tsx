import React from "react";
import { notFound } from "next/navigation";
import { PublicGroupPage } from "@/src/features/PublicPages/PublicGroupPage";

interface GroupPageProps {
  params: {
    user: string;
    group: string[];
  };
}

const GroupPage = async ({
  params: { user, group },
}: GroupPageProps): Promise<JSX.Element> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [profileId, _, groupId] = group;

  if (!groupId) {
    notFound();
  }

  return (
    <PublicGroupPage
      profileId={Number(profileId)}
      groupId={Number(groupId)}
      username={user}
    />
  );
};

export default GroupPage;
