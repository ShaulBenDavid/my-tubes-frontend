"use client";

import React, { type ForwardedRef, forwardRef, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/src/components/Modal";
import {
  GET_SUBSCRIPTIONS_GROUPS_KEY,
  GET_SUBSCRIPTIONS_LIST_KEY,
  useGetSubscriptionsGroups,
  usePostAddSubscriptionGroup,
} from "@/src/api/subscription/hooks";
import { appQueryClient } from "@/src/queries";
import { SelectInput } from "@/src/components/SelectInput";
import type { PostAddSubscriptionGroupPayload } from "@/src/api/subscription/subscription.types";
import { Button, ButtonVariants } from "@/src/components/Button";
import { moveToGroupSchema } from "./MoveGroupModal.config";

export const ARIA_MOVE_CHANNEL_TO_GROUP = "moveChanngelToGroup";

interface MoveGroupModalProps {
  title: string;
  subscriptionId: number;
  currentGroupId?: number;
  onClose: () => void;
}

export const MoveGroupModal = forwardRef<
  HTMLDialogElement,
  MoveGroupModalProps
>(
  (
    { title, subscriptionId, currentGroupId, onClose },
    ref: ForwardedRef<HTMLDialogElement>,
  ): JSX.Element => {
    const method = useForm<PostAddSubscriptionGroupPayload>({
      resolver: zodResolver(moveToGroupSchema),
      mode: "onChange",
    });
    const {
      handleSubmit,
      setValue,
      reset,
      formState: { isValid, isDirty },
    } = method;

    useEffect(() => {
      setValue("subscriptionId", subscriptionId);
      setValue("groupId", 9_000_000);
    }, [subscriptionId, setValue, currentGroupId]);

    const handleClose = (): void => {
      reset();
      onClose();
    };

    const { subscriptionsGroups } = useGetSubscriptionsGroups();
    const { addSubscriptionGroup, isPostAddSubscriptionLoading } =
      usePostAddSubscriptionGroup({
        handleSuccess: (res) => {
          appQueryClient.invalidateQueries({
            queryKey: [GET_SUBSCRIPTIONS_GROUPS_KEY],
          });
          appQueryClient.invalidateQueries({
            queryKey: [GET_SUBSCRIPTIONS_LIST_KEY],
          });
          toast.success(`${res.title} was added to a group successfully!`);
          handleClose();
        },
        handleError: (err) => {
          toast.error(err?.response?.data.error ?? "");
        },
      });

    const onSubmit = handleSubmit((value): void => {
      addSubscriptionGroup(value);
    });

    return (
      <Modal ref={ref} id={ARIA_MOVE_CHANNEL_TO_GROUP} closeModal={onClose}>
        <div className="flex h-fit w-72 flex-col items-center justify-center">
          <h4 className="text-lg font-semibold text-white">
            Update Channel Group
          </h4>
          <p className="text-center text-base capitalize text-white/70">
            Channel: <strong>{title}</strong>
          </p>
          <FormProvider {...method}>
            <form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
              <SelectInput
                key={subscriptionId}
                label="groupId"
                idFor="group"
                options={subscriptionsGroups ?? []}
              />
              <div className="flex flex-row gap-2">
                <Button
                  variant={ButtonVariants.SECONDARY}
                  onClick={handleClose}
                  type="button"
                >
                  cancel
                </Button>
                <Button
                  variant={ButtonVariants.PRIMARY}
                  type="submit"
                  disabled={!isValid || !isDirty}
                  isLoading={isPostAddSubscriptionLoading}
                >
                  submit
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </Modal>
    );
  },
);
