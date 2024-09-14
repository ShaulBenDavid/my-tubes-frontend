import React from "react";
import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MenuTab } from "./MenuTab";

const styles: CSSProperties = {
  transform: "scale(1)",
  height: "40vh",
  position: "relative",
};

/**
 * # The MenuTab component
 */

const meta: Meta<typeof MenuTab> = {
  title: "Components/Layout/MenuTab",
  component: MenuTab,
  tags: ["autodocs"],
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
  argTypes: {
    href: {
      control: "string",
      description: "A path for the wanted route",
    },
  },
};

export default meta;

type Story = StoryObj<typeof MenuTab>;

export const Link: Story = {
  args: {
    href: "/",
    label: "Settings",
    isActive: false,
  },
};
