import type { Meta, StoryObj } from "@storybook/react";
import { InfoTooltip } from "./InfoTooltip";

/**
 * # The InfoTooltip component
 * An Info Icon with Tooltip to show information.
 */

const meta: Meta<typeof InfoTooltip> = {
  title: "Components/InfoTooltip",
  component: InfoTooltip,
  tags: ["autodocs"],

  argTypes: {
    title: {
      control: "string",
      description: "Tooltip text content",
    },
  },
};

export default meta;

type Story = StoryObj<typeof InfoTooltip>;

export const Base: Story = {
  args: {
    title: "This website is designed by DWizard.io",
  },
};
