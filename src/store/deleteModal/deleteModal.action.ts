import { PayloadAction } from "@reduxjs/toolkit";
import { DeleteModalState } from "./deleteModal.initial";

export const deleteModalActionFunction = (
  state: DeleteModalState,
  action: PayloadAction<DeleteModalState>
) => {
  state.DeleteModal = action.payload.DeleteModal;
  state.UserId = action.payload.UserId;
};
