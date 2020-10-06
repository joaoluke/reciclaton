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
      const {
        data: { remember, accessToken },
      } = action;
      remember && localStorage.setItem("accessToken", accessToken);
      return { ...state, authen: accessToken };
    case PASS:
      return { ...state, pass: action.pass };
    case ERROR:
      return { ...state, err: action.err };
    case LOGOUT:
      token && localStorage.removeItem("accessToken");
      return { ...state, authen: "" };
    default:
      return state;
  }
};

export default authentication;
