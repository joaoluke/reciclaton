import axios from "axios";

const REGISTER = "REGISTER";

export const registerForm = (data) => (dispatch) => {
  axios
    .post("https://reciclatonapi.herokuapp.com/register", data)
    .then((resp) => console.log(resp.data))
    .catch((err) => console.log(err.response.data));
};
