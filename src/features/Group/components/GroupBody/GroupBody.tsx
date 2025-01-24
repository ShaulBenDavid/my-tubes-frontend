"use client";

import React, { useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";
import useInfiniteScroll from "react-infinite-scroll-hook";
import type {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { FaRegObjectUngroup } from "react-icons/fa";
import NoDataSVG from "@/src/assets/images/NoDataSVG.svg";
import { ChannelCard, ChannelCardLoader } from "@/src/components/ChannelCard";
import { EmptyState } from "@/src/components/EmptyState";
import { Spinner } from "@/src/components/Spinner";
import type { SubscriptionType } from "@/src/api/subscription";
import type { GetSubscriptionsListResponse } from "@/src/api/subscription/subscription.types";
import { ARIA_CONTROL_REMOVE_SUBSCRIPTION_FROM_GROUP } from "@/src/components/ChannelCard/ChannelCard";
import { Modal } from "@/src/components/Modal";
import { ValidationContentModal } from "@/src/components/ValidationContentModal";
import {
  GET_SUBSCRIPTIONS_GROUPS_KEY,
  GET_SUBSCRIPTIONS_LIST_KEY,
  GET_SUBSCRIPTIONS_GROUP_KEY,
  useDeleteSubscriptionFromGroup,
  GET_GROUP_DETAILED_LIST_KEY,
} from "@/src/api/subscription/hooks";
import { appQueryClient } from "@/src/queries";
import { ActionButtonVariants } from "@/src/components/ActionButton/ActionButton.types";
import { ActionButton } from "@/src/components/ActionButton";

interface GroupBodyProps {
  groupName: string;
  isSubscriptionsLoading: boolean;
  isFetchingNextPage: boolean;
  isSubscriptionsError: boolean;
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<GetSubscriptionsListResponse, unknown>,
      Error
    >
  >;
  subscriptionsList?: SubscriptionType[];
  searchValue: string;
}

export const GroupBody = ({
  groupName,
  isSubscriptionsLoading,
  isFetchingNextPage,
  isSubscriptionsError,
  hasNextPage,
  fetchNextPage,
  subscriptionsList,
  searchValue,
}: GroupBodyProps): JSX.Element => {
  const [selectedSubscription, setSelectedSubscription] = useState<
    SubscriptionType | undefined
  >();
  const removeSubscriptionModalRef = useRef<HTMLDialogElement>(null);

  const [sentryRef] = useInfiniteScroll({
    loading: isSubscriptionsLoading || isFetchingNextPage,
    onLoadMore: fetchNextPage,
    hasNextPage,
    disabled: isSubscriptionsError,
    rootMargin: "100px",
  });

  const handleClose = (): void => removeSubscriptionModalRef?.current?.close();

  const handleSuccess = useCallback(() => {
    appQueryClient.invalidateQueries({
      queryKey: [GET_SUBSCRIPTIONS_GROUP_KEY],
    });
    appQueryClient.invalidateQueries({
      queryKey: [GET_SUBSCRIPTIONS_GROUPS_KEY],
    });
    appQueryClient.invalidateQueries({
      queryKey: [GET_GROUP_DETAILED_LIST_KEY],
    });
    appQueryClient.invalidateQueries({
      queryKey: [GET_SUBSCRIPTIONS_LIST_KEY],
    });
    toast.success(
      `We removed successfully ${selectedSubscription?.title} from ${groupName} group.`,
    );
    handleClose();
  }, [groupName, selectedSubscription?.title]);

  const { removeSubscription, isRemoveSubscriptionLoading } =
    useDeleteSubscriptionFromGroup({
      handleSuccess,
      handleError: () => {
        toast.error(
          `We failed to remove ${selectedSubscription?.title} from ${groupName} group. please try again later.`,
        );
      },
    });

  const handleSubscriptionSelect = (subscription: SubscriptionType): void => {
    setSelectedSubscription(subscription);
    removeSubscriptionModalRef.current?.showModal();
  };

  return (
    <>
      <section
        className="flex w-full grid-cols-tablet-groups-auto-fit grid-rows-groups-row-fit 
        flex-col gap-3 pt-2 tb:grid tb:gap-4 tb:px-2 tb:pt-4 lg:grid-cols-groups-auto-fit"
        id="searchResults"
      >
        {isSubscriptionsLoading && <ChannelCardLoader />}
        {!isSubscriptionsLoading && !subscriptionsList?.length && (
          <div className="col-span-full row-span-full flex h-full w-full items-center justify-center">
            <EmptyState
              svgUrl={NoDataSVG}
              header={
                searchValue.length
                  ? `No Results Found For: ${searchValue}`
                  : "No Subscriptions In this group."
              }
            />
          </div>
        )}
        {!!subscriptionsList?.length &&
          !isSubscriptionsLoading &&
          subscriptionsList.map(
            ({ title, description, imageUrl, channelId, id }, index) => (
              <ChannelCard
                key={channelId}
                title={title}
                description={description}
                imageUrl={imageUrl}
                itemId={id}
                channelId={channelId}
                className="animate-[fadeIn_1s_ease-in_50ms_forwards] opacity-0 tb:h-60"
                style={{ animationDelay: `${index * 0.07}s` }}
                actionButtons={
                  <ActionButton
                    type="button"
                    tooltip="Ungroup"
                    variant={ActionButtonVariants.WARNING}
                    id="remove-subscription-from-group-button"
                    aria-label={`remove ${title} from the group`}
                    aria-controls={ARIA_CONTROL_REMOVE_SUBSCRIPTION_FROM_GROUP}
                    className="rounded-xl hover:bg-red-600/20 active:bg-red-600/30"
                    onClick={() =>
                      handleSubscriptionSelect({
                        title,
                        description,
                        imageUrl,
                        channelId,
                        id,
                      })
                    }
                    icon={<FaRegObjectUngroup size={24} />}
                  />
                }
              />
            ),
          )}
        {(isFetchingNextPage || hasNextPage) && (
          <div
            ref={sentryRef}
            className="col-span-full flex w-full items-center justify-center p-2"
          >
            <Spinner />
          </div>
        )}
      </section>
      <Modal
        ref={removeSubscriptionModalRef}
        closeModal={handleClose}
        id={ARIA_CONTROL_REMOVE_SUBSCRIPTION_FROM_GROUP}
      >
        {selectedSubscription?.title && (
          <ValidationContentModal
            title={`Remove ${selectedSubscription.title}`}
            content={`Removing ${selectedSubscription.title} from ${groupName}, the subscription will not be deleted.`}
            isLoading={isRemoveSubscriptionLoading}
            onClose={handleClose}
            onDelete={() => removeSubscription(selectedSubscription.id)}
          />
        )}
      </Modal>
    </>
  );
};
