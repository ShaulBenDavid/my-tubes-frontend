import React from "react";
import { FaCheck } from "react-icons/fa";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  idFor: string;
  label: string;
}

export const Checkbox = ({
  idFor,
  label,
  ...props
}: CheckboxProps): JSX.Element => (
  <label
    htmlFor={idFor}
    className="flex items-center whitespace-nowrap p-4 text-sm font-medium text-white"
  >
    <div className="me-2 grid items-center justify-center">
      <input
        {...props}
        id={idFor}
        type="checkbox"
        className="peer col-start-1 row-start-1 h-4 w-4 appearance-none rounded-md border-gray-600 bg-gray-700 ring-offset-gray-800 checked:bg-blue-600 focus:ring-2 focus:ring-blue-600"
      />
      <FaCheck
        color="white"
        size={16}
        className="invisible col-start-1 row-start-1 p-[2px] peer-checked:visible"
        data-testid="app-checkbox-check-mark"
      />
    </div>

    {label}
  </label>
);
