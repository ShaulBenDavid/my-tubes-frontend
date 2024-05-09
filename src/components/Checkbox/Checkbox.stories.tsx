import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],

  argTypes: {
    label: {
      control: "string",
      description: "Label write for what the Checkbox use.",
    },
    idFor: {
      control: "string",
      description: "Just connect between the label to the Checkbox.",
    },

    value: {
      control: "boolean",
      description: "The Checkbox value.",
    },
    onChange: {
      control: "ControlType",
      description: "Checkbox change callback.",
      defaultValue: () => ({}),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {
    label: "show data",
    idFor: "show",
  },
};
