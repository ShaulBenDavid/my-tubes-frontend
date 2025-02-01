import React from "react";
import { Avatar } from "@/src/components/Avatar";

interface UserHeaderProps {
  imageUrl?: string | null;
  description?: string | null;
  firstName: string;
  lastName: string;
}

export const UserHeader = ({
  imageUrl,
  description,
  firstName,
  lastName,
}: UserHeaderProps): JSX.Element => (
  <header className="flex w-full flex-col items-center gap-2">
    <Avatar
      url={imageUrl ?? undefined}
      name={`${firstName} ${lastName}`}
      className="h-20 w-20"
    />
    <h1
      aria-label="username"
      className="text-xl font-semibold"
    >{`${firstName} ${lastName}`}</h1>
    {description && (
      <p className="w-[90%] text-center opacity-90 sm:w-4/5">{description}</p>
    )}
  </header>
);
