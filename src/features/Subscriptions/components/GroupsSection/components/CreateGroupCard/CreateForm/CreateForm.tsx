import React from "react";
import { toast } from "react-toastify";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { PostSubscriptionGroupPayload } from "@/src/api/subscription";
import { Input } from "@/src/components/Input";
import { Button, ButtonVariants } from "@/src/components/Button";
import { TextArea } from "@/src/components/TextArea";
import { usePostSubscriptionsGroup } from "@/src/api/subscription/hooks";
import { Alert, AlertVariants } from "@/src/components/Alert";
import { groupDetailsSchema } from "./CreateForm.config";

interface CreateFormProps {
  handleCloseModal: () => void;
}

export const CreateForm = ({
  handleCloseModal,
}: CreateFormProps): JSX.Element => {
  const method = useForm<PostSubscriptionGroupPayload>({
    resolver: zodResolver(groupDetailsSchema),
    mode: "onTouched",
  });
  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = method;

  const handleSuccess = (): void => {
    toast.success("Group created successfully!");
    reset({
      title: "",
      description: "",
    });
    handleCloseModal();
  };

  const { postGroup, isPostGroupLoading, isPostGroupError, groupError } =
    usePostSubscriptionsGroup({ handleSuccess });

  const onSubmit = handleSubmit((value): void => {
    postGroup(value);
  });

  return (
    <div className="flex h-fit w-96 flex-col items-center justify-center">
      <h3 className="text-center text-lg font-semibold text-white">
        Create a new group
      </h3>
      <p className="text-center text-base text-white/70">
        The group will help you to organize your <strong>Subscriptions </strong>
        by subjects.
      </p>
      {isPostGroupError && (
        <Alert
          variant={AlertVariants.DANGER}
          content={groupError?.message ?? ""}
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
          <Button
            variant={ButtonVariants.PRIMARY}
            type="submit"
            disabled={!isValid}
            isLoading={isPostGroupLoading}
          >
            create group
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
