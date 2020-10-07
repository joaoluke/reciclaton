import axios from "axios";

export const PostInformations = (id, token, values) => {
  const header = {
    headers: { Authotization: `Bearer ${token}` },
  };
  axios
    .all([
      axios.patch(
        `https://reciclatonapi.herokuapp.com/664/users/${id}`,
        header,
        values
      ),
      axios.post(`https://reciclatonapi.herokuapp.com/664/services/`, header),
    ])
    .then(
      axios.spread(({ data }) => {
        console.log(data);
      })
    )
    .catch(({ response }) => {
      console.log(response);
    });
};
