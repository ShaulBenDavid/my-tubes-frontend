import React from "react";
import { TiFolderDelete } from "react-icons/ti";
import { LuFolderEdit } from "react-icons/lu";

export const ARIA_CONTROL_GROUP_EDIT = "editGroupModal";
export const ARIA_CONTROL_GROUP_DELETE = "deleteGroupModal";

interface CardActionsProps {
  name: string;
  onDelete: () => void;
  onEdit: () => void;
}

export const CardActions = ({
  name,
  onDelete,
  onEdit,
}: CardActionsProps): JSX.Element => (
  <div>
    <button
      type="button"
      id="edit-group-button"
      aria-label={`Edit group - ${name}`}
      aria-controls={ARIA_CONTROL_GROUP_EDIT}
      className="rounded-xl p-2 hover:bg-white/20 active:bg-white/30"
      onClick={onEdit}
    >
      <LuFolderEdit size={24} />
    </button>
    <button
      type="button"
      id="delete-group-button"
      aria-label={`Delete group - ${name}`}
      aria-controls={ARIA_CONTROL_GROUP_DELETE}
      className="rounded-xl p-2 hover:bg-red-600/20 active:bg-red-600/30"
      onClick={onDelete}
    >
      <TiFolderDelete size={24} />
    </button>
  </div>
);
