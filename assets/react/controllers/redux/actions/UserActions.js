import {
  AUTHENTICATED,
  SET_ERRORS,
  CLEAR_ERRORS,
  UNAUTHENTICATED,
  IS_BUSY,
  SET_USER,
} from "../reducers/UserReducer";
import { CLEAR_MENU } from "../reducers/configReducer";

import axios from "axios";
import CONSTANTS from "../../../utils/Constants";

const publicAxios = axios.create({
  baseURL: CONSTANTS.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = (userData, navigate, from) => (dispatch) => {
  dispatch(IS_BUSY());
  publicAxios
    .post("/api/login_check", userData)
    .then((res) => {
      if (res.data.token) {
        navigate(from);
        dispatch(AUTHENTICATED(res.data));
      }
    })
    .catch((err) => {
      dispatch(SET_ERRORS(err.response?.data?.message));
    });
};

export const registerUser = (userData, navigate) => (dispatch) => {
  dispatch(IS_BUSY());
  publicAxios
    .post("/api/register", userData)
    .then((res) => {
      if (res.status === 201) {
        dispatch(
          loginUser(
            { username: userData.username, password: userData.plainPassword },
            navigate,
            "/"
          )
        );
      } else {
        dispatch(SET_ERRORS(res.data.message));
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(SET_ERRORS(err.message));
    });
};

export const resetUser = (userData, navigate) => (dispatch) => {
  dispatch(IS_BUSY());
  publicAxios
    .post("/api/reset", userData)
    .then((res) => {
      if (res.status === 200) {
        dispatch(
          loginUser(
            { username: userData.code_immatriculation, password: userData.plainPassword },
            navigate,
            "/"
          )
        );
      } else {
        dispatch(SET_ERRORS(res.data.message));
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(SET_ERRORS(err.response?.data));
    });
};

export const logoutUser = (navigate) => (dispatch) => {
  dispatch(CLEAR_MENU());
  dispatch(UNAUTHENTICATED());
};

export const setErrors = (errors) => (dispatch) => {
  dispatch(SET_ERRORS(errors));
};

export const setMe = (membre) => (dispatch) => {
  dispatch(SET_USER(membre));
};

export const getUserData = (access_token, authenticated) => (dispatch) => {
  publicAxios
    .get("/api/structure/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res) => {
      dispatch(SET_USER(res.data));
      dispatch(AUTHENTICATED(authenticated));
    })
    .catch((err) => {
      dispatch(SET_ERRORS(err.message));
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch(CLEAR_ERRORS());
};

export const loading = () => (dispatch) => {
  dispatch(IS_BUSY());
};
