import { PayloadAction } from "@reduxjs/toolkit";
import { UserInfoList } from "types/user/userData.type";
import { UserState } from "./user.initial";

export const userActionFunction = (
  state: UserState,
  action: PayloadAction<UserInfoList[]>
) => {
  state.userData = action.payload;
};
