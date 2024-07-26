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
  title: string;
  content: string;
  mutate: (data: PostSubscriptionGroupPayload) => void;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  handleCloseModal: () => void;
  defaultValues?: PostSubscriptionGroupPayload;
}

export const GroupForm = ({
  title,
  content,
  mutate,
  isLoading,
  isError,
  errorMessage,
  handleCloseModal,
  defaultValues,
}: GroupFormProps): JSX.Element => {
  const method = useForm<PostSubscriptionGroupPayload>({
    resolver: zodResolver(groupDetailsSchema),
    mode: "onTouched",
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    formState: { isValid, isDirty },
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
      <h4 className="text-center text-lg font-semibold text-white">{title}</h4>
      <p className="text-center text-base text-white/70">{content}</p>
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
              disabled={!isValid || !isDirty}
              isLoading={isLoading}
            >
              submit
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
