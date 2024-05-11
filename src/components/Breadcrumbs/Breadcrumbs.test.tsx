import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { render } from "@/src/tests";

describe("Breadcrumbs Component", () => {
  it("renders breadcrumbs with correct separators", () => {
    const breadcrumbs = ["Home", "Products", "Category", "Current Page"];
    const { getAllByTestId } = render(
      <Breadcrumbs breadcrumbs={breadcrumbs} />,
    );

    const separatorElements = getAllByTestId("app-breadcrumb-separator");
    expect(separatorElements.length).toBe(breadcrumbs.length - 1);

    separatorElements.forEach((separator) => {
      expect(separator).toHaveTextContent("›");
    });
  });

  it("renders last breadcrumb without link", () => {
    const breadcrumbs = ["Home", "Products", "Category", "Current Page"];
    const { getByText } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />);

    const lastBreadcrumbElement = getByText("Current Page");
    expect(lastBreadcrumbElement).toHaveClass("opacity-60");
    expect(lastBreadcrumbElement.tagName).toBe("SPAN");
  });

  it("does not render separator if only one breadcrumb", () => {
    const breadcrumbs = ["Home"];
    const { queryByTestId } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />);

    const separatorElement = queryByTestId("app-breadcrumb-separator");
    expect(separatorElement).toBeNull();
  });
});
