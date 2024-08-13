"use client";

import React, { useCallback, useId } from "react";
import { BsCopy } from "react-icons/bs";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

interface CopyButtonProps {
  textToCopy: string;
  tooltipText: string;
}

export const CopyButton = ({
  textToCopy,
  tooltipText,
}: CopyButtonProps): JSX.Element => {
  const id = useId();
  const copyToClipboard = useCallback(
    (): Promise<void> =>
      navigator.clipboard.writeText(textToCopy).then(
        () => {
          toast.success("Text copied successfully!!");
        },
        (err) => {
          toast.error("Could not copy text: ", err);
        },
      ),
    [textToCopy],
  );

  return (
    <>
      {tooltipText && (
        <Tooltip id={id}>
          <p className="text-white">{tooltipText}</p>
        </Tooltip>
      )}
      <button
        type="button"
        data-tooltip-id={id}
        data-tooltip-variant="info"
        className="w-fit p-[2px] duration-75 hover:opacity-60 active:opacity-50"
        onClick={copyToClipboard}
      >
        <BsCopy size={20} />
      </button>
    </>
  );
};
