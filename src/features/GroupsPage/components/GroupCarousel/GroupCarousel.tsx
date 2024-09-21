import React from "react";
import type { DetailedGroup } from "@/src/api/subscription/subscription.types";
import { CarouselHeader } from "./components/CarouselHeader";
import { ChannelCard } from "@/src/components/ChannelCard";

type GroupCarouselProps = DetailedGroup;

export const GroupCarousel = ({
  title,
  id,
  emoji,
  subscriptionsCount,
  subscriptions,
}: GroupCarouselProps): JSX.Element => (
  <div className="flex h-1/4 min-h-[250px] shrink-0 flex-col gap-2">
    <CarouselHeader
      title={title}
      id={id}
      emoji={emoji}
      subscriptionsCount={subscriptionsCount}
    />
    { /* prettier-ignore */}
    <div className="scrollbar-none flex h-full w-full snap-x snap-mandatory scroll-px-[-20x] overflow-scroll">
      {subscriptions?.map(
        ({ title: name, description, imageUrl, channelId, id: itemId }) => (
          <div
            className="mr-4 aspect-video shrink-0 w-[70%] tb:w-1/3 snap-start snap-always"
            key={name + itemId}
          >
            <ChannelCard
              title={name}
              description={description}
              imageUrl={imageUrl}
              itemId={itemId}
              channelId={channelId}
              className="h-full"
            />
          </div>
        ),
      )}
    </div>
  </div>
);
