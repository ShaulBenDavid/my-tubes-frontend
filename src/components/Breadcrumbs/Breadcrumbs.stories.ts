import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";

/**
 * # The Breadcrumbs component
 * The Breadcrumbs component is a UI element that allows you to show the Routes map.
 */

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    breadcrumbs: ["Home", "Products", "Category", "Current Page"],
  },
};
