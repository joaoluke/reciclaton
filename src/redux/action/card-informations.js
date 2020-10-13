import axios from "axios";
export const GET_CARDS_LIST = "GET_CARDS_LIST";
export const GET_CARD_INFORMATION = "GET_CARD_INFORMATIONS";

const cardList = (list) => ({
  type: GET_CARDS_LIST,
  list,
});

const cardInformation = (information) => ({
  type: GET_CARD_INFORMATION,
  information,
});

export const changeInformations = (id, token, values) => {
  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .patch(
      `https://reciclatonapi.herokuapp.com/664/users/${id}`,
      values,
      header
    )
    .then(({ data }) => {
      console.log(data);
    })
    .catch(({ response }) => console.log(response));
};

export const getServices = () => (dispatch) => {
  axios
    .get("https://reciclatonapi.herokuapp.com/664/services/")
    .then(({ data }) => {
      dispatch(cardList(data));
    })
    .catch(({ response }) => {
      console.log(response);
    });
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

export const getService = (id, token, service) => (dispatch) => {
  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get(
      `https://reciclatonapi.herokuapp.com/664/services/${id}`,
      service,
      header
    )
    .then(({ data }) => {
      dispatch(cardInformation(data));
    });
};

export const changeCardStatus = (id, token, service) => {
  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .patch(
      `https://reciclatonapi.herokuapp.com/664/services/${id}`,
      service,
      header
    )
    .then(({ data }) => {
      console.log(id);
    })
    .catch(({ response }) => console.log(response));
};
