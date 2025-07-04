import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ToggleButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  idFor: string;
  label?: string;
}

export const ToggleButton = ({
  idFor,
  label,
  ...props
}: ToggleButtonProps): JSX.Element => {
  const formContext = useFormContext();
  const hasControl = !!formContext?.control;
  return (
    <label
      className="inline-flex cursor-pointer items-center"
      htmlFor={idFor}
      aria-checked={props["aria-checked"]}
    >
      {hasControl ? (
        <Controller
          name={idFor}
          control={formContext.control}
          render={({ field }) => (
            <input
              id={idFor}
              type="checkbox"
              className="peer sr-only focus:fixed"
              checked={field.value}
              {...props}
              {...field}
            />
          )}
        />
      ) : (
        <input
          id={idFor}
          type="checkbox"
          className="peer sr-only focus:fixed"
          {...props}
        />
      )}
      <div
        className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5
        after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600
         peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
             peer-disabled:opacity-50 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
      />
      {label && <span className="ms-3 text-sm font-medium">{label}</span>}
    </label>
  );
};
