import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { UserProfileType } from "@/src/api/user";
import { profileSchema } from "./ProfileForm.config";
import { Input } from "@/src/components/Input";
import { Button, ButtonVariants } from "@/src/components/Button";

interface UserFormProps {
  defaultForm: UserProfileType;
}

export const ProfileForm = ({ defaultForm }: UserFormProps): JSX.Element => {
  const method = useForm<UserProfileType>({
    resolver: zodResolver(profileSchema),
    mode: "onTouched",
    defaultValues: defaultForm,
  });

  const {
    handleSubmit,
    formState: { isValid, isDirty },
  } = method;

  const onSubmit = handleSubmit((values): void => {
    console.log(values);
    // mutate(value);
  });
  console.log(defaultForm);

  return (
    <FormProvider {...method}>
      <form className="flex w-full flex-col gap-5 pt-4" onSubmit={onSubmit}>
        <Input
          label="username"
          idFor="username"
          placeholder="Enter your username"
          type="text"
          disabled
        />
        <Input
          label="instagramUrl"
          idFor="instagramUrl"
          placeholder="Enter your Instagram URL"
          type="url"
        />
        <Input
          label="twitterUrl"
          idFor="twitterUrl"
          placeholder="Enter your Twitter URL"
          type="url"
        />
        <Input
          label="linkedinUrl"
          idFor="linkedinUrl"
          placeholder="Enter your LinkedIn URL"
          type="url"
        />
        <Input
          label="youtubeUrl"
          idFor="youtubeUrl"
          placeholder="Enter your YouTube URL"
          type="url"
        />
        <div className="flex justify-end">
          <Button
            variant={ButtonVariants.PRIMARY}
            type="submit"
            disabled={!isValid || !isDirty}
            width="170px"
            // isLoading={isLoading}
          >
            submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
