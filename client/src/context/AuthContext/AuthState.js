import React, { useEffect, useReducer } from "react";
import axios from "axios";
import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";

import {
  LOGIN_CALL,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_CALL,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
} from "./AuthActions";

const AuthState = (props) => {
  const initialState = {
    user: null,
    loading: false,
    isAuthenticated: false,
    flashMessage: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //LOG IN Call
  const API = axios.create({
    baseURL: "https://janakachamith.herokuapp.com/",
    methodsL: ["GET", "PUT", "POST"],
  });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
    }
    console.log(req);
    return req;
  });

  const checkUser = async () => {
    try {
      if (localStorage.getItem("user")) {
        setTimeout(() => {
          loadUSer();
        });
      } else {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      }
    } catch (error) {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    }
  };

  const loadUSer = async () => {
    console.log("Good job 1");

    try {
      dispatch({
        type: LOGIN_CALL,
      });
      console.log("Good job 2");
      await API.get("/api/user").then((res) => {
        if (res.data.error) {
          console.log("Good job 3");

          dispatch({
            type: LOGOUT_SUCCESS,
          });
        } else {
          console.log("Good job 4");

          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
        }
      });
    } catch (error) {
      console.log("Good job 5");

      dispatch({
        type: LOGOUT_SUCCESS,
      });
    }
  };

  const logIn = async (data) => {
    try {
      // dispatch({
      //   type: LOGIN_CALL,
      // });
      setTimeout(() => {
        API.post("/api/user/login-call", data).then((res) => {
          if (res.data.token) {
            console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            dispatch({
              type: LOGIN_SUCCESS,
              payload: res.data,
            });
          } else {
            dispatch({
              type: LOGIN_FAILED,
              payload: res.data,
            });
          }
        });
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILED,
      });
    }
  };

  const register = (data) => {
    try {
      API.post("/api/user/register-user", data).then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.result,
        });
      });
    } catch (error) {
      console.log(Error);
    }
  };

  const logOut = () => {
    try {
      if (localStorage.getItem("user")) {
        localStorage.clear();
      }
    } catch (error) {}
  };
  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        flashMessage: state.flashMessage,
        logIn,
        register,
        logOut,
        loadUSer,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
