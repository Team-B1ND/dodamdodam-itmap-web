import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { navReducer } from "./nav";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  nav: navReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
