import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { stringToAvatar, stringToColor } from "@/src/utils";
import { avatarSizesConfig } from "./Avatar.config";
import { AvatarSizes } from "./Avatar.types";

interface AvatarProps {
  url?: string;
  name: string;
  size?: AvatarSizes;
  className?: string;
}

export const Avatar = ({
  url,
  name,
  size = AvatarSizes.LARGE,
  className,
}: AvatarProps): JSX.Element => (
  <div
    className={twMerge(
      `flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white uppercase text-white ${avatarSizesConfig[size]}`,
      className,
    )}
    style={{ backgroundColor: `${url ? "initial" : stringToColor(name)}` }}
    data-testid="avatar-component-test-id"
  >
    {url ? (
      <Image
        src={url}
        alt={`Avatar - ${name}`}
        className="dw-skeleton h-full w-full object-cover"
        loading="lazy"
        sizes="10vh"
        height={0}
        width={0}
      />
    ) : (
      stringToAvatar(name)
    )}
  </div>
);
