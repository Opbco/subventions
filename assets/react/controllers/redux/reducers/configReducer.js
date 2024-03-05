import { createSlice } from "@reduxjs/toolkit";

const initialConfig = {
  mode: "light",
  infoMessage: "",
  snackOpen: false,
  infoSeverity: "info",
  menuo: [],
};

const configSclice = createSlice({
  name: "config",
  initialState: initialConfig,
  reducers: {
    SET_MODE: (state, action) => {
      return {
        ...state,
        mode: action.payload,
      };
    },
    SET_INFO_MESSAGE: (state, action) => {
      return {
        ...state,
        infoMessage: action.payload.message,
        snackOpen: true,
        infoSeverity: action.payload.severity,
      };
    },
    CLEAR_INFO_MESSAGE: (state, action) => {
      return {
        ...state,
        infoMessage: "",
        snackOpen: false,
        infoSeverity: "info",
      };
    },
    REMOVE_MENU: (state, action) => {
      return {
        ...state,
        menuo: [...state.menuo.filter((_, i) => i !== action.payload)],
      };
    },
    ADD_MENU: (state, action) => {
      const present = state.menuo.some((menu) => menu.to == action.payload.to);
      return {
        ...state,
        menuo: present ? state.menuo : [...state.menuo, action.payload],
      };
    },
    CLEAR_MENU: (state, action) => {
      return {
        ...state,
        menuo: [],
      };
    },
  },
});

export const {
  SET_MODE,
  SET_INFO_MESSAGE,
  CLEAR_INFO_MESSAGE,
  REMOVE_MENU,
  ADD_MENU,
  CLEAR_MENU,
} = configSclice.actions;

export default configSclice.reducer;
