import {
  loginState,
  OTPState,
  tokenState
} from "./action";

const defaulToken = null;

const defaultLogin = {
  error: null,
  loading: false,
  success: null,
  not_found: false
};

const defaultOTP = {
  error: null,
  loading: false,
  success: null
};

export const token = (state = defaulToken, action) => {
  switch (action.type) {
    case tokenState.DONE:
      const tokenData = Array.isArray(action.data)
        ? action.data[0]
        : action.data;
      return {
        token: tokenData.access_token,
        username: tokenData.userName
      };
    case tokenState.CLEAR:
      return defaulToken;
    default:
      return state;
  }
};

export const login = (state = defaultLogin, action) => {
  switch (action.type) {
    case loginState.ERROR:
      return { ...state, error: action.state };
    case loginState.LOADING:
      return { ...state, loading: action.state };
    case loginState.SUCCESS:
      return { ...state, success: action.state };
    case loginState.NOT_FOUND:
       return { ...state, not_found: action.state };
    default:
      return state;
  }
};


export const otp = (state = defaultOTP, action) => {
  switch (action.type) {
    case OTPState.ERROR:
      return { ...state, error: action.state };
    case OTPState.LOADING:
      return { ...state, loading: action.state };
    case OTPState.SUCCESS:
      return { ...state, success: action.state };
    default:
      return state;
  }
};

