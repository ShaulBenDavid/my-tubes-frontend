import React from "react";
import { TiFolderDelete } from "react-icons/ti";
import { LuFolderEdit } from "react-icons/lu";
import { ActionButton } from "@/src/components/ActionButton";
import { ActionButtonVariants } from "@/src/components/ActionButton/ActionButton.types";

export const ARIA_CONTROL_GROUP_EDIT = "editGroupModal";
export const ARIA_CONTROL_GROUP_DELETE = "deleteGroupModal";

interface GroupActionsProps {
  name: string;
  onDelete: () => void;
  onEdit: () => void;
}

export const GroupActions = ({
  name,
  onDelete,
  onEdit,
}: GroupActionsProps): JSX.Element => (
  <div>
    <ActionButton
      id="edit-group-button"
      tooltip="Edit Group"
      aria-label={`Edit group - ${name}`}
      aria-controls={ARIA_CONTROL_GROUP_EDIT}
      className="rounded-xl p-2 hover:bg-white/20 active:bg-white/30"
      onClick={onEdit}
      icon={<LuFolderEdit size={24} />}
    />
    <ActionButton
      id="delete-group-button"
      tooltip="Delete Group"
      aria-label={`Delete group - ${name}`}
      aria-controls={ARIA_CONTROL_GROUP_DELETE}
      className="rounded-xl p-2 hover:bg-red-600/20 active:bg-red-600/30"
      onClick={onDelete}
      variant={ActionButtonVariants.WARNING}
      icon={<TiFolderDelete size={24} />}
    />
  </div>
);
