import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  title: "Components/Inputs/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],

  argTypes: {
    label: {
      control: "string",
      description: "Label write for what the ToggleButton use.",
    },
    idFor: {
      control: "string",
      description: "Just connect between the label to the ToggleButton.",
    },

    value: {
      control: "boolean",
      description: "The ToggleButton value.",
    },
    onChange: {
      control: "ControlType",
      description: "ToggleButton change callback.",
      defaultValue: () => ({}),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Basic: Story = {
  args: {
    label: "show data",
    idFor: "show",
  },
};
