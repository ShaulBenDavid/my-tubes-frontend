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
    <h3 className="mb-6 text-base font-bold uppercase tb:text-lg">{name}</h3>
    <ul className="text-base font-medium" role="navigation" aria-label={name}>
      {links.map(({ title, link }) =>
        isOutSourceLinks ? (
          <li className="mb-4" key={title}>
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
          <li className="mb-4" key={title}>
            <Link href={link} className="capitalize hover:underline">
              {title}
            </Link>
          </li>
        ),
      )}
    </ul>
  </div>
);
