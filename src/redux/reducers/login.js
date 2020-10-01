import { LOGIN } from "../action/login";

const token = localStorage.getItem("acessToken");

const defaultState = {
  authen: token ? token : "",
};

const authentication = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.auth;
    default:
      return state;
  }
};

export default authentication;
