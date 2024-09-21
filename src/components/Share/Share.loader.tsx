import React from "react";
import Skeleton from "react-loading-skeleton";

export const ShareLoader = (): JSX.Element => (
  <div aria-label="loader indicator">
    <Skeleton width="40%" height="20px" count={1} className="mb-2" />
    <div className="ml-2 flex flex-row gap-2">
      <Skeleton width="32px" height="32px" count={1} circle />
      <Skeleton width="32px" height="32px" count={1} circle />
      <Skeleton width="32px" height="32px" count={1} circle />
      <Skeleton width="32px" height="32px" count={1} circle />
      <Skeleton width="32px" height="32px" count={1} circle />
      <Skeleton width="32px" height="32px" count={1} circle />
    </div>
  </div>
);
