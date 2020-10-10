import axios from "axios";
export const GET_CARD_INFORMATIONS = "GET_CARD_INFORMATIONS";

const cardInformations = (informations) => ({
  type: GET_CARD_INFORMATIONS,
  informations,
});

export const PostInformations = (id, token, values) => {
  const header = {
    headers: { Authotization: `Bearer ${token}` },
  };
  axios
    .patch(
      `https://reciclatonapi.herokuapp.com/664/users/${id}`,
      header,
      values
    )
    .then(({ data }) => {
      console.log(data);
    })
    .catch(({ response }) => console.log(response));
};

export const addService = (token, sevice) => {
  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .post(`https://reciclatonapi.herokuapp.com/664/services/`, sevice, header)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};

export const getService = () => (dispatch) => {
  axios
    .get("https://reciclatonapi.herokuapp.com/664/services/")
    .then(({ data }) => {
      dispatch(cardInformations(data));
    })
    .catch(({ response }) => {
      console.log(response);
    });
};
