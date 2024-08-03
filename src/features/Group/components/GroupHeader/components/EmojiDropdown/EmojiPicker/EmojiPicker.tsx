"use client";

import React, { memo } from "react";
import ReactFocusLock from "react-focus-lock";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import S from "./EmojiPicker.module.css";

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
}

export const EmojiPicker = memo<EmojiPickerProps>(
  ({ onSelect }): JSX.Element => (
    <ReactFocusLock>
      <div className={S.emojiPicker}>
        <Picker
          data={data}
          onEmojiSelect={({ native }: { native: string }) => onSelect(native)}
          theme="dark"
          autoFocus
          skinTonePosition="none"
        />
      </div>
    </ReactFocusLock>
  ),
);
