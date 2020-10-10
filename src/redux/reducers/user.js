import { SET_USER } from "../action/user";


const defaultState = {
  user: {},
};

const userPage = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action
      return { ...state, user }
    default:
      return state;
  }
};

export default userPage;
