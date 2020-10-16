import {
  GET_CARDS_LIST,
  GET_CARD_INFORMATION,
  SET_CARD_MESSAGE,
} from "../action/card-informations";
const defaultState = { list: [], individual: [], message: "" };
const card = (state = defaultState, { type, information, list, message }) => {
  switch (type) {
    case GET_CARDS_LIST:
      return { ...state, list: [...list] };

    case GET_CARD_INFORMATION:
      return { ...state, individual: [...information] };

    case SET_CARD_MESSAGE:
      return { ...state, message: [...message] };
    default:
      return state;
  }
};

export default card;
