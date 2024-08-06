import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GroupLink } from "./GroupLink";
import { buildRoutePath } from "@/src/utils";
import { Routes } from "@/src/routes";

jest.mock("@/src/utils", () => ({
  ...jest.requireActual("@/src/utils"),
  stringToColor: jest.fn(() => "#000000"),
}));

describe("GroupLink component", () => {
  it("renders correctly with provided props", () => {
    const title = "Group Title";
    const id = 1;
    const count = 5;

    const { getByText, getByLabelText, getByRole, container } = render(
      <GroupLink title={title} id={id} count={count} />,
    );

    const linkElement = getByRole("link");
    const titleElement = getByText(title);
    const countElement = getByLabelText("subscriptions count in group");
    const iconElement = container.querySelector("svg");

    expect(linkElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(countElement).toHaveTextContent(`(${count})`);
    expect(iconElement).toBeInTheDocument();
    expect(linkElement).toHaveStyle("border-color: #000000");

    const expectedHref = buildRoutePath(
      Routes.SUBSCRIPTIONS,
      Routes.GROUP,
      title,
      String(id),
    );

    expect(linkElement).toHaveAttribute("href", expectedHref);
  });

  it("displays '--' if count is not provided", () => {
    const title = "Group Title";
    const id = 1;

    const { getByLabelText } = render(
      <GroupLink title={title} id={id} count={0} />,
    );

    const countElement = getByLabelText("subscriptions count in group");

    expect(countElement).toHaveTextContent("(--)");
  });
});
