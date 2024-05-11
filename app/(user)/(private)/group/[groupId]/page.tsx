import React from "react";

interface GroupPageProps {
  params: {
    groupId: string;
  };
}

const GroupPage = ({ params: { groupId } }: GroupPageProps) => (
  <div>GroupPage{groupId}</div>
);

export default GroupPage;
