"use client";

import React, { useState } from "react";
import ReactFocusLock from "react-focus-lock";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { LuImagePlus } from "react-icons/lu";
import { Dropdown } from "@/src/components/Dropdown";
import S from "./EmojiDropdown.module.css";

interface EmojiDropdownProps {
  selectedIcon?: string | null;
}

export const EmojiDropdown = ({
  selectedIcon,
}: EmojiDropdownProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dropdown
      setState={setIsOpen}
      isOpen={isOpen}
      trigger={
        selectedIcon ? (
          <span>{selectedIcon}</span>
        ) : (
          <LuImagePlus
            size={32}
            className="mx-2 opacity-70 duration-75 hover:opacity-100"
          />
        )
      }
      label="Change page icon"
      className="left-0 p-0"
    >
      <ReactFocusLock>
        <div className={S.emojiPicker}>
          <Picker
            data={data}
            onEmojiSelect={({ native }: { native: string }) =>
              console.log(native)
            }
            theme="dark"
            autoFocus
            skinTonePosition="none"
          />
        </div>
      </ReactFocusLock>
    </Dropdown>
  );
};
