import axios from "axios";
import { userToken, ERROR, PASS } from "./login";

export const registerAction = (registerData) => (dispatch) => {
    axios
      .post("https://reciclatonapi.herokuapp.com/register", registerData)
      .then(({ data }) => {
        dispatch(userToken(data));
        dispatch(reqPass(true));
      })
      .catch(({ response }) => dispatch(reqError(response & response.data)));
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

const reqPass = (pass) => ({
  type: PASS,
  pass: pass,
});

export const reqError = (err) => ({
  type: ERROR,
  err: err,
});
