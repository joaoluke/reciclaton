import axios from "axios";

export const LOGIN = "LOGIN";
export const ERROR = "ERROR";
export const PASS = "PASS";

export const loginAction = (
  { email, password, rememberme },
) => (dispatch) => {
  axios
    .post("https://reciclatonapi.herokuapp.com/login", {
      email: email,
      password: password,
    })
    .then(({ data }) => {
      dispatch(userToken(data, rememberme));
      dispatch(reqPass(true))
    })
    .catch(({ response }) => dispatch(reqError(response && response.data)));
};

export const userToken = ({ accessToken }, remember) => ({
  type: LOGIN,
  data: { accessToken, remember },
});

const reqPass = (pass) => ({
  type: PASS,
  pass: pass,
});

export const reqError = (err) => ({
  type: ERROR,
  err: err,
});
