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

  return (
    <div>
      <Groups groupId={group[1]} />
    </div>
  );
};

export default GroupPage;
