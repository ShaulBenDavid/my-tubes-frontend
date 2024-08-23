import type { Meta, StoryObj } from "@storybook/react";
import { CopyButton } from "./CopyButton";

const meta: Meta<typeof CopyButton> = {
  title: "Components/CopyButton",
  component: CopyButton,
  tags: ["autodocs"],
  argTypes: {
    textToCopy: { control: "text" },
    tooltipText: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof CopyButton>;

export const Basic: Story = {
  args: { textToCopy: "Copy this text", tooltipText: "This is a tooltip" },
};
