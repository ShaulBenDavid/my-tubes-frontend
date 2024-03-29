import React from "react";
import { render } from "test-utils";
import { Share } from "./Share";

describe("Share", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Share />);
    const shareElement = getByTestId("share-component-test-id");
    expect(shareElement).toBeInTheDocument();
  });
});
