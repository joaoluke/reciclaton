import { LOGIN, PASS, ERROR } from "../action/login";

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
    default:
      return state;
  }
};

export default authentication;
