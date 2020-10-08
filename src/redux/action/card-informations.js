import axios from "axios";
export const GET_CARD_INFORMATIONS = "GET_CARD_INFORMATIONS";

const cardInformations = (informations) => ({
  type: GET_CARD_INFORMATIONS,
  informations,
});
export const PostInformations = (id, token, values, sevice) => (dispatch) => {
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
      axios.post(`https://reciclatonapi.herokuapp.com/664/services/`, sevice),
    ])
    .then(
      axios.spread(({ data }) => {
        dispatch(cardInformations(data));
      })
    )
    .catch(({ response }) => {
      console.log(response);
    });
};
