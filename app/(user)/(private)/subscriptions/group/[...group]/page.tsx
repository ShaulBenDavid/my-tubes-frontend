import React from "react";
import { notFound } from "next/navigation";
import { Group } from "@/src/features/Group";

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

  return <Group groupId={Number(groupId)} />;
};

export default GroupPage;
