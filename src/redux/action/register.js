import axios from "axios";

const REGISTER = "REGISTER";

export const registerForm = (data, setIsOpen, setErrorText) => (dispatch) => {
  axios
    .post("https://reciclatonapi.herokuapp.com/register", data)
    .then(({ data }) => {
      dispatch(userTokenRegister(data));
      setIsOpen(false);
    })
    .catch(({ response }) => setErrorText(response && response.data));
};

export const userTokenRegister = ({ accessToken }) => ({
  type: REGISTER,
  data: { accessToken },
});
