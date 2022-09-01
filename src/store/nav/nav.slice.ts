import { createSlice } from "@reduxjs/toolkit";
import { navActionFunction } from "./nav.action";
import { initialNavState } from "./nav.initial";

export const navSlice = createSlice({
  name: "navSlice",
  initialState: initialNavState,
  reducers: {
    nav: navActionFunction,
  },
});

export const { reducer: navReducer, actions } = navSlice;
export const { nav } = actions;
