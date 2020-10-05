import { SET_USER } from "../action/user";


const defaultState = {
  user: {},
};

const authentication = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return ({ ...state, user: action.user })
    default:
      return state;
  }
};

export default authentication;
