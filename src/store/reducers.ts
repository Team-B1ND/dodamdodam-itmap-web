import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { deleteReducer } from "./deleteModal";
import { logoReducer } from "./Logo";
import { modifyReducer } from "./modifyModal";
import { navReducer } from "./nav";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  nav: navReducer,
  user: userReducer,
  modify: modifyReducer,
  logo: logoReducer,
  delete: deleteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
