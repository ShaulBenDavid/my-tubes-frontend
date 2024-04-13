import { ButtonVariants } from "./Button.types";

export const buttonVariantsStyleConfig: Record<ButtonVariants, string> = {
  [ButtonVariants.PRIMARY]:
    "bg-primary-900 shadow-button text-white hover:enabled:bg-primary-950",
  [ButtonVariants.SECONDARY]:
    "shadow-button border-white bg-transparent border-[1px] hover:enabled:bg-white/10 text-white",
  [ButtonVariants.LINK]:
    "bg-transparent text-primary-900 hover:enabled:underline underline-offset-2",
};
