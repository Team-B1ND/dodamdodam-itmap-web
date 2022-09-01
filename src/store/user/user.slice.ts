import { createSlice } from "@reduxjs/toolkit";
import { userActionFunction } from "./user.action";
import { initialUserState } from "./user.initial";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialUserState,
  reducers: {
    user: userActionFunction,
  },
});

export const { reducer: userReducer, actions } = userSlice;
export const { user } = actions;
