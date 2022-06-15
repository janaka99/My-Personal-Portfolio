import {
  LOGIN_CALL,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_CALL,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
} from "./AuthActions";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        isAuthenticated: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        user: null,
        loading: false,
        isAuthenticated: false,
        flashMessage: action.payload,
      };
    case LOGIN_CALL:
    case LOGOUT_CALL:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        flashMessage: action.payload,
        loading: false,
      };
  }
};

export default AuthReducer;
