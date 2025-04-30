import React from "react";
import { Avatar } from "../Avatar";

interface AccountLinkProps {
  href: string;
  imageUrl?: string;
  name: string;
  description?: string | null;
}

export const AccountLink = ({
  href,
  imageUrl,
  name,
  description,
}: AccountLinkProps): JSX.Element => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className="flex flex-row items-center gap-3 rounded-lg p-2 duration-100 hover:bg-white/10 hover:underline"
  >
    <Avatar url={imageUrl} name={name} />
    <div>
      <h3 className="font-bold">{name}</h3>
      {description && (
        <p className="line-clamp-2 text-sm opacity-90">{description}</p>
      )}
    </div>
  </a>
);
