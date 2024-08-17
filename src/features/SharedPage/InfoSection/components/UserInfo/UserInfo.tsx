import React from "react";
import type { UserSharedInfoType } from "@/src/api/openToPublic/openToPublic.types";
import { Avatar } from "@/src/components/Avatar";
import { formatDateAndHour } from "@/src/utils";

interface UserInfoProps extends UserSharedInfoType {
  expirationDate: Date;
}

export const UserInfo = ({
  expirationDate,
  username,
  imageUrl,
}: UserInfoProps): JSX.Element => {
  const date = new Date(Number(expirationDate) * 1000);

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="font-medium opacity-90">Group Shared By: </span>
      <span className="flex flex-col items-center gap-2">
        <Avatar
          url={imageUrl ?? undefined}
          name={username}
          className="h-20 w-20"
        />
        <span aria-label="username">{username}</span>
      </span>

      <span
        className="text-sm font-semibold opacity-80"
        title="Link expiration"
      >
        Link expiration:{" "}
        <time dateTime={String(date)} className="font-bold">
          {formatDateAndHour(Number(expirationDate))}
        </time>
      </span>
    </div>
  );
};
