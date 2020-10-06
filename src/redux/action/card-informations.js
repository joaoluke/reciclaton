import axios from "axios";

export const PostInformations = (id, token, values) => {
  axios
    .patch(`https://reciclatonapi.herokuapp.com/664/users/${id}`, values, {
      headers: { Authotization: `Bearer ${token}` },
    })
    .catch((err) => console.log(err.response));
};
