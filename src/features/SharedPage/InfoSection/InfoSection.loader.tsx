import React from "react";
import Skeleton from "react-loading-skeleton";

export const InfoSectionLoader = () => (
  <div className="flex flex-col gap-2">
    <span className="flex flex-col items-center gap-1">
      <Skeleton
        circle
        height="80px"
        width="80px"
        containerClassName="avatar-skeleton"
      />
      <Skeleton width="150px" height="20px" containerClassName="h-6" />
    </span>
    <Skeleton width="100%" height="20px" count={2} />
  </div>
);
