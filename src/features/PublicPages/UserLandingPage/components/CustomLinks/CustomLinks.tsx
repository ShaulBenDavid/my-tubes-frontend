import React from "react";
import type { CustomLinkType } from "@/src/api/user";
import { ColoredLink } from "./ColoredLink";

interface CustomLinksProps {
  data: CustomLinkType[];
}

export const CustomLinks = ({ data }: CustomLinksProps): JSX.Element => (
  <section className="flex w-full max-w-xs flex-row gap-2">
    {data.map(({ name, url }) => (
      <ColoredLink href={url} key={name} isOutSource width="100%">
        {name}
      </ColoredLink>
    ))}
  </section>
);
