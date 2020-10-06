import { GET_USER } from "../action/user";

const defaultState = [];

const user = (state = defaultState, { type, business }) => {
  switch (type) {
    case GET_USER:
      return [...business];
    default:
      return state;
  }
};

export default user;
