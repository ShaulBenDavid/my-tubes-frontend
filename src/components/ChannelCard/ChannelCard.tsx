import React, { type CSSProperties } from "react";
import Link from "next/link";
import { useDrag } from "react-dnd";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaRegObjectUngroup } from "react-icons/fa";
import { MdDragIndicator, MdGroups } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { buildRoutePath, stringToColor } from "@/src/utils";
import { Routes } from "@/src/routes";
import theme from "@/src/styles/tailwind.theme";
import { Card } from "@/src/components/Card";
import { Avatar } from "@/src/components/Avatar";
import { DND_TYPE_ID } from "@/src/features/Subscriptions/components/GroupsSection/components/GroupCard";
import type { SubscriptionsGroupType } from "@/src/api/subscription";
import { ButtonLink, ButtonLinkVariants } from "@/src/components/ButtonLink";
import { YOUTUBE_CHANNEL_URL } from "./ChannelCard.config";
import { ActionButton } from "../ActionButton";
import { ActionButtonVariants } from "../ActionButton/ActionButton.types";

export const ARIA_CONTROL_REMOVE_SUBSCRIPTION_FROM_GROUP =
  "removeSubscriptionFromGroupModal";

interface ChannelCardProps {
  title: string;
  description: string;
  imageUrl: string;
  itemId: number;
  channelId: string;
  className?: string;
  style?: CSSProperties;
  isDraggable?: boolean;
  onRemove?: () => void;
  group?: Pick<SubscriptionsGroupType, "id" | "title"> | null;
}

export const ChannelCard = ({
  title,
  description,
  imageUrl,
  itemId,
  channelId,
  className,
  style,
  isDraggable = false,
  onRemove,
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
      className={isDraggable ? draggingClass : ""}
    >
      <Card
        className={twMerge("flex h-full snap-start flex-col", className)}
        style={style}
      >
        <div className="flex flex-row items-center gap-2">
          <Avatar name={title} url={imageUrl} />
          <span className="flex w-full flex-col">
            <h5 className="line-clamp-1 text-ellipsis text-base font-semibold capitalize">
              {title}
            </h5>
            {group?.title && (
              <span className="flex flex-row items-center gap-1">
                <MdGroups
                  aria-hidden
                  className="shrink-0"
                  fill={stringToColor(group.title + group.id)}
                />
                <Link
                  className="line-clamp-1 text-ellipsis text-sm font-normal opacity-80 hover:underline"
                  href={buildRoutePath(
                    Routes.SUBSCRIPTIONS,
                    Routes.GROUP,
                    title,
                    String(group.id),
                  )}
                >
                  {group.title}
                </Link>
              </span>
            )}
          </span>
          {isDraggable && (
            <MdDragIndicator
              size={30}
              className="ml-auto shrink-0 opacity-70"
            />
          )}
        </div>
        <p className="line-clamp-3 text-ellipsis pt-2">{description}</p>
        <div className="mt-auto flex w-full flex-row items-center justify-between gap-2 pt-2">
          {onRemove && (
            <ActionButton
              type="button"
              tooltip="Ungroup"
              variant={ActionButtonVariants.WARNING}
              id="remove-subscription-from-group-button"
              aria-label={`remove ${title} from the group `}
              aria-controls={ARIA_CONTROL_REMOVE_SUBSCRIPTION_FROM_GROUP}
              className="rounded-xl p-2 hover:bg-red-600/20 active:bg-red-600/30"
              onClick={onRemove}
              icon={<FaRegObjectUngroup size={24} />}
            />
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
