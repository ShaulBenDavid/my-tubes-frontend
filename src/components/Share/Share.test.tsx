import React from "react";
import { render } from "test-utils";
import { Share } from "./Share";

describe("Share", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <Share url="test" title="test" content="test" />,
    );
    const shareElement = getByTestId("share-component-test-id");
    expect(shareElement).toBeInTheDocument();
  });
});
