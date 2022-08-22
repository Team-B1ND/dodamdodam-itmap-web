import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

const IS_USER_TOGGLE_AND_USER_INDEX = "ISUSERTOGGLEANDUSERINDEX";

export const isUserToggleAndUserIndex = (
  isSubNavToggle: boolean,
  isNavToggle: boolean,
  idx: number
) => {
  return {
    type: IS_USER_TOGGLE_AND_USER_INDEX,
    subNav: isSubNavToggle,
    nav: isNavToggle,
    index: idx,
  };
};

interface initalStateType {
  isSubNavToggle: boolean;
  userDataIndex: number;
  isNavToggle: boolean;
}

interface actionType {
  subNav: boolean;
  index: number;
  type: string;
  nav: boolean;
}

const initalState = {
  isSubNavToggle: false,
  isNavToggle: true,
  userDataIndex: 0,
};

const reducers = (state = initalState, action: actionType): initalStateType => {
  switch (action.type) {
    case IS_USER_TOGGLE_AND_USER_INDEX:
      return {
        isSubNavToggle: action.subNav,
        userDataIndex: action.index,
        isNavToggle: action.nav,
      };

    default:
      return state;
  }
};

const store = createStore(reducers, applyMiddleware(logger));

export default store;
