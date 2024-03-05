import {
  SET_MODE,
  SET_INFO_MESSAGE,
  CLEAR_INFO_MESSAGE,
  ADD_MENU,
  REMOVE_MENU,
  CLEAR_MENU,
} from "../reducers/configReducer";

export const changeMode = (mode) => (dispatch) => {
  dispatch(SET_MODE(mode === "light" ? "dark" : "light"));
};

export const setInfoMsg = (message) => (dispatch) => {
  dispatch(SET_INFO_MESSAGE(message));
};

export const addMenuBread = (menu) => (dispatch) => {
  dispatch(ADD_MENU(menu));
};

export const removeMenuBread = (item) => (dispatch) => {
  dispatch(REMOVE_MENU(item));
};

export const clearMenuBread = () => (dispatch) => {
  dispatch(CLEAR_MENU());
};

export const clearInfoMsg = () => (dispatch) => {
  dispatch(CLEAR_INFO_MESSAGE());
};
