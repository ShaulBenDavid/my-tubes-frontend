import React, { type ReactNode } from "react";

type MultiToggleButtonType<T> = {
  content: ReactNode;
  value: T;
};

interface MultiToggleProps<T> {
  buttons: MultiToggleButtonType<T>[];
  onToggle: (value: T) => void;
  selectedValue: T;
}

export const MultiToggle = <T extends string>({
  buttons,
  onToggle,
  selectedValue,
}: MultiToggleProps<T>): JSX.Element => (
  <div
    role="group"
    className="flex flex-row rounded-xl border border-blue-500 bg-modal-bg shadow-lg"
  >
    {buttons.map(({ content, value }) => (
      <button
        key={value}
        type="button"
        onClick={() => onToggle(value)}
        aria-pressed={Boolean(selectedValue === value)}
        value={value}
        className={`rounded-xl px-4 py-3 capitalize ${selectedValue === value ? "bg-spec-light-bg text-blue-500" : ""} duration-100 ease-in`}
      >
        {content}
      </button>
    ))}
  </div>
);
