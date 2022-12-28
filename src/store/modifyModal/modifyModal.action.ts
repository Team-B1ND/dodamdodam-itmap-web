import { PayloadAction } from "@reduxjs/toolkit";
import { ModifyModalState } from "./modifyModal.initial";

export const modifyModalActionFunction = (
  state: ModifyModalState,
  action: PayloadAction<ModifyModalState>
) => {
  state.ModifyModal = action.payload.ModifyModal;
  state.UserId = action.payload.UserId;
};
