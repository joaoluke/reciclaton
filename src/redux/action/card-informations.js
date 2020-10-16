import axios from "axios";
import {
  NotificationManager,
} from "react-notifications";
export const GET_CARDS_LIST = "GET_CARDS_LIST";
export const GET_CARD_INFORMATION = "GET_CARD_INFORMATIONS";
export const SET_CARD_MESSAGE = "SET_CARD_MESSAGE";
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
    })
};

export const getServices = () => (dispatch) => {
  axios
    .get("https://reciclatonapi.herokuapp.com/664/services/")
    .then(({ data }) => {
      dispatch(cardList(data));
    })
    .catch(({ response }) => {
    });
};
export const addService = (token, sevice) => {
  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .post(`https://reciclatonapi.herokuapp.com/664/services/`, sevice, header)
    .then(({ data }) => {
    })
    .catch(({ response }) => {
    });
};

export const getService = (status) => (dispatch) => {
  axios
    .get(`https://reciclatonapi.herokuapp.com/664/services/`, {
      params: { status_like: status },
    })
    .then(({ data }) => {
      dispatch(cardInformation(data));

    });
};

export const changeCardStatus = (id, token, service, newStatus) => {
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
      if (newStatus !== undefined) {
        NotificationManager.success(
          "Boa!!",
          "Seu card foi para " + newStatus + ", vá até a proxima seção para conferir",
          1000
        );
      }
    })
};

export const setSucessMessage = (message) => ({
  type: SET_CARD_MESSAGE,
  message,
});
