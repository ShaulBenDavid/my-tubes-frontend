import React from "react";
import { useDrag } from "react-dnd";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaRegObjectUngroup } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import theme from "@/src/styles/tailwind.theme";
import { Card } from "@/src/components/Card";
import { Avatar } from "@/src/components/Avatar";
import { DND_TYPE_ID } from "@/src/features/Subscriptions/components/GroupsSection/components/GroupCard";
import { ButtonLink, ButtonLinkVariants } from "@/src/components/ButtonLink";
import { YOUTUBE_CHANNEL_URL } from "./ChannelCard.config";

export const ARIA_CONTROL_REMOVE_SUBSCRIPTION_FROM_GROUP =
  "removeSubscriptionFromGroupModal";

interface ChannelCardProps {
  title: string;
  description: string;
  imageUrl: string;
  itemId: number;
  channelId: string;
  className?: string;
  isDraggable?: boolean;
  onRemove?: () => void;
}

export const ChannelCard = ({
  title,
  description,
  imageUrl,
  itemId,
  channelId,
  className,
  isDraggable = false,
  onRemove,
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
      <Card className={twMerge("flex h-full snap-start flex-col", className)}>
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
        <div className="mt-auto flex w-full flex-row items-center justify-between gap-2 pt-2">
          {onRemove && (
            <button
              type="button"
              id="remove-subscription-from-group-button"
              aria-label={`remove ${title} from the group `}
              aria-controls={ARIA_CONTROL_REMOVE_SUBSCRIPTION_FROM_GROUP}
              className="rounded-xl p-2 hover:bg-red-600/20 active:bg-red-600/30"
              onClick={onRemove}
            >
              <FaRegObjectUngroup size={24} />
            </button>
          )}
          <span className="ml-auto w-7/12">
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
          </span>
        </div>
      </Card>
    </div>
  );
};
