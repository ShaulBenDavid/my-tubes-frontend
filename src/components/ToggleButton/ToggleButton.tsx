import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ToggleButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  idFor: string;
  label: string;
}

export const ToggleButton = ({
  idFor,
  label,
  ...props
}: ToggleButtonProps): JSX.Element => {
  const { control } = useFormContext();

  return (
    <label
      className="inline-flex cursor-pointer items-center"
      htmlFor={idFor}
      aria-checked={props["aria-checked"]}
    >
      <Controller
        name={idFor}
        control={control}
        render={({ field }) => (
          <input
            id={idFor}
            type="checkbox"
            className="peer sr-only"
            checked={field.value}
            {...props}
            {...field}
          />
        )}
      />
      <div
        className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5
        after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600
         peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
             rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
      />
      <span className="ms-3 text-base font-medium">{label}</span>
    </label>
  );
};