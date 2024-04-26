import type { Meta, StoryObj } from "@storybook/react";
import { SortFilter } from "./SortFilter";

/**
 * # The SortFilter component
 */

const options = [
  { value: "ascending", label: "A-z" },
  { value: "descending", label: "Z-a" },
];

const meta: Meta<typeof SortFilter> = {
  title: "Components/SortFilter",
  component: SortFilter,
  tags: ["autodocs"],

  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SortFilter>;

export const Base: Story = {
  args: {
    label: "sort",
    options,
    handleChange: () => ({}),
  },
};
