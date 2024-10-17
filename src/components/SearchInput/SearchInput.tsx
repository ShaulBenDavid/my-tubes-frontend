import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import theme from "@/src/styles/tailwind.theme";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  onReset: () => void;
}

export const SearchInput = ({
  width,
  value,
  onChange,
  onReset,
  placeholder,
}: SearchInputProps): JSX.Element => (
  <div
    className="flex h-10 flex-row items-center rounded-xl border-[1px] border-spec-text-secondary bg-transparent px-2 text-white focus-within:border-2 focus-within:border-blue-900"
    style={{ width }}
    data-testid="app-search-input-test-id"
  >
    <input
      type="search"
      placeholder={placeholder}
      value={value}
      className="w-full bg-transparent placeholder:text-spec-text-secondary focus:outline-none"
      onChange={onChange}
      aria-label="search"
      aria-controls="searchResults"
    />
    {value ? (
      <button type="reset" onClick={onReset}>
        <IoClose
          stroke={theme.white}
          size={24}
          aria-hidden
          data-testid="app-search-input-close-icon-test-id"
        />
      </button>
    ) : (
      <HiOutlineSearch
        stroke={theme.white}
        size={24}
        aria-hidden
        data-testid="app-search-input-icon-test-id"
      />
    )}
  </div>
);
