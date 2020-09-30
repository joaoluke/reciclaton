import { LOGIN } from "../action/login";

const defaultState = {
  authen: "",
};

const authentication = (state = defaultState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return action.auth;
    default:
      return state;
  }
};

export default authentication;
