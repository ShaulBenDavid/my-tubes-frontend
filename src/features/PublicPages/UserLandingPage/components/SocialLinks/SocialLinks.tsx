import React, { type ReactNode } from "react";

export type SocialLinkType = {
  icon: ReactNode;
  backgroundColor: string;
  href: string;
  title: string;
};

interface SocialLinksProps {
  links: SocialLinkType[];
}

export const SocialLinks = ({ links }: SocialLinksProps): JSX.Element => (
  <section className="flex flex-row flex-wrap justify-center gap-2 tb:gap-3">
    {links.map(({ icon, href, backgroundColor, title }) => (
      <a
        key={title}
        aria-label={title}
        title={title}
        href={href}
        className="flex h-10 w-12 items-center justify-center rounded-xl text-white shadow-lg transition-opacity duration-200 hover:opacity-80 tb:w-14"
        style={{ backgroundColor }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    ))}
  </section>
);
