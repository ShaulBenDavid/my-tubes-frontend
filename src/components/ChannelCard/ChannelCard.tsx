import React, { type ReactNode, type CSSProperties } from "react";
import { useDrag } from "react-dnd";
import { RiExternalLinkLine } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import theme from "@/src/styles/tailwind.theme";
import { Card } from "@/src/components/Card";
import { DND_TYPE_ID } from "@/src/features/Subscriptions/components/GroupsSection/components/GroupCard";
import type { SubscriptionsGroupType } from "@/src/api/subscription";
import { ButtonLink, ButtonLinkVariants } from "@/src/components/ButtonLink";
import { YOUTUBE_CHANNEL_URL } from "./ChannelCard.config";
import { CardHeader } from "./CardHeader";

export const ARIA_CONTROL_REMOVE_SUBSCRIPTION_FROM_GROUP =
  "removeSubscriptionFromGroupModal";

interface ChannelCardProps {
  title: string;
  description: string;
  imageUrl: string;
  itemId: number;
  channelId: string;
  className?: string;
  wrapperClassName?: string;
  style?: CSSProperties;
  isDraggable?: boolean;
  actionButtons?: ReactNode;
  group?: Pick<SubscriptionsGroupType, "id" | "title"> | null;
}

export const ChannelCard = ({
  title,
  description,
  imageUrl,
  itemId,
  channelId,
  className,
  wrapperClassName,
  style,
  isDraggable = false,
  actionButtons,
  group,
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
      className={isDraggable ? draggingClass : wrapperClassName}
    >
      <Card
        className={twMerge(
          "flex h-full snap-start flex-col p-2 tb:p-3",
          className,
        )}
        style={style}
      >
        <CardHeader
          title={title}
          imageUrl={imageUrl}
          isDraggable={isDraggable}
          group={group}
        />
        <p className="line-clamp-3 text-ellipsis pt-2 text-sm">{description}</p>
        <div className="mt-auto flex w-full flex-row items-center justify-between gap-2 pt-2">
          {actionButtons}
          <span className="ml-auto w-3/5">
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
