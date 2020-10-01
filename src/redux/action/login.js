import axios from "axios";

export const LOGIN = "LOGIN";

export const loginAction = (
  { email, password, rememberme },
  setErrorText,
  setPush
) => (dispatch) => {
  axios
    .post("https://reciclatonapi.herokuapp.com/login", {
      email: email,
      password: password,
    })
    .then(({ data }) => {
      dispatch(userToken(data, rememberme));
      setPush(true);
    })
    .catch(({ response }) => setErrorText(response && response.data));
};

const userToken = ({ accessToken }, remember) => ({
  type: LOGIN,
  data: { accessToken, remember },
});
