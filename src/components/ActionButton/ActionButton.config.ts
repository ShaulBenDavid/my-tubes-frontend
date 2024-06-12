import type { VariantType } from "react-tooltip";
import { ActionButtonVariants } from "./ActionButton.types";

export const actionButtonVariantsStyleConfig: Record<
  ActionButtonVariants,
  string
> = {
  [ActionButtonVariants.DEFAULT]: "hover:bg-white/20 active:bg-white/30",
  [ActionButtonVariants.WARNING]: "hover:bg-red-600/20 active:bg-red-600/30",
};
export const actionButtonTooltipConfig: Record<
  ActionButtonVariants,
  VariantType
> = {
  [ActionButtonVariants.DEFAULT]: "info",
  [ActionButtonVariants.WARNING]: "error",
};
