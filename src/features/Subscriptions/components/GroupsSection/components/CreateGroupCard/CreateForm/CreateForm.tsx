import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { PostSubscriptionGroupPayload } from "@/src/api/subscription";
import { Input } from "@/src/components/Input";
import { Button, ButtonVariants } from "@/src/components/Button";
import { groupDetailsSchema } from "./CreateForm.config";
import { TextArea } from "@/src/components/TextArea";

// interface CreateFormProps {}

export const CreateForm = (): JSX.Element => {
  const method = useForm<PostSubscriptionGroupPayload>({
    resolver: zodResolver(groupDetailsSchema),
    mode: "onTouched",
  });
  const {
    // handleSubmit,
    formState: { isValid },
  } = method;

  return (
    <div className="flex h-96 w-96 flex-col items-center justify-center">
      <h3 className="text-center text-lg font-semibold text-white">
        Create a new group
      </h3>
      <p className="text-center text-base text-white/70">
        The group will help you to organize your <strong>Subscriptions </strong>
        by subjects.
      </p>
      <FormProvider {...method}>
        <form className="flex w-full flex-col gap-5 pt-4">
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
            // isLoading={isLoading}
          >
            create group
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
