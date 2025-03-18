import React from "react";
import Link from "next/link";

export type NavigationColumnLinksType = {
  title: string;
  link: string;
}[];
interface NavigationColumnProps {
  name: string;
  links: NavigationColumnLinksType;
  isOutSourceLinks?: boolean;
}

export const NavigationColumn = ({
  name,
  links,
  isOutSourceLinks = false,
}: NavigationColumnProps) => (
  <div>
    <h3 className="mb-4 text-sm font-bold uppercase">{name}</h3>
    <ul
      className="flex flex-col gap-3 text-sm"
      role="navigation"
      aria-label={name}
    >
      {links.map(({ title, link }) =>
        isOutSourceLinks ? (
          <li key={title}>
            <a
              href={link}
              className="capitalize hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </li>
        ) : (
          <li key={title}>
            <Link href={link} className="capitalize hover:underline">
              {title}
            </Link>
          </li>
        ),
      )}
    </ul>
  </div>
);
