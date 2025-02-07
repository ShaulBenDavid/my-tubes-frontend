import React from "react";
import type { CustomLinkType } from "@/src/api/user";
import { ColoredLink, ColoredLinkVariants } from "./ColoredLink";

interface CustomLinksProps {
  data: CustomLinkType[];
}

export const CustomLinks = ({ data }: CustomLinksProps): JSX.Element => {
  const variants = Object.values(ColoredLinkVariants).sort(
    () => Math.random() - 0.5,
  );
  const variantsLength = variants.length;

  return (
    <section className="flex w-full max-w-xs flex-col gap-3">
      {data.map(({ name, url }, index) => {
        const variantIndex =
          index >= variantsLength ? index - variantsLength : index;
        const variant = variants[variantIndex];

        return (
          <ColoredLink href={url} key={name} width="100%" variant={variant}>
            {name}
          </ColoredLink>
        );
      })}
    </section>
  );
};
