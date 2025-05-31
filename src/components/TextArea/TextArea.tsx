"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { useFormContext } from "react-hook-form";
import { camelCaseToWords } from "@/src/utils";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  idFor: string;
  width?: string;
}

export const TextArea = ({
  label,
  idFor,
  width,
  value,
  rows = 5,
  form,
  placeholder,
  className,
}: TextAreaProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[idFor]?.message;

  return (
    <div className="relative flex flex-col gap-1">
      <label
        htmlFor={idFor}
        className="text-sm font-medium capitalize text-white"
      >
        {camelCaseToWords(label)}
      </label>
      <textarea
        form={form}
        id={idFor}
        rows={rows}
        placeholder={placeholder}
        value={value}
        className={twMerge(
          `resize-none rounded-xl border-[1px] border-spec-text-secondary bg-transparent px-2 text-sm text-white placeholder:text-white/70 ${
            !!errorMessage &&
            "border-red-500 focus:border-2 focus:border-red-500 focus:outline-none"
          }`,
          className,
        )}
        data-testid="textarea-component-test-id"
        style={{ width }}
        {...register(label)}
      />
      {!!errorMessage && (
        <p className="absolute top-full text-sm font-medium leading-4 text-red-500 first-letter:capitalize">
          {errorMessage as string}
        </p>
      )}
    </div>
  );
};
