import Axios from "axios";

export const GET_USERS = "GET_USERS";

const getUserList = (users) => ({
  type: GET_USERS,
  users,
});

export const requestUsers = () => (dispatch) => {
  Axios.get("https://reciclatonapi.herokuapp.com/664/users")
    .then(({ data }) => {
      dispatch(getUserList(data));
    })
};
