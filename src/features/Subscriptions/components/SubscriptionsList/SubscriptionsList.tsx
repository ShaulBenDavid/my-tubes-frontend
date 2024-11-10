"use client";

import React, { useCallback, useRef, useState } from "react";
import { MdOutlineDriveFileMove } from "react-icons/md";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useDebounce } from "@/src/hooks";
import { useGetSubscriptionsList } from "@/src/api/subscription/hooks";
import { Spinner } from "@/src/components/Spinner";
import { EmptyState } from "@/src/components/EmptyState";
import type { SubscriptionsListSortEnum } from "@/src/api/subscription/subscription.types";
import NoDataSVG from "@/src/assets/images/NoDataSVG.svg";
import { ActionButton } from "@/src/components/ActionButton";
import { ActionButtonVariants } from "@/src/components/ActionButton/ActionButton.types";
import {
  ChannelCard,
  ChannelCardLoader,
} from "../../../../components/ChannelCard";
import { subscriptionsListSortConfig } from "./SubscriptionsList.config";
import { FiltersHeader } from "./components/FiltersHeader";
import {
  ARIA_MOVE_CHANNEL_TO_GROUP,
  MoveGroupModal,
} from "./components/MoveGroupModal";

const UNGROUP_SUBSCRIPTION_FILTER = "ungroup";

interface SubscriptionsListProps {
  isDesktop: boolean;
}

export const SubscriptionsList = ({
  isDesktop,
}: SubscriptionsListProps): JSX.Element => {
  const [selectedSort, setSelectedSort] = useState<
    SubscriptionsListSortEnum | undefined
  >();
  const [search, setSearch] = useState<string>("");
  const [isShowUngroup, setIsShowUngroup] = useState<boolean>(isDesktop);
  const [selectedSubscription, setSelectedSubscription] = useState<
    { title: string; id: number; currentGroupId?: number } | undefined
  >();
  const debouncedValue = useDebounce(search, 300);
  const moveSubscriptionModalRef = useRef<HTMLDialogElement>(null);

  const {
    subscriptionsList,
    isSubscriptionsLoading,
    isSubscriptionsError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetSubscriptionsList({
    ordering: selectedSort,
    search: debouncedValue,
    group: isShowUngroup ? UNGROUP_SUBSCRIPTION_FILTER : undefined,
  });

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading: isSubscriptionsLoading || isFetchingNextPage,
    onLoadMore: fetchNextPage,
    hasNextPage,
    disabled: isSubscriptionsError,
    rootMargin: "100px",
  });

  const handleClose = useCallback((): void => {
    setSelectedSubscription(undefined);
    moveSubscriptionModalRef?.current?.close();
  }, [setSelectedSubscription, moveSubscriptionModalRef]);

  const handleOpen = useCallback(
    (selectedItem: {
      title: string;
      id: number;
      currentGroupId?: number;
    }): void => {
      setSelectedSubscription(selectedItem);
      moveSubscriptionModalRef?.current?.showModal();
    },
    [setSelectedSubscription, moveSubscriptionModalRef],
  );

  return (
    <div className="flex h-full w-full shrink-0 flex-col gap-2 tb:w-96 tb:gap-4">
      <div className="fixed top-0 flex h-dvh flex-col pt-[calc(36px+var(--mobile-top-padding))] tb:w-96 tb:pt-[calc(36px+var(--desktop-top-padding))]">
        <FiltersHeader
          isShowUngroup={isShowUngroup}
          onUngroupChange={() => setIsShowUngroup((prev) => !prev)}
          searchValue={search}
          sortOptions={subscriptionsListSortConfig}
          onSortChange={(value) => setSelectedSort(value)}
          onSearchReset={() => setSearch("")}
          onSearchChange={(searchValue) => setSearch(searchValue)}
        />
        <div
          className="flex h-full w-full snap-y snap-mandatory flex-col gap-3 overflow-y-auto tb:gap-4 tb:pr-2"
          ref={rootRef}
          id="searchResults"
        >
          {isSubscriptionsLoading && (
            <div className="flex flex-col gap-6">
              <ChannelCardLoader />
            </div>
          )}
          {!isSubscriptionsLoading && !subscriptionsList?.length && (
            <div className="flex h-full w-full items-center justify-center">
              <EmptyState svgUrl={NoDataSVG} header="No Subscriptions Data." />
            </div>
          )}
          {!!subscriptionsList?.length &&
            subscriptionsList.map(
              ({ title, description, imageUrl, channelId, id, group }) => (
                <ChannelCard
                  key={title}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  itemId={id}
                  channelId={channelId}
                  isDraggable={isDesktop}
                  group={group}
                  actionButtons={
                    isDesktop ? undefined : (
                      <ActionButton
                        type="button"
                        tooltip="Update group"
                        variant={ActionButtonVariants.DEFAULT}
                        id="move-subscription-to-group"
                        aria-label={`move ${title} to a group`}
                        aria-controls={ARIA_MOVE_CHANNEL_TO_GROUP}
                        onClick={() =>
                          handleOpen({ title, id, currentGroupId: group?.id })
                        }
                        icon={<MdOutlineDriveFileMove size={24} />}
                      />
                    )
                  }
                />
              ),
            )}
          {(isFetchingNextPage || hasNextPage) && (
            <div
              ref={sentryRef}
              className="flex w-full items-center justify-center p-2"
            >
              <Spinner />
            </div>
          )}
        </div>
        <MoveGroupModal
          title={selectedSubscription?.title ?? ""}
          subscriptionId={selectedSubscription?.id ?? 0}
          currentGroupId={selectedSubscription?.currentGroupId}
          onClose={handleClose}
          ref={moveSubscriptionModalRef}
        />
      </div>
    </div>
  );
};
