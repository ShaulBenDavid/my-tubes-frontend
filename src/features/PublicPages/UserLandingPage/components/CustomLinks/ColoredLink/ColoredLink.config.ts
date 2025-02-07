import { ColoredLinkVariants } from "./ColoredLink.types";

export const coloredLinkConfig: Record<ColoredLinkVariants, string> = {
  [ColoredLinkVariants.PURPLE_TO_PINK]:
    "bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800",
  [ColoredLinkVariants.PURPLE_TO_BLUE]:
    "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
  [ColoredLinkVariants.GREEN_TO_BLUE]:
    "bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
  [ColoredLinkVariants.PINK_TO_ORANGE]:
    "bg-gradient-to-br from-pink-500 to-orange hover:bg-gradient-to-bl focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800",
};
