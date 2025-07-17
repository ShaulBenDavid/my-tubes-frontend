import React, { useCallback, useRef } from "react";
import { useIsScroll } from "@/src/hooks";
import { ChannelCard } from "@/src/components/ChannelCard";
import type { DetailedGroup } from "@/src/api/subscription/subscription.types";
import { EmptyState } from "@/src/components/EmptyState";
import { ButtonLink } from "@/src/components/ButtonLink";
import { Routes } from "@/src/routes";
import { CarouselHeader } from "./components/CarouselHeader";
import { useShowsButtons } from "./useShowsButtons";
import { CarouselController } from "./components/CarouselController";

type GroupCarouselProps = DetailedGroup & {
  headerHref: string;
};

export const GroupCarousel = ({
  title,
  id,
  emoji,
  subscriptionsCount,
  subscriptions,
  headerHref,
}: GroupCarouselProps): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScroll = useIsScroll(scrollRef);
  const showsButtons = useShowsButtons(scrollRef);

  const handleScroll = useCallback((scrollTo: number) => {
    if (scrollRef?.current) {
      const left =
        scrollRef.current.children[0].getBoundingClientRect().width ?? 0;
      scrollRef.current.scrollBy({ left: scrollTo * left, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative flex max-h-[220px] min-h-[220px] flex-col gap-2">
      <CarouselHeader
        title={title}
        id={id}
        emoji={emoji}
        subscriptionsCount={subscriptionsCount}
        href={headerHref}
      />
      <div
        className="flex h-full w-full flex-1 snap-x snap-mandatory scroll-px-[-20x] overflow-y-hidden overflow-x-scroll scrollbar-none"
        ref={scrollRef}
      >
        {subscriptions.length ? (
          subscriptions.map(
            ({ title: name, description, imageUrl, channelId, id: itemId }) => (
              <div
                className="mr-4 aspect-video min-h-full w-[70%] shrink-0 snap-start snap-always tb:w-1/4"
                key={name + itemId}
              >
                <ChannelCard
                  title={name}
                  description={description}
                  imageUrl={imageUrl}
                  itemId={itemId}
                  channelId={channelId}
                  className="h-full"
                  wrapperClassName="h-full"
                />
              </div>
            ),
          )
        ) : (
          <div className="my-auto flex h-full w-full items-center justify-center">
            <EmptyState
              header="This group empty"
              description="To add Subscription to this group, go to the Subscription page."
              footer={
                <ButtonLink href={Routes.SUBSCRIPTIONS} width="170px">
                  Subscriptions
                </ButtonLink>
              }
            />
          </div>
        )}
      </div>
      {isScroll && (
        <CarouselController
          handleScroll={handleScroll}
          isShowLeft={showsButtons.left}
          isShowRight={showsButtons.right}
        />
      )}
    </div>
  );
};
