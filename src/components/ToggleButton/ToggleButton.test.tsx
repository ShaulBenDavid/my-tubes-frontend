import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ToggleButton } from "./ToggleButton";

describe("ToggleButton", () => {
  const idFor = "test-toggle";
  const label = "Test Toggle";

  beforeEach(() => {
    render(<ToggleButton idFor={idFor} label={label} />);
  });

  it("renders the label correctly", () => {
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it("renders the checkbox input", () => {
    const checkbox = screen.getByRole("checkbox", { name: label });
    expect(checkbox).toBeInTheDocument();
  });

  it("should be unchecked by default", () => {
    const checkbox = screen.getByRole("checkbox", { name: label });
    expect(checkbox).not.toBeChecked();
  });

  it("should check the checkbox when clicked", () => {
    const checkbox = screen.getByRole("checkbox", { name: label });
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("should uncheck the checkbox when clicked again", () => {
    const checkbox = screen.getByRole("checkbox", { name: label });
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
