export interface NavState {
  isSubNavToggle: boolean;
  isNavToggle: boolean;
}

export const initialNavState: NavState = {
  isSubNavToggle: false,
  isNavToggle: true,
};
