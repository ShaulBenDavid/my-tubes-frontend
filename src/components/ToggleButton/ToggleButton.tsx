import React from "react";

interface ToggleButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  idFor: string;
  label: string;
}

export const ToggleButton = ({
  idFor,
  label,
  ...props
}: ToggleButtonProps): JSX.Element => (
  <label
    className="inline-flex cursor-pointer items-center"
    htmlFor={idFor}
    aria-checked={props["aria-checked"]}
  >
    <input
      type="checkbox"
      value=""
      className="peer sr-only"
      {...props}
      id={idFor}
    />
    <div
      className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5
        after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600
         peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
             rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
    />
    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
      {label}
    </span>
  </label>
);
