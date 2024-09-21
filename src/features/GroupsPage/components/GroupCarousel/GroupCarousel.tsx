import React, { useCallback, useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useIsScroll } from "@/src/hooks";
import { ChannelCard } from "@/src/components/ChannelCard";
import type { DetailedGroup } from "@/src/api/subscription/subscription.types";
import { CarouselHeader } from "./components/CarouselHeader";
import { useShowsButtons } from "./useShowsButtons";
import theme from "@/src/styles/tailwind.theme";
import S from "./GroupCarousel.module.css";

type GroupCarouselProps = DetailedGroup;

export const GroupCarousel = ({
  title,
  id,
  emoji,
  subscriptionsCount,
  subscriptions,
}: GroupCarouselProps): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScroll = useIsScroll(scrollRef);
  const showsButtons = useShowsButtons(scrollRef);

  const handleScroll = useCallback((scrollIn: number) => {
    if (scrollRef?.current) {
      scrollRef.current.scrollBy({ left: scrollIn, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative flex h-1/4 min-h-[250px] shrink-0 flex-col gap-2">
      <CarouselHeader
        title={title}
        id={id}
        emoji={emoji}
        subscriptionsCount={subscriptionsCount}
      />
      { /* prettier-ignore */}
      <div className="scrollbar-none flex h-full w-full snap-x snap-mandatory scroll-px-[-20x] overflow-x-scroll" ref={scrollRef}>
      {subscriptions?.map(
        ({ title: name, description, imageUrl, channelId, id: itemId }) => (
          <div
            className="mr-4 aspect-video shrink-0 w-[70%] tb:w-1/3 snap-start snap-always h-full"
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
      {isScroll && (
        <>
          {showsButtons.left && (
            <div className={S.leftBackground}>
              <button
                aria-label="previous sections"
                tabIndex={0}
                className="p-2 duration-75 hover:text-blue-400 tb:p-4"
                onClick={() => handleScroll(-200)}
              >
                <SlArrowLeft stroke={theme.white} size={24} />
              </button>
            </div>
          )}
          {showsButtons.right && (
            <div className={S.rightBackground}>
              <button
                aria-label="next sections"
                tabIndex={0}
                className="p-2 duration-75 hover:text-blue-400 tb:p-4"
                onClick={() => handleScroll(200)}
              >
                <SlArrowRight stroke={theme.white} size={24} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
