import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { render } from "test-utils";
import { SelectInput } from "./SelectInput";

describe("SelectInput", () => {
  const Wrapper = (props: { children: JSX.Element }) => {
    const formMethods = useForm();

    return <FormProvider {...formMethods}>{props.children}</FormProvider>;
  };
  const options = [
    { title: "other", id: 0 },
    { title: "blue", id: 1 },
    { title: "yellow", id: 2 },
  ];
  it("Label renders correctly", () => {
    const { getByTestId } = render(
      <Wrapper>
        <SelectInput idFor="email" label="email" options={options} />
      </Wrapper>,
    );
    const buttonElement = getByTestId("selectinput-component-test-id");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders correctly with options correctly", () => {
    const { getByTestId } = render(
      <Wrapper>
        <SelectInput idFor="email" label="email" options={options} />
      </Wrapper>,
    );
    const selectInput = getByTestId("selectinput-component-test-id");
    const selectOptions = Array.from(
      selectInput.getElementsByTagName("option"),
    );
    selectOptions.shift();
    options.push({ title: "more", id: 3 });

    selectOptions.forEach((option, index) => {
      expect(option).toHaveAttribute("value", String(options[index].id));
    });
    expect(selectInput.getElementsByTagName("option").length).toBe(4);
  });
});
