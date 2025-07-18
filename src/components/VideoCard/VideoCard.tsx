import React from "react";
import Image from "next/image";
import type { SubscriptionListResultType } from "@/src/api/subscription/subscription.types";
import { Avatar } from "../Avatar";
import { AvatarSizes } from "../Avatar/Avatar.types";
import { YOUTUBE_CHANNEL_URL } from "../ChannelCard/ChannelCard.config";
import { formatRelativeTime } from "@/src/utils";

export interface StrictSubscriptionListResultType
  extends SubscriptionListResultType {
  upload: NonNullable<SubscriptionListResultType["upload"]>;
}

interface VideoCardProps {
  data: StrictSubscriptionListResultType;
}

export const VideoCard = ({ data }: VideoCardProps): JSX.Element => (
  <a
    href={data.upload.videoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-full w-full"
  >
    <div className="grid w-full grid-cols-1 grid-rows-3 overflow-hidden shadow-lg">
      <div className="col-span-full row-span-full aspect-video h-full w-full">
        <Image
          src={data.upload.videoImageUrl}
          alt={data.upload.title}
          className="h-full w-full rounded-xl object-cover object-top"
          loading="lazy"
          sizes="25vh"
          height={0}
          width={0}
        />
      </div>

      <div className="col-start-1 row-start-3 flex flex-row gap-2 rounded-xl bg-spec-space-bg p-1">
        <Avatar
          name={data.title}
          url={data.imageUrl}
          size={AvatarSizes.LARGE}
        />
        <div className="w-full overflow-hidden">
          <h3 className="truncate text-sm font-semibold tb:text-base">
            {data.upload.title}
          </h3>
          <div className="flex w-full flex-row items-center gap-1 text-sm font-semibold">
            <a
              href={`${YOUTUBE_CHANNEL_URL}${data.channelId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-full overflow-hidden"
            >
              <p className="truncate opacity-80 duration-100 hover:opacity-100">
                {data.title}
              </p>
            </a>
            <span
              aria-hidden
              className="h-1 w-1 rounded-full bg-white opacity-80"
            />
            <time
              dateTime={String(data.upload.uploadTime)}
              className="whitespace-nowrap opacity-80"
            >
              {formatRelativeTime(new Date(data.upload.uploadTime))}
            </time>
          </div>
        </div>
      </div>
    </div>
  </a>
);
