import { createSlice } from "@reduxjs/toolkit";
import { deleteModalActionFunction } from "./deleteModal.action";
import { initialDeleteModalState } from "./deleteModal.initial";

export const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState: initialDeleteModalState,
  reducers: {
    deleteModalState: deleteModalActionFunction,
    userId: deleteModalActionFunction,
  },
});

export const { reducer: deleteReducer, actions } = deleteModalSlice;
export const { deleteModalState } = actions;
