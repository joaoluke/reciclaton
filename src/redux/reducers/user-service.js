import { GET_USER } from "../action/user-service";

const defaultState = [];

const userService = (state = defaultState, { business, type }) => {
  switch (type) {
    case GET_USER:
      return business;
    default:
      return state;
  }
};

export default userService;
