import { PayloadAction } from "@reduxjs/toolkit";
import { NavState } from "./nav.initial";

export const navActionFunction = (
  state: NavState,
  action: PayloadAction<NavState>
) => {
  state.isNavToggle = action.payload.isNavToggle;
  state.isSubNavToggle = action.payload.isSubNavToggle;
};
