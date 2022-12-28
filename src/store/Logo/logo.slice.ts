import { createSlice } from "@reduxjs/toolkit";
import { logoActionFunction } from "./logo.action";
import { initialLogoState } from "./logo.initial";

export const logoSlice = createSlice({
  name: "logoSlice",
  initialState: initialLogoState,
  reducers: {
    logo: logoActionFunction,
  },
});

export const { reducer: logoReducer, actions } = logoSlice;
export const { logo } = actions;
