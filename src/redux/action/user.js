import axios from 'axios';

export const SET_USER = "SET_USER";

export const getPerfil = (id) => (dispatch) => {
  console.log(id)
  axios.get(`https://reciclatonapi.herokuapp.com/664/users/${id}`)
    .then(({ data }) => dispatch(setUser(data)))
    .catch(({ data }) => "")
}

const setUser = (user) => ({
  type: SET_USER,
  user
});