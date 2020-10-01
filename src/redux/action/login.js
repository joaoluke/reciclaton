import axios from "axios";

export const LOGIN = "LOGIN";

export const loginAction = ({ email, password, rememberme }, setErrorText) => (
  dispatch
) => {
  axios
    .post("https://reciclatonapi.herokuapp.com/login", {
      email: email,
      password: password,
    })
    .then((resp) => {
      dispatch(userToken(resp.data, rememberme));
    })
    .catch((err) => setErrorText(err.response.data));
};

const userToken = (data) => ({
  type: LOGIN,
  data: data,
});
