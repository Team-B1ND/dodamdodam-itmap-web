import { createStore } from "redux";

const ISCOMPANYINUSERTOGGLE = "ISCOMPANYINUSERTOGGLE";

export const isCompanyInUserToggle = (isToggle: boolean) => ({
  type: ISCOMPANYINUSERTOGGLE,
  data: isToggle,
});

const initalState = {
  isCompanyInUserToggle: false,
};

const reducers = (state = initalState, action: any) => {
  switch (action.type) {
    case ISCOMPANYINUSERTOGGLE:
      return {
        ...isCompanyInUserToggle,
        isCompanyInUserToggle: action.data,
      };

    default:
      return state;
  }
};

const store = createStore(reducers);

export default store;
