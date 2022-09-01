import { UserInfoList } from "types/user/userData.type";

export interface UserState {
  userData: UserInfoList[];
}

export const initialUserState: UserState = {
  userData: [],
};
