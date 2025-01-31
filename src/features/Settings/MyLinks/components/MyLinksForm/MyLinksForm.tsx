import React, { useCallback } from "react";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { PiListPlusFill } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import type { UserMyLinksType } from "@/src/api/user";
import { Input } from "@/src/components/Input";
import { Button, ButtonVariants } from "@/src/components/Button";
import {
  GET_USER_CUSTOM_LINKS_KEY,
  usePatchUserCustomLinks,
} from "@/src/api/user/hooks";
import { appQueryClient } from "@/src/queries";
import { myLinksSchema } from "./MyLinksForm.config";

interface MyLinksFormProps {
  defaultForm: UserMyLinksType;
}

export const MyLinksForm = ({ defaultForm }: MyLinksFormProps): JSX.Element => {
  const method = useForm<UserMyLinksType>({
    resolver: zodResolver(myLinksSchema),
    mode: "onBlur",
    defaultValues: defaultForm.customUrls?.length
      ? defaultForm
      : {
          customUrls: [
            {
              name: "",
              url: "",
            },
          ],
        },
  });

  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid, isDirty },
  } = method;

  const { fields, append, remove } = useFieldArray({
    name: "customUrls",
    control,
  });

  const handleSuccess = useCallback(
    (data: UserMyLinksType) => {
      appQueryClient.setQueryData([GET_USER_CUSTOM_LINKS_KEY], data);
      console.log(data);
      reset(data);
      toast.success("From saved successfully!");
    },
    [reset],
  );

  const handleError = useCallback((data: AxiosError<{ error: string }>) => {
    toast.error(data.message);
  }, []);

  const { patchCustomLinks, isUserCustomLinksLoading } =
    usePatchUserCustomLinks({ handleSuccess, handleError });

  const onSubmit = handleSubmit((values): void => {
    patchCustomLinks(values);
  });

  return (
    <FormProvider {...method}>
      <form className="flex w-full max-w-sm flex-col gap-5" onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold">Custom Links:</h3>
          {fields.map((item, index) => (
            <div className="flex flex-row gap-4 pl-2" key={item.id}>
              {fields.length > 1 && (
                <Button
                  variant={ButtonVariants.LINK}
                  type="button"
                  width="60px"
                  className="mb-1 self-end"
                  onClick={() => remove(index)}
                >
                  <RiDeleteBin6Line size={24} aria-label="delete icon" />
                </Button>
              )}
              <Input
                label="name"
                idFor={`customUrls.${index}.name`}
                placeholder="Enter the Link name"
                type="text"
                className="w-full"
              />
              <Input
                label="url"
                idFor={`customUrls.${index}.url`}
                placeholder="Enter your Custom URL"
                type="url"
                className="w-full"
              />
            </div>
          ))}

          <Button
            variant={ButtonVariants.SECONDARY}
            type="button"
            width="60px"
            className="mt-2 self-end"
            onClick={() => append({ name: "", url: "" })}
          >
            <PiListPlusFill size={24} aria-label="plus icon" />
          </Button>
        </div>

        <div className="flex justify-start">
          <Button
            variant={ButtonVariants.PRIMARY}
            type="submit"
            disabled={!isValid || !isDirty}
            width="170px"
            isLoading={isUserCustomLinksLoading}
          >
            save
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
