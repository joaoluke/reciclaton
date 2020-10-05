import axios from 'axios';

export const SET_USER = "SET_USER";

export const getPerfil = (id) => (dispatch) => {
  axios.get("https://reciclatonapi.herokuapp.com/664/users/" + id)
    .then(({ data }) => dispatch(setUser(data)))
    .catch(({ data }) => console.log(data))
}

const setUser = (userData) => ({

  type: SET_USER,
  user: userData
})