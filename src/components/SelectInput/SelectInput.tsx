"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { Controller, useFormContext } from "react-hook-form";
import { camelCaseToWords } from "@/src/utils";

interface SelectInputProps<T>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  idFor: string;
  width?: string;
  options: T[];
}

export const SelectInput = <T extends { title: string; id: number }>({
  label,
  idFor,
  width,
  form,
  className,
  options,
}: SelectInputProps<T>): JSX.Element => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[label]?.message;

  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={idFor} className="font-medium capitalize text-white">
        {camelCaseToWords(label)}
      </label>
      <Controller
        name={label}
        control={control}
        render={({ field }) => (
          <select
            form={form}
            id={idFor}
            className={twMerge(
              `h-10 resize-none rounded-xl border-[1px] border-spec-text-secondary bg-transparent px-2 text-white placeholder:text-white/70 ${
                !!errorMessage &&
                "border-red-500 focus:border-2 focus:border-red-500 focus:outline-none"
              }`,
              className,
            )}
            data-testid="selectinput-component-test-id"
            style={{ width }}
            {...field}
            onChange={(e) => {
              const isNumber = e.target.value.length > 0;
              console.log("1", e.target.value);
              field.onChange(isNumber ? Number(e.target.value) : undefined);
            }}
          >
            <option value="">Please select</option>
            {options.map(({ title, id }) => (
              <option
                key={title}
                value={id}
                aria-label={`selection value - ${title}`}
              >
                {camelCaseToWords(title)}
              </option>
            ))}
          </select>
        )}
      />
      {!!errorMessage && (
        <p className="absolute top-[68px] text-sm font-medium leading-4 text-red-500 first-letter:capitalize">
          {errorMessage as string}
        </p>
      )}
    </div>
  );
};
