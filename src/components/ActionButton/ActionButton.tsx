"use client";

import React, { useId } from "react";
import { Tooltip } from "react-tooltip";
import { ActionButtonVariants } from "./ActionButton.types";
import {
  actionButtonTooltipConfig,
  actionButtonVariantsStyleConfig,
} from "./ActionButton.config";

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tooltip?: string;
  variant?: ActionButtonVariants;
  icon: JSX.Element;
}

export const ActionButton = ({
  onClick,
  tooltip,
  variant = ActionButtonVariants.DEFAULT,
  icon,
  ...props
}: ActionButtonProps): JSX.Element => {
  const id = useId();
  return (
    <>
      {tooltip && (
        <Tooltip id={id}>
          <p className="text-white">{tooltip}</p>
        </Tooltip>
      )}
      <button
        type="button"
        data-tooltip-id={id}
        data-tooltip-variant={actionButtonTooltipConfig[variant]}
        className={`rounded-xl p-2 ${actionButtonVariantsStyleConfig[variant]}`}
        onClick={onClick}
        {...props}
      >
        {icon}
      </button>
    </>
  );
};
