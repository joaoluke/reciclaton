import axios from 'axios';

export const USERS = 'USERS';

export const getBusiness = () => (dispatch) => {
  axios
    .get("https://reciclatonapi.herokuapp.com/664/users")
    .then((res) => {
      dispatch(usersData(res.data));
    })
    .catch(({ error }) => { });
}

const usersData = (data) => ({
  type: USERS,
  users: data,
})