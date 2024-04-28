"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { PostSubscriptionGroupPayload } from "@/src/api/subscription";
import { Input } from "@/src/components/Input";
import { Button, ButtonVariants } from "@/src/components/Button";
import { TextArea } from "@/src/components/TextArea";
import { Alert, AlertVariants } from "@/src/components/Alert";
import { groupDetailsSchema } from "./GroupForm.config";

interface GroupFormProps {
  mutate: (data: PostSubscriptionGroupPayload) => void;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  handleCloseModal: () => void;
}

export const GroupForm = ({
  mutate,
  isLoading,
  isError,
  errorMessage,
  handleCloseModal,
}: GroupFormProps): JSX.Element => {
  const method = useForm<PostSubscriptionGroupPayload>({
    resolver: zodResolver(groupDetailsSchema),
    mode: "onTouched",
  });
  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = method;

  const onSubmit = handleSubmit((value): void => {
    mutate(value);
  });

  const onClose = (): void => {
    handleCloseModal();
    reset({ title: "", description: "" });
  };

  return (
    <div className="flex h-fit w-96 flex-col items-center justify-center">
      <h3 className="text-center text-lg font-semibold text-white">
        Create a new group
      </h3>
      <p className="text-center text-base text-white/70">
        The group will help you to organize your <strong>Subscriptions </strong>
        by subjects.
      </p>
      {isError && (
        <Alert
          variant={AlertVariants.DANGER}
          content={errorMessage}
          className="mt-4"
        />
      )}
      <FormProvider {...method}>
        <form className="flex w-full flex-col gap-5 pt-4" onSubmit={onSubmit}>
          <Input
            label="title"
            idFor="title"
            placeholder="Enter the name of the group."
            type="text"
          />
          <TextArea
            label="description"
            idFor="description"
            placeholder="Enter description of the group."
            rows={4}
          />
          <div className="flex flex-row gap-2">
            <Button variant={ButtonVariants.SECONDARY} onClick={onClose}>
              cancel
            </Button>
            <Button
              variant={ButtonVariants.PRIMARY}
              type="submit"
              disabled={!isValid}
              isLoading={isLoading}
            >
              create group
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
