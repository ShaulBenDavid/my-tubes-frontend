import React from "react";
import type { CustomLinkType } from "@/src/api/user";
import { ButtonLink } from "@/src/components/ButtonLink";

interface CustomLinksProps {
  data: CustomLinkType[];
}

export const CustomLinks = ({ data }: CustomLinksProps): JSX.Element => (
  <section className="flex w-full max-w-xs flex-row gap-2">
    {data.map(({ name, url }) => (
      <ButtonLink href={url} key={name} isOutSource width="100%">
        {name}
      </ButtonLink>
    ))}
  </section>
);
