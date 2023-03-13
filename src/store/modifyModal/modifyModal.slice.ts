import { createSlice } from "@reduxjs/toolkit";
import { modifyModalActionFunction } from "./modifyModal.action";
import { initialModifyModalState } from "./modifyModal.initial";

export const modifyModalSlice = createSlice({
  name: "modifyModal",
  initialState: initialModifyModalState,
  reducers: {
    modifyModalState: modifyModalActionFunction,
    userId: modifyModalActionFunction,
  },
});

export const { reducer: modifyReducer, actions } = modifyModalSlice;
export const { modifyModalState } = actions;
