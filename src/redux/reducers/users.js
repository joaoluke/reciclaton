import { GET_USERS } from "../action/users";
const defaultState = {
  usersArray: [],
};

const usersList = (state = defaultState, { type, users }) => {
  switch (type) {
    case GET_USERS:
      return { usersArray: [...users] };
    default:
      return state;
  }
};

export default usersList;
