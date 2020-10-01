import { LOGIN } from "../action/login";

const token = localStorage.getItem("acessToken");

const defaultState = {
  authen: token ? token : "",
};

const authentication = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      const {
        data: { remember, accessToken },
      } = action;
      remember && localStorage.setItem("accessToken", accessToken);
      return accessToken;
    default:
      return state;
  }
};

export default authentication;
