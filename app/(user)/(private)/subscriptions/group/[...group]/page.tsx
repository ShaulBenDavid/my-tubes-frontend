import React from "react";
import { notFound } from "next/navigation";
import { Groups } from "@/src/features/Groups";

interface GroupPageProps {
  params: {
    group: string[];
  };
}

const GroupPage = async ({ params: { group } }: GroupPageProps) => {
  const groupId = group[1];

  if (!groupId) {
    notFound();
  }

  return <Groups groupName={group[0]} groupId={Number(groupId)} />;
};

export default GroupPage;
