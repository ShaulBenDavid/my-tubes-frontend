"use client";

import React from "react";
import { IoIosArrowDown } from "react-icons/io";

type Option<T> = {
  value: T;
  label: string;
};

interface SortFilterProps<T> {
  label: string;
  options: Option<T>[];
  method?: string;
  handleChange: (value?: T) => void;
}

export const SortFilter = <T extends string | number>({
  label,
  options,
  handleChange,
  method = "sortBy",
}: SortFilterProps<T>): JSX.Element => (
  <div className="relative h-8 w-full">
    <label
      htmlFor={method}
      className="absolute inset-0 bg-spec-space-bg text-center font-semibold capitalize leading-8"
    >
      <span className="flex flex-row items-center justify-center gap-2">
        {label}
        <IoIosArrowDown aria-hidden />
      </span>
    </label>
    <select
      id={method}
      tabIndex={0}
      className="absolute inset-0 cursor-pointer bg-transparent opacity-[0.0000001]"
      onChange={(event) => {
        const selectedValue = event.target.value as T;
        handleChange(selectedValue || undefined);
      }}
    >
      <option value="">Recommended</option>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);
