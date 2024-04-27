import { AlertVariants } from "./Alert.types";

export const alertVariantsStyleConfig: Record<AlertVariants, string> = {
  [AlertVariants.INFO]: "text-blue-800",
  [AlertVariants.DANGER]: "text-primary-400",
  [AlertVariants.WARNING]: "text-yellow-800",
  [AlertVariants.SUCCESS]: "text-green-800",
};
