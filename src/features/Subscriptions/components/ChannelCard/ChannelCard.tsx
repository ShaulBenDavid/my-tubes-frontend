import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import theme from "@/src/styles/tailwind.theme";
import { Card } from "@/src/components/Card";
import { Avatar } from "@/src/components/Avatar";
import { ButtonLink, ButtonLinkVariants } from "@/src/components/ButtonLink";
import { YOUTUBE_CHANNEL_URL } from "./ChannelCard.config";

interface ChannelCardProps {
  title: string;
  description: string;
  imageUrl: string;
  channelId: string;
}

export const ChannelCard = ({
  title,
  description,
  imageUrl,
  channelId,
}: ChannelCardProps): JSX.Element => (
  <Card>
    <div className="flex flex-row items-center gap-2">
      <Avatar name={title} url={imageUrl} />
      <h5 className="line-clamp-1 text-ellipsis text-base font-semibold capitalize">
        {title}
      </h5>
    </div>
    <p className="line-clamp-3 text-ellipsis pt-2">{description}</p>
    <div className="ml-auto flex w-7/12 flex-row gap-2 pt-2">
      <ButtonLink
        variant={ButtonLinkVariants.PRIMARY}
        href={`${YOUTUBE_CHANNEL_URL}${channelId}`}
        isOutSource
      >
        <span className="flex flex-row items-center gap-2">
          Channel
          <RiExternalLinkLine size={20} color={theme.white} />
        </span>
      </ButtonLink>
    </div>
  </Card>
);
