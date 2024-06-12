import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LuFolderEdit } from "react-icons/lu";
import { ActionButton } from "./ActionButton";
import { ActionButtonVariants } from "./ActionButton.types";

const meta: Meta<typeof ActionButton> = {
  title: "Components/ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
  args: {
    icon: <LuFolderEdit size={24} />,
    tooltip: "Action button",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ActionButtonVariants,
      description: "Control the Button style",
      default: ActionButtonVariants.DEFAULT,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
  args: {
    variant: ActionButtonVariants.DEFAULT,
  },
};

export const Warning: Story = {
  args: {
    variant: ActionButtonVariants.WARNING,
  },
};
