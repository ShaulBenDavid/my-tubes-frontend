import { create } from "@storybook/theming/create";
import Logo from "../src/assets/images/dwlogo.svg";

export default create({
  base: "light",
  brandTitle: "Dev Wizard Blog",
  brandUrl: "https://dwizard.io",
  brandImage: Logo,
  brandTarget: "_self",
  //
  colorPrimary: "#8f0d0d",
  colorSecondary: "#ff5b5b",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#ff5b5b",
  appBorderRadius: 4,

  // Text colors
  textColor: "#0f0f0f",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#8f0d0d",
  barSelectedColor: "#ff5b5b",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#0f0f0f",
  inputTextColor: "#0f0f0f",
  inputBorderRadius: 2,
});
