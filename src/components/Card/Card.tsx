import React, { type CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = React.PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
}>;

export const Card = ({
  className,
  style,
  children,
}: CardProps): JSX.Element => (
  <div
    data-testid="card-component-test-id"
    className={twMerge("app-card p-3", className)}
    style={style}
  >
    {children}
  </div>
);
