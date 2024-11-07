import React from "react";
import { notFound } from "next/navigation";

interface GroupPageProps {
  params: {
    group: string[];
  };
}

const GroupPage = async ({
  params: { group },
}: GroupPageProps): Promise<JSX.Element> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [profileId, _, groupId] = group;

  if (!groupId) {
    notFound();
  }

  return (
    <>
      {profileId}
      {groupId}
    </>
  );
};

export default GroupPage;
