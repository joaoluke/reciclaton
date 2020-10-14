import { LOGIN, PASS, ERROR, LOGOUT } from "../action/login";

const token = localStorage.getItem("accessToken");

const defaultState = {
  authen: token ? token : "",
  pass: false,
  err: "",
};

const authentication = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      const { data } = action;
      data.remember && localStorage.setItem("accessToken", data.accessToken);
      return { ...state, authen: data.accessToken };
    case PASS:
      return { ...state, pass: action.pass };
    case ERROR:
      return { ...state, err: action.err };
    case LOGOUT:
      token && localStorage.removeItem("accessToken");
      return { ...state, ...defaultState };
    default:
      return state;
  }
};

export default authentication;
