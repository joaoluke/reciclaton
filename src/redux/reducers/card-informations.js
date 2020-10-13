import {
  GET_CARDS_LIST,
  GET_CARD_INFORMATION,
} from "../action/card-informations";
const defaultState = { list: [], individual: [] };
const card = (state = defaultState, { type, information, list }) => {
  switch (type) {
    case GET_CARDS_LIST:
      return { ...state, list: [...list] };

    case GET_CARD_INFORMATION:
      return { ...state, individual: [...information] };

    default:
      return state;
  }
};

export default card;
