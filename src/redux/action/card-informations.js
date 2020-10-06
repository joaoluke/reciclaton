import axios from "axios";

export const PostInformations = (id, token, values) => {
  axios
    .patch(
      `https://reciclatonapi.herokuapp.com/664/users/${id}`,
      `Bearer ${token}`,
      values
    )
    .catch((err) => console.log(err.response));
};
