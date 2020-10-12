import { GET_USER } from "../action/user";

const defaultState = {
  user: {},
};

const user = (state = defaultState, { business, type }) => {
  switch (type) {
    case GET_USER:
      return business;
    default:
      return state;
  }
};

export default user;
