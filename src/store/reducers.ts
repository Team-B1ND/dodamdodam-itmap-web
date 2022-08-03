import { createStore } from "redux";

const IS_USER_TOGGLE_AND_USER_INDEX = "ISUSERTOGGLEANDUSERINDEX";

export const isUserToggleAndUserIndex = (isToggle: boolean, idx: number) => {
  return {
    type: IS_USER_TOGGLE_AND_USER_INDEX,
    data: isToggle,
    index: idx,
  };
};

interface initalStateType {
  isCompanyInUserToggle: boolean;
  userDataIndex: number;
}

interface actionType {
  data: boolean;
  index: number;
  type: string;
}

const initalState = {
  isCompanyInUserToggle: false,
  userDataIndex: 0,
};

const reducers = (state = initalState, action: actionType): initalStateType => {
  switch (action.type) {
    case IS_USER_TOGGLE_AND_USER_INDEX:
      return {
        isCompanyInUserToggle: action.data,
        userDataIndex: action.index,
      };

    default:
      return state;
  }
};

const store = createStore(reducers);

export default store;
