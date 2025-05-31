import React from "react";
import Image from "next/image";

interface EmptyStateProps {
  svgUrl?: string;
  header: string;
  description?: string;
  footer?: JSX.Element;
}

export const EmptyState = ({
  svgUrl,
  header,
  description,
  footer,
}: EmptyStateProps): JSX.Element => (
  <div
    className="flex max-w-[500px] flex-col items-center gap-3"
    data-testid="empty-state-component-test-id"
  >
    {svgUrl && (
      <Image
        alt="Empty state"
        role="presentation"
        src={svgUrl}
        priority
        className="w-24 tb:w-[160px]"
      />
    )}
    <h2 className="text-center text-sm font-semibold capitalize tb:text-base">
      {header}
    </h2>
    {description && <p className="text-center text-sm">{description}</p>}
    {footer && footer}
  </div>
);
