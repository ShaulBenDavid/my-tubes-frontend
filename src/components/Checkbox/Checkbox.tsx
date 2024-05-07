import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  idFor: string;
  label: string;
}

export const Checkbox = ({ idFor, label }: CheckboxProps): JSX.Element => (
  <div className="mb-4 flex items-center p-4">
    <input
      id={idFor}
      type="checkbox"
      className="h-4 w-4 appearance-none rounded-md border-gray-600 bg-gray-700 text-blue-600 ring-offset-gray-800 focus:ring-2 focus:ring-blue-600"
    />
    <label htmlFor={idFor} className="ms-2 text-sm font-medium text-white">
      {label}
    </label>
  </div>
);
