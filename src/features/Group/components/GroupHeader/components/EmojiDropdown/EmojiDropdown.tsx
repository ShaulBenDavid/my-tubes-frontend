"use client";

import React, { useCallback, useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import {
  GET_SUBSCRIPTIONS_GROUPS_KEY,
  GET_SUBSCRIPTIONS_GROUP_KEY,
  useEditSubscriptionsGroup,
} from "@/src/api/subscription/hooks";
import { Dropdown } from "@/src/components/Dropdown";
import { appQueryClient } from "@/src/queries";
import { EmojiPicker } from "./EmojiPicker";

interface EmojiDropdownProps {
  id: number;
  title: string;
  selectedIcon?: string | null;
}

export const EmojiDropdown = ({
  selectedIcon,
  id,
  title,
}: EmojiDropdownProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleEditSuccess = useCallback((): void => {
    appQueryClient.invalidateQueries({
      queryKey: [GET_SUBSCRIPTIONS_GROUPS_KEY],
    });
    appQueryClient.invalidateQueries({
      queryKey: [GET_SUBSCRIPTIONS_GROUP_KEY, id],
    });
  }, [id]);

  const { editGroup, variables } = useEditSubscriptionsGroup({
    handleSuccess: handleEditSuccess,
  });

  const onSelect = useCallback(
    (emoji: string) => {
      editGroup({ emoji, id, title });
      setIsOpen(false);
    },
    [editGroup, id, title],
  );

  return (
    <Dropdown
      setState={setIsOpen}
      isOpen={isOpen}
      trigger={
        selectedIcon ? (
          <span className="mx-2 text-3xl">
            {variables?.emoji ?? selectedIcon}
          </span>
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
      <EmojiPicker onSelect={onSelect} />
    </Dropdown>
  );
};
