import React from "react";
import { useDrag } from "react-dnd";
import { RiExternalLinkLine } from "react-icons/ri";
import { MdDragIndicator } from "react-icons/md";
import theme from "@/src/styles/tailwind.theme";
import { Card } from "@/src/components/Card";
import { Avatar } from "@/src/components/Avatar";
import { ButtonLink, ButtonLinkVariants } from "@/src/components/ButtonLink";
import { YOUTUBE_CHANNEL_URL } from "./ChannelCard.config";
import { DND_TYPE_ID } from "../../features/Subscriptions/components/GroupsSection/components/GroupCard";

interface ChannelCardProps {
  title: string;
  description: string;
  imageUrl: string;
  itemId: number;
  channelId: string;
  isDraggable?: boolean;
}

export const ChannelCard = ({
  title,
  description,
  imageUrl,
  itemId,
  channelId,
  isDraggable = false,
}: ChannelCardProps): JSX.Element => {
  const [{ opacity, draggingClass }, drag] = useDrag(
    () => ({
      type: DND_TYPE_ID,
      item: { title, channelId, id: itemId, imageUrl, description },
      canDrag: isDraggable,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
        draggingClass: monitor.isDragging() ? "cursor-grabbing" : "cursor-grab",
      }),
    }),
    [title],
  );

  return (
    <div
      ref={drag}
      style={{ opacity }}
      className={isDraggable ? draggingClass : ""}
    >
      <Card className="flex h-full snap-start flex-col">
        <div className="flex flex-row items-center gap-2">
          <Avatar name={title} url={imageUrl} />
          <h5 className="line-clamp-1 text-ellipsis text-base font-semibold capitalize">
            {title}
          </h5>
          {isDraggable && (
            <MdDragIndicator size={30} className="ml-auto opacity-70" />
          )}
        </div>
        <p className="line-clamp-3 text-ellipsis pt-2">{description}</p>
        <div className="ml-auto mt-auto flex w-7/12 flex-row gap-2 pt-2">
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
    </div>
  );
};
