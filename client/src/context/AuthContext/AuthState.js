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
    // baseURL: "http://localhost:5000",
    baseURL: "https://janakachamith.herokuapp.com",
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
          payload: "Please Log In!!",
        });
      }
    } catch (error) {
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: "Please Log In!!",
      });
    }
  };

  const loadUSer = async () => {
    try {
      dispatch({
        type: LOGIN_CALL,
      });
      await API.get("/api/user").then((res) => {
        if (res.data.error) {
          dispatch({
            type: LOGOUT_SUCCESS,
            payload: "Please Log In!!",
          });
        } else {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
        }
      });
    } catch (error) {
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: "Please Log In!!",
      });
    }
  };

  const logIn = async (data) => {
    try {
      dispatch({
        type: LOGIN_CALL,
      });
      setTimeout(() => {
        API.post("/api/user/login-call", data).then((res) => {
          if (res.data.result) {
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
      }, 2000);
    } catch (error) {
      console.log("Good job 4");

      dispatch({
        type: LOGIN_FAILED,
        payload: "Username or password incorrect",
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
