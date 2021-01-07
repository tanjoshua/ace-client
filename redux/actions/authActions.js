import urls from "../../constants/urls";
import { LOGIN, SIGNUP } from "./types";
import axios from "axios";

export const signup = (name, email, password, type) => {
  return (dispatch) => {
    axios
      .post(urls.server + "/auth/signup", { name, email, password, type })
      .then((response) => {
        if (response.status != 200) throw new Error("Signup failed");

        // store login data in store
        dispatch({
          type: SIGNUP,
          payload: response.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    axios
      .post(urls.server + "/auth/login", { email, password })
      .then((response) => {
        if (response.status != 200) throw new Error("Signup failed");

        // store login data in store
        dispatch({
          type: SIGNUP,
          payload: response.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  };
};
