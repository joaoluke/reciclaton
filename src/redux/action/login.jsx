import axios from "axios";
import { AppDispatch } from "../store";

export const LOGIN = "LOGIN";

interface LoginType {
  email: string;
  password: string;
}

export const loginAction = ({ email, password }: LoginType) => (
  dispatch: AppDispatch | Promise<void>
) => {
  console.log(email, password);
  axios
    .post("https://reciclatonapi.herokuapp.com/login", {
      email: email,
      password: password,
    })
    .then((resp) => dispatch(userToken(resp.data)));
};

const userToken = (token: object) => ({
  type: LOGIN,
  token,
});
