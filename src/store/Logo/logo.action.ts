import { PayloadAction } from "@reduxjs/toolkit";
import { LogoState } from "./logo.initial";

export const logoActionFunction = (
  state: LogoState,
  action: PayloadAction<LogoState>
) => {
  state.textLogo = action.payload.textLogo;
};
