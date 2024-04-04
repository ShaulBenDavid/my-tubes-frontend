import React from "react";
import { render } from "test-utils";
import { MenuTab } from "./MenuTab";

describe("MenuTab", () => {
  it("renders correctly", () => {
    const { getByText } = render(<MenuTab href="s" isActive label="Docs" />);
    const alertElement = getByText("Docs");
    expect(alertElement).toBeInTheDocument();
  });
});
