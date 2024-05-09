import React from "react";
import { fireEvent, render } from "test-utils";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  test("renders checkbox with label", () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <Checkbox
        idFor="myCheckbox"
        label="Accept terms"
        onChange={handleChange}
        checked
      />,
    );

    const checkbox = getByLabelText("Accept terms");
    expect(checkbox).toBeInTheDocument();

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalled();
  });

  test("renders checkbox mark", () => {
    const { getByTestId } = render(
      <Checkbox
        idFor="myCheckbox"
        label="Accept terms"
        checked
        onChange={() => ({})}
      />,
    );

    const checkbox = getByTestId("app-checkbox-check-mark");

    expect(checkbox).toHaveStyle("visibility: visible;");
  });
});
