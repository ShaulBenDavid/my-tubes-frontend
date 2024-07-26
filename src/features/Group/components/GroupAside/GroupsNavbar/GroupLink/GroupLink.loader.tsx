import React from "react";
import Skeleton from "react-loading-skeleton";

export const GroupLinkLoader = () => (
  <>
    <Skeleton width="40%" height="20px" count={1} className="mb-1" />
    <Skeleton width="100%" height="20px" count={5} />
  </>
);
