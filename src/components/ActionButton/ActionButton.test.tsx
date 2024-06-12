import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ActionButton } from "./ActionButton";
import { ActionButtonVariants } from "./ActionButton.types";
import { actionButtonVariantsStyleConfig } from "./ActionButton.config";

describe("ActionButton component", () => {
  it("renders with default variant", async () => {
    const tooltipText = "default tooltip";
    const icon = <svg data-testid="icon" />;

    render(
      <ActionButton tooltip={tooltipText} icon={icon} onClick={() => {}} />,
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      actionButtonVariantsStyleConfig[ActionButtonVariants.DEFAULT],
    );
  });

  it("renders with custom variant and handles click event", () => {
    const tooltipText = "Custom Tooltip";
    const icon = <svg data-testid="icon" />;
    const handleClick = jest.fn();

    render(
      <ActionButton
        tooltip={tooltipText}
        variant={ActionButtonVariants.WARNING}
        icon={icon}
        onClick={handleClick}
      />,
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      actionButtonVariantsStyleConfig[ActionButtonVariants.WARNING],
    );

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("passes additional props to the button element", () => {
    const tooltipText = "Props Tooltip";
    const icon = <svg data-testid="icon" />;
    const dataTestId = "action-button";

    render(
      <ActionButton
        tooltip={tooltipText}
        icon={icon}
        data-testid={dataTestId}
      />,
    );

    const button = screen.getByTestId(dataTestId);
    expect(button).toBeInTheDocument();
  });
});
