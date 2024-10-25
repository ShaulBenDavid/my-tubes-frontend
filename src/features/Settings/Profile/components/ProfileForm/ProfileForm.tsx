import React, { useCallback } from "react";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { UserProfileType } from "@/src/api/user";
import { Input } from "@/src/components/Input";
import { Button, ButtonVariants } from "@/src/components/Button";
import {
  GET_USER_PROFILE_KEY,
  usePatchUserProfile,
} from "@/src/api/user/hooks";
import { appQueryClient } from "@/src/queries";
import { profileSchema } from "./ProfileForm.config";
import { ToggleButton } from "@/src/components/ToggleButton";

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
    reset,

    formState: { isValid, isDirty },
  } = method;

  const handleSuccess = useCallback(
    (data: UserProfileType) => {
      appQueryClient.invalidateQueries({
        queryKey: [GET_USER_PROFILE_KEY],
      });
      reset(data);
    },
    [reset],
  );

  const handleError = useCallback((data: AxiosError<{ error: string }>) => {
    toast.error(data.message);
  }, []);

  const { patchProfile, isUserProfileLoading } = usePatchUserProfile({
    handleSuccess,
    handleError,
  });

  const onSubmit = handleSubmit((values): void => {
    patchProfile(values);
  });

  return (
    <FormProvider {...method}>
      <form className="flex w-full max-w-sm flex-col gap-5" onSubmit={onSubmit}>
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
        <div className="flex flex-col gap-2">
          <ToggleButton label="Make profile public" idFor="isPublic" />
          <span className="text-sm text-white/70">
            <strong>Enable</strong> this option to make your&nbsp;
            <strong>profile</strong>&nbsp; discoverable by other users on My
            Tubes. When active, users can search for your profile and view the{" "}
            <strong>groups</strong>&nbsp; you&apos;ve created, as long as those
            groups are also set to &nbsp;<strong>public</strong>.
          </span>
        </div>
        <div className="flex justify-start">
          <Button
            variant={ButtonVariants.PRIMARY}
            type="submit"
            disabled={!isValid || !isDirty}
            width="170px"
            isLoading={isUserProfileLoading}
          >
            save
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
