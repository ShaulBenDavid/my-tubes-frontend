import React from "react";
import Link from "next/link";

interface BreadcrumbsProps {
  breadcrumbs: string[];
}

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps): JSX.Element => (
  <nav aria-label="Breadcrumb">
    <ol className="flex flex-row">
      {breadcrumbs.map((link, index) => {
        const isLastItem = index === breadcrumbs.length - 1;
        const accumulatedPath = breadcrumbs.slice(0, index + 1).join("/");

        return (
          <li key={link} className="text-sm font-medium capitalize">
            {index !== 0 && (
              <span
                aria-hidden
                data-testid="app-breadcrumb-separator"
                className="px-3"
              >
                ›
              </span>
            )}
            {isLastItem ? (
              <span className="opacity-60">{link}</span>
            ) : (
              <Link href={`/${accumulatedPath}`} className="hover:underline">
                {link}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);
